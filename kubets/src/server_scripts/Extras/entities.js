//priority: 900

const entitySpawned = (event) => {
	const { entity } = event;
	if (entity.type == "minecraft:item" && entity.item == "minecraft:chest")
		entity.setItem("tfc:wood/chest/oak");
	else if (entity.type == "minecraft:item" && entity.item == "minecraft:barrel")
		entity.setItem("tfcbarrels:wood/barrel/oak")
	else if (entity.type == "minecraft:item" && entity.item == "minecraft:torch")
		entity.setItem("tfc:torch");
	else if (entity.type == "minecraft:sheep")
		event.cancel();
}
