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
				`setsu:butcher/scraping/ie/${(skin as string).substring((skin as string).indexOf(":") + 1)}`
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
				`setsu:butcher/scraping/rosia/${(skin as string).substring((skin as string).indexOf(":") + 1)}`
			);
	}

	const smallFur: KjsItem[] = [
		"butcher:foxfur",
		"butcher:snowyfoxfur",
		"minecraft:rabbit_hide",
	];
	const mediumFur: KjsItem[] = [
		"butcher:goatfur",
		"butcher:sheep_skin",
		"butcher:camelfur",
		"butcher:creamyllamaskin",
		"butcher:brown_llama_skin",
		"butcher:gray_llama_skin",
		"butcher:white_llama_skin",
		"butcher:wolffur",
	];
	const largeFur: KjsItem[] = [
		"butcher:pandafur",
		"butcher:polarbearfur",
		"butcher:snifferfur",
	];
	const smallSkin: KjsItem[] = [
		"butcher:ocelotskin",
		"butcher:tuxedocatfur",
		"butcher:blackcatfur",
		"butcher:whitecatfur",
		"butcher:tabbycatfur",
		"butcher:redcatfur",
		"butcher:siamesecatfur",
		"butcher:shorthaircatfur",
		"butcher:calicocatfur",
		"butcher:persiancatfur",
		"butcher:ragdollcatfur",
		"butcher:jelliecatfur",
	];
	const mediumSkin: KjsItem[] = [
		"butcher:pig_skin",
		"butcher:donkeyskin",
		"butcher:muleskin",
	];
	const largeSkin: KjsItem[] = [
		"butcher:cow_skin",
		"butcher:blackhorseskin",
		"butcher:brownhorseskin",
		"butcher:chestnuthorseskin",
		"butcher:creamyhorseskin",
		"butcher:darkbrownhorseskin",
		"butcher:grayhorseskin",
		"butcher:whitehorseskin",
	];

	smallFur.forEach((skin) => skinToHide(skin, "tfc:small_sheepskin_hide"));
	mediumFur.forEach((skin) => skinToHide(skin, "tfc:medium_sheepskin_hide"));
	largeFur.forEach((skin) => skinToHide(skin, "tfc:large_sheepskin_hide"));
	smallSkin.forEach((skin) => skinToHide(skin, "tfc:small_raw_hide"));
	mediumSkin.forEach((skin) => skinToHide(skin, "tfc:medium_raw_hide"));
	largeSkin.forEach((skin) => skinToHide(skin, "tfc:large_raw_hide"));
}
