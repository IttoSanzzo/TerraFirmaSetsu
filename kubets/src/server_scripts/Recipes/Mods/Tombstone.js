// priority: 198

function setRecipesTombstone(event) {
	event.remove({ id: "tombstone:receptacle_of_familiar" })
	event.shaped("tombstone:receptacle_of_familiar", ["TIT", "IDI", "TIT"], {
		T: "minecraft:ghast_tear",
		I: "tfc:metal/ingot/wrought_iron",
		D: "tombstone:impregnated_diamond"
	}).id("setsu:tombstone/receptacle_of_familiar");
}
