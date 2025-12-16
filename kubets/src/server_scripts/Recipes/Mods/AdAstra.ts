// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesAdAstra(event: $RecipesEventJS) {
	event.remove({ id: "ad_astra_giselle_addon:crafting/gravity_normalizer" });
	event.remove({ id: "ad_astra:fuel_refinery" });
	event.remove({ id: "ad_astra:cryo_freezer" });
	event.remove({ id: "ad_astra:coal_generator" });

	event.remove({ id: "ad_astra:etrionic_blast_furnace" });
	event
		.shaped("ad_astra:etrionic_blast_furnace", ["PEP", "HBH", "PPP"], {
			P: "#forge:plates/steel",
			E: "ad_astra:etrionic_capacitor",
			H: "immersiveengineering:blastfurnace_preheater",
			B: "immersiveengineering:blastbrick_reinforced",
		})
		.id("setsu:ad_astra/etrionic_blast_furnace");

	event.remove({ id: "ad_astra:astrodux" });
	event
		.shaped(
			Item.of("patchouli:guide_book", '{"patchouli:book":"ad_astra:astrodux"}'),
			["BIB", "IPI", "BIB"],
			{
				B: "minecraft:blue_dye",
				I: "tfc:metal/ingot/wrought_iron",
				P: "minecraft:book",
			}
		)
		.id("setsu:ad_astra/astrodux");

	event.remove({ id: "ad_astra:etrionic_capacitor" });
	event
		.shaped("ad_astra:etrionic_capacitor", ["EPE", "PXP", "DPD"], {
			E: "immersiveengineering:electron_tube",
			P: "#forge:plates/steel",
			X: "ad_astra:etrium_ingot",
			D: "#setsu:gems",
		})
		.id("setsu:ad_astra/etrionic_capacitator");

	event
		.shapeless("2x ad_astra:etrium_nugget", [
			"ad_astra:desh_ingot",
			"ad_astra:ostrum_ingot",
		])
		.id("setsu:ad_astra/etrium_nugget");
	event
		.shapeless("ad_astra:etrium_ingot", ["9x ad_astra:etrium_nugget"])
		.id("setsu:ad_astra/etrium_ingot");

	event.replaceInput(
		{ id: "ad_astra:gravity_normalizer" },
		"minecraft:diamond_block",
		"biggerreactors:uranium_block"
	);
	event.replaceInput(
		{ id: "ad_astra:gravity_normalizer" },
		"ad_astra:desh_plate",
		"ad_astra:ostrum_plate"
	);

	/**
	 * Globes
	 */

	event
		.shaped("ad_astra:earth_globe", ["supplementaries:globe", "#tfc:rock/raw"])
		.id(`setsu:ad_astra/earth_globe`);
	event
		.shaped("ad_astra:moon_globe", [
			"supplementaries:globe",
			"ad_astra:moon_stone",
		])
		.id(`setsu:ad_astra/moon_globe`);
	event
		.shaped("ad_astra:mars_globe", [
			"supplementaries:globe",
			"ad_astra:mars_stone",
		])
		.id(`setsu:ad_astra/mars_globe`);
	event
		.shaped("ad_astra:mercury_globe", [
			"supplementaries:globe",
			"ad_astra:mercury_stone",
		])
		.id(`setsu:ad_astra/mercury_globe`);
	event
		.shaped("ad_astra:venus_globe", [
			"supplementaries:globe",
			"ad_astra:venus_stone",
		])
		.id(`setsu:ad_astra/venus_globe`);
	event
		.shaped("ad_astra:glacio_globe", [
			"supplementaries:globe",
			"ad_astra:glacio_stone",
		])
		.id(`setsu:ad_astra/glacio_globe`);

	/**
	 * Fuel!
	 */

	const addBottling = (
		output: Special.Item | OmniString,
		ingredient: Special.Item | OmniString,
		fluid: Special.FluidTag | OmniString,
		amount: number
	) => {
		event
			.custom({
				type: "immersiveengineering:bottling_machine",
				results: [{ item: output }],
				input: { item: ingredient },
				fluid: { tag: fluid, amount: amount },
			})
			.id(
				`setsu:ad_astra/bottling/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	};
	const addRefinery1Input = (
		output: Special.Fluid,
		amount: number,
		input0: Special.FluidTag,
		amount0: number,
		catalyst?: Special.Item
	) => {
		event
			.custom(
				catalyst != undefined
					? {
							type: "immersiveengineering:refinery",
							result: { fluid: output, amount: amount },
							input0: { tag: input0, amount: amount0 },
							catalyst: { item: catalyst },
							energy: 240,
						}
					: {
							type: "immersiveengineering:refinery",
							result: { fluid: output, amount: amount },
							input0: { tag: input0, amount: amount0 },
							energy: 240,
						}
			)
			.id(
				`setsu:ad_astra/refinery/${output.replace(":", ".").replace("/", ".")}`
			);
	};
	const addRefinery2Input = (
		output: Special.Fluid,
		amount: number,
		input0: Special.FluidTag,
		amount0: number,
		input1: Special.FluidTag,
		amount1: number,
		catalyst?: Special.Item
	) => {
		event
			.custom(
				catalyst != undefined
					? {
							type: "immersiveengineering:refinery",
							result: { fluid: output, amount: amount },
							input0: { tag: input0, amount: amount0 },
							input1: { tag: input1, amount: amount1 },
							catalyst: { item: catalyst },
							energy: 240,
						}
					: {
							type: "immersiveengineering:refinery",
							result: { fluid: output, amount: amount },
							input0: { tag: input0, amount: amount0 },
							input1: { tag: input1, amount: amount1 },
							energy: 240,
						}
			)
			.id(
				`setsu:ad_astra/refinery/${output.replace(":", ".").replace("/", ".")}`
			);
	};
	const addMixer = (
		output: Special.Fluid,
		ingredient: Special.Item,
		fluid: Special.FluidTag,
		amount: number
	) => {
		event
			.custom({
				type: "immersiveengineering:mixer",
				result: { fluid: output, amount: amount },
				inputs: [{ item: ingredient }],
				fluid: { tag: fluid, amount: amount },
				energy: 1600,
			})
			.id(
				`setsu:ad_astra/mixer/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	};

	// addRefinery2Input(
	// 	"ad_astra:fuel",
	// 	8,
	// 	"thermal:heavy_oil",
	// 	4,
	// 	"thermal:light_oil",
	// 	4
	// );
	// addRefinery1Input(
	// 	"thermal:light_oil",
	// 	5,
	// 	"immersiveengineering:biodiesel",
	// 	8
	// );
	// addRefinery2Input(
	// 	"thermal:heavy_oil",
	// 	8,
	// 	"ad_astra:pure_oil",
	// 	5,
	// 	"immersiveengineering:redstone_acid",
	// 	5
	// );
	// addRefinery1Input("ad_astra:oil", 5, "forge:creosote", 15);
	// addMixer(
	// 	"ad_astra:cryo_fuel",
	// 	"ad_astra:ice_shard",
	// 	"ad_astra:pure_fuel",
	// 	100
	// );
	addMixer(
		"ad_astra:cryo_fuel",
		"ad_astra:ice_shard",
		"thermal:refined_fuel",
		100
	);

	// event.remove({ id: "immersiveengineering:jei_bucket_cryo_fuel" });
	addBottling(
		"ad_astra:cryo_fuel_bucket",
		"minecraft:bucket",
		"ad_astra:cryo_fuel",
		1000
	);
}
