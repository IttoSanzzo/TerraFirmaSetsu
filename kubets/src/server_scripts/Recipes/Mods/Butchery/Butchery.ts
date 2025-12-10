// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { doButcherySkins } from "./ButcherySkins";
import { doButcheryFoods } from "./ButcheryFoods";
import { ItemCol } from "../../../HelpCollections/ItemCollections";

export function setRecipesButchery(event: $RecipesEventJS) {
	// --- Smiths
	function simpleSmith(
		output: string,
		ingredient: string,
		form: string[],
		tier: number
	) {
		event.recipes.tfc
			.anvil(output, ingredient, form)
			.tier(tier)
			.bonus(true)
			.id(`setsu:butchery/${output.substring(output.indexOf(":") + 1)}`);
	}
	function newButcherTool(
		type: "cleaver" | "skinning_knife" | "hammer" | "hacksaw",
		hits: [string] | [string, string] | [string, string, string]
	) {
		const typeWithoutUnderspace = type.replace("_", "");
		event.remove({ id: `butchery:bone${typeWithoutUnderspace}recipe` as any });
		simpleSmith(`butchery:bone_${type}`, "minecraft:bone", hits, 0);
		event.remove({
			id: `butchery:copper${typeWithoutUnderspace}recipe` as any,
		});
		simpleSmith(`butchery:copper_${type}`, "tfc:metal/ingot/copper", hits, 1);
		event.remove({ id: `butchery:iron${typeWithoutUnderspace}recipe` as any });
		simpleSmith(
			`butchery:iron_${type}`,
			"tfc:metal/ingot/wrought_iron",
			hits,
			3
		);
		event.remove({ id: `butchery:gold${typeWithoutUnderspace}recipe` as any });
		simpleSmith(`butchery:gold_${type}`, "tfc:metal/ingot/gold", hits, 1);
		event.remove({
			id: `butchery:diamond${typeWithoutUnderspace}recipe` as any,
		});
		simpleSmith(
			`butchery:diamond_${type}`,
			"tfc:metal/ingot/blue_steel",
			hits,
			6
		);
	}
	newButcherTool("cleaver", [
		"shrink_last",
		"draw_second_last",
		"draw_third_last",
	]);
	newButcherTool("skinning_knife", [
		"draw_last",
		"shrink_second_last",
		"shrink_third_last",
	]);
	newButcherTool("hammer", [
		"shrink_last",
		"hit_second_last",
		"punch_third_last",
	]);
	newButcherTool("hacksaw", ["shrink_last", "bend_not_last", "bend_not_last"]);

	// --- Wet Rag
	// event
	// 	.custom({
	// 		type: "tfc:barrel_instant",
	// 		input_item: {
	// 			ingredient: {
	// 				item: "butchery:rag",
	// 			},
	// 		},
	// 		input_fluid: {
	// 			ingredient: "minecraft:water",
	// 			amount: 100,
	// 		},
	// 		output_item: {
	// 			item: "butchery:wet_rag",
	// 		},
	// 	})
	// 	.id("setsu:butchery/wet_rag_in_barrel");
	event
		.custom({
			type: "tfc:barrel_instant",
			input_item: {
				ingredient: {
					item: "butchery:sponge",
				},
			},
			input_fluid: {
				ingredient: "minecraft:water",
				amount: 100,
			},
			output_item: {
				item: "butchery:wet_sponge",
			},
		})
		.id("setsu:butchery/wet_sponge_in_barrel");

	// --- Blocks
	event.remove({ id: "butchery:skinrackrecipe" });

	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.replaceInput(
			{ id: `butchery:${wood}displayrecipe` },
			"tfc:food/beef",
			"#tfc:foods/raw_meats"
		);
		if (wood == "crimson" || wood == "warped") return;
		event.replaceInput(
			{ mod: "butchery" },
			`minecraft:stripped_${wood}_wood`,
			"#forge:stripped_wood"
		);
		event.replaceInput(
			{ mod: "butchery" },
			`minecraft:${wood}_slab`,
			"#minecraft:wooden_slabs"
		);
	});
	event.remove({ id: "butchery:metalbutcherstablerecipe" });
	event
		.shaped("butchery:metal_butchers_table", ["ITI", "I I"], {
			I: "#setsu:ingot/all_iron",
			T: "#tfc:trapdoors",
		})
		.id("setsu:butchery/metal_butchers_table");
	event.remove({ id: "butchery:bloodgraterecipe" });
	event
		.shaped("butchery:blood_grate", ["NBN", "NTN", "NNN"], {
			N: "minecraft:iron_nugget",
			B: "tfc:metal/bars/wrought_iron",
			T: "#tfc:barrels",
		})
		.id("setsu:butchery/blood_grate");
	event.replaceInput(
		{ mod: "butchery" },
		"butchery:salmoncarcass",
		"tfc:food/salmon"
	);
	event.replaceInput(
		{ mod: "butchery" },
		"butchery:codcarcass",
		"tfc:food/cod"
	);
	event.replaceInput(
		{ mod: "butchery" },
		"minecraft:oak_sign",
		"#minecraft:signs"
	);
	event.replaceInput(
		{ id: "butchery:butchersfloorsign" },
		"minecraft:black_wool",
		"minecraft:black_carpet"
	);
	ItemCol.allDyes.forEach((color) => {
		if (color == "white") return;
		event.remove({ id: `butchery:${color.replace("_", "")}canopyrecipe` });
		event
			.shaped(`6x butchery:canopy_${color}` as any, ["CWC", "CWC", "III"], {
				C: `minecraft:${color}_carpet`,
				W: `minecraft:white_carpet`,
				I: `#forge:rods/all_metal`,
			})
			.id(`setsu:butchery/${color}_canopy`);
	});
	event.remove({ id: `butchery:animalfatcandlerecipe` });
	event
		.shapeless("artisanal:animal_fat", ["butchery:animal_fat"])
		.id("setsu:butchery/fat_to_artisanal_fat");

	doButcherySkins(event);
	doButcheryFoods(event);
}
