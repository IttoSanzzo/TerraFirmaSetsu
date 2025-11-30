//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiImmersiveEngineering = (event: $HideJEIEventJS<any>) => {
	event.hide("immersiveengineering:deepslate_ore_aluminum");
	event.hide("immersiveengineering:ore_aluminum");
	event.hide("immersiveengineering:deepslate_ore_lead");
	event.hide("immersiveengineering:ore_lead");
	event.hide("immersiveengineering:deepslate_ore_nickel");
	event.hide("immersiveengineering:ore_nickel");
	event.hide("immersiveengineering:deepslate_ore_silver");
	event.hide("immersiveengineering:ore_silver");
	event.hide("immersiveengineering:deepslate_ore_uranium");
	event.hide("immersiveengineering:ore_uranium");
	event.hide("immersiveengineering:deepslate_ore_");
	event.hide("immersiveengineering:ore_");
};
