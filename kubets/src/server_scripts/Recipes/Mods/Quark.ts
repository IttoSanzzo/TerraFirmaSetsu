// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
import { addDamageShaped, addDamageShapeless } from "../_helperFunctions";
import { ItemCol } from "../../HelpCollections/ItemCollections";

export function setRecipesQuark(event: $RecipesEventJS) {
	// 0. Replaces
	event.remove({ id: "quark:tweaks/crafting/utility/bent/paper" });
	event.remove({ output: "quark:thatch" });
	event.remove({ output: "quark:thatch_stairs" });
	event.remove({ output: "quark:thatch_slab" });
	event.remove({ output: "quark:thatch_vertival_slab" });

	event.remove({ output: "quark:ancient_boat" });
	event.remove({ output: "quark:azalea_boat" });
	event.remove({ output: "quark:blossom_boat" });
	event.remove({ output: "quark:ancient_chest_boat" });
	event.remove({ output: "quark:azalea_chest_boat" });
	event.remove({ output: "quark:blossom_chest_boat" });

	event.remove({ output: "quark:stick_block" });
	event.remove({
		id: "quark:building/crafting/compressed/stick_block_uncompress",
	});
	event.replaceInput(
		{ id: "quark:building/crafting/paper_lantern" },
		"minecraft:bamboo",
		"#minecraft:wooden_buttons"
	);
	event.replaceInput(
		{ id: "quark:tools/crafting/abacus" },
		"tfc:metal/ingot/wrought_iron",
		"#forge:bones"
	);
	// event.replaceInput({ id: "quark:tools/crafting/abacus" }, "#minecraft:planks", "#tfc:lumber");

	const foodBlock = [
		"apple_crate",
		"potato_crate",
		"carrot_crate",
		"beetroot_crate",
		"cocoa_beans_sack",
		"berry_sack",
		"glowberry_sack",
	];
	foodBlock.forEach((block) => {
		event.remove({ output: `quark:${block}` });
		event.remove({
			id: `quark:building/crafting/compressed/${block}_uncompress`,
		});
	});

	// 1. Craftings

	event.remove({ id: "quark:tools/crafting/seed_pouch" });
	addDamageShaped(event, `quark:seed_pouch`, ["VSN", "CXC", "CCC"], {
		V: "#tfc:metal/shearss",
		N: "tfc:bone_needle",
		S: "#forge:string",
		X: "#forge:seeds",
		C: "tfc:straw",
	});

	event.remove({ id: "quark:building/crafting/panes/paper_wall" });
	event
		.shaped(`8x quark:paper_wall`, ["LLL", "PPP", "LLL"], {
			P: "minecraft:paper",
			L: "#tfc:lumber",
		})
		.id(`setsu:quark/paper_wall`);

	event.remove({ id: "quark:building/crafting/iron_ladder" });
	event
		.shaped("8x quark:iron_ladder", ["N N", "NIN", "N N"], {
			N: "minecraft:iron_nugget",
			I: "#setsu:ingot/all_iron",
		})
		.id("setsu:quark/iron_ladder");

	event.remove({ id: "quark:building/crafting/grate" });
	event
		.shaped("4x quark:grate", ["BB", "BB"], {
			B: "minecraft:iron_bars",
		})
		.id("setsu:quark/grate");

	event.remove({ id: "quark:building/crafting/framed_glass" });
	event
		.shaped("8x quark:framed_glass", ["GIG", "IGI", "GIG"], {
			G: "#forge:glass/colorless",
			I: "#setsu:ingot/all_iron",
		})
		.id("setsu:quark/frames_glass");

	event.remove({ id: "quark:building/crafting/furnaces/deepslate_furnace" });
	event
		.shaped("quark:blackstone_furnace", ["YYY", "YCY", "LSL"], {
			Y: "minecraft:blackstone",
			S: "#tfc:rock/smooth",
			L: "tfc:fire_clay",
			C: "minecraft:charcoal",
		})
		.id("setsu:quark/blackstone_furnace");
	event.remove({ id: "quark:building/crafting/furnaces/blackstone_furnace" });
	event
		.shaped("quark:deepslate_furnace", ["YYY", "YCY", "LSL"], {
			Y: "minecraft:cobbled_deepslate",
			S: "#tfc:rock/smooth",
			L: "tfc:fire_clay",
			C: "minecraft:charcoal",
		})
		.id("setsu:quark/deepslate_furnace");

	// 2. smiths
	/*
	event.remove({ id: "quark:tools/crafting/trowel" });
	event.recipes.tfc.anvil(ItemStackProvider.of('quark:trowel'), 'tfc:metal/ingot/wrought_iron', ['upset_last', 'bend_second_last', 'shrink_third_last']).tier(3).id('setsu:quark/trowel')
	event.remove({ id: "quark:building/crafting/gold_bars" });
	event.recipes.tfc.anvil(ItemStackProvider.of('8x quark:gold_bars'), 'tfc:metal/sheet/gold', ['upset_last', 'punch_second_last', 'punch_third_last']).tier(2).id('setsu:quark/gold_bars_sheet')
	event.recipes.tfc.anvil(ItemStackProvider.of('16x quark:gold_bars'), 'tfc:metal/double_sheet/gold', ['upset_last', 'punch_second_last', 'punch_third_last']).tier(2).id('setsu:quark/gold_bars_double_sheet')
	*/

	const reVertical = (mod, names) => {
		names.forEach((name) => {
			event.remove({
				id: `quark:building/crafting/vertplanks/vertical_${name}_planks`,
			});
			event.remove({
				id: `quark:building/crafting/vertplanks/vertical_${name}_planks_revert`,
			});
			event.shaped(`3x quark:vertical_${name}_planks`, ["W", "W", "W"], {
				W: `${mod}:${name}_planks`,
			});
			event.shapeless(`${mod}:${name}_planks`, [
				`quark:vertical_${name}_planks`,
			]);
		});
	};
	reVertical("minecraft", ItemCol.allVanillaWoodTypesBamboo);
	const reWoods = ["ancient", "azalea", "blossom"];
	reVertical("quark", reWoods);
	reWoods.forEach((wood) => {
		event.remove({ id: `quark:world/crafting/woodsets/${wood}/planks` });
		addDamageShapeless(event, `3x quark:${wood}_planks`, [
			`#quark:${wood}_logs`,
			"#tfc:metal/saws",
		]);
	});
}
