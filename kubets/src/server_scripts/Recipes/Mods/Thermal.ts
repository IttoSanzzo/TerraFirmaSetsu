// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { ItemCol } from "../../HelpCollections/ItemCollections";

export function setRecipesThermal(event: $RecipesEventJS) {
	function addSawMill(
		output: Special.Item | OmniString,
		count: number,
		ingredient: Special.Item | OmniString
	) {
		event
			.custom({
				type: "thermal:sawmill",
				ingredient: {
					item: ingredient,
				},
				result: [
					{
						item: output,
						count: count,
					},
					{
						item: "thermal:sawdust",
						chance: 1.25,
					},
				],
				energy: 1000,
				experience: 0.15,
			})
			.id(
				`setsu:thermal/sawmill/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}
	function addPress(
		output: Special.Item | OmniString,
		count: number,
		ingredient: Special.Item | OmniString,
		ingredientCount: number
	) {
		event
			.custom({
				type: "thermal:press",
				result: [
					{
						item: output,
						count: count,
					},
				],
				ingredient: {
					tag: ingredient,
					count: ingredientCount,
				},
			})
			.id(
				`setsu:thermal/press/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}
	function addCrucible(
		output: Special.Fluid | OmniString,
		count: number,
		ingredient: Special.ItemTag | OmniString
	) {
		event
			.custom({
				type: "thermal:crucible",
				result: [
					{
						fluid: output,
						amount: count,
					},
				],
				ingredient: {
					tag: ingredient,
				},
				energy: 100000,
			})
			.id(
				`setsu:thermal/crucible/${ingredient.replace(":", ".").replace("/", ".")}/to/${output.replace(":", ".").replace("/", ".")}`
			);
	}
	function addInsolator(
		wood: string,
		ingredient: Special.Item | OmniString,
		chance: number
	) {
		event
			.custom({
				type: "thermal:insolator",
				result: [
					{
						item: `tfc:wood/log/${wood}`,
						chance: chance,
					},
					{
						item: ingredient,
						chance: 1.1,
					},
					{
						item: `tfc:wood/twig/${wood}`,
						chance: 2.0,
					},
				],
				ingredient: {
					item: ingredient,
				},
				energy_mod: 3.0,
				water_mod: 3.0,
			})
			.id(
				`setsu:thermal/insolator/${wood}/from/${ingredient.replace(":", ".")}`
			);
	}

	ItemCol.tfcWoodTypes.forEach((log) => {
		addSawMill(`tfc:wood/stripped_log/${log}`, 1, `tfc:wood/log/${log}`);
		addSawMill(`tfc:wood/lumber/${log}`, 10, `tfc:wood/stripped_log/${log}`);
		addSawMill(`tfc:wood/stripped_wood/${log}`, 1, `tfc:wood/wood/${log}`);
		addSawMill(`tfc:wood/lumber/${log}`, 10, `tfc:wood/stripped_wood/${log}`);
		addSawMill(`tfc:wood/lumber/${log}`, 4, `tfc:wood/planks/${log}`);
		addInsolator(log, `tfc:wood/sapling/${log}`, 4.0);
		addInsolator(log, `dttfc:${log}_seed`, 3.0);
	});
	const ie_Metals = ["aluminum", "uranium", "steel"];
	ie_Metals.forEach((ingot) => {
		addPress(
			`immersiveengineering:plate_${ingot}`,
			1,
			`forge:ingots/${ingot}`,
			1
		);
	});
	addPress("create:brass_sheet", 1, "forge:ingots/brass", 1);
	addPress("createaddition:zinc_sheet", 1, "forge:ingots/zinc", 1);

	addCrucible("minecraft:lava", 1000, "forge:magma");

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/steel",
		"#forge:sheets/steel"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/bronze",
		"#forge:sheets/bronze"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/iron",
		"#forge:sheets/wrought_iron"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/copper",
		"#forge:sheets/copper"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/nickel",
		"#forge:sheets/nickel"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/tin",
		"#forge:sheets/tin"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/gold",
		"#forge:sheets/gold"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"thermal:tin_gear",
		"thermal:lead_gear"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/silver",
		"#forge:sheets/sterling_silver"
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"#forge:ingots/bronze",
		"#forge:sheets/bronze"
	);

	const gearIngots = ["copper", "tin", "nickel", "bronze", "gold"];
	for (const ingot of gearIngots) {
		event.replaceInput(
			{ type: "minecraft:crafting_shaped", id: `thermal:parts/${ingot}_gear` },
			`#forge:sheets/${ingot}`,
			`#forge:ingots/${ingot}`
		);
	}

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", id: `thermal:parts/iron_gear` },
		`#forge:sheets/wrought_iron`,
		`#forge:ingots/wrought_iron`
	);
	event.replaceInput(
		{ type: "minecraft:crafting_shaped", id: `thermal:parts/silver_gear` },
		`#forge:sheets/sterling_silver`,
		`#forge:ingots/sterling_silver`
	);

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"minecraft:blast_furnace",
		"tfc:crucible"
	);

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"minecraft:dirt",
		"#tfc:dirt"
	);

	event.replaceInput(
		{ type: "minecraft:crafting_shaped", mod: "thermal" },
		"thermal:cured_rubber",
		"immersiveengineering:plate_duroplast"
	);

	event.remove({ id: "thermal:energy_duct_4" });
	event
		.shaped("3x thermal:energy_duct", ["LOL", "BRB", "LOL"], {
			B: "#forge:sheets/bronze",
			R: "minecraft:redstone_block",
			O: "#forge:glass_panes",
			L: "#forge:plates/lead",
		})
		.id("setsu:thermal/energy_duct");
	event.remove({ id: "thermal:fluid_duct_4" });
	event
		.shaped("3x thermal:fluid_duct", ["LBL", "B B", "LBL"], {
			B: "#forge:sheets/bronze",
			L: "#forge:plates/lead",
		})
		.id("setsu:thermal/fluid_duct");
	event.remove({ id: "thermal:fluid_duct_windowed_4" });
	event
		.shaped("3x thermal:fluid_duct_windowed", ["LBL", "BWB", "LBL"], {
			B: "#forge:sheets/bronze",
			W: "#forge:glass_panes",
			L: "#forge:plates/lead",
		})
		.id("setsu:thermal/energy_duct_windowed");

	event.remove({ output: "thermal:tin_block" });
	event
		.shapeless("thermal:tin_block", ["9x tfc:metal/ingot/tin"])
		.id("setsu:thermal/tin_block");
	event
		.shapeless("9x tfc:metal/ingot/tin", ["thermal:tin_block"])
		.id("setsu:thermal/tin_block_revert");

	event.remove({ output: "thermal:bronze_block" });
	event
		.shapeless("thermal:bronze_block", ["9x tfc:metal/ingot/bronze"])
		.id("setsu:thermal/bronze_block");
	event
		.shapeless("9x tfc:metal/ingot/bronze", ["thermal:bronze_block"])
		.id("setsu:thermal/bronze_block_revert");

	event
		.shapeless("9x thermal:invar_ingot", ["#forge:storage_blocks/invar"])
		.id("setsu:thermal/invar_block_revert");

	event
		.shapeless("9x thermal:signalum_ingot", ["#forge:storage_blocks/signalum"])
		.id("setsu:thermal/signalum_block_revert");

	event
		.shapeless("9x thermal:lumium_ingot", ["#forge:storage_blocks/lumium"])
		.id("setsu:thermal/lumium_block_revert");

	event
		.shapeless("9x thermal:enderium_ingot", ["#forge:storage_blocks/enderium"])
		.id("setsu:thermal/enderium_block_revert");

	event
		.shapeless("9x thermal:apatite", ["#forge:storage_blocks/apatite"])
		.id("setsu:thermal/apatite_block_revert");

	event
		.shapeless("9x tfc:ore/cinnabar", ["#forge:storage_blocks/cinnabar"])
		.id("setsu:thermal/cinnabar_block_revert");

	event
		.shapeless("9x thermal:niter", ["#forge:storage_blocks/niter"])
		.id("setsu:thermal/niter_block_revert");

	event
		.shapeless("9x tfc:ore/bituminous_coal", ["#forge:storage_blocks/bitumen"])
		.id("setsu:thermal/bitumen_block_revert");

	event
		.shapeless("9x thermal:tar", ["#forge:storage_blocks/tar"])
		.id("setsu:thermal/tar_block_revert");

	event
		.shapeless("9x minecraft:gunpowder", ["thermal:gunpowder_block"])
		.id("setsu:thermal/gunpowder_block_revert");

	event
		.shapeless("thermal:ruby_block", ["9x tfc:gem/ruby"])
		.id("setsu:thermal/ruby_block");
	event
		.shapeless("9x tfc:gem/ruby", ["thermal:ruby_block"])
		.id("setsu:thermal/ruby_block_revert");

	event
		.shapeless("thermal:sapphire_block", ["9x tfc:gem/sapphire"])
		.id("setsu:thermal/sapphire_block");
	event
		.shapeless("9x tfc:gem/sapphire", ["thermal:sapphire_block"])
		.id("setsu:thermal/sapphire_block_revert");

	event.replaceOutput(
		{ mod: "thermal" },
		"minecraft:leather",
		"tfc:large_raw_hide"
	);

	event.remove({ output: "thermal:rubberwood_boat" });
	event.remove({ output: "thermal:rubberwood_chest_boat" });

	event.remove({ id: "thermal:tools/satchel" });
	event.shaped("thermal:satchel", ["SLN", "EGE", "LEL"], {
		L: "#forge:string",
		S: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		G: "create:zinc_nugget",
		E: "#tfc:leather_knapping",
	});

	event.remove({
		id: "thermal:machines/furnace/furnace_rotten_flesh_to_leather",
	});
}
