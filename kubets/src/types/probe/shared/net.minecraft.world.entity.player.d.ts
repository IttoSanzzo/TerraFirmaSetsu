declare module "packages/net/minecraft/world/entity/player/$Inventory" {
import { $InventoryAccessor } from "packages/vazkii/botania/mixin/$InventoryAccessor"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $StackedContents$$Type } from "packages/net/minecraft/world/entity/player/$StackedContents"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $Nameable } from "packages/net/minecraft/world/$Nameable"

export class $Inventory implements $Container, $Nameable, $InventoryAccessor {
static readonly "ALL_ARMOR_SLOTS": integer[]
static readonly "HELMET_SLOT_ONLY": integer[]
static readonly "INVENTORY_SIZE": integer
static readonly "NOT_FOUND_INDEX": integer
static readonly "POP_TIME_DURATION": integer
static readonly "SLOT_OFFHAND": integer
readonly "armor": $NonNullList<$ItemStack>
readonly "compartments": $List<$NonNullList<$ItemStack>>
readonly "items": $NonNullList<$ItemStack>
readonly "offhand": $NonNullList<$ItemStack>
readonly "player": $Player

constructor(player0: $Player$$Type)

public "add"(itemStack0: $ItemStack$$Type): boolean
public "add"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "clearOrCountMatchingItems"(predicate0: $Predicate$$Type<$ItemStack$$Type>, int1: integer, container2: $Container$$Type): integer
public "contains"(tagKey0: $TagKey$$Type<$Item$$Type>): boolean
public "contains"(itemStack0: $ItemStack$$Type): boolean
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "dropAll"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fillStackedContents"(stackedContents0: $StackedContents$$Type): void
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "findSlotMatchingItem"(itemStack0: $ItemStack$$Type): integer
public "findSlotMatchingUnusedItem"(itemStack0: $ItemStack$$Type): integer
public "getAllItems"(): $List<$ItemStack>
public "getArmor"(int0: integer): $ItemStack
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getCustomName"(): $Component
public "getDestroySpeed"(blockState0: $BlockState$$Type): float
public "getDisplayName"(): $Component
public "getFreeSlot"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getName"(): $Component
public "getSelected"(): $ItemStack
public static "getSelectionSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlotWithRemainingSpace"(itemStack0: $ItemStack$$Type): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getSuitableHotbarSlot"(): integer
public "getTimesChanged"(): integer
public "getWidth"(): integer
public "handler$cjf000$saveSoulboundItems"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$dlk000$addStackPost"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "handler$dlk000$addStackPre"(itemStack0: $ItemStack$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "handler$dlk000$getEmptySlot"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "handler$dlk000$setPickedItemPost"(itemStack0: $ItemStack$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$dlk000$setPickedItemPre"(itemStack0: $ItemStack$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$eeb000$fireDropEvent"(ci: $CallbackInfo$$Type, var1: $Iterator$$Type<any>, list: $List$$Type<any>, i: integer): void
public "handler$eeb000$restoreNotDropped"(ci: $CallbackInfo$$Type, var1: $Iterator$$Type<any>, list: $List$$Type<any>, i: integer): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<any>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hurtArmor"(damageSource0: $DamageSource$$Type, float1: float, int2s: integer[]): void
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public static "isHotbarSlot"(int0: integer): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "load"(listTag0: $ListTag$$Type): void
public "pickSlot"(int0: integer): void
public "placeItemBackInInventory"(itemStack0: $ItemStack$$Type): void
public "placeItemBackInInventory"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "removeFromSelected"(boolean0: boolean): $ItemStack
public "removeItem"(itemStack0: $ItemStack$$Type): void
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "replaceWith"(inventory0: $Inventory$$Type): void
public "save"(listTag0: $ListTag$$Type): $ListTag
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setPickedItem"(itemStack0: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public "swapPaint"(double0: double): void
public "tick"(): void
public static "tryClear"(object0: any): void
get "selected"(): integer
set "selected"(value: integer)
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "customName"(): $Component
get "displayName"(): $Component
get "freeSlot"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "name"(): $Component
get "slots"(): integer
get "suitableHotbarSlot"(): integer
get "timesChanged"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "pickedItem"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/world/entity/player/$ChatVisiblity" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $OptionEnum } from "packages/net/minecraft/util/$OptionEnum"

export class $ChatVisiblity extends $Enum<$ChatVisiblity> implements $OptionEnum {
static readonly "FULL": $ChatVisiblity
static readonly "HIDDEN": $ChatVisiblity
static readonly "SYSTEM": $ChatVisiblity

public static "byId"(int0: integer): $ChatVisiblity
public "getCaption"(): $Component
public "getId"(): integer
public "getKey"(): string
public static "valueOf"(string0: string): $ChatVisiblity
public static "values"(): $ChatVisiblity[]
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}
}

declare module "packages/net/minecraft/world/entity/player/$Player$BedSleepingProblem" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $Player$BedSleepingProblem extends $Enum<$Player$BedSleepingProblem> {
static readonly "NOT_POSSIBLE_HERE": $Player$BedSleepingProblem
static readonly "NOT_POSSIBLE_NOW": $Player$BedSleepingProblem
static readonly "NOT_SAFE": $Player$BedSleepingProblem
static readonly "OBSTRUCTED": $Player$BedSleepingProblem
static readonly "OTHER_PROBLEM": $Player$BedSleepingProblem
static readonly "TOO_FAR_AWAY": $Player$BedSleepingProblem

public "getMessage"(): $Component
public static "valueOf"(string0: string): $Player$BedSleepingProblem
public static "values"(): $Player$BedSleepingProblem[]
get "message"(): $Component
}
}

