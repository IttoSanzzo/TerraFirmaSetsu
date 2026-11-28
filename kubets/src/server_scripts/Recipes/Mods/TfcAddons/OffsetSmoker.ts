// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesOffsetSmoker(event: $RecipesEventJS) {
	const modId = "tfcoffsetsmoker";

	event
		.shaped("tfcoffsetsmoker:offset_smoker", [" S ", "SGS", " S "], {
			S: "tfc:metal/double_sheet/cast_iron",
			G: "castirongrill:cast_iron_grill",
		})
		.id(`setsu:tfcoffsetsmoker/offset_smoker`);
}
