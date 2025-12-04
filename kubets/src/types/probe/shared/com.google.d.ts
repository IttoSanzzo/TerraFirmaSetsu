declare module "packages/com/google/common/collect/$Multiset" {
import { $ObjIntConsumer$$Type } from "packages/java/util/function/$ObjIntConsumer"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Multiset$Entry } from "packages/com/google/common/collect/$Multiset$Entry"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $Multiset<E> extends $Collection<E> {
"add"(e0: E, int1: integer): integer
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"count"(object0: any): integer
"elementSet"(): $Set<E>
"entrySet"(): $Set<$Multiset$Entry<E>>
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"forEachEntry"(objIntConsumer0: $ObjIntConsumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any, int1: integer): integer
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"setCount"(e0: E, int1: integer, int2: integer): boolean
"setCount"(e0: E, int1: integer): integer
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toString"(): string
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Multiset {
const probejs$$marker: never
}
export abstract class $Multiset$$Static<E> implements $Multiset<E> {
}
}

declare module "packages/com/google/common/collect/$BiMap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $BiMap<K, V> extends $Map<K, V> {
"clear"(): void
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"forcePut"(k0: K, v1: V): V
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"inverse"(): $BiMap<V, K>
"isEmpty"(): boolean
"keySet"(): $Set<K>
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V): V
"replace"(k0: K, v1: V, v2: V): boolean
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
[index: string | number]: V
get "empty"(): boolean
}

export namespace $BiMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
function of<K, V>(): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
function of<K, V>(k0: K, v1: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
function of<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
function ofEntries<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
export abstract class $BiMap$$Static<K, V> implements $BiMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
static "of"<K, V>(): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
}
}

declare module "packages/com/google/gson/$JsonDeserializer" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonDeserializationContext$$Type } from "packages/com/google/gson/$JsonDeserializationContext"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"

export interface $JsonDeserializer<T> {
"deserialize"(jsonElement0: $JsonElement$$Type, type1: $Type$$Type, jsonDeserializationContext2: $JsonDeserializationContext$$Type): T
}

export namespace $JsonDeserializer {
const probejs$$marker: never
}
export abstract class $JsonDeserializer$$Static<T> implements $JsonDeserializer<T> {
}
}

declare module "packages/com/google/common/collect/$ImmutableSetMultimap$Builder" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $ImmutableMultimap$Builder } from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import { $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<K, V> {
constructor()

public "orderKeysBy"(comparator0: $Comparator$$Type<K>): $ImmutableSetMultimap$Builder<K, V>
public "put"(entry0: $Map$Entry$$Type<K, V>): $ImmutableSetMultimap$Builder<K, V>
}
}

declare module "packages/com/google/common/collect/$AbstractMultimap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $AbstractMultimap<K, V> implements $Multimap<K, V> {
public "asMap"(): $Map<K, $Collection<V>>
public "clear"(): void
public "containsEntry"(object0: any, object1: any): boolean
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public "entries"(): $Collection<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(k0: K): $Collection<V>
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "keys"(): $Multiset<K>
public "put"(k0: K, v1: V): boolean
public "putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
public "putAll"(multimap0: $Multimap$$Type<K, V>): boolean
public "remove"(object0: any, object1: any): boolean
public "removeAll"(object0: any): $Collection<V>
public "replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $Collection<V>
public "size"(): integer
public "values"(): $Collection<V>
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/$TypeAdapter" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonReader$$Type } from "packages/com/google/gson/stream/$JsonReader"
import { $JsonWriter$$Type } from "packages/com/google/gson/stream/$JsonWriter"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $Reader$$Type } from "packages/java/io/$Reader"

export class $TypeAdapter<T> {
constructor()

public "fromJson"(string0: string): T
public "fromJson"(reader0: $Reader$$Type): T
public "fromJsonTree"(jsonElement0: $JsonElement$$Type): T
public "nullSafe"(): $TypeAdapter<T>
public "read"(jsonReader0: $JsonReader$$Type): T
public "toJson"(writer0: $Writer$$Type, t1: T): void
public "toJson"(t0: T): string
public "toJsonTree"(t0: T): $JsonElement
public "write"(jsonWriter0: $JsonWriter$$Type, t1: T): void
}
}

declare module "packages/com/google/common/collect/$ImmutableSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ImmutableSet$Builder } from "packages/com/google/common/collect/$ImmutableSet$Builder"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ImmutableSet<E> extends $ImmutableCollection<E> implements $Set<E> {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public static "builder"<E>(): $ImmutableSet$Builder<E>
public static "builderWithExpectedSize"<E>(int0: integer): $ImmutableSet$Builder<E>
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(iterable0: $Iterable$$Type<E>): $ImmutableSet<E>
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $ImmutableSet<E>
public static "copyOf"<E>(iterator0: $Iterator$$Type<E>): $ImmutableSet<E>
public static "copyOf"<E>(e0s: E[]): $ImmutableSet<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "isEmpty"(): boolean
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $ImmutableSet<E>
public static "of"<E>(e0: E, e1: E, e2: E): $ImmutableSet<E>
public static "of"<E>(e0: E): $ImmutableSet<E>
public static "of"<E>(): $ImmutableSet<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, ...e6s: E[]): $ImmutableSet<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $ImmutableSet<E>
public static "of"<E>(e0: E, e1: E): $ImmutableSet<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toImmutableSet"<E>(): $Collector<E, any, $ImmutableSet<E>>
get "empty"(): boolean
}
}

declare module "packages/com/google/common/collect/$HashMultimapGwtSerializationDependencies" {
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Set } from "packages/java/util/$Set"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $AbstractSetMultimap } from "packages/com/google/common/collect/$AbstractSetMultimap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export class $HashMultimapGwtSerializationDependencies<K, V> extends $AbstractSetMultimap<K, V> {
public "containsEntry"(object0: any, object1: any): boolean
public "containsValue"(object0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "keys"(): $Multiset<K>
public "putAll"(multimap0: $Multimap$$Type<K, V>): boolean
public "putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
public "remove"(object0: any, object1: any): boolean
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/$JsonObject" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Set } from "packages/java/util/$Set"
import { $JsonPrimitive } from "packages/com/google/gson/$JsonPrimitive"
import { $JsonArray } from "packages/com/google/gson/$JsonArray"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $JsonObject extends $JsonElement {
constructor()

public "add"(string0: string, jsonElement1: $JsonElement$$Type): void
public "addProperty"(string0: string, character1: character): void
public "addProperty"(string0: string, string1: string): void
public "addProperty"(string0: string, number1: number): void
public "addProperty"(string0: string, boolean1: boolean): void
public "asMap"(): $Map<string, $JsonElement>
public "deepCopy"(): $JsonObject
public "entrySet"(): $Set<$Map$Entry<string, $JsonElement>>
public "get"(string0: string): $JsonElement
public "getAsJsonArray"(string0: string): $JsonArray
public "getAsJsonObject"(string0: string): $JsonObject
public "getAsJsonPrimitive"(string0: string): $JsonPrimitive
public "has"(string0: string): boolean
public "keySet"(): $Set<string>
public "remove"(string0: string): $JsonElement
public "size"(): integer
}
}

declare module "packages/com/google/common/collect/$Table$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Table$Cell<R, C, V> {
"equals"(object0: any): boolean
"getColumnKey"(): C
"getRowKey"(): R
"getValue"(): V
"hashCode"(): integer
get "columnKey"(): C
get "rowKey"(): R
get "value"(): V
}

export namespace $Table$Cell {
const probejs$$marker: never
}
export abstract class $Table$Cell$$Static<R, C, V> implements $Table$Cell<R, C, V> {
}
}

declare module "packages/com/google/common/collect/$UnmodifiableListIterator" {
import { $UnmodifiableIterator } from "packages/com/google/common/collect/$UnmodifiableIterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ListIterator } from "packages/java/util/$ListIterator"

export class $UnmodifiableListIterator<E> extends $UnmodifiableIterator<E> implements $ListIterator<E> {
/** @deprecated */
public "add"(e0: E): void
public "forEachRemaining"(consumer0: $Consumer$$Type<E>): void
public "hasNext"(): boolean
public "hasPrevious"(): boolean
public "next"(): E
public "nextIndex"(): integer
public "previous"(): E
public "previousIndex"(): integer
public "remove"(): void
/** @deprecated */
public "set"(e0: E): void
}
}

