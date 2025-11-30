declare module "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IMinecartCollisionHandler, $IMinecartCollisionHandler$$Type } from "packages/net/minecraftforge/common/$IMinecartCollisionHandler"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $IForgeAbstractMinecart } from "packages/net/minecraftforge/common/extensions/$IForgeAbstractMinecart"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $AbstractMinecart$Type, $AbstractMinecart$Type$$Type } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart$Type"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $DynamicLightSource } from "packages/toni/sodiumdynamiclights/$DynamicLightSource"

export class $AbstractMinecart extends $Entity implements $IForgeAbstractMinecart, $DynamicLightSource {
public "activateMinecart"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canUseRail"(): boolean
public static "createMinecart"(level0: $Level$$Type, double1: double, double2: double, double3: double, type4: $AbstractMinecart$Type$$Type): $AbstractMinecart
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "destroy"(damageSource0: $DamageSource$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getCollisionHandler"(): $IMinecartCollisionHandler
public "getComparatorLevel"(): integer
public "getCurrentCartSpeedCapOnRail"(): float
public "getCurrentRailPosition"(): $BlockPos
public "getDamage"(): float
public "getDefaultDisplayBlockState"(): $BlockState
public "getDefaultDisplayOffset"(): integer
public "getDisplayBlockState"(): $BlockState
public "getDisplayName"(): $Component
public "getDisplayOffset"(): integer
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDragAir"(): double
public "getDropItem"(): $Item
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHurtDir"(): integer
public "getHurtTime"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMaxSpeedAirLateral"(): float
public "getMaxSpeedAirVertical"(): float
public "getMaxSpeedWithRail"(): double
public "getMinecartType"(): $AbstractMinecart$Type
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPos"(double0: double, double1: double, double2: double): $Vec3
public "getPosOffs"(double0: double, double1: double, double2: double, double3: double): $Vec3
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "handler$cll004$adastra$tick"(ci: $CallbackInfo$$Type): void
public "hasCustomDisplay"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "moveMinecartOnRail"(blockPos0: $BlockPos$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public static "registerCollisionHandler"(iMinecartCollisionHandler0: $IMinecartCollisionHandler$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCanUseRail"(boolean0: boolean): void
public "setCurrentCartSpeedCapOnRail"(float0: float): void
public "setCustomDisplay"(boolean0: boolean): void
public "setDamage"(float0: float): void
public "setDisplayBlockState"(blockState0: $BlockState$$Type): void
public "setDisplayOffset"(int0: integer): void
public "setDragAir"(double0: double): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setHurtDir"(int0: integer): void
public "setHurtTime"(int0: integer): void
public "setMaxSpeedAirLateral"(float0: float): void
public "setMaxSpeedAirVertical"(float0: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "collisionHandler"(): $IMinecartCollisionHandler
get "comparatorLevel"(): integer
get "currentCartSpeedCapOnRail"(): float
get "currentRailPosition"(): $BlockPos
get "damage"(): float
get "defaultDisplayBlockState"(): $BlockState
get "defaultDisplayOffset"(): integer
get "displayBlockState"(): $BlockState
get "displayName"(): $Component
get "displayOffset"(): integer
get "dragAir"(): double
get "dropItem"(): $Item
get "facing"(): $Direction
get "hurtDir"(): integer
get "hurtTime"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "maxSpeedAirLateral"(): float
get "maxSpeedAirVertical"(): float
get "maxSpeedWithRail"(): double
get "minecartType"(): $AbstractMinecart$Type
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "waterCreature"(): boolean
set "currentCartSpeedCapOnRail"(value: float)
set "customDisplay"(value: boolean)
set "damage"(value: float)
set "displayBlockState"(value: $BlockState$$Type)
set "displayOffset"(value: integer)
set "dragAir"(value: double)
set "hexereiDynamicLightEnabled"(value: boolean)
set "hurtDir"(value: integer)
set "hurtTime"(value: integer)
set "maxSpeedAirLateral"(value: float)
set "maxSpeedAirVertical"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartSpawner" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $BaseSpawner } from "packages/net/minecraft/world/level/$BaseSpawner"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartSpawner extends $AbstractMinecart {
constructor(entityType0: $EntityType$$Type<$MinecartSpawner$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawner"(): $BaseSpawner
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "spawner"(): $BaseSpawner
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$Boat$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $Boat$Type extends $Enum<$Boat$Type> implements $StringRepresentable {
static readonly "ACACIA": $Boat$Type
static readonly "BAMBOO": $Boat$Type
static readonly "BIRCH": $Boat$Type
static readonly "CHERRY": $Boat$Type
static readonly "CODEC": $StringRepresentable$EnumCodec<$Boat$Type>
static readonly "DARK_OAK": $Boat$Type
static readonly "JUNGLE": $Boat$Type
static readonly "MANGROVE": $Boat$Type
static readonly "OAK": $Boat$Type
static readonly "SPRUCE": $Boat$Type

public static "byId"(int0: integer): $Boat$Type
public static "byName"(string0: string): $Boat$Type
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getPlanks"(): $Block
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Boat$Type
public static "values"(): $Boat$Type[]
get "name"(): string
get "planks"(): $Block
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$AbstractMinecartContainer" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ContainerEntity } from "packages/net/minecraft/world/entity/vehicle/$ContainerEntity"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $SlotAccess } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Set$$Type } from "packages/java/util/$Set"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $AbstractMinecartContainer extends $AbstractMinecart implements $ContainerEntity {
public "addChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "asContainer"(): $Container
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "chestVehicleDestroyed"(damageSource0: $DamageSource$$Type, level1: $Level$$Type, entity2: $Entity$$Type): void
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearChestVehicleContent"(): void
public "clearContent"(): void
public "clearItemStacks"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestVehicleItem"(int0: integer): $ItemStack
public "getChestVehicleSlot"(int0: integer): $SlotAccess
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getContainerSize"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getItem"(): $ItemStack
public "getItemStacks"(): $NonNullList<$ItemStack>
public "getLevel"(): $Level
public "getLootTable"(): $ResourceLocation
public "getLootTableSeed"(): long
public "getMaxCartSpeedOnRail"(): float
public "getMaxStackSize"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStackInSlot"(slot: integer): $ItemStack
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "interactWithContainerVehicle"(player0: $Player$$Type): $InteractionResult
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChestVehicleEmpty"(): boolean
public "isChestVehicleStillValid"(player0: $Player$$Type): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isMutable"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRemoved"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "position"(): $Vec3
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "removeChestVehicleItem"(int0: integer, int1: integer): $ItemStack
public "removeChestVehicleItemNoUpdate"(int0: integer): $ItemStack
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Container
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setChanged"(): void
public "setChestVehicleItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type, long1: long): void
public "setLootTableSeed"(long0: long): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tryClear"(object0: any): void
public "unpackChestVehicleLootTable"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "containerSize"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "displayName"(): $Component
get "facing"(): $Direction
get "height"(): integer
get "item"(): $ItemStack
get "itemStacks"(): $NonNullList<$ItemStack>
get "level"(): $Level
get "lootTable"(): $ResourceLocation
get "lootTableSeed"(): long
get "maxCartSpeedOnRail"(): float
get "maxStackSize"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "slots"(): integer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "width"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chestVehicleEmpty"(): boolean
get "dynamicLightEnabledH"(): boolean
get "empty"(): boolean
get "empty"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "mutable"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "removed"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "lootTable"(value: $ResourceLocation$$Type)
set "lootTableSeed"(value: long)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$ContainerEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SlotAccess } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $ContainerEntity extends $Container, $MenuProvider {
"addChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"chestVehicleDestroyed"(damageSource0: $DamageSource$$Type, level1: $Level$$Type, entity2: $Entity$$Type): void
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"clearChestVehicleContent"(): void
"clearContent"(): void
"clearItemStacks"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countItem"(item0: $Item$$Type): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getChestVehicleItem"(int0: integer): $ItemStack
"getChestVehicleSlot"(int0: integer): $SlotAccess
"getContainerSize"(): integer
"getDisplayName"(): $Component
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getItemStacks"(): $NonNullList<$ItemStack>
"getLootTable"(): $ResourceLocation
"getLootTableSeed"(): long
"getMaxStackSize"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getWidth"(): integer
"hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"interactWithContainerVehicle"(player0: $Player$$Type): $InteractionResult
"isChestVehicleEmpty"(): boolean
"isChestVehicleStillValid"(player0: $Player$$Type): boolean
"isEmpty"(): boolean
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"isRemoved"(): boolean
"kjs$self"(): $Container
"level"(): $Level
"position"(): $Vec3
"readChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
"removeChestVehicleItem"(int0: integer, int1: integer): $ItemStack
"removeChestVehicleItemNoUpdate"(int0: integer): $ItemStack
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setChestVehicleItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setLootTable"(resourceLocation0: $ResourceLocation$$Type): void
"setLootTableSeed"(long0: long): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
"unpackChestVehicleLootTable"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "displayName"(): $Component
get "height"(): integer
get "itemStacks"(): $NonNullList<$ItemStack>
get "lootTable"(): $ResourceLocation
get "lootTableSeed"(): long
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "chestVehicleEmpty"(): boolean
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
get "removed"(): boolean
set "lootTable"(value: $ResourceLocation$$Type)
set "lootTableSeed"(value: long)
}

export namespace $ContainerEntity {
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
function tryClear(object0: any): void
}
export abstract class $ContainerEntity$$Static implements $ContainerEntity {
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartTNT" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartTNT extends $AbstractMinecart {
constructor(entityType0: $EntityType$$Type<$MinecartTNT$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFuse"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPrimed"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "primeFuse"(): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "facing"(): $Direction
get "fuse"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "primed"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AbstractMinecart$Type extends $Enum<$AbstractMinecart$Type> {
static readonly "CHEST": $AbstractMinecart$Type
static readonly "COMMAND_BLOCK": $AbstractMinecart$Type
static readonly "FURNACE": $AbstractMinecart$Type
static readonly "HOPPER": $AbstractMinecart$Type
static readonly "RIDEABLE": $AbstractMinecart$Type
static readonly "SPAWNER": $AbstractMinecart$Type
static readonly "TNT": $AbstractMinecart$Type

public static "valueOf"(string0: string): $AbstractMinecart$Type
public static "values"(): $AbstractMinecart$Type[]
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartChest" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $SlotAccess } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Set$$Type } from "packages/java/util/$Set"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $AbstractMinecartContainer } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecartContainer"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartChest extends $AbstractMinecartContainer {
constructor(entityType0: $EntityType$$Type<$MinecartChest$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "addChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "asContainer"(): $Container
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "chestVehicleDestroyed"(damageSource0: $DamageSource$$Type, level1: $Level$$Type, entity2: $Entity$$Type): void
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearChestVehicleContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestVehicleItem"(int0: integer): $ItemStack
public "getChestVehicleSlot"(int0: integer): $SlotAccess
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeight"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMaxStackSize"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStackInSlot"(slot: integer): $ItemStack
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "interactWithContainerVehicle"(player0: $Player$$Type): $InteractionResult
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChestVehicleEmpty"(): boolean
public "isChestVehicleStillValid"(player0: $Player$$Type): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isMutable"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRemoved"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "position"(): $Vec3
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "removeChestVehicleItem"(int0: integer, int1: integer): $ItemStack
public "removeChestVehicleItemNoUpdate"(int0: integer): $ItemStack
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Container
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setChestVehicleItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tryClear"(object0: any): void
public "unpackChestVehicleLootTable"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "displayName"(): $Component
get "facing"(): $Direction
get "height"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "maxStackSize"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "slots"(): integer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "width"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chestVehicleEmpty"(): boolean
get "dynamicLightEnabledH"(): boolean
get "empty"(): boolean
get "empty"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "mutable"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "removed"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$ChestBoat" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ContainerEntity } from "packages/net/minecraft/world/entity/vehicle/$ContainerEntity"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Boat, $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $SlotAccess } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Set$$Type } from "packages/java/util/$Set"
import { $HasCustomInventoryScreen } from "packages/net/minecraft/world/entity/$HasCustomInventoryScreen"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $ChestBoat extends $Boat implements $HasCustomInventoryScreen, $ContainerEntity {
constructor(entityType0: $EntityType$$Type<$Boat$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "addChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "asContainer"(): $Container
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBoatInFluid"(fluidState0: $FluidState$$Type): boolean
public "canBoatInFluid"(fluidType0: $FluidType$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "chestVehicleDestroyed"(damageSource0: $DamageSource$$Type, level1: $Level$$Type, entity2: $Entity$$Type): void
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearChestVehicleContent"(): void
public "clearContent"(): void
public "clearItemStacks"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "destroy"(damageSource0: $DamageSource$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestVehicleItem"(int0: integer): $ItemStack
public "getChestVehicleSlot"(int0: integer): $SlotAccess
public "getClassification"(boolean0: boolean): $MobCategory
public "getContainerSize"(): integer
public "getDisplayName"(): $Component
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getItem"(): $ItemStack
public "getItemStacks"(): $NonNullList<$ItemStack>
public "getLevel"(): $Level
public "getLootTable"(): $ResourceLocation
public "getLootTableSeed"(): long
public "getMaxStackSize"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStackInSlot"(slot: integer): $ItemStack
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "interactWithContainerVehicle"(player0: $Player$$Type): $InteractionResult
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChestVehicleEmpty"(): boolean
public "isChestVehicleStillValid"(player0: $Player$$Type): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isMutable"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRemoved"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "openCustomInventoryScreen"(player0: $Player$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "position"(): $Vec3
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "removeChestVehicleItem"(int0: integer, int1: integer): $ItemStack
public "removeChestVehicleItemNoUpdate"(int0: integer): $ItemStack
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Container
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setChanged"(): void
public "setChestVehicleItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type): void
public "setLootTableSeed"(long0: long): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "shouldUpdateFluidWhileRiding"(fluidState0: $FluidState$$Type, entity1: $Entity$$Type): boolean
public "spawn"(): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tryClear"(object0: any): void
public "unpackChestVehicleLootTable"(player0: $Player$$Type): void
public "unpackLootTable"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "block"(): $BlockContainerJS
get "containerSize"(): integer
get "displayName"(): $Component
get "displayName"(): $Component
get "facing"(): $Direction
get "height"(): integer
get "item"(): $ItemStack
get "itemStacks"(): $NonNullList<$ItemStack>
get "level"(): $Level
get "lootTable"(): $ResourceLocation
get "lootTableSeed"(): long
get "maxStackSize"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slots"(): integer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "width"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chestVehicleEmpty"(): boolean
get "dynamicLightEnabledH"(): boolean
get "empty"(): boolean
get "empty"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "mutable"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "removed"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "lootTable"(value: $ResourceLocation$$Type)
set "lootTableSeed"(value: long)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartFurnace" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartFurnace extends $AbstractMinecart {
constructor(entityType0: $EntityType$$Type<$MinecartFurnace$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "xPush"(): double
set "xPush"(value: double)
get "zPush"(): double
set "zPush"(value: double)
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$Boat" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Boat$Type, $Boat$Type$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat$Type"
import { $IForgeBoat } from "packages/net/minecraftforge/common/extensions/$IForgeBoat"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Boat$Status, $Boat$Status$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat$Status"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Boat extends $Entity implements $IForgeBoat {
static readonly "BUBBLE_TIME": integer
static readonly "PADDLE_LEFT": integer
static readonly "PADDLE_RIGHT": integer
static readonly "PADDLE_SOUND_TIME": double

constructor(entityType0: $EntityType$$Type<$Boat$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBoatInFluid"(fluidState0: $FluidState$$Type): boolean
public "canBoatInFluid"(fluidType0: $FluidType$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "canVehicleCollide"(entity0: $Entity$$Type, entity1: $Entity$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getBubbleAngle"(float0: float): float
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDamage"(): float
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDropItem"(): $Item
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getGroundFriction"(): float
public "getHurtDir"(): integer
public "getHurtTime"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getPaddleState"(int0: integer): boolean
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getRowingTime"(int0: integer, float1: float): float
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getVariant"(): $Boat$Type
public "getWaterLevelAbove"(): float
public "handler$clj000$adastra$floatBoat"(ci: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasEnoughSpaceFor"(entity0: $Entity$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setDamage"(float0: float): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setHurtDir"(int0: integer): void
public "setHurtTime"(int0: integer): void
public "setInput"(boolean0: boolean, boolean1: boolean, boolean2: boolean, boolean3: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPaddleState"(boolean0: boolean, boolean1: boolean): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setVariant"(type0: $Boat$Type$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "shouldUpdateFluidWhileRiding"(fluidState0: $FluidState$$Type, entity1: $Entity$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "lastYd"(): double
set "lastYd"(value: double)
get "outOfControlTicks"(): float
set "outOfControlTicks"(value: float)
get "status"(): $Boat$Status
set "status"(value: $Boat$Status$$Type)
get "block"(): $BlockContainerJS
get "damage"(): float
get "displayName"(): $Component
get "dropItem"(): $Item
get "facing"(): $Direction
get "groundFriction"(): float
get "hurtDir"(): integer
get "hurtTime"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "variant"(): $Boat$Type
get "waterLevelAbove"(): float
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "damage"(value: float)
set "hexereiDynamicLightEnabled"(value: boolean)
set "hurtDir"(value: integer)
set "hurtTime"(value: integer)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "variant"(value: $Boat$Type$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$Boat$Status" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Boat$Status extends $Enum<$Boat$Status> {
static readonly "IN_AIR": $Boat$Status
static readonly "IN_WATER": $Boat$Status
static readonly "ON_LAND": $Boat$Status
static readonly "UNDER_FLOWING_WATER": $Boat$Status
static readonly "UNDER_WATER": $Boat$Status

public static "valueOf"(string0: string): $Boat$Status
public static "values"(): $Boat$Status[]
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$Minecart" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Minecart extends $AbstractMinecart {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartHopper" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Hopper } from "packages/net/minecraft/world/level/block/entity/$Hopper"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $SlotAccess } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $Set$$Type } from "packages/java/util/$Set"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $AbstractMinecartContainer } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecartContainer"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartHopper extends $AbstractMinecartContainer implements $Hopper {
constructor(entityType0: $EntityType$$Type<$MinecartHopper$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "addChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "asContainer"(): $Container
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "chestVehicleDestroyed"(damageSource0: $DamageSource$$Type, level1: $Level$$Type, entity2: $Entity$$Type): void
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearChestVehicleContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestVehicleItem"(int0: integer): $ItemStack
public "getChestVehicleSlot"(int0: integer): $SlotAccess
public "getClassification"(boolean0: boolean): $MobCategory
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeight"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getLevelX"(): double
public "getLevelY"(): double
public "getLevelZ"(): double
public "getMaxCartSpeedOnRail"(): float
public "getMaxStackSize"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStackInSlot"(slot: integer): $ItemStack
public "getStepHeight"(): float
public "getSuckShape"(): $VoxelShape
public "getTeamId"(): string
public "getType"(): string
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "interactWithContainerVehicle"(player0: $Player$$Type): $InteractionResult
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChestVehicleEmpty"(): boolean
public "isChestVehicleStillValid"(player0: $Player$$Type): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isEnabled"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isMutable"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRemoved"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "position"(): $Vec3
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readChestVehicleSaveData"(compoundTag0: $CompoundTag$$Type): void
public "removeChestVehicleItem"(int0: integer, int1: integer): $ItemStack
public "removeChestVehicleItemNoUpdate"(int0: integer): $ItemStack
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Container
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setChestVehicleItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setEnabled"(boolean0: boolean): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "suckInItems"(): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tryClear"(object0: any): void
public "unpackChestVehicleLootTable"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "block"(): $BlockContainerJS
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "displayName"(): $Component
get "facing"(): $Direction
get "height"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "levelX"(): double
get "levelY"(): double
get "levelZ"(): double
get "maxCartSpeedOnRail"(): float
get "maxStackSize"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "slots"(): integer
get "stepHeight"(): float
get "suckShape"(): $VoxelShape
get "teamId"(): string
get "type"(): string
get "width"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chestVehicleEmpty"(): boolean
get "dynamicLightEnabledH"(): boolean
get "empty"(): boolean
get "empty"(): boolean
get "enabled"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "mutable"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "removed"(): boolean
get "waterCreature"(): boolean
set "enabled"(value: boolean)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/vehicle/$MinecartCommandBlock" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $AbstractMinecart } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $BaseCommandBlock } from "packages/net/minecraft/world/level/$BaseCommandBlock"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $MinecartCommandBlock extends $AbstractMinecart {
constructor(entityType0: $EntityType$$Type<$MinecartCommandBlock$$Type>, level1: $Level$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRidden"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getCommandBlock"(): $BaseCommandBlock
public "getComparatorLevel"(): integer
public "getCurrentRailPosition"(): $BlockPos
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMaxCartSpeedOnRail"(): float
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSlopeAdjustment"(): double
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPoweredCart"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldDoRailFunctions"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "block"(): $BlockContainerJS
get "commandBlock"(): $BaseCommandBlock
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "maxCartSpeedOnRail"(): float
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "slopeAdjustment"(): double
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "poweredCart"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

