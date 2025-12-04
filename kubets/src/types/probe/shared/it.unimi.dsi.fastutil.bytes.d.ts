declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction" {
import { $Long2DoubleFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Object2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Short2DoubleFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Float2DoubleFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Double2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Double2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Double2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Double2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2DoubleFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Double2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Reference2DoubleFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Double2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $IntToDoubleFunction } from "packages/java/util/function/$IntToDoubleFunction"
import { $Double2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Int2DoubleFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Char2DoubleFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2DoubleFunction extends $Function$0<byte, double>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<byte, T>
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): double
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, double>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2DoubleFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2DoubleFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2DoubleFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): double
"defaultReturnValue"(double0: double): void
/** @deprecated */
"get"(object0: any): double
"get"(byte0: byte): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"getOrDefault"(byte0: byte, double1: double): double
"put"(byte0: byte, double1: double): double
/** @deprecated */
"put"(byte0: byte, double1: double): double
"remove"(byte0: byte): double
/** @deprecated */
"remove"(object0: any): double
"size"(): integer
}

export namespace $Byte2DoubleFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2DoubleFunction$$Static implements $Byte2DoubleFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction" {
import { $Long2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2DoubleFunction"
import { $Long2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Long2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2LongFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Object2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Char2LongFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $IntToLongFunction } from "packages/java/util/function/$IntToLongFunction"
import { $Short2LongFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Long2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Double2LongFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2LongFunction"
import { $Long2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Reference2LongFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Int2LongFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Long2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2LongFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2LongFunction extends $Function$0<byte, long>, $IntToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<byte, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): long
/** @deprecated */
"applyAsLong"(int0: integer): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, long>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2LongFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2LongFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2LongFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2LongFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2LongFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2LongFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): long
"defaultReturnValue"(long0: long): void
/** @deprecated */
"get"(object0: any): long
"get"(byte0: byte): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"getOrDefault"(byte0: byte, long1: long): long
"put"(byte0: byte, long1: long): long
/** @deprecated */
"put"(byte0: byte, long1: long): long
"remove"(byte0: byte): long
/** @deprecated */
"remove"(object0: any): long
"size"(): integer
}

export namespace $Byte2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2LongFunction$$Static implements $Byte2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction" {
import { $Function } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Short2ByteFunction, $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Byte2DoubleFunction, $Byte2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2IntFunction, $Byte2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"
import { $Byte2LongFunction, $Byte2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Long2ByteFunction, $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Object2ByteFunction, $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "packages/java/util/function/$Function"
import { $Int2ByteFunction, $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction, $Byte2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction, $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Double2ByteFunction, $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction, $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2ShortFunction, $Byte2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2FloatFunction, $Byte2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Byte2CharFunction, $Byte2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction, $Byte2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Float2ByteFunction, $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"

export interface $Byte2ByteFunction extends $Function<byte, byte>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<byte, T>): $Function$0<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): byte
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, byte>): $Function$0<T, byte>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ByteFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ByteFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ByteFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ByteFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ByteFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ByteFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): byte
"defaultReturnValue"(byte0: byte): void
"get"(byte0: byte): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"getOrDefault"(byte0: byte, byte1: byte): byte
"put"(byte0: byte, byte1: byte): byte
/** @deprecated */
"put"(byte0: byte, byte1: byte): byte
"remove"(byte0: byte): byte
/** @deprecated */
"remove"(object0: any): byte
"size"(): integer
}

