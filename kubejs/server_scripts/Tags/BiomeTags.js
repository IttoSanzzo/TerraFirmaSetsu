//priority: 899

const setBiomeTags = (event) => {
	console.log("Setsu Tag Biome Start!");
	// M. Variables
	const all_tfc_biomes = [
		"tfc:badlands",
		"tfc:canyons",
		"tfc:deep_ocean",
		"tfc:deep_ocean_trench",
		"tfc:hills",
		"tfc:inverted_badlands",
		"tfc:lake",
		"tfc:low_canyons",
		"tfc:lowlands",
		"tfc:mountain_lake",
		"tfc:mountain_river",
		"tfc:mountains",
		"tfc:ocean",
		"tfc:ocean_reef",
		"tfc:oceanic_mountain_lake",
		"tfc:oceanic_mountain_river",
		"tfc:oceanic_mountains",
		"tfc:old_mountain_lake",
		"tfc:old_mountain_river",
		"tfc:old_mountains",
		"tfc:plains",
		"tfc:plateau",
		"tfc:plateau_lake",
		"tfc:river",
		"tfc:rolling_hills",
		"tfc:shore",
		"tfc:volcanic_mountain_lake",
		"tfc:volcanic_mountain_river",
		"tfc:volcanic_mountains",
		"tfc:volcanic_oceanic_mountain_lake",
		"tfc:volcanic_oceanic_mountain_river",
		"tfc:volcanic_oceanic_mountains"
	];
	const all_tfc_earth_biomes = [
		"tfc:badlands",
		"tfc:canyons",
		"tfc:hills",
		"tfc:inverted_badlands",
		"tfc:lake",
		"tfc:low_canyons",
		"tfc:lowlands",
		"tfc:mountain_lake",
		"tfc:mountains",
		"tfc:oceanic_mountain_lake",
		"tfc:oceanic_mountains",
		"tfc:old_mountain_lake",
		"tfc:old_mountains",
		"tfc:plains",
		"tfc:plateau",
		"tfc:rolling_hills",
		"tfc:shore",
		"tfc:volcanic_mountain_lake",
		"tfc:volcanic_mountains",
		"tfc:volcanic_oceanic_mountain_lake",
		"tfc:volcanic_oceanic_mountains"
	];
	const all_tfc_aquatic_biomes = [
		"tfc:deep_ocean",
		"tfc:deep_ocean_trench",
		"tfc:ocean",
		"tfc:ocean_reef",
		"tfc:oceanic_mountain_lake",
		"tfc:oceanic_mountain_river",
		"tfc:oceanic_mountains",
		"tfc:river",
		"tfc:shore",
		"tfc:volcanic_mountain_river",
		"tfc:volcanic_oceanic_mountain_lake",
		"tfc:volcanic_oceanic_mountain_river",
	];
	const all_tfc_deep_aquatic_biomes = [
		"tfc:deep_ocean",
		"tfc:deep_ocean_trench",
		"tfc:ocean",
		"tfc:ocean_reef",
	];

	/**
	 * Removes
	 */

	event.get("repurposed_structures:has_structure/strongholds/nether").removeAll()
	event.get("alekiships:has_structure/unfinished_rowboat").removeAll()
	event.get("alekiships:has_structure/unfinished_sloop").removeAll()

	/**
	 * TFC to Vanilla
	 */

	event.add("minecraft:is_overworld", all_tfc_biomes)

	const addDefault = (tag, additions) => {
		event.add(`minecraft:${tag}`, additions);
		event.add(`forge:${tag}`, additions);
	};

	addDefault("is_sparse", all_tfc_biomes)
	addDefault("windswept_forest", ["tfc:volcanic_oceanic_mountains", "tfc:old_mountains", "tfc:volcanic_mountains", "tfc:mountains", "tfc:oceanic_mountains", "tfc:highlands"])
	addDefault("savanna_plateau", ["tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills", "tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills"]);
	addDefault("badlands", ["tfc:inverted_badlands", "tfc:badlands"])
	addDefault("is_badlands", ["tfc:inverted_badlands", "tfc:badlands"])
	addDefault("is_dry", ["tfc:inverted_badlands", "tfc:badlands"])
	addDefault("is_sandy", ["tfc:shore", "tfc:tidal_flats", "tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills", "tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills"])
	addDefault("is_beach", ["tfc:shore", "tfc:tidal_flats"])
	addDefault("is_deep_ocean", ["tfc:deep_ocean_trench", "tfc:deep_ocean"])
	addDefault("is_hill", ["tfc:rolling_hills", "tfc:hills"])
	addDefault("is_mountain", ["tfc:volcanic_oceanic_mountains", "tfc:old_mountains", "tfc:volcanic_mountains", "tfc:mountains", "tfc:oceanic_mountains", "tfc:highlands"])
	addDefault("is_peak", ["tfc:volcanic_oceanic_mountains", "tfc:old_mountains", "tfc:volcanic_mountains", "tfc:mountains", "tfc:oceanic_mountains", "tfc:highlands"])
	addDefault("is_ocean", ["tfc:ocean", "tfc:ocean_reef"])
	addDefault("is_river", ["tfc:river"])
	addDefault("is_water", ["tfc:river", "tfc:ocean", "tfc:ocean_reef", "tfc:deep_ocean_trench", "tfc:deep_ocean"])
	addDefault("is_lake", ["tfc:volcanic_mountain_lake", "tfc:volcanic_oceanic_mountain_lake", "tfc:oceanic_mountain_lake", "tfc:mountain_lake", "tfc:plateau_lake", "tfc:lake", "tfc:old_mountain_lake"])
	addDefault("is_savanna", ["tfc:plains", "tfc:plateau"])
	addDefault("is_lowland", ["tfc:lowlands", "tfc:low_canyons"])
	addDefault("is_swamp", ["tfc:lowlands", "tfc:low_canyons"])
	addDefault("is_desert", ["tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills", "tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills"]);
	addDefault("is_savanna", ["tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills", "tfc:badlands", "tfc:inverted_badlands", "tfc:volcanic_mountains", "tfc:rolling_hills", "tfc:hills"]);
	addDefault("is_forest", ["tfc:plains", "tfc:plateau", "tfc:rolling_hills"]);
	addDefault("is_jungle", ["tfc:plains", "tfc:plateau", "tfc:rolling_hills"]);
	addDefault("is_tundra", ["tfc:plains", "tfc:rolling_hills", "tfc:oceanic_mountains"]);
	addDefault("is_snowy", ["tfc:plains", "tfc:plateau", "tfc:rolling_hills", "tfc:mountains", "tfc:oceanic_mountains", "tfc:highlands"]);
	addDefault("is_plains", ["tfc:plains", "tfc:rolling_hills", "tfc:hills"]);
	addDefault("is_dry/overworld", ["tfc:inverted_badlands", "tfc:badlands"])
	addDefault("is_cold/overworld", ["tfc:plains", "tfc:plateau", "tfc:rolling_hills", "tfc:mountains", "tfc:oceanic_mountains", "tfc:highlands"]);
	addDefault("is_wet/overworld", ["tfc:plains", "tfc:plateau", "tfc:rolling_hills", "tfc:oceanic_mountain_lake", "tfc:mountain_lake", "tfc:plateau_lake", "tfc:lake"]);

	/**
	 * Add Biome to Structures
	 */

	event.add("minecraft:has_structure/village_savanna", ["#minecraft:is_savanna"])
	event.add("minecraft:has_structure/village_desert", ["#minecraft:is_badlands"])
	event.add("minecraft:has_structure/swamp_hut", ["#minecraft:is_lowland"])
	event.add("minecraft:has_structure/ruined_portal_swamp", ["#minecraft:is_lowland"])
	// event.get("ae2:has_meteorites").remove("#is_overworld")

	/**
	 * Mod Ones
	 */

	// Mna
	event.add("mna:crypt_biomes", ["tfc:hills", "tfc:rolling_hills", "tfc:plains", "tfc:plateau", "tfc:plateau_lake", "tfc:river", "tfc:rolling_hills"]);
	event.add("mna:fey_tree_biomes", ["tfc:rolling_hills", "tfc:plains", "tfc:plateau", "tfc:plateau_lake", "tfc:river", "tfc:rolling_hills", "lowlands", "lake"]);
	event.add("mna:cathedral_biomes", all_tfc_earth_biomes);
	event.add("mna:council_island_biomes", all_tfc_earth_biomes);
	event.add("mna:dry_biomes", all_tfc_earth_biomes);
	event.add("mna:lush_biomes", all_tfc_earth_biomes);
	event.add("mna:manaweave_cache_biomes", all_tfc_earth_biomes);

	// Towns and Towers
	event.add("towns_and_towers:has_structure/village_swamp_boat", all_tfc_deep_aquatic_biomes);
	event.add("towns_and_towers:has_structure/village_wooded_badlands_tipi", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_badlands", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_beach", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_birch_forest", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_deep_oceans", all_tfc_deep_aquatic_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_desert", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_flower_forest", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_forest", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_grove", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_jungle", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_meadow", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_mushroom_fields", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_old_growth_taiga", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_savanna", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_snowy_beach", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_snowy_plains", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_snowy_slopes", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_snowy_taiga", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_sparse_jungle", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_sunflower_plains", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_swamp", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_taiga", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/pillager_outpost_wooded_badlands", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/shallow_oceans_wreckage", all_tfc_deep_aquatic_biomes);
	event.add("towns_and_towers:has_structure/village_badlands_pueblo", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_beach_lighthouse", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_birch_forest_romanian", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_deep_oceans_ships", all_tfc_deep_aquatic_biomes);
	event.add("towns_and_towers:has_structure/village_flower_forest_japanese", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_forest_ruins", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_grove_villager_outpost", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_jungle_tribal", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_meadow_swiss", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_mushroom_fields_fantasy", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_old_growth_taiga_polish", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_snowy_slopes_inn", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_snowy_taiga_viking", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_sparse_jungle_polynesian", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/village_sunflower_plains_farm", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_classic", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_iberian", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_mediterranean", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_oriental", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_rustic", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_swedish", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/pillager_outpost_tudor", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_classic", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_iberian", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_mediterranean", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_nilotic", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_oriental", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_rustic", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_swedish", all_tfc_earth_biomes);
	event.add("towns_and_towers:has_structure/exclusives/village_tudor", all_tfc_earth_biomes);

	// Supplementaries
	event.add("supplementaries:has_way_signs", all_tfc_biomes);

	/*
	
	// 1. Vanilla Ones
	addToBiomeTag("forge", "is_overworld", all_tfc_biomes);
	addToBiomeTag("minecraft", "is_swamp", [
		"tfc:lowlands",
		"tfc:low_canyons"
	]);
	addToBiomeTag("minecraft", "swamp", [
		"tfc:lowlands",
		"tfc:low_canyons"
	]);
	addToBiomeTag("forge", "is_swamp", [
		"tfc:lowlands",
		"tfc:low_canyons"
	]);
	addToBiomeTag("forge", "is_desert", [
		"tfc:badlands",
		"tfc:inverted_badlands",
		"tfc:volcanic_mountains",
		"tfc:rolling_hills",
		"tfc:hills",
		"tfc:badlands",
		"tfc:inverted_badlands",
		"tfc:volcanic_mountains",
		"tfc:rolling_hills",
		"tfc:hills"
	]);
	addToBiomeTag("minecraft", "desert", [
		"tfc:badlands",
		"tfc:inverted_badlands",
		"tfc:volcanic_mountains",
		"tfc:rolling_hills",
		"tfc:hills"
	]);
	addToBiomeTag("minecraft", "is_mountain", [
		"tfc:volcanic_mountains",
		"tfc:volcanic_mountain_lake",
		"tfc:volcanic_mountain_river",
		"tfc:volcanic_oceanic_mountains",
		"tfc:volcanic_oceanic_mountain_lake",
		"tfc:volcanic_oceanic_mountain_river",
		"tfc:mountains",
		"tfc:mountain_lake",
		"tfc:mountain_river",
		"tfc:oceanic_mountains",
		"tfc:oceanic_mountain_lake",
		"tfc:oceanic_mountain_river",
		"tfc:old_mountains",
		"tfc:old_mountain_lake",
		"tfc:old_mountain_river"
	]);
	addToBiomeTag("minecraft", "is_forest", [
		"tfc:plains",
		"tfc:plateau",
		"tfc:rolling_hills"
	]);
	addToBiomeTag("forge", "is_forest", [
		"tfc:plains",
		"tfc:plateau",
		"tfc:rolling_hills"
	]);
	addToBiomeTag("mna", "crypt_biomes", [
		"tfc:hills",
		"tfc:rolling_hills",
		"tfc:plains",
		"tfc:plateau",
		"tfc:plateau_lake",
		"tfc:river",
		"tfc:rolling_hills"
	]);
	
	// 3. Towns and Towers Biome Tags
	addToBiomeTag("towns_and_towers", "has_structure/village_swamp_boat", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_wooded_badlands_tipi", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_badlands", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_beach", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_birch_forest", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_deep_oceans", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_desert", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_flower_forest", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_forest", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_grove", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_jungle", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_meadow", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_mushroom_fields", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_old_growth_taiga", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_savanna", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_snowy_beach", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_snowy_plains", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_snowy_slopes", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_snowy_taiga", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_sparse_jungle", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_sunflower_plains", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_swamp", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_taiga", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/pillager_outpost_wooded_badlands", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/shallow_oceans_wreckage", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_badlands_pueblo", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_beach_lighthouse", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_birch_forest_romanian", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_deep_oceans_ships", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_flower_forest_japanese", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_forest_ruins", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_grove_villager_outpost", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_jungle_tribal", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_meadow_swiss", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_mushroom_fields_fantasy", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_old_growth_taiga_polish", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_snowy_slopes_inn", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_snowy_taiga_viking", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_sparse_jungle_polynesian", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/village_sunflower_plains_farm", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_classic", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_iberian", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_mediterranean", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_oriental", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_rustic", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_swedish", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/pillager_outpost_tudor", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_classic", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_iberian", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_mediterranean", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_nilotic", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_oriental", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_rustic", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_swedish", all_tfc_earth_biomes);
	addToBiomeTag("towns_and_towers", "has_structure/exclusives/village_tudor", all_tfc_earth_biomes);
	
	// 4. MnA
	addToBiomeTag("mna", "cathedral_biomes", all_tfc_earth_biomes);
	addToBiomeTag("mna", "council_island_biomes", all_tfc_earth_biomes);
	addToBiomeTag("mna", "crypt_biomes", all_tfc_earth_biomes);
	addToBiomeTag("mna", "dry_biomes", all_tfc_earth_biomes);
	addToBiomeTag("mna", "fey_tree_biomes", ["tfc:rolling_hills", "tfc:plains", "tfc:plateau", "tfc:plateau_lake", "tfc:river", "tfc:rolling_hills", "lowlands", "lake"]);
	addToBiomeTag("mna", "lush_biomes", all_tfc_earth_biomes);
	addToBiomeTag("mna", "manaweave_cache_biomes", all_tfc_earth_biomes);
	
	// 5. Supplementaries
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:badlands"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:canyons"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:deep_ocean"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:deep_ocean_trench"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:hills"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:inverted_badlands"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:lowlands"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:low_canyons"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:mountains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:mountain_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:mountain_river"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:ocean"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:oceanic_mountains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:oceanic_mountain_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:oceanic_mountain_river"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:ocean_reef"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:old_mountains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:old_mountain_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:old_mountain_river"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:plains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:plateau"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:plateau_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:river"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:rolling_hills"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:shore"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_mountains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_mountain_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_mountain_river"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_oceanic_mountains"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_oceanic_mountain_lake"]);
	addToBiomeTag("supplementaries", "has_way_signs", ["tfc:volcanic_oceanic_mountain_river"]);
	*/
	/*// 6. When Dungeons Arise - Forge!
	addToBiomeTag("dungeons_arise", "has_structure/abandoned_temple_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/aviary_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/bandit_towers_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/bandit_village_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/ceryneian_hind_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/coliseum_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/fishing_hut_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/foundry_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/giant_mushroom_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/heavenly_challenger_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/heavenly_conqueror_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/heavenly_rider_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/illager_campsite_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/illager_corsair_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/illager_fort_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/illager_galley_biomes", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/illager_windmill_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/infested_temple_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/jungle_tree_house_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/lighthouse_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/merchant_campsite_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/mining_system_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/monastery_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/mushroom_house_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/mushroom_mines_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/mushroom_village_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/plague_asylum_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/scorched_mines_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/shiraz_palace_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/small_blimp_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/small_prairie_house_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/thornborn_towers_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/typhon_biomes", all_tfc_earth_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/undead_pirate_ship_biomes", all_tfc_deep_aquatic_biomes);
	addToBiomeTag("dungeons_arise", "has_structure/wishing_well_biomes", all_tfc_earth_biomes);
	*/

	// End.
	console.log("Setsu Tag Biome End!");
}
