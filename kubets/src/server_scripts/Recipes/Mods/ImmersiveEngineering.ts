// priority: 198

const setClocheRecipes = (event) => {
	event.remove({ mod: "tfc_ie_addon", type: "immersiveengineering:cloche" });
	const addClocheRecipe = (output, amount, seed, soil, render, time) => {
		event.custom({
			type: "immersiveengineering:cloche",
			results: [
				{
					item: output,
					modifiers: ["tfc:copy_oldest_food"],
					count: amount
				},
				{
					item: seed,
					count: 1
				}
			],
			input: {
				item: seed
			},
			soil: {
				tag: soil
			},
			render: {
				type: "generic",
				block: render
			},
			time: time
		}).id(`setsu:immersiveengineering/cloche/${seed.replace(":", "/").replace("/", ".")}`)
	}

	addClocheRecipe("tfc:food/carrot",
		1,
		"tfc:seeds/carrot",
		"tfc:dirt",
		"tfc:wild_crop/carrot",
		800
	)
	addClocheRecipe("tfc:food/onion",
		1,
		"tfc:seeds/onion",
		"tfc:dirt",
		"tfc:wild_crop/onion",
		800
	)
	addClocheRecipe("tfc:food/squash",
		1,
		"tfc:seeds/squash",
		"tfc:dirt",
		"tfc:wild_crop/squash",
		800
	)
	addClocheRecipe("tfc:food/garlic",
		1,
		"tfc:seeds/garlic",
		"tfc:dirt",
		"tfc:wild_crop/garlic",
		800
	)
	addClocheRecipe("tfc:food/maize",
		1,
		"tfc:seeds/maize",
		"tfc:dirt",
		"tfc:wild_crop/maize",
		1550
	)
	addClocheRecipe("tfc:food/cabbage",
		1,
		"tfc:seeds/cabbage",
		"tfc:dirt",
		"tfc:wild_crop/cabbage",
		1500
	)
	addClocheRecipe("tfc:food/potato",
		1,
		"tfc:seeds/potato",
		"tfc:dirt",
		"tfc:wild_crop/potato",
		1450
	)
	addClocheRecipe("tfc:food/tomato",
		1,
		"tfc:seeds/tomato",
		"tfc:dirt",
		"tfc:wild_crop/tomato",
		1400
	)
	addClocheRecipe("tfc:food/beet",
		1,
		"tfc:seeds/beet",
		"tfc:dirt",
		"tfc:wild_crop/beet",
		1350
	)
	addClocheRecipe("tfc:food/soybean",
		1,
		"tfc:seeds/soybean",
		"tfc:dirt",
		"tfc:wild_crop/soybean",
		1300
	)
	addClocheRecipe("tfc:food/green_bean",
		1,
		"tfc:seeds/green_bean",
		"tfc:dirt",
		"tfc:wild_crop/green_bean",
		1250
	)
	addClocheRecipe("tfc:jute",
		1,
		"tfc:seeds/jute",
		"tfc:dirt",
		"tfc:wild_crop/jute",
		1800
	)
	addClocheRecipe("tfc:food/sugarcane",
		1,
		"tfc:seeds/sugarcane",
		"tfc:dirt",
		"tfc:wild_crop/sugarcane",
		1800
	)
	addClocheRecipe("tfc:food/barley",
		1,
		"tfc:seeds/barley",
		"tfc:dirt",
		"tfc:wild_crop/barley",
		1650
	)
	addClocheRecipe("tfc:food/oat",
		1,
		"tfc:seeds/oat",
		"tfc:dirt",
		"tfc:wild_crop/oat",
		1700
	)
	addClocheRecipe("tfc:food/rye",
		1,
		"tfc:seeds/rye",
		"tfc:dirt",
		"tfc:wild_crop/rye",
		1700
	)
	addClocheRecipe("tfc:food/wheat",
		1,
		"tfc:seeds/wheat",
		"tfc:dirt",
		"tfc:wild_crop/wheat",
		1700
	)
	addClocheRecipe("tfc:food/rice",
		1,
		"tfc:seeds/rice",
		"tfc:dirt",
		"tfc:wild_crop/rice",
		1750
	)
	addClocheRecipe("tfc:melon",
		1,
		"tfc:seeds/melon",
		"tfc:dirt",
		"tfc:wild_crop/melon",
		1600
	)
	addClocheRecipe("tfc:pumpkin",
		1,
		"tfc:seeds/pumpkin",
		"tfc:dirt",
		"tfc:wild_crop/pumpkin",
		1600
	)

	ItemCol.tfcBigFruits.forEach((fruitTree) => {
		addClocheRecipe(`tfc:food/${fruitTree}`,
			1,
			`tfc:plant/${fruitTree}_sapling`,
			"tfc:dirt",
			`tfc:food/${fruitTree}_sapling`,
			2500
		)
	});
	ItemCol.tfcBerries.forEach((bush) => {
		addClocheRecipe(`tfc:food/${bush}`,
			1,
			`tfc:plant/${bush}_bush`,
			"tfc:dirt",
			`tfc:food/${bush}_bush`,
			1500
		)
	});
	addClocheRecipe("firmalife:food/nightshade_berry",
		1,
		"firmalife:plant/nightshade_bush",
		"tfc:dirt",
		"firmalife:plant/nightshade_bush",
		1500
	)
	addClocheRecipe("firmalife:food/pineapple",
		1,
		"firmalife:plant/pineapple_bush",
		"tfc:dirt",
		"firmalife:plant/pineapple_bush",
		1500
	)
	addClocheRecipe("firmalife:food/cocoa_beans",
		1,
		"firmalife:plant/cocoa_sapling",
		"tfc:dirt",
		"firmalife:plant/cocoa_sapling",
		2500
	)
	addClocheRecipe("firmalife:food/fig",
		1,
		"firmalife:plant/fig_sapling",
		"tfc:dirt",
		"firmalife:plant/fig_sapling",
		2500
	)
}

