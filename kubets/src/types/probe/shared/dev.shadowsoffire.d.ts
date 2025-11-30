declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$ApothEnchantBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $EnchantmentTableBlock } from "packages/net/minecraft/world/level/block/$EnchantmentTableBlock"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IReplacementBlock } from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ApothEnchantBlock extends $EnchantmentTableBlock implements $IReplacementBlock {
constructor()

public "_setDefaultState"(blockState0: $BlockState$$Type): void
public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "setStateContainer"(stateDefinition0: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
set "stateContainer"(value: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>)
}
}

declare module "packages/dev/shadowsoffire/attributeslib/api/$IFormattableAttribute" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID } from "packages/java/util/$UUID"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IFormattableAttribute {
"addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
"getBaseUUID"(): $UUID
"getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
"getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
"ths"(): $Attribute
"toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
"toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
"toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
}

export namespace $IFormattableAttribute {
function isNullOrAddition(operation0: $AttributeModifier$Operation$$Type): boolean
function toBaseComponent(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
function toComponent(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
function toValueComponent(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
}
export abstract class $IFormattableAttribute$$Static implements $IFormattableAttribute {
static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
}
}

declare module "packages/dev/shadowsoffire/attributeslib/util/$IAttributeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAttributeManager {
"areAttributesUpdating"(): boolean
"setAttributesUpdating"(boolean0: boolean): void
set "attributesUpdating"(value: boolean)
}

export namespace $IAttributeManager {
const probejs$$marker: never
}
export abstract class $IAttributeManager$$Static implements $IAttributeManager {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/util/$DrawsOnLeft" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $AbstractContainerScreen, $AbstractContainerScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $DrawsOnLeft {
"drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer): void
"drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer, int3: integer): void
"ths"(): $AbstractContainerScreen<any>
}

export namespace $DrawsOnLeft {
function draw(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, list2: $List$$Type<$Component$$Type>, int3: integer): void
}
export abstract class $DrawsOnLeft$$Static implements $DrawsOnLeft {
static "draw"(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, list2: $List$$Type<$Component$$Type>, int3: integer): void
}
}

declare module "packages/dev/shadowsoffire/attributeslib/mixin/$AttributeInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AttributeInstanceAccessor {
"getCachedValue"(): double
get "cachedValue"(): double
}

export namespace $AttributeInstanceAccessor {
const probejs$$marker: never
}
export abstract class $AttributeInstanceAccessor$$Static implements $AttributeInstanceAccessor {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/adventure/event/$GetItemSocketsEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $GetItemSocketsEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, int1: integer)
constructor()

public "getSockets"(): integer
public "getStack"(): $ItemStack
public "setSockets"(int0: integer): void
get "sockets"(): integer
get "stack"(): $ItemStack
set "sockets"(value: integer)
}
}

declare module "packages/dev/shadowsoffire/attributeslib/api/$AttributeChangedValueEvent" {
import { $AttributeInstance, $AttributeInstance$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $AttributeChangedValueEvent extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, attributeInstance1: $AttributeInstance$$Type, double2: double, double3: double)
constructor()

public "getAttributeInstance"(): $AttributeInstance
public "getEntity"(): $LivingEntity
public "getNewValue"(): double
public "getOldValue"(): double
get "attributeInstance"(): $AttributeInstance
get "entity"(): $LivingEntity
get "newValue"(): double
get "oldValue"(): double
}
}

