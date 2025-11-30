//priority: 0

import {
	setJeiAccommodation,
	setJeiAdAstra,
	setJeiAstikorCarts,
	setJeiBigReactors,
	setJeiBloodMagic,
	setJeiConstructionWand,
	setJeiCreate,
	setJeiFarmersdelight,
	setJeiFirmaciv,
	setJeiFunctionalStorage,
	setJeiHexerei,
	setJeiIceAndFire,
	setJeiImmersiveEngineering,
	setJeiMcwFurnitures,
	setJeiMcwRoofs,
	setJeiMinecraft,
	setJeiPotionMaster,
	setJeiQuark,
	setJeiSacksAndSuch,
	setJeiSimpleWeapons,
	setJeiSophisticatedBackpacks,
	setJeiTerraFirmaCraft,
	setJeiThermal,
	setJeiTrottingWagons,
} from "./Mods";

console.log("Starting Index.js Client Scripts!");
JEIEvents.hideItems((event) => {
	// JEI Hides
	setJeiMinecraft(event);
	setJeiTerraFirmaCraft(event);
	setJeiThermal(event);
	setJeiCreate(event);
	setJeiImmersiveEngineering(event);
	setJeiBloodMagic(event);
	setJeiPotionMaster(event);
	setJeiBigReactors(event);
	setJeiAccommodation(event);
	setJeiMcwFurnitures(event);
	setJeiMcwRoofs(event);
	setJeiFarmersdelight(event);
	setJeiFunctionalStorage(event);
	setJeiAstikorCarts(event);
	setJeiQuark(event);
	setJeiFirmaciv(event);
	setJeiConstructionWand(event);
	setJeiSimpleWeapons(event);
	setJeiSophisticatedBackpacks(event);
	setJeiAdAstra(event);
	setJeiHexerei(event);
	setJeiIceAndFire(event);
	setJeiSacksAndSuch(event);
	setJeiTrottingWagons(event);
});

JEIEvents.addItems((event) => {
	event.add(
		Item.of("patchouli:guide_book", '{"patchouli:book":"tfc:field_guide"}')
	);
	event.add(Item.of("minecraft:bundle"));
	event.add("sophisticatedbackpacks:backpack");

	/**
	 * Immersive Engineering
	 */

	event.add("immersiveengineering:arc_furnace");
	event.add("immersiveengineering:advanced_blast_furnace");
	event.add("immersiveengineering:blast_furnace");
	event.add("immersiveengineering:allow_smelter");
	event.add("immersiveengineering:assembler");
	event.add("immersiveengineering:auto_workbench");
	event.add("immersiveengineering:coke_oven");
	event.add("immersiveengineering:silo");
	event.add("immersiveengineering:tank");
	event.add("immersiveengineering:diesel_generator");
	event.add("immersiveengineering:lightning_rod");
	event.add("immersiveengineering:metal_press");
	event.add("immersiveengineering:crusher");
	event.add("immersiveengineering:sawmill");
	event.add("immersiveengineering:assembler");
	event.add("immersiveengineering:squeezer");
	event.add("immersiveengineering:fermenter");
	event.add("immersiveengineering:mixer");
	event.add("immersiveengineering:refinery");
	event.add("immersiveengineering:bottling_machine");
	event.add("immersiveengineering:excavator");
	event.add("advancedtfctech:power_loom");
	event.add("advancedtfctech:thresher");
	event.add("advancedtfctech:grist_mill");
	event.add("advancedtfctech:fleshing_machine");
});

console.log("Finalized Index.js Client Scripts!");
