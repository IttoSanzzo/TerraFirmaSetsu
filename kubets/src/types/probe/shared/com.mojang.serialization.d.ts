declare module "packages/com/mojang/serialization/$MapCodec$ResultFunction" {
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"

export interface $MapCodec$ResultFunction<A> {
"apply"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>, dataResult2: $DataResult$$Type<A>): $DataResult<A>
"coApply"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
}

export namespace $MapCodec$ResultFunction {
const probejs$$marker: never
}
export abstract class $MapCodec$ResultFunction$$Static<A> implements $MapCodec$ResultFunction<A> {
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder" {
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type } from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu"
import { $RecordCodecBuilder$Instance, $RecordCodecBuilder$Instance$$Type } from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance"
import { $MapDecoder } from "packages/com/mojang/serialization/$MapDecoder"
import { $App, $App$$Type } from "packages/com/mojang/datafixers/kinds/$App"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $RecordCodecBuilder<O, F> implements $App<$RecordCodecBuilder$Mu<O>, F> {
public static "build"<O>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, O>): $MapCodec<O>
public static "create"<O>(function0: $Function$$Type<$RecordCodecBuilder$Instance$$Type<O>, $App<$RecordCodecBuilder$Mu<O>, O>>): $Codec<O>
public "dependent"<E>(function0: $Function$$Type<O, E>, mapEncoder1: $MapEncoder$$Type<E>, function2: $Function$$Type<F, $MapDecoder<E>>): $RecordCodecBuilder<O, E>
public static "deprecated"<O, F>(f0: F, int1: integer): $RecordCodecBuilder<O, F>
public static "instance"<O>(): $RecordCodecBuilder$Instance<O>
public static "mapCodec"<O>(function0: $Function$$Type<$RecordCodecBuilder$Instance$$Type<O>, $App<$RecordCodecBuilder$Mu<O>, O>>): $MapCodec<O>
public static "of"<O, F>(function0: $Function$$Type<O, F>, mapCodec1: $MapCodec$$Type<F>): $RecordCodecBuilder<O, F>
public static "of"<O, F>(function0: $Function$$Type<O, F>, string1: string, codec2: $Codec$$Type<F>): $RecordCodecBuilder<O, F>
public static "point"<O, F>(f0: F, lifecycle1: $Lifecycle$$Type): $RecordCodecBuilder<O, F>
public static "point"<O, F>(f0: F): $RecordCodecBuilder<O, F>
public static "stable"<O, F>(f0: F): $RecordCodecBuilder<O, F>
public static "unbox"<O, F>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, F>): $RecordCodecBuilder<O, F>
}
}

declare module "packages/com/mojang/serialization/$MapEncoder" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $KeyCompressor, $KeyCompressor$$Type } from "packages/com/mojang/serialization/$KeyCompressor"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Encoder } from "packages/com/mojang/serialization/$Encoder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $MapEncoder<A> extends $Keyable {
"comap"<B>(function0: $Function$$Type<B, A>): $MapEncoder<B>
"compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
"compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
"encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
"encoder"(): $Encoder<A>
"flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $MapEncoder<B>
"keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $MapEncoder<A>
}

export namespace $MapEncoder {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
function makeCompressedBuilder<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
}
export abstract class $MapEncoder$$Static<A> implements $MapEncoder<A> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu" {
import { $K1 } from "packages/com/mojang/datafixers/kinds/$K1"

export class $RecordCodecBuilder$Mu<O> implements $K1 {
constructor()

}
}

declare module "packages/com/mojang/serialization/$OptionalDynamic" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $DynamicLike } from "packages/com/mojang/serialization/$DynamicLike"
import { $Dynamic, $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"

export class $OptionalDynamic<T> extends $DynamicLike<T> {
constructor(dynamicOps0: $DynamicOps$$Type<T>, dataResult1: $DataResult$$Type<$Dynamic$$Type<T>>)

public "asMapOpt"(): $DataResult<$Stream<$Pair<$Dynamic<T>, $Dynamic<T>>>>
public "asStreamOpt"(): $DataResult<$Stream<$Dynamic<T>>>
public "decode"<A>(decoder0: $Decoder$$Type<A>): $DataResult<$Pair<A, T>>
public "flatMap"<U>(function0: $Function$$Type<$Dynamic$$Type<T>, $DataResult<U>>): $DataResult<U>
public "get"(string0: string): $OptionalDynamic<T>
public "get"(): $DataResult<$Dynamic<T>>
public "getElement"(string0: string): $DataResult<T>
public "getElementGeneric"(t0: T): $DataResult<T>
public "getGeneric"(t0: T): $DataResult<T>
public "into"<V>(function0: $Function$$Type<$Dynamic$$Type<T>, V>): $DataResult<V>
public "map"<U>(function0: $Function$$Type<$Dynamic$$Type<T>, U>): $DataResult<U>
public "orElseEmptyList"(): $Dynamic<T>
public "orElseEmptyMap"(): $Dynamic<T>
public "result"(): $Optional<$Dynamic<T>>
}
}

declare module "packages/com/mojang/serialization/$Decoder$Boxed" {
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"

export interface $Decoder$Boxed<A> {
"decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<A, T>>
"decoder"(): $Decoder<A>
}

export namespace $Decoder$Boxed {
const probejs$$marker: never
}
export abstract class $Decoder$Boxed$$Static<A> implements $Decoder$Boxed<A> {
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance" {
import { $Function8, $Function8$$Type } from "packages/com/mojang/datafixers/util/$Function8"
import { $Function7, $Function7$$Type } from "packages/com/mojang/datafixers/util/$Function7"
import { $Function6, $Function6$$Type } from "packages/com/mojang/datafixers/util/$Function6"
import { $Function5, $Function5$$Type } from "packages/com/mojang/datafixers/util/$Function5"
import { $Function9, $Function9$$Type } from "packages/com/mojang/datafixers/util/$Function9"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $RecordCodecBuilder$Instance$Mu } from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance$Mu"
import { $Applicative } from "packages/com/mojang/datafixers/kinds/$Applicative"
import { $App, $App$$Type } from "packages/com/mojang/datafixers/kinds/$App"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Mu$$Type } from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Mu"
import { $Products$P10 } from "packages/com/mojang/datafixers/$Products$P10"
import { $Products$P11 } from "packages/com/mojang/datafixers/$Products$P11"
import { $Products$P14 } from "packages/com/mojang/datafixers/$Products$P14"
import { $Products$P15 } from "packages/com/mojang/datafixers/$Products$P15"
import { $Products$P12 } from "packages/com/mojang/datafixers/$Products$P12"
import { $Products$P13 } from "packages/com/mojang/datafixers/$Products$P13"
import { $Products$P3 } from "packages/com/mojang/datafixers/$Products$P3"
import { $Products$P4 } from "packages/com/mojang/datafixers/$Products$P4"
import { $Products$P16 } from "packages/com/mojang/datafixers/$Products$P16"
import { $Products$P1 } from "packages/com/mojang/datafixers/$Products$P1"
import { $Function16$$Type } from "packages/com/mojang/datafixers/util/$Function16"
import { $Products$P2 } from "packages/com/mojang/datafixers/$Products$P2"
import { $Applicative$Mu, $Applicative$Mu$$Type } from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import { $Function11$$Type } from "packages/com/mojang/datafixers/util/$Function11"
import { $Function10$$Type } from "packages/com/mojang/datafixers/util/$Function10"
import { $Products$P9 } from "packages/com/mojang/datafixers/$Products$P9"
import { $Function15$$Type } from "packages/com/mojang/datafixers/util/$Function15"
import { $Function4, $Function4$$Type } from "packages/com/mojang/datafixers/util/$Function4"
import { $Products$P7 } from "packages/com/mojang/datafixers/$Products$P7"
import { $Function14$$Type } from "packages/com/mojang/datafixers/util/$Function14"
import { $Function3, $Function3$$Type } from "packages/com/mojang/datafixers/util/$Function3"
import { $Products$P8 } from "packages/com/mojang/datafixers/$Products$P8"
import { $Function13$$Type } from "packages/com/mojang/datafixers/util/$Function13"
import { $Products$P5 } from "packages/com/mojang/datafixers/$Products$P5"
import { $Function12$$Type } from "packages/com/mojang/datafixers/util/$Function12"
import { $Products$P6 } from "packages/com/mojang/datafixers/$Products$P6"