declare module "packages/dev/shadowsoffire/apotheosis/util/$DamageSourceExtension" {
import { $DamageType$$Type } from "packages/net/minecraft/world/damagesource/$DamageType"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export interface $DamageSourceExtension {
"addTag"(tagKey0: $TagKey$$Type<$DamageType$$Type>): void
"removeTag"(tagKey0: $TagKey$$Type<$DamageType$$Type>): void
}

export namespace $DamageSourceExtension {
const probejs$$marker: never
}
export abstract class $DamageSourceExtension$$Static implements $DamageSourceExtension {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/replacements/$BaneEnchant" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $DamageEnchantment } from "packages/net/minecraft/world/item/enchantment/$DamageEnchantment"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Enchantment$Rarity$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $MobType$$Type } from "packages/net/minecraft/world/entity/$MobType"
import { $EnchantmentCategory$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $BaneEnchant extends $DamageEnchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, mobType1: $MobType$$Type, ...equipmentSlot2s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "packages/dev/shadowsoffire/placebo/mixin/$AbstractContainerMenuInvoker" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuInvoker {
"_moveItemStackTo"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuInvoker$$Static implements $AbstractContainerMenuInvoker {
}
}

declare module "packages/dev/shadowsoffire/attributeslib/api/client/$GatherSkippedAttributeTooltipsEvent" {
import { $TooltipFlag, $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Set$$Type } from "packages/java/util/$Set"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $GatherSkippedAttributeTooltipsEvent extends $PlayerEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, set2: $Set$$Type<$UUID$$Type>, tooltipFlag3: $TooltipFlag$$Type)
constructor()

public "getFlags"(): $TooltipFlag
public "getStack"(): $ItemStack
public "skipUUID"(uUID0: $UUID$$Type): void
get "flags"(): $TooltipFlag
get "stack"(): $ItemStack
}
}

declare module "packages/dev/shadowsoffire/attributeslib/api/client/$AddAttributeTooltipsEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TooltipFlag, $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $ListIterator, $ListIterator$$Type } from "packages/java/util/$ListIterator"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $AddAttributeTooltipsEvent extends $PlayerEvent {
constructor(itemStack0: $ItemStack$$Type, player1: $Player$$Type, list2: $List$$Type<$Component$$Type>, listIterator3: $ListIterator$$Type<$Component$$Type>, tooltipFlag4: $TooltipFlag$$Type)
constructor()

public "getAttributeTooltipIterator"(): $ListIterator<$Component>
public "getFlags"(): $TooltipFlag
public "getStack"(): $ItemStack
public "getTooltip"(): $List<$Component>
get "attributeTooltipIterator"(): $ListIterator<$Component>
get "flags"(): $TooltipFlag
get "stack"(): $ItemStack
get "tooltip"(): $List<$Component>
}
}

declare module "packages/dev/shadowsoffire/attributeslib/api/client/$GatherEffectScreenTooltipsEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "packages/net/minecraft/world/effect/$MobEffectInstance"

export class $GatherEffectScreenTooltipsEvent extends $Event {
constructor()
constructor(effectRenderingInventoryScreen0: $EffectRenderingInventoryScreen$$Type<any>, mobEffectInstance1: $MobEffectInstance$$Type, list2: $List$$Type<$Component$$Type>)

public "getEffectInstance"(): $MobEffectInstance
public "getScreen"(): $EffectRenderingInventoryScreen<any>
public "getTooltip"(): $List<$Component>
get "effectInstance"(): $MobEffectInstance
get "screen"(): $EffectRenderingInventoryScreen<any>
get "tooltip"(): $List<$Component>
}
}

declare module "packages/dev/shadowsoffire/apotheosis/mixin/$LivingEntityInvoker" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"

export interface $LivingEntityInvoker {
"callActuallyHurt"(damageSource0: $DamageSource$$Type, float1: float): void
"callCheckTotemDeathProtection"(damageSource0: $DamageSource$$Type): boolean
"callGetDeathSound"(): $SoundEvent
"callGetSoundVolume"(): float
}

export namespace $LivingEntityInvoker {
const probejs$$marker: never
}
export abstract class $LivingEntityInvoker$$Static implements $LivingEntityInvoker {
}
}

declare module "packages/dev/shadowsoffire/attributeslib/util/$IFlying" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFlying {
"getAndDestroyFlyingCache"(): boolean
"markFlying"(): void
get "andDestroyFlyingCache"(): boolean
}

