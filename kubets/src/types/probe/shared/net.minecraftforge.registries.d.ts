declare module "packages/net/minecraftforge/registries/$IdMappingEvent$ModRemapping" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $IdMappingEvent$ModRemapping {
readonly "key": $ResourceLocation
readonly "newId": integer
readonly "oldId": integer
readonly "registry": $ResourceLocation

}
}

declare module "packages/net/minecraftforge/registries/$RegistryObject" {
import { $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $RegistryObject<T> implements $Supplier<T> {
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $RegistryObject<U>
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, iForgeRegistry1: $IForgeRegistry$$Type<T>): $RegistryObject<U>
public static "create"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, string2: string): $RegistryObject<U>
public static "createOptional"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, string2: string): $RegistryObject<U>
public static "createOptional"<T, U extends T>(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, string2: string): $RegistryObject<U>
public "filter"(predicate0: $Predicate$$Type<T>): $RegistryObject<T>
public "flatMap"<U>(function0: $Function$$Type<T, $Optional<U>>): $Optional<U>
public "get"(): any
public "getHolder"(): $Optional<$Holder<T>>
public "getId"(): $ResourceLocation
public "getKey"(): $ResourceKey<T>
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "isPresent"(): boolean
public "lazyMap"<U>(function0: $Function$$Type<T, U>): $Supplier<U>
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public "orElse"(t0: T): T
public "orElseGet"(supplier0: $Supplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): T
public "stream"(): $Stream<T>
get "holder"(): $Optional<$Holder<T>>
get "id"(): $ResourceLocation
get "key"(): $ResourceKey<T>
get "present"(): boolean
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry" {
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ITagManager } from "packages/net/minecraftforge/registries/tags/$ITagManager"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $IForgeRegistry<V> extends $Iterable<V> {
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"register"(string0: string, v1: V): void
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $IForgeRegistry {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$$Static<V> implements $IForgeRegistry<V> {
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet" {
import { $HolderSet } from "packages/net/minecraft/core/$HolderSet"
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $HolderSetType } from "packages/net/minecraftforge/registries/holdersets/$HolderSetType"
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

export interface $ICustomHolderSet<T> extends $HolderSet<T> {
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
"type"(): $HolderSetType
"unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
"unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
}

export namespace $ICustomHolderSet {
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
function direct<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
function direct<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
function direct<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
function emptyNamed<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
export abstract class $ICustomHolderSet$$Static<T> implements $ICustomHolderSet<T> {
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, list1: $List$$Type<E>): $HolderSet$Direct<T>
static "direct"<E, T>(function0: $Function$$Type<E, $Holder<T>>, ...e1s: E[]): $HolderSet$Direct<T>
static "direct"<T>(list0: $List$$Type<$Holder$$Type<T>>): $HolderSet$Direct<T>
static "direct"<T>(...holder0s: $Holder$$Type<T>[]): $HolderSet$Direct<T>
/** @deprecated */
static "emptyNamed"<T>(holderOwner0: $HolderOwner$$Type<T>, tagKey1: $TagKey$$Type<T>): $HolderSet$Named<T>
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$HolderSetType" {
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $ICustomHolderSet } from "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet"

export interface $HolderSetType {
"makeCodec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<$Holder$$Type<T>>, boolean2: boolean): $Codec<$ICustomHolderSet<T>>
}

export namespace $HolderSetType {
const probejs$$marker: never
}
export abstract class $HolderSetType$$Static implements $HolderSetType {
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$CompositeHolderSet" {
import { $HolderSet, $HolderSet$$Type } from "packages/net/minecraft/core/$HolderSet"
import { $IForgeHolderSet$SerializationType } from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $HolderSetType } from "packages/net/minecraftforge/registries/holdersets/$HolderSetType"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ICustomHolderSet } from "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet"
import { $HolderSet$Direct } from "packages/net/minecraft/core/$HolderSet$Direct"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $HolderOwner$$Type } from "packages/net/minecraft/core/$HolderOwner"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $HolderSet$Named } from "packages/net/minecraft/core/$HolderSet$Named"
import { $Iterator } from "packages/java/util/$Iterator"

