// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesCreateAdditions(event: $RecipesEventJS) {
	event.replaceInput(
		{ id: "createaddition:mixing/biomass_from_saplings" },
		"#minecraft:saplings",
		"#forge:saplings"
	);
}
