declare module "packages/net/dries007/tfc/common/entities/livestock/$CommonAnimalData" {
import { $Record } from "packages/java/lang/$Record"
import { $EntityDataAccessor, $EntityDataAccessor$$Type } from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $CommonAnimalData extends $Record {
constructor(gender: $EntityDataAccessor$$Type<boolean>, birthday: $EntityDataAccessor$$Type<long>, familiarity: $EntityDataAccessor$$Type<float>, uses: $EntityDataAccessor$$Type<integer>, fertilized: $EntityDataAccessor$$Type<boolean>, oldDay: $EntityDataAccessor$$Type<long>, geneticSize: $EntityDataAccessor$$Type<integer>, lastFed: $EntityDataAccessor$$Type<long>)

public "birthday"(): $EntityDataAccessor<long>
public "familiarity"(): $EntityDataAccessor<float>
public "fertilized"(): $EntityDataAccessor<boolean>
public "gender"(): $EntityDataAccessor<boolean>
public "geneticSize"(): $EntityDataAccessor<integer>
public "lastFed"(): $EntityDataAccessor<long>
public "oldDay"(): $EntityDataAccessor<long>
public "uses"(): $EntityDataAccessor<integer>
}
}

declare module "packages/net/dries007/tfc/world/noise/$OpenSimplex2D" {
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $DoubleUnaryOperator$$Type } from "packages/java/util/function/$DoubleUnaryOperator"

export class $OpenSimplex2D implements $Noise2D {
constructor(long0: long)
constructor(int0: integer)

public "abs"(): $Noise2D
public "add"(noise2D0: $Noise2D$$Type): $Noise2D
public "affine"(double0: double, double1: double): $Noise2D
public "clamped"(double0: double, double1: double): $Noise2D
public "lazyProduct"(noise2D0: $Noise2D$$Type): $Noise2D
public "map"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $Noise2D
public "noise"(double0: double, double1: double): double
public "ridged"(): $Noise2D
/** Rotates the coordinate grid by the given angle (in degrees) */
public "rotate"(angle: double): $Noise2D
public "scaled"(double0: double, double1: double, double2: double, double3: double): $OpenSimplex2D
public "terraces"(int0: integer): $Noise2D
/** Swaps the x and z coordinate */
public "transpose"(): $Noise2D
public "warped"(openSimplex2D0: $OpenSimplex2D$$Type): $Noise2D
}
}

declare module "packages/net/dries007/tfc/util/$Metal$BlockType" {
import { $Function } from "packages/java/util/function/$Function"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enum } from "packages/java/lang/$Enum"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Metal$Default$$Type } from "packages/net/dries007/tfc/util/$Metal$Default"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $RegistryMetal$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryMetal"

export class $Metal$BlockType extends $Enum<$Metal$BlockType> {
static readonly "ANVIL": $Metal$BlockType
static readonly "BARS": $Metal$BlockType
static readonly "BLOCK": $Metal$BlockType
static readonly "BLOCK_SLAB": $Metal$BlockType
static readonly "BLOCK_STAIRS": $Metal$BlockType
static readonly "CHAIN": $Metal$BlockType
static readonly "LAMP": $Metal$BlockType
static readonly "TRAPDOOR": $Metal$BlockType

public "create"(registryMetal0: $RegistryMetal$$Type): $Supplier<$Block>
public "createBlockItem"(properties0: $Item$Properties$$Type): $Function<$Block, $BlockItem>
public "createName"(registryMetal0: $RegistryMetal$$Type): string
public "has"(default0: $Metal$Default$$Type): boolean
public static "valueOf"(string0: string): $Metal$BlockType
public static "values"(): $Metal$BlockType[]
}
}

declare module "packages/net/dries007/tfc/world/noise/$OpenSimplex3D" {
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise3D } from "packages/net/dries007/tfc/world/noise/$Noise3D"

export class $OpenSimplex3D implements $Noise3D {
constructor(long0: long)
constructor(int0: integer)

/** Dissolves this `Noise3D` to a `Noise2D` by using the provided `Noise2D` as the y-value */
public "dissolve"(yNoise: $Noise2D$$Type): $Noise2D
public "noise"(double0: double, double1: double, double2: double): double
/** Rotate this noise around the x-axis */
public "rotateX"(angle: double): $Noise3D
/** Rotate this noise around the y-axis */
public "rotateY"(angle: double): $Noise3D
/** Rotate this noise around the z-axis */
public "rotateZ"(angle: double): $Noise3D
public "scaled"(double0: double, double1: double, double2: double, double3: double): $OpenSimplex3D
/** Swap the x and y coordinates */
public "transposeXY"(): $Noise3D
/** Swap the x and z coordinates */
public "transposeXZ"(): $Noise3D
/** Swap the y and z coordinates */
public "transposeYZ"(): $Noise3D
public "warped"(openSimplex3D0: $OpenSimplex3D$$Type): $Noise3D
}
}

declare module "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackProvider" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Record } from "packages/java/lang/$Record"
import { $ItemStackModifier, $ItemStackModifier$$Type } from "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackModifier"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackProvider extends $Record {
constructor(itemStack0: $ItemStack$$Type, itemStackModifier1s: $ItemStackModifier$$Type[])
constructor(stack: $Supplier$$Type<$ItemStack>, modifiers: $ItemStackModifier$$Type[])

public static "copyInput"(): $ItemStackProvider
public "dependsOnInput"(): boolean
public static "empty"(): $ItemStackProvider
public static "fromJson"(jsonObject0: $JsonObject$$Type): $ItemStackProvider
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ItemStackProvider
public "getEmptyStack"(): $ItemStack
public "getSingleStack"(itemStack0: $ItemStack$$Type): $ItemStack
public "getStack"(itemStack0: $ItemStack$$Type): $ItemStack
public "modifiers"(): $ItemStackModifier[]
public static "of"(itemStack0: $ItemStack$$Type, ...itemStackModifier1s: $ItemStackModifier$$Type[]): $ItemStackProvider
public "stack"(): $Supplier<$ItemStack>
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "emptyStack"(): $ItemStack
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$NoiseType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$NoiseType extends $Enum<$FastNoiseLite$NoiseType> {
static readonly "Cellular": $FastNoiseLite$NoiseType
static readonly "OpenSimplex2": $FastNoiseLite$NoiseType
static readonly "OpenSimplex2S": $FastNoiseLite$NoiseType
static readonly "Perlin": $FastNoiseLite$NoiseType
static readonly "Value": $FastNoiseLite$NoiseType
static readonly "ValueCubic": $FastNoiseLite$NoiseType

public static "valueOf"(string0: string): $FastNoiseLite$NoiseType
public static "values"(): $FastNoiseLite$NoiseType[]
}
}

declare module "packages/net/dries007/tfc/world/$RandomStateExtension" {
import { $ChunkGeneratorExtension, $ChunkGeneratorExtension$$Type } from "packages/net/dries007/tfc/world/$ChunkGeneratorExtension"

export interface $RandomStateExtension {
"tfc$getChunkGeneratorExtension"(): $ChunkGeneratorExtension
"tfc$setChunkGeneratorExtension"(chunkGeneratorExtension0: $ChunkGeneratorExtension$$Type): void
}

export namespace $RandomStateExtension {
const probejs$$marker: never
}
export abstract class $RandomStateExtension$$Static implements $RandomStateExtension {
}
}

declare module "packages/net/dries007/tfc/util/$Sluiceable" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ItemDefinition } from "packages/net/dries007/tfc/util/$ItemDefinition"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"

export class $Sluiceable extends $ItemDefinition {
static readonly "CACHE": $IndirectHashCollection<$Item, $Sluiceable>
static readonly "MANAGER": $DataManager<$Sluiceable>

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "get"(itemStack0: $ItemStack$$Type): $Sluiceable
public "getLootTable"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
}
}

declare module "packages/net/dries007/tfc/network/$DataManagerSyncPacket" {
import { $NetworkEvent$Context$$Type } from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DataManager$$Type } from "packages/net/dries007/tfc/util/$DataManager"
import { $Map$$Type } from "packages/java/util/$Map"

export class $DataManagerSyncPacket<T> {
constructor()

public "decode"(dataManager0: $DataManager$$Type<T>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "encode"(dataManager0: $DataManager$$Type<T>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "handle"(context0: $NetworkEvent$Context$$Type, dataManager1: $DataManager$$Type<T>): void
public "with"(map0: $Map$$Type<$ResourceLocation$$Type, T>): $DataManagerSyncPacket<T>
}
}

declare module "packages/net/dries007/tfc/world/settings/$RockLayerSettings$Data" {
import { $Record } from "packages/java/lang/$Record"
import { $RockLayerSettings } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RockLayerSettings$LayerData, $RockLayerSettings$LayerData$$Type } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings$LayerData"
import { $RockSettings, $RockSettings$$Type } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $RockLayerSettings$Data extends $Record {
constructor(rocks: $Map$$Type<string, $RockSettings$$Type>, bottom: $List$$Type<string>, layers: $List$$Type<$RockLayerSettings$LayerData$$Type>, oceanFloor: $List$$Type<string>, land: $List$$Type<string>, volcanic: $List$$Type<string>, uplift: $List$$Type<string>)

public "bottom"(): $List<string>
public "land"(): $List<string>
public "layers"(): $List<$RockLayerSettings$LayerData>
public "oceanFloor"(): $List<string>
public "parse"(): $RockLayerSettings
public "rocks"(): $Map<string, $RockSettings>
public "uplift"(): $List<string>
public "volcanic"(): $List<string>
}
}

declare module "packages/net/dries007/tfc/common/capabilities/heat/$Heat" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Heat extends $Enum<$Heat> {
static readonly "BRIGHT_RED": $Heat
static readonly "BRILLIANT_WHITE": $Heat
static readonly "DARK_RED": $Heat
static readonly "FAINT_RED": $Heat
static readonly "HOT": $Heat
static readonly "ORANGE": $Heat
static readonly "VERY_HOT": $Heat
static readonly "WARMING": $Heat
static readonly "WHITE": $Heat
static readonly "YELLOW": $Heat
static readonly "YELLOW_WHITE": $Heat

public "getColor"(): $ChatFormatting
public "getDisplayName"(): $MutableComponent
public static "getHeat"(float0: float): $Heat
public "getMax"(): float
public "getMin"(): float
public static "maxVisibleTemperature"(): float
public static "scaleTemperatureForGui"(float0: float): integer
public static "valueOf"(string0: string): $Heat
public static "values"(): $Heat[]
get "color"(): $ChatFormatting
get "displayName"(): $MutableComponent
get "max"(): float
get "min"(): float
}
}

declare module "packages/net/dries007/tfc/mixin/accessor/$FallingBlockEntityAccessor" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $FallingBlockEntityAccessor {
"setBlockState"(blockState0: $BlockState$$Type): void
set "blockState"(value: $BlockState$$Type)
}

export namespace $FallingBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $FallingBlockEntityAccessor$$Static implements $FallingBlockEntityAccessor {
}
}

declare module "packages/net/dries007/tfc/world/settings/$RockLayerSettings$LayerData" {
import { $Record } from "packages/java/lang/$Record"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $RockLayerSettings$LayerData extends $Record {
constructor(id: string, layers: $Map$$Type<string, string>)

public "id"(): string
public "layers"(): $Map<string, string>
}
}

declare module "packages/net/dries007/tfc/common/blocks/$IForgeBlockExtension" {
import { $ExtendedProperties } from "packages/net/dries007/tfc/common/blocks/$ExtendedProperties"
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
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $IPlantable$$Type } from "packages/net/minecraftforge/common/$IPlantable"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlockExtension extends $IForgeBlock {
"addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
"addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
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
"getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
"getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
"getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
"getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
"getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
"getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
"getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
"getExtendedProperties"(): $ExtendedProperties
"getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
"getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
"getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
"getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
"getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
"getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
"getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
"getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
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
"supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
get "extendedProperties"(): $ExtendedProperties
}

export namespace $IForgeBlockExtension {
const probejs$$marker: never
}
export abstract class $IForgeBlockExtension$$Static implements $IForgeBlockExtension {
}
}

declare module "packages/net/dries007/tfc/util/registry/$RegistryMetal" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Rarity } from "packages/net/minecraft/world/item/$Rarity"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $Metal$Tier } from "packages/net/dries007/tfc/util/$Metal$Tier"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ArmorMaterial } from "packages/net/minecraft/world/item/$ArmorMaterial"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $RegistryMetal extends $StringRepresentable {
"armorTier"(): $ArmorMaterial
"getFullBlock"(): $Supplier<$Block>
"getRarity"(): $Rarity
"getSerializedName"(): string
"mapColor"(): $MapColor
"metalTier"(): $Metal$Tier
"toolTier"(): $Tier
get "fullBlock"(): $Supplier<$Block>
get "rarity"(): $Rarity
get "serializedName"(): string
}

export namespace $RegistryMetal {
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $RegistryMetal$$Static implements $RegistryMetal {
static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$CellularDistanceFunction" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$CellularDistanceFunction extends $Enum<$FastNoiseLite$CellularDistanceFunction> {
static readonly "Euclidean": $FastNoiseLite$CellularDistanceFunction
static readonly "EuclideanSq": $FastNoiseLite$CellularDistanceFunction
static readonly "Hybrid": $FastNoiseLite$CellularDistanceFunction
static readonly "Manhattan": $FastNoiseLite$CellularDistanceFunction

public static "valueOf"(string0: string): $FastNoiseLite$CellularDistanceFunction
public static "values"(): $FastNoiseLite$CellularDistanceFunction[]
}
}

declare module "packages/net/dries007/tfc/world/biome/$BiomeBridge" {
import { $BiomeExtension } from "packages/net/dries007/tfc/world/biome/$BiomeExtension"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $BiomeBridge {
"tfc$getExtension"(supplier0: $Supplier$$Type<$BiomeExtension>): $BiomeExtension
}

export namespace $BiomeBridge {
const probejs$$marker: never
}
export abstract class $BiomeBridge$$Static implements $BiomeBridge {
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$FractalType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$FractalType extends $Enum<$FastNoiseLite$FractalType> {
static readonly "DomainWarpIndependent": $FastNoiseLite$FractalType
static readonly "DomainWarpProgressive": $FastNoiseLite$FractalType
static readonly "FBm": $FastNoiseLite$FractalType
static readonly "None": $FastNoiseLite$FractalType
static readonly "PingPong": $FastNoiseLite$FractalType
static readonly "Ridged": $FastNoiseLite$FractalType

public static "valueOf"(string0: string): $FastNoiseLite$FractalType
public static "values"(): $FastNoiseLite$FractalType[]
}
}

declare module "packages/net/dries007/tfc/util/calendar/$Month" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Month$Style$$Type } from "packages/net/dries007/tfc/util/calendar/$Month$Style"
import { $Season } from "packages/net/dries007/tfc/util/calendar/$Season"

export class $Month extends $Enum<$Month> {
static readonly "APRIL": $Month
static readonly "AUGUST": $Month
static readonly "DECEMBER": $Month
static readonly "FEBRUARY": $Month
static readonly "JANUARY": $Month
static readonly "JULY": $Month
static readonly "JUNE": $Month
static readonly "MARCH": $Month
static readonly "MAY": $Month
static readonly "NOVEMBER": $Month
static readonly "OCTOBER": $Month
static readonly "SEPTEMBER": $Month

public "getSeason"(): $Season
public "getTemperatureModifier"(): float
public "getTranslationKey"(style0: $Month$Style$$Type): string
public "next"(): $Month
public static "valueOf"(int0: integer): $Month
public static "valueOf"(string0: string): $Month
public static "values"(): $Month[]
get "season"(): $Season
get "temperatureModifier"(): float
}
}

declare module "packages/net/dries007/tfc/common/blocks/rock/$RockDisplayCategory" {
import { $RockCategory } from "packages/net/dries007/tfc/common/blocks/rock/$RockCategory"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $RockDisplayCategory extends $Enum<$RockDisplayCategory> {
static readonly "FELSIC_IGNEOUS_EXTRUSIVE": $RockDisplayCategory
static readonly "FELSIC_IGNEOUS_INTRUSIVE": $RockDisplayCategory
static readonly "INTERMEDIATE_IGNEOUS_EXTRUSIVE": $RockDisplayCategory
static readonly "INTERMEDIATE_IGNEOUS_INTRUSIVE": $RockDisplayCategory
static readonly "MAFIC_IGNEOUS_EXTRUSIVE": $RockDisplayCategory
static readonly "MAFIC_IGNEOUS_INTRUSIVE": $RockDisplayCategory
static readonly "METAMORPHIC": $RockDisplayCategory
static readonly "SEDIMENTARY": $RockDisplayCategory

public "category"(): $RockCategory
public "createTooltip"(): $Component
public static "valueOf"(string0: string): $RockDisplayCategory
public static "values"(): $RockDisplayCategory[]
}
}

