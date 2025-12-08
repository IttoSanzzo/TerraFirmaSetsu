declare module "packages/net/minecraft/world/level/levelgen/carver/$CarverConfiguration" {
import { $HolderSet, $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $CarverDebugSettings, $CarverDebugSettings$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarverDebugSettings"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HeightProvider, $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor, $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $FloatProvider, $FloatProvider$$Type } from "packages/net/minecraft/util/valueproviders/$FloatProvider"
import { $ProbabilityFeatureConfiguration } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"

export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
static readonly "CODEC": $MapCodec<$CarverConfiguration>
readonly "debugSettings": $CarverDebugSettings
readonly "lavaLevel": $VerticalAnchor
readonly "replaceable": $HolderSet<$Block>
readonly "y": $HeightProvider
readonly "yScale": $FloatProvider

constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $CarverDebugSettings$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarverDebugSettings"
import { $CanyonCarverConfiguration$CanyonShapeConfiguration, $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration$CanyonShapeConfiguration"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $CarverConfiguration, $CarverConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarverConfiguration"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider, $FloatProvider$$Type } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $CanyonCarverConfiguration extends $CarverConfiguration {
static readonly "CODEC": $Codec<$CanyonCarverConfiguration>
readonly "shape": $CanyonCarverConfiguration$CanyonShapeConfiguration
readonly "verticalRotation": $FloatProvider

constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>, floatProvider6: $FloatProvider$$Type, canyonShapeConfiguration7: $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type)
constructor(carverConfiguration0: $CarverConfiguration$$Type, floatProvider1: $FloatProvider$$Type, canyonShapeConfiguration2: $CanyonCarverConfiguration$CanyonShapeConfiguration$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration$CanyonShapeConfiguration" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider, $FloatProvider$$Type } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
static readonly "CODEC": $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>
readonly "distanceFactor": $FloatProvider
readonly "horizontalRadiusFactor": $FloatProvider
readonly "thickness": $FloatProvider
readonly "verticalRadiusCenterFactor": float
readonly "verticalRadiusDefaultFactor": float
readonly "widthSmoothness": integer

constructor(floatProvider0: $FloatProvider$$Type, floatProvider1: $FloatProvider$$Type, int2: integer, floatProvider3: $FloatProvider$$Type, float4: float, float5: float)

}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $CarverDebugSettings$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarverDebugSettings"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $CarverConfiguration, $CarverConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarverConfiguration"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider, $FloatProvider$$Type } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $CaveCarverConfiguration extends $CarverConfiguration {
static readonly "CODEC": $Codec<$CaveCarverConfiguration>
readonly "horizontalRadiusMultiplier": $FloatProvider
readonly "verticalRadiusMultiplier": $FloatProvider

constructor(carverConfiguration0: $CarverConfiguration$$Type, floatProvider1: $FloatProvider$$Type, floatProvider2: $FloatProvider$$Type, floatProvider3: $FloatProvider$$Type)
constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, holderSet4: $HolderSet$$Type<$Block$$Type>, floatProvider5: $FloatProvider$$Type, floatProvider6: $FloatProvider$$Type, floatProvider7: $FloatProvider$$Type)
constructor(float0: float, heightProvider1: $HeightProvider$$Type, floatProvider2: $FloatProvider$$Type, verticalAnchor3: $VerticalAnchor$$Type, carverDebugSettings4: $CarverDebugSettings$$Type, holderSet5: $HolderSet$$Type<$Block$$Type>, floatProvider6: $FloatProvider$$Type, floatProvider7: $FloatProvider$$Type, floatProvider8: $FloatProvider$$Type)

public "getFeatures"(): $Stream<$ConfiguredFeature<any, any>>
get "features"(): $Stream<$ConfiguredFeature<any, any>>
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$NetherWorldCarver" {
import { $CaveCarverConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration"
import { $CaveWorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$CaveWorldCarver"
import { $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $NetherWorldCarver extends $CaveWorldCarver {
constructor(codec0: $Codec$$Type<$CaveCarverConfiguration$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CarverDebugSettings" {
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $CarverDebugSettings {
static readonly "CODEC": $Codec<$CarverDebugSettings>
static readonly "DEFAULT": $CarverDebugSettings

public "getAirState"(): $BlockState
public "getBarrierState"(): $BlockState
public "getLavaState"(): $BlockState
public "getWaterState"(): $BlockState
public "isDebugMode"(): boolean
public static "of"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $CarverDebugSettings
public static "of"(boolean0: boolean, blockState1: $BlockState$$Type): $CarverDebugSettings
public static "of"(boolean0: boolean, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, blockState4: $BlockState$$Type): $CarverDebugSettings
get "airState"(): $BlockState
get "barrierState"(): $BlockState
get "lavaState"(): $BlockState
get "waterState"(): $BlockState
get "debugMode"(): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CaveWorldCarver" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CaveCarverConfiguration, $CaveCarverConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $CarvingMask$$Type } from "packages/net/minecraft/world/level/chunk/$CarvingMask"
import { $WorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Aquifer$$Type } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $CarvingContext$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CaveWorldCarver extends $WorldCarver<$CaveCarverConfiguration> {
constructor(codec0: $Codec$$Type<$CaveCarverConfiguration$$Type>)

public "carve"(carvingContext0: $CarvingContext$$Type, caveCarverConfiguration1: $CaveCarverConfiguration$$Type, chunkAccess2: $ChunkAccess$$Type, function3: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, randomSource4: $RandomSource$$Type, aquifer5: $Aquifer$$Type, chunkPos6: $ChunkPos$$Type, carvingMask7: $CarvingMask$$Type): boolean
public "isStartChunk"(caveCarverConfiguration0: $CaveCarverConfiguration$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CanyonWorldCarver" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $CarvingMask$$Type } from "packages/net/minecraft/world/level/chunk/$CarvingMask"
import { $CanyonCarverConfiguration, $CanyonCarverConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration"
import { $WorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Aquifer$$Type } from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $CarvingContext$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CanyonWorldCarver extends $WorldCarver<$CanyonCarverConfiguration> {
constructor(codec0: $Codec$$Type<$CanyonCarverConfiguration$$Type>)

public "carve"(carvingContext0: $CarvingContext$$Type, canyonCarverConfiguration1: $CanyonCarverConfiguration$$Type, chunkAccess2: $ChunkAccess$$Type, function3: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, randomSource4: $RandomSource$$Type, aquifer5: $Aquifer$$Type, chunkPos6: $ChunkPos$$Type, carvingMask7: $CarvingMask$$Type): boolean
public "isStartChunk"(canyonCarverConfiguration0: $CanyonCarverConfiguration$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $WorldGenerationContext } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $RandomState, $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $SurfaceRules$RuleSource$$Type } from "packages/net/minecraft/world/level/levelgen/$SurfaceRules$RuleSource"
import { $NoiseBasedChunkGenerator$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseBasedChunkGenerator"
import { $Optional } from "packages/java/util/$Optional"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $NoiseChunk$$Type } from "packages/net/minecraft/world/level/levelgen/$NoiseChunk"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $CarvingContext extends $WorldGenerationContext {
constructor(noiseBasedChunkGenerator0: $NoiseBasedChunkGenerator$$Type, registryAccess1: $RegistryAccess$$Type, levelHeightAccessor2: $LevelHeightAccessor$$Type, noiseChunk3: $NoiseChunk$$Type, randomState4: $RandomState$$Type, ruleSource5: $SurfaceRules$RuleSource$$Type)

public "randomState"(): $RandomState
/** @deprecated */
public "registryAccess"(): $RegistryAccess
/** @deprecated */
public "topMaterial"(function0: $Function$$Type<$BlockPos$$Type, $Holder<$Biome>>, chunkAccess1: $ChunkAccess$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): $Optional<$BlockState>
}
}

