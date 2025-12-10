// priority: 200

import { $TFCDataEventJS } from "packages/com/notenoughmail/kubejs_tfc/event/$TFCDataEventJS";
import { NewTfcFood, RawCookedMeatPair } from "../CustomFoods";
import { setNewTfcDrink, setNewTfcFood } from "../_helperFunctions";

/*
	Raw:
		Saturation: 0%
		Protein: 0.5 - 2
	Cooked:
		Saturation: 5% - 10%
		Protein: 1.5 - 2.5
*/

export const allButcheryMeats: NewTfcFood[] = [
	{
		id: "butchery:eye",
		foodData: {
			hunger: 2,
			decayModifier: 4,
			protein: 0.5,
		},
	},
	{
		id: "butchery:heart",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_heart",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:intestines",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_intestines",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:enderman_intestines",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_enderman_intestines",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:kidney",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_kidney",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:enderman_kidney",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_enderman_kidney",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:liver",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_liver",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:enderman_liver",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_enderman_liver",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:lungs",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_lungs",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:enderman_lungs",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_enderman_lungs",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:stomach",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_stomach",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:enderman_stomach",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_enderman_stomach",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_ham",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_ham",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_pork_belly",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_pork_belly",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_pork_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_pork_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.8,
		},
	},
	{
		id: "butchery:raw_pork_loin",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_pork_loin",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.8,
		},
	},
	{
		id: "butchery:raw_pork_shoulder",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_pork_shoulder",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:crackling",
		foodData: {
			hunger: 3,
			decayModifier: 3,
			saturation: 5,
		},
	},
	{
		id: "butchery:raw_chuck_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_chuck_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_ribeye_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_ribeye_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_rump_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_rump_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_sirloin_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_sirloin_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_tbone_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_tbone_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_lamb_loin",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_lamb_loin",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_lamb_rib",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_lamb_rib",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_lamb_shoulder",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_lamb_shoulder",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_lamb_sirloin",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_lamb_sirloin",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_bat_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_bat_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.0,
		},
	},
	{
		id: "butchery:chicken_foot",
		foodData: {
			hunger: 2,
			decayModifier: 2,
			protein: 0.5,
		},
	},
	{
		id: "butchery:raw_chicken_wing",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_chicken_wing",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 6,
			protein: 1.6,
		},
	},
	{
		id: "butchery:raw_chicken_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_chicken_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.6,
		},
	},
	{
		id: "butchery:tentacles",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:calamari",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_ocelot_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_ocelot_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_cave_spider_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3.5,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_spider_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2.5,
			saturation: 5,
			protein: 1.2,
		},
	},
	{
		id: "butchery:raw_spider_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3.5,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_cave_spider_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2.5,
			saturation: 5,
			protein: 1.2,
		},
	},
	{
		id: "butchery:raw_camel_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_camel_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_dolphin_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_dolphin_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.8,
		},
	},
	{
		id: "butchery:raw_cod_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.8,
		},
	},
	{
		id: "butchery:cooked_cod_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_leg_of_lamb",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_leg_of_lamb",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_creeper_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_creeper_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.0,
		},
	},
	{
		id: "butchery:raw_creeper_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.8,
		},
	},
	{
		id: "butchery:cooked_creeper_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.3,
		},
	},
	{
		id: "butchery:raw_mule_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_mule_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_donkey_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_donkey_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_evoker_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_evoker_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_guardian_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_guardian_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.0,
		},
	},
	{
		id: "butchery:raw_fox_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_fox_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_panda_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_panda_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_pillager_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_pillager_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_polar_bear_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_polar_bear_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_pufferfish",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_pufferfish",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_silverfish_chunks",
		foodData: {
			hunger: 2,
			decayModifier: 2.5,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_silverfish_chunks",
		foodData: {
			hunger: 2,
			decayModifier: 2,
			saturation: 1.5,
			protein: 1,
		},
	},
	{
		id: "butchery:raw_shulker_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_shuker_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.2,
		},
	},
	{
		id: "butchery:slime_chunks",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			protein: 0.1,
		},
	},
	{
		id: "butchery:magma_chunks",
		foodData: {
			hunger: 1,
			decayModifier: 1,
			protein: 0.1,
		},
	},
	{
		id: "butchery:raw_strider_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			protein: 0.7,
		},
	},
	{
		id: "butchery:cooked_strider_meat",
		foodData: {
			hunger: 4,
			decayModifier: 1,
			saturation: 5,
			protein: 1.3,
		},
	},
	{
		id: "butchery:raw_villager_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_villager_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_llama_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.2,
		},
	},
	{
		id: "butchery:cooked_llama_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:meat_scraps",
		foodData: {
			hunger: 4,
			decayModifier: 4,
			protein: 0.7,
		},
	},
	{
		id: "butchery:raw_sausage",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 2.0,
		},
	},
	{
		id: "butchery:cooked_sausage",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 3.0,
		},
	},
	{
		id: "butchery:raw_blood_sausage",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 2.2,
		},
	},
	{
		id: "butchery:cooked_blood_sausage",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 3.2,
		},
	},
	{
		id: "butchery:raw_dragon_meat",
		foodData: {
			hunger: 6,
			decayModifier: 2,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_dragon_meat",
		foodData: {
			hunger: 7,
			decayModifier: 1,
			saturation: 10,
			protein: 3.0,
		},
	},
	{
		id: "butchery:raw_pink_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_pink_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_blue_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_blue_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_cyan_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_cyan_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_gold_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_gold_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_brown_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_brown_axolotl_fillet",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_enderman_steak",
		foodData: {
			hunger: 4,
			decayModifier: 4,
			protein: 0.8,
		},
	},
	{
		id: "butchery:cooked_enderman_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			saturation: 5,
			protein: 1.6,
		},
	},
	{
		id: "butchery:raw_endermite_chunks",
		foodData: {
			hunger: 4,
			decayModifier: 3,
		},
	},
	{
		id: "butchery:cooked_endermite_chunks",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
		},
	},
	{
		id: "butchery:raw_cat_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_cat_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_witch_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_witch_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.8,
		},
	},
	{
		id: "butchery:withered_heart",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_elder_guardian_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_elder_guardian_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_wolf_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_wolf_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_warden_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_warden_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_sniffer_steak",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_sniffer_steak",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 10,
			protein: 2.2,
		},
	},
	{
		id: "butchery:raw_beef_mince",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.2,
		},
	},
	{
		id: "butchery:cooked_beef_mince",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 7,
			protein: 2.2,
		},
	},
	{
		id: "butchery:raw_horse_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_horse_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.0,
		},
	},
	{
		id: "butchery:raw_bee_back_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.3,
		},
	},
	{
		id: "butchery:cooked_bee_back_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 0.7,
		},
	},
	{
		id: "butchery:raw_gray_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_gray_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_green_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_green_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_orange_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_orange_frog_leg",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.5,
		},
	},
	{
		id: "butchery:raw_lamb_mince",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.2,
		},
	},
	{
		id: "butchery:cooked_lamb_mince",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.2,
		},
	},
	{
		id: "butchery:raw_turtle_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1.5,
		},
	},
	{
		id: "butchery:cooked_turtle_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 2.5,
		},
	},
	{
		id: "butchery:raw_salmon",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 0.5,
		},
	},
	{
		id: "butchery:cooked_salmon",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.4,
		},
	},
	{
		id: "butchery:raw_vindicator_meat",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	{
		id: "butchery:cooked_vindicator_meat",
		foodData: {
			hunger: 4,
			decayModifier: 2,
			saturation: 5,
			protein: 1.3,
		},
	},
	{
		id: "butchery:frog_heart",
		foodData: {
			hunger: 4,
			decayModifier: 3,
			protein: 1,
		},
	},
	// {
	// 	id: "butchery:raw_",
	// 	foodData: {
	// 		hunger: 4,
	// 		decayModifier: 3,
	// 		protein: 1,
	// 	},
	// },
	// {
	// 	id: "butchery:cooked_",
	// 	foodData: {
	// 		hunger: 4,
	// 		decayModifier: 2,
	// 		saturation: 5,
	// 		protein: 2.0,
	// 	},
	// },
];

