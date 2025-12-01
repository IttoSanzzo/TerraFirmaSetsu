// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesCreate(event: $RecipesEventJS) {
	function createAddCutting(output, count, ingredient) {
		event
			.custom({
				type: "create:cutting",
				results: [
					{
						item: output,
						count: count,
					},
				],
				processingTime: 50,
				ingredients: [
					{
						item: ingredient,
					},
				],
			})
			.id(
				`setsu:create/cutting/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}
	function createAddPressing(output, ingredient) {
		event
			.custom({
				type: "create:pressing",
				results: [
					{
						item: output,
					},
				],
				ingredients: [
					{
						item: ingredient,
					},
				],
			})
			.id(
				`setsu:create/pressing/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}
	function createAddRolling(output, count, ingredient) {
		event
			.custom({
				type: "createaddition:rolling",
				results: [
					{
						item: output,
						count: count,
					},
				],
				ingredients: [
					{
						item: ingredient,
					},
				],
			})
			.id(
				`setsu:create/rolling/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}

	const ferns = ["king", "lady", "licorice", "ostrich", "sword", "tree"];
	for (const fern of ferns) {
		event
			.custom({
				type: "create:crushing",
				ingredients: [
					{
						item: `tfc:plant/${fern}_fern`,
					},
				],
				processingTime: 100,
				results: [
					{
						item: "minecraft:green_dye",
						count: 2,
					},
					{
						item: "minecraft:green_dye",
						chance: 0.5,
					},
				],
			})
			.id(`setsu:create/green_dye_from_${fern}`);
	}

	ItemCol.tfcWoodTypes.forEach((log) => {
		createAddCutting(`tfc:wood/stripped_log/${log}`, 1, `tfc:wood/log/${log}`);
		createAddCutting(
			`tfc:wood/lumber/${log}`,
			8,
			`tfc:wood/stripped_log/${log}`
		);
		createAddCutting(`tfc:wood/lumber/${log}`, 4, `tfc:wood/planks/${log}`);
	});

	event
		.custom({
			type: "create:crushing",
			ingredients: [{ item: "apotheosis:gem" }],
			results: [{ item: "apotheosis:gem_dust" }],
			processingTime: 400,
		})
		.id(`setsu:create/crushing/gem_dust`);

	createAddPressing("tfc:refined_iron_bloom", "tfc:raw_iron_bloom");
	createAddPressing("tfc:metal/ingot/wrought_iron", "tfc:refined_iron_bloom");

	const rodMetals = [
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
		"zinc",
		"tin",
		"rose_gold",
		"bronze",
		"bismuth",
		"bismuth_bronze",
		"black_bronze",
	];
	event.remove({ mod: `tfc_metal_items`, type: "createaddition:rolling" });
	event.remove({ id: `createaddition:rolling/iron_ingot` });
	for (const rodMetal of rodMetals) {
		event.remove({ id: `createaddition:rolling/${rodMetal}_ingot` });
		createAddRolling(
			`tfc:metal/rod/${rodMetal}`,
			1,
			`tfc:metal/ingot/${rodMetal}`
		);
	}
	createAddRolling(
		`firmalife:metal/rod/chromium`,
		1,
		`firmalife:metal/ingot/chromium`
	);
	createAddRolling(
		`firmalife:metal/rod/stainless_steel`,
		1,
		`firmalife:metal/ingot/stainless_steel`
	);
	ItemCol.tfcStoneTypes.forEach((stone) => {
		event.custom({
			type: "create:crushing",
			ingredients: [
				{
					item: `tfc:rock/cobble/${stone}`,
				},
			],
			results: [
				{
					item: `tfc:rock/gravel/${stone}`,
				},
				{
					item: `tfc:rock/gravel/${stone}`,
					chance: 0.5,
				},
			],
			processingTime: 100,
		});
	});

	ItemCol.allDyes.forEach((color) => {
		if (color == "cyan" || color == "gray" || color == "black") return;
		event
			.custom({
				type: "create:milling",
				results: [
					{
						item: `minecraft:${color}_dye`,
						count: 2,
					},
					{
						item: `minecraft:${color}_dye`,
						chance: 0.1,
					},
				],
				ingredients: [
					{
						tag: `tfc:makes_${color}_dye`,
					},
				],
				processingTime: 100,
			})
			.id(`setsu:create/milling/${color.replace(":", "/")}/dye`);
	});

	event.remove({ id: "create:andesite_alloy" });
	event
		.shaped("create:andesite_alloy", ["SZ ", "ZS ", "   "], {
			S: "#tfc:igneous_extrusive_rock",
			Z: "#forge:nuggets/zinc",
		})
		.id("setsu:create/andesite_alloy");

	event.remove({ id: "create:belt_connector" });
	event
		.shaped("create:belt_connector", ["AAA", "RLR", "AAA"], {
			A: "tfc:food/dried_kelp",
			R: "#forge:rods/wrought_iron",
			L: "#forge:treated_lumber",
		})
		.id("setsu:create/belt_connector");

	event.replaceInput(
		{ id: "create:milling/gravel" },
		"minecraft:gravel",
		"#forge:gravel"
	);

	ItemCol.tfcStoneTypes.forEach((rockType) => {
		createAddCutting(`tfc:brick/${rockType}`, 1, `tfc:rock/loose/${rockType}`);
	});

	/**
	 * OG
	 */

	// 0.5.1.b

	event.replaceInput(
		{ id: "create:crafting/schematics/schematicannon" },
		"minecraft:iron_block",
		"tfc:metal/double_ingot/wrought_iron"
	);
	event.replaceInput(
		{ id: "create:crafting/kinetics/large_water_wheel" },
		"#minecraft:planks",
		"#forge:treated_lumber"
	);
	event.replaceInput(
		{ id: "create:crafting/appliances/clipboard" },
		"#minecraft:planks",
		"#tfc:lumber"
	);

	event.remove({ id: "create:crafting/kinetics/elevator_pulley" });
	event.shaped("create:elevator_pulley", ["RCR", "RSR", "RIR"], {
		R: "supplementaries:rope",
		C: "create:brass_casing",
		S: "create:shaft",
		I: "immersiveengineering:plate_iron",
	});

	// Personal ////////////////////////////////////////////

	event.remove({ id: "create:crafting/kinetics/belt_connector" });
	event
		.shaped("6x create:belt_connector", ["AAA", "AAA"], {
			A: "immersiveengineering:hemp_fabric",
		})
		.id("setsu:create/belt_conector_fabric");

	event
		.shaped("create:mechanical_press", ["A", "B", "C"], {
			A: "create:shaft",
			B: "create:andesite_casing",
			C: "tfc:metal/double_ingot/black_steel",
		})
		.id("setsu:create/mechanical_press");
	event
		.shaped("create:mechanical_press", ["A", "B", "C"], {
			A: "create:shaft",
			B: "create:andesite_casing",
			C: "minecraft:anvil",
		})
		.id("setsu:create/mechanical_press_vanilla_anvil");

	event.replaceInput(
		{ id: "create:haunting/soul_lantern" },
		"minecraft:lantern",
		"#tfc:lamps"
	);

	event.remove({ id: "create:crafting/kinetics/shaft" });
	event
		.custom({
			type: "tfc:anvil",
			input: { item: "create:andesite_alloy" },
			result: { item: "create:shaft", count: 4 },
			tier: 1,
			rules: ["bend_last", "draw_second_last", "draw_third_last"],
		})
		.id("setsu:create/anvil_shaft");

	event
		.custom({
			type: "createaddition:rolling",
			input: { item: "create:andesite_alloy" },
			result: { item: "create:shaft", count: 8 },
		})
		.id("setsu:create/rolling_shaft");

	addCreateMixing(
		event,
		{
			item: "tfc:rock/raw/andesite",
		},
		[
			{
				item: "minecraft:flint",
			},
			{
				tag: "forge:gravel",
			},
			{
				fluid: "minecraft:lava",
				amount: 100,
			},
		]
	);

	event.remove({ id: "minecraft:chain" });
	event.remove({ id: "create:crafting/appliances/chain_from_zinc" });
	event.shapeless("minecraft:chain", ["1x #forge:metal/chain"]);

	event.remove({ id: "create:crafting/logistics/packager" });
	event
		.shaped("create:packager", [" F ", "RCR"], {
			F: "suppsquared:metal_frame",
			C: "create:cardboard_block",
			R: "minecraft:redstone",
		})
		.id("setsu:create/packager");

	event.remove({ id: "create:crafting/kinetics/filter" });
	event
		.shaped("create:filter", ["MCM"], {
			C: "farmersdelight:canvas",
			M: "minecraft:iron_nugget",
		})
		.id("setsu:create/filter");
	event.remove({ id: "create:crafting/kinetics/attribute_filter" });
	event
		.shaped("create:attribute_filter", ["MCM"], {
			C: "#tfc:high_quality_cloth",
			M: "create:brass_nugget",
		})
		.id("setsu:create/attribute_filter");
	event.remove({ id: "create:crafting/kinetics/package_filter" });
	event
		.shaped("create:package_filter", ["MCM"], {
			C: "minecraft:paper",
			M: "create:zinc_nugget",
		})
		.id("create:package_filter");

	event.remove({ id: "create:crafting/logistics/item_hatch" });
	event
		.shapeless("create:item_hatch", [
			"1x create:andesite_alloy",
			"1x #minecraft:trapdoors",
		])
		.id("setsu:create/item_hatch");

	ItemCol.allDyes.forEach((dye) => {
		event.replaceInput(
			{ id: `create:crafting/logistics/${dye}_postbox` },
			"minecraft:barrel",
			"#tfcbarrels:barrels"
		);
		event.remove({ id: `create:crafting/logistics/${dye}_table_cloth` });
		event
			.shapeless(`3x create:${dye}_table_cloth`, [
				"1x create:andesite_alloy",
				"1x #tfc:high_quality_cloth",
				`minecraft:${dye}_dye`,
			])
			.id(`setsu:create/${dye}_table_cloth`);
	});
}
