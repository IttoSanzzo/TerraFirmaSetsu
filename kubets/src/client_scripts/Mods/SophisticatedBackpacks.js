//priority: 10

const setJeiSophisticatedBackpacks = (event) => {
	const spAllRemoves = [
		"smelting_upgrade",
		"auto_smelting_upgrade",
		"smoking_upgrade",
		"auto_smoking_upgrade",
		"blasting_upgrade",
		"auto_blasting_upgrade",
		"stonecutter_upgrade",
		"anvil_upgrade",
		"smithing_upgrade",
		"backpack"
	]
	spAllRemoves.forEach((item) => {
		event.hide(`sophisticatedbackpacks:${item}`);
	})
};
