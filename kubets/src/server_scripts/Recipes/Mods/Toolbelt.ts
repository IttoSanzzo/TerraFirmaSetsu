// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped } from "../_helperFunctions";

export function setRecipesToolbelt(event: $RecipesEventJS) {
	event.remove({ id: "toolbelt:belt" });
	event.remove({ id: "toolbelt:pouch" });

	addDamageShaped(event, "toolbelt:belt", ["VSN", "BLB", " U "], {
		V: "#tfc:metal/shearss",
		S: "#forge:string",
		N: "tfc:bone_needle",
		L: "sns:bound_leather_strip",
		B: "toolbelt:pouch",
		U: "#forge:nuggets",
	});

	addDamageShaped(event, "toolbelt:pouch", ["VSN", "UL "], {
		V: "#tfc:metal/shearss",
		S: "#forge:string",
		N: "tfc:bone_needle",
		U: "#forge:nuggets",
		L: "#tfc:leather_knapping",
	});
}
