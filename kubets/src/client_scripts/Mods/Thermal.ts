//priority: 10

import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS";

export const setJeiThermal = (event: $HideJEIEventJS<any>) => {
	event.hide("thermal:dynamo_stirling");
	event.hide("thermal:dynamo_compression");
	event.hide("thermal:dynamo_magmatic");
	event.hide("thermal:dynamo_numismatic");
	event.hide("thermal:dynamo_lapidary");
	event.hide("thermal:dynamo_disenchantment");
	event.hide("thermal:dynamo_gourmand");
	event.hide("thermal:dynamo_output_augment");
	event.hide("thermal:dynamo_fuel_augment");
	event.hide("thermal:dynamo_throttle_augment");
	event.hide("thermal:apatite_ore");
	event.hide("thermal:deepslate_apatite_ore");
	event.hide("thermal:lead_ore");
	event.hide("thermal:deepslate_lead_ore");
	event.hide("thermal:nickel_ore");
	event.hide("thermal:deepslate_nickel_ore");
	event.hide("thermal:ruby_ore");
	event.hide("thermal:deepslate_ruby_ore");
	event.hide("thermal:sapphire_ore");
	event.hide("thermal:deepslate_sapphire_ore");
	event.hide("thermal:silver_ore");
	event.hide("thermal:deepslate_silver_ore");
	event.hide("thermal:sulfur_ore");
	event.hide("thermal:deepslate_sulfur_ore");
	event.hide("thermal:tin_ore");
	event.hide("thermal:deepslate_tin_ore");
	event.hide("thermal:device_tree_extractor");
};

JEIEvents.removeCategories((event) => {
	event.remove("thermal:disenchantment_fuel");
	event.remove("thermal:gourmand_fuel");
	event.remove("thermal:stirling_fuel");
	console.log(event.getCategoryIds());
});
