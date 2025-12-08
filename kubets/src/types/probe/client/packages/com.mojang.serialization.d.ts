declare module "packages/com/mojang/serialization/$MapCodec$ResultFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapCodec$ResultFunction$$Type<A> = ($MapCodec$ResultFunction<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapCodec$ResultFunction_<A> = $MapCodec$ResultFunction$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordCodecBuilder$$Type<O, F> = ($RecordCodecBuilder<O, F>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordCodecBuilder_<O, F> = $RecordCodecBuilder$$Type<O, F>;
}
}

declare module "packages/com/mojang/serialization/$MapEncoder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapEncoder$$Type<A> = ($MapEncoder<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapEncoder_<A> = $MapEncoder$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordCodecBuilder$Mu$$Type<O> = ($RecordCodecBuilder$Mu<O>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordCodecBuilder$Mu_<O> = $RecordCodecBuilder$Mu$$Type<O>;
}
}

declare module "packages/com/mojang/serialization/$OptionalDynamic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OptionalDynamic$$Type<T> = ($OptionalDynamic<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OptionalDynamic_<T> = $OptionalDynamic$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/$Decoder$Boxed" {
import { $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $Dynamic } from "packages/com/mojang/serialization/$Dynamic"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Decoder$Boxed$$Type<A> = ($Decoder$Boxed<A> | ((arg0: $Dynamic<T>) => $DataResult$$Type<$Pair$$Type<A, T>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Decoder$Boxed_<A> = $Decoder$Boxed$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordCodecBuilder$Instance$$Type<O> = ($RecordCodecBuilder$Instance<O>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordCodecBuilder$Instance_<O> = $RecordCodecBuilder$Instance$$Type<O>;
}
}

declare module "packages/com/mojang/serialization/$Codec$ResultFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Codec$ResultFunction$$Type<A> = ($Codec$ResultFunction<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Codec$ResultFunction_<A> = $Codec$ResultFunction$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$DataResult$Instance$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataResult$Instance$Mu$$Type = ($DataResult$Instance$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataResult$Instance$Mu_ = $DataResult$Instance$Mu$$Type;
}
}

declare module "packages/com/mojang/serialization/$Codec" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $UnboundedMapCodec } from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $PrimitiveCodec } from "packages/com/mojang/serialization/codecs/$PrimitiveCodec"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Dynamic, $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $Unit } from "packages/com/mojang/datafixers/util/$Unit"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

export interface $Codec<A> extends $Encoder<A>, $Decoder<A> {
"boxed"(): $Decoder$Boxed<A>
"comap"<B>(function0: $Function$$Type<B, A>): $Encoder<B>
"comapFlatMap"<S>(function0: $Function$$Type<A, $DataResult<S>>, function1: $Function$$Type<S, A>): $Codec<S>
"decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<A, T>>
"decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<A, T>>
"deprecated"(int0: integer): $Codec<A>
"dispatch"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $Codec<E>
"dispatch"<E>(string0: string, function1: $Function$$Type<E, A>, function2: $Function$$Type<A, $Codec<E>>): $Codec<E>
"dispatchMap"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $MapCodec<E>
"dispatchMap"<E>(string0: string, function1: $Function$$Type<E, A>, function2: $Function$$Type<A, $Codec<E>>): $MapCodec<E>
"dispatchStable"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $Codec<E>
"encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, t2: T): $DataResult<T>
"encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): $DataResult<T>
"fieldOf"(string0: string): $MapCodec<A>
"flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $Encoder<B>
"flatComapMap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, $DataResult<A>>): $Codec<S>
"flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $Decoder<B>
"flatXmap"<S>(function0: $Function$$Type<A, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<A>>): $Codec<S>
"listOf"(): $Codec<$List<A>>
"map"<B>(function0: $Function$$Type<A, B>): $Decoder<B>
"mapResult"(resultFunction0: $Codec$ResultFunction$$Type<A>): $Codec<A>
"optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, a2: A, lifecycle3: $Lifecycle$$Type): $MapCodec<A>
"optionalFieldOf"(string0: string, a1: A): $MapCodec<A>
"optionalFieldOf"(string0: string, a1: A, lifecycle2: $Lifecycle$$Type): $MapCodec<A>
"optionalFieldOf"(string0: string): $MapCodec<$Optional<A>>
"orElse"(unaryOperator0: $UnaryOperator$$Type<string>, a1: A): $Codec<A>
"orElse"(consumer0: $Consumer$$Type<string>, a1: A): $Codec<A>
"orElse"(a0: A): $Codec<A>
"orElseGet"(supplier0: $Supplier$$Type<A>): $Codec<A>
"orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<A>): $Codec<A>
"orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<A>): $Codec<A>
"parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<A>
"parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
"partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<A>>, function2: $Function$$Type<A, $DataResult<$Codec<E>>>): $Codec<E>
"simple"(): $Decoder$Simple<A>
"stable"(): $Codec<A>
"terminal"(): $Decoder$Terminal<A>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<A>
"xmap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, A>): $Codec<S>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenMaterialRule
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenMaterialRuleTag
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenChunkGenerator
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenChunkGeneratorTag
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenMaterialCondition
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenMaterialConditionTag
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenDensityFunctionType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenDensityFunctionTypeTag
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.WorldgenBiomeSource
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.WorldgenBiomeSourceTag
}

