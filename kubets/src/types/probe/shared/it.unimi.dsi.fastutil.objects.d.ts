declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection" {
import { $ObjectIterable } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"

export interface $ObjectCollection<K> extends $Collection<K>, $ObjectIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ObjectSpliterator<K>
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ObjectCollection {
const probejs$$marker: never
}
export abstract class $ObjectCollection$$Static<K> implements $ObjectCollection<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction" {
import { $Long2DoubleFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Short2DoubleFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Float2DoubleFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Double2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Double2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $ToDoubleFunction } from "packages/java/util/function/$ToDoubleFunction"
import { $Double2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Double2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Double2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2DoubleFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2DoubleFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2DoubleFunction<K> extends $Function$0<K, double>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<K, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): double
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, double>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2DoubleFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2DoubleFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2DoubleFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2DoubleFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2DoubleFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2DoubleFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2DoubleFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2DoubleFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
/** @deprecated */
"get"(object0: any): double
"getDouble"(object0: any): double
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"put"(k0: K, double1: double): double
/** @deprecated */
"put"(k0: K, double1: double): double
"removeDouble"(object0: any): double
"size"(): integer
}

export namespace $Object2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2DoubleFunction$$Static<K> implements $Object2DoubleFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectCollection" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $ObjectIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $AbstractCollection } from "packages/java/util/$AbstractCollection"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"

export class $AbstractObjectCollection<K> extends $AbstractCollection<K> implements $ObjectCollection<K> {
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "hashCode"(): integer
public "iterator"(): $ObjectIterator<K>
public "parallelStream"(): $Stream<K>
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "spliterator"(): $ObjectSpliterator<K>
public "stream"(): $Stream<K>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet" {
import { $AbstractObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectSet"
import { $Serializable } from "packages/java/io/$Serializable"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Hash } from "packages/it/unimi/dsi/fastutil/$Hash"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"
import { $ObjectCollection$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $Set } from "packages/java/util/$Set"
import { $ObjectIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $Hash$Strategy, $Hash$Strategy$$Type } from "packages/it/unimi/dsi/fastutil/$Hash$Strategy"

export class $ObjectOpenCustomHashSet<K> extends $AbstractObjectSet<K> implements $Serializable, $Cloneable, $Hash {
constructor(k0s: K[], int1: integer, int2: integer, float3: float, strategy4: $Hash$Strategy$$Type<K>)
constructor(iterator0: $Iterator$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(iterator0: $Iterator$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(objectCollection0: $ObjectCollection$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], int1: integer, int2: integer, strategy3: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(k0s: K[], strategy1: $Hash$Strategy$$Type<K>)
constructor(int0: integer, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(int0: integer, strategy1: $Hash$Strategy$$Type<K>)
constructor(strategy0: $Hash$Strategy$$Type<K>)
constructor(objectCollection0: $ObjectCollection$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)
constructor(collection0: $Collection$$Type<K>, strategy1: $Hash$Strategy$$Type<K>)
constructor(collection0: $Collection$$Type<K>, float1: float, strategy2: $Hash$Strategy$$Type<K>)

public "addOrGet"(k0: K): K
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "get"(object0: any): K
public "iterator"(): $ObjectIterator<K>
public static "of"<K>(k0: K, k1: K): $ObjectSet<K>
public static "of"<K>(...k0s: K[]): $ObjectSet<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
public static "of"<K>(): $ObjectSet<K>
public static "of"<K>(k0: K): $ObjectSet<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public "parallelStream"(): $Stream<K>
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "spliterator"(): $ObjectSpliterator<K>
public "strategy"(): $Hash$Strategy<K>
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trim"(int0: integer): boolean
public "trim"(): boolean
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $ObjectSet<K> extends $ObjectCollection<K>, $Set<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ObjectSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
export abstract class $ObjectSet$$Static<K> implements $ObjectSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $ObjectListIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectListIterator"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $ObjectList<K> extends $List<K>, $Comparable<$List<K>>, $ObjectCollection<K> {
"add"(int0: integer, k1: K): void
"add"(k0: K): boolean
"addAll"(objectList0: $ObjectList$$Type<K>): boolean
"addAll"(int0: integer, objectList1: $ObjectList$$Type<K>): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<K>): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"addElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
"addElements"(int0: integer, k1s: K[]): void
"clear"(): void
"compareTo"(list0: $List$$Type<K>): integer
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"get"(int0: integer): K
"getElements"(int0: integer, object1s: any[], int2: integer, int3: integer): void
"hashCode"(): integer
"indexOf"(object0: any): integer
"isEmpty"(): boolean
"lastIndexOf"(object0: any): integer
"listIterator"(int0: integer): $ObjectListIterator<K>
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"remove"(int0: integer): K
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeElements"(int0: integer, int1: integer): void
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"set"(int0: integer, k1: K): K
"setElements"(k0s: K[]): void
"setElements"(int0: integer, k1s: K[]): void
"setElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
"size"(int0: integer): void
"size"(): integer
"sort"(comparator0: $Comparator$$Type<K>): void
"stream"(): $Stream<K>
"subList"(int0: integer, int1: integer): $ObjectList<K>
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"unstableSort"(comparator0: $Comparator$$Type<K>): void
get "empty"(): boolean
set "elements"(value: K[])
}

export namespace $ObjectList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of<K>(...k0s: K[]): $ObjectList<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectList<K>
function of<K>(k0: K): $ObjectList<K>
function of<K>(): $ObjectList<K>
function of<K>(k0: K, k1: K): $ObjectList<K>
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
export abstract class $ObjectList$$Static<K> implements $ObjectList<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"<K>(...k0s: K[]): $ObjectList<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
static "of"<K>(k0: K): $ObjectList<K>
static "of"<K>(): $ObjectList<K>
static "of"<K>(k0: K, k1: K): $ObjectList<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$AbstractObject2ObjectMap" {
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2ObjectMap$Entry } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap$Entry"
import { $ObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap"
import { $AbstractObject2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObject2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $AbstractObject2ObjectMap<K, V> extends $AbstractObject2ObjectFunction<K, V> implements $Object2ObjectMap<K, V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $ObjectSet<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "isEmpty"(): boolean
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public "object2ObjectEntrySet"(): $ObjectSet<$Object2ObjectMap$Entry<K, V>>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V, v2: V): boolean
public "replace"(k0: K, v1: V): V
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public "values"(): $ObjectCollection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction" {
import { $Short2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Short2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Float2ShortFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Double2ShortFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Short2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Int2ShortFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Short2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Short2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Long2ShortFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ShortFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ShortFunction"

export interface $Reference2ShortFunction<K> extends $Function$0<K, short>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<K, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): short
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, short>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ShortFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ShortFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ShortFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ShortFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ShortFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ShortFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ShortFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ShortFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getOrDefault"(object0: any, short1: short): short
"getShort"(object0: any): short
/** @deprecated */
"put"(k0: K, short1: short): short
"put"(k0: K, short1: short): short
"removeShort"(object0: any): short
"size"(): integer
}

export namespace $Reference2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ShortFunction$$Static<K> implements $Reference2ShortFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap" {
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2ObjectMap$Entry } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap$Entry"
import { $ObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2ObjectMap<K, V> extends $Object2ObjectFunction<K, V>, $Map<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
"computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"entrySet"(): $ObjectSet<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"object2ObjectEntrySet"(): $ObjectSet<$Object2ObjectMap$Entry<K, V>>
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V, v2: V): boolean
"replace"(k0: K, v1: V): V
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $ObjectCollection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Object2ObjectMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
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
export abstract class $Object2ObjectMap$$Static<K, V> implements $Object2ObjectMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
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

declare module "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ObjectIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $AbstractObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectCollection"

export class $AbstractObjectSet<K> extends $AbstractObjectCollection<K> implements $Cloneable, $ObjectSet<K> {
public "add"(k0: K): boolean
public "addAll"(collection0: $Collection$$Type<K>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "forEach"(consumer0: $Consumer$$Type<K>): void
public "isEmpty"(): boolean
public "iterator"(): $ObjectIterator<K>
public static "of"<K>(k0: K, k1: K): $ObjectSet<K>
public static "of"<K>(...k0s: K[]): $ObjectSet<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
public static "of"<K>(): $ObjectSet<K>
public static "of"<K>(k0: K): $ObjectSet<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
public "parallelStream"(): $Stream<K>
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "size"(): integer
public "stream"(): $Stream<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"(): any[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Double2IntFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Float2IntFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Long2IntFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Int2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Int2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Short2IntFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Int2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $Int2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Int2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Char2IntFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2IntFunction<K> extends $Function$0<K, integer>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2IntFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"getInt"(object0: any): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"removeInt"(object0: any): integer
"size"(): integer
}

export namespace $Reference2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2IntFunction$$Static<K> implements $Reference2IntFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Long2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Long2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Long2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2LongFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2LongFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $ToLongFunction } from "packages/java/util/function/$ToLongFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Short2LongFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Double2LongFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Long2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Int2LongFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Long2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2LongFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2LongFunction<K> extends $Function$0<K, long>, $ToLongFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<K, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): long
"applyAsLong"(k0: K): long
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, long>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2LongFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2LongFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2LongFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2LongFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2LongFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2LongFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2LongFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2LongFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2LongFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"getLong"(object0: any): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(k0: K, long1: long): long
"put"(k0: K, long1: long): long
"removeLong"(object0: any): long
"size"(): integer
}

