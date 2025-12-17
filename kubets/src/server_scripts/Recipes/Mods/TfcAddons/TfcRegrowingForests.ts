// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesTfcRegrowingForests(event: $RecipesEventJS) {
	function addNewRegrowth(data: {
		leaves: string;
		sapling: string;
		chance: number;
		spread_distance: number;
		min_y: number;
		max_y: number;
		min_light: number;
		max_light: number;
		min_temperature: number;
		max_temperature: number;
		min_rainfall: number;
		max_rainfall: number;
		min_forest_density: number;
		max_forest_density: number;
		min_forest_type: "edge";
		max_forest_type: "old_growth";
		months: (
			| "january"
			| "february"
			| "march"
			| "april"
			| "may"
			| "june"
			| "july"
			| "august"
			| "september"
			| "october"
			| "november"
			| "december"
		)[];
		fuzzy: boolean;
	}) {
		console.log(
			`TFCRF ADDING ${data.sapling.substring(data.sapling.indexOf(":") + 1)}`
		);
		event
			.custom({
				type: "tfcrf:regrowth",
				leaves: data.leaves,
				sapling: data.sapling,
				chance: data.chance,
				spread_distance: data.spread_distance,
				min_y: data.min_y,
				max_y: data.max_y,
				min_light: data.min_light,
				max_light: data.max_light,
				min_temperature: data.min_temperature,
				max_temperature: data.max_temperature,
				min_rainfall: data.min_rainfall,
				max_rainfall: data.max_rainfall,
				min_forest_density: data.min_forest_density,
				max_forest_density: data.max_forest_density,
				min_forest_type: data.min_forest_type,
				max_forest_type: data.max_forest_type,
				months: data.months,
				fuzzy: data.fuzzy,
			})
			.id(
				`tfcrf:recipes/regrowth/wood/${data.sapling.substring(data.sapling.indexOf(":") + 1)}`
			);
	}

	addNewRegrowth({
		leaves: "tfc:grass/loam",
		sapling: "minecraft:sea_lantern",
		chance: 1475,
		spread_distance: 7,
		min_y: 63,
		max_y: 128,
		min_light: 11,
		max_light: 15,
		min_temperature: -12.1,
		max_temperature: 6.1,
		min_rainfall: 125,
		max_rainfall: 310,
		min_forest_density: 0.2,
		max_forest_density: 1.0,
		min_forest_type: "edge",
		max_forest_type: "old_growth",
		months: ["august", "september", "october", "november"],
		fuzzy: true,
	});
}
