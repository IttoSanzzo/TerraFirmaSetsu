declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory" {
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BuilderFactory {
"createBuilder"(resourceLocation0: $ResourceLocation$$Type): $BuilderBase<any>
}

export namespace $BuilderFactory {
const probejs$$marker: never
}
export abstract class $BuilderFactory$$Static implements $BuilderFactory {
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderBase" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LangEventJS$$Type } from "packages/dev/latvian/mods/kubejs/client/$LangEventJS"
import { $DataJsonGenerator$$Type } from "packages/dev/latvian/mods/kubejs/generator/$DataJsonGenerator"
import { $AssetJsonGenerator$$Type } from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $RegistryInfo } from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BuilderBase<T> implements $Supplier<T> {
"displayName": $Component
"formattedDisplayName": boolean
readonly "id": $ResourceLocation
"translationKey": string

constructor(i: $ResourceLocation$$Type)

public "createAdditionalObjects"(): void
public "createObject"(): T
/**
 * Sets the display name for this object, e.g. `Stone`.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "displayName"(name: $Component$$Type): $BuilderBase<T>
/** Makes displayName() override language files. */
public "formattedDisplayName"(): $BuilderBase<T>
/** Combined method of formattedDisplayName().displayName(name). */
public "formattedDisplayName"(name: $Component$$Type): $BuilderBase<T>
public "generateAssetJsons"(generator: $AssetJsonGenerator$$Type): void
public "generateDataJsons"(generator: $DataJsonGenerator$$Type): void
public "generateLang"(lang: $LangEventJS$$Type): void
public "get"(): T
public "getBuilderTranslationKey"(): string
public "getRegistryType"(): $RegistryInfo<any>
public "getTranslationKeyGroup"(): string
public "newID"(pre: string, post: string): $ResourceLocation
/** Adds a tag to this object, e.g. `minecraft:stone`. */
public "tag"(tag: $ResourceLocation$$Type): $BuilderBase<T>
public "transformObject"(obj: T): T
/** Sets the translation key for this object, e.g. `block.minecraft.stone`. */
public "translationKey"(key: string): $BuilderBase<T>
get "builderTranslationKey"(): string
get "registryType"(): $RegistryInfo<any>
get "translationKeyGroup"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderType" {
import { $Record } from "packages/java/lang/$Record"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $BuilderBase, $BuilderBase$$Type } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $BuilderFactory, $BuilderFactory$$Type } from "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory"

