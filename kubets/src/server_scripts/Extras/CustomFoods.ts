// priority: 199

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { setCustomFoodsButchery } from "./Mods/Butchery";

export type RawCookedMeatPair = { raw: KjsItem; cooked: KjsItem };

export function setCustomFoods(event: $TFCDataEventJS) {
	setCustomFoodsButchery(event);
}
