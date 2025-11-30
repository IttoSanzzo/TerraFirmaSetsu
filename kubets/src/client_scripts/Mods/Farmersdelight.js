//priority: 10

const setJeiFarmersdelight = (event) => {
	event.hide("#farmersdelight:wild_crops");
	event.hide("farmersdelight:stove");
	event.hide("farmersdelight:rope");
	event.hide("farmersdelight:tree_bark");

	event.hide("farmersdelight:carrot_crate");
	event.hide("farmersdelight:potato_crate");
	event.hide("farmersdelight:beetroot_crate");
	event.hide("farmersdelight:cabbage_crate");
	event.hide("farmersdelight:tomato_crate");
	event.hide("farmersdelight:onion_crate");
	event.hide("farmersdelight:rice_bag");
	event.hide("farmersdelight:rice_bale");

	const allWoods = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"cherry",
		"crimson",
		"warped",
		"bamboo"
	]
	allWoods.forEach((wood) => {
		event.hide(`farmersdelight:${wood}_cabinet`);
	});
}
