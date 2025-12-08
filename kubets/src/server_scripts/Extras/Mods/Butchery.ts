// priority: 200

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { RawCookedMeatPair } from "../CustomFoods";

export const butcherMeatDict: RawCookedMeatPair[] = [
	{
		raw: "butcher:raw_pork_belly",
		cooked: "butcher:pork_belly",
	},
	{
		raw: "butcher:raw_pork_loin",
		cooked: "butcher:pork_loin",
	},
];

export function setCustomFoodsButchery(event: $TFCDataEventJS) {
	event.drinkable("butcher:blood_liquid" as any, (data) => {
		data.effect("minecraft:nausea", (effect) => {
			effect.amplifier(0);
			effect.duration(300);
		});
		data.food((food) => {
			food.protein(0.5);
			food.hunger(2);
			food.water(40);
		});
		data.intoxication(300);
	});

	// function setNewRawMeat();
}

export function setCustomHeatsButchery(event: $TFCDataEventJS) {
	butcherMeatDict.forEach((meat) => {
		event.itemHeat(meat.raw as any, 1.0, null, null);
		event.itemHeat(meat.cooked as any, 1.0, null, null);
	});
}
