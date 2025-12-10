//priority: 498

import { TagEventProbe } from "packages/moe/wolfgirl/probejs/generated/TagEventProbe";
import { ItemCol } from "../HelpCollections/ItemCollections";

export function setBlockTags(
	event: TagEventProbe<Special.BlockTag, Special.Block>
) {
	console.log("Setsu Tag Block Start!");

	ItemCol.tfcDirtTypes.forEach((type) => {
		event.add("minecraft:dirt", [
			`tfc:grass/${type}`,
			`tfc:dirt/${type}`,
			`tfc:mud/${type}`,
		]);
		event.add("botania:terraformable", [
			`tfc:grass/${type}`,
			`tfc:dirt/${type}`,
			`tfc:mud/${type}`,
		]);
		event.add("mna:construct_plantable_grass", [
			`tfc:grass/${type}`,
			`tfc:dirt/${type}`,
			`tfc:mud/${type}`,
		]);
		event.add("forge:sand", "accommodation_:acacia_lantern");
	});
	event.add("minecraft:farmland", ["#tfc:farmland"]);
	event.add("mna:construct_plantable_farmland", "#minecraft:farmland");

	event.get("create:passive_boiler_heaters").add("#forge:magma");
	event.add("farmersdelight:heat_sources", [
		"firmalife:cured_oven_bottom",
		"firmalife:insulated_oven_bottom",
		"firmalife:cured_rustic_oven_bottom",
		"firmalife:insulated_rustic_oven_bottom",
		"firmalife:cured_tile_oven_bottom",
		"firmalife:insulated_tile_oven_bottom",
		"firmalife:cured_stone_oven_bottom",
		"firmalife:insulated_stone_oven_bottom",
	]);
	event.add("firmalife:oven_insulation", ["firmalife:sealed_bricks"]);
	event.add("tfc:forge_insulation", [
		"tfc:charcoal_forge",
		"tfc:charcoal_pile",
		"minecraft:bricks",
		"minecraft:brick_stairs",
		"#chipped:stone",
		"#chipped:cobblestone",
	]);

	ItemCol.tfcStoneTypes.forEach((stone) => {
		event.add("tfc:forge_insulation", [
			`tfc:rock/cracked_bricks/${stone}_stairs`,
			`tfc:rock/bricks/${stone}_stairs`,
			`tfc:rock/smooth/${stone}_stairs`,
		]);
	});

	// TODO: hexerei:crow_harvestable check if really exists
	ItemCol.tfcAllCrops.forEach((crop) => {
		event.add("mna:construct_harvestables", `tfc:crop/${crop}`);
		event.add("mna:construct_harvestables", `tfc:dead_crop/${crop}`);
		event.add("hexerei:crow_harvestable" as any, `tfc:crop/${crop}`);
		event.add("hexerei:crow_harvestable" as any, `tfc:dead_crop/${crop}`);
	});
	event.add("mna:construct_harvestables", [
		"hexerei:belladonna_flower",
		"hexerei:mandrake_flower",
		"hexerei:yellow_dock_bush",
		"hexerei:mugwort_bush",
	]);

	ItemCol.tfcWoodTypes.forEach((wood) => {
		event.add("mca:chests", [`tfc:wood/chest/${wood}`]);
		event.add("c:chest", [`tfc:wood/chest/${wood}`]);
	});

	event.add("minecraft:anvil", "#tfc:anvils");

	/// OldOnes

	event.add("tfc:can_trigger_collapse", "beyond_earth:mars_stone");
	event.add("tfc:can_trigger_collapse", "beyond_earth:moon_stone");
	event.add("tfc:can_trigger_collapse", "beyond_earth:mercury_stone");
	event.add("tfc:can_trigger_collapse", "beyond_earth:infernal_spire_block");
	event.add("tfc:can_trigger_collapse", "beyond_earth:venus_stone");
	event.add("tfc:can_trigger_collapse", "beyond_earth:venus_sandstone");
	event.add("tfc:can_start_collapse", "beyond_earth:mars_stone");
	event.add("tfc:can_start_collapse", "beyond_earth:moon_stone");
	event.add("tfc:can_start_collapse", "beyond_earth:mercury_stone");
	event.add("tfc:can_start_collapse", "beyond_earth:infernal_spire_block");
	event.add("tfc:can_start_collapse", "beyond_earth:venus_stone");
	event.add("tfc:can_start_collapse", "beyond_earth:venus_sandstone");
	event.add("tfc:can_trigger_collapse", "minecraft:basalt");
	event.add("tfc:can_trigger_collapse", "minecraft:blackstone");
	event.add("tfc:can_trigger_collapse", "minecraft:magma_block");
	event.add("forge:magma", "tfc:rock/magma/basalt");
	event.add("forge:magma", "tfc:rock/magma/granite");
	event.add("forge:magma", "tfc:rock/magma/diorite");
	event.add("forge:magma", "tfc:rock/magma/gabbro");
	event.add("forge:magma", "tfc:rock/magma/rhyolite");
	event.add("forge:magma", "tfc:rock/magma/andesite");
	event.add("forge:magma", "tfc:rock/magma/dacite");
	event.add("tfc:can_landslide", "beyond_earth:mars_sand");
	event.add("tfc:can_landslide", "beyond_earth:venus_sand");
	event.add("tfc:can_landslide", "beyond_earth:moon_sand");
	// event.add("create:passive_boiler_heaters", "#forge:magma");

	// End.
	console.log("Setsu Tag Block End!");
}
