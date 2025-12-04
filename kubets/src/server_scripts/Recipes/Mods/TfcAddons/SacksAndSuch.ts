// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped } from "../../_helperFunctions";

export function setSacksAndSuch(event: $RecipesEventJS) {
	event.remove({ id: "sns:crafting/pack_frame" });
	event.remove({ id: "sns:heating/pack_frame" });

	event.remove({ id: "sns:crafting/frame_pack" });
	addDamageShaped(event, `sns:frame_pack`, ["SCS", "SOS", " CN"], {
		S: "sns:bound_leather_strip",
		C: "sns:reinforced_fabric",
		O: "thermal:satchel",
		N: "tfc:bone_needle",
	});
}
