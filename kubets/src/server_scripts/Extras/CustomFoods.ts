// priority: 199

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { setCustomFoodsButchery } from "./Mods/ButcheryFoodData";
import { NumberRange } from "../../types/NumberRange";

export type TfcFoodEffect = {
	id: OmniString;
	duration?: number;
	amplifier?: number;
	chance?: number;
};
export type TfcDrinkData = {
	thirst?: NumberRange<100>; // defaults to 0
	intoxication?: number; // defaults to 0
	effects?: TfcFoodEffect[];
};
export type TfcFoodData = {
	type?: "dynamic" | "dynamic_bowl";
	hunger?: NumberRange<10>; // defaults to 4
	saturation?: NumberRange<10>; // defaults to 0
	water?: NumberRange<100>; // defaults to 0
	decayModifier?: NumberRange<10>; // defaults to 1
	grain?: NumberRange<10>; // defaults to 0
	fruit?: NumberRange<10>; // defaults to 0
	vegetables?: NumberRange<10>; // defaults to 0
	protein?: NumberRange<10>; // defaults to 0
	dairy?: NumberRange<10>; // defaults to 0
};
export type NewTfcFood = {
	id: KjsItem;
	foodData?: TfcFoodData;
};
export type NewTfcDrink = {
	id: KjsItem;
	drinkData?: TfcDrinkData;
	foodData?: TfcFoodData;
};
export type RawCookedMeatPair = { raw: NewTfcFood; cooked: NewTfcFood };

export function setCustomFoods(event: $TFCDataEventJS) {
	setCustomFoodsButchery(event);
}
