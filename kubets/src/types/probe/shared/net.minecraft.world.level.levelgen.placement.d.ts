declare module "packages/net/minecraft/world/level/levelgen/placement/$SurfaceWaterDepthFilter" {
import { $PlacementFilter } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $SurfaceWaterDepthFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$SurfaceWaterDepthFilter>

public static "forMaxDepth"(int0: integer): $SurfaceWaterDepthFilter
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$NoiseThresholdCountPlacement" {
import { $RepeatingPlacement } from "packages/net/minecraft/world/level/levelgen/placement/$RepeatingPlacement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NoiseThresholdCountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$NoiseThresholdCountPlacement>

public static "of"(double0: double, int1: integer, int2: integer): $NoiseThresholdCountPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$NoiseBasedCountPlacement" {
import { $RepeatingPlacement } from "packages/net/minecraft/world/level/levelgen/placement/$RepeatingPlacement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NoiseBasedCountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$NoiseBasedCountPlacement>

public static "of"(int0: integer, double1: double, double2: double): $NoiseBasedCountPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$PlacementContext" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $PlacedFeature, $PlacedFeature$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $WorldGenerationContext } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel, $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $GenerationStep$Carving$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $CarvingMask } from "packages/net/minecraft/world/level/chunk/$CarvingMask"

export class $PlacementContext extends $WorldGenerationContext {
constructor(worldGenLevel0: $WorldGenLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, optional2: $Optional$$Type<$PlacedFeature$$Type>)

public "generator"(): $ChunkGenerator
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getCarvingMask"(chunkPos0: $ChunkPos$$Type, carving1: $GenerationStep$Carving$$Type): $CarvingMask
public "getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
public "getLevel"(): $WorldGenLevel
public "getMinBuildHeight"(): integer
public "topFeature"(): $Optional<$PlacedFeature>
get "level"(): $WorldGenLevel
get "minBuildHeight"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$HeightmapPlacement" {
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $HeightmapPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$HeightmapPlacement>

public static "onHeightmap"(types0: $Heightmap$Types$$Type): $HeightmapPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$CountOnEveryLayerPlacement" {
import { $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

/** @deprecated */
export class $CountOnEveryLayerPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$CountOnEveryLayerPlacement>

public static "of"(intProvider0: $IntProvider$$Type): $CountOnEveryLayerPlacement
public static "of"(int0: integer): $CountOnEveryLayerPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$CountPlacement" {
import { $RepeatingPlacement } from "packages/net/minecraft/world/level/levelgen/placement/$RepeatingPlacement"
import { $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $CountPlacement extends $RepeatingPlacement {
static readonly "CODEC": $Codec<$CountPlacement>

public static "of"(int0: integer): $CountPlacement
public static "of"(intProvider0: $IntProvider$$Type): $CountPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$RepeatingPlacement" {
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"

export class $RepeatingPlacement extends $PlacementModifier {
constructor()

}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$HeightRangePlacement" {
import { $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $VerticalAnchor$$Type } from "packages/net/minecraft/world/level/levelgen/$VerticalAnchor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $HeightRangePlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$HeightRangePlacement>

public static "of"(heightProvider0: $HeightProvider$$Type): $HeightRangePlacement
public static "triangle"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $HeightRangePlacement
public static "uniform"(verticalAnchor0: $VerticalAnchor$$Type, verticalAnchor1: $VerticalAnchor$$Type): $HeightRangePlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier" {
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $PlacementContext$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $PlacementModifierType } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"

export class $PlacementModifier {
static readonly "CODEC": $Codec<$PlacementModifier>

constructor()

public "getPositions"(placementContext0: $PlacementContext$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type): $Stream<$BlockPos>
public "type"(): $PlacementModifierType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$BiomeFilter" {
import { $PlacementFilter } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BiomeFilter extends $PlacementFilter {
static "CODEC": $Codec<$BiomeFilter>

public static "biome"(): $BiomeFilter
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$InSquarePlacement" {
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $InSquarePlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$InSquarePlacement>

constructor()

public static "spread"(): $InSquarePlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$EnvironmentScanPlacement" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $EnvironmentScanPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$EnvironmentScanPlacement>

public static "scanningFor"(direction0: $Direction$$Type, blockPredicate1: $BlockPredicate$$Type, blockPredicate2: $BlockPredicate$$Type, int3: integer): $EnvironmentScanPlacement
public static "scanningFor"(direction0: $Direction$$Type, blockPredicate1: $BlockPredicate$$Type, int2: integer): $EnvironmentScanPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$RandomOffsetPlacement" {
import { $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RandomOffsetPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$RandomOffsetPlacement>

public static "horizontal"(intProvider0: $IntProvider$$Type): $RandomOffsetPlacement
public static "of"(intProvider0: $IntProvider$$Type, intProvider1: $IntProvider$$Type): $RandomOffsetPlacement
public static "vertical"(intProvider0: $IntProvider$$Type): $RandomOffsetPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$RarityFilter" {
import { $PlacementFilter } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RarityFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$RarityFilter>

public static "onAverageOnceEvery"(int0: integer): $RarityFilter
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$BlockPredicateFilter" {
import { $PlacementFilter } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import { $BlockPredicate$$Type } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicate"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockPredicateFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$BlockPredicateFilter>

public static "forPredicate"(blockPredicate0: $BlockPredicate$$Type): $BlockPredicateFilter
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter" {
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"

export class $PlacementFilter extends $PlacementModifier {
constructor()

}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$SurfaceRelativeThresholdFilter" {
import { $PlacementFilter } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementFilter"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $SurfaceRelativeThresholdFilter extends $PlacementFilter {
static readonly "CODEC": $Codec<$SurfaceRelativeThresholdFilter>

public static "of"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): $SurfaceRelativeThresholdFilter
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$CarvingMaskPlacement" {
import { $GenerationStep$Carving$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import { $PlacementModifier } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $CarvingMaskPlacement extends $PlacementModifier {
static readonly "CODEC": $Codec<$CarvingMaskPlacement>

public static "forStep"(carving0: $GenerationStep$Carving$$Type): $CarvingMaskPlacement
}
}

declare module "packages/net/minecraft/world/level/levelgen/placement/$CaveSurface" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $CaveSurface extends $Enum<$CaveSurface> implements $StringRepresentable {
static readonly "CEILING": $CaveSurface
static readonly "CODEC": $Codec<$CaveSurface>
static readonly "FLOOR": $CaveSurface

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDirection"(): $Direction
public "getSerializedName"(): string
public "getY"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CaveSurface
public static "values"(): $CaveSurface[]
get "direction"(): $Direction
get "serializedName"(): string
get "y"(): integer
}
}