declare module "packages/net/dries007/tfc/util/$Metal$Default" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Rarity } from "packages/net/minecraft/world/item/$Rarity"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"
import { $RegistryMetal } from "packages/net/dries007/tfc/util/registry/$RegistryMetal"
import { $Metal$Tier } from "packages/net/dries007/tfc/util/$Metal$Tier"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ArmorMaterial } from "packages/net/minecraft/world/item/$ArmorMaterial"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Metal$Default extends $Enum<$Metal$Default> implements $StringRepresentable, $RegistryMetal {
static readonly "BISMUTH": $Metal$Default
static readonly "BISMUTH_BRONZE": $Metal$Default
static readonly "BLACK_BRONZE": $Metal$Default
static readonly "BLACK_STEEL": $Metal$Default
static readonly "BLUE_STEEL": $Metal$Default
static readonly "BRASS": $Metal$Default
static readonly "BRONZE": $Metal$Default
static readonly "CAST_IRON": $Metal$Default
static readonly "COPPER": $Metal$Default
static readonly "GOLD": $Metal$Default
static readonly "HIGH_CARBON_BLACK_STEEL": $Metal$Default
static readonly "HIGH_CARBON_BLUE_STEEL": $Metal$Default
static readonly "HIGH_CARBON_RED_STEEL": $Metal$Default
static readonly "HIGH_CARBON_STEEL": $Metal$Default
static readonly "NICKEL": $Metal$Default
static readonly "PIG_IRON": $Metal$Default
static readonly "RED_STEEL": $Metal$Default
static readonly "ROSE_GOLD": $Metal$Default
static readonly "SILVER": $Metal$Default
static readonly "STEEL": $Metal$Default
static readonly "STERLING_SILVER": $Metal$Default
static readonly "TIN": $Metal$Default
static readonly "UNKNOWN": $Metal$Default
static readonly "WEAK_BLUE_STEEL": $Metal$Default
static readonly "WEAK_RED_STEEL": $Metal$Default
static readonly "WEAK_STEEL": $Metal$Default
static readonly "WROUGHT_IRON": $Metal$Default
static readonly "ZINC": $Metal$Default

public "armorTier"(): $ArmorMaterial
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getColor"(): integer
public "getFullBlock"(): $Supplier<$Block>
public "getRarity"(): $Rarity
public "getSerializedName"(): string
public "hasArmor"(): boolean
public "hasParts"(): boolean
public "hasTools"(): boolean
public "hasUtilities"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "mapColor"(): $MapColor
public "metalTier"(): $Metal$Tier
public "toolTier"(): $Tier
public static "valueOf"(string0: string): $Metal$Default
public static "values"(): $Metal$Default[]
get "color"(): integer
get "fullBlock"(): $Supplier<$Block>
get "rarity"(): $Rarity
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/world/noise/$Metaballs3D" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export class $Metaballs3D {
constructor(randomSource0: $RandomSource$$Type, int1: integer, int2: integer, double3: double, double4: double, double5: double)

public "inside"(double0: double, double1: double, double2: double): boolean
public static "simple"(randomSource0: $RandomSource$$Type, int1: integer): $Metaballs3D
}
}

declare module "packages/net/dries007/tfc/util/$DataManager$Reference" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $DataManager$Reference<T> implements $Supplier<T> {
public "get"(): T
public "id"(): $ResourceLocation
}
}

declare module "packages/net/dries007/tfc/common/blocks/$GroundcoverBlockType" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Function } from "packages/java/util/function/$Function"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enum } from "packages/java/lang/$Enum"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $GroundcoverBlockType extends $Enum<$GroundcoverBlockType> {
static readonly "BONE": $GroundcoverBlockType
static readonly "CLAM": $GroundcoverBlockType
static readonly "DEAD_GRASS": $GroundcoverBlockType
static readonly "DRIFTWOOD": $GroundcoverBlockType
static readonly "FEATHER": $GroundcoverBlockType
static readonly "FLINT": $GroundcoverBlockType
static readonly "GUANO": $GroundcoverBlockType
static readonly "HUMUS": $GroundcoverBlockType
static readonly "MOLLUSK": $GroundcoverBlockType
static readonly "MUSSEL": $GroundcoverBlockType
static readonly "PINECONE": $GroundcoverBlockType
static readonly "PUMICE": $GroundcoverBlockType
static readonly "ROTTEN_FLESH": $GroundcoverBlockType
static readonly "SALT_LICK": $GroundcoverBlockType
static readonly "SEAWEED": $GroundcoverBlockType
static readonly "SEA_URCHIN": $GroundcoverBlockType
static readonly "STICK": $GroundcoverBlockType

public "createBlockItem"(): $Function<$Block, $BlockItem>
public "getShape"(): $VoxelShape
public "getVanillaItem"(): $Supplier<$Item>
public static "valueOf"(string0: string): $GroundcoverBlockType
public static "values"(): $GroundcoverBlockType[]
get "shape"(): $VoxelShape
get "vanillaItem"(): $Supplier<$Item>
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$AreaFactory" {
import { $Area } from "packages/net/dries007/tfc/world/layer/framework/$Area"
import { $Supplier } from "packages/java/util/function/$Supplier"

export interface $AreaFactory extends $Supplier<$Area> {
"get"(): $Area
}

export namespace $AreaFactory {
const probejs$$marker: never
}
export abstract class $AreaFactory$$Static implements $AreaFactory {
}
}

declare module "packages/net/dries007/tfc/world/river/$RiverBlendType" {
import { $Enum } from "packages/java/lang/$Enum"
import { $RiverNoiseSampler } from "packages/net/dries007/tfc/world/river/$RiverNoiseSampler"

export class $RiverBlendType extends $Enum<$RiverBlendType> {
static readonly "ALL": $RiverBlendType[]
static readonly "CANYON": $RiverBlendType
static readonly "CAVE": $RiverBlendType
static readonly "NONE": $RiverBlendType
static readonly "SIZE": integer
static readonly "TALL_CANYON": $RiverBlendType
static readonly "WIDE": $RiverBlendType

public "createNoiseSampler"(long0: long): $RiverNoiseSampler
public static "valueOf"(string0: string): $RiverBlendType
public static "values"(): $RiverBlendType[]
}
}

declare module "packages/net/dries007/tfc/world/noise/$Metaballs2D" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export class $Metaballs2D {
constructor(randomSource0: $RandomSource$$Type, int1: integer, int2: integer, double3: double, double4: double, double5: double)

public "inside"(double0: double, double1: double): boolean
public "sample"(double0: double, double1: double): double
public static "simple"(randomSource0: $RandomSource$$Type, int1: integer): $Metaballs2D
}
}

declare module "packages/net/dries007/tfc/common/capabilities/glass/$GlassOperation" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Enum } from "packages/java/lang/$Enum"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Map } from "packages/java/util/$Map"

export class $GlassOperation extends $Enum<$GlassOperation> {
static readonly "AMETHYST": $GlassOperation
static readonly "BASIN_POUR": $GlassOperation
static readonly "BLOW": $GlassOperation
static readonly "COPPER": $GlassOperation
static readonly "FLATTEN": $GlassOperation
static readonly "GOLD": $GlassOperation
static readonly "GRAPHITE": $GlassOperation
static readonly "IRON": $GlassOperation
static readonly "LAPIS_LAZULI": $GlassOperation
static readonly "NICKEL": $GlassOperation
static readonly "PINCH": $GlassOperation
static readonly "POWDERS": $Supplier<$Map<$Item, $GlassOperation>>
static readonly "PYRITE": $GlassOperation
static readonly "ROLL": $GlassOperation
static readonly "RUBY": $GlassOperation
static readonly "SAPPHIRE": $GlassOperation
static readonly "SAW": $GlassOperation
static readonly "SILVER": $GlassOperation
static readonly "SODA_ASH": $GlassOperation
static readonly "STRETCH": $GlassOperation
static readonly "SULFUR": $GlassOperation
static readonly "TABLE_POUR": $GlassOperation
static readonly "TIN": $GlassOperation
static "VALUES": $GlassOperation[]

public static "byIndex"(int0: integer): $GlassOperation
public static "get"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): $GlassOperation
public static "getByPowder"(itemStack0: $ItemStack$$Type): $GlassOperation
public "getSound"(): $SoundEvent
public "hasRequiredTemperature"(itemStack0: $ItemStack$$Type): boolean
public static "valueOf"(string0: string): $GlassOperation
public static "values"(): $GlassOperation[]
get "sound"(): $SoundEvent
}
}

declare module "packages/net/dries007/tfc/util/events/$StartFireEvent$FireStrength" {
import { $Enum } from "packages/java/lang/$Enum"

export class $StartFireEvent$FireStrength extends $Enum<$StartFireEvent$FireStrength> {
static readonly "STRONG": $StartFireEvent$FireStrength
static readonly "WEAK": $StartFireEvent$FireStrength

public static "valueOf"(string0: string): $StartFireEvent$FireStrength
public static "values"(): $StartFireEvent$FireStrength[]
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collection } from "packages/java/util/$Collection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $IngredientType$Factory$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Factory"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IngredientType, $IngredientType$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType"
import { $IngredientType$Entry, $IngredientType$Entry$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Entry"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export class $BlockIngredient extends $Record implements $IngredientType<$Block> {
constructor(entries: $List$$Type<$IngredientType$Entry$$Type<$Block$$Type>>)

public "all"(): $Stream<$Block>
public "and"(predicate0: $Predicate$$Type<$Block$$Type>): $Predicate<$Block>
public "blocks"(): $Collection<$Block>
public "entries"(): $List<$IngredientType$Entry<$Block>>
public static "fromJson"(jsonElement0: $JsonElement$$Type): $BlockIngredient
public static "fromJson"<T, I extends $IngredientType<T>>(jsonElement0: $JsonElement$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $BlockIngredient
public static "fromNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$Block>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(o: any): $InputReplacement
public "or"(predicate0: $Predicate$$Type<$Block$$Type>): $Predicate<$Block>
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "test"(blockState0: $BlockState$$Type): boolean
public "test"(block0: $Block$$Type): boolean
public "toJson"(): $JsonElement
public static "toJson"<T, I extends $IngredientType<T>>(i0: I, factory1: $IngredientType$Factory$$Type<T, I>): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "toNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, i1: I, factory2: $IngredientType$Factory$$Type<T, I>): void
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
}
}

declare module "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties$Gender" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TFCAnimalProperties$Gender extends $Enum<$TFCAnimalProperties$Gender> {
static readonly "FEMALE": $TFCAnimalProperties$Gender
static readonly "MALE": $TFCAnimalProperties$Gender

public "toBool"(): boolean
public static "valueOf"(boolean0: boolean): $TFCAnimalProperties$Gender
public static "valueOf"(string0: string): $TFCAnimalProperties$Gender
public static "values"(): $TFCAnimalProperties$Gender[]
}
}

declare module "packages/net/dries007/tfc/util/$ItemDefinition" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ItemDefinitionAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$ItemDefinitionAccessor"
import { $Collection } from "packages/java/util/$Collection"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemDefinition implements $ItemDefinitionAccessor {
public "getId"(): $ResourceLocation
public "getValidItems"(): $Collection<$Item>
public "matches"(itemStack0: $ItemStack$$Type): boolean
get "id"(): $ResourceLocation
get "validItems"(): $Collection<$Item>
}
}

declare module "packages/net/dries007/tfc/common/capabilities/food/$Nutrient" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $Nutrient extends $Enum<$Nutrient> implements $StringRepresentable {
static readonly "DAIRY": $Nutrient
static readonly "FRUIT": $Nutrient
static readonly "GRAIN": $Nutrient
static readonly "PROTEIN": $Nutrient
static readonly "TOTAL": integer
static readonly "VALUES": $Nutrient[]
static readonly "VEGETABLES": $Nutrient

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getColor"(): $ChatFormatting
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(int0: integer): $Nutrient
public static "valueOf"(string0: string): $Nutrient
public static "values"(): $Nutrient[]
get "color"(): $ChatFormatting
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/util/$Support" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $SupportAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$SupportAccessor"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Set } from "packages/java/util/$Set"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Support$SupportRange } from "packages/net/dries007/tfc/util/$Support$SupportRange"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"

export class $Support implements $SupportAccessor {
static readonly "CACHE": $IndirectHashCollection<$Block, $Support>
static readonly "MANAGER": $DataManager<$Support>

constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)

public "canSupport"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
public static "findUnsupportedPositions"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): $Set<$BlockPos>
public static "get"(blockState0: $BlockState$$Type): $Support
public "getId"(): $ResourceLocation
public static "getMaximumSupportedAreaAround"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Iterable<$BlockPos>
public static "getSupportCheckRange"(): $Support$SupportRange
public "getSupportDown"(): integer
public "getSupportHorizontal"(): integer
public "getSupportUp"(): integer
public "getSupportedArea"(blockPos0: $BlockPos$$Type): $Iterable<$BlockPos>
public static "isSupported"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "matches"(blockState0: $BlockState$$Type): boolean
public static "updateMaximumSupportRange"(): void
get "id"(): $ResourceLocation
get "supportDown"(): integer
get "supportHorizontal"(): integer
get "supportUp"(): integer
}
}

declare module "packages/net/dries007/tfc/util/$LampFuel" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FluidIngredient } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient"
import { $BlockIngredient } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"

export class $LampFuel {
static readonly "CACHE": $IndirectHashCollection<$Fluid, $LampFuel>
static readonly "MANAGER": $DataManager<$LampFuel>

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "get"(fluid0: $Fluid$$Type, blockState1: $BlockState$$Type): $LampFuel
public "getBurnRate"(): integer
public "getFluidIngredient"(): $FluidIngredient
public "getId"(): $ResourceLocation
public "getValidLamps"(): $BlockIngredient
get "burnRate"(): integer
get "fluidIngredient"(): $FluidIngredient
get "id"(): $ResourceLocation
get "validLamps"(): $BlockIngredient
}
}

declare module "packages/net/dries007/tfc/util/calendar/$Season" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Season extends $Enum<$Season> implements $StringRepresentable {
static readonly "FALL": $Season
static readonly "SPRING": $Season
static readonly "SUMMER": $Season
static readonly "WINTER": $Season

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "next"(): $Season
public "previous"(): $Season
public static "valueOf"(string0: string): $Season
public static "values"(): $Season[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackModifier$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ItemStackModifier, $ItemStackModifier$$Type } from "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackModifier"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ItemStackModifier$Serializer<T extends $ItemStackModifier> {
"fromJson"(jsonObject0: $JsonObject$$Type): T
"fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"toNetwork"(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}

export namespace $ItemStackModifier$Serializer {
const probejs$$marker: never
}
export abstract class $ItemStackModifier$Serializer$$Static<T extends $ItemStackModifier> implements $ItemStackModifier$Serializer<T> {
}
}

declare module "packages/net/dries007/tfc/network/$ChunkWatchPacket" {
import { $Record } from "packages/java/lang/$Record"
import { $ForestType, $ForestType$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"
import { $LerpFloatLayer, $LerpFloatLayer$$Type } from "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer"

export class $ChunkWatchPacket extends $Record {
constructor(chunkX: integer, chunkZ: integer, rainfallLayer: $LerpFloatLayer$$Type, temperatureLayer: $LerpFloatLayer$$Type, forestType: $ForestType$$Type, forestWeirdness: float, forestDensity: float)

public "chunkX"(): integer
public "chunkZ"(): integer
public "forestDensity"(): float
public "forestType"(): $ForestType
public "forestWeirdness"(): float
public "rainfallLayer"(): $LerpFloatLayer
public "temperatureLayer"(): $LerpFloatLayer
}
}

declare module "packages/net/dries007/tfc/world/region/$RiverEdge" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $River$Vertex } from "packages/net/dries007/tfc/world/river/$River$Vertex"
import { $MidpointFractal } from "packages/net/dries007/tfc/world/river/$MidpointFractal"
import { $River$Edge$$Type } from "packages/net/dries007/tfc/world/river/$River$Edge"

export class $RiverEdge {
static readonly "MAX_WIDTH": integer
static readonly "MIN_WIDTH": integer

constructor(edge0: $River$Edge$$Type, randomSource1: $RandomSource$$Type)

public "drain"(): $River$Vertex
public "drainEdge"(): $RiverEdge
public "fractal"(): $MidpointFractal
public "linkToDrain"(riverEdge0: $RiverEdge$$Type): void
public "source"(): $River$Vertex
public "sourceEdge"(): boolean
public "widthSq"(double0: double, double1: double): double
public "widthSq"(): integer
get "width"(): integer
set "width"(value: integer)
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$RotationType3D" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$RotationType3D extends $Enum<$FastNoiseLite$RotationType3D> {
static readonly "ImproveXYPlanes": $FastNoiseLite$RotationType3D
static readonly "ImproveXZPlanes": $FastNoiseLite$RotationType3D
static readonly "None": $FastNoiseLite$RotationType3D

public static "valueOf"(string0: string): $FastNoiseLite$RotationType3D
public static "values"(): $FastNoiseLite$RotationType3D[]
}
}

declare module "packages/net/dries007/tfc/common/capabilities/food/$FoodTrait" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $FoodTrait {
constructor(supplier0: $Supplier$$Type<float>, string1: string)
constructor(float0: float, string1: string)

public "addTooltipInfo"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$Component$$Type>): void
public "getDecayModifier"(): float
public static "getId"(foodTrait0: $FoodTrait$$Type): $ResourceLocation
public static "getTrait"(resourceLocation0: $ResourceLocation$$Type): $FoodTrait
public static "getTraitOrThrow"(resourceLocation0: $ResourceLocation$$Type): $FoodTrait
public static "register"(resourceLocation0: $ResourceLocation$$Type, foodTrait1: $FoodTrait$$Type): $FoodTrait
get "decayModifier"(): float
}
}

declare module "packages/net/dries007/tfc/world/biome/$BiomeExtension" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $BiomeBlendType } from "packages/net/dries007/tfc/world/biome/$BiomeBlendType"
import { $PlacedFeature } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $SurfaceBuilder } from "packages/net/dries007/tfc/world/surface/builder/$SurfaceBuilder"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $BiomeNoiseSampler, $BiomeNoiseSampler$$Type } from "packages/net/dries007/tfc/world/$BiomeNoiseSampler"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $RiverBlendType } from "packages/net/dries007/tfc/world/river/$RiverBlendType"

export class $BiomeExtension {
public "biomeBlendType"(): $BiomeBlendType
public "createNoiseSampler"(long0: long): $BiomeNoiseSampler
public "createSurfaceBuilder"(long0: long): $SurfaceBuilder
public "getAquiferSurfaceHeight"(biomeNoiseSampler0: $BiomeNoiseSampler$$Type, int1: integer, int2: integer): double
public "getFlattenedFeatureSet"(biome0: $Biome$$Type): $Set<$PlacedFeature>
public "getFlattenedFeatures"(biome0: $Biome$$Type): $List<$HolderSet<$PlacedFeature>>
public "getVolcanoBasaltHeight"(): integer
public "getVolcanoRarity"(): integer
public "hasRivers"(): boolean
public "hasSandyRiverShores"(): boolean
public "isSalty"(): boolean
public "isShore"(): boolean
public "isSpawnable"(): boolean
public "isVolcanic"(): boolean
public "key"(): $ResourceKey<$Biome>
public "riverBlendType"(): $RiverBlendType
get "volcanoBasaltHeight"(): integer
get "volcanoRarity"(): integer
get "salty"(): boolean
get "shore"(): boolean
get "spawnable"(): boolean
get "volcanic"(): boolean
}
}