export class $BuilderType<T> extends $Record {
constructor(type: string, builderClass: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type)

public "builderClass"(): $Class<$BuilderBase<T>>
public "factory"(): $BuilderFactory
public "type"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$CustomBuilderObject" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $RegistryInfo, $RegistryInfo$$Type } from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import { $BuilderBase } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomBuilderObject extends $BuilderBase<any> {
constructor(i: $ResourceLocation$$Type, object: $Supplier$$Type<any>, registry: $RegistryInfo$$Type<any>)

public "createObject"(): any
public "getRegistryType"(): $RegistryInfo<any>
get "registryType"(): $RegistryInfo<any>
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo" {
import { $PaintingVariant } from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $MultiNoiseBiomeSourceParameterList } from "packages/net/minecraft/world/level/biome/$MultiNoiseBiomeSourceParameterList"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $StructureProcessorType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorType"
import { $Activity } from "packages/net/minecraft/world/entity/schedule/$Activity"
import { $List } from "packages/java/util/$List"
import { $FrogVariant } from "packages/net/minecraft/world/entity/animal/$FrogVariant"
import { $MemoryModuleType } from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import { $TrimMaterial } from "packages/net/minecraft/world/item/armortrim/$TrimMaterial"
import { $BuilderType } from "packages/dev/latvian/mods/kubejs/registry/$BuilderType"
import { $StructurePoolElementType } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElementType"
import { $ArgumentTypeInfo } from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import { $Instrument } from "packages/net/minecraft/world/item/$Instrument"
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"
import { $VillagerType } from "packages/net/minecraft/world/entity/npc/$VillagerType"
import { $BlockEntityType } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $WorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import { $PosRuleTestType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$PosRuleTestType"
import { $ChatType } from "packages/net/minecraft/network/chat/$ChatType"
import { $StructurePlacementType } from "packages/net/minecraft/world/level/levelgen/structure/placement/$StructurePlacementType"
import { $WorldPreset } from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"
import { $BlockPredicateType } from "packages/net/minecraft/world/level/levelgen/blockpredicates/$BlockPredicateType"
import { $Registrar } from "packages/dev/architectury/registry/registries/$Registrar"
import { $RegistryCallback$$Type } from "packages/dev/latvian/mods/kubejs/registry/$RegistryCallback"
import { $Fluid } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FloatProviderType } from "packages/net/minecraft/util/valueproviders/$FloatProviderType"
import { $FoliagePlacerType } from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacerType"
import { $StatType } from "packages/net/minecraft/stats/$StatType"
import { $VillagerProfession } from "packages/net/minecraft/world/entity/npc/$VillagerProfession"
import { $Potion } from "packages/net/minecraft/world/item/alchemy/$Potion"
import { $RecipeType } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Structure } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $MobEffect } from "packages/net/minecraft/world/effect/$MobEffect"
import { $StructureType } from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $LevelStem } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $DimensionType } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $FlatLevelGeneratorPreset } from "packages/net/minecraft/world/level/levelgen/flat/$FlatLevelGeneratorPreset"
import { $DamageType } from "packages/net/minecraft/world/damagesource/$DamageType"
import { $Attribute } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $TrimPattern } from "packages/net/minecraft/world/item/armortrim/$TrimPattern"
import { $ConfiguredWorldCarver } from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $NoiseGeneratorSettings } from "packages/net/minecraft/world/level/levelgen/$NoiseGeneratorSettings"
import { $TreeDecoratorType } from "packages/net/minecraft/world/level/levelgen/feature/treedecorators/$TreeDecoratorType"
import { $Schedule } from "packages/net/minecraft/world/entity/schedule/$Schedule"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $StructureProcessorList } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureProcessorList"
import { $PoiType } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import { $BlockStateProviderType } from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProviderType"
import { $BannerPattern } from "packages/net/minecraft/world/level/block/entity/$BannerPattern"
import { $BuilderBase, $BuilderBase$$Type } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $MenuType } from "packages/net/minecraft/world/inventory/$MenuType"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $HeightProviderType } from "packages/net/minecraft/world/level/levelgen/heightproviders/$HeightProviderType"
import { $RuleTestType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$RuleTestType"
import { $StructureSet } from "packages/net/minecraft/world/level/levelgen/structure/$StructureSet"
import { $FeatureSizeType } from "packages/net/minecraft/world/level/levelgen/feature/featuresize/$FeatureSizeType"
import { $PlacedFeature } from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import { $CreativeModeTab } from "packages/net/minecraft/world/item/$CreativeModeTab"
import { $LootItemFunctionType } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BuilderFactory$$Type } from "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory"
import { $DensityFunction } from "packages/net/minecraft/world/level/levelgen/$DensityFunction"
import { $RootPlacerType } from "packages/net/minecraft/world/level/levelgen/feature/rootplacers/$RootPlacerType"
import { $RuleBlockEntityModifierType } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/$RuleBlockEntityModifierType"
import { $ConfiguredFeature } from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $LootNumberProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/number/$LootNumberProviderType"
import { $Feature } from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import { $LinkedList } from "packages/java/util/$LinkedList"
import { $ChunkStatus } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $StructureTemplatePool } from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructureTemplatePool"
import { $StructurePieceType } from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import { $TrunkPlacerType } from "packages/net/minecraft/world/level/levelgen/feature/trunkplacers/$TrunkPlacerType"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $LootScoreProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/score/$LootScoreProviderType"
import { $TypeWrapperFactory } from "packages/dev/latvian/mods/rhino/util/wrap/$TypeWrapperFactory"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $NormalNoise$NoiseParameters } from "packages/net/minecraft/world/level/levelgen/synth/$NormalNoise$NoiseParameters"
import { $PlacementModifierType } from "packages/net/minecraft/world/level/levelgen/placement/$PlacementModifierType"
import { $LootNbtProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/nbt/$LootNbtProviderType"
import { $SensorType } from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $IntProviderType } from "packages/net/minecraft/util/valueproviders/$IntProviderType"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $PositionSourceType } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $CatVariant } from "packages/net/minecraft/world/entity/animal/$CatVariant"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LootItemConditionType } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemConditionType"
import { $GameEvent } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Set } from "packages/java/util/$Set"
import { $LootPoolEntryType } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryType"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $RegistryInfo<T> implements $Iterable<$BuilderBase<T>>, $TypeWrapperFactory<T> {
static readonly "ACTIVITY": $RegistryInfo<$Activity>
static readonly "AFTER_VANILLA": $LinkedList<$RegistryInfo<any>>
static readonly "ALL_BUILDERS": $List<$BuilderBase<any>>
static readonly "ATTRIBUTE": $RegistryInfo<$Attribute>
static readonly "BANNER_PATTERN": $RegistryInfo<$BannerPattern>
static readonly "BIOME": $RegistryInfo<$Biome>
static readonly "BIOME_SOURCE": $RegistryInfo<$Codec<any>>
static readonly "BLOCK": $RegistryInfo<$Block>
static readonly "BLOCK_ENTITY_TYPE": $RegistryInfo<$BlockEntityType<any>>
static readonly "BLOCK_PREDICATE_TYPE": $RegistryInfo<$BlockPredicateType<any>>
static readonly "BLOCK_STATE_PROVIDER_TYPE": $RegistryInfo<$BlockStateProviderType<any>>
static readonly "CARVER": $RegistryInfo<$WorldCarver<any>>
static readonly "CAT_VARIANT": $RegistryInfo<$CatVariant>
static readonly "CHAT_TYPE": $RegistryInfo<$ChatType>
static readonly "CHUNK_GENERATOR": $RegistryInfo<$Codec<any>>
static readonly "CHUNK_STATUS": $RegistryInfo<$ChunkStatus>
static readonly "COMMAND_ARGUMENT_TYPE": $RegistryInfo<$ArgumentTypeInfo<any, any>>
static readonly "CONDITION": $RegistryInfo<$Codec<any>>
static readonly "CONFIGURED_CARVER": $RegistryInfo<$ConfiguredWorldCarver<any>>
static readonly "CONFIGURED_FEATURE": $RegistryInfo<$ConfiguredFeature<any, any>>
static readonly "CREATIVE_MODE_TAB": $RegistryInfo<$CreativeModeTab>
static readonly "CUSTOM_STAT": $RegistryInfo<$ResourceLocation>
static readonly "DAMAGE_TYPE": $RegistryInfo<$DamageType>
static readonly "DECORATED_POT_PATTERNS": $RegistryInfo<string>
static readonly "DENSITY_FUNCTION": $RegistryInfo<$DensityFunction>
static readonly "DENSITY_FUNCTION_TYPE": $RegistryInfo<$Codec<any>>
static readonly "DIMENSION": $RegistryInfo<$Level>
static readonly "DIMENSION_TYPE": $RegistryInfo<$DimensionType>
static readonly "ENCHANTMENT": $RegistryInfo<$Enchantment>
static readonly "ENTITY_TYPE": $RegistryInfo<$EntityType<any>>
static readonly "FEATURE": $RegistryInfo<$Feature<any>>
static readonly "FEATURE_SIZE_TYPE": $RegistryInfo<$FeatureSizeType<any>>
static readonly "FLAT_LEVEL_GENERATOR_PRESET": $RegistryInfo<$FlatLevelGeneratorPreset>
static readonly "FLOAT_PROVIDER_TYPE": $RegistryInfo<$FloatProviderType<any>>
static readonly "FLUID": $RegistryInfo<$Fluid>
static readonly "FOLIAGE_PLACER_TYPE": $RegistryInfo<$FoliagePlacerType<any>>
static readonly "FROG_VARIANT": $RegistryInfo<$FrogVariant>
static readonly "GAME_EVENT": $RegistryInfo<$GameEvent>
static readonly "HEIGHT_PROVIDER_TYPE": $RegistryInfo<$HeightProviderType<any>>
static readonly "INSTRUMENT": $RegistryInfo<$Instrument>
static readonly "INT_PROVIDER_TYPE": $RegistryInfo<$IntProviderType<any>>
static readonly "ITEM": $RegistryInfo<$Item>
static readonly "LEVEL_STEM": $RegistryInfo<$LevelStem>
static readonly "LOOT_CONDITION_TYPE": $RegistryInfo<$LootItemConditionType>
static readonly "LOOT_ENTRY": $RegistryInfo<$LootPoolEntryType>
static readonly "LOOT_FUNCTION": $RegistryInfo<$LootItemFunctionType>
static readonly "LOOT_FUNCTION_TYPE": $RegistryInfo<$LootItemFunctionType>
static readonly "LOOT_ITEM": $RegistryInfo<$LootItemConditionType>
static readonly "LOOT_NBT_PROVIDER": $RegistryInfo<$LootNbtProviderType>
static readonly "LOOT_NBT_PROVIDER_TYPE": $RegistryInfo<$LootNbtProviderType>
static readonly "LOOT_NUMBER_PROVIDER": $RegistryInfo<$LootNumberProviderType>
static readonly "LOOT_NUMBER_PROVIDER_TYPE": $RegistryInfo<$LootNumberProviderType>
static readonly "LOOT_POOL_ENTRY_TYPE": $RegistryInfo<$LootPoolEntryType>
static readonly "LOOT_SCORE_PROVIDER": $RegistryInfo<$LootScoreProviderType>
static readonly "LOOT_SCORE_PROVIDER_TYPE": $RegistryInfo<$LootScoreProviderType>
static readonly "MAP": $Map<$ResourceKey<$Registry<any>>, $RegistryInfo<any>>
static readonly "MATERIAL_CONDITION": $RegistryInfo<$Codec<any>>
static readonly "MATERIAL_RULE": $RegistryInfo<$Codec<any>>
static readonly "MEMORY_MODULE_TYPE": $RegistryInfo<$MemoryModuleType<any>>
static readonly "MENU": $RegistryInfo<$MenuType<any>>
static readonly "MOB_EFFECT": $RegistryInfo<$MobEffect>
static readonly "MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST": $RegistryInfo<$MultiNoiseBiomeSourceParameterList>
static readonly "NOISE": $RegistryInfo<$NormalNoise$NoiseParameters>
static readonly "NOISE_GENERATOR_SETTINGS": $RegistryInfo<$NoiseGeneratorSettings>
static readonly "NOISE_SETTINGS": $RegistryInfo<$NoiseGeneratorSettings>
static readonly "PAINTING_VARIANT": $RegistryInfo<$PaintingVariant>
static readonly "PARTICLE_TYPE": $RegistryInfo<$ParticleType<any>>
static readonly "PLACED_FEATURE": $RegistryInfo<$PlacedFeature>
static readonly "PLACEMENT_MODIFIER": $RegistryInfo<$PlacementModifierType<any>>
static readonly "PLACEMENT_MODIFIER_TYPE": $RegistryInfo<$PlacementModifierType<any>>
static readonly "POINT_OF_INTEREST_TYPE": $RegistryInfo<$PoiType>
static readonly "POSITION_SOURCE_TYPE": $RegistryInfo<$PositionSourceType<any>>
static readonly "POS_RULE_TEST": $RegistryInfo<$PosRuleTestType<any>>
static readonly "POTION": $RegistryInfo<$Potion>
static readonly "PROCESSOR_LIST": $RegistryInfo<$StructureProcessorList>
static readonly "RECIPE_SERIALIZER": $RegistryInfo<$RecipeSerializer<any>>
static readonly "RECIPE_TYPE": $RegistryInfo<$RecipeType<any>>
static readonly "ROOT_PLACER_TYPE": $RegistryInfo<$RootPlacerType<any>>
static readonly "RULE": $RegistryInfo<$Codec<any>>
static readonly "RULE_BLOCK_ENTITY_MODIFIER": $RegistryInfo<$RuleBlockEntityModifierType<any>>
static readonly "RULE_TEST": $RegistryInfo<$RuleTestType<any>>
static readonly "SCHEDULE": $RegistryInfo<$Schedule>
static readonly "SENSOR_TYPE": $RegistryInfo<$SensorType<any>>
static readonly "SOUND_EVENT": $RegistryInfo<$SoundEvent>
static readonly "STAT_TYPE": $RegistryInfo<$StatType<any>>
static readonly "STRUCTURE": $RegistryInfo<$Structure>
static readonly "STRUCTURE_PIECE": $RegistryInfo<$StructurePieceType>
static readonly "STRUCTURE_PLACEMENT": $RegistryInfo<$StructurePlacementType<any>>
static readonly "STRUCTURE_PLACEMENT_TYPE": $RegistryInfo<$StructurePlacementType<any>>
static readonly "STRUCTURE_POOL_ELEMENT": $RegistryInfo<$StructurePoolElementType<any>>
static readonly "STRUCTURE_PROCESSOR": $RegistryInfo<$StructureProcessorType<any>>
static readonly "STRUCTURE_SET": $RegistryInfo<$StructureSet>
static readonly "STRUCTURE_TYPE": $RegistryInfo<$StructureType<any>>
static readonly "TEMPLATE_POOL": $RegistryInfo<$StructureTemplatePool>
static readonly "TREE_DECORATOR_TYPE": $RegistryInfo<$TreeDecoratorType<any>>
static readonly "TRIM_MATERIAL": $RegistryInfo<$TrimMaterial>
static readonly "TRIM_PATTERN": $RegistryInfo<$TrimPattern>
static readonly "TRUNK_PLACER_TYPE": $RegistryInfo<$TrunkPlacerType<any>>
static readonly "VILLAGER_PROFESSION": $RegistryInfo<$VillagerProfession>
static readonly "VILLAGER_TYPE": $RegistryInfo<$VillagerType>
static readonly "WORLD_PRESET": $RegistryInfo<$WorldPreset>
"bypassServerOnly": boolean
readonly "key": $ResourceKey<$Registry<T>>
"languageKeyPrefix": string
readonly "objectBaseClass": $Class<any>
readonly "objects": $Map<$ResourceLocation, $BuilderBase<T>>
readonly "types": $Map<string, $BuilderType<T>>

