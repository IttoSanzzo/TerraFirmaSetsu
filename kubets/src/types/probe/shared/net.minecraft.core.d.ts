declare module "packages/net/minecraft/core/$HolderLookup$RegistryLookup" {
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $HolderOwner, $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $HolderLookup$RegistryLookup<T> extends $HolderLookup<T>, $HolderOwner<T> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"filterElements"(predicate0: $Predicate$$Type<T>): $HolderLookup<T>
"filterFeatures"(featureFlagSet0: $FeatureFlagSet$$Type): $HolderLookup<T>
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"key"(): $ResourceKey<$Registry<T>>
"listElementIds"(): $Stream<$ResourceKey<T>>
"listElements"(): $Stream<$Holder$Reference<T>>
"listTagIds"(): $Stream<$TagKey<T>>
"listTags"(): $Stream<$HolderSet$Named<T>>
"registryLifecycle"(): $Lifecycle
}

export namespace $HolderLookup$RegistryLookup {
const probejs$$marker: never
}
export abstract class $HolderLookup$RegistryLookup$$Static<T> implements $HolderLookup$RegistryLookup<T> {
}
}

declare module "packages/net/minecraft/core/$BlockPos" {
import { $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $Vec3i, $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos$MutableBlockPos } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Position$$Type } from "packages/net/minecraft/core/$Position"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Rotation$$Type } from "packages/net/minecraft/world/level/block/$Rotation"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $BlockPos extends $Vec3i {
static readonly "CODEC": $Codec<$BlockPos>
static readonly "PACKED_Y_LENGTH": integer
static readonly "ZERO": $BlockPos

constructor(int0: integer, int1: integer, int2: integer)
constructor(vec3i0: $Vec3i$$Type)

public "above"(int0: integer): $BlockPos
public static "asLong"(int0: integer, int1: integer, int2: integer): long
public "asLong"(): long
public "atY"(int0: integer): $BlockPos
public static "betweenClosed"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Iterable<$BlockPos>
public static "betweenClosed"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Iterable<$BlockPos>
public static "betweenClosedStream"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Stream<$BlockPos>
public static "betweenClosedStream"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $Stream<$BlockPos>
public static "betweenClosedStream"(boundingBox0: $BoundingBox$$Type): $Stream<$BlockPos>
public static "betweenClosedStream"(aABB0: $AABB$$Type): $Stream<$BlockPos>
public static "breadthFirstTraversal"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, biConsumer3: $BiConsumer$$Type<$BlockPos$$Type, $Consumer$$Type<$BlockPos$$Type>>, predicate4: $Predicate$$Type<$BlockPos$$Type>): integer
public static "containing"(double0: double, double1: double, double2: double): $BlockPos
public static "containing"(position0: $Position$$Type): $BlockPos
public "east"(int0: integer): $BlockPos
public static "findClosestMatch"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, predicate3: $Predicate$$Type<$BlockPos$$Type>): $Optional<$BlockPos>
public "getCenter"(): $Vec3
public static "getFlatIndex"(long0: long): long
public static "getX"(long0: long): integer
public static "getY"(long0: long): integer
public static "getZ"(long0: long): integer
public "immutable"(): $BlockPos
public "mutable"(): $BlockPos$MutableBlockPos
public "north"(int0: integer): $BlockPos
public static "of"(long0: long): $BlockPos
public "offset"(int0: integer, int1: integer, int2: integer): $BlockPos
public static "offset"(long0: long, int1: integer, int2: integer, int3: integer): long
public static "offset"(long0: long, direction1: $Direction$$Type): long
public static "randomBetweenClosed"(randomSource0: $RandomSource$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): $Iterable<$BlockPos>
public static "randomInCube"(randomSource0: $RandomSource$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): $Iterable<$BlockPos>
public "relative"(direction0: $Direction$$Type): $BlockPos
public "rotate"(rotation0: $Rotation$$Type): $BlockPos
public static "spiralAround"(blockPos0: $BlockPos$$Type, int1: integer, direction2: $Direction$$Type, direction3: $Direction$$Type): $Iterable<$BlockPos$MutableBlockPos>
/** @deprecated */
public static "squareOutSouthEast"(blockPos0: $BlockPos$$Type): $Stream<$BlockPos>
public "west"(int0: integer): $BlockPos
public "west"(): $BlockPos
public static "withinManhattan"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer): $Iterable<$BlockPos>
public static "withinManhattanStream"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer, int3: integer): $Stream<$BlockPos>
get "center"(): $Vec3
}
}

declare module "packages/net/minecraft/core/$HolderSet$Direct" {
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $HolderSet$ListBacked } from "packages/net/minecraft/core/$HolderSet$ListBacked"

export class $HolderSet$Direct<T> extends $HolderSet$ListBacked<T> {
public "addInvalidationListener"(runnable0: $Runnable$$Type): void
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "serializationType"(): $IForgeHolderSet$SerializationType
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
}
}

declare module "packages/net/minecraft/core/$Rotations" {
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"

export class $Rotations {
constructor(float0: float, float1: float, float2: float)
constructor(listTag0: $ListTag$$Type)

public "getWrappedX"(): float
public "getWrappedY"(): float
public "getWrappedZ"(): float
public "getX"(): float
public "getY"(): float
public "getZ"(): float
public "save"(): $ListTag
get "wrappedX"(): float
get "wrappedY"(): float
get "wrappedZ"(): float
get "x"(): float
get "y"(): float
get "z"(): float
}
}

declare module "packages/net/minecraft/core/$HolderOwner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HolderOwner<T> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
}

export namespace $HolderOwner {
const probejs$$marker: never
}
export abstract class $HolderOwner$$Static<T> implements $HolderOwner<T> {
}
}

declare module "packages/net/minecraft/core/$SectionPos" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $LongConsumer$$Type } from "packages/it/unimi/dsi/fastutil/longs/$LongConsumer"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $EntityAccess$$Type } from "packages/net/minecraft/world/level/entity/$EntityAccess"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Position$$Type } from "packages/net/minecraft/core/$Position"

