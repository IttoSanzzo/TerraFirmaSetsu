// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped, addDamageShapeless } from "../../_helperFunctions";
import { doButcherySkins } from "./ButcherySkins.ts";

export function setRecipesButchery(event: $RecipesEventJS) {
	// --- Smiths
	event.remove({ output: "butcher:unfiredcleavermold" });
	event.remove({ output: "butcher:fired_cleaver_mold" });
	event.remove({ output: "butcher:unfiredpliermould" });
	event.remove({ output: "butcher:firedpliermould" });
	event.remove({ output: "butcher:unfiredskinningknifeblademold" });
	event.remove({ output: "butcher:firedskinningknifemold" });
	event.remove({ id: "butcher:cleaverblade" });
	event.remove({ id: "butcher:skinningknifebladerecipe" });
	event.remove({ id: "butcher:plierjawrecipe" });

	// --- Butcher Knives
	event.remove({ id: "butcher:butchers_knife_recipe" });
	event.remove({ id: "butcher:bonebutchersknife_recipe" });
	addDamageShaped(event, "butcher:bonebutchersknife", ["WSK", "BB "], {
		S: "#forge:string",
		W: "tfc_items:short_wooden_handle",
		B: "minecraft:bone",
		K: "#tfc:knives",
	});
	event.remove({ id: "butcher:cleavercrafting" });
	event
		.shaped("butcher:butchers_knife", [" RB", "GW ", " T "], {
			R: "tfc_items:wrought_iron_rivet",
			B: "butcher:ironcleaverblade",
			G: "#forge:glue",
			W: "tfc_items:short_wooden_handle",
			T: "#forge:leather/string",
		})
		.id("setsu:butcher/iron_butcher_knife");
	event.remove({ id: "butcher:netherite_butchers_knife_crafting" });
	addDamageShapeless(event, "butcher:netherite_butchers_knife", [
		"butcher:butchers_knife",
		"#tfc:hammers",
		"tfc:metal/sheet/black_steel",
	]);

	// --- Skinning Knives
	event.remove({ id: "butcher:skinning_knife_recipe" });
	event.remove({ id: "butcher:boneskinningkniferecipe" });
	addDamageShaped(event, "butcher:boneskinningknife", ["WSB", "KBB"], {
		S: "#forge:string",
		W: "tfc_items:short_wooden_handle",
		B: "minecraft:bone",
		K: "#tfc:knives",
	});
	event.remove({ id: "butcher:skinningknifecrafting" });
	event
		.shaped("butcher:skinning_knife", [" RB", "GW ", " T "], {
			R: "tfc_items:wrought_iron_rivet",
			B: "butcher:skinningknifeblade",
			G: "#forge:glue",
			W: "tfc_items:short_wooden_handle",
			T: "#forge:leather/string",
		})
		.id("setsu:butcher/iron_skinning_knife");

	// --- Plier
	event.remove({ id: "butcher:pliers_recipe" });
	event.remove({ id: "butcher:pliercrafting" });
	event
		.shaped("butcher:pliers", ["T B", "WR ", "XWT"], {
			T: "#forge:leather/string",
			B: "butcher:plierjaw",
			R: "tfc_items:wrought_iron_rivet",
			W: "tfc_items:short_wooden_handle",
			X: "tfc_items:wrought_iron_ring",
		})
		.id("setsu:butcher/iron_pliers");
	// --- Wet Rag
	event
		.custom({
			type: "tfc:barrel_instant",
			input_item: {
				ingredient: {
					item: "butcher:rag",
				},
			},
			input_fluid: {
				ingredient: "minecraft:water",
				amount: 100,
			},
			output_item: {
				item: "butcher:wet_rag",
			},
		})
		.id("setsu:butcher/wet_rag_in_barrel");
	event
		.custom({
			type: "tfc:barrel_instant",
			input_item: {
				ingredient: {
					item: "butcher:sponge",
				},
			},
			input_fluid: {
				ingredient: "minecraft:water",
				amount: 100,
			},
			output_item: {
				item: "butcher:wet_sponge",
			},
		})
		.id("setsu:butcher/wet_sponge_in_barrel");
	event
		.custom({
			type: "tfc:barrel_instant",
			input_item: {
				ingredient: {
					item: "butcher:blood_soaked_sponge",
				},
			},
			input_fluid: {
				ingredient: "minecraft:water",
				amount: 300,
			},
			output_item: {
				item: "butcher:wet_sponge",
			},
		})
		.id("setsu:butcher/clean_sponge_in_barrel");

	// --- Blocks
	event.remove({ id: "butcher:skinrackrecipe" });
	event.remove({ id: "butcher:butchers_table_recipe" });
	event
		.shaped("butcher:butcherstable", ["ITI", "I I"], {
			I: "#setsu:ingot/all_iron",
			T: "#tfc:trapdoors",
		})
		.id("setsu:butcher/butchers_table");
	event.remove({ id: "butcher:bloodgrate_recipe" });
	event
		.shaped("butcher:bloodgratetank", ["NNN", "NBN", "NNN"], {
			B: "tfc:metal/bars/wrought_iron",
			N: "minecraft:iron_nugget",
		})
		.id("setsu:butcher/blood_grate");
	event.remove({ id: "butcher:halfcowrecipe" });
	addDamageShapeless(event, "2x butcher:half_cowitem", [
		"#tfc:swords",
		"butcher:skinned_cow_corpse_item",
	]);
	event.remove({ id: "butcher:tfcspitroastrecipe" });
	event.remove({ id: "butcher:metal_tray_crafting_2" });
	event.replaceInput(
		{ id: "butcher:spit_roast_recipe" },
		"tfc:metal/ingot/wrought_iron",
		"tfc:metal/rod/wrought_iron"
	);
	event.replaceInput({ mod: "butcher" }, "butcher:salmon", "tfc:food/salmon");
	event.replaceInput({ mod: "butcher" }, "butcher:cod", "tfc:food/cod");
	event.replaceInput(
		{ mod: "butcher" },
		"minecraft:oak_slab",
		"#minecraft:wooden_slabs"
	);
	event.replaceInput(
		{ mod: "butcher" },
		"minecraft:oak_sign",
		"#minecraft:signs"
	);

	doButcherySkins(event);
}
