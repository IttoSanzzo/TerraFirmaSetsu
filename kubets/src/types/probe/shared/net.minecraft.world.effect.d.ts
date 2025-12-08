declare module "packages/net/minecraft/world/effect/$MobEffectInstance$FactorData" {
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MobEffectInstance$FactorData {
static readonly "CODEC": $Codec<$MobEffectInstance$FactorData>

constructor(int0: integer, float1: float, float2: float, float3: float, int4: integer, float5: float, boolean6: boolean)
constructor(int0: integer)

public "getFactor"(livingEntity0: $LivingEntity$$Type, float1: float): float
public "tick"(mobEffectInstance0: $MobEffectInstance$$Type): void
}
}

declare module "packages/net/minecraft/world/effect/$MobEffectInstance" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $MobEffectInstance$FactorData, $MobEffectInstance$FactorData$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance$FactorData"
import { $MobEffectInstanceAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$MobEffectInstanceAccessor"
import { $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $IForgeMobEffectInstance } from "packages/net/minecraftforge/common/extensions/$IForgeMobEffectInstance"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $MobEffect, $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"

export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $IForgeMobEffectInstance, $MobEffectInstanceAccessor {
static readonly "INFINITE_DURATION": integer

constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean, boolean5: boolean)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer, boolean3: boolean, boolean4: boolean, boolean5: boolean, mobEffectInstance6: $MobEffectInstance$$Type, optional7: $Optional$$Type<$MobEffectInstance$FactorData$$Type>)
constructor(mobEffectInstance0: $MobEffectInstance$$Type)
constructor(mobEffect0: $MobEffect$$Type)
constructor(mobEffect0: $MobEffect$$Type, int1: integer)
constructor(mobEffect0: $MobEffect$$Type, int1: integer, int2: integer)

public "addCurativeItem"(itemStack0: $ItemStack$$Type): void
public "applyEffect"(livingEntity0: $LivingEntity$$Type): void
public "compareTo"(mobEffectInstance0: $MobEffectInstance$$Type): integer
public "endsWithin"(int0: integer): boolean
public "getAmplifier"(): integer
public "getCurativeItems"(): $List<$ItemStack>
public "getDescriptionId"(): string
public "getDuration"(): integer
public "getEffect"(): $MobEffect
public "getFactorData"(): $Optional<$MobEffectInstance$FactorData>
public "isAmbient"(): boolean
public "isCurativeItem"(itemStack0: $ItemStack$$Type): boolean
public "isInfiniteDuration"(): boolean
public "isVisible"(): boolean
public static "load"(compoundTag0: $CompoundTag$$Type): $MobEffectInstance
public "mapDuration"(int2IntFunction0: $Int2IntFunction$$Type): integer
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setCurativeItems"(list0: $List$$Type<$ItemStack$$Type>): void
public "showIcon"(): boolean
public "tick"(livingEntity0: $LivingEntity$$Type, runnable1: $Runnable$$Type): boolean
public "update"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
public "writeCurativeItems"(compoundTag0: $CompoundTag$$Type): void
get "amplifier"(): integer
set "amplifier"(value: integer)
get "duration"(): integer
set "duration"(value: integer)
get "hiddenEffect"(): $MobEffectInstance
set "hiddenEffect"(value: $MobEffectInstance$$Type)
get "curativeItems"(): $List<$ItemStack>
get "descriptionId"(): string
get "effect"(): $MobEffect
get "factorData"(): $Optional<$MobEffectInstance$FactorData>
get "ambient"(): boolean
get "infiniteDuration"(): boolean
get "visible"(): boolean
set "curativeItems"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "packages/net/minecraft/world/effect/$AbsoptionMobEffect" {
import { $List } from "packages/java/util/$List"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $AbsoptionMobEffect extends $MobEffect {
public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "packages/net/minecraft/world/effect/$HealthBoostMobEffect" {
import { $List } from "packages/java/util/$List"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $MobEffectCategory$$Type } from "packages/net/minecraft/world/effect/$MobEffectCategory"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $HealthBoostMobEffect extends $MobEffect {
constructor(mobEffectCategory0: $MobEffectCategory$$Type, int1: integer)

public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "packages/net/minecraft/world/effect/$InstantenousMobEffect" {
import { $List } from "packages/java/util/$List"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $MobEffectCategory$$Type } from "packages/net/minecraft/world/effect/$MobEffectCategory"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $InstantenousMobEffect extends $MobEffect {
constructor(mobEffectCategory0: $MobEffectCategory$$Type, int1: integer)

public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "packages/net/minecraft/world/effect/$AttackDamageMobEffect" {
import { $List } from "packages/java/util/$List"
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $AttackDamageMobEffect extends $MobEffect {
public "getCurativeItems"(): $List<$ItemStack>
public "getSortOrder"(mobEffectInstance0: $MobEffectInstance$$Type): integer
get "curativeItems"(): $List<$ItemStack>
}
}

declare module "packages/net/minecraft/world/effect/$MobEffectCategory" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
static readonly "BENEFICIAL": $MobEffectCategory
static readonly "HARMFUL": $MobEffectCategory
static readonly "NEUTRAL": $MobEffectCategory

public "getTooltipFormatting"(): $ChatFormatting
public static "valueOf"(string0: string): $MobEffectCategory
public static "values"(): $MobEffectCategory[]
get "tooltipFormatting"(): $ChatFormatting
}
}

