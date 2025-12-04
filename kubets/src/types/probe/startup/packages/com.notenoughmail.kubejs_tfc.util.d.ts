declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildClimateRangeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildClimateRangeData$$Type = ($BuildClimateRangeData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildClimateRangeData_ = $BuildClimateRangeData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeISPExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IFirmaLifeISPExtensions$$Type = ($IFirmaLifeISPExtensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IFirmaLifeISPExtensions_ = $IFirmaLifeISPExtensions$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Cluster" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildVeinProperties$Cluster$$Type = ($BuildVeinProperties$Cluster);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildVeinProperties$Cluster_ = $BuildVeinProperties$Cluster$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$Builder$$Type = ($KubeJSClimateModel$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$Builder_ = $KubeJSClimateModel$Builder$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$MiscBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MiscBindings$$Type = ($MiscBindings | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MiscBindings_ = $MiscBindings$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCIngredientBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TFCIngredientBindings$$Type = ($TFCIngredientBindings | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TFCIngredientBindings_ = $TFCIngredientBindings$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildVeinProperties$$Type = ($BuildVeinProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildVeinProperties_ = $BuildVeinProperties$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$CalendarBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CalendarBindings$$Type = ($CalendarBindings | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CalendarBindings_ = $CalendarBindings$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$Noise3DMixin" {
import { $Noise2D, $Noise2D$$Type } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise3D } from "packages/net/dries007/tfc/world/noise/$Noise3D"
import { $Noise3DExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise3DExtension"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Noise3DMixin extends $Noise3DExtension {
/** Dissolves this `Noise3D` to a `Noise2D` by using the provided `Noise2D` as the y-value */
"dissolve"(yNoise: $Noise2D$$Type): $Noise2D
/** Rotate this noise around the x-axis */
"rotateX"(angle: double): $Noise3D
/** Rotate this noise around the y-axis */
"rotateY"(angle: double): $Noise3D
/** Rotate this noise around the z-axis */
"rotateZ"(angle: double): $Noise3D
/** Swap the x and y coordinates */
"transposeXY"(): $Noise3D
/** Swap the x and z coordinates */
"transposeXZ"(): $Noise3D
/** Swap the y and z coordinates */
"transposeYZ"(): $Noise3D
}

export namespace $Noise3DMixin {
const probejs$$marker: never
}
export abstract class $Noise3DMixin$$Static implements $Noise3DMixin {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Noise3DMixin$$Type = ($Noise3DMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Noise3DMixin_ = $Noise3DMixin$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildDrinkableData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildDrinkableData$$Type = ($BuildDrinkableData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildDrinkableData_ = $BuildDrinkableData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStateMapEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$BlockToBlockStateMapEntry$$Type = ($WorldGenUtils$BlockToBlockStateMapEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$BlockToBlockStateMapEntry_ = $WorldGenUtils$BlockToBlockStateMapEntry$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$ITFCCCMoldItemBuilderExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ITFCCCMoldItemBuilderExtensions$$Type = ($ITFCCCMoldItemBuilderExtensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ITFCCCMoldItemBuilderExtensions_ = $ITFCCCMoldItemBuilderExtensions$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$CustomGlassOperations$StackSupplier" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomGlassOperations$StackSupplier$$Type = ($CustomGlassOperations$StackSupplier | (() => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomGlassOperations$StackSupplier_ = $CustomGlassOperations$StackSupplier$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise2DExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Noise2DExtension$$Type = ($Noise2DExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Noise2DExtension_ = $Noise2DExtension$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$Noise2DMixin" {
import { $Noise2D } from "packages/net/dries007/tfc/world/noise/$Noise2D"
import { $Noise2DExtension } from "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise2DExtension"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Noise2DMixin extends $Noise2DExtension {
/** Rotates the coordinate grid by the given angle (in degrees) */
"rotate"(angle: double): $Noise2D
/** Swaps the x and z coordinate */
"transpose"(): $Noise2D
}

export namespace $Noise2DMixin {
const probejs$$marker: never
}
export abstract class $Noise2DMixin$$Static implements $Noise2DMixin {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Noise2DMixin$$Type = ($Noise2DMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Noise2DMixin_ = $Noise2DMixin$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$TemperatureCallback" {
import { $LevelReader } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$TemperatureCallback$$Type = ($KubeJSClimateModel$TemperatureCallback | ((level: $LevelReader, pos: $BlockPos, calendarTicks: long, daysInMonth: integer) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$TemperatureCallback_ = $KubeJSClimateModel$TemperatureCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$ModifierApplicator" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSItemStackModifier$ModifierApplicator$$Type = ($KubeJSItemStackModifier$ModifierApplicator | ((output: $ItemStack, input: $ItemStack) => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSItemStackModifier$ModifierApplicator_ = $KubeJSItemStackModifier$ModifierApplicator$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$MossGrowingCallback" {
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MossGrowingCallback$$Type = ($MossGrowingCallback | ((container: $BlockContainerJS, needsWater: boolean) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MossGrowingCallback_ = $MossGrowingCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/$IngredientTypeMixin" {
import { $InputReplacement, $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement"
import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS"
import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IngredientTypeMixin extends $InputReplacement {
"replaceInput"(recipe: $RecipeJS$$Type, match: $ReplacementMatch$$Type, original: $InputReplacement$$Type): any
"transform"(transformer: $InputReplacementTransformer$$Type): $InputReplacementTransformer$Replacement
}

export namespace $IngredientTypeMixin {
function of(o: any): $InputReplacement
}
export abstract class $IngredientTypeMixin$$Static implements $IngredientTypeMixin {
static "of"(o: any): $InputReplacement
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IngredientTypeMixin$$Type = ($IngredientTypeMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IngredientTypeMixin_ = $IngredientTypeMixin$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IArtisanalISPExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IArtisanalISPExtensions$$Type = ($IArtisanalISPExtensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IArtisanalISPExtensions_ = $IArtisanalISPExtensions$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFaunaData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildFaunaData$$Type = ($BuildFaunaData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildFaunaData_ = $BuildFaunaData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$SupportAccessor" {
import { $BlockIngredient, $BlockIngredient$$Type } from "packages/net/dries007/tfc/common/recipes/ingredients/$BlockIngredient"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SupportAccessor {
"kubejs_tfc$Ingredient"(): $BlockIngredient
}

export namespace $SupportAccessor {
const probejs$$marker: never
}
export abstract class $SupportAccessor$$Static implements $SupportAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportAccessor$$Type = ($SupportAccessor | (() => $BlockIngredient$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportAccessor_ = $SupportAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$BlockBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BlockBuilderAccessor {
}

export namespace $BlockBuilderAccessor {
const probejs$$marker: never
}
export abstract class $BlockBuilderAccessor$$Static implements $BlockBuilderAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBuilderAccessor$$Type = ($BlockBuilderAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBuilderAccessor_ = $BlockBuilderAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$DataManagerAccessor" {
import { $BiMap, $BiMap$$Type } from "packages/com/google/common/collect/$BiMap"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DataManagerAccessor<T> {
"kubejs_tfc$Types"(): $BiMap<$ResourceLocation, T>
}

export namespace $DataManagerAccessor {
const probejs$$marker: never
}
export abstract class $DataManagerAccessor$$Static<T> implements $DataManagerAccessor<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataManagerAccessor$$Type<T> = ($DataManagerAccessor<T> | (() => $BiMap$$Type<$ResourceLocation$$Type, T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataManagerAccessor_<T> = $DataManagerAccessor$$Type<T>;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/world/$WrappedChunkGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WrappedChunkGenerator$$Type = ($WrappedChunkGenerator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WrappedChunkGenerator_ = $WrappedChunkGenerator$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$ForestTypesMapEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$ForestTypesMapEntry$$Type = ($WorldGenUtils$ForestTypesMapEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$ForestTypesMapEntry_ = $WorldGenUtils$ForestTypesMapEntry$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryMetal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NamedRegistryMetal$$Type = ($NamedRegistryMetal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NamedRegistryMetal_ = $NamedRegistryMetal$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IFirmaLifeDataExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IFirmaLifeDataExtension$$Type = ($IFirmaLifeDataExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IFirmaLifeDataExtension_ = $IFirmaLifeDataExtension$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreePlacement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$TreePlacement$$Type = ($WorldGenUtils$TreePlacement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$TreePlacement_ = $WorldGenUtils$TreePlacement$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Pipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildVeinProperties$Pipe$$Type = ($BuildVeinProperties$Pipe);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildVeinProperties$Pipe_ = $BuildVeinProperties$Pipe$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToBlockStatesMapEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$BlockToBlockStatesMapEntry$$Type = ($WorldGenUtils$BlockToBlockStatesMapEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$BlockToBlockStatesMapEntry_ = $WorldGenUtils$BlockToBlockStatesMapEntry$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildPortionData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildPortionData$$Type = ($BuildPortionData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildPortionData_ = $BuildPortionData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$ItemStackProviderJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemStackProviderJS$$Type = ($ItemStackProviderJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemStackProviderJS_ = $ItemStackProviderJS$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildEffectData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildEffectData$$Type = ($BuildEffectData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildEffectData_ = $BuildEffectData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Root" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$Root$$Type = ($WorldGenUtils$Root);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$Root_ = $WorldGenUtils$Root$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$RockLayerSettingsAccessor" {
import { $RockLayerSettings$Data, $RockLayerSettings$Data$$Type } from "packages/net/dries007/tfc/world/settings/$RockLayerSettings$Data"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RockLayerSettingsAccessor {
"kubejs_tfc$Data"(): $RockLayerSettings$Data
}

export namespace $RockLayerSettingsAccessor {
const probejs$$marker: never
}
export abstract class $RockLayerSettingsAccessor$$Static implements $RockLayerSettingsAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RockLayerSettingsAccessor$$Type = ($RockLayerSettingsAccessor | (() => $RockLayerSettings$Data$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RockLayerSettingsAccessor_ = $RockLayerSettingsAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$OnChunkLoadCallback" {
import { $ChunkData } from "packages/net/dries007/tfc/world/chunkdata/$ChunkData"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $WorldGenLevel } from "packages/net/minecraft/world/level/$WorldGenLevel"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$OnChunkLoadCallback$$Type = ($KubeJSClimateModel$OnChunkLoadCallback | ((level: $WorldGenLevel, chunk: $ChunkAccess, chunkData: $ChunkData) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$OnChunkLoadCallback_ = $KubeJSClimateModel$OnChunkLoadCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/$IChunkGenWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IChunkGenWrapper$$Type = ($IChunkGenWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IChunkGenWrapper_ = $IChunkGenWrapper$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$TreeLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$TreeLayer$$Type = ($WorldGenUtils$TreeLayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$TreeLayer_ = $WorldGenUtils$TreeLayer$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Flatness" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlacedFeatureProperties$Flatness$$Type = ($PlacedFeatureProperties$Flatness);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlacedFeatureProperties$Flatness_ = $PlacedFeatureProperties$Flatness$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$BlockEntityTypeAccessor" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BlockEntityTypeAccessor {
"kubejs_tfc$GetBlocks"(): $Set<$Block>
"kubejs_tfc$SetBlocks"(blocks: $Set$$Type<$Block$$Type>): void
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityTypeAccessor$$Type = ($BlockEntityTypeAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityTypeAccessor_ = $BlockEntityTypeAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IDataConstructor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDataConstructor$$Type = ($IDataConstructor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDataConstructor_ = $IDataConstructor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$ItemDefinitionAccessor" {
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ItemDefinitionAccessor {
"kubejs_tfc$Ingredient"(): $Ingredient
}

export namespace $ItemDefinitionAccessor {
const probejs$$marker: never
}
export abstract class $ItemDefinitionAccessor$$Static implements $ItemDefinitionAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemDefinitionAccessor$$Type = ($ItemDefinitionAccessor | (() => $Ingredient$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemDefinitionAccessor_ = $ItemDefinitionAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$ChunkDataAccessor" {
import { $LerpFloatLayer } from "packages/net/dries007/tfc/world/chunkdata/$LerpFloatLayer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChunkDataAccessor {
"kubejs_tfc$Rain"(): $LerpFloatLayer
"kubejs_tfc$Temp"(): $LerpFloatLayer
}

export namespace $ChunkDataAccessor {
const probejs$$marker: never
}
export abstract class $ChunkDataAccessor$$Static implements $ChunkDataAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkDataAccessor$$Type = ($ChunkDataAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkDataAccessor_ = $ChunkDataAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$Noise3DExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Noise3DExtension$$Type = ($Noise3DExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Noise3DExtension_ = $Noise3DExtension$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$IndirectHashCollectionAccessor" {
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IndirectHashCollectionAccessor<K, R> {
"kubejs_tfc$InternalMap"(): $Map<K, $Collection<R>>
}

export namespace $IndirectHashCollectionAccessor {
const probejs$$marker: never
}
export abstract class $IndirectHashCollectionAccessor$$Static<K, R> implements $IndirectHashCollectionAccessor<K, R> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IndirectHashCollectionAccessor$$Type<K, R> = ($IndirectHashCollectionAccessor<K, R> | (() => $Map$$Type<K, $Collection$$Type<R>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IndirectHashCollectionAccessor_<K, R> = $IndirectHashCollectionAccessor$$Type<K, R>;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ItemStackProviderBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemStackProviderBindings$$Type = ($ItemStackProviderBindings | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemStackProviderBindings_ = $ItemStackProviderBindings$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/$LayeredArea" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayeredArea$$Type = ($LayeredArea);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayeredArea_ = $LayeredArea$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$NamedRegistryWood" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NamedRegistryWood$$Type = ($NamedRegistryWood);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NamedRegistryWood_ = $NamedRegistryWood$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlacedFeatureProperties$$Type = ($PlacedFeatureProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlacedFeatureProperties_ = $PlacedFeatureProperties$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$RockDataAccessor" {
import { $ChunkRockDataCache, $ChunkRockDataCache$$Type } from "packages/net/dries007/tfc/world/chunkdata/$ChunkRockDataCache"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RockDataAccessor {
"kubejs_tfc$GetCache"(): $ChunkRockDataCache
}

export namespace $RockDataAccessor {
const probejs$$marker: never
}
export abstract class $RockDataAccessor$$Static implements $RockDataAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RockDataAccessor$$Type = ($RockDataAccessor | (() => $ChunkRockDataCache$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RockDataAccessor_ = $RockDataAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$WithInventoryApplicator" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Iterable } from "packages/java/lang/$Iterable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSItemStackModifier$WithInventoryApplicator$$Type = ($KubeJSItemStackModifier$WithInventoryApplicator | ((output: $ItemStack, input: $ItemStack, inventory: $Iterable<$ItemStack>) => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSItemStackModifier$WithInventoryApplicator_ = $KubeJSItemStackModifier$WithInventoryApplicator$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$FissureDecoration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$FissureDecoration$$Type = ($WorldGenUtils$FissureDecoration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$FissureDecoration_ = $WorldGenUtils$FissureDecoration$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$PlacedFeatureProperties$Climate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlacedFeatureProperties$Climate$$Type = ($PlacedFeatureProperties$Climate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlacedFeatureProperties$Climate_ = $PlacedFeatureProperties$Climate$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/$KubeJSItemStackModifier$SimpleApplicator" {
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSItemStackModifier$SimpleApplicator$$Type = ($KubeJSItemStackModifier$SimpleApplicator | ((stack: $ItemStack) => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSItemStackModifier$SimpleApplicator_ = $KubeJSItemStackModifier$SimpleApplicator$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/data/$BuildFoodItemData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildFoodItemData$$Type = ($BuildFoodItemData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildFoodItemData_ = $BuildFoodItemData$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$BlockToWeightedBlockStateMapEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type = ($WorldGenUtils$BlockToWeightedBlockStateMapEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$BlockToWeightedBlockStateMapEntry_ = $WorldGenUtils$BlockToWeightedBlockStateMapEntry$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/$WorldGenUtils$Trunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenUtils$Trunk$$Type = ($WorldGenUtils$Trunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenUtils$Trunk_ = $WorldGenUtils$Trunk$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPosLong2FloatCallback" {
import { $LevelReader } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type = ($KubeJSClimateModel$LevelPosLong2FloatCallback | ((level: $LevelReader, pos: $BlockPos, calendarTicks: long) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$LevelPosLong2FloatCallback_ = $KubeJSClimateModel$LevelPosLong2FloatCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$LevelPos2FloatCallback" {
import { $LevelReader } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$LevelPos2FloatCallback$$Type = ($KubeJSClimateModel$LevelPos2FloatCallback | ((level: $LevelReader, pos: $BlockPos) => float));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$LevelPos2FloatCallback_ = $KubeJSClimateModel$LevelPos2FloatCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/extensions/$IBeneathDataExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBeneathDataExtension$$Type = ($IBeneathDataExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBeneathDataExtension_ = $IBeneathDataExtension$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$TFCBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TFCBindings$$Type = ($TFCBindings);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TFCBindings_ = $TFCBindings$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/helpers/ducks/$IKubeJSTFCHandHeldItemBuilderExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IKubeJSTFCHandHeldItemBuilderExtension$$Type = ($IKubeJSTFCHandHeldItemBuilderExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IKubeJSTFCHandHeldItemBuilderExtension_ = $IKubeJSTFCHandHeldItemBuilderExtension$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/worldgen/$BuildVeinProperties$Disc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuildVeinProperties$Disc$$Type = ($BuildVeinProperties$Disc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuildVeinProperties$Disc_ = $BuildVeinProperties$Disc$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/custom/climate/$KubeJSClimateModel$WindVectorCallback" {
import { $Vec2$$Type } from "packages/net/minecraft/world/phys/$Vec2"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KubeJSClimateModel$WindVectorCallback$$Type = ($KubeJSClimateModel$WindVectorCallback | ((level: $Level, pos: $BlockPos, calendarTicks: long) => $Vec2$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KubeJSClimateModel$WindVectorCallback_ = $KubeJSClimateModel$WindVectorCallback$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/mixin/accessor/$SurfaceRulesContextAccessor" {
import { $WorldGenerationContext } from "packages/net/minecraft/world/level/levelgen/$WorldGenerationContext"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SurfaceRulesContextAccessor {
"kubejs_tfc$GetChunk"(): $ChunkAccess
"kubejs_tfc$GetWorldCtx"(): $WorldGenerationContext
}

export namespace $SurfaceRulesContextAccessor {
const probejs$$marker: never
}
export abstract class $SurfaceRulesContextAccessor$$Static implements $SurfaceRulesContextAccessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SurfaceRulesContextAccessor$$Type = ($SurfaceRulesContextAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SurfaceRulesContextAccessor_ = $SurfaceRulesContextAccessor$$Type;
}
}

declare module "packages/com/notenoughmail/kubejs_tfc/util/implementation/bindings/$ClimateBindings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClimateBindings$$Type = ($ClimateBindings | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClimateBindings_ = $ClimateBindings$$Type;
}
}

