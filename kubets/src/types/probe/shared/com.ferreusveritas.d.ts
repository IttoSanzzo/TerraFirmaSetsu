declare module "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal" {
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GrowSignal {
readonly "defaultDir": $Direction

constructor(species0: $Species$$Type, blockPos1: $BlockPos$$Type, float2: float, randomSource3: $RandomSource$$Type)
constructor(species0: $Species$$Type, blockPos1: $BlockPos$$Type, float2: float, randomSource3: $RandomSource$$Type, direction4: $Direction$$Type)

public "doTurn"(direction0: $Direction$$Type): boolean
public "getSpecies"(): $Species
public "isInTrunk"(): boolean
public "step"(): boolean
get "choked"(): boolean
set "choked"(value: boolean)
get "delta"(): $BlockPos
set "delta"(value: $BlockPos$$Type)
get "dir"(): $Direction
set "dir"(value: $Direction$$Type)
get "energy"(): float
set "energy"(value: float)
get "numSteps"(): integer
set "numSteps"(value: integer)
get "numTurns"(): integer
set "numTurns"(value: integer)
get "radius"(): float
set "radius"(value: float)
get "rand"(): $RandomSource
set "rand"(value: $RandomSource$$Type)
get "rootPos"(): $BlockPos
set "rootPos"(value: $BlockPos$$Type)
get "success"(): boolean
set "success"(value: boolean)
get "tapering"(): float
set "tapering"(value: float)
get "species"(): $Species
get "inTrunk"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$RootsJoCode" {
import { $JoCode } from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RootsJoCode extends $JoCode {
constructor(string0: string)
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type)

}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$BranchLoaderBuilder" {
import { $BlockModelBuilder, $BlockModelBuilder$$Type } from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CustomLoaderBuilder } from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"

export class $BranchLoaderBuilder extends $CustomLoaderBuilder<$BlockModelBuilder> {
constructor(resourceLocation0: $ResourceLocation$$Type, blockModelBuilder1: $BlockModelBuilder$$Type, existingFileHelper2: $ExistingFileHelper$$Type)

public static "Roots"(blockModelBuilder0: $BlockModelBuilder$$Type, existingFileHelper1: $ExistingFileHelper$$Type): $BranchLoaderBuilder
public static "branch"(blockModelBuilder0: $BlockModelBuilder$$Type, existingFileHelper1: $ExistingFileHelper$$Type): $BranchLoaderBuilder
public static "surfaceRoot"(blockModelBuilder0: $BlockModelBuilder$$Type, existingFileHelper1: $ExistingFileHelper$$Type): $BranchLoaderBuilder
public "texture"(string0: string, resourceLocation1: $ResourceLocation$$Type): $BranchLoaderBuilder
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $TreePart } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Ageable } from "packages/com/ferreusveritas/dynamictrees/api/$Ageable"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $TreePart$TreePartType } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $RayTraceCollision } from "packages/com/ferreusveritas/dynamictrees/util/$RayTraceCollision"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $LeavesBlock } from "packages/net/minecraft/world/level/block/$LeavesBlock"
import { $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $LeavesProperties, $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $GrowSignal, $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Family } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $MapSignal, $MapSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"

export class $DynamicLeavesBlock extends $LeavesBlock implements $TreePart, $Ageable, $RayTraceCollision {
constructor(leavesProperties0: $LeavesProperties$$Type, properties1: $BlockBehaviour$Properties$$Type)
constructor(properties0: $BlockBehaviour$Properties$$Type)

public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "age"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, randomSource3: $RandomSource$$Type, safeChunkBounds4: $SafeChunkBounds$$Type): integer
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "analyse"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, mapSignal4: $MapSignal$$Type): $MapSignal
public "appearanceChangesWithHydro"(int0: integer, int1: integer): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "branchOut"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, growSignal2: $GrowSignal$$Type): $GrowSignal
public "branchSupport"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, branchBlock2: $BranchBlock$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, int5: integer): integer
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
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
public "getDrops"(player0: $Player$$Type, itemStack1: $ItemStack$$Type, level2: $Level$$Type, blockPos3: $BlockPos$$Type, int4: integer): $List<$ItemStack>
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFamily"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Family
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getHydrationCell"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, leavesProperties4: $LeavesProperties$$Type): $Cell
public "getHydrationLevelFromNeighbors"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, leavesProperties2: $LeavesProperties$$Type): integer
public "getLeavesBlockStateForPlacement"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, boolean4: boolean): $BlockState
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
/** @deprecated */
public "getProperties"(blockState0: $BlockState$$Type): $LeavesProperties
public "getProperties"(): $LeavesProperties
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRadius"(blockState0: $BlockState$$Type): integer
public "getRadiusForConnection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type, direction4: $Direction$$Type, int5: integer): integer
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTreePartType"(): $TreePart$TreePartType
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "growLeavesIfLocationIsSuitable"(levelAccessor0: $LevelAccessor$$Type, leavesProperties1: $LeavesProperties$$Type, blockPos2: $BlockPos$$Type, int3: integer): boolean
public "growLeavesIfLocationIsSuitable"(levelAccessor0: $LevelAccessor$$Type, leavesProperties1: $LeavesProperties$$Type, blockPos2: $BlockPos$$Type, integer3: integer): boolean
public "growSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, growSignal2: $GrowSignal$$Type): $GrowSignal
public "hasAdequateLight"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, leavesProperties2: $LeavesProperties$$Type, blockPos3: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "isBottom"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEntityPassable"(collisionContext0: $CollisionContext$$Type): boolean
public "isEntityPassable"(entity0: $Entity$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isLocationSuitableForNewLeaves"(levelAccessor0: $LevelAccessor$$Type, leavesProperties1: $LeavesProperties$$Type, blockPos2: $BlockPos$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isRayTraceCollidable"(): boolean
public "isRootNode"(): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "needLeaves"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, leavesProperties2: $LeavesProperties$$Type, species3: $Species$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "probabilityForBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type): integer
public "removeIfLightIsInadequate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setProperties"(leavesProperties0: $LeavesProperties$$Type): void
public "setRequiresTool"(v: boolean): void
public "shouldAnalyse"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateAllLeaves"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, randomSource3: $RandomSource$$Type, boolean4: boolean): boolean
public "updateHydro"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): integer
public "updateLeaves"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, randomSource3: $RandomSource$$Type, boolean4: boolean): integer
get "properties"(): $LeavesProperties
set "properties"(value: $LeavesProperties$$Type)
get "blockStates"(): $List<$BlockState>
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
get "treePartType"(): $TreePart$TreePartType
get "rayTraceCollidable"(): boolean
get "rootNode"(): boolean
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGrowContext" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $GenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PostGrowContext extends $GenerationContext {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, blockPos3: $BlockPos$$Type, int4: integer, boolean5: boolean)

public "fertility"(): integer
public "natural"(): boolean
public "treePos"(): $BlockPos
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TypedRegistry$EntryType, $TypedRegistry$EntryType$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SimpleRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $TypedRegistry<V extends $RegistryEntry<V>> extends $SimpleRegistry<V> {
constructor(class0: $Class$$Type<V>, v1: V, entryType2: $TypedRegistry$EntryType$$Type<V>)
constructor(string0: string, class1: $Class$$Type<V>, v2: V, entryType3: $TypedRegistry$EntryType$$Type<V>)

public static "createDefaultCodec"<V extends $RegistryEntry<V>>(function0: $Function$$Type<$ResourceLocation$$Type, V>): $Codec<V>
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "getDefaultType"(): $TypedRegistry$EntryType<V>
public "getType"(resourceLocation0: $ResourceLocation$$Type): $TypedRegistry$EntryType<V>
public "getType"(jsonObject0: $JsonObject$$Type, resourceLocation1: $ResourceLocation$$Type): $TypedRegistry$EntryType<V>
public "hasType"(resourceLocation0: $ResourceLocation$$Type): boolean
public static "newType"<V extends $RegistryEntry<V>>(codec0: $Codec$$Type<V>): $TypedRegistry$EntryType<V>
public static "newType"<V extends $RegistryEntry<V>>(function0: $Function$$Type<$ResourceLocation$$Type, V>): $TypedRegistry$EntryType<V>
public static "putJsonRegistryName"(jsonObject0: $JsonObject$$Type, resourceLocation1: $ResourceLocation$$Type): $JsonObject
public "registerType"(resourceLocation0: $ResourceLocation$$Type, entryType1: $TypedRegistry$EntryType$$Type<V>): void
public "spliterator"(): $Spliterator<V>
get "defaultType"(): $TypedRegistry$EntryType<V>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$CommonOverride" {
import { $BlockGetter, $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $Species$CommonOverride extends $BiPredicate<$BlockGetter, $BlockPos> {
"and"(biPredicate0: $BiPredicate$$Type<$BlockGetter$$Type, $BlockPos$$Type>): $BiPredicate<$BlockGetter, $BlockPos>
"negate"(): $BiPredicate<$BlockGetter, $BlockPos>
"or"(biPredicate0: $BiPredicate$$Type<$BlockGetter$$Type, $BlockPos$$Type>): $BiPredicate<$BlockGetter, $BlockPos>
"test"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
}

export namespace $Species$CommonOverride {
const probejs$$marker: never
}
export abstract class $Species$CommonOverride$$Static implements $Species$CommonOverride {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellSolver" {
import { $Cell$$Type } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"

export interface $CellSolver {
"solve"(cell0s: $Cell$$Type[]): integer
}

export namespace $CellSolver {
const probejs$$marker: never
}
export abstract class $CellSolver$$Static implements $CellSolver {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $DynamicTrees$DestroyMode extends $Enum<$DynamicTrees$DestroyMode> {
static readonly "HARVEST": $DynamicTrees$DestroyMode
static readonly "IGNORE": $DynamicTrees$DestroyMode
static readonly "OVERFLOW": $DynamicTrees$DestroyMode
static readonly "ROT": $DynamicTrees$DestroyMode
static readonly "SET_RADIUS": $DynamicTrees$DestroyMode
static readonly "SLOPPY": $DynamicTrees$DestroyMode

public static "valueOf"(string0: string): $DynamicTrees$DestroyMode
public static "values"(): $DynamicTrees$DestroyMode[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$FutureBreakable" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $FutureBreakable {
"futureBreak"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): void
}

export namespace $FutureBreakable {
const probejs$$marker: never
}
export abstract class $FutureBreakable$$Static implements $FutureBreakable {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration" {
import { $PropertiesAccessor$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor"
import { $Configurable, $Configurable$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Optional } from "packages/java/util/$Optional"
import { $ConfigurationProperty$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $Configuration<T extends $Configuration<T, C>, C extends $Configurable> extends $RegistryEntry<T> {
constructor(c0: C)

public "copy"(): T
public "get"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>): V
public "getAsOptional"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>): $Optional<V>
public "getConfigurable"(): C
public "getOrInvalidDefault"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>, predicate1: $Predicate$$Type<V>, v2: V): V
public "has"(configurationProperty0: $ConfigurationProperty$$Type<any>): boolean
public "with"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>, v1: V): T
public "withAll"(propertiesAccessor0: $PropertiesAccessor$$Type): T
get "configurable"(): C
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/event/$TransitionSaplingToTreeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $TransitionSaplingToTreeEvent extends $Event {
constructor(species0: $Species$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type)
constructor()

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getSpecies"(): $Species
get "level"(): $Level
get "pos"(): $BlockPos
get "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections" {
import { $RootConnections$ConnectionLevel, $RootConnections$ConnectionLevel$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$RootConnections$ConnectionLevel"
import { $Connections } from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ModelProperty } from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $RootConnections extends $Connections {
static readonly "PLACEHOLDER_CONNECTION_LEVELS": $RootConnections$ConnectionLevel[]
static readonly "ROOT_CONNECTIONS_PROPERTY": $ModelProperty<$RootConnections>

constructor()
constructor(rootConnections0: $RootConnections$$Type)

public "getConnectionLevels"(): $RootConnections$ConnectionLevel[]
public "setConnectionLevel"(direction0: $Direction$$Type, connectionLevel1: $RootConnections$ConnectionLevel$$Type): void
public "setConnectionLevels"(connectionLevel0s: $RootConnections$ConnectionLevel$$Type[]): void
get "connectionLevels"(): $RootConnections$ConnectionLevel[]
set "connectionLevels"(value: $RootConnections$ConnectionLevel$$Type[])
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Class } from "packages/java/lang/$Class"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $Registry<V extends $RegistryEntry<V>> extends $Iterable<V> {
"clear"(): void
"dataGenerationStream"(string0: string): $Stream<V>
"dump"(): void
"forEach"(consumer0: $Consumer$$Type<V>): void
"generateIfValidRunnable"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<V>, runnable2: $Runnable$$Type): $Runnable
"get"(resourceLocation0: $ResourceLocation$$Type): V
"get"(string0: string): V
"getAll"(): $Set<V>
"getAllFor"(string0: string): $Set<V>
"getAsDataResult"(resourceLocation0: $ResourceLocation$$Type): $DataResult<V>
"getComparator"(): $Comparator<V>
"getGetterCodec"(): $Codec<V>
"getName"(): string
"getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<V>
"getOptional"(string0: string): $Optional<V>
"getRegistryNames"(): $Set<$ResourceLocation>
"getType"(): $Class<V>
"has"(resourceLocation0: $ResourceLocation$$Type): boolean
"isLocked"(): boolean
"iterator"(): $Iterator<V>
"lock"(): void
"postRegistryEvent"(): void
"register"(v0: V): $Registry<V>
"registerAll"(...v0s: V[]): void
"runOnNextLock"(runnable0: $Runnable$$Type): void
"spliterator"(): $Spliterator<V>
"unlock"(): void
[Symbol.iterator](): IterableIterator<V>;
get "all"(): $Set<V>
get "comparator"(): $Comparator<V>
get "getterCodec"(): $Codec<V>
get "name"(): string
get "registryNames"(): $Set<$ResourceLocation>
get "type"(): $Class<V>
get "locked"(): boolean
}

export namespace $Registry {
const probejs$$marker: never
}
export abstract class $Registry$$Static<V extends $RegistryEntry<V>> implements $Registry<V> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $TreePart } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $TreePart$TreePartType } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BonemealableBlock } from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import { $SoilProperties, $SoilProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $EntityBlock } from "packages/net/minecraft/world/level/block/$EntityBlock"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $GrowSignal, $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Family } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockWithDynamicHardness } from "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $MapSignal, $MapSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $RootyBlockDecayer } from "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $RootyBlock extends $BlockWithDynamicHardness implements $TreePart, $EntityBlock, $BonemealableBlock {
static readonly "FERTILITY": $IntegerProperty
static readonly "IS_VARIANT": $BooleanProperty
static "rootyBlockDecayer": $RootyBlockDecayer

constructor(soilProperties0: $SoilProperties$$Type, properties1: $BlockBehaviour$Properties$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "analyse"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, mapSignal4: $MapSignal$$Type): $MapSignal
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "branchSupport"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, branchBlock2: $BranchBlock$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, int5: integer): integer
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
/** Client only, do not use in server scripts */
public "colorMultiplier"(blockColors0: $BlockColors$$Type, blockState1: $BlockState$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, blockPos3: $BlockPos$$Type, int4: integer): integer
public "destroyTree"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "destroyTree"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): void
public "doDecay"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, species3: $Species$$Type): void
public "fallWithTree"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): boolean
public "fallWithTree"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): boolean
public "fertilize"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer): boolean
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getColorFromBark"(): boolean
public "getDecayBlockState"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getFamily"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Family
public "getFertility"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getHydrationCell"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, leavesProperties4: $LeavesProperties$$Type): $Cell
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getPrimitiveSoilBlock"(): $Block
public "getPrimitiveSoilState"(blockState0: $BlockState$$Type): $BlockState
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRadius"(blockState0: $BlockState$$Type): integer
public "getRadiusForConnection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type, direction4: $Direction$$Type, int5: integer): integer
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoilProperties"(): $SoilProperties
public "getSpecies"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $Species
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTreePartType"(): $TreePart$TreePartType
public "getTrunkDirection"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Direction
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "growSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, growSignal2: $GrowSignal$$Type): $GrowSignal
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBonemealSuccess"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isRootNode"(): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidBonemealTarget"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "performBonemeal"(serverLevel0: $ServerLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "probabilityForBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type): integer
/** Client only, do not use in server scripts */
public "rootColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setFertility"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "setSpecies"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type): void
public "shouldAnalyse"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "startAnalysis"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, mapSignal2: $MapSignal$$Type): $MapSignal
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateRadius"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, int3: integer, boolean4: boolean): integer
public "updateTree"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type, boolean4: boolean): void
get "blockStates"(): $List<$BlockState>
get "colorFromBark"(): boolean
get "mod"(): string
get "primitiveSoilBlock"(): $Block
get "soilProperties"(): $SoilProperties
get "treePartType"(): $TreePart$TreePartType
get "rootNode"(): boolean
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/$SeedSaplingRecipe" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $SeedSaplingRecipe {
static readonly "CODEC": $Codec<$SeedSaplingRecipe>

constructor(block0: $Block$$Type, item1: $Item$$Type)
constructor(item0: $Item$$Type)