export namespace $Codec {
const BOOL: $PrimitiveCodec<boolean>
const BYTE: $PrimitiveCodec<byte>
const BYTE_BUFFER: $PrimitiveCodec<$ByteBuffer>
const DOUBLE: $PrimitiveCodec<double>
const EMPTY: $MapCodec<$Unit>
const FLOAT: $PrimitiveCodec<float>
const INT: $PrimitiveCodec<integer>
const INT_STREAM: $PrimitiveCodec<$IntStream>
const LONG: $PrimitiveCodec<long>
const LONG_STREAM: $PrimitiveCodec<$LongStream>
const PASSTHROUGH: $Codec<$Dynamic<any>>
const SHORT: $PrimitiveCodec<short>
const STRING: $PrimitiveCodec<string>
function checkRange<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
function compoundList<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
function doubleRange(double0: double, double1: double): $Codec<double>
function either<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
function empty<A>(): $MapEncoder<A>
function error<A>(string0: string): $Encoder<A>
function floatRange(float0: float, float1: float): $Codec<float>
function intRange(int0: integer, int1: integer): $Codec<integer>
function list<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
function mapEither<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
function mapPair<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
function of<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
function of<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
function of<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
function of<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
function ofBoxed<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
function ofSimple<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
function ofTerminal<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
function optionalField<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
function pair<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
function simpleMap<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
function unboundedMap<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
function unit<A>(a0: A): $Codec<A>
function unit<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
}
export abstract class $Codec$$Static<A> implements $Codec<A> {
static readonly "BOOL": $PrimitiveCodec<boolean>
static readonly "BYTE": $PrimitiveCodec<byte>
static readonly "BYTE_BUFFER": $PrimitiveCodec<$ByteBuffer>
static readonly "DOUBLE": $PrimitiveCodec<double>
static readonly "EMPTY": $MapCodec<$Unit>
static readonly "FLOAT": $PrimitiveCodec<float>
static readonly "INT": $PrimitiveCodec<integer>
static readonly "INT_STREAM": $PrimitiveCodec<$IntStream>
static readonly "LONG": $PrimitiveCodec<long>
static readonly "LONG_STREAM": $PrimitiveCodec<$LongStream>
static readonly "PASSTHROUGH": $Codec<$Dynamic<any>>
static readonly "SHORT": $PrimitiveCodec<short>
static readonly "STRING": $PrimitiveCodec<string>

static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
static "doubleRange"(double0: double, double1: double): $Codec<double>
static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
static "empty"<A>(): $MapEncoder<A>
static "error"<A>(string0: string): $Encoder<A>
static "floatRange"(float0: float, float1: float): $Codec<float>
static "intRange"(int0: integer, int1: integer): $Codec<integer>
static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
static "unit"<A>(a0: A): $Codec<A>
static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Codec$$Type<A> = ($Codec<A> | Special.WorldgenMaterialRule | Special.WorldgenChunkGenerator | Special.WorldgenMaterialCondition | Special.WorldgenDensityFunctionType | Special.WorldgenBiomeSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Codec_<A> = $Codec$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$Decoder$Terminal" {
import { $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Decoder$Terminal$$Type<A> = ($Decoder$Terminal<A> | ((arg0: $DynamicOps<T>, arg1: T) => $DataResult$$Type<A>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Decoder$Terminal_<A> = $Decoder$Terminal$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$RecordBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordBuilder$$Type<T> = ($RecordBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordBuilder_<T> = $RecordBuilder$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordCodecBuilder$Instance$Mu$$Type<O> = ($RecordCodecBuilder$Instance$Mu<O>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordCodecBuilder$Instance$Mu_<O> = $RecordCodecBuilder$Instance$Mu$$Type<O>;
}
}

declare module "packages/com/mojang/serialization/$MapLike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapLike$$Type<T> = ($MapLike<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapLike_<T> = $MapLike$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/codecs/$UnboundedMapCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnboundedMapCodec$$Type<K, V> = ($UnboundedMapCodec<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnboundedMapCodec_<K, V> = $UnboundedMapCodec$$Type<K, V>;
}
}

declare module "packages/com/mojang/serialization/$DynamicOps" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicOps$$Type<T> = ($DynamicOps<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicOps_<T> = $DynamicOps$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/$ListBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ListBuilder$$Type<T> = ($ListBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ListBuilder_<T> = $ListBuilder$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/$Encoder" {
import { $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Encoder$$Type<A> = ($Encoder<A> | ((arg0: A, arg1: $DynamicOps<T>, arg2: T) => $DataResult$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Encoder_<A> = $Encoder$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$DataResult$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataResult$Mu$$Type = ($DataResult$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataResult$Mu_ = $DataResult$Mu$$Type;
}
}

declare module "packages/com/mojang/serialization/$DataResult$Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataResult$Instance$$Type = ($DataResult$Instance | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataResult$Instance_ = $DataResult$Instance$$Type;
}
}

declare module "packages/com/mojang/serialization/$Keyable" {
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Keyable$$Type = ($Keyable | ((arg0: $DynamicOps<T>) => $Stream$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Keyable_ = $Keyable$$Type;
}
}

declare module "packages/com/mojang/serialization/$Dynamic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dynamic$$Type<T> = ($Dynamic<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dynamic_<T> = $Dynamic$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/codecs/$BaseMapCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BaseMapCodec$$Type<K, V> = ($BaseMapCodec<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BaseMapCodec_<K, V> = $BaseMapCodec$$Type<K, V>;
}
}

declare module "packages/com/mojang/serialization/codecs/$SimpleMapCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleMapCodec$$Type<K, V> = ($SimpleMapCodec<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleMapCodec_<K, V> = $SimpleMapCodec$$Type<K, V>;
}
}

declare module "packages/com/mojang/serialization/$DynamicLike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicLike$$Type<T> = ($DynamicLike<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicLike_<T> = $DynamicLike$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/codecs/$PrimitiveCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimitiveCodec$$Type<A> = ($PrimitiveCodec<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimitiveCodec_<A> = $PrimitiveCodec$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$MapCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapCodec$$Type<A> = ($MapCodec<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapCodec_<A> = $MapCodec$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$DataResult$PartialResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataResult$PartialResult$$Type<R> = ($DataResult$PartialResult<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataResult$PartialResult_<R> = $DataResult$PartialResult$$Type<R>;
}
}

