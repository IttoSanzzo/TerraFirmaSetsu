declare module "packages/net/minecraft/world/level/block/state/properties/$PistonType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PistonType$$Type = ($PistonType | ("default" | "sticky"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PistonType_ = $PistonType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$WoodType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WoodType$$Type = ($WoodType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WoodType_ = $WoodType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$StairsShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StairsShape$$Type = ($StairsShape | ("straight" | "inner_left" | "inner_right" | "outer_left" | "outer_right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StairsShape_ = $StairsShape$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Tilt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Tilt$$Type = ($Tilt | ("none" | "unstable" | "partial" | "full"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Tilt_ = $Tilt$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$StateDefinition" {
import { $StateHolder, $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StateDefinition$$Type<O, S extends $StateHolder<O, S>> = ($StateDefinition<O, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StateDefinition_<O, S extends $StateHolder<O, S>> = $StateDefinition$$Type<O, S>;
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockPattern$BlockPatternMatch" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPattern$BlockPatternMatch$$Type = ($BlockPattern$BlockPatternMatch);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPattern$BlockPatternMatch_ = $BlockPattern$BlockPatternMatch$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DripstoneThickness" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DripstoneThickness$$Type = ($DripstoneThickness | ("tip_merge" | "tip" | "frustum" | "middle" | "base"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DripstoneThickness_ = $DripstoneThickness$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BambooLeaves" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BambooLeaves$$Type = ($BambooLeaves | ("none" | "small" | "large"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BambooLeaves_ = $BambooLeaves$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Property$Value" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Property$Value$$Type<T extends $Comparable<T>> = ($Property$Value<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Property$Value_<T extends $Comparable<T>> = $Property$Value$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$Properties$$Type = ($BlockBehaviour$Properties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$Properties_ = $BlockBehaviour$Properties$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$EnumProperty" {
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnumProperty$$Type<T extends ($Enum<T> & $StringRepresentable)> = ($EnumProperty<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnumProperty_<T extends ($Enum<T> & $StringRepresentable)> = $EnumProperty$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleBlockHalf$$Type = ($DoubleBlockHalf | ("upper" | "lower"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleBlockHalf_ = $DoubleBlockHalf$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Half" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Half$$Type = ($Half | ("top" | "bottom"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Half_ = $Half$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate" {
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$StateArgumentPredicate$$Type<A> = ($BlockBehaviour$StateArgumentPredicate<A> | ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$StateArgumentPredicate_<A> = $BlockBehaviour$StateArgumentPredicate$$Type<A>;
}
}

declare module "packages/net/minecraft/world/level/block/state/$StateHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StateHolder$$Type<O, S> = ($StateHolder<O, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StateHolder_<O, S> = $StateHolder$$Type<O, S>;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockState$$Type = ($BlockState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockState_ = $BlockState$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$RedstoneSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RedstoneSide$$Type = ($RedstoneSide | ("up" | "side" | "none"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RedstoneSide_ = $RedstoneSide$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$SlabType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SlabType$$Type = ($SlabType | ("top" | "bottom" | "double"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SlabType_ = $SlabType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BedPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BedPart$$Type = ($BedPart | ("head" | "foot"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BedPart_ = $BedPart$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BooleanProperty$$Type = ($BooleanProperty);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BooleanProperty_ = $BooleanProperty$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Property" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Property$$Type<T extends $Comparable<T>> = ($Property<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Property_<T extends $Comparable<T>> = $Property$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$AttachFace" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttachFace$$Type = ($AttachFace | ("floor" | "wall" | "ceiling"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttachFace_ = $AttachFace$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$SculkSensorPhase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SculkSensorPhase$$Type = ($SculkSensorPhase | ("inactive" | "active" | "cooldown"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SculkSensorPhase_ = $SculkSensorPhase$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$$Type = ($BlockBehaviour);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour_ = $BlockBehaviour$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockInWorld$$Type = ($BlockInWorld);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockInWorld_ = $BlockInWorld$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetFunction" {
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$OffsetFunction$$Type = ($BlockBehaviour$OffsetFunction | ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$OffsetFunction_ = $BlockBehaviour$OffsetFunction$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockPattern" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPattern$$Type = ($BlockPattern);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPattern_ = $BlockPattern$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoteBlockInstrument$$Type = ($NoteBlockInstrument | ("harp" | "basedrum" | "snare" | "hat" | "bass" | "flute" | "bell" | "guitar" | "chime" | "xylophone" | "iron_xylophone" | "cow_bell" | "didgeridoo" | "bit" | "banjo" | "pling" | "zombie" | "skeleton" | "creeper" | "dragon" | "wither_skeleton" | "piglin" | "custom_head"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoteBlockInstrument_ = $NoteBlockInstrument$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$BlockStateBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$BlockStateBase$$Type = ($BlockBehaviour$BlockStateBase);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$BlockStateBase_ = $BlockBehaviour$BlockStateBase$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate" {
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$StatePredicate$$Type = ($BlockBehaviour$StatePredicate | ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$StatePredicate_ = $BlockBehaviour$StatePredicate$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BlockSetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockSetType$$Type = ($BlockSetType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockSetType_ = $BlockSetType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoorHingeSide$$Type = ($DoorHingeSide | ("left" | "right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoorHingeSide_ = $DoorHingeSide$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntegerProperty$$Type = ($IntegerProperty);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntegerProperty_ = $IntegerProperty$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$RailShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RailShape$$Type = ($RailShape | ("north_south" | "east_west" | "ascending_east" | "ascending_west" | "ascending_north" | "ascending_south" | "south_east" | "south_west" | "north_west" | "north_east"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RailShape_ = $RailShape$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBehaviour$OffsetType$$Type = ($BlockBehaviour$OffsetType | ("none" | "xz" | "xyz"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBehaviour$OffsetType_ = $BlockBehaviour$OffsetType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$ChestType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChestType$$Type = ($ChestType | ("single" | "left" | "right"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChestType_ = $ChestType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$WallSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WallSide$$Type = ($WallSide | ("none" | "low" | "tall"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WallSide_ = $WallSide$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BellAttachType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BellAttachType$$Type = ($BellAttachType | ("floor" | "ceiling" | "single_wall" | "double_wall"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BellAttachType_ = $BellAttachType$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectionProperty$$Type = ($DirectionProperty);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectionProperty_ = $DirectionProperty$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$ComparatorMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ComparatorMode$$Type = ($ComparatorMode | ("compare" | "subtract"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ComparatorMode_ = $ComparatorMode$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$StructureMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StructureMode$$Type = ($StructureMode | ("save" | "load" | "corner" | "data"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StructureMode_ = $StructureMode$$Type;
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockStateProperties$$Type = ($BlockStateProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockStateProperties_ = $BlockStateProperties$$Type;
}
}