declare module "packages/com/google/common/collect/$ImmutableMultiset$Builder" {
import { $ImmutableCollection$Builder } from "packages/com/google/common/collect/$ImmutableCollection$Builder"

export class $ImmutableMultiset$Builder<E> extends $ImmutableCollection$Builder<E> {
constructor()

public "addCopies"(e0: E, int1: integer): $ImmutableMultiset$Builder<E>
public "setCount"(e0: E, int1: integer): $ImmutableMultiset$Builder<E>
}
}

declare module "packages/com/google/gson/internal/$Excluder" {
import { $Gson$$Type } from "packages/com/google/gson/$Gson"
import { $ExclusionStrategy$$Type } from "packages/com/google/gson/$ExclusionStrategy"
import { $TypeAdapter } from "packages/com/google/gson/$TypeAdapter"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Field$$Type } from "packages/java/lang/reflect/$Field"
import { $TypeAdapterFactory } from "packages/com/google/gson/$TypeAdapterFactory"
import { $TypeToken$$Type } from "packages/com/google/gson/reflect/$TypeToken"

export class $Excluder implements $TypeAdapterFactory, $Cloneable {
static readonly "DEFAULT": $Excluder

constructor()

public "create"<T>(gson0: $Gson$$Type, typeToken1: $TypeToken$$Type<T>): $TypeAdapter<T>
public "disableInnerClassSerialization"(): $Excluder
public "excludeClass"(class0: $Class$$Type<any>, boolean1: boolean): boolean
public "excludeField"(field0: $Field$$Type, boolean1: boolean): boolean
public "excludeFieldsWithoutExposeAnnotation"(): $Excluder
public "withExclusionStrategy"(exclusionStrategy0: $ExclusionStrategy$$Type, boolean1: boolean, boolean2: boolean): $Excluder
public "withModifiers"(...int0s: integer[]): $Excluder
public "withVersion"(double0: double): $Excluder
}
}

declare module "packages/com/google/common/collect/$ImmutableSet$Builder" {
import { $ImmutableCollection$Builder } from "packages/com/google/common/collect/$ImmutableCollection$Builder"

export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<E> {
constructor()

public "add"(e0: E): $ImmutableSet$Builder<E>
public "add"(...e0s: E[]): $ImmutableSet$Builder<E>
}
}

declare module "packages/com/google/gson/$ToNumberStrategy" {
import { $JsonReader$$Type } from "packages/com/google/gson/stream/$JsonReader"

export interface $ToNumberStrategy {
"readNumber"(jsonReader0: $JsonReader$$Type): number
}

export namespace $ToNumberStrategy {
const probejs$$marker: never
}
export abstract class $ToNumberStrategy$$Static implements $ToNumberStrategy {
}
}

declare module "packages/com/google/common/collect/$AbstractMapBasedMultimap" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $AbstractMultimap } from "packages/com/google/common/collect/$AbstractMultimap"
import { $Collection } from "packages/java/util/$Collection"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $AbstractMapBasedMultimap<K, V> extends $AbstractMultimap<K, V> implements $Serializable {
public "entries"(): $Collection<$Map$Entry<K, V>>
public "get"(k0: K): $Collection<V>
public "removeAll"(object0: any): $Collection<V>
public "replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $Collection<V>
public "values"(): $Collection<V>
}
}

declare module "packages/com/google/common/collect/$ForwardingList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $ForwardingCollection } from "packages/com/google/common/collect/$ForwardingCollection"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"

export class $ForwardingList<E> extends $ForwardingCollection<E> implements $List<E> {
public "add"(int0: integer, e1: E): void
public "add"(e0: E): boolean
public "addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "lastIndexOf"(object0: any): integer
public "listIterator"(int0: integer): $ListIterator<E>
public "listIterator"(): $ListIterator<E>
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
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[index: number]: E
get "empty"(): boolean
}
}

declare module "packages/com/google/common/collect/$BaseImmutableMultimap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $AbstractMultimap } from "packages/com/google/common/collect/$AbstractMultimap"
import { $Collection } from "packages/java/util/$Collection"

export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<K, V> {
public "clear"(): void
public "containsKey"(object0: any): boolean
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(k0: K): $Collection<V>
public "removeAll"(object0: any): $Collection<V>
public "size"(): integer
}
}

declare module "packages/com/google/gson/$LongSerializationPolicy" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $Enum } from "packages/java/lang/$Enum"

export class $LongSerializationPolicy extends $Enum<$LongSerializationPolicy> {
static readonly "DEFAULT": $LongSerializationPolicy
static readonly "STRING": $LongSerializationPolicy

public "serialize"(long0: long): $JsonElement
public static "valueOf"(string0: string): $LongSerializationPolicy
public static "values"(): $LongSerializationPolicy[]
}
}

declare module "packages/com/google/common/collect/$ForwardingSet" {
import { $ForwardingCollection } from "packages/com/google/common/collect/$ForwardingCollection"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ForwardingSet<E> extends $ForwardingCollection<E> implements $Set<E> {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "packages/com/google/common/cache/$Cache" {
import { $ConcurrentMap } from "packages/java/util/concurrent/$ConcurrentMap"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $CacheStats } from "packages/com/google/common/cache/$CacheStats"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $Cache<K, V> {
"asMap"(): $ConcurrentMap<K, V>
"cleanUp"(): void
"get"(k0: K, callable1: $Callable$$Type<V>): V
"getAllPresent"(iterable0: $Iterable$$Type<any>): $ImmutableMap<K, V>
"getIfPresent"(object0: any): V
"invalidate"(object0: any): void
"invalidateAll"(iterable0: $Iterable$$Type<any>): void
"invalidateAll"(): void
"put"(k0: K, v1: V): void
"putAll"(map0: $Map$$Type<K, V>): void
"size"(): long
"stats"(): $CacheStats
}

export namespace $Cache {
const probejs$$marker: never
}
export abstract class $Cache$$Static<K, V> implements $Cache<K, V> {
}
}

declare module "packages/com/google/common/collect/$ForwardingMultimap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $ForwardingObject } from "packages/com/google/common/collect/$ForwardingObject"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap<K, V> {
public "asMap"(): $Map<K, $Collection<V>>
public "clear"(): void
public "containsEntry"(object0: any, object1: any): boolean
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public "entries"(): $Collection<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(k0: K): $Collection<V>
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "keys"(): $Multiset<K>
public "put"(k0: K, v1: V): boolean
public "putAll"(multimap0: $Multimap$$Type<K, V>): boolean
public "putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
public "remove"(object0: any, object1: any): boolean
public "removeAll"(object0: any): $Collection<V>
public "replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $Collection<V>
public "size"(): integer
public "values"(): $Collection<V>
get "empty"(): boolean
}
}

declare module "packages/com/google/common/reflect/$TypeCapture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypeCapture<T> {
}
}

declare module "packages/com/google/common/collect/$Table" {
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Table$Cell } from "packages/com/google/common/collect/$Table$Cell"
import { $Map } from "packages/java/util/$Map"

export interface $Table<R, C, V> {
"cellSet"(): $Set<$Table$Cell<R, C, V>>
"clear"(): void
"column"(c0: C): $Map<R, V>
"columnKeySet"(): $Set<C>
"columnMap"(): $Map<C, $Map<R, V>>
"contains"(object0: any, object1: any): boolean
"containsColumn"(object0: any): boolean
"containsRow"(object0: any): boolean
"containsValue"(object0: any): boolean
"equals"(object0: any): boolean
"get"(object0: any, object1: any): V
"hashCode"(): integer
"isEmpty"(): boolean
"put"(r0: R, c1: C, v2: V): V
"putAll"(table0: $Table$$Type<R, C, V>): void
"remove"(object0: any, object1: any): V
"row"(r0: R): $Map<C, V>
"rowKeySet"(): $Set<R>
"rowMap"(): $Map<R, $Map<C, V>>
"size"(): integer
"values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $Table {
const probejs$$marker: never
}
export abstract class $Table$$Static<R, C, V> implements $Table<R, C, V> {
}
}

declare module "packages/com/google/common/collect/$Multiset$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Multiset$Entry<E> {
"equals"(object0: any): boolean
"getCount"(): integer
"getElement"(): E
"hashCode"(): integer
"toString"(): string
get "count"(): integer
get "element"(): E
}

