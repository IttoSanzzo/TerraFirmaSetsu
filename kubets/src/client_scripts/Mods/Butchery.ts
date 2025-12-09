//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiButchery = (event: $HideJEIEventJS<any>) => {
	// event.hide("butcher:unfiredcleavermold");
	// event.hide("butcher:fired_cleaver_mold");
	// event.hide("butcher:unfiredpliermould");
	// event.hide("butcher:firedpliermould");
	// event.hide("butcher:unfiredskinningknifeblademold");
	// event.hide("butcher:firedskinningknifemold");
	event.hide("butcher:skin_rack");
};
