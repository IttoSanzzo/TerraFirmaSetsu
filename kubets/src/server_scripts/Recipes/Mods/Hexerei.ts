// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShapeless } from "../_helperFunctions";

export function setRecipesHexerei(event: $RecipesEventJS) {
	/**
	 * Removes
	 */
	const boatWoods = ["willow", "mahogany"];
	boatWoods.forEach((wood) => {
		event.remove({ output: `hexerei:${wood}_boat` });
		event.remove({ output: `hexerei:${wood}_chest_boat` });
		event.remove({ output: `hexerei:polished_${wood}_boat` });
		event.remove({ output: `hexerei:polished_${wood}_chest_boat` });
	});

	event.remove({ id: "hexerei:mahogany_woodcutter" });
	event.remove({ id: "hexerei:willow_woodcutter" });
	event.remove({ id: "hexerei:witch_hazel_woodcutter" });
	event.remove({ type: "hexerei:woodcutting" });
	event.remove({ id: "hexerei:leather_from_drying_rack" });

	/**
	 * Others
	 */
	event.remove({ id: "minecraft:brewing_stand" });
	event.replaceInput({ mod: "hexerei" }, "minecraft:sand", "#forge:sand");
	event.replaceInput(
		{ mod: "hexerei" },
		"minecraft:glow_berries",
		"#hexerei:tallow_meltable"
	);
	event.replaceInput(
		{ mod: "hexerei" },
		"minecraft:honeycomb",
		"firmalife:beeswax"
	);
	event.replaceInput({ mod: "hexerei" }, "tfc:food/wheat", "tfc:straw");

	event.remove({ id: "hexerei:witch_hat" });
	event.remove({ id: "hexerei:witch_chestplate" });
	event.remove({ id: "hexerei:witch_boots" });

	event
		.shapeless("hexerei:sage_seed", ["9x #forge:seeds"])
		.id("setsu:hexerei/sage_seed");

	addDamageShapeless(event, "3x hexerei:animal_fat", [
		"#tfc:foods/raw_meats",
		"#forge:tools/knives",
	]);
	addDamageShapeless(event, "6x hexerei:animal_fat", [
		"#artisanal:fats",
		"#forge:tools/knives",
	]);
	addDamageShapeless(event, "9x hexerei:animal_fat", [
		"tfc:blubber",
		"#forge:tools/knives",
	]);

	/**
	 * Wood
	 */
	const reWood = (name: string, woodList: string[]) => {
		event.remove({ id: `hexerei:${name}_planks` });
		event.remove({ id: `hexerei:${name}_planks_from_wood` });
		event.remove({ id: `hexerei:${name}_planks_from_stripped_log` });
		event.remove({ id: `hexerei:${name}_planks_from_stripped_wood` });
		woodList.forEach((wood) => {
			addDamageShapeless(event, `4x hexerei:${name}_planks`, [
				`hexerei:${wood}`,
				"#tfc:metal/saws",
			]);
		});
	};
	reWood("willow", [
		"willow_wood",
		"stripped_willow_wood",
		"willow_log",
		"stripped_willow_log",
	]);
	reWood("mahogany", [
		"mahogany_wood",
		"stripped_mahogany_wood",
		"mahogany_log",
		"stripped_mahogany_log",
	]);
	reWood("witch_hazel", [
		"witch_hazel_wood",
		"stripped_witch_hazel_wood",
		"witch_hazel_log",
		"stripped_witch_hazel_log",
	]);

	/**
	 * Raw Cauldron
	 */
	function addCauldron(data: {
		output: KjsItem;
		outputCount?: number;
		input: { type?: "item" | "tag"; id: KjsItemOrItemTag }[];
		fluid?: KjsFluid;
		fluidAmount?: number;
		outputFluid?: KjsFluid;
	}) {
		if (!data.outputCount) data.outputCount = 1;
		if (!data.fluid) data.fluid = "minecraft:water";
		if (!data.fluidAmount) data.fluidAmount = 1000;
		if (!data.outputFluid) data.outputFluid = data.fluid;
		const ingredients = data.input.map((ingredient) => {
			if (!ingredient.type || ingredient.type == "item")
				return { item: ingredient.id };
			return { tag: ingredient.id };
		});
		event
			.custom({
				type: "hexerei:mixingcauldron",
				output: {
					item: data.output,
					count: data.outputCount,
				},
				ingredients: ingredients,
				liquid: {
					fluid: data.fluid,
				},
				fluidLevelsConsumed: data.fluidAmount,
				liquidOutput: {
					fluid: data.outputFluid,
				},
			})
			.id(
				`setsu:hexerei/cauldron/${(data.output as string).substring((data.output as string).indexOf(":") + 1)}/from/${(data.input as any[]).map((ingredient) => ingredient.id.substring(ingredient.id.indexOf(":") + 1)).join("_and_")}`
			);
	}

	const addRawCauldron = (
		output: Special.Item | OmniString,
		ingredient: Special.Item | OmniString
	) => {
		addCauldron({
			output: output,
			input: [
				{
					id: ingredient,
				},
				{
					id: "mna:vinteum_dust",
				},
				{
					id: ingredient,
				},
				{
					id: "mna:vinteum_dust",
				},
				{
					id: ingredient,
				},
				{
					id: "mna:vinteum_dust",
				},
				{
					id: ingredient,
				},
				{
					id: "mna:vinteum_dust",
				},
			],
			fluidAmount: 200,
		});
	};

	addRawCauldron("minecraft:raw_copper", `tfc:ore/normal_native_copper`);
	addRawCauldron("minecraft:raw_gold", `tfc:ore/normal_native_gold`);
	addRawCauldron(
		"immersiveengineering:raw_silver",
		"tfc:ore/normal_native_silver"
	);

	addCauldron({
		output: "minecraft:clay_ball",
		outputCount: 3,
		input: [
			{
				type: "tag",
				id: "forge:bark_powder",
			},
			{
				type: "tag",
				id: "forge:bark_powder",
			},
			{
				type: "tag",
				id: "minecraft:dirt",
			},
			{
				type: "tag",
				id: "forge:sand",
			},
			{
				type: "tag",
				id: "minecraft:dirt",
			},
			{
				type: "tag",
				id: "forge:sand",
			},
			{
				type: "tag",
				id: "minecraft:dirt",
			},
			{
				type: "tag",
				id: "forge:bark_powder",
			},
		],
		fluidAmount: 200,
	});

	["willow", "witch_hazel", "mahogany"].forEach((wood) => {
		event.remove({
			output: `hexerei:${wood}_chest`,
		});
		event
			.shapeless(`hexerei:${wood}_chest`, [
				"#forge:chests",
				"kubejs:bismuth_bronze_nugget",
			])
			.id(`setsu:hexerei/${wood}_chest`);
	});
}
