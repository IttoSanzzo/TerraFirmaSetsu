// priority: 198

function setRecipesOreWashing(event) {
	function newOreWashHeating(metal, chunk, heat, fluid) {
		if (fluid == undefined)
			fluid = `tfc:metal/${metal}`;
		event.custom({
			type: "tfc:heating",
			ingredient: [
				{
					"item": `tfcorewashing:chunks_${chunk}`
				}
			],
			result_fluid: {
				"fluid": fluid,
				"amount": 3
			},
			temperature: heat
		}).id(`setsu:tfcorewashing/heating_${chunk}`)
	}

	newOreWashHeating("bismuth", "bismuthinite", 270)
	newOreWashHeating("tin", "cassiterite", 230)
	newOreWashHeating("copper", "copper", 1080)
	newOreWashHeating("nickel", "garnierite", 1453)
	newOreWashHeating("gold", "gold", 1060)
	newOreWashHeating("wrought_iron", "hematite", 1535)
	newOreWashHeating("wrought_iron", "limonite", 1535)
	newOreWashHeating("wrought_iron", "magnetite", 1535)
	newOreWashHeating("copper", "malachite", 1080)
	newOreWashHeating("silver", "silver", 961)
	newOreWashHeating("zinc", "sphalerite", 420)
	newOreWashHeating("copper", "tetrahedrite", 1080)
	newOreWashHeating("chromium", "chromite", 1250, "firmalife:metal/chromium")
	newOreWashHeating("lead", "galena", 500, "tfc_ie_addon:metal/lead")
	newOreWashHeating("aluminum", "bauxite", 650, "tfc_ie_addon:metal/aluminum")
	newOreWashHeating("uranium", "uraninite", 500, "tfc_ie_addon:metal/uranium")

	/**
	 * All Others
	 */

	function newArcBriquet(ingot, briquet, prefix) {
		if (prefix != undefined)
			ingot = `${prefix}${ingot}`;
		else
			ingot = `tfc:metal/ingot/${ingot}`;
		event.custom({
			type: "immersiveengineering:arc_furnace",
			results: [
				{
					base_ingredient: {
						item: ingot
					},
					count: 1
				}
			],
			secondaries: [
				{
					chance: 0.1,
					output: {
						item: ingot
					}
				}
			],
			input: {
				base_ingredient: {
					item: `tfcorewashing:briquet_${briquet}`
				},
				count: 1
			},
			additives: [],
			time: 90,
			energy: 25000
		}).id(`setsu:tfcorewashing/arc_furnace/${briquet}_to_ingot`)
	}
	newArcBriquet("bismuth", "bismuthinite")
	newArcBriquet("tin", "cassiterite")
	newArcBriquet("copper", "copper")
	newArcBriquet("nickel", "garnierite")
	newArcBriquet("gold", "gold")
	newArcBriquet("wrought_iron", "hematite")
	newArcBriquet("wrought_iron", "limonite")
	newArcBriquet("wrought_iron", "magnetite")
	newArcBriquet("copper", "malachite")
	newArcBriquet("silver", "silver")
	newArcBriquet("zinc", "sphalerite")
	newArcBriquet("copper", "tetrahedrite")
	newArcBriquet("chromium", "chromium", "firmalife:metal/")
	newArcBriquet("aluminum", "bauxite", "immersiveengineering:ingot_")
	newArcBriquet("lead", "galena", "immersiveengineering:ingot_")
	newArcBriquet("uranium", "uraninite", "immersiveengineering:ingot_")

	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	function newOmniChunksCrusher(prefix, raw, rocky, loot, type) {
		event.custom({
			type: "immersiveengineering:crusher",
			secondaries: [
				{
					"chance": 0.5,
					"output": {
						"item": `tfcorewashing:dirty_pile_${rocky}`,
						"count": 4 * (loot / 20)
					}
				},
				{
					"chance": 0.25,
					"output": {
						"item": `tfcorewashing:dirty_pile_${rocky}`,
						"count": 3 * (loot / 20)
					}
				}
			],
			result: {
				"item": `tfcorewashing:chunks_${rocky}`,
				"count": loot
			},
			input: {
				"item": `${prefix}${raw}`
			},
			energy: 1600
		}).id(`setsu:tfcorewashing/ores/raw_${raw}_${type}_crushing`)
	}
	function newOmniChunksPress(prefix, raw, rocky, loot, type) {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: { "item": `${prefix}${raw}` },
			transitionalItem: { "item": "tfc:rock/loose/andesite" },
			sequence: [
				{ "type": "create:pressing", "ingredients": [{ "item": "tfc:rock/loose/andesite" }], "results": [{ "item": "tfc:rock/loose/andesite" }] },
				{ "type": "create:pressing", "ingredients": [{ "item": "tfc:rock/loose/andesite" }], "results": [{ "item": "tfc:rock/loose/andesite" }] },
				{ "type": "create:pressing", "ingredients": [{ "item": "tfc:rock/loose/andesite" }], "results": [{ "item": "tfc:rock/loose/andesite" }] },
				{ "type": "create:pressing", "ingredients": [{ "item": "tfc:rock/loose/andesite" }], "results": [{ "item": `tfcorewashing:chunks_${rocky}` }] }
			],
			results: [
				{
					"item": `tfcorewashing:chunks_${rocky}`,
					"count": loot
				}
			],
			loops: 1
		}).id(`setsu:tfcorewashing/ores/raw_${raw}_${type}_pressing`)
	}
	function newOmniChunksHammer(prefix, raw, rocky, loot, type) {
		event.custom({
			type: "tfc:extra_products_shapeless_crafting",
			extra_products: [],
			recipe: {
				"type": "tfc:damage_inputs_shapeless_crafting",
				"recipe": {
					"type": "minecraft:crafting_shapeless",
					"ingredients": [
						{
							"item": `${prefix}${raw}`
						},
						{
							"tag": "forge:tools/hammers"
						}
					],
					"result": {
						"item": `tfcorewashing:chunks_${rocky}`,
						"count": loot
					}
				}
			}
		}).id(`setsu:tfcorewashing/ores/raw_${raw}_${type}_hammer`)
	}

	function newWashAllMechaPiece(prefix, raw, rocky) {
		newOmniChunksCrusher(prefix, raw, rocky, 20, "piece")
		newOmniChunksPress(prefix, raw, rocky, 20, "piece")
		newOmniChunksHammer(prefix, raw, rocky, 20, "piece")
	}
	newWashAllMechaPiece("minecraft:raw_", "iron", "hematite")
	newWashAllMechaPiece("minecraft:raw_", "copper", "copper")
	newWashAllMechaPiece("minecraft:raw_", "gold", "gold")
	newWashAllMechaPiece("create:raw_", "zinc", "sphalerite")
	newWashAllMechaPiece("immersiveengineering:raw_", "uranium", "uraninite")
	newWashAllMechaPiece("immersiveengineering:raw_", "nickel", "garnierite")
	newWashAllMechaPiece("immersiveengineering:raw_", "silver", "silver")
	newWashAllMechaPiece("immersiveengineering:raw_", "lead", "galena")
	newWashAllMechaPiece("immersiveengineering:raw_", "aluminum", "bauxite")

	function newWashAllMechaBlock(prefix, raw, rocky) {
		newOmniChunksCrusher(prefix, raw, rocky, 180, "block")
		newOmniChunksPress(prefix, raw, rocky, 180, "block")
		newOmniChunksHammer(prefix, raw, rocky, 180, "block")
	}
	newWashAllMechaBlock("minecraft:raw_", "iron_block", "hematite")
	newWashAllMechaBlock("minecraft:raw_", "copper_block", "copper")
	newWashAllMechaBlock("minecraft:raw_", "gold_block", "gold")
	newWashAllMechaBlock("create:raw_", "zinc_block", "sphalerite")
	newWashAllMechaBlock("immersiveengineering:raw_block_", "uranium", "uraninite")
	newWashAllMechaBlock("immersiveengineering:raw_block_", "nickel", "garnierite")
	newWashAllMechaBlock("immersiveengineering:raw_block_", "silver", "silver")
	newWashAllMechaBlock("immersiveengineering:raw_block_", "lead", "galena")
	newWashAllMechaBlock("immersiveengineering:raw_block_", "aluminum", "bauxite")
}
