declare module "packages/vazkii/botania/client/core/$SkyblockWorldInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SkyblockWorldInfo {
"isGardenOfGlass"(): boolean
"markGardenOfGlass"(): void
get "gardenOfGlass"(): boolean
}

export namespace $SkyblockWorldInfo {
const probejs$$marker: never
}
export abstract class $SkyblockWorldInfo$$Static implements $SkyblockWorldInfo {
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaRequestMatcher" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $CorporeaRequestMatcher extends $Predicate<$ItemStack> {
"and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"getRequestName"(): $Component
"negate"(): $Predicate<$ItemStack>
"or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
"test"(itemStack0: $ItemStack$$Type): boolean
"writeToNBT"(compoundTag0: $CompoundTag$$Type): void
get "requestName"(): $Component
}

export namespace $CorporeaRequestMatcher {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $CorporeaRequestMatcher$$Static implements $CorporeaRequestMatcher {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/vazkii/botania/api/mana/$ManaNetworkEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ManaReceiver, $ManaReceiver$$Type } from "packages/vazkii/botania/api/mana/$ManaReceiver"
import { $ManaBlockType, $ManaBlockType$$Type } from "packages/vazkii/botania/api/mana/$ManaBlockType"
import { $ManaNetworkAction, $ManaNetworkAction$$Type } from "packages/vazkii/botania/api/mana/$ManaNetworkAction"

export class $ManaNetworkEvent extends $Event {
constructor(manaReceiver0: $ManaReceiver$$Type, manaBlockType1: $ManaBlockType$$Type, manaNetworkAction2: $ManaNetworkAction$$Type)
constructor()

public "getAction"(): $ManaNetworkAction
public "getReceiver"(): $ManaReceiver
public "getType"(): $ManaBlockType
get "action"(): $ManaNetworkAction
get "receiver"(): $ManaReceiver
get "type"(): $ManaBlockType
}
}

declare module "packages/vazkii/botania/mixin/$AnimalAccessor" {
import { $UUID$$Type } from "packages/java/util/$UUID"

export interface $AnimalAccessor {
"botania_setLoveCause"(uUID0: $UUID$$Type): void
}

export namespace $AnimalAccessor {
const probejs$$marker: never
}
export abstract class $AnimalAccessor$$Static implements $AnimalAccessor {
}
}

