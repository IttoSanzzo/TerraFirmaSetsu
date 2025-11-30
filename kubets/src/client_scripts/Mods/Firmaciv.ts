//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiFirmaciv = (event: $HideJEIEventJS<any>) => {
	event.hide("alekiships:cannon");
	event.hide("alekiships:");
	event.hide("alekiships:watercraft_frame_flat");
	event.hide("alekiships:watercraft_frame_angled");

	event.hide("#minecraft:boats");
	event.hide("quark:azalea_boat");
	event.hide("quark:azalea_chest_boat");
	event.hide(`malum:runewood_boat`);
	event.hide(`malum:soulwood_boat`);
	const boatWoods = ["willow", "mahogany"];
	boatWoods.forEach((wood) => {
		event.hide(`hexerei:${wood}_boat`);
		event.hide(`hexerei:${wood}_chest_boat`);
		event.hide(`hexerei:polished_${wood}_boat`);
		event.hide(`hexerei:polished_${wood}_chest_boat`);
	});
};
