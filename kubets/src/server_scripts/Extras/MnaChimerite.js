//priority: 899

const setMnaChimerite = (event) => {
	console.log("Setsu Mna Chimerite Start!");
	// Start

	const chimeriteStones = [
		"granite",
		"diorite",
		"gabbro",
		"shale",
		"claystone",
		"limestone",
		"conglomerate",
		"dolomite",
		"chert",
		"chalk",
		"rhyolite",
		"basalt",
		"andesite",
		"dacite",
		"quartzite",
		"slate",
		"phyllite",
		"schist",
		"gneiss",
		"marble",
	];
	const chimeriteGems = [
		"amethyst",
		"diamond",
		"emerald",
		"lapis_lazuli",
		"opal",
		"pyrite",
		"ruby",
		"sapphire",
		"topaz",
	];
	const chimeriteOres = [
		"native_copper",
		"native_gold",
		"native_silver",
		"hematite",
		"cassiterite",
		"bismuthinite",
		"garnierite",
		"malachite",
		"magnetite",
		"limonite",
		"sphalerite",
		"tetrahedrite",
	];


	chimeriteStones.forEach((stone) => {
		chimeriteGems.forEach((gem) => {
			event.addJson(`mna:loot_modifiers/chimerite_drop_${gem}_${stone}`, {
				type: "mna:drops_chimerite",
				conditions: [
					{
						condition: "block_state_property",
						block: `tfc:ore/${gem}/${stone}`,
					},
				],
				numChimerite: 1,
				magicLevel: 5,
				chance: 0.2,
				fortuneBonusChance: 0.05,
				dropsWith: `tfc:ore/${gem}`,
			});
		});

		chimeriteOres.forEach((ore) => {
			event.addJson(`mna:loot_modifiers/chimerite_drop_poor_${ore}_${stone}`, {
				type: "mna:drops_chimerite",
				conditions: [
					{
						condition: "block_state_property",
						block: `tfc:ore/poor_${ore}/${stone}`,
					},
				],
				numChimerite: 1,
				magicLevel: 10,
				chance: 0.01,
				fortuneBonusChance: 0.05,
				dropsWith: `tfc:ore/poor_${ore}`,
			});

			event.addJson(`mna:loot_modifiers/chimerite_drop_normal_${ore}_${stone}`, {
				type: "mna:drops_chimerite",
				conditions: [
					{
						condition: "block_state_property",
						block: `tfc:ore/normal_${ore}/${stone}`,
					},
				],
				numChimerite: 1,
				magicLevel: 20,
				chance: 0.05,
				fortuneBonusChance: 0.05,
				dropsWith: `tfc:ore/normal_${ore}`,
			});

			event.addJson(`mna:loot_modifiers/chimerite_drop_rich_${ore}_${stone}`, {
				type: "mna:drops_chimerite",
				conditions: [
					{
						condition: "block_state_property",
						block: `tfc:ore/rich_${ore}/${stone}`,
					},
				],
				numChimerite: 1,
				magicLevel: 30,
				chance: 0.1,
				fortuneBonusChance: 0.05,
				dropsWith: `tfc:ore/rich_${ore}`,
			});
		});
	})

	// End.
	console.log("Setsu Mna Chimerite End!");
}
