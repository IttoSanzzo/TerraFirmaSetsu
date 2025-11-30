//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiTrottingWagons = (event: $HideJEIEventJS<any>) => {
	event.hide("trotting_wagons:wheel");
};