export namespace $IFlying {
const probejs$$marker: never
}
export abstract class $IFlying$$Static implements $IFlying {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$ApothAnvilBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $EntityBlock } from "packages/net/minecraft/world/level/block/$EntityBlock"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $AnvilBlock } from "packages/net/minecraft/world/level/block/$AnvilBlock"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $INBTSensitiveFallingBlock } from "packages/dev/shadowsoffire/apotheosis/util/$INBTSensitiveFallingBlock"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ApothAnvilBlock extends $AnvilBlock implements $INBTSensitiveFallingBlock, $EntityBlock {
constructor()

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "toStack"(blockState0: $BlockState$$Type, compoundTag1: $CompoundTag$$Type): $ItemStack
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/dev/shadowsoffire/apotheosis/adventure/event/$ItemSocketingEvent$ModifyResult" {
import { $ItemSocketingEvent } from "packages/dev/shadowsoffire/apotheosis/adventure/event/$ItemSocketingEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemSocketingEvent$ModifyResult extends $ItemSocketingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type)

public "getOutput"(): $ItemStack
public "setOutput"(itemStack0: $ItemStack$$Type): void
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
}
}

declare module "packages/dev/shadowsoffire/placebo/events/$ItemUseEvent" {
import { $UseOnContext, $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $InteractionHand } from "packages/net/minecraft/world/$InteractionHand"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $InteractionResult, $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $ItemUseEvent extends $PlayerEvent {
constructor()
constructor(useOnContext0: $UseOnContext$$Type)

public "getCancellationResult"(): $InteractionResult
public "getContext"(): $UseOnContext
public "getFace"(): $Direction
public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "setCancellationResult"(interactionResult0: $InteractionResult$$Type): void
get "cancellationResult"(): $InteractionResult
get "context"(): $UseOnContext
get "face"(): $Direction
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "level"(): $Level
get "pos"(): $BlockPos
set "cancellationResult"(value: $InteractionResult$$Type)
}
}

declare module "packages/dev/shadowsoffire/placebo/events/$GetEnchantmentLevelEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $GetEnchantmentLevelEvent extends $Event {
constructor(itemStack0: $ItemStack$$Type, map1: $Map$$Type<$Enchantment$$Type, integer>)
constructor()

public "getEnchantments"(): $Map<$Enchantment, integer>
public "getStack"(): $ItemStack
get "enchantments"(): $Map<$Enchantment, integer>
get "stack"(): $ItemStack
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/anvil/$ApothAnvilItem" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $ApothAnvilItem extends $BlockItem {
constructor(block0: $Block$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(object0: any): void
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/replacements/$DefenseEnchant" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ProtectionEnchantment$Type$$Type } from "packages/net/minecraft/world/item/enchantment/$ProtectionEnchantment$Type"
import { $Set$$Type } from "packages/java/util/$Set"
import { $ProtectionEnchantment } from "packages/net/minecraft/world/item/enchantment/$ProtectionEnchantment"
import { $Enchantment$Rarity$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $EnchantmentCategory$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import { $MobType$$Type } from "packages/net/minecraft/world/entity/$MobType"

export class $DefenseEnchant extends $ProtectionEnchantment {
constructor(rarity0: $Enchantment$Rarity$$Type, type1: $ProtectionEnchantment$Type$$Type, ...equipmentSlot2s: $EquipmentSlot$$Type[])

public "allowedInCreativeTab"(item0: $Item$$Type, set1: $Set$$Type<$EnchantmentCategory$$Type>): boolean
public "getDamageBonus"(int0: integer, mobType1: $MobType$$Type, itemStack2: $ItemStack$$Type): float
}
}

declare module "packages/dev/shadowsoffire/apotheosis/adventure/event/$ItemSocketingEvent$CanSocket" {
import { $ItemSocketingEvent } from "packages/dev/shadowsoffire/apotheosis/adventure/event/$ItemSocketingEvent"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemSocketingEvent$CanSocket extends $ItemSocketingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type)

}
}

