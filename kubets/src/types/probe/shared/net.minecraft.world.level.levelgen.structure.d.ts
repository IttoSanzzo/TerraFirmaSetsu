declare module "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $LevelHeightAccessor, $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $RandomState, $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $WorldgenRandom, $WorldgenRandom$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldgenRandom"
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $BiomeSource, $BiomeSource$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSource"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"

export class $Structure$GenerationContext extends $Record {
constructor(registryAccess0: $RegistryAccess$$Type, chunkGenerator1: $ChunkGenerator$$Type, biomeSource2: $BiomeSource$$Type, randomState3: $RandomState$$Type, structureTemplateManager4: $StructureTemplateManager$$Type, long5: long, chunkPos6: $ChunkPos$$Type, levelHeightAccessor7: $LevelHeightAccessor$$Type, predicate8: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>)
constructor(registryAccess: $RegistryAccess$$Type, chunkGenerator: $ChunkGenerator$$Type, biomeSource: $BiomeSource$$Type, randomState: $RandomState$$Type, structureTemplateManager: $StructureTemplateManager$$Type, random: $WorldgenRandom$$Type, seed: long, chunkPos: $ChunkPos$$Type, heightAccessor: $LevelHeightAccessor$$Type, validBiome: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>)

public "biomeSource"(): $BiomeSource
public "chunkGenerator"(): $ChunkGenerator
public "chunkPos"(): $ChunkPos
public "heightAccessor"(): $LevelHeightAccessor
public "random"(): $WorldgenRandom
public "randomState"(): $RandomState
public "registryAccess"(): $RegistryAccess
public "seed"(): long
public "structureTemplateManager"(): $StructureTemplateManager
public "validBiome"(): $Predicate<$Holder<$Biome>>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$WoodlandMansionStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $WoodlandMansionStructure extends $Structure {
static readonly "CODEC": $Codec<$WoodlandMansionStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$TagMatchTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TagMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$TagMatchTest>

constructor(tagKey0: $TagKey$$Type<$Block$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StructureTemplate$StructureBlockInfo extends $Record {
readonly "state": $BlockState

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type, nbt: $CompoundTag$$Type)

public "nbt"(): $CompoundTag
public "pos"(): $BlockPos
public "state"(): $BlockState
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$RandomSpreadStructurePlacement" {
import { $StructurePlacement$ExclusionZone$$Type } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$ExclusionZone"
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $RandomSpreadType, $RandomSpreadType$$Type } from "packages/net/minecraft/world/level/levelgen/structure/placement/$RandomSpreadType"
import { $StructurePlacement$FrequencyReductionMethod$$Type } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$FrequencyReductionMethod"
import { $StructurePlacement } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RandomSpreadStructurePlacement extends $StructurePlacement {
static readonly "CODEC": $Codec<$RandomSpreadStructurePlacement>

constructor(int0: integer, int1: integer, randomSpreadType2: $RandomSpreadType$$Type, int3: integer)
constructor(vec3i0: $Vec3i$$Type, frequencyReductionMethod1: $StructurePlacement$FrequencyReductionMethod$$Type, float2: float, int3: integer, optional4: $Optional$$Type<$StructurePlacement$ExclusionZone$$Type>, int5: integer, int6: integer, randomSpreadType7: $RandomSpreadType$$Type)

public "getPotentialStructureChunk"(long0: long, int1: integer, int2: integer): $ChunkPos
public "separation"(): integer
public "spacing"(): integer
public "spreadType"(): $RandomSpreadType
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$CappedProcessor" {
import { $StructureProcessor, $StructureProcessor$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $CappedProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$CappedProcessor>

constructor(structureProcessor0: $StructureProcessor$$Type, intProvider1: $IntProvider$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$NetherFossilStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $HeightProvider, $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NetherFossilStructure extends $Structure {
static readonly "CODEC": $Codec<$NetherFossilStructure>
readonly "height": $HeightProvider

constructor(structureSettings0: $Structure$StructureSettings$$Type, heightProvider1: $HeightProvider$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$AlwaysTrueTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AlwaysTrueTest extends $RuleTest {
static readonly "CODEC": $Codec<$AlwaysTrueTest>
static readonly "INSTANCE": $AlwaysTrueTest

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlockAgeProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockAgeProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlockAgeProcessor>

constructor(float0: float)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $HolderGetter$$Type } from "packages/net/minecraft/core/$HolderGetter"
import { $StructureTemplate } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $StructureTemplateManager {
constructor(resourceManager0: $ResourceManager$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer2: $DataFixer$$Type, holderGetter3: $HolderGetter$$Type<$Block$$Type>)

public static "createPathToStructure"(path0: $Path$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $Path
public "get"(resourceLocation0: $ResourceLocation$$Type): $Optional<$StructureTemplate>
public "getOrCreate"(resourceLocation0: $ResourceLocation$$Type): $StructureTemplate
public "getPathToGeneratedStructure"(resourceLocation0: $ResourceLocation$$Type, string1: string): $Path
public "listTemplates"(): $Stream<$ResourceLocation>
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "readStructure"(compoundTag0: $CompoundTag$$Type): $StructureTemplate
public "remove"(resourceLocation0: $ResourceLocation$$Type): void
public "save"(resourceLocation0: $ResourceLocation$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$ProcessorRule" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Passthrough } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$Passthrough"
import { $PosRuleTest$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTest"
import { $RuleBlockEntityModifier$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier"
import { $RuleTest$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ProcessorRule {
static readonly "CODEC": $Codec<$ProcessorRule>
static readonly "DEFAULT_BLOCK_ENTITY_MODIFIER": $Passthrough

constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, posRuleTest2: $PosRuleTest$$Type, blockState3: $BlockState$$Type, ruleBlockEntityModifier4: $RuleBlockEntityModifier$$Type)
constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, posRuleTest2: $PosRuleTest$$Type, blockState3: $BlockState$$Type)
constructor(ruleTest0: $RuleTest$$Type, ruleTest1: $RuleTest$$Type, blockState2: $BlockState$$Type)

public "getOutputState"(): $BlockState
public "getOutputTag"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "test"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type, randomSource5: $RandomSource$$Type): boolean
get "outputState"(): $BlockState
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$EndCityStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $EndCityStructure extends $Structure {
static readonly "CODEC": $Codec<$EndCityStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$OceanMonumentStructure" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $PiecesContainer, $PiecesContainer$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $OceanMonumentStructure extends $Structure {
static readonly "CODEC": $Codec<$OceanMonumentStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
public static "regeneratePiecesAfterLoad"(chunkPos0: $ChunkPos$$Type, long1: long, piecesContainer2: $PiecesContainer$$Type): $PiecesContainer
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlockIgnoreProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $List$$Type } from "packages/java/util/$List"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockIgnoreProcessor extends $StructureProcessor {
static readonly "AIR": $BlockIgnoreProcessor
static readonly "CODEC": $Codec<$BlockIgnoreProcessor>
static readonly "STRUCTURE_AND_AIR": $BlockIgnoreProcessor
static readonly "STRUCTURE_BLOCK": $BlockIgnoreProcessor

constructor(list0: $List$$Type<$Block$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool$Projection" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>
static readonly "RIGID": $StructureTemplatePool$Projection
static readonly "TERRAIN_MATCHING": $StructureTemplatePool$Projection

public static "byName"(string0: string): $StructureTemplatePool$Projection
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getProcessors"(): $ImmutableList<$StructureProcessor>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureTemplatePool$Projection
public static "values"(): $StructureTemplatePool$Projection[]
get "name"(): string
get "processors"(): $ImmutableList<$StructureProcessor>
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $StructurePlacementType } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacementType"
import { $ChunkGeneratorStructureState$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $StructurePlacement {
static readonly "CODEC": $Codec<$StructurePlacement>

public "getLocatePos"(chunkPos0: $ChunkPos$$Type): $BlockPos
public "isStructureChunk"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type, int1: integer, int2: integer): boolean
public "type"(): $StructurePlacementType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride$BoundingBoxType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $StructureSpawnOverride$BoundingBoxType extends $Enum<$StructureSpawnOverride$BoundingBoxType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$StructureSpawnOverride$BoundingBoxType>
static readonly "PIECE": $StructureSpawnOverride$BoundingBoxType
static readonly "STRUCTURE": $StructureSpawnOverride$BoundingBoxType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureSpawnOverride$BoundingBoxType
public static "values"(): $StructureSpawnOverride$BoundingBoxType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTest" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $PosRuleTest {
static readonly "CODEC": $Codec<$PosRuleTest>

constructor()

public "test"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride" {
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $Record } from "packages/java/lang/$Record"
import { $WeightedRandomList, $WeightedRandomList$$Type } from "packages/net/minecraft/util/random/$WeightedRandomList"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride$BoundingBoxType"

export class $StructureSpawnOverride extends $Record {
static readonly "CODEC": $Codec<$StructureSpawnOverride>

constructor(boundingBoxType0: $StructureSpawnOverride$BoundingBoxType$$Type, weightedRandomList1: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)

public "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "spawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StructureTemplate$StructureEntityInfo {
readonly "blockPos": $BlockPos
readonly "nbt": $CompoundTag
readonly "pos": $Vec3

constructor(vec30: $Vec3$$Type, blockPos1: $BlockPos$$Type, compoundTag2: $CompoundTag$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$OceanRuinStructure$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
static readonly "CODEC": $Codec<$OceanRuinStructure$Type>
static readonly "COLD": $OceanRuinStructure$Type
static readonly "WARM": $OceanRuinStructure$Type

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $OceanRuinStructure$Type
public static "values"(): $OceanRuinStructure$Type[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$DesertPyramidStructure" {
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $SinglePieceStructure } from "packages/net/minecraft/world/level/levelgen/structure/$SinglePieceStructure"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $DesertPyramidStructure extends $SinglePieceStructure {
static readonly "CODEC": $Codec<$DesertPyramidStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosAlwaysTrueTest" {
import { $PosRuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTest"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $PosAlwaysTrueTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$PosAlwaysTrueTest>
static readonly "INSTANCE": $PosAlwaysTrueTest

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $RuleBlockEntityModifier {
"apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
"getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}

export namespace $RuleBlockEntityModifier {
const CODEC: $Codec<$RuleBlockEntityModifier>
}
export abstract class $RuleBlockEntityModifier$$Static implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$RuleBlockEntityModifier>

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlockRotProcessor" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockRotProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlockRotProcessor>

constructor(float0: float)
constructor(holderSet0: $HolderSet$$Type<$Block$$Type>, float1: float)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$SwampHutStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $SwampHutStructure extends $Structure {
static readonly "CODEC": $Codec<$SwampHutStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePiecesBuilder" {
import { $BoundingBox, $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $StructurePiece, $StructurePiece$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $StructurePieceAccessor } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePieceAccessor"
import { $PiecesContainer } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"

export class $StructurePiecesBuilder implements $StructurePieceAccessor {
constructor()

public "addPiece"(structurePiece0: $StructurePiece$$Type): void
public "build"(): $PiecesContainer
public "clear"(): void
public "findCollisionPiece"(boundingBox0: $BoundingBox$$Type): $StructurePiece
public "getBoundingBox"(): $BoundingBox
public "isEmpty"(): boolean
/** @deprecated */
public "moveBelowSeaLevel"(int0: integer, int1: integer, randomSource2: $RandomSource$$Type, int3: integer): integer
public "moveInsideHeights"(randomSource0: $RandomSource$$Type, int1: integer, int2: integer): void
/** @deprecated */
public "offsetPiecesVertically"(int0: integer): void
get "boundingBox"(): $BoundingBox
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RandomBlockMatchTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RandomBlockMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$RandomBlockMatchTest>

constructor(block0: $Block$$Type, float1: float)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette" {
import { $StructureTemplate$StructureBlockInfo } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List } from "packages/java/util/$List"
import { $PaletteAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$PaletteAccess"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $StructureTemplate$Palette implements $PaletteAccess {
public "blocks"(): $List<$StructureTemplate$StructureBlockInfo>
public "blocks"(block0: $Block$$Type): $List<$StructureTemplate$StructureBlockInfo>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StructurePiecesBuilder, $StructurePiecesBuilder$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePiecesBuilder"
import { $Record } from "packages/java/lang/$Record"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $Structure$GenerationStub extends $Record {
constructor(blockPos0: $BlockPos$$Type, consumer1: $Consumer$$Type<$StructurePiecesBuilder$$Type>)
constructor(position: $BlockPos$$Type, generator: $Either$$Type<$Consumer$$Type<$StructurePiecesBuilder$$Type>, $StructurePiecesBuilder$$Type>)

public "generator"(): $Either<$Consumer<$StructurePiecesBuilder>, $StructurePiecesBuilder>
public "getPiecesBuilder"(): $StructurePiecesBuilder
public "position"(): $BlockPos
get "piecesBuilder"(): $StructurePiecesBuilder
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$MineshaftStructure$Type" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
static readonly "CODEC": $Codec<$MineshaftStructure$Type>
static readonly "MESA": $MineshaftStructure$Type
static readonly "NORMAL": $MineshaftStructure$Type

public static "byId"(int0: integer): $MineshaftStructure$Type
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getFenceState"(): $BlockState
public "getName"(): string
public "getPlanksState"(): $BlockState
public "getSerializedName"(): string
public "getWoodState"(): $BlockState
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $MineshaftStructure$Type
public static "values"(): $MineshaftStructure$Type[]
get "fenceState"(): $BlockState
get "name"(): string
get "planksState"(): $BlockState
get "serializedName"(): string
get "woodState"(): $BlockState
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$AppendLoot" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $RuleBlockEntityModifier } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AppendLoot implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$AppendLoot>

constructor(resourceLocation0: $ResourceLocation$$Type)

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$TerrainAdjustment" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $TerrainAdjustment extends $Enum<$TerrainAdjustment> implements $StringRepresentable {
static readonly "BEARD_BOX": $TerrainAdjustment
static readonly "BEARD_THIN": $TerrainAdjustment
static readonly "BURY": $TerrainAdjustment
static readonly "CODEC": $Codec<$TerrainAdjustment>
static readonly "NONE": $TerrainAdjustment

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $TerrainAdjustment
public static "values"(): $TerrainAdjustment[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Vec3i, $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BoundingBox {
static readonly "CODEC": $Codec<$BoundingBox>
"minY": integer

constructor(blockPos0: $BlockPos$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

/** @deprecated */
public "encapsulate"(boundingBox0: $BoundingBox$$Type): $BoundingBox
/** @deprecated */
public "encapsulate"(blockPos0: $BlockPos$$Type): $BoundingBox
public static "encapsulatingBoxes"(iterable0: $Iterable$$Type<$BoundingBox$$Type>): $Optional<$BoundingBox>
public static "encapsulatingPositions"(iterable0: $Iterable$$Type<$BlockPos$$Type>): $Optional<$BoundingBox>
public "forAllCorners"(consumer0: $Consumer$$Type<$BlockPos$$Type>): void
public static "fromCorners"(vec3i0: $Vec3i$$Type, vec3i1: $Vec3i$$Type): $BoundingBox
public "getCenter"(): $BlockPos
public "getLength"(): $Vec3i
public "getXSpan"(): integer
public "getYSpan"(): integer
public "getZSpan"(): integer
public static "infinite"(): $BoundingBox
public "inflatedBy"(int0: integer): $BoundingBox
public "intersects"(boundingBox0: $BoundingBox$$Type): boolean
public "intersects"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "isInside"(vec3i0: $Vec3i$$Type): boolean
public "isInside"(int0: integer, int1: integer, int2: integer): boolean
public "maxX"(): integer
public "maxY"(): integer
public "maxZ"(): integer
public "minX"(): integer
public "minY"(): integer
public "minZ"(): integer
/** @deprecated */
public "move"(vec3i0: $Vec3i$$Type): $BoundingBox
/** @deprecated */
public "move"(int0: integer, int1: integer, int2: integer): $BoundingBox
public "moved"(int0: integer, int1: integer, int2: integer): $BoundingBox
public static "orientBox"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, direction9: $Direction$$Type): $BoundingBox
get "center"(): $BlockPos
get "length"(): $Vec3i
get "xSpan"(): integer
get "ySpan"(): integer
get "zSpan"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$JigsawReplacementProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $JigsawReplacementProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$JigsawReplacementProcessor>
static readonly "INSTANCE": $JigsawReplacementProcessor

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$IglooStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $IglooStructure extends $Structure {
static readonly "CODEC": $Codec<$IglooStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$FeaturePoolElement" {
import { $StructurePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $FeaturePoolElement extends $StructurePoolElement {
static readonly "CODEC": $Codec<$FeaturePoolElement>

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$RuinedPortalStructure$Setup" {
import { $Record } from "packages/java/lang/$Record"
import { $RuinedPortalPiece$VerticalPlacement, $RuinedPortalPiece$VerticalPlacement$$Type } from "packages/net/minecraft/world/level/levelgen/structure/structures/$RuinedPortalPiece$VerticalPlacement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RuinedPortalStructure$Setup extends $Record {
static readonly "CODEC": $Codec<$RuinedPortalStructure$Setup>

constructor(verticalPlacement0: $RuinedPortalPiece$VerticalPlacement$$Type, float1: float, float2: float, boolean3: boolean, boolean4: boolean, boolean5: boolean, boolean6: boolean, float7: float)

public "airPocketProbability"(): float
public "canBeCold"(): boolean
public "mossiness"(): float
public "overgrown"(): boolean
public "placement"(): $RuinedPortalPiece$VerticalPlacement
public "replaceWithBlackstone"(): boolean
public "vines"(): boolean
public "weight"(): float
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$ProtectedBlockProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ProtectedBlockProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$ProtectedBlockProcessor>
readonly "cannotReplace": $TagKey<$Block>

constructor(tagKey0: $TagKey$$Type<$Block$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureCheckResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $StructureCheckResult extends $Enum<$StructureCheckResult> {
static readonly "CHUNK_LOAD_NEEDED": $StructureCheckResult
static readonly "START_NOT_PRESENT": $StructureCheckResult
static readonly "START_PRESENT": $StructureCheckResult

public static "valueOf"(string0: string): $StructureCheckResult
public static "values"(): $StructureCheckResult[]
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$SinglePieceStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"

export class $SinglePieceStructure extends $Structure {
public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$BuriedTreasureStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BuriedTreasureStructure extends $Structure {
static readonly "CODEC": $Codec<$BuriedTreasureStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$ConcentricRingsStructurePlacement" {
import { $HolderSet, $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $StructurePlacement$ExclusionZone$$Type } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$ExclusionZone"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $StructurePlacement$FrequencyReductionMethod$$Type } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$FrequencyReductionMethod"
import { $StructurePlacement } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ConcentricRingsStructurePlacement extends $StructurePlacement {
static readonly "CODEC": $Codec<$ConcentricRingsStructurePlacement>

constructor(int0: integer, int1: integer, int2: integer, holderSet3: $HolderSet$$Type<$Biome$$Type>)
constructor(vec3i0: $Vec3i$$Type, frequencyReductionMethod1: $StructurePlacement$FrequencyReductionMethod$$Type, float2: float, int3: integer, optional4: $Optional$$Type<$StructurePlacement$ExclusionZone$$Type>, int5: integer, int6: integer, int7: integer, holderSet8: $HolderSet$$Type<$Biome$$Type>)

public "count"(): integer
public "distance"(): integer
public "preferredBiomes"(): $HolderSet<$Biome>
public "spread"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings" {
import { $BoundingBox, $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $StructureProcessor, $StructureProcessor$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $StructureTemplate$Palette, $StructureTemplate$Palette$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Rotation, $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Mirror, $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StructurePlaceSettings {
constructor()

public "addProcessor"(structureProcessor0: $StructureProcessor$$Type): $StructurePlaceSettings
public "clearProcessors"(): $StructurePlaceSettings
public "copy"(): $StructurePlaceSettings
public "getBoundingBox"(): $BoundingBox
public "getKnownShape"(): boolean
public "getMirror"(): $Mirror
public "getProcessors"(): $List<$StructureProcessor>
public "getRandom"(blockPos0: $BlockPos$$Type): $RandomSource
public "getRandomPalette"(list0: $List$$Type<$StructureTemplate$Palette$$Type>, blockPos1: $BlockPos$$Type): $StructureTemplate$Palette
public "getRotation"(): $Rotation
public "getRotationPivot"(): $BlockPos
public "isIgnoreEntities"(): boolean
public "popProcessor"(structureProcessor0: $StructureProcessor$$Type): $StructurePlaceSettings
public "setBoundingBox"(boundingBox0: $BoundingBox$$Type): $StructurePlaceSettings
public "setFinalizeEntities"(boolean0: boolean): $StructurePlaceSettings
public "setIgnoreEntities"(boolean0: boolean): $StructurePlaceSettings
public "setKeepLiquids"(boolean0: boolean): $StructurePlaceSettings
public "setKnownShape"(boolean0: boolean): $StructurePlaceSettings
public "setMirror"(mirror0: $Mirror$$Type): $StructurePlaceSettings
public "setRandom"(randomSource0: $RandomSource$$Type): $StructurePlaceSettings
public "setRotation"(rotation0: $Rotation$$Type): $StructurePlaceSettings
public "setRotationPivot"(blockPos0: $BlockPos$$Type): $StructurePlaceSettings
public "shouldFinalizeEntities"(): boolean
public "shouldKeepLiquids"(): boolean
get "boundingBox"(): $BoundingBox
get "knownShape"(): boolean
get "mirror"(): $Mirror
get "processors"(): $List<$StructureProcessor>
get "rotation"(): $Rotation
get "rotationPivot"(): $BlockPos
get "ignoreEntities"(): boolean
set "boundingBox"(value: $BoundingBox$$Type)
set "finalizeEntities"(value: boolean)
set "ignoreEntities"(value: boolean)
set "keepLiquids"(value: boolean)
set "knownShape"(value: boolean)
set "mirror"(value: $Mirror$$Type)
set "random"(value: $RandomSource$$Type)
set "rotation"(value: $Rotation$$Type)
set "rotationPivot"(value: $BlockPos$$Type)
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement" {
import { $BoundingBox, $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool$Projection"
import { $StructureProcessorList$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorList"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $EmptyPoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$EmptyPoolElement"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $StructurePoolElementType } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElementType"
import { $FeaturePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$FeaturePoolElement"
import { $PlacedFeature$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $LegacySinglePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$LegacySinglePoolElement"
import { $ListPoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$ListPoolElement"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $SinglePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$SinglePoolElement"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"

export class $StructurePoolElement {
static readonly "CODEC": $Codec<$StructurePoolElement>

public static "empty"(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>
public static "feature"(holder0: $Holder$$Type<$PlacedFeature$$Type>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>
public "getBoundingBox"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type): $BoundingBox
public "getGroundLevelDelta"(): integer
public "getProjection"(): $StructureTemplatePool$Projection
public "getShuffledJigsawBlocks"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type, randomSource3: $RandomSource$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "getSize"(structureTemplateManager0: $StructureTemplateManager$$Type, rotation1: $Rotation$$Type): $Vec3i
public "getType"(): $StructurePoolElementType<any>
public "handleDataMarker"(levelAccessor0: $LevelAccessor$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type, randomSource4: $RandomSource$$Type, boundingBox5: $BoundingBox$$Type): void
public static "legacy"(string0: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>
public static "legacy"(string0: string, holder1: $Holder$$Type<$StructureProcessorList$$Type>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>
public static "list"(list0: $List$$Type<$Function$$Type<$StructureTemplatePool$Projection$$Type, $StructurePoolElement$$Type>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>
public "place"(structureTemplateManager0: $StructureTemplateManager$$Type, worldGenLevel1: $WorldGenLevel$$Type, structureManager2: $StructureManager$$Type, chunkGenerator3: $ChunkGenerator$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type, rotation6: $Rotation$$Type, boundingBox7: $BoundingBox$$Type, randomSource8: $RandomSource$$Type, boolean9: boolean): boolean
public "setProjection"(projection0: $StructureTemplatePool$Projection$$Type): $StructurePoolElement
public static "single"(string0: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>
public static "single"(string0: string, holder1: $Holder$$Type<$StructureProcessorList$$Type>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>
get "groundLevelDelta"(): integer
get "projection"(): $StructureTemplatePool$Projection
get "type"(): $StructurePoolElementType<any>
set "projection"(value: $StructureTemplatePool$Projection$$Type)
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$FrequencyReductionMethod" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $StructurePlacement$FrequencyReductionMethod extends $Enum<$StructurePlacement$FrequencyReductionMethod> implements $StringRepresentable {
static readonly "CODEC": $Codec<$StructurePlacement$FrequencyReductionMethod>
static readonly "DEFAULT": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_1": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_2": $StructurePlacement$FrequencyReductionMethod
static readonly "LEGACY_TYPE_3": $StructurePlacement$FrequencyReductionMethod

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "shouldGenerate"(long0: long, int1: integer, int2: integer, int3: integer, float4: float): boolean
public static "valueOf"(string0: string): $StructurePlacement$FrequencyReductionMethod
public static "values"(): $StructurePlacement$FrequencyReductionMethod[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$LinearPosTest" {
import { $PosRuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTest"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $LinearPosTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$LinearPosTest>

constructor(float0: float, float1: float, int2: integer, int3: integer)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureCheck" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $StructureStart$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import { $StructureCheckResult } from "packages/net/minecraft/world/level/levelgen/structure/$StructureCheckResult"
import { $ChunkGeneratorStructureState$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"
import { $RandomState$$Type } from "packages/net/minecraft/world/level/levelgen/$RandomState"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $IStructureCheck } from "packages/org/embeddedt/modernfix/duck/$IStructureCheck"
import { $ChunkScanAccess$$Type } from "packages/net/minecraft/world/level/chunk/storage/$ChunkScanAccess"
import { $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $Structure$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $BiomeSource$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSource"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $StructureCheck implements $IStructureCheck {
constructor(chunkScanAccess0: $ChunkScanAccess$$Type, registryAccess1: $RegistryAccess$$Type, structureTemplateManager2: $StructureTemplateManager$$Type, resourceKey3: $ResourceKey$$Type<$Level>, chunkGenerator4: $ChunkGenerator$$Type, randomState5: $RandomState$$Type, levelHeightAccessor6: $LevelHeightAccessor$$Type, biomeSource7: $BiomeSource$$Type, long8: long, dataFixer9: $DataFixer$$Type)

public "checkStart"(chunkPos0: $ChunkPos$$Type, structure1: $Structure$$Type, boolean2: boolean): $StructureCheckResult
public "incrementReference"(chunkPos0: $ChunkPos$$Type, structure1: $Structure$$Type): void
public "mfix$setStructureState"(state: $ChunkGeneratorStructureState$$Type): void
public "onStructureLoad"(chunkPos0: $ChunkPos$$Type, map1: $Map$$Type<$Structure$$Type, $StructureStart$$Type>): void
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlockMatchTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$BlockMatchTest>

constructor(block0: $Block$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$NopProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NopProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$NopProcessor>
static readonly "INSTANCE": $NopProcessor

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer" {
import { $BoundingBox } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $StructurePieceSerializationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext"
import { $Record } from "packages/java/lang/$Record"
import { $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $StructurePiece, $StructurePiece$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PiecesContainer extends $Record {
constructor(list0: $List$$Type<$StructurePiece$$Type>)

public "calculateBoundingBox"(): $BoundingBox
public "isEmpty"(): boolean
public "isInsidePiece"(blockPos0: $BlockPos$$Type): boolean
public static "load"(listTag0: $ListTag$$Type, structurePieceSerializationContext1: $StructurePieceSerializationContext$$Type): $PiecesContainer
public "pieces"(): $List<$StructurePiece>
public "save"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type): $Tag
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$OceanRuinStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $OceanRuinStructure$Type, $OceanRuinStructure$Type$$Type } from "packages/net/minecraft/world/level/levelgen/structure/structures/$OceanRuinStructure$Type"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $OceanRuinStructure extends $Structure {
static readonly "CODEC": $Codec<$OceanRuinStructure>
readonly "biomeTemp": $OceanRuinStructure$Type
readonly "clusterProbability": float
readonly "largeProbability": float

constructor(structureSettings0: $Structure$StructureSettings$$Type, type1: $OceanRuinStructure$Type$$Type, float2: float, float3: float)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$LavaSubmergedBlockProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $LavaSubmergedBlockProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$LavaSubmergedBlockProcessor>
static readonly "INSTANCE": $LavaSubmergedBlockProcessor

constructor()

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$StrongholdStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $StrongholdStructure extends $Structure {
static readonly "CODEC": $Codec<$StrongholdStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$JungleTempleStructure" {
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $SinglePieceStructure } from "packages/net/minecraft/world/level/levelgen/structure/$SinglePieceStructure"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $JungleTempleStructure extends $SinglePieceStructure {
static readonly "CODEC": $Codec<$JungleTempleStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RandomBlockStateMatchTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RandomBlockStateMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$RandomBlockStateMatchTest>

constructor(blockState0: $BlockState$$Type, float1: float)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$RuinedPortalPiece$VerticalPlacement" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>
static readonly "IN_MOUNTAIN": $RuinedPortalPiece$VerticalPlacement
static readonly "IN_NETHER": $RuinedPortalPiece$VerticalPlacement
static readonly "ON_LAND_SURFACE": $RuinedPortalPiece$VerticalPlacement
static readonly "ON_OCEAN_FLOOR": $RuinedPortalPiece$VerticalPlacement
static readonly "PARTLY_BURIED": $RuinedPortalPiece$VerticalPlacement
static readonly "UNDERGROUND": $RuinedPortalPiece$VerticalPlacement

public static "byName"(string0: string): $RuinedPortalPiece$VerticalPlacement
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RuinedPortalPiece$VerticalPlacement
public static "values"(): $RuinedPortalPiece$VerticalPlacement[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$GravityProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GravityProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$GravityProcessor>

constructor(types0: $Heightmap$Types$$Type, int1: integer)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings" {
import { $HolderSet, $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $StructureSpawnOverride, $StructureSpawnOverride$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride"
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $TerrainAdjustment, $TerrainAdjustment$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$TerrainAdjustment"
import { $Record } from "packages/java/lang/$Record"
import { $GenerationStep$Decoration, $GenerationStep$Decoration$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Structure$StructureSettings extends $Record {
static readonly "CODEC": $MapCodec<$Structure$StructureSettings>

constructor(biomes: $HolderSet$$Type<$Biome$$Type>, spawnOverrides: $Map$$Type<$MobCategory$$Type, $StructureSpawnOverride$$Type>, step: $GenerationStep$Decoration$$Type, terrainAdaptation: $TerrainAdjustment$$Type)

public "biomes"(): $HolderSet<$Biome>
public "spawnOverrides"(): $Map<$MobCategory, $StructureSpawnOverride>
public "step"(): $GenerationStep$Decoration
public "terrainAdaptation"(): $TerrainAdjustment
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$Clear" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $RuleBlockEntityModifier } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Clear implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$Clear>

constructor()

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext" {
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $StructureTemplateManager, $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $Record } from "packages/java/lang/$Record"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ResourceManager, $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $StructurePieceSerializationContext extends $Record {
constructor(resourceManager0: $ResourceManager$$Type, registryAccess1: $RegistryAccess$$Type, structureTemplateManager2: $StructureTemplateManager$$Type)

public static "fromLevel"(serverLevel0: $ServerLevel$$Type): $StructurePieceSerializationContext
public "registryAccess"(): $RegistryAccess
public "resourceManager"(): $ResourceManager
public "structureTemplateManager"(): $StructureTemplateManager
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$JigsawStructure" {
import { $StructureTemplatePool$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $HeightProvider$$Type } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProvider"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $JigsawStructure extends $Structure {
static readonly "CODEC": $Codec<$JigsawStructure>
static readonly "MAX_TOTAL_STRUCTURE_RANGE": integer

constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, int2: integer, heightProvider3: $HeightProvider$$Type, boolean4: boolean, types5: $Heightmap$Types$$Type)
constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, optional2: $Optional$$Type<$ResourceLocation$$Type>, int3: integer, heightProvider4: $HeightProvider$$Type, boolean5: boolean, optional6: $Optional$$Type<$Heightmap$Types$$Type>, int7: integer)
constructor(structureSettings0: $Structure$StructureSettings$$Type, holder1: $Holder$$Type<$StructureTemplatePool$$Type>, int2: integer, heightProvider3: $HeightProvider$$Type, boolean4: boolean)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $List$$Type } from "packages/java/util/$List"
import { $ProcessorRule$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$ProcessorRule"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RuleProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$RuleProcessor>

constructor(list0: $List$$Type<$ProcessorRule$$Type>)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$ShipwreckStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ShipwreckStructure extends $Structure {
static readonly "CODEC": $Codec<$ShipwreckStructure>
readonly "isBeached": boolean

constructor(structureSettings0: $Structure$StructureSettings$$Type, boolean1: boolean)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureSet$StructureSelectionEntry" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Structure, $Structure$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $StructureSet$StructureSelectionEntry extends $Record {
static readonly "CODEC": $Codec<$StructureSet$StructureSelectionEntry>

constructor(holder0: $Holder$$Type<$Structure$$Type>, int1: integer)

public "structure"(): $Holder<$Structure>
public "weight"(): integer
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$NetherFortressStructure" {
import { $MobSpawnSettings$SpawnerData } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $WeightedRandomList } from "packages/net/minecraft/util/random/$WeightedRandomList"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $NetherFortressStructure extends $Structure {
static readonly "CODEC": $Codec<$NetherFortressStructure>
static readonly "FORTRESS_ENEMIES": $WeightedRandomList<$MobSpawnSettings$SpawnerData>

constructor(structureSettings0: $Structure$StructureSettings$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$ListPoolElement" {
import { $StructureTemplatePool$Projection$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool$Projection"
import { $List$$Type } from "packages/java/util/$List"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ListPoolElement extends $StructurePoolElement {
static readonly "CODEC": $Codec<$ListPoolElement>

constructor(list0: $List$$Type<$StructurePoolElement$$Type>, projection1: $StructureTemplatePool$Projection$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacement$ExclusionZone" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $StructureSet, $StructureSet$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructureSet"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

/** @deprecated */
export class $StructurePlacement$ExclusionZone extends $Record {
static readonly "CODEC": $Codec<$StructurePlacement$ExclusionZone>

constructor(holder0: $Holder$$Type<$StructureSet$$Type>, int1: integer)

public "chunkCount"(): integer
public "otherSet"(): $Holder<$StructureSet>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlockStateMatchTest" {
import { $RuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockStateMatchTest extends $RuleTest {
static readonly "CODEC": $Codec<$BlockStateMatchTest>

constructor(blockState0: $BlockState$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$BlackstoneReplaceProcessor" {
import { $StructureProcessor } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlackstoneReplaceProcessor extends $StructureProcessor {
static readonly "CODEC": $Codec<$BlackstoneReplaceProcessor>
static readonly "INSTANCE": $BlackstoneReplaceProcessor

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$Passthrough" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $RuleBlockEntityModifier } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Passthrough implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$Passthrough>
static readonly "INSTANCE": $Passthrough

constructor()

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece" {
import { $BoundingBox, $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $StructurePieceSerializationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $StructurePieceType, $StructurePieceType$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Mirror } from "packages/net/minecraft/world/level/block/$Mirror"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Rotation } from "packages/net/minecraft/world/level/block/$Rotation"
import { $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"
import { $StructurePieceAccessor$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePieceAccessor"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StructurePiece {
constructor(structurePieceType0: $StructurePieceType$$Type, compoundTag1: $CompoundTag$$Type)

public "addChildren"(structurePiece0: $StructurePiece$$Type, structurePieceAccessor1: $StructurePieceAccessor$$Type, randomSource2: $RandomSource$$Type): void
public static "createBoundingBox"(stream0: $Stream$$Type<$StructurePiece$$Type>): $BoundingBox
public "createTag"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type): $CompoundTag
public static "findCollisionPiece"(list0: $List$$Type<$StructurePiece$$Type>, boundingBox1: $BoundingBox$$Type): $StructurePiece
public "generateBox"(worldGenLevel0: $WorldGenLevel$$Type, boundingBox1: $BoundingBox$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, blockState8: $BlockState$$Type, blockState9: $BlockState$$Type, boolean10: boolean): void
public "getBoundingBox"(): $BoundingBox
public "getGenDepth"(): integer
public "getLocatorPosition"(): $BlockPos
public "getMirror"(): $Mirror
public "getOrientation"(): $Direction
public "getRotation"(): $Rotation
public "getType"(): $StructurePieceType
public "isCloseToChunk"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "move"(int0: integer, int1: integer, int2: integer): void
public "postProcess"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, blockPos6: $BlockPos$$Type): void
public static "reorient"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
public "setGenDepth"(int0: integer): void
public "setOrientation"(direction0: $Direction$$Type): void
get "boundingBox"(): $BoundingBox
get "genDepth"(): integer
get "locatorPosition"(): $BlockPos
get "mirror"(): $Mirror
get "orientation"(): $Direction
get "rotation"(): $Rotation
get "type"(): $StructurePieceType
set "genDepth"(value: integer)
set "orientation"(value: $Direction$$Type)
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessor" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import { $StructurePlaceSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ServerLevelAccessor$$Type } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $StructureTemplate$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

export class $StructureProcessor {
constructor()

public "finalizeProcessing"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, list3: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, structurePlaceSettings5: $StructurePlaceSettings$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "process"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structureBlockInfo3: $StructureTemplate$StructureBlockInfo$$Type, structureBlockInfo4: $StructureTemplate$StructureBlockInfo$$Type, structurePlaceSettings5: $StructurePlaceSettings$$Type, structureTemplate6: $StructureTemplate$$Type): $StructureTemplate$StructureBlockInfo
/** @deprecated */
public "processBlock"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structureBlockInfo3: $StructureTemplate$StructureBlockInfo$$Type, structureBlockInfo4: $StructureTemplate$StructureBlockInfo$$Type, structurePlaceSettings5: $StructurePlaceSettings$$Type): $StructureTemplate$StructureBlockInfo
public "processEntity"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, structureEntityInfo2: $StructureTemplate$StructureEntityInfo$$Type, structureEntityInfo3: $StructureTemplate$StructureEntityInfo$$Type, structurePlaceSettings4: $StructurePlaceSettings$$Type, structureTemplate5: $StructureTemplate$$Type): $StructureTemplate$StructureEntityInfo
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate" {
import { $BoundingBox } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IConnectionTemplate } from "packages/blusunrize/immersiveengineering/api/wires/$IConnectionTemplate"
import { $Vec3i, $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ObjectArrayList } from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureEntityInfo"
import { $StructureTemplate$Palette } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$Palette"
import { $StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevelAccessor$$Type } from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import { $TemplateAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$TemplateAccess"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $HolderGetter$$Type } from "packages/net/minecraft/core/$HolderGetter"
import { $StructureTemplateAccessor } from "packages/net/dries007/tfc/mixin/accessor/$StructureTemplateAccessor"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $StructurePlaceSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructurePlaceSettings"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $DiscreteVoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"

export class $StructureTemplate implements $StructureTemplateAccessor, $TemplateAccess, $IConnectionTemplate {
static readonly "BLOCKS_TAG": string
static readonly "BLOCK_TAG_NBT": string
static readonly "BLOCK_TAG_POS": string
static readonly "BLOCK_TAG_STATE": string
static readonly "ENTITIES_TAG": string
static readonly "ENTITY_TAG_BLOCKPOS": string
static readonly "ENTITY_TAG_NBT": string
static readonly "ENTITY_TAG_POS": string
static readonly "PALETTE_LIST_TAG": string
static readonly "PALETTE_TAG": string
static readonly "SIZE_TAG": string
readonly "entityInfoList": $List<$StructureTemplate$StructureEntityInfo>
readonly "palettes": $List<$StructureTemplate$Palette>

constructor()

public "calculateConnectedPosition"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type, structurePlaceSettings2: $StructurePlaceSettings$$Type, blockPos3: $BlockPos$$Type): $BlockPos
public static "calculateRelativePosition"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "fillFromWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, vec3i2: $Vec3i$$Type, boolean3: boolean, block4: $Block$$Type): void
public "filterBlocks"(blockPos0: $BlockPos$$Type, structurePlaceSettings1: $StructurePlaceSettings$$Type, block2: $Block$$Type): $List<$StructureTemplate$StructureBlockInfo>
public "filterBlocks"(blockPos0: $BlockPos$$Type, structurePlaceSettings1: $StructurePlaceSettings$$Type, block2: $Block$$Type, boolean3: boolean): $ObjectArrayList<$StructureTemplate$StructureBlockInfo>
public "getAuthor"(): string
public "getBoundingBox"(structurePlaceSettings0: $StructurePlaceSettings$$Type, blockPos1: $BlockPos$$Type): $BoundingBox
public "getBoundingBox"(blockPos0: $BlockPos$$Type, rotation1: $Rotation$$Type, blockPos2: $BlockPos$$Type, mirror3: $Mirror$$Type): $BoundingBox
public "getSize"(rotation0: $Rotation$$Type): $Vec3i
public "getSize"(): $Vec3i
public "getStoredConnections"(): $List<any>
public "getZeroPositionWithTransform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type): $BlockPos
public static "getZeroPositionWithTransform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, int3: integer, int4: integer): $BlockPos
public "handler$emn000$addConnectionsToWorld"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, randomSource4: $RandomSource$$Type, int5: integer, callbackInfoReturnable6: $CallbackInfoReturnable$$Type<any>): void
public "handler$emn000$readConnectionsFromNBT"(holderGetter0: $HolderGetter$$Type<any>, compoundTag1: $CompoundTag$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$emn000$takeConnectionsFromWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, vec3i2: $Vec3i$$Type, boolean3: boolean, block4: $Block$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "handler$emn000$writeConnectionsToNBT"(compoundTag0: $CompoundTag$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "load"(holderGetter0: $HolderGetter$$Type<$Block$$Type>, compoundTag1: $CompoundTag$$Type): void
public "placeInWorld"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, randomSource4: $RandomSource$$Type, int5: integer): boolean
/** @deprecated */
public static "processBlockInfos"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>): $List<$StructureTemplate$StructureBlockInfo>
public static "processBlockInfos"(serverLevelAccessor0: $ServerLevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureBlockInfo$$Type>, structureTemplate5: $StructureTemplate$$Type): $List<$StructureTemplate$StructureBlockInfo>
public static "processEntityInfos"(structureTemplate0: $StructureTemplate$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, structurePlaceSettings3: $StructurePlaceSettings$$Type, list4: $List$$Type<$StructureTemplate$StructureEntityInfo$$Type>): $List<$StructureTemplate$StructureEntityInfo>
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setAuthor"(string0: string): void
public static "transform"(blockPos0: $BlockPos$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, blockPos3: $BlockPos$$Type): $BlockPos
public static "transform"(vec30: $Vec3$$Type, mirror1: $Mirror$$Type, rotation2: $Rotation$$Type, blockPos3: $BlockPos$$Type): $Vec3
public static "transformedVec3d"(structurePlaceSettings0: $StructurePlaceSettings$$Type, vec31: $Vec3$$Type): $Vec3
public static "updateShapeAtEdge"(levelAccessor0: $LevelAccessor$$Type, int1: integer, discreteVoxelShape2: $DiscreteVoxelShape$$Type, int3: integer, int4: integer, int5: integer): void
get "author"(): string
get "size"(): $Vec3i
get "storedConnections"(): $List<any>
set "author"(value: string)
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$LegacySinglePoolElement" {
import { $SinglePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$SinglePoolElement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $LegacySinglePoolElement extends $SinglePoolElement {
static readonly "CODEC": $Codec<$LegacySinglePoolElement>

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/placement/$RandomSpreadType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RandomSpreadType extends $Enum<$RandomSpreadType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$RandomSpreadType>
static readonly "LINEAR": $RandomSpreadType
static readonly "TRIANGULAR": $RandomSpreadType

public "evaluate"(randomSource0: $RandomSource$$Type, int1: integer): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RandomSpreadType
public static "values"(): $RandomSpreadType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTest" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $RuleTest {
static readonly "CODEC": $Codec<$RuleTest>

constructor()

public "test"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type): boolean
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$RuinedPortalStructure" {
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $RuinedPortalStructure$Setup$$Type } from "packages/net/minecraft/world/level/levelgen/structure/structures/$RuinedPortalStructure$Setup"

export class $RuinedPortalStructure extends $Structure {
static readonly "CODEC": $Codec<$RuinedPortalStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type, list1: $List$$Type<$RuinedPortalStructure$Setup$$Type>)
constructor(structureSettings0: $Structure$StructureSettings$$Type, setup1: $RuinedPortalStructure$Setup$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/structures/$MineshaftStructure" {
import { $MineshaftStructure$Type$$Type } from "packages/net/minecraft/world/level/levelgen/structure/structures/$MineshaftStructure$Type"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Optional } from "packages/java/util/$Optional"
import { $Structure$GenerationStub } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationStub"
import { $Structure$GenerationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$GenerationContext"
import { $Structure$StructureSettings$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MineshaftStructure extends $Structure {
static readonly "CODEC": $Codec<$MineshaftStructure>

constructor(structureSettings0: $Structure$StructureSettings$$Type, type1: $MineshaftStructure$Type$$Type)

public "findGenerationPoint"(generationContext0: $Structure$GenerationContext$$Type): $Optional<$Structure$GenerationStub>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$EmptyPoolElement" {
import { $StructurePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $EmptyPoolElement extends $StructurePoolElement {
static readonly "CODEC": $Codec<$EmptyPoolElement>
static readonly "INSTANCE": $EmptyPoolElement

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$AxisAlignedLinearPosTest" {
import { $PosRuleTest } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTest"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AxisAlignedLinearPosTest extends $PosRuleTest {
static readonly "CODEC": $Codec<$AxisAlignedLinearPosTest>

constructor(float0: float, float1: float, int2: integer, int3: integer, axis4: $Direction$Axis$$Type)

}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructurePieceAccessor" {
import { $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $StructurePiece, $StructurePiece$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"

export interface $StructurePieceAccessor {
"addPiece"(structurePiece0: $StructurePiece$$Type): void
"findCollisionPiece"(boundingBox0: $BoundingBox$$Type): $StructurePiece
}

export namespace $StructurePieceAccessor {
const probejs$$marker: never
}
export abstract class $StructurePieceAccessor$$Static implements $StructurePieceAccessor {
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/pools/$SinglePoolElement" {
import { $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $AccessorSinglePoolElement } from "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorSinglePoolElement"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $StructurePoolElement } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $StructureTemplate$StructureBlockInfo } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"
import { $WaystoneStructurePoolElement } from "packages/net/blay09/mods/waystones/worldgen/$WaystoneStructurePoolElement"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SinglePoolElement extends $StructurePoolElement implements $WaystoneStructurePoolElement, $AccessorSinglePoolElement {
static readonly "CODEC": $Codec<$SinglePoolElement>

public "getDataMarkers"(structureTemplateManager0: $StructureTemplateManager$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type, boolean3: boolean): $List<$StructureTemplate$StructureBlockInfo>
public "handler$ekf000$place"(structureTemplateManager0: $StructureTemplateManager$$Type, worldGenLevel1: $WorldGenLevel$$Type, structureManager2: $StructureManager$$Type, chunkGenerator3: $ChunkGenerator$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type, rotation6: $Rotation$$Type, boundingBox7: $BoundingBox$$Type, randomSource8: $RandomSource$$Type, boolean9: boolean, callbackInfoReturnable10: $CallbackInfoReturnable$$Type<any>): void
public "waystones$isWaystone"(): boolean
public "waystones$setIsWaystone"(boolean0: boolean): void
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$AppendStatic" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $RuleBlockEntityModifier } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifier"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AppendStatic implements $RuleBlockEntityModifier {
static readonly "CODEC": $Codec<$AppendStatic>

constructor(compoundTag0: $CompoundTag$$Type)

public "apply"(randomSource0: $RandomSource$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
public "getType"(): $RuleBlockEntityModifierType<any>
get "type"(): $RuleBlockEntityModifierType<any>
}
}

declare module "packages/net/minecraft/world/level/levelgen/structure/$StructureStart" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $StructurePieceSerializationContext$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext"
import { $BoundingBox, $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $StructurePiece } from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import { $WorldGenLevel$$Type } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Structure, $Structure$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"
import { $PiecesContainer$$Type } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$PiecesContainer"

export class $StructureStart {
static readonly "INVALID_START": $StructureStart
static readonly "INVALID_START_ID": string

constructor(structure0: $Structure$$Type, chunkPos1: $ChunkPos$$Type, int2: integer, piecesContainer3: $PiecesContainer$$Type)

public "addReference"(): void
public "canBeReferenced"(): boolean
public "createTag"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, chunkPos1: $ChunkPos$$Type): $CompoundTag
public "getBoundingBox"(): $BoundingBox
public "getChunkPos"(): $ChunkPos
public "getPieces"(): $List<$StructurePiece>
public "getReferences"(): integer
public "getStructure"(): $Structure
public "handler$cje000$injectReference"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, callbackInfo6: $CallbackInfo$$Type): void
public "handler$cje000$resetReference"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type, callbackInfo6: $CallbackInfo$$Type): void
public "isValid"(): boolean
public static "loadStaticStart"(structurePieceSerializationContext0: $StructurePieceSerializationContext$$Type, compoundTag1: $CompoundTag$$Type, long2: long): $StructureStart
public "placeInChunk"(worldGenLevel0: $WorldGenLevel$$Type, structureManager1: $StructureManager$$Type, chunkGenerator2: $ChunkGenerator$$Type, randomSource3: $RandomSource$$Type, boundingBox4: $BoundingBox$$Type, chunkPos5: $ChunkPos$$Type): void
get "boundingBox"(): $BoundingBox
get "chunkPos"(): $ChunkPos
get "pieces"(): $List<$StructurePiece>
get "references"(): integer
get "structure"(): $Structure
get "valid"(): boolean
}
}

