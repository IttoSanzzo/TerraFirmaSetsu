declare module "packages/net/minecraft/world/entity/raid/$Raid" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set } from "packages/java/util/$Set"
import { $Raider, $Raider$$Type } from "packages/net/minecraft/world/entity/raid/$Raider"
import { $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $Raid {
static readonly "DEFAULT_MAX_BAD_OMEN_LEVEL": integer
static readonly "MAX_CELEBRATION_TICKS": integer
static readonly "MAX_NO_ACTION_TIME": integer
static readonly "RAID_REMOVAL_THRESHOLD_SQR": integer
static readonly "TICKS_PER_DAY": integer
static readonly "VALID_RAID_RADIUS_SQR": integer
static readonly "VILLAGE_RADIUS_BUFFER": integer

constructor(int0: integer, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type)
constructor(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type)

public "absorbBadOmen"(player0: $Player$$Type): void
public "addHeroOfTheVillage"(entity0: $Entity$$Type): void
public "addWaveMob"(int0: integer, raider1: $Raider$$Type, boolean2: boolean): boolean
public "getAllRaiders"(): $Set<$Raider>
public "getBadOmenLevel"(): integer
public "getCenter"(): $BlockPos
public "getEnchantOdds"(): float
public "getGroupsSpawned"(): integer
public "getHealthOfLivingRaiders"(): float
public "getId"(): integer
public "getLeader"(int0: integer): $Raider
public static "getLeaderBannerInstance"(): $ItemStack
public "getLevel"(): $Level
public "getMaxBadOmenLevel"(): integer
public "getNumGroups"(difficulty0: $Difficulty$$Type): integer
public "getTotalHealth"(): float
public "getTotalRaidersAlive"(): integer
public "handler$zci000$onFindRandomSpawnPosPost"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "handler$zci000$onFindRandomSpawnPosPre"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "hasFirstWaveSpawned"(): boolean
public "isActive"(): boolean
public "isBetweenWaves"(): boolean
public "isLoss"(): boolean
public "isOver"(): boolean
public "isStarted"(): boolean
public "isStopped"(): boolean
public "isVictory"(): boolean
public "joinRaid"(int0: integer, raider1: $Raider$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): void
public "removeFromRaid"(raider0: $Raider$$Type, boolean1: boolean): void
public "removeLeader"(int0: integer): void
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setBadOmenLevel"(int0: integer): void
public "setLeader"(int0: integer, raider1: $Raider$$Type): void
public "stop"(): void
public "tick"(): void
public "updateBossbar"(): void
get "allRaiders"(): $Set<$Raider>
get "badOmenLevel"(): integer
get "center"(): $BlockPos
get "enchantOdds"(): float
get "groupsSpawned"(): integer
get "healthOfLivingRaiders"(): float
get "id"(): integer
get "level"(): $Level
get "maxBadOmenLevel"(): integer
get "totalHealth"(): float
get "totalRaidersAlive"(): integer
get "active"(): boolean
get "betweenWaves"(): boolean
get "loss"(): boolean
get "over"(): boolean
get "started"(): boolean
get "stopped"(): boolean
get "victory"(): boolean
set "badOmenLevel"(value: integer)
}
}

declare module "packages/net/minecraft/world/entity/raid/$Raids" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SavedData } from "packages/net/minecraft/world/level/saveddata/$SavedData"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Raid, $Raid$$Type } from "packages/net/minecraft/world/entity/raid/$Raid"
import { $Raider$$Type } from "packages/net/minecraft/world/entity/raid/$Raider"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Raids extends $SavedData {
constructor(serverLevel0: $ServerLevel$$Type)

public static "canJoinRaid"(raider0: $Raider$$Type, raid1: $Raid$$Type): boolean
public "createOrExtendRaid"(serverPlayer0: $ServerPlayer$$Type): $Raid
public "get"(int0: integer): $Raid
public static "getFileId"(holder0: $Holder$$Type<$DimensionType$$Type>): string
public "getNearbyRaid"(blockPos0: $BlockPos$$Type, int1: integer): $Raid
public static "load"(serverLevel0: $ServerLevel$$Type, compoundTag1: $CompoundTag$$Type): $Raids
public "tick"(): void
}
}

declare module "packages/net/minecraft/world/entity/raid/$Raider" {
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
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Raid, $Raid$$Type } from "packages/net/minecraft/world/entity/raid/$Raid"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PatrollingMonster } from "packages/net/minecraft/world/entity/monster/$PatrollingMonster"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $Raider extends $PatrollingMonster {
public "alwaysAccepts"(): boolean
public "applyRaidBuffs"(int0: integer, boolean1: boolean): void
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canJoinRaid"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCelebrateSound"(): $SoundEvent
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCurrentRaid"(): $Raid
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
public "getTicksOutsideRaid"(): integer
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getWave"(): integer
public "hasActiveRaid"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCelebrating"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
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
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
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
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setCanJoinRaid"(boolean0: boolean): void
public "setCelebrating"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCurrentRaid"(raid0: $Raid$$Type): void
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
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTicksOutsideRaid"(int0: integer): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setWave"(int0: integer): void
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
get "celebrateSound"(): $SoundEvent
get "chestArmorItem"(): $ItemStack
get "currentRaid"(): $Raid
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
get "ticksOutsideRaid"(): integer
get "totalMovementSpeed"(): double
get "type"(): string
get "wave"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "celebrating"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "celebrating"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "currentRaid"(value: $Raid$$Type)
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
set "ticksOutsideRaid"(value: integer)
set "totalMovementSpeedMultiplier"(value: double)
set "wave"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