declare module "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerItem" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $ApothSpawnerItem extends $BlockItem {
constructor()

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "moonlight$addAdditionalBehavior"(additionalItemPlacement0: $AdditionalItemPlacement$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(object0: any): void
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "packages/dev/shadowsoffire/apotheosis/$Apotheosis$ApotheosisCommandEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $LiteralArgumentBuilder, $LiteralArgumentBuilder$$Type } from "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"

export class $Apotheosis$ApotheosisCommandEvent extends $Event {
constructor()
constructor(literalArgumentBuilder0: $LiteralArgumentBuilder$$Type<$CommandSourceStack$$Type>)

public "getRoot"(): $LiteralArgumentBuilder<$CommandSourceStack>
get "root"(): $LiteralArgumentBuilder<$CommandSourceStack>
}
}

declare module "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock" {
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/** @deprecated */
export interface $IReplacementBlock {
"_setDefaultState"(blockState0: $BlockState$$Type): void
"setStateContainer"(stateDefinition0: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>): void
set "stateContainer"(value: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>)
}

export namespace $IReplacementBlock {
const probejs$$marker: never
}
export abstract class $IReplacementBlock$$Static implements $IReplacementBlock {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/mixin/$IForgeItemStackMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeItemStackMixin {
}

export namespace $IForgeItemStackMixin {
const probejs$$marker: never
}
export abstract class $IForgeItemStackMixin$$Static implements $IForgeItemStackMixin {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/util/$INBTSensitiveFallingBlock" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $INBTSensitiveFallingBlock {
"toStack"(blockState0: $BlockState$$Type, compoundTag1: $CompoundTag$$Type): $ItemStack
}

export namespace $INBTSensitiveFallingBlock {
const probejs$$marker: never
}
export abstract class $INBTSensitiveFallingBlock$$Static implements $INBTSensitiveFallingBlock {
}
}

declare module "packages/dev/shadowsoffire/attributeslib/util/$IEntityOwned" {
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IEntityOwned {
"getOwner"(): $LivingEntity
"setOwner"(livingEntity0: $LivingEntity$$Type): void
get "owner"(): $LivingEntity
set "owner"(value: $LivingEntity$$Type)
}

export namespace $IEntityOwned {
const probejs$$marker: never
}
export abstract class $IEntityOwned$$Static implements $IEntityOwned {
}
}

declare module "packages/dev/shadowsoffire/placebo/events/$AnvilLandEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $FallingBlockEntity, $FallingBlockEntity$$Type } from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $AnvilLandEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, fallingBlockEntity4: $FallingBlockEntity$$Type)

public "getEntity"(): $FallingBlockEntity
public "getLevel"(): $Level
public "getNewState"(): $BlockState
public "getOldState"(): $BlockState
public "getPos"(): $BlockPos
get "entity"(): $FallingBlockEntity
get "level"(): $Level
get "newState"(): $BlockState
get "oldState"(): $BlockState
get "pos"(): $BlockPos
}
}

declare module "packages/dev/shadowsoffire/placebo/util/$CachedObject$CachedObjectSource" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CachedObject$CachedObjectSource {
"getOrCreate"<T>(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$ItemStack$$Type, T>): T
"getOrCreate"<T>(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$ItemStack$$Type, T>, toIntFunction2: $ToIntFunction$$Type<$ItemStack$$Type>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>): T
function getOrCreate<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>, toIntFunction3: $ToIntFunction$$Type<$ItemStack$$Type>): T
}
export abstract class $CachedObject$CachedObjectSource$$Static implements $CachedObject$CachedObjectSource {
static "getOrCreate"<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>): T
static "getOrCreate"<T>(itemStack0: $ItemStack$$Type, resourceLocation1: $ResourceLocation$$Type, function2: $Function$$Type<$ItemStack$$Type, T>, toIntFunction3: $ToIntFunction$$Type<$ItemStack$$Type>): T
}
}

declare module "packages/dev/shadowsoffire/apotheosis/adventure/event/$ItemSocketingEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemSocketingEvent extends $Event {
constructor()
constructor(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type)

