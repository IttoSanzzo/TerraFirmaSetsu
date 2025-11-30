declare module "packages/net/minecraft/world/level/biome/$Climate$TargetPoint" {
import { $Record } from "packages/java/lang/$Record"

export class $Climate$TargetPoint extends $Record {
constructor(long0: long, long1: long, long2: long, long3: long, long4: long, long5: long)

public "continentalness"(): long
public "depth"(): long
public "erosion"(): long
public "humidity"(): long
public "temperature"(): long
public "weirdness"(): long
}
}

declare module "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData" {
import { $Weight$$Type } from "packages/net/minecraft/util/random/$Weight"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $WeightedEntry$IntrusiveBase } from "packages/net/minecraft/util/random/$WeightedEntry$IntrusiveBase"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $WeightedEntry$Wrapper } from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
static readonly "CODEC": $Codec<$MobSpawnSettings$SpawnerData>
readonly "maxCount": integer
readonly "minCount": integer
readonly "type": $EntityType<any>

constructor(entityType0: $EntityType$$Type<any>, int1: integer, int2: integer, int3: integer)
constructor(entityType0: $EntityType$$Type<any>, weight1: $Weight$$Type, int2: integer, int3: integer)

public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeManager" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BiomeManager$NoiseBiomeSource$$Type } from "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource"

export class $BiomeManager {
static readonly "CHUNK_CENTER_QUART": integer
readonly "biomeZoomSeed": long

constructor(noiseBiomeSource0: $BiomeManager$NoiseBiomeSource$$Type, long1: long)

public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getNoiseBiomeAtPosition"(double0: double, double1: double, double2: double): $Holder<$Biome>
public "getNoiseBiomeAtPosition"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getNoiseBiomeAtQuart"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public static "obfuscateSeed"(long0: long): long
public "withDifferentSource"(noiseBiomeSource0: $BiomeManager$NoiseBiomeSource$$Type): $BiomeManager
}
}

declare module "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $Record } from "packages/java/lang/$Record"
import { $Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type } from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export class $Biome$ClimateSettings extends $Record {
static readonly "CODEC": $MapCodec<$Biome$ClimateSettings>
"downfall": float
"hasPrecipitation": boolean
"temperature": float
"temperatureModifier": $Biome$TemperatureModifier

constructor(hasPrecipitation: boolean, temperature: float, temperatureModifier: $Biome$TemperatureModifier$$Type, downfall: float)

public "downfall"(): float
public "hasPrecipitation"(): boolean
public "temperature"(): float
public "temperatureModifier"(): $Biome$TemperatureModifier
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $IExtensibleEnum } from "packages/net/minecraftforge/common/$IExtensibleEnum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier$ColorModifier"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
static readonly "CODEC": $Codec<$BiomeSpecialEffects$GrassColorModifier>
static readonly "DARK_FOREST": $BiomeSpecialEffects$GrassColorModifier
static readonly "NONE": $BiomeSpecialEffects$GrassColorModifier
static readonly "SWAMP": $BiomeSpecialEffects$GrassColorModifier

public static "byName"(string0: string): $BiomeSpecialEffects$GrassColorModifier
public static "create"(string0: string, string1: string, colorModifier2: $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Type): $BiomeSpecialEffects$GrassColorModifier
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public "init"(): void
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyColor"(double0: double, double1: double, int2: integer): integer
public static "valueOf"(string0: string): $BiomeSpecialEffects$GrassColorModifier
public static "values"(): $BiomeSpecialEffects$GrassColorModifier[]
get "name"(): string
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/biome/$MultiNoiseBiomeSourceParameterList$Preset" {
import { $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider, $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Type } from "packages/net/minecraft/world/level/biome/$MultiNoiseBiomeSourceParameterList$Preset$SourceProvider"
import { $Record } from "packages/java/lang/$Record"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
static readonly "CODEC": $Codec<$MultiNoiseBiomeSourceParameterList$Preset>
static readonly "NETHER": $MultiNoiseBiomeSourceParameterList$Preset
static readonly "OVERWORLD": $MultiNoiseBiomeSourceParameterList$Preset

