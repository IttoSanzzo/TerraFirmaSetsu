declare module "packages/software/bernie/geckolib/core/animation/$EasingType" {
import { $Double2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EasingType$$Type = ($EasingType | ((arg0: double) => $Double2DoubleFunction$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EasingType_ = $EasingType$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Object" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Object$$Type = ($GeoRenderEvent$Object);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Object_ = $GeoRenderEvent$Object$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation$Stage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RawAnimation$Stage$$Type = ($RawAnimation$Stage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RawAnimation$Stage_ = $RawAnimation$Stage$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoAnimatable$$Type = ($GeoAnimatable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoAnimatable_ = $GeoAnimatable$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$AnimationStateHandler" {
import { $AnimationState } from "packages/software/bernie/geckolib/core/animation/$AnimationState"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import { $PlayState$$Type } from "packages/software/bernie/geckolib/core/object/$PlayState"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$AnimationStateHandler$$Type<A extends $GeoAnimatable> = ($AnimationController$AnimationStateHandler<A> | ((arg0: $AnimationState<A>) => $PlayState$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController$AnimationStateHandler_<A extends $GeoAnimatable> = $AnimationController$AnimationStateHandler$$Type<A>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Block$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Block$Post$$Type = ($GeoRenderEvent$Block$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Block$Post_ = $GeoRenderEvent$Block$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/cache/object/$GeoBone" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoBone$$Type = ($GeoBone);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoBone_ = $GeoBone$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoBlockRenderer" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoBlockRenderer$$Type<T extends ($BlockEntity & $GeoAnimatable)> = ($GeoBlockRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoBlockRenderer_<T extends ($BlockEntity & $GeoAnimatable)> = $GeoBlockRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Block$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Block$Pre$$Type = ($GeoRenderEvent$Block$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Block$Pre_ = $GeoRenderEvent$Block$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomInstructionKeyframeEvent$$Type<T extends $GeoAnimatable> = ($CustomInstructionKeyframeEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomInstructionKeyframeEvent_<T extends $GeoAnimatable> = $CustomInstructionKeyframeEvent$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Item$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Item$Post$$Type = ($GeoRenderEvent$Item$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Item$Post_ = $GeoRenderEvent$Item$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$State" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$State$$Type = ($AnimationController$State | ("running" | "transitioning" | "paused" | "stopped"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController$State_ = $AnimationController$State$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/object/$Color" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Color$$Type = ($Color);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Color_ = $Color$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoObjectRenderer" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoObjectRenderer$$Type<T extends $GeoAnimatable> = ($GeoObjectRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoObjectRenderer_<T extends $GeoAnimatable> = $GeoObjectRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Item$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Item$CompileRenderLayers$$Type = ($GeoRenderEvent$Item$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Item$CompileRenderLayers_ = $GeoRenderEvent$Item$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$ReplacedEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$ReplacedEntity$$Type = ($GeoRenderEvent$ReplacedEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$ReplacedEntity_ = $GeoRenderEvent$ReplacedEntity$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Armor$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Armor$Post$$Type = ($GeoRenderEvent$Armor$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Armor$Post_ = $GeoRenderEvent$Armor$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Entity$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Entity$Post$$Type = ($GeoRenderEvent$Entity$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Entity$Post_ = $GeoRenderEvent$Entity$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$$Type<T extends $GeoAnimatable> = ($AnimationController<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController_<T extends $GeoAnimatable> = $AnimationController$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/cache/object/$GeoCube" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoCube$$Type = ($GeoCube);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoCube_ = $GeoCube$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Entity$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Entity$CompileRenderLayers$$Type = ($GeoRenderEvent$Entity$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Entity$CompileRenderLayers_ = $GeoRenderEvent$Entity$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoEntityRenderer" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoEntityRenderer$$Type<T extends ($Entity & $GeoAnimatable)> = ($GeoEntityRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoEntityRenderer_<T extends ($Entity & $GeoAnimatable)> = $GeoEntityRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$CustomInstructionKeyframeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomInstructionKeyframeData$$Type = ($CustomInstructionKeyframeData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomInstructionKeyframeData_ = $CustomInstructionKeyframeData$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Animation$$Type = ($Animation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Animation_ = $Animation$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoneAnimation$$Type = ($BoneAnimation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoneAnimation_ = $BoneAnimation$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Entity$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Entity$Pre$$Type = ($GeoRenderEvent$Entity$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Entity$Pre_ = $GeoRenderEvent$Entity$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Object$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Object$CompileRenderLayers$$Type = ($GeoRenderEvent$Object$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Object$CompileRenderLayers_ = $GeoRenderEvent$Object$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/$KeyFrameEvent" {
import { $KeyFrameData, $KeyFrameData$$Type } from "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KeyFrameEvent$$Type<T extends $GeoAnimatable, E extends $KeyFrameData> = ($KeyFrameEvent<T, E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KeyFrameEvent_<T extends $GeoAnimatable, E extends $KeyFrameData> = $KeyFrameEvent$$Type<T, E>;
}
}

declare module "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimatableInstanceCache$$Type = ($AnimatableInstanceCache);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimatableInstanceCache_ = $AnimatableInstanceCache$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Entity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Entity$$Type = ($GeoRenderEvent$Entity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Entity_ = $GeoRenderEvent$Entity$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Block" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Block$$Type = ($GeoRenderEvent$Block);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Block_ = $GeoRenderEvent$Block$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$Animation$LoopType" {
import { $AnimationController } from "packages/software/bernie/geckolib/core/animation/$AnimationController"
import { $GeoAnimatable } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import { $Animation } from "packages/software/bernie/geckolib/core/animation/$Animation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Animation$LoopType$$Type = ($Animation$LoopType | ((arg0: $GeoAnimatable, arg1: $AnimationController<$GeoAnimatable>, arg2: $Animation) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Animation$LoopType_ = $Animation$LoopType$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoModel" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoreGeoModel$$Type<E extends $GeoAnimatable> = ($CoreGeoModel<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoreGeoModel_<E extends $GeoAnimatable> = $CoreGeoModel$$Type<E>;
}
}

declare module "packages/software/bernie/geckolib/model/$GeoModel" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoModel$$Type<T extends $GeoAnimatable> = ($GeoModel<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoModel_<T extends $GeoAnimatable> = $GeoModel$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoArmorRenderer" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $GeoItem, $GeoItem$$Type } from "packages/software/bernie/geckolib/animatable/$GeoItem"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoArmorRenderer$$Type<T extends ($Item & $GeoItem)> = ($GeoArmorRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoArmorRenderer_<T extends ($Item & $GeoItem)> = $GeoArmorRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$ReplacedEntity$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Type = ($GeoRenderEvent$ReplacedEntity$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers_ = $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$SoundKeyframeHandler" {
import { $SoundKeyframeEvent } from "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$SoundKeyframeHandler$$Type<A extends $GeoAnimatable> = ($AnimationController$SoundKeyframeHandler<A> | ((arg0: $SoundKeyframeEvent<A>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController$SoundKeyframeHandler_<A extends $GeoAnimatable> = $AnimationController$SoundKeyframeHandler$$Type<A>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent" {
import { $GeoRenderer$$Type } from "packages/software/bernie/geckolib/renderer/$GeoRenderer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$$Type = ($GeoRenderEvent | (() => $GeoRenderer$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent_ = $GeoRenderEvent$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$ParticleKeyframeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleKeyframeData$$Type = ($ParticleKeyframeData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleKeyframeData_ = $ParticleKeyframeData$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPointQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationPointQueue$$Type = ($AnimationPointQueue);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationPointQueue_ = $AnimationPointQueue$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Item" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Item$$Type = ($GeoRenderEvent$Item);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Item_ = $GeoRenderEvent$Item$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Object$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Object$Pre$$Type = ($GeoRenderEvent$Object$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Object$Pre_ = $GeoRenderEvent$Object$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$SoundKeyframeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SoundKeyframeData$$Type = ($SoundKeyframeData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SoundKeyframeData_ = $SoundKeyframeData$$Type;
}
}

declare module "packages/software/bernie/geckolib/cache/object/$GeoVertex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoVertex$$Type = ($GeoVertex);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoVertex_ = $GeoVertex$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$AnimationPoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationPoint$$Type = ($AnimationPoint);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationPoint_ = $AnimationPoint$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoRenderer" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderer$$Type<T extends $GeoAnimatable> = ($GeoRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderer_<T extends $GeoAnimatable> = $GeoRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$KeyframeStack" {
import { $Keyframe, $Keyframe$$Type } from "packages/software/bernie/geckolib/core/keyframe/$Keyframe"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KeyframeStack$$Type<T extends $Keyframe<any>> = ($KeyframeStack<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KeyframeStack_<T extends $Keyframe<any>> = $KeyframeStack$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Object$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Object$Post$$Type = ($GeoRenderEvent$Object$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Object$Post_ = $GeoRenderEvent$Object$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$RawAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RawAnimation$$Type = ($RawAnimation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RawAnimation_ = $RawAnimation$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoReplacedEntityRenderer" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoReplacedEntityRenderer$$Type<E extends $Entity, T extends $GeoAnimatable> = ($GeoReplacedEntityRenderer<E, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoReplacedEntityRenderer_<E extends $Entity, T extends $GeoAnimatable> = $GeoReplacedEntityRenderer$$Type<E, T>;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleKeyframeEvent$$Type<T extends $GeoAnimatable> = ($ParticleKeyframeEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleKeyframeEvent_<T extends $GeoAnimatable> = $ParticleKeyframeEvent$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/network/$SerializableDataTicket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SerializableDataTicket$$Type<D> = ($SerializableDataTicket<D>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SerializableDataTicket_<D> = $SerializableDataTicket$$Type<D>;
}
}

declare module "packages/software/bernie/geckolib/cache/object/$GeoQuad" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoQuad$$Type = ($GeoQuad);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoQuad_ = $GeoQuad$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/$SoundKeyframeEvent" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SoundKeyframeEvent$$Type<T extends $GeoAnimatable> = ($SoundKeyframeEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SoundKeyframeEvent_<T extends $GeoAnimatable> = $SoundKeyframeEvent$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationState" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationState$$Type<T extends $GeoAnimatable> = ($AnimationState<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationState_<T extends $GeoAnimatable> = $AnimationState$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$ParticleKeyframeHandler" {
import { $ParticleKeyframeEvent } from "packages/software/bernie/geckolib/core/keyframe/event/$ParticleKeyframeEvent"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$ParticleKeyframeHandler$$Type<A extends $GeoAnimatable> = ($AnimationController$ParticleKeyframeHandler<A> | ((arg0: $ParticleKeyframeEvent<A>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController$ParticleKeyframeHandler_<A extends $GeoAnimatable> = $AnimationController$ParticleKeyframeHandler$$Type<A>;
}
}

declare module "packages/software/bernie/geckolib/loading/json/raw/$ModelProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelProperties$$Type = ($ModelProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelProperties_ = $ModelProperties$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/state/$BoneSnapshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoneSnapshot$$Type = ($BoneSnapshot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoneSnapshot_ = $BoneSnapshot$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationProcessor$$Type<T extends $GeoAnimatable> = ($AnimationProcessor<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationProcessor_<T extends $GeoAnimatable> = $AnimationProcessor$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationController$CustomKeyframeHandler" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import { $CustomInstructionKeyframeEvent } from "packages/software/bernie/geckolib/core/keyframe/event/$CustomInstructionKeyframeEvent"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationController$CustomKeyframeHandler$$Type<A extends $GeoAnimatable> = ($AnimationController$CustomKeyframeHandler<A> | ((arg0: $CustomInstructionKeyframeEvent<A>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationController$CustomKeyframeHandler_<A extends $GeoAnimatable> = $AnimationController$CustomKeyframeHandler$$Type<A>;
}
}

declare module "packages/software/bernie/geckolib/animatable/$GeoItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoItem$$Type = ($GeoItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoItem_ = $GeoItem$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$BoneAnimationQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoneAnimationQueue$$Type = ($BoneAnimationQueue);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoneAnimationQueue_ = $BoneAnimationQueue$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/$GeoItemRenderer" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoItemRenderer$$Type<T extends ($Item & $GeoAnimatable)> = ($GeoItemRenderer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoItemRenderer_<T extends ($Item & $GeoAnimatable)> = $GeoItemRenderer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/object/$DataTicket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataTicket$$Type<D> = ($DataTicket<D>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataTicket_<D> = $DataTicket$$Type<D>;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/event/data/$KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KeyFrameData$$Type = ($KeyFrameData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KeyFrameData_ = $KeyFrameData$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Item$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Item$Pre$$Type = ($GeoRenderEvent$Item$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Item$Pre_ = $GeoRenderEvent$Item$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/cache/object/$BakedGeoModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BakedGeoModel$$Type = ($BakedGeoModel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BakedGeoModel_ = $BakedGeoModel$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/object/$PlayState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayState$$Type = ($PlayState | ("continue" | "stop"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayState_ = $PlayState$$Type;
}
}

declare module "packages/software/bernie/geckolib/renderer/layer/$GeoRenderLayer" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderLayer$$Type<T extends $GeoAnimatable> = ($GeoRenderLayer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderLayer_<T extends $GeoAnimatable> = $GeoRenderLayer$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/keyframe/$Keyframe" {
import { $IValue, $IValue$$Type } from "packages/com/eliotlash/mclib/math/$IValue"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Keyframe$$Type<T extends $IValue> = ($Keyframe<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Keyframe_<T extends $IValue> = $Keyframe$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimatableManager$ControllerRegistrar$$Type = ($AnimatableManager$ControllerRegistrar);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimatableManager$ControllerRegistrar_ = $AnimatableManager$ControllerRegistrar$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimationProcessor$QueuedAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationProcessor$QueuedAnimation$$Type = ($AnimationProcessor$QueuedAnimation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationProcessor$QueuedAnimation_ = $AnimationProcessor$QueuedAnimation$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$ReplacedEntity$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$ReplacedEntity$Pre$$Type = ($GeoRenderEvent$ReplacedEntity$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$ReplacedEntity$Pre_ = $GeoRenderEvent$ReplacedEntity$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$ReplacedEntity$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$ReplacedEntity$Post$$Type = ($GeoRenderEvent$ReplacedEntity$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$ReplacedEntity$Post_ = $GeoRenderEvent$ReplacedEntity$Post$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$Animation$Keyframes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Animation$Keyframes$$Type = ($Animation$Keyframes);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Animation$Keyframes_ = $Animation$Keyframes$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Armor$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Armor$CompileRenderLayers$$Type = ($GeoRenderEvent$Armor$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Armor$CompileRenderLayers_ = $GeoRenderEvent$Armor$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/animatable/$SingletonGeoAnimatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SingletonGeoAnimatable$$Type = ($SingletonGeoAnimatable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SingletonGeoAnimatable_ = $SingletonGeoAnimatable$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreGeoBone" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoreGeoBone$$Type = ($CoreGeoBone);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoreGeoBone_ = $CoreGeoBone$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animatable/model/$CoreBakedGeoModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoreBakedGeoModel$$Type = ($CoreBakedGeoModel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoreBakedGeoModel_ = $CoreBakedGeoModel$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Block$CompileRenderLayers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Block$CompileRenderLayers$$Type = ($GeoRenderEvent$Block$CompileRenderLayers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Block$CompileRenderLayers_ = $GeoRenderEvent$Block$CompileRenderLayers$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Armor$Pre" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Armor$Pre$$Type = ($GeoRenderEvent$Armor$Pre);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Armor$Pre_ = $GeoRenderEvent$Armor$Pre$$Type;
}
}

declare module "packages/software/bernie/geckolib/event/$GeoRenderEvent$Armor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeoRenderEvent$Armor$$Type = ($GeoRenderEvent$Armor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeoRenderEvent$Armor_ = $GeoRenderEvent$Armor$$Type;
}
}

declare module "packages/software/bernie/geckolib/core/animation/$AnimatableManager" {
import { $GeoAnimatable, $GeoAnimatable$$Type } from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimatableManager$$Type<T extends $GeoAnimatable> = ($AnimatableManager<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimatableManager_<T extends $GeoAnimatable> = $AnimatableManager$$Type<T>;
}
}

declare module "packages/software/bernie/geckolib/loading/json/raw/$FaceUV$Rotation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FaceUV$Rotation$$Type = ($FaceUV$Rotation | ("none" | "clockwise_90" | "clockwise_180" | "clockwise_270"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FaceUV$Rotation_ = $FaceUV$Rotation$$Type;
}
}