declare module "packages/net/dries007/tfc/util/$Fertilizer" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $ItemDefinition } from "packages/net/dries007/tfc/util/$ItemDefinition"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FarmlandBlockEntity$NutrientType$$Type } from "packages/net/dries007/tfc/common/blockentities/$FarmlandBlockEntity$NutrientType"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"

export class $Fertilizer extends $ItemDefinition {
static readonly "CACHE": $IndirectHashCollection<$Item, $Fertilizer>
static readonly "MANAGER": $DataManager<$Fertilizer>

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "get"(itemStack0: $ItemStack$$Type): $Fertilizer
public "getNitrogen"(): float
public "getNutrient"(nutrientType0: $FarmlandBlockEntity$NutrientType$$Type): float
public "getPhosphorus"(): float
public "getPotassium"(): float
get "nitrogen"(): float
get "phosphorus"(): float
get "potassium"(): float
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Factory" {
import { $DefaultedRegistry, $DefaultedRegistry$$Type } from "packages/net/minecraft/core/$DefaultedRegistry"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IngredientType } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType"
import { $IngredientType$Entry, $IngredientType$Entry$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Entry"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export class $IngredientType$Factory<T, I extends $IngredientType<T>> extends $Record {
constructor(key: string, registry: $DefaultedRegistry$$Type<T>, tagEntry: $Function$$Type<$TagKey$$Type<T>, $IngredientType$Entry<T>>, factory: $Function$$Type<$List$$Type<$IngredientType$Entry$$Type<T>>, I>)

public "factory"(): $Function<$List<$IngredientType$Entry<T>>, I>
public "key"(): string
public "registry"(): $DefaultedRegistry<T>
public "tagEntry"(): $Function<$TagKey<T>, $IngredientType$Entry<T>>
}
}

declare module "packages/net/dries007/tfc/util/calendar/$Month$Style" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Month$Style extends $Enum<$Month$Style> {
static readonly "LONG_MONTH": $Month$Style
static readonly "SEASON": $Month$Style

public static "valueOf"(string0: string): $Month$Style
public static "values"(): $Month$Style[]
}
}

declare module "packages/net/dries007/tfc/common/entities/$BrainBreeder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BrainBreeder {
"isMale"(): boolean
"setMated"(long0: long): void
get "male"(): boolean
set "mated"(value: long)
}

export namespace $BrainBreeder {
const probejs$$marker: never
}
export abstract class $BrainBreeder$$Static implements $BrainBreeder {
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$ConcurrentArea" {
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $AreaFactory$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"

export class $ConcurrentArea<T> {
constructor(areaFactory0: $AreaFactory$$Type, intFunction1: $IntFunction$$Type<T>)

public "get"(int0: integer, int1: integer): T
}
}

declare module "packages/net/dries007/tfc/world/noise/$Cellular2D$Cell" {
import { $Record } from "packages/java/lang/$Record"

export class $Cellular2D$Cell extends $Record {
constructor(x: double, y: double, cx: integer, cy: integer, f1: double, f2: double, noise: double)

public "cx"(): integer
public "cy"(): integer
public "f1"(): double
public "f2"(): double
public "noise"(): double
public "x"(): double
public "y"(): double
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ChunkData$Status" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ChunkData$Status extends $Enum<$ChunkData$Status> {
static readonly "CLIENT": $ChunkData$Status
static readonly "EMPTY": $ChunkData$Status
static readonly "FULL": $ChunkData$Status
static readonly "INVALID": $ChunkData$Status
static readonly "PARTIAL": $ChunkData$Status

public static "valueOf"(string0: string): $ChunkData$Status
public static "valueOf"(int0: integer): $ChunkData$Status
public static "values"(): $ChunkData$Status[]
}
}

declare module "packages/net/dries007/tfc/common/capabilities/food/$IFood" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $INetworkFood } from "packages/net/dries007/tfc/common/capabilities/food/$INetworkFood"
import { $FoodTrait, $FoodTrait$$Type } from "packages/net/dries007/tfc/common/capabilities/food/$FoodTrait"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FoodData } from "packages/net/dries007/tfc/common/capabilities/food/$FoodData"

export interface $IFood extends $INetworkFood {
"addTooltipInfo"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$Component$$Type>): void
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCreationDate"(): long
"getData"(): $FoodData
"getDecayDateModifier"(): float
"getRottenDate"(): long
"getTraits"(): $List<$FoodTrait>
"hasTrait"(foodTrait0: $FoodTrait$$Type): boolean
"isRotten"(): boolean
"isTransientNonDecaying"(): boolean
"serializeNBT"(): $CompoundTag
"setCreationDate"(long0: long): void
"setNonDecaying"(): void
get "creationDate"(): long
get "data"(): $FoodData
get "decayDateModifier"(): float
get "rottenDate"(): long
get "traits"(): $List<$FoodTrait>
get "rotten"(): boolean
get "transientNonDecaying"(): boolean
set "creationDate"(value: long)
}

export namespace $IFood {
const probejs$$marker: never
}
export abstract class $IFood$$Static implements $IFood {
}
}

declare module "packages/net/dries007/tfc/world/noise/$Cellular3D" {
import { $Cellular3D$Cell } from "packages/net/dries007/tfc/world/noise/$Cellular3D$Cell"
import { $OpenSimplex3D$$Type } from "packages/net/dries007/tfc/world/noise/$OpenSimplex3D"
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise3D } from "packages/net/dries007/tfc/world/noise/$Noise3D"

export class $Cellular3D implements $Noise3D {
constructor(long0: long)

public "cell"(double0: double, double1: double, double2: double): $Cellular3D$Cell
/** Dissolves this `Noise3D` to a `Noise2D` by using the provided `Noise2D` as the y-value */
public "dissolve"(yNoise: $Noise2D$$Type): $Noise2D
public "noise"(double0: double, double1: double, double2: double): double
public "octaves"(int0: integer): $Noise3D
/** Rotate this noise around the x-axis */
public "rotateX"(angle: double): $Noise3D
/** Rotate this noise around the y-axis */
public "rotateY"(angle: double): $Noise3D
/** Rotate this noise around the z-axis */
public "rotateZ"(angle: double): $Noise3D
public "scaled"(double0: double, double1: double, double2: double, double3: double): $Noise3D
public "scaled"(double0: double, double1: double): $Noise3D
/** Swap the x and y coordinates */
public "transposeXY"(): $Noise3D
/** Swap the x and z coordinates */
public "transposeXZ"(): $Noise3D
/** Swap the y and z coordinates */
public "transposeYZ"(): $Noise3D
public "warped"(openSimplex3D0: $OpenSimplex3D$$Type): $Noise3D
}
}

declare module "packages/net/dries007/tfc/world/noise/$Cellular2D" {
import { $Cellular2D$Cell, $Cellular2D$Cell$$Type } from "packages/net/dries007/tfc/world/noise/$Cellular2D$Cell"
import { $OpenSimplex2D$$Type } from "packages/net/dries007/tfc/world/noise/$OpenSimplex2D"
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $DoubleUnaryOperator$$Type } from "packages/java/util/function/$DoubleUnaryOperator"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"

export class $Cellular2D implements $Noise2D {
static readonly "JITTER": double

constructor(long0: long)

public "abs"(): $Noise2D
public "add"(noise2D0: $Noise2D$$Type): $Noise2D
public "affine"(double0: double, double1: double): $Noise2D
public "cell"(double0: double, double1: double): $Cellular2D$Cell
public "clamped"(double0: double, double1: double): $Noise2D
public "lazyProduct"(noise2D0: $Noise2D$$Type): $Noise2D
public "map"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $Noise2D
public "noise"(double0: double, double1: double): double
public "octaves"(int0: integer): $Noise2D
public "ridged"(): $Noise2D
/** Rotates the coordinate grid by the given angle (in degrees) */
public "rotate"(angle: double): $Noise2D
public "scaled"(double0: double, double1: double, double2: double, double3: double): $Noise2D
public "scaled"(double0: double, double1: double): $Noise2D
public "terraces"(int0: integer): $Noise2D
public "then"(toDoubleFunction0: $ToDoubleFunction$$Type<$Cellular2D$Cell$$Type>): $Noise2D
/** Swaps the x and z coordinate */
public "transpose"(): $Noise2D
public "warped"(openSimplex2D0: $OpenSimplex2D$$Type): $Noise2D
}
}

declare module "packages/net/dries007/tfc/world/river/$River$Edge" {
import { $Record } from "packages/java/lang/$Record"
import { $River$Vertex, $River$Vertex$$Type } from "packages/net/dries007/tfc/world/river/$River$Vertex"
import { $MidpointFractal } from "packages/net/dries007/tfc/world/river/$MidpointFractal"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export class $River$Edge extends $Record {
constructor(source: $River$Vertex$$Type, drain: $River$Vertex$$Type)

public "drain"(): $River$Vertex
public "fractal"(randomSource0: $RandomSource$$Type, int1: integer): $MidpointFractal
public "source"(): $River$Vertex
}
}

declare module "packages/net/dries007/tfc/common/blocks/rock/$RockCategory" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Tier } from "packages/net/minecraft/world/item/$Tier"

export class $RockCategory extends $Enum<$RockCategory> implements $StringRepresentable {
static readonly "IGNEOUS_EXTRUSIVE": $RockCategory
static readonly "IGNEOUS_INTRUSIVE": $RockCategory
static readonly "METAMORPHIC": $RockCategory
static readonly "SEDIMENTARY": $RockCategory

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "hardness"(float0: float): float
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "tier"(): $Tier
public static "valueOf"(string0: string): $RockCategory
public static "values"(): $RockCategory[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/common/fluids/$FluidProperty" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FluidProperty$FluidKey, $FluidProperty$FluidKey$$Type } from "packages/net/dries007/tfc/common/fluids/$FluidProperty$FluidKey"
import { $Collection } from "packages/java/util/$Collection"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $FluidProperty extends $Property<$FluidProperty$FluidKey> {
public "canContain"(fluid0: $Fluid$$Type): boolean
public static "create"(string0: string, stream1: $Stream$$Type<any>): $FluidProperty
public "getName"(fluidKey0: $FluidProperty$FluidKey$$Type): string
public "getPossibleValues"(): $Collection<$FluidProperty$FluidKey>
public "getValue"(string0: string): $Optional<$FluidProperty$FluidKey>
public "keyFor"(fluid0: $Fluid$$Type): $FluidProperty$FluidKey
public "keyForOrEmpty"(fluid0: $Fluid$$Type): $FluidProperty$FluidKey
get "possibleValues"(): $Collection<$FluidProperty$FluidKey>
}
}

declare module "packages/net/dries007/tfc/common/blocks/$ExtendedBlock" {
import { $ExtendedProperties, $ExtendedProperties$$Type } from "packages/net/dries007/tfc/common/blocks/$ExtendedProperties"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
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
import { $IForgeBlockExtension } from "packages/net/dries007/tfc/common/blocks/$IForgeBlockExtension"
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

export class $ExtendedBlock extends $Block implements $IForgeBlockExtension {
constructor(extendedProperties0: $ExtendedProperties$$Type)

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
public "getExtendedProperties"(): $ExtendedProperties
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
get "extendedProperties"(): $ExtendedProperties
get "mod"(): string
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/dries007/tfc/world/$BiomeNoiseSampler" {
import { $ChunkGeneratorExtension$$Type } from "packages/net/dries007/tfc/world/$ChunkGeneratorExtension"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"

export interface $BiomeNoiseSampler {
"height"(): double
"noise"(int0: integer): double
"prepare"(chunkGeneratorExtension0: $ChunkGeneratorExtension$$Type, chunkAccess1: $ChunkAccess$$Type): void
"setColumn"(int0: integer, int1: integer): void
}

export namespace $BiomeNoiseSampler {
const AIR_THRESHOLD: double
const SOLID: double
function fromHeightNoise(noise2D0: $Noise2D$$Type): $BiomeNoiseSampler
}
export abstract class $BiomeNoiseSampler$$Static implements $BiomeNoiseSampler {
static readonly "AIR_THRESHOLD": double
static readonly "SOLID": double

static "fromHeightNoise"(noise2D0: $Noise2D$$Type): $BiomeNoiseSampler
}
}

declare module "packages/net/dries007/tfc/world/settings/$RockSettings" {
import { $Record } from "packages/java/lang/$Record"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RockSettings extends $Record {
static readonly "CODEC": $Codec<$RockSettings>

constructor(raw: $Block$$Type, hardened: $Block$$Type, gravel: $Block$$Type, cobble: $Block$$Type, sand: $Block$$Type, sandstone: $Block$$Type, spike: $Optional$$Type<$Block$$Type>, loose: $Optional$$Type<$Block$$Type>, mossyLoose: $Optional$$Type<$Block$$Type>)

public "cobble"(): $Block
public "gravel"(): $Block
public "hardened"(): $Block
public "isRawOrHardened"(blockState0: $BlockState$$Type): boolean
public "loose"(): $Optional<$Block>
public "mossyLoose"(): $Optional<$Block>
public "raw"(): $Block
public static "register"(resourceLocation0: $ResourceLocation$$Type, rockSettings1: $RockSettings$$Type): $RockSettings
public static "registerDefaultRocks"(): void
public "sand"(): $Block
public "sandstone"(): $Block
public "spike"(): $Optional<$Block>
}
}

declare module "packages/net/dries007/tfc/util/$Metal$ItemType" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Enum } from "packages/java/lang/$Enum"
import { $Item$Properties } from "packages/net/minecraft/world/item/$Item$Properties"
import { $Metal$Default$$Type } from "packages/net/dries007/tfc/util/$Metal$Default"
import { $RegistryMetal$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryMetal"

export class $Metal$ItemType extends $Enum<$Metal$ItemType> {
static readonly "AXE": $Metal$ItemType
static readonly "AXE_HEAD": $Metal$ItemType
static readonly "BOOTS": $Metal$ItemType
static readonly "CHESTPLATE": $Metal$ItemType
static readonly "CHISEL": $Metal$ItemType
static readonly "CHISEL_HEAD": $Metal$ItemType
static readonly "DOUBLE_INGOT": $Metal$ItemType
static readonly "DOUBLE_SHEET": $Metal$ItemType
static readonly "FISHING_ROD": $Metal$ItemType
static readonly "FISH_HOOK": $Metal$ItemType
static readonly "GREAVES": $Metal$ItemType
static readonly "HAMMER": $Metal$ItemType
static readonly "HAMMER_HEAD": $Metal$ItemType
static readonly "HELMET": $Metal$ItemType
static readonly "HOE": $Metal$ItemType
static readonly "HOE_HEAD": $Metal$ItemType
static readonly "HORSE_ARMOR": $Metal$ItemType
static readonly "INGOT": $Metal$ItemType
static readonly "JAVELIN": $Metal$ItemType
static readonly "JAVELIN_HEAD": $Metal$ItemType
static readonly "KNIFE": $Metal$ItemType
static readonly "KNIFE_BLADE": $Metal$ItemType
static readonly "MACE": $Metal$ItemType
static readonly "MACE_HEAD": $Metal$ItemType
static readonly "PICKAXE": $Metal$ItemType
static readonly "PICKAXE_HEAD": $Metal$ItemType
static readonly "PROPICK": $Metal$ItemType
static readonly "PROPICK_HEAD": $Metal$ItemType
static readonly "ROD": $Metal$ItemType
static readonly "SAW": $Metal$ItemType
static readonly "SAW_BLADE": $Metal$ItemType
static readonly "SCYTHE": $Metal$ItemType
static readonly "SCYTHE_BLADE": $Metal$ItemType
static readonly "SHEARS": $Metal$ItemType
static readonly "SHEET": $Metal$ItemType
static readonly "SHIELD": $Metal$ItemType
static readonly "SHOVEL": $Metal$ItemType
static readonly "SHOVEL_HEAD": $Metal$ItemType
static readonly "SWORD": $Metal$ItemType
static readonly "SWORD_BLADE": $Metal$ItemType
static readonly "TUYERE": $Metal$ItemType
static readonly "UNFINISHED_BOOTS": $Metal$ItemType
static readonly "UNFINISHED_CHESTPLATE": $Metal$ItemType
static readonly "UNFINISHED_GREAVES": $Metal$ItemType
static readonly "UNFINISHED_HELMET": $Metal$ItemType
static readonly "UNFINISHED_LAMP": $Metal$ItemType

public "create"(registryMetal0: $RegistryMetal$$Type): $Item
public "has"(default0: $Metal$Default$$Type): boolean
public "hasMold"(): boolean
public static "properties"(registryMetal0: $RegistryMetal$$Type): $Item$Properties
public static "valueOf"(string0: string): $Metal$ItemType
public static "values"(): $Metal$ItemType[]
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$AreaSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AreaSource {
"apply"(int0: integer, int1: integer): integer
}

export namespace $AreaSource {
const probejs$$marker: never
}
export abstract class $AreaSource$$Static implements $AreaSource {
}
}

declare module "packages/net/dries007/tfc/common/blocks/$ExtendedProperties" {
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $BlockBehaviour$OffsetType$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $NoteBlockInstrument$$Type } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $BlockEntityType } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction$$Type } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $BlockBehaviour$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $BlockBehaviour$StatePredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockEntityTicker$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import { $FeatureFlag$$Type } from "packages/net/minecraft/world/flag/$FeatureFlag"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"
import { $BlockBehaviour$StateArgumentPredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate"

export class $ExtendedProperties {
public "adjacentPathType"(blockPathTypes0: $BlockPathTypes$$Type): $ExtendedProperties
public "air"(): $ExtendedProperties
public "blockEntity"<T extends $BlockEntity>(): $BlockEntityType<T>
public "blockEntity"(supplier0: $Supplier$$Type<$BlockEntityType<any>>): $ExtendedProperties
public "clientTicks"<T extends $BlockEntity>(blockEntityTicker0: $BlockEntityTicker$$Type<T>): $ExtendedProperties
public "defaultInstrument"(): $ExtendedProperties
public "destroyTime"(float0: float): $ExtendedProperties
public "dropsLike"(supplier0: $Supplier$$Type<$Block>): $ExtendedProperties
public "dropsLike"(block0: $Block$$Type): $ExtendedProperties
public "dynamicShape"(): $ExtendedProperties
public "emissiveRendering"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $ExtendedProperties
public "enchantPower"(float0: float): $ExtendedProperties
public "enchantPower"(toDoubleFunction0: $ToDoubleFunction$$Type<$BlockState$$Type>): $ExtendedProperties
public "explosionResistance"(float0: float): $ExtendedProperties
public "flammable"(int0: integer, int1: integer): $ExtendedProperties
public "flammableLikeLeaves"(): $ExtendedProperties
public "flammableLikeLogs"(): $ExtendedProperties
public "flammableLikePlanks"(): $ExtendedProperties
public "flammableLikeWool"(): $ExtendedProperties
public "forceSolidOff"(): $ExtendedProperties
public "forceSolidOn"(): $ExtendedProperties
public "friction"(float0: float): $ExtendedProperties
public "hasBlockEntity"(): boolean
public "hasPostProcess"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $ExtendedProperties
public "ignitedByLava"(): $ExtendedProperties
public "instabreak"(): $ExtendedProperties
public "instrument"(noteBlockInstrument0: $NoteBlockInstrument$$Type): $ExtendedProperties
public "isRedstoneConductor"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $ExtendedProperties
public "isSuffocating"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $ExtendedProperties
public "isValidSpawn"(stateArgumentPredicate0: $BlockBehaviour$StateArgumentPredicate$$Type<$EntityType$$Type<any>>): $ExtendedProperties
public "isViewBlocking"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $ExtendedProperties
public "jumpFactor"(float0: float): $ExtendedProperties
public "lightLevel"(toIntFunction0: $ToIntFunction$$Type<$BlockState$$Type>): $ExtendedProperties
public "liquid"(): $ExtendedProperties
public "mapColor"(dyeColor0: $DyeColor$$Type): $ExtendedProperties
public "mapColor"(mapColor0: $MapColor$$Type): $ExtendedProperties
public "mapColor"(function0: $Function$$Type<$BlockState$$Type, $MapColor>): $ExtendedProperties
public "noCollission"(): $ExtendedProperties
public "noLootTable"(): $ExtendedProperties
public "noOcclusion"(): $ExtendedProperties
public "noParticlesOnBreak"(): $ExtendedProperties
public static "of"(properties0: $BlockBehaviour$Properties$$Type): $ExtendedProperties
public static "of"(function0: $Function$$Type<$BlockState$$Type, $MapColor>): $ExtendedProperties
public static "of"(mapColor0: $MapColor$$Type): $ExtendedProperties
public static "of"(blockBehaviour0: $BlockBehaviour$$Type): $ExtendedProperties
public static "of"(): $ExtendedProperties
public static "of"(dyeColor0: $DyeColor$$Type): $ExtendedProperties
public "offsetType"(offsetType0: $BlockBehaviour$OffsetType$$Type): $ExtendedProperties
public "pathType"(blockPathTypes0: $BlockPathTypes$$Type): $ExtendedProperties
public "properties"(): $BlockBehaviour$Properties
public "pushReaction"(pushReaction0: $PushReaction$$Type): $ExtendedProperties
public "randomTicks"(): $ExtendedProperties
public "replaceable"(): $ExtendedProperties
public "requiredFeatures"(...featureFlag0s: $FeatureFlag$$Type[]): $ExtendedProperties
public "requiresCorrectToolForDrops"(): $ExtendedProperties
public "serverTicks"<T extends $BlockEntity>(blockEntityTicker0: $BlockEntityTicker$$Type<T>): $ExtendedProperties
public "sound"(soundType0: $SoundType$$Type): $ExtendedProperties
public "speedFactor"(float0: float): $ExtendedProperties
public "strength"(float0: float, float1: float): $ExtendedProperties
public "strength"(float0: float): $ExtendedProperties
public "ticks"<T extends $BlockEntity>(blockEntityTicker0: $BlockEntityTicker$$Type<T>, blockEntityTicker1: $BlockEntityTicker$$Type<T>): $ExtendedProperties
public "ticks"<T extends $BlockEntity>(blockEntityTicker0: $BlockEntityTicker$$Type<T>): $ExtendedProperties
}
}

