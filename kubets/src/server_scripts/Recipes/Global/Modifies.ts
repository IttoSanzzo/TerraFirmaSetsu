// priority: 199

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { globalModify } from "../../HelpCollections/GlobalModify";
import { ItemCol } from "../../HelpCollections/ItemCollections";

export function setRecipeModifies(event: $RecipesEventJS) {
	function replaceAll(item: string, replacement: string) {
		globalModify.forEach((mod) => {
			event.replaceInput({ mod: mod }, item, replacement);
			event.replaceOutput({ mod: mod }, item, replacement);
		});
	}
	function replaceINPUT(item: string, replacement: string) {
		globalModify.forEach((mod) => {
			event.replaceInput({ mod: mod }, item, replacement);
		});
	}
	function replaceOUTPUT(item: string, replacement: string) {
		globalModify.forEach((mod) => {
			event.replaceOutput({ mod: mod }, item, replacement);
		});
	}

	replaceINPUT("minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron");
	replaceINPUT("#forge:ingots/iron", "tfc:metal/ingot/wrought_iron");
	replaceOUTPUT("minecraft:iron_ingot", "tfc:metal/ingot/cast_iron");
	replaceAll("minecraft:copper_ingot", "tfc:metal/ingot/copper");
	replaceAll("#forge:ingots/copper", "tfc:metal/ingot/copper");
	replaceAll("minecraft:gold_ingot", "tfc:metal/ingot/gold");
	replaceAll("#forge:ingots/gold", "tfc:metal/ingot/gold");
	replaceINPUT("#forge:ingots/steel", "tfc:metal/ingot/steel");

	replaceAll("create:brass_ingot", "tfc:metal/ingot/brass");

	// Tool ////////////////////////////////////////////////

	replaceAll("#forge:swords", "#tfc:swords");
	replaceAll("#forge:pickaxes", "#tfc:pickaxes");
	replaceAll("#forge:shovels", "#tfc:shovels");
	replaceAll("#forge:axes", "#tfc:axes");
	replaceAll("#forge:hoes", "#tfc:hoes");
	replaceAll("tfc:metal/saw/bismuth_bronze", "#tfc:saws");

	// stone ///////////////////////////////////////////////

	replaceAll("minecraft:andesite", "tfc:rock/raw/andesite");
	replaceAll("minecraft:diorite", "tfc:rock/raw/diorite");
	replaceAll("minecraft:granite", "tfc:rock/raw/granite");
	replaceAll("minecraft:stone", "#tfc:all_stone");
	replaceAll("#forge:stone", "#tfc:all_stone");

	replaceINPUT("minecraft:smooth_stone_slab", "#forge:smooth_stone_slab");
	replaceINPUT("minecraft:cobblestone", "#setsu:tfc/cobblestones");
	replaceINPUT("minecraft:cobblestone_stairs", "#setsu:tfc/cobblestone_stairs");
	replaceINPUT("minecraft:cobblestone_slab", "#setsu:tfc/cobblestone_slab");

	replaceINPUT("minecraft:stone_bricks", "#setsu:tfc/stone_bricks");
	replaceINPUT("minecraft:stone_brick_stairs", "#setsu:tfc/stone_brick_stairs");
	replaceINPUT("minecraft:stone_brick_slab", "#setsu:tfc/stone_brick_slab");

	// Wood ////////////////////////////////////////////////

	replaceINPUT("minecraft:oak_planks", "#tfc:lumber");
	replaceINPUT("#minecraft:planks", "#tfc:lumber");

	// Materiais ///////////////////////////////////////////

	replaceAll("minecraft:string", "#forge:string");
	replaceAll("minecraft:diamond", "tfc:gem/diamond");
	replaceAll("minecraft:emerald", "tfc:gem/emerald");
	replaceAll("minecraft:amethyst_shard", "tfc:gem/amethyst");
	replaceAll("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli");

	// Misc Items //////////////////////////////////////////

	replaceAll("minecraft:torch", "tfc:torch");
	replaceAll("minecraft:chain", "#forge:metal/chain");
	replaceAll("thermal:saw_blade", "immersiveengineering:sawblade");
	replaceAll("minecraft:rotten_flesh", "tfc:rotten_compost");
	replaceAll("minecraft:glass_bottle", "tfc:empty_jar");
	replaceAll("minecraft:dead_bush", "tfc:plant/dead_bush");
	replaceAll("minecraft:ink_sac", "supplementaries:antique_ink");

	replaceAll("farmersdelight:rope", "supplementaries:rope");
	replaceINPUT("#forge:rope", "supplementaries:rope");
	replaceINPUT("tfc:glue", "#forge:glue");
	replaceINPUT("sns:leather_strip", "#forge:leather/strip");
	replaceINPUT("tfc_items:leather_strip", "#forge:leather/strip");

	replaceAll("minecraft:candle", "tfc:candle");
	ItemCol.allDyes.forEach((color) => {
		replaceAll(`minecraft:${color}_candle`, `tfc:candle/${color}`);
	});

	// Food ////////////////////////////////////////////////

	event.replaceInput(
		{ type: "create:mixing", mod: "create" },
		"create:wheat_flour",
		"#tfc:foods/flour"
	);
	replaceAll("minecraft:wheat_seeds", "#tfc:seeds");
	replaceAll("minecraft:wheat", "tfc:food/wheat");
	replaceAll("minecraft:beetroot", "tfc:food/beet");
	replaceAll("minecraft:cod", "tfc:food/cod");
	replaceAll("minecraft:pumpkin", "firmalife:carved_pumpkin/none");
	replaceAll("minecraft:bread", "tfc:foods/breads");

	replaceAll("minecraft:pumpkin_seeds", "tfc:seeds/pumpkin");
	replaceAll("minecraft:melon_seeds", "tfc:seeds/melon");
	replaceAll("minecraft:beetroot_seeds", "tfc:seeds/beet");
	replaceAll("minecraft:cooked_beef", "tfc:food/cooked_beef");
	replaceAll("#forge:raw_beef", "tfc:food/beef");

	replaceINPUT("minecraft:dried_kelp", "tfc:food/dried_kelp");

	// Random Blocks ///////////////////////////////////////

	replaceAll("minecraft:coal_block", "thermal:charcoal_block");
	replaceAll("minecraft:dirt", "#minecraft:dirt");
	replaceAll("minecraft:chest", "#forge:chests/wooden");
}