export class $RecordCodecBuilder$Instance<O> implements $Applicative<$RecordCodecBuilder$Mu<O>, $RecordCodecBuilder$Instance$Mu<O>> {
constructor()

public "ap"<A, R>(function0: $Function$$Type<A, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, A>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap"<A, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function$$Type<A, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, A>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app14: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app14: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>, app15: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T15>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app14: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>, app15: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T15>, app16: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T16>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap2"<A, B, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $BiFunction$$Type<A, B, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, A>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, B>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap3"<T1, T2, T3, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function3$$Type<T1, T2, T3, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap4"<T1, T2, T3, T4, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function4$$Type<T1, T2, T3, T4, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function5$$Type<T1, T2, T3, T4, T5, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>): $App<$RecordCodecBuilder$Mu<O>, R>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply2"<A, B, R>(biFunction0: $BiFunction$$Type<A, B, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, A>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, B>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply3"<T1, T2, T3, R>(function30: $Function3$$Type<T1, T2, T3, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply4"<T1, T2, T3, T4, R>(function40: $Function4$$Type<T1, T2, T3, T4, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply5"<T1, T2, T3, T4, T5, R>(function50: $Function5$$Type<T1, T2, T3, T4, T5, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(function60: $Function6$$Type<T1, T2, T3, T4, T5, T6, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(function70: $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(function80: $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>): $App<$RecordCodecBuilder$Mu<O>, R>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(function90: $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>): $App<$RecordCodecBuilder$Mu<O>, R>
public "deprecated"<A>(a0: A, int1: integer): $App<$RecordCodecBuilder$Mu<O>, A>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>): $Products$P11<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>): $Products$P10<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>): $Products$P9<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>, app14: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T15>, app15: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T16>): $Products$P16<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>, app14: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T15>): $Products$P15<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>, app13: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T14>): $Products$P14<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>, app12: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T13>): $Products$P13<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>, app8: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T9>, app9: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T10>, app10: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T11>, app11: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T12>): $Products$P12<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
public "group"<T1, T2, T3>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>): $Products$P3<$RecordCodecBuilder$Mu<O>, T1, T2, T3>
public "group"<T1, T2>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>): $Products$P2<$RecordCodecBuilder$Mu<O>, T1, T2>
public "group"<T1>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>): $Products$P1<$RecordCodecBuilder$Mu<O>, T1>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>, app7: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T8>): $Products$P8<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8>
public "group"<T1, T2, T3, T4, T5, T6, T7>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>, app6: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T7>): $Products$P7<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7>
public "group"<T1, T2, T3, T4, T5, T6>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>, app5: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T6>): $Products$P6<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6>
public "group"<T1, T2, T3, T4, T5>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>, app4: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T5>): $Products$P5<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5>
public "group"<T1, T2, T3, T4>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T1>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T2>, app2: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T3>, app3: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T4>): $Products$P4<$RecordCodecBuilder$Mu<O>, T1, T2, T3, T4>
public "lift1"<A, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function$$Type<A, R>>): $Function<$App<$RecordCodecBuilder$Mu<O>, A>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift2"<A, B, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $BiFunction$$Type<A, B, R>>): $BiFunction<$App<$RecordCodecBuilder$Mu<O>, A>, $App<$RecordCodecBuilder$Mu<O>, B>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift3"<T1, T2, T3, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function3$$Type<T1, T2, T3, R>>): $Function3<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift4"<T1, T2, T3, T4, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function4$$Type<T1, T2, T3, T4, R>>): $Function4<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function5$$Type<T1, T2, T3, T4, T5, R>>): $Function5<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, T8>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<$RecordCodecBuilder$Mu<O>, T1>, $App<$RecordCodecBuilder$Mu<O>, T2>, $App<$RecordCodecBuilder$Mu<O>, T3>, $App<$RecordCodecBuilder$Mu<O>, T4>, $App<$RecordCodecBuilder$Mu<O>, T5>, $App<$RecordCodecBuilder$Mu<O>, T6>, $App<$RecordCodecBuilder$Mu<O>, T7>, $App<$RecordCodecBuilder$Mu<O>, T8>, $App<$RecordCodecBuilder$Mu<O>, T9>, $App<$RecordCodecBuilder$Mu<O>, R>>
public "map"<T, R>(function0: $Function$$Type<T, R>, app1: $App$$Type<$RecordCodecBuilder$Mu$$Type<O>, T>): $App<$RecordCodecBuilder$Mu<O>, R>
public "point"<A>(a0: A): $App<$RecordCodecBuilder$Mu<O>, A>
public "point"<A>(a0: A, lifecycle1: $Lifecycle$$Type): $App<$RecordCodecBuilder$Mu<O>, A>
public "stable"<A>(a0: A): $App<$RecordCodecBuilder$Mu<O>, A>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(app0: $App$$Type<Mu, F>): $Applicative<F, Mu>
}
}

declare module "packages/com/mojang/serialization/$Codec$ResultFunction" {
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"

export interface $Codec$ResultFunction<A> {
"apply"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T, dataResult2: $DataResult$$Type<$Pair$$Type<A, T>>): $DataResult<$Pair<A, T>>
"coApply"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A, dataResult2: $DataResult$$Type<T>): $DataResult<T>
}

export namespace $Codec$ResultFunction {
const probejs$$marker: never
}
export abstract class $Codec$ResultFunction$$Static<A> implements $Codec$ResultFunction<A> {
}
}

declare module "packages/com/mojang/serialization/$DataResult$Instance$Mu" {
import { $Applicative$Mu } from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"

export class $DataResult$Instance$Mu implements $Applicative$Mu {
constructor()

}
}

declare module "packages/com/mojang/serialization/$Decoder$Terminal" {
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"

export interface $Decoder$Terminal<A> {
"decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
"decoder"(): $Decoder<A>
}

export namespace $Decoder$Terminal {
const probejs$$marker: never
}
export abstract class $Decoder$Terminal$$Static<A> implements $Decoder$Terminal<A> {
}
}

declare module "packages/com/mojang/serialization/$RecordBuilder" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"

export interface $RecordBuilder<T> {
"add"(string0: string, t1: T): $RecordBuilder<T>
"add"(string0: string, dataResult1: $DataResult$$Type<T>): $RecordBuilder<T>
"add"(dataResult0: $DataResult$$Type<T>, dataResult1: $DataResult$$Type<T>): $RecordBuilder<T>
"add"<E>(string0: string, e1: E, encoder2: $Encoder$$Type<E>): $RecordBuilder<T>
"add"(t0: T, t1: T): $RecordBuilder<T>
"add"(t0: T, dataResult1: $DataResult$$Type<T>): $RecordBuilder<T>
"build"(dataResult0: $DataResult$$Type<T>): $DataResult<T>
"build"(t0: T): $DataResult<T>
"mapError"(unaryOperator0: $UnaryOperator$$Type<string>): $RecordBuilder<T>
"ops"(): $DynamicOps<T>
"setLifecycle"(lifecycle0: $Lifecycle$$Type): $RecordBuilder<T>
"withErrorsFrom"(dataResult0: $DataResult$$Type<any>): $RecordBuilder<T>
set "lifecycle"(value: $Lifecycle$$Type)
}

export namespace $RecordBuilder {
const probejs$$marker: never
}
export abstract class $RecordBuilder$$Static<T> implements $RecordBuilder<T> {
}
}

declare module "packages/com/mojang/serialization/codecs/$RecordCodecBuilder$Instance$Mu" {
import { $Applicative$Mu } from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"

export class $RecordCodecBuilder$Instance$Mu<O> implements $Applicative$Mu {
}
}

