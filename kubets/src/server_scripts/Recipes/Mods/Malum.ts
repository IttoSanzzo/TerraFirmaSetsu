// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesMalum(event: $RecipesEventJS) {
	event.remove({ output: `malum:runewood_boat` });
	event.remove({ output: `malum:soulwood_boat` });
	event.remove({ id: `malum:copper_ingot_from_nugget` });
	event.remove({ id: `create:crafting/materials/copper_ingot` });
	event.remove({ id: `iceandfire:copper_nuggets_to_ingot` });
	event.remove({ id: "malum:soul_stained_steel_sword" });
	event.remove({ id: "malum:soul_stained_steel_pickaxe" });
	event.remove({ id: "malum:soul_stained_steel_axe" });
	event.remove({ id: "malum:soul_stained_steel_shovel" });
	event.remove({ id: "malum:soul_stained_steel_hoe" });

	event.remove({ id: `malum:runewood_planks` });
	event.remove({ id: `malum:soulwood_planks` });
	addDamageShapeless(event, `4x malum:runewood_planks`, [
		`#malum:runewood_logs`,
		"#tfc:metal/saws",
	]);
	addDamageShapeless(event, `4x malum:soulwood_planks`, [
		`#malum:soulwood_logs`,
		"#tfc:metal/saws",
	]);
}
