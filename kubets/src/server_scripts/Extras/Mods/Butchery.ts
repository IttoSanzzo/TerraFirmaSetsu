// priority: 200

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { RawCookedMeatPair } from "../CustomFoods";

export const butcherMeatDict: RawCookedMeatPair[] = [
	{
		raw: "butchery:raw_pork_belly",
		cooked: "butchery:pork_belly",
	},
	{
		raw: "butchery:raw_pork_loin",
		cooked: "butchery:pork_loin",
	},
];

export function setCustomFoodsButchery(event: $TFCDataEventJS) {
	event.drinkable("butchery:blood" as any, (data) => {
		data.effect("minecraft:nausea", (effect) => {
			effect.amplifier(0);
			effect.duration(300);
		});
		data.food((food) => {
			food.protein(0.5);
			food.hunger(2);
			food.water(34);
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
