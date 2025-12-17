// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesWorkshopForHandsomeAdventurer(
	event: $RecipesEventJS
) {
	event.replaceInput(
		{ mod: "workshop_for_handsome_adventurer" },
		"#forge:stripped_logs",
		"#forge:stripped_logs"
	);
	event.replaceInput(
		{ mod: "workshop_for_handsome_adventurer" },
		"#minecraft:wooden_slabs",
		"#minecraft:wooden_slabs"
	);
}