declare module "packages/net/minecraft/world/entity/player/$Player" {
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $AnimationStack } from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Unit } from "packages/net/minecraft/util/$Unit"
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $IFlying } from "packages/dev/shadowsoffire/attributeslib/util/$IFlying"
import { $IAnimatedPlayer } from "packages/dev/kosmx/playerAnim/impl/$IAnimatedPlayer"
import { $PlayerAccess } from "packages/vazkii/botania/common/$PlayerAccess"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose, $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $WardenSpawnTracker } from "packages/net/minecraft/world/entity/monster/warden/$WardenSpawnTracker"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $MenuProvider$$Type } from "packages/net/minecraft/world/$MenuProvider"
import { $ItemEntity } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $ItemCooldowns } from "packages/net/minecraft/world/item/$ItemCooldowns"
import { $PlayerKJS } from "packages/dev/latvian/mods/kubejs/core/$PlayerKJS"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $DynamicLightSource } from "packages/toni/sodiumdynamiclights/$DynamicLightSource"
import { $Trackable } from "packages/dev/uncandango/alltheleaks/mixin/$Trackable"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Stat$$Type } from "packages/net/minecraft/stats/$Stat"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PlayerAttackProperties } from "packages/net/bettercombat/logic/$PlayerAttackProperties"
import { $Stages } from "packages/dev/latvian/mods/kubejs/stages/$Stages"
import { $IQuiverEntity } from "packages/net/mehvahdjukaar/supplementaries/api/$IQuiverEntity"
import { $ClickAction$$Type } from "packages/net/minecraft/world/inventory/$ClickAction"
import { $PlayerData, $PlayerData$$Type } from "packages/com/minecraftserverzone/weaponmaster/setup/playerdata/$PlayerData"
import { $WeakReference } from "packages/java/lang/ref/$WeakReference"
import { $AnimationApplier } from "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier"
import { $PlayerModelPart$$Type } from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import { $KubeJSInventoryListener } from "packages/dev/latvian/mods/kubejs/player/$KubeJSInventoryListener"
import { $AccessorPlayer } from "packages/com/illusivesoulworks/comforts/mixin/$AccessorPlayer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Class } from "packages/java/lang/$Class"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $GUIRenderer } from "packages/io/sedu/mc/parties/client/overlay/gui/$GUIRenderer"
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $PlayerAccessor } from "packages/net/dries007/tfc/mixin/accessor/$PlayerAccessor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $AttackHand } from "packages/net/bettercombat/api/$AttackHand"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $InventoryKJS } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $MerchantOffers$$Type } from "packages/net/minecraft/world/item/trading/$MerchantOffers"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $SignBlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $IAnimation, $IAnimation$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $AbstractHorse$$Type } from "packages/net/minecraft/world/entity/animal/horse/$AbstractHorse"
import { $Scoreboard } from "packages/net/minecraft/world/scores/$Scoreboard"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $InventoryMenu, $InventoryMenu$$Type } from "packages/net/minecraft/world/inventory/$InventoryMenu"
import { $GlobalPos, $GlobalPos$$Type } from "packages/net/minecraft/core/$GlobalPos"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PlayerAccessor as $PlayerAccessor$0 } from "packages/fuzs/easymagic/mixin/accessor/$PlayerAccessor"
import { $BaseCommandBlock$$Type } from "packages/net/minecraft/world/level/$BaseCommandBlock"
import { $Abilities } from "packages/net/minecraft/world/entity/player/$Abilities"
import { $CommandBlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import { $IForgePlayer } from "packages/net/minecraftforge/common/extensions/$IForgePlayer"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $FoodData } from "packages/net/minecraft/world/food/$FoodData"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $Player$BedSleepingProblem } from "packages/net/minecraft/world/entity/player/$Player$BedSleepingProblem"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $PlayerEnderChestContainer } from "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $StructureBlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ObjectOpenCustomHashSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $FishingHook, $FishingHook$$Type } from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import { $JigsawBlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import { $PlayerSettings } from "packages/dev/tr7zw/skinlayers/accessor/$PlayerSettings"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $EntityPlayer_BetterCombat } from "packages/net/bettercombat/api/$EntityPlayer_BetterCombat"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $IPlayerData } from "packages/com/minecraftserverzone/weaponmaster/setup/playerdata/$IPlayerData"
import { $PlayerEntityAccessor } from "packages/net/bettercombat/mixin/$PlayerEntityAccessor"
import { $EntityDimensions, $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $Map } from "packages/java/util/$Map"

