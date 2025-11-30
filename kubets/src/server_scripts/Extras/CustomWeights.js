// priority: 199

const setCustomWeights = (event) => {
	//Very Light items will stack to 64.
	//Light      items will stack to 32.
	//Medium     items will stack to 16.
	//Heavy      items will stack to 4.
	//Very Heavy items will stack to 1.
	//Huge + Very Heavy equals "overburdened"

	/* Kubejs */
	event.itemSize("kubejs:metal/ingot/weak_purple_steel", "large", "medium");
	event.itemSize("kubejs:metal/ingot/purple_steel", "large", "medium");
	event.itemSize("kubejs:metal/double_ingot/purple_steel", "large", "heavy");
	event.itemSize("kubejs:misc/silk_cocoon", "very_small", "very_light");

	/* Minors */
	event.itemSize("minecraft:bundle", "very_small", "very_light");
	event.itemSize("thermal:satchel", "normal", "light");

	event.itemSize("trotting_wagons:armored_wagon", "huge", "very_heavy");
	event.itemSize("trotting_wagons:royal_wagon", "huge", "very_heavy");
	event.itemSize("trotting_wagons:conestoga_wagon", "huge", "very_heavy");


	/* BackPacks */
	event.itemSize("thermal:satchel", "huge", "very_heavy");
	const simpleBackpacks = [
		"",
		"copper_",
		"iron_",
		"gold_",
		"diamond_",
		"netherite_"
	]
	simpleBackpacks.forEach((backpack) => {
		event.itemSize(`sophisticatedbackpacks:${backpack}backpack`, "huge", "very_heavy");
	});
};
