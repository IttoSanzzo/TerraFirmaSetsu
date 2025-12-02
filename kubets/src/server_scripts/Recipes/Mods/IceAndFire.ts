// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesIceAndFire(event: $RecipesEventJS) {
	const addDragonForge = (
		output: Special.Item | OmniString,
		ingredient1: Special.Item | OmniString,
		ingredient2: Special.Item | OmniString,
		type: "lightning" | "fire" | "ice"
	) => {
		event
			.custom({
				type: "iceandfire:dragonforge",
				dragon_type: type,
				cook_time: 1000,
				result: {
					item: output,
				},
				input: {
					item: ingredient1,
				},
				blood: {
					item: ingredient2,
				},
			})
			.id(
				`setsu:iceandfire/dragonforge/${type}/${output.replace(":", "_").replace("/", "_")}`
			);
	};
	function removeAll(filter: string) {
		event.remove([{ input: filter }, { output: filter }]);
	}
	const removals = [
		"iceandfire:armor_copper_metal_helmet",
		"iceandfire:armor_copper_metal_chestplate",
		"iceandfire:armor_copper_metal_leggings",
		"iceandfire:armor_copper_metal_boots",
		"iceandfire:copper_sword",
		"iceandfire:copper_shovel",
		"iceandfire:copper_pickaxe",
		"iceandfire:copper_axe",
		"iceandfire:copper_hoe",
	];
	removals.forEach((item) => {
		removeAll(item);
	});

	const reForge = (
		output: string,
		ingredient: string,
		form: string[],
		tier: number,
		id?: string
	) => {
		event.remove({ id: id != undefined ? id : output });
		event.recipes.tfc
			.anvil(output, ingredient, form)
			.tier(tier)
			.bonus(true)
			.id(`setsu:iceandfire/smithing/${output.replace(":", "/")}`);
	};

	/**
	 * Replace Inputs
	 */

	event.replaceInput(
		{ id: "iceandfire:dragonbone_sword" },
		"iceandfire:witherbone",
		"tfc:metal/rod/black_steel"
	);
	event.replaceInput(
		{ id: "iceandfire:dragonbone_shovel" },
		"iceandfire:witherbone",
		"tfc:metal/rod/black_steel"
	);
	event.replaceInput(
		{ id: "iceandfire:dragonbone_pickaxe" },
		"iceandfire:witherbone",
		"tfc:metal/rod/black_steel"
	);
	event.replaceInput(
		{ id: "iceandfire:dragonbone_axe" },
		"iceandfire:witherbone",
		"tfc:metal/rod/black_steel"
	);
	event.replaceInput(
		{ id: "iceandfire:dragonbone_hoe" },
		"iceandfire:witherbone",
		"tfc:metal/rod/black_steel"
	);

	event.replaceInput(
		{ mod: "iceandfire" },
		"tfc:food/cooked_beef",
		"#tfc:foods/meats"
	);
	event.replaceInput(
		{ mod: "iceandfire" },
		"minecraft:poisonous_potato",
		"tfc:food/potato"
	);

	/**
	 * Reforges
	 */

	reForge(
		"iceandfire:armor_silver_metal_helmet",
		"tfc:metal/double_sheet/sterling_silver",
		["hit_last", "bend_second_last", "bend_third_last"],
		1
	);
	reForge(
		"iceandfire:armor_silver_metal_chestplate",
		"tfc:metal/double_sheet/sterling_silver",
		["hit_last", "hit_second_last", "upset_third_last"],
		1
	);
	reForge(
		"iceandfire:armor_silver_metal_leggings",
		"tfc:metal/double_sheet/sterling_silver",
		["bend_any", "draw_any", "hit_any"],
		1
	);
	reForge(
		"iceandfire:armor_silver_metal_boots",
		"tfc:metal/double_sheet/sterling_silver",
		["bend_last", "bend_second_last", "shrink_third_last"],
		1
	);
	reForge(
		"iceandfire:silver_sword",
		"tfc:metal/double_ingot/sterling_silver",
		["hit_last", "bend_second_last", "bend_third_last"],
		1
	);
	reForge(
		"iceandfire:silver_shovel",
		"tfc:metal/ingot/sterling_silver",
		["punch_last", "hit_not_last"],
		1
	);
	reForge(
		"iceandfire:silver_pickaxe",
		"tfc:metal/ingot/sterling_silver",
		["punch_last", "bend_second_last", "draw_third_last"],
		1
	);
	reForge(
		"iceandfire:silver_axe",
		"tfc:metal/ingot/sterling_silver",
		["punch_last", "hit_second_last", "upset_third_last"],
		1
	);
	reForge(
		"iceandfire:silver_hoe",
		"tfc:metal/ingot/sterling_silver",
		["punch_last", "hit_second_last", "bend_third_last"],
		1
	);

	/**
	 * Dragon Forge
	 */

	event.remove({ id: "iceandfire:dragonforge/dragonsteel_fire_ingot" });
	event.remove({ id: "iceandfire:dragonforge/dragonsteel_ice_ingot" });
	event.remove({ id: "iceandfire:dragonforge/dragonsteel_lightning_ingot" });
	event.remove({ id: "iceandfire:dragonbone_sword_fire" });
	event.remove({ id: "iceandfire:dragonbone_sword_ice" });
	event.remove({ id: "iceandfire:dragonbone_sword_lightning" });
	event.remove({ id: "iceandfire:ghost_sword" });

	addDragonForge(
		"iceandfire:dragonsteel_fire_ingot",
		"kubejs:metal/ingot/purple_steel",
		"iceandfire:fire_dragon_blood",
		"fire"
	);
	addDragonForge(
		"iceandfire:dragonsteel_ice_ingot",
		"kubejs:metal/ingot/purple_steel",
		"iceandfire:ice_dragon_blood",
		"ice"
	);
	addDragonForge(
		"iceandfire:dragonsteel_lightning_ingot",
		"kubejs:metal/ingot/purple_steel",
		"iceandfire:lightning_dragon_blood",
		"lightning"
	);
	addDragonForge(
		"iceandfire:dragonbone_sword_fire",
		"iceandfire:dragonbone_sword",
		"iceandfire:fire_dragon_blood",
		"fire"
	);
	addDragonForge(
		"iceandfire:dragonbone_sword_ice",
		"iceandfire:dragonbone_sword",
		"iceandfire:ice_dragon_blood",
		"ice"
	);
	addDragonForge(
		"iceandfire:dragonbone_sword_lightning",
		"iceandfire:dragonbone_sword",
		"iceandfire:lightning_dragon_blood",
		"lightning"
	);
	addDragonForge(
		"iceandfire:ghost_sword",
		"iceandfire:dragonbone_sword",
		"iceandfire:ghost_ingot",
		"fire"
	);
	addDragonForge(
		"iceandfire:ghost_sword",
		"iceandfire:dragonbone_sword",
		"iceandfire:ghost_ingot",
		"ice"
	);
	addDragonForge(
		"iceandfire:ghost_sword",
		"iceandfire:dragonbone_sword",
		"iceandfire:ghost_ingot",
		"lightning"
	);

	/**
	 * Dragon Scale
	 */

	const remakeAllArmor = (type, color, scale, ingot) => {
		event.remove({ id: `iceandfire:${type}_${color}_helmet` });
		event.remove({ id: `iceandfire:${type}_${color}_chestplate` });
		event.remove({ id: `iceandfire:${type}_${color}_leggings` });
		event.remove({ id: `iceandfire:${type}_${color}_boots` });
		event
			.shaped(`iceandfire:${type}_${color}_helmet`, ["SSS", "SXS"], {
				S: scale,
				X: `tfc:metal/helmet/${ingot}`,
			})
			.id(`setsu:iceandfire/armor/${type}_${color}_helmet`);
		event
			.shaped(`iceandfire:${type}_${color}_chestplate`, ["SXS", "SSS", "SSS"], {
				S: scale,
				X: `tfc:metal/chestplate/${ingot}`,
			})
			.id(`setsu:iceandfire/armor/${type}_${color}_chestplate`);
		event
			.shaped(`iceandfire:${type}_${color}_leggings`, ["SSS", "SXS", "S S"], {
				S: scale,
				X: `tfc:metal/greaves/${ingot}`,
			})
			.id(`setsu:iceandfire/armor/${type}_${color}_leggings`);
		event
			.shaped(`iceandfire:${type}_${color}_boots`, ["SXS", "S S"], {
				S: scale,
				X: `tfc:metal/boots/${ingot}`,
			})
			.id(`setsu:iceandfire/armor/${type}_${color}_boots`);
	};

	const dragonScaleColors = [
		"red",
		"bronze",
		"green",
		"gray",
		"blue",
		"white",
		"sapphire",
		"silver",
		"electric",
		"amythest",
		"copper",
		"black",
	];
	dragonScaleColors.forEach((color) => {
		remakeAllArmor(
			"armor",
			color,
			`iceandfire:dragonscales_${color}`,
			"red_steel"
		);
	});

	const seaSerpentScaleColors = [
		"blue",
		"bronze",
		"deepblue",
		"green",
		"purple",
		"red",
		"teal",
	];
	seaSerpentScaleColors.forEach((color) => {
		remakeAllArmor(
			"tide",
			color,
			`iceandfire:sea_serpent_scales_${color}`,
			"blue_steel"
		);
	});
}
