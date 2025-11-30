//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiIceAndFire = (event: $HideJEIEventJS<any>) => {
	const removals = [
		"iceandfire:armor_copper_metal_helmet",
		"iceandfire:armor_copper_metal_chestplate",
		"iceandfire:armor_copper_metal_leggings",
		"iceandfire:armor_copper_metal_boots",
		"iceandfire:copper_sword",
		"iceandfire:copper_shovel",
		"iceandfire:copper_pickaxe",
		"iceandfire:copper_axe",
		"iceandfire:copper_hoe",
	];
	removals.forEach((item) => {
		event.hide(item);
	});
};
