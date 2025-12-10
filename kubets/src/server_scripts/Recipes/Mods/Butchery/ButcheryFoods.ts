// priority: 199

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { butcherMeatDict } from "../../../Extras/Mods/ButcheryFoodData";
import { newRawToCookedMeatRecipe } from "../../_helperFunctions";

export function doButcheryFoods(event: $RecipesEventJS) {
	butcherMeatDict.forEach((meat) => {
		newRawToCookedMeatRecipe(event, meat);
	});
}