declare module "packages/vazkii/botania/mixin/client/$ModelManagerAccessor" {
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"

export interface $ModelManagerAccessor {
"getBakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
get "bakedRegistry"(): $Map<$ResourceLocation, $BakedModel>
}

export namespace $ModelManagerAccessor {
const probejs$$marker: never
}
export abstract class $ModelManagerAccessor$$Static implements $ModelManagerAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$LevelAccessor" {
import { $NeighborUpdater } from "packages/net/minecraft/world/level/redstone/$NeighborUpdater"

export interface $LevelAccessor {
"getNeighborUpdater"(): $NeighborUpdater
get "neighborUpdater"(): $NeighborUpdater
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$HopperBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HopperBlockEntityAccessor {
}

export namespace $HopperBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $HopperBlockEntityAccessor$$Static implements $HopperBlockEntityAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$ServerPlayerGameModeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerGameModeAccessor {
"botania_isDestroyingBlock"(): boolean
}

export namespace $ServerPlayerGameModeAccessor {
const probejs$$marker: never
}
export abstract class $ServerPlayerGameModeAccessor$$Static implements $ServerPlayerGameModeAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$StatsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StatsAccessor {
}

export namespace $StatsAccessor {
const probejs$$marker: never
}
export abstract class $StatsAccessor$$Static implements $StatsAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$FireBlockAccessor" {
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockAccessor {
"botania_register"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$CreeperAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreeperAccessor {
"setCurrentFuseTime"(int0: integer): void
set "currentFuseTime"(value: integer)
}

export namespace $CreeperAccessor {
const probejs$$marker: never
}
export abstract class $CreeperAccessor$$Static implements $CreeperAccessor {
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaRequest" {
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $CorporeaRequestMatcher } from "packages/vazkii/botania/api/corporea/$CorporeaRequestMatcher"

export interface $CorporeaRequest {
"getEntity"(): $LivingEntity
"getExtracted"(): integer
"getFound"(): integer
"getMatcher"(): $CorporeaRequestMatcher
"getStillNeeded"(): integer
"trackExtracted"(int0: integer): void
"trackFound"(int0: integer): void
"trackSatisfied"(int0: integer): void
get "entity"(): $LivingEntity
get "extracted"(): integer
get "found"(): integer
get "matcher"(): $CorporeaRequestMatcher
get "stillNeeded"(): integer
}

export namespace $CorporeaRequest {
const probejs$$marker: never
}
export abstract class $CorporeaRequest$$Static implements $CorporeaRequest {
}
}

declare module "packages/vazkii/botania/mixin/$RecipeProviderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RecipeProviderAccessor {
}

export namespace $RecipeProviderAccessor {
const probejs$$marker: never
}
export abstract class $RecipeProviderAccessor$$Static implements $RecipeProviderAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor {
"callUnsetRemoved"(): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "packages/vazkii/botania/mixin/client/$MinecraftAccessor" {
import { $ItemColors } from "packages/net/minecraft/client/color/item/$ItemColors"

export interface $MinecraftAccessor {
"getItemColors"(): $ItemColors
get "itemColors"(): $ItemColors
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftAccessor$$Static implements $MinecraftAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$RecipeManagerAccessor" {
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map } from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {
"botania_getAll"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

declare module "packages/vazkii/botania/mixin/client/$ItemRendererAccessor" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $ItemRendererAccessor {
"callRenderQuadList"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, list2: $List$$Type<$BakedQuad$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
export abstract class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BundleItemAccessor {
}

export namespace $BundleItemAccessor {
const probejs$$marker: never
}
export abstract class $BundleItemAccessor$$Static implements $BundleItemAccessor {
}
}

declare module "packages/vazkii/botania/api/item/$SparkEntity" {
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $SparkEntity {
"entity"(): $Entity
"getAttachPos"(): $BlockPos
"getNetwork"(): $DyeColor
"setNetwork"(dyeColor0: $DyeColor$$Type): void
get "attachPos"(): $BlockPos
get "network"(): $DyeColor
set "network"(value: $DyeColor$$Type)
}

export namespace $SparkEntity {
const probejs$$marker: never
}
export abstract class $SparkEntity$$Static implements $SparkEntity {
}
}

declare module "packages/vazkii/botania/api/recipe/$ElvenPortalUpdateEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $AABB, $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $ElvenPortalUpdateEvent extends $Event {
constructor()
constructor(blockEntity0: $BlockEntity$$Type, aABB1: $AABB$$Type, boolean2: boolean, list3: $List$$Type<$ItemStack$$Type>)

public "getAabb"(): $AABB
public "getPortalTile"(): $BlockEntity
public "getStacksInside"(): $List<$ItemStack>
public "isOpen"(): boolean
get "aabb"(): $AABB
get "portalTile"(): $BlockEntity
get "stacksInside"(): $List<$ItemStack>
get "open"(): boolean
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaSpark" {
import { $SparkEntity } from "packages/vazkii/botania/api/item/$SparkEntity"
import { $DyeColor, $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $CorporeaNode } from "packages/vazkii/botania/api/corporea/$CorporeaNode"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $CorporeaSpark extends $SparkEntity {
"entity"(): $Entity
"getAttachPos"(): $BlockPos
"getConnections"(): $Set<$CorporeaSpark>
"getMaster"(): $CorporeaSpark
"getNetwork"(): $DyeColor
"getRelatives"(): $List<$CorporeaSpark>
"getSparkNode"(): $CorporeaNode
"introduceNearbyTo"(set0: $Set$$Type<$CorporeaSpark$$Type>, corporeaSpark1: $CorporeaSpark$$Type): void
"isCreative"(): boolean
"isMaster"(): boolean
"onItemExtracted"(itemStack0: $ItemStack$$Type): void
"onItemsRequested"(list0: $List$$Type<$ItemStack$$Type>): void
"setNetwork"(dyeColor0: $DyeColor$$Type): void
get "attachPos"(): $BlockPos
get "connections"(): $Set<$CorporeaSpark>
get "master"(): $CorporeaSpark
get "network"(): $DyeColor
get "relatives"(): $List<$CorporeaSpark>
get "sparkNode"(): $CorporeaNode
get "creative"(): boolean
get "master"(): boolean
set "network"(value: $DyeColor$$Type)
}

export namespace $CorporeaSpark {
const probejs$$marker: never
}
export abstract class $CorporeaSpark$$Static implements $CorporeaSpark {
}
}

declare module "packages/vazkii/botania/mixin/client/$AbstractContainerScreenAccessor" {
import { $Slot } from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerScreenAccessor {
"getHoveredSlot"(): $Slot
get "hoveredSlot"(): $Slot
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$MobAccessor" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $GoalSelector } from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MobAccessor {
"botania_getAmbientSound"(): $SoundEvent
"getGoalSelector"(): $GoalSelector
"getTargetSelector"(): $GoalSelector
"setLootTable"(resourceLocation0: $ResourceLocation$$Type): void
get "goalSelector"(): $GoalSelector
get "targetSelector"(): $GoalSelector
set "lootTable"(value: $ResourceLocation$$Type)
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$AbstractHorseAccessor" {
import { $SimpleContainer } from "packages/net/minecraft/world/$SimpleContainer"

export interface $AbstractHorseAccessor {
"botania_createInventory"(): void
"getInventory"(): $SimpleContainer
get "inventory"(): $SimpleContainer
}

export namespace $AbstractHorseAccessor {
const probejs$$marker: never
}
export abstract class $AbstractHorseAccessor$$Static implements $AbstractHorseAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$BlockPropertiesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockPropertiesAccessor {
"botania_setHasCollision"(boolean0: boolean): void
"botania_setIsRandomlyTicking"(boolean0: boolean): void
"botania_setReplaceable"(boolean0: boolean): void
}

export namespace $BlockPropertiesAccessor {
const probejs$$marker: never
}
export abstract class $BlockPropertiesAccessor$$Static implements $BlockPropertiesAccessor {
}
}

declare module "packages/vazkii/botania/common/$PlayerAccess" {
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $PlayerAccess {
"botania$setCritTarget"(livingEntity0: $LivingEntity$$Type): void
}

export namespace $PlayerAccess {
const probejs$$marker: never
}
export abstract class $PlayerAccess$$Static implements $PlayerAccess {
}
}

declare module "packages/vazkii/botania/api/mana/$ManaItemsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ManaItemsEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>)

public "getItems"(): $List<$ItemStack>
public "getPlayer"(): $Player
get "items"(): $List<$ItemStack>
get "player"(): $Player
}
}

declare module "packages/vazkii/botania/api/mana/$ManaProficiencyEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ManaProficiencyEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean)

public "getEntityPlayer"(): $Player
public "getTool"(): $ItemStack
public "isProficient"(): boolean
public "setProficient"(boolean0: boolean): void
get "entityPlayer"(): $Player
get "tool"(): $ItemStack
get "proficient"(): boolean
set "proficient"(value: boolean)
}
}