function setRecipesImmersiveEngineering(event) {

	event.remove({ id: "immersiveengineering:crafting/cokebrick" });

	/**
	 * 
	 * @param {string} outpu 
	 * @param {string} ingredient
	 * @param {string} mold
	 * @param {number} count
	 */

	const addMetalPress = (output, count, ingredient, mold) => {
		event.custom({
			type: "immersiveengineering:metal_press",
			result: {
				item: output,
				count: count
			},
			input: {
				base_ingredient: {
					item: ingredient
				},
				count: 1
			},
			mold: mold,
			energy: 2600
		}).id(`setsu:immersiveengineering/metalpress/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}
	const addArcFurnace = (output, count, ingredient, ingredientCount, additive, time) => {
		event.custom({
			type: "immersiveengineering:arc_furnace",
			results: [
				{
					base_ingredient: {
						item: output
					},
					count: count
				}
			],
			input: {
				base_ingredient: {
					item: ingredient
				},
				count: ingredientCount
			},
			additives: [
				{
					item: additive
				}
			],
			energy: 25000,
			time: time
		}).id(`setsu:immersiveengineering/arcfurnace/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}
	const addArcFurnaceNoAds = (output, count, ingredient, ingredientCount, time) => {
		event.custom({
			type: "immersiveengineering:arc_furnace",
			results: [
				{
					base_ingredient: {
						item: output
					},
					count: count
				}
			],
			input: {
				base_ingredient: {
					item: ingredient
				},
				count: ingredientCount
			},
			additives: [],
			energy: 10000,
			time: time
		}).id(`setsu:immersiveengineering/arcfurnace/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}
	const addCrusher = (output, ingredient) => {
		event.custom({
			type: "immersiveengineering:crusher",
			result: {
				item: output
			},
			secondaries: [
				{
					chance: 0.5,
					output: {
						item: output
					}
				},
				{
					chance: 0.1,
					output: {
						item: "minecraft:flint"
					}
				}
			],
			input: {
				item: ingredient
			},
			energy: 1600
		}).id(`setsu:immersiveengineering/crusher/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}

	addArcFurnace("kubejs:metal/ingot/high_carbon_purple_steel", 2, `tfc:metal/ingot/red_steel`, 1, `tfc:metal/ingot/blue_steel`, 800);
	addMetalPress("kubejs:metal/ingot/purple_steel", 1, "kubejs:metal/ingot/high_carbon_purple_steel", "tfc_metal_items:steel_pressing_head");
	addArcFurnace("kubejs:metal/double_ingot/purple_steel", 1, "kubejs:metal/ingot/purple_steel", 1, "kubejs:metal/ingot/purple_steel", 800);

	setClocheRecipes(event);

	const sheetAndDoubleIngotMetals = [
		"copper",
		"silver",
		"sterling_silver",
		"nickel",
		"steel",
		"gold",
		"red_steel",
		"blue_steel",
		"black_steel",
		"wrought_iron",
		"cast_iron",
		"zinc",
		"tin",
		"rose_gold",
		"bronze",
		"bismuth",
		"bismuth_bronze",
		"black_bronze",
		"electrum"
	]
	for (const sheetMetal of sheetAndDoubleIngotMetals) {
		event.remove({ id: `tfc_ie_addon:metalpress/sheet_${sheetMetal}` });
		event.remove({ id: `tfc_metal_items:seq_pressing/ingots/${sheetMetal}` });
		event.remove({ id: `tfc_metal_items:seq_pressing/double_ingots/${sheetMetal}` });
		event.remove({ id: `tfc_metal_items:seq_pressing/sheets/${sheetMetal}` });
		event.remove({ id: `tfc_metal_items:seq_pressing/double_sheets/${sheetMetal}` });
		addArcFurnace(`tfc:metal/double_ingot/${sheetMetal}`, 1, `tfc:metal/ingot/${sheetMetal}`, 1, `tfc:metal/ingot/${sheetMetal}`, 800);
		addArcFurnace(`tfc:metal/double_sheet/${sheetMetal}`, 1, `tfc:metal/sheet/${sheetMetal}`, 1, `tfc:metal/sheet/${sheetMetal}`, 800);
	}
	event.remove({ id: `tfc_ie_addon:metalpress/sheet_chromium` });
	event.remove({ id: `tfc_metal_items:seq_pressing/double_ingots/chromium` });
	event.remove({ id: `tfc_metal_items:seq_pressing/sheets/chromium` });
	event.remove({ id: `tfc_metal_items:seq_pressing/double_sheets/chromium` });
	addArcFurnace(`firmalife:metal/double_ingot/chromium`, 1, `firmalife:metal/ingot/chromium`, 1, `firmalife:metal/ingot/chromium`, 800);
	addArcFurnace(`firmalife:metal/double_sheet/chromium`, 1, `firmalife:metal/sheet/chromium`, 1, `firmalife:metal/sheet/chromium`, 800);
	event.remove({ id: `tfc_ie_addon:metalpress/sheet_stainless_steel` });
	event.remove({ id: `tfc_metal_items:seq_pressing/double_ingots/stainless_steel` });
	event.remove({ id: `tfc_metal_items:seq_pressing/sheets/stainless_steel` });
	event.remove({ id: `tfc_metal_items:seq_pressing/double_sheets/stainless_steel` });
	addArcFurnace(`firmalife:metal/double_ingot/stainless_steel`, 1, `firmalife:metal/ingot/stainless_steel`, 1, `firmalife:metal/ingot/stainless_steel`, 800);
	addArcFurnace(`firmalife:metal/double_sheet/stainless_steel`, 1, `firmalife:metal/sheet/stainless_steel`, 1, `firmalife:metal/sheet/stainless_steel`, 800);

	ItemCol.tfcStoneTypes.forEach((stone) => {
		addCrusher(`tfc:rock/gravel/${stone}`, `tfc:rock/cobble/${stone}`);
	})

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "immersiveengineering" },
		"#forge:ingots/steel",
		"#forge:plates/steel"
	)
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "immersiveengineering" },
		"#forge:ingots/iron",
		"#forge:sheets/wrought_iron"
	)
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "immersiveengineering" },
		"#forge:ingots/bronze",
		"#forge:plates/bronze"
	)
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "immersiveengineering" },
		"#forge:ingots/copper",
		"#forge:sheets/copper"
	)

	event.replaceInput(
		{ type: "minecraft:crafting_shaped" },
		"immersiveengineering:hemp_fiber",
		"tfc:jute_fiber"
	)

	event.replaceInput(
		{ type: "immersiveengineering:cloche" },
		"minecraft:dirt",
		"#tfc:dirt"
	)

	event.replaceInput(
		{ id: "immersiveengineering:crafting/balloon" },
		"minecraft:torch",
		"tfc:torch"
	)

	event.replaceInput(
		{ id: "immersiveengineering:crafting/conveyor_dropper" },
		"minecraft:iron_trapdoor",
		"tfc:metal/trapdoor/wrought_iron"
	)

	event.remove({ id: "immersiveengineering:alloybrick" });
	event.shaped("immersiveengineering:alloybrick", ["SI ", "IS ", "   "], {
		S: "#forge:sandstone",
		I: "tfc:ceramic/fire_brick"
	}).id("setsu:immersiveengineering/alloybrick");

	event.remove({ id: "immersiveengineering:hemp_fabric" });
	event.shaped("immersiveengineering:hemp_fabric", ["CYC", "SYS", "YCY"], {
		S: "#forge:rods/wooden",
		C: "#tfc:high_quality_cloth",
		Y: "#forge:string"
	}).id("setsu:immersiveengineering/hemp_fabric");
	event.remove({ id: "immersiveengineering:cokebrick" });
	event.shaped("immersiveengineering:cokebrick", ["CBC", "BSB", "CBC"], {
		S: "#forge:sandstone",
		B: "tfc:ceramic/fire_brick",
		C: "tfc:mortar"
	}).id("setsu:immersiveengineering/cokebrick");
	event.remove({ id: "immersiveengineering:blastbrick" });
	event.shaped("immersiveengineering:blastbrick", ["CBC", "BMB", "CSC"], {
		S: "#forge:ingots/steel",
		C: "tfc:fire_clay",
		B: "tfc:ceramic/fire_brick",
		M: "#forge:magma"
	}).id("setsu:immersiveengineering/blastbrick");


	event.remove({ id: "immersiveengineering:conveyor_basic" });
	event.shaped("immersiveengineering:conveyor_basic", ["AAA", "RLR", "AAA"], {
		A: "create:belt_connector",
		R: "#forge:rods/nickel",
		L: "#forge:rods/wrought_iron"
	}).id("setsu:immersiveengineering/conveyor_basic");
	event.remove({ id: "immersiveengineering:crate" });
	event.shaped("immersiveengineering:crate", ["ABA", "B B", "ABA"], {
		A: "thermal:tar",
		B: "#forge:treated_wood"
	}).id("setsu:immersiveengineering/crate");

	addMetalPress("tfc:brass_mechanisms", 2, "tfc:metal/ingot/brass", "immersiveengineering:mold_gear");


	event.remove({ id: "immersiveengineering:arcfurnace/steel" });
	event.replaceInput({ id: "immersiveengineering:blastfurnace/steel" }, "minecraft:iron_ingot", "#setsu:ingot/all_iron");
	event.replaceOutput({ id: "immersiveengineering:blastfurnace/steel" }, "immersiveengineering:ingot_steel", "tfc:metal/ingot/steel");

	/**
	 * My Classicals
	 */

	event.shaped("minecraft:mycelium", ["CM", "SL"], {
		C: "tfc:compost",
		M: "#forge:mushrooms",
		S: "#minecraft:dirt",
		L: "immersiveengineering:slag",
	}).id("setsu:immersiveengineering/mycelium");

	event.replaceInput({ id: "immersiveengineering:crafting/hemp_fabric" }, "tfc:jute_fiber", "tfc:burlap_cloth");

	event.remove({ id: "immersiveengineering:crafting/strip_curtain" });
	event.shaped("3x immersiveengineering:strip_curtain", ["A", "T"], {
		A: "tfc:metal/rod/steel",
		T: "immersiveengineering:hemp_fabric",
	}).id("setsu:immersiveengineering/strip_curtain_fabric");

	/**
	 * Glass Chapter
	 */

	const addMixer = (output, ingredient, fluid, amount) => {
		event.custom({
			type: "immersiveengineering:mixer",
			result: { fluid: output, amount: amount },
			inputs: [{ tag: ingredient }],
			fluid: { tag: fluid, amount: amount },
			energy: 1600
		}).id(`setsu:immersiveengineering/mixer/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}
	const addBottling = (output, ingredient, fluid, amount) => {
		event.custom({
			type: "immersiveengineering:bottling_machine",
			results: [{ item: output }],
			input: { item: ingredient },
			fluid: { tag: fluid, amount: amount }
		}).id(`setsu:immersiveengineering/bottling/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}
	const addSawmill = (output, count, ingredient, secondary) => {
		event.custom({
			type: "immersiveengineering:sawmill",
			result: { item: output, count: count },
			input: { item: ingredient },
			secondaries: [{ output: { item: secondary }, stripping: false }],
			energy: 800,
		}).id(`setsu:immersiveengineering/sawmill/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`);
	}

	addArcFurnaceNoAds("minecraft:glass", 1, "tfc:silica_glass_batch", 1, 100);

	ItemCol.allDyes.forEach((color) => {
		addMixer(`tfc:${color}_dye`, `forge:dyes/${color}`, "minecraft:water", 1000);
		addBottling(`minecraft:${color}_stained_glass`, `minecraft:glass`, `setsu:dyes/${color}`, 160);
		addBottling(`minecraft:${color}_stained_glass_pane`, `minecraft:glass_pane`, `setsu:dyes/${color}`, 40);
		addSawmill(`minecraft:${color}_stained_glass_pane`, 16, `minecraft:${color}_stained_glass`, `quark:${color}_shard`);
	});
	addSawmill(`minecraft:glass_pane`, 16, `minecraft:glass`, `quark:clear_shard`);
	addArcFurnace(`firmalife:reinforced_glass`, 1, `minecraft:glass_pane`, 1, `tfc:powder/soda_ash`, 150);
}
