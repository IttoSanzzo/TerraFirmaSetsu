// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesBreezy(event: $RecipesEventJS) {
	const modId = "breezy";

	event.replaceInput({ mod: modId }, "#forge:wool", "#tfc:high_quality_cloth");
}