constructor(resourceLocation0: $ResourceLocation$$Type, sourceProvider1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Type)

public "id"(): $ResourceLocation
public "provider"(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider
public "usedBiomes"(): $Stream<$ResourceKey<$Biome>>
}
}

declare module "packages/net/minecraft/world/level/biome/$MultiNoiseBiomeSourceParameterList$Preset$SourceProvider" {
import { $Climate$ParameterList } from "packages/net/minecraft/world/level/biome/$Climate$ParameterList"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
"apply"<T>(function0: $Function$$Type<$ResourceKey$$Type<$Biome$$Type>, T>): $Climate$ParameterList<T>
}

export namespace $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
const probejs$$marker: never
}
export abstract class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider$$Static implements $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier$ColorModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
"modifyGrassColor"(double0: double, double1: double, int2: integer): integer
}

export namespace $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
const probejs$$marker: never
}
export abstract class $BiomeSpecialEffects$GrassColorModifier$ColorModifier$$Static implements $BiomeSpecialEffects$GrassColorModifier$ColorModifier {
}
}

declare module "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost" {
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MobSpawnSettings$MobSpawnCost extends $Record {
static readonly "CODEC": $Codec<$MobSpawnSettings$MobSpawnCost>

constructor(energyBudget: double, charge: double)

public "charge"(): double
public "energyBudget"(): double
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings$PlainBuilder" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $PlacedFeature, $PlacedFeature$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $GenerationStep$Decoration$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import { $BiomeGenerationSettings } from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import { $List } from "packages/java/util/$List"
import { $GenerationStep$Carving$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import { $ConfiguredWorldCarver$$Type } from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"

export class $BiomeGenerationSettings$PlainBuilder {
readonly "features": $List<$List<$Holder<$PlacedFeature>>>

constructor()

public "addCarver"(carving0: $GenerationStep$Carving$$Type, holder1: $Holder$$Type<$ConfiguredWorldCarver$$Type<any>>): $BiomeGenerationSettings$PlainBuilder
public "addFeature"(decoration0: $GenerationStep$Decoration$$Type, holder1: $Holder$$Type<$PlacedFeature$$Type>): $BiomeGenerationSettings$PlainBuilder
public "addFeature"(int0: integer, holder1: $Holder$$Type<$PlacedFeature$$Type>): $BiomeGenerationSettings$PlainBuilder
public "build"(): $BiomeGenerationSettings
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeSource" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Climate$Sampler$$Type } from "packages/net/minecraft/world/level/biome/$Climate$Sampler"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BiomeResolver } from "packages/net/minecraft/world/level/biome/$BiomeResolver"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $List$$Type } from "packages/java/util/$List"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BiomeSource implements $BiomeResolver {
static "CODEC": $Codec<$BiomeSource>
"possibleBiomes": $Supplier<$Set<$Holder<$Biome>>>

public "addDebugInfo"(list0: $List$$Type<string>, blockPos1: $BlockPos$$Type, sampler2: $Climate$Sampler$$Type): void
public "findBiomeHorizontal"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, predicate5: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, randomSource6: $RandomSource$$Type, boolean7: boolean, sampler8: $Climate$Sampler$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "findBiomeHorizontal"(int0: integer, int1: integer, int2: integer, int3: integer, predicate4: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, randomSource5: $RandomSource$$Type, sampler6: $Climate$Sampler$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "findClosestBiome3d"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer, predicate4: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, sampler5: $Climate$Sampler$$Type, levelReader6: $LevelReader$$Type): $Pair<$BlockPos, $Holder<$Biome>>
public "getBiomesWithin"(int0: integer, int1: integer, int2: integer, int3: integer, sampler4: $Climate$Sampler$$Type): $Set<$Holder<$Biome>>
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer, sampler3: $Climate$Sampler$$Type): $Holder<$Biome>
public "possibleBiomes"(): $Set<$Holder<$Biome>>
}
}

declare module "packages/net/minecraft/world/level/biome/$Climate$Sampler" {
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Climate$ParameterPoint, $Climate$ParameterPoint$$Type } from "packages/net/minecraft/world/level/biome/$Climate$ParameterPoint"
import { $Climate$TargetPoint } from "packages/net/minecraft/world/level/biome/$Climate$TargetPoint"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $DensityFunction, $DensityFunction$$Type } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"

