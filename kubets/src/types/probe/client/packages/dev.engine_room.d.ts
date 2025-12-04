declare module "packages/dev/engine_room/flywheel/api/visual/$LightUpdatedVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightUpdatedVisual$$Type = ($LightUpdatedVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightUpdatedVisual_ = $LightUpdatedVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InstanceHandle$$Type = ($InstanceHandle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InstanceHandle_ = $InstanceHandle$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoseTransformStack$$Type = ($PoseTransformStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoseTransformStack_ = $PoseTransformStack$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceType" {
import { $Instance, $Instance$$Type } from "packages/dev/engine_room/flywheel/api/instance/$Instance"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InstanceType$$Type<I extends $Instance> = ($InstanceType<I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InstanceType_<I extends $Instance> = $InstanceType$$Type<I>;
}
}

declare module "packages/dev/engine_room/flywheel/api/model/$IndexSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IndexSequence$$Type = ($IndexSequence | ((arg0: long, arg1: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IndexSequence_ = $IndexSequence$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualizationLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VisualizationLevel$$Type = ($VisualizationLevel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VisualizationLevel_ = $VisualizationLevel$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$MaterialShaders" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MaterialShaders$$Type = ($MaterialShaders);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MaterialShaders_ = $MaterialShaders$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Instance$$Type = ($Instance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Instance_ = $Instance$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PartialModel$$Type = ($PartialModel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PartialModel_ = $PartialModel$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/impl/mixin/$PoseStackAccessor" {
import { $Deque$$Type } from "packages/java/util/$Deque"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoseStackAccessor$$Type = ($PoseStackAccessor | (() => $Deque$$Type<$PoseStack$Pose$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visualization/$EntityVisualizer" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityVisualizer$$Type<T extends $Entity> = ($EntityVisualizer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityVisualizer_<T extends $Entity> = $EntityVisualizer$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/api/layout/$Layout$Element" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Layout$Element$$Type = ($Layout$Element);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Layout$Element_ = $Layout$Element$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/backend/mixin/light/$LightEngineAccessor" {
import { $LayerLightSectionStorage, $LayerLightSectionStorage$$Type } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage"
import { $DataLayerStorageMap, $DataLayerStorageMap$$Type } from "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightEngineAccessor$$Type<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> = ($LightEngineAccessor<M, S> | (() => S));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightEngineAccessor_<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> = $LightEngineAccessor$$Type<M, S>;
}
}

declare module "packages/dev/engine_room/flywheel/api/vertex/$MutableVertexList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MutableVertexList$$Type = ($MutableVertexList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MutableVertexList_ = $MutableVertexList$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$Material" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Material$$Type = ($Material);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Material_ = $Material$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$WriteMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WriteMask$$Type = ($WriteMask | ("color_depth" | "color" | "depth"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WriteMask_ = $WriteMask$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$CutoutShader" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CutoutShader$$Type = ($CutoutShader | (() => $ResourceLocation$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CutoutShader_ = $CutoutShader$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$DynamicVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicVisual$$Type = ($DynamicVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicVisual_ = $DynamicVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$TransformStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TransformStack$$Type<Self extends $TransformStack<Self>> = ($TransformStack<Self>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TransformStack_<Self extends $TransformStack<Self>> = $TransformStack$$Type<Self>;
}
}

declare module "packages/dev/engine_room/flywheel/api/model/$Mesh" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Mesh$$Type = ($Mesh);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Mesh_ = $Mesh$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$CardinalLightingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CardinalLightingMode$$Type = ($CardinalLightingMode | ("off" | "chunk" | "entity"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CardinalLightingMode_ = $CardinalLightingMode$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$DynamicVisual$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicVisual$Context$$Type = ($DynamicVisual$Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicVisual$Context_ = $DynamicVisual$Context$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/impl/extension/$EntityTypeExtension" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityTypeExtension$$Type<T extends $Entity> = ($EntityTypeExtension<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityTypeExtension_<T extends $Entity> = $EntityTypeExtension$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/lib/visual/$AbstractEntityVisual" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractEntityVisual$$Type<T extends $Entity> = ($AbstractEntityVisual<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractEntityVisual_<T extends $Entity> = $AbstractEntityVisual$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$DepthTest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DepthTest$$Type = ($DepthTest | ("off" | "never" | "less" | "equal" | "lequal" | "greater" | "notequal" | "gequal" | "always"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DepthTest_ = $DepthTest$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/impl/mixin/$ModelPartAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceWriter" {
import { $Instance, $Instance$$Type } from "packages/dev/engine_room/flywheel/api/instance/$Instance"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InstanceWriter$$Type<I extends $Instance> = ($InstanceWriter<I> | ((arg0: long, arg1: I) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InstanceWriter_<I extends $Instance> = $InstanceWriter$$Type<I>;
}
}

declare module "packages/dev/engine_room/flywheel/api/visualization/$BlockEntityVisualizer" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityVisualizer$$Type<T extends $BlockEntity> = ($BlockEntityVisualizer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityVisualizer_<T extends $BlockEntity> = $BlockEntityVisualizer$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/api/layout/$ElementType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ElementType$$Type = ($ElementType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ElementType_ = $ElementType$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$Rotate" {
import { $Quaternionfc } from "packages/org/joml/$Quaternionfc"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Rotate$$Type<Self extends $Rotate<Self>> = ($Rotate<Self> | ((arg0: $Quaternionfc) => Self));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Rotate_<Self extends $Rotate<Self>> = $Rotate$$Type<Self>;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$FogShader" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FogShader$$Type = ($FogShader | (() => $ResourceLocation$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FogShader_ = $FogShader$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$SectionTrackedVisual$SectionCollector" {
import { $LongSet } from "packages/it/unimi/dsi/fastutil/longs/$LongSet"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SectionTrackedVisual$SectionCollector$$Type = ($SectionTrackedVisual$SectionCollector | ((arg0: $LongSet) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SectionTrackedVisual$SectionCollector_ = $SectionTrackedVisual$SectionCollector$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/backend/mixin/$AbstractClientPlayerAccessor" {
import { $PlayerInfo$$Type } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractClientPlayerAccessor$$Type = ($AbstractClientPlayerAccessor | (() => $PlayerInfo$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractClientPlayerAccessor_ = $AbstractClientPlayerAccessor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/model/$Model$ConfiguredMesh" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Model$ConfiguredMesh$$Type = ($Model$ConfiguredMesh);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Model$ConfiguredMesh_ = $Model$ConfiguredMesh$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/task/$TaskExecutor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TaskExecutor$$Type = ($TaskExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TaskExecutor_ = $TaskExecutor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/impl/extension/$LevelExtension" {
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelExtension$$Type = ($LevelExtension | (() => $Iterable$$Type<$Entity$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelExtension_ = $LevelExtension$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/event/$ReloadLevelRendererEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReloadLevelRendererEvent$$Type = ($ReloadLevelRendererEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReloadLevelRendererEvent_ = $ReloadLevelRendererEvent$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Transparency$$Type = ($Transparency | ("opaque" | "additive" | "lightning" | "glint" | "crumbling" | "translucent" | "order_independent"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Transparency_ = $Transparency$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$ShaderLightVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShaderLightVisual$$Type = ($ShaderLightVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShaderLightVisual_ = $ShaderLightVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Visual$$Type = ($Visual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Visual_ = $Visual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/task/$Plan" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Plan$$Type<C> = ($Plan<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Plan_<C> = $Plan$$Type<C>;
}
}

declare module "packages/dev/engine_room/flywheel/impl/extension/$BlockEntityTypeExtension" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityTypeExtension$$Type<T extends $BlockEntity> = ($BlockEntityTypeExtension<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityTypeExtension_<T extends $BlockEntity> = $BlockEntityTypeExtension$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/backend/mixin/$LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$Translate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Translate$$Type<Self extends $Translate<Self>> = ($Translate<Self> | ((arg0: float, arg1: float, arg2: float) => Self));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Translate_<Self extends $Translate<Self>> = $Translate$$Type<Self>;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$TickableVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TickableVisual$$Type = ($TickableVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TickableVisual_ = $TickableVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/impl/extension/$PoseStackExtension" {
import { $PoseTransformStack$$Type } from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PoseStackExtension$$Type = ($PoseStackExtension | (() => $PoseTransformStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PoseStackExtension_ = $PoseStackExtension$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/model/$Model" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Model$$Type = ($Model);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Model_ = $Model$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$Instancer" {
import { $Instance, $Instance$$Type } from "packages/dev/engine_room/flywheel/api/instance/$Instance"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Instancer$$Type<I extends $Instance> = ($Instancer<I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Instancer_<I extends $Instance> = $Instancer$$Type<I>;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$SectionTrackedVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SectionTrackedVisual$$Type = ($SectionTrackedVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SectionTrackedVisual_ = $SectionTrackedVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/event/$EndClientResourceReloadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EndClientResourceReloadEvent$$Type = ($EndClientResourceReloadEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EndClientResourceReloadEvent_ = $EndClientResourceReloadEvent$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$Transform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Transform$$Type<Self extends $Transform<Self>> = ($Transform<Self>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Transform_<Self extends $Transform<Self>> = $Transform$$Type<Self>;
}
}

declare module "packages/dev/engine_room/flywheel/api/layout/$Layout" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Layout$$Type = ($Layout);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Layout_ = $Layout$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$DistanceUpdateLimiter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DistanceUpdateLimiter$$Type = ($DistanceUpdateLimiter | ((arg0: double) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DistanceUpdateLimiter_ = $DistanceUpdateLimiter$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$BlockEntityVisual" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityVisual$$Type<T extends $BlockEntity> = ($BlockEntityVisual<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityVisual_<T extends $BlockEntity> = $BlockEntityVisual$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/lib/visual/$AbstractVisual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractVisual$$Type = ($AbstractVisual);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractVisual_ = $AbstractVisual$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/vertex/$VertexList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VertexList$$Type = ($VertexList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VertexList_ = $VertexList$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualEmbedding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VisualEmbedding$$Type = ($VisualEmbedding);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VisualEmbedding_ = $VisualEmbedding$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/backend/mixin/light/$LayerLightSectionStorageAccessor" {
import { $DataLayer$$Type } from "packages/net/minecraft/world/level/chunk/$DataLayer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LayerLightSectionStorageAccessor$$Type = ($LayerLightSectionStorageAccessor | ((arg0: long, arg1: boolean) => $DataLayer$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LayerLightSectionStorageAccessor_ = $LayerLightSectionStorageAccessor$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$Scale" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Scale$$Type<Self extends $Scale<Self>> = ($Scale<Self> | ((arg0: float, arg1: float, arg2: float) => Self));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Scale_<Self extends $Scale<Self>> = $Scale$$Type<Self>;
}
}

declare module "packages/dev/engine_room/flywheel/api/material/$LightShader" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightShader$$Type = ($LightShader | (() => $ResourceLocation$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightShader_ = $LightShader$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$EntityVisual" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityVisual$$Type<T extends $Entity> = ($EntityVisual<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityVisual_<T extends $Entity> = $EntityVisual$$Type<T>;
}
}

declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VisualizationContext$$Type = ($VisualizationContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VisualizationContext_ = $VisualizationContext$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/visual/$TickableVisual$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TickableVisual$Context$$Type = ($TickableVisual$Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TickableVisual$Context_ = $TickableVisual$Context$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider" {
import { $Instancer$$Type } from "packages/dev/engine_room/flywheel/api/instance/$Instancer"
import { $InstanceType } from "packages/dev/engine_room/flywheel/api/instance/$InstanceType"
import { $Model } from "packages/dev/engine_room/flywheel/api/model/$Model"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InstancerProvider$$Type = ($InstancerProvider | ((arg0: $InstanceType<I>, arg1: $Model, arg2: integer) => $Instancer$$Type<I>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InstancerProvider_ = $InstancerProvider$$Type;
}
}

declare module "packages/dev/engine_room/flywheel/lib/transform/$Affine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Affine$$Type<Self extends $Affine<Self>> = ($Affine<Self>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Affine_<Self extends $Affine<Self>> = $Affine$$Type<Self>;
}
}

