//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiButchery = (event: $HideJEIEventJS<any>) => {
	event.hide("butchery:skin_rack");
};
