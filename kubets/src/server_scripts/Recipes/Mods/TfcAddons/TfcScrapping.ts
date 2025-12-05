// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShapeless } from "../../_helperFunctions";

export function setRecipesTfcScrapping(event: $RecipesEventJS) {
	["small", "medium", "large"].forEach((size, index) => {
		event.remove({ id: `tfc:crafting/${size}_sheepskin` });
		event
			.custom({
				type: "tfc:extra_products_shapeless_crafting",
				extra_products: [{ item: `tfc:${size}_raw_hide` }],
				recipe: {
					type: "tfc:damage_inputs_shapeless_crafting",
					recipe: {
						type: "minecraft:crafting_shapeless",
						ingredients: [
							{ item: `tfc:${size}_sheepskin_hide` },
							{ tag: "tfcscraping:scraping_knives" },
						],
						result: { item: "tfc:wool", count: index + 1 },
					},
				},
			})
			.id(`setsu:crafting/${size}_sheepskin_to_hide`);
	});
}
