declare module "packages/net/minecraft/world/level/block/piston/$PistonHeadBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
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
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $PistonType } from "packages/net/minecraft/world/level/block/state/properties/$PistonType"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $DirectionalBlock } from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $PistonHeadBlock extends $DirectionalBlock {
static readonly "PLATFORM": float
static readonly "SHORT": $BooleanProperty
static readonly "TYPE": $EnumProperty<$PistonType>

constructor(properties0: $BlockBehaviour$Properties$$Type)

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
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/piston/$MovingPistonBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $DirectionProperty } from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $BaseEntityBlock } from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import { $PistonType } from "packages/net/minecraft/world/level/block/state/properties/$PistonType"

export class $MovingPistonBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<$PistonType>

constructor(properties0: $BlockBehaviour$Properties$$Type)

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
public static "newMovingBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, boolean4: boolean, boolean5: boolean): $BlockEntity
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
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ClientboundBlockEntityDataPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $IExtendedPistonTile } from "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedPistonTile"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $IBlockHolder } from "packages/net/mehvahdjukaar/moonlight/api/block/$IBlockHolder"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export class $PistonMovingBlockEntity extends $BlockEntity implements $IExtendedPistonTile, $IBlockHolder {
static readonly "TICK_MOVEMENT": double

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, boolean4: boolean, boolean5: boolean)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "finalTick"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCollisionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getDirection"(): $Direction
public "getHeldBlock"(): $BlockState
public "getHeldBlock"(int0: integer): $BlockState
public "getLastTicked"(): long
public "getModelData"(): $ModelData
public "getMovedState"(): $BlockState
public "getMovementDirection"(): $Direction
public "getProgress"(float0: float): float
public "getRenderBoundingBox"(): $AABB
public "getXOff"(float0: float): float
public "getYOff"(float0: float): float
public "getZOff"(float0: float): float
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$ekl000$onFinishedShortPulse"(ci: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isExtending"(): boolean
public "isSourcePiston"(): boolean
public static "moveCollidedEntities"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, pistonMovingBlockEntity3: $PistonMovingBlockEntity$$Type): void
public static "moveStuckEntities"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float, pistonMovingBlockEntity3: $PistonMovingBlockEntity$$Type): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setHeldBlock"(state: $BlockState$$Type): boolean
public "setHeldBlock"(blockState0: $BlockState$$Type, int1: integer): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, pistonMovingBlockEntity3: $PistonMovingBlockEntity$$Type): void
public "tickMovedBlock"(level: $Level$$Type, pos: $BlockPos$$Type): void
get "deathTicks"(): integer
set "deathTicks"(value: integer)
get "lastTicked"(): long
set "lastTicked"(value: long)
get "progress"(): float
set "progress"(value: float)
get "progressO"(): float
set "progressO"(value: float)
get "direction"(): $Direction
get "heldBlock"(): $BlockState
get "modelData"(): $ModelData
get "movedState"(): $BlockState
get "movementDirection"(): $Direction
get "renderBoundingBox"(): $AABB
get "extending"(): boolean
get "sourcePiston"(): boolean
set "heldBlock"(value: $BlockState$$Type)
}
}

declare module "packages/net/minecraft/world/level/block/piston/$PistonStructureResolver" {
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $List } from "packages/java/util/$List"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AccessorPistonStructureResolver } from "packages/org/violetmoon/zeta/mixin/mixins/$AccessorPistonStructureResolver"

export class $PistonStructureResolver implements $AccessorPistonStructureResolver {
static readonly "MAX_PUSH_DEPTH": integer

constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, boolean3: boolean)

public "getPushDirection"(): $Direction
public "getToDestroy"(): $List<$BlockPos>
public "getToPush"(): $List<$BlockPos>
public "resolve"(): boolean
get "pushDirection"(): $Direction
get "toDestroy"(): $List<$BlockPos>
get "toPush"(): $List<$BlockPos>
}
}

declare module "packages/net/minecraft/world/level/block/piston/$PistonBaseBlock" {
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
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
import { $PistonBaseBlockAccessor } from "packages/vazkii/botania/mixin/$PistonBaseBlockAccessor"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $PistonStructureResolver$$Type } from "packages/net/minecraft/world/level/block/piston/$PistonStructureResolver"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $Map$$Type } from "packages/java/util/$Map"
import { $DirectionalBlock } from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $PistonBaseBlock extends $DirectionalBlock implements $PistonBaseBlockAccessor {
static readonly "EXTENDED": $BooleanProperty
static readonly "PLATFORM_THICKNESS": float
static readonly "TRIGGER_CONTRACT": integer
static readonly "TRIGGER_DROP": integer
static readonly "TRIGGER_EXTEND": integer

constructor(boolean0: boolean, properties1: $BlockBehaviour$Properties$$Type)

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
public "handler$zcf000$onMoveBlocks"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, boolean3: boolean, callbackInfoReturnable4: $CallbackInfoReturnable$$Type<any>, blockPos5: $BlockPos$$Type, pistonStructureResolver6: $PistonStructureResolver$$Type, map7: $Map$$Type<any, any>, list8: $List$$Type<any>): void
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
public static "isPushable"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, boolean4: boolean, direction5: $Direction$$Type): boolean
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
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