export namespace $Multiset$Entry {
const probejs$$marker: never
}
export abstract class $Multiset$Entry$$Static<E> implements $Multiset$Entry<E> {
}
}

declare module "packages/com/google/common/cache/$LoadingCache" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $ConcurrentMap } from "packages/java/util/concurrent/$ConcurrentMap"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $CacheStats } from "packages/com/google/common/cache/$CacheStats"
import { $Cache } from "packages/com/google/common/cache/$Cache"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$$Type } from "packages/java/util/$Map"
import { $Function as $Function$0 } from "packages/com/google/common/base/$Function"

export interface $LoadingCache<K, V> extends $Cache<K, V>, $Function$0<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
/** @deprecated */
"apply"(k0: K): V
"asMap"(): $ConcurrentMap<K, V>
"cleanUp"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"equals"(object0: any): boolean
"get"(k0: K): V
"get"(k0: K, callable1: $Callable$$Type<V>): V
"getAll"(iterable0: $Iterable$$Type<K>): $ImmutableMap<K, V>
"getAllPresent"(iterable0: $Iterable$$Type<any>): $ImmutableMap<K, V>
"getIfPresent"(object0: any): V
"getUnchecked"(k0: K): V
"invalidate"(object0: any): void
"invalidateAll"(iterable0: $Iterable$$Type<any>): void
"invalidateAll"(): void
"put"(k0: K, v1: V): void
"putAll"(map0: $Map$$Type<K, V>): void
"refresh"(k0: K): void
"size"(): long
"stats"(): $CacheStats
}

export namespace $LoadingCache {
function identity<T>(): $Function<T, T>
}
export abstract class $LoadingCache$$Static<K, V> implements $LoadingCache<K, V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/com/google/gson/$FieldNamingPolicy" {
import { $FieldNamingStrategy } from "packages/com/google/gson/$FieldNamingStrategy"
import { $Enum } from "packages/java/lang/$Enum"
import { $Field$$Type } from "packages/java/lang/reflect/$Field"

export class $FieldNamingPolicy extends $Enum<$FieldNamingPolicy> implements $FieldNamingStrategy {
static readonly "IDENTITY": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DASHES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DOTS": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE_WITH_SPACES": $FieldNamingPolicy
static readonly "UPPER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy

public "translateName"(field0: $Field$$Type): string
public static "valueOf"(string0: string): $FieldNamingPolicy
public static "values"(): $FieldNamingPolicy[]
}
}

declare module "packages/com/google/common/cache/$CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {
constructor(long0: long, long1: long, long2: long, long3: long, long4: long, long5: long)

public "averageLoadPenalty"(): double
public "evictionCount"(): long
public "hitCount"(): long
public "hitRate"(): double
public "loadCount"(): long
public "loadExceptionCount"(): long
public "loadExceptionRate"(): double
public "loadSuccessCount"(): long
public "minus"(cacheStats0: $CacheStats$$Type): $CacheStats
public "missCount"(): long
public "missRate"(): double
public "plus"(cacheStats0: $CacheStats$$Type): $CacheStats
public "requestCount"(): long
public "totalLoadTime"(): long
}
}

declare module "packages/com/google/common/collect/$ImmutableList$Builder" {
import { $ImmutableCollection$Builder } from "packages/com/google/common/collect/$ImmutableCollection$Builder"
import { $Iterator$$Type } from "packages/java/util/$Iterator"

export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<E> {
constructor()

public "addAll"(iterator0: $Iterator$$Type<E>): $ImmutableList$Builder<E>
}
}

declare module "packages/com/google/common/collect/$ImmutableCollection$Builder" {
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export class $ImmutableCollection$Builder<E> {
public "add"(e0: E): $ImmutableCollection$Builder<E>
public "add"(...e0s: E[]): $ImmutableCollection$Builder<E>
public "addAll"(iterator0: $Iterator$$Type<E>): $ImmutableCollection$Builder<E>
public "addAll"(iterable0: $Iterable$$Type<E>): $ImmutableCollection$Builder<E>
public "build"(): $ImmutableCollection<E>
}
}

declare module "packages/com/google/gson/$JsonDeserializationContext" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"

export interface $JsonDeserializationContext {
"deserialize"<T>(jsonElement0: $JsonElement$$Type, type1: $Type$$Type): T
}

export namespace $JsonDeserializationContext {
const probejs$$marker: never
}
export abstract class $JsonDeserializationContext$$Static implements $JsonDeserializationContext {
}
}

declare module "packages/com/google/common/collect/$ImmutableMultimap$Builder" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $ImmutableMultimap } from "packages/com/google/common/collect/$ImmutableMultimap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $ImmutableMultimap$Builder<K, V> {
constructor()

public "build"(): $ImmutableMultimap<K, V>
public "orderKeysBy"(comparator0: $Comparator$$Type<K>): $ImmutableMultimap$Builder<K, V>
public "orderValuesBy"(comparator0: $Comparator$$Type<V>): $ImmutableMultimap$Builder<K, V>
public "put"(entry0: $Map$Entry$$Type<K, V>): $ImmutableMultimap$Builder<K, V>
public "put"(k0: K, v1: V): $ImmutableMultimap$Builder<K, V>
public "putAll"(multimap0: $Multimap$$Type<K, V>): $ImmutableMultimap$Builder<K, V>
public "putAll"(k0: K, ...v1s: V[]): $ImmutableMultimap$Builder<K, V>
public "putAll"(k0: K, iterable1: $Iterable$$Type<V>): $ImmutableMultimap$Builder<K, V>
public "putAll"(iterable0: $Iterable$$Type<$Map$Entry$$Type<K, V>>): $ImmutableMultimap$Builder<K, V>
}
}

declare module "packages/com/google/common/reflect/$Parameter" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $Invokable } from "packages/com/google/common/reflect/$Invokable"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $TypeToken } from "packages/com/google/common/reflect/$TypeToken"

export class $Parameter implements $AnnotatedElement {
public "getAnnotatedType"(): $AnnotatedType
public "getAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getDeclaredAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<A extends $Annotation>(class0: $Class$$Type<A>): A[]
public "getDeclaringInvokable"(): $Invokable<any, any>
public "getType"(): $TypeToken<any>
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
get "annotatedType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringInvokable"(): $Invokable<any, any>
get "type"(): $TypeToken<any>
}
}

declare module "packages/com/google/common/collect/$ImmutableMap" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $ImmutableSetMultimap } from "packages/com/google/common/collect/$ImmutableSetMultimap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $BinaryOperator$$Type } from "packages/java/util/function/$BinaryOperator"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"
import { $ImmutableMap$Builder } from "packages/com/google/common/collect/$ImmutableMap$Builder"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ImmutableMap<K, V> implements $Map<K, V>, $Serializable {
public "asMultimap"(): $ImmutableSetMultimap<K, V>
public static "builder"<K, V>(): $ImmutableMap$Builder<K, V>
public static "builderWithExpectedSize"<K, V>(int0: integer): $ImmutableMap$Builder<K, V>
/** @deprecated */
public "clear"(): void
/** @deprecated */
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
/** @deprecated */
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(iterable0: $Iterable$$Type<$Map$Entry$$Type<K, V>>): $ImmutableMap<K, V>
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $ImmutableMap<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "isEmpty"(): boolean
/** @deprecated */
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $ImmutableMap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $ImmutableMap<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $ImmutableMap<K, V>
/** @deprecated */
public "put"(k0: K, v1: V): V
/** @deprecated */
public "putAll"(map0: $Map$$Type<K, V>): void
/** @deprecated */
public "putIfAbsent"(k0: K, v1: V): V
/** @deprecated */
public "remove"(object0: any): V
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
/** @deprecated */
public "replace"(k0: K, v1: V): V
/** @deprecated */
public "replace"(k0: K, v1: V, v2: V): boolean
/** @deprecated */
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public static "toImmutableMap"<T, K, V>(function0: $Function$$Type<T, K>, function1: $Function$$Type<T, V>): $Collector<T, any, $ImmutableMap<K, V>>
public static "toImmutableMap"<T, K, V>(function0: $Function$$Type<T, K>, function1: $Function$$Type<T, V>, binaryOperator2: $BinaryOperator$$Type<V>): $Collector<T, any, $ImmutableMap<K, V>>
public "values"(): $ImmutableCollection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/stream/$JsonReader" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $JsonToken } from "packages/com/google/gson/stream/$JsonToken"
import { $Reader$$Type } from "packages/java/io/$Reader"

export class $JsonReader implements $Closeable {
constructor(reader0: $Reader$$Type)

public "beginArray"(): void
public "beginObject"(): void
public "close"(): void
public "endArray"(): void
public "endObject"(): void
public "getPath"(): string
public "getPreviousPath"(): string
public "hasNext"(): boolean
public "isLenient"(): boolean
public "nextBoolean"(): boolean
public "nextDouble"(): double
public "nextInt"(): integer
public "nextLong"(): long
public "nextName"(): string
public "nextNull"(): void
public "nextString"(): string
public "peek"(): $JsonToken
public "setLenient"(boolean0: boolean): void
public "skipValue"(): void
get "path"(): string
get "previousPath"(): string
get "lenient"(): boolean
set "lenient"(value: boolean)
}
}

