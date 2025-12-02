// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesApotheosis(event: $RecipesEventJS) {
	// event.shapeless("apotheosis:ender_lead", ["minecraft:ender_pearl", "minecraft:lead", "tfc:metal/ingot/rose_gold"]).id("setsu:apotheosis/ender_lead");

	event.remove({ id: "apotheosis:salvaging_table" });
	event
		.shaped("apotheosis:salvaging_table", ["CCC", "PSA", "DBD"], {
			C: "tfc:metal/ingot/copper",
			P: "tfc:metal/pickaxe/blue_steel",
			A: "tfc:metal/axe/blue_steel",
			S: "minecraft:smithing_table",
			D: "apotheosis:gem_dust",
			B: "minecraft:lava_bucket",
		})
		.id("setsu:apotheosis/salvaging_table");

	event.remove({ id: "apotheosis:library" });
	event
		.shaped("apotheosis:library", ["CVC", "VBV", "CVC"], {
			C: "minecraft:ender_chest",
			V: "apotheosis:infused_hellshelf",
			B: "minecraft:enchanted_book",
		})
		.id("setsu:apotheosis/library");

	event.remove({ id: "apotheosis:reforging_table" });
	event
		.shaped("apotheosis:reforging_table", [" N ", "DED", "BBB"], {
			N: "minecraft:netherite_ingot",
			D: "apotheosis:gem_dust",
			E: "minecraft:enchanted_book",
			B: "minecraft:nether_bricks",
		})
		.id("setsu:apotheosis/reforging_table");

	event.remove({ id: "apotheosis:scrap_tome" });
	event
		.shaped("apotheosis:scrap_tome", ["BBB", "BAB", "BBB"], {
			A: "apotheosis:gem_dust",
			B: "minecraft:book",
		})
		.id("setsu:apotheosis/scrap_tome");

	/**
	 * Shelves
	 */

	event
		.shapeless("minecraft:honeycomb_block", ["9x firmalife:raw_honey"])
		.id("setsu:apotheosis/honeycomb_block_from_raw_honey");

	event.remove({ id: "apotheosis:melonshelf" });
	event
		.shaped("apotheosis:melonshelf", ["MMM", "SBS", "MMM"], {
			M: "#forge:melon",
			B: "#forge:bookshelves",
			S: "minecraft:glistering_melon_slice",
		})
		.id("setsu:apotheosis/melonshelf");

	event.remove({ id: "apotheosis:beeshelf" });
	event
		.shaped("apotheosis:beeshelf", ["CVC", "HBH", "CVC"], {
			C: "firmalife:raw_honey",
			V: "firmalife:beehive",
			H: "minecraft:honey_block",
			B: "#forge:bookshelves",
		})
		.id("setsu:apotheosis/beeshelf");

	/**
	 * Rest
	 */

	event.replaceInput(
		{ mod: "apotheosis" },
		"minecraft:nautilus_shell",
		"firmalife:hollow_shell"
	);
}
