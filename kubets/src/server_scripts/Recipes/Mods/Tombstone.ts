// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesTombstone(event: $RecipesEventJS) {
	event.remove({ id: "tombstone:receptacle_of_familiar" });
	event
		.shaped("tombstone:receptacle_of_familiar", ["TIT", "IDI", "TIT"], {
			T: "minecraft:ghast_tear",
			I: "tfc:metal/ingot/wrought_iron",
			D: "tombstone:impregnated_diamond",
		})
		.id("setsu:tombstone/receptacle_of_familiar");
}
