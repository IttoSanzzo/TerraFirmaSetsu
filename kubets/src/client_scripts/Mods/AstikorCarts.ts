//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiAstikorCarts = (event: $HideJEIEventJS<any>) => {
	event.hide("astikorcarts:animal_cart");
	event.hide("astikorcarts:supply_cart");
	event.hide("astikorcarts:plow");
	event.hide("astikorcarts:wheel");

	const tfcWoodTypes = [
		"acacia",
		"ash",
		"aspen",
		"birch",
		"blackwood",
		"chestnut",
		"douglas_fir",
		"hickory",
		"kapok",
		"mangrove",
		"maple",
		"oak",
		"palm",
		"pine",
		"rosewood",
		"sequoia",
		"spruce",
		"sycamore",
		"white_cedar",
		"willow",
	];

	tfcWoodTypes.forEach((wood) => {
		event.hide(`tfcastikorcarts:postilion/${wood}`);
	});
};
