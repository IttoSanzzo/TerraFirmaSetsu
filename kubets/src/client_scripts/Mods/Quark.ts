//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiQuark = (event: $HideJEIEventJS<any>) => {
	event.hide("quark:thatch");
	event.hide("quark:thatch_stairs");
	event.hide("quark:thatch_slab");
	event.hide("quark:thatch_vertival_slab");
	event.hide("quark:stick_block");

	const foodBlock = [
		"apple_crate",
		"potato_crate",
		"carrot_crate",
		"beetroot_crate",
		"cocoa_beans_sack",
		"berry_sack",
		"glowberry_sack",
	];
	foodBlock.forEach((block) => {
		event.hide(`quark:${block}`);
	});
};
