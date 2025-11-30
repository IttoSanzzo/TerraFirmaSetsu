import esbuild from "esbuild";
import { glob } from "glob";
import fs from "fs-extra";
import chokidar from "chokidar";
import * as path from "path";
import { format } from "prettier";
// import util from "util";
// import { exec } from "child_process";
// const execAsync = util.promisify(exec);

function parseArgs() {
	const args = process.argv.slice(2);
	const out = {};
	for (let i = 0; i < args.length; i++) {
		const key = args[i];
		if (key.startsWith("--")) {
			const name = key.slice(2);
			const value = args[i + 1] && !args[i + 1].startsWith("--")
				? args[++i]
				: true;
			out[name] = value;
		}
	}
	return out;
}

const args = parseArgs();

const SRC = args.src || "./src";
const OUT = args.out || "./dist";
const CACHE_FILE = args.cache || path.join(".buildcache.json");

let cache = await loadCache();

// --- Cache helpers -------------------------------------------------

async function loadCache() {
	if (!await fs.pathExists(CACHE_FILE)) return {};
	return JSON.parse(await fs.readFile(CACHE_FILE, "utf8"));
}
async function saveCache(newCache) {
	cache = newCache;
	await fs.writeFile(CACHE_FILE, JSON.stringify(newCache, null, 2), "utf8");
}
async function getMTime(file) {
	return (await fs.stat(file)).mtimeMs;
}
async function checkStale(oldRelative, newCache) {
	if (!newCache[oldRelative]) {
		const outFile = path.join(OUT, oldRelative.replace(/\.ts$/, ".js"));
		if (await fs.pathExists(outFile)) {
			console.log(`\t\tRemoving stale file [${oldRelative}]`);
			await fs.remove(outFile);
		}
	}
}

async function needsUpdate(cache, srcFile, fileRelativePath) {
	const currentMtime = await getMTime(srcFile);

	if (!cache[fileRelativePath]) return true;
	if (cache[fileRelativePath].mtime !== currentMtime) return true;

	return false;
}

// --- Processors ----------------------------------------------------

// async function checkTsTypes(filePath) {
// 	const tempName = ".tsconfig.check.json";
// 	const absFile = path.resolve(filePath);
// 	const rel = path.relative(process.cwd(), absFile).replace(/\\/g, "/");

// 	const tempConfig = {
// 		extends: "./tsconfig.json",
// 		files: [rel]
// 	};

// 	await fs.writeFile(tempName, JSON.stringify(tempConfig, null, 2), "utf8");

// 	try {
// 		await execAsync(`npx tsc --project ${tempName} --noEmit`);
// 		return true;
// 	} catch (err) {
// 		console.error("\t\t\t✖ TypeScript error in:", filePath);
// 		console.error(err.stderr || err.stdout || err.message);
// 		return false;
// 	} finally {
// 		await fs.remove(tempName);
// 	}
// }

// async function checkTsTypes(filePath) {
// 	try {
// 		await execAsync(`npx tsc --pretty false --noEmit "${filePath}"`);
// 		return true;
// 	} catch (err) {
// 		console.error("\t\t\t✖ TypeScript error in:", filePath);
// 		console.error(`\t\t\t\t${err.stderr || err.stdout || err.message}`);
// 		return false;
// 	}
// }
async function postProcessTsFileTasks(tsFilePath, jsFilePath) {
	const tsCode = await fs.readFile(tsFilePath, "utf8");
	let jsCode = await fs.readFile(jsFilePath, "utf8");

	const topCommentMatch = tsCode.match(/^\s*\/\/\s*priority:\s*\d+/);
	const topComment = topCommentMatch ? topCommentMatch[0] : "";
	if (topComment)
		jsCode = jsCode.replace(/^("use strict";\n)?/, `${topComment}\n"use strict";\n`);
	const formatted = await format(jsCode, { parser: "babel" });
	await fs.writeFile(jsFilePath, formatted);
}

