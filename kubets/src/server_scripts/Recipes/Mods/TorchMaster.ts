// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

function setRecipesTorchMaster(event: $RecipesEventJS) {
	event.remove({ output: "torchmaster:megatorch" });
	event
		.shaped("torchmaster:megatorch", ["TET", "GLG", "LLL"], {
			T: "minecraft:iron_nugget",
			E: "malum:ether",
			G: "malum:hallowed_gold_nugget",
			L: "#minecraft:logs",
		})
		.id("setsu:torchmaster/megatorch");

	event.remove({ output: "torchmaster:feral_flare_lantern" });
	event
		.shaped("torchmaster:feral_flare_lantern", ["TET", "GMG", "TLT"], {
			T: "malum:infernal_spirit",
			E: "torchmaster:megatorch",
			G: "minecraft:paper",
			M: "malum:hallowed_spirit_resonator",
			L: "#tfc:lamps",
		})
		.id("setsu:torchmaster/feral_flare_lantern");
}
