// priority: 199

function setRecipeRemoves(event) {
	event.remove({ id: "minecraft:stone_bricks" });

	event.remove({ output: "sophisticatedbackpacks:smelting_upgrade" });
	event.remove({ output: "sophisticatedbackpacks:auto_smelting_upgrade" });
	event.remove({ output: "sophisticatedbackpacks:smoking_upgrade" });
	event.remove({ output: "sophisticatedbackpacks:auto_smoking_upgrade" });
	event.remove({ output: "sophisticatedbackpacks:blasting_upgrade" });
	event.remove({ output: "sophisticatedbackpacks:auto_blasting_upgrade" });

	event.remove({ id: "create:honey_bucket" })
	event.remove({ output: "minecraft:smoker" })
	event.remove({ output: "minecraft:blast_furnace" })
	event.remove({ output: "minecraft:furnace_minecart" })

	event.remove({ id: "minecraft:stone_brick_wall" })
	event.remove({ id: "minecraft:stone_brick_slab" })
	event.remove({ id: "minecraft:stone_brick_stairs" })
	event.remove({ id: "minecraft:stone_slab" })

	event.remove({ id: "immersiveengineering:smelting/ingot_steel_from_dust_from_blasting" })
	event.remove({ id: "immersiveengineering:smelting/ingot_steel_from_dust" })
	event.remove({ output: Item.of("tombstone:fishing_rod_of_misadventure") })

	event.remove({ id: "thermal:machines/insolator/insolator_potato" })
	event.remove({ id: "thermal:machines/insolator/insolator_pumpkin" })
	event.remove({ id: "thermal:machines/insolator/insolator_melon" })
	event.remove({ id: "thermal:machines/insolator/insolator_carrot" })
	event.remove({ type: "thermal:stirling_fuel" })
	event.remove({ type: "thermal:compression_fuel" })
	event.remove({ type: "thermal:magmatic_fuel" })
	event.remove({ type: "thermal:numismatic_fuel" })
	event.remove({ type: "thermal:lapidary_fuel" })
	event.remove({ type: "thermal:disenchantment_fuel" })
	event.remove({ type: "thermal:gourmand_fuel" })

	event.remove({ id: "thermal:machines/insolator/insolator_dark_oak_sapling" })
	event.remove({ id: "thermal:machines/insolator/insolator_jungle_sapling" })

	event.remove({ id: "immersiveengineering:cloche/melon" })
	event.remove({ id: "immersiveengineering:cloche/pumpkin" })
	event.remove({ id: "immersiveengineering:cloche/potato" })

	event.remove({ id: /thermal:storage\/.*_from_block$/ })
	event.remove({ id: "immersiveposts:has_copper_rod" })
	event.remove({ id: "immersiveposts:has_lead_rod" })
	event.remove({ id: "immersiveposts:has_gold_rod" })
	event.remove({ id: "immersiveposts:has_electrum_rod" })
	event.remove({ id: "immersiveposts:has_constantan_rod" })
	event.remove({ id: "immersiveposts:has_uranium_rod" })
	event.remove({ id: "immersiveposts:has_silver_rod" })
	event.remove({ id: "immersiveposts:has_nickel_rod" })

	event.remove({ id: "minecraft:ens_ancient_debris" })
	event.remove({ id: "immersiveengineering:jei_bucket_fuel" })
	event.remove({ id: "immersiveengineering:jei_bucket_sea_water" })
	event.remove({ id: "create:crafting/materials/andesite_alloy" })
	event.remove({ type: "enderstorage:recolour_recipe" })

	event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
	event.remove({ id: "create:mixing/andesite_alloy" })
	event.remove({ id: "thermal:machines/press/unpacking/press_wheat_unpacking" })
	event.remove({ id: "thermal:storage/cured_rubber_block" })

	event.remove({ id: "minecraft:stone_bricks" })
	event.remove({ id: /bloodmagic:.*telepos.*/ })
	event.remove({ id: "bloodmagic:alchemytable/reagent_suppression" })
	event.remove({ id: "bloodmagic:array/suppressionsigil" })
	event.remove({ id: "create:mixing/chocolate_melting" })
	event.remove({ id: "biggerreactors:smelting/graphite_ingot" })

	event.remove({ input: "#forge:ores/apatite" })

	ItemCol.allVanillaWoodTypes.forEach((material) => {
		event.remove({ id: `create:cutting/${material}_wood` })
		event.remove({ id: `create:cutting/stripped_${material}_wood` })
		event.remove({ id: `create:cutting/stripped_${material}_log` })
		event.remove({ id: `immersiveengineering:sawmill/${material}_log` })
		event.remove({ id: `immersiveengineering:sawmill/${material}_stairs` })
		event.remove({ id: `immersiveengineering:sawmill/${material}_door` })
		event.remove({ id: `immersiveengineering:sawmill/stripped_${material}_log` })
	})

	ItemCol.allVanillaWoodTypes.forEach((vanillaWood) => {
		event.remove({ id: `minecraft:${vanillaWood}_sign` })
		event.remove({ id: `thermal:machines/sawmill/sawmill_${vanillaWood}_logs` })
	})
	event.remove({ id: "minecraft:candle" })

	const tempMetals = [
		"aluminum",
		"lead",
		"silver",
		"nickel",
		"uranium",
		"constantan",
		"electrum",
		"steel"
	]
	tempMetals.forEach((ingot) => {
		event.remove({ id: `createaddition:pressing/${ingot}_ingot` })
	})

	// Removing vanilla kelp
	event.remove({ id: "minecraft:dried_kelp" })
	event.remove({ id: "thermal:machines/press/unpacking/press_dried_kelp_unpacking" })

	// Removing vanilla dye recipes from ID Squeezer and create mill
	event.remove({ output: /minecraft:.*_dye/, type: "create:milling" })

	// Create update 0.5.1
	event.remove({ id: "create:crafting/appliances/netherite_backtank_from_netherite" })
	event.remove({ id: "create:crafting/appliances/netherite_diving_helmet_from_netherite" })
	event.remove({ id: "create:crafting/appliances/netherite_diving_boots_from_netherite" })
	event.remove({ id: "create:mixing/dough_by_mixing" })

	// Removing Thermal Tree Extractor
	event.remove({ type: "thermal:tree_extractor" })
	event.remove({ id: "thermal:device_tree_extractor" })

	// Remove Paper from Dust from IE
	event.remove({ id: "immersiveengineering:crafting/paper_from_sawdust" })
}
