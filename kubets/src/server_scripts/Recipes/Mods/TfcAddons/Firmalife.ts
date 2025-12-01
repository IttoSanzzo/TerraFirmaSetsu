// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { ItemCol } from "../../../HelpCollections/ItemCollections";

export function setRecipesFirmalife(event: $RecipesEventJS) {
	ItemCol.tfcGrains.forEach((grain) => {
		event.remove({ output: `firmalife:food/${grain}_dough` });

		event
			.shapeless(`4x firmalife:food/${grain}_dough`, [
				{
					type: "tfc:fluid_item",
					fluid_ingredient: {
						ingredient: "firmalife:yeast_starter",
						amount: 100,
					},
				},
				{
					type: "tfc:not_rotten",
					ingredient: {
						item: `tfc:food/${grain}_flour`,
					},
				},
				"#firmalife:sweetener",
			])
			.id(`setsu:firmalife/food/${grain}_dough_manual_only`);

		addCreateMixing(
			event,
			{
				item: `firmalife:food/${grain}_dough`,
				count: 4,
			},
			[
				{
					fluid: "firmalife:yeast_starter",
					amount: 100,
				},
				{
					type: "tfc:not_rotten",
					ingredient: {
						item: `tfc:food/${grain}_flour`,
					},
				},
				{
					tag: "firmalife:sweetener",
				},
			]
		);
		tfcBucketRecipes(
			event,
			`tfc:food/${grain}_dough`,
			2,
			"minecraft:water",
			100,
			{
				type: "tfc:not_rotten",
				ingredient: {
					item: `tfc:food/${grain}_flour`,
				},
			}
		);
	});

	tfcBucketRecipes(event, `firmalife:food/masa`, 2, `minecraft:water`, 100, {
		type: "tfc:not_rotten",
		ingredient: {
			item: `firmalife:food/masa_flour`,
		},
	});
}
