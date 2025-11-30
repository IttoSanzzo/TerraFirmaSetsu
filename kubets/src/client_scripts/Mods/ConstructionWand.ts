//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiConstructionWand = (event: $HideJEIEventJS<any>) => {
	event.hide("constructionwand:stone_wand");
};