async function processTsFile(filePath, fileRelativePath) {
	console.log(`\t\tCompiling js [${fileRelativePath}]`);

	// if (!(await checkTsTypes(filePath))) {
	// 	console.log(`\t\t\tSkipping build due to TS errors.`);
	// 	return { ok: false };
	// }

	const jsOutFilePath = path.join(OUT, fileRelativePath.replace(/\.ts$/, ".js"));
	const outDir = path.dirname(jsOutFilePath);

	try {
		await fs.mkdirp(outDir);

		await esbuild.build({
			entryPoints: [filePath],
			outfile: jsOutFilePath,
			bundle: false,
			format: "iife",
			platform: "neutral",
			target: "es2017",
			charset: "utf8",
			sourcemap: false,
			minify: false,
			legalComments: "none",
			logLevel: "silent"
		});

		await postProcessTsFileTasks(filePath, jsOutFilePath);

		return { ok: true };
	} catch (ex) {
		console.error(`\t\t\tBuild FAILED for [${fileRelativePath}]`);
		console.error(`\t\t\t${ex.message || ex}`);
		if (await fs.pathExists(jsOutFilePath))
			await fs.remove(jsOutFilePath);
		return { ok: false, error: ex }
	}
}
async function processNonTsFile(filePath, fileRelativePath) {
	console.log(`\t\tCopying asset [${fileRelativePath}]`);
	const outFile = path.join(OUT, fileRelativePath);
	await fs.mkdirp(path.dirname(outFile));
	await fs.copyFile(filePath, outFile);
}
async function processFile(file, newCache) {
	const fileRelativePath = path.relative(SRC, file);
	const mtime = await getMTime(file);
	newCache[fileRelativePath] = { mtime };

	if (!(await needsUpdate(cache, file, fileRelativePath)))
		return;
	if (file.endsWith(".d.ts")) {
		console.log(`\t\tSkipping type declaration file ${fileRelativePath}`);
		return;
	}
	else if (file.endsWith(".ts")) {
		const result = await processTsFile(file, fileRelativePath);
		if (!result.ok) return;
	}
	else if (!file.endsWith(".js"))
		await processNonTsFile(file, fileRelativePath)
}

// --- Main build ----------------------------------------------------

async function fullCompile() {
	console.log("Running full build...");

	// await fs.remove(OUT);
	await fs.mkdirp(OUT);
	console.log("\tOutput directory setup done.");

	const newCache = {};

	const allFiles = glob.sync(`${SRC}/**/*`, { nodir: true, ignore: [`${SRC}/types/**`] });
	console.log("\tFile discovery done.");

	await Promise.all(
		allFiles.map(async file => await processFile(file, newCache)));
	await Promise.all(
		Object.keys(cache).map(async oldRelative => await checkStale(oldRelative, newCache))
	);

	await saveCache(newCache);

	console.log("Build concluded.");
}

// --- Incremental compile for watch mode ----------------------------

let running = false;
let queued = false;

async function safeCompile(file) {
	if (running) {
		queued = true;
		return;
	}
	running = true;

	console.log(`\tChange detected [${file}]`);
	const relative = path.relative(SRC, file);

	if (await fs.pathExists(file)) {
		const newCacheEntry = {};
		await processFile(file, newCacheEntry);
		cache[relative] = newCacheEntry[relative];
		await saveCache(cache);
	} else {
		console.log(`\t\tFile deleted [${relative}]`);
		const outFile = path.join(OUT, relative.replace(/\.ts$/, ".js"));
		if (await fs.pathExists(outFile))
			await fs.remove(outFile);
		delete cache[relative];
		await saveCache(cache);
	}
	console.log(`\tUpdate completed ${new Date().toLocaleTimeString("pt-BR", { hour12: false })}`);

	running = false;
	if (queued) {
		queued = false;
		await fullCompile();
	}
}

function startWatch() {
	console.log("Watcher activated. Listening for changes...");

	const watcher = chokidar.watch(SRC, {
		ignoreInitial: true,
		persistent: true,
		usePolling: true,
		interval: 100,
		ignorePermissionErrors: true,
		depth: 99,
		ignored: `${SRC}/types`
	})
	watcher
		.on("add", async (path) => await safeCompile(path))
		.on("change", async (path) => await safeCompile(path))
		.on("unlink", async (path) => await safeCompile(path))
		.on("unlinkDir", async (path) => await safeCompile(path));
}

// --- Entrypoint ----------------------------------------------------

const WATCH = Boolean(args.watch);

if (!WATCH)
	fullCompile();
else
	fullCompile().then(() => startWatch());