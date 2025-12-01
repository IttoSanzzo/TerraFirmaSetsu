// priority: 199

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";

export function setCustomHeats(event: $TFCDataEventJS) {
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

	event.itemHeat("create:andesite_alloy", 5.0, 750, null);
	event.itemHeat("botania:manasteel_ingot", 1.5, 960, null);
	event.itemHeat("botania:terrasteel_ingot", 10, 1400, null);
	event.itemHeat("mna:vinteum_ingot", 2, 960, null);
	event.itemHeat("mna:purified_vinteum_ingot", 0.5, 1400, null);
	event.itemHeat("minecraft:netherite_ingot", 8.0, 1535, null);

	// KubeJs
	event.metal(
		"kubejs:metal/high_carbon_purple_steel",
		1548,
		0.009,
		"kubejs:metal/ingot/weak_purple_steel",
		null,
		null,
		3,
		"kubejs:metal/high_carbon_purple_steel_metal"
	);
	event.metal(
		"kubejs:metal/purple_steel",
		1548,
		0.009,
		"kubejs:metal/ingot/purple_steel",
		"kubejs:metal/double_ingot/purple_steel",
		null,
		3,
		"kubejs:metal/purple_steel_metal"
	);
	event.itemHeat("kubejs:metal/ingot/weak_purple_steel", 3.25, 1100, 1300);
	event.itemHeat("kubejs:metal/ingot/purple_steel", 3.25, 1100, 1300);
	event.itemHeat("kubejs:metal/double_ingot/purple_steel", 6.5, 1100, 1300);
}