declare module "packages/net/dries007/tfc/world/noise/$Cellular3D$Cell" {
import { $Record } from "packages/java/lang/$Record"

export class $Cellular3D$Cell extends $Record {
constructor(x: double, y: double, z: double, f1: double, f2: double, noise: double)

public "f1"(): double
public "f2"(): double
public "noise"(): double
public "x"(): double
public "y"(): double
public "z"(): double
}
}

declare module "packages/net/dries007/tfc/world/noise/$Noise3D" {
import { $OpenSimplex3D$$Type } from "packages/net/dries007/tfc/world/noise/$OpenSimplex3D"
import { $Noise3DMixin } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$Noise3DMixin"
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise3DExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise3DExtension"

export interface $Noise3D extends $Noise3DMixin, $Noise3DExtension {
/** Dissolves this `Noise3D` to a `Noise2D` by using the provided `Noise2D` as the y-value */
"dissolve"(yNoise: $Noise2D$$Type): $Noise2D
"noise"(double0: double, double1: double, double2: double): double
"octaves"(int0: integer): $Noise3D
/** Rotate this noise around the x-axis */
"rotateX"(angle: double): $Noise3D
/** Rotate this noise around the y-axis */
"rotateY"(angle: double): $Noise3D
/** Rotate this noise around the z-axis */
"rotateZ"(angle: double): $Noise3D
"scaled"(double0: double, double1: double, double2: double, double3: double): $Noise3D
"scaled"(double0: double, double1: double): $Noise3D
"spread"(double0: double): $Noise3D
/** Swap the x and y coordinates */
"transposeXY"(): $Noise3D
/** Swap the x and z coordinates */
"transposeXZ"(): $Noise3D
/** Swap the y and z coordinates */
"transposeYZ"(): $Noise3D
"warped"(openSimplex3D0: $OpenSimplex3D$$Type): $Noise3D
}

export namespace $Noise3D {
const probejs$$marker: never
}
export abstract class $Noise3D$$Static implements $Noise3D {
}
}

declare module "packages/net/dries007/tfc/world/noise/$Noise2D" {
import { $OpenSimplex2D$$Type } from "packages/net/dries007/tfc/world/noise/$OpenSimplex2D"
import { $DoubleUnaryOperator$$Type } from "packages/java/util/function/$DoubleUnaryOperator"
import { $Noise2DExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise2DExtension"
import { $Noise2DMixin } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$Noise2DMixin"

export interface $Noise2D extends $Noise2DExtension, $Noise2DMixin {
"abs"(): $Noise2D
"add"(noise2D0: $Noise2D$$Type): $Noise2D
"affine"(double0: double, double1: double): $Noise2D
"clamped"(double0: double, double1: double): $Noise2D
"lazyProduct"(noise2D0: $Noise2D$$Type): $Noise2D
"map"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $Noise2D
"noise"(double0: double, double1: double): double
"octaves"(int0: integer): $Noise2D
"ridged"(): $Noise2D
/** Rotates the coordinate grid by the given angle (in degrees) */
"rotate"(angle: double): $Noise2D
"scaled"(double0: double, double1: double, double2: double, double3: double): $Noise2D
"scaled"(double0: double, double1: double): $Noise2D
"spread"(double0: double): $Noise2D
"terraces"(int0: integer): $Noise2D
/** Swaps the x and z coordinate */
"transpose"(): $Noise2D
"warped"(openSimplex2D0: $OpenSimplex2D$$Type): $Noise2D
}

export namespace $Noise2D {
const probejs$$marker: never
}
export abstract class $Noise2D$$Static implements $Noise2D {
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$Area" {
import { $AreaSource$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaSource"

export class $Area {
constructor(areaSource0: $AreaSource$$Type, int1: integer)

public "get"(int0: integer, int1: integer): integer
}
}

declare module "packages/net/dries007/tfc/common/blocks/rock/$LooseRockBlock" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $FluidProperty } from "packages/net/dries007/tfc/common/fluids/$FluidProperty"
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
import { $IFluidLoggable } from "packages/net/dries007/tfc/common/fluids/$IFluidLoggable"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $GroundcoverBlock } from "packages/net/dries007/tfc/common/blocks/$GroundcoverBlock"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $LooseRockBlock extends $GroundcoverBlock implements $IFluidLoggable {
static readonly "COUNT": $IntegerProperty

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
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFluidLoggedState"(blockState0: $BlockState$$Type): $FluidState
public "getFluidProperty"(): $FluidProperty
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
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
get "fluidProperty"(): $FluidProperty
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/dries007/tfc/world/settings/$RockLayerSettings" {
import { $Collection } from "packages/java/util/$Collection"
import { $RockLayerSettings$Sampler } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings$Sampler"
import { $RockLayerSettingsAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$RockLayerSettingsAccessor"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RockLayerSettings implements $RockLayerSettingsAccessor {
static readonly "CODEC": $Codec<$RockLayerSettings>

public "getHardened"(block0: $Block$$Type): $Block
public "getRock"(block0: $Block$$Type): $RockSettings
public "getRocks"(): $Collection<$RockSettings>
public "sampleAtLayer"(int0: integer, int1: integer): $RockSettings
public "sampler"(int0: integer): $RockLayerSettings$Sampler
get "rocks"(): $Collection<$RockSettings>
}
}

declare module "packages/net/dries007/tfc/util/events/$SelectClimateModelEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ClimateModel, $ClimateModel$$Type } from "packages/net/dries007/tfc/util/climate/$ClimateModel"

export class $SelectClimateModelEvent extends $Event {
constructor(serverLevel0: $ServerLevel$$Type)
constructor()

public "getModel"(): $ClimateModel
public "level"(): $ServerLevel
public "setModel"(climateModel0: $ClimateModel$$Type): void
get "model"(): $ClimateModel
set "model"(value: $ClimateModel$$Type)
}
}

declare module "packages/net/dries007/tfc/util/events/$LoggingEvent" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $LoggingEvent extends $Event {
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, itemStack3: $ItemStack$$Type)
constructor()

public "getAxe"(): $ItemStack
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "axe"(): $ItemStack
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/dries007/tfc/common/capabilities/heat/$INetworkHeat" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $INetworkHeat extends $INBTSerializable<$CompoundTag> {
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"serializeNBT"(): $CompoundTag
}

export namespace $INetworkHeat {
const probejs$$marker: never
}
export abstract class $INetworkHeat$$Static implements $INetworkHeat {
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$RockData" {
import { $ChunkDataGenerator$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkDataGenerator"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $RockDataAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$RockDataAccessor"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"

export class $RockData implements $RockDataAccessor {
constructor(chunkDataGenerator0: $ChunkDataGenerator$$Type)

public "getRock"(int0: integer, int1: integer, int2: integer): $RockSettings
public "getRock"(blockPos0: $BlockPos$$Type): $RockSettings
public "getSurfaceHeight"(): integer[]
public "getSurfaceRock"(int0: integer, int1: integer): $RockSettings
public "setSurfaceHeight"(int0s: integer[]): void
public "useCache"(chunkPos0: $ChunkPos$$Type): void
get "surfaceHeight"(): integer[]
set "surfaceHeight"(value: integer[])
}
}

declare module "packages/net/dries007/tfc/util/climate/$ClimateModelType" {
import { $Record } from "packages/java/lang/$Record"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ClimateModel } from "packages/net/dries007/tfc/util/climate/$ClimateModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClimateModelType extends $Record {
constructor(factory: $Supplier$$Type<$ClimateModel>, id: $ResourceLocation$$Type)

public "create"(): $ClimateModel
public "factory"(): $Supplier<$ClimateModel>
public "id"(): $ResourceLocation
}
}

declare module "packages/net/dries007/tfc/common/blocks/$GroundcoverBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $IFluidLoggable } from "packages/net/dries007/tfc/common/fluids/$IFluidLoggable"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $ExtendedProperties$$Type } from "packages/net/dries007/tfc/common/blocks/$ExtendedProperties"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $FluidProperty } from "packages/net/dries007/tfc/common/fluids/$FluidProperty"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ExtendedBlock } from "packages/net/dries007/tfc/common/blocks/$ExtendedBlock"
import { $GroundcoverBlockType$$Type } from "packages/net/dries007/tfc/common/blocks/$GroundcoverBlockType"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"

export class $GroundcoverBlock extends $ExtendedBlock implements $IFluidLoggable {
static readonly "FLAT": $VoxelShape
static readonly "FLUID": $FluidProperty
static readonly "MEDIUM": $VoxelShape
static readonly "PIXEL_HIGH": $VoxelShape
static readonly "SMALL": $VoxelShape
static readonly "TWIG": $VoxelShape

constructor(extendedProperties0: $ExtendedProperties$$Type, voxelShape1: $VoxelShape$$Type, supplier2: $Supplier$$Type<$Item>)
constructor(groundcoverBlockType0: $GroundcoverBlockType$$Type)

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
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFluidLoggedState"(blockState0: $BlockState$$Type): $FluidState
public "getFluidProperty"(): $FluidProperty
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public static "looseOre"(properties0: $BlockBehaviour$Properties$$Type): $GroundcoverBlock
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public static "twig"(extendedProperties0: $ExtendedProperties$$Type): $GroundcoverBlock
get "blockStates"(): $List<$BlockState>
get "fluidProperty"(): $FluidProperty
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/dries007/tfc/world/surface/builder/$SurfaceBuilder" {
import { $SurfaceBuilderContext$$Type } from "packages/net/dries007/tfc/world/surface/$SurfaceBuilderContext"

export interface $SurfaceBuilder {
"buildSurface"(surfaceBuilderContext0: $SurfaceBuilderContext$$Type, int1: integer, int2: integer): void
}

export namespace $SurfaceBuilder {
const probejs$$marker: never
}
export abstract class $SurfaceBuilder$$Static implements $SurfaceBuilder {
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ChunkDataProvider" {
import { $ChunkDataGenerator, $ChunkDataGenerator$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkDataGenerator"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $ChunkData } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ProtoChunk$$Type } from "packages/net/minecraft/world/level/chunk/$ProtoChunk"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ChunkDataProvider {
constructor(chunkDataGenerator0: $ChunkDataGenerator$$Type)

public "create"(chunkPos0: $ChunkPos$$Type): $ChunkData
public "createAndGeneratePartial"(chunkPos0: $ChunkPos$$Type): $ChunkData
public "generator"(): $ChunkDataGenerator
public "get"(worldGenLevel0: $WorldGenLevel$$Type, blockPos1: $BlockPos$$Type): $ChunkData
public "get"(worldGenLevel0: $WorldGenLevel$$Type, chunkPos1: $ChunkPos$$Type): $ChunkData
/** @deprecated */
public "get"(chunkPos0: $ChunkPos$$Type): $ChunkData
public "get"(chunkAccess0: $ChunkAccess$$Type): $ChunkData
public static "get"(worldGenLevel0: $WorldGenLevel$$Type): $ChunkDataProvider
public static "get"(chunkGenerator0: $ChunkGenerator$$Type): $ChunkDataProvider
public "loadPartial"(protoChunk0: $ProtoChunk$$Type, compoundTag1: $CompoundTag$$Type): void
public "promotePartial"(protoChunk0: $ProtoChunk$$Type, levelChunk1: $LevelChunk$$Type): void
public "savePartial"(protoChunk0: $ProtoChunk$$Type): $CompoundTag
}
}

declare module "packages/net/dries007/tfc/common/items/$ProspectResult" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $ProspectResult extends $Enum<$ProspectResult> {
static readonly "FOUND": $ProspectResult
static readonly "LARGE": $ProspectResult
static readonly "MEDIUM": $ProspectResult
static readonly "NOTHING": $ProspectResult
static readonly "SMALL": $ProspectResult
static readonly "TRACES": $ProspectResult
static readonly "VERY_LARGE": $ProspectResult

public "getText"(block0: $Block$$Type): $Component
public static "valueOf"(int0: integer): $ProspectResult
public static "valueOf"(string0: string): $ProspectResult
public static "values"(): $ProspectResult[]
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastNoiseLite$Vector3 {
constructor(double0: double, double1: double, double2: double)

get "x"(): double
set "x"(value: double)
get "y"(): double
set "y"(value: double)
get "z"(): double
set "z"(value: double)
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$Vector2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastNoiseLite$Vector2 {
constructor(double0: double, double1: double)

get "x"(): double
set "x"(value: double)
get "y"(): double
set "y"(value: double)
}
}

declare module "packages/net/dries007/tfc/common/capabilities/heat/$IHeat" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $INetworkHeat } from "packages/net/dries007/tfc/common/capabilities/heat/$INetworkHeat"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IHeat extends $INetworkHeat {
"addTemperatureFromSourceWithHeatCapacity"(float0: float, float1: float): void
"addTooltipInfo"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$Component$$Type>): void
"canWeld"(): boolean
"canWork"(): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getHeatCapacity"(): float
"getTemperature"(): float
"getWeldingTemperature"(): float
"getWorkingTemperature"(): float
"serializeNBT"(): $CompoundTag
"setTemperature"(float0: float): void
"setTemperatureIfWarmer"(float0: float): void
"setTemperatureIfWarmer"(iHeat0: $IHeat$$Type): void
get "heatCapacity"(): float
get "temperature"(): float
get "weldingTemperature"(): float
get "workingTemperature"(): float
set "temperature"(value: float)
set "temperatureIfWarmer"(value: float)
set "temperatureIfWarmer"(value: $IHeat$$Type)
}

export namespace $IHeat {
const probejs$$marker: never
}
export abstract class $IHeat$$Static implements $IHeat {
}
}

