// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesCreateStuffAndAdditions(event: $RecipesEventJS) {
	/**
	 * Removes
	 */
	const blazRose = ["blazing", "rose_quartz"];
	blazRose.forEach((type) => {
		event.remove({ output: `create_sa:${type}_pickaxe` });
		event.remove({ output: `create_sa:${type}_shovel` });
		event.remove({ output: `create_sa:${type}_axe` });
		event.remove({ output: `create_sa:${type}_sword` });
	});
	event.remove({ output: `create_sa:blazing_cleaver` });
	const createSaMat = ["brass", "zinc", "copper"];
	createSaMat.forEach((type) => {
		event.remove({ output: `create_sa:${type}_pickaxe` });
		event.remove({ output: `create_sa:${type}_shovel` });
		event.remove({ output: `create_sa:${type}_axe` });
		event.remove({ output: `create_sa:${type}_sword` });
		event.remove({ output: `create_sa:${type}_hoe` });
		event.remove({ output: `create_sa:${type}_helmet` });
		event.remove({ output: `create_sa:${type}_chestplate` });
		event.remove({ output: `create_sa:${type}_leggings` });
		event.remove({ output: `create_sa:${type}_boots` });
	});

	/**
	 * Misc Recipes
	 */

	event.remove({ output: "create_sa:copper_magnet" });
	event
		.shaped("create_sa:copper_magnet", ["M M", " R "], {
			M: "#tfc:magnetic_rocks",
			R: "tfc:metal/ingot/copper",
		})
		.id("setsu:create_sa/copper_magnet");
	event.replaceInput(
		{ id: "create_sa:brass_drill_head_recipe" },
		"create_sa:brass_pickaxe",
		"#immersiveengineering:drillheads"
	);

	/**
	 * Engines
	 */

	event.remove({ output: "create_sa:steam_engine" });
	event
		.shaped("create_sa:steam_engine", ["XEP", "LBL", "OSI"], {
			P: "create:precision_mechanism",
			E: "#forge:electron_tube",
			L: "create:brass_sheet",
			B: "create:brass_casing",
			O: "create:andesite_alloy",
			S: "create_sa:small_filling_tank",
			X: "create_sa:small_fueling_tank",
			I: "minecraft:iron_nugget",
		})
		.id("setsu:create_sa/steam_engine");

	event.remove({ output: "create_sa:heat_engine" });
	event
		.shaped("create_sa:heat_engine", [" EP", "OAO", "OSI"], {
			P: "create:precision_mechanism",
			E: "#forge:electron_tube",
			O: "create:andesite_alloy",
			A: "create:andesite_casing",
			S: "create_sa:small_fueling_tank",
			I: "immersiveengineering:nugget_copper",
		})
		.id("setsu:create_sa/heat_engine");

	event.remove({ output: "create_sa:hydraulic_engine" });
	event
		.shaped("create_sa:hydraulic_engine", [" EP", "LCL", "OSI"], {
			P: "create:precision_mechanism",
			E: "#forge:electron_tube",
			L: "immersiveengineering:plate_copper",
			C: "create:copper_casing",
			O: "create:andesite_alloy",
			S: "create_sa:small_filling_tank",
			I: "minecraft:iron_nugget",
		})
		.id("setsu:create_sa/hydraulic_engine");

	/**
	 * CreateAddition Mod
	 */

	event.remove({ output: "createaddition:diamond_grit_sandpaper" });
	event
		.shapeless("createaddition:diamond_grit_sandpaper", [
			"minecraft:paper",
			"tfc:powder/flux",
			"tfc:glue",
			"tfc:sand/yellow",
			"#forge:dusts/diamond",
		])
		.id("setsu:addition/diamond_grit_sandpaper");
}
