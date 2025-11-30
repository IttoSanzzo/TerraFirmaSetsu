// priority: 198

function setRecipesCreateEncased(event) {
	event.remove({ output: `extendedgears:large_shaftless_cogwheel` })
	event.remove({ input: `extendedgears:large_shaftless_cogwheel` })
	event.remove({ output: `extendedgears:shaftless_cogwheel` })
	event.remove({ input: `extendedgears:shaftless_cogwheel` })

	event.replaceInput({ mod: `extendedgears` }, "#minecraft:planks", "#forge:treated_lumber")
	event.replaceInput({ mod: `createcasing` }, "create:electron_tube", "#forge:electron_tube")
	event.replaceInput({ mod: `createcasing` }, "minecraft:iron_block", "tfc:metal/anvil/wrought_iron")
	event.replaceInput({ input: `create:cogwheel` }, "create:cogwheel", "#create:cogwheels")
	event.replaceInput({ input: `create:large_cogwheel` }, "create:large_cogwheel", "#create:large_cogwheels")

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
		"warped"
	];
	reCreateShaft.forEach((type) => {
		event.remove({ id: `createcasing:crafting/shafts/${type}_shaft` })
		event.shaped(`3x createcasing:${type}_shaft`, ["L ", "LW", "L "], {
			W: "firmalife:beeswax",
			L: `#tfc:lumber`
		}).id(`setsu:createcasing/shafts/${type}_shaft`)

		event.remove({ output: `createcasing:${type}_cogwheel` })
		event.shapeless(`createcasing:${type}_cogwheel`, [
			"create:andesite_alloy",
			"2x #forge:treated_lumber"
		]).id(`setsu:createcasing/gears/${type}_cogwheel`)

		event.remove({ output: `createcasing:${type}_large_cogwheel` })
		event.shapeless(`createcasing:${type}_large_cogwheel`, [
			"create:andesite_alloy",
			"4x #forge:treated_lumber"
		]).id(`setsu:createcasing/gears/${type}_large_cogwheel`)
	})
	event.remove({ id: `createcasing:crafting/shafts/spruce_shaft` })
	event.shaped(`3x createcasing:spruce_shaft`, ["L ", "LW", "L "], {
		W: "firmalife:beeswax",
		L: `#tfc:lumber`
	}).id(`setsu:createcasing/shafts/spruce_shaft`)

	event.remove({ id: `createcasing:crafting/shafts/glass_shaft` })
	event.shaped(`6x createcasing:glass_shaft`, ["L ", "LW", "L "], {
		W: "firmalife:beeswax",
		L: "#forge:glass/colorless"
	}).id(`setsu:createcasing/shafts/glass_shaft`)

	event.remove({ id: `createcasing:cutting/brass_ingot` })
	event.remove({ id: `createcasing:crafting/shafts/brass_shaft` })
	event.shaped(`4x createcasing:brass_shaft`, ["L ", "MW", "L "], {
		W: "firmalife:beeswax",
		L: "tfc:metal/ingot/brass",
		M: "tfc:brass_mechanisms"
	}).id(`setsu:createcasing/shafts/brass_shaft`)

	const reCasingPress = [
		"brass",
		"copper",
		"railway"
	];
	reCasingPress.forEach((type) => {
		event.shaped(`createcasing:${type}_press`, ["S", "M", "C"], {
			S: "create:shaft",
			M: `create:${type}_casing`,
			C: "tfc:metal/double_ingot/black_steel"
		}).id(`setsu:createcasing/${type}_press`)
		event.shaped(`createcasing:${type}_press`, ["S", "M", "C"], {
			S: "create:shaft",
			M: `create:${type}_casing`,
			C: "minecraft:anvil"
		}).id(`setsu:createcasing/${type}_press_vanilla_anvil`)
	})
	event.shaped(`createcasing:industrial_iron_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `create:industrial_iron_block`,
		C: "tfc:metal/double_ingot/black_steel"
	}).id(`setsu:createcasing/industrial_iron_press`)
	event.shaped(`createcasing:industrial_iron_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `create:industrial_iron_block`,
		C: "minecraft:anvil"
	}).id(`setsu:createcasing/industrial_iron_press_vanilla_anvil`)
	event.shaped(`createcasing:weathered_iron_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `create:weathered_iron_block`,
		C: "tfc:metal/double_ingot/black_steel"
	}).id(`setsu:createcasing/weathered_industrial_iron_press`)
	event.shaped(`createcasing:weathered_iron_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `create:weathered_iron_block`,
		C: "minecraft:anvil"
	}).id(`setsu:createcasing/weathered_iron_press_vanilla_anvil`)

	event.shaped(`createcasing:creative_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `createcasing:creative_casing`,
		C: "tfc:metal/double_ingot/black_steel"
	}).id(`setsu:createcasing/creative_press`)
	event.shaped(`createcasing:creative_press`, ["S", "M", "C"], {
		S: "create:shaft",
		M: `createcasing:creative_casing`,
		C: "minecraft:anvil"
	}).id(`setsu:createcasing/creative_press_vanilla_anvil`)
}