export namespace $Reference2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2LongFunction$$Static<K> implements $Reference2LongFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Short2ByteFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Byte2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Byte2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Double2ByteFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Byte2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Long2ByteFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Int2ByteFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Byte2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2ByteFunction<K> extends $Function$0<K, byte>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ByteFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"getByte"(object0: any): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"removeByte"(object0: any): byte
"size"(): integer
}

export namespace $Reference2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ByteFunction$$Static<K> implements $Reference2ByteFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2LongMap$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2LongMap$Entry<K> extends $Map$Entry<K, long> {
"equals"(object0: any): boolean
"getKey"(): K
"getLongValue"(): long
/** @deprecated */
"getValue"(): long
"hashCode"(): integer
/** @deprecated */
"setValue"(long0: long): long
"setValue"(long0: long): long
get "key"(): K
get "longValue"(): long
get "value"(): long
set "value"(value: long)
set "value"(value: long)
}

export namespace $Object2LongMap$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2LongMap$Entry$$Static<K> implements $Object2LongMap$Entry<K> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectOpenHashMap" {
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Hash } from "packages/it/unimi/dsi/fastutil/$Hash"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $AbstractObject2ObjectMap } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObject2ObjectMap"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Object2ObjectMap$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $Object2ObjectOpenHashMap<K, V> extends $AbstractObject2ObjectMap<K, V> implements $Serializable, $Cloneable, $Hash {
constructor(map0: $Map$$Type<K, V>)
constructor(object2ObjectMap0: $Object2ObjectMap$$Type<K, V>, float1: float)
constructor(object2ObjectMap0: $Object2ObjectMap$$Type<K, V>)
constructor(k0s: K[], v1s: V[], float2: float)
constructor(k0s: K[], v1s: V[])
constructor(int0: integer, float1: float)
constructor(int0: integer)
constructor()
constructor(map0: $Map$$Type<K, V>, float1: float)