declare module "packages/vazkii/botania/mixin/$AbstractCauldronBlockAccessor" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $CauldronInteraction } from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import { $Map } from "packages/java/util/$Map"

export interface $AbstractCauldronBlockAccessor {
"botania_getInteractions"(): $Map<$Item, $CauldronInteraction>
}

export namespace $AbstractCauldronBlockAccessor {
const probejs$$marker: never
}
export abstract class $AbstractCauldronBlockAccessor$$Static implements $AbstractCauldronBlockAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$LivingEntityAccessor" {
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $LivingEntityAccessor {
"botania_playHurtSound"(damageSource0: $DamageSource$$Type): void
"setUseItemRemaining"(int0: integer): void
set "useItemRemaining"(value: integer)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "packages/vazkii/botania/api/mana/$ManaNetworkAction" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ManaNetworkAction extends $Enum<$ManaNetworkAction> {
static readonly "ADD": $ManaNetworkAction
static readonly "REMOVE": $ManaNetworkAction

public static "valueOf"(string0: string): $ManaNetworkAction
public static "values"(): $ManaNetworkAction[]
}
}

declare module "packages/vazkii/botania/mixin/$MushroomCowAccessor" {
import { $MobEffect, $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"

export interface $MushroomCowAccessor {
"getEffect"(): $MobEffect
"getEffectDuration"(): integer
"setEffect"(mobEffect0: $MobEffect$$Type): void
"setEffectDuration"(int0: integer): void
get "effect"(): $MobEffect
get "effectDuration"(): integer
set "effect"(value: $MobEffect$$Type)
set "effectDuration"(value: integer)
}

export namespace $MushroomCowAccessor {
const probejs$$marker: never
}
export abstract class $MushroomCowAccessor$$Static implements $MushroomCowAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$ProjectileAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProjectileAccessor {
"botania_getLeftOwner"(): boolean
}

export namespace $ProjectileAccessor {
const probejs$$marker: never
}
export abstract class $ProjectileAccessor$$Static implements $ProjectileAccessor {
}
}

declare module "packages/vazkii/botania/mixin/client/$LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "packages/vazkii/botania/api/mana/$ManaReceiver" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $ManaReceiver {
"canReceiveManaFromBursts"(): boolean
"getCurrentMana"(): integer
"getManaReceiverLevel"(): $Level
"getManaReceiverPos"(): $BlockPos
"isFull"(): boolean
"receiveMana"(int0: integer): void
get "currentMana"(): integer
get "manaReceiverLevel"(): $Level
get "manaReceiverPos"(): $BlockPos
get "full"(): boolean
}

