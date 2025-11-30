//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiSacksAndSuch = (event: $HideJEIEventJS<any>) => {
	event.hide("sns:pack_frame");
};
