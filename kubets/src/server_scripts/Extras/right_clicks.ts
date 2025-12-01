//priority: 894

export const rightClickEvent = (event) => {
	const { item, hand, player } = event;
	if (item != "tfc:empty_jar" || hand != "main_hand") return;
	let result = player.rayTrace(player.reachDistance);
	if (result.type == "block") {
		if (
			[
				"minecraft:water",
				"tfc:fluid/spring_water",
				"tfc:fluid/river_water",
				"tfc:fluid/salt_water",
			].includes(result.block.id)
		) {
			item.count--;
			player.give(Item.of("minecraft:potion", { Potion: "minecraft:water" }));
		}
	}
};
