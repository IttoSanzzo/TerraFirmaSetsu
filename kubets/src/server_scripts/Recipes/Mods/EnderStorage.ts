// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped } from "../_helperFunctions";

export function setRecipesEnderStorage(event: $RecipesEventJS) {
	event.remove({ id: "enderstorage:ender_chest" });
	event
		.shaped("enderstorage:ender_chest", ["BWB", "OCO", "BPB"], {
			P: "#forge:ender_pearls",
			O: "#forge:obsidian",
			C: "#forge:chests/wooden",
			B: "minecraft:blaze_rod",
			W: "#thermal:rockwool",
		})
		.id("setsu:enderstorage/ender_chest");

	event.remove({ id: "enderstorage:ender_tank" });
	event
		.shaped("enderstorage:ender_tank", ["BWB", "OCO", "BPB"], {
			P: "#forge:ender_pearls",
			O: "#forge:obsidian",
			C: "minecraft:bucket",
			B: "minecraft:blaze_rod",
			W: "#thermal:rockwool",
		})
		.id("setsu:enderstorage/ender_tank");

	event.remove({ id: "enderstorage:ender_pouch" });
	addDamageShaped(event, "enderstorage:ender_pouch", ["VLN", "LPL", "BWB"], {
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		P: "#forge:ender_pearls",
		L: "#forge:leather",
		B: "minecraft:blaze_rod",
		W: "#thermal:rockwool",
	});
}
