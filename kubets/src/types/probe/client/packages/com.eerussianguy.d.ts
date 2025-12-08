declare module "packages/com/eerussianguy/beneath/misc/$LostPage$Punishment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LostPage$Punishment$$Type = ($LostPage$Punishment | ("none" | "levitation" | "drunkenness" | "blaze_inferno" | "infestation" | "withering" | "slime" | "unknown"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LostPage$Punishment_ = $LostPage$Punishment$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$SearchTargeting" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SearchTargeting$$Type = ($SearchTargeting | ("none" | "hit" | "miss"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SearchTargeting_ = $SearchTargeting$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IStorageAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IStorageAccess$$Type = ($IStorageAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IStorageAccess_ = $IStorageAccess$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Producer" {
import { $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Producer$$Type = ($Producer | (() => $BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Producer_ = $Producer$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$ServerPipelineInitEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPipelineInitEvent$$Type = ($ServerPipelineInitEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPipelineInitEvent_ = $ServerPipelineInitEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$TransformerRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$TransformerRegistryEvent$$Type = ($BlazeRegistryEvent$TransformerRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$TransformerRegistryEvent_ = $BlazeRegistryEvent$TransformerRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistry$Key$$Type<T> = ($BlazeRegistry$Key<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistry$Key_<T> = $BlazeRegistry$Key$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$TileResolution" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TileResolution$$Type = ($TileResolution | ("full" | "half" | "quarter" | "eighth"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TileResolution_ = $TileResolution$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$ObjectRendererRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$ObjectRendererRegistryEvent$$Type = ($BlazeRegistryEvent$ObjectRendererRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$ObjectRendererRegistryEvent_ = $BlazeRegistryEvent$ObjectRendererRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PipelineComponent$$Type = ($PipelineComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PipelineComponent_ = $PipelineComponent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent$Removed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointEvent$Removed$$Type = ($WaypointEvent$Removed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointEvent$Removed_ = $WaypointEvent$Removed$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent$Created" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapLabelEvent$Created$$Type = ($MapLabelEvent$Created);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapLabelEvent$Created_ = $MapLabelEvent$Created$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$MapTypeRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$MapTypeRegistryEvent$$Type = ($BlazeRegistryEvent$MapTypeRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$MapTypeRegistryEvent_ = $BlazeRegistryEvent$MapTypeRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$LayerRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerRegion$$Type = ($LayerRegion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerRegion_ = $LayerRegion$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/debug/$MDInspectionController" {
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MDInspectionController$$Type<MD extends $MasterDatum> = ($MDInspectionController<MD>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MDInspectionController_<MD extends $MasterDatum> = $MDInspectionController$$Type<MD>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent$Created" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointEvent$Created$$Type = ($WaypointEvent$Created);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointEvent$Created_ = $WaypointEvent$Created$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$ServerJoinedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerJoinedEvent$$Type = ($ServerJoinedEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerJoinedEvent_ = $ServerJoinedEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$IClientComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IClientComponent$$Type = ($IClientComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IClientComponent_ = $IClientComponent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$CollectorRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$CollectorRegistryEvent$$Type = ($BlazeRegistryEvent$CollectorRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$CollectorRegistryEvent_ = $BlazeRegistryEvent$CollectorRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$RegistryEntry" {
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistry$RegistryEntry$$Type = ($BlazeRegistry$RegistryEntry | (() => $BlazeRegistry$Key$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistry$RegistryEntry_ = $BlazeRegistry$RegistryEntry$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/$BlazeRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistry$$Type<T> = ($BlazeRegistry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistry_<T> = $BlazeRegistry$$Type<T>;
}
}

declare module "packages/com/eerussianguy/beneath/mixin/$BlockEntityTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityTypeAccessor$$Type = ($BlockEntityTypeAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityTypeAccessor_ = $BlockEntityTypeAccessor$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Collector" {
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Collector$$Type<T extends $MasterDatum> = ($Collector<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Collector_<T extends $MasterDatum> = $Collector$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$Waypoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Waypoint$$Type = ($Waypoint);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Waypoint_ = $Waypoint$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftStreams$Input$$Type = ($MinecraftStreams$Input);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftStreams$Input_ = $MinecraftStreams$Input$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$Marker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Marker$$Type<T extends $Marker<T>> = ($Marker<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Marker_<T extends $Marker<T>> = $Marker$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$LayerRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$LayerRegistryEvent$$Type = ($BlazeRegistryEvent$LayerRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$LayerRegistryEvent_ = $BlazeRegistryEvent$LayerRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$MapLabel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapLabel$$Type = ($MapLabel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapLabel_ = $MapLabel$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IOSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOSupplier$$Type<T> = ($IOSupplier<T> | (() => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOSupplier_<T> = $IOSupplier$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$IDataSource" {
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDataSource$$Type = ($IDataSource | ((arg0: $BlazeRegistry$Key<$DataType<T>>) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDataSource_ = $IDataSource$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$WaypointEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointEvent$$Type = ($WaypointEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointEvent_ = $WaypointEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent$Removed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapLabelEvent$Removed$$Type = ($MapLabelEvent$Removed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapLabelEvent$Removed_ = $MapLabelEvent$Removed$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$ExecutionMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExecutionMode$$Type = ($ExecutionMode | ("direct" | "differential"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExecutionMode_ = $ExecutionMode$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$ProcessorRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$ProcessorRegistryEvent$$Type = ($BlazeRegistryEvent$ProcessorRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$ProcessorRegistryEvent_ = $BlazeRegistryEvent$ProcessorRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDataDispatcher" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $DataType } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $LevelChunk } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $MasterDatum } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MasterDataDispatcher$$Type = ($MasterDataDispatcher | ((arg0: $ResourceKey<$Level>, arg1: $ChunkPos, arg2: $List<$MasterDatum>, arg3: $Set<$BlazeRegistry$Key<$DataType<$MasterDatum>>>, arg4: string, arg5: $LevelChunk) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MasterDataDispatcher_ = $MasterDataDispatcher$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileStorage" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $RegionPos } from "packages/com/eerussianguy/blazemap/api/util/$RegionPos"
import { $TileResolution } from "packages/com/eerussianguy/blazemap/api/maps/$TileResolution"
import { $Layer } from "packages/com/eerussianguy/blazemap/api/maps/$Layer"
import { $NativeImage } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $BlazeRegistry$Key } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DimensionTileStorage$$Type = ($DimensionTileStorage | ((arg0: $BlazeRegistry$Key<$Layer>, arg1: $RegionPos, arg2: $TileResolution, arg3: $Consumer<$NativeImage>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DimensionTileStorage_ = $DimensionTileStorage$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$DataType" {
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataType$$Type<T extends $MasterDatum> = ($DataType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataType_<T extends $MasterDatum> = $DataType$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$ObjectRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjectRenderer$$Type<T> = ($ObjectRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjectRenderer_<T> = $ObjectRenderer$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapMenuSetupEvent$$Type = ($MapMenuSetupEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapMenuSetupEvent_ = $MapMenuSetupEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$Layer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Layer$$Type = ($Layer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Layer_ = $Layer$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Processor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Processor$$Type = ($Processor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Processor_ = $Processor$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage" {
import { $Marker, $Marker$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMarkerStorage$$Type<T extends $Marker<T>> = ($IMarkerStorage<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMarkerStorage_<T extends $Marker<T>> = $IMarkerStorage$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IStorageFactory" {
import { $IMarkerStorage, $IMarkerStorage$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage"
import { $MinecraftStreams$Input } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Input"
import { $MinecraftStreams$Output } from "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $IOSupplier } from "packages/com/eerussianguy/blazemap/api/util/$IOSupplier"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IStorageFactory$$Type<T extends $IMarkerStorage<any>> = ($IStorageFactory<T> | ((arg0: $IOSupplier<$MinecraftStreams$Input>, arg1: $IOSupplier<$MinecraftStreams$Output>, arg2: $Supplier<boolean>) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IStorageFactory_<T extends $IMarkerStorage<any>> = $IStorageFactory$$Type<T>;
}
}

declare module "packages/com/eerussianguy/firmalife/common/blocks/greenhouse/$PlanterType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlanterType$$Type = ($PlanterType | ("quad" | "large" | "hanging" | "trellis" | "bonsai" | "hydroponic"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlanterType_ = $PlanterType$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapMenuSetupEvent$MenuItem$$Type = ($MapMenuSetupEvent$MenuItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapMenuSetupEvent$MenuItem_ = $MapMenuSetupEvent$MenuItem$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$MapType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapType$$Type = ($MapType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapType_ = $MapType$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent$MasterDataRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$MasterDataRegistryEvent$$Type = ($BlazeRegistryEvent$MasterDataRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent$MasterDataRegistryEvent_ = $BlazeRegistryEvent$MasterDataRegistryEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapMenuSetupEvent$MenuFolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapMenuSetupEvent$MenuFolder$$Type = ($MapMenuSetupEvent$MenuFolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapMenuSetupEvent$MenuFolder_ = $MapMenuSetupEvent$MenuFolder$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/debug/$ModAnnouncementEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModAnnouncementEvent$$Type = ($ModAnnouncementEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModAnnouncementEvent_ = $ModAnnouncementEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$BlazeRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlazeRegistryEvent$$Type<T> = ($BlazeRegistryEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlazeRegistryEvent_<T> = $BlazeRegistryEvent$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/maps/$DimensionTileNotifications" {
import { $LayerRegion } from "packages/com/eerussianguy/blazemap/api/maps/$LayerRegion"
import { $Consumer } from "packages/java/util/function/$Consumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DimensionTileNotifications$$Type = ($DimensionTileNotifications | ((arg0: $Consumer<$LayerRegion>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DimensionTileNotifications_ = $DimensionTileNotifications$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$MinecraftStreams$Output" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftStreams$Output$$Type = ($MinecraftStreams$Output);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftStreams$Output_ = $MinecraftStreams$Output$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$PipelineType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PipelineType$$Type = ($PipelineType | ("server" | "client_standalone" | "client_and_server"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PipelineType_ = $PipelineType$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MasterDatum$$Type = ($MasterDatum);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MasterDatum_ = $MasterDatum$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Transformer" {
import { $MasterDatum, $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Transformer$$Type<T extends $MasterDatum> = ($Transformer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Transformer_<T extends $MasterDatum> = $Transformer$$Type<T>;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$DimensionChangedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DimensionChangedEvent$$Type = ($DimensionChangedEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DimensionChangedEvent_ = $DimensionChangedEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/util/$RegionPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegionPos$$Type = ($RegionPos);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegionPos_ = $RegionPos$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/event/$MapLabelEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapLabelEvent$$Type = ($MapLabelEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapLabelEvent_ = $MapLabelEvent$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/pipeline/$Consumer" {
import { $DataType$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$DataType"
import { $Set$$Type } from "packages/java/util/$Set"
import { $MasterDatum$$Type } from "packages/com/eerussianguy/blazemap/api/pipeline/$MasterDatum"
import { $BlazeRegistry$Key$$Type } from "packages/com/eerussianguy/blazemap/api/$BlazeRegistry$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Consumer$$Type = ($Consumer | (() => $Set$$Type<$BlazeRegistry$Key$$Type<$DataType$$Type<$MasterDatum$$Type>>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Consumer_ = $Consumer$$Type;
}
}

declare module "packages/com/eerussianguy/blazemap/api/markers/$IMarkerStorage$Layered" {
import { $Marker, $Marker$$Type } from "packages/com/eerussianguy/blazemap/api/markers/$Marker"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMarkerStorage$Layered$$Type<T extends $Marker<T>> = ($IMarkerStorage$Layered<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMarkerStorage$Layered_<T extends $Marker<T>> = $IMarkerStorage$Layered$$Type<T>;
}
}