public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
public "computeObjectIfAbsentPartial"(k0: K, object2ObjectFunction1: $Object2ObjectFunction$$Type<K, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $ObjectSet<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "keySet"(): $ObjectSet<K>
public "merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(k0: K, v1: V): V
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "replace"(k0: K, v1: V): V
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "trim"(): boolean
public "trim"(int0: integer): boolean
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectListIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectBidirectionalIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterator"
import { $ListIterator } from "packages/java/util/$ListIterator"

export interface $ObjectListIterator<K> extends $ObjectBidirectionalIterator<K>, $ListIterator<K> {
"add"(k0: K): void
"back"(int0: integer): integer
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): K
"nextIndex"(): integer
"previous"(): K
"previousIndex"(): integer
"remove"(): void
"set"(k0: K): void
"skip"(int0: integer): integer
}

export namespace $ObjectListIterator {
const probejs$$marker: never
}
export abstract class $ObjectListIterator$$Static<K> implements $ObjectListIterator<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Long2FloatFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Float2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Float2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Float2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Float2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Char2FloatFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $ToDoubleFunction } from "packages/java/util/function/$ToDoubleFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Short2FloatFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Double2FloatFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2FloatFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2FloatFunction<K> extends $Function$0<K, float>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2FloatFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"get"(object0: any): float
"getFloat"(object0: any): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(k0: K, float1: float): float
"put"(k0: K, float1: float): float
"removeFloat"(object0: any): float
"size"(): integer
}

export namespace $Reference2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2FloatFunction$$Static<K> implements $Reference2FloatFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2FloatMap$Entry<K> extends $Map$Entry<K, float> {
"equals"(object0: any): boolean
"getFloatValue"(): float
"getKey"(): K
/** @deprecated */
"getValue"(): float
"hashCode"(): integer
/** @deprecated */
"setValue"(float0: float): float
"setValue"(float0: float): float
get "floatValue"(): float
get "key"(): K
get "value"(): float
set "value"(value: float)
set "value"(value: float)
}

export namespace $Object2FloatMap$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2FloatMap$Entry$$Static<K> implements $Object2FloatMap$Entry<K> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction" {
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Boolean2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Boolean2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Short2BooleanFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Double2BooleanFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Float2BooleanFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2BooleanFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Boolean2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Byte2BooleanFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Boolean2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Boolean2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Boolean2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Reference2BooleanFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2BooleanFunction<K> extends $Function$0<K, boolean>, $Predicate<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<K, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): boolean
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, boolean>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2BooleanFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2BooleanFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2BooleanFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2BooleanFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2BooleanFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2BooleanFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2BooleanFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2BooleanFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): boolean
"defaultReturnValue"(boolean0: boolean): void
/** @deprecated */
"get"(object0: any): boolean
"getBoolean"(object0: any): boolean
"getOrDefault"(object0: any, boolean1: boolean): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"put"(k0: K, boolean1: boolean): boolean
"put"(k0: K, boolean1: boolean): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeBoolean"(object0: any): boolean
"size"(): integer
"test"(k0: K): boolean
}

export namespace $Object2BooleanFunction {
function identity<T>(): $Function<T, T>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Object2BooleanFunction$$Static<K> implements $Object2BooleanFunction<K> {
static "identity"<T>(): $Function<T, T>
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Reference2ReferenceMap$Entry<K, V> extends $Map$Entry<K, V> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Reference2ReferenceMap$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Reference2ReferenceMap$Entry$$Static<K, V> implements $Reference2ReferenceMap$Entry<K, V> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $ObjectList, $ObjectList$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectList"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $AbstractObjectCollection } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectCollection"
import { $Stack } from "packages/it/unimi/dsi/fastutil/$Stack"

export class $AbstractObjectList<K> extends $AbstractObjectCollection<K> implements $ObjectList<K>, $Stack<K> {
public "add"(int0: integer, k1: K): void
public "addAll"(int0: integer, collection1: $Collection$$Type<K>): boolean
public "addAll"(objectList0: $ObjectList$$Type<K>): boolean
public "addAll"(int0: integer, objectList1: $ObjectList$$Type<K>): boolean
public "addElements"(int0: integer, k1s: K[]): void
public "addElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
public "compareTo"(list0: $List$$Type<K>): integer
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "get"(int0: integer): K
public "getElements"(int0: integer, object1s: any[], int2: integer, int3: integer): void
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "lastIndexOf"(object0: any): integer
public static "of"<K>(...k0s: K[]): $ObjectList<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
public static "of"<K>(k0: K): $ObjectList<K>
public static "of"<K>(): $ObjectList<K>
public static "of"<K>(k0: K, k1: K): $ObjectList<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<K>
public "peek"(int0: integer): K
public "pop"(): K
public "push"(k0: K): void
public "remove"(int0: integer): K
public "remove"(object0: any): boolean
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeElements"(int0: integer, int1: integer): void
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, k1: K): K
public "setElements"(int0: integer, k1s: K[], int2: integer, int3: integer): void
public "setElements"(k0s: K[]): void
public "setElements"(int0: integer, k1s: K[]): void
public "size"(int0: integer): void
public "size"(): integer
public "sort"(comparator0: $Comparator$$Type<K>): void
public "stream"(): $Stream<K>
public "subList"(int0: integer, int1: integer): $ObjectList<K>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "top"(): K
public "unstableSort"(comparator0: $Comparator$$Type<K>): void
get "empty"(): boolean
set "elements"(value: K[])
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $ObjectSpliterator<K> extends $Spliterator<K> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"getComparator"(): $Comparator<K>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
"tryAdvance"(consumer0: $Consumer$$Type<K>): boolean
get "comparator"(): $Comparator<K>
get "exactSizeIfKnown"(): long
}

export namespace $ObjectSpliterator {
const probejs$$marker: never
}
export abstract class $ObjectSpliterator$$Static<K> implements $ObjectSpliterator<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ReferenceSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ReferenceCollection } from "packages/it/unimi/dsi/fastutil/objects/$ReferenceCollection"

