//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiAccommodation = (event: $HideJEIEventJS<any>) => {
	event.hide("accommodation_:tatami_square");
	event.hide("accommodation_:tatami_rectangle");
};
