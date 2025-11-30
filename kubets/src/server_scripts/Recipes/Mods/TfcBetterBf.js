// priority: 198

function setRecipesTfcBetterBf(event) {
	event.remove({ output: "tfcbetterbf:insulated_fire_bricks" })
	event.shapeless("tfcbetterbf:insulated_fire_bricks", ["1x tfc:fire_bricks", "3x tfc:metal/sheet/wrought_iron"]).id("setsu:tfcbetterbf/insulated_fire_bricks");
}