export namespace $ManaReceiver {
const probejs$$marker: never
}
export abstract class $ManaReceiver$$Static implements $ManaReceiver {
}
}

declare module "packages/vazkii/botania/forge/mixin/client/$ModelBakeryForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelBakeryForgeAccessor {
}

export namespace $ModelBakeryForgeAccessor {
const probejs$$marker: never
}
export abstract class $ModelBakeryForgeAccessor$$Static implements $ModelBakeryForgeAccessor {
}
}

declare module "packages/vazkii/botania/forge/mixin/$AbstractFurnaceBlockEntityForgeAccessor" {
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $AbstractFurnaceBlockEntityForgeAccessor {
"callCanBurn"(registryAccess0: $RegistryAccess$$Type, recipe1: $Recipe$$Type<any>, nonNullList2: $NonNullList$$Type<$ItemStack$$Type>, int3: integer): boolean
}

export namespace $AbstractFurnaceBlockEntityForgeAccessor {
const probejs$$marker: never
}
export abstract class $AbstractFurnaceBlockEntityForgeAccessor$$Static implements $AbstractFurnaceBlockEntityForgeAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$DispenserBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DispenserBlockAccessor {
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "packages/vazkii/botania/api/mana/$ManaDiscountEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ManaDiscountEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, float1: float, itemStack2: $ItemStack$$Type)

public "getDiscount"(): float
public "getEntityPlayer"(): $Player
public "getTool"(): $ItemStack
public "setDiscount"(float0: float): void
get "discount"(): float
get "entityPlayer"(): $Player
get "tool"(): $ItemStack
set "discount"(value: float)
}
}

declare module "packages/vazkii/botania/api/mana/$ManaBlockType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ManaBlockType extends $Enum<$ManaBlockType> {
static readonly "COLLECTOR": $ManaBlockType
static readonly "POOL": $ManaBlockType

public static "valueOf"(string0: string): $ManaBlockType
public static "values"(): $ManaBlockType[]
}
}

declare module "packages/vazkii/botania/mixin/$BiomeAccessor" {
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BiomeAccessor {
"callGetTemperature"(blockPos0: $BlockPos$$Type): float
}

export namespace $BiomeAccessor {
const probejs$$marker: never
}
export abstract class $BiomeAccessor$$Static implements $BiomeAccessor {
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaIndexRequestEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "packages/vazkii/botania/api/corporea/$CorporeaSpark"
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "packages/vazkii/botania/api/corporea/$CorporeaRequestMatcher"

export class $CorporeaIndexRequestEvent extends $Event {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, corporeaRequestMatcher1: $CorporeaRequestMatcher$$Type, int2: integer, corporeaSpark3: $CorporeaSpark$$Type)

public "getIndexSpark"(): $CorporeaSpark
public "getMatcher"(): $CorporeaRequestMatcher
public "getRequestCount"(): integer
public "getRequester"(): $ServerPlayer
get "indexSpark"(): $CorporeaSpark
get "matcher"(): $CorporeaRequestMatcher
get "requestCount"(): integer
get "requester"(): $ServerPlayer
}
}

declare module "packages/vazkii/botania/mixin/$InventoryAccessor" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $InventoryAccessor {
"getCompartments"(): $List<$NonNullList<$ItemStack>>
get "compartments"(): $List<$NonNullList<$ItemStack>>
}

export namespace $InventoryAccessor {
const probejs$$marker: never
}
export abstract class $InventoryAccessor$$Static implements $InventoryAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$GrowingPlantBodyBlockMixin" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $GrowingPlantBodyBlockMixin {
"botania_getHeadPos"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type): $Optional<$BlockPos>
}

export namespace $GrowingPlantBodyBlockMixin {
const probejs$$marker: never
}
export abstract class $GrowingPlantBodyBlockMixin$$Static implements $GrowingPlantBodyBlockMixin {
}
}

declare module "packages/vazkii/botania/mixin/$RandomizableContainerBlockEntityAccessor" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RandomizableContainerBlockEntityAccessor {
"getLootTable"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
}

