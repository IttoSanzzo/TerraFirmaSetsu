// priority: 198

import { $RecipesEventJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";

export function setRecipesTfcSuperHammer(event: $RecipesEventJS) {
	const allToolMetals = [
		"bismuth_bronze",
		"black_bronze",
		"bronze",
		"copper",
		"wrought_iron",
		"steel",
		"black_steel",
		"blue_steel",
		"red_steel",
	];
	const types = ["shovel", "hammer"];

	allToolMetals.forEach((metal) => {
		types.forEach((type) => {
			event.remove({ id: `tfcsuperhammer:${metal}_super${type}` });
			event
				.shaped(
					`tfcsuperhammer:metal/super${type}/${metal}`,
					["GVH", "VMR", "SRL"],
					{
						H: `tfcsuperhammer:metal/super${type}_head/${metal}`,
						G: `tfc:glue`,
						L: `tfc_items:leather_strap`,
						R: `tfc_items:${metal}_ring`,
						V: `tfc_items:${metal}_rivet`,
						M: `tfc:metal/rod/${metal}`,
						S: "#forge:rods/wooden",
					},
				)
				.id(`setsu:tfcsuperhammer/metal/super${type}/${metal}`);
		});
	});
}
