// priority: 200

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { NewTfcFood, RawCookedMeatPair } from "../CustomFoods";
import { setNewTfcDrink, setNewTfcFood } from "../_helperFunctions";

export const allButcheryMeats: NewTfcFood[] = [
	{
		id: "butchery:heart",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	{
		id: "butchery:cooked_heart",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	{
		id: "butchery:intestines",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	{
		id: "butchery:cooked_intestines",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	{
		id: "butchery:kidney",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	{
		id: "butchery:cooked_kidney",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			saturation: 0,
			water: 0,
			protein: 0,
		},
	},
	// {
	// 	id: "butchery:",
	// 	foodData: {
	// 		hunger: 1,
	// 		decayModifier: 1,
	// 		saturation: 0,
	// 		water: 0,
	// 		protein: 0,
	// 	},
	// },
];

export const butcherMeatDict: RawCookedMeatPair[] = [];
allButcheryMeats.forEach((meat) => {
	if ((meat.id as string).includes("cooked_") == false) return;
	const rawMeatId = (meat.id as string).replace("cooked_", "");
	const rawMeat = allButcheryMeats.find((meat) => meat.id == rawMeatId);
	if (!rawMeat) return;
	butcherMeatDict.push({
		raw: rawMeat,
		cooked: meat,
	});
});

export function setCustomFoodsButchery(event: $TFCDataEventJS) {
	setNewTfcDrink(event, {
		id: "butchery:blood",
		drinkData: {
			intoxication: 300,
			effects: [{ id: "minecraft:nausea", amplifier: 0, duration: 300 }],
		},
		foodData: {
			water: 34,
			hunger: 2,
			protein: 0.5,
		},
	});

	allButcheryMeats.forEach((meat) => {
		setNewTfcFood(event, meat);
	});
}

export function setCustomHeatsButchery(event: $TFCDataEventJS) {
	allButcheryMeats.forEach((meat) => {
		event.itemHeat(meat.id as any, 1.0, null, null);
	});
}
