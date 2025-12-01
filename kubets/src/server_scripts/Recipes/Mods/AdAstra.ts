// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesAdAstra(event: $RecipesEventJS) {
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
	 * Fuel!
	 */

	const newRefinery1Input = (output, amount, input0, amount0, catalyst) => {
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
	const newRefinery2Input = (
		output,
		amount,
		input0,
		amount0,
		input1,
		amount1,
		catalyst
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
	const addMixer = (output, ingredient, fluid, amount) => {
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

	newRefinery2Input(
		"ad_astra:fuel",
		8,
		"thermal:heavy_oil",
		4,
		"thermal:light_oil",
		4
	);
	newRefinery1Input(
		"thermal:light_oil",
		5,
		"immersiveengineering:biodiesel",
		8
	);
	newRefinery2Input(
		"thermal:heavy_oil",
		8,
		"ad_astra:pure_oil",
		5,
		"immersiveengineering:redstone_acid",
		5
	);
	newRefinery1Input("ad_astra:oil", 5, "forge:creosote", 15);
	addMixer(
		"ad_astra:cryo_fuel",
		"ad_astra:ice_shard",
		"ad_astra:pure_fuel",
		100
	);
}
