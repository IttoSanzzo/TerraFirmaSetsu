// priority: 198

function setArtisanal(event) {
	event.remove({ id: "create:mechanical_crafting/unfired_fire_brick" });
	event.remove({ id: "artisanal:crafting/ceramic/unfired_brick" });
	addDamageShapeless(event, `2x tfc:ceramic/unfired_brick`, ["#artisanal:brick_molds", "3x minecraft:clay_ball"]);
	addDamageShapeless(event, `2x tfc:ceramic/unfired_fire_brick`, ["#artisanal:brick_molds", "3x tfc:fire_clay"]);
}