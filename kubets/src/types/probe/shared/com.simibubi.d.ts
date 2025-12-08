declare module "packages/com/simibubi/create/content/kinetics/$KineticNetwork" {
import { $KineticBlockEntity, $KineticBlockEntity$$Type } from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $KineticNetwork {
constructor()

public "add"(kineticBlockEntity0: $KineticBlockEntity$$Type): void
public "addSilently"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float, float2: float): void
public "calculateCapacity"(): float
public "calculateStress"(): float
public "getActualCapacityOf"(kineticBlockEntity0: $KineticBlockEntity$$Type): float
public "getActualStressOf"(kineticBlockEntity0: $KineticBlockEntity$$Type): float
public "getSize"(): integer
public "initFromTE"(float0: float, float1: float, int2: integer): void
public "remove"(kineticBlockEntity0: $KineticBlockEntity$$Type): void
public "sync"(): void
public "updateCapacity"(): void
public "updateCapacityFor"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float): void
public "updateNetwork"(): void
public "updateStress"(): void
public "updateStressFor"(kineticBlockEntity0: $KineticBlockEntity$$Type, float1: float): void
get "id"(): long
set "id"(value: long)
get "initialized"(): boolean
set "initialized"(value: boolean)
get "members"(): $Map<$KineticBlockEntity, float>
set "members"(value: $Map$$Type<$KineticBlockEntity$$Type, float>)
get "sources"(): $Map<$KineticBlockEntity, float>
set "sources"(value: $Map$$Type<$KineticBlockEntity$$Type, float>)
get "size"(): integer
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$DispenserBlockAccessor" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $DispenseItemBehavior } from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"

export interface $DispenserBlockAccessor {
"create$callGetDispenseMethod"(itemStack0: $ItemStack$$Type): $DispenseItemBehavior
}

export namespace $DispenserBlockAccessor {
const probejs$$marker: never
}
export abstract class $DispenserBlockAccessor$$Static implements $DispenserBlockAccessor {
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$ServerLevelAccessor" {
import { $EntityTickList } from "packages/net/minecraft/world/level/entity/$EntityTickList"

export interface $ServerLevelAccessor {
"create$getEntityTickList"(): $EntityTickList
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export abstract class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$ScheduleEntry" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ScheduleInstruction, $ScheduleInstruction$$Type } from "packages/com/simibubi/create/content/trains/schedule/destination/$ScheduleInstruction"
import { $ScheduleWaitCondition, $ScheduleWaitCondition$$Type } from "packages/com/simibubi/create/content/trains/schedule/condition/$ScheduleWaitCondition"

export class $ScheduleEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleEntry
public "write"(): $CompoundTag
get "conditions"(): $List<$List<$ScheduleWaitCondition>>
set "conditions"(value: $List$$Type<$List$$Type<$ScheduleWaitCondition$$Type>>)
get "instruction"(): $ScheduleInstruction
set "instruction"(value: $ScheduleInstruction$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$ITrackSelector" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $TrackGraph, $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $TrackEdge, $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $BiFunction } from "packages/java/util/function/$BiFunction"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
"andThen"<V>(function0: $Function$$Type<$Map$Entry$$Type<$TrackNode$$Type, $TrackEdge$$Type>, V>): $BiFunction<$TrackGraph, $Pair<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, V>
"apply"(trackGraph0: $TrackGraph$$Type, pair1: $Pair$$Type<boolean, $List$$Type<$Map$Entry$$Type<$TrackNode$$Type, $TrackEdge$$Type>>>): $Map$Entry<$TrackNode, $TrackEdge>
}

export namespace $TravellingPoint$ITrackSelector {
const probejs$$marker: never
}
export abstract class $TravellingPoint$ITrackSelector$$Static implements $TravellingPoint$ITrackSelector {
}
}

declare module "packages/com/simibubi/create/api/event/$PipeCollisionEvent$Spill" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $PipeCollisionEvent } from "packages/com/simibubi/create/api/event/$PipeCollisionEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PipeCollisionEvent$Spill extends $PipeCollisionEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, fluid3: $Fluid$$Type, blockState4: $BlockState$$Type)

public "getPipeFluid"(): $Fluid
public "getWorldFluid"(): $Fluid
get "pipeFluid"(): $Fluid
get "worldFluid"(): $Fluid
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $TransformableBlockEntity } from "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlockEntity"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$SignalState"
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $TrackTargetingBehaviour, $TrackTargetingBehaviour$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $SignalBoundary, $SignalBoundary$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBoundary"
import { $SignalBlockEntity$OverlayState, $SignalBlockEntity$OverlayState$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$OverlayState"
import { $SmartBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $AbstractComputerBehaviour, $AbstractComputerBehaviour$$Type } from "packages/com/simibubi/create/compat/computercraft/$AbstractComputerBehaviour"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SignalBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "enterState"(signalState0: $SignalBlockEntity$SignalState$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getOverlay"(): $SignalBlockEntity$OverlayState
public "getReportedPower"(): boolean
public "getSignal"(): $SignalBoundary
public "getState"(): $SignalBlockEntity$SignalState
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isPowered"(): boolean
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setOverlay"(overlayState0: $SignalBlockEntity$OverlayState$$Type): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
get "computerBehaviour"(): $AbstractComputerBehaviour
set "computerBehaviour"(value: $AbstractComputerBehaviour$$Type)
get "edgePoint"(): $TrackTargetingBehaviour<$SignalBoundary>
set "edgePoint"(value: $TrackTargetingBehaviour$$Type<$SignalBoundary$$Type>)
get "modelData"(): $ModelData
get "overlay"(): $SignalBlockEntity$OverlayState
get "reportedPower"(): boolean
get "signal"(): $SignalBoundary
get "state"(): $SignalBlockEntity$SignalState
get "powered"(): boolean
set "overlay"(value: $SignalBlockEntity$OverlayState$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$ScheduleRuntime" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DiscoveredPath } from "packages/com/simibubi/create/content/trains/graph/$DiscoveredPath"
import { $AccessorScheduleRuntime } from "packages/com/railwayteam/railways/mixin/$AccessorScheduleRuntime"
import { $Collection } from "packages/java/util/$Collection"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $GlobalTrainDisplayData$TrainDeparturePrediction } from "packages/com/simibubi/create/content/trains/display/$GlobalTrainDisplayData$TrainDeparturePrediction"
import { $ScheduleRuntime$State, $ScheduleRuntime$State$$Type } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleRuntime$State"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Schedule, $Schedule$$Type } from "packages/com/simibubi/create/content/trains/schedule/$Schedule"

export class $ScheduleRuntime implements $AccessorScheduleRuntime {
constructor(train0: $Train$$Type)

public "destinationReached"(): void
public "discardSchedule"(): void
public "getSchedule"(): $Schedule
public "getWaitingStatus"(level0: $Level$$Type): $MutableComponent
public "read"(compoundTag0: $CompoundTag$$Type): void
public "returnSchedule"(): $ItemStack
public "setSchedule"(schedule0: $Schedule$$Type, boolean1: boolean): void
public "setSchedulePresentClientside"(boolean0: boolean): void
public "startCooldown"(): void
public "startCurrentInstruction"(level0: $Level$$Type): $DiscoveredPath
public "submitPredictions"(): $Collection<$GlobalTrainDisplayData$TrainDeparturePrediction>
public "tick"(level0: $Level$$Type): void
public "tickConditions"(level0: $Level$$Type): void
public "transitInterrupted"(): void
public "write"(): $CompoundTag
get "completed"(): boolean
set "completed"(value: boolean)
get "conditionContext"(): $List<$CompoundTag>
set "conditionContext"(value: $List$$Type<$CompoundTag$$Type>)
get "conditionProgress"(): $List<integer>
set "conditionProgress"(value: $List$$Type<integer>)
get "currentEntry"(): integer
set "currentEntry"(value: integer)
get "currentTitle"(): string
set "currentTitle"(value: string)
get "displayLinkUpdateRequested"(): boolean
set "displayLinkUpdateRequested"(value: boolean)
get "isAutoSchedule"(): boolean
set "isAutoSchedule"(value: boolean)
get "paused"(): boolean
set "paused"(value: boolean)
get "predictionTicks"(): $List<integer>
set "predictionTicks"(value: $List$$Type<integer>)
get "schedule"(): $Schedule
set "schedule"(value: $Schedule$$Type)
get "state"(): $ScheduleRuntime$State
set "state"(value: $ScheduleRuntime$State$$Type)
get "ticksInTransit"(): integer
set "ticksInTransit"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
set "schedulePresentClientside"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/contraptions/$ContraptionRelocationPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $SimplePacketBase } from "packages/com/simibubi/create/foundation/networking/$SimplePacketBase"

export class $ContraptionRelocationPacket extends $SimplePacketBase {
constructor(int0: integer)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

}
}

declare module "packages/com/simibubi/create/content/contraptions/render/$ContraptionMatrices" {
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Matrix4f, $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ContraptionMatrices {
constructor()

public static "clearStack"(poseStack0: $PoseStack$$Type): void
public "getLight"(): $Matrix4f
public "getModel"(): $PoseStack
public "getModelViewProjection"(): $PoseStack
public "getViewProjection"(): $PoseStack
public "getWorld"(): $Matrix4f
public static "transform"(poseStack0: $PoseStack$$Type, poseStack1: $PoseStack$$Type): void
public static "translateToEntity"(matrix4f0: $Matrix4f$$Type, entity1: $Entity$$Type, float2: float): void
get "light"(): $Matrix4f
get "model"(): $PoseStack
get "modelViewProjection"(): $PoseStack
get "viewProjection"(): $PoseStack
get "world"(): $Matrix4f
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$Carriage" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $TrainCargoManager, $TrainCargoManager$$Type } from "packages/com/simibubi/create/content/contraptions/minecart/$TrainCargoManager"
import { $CarriageBogey, $CarriageBogey$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageBogey"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $Carriage$DimensionalCarriageEntity } from "packages/com/simibubi/create/content/trains/entity/$Carriage$DimensionalCarriageEntity"
import { $ICarriageBufferDistanceTracker } from "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageBufferDistanceTracker"
import { $CarriageContraption$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraption"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $ICarriageConductors } from "packages/com/railwayteam/railways/mixin_interfaces/$ICarriageConductors"
import { $AtomicInteger } from "packages/java/util/concurrent/atomic/$AtomicInteger"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $TravellingPoint, $TravellingPoint$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint"
import { $CarriageContraptionEntity, $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $AccessorCarriage } from "packages/com/railwayteam/railways/mixin/$AccessorCarriage"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $Carriage implements $AccessorCarriage, $ICarriageConductors, $ICarriageBufferDistanceTracker {
static readonly "netIdGenerator": $AtomicInteger

constructor(carriageBogey0: $CarriageBogey$$Type, carriageBogey1: $CarriageBogey$$Type, int2: integer)

public "alignEntity"(level0: $Level$$Type): void
public "anyAvailableDimensionalCarriage"(): $Pair<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>
public "anyAvailableEntity"(): $CarriageContraptionEntity
public "forEachPresentEntity"(consumer0: $Consumer$$Type<$CarriageContraptionEntity$$Type>): void
public "getAnchorDiff"(): double
public "getDimensional"(level0: $Level$$Type): $Carriage$DimensionalCarriageEntity
public "getDimensional"(resourceKey0: $ResourceKey$$Type<$Level>): $Carriage$DimensionalCarriageEntity
public "getDimensionalIfPresent"(resourceKey0: $ResourceKey$$Type<$Level>): $Carriage$DimensionalCarriageEntity
public "getLeadingPoint"(): $TravellingPoint
public "getPositionInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $Optional<$BlockPos>
public "getPresentDimensions"(): $List<$ResourceKey<$Level>>
public "getTrailingPoint"(): $TravellingPoint
public "isOnIncompatibleTrack"(): boolean
public "isOnTwoBogeys"(): boolean
public "leadingBogey"(): $CarriageBogey
public "manageEntities"(level0: $Level$$Type): void
public "presentInMultipleDimensions"(): boolean
public "railways$getControllingConductors"(): $List<any>
public "railways$getLeadingDistance"(): integer
public "railways$getTrailingDistance"(): integer
public "railways$setLeadingDistance"(distance: integer): void
public "railways$setTrailingDistance"(distance: integer): void
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $Carriage
public "setContraption"(level0: $Level$$Type, carriageContraption1: $CarriageContraption$$Type): void
public "setTrain"(train0: $Train$$Type): void
public "trailingBogey"(): $CarriageBogey
public "travel"(level0: $Level$$Type, trackGraph1: $TrackGraph$$Type, double2: double, travellingPoint3: $TravellingPoint$$Type, travellingPoint4: $TravellingPoint$$Type, int5: integer): double
public "updateConductors"(): void
public "updateContraptionAnchors"(): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "blocked"(): boolean
set "blocked"(value: boolean)
get "bogeySpacing"(): integer
set "bogeySpacing"(value: integer)
get "bogeys"(): $Couple<$CarriageBogey>
set "bogeys"(value: $Couple$$Type<$CarriageBogey$$Type>)
get "id"(): integer
set "id"(value: integer)
get "presentConductors"(): $Couple<boolean>
set "presentConductors"(value: $Couple$$Type<boolean>)
get "stalled"(): boolean
set "stalled"(value: boolean)
get "storage"(): $TrainCargoManager
set "storage"(value: $TrainCargoManager$$Type)
get "train"(): $Train
set "train"(value: $Train$$Type)
get "anchorDiff"(): double
get "leadingPoint"(): $TravellingPoint
get "presentDimensions"(): $List<$ResourceKey<$Level>>
get "trailingPoint"(): $TravellingPoint
get "onIncompatibleTrack"(): boolean
get "onTwoBogeys"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$SteerDirection" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
static readonly "LEFT": $TravellingPoint$SteerDirection
static readonly "NONE": $TravellingPoint$SteerDirection
static readonly "RIGHT": $TravellingPoint$SteerDirection

public static "valueOf"(string0: string): $TravellingPoint$SteerDirection
public static "values"(): $TravellingPoint$SteerDirection[]
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $BogeyStyle$SizeRenderer$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle$SizeRenderer"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BogeyVisual } from "packages/com/simibubi/create/content/trains/bogey/$BogeyVisual"
import { $Set } from "packages/java/util/$Set"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $AccessorBogeyStyle } from "packages/com/railwayteam/railways/mixin/client/$AccessorBogeyStyle"
import { $BogeySizes$BogeySize, $BogeySizes$BogeySize$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $AbstractBogeyBlock, $AbstractBogeyBlock$$Type } from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $BogeyStyle implements $AccessorBogeyStyle {
readonly "contactParticle": $ParticleOptions
readonly "cycleGroup": $ResourceLocation
readonly "defaultData": $CompoundTag
readonly "displayName": $Component
readonly "id": $ResourceLocation
readonly "smokeParticle": $ParticleOptions
readonly "soundEvent": $Supplier<$SoundEvent>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, component2: $Component$$Type, supplier3: $Supplier$$Type<$SoundEvent>, particleOptions4: $ParticleOptions$$Type, particleOptions5: $ParticleOptions$$Type, compoundTag6: $CompoundTag$$Type, map7: $Map$$Type<$BogeySizes$BogeySize$$Type, $Supplier$$Type<$AbstractBogeyBlock$$Type<any>>>, map8: $Map$$Type<$BogeySizes$BogeySize$$Type, $Supplier$$Type<$Supplier$$Type<$BogeyStyle$SizeRenderer$$Type>>>)

/** Client only, do not use in server scripts */
public "createVisual"(bogeySize0: $BogeySizes$BogeySize$$Type, visualizationContext1: $VisualizationContext$$Type, float2: float, boolean3: boolean): $BogeyVisual
public "getBlockForSize"(bogeySize0: $BogeySizes$BogeySize$$Type): $AbstractBogeyBlock<any>
public "getCycleGroup"(): $Map<$ResourceLocation, $BogeyStyle>
public "getNextBlock"(bogeySize0: $BogeySizes$BogeySize$$Type): $AbstractBogeyBlock<any>
/** Client only, do not use in server scripts */
public "render"(bogeySize0: $BogeySizes$BogeySize$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer, float6: float, compoundTag7: $CompoundTag$$Type, boolean8: boolean): void
public "validSizes"(): $Set<$BogeySizes$BogeySize>
}
}

declare module "packages/com/simibubi/create/content/contraptions/$MountedStorageManager" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MountedItemStorage } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage"
import { $MountedItemStorageWrapper } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorageWrapper"
import { $AbstractContraptionEntity$$Type } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import { $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $IItemHandlerModifiable$$Type } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $CombinedInvWrapper } from "packages/net/minecraftforge/items/wrapper/$CombinedInvWrapper"
import { $MountedStorageSyncPacket$$Type } from "packages/com/simibubi/create/content/contraptions/$MountedStorageSyncPacket"
import { $IFuelInventory } from "packages/com/railwayteam/railways/mixin_interfaces/$IFuelInventory"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $MountedFluidStorageWrapper } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MountedStorageManager implements $IFuelInventory {
constructor()

public "addBlock"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, blockEntity4: $BlockEntity$$Type): void
public "attachExternal"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
public "getAllItemStorages"(): $ImmutableMap<$BlockPos, $MountedItemStorage>
public "getAllItems"(): $CombinedInvWrapper
public "getFluids"(): $MountedFluidStorageWrapper
public "getFuelItems"(): $MountedItemStorageWrapper
public "getMountedItems"(): $MountedItemStorageWrapper
public "handlePlayerStorageInteraction"(contraption0: $Contraption$$Type, player1: $Player$$Type, blockPos2: $BlockPos$$Type): boolean
public "handleSync"(mountedStorageSyncPacket0: $MountedStorageSyncPacket$$Type, abstractContraptionEntity1: $AbstractContraptionEntity$$Type): void
public "initialize"(): void
public "railways$getFluidFuels"(): $MountedFluidStorageWrapper
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean, contraption2: $Contraption$$Type): void
public "tick"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "unmount"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "allItemStorages"(): $ImmutableMap<$BlockPos, $MountedItemStorage>
get "allItems"(): $CombinedInvWrapper
get "fluids"(): $MountedFluidStorageWrapper
get "fuelItems"(): $MountedItemStorageWrapper
get "mountedItems"(): $MountedItemStorageWrapper
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SignalBlock$SignalType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $SignalBlock$SignalType extends $Enum<$SignalBlock$SignalType> implements $StringRepresentable {
static readonly "CROSS_SIGNAL": $SignalBlock$SignalType
static readonly "ENTRY_SIGNAL": $SignalBlock$SignalType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SignalBlock$SignalType
public static "values"(): $SignalBlock$SignalType[]
get "serializedName"(): string
}
}

declare module "packages/com/simibubi/create/content/trains/station/$GlobalPackagePort" {
import { $ItemStackHandler, $ItemStackHandler$$Type } from "packages/net/minecraftforge/items/$ItemStackHandler"
import { $IItemHandlerModifiable$$Type } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"

export class $GlobalPackagePort {
constructor()

public "restoreOfflineBuffer"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
public "saveOfflineBuffer"(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type): void
get "address"(): string
set "address"(value: string)
get "offlineBuffer"(): $ItemStackHandler
set "offlineBuffer"(value: $ItemStackHandler$$Type)
get "primed"(): boolean
set "primed"(value: boolean)
}
}

declare module "packages/com/simibubi/create/foundation/fluid/$CombinedTankWrapper" {
import { $IFluidHandler, $IFluidHandler$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $IFluidHandler$FluidAction$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export class $CombinedTankWrapper implements $IFluidHandler {
constructor(...iFluidHandler0s: $IFluidHandler$$Type[])

public "drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "enforceVariety"(): $CombinedTankWrapper
public "fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
public "getFluidInTank"(int0: integer): $FluidStack
public "getTankCapacity"(int0: integer): integer
public "getTanks"(): integer
public "isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
get "tanks"(): integer
}
}

declare module "packages/com/simibubi/create/api/registry/$SimpleRegistry" {
import { $SimpleRegistry$Provider$$Type } from "packages/com/simibubi/create/api/registry/$SimpleRegistry$Provider"
import { $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"

export interface $SimpleRegistry<K, V> {
"get"(k0: K): V
"get"(stateHolder0: $StateHolder$$Type<K, any>): V
"invalidate"(): void
"register"(k0: K, v1: V): void
"registerProvider"(provider0: $SimpleRegistry$Provider$$Type<K, V>): void
}

export namespace $SimpleRegistry {
function create<K, V>(): $SimpleRegistry<K, V>
}
export abstract class $SimpleRegistry$$Static<K, V> implements $SimpleRegistry<K, V> {
static "create"<K, V>(): $SimpleRegistry<K, V>
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackMaterial" {
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $TrackBlock } from "packages/com/simibubi/create/content/trains/track/$TrackBlock"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $TrackMaterial$TrackType$TrackBlockFactory$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType$TrackBlockFactory"
import { $List } from "packages/java/util/$List"
import { $NonNullSupplier, $NonNullSupplier$$Type } from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $TrackMaterial$TrackModelHolder } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackModelHolder"
import { $TrackMaterial$TrackType, $TrackMaterial$TrackType$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"
import { $Map } from "packages/java/util/$Map"

export class $TrackMaterial {
static readonly "ALL": $Map<$ResourceLocation, $TrackMaterial>
static readonly "ANDESITE": $TrackMaterial
readonly "id": $ResourceLocation
readonly "langName": string
readonly "particle": $ResourceLocation
readonly "railsIngredient": $Ingredient
readonly "sleeperIngredient": $Ingredient
readonly "trackBlock": $NonNullSupplier<$NonNullSupplier<$TrackBlock>>
readonly "trackType": $TrackMaterial$TrackType

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, nonNullSupplier2: $NonNullSupplier$$Type<$NonNullSupplier<$TrackBlock>>, resourceLocation3: $ResourceLocation$$Type, ingredient4: $Ingredient$$Type, ingredient5: $Ingredient$$Type, trackType6: $TrackMaterial$TrackType$$Type, supplier7: $Supplier$$Type<$Supplier<$TrackMaterial$TrackModelHolder>>, trackBlockFactory8: $TrackMaterial$TrackType$TrackBlockFactory$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, nonNullSupplier2: $NonNullSupplier$$Type<$NonNullSupplier<$TrackBlock>>, resourceLocation3: $ResourceLocation$$Type, ingredient4: $Ingredient$$Type, ingredient5: $Ingredient$$Type, trackType6: $TrackMaterial$TrackType$$Type, supplier7: $Supplier$$Type<$Supplier<$TrackMaterial$TrackModelHolder>>)

public static "allBlocks"(): $List<$NonNullSupplier<$Block>>
public static "allBlocksFromMod"(string0: string): $List<$NonNullSupplier<$Block>>
public static "allFromMod"(string0: string): $List<$TrackMaterial>
public "asStack"(int0: integer): $ItemStack
public "asStack"(): $ItemStack
public "createBlock"(properties0: $BlockBehaviour$Properties$$Type): $TrackBlock
public static "deserialize"(string0: string): $TrackMaterial
public static "fromItem"(item0: $Item$$Type): $TrackMaterial
public "getBlock"(): $TrackBlock
public "getBlockSupplier"(): $NonNullSupplier<$TrackBlock>
/** Client only, do not use in server scripts */
public "getModelHolder"(): $TrackMaterial$TrackModelHolder
public "isFromMod"(string0: string): boolean
public "resourceName"(): string
get "block"(): $TrackBlock
get "blockSupplier"(): $NonNullSupplier<$TrackBlock>
get "modelHolder"(): $TrackMaterial$TrackModelHolder
}
}

declare module "packages/com/simibubi/create/content/contraptions/$ContraptionWorld" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $WrappedLevel } from "packages/net/createmod/catnip/levelWrappers/$WrappedLevel"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $ContraptionWorld extends $WrappedLevel {
constructor(level0: $Level$$Type, contraption1: $Contraption$$Type)

public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getTimeOfDay"(float0: float): float
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "statusMessage"(value: $Component$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Collection } from "packages/java/util/$Collection"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $TrackNodeLocation extends $Vec3i {
constructor(double0: double, double1: double, double2: double)
constructor(vec30: $Vec3$$Type)

public "allAdjacent"(): $Collection<$BlockPos>
public "equalsIgnoreDim"(object0: any): boolean
public "getDimension"(): $ResourceKey<$Level>
public "getLocation"(): $Vec3
public "in"(level0: $Level$$Type): $TrackNodeLocation
public "in"(resourceKey0: $ResourceKey$$Type<$Level>): $TrackNodeLocation
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackNodeLocation
public static "receive"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackNodeLocation
public "send"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "dimension"(): $ResourceKey<$Level>
set "dimension"(value: $ResourceKey$$Type<$Level$$Type>)
get "yOffsetPixels"(): integer
set "yOffsetPixels"(value: integer)
get "location"(): $Vec3
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackShape" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $List } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"

export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
static readonly "AE": $TrackShape
static readonly "AN": $TrackShape
static readonly "AS": $TrackShape
static readonly "AW": $TrackShape
static readonly "CR_D": $TrackShape
static readonly "CR_NDX": $TrackShape
static readonly "CR_NDZ": $TrackShape
static readonly "CR_O": $TrackShape
static readonly "CR_PDX": $TrackShape
static readonly "CR_PDZ": $TrackShape
static readonly "ND": $TrackShape
static readonly "NONE": $TrackShape
static readonly "PD": $TrackShape
static readonly "TE": $TrackShape
static readonly "TN": $TrackShape
static readonly "TS": $TrackShape
static readonly "TW": $TrackShape
static readonly "XO": $TrackShape
static readonly "ZO": $TrackShape

public static "asPortal"(direction0: $Direction$$Type): $TrackShape
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getAxes"(): $List<$Vec3>
public "getModel"(): string
public "getModelRotation"(): integer
public "getNormal"(): $Vec3
public "getSerializedName"(): string
public "isJunction"(): boolean
public "isPortal"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "mirror"(mirror0: $Mirror$$Type): $TrackShape
public "rotate"(rotation0: $Rotation$$Type): $TrackShape
public static "valueOf"(string0: string): $TrackShape
public static "values"(): $TrackShape[]
get "axes"(): $List<$Vec3>
get "model"(): string
get "modelRotation"(): integer
get "normal"(): $Vec3
get "serializedName"(): string
get "junction"(): boolean
get "portal"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$DimensionPalette" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $DimensionPalette {
constructor()

public "decode"(int0: integer): $ResourceKey<$Level>
public "encode"(resourceKey0: $ResourceKey$$Type<$Level>): integer
public static "read"(compoundTag0: $CompoundTag$$Type): $DimensionPalette
public static "receive"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $DimensionPalette
public "send"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type): void
}
}

