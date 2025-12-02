// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesBioforgeLoomborn(event: $RecipesEventJS) {
	event.remove({ id: "bioforge_loomborn:silkworm_hive_recipe" });
	event
		.shaped("bioforge_loomborn:silkworm_hive", ["LLL", "WCW", "LLL"], {
			L: "firmalife:treated_lumber",
			W: "#tfc:fallen_leaves",
			C: "bioforge_loomborn:covered_silkworm_egg",
		})
		.id("setsu:bioforge_loomborn/silkworm_hive");

	event.recipes.tfc
		.damage_inputs_shapeless_crafting(
			event.recipes.minecraft.crafting_shapeless("minecraft:string", [
				"4x kubejs:misc/silk_cocoon",
				"tfc:spindle",
			])
		)
		.id(`setsu:bioforge_loomborn/string_from_cocoon`);
}
