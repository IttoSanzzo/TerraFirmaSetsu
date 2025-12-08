declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParams" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $DamageSource } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $LootContextParams {
static readonly "BLOCK_ENTITY": $LootContextParam<$BlockEntity>
static readonly "BLOCK_STATE": $LootContextParam<$BlockState>
static readonly "DAMAGE_SOURCE": $LootContextParam<$DamageSource>
static readonly "DIRECT_KILLER_ENTITY": $LootContextParam<$Entity>
static readonly "EXPLOSION_RADIUS": $LootContextParam<float>
static readonly "KILLER_ENTITY": $LootContextParam<$Entity>
static readonly "LAST_DAMAGE_PLAYER": $LootContextParam<$Player>
static readonly "ORIGIN": $LootContextParam<$Vec3>
static readonly "THIS_ENTITY": $LootContextParam<$Entity>
static readonly "TOOL": $LootContextParam<$ItemStack>

constructor()

}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataType" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Gson } from "packages/com/google/gson/$Gson"
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $LootDataId$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $LootDataType<T> {
static readonly "MODIFIER": $LootDataType<$LootItemFunction>
static readonly "PREDICATE": $LootDataType<$LootItemCondition>
static readonly "TABLE": $LootDataType<$LootTable>

public "deserialize"(resourceLocation0: $ResourceLocation$$Type, jsonElement1: $JsonElement$$Type, resourceManager2: $ResourceManager$$Type): $Optional<T>
public "directory"(): string
public "parser"(): $Gson
public "runValidation"(validationContext0: $ValidationContext$$Type, lootDataId1: $LootDataId$$Type<T>, t2: T): void
public static "values"(): $Stream<$LootDataType<any>>
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$AlternativesEntry$Builder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $AlternativesEntry$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder" {
import { $CompositeLootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$CompositeLootItemCondition$Builder"
import { $AnyOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "invert"(): $LootItemCondition$Builder
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelSummary" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $LevelVersion, $LevelVersion$$Type } from "packages/net/minecraft/world/level/storage/$LevelVersion"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $LevelSettings, $LevelSettings$$Type } from "packages/net/minecraft/world/level/$LevelSettings"
import { $LevelSummary$BackupStatus } from "packages/net/minecraft/world/level/storage/$LevelSummary$BackupStatus"
import { $IForgeLevelSummary } from "packages/net/minecraftforge/common/extensions/$IForgeLevelSummary"
import { $GameType } from "packages/net/minecraft/world/level/$GameType"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $LevelSummary implements $Comparable<$LevelSummary>, $IForgeLevelSummary {
constructor(levelSettings0: $LevelSettings$$Type, levelVersion1: $LevelVersion$$Type, string2: string, boolean3: boolean, boolean4: boolean, boolean5: boolean, path6: $Path$$Type)

public "askToOpenWorld"(): boolean
public "backupStatus"(): $LevelSummary$BackupStatus
public "compareTo"(levelSummary0: $LevelSummary$$Type): integer
public "getGameMode"(): $GameType
public "getIcon"(): $Path
public "getInfo"(): $Component
public "getLastPlayed"(): long
public "getLevelId"(): string
public "getLevelName"(): string
public "getSettings"(): $LevelSettings
public "getWorldVersionName"(): $MutableComponent
public "hasCheats"(): boolean
public "isCompatible"(): boolean
public "isDisabled"(): boolean
public "isExperimental"(): boolean
public "isHardcore"(): boolean
/** @deprecated */
public "isLifecycleExperimental"(): boolean
public "isLocked"(): boolean
public "levelVersion"(): $LevelVersion
public "markVersionInList"(): boolean
public "requiresManualConversion"(): boolean
get "gameMode"(): $GameType
get "icon"(): $Path
get "info"(): $Component
get "lastPlayed"(): long
get "levelId"(): string
get "levelName"(): string
get "settings"(): $LevelSettings
get "worldVersionName"(): $MutableComponent
get "compatible"(): boolean
get "disabled"(): boolean
get "experimental"(): boolean
get "hardcore"(): boolean
get "lifecycleExperimental"(): boolean
get "locked"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet" {
import { $LootContextParam, $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootContextUser$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $Set } from "packages/java/util/$Set"
import { $LootContextParamSet$Builder } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet$Builder"

export class $LootContextParamSet {
public static "builder"(): $LootContextParamSet$Builder
public "getAllowed"(): $Set<$LootContextParam<any>>
public "getRequired"(): $Set<$LootContextParam<any>>
public "isAllowed"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "validateUser"(validationContext0: $ValidationContext$$Type, lootContextUser1: $LootContextUser$$Type): void
get "allowed"(): $Set<$LootContextParam<any>>
get "required"(): $Set<$LootContextParam<any>>
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelData" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"

export interface $LevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getSpawnAngle"(): float
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setRaining"(boolean0: boolean): void
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "raining"(value: boolean)
}

export namespace $LevelData {
const probejs$$marker: never
}
export abstract class $LevelData$$Static implements $LevelData {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$SequentialEntry$Builder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $SequentialEntry$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LevelResource {
static readonly "DATAPACK_DIR": $LevelResource
static readonly "GENERATED_DIR": $LevelResource
static readonly "ICON_FILE": $LevelResource
static readonly "LEVEL_DATA_FILE": $LevelResource
static readonly "LOCK_FILE": $LevelResource
static readonly "MAP_RESOURCE_FILE": $LevelResource
static readonly "OLD_LEVEL_DATA_FILE": $LevelResource
static readonly "PLAYER_ADVANCEMENTS_DIR": $LevelResource
static readonly "PLAYER_DATA_DIR": $LevelResource
static readonly "PLAYER_OLD_DATA_DIR": $LevelResource
static readonly "PLAYER_STATS_DIR": $LevelResource
static readonly "ROOT": $LevelResource

constructor(string0: string)

public "getId"(): string
get "id"(): string
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$ComposableEntryContainer" {
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootPoolEntry$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntry"

export interface $ComposableEntryContainer {
"and"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
"expand"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$LootPoolEntry$$Type>): boolean
"or"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
}

export namespace $ComposableEntryContainer {
const ALWAYS_FALSE: $ComposableEntryContainer
const ALWAYS_TRUE: $ComposableEntryContainer
}
export abstract class $ComposableEntryContainer$$Static implements $ComposableEntryContainer {
static readonly "ALWAYS_FALSE": $ComposableEntryContainer
static readonly "ALWAYS_TRUE": $ComposableEntryContainer

}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContextUser" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $Set } from "packages/java/util/$Set"

export interface $LootContextUser {
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
}

export namespace $LootContextUser {
const probejs$$marker: never
}
export abstract class $LootContextUser$$Static implements $LootContextUser {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootPool$Builder" {
import { $LootItemFunction$Builder } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $LootPoolEntryContainer$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder"
import { $LootPoolEntryContainer } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import { $LootPool } from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $FunctionUserBuilder } from "packages/net/minecraft/world/level/storage/loot/functions/$FunctionUserBuilder"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $LootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $List } from "packages/java/util/$List"
import { $ConditionUserBuilder } from "packages/net/minecraft/world/level/storage/loot/predicates/$ConditionUserBuilder"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder> {
readonly "conditions": $List<$LootItemCondition>
readonly "entries": $List<$LootPoolEntryContainer>
readonly "functions": $List<$LootItemFunction>

constructor()

public "add"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $LootPool$Builder
public "apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootPool$Builder
public "apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootPool$Builder
public "build"(): $LootPool
public "name"(string0: string): $LootPool$Builder
public "setBonusRolls"(numberProvider0: $NumberProvider$$Type): $LootPool$Builder
public "setRolls"(numberProvider0: $NumberProvider$$Type): $LootPool$Builder
public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $LootPool$Builder
set "bonusRolls"(value: $NumberProvider$$Type)
set "rolls"(value: $NumberProvider$$Type)
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder" {
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"

export interface $LootItemFunction$Builder {
"build"(): $LootItemFunction
}

export namespace $LootItemFunction$Builder {
const probejs$$marker: never
}
export abstract class $LootItemFunction$Builder$$Static implements $LootItemFunction$Builder {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonSerializationContext$$Type } from "packages/com/google/gson/$JsonSerializationContext"
import { $JsonDeserializationContext$$Type } from "packages/com/google/gson/$JsonDeserializationContext"

export interface $Serializer<T> {
"deserialize"(jsonObject0: $JsonObject$$Type, jsonDeserializationContext1: $JsonDeserializationContext$$Type): T
"serialize"(jsonObject0: $JsonObject$$Type, t1: T, jsonSerializationContext2: $JsonSerializationContext$$Type): void
}

export namespace $Serializer {
const probejs$$marker: never
}
export abstract class $Serializer$$Static<T> implements $Serializer<T> {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataId" {
import { $Record } from "packages/java/lang/$Record"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootDataType, $LootDataType$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataType"

export class $LootDataId<T> extends $Record {
constructor(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type)

public "location"(): $ResourceLocation
public "type"(): $LootDataType<T>
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelDirectory" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Record } from "packages/java/lang/$Record"
import { $LevelResource$$Type } from "packages/net/minecraft/world/level/storage/$LevelResource"
import { $LocalDateTime$$Type } from "packages/java/time/$LocalDateTime"

export class $LevelStorageSource$LevelDirectory extends $Record {
constructor(path: $Path$$Type)

public "corruptedDataFile"(localDateTime0: $LocalDateTime$$Type): $Path
public "dataFile"(): $Path
public "directoryName"(): string
public "iconFile"(): $Path
public "lockFile"(): $Path
public "oldDataFile"(): $Path
public "path"(): $Path
public "resourcePath"(levelResource0: $LevelResource$$Type): $Path
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Enum } from "packages/java/lang/$Enum"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> {
static readonly "DIRECT_KILLER": $LootContext$EntityTarget
static readonly "KILLER": $LootContext$EntityTarget
static readonly "KILLER_PLAYER": $LootContext$EntityTarget
static readonly "THIS": $LootContext$EntityTarget
readonly "name": string

public static "getByName"(string0: string): $LootContext$EntityTarget
public "getName"(): string
public "getParam"(): $LootContextParam<$Entity>
public static "valueOf"(string0: string): $LootContext$EntityTarget
public static "values"(): $LootContext$EntityTarget[]
get "param"(): $LootContextParam<$Entity>
}
}

declare module "packages/net/minecraft/world/level/storage/$PrimaryLevelData$SpecialWorldProperty" {
import { $Enum } from "packages/java/lang/$Enum"

/** @deprecated */
export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
static readonly "DEBUG": $PrimaryLevelData$SpecialWorldProperty
static readonly "FLAT": $PrimaryLevelData$SpecialWorldProperty
static readonly "NONE": $PrimaryLevelData$SpecialWorldProperty

public static "valueOf"(string0: string): $PrimaryLevelData$SpecialWorldProperty
public static "values"(): $PrimaryLevelData$SpecialWorldProperty[]
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$EntryGroup$Builder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
constructor(...builder0s: $LootPoolEntryContainer$Builder$$Type<any>[])

public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): $EntryGroup$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootContextUser } from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $Set } from "packages/java/util/$Set"
import { $LootNumberProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/number/$LootNumberProviderType"

export interface $NumberProvider extends $LootContextUser {
"getFloat"(lootContext0: $LootContext$$Type): float
"getInt"(lootContext0: $LootContext$$Type): integer
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootNumberProviderType
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootNumberProviderType
}

export namespace $NumberProvider {
const probejs$$marker: never
}
export abstract class $NumberProvider$$Static implements $NumberProvider {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet$Builder" {
import { $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootContextParamSet } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"

export class $LootContextParamSet$Builder {
constructor()

public "build"(): $LootContextParamSet
public "optional"(lootContextParam0: $LootContextParam$$Type<any>): $LootContextParamSet$Builder
public "required"(lootContextParam0: $LootContextParam$$Type<any>): $LootContextParamSet$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootContextUser } from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $Set } from "packages/java/util/$Set"
import { $LootItemFunctionType } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"

export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
"andThen"<V>(function0: $Function$$Type<$ItemStack$$Type, V>): $BiFunction<$ItemStack, $LootContext, V>
"apply"(itemStack0: $ItemStack$$Type, lootContext1: $LootContext$$Type): $ItemStack
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootItemFunctionType
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemFunctionType
}

export namespace $LootItemFunction {
function decorate(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
}
export abstract class $LootItemFunction$$Static implements $LootItemFunction {
static "decorate"(biFunction0: $BiFunction$$Type<$ItemStack$$Type, $LootContext$$Type, $ItemStack>, consumer1: $Consumer$$Type<$ItemStack$$Type>, lootContext2: $LootContext$$Type): $Consumer<$ItemStack>
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$CompositeLootItemCondition$Builder" {
import { $AllOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import { $AnyOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "addTerm"(builder0: $LootItemCondition$Builder$$Type): void
public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "build"(): $LootItemCondition
public "invert"(): $LootItemCondition$Builder
public "or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/nbt/$NbtProvider" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootNbtProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/nbt/$LootNbtProviderType"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Tag } from "packages/net/minecraft/nbt/$Tag"
import { $Set } from "packages/java/util/$Set"

export interface $NbtProvider {
"get"(lootContext0: $LootContext$$Type): $Tag
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootNbtProviderType
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootNbtProviderType
}

export namespace $NbtProvider {
const probejs$$marker: never
}
export abstract class $NbtProvider$$Static implements $NbtProvider {
}
}

declare module "packages/net/minecraft/world/level/storage/$CommandStorage" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DimensionDataStorage$$Type } from "packages/net/minecraft/world/level/storage/$DimensionDataStorage"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CommandStorage {
constructor(dimensionDataStorage0: $DimensionDataStorage$$Type)

public "get"(resourceLocation0: $ResourceLocation$$Type): $CompoundTag
public "keys"(): $Stream<$ResourceLocation>
public "set"(resourceLocation0: $ResourceLocation$$Type, compoundTag1: $CompoundTag$$Type): void
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext" {
import { $LootItemFunction, $LootItemFunction$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LootDataResolver, $LootDataResolver$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataResolver"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RandomSource, $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $LootParams$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams"
import { $LootContext$VisitedEntry, $LootContext$VisitedEntry$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext$VisitedEntry"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $LootTable, $LootTable$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $LootItemCondition, $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export class $LootContext {
constructor(lootParams0: $LootParams$$Type, randomSource1: $RandomSource$$Type, lootDataResolver2: $LootDataResolver$$Type)

public "addDynamicDrops"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public static "createVisitedEntry"(lootItemFunction0: $LootItemFunction$$Type): $LootContext$VisitedEntry<$LootItemFunction>
public static "createVisitedEntry"(lootTable0: $LootTable$$Type): $LootContext$VisitedEntry<$LootTable>
public static "createVisitedEntry"(lootItemCondition0: $LootItemCondition$$Type): $LootContext$VisitedEntry<$LootItemCondition>
public "getLevel"(): $ServerLevel
public "getLootingModifier"(): integer
public "getLuck"(): float
public "getParam"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getQueriedLootTableId"(): $ResourceLocation
public "getRandom"(): $RandomSource
public "getResolver"(): $LootDataResolver
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
public "hasVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): boolean
public "popVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): void
public "pushVisitedElement"(visitedEntry0: $LootContext$VisitedEntry$$Type<any>): boolean
public "setQueriedLootTableId"(resourceLocation0: $ResourceLocation$$Type): void
get "level"(): $ServerLevel
get "lootingModifier"(): integer
get "luck"(): float
get "queriedLootTableId"(): $ResourceLocation
get "random"(): $RandomSource
get "resolver"(): $LootDataResolver
set "queriedLootTableId"(value: $ResourceLocation$$Type)
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$ConditionUserBuilder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
"unwrap"(): T
"when"(builder0: $LootItemCondition$Builder$$Type): T
"when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): T
}

export namespace $ConditionUserBuilder {
const probejs$$marker: never
}
export abstract class $ConditionUserBuilder$$Static<T extends $ConditionUserBuilder<T>> implements $ConditionUserBuilder<T> {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataManager" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $LootDataId, $LootDataId$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import { $LootItemFunction, $LootItemFunction$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $LootTablesKJS } from "packages/dev/latvian/mods/kubejs/core/$LootTablesKJS"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootDataResolver } from "packages/net/minecraft/world/level/storage/loot/$LootDataResolver"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $LootItemCondition, $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $LootDataType$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataType"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootDataManager implements $PreparableReloadListener, $LootDataResolver, $LootTablesKJS {
static readonly "EMPTY_LOOT_TABLE_KEY": $LootDataId<$LootTable>

constructor()

public static "createComposite"(lootItemFunction0s: $LootItemFunction$$Type[]): $LootItemFunction
public static "createComposite"(lootItemCondition0s: $LootItemCondition$$Type[]): $LootItemCondition
public "getElement"<T>(lootDataId0: $LootDataId$$Type<T>): T
public "getElement"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): T
public "getElementOptional"<T>(lootDataId0: $LootDataId$$Type<T>): $Optional<T>
public "getElementOptional"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): $Optional<T>
public "getKeys"(lootDataType0: $LootDataType$$Type<any>): $Collection<$ResourceLocation>
public "getLootTable"(resourceLocation0: $ResourceLocation$$Type): $LootTable
public "getName"(): string
public "handler$ehc002$apply"(collectedElements: $Map$$Type<any, any>, ci: $CallbackInfo$$Type): void
public "kjs$completeReload"(parsedMap: $Map$$Type<$LootDataType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, any>>, elements: $Map$$Type<$LootDataId$$Type<any>, any>): void
public static "kjs$postLootEvents"(map: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$SerializerType" {
import { $Serializer, $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"

export class $SerializerType<T> {
constructor(serializer0: $Serializer$$Type<T>)

public "getSerializer"(): $Serializer<T>
get "serializer"(): $Serializer<T>
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $LevelStorageSource$LevelStorageAccess } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LevelStorageSource$LevelCandidates, $LevelStorageSource$LevelCandidates$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelCandidates"
import { $List } from "packages/java/util/$List"
import { $LevelSummary } from "packages/net/minecraft/world/level/storage/$LevelSummary"
import { $DirectoryValidator, $DirectoryValidator$$Type } from "packages/net/minecraft/world/level/validation/$DirectoryValidator"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $LevelStorageSource {
static readonly "ALLOWED_SYMLINKS_CONFIG_NAME": string

constructor(path0: $Path$$Type, path1: $Path$$Type, directoryValidator2: $DirectoryValidator$$Type, dataFixer3: $DataFixer$$Type)

public "createAccess"(string0: string): $LevelStorageSource$LevelStorageAccess
public static "createDefault"(path0: $Path$$Type): $LevelStorageSource
public "findLevelCandidates"(): $LevelStorageSource$LevelCandidates
public "getBackupPath"(): $Path
public "getBaseDir"(): $Path
public "getName"(): string
public "getWorldDirValidator"(): $DirectoryValidator
public "isNewLevelIdAcceptable"(string0: string): boolean
public "levelExists"(string0: string): boolean
public "loadLevelSummaries"(levelCandidates0: $LevelStorageSource$LevelCandidates$$Type): $CompletableFuture<$List<$LevelSummary>>
public static "parseValidator"(path0: $Path$$Type): $DirectoryValidator
public "validateAndCreateAccess"(string0: string): $LevelStorageSource$LevelStorageAccess
get "backupPath"(): $Path
get "baseDir"(): $Path
get "name"(): string
get "worldDirValidator"(): $DirectoryValidator
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Path } from "packages/java/nio/file/$Path"
import { $Tag$$Type } from "packages/net/minecraft/nbt/$Tag"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $LevelStem$$Type } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $PlayerDataStorage } from "packages/net/minecraft/world/level/storage/$PlayerDataStorage"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $LevelResource$$Type } from "packages/net/minecraft/world/level/storage/$LevelResource"
import { $LevelSummary } from "packages/net/minecraft/world/level/storage/$LevelSummary"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $WorldData, $WorldData$$Type } from "packages/net/minecraft/world/level/storage/$WorldData"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "packages/net/minecraft/world/level/$WorldDataConfiguration"
import { $WorldDimensions$Complete } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions$Complete"

export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable {
readonly "levelId": string

public "checkLock"(): void
public "close"(): void
public "createPlayerStorage"(): $PlayerDataStorage
public "deleteLevel"(): void
public "getDataConfiguration"(): $WorldDataConfiguration
public "getDataTag"(dynamicOps0: $DynamicOps$$Type<$Tag$$Type>, worldDataConfiguration1: $WorldDataConfiguration$$Type, registry2: $Registry$$Type<$LevelStem$$Type>, lifecycle3: $Lifecycle$$Type): $Pair<$WorldData, $WorldDimensions$Complete>
public "getDimensionPath"(resourceKey0: $ResourceKey$$Type<$Level>): $Path
public "getIconFile"(): $Optional<$Path>
public "getLevelId"(): string
public "getLevelPath"(levelResource0: $LevelResource$$Type): $Path
public "getSummary"(): $LevelSummary
public "getWorldDir"(): $Path
public "handler$coi000$onDeleteLevel"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$ddp001$onDeleteLevel"(callbackInfo0: $CallbackInfo$$Type): void
public "makeWorldBackup"(): long
public "readAdditionalLevelSaveData"(): void
public "renameLevel"(string0: string): void
public "saveDataTag"(registryAccess0: $RegistryAccess$$Type, worldData1: $WorldData$$Type): void
public "saveDataTag"(registryAccess0: $RegistryAccess$$Type, worldData1: $WorldData$$Type, compoundTag2: $CompoundTag$$Type): void
get "dataConfiguration"(): $WorldDataConfiguration
get "iconFile"(): $Optional<$Path>
get "summary"(): $LevelSummary
get "worldDir"(): $Path
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LootContextParam<T> {
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getName"(): $ResourceLocation
get "name"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/world/level/storage/$PlayerDataStorage" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $File } from "packages/java/io/$File"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $PlayerDataStorage {
constructor(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer1: $DataFixer$$Type)

public "getPlayerDataFolder"(): $File
public "getSeenPlayers"(): string[]
public "load"(player0: $Player$$Type): $CompoundTag
public "save"(player0: $Player$$Type): void
get "playerDataFolder"(): $File
get "seenPlayers"(): string[]
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder" {
import { $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootParams$DynamicDrop$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams$DynamicDrop"
import { $LootParams } from "packages/net/minecraft/world/level/storage/loot/$LootParams"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $LootParamsBuilderAccess } from "packages/snownee/lychee/mixin/$LootParamsBuilderAccess"
import { $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $LootParams$Builder implements $LootParamsBuilderAccess {
constructor(serverLevel0: $ServerLevel$$Type)

public "create"(lootContextParamSet0: $LootContextParamSet$$Type): $LootParams
public "getLevel"(): $ServerLevel
public "getOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "handler$eal000$addTypeOnCreate"(paramSet: $LootContextParamSet$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "withDynamicDrop"(resourceLocation0: $ResourceLocation$$Type, dynamicDrop1: $LootParams$DynamicDrop$$Type): $LootParams$Builder
public "withLuck"(float0: float): $LootParams$Builder
public "withOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>, t1: T): $LootParams$Builder
public "withParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>, t1: T): $LootParams$Builder
get "luck"(): float
set "luck"(value: float)
get "level"(): $ServerLevel
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelSummary$BackupStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
static readonly "DOWNGRADE": $LevelSummary$BackupStatus
static readonly "NONE": $LevelSummary$BackupStatus
static readonly "UPGRADE_TO_SNAPSHOT": $LevelSummary$BackupStatus

public "getTranslationKey"(): string
public "isSevere"(): boolean
public "shouldBackup"(): boolean
public static "valueOf"(string0: string): $LevelSummary$BackupStatus
public static "values"(): $LevelSummary$BackupStatus[]
get "translationKey"(): string
get "severe"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$ValidationContext" {
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $LootContextUser$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import { $LootDataId$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $LootDataResolver, $LootDataResolver$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataResolver"

export class $ValidationContext {
constructor(lootContextParamSet0: $LootContextParamSet$$Type, lootDataResolver1: $LootDataResolver$$Type)
constructor(multimap0: $Multimap$$Type<string, string>, supplier1: $Supplier$$Type<string>, lootContextParamSet2: $LootContextParamSet$$Type, lootDataResolver3: $LootDataResolver$$Type, set4: $Set$$Type<$LootDataId$$Type<any>>)

public "enterElement"(string0: string, lootDataId1: $LootDataId$$Type<any>): $ValidationContext
public "forChild"(string0: string): $ValidationContext
public "getProblems"(): $Multimap<string, string>
public "hasVisitedElement"(lootDataId0: $LootDataId$$Type<any>): boolean
public "reportProblem"(string0: string): void
public "resolver"(): $LootDataResolver
public "setParams"(lootContextParamSet0: $LootContextParamSet$$Type): $ValidationContext
public "validateUser"(lootContextUser0: $LootContextUser$$Type): void
get "problems"(): $Multimap<string, string>
set "params"(value: $LootContextParamSet$$Type)
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$FunctionUserBuilder" {
import { $LootItemFunction$Builder, $LootItemFunction$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
"apply"(builder0: $LootItemFunction$Builder$$Type): T
"apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): T
"apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): T
"unwrap"(): T
}

export namespace $FunctionUserBuilder {
const probejs$$marker: never
}
export abstract class $FunctionUserBuilder$$Static<T extends $FunctionUserBuilder<T>> implements $FunctionUserBuilder<T> {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootTable" {
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $AccessorLootTable } from "packages/org/violetmoon/zeta/mixin/mixins/$AccessorLootTable"
import { $LootPool, $LootPool$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LootContextParamSet } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ObjectArrayList } from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $List } from "packages/java/util/$List"
import { $LootParams$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $LootTableForgeAccessor } from "packages/fuzs/puzzleslib/mixin/accessor/$LootTableForgeAccessor"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"

export class $LootTable implements $AccessorLootTable, $LootTableForgeAccessor {
static readonly "DEFAULT_PARAM_SET": $LootContextParamSet
static readonly "EMPTY": $LootTable
readonly "functions": $LootItemFunction[]
readonly "pools": $List<$LootPool>

public "addPool"(lootPool0: $LootPool$$Type): void
public static "createStackSplitter"(serverLevel0: $ServerLevel$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): $Consumer<$ItemStack>
public "fill"(container0: $Container$$Type, lootParams1: $LootParams$$Type, long2: long): void
public "freeze"(): void
public "getLootTableId"(): $ResourceLocation
public "getParamSet"(): $LootContextParamSet
public "getPool"(string0: string): $LootPool
public "getRandomItems"(lootParams0: $LootParams$$Type): $ObjectArrayList<$ItemStack>
public "getRandomItems"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getRandomItems"(lootParams0: $LootParams$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getRandomItems"(lootParams0: $LootParams$$Type, long1: long, consumer2: $Consumer$$Type<$ItemStack$$Type>): void
public "getRandomItems"(lootParams0: $LootParams$$Type, long1: long): $ObjectArrayList<$ItemStack>
/** @deprecated */
public "getRandomItemsRaw"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
/** @deprecated */
public "getRandomItemsRaw"(lootParams0: $LootParams$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "handler$zoi000$getRandomItems"(lootContext0: $LootContext$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "isFrozen"(): boolean
public static "lootTable"(): $LootTable$Builder
public "removePool"(string0: string): $LootPool
public "setLootTableId"(resourceLocation0: $ResourceLocation$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "lootTableId"(): $ResourceLocation
get "paramSet"(): $LootContextParamSet
get "frozen"(): boolean
set "lootTableId"(value: $ResourceLocation$$Type)
}
}

declare module "packages/net/minecraft/world/level/storage/$DimensionDataStorage" {
import { $SavedData, $SavedData$$Type } from "packages/net/minecraft/world/level/saveddata/$SavedData"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $DimensionDataStorage {
readonly "dataFolder": $File

constructor(file0: $File$$Type, dataFixer1: $DataFixer$$Type)

public "computeIfAbsent"<T extends $SavedData>(function0: $Function$$Type<$CompoundTag$$Type, T>, supplier1: $Supplier$$Type<T>, string2: string): T
public "get"<T extends $SavedData>(function0: $Function$$Type<$CompoundTag$$Type, T>, string1: string): T
public "readTagFromDisk"(string0: string, int1: integer): $CompoundTag
public "save"(): void
public "set"(string0: string, savedData1: $SavedData$$Type): void
}
}

declare module "packages/net/minecraft/world/level/storage/$ServerLevelData" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $WritableLevelData } from "packages/net/minecraft/world/level/storage/$WritableLevelData"
import { $WorldBorder$Settings, $WorldBorder$Settings$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder$Settings"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $TimerQueue } from "packages/net/minecraft/world/level/timers/$TimerQueue"

export interface $ServerLevelData extends $WritableLevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getAllowCommands"(): boolean
"getClearWeatherTime"(): integer
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getGameType"(): $GameType
"getLevelName"(): string
"getRainTime"(): integer
"getScheduledEvents"(): $TimerQueue<$MinecraftServer>
"getSpawnAngle"(): float
"getThunderTime"(): integer
"getWanderingTraderId"(): $UUID
"getWanderingTraderSpawnChance"(): integer
"getWanderingTraderSpawnDelay"(): integer
"getWorldBorder"(): $WorldBorder$Settings
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isInitialized"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setClearWeatherTime"(int0: integer): void
"setDayTime"(long0: long): void
"setGameTime"(long0: long): void
"setGameType"(gameType0: $GameType$$Type): void
"setInitialized"(boolean0: boolean): void
"setRainTime"(int0: integer): void
"setRaining"(boolean0: boolean): void
"setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
"setSpawnAngle"(float0: float): void
"setThunderTime"(int0: integer): void
"setThundering"(boolean0: boolean): void
"setWanderingTraderId"(uUID0: $UUID$$Type): void
"setWanderingTraderSpawnChance"(int0: integer): void
"setWanderingTraderSpawnDelay"(int0: integer): void
"setWorldBorder"(settings0: $WorldBorder$Settings$$Type): void
"setXSpawn"(int0: integer): void
"setYSpawn"(int0: integer): void
"setZSpawn"(int0: integer): void
get "allowCommands"(): boolean
get "clearWeatherTime"(): integer
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "gameType"(): $GameType
get "levelName"(): string
get "rainTime"(): integer
get "scheduledEvents"(): $TimerQueue<$MinecraftServer>
get "spawnAngle"(): float
get "thunderTime"(): integer
get "wanderingTraderId"(): $UUID
get "wanderingTraderSpawnChance"(): integer
get "wanderingTraderSpawnDelay"(): integer
get "worldBorder"(): $WorldBorder$Settings
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "initialized"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "clearWeatherTime"(value: integer)
set "dayTime"(value: long)
set "gameTime"(value: long)
set "gameType"(value: $GameType$$Type)
set "initialized"(value: boolean)
set "rainTime"(value: integer)
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "thunderTime"(value: integer)
set "thundering"(value: boolean)
set "wanderingTraderId"(value: $UUID$$Type)
set "wanderingTraderSpawnChance"(value: integer)
set "wanderingTraderSpawnDelay"(value: integer)
set "worldBorder"(value: $WorldBorder$Settings$$Type)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}

export namespace $ServerLevelData {
const probejs$$marker: never
}
export abstract class $ServerLevelData$$Static implements $ServerLevelData {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntry" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootPoolEntry {
"createItemStack"(consumer0: $Consumer$$Type<$ItemStack$$Type>, lootContext1: $LootContext$$Type): void
"getWeight"(float0: float): integer
}

export namespace $LootPoolEntry {
const probejs$$marker: never
}
export abstract class $LootPoolEntry$$Static implements $LootPoolEntry {
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelCandidates" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Record } from "packages/java/lang/$Record"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelDirectory"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
constructor(levels: $List$$Type<$LevelStorageSource$LevelDirectory$$Type>)

public "forEach"(consumer0: $Consumer$$Type<$LevelStorageSource$LevelDirectory$$Type>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$LevelStorageSource$LevelDirectory>
public "levels"(): $List<$LevelStorageSource$LevelDirectory>
public "spliterator"(): $Spliterator<$LevelStorageSource$LevelDirectory>
[Symbol.iterator](): IterableIterator<$LevelStorageSource$LevelDirectory>;
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $LootItemFunction$Builder } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder"
import { $LootPool$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootPool$Builder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FunctionUserBuilder } from "packages/net/minecraft/world/level/storage/loot/functions/$FunctionUserBuilder"

export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder> {
constructor()

public "apply"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootTable$Builder
public "apply"<E>(e0s: E[], function1: $Function$$Type<E, $LootItemFunction$Builder>): $LootTable$Builder
public "build"(): $LootTable
public "setParamSet"(lootContextParamSet0: $LootContextParamSet$$Type): $LootTable$Builder
public "setRandomSequence"(resourceLocation0: $ResourceLocation$$Type): $LootTable$Builder
public "unwrap"(): $LootTable$Builder
public "withPool"(builder0: $LootPool$Builder$$Type): $LootTable$Builder
set "paramSet"(value: $LootContextParamSet$$Type)
set "randomSequence"(value: $ResourceLocation$$Type)
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder" {
import { $EntryGroup$Builder } from "packages/net/minecraft/world/level/storage/loot/entries/$EntryGroup$Builder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $AlternativesEntry$Builder } from "packages/net/minecraft/world/level/storage/loot/entries/$AlternativesEntry$Builder"
import { $LootPoolEntryContainer } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import { $SequentialEntry$Builder } from "packages/net/minecraft/world/level/storage/loot/entries/$SequentialEntry$Builder"
import { $ConditionUserBuilder } from "packages/net/minecraft/world/level/storage/loot/predicates/$ConditionUserBuilder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $LootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
constructor()

public "append"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $EntryGroup$Builder
public "build"(): $LootPoolEntryContainer
public "otherwise"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $AlternativesEntry$Builder
public "then"(builder0: $LootPoolEntryContainer$Builder$$Type<any>): $SequentialEntry$Builder
public "unwrap"(): T
public "when"<E>(iterable0: $Iterable$$Type<E>, function1: $Function$$Type<E, $LootItemCondition$Builder>): T
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataResolver" {
import { $LootDataId$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootTable } from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import { $LootDataType$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataType"

export interface $LootDataResolver {
"getElement"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): T
"getElement"<T>(lootDataId0: $LootDataId$$Type<T>): T
"getElementOptional"<T>(lootDataId0: $LootDataId$$Type<T>): $Optional<T>
"getElementOptional"<T>(lootDataType0: $LootDataType$$Type<T>, resourceLocation1: $ResourceLocation$$Type): $Optional<T>
"getLootTable"(resourceLocation0: $ResourceLocation$$Type): $LootTable
}

export namespace $LootDataResolver {
const probejs$$marker: never
}
export abstract class $LootDataResolver$$Static implements $LootDataResolver {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootItemConditionType } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemConditionType"
import { $LootContextUser } from "packages/net/minecraft/world/level/storage/loot/$LootContextUser"
import { $LootContext, $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $LootItemConditionMixin } from "packages/com/almostreliable/lootjs/mixin/$LootItemConditionMixin"
import { $Set } from "packages/java/util/$Set"
import { $ILootCondition } from "packages/com/almostreliable/lootjs/core/$ILootCondition"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext>, $ILootCondition, $LootItemConditionMixin {
"and"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"applyLootHandler"(context: $LootContext$$Type, loot: $List$$Type<$ItemStack$$Type>): boolean
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getType"(): $LootItemConditionType
"negate"(): $Predicate<$LootContext>
"or"(predicate0: $Predicate$$Type<$LootContext$$Type>): $Predicate<$LootContext>
"test"(lootContext0: $LootContext$$Type): boolean
"validate"(validationContext0: $ValidationContext$$Type): void
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootItemConditionType
}

export namespace $LootItemCondition {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $LootItemCondition$$Static implements $LootItemCondition {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder" {
import { $AllOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import { $CompositeLootItemCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$CompositeLootItemCondition$Builder"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"

export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
constructor(...builder0s: $LootItemCondition$Builder$$Type[])

public "and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
public "invert"(): $LootItemCondition$Builder
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $Enum } from "packages/java/lang/$Enum"

export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> {
static readonly "BLOCK_ENTITY": $CopyNameFunction$NameSource
static readonly "KILLER": $CopyNameFunction$NameSource
static readonly "KILLER_PLAYER": $CopyNameFunction$NameSource
static readonly "THIS": $CopyNameFunction$NameSource
readonly "name": string
readonly "param": $LootContextParam<any>

public static "getByName"(string0: string): $CopyNameFunction$NameSource
public static "valueOf"(string0: string): $CopyNameFunction$NameSource
public static "values"(): $CopyNameFunction$NameSource[]
}
}

declare module "packages/net/minecraft/world/level/storage/$WritableLevelData" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LevelData } from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $WritableLevelData extends $LevelData {
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type, levelHeightAccessor1: $LevelHeightAccessor$$Type): void
"getDayTime"(): long
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameTime"(): long
"getSpawnAngle"(): float
"getXSpawn"(): integer
"getYSpawn"(): integer
"getZSpawn"(): integer
"isDifficultyLocked"(): boolean
"isHardcore"(): boolean
"isRaining"(): boolean
"isThundering"(): boolean
"setRaining"(boolean0: boolean): void
"setSpawn"(blockPos0: $BlockPos$$Type, float1: float): void
"setSpawnAngle"(float0: float): void
"setXSpawn"(int0: integer): void
"setYSpawn"(int0: integer): void
"setZSpawn"(int0: integer): void
get "dayTime"(): long
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameTime"(): long
get "spawnAngle"(): float
get "xSpawn"(): integer
get "ySpawn"(): integer
get "zSpawn"(): integer
get "difficultyLocked"(): boolean
get "hardcore"(): boolean
get "raining"(): boolean
get "thundering"(): boolean
set "raining"(value: boolean)
set "spawnAngle"(value: float)
set "xSpawn"(value: integer)
set "ySpawn"(value: integer)
set "zSpawn"(value: integer)
}

export namespace $WritableLevelData {
const probejs$$marker: never
}
export abstract class $WritableLevelData$$Static implements $WritableLevelData {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer" {
import { $ComposableEntryContainer, $ComposableEntryContainer$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$ComposableEntryContainer"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $LootPoolEntry$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntry"
import { $LootPoolEntryType } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryType"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export class $LootPoolEntryContainer implements $ComposableEntryContainer {
readonly "conditions": $LootItemCondition[]

public "and"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
public "expand"(lootContext0: $LootContext$$Type, consumer1: $Consumer$$Type<$LootPoolEntry$$Type>): boolean
public "getType"(): $LootPoolEntryType
public "or"(composableEntryContainer0: $ComposableEntryContainer$$Type): $ComposableEntryContainer
public "validate"(validationContext0: $ValidationContext$$Type): void
get "type"(): $LootPoolEntryType
}
}

declare module "packages/net/minecraft/world/level/storage/$WorldData" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $ServerLevelData } from "packages/net/minecraft/world/level/storage/$ServerLevelData"
import { $EndDragonFight$Data, $EndDragonFight$Data$$Type } from "packages/net/minecraft/world/level/dimension/end/$EndDragonFight$Data"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Set } from "packages/java/util/$Set"
import { $LevelSettings } from "packages/net/minecraft/world/level/$LevelSettings"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $WorldOptions } from "packages/net/minecraft/world/level/levelgen/$WorldOptions"
import { $CrashReportCategory$$Type } from "packages/net/minecraft/$CrashReportCategory"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "packages/net/minecraft/world/level/$WorldDataConfiguration"

export interface $WorldData {
"createTag"(registryAccess0: $RegistryAccess$$Type, compoundTag1: $CompoundTag$$Type): $CompoundTag
"enabledFeatures"(): $FeatureFlagSet
"endDragonFightData"(): $EndDragonFight$Data
"fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type): void
"getAllowCommands"(): boolean
"getCustomBossEvents"(): $CompoundTag
"getDataConfiguration"(): $WorldDataConfiguration
"getDifficulty"(): $Difficulty
"getGameRules"(): $GameRules
"getGameType"(): $GameType
"getKnownServerBrands"(): $Set<string>
"getLevelName"(): string
"getLevelSettings"(): $LevelSettings
"getLoadedPlayerTag"(): $CompoundTag
"getRemovedFeatureFlags"(): $Set<string>
"getStorageVersionName"(int0: integer): string
"getVersion"(): integer
"isDebugWorld"(): boolean
"isDifficultyLocked"(): boolean
"isFlatWorld"(): boolean
"isHardcore"(): boolean
"overworldData"(): $ServerLevelData
"setCustomBossEvents"(compoundTag0: $CompoundTag$$Type): void
"setDataConfiguration"(worldDataConfiguration0: $WorldDataConfiguration$$Type): void
"setDifficulty"(difficulty0: $Difficulty$$Type): void
"setDifficultyLocked"(boolean0: boolean): void
"setEndDragonFightData"(data0: $EndDragonFight$Data$$Type): void
"setGameType"(gameType0: $GameType$$Type): void
"setModdedInfo"(string0: string, boolean1: boolean): void
"wasModded"(): boolean
"worldGenOptions"(): $WorldOptions
"worldGenSettingsLifecycle"(): $Lifecycle
get "allowCommands"(): boolean
get "customBossEvents"(): $CompoundTag
get "dataConfiguration"(): $WorldDataConfiguration
get "difficulty"(): $Difficulty
get "gameRules"(): $GameRules
get "gameType"(): $GameType
get "knownServerBrands"(): $Set<string>
get "levelName"(): string
get "levelSettings"(): $LevelSettings
get "loadedPlayerTag"(): $CompoundTag
get "removedFeatureFlags"(): $Set<string>
get "version"(): integer
get "debugWorld"(): boolean
get "difficultyLocked"(): boolean
get "flatWorld"(): boolean
get "hardcore"(): boolean
set "customBossEvents"(value: $CompoundTag$$Type)
set "dataConfiguration"(value: $WorldDataConfiguration$$Type)
set "difficulty"(value: $Difficulty$$Type)
set "difficultyLocked"(value: boolean)
set "gameType"(value: $GameType$$Type)
}

export namespace $WorldData {
const ANVIL_VERSION_ID: integer
const MCREGION_VERSION_ID: integer
}
export abstract class $WorldData$$Static implements $WorldData {
static readonly "ANVIL_VERSION_ID": integer
static readonly "MCREGION_VERSION_ID": integer

}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder" {
import { $AllOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder"
import { $AnyOfCondition$Builder } from "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export interface $LootItemCondition$Builder {
"and"(builder0: $LootItemCondition$Builder$$Type): $AllOfCondition$Builder
"build"(): $LootItemCondition
"invert"(): $LootItemCondition$Builder
"or"(builder0: $LootItemCondition$Builder$$Type): $AnyOfCondition$Builder
}

export namespace $LootItemCondition$Builder {
const probejs$$marker: never
}
export abstract class $LootItemCondition$Builder$$Static implements $LootItemCondition$Builder {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootPool" {
import { $LootItemFunction } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $LootPool$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootPool$Builder"
import { $ValidationContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$ValidationContext"
import { $LootPoolEntryContainer, $LootPoolEntryContainer$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LootItemCondition } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $NumberProvider, $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export class $LootPool {
readonly "conditions": $LootItemCondition[]
readonly "functions": $LootItemFunction[]

public "addRandomItems"(consumer0: $Consumer$$Type<$ItemStack$$Type>, lootContext1: $LootContext$$Type): void
public "freeze"(): void
public "getBonusRolls"(): $NumberProvider
public "getName"(): string
public "getRolls"(): $NumberProvider
public "isFrozen"(): boolean
public static "lootPool"(): $LootPool$Builder
public "setBonusRolls"(numberProvider0: $NumberProvider$$Type): void
public "setRolls"(numberProvider0: $NumberProvider$$Type): void
public "validate"(validationContext0: $ValidationContext$$Type): void
get "bonusRolls"(): $NumberProvider
set "bonusRolls"(value: $NumberProvider$$Type)
get "entries"(): $LootPoolEntryContainer[]
set "entries"(value: $LootPoolEntryContainer$$Type[])
get "rolls"(): $NumberProvider
set "rolls"(value: $NumberProvider$$Type)
get "name"(): string
get "frozen"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams$DynamicDrop" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LootParams$DynamicDrop {
"add"(consumer0: $Consumer$$Type<$ItemStack$$Type>): void
}

export namespace $LootParams$DynamicDrop {
const probejs$$marker: never
}
export abstract class $LootParams$DynamicDrop$$Static implements $LootParams$DynamicDrop {
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext$VisitedEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $LootDataType, $LootDataType$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataType"

export class $LootContext$VisitedEntry<T> extends $Record {
constructor(type: $LootDataType$$Type<T>, value: T)

public "type"(): $LootDataType<T>
public "value"(): T
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams" {
import { $LootContextParam$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootParams$DynamicDrop$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams$DynamicDrop"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $LootParams {
constructor(serverLevel0: $ServerLevel$$Type, map1: $Map$$Type<$LootContextParam$$Type<any>, any>, map2: $Map$$Type<$ResourceLocation$$Type, $LootParams$DynamicDrop$$Type>, float3: float)

public "addDynamicDrops"(resourceLocation0: $ResourceLocation$$Type, consumer1: $Consumer$$Type<$ItemStack$$Type>): void
public "getLevel"(): $ServerLevel
public "getLuck"(): float
public "getOptionalParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParamOrNull"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "getParameter"<T>(lootContextParam0: $LootContextParam$$Type<T>): T
public "hasParam"(lootContextParam0: $LootContextParam$$Type<any>): boolean
get "level"(): $ServerLevel
get "luck"(): float
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelVersion" {
import { $DataVersion } from "packages/net/minecraft/world/level/storage/$DataVersion"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"

export class $LevelVersion {
public "lastPlayed"(): long
public "levelDataVersion"(): integer
public "minecraftVersion"(): $DataVersion
public "minecraftVersionName"(): string
public static "parse"(dynamic0: $Dynamic$$Type<any>): $LevelVersion
public "snapshot"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/$DataVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataVersion {
static "MAIN_SERIES": string

constructor(int0: integer)
constructor(int0: integer, string1: string)

public "getSeries"(): string
public "getVersion"(): integer
public "isCompatible"(dataVersion0: $DataVersion$$Type): boolean
public "isSideSeries"(): boolean
get "series"(): string
get "version"(): integer
get "sideSeries"(): boolean
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/score/$ScoreboardNameProvider" {
import { $LootContextParam } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam"
import { $LootContext$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Set } from "packages/java/util/$Set"
import { $LootScoreProviderType } from "packages/net/minecraft/world/level/storage/loot/providers/score/$LootScoreProviderType"

export interface $ScoreboardNameProvider {
"getReferencedContextParams"(): $Set<$LootContextParam<any>>
"getScoreboardName"(lootContext0: $LootContext$$Type): string
"getType"(): $LootScoreProviderType
get "referencedContextParams"(): $Set<$LootContextParam<any>>
get "type"(): $LootScoreProviderType
}

export namespace $ScoreboardNameProvider {
const probejs$$marker: never
}
export abstract class $ScoreboardNameProvider$$Static implements $ScoreboardNameProvider {
}
}

