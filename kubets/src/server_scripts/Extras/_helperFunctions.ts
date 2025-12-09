// priority: 1000

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { NewTfcDrink, NewTfcFood } from "./CustomFoods";

export function setNewTfcFood(event: $TFCDataEventJS, newFood: NewTfcFood) {
	event.foodItem(newFood.id as any, (data) => {
		if (newFood.foodData) {
			if (newFood.foodData.type) data.type(newFood.foodData.type);
			if (newFood.foodData.hunger) data.hunger(newFood.foodData.hunger);
			if (newFood.foodData.saturation)
				data.saturation(newFood.foodData.saturation);
			if (newFood.foodData.water) data.water(newFood.foodData.water);
			if (newFood.foodData.decayModifier)
				data.decayModifier(newFood.foodData.decayModifier);
			if (newFood.foodData.grain) data.grain(newFood.foodData.grain);
			if (newFood.foodData.fruit) data.fruit(newFood.foodData.fruit);
			if (newFood.foodData.vegetables)
				data.vegetables(newFood.foodData.vegetables);
			if (newFood.foodData.protein) data.protein(newFood.foodData.protein);
			if (newFood.foodData.dairy) data.dairy(newFood.foodData.dairy);
		}
	});
}
export function setNewTfcDrink(event: $TFCDataEventJS, newDrink: NewTfcDrink) {
	event.drinkable(newDrink.id as any, (data) => {
		if (newDrink.drinkData) {
			if (newDrink.drinkData.thirst) data.thirst(newDrink.drinkData.thirst);
			if (newDrink.drinkData.intoxication)
				data.thirst(newDrink.drinkData.intoxication);
			if (newDrink.drinkData.effects) {
				newDrink.drinkData.effects.forEach((effectData) =>
					data.effect(effectData.id, (effect) => {
						if (effectData.amplifier) effect.amplifier(effectData.amplifier);
						if (effectData.duration) effect.duration(effectData.duration);
						if (effectData.chance) effect.chance(effectData.chance);
					})
				);
			}
		}
		data.food((food) => {
			if (newDrink.foodData) {
				if (newDrink.foodData.type) food.type(newDrink.foodData.type);
				if (newDrink.foodData.hunger) food.hunger(newDrink.foodData.hunger);
				if (newDrink.foodData.saturation)
					food.saturation(newDrink.foodData.saturation);
				if (newDrink.foodData.water) food.water(newDrink.foodData.water);
				if (newDrink.foodData.decayModifier)
					food.decayModifier(newDrink.foodData.decayModifier);
				if (newDrink.foodData.grain) food.grain(newDrink.foodData.grain);
				if (newDrink.foodData.fruit) food.fruit(newDrink.foodData.fruit);
				if (newDrink.foodData.vegetables)
					food.vegetables(newDrink.foodData.vegetables);
				if (newDrink.foodData.protein) food.protein(newDrink.foodData.protein);
				if (newDrink.foodData.dairy) food.dairy(newDrink.foodData.dairy);
			}
		});
	});
}