export class $Player extends $LivingEntity implements $IForgePlayer, $IAnimatedPlayer, $PlayerAccess, $IFlying, $PlayerAccessor, $PlayerEntityAccessor, $PlayerAttackProperties, $EntityPlayer_BetterCombat, $Trackable, $IPlayerData, $DynamicLightSource, $PlayerAccessor$0, $AccessorPlayer, $PlayerSettings, $IQuiverEntity, $GUIRenderer, $PlayerKJS {
static readonly "CROUCH_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "MAX_HEALTH": integer
static readonly "MAX_NAME_LENGTH": integer
static readonly "PERSISTED_NBT_TAG": string
static readonly "SLEEP_DURATION": integer
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "WAKE_UP_DURATION": integer
readonly "abilities": $Abilities
readonly "inventory": $Inventory

constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, gameProfile3: $GameProfile$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItem"(itemStack0: $ItemStack$$Type): boolean
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "atl$getBaseClass"(): $Class<any>
public "attack"(entity0: $Entity$$Type): void
public "attack"(hp: float): void
public "awardRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>): integer
public "awardRecipesByKey"(resourceLocation0s: $ResourceLocation$$Type[]): void
public "awardStat"(resourceLocation0: $ResourceLocation$$Type): void
public "awardStat"(stat0: $Stat$$Type<any>): void
public "awardStat"(resourceLocation0: $ResourceLocation$$Type, int1: integer): void
public "awardStat"(stat0: $Stat$$Type<any>, int1: integer): void
public "blockActionRestricted"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, gameType2: $GameType$$Type): boolean
public "boostElytraFlight"(): void
public "botania$setCritTarget"(livingEntity0: $LivingEntity$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEat"(boolean0: boolean): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHarmPlayer"(player0: $Player$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canUseGameMasterBlocks"(): boolean
public "causeFoodExhaustion"(float0: float): void
public "checkMovementStatistics"(double0: double, double1: double, double2: double): void
public "clearMeshes"(): void
public static "clearNullReferences"(): void
public "closeMenu"(): void
public static "createAttributes"(): $AttributeSupplier$Builder
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "crit"(entity0: $Entity$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disableShield"(boolean0: boolean): void
public "displayClientMessage"(component0: $Component$$Type, boolean1: boolean): void
public "drop"(itemStack0: $ItemStack$$Type, boolean1: boolean): $ItemEntity
public "drop"(itemStack0: $ItemStack$$Type, boolean1: boolean, boolean2: boolean): $ItemEntity
public static "findRespawnPositionAndUseSpawnBlock"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, float2: float, boolean3: boolean, boolean4: boolean): $Optional<$Vec3>
public "foodEaten"(is: $ItemStack$$Type): void
public "getAbilities"(): $Abilities
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAndDestroyFlyingCache"(): boolean
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimationStack"(): $AnimationStack
public "getAttackStrengthScale"(float0: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getComboCount"(): integer
public "getCooldowns"(): $ItemCooldowns
public "getCraftingGrid"(): $InventoryKJS
public "getCurrentAttack"(): $AttackHand
public "getCurrentItemAttackStrengthDelay"(): float
public "getCurrentSkin"(): $ResourceLocation
public "getData"(): $AttachedData<any>
public "getDefaultMovementSpeed"(): double
/** @deprecated */
public "getDestroySpeed"(blockState0: $BlockState$$Type): float
public "getDigSpeed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type): float
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEnchantmentSeed"(): integer
public "getEnderChestInventory"(): $PlayerEnderChestContainer
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodData"(): $FoodData
public "getFoodLevel"(): integer
public "getForcedPose"(): $Pose
public "getGameProfile"(): $GameProfile
public "getHeadArmorItem"(): $ItemStack
public "getHeadMesh"(): $Mesh
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInventory"(): $InventoryKJS
public "getInventory"(): $Inventory
public "getInventoryChangeListener"(): $KubeJSInventoryListener
public "getItem"(): $ItemStack
public "getLastDeathLocation"(): $Optional<$GlobalPos>
public "getLeftArmMesh"(): $Mesh
public "getLeftLegMesh"(): $Mesh
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getLuck"(): float
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPlayer"(): $Player
public "getPlayerData"(): $PlayerData
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getPrefixes"(): $Collection<$MutableComponent>
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRightArmMesh"(): $Mesh
public "getRightLegMesh"(): $Mesh
public "getSaturation"(): float
public "getScore"(): integer
public "getScoreboard"(): $Scoreboard
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getShoulderEntityLeft"(): $CompoundTag
public "getShoulderEntityRight"(): $CompoundTag
public "getSleepTimer"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStages"(): $Stages
public "getStandingEyeHeight"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public "getSuffixes"(): $Collection<$MutableComponent>
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTeamId"(): string
public "getTorsoMesh"(): $Mesh
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getWardenSpawnTracker"(): $Optional<$WardenSpawnTracker>
public "getXp"(): integer
public "getXpLevel"(): integer
public "getXpNeededForNextLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveExperienceLevels"(int0: integer): void
public "giveExperiencePoints"(int0: integer): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$bkc000$apoth_cacheFlying"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$bkc000$apoth_ownedAbilities"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, gameProfile3: $GameProfile$$Type, callbackInfo4: $CallbackInfo$$Type): void
public "handler$cbg000$getEquippedStack_Pre"(slot: $EquipmentSlot$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cbg000$post_Tick"(ci: $CallbackInfo$$Type): void
public "handler$cjk000$mna$hurtArmor"(damageSource0: $DamageSource$$Type, float1: float, callbackInfo2: $CallbackInfo$$Type): void
public "handler$coa004$tick"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ddp000$addModDataVersions"(compound: $CompoundTag$$Type, ci: $CallbackInfo$$Type): void
public "handler$fgl000$getDimensions"(pose0: $Pose$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "handler$fgl000$getStandingEyeHeight"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type<any>): void
public "handler$fgl000$onIsStayingOnGroundSurface"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "handler$fgl000$onJumpFromGround"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fgl000$onTryToStartFallFlying"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "handler$zoi000$inject$interactOn"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type<any>): void
public "hasContainerOpen"(): boolean
public "hasCorrectToolForDrops"(blockState0: $BlockState$$Type): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasThinArms"(): boolean
public "increaseScore"(int0: integer): void
public "interactOn"(entity0: $Entity$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isCreative"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isHurt"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isLocalPlayer"(): boolean
public "isMiningBlock"(): boolean
public "isModelPartShown"(playerModelPart0: $PlayerModelPart$$Type): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isReducedDebugInfo"(): boolean
public "isRenderingUI"(): boolean
public "isScoping"(): boolean
public "isSecondaryUseActive"(): boolean
public "isSleepingLongEnough"(): boolean
public "isTextFilteringEnabled"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpFromGround"(): void
public "magicCrit"(entity0: $Entity$$Type): void
public "markFlying"(): void
public "mayBuild"(): boolean
public "mayUseItemAt"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, itemStack2: $ItemStack$$Type): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modify$cbg000$getHand"(hand: $InteractionHand$$Type): $InteractionHand
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyExpressionValue$cjd001$elytraOverride"(boolean0: boolean): boolean
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "notify"(builder: $NotificationBuilder$$Type): void
public "onEnchantmentPerformed"(itemStack0: $ItemStack$$Type, int1: integer): void
public "onUpdateAbilities"(): void
public "openCommandBlock"(commandBlockEntity0: $CommandBlockEntity$$Type): void
public "openHorseInventory"(abstractHorse0: $AbstractHorse$$Type, container1: $Container$$Type): void
public "openItemGui"(itemStack0: $ItemStack$$Type, interactionHand1: $InteractionHand$$Type): void
public "openJigsawBlock"(jigsawBlockEntity0: $JigsawBlockEntity$$Type): void
public "openMenu"(menuProvider0: $MenuProvider$$Type): $OptionalInt
public "openMinecartCommandBlock"(baseCommandBlock0: $BaseCommandBlock$$Type): void
public "openStructureBlock"(structureBlockEntity0: $StructureBlockEntity$$Type): void
public "openTextEdit"(signBlockEntity0: $SignBlockEntity$$Type, boolean1: boolean): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playNotifySound"(soundEvent0: $SoundEvent$$Type, soundSource1: $SoundSource$$Type, float2: float, float3: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playerAnimator_getAnimation"(): $AnimationApplier
public "playerAnimator_getAnimation"(id: $ResourceLocation$$Type): $IAnimation
public "playerAnimator_setAnimation"(id: $ResourceLocation$$Type, animation: $IAnimation$$Type): $IAnimation
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "redirect$cbg000$getMainHandStack_Redirect"(instance: $Player$$Type): $ItemStack
public "redirect$cbg000$setStackInHand_Redirect"(instance: $Player$$Type, handArg: $InteractionHand$$Type, itemStack: $ItemStack$$Type): void
public "refreshDisplayName"(): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetAttackStrengthTicker"(): void
public "resetRecipes"(collection0: $Collection$$Type<$Recipe$$Type<any>>): integer
public "resetStat"(stat0: $Stat$$Type<any>): void
public "respawn"(): void
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
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "sendMerchantOffers"(int0: integer, merchantOffers1: $MerchantOffers$$Type, int2: integer, int3: integer, boolean4: boolean, boolean5: boolean): void
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setComboCount"(comboCount: integer): void
public "setCurrentSkin"(skin: $ResourceLocation$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEntityOnShoulder"(compoundTag0: $CompoundTag$$Type): boolean
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setForcedPose"(pose0: $Pose$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeadMesh"(headMesh: $Mesh$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastDeathLocation"(optional0: $Optional$$Type<$GlobalPos$$Type>): void
public "setLeftArmMesh"(leftArmMesh: $Mesh$$Type): void
public "setLeftLegMesh"(leftLegMesh: $Mesh$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainArm"(humanoidArm0: $HumanoidArm$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPlayerData"(playerData0: $PlayerData$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setReducedDebugInfo"(boolean0: boolean): void
public "setRenderMode"(boolean0: boolean): void
public "setRightArmMesh"(rightArmMesh: $Mesh$$Type): void
public "setRightLegMesh"(rightLegMesh: $Mesh$$Type): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setScore"(int0: integer): void
public "setSelectedSlot"(index: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "setThinArms"(thin: boolean): void
public "setTorsoMesh"(torsoMesh: $Mesh$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startAutoSpinAttack"(int0: integer): void
public "startFallFlying"(): void
public "startSleepInBed"(blockPos0: $BlockPos$$Type): $Either<$Player$BedSleepingProblem, $Unit>
public "startTracking"(): void
public static "startTracking"(object0: any): void
public "stopFallFlying"(): void
public "stopSleepInBed"(boolean0: boolean, boolean1: boolean): void
public "supplementaries$getQuiver"(): $ItemStack
public "supplementaries$hasQuiver"(): boolean
public "supplementaries$setQuiver"(quiver: $ItemStack$$Type): void
public "sweepAttack"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "triggerRecipeCrafted"(recipe0: $Recipe$$Type<any>, list1: $List$$Type<$ItemStack$$Type>): void
public "tryToStartFallFlying"(): boolean
public "updateTutorialInventoryAction"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, clickAction2: $ClickAction$$Type): void
public "wrap"(): $WeakReference<$Trackable>
get "bob"(): float
set "bob"(value: float)
get "containerMenu"(): $AbstractContainerMenu
set "containerMenu"(value: $AbstractContainerMenu$$Type)
get "experienceLevel"(): integer
set "experienceLevel"(value: integer)
get "experienceProgress"(): float
set "experienceProgress"(value: float)
get "fishing"(): $FishingHook
set "fishing"(value: $FishingHook$$Type)
get "inventoryMenu"(): $InventoryMenu
set "inventoryMenu"(value: $InventoryMenu$$Type)
get "oBob"(): float
set "oBob"(value: float)
get "playerData"(): $PlayerData
set "playerData"(value: $PlayerData$$Type)
get "takeXpDelay"(): integer
set "takeXpDelay"(value: integer)
get "totalExperience"(): integer
set "totalExperience"(value: integer)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
get "andDestroyFlyingCache"(): boolean
get "animation"(): $AnimationApplier
get "animationStack"(): $AnimationStack
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "chestArmorItem"(): $ItemStack
get "comboCount"(): integer
get "cooldowns"(): $ItemCooldowns
get "craftingGrid"(): $InventoryKJS
get "currentAttack"(): $AttackHand
get "currentItemAttackStrengthDelay"(): float
get "currentSkin"(): $ResourceLocation
get "data"(): $AttachedData<any>
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "enchantmentSeed"(): integer
get "enderChestInventory"(): $PlayerEnderChestContainer
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodData"(): $FoodData
get "foodLevel"(): integer
get "forcedPose"(): $Pose
get "gameProfile"(): $GameProfile
get "headArmorItem"(): $ItemStack
get "headMesh"(): $Mesh
get "inventoryChangeListener"(): $KubeJSInventoryListener
get "item"(): $ItemStack
get "lastDeathLocation"(): $Optional<$GlobalPos>
get "leftArmMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "luck"(): float
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "player"(): $Player
get "potionEffects"(): $EntityPotionEffectsJS
get "prefixes"(): $Collection<$MutableComponent>
get "profile"(): $GameProfile
get "reachDistance"(): double
get "rightArmMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
get "saturation"(): float
get "score"(): integer
get "scoreboard"(): $Scoreboard
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "shoulderEntityLeft"(): $CompoundTag
get "shoulderEntityRight"(): $CompoundTag
get "sleepTimer"(): integer
get "stages"(): $Stages
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "suffixes"(): $Collection<$MutableComponent>
get "teamId"(): string
get "torsoMesh"(): $Mesh
get "totalMovementSpeed"(): double
get "type"(): string
get "wardenSpawnTracker"(): $Optional<$WardenSpawnTracker>
get "xp"(): integer
get "xpLevel"(): integer
get "xpNeededForNextLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "creative"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "hurt"(): boolean
get "living"(): boolean
get "localPlayer"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "reducedDebugInfo"(): boolean
get "renderingUI"(): boolean
get "scoping"(): boolean
get "secondaryUseActive"(): boolean
get "sleepingLongEnough"(): boolean
get "textFilteringEnabled"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "comboCount"(value: integer)
set "currentSkin"(value: $ResourceLocation$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "entityOnShoulder"(value: $CompoundTag$$Type)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "forcedPose"(value: $Pose$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "headMesh"(value: $Mesh$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastDeathLocation"(value: $Optional$$Type<$GlobalPos$$Type>)
set "leftArmMesh"(value: $Mesh$$Type)
set "leftLegMesh"(value: $Mesh$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainArm"(value: $HumanoidArm$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "reducedDebugInfo"(value: boolean)
set "renderMode"(value: boolean)
set "rightArmMesh"(value: $Mesh$$Type)
set "rightLegMesh"(value: $Mesh$$Type)
set "saturation"(value: float)
set "score"(value: integer)
set "selectedSlot"(value: integer)
set "statusMessage"(value: $Component$$Type)
set "thinArms"(value: boolean)
set "torsoMesh"(value: $Mesh$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/world/entity/player/$ProfilePublicKey" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $ProfilePublicKey$Data, $ProfilePublicKey$Data$$Type } from "packages/net/minecraft/world/entity/player/$ProfilePublicKey$Data"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $SignatureValidator, $SignatureValidator$$Type } from "packages/net/minecraft/util/$SignatureValidator"
import { $Duration, $Duration$$Type } from "packages/java/time/$Duration"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ProfilePublicKey extends $Record {
static readonly "EXPIRED_PROFILE_PUBLIC_KEY": $Component
static readonly "EXPIRY_GRACE_PERIOD": $Duration
static readonly "TRUSTED_CODEC": $Codec<$ProfilePublicKey>

constructor(data0: $ProfilePublicKey$Data$$Type)

public "createSignatureValidator"(): $SignatureValidator
public static "createValidated"(signatureValidator0: $SignatureValidator$$Type, uUID1: $UUID$$Type, data2: $ProfilePublicKey$Data$$Type, duration3: $Duration$$Type): $ProfilePublicKey
public "data"(): $ProfilePublicKey$Data
}
}

declare module "packages/net/minecraft/world/entity/player/$PlayerModelPart" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $PlayerModelPart extends $Enum<$PlayerModelPart> {
static readonly "CAPE": $PlayerModelPart
static readonly "HAT": $PlayerModelPart
static readonly "JACKET": $PlayerModelPart
static readonly "LEFT_PANTS_LEG": $PlayerModelPart
static readonly "LEFT_SLEEVE": $PlayerModelPart
static readonly "RIGHT_PANTS_LEG": $PlayerModelPart
static readonly "RIGHT_SLEEVE": $PlayerModelPart

public "getBit"(): integer
public "getId"(): string
public "getMask"(): integer
public "getName"(): $Component
public static "valueOf"(string0: string): $PlayerModelPart
public static "values"(): $PlayerModelPart[]
get "bit"(): integer
get "id"(): string
get "mask"(): integer
get "name"(): $Component
}
}

declare module "packages/net/minecraft/world/entity/player/$ProfilePublicKey$Data" {
import { $PublicKey, $PublicKey$$Type } from "packages/java/security/$PublicKey"
import { $Record } from "packages/java/lang/$Record"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Duration$$Type } from "packages/java/time/$Duration"

export class $ProfilePublicKey$Data extends $Record {
static readonly "CODEC": $Codec<$ProfilePublicKey$Data>

constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(instant0: $Instant$$Type, publicKey1: $PublicKey$$Type, byte2s: byte[])

public "expiresAt"(): $Instant
public "hasExpired"(): boolean
public "hasExpired"(duration0: $Duration$$Type): boolean
public "key"(): $PublicKey
public "keySignature"(): byte[]
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/net/minecraft/world/entity/player/$StackedContents" {
import { $Int2IntMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntMap"
import { $IntList$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $StackedContents {
readonly "contents": $Int2IntMap

constructor()

public "accountSimpleStack"(itemStack0: $ItemStack$$Type): void
public "accountStack"(itemStack0: $ItemStack$$Type): void
public "accountStack"(itemStack0: $ItemStack$$Type, int1: integer): void
public "canCraft"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type, int2: integer): boolean
public "canCraft"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type): boolean
public "clear"(): void
public static "fromStackingIndex"(int0: integer): $ItemStack
public "getBiggestCraftableStack"(recipe0: $Recipe$$Type<any>, intList1: $IntList$$Type): integer
public "getBiggestCraftableStack"(recipe0: $Recipe$$Type<any>, int1: integer, intList2: $IntList$$Type): integer
public static "getStackingIndex"(itemStack0: $ItemStack$$Type): integer
}
}

declare module "packages/net/minecraft/world/entity/player/$ProfileKeyPair" {
import { $Record } from "packages/java/lang/$Record"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $PrivateKey, $PrivateKey$$Type } from "packages/java/security/$PrivateKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ProfilePublicKey, $ProfilePublicKey$$Type } from "packages/net/minecraft/world/entity/player/$ProfilePublicKey"

export class $ProfileKeyPair extends $Record {
static readonly "CODEC": $Codec<$ProfileKeyPair>

constructor(privateKey0: $PrivateKey$$Type, profilePublicKey1: $ProfilePublicKey$$Type, instant2: $Instant$$Type)

public "dueRefresh"(): boolean
public "privateKey"(): $PrivateKey
public "publicKey"(): $ProfilePublicKey
public "refreshedAfter"(): $Instant
}
}

declare module "packages/net/minecraft/world/entity/player/$Abilities" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IEntityOwned } from "packages/dev/shadowsoffire/attributeslib/util/$IEntityOwned"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Abilities implements $IEntityOwned {
constructor()

public "addSaveData"(compoundTag0: $CompoundTag$$Type): void
public "getFlyingSpeed"(): float
public "getOwner"(): $LivingEntity
public "getWalkingSpeed"(): float
public "loadSaveData"(compoundTag0: $CompoundTag$$Type): void
public "setFlyingSpeed"(float0: float): void
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
public "setWalkingSpeed"(float0: float): void
get "flying"(): boolean
set "flying"(value: boolean)
get "instabuild"(): boolean
set "instabuild"(value: boolean)
get "invulnerable"(): boolean
set "invulnerable"(value: boolean)
get "mayBuild"(): boolean
set "mayBuild"(value: boolean)
get "mayfly"(): boolean
set "mayfly"(value: boolean)
get "flyingSpeed"(): float
get "owner"(): $LivingEntity
get "walkingSpeed"(): float
set "flyingSpeed"(value: float)
set "owner"(value: $LivingEntity$$Type)
set "walkingSpeed"(value: float)
}
}

