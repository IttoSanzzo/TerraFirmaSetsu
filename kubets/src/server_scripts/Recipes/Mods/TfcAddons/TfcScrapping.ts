// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesTfcScrapping(event: $RecipesEventJS) {
	["small", "medium", "large"].forEach((size, index) => {
		event.remove({ id: `tfc:crafting/${size}_sheepskin` });
		event
			.custom({
				type: "tfc:extra_products_shapeless_crafting",
				extra_products: [{ item: "tfc:wool", count: index + 1 }],
				recipe: {
					type: "tfc:damage_inputs_shapeless_crafting",
					recipe: {
						type: "minecraft:crafting_shapeless",
						ingredients: [
							{ item: `tfc:${size}_sheepskin_hide` },
							{ tag: "tfcscraping:scraping_knives" },
						],
						result: { item: `tfc:${size}_raw_hide` },
					},
				},
			})
			.id(`setsu:crafting/${size}_sheepskin_to_hide`);
		event
			.custom({
				type: "advancedtfctech:fleshing_machine",
				result: {
					stack: {
						item: `tfc:${size}_raw_hide`,
					},
					modifiers: [
						{
							type: "advancedtfctech:copy_tag",
							tag: "machine_made",
						},
					],
				},
				input: {
					item: `tfc:${size}_sheepskin_hide`,
				},
				time: 75,
				energy: 1500,
			})
			.id(`setsu:tfcscraping/ie/${size}_sheepskin_hide`);
		event
			.custom({
				type: "rosia:scraping_machine",
				ingredients: [
					{
						item: `tfc:${size}_sheepskin_hide`,
					},
				],
				output: {
					item: `tfc:${size}_raw_hide`,
					count: 1,
				},
			})
			.id(`setsu:tfcscraping/rosia/${size}_sheepskin_hide`);
	});
}