declare module "packages/net/dries007/tfc/common/fluids/$FluidProperty$FluidKey" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"

export class $FluidProperty$FluidKey implements $Comparable<$FluidProperty$FluidKey> {
public "compareTo"(fluidKey0: $FluidProperty$FluidKey$$Type): integer
public "getFluid"(): $Fluid
public "is"(fluidKey0: $FluidProperty$FluidKey$$Type): boolean
get "fluid"(): $Fluid
}
}

declare module "packages/net/dries007/tfc/util/events/$CollapseEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CollapseEvent extends $Event {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, list2: $List$$Type<$BlockPos$$Type>, double3: double, boolean4: boolean)

public "getCenterPos"(): $BlockPos
public "getLevel"(): $Level
public "getNextPositions"(): $List<$BlockPos>
public "getRadiusSquared"(): double
public "isFake"(): boolean
get "centerPos"(): $BlockPos
get "level"(): $Level
get "nextPositions"(): $List<$BlockPos>
get "radiusSquared"(): double
get "fake"(): boolean
}
}

declare module "packages/net/dries007/tfc/world/river/$RiverNoiseSampler" {
import { $RiverInfo$$Type } from "packages/net/dries007/tfc/world/river/$RiverInfo"

export interface $RiverNoiseSampler {
"noise"(int0: integer, double1: double): double
"setColumnAndSampleHeight"(riverInfo0: $RiverInfo$$Type, int1: integer, int2: integer, double3: double, double4: double): double
}

export namespace $RiverNoiseSampler {
const NONE: $RiverNoiseSampler
}
export abstract class $RiverNoiseSampler$$Static implements $RiverNoiseSampler {
static readonly "NONE": $RiverNoiseSampler

}
}

declare module "packages/net/dries007/tfc/util/$BlockDefinition" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $BlockIngredient } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BlockDefinition {
constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "getId"(): $ResourceLocation
public "getIngredient"(): $BlockIngredient
public "matches"(blockState0: $BlockState$$Type): boolean
get "id"(): $ResourceLocation
get "ingredient"(): $BlockIngredient
}
}

declare module "packages/net/dries007/tfc/util/registry/$RegistryRock" {
import { $RockCategory } from "packages/net/dries007/tfc/common/blocks/rock/$RockCategory"
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Rock$BlockType$$Type } from "packages/net/dries007/tfc/common/blocks/rock/$Rock$BlockType"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $WallBlock } from "packages/net/minecraft/world/level/block/$WallBlock"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $RockDisplayCategory } from "packages/net/dries007/tfc/common/blocks/rock/$RockDisplayCategory"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $StairBlock } from "packages/net/minecraft/world/level/block/$StairBlock"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $SlabBlock } from "packages/net/minecraft/world/level/block/$SlabBlock"

export interface $RegistryRock extends $StringRepresentable {
"category"(): $RockCategory
"color"(): $MapColor
"displayCategory"(): $RockDisplayCategory
"getAnvil"(): $Supplier<$Block>
"getBlock"(blockType0: $Rock$BlockType$$Type): $Supplier<$Block>
"getSerializedName"(): string
"getSlab"(blockType0: $Rock$BlockType$$Type): $Supplier<$SlabBlock>
"getStair"(blockType0: $Rock$BlockType$$Type): $Supplier<$StairBlock>
"getWall"(blockType0: $Rock$BlockType$$Type): $Supplier<$WallBlock>
get "anvil"(): $Supplier<$Block>
get "serializedName"(): string
}

export namespace $RegistryRock {
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $RegistryRock$$Static implements $RegistryRock {
static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "packages/net/dries007/tfc/world/river/$MidpointFractal" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Flow } from "packages/net/dries007/tfc/world/river/$Flow"

export class $MidpointFractal {
readonly "segments": double[]

constructor(randomSource0: $RandomSource$$Type, int1: integer, double2: double, double3: double, double4: double, double5: double)

public "calculateFlow"(double0: double, double1: double): $Flow
public "intersect"(double0: double, double1: double, double2: double): boolean
public "intersectDistance"(double0: double, double1: double): double
public "maybeIntersect"(double0: double, double1: double, double2: double): boolean
}
}

declare module "packages/net/dries007/tfc/common/capabilities/size/$Weight" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Weight extends $Enum<$Weight> {
static readonly "HEAVY": $Weight
static readonly "LIGHT": $Weight
static readonly "MEDIUM": $Weight
static readonly "VERY_HEAVY": $Weight
static readonly "VERY_LIGHT": $Weight
readonly "name": string
readonly "stackSize": integer

public "isSmallerThan"(weight0: $Weight$$Type): boolean
public static "valueOf"(int0: integer): $Weight
public static "valueOf"(string0: string): $Weight
public static "values"(): $Weight[]
}
}

declare module "packages/net/dries007/tfc/util/$Support$SupportRange" {
import { $Record } from "packages/java/lang/$Record"

export class $Support$SupportRange extends $Record {
constructor(up: integer, down: integer, horizontal: integer)

public "down"(): integer
public "horizontal"(): integer
public "up"(): integer
}
}

declare module "packages/net/dries007/tfc/util/climate/$ClimateModel" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $ChunkData$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Vec2 } from "packages/net/minecraft/world/phys/$Vec2"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $ClimateModelType } from "packages/net/dries007/tfc/util/climate/$ClimateModelType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $ClimateModel {
"getAverageTemperature"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): float
"getFogginess"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, long2: long): float
"getRainfall"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): float
"getTemperature"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, long2: long, int3: integer): float
"getWaterFogginess"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, long2: long): float
"getWindVector"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, long2: long): $Vec2
"onChunkLoad"(worldGenLevel0: $WorldGenLevel$$Type, chunkAccess1: $ChunkAccess$$Type, chunkData2: $ChunkData$$Type): void
"onReceiveOnClient"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"onSyncToClient"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"onWorldLoad"(serverLevel0: $ServerLevel$$Type): void
"type"(): $ClimateModelType
}

export namespace $ClimateModel {
const MAXIMUM_RAINFALL: float
const MINIMUM_RAINFALL: float
}
export abstract class $ClimateModel$$Static implements $ClimateModel {
static readonly "MAXIMUM_RAINFALL": float
static readonly "MINIMUM_RAINFALL": float

}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$MergeLayer" {
import { $AreaContext$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaContext"
import { $Area$$Type } from "packages/net/dries007/tfc/world/layer/framework/$Area"
import { $AreaFactory, $AreaFactory$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"

export interface $MergeLayer {
"apply"(long0: long, areaFactory1: $AreaFactory$$Type, areaFactory2: $AreaFactory$$Type): $AreaFactory
"apply"(areaContext0: $AreaContext$$Type, area1: $Area$$Type, area2: $Area$$Type, int3: integer, int4: integer): integer
}

export namespace $MergeLayer {
const probejs$$marker: never
}
export abstract class $MergeLayer$$Static implements $MergeLayer {
}
}

declare module "packages/net/dries007/tfc/util/$Metal$Tier" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $Metal$Tier extends $Enum<$Metal$Tier> {
static readonly "TIER_0": $Metal$Tier
static readonly "TIER_I": $Metal$Tier
static readonly "TIER_II": $Metal$Tier
static readonly "TIER_III": $Metal$Tier
static readonly "TIER_IV": $Metal$Tier
static readonly "TIER_V": $Metal$Tier
static readonly "TIER_VI": $Metal$Tier

public "getDisplayName"(): $Component
public "next"(): $Metal$Tier
public "previous"(): $Metal$Tier
public static "valueOf"(int0: integer): $Metal$Tier
public static "valueOf"(string0: string): $Metal$Tier
public static "values"(): $Metal$Tier[]
get "displayName"(): $Component
}
}

declare module "packages/net/dries007/tfc/util/events/$ProspectedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ProspectResult, $ProspectResult$$Type } from "packages/net/dries007/tfc/common/items/$ProspectResult"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $ProspectedEvent extends $Event {
constructor()
constructor(player0: $Player$$Type, prospectResult1: $ProspectResult$$Type, block2: $Block$$Type)

public "getBlock"(): $Block
public "getPlayer"(): $Player
public "getType"(): $ProspectResult
get "block"(): $Block
get "player"(): $Player
get "type"(): $ProspectResult
}
}

declare module "packages/net/dries007/tfc/common/blockentities/$FarmlandBlockEntity$NutrientType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FarmlandBlockEntity$NutrientType extends $Enum<$FarmlandBlockEntity$NutrientType> {
static readonly "NITROGEN": $FarmlandBlockEntity$NutrientType
static readonly "PHOSPHOROUS": $FarmlandBlockEntity$NutrientType
static readonly "POTASSIUM": $FarmlandBlockEntity$NutrientType
static readonly "VALUES": $FarmlandBlockEntity$NutrientType[]

public static "valueOf"(string0: string): $FarmlandBlockEntity$NutrientType
public static "values"(): $FarmlandBlockEntity$NutrientType[]
}
}

declare module "packages/net/dries007/tfc/common/capabilities/food/$INetworkFood" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"

export interface $INetworkFood extends $INBTSerializable<$CompoundTag> {
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"serializeNBT"(): $CompoundTag
}

export namespace $INetworkFood {
const probejs$$marker: never
}
export abstract class $INetworkFood$$Static implements $INetworkFood {
}
}

declare module "packages/net/dries007/tfc/world/$ChunkGeneratorExtension" {
import { $ChunkDataProvider } from "packages/net/dries007/tfc/world/chunkdata/$ChunkDataProvider"
import { $ChunkGenerator } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $RockLayerSettings } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"
import { $ChunkGeneratorStructureState$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Settings, $Settings$$Type } from "packages/net/dries007/tfc/world/settings/$Settings"
import { $Aquifer } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $ChunkGeneratorExtension {
"applySettings"(unaryOperator0: $UnaryOperator$$Type<$Settings$$Type>): void
"chunkDataProvider"(): $ChunkDataProvider
"findSpawnBiome"(randomSource0: $RandomSource$$Type): $BlockPos
"getOrCreateAquifer"(chunkAccess0: $ChunkAccess$$Type): $Aquifer
"initRandomState"(chunkMap0: $ChunkMap$$Type, serverLevel1: $ServerLevel$$Type): void
"rockLayerSettings"(): $RockLayerSettings
"self"(): $ChunkGenerator
"settings"(): $Settings
}

export namespace $ChunkGeneratorExtension {
function getFromStructureState(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): $ChunkGeneratorExtension
}
export abstract class $ChunkGeneratorExtension$$Static implements $ChunkGeneratorExtension {
static "getFromStructureState"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): $ChunkGeneratorExtension
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ChunkDataGenerator" {
import { $ChunkRockDataCache$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkRockDataCache"
import { $ChunkData$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $List$$Type } from "packages/java/util/$List"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"
import { $LerpFloatLayer } from "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer"

export interface $ChunkDataGenerator {
"displayDebugInfo"(list0: $List$$Type<string>, blockPos1: $BlockPos$$Type, int2: integer): void
"generate"(chunkData0: $ChunkData$$Type): void
"generateRock"(int0: integer, int1: integer, int2: integer, int3: integer, chunkRockDataCache4: $ChunkRockDataCache$$Type): $RockSettings
}

export namespace $ChunkDataGenerator {
function sampleInterpolatedGridLayer(float0: float, float1: float, float2: float, float3: float, double4: double, double5: double): $LerpFloatLayer
}
export abstract class $ChunkDataGenerator$$Static implements $ChunkDataGenerator {
/** @deprecated */
static "sampleInterpolatedGridLayer"(float0: float, float1: float, float2: float, float3: float, double4: double, double5: double): $LerpFloatLayer
}
}

declare module "packages/net/dries007/tfc/config/animals/$AnimalConfig" {
import { $ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$$Type } from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import { $ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$$Type } from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import { $ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$$Type } from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import { $Record } from "packages/java/lang/$Record"
import { $ConfigBuilder$$Type } from "packages/net/dries007/tfc/config/$ConfigBuilder"

export class $AnimalConfig extends $Record {
constructor(familiarityCap: $ForgeConfigSpec$DoubleValue$$Type, adulthoodDays: $ForgeConfigSpec$IntValue$$Type, uses: $ForgeConfigSpec$IntValue$$Type, eatsRottenFood: $ForgeConfigSpec$BooleanValue$$Type)

public "adulthoodDays"(): $ForgeConfigSpec$IntValue
public static "build"(configBuilder0: $ConfigBuilder$$Type, string1: string, double2: double, int3: integer, int4: integer, boolean5: boolean): $AnimalConfig
public "eatsRottenFood"(): $ForgeConfigSpec$BooleanValue
public "familiarityCap"(): $ForgeConfigSpec$DoubleValue
public "uses"(): $ForgeConfigSpec$IntValue
}
}

declare module "packages/net/dries007/tfc/world/feature/tree/$TFCTreeGrower" {
import { $ConfiguredFeature, $ConfiguredFeature$$Type } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractTreeGrower } from "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower"

export class $TFCTreeGrower extends $AbstractTreeGrower {
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type)

public "getNormalFeature"(registry0: $Registry$$Type<$ConfiguredFeature$$Type<any, any>>): $ConfiguredFeature<any, any>
public "getOldGrowthFeature"(registry0: $Registry$$Type<$ConfiguredFeature$$Type<any, any>>): $ConfiguredFeature<any, any>
}
}

