declare module "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor" {
import { $DensityFunction$NoiseHolder, $DensityFunction$NoiseHolder$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$NoiseHolder"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunction$Visitor {
"apply"(densityFunction0: $DensityFunction$$Type): $DensityFunction
"visitNoise"(noiseHolder0: $DensityFunction$NoiseHolder$$Type): $DensityFunction$NoiseHolder
}

export namespace $DensityFunction$Visitor {
const probejs$$marker: never
}
export abstract class $DensityFunction$Visitor$$Static implements $DensityFunction$Visitor {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext" {
import { $Blender } from "packages/net/minecraft/world/level/levelgen/blending/$Blender"

export interface $DensityFunction$FunctionContext {
"blockX"(): integer
"blockY"(): integer
"blockZ"(): integer
"getBlender"(): $Blender
get "blender"(): $Blender
}

export namespace $DensityFunction$FunctionContext {
const probejs$$marker: never
}
export abstract class $DensityFunction$FunctionContext$$Static implements $DensityFunction$FunctionContext {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$SurfaceRules$RuleSource" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $SurfaceRules$Context, $SurfaceRules$Context$$Type } from "packages/net/minecraft/world/level/levelgen/$SurfaceRules$Context"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $SurfaceRules$SurfaceRule, $SurfaceRules$SurfaceRule$$Type } from "packages/net/minecraft/world/level/levelgen/$SurfaceRules$SurfaceRule"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export interface $SurfaceRules$RuleSource extends $Function<$SurfaceRules$Context, $SurfaceRules$SurfaceRule> {
"andThen"<V>(function0: $Function$$Type<$SurfaceRules$SurfaceRule$$Type, V>): $Function<$SurfaceRules$Context, V>
"apply"(context0: $SurfaceRules$Context$$Type): $SurfaceRules$SurfaceRule
"codec"(): $KeyDispatchDataCodec<$SurfaceRules$RuleSource>
"compose"<V>(function0: $Function$$Type<V, $SurfaceRules$Context>): $Function<V, $SurfaceRules$SurfaceRule>
}

export namespace $SurfaceRules$RuleSource {
const CODEC: $Codec<$SurfaceRules$RuleSource>
function bootstrap(registry0: $Registry$$Type<$Codec$$Type<$SurfaceRules$RuleSource$$Type>>): $Codec<$SurfaceRules$RuleSource>
function identity<T>(): $Function<T, T>
}
export abstract class $SurfaceRules$RuleSource$$Static implements $SurfaceRules$RuleSource {
static readonly "CODEC": $Codec<$SurfaceRules$RuleSource>

static "bootstrap"(registry0: $Registry$$Type<$Codec$$Type<$SurfaceRules$RuleSource$$Type>>): $Codec<$SurfaceRules$RuleSource>
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$YClampedGradient" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$SimpleFunction"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$YClampedGradient extends $Record implements $DensityFunction$SimpleFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$YClampedGradient>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "fromValue"(): double
public "fromY"(): integer
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "toValue"(): double
public "toY"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$TwoArgumentSimpleFunction" {
import { $DensityFunctions$TwoArgumentSimpleFunction$Type, $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$TwoArgumentSimpleFunction$Type"
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunctions$TwoArgumentSimpleFunction extends $DensityFunction {
"abs"(): $DensityFunction
"argument1"(): $DensityFunction
"argument2"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"type"(): $DensityFunctions$TwoArgumentSimpleFunction$Type
}

export namespace $DensityFunctions$TwoArgumentSimpleFunction {
const LOGGER: $Logger
function create(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
}
export abstract class $DensityFunctions$TwoArgumentSimpleFunction$$Static implements $DensityFunctions$TwoArgumentSimpleFunction {
static readonly "LOGGER": $Logger

static "create"(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
}
}

declare module "packages/net/minecraft/world/level/levelgen/$GeodeBlockSettings" {
import { $BlockStateProvider, $BlockStateProvider$$Type } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GeodeBlockSettings {
static readonly "CODEC": $Codec<$GeodeBlockSettings>
readonly "alternateInnerLayerProvider": $BlockStateProvider
readonly "cannotReplace": $TagKey<$Block>
readonly "fillingProvider": $BlockStateProvider
readonly "innerLayerProvider": $BlockStateProvider
readonly "innerPlacements": $List<$BlockState>
readonly "invalidBlocks": $TagKey<$Block>
readonly "middleLayerProvider": $BlockStateProvider
readonly "outerLayerProvider": $BlockStateProvider

constructor(blockStateProvider0: $BlockStateProvider$$Type, blockStateProvider1: $BlockStateProvider$$Type, blockStateProvider2: $BlockStateProvider$$Type, blockStateProvider3: $BlockStateProvider$$Type, blockStateProvider4: $BlockStateProvider$$Type, list5: $List$$Type<$BlockState$$Type>, tagKey6: $TagKey$$Type<$Block$$Type>, tagKey7: $TagKey$$Type<$Block$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/$Aquifer$FluidPicker" {
import { $Aquifer$FluidStatus } from "packages/net/minecraft/world/level/levelgen/$Aquifer$FluidStatus"

export interface $Aquifer$FluidPicker {
"computeFluid"(int0: integer, int1: integer, int2: integer): $Aquifer$FluidStatus
}

export namespace $Aquifer$FluidPicker {
const probejs$$marker: never
}
export abstract class $Aquifer$FluidPicker$$Static implements $Aquifer$FluidPicker {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$TwoArgumentSimpleFunction$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DensityFunctions$TwoArgumentSimpleFunction$Type extends $Enum<$DensityFunctions$TwoArgumentSimpleFunction$Type> implements $StringRepresentable {
static readonly "ADD": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MAX": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MIN": $DensityFunctions$TwoArgumentSimpleFunction$Type
static readonly "MUL": $DensityFunctions$TwoArgumentSimpleFunction$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DensityFunctions$TwoArgumentSimpleFunction$Type
public static "values"(): $DensityFunctions$TwoArgumentSimpleFunction$Type[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$MarkerOrMarked" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunctions$Marker$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Marker$Type"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunctions$MarkerOrMarked extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"type"(): $DensityFunctions$Marker$Type
"wrapped"(): $DensityFunction
}

export namespace $DensityFunctions$MarkerOrMarked {
const probejs$$marker: never
}
export abstract class $DensityFunctions$MarkerOrMarked$$Static implements $DensityFunctions$MarkerOrMarked {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Ap2" {
import { $DensityFunctions$TwoArgumentSimpleFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$TwoArgumentSimpleFunction"
import { $DensityFunctions$TwoArgumentSimpleFunction$Type, $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$TwoArgumentSimpleFunction$Type"
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$Ap2 extends $Record implements $DensityFunctions$TwoArgumentSimpleFunction {
public "abs"(): $DensityFunction
public "argument1"(): $DensityFunction
public "argument2"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public static "create"(type0: $DensityFunctions$TwoArgumentSimpleFunction$Type$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type): $DensityFunctions$TwoArgumentSimpleFunction
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "type"(): $DensityFunctions$TwoArgumentSimpleFunction$Type
}
}

declare module "packages/net/minecraft/world/level/levelgen/$Heightmap$Types" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Heightmap$Types extends $Enum<$Heightmap$Types> implements $StringRepresentable {
static readonly "CODEC": $Codec<$Heightmap$Types>
static readonly "MOTION_BLOCKING": $Heightmap$Types
static readonly "MOTION_BLOCKING_NO_LEAVES": $Heightmap$Types
static readonly "OCEAN_FLOOR": $Heightmap$Types
static readonly "OCEAN_FLOOR_WG": $Heightmap$Types
static readonly "WORLD_SURFACE": $Heightmap$Types
static readonly "WORLD_SURFACE_WG": $Heightmap$Types

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializationKey"(): string
public "getSerializedName"(): string
public "isOpaque"(): $Predicate<$BlockState>
public "keepAfterWorldgen"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "sendToClient"(): boolean
public static "valueOf"(string0: string): $Heightmap$Types
public static "values"(): $Heightmap$Types[]
get "serializationKey"(): string
get "serializedName"(): string
get "opaque"(): $Predicate<$BlockState>
}
}

declare module "packages/net/minecraft/world/level/levelgen/$LegacyRandomSource" {
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $BitRandomSource } from "packages/net/minecraft/world/level/levelgen/$BitRandomSource"
import { $PositionalRandomFactory } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"

export class $LegacyRandomSource implements $BitRandomSource {
constructor(long0: long)

public "consumeCount"(int0: integer): void
public static "create"(): $RandomSource
public static "create"(long0: long): $RandomSource
public static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
public static "createThreadSafe"(): $RandomSource
public "fork"(): $RandomSource
public "forkPositional"(): $PositionalRandomFactory
public "next"(int0: integer): integer
public "nextBoolean"(): boolean
public "nextDouble"(): double
public "nextFloat"(): float
public "nextGaussian"(): double
public "nextInt"(): integer
public "nextInt"(int0: integer): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextIntBetweenInclusive"(int0: integer, int1: integer): integer
public "nextLong"(): long
public "setSeed"(long0: long): void
public "triangle"(double0: double, double1: double): double
set "seed"(value: long)
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Clamp" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $DensityFunctions$PureTransformer } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$PureTransformer"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$Clamp extends $Record implements $DensityFunctions$PureTransformer {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$Clamp>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "input"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "transform"(double0: double): double
}
}

declare module "packages/net/minecraft/world/level/levelgen/$GeodeLayerSettings" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GeodeLayerSettings {
static readonly "CODEC": $Codec<$GeodeLayerSettings>
readonly "filling": double
readonly "innerLayer": double
readonly "middleLayer": double
readonly "outerLayer": double

constructor(double0: double, double1: double, double2: double, double3: double)

}
}

declare module "packages/net/minecraft/world/level/levelgen/$GeodeCrackSettings" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GeodeCrackSettings {
static readonly "CODEC": $Codec<$GeodeCrackSettings>
readonly "baseCrackSize": double
readonly "crackPointOffset": integer
readonly "generateCrackChance": double

constructor(double0: double, double1: double, int2: integer)

}
}

declare module "packages/net/minecraft/world/level/levelgen/$NoiseRouter" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $NoiseRouter extends $Record {
static readonly "CODEC": $Codec<$NoiseRouter>

constructor(densityFunction0: $DensityFunction$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type, densityFunction3: $DensityFunction$$Type, densityFunction4: $DensityFunction$$Type, densityFunction5: $DensityFunction$$Type, densityFunction6: $DensityFunction$$Type, densityFunction7: $DensityFunction$$Type, densityFunction8: $DensityFunction$$Type, densityFunction9: $DensityFunction$$Type, densityFunction10: $DensityFunction$$Type, densityFunction11: $DensityFunction$$Type, densityFunction12: $DensityFunction$$Type, densityFunction13: $DensityFunction$$Type, densityFunction14: $DensityFunction$$Type)

public "barrierNoise"(): $DensityFunction
public "continents"(): $DensityFunction
public "depth"(): $DensityFunction
public "erosion"(): $DensityFunction
public "finalDensity"(): $DensityFunction
public "fluidLevelFloodednessNoise"(): $DensityFunction
public "fluidLevelSpreadNoise"(): $DensityFunction
public "initialDensityWithoutJaggedness"(): $DensityFunction
public "lavaNoise"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $NoiseRouter
public "ridges"(): $DensityFunction
public "temperature"(): $DensityFunction
public "vegetation"(): $DensityFunction
public "veinGap"(): $DensityFunction
public "veinRidged"(): $DensityFunction
public "veinToggle"(): $DensityFunction
}
}

declare module "packages/net/minecraft/world/level/levelgen/$NoiseChunk" {
import { $DensityFunction$ContextProvider } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Aquifer$FluidPicker$$Type } from "packages/net/minecraft/world/level/levelgen/$Aquifer$FluidPicker"
import { $Aquifer } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $NoiseSettings$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseSettings"
import { $DensityFunctions$BeardifierOrMarker$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$BeardifierOrMarker"
import { $Blender, $Blender$$Type } from "packages/net/minecraft/world/level/levelgen/blending/$Blender"
import { $NoiseGeneratorSettings$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseGeneratorSettings"
import { $DensityFunction$FunctionContext } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $NoiseChunk implements $DensityFunction$ContextProvider, $DensityFunction$FunctionContext {
constructor(int0: integer, randomState1: $RandomState$$Type, int2: integer, int3: integer, noiseSettings4: $NoiseSettings$$Type, beardifierOrMarker5: $DensityFunctions$BeardifierOrMarker$$Type, noiseGeneratorSettings6: $NoiseGeneratorSettings$$Type, fluidPicker7: $Aquifer$FluidPicker$$Type, blender8: $Blender$$Type)

public "advanceCellX"(int0: integer): void
public "aquifer"(): $Aquifer
public "blockX"(): integer
public "blockY"(): integer
public "blockZ"(): integer
public "fillAllDirectly"(double0s: double[], densityFunction1: $DensityFunction$$Type): void
public static "forChunk"(chunkAccess0: $ChunkAccess$$Type, randomState1: $RandomState$$Type, beardifierOrMarker2: $DensityFunctions$BeardifierOrMarker$$Type, noiseGeneratorSettings3: $NoiseGeneratorSettings$$Type, fluidPicker4: $Aquifer$FluidPicker$$Type, blender5: $Blender$$Type): $NoiseChunk
public "getBlender"(): $Blender
public "initializeForFirstCellX"(): void
public "preliminarySurfaceLevel"(int0: integer, int1: integer): integer
public "selectCellYZ"(int0: integer, int1: integer): void
public "stopInterpolation"(): void
public "swapSlices"(): void
public "updateForX"(int0: integer, double1: double): void
public "updateForY"(int0: integer, double1: double): void
public "updateForZ"(int0: integer, double1: double): void
get "blender"(): $Blender
}
}

declare module "packages/net/minecraft/world/level/levelgen/$NoiseBasedChunkGenerator" {
import { $WorldGenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $ChunkGenerator } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BiomeManager$$Type } from "packages/net/minecraft/world/level/biome/$BiomeManager"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $BiomeSource$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSource"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"
import { $Blender$$Type } from "packages/net/minecraft/world/level/levelgen/blending/$Blender"
import { $NoiseGeneratorSettings, $NoiseGeneratorSettings$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseGeneratorSettings"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $NoiseBasedChunkGenerator extends $ChunkGenerator {
static readonly "CODEC": $Codec<$NoiseBasedChunkGenerator>

constructor(biomeSource0: $BiomeSource$$Type, holder1: $Holder$$Type<$NoiseGeneratorSettings$$Type>)

public "buildSurface"(chunkAccess0: $ChunkAccess$$Type, worldGenerationContext1: $WorldGenerationContext$$Type, randomState2: $RandomState$$Type, structureManager3: $StructureManager$$Type, biomeManager4: $BiomeManager$$Type, registry5: $Registry$$Type<$Biome$$Type>, blender6: $Blender$$Type): void
public "generatorSettings"(): $Holder<$NoiseGeneratorSettings>
public "stable"(resourceKey0: $ResourceKey$$Type<$NoiseGeneratorSettings>): boolean
get "settings"(): $Holder<$NoiseGeneratorSettings>
set "settings"(value: $Holder$$Type<$NoiseGeneratorSettings$$Type>)
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext" {
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"

export class $WorldGenerationContext {
constructor(chunkGenerator0: $ChunkGenerator$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type)

public "getGenDepth"(): integer
public "getMinGenY"(): integer
get "genDepth"(): integer
get "minGenY"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/$RandomState" {
import { $SurfaceSystem } from "packages/net/minecraft/world/level/levelgen/$SurfaceSystem"
import { $Climate$Sampler } from "packages/net/minecraft/world/level/biome/$Climate$Sampler"
import { $HolderGetter$Provider$$Type } from "packages/net/minecraft/core/$HolderGetter$Provider"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PositionalRandomFactory } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"
import { $ChunkGeneratorExtension, $ChunkGeneratorExtension$$Type } from "packages/net/dries007/tfc/world/$ChunkGeneratorExtension"
import { $RandomStateExtension } from "packages/net/dries007/tfc/world/$RandomStateExtension"
import { $NoiseRouter } from "packages/net/minecraft/world/level/levelgen/$NoiseRouter"
import { $NoiseGeneratorSettings, $NoiseGeneratorSettings$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseGeneratorSettings"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter$$Type } from "packages/net/minecraft/core/$HolderGetter"
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise$NoiseParameters"
import { $NormalNoise } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise"

export class $RandomState implements $RandomStateExtension {
public "aquiferRandom"(): $PositionalRandomFactory
public static "create"(noiseGeneratorSettings0: $NoiseGeneratorSettings$$Type, holderGetter1: $HolderGetter$$Type<$NormalNoise$NoiseParameters$$Type>, long2: long): $RandomState
public static "create"(provider0: $HolderGetter$Provider$$Type, resourceKey1: $ResourceKey$$Type<$NoiseGeneratorSettings>, long2: long): $RandomState
public "getOrCreateNoise"(resourceKey0: $ResourceKey$$Type<$NormalNoise$NoiseParameters>): $NormalNoise
public "getOrCreateRandomFactory"(resourceLocation0: $ResourceLocation$$Type): $PositionalRandomFactory
public "oreRandom"(): $PositionalRandomFactory
public "router"(): $NoiseRouter
public "sampler"(): $Climate$Sampler
public "surfaceSystem"(): $SurfaceSystem
public "tfc$getChunkGeneratorExtension"(): $ChunkGeneratorExtension
public "tfc$setChunkGeneratorExtension"(chunkGeneratorExtension0: $ChunkGeneratorExtension$$Type): void
}
}

declare module "packages/net/minecraft/world/level/levelgen/$SurfaceRules$SurfaceRule" {
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $SurfaceRules$SurfaceRule {
"tryApply"(int0: integer, int1: integer, int2: integer): $BlockState
}

export namespace $SurfaceRules$SurfaceRule {
const probejs$$marker: never
}
export abstract class $SurfaceRules$SurfaceRule$$Static implements $SurfaceRules$SurfaceRule {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldDimensions" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $LevelStem, $LevelStem$$Type } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $WorldDimensions$Complete } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions$Complete"

export class $WorldDimensions extends $Record {
static readonly "CODEC": $MapCodec<$WorldDimensions>

constructor(registry0: $Registry$$Type<$LevelStem$$Type>)

public "bake"(registry0: $Registry$$Type<$LevelStem$$Type>): $WorldDimensions$Complete
public "dimensions"(): $Registry<$LevelStem>
public "get"(resourceKey0: $ResourceKey$$Type<$LevelStem>): $Optional<$LevelStem>
public "isDebug"(): boolean
public static "keysInOrder"(stream0: $Stream$$Type<$ResourceKey$$Type<$LevelStem$$Type>>): $Stream<$ResourceKey<$LevelStem>>
public "levels"(): $ImmutableSet<$ResourceKey<$Level>>
public "overworld"(): $ChunkGenerator
public "replaceOverworldGenerator"(registryAccess0: $RegistryAccess$$Type, chunkGenerator1: $ChunkGenerator$$Type): $WorldDimensions
public static "withOverworld"(registry0: $Registry$$Type<$DimensionType$$Type>, registry1: $Registry$$Type<$LevelStem$$Type>, chunkGenerator2: $ChunkGenerator$$Type): $Registry<$LevelStem>
public static "withOverworld"(registry0: $Registry$$Type<$LevelStem$$Type>, holder1: $Holder$$Type<$DimensionType$$Type>, chunkGenerator2: $ChunkGenerator$$Type): $Registry<$LevelStem>
get "debug"(): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/$BitRandomSource" {
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $PositionalRandomFactory } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"

export interface $BitRandomSource extends $RandomSource {
"consumeCount"(int0: integer): void
"fork"(): $RandomSource
"forkPositional"(): $PositionalRandomFactory
"next"(int0: integer): integer
"nextBoolean"(): boolean
"nextDouble"(): double
"nextFloat"(): float
"nextGaussian"(): double
"nextInt"(): integer
"nextInt"(int0: integer): integer
"nextInt"(int0: integer, int1: integer): integer
"nextIntBetweenInclusive"(int0: integer, int1: integer): integer
"nextLong"(): long
"setSeed"(long0: long): void
"triangle"(double0: double, double1: double): double
set "seed"(value: long)
}

export namespace $BitRandomSource {
const DOUBLE_MULTIPLIER: double
const FLOAT_MULTIPLIER: float
function create(): $RandomSource
function create(long0: long): $RandomSource
function createNewThreadLocalInstance(): $RandomSource
function createThreadSafe(): $RandomSource
}
export abstract class $BitRandomSource$$Static implements $BitRandomSource {
static readonly "DOUBLE_MULTIPLIER": double
static readonly "FLOAT_MULTIPLIER": float

static "create"(): $RandomSource
static "create"(long0: long): $RandomSource
static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
static "createThreadSafe"(): $RandomSource
}
}

declare module "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GenerationStep$Carving extends $Enum<$GenerationStep$Carving> implements $StringRepresentable {
static readonly "AIR": $GenerationStep$Carving
static readonly "CODEC": $Codec<$GenerationStep$Carving>
static readonly "LIQUID": $GenerationStep$Carving

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GenerationStep$Carving
public static "values"(): $GenerationStep$Carving[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Marker" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunctions$Marker$Type, $DensityFunctions$Marker$Type$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Marker$Type"
import { $DensityFunctions$MarkerOrMarked } from "packages/net/minecraft/world/level/levelgen/$DensityFunctions$MarkerOrMarked"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$Marker extends $Record implements $DensityFunctions$MarkerOrMarked {
constructor(type0: $DensityFunctions$Marker$Type$$Type, densityFunction1: $DensityFunction$$Type)

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "type"(): $DensityFunctions$Marker$Type
public "wrapped"(): $DensityFunction
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldgenRandom$Algorithm" {
import { $Enum } from "packages/java/lang/$Enum"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"

export class $WorldgenRandom$Algorithm extends $Enum<$WorldgenRandom$Algorithm> {
static readonly "LEGACY": $WorldgenRandom$Algorithm
static readonly "XOROSHIRO": $WorldgenRandom$Algorithm

public "newInstance"(long0: long): $RandomSource
public static "valueOf"(string0: string): $WorldgenRandom$Algorithm
public static "values"(): $WorldgenRandom$Algorithm[]
}
}

declare module "packages/net/minecraft/world/level/levelgen/$SurfaceSystem" {
import { $WorldGenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BiomeManager$$Type } from "packages/net/minecraft/world/level/biome/$BiomeManager"
import { $PositionalRandomFactory$$Type } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $SurfaceRules$RuleSource$$Type } from "packages/net/minecraft/world/level/levelgen/$SurfaceRules$RuleSource"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Optional } from "packages/java/util/$Optional"
import { $NoiseChunk$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseChunk"
import { $CarvingContext$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SurfaceSystem {
constructor(randomState0: $RandomState$$Type, blockState1: $BlockState$$Type, int2: integer, positionalRandomFactory3: $PositionalRandomFactory$$Type)

public "buildSurface"(randomState0: $RandomState$$Type, biomeManager1: $BiomeManager$$Type, registry2: $Registry$$Type<$Biome$$Type>, boolean3: boolean, worldGenerationContext4: $WorldGenerationContext$$Type, chunkAccess5: $ChunkAccess$$Type, noiseChunk6: $NoiseChunk$$Type, ruleSource7: $SurfaceRules$RuleSource$$Type): void
/** @deprecated */
public "topMaterial"(ruleSource0: $SurfaceRules$RuleSource$$Type, carvingContext1: $CarvingContext$$Type, function2: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, chunkAccess3: $ChunkAccess$$Type, noiseChunk4: $NoiseChunk$$Type, blockPos5: $BlockPos$$Type, boolean6: boolean): $Optional<$BlockState>
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunction$SimpleFunction" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunction$SimpleFunction extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
}

export namespace $DensityFunction$SimpleFunction {
const probejs$$marker: never
}
export abstract class $DensityFunction$SimpleFunction$$Static implements $DensityFunction$SimpleFunction {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider" {
import { $DensityFunction$FunctionContext } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunction$ContextProvider {
"fillAllDirectly"(double0s: double[], densityFunction1: $DensityFunction$$Type): void
"forIndex"(int0: integer): $DensityFunction$FunctionContext
}

export namespace $DensityFunction$ContextProvider {
const probejs$$marker: never
}
export abstract class $DensityFunction$ContextProvider$$Static implements $DensityFunction$ContextProvider {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$Aquifer$FluidStatus" {
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $Aquifer$FluidStatus {
constructor(int0: integer, blockState1: $BlockState$$Type)

public "at"(int0: integer): $BlockState
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldgenRandom" {
import { $LegacyRandomSource } from "packages/net/minecraft/world/level/levelgen/$LegacyRandomSource"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export class $WorldgenRandom extends $LegacyRandomSource {
constructor(randomSource0: $RandomSource$$Type)

public "consumeCount"(int0: integer): void
public static "create"(): $RandomSource
public static "create"(long0: long): $RandomSource
public static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
public static "createThreadSafe"(): $RandomSource
public "getCount"(): integer
public "nextBoolean"(): boolean
public "nextDouble"(): double
public "nextFloat"(): float
public "nextInt"(): integer
public "nextInt"(int0: integer): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextIntBetweenInclusive"(int0: integer, int1: integer): integer
public "nextLong"(): long
public static "seedSlimeChunk"(int0: integer, int1: integer, long2: long, long3: long): $RandomSource
public "setDecorationSeed"(long0: long, int1: integer, int2: integer): long
public "setFeatureSeed"(long0: long, int1: integer, int2: integer): void
public "setLargeFeatureSeed"(long0: long, int1: integer, int2: integer): void
public "setLargeFeatureWithSalt"(long0: long, int1: integer, int2: integer, int3: integer): void
public "triangle"(double0: double, double1: double): double
get "count"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Constant" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$SimpleFunction"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$Constant extends $Record implements $DensityFunction$SimpleFunction {
public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "value"(): double
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldOptions" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $OptionalLong, $OptionalLong$$Type } from "packages/java/util/$OptionalLong"

export class $WorldOptions {
static readonly "CODEC": $MapCodec<$WorldOptions>
static readonly "DEMO_OPTIONS": $WorldOptions

constructor(long0: long, boolean1: boolean, boolean2: boolean)

public static "defaultWithRandomSeed"(): $WorldOptions
public "generateBonusChest"(): boolean
public "generateStructures"(): boolean
public "isOldCustomizedWorld"(): boolean
public static "parseSeed"(string0: string): $OptionalLong
public static "randomSeed"(): long
public "seed"(): long
public "withBonusChest"(boolean0: boolean): $WorldOptions
public "withSeed"(optionalLong0: $OptionalLong$$Type): $WorldOptions
public "withStructures"(boolean0: boolean): $WorldOptions
get "oldCustomizedWorld"(): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/$Heightmap" {
import { $Set$$Type } from "packages/java/util/$Set"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $Heightmap {
constructor(chunkAccess0: $ChunkAccess$$Type, types1: $Heightmap$Types$$Type)

public "getFirstAvailable"(int0: integer, int1: integer): integer
public "getHighestTaken"(int0: integer, int1: integer): integer
public "getRawData"(): long[]
public static "primeHeightmaps"(chunkAccess0: $ChunkAccess$$Type, set1: $Set$$Type<$Heightmap$Types$$Type>): void
public "setRawData"(chunkAccess0: $ChunkAccess$$Type, types1: $Heightmap$Types$$Type, long2s: long[]): void
public "update"(int0: integer, int1: integer, int2: integer, blockState3: $BlockState$$Type): boolean
get "rawData"(): long[]
}
}

declare module "packages/net/minecraft/world/level/levelgen/$BelowZeroRetrogen" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkStatus } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $ProtoChunk$$Type } from "packages/net/minecraft/world/level/chunk/$ProtoChunk"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BiomeResolver, $BiomeResolver$$Type } from "packages/net/minecraft/world/level/biome/$BiomeResolver"

export class $BelowZeroRetrogen {
static readonly "CODEC": $Codec<$BelowZeroRetrogen>
static readonly "UPGRADE_HEIGHT_ACCESSOR": $LevelHeightAccessor

public "applyBedrockMask"(protoChunk0: $ProtoChunk$$Type): void
public static "getBiomeResolver"(biomeResolver0: $BiomeResolver$$Type, chunkAccess1: $ChunkAccess$$Type): $BiomeResolver
public "hasBedrockHole"(int0: integer, int1: integer): boolean
public "hasBedrockHoles"(): boolean
public static "read"(compoundTag0: $CompoundTag$$Type): $BelowZeroRetrogen
public static "replaceOldBedrock"(protoChunk0: $ProtoChunk$$Type): void
public "targetStatus"(): $ChunkStatus
}
}

declare module "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory" {
import { $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PositionalRandomFactory {
"at"(int0: integer, int1: integer, int2: integer): $RandomSource
"at"(blockPos0: $BlockPos$$Type): $RandomSource
"fromHashOf"(string0: string): $RandomSource
"fromHashOf"(resourceLocation0: $ResourceLocation$$Type): $RandomSource
"parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
}

export namespace $PositionalRandomFactory {
const probejs$$marker: never
}
export abstract class $PositionalRandomFactory$$Static implements $PositionalRandomFactory {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$SurfaceRules$Context" {
import { $SurfaceRulesContextAccessor } from "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$SurfaceRulesContextAccessor"

export class $SurfaceRules$Context implements $SurfaceRulesContextAccessor {
public "updateY"(stoneDepthAbove: integer, stoneDepthBelow: integer, waterHeight: integer, blockX: integer, blockY: integer, blockZ: integer): void
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldGenSettings" {
import { $WorldDimensions, $WorldDimensions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Record } from "packages/java/lang/$Record"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $WorldOptions, $WorldOptions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldOptions"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $WorldGenSettings extends $Record {
static readonly "CODEC": $Codec<$WorldGenSettings>

constructor(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type)

public "dimensions"(): $WorldDimensions
public static "encode"<T>(dynamicOps0: $DynamicOps$$Type<T>, worldOptions1: $WorldOptions$$Type, worldDimensions2: $WorldDimensions$$Type): $DataResult<T>
public static "encode"<T>(dynamicOps0: $DynamicOps$$Type<T>, worldOptions1: $WorldOptions$$Type, registryAccess2: $RegistryAccess$$Type): $DataResult<T>
public "options"(): $WorldOptions
}
}

declare module "packages/net/minecraft/world/level/levelgen/$WorldDimensions$Complete" {
import { $PrimaryLevelData$SpecialWorldProperty, $PrimaryLevelData$SpecialWorldProperty$$Type } from "packages/net/minecraft/world/level/storage/$PrimaryLevelData$SpecialWorldProperty"
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $Record } from "packages/java/lang/$Record"
import { $RegistryAccess$Frozen } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $LevelStem, $LevelStem$$Type } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"

export class $WorldDimensions$Complete extends $Record {
constructor(registry0: $Registry$$Type<$LevelStem$$Type>, specialWorldProperty1: $PrimaryLevelData$SpecialWorldProperty$$Type)

public "dimensions"(): $Registry<$LevelStem>
public "dimensionsRegistryAccess"(): $RegistryAccess$Frozen
public "lifecycle"(): $Lifecycle
public "specialWorldProperty"(): $PrimaryLevelData$SpecialWorldProperty
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$BeardifierOrMarker" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$SimpleFunction"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunctions$BeardifierOrMarker extends $DensityFunction$SimpleFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
}

export namespace $DensityFunctions$BeardifierOrMarker {
const CODEC: $KeyDispatchDataCodec<$DensityFunction>
}
export abstract class $DensityFunctions$BeardifierOrMarker$$Static implements $DensityFunctions$BeardifierOrMarker {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunction>

}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$Marker$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DensityFunctions$Marker$Type extends $Enum<$DensityFunctions$Marker$Type> implements $StringRepresentable {
static readonly "Cache2D": $DensityFunctions$Marker$Type
static readonly "CacheAllInCell": $DensityFunctions$Marker$Type
static readonly "CacheOnce": $DensityFunctions$Marker$Type
static readonly "FlatCache": $DensityFunctions$Marker$Type
static readonly "Interpolated": $DensityFunctions$Marker$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DensityFunctions$Marker$Type
public static "values"(): $DensityFunctions$Marker$Type[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/$NoiseSettings" {
import { $Record } from "packages/java/lang/$Record"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NoiseSettings extends $Record {
static readonly "CODEC": $Codec<$NoiseSettings>

constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "clampToHeightAccessor"(levelHeightAccessor0: $LevelHeightAccessor$$Type): $NoiseSettings
public static "create"(int0: integer, int1: integer, int2: integer, int3: integer): $NoiseSettings
public "getCellHeight"(): integer
public "getCellWidth"(): integer
public "height"(): integer
public "minY"(): integer
public "noiseSizeHorizontal"(): integer
public "noiseSizeVertical"(): integer
get "cellHeight"(): integer
get "cellWidth"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$PureTransformer" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export interface $DensityFunctions$PureTransformer extends $DensityFunction {
"abs"(): $DensityFunction
"clamp"(double0: double, double1: double): $DensityFunction
"codec"(): $KeyDispatchDataCodec<$DensityFunction>
"compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
"cube"(): $DensityFunction
"fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
"halfNegative"(): $DensityFunction
"input"(): $DensityFunction
"mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
"maxValue"(): double
"minValue"(): double
"quarterNegative"(): $DensityFunction
"square"(): $DensityFunction
"squeeze"(): $DensityFunction
"transform"(double0: double): double
}

export namespace $DensityFunctions$PureTransformer {
const probejs$$marker: never
}
export abstract class $DensityFunctions$PureTransformer$$Static implements $DensityFunctions$PureTransformer {
}
}

declare module "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GenerationStep$Decoration extends $Enum<$GenerationStep$Decoration> implements $StringRepresentable {
static readonly "CODEC": $Codec<$GenerationStep$Decoration>
static readonly "FLUID_SPRINGS": $GenerationStep$Decoration
static readonly "LAKES": $GenerationStep$Decoration
static readonly "LOCAL_MODIFICATIONS": $GenerationStep$Decoration
static readonly "RAW_GENERATION": $GenerationStep$Decoration
static readonly "STRONGHOLDS": $GenerationStep$Decoration
static readonly "SURFACE_STRUCTURES": $GenerationStep$Decoration
static readonly "TOP_LAYER_MODIFICATION": $GenerationStep$Decoration
static readonly "UNDERGROUND_DECORATION": $GenerationStep$Decoration
static readonly "UNDERGROUND_ORES": $GenerationStep$Decoration
static readonly "UNDERGROUND_STRUCTURES": $GenerationStep$Decoration
static readonly "VEGETAL_DECORATION": $GenerationStep$Decoration

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GenerationStep$Decoration
public static "values"(): $GenerationStep$Decoration[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunctions$RangeChoice" {
import { $DensityFunction$Visitor$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$Visitor"
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $DensityFunction$ContextProvider$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$ContextProvider"
import { $Record } from "packages/java/lang/$Record"
import { $KeyDispatchDataCodec } from "packages/net/minecraft/util/$KeyDispatchDataCodec"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $DensityFunctions$RangeChoice extends $Record implements $DensityFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$DensityFunctions$RangeChoice>
static readonly "DATA_CODEC": $MapCodec<$DensityFunctions$RangeChoice>

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "input"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxExclusive"(): double
public "maxValue"(): double
public "minInclusive"(): double
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "whenInRange"(): $DensityFunction
public "whenOutOfRange"(): $DensityFunction
}
}

declare module "packages/net/minecraft/world/level/levelgen/$DensityFunction$NoiseHolder" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise$NoiseParameters"
import { $NormalNoise, $NormalNoise$$Type } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise"

export class $DensityFunction$NoiseHolder extends $Record {
static readonly "CODEC": $Codec<$DensityFunction$NoiseHolder>

constructor(holder0: $Holder$$Type<$NormalNoise$NoiseParameters$$Type>)
constructor(holder0: $Holder$$Type<$NormalNoise$NoiseParameters$$Type>, normalNoise1: $NormalNoise$$Type)

public "getValue"(double0: double, double1: double, double2: double): double
public "maxValue"(): double
public "noise"(): $NormalNoise
public "noiseData"(): $Holder<$NormalNoise$NoiseParameters>
}
}

declare module "packages/net/minecraft/world/level/levelgen/$Aquifer" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Aquifer$FluidPicker$$Type } from "packages/net/minecraft/world/level/levelgen/$Aquifer$FluidPicker"
import { $NoiseChunk$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseChunk"
import { $NoiseRouter$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseRouter"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $DensityFunction$FunctionContext$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction$FunctionContext"
import { $PositionalRandomFactory$$Type } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"

export interface $Aquifer {
"computeSubstance"(functionContext0: $DensityFunction$FunctionContext$$Type, double1: double): $BlockState
"shouldScheduleFluidUpdate"(): boolean
}

export namespace $Aquifer {
function create(noiseChunk0: $NoiseChunk$$Type, chunkPos1: $ChunkPos$$Type, noiseRouter2: $NoiseRouter$$Type, positionalRandomFactory3: $PositionalRandomFactory$$Type, int4: integer, int5: integer, fluidPicker6: $Aquifer$FluidPicker$$Type): $Aquifer
function createDisabled(fluidPicker0: $Aquifer$FluidPicker$$Type): $Aquifer
}
export abstract class $Aquifer$$Static implements $Aquifer {
static "create"(noiseChunk0: $NoiseChunk$$Type, chunkPos1: $ChunkPos$$Type, noiseRouter2: $NoiseRouter$$Type, positionalRandomFactory3: $PositionalRandomFactory$$Type, int4: integer, int5: integer, fluidPicker6: $Aquifer$FluidPicker$$Type): $Aquifer
static "createDisabled"(fluidPicker0: $Aquifer$FluidPicker$$Type): $Aquifer
}
}

declare module "packages/net/minecraft/world/level/levelgen/$VerticalAnchor" {
import { $WorldGenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $VerticalAnchor {
"resolveY"(worldGenerationContext0: $WorldGenerationContext$$Type): integer
}

export namespace $VerticalAnchor {
const BOTTOM: $VerticalAnchor
const CODEC: $Codec<$VerticalAnchor>
const TOP: $VerticalAnchor
function aboveBottom(int0: integer): $VerticalAnchor
function absolute(int0: integer): $VerticalAnchor
function belowTop(int0: integer): $VerticalAnchor
function bottom(): $VerticalAnchor
function top(): $VerticalAnchor
}
export abstract class $VerticalAnchor$$Static implements $VerticalAnchor {
static readonly "BOTTOM": $VerticalAnchor
static readonly "CODEC": $Codec<$VerticalAnchor>
static readonly "TOP": $VerticalAnchor

static "aboveBottom"(int0: integer): $VerticalAnchor
static "absolute"(int0: integer): $VerticalAnchor
static "belowTop"(int0: integer): $VerticalAnchor
static "bottom"(): $VerticalAnchor
static "top"(): $VerticalAnchor
}
}

