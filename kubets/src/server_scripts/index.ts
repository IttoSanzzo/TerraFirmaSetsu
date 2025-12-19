//priority: 1

import {
	setCustomHeats,
	setCustomFoods,
	setCustomFuels,
	entitySpawned,
	loginEvent,
	rightClickEvent,
	setCustomWeights,
	setMnaChimerite,
} from "./Extras";
import { setLoot } from "./LootJs/LootIndex";
import { setRecipes } from "./Recipes";
import { setBiomeTags, setBlockTags, setFluidTags, setItemTags } from "./Tags";

export const CompleteItemCollections: { all: string[]; damageable: string[] } =
	{
		all: [],
		damageable: [],
	};

console.log("Starting Index.js Server Scripts!");
{
	ServerEvents.highPriorityData(() => {
		const builtInRegistries = Java.loadClass(
			"net.minecraft.core.registries.BuiltInRegistries"
		);
		builtInRegistries.ITEM.forEach((item) => {
			const stack = Item.of(item);
			if (stack.isEmpty()) return;
			CompleteItemCollections.all.push(stack.id);
			if (stack.getMaxDamage() > 0)
				CompleteItemCollections.damageable.push(stack.id);
		});
		console.log(
			`Found ${CompleteItemCollections.damageable.length} damageable items`
		);
	});
	/* Tags */
	ServerEvents.tags("worldgen/biome", setBiomeTags);
	ServerEvents.tags("block", setBlockTags);
	ServerEvents.tags("fluid", setFluidTags);
	ServerEvents.tags("item", setItemTags);
	/* Extras */
	TFCEvents.data(setCustomHeats);
	TFCEvents.data(setCustomWeights);
	TFCEvents.data(setCustomFoods);
	TFCEvents.data(setCustomFuels);
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