declare module "packages/com/simibubi/create/foundation/block/render/$BlockDestructionProgressExtension" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockDestructionProgressExtension {
"create$getExtraPositions"(): $Set<$BlockPos>
"create$setExtraPositions"(set0: $Set$$Type<$BlockPos$$Type>): void
}

export namespace $BlockDestructionProgressExtension {
const probejs$$marker: never
}
export abstract class $BlockDestructionProgressExtension$$Static implements $BlockDestructionProgressExtension {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation" {
import { $Record } from "packages/java/lang/$Record"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BezierTrackPointLocation extends $Record {
constructor(curveTarget: $BlockPos$$Type, segment: integer)

public "curveTarget"(): $BlockPos
public "segment"(): integer
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageParticles" {
import { $Carriage$DimensionalCarriageEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage$DimensionalCarriageEntity"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $CarriageParticles {
constructor(carriageContraptionEntity0: $CarriageContraptionEntity$$Type)

public "tick"(dimensionalCarriageEntity0: $Carriage$DimensionalCarriageEntity$$Type): void
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$DiscoveredPath" {
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $GlobalStation, $GlobalStation$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $DiscoveredPath {
constructor(double0: double, double1: double, list2: $List$$Type<$Couple$$Type<$TrackNode$$Type>>, globalStation3: $GlobalStation$$Type)

get "cost"(): double
set "cost"(value: double)
get "destination"(): $GlobalStation
set "destination"(value: $GlobalStation$$Type)
get "distance"(): double
set "distance"(value: double)
get "path"(): $List<$Couple<$TrackNode>>
set "path"(value: $List$$Type<$Couple$$Type<$TrackNode$$Type>>)
}
}

declare module "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CreateAdvancement$Builder {
}
}

declare module "packages/com/simibubi/create/content/kinetics/deployer/$DeployerBlockEntity" {
import { $IFluidHandler$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $LazyOptional, $LazyOptional$$Type } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $DeployerFakePlayer } from "packages/com/simibubi/create/content/kinetics/deployer/$DeployerFakePlayer"
import { $PartialModel } from "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $KineticBlockEntity } from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $BeltProcessingBehaviour, $BeltProcessingBehaviour$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List$$Type } from "packages/java/util/$List"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $DeployerBlockEntity extends $KineticBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "changeMode"(): void
public "containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "discardPlayer"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
/** Client only, do not use in server scripts */
public "getHandOffset"(float0: float): float
/** Client only, do not use in server scripts */
public "getHandPose"(): $PartialModel
public "getIcon"(boolean0: boolean): $ItemStack
public "getModelData"(): $ModelData
public "getPlayer"(): $DeployerFakePlayer
public "getRecipe"(itemStack0: $ItemStack$$Type): $Recipe<$Container>
public "handler$zdk000$onActivate"(callbackInfo0: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onLoad"(): void
public "redstoneUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAnimatedOffset"(float0: float): void
public "startFistBump"(direction0: $Direction$$Type): boolean
public "triggerFistBump"(): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "processingBehaviour"(): $BeltProcessingBehaviour
set "processingBehaviour"(value: $BeltProcessingBehaviour$$Type)
get "handPose"(): $PartialModel
get "modelData"(): $ModelData
get "player"(): $DeployerFakePlayer
set "animatedOffset"(value: float)
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle$SizeRenderer" {
import { $Record } from "packages/java/lang/$Record"
import { $BogeyRenderer, $BogeyRenderer$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyRenderer"
import { $BogeyVisualizer, $BogeyVisualizer$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyVisualizer"

export class $BogeyStyle$SizeRenderer extends $Record {
constructor(renderer: $BogeyRenderer$$Type, visualizer: $BogeyVisualizer$$Type)

public "renderer"(): $BogeyRenderer
public "visualizer"(): $BogeyVisualizer
}
}

declare module "packages/com/simibubi/create/compat/computercraft/$AbstractComputerBehaviour" {
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $ComputerEvent$$Type } from "packages/com/simibubi/create/compat/computercraft/events/$ComputerEvent"
import { $BehaviourType } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$AbstractComputerBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "getPeripheralCapability"<T>(): $LazyOptional<T>
public "hasAttachedComputer"(): boolean
public "isPeripheralCap"<T>(capability0: $Capability$$Type<T>): boolean
public "prepareComputerEvent"(computerEvent0: $ComputerEvent$$Type): void
public "removePeripheral"(): void
public "setHasAttachedComputer"(boolean0: boolean): void
get "peripheralCapability"(): $LazyOptional<T>
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType" {
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"

export class $BehaviourType<T extends $BlockEntityBehaviour> {
constructor(string0: string)
constructor()

public "getName"(): string
get "name"(): string
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SignalBoundary" {
import { $SignalBlock$SignalType, $SignalBlock$SignalType$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBlock$SignalType"
import { $SignalBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity"
import { $SignalBlockEntity$OverlayState } from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$OverlayState"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState$$Type } from "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$SignalState"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $TrackEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $SignalBoundary extends $TrackEdgePoint {
constructor()

public "cycleSignalType"(blockPos0: $BlockPos$$Type): void
public "getGroup"(trackNode0: $TrackNode$$Type): $UUID
public "getOverlayFor"(blockPos0: $BlockPos$$Type): $SignalBlockEntity$OverlayState
public "getStateFor"(blockPos0: $BlockPos$$Type): $SignalBlockEntity$SignalState
public "getTypeFor"(blockPos0: $BlockPos$$Type): $SignalBlock$SignalType
public "isForcedRed"(boolean0: boolean): boolean
public "isForcedRed"(trackNode0: $TrackNode$$Type): boolean
public "queueUpdate"(trackNode0: $TrackNode$$Type): void
public "setGroup"(boolean0: boolean, uUID1: $UUID$$Type): void
public "setGroupAndUpdate"(trackNode0: $TrackNode$$Type, uUID1: $UUID$$Type): void
public "updateBlockEntityPower"(signalBlockEntity0: $SignalBlockEntity$$Type): void
get "blockEntities"(): $Couple<$Map<$BlockPos, boolean>>
set "blockEntities"(value: $Couple$$Type<$Map$$Type<$BlockPos$$Type, boolean>>)
get "cachedStates"(): $Couple<$SignalBlockEntity$SignalState>
set "cachedStates"(value: $Couple$$Type<$SignalBlockEntity$SignalState$$Type>)
get "groups"(): $Couple<$UUID>
set "groups"(value: $Couple$$Type<$UUID$$Type>)
get "sidesToUpdate"(): $Couple<boolean>
set "sidesToUpdate"(value: $Couple$$Type<boolean>)
get "types"(): $Couple<$SignalBlock$SignalType>
set "types"(value: $Couple$$Type<$SignalBlock$SignalType$$Type>)
}
}

declare module "packages/com/simibubi/create/content/contraptions/$StructureTransform" {
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Direction$Axis, $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Rotation, $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Mirror, $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StructureTransform {
constructor(blockPos0: $BlockPos$$Type, float1: float, float2: float, float3: float)
constructor(blockPos0: $BlockPos$$Type, axis1: $Direction$Axis$$Type, rotation2: $Rotation$$Type, mirror3: $Mirror$$Type)

public "apply"(vec30: $Vec3$$Type): $Vec3
public "apply"(blockEntity0: $BlockEntity$$Type): void
public "apply"(blockState0: $BlockState$$Type): $BlockState
public "apply"(blockPos0: $BlockPos$$Type): $BlockPos
public "applyWithoutOffset"(vec30: $Vec3$$Type): $Vec3
public "applyWithoutOffset"(blockPos0: $BlockPos$$Type): $BlockPos
public "applyWithoutOffsetUncentered"(vec30: $Vec3$$Type): $Vec3
public static "fromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $StructureTransform
public "mirrorFacing"(direction0: $Direction$$Type): $Direction
public "rotateAxis"(axis0: $Direction$Axis$$Type): $Direction$Axis
public "rotateFacing"(direction0: $Direction$$Type): $Direction
public "unapply"(blockPos0: $BlockPos$$Type): $BlockPos
public "unapplyWithoutOffset"(blockPos0: $BlockPos$$Type): $BlockPos
public "unapplyWithoutOffset"(vec30: $Vec3$$Type): $Vec3
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "angle"(): integer
set "angle"(value: integer)
get "mirror"(): $Mirror
set "mirror"(value: $Mirror$$Type)
get "offset"(): $BlockPos
set "offset"(value: $BlockPos$$Type)
get "rotation"(): $Rotation
set "rotation"(value: $Rotation$$Type)
get "rotationAxis"(): $Direction$Axis
set "rotationAxis"(value: $Direction$Axis$$Type)
}
}

declare module "packages/com/simibubi/create/content/contraptions/render/$ContraptionVisual" {
import { $SectionTrackedVisual$SectionCollector$$Type } from "packages/dev/engine_room/flywheel/api/visual/$SectionTrackedVisual$SectionCollector"
import { $AbstractEntityVisual } from "packages/dev/engine_room/flywheel/lib/visual/$AbstractEntityVisual"
import { $AbstractContraptionEntity, $AbstractContraptionEntity$$Type } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import { $DynamicVisual$Context } from "packages/dev/engine_room/flywheel/api/visual/$DynamicVisual$Context"
import { $TickableVisual$Context } from "packages/dev/engine_room/flywheel/api/visual/$TickableVisual$Context"
import { $Plan } from "packages/dev/engine_room/flywheel/api/task/$Plan"
import { $TickableVisual } from "packages/dev/engine_room/flywheel/api/visual/$TickableVisual"
import { $ShaderLightVisual } from "packages/dev/engine_room/flywheel/api/visual/$ShaderLightVisual"
import { $DynamicVisual } from "packages/dev/engine_room/flywheel/api/visual/$DynamicVisual"

export class $ContraptionVisual<E extends $AbstractContraptionEntity> extends $AbstractEntityVisual<E> implements $DynamicVisual, $TickableVisual, $ShaderLightVisual {
constructor(visualizationContext0: $VisualizationContext$$Type, e1: E, float2: float)

public "delete"(): void
public "planFrame"(): $Plan<$DynamicVisual$Context>
public "planTick"(): $Plan<$TickableVisual$Context>
public "setSectionCollector"(sectionCollector0: $SectionTrackedVisual$SectionCollector$$Type): void
public "update"(float0: float): void
set "sectionCollector"(value: $SectionTrackedVisual$SectionCollector$$Type)
}
}

declare module "packages/com/simibubi/create/foundation/item/$SmartInventory" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RecipeWrapper } from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"
import { $SyncedBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"

export class $SmartInventory extends $RecipeWrapper implements $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
constructor(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type, int1: integer, boolean2: boolean)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, int2: integer, boolean3: boolean, biPredicate4: $BiPredicate$$Type<integer, $ItemStack$$Type>)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, int2: integer, boolean3: boolean)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type, biPredicate2: $BiPredicate$$Type<integer, $ItemStack$$Type>)
constructor(int0: integer, syncedBlockEntity1: $SyncedBlockEntity$$Type)

public "allowExtraction"(): $SmartInventory
public "allowInsertion"(): $SmartInventory
public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "forbidExtraction"(): $SmartInventory
public "forbidInsertion"(): $SmartInventory
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getStackLimit"(int0: integer, itemStack1: $ItemStack$$Type): integer
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "tryClear"(object0: any): void
public "whenContentsChanged"(consumer0: $Consumer$$Type<integer>): $SmartInventory
public "withMaxStackSize"(int0: integer): $SmartInventory
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Contraption } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ICreateContraption } from "packages/xaero/pac/common/server/core/accessor/$ICreateContraption"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Entity$MoveFunction$$Type } from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import { $IEntityAdditionalSpawnData } from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $AbstractContraptionEntity$ContraptionRotationState } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity$ContraptionRotationState"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $EntityType$Builder, $EntityType$Builder$$Type } from "packages/net/minecraft/world/entity/$EntityType$Builder"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $AccessorAbstractContraptionEntity } from "packages/com/railwayteam/railways/mixin/$AccessorAbstractContraptionEntity"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $MutableInt } from "packages/org/apache/commons/lang3/mutable/$MutableInt"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICreateContraptionEntity } from "packages/xaero/pac/common/server/core/accessor/$ICreateContraptionEntity"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $Map } from "packages/java/util/$Map"

export class $AbstractContraptionEntity extends $Entity implements $IEntityAdditionalSpawnData, $ICreateContraptionEntity, $AccessorAbstractContraptionEntity {
readonly "collidingEntities": $Map<$Entity, $MutableInt>

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "addSittingPassenger"(entity0: $Entity$$Type, int1: integer): void
public "alignPassenger"(entity0: $Entity$$Type): void
public "alwaysAccepts"(): boolean
/** Client only, do not use in server scripts */
public "applyLocalTransforms"(poseStack0: $PoseStack$$Type, float1: float): void
public "applyRotation"(vec30: $Vec3$$Type, float1: float): $Vec3
public "attack"(hp: float): void
public static "build"(builder0: $EntityType$Builder$$Type<any>): $EntityType$Builder<any>
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "collisionEnabled"(): boolean
public "control"(blockPos0: $BlockPos$$Type, collection1: $Collection$$Type<integer>, player2: $Player$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disassemble"(): void
public "getAnchorVec"(): $Vec3
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getContactPointMotion"(vec30: $Vec3$$Type): $Vec3
public "getContraption"(): $Contraption
public "getContraptionName"(): $Component
public "getControllingPlayer"(): $Optional<$UUID>
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengerPosition"(entity0: $Entity$$Type, float1: float): $Vec3
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPrevAnchorVec"(): $Vec3
public "getPrevPositionVec"(): $Vec3
public "getProfile"(): $GameProfile
public "getRotationState"(): $AbstractContraptionEntity$ContraptionRotationState
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getXaero_OPAC_contraption"(): $ICreateContraption
public "getYawOffset"(): float
public "handlePlayerInteraction"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, interactionHand3: $InteractionHand$$Type): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAliveOrStale"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPrevPosInvalid"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isReadyForRender"(): boolean
public "isStalled"(): boolean
public "isWaterCreature"(): boolean
public "m_19956_"(entity0: $Entity$$Type, moveFunction1: $Entity$MoveFunction$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "move"(double0: double, double1: double, double2: double): void
public static "pitchFromVector"(vec30: $Vec3$$Type): float
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "refreshPSIs"(): void
public "registerColliding"(entity0: $Entity$$Type): void
public "reverseRotation"(vec30: $Vec3$$Type, float1: float): $Vec3
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setBlock"(blockPos0: $BlockPos$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type): void
public "setContraptionMotion"(vec30: $Vec3$$Type): void
public "setControllingPlayer"(uUID0: $UUID$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "startControlling"(blockPos0: $BlockPos$$Type, player1: $Player$$Type): boolean
public "stopControlling"(blockPos0: $BlockPos$$Type): void
public "supportsTerrainCollision"(): boolean
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "tickActors"(): void
public "toGlobalVector"(vec30: $Vec3$$Type, float1: float): $Vec3
public "toGlobalVector"(vec30: $Vec3$$Type, float1: float, boolean2: boolean): $Vec3
public "toLocalVector"(vec30: $Vec3$$Type, float1: float, boolean2: boolean): $Vec3
public "toLocalVector"(vec30: $Vec3$$Type, float1: float): $Vec3
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "yawFromVector"(vec30: $Vec3$$Type): float
get "staleTicks"(): integer
set "staleTicks"(value: integer)
get "anchorVec"(): $Vec3
get "block"(): $BlockContainerJS
get "contraption"(): $Contraption
get "contraptionName"(): $Component
get "controllingPlayer"(): $Optional<$UUID>
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "prevAnchorVec"(): $Vec3
get "prevPositionVec"(): $Vec3
get "profile"(): $GameProfile
get "rotationState"(): $AbstractContraptionEntity$ContraptionRotationState
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "xaero_OPAC_contraption"(): $ICreateContraption
get "yawOffset"(): float
get "aliveOrStale"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "prevPosInvalid"(): boolean
get "readyForRender"(): boolean
get "stalled"(): boolean
get "waterCreature"(): boolean
set "contraptionMotion"(value: $Vec3$$Type)
set "controllingPlayer"(value: $UUID$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TrainStatus" {
import { $TrainStatus$StatusMessage$$Type } from "packages/com/simibubi/create/content/trains/entity/$TrainStatus$StatusMessage"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"

export class $TrainStatus {
constructor(train0: $Train$$Type)

public "addMessage"(statusMessage0: $TrainStatus$StatusMessage$$Type): void
public "crash"(): void
public "displayInformation"(string0: string, boolean1: boolean, ...object2s: any[]): void
public "doublePortal"(): void
public "endOfTrack"(): void
public "failedMigration"(): void
public "failedNavigation"(): void
public "failedNavigationNoTarget"(string0: string): void
public "failedPackageNoTarget"(string0: string): void
public "foundConductor"(): void
public "highStress"(): void
public "manualControls"(): void
public "missingConductor"(): void
public "missingCorrectConductor"(): void
public "newSchedule"(): void
public "successfulMigration"(): void
public "successfulNavigation"(): void
public "tick"(level0: $Level$$Type): void
public "trackOK"(): void
get "conductor"(): boolean
set "conductor"(value: boolean)
get "navigation"(): boolean
set "navigation"(value: boolean)
get "track"(): boolean
set "track"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$TransportedResult" {
import { $TransportedItemStack, $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $TransportedItemStackHandlerBehaviour$TransportedResult {
public static "convertTo"(list0: $List$$Type<$TransportedItemStack$$Type>): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertTo"(transportedItemStack0: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public static "convertToAndLeaveHeld"(list0: $List$$Type<$TransportedItemStack$$Type>, transportedItemStack1: $TransportedItemStack$$Type): $TransportedItemStackHandlerBehaviour$TransportedResult
public "didntChangeFrom"(itemStack0: $ItemStack$$Type): boolean
public static "doNothing"(): $TransportedItemStackHandlerBehaviour$TransportedResult
public "doesNothing"(): boolean
public "getHeldOutput"(): $TransportedItemStack
public "getOutputs"(): $List<$TransportedItemStack>
public "hasHeldOutput"(): boolean
public static "removeItem"(): $TransportedItemStackHandlerBehaviour$TransportedResult
get "heldOutput"(): $TransportedItemStack
get "outputs"(): $List<$TransportedItemStack>
}
}

declare module "packages/com/simibubi/create/content/contraptions/minecart/capability/$MinecartController" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $AbstractMinecart, $AbstractMinecart$$Type } from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $MinecartController implements $INBTSerializable<$CompoundTag> {
static "EMPTY": $MinecartController

constructor(abstractMinecart0: $AbstractMinecart$$Type)

public "cart"(): $AbstractMinecart
public "coupleWith"(boolean0: boolean, uUID1: $UUID$$Type, float2: float, boolean3: boolean): void
public "decouple"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "empty"(): $MinecartController
public "getCoupledCart"(boolean0: boolean): $UUID
public "getCouplingLength"(boolean0: boolean): float
public "hasContraptionCoupling"(boolean0: boolean): boolean
public "isConnectedToCoupling"(): boolean
public "isCoupledThroughContraption"(): boolean
public "isFullyCoupled"(): boolean
public "isLeadingCoupling"(): boolean
public "isPresent"(): boolean
public "isStalled"(): boolean
public "prepareForCoupling"(boolean0: boolean): void
public "removeConnection"(boolean0: boolean): void
public "sendData"(): void
public "serializeNBT"(): $CompoundTag
public "setStalledExternally"(boolean0: boolean): void
public "tick"(): void
get "connectedToCoupling"(): boolean
get "coupledThroughContraption"(): boolean
get "fullyCoupled"(): boolean
get "leadingCoupling"(): boolean
get "present"(): boolean
get "stalled"(): boolean
set "stalledExternally"(value: boolean)
}
}

declare module "packages/com/simibubi/create/api/behaviour/interaction/$MovingInteractionBehaviour" {
import { $SimpleRegistry } from "packages/com/simibubi/create/api/registry/$SimpleRegistry"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $AbstractContraptionEntity$$Type } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $NonNullConsumer } from "packages/com/tterrag/registrate/util/nullness/$NonNullConsumer"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $MovingInteractionBehaviour {
static readonly "REGISTRY": $SimpleRegistry<$Block, $MovingInteractionBehaviour>

constructor()

public "handleEntityCollision"(entity0: $Entity$$Type, blockPos1: $BlockPos$$Type, abstractContraptionEntity2: $AbstractContraptionEntity$$Type): void
public "handlePlayerInteraction"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockPos2: $BlockPos$$Type, abstractContraptionEntity3: $AbstractContraptionEntity$$Type): boolean
public static "interactionBehaviour"<B extends $Block>(movingInteractionBehaviour0: $MovingInteractionBehaviour$$Type): $NonNullConsumer<B>
}
}

declare module "packages/com/simibubi/create/foundation/block/$IBE" {
import { $EntityBlock } from "packages/net/minecraft/world/level/block/$EntityBlock"
import { $Class } from "packages/java/lang/$Class"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockEntityType, $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Optional } from "packages/java/util/$Optional"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $IBE<T extends $BlockEntity> extends $EntityBlock {
"getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): T
"getBlockEntityClass"(): $Class<T>
"getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<T>
"getBlockEntityType"(): $BlockEntityType<T>
"getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
"getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
"newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
"onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<T, $InteractionResult>): $InteractionResult
"withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<T>): void
get "blockEntityClass"(): $Class<T>
get "blockEntityType"(): $BlockEntityType<T>
}

export namespace $IBE {
function onRemove(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
}
export abstract class $IBE$$Static<T extends $BlockEntity> implements $IBE<T> {
static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
}
}

declare module "packages/com/simibubi/create/content/contraptions/behaviour/$MovementContext" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MountedFluidStorage } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorage"
import { $MountedItemStorage } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage"
import { $UnaryOperator, $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $Contraption, $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $FilterItemStack } from "packages/com/simibubi/create/content/logistics/filter/$FilterItemStack"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MovementContext {
constructor(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, contraption2: $Contraption$$Type)

public "getAnimationSpeed"(): float
public "getFilterFromBE"(): $FilterItemStack
public "getFluidStorage"(): $MountedFluidStorage
public "getItemStorage"(): $MountedItemStorage
public static "readNBT"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, compoundTag2: $CompoundTag$$Type, contraption3: $Contraption$$Type): $MovementContext
public "writeToNBT"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "blockEntityData"(): $CompoundTag
set "blockEntityData"(value: $CompoundTag$$Type)
get "contraption"(): $Contraption
set "contraption"(value: $Contraption$$Type)
get "data"(): $CompoundTag
set "data"(value: $CompoundTag$$Type)
get "disabled"(): boolean
set "disabled"(value: boolean)
get "firstMovement"(): boolean
set "firstMovement"(value: boolean)
get "localPos"(): $BlockPos
set "localPos"(value: $BlockPos$$Type)
get "motion"(): $Vec3
set "motion"(value: $Vec3$$Type)
get "position"(): $Vec3
set "position"(value: $Vec3$$Type)
get "relativeMotion"(): $Vec3
set "relativeMotion"(value: $Vec3$$Type)
get "rotation"(): $UnaryOperator<$Vec3>
set "rotation"(value: $UnaryOperator$$Type<$Vec3$$Type>)
get "stall"(): boolean
set "stall"(value: boolean)
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "temporaryData"(): any
set "temporaryData"(value: any)
get "world"(): $Level
set "world"(value: $Level$$Type)
get "animationSpeed"(): float
get "filterFromBE"(): $FilterItemStack
get "fluidStorage"(): $MountedFluidStorage
get "itemStorage"(): $MountedItemStorage
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$ArrivalSoundQueue" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $ArrivalSoundQueue {
constructor()

public "add"(int0: integer, blockPos1: $BlockPos$$Type): void
public "deserialize"(compoundTag0: $CompoundTag$$Type): void
public "firstTick"(): integer
public "getFirstWhistle"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): $Pair<boolean, integer>
public static "isPlayable"(blockState0: $BlockState$$Type): boolean
public "lastTick"(): integer
public static "play"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type): void
public "serialize"(compoundTag0: $CompoundTag$$Type): void
public "tick"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, int1: integer, boolean2: boolean): boolean
get "offset"(): integer
set "offset"(value: integer)
}
}

declare module "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement" {
import { $CreateAdvancementConstructor } from "packages/plus/dragons/createenchantmentindustry/foundation/mixin/dragonLibLegacy/$CreateAdvancementConstructor"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $AdvancementHolder$$Type } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/$AdvancementHolder"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $CreateAdvancement$Builder$$Type } from "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement$Builder"
import { $CreateAdvancementAccess } from "packages/plus/dragons/createenchantmentindustry/dragonLibLegacy/advancement/$CreateAdvancementAccess"