export class $CompositeHolderSet<T> implements $ICustomHolderSet<T> {
constructor(list0: $List$$Type<$HolderSet$$Type<T>>)

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
public "getComponents"(): $List<$HolderSet<T>>
public "getList"(): $List<$Holder<T>>
public "getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<$Holder<T>>
public "getSet"(): $Set<$Holder<T>>
public "homogenize"(): $List<$HolderSet<T>>
public "isHomogenous"(): boolean
public "iterator"(): $Iterator<$Holder<T>>
public "serializationType"(): $IForgeHolderSet$SerializationType
public "size"(): integer
public "spliterator"(): $Spliterator<$Holder<T>>
public "stream"(): $Stream<$Holder<T>>
public "type"(): $HolderSetType
public "unwrap"(): $Either<$TagKey<T>, $List<$Holder<T>>>
public "unwrapKey"(): $Optional<$TagKey<T>>
[Symbol.iterator](): IterableIterator<$Holder<T>>;
get "components"(): $List<$HolderSet<T>>
get "list"(): $List<$Holder<T>>
get "set"(): $Set<$Holder<T>>
get "homogenous"(): boolean
}
}

declare module "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping" {
import { $Record } from "packages/java/lang/$Record"

export class $IdMappingEvent$IdRemapping extends $Record {
constructor(currId: integer, newId: integer)

public "currId"(): integer
public "newId"(): integer
}
}

declare module "packages/net/minecraftforge/registries/$RegisterEvent" {
import { $IForgeRegistry } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $RegisterEvent$RegisterHelper$$Type } from "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegisterEvent extends $Event implements $IModBusEvent {
constructor()

public "getForgeRegistry"<T>(): $IForgeRegistry<T>
public "getRegistryKey"(): $ResourceKey<$Registry<any>>
public "getVanillaRegistry"<T>(): $Registry<T>
public "register"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type, supplier2: $Supplier$$Type<T>): void
public "register"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, consumer1: $Consumer$$Type<$RegisterEvent$RegisterHelper$$Type<T>>): void
get "forgeRegistry"(): $IForgeRegistry<T>
get "registryKey"(): $ResourceKey<$Registry<any>>
get "vanillaRegistry"(): $Registry<T>
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback" {
import { $RegistryManager$$Type } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$ClearCallback<V> {
"onClear"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$ClearCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$ClearCallback$$Static<V> implements $IForgeRegistry$ClearCallback<V> {
}
}

declare module "packages/net/minecraftforge/registries/tags/$IReverseTag" {
import { $ITag$$Type } from "packages/net/minecraftforge/registries/tags/$ITag"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export interface $IReverseTag<V> {
"containsTag"(tagKey0: $TagKey$$Type<V>): boolean
"containsTag"(iTag0: $ITag$$Type<V>): boolean
"getTagKeys"(): $Stream<$TagKey<V>>
get "tagKeys"(): $Stream<$TagKey<V>>
}

export namespace $IReverseTag {
const probejs$$marker: never
}
export abstract class $IReverseTag$$Static<V> implements $IReverseTag<V> {
}
}

declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent" {
import { $IForgeRegistry, $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $MissingMappingsEvent$Mapping, $MissingMappingsEvent$Mapping$$Type } from "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $MissingMappingsEvent extends $Event {
constructor()
constructor(resourceKey0: $ResourceKey$$Type<$Registry<any>>, iForgeRegistry1: $IForgeRegistry$$Type<any>, collection2: $Collection$$Type<$MissingMappingsEvent$Mapping$$Type<any>>)

public "getAllMappings"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $List<$MissingMappingsEvent$Mapping<T>>
public "getKey"(): $ResourceKey<$Registry<any>>
public "getMappings"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, string1: string): $List<$MissingMappingsEvent$Mapping<T>>
public "getRegistry"(): $IForgeRegistry<any>
get "key"(): $ResourceKey<$Registry<any>>
get "registry"(): $IForgeRegistry<any>
}
}

