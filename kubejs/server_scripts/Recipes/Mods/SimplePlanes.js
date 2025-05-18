// priority: 198

function setRecipesSimplePlanes(event) {
	// 0. Replaces
	event.replaceInput({ id: "simpleplanes:parachute" }, "#minecraft:wool", "#tfc:high_quality_cloth");
	event.replaceInput({ id: "simpleplanes:seats" }, "minecraft:phantom_membrane", "minecraft:leather");
	event.replaceInput({ id: "simpleplanes:seats" }, "#minecraft:planks", "#tfc:lumber");
	event.replaceInput({ id: "simpleplanes:supply_crate" }, "minecraft:barrel", "#tfcbarrels:barrels")
	event.replaceInput({ id: "simpleplanes:charging_station" }, "minecraft:obsidian", 'createaddition:portable_energy_interface')
	event.replaceInput({ id: "simpleplanes:charging_station" }, "minecraft:blaze_rod", "immersiveengineering:wire_copper")

	// 1. Craftings
	event.remove({ id: "simpleplanes:propeller" });
	event.shaped("2x simpleplanes:propeller", [" I ", "IMI", " I "], {
		I: "immersiveengineering:plate_iron",
		M: "rosia:motor"
	}).id("setsu:simpleplanes/propeller_high");
	event.shaped("simpleplanes:propeller", [" I ", "IMI", " I "], {
		I: "setsu:ingot/all_iron",
		M: "rosia:motor"
	}).id("setsu:simpleplanes/propeller_low");

	event.remove({ id: "simpleplanes:plane_workbench" });
	event.shaped("simpleplanes:plane_workbench", ["SIH", "LDL", "IBI"], {
		S: "#tfc:saws",
		I: "setsu:ingot/all_iron",
		H: "#tfc:metal/hammers",
		L: "#tfc:lumber",
		D: "framedblocks:framed_screwdriver",
		B: "#tfc:workbenches"
	}).id("setsu:simpleplanes/plane_workbench");

	event.remove({ id: "simpleplanes:furnace_engine" });
	event.shaped("simpleplanes:furnace_engine", ["ILB", "FSF", "III"], {
		I: "#setsu:ingot/all_iron",
		L: "minecraft:lever",
		B: "#tfcbarrels:barrels",
		F: "framedblocks:framed_bars",
		S: "minecraft:blast_furnace"
	}).id("setsu:simpleplanes/furnace_engine");

	event.remove({ id: "simpleplanes:liquid_engine" });
	event.shaped("simpleplanes:liquid_engine", ["CLT", "PEP", "III"], {
		C: "immersiveengineering:plate_copper",
		L: "minecraft:lever",
		T: "create_sa:small_filling_tank",
		P: "create:fluid_pipe",
		E: "create_sa:steam_engine",
		I: "immersiveengineering:plate_iron"
	}).id("setsu:simpleplanes/liquid_engine");

	event.remove({ id: "simpleplanes:electric_engine" });
	event.shaped("simpleplanes:electric_engine", ["CBC", "EMA", "III"], {
		C: "immersiveengineering:plate_copper",
		B: "immersiveengineering:component_electronic_adv",
		E: "create:electron_tube",
		M: "createaddition:electric_motor",
		A: "createaddition:modular_accumulator",
		I: "immersiveengineering:plate_iron"
	}).id("setsu:simpleplanes/electric_engine");

	event.remove({ id: "simpleplanes:solar_panel" });
	event.shapeless("simpleplanes:solar_panel", ["ad_astra:solar_panel"]);

	event.remove({ id: "simpleplanes:armor" });
	event.shaped("simpleplanes:armor", ["PIP", "IPI"], {
		I: "tfc:metal/ingot/wrought_iron",
		P: "immersiveengineering:plate_iron"
	}).id("setsu:simpleplanes/armor");

	// 2. Smiths
	event.remove({ id: "simpleplanes:wrench" });
	event.recipes.tfc.anvil('simpleplanes:wrench', 'tfc:metal/ingot/wrought_iron', ['hit_last', 'draw_second_last', "draw_third_last"]).tier(3).id("setsu:simpleplanes/wrench");
}