public "addBuilder"(builder: $BuilderBase$$Type<T>): void
public "addType"(type: string, builderType: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type): void
public "addType"(type: string, builderType: $Class$$Type<$BuilderBase$$Type<T>>, factory: $BuilderFactory$$Type, isDefault: boolean): void
public "bypassServerOnly"(): $RegistryInfo<T>
public "entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
public "fireRegistryEvent"(): void
public "forEach"(consumer0: $Consumer$$Type<$BuilderBase$$Type<T>>): void
public "getArchitecturyRegistrar"(): $Registrar<T>
public "getDefaultType"(): $BuilderType<any>
public "getId"(value: T): $ResourceLocation
public "getValue"(id: $ResourceLocation$$Type): T
public "getVanillaRegistry"(): $Registry<T>
public "hasValue"(id: $ResourceLocation$$Type): boolean
public "iterator"(): $Iterator<$BuilderBase<T>>
public "languageKeyPrefix"(prefix: string): $RegistryInfo<T>
public "noAutoWrap"(): $RegistryInfo<T>
public static "of"(key: $ResourceKey$$Type<$Registry<any>>): $RegistryInfo<any>
public static "of"<T>(key: $ResourceKey$$Type<$Registry<any>>, type: $Class$$Type<T>): $RegistryInfo<T>
public "registerObjects"(function_: $RegistryCallback$$Type<T>): integer
public "spliterator"(): $Spliterator<$BuilderBase<T>>
public "wrap"(cx: $Context$$Type, o: any): T
[Symbol.iterator](): IterableIterator<$BuilderBase<T>>;
get "autoWrap"(): boolean
set "autoWrap"(value: boolean)
get "hasDefaultTags"(): boolean
set "hasDefaultTags"(value: boolean)
get "architecturyRegistrar"(): $Registrar<T>
get "defaultType"(): $BuilderType<any>
get "vanillaRegistry"(): $Registry<T>
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryCallback" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryCallback<T> {
"accept"(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>): void
}

export namespace $RegistryCallback {
const probejs$$marker: never
}
export abstract class $RegistryCallback$$Static<T> implements $RegistryCallback<T> {
}
}