export interface $ReferenceSet<K> extends $ReferenceCollection<K>, $Set<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ReferenceSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ReferenceSet<K>
function of<K>(...k0s: K[]): $ReferenceSet<K>
function of<K>(k0: K, k1: K, k2: K): $ReferenceSet<K>
function of<K>(): $ReferenceSet<K>
function of<K>(k0: K): $ReferenceSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
export abstract class $ReferenceSet$$Static<K> implements $ReferenceSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ReferenceSet<K>
static "of"<K>(...k0s: K[]): $ReferenceSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ReferenceSet<K>
static "of"<K>(): $ReferenceSet<K>
static "of"<K>(k0: K): $ReferenceSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectSortedSet" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $SortedSet } from "packages/java/util/$SortedSet"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ObjectBidirectionalIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterator"
import { $ObjectBidirectionalIterable } from "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterable"

export interface $ObjectSortedSet<K> extends $ObjectSet<K>, $SortedSet<K>, $ObjectBidirectionalIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"comparator"(): $Comparator<K>
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"first"(): K
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(k0: K): $ObjectBidirectionalIterator<K>
"last"(): K
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<K>;
get "empty"(): boolean
}

export namespace $ObjectSortedSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<K>(k0: K, k1: K): $ObjectSet<K>
function of<K>(...k0s: K[]): $ObjectSet<K>
function of<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
function of<K>(): $ObjectSet<K>
function of<K>(k0: K): $ObjectSet<K>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
export abstract class $ObjectSortedSet$$Static<K> implements $ObjectSortedSet<K> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<K>(k0: K, k1: K): $ObjectSet<K>
static "of"<K>(...k0s: K[]): $ObjectSet<K>
static "of"<K>(k0: K, k1: K, k2: K): $ObjectSet<K>
static "of"<K>(): $ObjectSet<K>
static "of"<K>(k0: K): $ObjectSet<K>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$AbstractObject2ObjectFunction" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"

export class $AbstractObject2ObjectFunction<K, V> implements $Object2ObjectFunction<K, V>, $Serializable {
public "andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
public "andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
public "andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
public "andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
public "andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
public "andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
public "andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
public "andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
public "andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
public "andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
public "apply"(k0: K): V
public "clear"(): void
public "compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
public "containsKey"(object0: any): boolean
public "defaultReturnValue"(v0: V): void
public "defaultReturnValue"(): V
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public static "identity"<T>(): $Function<T, T>
public "put"(k0: K, v1: V): V
public "remove"(object0: any): V
public "size"(): integer
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction" {
import { $Long2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Long2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Long2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Float2LongFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Char2LongFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $ToLongFunction } from "packages/java/util/function/$ToLongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Short2LongFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Double2LongFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Long2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Int2LongFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Long2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2LongFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2LongFunction<K> extends $Function$0<K, long>, $ToLongFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<K, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): long
"applyAsLong"(k0: K): long
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, long>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2LongFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2LongFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2LongFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2LongFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2LongFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2LongFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2LongFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2LongFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2LongFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"getLong"(object0: any): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"getOrDefault"(object0: any, long1: long): long
/** @deprecated */
"put"(k0: K, long1: long): long
"put"(k0: K, long1: long): long
"removeLong"(object0: any): long
"size"(): integer
}

export namespace $Object2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2LongFunction$$Static<K> implements $Object2LongFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction" {
import { $Short2CharFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Float2CharFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Char2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Int2CharFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Char2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2CharFunction"
import { $Double2CharFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Long2CharFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Char2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Char2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2CharFunction<K> extends $Function$0<K, character>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<K, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): character
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, character>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2CharFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2CharFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2CharFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2CharFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2CharFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2CharFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2CharFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2CharFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2CharFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"getChar"(object0: any): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
"getOrDefault"(object0: any, char1: character): character
/** @deprecated */
"put"(k0: K, character1: character): character
"put"(k0: K, char1: character): character
"removeChar"(object0: any): character
"size"(): integer
}

export namespace $Object2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2CharFunction$$Static<K> implements $Object2CharFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Double2IntFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Float2IntFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Long2IntFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Int2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Int2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Short2IntFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Int2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $Int2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Int2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2IntFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2IntFunction<K> extends $Function$0<K, integer>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"getInt"(object0: any): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"removeInt"(object0: any): integer
"size"(): integer
}

export namespace $Object2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2IntFunction$$Static<K> implements $Object2IntFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ReferenceCollection" {
import { $ObjectIterable } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"

