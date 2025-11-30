// priority: 1000

/**
 * 
 * @param {Internal.RecipeEventJS} recipesEvent
 * @param {*} output
 * @param {*} ingredients
 */

const addCreateMixing = (recipesEvent, output, ingredients) => {
	recipesEvent.custom({
		type: "create:mixing",
		results: [output],
		ingredients: ingredients
	}).id(output.item ?
		`setsu:create/mixing/${output.item.replace(":", ".").replace("/", ".")}`
		: `setsu:create/mixing/${output.fluid.replace(":", ".").replace("/", ".")}`);
}


/**
 *
 * @param {Internal.RecipeEventJS} recipesEvent
 * @param {string} output
 * @param {number} count
 * @param {string} fluid
 * @param {number} amount
 * @param {Object} input
 */
const tfcBucketRecipes = (recipesEvent, output, count, fluid, amount, input) => {
	recipesEvent.remove({ output: output })
	let totalInput = [];
	for (let i = 1; i <= 8; ++i) {
		totalInput = totalInput.concat(input);
		recipesEvent.shapeless(
			`${i * count}x ${output}`,
			[
				{
					type: "tfc:fluid_item",
					fluid_ingredient: {
						ingredient: fluid,
						amount: i * amount
					}
				}
			].concat(totalInput)
		).id(`setsu:firmalife/${output.replace(`:`, `/`)}_${i}_manual_only`);
	}

	addCreateMixing(
		recipesEvent,
		{
			item: output,
			count: count
		},
		[
			{
				fluid: fluid,
				amount: amount
			},
			input
		]
	)
}

/**
 * 
 * @param {Internal.RecipesEventJS} recipesEvent 
 * @param {*} output 
 * @param {*} grid 
 * @param {*} ingredients 
 */
const addDamageShaped = (recipesEvent, output, grid, ingredients) => {
	recipesEvent.recipes.tfc.damage_inputs_shaped_crafting(recipesEvent.recipes.minecraft.crafting_shaped(
		output, grid, ingredients
	)).id(`setsu:tfc/damage/${output.replace(":", ".").replace("/", ".").replace(" ", "_")}`);
};

/**
 * 
 * @param {Internal.RecipesEventJS} recipesEvent 
 * @param {*} output 
 * @param {*} ingredients 
 */
const addDamageShapeless = (recipesEvent, output, ingredients) => {
	recipesEvent.recipes.tfc.damage_inputs_shapeless_crafting(recipesEvent.recipes.minecraft.crafting_shapeless(
		output, ingredients
	)).id(`setsu:tfc/damage/${output.replace(":", ".").replace("/", ".").replace(" ", "_")}/from/${ingredients[0].replace(":", ".").replace("/", ".").replace(" ", "_").replace("#", "_")}`);
};