export class $CreateAdvancement implements $CreateAdvancementConstructor, $CreateAdvancementAccess {
constructor(string0: string, unaryOperator1: $UnaryOperator$$Type<$CreateAdvancement$Builder$$Type>)

public "awardTo"(player0: $Player$$Type): void
public "fromAdvancementHolder"(advancementHolder0: $AdvancementHolder$$Type): void
public "isAlreadyAwardedTo"(player0: $Player$$Type): boolean
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$ProcessingCallback" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$TransportedResult"
import { $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"

export interface $TransportedItemStackHandlerBehaviour$ProcessingCallback {
"applyToAllItems"(float0: float, function1: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
}

export namespace $TransportedItemStackHandlerBehaviour$ProcessingCallback {
const probejs$$marker: never
}
export abstract class $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Static implements $TransportedItemStackHandlerBehaviour$ProcessingCallback {
}
}

declare module "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockEntityItemRequirement" {
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $SpecialBlockEntityItemRequirement {
"getRequiredItems"(blockState0: $BlockState$$Type): $ItemRequirement
}

export namespace $SpecialBlockEntityItemRequirement {
const probejs$$marker: never
}
export abstract class $SpecialBlockEntityItemRequirement$$Static implements $SpecialBlockEntityItemRequirement {
}
}

declare module "packages/com/simibubi/create/content/contraptions/$Contraption" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ContraptionWorld } from "packages/com/simibubi/create/content/contraptions/$ContraptionWorld"
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $AbstractContraptionEntity, $AbstractContraptionEntity$$Type } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $MovementContext, $MovementContext$$Type } from "packages/com/simibubi/create/content/contraptions/behaviour/$MovementContext"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $ICreateContraption } from "packages/xaero/pac/common/server/core/accessor/$ICreateContraption"
import { $IContraptionFuel } from "packages/com/railwayteam/railways/mixin_interfaces/$IContraptionFuel"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $StructureTemplate$StructureBlockInfo } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $MountedFluidStorageWrapper } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB, $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ContraptionType } from "packages/com/simibubi/create/api/contraption/$ContraptionType"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Object2BooleanMap, $Object2BooleanMap$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanMap"
import { $MovingInteractionBehaviour } from "packages/com/simibubi/create/api/behaviour/interaction/$MovingInteractionBehaviour"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $MutablePair } from "packages/org/apache/commons/lang3/tuple/$MutablePair"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $MountedStorageManager } from "packages/com/simibubi/create/content/contraptions/$MountedStorageManager"
import { $ClientContraption } from "packages/com/simibubi/create/content/contraptions/render/$ClientContraption"
import { $MovementBehaviour$$Type } from "packages/com/simibubi/create/api/behaviour/movement/$MovementBehaviour"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Contraption implements $IContraptionFuel, $ICreateContraption {
constructor()

public "addBlocksToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type): void
public "addPassengersToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type, list2: $List$$Type<$Entity$$Type>): void
public "assemble"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
public "canBeStabilized"(direction0: $Direction$$Type, blockPos1: $BlockPos$$Type): boolean
public "containsBlockBreakers"(): boolean
public "expandBoundsAroundAxis"(axis0: $Direction$Axis$$Type): void
public "forEachActor"(level0: $Level$$Type, biConsumer1: $BiConsumer$$Type<$MovementBehaviour$$Type, $MovementContext$$Type>): void
public static "fromNBT"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type, boolean2: boolean): $Contraption
public "getActorAt"(blockPos0: $BlockPos$$Type): $MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>
public "getActors"(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>
public "getBearingPosOf"(uUID0: $UUID$$Type): $BlockPos
public "getBlockEntityClientSide"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
public "getContraptionWorld"(): $ContraptionWorld
public "getDisabledActors"(): $List<$ItemStack>
public "getInteractors"(): $Map<$BlockPos, $MovingInteractionBehaviour>
public "getIsLegacy"(): $Object2BooleanMap<$BlockPos>
public "getOrCreateClientContraptionLazy"(): $ClientContraption
public static "getRadius"(iterable0: $Iterable$$Type<$Vec3i$$Type>, axis1: $Direction$Axis$$Type): double
public "getSeatMapping"(): $Map<$UUID, integer>
public "getSeatOf"(uUID0: $UUID$$Type): $BlockPos
public "getSeats"(): $List<$BlockPos>
public "getSimplifiedEntityColliders"(): $Optional<$List<$AABB>>
public "getStorage"(): $MountedStorageManager
public "getType"(): $ContraptionType
public "getXaero_OPAC_anchor"(): $BlockPos
public "getXaero_OPAC_placementPos"(): $BlockPos
public "handler$zdh000$onMovementAllowed"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, callbackInfoReturnable3: $CallbackInfoReturnable$$Type<any>): void
public "handler$zdh000$postAddSuperGlueToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$zdh000$preAddSuperGlueToWorld"(level0: $Level$$Type, structureTransform1: $StructureTransform$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "invalidateClientContraptionChildren"(): void
public "invalidateClientContraptionStructure"(): void
public "invalidateColliders"(): void
public "isActorTypeDisabled"(itemStack0: $ItemStack$$Type): boolean
public "isHiddenInPortal"(blockPos0: $BlockPos$$Type): boolean
public "localvar$zdh000$onAddBlocksToWorld"(blockState0: $BlockState$$Type, level1: $Level$$Type, structureTransform2: $StructureTransform$$Type): $BlockState
public "modify$zdh000$onAddBlocksToWorld"(blockPos0: $BlockPos$$Type): $BlockPos
public "onEntityCreated"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "onEntityInitialize"(level0: $Level$$Type, abstractContraptionEntity1: $AbstractContraptionEntity$$Type): void
public "onEntityRemoved"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "railways$getFluidFuels"(): $MountedFluidStorageWrapper
public "readNBT"(level0: $Level$$Type, compoundTag1: $CompoundTag$$Type, boolean2: boolean): void
public "removeBlocksFromWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "resetClientContraption"(): void
public "searchMovedStructure"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "setActorsActive"(itemStack0: $ItemStack$$Type, boolean1: boolean): void
public "setSeatMapping"(map0: $Map$$Type<$UUID$$Type, integer>): void
public "setXaero_OPAC_placementPos"(blockPos0: $BlockPos$$Type): void
public "startMoving"(level0: $Level$$Type): void
public "stop"(level0: $Level$$Type): void
public "tickStorage"(abstractContraptionEntity0: $AbstractContraptionEntity$$Type): void
public "writeNBT"(boolean0: boolean): $CompoundTag
public "writeStorage"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
get "anchor"(): $BlockPos
set "anchor"(value: $BlockPos$$Type)
get "bounds"(): $AABB
set "bounds"(value: $AABB$$Type)
get "disassembled"(): boolean
set "disassembled"(value: boolean)
get "entity"(): $AbstractContraptionEntity
set "entity"(value: $AbstractContraptionEntity$$Type)
get "hasUniversalCreativeCrate"(): boolean
set "hasUniversalCreativeCrate"(value: boolean)
get "isLegacy"(): $Object2BooleanMap<$BlockPos>
set "isLegacy"(value: $Object2BooleanMap$$Type<$BlockPos$$Type>)
get "simplifiedEntityColliders"(): $Optional<$List<$AABB>>
set "simplifiedEntityColliders"(value: $Optional$$Type<$List$$Type<$AABB$$Type>>)
get "stalled"(): boolean
set "stalled"(value: boolean)
get "actors"(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>
get "blocks"(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>
get "contraptionWorld"(): $ContraptionWorld
get "disabledActors"(): $List<$ItemStack>
get "interactors"(): $Map<$BlockPos, $MovingInteractionBehaviour>
get "orCreateClientContraptionLazy"(): $ClientContraption
get "seatMapping"(): $Map<$UUID, integer>
get "seats"(): $List<$BlockPos>
get "storage"(): $MountedStorageManager
get "type"(): $ContraptionType
get "xaero_OPAC_anchor"(): $BlockPos
get "xaero_OPAC_placementPos"(): $BlockPos
set "seatMapping"(value: $Map$$Type<$UUID$$Type, integer>)
set "xaero_OPAC_placementPos"(value: $BlockPos$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackGraph" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $Color, $Color$$Type } from "packages/net/createmod/catnip/theme/$Color"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $EdgePointType$$Type } from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import { $Collection } from "packages/java/util/$Collection"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TrackNodeLocation$DiscoveredLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import { $AtomicInteger } from "packages/java/util/concurrent/atomic/$AtomicInteger"
import { $TrackGraphBounds } from "packages/com/simibubi/create/content/trains/graph/$TrackGraphBounds"
import { $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $Set } from "packages/java/util/$Set"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $TrackEdge, $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $TrackGraph {
static readonly "graphNetIdGenerator": $AtomicInteger
static readonly "nodeNetIdGenerator": $AtomicInteger

constructor()
constructor(uUID0: $UUID$$Type)

public "addNode"(trackNode0: $TrackNode$$Type): void
public "addNodeIfAbsent"(trackNode0: $TrackNode$$Type): boolean
public "addPoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, t1: T): void
public "connectNodes"(levelAccessor0: $LevelAccessor$$Type, discoveredLocation1: $TrackNodeLocation$DiscoveredLocation$$Type, discoveredLocation2: $TrackNodeLocation$DiscoveredLocation$$Type, bezierConnection3: $BezierConnection$$Type): void
public "createNodeIfAbsent"(discoveredLocation0: $TrackNodeLocation$DiscoveredLocation$$Type): boolean
public "deferIntersectionUpdate"(trackEdge0: $TrackEdge$$Type): void
public "disconnectNodes"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type): void
public "distanceToLocationSqr"(level0: $Level$$Type, vec31: $Vec3$$Type): float
public "findDisconnectedGraphs"(levelAccessor0: $LevelAccessor$$Type, map1: $Map$$Type<integer, $Pair$$Type<integer, $UUID$$Type>>): $Set<$TrackGraph>
public "getBounds"(level0: $Level$$Type): $TrackGraphBounds
public "getChecksum"(): integer
public "getConnection"(couple0: $Couple$$Type<$TrackNode$$Type>): $TrackEdge
public "getConnectionsFrom"(trackNode0: $TrackNode$$Type): $Map<$TrackNode, $TrackEdge>
public "getNode"(int0: integer): $TrackNode
public "getNodes"(): $Set<$TrackNodeLocation>
public "getPoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, uUID1: $UUID$$Type): T
public "getPoints"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>): $Collection<T>
public "invalidateBounds"(): void
public "isEmpty"(): boolean
public "loadNode"(trackNodeLocation0: $TrackNodeLocation$$Type, int1: integer, vec32: $Vec3$$Type): void
public "locateNode"(trackNodeLocation0: $TrackNodeLocation$$Type): $TrackNode
public "locateNode"(level0: $Level$$Type, vec31: $Vec3$$Type): $TrackNode
public "markDirty"(): void
public static "nextGraphId"(): integer
public static "nextNodeId"(): integer
public "putConnection"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type): boolean
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackGraph
public "removeNode"(levelAccessor0: $LevelAccessor$$Type, trackNodeLocation1: $TrackNodeLocation$$Type): boolean
public "removePoint"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, uUID1: $UUID$$Type): T
public "resolveIntersectingEdgeGroups"(level0: $Level$$Type): void
public "setId"(uUID0: $UUID$$Type): void
public "setNetId"(int0: integer): void
public "tickPoints"(boolean0: boolean): void
public "transfer"(levelAccessor0: $LevelAccessor$$Type, trackNode1: $TrackNode$$Type, trackGraph2: $TrackGraph$$Type): void
public "transferAll"(trackGraph0: $TrackGraph$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "color"(): $Color
set "color"(value: $Color$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "checksum"(): integer
get "nodes"(): $Set<$TrackNodeLocation>
get "empty"(): boolean
set "netId"(value: integer)
}
}

declare module "packages/com/simibubi/create/content/trains/station/$StationMarker" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MapDecoration$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $StationMarker {
static readonly "TYPE": $MapDecoration$Type

constructor(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type, component2: $Component$$Type)

public static "fromWorld"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $StationMarker
public "getId"(): string
public "getName"(): $Component
public "getSource"(): $BlockPos
public "getTarget"(): $BlockPos
public static "load"(compoundTag0: $CompoundTag$$Type): $StationMarker
public "save"(): $CompoundTag
get "id"(): string
get "name"(): $Component
get "source"(): $BlockPos
get "target"(): $BlockPos
}
}

declare module "packages/com/simibubi/create/content/trains/station/$StationMapData" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $StationBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/station/$StationBlockEntity"
import { $StationMarker$$Type } from "packages/com/simibubi/create/content/trains/station/$StationMarker"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $StationMapData {
"addStationMarker"(stationMarker0: $StationMarker$$Type): void
"toggleStation"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, stationBlockEntity2: $StationBlockEntity$$Type): boolean
}

export namespace $StationMapData {
const probejs$$marker: never
}
export abstract class $StationMapData$$Static implements $StationMapData {
}
}

declare module "packages/com/simibubi/create/content/kinetics/deployer/$DeployerFakePlayer" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $InventoryKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $FakePlayer } from "packages/net/minecraftforge/common/util/$FakePlayer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $MixinAccessorDeployerFakePlayer } from "packages/xaero/pac/common/mixin/create/$MixinAccessorDeployerFakePlayer"
import { $KubeJSGUI$$Type } from "packages/dev/latvian/mods/kubejs/gui/$KubeJSGUI"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $LivingDropsEvent$$Type } from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import { $EntityEvent$Size$$Type } from "packages/net/minecraftforge/event/entity/$EntityEvent$Size"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LivingChangeTargetEvent$$Type } from "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ChestMenuData$$Type } from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $LivingExperienceDropEvent$$Type } from "packages/net/minecraftforge/event/entity/living/$LivingExperienceDropEvent"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $AnimationApplier } from "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $DeployerFakePlayer extends $FakePlayer implements $MixinAccessorDeployerFakePlayer {
static readonly "fallbackID": $UUID

constructor(serverLevel0: $ServerLevel$$Type, uUID1: $UUID$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "ban"(banner: string, reason: string, expiresInMillis: long): void
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public "clearMeshes"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public static "deployerCollectsDropsFromKilledEntities"(livingDropsEvent0: $LivingDropsEvent$$Type): void
public static "deployerHasEyesOnHisFeet"(size0: $EntityEvent$Size$$Type): void
public static "deployerKillsDoNotSpawnXP"(livingExperienceDropEvent0: $LivingExperienceDropEvent$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "entitiesDontRetaliate"(livingChangeTargetEvent0: $LivingChangeTargetEvent$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnLocation"(): $BlockContainerJS
public "getStats"(): $PlayerStatsJS
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOp"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "kick"(reason: $Component$$Type): void
public "kick"(): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
public "openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCreativeMode"(mode: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setSpawnLocation"(c: $BlockContainerJS$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "supplementaries$hasQuiver"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
get "onMinecartContraption"(): boolean
set "onMinecartContraption"(value: boolean)
get "placedTracks"(): boolean
set "placedTracks"(value: boolean)
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "server"(): $MinecraftServer
get "spawnLocation"(): $BlockContainerJS
get "stats"(): $PlayerStatsJS
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType" {
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $FanProcessingType$AirFlowParticleAccess$$Type } from "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType$AirFlowParticleAccess"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $FanProcessingType {
"affectEntity"(entity0: $Entity$$Type, level1: $Level$$Type): void
"canProcess"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): boolean
"getPriority"(): integer
"isValidAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): boolean
"morphAirFlow"(airFlowParticleAccess0: $FanProcessingType$AirFlowParticleAccess$$Type, randomSource1: $RandomSource$$Type): void
"process"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): $List<$ItemStack>
"spawnProcessingParticles"(level0: $Level$$Type, vec31: $Vec3$$Type): void
get "priority"(): integer
}

export namespace $FanProcessingType {
function getAt(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $FanProcessingType
function parse(string0: string): $FanProcessingType
}
export abstract class $FanProcessingType$$Static implements $FanProcessingType {
static "getAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $FanProcessingType
static "parse"(string0: string): $FanProcessingType
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$ITurnListener" {
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $TrackEdge, $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"

export interface $TravellingPoint$ITurnListener extends $BiConsumer<double, $TrackEdge> {
"accept"(double0: double, trackEdge1: $TrackEdge$$Type): void
"andThen"(biConsumer0: $BiConsumer$$Type<double, $TrackEdge$$Type>): $BiConsumer<double, $TrackEdge>
}

export namespace $TravellingPoint$ITurnListener {
const probejs$$marker: never
}
export abstract class $TravellingPoint$ITurnListener$$Static implements $TravellingPoint$ITurnListener {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackBlockEntityTilt" {
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ModelProperty } from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import { $TrackBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackBlockEntity"
import { $BezierConnection, $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"

export class $TrackBlockEntityTilt {
static readonly "ASCENDING_PROPERTY": $ModelProperty<double>

constructor(trackBlockEntity0: $TrackBlockEntity$$Type)

public "captureSmoothingHandles"(): void
public static "compareHandles"(vec30: $Vec3$$Type, vec31: $Vec3$$Type): boolean
public "getYOffsetForAxisEnd"(vec30: $Vec3$$Type): integer
public "restoreToOriginalCurve"(bezierConnection0: $BezierConnection$$Type): $BezierConnection
public "tryApplySmoothing"(): void
public "undoSmoothing"(): void
get "smoothingAngle"(): $Optional<double>
set "smoothingAngle"(value: $Optional$$Type<double>)
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandlerModifiable } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List } from "packages/java/util/$List"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $MountedItemStorageType } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorageType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MountedItemStorage implements $IItemHandlerModifiable {
static readonly "CODEC": $Codec<$MountedItemStorage>
readonly "type": $MountedItemStorageType<$MountedItemStorage>

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(i: integer): integer
public "getSlotLimit"(int0: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getStackInSlot"(int0: integer): $ItemStack
public "getWidth"(): integer
public "handleInteraction"(serverPlayer0: $ServerPlayer$$Type, contraption1: $Contraption$$Type, structureBlockInfo2: $StructureTemplate$StructureBlockInfo$$Type): boolean
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "unmount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/station/$StationEditPacket" {
import { $DoorControl$$Type } from "packages/com/simibubi/create/content/decoration/slidingDoor/$DoorControl"
import { $ILimited } from "packages/com/railwayteam/railways/mixin_interfaces/$ILimited"
import { $StationBlockEntity } from "packages/com/simibubi/create/content/trains/station/$StationBlockEntity"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockEntityConfigurationPacket } from "packages/com/simibubi/create/foundation/networking/$BlockEntityConfigurationPacket"

export class $StationEditPacket extends $BlockEntityConfigurationPacket<$StationBlockEntity> implements $ILimited {
constructor(blockPos0: $BlockPos$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

public static "configure"(blockPos0: $BlockPos$$Type, boolean1: boolean, string2: string, doorControl3: $DoorControl$$Type): $StationEditPacket
public static "dropSchedule"(blockPos0: $BlockPos$$Type): $StationEditPacket
public "isLimitEnabled"(): boolean
public static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
public "setLimitEnabled"(limitEnabled: boolean): void
public static "tryAssemble"(blockPos0: $BlockPos$$Type): $StationEditPacket
public static "tryDisassemble"(blockPos0: $BlockPos$$Type): $StationEditPacket
get "limitEnabled"(): boolean
set "limitEnabled"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint" {
import { $TrackEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $SingleBlockEntityEdgePoint extends $TrackEdgePoint {
constructor()

public "getBlockEntityDimension"(): $ResourceKey<$Level>
public "getBlockEntityPos"(): $BlockPos
get "blockEntityDimension"(): $ResourceKey<$Level>
set "blockEntityDimension"(value: $ResourceKey$$Type<$Level$$Type>)
get "blockEntityPos"(): $BlockPos
set "blockEntityPos"(value: $BlockPos$$Type)
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Collection } from "packages/java/util/$Collection"
import { $BlockEntityBehaviour, $BlockEntityBehaviour$$Type } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $SpecialBlockEntityItemRequirement } from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockEntityItemRequirement"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $VirtualBlockEntity } from "packages/net/createmod/ponder/api/$VirtualBlockEntity"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $CachedRenderBBBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$CachedRenderBBBlockEntity"
import { $List$$Type } from "packages/java/util/$List"
import { $IInteractionChecker } from "packages/com/simibubi/create/foundation/utility/$IInteractionChecker"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BehaviourType$$Type } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import { $CreateAdvancement$$Type } from "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement"
import { $PartialSafeNBT } from "packages/com/simibubi/create/api/schematic/nbt/$PartialSafeNBT"

export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addBehaviours"(list0: $List$$Type<$BlockEntityBehaviour$$Type>): void
public "addBehavioursDeferred"(list0: $List$$Type<$BlockEntityBehaviour$$Type>): void
public "attachBehaviourLate"(blockEntityBehaviour0: $BlockEntityBehaviour$$Type): void
public "award"(createAdvancement0: $CreateAdvancement$$Type): void
public "awardIfNear"(createAdvancement0: $CreateAdvancement$$Type, int1: integer): void
public "canPlayerUse"(player0: $Player$$Type): boolean
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "destroy"(): void
public "forEachBehaviour"(consumer0: $Consumer$$Type<$BlockEntityBehaviour$$Type>): void
public "getAllBehaviours"(): $Collection<$BlockEntityBehaviour>
public "getBehaviour"<T extends $BlockEntityBehaviour>(behaviourType0: $BehaviourType$$Type<T>): T
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRequiredItems"(blockState0: $BlockState$$Type): $ItemRequirement
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "initialize"(): void
public "invalidate"(): void
public "isChunkUnloaded"(): boolean
public "isVirtual"(): boolean
public "lazyTick"(): void
public "m_183515_"(compoundTag0: $CompoundTag$$Type): void
public "markVirtual"(): void
public "onLoad"(): void
public "refreshBlockState"(): void
public "registerAwardables"(list0: $List$$Type<$BlockEntityBehaviour$$Type>, ...createAdvancement1s: $CreateAdvancement$$Type[]): void
public "remove"(): void
public "removeBehaviour"(behaviourType0: $BehaviourType$$Type<any>): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sendToMenu"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setLazyTickRate"(int0: integer): void
public "tick"(): void
public "writeSafe"(compoundTag0: $CompoundTag$$Type): void
get "allBehaviours"(): $Collection<$BlockEntityBehaviour>
get "modelData"(): $ModelData
get "chunkUnloaded"(): boolean
get "virtual"(): boolean
set "lazyTickRate"(value: integer)
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageWrapper" {
import { $MountedFluidStorage, $MountedFluidStorage$$Type } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorage"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $CombinedTankWrapper } from "packages/com/simibubi/create/foundation/fluid/$CombinedTankWrapper"

export class $MountedFluidStorageWrapper extends $CombinedTankWrapper {
readonly "storages": $ImmutableMap<$BlockPos, $MountedFluidStorage>

constructor(immutableMap0: $ImmutableMap$$Type<$BlockPos$$Type, $MountedFluidStorage$$Type>)

}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$ScheduleDataEntry" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $IScheduleInput } from "packages/com/simibubi/create/content/trains/schedule/$IScheduleInput"
import { $List } from "packages/java/util/$List"
import { $ModularGuiLineBuilder$$Type } from "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ScheduleDataEntry implements $IScheduleInput {
constructor()

public "getData"(): $CompoundTag
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setData"(compoundTag0: $CompoundTag$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
get "data"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
set "data"(value: $CompoundTag$$Type)
}
}

declare module "packages/com/simibubi/create/api/equipment/goggles/$IHaveHoveringInformation" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IHaveCustomOverlayIcon } from "packages/com/simibubi/create/api/equipment/goggles/$IHaveCustomOverlayIcon"

export interface $IHaveHoveringInformation extends $IHaveCustomOverlayIcon {
"addToTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveHoveringInformation {
const probejs$$marker: never
}
export abstract class $IHaveHoveringInformation$$Static implements $IHaveHoveringInformation {
}
}

declare module "packages/com/simibubi/create/api/event/$PipeCollisionEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $PipeCollisionEvent extends $Event {
constructor()

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public "setState"(blockState0: $BlockState$$Type): void
get "level"(): $Level
get "pos"(): $BlockPos
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$OverlayState" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SignalBlockEntity$OverlayState extends $Enum<$SignalBlockEntity$OverlayState> {
static readonly "DUAL": $SignalBlockEntity$OverlayState
static readonly "RENDER": $SignalBlockEntity$OverlayState
static readonly "SKIP": $SignalBlockEntity$OverlayState

public static "valueOf"(string0: string): $SignalBlockEntity$OverlayState
public static "values"(): $SignalBlockEntity$OverlayState[]
}
}

declare module "packages/com/simibubi/create/foundation/collision/$Matrix3d" {
import { $Matrix4f } from "packages/org/joml/$Matrix4f"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $Matrix3d {
constructor()

public "add"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "asIdentity"(): $Matrix3d
public "asXRotation"(float0: float): $Matrix3d
public "asYRotation"(float0: float): $Matrix3d
public "asZRotation"(float0: float): $Matrix3d
public "copy"(): $Matrix3d
/** Client only, do not use in server scripts */
public "getAsMatrix4f"(): $Matrix4f
public "multiply"(matrix3d0: $Matrix3d$$Type): $Matrix3d
public "scale"(double0: double): $Matrix3d
public "transform"(vec30: $Vec3$$Type): $Vec3
public "transpose"(): $Matrix3d
get "asMatrix4f"(): $Matrix4f
}
}

declare module "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement$StackRequirement" {
import { $ItemRequirement$ItemUseType, $ItemRequirement$ItemUseType$$Type } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement$ItemUseType"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemRequirement$StackRequirement {
readonly "stack": $ItemStack
readonly "usage": $ItemRequirement$ItemUseType

constructor(itemStack0: $ItemStack$$Type, itemUseType1: $ItemRequirement$ItemUseType$$Type)

public "matches"(itemStack0: $ItemStack$$Type): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackModelHolder" {
import { $Record } from "packages/java/lang/$Record"
import { $PartialModel, $PartialModel$$Type } from "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel"

export class $TrackMaterial$TrackModelHolder extends $Record {
constructor(tie: $PartialModel$$Type, leftSegment: $PartialModel$$Type, rightSegment: $PartialModel$$Type)

public "leftSegment"(): $PartialModel
public "rightSegment"(): $PartialModel
public "tie"(): $PartialModel
}
}

declare module "packages/com/simibubi/create/content/logistics/packagePort/$PackagePortBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $PackagePortTarget, $PackagePortTarget$$Type } from "packages/com/simibubi/create/content/logistics/packagePort/$PackagePortTarget"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $SmartBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $SmartInventory, $SmartInventory$$Type } from "packages/com/simibubi/create/foundation/item/$SmartInventory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"

export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "drop"(itemStack0: $ItemStack$$Type): void
public "filterChanged"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getComparatorOutput"(): integer
public "getDisplayName"(): $Component
public "getFilterString"(): string
public "getModelData"(): $ModelData
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isBackedUp"(): boolean
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "use"(player0: $Player$$Type): $InteractionResult
get "acceptsPackages"(): boolean
set "acceptsPackages"(value: boolean)
get "addressFilter"(): string
set "addressFilter"(value: string)
get "inventory"(): $SmartInventory
set "inventory"(value: $SmartInventory$$Type)
get "target"(): $PackagePortTarget
set "target"(value: $PackagePortTarget$$Type)
get "comparatorOutput"(): integer
get "displayName"(): $Component
get "filterString"(): string
get "modelData"(): $ModelData
get "backedUp"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageSounds" {
import { $Carriage$DimensionalCarriageEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage$DimensionalCarriageEntity"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $CarriageSounds {
constructor(carriageContraptionEntity0: $CarriageContraptionEntity$$Type)

public "finalizeSharedVolume"(float0: float): void
public "stop"(): void
public "submitSharedSoundVolume"(vec30: $Vec3$$Type, float1: float): void
public "tick"(dimensionalCarriageEntity0: $Carriage$DimensionalCarriageEntity$$Type): void
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionVisual" {
import { $IUpdateCount, $IUpdateCount$$Type } from "packages/com/railwayteam/railways/mixin_interfaces/$IUpdateCount"
import { $ContraptionVisual } from "packages/com/simibubi/create/content/contraptions/render/$ContraptionVisual"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import { $DynamicVisual$Context$$Type } from "packages/dev/engine_room/flywheel/api/visual/$DynamicVisual$Context"
import { $CarriageContraptionEntity, $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $CarriageContraptionVisual extends $ContraptionVisual<$CarriageContraptionEntity> implements $IUpdateCount {
static readonly "MAX_NUM_BOGEYS": integer

constructor(visualizationContext0: $VisualizationContext$$Type, carriageContraptionEntity1: $CarriageContraptionEntity$$Type, float2: float)

public "_delete"(): void
public "beginFrame"(context0: $DynamicVisual$Context$$Type): void
public "delete"(): void
public static "outOfSync"(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
public "railways$fromParent"(parent: $IUpdateCount$$Type): void
public "railways$getUpdateCount"(): integer
public "railways$markUpdate"(): void
public "update"(float0: float): void
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$ConcretePowderBlockAccessor" {
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $ConcretePowderBlockAccessor {
"create$getConcrete"(): $BlockState
}

export namespace $ConcretePowderBlockAccessor {
const probejs$$marker: never
}
export abstract class $ConcretePowderBlockAccessor$$Static implements $ConcretePowderBlockAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlockEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $BogeyStyle, $BogeyStyle$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $CachedRenderBBBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$CachedRenderBBBlockEntity"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $AbstractBogeyBlockEntity extends $CachedRenderBBBlockEntity {
static readonly "BOGEY_DATA_KEY": string
static readonly "BOGEY_STYLE_KEY": string

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "animate"(float0: float): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBogeyData"(): $CompoundTag
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDefaultStyle"(): $BogeyStyle
public "getModelData"(): $ModelData
public "getStyle"(): $BogeyStyle
public "getVirtualAngle"(float0: float): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setBogeyData"(compoundTag0: $CompoundTag$$Type): void
public "setBogeyStyle"(bogeyStyle0: $BogeyStyle$$Type): void
get "bogeyData"(): $CompoundTag
get "defaultStyle"(): $BogeyStyle
get "modelData"(): $ModelData
get "style"(): $BogeyStyle
set "bogeyData"(value: $CompoundTag$$Type)
set "bogeyStyle"(value: $BogeyStyle$$Type)
}
}

declare module "packages/com/simibubi/create/foundation/networking/$BlockEntityConfigurationPacket" {
import { $NetworkEvent$Context$$Type } from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $SyncedBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import { $SimplePacketBase } from "packages/com/simibubi/create/foundation/networking/$SimplePacketBase"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockEntityConfigurationPacket<BE extends $SyncedBlockEntity> extends $SimplePacketBase {
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(blockPos0: $BlockPos$$Type)

public "handler$zeb000$onHandle"(context0: $NetworkEvent$Context$$Type, callbackInfo1: $CallbackInfo$$Type): void
}
}

declare module "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ItemRequirement$ItemUseType$$Type } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement$ItemUseType"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ItemRequirement$StackRequirement, $ItemRequirement$StackRequirement$$Type } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement$StackRequirement"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ItemRequirement {
static readonly "INVALID": $ItemRequirement
static readonly "NONE": $ItemRequirement

constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, list1: $List$$Type<$ItemStack$$Type>)
constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, item1: $Item$$Type)
constructor(itemUseType0: $ItemRequirement$ItemUseType$$Type, itemStack1: $ItemStack$$Type)
constructor(stackRequirement0: $ItemRequirement$StackRequirement$$Type)
constructor(list0: $List$$Type<$ItemRequirement$StackRequirement$$Type>)