declare module "packages/com/mojang/serialization/$MapLike" {
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $MapLike<T> {
"entries"(): $Stream<$Pair<T, T>>
"get"(t0: T): T
"get"(string0: string): T
}

export namespace $MapLike {
function forMap<T>(map0: $Map$$Type<T, T>, dynamicOps1: $DynamicOps$$Type<T>): $MapLike<T>
}
export abstract class $MapLike$$Static<T> implements $MapLike<T> {
static "forMap"<T>(map0: $Map$$Type<T, T>, dynamicOps1: $DynamicOps$$Type<T>): $MapLike<T>
}
}

declare module "packages/com/mojang/serialization/codecs/$UnboundedMapCodec" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $BaseMapCodec } from "packages/com/mojang/serialization/codecs/$BaseMapCodec"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $UnboundedMapCodec<K, V> implements $BaseMapCodec<K, V>, $Codec<$Map<K, V>> {
constructor(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>)

public "boxed"(): $Decoder$Boxed<$Map<K, V>>
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "comap"<B>(function0: $Function$$Type<B, $Map<K, V>>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<$Map$$Type<K, V>, $DataResult<S>>, function1: $Function$$Type<S, $Map<K, V>>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<$Map<K, V>, T>>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<$Map<K, V>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<$Map<K, V>, T>>
public "deprecated"(int0: integer): $Codec<$Map<K, V>>
public "dispatch"<E>(function0: $Function$$Type<E, $Map<K, V>>, function1: $Function$$Type<$Map$$Type<K, V>, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, $Map<K, V>>, function2: $Function$$Type<$Map$$Type<K, V>, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, $Map<K, V>>, function1: $Function$$Type<$Map$$Type<K, V>, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, $Map<K, V>>, function2: $Function$$Type<$Map$$Type<K, V>, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, $Map<K, V>>, function1: $Function$$Type<$Map$$Type<K, V>, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public "elementCodec"(): $Codec<V>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<T>(map0: $Map$$Type<K, V>, dynamicOps1: $DynamicOps$$Type<T>, t2: T): $DataResult<T>
public "encode"<T>(map0: $Map$$Type<K, V>, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, map1: $Map$$Type<K, V>): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<$Map<K, V>>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$Map<K, V>>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<$Map$$Type<K, V>, S>, function1: $Function$$Type<S, $DataResult<$Map<K, V>>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<$Map$$Type<K, V>, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<$Map$$Type<K, V>, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<$Map<K, V>>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public "keyCodec"(): $Codec<K>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<$Map<K, V>>>
public "map"<B>(function0: $Function$$Type<$Map$$Type<K, V>, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<$Map$$Type<K, V>>): $Codec<$Map<K, V>>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, map2: $Map$$Type<K, V>, lifecycle3: $Lifecycle$$Type): $MapCodec<$Map<K, V>>
public "optionalFieldOf"(string0: string, map1: $Map$$Type<K, V>): $MapCodec<$Map<K, V>>
public "optionalFieldOf"(string0: string, map1: $Map$$Type<K, V>, lifecycle2: $Lifecycle$$Type): $MapCodec<$Map<K, V>>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<$Map<K, V>>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, map1: $Map$$Type<K, V>): $Codec<$Map<K, V>>
public "orElse"(consumer0: $Consumer$$Type<string>, map1: $Map$$Type<K, V>): $Codec<$Map<K, V>>
public "orElse"(map0: $Map$$Type<K, V>): $Codec<$Map<K, V>>
public "orElseGet"(supplier0: $Supplier$$Type<$Map<K, V>>): $Codec<$Map<K, V>>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<$Map<K, V>>): $Codec<$Map<K, V>>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<$Map<K, V>>): $Codec<$Map<K, V>>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Map<K, V>>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Map<K, V>>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<$Map<K, V>>>, function2: $Function$$Type<$Map$$Type<K, V>, $DataResult<$Codec<E>>>): $Codec<E>
public "simple"(): $Decoder$Simple<$Map<K, V>>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "stable"(): $Codec<$Map<K, V>>
public "terminal"(): $Decoder$Terminal<$Map<K, V>>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<$Map<K, V>>
public "xmap"<S>(function0: $Function$$Type<$Map$$Type<K, V>, S>, function1: $Function$$Type<S, $Map<K, V>>): $Codec<S>
}
}

declare module "packages/com/mojang/serialization/$DynamicOps" {
import { $LongStream, $LongStream$$Type } from "packages/java/util/stream/$LongStream"
import { $IntStream, $IntStream$$Type } from "packages/java/util/stream/$IntStream"
import { $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $BiConsumer } from "packages/java/util/function/$BiConsumer"
import { $ListBuilder } from "packages/com/mojang/serialization/$ListBuilder"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $RecordBuilder } from "packages/com/mojang/serialization/$RecordBuilder"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $MapLike, $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $DynamicOps<T> {
"compressMaps"(): boolean
"convertList"<U>(dynamicOps0: $DynamicOps$$Type<U>, t1: T): U
"convertMap"<U>(dynamicOps0: $DynamicOps$$Type<U>, t1: T): U
"convertTo"<U>(dynamicOps0: $DynamicOps$$Type<U>, t1: T): U
"createBoolean"(boolean0: boolean): T
"createByte"(byte0: byte): T
"createByteList"(byteBuffer0: $ByteBuffer$$Type): T
"createDouble"(double0: double): T
"createFloat"(float0: float): T
"createInt"(int0: integer): T
"createIntList"(intStream0: $IntStream$$Type): T
"createList"(stream0: $Stream$$Type<T>): T
"createLong"(long0: long): T
"createLongList"(longStream0: $LongStream$$Type): T
"createMap"(stream0: $Stream$$Type<$Pair$$Type<T, T>>): T
"createMap"(map0: $Map$$Type<T, T>): T
"createNumeric"(number0: number): T
"createShort"(short0: short): T
"createString"(string0: string): T
"empty"(): T
"emptyList"(): T
"emptyMap"(): T
"get"(t0: T, string1: string): $DataResult<T>
"getBooleanValue"(t0: T): $DataResult<boolean>
"getByteBuffer"(t0: T): $DataResult<$ByteBuffer>
"getGeneric"(t0: T, t1: T): $DataResult<T>
"getIntStream"(t0: T): $DataResult<$IntStream>
"getList"(t0: T): $DataResult<$Consumer<$Consumer<T>>>
"getLongStream"(t0: T): $DataResult<$LongStream>
"getMap"(t0: T): $DataResult<$MapLike<T>>
"getMapEntries"(t0: T): $DataResult<$Consumer<$BiConsumer<T, T>>>
"getMapValues"(t0: T): $DataResult<$Stream<$Pair<T, T>>>
"getNumberValue"(t0: T): $DataResult<number>
"getNumberValue"(t0: T, number1: number): number
"getStream"(t0: T): $DataResult<$Stream<T>>
"getStringValue"(t0: T): $DataResult<string>
"listBuilder"(): $ListBuilder<T>
"mapBuilder"(): $RecordBuilder<T>
"mergeToList"(t0: T, t1: T): $DataResult<T>
"mergeToList"(t0: T, list1: $List$$Type<T>): $DataResult<T>
"mergeToMap"(t0: T, mapLike1: $MapLike$$Type<T>): $DataResult<T>
"mergeToMap"(t0: T, map1: $Map$$Type<T, T>): $DataResult<T>
"mergeToMap"(t0: T, t1: T, t2: T): $DataResult<T>
"mergeToPrimitive"(t0: T, t1: T): $DataResult<T>
"remove"(t0: T, string1: string): T
"set"(t0: T, string1: string, t2: T): T
"update"(t0: T, string1: string, function2: $Function$$Type<T, T>): T
"updateGeneric"(t0: T, t1: T, function2: $Function$$Type<T, T>): T
"withDecoder"<E>(decoder0: $Decoder$$Type<E>): $Function<T, $DataResult<$Pair<E, T>>>
"withEncoder"<E>(encoder0: $Encoder$$Type<E>): $Function<E, $DataResult<T>>
"withParser"<E>(decoder0: $Decoder$$Type<E>): $Function<T, $DataResult<E>>
}