declare module "packages/net/dries007/tfc/util/calendar/$ICalendar" {
import { $Month, $Month$$Type } from "packages/net/dries007/tfc/util/calendar/$Month"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ICalendar {
"getCalendarDayOfMonth"(): integer
"getCalendarDayOfYear"(): $MutableComponent
"getCalendarDayTime"(): long
"getCalendarDaysInMonth"(): integer
"getCalendarFractionOfMonth"(): float
"getCalendarFractionOfYear"(): float
"getCalendarMonthOfYear"(): $Month
"getCalendarTicks"(): long
"getCalendarTicksInMonth"(): long
"getCalendarTicksInYear"(): long
"getCalendarTimeAndDate"(): $MutableComponent
"getTicks"(): long
"getTimeDelta"(long0: long): $MutableComponent
"getTotalCalendarDays"(): long
"getTotalCalendarHours"(): long
"getTotalCalendarMonths"(): long
"getTotalCalendarYears"(): long
"getTotalDays"(): long
"getTotalHours"(): long
"getTotalMonths"(): long
"getTotalYears"(): long
"ticksToCalendarTicks"(long0: long): long
get "calendarDayOfMonth"(): integer
get "calendarDayOfYear"(): $MutableComponent
get "calendarDayTime"(): long
get "calendarDaysInMonth"(): integer
get "calendarFractionOfMonth"(): float
get "calendarFractionOfYear"(): float
get "calendarMonthOfYear"(): $Month
get "calendarTicks"(): long
get "calendarTicksInMonth"(): long
get "calendarTicksInYear"(): long
get "calendarTimeAndDate"(): $MutableComponent
get "ticks"(): long
get "totalCalendarDays"(): long
get "totalCalendarHours"(): long
get "totalCalendarMonths"(): long
get "totalCalendarYears"(): long
get "totalDays"(): long
get "totalHours"(): long
get "totalMonths"(): long
get "totalYears"(): long
}

export namespace $ICalendar {
const HOURS_IN_DAY: integer
const MONTHS_IN_YEAR: integer
const TICKS_IN_DAY: integer
const TICKS_IN_HOUR: integer
const TICKS_IN_MINUTE: float
function getCalendarTicksInMonth(int0: integer): long
function getCalendarTicksInYear(int0: integer): long
function getDayOfMonth(long0: long, long1: long): integer
function getFractionOfMonth(long0: long, long1: long): float
function getFractionOfYear(long0: long, long1: long): float
function getHourOfDay(long0: long): integer
function getMinuteOfHour(long0: long): integer
function getMonthOfYear(long0: long, long1: long): $Month
function getTimeAndDate(long0: long, long1: long): $MutableComponent
function getTimeAndDate(int0: integer, int1: integer, month2: $Month$$Type, int3: integer, long4: long): $MutableComponent
function getTimeDelta(long0: long, int1: integer): $MutableComponent
function getTotalDays(long0: long): long
function getTotalHours(long0: long): long
function getTotalMinutes(long0: long): float
function getTotalMonths(long0: long, long1: long): long
function getTotalYears(long0: long, long1: long): long
}
export abstract class $ICalendar$$Static implements $ICalendar {
static readonly "HOURS_IN_DAY": integer
static readonly "MONTHS_IN_YEAR": integer
static readonly "TICKS_IN_DAY": integer
static readonly "TICKS_IN_HOUR": integer
static readonly "TICKS_IN_MINUTE": float

static "getCalendarTicksInMonth"(int0: integer): long
static "getCalendarTicksInYear"(int0: integer): long
static "getDayOfMonth"(long0: long, long1: long): integer
static "getFractionOfMonth"(long0: long, long1: long): float
static "getFractionOfYear"(long0: long, long1: long): float
static "getHourOfDay"(long0: long): integer
static "getMinuteOfHour"(long0: long): integer
static "getMonthOfYear"(long0: long, long1: long): $Month
static "getTimeAndDate"(long0: long, long1: long): $MutableComponent
static "getTimeAndDate"(int0: integer, int1: integer, month2: $Month$$Type, int3: integer, long4: long): $MutableComponent
static "getTimeDelta"(long0: long, int1: integer): $MutableComponent
static "getTotalDays"(long0: long): long
static "getTotalHours"(long0: long): long
static "getTotalMinutes"(long0: long): float
static "getTotalMonths"(long0: long, long1: long): long
static "getTotalYears"(long0: long, long1: long): long
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$AdjacentTransformLayer" {
import { $AreaContext$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaContext"
import { $Area$$Type } from "packages/net/dries007/tfc/world/layer/framework/$Area"
import { $AreaFactory, $AreaFactory$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"
import { $TransformLayer } from "packages/net/dries007/tfc/world/layer/framework/$TransformLayer"

export interface $AdjacentTransformLayer extends $TransformLayer {
"apply"(areaContext0: $AreaContext$$Type, area1: $Area$$Type, int2: integer, int3: integer): integer
"apply"(areaContext0: $AreaContext$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): integer
"apply"(long0: long, areaFactory1: $AreaFactory$$Type): $AreaFactory
}

export namespace $AdjacentTransformLayer {
const probejs$$marker: never
}
export abstract class $AdjacentTransformLayer$$Static implements $AdjacentTransformLayer {
}
}

declare module "packages/net/dries007/tfc/common/fluids/$IFluidLoggable" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $LiquidBlockContainer } from "packages/net/minecraft/world/level/block/$LiquidBlockContainer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $SimpleWaterloggedBlock } from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $FluidProperty } from "packages/net/dries007/tfc/common/fluids/$FluidProperty"
import { $BucketPickup } from "packages/net/minecraft/world/level/block/$BucketPickup"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IFluidLoggable extends $SimpleWaterloggedBlock, $LiquidBlockContainer, $BucketPickup {
"canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
"getFluidLoggedState"(blockState0: $BlockState$$Type): $FluidState
"getFluidProperty"(): $FluidProperty
"getPickupSound"(): $Optional<$SoundEvent>
"getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
"pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
"placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
get "fluidProperty"(): $FluidProperty
get "pickupSound"(): $Optional<$SoundEvent>
}

export namespace $IFluidLoggable {
const probejs$$marker: never
}
export abstract class $IFluidLoggable$$Static implements $IFluidLoggable {
}
}

declare module "packages/net/dries007/tfc/common/blocks/wood/$Wood$BlockType" {
import { $Function } from "packages/java/util/function/$Function"
import { $BlockItem } from "packages/net/minecraft/world/item/$BlockItem"
import { $Enum } from "packages/java/lang/$Enum"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $RegistryWood$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryWood"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

export class $Wood$BlockType extends $Enum<$Wood$BlockType> {
static readonly "AXLE": $Wood$BlockType
static readonly "BARREL": $Wood$BlockType
static readonly "BLADED_AXLE": $Wood$BlockType
static readonly "BOOKSHELF": $Wood$BlockType
static readonly "BUTTON": $Wood$BlockType
static readonly "CHEST": $Wood$BlockType
static readonly "CLUTCH": $Wood$BlockType
static readonly "DOOR": $Wood$BlockType
static readonly "ENCASED_AXLE": $Wood$BlockType
static readonly "FALLEN_LEAVES": $Wood$BlockType
static readonly "FENCE": $Wood$BlockType
static readonly "FENCE_GATE": $Wood$BlockType
static readonly "GEAR_BOX": $Wood$BlockType
static readonly "HORIZONTAL_SUPPORT": $Wood$BlockType
static readonly "JAR_SHELF": $Wood$BlockType
static readonly "LEAVES": $Wood$BlockType
static readonly "LECTERN": $Wood$BlockType
static readonly "LOG": $Wood$BlockType
static readonly "LOG_FENCE": $Wood$BlockType
static readonly "LOOM": $Wood$BlockType
static readonly "PLANKS": $Wood$BlockType
static readonly "POTTED_SAPLING": $Wood$BlockType
static readonly "PRESSURE_PLATE": $Wood$BlockType
static readonly "SAPLING": $Wood$BlockType
static readonly "SCRIBING_TABLE": $Wood$BlockType
static readonly "SEWING_TABLE": $Wood$BlockType
static readonly "SIGN": $Wood$BlockType
static readonly "SLAB": $Wood$BlockType
static readonly "SLUICE": $Wood$BlockType
static readonly "STAIRS": $Wood$BlockType
static readonly "STRIPPED_LOG": $Wood$BlockType
static readonly "STRIPPED_WOOD": $Wood$BlockType
static readonly "TOOL_RACK": $Wood$BlockType
static readonly "TRAPDOOR": $Wood$BlockType
static readonly "TRAPPED_CHEST": $Wood$BlockType
static readonly "TWIG": $Wood$BlockType
static readonly "VERTICAL_SUPPORT": $Wood$BlockType
static readonly "WALL_SIGN": $Wood$BlockType
static readonly "WATER_WHEEL": $Wood$BlockType
static readonly "WINDMILL": $Wood$BlockType
static readonly "WOOD": $Wood$BlockType
static readonly "WORKBENCH": $Wood$BlockType

public "create"(registryWood0: $RegistryWood$$Type): $Supplier<$Block>
public "createBlockItem"(registryWood0: $RegistryWood$$Type, properties1: $Item$Properties$$Type): $Function<$Block, $BlockItem>
public "nameFor"(registryWood0: $RegistryWood$$Type): string
public "needsItem"(): boolean
public static "valueOf"(string0: string): $Wood$BlockType
public static "values"(): $Wood$BlockType[]
}
}

declare module "packages/net/dries007/tfc/util/$Metal" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Metal {
static readonly "MANAGER": $DataManager<$Metal>
static readonly "UNKNOWN_ID": $ResourceLocation
static readonly "WROUGHT_IRON_ID": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type)

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "get"(fluid0: $Fluid$$Type): $Metal
public "getDisplayName"(): $MutableComponent
public "getDoubleIngotIngredient"(): $Ingredient
public "getFluid"(): $Fluid
public static "getFromIngot"(itemStack0: $ItemStack$$Type): $Metal
public static "getFromSheet"(itemStack0: $ItemStack$$Type): $Metal
public "getHeatCapacity"(float0: float): float
public "getId"(): $ResourceLocation
public "getIngotIngredient"(): $Ingredient
public "getMeltTemperature"(): float
public "getSheetIngredient"(): $Ingredient
public "getSoftTextureId"(): $ResourceLocation
public "getSpecificHeatCapacity"(): float
public "getTextureId"(): $ResourceLocation
public "getTier"(): integer
public "getTranslationKey"(): string
public "isDoubleIngot"(itemStack0: $ItemStack$$Type): boolean
public "isIngot"(itemStack0: $ItemStack$$Type): boolean
public "isSheet"(itemStack0: $ItemStack$$Type): boolean
public static "unknown"(): $Metal
public static "updateMetalFluidMap"(): void
get "displayName"(): $MutableComponent
get "doubleIngotIngredient"(): $Ingredient
get "fluid"(): $Fluid
get "id"(): $ResourceLocation
get "ingotIngredient"(): $Ingredient
get "meltTemperature"(): float
get "sheetIngredient"(): $Ingredient
get "softTextureId"(): $ResourceLocation
get "specificHeatCapacity"(): float
get "textureId"(): $ResourceLocation
get "tier"(): integer
get "translationKey"(): string
}
}

declare module "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties$Age" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TFCAnimalProperties$Age extends $Enum<$TFCAnimalProperties$Age> {
static readonly "ADULT": $TFCAnimalProperties$Age
static readonly "CHILD": $TFCAnimalProperties$Age
static readonly "OLD": $TFCAnimalProperties$Age

public static "valueOf"(string0: string): $TFCAnimalProperties$Age
public static "valueOf"(int0: integer): $TFCAnimalProperties$Age
public static "values"(): $TFCAnimalProperties$Age[]
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ChunkRockDataCache" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $ChunkRockDataCache extends $Record {
constructor(chunkPos0: $ChunkPos$$Type)
constructor(pos: $ChunkPos$$Type, layerHeight: $List$$Type<float[]>, layerSkew: $List$$Type<float[]>)

public "addLayer"(float0s: float[], float1s: float[]): void
public "getLayerHeight"(int0: integer, int1: integer, int2: integer): float
public "getLayerSkewX"(int0: integer, int1: integer, int2: integer): float
public "getLayerSkewZ"(int0: integer, int1: integer, int2: integer): float
public "layerHeight"(): $List<float[]>
public "layerSkew"(): $List<float[]>
public "layers"(): integer
public "pos"(): $ChunkPos
}
}

declare module "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $GenderedRenderAnimal } from "packages/net/dries007/tfc/common/entities/$GenderedRenderAnimal"
import { $CommonAnimalData } from "packages/net/dries007/tfc/common/entities/livestock/$CommonAnimalData"
import { $MobSpawnType$$Type } from "packages/net/minecraft/world/entity/$MobSpawnType"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $TFCAnimalProperties$Age, $TFCAnimalProperties$Age$$Type } from "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties$Age"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $BrainBreeder } from "packages/net/dries007/tfc/common/entities/$BrainBreeder"
import { $TFCAnimalProperties$Gender, $TFCAnimalProperties$Gender$$Type } from "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties$Gender"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ServerLevelAccessor$$Type } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ICalendar } from "packages/net/dries007/tfc/util/calendar/$ICalendar"
import { $DifficultyInstance$$Type } from "packages/net/minecraft/world/$DifficultyInstance"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $AgeableMob, $AgeableMob$$Type } from "packages/net/minecraft/world/entity/$AgeableMob"
import { $AnimalConfig } from "packages/net/dries007/tfc/config/animals/$AnimalConfig"

export interface $TFCAnimalProperties extends $GenderedRenderAnimal, $BrainBreeder {
"addUses"(int0: integer): void
"animalConfig"(): $AnimalConfig
"animalData"(): $CommonAnimalData
"checkExtraBreedConditions"(tFCAnimalProperties0: $TFCAnimalProperties$$Type): boolean
"displayFemaleCharacteristics"(): boolean
"displayMaleCharacteristics"(): boolean
"eatFood"(itemStack0: $ItemStack$$Type, interactionHand1: $InteractionHand$$Type, player2: $Player$$Type): $InteractionResult
"eatingSound"(itemStack0: $ItemStack$$Type): $SoundEvent
"eatsRottenFood"(): boolean
"getAdultFamiliarityCap"(): float
"getAgeScale"(): float
"getAgeType"(): $TFCAnimalProperties$Age
"getBirthDay"(): long
"getCalendar"(): $ICalendar
"getDaysToAdulthood"(): integer
"getEntity"(): $LivingEntity
"getEntityTypeForBaby"(): $EntityType<any>
"getFamiliarity"(): float
"getFoodTag"(): $TagKey<$Item>
"getGender"(): $TFCAnimalProperties$Gender
"getGenderedTypeName"(): $Component
"getGeneticSize"(): integer
"getLastAge"(): $TFCAnimalProperties$Age
"getLastFamiliarityDecay"(): long
"getLastFed"(): long
"getMated"(): long
"getOldDay"(): long
"getProductReadyName"(): $MutableComponent
"getProductsCooldown"(): long
"getUses"(): integer
"getUsesToElderly"(): integer
"hasProduct"(): boolean
"initCommonAnimalData"(serverLevelAccessor0: $ServerLevelAccessor$$Type, difficultyInstance1: $DifficultyInstance$$Type, mobSpawnType2: $MobSpawnType$$Type): void
"isFertilized"(): boolean
"isHungry"(): boolean
"isMale"(): boolean
"isReadyForAnimalProduct"(): boolean
"isReadyToMate"(): boolean
"m_142606_"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $AgeableMob
"m_6071_"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
"m_6898_"(itemStack0: $ItemStack$$Type): boolean
"onFertilized"(tFCAnimalProperties0: $TFCAnimalProperties$$Type): void
"readCommonAnimalData"(compoundTag0: $CompoundTag$$Type): void
"registerCommonData"(): void
"saveCommonAnimalData"(compoundTag0: $CompoundTag$$Type): void
"setBabyTraits"(tFCAnimalProperties0: $TFCAnimalProperties$$Type): void
"setBirthDay"(long0: long): void
"setFamiliarity"(float0: float): void
"setFertilized"(boolean0: boolean): void
"setGender"(gender0: $TFCAnimalProperties$Gender$$Type): void
"setGeneticSize"(int0: integer): void
"setLastAge"(age0: $TFCAnimalProperties$Age$$Type): void
"setLastFamiliarityDecay"(long0: long): void
"setLastFed"(long0: long): void
"setMated"(long0: long): void
"setOldDay"(long0: long): void
"setProductsCooldown"(): void
"setUses"(int0: integer): void
"showExtraClickInfo"(player0: $Player$$Type): void
"tickAnimalData"(): void
get "adultFamiliarityCap"(): float
get "ageScale"(): float
get "ageType"(): $TFCAnimalProperties$Age
get "birthDay"(): long
get "calendar"(): $ICalendar
get "daysToAdulthood"(): integer
get "entity"(): $LivingEntity
get "entityTypeForBaby"(): $EntityType<any>
get "familiarity"(): float
get "foodTag"(): $TagKey<$Item>
get "gender"(): $TFCAnimalProperties$Gender
get "genderedTypeName"(): $Component
get "geneticSize"(): integer
get "lastAge"(): $TFCAnimalProperties$Age
get "lastFamiliarityDecay"(): long
get "lastFed"(): long
get "mated"(): long
get "oldDay"(): long
get "productReadyName"(): $MutableComponent
get "productsCooldown"(): long
get "uses"(): integer
get "usesToElderly"(): integer
get "fertilized"(): boolean
get "hungry"(): boolean
get "male"(): boolean
get "readyForAnimalProduct"(): boolean
get "readyToMate"(): boolean
set "babyTraits"(value: $TFCAnimalProperties$$Type)
set "birthDay"(value: long)
set "familiarity"(value: float)
set "fertilized"(value: boolean)
set "gender"(value: $TFCAnimalProperties$Gender$$Type)
set "geneticSize"(value: integer)
set "lastAge"(value: $TFCAnimalProperties$Age$$Type)
set "lastFamiliarityDecay"(value: long)
set "lastFed"(value: long)
set "mated"(value: long)
set "oldDay"(value: long)
set "uses"(value: integer)
}

export namespace $TFCAnimalProperties {
const AGE_SCALES: float[]
const MATING_COOLDOWN_DEFAULT_TICKS: long
const READY_TO_MATE_FAMILIARITY: float
}
export abstract class $TFCAnimalProperties$$Static implements $TFCAnimalProperties {
static readonly "AGE_SCALES": float[]
static readonly "MATING_COOLDOWN_DEFAULT_TICKS": long
static readonly "READY_TO_MATE_FAMILIARITY": float

}
}

declare module "packages/net/dries007/tfc/world/settings/$RockLayerSettings$Sampler" {
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"

export interface $RockLayerSettings$Sampler {
"next"(): $RockSettings
}

export namespace $RockLayerSettings$Sampler {
const probejs$$marker: never
}
export abstract class $RockLayerSettings$Sampler$$Static implements $RockLayerSettings$Sampler {
}
}

declare module "packages/net/dries007/tfc/util/events/$StartFireEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $StartFireEvent$FireStrength$$Type } from "packages/net/dries007/tfc/util/events/$StartFireEvent$FireStrength"

export class $StartFireEvent extends $Event {
constructor()

public "getItemStack"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public "getTargetedFace"(): $Direction
public "isStrong"(): boolean
public static "startFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, player4: $Player$$Type, itemStack5: $ItemStack$$Type): boolean
public static "startFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, player4: $Player$$Type, itemStack5: $ItemStack$$Type, fireStrength6: $StartFireEvent$FireStrength$$Type): boolean
get "itemStack"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "state"(): $BlockState
get "targetedFace"(): $Direction
get "strong"(): boolean
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ChunkData" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RockData } from "packages/net/dries007/tfc/world/chunkdata/$RockData"
import { $ChunkData$Status } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData$Status"
import { $ChunkDataAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$ChunkDataAccessor"
import { $ChunkWatchPacket } from "packages/net/dries007/tfc/network/$ChunkWatchPacket"
import { $ChunkDataGenerator$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkDataGenerator"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $ForestType, $ForestType$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ForestType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LerpFloatLayer$$Type } from "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer"

export class $ChunkData implements $ChunkDataAccessor {
static readonly "EMPTY": $ChunkData

constructor(chunkPos0: $ChunkPos$$Type)
constructor(chunkDataGenerator0: $ChunkDataGenerator$$Type, chunkPos1: $ChunkPos$$Type)

public static "dequeueClientChunkData"(chunkPos0: $ChunkPos$$Type): $ChunkData
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "generateFull"(int0s: integer[], int1s: integer[]): void
public "generatePartial"(lerpFloatLayer0: $LerpFloatLayer$$Type, lerpFloatLayer1: $LerpFloatLayer$$Type, forestType2: $ForestType$$Type, float3: float, float4: float): void
public static "get"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $ChunkData
public static "get"(levelReader0: $LevelReader$$Type, chunkPos1: $ChunkPos$$Type): $ChunkData
public static "get"(levelChunk0: $LevelChunk$$Type): $ChunkData
public "getAquiferSurfaceHeight"(): integer[]
public "getAverageTemp"(int0: integer, int1: integer): float
public "getAverageTemp"(blockPos0: $BlockPos$$Type): float
public "getForestDensity"(): float
public "getForestType"(): $ForestType
public "getForestWeirdness"(): float
public "getPos"(): $ChunkPos
public "getRainfall"(int0: integer, int1: integer): float
public "getRainfall"(blockPos0: $BlockPos$$Type): float
public "getRockData"(): $RockData
public "getUpdatePacket"(): $ChunkWatchPacket
public "onUpdatePacket"(lerpFloatLayer0: $LerpFloatLayer$$Type, lerpFloatLayer1: $LerpFloatLayer$$Type, forestType2: $ForestType$$Type, float3: float, float4: float): void
public static "queueClientChunkDataForLoad"(chunkPos0: $ChunkPos$$Type): $ChunkData
public "serializeNBT"(): $CompoundTag
public "status"(): $ChunkData$Status
public static "update"(levelChunk0: $LevelChunk$$Type, chunkData1: $ChunkData$$Type): void
get "aquiferSurfaceHeight"(): integer[]
get "forestDensity"(): float
get "forestType"(): $ForestType
get "forestWeirdness"(): float
get "pos"(): $ChunkPos
get "rockData"(): $RockData
get "updatePacket"(): $ChunkWatchPacket
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$ForestType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ForestType extends $Enum<$ForestType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$ForestType>
static readonly "EDGE": $ForestType
static readonly "NONE": $ForestType
static readonly "NORMAL": $ForestType
static readonly "OLD_GROWTH": $ForestType
static readonly "SPARSE": $ForestType

public static "byName"(string0: string): $ForestType
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(int0: integer): $ForestType
public static "valueOf"(string0: string): $ForestType
public static "values"(): $ForestType[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/util/$Pannable" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"
import { $BlockDefinition } from "packages/net/dries007/tfc/util/$BlockDefinition"

export class $Pannable extends $BlockDefinition {
static readonly "CACHE": $IndirectHashCollection<$Block, $Pannable>
static readonly "MANAGER": $DataManager<$Pannable>

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)

public static "get"(blockState0: $BlockState$$Type): $Pannable
public "getLootTable"(): $ResourceLocation
public "getModelStages"(): $ResourceLocation[]
get "lootTable"(): $ResourceLocation
get "modelStages"(): $ResourceLocation[]
}
}

declare module "packages/net/dries007/tfc/world/river/$River$Vertex" {
import { $Record } from "packages/java/lang/$Record"

export class $River$Vertex extends $Record {
constructor(x: double, y: double, angle: double, length: double, distance: integer)

public "angle"(): double
public "distance"(): integer
public "length"(): double
public "x"(): double
public "y"(): double
}
}

declare module "packages/net/dries007/tfc/util/$DataManager" {
import { $NetworkEvent$Context$$Type } from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Gson } from "packages/com/google/gson/$Gson"
import { $DataManagerAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$DataManagerAccessor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $DataManager$Reference } from "packages/net/dries007/tfc/util/$DataManager$Reference"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $SimpleJsonResourceReloadListener } from "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Set } from "packages/java/util/$Set"
import { $DataManagerSyncPacket } from "packages/net/dries007/tfc/network/$DataManagerSyncPacket"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Map$$Type } from "packages/java/util/$Map"

export class $DataManager<T> extends $SimpleJsonResourceReloadListener implements $DataManagerAccessor<any> {
static readonly "GSON": $Gson
static readonly "LOGGER": $Logger

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, biFunction2: $BiFunction$$Type<$ResourceLocation$$Type, $JsonObject$$Type, T>, biFunction3: $BiFunction$$Type<$ResourceLocation$$Type, $FriendlyByteBuf$$Type, T>, biConsumer4: $BiConsumer$$Type<T, $FriendlyByteBuf$$Type>, supplier5: $Supplier$$Type<$DataManagerSyncPacket<T>>)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, biFunction2: $BiFunction$$Type<$ResourceLocation$$Type, $JsonObject$$Type, T>)

