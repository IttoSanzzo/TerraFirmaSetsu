declare module "packages/net/minecraft/world/food/$FoodProperties" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $Supplier } from "packages/java/util/function/$Supplier"

export class $FoodProperties {
readonly "effects": $List<$Pair<$Supplier<$MobEffectInstance>, float>>

/** @deprecated */
constructor(int0: integer, float1: float, boolean2: boolean, boolean3: boolean, boolean4: boolean, list5: $List$$Type<$Pair$$Type<$MobEffectInstance$$Type, float>>)

public "canAlwaysEat"(): boolean
public "getEffects"(): $List<$Pair<$MobEffectInstance, float>>
public "getNutrition"(): integer
public "getSaturationModifier"(): float
public "isFastFood"(): boolean
public "isMeat"(): boolean
get "nutrition"(): integer
get "saturationModifier"(): float
get "fastFood"(): boolean
get "meat"(): boolean
}
}

declare module "packages/net/minecraft/world/food/$FoodData" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FoodData {
constructor()

public "addAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "addExhaustion"(float0: float): void
public "eat"(item0: $Item$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type): void
public "eat"(int0: integer, float1: float): void
/** @deprecated */
public "eat"(item0: $Item$$Type, itemStack1: $ItemStack$$Type): void
public "getExhaustionLevel"(): float
public "getFoodLevel"(): integer
public "getLastFoodLevel"(): integer
public "getSaturationLevel"(): float
public "needsFood"(): boolean
public "readAdditionalSaveData"(compoundTag0: $CompoundTag$$Type): void
public "setExhaustion"(float0: float): void
public "setFoodLevel"(int0: integer): void
public "setSaturation"(float0: float): void
public "tick"(player0: $Player$$Type): void
get "exhaustionLevel"(): float
get "foodLevel"(): integer
get "lastFoodLevel"(): integer
get "saturationLevel"(): float
set "exhaustion"(value: float)
set "foodLevel"(value: integer)
set "saturation"(value: float)
}
}

