// priority: 198

function setRecipesSimpleWeapons(event) {

	const weaponSmith = (output, ingredient, form, tier) => {
		event.recipes.tfc.anvil(output, ingredient, form).tier(tier).bonus(true).id(`setsu:simpleweapons/${output.replace(":", "/")}`);
	};

	const smithAllWeapons = (tier, name, ingredientLight, ingredientHeavy) => {
		let spear = "spear";
		if (name == "diamond" || name == "pendorite" || name == "netherite")
			spear = "halberd";
		weaponSmith(`simple_weapons:${name}_scythe`, ingredientHeavy, ['draw_last', 'upset_second_last', 'bend_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_dagger`, ingredientLight, ['draw_last', 'shrink_second_last', 'shrink_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_greatsword`, ingredientHeavy, ['shrink_last', 'draw_second_last', 'draw_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_${spear}`, ingredientLight, ['draw_last', 'hit_second_last', 'hit_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_fist`, ingredientLight, ['hit_last', 'hit_second_last', 'shrink_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_scimitar`, ingredientLight, ['hit_last', 'bend_second_last', 'draw_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_sickle`, ingredientHeavy, ['shrink_last', 'hit_second_last', 'punch_third_last'], tier);
		weaponSmith(`simple_weapons:${name}_katana`, ingredientHeavy, ['shrink_last', 'bend_not_last', 'bend_not_last'], tier);
	};

	let weaponMatRem = [
		'stone',
		'iron',
		'diamond',
		'netherite',
		'corinthium',
		'electrum',
		'pendorite',
		'warden',
		'adamantite',
		'ironwood',
		'steeleaf',
		'knightmetal',
		'fiery'
	];
	weaponMatRem.forEach(mat => {
		event.remove({ id: `simple_weapons:${mat}_scythe_recipe` });
		event.remove({ id: `simple_weapons:${mat}_dagger_recipe` });
		event.remove({ id: `simple_weapons:${mat}_greatsword_recipe` });
		event.remove({ id: `simple_weapons:${mat}_spear_recipe` });
		event.remove({ id: `simple_weapons:${mat}_halberd_recipe` });
		event.remove({ id: `simple_weapons:${mat}_fist_recipe` });
		event.remove({ id: `simple_weapons:${mat}_katar_recipe` });
		event.remove({ id: `simple_weapons:${mat}_scimitar_recipe` });
		event.remove({ id: `simple_weapons:${mat}_katana_recipe` });
		event.remove({ id: `simple_weapons:${mat}_crowbill_recipe` });
		event.remove({ id: `simple_weapons:${mat}_sickle_recipe` });
	})

	smithAllWeapons(3, "iron", 'tfc:metal/ingot/wrought_iron', 'tfc:metal/double_ingot/wrought_iron');
	smithAllWeapons(3, "electrum", 'immersiveengineering:ingot_electrum', "tfc_ie_addon:metal/double_ingot/electrum");
	smithAllWeapons(3, "ironwood", 'tfc:metal/ingot/nickel', 'tfc:metal/double_ingot/nickel');
	smithAllWeapons(4, "diamond", 'botania:mana_diamond', 'botania:mana_diamond');
	smithAllWeapons(4, "steeleaf", 'botania:terrasteel_ingot', 'botania:terrasteel_ingot');
	smithAllWeapons(4, "knightmetal", 'tfc:metal/ingot/bismuth_bronze', 'tfc:metal/double_ingot/bismuth_bronze');
	smithAllWeapons(4, "corinthium", 'immersiveengineering:ingot_constantan', "tfc_ie_addon:metal/double_ingot/constantan");
	smithAllWeapons(5, "netherite", 'tfc:metal/ingot/black_steel', 'tfc:metal/double_ingot/black_steel');
	smithAllWeapons(6, "adamantite", 'tfc:metal/ingot/blue_steel', 'tfc:metal/double_ingot/blue_steel');
	smithAllWeapons(6, "pendorite", "kubejs:metal/double_ingot/purple_steel", "kubejs:metal/ingot/purple_steel");

	// 'fiery and warden' /////////////////////////////////////////////
	let simpleArmTypes = ['scythe', 'dagger', 'greatsword', 'spear', 'fist', 'katar', 'scimitar', 'sickle', 'katana']
	simpleArmTypes.forEach(type => {
		let source = (type == "spear") ? "halberd" : type;
		event.custom({
			type: "mna:manaweaving-recipe",
			tier: 1,
			output: `simple_weapons:fiery_${type}`,
			items: [
				`simple_weapons:netherite_${source}`,
				"mna:greater_mote_fire"
			],
			patterns: [
				"mna:circle",
				"mna:star",
				"mna:diamond"
			]
		}).id(`setsu/simple_weapons/fiery_${type}`)
		event.custom({
			type: "mna:manaweaving-recipe",
			tier: 1,
			output: `simple_weapons:warden_${type}`,
			items: [
				`simple_weapons:pendorite_${source}`,
				"mna:greater_mote_ender"
			],
			patterns: [
				"mna:circle",
				"mna:hourglass",
				"mna:diamond"
			]
		}).id(`setsu/simple_weapons/warden_${type}`)
	})
}
