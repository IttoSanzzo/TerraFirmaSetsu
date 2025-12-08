declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntityType" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $AccessorBlockEntityType {
"getValidBlocks"(): $Set<$Block>
"setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
get "validBlocks"(): $Set<$Block>
set "validBlocks"(value: $Set$$Type<$Block$$Type>)
}

export namespace $AccessorBlockEntityType {
const probejs$$marker: never
}
export abstract class $AccessorBlockEntityType$$Static implements $AccessorBlockEntityType {
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchConstraint" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TrackSwitchBlock$SwitchConstraint extends $Enum<$TrackSwitchBlock$SwitchConstraint> {
static readonly "NONE": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_LEFT": $TrackSwitchBlock$SwitchConstraint
static readonly "TO_RIGHT": $TrackSwitchBlock$SwitchConstraint

public "canGoLeft"(): boolean
public "canGoRight"(): boolean
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchConstraint
public static "values"(): $TrackSwitchBlock$SwitchConstraint[]
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IOccupiedCouplers" {
import { $UUID } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"

export interface $IOccupiedCouplers {
"railways$getOccupiedCouplers"(): $Set<$UUID>
}

export namespace $IOccupiedCouplers {
const probejs$$marker: never
}
export abstract class $IOccupiedCouplers$$Static implements $IOccupiedCouplers {
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorWalkAnimationState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorWalkAnimationState {
"getSpeedOld"(): float
"setPosition"(float0: float): void
"setSpeedOld"(float0: float): void
get "speedOld"(): float
set "position"(value: float)
set "speedOld"(value: float)
}

export namespace $AccessorWalkAnimationState {
const probejs$$marker: never
}
export abstract class $AccessorWalkAnimationState$$Static implements $AccessorWalkAnimationState {
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitch" {
import { $SingleBlockEntityEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import { $TrackSwitchBlock$SwitchState, $TrackSwitchBlock$SwitchState$$Type } from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"

export class $TrackSwitch extends $SingleBlockEntityEdgePoint {
constructor()

public static "getSelectionPriority"(): integer
public "getSwitchState"(): $TrackSwitchBlock$SwitchState
public "getSwitchTarget"(): $TrackNodeLocation
public "getTargetState"(loc: $TrackNodeLocation$$Type): $TrackSwitchBlock$SwitchState
public "hasLeftExit"(): boolean
public "hasRightExit"(): boolean
public "hasStraightExit"(): boolean
public "isAutomatic"(): boolean
public "isLocked"(): boolean
public "setEdgesActive"(graph: $TrackGraph$$Type): void
public "setSwitchState"(state: $TrackSwitchBlock$SwitchState$$Type): boolean
public "shouldAutoTrainsSwitch"(): boolean
public "trySetSwitchState"(state: $TrackSwitchBlock$SwitchState$$Type): boolean
public "updateEdges"(graph: $TrackGraph$$Type): void
get "switchState"(): $TrackSwitchBlock$SwitchState
get "switchTarget"(): $TrackNodeLocation
get "automatic"(): boolean
get "locked"(): boolean
set "edgesActive"(value: $TrackGraph$$Type)
set "switchState"(value: $TrackSwitchBlock$SwitchState$$Type)
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorAbstractVisual" {
import { $InstancerProvider } from "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider"

export interface $AccessorAbstractVisual {
"railways$getInstancerProvider"(): $InstancerProvider
}

export namespace $AccessorAbstractVisual {
const probejs$$marker: never
}
export abstract class $AccessorAbstractVisual$$Static implements $AccessorAbstractVisual {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IContraptionFuel" {
import { $MountedFluidStorageWrapper } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"

export interface $IContraptionFuel {
"railways$getFluidFuels"(): $MountedFluidStorageWrapper
}

export namespace $IContraptionFuel {
const probejs$$marker: never
}
export abstract class $IContraptionFuel$$Static implements $IContraptionFuel {
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorBogeyStyle" {
import { $BogeyStyle$SizeRenderer } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle$SizeRenderer"
import { $BogeySizes$BogeySize } from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import { $Map } from "packages/java/util/$Map"

export interface $AccessorBogeyStyle {
"getSizeRenderers"(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>
get "sizeRenderers"(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>
}

export namespace $AccessorBogeyStyle {
const probejs$$marker: never
}
export abstract class $AccessorBogeyStyle$$Static implements $AccessorBogeyStyle {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IStrictSignalTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStrictSignalTrain {
"railways$setStrictSignals"(boolean0: boolean): void
}

export namespace $IStrictSignalTrain {
const probejs$$marker: never
}
export abstract class $IStrictSignalTrain$$Static implements $IStrictSignalTrain {
}
}

declare module "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $TrackSwitch$$Type } from "packages/com/railwayteam/railways/content/switches/$TrackSwitch"
import { $TrackSwitchBlock$SwitchConstraint$$Type } from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchConstraint"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $TravellingPoint$SteerDirection$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$SteerDirection"

export class $TrackSwitchBlock$SwitchState extends $Enum<$TrackSwitchBlock$SwitchState> implements $StringRepresentable {
static readonly "NORMAL": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_LEFT": $TrackSwitchBlock$SwitchState
static readonly "REVERSE_RIGHT": $TrackSwitchBlock$SwitchState

public "canSwitchTo"(next: $TrackSwitchBlock$SwitchState$$Type, constraint: $TrackSwitchBlock$SwitchConstraint$$Type): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromSteerDirection"(direction: $TravellingPoint$SteerDirection$$Type, forward: boolean): $TrackSwitchBlock$SwitchState
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "nextStateFor"(sw: $TrackSwitch$$Type, constraint: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public "nextStateForPonder"(constraint: $TrackSwitchBlock$SwitchConstraint$$Type): $TrackSwitchBlock$SwitchState
public static "valueOf"(name: string): $TrackSwitchBlock$SwitchState
public static "values"(): $TrackSwitchBlock$SwitchState[]
get "serializedName"(): string
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ISwitchDisabledEdge" {
import { $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"

export interface $ISwitchDisabledEdge {
"ackAutomaticSelection"(): void
"getAutomaticallySelectedPriority"(): integer
"isAutomatic"(): boolean
"isAutomaticallySelected"(): boolean
"isEnabled"(): boolean
"setAutomatic"(boolean0: boolean): void
"setAutomaticallySelected"(): void
"setEnabled"(boolean0: boolean): void
get "automaticallySelectedPriority"(): integer
get "automatic"(): boolean
get "automaticallySelected"(): boolean
get "enabled"(): boolean
set "automatic"(value: boolean)
set "enabled"(value: boolean)
}

export namespace $ISwitchDisabledEdge {
function automaticallySelect(edge: $TrackEdge$$Type): void
function isAutomatic(edge: $TrackEdge$$Type): boolean
function isDisabled(edge: $TrackEdge$$Type): boolean
function isEnabled(edge: $TrackEdge$$Type): boolean
}
export abstract class $ISwitchDisabledEdge$$Static implements $ISwitchDisabledEdge {
static "automaticallySelect"(edge: $TrackEdge$$Type): void
static "isAutomatic"(edge: $TrackEdge$$Type): boolean
static "isDisabled"(edge: $TrackEdge$$Type): boolean
static "isEnabled"(edge: $TrackEdge$$Type): boolean
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPotentiallyInvisibleSpriteContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPotentiallyInvisibleSpriteContents {
"railways$isVisible"(): boolean
"railways$shouldDoInvisibility"(): boolean
"railways$uploadFrame"(boolean0: boolean): void
}

export namespace $IPotentiallyInvisibleSpriteContents {
const probejs$$marker: never
}
export abstract class $IPotentiallyInvisibleSpriteContents$$Static implements $IPotentiallyInvisibleSpriteContents {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTrain {
"railways$getStress"(): double[]
"railways$setStress"(double0s: double[]): void
}

export namespace $AccessorTrain {
const probejs$$marker: never
}
export abstract class $AccessorTrain$$Static implements $AccessorTrain {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation" {
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackSwitch } from "packages/com/railwayteam/railways/content/switches/$TrackSwitch"
import { $TrackSwitchBlock$SwitchState } from "packages/com/railwayteam/railways/content/switches/$TrackSwitchBlock$SwitchState"
import { $Optional } from "packages/java/util/$Optional"
import { $IGenerallySearchableNavigation$PointTest$$Type } from "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest"

export interface $IGenerallySearchableNavigation {
"railways$findNearestApproachableSwitch"(boolean0: boolean): $Pair<$TrackSwitch, $Pair<boolean, $Optional<$TrackSwitchBlock$SwitchState>>>
"railways$searchGeneral"(double0: double, double1: double, boolean2: boolean, pointTest3: $IGenerallySearchableNavigation$PointTest$$Type): void
"railways$searchGeneral"(double0: double, boolean1: boolean, pointTest2: $IGenerallySearchableNavigation$PointTest$$Type): void
}

export namespace $IGenerallySearchableNavigation {
const probejs$$marker: never
}
export abstract class $IGenerallySearchableNavigation$$Static implements $IGenerallySearchableNavigation {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorNavigation" {
import { $TrackNode } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List } from "packages/java/util/$List"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"

export interface $AccessorNavigation {
"getCurrentPath"(): $List<$Couple<$TrackNode>>
get "currentPath"(): $List<$Couple<$TrackNode>>
}

export namespace $AccessorNavigation {
const probejs$$marker: never
}
export abstract class $AccessorNavigation$$Static implements $AccessorNavigation {
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ContainerLevelAccessMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerLevelAccessMixin {
}

export namespace $ContainerLevelAccessMixin {
const probejs$$marker: never
}
export abstract class $ContainerLevelAccessMixin$$Static implements $ContainerLevelAccessMixin {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockCheckableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockCheckableNavigation {
"railways$updateControlsBlock"(boolean0: boolean): void
}

export namespace $IBufferBlockCheckableNavigation {
const probejs$$marker: never
}
export abstract class $IBufferBlockCheckableNavigation$$Static implements $IBufferBlockCheckableNavigation {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorOrientedContraptionEntity" {
import { $StructureTransform } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

export interface $AccessorOrientedContraptionEntity {
"railways$makeStructureTransform"(): $StructureTransform
}

export namespace $AccessorOrientedContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorOrientedContraptionEntity$$Static implements $AccessorOrientedContraptionEntity {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHasTrackCasing" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $SlabBlock, $SlabBlock$$Type } from "packages/net/minecraft/world/level/block/$SlabBlock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IHasTrackCasing {
"getTrackCasing"(): $SlabBlock
"isAlternate"(): boolean
"setAlternate"(alternate: boolean): void
"setTrackCasing"(slabBlock0: $SlabBlock$$Type): void
get "trackCasing"(): $SlabBlock
get "alternate"(): boolean
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
}

export namespace $IHasTrackCasing {
function getTrackCasing(world: $Level$$Type, pos: $BlockPos$$Type): $SlabBlock
function isAlternate(world: $Level$$Type, pos: $BlockPos$$Type): boolean
function setAlternateModel(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
function setTrackCasing(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $SlabBlock$$Type): void
}
export abstract class $IHasTrackCasing$$Static implements $IHasTrackCasing {
static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $SlabBlock
static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $SlabBlock$$Type): void
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest" {
import { $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $IGenerallySearchableNavigation$PointTest {
"test"(double0: double, double1: double, map2: $Map$$Type<$TrackEdge$$Type, $Pair$$Type<boolean, $Couple$$Type<$TrackNode$$Type>>>, pair3: $Pair$$Type<$Couple$$Type<$TrackNode$$Type>, $TrackEdge$$Type>, trackEdgePoint4: $TrackEdgePoint$$Type): boolean
}

export namespace $IGenerallySearchableNavigation$PointTest {
const probejs$$marker: never
}
export abstract class $IGenerallySearchableNavigation$PointTest$$Static implements $IGenerallySearchableNavigation$PointTest {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageBogey" {
import { $AbstractBogeyBlock } from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"

export interface $AccessorCarriageBogey {
"getType"(): $AbstractBogeyBlock<any>
get "type"(): $AbstractBogeyBlock<any>
}

export namespace $AccessorCarriageBogey {
const probejs$$marker: never
}
export abstract class $AccessorCarriageBogey$$Static implements $AccessorCarriageBogey {
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor" {
import { $ChunkMap$TrackedEntity } from "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export interface $ChunkMapAccessor {
"getEntityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
get "entityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
}

export namespace $ChunkMapAccessor {
const probejs$$marker: never
}
export abstract class $ChunkMapAccessor$$Static implements $ChunkMapAccessor {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IWaypointableNavigation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWaypointableNavigation {
"railways$isWaypointMode"(): boolean
}

export namespace $IWaypointableNavigation {
const probejs$$marker: never
}
export abstract class $IWaypointableNavigation$$Static implements $IWaypointableNavigation {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorTrackTargetingBehavior" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "packages/net/minecraft/core/$Direction$AxisDirection"
import { $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BezierTrackPointLocation, $BezierTrackPointLocation$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $AccessorTrackTargetingBehavior {
"getId"(): $UUID
"getMigrationData"(): $CompoundTag
"getPrevDirection"(): $Vec3
"getRotatedDirection"(): $Vec3
"getTargetBezier"(): $BezierTrackPointLocation
"getTargetDirection"(): $Direction$AxisDirection
"getTargetTrack"(): $BlockPos
"isOrthogonal"(): boolean
"setEdgePoint"(trackEdgePoint0: $TrackEdgePoint$$Type): void
"setId"(uUID0: $UUID$$Type): void
"setMigrationData"(compoundTag0: $CompoundTag$$Type): void
"setOrthogonal"(boolean0: boolean): void
"setPrevDirection"(vec30: $Vec3$$Type): void
"setRotatedDirection"(vec30: $Vec3$$Type): void
"setTargetBezier"(bezierTrackPointLocation0: $BezierTrackPointLocation$$Type): void
"setTargetDirection"(axisDirection0: $Direction$AxisDirection$$Type): void
"setTargetTrack"(blockPos0: $BlockPos$$Type): void
get "id"(): $UUID
get "migrationData"(): $CompoundTag
get "prevDirection"(): $Vec3
get "rotatedDirection"(): $Vec3
get "targetBezier"(): $BezierTrackPointLocation
get "targetDirection"(): $Direction$AxisDirection
get "targetTrack"(): $BlockPos
get "orthogonal"(): boolean
set "edgePoint"(value: $TrackEdgePoint$$Type)
set "id"(value: $UUID$$Type)
set "migrationData"(value: $CompoundTag$$Type)
set "orthogonal"(value: boolean)
set "prevDirection"(value: $Vec3$$Type)
set "rotatedDirection"(value: $Vec3$$Type)
set "targetBezier"(value: $BezierTrackPointLocation$$Type)
set "targetDirection"(value: $Direction$AxisDirection$$Type)
set "targetTrack"(value: $BlockPos$$Type)
}

export namespace $AccessorTrackTargetingBehavior {
const probejs$$marker: never
}
export abstract class $AccessorTrackTargetingBehavior$$Static implements $AccessorTrackTargetingBehavior {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorAbstractContraptionEntity" {
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

export interface $AccessorAbstractContraptionEntity {
"railways$moveCollidedEntitiesOnDisassembly"(structureTransform0: $StructureTransform$$Type): void
"railways$setSkipActorStop"(boolean0: boolean): void
}

export namespace $AccessorAbstractContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorAbstractContraptionEntity$$Static implements $AccessorAbstractContraptionEntity {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IUpdateCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpdateCount {
"railways$fromParent"(iUpdateCount0: $IUpdateCount$$Type): void
"railways$getUpdateCount"(): integer
"railways$markUpdate"(): void
}

export namespace $IUpdateCount {
function outOfSync(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
}
export abstract class $IUpdateCount$$Static implements $IUpdateCount {
static "outOfSync"(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageConductors" {
import { $UUID } from "packages/java/util/$UUID"
import { $List } from "packages/java/util/$List"

export interface $ICarriageConductors {
"railways$getControllingConductors"(): $List<$UUID>
}

export namespace $ICarriageConductors {
const probejs$$marker: never
}
export abstract class $ICarriageConductors$$Static implements $ICarriageConductors {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IHandcarTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHandcarTrain {
"railways$isHandcar"(): boolean
"railways$setHandcar"(boolean0: boolean): void
}

export namespace $IHandcarTrain {
const probejs$$marker: never
}
export abstract class $IHandcarTrain$$Static implements $IHandcarTrain {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorBlockEntity" {
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $AccessorBlockEntity {
"setWorldPosition"(blockPos0: $BlockPos$$Type): void
set "worldPosition"(value: $BlockPos$$Type)
}

export namespace $AccessorBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorBlockEntity$$Static implements $AccessorBlockEntity {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IIndexedSchedule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIndexedSchedule {
"railways$getIndex"(): integer
"railways$setIndex"(int0: integer): void
}

export namespace $IIndexedSchedule {
const probejs$$marker: never
}
export abstract class $IIndexedSchedule$$Static implements $IIndexedSchedule {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IFuelInventory" {
import { $MountedFluidStorageWrapper } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"

export interface $IFuelInventory {
"railways$getFluidFuels"(): $MountedFluidStorageWrapper
}

export namespace $IFuelInventory {
const probejs$$marker: never
}
export abstract class $IFuelInventory$$Static implements $IFuelInventory {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$AnimatedTextureDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimatedTextureDuck {
"railways$uploadWithVisibility"(): void
}

export namespace $AnimatedTextureDuck {
const probejs$$marker: never
}
export abstract class $AnimatedTextureDuck$$Static implements $AnimatedTextureDuck {
}
}

declare module "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor$TrackedEntityAccessor" {
import { $ServerPlayerConnection } from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import { $Set } from "packages/java/util/$Set"

export interface $ChunkMapAccessor$TrackedEntityAccessor {
"getSeenBy"(): $Set<$ServerPlayerConnection>
get "seenBy"(): $Set<$ServerPlayerConnection>
}

export namespace $ChunkMapAccessor$TrackedEntityAccessor {
const probejs$$marker: never
}
export abstract class $ChunkMapAccessor$TrackedEntityAccessor$$Static implements $ChunkMapAccessor$TrackedEntityAccessor {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimited" {
import { $StationEditPacket } from "packages/com/simibubi/create/content/trains/station/$StationEditPacket"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $ILimited {
"isLimitEnabled"(): boolean
"setLimitEnabled"(boolean0: boolean): void
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export namespace $ILimited {
function makeLimitEnabledPacket(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
export abstract class $ILimited$$Static implements $ILimited {
static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageBufferDistanceTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICarriageBufferDistanceTracker {
"railways$getLeadingDistance"(): integer
"railways$getTrailingDistance"(): integer
"railways$setLeadingDistance"(int0: integer): void
"railways$setTrailingDistance"(int0: integer): void
}

export namespace $ICarriageBufferDistanceTracker {
const probejs$$marker: never
}
export abstract class $ICarriageBufferDistanceTracker$$Static implements $ICarriageBufferDistanceTracker {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ICrashAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrashAdvancement {
"railways$awardCrashAdvancements"(): void
}

export namespace $ICrashAdvancement {
const probejs$$marker: never
}
export abstract class $ICrashAdvancement$$Static implements $ICrashAdvancement {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$ILimitedGlobalStation" {
import { $ILimited } from "packages/com/railwayteam/railways/mixin_interfaces/$ILimited"
import { $StationEditPacket } from "packages/com/simibubi/create/content/trains/station/$StationEditPacket"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $ILimitedGlobalStation extends $ILimited {
"getDisablingTrain"(): $Train
"isLimitEnabled"(): boolean
"isStationEnabled"(): boolean
"orDisablingTrain"(train0: $Train$$Type, train1: $Train$$Type): $Train
"setLimitEnabled"(boolean0: boolean): void
get "disablingTrain"(): $Train
get "limitEnabled"(): boolean
get "stationEnabled"(): boolean
set "limitEnabled"(value: boolean)
}

export namespace $ILimitedGlobalStation {
function makeLimitEnabledPacket(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
export abstract class $ILimitedGlobalStation$$Static implements $ILimitedGlobalStation {
static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
}
}

declare module "packages/com/railwayteam/railways/api/bogeymenu/v0/forge/$BogeyMenuEvents$EntryRegistrationEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $BogeyMenuEvents$EntryRegistrationEvent extends $Event {
constructor()

}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorLivingEntityRenderer" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $AccessorLivingEntityRenderer<T extends $LivingEntity> {
"callSetupRotations"(t0: T, poseStack1: $PoseStack$$Type, float2: float, float3: float, float4: float): void
}

export namespace $AccessorLivingEntityRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntityRenderer$$Static<T extends $LivingEntity> implements $AccessorLivingEntityRenderer<T> {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorScheduleRuntime" {
import { $Train } from "packages/com/simibubi/create/content/trains/entity/$Train"

export interface $AccessorScheduleRuntime {
"getTrain"(): $Train
"setCooldown"(int0: integer): void
get "train"(): $Train
set "cooldown"(value: integer)
}

export namespace $AccessorScheduleRuntime {
const probejs$$marker: never
}
export abstract class $AccessorScheduleRuntime$$Static implements $AccessorScheduleRuntime {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriageContraptionEntity" {
import { $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"

export interface $AccessorCarriageContraptionEntity {
"railways$bindCarriage"(): void
"railways$setCarriage"(carriage0: $Carriage$$Type): void
}

export namespace $AccessorCarriageContraptionEntity {
const probejs$$marker: never
}
export abstract class $AccessorCarriageContraptionEntity$$Static implements $AccessorCarriageContraptionEntity {
}
}

declare module "packages/com/railwayteam/railways/mixin/conductor_possession/$AccessorKeyMapping" {
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $AccessorKeyMapping {
"getKey"(): $InputConstants$Key
get "key"(): $InputConstants$Key
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IDistanceTravelled" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDistanceTravelled {
"railways$getDistanceTravelled"(): double
}

export namespace $IDistanceTravelled {
const probejs$$marker: never
}
export abstract class $IDistanceTravelled$$Static implements $IDistanceTravelled {
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorLevelRenderer" {
import { $Particle } from "packages/net/minecraft/client/particle/$Particle"
import { $RenderBuffers } from "packages/net/minecraft/client/renderer/$RenderBuffers"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $AccessorLevelRenderer {
"callAddParticleInternal"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, boolean2: boolean, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Particle
"railways$getRenderBuffers"(): $RenderBuffers
}

export namespace $AccessorLevelRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLevelRenderer$$Static implements $AccessorLevelRenderer {
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {
"getXRot"(): float
"getYRot"(): float
"setXRot"(float0: float): void
"setYRot"(float0: float): void
get "xRot"(): float
get "yRot"(): float
set "xRot"(value: float)
set "yRot"(value: float)
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "packages/com/railwayteam/railways/mixin/client/$AccessorPartialModel" {
import { $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $AccessorPartialModel {
"railways$setBakedModel"(bakedModel0: $BakedModel$$Type): void
}

export namespace $AccessorPartialModel {
const probejs$$marker: never
}
export abstract class $AccessorPartialModel$$Static implements $AccessorPartialModel {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IPreAssembleCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPreAssembleCallback {
"railways$preAssemble"(): void
}

export namespace $IPreAssembleCallback {
const probejs$$marker: never
}
export abstract class $IPreAssembleCallback$$Static implements $IPreAssembleCallback {
}
}

declare module "packages/com/railwayteam/railways/mixin/$AccessorCarriage" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Map } from "packages/java/util/$Map"

export interface $AccessorCarriage {
"getSerialisedPassengers"(): $Map<integer, $CompoundTag>
get "serialisedPassengers"(): $Map<integer, $CompoundTag>
}

export namespace $AccessorCarriage {
const probejs$$marker: never
}
export abstract class $AccessorCarriage$$Static implements $AccessorCarriage {
}
}

declare module "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockedTrain" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBlockedTrain {
"railways$getBlockedSign"(): integer
"railways$isControlBlocked"(): boolean
"railways$setControlBlocked"(boolean0: boolean, boolean1: boolean): void
}

export namespace $IBufferBlockedTrain {
const probejs$$marker: never
}
export abstract class $IBufferBlockedTrain$$Static implements $IBufferBlockedTrain {
}
}