public "getRequiredItems"(): $List<$ItemRequirement$StackRequirement>
public "isEmpty"(): boolean
public "isInvalid"(): boolean
public static "of"(entity0: $Entity$$Type): $ItemRequirement
public static "of"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "union"(itemRequirement0: $ItemRequirement$$Type): $ItemRequirement
get "requiredItems"(): $List<$ItemRequirement$StackRequirement>
get "empty"(): boolean
get "invalid"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/$IMergeableBE" {
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $IMergeableBE {
"accept"(blockEntity0: $BlockEntity$$Type): void
}

export namespace $IMergeableBE {
const probejs$$marker: never
}
export abstract class $IMergeableBE$$Static implements $IMergeableBE {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$BezierConnection$SegmentAngles" {
import { $PoseStack$Pose } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"

export class $BezierConnection$SegmentAngles {
readonly "length": integer
readonly "lightPosition": $BlockPos[]
readonly "railTransforms": $Couple<$PoseStack$Pose>[]
readonly "tieTransform": $PoseStack$Pose[]

}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$IEdgePointListener" {
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>> {
"and"(biPredicate0: $BiPredicate$$Type<double, $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>>): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"negate"(): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"or"(biPredicate0: $BiPredicate$$Type<double, $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>>): $BiPredicate<double, $Pair<$TrackEdgePoint, $Couple<$TrackNode>>>
"test"(double0: double, pair1: $Pair$$Type<$TrackEdgePoint$$Type, $Couple$$Type<$TrackNode$$Type>>): boolean
}

export namespace $TravellingPoint$IEdgePointListener {
const probejs$$marker: never
}
export abstract class $TravellingPoint$IEdgePointListener$$Static implements $TravellingPoint$IEdgePointListener {
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$IScheduleInput" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $List } from "packages/java/util/$List"
import { $ModularGuiLineBuilder$$Type } from "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IScheduleInput {
"getData"(): $CompoundTag
"getId"(): $ResourceLocation
"getItem"(int0: integer): $ItemStack
"getSecondLineIcon"(): $ItemStack
"getSecondLineTooltip"(int0: integer): $List<$Component>
"getSummary"(): $Pair<$ItemStack, $Component>
"getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
"initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
"renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
"setData"(compoundTag0: $CompoundTag$$Type): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"slotsTargeted"(): integer
get "data"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
set "data"(value: $CompoundTag$$Type)
}

export namespace $IScheduleInput {
const probejs$$marker: never
}
export abstract class $IScheduleInput$$Static implements $IScheduleInput {
}
}

declare module "packages/com/simibubi/create/content/contraptions/$MountedStorageSyncPacket" {
import { $MountedFluidStorage, $MountedFluidStorage$$Type } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorage"
import { $MountedItemStorage, $MountedItemStorage$$Type } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $SimplePacketBase } from "packages/com/simibubi/create/foundation/networking/$SimplePacketBase"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $MountedStorageSyncPacket extends $SimplePacketBase {
readonly "contraptionId": integer
readonly "fluids": $Map<$BlockPos, $MountedFluidStorage>
readonly "items": $Map<$BlockPos, $MountedItemStorage>

constructor(int0: integer, map1: $Map$$Type<$BlockPos$$Type, $MountedItemStorage$$Type>, map2: $Map$$Type<$BlockPos$$Type, $MountedFluidStorage$$Type>)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)

}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$NbtAccounterAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NbtAccounterAccessor {
"create$getUsage"(): long
}

export namespace $NbtAccounterAccessor {
const probejs$$marker: never
}
export abstract class $NbtAccounterAccessor$$Static implements $NbtAccounterAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TrainStatus$StatusMessage" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export class $TrainStatus$StatusMessage extends $Record {
constructor(...messages: $Component$$Type[])

public "displayToPlayer"(player0: $Player$$Type): void
public "messages"(): $Component[]
}
}

declare module "packages/com/simibubi/create/content/kinetics/deployer/$DeployerRecipeSearchEvent" {
import { $RecipeWrapper, $RecipeWrapper$$Type } from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $DeployerBlockEntity, $DeployerBlockEntity$$Type } from "packages/com/simibubi/create/content/kinetics/deployer/$DeployerBlockEntity"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DeployerRecipeSearchEvent extends $Event {
constructor()
constructor(deployerBlockEntity0: $DeployerBlockEntity$$Type, recipeWrapper1: $RecipeWrapper$$Type)

public "addRecipe"(supplier0: $Supplier$$Type<$Optional<$Recipe<$Container>>>, int1: integer): void
public "getBlockEntity"(): $DeployerBlockEntity
public "getInventory"(): $RecipeWrapper
public "getRecipe"(): $Recipe<$Container>
public "shouldAddRecipeWithPriority"(int0: integer): boolean
get "blockEntity"(): $DeployerBlockEntity
get "inventory"(): $RecipeWrapper
get "recipe"(): $Recipe<$Container>
}
}

declare module "packages/com/simibubi/create/foundation/gui/widget/$TooltipArea" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $List$$Type } from "packages/java/util/$List"
import { $AbstractSimiWidget } from "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TooltipArea extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_87963_"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "setPosition"(int0: integer, int1: integer): void
public "withTooltip"(list0: $List$$Type<$Component$$Type>): $TooltipArea
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/com/simibubi/create/content/contraptions/$OrientedContraptionEntity" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $AbstractContraptionEntity } from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $AccessorOrientedContraptionEntity } from "packages/com/railwayteam/railways/mixin/$AccessorOrientedContraptionEntity"
import { $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $ContraptionRelocationPacket$$Type } from "packages/com/simibubi/create/content/contraptions/$ContraptionRelocationPacket"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $MinecartController } from "packages/com/simibubi/create/content/contraptions/minecart/capability/$MinecartController"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $OrientedContraptionEntity extends $AbstractContraptionEntity implements $AccessorOrientedContraptionEntity {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "create"(level0: $Level$$Type, contraption1: $Contraption$$Type, direction2: $Direction$$Type): $OrientedContraptionEntity
public static "createAtYaw"(level0: $Level$$Type, contraption1: $Contraption$$Type, direction2: $Direction$$Type, float3: float): $OrientedContraptionEntity
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getCoupledCartsIfPresent"(): $Couple<$MinecartController>
public "getCouplingId"(): $UUID
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getInitialOrientation"(): $Direction
public "getInitialYaw"(): float
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
/** Client only, do not use in server scripts */
public static "handleRelocationPacket"(contraptionRelocationPacket0: $ContraptionRelocationPacket$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInitialOrientationPresent"(): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setCouplingId"(uUID0: $UUID$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setInitialOrientation"(direction0: $Direction$$Type): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "startAtInitialYaw"(): void
public "startAtYaw"(float0: float): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
get "nonDamageTicks"(): integer
set "nonDamageTicks"(value: integer)
get "pitch"(): float
set "pitch"(value: float)
get "prevPitch"(): float
set "prevPitch"(value: float)
get "prevYaw"(): float
set "prevYaw"(value: float)
get "targetYaw"(): float
set "targetYaw"(value: float)
get "yaw"(): float
set "yaw"(value: float)
get "block"(): $BlockContainerJS
get "coupledCartsIfPresent"(): $Couple<$MinecartController>
get "couplingId"(): $UUID
get "displayName"(): $Component
get "facing"(): $Direction
get "initialOrientation"(): $Direction
get "initialYaw"(): float
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "initialOrientationPresent"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "couplingId"(value: $UUID$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "initialOrientation"(value: $Direction$$Type)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $AccessorCarriageContraptionEntity } from "packages/com/railwayteam/railways/mixin/$AccessorCarriageContraptionEntity"
import { $CarriageContraption$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraption"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $IUpdateCount, $IUpdateCount$$Type } from "packages/com/railwayteam/railways/mixin_interfaces/$IUpdateCount"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Carriage, $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $CarriageParticles, $CarriageParticles$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageParticles"
import { $CarriageSounds, $CarriageSounds$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageSounds"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $IDistanceTravelled } from "packages/com/railwayteam/railways/mixin_interfaces/$IDistanceTravelled"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $CarriageSyncData } from "packages/com/simibubi/create/content/trains/entity/$CarriageSyncData"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $OrientedContraptionEntity } from "packages/com/simibubi/create/content/contraptions/$OrientedContraptionEntity"

export class $CarriageContraptionEntity extends $OrientedContraptionEntity implements $AccessorCarriageContraptionEntity, $IDistanceTravelled, $IUpdateCount {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "checkConductors"(): $Couple<boolean>
public static "create"(level0: $Level$$Type, carriageContraption1: $CarriageContraption$$Type): $CarriageContraptionEntity
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCarriage"(): $Carriage
public "getCarriageData"(): $CarriageSyncData
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasSchedule"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isLiving"(): boolean
public "isLocalCoordWithin"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public static "outOfSync"(a: $IUpdateCount$$Type, b: $IUpdateCount$$Type): boolean
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "railways$fromParent"(parent: $IUpdateCount$$Type): void
public "railways$getDistanceTravelled"(): double
public "railways$getUpdateCount"(): integer
public "railways$markUpdate"(): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setCarriage"(carriage0: $Carriage$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setServerSidePrevPosition"(): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "syncCarriage"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
/** Client only, do not use in server scripts */
public "updateRenderedPortalCutoff"(): void
get "carriageIndex"(): integer
set "carriageIndex"(value: integer)
get "firstPositionUpdate"(): boolean
set "firstPositionUpdate"(value: boolean)
get "leftTickingChunks"(): boolean
set "leftTickingChunks"(value: boolean)
get "movingBackwards"(): boolean
set "movingBackwards"(value: boolean)
/** Client only, do not use in server scripts */
get "particles"(): $CarriageParticles
/** Client only, do not use in server scripts */
set "particles"(value: $CarriageParticles$$Type)
/** Client only, do not use in server scripts */
get "sounds"(): $CarriageSounds
/** Client only, do not use in server scripts */
set "sounds"(value: $CarriageSounds$$Type)
get "trainId"(): $UUID
set "trainId"(value: $UUID$$Type)
get "validForRender"(): boolean
set "validForRender"(value: boolean)
get "block"(): $BlockContainerJS
get "carriage"(): $Carriage
get "carriageData"(): $CarriageSyncData
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "carriage"(value: $Carriage$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorageWrapper" {
import { $MountedItemStorage, $MountedItemStorage$$Type } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage"
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"
import { $CombinedInvWrapper } from "packages/net/minecraftforge/items/wrapper/$CombinedInvWrapper"

export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
readonly "storages": $ImmutableMap<$BlockPos, $MountedItemStorage>

constructor(immutableMap0: $ImmutableMap$$Type<$BlockPos$$Type, $MountedItemStorage$$Type>)

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/gui/widget/$SelectionScrollInput" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $List$$Type } from "packages/java/util/$List"
import { $ScrollInput } from "packages/com/simibubi/create/foundation/gui/widget/$ScrollInput"

export class $SelectionScrollInput extends $ScrollInput {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "forOptions"(list0: $List$$Type<$Component$$Type>): $ScrollInput
public "getCurrentFocusPath"(): $ComponentPath
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "setPosition"(int0: integer, int1: integer): void
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $PacketDistributor$PacketTarget } from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import { $ClientboundBlockEntityDataPacket } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $LevelChunk } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $HolderGetter } from "packages/net/minecraft/core/$HolderGetter"

export class $SyncedBlockEntity extends $BlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "blockHolderGetter"(): $HolderGetter<$Block>
public "containedChunk"(): $LevelChunk
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "notifyUpdate"(): void
public "onLoad"(): void
public "packetTarget"(): $PacketDistributor$PacketTarget
public "readClient"(compoundTag0: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sendData"(): void
public "writeClient"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TrainIconType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Map } from "packages/java/util/$Map"

export class $TrainIconType {
static readonly "ENGINE": integer
static readonly "FLIPPED_ENGINE": integer
static "REGISTRY": $Map<$ResourceLocation, $TrainIconType>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer)

public static "byId"(resourceLocation0: $ResourceLocation$$Type): $TrainIconType
public static "getDefault"(): $TrainIconType
public "getIconOffset"(int0: integer): integer
public "getIconWidth"(int0: integer): integer
public "getId"(): $ResourceLocation
public static "register"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer): void
/** Client only, do not use in server scripts */
public "render"(int0: integer, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer): integer
get "id"(): $ResourceLocation
}
}

declare module "packages/com/simibubi/create/content/trains/track/$BezierConnection$GirderAngles" {
import { $PoseStack$Pose } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"

export class $BezierConnection$GirderAngles {
readonly "beamCaps": $Couple<$Couple<$PoseStack$Pose>>[]
readonly "beams": $Couple<$PoseStack$Pose>[]
readonly "length": integer
readonly "lightPosition": $BlockPos[]

}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$AgeableListModelAccessor" {
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $AgeableListModelAccessor {
"create$callBodyParts"(): $Iterable<$ModelPart>
"create$callHeadParts"(): $Iterable<$ModelPart>
}

export namespace $AgeableListModelAccessor {
const probejs$$marker: never
}
export abstract class $AgeableListModelAccessor$$Static implements $AgeableListModelAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$Navigation" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $AccessorNavigation } from "packages/com/railwayteam/railways/mixin/$AccessorNavigation"
import { $DiscoveredPath, $DiscoveredPath$$Type } from "packages/com/simibubi/create/content/trains/graph/$DiscoveredPath"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Navigation$StationTest$$Type } from "packages/com/simibubi/create/content/trains/entity/$Navigation$StationTest"
import { $IBufferBlockCheckableNavigation } from "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockCheckableNavigation"
import { $GlobalStation, $GlobalStation$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $IGenerallySearchableNavigation } from "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation"
import { $TravellingPoint$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint"
import { $IGenerallySearchableNavigation$PointTest$$Type } from "packages/com/railwayteam/railways/mixin_interfaces/$IGenerallySearchableNavigation$PointTest"
import { $IWaypointableNavigation } from "packages/com/railwayteam/railways/mixin_interfaces/$IWaypointableNavigation"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $TravellingPoint$ITrackSelector } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$ITrackSelector"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"

export class $Navigation implements $AccessorNavigation, $IGenerallySearchableNavigation, $IBufferBlockCheckableNavigation, $IWaypointableNavigation {
constructor(train0: $Train$$Type)

public "cancelNavigation"(): void
public "control"(travellingPoint0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "controlSignalScout"(): $TravellingPoint$ITrackSelector
public "findNearestApproachable"(boolean0: boolean): $GlobalStation
public "findPathTo"(globalStation0: $GlobalStation$$Type, double1: double): $DiscoveredPath
public "findPathTo"(arrayList0: $ArrayList$$Type<$GlobalStation$$Type>, double1: double): $DiscoveredPath
public "isActive"(): boolean
public "railways$findNearestApproachableSwitch"(forward: boolean): $Pair<any, any>
public "railways$isWaypointMode"(): boolean
public "railways$searchGeneral"(maxDistance: double, forward: boolean, pointTest: $IGenerallySearchableNavigation$PointTest$$Type): void
public "railways$searchGeneral"(maxDistance: double, maxCost: double, forward: boolean, pointTest: $IGenerallySearchableNavigation$PointTest$$Type): void
public "railways$updateControlsBlock"(forceBackwards: boolean): void
public "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): void
public "search"(double0: double, boolean1: boolean, arrayList2: $ArrayList$$Type<$GlobalStation$$Type>, stationTest3: $Navigation$StationTest$$Type): void
public "search"(double0: double, double1: double, boolean2: boolean, arrayList3: $ArrayList$$Type<$GlobalStation$$Type>, stationTest4: $Navigation$StationTest$$Type): void
public "startNavigation"(discoveredPath0: $DiscoveredPath$$Type): double
public "tick"(level0: $Level$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "announceArrival"(): boolean
set "announceArrival"(value: boolean)
get "destination"(): $GlobalStation
set "destination"(value: $GlobalStation$$Type)
get "destinationBehindTrain"(): boolean
set "destinationBehindTrain"(value: boolean)
get "distanceStartedAt"(): double
set "distanceStartedAt"(value: double)
get "distanceToDestination"(): double
set "distanceToDestination"(value: double)
get "distanceToSignal"(): double
set "distanceToSignal"(value: double)
get "ticksWaitingForSignal"(): integer
set "ticksWaitingForSignal"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
get "waitingForSignal"(): $Pair<$UUID, boolean>
set "waitingForSignal"(value: $Pair$$Type<$UUID$$Type, boolean>)
get "active"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $SmartBlockEntity, $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BehaviourType, $BehaviourType$$Type } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $BlockEntityBehaviour {
constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "destroy"(): void
public static "get"<T extends $BlockEntityBehaviour>(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, behaviourType2: $BehaviourType$$Type<T>): T
public static "get"<T extends $BlockEntityBehaviour>(blockEntity0: $BlockEntity$$Type, behaviourType1: $BehaviourType$$Type<T>): T
public "getPos"(): $BlockPos
public "getRequiredItems"(): $ItemRequirement
public "getType"(): $BehaviourType<any>
public "getWorld"(): $Level
public "initialize"(): void
public "isSafeNBT"(): boolean
public "lazyTick"(): void
public "onBlockChanged"(blockState0: $BlockState$$Type): void
public "onNeighborChanged"(blockPos0: $BlockPos$$Type): void
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "setLazyTickRate"(int0: integer): void
public "tick"(): void
public "unload"(): void
public "write"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "writeSafe"(compoundTag0: $CompoundTag$$Type): void
get "blockEntity"(): $SmartBlockEntity
set "blockEntity"(value: $SmartBlockEntity$$Type)
get "pos"(): $BlockPos
get "requiredItems"(): $ItemRequirement
get "type"(): $BehaviourType<any>
get "world"(): $Level
get "safeNBT"(): boolean
set "lazyTickRate"(value: integer)
}
}

declare module "packages/com/simibubi/create/content/trains/track/$BezierConnection" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $BezierConnection$SegmentAngles } from "packages/com/simibubi/create/content/trains/track/$BezierConnection$SegmentAngles"
import { $IHasTrackCasing } from "packages/com/railwayteam/railways/mixin_interfaces/$IHasTrackCasing"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TrackMaterial, $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BezierConnection$Segment, $BezierConnection$Segment$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection$Segment"
import { $BezierConnection$GirderAngles } from "packages/com/simibubi/create/content/trains/track/$BezierConnection$GirderAngles"
import { $SlabBlock, $SlabBlock$$Type } from "packages/net/minecraft/world/level/block/$SlabBlock"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterator } from "packages/java/util/$Iterator"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $Map } from "packages/java/util/$Map"

export class $BezierConnection implements $Iterable<$BezierConnection$Segment>, $IHasTrackCasing {
readonly "axes": $Couple<$Vec3>
readonly "bePositions": $Couple<$BlockPos>
readonly "hasGirder": boolean
readonly "normals": $Couple<$Vec3>
readonly "primary": boolean
readonly "starts": $Couple<$Vec3>

constructor(couple0: $Couple$$Type<$BlockPos$$Type>, couple1: $Couple$$Type<$Vec3$$Type>, couple2: $Couple$$Type<$Vec3$$Type>, couple3: $Couple$$Type<$Vec3$$Type>, boolean4: boolean, boolean5: boolean, trackMaterial6: $TrackMaterial$$Type)
constructor(friendlyByteBuf0: $FriendlyByteBuf$$Type)
constructor(compoundTag0: $CompoundTag$$Type, blockPos1: $BlockPos$$Type)

public "addItemsToPlayer"(player0: $Player$$Type): void
public "equalsSansMaterial"(bezierConnection0: $BezierConnection$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$BezierConnection$Segment$$Type>): void
public "getBakedGirders"(): $BezierConnection$GirderAngles
public "getBakedSegments"(): $BezierConnection$SegmentAngles
public "getBounds"(): $AABB
public "getGirderItemCost"(): integer
public "getHandleLength"(): double
public "getKey"(): $BlockPos
public "getLength"(): double
public "getMaterial"(): $TrackMaterial
public "getNormal"(double0: double): $Vec3
public "getPosition"(double0: double): $Vec3
public "getRadius"(): double
public "getSegmentCount"(): integer
public "getSegmentT"(int0: integer): float
public "getStepLUT"(): float[]
public "getTrackCasing"(): $SlabBlock
public static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $SlabBlock
public "getTrackItemCost"(): integer
public "incrementT"(double0: double, double1: double): double
public "isAlternate"(): boolean
public static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
public "isPrimary"(): boolean
public "iterator"(): $Iterator<$BezierConnection$Segment>
public "rasterise"(): $Map<$Pair<integer, integer>, double>
public "secondary"(): $BezierConnection
public "setAlternate"(alternate: boolean): void
public static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
public "setMaterial"(trackMaterial0: $TrackMaterial$$Type): void
public "setTrackCasing"(trackCasing: $SlabBlock$$Type): void
public static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $SlabBlock$$Type): void
public "spawnDestroyParticles"(level0: $Level$$Type): void
public "spawnItems"(level0: $Level$$Type): void
public "spliterator"(): $Spliterator<$BezierConnection$Segment>
public "write"(blockPos0: $BlockPos$$Type): $CompoundTag
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "yOffsetAt"(vec30: $Vec3$$Type): integer
[Symbol.iterator](): IterableIterator<$BezierConnection$Segment>;
get "smoothing"(): $Couple<integer>
set "smoothing"(value: $Couple$$Type<integer>)
get "bakedGirders"(): $BezierConnection$GirderAngles
get "bakedSegments"(): $BezierConnection$SegmentAngles
get "bounds"(): $AABB
get "girderItemCost"(): integer
get "handleLength"(): double
get "key"(): $BlockPos
get "length"(): double
get "material"(): $TrackMaterial
get "radius"(): double
get "segmentCount"(): integer
get "stepLUT"(): float[]
get "trackCasing"(): $SlabBlock
get "trackItemCost"(): integer
get "alternate"(): boolean
set "alternate"(value: boolean)
set "material"(value: $TrackMaterial$$Type)
set "trackCasing"(value: $SlabBlock$$Type)
}
}

declare module "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement$ItemUseType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ItemRequirement$ItemUseType extends $Enum<$ItemRequirement$ItemUseType> {
static readonly "CONSUME": $ItemRequirement$ItemUseType
static readonly "DAMAGE": $ItemRequirement$ItemUseType

public static "valueOf"(string0: string): $ItemRequirement$ItemUseType
public static "values"(): $ItemRequirement$ItemUseType[]
}
}

declare module "packages/com/simibubi/create/api/event/$TrackGraphMergeEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $TrackGraph, $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"

export class $TrackGraphMergeEvent extends $Event {
constructor()
constructor(trackGraph0: $TrackGraph$$Type, trackGraph1: $TrackGraph$$Type)

public "getGraphMergedFrom"(): $TrackGraph
public "getGraphMergedInto"(): $TrackGraph
get "graphMergedFrom"(): $TrackGraph
get "graphMergedInto"(): $TrackGraph
}
}

declare module "packages/com/simibubi/create/content/logistics/packagePort/$PackagePortTarget" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PackagePortBlockEntity$$Type } from "packages/com/simibubi/create/content/logistics/packagePort/$PackagePortBlockEntity"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PackagePortTarget {
constructor(string0: string, blockPos1: $BlockPos$$Type)

public "be"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type): $BlockEntity
public "canSupport"(blockEntity0: $BlockEntity$$Type): boolean
public "depositImmediately"(): boolean
public "deregister"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "export"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, boolean3: boolean): boolean
public "getExactTargetLocation"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): $Vec3
public "getIcon"(): $ItemStack
public static "read"(compoundTag0: $CompoundTag$$Type): $PackagePortTarget
public "register"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "setup"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type): void
public "write"(): $CompoundTag
get "relativePos"(): $BlockPos
set "relativePos"(value: $BlockPos$$Type)
get "icon"(): $ItemStack
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackGraphLocation" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $TrackGraph, $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $TrackGraphLocation {
constructor()

