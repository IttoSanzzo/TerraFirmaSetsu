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
		"butchery:foxfur",
		"butchery:snowyfoxfur",
		"minecraft:rabbit_hide",
	];
	const mediumFur: KjsItem[] = [
		"butchery:goatfur",
		"butchery:sheep_skin",
		"butchery:camelfur",
		"butchery:creamyllamaskin",
		"butchery:brown_llama_skin",
		"butchery:gray_llama_skin",
		"butchery:white_llama_skin",
		"butchery:wolffur",
	];
	const largeFur: KjsItem[] = [
		"butchery:pandafur",
		"butchery:polarbearfur",
		"butchery:snifferfur",
	];
	const smallSkin: KjsItem[] = [
		"butchery:ocelotskin",
		"butchery:tuxedocatfur",
		"butchery:blackcatfur",
		"butchery:whitecatfur",
		"butchery:tabbycatfur",
		"butchery:redcatfur",
		"butchery:siamesecatfur",
		"butchery:shorthaircatfur",
		"butchery:calicocatfur",
		"butchery:persiancatfur",
		"butchery:ragdollcatfur",
		"butchery:jelliecatfur",
	];
	const mediumSkin: KjsItem[] = [
		"butchery:pig_skin",
		"butchery:donkeyskin",
		"butchery:muleskin",
	];
	const largeSkin: KjsItem[] = [
		"butchery:cow_skin",
		"butchery:blackhorseskin",
		"butchery:brownhorseskin",
		"butchery:chestnuthorseskin",
		"butchery:creamyhorseskin",
		"butchery:darkbrownhorseskin",
		"butchery:grayhorseskin",
		"butchery:whitehorseskin",
	];

	smallFur.forEach((skin) => skinToHide(skin, "tfc:small_sheepskin_hide"));
	mediumFur.forEach((skin) => skinToHide(skin, "tfc:medium_sheepskin_hide"));
	largeFur.forEach((skin) => skinToHide(skin, "tfc:large_sheepskin_hide"));
	smallSkin.forEach((skin) => skinToHide(skin, "tfc:small_raw_hide"));
	mediumSkin.forEach((skin) => skinToHide(skin, "tfc:medium_raw_hide"));
	largeSkin.forEach((skin) => skinToHide(skin, "tfc:large_raw_hide"));
}
