import fs from "fs";
import path from "path";

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

const ROOT = args.root || path.resolve("./dist");
const serverDir = path.join(ROOT, "server_scripts");
const clientDir = path.join(ROOT, "client_scripts");
const startupDir = path.join(ROOT, "startup_scripts");

function getAllJsFilesRecursive(dir) {
	let results = [];
	const items = fs.readdirSync(dir, { withFileTypes: true });
	for (const item of items) {
		const fullPath = path.join(dir, item.name);
		if (item.isDirectory())
			results = results.concat(getAllJsFilesRecursive(fullPath));
		else if (item.isFile() && item.name.endsWith(".js"))
			results.push(fullPath);
	}
	return results;
}

function loadScriptsWithPriority(dir) {
	const files = getAllJsFilesRecursive(dir);
	return files
		.map(filePath => {
			let content = fs.readFileSync(filePath, "utf8");
			const relativePath = path
				.relative(dir, filePath)
				.replace(/\\/g, "/");
			let priority = -1;
			const priorityMatch = content.match(/^\/\/\s*priority:\s*(\d+)/i);
			if (priorityMatch) priority = parseInt(priorityMatch[1], 10);
			content = content.replace(/^\/\/\s*priority:\s*\d+\s*\n/i, "");
			content = content.replace(/^(?:"use strict"|\'use strict\')\s*;?\s*\n/, "");
			return {
				filePath: relativePath,
				content,
				priority
			};
		})
		.sort((a, b) => b.priority - a.priority);
}

function removeEmptyDirs(root) {
	function walk(dir) {
		let isEmpty = true;
		for (const entry of fs.readdirSync(dir)) {
			const full = path.join(dir, entry);
			if (fs.statSync(full).isDirectory()) {
				if (!walk(full))
					isEmpty = false;
			} else {
				isEmpty = false;
			}
		}
		if (dir !== root && isEmpty) {
			fs.rmdirSync(dir);
			return true;
		}
		return isEmpty;
	}
	walk(root);
}

export function generateBundle(dir, bundleFileName) {
	const scripts = loadScriptsWithPriority(dir);
	let output = "";
	for (const script of scripts)
		output += `// ----- FILE: ${script.filePath} | priority: ${script.priority} -----\n${script.content}\n\n`;
	const outPath = path.join(dir, bundleFileName);
	fs.writeFileSync(outPath, output, "utf8");
	for (const file of getAllJsFilesRecursive(dir))
		if (path.resolve(file) !== path.resolve(outPath))
			fs.unlinkSync(file);
	removeEmptyDirs(dir);
	console.log(`✔ Bundle generated: ${outPath}`);
}

generateBundle(serverDir, path.join("server_scripts_bundle.js"));
generateBundle(clientDir, path.join("client_scripts_bundle.js"));
generateBundle(startupDir, path.join("startup_scripts_bundle.js"));

console.log("Bundling completed.");