get "edge"(): $Couple<$TrackNodeLocation>
set "edge"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "graph"(): $TrackGraph
set "graph"(value: $TrackGraph$$Type)
get "position"(): double
set "position"(value: double)
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$Navigation$StationTest" {
import { $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $GlobalStation$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $Navigation$StationTest {
"test"(double0: double, double1: double, map2: $Map$$Type<$TrackEdge$$Type, $Pair$$Type<boolean, $Couple$$Type<$TrackNode$$Type>>>, pair3: $Pair$$Type<$Couple$$Type<$TrackNode$$Type>, $TrackEdge$$Type>, globalStation4: $GlobalStation$$Type): boolean
}

export namespace $Navigation$StationTest {
const probejs$$marker: never
}
export abstract class $Navigation$StationTest$$Static implements $Navigation$StationTest {
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeyVisualizer" {
import { $BogeyVisual } from "packages/com/simibubi/create/content/trains/bogey/$BogeyVisual"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"

export interface $BogeyVisualizer {
"createVisual"(visualizationContext0: $VisualizationContext$$Type, float1: float, boolean2: boolean): $BogeyVisual
}

export namespace $BogeyVisualizer {
const probejs$$marker: never
}
export abstract class $BogeyVisualizer$$Static implements $BogeyVisualizer {
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$LivingEntityAccessor" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $LivingEntityAccessor {
"create$callSpawnItemParticles"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$ScheduleRuntime$State" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ScheduleRuntime$State extends $Enum<$ScheduleRuntime$State> {
static readonly "IN_TRANSIT": $ScheduleRuntime$State
static readonly "POST_TRANSIT": $ScheduleRuntime$State
static readonly "PRE_TRANSIT": $ScheduleRuntime$State

public static "valueOf"(string0: string): $ScheduleRuntime$State
public static "values"(): $ScheduleRuntime$State[]
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$IPortalListener" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
"and"(predicate0: $Predicate$$Type<$Couple$$Type<$TrackNodeLocation$$Type>>): $Predicate<$Couple<$TrackNodeLocation>>
"negate"(): $Predicate<$Couple<$TrackNodeLocation>>
"or"(predicate0: $Predicate$$Type<$Couple$$Type<$TrackNodeLocation$$Type>>): $Predicate<$Couple<$TrackNodeLocation>>
"test"(couple0: $Couple$$Type<$TrackNodeLocation$$Type>): boolean
}

export namespace $TravellingPoint$IPortalListener {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $TravellingPoint$IPortalListener$$Static implements $TravellingPoint$IPortalListener {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$FlowingFluidAccessor" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"

export interface $FlowingFluidAccessor {
"create$getNewLiquid"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $FluidState
}

export namespace $FlowingFluidAccessor {
const probejs$$marker: never
}
export abstract class $FlowingFluidAccessor$$Static implements $FlowingFluidAccessor {
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $FanProcessingType, $FanProcessingType$$Type } from "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $TransportedItemStack implements $Comparable<$TransportedItemStack> {
constructor(itemStack0: $ItemStack$$Type)

public "clearFanProcessingData"(): void
public "compareTo"(transportedItemStack0: $TransportedItemStack$$Type): integer
public "copy"(): $TransportedItemStack
public "getSimilar"(): $TransportedItemStack
public "getTargetSideOffset"(): float
public static "read"(compoundTag0: $CompoundTag$$Type): $TransportedItemStack
public "serializeNBT"(): $CompoundTag
get "angle"(): integer
set "angle"(value: integer)
get "beltPosition"(): float
set "beltPosition"(value: float)
get "insertedAt"(): integer
set "insertedAt"(value: integer)
get "insertedFrom"(): $Direction
set "insertedFrom"(value: $Direction$$Type)
get "locked"(): boolean
set "locked"(value: boolean)
get "lockedExternally"(): boolean
set "lockedExternally"(value: boolean)
get "prevBeltPosition"(): float
set "prevBeltPosition"(value: float)
get "prevSideOffset"(): float
set "prevSideOffset"(value: float)
get "processedBy"(): $FanProcessingType
set "processedBy"(value: $FanProcessingType$$Type)
get "processingTime"(): integer
set "processingTime"(value: integer)
get "sideOffset"(): float
set "sideOffset"(value: float)
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
get "similar"(): $TransportedItemStack
get "targetSideOffset"(): float
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/destination/$ScheduleInstruction" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $DiscoveredPath } from "packages/com/simibubi/create/content/trains/graph/$DiscoveredPath"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ScheduleDataEntry } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleDataEntry"
import { $ScheduleRuntime$$Type } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleRuntime"
import { $List } from "packages/java/util/$List"
import { $ModularGuiLineBuilder$$Type } from "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder"

export class $ScheduleInstruction extends $ScheduleDataEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleInstruction
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
public "start"(scheduleRuntime0: $ScheduleRuntime$$Type, level1: $Level$$Type): $DiscoveredPath
public "supportsConditions"(): boolean
public "write"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
}
}

declare module "packages/com/simibubi/create/api/equipment/goggles/$IHaveGoggleInformation" {
import { $IFluidHandler$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $LazyOptional$$Type } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IHaveCustomOverlayIcon } from "packages/com/simibubi/create/api/equipment/goggles/$IHaveCustomOverlayIcon"

export interface $IHaveGoggleInformation extends $IHaveCustomOverlayIcon {
"addToGoggleTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
"containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveGoggleInformation {
const probejs$$marker: never
}
export abstract class $IHaveGoggleInformation$$Static implements $IHaveGoggleInformation {
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageType" {
import { $BlockBuilder } from "packages/com/tterrag/registrate/builders/$BlockBuilder"
import { $SimpleRegistry } from "packages/com/simibubi/create/api/registry/$SimpleRegistry"
import { $MountedFluidStorage } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorage"
import { $NonNullUnaryOperator } from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $RegistryEntry$$Type } from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MountedFluidStorageType<T extends $MountedFluidStorage> {
static readonly "CODEC": $Codec<$MountedFluidStorageType<any>>
static readonly "REGISTRY": $SimpleRegistry<$Block, $MountedFluidStorageType<any>>
readonly "codec": $Codec<T>

public "mount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): T
public static "mountedFluidStorage"<B extends $Block, P>(registryEntry0: $RegistryEntry$$Type<$MountedFluidStorageType$$Type<any>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackEdgeIntersection" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $TrackEdgeIntersection {
constructor()

public "isNear"(double0: double): boolean
public static "read"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackEdgeIntersection
public "targets"(trackNodeLocation0: $TrackNodeLocation$$Type, trackNodeLocation1: $TrackNodeLocation$$Type): boolean
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "groupId"(): $UUID
set "groupId"(value: $UUID$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "location"(): double
set "location"(value: double)
get "target"(): $Couple<$TrackNodeLocation>
set "target"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "targetLocation"(): double
set "targetLocation"(value: double)
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
static readonly "DUAL_SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "OBSERVER": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "SIGNAL": $TrackTargetingBehaviour$RenderedTrackOverlayType
static readonly "STATION": $TrackTargetingBehaviour$RenderedTrackOverlayType

public static "valueOf"(string0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType
public static "values"(): $TrackTargetingBehaviour$RenderedTrackOverlayType[]
}
}

declare module "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement" {
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $SpecialBlockItemRequirement {
"getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
}

export namespace $SpecialBlockItemRequirement {
const probejs$$marker: never
}
export abstract class $SpecialBlockItemRequirement$$Static implements $SpecialBlockItemRequirement {
}
}

declare module "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable" {
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IWrenchable {
"getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
"onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
}

export namespace $IWrenchable {
function playRemoveSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
function playRotateSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
export abstract class $IWrenchable$$Static implements $IWrenchable {
static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$Train" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ICrashAdvancement } from "packages/com/railwayteam/railways/mixin_interfaces/$ICrashAdvancement"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $TrainStatus, $TrainStatus$$Type } from "packages/com/simibubi/create/content/trains/entity/$TrainStatus"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $IStrictSignalTrain } from "packages/com/railwayteam/railways/mixin_interfaces/$IStrictSignalTrain"
import { $IHandcarTrain } from "packages/com/railwayteam/railways/mixin_interfaces/$IHandcarTrain"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $TravellingPoint$IEdgePointListener } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$IEdgePointListener"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IOccupiedCouplers } from "packages/com/railwayteam/railways/mixin_interfaces/$IOccupiedCouplers"
import { $Carriage, $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $IIndexedSchedule } from "packages/com/railwayteam/railways/mixin_interfaces/$IIndexedSchedule"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $GlobalStation, $GlobalStation$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TrackGraph, $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $TravellingPoint$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $TrainIconType, $TrainIconType$$Type } from "packages/com/simibubi/create/content/trains/entity/$TrainIconType"
import { $ScheduleRuntime, $ScheduleRuntime$$Type } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleRuntime"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $IBufferBlockedTrain } from "packages/com/railwayteam/railways/mixin_interfaces/$IBufferBlockedTrain"
import { $Navigation, $Navigation$$Type } from "packages/com/simibubi/create/content/trains/entity/$Navigation"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TravellingPoint$SteerDirection, $TravellingPoint$SteerDirection$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$SteerDirection"
import { $AccessorTrain } from "packages/com/railwayteam/railways/mixin/$AccessorTrain"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $Train implements $AccessorTrain, $IStrictSignalTrain, $IIndexedSchedule, $IBufferBlockedTrain, $ICrashAdvancement, $IHandcarTrain, $IOccupiedCouplers {
constructor(uUID0: $UUID$$Type, uUID1: $UUID$$Type, trackGraph2: $TrackGraph$$Type, list3: $List$$Type<$Carriage$$Type>, list4: $List$$Type<integer>, boolean5: boolean)

public "acceleration"(): float
public "approachTargetSpeed"(float0: float): void
public "arriveAt"(globalStation0: $GlobalStation$$Type): void
public "backSignalListener"(): $TravellingPoint$IEdgePointListener
public "burnFuel"(): void
public "canDisassemble"(): boolean
public "cancelStall"(): void
public "collectInitiallyOccupiedSignalBlocks"(): void
public "countPlayerPassengers"(): integer
public "crash"(): void
public "detachFromTracks"(): void
public "determineHonk"(level0: $Level$$Type): void
public "disassemble"(direction0: $Direction$$Type, blockPos1: $BlockPos$$Type): boolean
public "distanceToLocationSqr"(level0: $Level$$Type, vec31: $Vec3$$Type): float
public "earlyTick"(level0: $Level$$Type): void
public "findCollidingTrain"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, resourceKey3: $ResourceKey$$Type<$Level>): $Pair<$Train, $Vec3>
public "forEachTravellingPoint"(consumer0: $Consumer$$Type<$TravellingPoint$$Type>): void
public "forEachTravellingPointBackwards"(biConsumer0: $BiConsumer$$Type<$TravellingPoint$$Type, double>): void
public "frontSignalListener"(): $TravellingPoint$IEdgePointListener
public "getCurrentStation"(): $GlobalStation
public "getEndpointEdges"(): $Couple<$Couple<$TrackNode>>
public "getNavigationPenalty"(): integer
public "getOwner"(level0: $Level$$Type): $LivingEntity
public "getPositionInDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $Optional<$BlockPos>
public "getPresentDimensions"(): $List<$ResourceKey<$Level>>
public "getTotalLength"(): integer
public "handler$dja000$acceleration"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$dja000$maxSpeed"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$dja000$maxTurnSpeed"(cir: $CallbackInfoReturnable$$Type<any>): void
public "hasBackwardConductor"(): boolean
public "hasForwardConductor"(): boolean
public "isTravellingOn"(trackNode0: $TrackNode$$Type): boolean
public "leaveStation"(): void
public "maxSpeed"(): float
public "maxTurnSpeed"(): float
public "railways$awardCrashAdvancements"(): void
public "railways$getBlockedSign"(): integer
public "railways$getIndex"(): integer
public "railways$getOccupiedCouplers"(): $Set<any>
public "railways$isControlBlocked"(): boolean
public "railways$isHandcar"(): boolean
public "railways$setControlBlocked"(controlBlocked: boolean, forceBackwards: boolean): void
public "railways$setHandcar"(handcar: boolean): void
public "railways$setIndex"(index: integer): void
public "railways$setStrictSignals"(strictSignals: boolean): void
public static "read"(compoundTag0: $CompoundTag$$Type, map1: $Map$$Type<$UUID$$Type, $TrackGraph$$Type>, dimensionPalette2: $DimensionPalette$$Type): $Train
public "reattachToTracks"(level0: $Level$$Type): void
public "setCurrentStation"(globalStation0: $GlobalStation$$Type): void
public "shouldCarriageSyncThisTick"(long0: long, int1: integer): boolean
public "tick"(level0: $Level$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "accumulatedSteamRelease"(): float
set "accumulatedSteamRelease"(value: float)
get "backwardsDriver"(): $Player
set "backwardsDriver"(value: $Player$$Type)
get "cachedObserverFiltering"(): $Map<$UUID, $Pair<integer, boolean>>
set "cachedObserverFiltering"(value: $Map$$Type<$UUID$$Type, $Pair$$Type<integer, boolean>>)
get "carriageSpacing"(): $List<integer>
set "carriageSpacing"(value: $List$$Type<integer>)
get "carriageWaitingForChunks"(): integer
set "carriageWaitingForChunks"(value: integer)
get "carriages"(): $List<$Carriage>
set "carriages"(value: $List$$Type<$Carriage$$Type>)
get "currentStation"(): $UUID
set "currentStation"(value: $UUID$$Type)
get "currentlyBackwards"(): boolean
set "currentlyBackwards"(value: boolean)
get "derailed"(): boolean
set "derailed"(value: boolean)
get "doubleEnded"(): boolean
set "doubleEnded"(value: boolean)
get "fuelTicks"(): integer
set "fuelTicks"(value: integer)
get "graph"(): $TrackGraph
set "graph"(value: $TrackGraph$$Type)
get "honk"(): boolean
set "honk"(value: boolean)
get "honkPitch"(): integer
set "honkPitch"(value: integer)
get "honkTicks"(): integer
set "honkTicks"(value: integer)
get "icon"(): $TrainIconType
set "icon"(value: $TrainIconType$$Type)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "invalid"(): boolean
set "invalid"(value: boolean)
get "lowHonk"(): boolean
set "lowHonk"(value: boolean)
get "manualSteer"(): $TravellingPoint$SteerDirection
set "manualSteer"(value: $TravellingPoint$SteerDirection$$Type)
get "manualTick"(): boolean
set "manualTick"(value: boolean)
get "mapColorIndex"(): integer
set "mapColorIndex"(value: integer)
get "migrationCooldown"(): integer
set "migrationCooldown"(value: integer)
get "name"(): $Component
set "name"(value: $Component$$Type)
get "navigation"(): $Navigation
set "navigation"(value: $Navigation$$Type)
get "occupiedObservers"(): $Set<$UUID>
set "occupiedObservers"(value: $Set$$Type<$UUID$$Type>)
get "occupiedSignalBlocks"(): $Map<$UUID, $UUID>
set "occupiedSignalBlocks"(value: $Map$$Type<$UUID$$Type, $UUID$$Type>)
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "railways$occupiedCouplers"(): $Set<any>
set "railways$occupiedCouplers"(value: $Set$$Type<any>)
get "reservedSignalBlocks"(): $Set<$UUID>
set "reservedSignalBlocks"(value: $Set$$Type<$UUID$$Type>)
get "runtime"(): $ScheduleRuntime
set "runtime"(value: $ScheduleRuntime$$Type)
get "speed"(): double
set "speed"(value: double)
get "speedBeforeStall"(): double
set "speedBeforeStall"(value: double)
get "status"(): $TrainStatus
set "status"(value: $TrainStatus$$Type)
get "targetSpeed"(): double
set "targetSpeed"(value: double)
get "throttle"(): double
set "throttle"(value: double)
get "updateSignalBlocks"(): boolean
set "updateSignalBlocks"(value: boolean)
get "endpointEdges"(): $Couple<$Couple<$TrackNode>>
get "navigationPenalty"(): integer
get "presentDimensions"(): $List<$ResourceKey<$Level>>
get "totalLength"(): integer
}
}

declare module "packages/com/simibubi/create/content/trains/display/$GlobalTrainDisplayData$TrainDeparturePrediction" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $MutableComponent, $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $GlobalTrainDisplayData$TrainDeparturePrediction implements $Comparable<$GlobalTrainDisplayData$TrainDeparturePrediction> {
constructor(train0: $Train$$Type, int1: integer, mutableComponent2: $MutableComponent$$Type, string3: string)

public "compareTo"(trainDeparturePrediction0: $GlobalTrainDisplayData$TrainDeparturePrediction$$Type): integer
get "destination"(): string
set "destination"(value: string)
get "scheduleTitle"(): $MutableComponent
set "scheduleTitle"(value: $MutableComponent$$Type)
get "ticks"(): integer
set "ticks"(value: integer)
get "train"(): $Train
set "train"(value: $Train$$Type)
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BeltProcessingBehaviour$ProcessingCallback$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour$ProcessingCallback"
import { $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import { $TransportedItemStackHandlerBehaviour$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour"
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BehaviourType } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import { $BeltProcessingBehaviour$ProcessingResult } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour$ProcessingResult"

export class $BeltProcessingBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$BeltProcessingBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "handleHeldItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
public "handleReceivedItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
public static "isBlocked"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "whenItemEnters"(processingCallback0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
public "whileItemHeld"(processingCallback0: $BeltProcessingBehaviour$ProcessingCallback$$Type): $BeltProcessingBehaviour
}
}

declare module "packages/com/simibubi/create/content/trains/station/$StationBlockEntity" {
import { $BoundingBox } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $DoorControlBehaviour, $DoorControlBehaviour$$Type } from "packages/com/simibubi/create/content/decoration/slidingDoor/$DoorControlBehaviour"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $LerpedFloat, $LerpedFloat$$Type } from "packages/net/createmod/catnip/animation/$LerpedFloat"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $TrackTargetingBehaviour, $TrackTargetingBehaviour$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $SmartBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $AbstractComputerBehaviour, $AbstractComputerBehaviour$$Type } from "packages/com/simibubi/create/compat/computercraft/$AbstractComputerBehaviour"
import { $PackagePortBlockEntity$$Type } from "packages/com/simibubi/create/content/logistics/packagePort/$PackagePortBlockEntity"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ITrackBlock$$Type } from "packages/com/simibubi/create/content/trains/track/$ITrackBlock"
import { $TransformableBlockEntity } from "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlockEntity"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $GlobalStation, $GlobalStation$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $WorldAttached } from "packages/net/createmod/catnip/data/$WorldAttached"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Map } from "packages/java/util/$Map"

export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
static "assemblyAreas": $WorldAttached<$Map<$BlockPos, $BoundingBox>>

constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "assemble"(uUID0: $UUID$$Type): void
public "attachPackagePort"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type): void
public "cancelAssembly"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dropSchedule"(serverPlayer0: $ServerPlayer$$Type, train1: $Train$$Type): void
public "enterAssemblyMode"(serverPlayer0: $ServerPlayer$$Type): boolean
public "exitAssemblyMode"(): boolean
public "getAssemblyDirection"(): $Direction
public "getAutoSchedule"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getStation"(): $GlobalStation
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAssembling"(): boolean
public "isValidBogeyOffset"(int0: integer): boolean
public "onLoad"(): void
public "refreshAssemblyInfo"(): void
public "removePackagePort"(packagePortBlockEntity0: $PackagePortBlockEntity$$Type): void
public "requestModelDataUpdate"(): void
public "resolveFlagAngle"(): boolean
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "trackClicked"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, iTrackBlock2: $ITrackBlock$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): boolean
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
public "tryDisassembleTrain"(serverPlayer0: $ServerPlayer$$Type): boolean
public "tryEnterAssemblyMode"(): boolean
public "updateMapColor"(int0: integer): void
public "updateName"(string0: string): boolean
get "computerBehaviour"(): $AbstractComputerBehaviour
set "computerBehaviour"(value: $AbstractComputerBehaviour$$Type)
get "doorControls"(): $DoorControlBehaviour
set "doorControls"(value: $DoorControlBehaviour$$Type)
get "edgePoint"(): $TrackTargetingBehaviour<$GlobalStation>
set "edgePoint"(value: $TrackTargetingBehaviour$$Type<$GlobalStation$$Type>)
get "flag"(): $LerpedFloat
set "flag"(value: $LerpedFloat$$Type)
get "lastDisassembledMapColorIndex"(): integer
set "lastDisassembledMapColorIndex"(value: integer)
get "lastDisassembledTrainName"(): $Component
set "lastDisassembledTrainName"(value: $Component$$Type)
get "assemblyDirection"(): $Direction
get "autoSchedule"(): $ItemStack
get "modelData"(): $ModelData
get "station"(): $GlobalStation
get "assembling"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageSyncData" {
import { $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $Vector, $Vector$$Type } from "packages/java/util/$Vector"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $TravellingPoint$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $CarriageSyncData {
constructor()

public "apply"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type): void
public "approach"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type, float2: float): void
public "copy"(): $CarriageSyncData
public "getDistanceTo"(trackGraph0: $TrackGraph$$Type, travellingPoint1: $TravellingPoint$$Type, travellingPoint2: $TravellingPoint$$Type, float3: float, boolean4: boolean): float
public "isDirty"(): boolean
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setDirty"(boolean0: boolean): void
public "update"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, carriage1: $Carriage$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "distanceToDestination"(): float
set "distanceToDestination"(value: float)
get "fallbackLocations"(): $Pair<$Vec3, $Couple<$Vec3>>
set "fallbackLocations"(value: $Pair$$Type<$Vec3$$Type, $Couple$$Type<$Vec3$$Type>>)
get "leadingCarriage"(): boolean
set "leadingCarriage"(value: boolean)
get "wheelLocations"(): $Vector<$Pair<$Couple<integer>, float>>
set "wheelLocations"(value: $Vector$$Type<$Pair$$Type<$Couple$$Type<integer>, float>>)
get "dirty"(): boolean
set "dirty"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$EdgeData" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $EdgePointType$$Type } from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $List } from "packages/java/util/$List"
import { $ISwitchDisabledEdge } from "packages/com/railwayteam/railways/mixin_interfaces/$ISwitchDisabledEdge"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $TrackEdgeIntersection } from "packages/com/simibubi/create/content/trains/graph/$TrackEdgeIntersection"

export class $EdgeData implements $ISwitchDisabledEdge {
static readonly "passiveGroup": $UUID

constructor(trackEdge0: $TrackEdge$$Type)

public "ackAutomaticSelection"(): void
public "addIntersection"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type, double2: double, trackNode3: $TrackNode$$Type, trackNode4: $TrackNode$$Type, double5: double): void
public "addPoint"<T extends $TrackEdgePoint>(trackGraph0: $TrackGraph$$Type, trackEdgePoint1: $TrackEdgePoint$$Type): void
public static "automaticallySelect"(edge: $TrackEdge$$Type): void
public "get"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, double1: double): T
public "getAutomaticallySelectedPriority"(): integer
public "getEffectiveEdgeGroupId"(trackGraph0: $TrackGraph$$Type): $UUID
public "getGroupAtPosition"(trackGraph0: $TrackGraph$$Type, double1: double): $UUID
public "getIntersections"(): $List<$TrackEdgeIntersection>
public "getPoints"(): $List<$TrackEdgePoint>
public "getSingleSignalGroup"(): $UUID
public "hasIntersections"(): boolean
public "hasPoints"(): boolean
public "hasSignalBoundaries"(): boolean
public "isAutomatic"(): boolean
public static "isAutomatic"(edge: $TrackEdge$$Type): boolean
public "isAutomaticallySelected"(): boolean
public static "isDisabled"(edge: $TrackEdge$$Type): boolean
public "isEnabled"(): boolean
public static "isEnabled"(edge: $TrackEdge$$Type): boolean
public "next"(double0: double): $TrackEdgePoint
public "next"<T extends $TrackEdgePoint>(edgePointType0: $EdgePointType$$Type<T>, double1: double): T
public static "read"(compoundTag0: $CompoundTag$$Type, trackEdge1: $TrackEdge$$Type, trackGraph2: $TrackGraph$$Type, dimensionPalette3: $DimensionPalette$$Type): $EdgeData
public "refreshIntersectingSignalGroups"(trackGraph0: $TrackGraph$$Type): void
public "removeIntersection"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type): void
public "removePoint"(trackGraph0: $TrackGraph$$Type, trackEdgePoint1: $TrackEdgePoint$$Type): void
public "setAutomatic"(automatic: boolean): void
public "setAutomaticallySelected"(): void
public "setEnabled"(enabled: boolean): void
public "setSingleSignalGroup"(trackGraph0: $TrackGraph$$Type, uUID1: $UUID$$Type): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "automaticallySelectedPriority"(): integer
get "intersections"(): $List<$TrackEdgeIntersection>
get "points"(): $List<$TrackEdgePoint>
get "singleSignalGroup"(): $UUID
get "automatic"(): boolean
get "automaticallySelected"(): boolean
get "enabled"(): boolean
set "automatic"(value: boolean)
set "enabled"(value: boolean)
}
}

declare module "packages/com/simibubi/create/foundation/gui/$ModularGuiLine" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Renderable, $Renderable$$Type } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $NarratableEntry, $NarratableEntry$$Type } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ModularGuiLine {
constructor()

public "add"(pair0: $Pair$$Type<$AbstractWidget$$Type, string>): void
public "clear"(): void
public "forEach"(consumer0: $Consumer$$Type<$GuiEventListener$$Type>): void
public "loadValues"<T extends ($GuiEventListener & $Renderable & $NarratableEntry)>(compoundTag0: $CompoundTag$$Type, consumer1: $Consumer$$Type<T>, consumer2: $Consumer$$Type<T>): void
public "renderWidgetBG"(int0: integer, guiGraphics1: $GuiGraphics$$Type): void
public "saveValues"(compoundTag0: $CompoundTag$$Type): void
}
}

