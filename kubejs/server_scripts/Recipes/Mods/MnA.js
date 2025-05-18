// priority: 198

function setRecipesMna(event) {

	/**
	 * MnA
	 */
	event.replaceInput({ id: "mna:improvised_manaweaver_wand" }, "#mna:improvised_manaweave_wand_caps", "mna:vinteum_dust");
	event.replaceInput({ id: "mna:improvised_manaweaver_wand" }, "tfc:torch", "#mna:improvised_manaweave_wand_shafts");

	event.shaped("3x mna:vinteum_dust", ["FFF", "FXF", "FLF"], {
		F: "#mna:ma_flowers",
		X: "tfc:powder/wood_ash",
		L: "tfc:torch"
	}).id(`setsu:mna/improvised_vinteum_dust`);

	event.shaped("mna:decoration/chimerite_arcane_stone_chiseled", [" A ", "ADA", " A "], {
		A: "mna:decoration/chimerite_arcane_stone",
		D: "mna:purified_vinteum_dust"
	}).id(`setsu:mna/vinteum_alchemic_block`);

	event.remove({ id: "mna:vinteum_coated_iron" });
	event.shapeless("mna:vinteum_coated_iron", [
		"#setsu:ingot/all_iron",
		"mna:vinteum_dust",
	]).id(`setsu:mna/vinteum_coated_cast_iron`);

	event.remove({ id: "mna:purified_vinteum_coated_iron" });
	event.shapeless("mna:purified_vinteum_coated_iron", [
		"#setsu:ingot/all_iron",
		"mna:purified_vinteum_dust",
	]).id(`setsu:mna/purified_vinteum_coated_cast_iron`);

	event.replaceInput({ id: "mna:wizard_chalk" }, "minecraft:flint", "tfc:rock/loose/chalk");

	const wandSticks = [
		"amethyst",
		"aum",
		"cerublossom",
		"chimerite",
		"desertnova",
		"emerald",
		"glass",
		"gold",
		"iron",
		"lapis",
		"netherquartz",
		"prismarinecrystal",
		"prismarineshard",
		"redstone",
		"skull",
		"tarma",
		"vinteum",
		"wakebloom"
	];
	wandSticks.forEach((wand) => {
		event.replaceInput({ id: `mna:wands/wand_${wand}` }, "minecraft:stick", "malum:stripped_runewood_log");
	});

	event.replaceInput({ id: "mna:ritual_focus_minor" }, "minecraft:iron_nugget", "immersiveengineering:nugget_silver");

	event.recipes.tfc.quern("1x mna:vinteum_dust", "mna:vinteum_ore").id(`setsu:mna/tfc_quern/vinteum_dust`);
	event.custom({
		type: "create:milling",
		ingredients: [
			{
				item: `mna:vinteum_ore`,
			},
		],
		results: [
			{
				item: `mna:vinteum_dust`,
				count: 1,
			},
			{
				item: `mna:vinteum_dust`,
				count: 1,
				chance: 0.5,
			},
		],
		processingTime: 100,
	}).id(`setsu:mna/create_milling/vinteum_dust`);

	event.remove({ id: "mna:runeforge_alt" });
	event.replaceInput({ id: "mna:runeforge" }, "mna:transmuted_silver", ["mna:transmuted_silver", "mna:vinteum_ingot",]);


	event.recipes.tfc.heating("mna:vinteum_ingot", 1550).resultItem("mna:superheated_vinteum_ingot");
	event.recipes.tfc.heating("mna:purified_vinteum_ingot", 1550).resultItem("mna:superheated_purified_vinteum_ingot");

	event.remove({ id: "mna:runeforging/runesmith_hammer" });
	event.remove({ id: "mna:runescribing/runesmith_chisel" });
	event.recipes.tfc.anvil("mna:runesmith_hammer", "mna:vinteum_ingot", ["hit_last", "hit_not_last", "draw_not_last"]).tier(1).bonus(true).id(`setsu:mna/runesmith_hammer`);
	event.recipes.tfc.anvil("mna:runesmith_chisel", "mna:vinteum_ingot", ["punch_last", "shrink_not_last",]).tier(1).bonus(true).id(`setsu:mna/runesmith_chisel`);

	event.custom({
		type: "mna:arcane-furnace",
		tier: 4,
		input: "forge:gems",
		output: "minecraft:diamond",
		outputQuantity: 1,
		burnTime: 500,
	}).id("setsu:mna/arcanefurnace/diamond");

	event.custom({
		type: "mna:manaweaving-recipe",
		tier: 1,
		output: `minecraft:enchanting_table`,
		quantity: 1,
		items: [
			`mna:animus_dust`,
			`mna:spell_book`,
			`mna:animus_dust`,
			`forge:gems/diamond`,
			`minecraft:red_carpet`,
			`forge:gems/diamond`,
			`minecraft:obsidian`,
			`minecraft:obsidian`,
			`minecraft:obsidian`,
		],
		patterns: ["mna:square", "mna:circle", "mna:triangle"],
	}).id(`setsu:mna/manaweaving/enchanting_table`);

	/**
	 * Arcane Stones
	 */
	const mnaTransmutation = (output, target) => {
		event.custom({
			type: "mna:transmutation",
			replaceBlock: output,
			targetBlock: target
		}).id(`setsu:mna/transmutation/${target.replace(":", "_").replace("/", "_")}/into/${output.replace(":", "_").replace("/", "_")}`);
	}
	event.remove({ id: "mna:transmutation/arcane_stone" });
	event.remove({ id: "mna:transmutation/arcane_sandstone" });
	ItemCol.tfcStoneTypes.forEach((stone) => {
		mnaTransmutation("mna:vinteum_ore", `tfc:rock/raw/${stone}`);
		mnaTransmutation("mna:decoration/arcane_stone", `tfc:rock/smooth/${stone}`);
	});
	mnaTransmutation("mna:decoration/arcane_sandstone", `tfc:raw_sandstone/yellow`);
	mnaTransmutation("mna:decoration/arcane_sandstone", `tfc:raw_sandstone/white`);

	/**
	 * Botania Infusion
	 */
	const mnaBotaniaInfusion = (output, count, ingredient, type, mana) => {
		const mnaBotaniajson = {
			type: "botania:mana_infusion",
			output: {
				item: output,
				count: count,
			},
			mana: mana,
			input: {},
			catalyst: {
				type: "block",
				block: "mna:decoration/chimerite_arcane_stone_chiseled",
			},
		};
		mnaBotaniajson["input"][type] = ingredient;
		event.custom(mnaBotaniajson).id(`setsu:mna/mana_infusion/${output.replace(":", "_").replace("/", "_")}`);
	}
	mnaBotaniaInfusion("mna:vinteum_ore", 1, `tfc:rock/raw`, "tag", 10000);
	mnaBotaniaInfusion("mna:decoration/arcane_stone", 1, `tfc:rock/smooth`, "tag", 5000);
	mnaBotaniaInfusion("mna:decoration/arcane_sandstone", 1, `forge:sandstone`, "tag", 5000);
	mnaBotaniaInfusion("minecraft:shroomlight", 1, `minecraft:glowstone`, "item", 1500);
	mnaBotaniaInfusion("tfc:plant/cherry_leaves", 1, `minecraft:leaves`, "tag", 100);
	mnaBotaniaInfusion("tfc:wood/log/douglas_fir", 1, `minecraft:logs`, "tag", 150);

	/**
	 * Hexerei Metal Raws
	 */
	const oreWeaving = (rarity, output, ore) => {
		event.custom({
			type: "mna:manaweaving-recipe",
			tier: 1,
			output: output,
			quantity: 1,
			items: ore,
			patterns: ["mna:circle", "mna:square", "mna:triangle"],
		}).id(`setsu:mna/manaweaving/raw_${rarity}_${ore[0].replace(":", "_").replace("/", "_")}_transformation`);
	};
	const mnaRawTrans = (output, ore) => {
		oreWeaving("poor", output, [
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`,
			`tfc:ore/poor_${ore}`
		]);
		oreWeaving("normal", output, [
			`tfc:ore/normal_${ore}`,
			`tfc:ore/normal_${ore}`,
			`tfc:ore/normal_${ore}`,
			`tfc:ore/normal_${ore}`
		]);
		oreWeaving("rich", output, [
			`tfc:ore/rich_${ore}`,
			`tfc:ore/rich_${ore}`,
			`tfc:ore/rich_${ore}`
		]);
	};

	mnaRawTrans("minecraft:raw_gold", "native_gold");
	mnaRawTrans("minecraft:raw_copper", "native_copper");
	mnaRawTrans("minecraft:raw_copper", "malachite");
	mnaRawTrans("minecraft:raw_copper", "tetrahedrite");
	mnaRawTrans("minecraft:raw_iron", "hematite");
	mnaRawTrans("minecraft:raw_iron", "magnetite");
	mnaRawTrans("minecraft:raw_iron", "limonite");
	mnaRawTrans("immersiveengineering:raw_silver", "native_silver");
	mnaRawTrans("immersiveengineering:raw_nickel", "garnierite");
	mnaRawTrans("thermal:raw_tin", "cassiterite");
	mnaRawTrans("create:raw_zinc", "sphalerite");
}