declare module "packages/net/minecraftforge/registries/$IdMappingEvent" {
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $IdMappingEvent$IdRemapping$$Type } from "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IdMappingEvent$ModRemapping } from "packages/net/minecraftforge/registries/$IdMappingEvent$ModRemapping"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export class $IdMappingEvent extends $Event {
constructor(map0: $Map$$Type<$ResourceLocation$$Type, $Map$$Type<$ResourceLocation$$Type, $IdMappingEvent$IdRemapping$$Type>>, boolean1: boolean)
constructor()

public "getRegistries"(): $ImmutableSet<$ResourceLocation>
public "getRemaps"(resourceLocation0: $ResourceLocation$$Type): $ImmutableList<$IdMappingEvent$ModRemapping>
public "isFrozen"(): boolean
get "registries"(): $ImmutableSet<$ResourceLocation>
get "frozen"(): boolean
}
}

declare module "packages/net/minecraftforge/registries/tags/$ITagManager" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ITag, $ITag$$Type } from "packages/net/minecraftforge/registries/tags/$ITag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IReverseTag } from "packages/net/minecraftforge/registries/tags/$IReverseTag"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $ITagManager<V> extends $Iterable<$ITag<V>> {
"addOptionalTagDefaults"(tagKey0: $TagKey$$Type<V>, set1: $Set$$Type<$Supplier$$Type<V>>): void
"createOptionalTagKey"(resourceLocation0: $ResourceLocation$$Type, set1: $Set$$Type<$Supplier$$Type<V>>): $TagKey<V>
"createTagKey"(resourceLocation0: $ResourceLocation$$Type): $TagKey<V>
"forEach"(consumer0: $Consumer$$Type<$ITag$$Type<V>>): void
"getReverseTag"(v0: V): $Optional<$IReverseTag<V>>
"getTag"(tagKey0: $TagKey$$Type<V>): $ITag<V>
"getTagNames"(): $Stream<$TagKey<V>>
"isKnownTagName"(tagKey0: $TagKey$$Type<V>): boolean
"iterator"(): $Iterator<$ITag<V>>
"spliterator"(): $Spliterator<$ITag<V>>
"stream"(): $Stream<$ITag<V>>
[Symbol.iterator](): IterableIterator<$ITag<V>>;
get "tagNames"(): $Stream<$TagKey<V>>
}

export namespace $ITagManager {
const probejs$$marker: never
}
export abstract class $ITagManager$$Static<V> implements $ITagManager<V> {
}
}

declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $IForgeRegistry, $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MissingMappingsEvent$Mapping<T> implements $Comparable<$MissingMappingsEvent$Mapping<T>> {
constructor(iForgeRegistry0: $IForgeRegistry$$Type<T>, iForgeRegistry1: $IForgeRegistry$$Type<T>, resourceLocation2: $ResourceLocation$$Type, int3: integer)

public "compareTo"(mapping0: $MissingMappingsEvent$Mapping$$Type<T>): integer
public "fail"(): void
public "getId"(): integer
public "getKey"(): $ResourceLocation
public "getRegistry"(): $IForgeRegistry<T>
public "ignore"(): void
public "remap"(t0: T): void
public "warn"(): void
get "id"(): integer
get "key"(): $ResourceLocation
get "registry"(): $IForgeRegistry<T>
}
}

declare module "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper" {
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegisterEvent$RegisterHelper<T> {
"register"(string0: string, t1: T): void
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T): void
"register"(resourceLocation0: $ResourceLocation$$Type, t1: T): void
}

export namespace $RegisterEvent$RegisterHelper {
const probejs$$marker: never
}
export abstract class $RegisterEvent$RegisterHelper$$Static<T> implements $RegisterEvent$RegisterHelper<T> {
}
}

declare module "packages/net/minecraftforge/registries/$DataPackRegistryEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $DataPackRegistryEvent extends $Event implements $IModBusEvent {
constructor()

}
}