declare module "packages/com/simibubi/create/foundation/gui/widget/$ScrollInput" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Label$$Type } from "packages/com/simibubi/create/foundation/gui/widget/$Label"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $ScrollValueBehaviour$StepContext, $ScrollValueBehaviour$StepContext$$Type } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollValueBehaviour$StepContext"
import { $AbstractSimiWidget } from "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget"
import { $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ScrollInput extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "addHint"(mutableComponent0: $MutableComponent$$Type): $ScrollInput
public "calling"(consumer0: $Consumer$$Type<integer>): $ScrollInput
public "charTyped"(char0: character, int1: integer): boolean
public "format"(function0: $Function$$Type<integer, $Component>): $ScrollInput
public "getCurrentFocusPath"(): $ComponentPath
public "getState"(): integer
public "inverted"(): $ScrollInput
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "onChanged"(): void
public "removeCallback"(): $ScrollInput
public "setPosition"(int0: integer, int1: integer): void
public "setState"(int0: integer): $ScrollInput
public "standardStep"(): $Function<$ScrollValueBehaviour$StepContext, integer>
public "titled"(mutableComponent0: $MutableComponent$$Type): $ScrollInput
public "withRange"(int0: integer, int1: integer): $ScrollInput
public "withShiftStep"(int0: integer): $ScrollInput
public "withStepFunction"(function0: $Function$$Type<$ScrollValueBehaviour$StepContext$$Type, integer>): $ScrollInput
public "writingTo"(label0: $Label$$Type): $ScrollInput
get "currentFocusPath"(): $ComponentPath
get "state"(): integer
set "state"(value: integer)
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$Carriage$DimensionalCarriageEntity" {
import { $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $WeakReference, $WeakReference$$Type } from "packages/java/lang/ref/$WeakReference"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $CarriageContraptionEntity, $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export class $Carriage$DimensionalCarriageEntity {
constructor(carriage0: $Carriage$$Type)

public "alignEntity"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): void
public "discardPivot"(): void
public "findPivot"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean): $TrackNodeLocation
public "leadingAnchor"(): $Vec3
public "maxAllowedLocalCoord"(): integer
public "minAllowedLocalCoord"(): integer
public "read"(compoundTag0: $CompoundTag$$Type): void
public "trailingAnchor"(): $Vec3
public "updateCutoff"(boolean0: boolean): void
public "updatePassengerLoadout"(): void
public "updateRenderedCutoff"(): void
public "write"(): $CompoundTag
get "cutoff"(): float
set "cutoff"(value: float)
get "entity"(): $WeakReference<$CarriageContraptionEntity>
set "entity"(value: $WeakReference$$Type<$CarriageContraptionEntity$$Type>)
get "pivot"(): $TrackNodeLocation
set "pivot"(value: $TrackNodeLocation$$Type)
get "pointsInitialised"(): boolean
set "pointsInitialised"(value: boolean)
get "positionAnchor"(): $Vec3
set "positionAnchor"(value: $Vec3$$Type)
get "rotationAnchors"(): $Couple<$Vec3>
set "rotationAnchors"(value: $Couple$$Type<$Vec3$$Type>)
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"create$setXPos"(double0: double): void
"create$setYPos"(double0: double): void
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "packages/com/simibubi/create/foundation/virtualWorld/$VirtualRenderWorld" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $LevelChunk } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $VisualizationLevel } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationLevel"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
constructor(level0: $Level$$Type, int1: integer, int2: integer, vec3i3: $Vec3i$$Type, runnable4: $Runnable$$Type)

public "actuallyGetChunk"(int0: integer, int1: integer): $ChunkAccess
public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clear"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getAnyChunkImmediately"(int0: integer, int1: integer): $ChunkAccess
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(int0: integer, int1: integer, int2: integer): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunkAtImmediately"(int0: integer, int1: integer): $LevelChunk
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getTimeOfDay"(float0: float): float
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "nextMultipleOf16"(int0: integer): integer
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "resetExternalLight"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "runLightEngine"(): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "self"(): $Level
public "setBlockEntities"(collection0: $Collection$$Type<$BlockEntity$$Type>): void
public "setExternalLight"(int0: integer): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "supportsVisualization"(): boolean
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "maxLightLevel"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "blockEntities"(value: $Collection$$Type<$BlockEntity$$Type>)
set "externalLight"(value: integer)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "packages/com/simibubi/create/content/kinetics/fan/processing/$FanProcessingType$AirFlowParticleAccess" {
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $FanProcessingType$AirFlowParticleAccess {
"setAlpha"(float0: float): void
"setColor"(int0: integer): void
"spawnExtraParticle"(particleOptions0: $ParticleOptions$$Type, float1: float): void
set "alpha"(value: float)
set "color"(value: integer)
}

export namespace $FanProcessingType$AirFlowParticleAccess {
const probejs$$marker: never
}
export abstract class $FanProcessingType$AirFlowParticleAccess$$Static implements $FanProcessingType$AirFlowParticleAccess {
}
}

declare module "packages/com/simibubi/create/content/contraptions/render/$ActorVisual" {
import { $Visual } from "packages/dev/engine_room/flywheel/api/visual/$Visual"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import { $MovementContext$$Type } from "packages/com/simibubi/create/content/contraptions/behaviour/$MovementContext"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ActorVisual implements $Visual {
constructor(visualizationContext0: $VisualizationContext$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, movementContext2: $MovementContext$$Type)

public "beginFrame"(): void
public "delete"(): void
public "tick"(): void
public "update"(float0: float): void
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$UseOnContextAccessor" {
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"

export interface $UseOnContextAccessor {
"create$getHitResult"(): $BlockHitResult
}

export namespace $UseOnContextAccessor {
const probejs$$marker: never
}
export abstract class $UseOnContextAccessor$$Static implements $UseOnContextAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackNode" {
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $TrackNode {
constructor(trackNodeLocation0: $TrackNodeLocation$$Type, int1: integer, vec32: $Vec3$$Type)

public "getLocation"(): $TrackNodeLocation
public "getNetId"(): integer
public "getNormal"(): $Vec3
get "location"(): $TrackNodeLocation
get "netId"(): integer
get "normal"(): $Vec3
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackEdge" {
import { $TrackMaterial, $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $Collection } from "packages/java/util/$Collection"
import { $EdgeData } from "packages/com/simibubi/create/content/trains/graph/$EdgeData"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $BezierConnection, $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"

export class $TrackEdge {
constructor(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, bezierConnection2: $BezierConnection$$Type, trackMaterial3: $TrackMaterial$$Type)

public "canTravelTo"(trackEdge0: $TrackEdge$$Type): boolean
public "getDirection"(boolean0: boolean): $Vec3
public "getDirectionAt"(double0: double): $Vec3
public "getEdgeData"(): $EdgeData
public "getIntersection"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type, trackNode3: $TrackNode$$Type, trackNode4: $TrackNode$$Type): $Collection<double[]>
public "getLength"(): double
public "getNormal"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getNormalSmoothed"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getPosition"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getPositionSmoothed"(trackGraph0: $TrackGraph$$Type, double1: double): $Vec3
public "getTrackMaterial"(): $TrackMaterial
public "getTurn"(): $BezierConnection
public "incrementT"(double0: double, double1: double): double
public "isInterDimensional"(): boolean
public "isTurn"(): boolean
public static "read"(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, compoundTag2: $CompoundTag$$Type, trackGraph3: $TrackGraph$$Type, dimensionPalette4: $DimensionPalette$$Type): $TrackEdge
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "node1"(): $TrackNode
set "node1"(value: $TrackNode$$Type)
get "node2"(): $TrackNode
set "node2"(value: $TrackNode$$Type)
get "edgeData"(): $EdgeData
get "length"(): double
get "trackMaterial"(): $TrackMaterial
get "turn"(): $BezierConnection
get "interDimensional"(): boolean
get "turn"(): boolean
}
}

declare module "packages/com/simibubi/create/api/behaviour/movement/$MovementBehaviour" {
import { $ContraptionMatrices$$Type } from "packages/com/simibubi/create/content/contraptions/render/$ContraptionMatrices"
import { $VirtualRenderWorld$$Type } from "packages/com/simibubi/create/foundation/virtualWorld/$VirtualRenderWorld"
import { $NonNullConsumer } from "packages/com/tterrag/registrate/util/nullness/$NonNullConsumer"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $MovementContext$$Type } from "packages/com/simibubi/create/content/contraptions/behaviour/$MovementContext"
import { $SimpleRegistry } from "packages/com/simibubi/create/api/registry/$SimpleRegistry"
import { $VisualizationContext$$Type } from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import { $ActorVisual } from "packages/com/simibubi/create/content/contraptions/render/$ActorVisual"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $MovementBehaviour {
"canBeDisabledVia"(movementContext0: $MovementContext$$Type): $ItemStack
"cancelStall"(movementContext0: $MovementContext$$Type): void
/** Client only, do not use in server scripts */
"createVisual"(visualizationContext0: $VisualizationContext$$Type, virtualRenderWorld1: $VirtualRenderWorld$$Type, movementContext2: $MovementContext$$Type): $ActorVisual
"disableBlockEntityRendering"(): boolean
"dropItem"(movementContext0: $MovementContext$$Type, itemStack1: $ItemStack$$Type): void
"getActiveAreaOffset"(movementContext0: $MovementContext$$Type): $Vec3
"isActive"(movementContext0: $MovementContext$$Type): boolean
"mustTickWhileDisabled"(): boolean
"onDisabledByControls"(movementContext0: $MovementContext$$Type): void
"onSpeedChanged"(movementContext0: $MovementContext$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): void
/** Client only, do not use in server scripts */
"renderInContraption"(movementContext0: $MovementContext$$Type, virtualRenderWorld1: $VirtualRenderWorld$$Type, contraptionMatrices2: $ContraptionMatrices$$Type, multiBufferSource3: $MultiBufferSource$$Type): void
"startMoving"(movementContext0: $MovementContext$$Type): void
"stopMoving"(movementContext0: $MovementContext$$Type): void
"tick"(movementContext0: $MovementContext$$Type): void
"visitNewPosition"(movementContext0: $MovementContext$$Type, blockPos1: $BlockPos$$Type): void
"writeExtraData"(movementContext0: $MovementContext$$Type): void
}

export namespace $MovementBehaviour {
const REGISTRY: $SimpleRegistry<$Block, $MovementBehaviour>
function movementBehaviour<B extends $Block>(movementBehaviour0: $MovementBehaviour$$Type): $NonNullConsumer<B>
}
export abstract class $MovementBehaviour$$Static implements $MovementBehaviour {
static readonly "REGISTRY": $SimpleRegistry<$Block, $MovementBehaviour>

static "movementBehaviour"<B extends $Block>(movementBehaviour0: $MovementBehaviour$$Type): $NonNullConsumer<B>
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeyVisual" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Instance$$Type } from "packages/dev/engine_room/flywheel/api/instance/$Instance"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $BogeyVisual {
"collectCrumblingInstances"(consumer0: $Consumer$$Type<$Instance$$Type>): void
"delete"(): void
"hide"(): void
"update"(compoundTag0: $CompoundTag$$Type, float1: float, poseStack2: $PoseStack$$Type): void
"updateLight"(int0: integer): void
}

export namespace $BogeyVisual {
const probejs$$marker: never
}
export abstract class $BogeyVisual$$Static implements $BogeyVisual {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType$TrackBlockFactory" {
import { $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $TrackBlock } from "packages/com/simibubi/create/content/trains/track/$TrackBlock"

export interface $TrackMaterial$TrackType$TrackBlockFactory {
"create"(properties0: $BlockBehaviour$Properties$$Type, trackMaterial1: $TrackMaterial$$Type): $TrackBlock
}

export namespace $TrackMaterial$TrackType$TrackBlockFactory {
const probejs$$marker: never
}
export abstract class $TrackMaterial$TrackType$TrackBlockFactory$$Static implements $TrackMaterial$TrackType$TrackBlockFactory {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType" {
import { $TrackMaterial$TrackType$TrackBlockFactory$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType$TrackBlockFactory"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TrackMaterial$TrackType {
static readonly "STANDARD": $TrackMaterial$TrackType
readonly "id": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type, trackBlockFactory1: $TrackMaterial$TrackType$TrackBlockFactory$$Type)

}
}

declare module "packages/com/simibubi/create/content/decoration/slidingDoor/$DoorControlBehaviour" {
import { $DoorControl, $DoorControl$$Type } from "packages/com/simibubi/create/content/decoration/slidingDoor/$DoorControl"
import { $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $BehaviourType } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"

export class $DoorControlBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$DoorControlBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type)

public "set"(doorControl0: $DoorControl$$Type): void
get "mode"(): $DoorControl
set "mode"(value: $DoorControl$$Type)
}
}

declare module "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencerInstructions" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SequencerInstructions extends $Enum<$SequencerInstructions> {
static readonly "AWAIT": $SequencerInstructions
static readonly "DELAY": $SequencerInstructions
static readonly "END": $SequencerInstructions
static readonly "TURN_ANGLE": $SequencerInstructions
static readonly "TURN_DISTANCE": $SequencerInstructions

public "needsPropagation"(): boolean
public static "valueOf"(string0: string): $SequencerInstructions
public static "values"(): $SequencerInstructions[]
}
}

declare module "packages/com/simibubi/create/content/trains/track/$ITrackBlock" {
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $PartialModel } from "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "packages/net/minecraft/core/$Direction$AxisDirection"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Affine, $Affine$$Type } from "packages/dev/engine_room/flywheel/lib/transform/$Affine"
import { $BezierTrackPointLocation$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import { $TrackMaterial, $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType"

export interface $ITrackBlock {
"getBogeyAnchor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
"getConnected"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean, trackNodeLocation4: $TrackNodeLocation$$Type): $Collection<$TrackNodeLocation$DiscoveredLocation>
"getCurveStart"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Vec3
"getElevationAtCenter"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): double
"getMaterial"(): $TrackMaterial
"getNearestTrackAxis"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Pair<$Vec3, $Direction$AxisDirection>
"getTrackAxes"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $List<$Vec3>
"getUpNormal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $Vec3
"getYOffsetAt"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): integer
"isSlope"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
"overlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $BlockState
/** Client only, do not use in server scripts */
"prepareAssemblyOverlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, poseStack4: $PoseStack$$Type): $PartialModel
/** Client only, do not use in server scripts */
"prepareTrackOverlay"<Self extends $Affine<Self>>(affine0: $Affine$$Type<Self>, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, bezierTrackPointLocation4: $BezierTrackPointLocation$$Type, axisDirection5: $Direction$AxisDirection$$Type, renderedTrackOverlayType6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
"trackEquals"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
get "material"(): $TrackMaterial
}

export namespace $ITrackBlock {
function addToListIfConnected(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
function getMaterialSimple(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
function getMaterialSimple(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
function walkConnectedTracks(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
}
export abstract class $ITrackBlock$$Static implements $ITrackBlock {
static "addToListIfConnected"(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
static "walkConnectedTracks"(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$CropBlockAccessor" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"

export interface $CropBlockAccessor {
"create$callGetAgeProperty"(): $IntegerProperty
}

export namespace $CropBlockAccessor {
const probejs$$marker: never
}
export abstract class $CropBlockAccessor$$Static implements $CropBlockAccessor {
}
}

declare module "packages/com/simibubi/create/content/kinetics/base/$IRotate" {
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Direction$Axis } from "packages/net/minecraft/core/$Direction$Axis"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IWrenchable } from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IRotate$SpeedLevel } from "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel"

export interface $IRotate extends $IWrenchable {
"getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
"getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
"getRotationAxis"(blockState0: $BlockState$$Type): $Direction$Axis
"hasShaftTowards"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): boolean
"hideStressImpact"(): boolean
"onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
"showCapacityWithAnnotation"(): boolean
"updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}

export namespace $IRotate {
function playRemoveSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
function playRotateSound(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
export abstract class $IRotate$$Static implements $IRotate {
static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorage" {
import { $IFluidHandler } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $IFluidHandler$FluidAction$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MountedFluidStorageType } from "packages/com/simibubi/create/api/contraption/storage/fluid/$MountedFluidStorageType"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $MountedFluidStorage implements $IFluidHandler {
static readonly "CODEC": $Codec<$MountedFluidStorage>
readonly "type": $MountedFluidStorageType<$MountedFluidStorage>

public "drain"(int0: integer, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(fluidStack0: $FluidStack$$Type, fluidAction1: $IFluidHandler$FluidAction$$Type): integer
public "getFluidInTank"(int0: integer): $FluidStack
public "getTankCapacity"(int0: integer): integer
public "getTanks"(): integer
public "isFluidValid"(int0: integer, fluidStack1: $FluidStack$$Type): boolean
public "unmount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): void
get "tanks"(): integer
}
}

declare module "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity$ContraptionRotationState" {
import { $Matrix3d } from "packages/com/simibubi/create/foundation/collision/$Matrix3d"

export class $AbstractContraptionEntity$ContraptionRotationState {
static readonly "NONE": $AbstractContraptionEntity$ContraptionRotationState

constructor()

public "asMatrix"(): $Matrix3d
public "getYawOffset"(): float
public "hasVerticalRotation"(): boolean
get "secondYRotation"(): float
set "secondYRotation"(value: float)
get "xRotation"(): float
set "xRotation"(value: float)
get "yRotation"(): float
set "yRotation"(value: float)
get "zRotation"(): float
set "zRotation"(value: float)
get "yawOffset"(): float
}
}

declare module "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlockEntity" {
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $TransformableBlockEntity {
"transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
}

export namespace $TransformableBlockEntity {
const probejs$$marker: never
}
export abstract class $TransformableBlockEntity$$Static implements $TransformableBlockEntity {
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour$ProcessingResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BeltProcessingBehaviour$ProcessingResult extends $Enum<$BeltProcessingBehaviour$ProcessingResult> {
static readonly "HOLD": $BeltProcessingBehaviour$ProcessingResult
static readonly "PASS": $BeltProcessingBehaviour$ProcessingResult
static readonly "REMOVE": $BeltProcessingBehaviour$ProcessingResult

public static "valueOf"(string0: string): $BeltProcessingBehaviour$ProcessingResult
public static "values"(): $BeltProcessingBehaviour$ProcessingResult[]
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/$Schedule" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $ScheduleEntry, $ScheduleEntry$$Type } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleEntry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ScheduleInstruction } from "packages/com/simibubi/create/content/trains/schedule/destination/$ScheduleInstruction"
import { $ScheduleWaitCondition } from "packages/com/simibubi/create/content/trains/schedule/condition/$ScheduleWaitCondition"

export class $Schedule {
static "CONDITION_TYPES": $List<$Pair<$ResourceLocation, $Supplier<$ScheduleWaitCondition>>>
static "INSTRUCTION_TYPES": $List<$Pair<$ResourceLocation, $Supplier<$ScheduleInstruction>>>

constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $Schedule
public static "getTypeOptions"<T>(list0: $List$$Type<$Pair$$Type<$ResourceLocation$$Type, T>>): $List<$Component>
public "write"(): $CompoundTag
get "cyclic"(): boolean
set "cyclic"(value: boolean)
get "entries"(): $List<$ScheduleEntry>
set "entries"(value: $List$$Type<$ScheduleEntry$$Type>)
get "savedProgress"(): integer
set "savedProgress"(value: integer)
}
}

declare module "packages/com/simibubi/create/api/registry/$SimpleRegistry$Provider" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $BlockEntityType, $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $SimpleRegistry$Provider<K, V> {
"get"(k0: K): V
"onRegister"(runnable0: $Runnable$$Type): void
}

export namespace $SimpleRegistry$Provider {
function forBlockEntityTag<V>(tagKey0: $TagKey$$Type<$BlockEntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$BlockEntityType<any>, V>
function forBlockTag<V>(tagKey0: $TagKey$$Type<$Block$$Type>, v1: V): $SimpleRegistry$Provider<$Block, V>
function forEntityTag<V>(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$EntityType<any>, V>
function forFluidTag<V>(tagKey0: $TagKey$$Type<$Fluid$$Type>, v1: V): $SimpleRegistry$Provider<$Fluid, V>
function forItemTag<V>(tagKey0: $TagKey$$Type<$Item$$Type>, v1: V): $SimpleRegistry$Provider<$Item, V>
function forTag<K, V>(tagKey0: $TagKey$$Type<K>, function1: $Function$$Type<K, $Holder<K>>, v2: V): $SimpleRegistry$Provider<K, V>
}
export abstract class $SimpleRegistry$Provider$$Static<K, V> implements $SimpleRegistry$Provider<K, V> {
static "forBlockEntityTag"<V>(tagKey0: $TagKey$$Type<$BlockEntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$BlockEntityType<any>, V>
static "forBlockTag"<V>(tagKey0: $TagKey$$Type<$Block$$Type>, v1: V): $SimpleRegistry$Provider<$Block, V>
static "forEntityTag"<V>(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>, v1: V): $SimpleRegistry$Provider<$EntityType<any>, V>
static "forFluidTag"<V>(tagKey0: $TagKey$$Type<$Fluid$$Type>, v1: V): $SimpleRegistry$Provider<$Fluid, V>
static "forItemTag"<V>(tagKey0: $TagKey$$Type<$Item$$Type>, v1: V): $SimpleRegistry$Provider<$Item, V>
static "forTag"<K, V>(tagKey0: $TagKey$$Type<K>, function1: $Function$$Type<K, $Holder<K>>, v2: V): $SimpleRegistry$Provider<K, V>
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$BlockLootSubProviderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockLootSubProviderAccessor {
}

export namespace $BlockLootSubProviderAccessor {
const probejs$$marker: never
}
export abstract class $BlockLootSubProviderAccessor$$Static implements $BlockLootSubProviderAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$EdgePointType" {
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $TrackEdgePoint, $TrackEdgePoint$$Type } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $GlobalStation } from "packages/com/simibubi/create/content/trains/station/$GlobalStation"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $TrackObserver } from "packages/com/simibubi/create/content/trains/observer/$TrackObserver"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SignalBoundary } from "packages/com/simibubi/create/content/trains/signal/$SignalBoundary"
import { $Map } from "packages/java/util/$Map"

export class $EdgePointType<T extends $TrackEdgePoint> {
static readonly "OBSERVER": $EdgePointType<$TrackObserver>
static readonly "SIGNAL": $EdgePointType<$SignalBoundary>
static readonly "STATION": $EdgePointType<$GlobalStation>
static readonly "TYPES": $Map<$ResourceLocation, $EdgePointType<any>>

constructor(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>)

public "create"(): T
public "getId"(): $ResourceLocation
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): $TrackEdgePoint
public static "register"<T extends $TrackEdgePoint>(resourceLocation0: $ResourceLocation$$Type, supplier1: $Supplier$$Type<T>): $EdgePointType<T>
get "id"(): $ResourceLocation
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$LevelRendererAccessor" {
import { $Frustum } from "packages/net/minecraft/client/renderer/culling/$Frustum"

export interface $LevelRendererAccessor {
"create$getCapturedFrustum"(): $Frustum
"create$getCullingFrustum"(): $Frustum
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/$CachedRenderBBBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $SyncedBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SyncedBlockEntity"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
get "modelData"(): $ModelData
}
}

declare module "packages/com/simibubi/create/content/decoration/slidingDoor/$DoorControl" {
import { $Label } from "packages/com/simibubi/create/foundation/gui/widget/$Label"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Enum } from "packages/java/lang/$Enum"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ScrollInput } from "packages/com/simibubi/create/foundation/gui/widget/$ScrollInput"

export class $DoorControl extends $Enum<$DoorControl> {
static readonly "ALL": $DoorControl
static readonly "EAST": $DoorControl
static readonly "NONE": $DoorControl
static readonly "NORTH": $DoorControl
static readonly "SOUTH": $DoorControl
static readonly "WEST": $DoorControl

/** Client only, do not use in server scripts */
public static "createWidget"(int0: integer, int1: integer, consumer2: $Consumer$$Type<$DoorControl$$Type>, doorControl3: $DoorControl$$Type): $Pair<$ScrollInput, $Label>
public "matches"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $DoorControl
public static "values"(): $DoorControl[]
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$TravellingPoint" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $TravellingPoint$IPortalListener, $TravellingPoint$IPortalListener$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$IPortalListener"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $TrackGraphLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraphLocation"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $TrackNode, $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $List$$Type } from "packages/java/util/$List"
import { $TravellingPoint$ITrackSelector, $TravellingPoint$ITrackSelector$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$ITrackSelector"
import { $TravellingPoint$IEdgePointListener, $TravellingPoint$IEdgePointListener$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$IEdgePointListener"
import { $TravellingPoint$SteerDirection$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$SteerDirection"
import { $TrackEdge, $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $TravellingPoint$ITurnListener, $TravellingPoint$ITurnListener$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint$ITurnListener"

export class $TravellingPoint {
constructor()
constructor(trackNode0: $TrackNode$$Type, trackNode1: $TrackNode$$Type, trackEdge2: $TrackEdge$$Type, double3: double, boolean4: boolean)

public "follow"(travellingPoint0: $TravellingPoint$$Type): $TravellingPoint$ITrackSelector
public "follow"(travellingPoint0: $TravellingPoint$$Type, consumer1: $Consumer$$Type<boolean>): $TravellingPoint$ITrackSelector
public "getPosition"(trackGraph0: $TrackGraph$$Type): $Vec3
public "getPosition"(trackGraph0: $TrackGraph$$Type, boolean1: boolean): $Vec3
public "getPositionWithOffset"(trackGraph0: $TrackGraph$$Type, double1: double, boolean2: boolean): $Vec3
public "ignoreEdgePoints"(): $TravellingPoint$IEdgePointListener
public "ignorePortals"(): $TravellingPoint$IPortalListener
public "ignoreTurns"(): $TravellingPoint$ITurnListener
public "migrateTo"(list0: $List$$Type<$TrackGraphLocation$$Type>): void
public "random"(): $TravellingPoint$ITrackSelector
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $TravellingPoint
public "reverse"(trackGraph0: $TrackGraph$$Type): void
public "steer"(steerDirection0: $TravellingPoint$SteerDirection$$Type, vec31: $Vec3$$Type): $TravellingPoint$ITrackSelector
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type, iTurnListener4: $TravellingPoint$ITurnListener$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type): double
public "travel"(trackGraph0: $TrackGraph$$Type, double1: double, iTrackSelector2: $TravellingPoint$ITrackSelector$$Type, iEdgePointListener3: $TravellingPoint$IEdgePointListener$$Type, iTurnListener4: $TravellingPoint$ITurnListener$$Type, iPortalListener5: $TravellingPoint$IPortalListener$$Type): double
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "blocked"(): boolean
set "blocked"(value: boolean)
get "edge"(): $TrackEdge
set "edge"(value: $TrackEdge$$Type)
get "node1"(): $TrackNode
set "node1"(value: $TrackNode$$Type)
get "node2"(): $TrackNode
set "node2"(value: $TrackNode$$Type)
get "position"(): double
set "position"(value: double)
get "upsideDown"(): boolean
set "upsideDown"(value: boolean)
}
}

declare module "packages/com/simibubi/create/foundation/block/$IHaveBigOutline" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHaveBigOutline {
}

export namespace $IHaveBigOutline {
const probejs$$marker: never
}
export abstract class $IHaveBigOutline$$Static implements $IHaveBigOutline {
}
}

declare module "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorageType" {
import { $BlockBuilder } from "packages/com/tterrag/registrate/builders/$BlockBuilder"
import { $NonNullUnaryOperator } from "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator"
import { $MountedItemStorage } from "packages/com/simibubi/create/api/contraption/storage/item/$MountedItemStorage"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $SimpleRegistry } from "packages/com/simibubi/create/api/registry/$SimpleRegistry"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $RegistryEntry$$Type } from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MountedItemStorageType<T extends $MountedItemStorage> {
static readonly "CODEC": $Codec<$MountedItemStorageType<any>>
static readonly "REGISTRY": $SimpleRegistry<$Block, $MountedItemStorageType<any>>
readonly "codec": $Codec<T>
readonly "holder": $Holder$Reference<$MountedItemStorageType<any>>

public "is"(tagKey0: $TagKey$$Type<$MountedItemStorageType$$Type<any>>): boolean
public "mount"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockEntity3: $BlockEntity$$Type): T
public static "mountedItemStorage"<B extends $Block, P>(registryEntry0: $RegistryEntry$$Type<$MountedItemStorageType$$Type<any>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>
}
}

declare module "packages/com/simibubi/create/compat/computercraft/events/$ComputerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ComputerEvent {
}

export namespace $ComputerEvent {
const probejs$$marker: never
}
export abstract class $ComputerEvent$$Static implements $ComputerEvent {
}
}

declare module "packages/com/simibubi/create/api/event/$PipeCollisionEvent$Flow" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $PipeCollisionEvent } from "packages/com/simibubi/create/api/event/$PipeCollisionEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PipeCollisionEvent$Flow extends $PipeCollisionEvent {
constructor()
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, fluid2: $Fluid$$Type, fluid3: $Fluid$$Type, blockState4: $BlockState$$Type)

public "getFirstFluid"(): $Fluid
public "getSecondFluid"(): $Fluid
get "firstFluid"(): $Fluid
get "secondFluid"(): $Fluid
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageBogey" {
import { $Carriage, $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $AccessorCarriageBogey } from "packages/com/railwayteam/railways/mixin/$AccessorCarriageBogey"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $TravellingPoint, $TravellingPoint$$Type } from "packages/com/simibubi/create/content/trains/entity/$TravellingPoint"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"
import { $BogeyStyle } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $BogeySizes$BogeySize } from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $AbstractBogeyBlock$$Type } from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $CarriageBogey implements $AccessorCarriageBogey {
static readonly "UPSIDE_DOWN_KEY": string

constructor(abstractBogeyBlock0: $AbstractBogeyBlock$$Type<any>, boolean1: boolean, compoundTag2: $CompoundTag$$Type, travellingPoint3: $TravellingPoint$$Type, travellingPoint4: $TravellingPoint$$Type)

public "getAnchorPosition"(): $Vec3
public "getAnchorPosition"(boolean0: boolean): $Vec3
public "getDimension"(): $ResourceKey<$Level>
public "getSize"(): $BogeySizes$BogeySize
public "getStress"(): double
public "getStyle"(): $BogeyStyle
public "isUpsideDown"(): boolean
public "leading"(): $TravellingPoint
public static "read"(compoundTag0: $CompoundTag$$Type, trackGraph1: $TrackGraph$$Type, dimensionPalette2: $DimensionPalette$$Type): $CarriageBogey
public "trailing"(): $TravellingPoint
public "updateAngles"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type, double1: double): void
public "updateCouplingAnchor"(vec30: $Vec3$$Type, float1: float, float2: float, int3: integer, float4: float, boolean5: boolean): void
public "write"(dimensionPalette0: $DimensionPalette$$Type): $CompoundTag
get "bogeyData"(): $CompoundTag
set "bogeyData"(value: $CompoundTag$$Type)
get "carriage"(): $Carriage
set "carriage"(value: $Carriage$$Type)
get "couplingAnchors"(): $Couple<$Vec3>
set "couplingAnchors"(value: $Couple$$Type<$Vec3$$Type>)
get "anchorPosition"(): $Vec3
get "dimension"(): $ResourceKey<$Level>
get "size"(): $BogeySizes$BogeySize
get "stress"(): double
get "style"(): $BogeyStyle
get "upsideDown"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/networking/$SimplePacketBase" {
import { $NetworkEvent$Context$$Type } from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $SimplePacketBase {
constructor()

public "handle"(context0: $NetworkEvent$Context$$Type): boolean
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/com/simibubi/create/content/trains/entity/$CarriageContraption" {
import { $ArrivalSoundQueue, $ArrivalSoundQueue$$Type } from "packages/com/simibubi/create/content/trains/entity/$ArrivalSoundQueue"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Contraption } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $MountedStorageManager$$Type } from "packages/com/simibubi/create/content/contraptions/$MountedStorageManager"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"
import { $CarriageContraptionEntity$$Type } from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $CarriageContraption extends $Contraption {
constructor()
constructor(direction0: $Direction$$Type)

public "atSeam"(blockPos0: $BlockPos$$Type): boolean
public "atSeam"(int0: integer): boolean
public "getAssemblyDirection"(): $Direction
public "getSecondBogeyPos"(): $BlockPos
public "hasBackwardControls"(): boolean
public "hasForwardControls"(): boolean
public "inControl"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "isHiddenInPortal"(int0: integer): boolean
public "notInPortal"(): boolean
public "returnStorageForDisassembly"(mountedStorageManager0: $MountedStorageManager$$Type): void
public "setSoundQueueOffset"(int0: integer): void
public "swapStorageAfterAssembly"(carriageContraptionEntity0: $CarriageContraptionEntity$$Type): void
public "withinVisible"(int0: integer): boolean
public "withinVisible"(blockPos0: $BlockPos$$Type): boolean
get "blockConductors"(): $Couple<boolean>
set "blockConductors"(value: $Couple$$Type<boolean>)
get "conductorSeats"(): $Map<$BlockPos, $Couple<boolean>>
set "conductorSeats"(value: $Map$$Type<$BlockPos$$Type, $Couple$$Type<boolean>>)
get "portalCutoffMax"(): integer
set "portalCutoffMax"(value: integer)
get "portalCutoffMin"(): integer
set "portalCutoffMin"(value: integer)
get "soundQueue"(): $ArrivalSoundQueue
set "soundQueue"(value: $ArrivalSoundQueue$$Type)
get "assemblyDirection"(): $Direction
get "secondBogeyPos"(): $BlockPos
set "soundQueueOffset"(value: integer)
}
}

