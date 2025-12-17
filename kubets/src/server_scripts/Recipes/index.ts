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
import { setRecipesAdAstra } from "./Mods/AdAstra";
import { setRecipesAccommodation } from "./Mods/Accommodation";
import { setRecipesApotheosis } from "./Mods/Apotheosis";
import { setArtisanal } from "./Mods/TfcAddons/Artisanal";
import { setRecipesBigReactors } from "./Mods/BigReactors";
import { setRecipesBotania } from "./Mods/Botania";
import { setRecipesChipped } from "./Mods/Chipped";
import { setRecipesConstructionWand } from "./Mods/ConstructionWand";
import { setRecipesCreate } from "./Mods/Create";
import { setRecipesEnderStorage } from "./Mods/EnderStorage";
import { setRecipesFarmersdelight } from "./Mods/Farmersdelight";
import { setRecipesFunctionalStorage } from "./Mods/FunctionalStorage";
import { setRecipesHexerei } from "./Mods/Hexerei";
import { setRecipesIceAndFire } from "./Mods/IceAndFire";
import { setRecipesImmersiveEngineering } from "./Mods/ImmersiveEngineering";
import { setRecipesKubeJS } from "./Mods/KubeJS";
import { setRecipesMacawMods } from "./Mods/MacawMods";
import { setRecipesMalum } from "./Mods/Malum";
import { setRecipesMna } from "./Mods/MnA";
import { setRecipesOreWashing } from "./Mods/OreWashing";
import { setRecipesPotionsMaster } from "./Mods/PotionsMaster";
import { setRecipesQuark } from "./Mods/Quark";
import { setSacksAndSuch } from "./Mods/TfcAddons/SacksAndSuch";
import { setRecipesSimplePlanes } from "./Mods/SimplePlanes";
import { setRecipesSimpleWeapons } from "./Mods/SimpleWeapons";
import { setRecipesSophisticatedBackpacks } from "./Mods/SophisticatedBackpacks";
import { setRecipesSupplementaries } from "./Mods/Supplementaries";
import { setRecipesTerraFirmaCraft } from "./Mods/TerraFirmaCraft";
import { setRecipesThermal } from "./Mods/Thermal";
import { setRecipesTombstone } from "./Mods/Tombstone";
import { setRecipesTomsStorage } from "./Mods/TomsStorage";
import { setRecipesToolbelt } from "./Mods/Toolbelt";
import { setRecipesTorchMaster } from "./Mods/TorchMaster";
import { setRecipesTrottingWagons } from "./Mods/TrottingWagons";
import { setRecipesWaystones } from "./Mods/Waystones";
import { setRecipesWell } from "./Mods/Well";
import { setRecipesBloodMagic } from "./Mods/BloodMagic";
import { setRecipesButchery } from "./Mods/Butchery/Butchery";
import { setRecipesTfcScrapping } from "./Mods/TfcAddons/TfcScrapping";
import { setRecipesWoodenHopper } from "./Mods/WoodenHopper";
import { setRecipesWorkshopForHandsomeAdventurer } from "./Mods/WorkshopForHandsomeAdventurer";

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
	setRecipesTrottingWagons(event);
	setRecipesWell(event);
	setRecipesButchery(event);
	setRecipesWoodenHopper(event);
	setRecipesWorkshopForHandsomeAdventurer(event);

	// TFC Addons
	setRecipesFirmalife(event);
	setRecipesFirmaciv(event);
	setRecipesTfcBetterBf(event);
	setRecipesTfcScrapping(event);

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