declare module "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IntSet } from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import { $Map } from "packages/java/util/$Map"
import { $Object2IntMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"

export class $ForgeRegistry$Snapshot {
readonly "aliases": $Map<$ResourceLocation, $ResourceLocation>
readonly "blocked": $IntSet
readonly "ids": $Object2IntMap<$ResourceLocation>
readonly "overrides": $Map<$ResourceLocation, string>

constructor()

public "getPacketData"(): $FriendlyByteBuf
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ForgeRegistry$Snapshot
public static "read"(compoundTag0: $CompoundTag$$Type): $ForgeRegistry$Snapshot
public "write"(): $CompoundTag
get "packetData"(): $FriendlyByteBuf
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$MissingFactory<V> {
"createMissing"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): V
}

export namespace $IForgeRegistry$MissingFactory {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$MissingFactory$$Static<V> implements $IForgeRegistry$MissingFactory<V> {
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistryInternal" {
import { $IForgeRegistry } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ITagManager } from "packages/net/minecraftforge/registries/tags/$ITagManager"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryInternal<V> extends $IForgeRegistry<V> {
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(int0: integer): V
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"register"(int0: integer, resourceLocation1: $ResourceLocation$$Type, v2: V): void
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"register"(string0: string, v1: V): void
"setSlaveMap"(resourceLocation0: $ResourceLocation$$Type, object1: any): void
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $IForgeRegistryInternal {
const probejs$$marker: never
}
export abstract class $IForgeRegistryInternal$$Static<V> implements $IForgeRegistryInternal<V> {
}
}

declare module "packages/net/minecraftforge/registries/$NewRegistryEvent" {
import { $IForgeRegistry, $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $RegistryBuilder$$Type } from "packages/net/minecraftforge/registries/$RegistryBuilder"
import { $Supplier } from "packages/java/util/function/$Supplier"

export class $NewRegistryEvent extends $Event implements $IModBusEvent {
constructor()

public "create"<V>(registryBuilder0: $RegistryBuilder$$Type<V>): $Supplier<$IForgeRegistry<V>>
public "create"<V>(registryBuilder0: $RegistryBuilder$$Type<V>, consumer1: $Consumer$$Type<$IForgeRegistry$$Type<V>>): $Supplier<$IForgeRegistry<V>>
}
}

declare module "packages/net/minecraftforge/registries/$RegistryBuilder" {
import { $IForgeRegistry$MissingFactory, $IForgeRegistry$MissingFactory$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory"
import { $IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import { $IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import { $IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"
import { $Set } from "packages/java/util/$Set"
import { $IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"
import { $IForgeRegistry$ValidateCallback, $IForgeRegistry$ValidateCallback$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryBuilder<T> {
constructor()

public "add"(createCallback0: $IForgeRegistry$CreateCallback$$Type<T>): $RegistryBuilder<T>
public "add"(validateCallback0: $IForgeRegistry$ValidateCallback$$Type<T>): $RegistryBuilder<T>
public "add"(bakeCallback0: $IForgeRegistry$BakeCallback$$Type<T>): $RegistryBuilder<T>
public "add"(addCallback0: $IForgeRegistry$AddCallback$$Type<T>): $RegistryBuilder<T>
public "add"(clearCallback0: $IForgeRegistry$ClearCallback$$Type<T>): $RegistryBuilder<T>
public "addCallback"(object0: any): $RegistryBuilder<T>
public "allowModification"(): $RegistryBuilder<T>
public "disableOverrides"(): $RegistryBuilder<T>
public "disableSaving"(): $RegistryBuilder<T>
public "disableSync"(): $RegistryBuilder<T>
public "getAdd"(): $IForgeRegistry$AddCallback<T>
public "getAllowModifications"(): boolean
public "getAllowOverrides"(): boolean
public "getBake"(): $IForgeRegistry$BakeCallback<T>
public "getClear"(): $IForgeRegistry$ClearCallback<T>
public "getCreate"(): $IForgeRegistry$CreateCallback<T>
public "getDefault"(): $ResourceLocation
public "getLegacyNames"(): $Set<$ResourceLocation>
public "getMaxId"(): integer
public "getMinId"(): integer
public "getMissingFactory"(): $IForgeRegistry$MissingFactory<T>
public "getSaveToDisc"(): boolean
public "getSync"(): boolean
public "getValidate"(): $IForgeRegistry$ValidateCallback<T>
public "hasTags"(): $RegistryBuilder<T>
public "legacyName"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public "legacyName"(string0: string): $RegistryBuilder<T>
public "missing"(missingFactory0: $IForgeRegistry$MissingFactory$$Type<T>): $RegistryBuilder<T>
public static "of"<T>(string0: string): $RegistryBuilder<T>
public static "of"<T>(): $RegistryBuilder<T>
public static "of"<T>(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public "onAdd"(addCallback0: $IForgeRegistry$AddCallback$$Type<T>): $RegistryBuilder<T>
public "onBake"(bakeCallback0: $IForgeRegistry$BakeCallback$$Type<T>): $RegistryBuilder<T>
public "onClear"(clearCallback0: $IForgeRegistry$ClearCallback$$Type<T>): $RegistryBuilder<T>
public "onCreate"(createCallback0: $IForgeRegistry$CreateCallback$$Type<T>): $RegistryBuilder<T>
public "onValidate"(validateCallback0: $IForgeRegistry$ValidateCallback$$Type<T>): $RegistryBuilder<T>
public "set"(missingFactory0: $IForgeRegistry$MissingFactory$$Type<T>): $RegistryBuilder<T>
public "setDefaultKey"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
public "setIDRange"(int0: integer, int1: integer): $RegistryBuilder<T>
public "setMaxID"(int0: integer): $RegistryBuilder<T>
public "setName"(resourceLocation0: $ResourceLocation$$Type): $RegistryBuilder<T>
get "allowModifications"(): boolean
get "allowOverrides"(): boolean
get "bake"(): $IForgeRegistry$BakeCallback<T>
get "clear"(): $IForgeRegistry$ClearCallback<T>
get "create"(): $IForgeRegistry$CreateCallback<T>
get "default"(): $ResourceLocation
get "legacyNames"(): $Set<$ResourceLocation>
get "maxId"(): integer
get "minId"(): integer
get "missingFactory"(): $IForgeRegistry$MissingFactory<T>
get "saveToDisc"(): boolean
get "sync"(): boolean
get "validate"(): $IForgeRegistry$ValidateCallback<T>
set "defaultKey"(value: $ResourceLocation$$Type)
set "maxID"(value: integer)
set "name"(value: $ResourceLocation$$Type)
}
}

declare module "packages/net/minecraftforge/registries/$ForgeRegistry" {
import { $ForgeRegistryForgeAccessor } from "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor"
import { $MissingMappingsEvent } from "packages/net/minecraftforge/registries/$MissingMappingsEvent"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $IdMappingEvent$IdRemapping$$Type } from "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Marker } from "packages/org/apache/logging/log4j/$Marker"
import { $IForgeRegistryModifiable } from "packages/net/minecraftforge/registries/$IForgeRegistryModifiable"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import { $ForgeRegistry$Snapshot } from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ITagManager } from "packages/net/minecraftforge/registries/tags/$ITagManager"
import { $Map$Entry } from "packages/java/util/$Map$Entry"
import { $Object2IntMap$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ForgeRegistry<V> implements $IForgeRegistryInternal<V>, $IForgeRegistryModifiable<V>, $ForgeRegistryForgeAccessor<any> {
static readonly "REGISTRIES": $Marker

public "addAlias"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "bake"(): void
public "clear"(): void
public "containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
public "containsValue"(v0: V): boolean
public "forEach"(consumer0: $Consumer$$Type<V>): void
public "freeze"(): void
public "getCodec"(): $Codec<V>
public "getDefaultKey"(): $ResourceLocation
public "getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
public "getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
public "getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
public "getDelegateOrThrow"(value: any): $Holder$Reference<any>
public "getDelegateOrThrow"(location: $ResourceLocation$$Type): $Holder$Reference<any>
public "getDelegateOrThrow"(rkey: $ResourceKey$$Type<any>): $Holder$Reference<any>
public "getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
public "getHolder"(v0: V): $Optional<$Holder<V>>
public "getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
public "getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
public "getID"(resourceLocation0: $ResourceLocation$$Type): integer
public "getID"(v0: V): integer
public "getKey"(int0: integer): $ResourceKey<V>
public "getKey"(v0: V): $ResourceLocation
public "getKeys"(): $Set<$ResourceLocation>
public "getMissingEvent"(resourceLocation0: $ResourceLocation$$Type, object2IntMap1: $Object2IntMap$$Type<$ResourceLocation$$Type>): $MissingMappingsEvent
public "getRaw"(resourceLocation0: $ResourceLocation$$Type): V
public "getRegistryKey"(): $ResourceKey<$Registry<V>>
public "getRegistryName"(): $ResourceLocation
public "getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
public "getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
public "getValue"(resourceLocation0: $ResourceLocation$$Type): V
public "getValue"(int0: integer): V
public "getValues"(): $Collection<V>
public "isEmpty"(): boolean
public "isLocked"(): boolean
public "iterator"(): $Iterator<V>
public "loadIds"(object2IntMap0: $Object2IntMap$$Type<$ResourceLocation$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, string>, object2IntMap2: $Object2IntMap$$Type<$ResourceLocation$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $IdMappingEvent$IdRemapping$$Type>, forgeRegistry4: $ForgeRegistry$$Type<V>, resourceLocation5: $ResourceLocation$$Type): void
public "makeSnapshot"(): $ForgeRegistry$Snapshot
public "register"(int0: integer, resourceLocation1: $ResourceLocation$$Type, v2: V): void
public "register"(string0: string, v1: V): void
public "register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
public "remove"(resourceLocation0: $ResourceLocation$$Type): V
public "setSlaveMap"(resourceLocation0: $ResourceLocation$$Type, object1: any): void
public "spliterator"(): $Spliterator<V>
public "tags"(): $ITagManager<V>
public "unfreeze"(): void
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
get "locked"(): boolean
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback" {
import { $RegistryManager$$Type } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $IForgeRegistry$AddCallback<V> {
"onAdd"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type, int2: integer, resourceKey3: $ResourceKey$$Type<V>, v4: V, v5: V): void
}

export namespace $IForgeRegistry$AddCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$AddCallback$$Static<V> implements $IForgeRegistry$AddCallback<V> {
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistryModifiable" {
import { $IForgeRegistry } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ITagManager } from "packages/net/minecraftforge/registries/tags/$ITagManager"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryModifiable<V> extends $IForgeRegistry<V> {
"clear"(): void
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsValue"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getCodec"(): $Codec<V>
"getDefaultKey"(): $ResourceLocation
"getDelegate"(v0: V): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder$Reference<V>>
"getDelegate"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder$Reference<V>>
"getDelegateOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Holder$Reference<V>
"getDelegateOrThrow"(v0: V): $Holder$Reference<V>
"getDelegateOrThrow"(resourceKey0: $ResourceKey$$Type<V>): $Holder$Reference<V>
"getEntries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
"getHolder"(v0: V): $Optional<$Holder<V>>
"getHolder"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Holder<V>>
"getHolder"(resourceKey0: $ResourceKey$$Type<V>): $Optional<$Holder<V>>
"getKey"(v0: V): $ResourceLocation
"getKeys"(): $Set<$ResourceLocation>
"getRegistryKey"(): $ResourceKey<$Registry<V>>
"getRegistryName"(): $ResourceLocation
"getResourceKey"(v0: V): $Optional<$ResourceKey<V>>
"getSlaveMap"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): T
"getValue"(resourceLocation0: $ResourceLocation$$Type): V
"getValues"(): $Collection<V>
"isEmpty"(): boolean
"isLocked"(): boolean
"iterator"(): $Iterator<V>
"register"(resourceLocation0: $ResourceLocation$$Type, v1: V): void
"register"(string0: string, v1: V): void
"remove"(resourceLocation0: $ResourceLocation$$Type): V
"spliterator"(): $Spliterator<V>
"tags"(): $ITagManager<V>
[Symbol.iterator](): IterableIterator<V>;
get "codec"(): $Codec<V>
get "defaultKey"(): $ResourceLocation
get "entries"(): $Set<$Map$Entry<$ResourceKey<V>, V>>
get "keys"(): $Set<$ResourceLocation>
get "registryKey"(): $ResourceKey<$Registry<V>>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<V>
get "empty"(): boolean
get "locked"(): boolean
}

export namespace $IForgeRegistryModifiable {
const probejs$$marker: never
}
export abstract class $IForgeRegistryModifiable$$Static<V> implements $IForgeRegistryModifiable<V> {
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback" {
import { $RegistryManager$$Type } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$ValidateCallback<V> {
"onValidate"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type, int2: integer, resourceLocation3: $ResourceLocation$$Type, v4: V): void
}

export namespace $IForgeRegistry$ValidateCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$ValidateCallback$$Static<V> implements $IForgeRegistry$ValidateCallback<V> {
}
}

declare module "packages/net/minecraftforge/registries/$DataPackRegistryEvent$NewRegistry" {
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $DataPackRegistryEvent } from "packages/net/minecraftforge/registries/$DataPackRegistryEvent"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
constructor()

public "dataPackRegistry"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<T>): void
public "dataPackRegistry"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<T>, codec2: $Codec$$Type<T>): void
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback" {
import { $RegistryManager$$Type } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$BakeCallback<V> {
"onBake"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$BakeCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$BakeCallback$$Static<V> implements $IForgeRegistry$BakeCallback<V> {
}
}

declare module "packages/net/minecraftforge/registries/tags/$ITag" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"

export interface $ITag<V> extends $Iterable<V> {
"contains"(v0: V): boolean
"forEach"(consumer0: $Consumer$$Type<V>): void
"getKey"(): $TagKey<V>
"getRandomElement"(randomSource0: $RandomSource$$Type): $Optional<V>
"isBound"(): boolean
"isEmpty"(): boolean
"iterator"(): $Iterator<V>
"size"(): integer
"spliterator"(): $Spliterator<V>
"stream"(): $Stream<V>
[Symbol.iterator](): IterableIterator<V>;
get "key"(): $TagKey<V>
get "bound"(): boolean
get "empty"(): boolean
}

export namespace $ITag {
const probejs$$marker: never
}
export abstract class $ITag$$Static<V> implements $ITag<V> {
}
}

declare module "packages/net/minecraftforge/registries/$RegistryManager" {
import { $Pair } from "packages/org/apache/commons/lang3/tuple/$Pair"
import { $IForgeRegistry$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistry"
import { $ForgeRegistry } from "packages/net/minecraftforge/registries/$ForgeRegistry"
import { $ForgeRegistry$Snapshot } from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $HandshakeMessages$S2CRegistry } from "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"

export class $RegistryManager {
static readonly "ACTIVE": $RegistryManager
static readonly "FROZEN": $RegistryManager
static readonly "VANILLA": $RegistryManager

constructor(string0: string)

public "clean"(): void
public static "generateRegistryPackets"(boolean0: boolean): $List<$Pair<string, $HandshakeMessages$S2CRegistry>>
public "getName"<V>(iForgeRegistry0: $IForgeRegistry$$Type<V>): $ResourceLocation
public "getName"(): string
public "getRegistry"<V>(resourceKey0: $ResourceKey$$Type<$Registry<V>>): $ForgeRegistry<V>
public "getRegistry"<V>(resourceLocation0: $ResourceLocation$$Type): $ForgeRegistry<V>
public "getRegistry"<V>(resourceLocation0: $ResourceLocation$$Type, registryManager1: $RegistryManager$$Type): $ForgeRegistry<V>
public static "getRegistryNamesForSyncToClient"(): $List<$ResourceLocation>
public static "getVanillaRegistryKeys"(): $Set<$ResourceLocation>
public static "postNewRegistryEvent"(): void
public "takeSnapshot"(boolean0: boolean): $Map<$ResourceLocation, $ForgeRegistry$Snapshot>
public "updateLegacyName"<V>(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
get "name"(): string
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback" {
import { $RegistryManager$$Type } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal$$Type } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$CreateCallback<V> {
"onCreate"(iForgeRegistryInternal0: $IForgeRegistryInternal$$Type<V>, registryManager1: $RegistryManager$$Type): void
}

export namespace $IForgeRegistry$CreateCallback {
const probejs$$marker: never
}
export abstract class $IForgeRegistry$CreateCallback$$Static<V> implements $IForgeRegistry$CreateCallback<V> {
}
}

