// priority: 198

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */

function setRecipesSophisticatedBackpacks(event) {

	/**
	 * All Removes
	 */

	const spAllRemoves = [
		/**
		 * Removeds
		 */
		"smelting_upgrade",
		"auto_smelting_upgrade",
		"smoking_upgrade",
		"auto_smoking_upgrade",
		"blasting_upgrade",
		"auto_blasting_upgrade",
		"stonecutter_upgrade",
		"anvil_upgrade",
		"smithing_upgrade",
		/**
		 * Backpacks
		 */
		"backpack",
		"copper_backpack",
		"iron_backpack",
		"iron_backpack_from_copper",
		"gold_backpack",
		"diamond_backpack",
		"netherite_backpack",
		/**
		 * Upgrades
		 */
		"upgrade_base",
		"magnet_upgrade",
		"advanced_magnet_upgrade",
		"feeding_upgrade",
		"battery_upgrade",
		"tank_upgrade",
		"pickup_upgrade",
		/**
		 * Stack Upgrades
		 */
		"stack_upgrade_starter_tier",
		"stack_upgrade_tier_1_from_starter",
		"stack_upgrade_tier_1",
		"stack_upgrade_tier_2",
		"stack_upgrade_tier_3",
		"stack_upgrade_tier_4"
	]
	spAllRemoves.forEach((item) => {
		event.remove({ id: `sophisticatedbackpacks:${item}` });
	})


	/**
	 * Backpacks
	 */

	addDamageShaped(event, "sophisticatedbackpacks:backpack", ["SLN", "BZB", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "#forge:string",
		N: "tfc:bone_needle",
		B: "toolbelt:pouch",
		Z: "sophisticatedbackpacks:upgrade_base",
		C: "thermal:satchel"
	});
	addDamageShaped(event, "sophisticatedbackpacks:copper_backpack", ["SLN", "UZU", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "#forge:string",
		N: "tfc:bone_needle",
		U: "sophisticatedbackpacks:stack_upgrade_starter_tier",
		B: "toolbelt:pouch",
		Z: "tfc:metal/sheet/copper",
		C: "sophisticatedbackpacks:backpack"
	});
	addDamageShaped(event, "sophisticatedbackpacks:iron_backpack", ["SLN", "UZU", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "#forge:string",
		N: "tfc:bone_needle",
		U: "sophisticatedbackpacks:stack_upgrade_tier_1",
		B: "toolbelt:pouch",
		Z: "tfc:metal/sheet/wrought_iron",
		C: "sophisticatedbackpacks:copper_backpack"
	});
	addDamageShaped(event, "sophisticatedbackpacks:gold_backpack", ["SLN", "UZG", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "createaddition:gold_spool",
		N: "tfc:bone_needle",
		U: "sophisticatedbackpacks:stack_upgrade_tier_2",
		Z: "tfc:metal/sheet/rose_gold",
		G: "kubejs:bismuth_bronze_nugget",
		B: "toolbelt:pouch",
		C: "sophisticatedbackpacks:iron_backpack",
	});
	addDamageShaped(event, "sophisticatedbackpacks:diamond_backpack", ["SLN", "UZG", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "immersiveengineering:wire_steel",
		N: "tfc:bone_needle",
		U: "sophisticatedbackpacks:stack_upgrade_tier_3",
		Z: "botania:mana_diamond",
		B: "toolbelt:pouch",
		C: "sophisticatedbackpacks:gold_backpack",
		G: "ad_astra:desh_plate"
	});
	addDamageShaped(event, "sophisticatedbackpacks:netherite_backpack", ["SLN", "UZG", "BCB"], {
		S: "#tfc:metal/shearss",
		L: "botania:red_string",
		N: "tfc:bone_needle",
		U: "sophisticatedbackpacks:stack_upgrade_tier_4",
		Z: "kubejs:metal/ingot/purple_steel",
		B: "toolbelt:pouch",
		C: "sophisticatedbackpacks:diamond_backpack",
		G: "ad_astra:ostrum_plate"
	});

	/**
	 * Upgrades
	 */

	addDamageShaped(event, "sophisticatedbackpacks:upgrade_base", ["VLN", "LSL", " L "], {
		L: "#forge:string",
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		S: "#tfc:leather_knapping",
	});

	event.shaped("sophisticatedbackpacks:magnet_upgrade", [" M ", "MCM", "R R"], {
		M: "#tfc:magnetic_rocks",
		C: "sophisticatedbackpacks:pickup_upgrade",
		R: "#forge:dusts/redstone",
	}).id("setsu:sophisticatedbackpacks/magnet_upgrade");
	event.shaped("sophisticatedbackpacks:advanced_magnet_upgrade", [" M ", "MCM", "R R"], {
		M: "#tfc:magnetic_rocks",
		C: "sophisticatedbackpacks:advanced_pickup_upgrade",
		R: "#forge:dusts/redstone",
	}).id("setsu:sophisticatedbackpacks/advanced_upgrade");

	event.shaped("sophisticatedbackpacks:feeding_upgrade", ["BFB", "OCA", "BRB"], {
		F: "#tfc:foods",
		O: "#tfc:soups",
		A: "#tfc:salads",
		B: "tfc:ceramic/bowl",
		R: "#forge:dusts/redstone",
		C: "sophisticatedbackpacks:upgrade_base",
	}).id("setsu:sophisticatedbackpacks/feeding_upgrade");

	event.shaped("sophisticatedbackpacks:battery_upgrade", ["GPG", "PCP", "GPG"], {
		G: "immersiveengineering:plate_gold",
		P: "createaddition:copper_spool",
		C: "sophisticatedbackpacks:upgrade_base",
	}).id("setsu:sophisticatedbackpacks/battery_upgrade");

	event.shaped("sophisticatedbackpacks:tank_upgrade", ["P", "C", "P"], {
		P: "create:fluid_tank",
		C: "sophisticatedbackpacks:upgrade_base",
	}).id("setsu:sophisticatedbackpacks/tank_upgrade");

	event.shaped("sophisticatedbackpacks:pickup_upgrade", ["EPE", "SCS", "RRR"], {
		E: "minecraft:ender_pearl",
		P: "minecraft:sticky_piston",
		S: "#forge:string",
		C: "sophisticatedbackpacks:upgrade_base",
		R: "minecraft:redstone",
	}).id("setsu:sophisticatedbackpacks/pickup_upgrade");

	/**
	 * Stack Upgrades
	 */
	addDamageShaped(event, "sophisticatedbackpacks:stack_upgrade_starter_tier", ["SPS", "VCN", "SPS"], {
		S: "#forge:string",
		P: "tfc:metal/sheet/copper",
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		C: "sophisticatedbackpacks:upgrade_base",
	});

	addDamageShaped(event, "sophisticatedbackpacks:stack_upgrade_tier_1", ["VPN", "SCS", " P "], {
		S: "#forge:string",
		P: "tfc:metal/sheet/wrought_iron",
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		C: "sophisticatedbackpacks:stack_upgrade_starter_tier",
	});

	addDamageShaped(event, "sophisticatedbackpacks:stack_upgrade_tier_2", ["VPN", "SCS", " P "], {
		S: "#forge:string",
		P: "tfc:metal/sheet/rose_gold",
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		C: "sophisticatedbackpacks:stack_upgrade_tier_1",
	});

	addDamageShaped(event, "sophisticatedbackpacks:stack_upgrade_tier_3", ["VPN", "SCS", " P "], {
		S: "#forge:string",
		P: 'potionsmaster:calcinateddiamond_powder',
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		C: "sophisticatedbackpacks:stack_upgrade_tier_2",
	});

	addDamageShaped(event, "sophisticatedbackpacks:stack_upgrade_tier_4", ["VPN", "SCS", " P "], {
		S: "#forge:string",
		P: "kubejs:metal/ingot/purple_steel",
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		C: "sophisticatedbackpacks:stack_upgrade_tier_3",
	});

	/*	
		// Tiers /////////////////////////////////////
		
		
		event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_2" });
		event.shaped("sophisticatedbackpacks:stack_upgrade_tier_2", ["EPE", "TCT", "LDL"], {
				E: "#forge:electron_tube",
				T: "sewingkit:leather_strip",
				P: "immersiveengineering:plate_gold",
				D: "tfc:metal/sheet/bronze",
				L: "create:cogwheel",
				C: "sophisticatedbackpacks:stack_upgrade_tier_1",
			}
		)
		
		event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_3" });
		event.shaped(
			"sophisticatedbackpacks:stack_upgrade_tier_3",
			["EPE", "TCT", "LDL"],
			{
				E: "#forge:electron_tube",
				T: "sewingkit:leather_strip",
				P: "immersiveengineering:plate_iron",
				D: "tfc:metal/sheet/blue_steel",
				L: "create:large_cogwheel",
				C: "sophisticatedbackpacks:stack_upgrade_tier_2",
			}
		).id("setsu:sophisticatedbackpacks_upgrades/stack_upgrade_3");
		
		event.remove({ output: "sophisticatedbackpacks:stack_upgrade_tier_4" });
		event.shaped(
			"sophisticatedbackpacks:stack_upgrade_tier_4",
			["PPP", "PCP", "LDL"],
			{
				P: "immersiveengineering:component_electronic_adv",
				L: "#forge:leather",
				D: "enderstorage:ender_chest",
				C: "sophisticatedbackpacks:stack_upgrade_tier_3",
			}
		).id("setsu:sophisticatedbackpacks_upgrades/stack_upgrade_4");
			
		*/
}