declare module "packages/com/google/common/collect/$ImmutableMultiset" {
import { $ObjIntConsumer$$Type } from "packages/java/util/function/$ObjIntConsumer"
import { $UnmodifiableIterator } from "packages/com/google/common/collect/$UnmodifiableIterator"
import { $ImmutableMultisetGwtSerializationDependencies } from "packages/com/google/common/collect/$ImmutableMultisetGwtSerializationDependencies"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $ImmutableMultiset$Builder } from "packages/com/google/common/collect/$ImmutableMultiset$Builder"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $Multiset$Entry } from "packages/com/google/common/collect/$Multiset$Entry"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $Iterator$$Type } from "packages/java/util/$Iterator"

export class $ImmutableMultiset<E> extends $ImmutableMultisetGwtSerializationDependencies<E> implements $Multiset<E> {
/** @deprecated */
public "add"(e0: E, int1: integer): integer
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "asList"(): $ImmutableList<E>
public static "builder"<E>(): $ImmutableMultiset$Builder<E>
public "clear"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(iterable0: $Iterable$$Type<E>): $ImmutableMultiset<E>
public static "copyOf"<E>(e0s: E[]): $ImmutableMultiset<E>
public static "copyOf"<E>(iterator0: $Iterator$$Type<E>): $ImmutableMultiset<E>
public "count"(object0: any): integer
public "entrySet"(): $ImmutableSet<$Multiset$Entry<E>>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "forEachEntry"(objIntConsumer0: $ObjIntConsumer$$Type<E>): void
public "isEmpty"(): boolean
public "iterator"(): $UnmodifiableIterator<E>
public static "of"<E>(e0: E): $ImmutableMultiset<E>
public static "of"<E>(): $ImmutableMultiset<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, ...e6s: E[]): $ImmutableMultiset<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $ImmutableMultiset<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $ImmutableMultiset<E>
public static "of"<E>(e0: E, e1: E, e2: E): $ImmutableMultiset<E>
public static "of"<E>(e0: E, e1: E): $ImmutableMultiset<E>
public "parallelStream"(): $Stream<E>
/** @deprecated */
public "remove"(object0: any, int1: integer): integer
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
/** @deprecated */
public "setCount"(e0: E, int1: integer): integer
/** @deprecated */
public "setCount"(e0: E, int1: integer, int2: integer): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toImmutableMultiset"<T, E>(function0: $Function$$Type<T, E>, toIntFunction1: $ToIntFunction$$Type<T>): $Collector<T, any, $ImmutableMultiset<E>>
public static "toImmutableMultiset"<E>(): $Collector<E, any, $ImmutableMultiset<E>>
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/$GsonBuilder" {
import { $ReflectionAccessFilter$$Type } from "packages/com/google/gson/$ReflectionAccessFilter"
import { $FieldNamingStrategy$$Type } from "packages/com/google/gson/$FieldNamingStrategy"
import { $Gson } from "packages/com/google/gson/$Gson"
import { $ExclusionStrategy$$Type } from "packages/com/google/gson/$ExclusionStrategy"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $LongSerializationPolicy$$Type } from "packages/com/google/gson/$LongSerializationPolicy"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"
import { $TypeAdapterFactory$$Type } from "packages/com/google/gson/$TypeAdapterFactory"
import { $ToNumberStrategy$$Type } from "packages/com/google/gson/$ToNumberStrategy"
import { $FieldNamingPolicy$$Type } from "packages/com/google/gson/$FieldNamingPolicy"

export class $GsonBuilder {
constructor()

public "addDeserializationExclusionStrategy"(exclusionStrategy0: $ExclusionStrategy$$Type): $GsonBuilder
public "addReflectionAccessFilter"(reflectionAccessFilter0: $ReflectionAccessFilter$$Type): $GsonBuilder
public "addSerializationExclusionStrategy"(exclusionStrategy0: $ExclusionStrategy$$Type): $GsonBuilder
public "create"(): $Gson
public "disableHtmlEscaping"(): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "excludeFieldsWithModifiers"(...int0s: integer[]): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
public "registerTypeAdapter"(type0: $Type$$Type, object1: any): $GsonBuilder
public "registerTypeAdapterFactory"(typeAdapterFactory0: $TypeAdapterFactory$$Type): $GsonBuilder
public "registerTypeHierarchyAdapter"(class0: $Class$$Type<any>, object1: any): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "setDateFormat"(string0: string): $GsonBuilder
public "setDateFormat"(int0: integer, int1: integer): $GsonBuilder
public "setDateFormat"(int0: integer): $GsonBuilder
public "setExclusionStrategies"(...exclusionStrategy0s: $ExclusionStrategy$$Type[]): $GsonBuilder
public "setFieldNamingPolicy"(fieldNamingPolicy0: $FieldNamingPolicy$$Type): $GsonBuilder
public "setFieldNamingStrategy"(fieldNamingStrategy0: $FieldNamingStrategy$$Type): $GsonBuilder
public "setLenient"(): $GsonBuilder
public "setLongSerializationPolicy"(longSerializationPolicy0: $LongSerializationPolicy$$Type): $GsonBuilder
public "setNumberToNumberStrategy"(toNumberStrategy0: $ToNumberStrategy$$Type): $GsonBuilder
public "setObjectToNumberStrategy"(toNumberStrategy0: $ToNumberStrategy$$Type): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
public "setVersion"(double0: double): $GsonBuilder
set "dateFormat"(value: string)
set "dateFormat"(value: integer)
set "exclusionStrategies"(value: $ExclusionStrategy$$Type[])
set "fieldNamingPolicy"(value: $FieldNamingPolicy$$Type)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$$Type)
set "longSerializationPolicy"(value: $LongSerializationPolicy$$Type)
set "numberToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "objectToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "version"(value: double)
}
}

declare module "packages/com/google/common/collect/$HashMultimap" {
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $HashMultimapGwtSerializationDependencies } from "packages/com/google/common/collect/$HashMultimapGwtSerializationDependencies"

export class $HashMultimap<K, V> extends $HashMultimapGwtSerializationDependencies<K, V> {
public static "create"<K, V>(multimap0: $Multimap$$Type<K, V>): $HashMultimap<K, V>
public static "create"<K, V>(): $HashMultimap<K, V>
public static "create"<K, V>(int0: integer, int1: integer): $HashMultimap<K, V>
}
}

declare module "packages/com/google/common/collect/$SetMultimap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Multimap, $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map } from "packages/java/util/$Map"

export interface $SetMultimap<K, V> extends $Multimap<K, V> {
"asMap"(): $Map<K, $Collection<V>>
"clear"(): void
"containsEntry"(object0: any, object1: any): boolean
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(k0: K): $Set<V>
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $Set<K>
"keys"(): $Multiset<K>
"put"(k0: K, v1: V): boolean
"putAll"(multimap0: $Multimap$$Type<K, V>): boolean
"putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
"remove"(object0: any, object1: any): boolean
"removeAll"(object0: any): $Set<V>
"replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $Set<V>
"size"(): integer
"values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $SetMultimap {
const probejs$$marker: never
}
export abstract class $SetMultimap$$Static<K, V> implements $SetMultimap<K, V> {
}
}