export class $Climate$Sampler extends $Record {
constructor(densityFunction0: $DensityFunction$$Type, densityFunction1: $DensityFunction$$Type, densityFunction2: $DensityFunction$$Type, densityFunction3: $DensityFunction$$Type, densityFunction4: $DensityFunction$$Type, densityFunction5: $DensityFunction$$Type, list6: $List$$Type<$Climate$ParameterPoint$$Type>)

public "continentalness"(): $DensityFunction
public "depth"(): $DensityFunction
public "erosion"(): $DensityFunction
public "findSpawnPosition"(): $BlockPos
public "humidity"(): $DensityFunction
public "sample"(int0: integer, int1: integer, int2: integer): $Climate$TargetPoint
public "spawnTarget"(): $List<$Climate$ParameterPoint>
public "temperature"(): $DensityFunction
public "weirdness"(): $DensityFunction
}
}

declare module "packages/net/minecraft/world/level/biome/$Biome$Precipitation" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> {
static readonly "NONE": $Biome$Precipitation
static readonly "RAIN": $Biome$Precipitation
static readonly "SNOW": $Biome$Precipitation

public static "valueOf"(string0: string): $Biome$Precipitation
public static "values"(): $Biome$Precipitation[]
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $PlacedFeature, $PlacedFeature$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $Set } from "packages/java/util/$Set"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $List } from "packages/java/util/$List"
import { $ConfiguredWorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import { $GenerationStep$Carving, $GenerationStep$Carving$$Type } from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $BiomeGenerationSettings {
static readonly "CODEC": $MapCodec<$BiomeGenerationSettings>
static readonly "EMPTY": $BiomeGenerationSettings
"features": $List<$HolderSet<$PlacedFeature>>

public "features"(): $List<$HolderSet<$PlacedFeature>>
public "getCarvers"(carving0: $GenerationStep$Carving$$Type): $Iterable<$Holder<$ConfiguredWorldCarver<any>>>
public "getCarvingStages"(): $Set<$GenerationStep$Carving>
public "getFlowerFeatures"(): $List<$ConfiguredFeature<any, any>>
public "hasFeature"(placedFeature0: $PlacedFeature$$Type): boolean
get "carvingStages"(): $Set<$GenerationStep$Carving>
get "flowerFeatures"(): $List<$ConfiguredFeature<any, any>>
}
}

declare module "packages/net/minecraft/world/level/biome/$AmbientMoodSettings" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AmbientMoodSettings {
static readonly "CODEC": $Codec<$AmbientMoodSettings>
static readonly "LEGACY_CAVE_SETTINGS": $AmbientMoodSettings

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, int1: integer, int2: integer, double3: double)

public "getBlockSearchExtent"(): integer
public "getSoundEvent"(): $Holder<$SoundEvent>
public "getSoundPositionOffset"(): double
public "getTickDelay"(): integer
get "blockSearchExtent"(): integer
get "soundEvent"(): $Holder<$SoundEvent>
get "soundPositionOffset"(): double
get "tickDelay"(): integer
}
}

declare module "packages/net/minecraft/world/level/biome/$AmbientParticleSettings" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $AmbientParticleSettings {
static readonly "CODEC": $Codec<$AmbientParticleSettings>

constructor(particleOptions0: $ParticleOptions$$Type, float1: float)

public "canSpawn"(randomSource0: $RandomSource$$Type): boolean
public "getOptions"(): $ParticleOptions
get "options"(): $ParticleOptions
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"

export interface $BiomeManager$NoiseBiomeSource {
"getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
}

export namespace $BiomeManager$NoiseBiomeSource {
const probejs$$marker: never
}
export abstract class $BiomeManager$NoiseBiomeSource$$Static implements $BiomeManager$NoiseBiomeSource {
}
}

declare module "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $AmbientAdditionsSettings {
static readonly "CODEC": $Codec<$AmbientAdditionsSettings>

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, double1: double)