public "createEmptyPacket"(): $DataManagerSyncPacket<T>
public "createSyncPacket"(): $DataManagerSyncPacket<T>
public "get"(resourceLocation0: $ResourceLocation$$Type): T
public "getName"(): string
public "getOrThrow"(resourceLocation0: $ResourceLocation$$Type): T
public "getReference"(resourceLocation0: $ResourceLocation$$Type): $DataManager$Reference<T>
public "getValues"(): $Set<T>
public "onSync"(context0: $NetworkEvent$Context$$Type, map1: $Map$$Type<$ResourceLocation$$Type, T>): void
public "rawFromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
public "rawToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
public "read"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): T
get "name"(): string
get "values"(): $Set<T>
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$DomainWarpType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$DomainWarpType extends $Enum<$FastNoiseLite$DomainWarpType> {
static readonly "BasicGrid": $FastNoiseLite$DomainWarpType
static readonly "OpenSimplex2": $FastNoiseLite$DomainWarpType
static readonly "OpenSimplex2Reduced": $FastNoiseLite$DomainWarpType

public static "valueOf"(string0: string): $FastNoiseLite$DomainWarpType
public static "values"(): $FastNoiseLite$DomainWarpType[]
}
}

declare module "packages/net/dries007/tfc/common/entities/$GenderedRenderAnimal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GenderedRenderAnimal {
"displayFemaleCharacteristics"(): boolean
"displayMaleCharacteristics"(): boolean
}

export namespace $GenderedRenderAnimal {
const probejs$$marker: never
}
export abstract class $GenderedRenderAnimal$$Static implements $GenderedRenderAnimal {
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite$CellularReturnType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FastNoiseLite$CellularReturnType extends $Enum<$FastNoiseLite$CellularReturnType> {
static readonly "CellValue": $FastNoiseLite$CellularReturnType
static readonly "Distance": $FastNoiseLite$CellularReturnType
static readonly "Distance2": $FastNoiseLite$CellularReturnType
static readonly "Distance2Add": $FastNoiseLite$CellularReturnType
static readonly "Distance2Div": $FastNoiseLite$CellularReturnType
static readonly "Distance2Mul": $FastNoiseLite$CellularReturnType
static readonly "Distance2Sub": $FastNoiseLite$CellularReturnType

public static "valueOf"(string0: string): $FastNoiseLite$CellularReturnType
public static "values"(): $FastNoiseLite$CellularReturnType[]
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$TransformLayer" {
import { $AreaContext$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaContext"
import { $Area$$Type } from "packages/net/dries007/tfc/world/layer/framework/$Area"
import { $AreaFactory, $AreaFactory$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"

export interface $TransformLayer {
"apply"(long0: long, areaFactory1: $AreaFactory$$Type): $AreaFactory
"apply"(areaContext0: $AreaContext$$Type, area1: $Area$$Type, int2: integer, int3: integer): integer
}

export namespace $TransformLayer {
const probejs$$marker: never
}
export abstract class $TransformLayer$$Static implements $TransformLayer {
}
}

declare module "packages/net/dries007/tfc/world/settings/$Settings" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $Record } from "packages/java/lang/$Record"
import { $RockLayerSettings, $RockLayerSettings$$Type } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"

export class $Settings extends $Record {
static readonly "CODEC": $MapCodec<$Settings>

constructor(flatBedrock: boolean, spawnDistance: integer, spawnCenterX: integer, spawnCenterZ: integer, temperatureScale: integer, temperatureConstant: float, rainfallScale: integer, rainfallConstant: float, rockLayerSettings: $RockLayerSettings$$Type, continentalness: float, grassDensity: float)

public "continentalness"(): float
public "flatBedrock"(): boolean
public "grassDensity"(): float
public "rainfallConstant"(): float
public "rainfallScale"(): integer
public "rockLayerSettings"(): $RockLayerSettings
public "spawnCenterX"(): integer
public "spawnCenterZ"(): integer
public "spawnDistance"(): integer
public "temperatureConstant"(): float
public "temperatureScale"(): integer
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Entry" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $IngredientType$Entry<T> extends $Predicate<T> {
"and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"negate"(): $Predicate<T>
"or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"stream"(): $Stream<T>
"test"(t0: T): boolean
}

export namespace $IngredientType$Entry {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $IngredientType$Entry$$Static<T> implements $IngredientType$Entry<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/net/dries007/tfc/world/feature/tree/$TreePlacementConfig$GroundType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TreePlacementConfig$GroundType extends $Enum<$TreePlacementConfig$GroundType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$TreePlacementConfig$GroundType>
static readonly "FLOATING": $TreePlacementConfig$GroundType
static readonly "NORMAL": $TreePlacementConfig$GroundType
static readonly "SAND": $TreePlacementConfig$GroundType
static readonly "SHALLOW_ALLOW_SALTWATER": $TreePlacementConfig$GroundType
static readonly "SHALLOW_WATER": $TreePlacementConfig$GroundType
static readonly "SUBMERGED": $TreePlacementConfig$GroundType
static readonly "SUBMERGED_ALLOW_SALTWATER": $TreePlacementConfig$GroundType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TreePlacementConfig$GroundType
public static "values"(): $TreePlacementConfig$GroundType[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/world/noise/$FastNoiseLite" {
import { $FastNoiseLite$DomainWarpType$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$DomainWarpType"
import { $FastNoiseLite$NoiseType$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$NoiseType"
import { $FastNoiseLite$CellularReturnType$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$CellularReturnType"
import { $FastNoiseLite$Vector3$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$Vector3"
import { $FastNoiseLite$Vector2$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$Vector2"
import { $FastNoiseLite$FractalType$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$FractalType"
import { $FastNoiseLite$CellularDistanceFunction$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$CellularDistanceFunction"
import { $FastNoiseLite$RotationType3D$$Type } from "packages/net/dries007/tfc/world/noise/$FastNoiseLite$RotationType3D"

export class $FastNoiseLite {
static readonly "PrimeX": integer
static readonly "PrimeY": integer
static readonly "PrimeZ": integer
static readonly "RandVecs2D": float[]
static readonly "RandVecs3D": float[]

constructor()
constructor(int0: integer)

public "DomainWarp"(vector30: $FastNoiseLite$Vector3$$Type): void
public "DomainWarp"(vector20: $FastNoiseLite$Vector2$$Type): void
public static "FastFloor"(double0: double): integer
public static "FastMax"(double0: double, double1: double): double
public static "FastMax"(float0: float, float1: float): float
public static "FastMin"(float0: float, float1: float): float
public static "FastMin"(double0: double, double1: double): double
public static "FastRound"(double0: double): integer
public "GetNoise"(double0: double, double1: double): float
public "GetNoise"(double0: double, double1: double, double2: double): float
public static "Hash"(int0: integer, int1: integer, int2: integer, int3: integer): integer
public static "Hash"(int0: integer, int1: integer, int2: integer): integer
public "SetCellularDistanceFunction"(cellularDistanceFunction0: $FastNoiseLite$CellularDistanceFunction$$Type): void
public "SetCellularJitter"(float0: float): void
public "SetCellularReturnType"(cellularReturnType0: $FastNoiseLite$CellularReturnType$$Type): void
public "SetDomainWarpAmp"(double0: double): void
public "SetDomainWarpType"(domainWarpType0: $FastNoiseLite$DomainWarpType$$Type): void
public "SetFractalGain"(float0: float): void
public "SetFractalLacunarity"(float0: float): void
public "SetFractalOctaves"(int0: integer): void
public "SetFractalPingPongStrength"(float0: float): void
public "SetFractalType"(fractalType0: $FastNoiseLite$FractalType$$Type): void
public "SetFractalWeightedStrength"(float0: float): void
public "SetFrequency"(double0: double): void
public "SetNoiseType"(noiseType0: $FastNoiseLite$NoiseType$$Type): void
public "SetRotationType3D"(rotationType3D0: $FastNoiseLite$RotationType3D$$Type): void
public "SetSeed"(int0: integer): void
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$AreaContext" {
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"

export class $AreaContext {
constructor(long0: long)

public "choose"<A>(a0: A, a1: A): A
public "choose"<A>(a0: A, a1: A, a2: A, a3: A): A
public "choose"<A>(a0s: A[]): A
public "choose"(int0s: integer[]): integer
public "choose"(int0: integer, int1: integer, int2: integer, int3: integer): integer
public "choose"(int0: integer, int1: integer): integer
public "random"(): $RandomSource
public "setSeed"(long0: long, long1: long): void
}
}

declare module "packages/net/dries007/tfc/common/blocks/rock/$Rock$BlockType" {
import { $RegistryRock$$Type } from "packages/net/dries007/tfc/util/registry/$RegistryRock"
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $StairBlock } from "packages/net/minecraft/world/level/block/$StairBlock"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $SlabBlock } from "packages/net/minecraft/world/level/block/$SlabBlock"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $WallBlock } from "packages/net/minecraft/world/level/block/$WallBlock"

export class $Rock$BlockType extends $Enum<$Rock$BlockType> implements $StringRepresentable {
static readonly "AQUEDUCT": $Rock$BlockType
static readonly "BRICKS": $Rock$BlockType
static readonly "BUTTON": $Rock$BlockType
static readonly "CHISELED": $Rock$BlockType
static readonly "COBBLE": $Rock$BlockType
static readonly "CRACKED_BRICKS": $Rock$BlockType
static readonly "GRAVEL": $Rock$BlockType
static readonly "HARDENED": $Rock$BlockType
static readonly "LOOSE": $Rock$BlockType
static readonly "MOSSY_BRICKS": $Rock$BlockType
static readonly "MOSSY_COBBLE": $Rock$BlockType
static readonly "MOSSY_LOOSE": $Rock$BlockType
static readonly "PRESSURE_PLATE": $Rock$BlockType
static readonly "RAW": $Rock$BlockType
static readonly "SMOOTH": $Rock$BlockType
static readonly "SPIKE": $Rock$BlockType
static readonly "VALUES": $Rock$BlockType[]

public "create"(registryRock0: $RegistryRock$$Type): $Block
public "createSlab"(registryRock0: $RegistryRock$$Type): $SlabBlock
public "createStairs"(registryRock0: $RegistryRock$$Type): $StairBlock
public "createWall"(registryRock0: $RegistryRock$$Type): $WallBlock
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "hasVariants"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Rock$BlockType
public static "valueOf"(int0: integer): $Rock$BlockType
public static "values"(): $Rock$BlockType[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/util/$Drinkable" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Collection } from "packages/java/util/$Collection"
import { $FluidDefinition } from "packages/net/dries007/tfc/util/$FluidDefinition"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Drinkable$Effect } from "packages/net/dries007/tfc/util/$Drinkable$Effect"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"
import { $FoodData } from "packages/net/dries007/tfc/common/capabilities/food/$FoodData"

export class $Drinkable extends $FluidDefinition {
static readonly "CACHE": $IndirectHashCollection<$Fluid, $Drinkable>
static readonly "MANAGER": $DataManager<$Drinkable>

public static "attemptDrink"(level0: $Level$$Type, player1: $Player$$Type, boolean2: boolean): $InteractionResult
public static "get"(fluid0: $Fluid$$Type): $Drinkable
public "getConsumeChance"(): float
public "getEffects"(): $Collection<$Drinkable$Effect>
public "getFoodStats"(): $FoodData
public "getIntoxication"(): integer
public "getThirst"(): integer
public "mayDrinkWhenFull"(): boolean
public "onDrink"(player0: $Player$$Type, int1: integer): void
get "consumeChance"(): float
get "effects"(): $Collection<$Drinkable$Effect>
get "foodStats"(): $FoodData
get "intoxication"(): integer
get "thirst"(): integer
}
}

declare module "packages/net/dries007/tfc/world/surface/$SurfaceState" {
import { $SurfaceBuilderContext$$Type } from "packages/net/dries007/tfc/world/surface/$SurfaceBuilderContext"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $SurfaceState {
"getState"(surfaceBuilderContext0: $SurfaceBuilderContext$$Type): $BlockState
"setState"(surfaceBuilderContext0: $SurfaceBuilderContext$$Type): void
set "state"(value: $SurfaceBuilderContext$$Type)
}

export namespace $SurfaceState {
const probejs$$marker: never
}
export abstract class $SurfaceState$$Static implements $SurfaceState {
}
}

declare module "packages/net/dries007/tfc/common/blocks/$ThinSpikeBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $FluidProperty } from "packages/net/dries007/tfc/common/fluids/$FluidProperty"
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
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
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
import { $IFluidLoggable } from "packages/net/dries007/tfc/common/fluids/$IFluidLoggable"
import { $Set } from "packages/java/util/$Set"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional } from "packages/java/util/$Optional"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ThinSpikeBlock extends $Block implements $IFluidLoggable {
static readonly "FLUID": $FluidProperty
static readonly "PILLAR_SHAPE": $VoxelShape
static readonly "TIP": $BooleanProperty
static readonly "TIP_SHAPE": $VoxelShape

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
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFluidLoggedState"(blockState0: $BlockState$$Type): $FluidState
public "getFluidProperty"(): $FluidProperty
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
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
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
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
get "fluidProperty"(): $FluidProperty
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $FloatUnaryOperator$$Type } from "packages/it/unimi/dsi/fastutil/floats/$FloatUnaryOperator"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $LerpFloatLayer extends $Record {
constructor(value00: float, value01: float, value10: float, value11: float)
constructor(compoundTag0: $CompoundTag$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public "apply"(floatUnaryOperator0: $FloatUnaryOperator$$Type): $LerpFloatLayer
public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "getValue"(double0: double, double1: double): float
public "scaled"(double0: double, double1: double, double2: double): $LerpFloatLayer
public "value00"(): float
public "value01"(): float
public "value10"(): float
public "value11"(): float
public "write"(): $CompoundTag
}
}

declare module "packages/net/dries007/tfc/world/river/$Flow" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"

export class $Flow extends $Enum<$Flow> implements $StringRepresentable {
static readonly "EEE": $Flow
static readonly "NEE": $Flow
static readonly "NNE": $Flow
static readonly "NNN": $Flow
static readonly "NNW": $Flow
static readonly "NONE": $Flow
static readonly "NWW": $Flow
static readonly "N_E": $Flow
static readonly "N_W": $Flow
static readonly "SEE": $Flow
static readonly "SSE": $Flow
static readonly "SSS": $Flow
static readonly "SSW": $Flow
static readonly "SWW": $Flow
static readonly "S_E": $Flow
static readonly "S_W": $Flow
static readonly "WWW": $Flow
static readonly "___": $Flow

public static "fromAngle"(double0: double): $Flow
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getVector"(): $Vec3
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "lerp"(flow0: $Flow$$Type, flow1: $Flow$$Type, flow2: $Flow$$Type, flow3: $Flow$$Type, float4: float, float5: float): $Flow
public static "lerp"(flow0: $Flow$$Type, flow1: $Flow$$Type, float2: float): $Flow
public static "valueOf"(string0: string): $Flow
public static "valueOf"(int0: integer): $Flow
public static "values"(): $Flow[]
get "serializedName"(): string
get "vector"(): $Vec3
}
}

declare module "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackModifier" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemStackModifier$Serializer } from "packages/net/dries007/tfc/common/recipes/outputs/$ItemStackModifier$Serializer"

export interface $ItemStackModifier {
"apply"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): $ItemStack
"dependsOnInput"(): boolean
"serializer"(): $ItemStackModifier$Serializer<any>
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $ItemStackModifier {
const probejs$$marker: never
}
export abstract class $ItemStackModifier$$Static implements $ItemStackModifier {
}
}

declare module "packages/net/dries007/tfc/util/events/$DouseFireEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB, $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $DouseFireEvent extends $Event {
constructor()

public static "douse"(level0: $Level$$Type, aABB1: $AABB$$Type, player2: $Player$$Type): void
public static "douse"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "getBounds"(): $AABB
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getState"(): $BlockState
get "bounds"(): $AABB
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/dries007/tfc/util/collections/$IndirectHashCollection" {
import { $IndirectHashCollectionAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$IndirectHashCollectionAccessor"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $RecipeManager$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $RecipeType } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $IndirectHashCollection<K, R> implements $IndirectHashCollectionAccessor<any, any> {
constructor(function0: $Function$$Type<R, $Iterable<K>>)

public "clear"(): void
public static "clearAllCaches"(): void
public static "create"<K, R>(function0: $Function$$Type<R, $Iterable<K>>, supplier1: $Supplier$$Type<$Collection<R>>): $IndirectHashCollection<K, R>
public static "createForRecipe"<C extends $Container, K, R extends $Recipe<C>>(function0: $Function$$Type<R, $Iterable<K>>, supplier1: $Supplier$$Type<$RecipeType<R>>): $IndirectHashCollection<K, R>
public "getAll"(k0: K): $Collection<R>
public "reload"(collection0: $Collection$$Type<R>): void
public static "reloadAllCaches"(recipeManager0: $RecipeManager$$Type): void
}
}

declare module "packages/net/dries007/tfc/world/layer/framework/$SourceLayer" {
import { $AreaContext$$Type } from "packages/net/dries007/tfc/world/layer/framework/$AreaContext"
import { $AreaFactory } from "packages/net/dries007/tfc/world/layer/framework/$AreaFactory"

export interface $SourceLayer {
"apply"(long0: long): $AreaFactory
"apply"(areaContext0: $AreaContext$$Type, int1: integer, int2: integer): integer
}

export namespace $SourceLayer {
const probejs$$marker: never
}
export abstract class $SourceLayer$$Static implements $SourceLayer {
}
}

declare module "packages/net/dries007/tfc/util/events/$AnimalProductEvent" {
import { $TFCAnimalProperties, $TFCAnimalProperties$$Type } from "packages/net/dries007/tfc/common/entities/livestock/$TFCAnimalProperties"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $AnimalProductEvent extends $Event {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, tFCAnimalProperties3: $TFCAnimalProperties$$Type, fluidStack4: $FluidStack$$Type, itemStack5: $ItemStack$$Type, int6: integer)
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, tFCAnimalProperties3: $TFCAnimalProperties$$Type, itemStack4: $ItemStack$$Type, itemStack5: $ItemStack$$Type, int6: integer)
constructor()

public "getAnimalProperties"(): $TFCAnimalProperties
public "getEntity"(): $Entity
public "getFluidProduct"(): $FluidStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getPos"(): $BlockPos
public "getProduct"(): $ItemStack
public "getTool"(): $ItemStack
public "getUses"(): integer
public static "produce"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, tFCAnimalProperties3: $TFCAnimalProperties$$Type, itemStack4: $ItemStack$$Type, itemStack5: $ItemStack$$Type, int6: integer): boolean
public static "produce"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, tFCAnimalProperties2: $TFCAnimalProperties$$Type, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type, int5: integer): boolean
public "setProduct"(itemStack0: $ItemStack$$Type): void
public "setProduct"(fluidStack0: $FluidStack$$Type): void
public "setUses"(int0: integer): void
get "animalProperties"(): $TFCAnimalProperties
get "entity"(): $Entity
get "fluidProduct"(): $FluidStack
get "level"(): $Level
get "player"(): $Player
get "pos"(): $BlockPos
get "product"(): $ItemStack
get "tool"(): $ItemStack
get "uses"(): integer
set "product"(value: $ItemStack$$Type)
set "product"(value: $FluidStack$$Type)
set "uses"(value: integer)
}
}

