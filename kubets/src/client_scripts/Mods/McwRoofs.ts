//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiMcwRoofs = (event: $HideJEIEventJS<any>) => {
	event.hide(/mcwroofs:.*jungle_.*/);
};
