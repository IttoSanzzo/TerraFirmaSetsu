// priority: 1000

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { RawCookedMeatPair } from "../Extras/CustomFoods";

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

type VanillaShapedKey = Record<string, KjsItemOrItemTag>;
export function addDamageShaped(
	recipesEvent: $RecipesEventJS,
	output: KjsItemStack,
	grid: [string] | [string, string] | [string, string, string],
	ingredients: VanillaShapedKey
) {
	recipesEvent.recipes.tfc
		.damage_inputs_shaped_crafting(
			recipesEvent.recipes.minecraft.crafting_shaped(output, grid, ingredients)
		)
		.id(
			`setsu:tfc/damage/${(output as string).replace(":", ".").replace("/", ".").replace(" ", "_")}`
		);
}

export function addDamageShapeless(
	recipesEvent: $RecipesEventJS,
	output: KjsItemStack,
	ingredients: KjsItemOrItemTagStack | KjsItemOrItemTagStack[]
) {
	recipesEvent.recipes.tfc
		.damage_inputs_shapeless_crafting(
			recipesEvent.recipes.minecraft.crafting_shapeless(output, ingredients)
		)
		.id(
			`setsu:tfc/damage/${(output as string).replace(":", ".").replace("/", ".").replace(" ", "_")}/from/${ingredients[0].replace(":", ".").replace("/", ".").replace(" ", "_").replace("#", "_")}`
		);
}

export function newRawToCookedMeatRecipe(
	recipesEvent: $RecipesEventJS,
	meats: RawCookedMeatPair,
	cookTemperature?: number,
	destroyTemperature?: number
) {
	if (!cookTemperature) cookTemperature = 200;
	if (!destroyTemperature) destroyTemperature = 900;
	recipesEvent.recipes.tfc
		.heating(meats.raw.id, cookTemperature)
		.resultItem(meats.cooked.id)
		.id(
			`setsu:all/cooking/${(meats.cooked.id as string).substring((meats.cooked.id as string).indexOf(":") + 1)}`
		);
	recipesEvent.recipes.tfc
		.heating(meats.cooked.id, destroyTemperature)
		.id(
			`setsu:all/cooking/${(meats.cooked.id as string).substring((meats.cooked.id as string).indexOf(":") + 1)}_overdone`
		);
}
