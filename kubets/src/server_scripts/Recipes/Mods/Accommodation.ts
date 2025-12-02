// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesAccommodation(event: $RecipesEventJS) {
	event.remove({ id: "accommodation_:tatami_recipe" });
	event.remove({ id: "accommodation_:tatami_rectangle_recipe" });

	event.remove({ id: "accommodation_:shide_recipe" });
	event
		.shaped("accommodation_:shide", ["S S", "PSP", " P "], {
			P: "minecraft:paper",
			S: "#forge:string",
		})
		.id("setsu:accommodation_/shide");

	event.replaceInput(
		{ id: "accommodation_:tea_set_recipe" },
		"minecraft:potion",
		"tfc:empty_jar"
	);
	event.replaceInput(
		{ mod: "accommodation_" },
		"minecraft:deepslate_tile_slab",
		"#setsu:tfc/cobblestone_slab"
	);
	event.replaceInput(
		{ mod: "accommodation_" },
		"minecraft:deepslate_tile_slab",
		"#setsu:tfc/cobblestone_slab"
	);
	[
		"oak",
		"birch",
		"spruce",
		"jungle",
		"acacia",
		"dark_oak",
		"crimson",
		"warped",
		"mangrove",
	].forEach((wood) => {
		event.replaceInput(
			{ mod: "accommodation_" },
			`minecraft:${wood}_slab`,
			"#minecraft:wooden_slabs"
		);
		event.remove({ id: `accommodation_:${wood}_shoji_recipe` });
		event.remove({ id: `accommodation_:${wood}_shoji_middle_recipe` });
		event.remove({ id: `accommodation_:${wood}_shoji_bottom_recipe` });
	});
	event.remove({ id: `accommodation_:jungel_shoji_recipe` });

	event.remove({ id: "accommodation_:shinai_recipe" });
	event
		.shaped("accommodation_:shinai", ["SC ", "SC ", " I "], {
			S: "#forge:string",
			C: "farmersdelight:canvas",
			I: "tfc:metal/ingot/wrought_iron",
		})
		.id("setsu:accommodation_/shinai");

	event
		.shaped("6x accommodation_:shoji", ["LLL", "PPP", "LLL"], {
			L: "#tfc:lumber",
			P: "minecraft:paper",
		})
		.id("setsu:accommodation_/shoji");
	event
		.shaped("6x accommodation_:shoji_bottom", ["LLL", "PPP", "SSS"], {
			L: "#tfc:lumber",
			P: "minecraft:paper",
			S: "#minecraft:wooden_slabs",
		})
		.id("setsu:accommodation_/shoji_bottom");
	event
		.shaped("8x accommodation_:shoji_middle", ["LPL", "PPP", "LLL"], {
			L: "#tfc:lumber",
			P: "minecraft:paper",
		})
		.id("setsu:accommodation_/shoji_middle");

	function shojiWall(vanilla, tfc) {
		tfc.forEach((lumber) => {
			let lumberString = String(lumber);
			let id = lumberString.substring(lumberString.search("lumber/") + 7);
			event
				.shaped(`6x accommodation_:${vanilla}_shoji`, ["LLL", "PPP", "LLL"], {
					L: lumber,
					P: "minecraft:paper",
				})
				.id(`setsu:accommodation_/shoji/${id}`);
			event
				.shaped(
					`6x accommodation_:${vanilla}_shoji_bottom`,
					["LLL", "PPP", "SSS"],
					{
						L: lumber,
						P: "minecraft:paper",
						S: "#minecraft:wooden_slabs",
					}
				)
				.id(`setsu:accommodation_/shoji_bottom/${id}`);
			event
				.shaped(
					`8x accommodation_:${vanilla}_shoji_middle`,
					["LPL", "PPP", "LLL"],
					{
						L: lumber,
						P: "minecraft:paper",
					}
				)
				.id(`setsu:accommodation_/shoji_middle/${String(id)}`);
		});
	}

	shojiWall("oak", ["tfc:wood/lumber/oak", "tfc:wood/lumber/sycamore"]);
	shojiWall("birch", [
		"tfc:wood/lumber/birch",
		"tfc:wood/lumber/pine",
		"tfc:wood/lumber/white_cedar",
		"tfc:wood/lumber/douglas_fir",
	]);
	shojiWall("jungle", ["tfc:wood/lumber/ash", "tfc:wood/lumber/sequoia"]);
	shojiWall("acacia", ["tfc:wood/lumber/acacia", "tfc:wood/lumber/chestnut"]);
	shojiWall("dark_oak", [
		"tfc:wood/lumber/hickory",
		"tfc:wood/lumber/blackwood",
		"tfc:wood/lumber/aspen",
	]);
	shojiWall("mangrove", [
		"tfc:wood/lumber/rosewood",
		"tfc:wood/lumber/mangrove",
	]);
	shojiWall("crimson", [
		"tfc:wood/lumber/kapok",
		"beneath:wood/lumber/crimson",
	]);
	shojiWall("warped", ["tfc:wood/lumber/willow", "beneath:wood/lumber/warped"]);

	[
		"tfc:wood/lumber/spruce",
		"tfc:wood/lumber/maple",
		"tfc:wood/lumber/palm",
	].forEach((lumber) => {
		let lumberString = String(lumber);
		let id = lumberString.substring(lumberString.search("lumber/") + 7);
		event
			.shaped(`6x accommodation_:spruce_shoji`, ["LLL", "PPP", "LLL"], {
				L: lumber,
				P: "minecraft:paper",
			})
			.id(`setsu:accommodation_/shoji/${id}`);
		event
			.shaped(`6x accommodation_:spruce_shoji_bottom`, ["LLL", "PPP", "SSS"], {
				L: lumber,
				P: "minecraft:paper",
				S: "#minecraft:wooden_slabs",
			})
			.id(`setsu:accommodation_/shoji_bottom/${id}`);
		event
			.shaped(`8x accommodation_:spurce_shoji_middle`, ["LPL", "PPP", "LLL"], {
				L: lumber,
				P: "minecraft:paper",
			})
			.id(`setsu:accommodation_/shoji_middle/${String(id)}`);
	});
}
