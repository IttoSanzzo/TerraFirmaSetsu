//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiArtisanal = (event: $HideJEIEventJS<any>) => {
	event.hide("artisanal:leather_strap");
};