public "addExtraIngredientForSaplingToSeed"(item0: $Item$$Type): void
public "addExtraIngredientForSeedToSapling"(item0: $Item$$Type): void
public "canCraftSaplingToSeed"(): boolean
public "canCraftSeedToSapling"(): boolean
public "getIngredientsForSaplingToSeed"(): $List<$Item>
public "getIngredientsForSeedToSapling"(): $List<$Item>
public "getSaplingBlock"(): $Optional<$Block>
public "getSaplingItem"(): $Optional<$Item>
public "isValid"(): boolean
public "setCanCraftSaplingToSeed"(boolean0: boolean): void
public "setCanCraftSeedToSapling"(boolean0: boolean): void
public "setReplaceSaplingWhenPlaced"(boolean0: boolean): void
public "setSaplingItem"(item0: $Item$$Type): $SeedSaplingRecipe
public "shouldReplaceSaplingWhenPlaced"(): boolean
get "ingredientsForSaplingToSeed"(): $List<$Item>
get "ingredientsForSeedToSapling"(): $List<$Item>
get "saplingBlock"(): $Optional<$Block>
get "saplingItem"(): $Optional<$Item>
get "valid"(): boolean
set "replaceSaplingWhenPlaced"(value: boolean)
set "saplingItem"(value: $Item$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$IncludesExcludesHolderSet" {
import { $HolderSet, $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $ICustomHolderSet } from "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet"
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $CompositeHolderSet } from "packages/net/minecraftforge/registries/holdersets/$CompositeHolderSet"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $IncludesExcludesHolderSet<T> extends $CompositeHolderSet<T> {
constructor(holderSet0: $HolderSet$$Type<T>, holderSet1: $HolderSet$$Type<T>)

public "clear"(): void
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<$Holder$$Type<T>>, boolean2: boolean): $Codec<$ICustomHolderSet<T>>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "excludes"(): $HolderSet<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "getExcludeComponents"(): $List<$HolderSet<T>>
public "getIncludeComponents"(): $List<$HolderSet<T>>
public "includes"(): $HolderSet<T>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "spliterator"(): $Spliterator<$Holder<T>>
get "excludeComponents"(): $List<$HolderSet<T>>
get "includeComponents"(): $List<$HolderSet<T>>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData$PosType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BranchDestructionData$PosType extends $Enum<$BranchDestructionData$PosType> {
static readonly "BRANCHES": $BranchDestructionData$PosType
static readonly "ENDPOINTS": $BranchDestructionData$PosType
static readonly "LEAVES": $BranchDestructionData$PosType

public static "valueOf"(string0: string): $BranchDestructionData$PosType
public static "values"(): $BranchDestructionData$PosType[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor$IterationAction" {
import { $ConfigurationProperty$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $PropertiesAccessor$IterationAction<V> {
"apply"(configurationProperty0: $ConfigurationProperty$$Type<V>, v1: V): void
}

export namespace $PropertiesAccessor$IterationAction {
const probejs$$marker: never
}
export abstract class $PropertiesAccessor$IterationAction$$Static<V> implements $PropertiesAccessor$IterationAction<V> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc" {
import { $Vec2i, $Vec2i$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$Vec2i"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PoissonDisc extends $Vec2i {
constructor(poissonDisc0: $PoissonDisc$$Type)
constructor(int0: integer, int1: integer, int2: integer)
constructor()
constructor(blockPos0: $BlockPos$$Type, int1: integer)
constructor(int0: integer, int1: integer, int2: integer, boolean3: boolean)
constructor(vec2i0: $Vec2i$$Type, int1: integer)

public "bitToAngle"(int0: integer): double
public "clearArc"(): void
public "discPenetration"(poissonDisc0: $PoissonDisc$$Type): double
public "doCirclesIntersect"(poissonDisc0: $PoissonDisc$$Type): boolean
public "doCirclesIntersectPadding"(poissonDisc0: $PoissonDisc$$Type): boolean
public "edgeMask"(int0: integer, int1: integer): void
public "fillArc"(): void
public "getFreeAngleCCW"(): double
public "getFreeAngleCW"(): double
public "getFreeBitCCW"(): integer
public "getFreeBitCW"(): integer
public "hasFreeAngles"(): boolean
public "isEdge"(int0: integer, int1: integer): boolean
public "isInCenterChunk"(int0: integer, int1: integer): boolean
public "isInside"(int0: integer, int1: integer): boolean
public "isInterior"(int0: integer, int1: integer): boolean
public "isSolved"(): boolean
public "maskArc"(double0: double, double1: double): void
public "set"(int0: integer, int1: integer): $PoissonDisc
public "set"(int0: integer, int1: integer, int2: integer): $PoissonDisc
public "setRadius"(int0: integer): $PoissonDisc
public "setSolved"(): void
get "arc"(): integer
set "arc"(value: integer)
get "radius"(): integer
set "radius"(value: integer)
get "real"(): boolean
set "real"(value: boolean)
get "freeAngleCCW"(): double
get "freeAngleCW"(): double
get "freeBitCCW"(): integer
get "freeBitCW"(): integer
get "solved"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $BlockBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SafeChunkBounds {
static readonly "ANY": $SafeChunkBounds
static readonly "ANY_WG": $SafeChunkBounds

constructor(worldGenLevel0: $WorldGenLevel$$Type, chunkPos1: $ChunkPos$$Type)

public "inBounds"(blockBounds0: $BlockBounds$$Type, boolean1: boolean): boolean
public "inBounds"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "setBlockState"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer, boolean4: boolean): void
public "setBlockState"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): void
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $SafeChunkBounds, $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $LevelContext, $LevelContext$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenerationContext {
constructor(levelContext0: $LevelContext$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type, mutableBlockPos3: $BlockPos$MutableBlockPos$$Type, holder4: $Holder$$Type<$Biome$$Type>, direction5: $Direction$$Type, int6: integer, safeChunkBounds7: $SafeChunkBounds$$Type)

public "biome"(): $Holder<$Biome>
public "facing"(): $Direction
public "level"(): $LevelAccessor
public "levelContext"(): $LevelContext
public "originPos"(): $BlockPos
public "radius"(): integer
public "random"(): $RandomSource
public "rootPos"(): $BlockPos$MutableBlockPos
public "safeBounds"(): $SafeChunkBounds
public "secondChance"(): void
public "secondChanceRegen"(): boolean
public "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PreGenerationContext" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $JoCode, $JoCode$$Type } from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SafeChunkBounds, $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $GenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PreGenerationContext extends $GenerationContext {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, int3: integer, direction4: $Direction$$Type, safeChunkBounds5: $SafeChunkBounds$$Type, joCode6: $JoCode$$Type)

public "bounds"(): $SafeChunkBounds
public "facing"(): $Direction
public "isWorldGen"(): boolean
public "joCode"(): $JoCode
public "radius"(): integer
get "worldGen"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections$ConnectionLevel" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $RootConnections$ConnectionLevel extends $Enum<$RootConnections$ConnectionLevel> implements $StringRepresentable {
static readonly "HIGH": $RootConnections$ConnectionLevel
static readonly "LOW": $RootConnections$ConnectionLevel
static readonly "MID": $RootConnections$ConnectionLevel

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getYOffset"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RootConnections$ConnectionLevel
public static "values"(): $RootConnections$ConnectionLevel[]
get "serializedName"(): string
get "yOffset"(): integer
}
}

declare module "packages/com/ferreusveritas/dynamictrees/models/$FallingTreeEntityModel$TreeQuadData" {
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedQuad, $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $FallingTreeEntityModel$TreeQuadData {
readonly "bakedQuad": $BakedQuad
readonly "color": integer
readonly "state": $BlockState

constructor(bakedQuad0: $BakedQuad$$Type, int1: integer, blockState2: $BlockState$$Type)

}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $EntityDataAccessor } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Species } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $AnimationHandler, $AnimationHandler$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $DataAnimationHandler, $DataAnimationHandler$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/animation/$DataAnimationHandler"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $ModelTracker } from "packages/com/ferreusveritas/dynamictrees/models/$ModelTracker"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $FallingTreeEntity$DestroyType, $FallingTreeEntity$DestroyType$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity$DestroyType"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $BranchDestructionData, $BranchDestructionData$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"

