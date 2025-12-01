// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesBloodMagic(event: $RecipesEventJS) {
	event.remove({ id: "bloodmagic:alchemicalreactionchamber" });
	event
		.shaped("bloodmagic:alchemicalreactionchamber", ["SSS", "IOI", "BFB"], {
			S: "#forge:stone",
			I: "bloodmagic:infusedslate",
			O: "bloodmagic:weakbloodorb",
			F: "tfc:crucible",
			B: "minecraft:iron_block",
		})
		.id("setsu:bloodmagic/alchemicalreactionchamber");

	event.remove({ id: "bloodmagic:altar" });
	event
		.shaped("bloodmagic:altar", ["S S", "SFS", "GGG"], {
			S: "#forge:stone",
			F: "tfc:crucible",
			G: "#forge:ingots/gold",
		})
		.id("setsu:bloodmagic/altar");

	event.replaceOutput(
		{ mod: "bloodmagic" },
		"minecraft:leather",
		"tfc:small_raw_hide"
	);

	event
		.custom({
			type: "create:filling",
			ingredients: [
				{
					item: "minecraft:sea_lantern",
				},
				{
					fluid: "bloodmagic:life_essence_fluid",
					amount: 1000,
				},
			],
			results: [
				{
					item: "minecraft:heart_of_the_sea",
				},
			],
		})
		.id("setsu:bloodmagic/filling/heart_of_the_sea");

	/*
	event.replaceInput(
		{ mod: "bloodmagic" },
		"tfc:rock/raw/andesite",
		"#tfc:bloodmagic_smooths"
	);
	*/
}
