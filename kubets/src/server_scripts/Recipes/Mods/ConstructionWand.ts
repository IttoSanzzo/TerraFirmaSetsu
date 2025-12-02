// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesConstructionWand(event: $RecipesEventJS) {
	event.remove({ output: "constructionwand:stone_wand" });

	event.replaceInput(
		{ id: "constructionwand:iron_wand" },
		"minecraft:iron_ingot",
		"tfc:metal/ingot/wrought_iron"
	);

	event.remove({ id: "constructionwand:core_destruction" });
	event
		.shaped("constructionwand:core_destruction", [" GP", "GBG", "PG "], {
			B: "minecraft:diamond_block",
			P: "#tfc:metal/pickaxes",
			G: "#forge:glass_panes",
		})
		.id(`setsu:constructionwand/core_destruction`);
}
