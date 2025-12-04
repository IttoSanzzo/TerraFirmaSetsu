declare module "packages/net/minecraft/world/entity/animal/$MushroomCow" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IForgeShearable } from "packages/net/minecraftforge/common/$IForgeShearable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Cow } from "packages/net/minecraft/world/entity/animal/$Cow"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $MushroomCow$MushroomType, $MushroomCow$MushroomType$$Type } from "packages/net/minecraft/world/entity/animal/$MushroomCow$MushroomType"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Shearable } from "packages/net/minecraft/world/entity/$Shearable"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $MushroomCowAccessor } from "packages/vazkii/botania/mixin/$MushroomCowAccessor"

export class $MushroomCow extends $Cow implements $Shearable, $IForgeShearable, $MushroomCowAccessor {
constructor(entityType0: $EntityType$$Type<$MushroomCow$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkMushroomSpawnRules"(entityType0: $EntityType$$Type<$MushroomCow$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $MushroomCow
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): $MushroomCow$MushroomType
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isShearable"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onSheared"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer): $List<$ItemStack>
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readyForShearing"(): boolean
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(mushroomType0: $MushroomCow$MushroomType$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shear"(soundSource0: $SoundSource$$Type): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): $MushroomCow$MushroomType
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $MushroomCow$MushroomType$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl$Variant" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Axolotl$Variant extends $Enum<$Axolotl$Variant> implements $StringRepresentable {
static readonly "BLUE": $Axolotl$Variant
static readonly "CODEC": $Codec<$Axolotl$Variant>
static readonly "CYAN": $Axolotl$Variant
static readonly "GOLD": $Axolotl$Variant
static readonly "LUCY": $Axolotl$Variant
static readonly "WILD": $Axolotl$Variant

public static "byId"(int0: integer): $Axolotl$Variant
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "getCommonSpawnVariant"(randomSource0: $RandomSource$$Type): $Axolotl$Variant
public "getId"(): integer
public "getName"(): string
public static "getRareSpawnVariant"(randomSource0: $RandomSource$$Type): $Axolotl$Variant
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Axolotl$Variant
public static "values"(): $Axolotl$Variant[]
get "id"(): integer
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$FlyingAnimal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlyingAnimal {
"isFlying"(): boolean
get "flying"(): boolean
}

export namespace $FlyingAnimal {
const probejs$$marker: never
}
export abstract class $FlyingAnimal$$Static implements $FlyingAnimal {
}
}

