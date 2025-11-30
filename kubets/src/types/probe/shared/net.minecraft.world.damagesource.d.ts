declare module "packages/net/minecraft/world/damagesource/$DamageSource" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $DamageType, $DamageType$$Type } from "packages/net/minecraft/world/damagesource/$DamageType"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $DamageSourceExtension } from "packages/dev/shadowsoffire/apotheosis/util/$DamageSourceExtension"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $DamageSource implements $DamageSourceExtension {
constructor(holder0: $Holder$$Type<$DamageType$$Type>, vec31: $Vec3$$Type)
constructor(holder0: $Holder$$Type<$DamageType$$Type>, entity1: $Entity$$Type, entity2: $Entity$$Type)
constructor(holder0: $Holder$$Type<$DamageType$$Type>, entity1: $Entity$$Type, entity2: $Entity$$Type, vec33: $Vec3$$Type)
constructor(holder0: $Holder$$Type<$DamageType$$Type>)
constructor(holder0: $Holder$$Type<$DamageType$$Type>, entity1: $Entity$$Type)

public "addTag"(tagKey0: $TagKey$$Type<any>): void
public "getActual"(): $Entity
public "getFoodExhaustion"(): float
public "getImmediate"(): $Entity
public "getLocalizedDeathMessage"(livingEntity0: $LivingEntity$$Type): $Component
public "getPlayer"(): $Player
public "getSourcePosition"(): $Vec3
public "getType"(): string
public "handler$zje000$apoth_isSourceInExtraTags"(tagKey0: $TagKey$$Type<any>, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "is"(tagKey0: $TagKey$$Type<$DamageType$$Type>): boolean
public "is"(resourceKey0: $ResourceKey$$Type<$DamageType>): boolean
public "isCreativePlayer"(): boolean
public "isIndirect"(): boolean
public "removeTag"(tagKey0: $TagKey$$Type<any>): void
public "scalesWithDifficulty"(): boolean
public "sourcePositionRaw"(): $Vec3
public "type"(): $DamageType
public "typeHolder"(): $Holder<$DamageType>
get "actual"(): $Entity
get "foodExhaustion"(): float
get "immediate"(): $Entity
get "player"(): $Player
get "sourcePosition"(): $Vec3
get "creativePlayer"(): boolean
get "indirect"(): boolean
}
}

declare module "packages/net/minecraft/world/damagesource/$FallLocation" {
import { $Record } from "packages/java/lang/$Record"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FallLocation extends $Record {
static readonly "GENERIC": $FallLocation
static readonly "LADDER": $FallLocation
static readonly "OTHER_CLIMBABLE": $FallLocation
static readonly "SCAFFOLDING": $FallLocation
static readonly "TWISTING_VINES": $FallLocation
static readonly "VINES": $FallLocation
static readonly "WATER": $FallLocation
static readonly "WEEPING_VINES": $FallLocation

constructor(string0: string)

public static "blockToFallLocation"(blockState0: $BlockState$$Type): $FallLocation
public static "getCurrentFallLocation"(livingEntity0: $LivingEntity$$Type): $FallLocation
public "id"(): string
public "languageKey"(): string
}
}

declare module "packages/net/minecraft/world/damagesource/$CombatTracker" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $List } from "packages/java/util/$List"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $CombatEntry } from "packages/net/minecraft/world/damagesource/$CombatEntry"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CombatTracker {
static readonly "RESET_COMBAT_STATUS_TIME": integer
static readonly "RESET_DAMAGE_STATUS_TIME": integer
readonly "entries": $List<$CombatEntry>

constructor(livingEntity0: $LivingEntity$$Type)

public "getCombatDuration"(): integer
public "getDeathMessage"(): $Component
public "getMostSignificantFall"(): $CombatEntry
public "recheckStatus"(): void
public "recordDamage"(damageSource0: $DamageSource$$Type, float1: float): void
get "inCombat"(): boolean
set "inCombat"(value: boolean)
get "lastDamageTime"(): integer
set "lastDamageTime"(value: integer)
get "combatDuration"(): integer
get "deathMessage"(): $Component
get "mostSignificantFall"(): $CombatEntry
}
}

