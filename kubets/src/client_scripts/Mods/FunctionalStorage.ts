//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiFunctionalStorage = (event: $HideJEIEventJS<any>) => {
	const allVanillaWoodTypes = [
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
	];

	allVanillaWoodTypes.forEach((wood) => {
		event.hide(`functionalstorage:${wood}_1`);
		event.hide(`functionalstorage:${wood}_2`);
		event.hide(`functionalstorage:${wood}_4`);
	});
};