export namespace $Byte2ByteFunction {
function identity(): $Byte2ByteFunction
}
export abstract class $Byte2ByteFunction$$Static implements $Byte2ByteFunction {
static "identity"(): $Byte2ByteFunction
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction" {
import { $Short2CharFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Reference2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Float2CharFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Char2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Int2CharFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2CharFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Char2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2LongFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Char2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Char2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2CharFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"
import { $Double2CharFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2CharFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Char2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Long2CharFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2CharFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Char2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2DoubleFunction"
import { $Char2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2CharFunction extends $Function$0<byte, character>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): character
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, character>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2CharFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2CharFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2CharFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2CharFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2CharFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2CharFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): character
"defaultReturnValue"(char0: character): void
/** @deprecated */
"get"(object0: any): character
"get"(byte0: byte): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
"getOrDefault"(byte0: byte, char1: character): character
"put"(byte0: byte, char1: character): character
/** @deprecated */
"put"(byte0: byte, character1: character): character
"remove"(byte0: byte): character
/** @deprecated */
"remove"(object0: any): character
"size"(): integer
}

export namespace $Byte2CharFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2CharFunction$$Static implements $Byte2CharFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction" {
import { $Int2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Reference2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2CharFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Double2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ReferenceFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Reference2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Short2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Reference2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2DoubleFunction"
import { $Reference2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2LongFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Char2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ReferenceFunction"
import { $Long2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ReferenceFunction"
import { $Float2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Reference2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $IntFunction } from "packages/java/util/function/$IntFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceFunction"

export interface $Byte2ReferenceFunction<V> extends $Function$0<byte, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<byte, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Byte2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Byte2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Byte2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Byte2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Byte2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Byte2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Byte2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Byte2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(byte0: byte): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, V>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ReferenceFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
/** @deprecated */
"get"(object0: any): V
"get"(byte0: byte): V
"getOrDefault"(byte0: byte, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
/** @deprecated */
"put"(byte0: byte, v1: V): V
"put"(byte0: byte, v1: V): V
"remove"(byte0: byte): V
/** @deprecated */
"remove"(object0: any): V
"size"(): integer
}

export namespace $Byte2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2ReferenceFunction$$Static<V> implements $Byte2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction" {
import { $Int2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ReferenceFunction"
import { $Int2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Double2IntFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2IntFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Float2IntFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Reference2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2IntFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Long2IntFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2IntFunction"
import { $Int2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2CharFunction"
import { $Int2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Short2IntFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Int2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2LongFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $Int2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Int2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Char2IntFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2IntFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2IntFunction extends $Function$0<byte, integer>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): integer
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, integer>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2IntFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2IntFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2IntFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2IntFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2IntFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2IntFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): integer
"defaultReturnValue"(int0: integer): void
/** @deprecated */
"get"(object0: any): integer
"get"(byte0: byte): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(byte0: byte, int1: integer): integer
"put"(byte0: byte, int1: integer): integer
/** @deprecated */
"put"(byte0: byte, integer1: integer): integer
"remove"(byte0: byte): integer
/** @deprecated */
"remove"(object0: any): integer
"size"(): integer
}

export namespace $Byte2IntFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2IntFunction$$Static implements $Byte2IntFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2BooleanFunction" {
import { $Boolean2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2IntFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Boolean2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2CharFunction"
import { $Boolean2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2FloatFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Short2BooleanFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2BooleanFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Double2BooleanFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2BooleanFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2BooleanFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2BooleanFunction"
import { $Int2BooleanFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2DoubleFunction"
import { $Char2BooleanFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2BooleanFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Boolean2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2LongFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Boolean2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ByteFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2BooleanFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2BooleanFunction"
import { $Boolean2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ObjectFunction"
import { $Long2BooleanFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2BooleanFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Boolean2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ShortFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $IntPredicate, $IntPredicate$$Type } from "packages/java/util/function/$IntPredicate"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Boolean2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/booleans/$Boolean2ReferenceFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Reference2BooleanFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2BooleanFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2BooleanFunction extends $Function$0<byte, boolean>, $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<byte, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, boolean>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2BooleanFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2BooleanFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2BooleanFunction
"containsKey"(byte0: byte): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(): boolean
"defaultReturnValue"(boolean0: boolean): void
/** @deprecated */
"get"(object0: any): boolean
"get"(byte0: byte): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(byte0: byte, boolean1: boolean): boolean
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
/** @deprecated */
"put"(byte0: byte, boolean1: boolean): boolean
"put"(byte0: byte, boolean1: boolean): boolean
"remove"(byte0: byte): boolean
"size"(): integer
/** @deprecated */
"test"(int0: integer): boolean
}

export namespace $Byte2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2BooleanFunction$$Static implements $Byte2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction" {
import { $Short2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2CharFunction"
import { $Short2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2DoubleFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Float2ShortFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Short2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ReferenceFunction"
import { $Double2ShortFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ShortFunction"
import { $Short2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2IntFunction"
import { $Int2ShortFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ShortFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Short2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2LongFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Short2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Object2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Long2ShortFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Char2ShortFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ShortFunction"
import { $Short2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $IntUnaryOperator, $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Reference2ShortFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ShortFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ShortFunction"

export interface $Byte2ShortFunction extends $Function$0<byte, short>, $IntUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<byte, T>
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): short
/** @deprecated */
"applyAsInt"(int0: integer): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, short>
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ShortFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ShortFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ShortFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ShortFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ShortFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ShortFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): short
"defaultReturnValue"(short0: short): void
/** @deprecated */
"get"(object0: any): short
"get"(byte0: byte): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getOrDefault"(byte0: byte, short1: short): short
"put"(byte0: byte, short1: short): short
/** @deprecated */
"put"(byte0: byte, short1: short): short
"remove"(byte0: byte): short
/** @deprecated */
"remove"(object0: any): short
"size"(): integer
}

export namespace $Byte2ShortFunction {
function identity(): $IntUnaryOperator
}
export abstract class $Byte2ShortFunction$$Static implements $Byte2ShortFunction {
static "identity"(): $IntUnaryOperator
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction" {
import { $Object2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleFunction"
import { $Int2ObjectFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Reference2ObjectFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ObjectFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Double2ObjectFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ObjectFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Object2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntFunction"
import { $Object2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2CharFunction"
import { $Object2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2LongFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Byte2FloatFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction"
import { $Long2ObjectFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Object2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ShortFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Object2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceFunction"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Short2ObjectFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ObjectFunction"
import { $Object2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $Float2ObjectFunction } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Char2ObjectFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2ObjectFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $IntFunction } from "packages/java/util/function/$IntFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"

export interface $Byte2ObjectFunction<V> extends $Function$0<byte, V>, $IntFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<byte, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Byte2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Byte2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Byte2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Byte2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Byte2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Byte2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Byte2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Byte2ShortFunction
/** @deprecated */
"apply"(int0: integer): V
"apply"(byte0: byte): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, V>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2ObjectFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
/** @deprecated */
"get"(object0: any): V
"get"(byte0: byte): V
"getOrDefault"(byte0: byte, v1: V): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
/** @deprecated */
"put"(byte0: byte, v1: V): V
"put"(byte0: byte, v1: V): V
"remove"(byte0: byte): V
/** @deprecated */
"remove"(object0: any): V
"size"(): integer
}

export namespace $Byte2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2ObjectFunction$$Static<V> implements $Byte2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/it/unimi/dsi/fastutil/bytes/$Byte2FloatFunction" {
import { $Long2FloatFunction } from "packages/it/unimi/dsi/fastutil/longs/$Long2FloatFunction"
import { $Float2DoubleFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2DoubleFunction"
import { $Short2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/shorts/$Short2ByteFunction"
import { $Float2CharFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2CharFunction"
import { $Float2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2IntFunction"
import { $Byte2IntFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2IntFunction"
import { $Float2ShortFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ShortFunction"
import { $Char2FloatFunction } from "packages/it/unimi/dsi/fastutil/chars/$Char2FloatFunction"
import { $Byte2LongFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2LongFunction"
import { $Object2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Float2LongFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2LongFunction"
import { $Double2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/doubles/$Double2ByteFunction"
import { $Char2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/chars/$Char2ByteFunction"
import { $Reference2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Reference2FloatFunction"
import { $Float2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ByteFunction"
import { $Short2FloatFunction } from "packages/it/unimi/dsi/fastutil/shorts/$Short2FloatFunction"
import { $Function as $Function$0 } from "packages/it/unimi/dsi/fastutil/$Function"
import { $Byte2DoubleFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2DoubleFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ByteFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2FloatFunction"
import { $Float2ReferenceFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "packages/it/unimi/dsi/fastutil/floats/$Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ByteFunction"
import { $Object2FloatFunction } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatFunction"
import { $IntToDoubleFunction } from "packages/java/util/function/$IntToDoubleFunction"
import { $Double2FloatFunction } from "packages/it/unimi/dsi/fastutil/doubles/$Double2FloatFunction"
import { $Int2FloatFunction } from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import { $Int2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2ByteFunction"
import { $Byte2ReferenceFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ReferenceFunction"
import { $Reference2ByteFunction$$Type } from "packages/it/unimi/dsi/fastutil/objects/$Reference2ByteFunction"
import { $Byte2ShortFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ShortFunction"
import { $Byte2CharFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2CharFunction"
import { $Byte2ObjectFunction } from "packages/it/unimi/dsi/fastutil/bytes/$Byte2ObjectFunction"

export interface $Byte2FloatFunction extends $Function$0<byte, float>, $IntToDoubleFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<float, T>): $Function<byte, T>
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Byte2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Byte2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Byte2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Byte2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Byte2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Byte2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Byte2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Byte2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Byte2ShortFunction
"apply"(byte0: byte): float
/** @deprecated */
"applyAsDouble"(int0: integer): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, byte>): $Function<T, float>
"composeByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Byte2FloatFunction
"composeChar"(char2ByteFunction0: $Char2ByteFunction$$Type): $Char2FloatFunction
"composeDouble"(double2ByteFunction0: $Double2ByteFunction$$Type): $Double2FloatFunction
"composeFloat"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2FloatFunction
"composeInt"(int2ByteFunction0: $Int2ByteFunction$$Type): $Int2FloatFunction
"composeLong"(long2ByteFunction0: $Long2ByteFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2ByteFunction0: $Object2ByteFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2ByteFunction0: $Reference2ByteFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2ByteFunction0: $Short2ByteFunction$$Type): $Short2FloatFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(byte0: byte): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
/** @deprecated */
"get"(object0: any): float
"get"(byte0: byte): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(byte0: byte, float1: float): float
"put"(byte0: byte, float1: float): float
/** @deprecated */
"put"(byte0: byte, float1: float): float
"remove"(byte0: byte): float
/** @deprecated */
"remove"(object0: any): float
"size"(): integer
}

export namespace $Byte2FloatFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Byte2FloatFunction$$Static implements $Byte2FloatFunction {
static "identity"<T>(): $Function<T, T>
}
}