declare module "packages/net/dries007/tfc/config/$ConfigBuilder" {
import { $ForgeConfigSpec$BooleanValue } from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import { $ForgeConfigSpec$DoubleValue } from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import { $ForgeConfigSpec$EnumValue } from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import { $ForgeConfigSpec$IntValue } from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ForgeConfigSpec$ConfigValue } from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import { $ForgeConfigSpec$Builder$$Type } from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigBuilder {
constructor(builder0: $ForgeConfigSpec$Builder$$Type, string1: string)

public "comment"(...string0s: string[]): $ConfigBuilder
public "define"(string0: string, string1: string): $ForgeConfigSpec$ConfigValue<string>
public "define"<E extends $Enum<E>>(string0: string, e1: E): $ForgeConfigSpec$EnumValue<E>
public "define"(string0: string, list1: $List$$Type<string>, predicate2: $Predicate$$Type<string>): $ForgeConfigSpec$ConfigValue<$List<string>>
public "define"(string0: string, boolean1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(string0: string, int1: integer, int2: integer, int3: integer): $ForgeConfigSpec$IntValue
public "define"(string0: string, double1: double, double2: double, double3: double): $ForgeConfigSpec$DoubleValue
public "pop"(int0: integer): $ConfigBuilder
public "pop"(): $ConfigBuilder
public "push"(string0: string): $ConfigBuilder
public "swap"(string0: string): $ConfigBuilder
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IngredientType$Factory$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Factory"
import { $IngredientTypeMixin } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$IngredientTypeMixin"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List } from "packages/java/util/$List"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IngredientType$Entry } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Entry"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export interface $IngredientType<T> extends $Predicate<T>, $InputReplacement, $IngredientTypeMixin {
"all"(): $Stream<T>
"and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"entries"(): $List<$IngredientType$Entry<T>>
"negate"(): $Predicate<T>
"or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
"test"(t0: T): boolean
"toJson"(): $JsonElement
"toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
}

export namespace $IngredientType {
function fromJson<T, I extends $IngredientType<T>>(jsonElement0: $JsonElement$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
function fromNetwork<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
function of(o: any): $InputReplacement
function toJson<T, I extends $IngredientType<T>>(i0: I, factory1: $IngredientType$Factory$$Type<T, I>): $JsonElement
function toNetwork<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, i1: I, factory2: $IngredientType$Factory$$Type<T, I>): void
}
export abstract class $IngredientType$$Static<T> implements $IngredientType<T> {
static "fromJson"<T, I extends $IngredientType<T>>(jsonElement0: $JsonElement$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
static "fromNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
static "of"(o: any): $InputReplacement
static "toJson"<T, I extends $IngredientType<T>>(i0: I, factory1: $IngredientType$Factory$$Type<T, I>): $JsonElement
static "toNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, i1: I, factory2: $IngredientType$Factory$$Type<T, I>): void
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collection } from "packages/java/util/$Collection"
import { $IngredientType$Factory$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Factory"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IngredientType, $IngredientType$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType"
import { $IngredientType$Entry, $IngredientType$Entry$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$IngredientType$Entry"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export class $FluidIngredient extends $Record implements $IngredientType<$Fluid> {
constructor(entries: $List$$Type<$IngredientType$Entry$$Type<$Fluid$$Type>>)

public "all"(): $Stream<$Fluid>
public "and"(predicate0: $Predicate$$Type<$Fluid$$Type>): $Predicate<$Fluid>
public "entries"(): $List<$IngredientType$Entry<$Fluid>>
public "fluids"(): $Collection<$Fluid>
public static "fromJson"(jsonElement0: $JsonElement$$Type): $FluidIngredient
public static "fromJson"<T, I extends $IngredientType<T>>(jsonElement0: $JsonElement$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidIngredient
public static "fromNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, factory1: $IngredientType$Factory$$Type<T, I>): I
public static "isEqual"<T>(object0: any): $Predicate<T>
public "negate"(): $Predicate<$Fluid>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(o: any): $InputReplacement
public "or"(predicate0: $Predicate$$Type<$Fluid$$Type>): $Predicate<$Fluid>
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "test"(fluid0: $Fluid$$Type): boolean
public "toJson"(): $JsonElement
public static "toJson"<T, I extends $IngredientType<T>>(i0: I, factory1: $IngredientType$Factory$$Type<T, I>): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "toNetwork"<T, I extends $IngredientType<T>>(friendlyByteBuf0: $FriendlyByteBuf$$Type, i1: I, factory2: $IngredientType$Factory$$Type<T, I>): void
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
}
}

declare module "packages/net/dries007/tfc/world/surface/$SurfaceBuilderContext" {
import { $LevelAccessor, $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ChunkData, $ChunkData$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $SurfaceBuilder$$Type } from "packages/net/dries007/tfc/world/surface/builder/$SurfaceBuilder"
import { $RockLayerSettings$$Type } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BiomeExtension, $BiomeExtension$$Type } from "packages/net/dries007/tfc/world/biome/$BiomeExtension"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $SurfaceState$$Type } from "packages/net/dries007/tfc/world/surface/$SurfaceState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $RockSettings } from "packages/net/dries007/tfc/world/settings/$RockSettings"

export class $SurfaceBuilderContext {
constructor(levelAccessor0: $LevelAccessor$$Type, chunkAccess1: $ChunkAccess$$Type, chunkData2: $ChunkData$$Type, randomSource3: $RandomSource$$Type, long4: long, rockLayerSettings5: $RockLayerSettings$$Type, int6: integer, int7: integer)

public "averageTemperature"(): float
public "biome"(): $BiomeExtension
public "buildSurface"(biomeExtension0: $BiomeExtension$$Type, biomeExtension1: $BiomeExtension$$Type, double2: double, boolean3: boolean, surfaceBuilder4: $SurfaceBuilder$$Type, int5: integer, int6: integer, int7: integer, double8: double): void
public "calculateAltitudeSlopeSurfaceDepth"(int0: integer, int1: integer, int2: integer): integer
public "chunk"(): $ChunkAccess
public "getBlockState"(int0: integer): $BlockState
public "getBottomRock"(): $RockSettings
public "getChunkData"(): $ChunkData
public "getRock"(): $RockSettings
public "getSeaLevel"(): integer
public "getSeaLevelRock"(): $RockSettings
public "getSeed"(): long
public "getSlope"(): double
public "isDefaultBlock"(blockState0: $BlockState$$Type): boolean
public "isDefaultFluid"(blockState0: $BlockState$$Type): boolean
public "level"(): $LevelAccessor
public "originalBiome"(): $BiomeExtension
public "pos"(): $BlockPos
public "rainfall"(): float
public "random"(): $RandomSource
public "salty"(): boolean
public "setBlockState"(int0: integer, blockState1: $BlockState$$Type): void
public "setBlockState"(int0: integer, surfaceState1: $SurfaceState$$Type): void
public "setSlope"(double0: double): void
public "weight"(): double
get "bottomRock"(): $RockSettings
get "chunkData"(): $ChunkData
get "rock"(): $RockSettings
get "seaLevel"(): integer
get "seaLevelRock"(): $RockSettings
get "seed"(): long
get "slope"(): double
set "slope"(value: double)
}
}

declare module "packages/net/dries007/tfc/util/$Drinkable$Effect" {
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $MobEffect, $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"

export class $Drinkable$Effect extends $Record {
constructor(type: $MobEffect$$Type, duration: integer, amplifier: integer, chance: float)

public "amplifier"(): integer
public "chance"(): float
public "duration"(): integer
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Drinkable$Effect
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "type"(): $MobEffect
}
}

declare module "packages/net/dries007/tfc/util/registry/$RegistryWood" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $WoodType } from "packages/net/minecraft/world/level/block/state/properties/$WoodType"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $TFCTreeGrower } from "packages/net/dries007/tfc/world/feature/tree/$TFCTreeGrower"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Wood$BlockType$$Type } from "packages/net/dries007/tfc/common/blocks/wood/$Wood$BlockType"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockSetType } from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export interface $RegistryWood extends $StringRepresentable {
"autumnIndex"(): integer
"barkColor"(): $MapColor
"daysToGrow"(): integer
"getBlock"(blockType0: $Wood$BlockType$$Type): $Supplier<$Block>
"getBlockSet"(): $BlockSetType
"getSerializedName"(): string
"getVanillaWoodType"(): $WoodType
"tree"(): $TFCTreeGrower
"woodColor"(): $MapColor
get "blockSet"(): $BlockSetType
get "serializedName"(): string
get "vanillaWoodType"(): $WoodType
}

export namespace $RegistryWood {
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $RegistryWood$$Static implements $RegistryWood {
static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "packages/net/dries007/tfc/util/$FluidDefinition" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Collection } from "packages/java/util/$Collection"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $FluidDefinition {
public "getFluids"(): $Collection<$Fluid>
public "getId"(): $ResourceLocation
public "matches"(fluid0: $Fluid$$Type): boolean
get "fluids"(): $Collection<$Fluid>
get "id"(): $ResourceLocation
}
}

declare module "packages/net/dries007/tfc/common/capabilities/size/$Size" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Size extends $Enum<$Size> {
static readonly "HUGE": $Size
static readonly "LARGE": $Size
static readonly "NORMAL": $Size
static readonly "SMALL": $Size
static readonly "TINY": $Size
static readonly "VERY_LARGE": $Size
static readonly "VERY_SMALL": $Size
readonly "name": string

public "isEqualOrSmallerThan"(size0: $Size$$Type): boolean
public "isSmallerThan"(size0: $Size$$Type): boolean
public static "valueOf"(int0: integer): $Size
public static "valueOf"(string0: string): $Size
public static "values"(): $Size[]
}
}

declare module "packages/net/dries007/tfc/common/capabilities/food/$FoodData" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Nutrient$$Type } from "packages/net/dries007/tfc/common/capabilities/food/$Nutrient"

export class $FoodData extends $Record {
static readonly "EMPTY": $FoodData

constructor(hunger: integer, water: float, saturation: float, grain: float, fruit: float, vegetables: float, protein: float, dairy: float, decayModifier: float)

public static "create"(int0: integer, float1: float, float2: float, float3s: float[], float4: float): $FoodData
public "dairy"(): float
public "decayModifier"(): float
public static "decayOnly"(float0: float): $FoodData
public static "decode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FoodData
public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "fruit"(): float
public "grain"(): float
public "hunger"(): integer
public "nutrient"(nutrient0: $Nutrient$$Type): float
public "nutrients"(): float[]
public "protein"(): float
public static "read"(jsonObject0: $JsonObject$$Type): $FoodData
public static "read"(compoundTag0: $CompoundTag$$Type): $FoodData
public "saturation"(): float
public "vegetables"(): float
public "water"(): float
public "write"(): $CompoundTag
}
}

declare module "packages/net/dries007/tfc/world/river/$RiverInfo" {
import { $Record } from "packages/java/lang/$Record"
import { $Flow, $Flow$$Type } from "packages/net/dries007/tfc/world/river/$Flow"
import { $RiverEdge, $RiverEdge$$Type } from "packages/net/dries007/tfc/world/region/$RiverEdge"

export class $RiverInfo extends $Record {
constructor(edge: $RiverEdge$$Type, flow: $Flow$$Type, distSq: double, widthSq: double)

public "distSq"(): double
public "edge"(): $RiverEdge
public "flow"(): $Flow
public "normDistSq"(): double
public "widthSq"(): double
}
}

declare module "packages/net/dries007/tfc/world/biome/$BiomeBlendType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BiomeBlendType extends $Enum<$BiomeBlendType> {
static readonly "LAKE": $BiomeBlendType
static readonly "LAND": $BiomeBlendType
static readonly "OCEAN": $BiomeBlendType
static readonly "SIZE": integer

public static "valueOf"(string0: string): $BiomeBlendType
public static "values"(): $BiomeBlendType[]
}
}

declare module "packages/net/dries007/tfc/common/blocks/plant/fruit/$Lifecycle" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Lifecycle extends $Enum<$Lifecycle> implements $StringRepresentable {
static readonly "DORMANT": $Lifecycle
static readonly "FLOWERING": $Lifecycle
static readonly "FRUITING": $Lifecycle
static readonly "HEALTHY": $Lifecycle

public "active"(): boolean
public "advanceTowards"(lifecycle0: $Lifecycle$$Type): $Lifecycle
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Lifecycle
public static "values"(): $Lifecycle[]
get "serializedName"(): string
}
}

declare module "packages/net/dries007/tfc/common/recipes/ingredients/$FluidStackIngredient" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $FluidIngredient, $FluidIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$FluidIngredient"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $InputFluid } from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid"
import { $FluidLike, $FluidLike$$Type } from "packages/dev/latvian/mods/kubejs/fluid/$FluidLike"
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

export class $FluidStackIngredient extends $Record implements $Predicate<$FluidStack>, $InputFluid {
static readonly "EMPTY": $FluidStackIngredient

constructor(ingredient: $FluidIngredient$$Type, amount: integer)

public "amount"(): integer
public "and"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "copy"(a: long): $FluidLike
public static "fromJson"(jsonObject0: $JsonObject$$Type): $FluidStackIngredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $FluidStackIngredient
public "getAmount"(): long
public "ingredient"(): $FluidIngredient
public "isEmpty"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "matches"(other: $FluidLike$$Type): boolean
public "negate"(): $Predicate<$FluidStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(o: any): $InputReplacement
public "or"(predicate0: $Predicate$$Type<$FluidStack$$Type>): $Predicate<$FluidStack>
public "replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
public "test"(fluidStack0: $FluidStack$$Type): boolean
public "toJson"(): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
get "empty"(): boolean
}
}

declare module "packages/net/dries007/tfc/util/$Fuel" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $ItemDefinition } from "packages/net/dries007/tfc/util/$ItemDefinition"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $IndirectHashCollection } from "packages/net/dries007/tfc/util/collections/$IndirectHashCollection"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DataManager } from "packages/net/dries007/tfc/util/$DataManager"

export class $Fuel extends $ItemDefinition {
static readonly "CACHE": $IndirectHashCollection<$Item, $Fuel>
static readonly "MANAGER": $DataManager<$Fuel>

constructor(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type)

public "encode"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "get"(itemStack0: $ItemStack$$Type): $Fuel
public "getDuration"(): integer
public "getPurity"(): float
public "getTemperature"(): float
get "duration"(): integer
get "purity"(): float
get "temperature"(): float
}
}

