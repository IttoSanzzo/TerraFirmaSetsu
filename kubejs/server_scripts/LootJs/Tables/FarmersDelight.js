//priority: 299

function setLootFarmersDelight(event) {
	event.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:cabbage_seeds", "tfc:seeds/cabbage");
	event.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:tomato_seeds", "tfc:seeds/tomato");
	event.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:onion", "tfc:seeds/onion");
	event.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:rice", "tfc:seeds/rice");
};
