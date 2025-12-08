// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped, addDamageShapeless } from "../../_helperFunctions";
import { doButcherySkins } from "./ButcherySkins";
import { doButcheryFoods } from "./ButcheryFoods";

export function setRecipesButchery(event: $RecipesEventJS) {
	// --- Smiths
	// event.remove({ output: "butchery:unfiredcleavermold" });
	// event.remove({ output: "butchery:fired_cleaver_mold" });
	// event.remove({ output: "butchery:unfiredpliermould" });
	// event.remove({ output: "butchery:firedpliermould" });
	// event.remove({ output: "butchery:unfiredskinningknifeblademold" });
	// event.remove({ output: "butchery:firedskinningknifemold" });
	// event.remove({ id: "butchery:cleaverblade" });
	// event.remove({ id: "butchery:skinningknifebladerecipe" });
	// event.remove({ id: "butchery:plierjawrecipe" });
	// --- Butcher Knives
	// event.remove({ id: "butchery:butchers_knife_recipe" });
	// event.remove({ id: "butchery:bonebutchersknife_recipe" });
	// addDamageShaped(event, "butchery:bonebutchersknife", ["WSK", "BB "], {
	// 	S: "#forge:string",
	// 	W: "tfc_items:short_wooden_handle",
	// 	B: "minecraft:bone",
	// 	K: "#tfc:knives",
	// });
	// event.remove({ id: "butchery:cleavercrafting" });
	// event
	// 	.shaped("butchery:butchers_knife", [" RB", "GW ", " T "], {
	// 		R: "tfc_items:wrought_iron_rivet",
	// 		B: "butchery:ironcleaverblade",
	// 		G: "#forge:glue",
	// 		W: "tfc_items:short_wooden_handle",
	// 		T: "#forge:leather/string",
	// 	})
	// 	.id("setsu:butchery/iron_butcher_knife");
	// event.remove({ id: "butchery:netherite_butchers_knife_crafting" });
	// addDamageShapeless(event, "butchery:netherite_butchers_knife", [
	// 	"butchery:butchers_knife",
	// 	"#tfc:hammers",
	// 	"tfc:metal/sheet/black_steel",
	// ]);
	// --- Skinning Knives
	// event.remove({ id: "butchery:skinning_knife_recipe" });
	// event.remove({ id: "butchery:boneskinningkniferecipe" });
	// addDamageShaped(event, "butchery:boneskinningknife", ["WSB", "KBB"], {
	// 	S: "#forge:string",
	// 	W: "tfc_items:short_wooden_handle",
	// 	B: "minecraft:bone",
	// 	K: "#tfc:knives",
	// });
	// event.remove({ id: "butchery:skinningknifecrafting" });
	// event
	// 	.shaped("butchery:skinning_knife", [" RB", "GW ", " T "], {
	// 		R: "tfc_items:wrought_iron_rivet",
	// 		B: "butchery:skinningknifeblade",
	// 		G: "#forge:glue",
	// 		W: "tfc_items:short_wooden_handle",
	// 		T: "#forge:leather/string",
	// 	})
	// 	.id("setsu:butchery/iron_skinning_knife");
	// --- Plier
	// event.remove({ id: "butchery:pliers_recipe" });
	// event.remove({ id: "butchery:pliercrafting" });
	// event
	// 	.shaped("butchery:pliers", ["T B", "WR ", "XWT"], {
	// 		T: "#forge:leather/string",
	// 		B: "butchery:plierjaw",
	// 		R: "tfc_items:wrought_iron_rivet",
	// 		W: "tfc_items:short_wooden_handle",
	// 		X: "tfc_items:wrought_iron_ring",
	// 	})
	// 	.id("setsu:butchery/iron_pliers");

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
	// event.remove({ id: "butchery:skinrackrecipe" });
	// event.remove({ id: "butchery:butchers_table_recipe" });
	// event
	// 	.shaped("butchery:butcherstable", ["ITI", "I I"], {
	// 		I: "#setsu:ingot/all_iron",
	// 		T: "#tfc:trapdoors",
	// 	})
	// 	.id("setsu:butchery/butchers_table");
	// event.remove({ id: "butchery:bloodgrate_recipe" });
	// event
	// 	.shaped("butchery:bloodgratetank", ["NNN", "NBN", "NNN"], {
	// 		B: "tfc:metal/bars/wrought_iron",
	// 		N: "minecraft:iron_nugget",
	// 	})
	// 	.id("setsu:butchery/blood_grate");
	// event.remove({ id: "butchery:halfcowrecipe" });
	// addDamageShapeless(event, "2x butchery:half_cowitem", [
	// 	"#tfc:swords",
	// 	"butchery:skinned_cow_corpse_item",
	// ]);
	// event.remove({ id: "butchery:tfcspitroastrecipe" });
	// event.remove({ id: "butchery:metal_tray_crafting_2" });
	// event.replaceInput(
	// 	{ id: "butchery:spit_roast_recipe" },
	// 	"tfc:metal/ingot/wrought_iron",
	// 	"tfc:metal/rod/wrought_iron"
	// );
	// event.replaceInput({ mod: "butcher" }, "butchery:salmon", "tfc:food/salmon");
	// event.replaceInput({ mod: "butcher" }, "butchery:cod", "tfc:food/cod");
	// event.replaceInput(
	// 	{ mod: "butcher" },
	// 	"minecraft:oak_slab",
	// 	"#minecraft:wooden_slabs"
	// );
	// event.replaceInput(
	// 	{ mod: "butcher" },
	// 	"minecraft:oak_sign",
	// 	"#minecraft:signs"
	// );
	doButcherySkins(event);
	// doButcheryFoods(event);
}
