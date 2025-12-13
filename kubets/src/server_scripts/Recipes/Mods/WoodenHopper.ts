// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesWoodenHopper(event: $RecipesEventJS) {
	event.remove({ id: "woodenhopper:wooden_hopper" });
	event
		.shaped("2x woodenhopper:wooden_hopper", ["S S", " C "], {
			S: "tfc:metal/sheet/bronze",
			C: "#forge:chests/wooden",
		})
		.id("setsu:woodenhopper/wooden_hopper_from_bronze_sheets");
}
