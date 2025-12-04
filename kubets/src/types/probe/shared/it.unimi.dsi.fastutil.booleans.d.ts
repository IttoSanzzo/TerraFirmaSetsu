declare module "packages/it/unimi/dsi/fastutil/booleans/$BooleanPredicate" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"

export interface $BooleanPredicate extends $Predicate<boolean> {
/** @deprecated */
"and"(predicate0: $Predicate$$Type<boolean>): $Predicate<boolean>
"and"(booleanPredicate0: $BooleanPredicate$$Type): $BooleanPredicate
"or"(booleanPredicate0: $BooleanPredicate$$Type): $BooleanPredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<boolean>): $Predicate<boolean>
/** @deprecated */
"test"(boolean0: boolean): boolean
"test"(boolean0: boolean): boolean
}

export namespace $BooleanPredicate {
function identity(): $BooleanPredicate
function isEqual<T>(object0: any): $Predicate<T>
function negation(): $BooleanPredicate
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $BooleanPredicate$$Static implements $BooleanPredicate {
static "identity"(): $BooleanPredicate
static "isEqual"<T>(object0: any): $Predicate<T>
static "negation"(): $BooleanPredicate
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction" {
import { $Long2FloatFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Float2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Float2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Float2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Float2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Char2FloatFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Float2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Short2FloatFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Double2FloatFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2FloatFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"

export interface $Boolean2FloatFunction extends $Function$0<boolean, float> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<boolean, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): float
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, float>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2FloatFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2FloatFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2FloatFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2FloatFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2FloatFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2FloatFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"get"(object0: any): float
"get"(boolean0: boolean): float
"getOrDefault"(boolean0: boolean, float1: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"put"(boolean0: boolean, float1: float): float
/** @deprecated */
"put"(boolean0: boolean, float1: float): float
/** @deprecated */
"remove"(object0: any): float
"remove"(boolean0: boolean): float
"size"(): integer
}

export namespace $Boolean2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2FloatFunction$$Static implements $Boolean2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Double2IntFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Float2IntFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Long2IntFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Int2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Int2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Short2IntFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Int2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $Int2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Int2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2IntFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"

export interface $Boolean2IntFunction extends $Function$0<boolean, integer> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<boolean, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, integer>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2IntFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2IntFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2IntFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2IntFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2IntFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2IntFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"get"(boolean0: boolean): integer
"getOrDefault"(boolean0: boolean, int1: integer): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"put"(boolean0: boolean, int1: integer): integer
/** @deprecated */
"put"(boolean0: boolean, integer1: integer): integer
/** @deprecated */
"remove"(object0: any): integer
"remove"(boolean0: boolean): integer
"size"(): integer
}

export namespace $Boolean2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2IntFunction$$Static implements $Boolean2IntFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $BooleanConsumer extends $Consumer<boolean> {
/** @deprecated */
"accept"(boolean0: boolean): void
"accept"(boolean0: boolean): void
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<boolean>): $Consumer<boolean>
"andThen"(booleanConsumer0: $BooleanConsumer$$Type): $BooleanConsumer
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
export abstract class $BooleanConsumer$$Static implements $BooleanConsumer {
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction" {
import { $Int2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Reference2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Reference2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Short2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Reference2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Char2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Float2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Reference2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Boolean2ReferenceFunction<V> extends $Function$0<boolean, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<boolean, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Boolean2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Boolean2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Boolean2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Boolean2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Boolean2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Boolean2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Boolean2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Boolean2ShortFunction
"apply"(boolean0: boolean): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, V>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ReferenceFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
/** @deprecated */
"get"(object0: any): V
"get"(boolean0: boolean): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(boolean0: boolean, v1: V): V
/** @deprecated */
"put"(boolean0: boolean, v1: V): V
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(boolean0: boolean): V
"size"(): integer
}

export namespace $Boolean2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ReferenceFunction$$Static<V> implements $Boolean2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$BooleanCollection" {
import { $BooleanIterable } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanIterable"
import { $BooleanPredicate$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanPredicate"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $BooleanConsumer$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import { $BooleanSpliterator } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanSpliterator"

export interface $BooleanCollection extends $Collection<boolean>, $BooleanIterable {
/** @deprecated */
"add"(boolean0: boolean): boolean
"add"(boolean0: boolean): boolean
"addAll"(booleanCollection0: $BooleanCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<boolean>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(boolean0: boolean): boolean
"containsAll"(booleanCollection0: $BooleanCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(booleanConsumer0: $BooleanConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<boolean>): void
"hashCode"(): integer
"isEmpty"(): boolean
"parallelStream"(): $Stream<boolean>
"rem"(boolean0: boolean): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(booleanCollection0: $BooleanCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(booleanPredicate0: $BooleanPredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<boolean>): boolean
"retainAll"(booleanCollection0: $BooleanCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $BooleanSpliterator
"stream"(): $Stream<boolean>
"toArray"(boolean0s: boolean[]): boolean[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toBooleanArray"(): boolean[]
/** @deprecated */
"toBooleanArray"(boolean0s: boolean[]): boolean[]
get "empty"(): boolean
}

export namespace $BooleanCollection {
const probejs$$marker: never
}
export abstract class $BooleanCollection$$Static implements $BooleanCollection {
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction" {
import { $Short2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Short2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Float2ShortFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Double2ShortFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Short2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Int2ShortFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Short2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Short2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Long2ShortFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Char2ShortFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ShortFunction"

export interface $Boolean2ShortFunction extends $Function$0<boolean, short> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<boolean, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): short
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, short>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ShortFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ShortFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ShortFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ShortFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ShortFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ShortFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
"get"(boolean0: boolean): short
"getOrDefault"(boolean0: boolean, short1: short): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"put"(boolean0: boolean, short1: short): short
/** @deprecated */
"put"(boolean0: boolean, short1: short): short
/** @deprecated */
"remove"(object0: any): short
"remove"(boolean0: boolean): short
"size"(): integer
}

export namespace $Boolean2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ShortFunction$$Static implements $Boolean2ShortFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$BooleanSpliterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Spliterator$OfPrimitive } from "packages/java/util/$Spliterator$OfPrimitive"
import { $BooleanConsumer, $BooleanConsumer$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $BooleanSpliterator extends $Spliterator$OfPrimitive<boolean, $BooleanConsumer, $BooleanSpliterator> {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<boolean>): void
"forEachRemaining"(booleanConsumer0: $BooleanConsumer$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<boolean>): boolean
"tryAdvance"(booleanConsumer0: $BooleanConsumer$$Type): boolean
get "exactSizeIfKnown"(): long
}

export namespace $BooleanSpliterator {
const probejs$$marker: never
}
export abstract class $BooleanSpliterator$$Static implements $BooleanSpliterator {
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$BooleanIterable" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BooleanConsumer$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $BooleanIterable extends $Iterable<boolean> {
"forEach"(booleanConsumer0: $BooleanConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<boolean>): void
}

export namespace $BooleanIterable {
const probejs$$marker: never
}
export abstract class $BooleanIterable$$Static implements $BooleanIterable {
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction" {
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Short2ByteFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Byte2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Byte2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Object2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Double2ByteFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Char2ByteFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Float2ByteFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Long2ByteFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Int2ByteFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Byte2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Boolean2ByteFunction extends $Function$0<boolean, byte> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<boolean, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): byte
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, byte>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ByteFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ByteFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ByteFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ByteFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ByteFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ByteFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
/** @deprecated */
"get"(object0: any): byte
"get"(boolean0: boolean): byte
"getOrDefault"(boolean0: boolean, byte1: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"put"(boolean0: boolean, byte1: byte): byte
/** @deprecated */
"put"(boolean0: boolean, byte1: byte): byte
/** @deprecated */
"remove"(object0: any): byte
"remove"(boolean0: boolean): byte
"size"(): integer
}

export namespace $Boolean2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ByteFunction$$Static implements $Boolean2ByteFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction" {
import { $Long2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Long2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Long2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Float2LongFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2LongFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Short2LongFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Double2LongFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Long2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Int2LongFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Long2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2LongFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"

export interface $Boolean2LongFunction extends $Function$0<boolean, long> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<boolean, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, long>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2LongFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2LongFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2LongFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2LongFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2LongFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2LongFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"get"(boolean0: boolean): long
"getOrDefault"(boolean0: boolean, long1: long): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"put"(boolean0: boolean, long1: long): long
/** @deprecated */
"put"(boolean0: boolean, long1: long): long
/** @deprecated */
"remove"(object0: any): long
"remove"(boolean0: boolean): long
"size"(): integer
}

export namespace $Boolean2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2LongFunction$$Static implements $Boolean2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction" {
import { $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Double2ObjectFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Long2ObjectFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Short2ObjectFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Char2ObjectFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Boolean2ObjectFunction<V> extends $Function$0<boolean, V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<boolean, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Boolean2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Boolean2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Boolean2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Boolean2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Boolean2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Boolean2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Boolean2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Boolean2ShortFunction
"apply"(boolean0: boolean): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, V>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2ObjectFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(boolean0: boolean): boolean
"defaultReturnValue"(v0: V): void
"defaultReturnValue"(): V
/** @deprecated */
"get"(object0: any): V
"get"(boolean0: boolean): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(boolean0: boolean, v1: V): V
/** @deprecated */
"put"(boolean0: boolean, v1: V): V
"put"(boolean0: boolean, v1: V): V
/** @deprecated */
"remove"(object0: any): V
"remove"(boolean0: boolean): V
"size"(): integer
}

export namespace $Boolean2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2ObjectFunction$$Static<V> implements $Boolean2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction" {
import { $Long2DoubleFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Short2DoubleFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Float2DoubleFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Double2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Boolean2CharFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Double2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Double2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Double2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Double2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Int2DoubleFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Char2DoubleFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"

export interface $Boolean2DoubleFunction extends $Function$0<boolean, double> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<boolean, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, double>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2DoubleFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2DoubleFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2DoubleFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
/** @deprecated */
"get"(object0: any): double
"get"(boolean0: boolean): double
"getOrDefault"(boolean0: boolean, double1: double): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"put"(boolean0: boolean, double1: double): double
/** @deprecated */
"put"(boolean0: boolean, double1: double): double
/** @deprecated */
"remove"(object0: any): double
"remove"(boolean0: boolean): double
"size"(): integer
}

export namespace $Boolean2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2DoubleFunction$$Static implements $Boolean2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction" {
import { $Short2CharFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Boolean2IntFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Float2CharFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Boolean2FloatFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Short2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Char2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Double2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Int2CharFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Char2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Boolean2LongFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Boolean2ByteFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Byte2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction"
import { $Object2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Char2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Boolean2ShortFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2CharFunction"
import { $Double2CharFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Long2CharFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Boolean2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Char2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Char2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Reference2BooleanFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"

export interface $Boolean2CharFunction extends $Function$0<boolean, character> {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<boolean, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Boolean2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Boolean2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Boolean2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Boolean2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Boolean2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Boolean2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Boolean2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Boolean2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Boolean2ShortFunction
"apply"(boolean0: boolean): character
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, boolean>): $Function<T, character>
"composeByte"(byte2BooleanFunction0: $Byte2BooleanFunction$$Type): $Byte2CharFunction
"composeChar"(char2BooleanFunction0: $Char2BooleanFunction$$Type): $Char2CharFunction
"composeDouble"(double2BooleanFunction0: $Double2BooleanFunction$$Type): $Double2CharFunction
"composeFloat"(float2BooleanFunction0: $Float2BooleanFunction$$Type): $Float2CharFunction
"composeInt"(int2BooleanFunction0: $Int2BooleanFunction$$Type): $Int2CharFunction
"composeLong"(long2BooleanFunction0: $Long2BooleanFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2BooleanFunction0: $Object2BooleanFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2BooleanFunction0: $Reference2BooleanFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2BooleanFunction0: $Short2BooleanFunction$$Type): $Short2CharFunction
"containsKey"(boolean0: boolean): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"get"(boolean0: boolean): character
"getOrDefault"(boolean0: boolean, char1: character): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
"put"(boolean0: boolean, char1: character): character
/** @deprecated */
"put"(boolean0: boolean, character1: character): character
/** @deprecated */
"remove"(object0: any): character
"remove"(boolean0: boolean): character
"size"(): integer
}

export namespace $Boolean2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Boolean2CharFunction$$Static implements $Boolean2CharFunction {
static "identity"<T>(): $Function<T, T>
}
}

