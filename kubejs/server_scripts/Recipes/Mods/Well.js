// priority: 198

function setRecipesWell(event) {
	event.remove({ id: "well:well" })
	event.shaped("well:well", ["BBB", "SLS", "TWT"], {
		B: "minecraft:brick",
		S: "#forge:rods/wooden",
		L: "supplementaries:rope",
		T: "#tfc:rock/bricks",
		W: "tfc:wooden_bucket"
	}).id("setsu:well/well");
}
