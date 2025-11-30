declare module "packages/net/minecraft/world/level/block/state/properties/$PistonType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $PistonType extends $Enum<$PistonType> implements $StringRepresentable {
static readonly "DEFAULT": $PistonType
static readonly "STICKY": $PistonType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $PistonType
public static "values"(): $PistonType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$WoodType" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Record } from "packages/java/lang/$Record"
import { $SoundType, $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $BlockSetType, $BlockSetType$$Type } from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $WoodType extends $Record {
static readonly "ACACIA": $WoodType
static readonly "BAMBOO": $WoodType
static readonly "BIRCH": $WoodType
static readonly "CHERRY": $WoodType
static readonly "CRIMSON": $WoodType
static readonly "DARK_OAK": $WoodType
static readonly "JUNGLE": $WoodType
static readonly "MANGROVE": $WoodType
static readonly "OAK": $WoodType
static readonly "SPRUCE": $WoodType
static readonly "WARPED": $WoodType

constructor(string0: string, blockSetType1: $BlockSetType$$Type)
constructor(string0: string, blockSetType1: $BlockSetType$$Type, soundType2: $SoundType$$Type, soundType3: $SoundType$$Type, soundEvent4: $SoundEvent$$Type, soundEvent5: $SoundEvent$$Type)

public "fenceGateClose"(): $SoundEvent
public "fenceGateOpen"(): $SoundEvent
public "hangingSignSoundType"(): $SoundType
public "name"(): string
public static "register"(woodType0: $WoodType$$Type): $WoodType
public "setType"(): $BlockSetType
public "soundType"(): $SoundType
public static "values"(): $Stream<$WoodType>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$StairsShape" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $StairsShape extends $Enum<$StairsShape> implements $StringRepresentable {
static readonly "INNER_LEFT": $StairsShape
static readonly "INNER_RIGHT": $StairsShape
static readonly "OUTER_LEFT": $StairsShape
static readonly "OUTER_RIGHT": $StairsShape
static readonly "STRAIGHT": $StairsShape

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StairsShape
public static "values"(): $StairsShape[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Tilt" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Tilt extends $Enum<$Tilt> implements $StringRepresentable {
static readonly "FULL": $Tilt
static readonly "NONE": $Tilt
static readonly "PARTIAL": $Tilt
static readonly "UNSTABLE": $Tilt

public "causesVibration"(): boolean
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Tilt
public static "values"(): $Tilt[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/$StateDefinition" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $Collection } from "packages/java/util/$Collection"
import { $StateHolder, $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $StateDefinition<O, S extends $StateHolder<O, S>> {
public "any"(): S
public static "appendPropertyCodec"<S extends $StateHolder<any, S>, T extends $Comparable<T>>(mapCodec0: $MapCodec$$Type<S>, supplier1: $Supplier$$Type<S>, string2: string, property3: $Property$$Type<T>): $MapCodec<S>
public "getOwner"(): O
public "getPossibleStates"(): $ImmutableList<S>
public "getProperties"(): $Collection<$Property<any>>
public "getProperty"(string0: string): $Property<any>
get "owner"(): O
set "owner"(value: O)
get "possibleStates"(): $ImmutableList<S>
get "properties"(): $Collection<$Property<any>>
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockPattern$BlockPatternMatch" {
import { $BlockInWorld, $BlockInWorld$$Type } from "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LoadingCache$$Type } from "packages/com/google/common/cache/$LoadingCache"

export class $BlockPattern$BlockPatternMatch {
constructor(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type, loadingCache3: $LoadingCache$$Type<$BlockPos$$Type, $BlockInWorld$$Type>, int4: integer, int5: integer, int6: integer)

public "getBlock"(int0: integer, int1: integer, int2: integer): $BlockInWorld
public "getDepth"(): integer
public "getForwards"(): $Direction
public "getFrontTopLeft"(): $BlockPos
public "getHeight"(): integer
public "getUp"(): $Direction
public "getWidth"(): integer
get "depth"(): integer
get "forwards"(): $Direction
get "frontTopLeft"(): $BlockPos
get "height"(): integer
get "up"(): $Direction
get "width"(): integer
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DripstoneThickness" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DripstoneThickness extends $Enum<$DripstoneThickness> implements $StringRepresentable {
static readonly "BASE": $DripstoneThickness
static readonly "FRUSTUM": $DripstoneThickness
static readonly "MIDDLE": $DripstoneThickness
static readonly "TIP": $DripstoneThickness
static readonly "TIP_MERGE": $DripstoneThickness

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DripstoneThickness
public static "values"(): $DripstoneThickness[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BambooLeaves" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $BambooLeaves extends $Enum<$BambooLeaves> implements $StringRepresentable {
static readonly "LARGE": $BambooLeaves
static readonly "NONE": $BambooLeaves
static readonly "SMALL": $BambooLeaves

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BambooLeaves
public static "values"(): $BambooLeaves[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Property$Value" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Record } from "packages/java/lang/$Record"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $Property$Value<T extends $Comparable<T>> extends $Record {
constructor(property0: $Property$$Type<T>, t1: T)

public "property"(): $Property<T>
public "value"(): T
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties" {
import { $ToIntFunction, $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $BlockBehaviour$OffsetType$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType"
import { $MapColor, $MapColor$$Type } from "packages/net/minecraft/world/level/material/$MapColor"
import { $NoteBlockInstrument, $NoteBlockInstrument$$Type } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PushReaction, $PushReaction$$Type } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetFunction"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockBehaviour$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour"
import { $DyeColor$$Type } from "packages/net/minecraft/world/item/$DyeColor"
import { $SoundType, $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate"
import { $BlockPropertiesAccessor } from "packages/vazkii/botania/mixin/$BlockPropertiesAccessor"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPropertiesAccessor as $BlockPropertiesAccessor$0 } from "packages/com/supermartijn642/core/mixin/$BlockPropertiesAccessor"
import { $FeatureFlag$$Type } from "packages/net/minecraft/world/flag/$FeatureFlag"
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$StateArgumentPredicate$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate"

export class $BlockBehaviour$Properties implements $BlockPropertiesAccessor$0, $BlockPropertiesAccessor {
"destroyTime": float
"dynamicShape": boolean
"emissiveRendering": $BlockBehaviour$StatePredicate
"explosionResistance": float
/** @deprecated */
"forceSolidOff": boolean
"forceSolidOn": boolean
"friction": float
"hasPostProcess": $BlockBehaviour$StatePredicate
"ignitedByLava": boolean
"instrument": $NoteBlockInstrument
"isRedstoneConductor": $BlockBehaviour$StatePredicate
"isSuffocating": $BlockBehaviour$StatePredicate
"isValidSpawn": $BlockBehaviour$StateArgumentPredicate<$EntityType<any>>
"isViewBlocking": $BlockBehaviour$StatePredicate
"jumpFactor": float
/** @deprecated */
"liquid": boolean
"mapColor": $Function<$BlockState, $MapColor>
"pushReaction": $PushReaction
"replaceable": boolean
"requiredFeatures": $FeatureFlagSet
"requiresCorrectToolForDrops": boolean
"speedFactor": float

constructor()

public "air"(): $BlockBehaviour$Properties
public static "copy"(blockBehaviour0: $BlockBehaviour$$Type): $BlockBehaviour$Properties
public "destroyTime"(float0: float): $BlockBehaviour$Properties
/** @deprecated */
public "dropsLike"(block0: $Block$$Type): $BlockBehaviour$Properties
public "dynamicShape"(): $BlockBehaviour$Properties
public "emissiveRendering"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "explosionResistance"(float0: float): $BlockBehaviour$Properties
/** @deprecated */
public "forceSolidOff"(): $BlockBehaviour$Properties
public "forceSolidOn"(): $BlockBehaviour$Properties
public "friction"(float0: float): $BlockBehaviour$Properties
public "hasPostProcess"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "ignitedByLava"(): $BlockBehaviour$Properties
public "instabreak"(): $BlockBehaviour$Properties
public "instrument"(noteBlockInstrument0: $NoteBlockInstrument$$Type): $BlockBehaviour$Properties
public "isRedstoneConductor"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "isSuffocating"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "isValidSpawn"(stateArgumentPredicate0: $BlockBehaviour$StateArgumentPredicate$$Type<$EntityType$$Type<any>>): $BlockBehaviour$Properties
public "isViewBlocking"(statePredicate0: $BlockBehaviour$StatePredicate$$Type): $BlockBehaviour$Properties
public "jumpFactor"(float0: float): $BlockBehaviour$Properties
public "lightLevel"(toIntFunction0: $ToIntFunction$$Type<$BlockState$$Type>): $BlockBehaviour$Properties
public "liquid"(): $BlockBehaviour$Properties
public "lootFrom"(supplier0: $Supplier$$Type<$Block>): $BlockBehaviour$Properties
public "mapColor"(function0: $Function$$Type<$BlockState$$Type, $MapColor>): $BlockBehaviour$Properties
public "mapColor"(dyeColor0: $DyeColor$$Type): $BlockBehaviour$Properties
public "mapColor"(mapColor0: $MapColor$$Type): $BlockBehaviour$Properties
public "noCollission"(): $BlockBehaviour$Properties
public "noLootTable"(): $BlockBehaviour$Properties
public "noOcclusion"(): $BlockBehaviour$Properties
public "noParticlesOnBreak"(): $BlockBehaviour$Properties
public static "of"(): $BlockBehaviour$Properties
public "offsetType"(offsetType0: $BlockBehaviour$OffsetType$$Type): $BlockBehaviour$Properties
public "pushReaction"(pushReaction0: $PushReaction$$Type): $BlockBehaviour$Properties
public "randomTicks"(): $BlockBehaviour$Properties
public "replaceable"(): $BlockBehaviour$Properties
public "requiredFeatures"(...featureFlag0s: $FeatureFlag$$Type[]): $BlockBehaviour$Properties
public "requiresCorrectToolForDrops"(): $BlockBehaviour$Properties
public "sound"(soundType0: $SoundType$$Type): $BlockBehaviour$Properties
public "speedFactor"(float0: float): $BlockBehaviour$Properties
public "strength"(float0: float): $BlockBehaviour$Properties
public "strength"(float0: float, float1: float): $BlockBehaviour$Properties
get "canOcclude"(): boolean
set "canOcclude"(value: boolean)
get "drops"(): $ResourceLocation
set "drops"(value: $ResourceLocation$$Type)
get "hasCollision"(): boolean
set "hasCollision"(value: boolean)
get "isAir"(): boolean
set "isAir"(value: boolean)
get "isRandomlyTicking"(): boolean
set "isRandomlyTicking"(value: boolean)
get "lightEmission"(): $ToIntFunction<$BlockState>
set "lightEmission"(value: $ToIntFunction$$Type<$BlockState$$Type>)
get "lootTableSupplier"(): $Supplier<$ResourceLocation>
set "lootTableSupplier"(value: $Supplier$$Type<$ResourceLocation$$Type>)
get "offsetFunction"(): $Optional<$BlockBehaviour$OffsetFunction>
set "offsetFunction"(value: $Optional$$Type<$BlockBehaviour$OffsetFunction$$Type>)
get "soundType"(): $SoundType
set "soundType"(value: $SoundType$$Type)
get "spawnParticlesOnBreak"(): boolean
set "spawnParticlesOnBreak"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$EnumProperty" {
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $EnumProperty<T extends ($Enum<T> & $StringRepresentable)> extends $Property<T> {
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, collection2: $Collection$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, predicate2: $Predicate$$Type<T>): $EnumProperty<T>
public static "create"<T extends ($Enum<T> & $StringRepresentable)>(string0: string, class1: $Class$$Type<T>, ...t2s: T[]): $EnumProperty<T>
public "getName"(t0: T): string
public "getPossibleValues"(): $Collection<T>
public "getValue"(string0: string): $Optional<T>
get "possibleValues"(): $Collection<T>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DoubleBlockHalf extends $Enum<$DoubleBlockHalf> implements $StringRepresentable {
static readonly "LOWER": $DoubleBlockHalf
static readonly "UPPER": $DoubleBlockHalf

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DoubleBlockHalf
public static "values"(): $DoubleBlockHalf[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Half" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Half extends $Enum<$Half> implements $StringRepresentable {
static readonly "BOTTOM": $Half
static readonly "TOP": $Half

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $Half
public static "values"(): $Half[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockBehaviour$StateArgumentPredicate<A> {
"test"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, a3: A): boolean
}

export namespace $BlockBehaviour$StateArgumentPredicate {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$StateArgumentPredicate$$Static<A> implements $BlockBehaviour$StateArgumentPredicate<A> {
}
}

declare module "packages/net/minecraft/world/level/block/state/$StateHolder" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Table, $Table$$Type } from "packages/com/google/common/collect/$Table"
import { $Collection } from "packages/java/util/$Collection"
import { $Property, $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Optional } from "packages/java/util/$Optional"
import { $FastMap, $FastMap$$Type } from "packages/malte0811/ferritecore/fastmap/$FastMap"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $StateHolderAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$StateHolderAccessor"
import { $Map$$Type } from "packages/java/util/$Map"
import { $FastMapStateHolder } from "packages/malte0811/ferritecore/ducks/$FastMapStateHolder"

export class $StateHolder<O, S> implements $FastMapStateHolder<any>, $StateHolderAccessor<any, any> {
static readonly "NAME_TAG": string
static readonly "PROPERTIES_TAG": string

public "cycle"<T extends $Comparable<T>>(property0: $Property$$Type<T>): S
public "getNeighborTable"(): $Table<any, any, any>
public "getOptionalValue"<T extends $Comparable<T>>(property0: $Property$$Type<T>): $Optional<T>
public "getProperties"(): $Collection<$Property<any>>
public "getStateIndex"(): integer
public "getStateMap"(): $FastMap<any>
public "getValue"<T extends $Comparable<T>>(property0: $Property$$Type<T>): T
public "getValues"(): $ImmutableMap<$Property<any>, $Comparable<any>>
public "getVanillaPropertyMap"(): $ImmutableMap<any, any>
public "hasProperty"<T extends $Comparable<T>>(property0: $Property$$Type<T>): boolean
public "populateNeighbours"(map0: $Map$$Type<any, any>): void
public "redirect$fhh000$getNeighborFromFastMap"(table0: $Table$$Type<any, any, any>, object1: any, object2: any): any
public "replacePropertyMap"(immutableMap0: $ImmutableMap$$Type<any, any>): void
public "setNeighborTable"(table0: $Table$$Type<any, any, any>): void
public "setStateIndex"(int0: integer): void
public "setStateMap"(fastMap0: $FastMap$$Type<any>): void
public "setValue"<T extends $Comparable<T>, V extends T>(property0: $Property$$Type<T>, v1: V): S
public "trySetValue"<T extends $Comparable<T>, V extends T>(property0: $Property$$Type<T>, v1: V): S
get "owner"(): O
set "owner"(value: O)
get "neighborTable"(): $Table<any, any, any>
get "properties"(): $Collection<$Property<any>>
get "stateIndex"(): integer
get "stateMap"(): $FastMap<any>
get "values"(): $ImmutableMap<$Property<any>, $Comparable<any>>
get "vanillaPropertyMap"(): $ImmutableMap<any, any>
set "neighborTable"(value: $Table$$Type<any, any, any>)
set "stateIndex"(value: integer)
set "stateMap"(value: $FastMap$$Type<any>)
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockState" {
import { $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TreeConfiguration$$Type } from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SpawnPlacements$Type$$Type } from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import { $IForgeBlockState } from "packages/net/minecraftforge/common/extensions/$IForgeBlockState"
import { $SignalGetter$$Type } from "packages/net/minecraft/world/level/$SignalGetter"
import { $BlockPathTypes, $BlockPathTypes$$Type } from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $Optional } from "packages/java/util/$Optional"
import { $IPlantable$$Type } from "packages/net/minecraftforge/common/$IPlantable"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $Explosion$$Type } from "packages/net/minecraft/world/level/$Explosion"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $BlockBehaviour$BlockStateBase } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$BlockStateBase"

export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IForgeBlockState {
static readonly "CODEC": $Codec<$BlockState>

constructor(block0: $Block$$Type, immutableMap1: $ImmutableMap$$Type<$Property$$Type<any>, $Comparable$$Type<any>>, mapCodec2: $MapCodec$$Type<$BlockState$$Type>)

public "addLandingEffects"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, livingEntity3: $LivingEntity$$Type, int4: integer): boolean
public "addRunningEffects"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "canBeHydrated"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, blockPos3: $BlockPos$$Type): boolean
public "canDropFromExplosion"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): boolean
public "canEntityDestroy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "canHarvestBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "canRedstoneConnectTo"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "canStickTo"(blockState0: $BlockState$$Type): boolean
public "canSustainPlant"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, iPlantable3: $IPlantable$$Type): boolean
public "collisionExtendsVertically"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "getAdjacentBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type, blockPathTypes3: $BlockPathTypes$$Type): $BlockPathTypes
public "getAppearance"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type): $BlockState
public "getBeaconColorMultiplier"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): float[]
public "getBedDirection"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $Direction
public "getBlockPathType"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, mob2: $Mob$$Type): $BlockPathTypes
public "getCloneItemStack"(hitResult0: $HitResult$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): $ItemStack
public "getEnchantPowerBonus"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): float
public "getExpDrop"(levelReader0: $LevelReader$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): integer
public "getExplosionResistance"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): float
public "getFireSpreadSpeed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getFlammability"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getFriction"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): float
public "getLightEmission"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getRespawnPosition"(entityType0: $EntityType$$Type<any>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, float3: float, livingEntity4: $LivingEntity$$Type): $Optional<$Vec3>
public "getSoundType"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): $SoundType
public "getStateAtViewpoint"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, vec32: $Vec3$$Type): $BlockState
public "getToolModifiedState"(useOnContext0: $UseOnContext$$Type, toolAction1: $ToolAction$$Type, boolean2: boolean): $BlockState
public "getWeakChanges"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "hidesNeighborFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): boolean
public "isBed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "isBurning"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isConduitFrame"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
public "isFertile"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isFireSource"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isFlammable"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isLadder"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "isPortalFrame"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isScaffolding"(livingEntity0: $LivingEntity$$Type): boolean
public "isSlimeBlock"(): boolean
public "isStickyBlock"(): boolean
public "isValidSpawn"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, type2: $SpawnPlacements$Type$$Type, entityType3: $EntityType$$Type<any>): boolean
public "onBlockExploded"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, explosion2: $Explosion$$Type): void
public "onBlockStateChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
public "onCaughtFire"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, livingEntity3: $LivingEntity$$Type): void
public "onDestroyedByPlayer"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, boolean3: boolean, fluidState4: $FluidState$$Type): boolean
public "onNeighborChange"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): void
public "onTreeGrow"(levelReader0: $LevelReader$$Type, biConsumer1: $BiConsumer$$Type<$BlockPos$$Type, $BlockState$$Type>, randomSource2: $RandomSource$$Type, blockPos3: $BlockPos$$Type, treeConfiguration4: $TreeConfiguration$$Type): boolean
public "rotate"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, rotation2: $Rotation$$Type): $BlockState
public "setBedOccupied"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, livingEntity2: $LivingEntity$$Type, boolean3: boolean): void
public "shouldCheckWeakPower"(signalGetter0: $SignalGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "shouldDisplayFluidOverlay"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type): boolean
public "supportsExternalFaceHiding"(): boolean
get "slimeBlock"(): boolean
get "stickyBlock"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$RedstoneSide" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $RedstoneSide extends $Enum<$RedstoneSide> implements $StringRepresentable {
static readonly "NONE": $RedstoneSide
static readonly "SIDE": $RedstoneSide
static readonly "UP": $RedstoneSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "isConnected"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RedstoneSide
public static "values"(): $RedstoneSide[]
get "serializedName"(): string
get "connected"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$SlabType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $SlabType extends $Enum<$SlabType> implements $StringRepresentable {
static readonly "BOTTOM": $SlabType
static readonly "DOUBLE": $SlabType
static readonly "TOP": $SlabType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SlabType
public static "values"(): $SlabType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BedPart" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $BedPart extends $Enum<$BedPart> implements $StringRepresentable {
static readonly "FOOT": $BedPart
static readonly "HEAD": $BedPart

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BedPart
public static "values"(): $BedPart[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty" {
import { $Collection } from "packages/java/util/$Collection"
import { $Optional } from "packages/java/util/$Optional"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BooleanProperty extends $Property<boolean> {
public static "create"(string0: string): $BooleanProperty
public "getName"(boolean0: boolean): string
public "getPossibleValues"(): $Collection<boolean>
public "getValue"(string0: string): $Optional<boolean>
get "possibleValues"(): $Collection<boolean>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$Property" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Property$Value } from "packages/net/minecraft/world/level/block/state/properties/$Property$Value"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Collection } from "packages/java/util/$Collection"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Class } from "packages/java/lang/$Class"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $StateHolder, $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Property<T extends $Comparable<T>> {
public "codec"(): $Codec<T>
public "generateHashCode"(): integer
public "getAllValues"(): $Stream<$Property$Value<T>>
public "getName"(t0: T): string
public "getName"(): string
public "getPossibleValues"(): $Collection<T>
public "getValue"(string0: string): $Optional<T>
public "getValueClass"(): $Class<T>
public "parseValue"<U, S extends $StateHolder<any, S>>(dynamicOps0: $DynamicOps$$Type<U>, s1: S, u2: U): $DataResult<S>
public "value"(stateHolder0: $StateHolder$$Type<any, any>): $Property$Value<T>
public "value"(t0: T): $Property$Value<T>
public "valueCodec"(): $Codec<$Property$Value<T>>
get "allValues"(): $Stream<$Property$Value<T>>
get "name"(): string
get "possibleValues"(): $Collection<T>
get "valueClass"(): $Class<T>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$AttachFace" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $AttachFace extends $Enum<$AttachFace> implements $StringRepresentable {
static readonly "CEILING": $AttachFace
static readonly "FLOOR": $AttachFace
static readonly "WALL": $AttachFace

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $AttachFace
public static "values"(): $AttachFace[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$SculkSensorPhase" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $SculkSensorPhase extends $Enum<$SculkSensorPhase> implements $StringRepresentable {
static readonly "ACTIVE": $SculkSensorPhase
static readonly "COOLDOWN": $SculkSensorPhase
static readonly "INACTIVE": $SculkSensorPhase

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $SculkSensorPhase
public static "values"(): $SculkSensorPhase[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Projectile$$Type } from "packages/net/minecraft/world/entity/projectile/$Projectile"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $PathComputationType$$Type } from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $BlockBehaviourAccessor } from "packages/net/dries007/tfc/mixin/accessor/$BlockBehaviourAccessor"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $FeatureElement } from "packages/net/minecraft/world/flag/$FeatureElement"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockBuilder, $BlockBuilder$$Type } from "packages/dev/latvian/mods/kubejs/block/$BlockBuilder"
import { $LootParams$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BlockKJS } from "packages/dev/latvian/mods/kubejs/core/$BlockKJS"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $RenderShape } from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourAccessor, $BlockKJS {
readonly "properties": $BlockBehaviour$Properties

constructor(properties0: $BlockBehaviour$Properties$$Type)

public "asItem"(): $Item
/** @deprecated */
public "attack"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): void
/** @deprecated */
public "canBeReplaced"(blockState0: $BlockState$$Type, blockPlaceContext1: $BlockPlaceContext$$Type): boolean
/** @deprecated */
public "canBeReplaced"(blockState0: $BlockState$$Type, fluid1: $Fluid$$Type): boolean
/** @deprecated */
public "canSurvive"(blockState0: $BlockState$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "defaultDestroyTime"(): float
public "defaultMapColor"(): $MapColor
/** @deprecated */
public "entityInside"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, entity3: $Entity$$Type): void
/** @deprecated */
public "getAnalogOutputSignal"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): integer
public "getBlockBuilder"(): $BlockBuilder
public "getBlockStates"(): $List<$BlockState>
/** @deprecated */
public "getBlockSupportShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getCollisionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
/** @deprecated */
public "getDestroyProgress"(blockState0: $BlockState$$Type, player1: $Player$$Type, blockGetter2: $BlockGetter$$Type, blockPos3: $BlockPos$$Type): float
/** @deprecated */
public "getDirectSignal"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
/** @deprecated */
public "getDrops"(blockState0: $BlockState$$Type, builder1: $LootParams$Builder$$Type): $List<$ItemStack>
/** @deprecated */
public "getFluidState"(blockState0: $BlockState$$Type): $FluidState
public "getId"(): string
public "getIdLocation"(): $ResourceLocation
/** @deprecated */
public "getInteractionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getLightBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): integer
public "getLootTable"(): $ResourceLocation
public "getMaxHorizontalOffset"(): float
public "getMaxVerticalOffset"(): float
/** @deprecated */
public "getMenuProvider"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): $MenuProvider
public "getMod"(): string
/** @deprecated */
public "getOcclusionShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $VoxelShape
/** @deprecated */
public "getRenderShape"(blockState0: $BlockState$$Type): $RenderShape
/** @deprecated */
public "getSeed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type): long
/** @deprecated */
public "getShadeBrightness"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
/** @deprecated */
public "getShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
/** @deprecated */
public "getSignal"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): integer
public "getTypeData"(): $CompoundTag
/** @deprecated */
public "getVisualShape"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, collisionContext3: $CollisionContext$$Type): $VoxelShape
public "handler$eih000$quark$tick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type, callbackInfo4: $CallbackInfo$$Type): void
/** @deprecated */
public "hasAnalogOutputSignal"(blockState0: $BlockState$$Type): boolean
/** @deprecated */
public "isCollisionShapeFullBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
/** @deprecated */
public "isOcclusionShapeFullBlock"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
/** @deprecated */
public "isPathfindable"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type, pathComputationType3: $PathComputationType$$Type): boolean
/** @deprecated */
public "isSignalSource"(blockState0: $BlockState$$Type): boolean
/** @deprecated */
public "mirror"(blockState0: $BlockState$$Type, mirror1: $Mirror$$Type): $BlockState
/** @deprecated */
public "neighborChanged"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, block3: $Block$$Type, blockPos4: $BlockPos$$Type, boolean5: boolean): void
/** @deprecated */
public "onPlace"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, boolean4: boolean): void
/** @deprecated */
public "onProjectileHit"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockHitResult2: $BlockHitResult$$Type, projectile3: $Projectile$$Type): void
/** @deprecated */
public "onRemove"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, boolean4: boolean): void
/** @deprecated */
public "randomTick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
public "requiredFeatures"(): $FeatureFlagSet
/** @deprecated */
public "rotate"(blockState0: $BlockState$$Type, rotation1: $Rotation$$Type): $BlockState
public "setBlockBuilder"(b: $BlockBuilder$$Type): void
public "setDestroySpeed"(v: float): void
public "setLightEmission"(v: integer): void
public "setNameKey"(key: string): void
public "setRandomTickCallback"(callback: $Consumer$$Type<any>): void
public "setRequiresTool"(v: boolean): void
/** @deprecated */
public "skipRendering"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type, direction2: $Direction$$Type): boolean
/** @deprecated */
public "spawnAfterBreak"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, itemStack3: $ItemStack$$Type, boolean4: boolean): void
/** @deprecated */
public "tick"(blockState0: $BlockState$$Type, serverLevel1: $ServerLevel$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): void
/** @deprecated */
public "triggerEvent"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): boolean
/** @deprecated */
public "updateIndirectNeighbourShapes"(blockState0: $BlockState$$Type, levelAccessor1: $LevelAccessor$$Type, blockPos2: $BlockPos$$Type, int3: integer, int4: integer): void
/** @deprecated */
public "updateShape"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, blockState2: $BlockState$$Type, levelAccessor3: $LevelAccessor$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type): $BlockState
/** @deprecated */
public "use"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, blockHitResult5: $BlockHitResult$$Type): $InteractionResult
/** @deprecated */
public "useShapeForLightOcclusion"(blockState0: $BlockState$$Type): boolean
get "blockBuilder"(): $BlockBuilder
get "blockStates"(): $List<$BlockState>
get "id"(): string
get "idLocation"(): $ResourceLocation
get "lootTable"(): $ResourceLocation
get "maxHorizontalOffset"(): float
get "maxVerticalOffset"(): float
get "mod"(): string
get "typeData"(): $CompoundTag
set "blockBuilder"(value: $BlockBuilder$$Type)
set "destroySpeed"(value: float)
set "lightEmission"(value: integer)
set "nameKey"(value: string)
set "randomTickCallback"(value: $Consumer$$Type<any>)
set "requiresTool"(value: boolean)
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld" {
import { $LevelReader, $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockInWorld {
constructor(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, boolean2: boolean)

public "getEntity"(): $BlockEntity
public "getLevel"(): $LevelReader
public "getPos"(): $BlockPos
public "getState"(): $BlockState
public static "hasState"(predicate0: $Predicate$$Type<$BlockState$$Type>): $Predicate<$BlockInWorld>
get "entity"(): $BlockEntity
get "level"(): $LevelReader
get "pos"(): $BlockPos
get "state"(): $BlockState
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetFunction" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockBehaviour$OffsetFunction {
"evaluate"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): $Vec3
}

