// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped } from "../_helperFunctions";

export function setRecipesSophisticatedBackpacks(event: $RecipesEventJS) {
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
		"stack_upgrade_tier_4",
	];
	spAllRemoves.forEach((item) => {
		event.remove({ id: `sophisticatedbackpacks:${item}` });
	});

	/**
	 * Backpacks
	 */

	addDamageShaped(
		event,
		"sophisticatedbackpacks:backpack",
		["SLN", "BCB", " Z "],
		{
			S: "#tfc:metal/shearss",
			L: "#forge:string",
			N: "tfc:bone_needle",
			B: "toolbelt:pouch",
			Z: "sophisticatedbackpacks:upgrade_base",
			C: "sns:frame_pack",
		},
	);

	/**
	 * Upgrades
	 */

	addDamageShaped(
		event,
		"sophisticatedbackpacks:upgrade_base",
		["VLN", "LSL", " L "],
		{
			L: "#forge:string",
			V: "#tfc:metal/shearss",
			N: "tfc:bone_needle",
			S: "#tfc:leather_knapping",
		},
	);

	event
		.shaped("sophisticatedbackpacks:magnet_upgrade", [" M ", "MCM", "R R"], {
			M: "#tfc:magnetic_rocks",
			C: "sophisticatedbackpacks:pickup_upgrade",
			R: "#forge:dusts/redstone",
		})
		.id("setsu:sophisticatedbackpacks/magnet_upgrade");
	event
		.shaped(
			"sophisticatedbackpacks:advanced_magnet_upgrade",
			[" M ", "MCM", "R R"],
			{
				M: "#tfc:magnetic_rocks",
				C: "sophisticatedbackpacks:advanced_pickup_upgrade",
				R: "#forge:dusts/redstone",
			},
		)
		.id("setsu:sophisticatedbackpacks/advanced_upgrade");

	event
		.shaped("sophisticatedbackpacks:feeding_upgrade", ["BFB", "OCA", "BRB"], {
			F: "#tfc:foods",
			O: "#tfc:soups",
			A: "#tfc:salads",
			B: "tfc:ceramic/bowl",
			R: "#forge:dusts/redstone",
			C: "sophisticatedbackpacks:upgrade_base",
		})
		.id("setsu:sophisticatedbackpacks/feeding_upgrade");

	event
		.shaped("sophisticatedbackpacks:battery_upgrade", ["GPG", "PCP", "GPG"], {
			G: "immersiveengineering:plate_gold",
			P: "createaddition:copper_spool",
			C: "sophisticatedbackpacks:upgrade_base",
		})
		.id("setsu:sophisticatedbackpacks/battery_upgrade");

	event
		.shaped("sophisticatedbackpacks:tank_upgrade", ["P", "C", "P"], {
			P: "create:fluid_tank",
			C: "sophisticatedbackpacks:upgrade_base",
		})
		.id("setsu:sophisticatedbackpacks/tank_upgrade");

	event
		.shaped("sophisticatedbackpacks:pickup_upgrade", ["EPE", "SCS", "RRR"], {
			E: "minecraft:ender_pearl",
			P: "minecraft:sticky_piston",
			S: "#forge:string",
			C: "sophisticatedbackpacks:upgrade_base",
			R: "minecraft:redstone",
		})
		.id("setsu:sophisticatedbackpacks/pickup_upgrade");

	/**
	 * Stack Upgrades
	 */

	// Removed due to tfcsbu
}
