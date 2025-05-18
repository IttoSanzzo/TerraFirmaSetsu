// priority: 198

function setRecipesFirmaciv(event) {
	event.remove({ id: "alekiships:crafting/cannon" })

	event.remove({ id: "alekiships:crafting/oarlock" })
	event.remove({ id: "alekiships:crafting/cleat" })
	event.remove({ id: "alekiships:crafting/anchor" })

	event.replaceInput({ id: "alekiships:crafting/cannonball" }, "minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron");
}
