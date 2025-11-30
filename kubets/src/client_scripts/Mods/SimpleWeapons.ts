//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiSimpleWeapons = (event: $HideJEIEventJS<any>) => {
	event.hide(`simple_weapons:stone_scythe`);
	event.hide(`simple_weapons:stone_dagger`);
	event.hide(`simple_weapons:stone_greatsword`);
	event.hide(`simple_weapons:stone_spear`);
	event.hide(`simple_weapons:stone_fist`);
	event.hide(`simple_weapons:stone_scimitar`);
	event.hide(`simple_weapons:stone_katana`);
	event.hide(`simple_weapons:stone_sickle`);
};
