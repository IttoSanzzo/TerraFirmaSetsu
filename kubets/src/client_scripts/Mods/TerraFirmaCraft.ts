//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiTerraFirmaCraft = (event: $HideJEIEventJS<any>) => {
	event.hide("#tfc:wild_crops");
};