export namespace $DynamicOps {
const probejs$$marker: never
}
export abstract class $DynamicOps$$Static<T> implements $DynamicOps<T> {
}
}

declare module "packages/com/mojang/serialization/$ListBuilder" {
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps } from "packages/com/mojang/serialization/$DynamicOps"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export interface $ListBuilder<T> {
"add"(t0: T): $ListBuilder<T>
"add"<E>(e0: E, encoder1: $Encoder$$Type<E>): $ListBuilder<T>
"add"(dataResult0: $DataResult$$Type<T>): $ListBuilder<T>
"addAll"<E>(iterable0: $Iterable$$Type<E>, encoder1: $Encoder$$Type<E>): $ListBuilder<T>
"build"(dataResult0: $DataResult$$Type<T>): $DataResult<T>
"build"(t0: T): $DataResult<T>
"mapError"(unaryOperator0: $UnaryOperator$$Type<string>): $ListBuilder<T>
"ops"(): $DynamicOps<T>
"withErrorsFrom"(dataResult0: $DataResult$$Type<any>): $ListBuilder<T>
}

export namespace $ListBuilder {
const probejs$$marker: never
}
export abstract class $ListBuilder$$Static<T> implements $ListBuilder<T> {
}
}

declare module "packages/com/mojang/serialization/$Encoder" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $MapEncoder } from "packages/com/mojang/serialization/$MapEncoder"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"

export interface $Encoder<A> {
"comap"<B>(function0: $Function$$Type<B, A>): $Encoder<B>
"encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, t2: T): $DataResult<T>
"encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): $DataResult<T>
"fieldOf"(string0: string): $MapEncoder<A>
"flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $Encoder<B>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $Encoder<A>
}

export namespace $Encoder {
function empty<A>(): $MapEncoder<A>
function error<A>(string0: string): $Encoder<A>
}
export abstract class $Encoder$$Static<A> implements $Encoder<A> {
static "empty"<A>(): $MapEncoder<A>
static "error"<A>(string0: string): $Encoder<A>
}
}

declare module "packages/com/mojang/serialization/$DataResult$Mu" {
import { $K1 } from "packages/com/mojang/datafixers/kinds/$K1"

export class $DataResult$Mu implements $K1 {
constructor()

}
}

declare module "packages/com/mojang/serialization/$DataResult$Instance" {
import { $Function8, $Function8$$Type } from "packages/com/mojang/datafixers/util/$Function8"
import { $Function7, $Function7$$Type } from "packages/com/mojang/datafixers/util/$Function7"
import { $Function6, $Function6$$Type } from "packages/com/mojang/datafixers/util/$Function6"
import { $Function5, $Function5$$Type } from "packages/com/mojang/datafixers/util/$Function5"
import { $Function9, $Function9$$Type } from "packages/com/mojang/datafixers/util/$Function9"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Applicative } from "packages/com/mojang/datafixers/kinds/$Applicative"
import { $DataResult$Instance$Mu } from "packages/com/mojang/serialization/$DataResult$Instance$Mu"
import { $App, $App$$Type } from "packages/com/mojang/datafixers/kinds/$App"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"
import { $DataResult$Mu, $DataResult$Mu$$Type } from "packages/com/mojang/serialization/$DataResult$Mu"
import { $Products$P10 } from "packages/com/mojang/datafixers/$Products$P10"
import { $Products$P11 } from "packages/com/mojang/datafixers/$Products$P11"
import { $Products$P14 } from "packages/com/mojang/datafixers/$Products$P14"
import { $Products$P15 } from "packages/com/mojang/datafixers/$Products$P15"
import { $Products$P12 } from "packages/com/mojang/datafixers/$Products$P12"
import { $Products$P13 } from "packages/com/mojang/datafixers/$Products$P13"
import { $Products$P3 } from "packages/com/mojang/datafixers/$Products$P3"
import { $Products$P4 } from "packages/com/mojang/datafixers/$Products$P4"
import { $Products$P16 } from "packages/com/mojang/datafixers/$Products$P16"
import { $Products$P1 } from "packages/com/mojang/datafixers/$Products$P1"
import { $Function16$$Type } from "packages/com/mojang/datafixers/util/$Function16"
import { $Products$P2 } from "packages/com/mojang/datafixers/$Products$P2"
import { $Enum } from "packages/java/lang/$Enum"
import { $Applicative$Mu, $Applicative$Mu$$Type } from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import { $Function11$$Type } from "packages/com/mojang/datafixers/util/$Function11"
import { $Function10$$Type } from "packages/com/mojang/datafixers/util/$Function10"
import { $Products$P9 } from "packages/com/mojang/datafixers/$Products$P9"
import { $Function15$$Type } from "packages/com/mojang/datafixers/util/$Function15"
import { $Function4, $Function4$$Type } from "packages/com/mojang/datafixers/util/$Function4"
import { $Products$P7 } from "packages/com/mojang/datafixers/$Products$P7"
import { $Function14$$Type } from "packages/com/mojang/datafixers/util/$Function14"
import { $Function3, $Function3$$Type } from "packages/com/mojang/datafixers/util/$Function3"
import { $Products$P8 } from "packages/com/mojang/datafixers/$Products$P8"
import { $Function13$$Type } from "packages/com/mojang/datafixers/util/$Function13"
import { $Products$P5 } from "packages/com/mojang/datafixers/$Products$P5"
import { $Function12$$Type } from "packages/com/mojang/datafixers/util/$Function12"
import { $Products$P6 } from "packages/com/mojang/datafixers/$Products$P6"

