//priority: 1

import {
	setCustomHeats,
	entitySpawned,
	loginEvent,
	rightClickEvent,
	setCustomWeights,
	setMnaChimerite,
} from "./Extras";
import { setLoot } from "./LootJs/LootIndex";
import { setRecipes } from "./Recipes";
import { setBiomeTags, setBlockTags, setFluidTags, setItemTags } from "./Tags";

console.log("Starting Index.js Server Scripts!");
{
	/* Tags */
	ServerEvents.tags("worldgen/biome", setBiomeTags);
	ServerEvents.tags("block", setBlockTags);
	ServerEvents.tags("fluid", setFluidTags);
	ServerEvents.tags("item", setItemTags);
	/* Extras */
	TFCEvents.data(setCustomHeats);
	TFCEvents.data(setCustomWeights);
	EntityEvents.spawned(entitySpawned);
	PlayerEvents.loggedIn(loginEvent);
	ItemEvents.rightClicked(rightClickEvent);
	/* Loot */
	LootJS.modifiers(setLoot);
	/* Recipes */
	ServerEvents.recipes(setRecipes);
	ServerEvents.highPriorityData(setMnaChimerite);
}
console.log("Finalized Index.js Server Scripts!");