public "getSoundEvent"(): $Holder<$SoundEvent>
public "getTickChance"(): double
get "soundEvent"(): $Holder<$SoundEvent>
get "tickChance"(): double
}
}

declare module "packages/net/minecraft/world/level/biome/$Climate$ParameterList" {
import { $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $Climate$ParameterPoint, $Climate$ParameterPoint$$Type } from "packages/net/minecraft/world/level/biome/$Climate$ParameterPoint"
import { $Climate$TargetPoint$$Type } from "packages/net/minecraft/world/level/biome/$Climate$TargetPoint"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Climate$ParameterList<T> {
constructor(list0: $List$$Type<$Pair$$Type<$Climate$ParameterPoint$$Type, T>>)

public static "codec"<T>(mapCodec0: $MapCodec$$Type<T>): $Codec<$Climate$ParameterList<T>>
public "findValue"(targetPoint0: $Climate$TargetPoint$$Type): T
public "findValueBruteForce"(targetPoint0: $Climate$TargetPoint$$Type): T
public "findValueIndex"(targetPoint0: $Climate$TargetPoint$$Type): T
public "values"(): $List<$Pair<$Climate$ParameterPoint, T>>
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Music, $Music$$Type } from "packages/net/minecraft/sounds/$Music"
import { $AmbientMoodSettings, $AmbientMoodSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import { $AmbientParticleSettings, $AmbientParticleSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export class $BiomeSpecialEffects {
static readonly "CODEC": $Codec<$BiomeSpecialEffects>

public "getAmbientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
public "getAmbientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
public "getAmbientMoodSettings"(): $Optional<$AmbientMoodSettings>
public "getAmbientParticleSettings"(): $Optional<$AmbientParticleSettings>
public "getBackgroundMusic"(): $Optional<$Music>
public "getFogColor"(): integer
public "getFoliageColorOverride"(): $Optional<integer>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getGrassColorOverride"(): $Optional<integer>
public "getSkyColor"(): integer
public "getWaterColor"(): integer
public "getWaterFogColor"(): integer
get "ambientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
set "ambientAdditionsSettings"(value: $Optional$$Type<$AmbientAdditionsSettings$$Type>)
get "ambientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
set "ambientLoopSoundEvent"(value: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>)
get "ambientMoodSettings"(): $Optional<$AmbientMoodSettings>
set "ambientMoodSettings"(value: $Optional$$Type<$AmbientMoodSettings$$Type>)
get "ambientParticleSettings"(): $Optional<$AmbientParticleSettings>
set "ambientParticleSettings"(value: $Optional$$Type<$AmbientParticleSettings$$Type>)
get "backgroundMusic"(): $Optional<$Music>
set "backgroundMusic"(value: $Optional$$Type<$Music$$Type>)
get "fogColor"(): integer
set "fogColor"(value: integer)
get "foliageColorOverride"(): $Optional<integer>
set "foliageColorOverride"(value: $Optional$$Type<integer>)
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
set "grassColorModifier"(value: $BiomeSpecialEffects$GrassColorModifier$$Type)
get "grassColorOverride"(): $Optional<integer>
set "grassColorOverride"(value: $Optional$$Type<integer>)
get "skyColor"(): integer
set "skyColor"(value: integer)
get "waterColor"(): integer
set "waterColor"(value: integer)
get "waterFogColor"(): integer
set "waterFogColor"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeResolver" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Climate$Sampler$$Type } from "packages/net/minecraft/world/level/biome/$Climate$Sampler"

export interface $BiomeResolver {
"getNoiseBiome"(int0: integer, int1: integer, int2: integer, sampler3: $Climate$Sampler$$Type): $Holder<$Biome>
}

export namespace $BiomeResolver {
const probejs$$marker: never
}
export abstract class $BiomeResolver$$Static implements $BiomeResolver {
}
}

declare module "packages/net/minecraft/world/level/biome/$FeatureSorter$StepFeatureData" {
import { $Record } from "packages/java/lang/$Record"
import { $PlacedFeature, $PlacedFeature$$Type } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $ToIntFunction, $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $FeatureSorter$StepFeatureData extends $Record {
constructor(list0: $List$$Type<$PlacedFeature$$Type>, toIntFunction1: $ToIntFunction$$Type<$PlacedFeature$$Type>)

public "features"(): $List<$PlacedFeature>
public "indexMapping"(): $ToIntFunction<$PlacedFeature>
}
}

declare module "packages/net/minecraft/world/level/biome/$Climate$ParameterPoint" {
import { $Climate$Parameter, $Climate$Parameter$$Type } from "packages/net/minecraft/world/level/biome/$Climate$Parameter"
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Climate$ParameterPoint extends $Record {
static readonly "CODEC": $Codec<$Climate$ParameterPoint>

constructor(parameter0: $Climate$Parameter$$Type, parameter1: $Climate$Parameter$$Type, parameter2: $Climate$Parameter$$Type, parameter3: $Climate$Parameter$$Type, parameter4: $Climate$Parameter$$Type, parameter5: $Climate$Parameter$$Type, long6: long)

public "continentalness"(): $Climate$Parameter
public "depth"(): $Climate$Parameter
public "erosion"(): $Climate$Parameter
public "humidity"(): $Climate$Parameter
public "modifyExpressionValue$eim000$giveMinimumOffsetIfDisabled"(long0: long): long
public "modifyReturnValue$eim000$dummyOutDisabledParameters"(list0: $List$$Type<any>): $List<any>
public "offset"(): long
public "temperature"(): $Climate$Parameter
public "weirdness"(): $Climate$Parameter
public "wrapOperation$eim000$giveMinimumDistanceForDisabledParameters"(parameter0: $Climate$Parameter$$Type, long1: long, operation2: $Operation$$Type<any>): long
}
}

declare module "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$Builder" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Music, $Music$$Type } from "packages/net/minecraft/sounds/$Music"
import { $AmbientParticleSettings, $AmbientParticleSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import { $AmbientMoodSettings, $AmbientMoodSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type } from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $BiomeSpecialEffectsBuilderForgeAccessor } from "packages/fuzs/puzzleslib/mixin/accessor/$BiomeSpecialEffectsBuilderForgeAccessor"
import { $BiomeSpecialEffects } from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"
import { $BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type } from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export class $BiomeSpecialEffects$Builder implements $BiomeSpecialEffectsBuilderForgeAccessor {
"ambientParticle": $Optional<$AmbientParticleSettings>
"backgroundMusic": $Optional<$Music>
"fogColor": $OptionalInt
"foliageColorOverride": $Optional<integer>
"grassColorModifier": $BiomeSpecialEffects$GrassColorModifier
"grassColorOverride": $Optional<integer>
"skyColor": $OptionalInt
"waterColor": $OptionalInt
"waterFogColor": $OptionalInt

constructor()

public "ambientAdditionsSound"(ambientAdditionsSettings0: $AmbientAdditionsSettings$$Type): $BiomeSpecialEffects$Builder
public "ambientLoopSound"(holder0: $Holder$$Type<$SoundEvent$$Type>): $BiomeSpecialEffects$Builder
public "ambientMoodSound"(ambientMoodSettings0: $AmbientMoodSettings$$Type): $BiomeSpecialEffects$Builder
public "ambientParticle"(ambientParticleSettings0: $AmbientParticleSettings$$Type): $BiomeSpecialEffects$Builder
public "backgroundMusic"(music0: $Music$$Type): $BiomeSpecialEffects$Builder
public "build"(): $BiomeSpecialEffects
public "fogColor"(int0: integer): $BiomeSpecialEffects$Builder
public "foliageColorOverride"(int0: integer): $BiomeSpecialEffects$Builder
public "grassColorModifier"(grassColorModifier0: $BiomeSpecialEffects$GrassColorModifier$$Type): $BiomeSpecialEffects$Builder
public "grassColorOverride"(int0: integer): $BiomeSpecialEffects$Builder
public "skyColor"(int0: integer): $BiomeSpecialEffects$Builder
public "waterColor"(int0: integer): $BiomeSpecialEffects$Builder
public "waterFogColor"(int0: integer): $BiomeSpecialEffects$Builder
get "ambientAdditionsSettings"(): $Optional<$AmbientAdditionsSettings>
set "ambientAdditionsSettings"(value: $Optional$$Type<$AmbientAdditionsSettings$$Type>)
get "ambientLoopSoundEvent"(): $Optional<$Holder<$SoundEvent>>
set "ambientLoopSoundEvent"(value: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>)
get "ambientMoodSettings"(): $Optional<$AmbientMoodSettings>
set "ambientMoodSettings"(value: $Optional$$Type<$AmbientMoodSettings$$Type>)
}
}

declare module "packages/net/minecraft/world/level/biome/$MobSpawnSettings$Builder" {
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $MobSpawnSettings } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import { $List } from "packages/java/util/$List"
import { $MobSpawnSettings$MobSpawnCost } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import { $MobSpawnSettingsBuilderForgeAccessor } from "packages/fuzs/puzzleslib/mixin/accessor/$MobSpawnSettingsBuilderForgeAccessor"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"
import { $Map } from "packages/java/util/$Map"

export class $MobSpawnSettings$Builder implements $MobSpawnSettingsBuilderForgeAccessor {
"creatureGenerationProbability": float
readonly "mobSpawnCosts": $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
readonly "spawners": $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>

constructor()

public "addMobCharge"(entityType0: $EntityType$$Type<any>, double1: double, double2: double): $MobSpawnSettings$Builder
public "addSpawn"(mobCategory0: $MobCategory$$Type, spawnerData1: $MobSpawnSettings$SpawnerData$$Type): $MobSpawnSettings$Builder
public "build"(): $MobSpawnSettings
public "creatureGenerationProbability"(float0: float): $MobSpawnSettings$Builder
}
}