export namespace $BlockBehaviour$OffsetFunction {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$OffsetFunction$$Static implements $BlockBehaviour$OffsetFunction {
}
}

declare module "packages/net/minecraft/world/level/block/state/pattern/$BlockPattern" {
import { $BlockPattern$BlockPatternMatch } from "packages/net/minecraft/world/level/block/state/pattern/$BlockPattern$BlockPatternMatch"
import { $BlockInWorld, $BlockInWorld$$Type } from "packages/net/minecraft/world/level/block/state/pattern/$BlockInWorld"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LoadingCache } from "packages/com/google/common/cache/$LoadingCache"

export class $BlockPattern {
constructor(predicate0sss: $Predicate$$Type<$BlockInWorld$$Type>[][][])

public static "createLevelCache"(levelReader0: $LevelReader$$Type, boolean1: boolean): $LoadingCache<$BlockPos, $BlockInWorld>
public "find"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): $BlockPattern$BlockPatternMatch
public "getDepth"(): integer
public "getHeight"(): integer
public "getPattern"(): $Predicate<$BlockInWorld>[][][]
public "getWidth"(): integer
public "matches"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, direction3: $Direction$$Type): $BlockPattern$BlockPatternMatch
get "depth"(): integer
get "height"(): integer
get "pattern"(): $Predicate<$BlockInWorld>[][][]
get "width"(): integer
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $NoteBlockInstrument extends $Enum<$NoteBlockInstrument> implements $StringRepresentable {
static readonly "BANJO": $NoteBlockInstrument
static readonly "BASEDRUM": $NoteBlockInstrument
static readonly "BASS": $NoteBlockInstrument
static readonly "BELL": $NoteBlockInstrument
static readonly "BIT": $NoteBlockInstrument
static readonly "CHIME": $NoteBlockInstrument
static readonly "COW_BELL": $NoteBlockInstrument
static readonly "CREEPER": $NoteBlockInstrument
static readonly "CUSTOM_HEAD": $NoteBlockInstrument
static readonly "DIDGERIDOO": $NoteBlockInstrument
static readonly "DRAGON": $NoteBlockInstrument
static readonly "FLUTE": $NoteBlockInstrument
static readonly "GUITAR": $NoteBlockInstrument
static readonly "HARP": $NoteBlockInstrument
static readonly "HAT": $NoteBlockInstrument
static readonly "IRON_XYLOPHONE": $NoteBlockInstrument
static readonly "PIGLIN": $NoteBlockInstrument
static readonly "PLING": $NoteBlockInstrument
static readonly "SKELETON": $NoteBlockInstrument
static readonly "SNARE": $NoteBlockInstrument
static readonly "WITHER_SKELETON": $NoteBlockInstrument
static readonly "XYLOPHONE": $NoteBlockInstrument
static readonly "ZOMBIE": $NoteBlockInstrument

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getSoundEvent"(): $Holder<$SoundEvent>
public "hasCustomSound"(): boolean
public "isTunable"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $NoteBlockInstrument
public static "values"(): $NoteBlockInstrument[]
public "worksAboveNoteBlock"(): boolean
get "serializedName"(): string
get "soundEvent"(): $Holder<$SoundEvent>
get "tunable"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$BlockStateBase" {
import { $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Projectile$$Type } from "packages/net/minecraft/world/entity/projectile/$Projectile"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $Mirror$$Type } from "packages/net/minecraft/world/level/block/$Mirror"
import { $PushReaction } from "packages/net/minecraft/world/level/material/$PushReaction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $PathComputationType$$Type } from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $LootParams$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $RenderShape } from "packages/net/minecraft/world/level/block/$RenderShape"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $IBlockState } from "packages/org/embeddedt/modernfix/duck/$IBlockState"
import { $IModelHoldingBlockState } from "packages/org/embeddedt/modernfix/duck/$IModelHoldingBlockState"
import { $MapColor } from "packages/net/minecraft/world/level/material/$MapColor"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $IStateCacheAccessor } from "packages/xfacthd/framedblocks/api/block/cache/$IStateCacheAccessor"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $StateHolder } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockPlaceContext$$Type } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import { $BlockStateBaseAccessor } from "packages/net/dries007/tfc/mixin/accessor/$BlockStateBaseAccessor"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $SupportType$$Type } from "packages/net/minecraft/world/level/block/$SupportType"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $NoteBlockInstrument } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $BlockStateKJS } from "packages/dev/latvian/mods/kubejs/core/$BlockStateKJS"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $StateCache, $StateCache$$Type } from "packages/xfacthd/framedblocks/api/block/cache/$StateCache"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $SoundType } from "packages/net/minecraft/world/level/block/$SoundType"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $BlockEntityTicker } from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $IModelHoldingBlockState, $BlockStateBaseAccessor, $BlockStateKJS, $IStateCacheAccessor {
readonly "mapColor": $MapColor

public "attack"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): void
/** @deprecated */
public "blocksMotion"(): boolean
public "canBeReplaced"(): boolean
public "canBeReplaced"(blockPlaceContext0: $BlockPlaceContext$$Type): boolean
public "canBeReplaced"(fluid0: $Fluid$$Type): boolean
public "canOcclude"(): boolean
public "canSurvive"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type): boolean
public "clearCache"(): void
public "emissiveRendering"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "entityCanStandOn"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): boolean
public "entityCanStandOnFace"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type, direction3: $Direction$$Type): boolean
public "entityInside"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type): void
public "framedblocks$getCache"(): $StateCache
public "framedblocks$initCache"(stateCache0: $StateCache$$Type): void
public "getAnalogOutputSignal"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): integer
public "getBlock"(): $Block
public "getBlockHolder"(): $Holder<$Block>
public "getBlockSupportShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getDestroyProgress"(player0: $Player$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): float
public "getDestroySpeed"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): float
public "getDirectSignal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getDrops"(builder0: $LootParams$Builder$$Type): $List<$ItemStack>
public "getFaceOcclusionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): $VoxelShape
public "getFluidState"(): $FluidState
public "getInteractionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getLightBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
/** @deprecated */
public "getLightEmission"(): integer
public "getMapColor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $MapColor
public "getMenuProvider"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $MenuProvider
public "getOcclusionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getOffset"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $Vec3
public "getPistonPushReaction"(): $PushReaction
public "getRenderShape"(): $RenderShape
public "getSeed"(blockPos0: $BlockPos$$Type): long
public "getShadeBrightness"(blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
public "getShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "getSignal"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): integer
public "getSoundType"(): $SoundType
public "getTags"(): $Stream<$TagKey<$Block>>
public "getTicker"<T extends $BlockEntity>(level0: $Level$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $BlockEntityTicker<T>
public "getVisualShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): $VoxelShape
public "handler$ccb000$onBlockCollision"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, entity2: $Entity$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$fhl000$cacheStateHead"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fhl000$cacheStateTail"(callbackInfo0: $CallbackInfo$$Type): void
public "hasAnalogOutputSignal"(): boolean
public "hasBlockEntity"(): boolean
public "hasLargeCollisionShape"(): boolean
public "hasOffsetFunction"(): boolean
public "hasPostProcess"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "ignitedByLava"(): boolean
public "initCache"(): void
public "instrument"(): $NoteBlockInstrument
public "is"(tagKey0: $TagKey$$Type<$Block$$Type>): boolean
public "is"(holderSet0: $HolderSet$$Type<$Block$$Type>): boolean
public "is"(tagKey0: $TagKey$$Type<$Block$$Type>, predicate1: $Predicate$$Type<$BlockBehaviour$BlockStateBase$$Type>): boolean
public "is"(block0: $Block$$Type): boolean
public "isAir"(): boolean
public "isCacheInvalid"(): boolean
public "isCollisionShapeFullBlock"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isFaceSturdy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, supportType3: $SupportType$$Type): boolean
public "isFaceSturdy"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): boolean
public "isPathfindable"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, pathComputationType2: $PathComputationType$$Type): boolean
public "isRandomlyTicking"(): boolean
public "isRedstoneConductor"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isSignalSource"(): boolean
/** @deprecated */
public "isSolid"(): boolean
public "isSolidRender"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isSuffocating"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "isValidSpawn"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, entityType2: $EntityType$$Type<any>): boolean
public "isViewBlocking"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "liquid"(): boolean
public "mfix$getModel"(): $BakedModel
public "mfix$setModel"(model: $BakedModel$$Type): void
public "mirror"(mirror0: $Mirror$$Type): $BlockState
public "modifyReturnValue$fak000$supp$modifyPlanterOffset"(original: $Vec3$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $Vec3
/** @deprecated */
public "neighborChanged"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, block2: $Block$$Type, blockPos3: $BlockPos$$Type, boolean4: boolean): void
public "onPlace"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): void
public "onProjectileHit"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockHitResult2: $BlockHitResult$$Type, projectile3: $Projectile$$Type): void
public "onRemove"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, boolean3: boolean): void
public "propagatesSkylightDown"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): boolean
public "randomTick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "requiresCorrectToolForDrops"(): boolean
/** @deprecated */
public "rotate"(rotation0: $Rotation$$Type): $BlockState
public "shouldSpawnParticlesOnBreak"(): boolean
public "skipRendering"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): boolean
public "spawnAfterBreak"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type, boolean3: boolean): void
public "tick"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, randomSource2: $RandomSource$$Type): void
public "triggerEvent"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): boolean
public "updateIndirectNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): void
public "updateIndirectNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "updateNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer): void
public "updateNeighbourShapes"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "updateShape"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, levelAccessor2: $LevelAccessor$$Type, blockPos3: $BlockPos$$Type, blockPos4: $BlockPos$$Type): $BlockState
public "use"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, blockHitResult3: $BlockHitResult$$Type): $InteractionResult
public "useShapeForLightOcclusion"(): boolean
get "block"(): $Block
get "blockHolder"(): $Holder<$Block>
get "fluidState"(): $FluidState
get "lightEmission"(): integer
get "pistonPushReaction"(): $PushReaction
get "renderShape"(): $RenderShape
get "soundType"(): $SoundType
get "tags"(): $Stream<$TagKey<$Block>>
get "air"(): boolean
get "cacheInvalid"(): boolean
get "randomlyTicking"(): boolean
get "signalSource"(): boolean
get "solid"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockBehaviour$StatePredicate {
"test"(blockState0: $BlockState$$Type, blockGetter1: $BlockGetter$$Type, blockPos2: $BlockPos$$Type): boolean
}