declare module "packages/com/google/gson/$FieldNamingStrategy" {
import { $Field$$Type } from "packages/java/lang/reflect/$Field"

export interface $FieldNamingStrategy {
"translateName"(field0: $Field$$Type): string
}

export namespace $FieldNamingStrategy {
const probejs$$marker: never
}
export abstract class $FieldNamingStrategy$$Static implements $FieldNamingStrategy {
}
}

declare module "packages/com/google/gson/$JsonArray" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $JsonArray extends $JsonElement implements $Iterable<$JsonElement> {
constructor()
constructor(int0: integer)

public "add"(number0: number): void
public "add"(string0: string): void
public "add"(jsonElement0: $JsonElement$$Type): void
public "add"(character0: character): void
public "add"(boolean0: boolean): void
public "addAll"(jsonArray0: $JsonArray$$Type): void
public "asList"(): $List<$JsonElement>
public "contains"(jsonElement0: $JsonElement$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$JsonElement$$Type>): void
public "get"(int0: integer): $JsonElement
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$JsonElement>
public "remove"(jsonElement0: $JsonElement$$Type): boolean
public "remove"(int0: integer): $JsonElement
public "set"(int0: integer, jsonElement1: $JsonElement$$Type): $JsonElement
public "size"(): integer
public "spliterator"(): $Spliterator<$JsonElement>
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/$JsonPrimitive" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"

export class $JsonPrimitive extends $JsonElement {
constructor(character0: character)
constructor(string0: string)
constructor(number0: number)
constructor(boolean0: boolean)

public "deepCopy"(): $JsonPrimitive
public "isBoolean"(): boolean
public "isNumber"(): boolean
public "isString"(): boolean
get "boolean"(): boolean
get "number"(): boolean
get "string"(): boolean
}
}

declare module "packages/com/google/common/collect/$ImmutableSetMultimap" {
import { $ImmutableSetMultimap$Builder } from "packages/com/google/common/collect/$ImmutableSetMultimap$Builder"
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $SetMultimap } from "packages/com/google/common/collect/$SetMultimap"
import { $Collection } from "packages/java/util/$Collection"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ImmutableMultimap } from "packages/com/google/common/collect/$ImmutableMultimap"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<K, V> implements $SetMultimap<K, V> {
public "asMap"(): $Map<K, $Collection<V>>
public static "builder"<K, V>(): $ImmutableSetMultimap$Builder<K, V>
public static "copyOf"<K, V>(multimap0: $Multimap$$Type<K, V>): $ImmutableSetMultimap<K, V>
public static "copyOf"<K, V>(iterable0: $Iterable$$Type<$Map$Entry$$Type<K, V>>): $ImmutableSetMultimap<K, V>
public "entries"(): $ImmutableSet<$Map$Entry<K, V>>
public "equals"(object0: any): boolean
public static "flatteningToImmutableSetMultimap"<T, K, V>(function0: $Function$$Type<T, K>, function1: $Function$$Type<T, $Stream<V>>): $Collector<T, any, $ImmutableSetMultimap<K, V>>
public static "of"<K, V>(): $ImmutableSetMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V): $ImmutableSetMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $ImmutableSetMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $ImmutableSetMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $ImmutableSetMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $ImmutableSetMultimap<K, V>
/** @deprecated */
public "removeAll"(object0: any): $ImmutableSet<V>
public static "toImmutableSetMultimap"<T, K, V>(function0: $Function$$Type<T, K>, function1: $Function$$Type<T, V>): $Collector<T, any, $ImmutableSetMultimap<K, V>>
}
}

declare module "packages/com/google/gson/$FieldAttributes" {
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Collection } from "packages/java/util/$Collection"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Field$$Type } from "packages/java/lang/reflect/$Field"
import { $Type } from "packages/java/lang/reflect/$Type"

export class $FieldAttributes {
constructor(field0: $Field$$Type)

public "getAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getAnnotations"(): $Collection<$Annotation>
public "getDeclaredClass"(): $Class<any>
public "getDeclaredType"(): $Type
public "getDeclaringClass"(): $Class<any>
public "getName"(): string
public "hasModifier"(int0: integer): boolean
get "annotations"(): $Collection<$Annotation>
get "declaredClass"(): $Class<any>
get "declaredType"(): $Type
get "declaringClass"(): $Class<any>
get "name"(): string
}
}

declare module "packages/com/google/gson/$JsonElement" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $JsonNull } from "packages/com/google/gson/$JsonNull"
import { $BigInteger } from "packages/java/math/$BigInteger"
import { $JsonPrimitive } from "packages/com/google/gson/$JsonPrimitive"
import { $BigDecimal } from "packages/java/math/$BigDecimal"
import { $JsonArray } from "packages/com/google/gson/$JsonArray"

export class $JsonElement {
/** @deprecated */
constructor()

public "deepCopy"(): $JsonElement
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
public "getAsBoolean"(): boolean
public "getAsByte"(): byte
/** @deprecated */
public "getAsCharacter"(): character
public "getAsDouble"(): double
public "getAsFloat"(): float
public "getAsInt"(): integer
public "getAsJsonArray"(): $JsonArray
public "getAsJsonNull"(): $JsonNull
public "getAsJsonObject"(): $JsonObject
public "getAsJsonPrimitive"(): $JsonPrimitive
public "getAsLong"(): long
public "getAsNumber"(): number
public "getAsShort"(): short
public "getAsString"(): string
public "isJsonArray"(): boolean
public "isJsonNull"(): boolean
public "isJsonObject"(): boolean
public "isJsonPrimitive"(): boolean
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
get "asBoolean"(): boolean
get "asByte"(): byte
get "asCharacter"(): character
get "asDouble"(): double
get "asFloat"(): float
get "asInt"(): integer
get "asJsonArray"(): $JsonArray
get "asJsonNull"(): $JsonNull
get "asJsonObject"(): $JsonObject
get "asJsonPrimitive"(): $JsonPrimitive
get "asLong"(): long
get "asNumber"(): number
get "asShort"(): short
get "asString"(): string
get "jsonArray"(): boolean
get "jsonNull"(): boolean
get "jsonObject"(): boolean
get "jsonPrimitive"(): boolean
}
}

declare module "packages/com/google/common/collect/$ImmutableMultisetGwtSerializationDependencies" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"

export class $ImmutableMultisetGwtSerializationDependencies<E> extends $ImmutableCollection<E> {
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "parallelStream"(): $Stream<E>
public "stream"(): $Stream<E>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "packages/com/google/common/collect/$ForwardingObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ForwardingObject {
}
}

declare module "packages/com/google/gson/$ReflectionAccessFilter$FilterResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ReflectionAccessFilter$FilterResult extends $Enum<$ReflectionAccessFilter$FilterResult> {
static readonly "ALLOW": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_ALL": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_INACCESSIBLE": $ReflectionAccessFilter$FilterResult
static readonly "INDECISIVE": $ReflectionAccessFilter$FilterResult

public static "valueOf"(string0: string): $ReflectionAccessFilter$FilterResult
public static "values"(): $ReflectionAccessFilter$FilterResult[]
}
}

declare module "packages/com/google/gson/$ExclusionStrategy" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $FieldAttributes$$Type } from "packages/com/google/gson/$FieldAttributes"

export interface $ExclusionStrategy {
"shouldSkipClass"(class0: $Class$$Type<any>): boolean
"shouldSkipField"(fieldAttributes0: $FieldAttributes$$Type): boolean
}

export namespace $ExclusionStrategy {
const probejs$$marker: never
}
export abstract class $ExclusionStrategy$$Static implements $ExclusionStrategy {
}
}

declare module "packages/com/google/common/collect/$UnmodifiableIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"

export class $UnmodifiableIterator<E> implements $Iterator<E> {
public "forEachRemaining"(consumer0: $Consumer$$Type<E>): void
public "hasNext"(): boolean
public "next"(): E
/** @deprecated */
public "remove"(): void
}
}

declare module "packages/com/google/gson/reflect/$TypeToken" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type, $Type$$Type } from "packages/java/lang/reflect/$Type"

export class $TypeToken<T> {
public static "get"(type0: $Type$$Type): $TypeToken<any>
public static "get"<T>(class0: $Class$$Type<T>): $TypeToken<T>
public static "getArray"(type0: $Type$$Type): $TypeToken<any>
public static "getParameterized"(type0: $Type$$Type, ...type1s: $Type$$Type[]): $TypeToken<any>
public "getRawType"(): $Class<T>
public "getType"(): $Type
/** @deprecated */
public "isAssignableFrom"(typeToken0: $TypeToken$$Type<any>): boolean
/** @deprecated */
public "isAssignableFrom"(type0: $Type$$Type): boolean
/** @deprecated */
public "isAssignableFrom"(class0: $Class$$Type<any>): boolean
get "rawType"(): $Class<T>
get "type"(): $Type
}
}

