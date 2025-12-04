declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParams" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextParams$$Type = ($LootContextParams);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextParams_ = $LootContextParams$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootDataType$$Type<T> = ($LootDataType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootDataType_<T> = $LootDataType$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$AlternativesEntry$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AlternativesEntry$Builder$$Type = ($AlternativesEntry$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AlternativesEntry$Builder_ = $AlternativesEntry$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$AllOfCondition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AllOfCondition$Builder$$Type = ($AllOfCondition$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AllOfCondition$Builder_ = $AllOfCondition$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelSummary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelSummary$$Type = ($LevelSummary);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelSummary_ = $LevelSummary$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextParamSet$$Type = ($LootContextParamSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextParamSet_ = $LootContextParamSet$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelData$$Type = ($LevelData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelData_ = $LevelData$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$SequentialEntry$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SequentialEntry$Builder$$Type = ($SequentialEntry$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SequentialEntry$Builder_ = $SequentialEntry$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelResource$$Type = ($LevelResource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelResource_ = $LevelResource$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/nbt/$LootNbtProviderType" {
import { $NbtProvider, $NbtProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/nbt/$NbtProvider"
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootNbtProviderType extends $SerializerType<$NbtProvider> {
constructor(serializer0: $Serializer$$Type<$NbtProvider$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootNbtProviderType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootNbtProviderTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootNbtProviderType$$Type = ($LootNbtProviderType | Special.LootNbtProviderType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootNbtProviderType_ = $LootNbtProviderType$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$ComposableEntryContainer" {
import { $LootContext } from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $LootPoolEntry } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ComposableEntryContainer$$Type = ($ComposableEntryContainer | ((arg0: $LootContext, arg1: $Consumer<$LootPoolEntry>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ComposableEntryContainer_ = $ComposableEntryContainer$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContextUser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextUser$$Type = ($LootContextUser);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextUser_ = $LootContextUser$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootPool$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPool$Builder$$Type = ($LootPool$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPool$Builder_ = $LootPool$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/score/$LootScoreProviderType" {
import { $ScoreboardNameProvider, $ScoreboardNameProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/score/$ScoreboardNameProvider"
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootScoreProviderType extends $SerializerType<$ScoreboardNameProvider> {
constructor(serializer0: $Serializer$$Type<$ScoreboardNameProvider$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootScoreProviderType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootScoreProviderTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootScoreProviderType$$Type = ($LootScoreProviderType | Special.LootScoreProviderType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootScoreProviderType_ = $LootScoreProviderType$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction$Builder" {
import { $LootItemFunction$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemFunction$Builder$$Type = ($LootItemFunction$Builder | (() => $LootItemFunction$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemFunction$Builder_ = $LootItemFunction$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Serializer$$Type<T> = ($Serializer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Serializer_<T> = $Serializer$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataId" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootDataId$$Type<T> = ($LootDataId<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootDataId_<T> = $LootDataId$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelDirectory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelStorageSource$LevelDirectory$$Type = ($LevelStorageSource$LevelDirectory);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelStorageSource$LevelDirectory_ = $LevelStorageSource$LevelDirectory$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext$EntityTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContext$EntityTarget$$Type = ($LootContext$EntityTarget | ("this" | "killer" | "direct_killer" | "killer_player"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContext$EntityTarget_ = $LootContext$EntityTarget$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$PrimaryLevelData$SpecialWorldProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimaryLevelData$SpecialWorldProperty$$Type = ($PrimaryLevelData$SpecialWorldProperty | ("none" | "flat" | "debug"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimaryLevelData$SpecialWorldProperty_ = $PrimaryLevelData$SpecialWorldProperty$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$EntryGroup$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntryGroup$Builder$$Type = ($EntryGroup$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntryGroup$Builder_ = $EntryGroup$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NumberProvider$$Type = ($NumberProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NumberProvider_ = $NumberProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextParamSet$Builder$$Type = ($LootContextParamSet$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextParamSet$Builder_ = $LootContextParamSet$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemFunction$$Type = ($LootItemFunction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemFunction_ = $LootItemFunction$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$CompositeLootItemCondition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompositeLootItemCondition$Builder$$Type = ($CompositeLootItemCondition$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompositeLootItemCondition$Builder_ = $CompositeLootItemCondition$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/nbt/$NbtProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NbtProvider$$Type = ($NbtProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NbtProvider_ = $NbtProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$CommandStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandStorage$$Type = ($CommandStorage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandStorage_ = $CommandStorage$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContext$$Type = ($LootContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContext_ = $LootContext$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$ConditionUserBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConditionUserBuilder$$Type<T extends $ConditionUserBuilder<T>> = ($ConditionUserBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConditionUserBuilder_<T extends $ConditionUserBuilder<T>> = $ConditionUserBuilder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootDataManager$$Type = ($LootDataManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootDataManager_ = $LootDataManager$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$SerializerType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SerializerType$$Type<T> = ($SerializerType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SerializerType_<T> = $SerializerType$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunctionType" {
import { $LootItemFunction, $LootItemFunction$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootItemFunctionType extends $SerializerType<$LootItemFunction> {
constructor(serializer0: $Serializer$$Type<$LootItemFunction$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootFunctionType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootFunctionTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemFunctionType$$Type = ($LootItemFunctionType | Special.LootFunctionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemFunctionType_ = $LootItemFunctionType$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelStorageSource$$Type = ($LevelStorageSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelStorageSource_ = $LevelStorageSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelStorageSource$LevelStorageAccess$$Type = ($LevelStorageSource$LevelStorageAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelStorageSource$LevelStorageAccess_ = $LevelStorageSource$LevelStorageAccess$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContextParam$$Type<T> = ($LootContextParam<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContextParam_<T> = $LootContextParam$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/$PlayerDataStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerDataStorage$$Type = ($PlayerDataStorage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerDataStorage_ = $PlayerDataStorage$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootParams$Builder$$Type = ($LootParams$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootParams$Builder_ = $LootParams$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelSummary$BackupStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelSummary$BackupStatus$$Type = ($LevelSummary$BackupStatus | ("none" | "downgrade" | "upgrade_to_snapshot"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelSummary$BackupStatus_ = $LevelSummary$BackupStatus$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$ValidationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ValidationContext$$Type = ($ValidationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ValidationContext_ = $ValidationContext$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$FunctionUserBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FunctionUserBuilder$$Type<T extends $FunctionUserBuilder<T>> = ($FunctionUserBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FunctionUserBuilder_<T extends $FunctionUserBuilder<T>> = $FunctionUserBuilder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootTable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTable$$Type = ($LootTable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTable_ = $LootTable$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$DimensionDataStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DimensionDataStorage$$Type = ($DimensionDataStorage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DimensionDataStorage_ = $DimensionDataStorage$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$ServerLevelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerLevelData$$Type = ($ServerLevelData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerLevelData_ = $ServerLevelData$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPoolEntry$$Type = ($LootPoolEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPoolEntry_ = $LootPoolEntry$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelCandidates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelStorageSource$LevelCandidates$$Type = ($LevelStorageSource$LevelCandidates);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelStorageSource$LevelCandidates_ = $LevelStorageSource$LevelCandidates$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTable$Builder$$Type = ($LootTable$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTable$Builder_ = $LootTable$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPoolEntryContainer$Builder$$Type<T extends $LootPoolEntryContainer$Builder<T>> = ($LootPoolEntryContainer$Builder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPoolEntryContainer$Builder_<T extends $LootPoolEntryContainer$Builder<T>> = $LootPoolEntryContainer$Builder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootDataResolver" {
import { $LootDataId } from "packages/net/minecraft/world/level/storage/loot/$LootDataId"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootDataResolver$$Type = ($LootDataResolver | ((arg0: $LootDataId<T>) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootDataResolver_ = $LootDataResolver$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemCondition$$Type = ($LootItemCondition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemCondition_ = $LootItemCondition$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$AnyOfCondition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnyOfCondition$Builder$$Type = ($AnyOfCondition$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnyOfCondition$Builder_ = $AnyOfCondition$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/functions/$CopyNameFunction$NameSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CopyNameFunction$NameSource$$Type = ($CopyNameFunction$NameSource | ("this" | "killer" | "killer_player" | "block_entity"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CopyNameFunction$NameSource_ = $CopyNameFunction$NameSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$WritableLevelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WritableLevelData$$Type = ($WritableLevelData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WritableLevelData_ = $WritableLevelData$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPoolEntryContainer$$Type = ($LootPoolEntryContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPoolEntryContainer_ = $LootPoolEntryContainer$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$WorldData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldData$$Type = ($WorldData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldData_ = $WorldData$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder" {
import { $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemCondition$Builder$$Type = ($LootItemCondition$Builder | (() => $LootItemCondition$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemCondition$Builder_ = $LootItemCondition$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootPool" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPool$$Type = ($LootPool);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPool_ = $LootPool$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams$DynamicDrop" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootParams$DynamicDrop$$Type = ($LootParams$DynamicDrop | ((arg0: $Consumer<$ItemStack>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootParams$DynamicDrop_ = $LootParams$DynamicDrop$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootContext$VisitedEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootContext$VisitedEntry$$Type<T> = ($LootContext$VisitedEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootContext$VisitedEntry_<T> = $LootContext$VisitedEntry$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/$LootParams" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootParams$$Type = ($LootParams);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootParams_ = $LootParams$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemConditionType" {
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $LootItemCondition, $LootItemCondition$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootItemConditionType extends $SerializerType<$LootItemCondition> {
constructor(serializer0: $Serializer$$Type<$LootItemCondition$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootConditionType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootConditionTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootItemConditionType$$Type = ($LootItemConditionType | Special.LootConditionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootItemConditionType_ = $LootItemConditionType$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryType" {
import { $LootPoolEntryContainer, $LootPoolEntryContainer$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootPoolEntryType extends $SerializerType<$LootPoolEntryContainer> {
constructor(serializer0: $Serializer$$Type<$LootPoolEntryContainer$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootPoolEntryType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootPoolEntryTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootPoolEntryType$$Type = ($LootPoolEntryType | Special.LootPoolEntryType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootPoolEntryType_ = $LootPoolEntryType$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$LevelVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelVersion$$Type = ($LevelVersion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelVersion_ = $LevelVersion$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/$DataVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataVersion$$Type = ($DataVersion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataVersion_ = $DataVersion$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/score/$ScoreboardNameProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScoreboardNameProvider$$Type = ($ScoreboardNameProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScoreboardNameProvider_ = $ScoreboardNameProvider$$Type;
}
}

declare module "packages/net/minecraft/world/level/storage/loot/providers/number/$LootNumberProviderType" {
import { $Serializer$$Type } from "packages/net/minecraft/world/level/storage/loot/$Serializer"
import { $NumberProvider, $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $SerializerType } from "packages/net/minecraft/world/level/storage/loot/$SerializerType"

export class $LootNumberProviderType extends $SerializerType<$NumberProvider> {
constructor(serializer0: $Serializer$$Type<$NumberProvider$$Type>)

/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.LootNumberProviderType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.LootNumberProviderTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootNumberProviderType$$Type = ($LootNumberProviderType | Special.LootNumberProviderType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootNumberProviderType_ = $LootNumberProviderType$$Type;
}
}