declare module "packages/net/minecraft/world/level/biome/$Climate$Parameter" {
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Climate$Parameter extends $Record {
static readonly "CODEC": $Codec<$Climate$Parameter>

constructor(long0: long, long1: long)

public "distance"(long0: long): long
public "distance"(parameter0: $Climate$Parameter$$Type): long
public "max"(): long
public "min"(): long
public static "point"(float0: float): $Climate$Parameter
public static "span"(float0: float, float1: float): $Climate$Parameter
public static "span"(parameter0: $Climate$Parameter$$Type, parameter1: $Climate$Parameter$$Type): $Climate$Parameter
public "span"(parameter0: $Climate$Parameter$$Type): $Climate$Parameter
}
}

declare module "packages/net/minecraft/world/level/biome/$MobSpawnSettings" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnSettings$SpawnerData } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $Set } from "packages/java/util/$Set"
import { $MobSpawnSettings$MobSpawnCost } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import { $WeightedRandomList } from "packages/net/minecraft/util/random/$WeightedRandomList"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"

export class $MobSpawnSettings {
static readonly "CODEC": $MapCodec<$MobSpawnSettings>
static readonly "EMPTY": $MobSpawnSettings
static readonly "EMPTY_MOB_LIST": $WeightedRandomList<$MobSpawnSettings$SpawnerData>

public "getCreatureProbability"(): float
public "getEntityTypes"(): $Set<$EntityType<any>>
public "getMobSpawnCost"(entityType0: $EntityType$$Type<any>): $MobSpawnSettings$MobSpawnCost
public "getMobs"(mobCategory0: $MobCategory$$Type): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getSpawnerTypes"(): $Set<$MobCategory>
get "creatureProbability"(): float
get "entityTypes"(): $Set<$EntityType<any>>
get "spawnerTypes"(): $Set<$MobCategory>
}
}

declare module "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
static readonly "CODEC": $Codec<$Biome$TemperatureModifier>
static readonly "FROZEN": $Biome$TemperatureModifier
static readonly "NONE": $Biome$TemperatureModifier

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "modifyTemperature"(blockPos0: $BlockPos$$Type, float1: float): float
public static "valueOf"(string0: string): $Biome$TemperatureModifier
public static "values"(): $Biome$TemperatureModifier[]
get "name"(): string
get "serializedName"(): string
}
}

