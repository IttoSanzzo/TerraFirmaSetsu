//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiMinecraft = (event: $HideJEIEventJS<any>) => {
	event.hide("minecraft:iron_ingot");
	event.hide("minecraft:copper_ingot");
	event.hide("minecraft:gold_ingot");

	event.hide("minecraft:kelp");
	event.hide("minecraft:dried_kelp");
	event.hide("minecraft:dried_kelp_block");
	event.hide("minecraft:torch");
	event.hide("minecraft:soul_torch");
	event.hide("minecraft:rabbit_hide");
	event.hide("minecraft:lapis_lazuli");

	event.hide("minecraft:diamond_axe");
	event.hide("minecraft:diamond_hoe");
	event.hide("minecraft:diamond_sword");
	event.hide("minecraft:diamond_pickaxe");
	event.hide("minecraft:diamond_shovel");
	event.hide("minecraft:iron_shovel");
	event.hide("minecraft:iron_sword");
	event.hide("minecraft:iron_axe");
	event.hide("minecraft:iron_hoe");
	event.hide("minecraft:iron_pickaxe");
	event.hide("minecraft:stone_axe");
	event.hide("minecraft:stone_pickaxe");
	event.hide("minecraft:stone_sword");
	event.hide("minecraft:stone_shovel");
	event.hide("minecraft:stone_hoe");
	event.hide("minecraft:wooden_hoe");
	event.hide("minecraft:wooden_axe");
	event.hide("minecraft:wooden_pickaxe");
	event.hide("minecraft:wooden_shovel");
	event.hide("minecraft:wooden_sword");
	event.hide("minecraft:golden_hoe");
	event.hide("minecraft:golden_sword");
	event.hide("minecraft:golden_shovel");
	event.hide("minecraft:golden_pickaxe");
	event.hide("minecraft:golden_axe");
	event.hide("minecraft:netherite_axe");
	event.hide("minecraft:netherite_pickaxe");
	event.hide("minecraft:netherite_sword");
	event.hide("minecraft:netherite_shovel");
	event.hide("minecraft:netherite_hoe");

	event.hide("minecraft:chainmail_helmet");
	event.hide("minecraft:iron_helmet");
	event.hide("minecraft:diamond_helmet");
	event.hide("minecraft:golden_helmet");
	event.hide("minecraft:netherite_helmet");
	event.hide("minecraft:chainmail_chestplate");
	event.hide("minecraft:iron_chestplate");
	event.hide("minecraft:diamond_chestplate");
	event.hide("minecraft:golden_chestplate");
	event.hide("minecraft:netherite_chestplate");
	event.hide("minecraft:chainmail_leggings");
	event.hide("minecraft:iron_leggings");
	event.hide("minecraft:diamond_leggings");
	event.hide("minecraft:golden_leggings");
	event.hide("minecraft:netherite_leggings");
	event.hide("minecraft:chainmail_boots");
	event.hide("minecraft:iron_boots");
	event.hide("minecraft:diamond_boots");
	event.hide("minecraft:golden_boots");
	event.hide("minecraft:netherite_boots");

	event.hide("minecraft:loom");
	event.hide("minecraft:composter");
	event.hide("minecraft:barrel");
	event.hide("minecraft:smoker");
	event.hide("minecraft:fletching_table");
	event.hide("minecraft:bell");
	event.hide("minecraft:soul_campfire");
	event.hide("minecraft:bee_nest");
	event.hide("minecraft:beehive");

	event.hide("minecraft:coal_ore");
	event.hide("minecraft:iron_ore");
	event.hide("minecraft:diamond_ore");
	event.hide("minecraft:gold_ore");
	event.hide("minecraft:emerald_ore");
	event.hide("minecraft:redstone_ore");
	event.hide("minecraft:lapis_ore");
	event.hide("minecraft:copper_ore");
	event.hide("minecraft:deepslate_diamond_ore");
	event.hide("minecraft:deepslate_coal_ore");
	event.hide("minecraft:deepslate_lapis_ore");
	event.hide("minecraft:deepslate_emerald_ore");
	event.hide("minecraft:deepslate_iron_ore");
	event.hide("minecraft:deepslate_gold_ore");
	event.hide("minecraft:deepslate_coppper_ore");
	event.hide("minecraft:deepslate_redstone_ore");

	event.hide("minecraft:sculk_sensor");

	event.hide("minecraft:trident");
	event.hide("minecraft:shears");
	event.hide("minecraft:cookie");

	event.hide("minecraft:deepslate_coal_ore");
	event.hide("minecraft:coal_ore");
	event.hide("minecraft:deepslate_copper_ore");
	event.hide("minecraft:copper_ore");
	event.hide("minecraft:deepslate_diamond_ore");
	event.hide("minecraft:diamond_ore");
	event.hide("minecraft:deepslate_emerald_ore");
	event.hide("minecraft:emerald_ore");
	event.hide("minecraft:deepslate_gold_ore");
	event.hide("minecraft:gold_ore");
	event.hide("minecraft:deepslate_lapis_ore");
	event.hide("minecraft:lapis_ore");
	event.hide("minecraft:deepslate_lapis_ore");
	event.hide("minecraft:lapis_ore");

	["oak", "birch", "spruce", "acacia", "dark_oak", "jungle"].forEach((logz) => {
		event.hide(`minecraft:${logz}_sign`);
	});
	event.hide("minecraft:candle");
	[
		"white",
		"orange",
		"magenta",
		"light_blue",
		"yellow",
		"lime",
		"pink",
		"gray",
		"light_gray",
		"cyan",
		"purple",
		"blue",
		"brown",
		"green",
		"red",
		"black",
	].forEach((candle) => {
		event.hide(`minecraft:${candle}_candle`);
	});
};
