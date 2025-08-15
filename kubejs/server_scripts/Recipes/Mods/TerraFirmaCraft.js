// priority: 198

function setRecipesTerraFirmaCraft(event) {

	event.shapeless("9x kubejs:bismuth_bronze_nugget", [
		"tfc:metal/ingot/bismuth_bronze"
	]).id("setsu:tfc/bismuth_bronze_nugget")

	event.shapeless(
		"tfc:metal/ingot/bismuth_bronze",
		["9x kubejs:bismuth_bronze_nugget"]
	).id("setsu:tfc/bismuth_bronze_from_nugget")

	event.replaceInput({ id: "tfc:crafting/barrel_rack" }, "minecraft:scaffolding", "tfc:wattle");
	event.replaceOutput({ id: "minecraft:iron_ingot_from_iron_block" }, "tfc:metal/ingot/cast_iron", "9x tfc:metal/ingot/wrought_iron");

	event.shapeless(Item.of("patchouli:guide_book", '{"patchouli:book":"tfc:field_guide"}'),
		["minecraft:book", "#tfc:rock_knapping", "#forge:rods/wooden"]
	).id("setsu:tfc/field_guide");

	event.shapeless(`9x minecraft:charcoal`, [
		"#forge:storage_blocks/charcoal"
	]).id(`kubejs:charcoal_block_revert`)

	event.shaped("firmalife:drying_mat", ["LLL", "LLL", "LLL"], {
		L: "#minecraft:leaves",
	}).id("setsu:tfc/drying_mat_alt");

	event.shaped("tfc:rotten_compost", ["RRR", "RCR", "RRR"], {
		C: "tfc:soot",
		R: "minecraft:rotten_flesh",
	}).id("setsu:tfc/rotten_compost_alt");

	event.shapeless("minecraft:chest", [
		'#forge:chests/wooden', 'kubejs:bismuth_bronze_nugget'
	]).id("setsu:tfc/vanilla_chest");

	event.shaped("minecraft:cobbled_deepslate", ["YYY", "YYY", "YYY"], {
		Y: "#forge:cobblestone",
	}).id("setsu:tfc/cobbled_deepslate_alt");

	event.remove({ output: "minecraft:furnace" });
	event.shaped("minecraft:furnace", ["YYY", "YCY", "LSL"], {
		Y: "#forge:cobblestone",
		S: "#tfc:rock/smooth",
		L: "tfc:fire_clay",
		C: "minecraft:charcoal",
	}).id("setsu:tfc/furnace_alternative");

	event.remove({ output: "minecraft:blast_furnace" });
	event.shaped("minecraft:blast_furnace", ["DID", "DFD", "SSS"], {
		F: "minecraft:furnace",
		I: "immersiveengineering:plate_iron",
		D: "minecraft:cobbled_deepslate",
		S: "#tfc:rock/smooth",
	}).id("setsu:tfc/blast_furnace_alt");

	event.remove({ id: "minecraft:lodestone" });
	event.shaped("minecraft:lodestone", ["BBB", "BAB", "BBB"], {
		A: "minecraft:netherite_ingot",
		B: "#tfc:rock/bricks"
	}).id("setsu:tfc/lodestone");

	event.shapeless("tfc:empty_jar", "minecraft:glass_bottle").id("setsu:tfc/jar_from_bottle");
	event.shapeless("minecraft:glass_bottle", "tfc:empty_jar").id("setsu:tfc/bottle_from_jar");

	event.shapeless("minecraft:honey_bottle", [
		"minecraft:glass_bottle",
		"firmalife:raw_honey",
	]).id("setsu:tfc/honey_bottle");

	event.custom({
		type: "tfc:knapping",
		knapping_type: "tfc:rock",
		outside_slot_required: false,
		pattern: ["  XX ", " XXXX", "XXXXX", "XXXXX", " XXX "],
		ingredient: { tag: "tfc:igneous_intrusive_rock" },
		result: { item: "minecraft:flint" }
	}).id("setsu:tfc/flint_knap");


	/**
	 * Seed From Crops
	*/

	ItemCol.tfcCrops.forEach(crop => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.recipes.minecraft.crafting_shapeless(`tfc:seeds/${crop}`, [
				`4x tfc:food/${crop}`,
				"#tfc:knives"
			])
		).id(`setsu:custom/${crop}_seed`);
	});
	["pumpkin", "melon", "jute", "papyrus"].forEach(plant => {
		event.recipes.tfc.damage_inputs_shapeless_crafting(
			event.recipes.minecraft.crafting_shapeless(`tfc:seeds/${plant}`, [
				`4x tfc:${plant}`,
				"#tfc:knives",
			])
		).id(`setsu:custom/${plant}_seed`);
	});

	ItemCol.tfcDirtTypes.forEach((dirtType) => {
		tfcBucketRecipes(
			event,
			`tfc:mud/${dirtType}`,
			1,
			"minecraft:water",
			100,
			{
				item: `tfc:dirt/${dirtType}`
			}
		)
	});

	event.remove({ id: "minecraft:lapis_block" });
	event.shapeless("9x tfc:gem/lapis_lazuli", [
		"#forge:storage_blocks/lapis"
	]).id("setsu:tfc/lapis_block_revert");

	event.replaceInput({ output: "minecraft:dried_kelp_block" }, `minecraft:dried_kelp`, `tfc:food/dried_kelp`);

	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.remove({ output: `minecraft:${wood}_boat` });
		event.remove({ output: `minecraft:${wood}_chest_boat` });
	})

	event.remove({ output: "beneath:wood/boat/crimson" });
	event.remove({ output: "beneath:wood/boat/warped" });

	event.remove({ id: "minecraft:bundle" });
	addDamageShapeless(event, "minecraft:bundle", ["#forge:string", "#tfc:leather_knapping", "tfc:bone_needle"]);

	/**
	 * Moss
	 */
	addDamageShapeless(event, "tfc:plant/moss", ["#tfc:mossy_loose", "#tfc:axes"]);

	/**
	 * Mechanical Items
	 */
	event.remove({ id: "tfc:crafting/rustic_windmill_blade" });
	event.shaped("tfc:rustic_windmill_blade", [" B ", "WWB", " W "], {
		B: "tfc:burlap_cloth",
		W: "tfc:stick_bunch"
	}).id("setsu:tfc/rustic_windmill_blade");

	event.remove({ id: "tfc:crafting/lattice_windmill_blade" });
	event.shaped("tfc:lattice_windmill_blade", ["GSS", "SSS", "WWW"], {
		G: "tfc:glue",
		S: "tfc:stick_bundle",
		W: "#tfc:lumber"
	}).id("setsu:tfc/lattice_windmill_blade");

	ItemCol.tfcWoodTypesWithNether.forEach(woodType => {
		if (woodType == "crimson" || woodType == "warped") {
			event.remove({ id: `beneath:crafting/wood/${woodType}_water_wheel` });
			event.shaped(`beneath:wood/water_wheel/${woodType}`, ["LWL", "WSW", "LWL"], {
				L: "#forge:treated_lumber",
				S: `beneath:wood/axle/${woodType}`,
				W: `beneath:wood/planks/${woodType}`
			}).id(`setsu:tfc/wood/water_wheel/${woodType}`);

			event.remove({ id: `beneath:crafting/wood/${woodType}_gear_box` });
			event.shaped(`beneath:wood/gear_box/${woodType}`, ["ALA", "LXL", "ALA"], {
				A: `beneath:wood/axle/${woodType}`,
				L: `beneath:wood/lumber/${woodType}`,
				X: `beneath:wood/encased_axle/${woodType}`
			}).id(`setsu:tfc/wood/gear_box/${woodType}`);
		}
		else {
			event.remove({ id: `tfc:crafting/wood/${woodType}_water_wheel` });
			event.shaped(`tfc:wood/water_wheel/${woodType}`, ["LWL", "WSW", "LWL"], {
				L: "#forge:treated_lumber",
				S: `tfc:wood/axle/${woodType}`,
				W: `tfc:wood/planks/${woodType}`
			}).id(`setsu:tfc/wood/water_wheel/${woodType}`);

			event.remove({ id: `tfc:crafting/wood/${woodType}_gear_box` });
			event.shaped(`tfc:wood/gear_box/${woodType}`, ["ALA", "LXL", "ALA"], {
				A: `tfc:wood/axle/${woodType}`,
				L: `tfc:wood/lumber/${woodType}`,
				X: `tfc:wood/encased_axle/${woodType}`
			}).id(`setsu:tfc/wood/gear_box/${woodType}`);
		}
	})

	event.shaped("tfc:hand_wheel", ["SSS", "SAS", "SSS"], {
		S: "minecraft:stick",
		A: "#tfc:axles",
	}).id("setsu:tfc/hand_wheel");
	event.shaped("tfc:hand_wheel_base", ["SSS", "SAS", "SSS"], {
		S: "#tfc:rock_knapping",
		A: "#tfc:axles",
	}).id("setsu:tfc/hand_wheel_base");

	event.remove({ id: "minecraft:brick" });
}
