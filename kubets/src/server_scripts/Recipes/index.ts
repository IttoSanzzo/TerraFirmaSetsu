//priority: 200

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { setRecipeModifies } from "./Global/Modifies";
import { setRecipeRemoves } from "./Global/Removes";
import { setRecipesCreateAdditions } from "./Mods/CreateAddons/CreateAdditions";
import { setRecipesCreateEncased } from "./Mods/CreateAddons/CreateEncased";
import { setRecipesCreateRailways } from "./Mods/CreateAddons/CreateRailways";
import { setRecipesCreateStuffAndAdditions } from "./Mods/CreateAddons/CreateStuffAndAdditions";
import { setRecipesFirmalife } from "./Mods/TfcAddons/Firmalife";
import { setRecipesFirmaciv } from "./Mods/TfcAddons/Firmaciv";
import { setRecipesTfcBetterBf } from "./Mods/TfcAddons/TfcBetterBf";

export function setRecipes(event: $RecipesEventJS) {
	console.log("Setsu Recipes Start!");

	// Globals
	setRecipeRemoves(event);
	setRecipeModifies(event);

	// Mods
	setRecipesKubeJS(event);
	setRecipesTerraFirmaCraft(event);
	setRecipesImmersiveEngineering(event);
	setRecipesCreate(event);
	setRecipesThermal(event);
	setRecipesSupplementaries(event);
	setRecipesChipped(event);
	setRecipesAccommodation(event);
	setRecipesTombstone(event);
	setRecipesTomsStorage(event);
	setRecipesApotheosis(event);
	setRecipesBloodMagic(event);
	setRecipesEnderStorage(event);
	setRecipesFunctionalStorage(event);
	setRecipesPotionsMaster(event);
	setRecipesFarmersdelight(event);
	setRecipesQuark(event);
	setRecipesHexerei(event);
	setRecipesMalum(event);
	setRecipesConstructionWand(event);
	setRecipesSimplePlanes(event);
	setRecipesSimpleWeapons(event);
	setRecipesSophisticatedBackpacks(event);
	setRecipesTorchMaster(event);
	setRecipesToolbelt(event);
	setRecipesWaystones(event);
	setRecipesOreWashing(event);
	setRecipesBotania(event);
	setRecipesMacawMods(event);
	setRecipesBigReactors(event);
	setRecipesAdAstra(event);
	setRecipesMna(event);
	setRecipesIceAndFire(event);
	setSacksAndSuch(event);
	setArtisanal(event);
	setRecipesBioforgeLoomborn(event);
	setRecipesTrottingWagons(event);
	setRecipesWell(event);

	// TFC Addons
	setRecipesFirmalife(event);
	setRecipesFirmaciv(event);
	setRecipesTfcBetterBf(event);

	// Create Addons
	setRecipesCreateAdditions(event);
	setRecipesCreateEncased(event);
	setRecipesCreateStuffAndAdditions(event);
	setRecipesCreateRailways(event);

	console.log("Setsu Recipes End!");
}

// ServerEvents.recipes((event) => {
// });

/*
TFCEvents.data((event) => {
})
*/
