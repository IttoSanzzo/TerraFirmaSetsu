// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { ItemCol } from "../../HelpCollections/ItemCollections";
import { addDamageShapeless } from "../_helperFunctions";

export function setRecipesBotania(event: $RecipesEventJS) {
	event
		.custom({
			type: "botania:mana_infusion",
			input: {
				tag: "tfc:large_fishing_bait",
			},
			output: {
				item: "minecraft:tropical_fish",
				count: 1,
			},
			mana: 5,
		})
		.id("setsu:botania/mana_infusion/fish_to_fish");

	/**
	 * Orechid and Stone Infusion
	 */
	ItemCol.tfcStoneTypes.forEach((stone) => {
		ItemCol.tfcMetalOreTypes.forEach((ore) => {
			event.custom({
				type: "botania:orechid",
				input: {
					type: "block",
					block: `tfc:rock/smooth/${stone}`,
				},
				output: {
					type: "block",
					block: `tfc:ore/poor_${ore}/${stone}`,
				},
				weight: 40,
			});
			event.custom({
				type: "botania:orechid",
				input: {
					type: "block",
					block: `tfc:rock/smooth/${stone}`,
				},
				output: {
					type: "block",
					block: `tfc:ore/normal_${ore}/${stone}`,
				},
				weight: 30,
			});
			event.custom({
				type: "botania:orechid",
				input: {
					type: "block",
					block: `tfc:rock/smooth/${stone}`,
				},
				output: {
					type: "block",
					block: `tfc:ore/rich_${ore}/${stone}`,
				},
				weight: 20,
			});
		});
		event.custom({
			type: "botania:orechid",
			input: {
				type: "block",
				block: `tfc:rock/smooth/${stone}`,
			},
			output: {
				type: "block",
				block: `tfc:rock/smooth/${stone}`,
			},
			weight: 400,
		});

		/**
		 * Mana Infusion Stones
		 */

		event
			.custom({
				type: "botania:mana_infusion",
				input: {
					item: `tfc:rock/smooth/${stone}`,
				},
				output: {
					item: `tfc:rock/raw/${stone}`,
					count: 1,
				},
				mana: 250,
				catalyst: {
					type: "block",
					block: "botania:alchemy_catalyst",
				},
			})
			.id(`setsu:botania/mana_infusion/raw_${stone}_from_smooth`);

		// raw to smooth
		event
			.custom({
				type: "botania:mana_infusion",
				input: {
					item: `tfc:rock/raw/${stone}`,
				},
				output: {
					item: `tfc:rock/smooth/${stone}`,
					count: 1,
				},
				mana: 300,
				catalyst: {
					type: "block",
					block: "botania:alchemy_catalyst",
				},
			})
			.id(`setsu:botania/mana_infusion/smooth_${stone}_from_raw`);
	});

	// Replaces ////////////////////////////////////////////

	event.replaceInput(
		{ mod: "botania" },
		"minecraft:brown_mushroom",
		"#forge:mushrooms"
	);
	event.replaceInput(
		{ mod: "botania" },
		"#forge:crops/wheat",
		"#tfc:fresh_grains"
	);
	event.replaceInput(
		{ mod: "botania" },
		"minecraft:white_wool",
		"tfc:wool_cloth"
	);
	event.replaceInput(
		{ mod: "botania" },
		"minecraft:sugar_cane",
		"tfc:food/sugarcane"
	);
	event.replaceInput(
		{ mod: "botania" },
		"#tfc:disabled_monster_held_items",
		"firmalife:watering_can"
	);
	event.replaceInput({ mod: "botania" }, "minecraft:cake", "minecraft:ice");

	// Crafts //////////////////////////////////////////////

	event.remove({ id: "botania:livingwood_twig" });
	event.shapeless("botania:livingwood_twig", ["#botania:livingwood_logs"]);

	event.remove({ id: "botania:livingwood_planks" });
	addDamageShapeless(event, "4x botania:livingwood_planks", [
		"#botania:livingwood_logs",
		"#tfc:saws",
	]);

	event.remove({ id: "botania:dreamwood_planks" });
	addDamageShapeless(event, "4x botania:dreamwood_planks", [
		"#botania:dreamwood_logs",
		"#tfc:saws",
	]);

	event
		.shaped("botania:lens_magnet", ["LM ", "M  "], {
			L: "botania:lens_normal",
			M: "#forge:magnet_ore",
		})
		.id("setsu:botania/lens_magnet");

	event.remove({ id: "botania:alchemy_catalyst" });
	event
		.shaped("botania:alchemy_catalyst", ["LGL", "BPB", "LGL"], {
			L: "botania:livingrock",
			G: "tfc:metal/ingot/rose_gold",
			B: "minecraft:brewing_stand",
			P: "botania:mana_pearl",
		})
		.id("setsu:botania/alchemy_catalyst");

	event.remove({ id: "botania:crafting_halo" });
	event
		.shaped("botania:crafting_halo", [" R ", "MCM", " M "], {
			R: "botania:rune_sloth",
			C: "minecraft:crafting_table",
			M: "botania:manasteel_ingot",
		})
		.id("setsu:botania/crafting_halo");

	event
		.custom({
			type: "botania:mana_infusion",
			input: {
				item: "tfc:food/sugarcane",
			},
			output: {
				item: "minecraft:bamboo",
				count: 1,
			},
			mana: 50,
			catalyst: {
				type: "block",
				block: "botania:alchemy_catalyst",
			},
		})
		.id("setsu:botania/bamboo_from_sugarcane");

	/**
	 * Sapling Trades
	 */
	ItemCol.tfcWoodTypes.forEach((type) => {
		event
			.custom({
				type: "botania:elven_trade",
				ingredients: [
					{
						item: `dttfc:${type}_seed`,
					},
				],
				output: [
					{
						item: `tfc:wood/sapling/${type}`,
					},
				],
			})
			.id(`setsu:botania/${type}_sapling`);
	});
	event.remove({ id: `naturescompass:natures_compass` });
	event
		.custom({
			type: "botania:elven_trade",
			ingredients: [
				{
					item: `minecraft:compass`,
				},
			],
			output: [
				{
					item: `naturescompass:naturescompass`,
				},
			],
		})
		.id(`setsu:botania/naturescompass`);

	event.remove({ id: "botania:redstone_root" });
	event
		.shapeless("botania:redstone_root", ["minecraft:redstone", "#tfc:twigs"])
		.id("setsu:botania/redstone_twig");

	function addManaInfusion(data: {
		output: KjsItem;
		outputCount?: number;
		input: KjsItem;
		mana?: number;
		catalyst?: string;
	}) {
		if (!data.outputCount) data.outputCount = 1;
		if (!data.mana) data.mana = 300;
		event
			.custom(
				data.catalyst
					? {
							type: "botania:mana_infusion",
							input: {
								item: data.input,
							},
							output: {
								item: data.output,
								count: data.outputCount,
							},
							mana: data.mana,
							catalyst: {
								type: "block",
								block: data.catalyst,
							},
						}
					: {
							type: "botania:mana_infusion",
							input: {
								item: data.input,
							},
							output: {
								item: data.output,
								count: data.outputCount,
							},
							mana: data.mana,
						}
			)
			.id(
				`setsu:botania/mana_infusion${data.catalyst ? `/${(data.catalyst as string).substring((data.catalyst as string).indexOf(":") + 1)}` : ""}/${(data.output as string).substring((data.output as string).indexOf(":") + 1)}_from_${(data.input as string).substring((data.input as string).indexOf(":") + 1)}`
			);
	}

	event.remove({ id: "botania:mana_infusion/rotten_flesh_to_leather" });
	addManaInfusion({
		output: "tfc:small_raw_hide",
		input: "minecraft:rotten_flesh",
		catalyst: "botania:alchemy_catalyst",
	});
	addManaInfusion({
		output: "tfc:ore/bituminous_coal",
		input: "minecraft:charcoal",
		mana: 1000,
	});
	addManaInfusion({
		output: "tfc:ore/graphite",
		input: "tfc:ore/bituminous_coal",
		mana: 2000,
		catalyst: "botania:alchemy_catalyst",
	});
}