public "getInputGem"(): $ItemStack
public "getInputStack"(): $ItemStack
get "inputGem"(): $ItemStack
get "inputStack"(): $ItemStack
}
}

declare module "packages/dev/shadowsoffire/apotheosis/$Apotheosis$ApotheosisReloadEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $Apotheosis$ApotheosisReloadEvent extends $Event {
constructor()

}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/api/$IEnchantingBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $IForgeBlock } from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $IPlantable$$Type } from "packages/net/minecraftforge/common/$IPlantable"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IEnchantingBlock extends $IForgeBlock {
"addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
"addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
"canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
"canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
"canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
"canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
"canSustainPlant"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, iPlantable4: $IPlantable$$Type): boolean
"collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
"getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
"getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
"getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
"getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
"getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
"getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
"getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
"getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
"getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
"getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
"getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
"getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
"getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
"getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
"getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
"getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
"getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
"getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
"hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
"isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
"isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
"isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
"isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
"isSlimeBlock"(blockState0: $BlockState$$Type): boolean
"isStickyBlock"(blockState0: $BlockState$$Type): boolean
"isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
"makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
"onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
"onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
"onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
"onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
"onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
"onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
"rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
"setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
"shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
"spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
"supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
}

export namespace $IEnchantingBlock {
const probejs$$marker: never
}
export abstract class $IEnchantingBlock$$Static implements $IEnchantingBlock {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/table/$IEnchantableItem" {
import { $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IEnchantableItem {
"forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
"isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
"onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
"selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
}

export namespace $IEnchantableItem {
const probejs$$marker: never
}
export abstract class $IEnchantableItem$$Static implements $IEnchantableItem {
}
}

declare module "packages/dev/shadowsoffire/fastbench/api/$ICraftingContainer" {
import { $ResultContainer } from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $ICraftingContainer {
"getResult"(): $ResultContainer
get "result"(): $ResultContainer
}

export namespace $ICraftingContainer {
const probejs$$marker: never
}
export abstract class $ICraftingContainer$$Static implements $ICraftingContainer {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/spawn/spawner/$ApothSpawnerBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SpawnerBlock } from "packages/net/minecraft/world/level/block/$SpawnerBlock"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IReplacementBlock } from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ApothSpawnerBlock extends $SpawnerBlock implements $IReplacementBlock {
constructor()

public "_setDefaultState"(blockState0: $BlockState$$Type): void
public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "concat"(...object0s: any[]): $Component
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "setStateContainer"(stateDefinition0: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
set "stateContainer"(value: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>)
}
}

declare module "packages/dev/shadowsoffire/apotheosis/$Apotheosis$ApotheosisConstruction" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $Apotheosis$ApotheosisConstruction extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "packages/dev/shadowsoffire/fastsuite/$ILockableItemStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockableItemStack {
"setLocked"(boolean0: boolean): void
set "locked"(value: boolean)
}

export namespace $ILockableItemStack {
const probejs$$marker: never
}
export abstract class $ILockableItemStack$$Static implements $ILockableItemStack {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/ench/$EnchModuleEvents$TridentGetter" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $EnchModuleEvents$TridentGetter {
"getTridentItem"(): $ItemStack
get "tridentItem"(): $ItemStack
}

export namespace $EnchModuleEvents$TridentGetter {
const probejs$$marker: never
}
export abstract class $EnchModuleEvents$TridentGetter$$Static implements $EnchModuleEvents$TridentGetter {
}
}

declare module "packages/dev/shadowsoffire/apotheosis/village/fletching/$ApothFletchingBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $IReplacementBlock } from "packages/dev/shadowsoffire/placebo/util/$IReplacementBlock"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $FletchingTableBlock } from "packages/net/minecraft/world/level/block/$FletchingTableBlock"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ApothFletchingBlock extends $FletchingTableBlock implements $IReplacementBlock {
static readonly "NAME": $Component

constructor()

public "_setDefaultState"(blockState0: $BlockState$$Type): void
public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "setStateContainer"(stateDefinition0: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
set "stateContainer"(value: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>)
}
}

