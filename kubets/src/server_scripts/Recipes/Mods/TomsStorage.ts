// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesTomsStorage(event: $RecipesEventJS) {
	// Key Items ///////////////////////////////////////////

	event.remove({ output: "toms_storage:ts.inventory_connector" });
	event
		.shaped("toms_storage:ts.inventory_connector", ["BNB", "CTC", "BEB"], {
			B: "create:brass_sheet",
			N: "toms_storage:ts.inventory_cable_connector",
			C: "kubejs:bismuth_bronze_nugget",
			T: "toms_storage:ts.trim",
			E: "minecraft:ender_pearl",
		})
		.id("setsu:toms_storage/ts.inventory_connector");

	event.remove({ output: "toms_storage:ts.storage_terminal" });
	event
		.shaped("toms_storage:ts.storage_terminal", ["LPL", "SDS", "LBL"], {
			L: "#setsu:treated_lumber",
			P: "toms_storage:ts.inventory_cable_connector",
			S: "toms_storage:ts.trim",
			D: "create:display_board",
			B: "create:stock_ticker",
		})
		.id("setsu:toms_storage/ts.storage_terminal");

	event.remove({ output: "toms_storage:ts.crafting_terminal" });
	event
		.shaped("toms_storage:ts.crafting_terminal", ["HBH", "HTH", "HCH"], {
			H: "create:mechanical_crafter",
			B: "immersiveengineering:component_electronic",
			T: "toms_storage:ts.storage_terminal",
			C: "create:linked_controller",
		})
		.id("setsu:toms_storage/ts.crafting_terminal");

	event.remove({ id: "toms_storage:trim" });
	event
		.shaped("3x toms_storage:ts.trim", ["NLN", "LCL", "NLN"], {
			L: "#setsu:treated_lumber",
			C: "#forge:chests/wooden",
			N: "create:brass_nugget",
		})
		.id("setsu:toms_storage/ts.trim");

	// "Wires" /////////////////////////////////////////////

	event.remove({ output: "toms_storage:ts.inventory_cable_connector" });
	event
		.shaped(
			"toms_storage:ts.inventory_cable_connector",
			["  L", "CPB", "  L"],
			{
				L: "#setsu:treated_lumber",
				C: "toms_storage:ts.inventory_cable",
				P: "minecraft:comparator",
				B: "create:brass_sheet",
			}
		)
		.id("setsu:toms_storage/ts.inventory_cable_connector");

	event.remove({ output: "toms_storage:ts.inventory_cable" });
	event
		.shaped("6x toms_storage:ts.inventory_cable", ["ACA"], {
			A: "create:shaft",
			C: "#forge:chests/wooden",
		})
		.id("setsu:toms_storage/ts.inventory_cable");

	// Misc ////////////////////////////////////////////////

	event.remove({ output: "toms_storage:ts.paint_kit" });
	event
		.shaped("toms_storage:ts.paint_kit", ["RGB", "AXL", "W  "], {
			X: "create:super_glue",
			L: "tfc:wool_cloth",
			R: "minecraft:red_dye",
			G: "minecraft:green_dye",
			B: "minecraft:blue_dye",
			A: "minecraft:black_dye",
			W: "minecraft:white_dye",
		})
		.id("setsu:toms_storage/ts.paint_kit");

	event.remove({ output: "toms_storage:ts.wireless_terminal" });
	event
		.shaped("toms_storage:ts.wireless_terminal", ["LCL", "SGP", "LBL"], {
			L: "#setsu:treated_lumber",
			C: "create:linked_controller",
			S: "minecraft:spyglass",
			G: "#forge:glass_panes",
			P: "minecraft:comparator",
			B: "immersiveengineering:component_electronic",
		})
		.id("setsu:toms_storage/ts.wireless_terminal");

	event.remove({ output: "toms_storage:ts.adv_wireless_terminal" });
	event
		.shaped("toms_storage:ts.adv_wireless_terminal", ["TP", "BR"], {
			T: "toms_storage:ts.wireless_terminal",
			P: "createteleporters:tp_link",
			B: "immersiveengineering:component_electronic_adv",
			R: "rosia:purple_steel_sheet",
		})
		.id("setsu:toms_storage/ts.adv_wireless_terminal");
}
