// priority: 199

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { ItemCol } from "../HelpCollections/ItemCollections";

export function setCustomFuels(event: $TFCDataEventJS) {
	//  100 - Hot
	//  200 -
	//  300 -
	//  400 - Very Hot****
	//  490 -
	//  500 - Faint  Red*
	//  591 - Dark   Red
	//  750 - Bright Red
	//  788 - Bright Red*
	//  830 - Bright Red**
	//  921 - Bright Red****
	//  960 - Orange
	// 1400 - White
	// 1450 - White**
	// 1500 - White****
	// 1535 + Brilliant White

	event.fuel("immersiveengineering:dust_wood" as any, 200, 400, null as any);
	ItemCol.tfcWoodTypes.forEach((wood) => {
		event.fuel(`tfc_debark:${wood}_bark_powder` as any, 300, 450, null as any);
	});
}