export namespace $BlockBehaviour$StatePredicate {
const probejs$$marker: never
}
export abstract class $BlockBehaviour$StatePredicate$$Static implements $BlockBehaviour$StatePredicate {
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BlockSetType" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Record } from "packages/java/lang/$Record"
import { $SoundType, $SoundType$$Type } from "packages/net/minecraft/world/level/block/$SoundType"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $BlockSetType extends $Record {
static readonly "ACACIA": $BlockSetType
static readonly "BAMBOO": $BlockSetType
static readonly "BIRCH": $BlockSetType
static readonly "CHERRY": $BlockSetType
static readonly "CRIMSON": $BlockSetType
static readonly "DARK_OAK": $BlockSetType
static readonly "GOLD": $BlockSetType
static readonly "IRON": $BlockSetType
static readonly "JUNGLE": $BlockSetType
static readonly "MANGROVE": $BlockSetType
static readonly "OAK": $BlockSetType
static readonly "POLISHED_BLACKSTONE": $BlockSetType
static readonly "SPRUCE": $BlockSetType
static readonly "STONE": $BlockSetType
static readonly "WARPED": $BlockSetType

constructor(string0: string)
constructor(string0: string, boolean1: boolean, soundType2: $SoundType$$Type, soundEvent3: $SoundEvent$$Type, soundEvent4: $SoundEvent$$Type, soundEvent5: $SoundEvent$$Type, soundEvent6: $SoundEvent$$Type, soundEvent7: $SoundEvent$$Type, soundEvent8: $SoundEvent$$Type, soundEvent9: $SoundEvent$$Type, soundEvent10: $SoundEvent$$Type)

public "buttonClickOff"(): $SoundEvent
public "buttonClickOn"(): $SoundEvent
public "canOpenByHand"(): boolean
public "doorClose"(): $SoundEvent
public "doorOpen"(): $SoundEvent
public "name"(): string
public "pressurePlateClickOff"(): $SoundEvent
public "pressurePlateClickOn"(): $SoundEvent
public static "register"(blockSetType0: $BlockSetType$$Type): $BlockSetType
public "soundType"(): $SoundType
public "trapdoorClose"(): $SoundEvent
public "trapdoorOpen"(): $SoundEvent
public static "values"(): $Stream<$BlockSetType>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DoorHingeSide extends $Enum<$DoorHingeSide> implements $StringRepresentable {
static readonly "LEFT": $DoorHingeSide
static readonly "RIGHT": $DoorHingeSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $DoorHingeSide
public static "values"(): $DoorHingeSide[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty" {
import { $Collection } from "packages/java/util/$Collection"
import { $Optional } from "packages/java/util/$Optional"
import { $Property } from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $IntegerProperty extends $Property<integer> {
public static "create"(string0: string, int1: integer, int2: integer): $IntegerProperty
public "getName"(integer0: integer): string
public "getPossibleValues"(): $Collection<integer>
public "getValue"(string0: string): $Optional<integer>
get "possibleValues"(): $Collection<integer>
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$RailShape" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $RailShape extends $Enum<$RailShape> implements $StringRepresentable {
static readonly "ASCENDING_EAST": $RailShape
static readonly "ASCENDING_NORTH": $RailShape
static readonly "ASCENDING_SOUTH": $RailShape
static readonly "ASCENDING_WEST": $RailShape
static readonly "EAST_WEST": $RailShape
static readonly "NORTH_EAST": $RailShape
static readonly "NORTH_SOUTH": $RailShape
static readonly "NORTH_WEST": $RailShape
static readonly "SOUTH_EAST": $RailShape
static readonly "SOUTH_WEST": $RailShape

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getSerializedName"(): string
public "isAscending"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $RailShape
public static "values"(): $RailShape[]
get "name"(): string
get "serializedName"(): string
get "ascending"(): boolean
}
}

declare module "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
static readonly "NONE": $BlockBehaviour$OffsetType
static readonly "XYZ": $BlockBehaviour$OffsetType
static readonly "XZ": $BlockBehaviour$OffsetType

public static "valueOf"(string0: string): $BlockBehaviour$OffsetType
public static "values"(): $BlockBehaviour$OffsetType[]
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$ChestType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $ChestType extends $Enum<$ChestType> implements $StringRepresentable {
static readonly "LEFT": $ChestType
static readonly "RIGHT": $ChestType
static readonly "SINGLE": $ChestType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getOpposite"(): $ChestType
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ChestType
public static "values"(): $ChestType[]
get "opposite"(): $ChestType
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$WallSide" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $WallSide extends $Enum<$WallSide> implements $StringRepresentable {
static readonly "LOW": $WallSide
static readonly "NONE": $WallSide
static readonly "TALL": $WallSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $WallSide
public static "values"(): $WallSide[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BellAttachType" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $BellAttachType extends $Enum<$BellAttachType> implements $StringRepresentable {
static readonly "CEILING": $BellAttachType
static readonly "DOUBLE_WALL": $BellAttachType
static readonly "FLOOR": $BellAttachType
static readonly "SINGLE_WALL": $BellAttachType

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $BellAttachType
public static "values"(): $BellAttachType[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty" {
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $DirectionProperty extends $EnumProperty<$Direction> {
public static "create"(string0: string, predicate1: $Predicate$$Type<$Direction$$Type>): $DirectionProperty
public static "create"(string0: string): $DirectionProperty
public static "create"(string0: string, collection1: $Collection$$Type<$Direction$$Type>): $DirectionProperty
public static "create"(string0: string, ...direction1s: $Direction$$Type[]): $DirectionProperty
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$ComparatorMode" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $ComparatorMode extends $Enum<$ComparatorMode> implements $StringRepresentable {
static readonly "COMPARE": $ComparatorMode
static readonly "SUBTRACT": $ComparatorMode

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $ComparatorMode
public static "values"(): $ComparatorMode[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$StructureMode" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $StructureMode extends $Enum<$StructureMode> implements $StringRepresentable {
static readonly "CORNER": $StructureMode
static readonly "DATA": $StructureMode
static readonly "LOAD": $StructureMode
static readonly "SAVE": $StructureMode

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getDisplayName"(): $Component
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $StructureMode
public static "values"(): $StructureMode[]
get "displayName"(): $Component
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties" {
import { $IntegerProperty } from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import { $BooleanProperty } from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import { $BambooLeaves } from "packages/net/minecraft/world/level/block/state/properties/$BambooLeaves"
import { $StairsShape } from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import { $ChestType } from "packages/net/minecraft/world/level/block/state/properties/$ChestType"
import { $ComparatorMode } from "packages/net/minecraft/world/level/block/state/properties/$ComparatorMode"
import { $WallSide } from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import { $SlabType } from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import { $FrontAndTop } from "packages/net/minecraft/core/$FrontAndTop"
import { $RedstoneSide } from "packages/net/minecraft/world/level/block/state/properties/$RedstoneSide"
import { $StructureMode } from "packages/net/minecraft/world/level/block/state/properties/$StructureMode"
import { $DoorHingeSide } from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import { $DoubleBlockHalf } from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import { $DirectionProperty } from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import { $Half } from "packages/net/minecraft/world/level/block/state/properties/$Half"
import { $RailShape } from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import { $Tilt } from "packages/net/minecraft/world/level/block/state/properties/$Tilt"
import { $BellAttachType } from "packages/net/minecraft/world/level/block/state/properties/$BellAttachType"
import { $NoteBlockInstrument } from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import { $SculkSensorPhase } from "packages/net/minecraft/world/level/block/state/properties/$SculkSensorPhase"
import { $EnumProperty } from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import { $AttachFace } from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import { $BedPart } from "packages/net/minecraft/world/level/block/state/properties/$BedPart"
import { $Direction$Axis } from "packages/net/minecraft/core/$Direction$Axis"
import { $DripstoneThickness } from "packages/net/minecraft/world/level/block/state/properties/$DripstoneThickness"
import { $PistonType } from "packages/net/minecraft/world/level/block/state/properties/$PistonType"

export class $BlockStateProperties {
static readonly "AGE_1": $IntegerProperty
static readonly "AGE_15": $IntegerProperty
static readonly "AGE_2": $IntegerProperty
static readonly "AGE_25": $IntegerProperty
static readonly "AGE_3": $IntegerProperty
static readonly "AGE_4": $IntegerProperty
static readonly "AGE_5": $IntegerProperty
static readonly "AGE_7": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "ATTACH_FACE": $EnumProperty<$AttachFace>
static readonly "AXIS": $EnumProperty<$Direction$Axis>
static readonly "BAMBOO_LEAVES": $EnumProperty<$BambooLeaves>
static readonly "BED_PART": $EnumProperty<$BedPart>
static readonly "BELL_ATTACHMENT": $EnumProperty<$BellAttachType>
static readonly "BERRIES": $BooleanProperty
static readonly "BITES": $IntegerProperty
static readonly "BLOOM": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
static readonly "CANDLES": $IntegerProperty
static readonly "CAN_SUMMON": $BooleanProperty
static readonly "CHEST_TYPE": $EnumProperty<$ChestType>
static readonly "CHISELED_BOOKSHELF_SLOT_0_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_1_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_2_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_3_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_4_OCCUPIED": $BooleanProperty
static readonly "CHISELED_BOOKSHELF_SLOT_5_OCCUPIED": $BooleanProperty
static readonly "CONDITIONAL": $BooleanProperty
static readonly "CRACKED": $BooleanProperty
static readonly "DELAY": $IntegerProperty
static readonly "DISARMED": $BooleanProperty
static readonly "DISTANCE": $IntegerProperty
static readonly "DOOR_HINGE": $EnumProperty<$DoorHingeSide>
static readonly "DOUBLE_BLOCK_HALF": $EnumProperty<$DoubleBlockHalf>
static readonly "DOWN": $BooleanProperty
static readonly "DRAG": $BooleanProperty
static readonly "DRIPSTONE_THICKNESS": $EnumProperty<$DripstoneThickness>
static readonly "DUSTED": $IntegerProperty
static readonly "EAST": $BooleanProperty
static readonly "EAST_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "EAST_WALL": $EnumProperty<$WallSide>
static readonly "EGGS": $IntegerProperty
static readonly "ENABLED": $BooleanProperty
static readonly "EXTENDED": $BooleanProperty
static readonly "EYE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "FACING_HOPPER": $DirectionProperty
static readonly "FALLING": $BooleanProperty
static readonly "FLOWER_AMOUNT": $IntegerProperty
static readonly "HALF": $EnumProperty<$Half>
static readonly "HANGING": $BooleanProperty
static readonly "HAS_BOOK": $BooleanProperty
static readonly "HAS_BOTTLE_0": $BooleanProperty
static readonly "HAS_BOTTLE_1": $BooleanProperty
static readonly "HAS_BOTTLE_2": $BooleanProperty
static readonly "HAS_RECORD": $BooleanProperty
static readonly "HATCH": $IntegerProperty
static readonly "HORIZONTAL_AXIS": $EnumProperty<$Direction$Axis>
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "INVERTED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "LAYERS": $IntegerProperty
static readonly "LEVEL": $IntegerProperty
static readonly "LEVEL_CAULDRON": $IntegerProperty
static readonly "LEVEL_COMPOSTER": $IntegerProperty
static readonly "LEVEL_FLOWING": $IntegerProperty
static readonly "LEVEL_HONEY": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "LOCKED": $BooleanProperty
static readonly "MAX_AGE_1": integer
static readonly "MAX_AGE_15": integer
static readonly "MAX_AGE_2": integer
static readonly "MAX_AGE_25": integer
static readonly "MAX_AGE_3": integer
static readonly "MAX_AGE_4": integer
static readonly "MAX_AGE_5": integer
static readonly "MAX_AGE_7": integer
static readonly "MAX_DISTANCE": integer
static readonly "MAX_LEVEL_15": integer
static readonly "MAX_LEVEL_3": integer
static readonly "MAX_LEVEL_8": integer
static readonly "MAX_RESPAWN_ANCHOR_CHARGES": integer
static readonly "MIN_LEVEL": integer
static readonly "MIN_LEVEL_CAULDRON": integer
static readonly "MIN_RESPAWN_ANCHOR_CHARGES": integer
static readonly "MODE_COMPARATOR": $EnumProperty<$ComparatorMode>
static readonly "MOISTURE": $IntegerProperty
static readonly "NORTH": $BooleanProperty
static readonly "NORTH_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "NORTH_WALL": $EnumProperty<$WallSide>
static readonly "NOTE": $IntegerProperty
static readonly "NOTEBLOCK_INSTRUMENT": $EnumProperty<$NoteBlockInstrument>
static readonly "OCCUPIED": $BooleanProperty
static readonly "OPEN": $BooleanProperty
static readonly "ORIENTATION": $EnumProperty<$FrontAndTop>
static readonly "PERSISTENT": $BooleanProperty
static readonly "PICKLES": $IntegerProperty
static readonly "PISTON_TYPE": $EnumProperty<$PistonType>
static readonly "POWER": $IntegerProperty
static readonly "POWERED": $BooleanProperty
static readonly "RAIL_SHAPE": $EnumProperty<$RailShape>
static readonly "RAIL_SHAPE_STRAIGHT": $EnumProperty<$RailShape>
static readonly "RESPAWN_ANCHOR_CHARGES": $IntegerProperty
static readonly "ROTATION_16": $IntegerProperty
static readonly "SCULK_SENSOR_PHASE": $EnumProperty<$SculkSensorPhase>
static readonly "SHORT": $BooleanProperty
static readonly "SHRIEKING": $BooleanProperty
static readonly "SIGNAL_FIRE": $BooleanProperty
static readonly "SLAB_TYPE": $EnumProperty<$SlabType>
static readonly "SNOWY": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "SOUTH_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "SOUTH_WALL": $EnumProperty<$WallSide>
static readonly "STABILITY_DISTANCE": $IntegerProperty
static readonly "STABILITY_MAX_DISTANCE": integer
static readonly "STAGE": $IntegerProperty
static readonly "STAIRS_SHAPE": $EnumProperty<$StairsShape>
static readonly "STRUCTUREBLOCK_MODE": $EnumProperty<$StructureMode>
static readonly "TILT": $EnumProperty<$Tilt>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UNSTABLE": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "VERTICAL_DIRECTION": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WEST_REDSTONE": $EnumProperty<$RedstoneSide>
static readonly "WEST_WALL": $EnumProperty<$WallSide>

constructor()

}
}