export class $DataResult$Instance extends $Enum<$DataResult$Instance> implements $Applicative<$DataResult$Mu, $DataResult$Instance$Mu> {
static readonly "INSTANCE": $DataResult$Instance

public "ap"<A, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function$$Type<A, R>>, app1: $App$$Type<$DataResult$Mu$$Type, A>): $App<$DataResult$Mu, R>
public "ap"<A, R>(function0: $Function$$Type<A, R>, app1: $App$$Type<$DataResult$Mu$$Type, A>): $App<$DataResult$Mu, R>
public "ap10"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>): $App<$DataResult$Mu, R>
public "ap11"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>): $App<$DataResult$Mu, R>
public "ap12"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>, app12: $App$$Type<$DataResult$Mu$$Type, T12>): $App<$DataResult$Mu, R>
public "ap13"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>, app12: $App$$Type<$DataResult$Mu$$Type, T12>, app13: $App$$Type<$DataResult$Mu$$Type, T13>): $App<$DataResult$Mu, R>
public "ap14"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>, app12: $App$$Type<$DataResult$Mu$$Type, T12>, app13: $App$$Type<$DataResult$Mu$$Type, T13>, app14: $App$$Type<$DataResult$Mu$$Type, T14>): $App<$DataResult$Mu, R>
public "ap15"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>, app12: $App$$Type<$DataResult$Mu$$Type, T12>, app13: $App$$Type<$DataResult$Mu$$Type, T13>, app14: $App$$Type<$DataResult$Mu$$Type, T14>, app15: $App$$Type<$DataResult$Mu$$Type, T15>): $App<$DataResult$Mu, R>
public "ap16"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>, app10: $App$$Type<$DataResult$Mu$$Type, T10>, app11: $App$$Type<$DataResult$Mu$$Type, T11>, app12: $App$$Type<$DataResult$Mu$$Type, T12>, app13: $App$$Type<$DataResult$Mu$$Type, T13>, app14: $App$$Type<$DataResult$Mu$$Type, T14>, app15: $App$$Type<$DataResult$Mu$$Type, T15>, app16: $App$$Type<$DataResult$Mu$$Type, T16>): $App<$DataResult$Mu, R>
public "ap2"<A, B, R>(app0: $App$$Type<$DataResult$Mu$$Type, $BiFunction$$Type<A, B, R>>, app1: $App$$Type<$DataResult$Mu$$Type, A>, app2: $App$$Type<$DataResult$Mu$$Type, B>): $App<$DataResult$Mu, R>
public "ap3"<T1, T2, T3, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function3$$Type<T1, T2, T3, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>): $App<$DataResult$Mu, R>
public "ap4"<T1, T2, T3, T4, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function4$$Type<T1, T2, T3, T4, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>): $App<$DataResult$Mu, R>
public "ap5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function5$$Type<T1, T2, T3, T4, T5, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>): $App<$DataResult$Mu, R>
public "ap6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>): $App<$DataResult$Mu, R>
public "ap7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>): $App<$DataResult$Mu, R>
public "ap8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>): $App<$DataResult$Mu, R>
public "ap9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>): $App<$DataResult$Mu, R>
public "apply2"<A, B, R>(biFunction0: $BiFunction$$Type<A, B, R>, app1: $App$$Type<$DataResult$Mu$$Type, A>, app2: $App$$Type<$DataResult$Mu$$Type, B>): $App<$DataResult$Mu, R>
public "apply3"<T1, T2, T3, R>(function30: $Function3$$Type<T1, T2, T3, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>): $App<$DataResult$Mu, R>
public "apply4"<T1, T2, T3, T4, R>(function40: $Function4$$Type<T1, T2, T3, T4, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>): $App<$DataResult$Mu, R>
public "apply5"<T1, T2, T3, T4, T5, R>(function50: $Function5$$Type<T1, T2, T3, T4, T5, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>): $App<$DataResult$Mu, R>
public "apply6"<T1, T2, T3, T4, T5, T6, R>(function60: $Function6$$Type<T1, T2, T3, T4, T5, T6, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>): $App<$DataResult$Mu, R>
public "apply7"<T1, T2, T3, T4, T5, T6, T7, R>(function70: $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>): $App<$DataResult$Mu, R>
public "apply8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(function80: $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>): $App<$DataResult$Mu, R>
public "apply9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(function90: $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, app1: $App$$Type<$DataResult$Mu$$Type, T1>, app2: $App$$Type<$DataResult$Mu$$Type, T2>, app3: $App$$Type<$DataResult$Mu$$Type, T3>, app4: $App$$Type<$DataResult$Mu$$Type, T4>, app5: $App$$Type<$DataResult$Mu$$Type, T5>, app6: $App$$Type<$DataResult$Mu$$Type, T6>, app7: $App$$Type<$DataResult$Mu$$Type, T7>, app8: $App$$Type<$DataResult$Mu$$Type, T8>, app9: $App$$Type<$DataResult$Mu$$Type, T9>): $App<$DataResult$Mu, R>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>): $Products$P11<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>): $Products$P10<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>): $Products$P9<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>, app11: $App$$Type<$DataResult$Mu$$Type, T12>, app12: $App$$Type<$DataResult$Mu$$Type, T13>, app13: $App$$Type<$DataResult$Mu$$Type, T14>, app14: $App$$Type<$DataResult$Mu$$Type, T15>, app15: $App$$Type<$DataResult$Mu$$Type, T16>): $Products$P16<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>, app11: $App$$Type<$DataResult$Mu$$Type, T12>, app12: $App$$Type<$DataResult$Mu$$Type, T13>, app13: $App$$Type<$DataResult$Mu$$Type, T14>, app14: $App$$Type<$DataResult$Mu$$Type, T15>): $Products$P15<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>, app11: $App$$Type<$DataResult$Mu$$Type, T12>, app12: $App$$Type<$DataResult$Mu$$Type, T13>, app13: $App$$Type<$DataResult$Mu$$Type, T14>): $Products$P14<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>, app11: $App$$Type<$DataResult$Mu$$Type, T12>, app12: $App$$Type<$DataResult$Mu$$Type, T13>): $Products$P13<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>, app8: $App$$Type<$DataResult$Mu$$Type, T9>, app9: $App$$Type<$DataResult$Mu$$Type, T10>, app10: $App$$Type<$DataResult$Mu$$Type, T11>, app11: $App$$Type<$DataResult$Mu$$Type, T12>): $Products$P12<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>
public "group"<T1, T2, T3>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>): $Products$P3<$DataResult$Mu, T1, T2, T3>
public "group"<T1, T2>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>): $Products$P2<$DataResult$Mu, T1, T2>
public "group"<T1>(app0: $App$$Type<$DataResult$Mu$$Type, T1>): $Products$P1<$DataResult$Mu, T1>
public "group"<T1, T2, T3, T4, T5, T6, T7, T8>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>, app7: $App$$Type<$DataResult$Mu$$Type, T8>): $Products$P8<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7, T8>
public "group"<T1, T2, T3, T4, T5, T6, T7>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>, app6: $App$$Type<$DataResult$Mu$$Type, T7>): $Products$P7<$DataResult$Mu, T1, T2, T3, T4, T5, T6, T7>
public "group"<T1, T2, T3, T4, T5, T6>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>, app5: $App$$Type<$DataResult$Mu$$Type, T6>): $Products$P6<$DataResult$Mu, T1, T2, T3, T4, T5, T6>
public "group"<T1, T2, T3, T4, T5>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>, app4: $App$$Type<$DataResult$Mu$$Type, T5>): $Products$P5<$DataResult$Mu, T1, T2, T3, T4, T5>
public "group"<T1, T2, T3, T4>(app0: $App$$Type<$DataResult$Mu$$Type, T1>, app1: $App$$Type<$DataResult$Mu$$Type, T2>, app2: $App$$Type<$DataResult$Mu$$Type, T3>, app3: $App$$Type<$DataResult$Mu$$Type, T4>): $Products$P4<$DataResult$Mu, T1, T2, T3, T4>
public "lift1"<A, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function$$Type<A, R>>): $Function<$App<$DataResult$Mu, A>, $App<$DataResult$Mu, R>>
public "lift2"<A, B, R>(app0: $App$$Type<$DataResult$Mu$$Type, $BiFunction$$Type<A, B, R>>): $BiFunction<$App<$DataResult$Mu, A>, $App<$DataResult$Mu, B>, $App<$DataResult$Mu, R>>
public "lift3"<T1, T2, T3, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function3$$Type<T1, T2, T3, R>>): $Function3<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, R>>
public "lift4"<T1, T2, T3, T4, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function4$$Type<T1, T2, T3, T4, R>>): $Function4<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, R>>
public "lift5"<T1, T2, T3, T4, T5, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function5$$Type<T1, T2, T3, T4, T5, R>>): $Function5<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, R>>
public "lift6"<T1, T2, T3, T4, T5, T6, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function6$$Type<T1, T2, T3, T4, T5, T6, R>>): $Function6<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, R>>
public "lift7"<T1, T2, T3, T4, T5, T6, T7, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>>): $Function7<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, R>>
public "lift8"<T1, T2, T3, T4, T5, T6, T7, T8, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>>): $Function8<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, T8>, $App<$DataResult$Mu, R>>
public "lift9"<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(app0: $App$$Type<$DataResult$Mu$$Type, $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): $Function9<$App<$DataResult$Mu, T1>, $App<$DataResult$Mu, T2>, $App<$DataResult$Mu, T3>, $App<$DataResult$Mu, T4>, $App<$DataResult$Mu, T5>, $App<$DataResult$Mu, T6>, $App<$DataResult$Mu, T7>, $App<$DataResult$Mu, T8>, $App<$DataResult$Mu, T9>, $App<$DataResult$Mu, R>>
public "map"<T, R>(function0: $Function$$Type<T, R>, app1: $App$$Type<$DataResult$Mu$$Type, T>): $App<$DataResult$Mu, R>
public "point"<A>(a0: A): $App<$DataResult$Mu, A>
public static "unbox"<F extends $K1, Mu extends $Applicative$Mu>(app0: $App$$Type<Mu, F>): $Applicative<F, Mu>
public static "valueOf"(string0: string): $DataResult$Instance
public static "values"(): $DataResult$Instance[]
}
}