export namespace $RandomizableContainerBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $RandomizableContainerBlockEntityAccessor$$Static implements $RandomizableContainerBlockEntityAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$ItemEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccessor {
"getPickupDelay"(): integer
"setAge"(int0: integer): void
get "pickupDelay"(): integer
set "age"(value: integer)
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
export abstract class $ItemEntityAccessor$$Static implements $ItemEntityAccessor {
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaNode" {
import { $CorporeaRequest$$Type } from "packages/vazkii/botania/api/corporea/$CorporeaRequest"
import { $List } from "packages/java/util/$List"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $CorporeaSpark } from "packages/vazkii/botania/api/corporea/$CorporeaSpark"

export interface $CorporeaNode {
"countItems"(corporeaRequest0: $CorporeaRequest$$Type): $List<$ItemStack>
"extractItems"(corporeaRequest0: $CorporeaRequest$$Type): $List<$ItemStack>
"getPos"(): $BlockPos
"getSpark"(): $CorporeaSpark
"getWorld"(): $Level
get "pos"(): $BlockPos
get "spark"(): $CorporeaSpark
get "world"(): $Level
}

export namespace $CorporeaNode {
const probejs$$marker: never
}
export abstract class $CorporeaNode$$Static implements $CorporeaNode {
}
}

declare module "packages/vazkii/botania/mixin/$PistonBaseBlockAccessor" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $PistonBaseBlockAccessor {
"botania_moveBlocks"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, boolean3: boolean): boolean
}

export namespace $PistonBaseBlockAccessor {
const probejs$$marker: never
}
export abstract class $PistonBaseBlockAccessor$$Static implements $PistonBaseBlockAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$AbstractFurnaceBlockEntityAccessor" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $RecipeManager$CachedCheck } from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"

export interface $AbstractFurnaceBlockEntityAccessor {
"getCookingProgress"(): integer
"getCookingTotalTime"(): integer
"getItems"(): $NonNullList<$ItemStack>
"getLitTime"(): integer
"getQuickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
"setCookingProgress"(int0: integer): void
"setLitTime"(int0: integer): void
get "cookingProgress"(): integer
get "cookingTotalTime"(): integer
get "items"(): $NonNullList<$ItemStack>
get "litTime"(): integer
get "quickCheck"(): $RecipeManager$CachedCheck<$Container, $AbstractCookingRecipe>
set "cookingProgress"(value: integer)
set "litTime"(value: integer)
}

export namespace $AbstractFurnaceBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $AbstractFurnaceBlockEntityAccessor$$Static implements $AbstractFurnaceBlockEntityAccessor {
}
}

declare module "packages/vazkii/botania/mixin/client/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "packages/vazkii/botania/mixin/$ExperienceOrbAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccessor {
"botania_getCount"(): integer
"botania_setCount"(int0: integer): void
}

export namespace $ExperienceOrbAccessor {
const probejs$$marker: never
}
export abstract class $ExperienceOrbAccessor$$Static implements $ExperienceOrbAccessor {
}
}

declare module "packages/vazkii/botania/api/corporea/$CorporeaRequestEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $CorporeaSpark, $CorporeaSpark$$Type } from "packages/vazkii/botania/api/corporea/$CorporeaSpark"
import { $CorporeaRequestMatcher, $CorporeaRequestMatcher$$Type } from "packages/vazkii/botania/api/corporea/$CorporeaRequestMatcher"

export class $CorporeaRequestEvent extends $Event {
constructor(corporeaRequestMatcher0: $CorporeaRequestMatcher$$Type, int1: integer, corporeaSpark2: $CorporeaSpark$$Type, boolean3: boolean)
constructor()

public "getCount"(): integer
public "getMatcher"(): $CorporeaRequestMatcher
public "getSpark"(): $CorporeaSpark
public "isDryRun"(): boolean
get "count"(): integer
get "matcher"(): $CorporeaRequestMatcher
get "spark"(): $CorporeaSpark
get "dryRun"(): boolean
}
}

declare module "packages/vazkii/botania/api/item/$TinyPotatoRenderEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $TinyPotatoRenderEvent extends $Event {
readonly "buffers": $MultiBufferSource
readonly "light": integer
readonly "ms": $PoseStack
readonly "name": $Component
readonly "overlay": integer
readonly "partTicks": float
readonly "tile": $BlockEntity

constructor()
constructor(blockEntity0: $BlockEntity$$Type, component1: $Component$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer)

}
}

declare module "packages/vazkii/botania/mixin/$WitherEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WitherEntityAccessor {
"botania_getHeadX"(int0: integer): double
"botania_getHeadY"(int0: integer): double
"botania_getHeadZ"(int0: integer): double
}

export namespace $WitherEntityAccessor {
const probejs$$marker: never
}
export abstract class $WitherEntityAccessor$$Static implements $WitherEntityAccessor {
}
}

