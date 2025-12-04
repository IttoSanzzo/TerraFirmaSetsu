declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$PostFunction" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $EnchantmentBuilder$PostFunction {
"apply"(livingEntity0: $LivingEntity$$Type, entity1: $Entity$$Type, int2: integer): void
}

export namespace $EnchantmentBuilder$PostFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$PostFunction$$Static implements $EnchantmentBuilder$PostFunction {
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder$EffectTickCallback" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $MobEffectBuilder$EffectTickCallback {
"applyEffectTick"(livingEntity0: $LivingEntity$$Type, int1: integer): void
}

export namespace $MobEffectBuilder$EffectTickCallback {
const probejs$$marker: never
}
export abstract class $MobEffectBuilder$EffectTickCallback$$Static implements $MobEffectBuilder$EffectTickCallback {
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$PaintingVariantBuilder" {
import { $PaintingVariant } from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $PaintingVariantBuilder extends $BuilderBase<$PaintingVariant> {
constructor(i: $ResourceLocation$$Type)

public "height"(height: integer): $PaintingVariantBuilder
public "width"(width: integer): $PaintingVariantBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder" {
import { $Enchantment$Rarity$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $EnchantmentCategory$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import { $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $EnchantmentBuilder$DamageBonusFunction$$Type } from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageBonusFunction"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $EnchantmentBuilder$DamageProtectionFunction$$Type } from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageProtectionFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $EnchantmentBuilder$PostFunction$$Type } from "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$PostFunction"

export class $EnchantmentBuilder extends $BuilderBase<$Enchantment> {
constructor(i: $ResourceLocation$$Type)

public "armor"(): $EnchantmentBuilder
public "armorChest"(): $EnchantmentBuilder
public "armorFeet"(): $EnchantmentBuilder
public "armorHead"(): $EnchantmentBuilder
public "armorLegs"(): $EnchantmentBuilder
public "bow"(): $EnchantmentBuilder
public "breakable"(): $EnchantmentBuilder
public "canEnchant"(i: $Object2BooleanFunction$$Type<$ItemStack$$Type>): $EnchantmentBuilder
public "category"(c: $EnchantmentCategory$$Type): $EnchantmentBuilder
public "checkCompatibility"(i: $Object2BooleanFunction$$Type<$ResourceLocation$$Type>): $EnchantmentBuilder
public "crossbow"(): $EnchantmentBuilder
public "curse"(): $EnchantmentBuilder
public "damageBonus"(i: $EnchantmentBuilder$DamageBonusFunction$$Type): $EnchantmentBuilder
public "damageProtection"(i: $EnchantmentBuilder$DamageProtectionFunction$$Type): $EnchantmentBuilder
public "fishingRod"(): $EnchantmentBuilder
public "maxCost"(i: $Int2IntFunction$$Type): $EnchantmentBuilder
public "maxLevel"(i: integer): $EnchantmentBuilder
public "minCost"(i: $Int2IntFunction$$Type): $EnchantmentBuilder
public "minLevel"(i: integer): $EnchantmentBuilder
public "postAttack"(i: $EnchantmentBuilder$PostFunction$$Type): $EnchantmentBuilder
public "postHurt"(i: $EnchantmentBuilder$PostFunction$$Type): $EnchantmentBuilder
public "rare"(): $EnchantmentBuilder
public "rarity"(r: $Enchantment$Rarity$$Type): $EnchantmentBuilder
public "slots"(s: $EquipmentSlot$$Type[]): $EnchantmentBuilder
public "treasureOnly"(): $EnchantmentBuilder
public "trident"(): $EnchantmentBuilder
public "uncommon"(): $EnchantmentBuilder
public "undiscoverable"(): $EnchantmentBuilder
public "untradeable"(): $EnchantmentBuilder
public "vanishable"(): $EnchantmentBuilder
public "veryRare"(): $EnchantmentBuilder
public "weapon"(): $EnchantmentBuilder
public "wearable"(): $EnchantmentBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$PoiTypeBuilder" {
import { $PoiType } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $PoiTypeBuilder extends $BuilderBase<$PoiType> {
constructor(i: $ResourceLocation$$Type)

public "block"(r: $Block$$Type): $PoiTypeBuilder
public "blocks"(r: $BlockState$$Type[]): $PoiTypeBuilder
public "maxTickets"(i: integer): $PoiTypeBuilder
public "validRange"(i: integer): $PoiTypeBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$CustomStatBuilder" {
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomStatBuilder extends $BuilderBase<$ResourceLocation> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$SoundEventBuilder" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SoundEventBuilder extends $BuilderBase<$SoundEvent> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$BasicMobEffect$Builder" {
import { $MobEffectBuilder } from "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $BasicMobEffect$Builder extends $MobEffectBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $MobEffect
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$PotionBuilder" {
import { $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"
import { $Potion } from "packages/net/minecraft/world/item/alchemy/$Potion"

export class $PotionBuilder extends $BuilderBase<$Potion> {
constructor(i: $ResourceLocation$$Type)

public "addEffect"(effect: $MobEffectInstance$$Type): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance$$Type): $PotionBuilder
public "effect"(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean): $PotionBuilder
public "effect"(effect: $MobEffect$$Type): $PotionBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder" {
import { $Color$$Type } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $MobEffectBuilder$EffectTickCallback$$Type } from "packages/dev/latvian/mods/kubejs/misc/$MobEffectBuilder$EffectTickCallback"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MobEffectCategory$$Type } from "packages/net/minecraft/world/effect/$MobEffectCategory"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"

export class $MobEffectBuilder extends $BuilderBase<$MobEffect> {
constructor(i: $ResourceLocation$$Type)

public "beneficial"(): $MobEffectBuilder
public "category"(c: $MobEffectCategory$$Type): $MobEffectBuilder
public "color"(col: $Color$$Type): $MobEffectBuilder
public "effectTick"(effectTick: $MobEffectBuilder$EffectTickCallback$$Type): $MobEffectBuilder
public "harmful"(): $MobEffectBuilder
public "modifyAttribute"(attribute: $ResourceLocation$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): $MobEffectBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageBonusFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EnchantmentBuilder$DamageBonusFunction {
"getDamageBonus"(int0: integer, string1: string): float
}

export namespace $EnchantmentBuilder$DamageBonusFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$DamageBonusFunction$$Static implements $EnchantmentBuilder$DamageBonusFunction {
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$VillagerTypeBuilder" {
import { $VillagerType } from "packages/net/minecraft/world/entity/npc/$VillagerType"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $VillagerTypeBuilder extends $BuilderBase<$VillagerType> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$ParticleTypeBuilder" {
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"
import { $ParticleOptions$Deserializer$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ParticleTypeBuilder extends $BuilderBase<$ParticleType<any>> {
constructor(i: $ResourceLocation$$Type)

public "deserializer"(d: $ParticleOptions$Deserializer$$Type<any>): $ParticleTypeBuilder
public "overrideLimiter"(o: boolean): $ParticleTypeBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$VillagerProfessionBuilder" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $VillagerProfession } from "packages/net/minecraft/world/entity/npc/$VillagerProfession"

export class $VillagerProfessionBuilder extends $BuilderBase<$VillagerProfession> {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $VillagerProfession
public "poiType"(t: $ResourceLocation$$Type): $VillagerProfessionBuilder
public "poiTypeTag"(t: $ResourceLocation$$Type): $VillagerProfessionBuilder
public "requestedItems"(t: $Item$$Type[]): $VillagerProfessionBuilder
public "secondaryPoi"(t: $Block$$Type[]): $VillagerProfessionBuilder
public "workSound"(t: $SoundEvent$$Type): $VillagerProfessionBuilder
}
}

declare module "packages/dev/latvian/mods/kubejs/misc/$EnchantmentBuilder$DamageProtectionFunction" {
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $EnchantmentBuilder$DamageProtectionFunction {
"getDamageProtection"(int0: integer, damageSource1: $DamageSource$$Type): integer
}

export namespace $EnchantmentBuilder$DamageProtectionFunction {
const probejs$$marker: never
}
export abstract class $EnchantmentBuilder$DamageProtectionFunction$$Static implements $EnchantmentBuilder$DamageProtectionFunction {
}
}

