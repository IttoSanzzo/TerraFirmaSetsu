//priority: 299

import { $LootModificationEventJS } from "packages/com/almostreliable/lootjs/kube/$LootModificationEventJS";

export function setLootFarmersDelight(event: $LootModificationEventJS) {
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:cabbage_seeds", "tfc:seeds/cabbage");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:tomato_seeds", "tfc:seeds/tomato");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:onion", "tfc:seeds/onion");
	event
		.addLootTypeModifier(LootType.CHEST)
		.replaceLoot("farmersdelight:rice", "tfc:seeds/rice");
}