export class $SectionPos extends $Vec3i {
static readonly "SECTION_BITS": integer
static readonly "SECTION_HALF_SIZE": integer
static readonly "SECTION_MASK": integer
static readonly "SECTION_MAX_INDEX": integer
static readonly "SECTION_SIZE": integer

public static "aroundAndAtBlockPos"(int0: integer, int1: integer, int2: integer, longConsumer3: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(blockPos0: $BlockPos$$Type, longConsumer1: $LongConsumer$$Type): void
public static "aroundAndAtBlockPos"(long0: long, longConsumer1: $LongConsumer$$Type): void
public static "aroundChunk"(chunkPos0: $ChunkPos$$Type, int1: integer, int2: integer, int3: integer): $Stream<$SectionPos>
public static "asLong"(int0: integer, int1: integer, int2: integer): long
public static "asLong"(blockPos0: $BlockPos$$Type): long
public "asLong"(): long
public static "betweenClosedStream"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Stream<$SectionPos>
public static "blockToSection"(long0: long): long
public static "blockToSectionCoord"(int0: integer): integer
public static "blockToSectionCoord"(double0: double): integer
public "blocksInside"(): $Stream<$BlockPos>
public static "bottomOf"(chunkAccess0: $ChunkAccess$$Type): $SectionPos
public "center"(): $BlockPos
public "chunk"(): $ChunkPos
public static "cube"(sectionPos0: $SectionPos$$Type, int1: integer): $Stream<$SectionPos>
public static "getZeroNode"(long0: long): long
public static "getZeroNode"(int0: integer, int1: integer): long
public "maxBlockX"(): integer
public "maxBlockY"(): integer
public "maxBlockZ"(): integer
public "minBlockX"(): integer
public "minBlockY"(): integer
public "minBlockZ"(): integer
public static "of"(position0: $Position$$Type): $SectionPos
public static "of"(long0: long): $SectionPos
public static "of"(entityAccess0: $EntityAccess$$Type): $SectionPos
public static "of"(int0: integer, int1: integer, int2: integer): $SectionPos
public static "of"(blockPos0: $BlockPos$$Type): $SectionPos
public static "of"(chunkPos0: $ChunkPos$$Type, int1: integer): $SectionPos
public static "offset"(long0: long, direction1: $Direction$$Type): long
public static "offset"(long0: long, int1: integer, int2: integer, int3: integer): long
public "offset"(int0: integer, int1: integer, int2: integer): $SectionPos
public "origin"(): $BlockPos
public static "posToSectionCoord"(double0: double): integer
public "relativeToBlockPos"(short0: short): $BlockPos
public "relativeToBlockX"(short0: short): integer
public "relativeToBlockY"(short0: short): integer
public "relativeToBlockZ"(short0: short): integer
public static "sectionRelative"(int0: integer): integer
public static "sectionRelativePos"(blockPos0: $BlockPos$$Type): short
public static "sectionRelativeX"(short0: short): integer
public static "sectionRelativeY"(short0: short): integer
public static "sectionRelativeZ"(short0: short): integer
public static "sectionToBlockCoord"(int0: integer, int1: integer): integer
public static "sectionToBlockCoord"(int0: integer): integer
public "x"(): integer
public static "x"(long0: long): integer
public static "y"(long0: long): integer
public "y"(): integer
public "z"(): integer
public static "z"(long0: long): integer
}
}

declare module "packages/net/minecraft/core/$Holder$Kind" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Holder$Kind extends $Enum<$Holder$Kind> {
static readonly "DIRECT": $Holder$Kind
static readonly "REFERENCE": $Holder$Kind

public static "valueOf"(string0: string): $Holder$Kind
public static "values"(): $Holder$Kind[]
}
}

declare module "packages/net/minecraft/core/$Direction$Plane" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Enum } from "packages/java/lang/$Enum"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $List } from "packages/java/util/$List"
import { $Direction$Axis } from "packages/net/minecraft/core/$Direction$Axis"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $Direction$Plane extends $Enum<$Direction$Plane> implements $Iterable<$Direction>, $Predicate<$Direction> {
static readonly "HORIZONTAL": $Direction$Plane
static readonly "VERTICAL": $Direction$Plane

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "forEach"(consumer0: $Consumer$$Type<$Direction$$Type>): void
public "getRandomAxis"(randomSource0: $RandomSource$$Type): $Direction$Axis
public "getRandomDirection"(randomSource0: $RandomSource$$Type): $Direction
public static "isEqual"<T>(object0: any): $Predicate<T>
public "iterator"(): $Iterator<$Direction>
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "shuffledCopy"(randomSource0: $RandomSource$$Type): $List<$Direction>
public "spliterator"(): $Spliterator<$Direction>
public "stream"(): $Stream<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $Direction$Plane
public static "values"(): $Direction$Plane[]
[Symbol.iterator](): IterableIterator<$Direction>;
}
}

declare module "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer" {
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ParticleType$$Type } from "packages/net/minecraft/core/particles/$ParticleType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"

/** @deprecated */
export interface $ParticleOptions$Deserializer<T extends $ParticleOptions> {
"fromCommand"(particleType0: $ParticleType$$Type<T>, stringReader1: $StringReader$$Type): T
"fromNetwork"(particleType0: $ParticleType$$Type<T>, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
}

export namespace $ParticleOptions$Deserializer {
const probejs$$marker: never
}
export abstract class $ParticleOptions$Deserializer$$Static<T extends $ParticleOptions> implements $ParticleOptions$Deserializer<T> {
}
}

declare module "packages/net/minecraft/core/$RegistryAccess" {
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $HolderLookup$Provider } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $RegistryAccess$Frozen } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $RegistryAccess$RegistryEntry } from "packages/net/minecraft/core/$RegistryAccess$RegistryEntry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter$Provider } from "packages/net/minecraft/core/$HolderGetter$Provider"

export interface $RegistryAccess extends $HolderLookup$Provider {
"allRegistriesLifecycle"(): $Lifecycle
"asGetterLookup"(): $HolderGetter$Provider
"freeze"(): $RegistryAccess$Frozen
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
"registries"(): $Stream<$RegistryAccess$RegistryEntry<any>>
"registry"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$Registry<E>>
"registryOrThrow"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Registry<E>
}