declare module "packages/com/google/gson/$JsonNull" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/** @deprecated */
constructor()

public "deepCopy"(): $JsonNull
}
}

declare module "packages/com/google/common/collect/$ForwardingCollection" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ForwardingObject } from "packages/com/google/common/collect/$ForwardingObject"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ForwardingCollection<E> extends $ForwardingObject implements $Collection<E> {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "parallelStream"(): $Stream<E>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
}

declare module "packages/com/google/gson/stream/$JsonToken" {
import { $Enum } from "packages/java/lang/$Enum"

export class $JsonToken extends $Enum<$JsonToken> {
static readonly "BEGIN_ARRAY": $JsonToken
static readonly "BEGIN_OBJECT": $JsonToken
static readonly "BOOLEAN": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "END_DOCUMENT": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "NAME": $JsonToken
static readonly "NULL": $JsonToken
static readonly "NUMBER": $JsonToken
static readonly "STRING": $JsonToken

public static "valueOf"(string0: string): $JsonToken
public static "values"(): $JsonToken[]
}
}

declare module "packages/com/google/gson/$TypeAdapterFactory" {
import { $Gson$$Type } from "packages/com/google/gson/$Gson"
import { $TypeAdapter } from "packages/com/google/gson/$TypeAdapter"
import { $TypeToken$$Type } from "packages/com/google/gson/reflect/$TypeToken"

export interface $TypeAdapterFactory {
"create"<T>(gson0: $Gson$$Type, typeToken1: $TypeToken$$Type<T>): $TypeAdapter<T>
}

export namespace $TypeAdapterFactory {
const probejs$$marker: never
}
export abstract class $TypeAdapterFactory$$Static implements $TypeAdapterFactory {
}
}

declare module "packages/com/google/common/reflect/$TypeParameter" {
import { $TypeCapture } from "packages/com/google/common/reflect/$TypeCapture"

export class $TypeParameter<T> extends $TypeCapture<T> {
}
}

declare module "packages/com/google/gson/stream/$JsonWriter" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $Flushable } from "packages/java/io/$Flushable"

export class $JsonWriter implements $Closeable, $Flushable {
constructor(writer0: $Writer$$Type)

public "beginArray"(): $JsonWriter
public "beginObject"(): $JsonWriter
public "close"(): void
public "endArray"(): $JsonWriter
public "endObject"(): $JsonWriter
public "flush"(): void
public "getSerializeNulls"(): boolean
public "isHtmlSafe"(): boolean
public "isLenient"(): boolean
public "jsonValue"(string0: string): $JsonWriter
public "name"(string0: string): $JsonWriter
public "nullValue"(): $JsonWriter
public "setHtmlSafe"(boolean0: boolean): void
public "setIndent"(string0: string): void
public "setLenient"(boolean0: boolean): void
public "setSerializeNulls"(boolean0: boolean): void
public "value"(double0: double): $JsonWriter
public "value"(float0: float): $JsonWriter
public "value"(boolean0: boolean): $JsonWriter
public "value"(boolean0: boolean): $JsonWriter
public "value"(long0: long): $JsonWriter
public "value"(number0: number): $JsonWriter
public "value"(string0: string): $JsonWriter
get "serializeNulls"(): boolean
get "htmlSafe"(): boolean
get "lenient"(): boolean
set "htmlSafe"(value: boolean)
set "indent"(value: string)
set "lenient"(value: boolean)
set "serializeNulls"(value: boolean)
}
}

declare module "packages/com/google/common/collect/$ImmutableMultimap" {
import { $ImmutableSet } from "packages/com/google/common/collect/$ImmutableSet"
import { $ImmutableMultimap$Builder } from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $ImmutableMultiset } from "packages/com/google/common/collect/$ImmutableMultiset"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection } from "packages/java/util/$Collection"
import { $BaseImmutableMultimap } from "packages/com/google/common/collect/$BaseImmutableMultimap"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<K, V> implements $Serializable {
public "asMap"(): $ImmutableMap<K, $Collection<V>>
public static "builder"<K, V>(): $ImmutableMultimap$Builder<K, V>
public static "copyOf"<K, V>(iterable0: $Iterable$$Type<$Map$Entry$$Type<K, V>>): $ImmutableMultimap<K, V>
public static "copyOf"<K, V>(multimap0: $Multimap$$Type<K, V>): $ImmutableMultimap<K, V>
public "inverse"(): $ImmutableMultimap<V, K>
public "keySet"(): $ImmutableSet<K>
public "keys"(): $ImmutableMultiset<K>
public static "of"<K, V>(): $ImmutableMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $ImmutableMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $ImmutableMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V): $ImmutableMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $ImmutableMultimap<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $ImmutableMultimap<K, V>
/** @deprecated */
public "replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $ImmutableCollection<V>
}
}

declare module "packages/com/google/common/collect/$AbstractSetMultimap" {
import { $Multimap$$Type } from "packages/com/google/common/collect/$Multimap"
import { $SetMultimap } from "packages/com/google/common/collect/$SetMultimap"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $AbstractMapBasedMultimap } from "packages/com/google/common/collect/$AbstractMapBasedMultimap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $AbstractSetMultimap<K, V> extends $AbstractMapBasedMultimap<K, V> implements $SetMultimap<K, V> {
public "asMap"(): $Map<K, $Collection<V>>
public "containsEntry"(object0: any, object1: any): boolean
public "containsValue"(object0: any): boolean
public "entries"(): $Set<$Map$Entry<K, V>>
public "get"(k0: K): $Set<V>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
public "keys"(): $Multiset<K>
public "putAll"(multimap0: $Multimap$$Type<K, V>): boolean
public "putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
public "remove"(object0: any, object1: any): boolean
get "empty"(): boolean
}
}

declare module "packages/com/google/common/reflect/$Invokable" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Method$$Type } from "packages/java/lang/reflect/$Method"
import { $Constructor$$Type } from "packages/java/lang/reflect/$Constructor"
import { $TypeVariable } from "packages/java/lang/reflect/$TypeVariable"
import { $Parameter } from "packages/com/google/common/reflect/$Parameter"
import { $Annotation, $Annotation$$Type } from "packages/java/lang/annotation/$Annotation"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Member } from "packages/java/lang/reflect/$Member"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $AnnotatedType } from "packages/java/lang/reflect/$AnnotatedType"
import { $AnnotatedElement } from "packages/java/lang/reflect/$AnnotatedElement"
import { $TypeToken, $TypeToken$$Type } from "packages/com/google/common/reflect/$TypeToken"