declare module "packages/com/mojang/serialization/$Keyable" {
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $Keyable {
"keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
}

export namespace $Keyable {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
export abstract class $Keyable$$Static implements $Keyable {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
}

declare module "packages/com/mojang/serialization/$Dynamic" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $OptionalDynamic } from "packages/com/mojang/serialization/$OptionalDynamic"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Pair, $Pair$$Type } from "packages/com/mojang/datafixers/util/$Pair"
import { $DynamicLike } from "packages/com/mojang/serialization/$DynamicLike"
import { $Map } from "packages/java/util/$Map"

export class $Dynamic<T> extends $DynamicLike<T> {
constructor(dynamicOps0: $DynamicOps$$Type<T>)
constructor(dynamicOps0: $DynamicOps$$Type<T>, t1: T)

public "asMapOpt"(): $DataResult<$Stream<$Pair<$Dynamic<T>, $Dynamic<T>>>>
public "asStreamOpt"(): $DataResult<$Stream<$Dynamic<T>>>
public "cast"<U>(dynamicOps0: $DynamicOps$$Type<U>): U
public "castTyped"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Dynamic<U>
public static "convert"<S, T>(dynamicOps0: $DynamicOps$$Type<S>, dynamicOps1: $DynamicOps$$Type<T>, s2: S): T
public "convert"<R>(dynamicOps0: $DynamicOps$$Type<R>): $Dynamic<R>
public "decode"<A>(decoder0: $Decoder$$Type<A>): $DataResult<$Pair<A, T>>
public "get"(string0: string): $OptionalDynamic<T>
public "getElement"(string0: string): $DataResult<T>
public "getElementGeneric"(t0: T): $DataResult<T>
public "getGeneric"(t0: T): $DataResult<T>
public "getMapValues"(): $DataResult<$Map<$Dynamic<T>, $Dynamic<T>>>
public "getValue"(): T
public "into"<V>(function0: $Function$$Type<$Dynamic$$Type<T>, V>): V
public "map"(function0: $Function$$Type<T, T>): $Dynamic<T>
public "merge"(dynamic0: $Dynamic$$Type<any>, dynamic1: $Dynamic$$Type<any>): $OptionalDynamic<T>
public "merge"(dynamic0: $Dynamic$$Type<any>): $OptionalDynamic<T>
public "remove"(string0: string): $Dynamic<T>
public "set"(string0: string, dynamic1: $Dynamic$$Type<any>): $Dynamic<T>
public "update"(string0: string, function1: $Function$$Type<$Dynamic$$Type<any>, $Dynamic<any>>): $Dynamic<T>
public "updateGeneric"(t0: T, function1: $Function$$Type<T, T>): $Dynamic<T>
public "updateMapValues"(function0: $Function$$Type<$Pair$$Type<$Dynamic$$Type<any>, $Dynamic$$Type<any>>, $Pair<$Dynamic<any>, $Dynamic<any>>>): $Dynamic<T>
get "mapValues"(): $DataResult<$Map<$Dynamic<T>, $Dynamic<T>>>
get "value"(): T
}
}

declare module "packages/com/mojang/serialization/codecs/$BaseMapCodec" {
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $BaseMapCodec<K, V> {
"decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<$Map<K, V>>
"elementCodec"(): $Codec<V>
"encode"<T>(map0: $Map$$Type<K, V>, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
"keyCodec"(): $Codec<K>
}

export namespace $BaseMapCodec {
const probejs$$marker: never
}
export abstract class $BaseMapCodec$$Static<K, V> implements $BaseMapCodec<K, V> {
}
}

declare module "packages/com/mojang/serialization/codecs/$SimpleMapCodec" {
import { $MapCodec } from "packages/com/mojang/serialization/$MapCodec"
import { $Keyable, $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $MapEncoder } from "packages/com/mojang/serialization/$MapEncoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Encoder } from "packages/com/mojang/serialization/$Encoder"
import { $BaseMapCodec } from "packages/com/mojang/serialization/codecs/$BaseMapCodec"
import { $MapDecoder, $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $KeyCompressor, $KeyCompressor$$Type } from "packages/com/mojang/serialization/$KeyCompressor"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $SimpleMapCodec<K, V> extends $MapCodec<$Map<K, V>> implements $BaseMapCodec<K, V> {
constructor(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type)

public "ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<$Map$$Type<K, V>, E>>): $MapDecoder<E>
public "comap"<B>(function0: $Function$$Type<B, $Map<K, V>>): $MapEncoder<B>
public "compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
public "compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Map<K, V>>
public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<$Map<K, V>>
public "decoder"(): $Decoder<$Map<K, V>>
public "elementCodec"(): $Codec<V>
public "encode"<T>(map0: $Map$$Type<K, V>, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encoder"(): $Encoder<$Map<K, V>>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$Map<K, V>>>): $MapEncoder<B>
public "flatMap"<B>(function0: $Function$$Type<$Map$$Type<K, V>, $DataResult<B>>): $MapDecoder<B>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "keyCodec"(): $Codec<K>
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
public static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
public "map"<B>(function0: $Function$$Type<$Map$$Type<K, V>, B>): $MapDecoder<B>
}
}

declare module "packages/com/mojang/serialization/$DynamicLike" {
import { $LongStream, $LongStream$$Type } from "packages/java/util/stream/$LongStream"
import { $IntStream, $IntStream$$Type } from "packages/java/util/stream/$IntStream"
import { $DynamicOps, $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Dynamic, $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $DataResult, $DataResult$$Type } from "packages/com/mojang/serialization/$DataResult"
import { $OptionalDynamic } from "packages/com/mojang/serialization/$OptionalDynamic"
import { $List } from "packages/java/util/$List"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Function3$$Type } from "packages/com/mojang/datafixers/util/$Function3"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $DynamicLike<T> {
constructor(dynamicOps0: $DynamicOps$$Type<T>)

public "asBoolean"(boolean0: boolean): boolean
public "asByte"(byte0: byte): byte
public "asByteBuffer"(): $ByteBuffer
public "asByteBufferOpt"(): $DataResult<$ByteBuffer>
public "asDouble"(double0: double): double
public "asFloat"(float0: float): float
public "asInt"(int0: integer): integer
public "asIntStream"(): $IntStream
public "asIntStreamOpt"(): $DataResult<$IntStream>
public "asList"<U>(function0: $Function$$Type<$Dynamic$$Type<T>, U>): $List<U>
public "asListOpt"<U>(function0: $Function$$Type<$Dynamic$$Type<T>, U>): $DataResult<$List<U>>
public "asLong"(long0: long): long
public "asLongStream"(): $LongStream
public "asLongStreamOpt"(): $DataResult<$LongStream>
public "asMap"<K, V>(function0: $Function$$Type<$Dynamic$$Type<T>, K>, function1: $Function$$Type<$Dynamic$$Type<T>, V>): $Map<K, V>
public "asMapOpt"(): $DataResult<$Stream<$Pair<$Dynamic<T>, $Dynamic<T>>>>
public "asMapOpt"<K, V>(function0: $Function$$Type<$Dynamic$$Type<T>, K>, function1: $Function$$Type<$Dynamic$$Type<T>, V>): $DataResult<$Map<K, V>>
public "asNumber"(): $DataResult<number>
public "asNumber"(number0: number): number
public "asShort"(short0: short): short
public "asStream"(): $Stream<$Dynamic<T>>
public "asStreamOpt"(): $DataResult<$Stream<$Dynamic<T>>>
public "asString"(): $DataResult<string>
public "asString"(string0: string): string
public "createBoolean"(boolean0: boolean): $Dynamic<T>
public "createByte"(byte0: byte): $Dynamic<T>
public "createByteList"(byteBuffer0: $ByteBuffer$$Type): $Dynamic<any>
public "createDouble"(double0: double): $Dynamic<T>
public "createFloat"(float0: float): $Dynamic<T>
public "createInt"(int0: integer): $Dynamic<T>
public "createIntList"(intStream0: $IntStream$$Type): $Dynamic<any>
public "createList"(stream0: $Stream$$Type<$Dynamic$$Type<any>>): $Dynamic<T>
public "createLong"(long0: long): $Dynamic<T>
public "createLongList"(longStream0: $LongStream$$Type): $Dynamic<any>
public "createMap"(map0: $Map$$Type<$Dynamic$$Type<any>, $Dynamic$$Type<any>>): $Dynamic<T>
public "createNumeric"(number0: number): $Dynamic<T>
public "createShort"(short0: short): $Dynamic<T>
public "createString"(string0: string): $Dynamic<T>
public "decode"<A>(decoder0: $Decoder$$Type<A>): $DataResult<$Pair<A, T>>
public "emptyList"(): $Dynamic<T>
public "emptyMap"(): $Dynamic<T>
public "get"(string0: string): $OptionalDynamic<T>
public "getElement"(string0: string): $DataResult<T>
public "getElement"(string0: string, t1: T): T
public "getElementGeneric"(t0: T, t1: T): T
public "getElementGeneric"(t0: T): $DataResult<T>
public "getGeneric"(t0: T): $DataResult<T>
public "getOps"(): $DynamicOps<T>
public "read"<A>(decoder0: $Decoder$$Type<A>): $DataResult<A>
public "readList"<E>(decoder0: $Decoder$$Type<E>): $DataResult<$List<E>>
public "readList"<E>(function0: $Function$$Type<$Dynamic$$Type<any>, $DataResult<E>>): $DataResult<$List<E>>
public "readMap"<K, V>(decoder0: $Decoder$$Type<K>, function1: $Function$$Type<K, $Decoder<V>>): $DataResult<$List<$Pair<K, V>>>
public "readMap"<K, V>(decoder0: $Decoder$$Type<K>, decoder1: $Decoder$$Type<V>): $DataResult<$List<$Pair<K, V>>>
public "readMap"<R>(dataResult0: $DataResult$$Type<R>, function31: $Function3$$Type<R, $Dynamic$$Type<T>, $Dynamic$$Type<T>, $DataResult$$Type<R>>): $DataResult<R>
get "ops"(): $DynamicOps<T>
}
}

declare module "packages/com/mojang/serialization/codecs/$PrimitiveCodec" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $UnboundedMapCodec } from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