export namespace $RegistryAccess {
const EMPTY: $RegistryAccess$Frozen
const LOGGER: $Logger
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
function fromRegistryOfRegistries(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
export abstract class $RegistryAccess$$Static implements $RegistryAccess {
static readonly "EMPTY": $RegistryAccess$Frozen
static readonly "LOGGER": $Logger

static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
static "fromRegistryOfRegistries"(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
}

declare module "packages/net/minecraft/core/$BlockPos$MutableBlockPos" {
import { $Vec3i$$Type } from "packages/net/minecraft/core/$Vec3i"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $AxisCycle$$Type } from "packages/net/minecraft/core/$AxisCycle"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $BlockPos$MutableBlockPos extends $BlockPos {
constructor(double0: double, double1: double, double2: double)
constructor(int0: integer, int1: integer, int2: integer)
constructor()

public "clamp"(axis0: $Direction$Axis$$Type, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "move"(int0: integer, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "move"(vec3i0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "move"(direction0: $Direction$$Type, int1: integer): $BlockPos$MutableBlockPos
public "move"(direction0: $Direction$$Type): $BlockPos$MutableBlockPos
public "set"(long0: long): $BlockPos$MutableBlockPos
public "set"(axisCycle0: $AxisCycle$$Type, int1: integer, int2: integer, int3: integer): $BlockPos$MutableBlockPos
public "set"(vec3i0: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "set"(double0: double, double1: double, double2: double): $BlockPos$MutableBlockPos
public "set"(int0: integer, int1: integer, int2: integer): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, int1: integer, int2: integer, int3: integer): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, vec3i1: $Vec3i$$Type): $BlockPos$MutableBlockPos
public "setWithOffset"(vec3i0: $Vec3i$$Type, direction1: $Direction$$Type): $BlockPos$MutableBlockPos
public "setY"(int0: integer): $BlockPos$MutableBlockPos
public "setZ"(int0: integer): $BlockPos$MutableBlockPos
set "y"(value: integer)
set "z"(value: integer)
}
}

declare module "packages/net/minecraft/core/particles/$DustParticleOptions" {
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"
import { $DustParticleOptionsBase } from "packages/net/minecraft/core/particles/$DustParticleOptionsBase"
import { $ParticleOptions$Deserializer } from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $DustParticleOptions extends $DustParticleOptionsBase {
static readonly "CODEC": $Codec<$DustParticleOptions>
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<$DustParticleOptions>
static readonly "REDSTONE": $DustParticleOptions
static readonly "REDSTONE_PARTICLE_COLOR": $Vector3f

constructor(vector3f0: $Vector3f$$Type, float1: float)

public "getType"(): $ParticleType<$DustParticleOptions>
get "type"(): $ParticleType<$DustParticleOptions>
}
}

declare module "packages/net/minecraft/core/$IdMapper" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IdMap } from "packages/net/minecraft/core/$IdMap"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $IdMapper<T> implements $IdMap<T> {
constructor()
constructor(int0: integer)

public "add"(t0: T): void
public "addMapping"(t0: T, int1: integer): void
public "byId"(int0: integer): T
public "byIdOrThrow"(int0: integer): T
public "contains"(int0: integer): boolean
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "getId"(t0: T): integer
public "iterator"(): $Iterator<T>
public "size"(): integer
public "spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}
}

declare module "packages/net/minecraft/core/particles/$ParticleOptions" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"

export interface $ParticleOptions {
"getType"(): $ParticleType<any>
"writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"writeToString"(): string
get "type"(): $ParticleType<any>
}

export namespace $ParticleOptions {
const probejs$$marker: never
}
export abstract class $ParticleOptions$$Static implements $ParticleOptions {
}
}

declare module "packages/net/minecraft/core/$DefaultedRegistry" {
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $IdMap } from "packages/net/minecraft/core/$IdMap"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $HolderLookup$RegistryLookup } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $HolderOwner } from "packages/net/minecraft/core/$HolderOwner"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $DefaultedRegistry<T> extends $Registry<T> {
"asHolderIdMap"(): $IdMap<$Holder<T>>
"asLookup"(): $HolderLookup$RegistryLookup<T>
"asTagAddingLookup"(): $HolderLookup$RegistryLookup<T>
"bindTags"(map0: $Map$$Type<$TagKey$$Type<T>, $List$$Type<$Holder$$Type<T>>>): void
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"byNameCodec"(): $Codec<T>
"containsKey"(resourceKey0: $ResourceKey$$Type<T>): boolean
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"createIntrusiveHolder"(t0: T): $Holder$Reference<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"freeze"(): $Registry<T>
"get"(resourceLocation0: $ResourceLocation$$Type): T
"get"(resourceKey0: $ResourceKey$$Type<T>): T
"getDefaultKey"(): $ResourceLocation
"getHolder"(int0: integer): $Optional<$Holder$Reference<T>>
"getHolder"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getId"(t0: T): integer
"getKey"(t0: T): $ResourceLocation
"getOptional"(resourceKey0: $ResourceKey$$Type<T>): $Optional<T>
"getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<T>
"getOrCreateTag"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): T
"getRandom"(randomSource0: $RandomSource$$Type): $Optional<$Holder$Reference<T>>
"getResourceKey"(t0: T): $Optional<$ResourceKey<T>>
"getTag"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getTagNames"(): $Stream<$TagKey<T>>
"getTagOrEmpty"(tagKey0: $TagKey$$Type<T>): $Iterable<$Holder<T>>
"getTags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
"holderByNameCodec"(): $Codec<$Holder<T>>
"holderOwner"(): $HolderOwner<T>
"holders"(): $Stream<$Holder$Reference<T>>
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"keySet"(): $Set<$ResourceLocation>
"keys"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Stream<U>
"lifecycle"(t0: T): $Lifecycle
"registryKeySet"(): $Set<$ResourceKey<T>>
"registryLifecycle"(): $Lifecycle
"resetTags"(): void
"size"(): integer
"spliterator"(): $Spliterator<T>
"stream"(): $Stream<T>
"wrapAsHolder"(t0: T): $Holder<T>
[Symbol.iterator](): IterableIterator<T>;
get "defaultKey"(): $ResourceLocation
get "tagNames"(): $Stream<$TagKey<T>>
get "tags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
}

export namespace $DefaultedRegistry {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
function register<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
function registerMapping<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
export abstract class $DefaultedRegistry$$Static<T> implements $DefaultedRegistry<T> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
static "register"<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
static "registerMapping"<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
}

declare module "packages/net/minecraft/core/$HolderLookup$Provider" {
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter$Provider } from "packages/net/minecraft/core/$HolderGetter$Provider"

export interface $HolderLookup$Provider {
"asGetterLookup"(): $HolderGetter$Provider
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
}

export namespace $HolderLookup$Provider {
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
}
export abstract class $HolderLookup$Provider$$Static implements $HolderLookup$Provider {
static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
}
}

declare module "packages/net/minecraft/core/$HolderSet$ListBacked" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $Iterator } from "packages/java/util/$Iterator"

export class $HolderSet$ListBacked<T> implements $HolderSet<T> {
constructor()

public "addInvalidationListener"(runnable0: $Runnable$$Type): void
public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "contains"(holder0: $Holder$$Type<T>): boolean
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "get"(int0: integer): $Holder<T>
public "getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<$Holder<T>>
public "iterator"(): $Iterator<$Holder<T>>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "size"(): integer
public "spliterator"(): $Spliterator<$Holder<T>>
public "stream"(): $Stream<$Holder<T>>
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
}
}

