//priority: 10

const setJeiFunctionalStorage = (event) => {
	const allVanillaWoodTypes = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"cherry",
		"crimson",
		"warped"
	];

	allVanillaWoodTypes.forEach((wood) => {
		event.hide(`functionalstorage:${wood}_1`);
		event.hide(`functionalstorage:${wood}_2`);
		event.hide(`functionalstorage:${wood}_4`);
	});
}