// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { ItemCol } from "../../HelpCollections/ItemCollections";

export function setRecipesFarmersdelight(event: $RecipesEventJS) {
	event.remove({ id: "farmersdelight:stove" });
	event.remove({ id: `farmersdelight:rice_bale` });
	event.remove({ id: `farmersdelight:organic_compost_from_tree_bark` });

	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.remove({ id: `farmersdelight:${wood}_cabinet` });
	});
	event.remove({ id: `farmersdelight:bamboo_cabinet` });
	event.remove({ id: `farmersdelight:wheat_dough_from_water` });

	event.recipes.tfc
		.anvil("farmersdelight:golden_knife", "tfc:metal/ingot/gold", [
			"hit_last",
			"draw_second_last",
			"draw_third_last",
		])
		.tier(1)
		.id("setsu:farmersdelight/golden_knife");
	event.recipes.tfc
		.welding(
			"farmersdelight:netherite_knife",
			"farmersdelight:golden_knife",
			"potionsmaster:calcinatednetherite_powder",
			5
		)
		.id("setsu:farmersdelight/netherite_knife");
}
