// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesPotionsMaster(event: $RecipesEventJS) {
	const addPowderFromPlesteAndMortar = (
		output: Special.Item | OmniString,
		count: number,
		ingredient: Special.Item | OmniString
	) => {
		event
			.custom({
				type: "hexerei:pestle_and_mortar",
				output: {
					item: output,
					count: count,
				},
				ingredients: [
					{
						item: ingredient,
					},
					{
						item: "potionsmaster:ender_powder",
					},
				],
				grindingTime: 150,
			})
			.id(`setsu:potionsmaster/${output.replace(":", ".").replace("/", ".")}`);
	};

	const t_potionMats = [
		"charcoal",
		"coal",
		"diamond",
		"emerald",
		"gold",
		"iron",
		"lapis",
		"redstone",
		"aluminium",
		"copper",
		"tin",
		"nickel",
		"silver",
		"zinc",
		"quartz",
		"bismuth",
		"netherite",
		"ender",
		"lead",
		"uranium",
		"blaze",
	];
	t_potionMats.forEach((mat) => {
		event.remove({ id: `potionsmaster:${mat}_powder` });
	});

	event
		.custom({
			type: "hexerei:pestle_and_mortar",
			ingredients: [
				{
					item: "minecraft:ender_pearl",
				},
			],
			output: {
				item: "potionsmaster:ender_powder",
				count: 3,
			},
			grindingTime: 175,
		})
		.id(`setsu:potionsmaster/ender_powder`);

	event
		.custom({
			type: "hexerei:pestle_and_mortar",
			ingredients: [
				{
					item: "potionsmaster:ender_powder",
				},
				{
					item: "potionsmaster:coal_powder",
				},
				{
					item: "potionsmaster:redstone_powder",
				},
				{
					item: "minecraft:gunpowder",
				},
			],
			output: {
				item: "minecraft:blaze_powder",
				count: 2,
			},
			grindingTime: 175,
		})
		.id(`setsu:potionsmaster/blaze_powder`);

	addPowderFromPlesteAndMortar(
		"potionsmaster:charcoal_powder",
		3,
		"minecraft:charcoal"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:coal_powder",
		3,
		"minecraft:coal"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:diamond_powder",
		3,
		"tfc:gem/diamond"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:emerald_powder",
		3,
		"tfc:gem/emerald"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:gold_powder",
		3,
		"tfc:metal/ingot/gold"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:iron_powder",
		3,
		"tfc:metal/ingot/wrought_iron"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:lapis_powder",
		3,
		"tfc:gem/lapis_lazuli"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:redstone_powder",
		3,
		"minecraft:redstone"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:aluminium_powder",
		3,
		"immersiveengineering:ingot_aluminum"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:copper_powder",
		3,
		"tfc:metal/ingot/copper"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:tin_powder",
		3,
		"tfc:metal/ingot/tin"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:nickel_powder",
		3,
		"tfc:metal/ingot/nickel"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:silver_powder",
		3,
		"tfc:metal/ingot/silver"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:zinc_powder",
		3,
		"tfc:metal/ingot/zinc"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:quartz_powder",
		3,
		"minecraft:quartz"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:bismuth_powder",
		3,
		"tfc:metal/ingot/bismuth"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:netherite_powder",
		3,
		"minecraft:netherite_scrap"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:lead_powder",
		3,
		"immersiveengineering:ingot_lead"
	);
	addPowderFromPlesteAndMortar(
		"potionsmaster:uranium_powder",
		3,
		"immersiveengineering:ingot_uranium"
	);

	event.remove({ id: "potionsmaster:pestle" });
	event.remove({ id: "potionsmaster:tile_mortar" });
}
