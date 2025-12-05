import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient";

declare module "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS" {
	interface $TFCDataEventJS {
		/**
		 * Adds a heat definition to the specified ingredient
		 *
		 * @param ingredient - The ingredient the heat definition applies to
		 * @param heatCapacity - Specifies how fast the ingredient heats up relative to others. Measured in Energy / °C
		 * @param forgingTemperature - Specifies the temperature °C required to work the ingredient. May be null to allow working at any temperature
		 * @param weldingTemperature - Specifies the temperature °C required to weld the ingredient. May be null to allow welding at any temperature
		 */
		itemHeat(
			ingredient: $Ingredient$$Type,
			heatCapacity: number, // float → number em TS
			forgingTemperature: number | null, // float → number
			weldingTemperature: number | null // float → number
		): void;
	}
}
