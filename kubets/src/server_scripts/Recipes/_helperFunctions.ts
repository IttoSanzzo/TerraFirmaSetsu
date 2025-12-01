// priority: 1000

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function addCreateMixing(
	recipesEvent: $RecipesEventJS,
	output: any,
	ingredients: any
) {
	recipesEvent
		.custom({
			type: "create:mixing",
			results: [output],
			ingredients: ingredients,
		})
		.id(
			output.item
				? `setsu:create/mixing/${output.item.replace(":", ".").replace("/", ".")}`
				: `setsu:create/mixing/${output.fluid.replace(":", ".").replace("/", ".")}`
		);
}

export function tfcBucketRecipes(
	recipesEvent: $RecipesEventJS,
	output: any,
	count: number,
	fluid: any,
	amount: number,
	input: any
) {
	recipesEvent.remove({ output: output });
	let totalInput = [];
	for (let i = 1; i <= 8; ++i) {
		totalInput = totalInput.concat(input);
		recipesEvent
			.shapeless(
				`${i * count}x ${output}`,
				[
					{
						type: "tfc:fluid_item",
						fluid_ingredient: {
							ingredient: fluid,
							amount: i * amount,
						},
					},
				].concat(totalInput)
			)
			.id(`setsu:firmalife/${output.replace(`:`, `/`)}_${i}_manual_only`);
	}

	addCreateMixing(
		recipesEvent,
		{
			item: output,
			count: count,
		},
		[
			{
				fluid: fluid,
				amount: amount,
			},
			input,
		]
	);
}

export function addDamageShaped(
	recipesEvent: $RecipesEventJS,
	output: any,
	grid: any,
	ingredients: any
) {
	recipesEvent.recipes.tfc
		.damage_inputs_shaped_crafting(
			recipesEvent.recipes.minecraft.crafting_shaped(output, grid, ingredients)
		)
		.id(
			`setsu:tfc/damage/${output.replace(":", ".").replace("/", ".").replace(" ", "_")}`
		);
}

export function addDamageShapeless(
	recipesEvent: $RecipesEventJS,
	output: any,
	ingredients: any
) {
	recipesEvent.recipes.tfc
		.damage_inputs_shapeless_crafting(
			recipesEvent.recipes.minecraft.crafting_shapeless(output, ingredients)
		)
		.id(
			`setsu:tfc/damage/${output.replace(":", ".").replace("/", ".").replace(" ", "_")}/from/${ingredients[0].replace(":", ".").replace("/", ".").replace(" ", "_").replace("#", "_")}`
		);
}