export interface $ReferenceCollection<K> extends $Collection<K>, $ObjectIterable<K> {
"add"(k0: K): boolean
"addAll"(collection0: $Collection$$Type<K>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<K>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<K>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<K>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $ObjectSpliterator<K>
"stream"(): $Stream<K>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}

export namespace $ReferenceCollection {
const probejs$$marker: never
}
export abstract class $ReferenceCollection$$Static<K> implements $ReferenceCollection<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator"
import { $BidirectionalIterator } from "packages/it/unimi/dsi/fastutil/$BidirectionalIterator"

export interface $ObjectBidirectionalIterator<K> extends $ObjectIterator<K>, $BidirectionalIterator<K> {
"back"(int0: integer): integer
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): K
"previous"(): K
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $ObjectBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $ObjectBidirectionalIterator$$Static<K> implements $ObjectBidirectionalIterator<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2IntMap$Entry<K> extends $Map$Entry<K, integer> {
"equals"(object0: any): boolean
"getIntValue"(): integer
"getKey"(): K
/** @deprecated */
"getValue"(): integer
"hashCode"(): integer
/** @deprecated */
"setValue"(integer0: integer): integer
"setValue"(int0: integer): integer
get "intValue"(): integer
get "key"(): K
get "value"(): integer
set "value"(value: integer)
set "value"(value: integer)
}

export namespace $Object2IntMap$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2IntMap$Entry$$Static<K> implements $Object2IntMap$Entry<K> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterable" {
import { $ObjectIterable } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectBidirectionalIterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectBidirectionalIterator"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"

export interface $ObjectBidirectionalIterable<K> extends $ObjectIterable<K> {
"forEach"(consumer0: $Consumer$$Type<K>): void
"iterator"(): $ObjectBidirectionalIterator<K>
"spliterator"(): $ObjectSpliterator<K>
[Symbol.iterator](): IterableIterator<K>;
}

export namespace $ObjectBidirectionalIterable {
const probejs$$marker: never
}
export abstract class $ObjectBidirectionalIterable$$Static<K> implements $ObjectBidirectionalIterable<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectIterable" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $ObjectIterable<K> extends $Iterable<K> {
"forEach"(consumer0: $Consumer$$Type<K>): void
"spliterator"(): $ObjectSpliterator<K>
}

export namespace $ObjectIterable {
const probejs$$marker: never
}
export abstract class $ObjectIterable$$Static<K> implements $ObjectIterable<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $IntBinaryOperator$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntBinaryOperator"
import { $Double2IntFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Float2IntFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Long2IntFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Int2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Int2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Short2IntFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Object2IntMap$Entry } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap$Entry"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $IntBinaryOperator$$Type as $IntBinaryOperator$0$$Type } from "packages/java/util/function/$IntBinaryOperator"
import { $Int2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $IntCollection } from "packages/it/unimi/dsi/fastutil/ints/$IntCollection"
import { $Int2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Int2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2IntFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2IntMap<K> extends $Object2IntFunction<K>, $Map<K, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<K, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): integer
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, integer>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2IntFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2IntFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2IntFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2IntFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2IntFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2IntFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2IntFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2IntFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2IntFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, integer>): integer
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"computeInt"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
/** @deprecated */
"computeIntIfAbsent"(k0: K, toIntFunction1: $ToIntFunction$$Type<K>): integer
/** @deprecated */
"computeIntIfAbsentPartial"(k0: K, object2IntFunction1: $Object2IntFunction$$Type<K>): integer
"computeIntIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, integer, integer>): integer
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(int0: integer): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, integer>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, integer>): void
/** @deprecated */
"get"(object0: any): integer
"getInt"(object0: any): integer
"getOrDefault"(object0: any, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
"merge"(k0: K, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
"mergeInt"(k0: K, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$0$$Type): integer
"mergeInt"(k0: K, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
"object2IntEntrySet"(): $ObjectSet<$Object2IntMap$Entry<K>>
/** @deprecated */
"put"(k0: K, integer1: integer): integer
"put"(k0: K, int1: integer): integer
"putAll"(map0: $Map$$Type<K, integer>): void
/** @deprecated */
"putIfAbsent"(k0: K, integer1: integer): integer
"putIfAbsent"(k0: K, int1: integer): integer
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(object0: any, int1: integer): boolean
"removeInt"(object0: any): integer
/** @deprecated */
"replace"(k0: K, integer1: integer, integer2: integer): boolean
"replace"(k0: K, int1: integer, int2: integer): boolean
"replace"(k0: K, int1: integer): integer
/** @deprecated */
"replace"(k0: K, integer1: integer): integer
"replaceAll"(biFunction0: $BiFunction$$Type<K, integer, integer>): void
"size"(): integer
"values"(): $IntCollection
[index: string | number]: integer
get "empty"(): boolean
}

export namespace $Object2IntMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
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
export abstract class $Object2IntMap$$Static<K> implements $Object2IntMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
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

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $ObjectIterator<K> extends $Iterator<K> {
"forEachRemaining"(consumer0: $Consumer$$Type<K>): void
"hasNext"(): boolean
"next"(): K
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $ObjectIterator {
const probejs$$marker: never
}
export abstract class $ObjectIterator$$Static<K> implements $ObjectIterator<K> {
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap" {
import { $Long2FloatFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $FloatCollection } from "packages/it/unimi/dsi/fastutil/floats/$FloatCollection"
import { $Float2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Float2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Float2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Char2FloatFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Object2FloatMap$Entry } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap$Entry"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Float2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $DoubleBinaryOperator$$Type } from "packages/java/util/function/$DoubleBinaryOperator"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Short2FloatFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Double2FloatFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2FloatFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $FloatBinaryOperator$$Type } from "packages/it/unimi/dsi/fastutil/floats/$FloatBinaryOperator"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2FloatMap<K> extends $Object2FloatFunction<K>, $Map<K, float> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2FloatFunction
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"computeFloat"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
/** @deprecated */
"computeFloatIfAbsent"(k0: K, toDoubleFunction1: $ToDoubleFunction$$Type<K>): float
/** @deprecated */
"computeFloatIfAbsentPartial"(k0: K, object2FloatFunction1: $Object2FloatFunction$$Type<K>): float
"computeFloatIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"computeIfAbsent"(k0: K, toDoubleFunction1: $ToDoubleFunction$$Type<K>): float
"computeIfAbsent"(k0: K, object2FloatFunction1: $Object2FloatFunction$$Type<K>): float
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, float>): float
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, float, float>): float
"containsKey"(object0: any): boolean
/** @deprecated */
"containsValue"(object0: any): boolean
"containsValue"(float0: float): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"entrySet"(): $ObjectSet<$Map$Entry<K, float>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, float>): void
/** @deprecated */
"get"(object0: any): float
"getFloat"(object0: any): float
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
/** @deprecated */
"merge"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
"mergeFloat"(k0: K, float1: float, doubleBinaryOperator2: $DoubleBinaryOperator$$Type): float
/** @deprecated */
"mergeFloat"(k0: K, float1: float, biFunction2: $BiFunction$$Type<float, float, float>): float
"mergeFloat"(k0: K, float1: float, floatBinaryOperator2: $FloatBinaryOperator$$Type): float
"object2FloatEntrySet"(): $ObjectSet<$Object2FloatMap$Entry<K>>
/** @deprecated */
"put"(k0: K, float1: float): float
"put"(k0: K, float1: float): float
"putAll"(map0: $Map$$Type<K, float>): void
/** @deprecated */
"putIfAbsent"(k0: K, float1: float): float
"putIfAbsent"(k0: K, float1: float): float
/** @deprecated */
"remove"(object0: any, object1: any): boolean
"remove"(object0: any, float1: float): boolean
"removeFloat"(object0: any): float
/** @deprecated */
"replace"(k0: K, float1: float, float2: float): boolean
"replace"(k0: K, float1: float, float2: float): boolean
"replace"(k0: K, float1: float): float
/** @deprecated */
"replace"(k0: K, float1: float): float
"replaceAll"(biFunction0: $BiFunction$$Type<K, float, float>): void
"size"(): integer
"values"(): $FloatCollection
[index: string | number]: float
get "empty"(): boolean
}