declare module "packages/net/minecraft/core/particles/$SimpleParticleType" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $SimpleParticleType extends $ParticleType<$SimpleParticleType> implements $ParticleOptions {
constructor(boolean0: boolean)

public "codec"(): $Codec<$SimpleParticleType>
public "getType"(): $SimpleParticleType
public "writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToString"(): string
get "type"(): $SimpleParticleType
}
}

declare module "packages/net/minecraft/core/$Direction8" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Set } from "packages/java/util/$Set"
import { $Direction } from "packages/net/minecraft/core/$Direction"

export class $Direction8 extends $Enum<$Direction8> {
static readonly "EAST": $Direction8
static readonly "NORTH": $Direction8
static readonly "NORTH_EAST": $Direction8
static readonly "NORTH_WEST": $Direction8
static readonly "SOUTH": $Direction8
static readonly "SOUTH_EAST": $Direction8
static readonly "SOUTH_WEST": $Direction8
static readonly "WEST": $Direction8

public "getDirections"(): $Set<$Direction>
public "getStepX"(): integer
public "getStepZ"(): integer
public static "valueOf"(string0: string): $Direction8
public static "values"(): $Direction8[]
get "directions"(): $Set<$Direction>
get "stepX"(): integer
get "stepZ"(): integer
}
}

declare module "packages/net/minecraft/core/$LayeredRegistryAccess" {
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $List$$Type } from "packages/java/util/$List"

export class $LayeredRegistryAccess<T> {
constructor(list0: $List$$Type<T>)

public "compositeAccess"(): $RegistryAccess$Frozen
public "getAccessForLoading"(t0: T): $RegistryAccess$Frozen
public "getAccessFrom"(t0: T): $RegistryAccess$Frozen
public "getLayer"(t0: T): $RegistryAccess$Frozen
public "replaceFrom"(t0: T, ...frozen1s: $RegistryAccess$Frozen$$Type[]): $LayeredRegistryAccess<T>
public "replaceFrom"(t0: T, list1: $List$$Type<$RegistryAccess$Frozen$$Type>): $LayeredRegistryAccess<T>
}
}

declare module "packages/net/minecraft/core/$Direction$AxisDirection" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Direction$AxisDirection extends $Enum<$Direction$AxisDirection> {
static readonly "NEGATIVE": $Direction$AxisDirection
static readonly "POSITIVE": $Direction$AxisDirection

public "getName"(): string
public "getStep"(): integer
public "opposite"(): $Direction$AxisDirection
public static "valueOf"(string0: string): $Direction$AxisDirection
public static "values"(): $Direction$AxisDirection[]
get "name"(): string
get "step"(): integer
}
}

declare module "packages/net/minecraft/core/$Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Position {
"x"(): double
"y"(): double
"z"(): double
}

export namespace $Position {
const probejs$$marker: never
}
export abstract class $Position$$Static implements $Position {
}
}

declare module "packages/net/minecraft/core/$GlobalPos" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $GlobalPos {
static readonly "CODEC": $Codec<$GlobalPos>

public "dimension"(): $ResourceKey<$Level>
public static "of"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type): $GlobalPos
public "pos"(): $BlockPos
}
}

declare module "packages/net/minecraft/core/$AxisCycle" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Direction$Axis, $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"

export class $AxisCycle extends $Enum<$AxisCycle> {
static readonly "AXIS_VALUES": $Direction$Axis[]
static readonly "BACKWARD": $AxisCycle
static readonly "FORWARD": $AxisCycle
static readonly "NONE": $AxisCycle
static readonly "VALUES": $AxisCycle[]

public static "between"(axis0: $Direction$Axis$$Type, axis1: $Direction$Axis$$Type): $AxisCycle
public "cycle"(axis0: $Direction$Axis$$Type): $Direction$Axis
public "cycle"(int0: integer, int1: integer, int2: integer, axis3: $Direction$Axis$$Type): integer
public "cycle"(double0: double, double1: double, double2: double, axis3: $Direction$Axis$$Type): double
public "inverse"(): $AxisCycle
public static "valueOf"(string0: string): $AxisCycle
public static "values"(): $AxisCycle[]
}
}

declare module "packages/net/minecraft/core/$HolderSet" {
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $IForgeHolderSet } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $HolderSet<T> extends $Iterable<$Holder<T>>, $IForgeHolderSet<T> {
"addInvalidationListener"(runnable0: $Runnable$$Type): void
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"contains"(holder0: $Holder$$Type<T>): boolean
"forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
"get"(int0: integer): $Holder<T>
"getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<$Holder<T>>
"iterator"(): $Iterator<$Holder<T>>
"serializationType"(): $IForgeHolderSet$SerializationType
"size"(): integer
"spliterator"(): $Spliterator<$Holder<T>>
"stream"(): $Stream<$Holder<T>>
"unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
"unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
}

export namespace $HolderSet {
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
function direct<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
function direct<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
function emptyNamed<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
export abstract class $HolderSet$$Static<T> implements $HolderSet<T> {
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
/** @deprecated */
static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
}

declare module "packages/net/minecraft/core/particles/$DustParticleOptionsBase" {
import { $StringReader$$Type } from "packages/com/mojang/brigadier/$StringReader"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ParticleType } from "packages/net/minecraft/core/particles/$ParticleType"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $DustParticleOptionsBase implements $ParticleOptions {
static readonly "MAX_SCALE": float
static readonly "MIN_SCALE": float

constructor(vector3f0: $Vector3f$$Type, float1: float)

public "getColor"(): $Vector3f
public "getScale"(): float
public "getType"(): $ParticleType<any>
public static "readVector3f"(stringReader0: $StringReader$$Type): $Vector3f
public static "readVector3f"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Vector3f
public "writeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToString"(): string
get "color"(): $Vector3f
get "scale"(): float
get "type"(): $ParticleType<any>
}
}

declare module "packages/net/minecraft/core/dispenser/$DispenseItemBehavior" {
import { $BlockSource$$Type } from "packages/net/minecraft/core/$BlockSource"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $DispenseItemBehavior {
"dispense"(blockSource0: $BlockSource$$Type, itemStack1: $ItemStack$$Type): $ItemStack
}

export namespace $DispenseItemBehavior {
const LOGGER: $Logger
const NOOP: $DispenseItemBehavior
function bootStrap(): void
function setEntityPokingOutOfBlock(blockSource0: $BlockSource$$Type, entity1: $Entity$$Type, direction2: $Direction$$Type): void
}
export abstract class $DispenseItemBehavior$$Static implements $DispenseItemBehavior {
static readonly "LOGGER": $Logger
static readonly "NOOP": $DispenseItemBehavior

static "bootStrap"(): void
static "setEntityPokingOutOfBlock"(blockSource0: $BlockSource$$Type, entity1: $Entity$$Type, direction2: $Direction$$Type): void
}
}

