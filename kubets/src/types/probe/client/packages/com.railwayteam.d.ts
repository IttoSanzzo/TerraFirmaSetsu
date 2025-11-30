declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntityType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorBlockEntityType$$Type = ($AccessorBlockEntityType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorBlockEntityType_ = $AccessorBlockEntityType$$Type;
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchConstraint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrackSwitchBlock$SwitchConstraint$$Type = ($TrackSwitchBlock$SwitchConstraint | ("none" | "to_right" | "to_left"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrackSwitchBlock$SwitchConstraint_ = $TrackSwitchBlock$SwitchConstraint$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IOccupiedCouplers" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Set$$Type } from "packages/java/util/$Set"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOccupiedCouplers$$Type = ($IOccupiedCouplers | (() => $Set$$Type<$UUID$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOccupiedCouplers_ = $IOccupiedCouplers$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorWalkAnimationState$$Type = ($AccessorWalkAnimationState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorWalkAnimationState_ = $AccessorWalkAnimationState$$Type;
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrackSwitch$$Type = ($TrackSwitch);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrackSwitch_ = $TrackSwitch$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorAbstractVisual" {
import { $InstancerProvider$$Type } from "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorAbstractVisual$$Type = ($AccessorAbstractVisual | (() => $InstancerProvider$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorAbstractVisual_ = $AccessorAbstractVisual$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier" {
import { $IMonorailBezier$MonorailAngles$$Type } from "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier$MonorailAngles"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMonorailBezier$$Type = ($IMonorailBezier | (() => $IMonorailBezier$MonorailAngles$$Type[]));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMonorailBezier_ = $IMonorailBezier$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IContraptionFuel" {
import { $MountedFluidStorageWrapper$$Type } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IContraptionFuel$$Type = ($IContraptionFuel | (() => $MountedFluidStorageWrapper$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IContraptionFuel_ = $IContraptionFuel$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorBogeyStyle" {
import { $BogeyStyle$SizeRenderer$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle$SizeRenderer"
import { $BogeySizes$BogeySize$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorBogeyStyle$$Type = ($AccessorBogeyStyle | (() => $Map$$Type<$BogeySizes$BogeySize$$Type, $BogeyStyle$SizeRenderer$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorBogeyStyle_ = $AccessorBogeyStyle$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IStrictSignalTrain$$Type = ($IStrictSignalTrain | ((arg0: boolean) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IStrictSignalTrain_ = $IStrictSignalTrain$$Type;
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TrackSwitchBlock$SwitchState$$Type = ($TrackSwitchBlock$SwitchState | ("normal" | "reverse_left" | "reverse_right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TrackSwitchBlock$SwitchState_ = $TrackSwitchBlock$SwitchState$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ISwitchDisabledEdge" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISwitchDisabledEdge$$Type = ($ISwitchDisabledEdge);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISwitchDisabledEdge_ = $ISwitchDisabledEdge$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPotentiallyInvisibleSpriteContents$$Type = ($IPotentiallyInvisibleSpriteContents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPotentiallyInvisibleSpriteContents_ = $IPotentiallyInvisibleSpriteContents$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorTrain$$Type = ($AccessorTrain);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorTrain_ = $AccessorTrain$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IGenerallySearchableNavigation$$Type = ($IGenerallySearchableNavigation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IGenerallySearchableNavigation_ = $IGenerallySearchableNavigation$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorNavigation" {
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List$$Type } from "packages/java/util/$List"
import { $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorNavigation$$Type = ($AccessorNavigation | (() => $List$$Type<$Couple$$Type<$TrackNode$$Type>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorNavigation_ = $AccessorNavigation$$Type;
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerLevelAccessMixin$$Type = ($ContainerLevelAccessMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerLevelAccessMixin_ = $ContainerLevelAccessMixin$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBufferBlockCheckableNavigation$$Type = ($IBufferBlockCheckableNavigation | ((arg0: boolean) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBufferBlockCheckableNavigation_ = $IBufferBlockCheckableNavigation$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorOrientedContraptionEntity" {
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorOrientedContraptionEntity$$Type = ($AccessorOrientedContraptionEntity | (() => $StructureTransform$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorOrientedContraptionEntity_ = $AccessorOrientedContraptionEntity$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IMonorailBezier$MonorailAngles" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMonorailBezier$MonorailAngles$$Type = ($IMonorailBezier$MonorailAngles);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMonorailBezier$MonorailAngles_ = $IMonorailBezier$MonorailAngles$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHasTrackCasing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IHasTrackCasing$$Type = ($IHasTrackCasing);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IHasTrackCasing_ = $IHasTrackCasing$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest" {
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackNode } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $TrackEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $TrackEdge } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"
import { $Map } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IGenerallySearchableNavigation$PointTest$$Type = ($IGenerallySearchableNavigation$PointTest | ((arg0: double, arg1: double, arg2: $Map<$TrackEdge, $Pair<boolean, $Couple<$TrackNode>>>, arg3: $Pair<$Couple<$TrackNode>, $TrackEdge>, arg4: $TrackEdgePoint) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IGenerallySearchableNavigation$PointTest_ = $IGenerallySearchableNavigation$PointTest$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageBogey" {
import { $AbstractBogeyBlock$$Type } from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorCarriageBogey$$Type = ($AccessorCarriageBogey | (() => $AbstractBogeyBlock$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorCarriageBogey_ = $AccessorCarriageBogey$$Type;
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor" {
import { $ChunkMap$TrackedEntity$$Type } from "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity"
import { $Int2ObjectMap$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkMapAccessor$$Type = ($ChunkMapAccessor | (() => $Int2ObjectMap$$Type<$ChunkMap$TrackedEntity$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkMapAccessor_ = $ChunkMapAccessor$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IWaypointableNavigation$$Type = ($IWaypointableNavigation | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IWaypointableNavigation_ = $IWaypointableNavigation$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorTrackTargetingBehavior" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorTrackTargetingBehavior$$Type = ($AccessorTrackTargetingBehavior);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorTrackTargetingBehavior_ = $AccessorTrackTargetingBehavior$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorAbstractContraptionEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorAbstractContraptionEntity$$Type = ($AccessorAbstractContraptionEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorAbstractContraptionEntity_ = $AccessorAbstractContraptionEntity$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IUpdateCount$$Type = ($IUpdateCount);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IUpdateCount_ = $IUpdateCount$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageConductors" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICarriageConductors$$Type = ($ICarriageConductors | (() => $List$$Type<$UUID$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICarriageConductors_ = $ICarriageConductors$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IHandcarTrain$$Type = ($IHandcarTrain);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IHandcarTrain_ = $IHandcarTrain$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntity" {
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorBlockEntity$$Type = ($AccessorBlockEntity | ((arg0: $BlockPos) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorBlockEntity_ = $AccessorBlockEntity$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IIndexedSchedule$$Type = ($IIndexedSchedule);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IIndexedSchedule_ = $IIndexedSchedule$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IFuelInventory" {
import { $MountedFluidStorageWrapper$$Type } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IFuelInventory$$Type = ($IFuelInventory | (() => $MountedFluidStorageWrapper$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IFuelInventory_ = $IFuelInventory$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimatedTextureDuck$$Type = ($AnimatedTextureDuck | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimatedTextureDuck_ = $AnimatedTextureDuck$$Type;
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor$TrackedEntityAccessor" {
import { $ServerPlayerConnection$$Type } from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import { $Set$$Type } from "packages/java/util/$Set"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkMapAccessor$TrackedEntityAccessor$$Type = ($ChunkMapAccessor$TrackedEntityAccessor | (() => $Set$$Type<$ServerPlayerConnection$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkMapAccessor$TrackedEntityAccessor_ = $ChunkMapAccessor$TrackedEntityAccessor$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimited" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILimited$$Type = ($ILimited);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILimited_ = $ILimited$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICarriageBufferDistanceTracker$$Type = ($ICarriageBufferDistanceTracker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICarriageBufferDistanceTracker_ = $ICarriageBufferDistanceTracker$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICrashAdvancement$$Type = ($ICrashAdvancement | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICrashAdvancement_ = $ICrashAdvancement$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimitedGlobalStation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ILimitedGlobalStation$$Type = ($ILimitedGlobalStation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ILimitedGlobalStation_ = $ILimitedGlobalStation$$Type;
}
}

declare module "packages/com/railwayteam/railways/api/bogeymenu/v0/forge/$BogeyMenuEvents$EntryRegistrationEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BogeyMenuEvents$EntryRegistrationEvent$$Type = ($BogeyMenuEvents$EntryRegistrationEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BogeyMenuEvents$EntryRegistrationEvent_ = $BogeyMenuEvents$EntryRegistrationEvent$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorLivingEntityRenderer" {
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorLivingEntityRenderer$$Type<T extends $LivingEntity> = ($AccessorLivingEntityRenderer<T> | ((arg0: T, arg1: $PoseStack, arg2: float, arg3: float, arg4: float) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorLivingEntityRenderer_<T extends $LivingEntity> = $AccessorLivingEntityRenderer$$Type<T>;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorScheduleRuntime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorScheduleRuntime$$Type = ($AccessorScheduleRuntime);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorScheduleRuntime_ = $AccessorScheduleRuntime$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageContraptionEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorCarriageContraptionEntity$$Type = ($AccessorCarriageContraptionEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorCarriageContraptionEntity_ = $AccessorCarriageContraptionEntity$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/conductor_possession/$AccessorKeyMapping" {
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorKeyMapping$$Type = ($AccessorKeyMapping | (() => $InputConstants$Key$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorKeyMapping_ = $AccessorKeyMapping$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDistanceTravelled$$Type = ($IDistanceTravelled | (() => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDistanceTravelled_ = $IDistanceTravelled$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorLevelRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorLevelRenderer$$Type = ($AccessorLevelRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorLevelRenderer_ = $AccessorLevelRenderer$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorEntity$$Type = ($AccessorEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorEntity_ = $AccessorEntity$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorPartialModel" {
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorPartialModel$$Type = ($AccessorPartialModel | ((arg0: $BakedModel) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorPartialModel_ = $AccessorPartialModel$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPreAssembleCallback$$Type = ($IPreAssembleCallback | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPreAssembleCallback_ = $IPreAssembleCallback$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriage" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorCarriage$$Type = ($AccessorCarriage | (() => $Map$$Type<integer, $CompoundTag$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorCarriage_ = $AccessorCarriage$$Type;
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBufferBlockedTrain$$Type = ($IBufferBlockedTrain);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBufferBlockedTrain_ = $IBufferBlockedTrain$$Type;
}
}