export class $FallingTreeEntity extends $Entity implements $ModelTracker {
static "AnimHandlerBlast": $AnimationHandler
static "AnimHandlerBurn": $AnimationHandler
static "AnimHandlerDrop": $AnimationHandler
static "AnimHandlerFall": $AnimationHandler
static "AnimHandlerFling": $AnimationHandler
static readonly "voxelDataParameter": $EntityDataAccessor<$CompoundTag>

constructor(level0: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$FallingTreeEntity$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "buildAABBFromDestroyData"(branchDestructionData0: $BranchDestructionData$$Type): $AABB
public "buildClient"(): void
public "buildVoxelData"(branchDestructionData0: $BranchDestructionData$$Type): $CompoundTag
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "cleanupRootyDirt"(): void
public "defaultAnimationHandler"(): $AnimationHandler
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropPayLoad"(): void
public static "dropTree"(level0: $Level$$Type, branchDestructionData1: $BranchDestructionData$$Type, list2: $List$$Type<$ItemStack$$Type>, destroyType3: $FallingTreeEntity$DestroyType$$Type): $FallingTreeEntity
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDestroyData"(): $BranchDestructionData
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getGeomCenter"(): $Vec3
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMassCenter"(): $Vec3
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPayload"(): $List<$ItemStack>
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpecies"(): $Species
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getVolume"(): float
public "getVoxelData"(): $CompoundTag
public "handleMotion"(): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasLeaves"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isClientBuilt"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
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
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
/** Client only, do not use in server scripts */
public "modelCleanup"(): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setData"(branchDestructionData0: $BranchDestructionData$$Type, list1: $List$$Type<$ItemStack$$Type>, destroyType2: $FallingTreeEntity$DestroyType$$Type): $FallingTreeEntity
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setVoxelData"(compoundTag0: $CompoundTag$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "setupFromNBT"(compoundTag0: $CompoundTag$$Type): void
public "shouldDie"(): boolean
/** Client only, do not use in server scripts */
public "shouldRender"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public static "spawnItemAsEntity"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type): void
public static "standardDropLeavesPayLoad"(fallingTreeEntity0: $FallingTreeEntity$$Type): void
public static "standardDropLogsPayload"(fallingTreeEntity0: $FallingTreeEntity$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "currentAnimationHandler"(): $AnimationHandler
set "currentAnimationHandler"(value: $AnimationHandler$$Type)
get "dataAnimationHandler"(): $DataAnimationHandler
set "dataAnimationHandler"(value: $DataAnimationHandler$$Type)
get "destroyType"(): $FallingTreeEntity$DestroyType
set "destroyType"(value: $FallingTreeEntity$DestroyType$$Type)
get "landed"(): boolean
set "landed"(value: boolean)
get "onFire"(): boolean
set "onFire"(value: boolean)
get "block"(): $BlockContainerJS
get "destroyData"(): $BranchDestructionData
get "displayName"(): $Component
get "facing"(): $Direction
get "geomCenter"(): $Vec3
get "item"(): $ItemStack
get "level"(): $Level
get "massCenter"(): $Vec3
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "payload"(): $List<$ItemStack>
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "species"(): $Species
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "volume"(): float
get "voxelData"(): $CompoundTag
get "ambientCreature"(): boolean
get "animal"(): boolean
get "clientBuilt"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "voxelData"(value: $CompoundTag$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
set "upFromNBT"(value: $CompoundTag$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourceManager" {
import { $TreeResourcePack$$Type } from "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourcePack"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceLoader$$Type } from "packages/com/ferreusveritas/dynamictrees/api/resource/loading/$ResourceLoader"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $TreeResourceManager extends $ResourceManager {
"addLoader"(resourceLoader0: $ResourceLoader$$Type<any>): void
"addLoaderAfter"(resourceLoader0: $ResourceLoader$$Type<any>, resourceLoader1: $ResourceLoader$$Type<any>): void
"addLoaderBefore"(resourceLoader0: $ResourceLoader$$Type<any>, resourceLoader1: $ResourceLoader$$Type<any>): void
"addLoaders"(...resourceLoader0s: $ResourceLoader$$Type<any>[]): void
"addPack"(treeResourcePack0: $TreeResourcePack$$Type): void
"gatherData"(): void
"getNamespaces"(): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
"listPacks"(): $Stream<$PackResources>
"listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
"listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
"load"(): void
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
"prepareReload"(executor0: $Executor$$Type, executor1: $Executor$$Type): $CompletableFuture<any>[]
"registerAppliers"(): void
"reload"(completableFuture0s: $CompletableFuture$$Type<any>[]): void
"setup"(): void
get "namespaces"(): $Set<string>
}

export namespace $TreeResourceManager {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $TreeResourceManager$$Static implements $TreeResourceManager {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $GrowSignal, $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $MapSignal, $MapSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import { $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $TreePart$TreePartType } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Family } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"

export interface $TreePart {
"analyse"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, mapSignal4: $MapSignal$$Type): $MapSignal
"branchSupport"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, branchBlock2: $BranchBlock$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, int5: integer): integer
"getFamily"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Family
"getHydrationCell"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, leavesProperties4: $LeavesProperties$$Type): $Cell
"getRadius"(blockState0: $BlockState$$Type): integer
"getRadiusForConnection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type, direction4: $Direction$$Type, int5: integer): integer
"getTreePartType"(): $TreePart$TreePartType
"growSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, growSignal2: $GrowSignal$$Type): $GrowSignal
"isRootNode"(): boolean
"probabilityForBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type): integer
"shouldAnalyse"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
get "treePartType"(): $TreePart$TreePartType
get "rootNode"(): boolean
}

export namespace $TreePart {
const probejs$$marker: never
}
export abstract class $TreePart$$Static implements $TreePart {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export interface $RootyBlockDecayer {
"decay"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, species3: $Species$$Type): boolean
}

export namespace $RootyBlockDecayer {
const probejs$$marker: never
}
export abstract class $RootyBlockDecayer$$Static implements $RootyBlockDecayer {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction" {
import { $GrowableBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import { $GrowableBlock$Info$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import { $Enum } from "packages/java/lang/$Enum"

export class $GrowableBlock$MatureAction extends $Enum<$GrowableBlock$MatureAction> {
static readonly "DEFAULT": $GrowableBlock$MatureAction
static readonly "DROP": $GrowableBlock$MatureAction
static readonly "ROT": $GrowableBlock$MatureAction

public "perform"(growableBlock0: $GrowableBlock$$Type, info1: $GrowableBlock$Info$$Type): void
public static "valueOf"(string0: string): $GrowableBlock$MatureAction
public static "values"(): $GrowableBlock$MatureAction[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RayTraceCollision" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RayTraceCollision {
"isRayTraceCollidable"(): boolean
get "rayTraceCollidable"(): boolean
}

export namespace $RayTraceCollision {
const probejs$$marker: never
}
export abstract class $RayTraceCollision$$Static implements $RayTraceCollision {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $GrowableBlock {
"drop"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
"isSupported"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
"performMatureAction"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
"rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
}

export namespace $GrowableBlock {
const probejs$$marker: never
}
export abstract class $GrowableBlock$$Static implements $GrowableBlock {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$DependencyKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Generator$DependencyKey<T> {
constructor(string0: string)
constructor(string0: string, boolean1: boolean)

public "getName"(): string
public "isOptional"(): boolean
get "name"(): string
get "optional"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry" {
import { $Pair$$Type } from "packages/org/apache/commons/lang3/tuple/$Pair"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $DTItemModelProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import { $DTBlockStateProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DTLangProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RegistryEntry<T extends $RegistryEntry<T>> {
public "elseIfInvalid"(t0: T): T
public "generateItemModelData"(dTItemModelProvider0: $DTItemModelProvider$$Type): void
public "generateLangData"(dTLangProvider0: $DTLangProvider$$Type): void
public "generateStateData"(dTBlockStateProvider0: $DTBlockStateProvider$$Type): void
public "getRegistryName"(): $ResourceLocation
public "getString"(...pair0s: $Pair$$Type<string, any>[]): string
public "getTextComponent"(): $Component
public "ifInvalid"(runnable0: $Runnable$$Type): boolean
public "ifValid"(consumer0: $Consumer$$Type<T>): boolean
public "ifValidElse"(consumer0: $Consumer$$Type<T>, runnable1: $Runnable$$Type): boolean
public "isValid"(): boolean
public "setGenerateData"(boolean0: boolean): void
public "setRegistryName"(resourceLocation0: $ResourceLocation$$Type): T
public "shouldGenerateData"(): boolean
public "toLoadDataString"(): string
public "toReloadDataString"(): string
get "registryName"(): $ResourceLocation
get "textComponent"(): $Component
get "valid"(): boolean
set "generateData"(value: boolean)
set "registryName"(value: $ResourceLocation$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $GenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PostRotContext extends $GenerationContext {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, int3: integer, int4: integer, int5: integer, boolean6: boolean)

public "fertility"(): integer
public "neighbourCount"(): integer
public "radius"(): integer
public "rapid"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $SubstanceEffect {
"apply"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"getName"(): string
"isLingering"(): boolean
"update"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): boolean
get "name"(): string
get "lingering"(): boolean
}

export namespace $SubstanceEffect {
const probejs$$marker: never
}
export abstract class $SubstanceEffect$$Static implements $SubstanceEffect {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationTemplate" {
import { $PropertiesAccessor$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ConfigurationProperty } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import { $Result } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export interface $ConfigurationTemplate<C extends $Configuration<C, any>> {
"apply"(propertiesAccessor0: $PropertiesAccessor$$Type): $Result<C, any>
"getRegisteredProperties"(): $Iterable<$ConfigurationProperty<any>>
get "registeredProperties"(): $Iterable<$ConfigurationProperty<any>>
}

export namespace $ConfigurationTemplate {
const probejs$$marker: never
}
export abstract class $ConfigurationTemplate$$Static<C extends $Configuration<C, any>> implements $ConfigurationTemplate<C> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ThrowableBiFunction } from "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableBiFunction"
import { $DeserialisationException } from "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException"

export interface $Result$Mapper<T, V> extends $ThrowableBiFunction<T, $Consumer<string>, V, $DeserialisationException> {
"apply"(t0: T, consumer1: $Consumer$$Type<string>): V
}

export namespace $Result$Mapper {
const probejs$$marker: never
}
export abstract class $Result$Mapper$$Static<T, V> implements $Result$Mapper<T, V> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $FallingTreeEntity$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"

export interface $AnimationHandler {
"dropPayload"(fallingTreeEntity0: $FallingTreeEntity$$Type): void
"getName"(): string
"handleMotion"(fallingTreeEntity0: $FallingTreeEntity$$Type): void
"initMotion"(fallingTreeEntity0: $FallingTreeEntity$$Type): void
/** Client only, do not use in server scripts */
"renderTransform"(fallingTreeEntity0: $FallingTreeEntity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type): void
"shouldDie"(fallingTreeEntity0: $FallingTreeEntity$$Type): boolean
/** Client only, do not use in server scripts */
"shouldRender"(fallingTreeEntity0: $FallingTreeEntity$$Type): boolean
get "name"(): string
}

export namespace $AnimationHandler {
const probejs$$marker: never
}
export abstract class $AnimationHandler$$Static implements $AnimationHandler {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit" {
import { $DirectionSelectionContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import { $PositionalSpeciesContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $GrowthLogicKitConfiguration, $GrowthLogicKitConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration"
import { $ConfigurableRegistry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry"
import { $ConfigurableRegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConfigurationProperty } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import { $DirectionManipulationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext"

export class $GrowthLogicKit extends $ConfigurableRegistryEntry<$GrowthLogicKit, $GrowthLogicKitConfiguration> {
static readonly "DEFAULT": $GrowthLogicKit
static readonly "HEIGHT_VARIATION": $ConfigurationProperty<integer>
static readonly "REGISTRY": $ConfigurableRegistry<$GrowthLogicKit, $GrowthLogicKitConfiguration>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "getEnergy"(growthLogicKitConfiguration0: $GrowthLogicKitConfiguration$$Type, positionalSpeciesContext1: $PositionalSpeciesContext$$Type): float
public "getLowestBranchHeight"(growthLogicKitConfiguration0: $GrowthLogicKitConfiguration$$Type, positionalSpeciesContext1: $PositionalSpeciesContext$$Type): integer
public "populateDirectionProbabilityMap"(growthLogicKitConfiguration0: $GrowthLogicKitConfiguration$$Type, directionManipulationContext1: $DirectionManipulationContext$$Type): integer[]
public "selectNewDirection"(growthLogicKitConfiguration0: $GrowthLogicKitConfiguration$$Type, directionSelectionContext1: $DirectionSelectionContext$$Type): $Direction
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties" {
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $RootyBlock, $RootyBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $Map$$Type } from "packages/java/util/$Map"

export class $SoilProperties extends $RegistryEntry<$SoilProperties> implements $Resettable<$SoilProperties> {
static readonly "CODEC": $Codec<$SoilProperties>
static readonly "NULL_SOIL_PROPERTIES": $SoilProperties
static readonly "REGISTRY": $TypedRegistry<$SoilProperties>
static readonly "ROOTS": string
static readonly "SOIL_BLOCK": string

constructor(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addGeneratedBlockTags"(function0: $Function$$Type<$TagKey$$Type<$Block$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Block>>): void
public "addSoilFlags"(integer0: integer): $SoilProperties
public "defaultSoilBlockTags"(): $List<$TagKey<$Block>>
public "generateBlock"(properties0: $BlockBehaviour$Properties$$Type): void
public "getBlock"(): $Optional<$RootyBlock>
public "getBlockRegistryName"(): $ResourceLocation
public "getDefaultBlockProperties"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "getDefaultMapColor"(): $MapColor
public "getModelPath"(string0: string): $Optional<$ResourceLocation>
public "getPrimitiveSoilBlock"(): $Block
public "getPrimitiveSoilBlockOptional"(): $Optional<$Block>
public "getPrimitiveSoilState"(blockState0: $BlockState$$Type): $BlockState
public "getRootsOverlayModelLocation"(): $ResourceLocation
public "getSoilFlags"(): integer
public "getSoilState"(blockState0: $BlockState$$Type, int1: integer, boolean2: boolean): $BlockState
public "getTexturePath"(string0: string): $Optional<$ResourceLocation>
public "hasSubstitute"(): boolean
public "isOnlyIfLoaded"(): boolean
public "isValidState"(blockState0: $BlockState$$Type): boolean
public "reset"(): $SoilProperties
public "setBlock"(rootyBlock0: $RootyBlock$$Type): void
public "setBlockRegistryName"(resourceLocation0: $ResourceLocation$$Type): $SoilProperties
public "setFoliageTintIndex"(int0: integer): void
public "setHasSubstitute"(boolean0: boolean): void
public "setModelOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setOnlyIfLoaded"(string0: string): void
public "setPostReloadDefaults"(): $SoilProperties
public "setPreReloadDefaults"(): $SoilProperties
public "setPrimitiveSoilBlock"(block0: $Block$$Type): void
public "setRootsTintIndex"(int0: integer): void
public "setSoilFlags"(integer0: integer): $SoilProperties
public "setTextureOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
get "block"(): $Optional<$RootyBlock>
get "blockRegistryName"(): $ResourceLocation
get "defaultMapColor"(): $MapColor
get "primitiveSoilBlock"(): $Block
get "primitiveSoilBlockOptional"(): $Optional<$Block>
get "rootsOverlayModelLocation"(): $ResourceLocation
get "soilFlags"(): integer
get "onlyIfLoaded"(): boolean
set "block"(value: $RootyBlock$$Type)
set "blockRegistryName"(value: $ResourceLocation$$Type)
set "foliageTintIndex"(value: integer)
set "modelOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "onlyIfLoaded"(value: string)
set "primitiveSoilBlock"(value: $Block$$Type)
set "rootsTintIndex"(value: integer)
set "soilFlags"(value: integer)
set "textureOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AbstractRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$AbstractRegistry"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $SimpleRegistry<V extends $RegistryEntry<V>> extends $AbstractRegistry<V> {
constructor(string0: string, class1: $Class$$Type<V>, v2: V, boolean3: boolean)
constructor(class0: $Class$$Type<V>, v1: V, boolean2: boolean)
constructor(string0: string, class1: $Class$$Type<V>, v2: V)
constructor(class0: $Class$$Type<V>, v1: V)

public "forEach"(consumer0: $Consumer$$Type<V>): void
public "getAll"(): $Set<V>
public "spliterator"(): $Spliterator<V>
get "all"(): $Set<V>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/loading/$ResourceLoader" {
import { $ResourceAccessor, $ResourceAccessor$$Type } from "packages/com/ferreusveritas/dynamictrees/api/resource/$ResourceAccessor"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export interface $ResourceLoader<R> {
"applyOnGatherData"(resourceAccessor0: $ResourceAccessor$$Type<R>, resourceManager1: $ResourceManager$$Type): void
"applyOnLoad"(resourceAccessor0: $ResourceAccessor$$Type<R>, resourceManager1: $ResourceManager$$Type): void
"applyOnReload"(resourceAccessor0: $ResourceAccessor$$Type<R>, resourceManager1: $ResourceManager$$Type): void
"applyOnSetup"(resourceAccessor0: $ResourceAccessor$$Type<R>, resourceManager1: $ResourceManager$$Type): void
"gatherData"(resourceManager0: $ResourceManager$$Type): $CompletableFuture<void>
"load"(resourceManager0: $ResourceManager$$Type): $CompletableFuture<void>
"prepareReload"(resourceManager0: $ResourceManager$$Type): $CompletableFuture<$ResourceAccessor<R>>
"reload"(completableFuture0: $CompletableFuture$$Type<$ResourceAccessor$$Type<R>>, resourceManager1: $ResourceManager$$Type): void
"setup"(resourceManager0: $ResourceManager$$Type): $CompletableFuture<void>
set "up"(value: $ResourceManager$$Type)
}

export namespace $ResourceLoader {
const probejs$$marker: never
}
export abstract class $ResourceLoader$$Static<R> implements $ResourceLoader<R> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $TreePart, $TreePart$$Type } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $TreePart$TreePartType } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BonemealableBlock } from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $FutureBreakable } from "packages/com/ferreusveritas/dynamictrees/api/$FutureBreakable"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $NetVolumeNode$Volume$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $GrowSignal, $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Family, $Family$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $BranchBlock$ItemStackPos$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos"
import { $Connections } from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockWithDynamicHardness } from "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $MapSignal, $MapSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$$Type } from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import { $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $BranchDestructionData } from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"
import { $Map$$Type } from "packages/java/util/$Map"

export class $BranchBlock extends $BlockWithDynamicHardness implements $TreePart, $FutureBreakable, $BonemealableBlock {
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode

constructor(resourceLocation0: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, properties1: $BlockBehaviour$Properties$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "analyse"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, mapSignal4: $MapSignal$$Type): $MapSignal
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "branchSupport"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, branchBlock2: $BranchBlock$$Type, blockPos3: $BlockPos$$Type, direction4: $Direction$$Type, int5: integer): integer
public "breakDeliberate"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, destroyMode2: $DynamicTrees$DestroyMode$$Type): void
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canBeStripped"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, itemStack4: $ItemStack$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canFall"(): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "checkForRot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, int3: integer, int4: integer, randomSource5: $RandomSource$$Type, float6: float, boolean7: boolean): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "connectToLeaves"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, int3: integer): boolean
public "createBranchDrops"(): $LootTable$Builder
public "damageAxe"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer, volume3: $NetVolumeNode$Volume$$Type, boolean4: boolean): void
public "destroyBranchFromNode"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, boolean3: boolean, livingEntity4: $LivingEntity$$Type): $BranchDestructionData
public "destroyLeaves"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, itemStack3: $ItemStack$$Type, list4: $List$$Type<$BlockPos$$Type>, map5: $Map$$Type<$BlockPos$$Type, $BlockState$$Type>, list6: $List$$Type<$BranchBlock$ItemStackPos$$Type>): void
public "futureBreak"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): void
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public static "getBranchSupport"(int0: integer): integer
public "getConnectionData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $Connections
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFamily"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Family
public "getFamily"(): $Family
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getHydrationCell"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, leavesProperties4: $LeavesProperties$$Type): $Cell
public static "getLeavesSupport"(int0: integer): integer
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getLootTable"(lootDataManager0: $LootDataManager$$Type, species1: $Species$$Type): $LootTable
public "getLootTableName"(): $ResourceLocation
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMaxRadius"(): integer
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getPrimitiveLog"(): $Optional<$Block>
public "getPrimitiveLogs"(float0: float, list1: $List$$Type<$ItemStack$$Type>): float
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRadius"(blockState0: $BlockState$$Type): integer
public "getRadiusForConnection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type, direction4: $Direction$$Type, int5: integer): integer
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateForDecay"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "getStateForRadius"(int0: integer): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTreePartType"(): $TreePart$TreePartType
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "growSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, growSignal2: $GrowSignal$$Type): $GrowSignal
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBonemealSuccess"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public static "isNextToBranch"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isRootNode"(): boolean
public "isSameTree"(treePart0: $TreePart$$Type): boolean
public "isSameTree"(branchBlock0: $BranchBlock$$Type): boolean
public "isSameTree"(blockState0: $BlockState$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isStrippedBranch"(): boolean
public "isValidBonemealTarget"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "performBonemeal"(serverLevel0: $ServerLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "probabilityForBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type): integer
public "removedByEntity"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): void
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setBlockStateIgnored"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, int3: integer): void
public "setCanBeStripped"(boolean0: boolean): $BranchBlock
public "setDestroySpeed"(v: float): void
public "setFamily"(family0: $Family$$Type): void
public "setLightEmission"(v: integer): void
public "setPrimitiveLogDrops"(...itemStack0s: $ItemStack$$Type[]): $BranchBlock
public "setRadius"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, direction3: $Direction$$Type, int4: integer): integer
public "setRadius"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, direction3: $Direction$$Type): integer
public "setRequiresTool"(v: boolean): void
public static "setSupport"(int0: integer, int1: integer): integer
public "shouldAnalyse"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "shouldGenerateBranchDrops"(): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "stripBranch"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, itemStack4: $ItemStack$$Type): void
public "stripBranch"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, int3: integer): void
public "stripBranch"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "family"(): $Family
get "lootTableName"(): $ResourceLocation
get "maxRadius"(): integer
get "mod"(): string
get "primitiveLog"(): $Optional<$Block>
get "treePartType"(): $TreePart$TreePartType
get "rootNode"(): boolean
get "strippedBranch"(): boolean
set "destroySpeed"(value: float)
set "family"(value: $Family$$Type)
set "lightEmission"(value: integer)
set "primitiveLogDrops"(value: $ItemStack$$Type[])
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$FullGenerationContext" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $SafeChunkBounds, $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $GenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $FullGenerationContext extends $GenerationContext {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, holder3: $Holder$$Type<$Biome$$Type>, int4: integer, safeChunkBounds5: $SafeChunkBounds$$Type)

public "biome"(): $Holder<$Biome>
public "bounds"(): $SafeChunkBounds
public "radius"(): integer
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator" {
import { $Generator$Dependencies, $Generator$Dependencies$$Type } from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$Dependencies"
import { $DataProvider, $DataProvider$$Type } from "packages/net/minecraft/data/$DataProvider"
import { $DTDataProvider, $DTDataProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"

export interface $Generator<P extends ($DataProvider & $DTDataProvider), I> {
"gatherDependencies"(i0: I): $Generator$Dependencies
"generate"(p0: P, i1: I): void
"generate"(p0: P, i1: I, dependencies2: $Generator$Dependencies$$Type): void
"verifyDependencies"(dependencies0: $Generator$Dependencies$$Type): boolean
"verifyInput"(i0: I): boolean
}

export namespace $Generator {
const probejs$$marker: never
}
export abstract class $Generator$$Static<P extends ($DataProvider & $DTDataProvider), I> implements $Generator<P, I> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableBiFunction" {
import { $Throwable } from "packages/java/lang/$Throwable"

export interface $ThrowableBiFunction<A, B, R, T extends $Throwable> {
"apply"(a0: A, b1: B): R
}

export namespace $ThrowableBiFunction {
const probejs$$marker: never
}
export abstract class $ThrowableBiFunction$$Static<A, B, R, T extends $Throwable> implements $ThrowableBiFunction<A, B, R, T> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$FilterOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleVoxmap$FilterOp {
"getOp"(byte0: byte): byte
}

export namespace $SimpleVoxmap$FilterOp {
const probejs$$marker: never
}
export abstract class $SimpleVoxmap$FilterOp$$Static implements $SimpleVoxmap$FilterOp {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$Connections" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $Connections {
constructor()
constructor(int0s: integer[])

public "getAllRadii"(): integer[]
public "setAllRadii"(int0s: integer[]): $Connections
public "setRadius"(direction0: $Direction$$Type, int1: integer): void
get "allRadii"(): integer[]
set "allRadii"(value: integer[])
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DataGenerationStreamEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ExistingFileHelper, $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $LootTableSubProvider, $LootTableSubProvider$$Type } from "packages/net/minecraft/data/loot/$LootTableSubProvider"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $DataGenerationStreamEvent extends $Event implements $IModBusEvent {
constructor(lootTableSubProvider0: $LootTableSubProvider$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type, map3: $Map$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>)
constructor()

public "getExistingFileHelper"(): $ExistingFileHelper
public "getMap"(): $Map<$ResourceLocation, $LootTable$Builder>
public "getModId"(): string
public "getProvider"(): $LootTableSubProvider
get "existingFileHelper"(): $ExistingFileHelper
get "map"(): $Map<$ResourceLocation, $LootTable$Builder>
get "modId"(): string
get "provider"(): $LootTableSubProvider
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
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
import { $BonemealableBlock } from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $GrowableBlock } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Fruit$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FruitBlock extends $Block implements $BonemealableBlock, $GrowableBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, fruit1: $Fruit$$Type)

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
public "doTick"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
public "drop"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAge"(blockState0: $BlockState$$Type): integer
public "getAgeAsPercentage"(blockState0: $BlockState$$Type): float
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
public "getMaxAge"(): integer
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
public "isBonemealSuccess"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
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
public "isSupported"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isValidBonemealTarget"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "performBonemeal"(serverLevel0: $ServerLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "performMatureAction"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "tickMature"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
get "blockStates"(): $List<$BlockState>
get "maxAge"(): integer
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $NodeInspector {
"returnRun"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
"run"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
}

export namespace $NodeInspector {
const probejs$$marker: never
}
export abstract class $NodeInspector$$Static implements $NodeInspector {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/item/$Seed" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
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
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $PlantType } from "packages/net/minecraftforge/common/$PlantType"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $IPlantable } from "packages/net/minecraftforge/common/$IPlantable"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $Map } from "packages/java/util/$Map"

export class $Seed extends $Item implements $IPlantable {
static readonly "CODE_KEY": string
static readonly "FORCE_PLANT_KEY": string
static readonly "LIFESPAN_KEY": string

constructor(species0: $Species$$Type, properties1: $Item$Properties$$Type)
constructor(species0: $Species$$Type)
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
public "doPlanting"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, itemStack3: $ItemStack$$Type): boolean
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
public "getCode"(itemStack0: $ItemStack$$Type, randomSource1: $RandomSource$$Type): string
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
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
public "getPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getPlantType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $PlantType
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSpecies"(): $Species
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getTimeToLive"(itemStack0: $ItemStack$$Type): integer
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "hasForcePlant"(itemStack0: $ItemStack$$Type): boolean
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
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFlowerPot"(useOnContext0: $UseOnContext$$Type): $InteractionResult
public "onItemUsePlantSeed"(useOnContext0: $UseOnContext$$Type, boolean1: boolean): $InteractionResult
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
public "shouldPlant"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type): boolean
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
get "species"(): $Species
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

declare module "packages/com/ferreusveritas/dynamictrees/event/$VoluntarySeedDropEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $VoluntarySeedDropEvent extends $Event {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, list3: $List$$Type<$ItemStack$$Type>)
constructor()

public "getDropList"(): $List<$ItemStack>
public "getLevel"(): $Level
public "getRootPos"(): $BlockPos
public "getSpecies"(): $Species
get "dropList"(): $List<$ItemStack>
get "level"(): $Level
get "rootPos"(): $BlockPos
get "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/models/$ModelTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelTracker {
"modelCleanup"(): void
}

export namespace $ModelTracker {
const probejs$$marker: never
}
export abstract class $ModelTracker$$Static implements $ModelTracker {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $DTDataProvider {
"block"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
"item"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
}

export namespace $DTDataProvider {
const probejs$$marker: never
}
export abstract class $DTDataProvider$$Static implements $DTDataProvider {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/$JsonDeserialisers$RegistryEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $JsonDeserialisers$RegistryEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SimpleRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $TemplateRegistry, $TemplateRegistry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $ConfigurableRegistryEntry, $ConfigurableRegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ConfigurableRegistry<V extends $ConfigurableRegistryEntry<V, C>, C extends $Configuration<C, V>> extends $SimpleRegistry<V> {
constructor(string0: string, class1: $Class$$Type<V>, v2: V, boolean3: boolean, templateRegistry4: $TemplateRegistry$$Type<C>)
constructor(class0: $Class$$Type<V>, v1: V, boolean2: boolean, templateRegistry3: $TemplateRegistry$$Type<C>)
constructor(class0: $Class$$Type<V>, v1: V, templateRegistry2: $TemplateRegistry$$Type<C>)
constructor(string0: string, class1: $Class$$Type<V>, v2: V, templateRegistry3: $TemplateRegistry$$Type<C>)

public "forEach"(consumer0: $Consumer$$Type<V>): void
public "getTemplates"(): $TemplateRegistry<C>
public "register"(v0: V): $ConfigurableRegistry<V, C>
public "spliterator"(): $Spliterator<V>
get "templates"(): $TemplateRegistry<C>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $NodeInspector, $NodeInspector$$Type } from "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MapSignal {
constructor()
constructor(...nodeInspector0s: $NodeInspector$$Type[])

public "doTrackingVisited"(blockPos0: $BlockPos$$Type): boolean
public "getInspectors"(): $ArrayList<$NodeInspector>
public "returnRun"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "run"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
get "depth"(): integer
set "depth"(value: integer)
get "destroyLoopedNodes"(): boolean
set "destroyLoopedNodes"(value: boolean)
get "foundRoot"(): boolean
set "foundRoot"(value: boolean)
get "localRootDir"(): $Direction
set "localRootDir"(value: $Direction$$Type)
get "multiroot"(): boolean
set "multiroot"(value: boolean)
get "overflow"(): boolean
set "overflow"(value: boolean)
get "root"(): $BlockPos
set "root"(value: $BlockPos$$Type)
get "trackVisited"(): boolean
set "trackVisited"(value: boolean)
get "inspectors"(): $ArrayList<$NodeInspector>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TreePart$TreePartType extends $Enum<$TreePart$TreePartType> {
static readonly "BRANCH": $TreePart$TreePartType
static readonly "LEAVES": $TreePart$TreePartType
static readonly "NULL": $TreePart$TreePartType
static readonly "OTHER": $TreePart$TreePartType
static readonly "ROOT": $TreePart$TreePartType

public static "valueOf"(string0: string): $TreePart$TreePartType
public static "values"(): $TreePart$TreePartType[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$BiomeSuitabilityEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $BiomeSuitabilityEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, biome1: $Biome$$Type, species2: $Species$$Type, blockPos3: $BlockPos$$Type)

public "getBiome"(): $Biome
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getSpecies"(): $Species
public "getSuitability"(): float
public "isHandled"(): boolean
public "setSuitability"(float0: float): void
get "biome"(): $Biome
get "level"(): $Level
get "pos"(): $BlockPos
get "species"(): $Species
get "suitability"(): float
get "handled"(): boolean
set "suitability"(value: float)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry" {
import { $Set } from "packages/java/util/$Set"
import { $Configurable } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $ConfigurationProperty, $ConfigurationProperty$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $ConfigurableRegistryEntry<T extends $ConfigurableRegistryEntry<T, C>, C extends $Configuration<C, T>> extends $RegistryEntry<T> implements $Configurable {
public "getDefaultConfiguration"(): C
public "getRegisteredProperties"(): $Set<$ConfigurationProperty<any>>
public "isPropertyRegistered"(configurationProperty0: $ConfigurationProperty$$Type<any>): boolean
public "with"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>, v1: V): C
get "defaultConfiguration"(): C
get "registeredProperties"(): $Set<$ConfigurationProperty<any>>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Registry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $DTDataProvider } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import { $List$$Type } from "packages/java/util/$List"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ItemModelProvider } from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $DTItemModelProvider extends $ItemModelProvider implements $DTDataProvider {
constructor(packOutput0: $PackOutput$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type, list3: $List$$Type<$Registry$$Type<any>>)

public "block"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "item"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriFunction<T, U, R, S> {
"apply"(t0: T, u1: U, r2: R): S
}

export namespace $TriFunction {
const probejs$$marker: never
}
export abstract class $TriFunction$$Static<T, U, R, S> implements $TriFunction<T, U, R, S> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $Species$LogsAndSticks {
readonly "sticks": integer

constructor(list0: $List$$Type<$ItemStack$$Type>, int1: integer)

get "logs"(): $List<$ItemStack>
set "logs"(value: $List$$Type<$ItemStack$$Type>)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext" {
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PositionalSpeciesContext {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type)

public "level"(): $Level
public "pos"(): $BlockPos
public "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$AbstractRegistry" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Registry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import { $Class } from "packages/java/lang/$Class"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Iterator } from "packages/java/util/$Iterator"

export class $AbstractRegistry<V extends $RegistryEntry<V>> implements $Registry<V> {
public "clear"(): void
public "dataGenerationStream"(string0: string): $Stream<V>
public "dump"(): void
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "generateIfValidRunnable"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<V>, runnable2: $Runnable$$Type): $Runnable
public "get"(string0: string): V
public "get"(resourceLocation0: $ResourceLocation$$Type): V
public "getAll"(): $Set<V>
public "getAllFor"(string0: string): $Set<V>
public "getAsDataResult"(resourceLocation0: $ResourceLocation$$Type): $DataResult<V>
public "getComparator"(): $Comparator<V>
public "getGetterCodec"(): $Codec<V>
public "getName"(): string
public "getOptional"(string0: string): $Optional<V>
public "getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<V>
public "getRegistryNames"(): $Set<$ResourceLocation>
public "getType"(): $Class<V>
public "has"(resourceLocation0: $ResourceLocation$$Type): boolean
public "isLocked"(): boolean
public "iterator"(): $Iterator<V>
public "lock"(): void
public "postRegistryEvent"(): void
public "register"(v0: V): $Registry<V>
public "registerAll"(...v0s: V[]): void
public "runOnNextLock"(runnable0: $Runnable$$Type): void
public "spliterator"(): $Spliterator<V>
public "unlock"(): void
[Symbol.iterator](): IterableIterator<V>;
get "all"(): $Set<V>
get "comparator"(): $Comparator<V>
get "getterCodec"(): $Codec<V>
get "name"(): string
get "registryNames"(): $Set<$ResourceLocation>
get "type"(): $Class<V>
get "locked"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $NetVolumeNode$Volume {
static readonly "VOXELSPERLOG": integer

constructor(...int0s: integer[])
constructor(int0: integer)
constructor()

public "addVolume"(int0: integer, int1: integer): void
public "addVolume"(volume0: $NetVolumeNode$Volume$$Type): void
public "addVolume"(int0: integer): void
public "getRawVolume"(int0: integer): integer
public "getRawVolume"(): integer
public "getRawVolumesArray"(): integer[]
public "getVolume"(int0: integer): float
public "getVolume"(): float
public "multiplyVolume"(double0: double): void
get "rawVolume"(): integer
get "rawVolumesArray"(): integer[]
get "volume"(): float
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$ResourceAccessor" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $DTResource, $DTResource$$Type } from "packages/com/ferreusveritas/dynamictrees/api/resource/$DTResource"

export interface $ResourceAccessor<R> {
"filtered"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $ResourceAccessor<R>
"forEach"(consumer0: $Consumer$$Type<$DTResource$$Type<R>>): void
"getAllResources"(): $Iterable<$DTResource<R>>
"getAllResources"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>): $Iterable<$DTResource<R>>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $DTResource<R>
"map"<N>(function0: $Function$$Type<R, N>): $ResourceAccessor<N>
get "allResources"(): $Iterable<$DTResource<R>>
}

export namespace $ResourceAccessor {
const probejs$$marker: never
}
export abstract class $ResourceAccessor$$Static<R> implements $ResourceAccessor<R> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$PoissonDiscProviderCreateEvent" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $PoissonDiscProvider, $PoissonDiscProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/api/worldgen/$PoissonDiscProvider"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $PoissonDiscProviderCreateEvent extends $LevelEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, poissonDiscProvider1: $PoissonDiscProvider$$Type)

public "getPoissonDiscProvider"(): $PoissonDiscProvider
public "setPoissonDiscProvider"(poissonDiscProvider0: $PoissonDiscProvider$$Type): void
get "poissonDiscProvider"(): $PoissonDiscProvider
set "poissonDiscProvider"(value: $PoissonDiscProvider$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $LeavesProperties$AgeingConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties$AgeingConfiguration"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Family, $Family$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import { $CellKit, $CellKit$$Type } from "packages/com/ferreusveritas/dynamictrees/api/cell/$CellKit"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $DynamicLeavesBlock } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $Optional } from "packages/java/util/$Optional"
import { $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LeavesProperties extends $RegistryEntry<$LeavesProperties> implements $Resettable<$LeavesProperties> {
static readonly "CODEC": $Codec<$LeavesProperties>
static readonly "LEAVES": string
static readonly "NULL": $LeavesProperties
static readonly "REGISTRY": $TypedRegistry<$LeavesProperties>

constructor(blockState0: $BlockState$$Type, cellKit1: $CellKit$$Type, resourceLocation2: $ResourceLocation$$Type)
constructor(blockState0: $BlockState$$Type, resourceLocation1: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type)

public "addGeneratedBlockTags"(function0: $Function$$Type<$TagKey$$Type<$Block$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Block>>): void
public "canGrowOnGround"(): boolean
public "createBlockDrops"(): $LootTable$Builder
public "createDrops"(): $LootTable$Builder
public "defaultLeavesTags"(): $List<$TagKey<$Block>>
public "doRequireShears"(): boolean
/** Client only, do not use in server scripts */
public "foliageColorMultiplier"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "generateDynamicLeaves"(properties0: $BlockBehaviour$Properties$$Type): void
public "getBlockLootTable"(lootDataManager0: $LootDataManager$$Type, species1: $Species$$Type): $LootTable
public "getBlockLootTableName"(): $ResourceLocation
public "getBlockRegistryName"(): $ResourceLocation
public "getCellKit"(): $CellKit
public "getDefaultBlockProperties"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "getDefaultMapColor"(): $MapColor
public "getDrops"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, species3: $Species$$Type): $List<$ItemStack>
public "getDynamicLeavesBlock"(): $Optional<$DynamicLeavesBlock>
public "getDynamicLeavesState"(): $BlockState
public "getDynamicLeavesState"(int0: integer): $BlockState
public "getFamily"(): $Family
public "getFireSpreadSpeed"(): integer
public "getFlammability"(): integer
public "getLangOverride"(string0: string): $Optional<string>
public "getLightRequirement"(): integer
public "getLootTable"(lootDataManager0: $LootDataManager$$Type, species1: $Species$$Type): $LootTable
public "getLootTableName"(): $ResourceLocation
public "getModelPath"(string0: string): $Optional<$ResourceLocation>
public "getPrimitiveLeaves"(): $BlockState
public "getPrimitiveLeavesBlock"(): $Optional<$Block>
public "getPrimitiveLeavesItemStack"(): $ItemStack
public "getRadiusForConnection"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, branchBlock3: $BranchBlock$$Type, direction4: $Direction$$Type, int5: integer): integer
public "getSmotherLeavesMax"(): integer
public "getTexturePath"(string0: string): $Optional<$ResourceLocation>
public "isCompatibleLeaves"(leavesProperties0: $LeavesProperties$$Type): boolean
public "isConnectAnyRadius"(): boolean
public "isOnlyIfLoaded"(): boolean
/** Client only, do not use in server scripts */
public static "postInitClient"(): void
public "reset"(): $LeavesProperties
public "setAgeingConfiguration"(ageingConfiguration0: $LeavesProperties$AgeingConfiguration$$Type): void
public "setBlockRegistryName"(resourceLocation0: $ResourceLocation$$Type): $LeavesProperties
public "setCanGrowOnGround"(boolean0: boolean): void
public "setCellKit"(cellKit0: $CellKit$$Type): void
public "setColorNumber"(integer0: integer): void
public "setColorString"(string0: string): void
public "setConnectAnyRadius"(boolean0: boolean): void
/** @deprecated */
public "setDoesAge"(string0: string): void
public "setDynamicLeavesState"(blockState0: $BlockState$$Type): $LeavesProperties
public "setFamily"(family0: $Family$$Type): $LeavesProperties
public "setFireSpreadSpeed"(int0: integer): void
public "setFlammability"(int0: integer): void
public "setHasTickParticles"(boolean0: boolean): void
public "setLangOverrides"(map0: $Map$$Type<string, string>): void
public "setLightRequirement"(int0: integer): void
public "setModelOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setOnlyIfLoaded"(string0: string): void
public "setPostReloadDefaults"(): $LeavesProperties
public "setPreReloadDefaults"(): $LeavesProperties
public "setPrimitiveLeaves"(block0: $Block$$Type): void
public "setRequiresShears"(boolean0: boolean): void
public "setSeedDropChances"(float0s: float[]): void
public "setSeedDropChances"(collection0: $Collection$$Type<float>): void
public "setSmotherLeavesMax"(int0: integer): void
public "setTextureOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "shouldAge"(boolean0: boolean, blockState1: $BlockState$$Type): boolean
public "shouldGenerateBlockDrops"(): boolean
public "shouldGenerateDrops"(): boolean
/** Client only, do not use in server scripts */
public "treeFallColorMultiplier"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "updateTick"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, randomSource3: $RandomSource$$Type): boolean
get "blockLootTableName"(): $ResourceLocation
get "blockRegistryName"(): $ResourceLocation
get "cellKit"(): $CellKit
get "defaultMapColor"(): $MapColor
get "dynamicLeavesBlock"(): $Optional<$DynamicLeavesBlock>
get "dynamicLeavesState"(): $BlockState
get "family"(): $Family
get "fireSpreadSpeed"(): integer
get "flammability"(): integer
get "lightRequirement"(): integer
get "lootTableName"(): $ResourceLocation
get "primitiveLeaves"(): $BlockState
get "primitiveLeavesBlock"(): $Optional<$Block>
get "primitiveLeavesItemStack"(): $ItemStack
get "smotherLeavesMax"(): integer
get "connectAnyRadius"(): boolean
get "onlyIfLoaded"(): boolean
set "ageingConfiguration"(value: $LeavesProperties$AgeingConfiguration$$Type)
set "blockRegistryName"(value: $ResourceLocation$$Type)
set "cellKit"(value: $CellKit$$Type)
set "colorNumber"(value: integer)
set "colorString"(value: string)
set "connectAnyRadius"(value: boolean)
set "doesAge"(value: string)
set "dynamicLeavesState"(value: $BlockState$$Type)
set "family"(value: $Family$$Type)
set "fireSpreadSpeed"(value: integer)
set "flammability"(value: integer)
set "hasTickParticles"(value: boolean)
set "langOverrides"(value: $Map$$Type<string, string>)
set "lightRequirement"(value: integer)
set "modelOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "onlyIfLoaded"(value: string)
set "primitiveLeaves"(value: $Block$$Type)
set "requiresShears"(value: boolean)
set "seedDropChances"(value: float[])
set "seedDropChances"(value: $Collection$$Type<float>)
set "smotherLeavesMax"(value: integer)
set "textureOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$Cell" {
import { $BlockPos$MutableBlockPos } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"

export class $SimpleVoxmap$Cell {
constructor()

public "getPos"(): $BlockPos$MutableBlockPos
public "getValue"(): byte
public "setValue"(byte0: byte): $SimpleVoxmap$Cell
get "pos"(): $BlockPos$MutableBlockPos
get "value"(): byte
set "value"(value: byte)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellKit" {
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import { $SimpleRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import { $SimpleVoxmap } from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap"
import { $CellSolver } from "packages/com/ferreusveritas/dynamictrees/api/cell/$CellSolver"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $CellKit extends $RegistryEntry<$CellKit> {
static readonly "NULL_CELL_KIT": $CellKit
static readonly "NULL_CELL_SOLVER": $CellSolver
static readonly "REGISTRY": $SimpleRegistry<$CellKit>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "getCellForBranch"(int0: integer, int1: integer): $Cell
public "getCellForLeaves"(int0: integer): $Cell
public "getCellSolver"(): $CellSolver
public "getDefaultHydration"(): integer
public "getLeafCluster"(): $SimpleVoxmap
get "cellSolver"(): $CellSolver
get "defaultHydration"(): integer
get "leafCluster"(): $SimpleVoxmap
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity$DestroyType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FallingTreeEntity$DestroyType extends $Enum<$FallingTreeEntity$DestroyType> {
static readonly "BLAST": $FallingTreeEntity$DestroyType
static readonly "FIRE": $FallingTreeEntity$DestroyType
static readonly "HARVEST": $FallingTreeEntity$DestroyType
static readonly "ROOT": $FallingTreeEntity$DestroyType
static readonly "VOID": $FallingTreeEntity$DestroyType

public static "valueOf"(string0: string): $FallingTreeEntity$DestroyType
public static "values"(): $FallingTreeEntity$DestroyType[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $TypedRegistry$EntryType } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LevelContext$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $GrowableBlock$Info$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GrowableBlock$MatureAction$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction"
import { $PodBlock } from "packages/com/ferreusveritas/dynamictrees/block/$PodBlock"

export class $Pod extends $RegistryEntry<$Pod> implements $Resettable<$Pod> {
static readonly "NULL": $Pod
static readonly "REGISTRY": $TypedRegistry<$Pod>
static readonly "TYPE": $TypedRegistry$EntryType<$Pod>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "canBoneMeal"(): boolean
public "createBlock"(resourceLocation0: $ResourceLocation$$Type, properties1: $BlockBehaviour$Properties$$Type): void
public "createBlockDrops"(): $LootTable$Builder
public "getAgeProperty"(): $IntegerProperty
public "getBlock"(): $PodBlock
public "getBlockDropsPath"(): $ResourceLocation
public "getBlockShape"(direction0: $Direction$$Type, int1: integer): $VoxelShape
public "getDefaultBlockProperties"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "getDefaultBlockProperties"(): $BlockBehaviour$Properties
public "getDefaultMapColor"(): $MapColor
public "getFlowerHoldPeriodLength"(): float
public "getGrowthChance"(): float
public "getItemStack"(): $ItemStack
public "getMaxAge"(): integer
public "getMinProductionFactor"(): float
public "getOffsetProperty"(): $IntegerProperty
public "getSeasonOffset"(): float
public "hasVariableOffset"(): boolean
public "isInFlowerHoldPeriod"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float): boolean
public "isItem"(itemStack0: $ItemStack$$Type): boolean
public "isOutOfSeason"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): boolean
public "isValidRadius"(int0: integer): boolean
public "performMatureAction"(info0: $GrowableBlock$Info$$Type): void
public "place"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float, direction3: $Direction$$Type, int4: integer): void
public "placeDuringWorldGen"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float, direction3: $Direction$$Type, int4: integer): void
public "seasonalProductionFactor"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): float
public "setBlockShapes"(direction0: $Direction$$Type, voxelShape1s: $VoxelShape$$Type[]): void
public "setCanBoneMeal"(boolean0: boolean): void
public "setDropCount"(int0: integer): void
public "setFlowerHoldPeriodLength"(float0: float): void
public "setGrowthChance"(float0: float): void
public "setItemStack"(itemStack0: $ItemStack$$Type): void
public "setMatureAction"(matureAction0: $GrowableBlock$MatureAction$$Type): void
public "setMaxAge"(int0: integer): void
public "setMaxDropCount"(int0: integer): void
public "setMaxRadius"(int0: integer): void
public "setMinDropCount"(int0: integer): void
public "setMinProductionFactor"(float0: float): void
public "setMinRadius"(int0: integer): void
public "setPostReloadDefaults"(): $Pod
public "setPreReloadDefaults"(): $Pod
public "setSeasonOffset"(float0: float): void
public "shouldGenerateBlockDrops"(): boolean
get "ageProperty"(): $IntegerProperty
get "block"(): $PodBlock
get "blockDropsPath"(): $ResourceLocation
get "defaultBlockProperties"(): $BlockBehaviour$Properties
get "defaultMapColor"(): $MapColor
get "flowerHoldPeriodLength"(): float
get "growthChance"(): float
get "itemStack"(): $ItemStack
get "maxAge"(): integer
get "minProductionFactor"(): float
get "offsetProperty"(): $IntegerProperty
get "seasonOffset"(): float
set "dropCount"(value: integer)
set "flowerHoldPeriodLength"(value: float)
set "growthChance"(value: float)
set "itemStack"(value: $ItemStack$$Type)
set "matureAction"(value: $GrowableBlock$MatureAction$$Type)
set "maxAge"(value: integer)
set "maxDropCount"(value: integer)
set "maxRadius"(value: integer)
set "minDropCount"(value: integer)
set "minProductionFactor"(value: float)
set "minRadius"(value: integer)
set "seasonOffset"(value: float)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$BlitOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleVoxmap$BlitOp {
"getOp"(byte0: byte, byte1: byte): byte
}

export namespace $SimpleVoxmap$BlitOp {
const probejs$$marker: never
}
export abstract class $SimpleVoxmap$BlitOp$$Static implements $SimpleVoxmap$BlitOp {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/worldgen/$PoissonDiscProvider" {
import { $PoissonDisc } from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc"
import { $List } from "packages/java/util/$List"

export interface $PoissonDiscProvider {
"getChunkPoissonData"(int0: integer, int1: integer, int2: integer): byte[]
"getPoissonDiscs"(int0: integer, int1: integer, int2: integer): $List<$PoissonDisc>
"setChunkPoissonData"(int0: integer, int1: integer, int2: integer, byte3s: byte[]): void
"unloadChunkPoissonData"(int0: integer, int1: integer, int2: integer): void
}

export namespace $PoissonDiscProvider {
const probejs$$marker: never
}
export abstract class $PoissonDiscProvider$$Static implements $PoissonDiscProvider {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration" {
import { $GenFeature, $GenFeature$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import { $TemplateRegistry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $GenerationContext, $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $GenFeature$Type$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenFeatureConfiguration extends $Configuration<$GenFeatureConfiguration, $GenFeature> {
static readonly "TEMPLATES": $TemplateRegistry<$GenFeatureConfiguration>

constructor(genFeature0: $GenFeature$$Type)

public "generate"<C extends $GenerationContext, R>(type0: $GenFeature$Type$$Type<C, R>, c1: C): R
public "getGenFeature"(): $GenFeature
public static "getNull"(): $GenFeatureConfiguration
public "shouldApply"(species0: $Species$$Type): boolean
get "genFeature"(): $GenFeature
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchConnectionData" {
import { $Connections, $Connections$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BranchConnectionData {
constructor(blockState0: $BlockState$$Type, connections1: $Connections$$Type)

public "getBlockState"(): $BlockState
public "getConnections"(): $Connections
get "blockState"(): $BlockState
get "connections"(): $Connections
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration" {
import { $DirectionSelectionContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import { $PositionalSpeciesContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import { $GrowthLogicKit, $GrowthLogicKit$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $TemplateRegistry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $DirectionManipulationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext"

export class $GrowthLogicKitConfiguration extends $Configuration<$GrowthLogicKitConfiguration, $GrowthLogicKit> {
static readonly "TEMPLATES": $TemplateRegistry<$GrowthLogicKitConfiguration>

constructor(growthLogicKit0: $GrowthLogicKit$$Type)

public static "getDefault"(): $GrowthLogicKitConfiguration
public "getEnergy"(positionalSpeciesContext0: $PositionalSpeciesContext$$Type): float
public "getLowestBranchHeight"(positionalSpeciesContext0: $PositionalSpeciesContext$$Type): integer
public "populateDirectionProbabilityMap"(directionManipulationContext0: $DirectionManipulationContext$$Type): integer[]
public "selectNewDirection"(directionSelectionContext0: $DirectionSelectionContext$$Type): $Direction
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper" {
import { $ThrowableFunction } from "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableFunction"
import { $Result$Mapper } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"
import { $DeserialisationException } from "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException"

export interface $Result$SimpleMapper<T, V> extends $ThrowableFunction<T, V, $DeserialisationException> {
"apply"(t0: T): V
"fullMapper"(): $Result$Mapper<T, V>
}

export namespace $Result$SimpleMapper {
const probejs$$marker: never
}
export abstract class $Result$SimpleMapper$$Static<T, V> implements $Result$SimpleMapper<T, V> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Registry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $DTDataProvider } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockStateProvider } from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider"

export class $DTBlockStateProvider extends $BlockStateProvider implements $DTDataProvider {
constructor(packOutput0: $PackOutput$$Type, string1: string, existingFileHelper2: $ExistingFileHelper$$Type, collection3: $Collection$$Type<$Registry$$Type<any>>)

public "block"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "item"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable" {
import { $Set } from "packages/java/util/$Set"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $ConfigurationProperty, $ConfigurationProperty$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $Configurable {
"getDefaultConfiguration"(): $Configuration<any, any>
"getRegisteredProperties"(): $Set<$ConfigurationProperty<any>>
"isPropertyRegistered"(configurationProperty0: $ConfigurationProperty$$Type<any>): boolean
get "defaultConfiguration"(): $Configuration<any, any>
get "registeredProperties"(): $Set<$ConfigurationProperty<any>>
}

export namespace $Configurable {
const probejs$$marker: never
}
export abstract class $Configurable$$Static implements $Configurable {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $TypedRegistry$EntryType } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BlockBounds, $BlockBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $BiFunction } from "packages/java/util/function/$BiFunction"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $AnimationHandler } from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BranchLoaderBuilder } from "packages/com/ferreusveritas/dynamictrees/data/provider/$BranchLoaderBuilder"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $List } from "packages/java/util/$List"
import { $FallingTreeEntity$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $BlockModelBuilder } from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import { $Family$TreeActivationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext"
import { $SurfaceRootBlock } from "packages/com/ferreusveritas/dynamictrees/block/branch/$SurfaceRootBlock"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ExistingFileHelper } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $BranchBlock, $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $LeavesProperties, $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Map$$Type } from "packages/java/util/$Map"

export class $Family extends $RegistryEntry<$Family> implements $Resettable<$Family> {
static readonly "BRANCH": string
static readonly "BRANCH_TOP": string
static readonly "COVERED_ROOTS_BLOCK": string
static readonly "NULL_FAMILY": $Family
static readonly "REGISTRY": $TypedRegistry<$Family>
static readonly "ROOTS_SIDE": string
static readonly "ROOTS_TOP": string
static readonly "STRIPPED_BRANCH": string
static readonly "STRIPPED_BRANCH_TOP": string
static readonly "TYPE": $TypedRegistry$EntryType<$Family>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "addBranchTextures"(biConsumer0: $BiConsumer$$Type<string, $ResourceLocation$$Type>, resourceLocation1: $ResourceLocation$$Type, block2: $Block$$Type): void
public "addGeneratedBlockTags"(function0: $Function$$Type<$TagKey$$Type<$Block$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Block>>): void
public "addGeneratedItemTags"(function0: $Function$$Type<$TagKey$$Type<$Item$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Item>>): void
public "addRootTextures"(biConsumer0: $BiConsumer$$Type<string, $ResourceLocation$$Type>, resourceLocation1: $ResourceLocation$$Type): void
public "addSpecies"(species0: $Species$$Type): $Family
public "addValidBranches"(...branchBlock0s: $BranchBlock$$Type[]): void
public "branchIsLadder"(): boolean
public "canStripBranch"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, itemStack4: $ItemStack$$Type): boolean
public "createBranchItem"(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<$BranchBlock>): $Supplier<$BlockItem>
public "createSurfaceRoot"(): $Supplier<$SurfaceRootBlock>
public "defaultBranchItemTags"(): $List<$TagKey<$Item>>
public "defaultBranchTags"(): $List<$TagKey<$Block>>
public "defaultStrippedBranchTags"(): $List<$TagKey<$Block>>
public "expandLeavesBlockBounds"(blockBounds0: $BlockBounds$$Type): $BlockBounds
public "getBranch"(): $Optional<$BranchBlock>
public "getBranchBlockIndex"(branchBlock0: $BranchBlock$$Type): integer
public "getBranchForPlacement"(levelAccessor0: $LevelAccessor$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type): $Optional<$BranchBlock>
public "getBranchForRootsPlacement"(levelAccessor0: $LevelAccessor$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type): $Optional<$BranchBlock>
public "getBranchItem"(): $Optional<$Item>
public "getBranchItemParentLocation"(): $ResourceLocation
public "getBranchLoaderConstructor"(): $BiFunction<$BlockModelBuilder, $ExistingFileHelper, $BranchLoaderBuilder>
/** @deprecated */
public "getBranchSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getCommonLeaves"(): $LeavesProperties
public "getCommonSpecies"(): $Species
public "getDefaultBranchHarvestTier"(): $Tier
public "getDefaultBranchMapColor"(): $MapColor
public "getDefaultBranchProperties"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "getDefaultBranchSoundType"(): $SoundType
public "getDefaultFlammable"(): boolean
public "getDefaultStrippedBranchHarvestTier"(): $Tier
public "getLangOverride"(string0: string): $Optional<string>
public "getLogDropsForBranch"(float0: float, int1: integer): $List<$ItemStack>
public "getLootVolumeMultiplier"(): float
public "getMaxBranchRadius"(): integer
public "getMaxSignalDepth"(): integer
public "getMinRadiusForStripping"(): integer
public "getModelPath"(string0: string): $Optional<$ResourceLocation>
public "getNumberOfValidBranchBlocks"(): integer
public "getPrimaryRootThickness"(): integer
public "getPrimaryThickness"(): integer
public "getPrimitiveLog"(): $Optional<$Block>
public "getPrimitiveStrippedLog"(): $Optional<$Block>
public "getProperties"(): $BlockBehaviour$Properties
public "getRadiusForCellKit"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, branchBlock4: $BranchBlock$$Type): integer
/** Client only, do not use in server scripts */
public "getRootColor"(blockState0: $BlockState$$Type, boolean1: boolean): integer
public "getRootItemParentLocation"(): $ResourceLocation
public "getSecondaryRootThickness"(): integer
public "getSecondaryThickness"(): integer
public "getSpecies"(): $Set<$Species>
public "getSpeciesForLocation"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type): $Species
public "getSpeciesForLocation"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $Species
public "getStick"(int0: integer): $ItemStack
public "getStrippedBranch"(): $Optional<$BranchBlock>
public "getSurfaceRoot"(): $Optional<$SurfaceRootBlock>
public "getTexturePath"(string0: string): $Optional<$ResourceLocation>
public "getValidBranchBlock"(int0: integer): $BranchBlock
public "hasStrippedBranch"(): boolean
public "hasSurfaceRoot"(): boolean
public "isAcceptableSoilForRootSystem"(blockState0: $BlockState$$Type): boolean
public "isCompatibleDynamicLeaves"(species0: $Species$$Type, blockState1: $BlockState$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type): boolean
public "isCompatibleGenericLeaves"(species0: $Species$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type): boolean
public "isFireProof"(): boolean
public "isOnlyIfLoaded"(): boolean
public "isThick"(): boolean
public "isValidBranchBlock"(branchBlock0: $BranchBlock$$Type): boolean
public "isWood"(): boolean
public "onTreeActivated"(treeActivationContext0: $Family$TreeActivationContext$$Type): boolean
public "reduceRadiusWhenStripping"(): boolean
public "reset"(): $Family
public "selectAnimationHandler"(fallingTreeEntity0: $FallingTreeEntity$$Type): $AnimationHandler
public "setBranchIsLadder"(boolean0: boolean): void
public "setCommonLeaves"(leavesProperties0: $LeavesProperties$$Type): void
public "setCommonSpecies"(species0: $Species$$Type): void
/** @deprecated */
public "setHasConiferVariants"(boolean0: boolean): void
public "setHasStrippedBranch"(boolean0: boolean): void
public "setHasSurfaceRoot"(boolean0: boolean): void
public "setIsFireProof"(boolean0: boolean): void
public "setLangOverrides"(map0: $Map$$Type<string, string>): void
public "setLootVolumeMultiplier"(float0: float): void
public "setMaxBranchRadius"(int0: integer): void
public "setMaxSignalDepth"(int0: integer): void
public "setMinRadiusForStripping"(int0: integer): void
public "setModelOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setOnlyIfLoaded"(string0: string): void
public "setPostReloadDefaults"(): $Family
public "setPreReloadDefaults"(): $Family
public "setPrimaryThickness"(int0: integer): void
public "setPrimitiveLog"(block0: $Block$$Type): $Family
public "setPrimitiveStrippedLog"(block0: $Block$$Type): $Family
public "setProperties"(properties0: $BlockBehaviour$Properties$$Type): $Family
public "setReduceRadiusWhenStripping"(boolean0: boolean): void
public "setSecondaryThickness"(int0: integer): void
public "setStick"(item0: $Item$$Type): $Family
public "setTextureOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setupBlocks"(): void
public "setupCommonSpecies"(species0: $Species$$Type): void
public "stripBranch"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, itemStack4: $ItemStack$$Type): boolean
/** Client only, do not use in server scripts */
get "woodBarkColor"(): integer
/** Client only, do not use in server scripts */
set "woodBarkColor"(value: integer)
/** Client only, do not use in server scripts */
get "woodRingColor"(): integer
/** Client only, do not use in server scripts */
set "woodRingColor"(value: integer)
get "branch"(): $Optional<$BranchBlock>
get "branchItem"(): $Optional<$Item>
get "branchItemParentLocation"(): $ResourceLocation
get "branchLoaderConstructor"(): $BiFunction<$BlockModelBuilder, $ExistingFileHelper, $BranchLoaderBuilder>
get "commonLeaves"(): $LeavesProperties
get "commonSpecies"(): $Species
get "defaultBranchHarvestTier"(): $Tier
get "defaultBranchMapColor"(): $MapColor
get "defaultBranchSoundType"(): $SoundType
get "defaultFlammable"(): boolean
get "defaultStrippedBranchHarvestTier"(): $Tier
get "lootVolumeMultiplier"(): float
get "maxBranchRadius"(): integer
get "maxSignalDepth"(): integer
get "minRadiusForStripping"(): integer
get "numberOfValidBranchBlocks"(): integer
get "primaryRootThickness"(): integer
get "primaryThickness"(): integer
get "primitiveLog"(): $Optional<$Block>
get "primitiveStrippedLog"(): $Optional<$Block>
get "properties"(): $BlockBehaviour$Properties
get "rootItemParentLocation"(): $ResourceLocation
get "secondaryRootThickness"(): integer
get "secondaryThickness"(): integer
get "species"(): $Set<$Species>
get "strippedBranch"(): $Optional<$BranchBlock>
get "surfaceRoot"(): $Optional<$SurfaceRootBlock>
get "fireProof"(): boolean
get "onlyIfLoaded"(): boolean
get "thick"(): boolean
get "wood"(): boolean
set "commonLeaves"(value: $LeavesProperties$$Type)
set "commonSpecies"(value: $Species$$Type)
set "hasConiferVariants"(value: boolean)
set "langOverrides"(value: $Map$$Type<string, string>)
set "lootVolumeMultiplier"(value: float)
set "maxBranchRadius"(value: integer)
set "maxSignalDepth"(value: integer)
set "minRadiusForStripping"(value: integer)
set "modelOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "onlyIfLoaded"(value: string)
set "primaryThickness"(value: integer)
set "primitiveLog"(value: $Block$$Type)
set "primitiveStrippedLog"(value: $Block$$Type)
set "properties"(value: $BlockBehaviour$Properties$$Type)
set "secondaryThickness"(value: integer)
set "stick"(value: $Item$$Type)
set "textureOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "upCommonSpecies"(value: $Species$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
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
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockWithDynamicHardness extends $Block {
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
public "getHardness"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
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
public "hasTileEntity"(blockState0: $BlockState$$Type): boolean
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

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties$AgeingConfiguration" {
import { $Enum } from "packages/java/lang/$Enum"

export class $LeavesProperties$AgeingConfiguration extends $Enum<$LeavesProperties$AgeingConfiguration> {
static readonly "ALWAYS": $LeavesProperties$AgeingConfiguration
static readonly "GROWTH_ONLY": $LeavesProperties$AgeingConfiguration
static readonly "NEVER": $LeavesProperties$AgeingConfiguration
static readonly "WORLDGEN_ONLY": $LeavesProperties$AgeingConfiguration

public "shouldAge"(boolean0: boolean): boolean
public static "valueOf"(string0: string): $LeavesProperties$AgeingConfiguration
public static "values"(): $LeavesProperties$AgeingConfiguration[]
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $PostGenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext"
import { $Seed } from "packages/com/ferreusveritas/dynamictrees/item/$Seed"
import { $Species$CommonOverride$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$CommonOverride"
import { $Pod, $Pod$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
import { $TreePart$$Type } from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Species$LogsAndSticks } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $FallingTreeEntity$$Type } from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $GrowthLogicKitConfiguration, $GrowthLogicKitConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration"
import { $DynamicSaplingBlock } from "packages/com/ferreusveritas/dynamictrees/block/$DynamicSaplingBlock"
import { $SimpleVoxmap$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $PostRotContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext"
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $Family$TreeActivationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext"
import { $GrowthLogicKit$$Type } from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $SoilProperties, $SoilProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import { $LevelContext$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import { $GenFeatureConfiguration, $GenFeatureConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import { $FallingTreeEntityModel$TreeQuadData$$Type } from "packages/com/ferreusveritas/dynamictrees/models/$FallingTreeEntityModel$TreeQuadData"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $LeavesProperties, $LeavesProperties$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $Fruit, $Fruit$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit"
import { $Optional } from "packages/java/util/$Optional"
import { $RootyBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"
import { $SubstanceEffect } from "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $NetVolumeNode$Volume$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import { $TypedRegistry$EntryType } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $SeedSaplingRecipe, $SeedSaplingRecipe$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$SeedSaplingRecipe"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $AnimationHandler } from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import { $NodeInspector } from "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Generator } from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Family, $Family$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import { $DynamicLeavesBlock, $DynamicLeavesBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
import { $JoCode, $JoCode$$Type } from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import { $DTItemModelProvider } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import { $HashMap } from "packages/java/util/$HashMap"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import { $PottedSaplingBlock } from "packages/com/ferreusveritas/dynamictrees/block/$PottedSaplingBlock"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $DTBiomeHolderSet } from "packages/com/ferreusveritas/dynamictrees/util/holderset/$DTBiomeHolderSet"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $GenFeature$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Set } from "packages/java/util/$Set"
import { $SoundType, $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $Function3$$Type } from "packages/com/mojang/datafixers/util/$Function3"
import { $RootsJoCode } from "packages/com/ferreusveritas/dynamictrees/worldgen/$RootsJoCode"
import { $BranchDestructionData$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"
import { $Map$$Type } from "packages/java/util/$Map"

export class $Species extends $RegistryEntry<$Species> implements $Resettable<$Species> {
static readonly "CODEC": $Codec<$Species>
static readonly "NULL_SPECIES": $Species
static readonly "REGISTRY": $TypedRegistry<$Species>
static readonly "SAPLING": string
static readonly "SEED": string
static readonly "SEED_PARENT": string
static readonly "TYPE": $TypedRegistry$EntryType<$Species>

constructor(resourceLocation0: $ResourceLocation$$Type, family1: $Family$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, family1: $Family$$Type, leavesProperties2: $LeavesProperties$$Type)
constructor()

public "addAcceptableBlockForGrowth"(block0: $Block$$Type): void
public "addAcceptableSoils"(...string0s: string[]): $Species
public "addAcceptableSoilsForWorldGen"(...string0s: string[]): $Species
public "addFruits"(collection0: $Collection$$Type<$Fruit$$Type>): void
public "addGenFeature"(genFeatureConfiguration0: $GenFeatureConfiguration$$Type): $Species
public "addGenFeature"(genFeature0: $GenFeature$$Type): $Species
public "addGeneratedBlockTags"(function0: $Function$$Type<$TagKey$$Type<$Block$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Block>>): void
public "addGeneratedItemTags"(function0: $Function$$Type<$TagKey$$Type<$Item$$Type>, $IntrinsicHolderTagsProvider$IntrinsicTagAppender<$Item>>): void
public "addPods"(collection0: $Collection$$Type<$Pod$$Type>): void
public "addPrimitiveSaplingItem"(item0: $Item$$Type): $Species
public "addPrimitiveSaplingRecipe"(seedSaplingRecipe0: $SeedSaplingRecipe$$Type): void
public "addSaplingTextures"(biConsumer0: $BiConsumer$$Type<string, $ResourceLocation$$Type>, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type): void
public "addValidLeafBlocks"(...leavesProperties0s: $LeavesProperties$$Type[]): void
public "applySubstance"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type): boolean
public "biomeSuitability"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): float
public "canBoneMealTree"(): boolean
public "canCraftMegaSeed"(): boolean
public "canEncodeLeavesBlocks"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, block2: $Block$$Type, branchDestructionData3: $BranchDestructionData$$Type): boolean
public "canSaplingConsumeBoneMeal"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "canSaplingGrow"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "canSaplingGrowAfterBoneMeal"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type): boolean
public "canSaplingGrowNaturally"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "clearAcceptableSoils"(): $Species
public "colorTreeQuads"(int0: integer, treeQuadData1: $FallingTreeEntityModel$TreeQuadData$$Type): integer
public static "consumePlayerItem"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type): void
public "coordHashCode"(blockPos0: $BlockPos$$Type): integer
public static "createDefaultCodec"(function30: $Function3$$Type<$ResourceLocation$$Type, $Family$$Type, $LeavesProperties$$Type, $Species$$Type>): $Codec<$Species>
public static "createDefaultType"(function30: $Function3$$Type<$ResourceLocation$$Type, $Family$$Type, $LeavesProperties$$Type, $Species$$Type>): $TypedRegistry$EntryType<$Species>
public "createVoluntaryDrops"(): $LootTable$Builder
public "defaultSaplingTags"(): $List<$TagKey<$Block>>
public "defaultSeedComposterChance"(): float
public "defaultSeedTags"(): $List<$TagKey<$Item>>
public static "defaultSuitability"(): float
public "doesRequireTileEntity"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
public "encodeLeavesBlocks"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, block2: $Block$$Type, branchDestructionData3: $BranchDestructionData$$Type): integer
public "encodeLeavesPos"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, block2: $Block$$Type, branchDestructionData3: $BranchDestructionData$$Type): integer
public "envFactor"(tagKey0: $TagKey$$Type<$Biome$$Type>, float1: float): $Species
public "generate"(generationContext0: $GenerationContext$$Type): boolean
public "generateSapling"(): $Species
public "generateSeed"(): $Species
public "getAllowedWaterHeightForWorldgen"(): integer
public "getBranchesDrops"(level0: $Level$$Type, volume1: $NetVolumeNode$Volume$$Type): $List<$ItemStack>
public "getBranchesDrops"(level0: $Level$$Type, volume1: $NetVolumeNode$Volume$$Type, itemStack2: $ItemStack$$Type): $List<$ItemStack>
public "getBranchesDrops"(level0: $Level$$Type, volume1: $NetVolumeNode$Volume$$Type, itemStack2: $ItemStack$$Type, float3: float): $List<$ItemStack>
public "getCommonSpecies"(): $Species
public "getEnergy"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): float
public "getFallingBranchEndSound"(float0: float, boolean1: boolean, boolean2: boolean): $SoundEvent
public "getFallingBranchPitch"(float0: float): float
public "getFallingTreeEndSound"(float0: float, boolean1: boolean): $SoundEvent
public "getFallingTreeHitWaterSound"(float0: float, boolean1: boolean): $SoundEvent
public "getFallingTreePitch"(float0: float): float
public "getFallingTreeStartSound"(float0: float, boolean1: boolean): $SoundEvent
public "getFamily"(): $Family
public "getFellingLeavesClusters"(branchDestructionData0: $BranchDestructionData$$Type): $HashMap<$BlockPos, $BlockState>
public "getForceSoil"(): $SoilProperties
public "getFruits"(): $Set<$Fruit>
public "getGenFeatures"(): $List<$GenFeatureConfiguration>
public "getGrowthLogicKit"(): $GrowthLogicKitConfiguration
public "getGrowthRate"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): float
public "getJoCode"(string0: string): $JoCode
public "getJoCodes"(): $Collection<$JoCode>
public "getLangOverride"(string0: string): $Optional<string>
public "getLeafBlockIndex"(dynamicLeavesBlock0: $DynamicLeavesBlock$$Type): integer
public "getLeavesBlock"(): $Optional<$DynamicLeavesBlock>
public "getLeavesProperties"(): $LeavesProperties
public "getLocalizedName"(): string
public "getLogsAndSticks"(volume0: $NetVolumeNode$Volume$$Type): $Species$LogsAndSticks
public "getLogsAndSticks"(volume0: $NetVolumeNode$Volume$$Type, boolean1: boolean, int2: integer): $Species$LogsAndSticks
public "getLootTable"(lootDataManager0: $LootDataManager$$Type, function1: $Function$$Type<$Species$$Type, $ResourceLocation>): $LootTable
public "getLowestBranchHeight"(): integer
public "getMaxBranchRadius"(): integer
public "getMegaSpecies"(): $Species
public "getModelPath"(string0: string): $Optional<$ResourceLocation>
public "getNodeInflator"(simpleVoxmap0: $SimpleVoxmap$$Type, int1: integer): $NodeInspector
public "getNodeInflator"(simpleVoxmap0: $SimpleVoxmap$$Type): $NodeInspector
public "getPerfectBiomes"(): $DTBiomeHolderSet
public "getPods"(): $Set<$Pod>
public "getPottedSapling"(): $PottedSaplingBlock
public "getPreMegaSpecies"(): $Species
public "getPrimitiveLeaves"(): $Optional<$Block>
public "getPrimitiveSaplingRecipes"(): $Set<$SeedSaplingRecipe>
public "getProbabilityForCurrentDir"(): integer
public "getRootsJoCode"(string0: string): $RootsJoCode
public "getSapling"(): $Optional<$DynamicSaplingBlock>
public "getSaplingModelName"(): string
public "getSaplingRegName"(): $ResourceLocation
public "getSaplingShape"(): $VoxelShape
public "getSaplingSmartModelLocation"(): $ResourceLocation
public "getSaplingSound"(): $SoundType
public "getSeasonalTooltipFlags"(levelContext0: $LevelContext$$Type): integer
public "getSeed"(): $Optional<$Seed>
public "getSeedModelGenerator"(): $Generator<$DTItemModelProvider, $Species>
public "getSeedName"(): $ResourceLocation
public "getSeedParentModelLocation"(): $ResourceLocation
public "getSeedStack"(int0: integer): $ItemStack
public "getSignalEnergy"(): float
public "getSoilLongevity"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): integer
public "getSubstanceEffect"(itemStack0: $ItemStack$$Type): $SubstanceEffect
public "getTapering"(): float
public "getTexturePath"(string0: string): $Optional<$ResourceLocation>
public "getUnlocalizedName"(): string
public "getUpProbability"(): integer
public "getValidLeafBlock"(int0: integer): $DynamicLeavesBlock
public "getValidLeavesProperties"(int0: integer): $LeavesProperties
public "getVoluntaryDrops"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer): $List<$ItemStack>
public "getVoluntaryDropsPath"(): $ResourceLocation
public "getWorldGenAgeIterations"(): integer
public "getWorldGenLeafMapHeight"(): integer
public "getWorldGenTaperingFactor"(): float
public "grow"(level0: $Level$$Type, rootyBlock1: $RootyBlock$$Type, blockPos2: $BlockPos$$Type, int3: integer, treePart4: $TreePart$$Type, blockPos5: $BlockPos$$Type, randomSource6: $RandomSource$$Type, boolean7: boolean): boolean
public "handleDisease"(level0: $Level$$Type, treePart1: $TreePart$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type, int4: integer): boolean
public "handleRot"(levelAccessor0: $LevelAccessor$$Type, list1: $List$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, safeChunkBounds5: $SafeChunkBounds$$Type): boolean
public "handleVoluntaryDrops"(level0: $Level$$Type, list1: $List$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer): boolean
public "hasAcceptableSoil"(): boolean
public "hasCommonOverride"(): boolean
public "hasFruit"(fruit0: $Fruit$$Type): boolean
public "hasFruits"(): boolean
public "hasGenFeatures"(): boolean
public "hasPod"(pod0: $Pod$$Type): boolean
public "hasPods"(): boolean
public "hasSeed"(): boolean
public "inheritSeasonalFruitingOffsetToFruits"(): void
public "inheritSeasonalFruitingOffsetToPods"(): void
public "isAcceptableSoil"(...string0s: string[]): boolean
public "isAcceptableSoil"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isAcceptableSoil"(blockState0: $BlockState$$Type): boolean
public "isAcceptableSoilForWorldgen"(blockState0: $BlockState$$Type): boolean
public "isAcceptableSoilForWorldgen"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isBiomePerfect"(holder0: $Holder$$Type<$Biome$$Type>): boolean
public "isBiomePerfect"(resourceKey0: $ResourceKey$$Type<$Biome>): boolean
public "isCommonSpecies"(): boolean
public "isMegaSpecies"(): boolean
public static "isOneOfBiomes"(resourceKey0: $ResourceKey$$Type<$Biome>, ...resourceKey1s: $ResourceKey$$Type<$Biome$$Type>[]): boolean
public "isOnlyIfLoaded"(): boolean
public "isPlantableOnFluid"(): boolean
public "isSeedCommon"(): boolean
public "isThick"(): boolean
public "isTransformable"(): boolean
public "isValidLeafBlock"(dynamicLeavesBlock0: $DynamicLeavesBlock$$Type): boolean
public "leafColorMultiplier"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): integer
public "leavesAreSolid"(): boolean
public "onTreeActivated"(treeActivationContext0: $Family$TreeActivationContext$$Type): boolean
public "placeRootyDirtBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer): boolean
public "plantSapling"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean): boolean
public "postGeneration"(postGenerationContext0: $PostGenerationContext$$Type): void
public "postGrow"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, int3: integer, boolean4: boolean): boolean
public "postRot"(postRotContext0: $PostRotContext$$Type): void
public "preGeneration"(levelAccessor0: $LevelAccessor$$Type, mutableBlockPos1: $BlockPos$MutableBlockPos$$Type, int2: integer, direction3: $Direction$$Type, safeChunkBounds4: $SafeChunkBounds$$Type, joCode5: $JoCode$$Type): $BlockPos
public "processVolume"(volume0: $NetVolumeNode$Volume$$Type): void
/** @deprecated */
public "rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, randomSource4: $RandomSource$$Type, boolean5: boolean): boolean
public "rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, int4: integer, randomSource5: $RandomSource$$Type, boolean6: boolean, boolean7: boolean): boolean
public "rotChance"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type, int3: integer): float
public "saplingColorMultiplier"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
public "saplingFireSpread"(): integer
public "saplingFlammability"(): integer
public "seasonalFruitProductionFactor"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): float
public "seasonalGrowthFactor"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): float
public "seasonalSeedDropFactor"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): float
public "selectAnimationHandler"(fallingTreeEntity0: $FallingTreeEntity$$Type): $AnimationHandler
public "selfOrLocationOverride"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Species
public "setAllowedWaterHeightForWorldgen"(int0: integer): void
public "setAlwaysShowOnWaila"(boolean0: boolean): $Species
public "setBasicGrowingParameters"(float0: float, float1: float, int2: integer, int3: integer, float4: float): $Species
public "setBigTreeSoundThreshold"(float0: float): void
public "setCanBoneMealTree"(boolean0: boolean): void
public "setCanCraftMegaSeed"(boolean0: boolean): void
public "setCanSaplingGrowNaturally"(boolean0: boolean): $Species
public "setCommonOverride"(commonOverride0: $Species$CommonOverride$$Type): void
public "setDefaultGrowingParameters"(): $Species
public "setDoesRot"(boolean0: boolean): void
public "setDropSeeds"(boolean0: boolean): void
public "setFamily"(family0: $Family$$Type): void
public "setFlowerSeasonHold"(float0: float, float1: float): $Species
public "setForceSoil"(soilProperties0: $SoilProperties$$Type): $Species
public "setGrowthLogicKit"(growthLogicKitConfiguration0: $GrowthLogicKitConfiguration$$Type): $Species
public "setGrowthLogicKit"(growthLogicKit0: $GrowthLogicKit$$Type): $Species
public "setGrowthRate"(float0: float): void
public "setLangOverrides"(map0: $Map$$Type<string, string>): void
public "setLeavesProperties"(leavesProperties0: $LeavesProperties$$Type): $Species
public "setLowestBranchHeight"(int0: integer): void
public "setMaxBranchRadius"(int0: integer): void
public "setMegaSpecies"(species0: $Species$$Type): void
public "setModelOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setOnlyIfLoaded"(string0: string): void
public "setPlantableOnFluid"(boolean0: boolean): void
public "setPostReloadDefaults"(): $Species
public "setPreReloadDefaults"(): $Species
public "setSapling"(supplier0: $Supplier$$Type<$DynamicSaplingBlock>): $Species
public "setSaplingName"(string0: string): void
public "setSaplingShape"(voxelShape0: $VoxelShape$$Type): $Species
public "setSaplingSound"(soundType0: $SoundType$$Type): $Species
public "setSeasonalFruitingOffset"(float0: float): void
public "setSeasonalGrowthOffset"(float0: float): void
public "setSeasonalSeedDropOffset"(float0: float): void
public "setSeed"(supplier0: $Supplier$$Type<$Seed>): $Species
public "setSeedName"(string0: string): void
public "setShouldGenerateSapling"(boolean0: boolean): void
public "setShouldGenerateSaplingIfNull"(boolean0: boolean): $Species
public "setShouldGenerateSeed"(boolean0: boolean): void
public "setShouldGenerateSeedIfNull"(boolean0: boolean): $Species
public "setSignalEnergy"(float0: float): void
public "setSoilLongevity"(int0: integer): $Species
public "setTapering"(float0: float): void
public "setTextureOverrides"(map0: $Map$$Type<string, $ResourceLocation$$Type>): void
public "setTintSapling"(boolean0: boolean): void
public "setTransformable"(boolean0: boolean): $Species
public "setUnlocalizedName"(string0: string): $Species
public "setUpProbability"(int0: integer): void
public "setWorldGenLeafMapHeight"(int0: integer): void
public "shouldDropSeeds"(): boolean
public "shouldGenerateSapling"(): boolean
public "shouldGenerateSeed"(): boolean
public "shouldGenerateVoluntaryDrops"(): boolean
public "shouldOverrideCommon"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "shouldUseLocationOverride"(): boolean
public "showSpeciesOnWaila"(): boolean
public "soilDestroyAction"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, player3: $Player$$Type): boolean
public "testFlowerSeasonHold"(float0: float): boolean
public "transitionToTree"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "update"(level0: $Level$$Type, rootyBlock1: $RootyBlock$$Type, blockPos2: $BlockPos$$Type, int3: integer, treePart4: $TreePart$$Type, blockPos5: $BlockPos$$Type, randomSource6: $RandomSource$$Type, boolean7: boolean): boolean
public "useDefaultWailaBody"(): boolean
get "allowedWaterHeightForWorldgen"(): integer
get "commonSpecies"(): $Species
get "family"(): $Family
get "forceSoil"(): $SoilProperties
get "fruits"(): $Set<$Fruit>
get "genFeatures"(): $List<$GenFeatureConfiguration>
get "growthLogicKit"(): $GrowthLogicKitConfiguration
get "joCodes"(): $Collection<$JoCode>
get "leavesBlock"(): $Optional<$DynamicLeavesBlock>
get "leavesProperties"(): $LeavesProperties
get "localizedName"(): string
get "lowestBranchHeight"(): integer
get "maxBranchRadius"(): integer
get "megaSpecies"(): $Species
get "perfectBiomes"(): $DTBiomeHolderSet
get "pods"(): $Set<$Pod>
get "pottedSapling"(): $PottedSaplingBlock
get "preMegaSpecies"(): $Species
get "primitiveLeaves"(): $Optional<$Block>
get "primitiveSaplingRecipes"(): $Set<$SeedSaplingRecipe>
get "probabilityForCurrentDir"(): integer
get "sapling"(): $Optional<$DynamicSaplingBlock>
get "saplingModelName"(): string
get "saplingRegName"(): $ResourceLocation
get "saplingShape"(): $VoxelShape
get "saplingSmartModelLocation"(): $ResourceLocation
get "saplingSound"(): $SoundType
get "seed"(): $Optional<$Seed>
get "seedModelGenerator"(): $Generator<$DTItemModelProvider, $Species>
get "seedName"(): $ResourceLocation
get "seedParentModelLocation"(): $ResourceLocation
get "signalEnergy"(): float
get "tapering"(): float
get "unlocalizedName"(): string
get "upProbability"(): integer
get "voluntaryDropsPath"(): $ResourceLocation
get "worldGenAgeIterations"(): integer
get "worldGenLeafMapHeight"(): integer
get "worldGenTaperingFactor"(): float
get "commonSpecies"(): boolean
get "megaSpecies"(): boolean
get "onlyIfLoaded"(): boolean
get "plantableOnFluid"(): boolean
get "seedCommon"(): boolean
get "thick"(): boolean
get "transformable"(): boolean
set "allowedWaterHeightForWorldgen"(value: integer)
set "alwaysShowOnWaila"(value: boolean)
set "bigTreeSoundThreshold"(value: float)
set "commonOverride"(value: $Species$CommonOverride$$Type)
set "doesRot"(value: boolean)
set "dropSeeds"(value: boolean)
set "family"(value: $Family$$Type)
set "forceSoil"(value: $SoilProperties$$Type)
set "growthLogicKit"(value: $GrowthLogicKitConfiguration$$Type)
set "growthLogicKit"(value: $GrowthLogicKit$$Type)
set "growthRate"(value: float)
set "langOverrides"(value: $Map$$Type<string, string>)
set "leavesProperties"(value: $LeavesProperties$$Type)
set "lowestBranchHeight"(value: integer)
set "maxBranchRadius"(value: integer)
set "megaSpecies"(value: $Species$$Type)
set "modelOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "onlyIfLoaded"(value: string)
set "plantableOnFluid"(value: boolean)
set "sapling"(value: $Supplier$$Type<$DynamicSaplingBlock>)
set "saplingName"(value: string)
set "saplingShape"(value: $VoxelShape$$Type)
set "saplingSound"(value: $SoundType$$Type)
set "seasonalFruitingOffset"(value: float)
set "seasonalGrowthOffset"(value: float)
set "seasonalSeedDropOffset"(value: float)
set "seed"(value: $Supplier$$Type<$Seed>)
set "seedName"(value: string)
set "shouldGenerateSaplingIfNull"(value: boolean)
set "shouldGenerateSeedIfNull"(value: boolean)
set "signalEnergy"(value: float)
set "soilLongevity"(value: integer)
set "tapering"(value: float)
set "textureOverrides"(value: $Map$$Type<string, $ResourceLocation$$Type>)
set "tintSapling"(value: boolean)
set "transformable"(value: boolean)
set "unlocalizedName"(value: string)
set "upProbability"(value: integer)
set "worldGenLeafMapHeight"(value: integer)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $LevelContext } from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenerationContext {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type)

