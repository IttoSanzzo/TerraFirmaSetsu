// priority: 198

function setRecipesSupplementaries(event) {

	// Remove Pancake & Candy
	event.remove({ output: "farmersdelight:pancake" });
	event.remove({ output: "farmersdelight:candy" });
	event.remove({ id: "supplementaries:strings" });

	// FlexBlock
	event.replaceInput({ mod: "supplementaries" }, "supplementaries:flax", "tfc:straw");
	event.replaceOutput({ mod: "supplementaries" }, "supplementaries:flax", "tfc:straw");
	event.remove({ id: "farmersdelight:rope" });
	event.remove({ id: "supplementaries:flax_block" });
	event.remove({ id: "supplementaries:flax_block_uncrafting" });
	event.shapeless("supplementaries:flax_block", ["8x #forge:straw"]).id("setsu:supplementaries/flax_block");
	event.shapeless("8x tfc:straw", ["supplementaries:flax_block"]).id("setsu:supplementaries/flax_block_uncrafting");

	event.remove({ id: "supplementaries:candle_holders/candle_holder" });
	event.shaped("supplementaries:candle_holder", ["C ", "I "], {
		C: "tfc:candle",
		I: "tfc:metal/ingot/wrought_iron",
	}).id("setsu:supplementaries/candle_holders/candle_holder");
	ItemCol.allDyes.forEach((color) => {
		event.remove({ id: `supplementaries:candle_holders/candle_holder_${color}` });
		event.shaped(`supplementaries:candle_holder_${color}`, ["C ", "I "], {
			C: `tfc:candle/${color}`,
			I: "tfc:metal/ingot/wrought_iron",
		}).id(`setsu:supplementaries/candle_holders/candle_holder_${color}`);
	});

	event.replaceInput({ mod: "supplementaries" },
		"supplementaries:ash",
		"tfc:powder/wood_ash"
	);

	event.replaceInput({ id: "supplementaries:blackboard" },
		"minecraft:blackstone",
		"thermal:charcoal_block"
	);

	event.replaceInput({ mod: "supplementaries" },
		"minecraft:rabbit_hide",
		"minecraft:leather"
	);

	event.replaceInput({ id: "supplementaries:soap" },
		"minecraft:water_bucket",
		Item.of("tfc:wooden_bucket", '{fluid:{Amount:1000,FluidName:"minecraft:water"}}')
	);

	event.replaceInput({ id: "supplementaries:soap" },
		"minecraft:porkchop",
		"hexerei:animal_fat"
	);

	event.replaceInput({ id: "supplementaries:cage" },
		"tfc:metal/ingot/wrought_iron",
		"tfc:metal/ingot/steel"
	);

	event.replaceInput({ id: "supplementaries:awnings/awning" },
		"tfc:straw",
		"farmersdelight:canvas"
	);

	event.replaceInput({ id: "supplementaries:doormat_2" },
		"tfc:straw",
		"farmersdelight:canvas"
	);

	event.remove({ id: "supplementaries:daub" });
	event.shaped("8x supplementaries:daub", ["DDD", "DXD", "DDD"], {
		X: "tfc:mortar",
		D: "tfc:daub",
	}).id("setsu:supplementaries/daub");

	event.remove({ output: "supplementaries:safe" });
	event.shaped("supplementaries:safe", [" M ", "MBM", " M "], {
		M: "immersiveengineering:plate_steel",
		B: "#tfcbarrels:barrels",
	}).id("setsu:supplementaries/safe");

	event.shaped("supplementaries:globe", [" BN", "NNN", " P "], {
		B: "minecraft:clay_ball",
		N: "minecraft:gold_nugget",
		P: "immersiveengineering:plate_gold",
	}).id("setsu:supplementaries/globe");

	event.shaped("supplementaries:urn", ["B B", "BAB", "BBB"], {
		B: "#forge:ingots/brick",
		A: "tfc:powder/wood_ash",
	}).id("setsu:supplementaries/urn");

	event.remove({ id: "supplementaries:ash_brick" });
	event.shapeless("supplementaries:ash_brick", ["tfc:powder/wood_ash", "tfc:daub"]).id("setsu:supplementaries/ash_brick");

	event.shaped("supplementaries:antique_ink", ["T", "B", "J"], {
		T: "#minecraft:wooden_buttons",
		J: "tfc:empty_jar",
		B: "#forge:dyes/black",
	}).id("setsu:supplementaries/antique_ink");

	event.shaped("supplementaries:quiver", ["AA", "LR"], {
		A: "#minecraft:arrows",
		L: "minecraft:leather",
		R: "supplementaries:rope"
	}).id("setsu:supplementaries/quiver");

	event.remove({ id: "supplementaries:lunch_basket" });
	event.shaped("supplementaries:lunch_basket", [" C ", "CWC", "CCC"], {
		C: "farmersdelight:canvas",
		W: "#tfc:high_quality_cloth",
	}).id("setsu:supplementaries/lunch_basket");
}