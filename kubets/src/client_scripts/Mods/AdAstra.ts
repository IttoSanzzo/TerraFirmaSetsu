//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiAdAstra = (event: $HideJEIEventJS<any>) => {
	event.hide("ad_astra_giselle_addon:gravity_normalizer");
	event.hide("ad_astra:fuel_refinery");
	event.hide("ad_astra:cryo_freezer");
	event.hide("ad_astra:coal_generator");
};