export interface $PrimitiveCodec<A> extends $Codec<A> {
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
"read"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
"simple"(): $Decoder$Simple<A>
"stable"(): $Codec<A>
"terminal"(): $Decoder$Terminal<A>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<A>
"write"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): T
"xmap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, A>): $Codec<S>
}

export namespace $PrimitiveCodec {
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
export abstract class $PrimitiveCodec$$Static<A> implements $PrimitiveCodec<A> {
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
}

declare module "packages/com/mojang/serialization/$MapCodec" {
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $RecordCodecBuilder } from "packages/com/mojang/serialization/codecs/$RecordCodecBuilder"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $MapCodec$ResultFunction$$Type } from "packages/com/mojang/serialization/$MapCodec$ResultFunction"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Encoder } from "packages/com/mojang/serialization/$Encoder"
import { $MapDecoder, $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $RecordBuilder, $RecordBuilder$$Type } from "packages/com/mojang/serialization/$RecordBuilder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $KeyCompressor, $KeyCompressor$$Type } from "packages/com/mojang/serialization/$KeyCompressor"
import { $CompressorHolder } from "packages/com/mojang/serialization/$CompressorHolder"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $MapCodec<A> extends $CompressorHolder implements $MapDecoder<A>, $MapEncoder<A> {
constructor()

public "ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<A, E>>): $MapDecoder<E>
public "codec"(): $Codec<A>
public "comap"<B>(function0: $Function$$Type<B, A>): $MapEncoder<B>
public "compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
public "compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<A>
public "decoder"(): $Decoder<A>
public "dependent"<E>(mapCodec0: $MapCodec$$Type<E>, function1: $Function$$Type<A, $Pair<E, $MapCodec<E>>>, biFunction2: $BiFunction$$Type<A, E, A>): $MapCodec<A>
public "deprecated"(int0: integer): $MapCodec<A>
public "encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encoder"(): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<A>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $MapEncoder<B>
public "flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $MapDecoder<B>
public "flatXmap"<S>(function0: $Function$$Type<A, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<A>>): $MapCodec<S>
public "forGetter"<O>(function0: $Function$$Type<O, A>): $RecordCodecBuilder<O, A>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
public static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
public "map"<B>(function0: $Function$$Type<A, B>): $MapDecoder<B>
public "mapResult"(resultFunction0: $MapCodec$ResultFunction$$Type<A>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public "orElse"(a0: A): $MapCodec<A>
public "orElse"(consumer0: $Consumer$$Type<string>, a1: A): $MapCodec<A>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, a1: A): $MapCodec<A>
public "orElseGet"(supplier0: $Supplier$$Type<A>): $MapCodec<A>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<A>): $MapCodec<A>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<A>): $MapCodec<A>
public "setPartial"(supplier0: $Supplier$$Type<A>): $MapCodec<A>
public "stable"(): $MapCodec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $MapCodec<A>
public static "unit"<A>(a0: A): $MapCodec<A>
public "xmap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, A>): $MapCodec<S>
set "partial"(value: $Supplier$$Type<A>)
}
}

declare module "packages/com/mojang/serialization/$DataResult$PartialResult" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $DataResult$PartialResult<R> {
constructor(supplier0: $Supplier$$Type<string>, optional1: $Optional$$Type<R>)

public "flatMap"<R2>(function0: $Function$$Type<R, $DataResult$PartialResult<R2>>): $DataResult$PartialResult<R2>
public "map"<R2>(function0: $Function$$Type<R, R2>): $DataResult$PartialResult<R2>
public "message"(): string
}
}

declare module "packages/com/mojang/serialization/$Decoder" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder } from "packages/com/mojang/serialization/$MapDecoder"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $Decoder<A> {
"boxed"(): $Decoder$Boxed<A>
"decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<A, T>>
"decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<A, T>>
"fieldOf"(string0: string): $MapDecoder<A>
"flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $Decoder<B>
"map"<B>(function0: $Function$$Type<A, B>): $Decoder<B>
"parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<A>
"parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
"promotePartial"(consumer0: $Consumer$$Type<string>): $Decoder<A>
"simple"(): $Decoder$Simple<A>
"terminal"(): $Decoder$Terminal<A>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $Decoder<A>
}

export namespace $Decoder {
function error<A>(string0: string): $Decoder<A>
function ofBoxed<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
function ofSimple<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
function ofTerminal<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
function unit<A>(a0: A): $MapDecoder<A>
function unit<A>(supplier0: $Supplier$$Type<A>): $MapDecoder<A>
}
export abstract class $Decoder$$Static<A> implements $Decoder<A> {
static "error"<A>(string0: string): $Decoder<A>
static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
static "unit"<A>(a0: A): $MapDecoder<A>
static "unit"<A>(supplier0: $Supplier$$Type<A>): $MapDecoder<A>
}
}

declare module "packages/com/mojang/serialization/$MapDecoder" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $KeyCompressor } from "packages/com/mojang/serialization/$KeyCompressor"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $MapLike$$Type } from "packages/com/mojang/serialization/$MapLike"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $MapDecoder<A> extends $Keyable {
"ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<A, E>>): $MapDecoder<E>
"compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
"compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
"decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<A>
"decoder"(): $Decoder<A>
"flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $MapDecoder<B>
"keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
"map"<B>(function0: $Function$$Type<A, B>): $MapDecoder<B>
"withLifecycle"(lifecycle0: $Lifecycle$$Type): $MapDecoder<A>
}

export namespace $MapDecoder {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
export abstract class $MapDecoder$$Static<A> implements $MapDecoder<A> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
}