public "level"(): $LevelAccessor
public "levelContext"(): $LevelContext
public "pos"(): $BlockPos
public "random"(): $RandomSource
public "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$SpeciesPostGenerationEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $SafeChunkBounds, $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $SpeciesPostGenerationEvent extends $Event {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type, list3: $List$$Type<$BlockPos$$Type>, safeChunkBounds4: $SafeChunkBounds$$Type, blockState5: $BlockState$$Type)

public "getEndPoints"(): $List<$BlockPos>
public "getInitialDirtState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getRootPos"(): $BlockPos
public "getSafeBounds"(): $SafeChunkBounds
public "getSpecies"(): $Species
get "endPoints"(): $List<$BlockPos>
get "initialDirtState"(): $BlockState
get "level"(): $LevelAccessor
get "rootPos"(): $BlockPos
get "safeBounds"(): $SafeChunkBounds
get "species"(): $Species
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$SeedVoluntaryPlantEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemEntity, $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $SeedVoluntaryPlantEvent extends $Event {
constructor()
constructor(itemEntity0: $ItemEntity$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean)

public "getEntityItem"(): $ItemEntity
public "getPos"(): $BlockPos
public "getSpecies"(): $Species
public "getWillPlant"(): boolean
public "setSpecies"(species0: $Species$$Type): void
public "setWillPlant"(boolean0: boolean): void
get "entityItem"(): $ItemEntity
get "pos"(): $BlockPos
get "species"(): $Species
get "willPlant"(): boolean
set "species"(value: $Species$$Type)
set "willPlant"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor" {
import { $PropertiesAccessor$IterationAction$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor$IterationAction"
import { $ConfigurationProperty$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $PropertiesAccessor {
"forEach"(iterationAction0: $PropertiesAccessor$IterationAction$$Type<any>): void
"get"<V>(configurationProperty0: $ConfigurationProperty$$Type<V>): V
"has"(configurationProperty0: $ConfigurationProperty$$Type<any>): boolean
}

export namespace $PropertiesAccessor {
const probejs$$marker: never
}
export abstract class $PropertiesAccessor$$Static implements $PropertiesAccessor {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $GrowableBlock$Info {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry" {
import { $Optional } from "packages/java/util/$Optional"
import { $Configuration } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConfigurationTemplate, $ConfigurationTemplate$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationTemplate"

export class $TemplateRegistry<C extends $Configuration<C, any>> {
constructor()

public "get"(resourceLocation0: $ResourceLocation$$Type): $Optional<$ConfigurationTemplate<C>>
public "register"(resourceLocation0: $ResourceLocation$$Type, configurationTemplate1: $ConfigurationTemplate$$Type<C>): void
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$PodBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Pod$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
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
import { $HorizontalDirectionalBlock } from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BonemealableBlock } from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $GrowableBlock } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PodBlock extends $HorizontalDirectionalBlock implements $BonemealableBlock, $GrowableBlock {
constructor(properties0: $BlockBehaviour$Properties$$Type, pod1: $Pod$$Type)

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
public "doTick"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
public "drop"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAge"(blockState0: $BlockState$$Type): integer
public "getAgeAsPercentage"(blockState0: $BlockState$$Type): float
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
public "getMaxAge"(): integer
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
public "isBonemealSuccess"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
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
public "isSupported"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isValidBonemealTarget"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "performBonemeal"(serverLevel0: $ServerLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "performMatureAction"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "rot"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "tickMature"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
get "blockStates"(): $List<$BlockState>
get "maxAge"(): integer
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Family$TreeActivationContext {
readonly "hand": $InteractionHand
readonly "heldItem": $ItemStack
readonly "hitPos": $BlockPos
readonly "hitResult": $BlockHitResult
readonly "hitState": $BlockState
readonly "level": $Level
readonly "player": $Player
readonly "rootPos": $BlockPos

constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, player4: $Player$$Type, interactionHand5: $InteractionHand$$Type, itemStack6: $ItemStack$$Type, blockHitResult7: $BlockHitResult$$Type)

}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$SurfaceRootBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $SimpleWaterloggedBlock } from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
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
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Family, $Family$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
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
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $RootConnections } from "packages/com/ferreusveritas/dynamictrees/util/$RootConnections"

export class $SurfaceRootBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "GROUNDED": $BooleanProperty
static readonly "MAX_RADIUS": integer
static readonly "WATERLOGGED": $BooleanProperty

constructor(family0: $Family$$Type)
constructor(mapColor0: $MapColor$$Type, family1: $Family$$Type)

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
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
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
public "getConnectionData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type): $RootConnections
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFamily"(): $Family
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMaxRadius"(): integer
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRadialHeight"(int0: integer): integer
public "getRadius"(blockState0: $BlockState$$Type): integer
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateForRadius"(int0: integer): $BlockState
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
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRadius"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): integer
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "family"(): $Family
get "maxRadius"(): integer
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$DynamicSaplingBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
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
import { $BonemealableBlock } from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $PlantType } from "packages/net/minecraftforge/common/$PlantType"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $IPlantable } from "packages/net/minecraftforge/common/$IPlantable"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $DynamicSaplingBlock extends $Block implements $BonemealableBlock, $IPlantable {
constructor(species0: $Species$$Type)

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
public static "canSaplingStay"(levelReader0: $LevelReader$$Type, species1: $Species$$Type, blockPos2: $BlockPos$$Type): boolean
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
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getPlantType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $PlantType
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSpecies"(): $Species
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBonemealSuccess"(level0: $Level$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
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
public "isValidBonemealTarget"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "performBonemeal"(serverLevel0: $ServerLevel$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
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
get "species"(): $Species
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BranchBlock$ItemStackPos, $BranchBlock$ItemStackPos$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos"
import { $BranchConnectionData$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BranchConnectionData"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockBounds } from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BranchDestructionData$PosType$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData$PosType"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import { $LeavesProperties } from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $NetVolumeNode$Volume, $NetVolumeNode$Volume$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import { $Map$$Type } from "packages/java/util/$Map"

export class $BranchDestructionData {
readonly "basePos": $BlockPos
static readonly "bounds": $BlockBounds
readonly "cutDir": $Direction
readonly "cutPos": $BlockPos
readonly "destroyedBranchesBlockIndex": integer[]
readonly "destroyedBranchesConnections": integer[]
readonly "destroyedBranchesRadiusPosition": integer[]
readonly "destroyedLeaves": integer[]
readonly "destroyedLeavesBlockIndex": integer[]
readonly "endPoints": integer[]
readonly "leavesDrops": $List<$BranchBlock$ItemStackPos>
readonly "species": $Species
readonly "toolDir": $Direction
readonly "trunkHeight": integer
readonly "woodVolume": $NetVolumeNode$Volume

constructor(compoundTag0: $CompoundTag$$Type)
constructor()
constructor(species0: $Species$$Type, map1: $Map$$Type<$BlockPos$$Type, $BranchConnectionData$$Type>, map2: $Map$$Type<$BlockPos$$Type, $BlockState$$Type>, list3: $List$$Type<$BranchBlock$ItemStackPos$$Type>, list4: $List$$Type<$BlockPos$$Type>, volume5: $NetVolumeNode$Volume$$Type, blockPos6: $BlockPos$$Type, direction7: $Direction$$Type, direction8: $Direction$$Type, int9: integer)
constructor(species0: $Species$$Type, map1: $Map$$Type<$BlockPos$$Type, $BranchConnectionData$$Type>, map2: $Map$$Type<$BlockPos$$Type, $BlockState$$Type>, list3: $List$$Type<$BranchBlock$ItemStackPos$$Type>, list4: $List$$Type<$BlockPos$$Type>, volume5: $NetVolumeNode$Volume$$Type, blockPos6: $BlockPos$$Type, blockPos7: $BlockPos$$Type, direction8: $Direction$$Type, direction9: $Direction$$Type, int10: integer)

public static "decodeRelPos"(int0: integer): $BlockPos
public static "encodeRelBlockPos"(blockPos0: $BlockPos$$Type): integer
public "getBranchBlockState"(int0: integer): $BlockState
public "getBranchRadius"(int0: integer): integer
public "getBranchRelPos"(int0: integer): $BlockPos
public "getConnections"(int0: integer, int1s: integer[]): void
public "getEndPointRelPos"(int0: integer): $BlockPos
public "getLeavesBlockState"(int0: integer): $BlockState
public "getLeavesHydro"(int0: integer): integer
public "getLeavesProperties"(int0: integer): $LeavesProperties
public "getLeavesRelPos"(int0: integer): $BlockPos
public "getNumBranches"(): integer
public "getNumEndpoints"(): integer
public "getNumLeaves"(): integer
public "getPositions"(posType0: $BranchDestructionData$PosType$$Type): $Iterable<$BlockPos>
public "getPositions"(posType0: $BranchDestructionData$PosType$$Type, boolean1: boolean): $Iterable<$BlockPos>
public "getRelativeCutPos"(): $BlockPos
public "merge"(branchDestructionData0: $BranchDestructionData$$Type): $BranchDestructionData
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "numBranches"(): integer
get "numEndpoints"(): integer
get "numLeaves"(): integer
get "relativeCutPos"(): $BlockPos
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BranchBlock$ItemStackPos {
readonly "pos": $BlockPos
readonly "stack": $ItemStack

constructor(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type)

}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$Vec2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2i {
constructor(vec2i0: $Vec2i$$Type)
constructor(int0: integer, int1: integer, boolean2: boolean)
constructor(int0: integer, int1: integer)
constructor()

public "add"(vec2i0: $Vec2i$$Type): $Vec2i
public "add"(int0: integer, int1: integer): $Vec2i
public "angle"(): double
public static "crossProduct"(vec2i0: $Vec2i$$Type, vec2i1: $Vec2i$$Type): integer
public "isTight"(): boolean
public "len"(): double
public "set"(vec2i0: $Vec2i$$Type): $Vec2i
public "set"(int0: integer, int1: integer): $Vec2i
public "setTight"(boolean0: boolean): $Vec2i
public "sub"(int0: integer, int1: integer): $Vec2i
public "sub"(vec2i0: $Vec2i$$Type): $Vec2i
get "tight"(): boolean
set "tight"(value: boolean)
get "x"(): integer
set "x"(value: integer)
get "z"(): integer
set "z"(value: integer)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$MappedResult" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Result$SimpleMapper$$Type } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Result$Mapper$$Type } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"
import { $Result } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export interface $MappedResult<T, I> extends $Result<T, I> {
"elseError"(predicate0: $Predicate$$Type<T>, string1: string): $MappedResult<T, I>
"elseMapIfContains"<V>(string0: string, class1: $Class$$Type<V>, mapper2: $Result$Mapper$$Type<V, T>, t3: T): $MappedResult<T, I>
"elseMapIfContains"<V>(string0: string, class1: $Class$$Type<V>, mapper2: $Result$Mapper$$Type<V, T>): $MappedResult<T, I>
"elseMapIfContains"<V>(string0: string, class1: $Class$$Type<V>, simpleMapper2: $Result$SimpleMapper$$Type<V, T>): $MappedResult<T, I>
"elseMapIfContains"<V>(string0: string, class1: $Class$$Type<V>, simpleMapper2: $Result$SimpleMapper$$Type<V, T>, t3: T): $MappedResult<T, I>
"elseMapIfType"<V>(class0: $Class$$Type<V>, simpleMapper1: $Result$SimpleMapper$$Type<V, T>): $MappedResult<T, I>
"elseMapIfType"<V>(class0: $Class$$Type<V>, mapper1: $Result$Mapper$$Type<V, T>): $MappedResult<T, I>
"elseTypeError"(): $MappedResult<T, I>
"forEachWarning"(consumer0: $Consumer$$Type<string>): $Result<T, I>
"get"(): T
"getError"(): string
"getInput"(): I
"getWarnings"(): $List<string>
"ifSuccess"(consumer0: $Consumer$$Type<T>): $Result<T, I>
"ifSuccessOrElse"(consumer0: $Consumer$$Type<T>, consumer1: $Consumer$$Type<string>, consumer2: $Consumer$$Type<string>): $Result<T, I>
"ifSuccessOrElseThrow"(consumer0: $Consumer$$Type<T>, consumer1: $Consumer$$Type<string>): $Result<T, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>, string1: string): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>, predicate1: $Predicate$$Type<V>, string2: string): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>, string1: string): $MappedResult<V, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>, predicate1: $Predicate$$Type<V>, string2: string): $MappedResult<V, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>): $MappedResult<V, I>
"mapEachIfArray"<V, E>(class0: $Class$$Type<V>, simpleMapper1: $Result$SimpleMapper$$Type<V, E>): $MappedResult<$List<E>, I>
"mapEachIfArray"<V, E>(class0: $Class$$Type<V>, mapper1: $Result$Mapper$$Type<V, E>): $MappedResult<$List<E>, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, simpleMapper2: $Result$SimpleMapper$$Type<E, V>, v3: V): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, mapper2: $Result$Mapper$$Type<E, V>): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, simpleMapper2: $Result$SimpleMapper$$Type<E, V>): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, mapper2: $Result$Mapper$$Type<E, V>, v3: V): $MappedResult<V, I>
"mapIfType"<V, N>(class0: $Class$$Type<V>, mapper1: $Result$Mapper$$Type<V, N>): $MappedResult<N, I>
"mapIfType"<V, N>(class0: $Class$$Type<V>, simpleMapper1: $Result$SimpleMapper$$Type<V, N>): $MappedResult<N, I>
"mapIfValid"<V>(predicate0: $Predicate$$Type<T>, string1: string, simpleMapper2: $Result$SimpleMapper$$Type<T, V>): $MappedResult<V, I>
"mapIfValid"<V>(predicate0: $Predicate$$Type<T>, string1: string, mapper2: $Result$Mapper$$Type<T, V>): $MappedResult<V, I>
"mapToListOfType"<E>(class0: $Class$$Type<E>): $MappedResult<$List<E>, I>
"orElse"(t0: T): T
"orElse"(t0: T, consumer1: $Consumer$$Type<string>, consumer2: $Consumer$$Type<string>): T
"orElseApply"(function0: $Function$$Type<string, T>, t1: T): T
"orElseApply"(function0: $Function$$Type<string, T>, biConsumer1: $BiConsumer$$Type<T, $List$$Type<string>>, t2: T): T
"orElseGet"(supplier0: $Supplier$$Type<T>): T
"orElseThrow"(): T
"removeError"(): $Result<T, I>
"success"(): boolean
get "error"(): string
get "input"(): I
get "warnings"(): $List<string>
}

