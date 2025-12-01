//priority: 498

import { TagEventProbe } from "packages/moe/wolfgirl/probejs/generated/TagEventProbe";
import { ItemCol } from "../HelpCollections/ItemCollections";

export function setFluidTags(
	event: TagEventProbe<Special.FluidTag, Special.Fluid>
) {
	console.log("Setsu Tag Fluid Start!");
	[
		"immersiveengineering:plantoil",
		"thermal:tree_oil",
		"hexerei:quicksilver_fluid",
		"hexerei:tallow_fluid",
		"hexerei:blood_fluid",
	].forEach((fluid) => {
		event.get("tfc:usable_in_barrel").add(`${fluid}`);
		event.get("tfc:usable_in_pot").add(`${fluid}`);
		event.get("tfc:usable_in_wooden_bucket").add(`${fluid}`);
	});

	event.add("tfc:usable_in_ingot_mold", [
		"kubejs:metal/purple_steel",
		"kubejs:metal/high_carbon_purple_steel",
	]);
	event.add("tfc:usable_in_tool_head_mold", [
		"kubejs:metal/purple_steel",
		"kubejs:metal/high_carbon_purple_steel",
	]);

	/// OldOnes
	event
		.get("minecraft:water")
		.removeAll()
		.add([/^(minecraft|tfc):.*water$/]);
	event.add("forge:crude_oil", "beyond_earth:oil");
	event.add("beyond_earth:vehicle_fuel", "thermal:refined_fuel");
	event.add("tfc:usable_in_barrel", "immersiveengineering:creosote");
	event.add("forge:chocolate", "firmalife:chocolate");
	event
		.get("forge:milk")
		.removeAll()
		.add([
			"firmalife:yak_milk",
			"firmalife:goat_milk",
			"firmalife:coconut_milk",
		]);
	event.add("forge:refined_fuel", "thermal:refined_fuel");

	// Color Dyes
	ItemCol.allDyes.forEach((color) => {
		event.add(`setsu:dyes/${color}`, `tfc:${color}_dye`);
	});

	// Fuel
	const oilTags = [
		"thermal:heavy_oil",
		"thermal:light_oil",
		"immersiveengineering:biodiesel",
		"immersiveengineering:redstone_acid",
	];
	oilTags.forEach((oil) => {
		event.add(oil, oil);
	});
	event.add("ad_astra:pure_oil", "ad_astra:oil");
	event.add("ad_astra:pure_fuel", "ad_astra:fuel");

	// End.
	console.log("Setsu Tag Fluid End!");
}