export class $Invokable<T, R> implements $AnnotatedElement, $Member {
public static "from"(method0: $Method$$Type): $Invokable<any, any>
public static "from"<T>(constructor0: $Constructor$$Type<T>): $Invokable<T, T>
public "getAnnotatedReturnType"(): $AnnotatedType
public "getAnnotation"<A extends $Annotation>(class0: $Class$$Type<A>): A
public "getAnnotations"(): $Annotation[]
public "getAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaredAnnotation"<T extends $Annotation>(class0: $Class$$Type<T>): T
public "getDeclaredAnnotations"(): $Annotation[]
public "getDeclaredAnnotationsByType"<T extends $Annotation>(class0: $Class$$Type<T>): T[]
public "getDeclaringClass"(): $Class<T>
public "getExceptionTypes"(): $ImmutableList<$TypeToken<$Throwable>>
public "getModifiers"(): integer
public "getName"(): string
public "getOwnerType"(): $TypeToken<T>
public "getParameters"(): $ImmutableList<$Parameter>
public "getReturnType"(): $TypeToken<R>
public "getTypeParameters"(): $TypeVariable<any>[]
public "invoke"(t0: T, ...object1s: any[]): R
public "isAbstract"(): boolean
public "isAccessible"(): boolean
public "isAnnotationPresent"(class0: $Class$$Type<$Annotation$$Type>): boolean
public "isFinal"(): boolean
public "isNative"(): boolean
public "isOverridable"(): boolean
public "isPackagePrivate"(): boolean
public "isPrivate"(): boolean
public "isProtected"(): boolean
public "isPublic"(): boolean
public "isStatic"(): boolean
public "isSynchronized"(): boolean
public "isSynthetic"(): boolean
public "isVarArgs"(): boolean
public "returning"<R1 extends R>(class0: $Class$$Type<R1>): $Invokable<T, R1>
public "returning"<R1 extends R>(typeToken0: $TypeToken$$Type<R1>): $Invokable<T, R1>
public "setAccessible"(boolean0: boolean): void
public "trySetAccessible"(): boolean
get "annotatedReturnType"(): $AnnotatedType
get "annotations"(): $Annotation[]
get "declaredAnnotations"(): $Annotation[]
get "declaringClass"(): $Class<T>
get "exceptionTypes"(): $ImmutableList<$TypeToken<$Throwable>>
get "modifiers"(): integer
get "name"(): string
get "ownerType"(): $TypeToken<T>
get "parameters"(): $ImmutableList<$Parameter>
get "returnType"(): $TypeToken<R>
get "typeParameters"(): $TypeVariable<any>[]
get "abstract"(): boolean
get "accessible"(): boolean
get "final"(): boolean
get "native"(): boolean
get "overridable"(): boolean
get "packagePrivate"(): boolean
get "private"(): boolean
get "protected"(): boolean
get "public"(): boolean
get "static"(): boolean
get "synchronized"(): boolean
get "synthetic"(): boolean
get "varArgs"(): boolean
set "accessible"(value: boolean)
}
}

declare module "packages/com/google/common/collect/$Multimap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Multiset } from "packages/com/google/common/collect/$Multiset"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map } from "packages/java/util/$Map"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export interface $Multimap<K, V> {
"asMap"(): $Map<K, $Collection<V>>
"clear"(): void
"containsEntry"(object0: any, object1: any): boolean
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entries"(): $Collection<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(k0: K): $Collection<V>
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $Set<K>
"keys"(): $Multiset<K>
"put"(k0: K, v1: V): boolean
"putAll"(multimap0: $Multimap$$Type<K, V>): boolean
"putAll"(k0: K, iterable1: $Iterable$$Type<V>): boolean
"remove"(object0: any, object1: any): boolean
"removeAll"(object0: any): $Collection<V>
"replaceValues"(k0: K, iterable1: $Iterable$$Type<V>): $Collection<V>
"size"(): integer
"values"(): $Collection<V>
get "empty"(): boolean
}

export namespace $Multimap {
const probejs$$marker: never
}
export abstract class $Multimap$$Static<K, V> implements $Multimap<K, V> {
}
}

declare module "packages/com/google/common/collect/$ImmutableList" {
import { $UnmodifiableIterator } from "packages/com/google/common/collect/$UnmodifiableIterator"
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $ImmutableList$Builder } from "packages/com/google/common/collect/$ImmutableList$Builder"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomAccess } from "packages/java/util/$RandomAccess"
import { $ImmutableCollection } from "packages/com/google/common/collect/$ImmutableCollection"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $UnmodifiableListIterator } from "packages/com/google/common/collect/$UnmodifiableListIterator"

export class $ImmutableList<E> extends $ImmutableCollection<E> implements $List<E>, $RandomAccess {
/** @deprecated */
public "add"(int0: integer, e1: E): void
public "add"(e0: E): boolean
/** @deprecated */
public "addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
/** @deprecated */
public "asList"(): $ImmutableList<E>
public static "builder"<E>(): $ImmutableList$Builder<E>
public static "builderWithExpectedSize"<E>(int0: integer): $ImmutableList$Builder<E>
public "clear"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(e0s: E[]): $ImmutableList<E>
public static "copyOf"<E>(iterator0: $Iterator$$Type<E>): $ImmutableList<E>
public static "copyOf"<E>(iterable0: $Iterable$$Type<E>): $ImmutableList<E>
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $ImmutableList<E>
public "get"(int0: integer): E
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $UnmodifiableIterator<E>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $UnmodifiableListIterator<E>
public static "of"<E>(e0: E, e1: E, e2: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E): $ImmutableList<E>
public static "of"<E>(e0: E): $ImmutableList<E>
public static "of"<E>(): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E, e11: E, ...e12s: E[]): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableList<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $ImmutableList<E>
public static "of"<E>(...e0s: E[]): $List<E>
public "parallelStream"(): $Stream<E>
/** @deprecated */
public "remove"(int0: integer): E
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
/** @deprecated */
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "reverse"(): $ImmutableList<E>
/** @deprecated */
public "set"(int0: integer, e1: E): E
public "size"(): integer
/** @deprecated */
public "sort"(comparator0: $Comparator$$Type<E>): void
public static "sortedCopyOf"<E extends $Comparable<E>>(iterable0: $Iterable$$Type<E>): $ImmutableList<E>
public static "sortedCopyOf"<E>(comparator0: $Comparator$$Type<E>, iterable1: $Iterable$$Type<E>): $ImmutableList<E>
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $ImmutableList<E>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toImmutableList"<E>(): $Collector<E, any, $ImmutableList<E>>
[index: number]: E
get "empty"(): boolean
}
}

declare module "packages/com/google/common/collect/$ImmutableCollection" {
import { $UnmodifiableIterator } from "packages/com/google/common/collect/$UnmodifiableIterator"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $AbstractCollection } from "packages/java/util/$AbstractCollection"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ImmutableCollection<E> extends $AbstractCollection<E> implements $Serializable {
public "asList"(): $ImmutableList<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
public "iterator"(): $UnmodifiableIterator<E>
public "parallelStream"(): $Stream<E>
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "packages/com/google/gson/$Gson" {
import { $FieldNamingStrategy } from "packages/com/google/gson/$FieldNamingStrategy"
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonReader, $JsonReader$$Type } from "packages/com/google/gson/stream/$JsonReader"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Appendable$$Type } from "packages/java/lang/$Appendable"
import { $GsonBuilder } from "packages/com/google/gson/$GsonBuilder"
import { $TypeAdapterFactory$$Type } from "packages/com/google/gson/$TypeAdapterFactory"
import { $TypeToken$$Type } from "packages/com/google/gson/reflect/$TypeToken"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $Excluder } from "packages/com/google/gson/internal/$Excluder"
import { $TypeAdapter } from "packages/com/google/gson/$TypeAdapter"
import { $JsonWriter, $JsonWriter$$Type } from "packages/com/google/gson/stream/$JsonWriter"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"
import { $Reader$$Type } from "packages/java/io/$Reader"

export class $Gson {
constructor()

/** @deprecated */
public "excluder"(): $Excluder
public "fieldNamingStrategy"(): $FieldNamingStrategy
public "fromJson"<T>(reader0: $Reader$$Type, class1: $Class$$Type<T>): T
public "fromJson"<T>(jsonReader0: $JsonReader$$Type, type1: $Type$$Type): T
public "fromJson"<T>(jsonReader0: $JsonReader$$Type, typeToken1: $TypeToken$$Type<T>): T
public "fromJson"<T>(jsonElement0: $JsonElement$$Type, class1: $Class$$Type<T>): T
public "fromJson"<T>(string0: string, class1: $Class$$Type<T>): T
public "fromJson"<T>(reader0: $Reader$$Type, type1: $Type$$Type): T
public "fromJson"<T>(string0: string, type1: $Type$$Type): T
public "fromJson"<T>(string0: string, typeToken1: $TypeToken$$Type<T>): T
public "fromJson"<T>(reader0: $Reader$$Type, typeToken1: $TypeToken$$Type<T>): T
public "fromJson"<T>(jsonElement0: $JsonElement$$Type, type1: $Type$$Type): T
public "fromJson"<T>(jsonElement0: $JsonElement$$Type, typeToken1: $TypeToken$$Type<T>): T
public "getAdapter"<T>(class0: $Class$$Type<T>): $TypeAdapter<T>
public "getAdapter"<T>(typeToken0: $TypeToken$$Type<T>): $TypeAdapter<T>
public "getDelegateAdapter"<T>(typeAdapterFactory0: $TypeAdapterFactory$$Type, typeToken1: $TypeToken$$Type<T>): $TypeAdapter<T>
public "htmlSafe"(): boolean
public "newBuilder"(): $GsonBuilder
public "newJsonReader"(reader0: $Reader$$Type): $JsonReader
public "newJsonWriter"(writer0: $Writer$$Type): $JsonWriter
public "serializeNulls"(): boolean
public "toJson"(object0: any, type1: $Type$$Type, appendable2: $Appendable$$Type): void
public "toJson"(object0: any, type1: $Type$$Type, jsonWriter2: $JsonWriter$$Type): void
public "toJson"(object0: any, appendable1: $Appendable$$Type): void
public "toJson"(object0: any, type1: $Type$$Type): string
public "toJson"(object0: any): string
public "toJson"(jsonElement0: $JsonElement$$Type, appendable1: $Appendable$$Type): void
public "toJson"(jsonElement0: $JsonElement$$Type): string
public "toJson"(jsonElement0: $JsonElement$$Type, jsonWriter1: $JsonWriter$$Type): void
public "toJsonTree"(object0: any, type1: $Type$$Type): $JsonElement
public "toJsonTree"(object0: any): $JsonElement
}
}

