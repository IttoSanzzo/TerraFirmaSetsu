// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesRosia(event: $RecipesEventJS) {
	event.remove({ id: "rosia:anvil/bucket" });
	event.shaped("3x minecraft:bucket", ["I I", " I "], {
		I: "rosia:purple_steel_ingot",
	});
}
