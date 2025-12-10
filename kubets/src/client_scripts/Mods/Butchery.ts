//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiButchery = (event: $HideJEIEventJS<any>) => {
	// event.hide("butchery:unfiredcleavermold");
	// event.hide("butchery:fired_cleaver_mold");
	// event.hide("butchery:unfiredpliermould");
	// event.hide("butchery:firedpliermould");
	// event.hide("butchery:unfiredskinningknifeblademold");
	// event.hide("butchery:firedskinningknifemold");
	event.hide("butchery:skin_rack");
};
