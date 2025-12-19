// priority: 498

import { TagEventProbe } from "packages/moe/wolfgirl/probejs/generated/TagEventProbe";
import { ItemCol } from "../HelpCollections/ItemCollections";
import { butcherMeatDict } from "../Extras/Mods/ButcheryFoodData";
import { allEternalIngredients } from "../Recipes/Mods/CreateUnbreakable";

export function setItemTags(
	event: TagEventProbe<Special.ItemTag, Special.Item>
) {
	console.log("Setsu Tag Item Start!");

	// event.add("setsu:eternalizable", CompleteItemCollections.damageable);

	// Metals & Mineral ////////////////////////////////////

	event.remove("forge:ingots/steel", [
		"immersiveengineering:ingot_steel",
		"ad_astra:steel_ingot",
	]);
	event.remove("c:steel_ingots", [
		"immersiveengineering:ingot_steel",
		"ad_astra:steel_ingot",
	]);
	event.remove("ad_astra:steel_ingots", [
		"immersiveengineering:ingot_steel",
		"ad_astra:steel_ingot",
	]);

	event.add("forge:ores", "#tfc:ore_pieces");
	event.add("setsu:ingot/all_iron", [
		"tfc:metal/ingot/wrought_iron",
		"tfc:metal/ingot/cast_iron",
	]);
	event.add("setsu:rod/all_iron", [
		"tfc:metal/rod/wrought_iron",
		"tfc:metal/rod/cast_iron",
	]);
	event.add("forge:raw_materials/aluminum", "tfc:ore/cryolite");
	event.add("forge:rods/iron", "#forge:rods/wrought_iron");
	event.add("forge:cinnabar", ["tfc:ore/cinnabar", "thermal:cinnabar"]);

	event.add("forge:magnetic_ore", [
		"tfc:ore/small_magnetite",
		"tfc:ore/poor_magnetite",
		"tfc:ore/normal_magnetite",
		"tfc:ore/rich_magnetite",
	]);

	event.add("tfc:bloodmagic_smooths", [
		"tfc:rock/smooth/andesite",
		"tfc:rock/smooth/shale",
		"tfc:rock/smooth/gabbro",
		"tfc:rock/smooth/dacite",
	]);

	ItemCol.tfcStoneTypes.forEach((type) => {
		event.add(`setsu:tfc/cobblestones`, `tfc:rock/cobble/${type}`);
		event.add(`setsu:tfc/cobblestone_stairs`, `tfc:rock/cobble/${type}_stairs`);
		event.add(`setsu:tfc/cobblestone_slab`, `tfc:rock/cobble/${type}_slab`);

		event.add(`setsu:tfc/stone_bricks`, `tfc:rock/bricks/${type}`);
		event.add(`setsu:tfc/stone_brick_stairs`, `tfc:rock/bricks/${type}_stairs`);
		event.add(`setsu:tfc/stone_brick_slab`, `tfc:rock/bricks/${type}_slab`);

		event.add(`setsu:tfc/stones`, `tfc:rock/raw/${type}`);
	});

	event.remove("forge:gems/emerald", "minecraft:emerald");
	event.add("forge:gems/amethyst", "tfc:gem/amethyst");
	event.add("setsu:gems", [
		"tfc:gem/amethyst",
		"tfc:gem/diamond",
		"tfc:gem/emerald",
		"tfc:gem/lapis_lazuli",
		"tfc:gem/opal",
		"tfc:gem/pyrite",
		"tfc:gem/ruby",
		"tfc:gem/sapphire",
		"tfc:gem/topaz",
		"thermal:apatite",
		"thermal:niter",
		"thermal:sulfur",
		"botania:mana_diamond",
		"botania:dragonstone",
		"mna:chimerite_gem",
	]);
	event.add("forge:bitumen", ["thermal:bitumen", "tfc:ore/bituminous_coal"]);

	event.add("setsu:dragonsteel", [
		"iceandfire:dragonsteel_fire_ingot",
		"iceandfire:dragonsteel_ice_ingot",
		"iceandfire:dragonsteel_lightning_ingot",
	]);

	event.add("setsu:eternal_ingredient", allEternalIngredients);
	event.add(
		"setsu:eternal_item_ingredient",
		allEternalIngredients.filter((entry) => entry[0] != "#")
	);
	event.add(
		"setsu:eternal_tag_ingredient",
		allEternalIngredients.filter((entry) => entry[0] == "#")
	);

	// Ores //////////////////////////////////////////////
	event.add("forge:copper_ore_r", [
		"tfc:ore/rich_native_copper",
		"tfc:ore/rich_tetrahedrite",
		"tfc:ore/rich_malachite",
	]);
	event.add("forge:copper_ore_n", [
		"tfc:ore/normal_native_copper",
		"tfc:ore/normal_tetrahedrite",
		"tfc:ore/normal_malachite",
	]);
	event.add("forge:copper_ore_p", [
		"tfc:ore/poor_native_copper",
		"tfc:ore/poor_tetrahedrite",
		"tfc:ore/poor_malachite",
	]);
	event.add("forge:iron_ore_r", [
		"tfc:ore/rich_hematite",
		"tfc:ore/rich_magnetite",
		"tfc:ore/rich_limonite",
	]);
	event.add("forge:iron_ore_n", [
		"tfc:ore/normal_hematite",
		"tfc:ore/normal_magnetite",
		"tfc:ore/normal_limonite",
	]);
	event.add("forge:iron_ore_p", [
		"tfc:ore/poor_hematite",
		"tfc:ore/poor_magnetite",
		"tfc:ore/poor_limonite",
	]);

	// Candle //////////////////////////////////////////////

	event.get("minecraft:candles").removeAll();
	event.add("minecraft:candles", ["tfc:candle", "hexerei:candle"]);
	ItemCol.allDyes.forEach((color) => {
		event.add("minecraft:candles", [`tfc:candle/${color}`]);
	});

	// Misc Items //////////////////////////////////////////
	event.add("chipped:torch", "tfc:torch");

	event.add("mcwlights:lanterns", [
		"mcwlights:striped_lantern",
		"mcwlights:covered_lantern",
		"mcwlights:chain_lantern",
		"mcwlights:tavern_lantern",
		"mcwlights:festive_lantern",
		"mcwlights:cross_lantern",
		"mcwlights:bell_lantern",
	]);

	event.add("immersiveengineering:drillheads", [
		"immersiveengineering:drillhead_steel",
		"immersiveengineering:drillhead_iron",
	]);
	event.add("forge:straw", ["farmersdelight:straw", "tfc:straw"]);

	event.add("forge:kelp", [
		"tfc:plant/winged_kelp",
		"tfc:plant/leafy_kelp",
		"tfc:plant/giant_kelp_flower",
	]);

	event.add("supplementaries:cookies", "#tfc:bowls");

	event.add("mna:improvised_manaweave_wand_shafts", "tfc:torch");
	event.add("mna:pedestal_bright_light_items", "tfc:torch");
	event.add("mna:healing_poultice_bases", [
		"mna:aum",
		"mna:cerublossom",
		"mna:tarma_root",
		"mna:desert_nova",
		"mna:wakebloom",
	]);

	event.add("mna:life_force", ["minecraft:egg", "#malum:spirits"]);

	event.add("forge:bottle", "minecraft:glass_bottle");
	event.add("forge:bottle", "firmalife:empty_jar");
	event.add("forge:honey", ["minecraft:honey_bottle", "firmalife:honey_jar"]);
	event.add("forge:honeycombs", ["minecraft:honeycomb", "firmalife:raw_honey"]);

	event.add("forge:seapickles", ["minecraft:sea_pickle", "tfc:sea_pickle"]);

	event.add("minecraft:creeper_igniters", [
		"#tfc:starts_fires_with_durability",
	]);
	event.add("breezy:ignition_sources", ["#tfc:starts_fires_with_durability"]);
	event.add("immersiveengineering:toolbox/tools", [
		"#tfc:starts_fires_with_durability",
	]);
	event.add("tfc:usable_on_tool_rack", ["#tfc:starts_fires_with_durability"]);
	event.add("workshop_for_handsome_adventurer:dont_rotate_on_toolrack", [
		"#tfc:starts_fires_with_durability",
	]);
	event.add("supplementaries:fire_sources", [
		"#tfc:starts_fires_with_durability",
	]);

	// WTF /////////////////////////////////////////////////

	event.add("forge:cokesourcez", [
		"minecraft:coal",
		"tfc:ore/lignite",
		"tfc:ore/bituminous_coal",
	]);
	event.add("forge:cokesource", ["tfc:ore/lignite", "tfc:ore/bituminous_coal"]);
	event.add("forge:electron_tube", [
		"immersiveengineering:electron_tube",
		"create:electron_tube",
	]);

	event.add("malum:spirits", [
		"malum:sacred_spirit",
		"malum:wicked_spirit",
		"malum:earthen_spirit",
		"malum:aerial_spirit",
		"malum:aqueous_spirit",
		"malum:infernal_spirit",
		"malum:arcane_spirit",
		"malum:eldritch_spirit",
	]);

	event.add("mna:viteum_stone_blocks", [
		"mna:decoration/vinteum_arcane_stone",
		"mna:decoration/vinteum_arcane_stone_chiseled",
		"mna:decoration/vinteum_arcane_stone_quad",
	]);

	event
		.get("apotheosis:boon_drops")
		.removeAll()
		.add("#tfc:ore_pieces")
		.add("#forge:nuggets/lead");

	event.add("tfc:corals", [
		"tfc:coral/tube_coral_fan",
		"tfc:coral/brain_coral_fan",
		"tfc:coral/bubble_coral_fan",
		"tfc:coral/fire_coral_fan",
		"tfc:coral/horn_coral_fan",
		"tfc:coral/tube_coral",
		"tfc:coral/brain_coral",
		"tfc:coral/bubble_coral",
		"tfc:coral/fire_coral",
		"tfc:coral/horn_coral",
	]);
	event.add("forge:wax", "firmalife:beeswax");
	event.add("forge:dusts/saltpeter", "tfc:powder/saltpeter");
	event.add("forge:glue", "tfc:glue");
	event.add("forge:slimeballs", "tfc:glue");
	event.add("forge:leather/strip", "sns:leather_strip");

	event.add("forge:slimeballs", "tfc:glue");

	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.remove("functionalstorage:drawer", `functionalstorage:${wood}_1`);
		event.remove("functionalstorage:drawer", `functionalstorage:${wood}_2`);
		event.remove("functionalstorage:drawer", `functionalstorage:${wood}_4`);
	});

	ItemCol.tfcStoneTypes.forEach((stone) => {
		event.add("tfc:mossy_loose", `tfc:rock/mossy_loose/${stone}`);
	});

	[
		"birch",
		"chestnut",
		"douglas_fir",
		"hickory",
		"maple",
		"oak",
		"sequoia",
	].forEach((wood) => {
		event.add("setsu:medium_tannin_ingredient", [
			`tfc_debark:${wood}_bark`,
			`tfc_debark:${wood}_bark_powder`,
		]);
	});
	event.add("tfc:firepit_fuel", ["#forge:bark_powder"]);
	event.add("rosia:fire_box_fuel", ["#forge:bark_powder", "#forge:bark"]);

	// Tool ////////////////////////////////////////////////

	ItemCol.tfcStoneToolTypes.forEach((type) => {
		event.add("tfc:usable_on_tool_rack", `tfc:stone/hammer_head/${type}`);
	});

	ItemCol.tfcTools.forEach((tool) => {
		ItemCol.tfcMetals.forEach((metal) => {
			event.add(`tfc:metal/${tool}s`, `tfc:metal/${tool}/${metal}`);
		});
	});
	event.remove("forge:fishing_rods", "minecraft:fishing_rod");

	// Block ///////////////////////////////////////////////

	event.remove("forge:cobblestone", "minecraft:cobblestone");
	event.remove("forge:cobblestone/normal", "minecraft:cobblestone");
	event.remove("forge:stone", "minecraft:stone");

	event.add("minecraft:dirt", [
		"tfc:grass/loam",
		"tfc:grass/sandy_loam",
		"tfc:grass/silty_loam",
		"tfc:dirt/loam",
		"tfc:dirt/sandy_loam",
		"tfc:dirt/silty_loam",
		"tfc:mud/loam",
		"tfc:mud/sandy_loam",
		"tfc:mud/silty_loam",
	]);
	event.add("setsu:tfc/grass", [
		"tfc:grass/sandy_loam",
		"tfc:grass/silty_loam",
	]);
	event.add("tfc:all_natural_stone", ["#tfc:rock/hardened", "#tfc:rock/raw"]);
	event.add("tfc:all_stone", ["#tfc:all_natural_stone", "#tfc:rock/smooth"]);
	event.add("setsu:omni_stone", [
		"#forge:stone",
		"#forge:smooth_stone",
		"#tfc:all_stone",
	]);

	event.add("forge:sandstone", [
		"tfc:raw_sandstone/brown",
		"tfc:raw_sandstone/white",
		"tfc:raw_sandstone/black",
		"tfc:raw_sandstone/red",
		"tfc:raw_sandstone/yellow",
		"tfc:raw_sandstone/green",
		"tfc:raw_sandstone/pink",
	]);
	event.add("forge:magma", [
		"tfc:rock/magma/basalt",
		"tfc:rock/magma/granite",
		"tfc:rock/magma/diorite",
		"tfc:rock/magma/gabbro",
		"tfc:rock/magma/gabbro",
		"tfc:rock/magma/rhyolite",
		"tfc:rock/magma/andesite",
		"tfc:rock/magma/dacite",
	]);

	event.add("forge:bookshelves", "#tfc:bookshelves");

	// Food ////////////////////////////////////////////////

	event.add("setsu:raw_meats", [
		"tfc:food/beef",
		"tfc:food/pork",
		"tfc:food/chicken",
		"tfc:food/quail",
		"tfc:food/mutton",
		"tfc:food/bear",
		"tfc:food/horse_meat",
		"tfc:food/pheasant",
		"tfc:food/grouse",
		"tfc:food/turkey",
		"tfc:food/venison",
		"tfc:food/wolf",
		"tfc:food/rabbit",
		"tfc:food/hyena",
		"tfc:food/duck",
		"tfc:food/chevon",
		"tfc:food/gran_feline",
		"tfc:food/camelidae",
		"tfc:food/turtle",
	]);
	ItemCol.tfcGrains.forEach((grain) => {
		event.add("tfc:fresh_grains", `tfc:food/${grain}`);
	});
	event.add("forge:crops/potato", "tfc:food/potato");
	event.add("forge:crops/carrot", "tfc:food/carrot");
	event.add("forge:crops/wheat", "tfc:food/wheat");
	event.add("forge:crops/beetroot", "tfc:food/beet");
	event.add("forge:vegetables/beetroot", "tfc:food/beet");
	event.add("forge:melon", "minecraft:melon");
	event.add("forge:melon", "tfc:melon");
	event.add("forge:cocoa_beans", "minecraft:cocoa_beans");
	event.add("forge:cocoa_beans", "firmalife:food/roasted_cocoa_beans");
	event.add("forge:carrots", ["tfc:food/carrot", "minecraft:carrot"]);
	event.add("forge:cake", ["minecraft:cake", "tfc:cake"]);
	event.add("forge:apples", ["minecraft:apple", "tfc:food/red_apple"]);

	event.add("forge:chocolate", [
		"create:bar_of_chocolate",
		"firmalife:food/dark_chocolate",
	]);

	event.remove("minecraft:fishes", [
		"minecraft:cod",
		"minecraft:salmon",
		"minecraft:tropical_fish",
		"minecraft:pufferfish",
		"minecraft:cooked_cod",
		"minecraft:cooked_salmon",
	]);

	event.add("forge:berries", [
		"tfc:food/blackberry",
		"tfc:food/blueberry",
		"tfc:food/bunchberry",
		"tfc:food/cloudberry",
		"tfc:food/cranberry",
		"tfc:food/elderberry",
		"tfc:food/gooseberry",
		"tfc:food/raspberry",
		"tfc:food/snowberry",
		"tfc:food/strawberry",
		"tfc:food/wintergreen_berry",
	]);

	event.add("forge:seeds", "#tfc:seeds");

	// Flower & Dye ////////////////////////////////////////
	event.add("forge:poppies", ["minecraft:poppy", "tfc:plant/poppy"]);
	event.add("forge:dandelions", ["minecraft:dandelion", "tfc:plant/dandelion"]);
	event.add("forge:blue_orchids", [
		"minecraft:blue_orchid",
		"tfc:plant/blue_orchid",
	]);
	event.add("forge:allium", ["minecraft:allium", "tfc:plant/allium"]);
	event.add("forge:oxeye_daisy", [
		"minecraft:oxeye_daisy",
		"tfc:plant/oxeye_daisy",
	]);
	event.add("forge:orange_tulip", [
		"minecraft:orange_tulip",
		"tfc:plant/tulip_orange",
	]);
	event.add("forge:pink_tulip", [
		"minecraft:pink_tulip",
		"tfc:plant/tulip_pink",
	]);
	event.add("forge:white_tulip", [
		"minecraft:white_tulip",
		"tfc:plant/tulip_white",
	]);
	event.add("forge:red_tulip", ["minecraft:red_tulip", "tfc:plant/tulip_red"]);
	event.add("forge:white_dye_material", [
		"tfc:plant/spanish_moss",
		"tfc:plant/houstonia",
		"tfc:plant/oxeye_daisy",
		"tfc:plant/primrose",
		"tfc:plant/trillium",
		"tfc:plant/snapdragon_white",
		"tfc:plant/tulip_white",
	]);
	event.add("forge:green_dye_material", [
		"tfc:plant/reindeer_lichen",
		"tfc:plant/barrel_cactus",
	]);
	event.add("forge:orange_dye_material", [
		"tfc:plant/canna",
		"tfc:plant/butterfly_milkweed",
		"tfc:plant/strelitzia",
		"tfc:plant/nasturtium",
		"tfc:plant/water_canna",
	]);
	event.add("forge:magenta_dye_material", [
		"tfc:plant/morning_glory",
		"tfc:plant/pulsatilla",
		"tfc:plant/athyrium_fern",
	]);
	event.add("forge:light_blue_dye_material", [
		"tfc:plant/labrador_tea",
		"tfc:plant/sapphire_tower",
	]);
	event.add("forge:yellow_dye_material", [
		"tfc:plant/goldenrod",
		"tfc:plant/snapdragon_yellow",
		"tfc:plant/dandelion",
		"tfc:plant/meads_milkweed",
		"tfc:plant/calendula",
	]);
	event.add("forge:lime_dye_material", "tfc:plant/moss");
	event.add("forge:pink_dye_material", [
		"tfc:plant/sacred_datura",
		"tfc:plant/foxglove",
		"tfc:plant/tulip_pink",
		"tfc:plant/snapdragon_pink",
	]);
	event.add("forge:light_gray_dye_material", "tfc:plant/yucca");
	event.add("forge:purple_dye_material", [
		"tfc:plant/black_orchid",
		"tfc:plant/perovskia",
		"tfc:plant/allium",
	]);
	event.add("forge:blue_dye_material", [
		"tfc:plant/grape_hyacinth",
		"tfc:plant/blue_orchid",
	]);
	event.add("forge:brown_dye_material", [
		"tfc:plant/field_horsetail",
		"tfc:plant/sargassum",
	]);
	event.add("forge:red_dye_material", [
		"tfc:plant/tropical_milkweed",
		"tfc:plant/snapdragon_red",
		"tfc:plant/poppy",
		"tfc:plant/guzmania",
		"tfc:plant/tulip_red",
		"tfc:plant/vriesea",
		"tfc:plant/rose",
	]);
	event.add("forge:black_dye_material", [
		"minecraft:wither_rose",
		"minecraft:ink_sac",
	]);

	// Wood //////////////////////////////////////////////

	event.add("forge:treated_lumber", [
		"firmalife:treated_lumber",
		"#forge:treated_wood",
		"tfc_ie_addon:treated_wood_lumber",
	]);
	event.add("setsu:treated_lumber", [
		"firmalife:treated_lumber",
		"tfc_ie_addon:treated_wood_lumber",
	]);

	ItemCol.tfcWoodTypes.forEach((type) => {
		event.add("minecraft:saplings", [`dttfc:${type}_seed`]);
		event.add("forge:saplings", [`dttfc:${type}_seed`]);
	});
	ItemCol.tfcBigFruits.forEach((fruit) => {
		event.add("forge:saplings", [`tfc:plant/${fruit}_sapling`]);
	});

	function newSetsuWoodTag(vanilla, tfc) {
		tfc.forEach((tfcWood) => {
			event.add(
				`setsu:tfc/vanilla_${vanilla}_lumber`,
				`tfc:wood/lumber/${tfcWood}`
			);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_planks`,
				`tfc:wood/planks/${tfcWood}`
			);
			event.add(`setsu:tfc/vanilla_${vanilla}_log`, `tfc:wood/log/${tfcWood}`);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_stripped_log`,
				`tfc:wood/stripped_log/${tfcWood}`
			);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_stripped_wood`,
				`tfc:wood/stripped_wood/${tfcWood}`
			);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_slab`,
				`tfc:wood/planks/${tfcWood}_slab`
			);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_door`,
				`tfc:wood/planks/${tfcWood}_door`
			);
			event.add(
				`setsu:tfc/vanilla_${vanilla}_trapdoor`,
				`tfc:wood/planks/${tfcWood}_trapdoor`
			);
		});
	}
	newSetsuWoodTag("oak", ["oak", "sycamore"]);
	newSetsuWoodTag("spruce", ["spruce", "maple", "palm"]);
	newSetsuWoodTag("birch", ["birch", "pine", "white_cedar", "douglas_fir"]);
	newSetsuWoodTag("jungle", ["ash", "sequoia"]);
	newSetsuWoodTag("acacia", ["acacia", "chestnut"]);
	newSetsuWoodTag("dark_oak", ["hickory", "blackwood", "aspen"]);
	newSetsuWoodTag("mangrove", ["rosewood", "mangrove"]);
	newSetsuWoodTag("crimson", ["kapok"]);
	newSetsuWoodTag("warped", ["willow"]);

	ItemCol.tfcWoodTypes.forEach((wood) => {
		event.add("tfc:compost_browns", [`tfc_debark:${wood}_bark_powder`]);
	});

	// Chipped /////////////////////////////////////////////

	/* Shafts */

	function chippedWoodTagAdd(type) {
		event.add(`chipped:${type}_planks`, [`#setsu:tfc/vanilla_${type}_planks`]);
		event.add(`chipped:${type}_log`, [`#setsu:tfc/vanilla_${type}_log`]);
		event.add(`chipped:stripped_${type}_log`, [
			`#setsu:tfc/vanilla_${type}_stripped_log`,
		]);
		event.add(`chipped:${type}_trapdoor`, [
			`#setsu:tfc/vanilla_${type}_trapdoor`,
		]);
		event.add(`chipped:${type}_door`, [`#setsu:tfc/vanilla_${type}_door`]);
	}
	chippedWoodTagAdd("oak");
	chippedWoodTagAdd("spruce");
	chippedWoodTagAdd("birch");
	chippedWoodTagAdd("jungle");
	chippedWoodTagAdd("acacia");
	chippedWoodTagAdd("dark_oak");
	chippedWoodTagAdd("crimson");
	chippedWoodTagAdd("warped");

	event.add(`chipped:gravel`, [`#tfc:rock/gravel`]);
	event.add(`chipped:sand`, [
		`tfc:sand/brown`,
		`tfc:sand/white`,
		`tfc:sand/black`,
		`tfc:sand/red`,
		`tfc:sand/yellow`,
		`tfc:sand/green`,
		`tfc:sand/pink`,
	]);
	event.add(`chipped:sandstone`, [
		`tfc:raw_sandstone/brown`,
		`tfc:raw_sandstone/white`,
		`tfc:raw_sandstone/black`,
		`tfc:raw_sandstone/red`,
		`tfc:raw_sandstone/yellow`,
		`tfc:raw_sandstone/green`,
		`tfc:raw_sandstone/pink`,
	]);
	event.add(`chipped:cobblestone`, [`#setsu:tfc/cobblestones`]);
	event.add(`chipped:stone`, [`#setsu:tfc/stones`]);
	event.add(`chipped:lantern`, [
		"supplementaries:copper_lantern",
		"supplementaries:brass_lantern",
		"supplementaries:crimson_lantern",
		"supplementaries:silver_lantern",
		"supplementaries:lead_lantern",
	]);

	// Extra ///////////////////////////////////////////////
	event.add("tfc:usable_on_tool_rack", [
		"create:wrench",
		"create:hand_crank",
		"#immersiveengineering:toolbox/tools",
		"#forge:swords",
		"#forge:axes",
		"#forge:pickaxes",
		"#forge:shovels",
		"#forge:hoes",
		"#forge:bows",
		"minecraft:trident",
		"#bloodmagic:daggerofsacrifice",
		"#bloodmagic:sacrificialdagger",
		"tombstone:ankh_of_pray",
	]);

	event.add("create:cogwheels", `create:cogwheel`);
	event.add("create:large_cogwheels", `create:large_cogwheel`);
	const reCreateShaft = [
		"oak",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"cherry",
		"bamboo",
		"crimson",
		"warped",
	];
	reCreateShaft.forEach((type) => {
		event.add("create:cogwheels", `createcasing:${type}_cogwheel`);
		event.add("create:large_cogwheels", `createcasing:${type}_large_cogwheel`);
	});

	// Curios //////////////////////////////////////////////

	event.add("curios:bundle", [
		"toms_storage:ts.adv_wireless_terminal",
		"botania:flower_bag",
		"enderstorage:ender_pouch",
		"malum:spirit_pouch",
		"mna:practitioners_pouch",
		"quark:seed_pouch",
	]);
	event.add("curios:body", ["supplementaries:quiver"]);

	// Hexerei /////////////////////////////////////////////

	event.remove("hexerei:tallow_meltable", "minecraft:honeycomb");
	event.add("hexerei:tallow_meltable", "firmalife:beeswax");

	// Butchery ////////////////////////////////////////////

	butcherMeatDict.forEach((meats) => {
		event.add("tfc:foods", [meats.raw.id, meats.cooked.id] as string[]);
		event.add("artisanal:foods/can_be_potted", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("sns:prevent_in_leather_sack", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("artisanal:foods/can_be_canned", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:compost_poisons", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:dog_food", [meats.raw.id, meats.cooked.id] as string[]);
		event.add("sns:prevent_in_straw_basket", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("sns:prevent_in_burlap_sack", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("firmalife:usable_in_stovetop_soup", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:foods/can_be_salted", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("firmalife:can_be_hung", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("sns:prevent_in_ore_sack", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:foods/raw_meats", [meats.raw.id] as string[]);
		event.add("tfc:foods/meats", [meats.raw.id, meats.cooked.id] as string[]);
		event.add("setsu:raw_meats", [meats.raw.id, meats.cooked.id] as string[]);
		event.add("sns:prevent_in_seed_pouch", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:pig_food", [meats.raw.id, meats.cooked.id] as string[]);
		event.add("tfc:foods/usable_in_soup", [
			meats.raw.id,
			meats.cooked.id,
		] as string[]);
		event.add("tfc:foods/cooked_meats", [meats.cooked.id] as string[]);
	});

	////////////////////////////////////////////////////////

	console.log("Setsu Tag Item End!");
}
