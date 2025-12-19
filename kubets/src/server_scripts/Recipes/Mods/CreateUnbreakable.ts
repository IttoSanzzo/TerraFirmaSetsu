// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function generateCombinations<T>(
	source: T[],
	size: number,
	start?: number,
	current?: T[],
	result?: T[][]
) {
	if (!start) start = 0;
	if (!current) current = [];
	if (!result) result = [];
	if (current.length === size) {
		result.push(current.map((entry) => entry));
		return;
	}
	for (let i = start; i <= source.length - (size - current.length); i++) {
		current.push(source[i]);
		generateCombinations(source, size, i + 1, current, result);
		current.pop();
	}
	return result;
}

export const allEternalIngredients = [
	"bloodmagic:ingot_hellforged",
	"botania:terrasteel_ingot",
	"botania:gaia_ingot",
	"malum:soul_stained_steel_ingot",
	"ad_astra:calorite_ingot",
	"rosia:purple_steel_ingot",
	"mna:superheated_purified_vinteum_ingot",
	"#setsu:dragonsteel",
	"#mna:greater_motes",
];

export function setRecipesCreateUnbreakable(event: $RecipesEventJS) {
	event.remove({
		id: "create_unbreakable:mechanical_crafting/eternal_modifier",
	});

	let ETERNAL_INGREDIENTS_REQUIRED = 8;
	const eternalIngredients = allEternalIngredients;

	function eternalizingCoreRecipes(ingredients: string[]) {
		const refinedIngredients = ingredients.map((ingredient) =>
			ingredient[0] != "#"
				? { item: ingredient, count: 1 }
				: { tag: ingredient.substring(1), count: 1 }
		);
		event
			.custom({
				type: "malum:spirit_infusion",
				extra_items: refinedIngredients,
				input: {
					count: 1,
					item: "minecraft:nether_star",
				},
				output: {
					item: "create_unbreakable:irromolding",
				},
				spirits: [
					{
						type: "sacred",
						count: 1,
					},
					{
						type: "wicked",
						count: 1,
					},
					{
						type: "arcane",
						count: 1,
					},
					{
						type: "eldrich",
						count: 1,
					},
					{
						type: "aerial",
						count: 1,
					},
					{
						type: "aqueous",
						count: 1,
					},
					{
						type: "earthen",
						count: 1,
					},
					{
						type: "infernal",
						count: 1,
					},
				],
			})
			.id(
				`setsu:eternal_core/from/${ingredients.map((ingredient) => ingredient.substring(ingredient.indexOf(":") + 1)).join("_AND_")}`
			);
	}

	const combinations =
		generateCombinations(
			eternalIngredients,
			Math.min(ETERNAL_INGREDIENTS_REQUIRED, eternalIngredients.length)
		) ?? [];
	for (const combo of combinations) {
		eternalizingCoreRecipes(combo);
	}
}
