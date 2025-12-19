//priority: 299

import { $LootModificationEventJS } from "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS";

export function setLootButchery(event: $LootModificationEventJS) {
	event
		.addLootTableModifier(`minecraft:entities/ender_dragon` as any)
		.addLoot("butchery:ender_dragon_carcass");

	function addCorpse(mob: OmniString, corpse: KjsItemStack) {
		event
			.addLootTableModifier(`tfc:entities/${mob}` as any)
			.addLoot(corpse)
			.removeLoot("tfc:small_raw_hide")
			.removeLoot("tfc:medium_raw_hide")
			.removeLoot("tfc:large_raw_hide")
			.removeLoot("tfc:small_sheepskin_hide")
			.removeLoot("tfc:medium_sheepskin_hide")
			.removeLoot("tfc:large_sheepskin_hide");
	}

	addCorpse("pig", "butchery:pig_carcass");
	addCorpse("dolphin", "butchery:dolphin_carcass");
	addCorpse("squid", "butchery:squid_carcass");
	addCorpse("turtle", "butchery:turtle_carcass");
	addCorpse("frog", "butchery:green_frog_carcass");
	addCorpse("polar_bear", "butchery:polar_bear_carcass");
	addCorpse("wolf", "butchery:wolf_carcass");
	addCorpse("direwolf", "butchery:wolf_carcass");
	addCorpse("cow", "butchery:cow_carcass");
	addCorpse("goat", "butchery:goat_carcass");
	addCorpse("sheep", "butchery:sheep_carcass");
	addCorpse("musk_ox", "butchery:cow_carcass");
	addCorpse("chicken", "butchery:chicken_carcass");
	addCorpse("rabbit", "butchery:rabbit_carcass");
	addCorpse("fox", "butchery:fox_carcass");
	addCorpse("panda", "butchery:panda_carcass");
	// addCorpse("ocelot", "butchery:ocelotcarcass"); does not have a loottable
	addCorpse("boar", "butchery:pig_carcass");
	addCorpse("donkey", "butchery:donkey_carcass");
	addCorpse("mule", "butchery:mule_carcass");
	addCorpse("dog", "butchery:wolf_carcass");

	event
		.addLootTableModifier("minecraft:entities/villager" as any)
		.addLoot("butchery:villager_corpse");

	function addHorseCarcass(corpse: string, base: number) {
		const variants: number[] = [];
		for (let overlay = 0; overlay < 16; overlay++)
			variants.push(base + overlay * 256);

		event
			.addLootTableModifier("tfc:entities/horse" as any)
			.or((or: any) => {
				for (const v of variants)
					or.customCondition({
						condition: "entity_properties",
						entity: "this",
						predicate: {
							nbt: `{Variant:${v}}`,
						},
					});
			})
			.addLoot(corpse)
			.removeLoot("tfc:small_raw_hide")
			.removeLoot("tfc:medium_raw_hide")
			.removeLoot("tfc:large_raw_hide")
			.removeLoot("tfc:small_sheepskin_hide")
			.removeLoot("tfc:medium_sheepskin_hide")
			.removeLoot("tfc:large_sheepskin_hide");
	}

	addHorseCarcass("butchery:regular_white_horse_carcass", 0);
	addHorseCarcass("butchery:regular_creamy_horse_carcass", 1);
	addHorseCarcass("butchery:regular_chestnut_horse_carcass", 2);
	addHorseCarcass("butchery:regular_dark_brown_horse_carcass", 6);
	addHorseCarcass("butchery:regular_brown_horse_carcass", 3);
	addHorseCarcass("butchery:regular_gray_horse_carcass", 5);
	addHorseCarcass("butchery:regular_black_horse_carcass", 4);

	function addCatCarcass(corpse: string, variant: string) {
		event
			.addLootTableModifier("tfc:entities/cat" as any)
			.customCondition({
				condition: "entity_properties",
				entity: "this",
				predicate: {
					nbt: `{variant:\"${variant}\"}`,
				},
			})
			.addLoot(corpse)
			.removeLoot("tfc:small_raw_hide")
			.removeLoot("tfc:medium_raw_hide")
			.removeLoot("tfc:large_raw_hide")
			.removeLoot("tfc:small_sheepskin_hide")
			.removeLoot("tfc:medium_sheepskin_hide")
			.removeLoot("tfc:large_sheepskin_hide");
	}
	addCatCarcass("butchery:tabby_cat_carcass", "minecraft:tabby");
	addCatCarcass("butchery:black_cat_carcass", "minecraft:black");
	addCatCarcass("butchery:red_cat_carcass", "minecraft:red");
	addCatCarcass("butchery:siamese_cat_carcass", "minecraft:siamese");
	addCatCarcass(
		"butchery:british_shorthair_cat_carcass",
		"minecraft:british_shorthair"
	);
	addCatCarcass("butchery:calico_cat_carcass", "minecraft:calico");
	addCatCarcass("butchery:persian_cat_carcass", "minecraft:persian");
	addCatCarcass("butchery:ragdoll_cat_carcass", "minecraft:ragdoll");
	addCatCarcass("butchery:white_cat_carcass", "minecraft:white");
	addCatCarcass("butchery:jellie_cat_carcass", "minecraft:jellie");
	addCatCarcass("butchery:all_black_cat_carcass", "minecraft:all_black");
}