declare module "packages/com/mojang/serialization/$KeyCompressor" {
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"

export class $KeyCompressor<T> {
constructor(dynamicOps0: $DynamicOps$$Type<T>, stream1: $Stream$$Type<T>)

public "compress"(t0: T): integer
public "compress"(string0: string): integer
public "decompress"(int0: integer): T
public "size"(): integer
}
}

declare module "packages/com/mojang/serialization/$Compressable" {
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $KeyCompressor } from "packages/com/mojang/serialization/$KeyCompressor"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $Compressable extends $Keyable {
"compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
"keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
}

export namespace $Compressable {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
export abstract class $Compressable$$Static implements $Compressable {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
}
}

declare module "packages/com/mojang/serialization/$MapCodec$MapCodecCodec" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $MapCodec, $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $UnboundedMapCodec } from "packages/com/mojang/serialization/codecs/$UnboundedMapCodec"
import { $MapEncoder, $MapEncoder$$Type } from "packages/com/mojang/serialization/$MapEncoder"
import { $Encoder, $Encoder$$Type } from "packages/com/mojang/serialization/$Encoder"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Codec$ResultFunction$$Type } from "packages/com/mojang/serialization/$Codec$ResultFunction"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Decoder, $Decoder$$Type } from "packages/com/mojang/serialization/$Decoder"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $Keyable$$Type } from "packages/com/mojang/serialization/$Keyable"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "packages/com/mojang/serialization/$Decoder$Boxed"
import { $MapDecoder$$Type } from "packages/com/mojang/serialization/$MapDecoder"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

export class $MapCodec$MapCodecCodec<A> implements $Codec<A> {
constructor(mapCodec0: $MapCodec$$Type<A>)

public "boxed"(): $Decoder$Boxed<A>
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "codec"(): $MapCodec<A>
public "comap"<B>(function0: $Function$$Type<B, A>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<A, $DataResult<S>>, function1: $Function$$Type<S, A>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<A, T>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<A, T>>
public "deprecated"(int0: integer): $Codec<A>
public "dispatch"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, A>, function2: $Function$$Type<A, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, A>, function2: $Function$$Type<A, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, A>, function1: $Function$$Type<A, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, t2: T): $DataResult<T>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, a1: A): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<A>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, $DataResult<A>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<A, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<A>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<A>>
public "map"<B>(function0: $Function$$Type<A, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<A>): $Codec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, a2: A, lifecycle3: $Lifecycle$$Type): $MapCodec<A>
public "optionalFieldOf"(string0: string, a1: A): $MapCodec<A>
public "optionalFieldOf"(string0: string, a1: A, lifecycle2: $Lifecycle$$Type): $MapCodec<A>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<A>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, a1: A): $Codec<A>
public "orElse"(consumer0: $Consumer$$Type<string>, a1: A): $Codec<A>
public "orElse"(a0: A): $Codec<A>
public "orElseGet"(supplier0: $Supplier$$Type<A>): $Codec<A>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<A>): $Codec<A>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<A>): $Codec<A>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<A>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<A>>, function2: $Function$$Type<A, $DataResult<$Codec<E>>>): $Codec<E>
public "simple"(): $Decoder$Simple<A>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "stable"(): $Codec<A>
public "terminal"(): $Decoder$Terminal<A>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<A>
public "xmap"<S>(function0: $Function$$Type<A, S>, function1: $Function$$Type<S, A>): $Codec<S>
}
}

declare module "packages/com/mojang/serialization/$Decoder$Simple" {
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder } from "packages/com/mojang/serialization/$Decoder"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"

export interface $Decoder$Simple<A> {
"decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<A>
"decoder"(): $Decoder<A>
}

export namespace $Decoder$Simple {
const probejs$$marker: never
}
export abstract class $Decoder$Simple$$Static<A> implements $Decoder$Simple<A> {
}
}

declare module "packages/com/mojang/serialization/$Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Lifecycle {
public "add"(lifecycle0: $Lifecycle$$Type): $Lifecycle
public static "deprecated"(int0: integer): $Lifecycle
public static "experimental"(): $Lifecycle
public static "stable"(): $Lifecycle
}
}

declare module "packages/com/mojang/serialization/$CompressorHolder" {
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $KeyCompressor } from "packages/com/mojang/serialization/$KeyCompressor"
import { $DynamicOps$$Type } from "packages/com/mojang/serialization/$DynamicOps"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Compressable } from "packages/com/mojang/serialization/$Compressable"

export class $CompressorHolder implements $Compressable {
constructor()

public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
}
}

declare module "packages/com/mojang/serialization/$DataResult" {
import { $Lifecycle, $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $DataResult$Mu, $DataResult$Mu$$Type } from "packages/com/mojang/serialization/$DataResult$Mu"
import { $DataResult$Instance } from "packages/com/mojang/serialization/$DataResult$Instance"
import { $DataResult$PartialResult } from "packages/com/mojang/serialization/$DataResult$PartialResult"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Function3$$Type } from "packages/com/mojang/datafixers/util/$Function3"
import { $App, $App$$Type } from "packages/com/mojang/datafixers/kinds/$App"

export class $DataResult<R> implements $App<$DataResult$Mu, R> {
public "addLifecycle"(lifecycle0: $Lifecycle$$Type): $DataResult<R>
public "ap"<R2>(dataResult0: $DataResult$$Type<$Function$$Type<R, R2>>): $DataResult<R2>
public "apply2"<R2, S>(biFunction0: $BiFunction$$Type<R, R2, S>, dataResult1: $DataResult$$Type<R2>): $DataResult<S>
public "apply2stable"<R2, S>(biFunction0: $BiFunction$$Type<R, R2, S>, dataResult1: $DataResult$$Type<R2>): $DataResult<S>
public "apply3"<R2, R3, S>(function30: $Function3$$Type<R, R2, R3, S>, dataResult1: $DataResult$$Type<R2>, dataResult2: $DataResult$$Type<R3>): $DataResult<S>
public static "error"<R>(supplier0: $Supplier$$Type<string>, lifecycle1: $Lifecycle$$Type): $DataResult<R>
public static "error"<R>(supplier0: $Supplier$$Type<string>, r1: R): $DataResult<R>
public "error"(): $Optional<$DataResult$PartialResult<R>>
public static "error"<R>(supplier0: $Supplier$$Type<string>): $DataResult<R>
public static "error"<R>(supplier0: $Supplier$$Type<string>, r1: R, lifecycle2: $Lifecycle$$Type): $DataResult<R>
public "flatMap"<R2>(function0: $Function$$Type<R, $DataResult<R2>>): $DataResult<R2>
public "get"(): $Either<R, $DataResult$PartialResult<R>>
public "getOrThrow"(boolean0: boolean, consumer1: $Consumer$$Type<string>): R
public static "instance"(): $DataResult$Instance
public "lifecycle"(): $Lifecycle
public "map"<T>(function0: $Function$$Type<R, T>): $DataResult<T>
public "mapError"(unaryOperator0: $UnaryOperator$$Type<string>): $DataResult<R>
public static "partialGet"<K, V>(function0: $Function$$Type<K, V>, supplier1: $Supplier$$Type<string>): $Function<K, $DataResult<V>>
public "promotePartial"(consumer0: $Consumer$$Type<string>): $DataResult<R>
public "result"(): $Optional<R>
public "resultOrPartial"(consumer0: $Consumer$$Type<string>): $Optional<R>
public "setLifecycle"(lifecycle0: $Lifecycle$$Type): $DataResult<R>
public "setPartial"(r0: R): $DataResult<R>
public "setPartial"(supplier0: $Supplier$$Type<R>): $DataResult<R>
public static "success"<R>(r0: R, lifecycle1: $Lifecycle$$Type): $DataResult<R>
public static "success"<R>(r0: R): $DataResult<R>
public static "unbox"<R>(app0: $App$$Type<$DataResult$Mu$$Type, R>): $DataResult<R>
set "partial"(value: R)
set "partial"(value: $Supplier$$Type<R>)
}
}

