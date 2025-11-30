// priority: 198

function setRecipesFunctionalStorage(event) {

	ItemCol.allVanillaWoodTypes.forEach((wood) => {
		event.remove({ output: `functionalstorage:${wood}_1` });
		event.remove({ output: `functionalstorage:${wood}_2` });
		event.remove({ output: `functionalstorage:${wood}_4` });
	});

	ItemCol.tfcWoodTypes.forEach((wood) => {
		event.remove({ id: `functional_tfc:crafting/tfc_${wood}_1` });
		event.remove({ id: `functional_tfc:crafting/tfc_${wood}_2` });
		event.remove({ id: `functional_tfc:crafting/tfc_${wood}_4` });
		event.shaped(`functionalstorage:tfc_${wood}_1`, ["SSS", "NCN", "SSS"], {
			N: "kubejs:bismuth_bronze_nugget",
			C: "#balm:wooden_chests",
			S: `tfc:wood/lumber/${wood}`
		}).id(`setsu:functionalstorage/${wood}_1`);
		event.shaped(`functionalstorage:tfc_${wood}_2`, ["SCS", "NSN", "SCS"], {
			N: "kubejs:bismuth_bronze_nugget",
			C: "#balm:wooden_chests",
			S: `tfc:wood/lumber/${wood}`
		}).id(`setsu:functionalstorage/${wood}_2`);
		event.shaped(`functionalstorage:tfc_${wood}_4`, ["CSC", "NSN", "CSC"], {
			N: "kubejs:bismuth_bronze_nugget",
			C: "#balm:wooden_chests",
			S: `tfc:wood/lumber/${wood}`
		}).id(`setsu:functionalstorage/${wood}_4`);
	});

	event.remove({ id: `functionalstorage:framed_2` });
	event.shaped(`functionalstorage:framed_2`, ["NCN", "NNN", "NCN"], {
		N: "kubejs:bismuth_bronze_nugget",
		C: "#balm:wooden_chests"
	}).id(`setsu:functionalstorage/framed_2`);
	event.remove({ id: `functionalstorage:framed_4` });
	event.shaped(`functionalstorage:framed_4`, ["CNC", "NNN", "CNC"], {
		N: "kubejs:bismuth_bronze_nugget",
		C: "#balm:wooden_chests"
	}).id(`setsu:functionalstorage/framed_4`);

	event.remove({ id: `functionalstorage:fluid_1` });
	event.shaped(`functionalstorage:fluid_1`, ["NNN", "NCN", "NNN"], {
		N: "kubejs:bismuth_bronze_nugget",
		C: "minecraft:bucket"
	}).id(`setsu:functionalstorage/fluid_1`);
	event.remove({ id: `functionalstorage:fluid_2` });
	event.shaped(`functionalstorage:fluid_2`, ["NCN", "NNN", "NCN"], {
		N: "kubejs:bismuth_bronze_nugget",
		C: "minecraft:bucket"
	}).id(`setsu:functionalstorage/fluid_2`);
	event.remove({ id: `functionalstorage:fluid_4` });
	event.shaped(`functionalstorage:fluid_4`, ["CNC", "NNN", "CNC"], {
		N: "kubejs:bismuth_bronze_nugget",
		C: "minecraft:bucket"
	}).id(`setsu:functionalstorage/fluid_4`);

	event.replaceInput({ mod: "functionalstorage" }, "minecraft:iron_nugget", "kubejs:bismuth_bronze_nugget")
	event.replaceInput({ id: "functionalstorage:iron_downgrade" }, "tfc:metal/ingot/wrought_iron", "minecraft:iron_nugget")
}