declare module "packages/com/mojang/serialization/$Decoder" {
import { $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"
import { $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Decoder$$Type<A> = ($Decoder<A> | ((arg0: $DynamicOps<T>, arg1: T) => $DataResult$$Type<$Pair$$Type<A, T>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Decoder_<A> = $Decoder$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$MapDecoder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapDecoder$$Type<A> = ($MapDecoder<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapDecoder_<A> = $MapDecoder$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$KeyCompressor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KeyCompressor$$Type<T> = ($KeyCompressor<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KeyCompressor_<T> = $KeyCompressor$$Type<T>;
}
}

declare module "packages/com/mojang/serialization/$Compressable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Compressable$$Type = ($Compressable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Compressable_ = $Compressable$$Type;
}
}

declare module "packages/com/mojang/serialization/$MapCodec$MapCodecCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapCodec$MapCodecCodec$$Type<A> = ($MapCodec$MapCodecCodec<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapCodec$MapCodecCodec_<A> = $MapCodec$MapCodecCodec$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$Decoder$Simple" {
import { $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $Dynamic } from "packages/com/mojang/serialization/$Dynamic"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Decoder$Simple$$Type<A> = ($Decoder$Simple<A> | ((arg0: $Dynamic<T>) => $DataResult$$Type<A>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Decoder$Simple_<A> = $Decoder$Simple$$Type<A>;
}
}

declare module "packages/com/mojang/serialization/$Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Lifecycle$$Type = ($Lifecycle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Lifecycle_ = $Lifecycle$$Type;
}
}

declare module "packages/com/mojang/serialization/$CompressorHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompressorHolder$$Type = ($CompressorHolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompressorHolder_ = $CompressorHolder$$Type;
}
}

declare module "packages/com/mojang/serialization/$DataResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataResult$$Type<R> = ($DataResult<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataResult_<R> = $DataResult$$Type<R>;
}
}