declare module "packages/net/minecraft/core/$BlockSourceImpl" {
import { $BlockSource } from "packages/net/minecraft/core/$BlockSource"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockSourceImpl implements $BlockSource {
constructor(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type)

public "getBlockState"(): $BlockState
public "getEntity"<T extends $BlockEntity>(): T
public "getLevel"(): $ServerLevel
public "getPos"(): $BlockPos
public "x"(): double
public "y"(): double
public "z"(): double
get "blockState"(): $BlockState
get "entity"(): T
get "level"(): $ServerLevel
get "pos"(): $BlockPos
}
}

declare module "packages/net/minecraft/core/$Direction" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Direction$AxisDirection, $Direction$AxisDirection$$Type } from "packages/net/minecraft/core/$Direction$AxisDirection"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $Collection } from "packages/java/util/$Collection"
import { $Vec3i } from "packages/net/minecraft/core/$Vec3i"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Direction$Axis, $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Quaternionf } from "packages/org/joml/$Quaternionf"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $Direction extends $Enum<$Direction> implements $StringRepresentable {
static readonly "BY_3D_DATA": $Direction[]
static readonly "CODEC": $StringRepresentable$EnumCodec<$Direction>
static readonly "DOWN": $Direction
static readonly "EAST": $Direction
static readonly "NORTH": $Direction
static readonly "SOUTH": $Direction
static readonly "UP": $Direction
static readonly "VERTICAL_CODEC": $Codec<$Direction>
static readonly "WEST": $Direction

public static "allShuffled"(randomSource0: $RandomSource$$Type): $Collection<$Direction>
public static "byName"(string0: string): $Direction
public static "from2DDataValue"(int0: integer): $Direction
public static "from3DDataValue"(int0: integer): $Direction
public static "fromAxisAndDirection"(axis0: $Direction$Axis$$Type, axisDirection1: $Direction$AxisDirection$$Type): $Direction
public static "fromDelta"(int0: integer, int1: integer, int2: integer): $Direction
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromYRot"(double0: double): $Direction
public static "get"(axisDirection0: $Direction$AxisDirection$$Type, axis1: $Direction$Axis$$Type): $Direction
public "getAxis"(): $Direction$Axis
public "getAxisDirection"(): $Direction$AxisDirection
public "getClockWise"(): $Direction
public "getClockWise"(axis0: $Direction$Axis$$Type): $Direction
public "getCounterClockWise"(): $Direction
public "getCounterClockWise"(axis0: $Direction$Axis$$Type): $Direction
public static "getFacingAxis"(entity0: $Entity$$Type, axis1: $Direction$Axis$$Type): $Direction
public "getHorizontalIndex"(): integer
public "getIndex"(): integer
public "getName"(): string
public static "getNearest"(float0: float, float1: float, float2: float): $Direction
public static "getNearest"(double0: double, double1: double, double2: double): $Direction
public "getNormal"(): $Vec3i
public "getOpposite"(): $Direction
public "getPitch"(): float
public static "getRandom"(randomSource0: $RandomSource$$Type): $Direction
public "getRotation"(): $Quaternionf
public "getSerializedName"(): string
public "getX"(): integer
public "getY"(): integer
public "getYaw"(): float
public "getZ"(): integer
public "isFacingAngle"(float0: float): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "orderedByNearest"(entity0: $Entity$$Type): $Direction[]
public static "rotate"(matrix4f0: $Matrix4f$$Type, direction1: $Direction$$Type): $Direction
public "step"(): $Vector3f
public static "stream"(): $Stream<$Direction>
public static "valueOf"(string0: string): $Direction
public static "values"(): $Direction[]
get "axis"(): $Direction$Axis
get "axisDirection"(): $Direction$AxisDirection
get "clockWise"(): $Direction
get "counterClockWise"(): $Direction
get "horizontalIndex"(): integer
get "index"(): integer
get "name"(): string
get "normal"(): $Vec3i
get "opposite"(): $Direction
get "pitch"(): float
get "rotation"(): $Quaternionf
get "serializedName"(): string
get "x"(): integer
get "y"(): integer
get "yaw"(): float
get "z"(): integer
}
}

declare module "packages/net/minecraft/core/$RegistryAccess$RegistryEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $RegistryAccess$RegistryEntry<T> extends $Record {
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, registry1: $Registry$$Type<T>)

public "key"(): $ResourceKey<$Registry<T>>
public "value"(): $Registry<T>
}
}

