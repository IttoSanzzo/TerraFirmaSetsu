//priority: 299

import { $LootModificationEventJS } from "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS";

export function setLootButchery(event: $LootModificationEventJS) {
	function addCorpse(mob: OmniString, corpse: KjsItemStack) {
		event
			.addLootTableModifier(`tfc:entities/${mob}` as any)
			.addLoot(corpse)
			.removeLoot("tfc:small_raw_hide")
			.removeLoot("tfc:medium_raw_hide")
			.removeLoot("tfc:large_raw_hide")
			.removeLoot("tfc:small_sheepskin_hide")
			.removeLoot("tfc:medium_sheepskin_hide")
			.removeLoot("tfc:large_rsheepskinhide");
	}

	addCorpse("pig", "butcher:pig_corpse_item");
	addCorpse("dolphin", "butcher:dolphincorpseitem");
	addCorpse("squid", "butcher:colored_squid");
	addCorpse("turtle", "butcher:turtle_corpse_item");
	addCorpse("frog", "butcher:frog");
	addCorpse("polar_bear", "butcher:polarbear_corpse_item");
	addCorpse("wolf", "butcher:wolfcarcass");
	addCorpse("direwolf", "butcher:wolfcarcass");
	addCorpse("cow", "butcher:cowcorpseitem");
	addCorpse("goat", "butcher:goat_corpse_item");
	addCorpse("sheep", "butcher:sheep_corpse_item");
	addCorpse("musk_ox", "butcher:cowcorpseitem");
	addCorpse("chicken", "butcher:chicken_corpse_item");
	addCorpse("rabbit", "butcher:rabbit_corpse_item");
	addCorpse("fox", "butcher:foxcorpseitem");
	addCorpse("panda", "butcher:panda");
	// addCorpse("ocelot", "butcher:ocelotcarcass"); does not have a loottable
	addCorpse("boar", "butcher:pig_corpse_item");
	addCorpse("donkey", "butcher:donkeycarcass");
	addCorpse("mule", "butcher:mulecarcass");
	addCorpse("cat", "butcher:ocelotcarcass");
	addCorpse("dog", "butcher:wolfcarcass");

	event
		.addLootTableModifier("minecraft:entities/villager" as any)
		.addLoot("butcher:villager_corpse_item");

	function addHorseCorpse(corpse: string, base: number) {
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
			.addLoot(corpse);
	}

	addHorseCorpse("butcher:horsecarcasswhiteritem", 0);
	addHorseCorpse("butcher:horsecarcasscreamyritem", 1);
	addHorseCorpse("butcher:horsecarcasschestnutritem", 2);
	addHorseCorpse("butcher:horsecarcassbrownritem", 3);
	addHorseCorpse("butcher:horsecarcassdarkbrownritem", 4);
	addHorseCorpse("butcher:horsecarcassgrayritem", 5);
	addHorseCorpse("butcher:horsecarcassblackritem", 6);
}
