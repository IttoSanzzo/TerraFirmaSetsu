//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiHexerei = (event: $HideJEIEventJS<any>) => {
	event.hide("hexerei:mahogany_woodcutter");
	event.hide("hexerei:willow_woodcutter");
	event.hide("hexerei:witch_hazel_woodcutter");
};
