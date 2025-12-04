//priority: 299

import { $LootModificationEventJS } from "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS";
import { ItemCol } from "../../HelpCollections/ItemCollections";

export function setLootMinecraft(event: $LootModificationEventJS) {
	// Basic
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:bucket"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:lava_bucket"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:water_bucket"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:powder_snow_bucket"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:bread"));

	// Fishing
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:fishing_rod"));
	event
		.addLootTypeModifier(LootType.FISHING)
		.removeLoot(Item.of("minecraft:fishing_rod"));

	// Chest Metal, Mineral and Food
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:anvil"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:copper_ingot", "tfc:metal/ingot/copper");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:gold_ingot", "tfc:metal/ingot/gold");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:diamond", "tfc:gem/diamond");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:emerald", "tfc:gem/emerald");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:enchanting_table", "tfc:gem/diamond");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:carrot", "tfc:food/carrot", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:potato", "tfc:food/potato", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:wheat", "tfc:food/wheat", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:pumpkin", "tfc:pumpkin", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:beetroot_seeds", "tfc:seeds/beet", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:melon_seeds", "tfc:seeds/melon", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:pumpkin_seeds", "tfc:seeds/pumpkin", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:dead_bush", "tfc:plant/dead_bush", true);

	// Monster Drop Fixex
	event
		.addEntityLootModifier("minecraft:zombie")
		.replaceLoot(
			Item.of("minecraft:iron_ingot"),
			"tfc:metal/shovel/wrought_iron"
		);
	event
		.addEntityLootModifier("minecraft:husk")
		.replaceLoot(
			Item.of("minecraft:iron_ingot"),
			"tfc:metal/shovel/wrought_iron"
		);
	event
		.addEntityLootModifier("minecraft:drowned")
		.replaceLoot(Item.of("minecraft:copper_ingot"), "tfc:metal/shovel/copper");
	event
		.addEntityLootModifier("minecraft:evoker")
		.replaceLoot("minecraft:emerald", "tfc:gem/emerald");
	event
		.addLootTypeModifier(LootType.ENTITY)
		.replaceLoot("minecraft:potato", "tfc:food/potato", true);
	event
		.addLootTypeModifier(LootType.ENTITY)
		.replaceLoot("minecraft:carrot", "tfc:food/carrot", true);

	// Chest Meat
	event
		.addLootTypeModifier(LootType.CHEST)
		.removeLoot(Item.of("minecraft:cooked_porkchop"));
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:porkchop", "tfc:food/pork", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:mutton", "tfc:food/muttton", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:beef", "tfc:food/beef", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:chicken", "tfc:food/chicken", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:rabbit", "tfc:food/rabbit", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:rabbit_hide", "tfc:small_raw_hide", true);
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("minecraft:barrel", "tfcbarrels:wood/barrel/oak");
	event
		.addEntityLootModifier("minecraft:hoglin")
		.replaceLoot("minecraft:porkchop", "tfc:food/pork", true);
	event
		.addEntityLootModifier("minecraft:hoglin")
		.replaceLoot("minecraft:cooked_porkchop", "tfc:food/cooked_pork", true);
	event
		.addEntityLootModifier("minecraft:hoglin")
		.replaceLoot("minecraft:leather", "tfc:large_raw_hide");

	// Block
	ItemCol.allDyes.forEach((color) => {
		const wool = `minecraft:${color}_wool`;
		const bed = `minecraft:${color}_bed`;

		event.addBlockLootModifier(wool).removeLoot(wool);
		event.addBlockLootModifier(bed).removeLoot(bed);
		event
			.addBlockLootModifier(wool)
			.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch" as any))
			.addLoot(wool);
		event
			.addBlockLootModifier(bed)
			.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch" as any))
			.addLoot(bed);
		event
			.addEntityLootModifier("minecraft:sheep")
			.replaceLoot(`minecraft:${color}_wool`, "tfc:wool");
	});
}