declare module "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity" {
import { $IFluidHandler$$Type } from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import { $LazyOptional, $LazyOptional$$Type } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $IRotate$$Type } from "packages/com/simibubi/create/content/kinetics/base/$IRotate"
import { $IHaveGoggleInformation } from "packages/com/simibubi/create/api/equipment/goggles/$IHaveGoggleInformation"
import { $KineticNetwork } from "packages/com/simibubi/create/content/kinetics/$KineticNetwork"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $SmartBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IHaveHoveringInformation } from "packages/com/simibubi/create/api/equipment/goggles/$IHaveHoveringInformation"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type } from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "addPropagationLocations"(iRotate0: $IRotate$$Type, blockState1: $BlockState$$Type, list2: $List$$Type<$BlockPos$$Type>): $List<$BlockPos>
public "addToGoggleTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
public "addToTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean): boolean
public "attachKinetics"(): void
public "calculateAddedStressCapacity"(): float
public "calculateStressApplied"(): float
public "clearKineticInformation"(): void
public "containedFluidTooltip"(list0: $List$$Type<$Component$$Type>, boolean1: boolean, lazyOptional2: $LazyOptional$$Type<$IFluidHandler$$Type>): boolean
public static "convertToAngular"(float0: float): float
public static "convertToDirection"(float0: float, direction1: $Direction$$Type): float
public static "convertToLinear"(float0: float): float
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "detachKinetics"(): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFlickerScore"(): integer
public "getGeneratedSpeed"(): float
public "getIcon"(boolean0: boolean): $ItemStack
public "getModelData"(): $ModelData
public "getOrCreateNetwork"(): $KineticNetwork
public "getRotationAngleOffset"(axis0: $Direction$Axis$$Type): integer
public "getSpeed"(): float
public "getTheoreticalSpeed"(): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasNetwork"(): boolean
public "hasSource"(): boolean
public "isCustomConnection"(kineticBlockEntity0: $KineticBlockEntity$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): boolean
public "isOverStressed"(): boolean
public "isSource"(): boolean
public "isSpeedRequirementFulfilled"(): boolean
public "needsSpeedUpdate"(): boolean
public "onLoad"(): void
public "onSpeedChanged"(float0: float): void
public "propagateRotationTo"(kineticBlockEntity0: $KineticBlockEntity$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean, boolean5: boolean): float
public "removeSource"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setNetwork"(long0: long): void
public "setSource"(blockPos0: $BlockPos$$Type): void
public "setSpeed"(float0: float): void
public static "switchToBlockState"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
/** Client only, do not use in server scripts */
public "tickAudio"(): void
public "updateFromNetwork"(float0: float, float1: float, int2: integer): void
public "warnOfMovement"(): void
get "network"(): long
set "network"(value: long)
get "networkDirty"(): boolean
set "networkDirty"(value: boolean)
get "preventSpeedUpdate"(): integer
set "preventSpeedUpdate"(value: integer)
get "sequenceContext"(): $SequencedGearshiftBlockEntity$SequenceContext
set "sequenceContext"(value: $SequencedGearshiftBlockEntity$SequenceContext$$Type)
get "source"(): $BlockPos
set "source"(value: $BlockPos$$Type)
get "updateSpeed"(): boolean
set "updateSpeed"(value: boolean)
get "flickerScore"(): integer
get "generatedSpeed"(): float
get "modelData"(): $ModelData
get "orCreateNetwork"(): $KineticNetwork
get "speed"(): float
get "theoreticalSpeed"(): float
get "overStressed"(): boolean
get "speedRequirementFulfilled"(): boolean
set "speed"(value: float)
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "packages/net/minecraft/core/$Direction$AxisDirection"
import { $Affine, $Affine$$Type } from "packages/dev/engine_room/flywheel/lib/transform/$Affine"
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation$DiscoveredLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $IBE } from "packages/com/simibubi/create/foundation/block/$IBE"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $TrackShape } from "packages/com/simibubi/create/content/trains/track/$TrackShape"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ITrackBlock } from "packages/com/simibubi/create/content/trains/track/$ITrackBlock"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $Random$$Type } from "packages/java/util/$Random"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType, $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $TrackMaterial, $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $IHaveBigOutline } from "packages/com/simibubi/create/foundation/block/$IHaveBigOutline"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BezierTrackPointLocation$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $ProperWaterloggedBlock } from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $SpecialBlockItemRequirement } from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $PartialModel } from "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Class } from "packages/java/lang/$Class"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $IWrenchable } from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import { $TrackBlockEntity, $TrackBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackBlockEntity"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
static readonly "HAS_BE": $BooleanProperty
static readonly "SHAPE": $EnumProperty<$TrackShape>

constructor(properties0: $BlockBehaviour$Properties$$Type, trackMaterial1: $TrackMaterial$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public static "addToListIfConnected"(trackNodeLocation0: $TrackNodeLocation$$Type, collection1: $Collection$$Type<$TrackNodeLocation$DiscoveredLocation$$Type>, biFunction2: $BiFunction$$Type<double, boolean, $Vec3>, function3: $Function$$Type<boolean, $Vec3>, function4: $Function$$Type<boolean, $ResourceKey<$Level>>, function5: $Function$$Type<$Vec3$$Type, integer>, vec36: $Vec3$$Type, bezierConnection7: $BezierConnection$$Type, biFunction8: $BiFunction$$Type<boolean, $Vec3$$Type, $TrackMaterial>): void
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "animateTick"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, random3: $Random$$Type): void
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "fluidState"(blockState0: $BlockState$$Type): $FluidState
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $TrackBlockEntity
public "getBlockEntityClass"(): $Class<$TrackBlockEntity>
public "getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<$TrackBlockEntity>
public "getBlockEntityType"(): $BlockEntityType<$TrackBlockEntity>
public "getBlockStates"(): $List<$BlockState>
public "getBogeyAnchor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $BlockState
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getConnected"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean, trackNodeLocation4: $TrackNodeLocation$$Type): $Collection<$TrackNodeLocation$DiscoveredLocation>
public "getCurveStart"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Vec3
public "getElevationAtCenter"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): double
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMaterial"(): $TrackMaterial
public static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type, trackMaterial2: $TrackMaterial$$Type): $TrackMaterial
public static "getMaterialSimple"(blockGetter0: $BlockGetter$$Type, vec31: $Vec3$$Type): $TrackMaterial
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getNearestTrackAxis"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): $Pair<$Vec3, $Direction$AxisDirection>
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTrackAxes"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $List<$Vec3>
public "getUpNormal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $Vec3
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getYOffsetAt"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, vec33: $Vec3$$Type): integer
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isSlope"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
public "onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<$TrackBlockEntity$$Type, $InteractionResult>): $InteractionResult
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "overlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): $BlockState
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
/** Client only, do not use in server scripts */
public "prepareAssemblyOverlay"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type, poseStack4: $PoseStack$$Type): $PartialModel
/** Client only, do not use in server scripts */
public "prepareTrackOverlay"<Self extends $Affine<Self>>(affine0: $Affine$$Type<Self>, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, bezierTrackPointLocation4: $BezierTrackPointLocation$$Type, axisDirection5: $Direction$AxisDirection$$Type, renderedTrackOverlayType6: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type): $PartialModel
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "trackEquals"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
public "updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
public static "walkConnectedTracks"(blockGetter0: $BlockGetter$$Type, trackNodeLocation1: $TrackNodeLocation$$Type, boolean2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>
public "withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<$TrackBlockEntity$$Type>): void
public static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "blockEntityClass"(): $Class<$TrackBlockEntity>
get "blockEntityType"(): $BlockEntityType<$TrackBlockEntity>
get "blockStates"(): $List<$BlockState>
get "material"(): $TrackMaterial
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$ItemFrameAccessor" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemFrameAccessor {
"create$getFrameItemStack"(): $ItemStack
}

export namespace $ItemFrameAccessor {
const probejs$$marker: never
}
export abstract class $ItemFrameAccessor$$Static implements $ItemFrameAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackGraphBounds" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $AABB, $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $BezierConnection, $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"

export class $TrackGraphBounds {
constructor(trackGraph0: $TrackGraph$$Type, resourceKey1: $ResourceKey$$Type<$Level>)

get "beziers"(): $List<$BezierConnection>
set "beziers"(value: $List$$Type<$BezierConnection$$Type>)
get "box"(): $AABB
set "box"(value: $AABB$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/schedule/condition/$ScheduleWaitCondition" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $ScheduleDataEntry } from "packages/com/simibubi/create/content/trains/schedule/$ScheduleDataEntry"
import { $List } from "packages/java/util/$List"
import { $ModularGuiLineBuilder$$Type } from "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder"

export class $ScheduleWaitCondition extends $ScheduleDataEntry {
constructor()

public static "fromTag"(compoundTag0: $CompoundTag$$Type): $ScheduleWaitCondition
public "getId"(): $ResourceLocation
public "getItem"(int0: integer): $ItemStack
public "getSecondLineIcon"(): $ItemStack
public "getSecondLineTooltip"(int0: integer): $List<$Component>
public "getSummary"(): $Pair<$ItemStack, $Component>
public "getTitleAs"(string0: string): $List<$Component>
public "getWaitingStatus"(level0: $Level$$Type, train1: $Train$$Type, compoundTag2: $CompoundTag$$Type): $MutableComponent
/** Client only, do not use in server scripts */
public "initConfigurationWidgets"(modularGuiLineBuilder0: $ModularGuiLineBuilder$$Type): void
/** Client only, do not use in server scripts */
public "renderSpecialIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): boolean
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "slotsTargeted"(): integer
public "tickCompletion"(level0: $Level$$Type, train1: $Train$$Type, compoundTag2: $CompoundTag$$Type): boolean
public "write"(): $CompoundTag
get "id"(): $ResourceLocation
get "secondLineIcon"(): $ItemStack
get "summary"(): $Pair<$ItemStack, $Component>
}
}

declare module "packages/com/simibubi/create/content/contraptions/render/$ClientContraption" {
import { $ContraptionMatrices } from "packages/com/simibubi/create/content/contraptions/render/$ContraptionMatrices"
import { $VirtualRenderWorld } from "packages/com/simibubi/create/foundation/virtualWorld/$VirtualRenderWorld"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $StructureTemplate$StructureBlockInfo$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import { $List } from "packages/java/util/$List"
import { $Contraption$$Type } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BitSet } from "packages/java/util/$BitSet"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ClientContraption$RenderedBlocks } from "packages/com/simibubi/create/content/contraptions/render/$ClientContraption$RenderedBlocks"

export class $ClientContraption {
readonly "renderedBlockEntityView": $List<$BlockEntity>
readonly "scratchErroredBlockEntities": $BitSet
readonly "shouldRenderBlockEntities": $BitSet

constructor(contraption0: $Contraption$$Type)

public "childrenVersion"(): integer
public "getAndAdjustShouldRenderBlockEntities"(): $BitSet
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getMatrices"(): $ContraptionMatrices
public "getModelData"(blockPos0: $BlockPos$$Type): $ModelData
public "getRenderLevel"(): $VirtualRenderWorld
public "getRenderedBlocks"(): $ClientContraption$RenderedBlocks
public "invalidateChildren"(): void
public "invalidateStructure"(): void
public "readBlockEntity"(level0: $Level$$Type, structureBlockInfo1: $StructureTemplate$StructureBlockInfo$$Type, boolean2: boolean): $BlockEntity
public "resetRenderLevel"(): void
public "structureVersion"(): integer
get "andAdjustShouldRenderBlockEntities"(): $BitSet
get "matrices"(): $ContraptionMatrices
get "renderLevel"(): $VirtualRenderWorld
get "renderedBlocks"(): $ClientContraption$RenderedBlocks
}
}

declare module "packages/com/simibubi/create/foundation/utility/$IInteractionChecker" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IInteractionChecker {
"canPlayerUse"(player0: $Player$$Type): boolean
}

export namespace $IInteractionChecker {
const probejs$$marker: never
}
export abstract class $IInteractionChecker$$Static implements $IInteractionChecker {
}
}

declare module "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $SimpleWaterloggedBlock } from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Optional } from "packages/java/util/$Optional"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $ProperWaterloggedBlock extends $SimpleWaterloggedBlock {
"canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
"fluidState"(blockState0: $BlockState$$Type): $FluidState
"getPickupSound"(): $Optional<$SoundEvent>
"getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
"pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
"placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
"updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
"withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "pickupSound"(): $Optional<$SoundEvent>
}

export namespace $ProperWaterloggedBlock {
const WATERLOGGED: $BooleanProperty
function withWater(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
}
export abstract class $ProperWaterloggedBlock$$Static implements $ProperWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty

static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$FontAccessor" {
import { $Function } from "packages/java/util/function/$Function"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FontSet } from "packages/net/minecraft/client/gui/font/$FontSet"

export interface $FontAccessor {
"create$getFonts"(): $Function<$ResourceLocation, $FontSet>
}

export namespace $FontAccessor {
const probejs$$marker: never
}
export abstract class $FontAccessor$$Static implements $FontAccessor {
}
}

declare module "packages/com/simibubi/create/foundation/gui/widget/$Label" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $AbstractSimiWidget } from "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget"