export namespace $MappedResult {
const probejs$$marker: never
}
export abstract class $MappedResult$$Static<T, I> implements $MappedResult<T, I> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$PottedSaplingBlock" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Species, $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
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
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $BaseEntityBlock } from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PottedSaplingBlock extends $BaseEntityBlock {
static readonly "REG_NAME": $ResourceLocation

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
public "getPotState"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getSpecies"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Species
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
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setPotState"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): boolean
public "setRequiresTool"(v: boolean): void
public "setSpecies"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, species3: $Species$$Type): boolean
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnDrops"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "blockStates"(): $List<$BlockState>
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$Dependencies" {
import { $Generator$DependencyKey$$Type } from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$DependencyKey"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"

export class $Generator$Dependencies {
constructor()

public "allRequiredPresent"(): boolean
public "append"<T>(dependencyKey0: $Generator$DependencyKey$$Type<T>, optional1: $Optional$$Type<T>): $Generator$Dependencies
public "appendValue"<T>(dependencyKey0: $Generator$DependencyKey$$Type<T>, t1: T): $Generator$Dependencies
public "get"<T>(dependencyKey0: $Generator$DependencyKey$$Type<T>): T
public "getOptional"<T>(dependencyKey0: $Generator$DependencyKey$$Type<T>): $Optional<T>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $JoCode {
constructor(string0: string)
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type)
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type)

