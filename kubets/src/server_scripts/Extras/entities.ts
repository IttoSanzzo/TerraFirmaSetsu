//priority: 900

import { $EntitySpawnedEventJS } from "packages/dev/latvian/mods/kubejs/entity/$EntitySpawnedEventJS";

export const entitySpawned = (event: $EntitySpawnedEventJS) => {
	const { entity } = event;
	if (entity.type == "minecraft:item" && entity.item.id == "minecraft:chest")
		entity.setItem("tfc:wood/chest/oak");
	else if (
		entity.type == "minecraft:item" &&
		entity.item.id == "minecraft:barrel"
	)
		entity.setItem("tfcbarrels:wood/barrel/oak");
	else if (
		entity.type == "minecraft:item" &&
		entity.item.id == "minecraft:torch"
	)
		entity.setItem("tfc:torch");
	else if (entity.type == "minecraft:sheep") event.cancel();
};
