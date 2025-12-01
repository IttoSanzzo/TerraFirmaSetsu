// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesMacawMods(event: $RecipesEventJS) {
	const printtype = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"nether",
		"mystic",
		"dark_oak",
		"swamp",
		"bamboo",
	];

	event.replaceInput({ mod: "mcwdoors" }, "#minecraft:planks", "#tfc:lumber");
	event.replaceInput(
		{ mod: "mcwdoors" },
		"#minecraft:wooden_slabs",
		"#minecraft:wooden_slabs"
	);
	event.replaceInput(
		{ mod: "mcwdoors" },
		"#balm:iron_ingots",
		"immersiveengineering:plate_iron"
	);
	event.replaceInput(
		{ id: "mcwdoors:iron_portcullis" },
		"immersiveengineering:plate_iron",
		"#balm:iron_ingots"
	);
	event.replaceInput(
		{ id: "mcwdoors:wooden_portcullis" },
		"immersiveengineering:plate_iron",
		"#balm:iron_ingots"
	);

	printtype.forEach((print) => {
		event.remove({ output: `mcwdoors:print_${print}` });
		event
			.shaped(`mcwdoors:print_${print}`, ["S", "D"], {
				S: "#forge:rods/wooden",
				D: "#minecraft:wooden_doors",
			})
			.id(`setsu:mcwdoors/print_${print}`);
	});

	/**
	 * Windows
	 */
	event.replaceInput(
		{ mod: "mcwwindows" },
		"#minecraft:logs",
		"#minecraft:logs"
	);
	event.replaceInput({ mod: "mcwwindows" }, "#minecraft:planks", "#tfc:lumber");
	event.replaceInput(
		{ mod: "mcwwindows" },
		"#forge:rods/wooden",
		"#forge:rods/wooden"
	);
	event.replaceInput(
		{ mod: "mcwwindows" },
		"#minecraft:wooden_slabs",
		"#minecraft:wooden_slabs"
	);
	event.replaceInput(
		{ mod: "mcwwindows" },
		"#minecraft:trapdoors",
		"#minecraft:trapdoors"
	);
	event.replaceInput(
		{ mod: "mcwwindows" },
		"minecraft:cobblestone",
		"#forge:cobblestone"
	);
	ItemCol.allDyes.forEach((col) => {
		event.remove({ id: `mcwwindows:${col}_curtain` });
		addDamageShapeless(event, `6x mcwwindows:${col}_curtain`, [
			"#tfc:high_quality_cloth",
			"#sewingkit:needles",
			`minecraft:${col}_dye`,
		]);
	});

	/**
	 * Lights
	 */
	event.replaceInput({ mod: "mcwlights" }, "minecraft:torch", "tfc:torch");
	event.replaceInput(
		{ mod: "mcwlights" },
		"#minecraft:logs",
		"#minecraft:logs"
	);
	event.replaceInput({ mod: "mcwlights" }, "#minecraft:planks", "#tfc:lumber");
	event.replaceInput(
		{ mod: "mcwlights" },
		"#forge:rods/wooden",
		"#forge:rods/wooden"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"#minecraft:wooden_slabs",
		"#minecraft:wooden_slabs"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:cobblestone",
		"#forge:cobblestone"
	);
	event.replaceInput({ mod: "mcwlights" }, "minecraft:coal", "minecraft:torch");
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:iron_ingot",
		"tfc:metal/ingot/wrought_iron"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:copper_ingot",
		"tfc:metal/ingot/copper"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:gold_ingot",
		"tfc:metal/ingot/gold"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:string",
		"#minecraft:candles"
	);
	event.replaceInput(
		{ mod: "mcwlights" },
		"minecraft:honeycomb",
		"firmalife:raw_honey"
	);
	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.replaceInput(
			{ mod: "mcwlights" },
			`minecraft:${wood}_fence`,
			"#minecraft:fences"
		);
	});

	/**
	 * Trapdoors
	 */
	event.replaceInput(
		{ mod: "mcwtrpdoors" },
		"#minecraft:logs",
		"#minecraft:logs"
	);
	event.replaceInput(
		{ mod: "mcwtrpdoors" },
		"#minecraft:planks",
		"#tfc:lumber"
	);
	event.replaceInput(
		{ mod: "mcwtrpdoors" },
		"#forge:rods/wooden",
		"#forge:rods/wooden"
	);
	event.replaceInput(
		{ mod: "mcwtrpdoors" },
		"#minecraft:wooden_slabs",
		"#minecraft:wooden_slabs"
	);
	event.replaceInput(
		{ mod: "mcwtrpdoors" },
		"minecraft:iron_ingot",
		"tfc:metal/ingot/wrought_iron"
	);
	const printtypetrp = [
		"classic",
		"cottage",
		"paper",
		"beach",
		"tropical",
		"four_panel",
		"barred",
		"mystic",
		"swamp",
		"bamboo",
		"blossom",
		"whispering",
	];
	printtypetrp.forEach((print) => {
		event.remove({ output: `mcwtrpdoors:print_${print}` });
		event
			.shaped(`mcwtrpdoors:print_${print}`, ["S", "D"], {
				S: "#forge:rods/wooden",
				D: "#minecraft:wooden_trapdoors",
			})
			.id(`setsu:mcwtrpdoors/print_${print}`);
	});
}
