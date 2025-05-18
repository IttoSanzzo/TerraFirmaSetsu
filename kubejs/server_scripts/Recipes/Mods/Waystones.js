// priority: 198

function setRecipesWaystones(event) {
	event.replaceInput({ mod: "waystones" }, "minecraft:obsidian", "botania:glimmering_dreamwood");
	event.replaceInput({ mod: "waystones" }, "minecraft:flint", "waystones:portstone");
	event.replaceInput({ id: "waystones:bound_scroll" }, "minecraft:ender_pearl", "waystones:warp_stone");
	event.replaceInput({ id: "waystones:warp_scroll" }, "minecraft:ender_pearl", "waystones:warp_stone");
	event.replaceInput({ mod: "waystones" }, "minecraft:ender_pearl", "malum:warp_flux");
}
