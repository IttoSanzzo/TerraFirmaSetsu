// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesMaidRestaurant(event: $RecipesEventJS) {
	event.remove({ id: "maid_restaurant:cooking_guide" });
	event
		.shapeless("maid_restaurant:cooking_guide", [
			"minecraft:paper",
			"#forge:food",
		])
		.id("setsu:maid_restaurant/cooking_guide");
}