export class $Label extends $AbstractSimiWidget {
constructor(int0: integer, int1: integer, component2: $Component$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "colored"(int0: integer): $Label
public "getCurrentFocusPath"(): $ComponentPath
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "setPosition"(int0: integer, int1: integer): void
public "setTextAndTrim"(component0: $Component$$Type, boolean1: boolean, int2: integer): void
public "withShadow"(): $Label
public "withSuffix"(string0: string): $Label
get "suffix"(): string
set "suffix"(value: string)
get "text"(): $Component
set "text"(value: $Component$$Type)
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $TransportedItemStackHandlerBehaviour$TransportedResult, $TransportedItemStackHandlerBehaviour$TransportedResult$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$TransportedResult"
import { $TransportedItemStackHandlerBehaviour$PositionGetter$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$PositionGetter"
import { $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $BehaviourType } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import { $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$ProcessingCallback"

export class $TransportedItemStackHandlerBehaviour extends $BlockEntityBehaviour {
static readonly "TYPE": $BehaviourType<$TransportedItemStackHandlerBehaviour>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type, processingCallback1: $TransportedItemStackHandlerBehaviour$ProcessingCallback$$Type)

public "getWorldPositionOf"(transportedItemStack0: $TransportedItemStack$$Type): $Vec3
public "handleCenteredProcessingOnAllItems"(float0: float, function1: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
public "handleProcessingOnAllItems"(function0: $Function$$Type<$TransportedItemStack$$Type, $TransportedItemStackHandlerBehaviour$TransportedResult>): void
public "handleProcessingOnItem"(transportedItemStack0: $TransportedItemStack$$Type, transportedResult1: $TransportedItemStackHandlerBehaviour$TransportedResult$$Type): void
public "withStackPlacement"(positionGetter0: $TransportedItemStackHandlerBehaviour$PositionGetter$$Type): $TransportedItemStackHandlerBehaviour
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$SystemReportAccessor" {
import { $Map } from "packages/java/util/$Map"

export interface $SystemReportAccessor {
"getEntries"(): $Map<string, string>
get "entries"(): $Map<string, string>
}

export namespace $SystemReportAccessor {
const probejs$$marker: never
}
export abstract class $SystemReportAccessor$$Static implements $SystemReportAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/station/$GlobalStation" {
import { $SingleBlockEntityEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $WeakReference, $WeakReference$$Type } from "packages/java/lang/ref/$WeakReference"
import { $StationEditPacket } from "packages/com/simibubi/create/content/trains/station/$StationEditPacket"
import { $Train, $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GlobalPackagePort, $GlobalPackagePort$$Type } from "packages/com/simibubi/create/content/trains/station/$GlobalPackagePort"
import { $ILimitedGlobalStation } from "packages/com/railwayteam/railways/mixin_interfaces/$ILimitedGlobalStation"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $GlobalStation extends $SingleBlockEntityEdgePoint implements $ILimitedGlobalStation {
constructor()

public "canApproachFrom"(trackNode0: $TrackNode$$Type): boolean
public "cancelReservation"(train0: $Train$$Type): void
public "getDisablingTrain"(): $Train
public "getImminentTrain"(): $Train
public "getNearestTrain"(): $Train
public "getPresentTrain"(): $Train
public "isLimitEnabled"(): boolean
public "isStationEnabled"(): boolean
public static "makeLimitEnabledPacket"(pos: $BlockPos$$Type, limitEnabled: boolean): $StationEditPacket
public "orDisablingTrain"(before: $Train$$Type, except: $Train$$Type): $Train
public "reserveFor"(train0: $Train$$Type): void
public "runMailTransfer"(): void
public "setLimitEnabled"(limitEnabled: boolean): void
public "trainDeparted"(train0: $Train$$Type): void
get "assembling"(): boolean
set "assembling"(value: boolean)
get "connectedPorts"(): $Map<$BlockPos, $GlobalPackagePort>
set "connectedPorts"(value: $Map$$Type<$BlockPos$$Type, $GlobalPackagePort$$Type>)
get "name"(): string
set "name"(value: string)
get "nearestTrain"(): $WeakReference<$Train>
set "nearestTrain"(value: $WeakReference$$Type<$Train$$Type>)
get "disablingTrain"(): $Train
get "imminentTrain"(): $Train
get "presentTrain"(): $Train
get "limitEnabled"(): boolean
get "stationEnabled"(): boolean
set "limitEnabled"(value: boolean)
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$GuiAccessor" {
import { $SubtitleOverlay } from "packages/net/minecraft/client/gui/components/$SubtitleOverlay"

export interface $GuiAccessor {
"create$getSubtitleOverlay"(): $SubtitleOverlay
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "packages/com/simibubi/create/content/contraptions/minecart/$TrainCargoManager" {
import { $MountedStorageManager } from "packages/com/simibubi/create/content/contraptions/$MountedStorageManager"

export class $TrainCargoManager extends $MountedStorageManager {
constructor()

public "getTicksSinceLastExchange"(): integer
public "getVersion"(): integer
public "resetIdleCargoTracker"(): void
public "tickIdleCargoTracker"(): void
get "ticksSinceLastExchange"(): integer
get "version"(): integer
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour$ProcessingCallback" {
import { $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import { $TransportedItemStackHandlerBehaviour$$Type } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour"
import { $BeltProcessingBehaviour$ProcessingResult } from "packages/com/simibubi/create/content/kinetics/belt/behaviour/$BeltProcessingBehaviour$ProcessingResult"

export interface $BeltProcessingBehaviour$ProcessingCallback {
"apply"(transportedItemStack0: $TransportedItemStack$$Type, transportedItemStackHandlerBehaviour1: $TransportedItemStackHandlerBehaviour$$Type): $BeltProcessingBehaviour$ProcessingResult
}

export namespace $BeltProcessingBehaviour$ProcessingCallback {
const probejs$$marker: never
}
export abstract class $BeltProcessingBehaviour$ProcessingCallback$$Static implements $BeltProcessingBehaviour$ProcessingCallback {
}
}

declare module "packages/com/simibubi/create/content/trains/observer/$TrackObserver" {
import { $SingleBlockEntityEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$SingleBlockEntityEdgePoint"
import { $UUID } from "packages/java/util/$UUID"
import { $FilterItemStack } from "packages/com/simibubi/create/content/logistics/filter/$FilterItemStack"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Train$$Type } from "packages/com/simibubi/create/content/trains/entity/$Train"

export class $TrackObserver extends $SingleBlockEntityEdgePoint {
constructor()

public "getCurrentTrain"(): $UUID
public "getFilter"(): $FilterItemStack
public "isActivated"(): boolean
public "keepAlive"(train0: $Train$$Type): void
public "setFilterAndNotify"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): void
get "currentTrain"(): $UUID
get "filter"(): $FilterItemStack
get "activated"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/gui/$ModularGuiLineBuilder" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Label$$Type } from "packages/com/simibubi/create/foundation/gui/widget/$Label"
import { $SelectionScrollInput$$Type } from "packages/com/simibubi/create/foundation/gui/widget/$SelectionScrollInput"
import { $ModularGuiLine$$Type } from "packages/com/simibubi/create/foundation/gui/$ModularGuiLine"
import { $TooltipArea$$Type } from "packages/com/simibubi/create/foundation/gui/widget/$TooltipArea"
import { $ScrollInput$$Type } from "packages/com/simibubi/create/foundation/gui/widget/$ScrollInput"
import { $EditBox$$Type } from "packages/net/minecraft/client/gui/components/$EditBox"

export class $ModularGuiLineBuilder {
constructor(font0: $Font$$Type, modularGuiLine1: $ModularGuiLine$$Type, int2: integer, int3: integer)

public "addIntegerTextInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$EditBox$$Type, $TooltipArea$$Type>, string3: string): $ModularGuiLineBuilder
public "addScrollInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$ScrollInput$$Type, $Label$$Type>, string3: string): $ModularGuiLineBuilder
public "addSelectionScrollInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$SelectionScrollInput$$Type, $Label$$Type>, string3: string): $ModularGuiLineBuilder
public "addTextInput"(int0: integer, int1: integer, biConsumer2: $BiConsumer$$Type<$EditBox$$Type, $TooltipArea$$Type>, string3: string): $ModularGuiLineBuilder
public "customArea"(int0: integer, int1: integer): $ModularGuiLineBuilder
public "speechBubble"(): $ModularGuiLineBuilder
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$SuspiciousStewItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SuspiciousStewItemAccessor {
}

export namespace $SuspiciousStewItemAccessor {
const probejs$$marker: never
}
export abstract class $SuspiciousStewItemAccessor$$Static implements $SuspiciousStewItemAccessor {
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ITrackBlock } from "packages/com/simibubi/create/content/trains/track/$ITrackBlock"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $AccessorTrackTargetingBehavior } from "packages/com/railwayteam/railways/mixin/$AccessorTrackTargetingBehavior"
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $Direction$AxisDirection$$Type } from "packages/net/minecraft/core/$Direction$AxisDirection"
import { $EdgePointType$$Type } from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import { $BlockEntityBehaviour } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BezierTrackPointLocation$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierTrackPointLocation"
import { $SmartBlockEntity$$Type } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $TrackGraphLocation } from "packages/com/simibubi/create/content/trains/graph/$TrackGraphLocation"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $IPreAssembleCallback } from "packages/com/railwayteam/railways/mixin_interfaces/$IPreAssembleCallback"
import { $TrackEdgePoint } from "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BehaviourType } from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BehaviourType"
import { $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackTargetingBehaviour$RenderedTrackOverlayType"

export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour implements $AccessorTrackTargetingBehavior, $IPreAssembleCallback {
static readonly "TYPE": $BehaviourType<$TrackTargetingBehaviour<any>>

constructor(smartBlockEntity0: $SmartBlockEntity$$Type, edgePointType1: $EdgePointType$$Type<T>)

public "createEdgePoint"(): T
public "determineGraphLocation"(): $TrackGraphLocation
public "getEdgePoint"(): T
public "getGlobalPosition"(): $BlockPos
public "getPositionForMapMarker"(): $BlockPos
public "getTrack"(): $ITrackBlock
public "getTrackBlockState"(): $BlockState
public "hasValidTrack"(): boolean
public "invalidateEdgePoint"(compoundTag0: $CompoundTag$$Type): void
public "isOnCurve"(): boolean
public "railways$preAssemble"(): void
/** Client only, do not use in server scripts */
public static "render"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axisDirection2: $Direction$AxisDirection$$Type, bezierTrackPointLocation3: $BezierTrackPointLocation$$Type, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer, int7: integer, renderedTrackOverlayType8: $TrackTargetingBehaviour$RenderedTrackOverlayType$$Type, float9: float): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
get "edgePoint"(): T
get "globalPosition"(): $BlockPos
get "positionForMapMarker"(): $BlockPos
get "track"(): $ITrackBlock
get "trackBlockState"(): $BlockState
get "onCurve"(): boolean
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeyRenderer" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $BogeyRenderer {
"render"(compoundTag0: $CompoundTag$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, boolean7: boolean): void
}

export namespace $BogeyRenderer {
const probejs$$marker: never
}
export abstract class $BogeyRenderer$$Static implements $BogeyRenderer {
}
}

declare module "packages/com/simibubi/create/content/kinetics/base/$IRotate$SpeedLevel" {
import { $Enum } from "packages/java/lang/$Enum"
import { $LangBuilder } from "packages/net/createmod/catnip/lang/$LangBuilder"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
static readonly "FAST": $IRotate$SpeedLevel
static readonly "MEDIUM": $IRotate$SpeedLevel
static readonly "NONE": $IRotate$SpeedLevel
static readonly "SLOW": $IRotate$SpeedLevel

public "getColor"(): integer
public static "getFormattedSpeedText"(float0: float, boolean1: boolean): $LangBuilder
public "getParticleSpeed"(): integer
public "getSpeedValue"(): float
public "getTextColor"(): $ChatFormatting
public static "of"(float0: float): $IRotate$SpeedLevel
public static "valueOf"(string0: string): $IRotate$SpeedLevel
public static "values"(): $IRotate$SpeedLevel[]
get "color"(): integer
get "particleSpeed"(): integer
get "speedValue"(): float
get "textColor"(): $ChatFormatting
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize" {
import { $Record } from "packages/java/lang/$Record"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BogeySizes$BogeySize extends $Record {
constructor(id: $ResourceLocation$$Type, wheelRadius: float)

public "id"(): $ResourceLocation
public "nextBySize"(): $BogeySizes$BogeySize
public "wheelRadius"(): float
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$SignalBlockEntity$SignalState" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SignalBlockEntity$SignalState extends $Enum<$SignalBlockEntity$SignalState> {
static readonly "GREEN": $SignalBlockEntity$SignalState
static readonly "INVALID": $SignalBlockEntity$SignalState
static readonly "RED": $SignalBlockEntity$SignalState
static readonly "YELLOW": $SignalBlockEntity$SignalState

public "isGreenLight"(float0: float): boolean
public "isRedLight"(float0: float): boolean
public "isYellowLight"(float0: float): boolean
public static "valueOf"(string0: string): $SignalBlockEntity$SignalState
public static "values"(): $SignalBlockEntity$SignalState[]
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$FallingBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FallingBlockEntityAccessor {
}

export namespace $FallingBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $FallingBlockEntityAccessor$$Static implements $FallingBlockEntityAccessor {
}
}

declare module "packages/com/simibubi/create/content/contraptions/render/$ClientContraption$RenderedBlocks" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Record } from "packages/java/lang/$Record"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Iterable, $Iterable$$Type } from "packages/java/lang/$Iterable"

export class $ClientContraption$RenderedBlocks extends $Record {
constructor(lookup: $Function$$Type<$BlockPos$$Type, $BlockState>, positions: $Iterable$$Type<$BlockPos$$Type>)

public "lookup"(): $Function<$BlockPos, $BlockState>
public "positions"(): $Iterable<$BlockPos>
}
}

declare module "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Record } from "packages/java/lang/$Record"
import { $SequencerInstructions, $SequencerInstructions$$Type } from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencerInstructions"

export class $SequencedGearshiftBlockEntity$SequenceContext extends $Record {
constructor(instruction: $SequencerInstructions$$Type, relativeValue: double)

public static "fromGearshift"(sequencerInstructions0: $SequencerInstructions$$Type, double1: double, int2: integer): $SequencedGearshiftBlockEntity$SequenceContext
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $SequencedGearshiftBlockEntity$SequenceContext
public "getEffectiveValue"(double0: double): double
public "instruction"(): $SequencerInstructions
public "relativeValue"(): double
public "serializeNBT"(): $CompoundTag
}
}

declare module "packages/com/simibubi/create/content/kinetics/belt/behaviour/$TransportedItemStackHandlerBehaviour$PositionGetter" {
import { $TransportedItemStack$$Type } from "packages/com/simibubi/create/content/kinetics/belt/transport/$TransportedItemStack"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"

export interface $TransportedItemStackHandlerBehaviour$PositionGetter {
"getWorldPositionVector"(transportedItemStack0: $TransportedItemStack$$Type): $Vec3
}

export namespace $TransportedItemStackHandlerBehaviour$PositionGetter {
const probejs$$marker: never
}
export abstract class $TransportedItemStackHandlerBehaviour$PositionGetter$$Static implements $TransportedItemStackHandlerBehaviour$PositionGetter {
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$MobEffectInstanceAccessor" {
import { $MobEffectInstance } from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $MobEffectInstanceAccessor {
"create$getHiddenEffect"(): $MobEffectInstance
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
export abstract class $MobEffectInstanceAccessor$$Static implements $MobEffectInstanceAccessor {
}
}

declare module "packages/com/simibubi/create/content/logistics/filter/$FilterItemStack" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $FluidStack, $FluidStack$$Type } from "packages/net/minecraftforge/fluids/$FluidStack"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterItemStack {
public static "empty"(): $FilterItemStack
public "fluid"(level0: $Level$$Type): $FluidStack
public "isEmpty"(): boolean
public "isFilterItem"(): boolean
public "item"(): $ItemStack
public static "of"(itemStack0: $ItemStack$$Type): $FilterItemStack
public static "of"(compoundTag0: $CompoundTag$$Type): $FilterItemStack
public "serializeNBT"(): $CompoundTag
public "test"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): boolean
public "test"(level0: $Level$$Type, fluidStack1: $FluidStack$$Type): boolean
public "test"(level0: $Level$$Type, fluidStack1: $FluidStack$$Type, boolean2: boolean): boolean
public "test"(level0: $Level$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
get "filterItem"(): boolean
}
}

declare module "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollValueBehaviour$StepContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ScrollValueBehaviour$StepContext {
constructor()

get "control"(): boolean
set "control"(value: boolean)
get "currentValue"(): integer
set "currentValue"(value: integer)
get "forward"(): boolean
set "forward"(value: boolean)
get "shift"(): boolean
set "shift"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/trains/track/$TrackBlockEntity" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $TransformableBlockEntity } from "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlockEntity"
import { $Pair, $Pair$$Type } from "packages/net/createmod/catnip/data/$Pair"
import { $StructureTransform$$Type } from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import { $IHasTrackCasing } from "packages/com/railwayteam/railways/mixin_interfaces/$IHasTrackCasing"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $BezierConnection, $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"
import { $SmartBlockEntity } from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $TrackBlockEntityTilt, $TrackBlockEntityTilt$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackBlockEntityTilt"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $SlabBlock, $SlabBlock$$Type } from "packages/net/minecraft/world/level/block/$SlabBlock"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $IMergeableBE } from "packages/com/simibubi/create/foundation/blockEntity/$IMergeableBE"
import { $Map } from "packages/java/util/$Map"

export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE, $IHasTrackCasing {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "accept"(blockEntity0: $BlockEntity$$Type): void
public "addConnection"(bezierConnection0: $BezierConnection$$Type): void
public "bind"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getConnections"(): $Map<$BlockPos, $BezierConnection>
public "getTrackCasing"(): $SlabBlock
public static "getTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type): $SlabBlock
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasInteractableConnections"(): boolean
public "isAlternate"(): boolean
public static "isAlternate"(world: $Level$$Type, pos: $BlockPos$$Type): boolean
public "isTilted"(): boolean
public "manageFakeTracksAlong"(bezierConnection0: $BezierConnection$$Type, boolean1: boolean): void
public "onLoad"(): void
public "removeConnection"(blockPos0: $BlockPos$$Type): void
public "removeInboundConnections"(boolean0: boolean): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAlternate"(alternate: boolean): void
public static "setAlternateModel"(world: $Level$$Type, pos: $BlockPos$$Type, useAlternateModel: boolean): boolean
public "setTrackCasing"(trackCasing: $SlabBlock$$Type): void
public static "setTrackCasing"(world: $Level$$Type, pos: $BlockPos$$Type, trackCasing: $SlabBlock$$Type): void
public "transform"(blockEntity0: $BlockEntity$$Type, structureTransform1: $StructureTransform$$Type): void
public "validateConnections"(): void
get "boundLocation"(): $Pair<$ResourceKey<$Level>, $BlockPos>
set "boundLocation"(value: $Pair$$Type<$ResourceKey$$Type<$Level$$Type>, $BlockPos$$Type>)
get "tilt"(): $TrackBlockEntityTilt
set "tilt"(value: $TrackBlockEntityTilt$$Type)
get "connections"(): $Map<$BlockPos, $BezierConnection>
get "trackCasing"(): $SlabBlock
get "alternate"(): boolean
get "tilted"(): boolean
set "alternate"(value: boolean)
set "trackCasing"(value: $SlabBlock$$Type)
}
}

declare module "packages/com/simibubi/create/api/schematic/nbt/$PartialSafeNBT" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $PartialSafeNBT {
"writeSafe"(compoundTag0: $CompoundTag$$Type): void
}

export namespace $PartialSafeNBT {
const probejs$$marker: never
}
export abstract class $PartialSafeNBT$$Static implements $PartialSafeNBT {
}
}

declare module "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $IBE } from "packages/com/simibubi/create/foundation/block/$IBE"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $AbstractBogeyBlockEntity, $AbstractBogeyBlockEntity$$Type } from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlockEntity"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockEntityType, $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BogeyStyle, $BogeyStyle$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeyStyle"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $EnumSet } from "packages/java/util/$EnumSet"
import { $Enchantment } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Direction$Axis } from "packages/net/minecraft/core/$Direction$Axis"
import { $Optional } from "packages/java/util/$Optional"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $TrackMaterial$TrackType } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial$TrackType"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $ProperWaterloggedBlock } from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $SpecialBlockItemRequirement } from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import { $Carriage$$Type } from "packages/com/simibubi/create/content/trains/entity/$Carriage"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $ItemRequirement } from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Class } from "packages/java/lang/$Class"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $IWrenchable } from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $Set } from "packages/java/util/$Set"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $BogeySizes$BogeySize, $BogeySizes$BogeySize$$Type } from "packages/com/simibubi/create/content/trains/bogey/$BogeySizes$BogeySize"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $AbstractBogeyBlock<T extends $AbstractBogeyBlockEntity> extends $Block implements $IBE<T>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement, $IWrenchable {
static readonly "AXIS": $EnumProperty<$Direction$Axis>

constructor(properties0: $BlockBehaviour$Properties$$Type, bogeySize1: $BogeySizes$BogeySize$$Type)

public "addLandingEffects"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, livingEntity4: $LivingEntity$$Type, int5: integer): boolean
public "addRunningEffects"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "allowsSingleBogeyCarriage"(): boolean
public "allowsTreasure"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "arch$holder"(): $Holder<$Block>
public "arch$registryName"(): $ResourceLocation
public "canBeHydrated"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type, blockPos4: $BlockPos$$Type): boolean
public "canBeUpsideDown"(): boolean
public "canConnectRedstone"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "canDropFromExplosion"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): boolean
public "canEntityDestroy"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "canHarvestBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canPlaceLiquid"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluid3: $Fluid$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "captureBlockEntityForTrain"(): boolean
public "collisionExtendsVertically"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "fluidState"(blockState0: $BlockState$$Type): $FluidState
public "getAdjacentBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type, blockPathTypes4: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, blockState4: $BlockState$$Type, blockPos5: $BlockPos$$Type): $BlockState
public "getArcanaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getBeaconColorMultiplier"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): float[]
public "getBedDirection"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Direction
public "getBlacklistedEnchantments"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): $Set<$Enchantment>
public "getBlockEntity"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): T
public "getBlockEntityClass"(): $Class<T>
public "getBlockEntityOptional"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Optional<T>
public "getBlockEntityType"(): $BlockEntityType<T>
public "getBlockPathType"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mob3: $Mob$$Type): $BlockPathTypes
public "getBlockStates"(): $List<$BlockState>
public "getBogeyUpDirection"(): $Direction
public "getBonusClues"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): integer
public "getCloneItemStack"(blockState0: $BlockState$$Type, hitResult1: $HitResult$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type, player4: $Player$$Type): $ItemStack
public "getConnectorAnchorOffset"(boolean0: boolean): $Vec3
public "getDefaultStyle"(): $BogeyStyle
public "getEnchantPowerBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getExpDrop"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): integer
public "getExplosionResistance"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFlammability"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getFriction"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): float
public "getLightEmission"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getListener"<T extends $BlockEntity>(serverLevel0: $ServerLevel$$Type, t1: T): $GameEventListener
public "getMapColor"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, mapColor3: $MapColor$$Type): $MapColor
public "getMatchingBogey"(direction0: $Direction$$Type, boolean1: boolean): $BlockState
public "getMaxEnchantingPower"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getMod"(): string
public "getNextSize"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getNextSize"(abstractBogeyBlockEntity0: $AbstractBogeyBlockEntity$$Type): $BlockState
public "getNextStyle"(bogeyStyle0: $BogeyStyle$$Type): $BogeyStyle
public "getNextStyle"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $BogeyStyle
public "getPickupSound"(): $Optional<$SoundEvent>
public "getPickupSound"(blockState0: $BlockState$$Type): $Optional<$SoundEvent>
public "getPistonPushReaction"(blockState0: $BlockState$$Type): $PushReaction
public "getQuantaBonus"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getQuantaRectification"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): float
public "getRequiredItems"(blockState0: $BlockState$$Type, blockEntity1: $BlockEntity$$Type): $ItemRequirement
public "getRespawnPosition"(blockState0: $BlockState$$Type, entityType1: $EntityType$$Type<any>, levelReader2: $LevelReader$$Type, blockPos3: $BlockPos$$Type, float4: float, livingEntity5: $LivingEntity$$Type): $Optional<$Vec3>
public "getRotatedBlockState"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): $BlockState
public "getSize"(): $BogeySizes$BogeySize
public "getSoundType"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, vec33: $Vec3$$Type): $BlockState
public "getStateOfSize"(abstractBogeyBlockEntity0: $AbstractBogeyBlockEntity$$Type, bogeySize1: $BogeySizes$BogeySize$$Type): $BlockState
public "getStickySurfaces"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $EnumSet<$Direction>
public "getTableParticle"(blockState0: $BlockState$$Type): $ParticleOptions
public "getTicker"<S extends $BlockEntity>(level0: $Level$$Type, blockState1: $BlockState$$Type, blockEntityType2: $BlockEntityType$$Type<S>): $BlockEntityTicker<S>
public "getToolModifiedState"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type, toolAction2: $ToolAction$$Type, boolean3: boolean): $BlockState
public "getTrackType"(bogeyStyle0: $BogeyStyle$$Type): $TrackMaterial$TrackType
public "getValidPathfindingTypes"(bogeyStyle0: $BogeyStyle$$Type): $Set<$TrackMaterial$TrackType>
public "getVersion"(blockState0: $BlockState$$Type, boolean1: boolean): $BlockState
public "getWeakChanges"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "getWheelPointSpacing"(): double
public "getWheelRadius"(): double
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
public "isBed"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): boolean
public "isBurning"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isConduitFrame"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isFertile"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFireSource"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isFlammable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "isLadder"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isOnIncompatibleTrack"(carriage0: $Carriage$$Type, boolean1: boolean): boolean
public "isPortalFrame"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isScaffolding"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "isSlimeBlock"(blockState0: $BlockState$$Type): boolean
public "isStickyBlock"(blockState0: $BlockState$$Type): boolean
public "isTrackAxisAlongFirstCoordinate"(blockState0: $BlockState$$Type): boolean
public "isUpsideDown"(blockState0: $BlockState$$Type): boolean
public "isValidSpawn"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, type3: $SpawnPlacements$Type$$Type, entityType4: $EntityType$$Type<any>): boolean
public "makesOpenTrapdoorAboveClimbable"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): boolean
public "newBlockEntity"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): $BlockEntity
public "onBlockEntityUse"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, function2: $Function$$Type<T, $InteractionResult>): $InteractionResult
public "onBlockExploded"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, explosion3: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): void
public "onCaughtFire"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type, livingEntity4: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, boolean4: boolean, fluidState5: $FluidState$$Type): boolean
public "onNeighborChange"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type): void
public static "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "onSneakWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onTreeGrow"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, biConsumer2: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource3: $RandomSource$$Type, blockPos4: $BlockPos$$Type, treeConfiguration5: $TreeConfiguration$$Type): boolean
public "onWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "pickupBlock"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): $ItemStack
public "placeLiquid"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, fluidState3: $FluidState$$Type): boolean
public static "playRemoveSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public static "playRotateSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): void
public "propertiesToCopy"(): $List<$Property<any>>
public static "registerStandardBogey"(resourceLocation0: $ResourceLocation$$Type): void
public "rotate"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, rotation3: $Rotation$$Type): $BlockState
public "setBedOccupied"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, livingEntity3: $LivingEntity$$Type, boolean4: boolean): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setRequiresTool"(v: boolean): void
public "shouldCheckWeakPower"(blockState0: $BlockState$$Type, signalGetter1: $SignalGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, fluidState3: $FluidState$$Type): boolean
public "spawnTableParticle"(blockState0: $BlockState$$Type, level1: $Level$$Type, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): void
public "supportsExternalFaceHiding"(blockState0: $BlockState$$Type): boolean
public "updateAfterWrenched"(blockState0: $BlockState$$Type, useOnContext1: $UseOnContext$$Type): $BlockState
public "updateWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): void
public "withBlockEntityDo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, consumer2: $Consumer$$Type<T>): void
public static "withWater"(levelAccessor0: $LevelAccessor$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "withWater"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): $BlockState
get "size"(): $BogeySizes$BogeySize
set "size"(value: $BogeySizes$BogeySize$$Type)
get "blockEntityClass"(): $Class<T>
get "blockEntityType"(): $BlockEntityType<T>
get "blockStates"(): $List<$BlockState>
get "bogeyUpDirection"(): $Direction
get "defaultStyle"(): $BogeyStyle
get "mod"(): string
get "pickupSound"(): $Optional<$SoundEvent>
get "wheelPointSpacing"(): double
get "wheelRadius"(): double
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "requiresTool"(value: boolean)
}
}

declare module "packages/com/simibubi/create/content/trains/track/$BezierConnection$Segment" {
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $BezierConnection$Segment {
constructor()

get "derivative"(): $Vec3
set "derivative"(value: $Vec3$$Type)
get "faceNormal"(): $Vec3
set "faceNormal"(value: $Vec3$$Type)
get "index"(): integer
set "index"(value: integer)
get "normal"(): $Vec3
set "normal"(value: $Vec3$$Type)
get "position"(): $Vec3
set "position"(value: $Vec3$$Type)
}
}

declare module "packages/com/simibubi/create/content/trains/signal/$TrackEdgePoint" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $EdgePointType, $EdgePointType$$Type } from "packages/com/simibubi/create/content/trains/graph/$EdgePointType"
import { $TrackGraph$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"
import { $DimensionPalette$$Type } from "packages/com/simibubi/create/content/trains/graph/$DimensionPalette"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $TrackNode$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNode"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $TrackNodeLocation, $TrackNodeLocation$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $TrackEdge$$Type } from "packages/com/simibubi/create/content/trains/graph/$TrackEdge"
import { $Couple, $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $TrackEdgePoint {
constructor()

public "blockEntityAdded"(blockEntity0: $BlockEntity$$Type, boolean1: boolean): void
public "blockEntityRemoved"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public "canCoexistWith"(edgePointType0: $EdgePointType$$Type<any>, boolean1: boolean): boolean
public "canMerge"(): boolean
public "canNavigateVia"(trackNode0: $TrackNode$$Type): boolean
public "getId"(): $UUID
public "getLocationOn"(trackEdge0: $TrackEdge$$Type): double
public "getType"(): $EdgePointType<any>
public "invalidate"(levelAccessor0: $LevelAccessor$$Type): void
public "isPrimary"(trackNode0: $TrackNode$$Type): boolean
public "onRemoved"(trackGraph0: $TrackGraph$$Type): void
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "read"(compoundTag0: $CompoundTag$$Type, boolean1: boolean, dimensionPalette2: $DimensionPalette$$Type): void
public "setId"(uUID0: $UUID$$Type): void
public "setLocation"(couple0: $Couple$$Type<$TrackNodeLocation$$Type>, double1: double): void
public "setType"(edgePointType0: $EdgePointType$$Type<any>): void
public "tick"(trackGraph0: $TrackGraph$$Type, boolean1: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dimensionPalette1: $DimensionPalette$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type, dimensionPalette1: $DimensionPalette$$Type): void
get "edgeLocation"(): $Couple<$TrackNodeLocation>
set "edgeLocation"(value: $Couple$$Type<$TrackNodeLocation$$Type>)
get "id"(): $UUID
set "id"(value: $UUID$$Type)
get "position"(): double
set "position"(value: double)
get "type"(): $EdgePointType<any>
set "type"(value: $EdgePointType$$Type<any>)
}
}

declare module "packages/com/simibubi/create/foundation/mixin/accessor/$StateHolderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateHolderAccessor<O, S> {
"getOwner"(): O
get "owner"(): O
}

export namespace $StateHolderAccessor {
const probejs$$marker: never
}
export abstract class $StateHolderAccessor$$Static<O, S> implements $StateHolderAccessor<O, S> {
}
}

declare module "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation$DiscoveredLocation" {
import { $TrackMaterial$$Type } from "packages/com/simibubi/create/content/trains/track/$TrackMaterial"
import { $TrackNodeLocation } from "packages/com/simibubi/create/content/trains/graph/$TrackNodeLocation"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BezierConnection, $BezierConnection$$Type } from "packages/com/simibubi/create/content/trains/track/$BezierConnection"

export class $TrackNodeLocation$DiscoveredLocation extends $TrackNodeLocation {
constructor(level0: $Level$$Type, vec31: $Vec3$$Type)
constructor(resourceKey0: $ResourceKey$$Type<$Level>, vec31: $Vec3$$Type)
constructor(level0: $Level$$Type, double1: double, double2: double, double3: double)

public "connectedViaTurn"(): boolean
public "differentMaterials"(): boolean
public "forceNode"(): $TrackNodeLocation$DiscoveredLocation
public "getDirection"(): $Vec3
public "getTurn"(): $BezierConnection
public "materialA"(trackMaterial0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "materialB"(trackMaterial0: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "materials"(trackMaterial0: $TrackMaterial$$Type, trackMaterial1: $TrackMaterial$$Type): $TrackNodeLocation$DiscoveredLocation
public "notInLineWith"(vec30: $Vec3$$Type): boolean
public "shouldForceNode"(): boolean
public "viaTurn"(bezierConnection0: $BezierConnection$$Type): $TrackNodeLocation$DiscoveredLocation
public "withDirection"(vec30: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "withNormal"(vec30: $Vec3$$Type): $TrackNodeLocation$DiscoveredLocation
public "withYOffset"(int0: integer): $TrackNodeLocation$DiscoveredLocation
get "direction"(): $Vec3
get "turn"(): $BezierConnection
}
}

declare module "packages/com/simibubi/create/api/equipment/goggles/$IHaveCustomOverlayIcon" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IHaveCustomOverlayIcon {
"getIcon"(boolean0: boolean): $ItemStack
}

export namespace $IHaveCustomOverlayIcon {
const probejs$$marker: never
}
export abstract class $IHaveCustomOverlayIcon$$Static implements $IHaveCustomOverlayIcon {
}
}

declare module "packages/com/simibubi/create/api/contraption/$ContraptionType" {
import { $Contraption } from "packages/com/simibubi/create/content/contraptions/$Contraption"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export class $ContraptionType {
readonly "factory": $Supplier<$Contraption>
readonly "holder": $Holder$Reference<$ContraptionType>

constructor(supplier0: $Supplier$$Type<$Contraption>)

public static "fromType"(string0: string): $Contraption
public "is"(tagKey0: $TagKey$$Type<$ContraptionType$$Type>): boolean
}
}

