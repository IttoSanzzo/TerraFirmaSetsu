//priority: 10

const setJeiPotionMaster = (event) => {
	const hidePotion = (recipeEvent, potionId) => {
		recipeEvent.hide(Item.of("minecraft:potion", `{Potion:"${potionId}"}`));
		recipeEvent.hide(Item.of("minecraft:splash_potion", `{Potion:"${potionId}"}`));
		recipeEvent.hide(Item.of("minecraft:tipped_arrow", `{Potion:"${potionId}"}`));
		recipeEvent.hide(Item.of("minecraft:lingering_potion", `{Potion:"${potionId}"}`));
		recipeEvent.hide(Item.of("apotheosis:potion_charm", `{Damage:0,Potion:"${potionId}"}`));
	}

	[
		"osmium",
		"crimsoniron",
		"platinum",
		"allthemodium",
		"vibranium",
		"unobtainium"
	].forEach((ore) => {
		event.hide(`potionsmaster:${ore}_powder`);
		event.hide(`potionsmaster:calcinated${ore}_powder`);
		hidePotion(event, `potionsmaster:${ore}_sight`);
	})
	event.hide(/potionsmaster:.*bezoar.*/);
	event.hide(/potionsmaster:.*bladder.*/);
	event.hide("potionsmaster:pestle");
	event.hide("potionsmaster:tile_mortar");
}
