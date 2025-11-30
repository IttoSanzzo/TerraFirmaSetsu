//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiMcwFurnitures = (event: $HideJEIEventJS<any>) => {
	event.hide(/mcwfurnitures:[stripped_]*jungle_.*/);
};