declare module "packages/net/minecraft/core/$FrontAndTop" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $FrontAndTop extends $Enum<$FrontAndTop> implements $StringRepresentable {
static readonly "DOWN_EAST": $FrontAndTop
static readonly "DOWN_NORTH": $FrontAndTop
static readonly "DOWN_SOUTH": $FrontAndTop
static readonly "DOWN_WEST": $FrontAndTop
static readonly "EAST_UP": $FrontAndTop
static readonly "NORTH_UP": $FrontAndTop
static readonly "SOUTH_UP": $FrontAndTop
static readonly "UP_EAST": $FrontAndTop
static readonly "UP_NORTH": $FrontAndTop
static readonly "UP_SOUTH": $FrontAndTop
static readonly "UP_WEST": $FrontAndTop
static readonly "WEST_UP": $FrontAndTop

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public static "fromFrontAndTop"(direction0: $Direction$$Type, direction1: $Direction$$Type): $FrontAndTop
public "front"(): $Direction
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "top"(): $Direction
public static "valueOf"(string0: string): $FrontAndTop
public static "values"(): $FrontAndTop[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/core/$WritableRegistry" {
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $IdMap } from "packages/net/minecraft/core/$IdMap"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $HolderGetter } from "packages/net/minecraft/core/$HolderGetter"
import { $Lifecycle, $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $HolderLookup$RegistryLookup } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $HolderOwner } from "packages/net/minecraft/core/$HolderOwner"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $WritableRegistry<T> extends $Registry<T> {
"asHolderIdMap"(): $IdMap<$Holder<T>>
"asLookup"(): $HolderLookup$RegistryLookup<T>
"asTagAddingLookup"(): $HolderLookup$RegistryLookup<T>
"bindTags"(map0: $Map$$Type<$TagKey$$Type<T>, $List$$Type<$Holder$$Type<T>>>): void
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"byNameCodec"(): $Codec<T>
"containsKey"(resourceKey0: $ResourceKey$$Type<T>): boolean
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"createIntrusiveHolder"(t0: T): $Holder$Reference<T>
"createRegistrationLookup"(): $HolderGetter<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"freeze"(): $Registry<T>
"get"(resourceKey0: $ResourceKey$$Type<T>): T
"get"(resourceLocation0: $ResourceLocation$$Type): T
"getHolder"(int0: integer): $Optional<$Holder$Reference<T>>
"getHolder"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getId"(t0: T): integer
"getKey"(t0: T): $ResourceLocation
"getOptional"(resourceKey0: $ResourceKey$$Type<T>): $Optional<T>
"getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<T>
"getOrCreateTag"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): T
"getRandom"(randomSource0: $RandomSource$$Type): $Optional<$Holder$Reference<T>>
"getResourceKey"(t0: T): $Optional<$ResourceKey<T>>
"getTag"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getTagNames"(): $Stream<$TagKey<T>>
"getTagOrEmpty"(tagKey0: $TagKey$$Type<T>): $Iterable<$Holder<T>>
"getTags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
"holderByNameCodec"(): $Codec<$Holder<T>>
"holderOwner"(): $HolderOwner<T>
"holders"(): $Stream<$Holder$Reference<T>>
"isEmpty"(): boolean
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"keySet"(): $Set<$ResourceLocation>
"keys"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Stream<U>
"lifecycle"(t0: T): $Lifecycle
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
"registerMapping"(int0: integer, resourceKey1: $ResourceKey$$Type<T>, t2: T, lifecycle3: $Lifecycle$$Type): $Holder<T>
"registryKeySet"(): $Set<$ResourceKey<T>>
"registryLifecycle"(): $Lifecycle
"resetTags"(): void
"size"(): integer
"spliterator"(): $Spliterator<T>
"stream"(): $Stream<T>
"wrapAsHolder"(t0: T): $Holder<T>
[Symbol.iterator](): IterableIterator<T>;
get "tagNames"(): $Stream<$TagKey<T>>
get "tags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
get "empty"(): boolean
}

export namespace $WritableRegistry {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
function register<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
function registerMapping<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
export abstract class $WritableRegistry$$Static<T> implements $WritableRegistry<T> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
static "register"<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
static "registerMapping"<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
}

declare module "packages/net/minecraft/core/$NonNullList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $AbstractList } from "packages/java/util/$AbstractList"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $NonNullList<E> extends $AbstractList<E> {
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public static "create"<E>(): $NonNullList<E>
public static "createWithCapacity"<E>(int0: integer): $NonNullList<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "isEmpty"(): boolean
public static "of"<E>(e0: E, ...e1s: E[]): $NonNullList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<E>
public "remove"(int0: integer): E
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "withSize"<E>(int0: integer, e1: E): $NonNullList<E>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/core/$BlockSource" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Position } from "packages/net/minecraft/core/$Position"

export interface $BlockSource extends $Position {
"getBlockState"(): $BlockState
"getEntity"<T extends $BlockEntity>(): T
"getLevel"(): $ServerLevel
"getPos"(): $BlockPos
"x"(): double
"y"(): double
"z"(): double
get "blockState"(): $BlockState
get "entity"(): T
get "level"(): $ServerLevel
get "pos"(): $BlockPos
}

export namespace $BlockSource {
const probejs$$marker: never
}
export abstract class $BlockSource$$Static implements $BlockSource {
}
}

declare module "packages/net/minecraft/core/$Holder$Reference" {
import { $Holder$Kind } from "packages/net/minecraft/core/$Holder$Kind"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ITag$$Type } from "packages/net/minecraftforge/registries/tags/$ITag"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Holder$Reference$Type, $Holder$Reference$Type$$Type } from "packages/net/minecraft/core/$Holder$Reference$Type"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $Holder$Reference<T> implements $Holder<T> {
"key": $ResourceKey<T>
"value": T

constructor(type0: $Holder$Reference$Type$$Type, holderOwner1: $HolderOwner$$Type<T>, resourceKey2: $ResourceKey$$Type<T>, t3: T)

public "bindKey"(resourceKey0: $ResourceKey$$Type<T>): void
public "bindTags"(collection0: $Collection$$Type<$TagKey$$Type<T>>): void
public "bindValue"(t0: T): void
public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "containsTag"(tagKey0: $TagKey$$Type<T>): boolean
public "containsTag"(iTag0: $ITag$$Type<T>): boolean
/** @deprecated */
public static "createIntrusive"<T>(holderOwner0: $HolderOwner$$Type<T>, t1: T): $Holder$Reference<T>
public static "createStandAlone"<T>(holderOwner0: $HolderOwner$$Type<T>, resourceKey1: $ResourceKey$$Type<T>): $Holder$Reference<T>
public static "direct"<T>(t0: T): $Holder<T>
public "get"(): T
public "getTagKeys"(): $Stream<$TagKey<T>>
public "getType"(): $Holder$Reference$Type
public "is"(resourceLocation0: $ResourceLocation$$Type): boolean
public "is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
public "is"(resourceKey0: $ResourceKey$$Type<T>): boolean
public "is"(tagKey0: $TagKey$$Type<T>): boolean
public "isBound"(): boolean
public "key"(): $ResourceKey<T>
public "kind"(): $Holder$Kind
public "tags"(): $Stream<$TagKey<T>>
public "unwrap"(): $Either<$ResourceKey<T>, T>
public "unwrapKey"(): $Optional<$ResourceKey<T>>
public "value"(): T
get "tagKeys"(): $Stream<$TagKey<T>>
get "type"(): $Holder$Reference$Type
get "bound"(): boolean
}
}

declare module "packages/net/minecraft/core/$HolderGetter" {
import { $Optional } from "packages/java/util/$Optional"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export interface $HolderGetter<T> {
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
}

export namespace $HolderGetter {
const probejs$$marker: never
}
export abstract class $HolderGetter$$Static<T> implements $HolderGetter<T> {
}
}

