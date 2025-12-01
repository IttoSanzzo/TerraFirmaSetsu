// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesChipped(event: $RecipesEventJS) {
	event.remove({ id: "chipped:benches/loom_table" });
	event
		.shaped("chipped:loom_table", ["LLL", "WCW", "WOW"], {
			L: "#tfc:looms",
			W: "#tfc:firepit_logs",
			C: "minecraft:crafting_table",
			O: "#minecraft:wool",
		})
		.id("setsu:chipped/loom_table");
}
