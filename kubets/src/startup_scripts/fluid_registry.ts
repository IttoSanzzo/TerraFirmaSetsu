// priority: 1

Platform.mods.kubejs.name = "Setsu Tea Party";
StartupEvents.registry("fluid", (event) => {
	event
		.create("metal/high_carbon_purple_steel")
		.thickTexture(0x36205d)
		.thinTexture(0x36205d)
		.bucketColor(0x36205d)
		.displayName("High Carbon Red Steel")
		.rarity("epic");

	event
		.create("metal/purple_steel")
		.thickTexture(0x36205d)
		.thinTexture(0x36205d)
		.bucketColor(0x36205d)
		.displayName("High Carbon Red Steel")
		.rarity("epic");
});
