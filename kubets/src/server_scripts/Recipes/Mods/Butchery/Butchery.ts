// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesButchery(event: $RecipesEventJS) {
	event.remove({ id: "butcher:butchers_knife_recipe" });
	event.remove({ id: "butcher:netherite_butchers_knife_crafting" });
	event.remove({ id: "butcher:skinning_knife_recipe" });
	event.remove({ id: "butcher:pliers_recipe" });
	// event
	// 	.shaped("bioforge_loomborn:silkworm_hive", ["LLL", "WCW", "LLL"], {
	// 		L: "firmalife:treated_lumber",
	// 		W: "#tfc:fallen_leaves",
	// 		C: "bioforge_loomborn:covered_silkworm_egg",
	// 	})
	// 	.id("setsu:bioforge_loomborn/silkworm_hive");
}
