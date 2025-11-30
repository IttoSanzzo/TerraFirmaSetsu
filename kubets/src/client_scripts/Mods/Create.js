//priority: 10

const setJeiCreate = (event) => {
	event.hide("create:red_sand_paper");
	event.hide("create:deepslate_zinc_ore");
	event.hide("create:zinc_ore");
	event.hide("create:dough");

	// Extended Gears
	event.hide("extendedgears:large_shaftless_cogwheel")
	event.hide("extendedgears:shaftless_cogwheel")

	// Stuff & Additions
	const blazRose = [
		"blazing",
		"rose_quartz"
	];
	blazRose.forEach((type) => {
		event.hide(`create_sa:${type}_pickaxe`);
		event.hide(`create_sa:${type}_shovel`);
		event.hide(`create_sa:${type}_axe`);
		event.hide(`create_sa:${type}_sword`);
	})
	event.hide(`create_sa:blazing_cleaver`);

	const createSaMat = [
		"brass",
		"zinc",
		"copper"
	];
	createSaMat.forEach((type) => {
		event.hide(`create_sa:${type}_pickaxe`);
		event.hide(`create_sa:${type}_shovel`);
		event.hide(`create_sa:${type}_axe`);
		event.hide(`create_sa:${type}_sword`);
		event.hide(`create_sa:${type}_hoe`);
		event.hide(`create_sa:${type}_helmet`);
		event.hide(`create_sa:${type}_chestplate`);
		event.hide(`create_sa:${type}_leggings`);
		event.hide(`create_sa:${type}_boots`);
	})
}