declare module "packages/net/minecraft/core/$Holder$Direct" {
import { $Holder$Kind } from "packages/net/minecraft/core/$Holder$Kind"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ITag$$Type } from "packages/net/minecraftforge/registries/tags/$ITag"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $Holder$Direct<T> extends $Record implements $Holder<T> {
constructor(value: T)

public "canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
public "containsTag"(tagKey0: $TagKey$$Type<T>): boolean
public "containsTag"(iTag0: $ITag$$Type<T>): boolean
public static "direct"<T>(t0: T): $Holder<T>
public "get"(): T
public "getTagKeys"(): $Stream<$TagKey<T>>
public "is"(resourceLocation0: $ResourceLocation$$Type): boolean
public "is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
public "is"(resourceKey0: $ResourceKey$$Type<T>): boolean
public "is"(tagKey0: $TagKey$$Type<T>): boolean
public "isBound"(): boolean
public "kind"(): $Holder$Kind
public "tags"(): $Stream<$TagKey<T>>
public "unwrap"(): $Either<$ResourceKey<T>, T>
public "unwrapKey"(): $Optional<$ResourceKey<T>>
public "value"(): T
get "tagKeys"(): $Stream<$TagKey<T>>
get "bound"(): boolean
}
}

declare module "packages/net/minecraft/core/$HolderSet$Named" {
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $HolderSet$ListBacked } from "packages/net/minecraft/core/$HolderSet$ListBacked"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export class $HolderSet$Named<T> extends $HolderSet$ListBacked<T> {
public "bind"(list0: $List$$Type<$Holder$$Type<T>>): void
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
public static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
public static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
public static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
/** @deprecated */
public static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
public "forEach"(consumer0: $Consumer$$Type<$Holder$$Type<T>>): void
public "key"(): $TagKey<T>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
}
}

declare module "packages/net/minecraft/core/$IdMap" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $IdMap<T> extends $Iterable<T> {
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"forEach"(consumer0: $Consumer$$Type<T>): void
"getId"(t0: T): integer
"iterator"(): $Iterator<T>
"size"(): integer
"spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $IdMap {
const DEFAULT: integer
}
export abstract class $IdMap$$Static<T> implements $IdMap<T> {
static readonly "DEFAULT": integer

}
}

declare module "packages/net/minecraft/core/$HolderGetter$Provider" {
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter } from "packages/net/minecraft/core/$HolderGetter"

export interface $HolderGetter$Provider {
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderGetter<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderGetter<T>
}

export namespace $HolderGetter$Provider {
const probejs$$marker: never
}
export abstract class $HolderGetter$Provider$$Static implements $HolderGetter$Provider {
}
}

declare module "packages/net/minecraft/core/$Direction$Axis" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Direction$Plane } from "packages/net/minecraft/core/$Direction$Plane"

export class $Direction$Axis extends $Enum<$Direction$Axis> implements $StringRepresentable, $Predicate<$Direction> {
static readonly "CODEC": $StringRepresentable$EnumCodec<$Direction$Axis>
static readonly "VALUES": $Direction$Axis[]
static readonly "X": $Direction$Axis
static readonly "Y": $Direction$Axis
static readonly "Z": $Direction$Axis

public "and"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public static "byName"(string0: string): $Direction$Axis
public "choose"(int0: integer, int1: integer, int2: integer): integer
public "choose"(double0: double, double1: double, double2: double): double
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getName"(): string
public "getPlane"(): $Direction$Plane
public static "getRandom"(randomSource0: $RandomSource$$Type): $Direction$Axis
public "getSerializedName"(): string
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isHorizontal"(): boolean
public "isVertical"(): boolean
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public "negate"(): $Predicate<$Direction>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$Direction$$Type>): $Predicate<$Direction>
public "test"(direction0: $Direction$$Type): boolean
public static "valueOf"(string0: string): $Direction$Axis
public static "values"(): $Direction$Axis[]
get "name"(): string
get "plane"(): $Direction$Plane
get "serializedName"(): string
get "horizontal"(): boolean
get "vertical"(): boolean
}
}

declare module "packages/net/minecraft/core/cauldron/$CauldronInteraction" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Object2ObjectOpenHashMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectOpenHashMap"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $CauldronInteraction {
"interact"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type): $InteractionResult
}

export namespace $CauldronInteraction {
const BANNER: $CauldronInteraction
const DYED_ITEM: $CauldronInteraction
const EMPTY: $Map<$Item, $CauldronInteraction>
const FILL_LAVA: $CauldronInteraction
const FILL_POWDER_SNOW: $CauldronInteraction
const FILL_WATER: $CauldronInteraction
const LAVA: $Map<$Item, $CauldronInteraction>
const POWDER_SNOW: $Map<$Item, $CauldronInteraction>
const SHULKER_BOX: $CauldronInteraction
const WATER: $Map<$Item, $CauldronInteraction>
function addDefaultInteractions(map0: $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>): void
function bootStrap(): void
function emptyBucket(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type, itemStack4: $ItemStack$$Type, blockState5: $BlockState$$Type, soundEvent6: $SoundEvent$$Type): $InteractionResult
function fillBucket(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type, itemStack6: $ItemStack$$Type, predicate7: $Predicate$$Type<$BlockState$$Type>, soundEvent8: $SoundEvent$$Type): $InteractionResult
function newInteractionMap(): $Object2ObjectOpenHashMap<$Item, $CauldronInteraction>
}
export abstract class $CauldronInteraction$$Static implements $CauldronInteraction {
static readonly "BANNER": $CauldronInteraction
static readonly "DYED_ITEM": $CauldronInteraction
static readonly "EMPTY": $Map<$Item, $CauldronInteraction>
static readonly "FILL_LAVA": $CauldronInteraction
static readonly "FILL_POWDER_SNOW": $CauldronInteraction
static readonly "FILL_WATER": $CauldronInteraction
static readonly "LAVA": $Map<$Item, $CauldronInteraction>
static readonly "POWDER_SNOW": $Map<$Item, $CauldronInteraction>
static readonly "SHULKER_BOX": $CauldronInteraction
static readonly "WATER": $Map<$Item, $CauldronInteraction>

static "addDefaultInteractions"(map0: $Map$$Type<$Item$$Type, $CauldronInteraction$$Type>): void
static "bootStrap"(): void
static "emptyBucket"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type, interactionHand3: $InteractionHand$$Type, itemStack4: $ItemStack$$Type, blockState5: $BlockState$$Type, soundEvent6: $SoundEvent$$Type): $InteractionResult
static "fillBucket"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type, interactionHand4: $InteractionHand$$Type, itemStack5: $ItemStack$$Type, itemStack6: $ItemStack$$Type, predicate7: $Predicate$$Type<$BlockState$$Type>, soundEvent8: $SoundEvent$$Type): $InteractionResult
static "newInteractionMap"(): $Object2ObjectOpenHashMap<$Item, $CauldronInteraction>
}
}

