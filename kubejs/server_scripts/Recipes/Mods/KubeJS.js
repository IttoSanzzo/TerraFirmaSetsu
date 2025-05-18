// priority: 198

function setRecipesKubeJS(event) {

	event.recipes.tfc.heating("kubejs:metal/ingot/high_carbon_purple_steel", 1549).resultFluid(
		Fluid.of("kubejs:metal/high_carbon_purple_steel", 100)
	).id("setsu:metal/high_carbon_purple_steel_fluid/from_ingot");
	event.recipes.tfc.heating("kubejs:metal/ingot/purple_steel", 1549).resultFluid(
		Fluid.of("kubejs:metal/purple_steel", 100)
	).id("setsu:metal/purple_steel_fluid/from_ingot");
	event.recipes.tfc.heating("kubejs:metal/double_ingot/purple_steel", 1549).resultFluid(
		Fluid.of("kubejs:metal/purple_steel", 200)
	).id("setsu:metal/purple_steel_fluid/from_double_ingot");

	event.recipes.tfc.welding("kubejs:metal/double_ingot/purple_steel", "kubejs:metal/ingot/purple_steel", "kubejs:metal/ingot/purple_steel", 6).id("setsu:metal/double_ingot/purple_steel");

	event.recipes.tfc.casting("kubejs:metal/ingot/high_carbon_purple_steel", "tfc:ceramic/ingot_mold", Fluid.of("kubejs:metal/high_carbon_purple_steel", 100), 0.1).id("setsu:casting/high_carbon_purple_steel_ingot");
	event.recipes.tfc.casting("kubejs:metal/ingot/high_carbon_purple_steel", "tfc:ceramic/fire_ingot_mold", Fluid.of("kubejs:metal/high_carbon_purple_steel", 100), 0.0).id("setsu:casting/high_carbon_purple_steel_fire_ingot");
	event.recipes.tfc.casting("kubejs:metal/ingot/purple_steel", "tfc:ceramic/ingot_mold", Fluid.of("kubejs:metal/purple_steel", 100), 0.1).id("setsu:casting/purple_steel_ingot");
	event.recipes.tfc.casting("kubejs:metal/ingot/purple_steel", "tfc:ceramic/fire_ingot_mold", Fluid.of("kubejs:metal/purple_steel", 100), 0.0).id("setsu:casting/purple_steel_fire_ingot");

	event.recipes.tfc.alloy("kubejs:metal/high_carbon_purple_steel_metal", [
		TFC.alloyPart("tfc:red_steel", 0.5, 0.5),
		TFC.alloyPart("tfc:blue_steel", 0.5, 0.5)
	]).id("setsu:alloy/high_carbon_purple_steel");

	event.recipes.tfc.blast_furnace(Fluid.of("kubejs:metal/purple_steel", 1), "tfc:powder/graphite", Fluid.of("kubejs:metal/high_carbon_purple_steel", 1)).id("setsu:blast_furnace/purple_steel");

	event.shaped("minecraft:bucket", ["P P", " P "], {
		P: "kubejs:metal/ingot/purple_steel"
	}).id("setsu:bucket");
}
