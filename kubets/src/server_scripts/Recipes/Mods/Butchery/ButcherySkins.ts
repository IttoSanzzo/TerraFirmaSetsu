// priority: 199

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShapeless } from "../../_helperFunctions";

export function doButcherySkins(event: $RecipesEventJS) {
	function skinToHide(skin: KjsItem, hide: KjsItem) {
		addDamageShapeless(event, hide, [skin, "#tfcscraping:scraping_knives"]);
		event
			.custom({
				type: "advancedtfctech:fleshing_machine",
				result: {
					stack: {
						item: hide,
					},
					modifiers: [
						{
							type: "advancedtfctech:copy_tag",
							tag: "machine_made",
						},
					],
				},
				input: {
					item: skin,
				},
				time: 75,
				energy: 1500,
			})
			.id(
				`setsu:butchery/scraping/ie/${(skin as string).substring((skin as string).indexOf(":") + 1)}`
			);
		event
			.custom({
				type: "rosia:scraping_machine",
				ingredients: [
					{
						item: skin,
					},
				],
				output: {
					item: hide,
					count: 1,
				},
			})
			.id(
				`setsu:butchery/scraping/rosia/${(skin as string).substring((skin as string).indexOf(":") + 1)}`
			);
	}

	const smallFur: KjsItem[] = [
		"butchery:all_black_cat_fur",
		"butchery:black_cat_fur",
		"butchery:shorthair_cat_fur",
		"butchery:calico_cat_fur",
		"butchery:ragdoll_cat_fur",
		"butchery:fox_skin",
		"butchery:snow_fox_skin",
		"butchery:jellie_cat_fur",
		"butchery:persian_cat_fur",
		"butchery:red_cat_fur",
		"butchery:siamese_cat_fur",
		"butchery:tabby_cat_fur",
		"butchery:white_cat_fur",
		"minecraft:rabbit_hide",
	];
	const mediumFur: KjsItem[] = [
		"butchery:goat_skin",
		"butchery:brown_llama_skin",
		"butchery:creamy_llama_skin",
		"butchery:gray_llama_skin",
		"butchery:white_llama_skin",
		"butchery:wolf_pelt",
	];
	const largeFur: KjsItem[] = ["butchery:sheep_skin", "butchery:sniffer_fur"];
	const smallSkin: KjsItem[] = ["butchery:bat_skin", "butchery:ocelot_skin"];
	const mediumSkin: KjsItem[] = [
		"butchery:pig_skin",
		"butchery:mule_skin",
		"butchery:camel_skin",
		"butchery:creeper_skin",
		"butchery:dolphin_skin",
		"butchery:donkey_skin",
	];
	const largeSkin: KjsItem[] = [
		"butchery:brown_mooshroom_skin",
		"butchery:red_mooshroom_skin",
		"butchery:polarbear_skin",
		"butchery:panda_skin",
		"butchery:zoglin_skin",
		"butchery:cow_skin",
		"butchery:hoglin_skin",
	];

	smallFur.forEach((skin) => skinToHide(skin, "tfc:small_sheepskin_hide"));
	mediumFur.forEach((skin) => skinToHide(skin, "tfc:medium_sheepskin_hide"));
	largeFur.forEach((skin) => skinToHide(skin, "tfc:large_sheepskin_hide"));
	smallSkin.forEach((skin) => skinToHide(skin, "tfc:small_raw_hide"));
	mediumSkin.forEach((skin) => skinToHide(skin, "tfc:medium_raw_hide"));
	largeSkin.forEach((skin) => skinToHide(skin, "tfc:large_raw_hide"));
}