declare module "packages/net/minecraft/core/$Holder$Reference$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Holder$Reference$Type extends $Enum<$Holder$Reference$Type> {
static readonly "INTRUSIVE": $Holder$Reference$Type
static readonly "STAND_ALONE": $Holder$Reference$Type

public static "valueOf"(string0: string): $Holder$Reference$Type
public static "values"(): $Holder$Reference$Type[]
}
}

declare module "packages/net/minecraft/core/particles/$ParticleGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ParticleGroup {
static readonly "SPORE_BLOSSOM": $ParticleGroup

constructor(int0: integer)

public "getLimit"(): integer
get "limit"(): integer
}
}

declare module "packages/net/minecraft/core/$Holder" {
import { $Holder$Kind } from "packages/net/minecraft/core/$Holder$Kind"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ITag$$Type } from "packages/net/minecraftforge/registries/tags/$ITag"
import { $IReverseTag } from "packages/net/minecraftforge/registries/tags/$IReverseTag"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $Holder<T> extends $Supplier<T>, $IReverseTag<T> {
"canSerializeIn"(holderOwner0: $HolderOwner$$Type<T>): boolean
"containsTag"(tagKey0: $TagKey$$Type<T>): boolean
"containsTag"(iTag0: $ITag$$Type<T>): boolean
"get"(): T
"getTagKeys"(): $Stream<$TagKey<T>>
"is"(resourceLocation0: $ResourceLocation$$Type): boolean
"is"(predicate0: $Predicate$$Type<$ResourceKey$$Type<T>>): boolean
"is"(resourceKey0: $ResourceKey$$Type<T>): boolean
"is"(tagKey0: $TagKey$$Type<T>): boolean
"isBound"(): boolean
"kind"(): $Holder$Kind
"tags"(): $Stream<$TagKey<T>>
"unwrap"(): $Either<$ResourceKey<T>, T>
"unwrapKey"(): $Optional<$ResourceKey<T>>
"value"(): T
get "tagKeys"(): $Stream<$TagKey<T>>
get "bound"(): boolean
}

export namespace $Holder {
function direct<T>(t0: T): $Holder<T>
}
export abstract class $Holder$$Static<T> implements $Holder<T> {
static "direct"<T>(t0: T): $Holder<T>
}
}

declare module "packages/net/minecraft/core/$Vec3i" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Position$$Type } from "packages/net/minecraft/core/$Position"

export class $Vec3i implements $Comparable<$Vec3i> {
static readonly "CODEC": $Codec<$Vec3i>
static readonly "ZERO": $Vec3i

constructor(int0: integer, int1: integer, int2: integer)

public "above"(int0: integer): $Vec3i
public "above"(): $Vec3i
public "below"(int0: integer): $Vec3i
public "below"(): $Vec3i
public "closerThan"(vec3i0: $Vec3i$$Type, double1: double): boolean
public "closerToCenterThan"(position0: $Position$$Type, double1: double): boolean
public "compareTo"(vec3i0: $Vec3i$$Type): integer
public "cross"(vec3i0: $Vec3i$$Type): $Vec3i
public "distManhattan"(vec3i0: $Vec3i$$Type): integer
public "distSqr"(vec3i0: $Vec3i$$Type): double
public "distToCenterSqr"(double0: double, double1: double, double2: double): double
public "distToCenterSqr"(position0: $Position$$Type): double
public "distToLowCornerSqr"(double0: double, double1: double, double2: double): double
public "east"(int0: integer): $Vec3i
public "east"(): $Vec3i
public "get"(axis0: $Direction$Axis$$Type): integer
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "multiply"(int0: integer): $Vec3i
public "north"(int0: integer): $Vec3i
public "north"(): $Vec3i
public "offset"(int0: integer, int1: integer, int2: integer): $Vec3i
public "offset"(vec3i0: $Vec3i$$Type): $Vec3i
public static "offsetCodec"(int0: integer): $Codec<$Vec3i>
public "relative"(direction0: $Direction$$Type, int1: integer): $Vec3i
public "relative"(axis0: $Direction$Axis$$Type, int1: integer): $Vec3i
public "relative"(direction0: $Direction$$Type): $Vec3i
public "south"(int0: integer): $Vec3i
public "south"(): $Vec3i
public "subtract"(vec3i0: $Vec3i$$Type): $Vec3i
public "toShortString"(): string
public "west"(int0: integer): $Vec3i
public "west"(): $Vec3i
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "packages/net/minecraft/core/$RegistryAccess$Frozen" {
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $Lifecycle } from "packages/com/mojang/serialization/$Lifecycle"
import { $HolderLookup$Provider } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $RegistryAccess$RegistryEntry } from "packages/net/minecraft/core/$RegistryAccess$RegistryEntry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter$Provider } from "packages/net/minecraft/core/$HolderGetter$Provider"

export interface $RegistryAccess$Frozen extends $RegistryAccess {
"allRegistriesLifecycle"(): $Lifecycle
"asGetterLookup"(): $HolderGetter$Provider
"freeze"(): $RegistryAccess$Frozen
"lookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$HolderLookup$RegistryLookup<T>>
"lookupOrThrow"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup$RegistryLookup<T>
"registries"(): $Stream<$RegistryAccess$RegistryEntry<any>>
"registry"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$Registry<E>>
"registryOrThrow"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Registry<E>
}

export namespace $RegistryAccess$Frozen {
function create(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
function fromRegistryOfRegistries(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
export abstract class $RegistryAccess$Frozen$$Static implements $RegistryAccess$Frozen {
static "create"(stream0: $Stream$$Type<$HolderLookup$RegistryLookup$$Type<any>>): $HolderLookup$Provider
static "fromRegistryOfRegistries"(registry0: $Registry$$Type<$Registry$$Type<any>>): $RegistryAccess$Frozen
}
}

declare module "packages/net/minecraft/core/$HolderLookup" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $HolderGetter } from "packages/net/minecraft/core/$HolderGetter"

export interface $HolderLookup<T> extends $HolderGetter<T> {
"filterElements"(predicate0: $Predicate$$Type<T>): $HolderLookup<T>
"get"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"get"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getOrThrow"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"listElementIds"(): $Stream<$ResourceKey<T>>
"listElements"(): $Stream<$Holder$Reference<T>>
"listTagIds"(): $Stream<$TagKey<T>>
"listTags"(): $Stream<$HolderSet$Named<T>>
}

export namespace $HolderLookup {
const probejs$$marker: never
}
export abstract class $HolderLookup$$Static<T> implements $HolderLookup<T> {
}
}

