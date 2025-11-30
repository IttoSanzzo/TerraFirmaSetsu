//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiBloodMagic = (event: $HideJEIEventJS<any>) => {
	event.hide(/bloodmagic:.*telepos.*/);
	event.hide("bloodmagic:reagentsuppression");
	event.hide("bloodmagic:sigilofsuppression");
};