declare module "packages/net/minecraft/world/damagesource/$DamageSources" {
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $FireworkRocketEntity$$Type } from "packages/net/minecraft/world/entity/projectile/$FireworkRocketEntity"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $WitherSkull$$Type } from "packages/net/minecraft/world/entity/projectile/$WitherSkull"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $DamageType } from "packages/net/minecraft/world/damagesource/$DamageType"
import { $AbstractArrow$$Type } from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Fireball$$Type } from "packages/net/minecraft/world/entity/projectile/$Fireball"
import { $DamageSourcesAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$DamageSourcesAccess"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $DamageSources implements $DamageSourcesAccess {
readonly "damageTypes": $Registry<$DamageType>

constructor(registryAccess0: $RegistryAccess$$Type)

public "anvil"(entity0: $Entity$$Type): $DamageSource
public "arrow"(abstractArrow0: $AbstractArrow$$Type, entity1: $Entity$$Type): $DamageSource
public "badRespawnPointExplosion"(vec30: $Vec3$$Type): $DamageSource
public "cactus"(): $DamageSource
public "cramming"(): $DamageSource
public "dragonBreath"(): $DamageSource
public "drown"(): $DamageSource
public "dryOut"(): $DamageSource
public "explosion"(explosion0: $Explosion$$Type): $DamageSource
public "explosion"(entity0: $Entity$$Type, entity1: $Entity$$Type): $DamageSource
public "fall"(): $DamageSource
public "fallingBlock"(entity0: $Entity$$Type): $DamageSource
public "fallingStalactite"(entity0: $Entity$$Type): $DamageSource
public "fellOutOfWorld"(): $DamageSource
public "fireball"(fireball0: $Fireball$$Type, entity1: $Entity$$Type): $DamageSource
public "fireworks"(fireworkRocketEntity0: $FireworkRocketEntity$$Type, entity1: $Entity$$Type): $DamageSource
public "flyIntoWall"(): $DamageSource
public "freeze"(): $DamageSource
public "generic"(): $DamageSource
public "genericKill"(): $DamageSource
public "hotFloor"(): $DamageSource
public "inFire"(): $DamageSource
public "inWall"(): $DamageSource
public "indirectMagic"(entity0: $Entity$$Type, entity1: $Entity$$Type): $DamageSource
public "lava"(): $DamageSource
public "lightningBolt"(): $DamageSource
public "magic"(): $DamageSource
public "mobAttack"(livingEntity0: $LivingEntity$$Type): $DamageSource
public "mobProjectile"(entity0: $Entity$$Type, livingEntity1: $LivingEntity$$Type): $DamageSource
public "noAggroMobAttack"(livingEntity0: $LivingEntity$$Type): $DamageSource
public "onFire"(): $DamageSource
public "outOfBorder"(): $DamageSource
public "playerAttack"(player0: $Player$$Type): $DamageSource
public "sonicBoom"(entity0: $Entity$$Type): $DamageSource
public "source"(resourceKey0: $ResourceKey$$Type<$DamageType>): $DamageSource
public "source"(resourceKey0: $ResourceKey$$Type<$DamageType>, entity1: $Entity$$Type): $DamageSource
public "source"(resourceKey0: $ResourceKey$$Type<$DamageType>, entity1: $Entity$$Type, entity2: $Entity$$Type): $DamageSource
public "stalagmite"(): $DamageSource
public "starve"(): $DamageSource
public "sting"(livingEntity0: $LivingEntity$$Type): $DamageSource
public "sweetBerryBush"(): $DamageSource
public "thorns"(entity0: $Entity$$Type): $DamageSource
public "thrown"(entity0: $Entity$$Type, entity1: $Entity$$Type): $DamageSource
public "trident"(entity0: $Entity$$Type, entity1: $Entity$$Type): $DamageSource
public "wither"(): $DamageSource
public "witherSkull"(witherSkull0: $WitherSkull$$Type, entity1: $Entity$$Type): $DamageSource
}
}

declare module "packages/net/minecraft/world/damagesource/$DeathMessageType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $DeathMessageType extends $Enum<$DeathMessageType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$DeathMessageType>
static readonly "DEFAULT": $DeathMessageType
static readonly "FALL_VARIANTS": $DeathMessageType
static readonly "INTENTIONAL_GAME_DESIGN": $DeathMessageType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DeathMessageType
public static "values"(): $DeathMessageType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/damagesource/$DamageScaling" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $DamageScaling extends $Enum<$DamageScaling> implements $StringRepresentable {
static readonly "ALWAYS": $DamageScaling
static readonly "CODEC": $Codec<$DamageScaling>
static readonly "NEVER": $DamageScaling
static readonly "WHEN_CAUSED_BY_LIVING_NON_PLAYER": $DamageScaling

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DamageScaling
public static "values"(): $DamageScaling[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/damagesource/$CombatEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $DamageSource, $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $FallLocation, $FallLocation$$Type } from "packages/net/minecraft/world/damagesource/$FallLocation"

export class $CombatEntry extends $Record {
constructor(damageSource0: $DamageSource$$Type, float1: float, fallLocation2: $FallLocation$$Type, float3: float)

public "damage"(): float
public "fallDistance"(): float
public "fallLocation"(): $FallLocation
public "source"(): $DamageSource
}
}

declare module "packages/net/minecraft/world/damagesource/$DamageEffects" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $DamageEffects extends $Enum<$DamageEffects> implements $StringRepresentable {
static readonly "BURNING": $DamageEffects
static readonly "CODEC": $Codec<$DamageEffects>
static readonly "DROWNING": $DamageEffects
static readonly "FREEZING": $DamageEffects
static readonly "HURT": $DamageEffects
static readonly "POKING": $DamageEffects
static readonly "THORNS": $DamageEffects

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "sound"(): $SoundEvent
public static "valueOf"(string0: string): $DamageEffects
public static "values"(): $DamageEffects[]
get "serializedName"(): string
}
}