declare module "packages/com/google/common/reflect/$TypeToken" {
import { $TypeCapture } from "packages/com/google/common/reflect/$TypeCapture"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Type, $Type$$Type } from "packages/java/lang/reflect/$Type"
import { $Constructor$$Type } from "packages/java/lang/reflect/$Constructor"
import { $Method$$Type } from "packages/java/lang/reflect/$Method"
import { $Invokable } from "packages/com/google/common/reflect/$Invokable"
import { $TypeToken$TypeSet } from "packages/com/google/common/reflect/$TypeToken$TypeSet"
import { $TypeParameter$$Type } from "packages/com/google/common/reflect/$TypeParameter"

export class $TypeToken<T> extends $TypeCapture<T> implements $Serializable {
public "constructor"(constructor0: $Constructor$$Type<any>): $Invokable<T, T>
public "getComponentType"(): $TypeToken<any>
public "getRawType"(): $Class<T>
public "getSubtype"(class0: $Class$$Type<any>): $TypeToken<T>
public "getSupertype"(class0: $Class$$Type<T>): $TypeToken<T>
public "getType"(): $Type
public "getTypes"(): $TypeToken$TypeSet<>
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "isSubtypeOf"(type0: $Type$$Type): boolean
public "isSubtypeOf"(typeToken0: $TypeToken$$Type<any>): boolean
public "isSupertypeOf"(typeToken0: $TypeToken$$Type<any>): boolean
public "isSupertypeOf"(type0: $Type$$Type): boolean
public "method"(method0: $Method$$Type): $Invokable<T, any>
public static "of"<T>(class0: $Class$$Type<T>): $TypeToken<T>
public static "of"(type0: $Type$$Type): $TypeToken<any>
public "resolveType"(type0: $Type$$Type): $TypeToken<any>
public "unwrap"(): $TypeToken<T>
public "where"<X>(typeParameter0: $TypeParameter$$Type<X>, class1: $Class$$Type<X>): $TypeToken<T>
public "where"<X>(typeParameter0: $TypeParameter$$Type<X>, typeToken1: $TypeToken$$Type<X>): $TypeToken<T>
public "wrap"(): $TypeToken<T>
get "componentType"(): $TypeToken<any>
get "rawType"(): $Class<T>
get "type"(): $Type
get "types"(): $TypeToken$TypeSet<>
get "array"(): boolean
get "primitive"(): boolean
}
}

declare module "packages/com/google/common/base/$Function" {
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "packages/java/util/function/$Function"

export interface $Function<F, T> extends $Function$0<F, T> {
"andThen"<V>(function0: $Function$0$$Type<T, V>): $Function$0<F, V>
"apply"(f0: F): T
"compose"<V>(function0: $Function$0$$Type<V, F>): $Function$0<V, T>
"equals"(object0: any): boolean
}

export namespace $Function {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Function$$Static<F, T> implements $Function<F, T> {
static "identity"<T>(): $Function$0<T, T>
}
}

declare module "packages/com/google/gson/$JsonSerializationContext" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $Type$$Type } from "packages/java/lang/reflect/$Type"

export interface $JsonSerializationContext {
"serialize"(object0: any): $JsonElement
"serialize"(object0: any, type1: $Type$$Type): $JsonElement
}

export namespace $JsonSerializationContext {
const probejs$$marker: never
}
export abstract class $JsonSerializationContext$$Static implements $JsonSerializationContext {
}
}

declare module "packages/com/google/gson/$ReflectionAccessFilter" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ReflectionAccessFilter$FilterResult } from "packages/com/google/gson/$ReflectionAccessFilter$FilterResult"

export interface $ReflectionAccessFilter {
"check"(class0: $Class$$Type<any>): $ReflectionAccessFilter$FilterResult
}

export namespace $ReflectionAccessFilter {
const BLOCK_ALL_ANDROID: $ReflectionAccessFilter
const BLOCK_ALL_JAVA: $ReflectionAccessFilter
const BLOCK_ALL_PLATFORM: $ReflectionAccessFilter
const BLOCK_INACCESSIBLE_JAVA: $ReflectionAccessFilter
}
export abstract class $ReflectionAccessFilter$$Static implements $ReflectionAccessFilter {
static readonly "BLOCK_ALL_ANDROID": $ReflectionAccessFilter
static readonly "BLOCK_ALL_JAVA": $ReflectionAccessFilter
static readonly "BLOCK_ALL_PLATFORM": $ReflectionAccessFilter
static readonly "BLOCK_INACCESSIBLE_JAVA": $ReflectionAccessFilter

}
}

declare module "packages/com/google/common/collect/$ImmutableMap$Builder" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $ImmutableMap } from "packages/com/google/common/collect/$ImmutableMap"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Map$Entry$$Type } from "packages/java/util/$Map$Entry"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ImmutableMap$Builder<K, V> {
constructor()

public "build"(): $ImmutableMap<K, V>
public "buildKeepingLast"(): $ImmutableMap<K, V>
public "buildOrThrow"(): $ImmutableMap<K, V>
public "orderEntriesByValue"(comparator0: $Comparator$$Type<V>): $ImmutableMap$Builder<K, V>
public "put"(k0: K, v1: V): $ImmutableMap$Builder<K, V>
public "put"(entry0: $Map$Entry$$Type<K, V>): $ImmutableMap$Builder<K, V>
public "putAll"(iterable0: $Iterable$$Type<$Map$Entry$$Type<K, V>>): $ImmutableMap$Builder<K, V>
public "putAll"(map0: $Map$$Type<K, V>): $ImmutableMap$Builder<K, V>
}
}

declare module "packages/com/google/common/hash/$HashCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HashCode {
public "asBytes"(): byte[]
public "asInt"(): integer
public "asLong"(): long
public "bits"(): integer
public static "fromBytes"(byte0s: byte[]): $HashCode
public static "fromInt"(int0: integer): $HashCode
public static "fromLong"(long0: long): $HashCode
public static "fromString"(string0: string): $HashCode
public "padToLong"(): long
public "writeBytesTo"(byte0s: byte[], int1: integer, int2: integer): integer
}
}

declare module "packages/com/google/common/reflect/$TypeToken$TypeSet" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class } from "packages/java/lang/$Class"
import { $ForwardingSet } from "packages/com/google/common/collect/$ForwardingSet"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $TypeToken, $TypeToken$$Type } from "packages/com/google/common/reflect/$TypeToken"

export class $TypeToken$TypeSet extends $ForwardingSet<$TypeToken<T>> implements $Serializable {
public "add"(typeToken0: $TypeToken$$Type<T>): boolean
public "addAll"(collection0: $Collection$$Type<$TypeToken$$Type<T>>): boolean
public "classes"(): $TypeToken$TypeSet<>
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<$TypeToken$$Type<T>>): void
public "interfaces"(): $TypeToken$TypeSet<>
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$TypeToken<T>>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(...e0s: E[]): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
public static "of"<E>(): $Set<E>
public static "of"<E>(e0: E, e1: E): $Set<E>
public static "of"<E>(e0: E): $Set<E>
public "parallelStream"(): $Stream<$TypeToken<T>>
public "rawTypes"(): $Set<$Class<T>>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<$TypeToken$$Type<T>>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "spliterator"(): $Spliterator<$TypeToken<T>>
public "stream"(): $Stream<$TypeToken<T>>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