public static "decode"(string0: string): byte[]
public static "encode"(byte0s: byte[]): string
public "generate"(generationContext0: $GenerationContext$$Type): void
public "getTextComponent"(): $Component
public "rotate"(direction0: $Direction$$Type): $JoCode
public "setCareful"(boolean0: boolean): $JoCode
public "setFacing"(direction0: $Direction$$Type): $JoCode
get "instructions"(): byte[]
set "instructions"(value: byte[])
get "textComponent"(): $Component
set "careful"(value: boolean)
set "facing"(value: $Direction$$Type)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException" {
import { $Exception } from "packages/java/lang/$Exception"

export class $DeserialisationException extends $Exception {
constructor(string0: string)

public static "error"(string0: string): $DeserialisationException
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Result$SimpleMapper$$Type } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $MappedResult } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$MappedResult"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Result$Mapper$$Type } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"

export interface $Result<T, I> {
"forEachWarning"(consumer0: $Consumer$$Type<string>): $Result<T, I>
"get"(): T
"getError"(): string
"getInput"(): I
"getWarnings"(): $List<string>
"ifSuccess"(consumer0: $Consumer$$Type<T>): $Result<T, I>
"ifSuccessOrElse"(consumer0: $Consumer$$Type<T>, consumer1: $Consumer$$Type<string>, consumer2: $Consumer$$Type<string>): $Result<T, I>
"ifSuccessOrElseThrow"(consumer0: $Consumer$$Type<T>, consumer1: $Consumer$$Type<string>): $Result<T, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>, string1: string): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>, predicate1: $Predicate$$Type<V>, string2: string): $MappedResult<V, I>
"map"<V>(mapper0: $Result$Mapper$$Type<T, V>, string1: string): $MappedResult<V, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>, predicate1: $Predicate$$Type<V>, string2: string): $MappedResult<V, I>
"map"<V>(simpleMapper0: $Result$SimpleMapper$$Type<T, V>): $MappedResult<V, I>
"mapEachIfArray"<V, E>(class0: $Class$$Type<V>, simpleMapper1: $Result$SimpleMapper$$Type<V, E>): $MappedResult<$List<E>, I>
"mapEachIfArray"<V, E>(class0: $Class$$Type<V>, mapper1: $Result$Mapper$$Type<V, E>): $MappedResult<$List<E>, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, simpleMapper2: $Result$SimpleMapper$$Type<E, V>, v3: V): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, mapper2: $Result$Mapper$$Type<E, V>): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, simpleMapper2: $Result$SimpleMapper$$Type<E, V>): $MappedResult<V, I>
"mapIfContains"<E, V>(string0: string, class1: $Class$$Type<E>, mapper2: $Result$Mapper$$Type<E, V>, v3: V): $MappedResult<V, I>
"mapIfType"<V, N>(class0: $Class$$Type<V>, mapper1: $Result$Mapper$$Type<V, N>): $MappedResult<N, I>
"mapIfType"<V, N>(class0: $Class$$Type<V>, simpleMapper1: $Result$SimpleMapper$$Type<V, N>): $MappedResult<N, I>
"mapIfValid"<V>(predicate0: $Predicate$$Type<T>, string1: string, simpleMapper2: $Result$SimpleMapper$$Type<T, V>): $MappedResult<V, I>
"mapIfValid"<V>(predicate0: $Predicate$$Type<T>, string1: string, mapper2: $Result$Mapper$$Type<T, V>): $MappedResult<V, I>
"mapToListOfType"<E>(class0: $Class$$Type<E>): $MappedResult<$List<E>, I>
"orElse"(t0: T): T
"orElse"(t0: T, consumer1: $Consumer$$Type<string>, consumer2: $Consumer$$Type<string>): T
"orElseApply"(function0: $Function$$Type<string, T>, t1: T): T
"orElseApply"(function0: $Function$$Type<string, T>, biConsumer1: $BiConsumer$$Type<T, $List$$Type<string>>, t2: T): T
"orElseGet"(supplier0: $Supplier$$Type<T>): T
"orElseThrow"(): T
"removeError"(): $Result<T, I>
"success"(): boolean
get "error"(): string
get "input"(): I
get "warnings"(): $List<string>
}

