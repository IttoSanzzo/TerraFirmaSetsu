// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesBigReactors(event: $RecipesEventJS) {
	event.replaceInput(
		{ mod: "biggerreactors" },
		"minecraft:sand",
		"#forge:sand"
	);
	event.remove({ id: "biggerreactors:graphite_dust" });
	event
		.shaped("biggerreactors:graphite_dust", ["DDD", "DDD", "DDD"], {
			D: "tfc:powder/graphite",
		})
		.id("setsu:bigreactors/graphite_dust");
}
