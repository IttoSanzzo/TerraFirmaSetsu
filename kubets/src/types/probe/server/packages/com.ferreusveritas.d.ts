declare module "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowSignal$$Type = ($GrowSignal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowSignal_ = $GrowSignal$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$RootsJoCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootsJoCode$$Type = ($RootsJoCode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootsJoCode_ = $RootsJoCode$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$BranchLoaderBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchLoaderBuilder$$Type = ($BranchLoaderBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchLoaderBuilder_ = $BranchLoaderBuilder$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicLeavesBlock$$Type = ($DynamicLeavesBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicLeavesBlock_ = $DynamicLeavesBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGrowContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PostGrowContext$$Type = ($PostGrowContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PostGrowContext_ = $PostGrowContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry" {
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypedRegistry$$Type<V extends $RegistryEntry<V>> = ($TypedRegistry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypedRegistry_<V extends $RegistryEntry<V>> = $TypedRegistry$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$CommonOverride" {
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Species$CommonOverride$$Type = ($Species$CommonOverride | ((arg0: $BlockGetter, arg1: $BlockPos) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Species$CommonOverride_ = $Species$CommonOverride$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellSolver" {
import { $Cell } from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CellSolver$$Type = ($CellSolver | ((arg0: $Cell[]) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CellSolver_ = $CellSolver$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicTrees$DestroyMode$$Type = ($DynamicTrees$DestroyMode | ("ignore" | "sloppy" | "set_radius" | "harvest" | "rot" | "overflow"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicTrees$DestroyMode_ = $DynamicTrees$DestroyMode$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$FutureBreakable" {
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FutureBreakable$$Type = ($FutureBreakable | ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $LivingEntity) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FutureBreakable_ = $FutureBreakable$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration" {
import { $Configurable, $Configurable$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Configuration$$Type<T extends $Configuration<T, C>, C extends $Configurable> = ($Configuration<T, C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Configuration_<T extends $Configuration<T, C>, C extends $Configurable> = $Configuration$$Type<T, C>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/event/$TransitionSaplingToTreeEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TransitionSaplingToTreeEvent$$Type = ($TransitionSaplingToTreeEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TransitionSaplingToTreeEvent_ = $TransitionSaplingToTreeEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootConnections$$Type = ($RootConnections);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootConnections_ = $RootConnections$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry" {
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Registry$$Type<V extends $RegistryEntry<V>> = ($Registry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Registry_<V extends $RegistryEntry<V>> = $Registry$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootyBlock$$Type = ($RootyBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootyBlock_ = $RootyBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/$SeedSaplingRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SeedSaplingRecipe$$Type = ($SeedSaplingRecipe);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SeedSaplingRecipe_ = $SeedSaplingRecipe$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$IncludesExcludesHolderSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IncludesExcludesHolderSet$$Type<T> = ($IncludesExcludesHolderSet<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IncludesExcludesHolderSet_<T> = $IncludesExcludesHolderSet$$Type<T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData$PosType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchDestructionData$PosType$$Type = ($BranchDestructionData$PosType | ("branches" | "leaves" | "endpoints"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchDestructionData$PosType_ = $BranchDestructionData$PosType$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor$IterationAction" {
import { $ConfigurationProperty } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PropertiesAccessor$IterationAction$$Type<V> = ($PropertiesAccessor$IterationAction<V> | ((arg0: $ConfigurationProperty<V>, arg1: V) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PropertiesAccessor$IterationAction_<V> = $PropertiesAccessor$IterationAction$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoissonDisc$$Type = ($PoissonDisc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoissonDisc_ = $PoissonDisc$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SafeChunkBounds$$Type = ($SafeChunkBounds);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SafeChunkBounds_ = $SafeChunkBounds$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenerationContext$$Type = ($GenerationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenerationContext_ = $GenerationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PreGenerationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PreGenerationContext$$Type = ($PreGenerationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PreGenerationContext_ = $PreGenerationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections$ConnectionLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootConnections$ConnectionLevel$$Type = ($RootConnections$ConnectionLevel | ("mid" | "low" | "high"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootConnections$ConnectionLevel_ = $RootConnections$ConnectionLevel$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/models/$FallingTreeEntityModel$TreeQuadData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FallingTreeEntityModel$TreeQuadData$$Type = ($FallingTreeEntityModel$TreeQuadData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FallingTreeEntityModel$TreeQuadData_ = $FallingTreeEntityModel$TreeQuadData$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FallingTreeEntity$$Type = ($FallingTreeEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FallingTreeEntity_ = $FallingTreeEntity$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeResourceManager$$Type = ($TreeResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeResourceManager_ = $TreeResourceManager$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreePart$$Type = ($TreePart);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreePart_ = $TreePart$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Species } from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootyBlockDecayer$$Type = ($RootyBlockDecayer | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Species) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootyBlockDecayer_ = $RootyBlockDecayer$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowableBlock$MatureAction$$Type = ($GrowableBlock$MatureAction | ("default" | "drop" | "rot"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowableBlock$MatureAction_ = $GrowableBlock$MatureAction$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$RayTraceCollision" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RayTraceCollision$$Type = ($RayTraceCollision | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RayTraceCollision_ = $RayTraceCollision$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowableBlock$$Type = ($GrowableBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowableBlock_ = $GrowableBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$DependencyKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Generator$DependencyKey$$Type<T> = ($Generator$DependencyKey<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Generator$DependencyKey_<T> = $Generator$DependencyKey$$Type<T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryEntry$$Type<T extends $RegistryEntry<T>> = ($RegistryEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryEntry_<T extends $RegistryEntry<T>> = $RegistryEntry$$Type<T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PostRotContext$$Type = ($PostRotContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PostRotContext_ = $PostRotContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SubstanceEffect$$Type = ($SubstanceEffect);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SubstanceEffect_ = $SubstanceEffect$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationTemplate" {
import { $Configuration, $Configuration$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigurationTemplate$$Type<C extends $Configuration<C, any>> = ($ConfigurationTemplate<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigurationTemplate_<C extends $Configuration<C, any>> = $ConfigurationTemplate$$Type<C>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper" {
import { $Consumer } from "packages/java/util/function/$Consumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Result$Mapper$$Type<T, V> = ($Result$Mapper<T, V> | ((arg0: T, arg1: $Consumer<string>) => V));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Result$Mapper_<T, V> = $Result$Mapper$$Type<T, V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationHandler$$Type = ($AnimationHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationHandler_ = $AnimationHandler$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowthLogicKit$$Type = ($GrowthLogicKit);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowthLogicKit_ = $GrowthLogicKit$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SoilProperties$$Type = ($SoilProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SoilProperties_ = $SoilProperties$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry" {
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleRegistry$$Type<V extends $RegistryEntry<V>> = ($SimpleRegistry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleRegistry_<V extends $RegistryEntry<V>> = $SimpleRegistry$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/loading/$ResourceLoader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceLoader$$Type<R> = ($ResourceLoader<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceLoader_<R> = $ResourceLoader$$Type<R>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchBlock$$Type = ($BranchBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchBlock_ = $BranchBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$FullGenerationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FullGenerationContext$$Type = ($FullGenerationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FullGenerationContext_ = $FullGenerationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator" {
import { $DataProvider, $DataProvider$$Type } from "packages/net/minecraft/data/$DataProvider"
import { $DTDataProvider, $DTDataProvider$$Type } from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Generator$$Type<P extends ($DataProvider & $DTDataProvider), I> = ($Generator<P, I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Generator_<P extends ($DataProvider & $DTDataProvider), I> = $Generator$$Type<P, I>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableBiFunction" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThrowableBiFunction$$Type<A, B, R, T extends $Throwable> = ($ThrowableBiFunction<A, B, R, T> | ((arg0: A, arg1: B) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThrowableBiFunction_<A, B, R, T extends $Throwable> = $ThrowableBiFunction$$Type<A, B, R, T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$FilterOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleVoxmap$FilterOp$$Type = ($SimpleVoxmap$FilterOp | ((arg0: byte) => byte));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleVoxmap$FilterOp_ = $SimpleVoxmap$FilterOp$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$Connections" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Connections$$Type = ($Connections);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Connections_ = $Connections$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DataGenerationStreamEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataGenerationStreamEvent$$Type = ($DataGenerationStreamEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataGenerationStreamEvent_ = $DataGenerationStreamEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FruitBlock$$Type = ($FruitBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FruitBlock_ = $FruitBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NodeInspector$$Type = ($NodeInspector);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NodeInspector_ = $NodeInspector$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/item/$Seed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Seed$$Type = ($Seed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Seed_ = $Seed$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$VoluntarySeedDropEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VoluntarySeedDropEvent$$Type = ($VoluntarySeedDropEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VoluntarySeedDropEvent_ = $VoluntarySeedDropEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/models/$ModelTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelTracker$$Type = ($ModelTracker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelTracker_ = $ModelTracker$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTDataProvider$$Type = ($DTDataProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTDataProvider_ = $DTDataProvider$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/$JsonDeserialisers$RegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JsonDeserialisers$RegistryEvent$$Type = ($JsonDeserialisers$RegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JsonDeserialisers$RegistryEvent_ = $JsonDeserialisers$RegistryEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry" {
import { $Configuration, $Configuration$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import { $ConfigurableRegistryEntry, $ConfigurableRegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigurableRegistry$$Type<V extends $ConfigurableRegistryEntry<V, C>, C extends $Configuration<C, V>> = ($ConfigurableRegistry<V, C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigurableRegistry_<V extends $ConfigurableRegistryEntry<V, C>, C extends $Configuration<C, V>> = $ConfigurableRegistry$$Type<V, C>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapSignal$$Type = ($MapSignal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapSignal_ = $MapSignal$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreePart$TreePartType$$Type = ($TreePart$TreePartType | ("null" | "root" | "branch" | "leaves" | "other"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreePart$TreePartType_ = $TreePart$TreePartType$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$BiomeSuitabilityEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiomeSuitabilityEvent$$Type = ($BiomeSuitabilityEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiomeSuitabilityEvent_ = $BiomeSuitabilityEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry" {
import { $Configuration, $Configuration$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigurableRegistryEntry$$Type<T extends $ConfigurableRegistryEntry<T, C>, C extends $Configuration<C, T>> = ($ConfigurableRegistryEntry<T, C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigurableRegistryEntry_<T extends $ConfigurableRegistryEntry<T, C>, C extends $Configuration<C, T>> = $ConfigurableRegistryEntry$$Type<T, C>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTItemModelProvider$$Type = ($DTItemModelProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTItemModelProvider_ = $DTItemModelProvider$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TriFunction$$Type<T, U, R, S> = ($TriFunction<T, U, R, S> | ((arg0: T, arg1: U, arg2: R) => S));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TriFunction_<T, U, R, S> = $TriFunction$$Type<T, U, R, S>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Species$LogsAndSticks$$Type = ($Species$LogsAndSticks);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Species$LogsAndSticks_ = $Species$LogsAndSticks$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PositionalSpeciesContext$$Type = ($PositionalSpeciesContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PositionalSpeciesContext_ = $PositionalSpeciesContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$AbstractRegistry" {
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractRegistry$$Type<V extends $RegistryEntry<V>> = ($AbstractRegistry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractRegistry_<V extends $RegistryEntry<V>> = $AbstractRegistry$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetVolumeNode$Volume$$Type = ($NetVolumeNode$Volume);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetVolumeNode$Volume_ = $NetVolumeNode$Volume$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$ResourceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceAccessor$$Type<R> = ($ResourceAccessor<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceAccessor_<R> = $ResourceAccessor$$Type<R>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$PoissonDiscProviderCreateEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoissonDiscProviderCreateEvent$$Type = ($PoissonDiscProviderCreateEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoissonDiscProviderCreateEvent_ = $PoissonDiscProviderCreateEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LeavesProperties$$Type = ($LeavesProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LeavesProperties_ = $LeavesProperties$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleVoxmap$Cell$$Type = ($SimpleVoxmap$Cell);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleVoxmap$Cell_ = $SimpleVoxmap$Cell$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellKit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CellKit$$Type = ($CellKit);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CellKit_ = $CellKit$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity$DestroyType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FallingTreeEntity$DestroyType$$Type = ($FallingTreeEntity$DestroyType | ("void" | "harvest" | "blast" | "fire" | "root"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FallingTreeEntity$DestroyType_ = $FallingTreeEntity$DestroyType$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pod$$Type = ($Pod);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pod_ = $Pod$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$BlitOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleVoxmap$BlitOp$$Type = ($SimpleVoxmap$BlitOp | ((arg0: byte, arg1: byte) => byte));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleVoxmap$BlitOp_ = $SimpleVoxmap$BlitOp$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/worldgen/$PoissonDiscProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoissonDiscProvider$$Type = ($PoissonDiscProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoissonDiscProvider_ = $PoissonDiscProvider$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenFeatureConfiguration$$Type = ($GenFeatureConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenFeatureConfiguration_ = $GenFeatureConfiguration$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchConnectionData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchConnectionData$$Type = ($BranchConnectionData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchConnectionData_ = $BranchConnectionData$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowthLogicKitConfiguration$$Type = ($GrowthLogicKitConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowthLogicKitConfiguration_ = $GrowthLogicKitConfiguration$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Result$SimpleMapper$$Type<T, V> = ($Result$SimpleMapper<T, V> | ((arg0: T) => V));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Result$SimpleMapper_<T, V> = $Result$SimpleMapper$$Type<T, V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTBlockStateProvider$$Type = ($DTBlockStateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTBlockStateProvider_ = $DTBlockStateProvider$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Configurable$$Type = ($Configurable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Configurable_ = $Configurable$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Family$$Type = ($Family);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Family_ = $Family$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockWithDynamicHardness$$Type = ($BlockWithDynamicHardness);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockWithDynamicHardness_ = $BlockWithDynamicHardness$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties$AgeingConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LeavesProperties$AgeingConfiguration$$Type = ($LeavesProperties$AgeingConfiguration | ("always" | "worldgen_only" | "growth_only" | "never"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LeavesProperties$AgeingConfiguration_ = $LeavesProperties$AgeingConfiguration$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Species$$Type = ($Species);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Species_ = $Species$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenerationContext$$Type = ($GenerationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenerationContext_ = $GenerationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$SpeciesPostGenerationEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpeciesPostGenerationEvent$$Type = ($SpeciesPostGenerationEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpeciesPostGenerationEvent_ = $SpeciesPostGenerationEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/event/$SeedVoluntaryPlantEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SeedVoluntaryPlantEvent$$Type = ($SeedVoluntaryPlantEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SeedVoluntaryPlantEvent_ = $SeedVoluntaryPlantEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PropertiesAccessor$$Type = ($PropertiesAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PropertiesAccessor_ = $PropertiesAccessor$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrowableBlock$Info$$Type = ($GrowableBlock$Info);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrowableBlock$Info_ = $GrowableBlock$Info$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry" {
import { $Configuration, $Configuration$$Type } from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TemplateRegistry$$Type<C extends $Configuration<C, any>> = ($TemplateRegistry<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TemplateRegistry_<C extends $Configuration<C, any>> = $TemplateRegistry$$Type<C>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$PodBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PodBlock$$Type = ($PodBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PodBlock_ = $PodBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Family$TreeActivationContext$$Type = ($Family$TreeActivationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Family$TreeActivationContext_ = $Family$TreeActivationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$SurfaceRootBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SurfaceRootBlock$$Type = ($SurfaceRootBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SurfaceRootBlock_ = $SurfaceRootBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$DynamicSaplingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicSaplingBlock$$Type = ($DynamicSaplingBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicSaplingBlock_ = $DynamicSaplingBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchDestructionData$$Type = ($BranchDestructionData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchDestructionData_ = $BranchDestructionData$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BranchBlock$ItemStackPos$$Type = ($BranchBlock$ItemStackPos);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BranchBlock$ItemStackPos_ = $BranchBlock$ItemStackPos$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$Vec2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vec2i$$Type = ($Vec2i);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vec2i_ = $Vec2i$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$MappedResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MappedResult$$Type<T, I> = ($MappedResult<T, I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MappedResult_<T, I> = $MappedResult$$Type<T, I>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/block/$PottedSaplingBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PottedSaplingBlock$$Type = ($PottedSaplingBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PottedSaplingBlock_ = $PottedSaplingBlock$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$Dependencies" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Generator$Dependencies$$Type = ($Generator$Dependencies);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Generator$Dependencies_ = $Generator$Dependencies$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $JoCode$$Type = ($JoCode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $JoCode_ = $JoCode$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeserialisationException$$Type = ($DeserialisationException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeserialisationException_ = $DeserialisationException$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Result$$Type<T, I> = ($Result<T, I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Result_<T, I> = $Result$$Type<T, I>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/tree/$Resettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Resettable$$Type<T extends $Resettable<T>> = ($Resettable<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Resettable_<T extends $Resettable<T>> = $Resettable$$Type<T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBounds$$Type = ($BlockBounds);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBounds_ = $BlockBounds$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$BiomePredicate" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiomePredicate$$Type = ($BiomePredicate | ((arg0: $Holder<$Biome>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiomePredicate_ = $BiomePredicate$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleVoxmap$$Type = ($SimpleVoxmap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleVoxmap_ = $SimpleVoxmap$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableFunction" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThrowableFunction$$Type<I, R, T extends $Throwable> = ($ThrowableFunction<I, R, T> | ((arg0: I) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThrowableFunction_<I, R, T extends $Throwable> = $ThrowableFunction$$Type<I, R, T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/$LevelContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelContext$$Type = ($LevelContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelContext_ = $LevelContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PostGenerationContext$$Type = ($PostGenerationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PostGenerationContext_ = $PostGenerationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/$Ageable" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $SafeChunkBounds } from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Ageable$$Type = ($Ageable | ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState, arg3: $RandomSource, arg4: $SafeChunkBounds) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Ageable_ = $Ageable$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$DTBiomeHolderSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTBiomeHolderSet$$Type = ($DTBiomeHolderSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTBiomeHolderSet_ = $DTBiomeHolderSet$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/event/$AddResourceLoadersEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddResourceLoadersEvent$$Type = ($AddResourceLoadersEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddResourceLoadersEvent_ = $AddResourceLoadersEvent$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$DataAnimationHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataAnimationHandler$$Type = ($DataAnimationHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataAnimationHandler_ = $DataAnimationHandler$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Fruit$$Type = ($Fruit);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Fruit_ = $Fruit$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTLangProvider$$Type = ($DTLangProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTLangProvider_ = $DTLangProvider$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type" {
import { $GenerationContext, $GenerationContext$$Type } from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenFeature$Type$$Type<C extends $GenerationContext, R> = ($GenFeature$Type<C, R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenFeature$Type_<C extends $GenerationContext, R> = $GenFeature$Type$$Type<C, R>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$TreeResourcePack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TreeResourcePack$$Type = ($TreeResourcePack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TreeResourcePack_ = $TreeResourcePack$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType" {
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypedRegistry$EntryType$$Type<V extends $RegistryEntry<V>> = ($TypedRegistry$EntryType<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypedRegistry$EntryType_<V extends $RegistryEntry<V>> = $TypedRegistry$EntryType$$Type<V>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenFeature$$Type = ($GenFeature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenFeature_ = $GenFeature$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectionSelectionContext$$Type = ($DirectionSelectionContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectionSelectionContext_ = $DirectionSelectionContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectionManipulationContext$$Type = ($DirectionManipulationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectionManipulationContext_ = $DirectionManipulationContext$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/resource/$DTResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DTResource$$Type<R> = ($DTResource<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DTResource_<R> = $DTResource$$Type<R>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigurationProperty$$Type<T> = ($ConfigurationProperty<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigurationProperty_<T> = $ConfigurationProperty$$Type<T>;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Cell$$Type = ($Cell);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Cell_ = $Cell$$Type;
}
}

declare module "packages/com/ferreusveritas/dynamictrees/util/function/$CanGrowPredicate" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CanGrowPredicate$$Type = ($CanGrowPredicate | ((arg0: $LevelAccessor, arg1: $BlockPos) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CanGrowPredicate_ = $CanGrowPredicate$$Type;
}
}