export namespace $Result {
const probejs$$marker: never
}
export abstract class $Result$$Static<T, I> implements $Result<T, I> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/$Resettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Resettable<T extends $Resettable<T>> {
"reset"(): T
"setPostReloadDefaults"(): T
"setPreReloadDefaults"(): T
}

export namespace $Resettable {
const probejs$$marker: never
}
export abstract class $Resettable$$Static<T extends $Resettable<T>> implements $Resettable<T> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $BlockBounds implements $Iterable<$BlockPos> {
static readonly "INVALID": $BlockBounds

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)
constructor(levelAccessor0: $LevelAccessor$$Type, chunkPos1: $ChunkPos$$Type)
constructor(blockBounds0: $BlockBounds$$Type)
constructor(list0: $List$$Type<$BlockPos$$Type>)
constructor(blockPos0: $BlockPos$$Type)
constructor(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type)

public "expand"(direction0: $Direction$$Type, int1: integer): $BlockBounds
public "expand"(int0: integer): $BlockBounds
public "forEach"(consumer0: $Consumer$$Type<$BlockPos$$Type>): void
public "getMax"(): $BlockPos
public "getMin"(): $BlockPos
public "getXSize"(): integer
public "getYSize"(): integer
public "getZSize"(): integer
public "inBounds"(blockPos0: $BlockPos$$Type): boolean
public "iterator"(): $Iterator<$BlockPos>
public "move"(blockPos0: $BlockPos$$Type): $BlockBounds
public "move"(int0: integer, int1: integer, int2: integer): $BlockBounds
public "shrink"(int0: integer): $BlockBounds
public "shrink"(direction0: $Direction$$Type, int1: integer): $BlockBounds
public "spliterator"(): $Spliterator<$BlockPos>
public "union"(list0: $List$$Type<$BlockPos$$Type>): $BlockBounds
public "union"(blockPos0: $BlockPos$$Type): $BlockBounds
[Symbol.iterator](): IterableIterator<$BlockPos>;
get "max"(): $BlockPos
get "min"(): $BlockPos
get "xSize"(): integer
get "ySize"(): integer
get "zSize"(): integer
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$BiomePredicate" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"

