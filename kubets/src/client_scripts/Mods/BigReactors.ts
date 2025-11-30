//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiBigReactors = (event: $HideJEIEventJS<any>) => {
	event.hide("biggerreactors:uranium_ore");
};
