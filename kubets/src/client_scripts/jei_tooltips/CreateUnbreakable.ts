//priority: 10

ItemEvents.tooltip((event) => {
	event.addAdvanced(
		"create_unbreakable:irromolding" as any,
		(item, advanced, text) => {
			const name = text.get(0);
			text.remove(0);
			text.add(
				0,
				(Text as any).of("✦ ").gold().append(name).append(" ✦").gold()
			);
			text.add(1, (Text as any).of("✦ Eternalizer").gold());
			text.add(
				2,
				(Text as any)
					.of("Forge an item with this core in an anvil to make it eternal.")
					.gray()
			);
		}
	);
	event.addAdvanced(/.*/, (item, advanced, text) => {
		if (item.nbt && (item.nbt as any).Unbreakable === 1) {
			const name = text.get(0);
			text.remove(0);
			text.add(
				0,
				(Text as any).of("✦ ").gold().append(name).append(" ✦").gold()
			);
			text.add(1, (Text as any).of("✦ Eternal").gold());
		}
	});
});