export interface $BiomePredicate extends $Predicate<$Holder<$Biome>> {
"and"(predicate0: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>): $Predicate<$Holder<$Biome>>
"negate"(): $Predicate<$Holder<$Biome>>
"or"(predicate0: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>): $Predicate<$Holder<$Biome>>
"test"(holder0: $Holder$$Type<$Biome$$Type>): boolean
}

export namespace $BiomePredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $BiomePredicate$$Static implements $BiomePredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap" {
import { $SimpleVoxmap$FilterOp$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$FilterOp"
import { $SimpleVoxmap$Cell } from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$Cell"
import { $BlockPos$MutableBlockPos } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $SimpleVoxmap$BlitOp$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$BlitOp"
import { $BlockBounds, $BlockBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $SimpleVoxmap {
constructor(blockBounds0: $BlockBounds$$Type)
constructor(simpleVoxmap0: $SimpleVoxmap$$Type)
constructor(int0: integer, int1: integer, int2: integer, byte3s: byte[])
constructor(int0: integer, int1: integer, int2: integer)

public "blitClear"(blockPos0: $BlockPos$$Type, simpleVoxmap1: $SimpleVoxmap$$Type): $SimpleVoxmap
public "blitMax"(blockPos0: $BlockPos$$Type, simpleVoxmap1: $SimpleVoxmap$$Type): $SimpleVoxmap
public "blitOp"(blockPos0: $BlockPos$$Type, simpleVoxmap1: $SimpleVoxmap$$Type, blitOp2: $SimpleVoxmap$BlitOp$$Type): $SimpleVoxmap
public "blitReplace"(blockPos0: $BlockPos$$Type, simpleVoxmap1: $SimpleVoxmap$$Type): $SimpleVoxmap
public "crop"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $SimpleVoxmap
public "fill"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, byte2: byte): $SimpleVoxmap
public "fill"(byte0: byte): $SimpleVoxmap
public "filter"(filterOp0: $SimpleVoxmap$FilterOp$$Type): $SimpleVoxmap
public "filter"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, filterOp2: $SimpleVoxmap$FilterOp$$Type): $SimpleVoxmap
public "getAllNonZero"(byte0: byte): $Iterable<$BlockPos$MutableBlockPos>
public "getAllNonZero"(): $Iterable<$BlockPos$MutableBlockPos>
public "getAllNonZeroCells"(): $Iterable<$SimpleVoxmap$Cell>
public "getAllNonZeroCells"(byte0: byte): $Iterable<$SimpleVoxmap$Cell>
public "getBounds"(): $BlockBounds
public "getCenter"(): $BlockPos
public "getData"(): byte[]
public "getLenX"(): integer
public "getLenY"(): integer
public "getLenZ"(): integer
public "getTops"(): $Iterable<$BlockPos$MutableBlockPos>
public "getVoxel"(blockPos0: $BlockPos$$Type): byte
public "getVoxel"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): byte
public "getVoxel"(int0: integer, int1: integer, int2: integer): byte
public "isYTouched"(int0: integer): boolean
public "print"(): void
public "setCenter"(blockPos0: $BlockPos$$Type): $SimpleVoxmap
public "setMap"(blockPos0: $BlockPos$$Type): $SimpleVoxmap
public "setMapAndCenter"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $SimpleVoxmap
public "setVoxel"(blockPos0: $BlockPos$$Type, byte1: byte): void
public "setVoxel"(int0: integer, int1: integer, int2: integer, byte3: byte): void
public "setVoxelOr"(int0: integer, int1: integer, int2: integer, byte3: byte): void
public "setVoxelOr"(blockPos0: $BlockPos$$Type, byte1: byte): void
public "setYTouched"(int0: integer): void
get "allNonZero"(): $Iterable<$BlockPos$MutableBlockPos>
get "allNonZeroCells"(): $Iterable<$SimpleVoxmap$Cell>
get "bounds"(): $BlockBounds
get "center"(): $BlockPos
get "data"(): byte[]
get "lenX"(): integer
get "lenY"(): integer
get "lenZ"(): integer
get "tops"(): $Iterable<$BlockPos$MutableBlockPos>
set "center"(value: $BlockPos$$Type)
set "map"(value: $BlockPos$$Type)
set "yTouched"(value: integer)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableFunction" {
import { $Throwable } from "packages/java/lang/$Throwable"

export interface $ThrowableFunction<I, R, T extends $Throwable> {
"apply"(i0: I): R
}

export namespace $ThrowableFunction {
const probejs$$marker: never
}
export abstract class $ThrowableFunction$$Static<I, R, T extends $Throwable> implements $ThrowableFunction<I, R, T> {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$LevelContext" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LevelContext {
constructor(resourceKey0: $ResourceKey$$Type<$Level>, long1: long, levelAccessor2: $LevelAccessor$$Type, level3: $Level$$Type)

public "accessor"(): $LevelAccessor
public static "create"(levelAccessor0: $LevelAccessor$$Type): $LevelContext
public "dimensionKey"(): $ResourceKey<$Level>
public "dimensionName"(): $ResourceLocation
public static "getServerLevelOrThrow"(levelAccessor0: $LevelAccessor$$Type): $ServerLevel
public "level"(): $Level
public "seed"(): long
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $SafeChunkBounds } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $GenerationContext as $GenerationContext$0 } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PostGenerationContext extends $GenerationContext$0 {
constructor(generationContext0: $GenerationContext$$Type, list1: $List$$Type<$BlockPos$$Type>, blockState2: $BlockState$$Type)

public "biome"(): $Holder<$Biome>
public "bounds"(): $SafeChunkBounds
public "endPoints"(): $List<$BlockPos>
public "fruitProductionFactor"(): float
public "initialDirtState"(): $BlockState
public "isWorldGen"(): boolean
public "originPos"(): $BlockPos
public "radius"(): integer
public "seasonValue"(): float
get "worldGen"(): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$Ageable" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $SafeChunkBounds$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $Ageable {
"age"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, randomSource3: $RandomSource$$Type, safeChunkBounds4: $SafeChunkBounds$$Type): integer
}

export namespace $Ageable {
const probejs$$marker: never
}
export abstract class $Ageable$$Static implements $Ageable {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$DTBiomeHolderSet" {
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IncludesExcludesHolderSet } from "packages/com/ferreusveritas/dynamictrees/util/holderset/$IncludesExcludesHolderSet"
import { $List$$Type } from "packages/java/util/$List"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $DTBiomeHolderSet extends $IncludesExcludesHolderSet<$Biome> {
constructor()

public "containsKey"(resourceKey0: $ResourceKey$$Type<$Biome>): boolean
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<$Biome$$Type>>): void
public "serializationType"(): $IForgeHolderSet$SerializationType
public "spliterator"(): $Spliterator<$Holder<$Biome>>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/event/$AddResourceLoadersEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $TreeResourceManager, $TreeResourceManager$$Type } from "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourceManager"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $AddResourceLoadersEvent extends $Event implements $IModBusEvent {
constructor()
constructor(treeResourceManager0: $TreeResourceManager$$Type)

public "getResourceManager"(): $TreeResourceManager
get "resourceManager"(): $TreeResourceManager
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$DataAnimationHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataAnimationHandler {
constructor()

}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Resettable } from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import { $TypedRegistry$EntryType } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import { $FruitBlock } from "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LevelContext$$Type } from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import { $GrowableBlock$Info$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import { $TypedRegistry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $GrowableBlock$MatureAction, $GrowableBlock$MatureAction$$Type } from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Fruit extends $RegistryEntry<$Fruit> implements $Resettable<$Fruit> {
static readonly "NULL": $Fruit
static readonly "REGISTRY": $TypedRegistry<$Fruit>
static readonly "TYPE": $TypedRegistry$EntryType<$Fruit>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "canBoneMeal"(): boolean
public "createBlock"(resourceLocation0: $ResourceLocation$$Type, properties1: $BlockBehaviour$Properties$$Type): void
public "createBlockDrops"(): $LootTable$Builder
public "getAgeProperty"(): $IntegerProperty
public "getBlock"(): $FruitBlock
public "getBlockDropsPath"(): $ResourceLocation
public "getBlockShape"(int0: integer): $VoxelShape
public "getDefaultBlockProperties"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "getDefaultBlockProperties"(): $BlockBehaviour$Properties
public "getDefaultMapColor"(): $MapColor
public "getFlowerHoldPeriodLength"(): float
public "getGrowthChance"(): float
public "getItemStack"(): $ItemStack
public "getMatureAction"(): $GrowableBlock$MatureAction
public "getMaxAge"(): integer
public "getMinProductionFactor"(): float
public "getSeasonOffset"(): float
public "isInFlowerHoldPeriod"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float): boolean
public "isOutOfSeason"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "performMatureAction"(info0: $GrowableBlock$Info$$Type): void
public "place"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float): void
public "placeDuringWorldGen"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, float2: float): void
public "reset"(): $Fruit
public "seasonalFruitProductionFactor"(levelContext0: $LevelContext$$Type, blockPos1: $BlockPos$$Type): float
public "setBlockShapes"(voxelShape0s: $VoxelShape$$Type[]): void
public "setCanBoneMeal"(boolean0: boolean): void
public "setDropCount"(int0: integer): void
public "setFlowerHoldPeriodLength"(float0: float): void
public "setGrowthChance"(float0: float): void
public "setItemStack"(itemStack0: $ItemStack$$Type): void
public "setMatureAction"(matureAction0: $GrowableBlock$MatureAction$$Type): void
public "setMaxAge"(int0: integer): void
public "setMaxDropCount"(int0: integer): void
public "setMinDropCount"(int0: integer): void
public "setMinProductionFactor"(float0: float): void
public "setPostReloadDefaults"(): $Fruit
public "setPreReloadDefaults"(): $Fruit
public "setSeasonOffset"(float0: float): void
public "shouldGenerateBlockDrops"(): boolean
get "ageProperty"(): $IntegerProperty
get "block"(): $FruitBlock
get "blockDropsPath"(): $ResourceLocation
get "defaultBlockProperties"(): $BlockBehaviour$Properties
get "defaultMapColor"(): $MapColor
get "flowerHoldPeriodLength"(): float
get "growthChance"(): float
get "itemStack"(): $ItemStack
get "matureAction"(): $GrowableBlock$MatureAction
get "maxAge"(): integer
get "minProductionFactor"(): float
get "seasonOffset"(): float
set "blockShapes"(value: $VoxelShape$$Type[])
set "dropCount"(value: integer)
set "flowerHoldPeriodLength"(value: float)
set "growthChance"(value: float)
set "itemStack"(value: $ItemStack$$Type)
set "matureAction"(value: $GrowableBlock$MatureAction$$Type)
set "maxAge"(value: integer)
set "maxDropCount"(value: integer)
set "minDropCount"(value: integer)
set "minProductionFactor"(value: float)
set "seasonOffset"(value: float)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Registry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $DTDataProvider } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import { $LanguageProvider } from "packages/net/minecraftforge/common/data/$LanguageProvider"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $DTLangProvider extends $LanguageProvider implements $DTDataProvider {
constructor(packOutput0: $PackOutput$$Type, string1: string, collection2: $Collection$$Type<$Registry$$Type<any>>)

public "block"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "item"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type" {
import { $GenFeature$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import { $PostGenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext"
import { $TriFunction$$Type } from "packages/com/ferreusveritas/dynamictrees/util/function/$TriFunction"
import { $PostGrowContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGrowContext"
import { $PostRotContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext"
import { $GenerationContext, $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $GenFeatureConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import { $FullGenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$FullGenerationContext"
import { $PreGenerationContext } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PreGenerationContext"

export class $GenFeature$Type<C extends $GenerationContext, R> {
static readonly "FULL": $GenFeature$Type<$FullGenerationContext, boolean>
static readonly "POST_GENERATION": $GenFeature$Type<$PostGenerationContext, boolean>
static readonly "POST_GROW": $GenFeature$Type<$PostGrowContext, boolean>
static readonly "POST_ROT": $GenFeature$Type<$PostRotContext, boolean>
static readonly "PRE_GENERATION": $GenFeature$Type<$PreGenerationContext, $BlockPos>

constructor(triFunction0: $TriFunction$$Type<$GenFeature$$Type, $GenFeatureConfiguration$$Type, C, R>)

public "generate"(genFeatureConfiguration0: $GenFeatureConfiguration$$Type, c1: C): R
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourcePack" {
import { $PackResources$ResourceOutput$$Type } from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $InputStream } from "packages/java/io/$InputStream"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TreeResourcePack extends $PackResources {
"close"(): void
"getChildren"(): $Collection<$PackResources>
"getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
"getNamespaces"(): $Set<string>
"getNamespaces"(packType0: $PackType$$Type): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
"hasResource"(resourceLocation0: $ResourceLocation$$Type): boolean
"isBuiltin"(): boolean
"isHidden"(): boolean
"listResources"(string0: string, string1: string, resourceOutput2: $PackResources$ResourceOutput$$Type): void
"listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
"packId"(): string
get "children"(): $Collection<$PackResources>
get "namespaces"(): $Set<string>
get "builtin"(): boolean
get "hidden"(): boolean
}

export namespace $TreeResourcePack {
const probejs$$marker: never
}
export abstract class $TreeResourcePack$$Static implements $TreeResourcePack {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $TypedRegistry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $RegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $TypedRegistry$EntryType<V extends $RegistryEntry<V>> {
constructor(codec0: $Codec$$Type<V>)

public "decode"(jsonObject0: $JsonObject$$Type): V
public "getCodec"(): $Codec<V>
public "setRegistry"(typedRegistry0: $TypedRegistry$$Type<V>): $TypedRegistry$EntryType<V>
get "codec"(): $Codec<V>
set "registry"(value: $TypedRegistry$$Type<V>)
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature" {
import { $CanGrowPredicate } from "packages/com/ferreusveritas/dynamictrees/util/function/$CanGrowPredicate"
import { $ConfigurableRegistry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry"
import { $ConfigurableRegistryEntry } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import { $GenerationContext, $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import { $GenFeatureConfiguration, $GenFeatureConfiguration$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ConfigurationProperty } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import { $BiomePredicate } from "packages/com/ferreusveritas/dynamictrees/util/function/$BiomePredicate"
import { $GenFeature$Type$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenFeature extends $ConfigurableRegistryEntry<$GenFeature, $GenFeatureConfiguration> {
static readonly "BIOME_PREDICATE": $ConfigurationProperty<$BiomePredicate>
static readonly "CAN_GROW_PREDICATE": $ConfigurationProperty<$CanGrowPredicate>
static readonly "FRUITING_RADIUS": $ConfigurationProperty<integer>
static readonly "MAX_COUNT": $ConfigurationProperty<integer>
static readonly "MAX_HEIGHT": $ConfigurationProperty<integer>
static readonly "NULL": $GenFeature
static readonly "PLACE_CHANCE": $ConfigurationProperty<float>
static readonly "QUANTITY": $ConfigurationProperty<integer>
static readonly "RAY_DISTANCE": $ConfigurationProperty<float>
static readonly "REGISTRY": $ConfigurableRegistry<$GenFeature, $GenFeatureConfiguration>
static readonly "VERTICAL_SPREAD": $ConfigurationProperty<float>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "generate"<C extends $GenerationContext, R>(genFeatureConfiguration0: $GenFeatureConfiguration$$Type, type1: $GenFeature$Type$$Type<C, R>, c2: C): R
public "shouldApply"(species0: $Species$$Type, genFeatureConfiguration1: $GenFeatureConfiguration$$Type): boolean
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext" {
import { $GrowSignal, $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $PositionalSpeciesContext } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BranchBlock, $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $DirectionSelectionContext extends $PositionalSpeciesContext {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, branchBlock3: $BranchBlock$$Type, growSignal4: $GrowSignal$$Type)

public "branch"(): $BranchBlock
public "signal"(): $GrowSignal
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext" {
import { $DirectionSelectionContext } from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import { $GrowSignal$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BranchBlock$$Type } from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import { $Species$$Type } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $DirectionManipulationContext extends $DirectionSelectionContext {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, species2: $Species$$Type, branchBlock3: $BranchBlock$$Type, growSignal4: $GrowSignal$$Type, int5: integer, int6s: integer[])

public "probMap"(int0s: integer[]): void
public "probMap"(): integer[]
public "radius"(): integer
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$DTResource" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $DTResource<R> {
constructor(resourceLocation0: $ResourceLocation$$Type, r1: R)

public "getLocation"(): $ResourceLocation
public "getResource"(): R
public "map"<N>(function0: $Function$$Type<R, N>): $DTResource<N>
get "location"(): $ResourceLocation
get "resource"(): R
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Result } from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export class $ConfigurationProperty<T> {
static readonly "NULL": $ConfigurationProperty<any>

public static "block"(string0: string): $ConfigurationProperty<$Block>
public static "bool"(string0: string): $ConfigurationProperty<boolean>
public "deserialise"(jsonObject0: $JsonObject$$Type): $Optional<$Result<T, $JsonElement>>
public static "doubleProperty"(string0: string): $ConfigurationProperty<float>
public static "floatProperty"(string0: string): $ConfigurationProperty<float>
public "getKey"(): string
public "getType"(): $Class<T>
public static "integer"(string0: string): $ConfigurationProperty<integer>
public static "item"(string0: string): $ConfigurationProperty<$Item>
public static "longProperty"(string0: string): $ConfigurationProperty<long>
public static "property"<T>(string0: string, class1: $Class$$Type<T>): $ConfigurationProperty<T>
public static "string"(string0: string): $ConfigurationProperty<string>
get "key"(): string
get "type"(): $Class<T>
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export interface $Cell {
"getValue"(): integer
"getValueFromSide"(direction0: $Direction$$Type): integer
get "value"(): integer
}

export namespace $Cell {
const probejs$$marker: never
}
export abstract class $Cell$$Static implements $Cell {
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$CanGrowPredicate" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $CanGrowPredicate extends $BiPredicate<$LevelAccessor, $BlockPos> {
"and"(biPredicate0: $BiPredicate$$Type<$LevelAccessor$$Type, $BlockPos$$Type>): $BiPredicate<$LevelAccessor, $BlockPos>
"negate"(): $BiPredicate<$LevelAccessor, $BlockPos>
"or"(biPredicate0: $BiPredicate$$Type<$LevelAccessor$$Type, $BlockPos$$Type>): $BiPredicate<$LevelAccessor, $BlockPos>
"test"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): boolean
}

export namespace $CanGrowPredicate {
const probejs$$marker: never
}
export abstract class $CanGrowPredicate$$Static implements $CanGrowPredicate {
}
}

