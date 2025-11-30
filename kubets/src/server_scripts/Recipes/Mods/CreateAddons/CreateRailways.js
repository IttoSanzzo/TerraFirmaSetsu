// priority: 198

function setRecipesCreateRailways(event) {
	event.replaceInput({ mod: "railways" }, "minecraft:campfire", "#tfc:firepit_fuel");
	event.shaped("railways:slashed_locometal", [" N ", "NIN", " N "], {
		N: "minecraft:iron_nugget",
		I: "create:industrial_iron_block"
	});

	/**
	 * Rails
	 */


	function newTrackNormal(wood) {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: { item: `tfc:wood/planks/${wood}_slab` },
			loops: 1,
			results: [{ item: `railways:track_tfc_${wood}`, count: 4 }],
			sequence: [
				{ type: "create:deploying", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}` }, [{ tag: "forge:rods/wrought_iron" }, { tag: "forge:rods/zinc" }]], results: [{ item: `railways:track_incomplete_tfc_${wood}` }] },
				{ type: "create:deploying", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}` }, [{ tag: "forge:rods/wrought_iron" }, { tag: "forge:rods/zinc" }]], results: [{ item: `railways:track_incomplete_tfc_${wood}` }] },
				{ type: "create:pressing", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}` }], results: [{ item: `railways:track_incomplete_tfc_${wood}` }] }],
			transitionalItem: { item: `railways:track_incomplete_tfc_${wood}` }
		}
		).id(`setsu:railways/track_tfc_${wood}`);
	}
	function newTrackNarrow(wood) {
		event.custom({
			type: "create:sequenced_assembly",
			ingredient: { item: `tfc:wood/planks/${wood}_slab` },
			loops: 1,
			results: [{ item: `railways:track_tfc_${wood}_narrow`, count: 4 }],
			sequence: [
				{ type: "create:cutting", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }], results: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }] },
				{ type: "create:deploying", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }, [{ tag: "forge:rods/wrought_iron" }, { tag: "forge:rods/zinc" }]], results: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }] },
				{ type: "create:pressing", ingredients: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }], results: [{ item: `railways:track_incomplete_tfc_${wood}_narrow` }] }
			], transitionalItem: { item: `railways:track_incomplete_tfc_${wood}_narrow` }
		}).id(`setsu:railways/track_tfc_${wood}_narrow`);
	}

	ItemCol.tfcWoodTypes.forEach((wood) => {
		event.remove({ id: `railways:sequenced_assembly/track_tfc_${wood}` });
		newTrackNormal(wood);
		event.remove({ id: `railways:sequenced_assembly/track_tfc_${wood}_narrow` });
		newTrackNarrow(wood);
	})
}
