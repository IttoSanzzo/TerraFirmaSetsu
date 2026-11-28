// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesEpicKnights(event: $RecipesEventJS) {
	event.remove({ id: "knightsofterrafirma:anvil/iron_nugget" });
}