declare module "packages/net/minecraft/world/entity/animal/$Wolf" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $NeutralMob } from "packages/net/minecraft/world/entity/$NeutralMob"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $TamableAnimal } from "packages/net/minecraft/world/entity/$TamableAnimal"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Wolf extends $TamableAnimal implements $NeutralMob {
static readonly "PREY_SELECTOR": $Predicate<$LivingEntity>
"isWet": boolean

constructor(entityType0: $EntityType$$Type<$Wolf$$Type>, level1: $Level$$Type)

public "addPersistentAngerSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canAttack"(livingEntity0: $LivingEntity$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkWolfSpawnRules"(entityType0: $EntityType$$Type<$Wolf$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public "forgetCurrentTargetAndRefreshUniversalAnger"(): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBodyRollAngle"(float0: float, float1: float): float
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCollarColor"(): $DyeColor
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadRollAngle"(float0: float): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLastHurtByMob"(): $LivingEntity
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPersistentAngerTarget"(): $UUID
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRemainingPersistentAngerTime"(): integer
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTailAngle"(): float
public "getTarget"(): $LivingEntity
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getWetShade"(float0: float): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAngry"(): boolean
public "isAngryAt"(livingEntity0: $LivingEntity$$Type): boolean
public "isAngryAtAllPlayers"(level0: $Level$$Type): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInterested"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWet"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerDied"(player0: $Player$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readPersistentAngerSaveData"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCollarColor"(dyeColor0: $DyeColor$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setIsInterested"(boolean0: boolean): void
public "setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
public "setLastHurtByPlayer"(player0: $Player$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPersistentAngerTarget"(uUID0: $UUID$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRemainingPersistentAngerTime"(int0: integer): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startPersistentAngerTimer"(): void
public "stopBeingAngry"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updatePersistentAnger"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "collarColor"(): $DyeColor
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "lastHurtByMob"(): $LivingEntity
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "persistentAngerTarget"(): $UUID
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "remainingPersistentAngerTime"(): integer
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "tailAngle"(): float
get "target"(): $LivingEntity
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "angry"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "interested"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "wet"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "collarColor"(value: $DyeColor$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "persistentAngerTarget"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "remainingPersistentAngerTime"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "target"(value: $LivingEntity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$TropicalFish$Pattern" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $TropicalFish$Base } from "packages/net/minecraft/world/entity/animal/$TropicalFish$Base"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TropicalFish$Pattern extends $Enum<$TropicalFish$Pattern> implements $StringRepresentable {
static readonly "BETTY": $TropicalFish$Pattern
static readonly "BLOCKFISH": $TropicalFish$Pattern
static readonly "BRINELY": $TropicalFish$Pattern
static readonly "CLAYFISH": $TropicalFish$Pattern
static readonly "CODEC": $Codec<$TropicalFish$Pattern>
static readonly "DASHER": $TropicalFish$Pattern
static readonly "FLOPPER": $TropicalFish$Pattern
static readonly "GLITTER": $TropicalFish$Pattern
static readonly "KOB": $TropicalFish$Pattern
static readonly "SNOOPER": $TropicalFish$Pattern
static readonly "SPOTTY": $TropicalFish$Pattern
static readonly "STRIPEY": $TropicalFish$Pattern
static readonly "SUNSTREAK": $TropicalFish$Pattern

public "base"(): $TropicalFish$Base
public static "byId"(int0: integer): $TropicalFish$Pattern
public "displayName"(): $Component
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getPackedId"(): integer
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TropicalFish$Pattern
public static "values"(): $TropicalFish$Pattern[]
get "packedId"(): integer
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$WaterAnimal" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $PathfinderMob } from "packages/net/minecraft/world/entity/$PathfinderMob"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $WaterAnimal extends $PathfinderMob {
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkSurfaceWaterAnimalSpawnRules"(entityType0: $EntityType$$Type<$WaterAnimal$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Mule" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractChestedHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractChestedHorse"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Mule extends $AbstractChestedHorse {
constructor(entityType0: $EntityType$$Type<$Mule$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$TropicalFish" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $TropicalFish$Pattern, $TropicalFish$Pattern$$Type } from "packages/net/minecraft/world/entity/animal/$TropicalFish$Pattern"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $DyeColor } from "packages/net/minecraft/world/item/$DyeColor"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $TropicalFish$Variant } from "packages/net/minecraft/world/entity/animal/$TropicalFish$Variant"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AbstractSchoolingFish } from "packages/net/minecraft/world/entity/animal/$AbstractSchoolingFish"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $TropicalFish extends $AbstractSchoolingFish implements $VariantHolder<$TropicalFish$Pattern> {
static readonly "BUCKET_VARIANT_TAG": string
static readonly "COMMON_VARIANTS": $List<$TropicalFish$Variant>

constructor(entityType0: $EntityType$$Type<$TropicalFish$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkTropicalFishSpawnRules"(entityType0: $EntityType$$Type<$TropicalFish$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBaseColor"(): $DyeColor
public static "getBaseColor"(int0: integer): $DyeColor
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public static "getPattern"(int0: integer): $TropicalFish$Pattern
public "getPatternColor"(): $DyeColor
public static "getPatternColor"(int0: integer): $DyeColor
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public static "getPredefinedName"(int0: integer): string
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(pattern0: $TropicalFish$Pattern$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "baseColor"(): $DyeColor
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "patternColor"(): $DyeColor
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $TropicalFish$Pattern$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/goat/$Goat" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal, $Animal$$Type } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions, $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Goat extends $Animal {
static readonly "GOAT_FALL_DAMAGE_REDUCTION": integer
static readonly "GOAT_SCREAMING_CHANCE": double
static readonly "LONG_JUMPING_DIMENSIONS": $EntityDimensions
static readonly "UNIHORN_CHANCE": double

constructor(entityType0: $EntityType$$Type<$Goat$$Type>, level1: $Level$$Type)

public "addHorns"(): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkGoatSpawnRules"(entityType0: $EntityType$$Type<$Animal$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "createHorn"(): $ItemStack
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropHorn"(): boolean
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Goat>
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $Goat
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getRammingXHeadRot"(): float
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasLeftHorn"(): boolean
public "hasRightHorn"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isScreamingGoat"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "removeHorns"(): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setScreamingGoat"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Goat>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "rammingXHeadRot"(): float
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "screamingGoat"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "screamingGoat"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$MushroomCow$MushroomType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $MushroomCow$MushroomType extends $Enum<$MushroomCow$MushroomType> implements $StringRepresentable {
static readonly "BROWN": $MushroomCow$MushroomType
static readonly "CODEC": $StringRepresentable$EnumCodec<$MushroomCow$MushroomType>
static readonly "RED": $MushroomCow$MushroomType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getBlockState"(): $BlockState
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $MushroomCow$MushroomType
public static "values"(): $MushroomCow$MushroomType[]
get "blockState"(): $BlockState
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Donkey" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractChestedHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractChestedHorse"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Donkey extends $AbstractChestedHorse {
constructor(entityType0: $EntityType$$Type<$Donkey$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Turtle" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Turtle extends $Animal {
static readonly "BABY_ON_LAND_SELECTOR": $Predicate<$LivingEntity>
static readonly "FOOD_ITEMS": $Ingredient

constructor(entityType0: $EntityType$$Type<$Turtle$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkTurtleSpawnRules"(entityType0: $EntityType$$Type<$Turtle$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasEgg"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLayingEgg"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setHomePos"(blockPos0: $BlockPos$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "layingEgg"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "homePos"(value: $BlockPos$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$ShoulderRidingEntity" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TamableAnimal } from "packages/net/minecraft/world/entity/$TamableAnimal"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $ShoulderRidingEntity extends $TamableAnimal {
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canSitOnShoulder"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEntityOnShoulder"(serverPlayer0: $ServerPlayer$$Type): boolean
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "entityOnShoulder"(value: $ServerPlayer$$Type)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Salmon" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AbstractSchoolingFish } from "packages/net/minecraft/world/entity/animal/$AbstractSchoolingFish"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Salmon extends $AbstractSchoolingFish {
constructor(entityType0: $EntityType$$Type<$Salmon$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$AbstractChestedHorse" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $AbstractHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $AccessorAbstractChestedHorse } from "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorAbstractChestedHorse"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $AbstractChestedHorse extends $AbstractHorse implements $AccessorAbstractChestedHorse {
static readonly "INV_CHEST_COUNT": integer

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createBaseChestedHorseAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInventoryColumns"(): integer
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasChest"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChest"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "inventoryColumns"(): integer
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chest"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Fox" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Fox$Type, $Fox$Type$$Type } from "packages/net/minecraft/world/entity/animal/$Fox$Type"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Fox extends $Animal implements $VariantHolder<$Fox$Type> {
static readonly "FLAG_CROUCHING": integer
static readonly "FLAG_INTERESTED": integer
static readonly "FLAG_POUNCING": integer

constructor(entityType0: $EntityType$$Type<$Fox$$Type>, level1: $Level$$Type)

public "addTrustedUUID"(uUID0: $UUID$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkFoxSpawnRules"(entityType0: $EntityType$$Type<$Fox$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCrouchAmount"(float0: float): float
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadRollAngle"(float0: float): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): $Fox$Type
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFaceplanted"(): boolean
public "isFrame"(): boolean
public "isFullyCrouched"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInterested"(): boolean
public "isJumping"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public static "isPathClear"(fox0: $Fox$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPouncing"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSitting"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setIsCrouching"(boolean0: boolean): void
public "setIsInterested"(boolean0: boolean): void
public "setIsPouncing"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSitting"(boolean0: boolean): void
public "setSleeping"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(type0: $Fox$Type$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "trusts"(uUID0: $UUID$$Type): boolean
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): $Fox$Type
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "faceplanted"(): boolean
get "frame"(): boolean
get "fullyCrouched"(): boolean
get "interested"(): boolean
get "jumping"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "pouncing"(): boolean
get "sitting"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "isCrouching"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "sitting"(value: boolean)
set "sleeping"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Fox$Type$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Squid" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $WaterAnimal } from "packages/net/minecraft/world/entity/animal/$WaterAnimal"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Squid extends $WaterAnimal {
constructor(entityType0: $EntityType$$Type<$Squid$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasMovementVector"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setMovementVector"(float0: float, float1: float, float2: float): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "oldTentacleAngle"(): float
set "oldTentacleAngle"(value: float)
get "oldTentacleMovement"(): float
set "oldTentacleMovement"(value: float)
get "tentacleAngle"(): float
set "tentacleAngle"(value: float)
get "tentacleMovement"(): float
set "tentacleMovement"(value: float)
get "xBodyRot"(): float
set "xBodyRot"(value: float)
get "xBodyRotO"(): float
set "xBodyRotO"(value: float)
get "zBodyRot"(): float
set "zBodyRot"(value: float)
get "zBodyRotO"(): float
set "zBodyRotO"(value: float)
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal, $Animal$$Type } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $Sniffer$State$$Type } from "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer$State"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $AnimationState } from "packages/net/minecraft/world/entity/$AnimationState"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Sniffer extends $Animal {
readonly "diggingAnimationState": $AnimationState
readonly "feelingHappyAnimationState": $AnimationState
readonly "risingAnimationState": $AnimationState
readonly "scentingAnimationState": $AnimationState
readonly "sniffingAnimationState": $AnimationState

constructor(entityType0: $EntityType$$Type<$Animal$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPlayDiggingSound"(): boolean
public "canRiderInteract"(): boolean
public "canSniff"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Sniffer>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPanicking"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSearching"(): boolean
public "isTempted"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onDiggingComplete"(boolean0: boolean): $Sniffer
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "transitionTo"(state0: $Sniffer$State$$Type): $Sniffer
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Sniffer>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "panicking"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "searching"(): boolean
get "tempted"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$IronGolem" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $IronGolem$Crackiness } from "packages/net/minecraft/world/entity/animal/$IronGolem$Crackiness"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $AbstractGolem } from "packages/net/minecraft/world/entity/animal/$AbstractGolem"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $NeutralMob } from "packages/net/minecraft/world/entity/$NeutralMob"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $IronGolem extends $AbstractGolem implements $NeutralMob {
constructor(entityType0: $EntityType$$Type<$IronGolem$$Type>, level1: $Level$$Type)

public "addPersistentAngerSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canAttack"(livingEntity0: $LivingEntity$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public "forgetCurrentTargetAndRefreshUniversalAnger"(): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttackAnimationTick"(): integer
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCrackiness"(): $IronGolem$Crackiness
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLastHurtByMob"(): $LivingEntity
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOfferFlowerTick"(): integer
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPersistentAngerTarget"(): $UUID
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRemainingPersistentAngerTime"(): integer
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTarget"(): $LivingEntity
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAngry"(): boolean
public "isAngryAt"(livingEntity0: $LivingEntity$$Type): boolean
public "isAngryAtAllPlayers"(level0: $Level$$Type): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPlayerCreated"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "offerFlower"(boolean0: boolean): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerDied"(player0: $Player$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readPersistentAngerSaveData"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
public "setLastHurtByPlayer"(player0: $Player$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPersistentAngerTarget"(uUID0: $UUID$$Type): void
public "setPlayerCreated"(boolean0: boolean): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRemainingPersistentAngerTime"(int0: integer): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startPersistentAngerTimer"(): void
public "stopBeingAngry"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updatePersistentAnger"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): void
get "attackAnimationTick"(): integer
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "crackiness"(): $IronGolem$Crackiness
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "lastHurtByMob"(): $LivingEntity
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "offerFlowerTick"(): integer
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "persistentAngerTarget"(): $UUID
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "remainingPersistentAngerTime"(): integer
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "target"(): $LivingEntity
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "angry"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "playerCreated"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "persistentAngerTarget"(value: $UUID$$Type)
set "playerCreated"(value: boolean)
set "position"(value: $BlockContainerJS$$Type)
set "remainingPersistentAngerTime"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "target"(value: $LivingEntity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Bee$BeePollinateGoal" {
import { $Bee$BaseBeeGoal } from "packages/net/minecraft/world/entity/animal/$Bee$BaseBeeGoal"

export class $Bee$BeePollinateGoal extends $Bee$BaseBeeGoal {
get "successfulPollinatingTicks"(): integer
set "successfulPollinatingTicks"(value: integer)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Horse" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $HorseAccessor } from "packages/net/dries007/tfc/mixin/accessor/$HorseAccessor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Markings } from "packages/net/minecraft/world/entity/animal/horse/$Markings"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $AbstractHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Variant, $Variant$$Type } from "packages/net/minecraft/world/entity/animal/horse/$Variant"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Horse extends $AbstractHorse implements $VariantHolder<$Variant>, $HorseAccessor {
constructor(entityType0: $EntityType$$Type<$Horse$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getArmor"(): $ItemStack
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMarkings"(): $Markings
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(variant0: $Variant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "armor"(): $ItemStack
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "markings"(): $Markings
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Variant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Axolotl$Variant, $Axolotl$Variant$$Type } from "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl$Variant"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevelAccessor$$Type } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $LerpingModel } from "packages/net/minecraft/world/entity/$LerpingModel"
import { $Map } from "packages/java/util/$Map"

export class $Axolotl extends $Animal implements $LerpingModel, $VariantHolder<$Axolotl$Variant>, $Bucketable {
static readonly "PLAYER_REGEN_DETECTION_RANGE": double
static readonly "RARE_VARIANT_CHANCE": integer
static readonly "TOTAL_PLAYDEAD_TIME": integer
static readonly "VARIANT_TAG": string

constructor(entityType0: $EntityType$$Type<$Axolotl$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "applySupportingEffects"(player0: $Player$$Type): void
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkAxolotlSpawnRules"(entityType0: $EntityType$$Type<$LivingEntity$$Type>, serverLevelAccessor1: $ServerLevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public "fromBucket"(): boolean
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Axolotl>
public "getBucketItemStack"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getModelRotationValues"(): $Map<string, $Vector3f>
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPickupSound"(): $SoundEvent
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): $Axolotl$Variant
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPlayingDead"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "loadFromBucketTag"(compoundTag0: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public static "onStopAttacking"(axolotl0: $Axolotl$$Type, livingEntity1: $LivingEntity$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rehydrate"(): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "saveToBucketTag"(itemStack0: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFromBucket"(boolean0: boolean): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPlayingDead"(boolean0: boolean): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(variant0: $Axolotl$Variant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Axolotl>
get "bucketItemStack"(): $ItemStack
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "modelRotationValues"(): $Map<string, $Vector3f>
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "pickupSound"(): $SoundEvent
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): $Axolotl$Variant
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "playingDead"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "playingDead"(value: boolean)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Axolotl$Variant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Fox$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Fox$Type extends $Enum<$Fox$Type> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$Fox$Type>
static readonly "RED": $Fox$Type
static readonly "SNOW": $Fox$Type

public static "byBiome"(holder0: $Holder$$Type<$Biome$$Type>): $Fox$Type
public static "byId"(int0: integer): $Fox$Type
public static "byName"(string0: string): $Fox$Type
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Fox$Type
public static "values"(): $Fox$Type[]
get "id"(): integer
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$Parrot" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $FlyingAnimal } from "packages/net/minecraft/world/entity/animal/$FlyingAnimal"
import { $IFluteParrot } from "packages/net/mehvahdjukaar/supplementaries/common/entities/$IFluteParrot"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Parrot$Variant, $Parrot$Variant$$Type } from "packages/net/minecraft/world/entity/animal/$Parrot$Variant"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ShoulderRidingEntity } from "packages/net/minecraft/world/entity/animal/$ShoulderRidingEntity"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Parrot extends $ShoulderRidingEntity implements $VariantHolder<$Parrot$Variant>, $FlyingAnimal, $IFluteParrot {
static "TAME_FOOD": $Set<$Item>

constructor(entityType0: $EntityType$$Type<$Parrot$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkParrotSpawnRules"(entityType0: $EntityType$$Type<$Parrot$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public static "getAmbient"(level0: $Level$$Type, randomSource1: $RandomSource$$Type): $SoundEvent
public "getAmbientSound"(): $SoundEvent
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public static "getPitch"(randomSource0: $RandomSource$$Type): float
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "imitateNearbyMobs"(level0: $Level$$Type, entity1: $Entity$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFlying"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPartyParrot"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(variant0: $Parrot$Variant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "supplementaries$setPartyByFlute"(player: $Player$$Type): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "flap"(): float
set "flap"(value: float)
get "flapSpeed"(): float
set "flapSpeed"(value: float)
get "oFlap"(): float
set "oFlap"(value: float)
get "oFlapSpeed"(): float
set "oFlapSpeed"(value: float)
get "ambientSound"(): $SoundEvent
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "flying"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "partyParrot"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Parrot$Variant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Parrot$Variant" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Parrot$Variant extends $Enum<$Parrot$Variant> implements $StringRepresentable {
static readonly "BLUE": $Parrot$Variant
static readonly "CODEC": $Codec<$Parrot$Variant>
static readonly "GRAY": $Parrot$Variant
static readonly "GREEN": $Parrot$Variant
static readonly "RED_BLUE": $Parrot$Variant
static readonly "YELLOW_BLUE": $Parrot$Variant

public static "byId"(int0: integer): $Parrot$Variant
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Parrot$Variant
public static "values"(): $Parrot$Variant[]
get "id"(): integer
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$AbstractSchoolingFish" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AbstractFish } from "packages/net/minecraft/world/entity/animal/$AbstractFish"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $AbstractSchoolingFish extends $AbstractFish {
constructor(entityType0: $EntityType$$Type<$AbstractSchoolingFish$$Type>, level1: $Level$$Type)

public "addFollowers"(stream0: $Stream$$Type<$AbstractSchoolingFish$$Type>): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeFollowed"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBucketItemStack"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMaxSchoolSize"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasFollowers"(): boolean
public "inRangeOfLeader"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFollower"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "pathToLeader"(): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startFollowing"(abstractSchoolingFish0: $AbstractSchoolingFish$$Type): $AbstractSchoolingFish
public "stopFollowing"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "bucketItemStack"(): $ItemStack
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "maxSchoolSize"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "follower"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$SnowGolem" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IForgeShearable } from "packages/net/minecraftforge/common/$IForgeShearable"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RangedAttackMob } from "packages/net/minecraft/world/entity/monster/$RangedAttackMob"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $AbstractGolem } from "packages/net/minecraft/world/entity/animal/$AbstractGolem"
import { $Shearable } from "packages/net/minecraft/world/entity/$Shearable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $SnowGolem extends $AbstractGolem implements $Shearable, $RangedAttackMob, $IForgeShearable {
constructor(entityType0: $EntityType$$Type<$SnowGolem$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasPumpkin"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isShearable"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onSheared"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer): $List<$ItemStack>
public "performRangedAttack"(livingEntity0: $LivingEntity$$Type, float1: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readyForShearing"(): boolean
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setPumpkin"(boolean0: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shear"(soundSource0: $SoundSource$$Type): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "pumpkin"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Llama" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RangedAttackMob } from "packages/net/minecraft/world/entity/monster/$RangedAttackMob"
import { $AbstractChestedHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractChestedHorse"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DyeColor } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $Llama$Variant, $Llama$Variant$$Type } from "packages/net/minecraft/world/entity/animal/horse/$Llama$Variant"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Llama extends $AbstractChestedHorse implements $VariantHolder<$Llama$Variant>, $RangedAttackMob {
constructor(entityType0: $EntityType$$Type<$Llama$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCaravanHead"(): $Llama
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getStrength"(): integer
public "getSwag"(): $DyeColor
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): $Llama$Variant
public "hasCaravanTail"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "inCaravan"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isTraderLlama"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "joinCaravan"(llama0: $Llama$$Type): void
public "leaveCaravan"(): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "performRangedAttack"(livingEntity0: $LivingEntity$$Type, float1: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(variant0: $Llama$Variant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "caravanHead"(): $Llama
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "strength"(): integer
get "swag"(): $DyeColor
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): $Llama$Variant
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "traderLlama"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Llama$Variant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$TropicalFish$Base" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TropicalFish$Base extends $Enum<$TropicalFish$Base> {
static readonly "LARGE": $TropicalFish$Base
static readonly "SMALL": $TropicalFish$Base

public static "valueOf"(string0: string): $TropicalFish$Base
public static "values"(): $TropicalFish$Base[]
}
}

declare module "packages/net/minecraft/world/entity/animal/frog/$Frog" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal, $Animal$$Type } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $FrogVariant, $FrogVariant$$Type } from "packages/net/minecraft/world/entity/animal/$FrogVariant"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $AnimationState } from "packages/net/minecraft/world/entity/$AnimationState"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Frog extends $Animal implements $VariantHolder<$FrogVariant> {
static readonly "TEMPTATION_ITEM": $Ingredient
static readonly "VARIANT_KEY": string
readonly "croakAnimationState": $AnimationState
readonly "jumpAnimationState": $AnimationState
readonly "swimIdleAnimationState": $AnimationState
readonly "tongueAnimationState": $AnimationState

constructor(entityType0: $EntityType$$Type<$Animal$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "canEat"(livingEntity0: $LivingEntity$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkFrogSpawnRules"(entityType0: $EntityType$$Type<$Animal$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "eraseTongueTarget"(): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Frog>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTongueTarget"(): $Optional<$Entity>
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTongueTarget"(entity0: $Entity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(frogVariant0: $FrogVariant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Frog>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "tongueTarget"(): $Optional<$Entity>
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "tongueTarget"(value: $Entity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $FrogVariant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$ZombieHorse" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $IConvertableHorse } from "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $AbstractHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $ZombieHorse extends $AbstractHorse implements $IConvertableHorse {
constructor(entityType0: $EntityType$$Type<$ZombieHorse$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$fgm000$interact"(pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "supp$isConverting"(): boolean
public "supp$startConverting"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Animal" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $AnimalAccessor } from "packages/vazkii/botania/mixin/$AnimalAccessor"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AgeableMob, $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Animal extends $AgeableMob implements $AnimalAccessor {
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFallInLove"(): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canMate"(animal0: $Animal$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkAnimalSpawnRules"(entityType0: $EntityType$$Type<$Animal$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "finalizeSpawnChildFromBreeding"(serverLevel0: $ServerLevel$$Type, animal1: $Animal$$Type, ageableMob2: $AgeableMob$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInLoveTime"(): integer
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLoveCause"(): $ServerPlayer
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$eoa000$onEatGoldenCarrot"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFood"(itemStack0: $ItemStack$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInLove"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mobInteract"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetLove"(): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setInLove"(player0: $Player$$Type): void
public "setInLoveTime"(int0: integer): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnChildFromBreeding"(serverLevel0: $ServerLevel$$Type, animal1: $Animal$$Type): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "inLoveTime"(): integer
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "loveCause"(): $ServerPlayer
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "inLove"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "inLove"(value: $Player$$Type)
set "inLoveTime"(value: integer)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$AbstractGolem" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $PathfinderMob } from "packages/net/minecraft/world/entity/$PathfinderMob"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $AbstractGolem extends $PathfinderMob {
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Cat" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TamableAnimal } from "packages/net/minecraft/world/entity/$TamableAnimal"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $CatVariant, $CatVariant$$Type } from "packages/net/minecraft/world/entity/animal/$CatVariant"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Cat extends $TamableAnimal implements $VariantHolder<$CatVariant> {
static readonly "SPRINT_SPEED_MOD": double
static readonly "TEMPT_SPEED_MOD": double
static readonly "WALK_SPEED_MOD": double

constructor(entityType0: $EntityType$$Type<$Cat$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "customServerAiStep"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCollarColor"(): $DyeColor
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLieDownAmount"(float0: float): float
public "getLieDownAmountTail"(float0: float): float
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRelaxStateOneAmount"(float0: float): float
public "getResourceLocation"(): $ResourceLocation
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hiss"(): void
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isLying"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRelaxStateOne"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCollarColor"(dyeColor0: $DyeColor$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setLying"(boolean0: boolean): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRelaxStateOne"(boolean0: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(catVariant0: $CatVariant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "collarColor"(): $DyeColor
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "resourceLocation"(): $ResourceLocation
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "lying"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "relaxStateOne"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "collarColor"(value: $DyeColor$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "lying"(value: boolean)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "relaxStateOne"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $CatVariant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Pufferfish" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AbstractFish } from "packages/net/minecraft/world/entity/animal/$AbstractFish"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Pufferfish extends $AbstractFish {
static readonly "STATE_FULL": integer
static readonly "STATE_MID": integer
static readonly "STATE_SMALL": integer

constructor(entityType0: $EntityType$$Type<$Pufferfish$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getPuffState"(): integer
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setPuffState"(int0: integer): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "puffState"(): integer
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "puffState"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$IronGolem$Crackiness" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IronGolem$Crackiness extends $Enum<$IronGolem$Crackiness> {
static readonly "HIGH": $IronGolem$Crackiness
static readonly "LOW": $IronGolem$Crackiness
static readonly "MEDIUM": $IronGolem$Crackiness
static readonly "NONE": $IronGolem$Crackiness

public static "byFraction"(float0: float): $IronGolem$Crackiness
public static "valueOf"(string0: string): $IronGolem$Crackiness
public static "values"(): $IronGolem$Crackiness[]
}
}

declare module "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer$State" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Sniffer$State extends $Enum<$Sniffer$State> {
static readonly "DIGGING": $Sniffer$State
static readonly "FEELING_HAPPY": $Sniffer$State
static readonly "IDLING": $Sniffer$State
static readonly "RISING": $Sniffer$State
static readonly "SCENTING": $Sniffer$State
static readonly "SEARCHING": $Sniffer$State
static readonly "SNIFFING": $Sniffer$State

public static "valueOf"(string0: string): $Sniffer$State
public static "values"(): $Sniffer$State[]
}
}

declare module "packages/net/minecraft/world/entity/animal/$Bee" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $FlyingAnimal } from "packages/net/minecraft/world/entity/animal/$FlyingAnimal"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $NeutralMob } from "packages/net/minecraft/world/entity/$NeutralMob"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $GoalSelector } from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Bee$BeePollinateGoal, $Bee$BeePollinateGoal$$Type } from "packages/net/minecraft/world/entity/animal/$Bee$BeePollinateGoal"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Bee extends $Animal implements $NeutralMob, $FlyingAnimal {
static readonly "FLAP_DEGREES_PER_TICK": float
static readonly "TAG_CANNOT_ENTER_HIVE_TICKS": string
static readonly "TAG_CROPS_GROWN_SINCE_POLLINATION": string
static readonly "TAG_FLOWER_POS": string
static readonly "TAG_HAS_NECTAR": string
static readonly "TAG_HAS_STUNG": string
static readonly "TAG_HIVE_POS": string
static readonly "TAG_TICKS_SINCE_POLLINATION": string
static readonly "TICKS_PER_FLAP": integer

constructor(entityType0: $EntityType$$Type<$Bee$$Type>, level1: $Level$$Type)

public "addPersistentAngerSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canAttack"(livingEntity0: $LivingEntity$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropOffNectar"(): void
public "foodEaten"(is: $ItemStack$$Type): void
public "forgetCurrentTargetAndRefreshUniversalAnger"(): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlacklistedHives"(): $List<$BlockPos>
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getGoalSelector"(): $GoalSelector
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getHivePos"(): $BlockPos
public "getItem"(): $ItemStack
public "getLastHurtByMob"(): $LivingEntity
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPersistentAngerTarget"(): $UUID
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRemainingPersistentAngerTime"(): integer
public "getRollAmount"(float0: float): float
public "getSavedFlowerPos"(): $BlockPos
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTarget"(): $LivingEntity
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getTravellingTicks"(): integer
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasHive"(): boolean
public "hasNectar"(): boolean
public "hasSavedFlowerPos"(): boolean
public "hasStung"(): boolean
public "incrementNumCropsGrownSincePollination"(): void
public "isAmbientCreature"(): boolean
public "isAngry"(): boolean
public "isAngryAt"(livingEntity0: $LivingEntity$$Type): boolean
public "isAngryAtAllPlayers"(level0: $Level$$Type): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFlapping"(): boolean
public "isFlying"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerDied"(player0: $Player$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readPersistentAngerSaveData"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetTicksWithoutNectarSinceExitingHive"(): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHasNectar"(boolean0: boolean): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
public "setLastHurtByPlayer"(player0: $Player$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPersistentAngerTarget"(uUID0: $UUID$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRemainingPersistentAngerTime"(int0: integer): void
public "setRotation"(yaw: float, pitch: float): void
public "setSavedFlowerPos"(blockPos0: $BlockPos$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setStayOutOfHiveCountdown"(int0: integer): void
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startPersistentAngerTimer"(): void
public "stopBeingAngry"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updatePersistentAnger"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): void
get "beePollinateGoal"(): $Bee$BeePollinateGoal
set "beePollinateGoal"(value: $Bee$BeePollinateGoal$$Type)
get "blacklistedHives"(): $List<$BlockPos>
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "goalSelector"(): $GoalSelector
get "headArmorItem"(): $ItemStack
get "hivePos"(): $BlockPos
get "item"(): $ItemStack
get "lastHurtByMob"(): $LivingEntity
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "persistentAngerTarget"(): $UUID
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "remainingPersistentAngerTime"(): integer
get "savedFlowerPos"(): $BlockPos
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "target"(): $LivingEntity
get "teamId"(): string
get "totalMovementSpeed"(): double
get "travellingTicks"(): integer
get "type"(): string
get "ambientCreature"(): boolean
get "angry"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "flapping"(): boolean
get "flying"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "persistentAngerTarget"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "remainingPersistentAngerTime"(value: integer)
set "savedFlowerPos"(value: $BlockPos$$Type)
set "statusMessage"(value: $Component$$Type)
set "stayOutOfHiveCountdown"(value: integer)
set "target"(value: $LivingEntity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Variant" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Variant extends $Enum<$Variant> implements $StringRepresentable {
static readonly "BLACK": $Variant
static readonly "BROWN": $Variant
static readonly "CHESTNUT": $Variant
static readonly "CODEC": $Codec<$Variant>
static readonly "CREAMY": $Variant
static readonly "DARK_BROWN": $Variant
static readonly "GRAY": $Variant
static readonly "WHITE": $Variant

public static "byId"(int0: integer): $Variant
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Variant
public static "values"(): $Variant[]
get "id"(): integer
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$Chicken" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Chicken extends $Animal {
static "FOOD_ITEMS": $Ingredient
"isChickenJockey": boolean

constructor(entityType0: $EntityType$$Type<$Chicken$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $Chicken
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChickenJockey"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setChickenJockey"(boolean0: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "eggTime"(): integer
set "eggTime"(value: integer)
get "flap"(): float
set "flap"(value: float)
get "flapSpeed"(): float
set "flapSpeed"(value: float)
get "flapping"(): float
set "flapping"(value: float)
get "oFlap"(): float
set "oFlap"(value: float)
get "oFlapSpeed"(): float
set "oFlapSpeed"(value: float)
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chickenJockey"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "chickenJockey"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Rabbit" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VariantHolder } from "packages/net/minecraft/world/entity/$VariantHolder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Rabbit$Variant, $Rabbit$Variant$$Type } from "packages/net/minecraft/world/entity/animal/$Rabbit$Variant"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Rabbit extends $Animal implements $VariantHolder<$Rabbit$Variant> {
static readonly "ATTACK_SPEED_MOD": double
static readonly "BREED_SPEED_MOD": double
static readonly "EVIL_ARMOR_VALUE": integer
static readonly "EVIL_ATTACK_POWER": integer
static readonly "FLEE_SPEED_MOD": double
static readonly "FOLLOW_SPEED_MOD": double
static readonly "STROLL_SPEED_MOD": double

constructor(entityType0: $EntityType$$Type<$Rabbit$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkRabbitSpawnRules"(entityType0: $EntityType$$Type<$Rabbit$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "customServerAiStep"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCompletion"(float0: float): float
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): $Rabbit$Variant
public "handler$dpe000$isCabbage"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSpeedModifier"(double0: double): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(variant0: $Rabbit$Variant$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startJumping"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): $Rabbit$Variant
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "speedModifier"(value: double)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $Rabbit$Variant$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$SkeletonHorse" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $IConvertableHorse } from "packages/net/mehvahdjukaar/supplementaries/common/block/$IConvertableHorse"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $AbstractHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $SkeletonHorse extends $AbstractHorse implements $IConvertableHorse {
constructor(entityType0: $EntityType$$Type<$SkeletonHorse$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$fgh000$mobInteract"(player: $Player$$Type, hand: $InteractionHand$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$fgh002$addAdditionalSaveData"(compoundNBT: $CompoundTag$$Type, ci: $CallbackInfo$$Type): void
public "handler$fgh002$readAdditionalSaveData"(compoundNBT: $CompoundTag$$Type, ci: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isTrap"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setTrap"(boolean0: boolean): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "supp$feedRottenFlesh"(player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): void
public "supp$isConverting"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "trap"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "trap"(value: boolean)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Rabbit$Variant" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Rabbit$Variant extends $Enum<$Rabbit$Variant> implements $StringRepresentable {
static readonly "BLACK": $Rabbit$Variant
static readonly "BROWN": $Rabbit$Variant
static readonly "CODEC": $Codec<$Rabbit$Variant>
static readonly "EVIL": $Rabbit$Variant
static readonly "GOLD": $Rabbit$Variant
static readonly "SALT": $Rabbit$Variant
static readonly "WHITE": $Rabbit$Variant
static readonly "WHITE_SPLOTCHED": $Rabbit$Variant

public static "byId"(int0: integer): $Rabbit$Variant
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "id"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Rabbit$Variant
public static "values"(): $Rabbit$Variant[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$Bee$BaseBeeGoal" {
import { $Goal } from "packages/net/minecraft/world/entity/ai/goal/$Goal"

export class $Bee$BaseBeeGoal extends $Goal {
public "canBeeContinueToUse"(): boolean
public "canBeeUse"(): boolean
}
}

declare module "packages/net/minecraft/world/entity/animal/camel/$Camel" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $PlayerRideableJumping } from "packages/net/minecraft/world/entity/$PlayerRideableJumping"
import { $Saddleable } from "packages/net/minecraft/world/entity/$Saddleable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $EntityDataAccessor } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $RiderShieldingMount } from "packages/net/minecraft/world/entity/$RiderShieldingMount"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $AnimationState } from "packages/net/minecraft/world/entity/$AnimationState"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $AbstractHorse } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Camel extends $AbstractHorse implements $PlayerRideableJumping, $RiderShieldingMount, $Saddleable {
static readonly "DASH": $EntityDataAccessor<boolean>
static readonly "DASH_COOLDOWN_TICKS": integer
static readonly "LAST_POSE_CHANGE_TICK": $EntityDataAccessor<long>
static readonly "MAX_HEAD_Y_ROT": integer
static readonly "TEMPTATION_ITEM": $Ingredient
readonly "dashAnimationState": $AnimationState
readonly "idleAnimationState": $AnimationState
readonly "sitAnimationState": $AnimationState
readonly "sitPoseAnimationState": $AnimationState
readonly "sitUpAnimationState": $AnimationState

constructor(entityType0: $EntityType$$Type<$Camel$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "equipSaddle"(soundSource0: $SoundSource$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPoseTime"(): long
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRiderShieldingHeight"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCamelSitting"(): boolean
public "isCamelVisuallySitting"(): boolean
public "isDashing"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInPoseTransition"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPanicking"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSaddleable"(): boolean
public "isSaddled"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "refuseToMove"(): boolean
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetLastPoseChangeTick"(long0: long): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDashing"(boolean0: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sitDown"(): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "standUp"(): void
public "standUpInstantly"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "poseTime"(): long
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "riderShieldingHeight"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "camelSitting"(): boolean
get "camelVisuallySitting"(): boolean
get "dashing"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "inPoseTransition"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "panicking"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "saddleable"(): boolean
get "saddled"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "dashing"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Bucketable" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Optional } from "packages/java/util/$Optional"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $Bucketable {
"fromBucket"(): boolean
"getBucketItemStack"(): $ItemStack
"getPickupSound"(): $SoundEvent
"loadFromBucketTag"(compoundTag0: $CompoundTag$$Type): void
"saveToBucketTag"(itemStack0: $ItemStack$$Type): void
"setFromBucket"(boolean0: boolean): void
get "bucketItemStack"(): $ItemStack
get "pickupSound"(): $SoundEvent
}

export namespace $Bucketable {
function bucketMobPickup<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
function loadDefaultDataFromBucketTag(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
function saveDefaultDataToBucketTag(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
}
export abstract class $Bucketable$$Static implements $Bucketable {
static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
/** @deprecated */
static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
/** @deprecated */
static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
}
}

declare module "packages/net/minecraft/world/entity/animal/$TropicalFish$Variant" {
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Record } from "packages/java/lang/$Record"
import { $TropicalFish$Pattern, $TropicalFish$Pattern$$Type } from "packages/net/minecraft/world/entity/animal/$TropicalFish$Pattern"

export class $TropicalFish$Variant extends $Record {
constructor(pattern0: $TropicalFish$Pattern$$Type, dyeColor1: $DyeColor$$Type, dyeColor2: $DyeColor$$Type)

public "baseColor"(): $DyeColor
public "getPackedId"(): integer
public "pattern"(): $TropicalFish$Pattern
public "patternColor"(): $DyeColor
get "packedId"(): integer
}
}

declare module "packages/net/minecraft/world/entity/animal/$Cow" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Cow extends $Animal {
constructor(entityType0: $EntityType$$Type<$Cow$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $Cow
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Cod" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AbstractSchoolingFish } from "packages/net/minecraft/world/entity/animal/$AbstractSchoolingFish"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Cod extends $AbstractSchoolingFish {
constructor(entityType0: $EntityType$$Type<$Cod$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Sheep" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IForgeShearable } from "packages/net/minecraftforge/common/$IForgeShearable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $EatBlockGoal, $EatBlockGoal$$Type } from "packages/net/minecraft/world/entity/ai/goal/$EatBlockGoal"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Shearable } from "packages/net/minecraft/world/entity/$Shearable"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $Sheep extends $Animal implements $Shearable, $IForgeShearable {
constructor(entityType0: $EntityType$$Type<$Sheep$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "constant$zni000$onSheared"(int0: integer, player1: $Player$$Type, itemStack2: $ItemStack$$Type, level3: $Level$$Type, blockPos4: $BlockPos$$Type, int5: integer): integer
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getColor"(): $DyeColor
public static "getColorArray"(dyeColor0: $DyeColor$$Type): float[]
public "getDefaultLootTable"(): $ResourceLocation
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadEatAngleScale"(float0: float): float
public "getHeadEatPositionScale"(float0: float): float
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public static "getRandomSheepColor"(randomSource0: $RandomSource$$Type): $DyeColor
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$zni000$onSheared"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer, callbackInfoReturnable5: $CallbackInfoReturnable$$Type<any>): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isShearable"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "isSheared"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onSheared"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer): $List<$ItemStack>
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readyForShearing"(): boolean
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setColor"(dyeColor0: $DyeColor$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSheared"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shear"(soundSource0: $SoundSource$$Type): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "eatBlockGoal"(): $EatBlockGoal
set "eatBlockGoal"(value: $EatBlockGoal$$Type)
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "color"(): $DyeColor
get "defaultLootTable"(): $ResourceLocation
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "sheared"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "color"(value: $DyeColor$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "sheared"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Dolphin" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $WaterAnimal } from "packages/net/minecraft/world/entity/animal/$WaterAnimal"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $ItemEntity } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Dolphin extends $WaterAnimal {
static readonly "ALLOWED_ITEMS": $Predicate<$ItemEntity>
static readonly "TOTAL_AIR_SUPPLY": integer

constructor(entityType0: $EntityType$$Type<$Dolphin$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMoistnessLevel"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getTreasurePos"(): $BlockPos
public "getType"(): string
public "gotFish"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setGotFish"(boolean0: boolean): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMoisntessLevel"(int0: integer): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setTreasurePos"(blockPos0: $BlockPos$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "moistnessLevel"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "treasurePos"(): $BlockPos
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "moisntessLevel"(value: integer)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "treasurePos"(value: $BlockPos$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Ocelot" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $OcelotAccessor } from "packages/net/dries007/tfc/mixin/accessor/$OcelotAccessor"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Ocelot extends $Animal implements $OcelotAccessor {
static readonly "CROUCH_SPEED_MOD": double
static readonly "SPRINT_SPEED_MOD": double
static readonly "WALK_SPEED_MOD": double

constructor(entityType0: $EntityType$$Type<$Ocelot$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkOcelotSpawnRules"(entityType0: $EntityType$$Type<$Ocelot$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "customServerAiStep"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $Ocelot
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Llama$Variant" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Llama$Variant extends $Enum<$Llama$Variant> implements $StringRepresentable {
static readonly "BROWN": $Llama$Variant
static readonly "CODEC": $Codec<$Llama$Variant>
static readonly "CREAMY": $Llama$Variant
static readonly "GRAY": $Llama$Variant
static readonly "WHITE": $Llama$Variant

public static "byId"(int0: integer): $Llama$Variant
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Llama$Variant
public static "values"(): $Llama$Variant[]
get "id"(): integer
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/entity/animal/$AbstractFish" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $WaterAnimal } from "packages/net/minecraft/world/entity/animal/$WaterAnimal"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $AbstractFish extends $WaterAnimal implements $Bucketable {
constructor(entityType0: $EntityType$$Type<$AbstractFish$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public "fromBucket"(): boolean
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBucketItemStack"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPickupSound"(): $SoundEvent
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "loadFromBucketTag"(compoundTag0: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "saveToBucketTag"(itemStack0: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFromBucket"(boolean0: boolean): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "bucketItemStack"(): $ItemStack
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "pickupSound"(): $SoundEvent
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$TraderLlama" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Llama } from "packages/net/minecraft/world/entity/animal/horse/$Llama"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $TraderLlama extends $Llama {
constructor(entityType0: $EntityType$$Type<$TraderLlama$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDespawnDelay"(int0: integer): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "despawnDelay"(value: integer)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/allay/$Allay" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $PathfinderMob } from "packages/net/minecraft/world/entity/$PathfinderMob"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $InventoryCarrier, $InventoryCarrier$$Type } from "packages/net/minecraft/world/entity/npc/$InventoryCarrier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $SimpleContainer } from "packages/net/minecraft/world/$SimpleContainer"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $VibrationSystem$Data } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $VibrationSystem$User } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $VibrationSystem } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem"

export class $Allay extends $PathfinderMob implements $InventoryCarrier, $VibrationSystem {
static readonly "THROW_SOUND_PITCHES": $ImmutableList<float>

constructor(entityType0: $EntityType$$Type<$Allay$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Allay>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getHoldingItemAnimationProgress"(float0: float): float
public "getInventory"(): $SimpleContainer
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpinningProgress"(float0: float): float
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVibrationData"(): $VibrationSystem$Data
public "getVibrationUser"(): $VibrationSystem$User
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasItemInHand"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDancing"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFlapping"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPanicking"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSpinning"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public static "pickUpItem"(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readInventoryFromTag"(compoundTag0: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDancing"(boolean0: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setJukeboxPlaying"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "writeInventoryToTag"(compoundTag0: $CompoundTag$$Type): void
get "duplicationCooldown"(): long
set "duplicationCooldown"(value: long)
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Allay>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "inventory"(): $SimpleContainer
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dancing"(): boolean
get "dynamicLightEnabledH"(): boolean
get "flapping"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "panicking"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "spinning"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "dancing"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Panda" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Panda$Gene, $Panda$Gene$$Type } from "packages/net/minecraft/world/entity/animal/$Panda$Gene"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Panda extends $Animal {
static readonly "TOTAL_ROLL_STEPS": integer

constructor(entityType0: $EntityType$$Type<$Panda$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canPerformAction"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "eat"(boolean0: boolean): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getHiddenGene"(): $Panda$Gene
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLieOnBackAmount"(float0: float): float
public "getMainGene"(): $Panda$Gene
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRollAmount"(float0: float): float
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSitAmount"(float0: float): float
public "getSneezeCounter"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getUnhappyCounter"(): integer
public "getVariant"(): $Panda$Gene
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isBrown"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEating"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLazy"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnBack"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPlayful"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRolling"(): boolean
public "isScared"(): boolean
public "isSitting"(): boolean
public "isSneezing"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWeak"(): boolean
public "isWorried"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "roll"(boolean0: boolean): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setAttributes"(): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setGeneFromParents"(panda0: $Panda$$Type, panda1: $Panda$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setHiddenGene"(gene0: $Panda$Gene$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainGene"(gene0: $Panda$Gene$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setOnBack"(boolean0: boolean): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSneezeCounter"(int0: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setUnhappyCounter"(int0: integer): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sit"(boolean0: boolean): void
public "sneeze"(boolean0: boolean): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "rollCounter"(): integer
set "rollCounter"(value: integer)
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "hiddenGene"(): $Panda$Gene
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainGene"(): $Panda$Gene
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "sneezeCounter"(): integer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "unhappyCounter"(): integer
get "variant"(): $Panda$Gene
get "ambientCreature"(): boolean
get "animal"(): boolean
get "brown"(): boolean
get "dynamicLightEnabledH"(): boolean
get "eating"(): boolean
get "frame"(): boolean
get "lazy"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "onBack"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "playful"(): boolean
get "rolling"(): boolean
get "scared"(): boolean
get "sitting"(): boolean
get "sneezing"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "weak"(): boolean
get "worried"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "hiddenGene"(value: $Panda$Gene$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainGene"(value: $Panda$Gene$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "onBack"(value: boolean)
set "position"(value: $BlockContainerJS$$Type)
set "sneezeCounter"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "unhappyCounter"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $AbstractHorseAccessor } from "packages/vazkii/botania/mixin/$AbstractHorseAccessor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $OwnableEntity } from "packages/net/minecraft/world/entity/$OwnableEntity"
import { $HasCustomInventoryScreen } from "packages/net/minecraft/world/entity/$HasCustomInventoryScreen"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PlayerRideableJumping } from "packages/net/minecraft/world/entity/$PlayerRideableJumping"
import { $Saddleable } from "packages/net/minecraft/world/entity/$Saddleable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $ContainerListener } from "packages/net/minecraft/world/$ContainerListener"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $AbstractHorse extends $Animal implements $ContainerListener, $HasCustomInventoryScreen, $OwnableEntity, $PlayerRideableJumping, $Saddleable, $AbstractHorseAccessor {
static readonly "BREEDING_CROSS_FACTOR": double
static readonly "CHEST_SLOT_OFFSET": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static "FOOD_ITEMS": $Ingredient
static readonly "INVENTORY_SLOT_OFFSET": integer
static readonly "INV_BASE_COUNT": integer
static readonly "INV_SLOT_ARMOR": integer
static readonly "INV_SLOT_SADDLE": integer
static readonly "MAX_JUMP_STRENGTH": float
static readonly "MAX_MOVEMENT_SPEED": float

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEatGrass"(): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canJump"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canWearArmor"(): boolean
public "containerChanged"(container0: $Container$$Type): void
public static "createBaseHorseAttributes"(): $AttributeSupplier$Builder
public "createInventory"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "equipArmor"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
public "equipSaddle"(soundSource0: $SoundSource$$Type): void
public "fedFood"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): $InteractionResult
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAmbientStandInterval"(): integer
public "getAmbientStandSound"(): $SoundEvent
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCustomJump"(): double
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEatAnim"(float0: float): float
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getJumpCooldown"(): integer
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMaxTemper"(): integer
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouthAnim"(float0: float): float
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getOwnerUUID"(): $UUID
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStandAnim"(float0: float): float
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTemper"(): integer
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handleStartJump"(int0: integer): void
public "handleStopJump"(): void
public "handler$fec000$addSugarCube"(ci: $CallbackInfo$$Type): void
public "handler$fec000$eatSugarCube"(player: $Player$$Type, stack: $ItemStack$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasInventoryChanged"(container0: $Container$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isArmor"(itemStack0: $ItemStack$$Type): boolean
public "isBred"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEating"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isImmobile"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isJumping"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isSaddleable"(): boolean
public "isSaddled"(): boolean
public "isStanding"(): boolean
public "isTamed"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWearingArmor"(): boolean
public "makeMad"(): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyTemper"(int0: integer): integer
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onPlayerJump"(int0: integer): void
public "openCustomInventoryScreen"(player0: $Player$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setBred"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEating"(boolean0: boolean): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setIsJumping"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setOwnerUUID"(uUID0: $UUID$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStanding"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTamed"(boolean0: boolean): void
public "setTemper"(int0: integer): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "standIfPossible"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "tameWithName"(player0: $Player$$Type): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "sprintCounter"(): integer
set "sprintCounter"(value: integer)
get "tailCounter"(): integer
set "tailCounter"(value: integer)
get "ambientStandInterval"(): integer
get "ambientStandSound"(): $SoundEvent
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "customJump"(): double
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "jumpCooldown"(): integer
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "maxTemper"(): integer
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "ownerUUID"(): $UUID
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "temper"(): integer
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "bred"(): boolean
get "dynamicLightEnabledH"(): boolean
get "eating"(): boolean
get "frame"(): boolean
get "immobile"(): boolean
get "jumping"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "saddleable"(): boolean
get "saddled"(): boolean
get "standing"(): boolean
get "tamed"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "wearingArmor"(): boolean
set "bred"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "eating"(value: boolean)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "ownerUUID"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "standing"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "tamed"(value: boolean)
set "temper"(value: integer)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/frog/$Tadpole" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Bucketable, $Bucketable$$Type } from "packages/net/minecraft/world/entity/animal/$Bucketable"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Brain } from "packages/net/minecraft/world/entity/ai/$Brain"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $AbstractFish, $AbstractFish$$Type } from "packages/net/minecraft/world/entity/animal/$AbstractFish"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Tadpole extends $AbstractFish {
static "HITBOX_HEIGHT": float
static "HITBOX_WIDTH": float
static "ticksToBeFrog": integer

constructor(entityType0: $EntityType$$Type<$AbstractFish$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bucketMobPickup"<T extends ($LivingEntity & $Bucketable)>(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, t2: T): $Optional<$InteractionResult>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Tadpole>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTicksLeftUntilAdult"(): integer
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
/** @deprecated */
public static "loadDefaultDataFromBucketTag"(mob0: $Mob$$Type, compoundTag1: $CompoundTag$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mobInteract"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
/** @deprecated */
public static "saveDefaultDataToBucketTag"(mob0: $Mob$$Type, itemStack1: $ItemStack$$Type): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAge"(int0: integer): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Tadpole>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "ticksLeftUntilAdult"(): integer
get "totalMovementSpeed"(): double
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
get "undead"(): boolean
get "waterCreature"(): boolean
set "age"(value: integer)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Panda$Gene" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Panda$Gene extends $Enum<$Panda$Gene> implements $StringRepresentable {
static readonly "AGGRESSIVE": $Panda$Gene
static readonly "BROWN": $Panda$Gene
static readonly "CODEC": $StringRepresentable$EnumCodec<$Panda$Gene>
static readonly "LAZY": $Panda$Gene
static readonly "NORMAL": $Panda$Gene
static readonly "PLAYFUL": $Panda$Gene
static readonly "WEAK": $Panda$Gene
static readonly "WORRIED": $Panda$Gene

public static "byId"(int0: integer): $Panda$Gene
public static "byName"(string0: string): $Panda$Gene
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getId"(): integer
public static "getRandom"(randomSource0: $RandomSource$$Type): $Panda$Gene
public "getSerializedName"(): string
public "isRecessive"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Panda$Gene
public static "values"(): $Panda$Gene[]
get "id"(): integer
get "serializedName"(): string
get "recessive"(): boolean
}
}

declare module "packages/net/minecraft/world/entity/animal/$PolarBear" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $NeutralMob } from "packages/net/minecraft/world/entity/$NeutralMob"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $PolarBear extends $Animal implements $NeutralMob {
constructor(entityType0: $EntityType$$Type<$PolarBear$$Type>, level1: $Level$$Type)

public "addPersistentAngerSaveData"(compoundTag0: $CompoundTag$$Type): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canAttack"(livingEntity0: $LivingEntity$$Type): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "checkPolarBearSpawnRules"(entityType0: $EntityType$$Type<$PolarBear$$Type>, levelAccessor1: $LevelAccessor$$Type, mobSpawnType2: $MobSpawnType$$Type, blockPos3: $BlockPos$$Type, randomSource4: $RandomSource$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public "forgetCurrentTargetAndRefreshUniversalAnger"(): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLastHurtByMob"(): $LivingEntity
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPersistentAngerTarget"(): $UUID
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRemainingPersistentAngerTime"(): integer
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStandingAnimationScale"(float0: float): float
public "getStepHeight"(): float
public "getTarget"(): $LivingEntity
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAngry"(): boolean
public "isAngryAt"(livingEntity0: $LivingEntity$$Type): boolean
public "isAngryAtAllPlayers"(level0: $Level$$Type): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isStanding"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerDied"(player0: $Player$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readPersistentAngerSaveData"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastHurtByMob"(livingEntity0: $LivingEntity$$Type): void
public "setLastHurtByPlayer"(player0: $Player$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPersistentAngerTarget"(uUID0: $UUID$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRemainingPersistentAngerTime"(int0: integer): void
public "setRotation"(yaw: float, pitch: float): void
public "setStanding"(boolean0: boolean): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTarget"(livingEntity0: $LivingEntity$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startPersistentAngerTimer"(): void
public "stopBeingAngry"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updatePersistentAnger"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "lastHurtByMob"(): $LivingEntity
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "persistentAngerTarget"(): $UUID
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "remainingPersistentAngerTime"(): integer
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "target"(): $LivingEntity
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "angry"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "standing"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastHurtByMob"(value: $LivingEntity$$Type)
set "lastHurtByPlayer"(value: $Player$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "persistentAngerTarget"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "remainingPersistentAngerTime"(value: integer)
set "standing"(value: boolean)
set "statusMessage"(value: $Component$$Type)
set "target"(value: $LivingEntity$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/$Pig" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Saddleable } from "packages/net/minecraft/world/entity/$Saddleable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Animal } from "packages/net/minecraft/world/entity/animal/$Animal"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $ItemSteerable } from "packages/net/minecraft/world/entity/$ItemSteerable"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Pig extends $Animal implements $ItemSteerable, $Saddleable {
static "FOOD_ITEMS": $Ingredient

constructor(entityType0: $EntityType$$Type<$Pig$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "boost"(): boolean
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "equipSaddle"(soundSource0: $SoundSource$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaddleSoundEvent"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "handler$fan000$pigsEatGoldenCarrots"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isSaddleable"(): boolean
public "isSaddled"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "self"(): $LivingEntity
public "self"(): $LivingEntity
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saddleSoundEvent"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
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
get "saddleable"(): boolean
get "saddled"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/animal/horse/$Markings" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Markings extends $Enum<$Markings> {
static readonly "BLACK_DOTS": $Markings
static readonly "NONE": $Markings
static readonly "WHITE": $Markings
static readonly "WHITE_DOTS": $Markings
static readonly "WHITE_FIELD": $Markings

public static "byId"(int0: integer): $Markings
public "getId"(): integer
public static "valueOf"(string0: string): $Markings
public static "values"(): $Markings[]
get "id"(): integer
}
}