export namespace $Object2FloatMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
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
export abstract class $Object2FloatMap$$Static<K> implements $Object2FloatMap<K> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
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

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap" {
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Reference2ReferenceMap$Entry } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap$Entry"
import { $ObjectSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSet"
import { $Reference2CharFunction, $Reference2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction, $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Short2ReferenceFunction, $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $ReferenceCollection } from "packages/it/unimi/dsi/fastutil/objects/$ReferenceCollection"
import { $Reference2FloatFunction, $Reference2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction, $Reference2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction, $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction, $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Float2ReferenceFunction, $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Reference2ShortFunction, $Reference2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Reference2ReferenceMap<K, V> extends $Reference2ReferenceFunction<K, V>, $Map<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ReferenceFunction<V>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, reference2ReferenceFunction1: $Reference2ReferenceFunction$$Type<K, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
/** @deprecated */
"computeReferenceIfAbsentPartial"(k0: K, reference2ReferenceFunction1: $Reference2ReferenceFunction$$Type<K, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"entrySet"(): $ObjectSet<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"reference2ReferenceEntrySet"(): $ObjectSet<$Reference2ReferenceMap$Entry<K, V>>
"remove"(object0: any): V
"remove"(object0: any, object1: any): boolean
"replace"(k0: K, v1: V, v2: V): boolean
"replace"(k0: K, v1: V): V
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $ReferenceCollection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Reference2ReferenceMap {
function copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
function entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>
function identity<T>(): $Function<T, T>
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
export abstract class $Reference2ReferenceMap$$Static<K, V> implements $Reference2ReferenceMap<K, V> {
static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
static "identity"<T>(): $Function<T, T>
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

declare module "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList" {
import { $AbstractObjectList } from "packages/it/unimi/dsi/fastutil/objects/$AbstractObjectList"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collector } from "packages/java/util/stream/$Collector"
import { $ObjectSpliterator } from "packages/it/unimi/dsi/fastutil/objects/$ObjectSpliterator"
import { $ObjectCollection$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectCollection"
import { $ObjectList, $ObjectList$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectList"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $ObjectIterator$$Type } from "packages/it/unimi/dsi/fastutil/objects/$ObjectIterator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomAccess } from "packages/java/util/$RandomAccess"
import { $Iterator$$Type } from "packages/java/util/$Iterator"

export class $ObjectArrayList<K> extends $AbstractObjectList<K> implements $RandomAccess, $Cloneable, $Serializable {
static readonly "DEFAULT_INITIAL_CAPACITY": integer

constructor(k0s: K[])
constructor(objectList0: $ObjectList$$Type<K>)
constructor(objectCollection0: $ObjectCollection$$Type<K>)
constructor(k0s: K[], int1: integer, int2: integer)
constructor(iterator0: $Iterator$$Type<K>)
constructor(objectIterator0: $ObjectIterator$$Type<K>)
constructor(int0: integer)
constructor()
constructor(collection0: $Collection$$Type<K>)

public "addAll"(objectList0: $ObjectList$$Type<K>): boolean
public "compareTo"(objectArrayList0: $ObjectArrayList$$Type<K>): integer
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "elements"(): K[]
public "ensureCapacity"(int0: integer): void
public "equals"(objectArrayList0: $ObjectArrayList$$Type<K>): boolean
public "get"(int0: integer): K
public static "of"<K>(...k0s: K[]): $ObjectArrayList<K>
public static "of"<K>(): $ObjectArrayList<K>
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
public static "of"<K>(k0: K): $ObjectList<K>
public static "of"<K>(k0: K, k1: K): $ObjectList<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public "parallelStream"(): $Stream<K>
public "remove"(int0: integer): K
public "removeIf"(predicate0: $Predicate$$Type<K>): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<K>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, k1: K): K
public "setElements"(k0s: K[]): void
public "setElements"(int0: integer, k1s: K[]): void
public "spliterator"(): $ObjectSpliterator<K>
public "stream"(): $Stream<K>
public "subList"(int0: integer, int1: integer): $ObjectList<K>
public "toArray"<K>(k0s: K[]): K[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public static "toList"<K>(): $Collector<K, any, $ObjectArrayList<K>>
public static "toListWithExpectedSize"<K>(int0: integer): $Collector<K, any, $ObjectArrayList<K>>
public "trim"(int0: integer): void
public "trim"(): void
public static "wrap"<K>(k0s: K[], int1: integer): $ObjectArrayList<K>
public static "wrap"<K>(k0s: K[]): $ObjectArrayList<K>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction" {
import { $Short2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Short2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Float2ShortFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Double2ShortFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Short2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Int2ShortFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Short2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Short2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Long2ShortFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Char2ShortFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ShortFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2ShortFunction<K> extends $Function$0<K, short>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<K, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): short
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, short>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ShortFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ShortFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ShortFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ShortFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ShortFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ShortFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ShortFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ShortFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getOrDefault"(object0: any, short1: short): short
"getShort"(object0: any): short
/** @deprecated */
"put"(k0: K, short1: short): short
"put"(k0: K, short1: short): short
"removeShort"(object0: any): short
"size"(): integer
}

export namespace $Object2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ShortFunction$$Static<K> implements $Object2ShortFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Double2ObjectFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Long2ObjectFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Short2ObjectFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Reference2ObjectFunction<K, V> extends $Function$0<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ObjectFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Reference2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2ObjectFunction$$Static<K, V> implements $Reference2ObjectFunction<K, V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Short2CharFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Float2CharFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Char2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Int2CharFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Char2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2CharFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Double2CharFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Long2CharFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Char2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Char2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"

export interface $Reference2CharFunction<K> extends $Function$0<K, character>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<K, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): character
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, character>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2CharFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2CharFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2CharFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2CharFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2CharFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2CharFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2CharFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2CharFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2CharFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"getChar"(object0: any): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
"getOrDefault"(object0: any, char1: character): character
/** @deprecated */
"put"(k0: K, character1: character): character
"put"(k0: K, char1: character): character
"removeChar"(object0: any): character
"size"(): integer
}

export namespace $Reference2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2CharFunction$$Static<K> implements $Reference2CharFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction" {
import { $Long2FloatFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Float2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Float2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Float2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Float2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Char2FloatFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Float2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $ToDoubleFunction } from "packages/java/util/function/$ToDoubleFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Short2FloatFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Double2FloatFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2FloatFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2FloatFunction<K> extends $Function$0<K, float>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<K, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): float
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, float>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2FloatFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2FloatFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2FloatFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2FloatFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2FloatFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2FloatFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2FloatFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2FloatFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"get"(object0: any): float
"getFloat"(object0: any): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(object0: any, float1: float): float
/** @deprecated */
"put"(k0: K, float1: float): float
"put"(k0: K, float1: float): float
"removeFloat"(object0: any): float
"size"(): integer
}

export namespace $Object2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2FloatFunction$$Static<K> implements $Object2FloatFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction" {
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Short2ByteFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Byte2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Byte2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Double2ByteFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Char2ByteFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Float2ByteFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Byte2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Long2ByteFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2ByteFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2ByteFunction<K> extends $Function$0<K, byte>, $ToIntFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<K, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Object2ByteFunction<K>
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Object2CharFunction<K>
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Object2DoubleFunction<K>
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Object2FloatFunction<K>
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Object2IntFunction<K>
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Object2LongFunction<K>
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<K, T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Object2ShortFunction<K>
"apply"(k0: K): byte
"applyAsInt"(k0: K): integer
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, byte>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ByteFunction
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ByteFunction
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ByteFunction
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ByteFunction
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ByteFunction
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ByteFunction
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ByteFunction<T>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ByteFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"getByte"(object0: any): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"getOrDefault"(object0: any, byte1: byte): byte
/** @deprecated */
"put"(k0: K, byte1: byte): byte
"put"(k0: K, byte1: byte): byte
"removeByte"(object0: any): byte
"size"(): integer
}

export namespace $Object2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ByteFunction$$Static<K> implements $Object2ByteFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction" {
import { $Int2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Reference2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Short2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Reference2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Reference2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Float2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Reference2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Object2ReferenceFunction<K, V> extends $Function$0<K, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ReferenceFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Object2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Object2ReferenceFunction$$Static<K, V> implements $Object2ReferenceFunction<K, V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Long2DoubleFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Short2DoubleFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Float2DoubleFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Double2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Double2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $ToDoubleFunction } from "packages/java/util/function/$ToDoubleFunction"
import { $Double2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Double2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Double2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Int2DoubleFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2DoubleFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2DoubleFunction<K> extends $Function$0<K, double>, $ToDoubleFunction<K> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<K, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): double
"applyAsDouble"(k0: K): double
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, double>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2DoubleFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2DoubleFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2DoubleFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2DoubleFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2DoubleFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2DoubleFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2DoubleFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2DoubleFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
/** @deprecated */
"get"(object0: any): double
"getDouble"(object0: any): double
"getOrDefault"(object0: any, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"put"(k0: K, double1: double): double
/** @deprecated */
"put"(k0: K, double1: double): double
"removeDouble"(object0: any): double
"size"(): integer
}

export namespace $Reference2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Reference2DoubleFunction$$Static<K> implements $Reference2DoubleFunction<K> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction" {
import { $Function } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2DoubleFunction, $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Int2ObjectFunction, $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Short2ObjectFunction, $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Double2ObjectFunction, $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Char2ObjectFunction, $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Object2CharFunction, $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction, $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Long2ObjectFunction, $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Object2ShortFunction, $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"

export interface $Object2ObjectFunction<K, V> extends $Function<K, V> {
"andThen"<V>(function0: $Function$0$$Type<V, V>): $Function$0<K, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Object2ByteFunction<K>
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Object2CharFunction<K>
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Object2DoubleFunction<K>
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Object2FloatFunction<K>
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Object2IntFunction<K>
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Object2LongFunction<K>
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Object2ObjectFunction<K, T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Object2ReferenceFunction<K, T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Object2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$0$$Type<V, K>): $Function$0<V, V>
"composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<K>): $Byte2ObjectFunction<V>
"composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<K>): $Char2ObjectFunction<V>
"composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<K>): $Double2ObjectFunction<V>
"composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<K>): $Float2ObjectFunction<V>
"composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<K>): $Int2ObjectFunction<V>
"composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<K>): $Long2ObjectFunction<V>
"composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, K>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, K>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<K>): $Short2ObjectFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Object2ObjectFunction {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Object2ObjectFunction$$Static<K, V> implements $Object2ObjectFunction<K, V> {
static "identity"<T>(): $Function$0<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Boolean2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Boolean2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Short2BooleanFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Double2BooleanFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2BooleanFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Boolean2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Boolean2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Reference2BooleanFunction<K> extends $Function$0<K, boolean>, $Predicate<K> {
"and"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<K, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Reference2ByteFunction<K>
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Reference2CharFunction<K>
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Reference2DoubleFunction<K>
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Reference2FloatFunction<K>
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Reference2IntFunction<K>
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Reference2LongFunction<K>
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Reference2ShortFunction<K>
"apply"(k0: K): boolean
"clear"(): void
"compose"<V>(function0: $Function$$Type<V, K>): $Function<V, boolean>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2BooleanFunction
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2BooleanFunction
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2BooleanFunction
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2BooleanFunction
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2BooleanFunction
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2BooleanFunction
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2BooleanFunction<T>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2BooleanFunction
"containsKey"(object0: any): boolean
"defaultReturnValue"(): boolean
"defaultReturnValue"(boolean0: boolean): void
/** @deprecated */
"get"(object0: any): boolean
"getBoolean"(object0: any): boolean
"getOrDefault"(object0: any, boolean1: boolean): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"negate"(): $Predicate<K>
"or"(predicate0: $Predicate$$Type<K>): $Predicate<K>
/** @deprecated */
"put"(k0: K, boolean1: boolean): boolean
"put"(k0: K, boolean1: boolean): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeBoolean"(object0: any): boolean
"size"(): integer
"test"(k0: K): boolean
}

export namespace $Reference2BooleanFunction {
function identity<T>(): $Function<T, T>
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Reference2BooleanFunction$$Static<K> implements $Reference2BooleanFunction<K> {
static "identity"<T>(): $Function<T, T>
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction" {
import { $Int2ReferenceFunction, $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Function } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction, $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction, $Reference2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2CharFunction, $Reference2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2LongFunction, $Reference2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Reference2ObjectFunction, $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction, $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Char2ReferenceFunction, $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction, $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Reference2IntFunction, $Reference2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Float2ReferenceFunction, $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Short2ReferenceFunction, $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "packages/java/util/function/$Function"
import { $Reference2ShortFunction, $Reference2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2FloatFunction, $Reference2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"

export interface $Reference2ReferenceFunction<K, V> extends $Function<K, V> {
"andThen"<V>(function0: $Function$0$$Type<V, V>): $Function$0<K, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Reference2ByteFunction<K>
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Reference2CharFunction<K>
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Reference2DoubleFunction<K>
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Reference2FloatFunction<K>
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Reference2IntFunction<K>
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Reference2LongFunction<K>
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Reference2ObjectFunction<K, T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Reference2ReferenceFunction<K, T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Reference2ShortFunction<K>
"apply"(k0: K): V
"clear"(): void
"compose"<V>(function0: $Function$0$$Type<V, K>): $Function$0<V, V>
"composeByte"(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<K>): $Byte2ReferenceFunction<V>
"composeChar"(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<K>): $Char2ReferenceFunction<V>
"composeDouble"(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<K>): $Double2ReferenceFunction<V>
"composeFloat"(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<K>): $Float2ReferenceFunction<V>
"composeInt"(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<K>): $Int2ReferenceFunction<V>
"composeLong"(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<K>): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<T, K>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<T, K>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<K>): $Short2ReferenceFunction<V>
"containsKey"(object0: any): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"put"(k0: K, v1: V): V
"remove"(object0: any): V
"size"(): integer
}

export namespace $Reference2ReferenceFunction {
function identity<T>(): $Function$0<T, T>
}
export abstract class $Reference2ReferenceFunction$$Static<K, V> implements $Reference2ReferenceFunction<K, V> {
static "identity"<T>(): $Function$0<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectMap$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Object2ObjectMap$Entry<K, V> extends $Map$Entry<K, V> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Object2ObjectMap$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Object2ObjectMap$Entry$$Static<K, V> implements $Object2ObjectMap$Entry<K, V> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

