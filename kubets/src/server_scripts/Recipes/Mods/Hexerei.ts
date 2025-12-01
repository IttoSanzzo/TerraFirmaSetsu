// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesHexerei(event: $RecipesEventJS) {
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
	const reWood = (name, woodList) => {
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
	const addRawCauldron = (output, ingredient) => {
		event
			.custom({
				type: "hexerei:mixingcauldron",
				output: {
					item: output,
				},
				ingredients: [
					{
						item: ingredient,
					},
					{
						item: "mna:vinteum_dust",
					},
					{
						item: ingredient,
					},
					{
						item: "mna:vinteum_dust",
					},
					{
						item: ingredient,
					},
					{
						item: "mna:vinteum_dust",
					},
					{
						item: ingredient,
					},
					{
						item: "mna:vinteum_dust",
					},
				],
				liquid: {
					fluid: "minecraft:water",
				},
				fluidLevelsConsumed: 200,
				liquidOutput: {
					fluid: "minecraft:water",
				},
			})
			.id(
				`setsu:hexerei/raw_${output.replace(":", "_").replace("/", "_")}_transformation`
			);
	};
	addRawCauldron("minecraft:raw_copper", `tfc:ore/normal_native_copper`);
	addRawCauldron("minecraft:raw_gold", `tfc:ore/normal_native_gold`);
	addRawCauldron(
		"immersiveengineering:raw_silver",
		"tfc:ore/normal_native_silver"
	);
}
