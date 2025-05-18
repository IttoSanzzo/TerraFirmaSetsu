// priority: 198

function setRecipesChipped(event) {
	event.remove({ id: "chipped:benches/loom_table" })
	event.shaped("chipped:loom_table", ["LLL", "WCW", "WOW"], {
		L: "#tfc:looms",
		W: "#tfc:firepit_logs",
		C: "minecraft:crafting_table",
		O: "#minecraft:wool"
	}).id("setsu:chipped/loom_table");
}
