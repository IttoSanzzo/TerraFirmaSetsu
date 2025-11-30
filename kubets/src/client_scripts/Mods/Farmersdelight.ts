//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiFarmersdelight = (event: $HideJEIEventJS<any>) => {
	event.hide("#farmersdelight:wild_crops");
	event.hide("farmersdelight:stove");
	event.hide("farmersdelight:rope");
	event.hide("farmersdelight:tree_bark");

	event.hide("farmersdelight:carrot_crate");
	event.hide("farmersdelight:potato_crate");
	event.hide("farmersdelight:beetroot_crate");
	event.hide("farmersdelight:cabbage_crate");
	event.hide("farmersdelight:tomato_crate");
	event.hide("farmersdelight:onion_crate");
	event.hide("farmersdelight:rice_bag");
	event.hide("farmersdelight:rice_bale");

	const allWoods = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"cherry",
		"crimson",
		"warped",
		"bamboo",
	];
	allWoods.forEach((wood) => {
		event.hide(`farmersdelight:${wood}_cabinet`);
	});
};