export const butcherMeatDict: RawCookedMeatPair[] = [];
allButcheryMeats.forEach((meat) => {
	if ((meat.id as string).includes("cooked_") == false) return;
	let rawMeatId = (meat.id as string).replace("cooked_", "");
	let rawMeat = allButcheryMeats.find((meat) => meat.id == rawMeatId);
	if (!rawMeat) {
		rawMeatId = (meat.id as string).replace("cooked_", "raw_");
		rawMeat = allButcheryMeats.find((meat) => meat.id == rawMeatId);
		if (!rawMeat) return;
	}
	butcherMeatDict.push({
		raw: rawMeat,
		cooked: meat,
	});
});

export function setCustomFoodsButchery(event: $TFCDataEventJS) {
	setNewTfcDrink(event, {
		id: "butchery:blood",
		drinkData: {
			intoxication: 300,
			effects: [{ id: "minecraft:nausea", amplifier: 0, duration: 300 }],
		},
		foodData: {
			water: 34,
			hunger: 2,
			protein: 0.5,
		},
	});

	allButcheryMeats.forEach((meat) => {
		setNewTfcFood(event, meat);
	});
}

export function setCustomHeatsButchery(event: $TFCDataEventJS) {
	allButcheryMeats.forEach((meat) => {
		event.itemHeat(meat.id as any, 1.0, null, null);
	});
}
