declare module "packages/net/minecraft/util/$SignatureUpdater" {
import { $SignatureUpdater$Output$$Type } from "packages/net/minecraft/util/$SignatureUpdater$Output"

export interface $SignatureUpdater {
"update"(output0: $SignatureUpdater$Output$$Type): void
}

export namespace $SignatureUpdater {
const probejs$$marker: never
}
export abstract class $SignatureUpdater$$Static implements $SignatureUpdater {
}
}

declare module "packages/net/minecraft/util/$AbortableIterationConsumer" {
import { $AbortableIterationConsumer$Continuation } from "packages/net/minecraft/util/$AbortableIterationConsumer$Continuation"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $AbortableIterationConsumer<T> {
"accept"(t0: T): $AbortableIterationConsumer$Continuation
}

export namespace $AbortableIterationConsumer {
function forConsumer<T>(consumer0: $Consumer$$Type<T>): $AbortableIterationConsumer<T>
}
export abstract class $AbortableIterationConsumer$$Static<T> implements $AbortableIterationConsumer<T> {
static "forConsumer"<T>(consumer0: $Consumer$$Type<T>): $AbortableIterationConsumer<T>
}
}

declare module "packages/net/minecraft/util/$FormattedCharSequence" {
import { $Int2IntFunction$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import { $FormattedCharSink, $FormattedCharSink$$Type } from "packages/net/minecraft/util/$FormattedCharSink"
import { $List$$Type } from "packages/java/util/$List"
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"

export interface $FormattedCharSequence {
"accept"(formattedCharSink0: $FormattedCharSink$$Type): boolean
}

export namespace $FormattedCharSequence {
const EMPTY: $FormattedCharSequence
function backward(string0: string, style1: $Style$$Type): $FormattedCharSequence
function backward(string0: string, style1: $Style$$Type, int2IntFunction2: $Int2IntFunction$$Type): $FormattedCharSequence
function codepoint(int0: integer, style1: $Style$$Type): $FormattedCharSequence
function composite(): $FormattedCharSequence
function composite(formattedCharSequence0: $FormattedCharSequence$$Type): $FormattedCharSequence
function composite(formattedCharSequence0: $FormattedCharSequence$$Type, formattedCharSequence1: $FormattedCharSequence$$Type): $FormattedCharSequence
function composite(...formattedCharSequence0s: $FormattedCharSequence$$Type[]): $FormattedCharSequence
function composite(list0: $List$$Type<$FormattedCharSequence$$Type>): $FormattedCharSequence
function decorateOutput(formattedCharSink0: $FormattedCharSink$$Type, int2IntFunction1: $Int2IntFunction$$Type): $FormattedCharSink
function forward(string0: string, style1: $Style$$Type, int2IntFunction2: $Int2IntFunction$$Type): $FormattedCharSequence
function forward(string0: string, style1: $Style$$Type): $FormattedCharSequence
function fromList(list0: $List$$Type<$FormattedCharSequence$$Type>): $FormattedCharSequence
function fromPair(formattedCharSequence0: $FormattedCharSequence$$Type, formattedCharSequence1: $FormattedCharSequence$$Type): $FormattedCharSequence
}
export abstract class $FormattedCharSequence$$Static implements $FormattedCharSequence {
static readonly "EMPTY": $FormattedCharSequence

static "backward"(string0: string, style1: $Style$$Type): $FormattedCharSequence
static "backward"(string0: string, style1: $Style$$Type, int2IntFunction2: $Int2IntFunction$$Type): $FormattedCharSequence
static "codepoint"(int0: integer, style1: $Style$$Type): $FormattedCharSequence
static "composite"(): $FormattedCharSequence
static "composite"(formattedCharSequence0: $FormattedCharSequence$$Type): $FormattedCharSequence
static "composite"(formattedCharSequence0: $FormattedCharSequence$$Type, formattedCharSequence1: $FormattedCharSequence$$Type): $FormattedCharSequence
static "composite"(...formattedCharSequence0s: $FormattedCharSequence$$Type[]): $FormattedCharSequence
static "composite"(list0: $List$$Type<$FormattedCharSequence$$Type>): $FormattedCharSequence
static "decorateOutput"(formattedCharSink0: $FormattedCharSink$$Type, int2IntFunction1: $Int2IntFunction$$Type): $FormattedCharSink
static "forward"(string0: string, style1: $Style$$Type, int2IntFunction2: $Int2IntFunction$$Type): $FormattedCharSequence
static "forward"(string0: string, style1: $Style$$Type): $FormattedCharSequence
static "fromList"(list0: $List$$Type<$FormattedCharSequence$$Type>): $FormattedCharSequence
static "fromPair"(formattedCharSequence0: $FormattedCharSequence$$Type, formattedCharSequence1: $FormattedCharSequence$$Type): $FormattedCharSequence
}
}

declare module "packages/net/minecraft/util/valueproviders/$ClampedInt" {
import { $IntProvider, $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ClampedInt extends $IntProvider {
static readonly "CODEC": $Codec<$ClampedInt>

constructor(intProvider0: $IntProvider$$Type, int1: integer, int2: integer)

public static "of"(intProvider0: $IntProvider$$Type, int1: integer, int2: integer): $ClampedInt
}
}

declare module "packages/net/minecraft/util/valueproviders/$WeightedListInt" {
import { $SimpleWeightedRandomList$$Type } from "packages/net/minecraft/util/random/$SimpleWeightedRandomList"
import { $IntProvider, $IntProvider$$Type } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $WeightedListInt extends $IntProvider {
static readonly "CODEC": $Codec<$WeightedListInt>

constructor(simpleWeightedRandomList0: $SimpleWeightedRandomList$$Type<$IntProvider$$Type>)

}
}

declare module "packages/net/minecraft/util/valueproviders/$ClampedNormalInt" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $IntProvider } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ClampedNormalInt extends $IntProvider {
static readonly "CODEC": $Codec<$ClampedNormalInt>

public static "of"(float0: float, float1: float, int2: integer, int3: integer): $ClampedNormalInt
public static "sample"(randomSource0: $RandomSource$$Type, float1: float, float2: float, float3: float, float4: float): integer
}
}

declare module "packages/net/minecraft/util/valueproviders/$UniformFloat" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $UniformFloat extends $FloatProvider {
static readonly "CODEC": $Codec<$UniformFloat>

public static "of"(float0: float, float1: float): $UniformFloat
}
}

declare module "packages/net/minecraft/util/$StringRepresentable" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $StringRepresentable {
"getSerializedName"(): string
get "serializedName"(): string
}

export namespace $StringRepresentable {
const PRE_BUILT_MAP_THRESHOLD: integer
function fromEnum<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
function fromEnumWithMapping<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
function keys(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
export abstract class $StringRepresentable$$Static implements $StringRepresentable {
static readonly "PRE_BUILT_MAP_THRESHOLD": integer

static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
}
}

declare module "packages/net/minecraft/util/valueproviders/$SampledFloat" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"

export interface $SampledFloat {
"sample"(randomSource0: $RandomSource$$Type): float
}

export namespace $SampledFloat {
const probejs$$marker: never
}
export abstract class $SampledFloat$$Static implements $SampledFloat {
}
}

declare module "packages/net/minecraft/util/random/$WeightedEntry$Wrapper" {
import { $Weight } from "packages/net/minecraft/util/random/$Weight"
import { $WeightedEntry } from "packages/net/minecraft/util/random/$WeightedEntry"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $WeightedEntry$Wrapper<T> implements $WeightedEntry {
public static "codec"<E>(codec0: $Codec$$Type<E>): $Codec<$WeightedEntry$Wrapper<E>>
public "getData"(): T
public "getWeight"(): $Weight
public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
get "data"(): T
get "weight"(): $Weight
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$ProfilerMeasured" {
import { $MetricSampler } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler"
import { $List } from "packages/java/util/$List"

export interface $ProfilerMeasured {
"profiledMetrics"(): $List<$MetricSampler>
}

export namespace $ProfilerMeasured {
const probejs$$marker: never
}
export abstract class $ProfilerMeasured$$Static implements $ProfilerMeasured {
}
}

declare module "packages/net/minecraft/util/valueproviders/$ConstantInt" {
import { $IntProvider } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $ConstantInt extends $IntProvider {
static readonly "CODEC": $Codec<$ConstantInt>
static readonly "ZERO": $ConstantInt

public "getValue"(): integer
public static "of"(int0: integer): $ConstantInt
get "value"(): integer
}
}

declare module "packages/net/minecraft/util/random/$SimpleWeightedRandomList$Builder" {
import { $SimpleWeightedRandomList } from "packages/net/minecraft/util/random/$SimpleWeightedRandomList"

export class $SimpleWeightedRandomList$Builder<E> {
constructor()

public "add"(e0: E, int1: integer): $SimpleWeightedRandomList$Builder<E>
public "build"(): $SimpleWeightedRandomList<E>
}
}

declare module "packages/net/minecraft/util/$OptionEnum" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"

export interface $OptionEnum {
"getCaption"(): $Component
"getId"(): integer
"getKey"(): string
get "caption"(): $Component
get "id"(): integer
get "key"(): string
}

export namespace $OptionEnum {
const probejs$$marker: never
}
export abstract class $OptionEnum$$Static implements $OptionEnum {
}
}

declare module "packages/net/minecraft/util/$Unit" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Unit extends $Enum<$Unit> {
static readonly "INSTANCE": $Unit

public static "valueOf"(string0: string): $Unit
public static "values"(): $Unit[]
}
}

declare module "packages/net/minecraft/util/$AbortableIterationConsumer$Continuation" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AbortableIterationConsumer$Continuation extends $Enum<$AbortableIterationConsumer$Continuation> {
static readonly "ABORT": $AbortableIterationConsumer$Continuation
static readonly "CONTINUE": $AbortableIterationConsumer$Continuation

public "shouldAbort"(): boolean
public static "valueOf"(string0: string): $AbortableIterationConsumer$Continuation
public static "values"(): $AbortableIterationConsumer$Continuation[]
}
}

declare module "packages/net/minecraft/util/profiling/$ProfilerFiller" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $MetricCategory$$Type } from "packages/net/minecraft/util/profiling/metrics/$MetricCategory"

export interface $ProfilerFiller {
"endTick"(): void
"incrementCounter"(string0: string): void
"incrementCounter"(string0: string, int1: integer): void
"incrementCounter"(supplier0: $Supplier$$Type<string>): void
"incrementCounter"(supplier0: $Supplier$$Type<string>, int1: integer): void
"markForCharting"(metricCategory0: $MetricCategory$$Type): void
"pop"(): void
"popPush"(string0: string): void
"popPush"(supplier0: $Supplier$$Type<string>): void
"push"(string0: string): void
"push"(supplier0: $Supplier$$Type<string>): void
"startTick"(): void
}

export namespace $ProfilerFiller {
const ROOT: string
function tee(profilerFiller0: $ProfilerFiller$$Type, profilerFiller1: $ProfilerFiller$$Type): $ProfilerFiller
}
export abstract class $ProfilerFiller$$Static implements $ProfilerFiller {
static readonly "ROOT": string

static "tee"(profilerFiller0: $ProfilerFiller$$Type, profilerFiller1: $ProfilerFiller$$Type): $ProfilerFiller
}
}

declare module "packages/net/minecraft/util/$BitStorage" {
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export interface $BitStorage {
"copy"(): $BitStorage
"get"(int0: integer): integer
"getAll"(intConsumer0: $IntConsumer$$Type): void
"getAndSet"(int0: integer, int1: integer): integer
"getBits"(): integer
"getRaw"(): long[]
"getSize"(): integer
"set"(int0: integer, int1: integer): void
"unpack"(int0s: integer[]): void
get "bits"(): integer
get "raw"(): long[]
get "size"(): integer
}

export namespace $BitStorage {
const probejs$$marker: never
}
export abstract class $BitStorage$$Static implements $BitStorage {
}
}

declare module "packages/net/minecraft/util/valueproviders/$FloatProvider" {
import { $FloatProviderType } from "packages/net/minecraft/util/valueproviders/$FloatProviderType"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $SampledFloat } from "packages/net/minecraft/util/valueproviders/$SampledFloat"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $FloatProvider implements $SampledFloat {
static readonly "CODEC": $Codec<$FloatProvider>

constructor()

public static "codec"(float0: float, float1: float): $Codec<$FloatProvider>
public "getMaxValue"(): float
public "getMinValue"(): float
public "getType"(): $FloatProviderType<any>
public "sample"(randomSource0: $RandomSource$$Type): float
get "maxValue"(): float
get "minValue"(): float
get "type"(): $FloatProviderType<any>
}
}

declare module "packages/net/minecraft/util/$ProgressListener" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export interface $ProgressListener {
"progressStage"(component0: $Component$$Type): void
"progressStagePercentage"(int0: integer): void
"progressStart"(component0: $Component$$Type): void
"progressStartNoAbort"(component0: $Component$$Type): void
"stop"(): void
}

export namespace $ProgressListener {
const probejs$$marker: never
}
export abstract class $ProgressListener$$Static implements $ProgressListener {
}
}

declare module "packages/net/minecraft/util/$TaskChainer" {
import { $TaskChainer$DelayedTask$$Type } from "packages/net/minecraft/util/$TaskChainer$DelayedTask"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"

export interface $TaskChainer {
"append"(delayedTask0: $TaskChainer$DelayedTask$$Type): void
}

export namespace $TaskChainer {
const LOGGER: $Logger
function immediate(executor0: $Executor$$Type): $TaskChainer
}
export abstract class $TaskChainer$$Static implements $TaskChainer {
static readonly "LOGGER": $Logger

static "immediate"(executor0: $Executor$$Type): $TaskChainer
}
}

declare module "packages/net/minecraft/util/$InclusiveRange" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Record } from "packages/java/lang/$Record"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $InclusiveRange<T extends $Comparable<T>> extends $Record {
static readonly "INT": $Codec<$InclusiveRange<integer>>

constructor(t0: T, t1: T)

public static "codec"<T extends $Comparable<T>>(codec0: $Codec$$Type<T>, t1: T, t2: T): $Codec<$InclusiveRange<T>>
public static "codec"<T extends $Comparable<T>>(codec0: $Codec$$Type<T>): $Codec<$InclusiveRange<T>>
public "contains"(inclusiveRange0: $InclusiveRange$$Type<T>): boolean
public static "create"<T extends $Comparable<T>>(t0: T, t1: T): $DataResult<$InclusiveRange<T>>
public "isValueInRange"(t0: T): boolean
public "maxInclusive"(): T
public "minInclusive"(): T
}
}

declare module "packages/net/minecraft/util/$ExtraCodecs$TagOrElementLocation" {
import { $Record } from "packages/java/lang/$Record"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExtraCodecs$TagOrElementLocation extends $Record {
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean)

public "decoratedId"(): string
public "id"(): $ResourceLocation
public "tag"(): boolean
}
}

declare module "packages/net/minecraft/util/random/$Weight" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Weight {
static readonly "CODEC": $Codec<$Weight>

constructor(int0: integer)

public "asInt"(): integer
public static "of"(int0: integer): $Weight
}
}

declare module "packages/net/minecraft/util/thread/$BlockableEventLoop" {
import { $MetricSampler } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Executor } from "packages/java/util/concurrent/$Executor"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ProfilerMeasured } from "packages/net/minecraft/util/profiling/metrics/$ProfilerMeasured"
import { $List } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Exception$$Type } from "packages/java/lang/$Exception"

export class $BlockableEventLoop<R extends $Runnable> implements $ProfilerMeasured, $ProcessorHandle<R>, $Executor {
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, R>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, R>): $CompletableFuture<Source>
public "close"(): void
public "execute"(runnable0: $Runnable$$Type): void
public "executeBlocking"(runnable0: $Runnable$$Type): void
public "executeIfPossible"(runnable0: $Runnable$$Type): void
public "getPendingTasksCount"(): integer
public "isSameThread"(): boolean
public "managedBlock"(booleanSupplier0: $BooleanSupplier$$Type): void
public "name"(): string
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "pollTask"(): boolean
public "profiledMetrics"(): $List<$MetricSampler>
public "submit"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "submit"<V>(supplier0: $Supplier$$Type<V>): $CompletableFuture<V>
public "submitAsync"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "tell"(r0: R): void
get "pendingTasksCount"(): integer
get "sameThread"(): boolean
}
}

declare module "packages/net/minecraft/util/valueproviders/$IntProvider" {
import { $IntProviderType } from "packages/net/minecraft/util/valueproviders/$IntProviderType"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $IntProvider {
static readonly "CODEC": $Codec<$IntProvider>
static readonly "NON_NEGATIVE_CODEC": $Codec<$IntProvider>
static readonly "POSITIVE_CODEC": $Codec<$IntProvider>

constructor()

public static "codec"<T extends $IntProvider>(int0: integer, int1: integer, codec2: $Codec$$Type<T>): $Codec<T>
public static "codec"(int0: integer, int1: integer): $Codec<$IntProvider>
public "getMaxValue"(): integer
public "getMinValue"(): integer
public "getType"(): $IntProviderType<any>
public "sample"(randomSource0: $RandomSource$$Type): integer
get "maxValue"(): integer
get "minValue"(): integer
get "type"(): $IntProviderType<any>
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$MetricSampler$SamplerResult" {
import { $Int2DoubleMap$$Type } from "packages/it/unimi/dsi/fastutil/ints/$Int2DoubleMap"

export class $MetricSampler$SamplerResult {
constructor(int0: integer, int1: integer, int2DoubleMap2: $Int2DoubleMap$$Type)

public "getFirstTick"(): integer
public "getLastTick"(): integer
public "valueAtTick"(int0: integer): double
get "firstTick"(): integer
get "lastTick"(): integer
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$MetricSampler$ThresholdTest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MetricSampler$ThresholdTest {
"test"(double0: double): boolean
}

export namespace $MetricSampler$ThresholdTest {
const probejs$$marker: never
}
export abstract class $MetricSampler$ThresholdTest$$Static implements $MetricSampler$ThresholdTest {
}
}

declare module "packages/net/minecraft/util/$KeyDispatchDataCodec" {
import { $MapCodec$$Type } from "packages/com/mojang/serialization/$MapCodec"
import { $Record } from "packages/java/lang/$Record"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $KeyDispatchDataCodec<A> extends $Record {
constructor(codec0: $Codec$$Type<A>)

public "codec"(): $Codec<A>
public static "of"<A>(codec0: $Codec$$Type<A>): $KeyDispatchDataCodec<A>
public static "of"<A>(mapCodec0: $MapCodec$$Type<A>): $KeyDispatchDataCodec<A>
}
}

declare module "packages/net/minecraft/util/$RandomSource" {
import { $PositionalRandomFactory } from "packages/net/minecraft/world/level/levelgen/$PositionalRandomFactory"

export interface $RandomSource {
"consumeCount"(int0: integer): void
"fork"(): $RandomSource
"forkPositional"(): $PositionalRandomFactory
"nextBoolean"(): boolean
"nextDouble"(): double
"nextFloat"(): float
"nextGaussian"(): double
"nextInt"(int0: integer): integer
"nextInt"(int0: integer, int1: integer): integer
"nextInt"(): integer
"nextIntBetweenInclusive"(int0: integer, int1: integer): integer
"nextLong"(): long
"setSeed"(long0: long): void
"triangle"(double0: double, double1: double): double
set "seed"(value: long)
}

export namespace $RandomSource {
const GAUSSIAN_SPREAD_FACTOR: double
function create(long0: long): $RandomSource
function create(): $RandomSource
function createNewThreadLocalInstance(): $RandomSource
function createThreadSafe(): $RandomSource
}
export abstract class $RandomSource$$Static implements $RandomSource {
/** @deprecated */
static readonly "GAUSSIAN_SPREAD_FACTOR": double

static "create"(long0: long): $RandomSource
static "create"(): $RandomSource
static "createNewThreadLocalInstance"(): $RandomSource
/** @deprecated */
static "createThreadSafe"(): $RandomSource
}
}

declare module "packages/net/minecraft/util/$FormattedCharSink" {
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"

export interface $FormattedCharSink {
"accept"(int0: integer, style1: $Style$$Type, int2: integer): boolean
}

export namespace $FormattedCharSink {
const probejs$$marker: never
}
export abstract class $FormattedCharSink$$Static implements $FormattedCharSink {
}
}

declare module "packages/net/minecraft/util/datafix/fixes/$StructuresBecomeConfiguredFix$Conversion" {
import { $Record } from "packages/java/lang/$Record"
import { $List$$Type } from "packages/java/util/$List"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
constructor(biomeMapping: $Map$$Type<string, string>, fallback: string)

public static "biomeMapped"(map0: $Map$$Type<$List$$Type<string>, string>, string1: string): $StructuresBecomeConfiguredFix$Conversion
public "biomeMapping"(): $Map<string, string>
public "fallback"(): string
public static "trivial"(string0: string): $StructuresBecomeConfiguredFix$Conversion
}
}

declare module "packages/net/minecraft/util/$ModCheck" {
import { $Record } from "packages/java/lang/$Record"
import { $ModCheck$Confidence, $ModCheck$Confidence$$Type } from "packages/net/minecraft/util/$ModCheck$Confidence"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $ModCheck extends $Record {
constructor(confidence0: $ModCheck$Confidence$$Type, string1: string)

public "confidence"(): $ModCheck$Confidence
public "description"(): string
public "fullDescription"(): string
public static "identify"(string0: string, supplier1: $Supplier$$Type<string>, string2: string, class3: $Class$$Type<any>): $ModCheck
public "merge"(modCheck0: $ModCheck$$Type): $ModCheck
public "shouldReportAsModified"(): boolean
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$MetricSampler$MetricSamplerBuilder" {
import { $MetricSampler } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $MetricSampler$ThresholdTest$$Type } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler$ThresholdTest"
import { $MetricCategory$$Type } from "packages/net/minecraft/util/profiling/metrics/$MetricCategory"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"

export class $MetricSampler$MetricSamplerBuilder<T> {
constructor(string0: string, metricCategory1: $MetricCategory$$Type, toDoubleFunction2: $ToDoubleFunction$$Type<T>, t3: T)

public "build"(): $MetricSampler
public "withBeforeTick"(consumer0: $Consumer$$Type<T>): $MetricSampler$MetricSamplerBuilder<T>
public "withThresholdAlert"(thresholdTest0: $MetricSampler$ThresholdTest$$Type): $MetricSampler$MetricSamplerBuilder<T>
}
}

declare module "packages/net/minecraft/util/$Tuple" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Tuple<A, B> {
constructor(a0: A, b1: B)

public "getA"(): A
public "getB"(): B
public "setA"(a0: A): void
public "setB"(b0: B): void
get "a"(): A
get "b"(): B
set "a"(value: A)
set "b"(value: B)
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$MetricCategory" {
import { $Enum } from "packages/java/lang/$Enum"

export class $MetricCategory extends $Enum<$MetricCategory> {
static readonly "CHUNK_RENDERING": $MetricCategory
static readonly "CHUNK_RENDERING_DISPATCHING": $MetricCategory
static readonly "CPU": $MetricCategory
static readonly "EVENT_LOOPS": $MetricCategory
static readonly "GPU": $MetricCategory
static readonly "JVM": $MetricCategory
static readonly "MAIL_BOXES": $MetricCategory
static readonly "PATH_FINDING": $MetricCategory
static readonly "TICK_LOOP": $MetricCategory

public "getDescription"(): string
public static "valueOf"(string0: string): $MetricCategory
public static "values"(): $MetricCategory[]
get "description"(): string
}
}

declare module "packages/net/minecraft/util/valueproviders/$TrapezoidFloat" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $TrapezoidFloat extends $FloatProvider {
static readonly "CODEC": $Codec<$TrapezoidFloat>

public static "of"(float0: float, float1: float, float2: float): $TrapezoidFloat
}
}

declare module "packages/net/minecraft/util/random/$WeightedRandomList" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $WeightedEntry, $WeightedEntry$$Type } from "packages/net/minecraft/util/random/$WeightedEntry"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"

export class $WeightedRandomList<E extends $WeightedEntry> {
public static "codec"<E extends $WeightedEntry>(codec0: $Codec$$Type<E>): $Codec<$WeightedRandomList<E>>
public static "create"<E extends $WeightedEntry>(list0: $List$$Type<E>): $WeightedRandomList<E>
public static "create"<E extends $WeightedEntry>(...e0s: E[]): $WeightedRandomList<E>
public static "create"<E extends $WeightedEntry>(): $WeightedRandomList<E>
public "getRandom"(randomSource0: $RandomSource$$Type): $Optional<E>
public "isEmpty"(): boolean
public "unwrap"(): $List<E>
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/util/valueproviders/$ClampedNormalFloat" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $ClampedNormalFloat extends $FloatProvider {
static readonly "CODEC": $Codec<$ClampedNormalFloat>

public static "of"(float0: float, float1: float, float2: float, float3: float): $ClampedNormalFloat
public static "sample"(randomSource0: $RandomSource$$Type, float1: float, float2: float, float3: float, float4: float): float
}
}

declare module "packages/net/minecraft/util/profiling/metrics/$MetricSampler" {
import { $MetricSampler$SamplerResult } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler$SamplerResult"
import { $MetricSampler$MetricSamplerBuilder } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler$MetricSamplerBuilder"
import { $DoubleSupplier$$Type } from "packages/java/util/function/$DoubleSupplier"
import { $MetricCategory, $MetricCategory$$Type } from "packages/net/minecraft/util/profiling/metrics/$MetricCategory"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"

export class $MetricSampler {
public static "builder"<T>(string0: string, metricCategory1: $MetricCategory$$Type, toDoubleFunction2: $ToDoubleFunction$$Type<T>, t3: T): $MetricSampler$MetricSamplerBuilder<T>
public static "create"<T>(string0: string, metricCategory1: $MetricCategory$$Type, t2: T, toDoubleFunction3: $ToDoubleFunction$$Type<T>): $MetricSampler
public static "create"(string0: string, metricCategory1: $MetricCategory$$Type, doubleSupplier2: $DoubleSupplier$$Type): $MetricSampler
public "getCategory"(): $MetricCategory
public "getName"(): string
public "onEndTick"(int0: integer): void
public "onFinished"(): void
public "onStartTick"(): void
public "result"(): $MetricSampler$SamplerResult
public "triggersThreshold"(): boolean
get "category"(): $MetricCategory
get "name"(): string
}
}

declare module "packages/net/minecraft/util/$SignatureValidator" {
import { $PublicKey$$Type } from "packages/java/security/$PublicKey"
import { $ServicesKeyType$$Type } from "packages/com/mojang/authlib/yggdrasil/$ServicesKeyType"
import { $Logger } from "packages/org/slf4j/$Logger"
import { $ServicesKeySet$$Type } from "packages/com/mojang/authlib/yggdrasil/$ServicesKeySet"
import { $SignatureUpdater$$Type } from "packages/net/minecraft/util/$SignatureUpdater"

export interface $SignatureValidator {
"validate"(signatureUpdater0: $SignatureUpdater$$Type, byte1s: byte[]): boolean
"validate"(byte0s: byte[], byte1s: byte[]): boolean
}

export namespace $SignatureValidator {
const LOGGER: $Logger
const NO_VALIDATION: $SignatureValidator
function from(servicesKeySet0: $ServicesKeySet$$Type, servicesKeyType1: $ServicesKeyType$$Type): $SignatureValidator
function from(publicKey0: $PublicKey$$Type, string1: string): $SignatureValidator
}
export abstract class $SignatureValidator$$Static implements $SignatureValidator {
static readonly "LOGGER": $Logger
static readonly "NO_VALIDATION": $SignatureValidator

static "from"(servicesKeySet0: $ServicesKeySet$$Type, servicesKeyType1: $ServicesKeyType$$Type): $SignatureValidator
static "from"(publicKey0: $PublicKey$$Type, string1: string): $SignatureValidator
}
}

declare module "packages/net/minecraft/util/thread/$ProcessorHandle" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Exception$$Type } from "packages/java/lang/$Exception"

export interface $ProcessorHandle<Msg> extends $AutoCloseable {
"ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, Msg>): $CompletableFuture<Source>
"askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, Msg>): $CompletableFuture<Source>
"close"(): void
"name"(): string
"tell"(msg0: Msg): void
}

export namespace $ProcessorHandle {
function of<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
}
export abstract class $ProcessorHandle$$Static<Msg> implements $ProcessorHandle<Msg> {
static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
}
}

declare module "packages/net/minecraft/util/profiling/$ResultField" {
import { $Comparable } from "packages/java/lang/$Comparable"

export class $ResultField implements $Comparable<$ResultField> {
readonly "count": long
readonly "globalPercentage": double
readonly "name": string
readonly "percentage": double

constructor(string0: string, double1: double, double2: double, long3: long)

public "compareTo"(resultField0: $ResultField$$Type): integer
public "getColor"(): integer
get "color"(): integer
}
}

declare module "packages/net/minecraft/util/thread/$ReentrantBlockableEventLoop" {
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Exception$$Type } from "packages/java/lang/$Exception"
import { $BlockableEventLoop } from "packages/net/minecraft/util/thread/$BlockableEventLoop"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $ReentrantBlockableEventLoop<R extends $Runnable> extends $BlockableEventLoop<R> {
constructor(string0: string)

public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, R>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, R>): $CompletableFuture<Source>
public "close"(): void
public "doRunTask"(r0: R): void
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "scheduleExecutables"(): boolean
}
}

declare module "packages/net/minecraft/util/valueproviders/$ConstantFloat" {
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $FloatProvider } from "packages/net/minecraft/util/valueproviders/$FloatProvider"

export class $ConstantFloat extends $FloatProvider {
static readonly "CODEC": $Codec<$ConstantFloat>
static readonly "ZERO": $ConstantFloat

public "getValue"(): float
public static "of"(float0: float): $ConstantFloat
get "value"(): float
}
}

declare module "packages/net/minecraft/util/valueproviders/$BiasedToBottomInt" {
import { $IntProvider } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BiasedToBottomInt extends $IntProvider {
static readonly "CODEC": $Codec<$BiasedToBottomInt>

public static "of"(int0: integer, int1: integer): $BiasedToBottomInt
}
}

declare module "packages/net/minecraft/util/$SignatureUpdater$Output" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SignatureUpdater$Output {
"update"(byte0s: byte[]): void
}

export namespace $SignatureUpdater$Output {
const probejs$$marker: never
}
export abstract class $SignatureUpdater$Output$$Static implements $SignatureUpdater$Output {
}
}

declare module "packages/net/minecraft/util/$FrameTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FrameTimer {
static readonly "LOGGING_LENGTH": integer

constructor()

public "getAverageDuration"(int0: integer): long
public "getLog"(): long[]
public "getLogEnd"(): integer
public "getLogStart"(): integer
public "logFrameDuration"(long0: long): void
public "scaleAverageDurationTo"(int0: integer, int1: integer): integer
public "scaleSampleTo"(long0: long, int1: integer, int2: integer): integer
public "wrapIndex"(int0: integer): integer
get "log"(): long[]
get "logEnd"(): integer
get "logStart"(): integer
}
}

declare module "packages/net/minecraft/util/valueproviders/$UniformInt" {
import { $IntProvider } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $UniformInt extends $IntProvider {
static readonly "CODEC": $Codec<$UniformInt>

public static "of"(int0: integer, int1: integer): $UniformInt
}
}

declare module "packages/net/minecraft/util/datafix/$DataFixTypes" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Enum } from "packages/java/lang/$Enum"
import { $Set } from "packages/java/util/$Set"
import { $DSL$TypeReference } from "packages/com/mojang/datafixers/$DSL$TypeReference"
import { $Dynamic, $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"

export class $DataFixTypes extends $Enum<$DataFixTypes> {
static readonly "ADVANCEMENTS": $DataFixTypes
static readonly "CHUNK": $DataFixTypes
static readonly "ENTITY_CHUNK": $DataFixTypes
static readonly "HOTBAR": $DataFixTypes
static readonly "LEVEL": $DataFixTypes
static readonly "OPTIONS": $DataFixTypes
static readonly "PLAYER": $DataFixTypes
static readonly "POI_CHUNK": $DataFixTypes
static readonly "SAVED_DATA": $DataFixTypes
static readonly "STATS": $DataFixTypes
static readonly "STRUCTURE": $DataFixTypes
static readonly "TYPES_FOR_LEVEL_LIST": $Set<$DSL$TypeReference>
static readonly "WORLD_GEN_SETTINGS": $DataFixTypes

public "update"<T>(dataFixer0: $DataFixer$$Type, dynamic1: $Dynamic$$Type<T>, int2: integer, int3: integer): $Dynamic<T>
public "update"(dataFixer0: $DataFixer$$Type, compoundTag1: $CompoundTag$$Type, int2: integer, int3: integer): $CompoundTag
public "updateToCurrentVersion"<T>(dataFixer0: $DataFixer$$Type, dynamic1: $Dynamic$$Type<T>, int2: integer): $Dynamic<T>
public "updateToCurrentVersion"(dataFixer0: $DataFixer$$Type, compoundTag1: $CompoundTag$$Type, int2: integer): $CompoundTag
public static "valueOf"(string0: string): $DataFixTypes
public static "values"(): $DataFixTypes[]
}
}

declare module "packages/net/minecraft/util/random/$SimpleWeightedRandomList" {
import { $Optional } from "packages/java/util/$Optional"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $SimpleWeightedRandomList$Builder } from "packages/net/minecraft/util/random/$SimpleWeightedRandomList$Builder"
import { $WeightedRandomList } from "packages/net/minecraft/util/random/$WeightedRandomList"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $WeightedEntry$Wrapper } from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
public static "builder"<E>(): $SimpleWeightedRandomList$Builder<E>
public static "empty"<E>(): $SimpleWeightedRandomList<E>
public "getRandomValue"(randomSource0: $RandomSource$$Type): $Optional<E>
public static "single"<E>(e0: E): $SimpleWeightedRandomList<E>
public static "wrappedCodec"<E>(codec0: $Codec$$Type<E>): $Codec<$SimpleWeightedRandomList<E>>
public static "wrappedCodecAllowingEmpty"<E>(codec0: $Codec$$Type<E>): $Codec<$SimpleWeightedRandomList<E>>
}
}

declare module "packages/net/minecraft/util/$TimeSource" {
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export interface $TimeSource {
"get"(timeUnit0: $TimeUnit$$Type): long
}

export namespace $TimeSource {
const probejs$$marker: never
}
export abstract class $TimeSource$$Static implements $TimeSource {
}
}

declare module "packages/net/minecraft/util/random/$WeightedEntry" {
import { $Weight } from "packages/net/minecraft/util/random/$Weight"
import { $WeightedEntry$Wrapper } from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export interface $WeightedEntry {
"getWeight"(): $Weight
get "weight"(): $Weight
}

export namespace $WeightedEntry {
function wrap<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
export abstract class $WeightedEntry$$Static implements $WeightedEntry {
static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "packages/net/minecraft/util/thread/$ProcessorMailbox" {
import { $MetricSampler } from "packages/net/minecraft/util/profiling/metrics/$MetricSampler"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ProfilerMeasured } from "packages/net/minecraft/util/profiling/metrics/$ProfilerMeasured"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List } from "packages/java/util/$List"
import { $StrictQueue$$Type } from "packages/net/minecraft/util/thread/$StrictQueue"
import { $Exception$$Type } from "packages/java/lang/$Exception"

export class $ProcessorMailbox<T> implements $ProfilerMeasured, $ProcessorHandle<T>, $AutoCloseable, $Runnable {
constructor(strictQueue0: $StrictQueue$$Type<T, $Runnable$$Type>, executor1: $Executor$$Type, string2: string)

public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, T>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, T>): $CompletableFuture<Source>
public "close"(): void
public static "create"(executor0: $Executor$$Type, string1: string): $ProcessorMailbox<$Runnable>
public "hasWork"(): boolean
public "name"(): string
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "profiledMetrics"(): $List<$MetricSampler>
public "run"(): void
public "runAll"(): void
public "size"(): integer
public "tell"(t0: T): void
}
}

declare module "packages/net/minecraft/util/thread/$StrictQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StrictQueue<T, F> {
"isEmpty"(): boolean
"pop"(): F
"push"(t0: T): boolean
"size"(): integer
get "empty"(): boolean
}

export namespace $StrictQueue {
const probejs$$marker: never
}
export abstract class $StrictQueue$$Static<T, F> implements $StrictQueue<T, F> {
}
}

declare module "packages/net/minecraft/util/$ModCheck$Confidence" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ModCheck$Confidence extends $Enum<$ModCheck$Confidence> {
static readonly "DEFINITELY": $ModCheck$Confidence
static readonly "PROBABLY_NOT": $ModCheck$Confidence
static readonly "VERY_LIKELY": $ModCheck$Confidence

public static "valueOf"(string0: string): $ModCheck$Confidence
public static "values"(): $ModCheck$Confidence[]
}
}

declare module "packages/net/minecraft/util/$TaskChainer$DelayedTask" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"

export interface $TaskChainer$DelayedTask {
"submit"(executor0: $Executor$$Type): $CompletableFuture<any>
}

export namespace $TaskChainer$DelayedTask {
const probejs$$marker: never
}
export abstract class $TaskChainer$DelayedTask$$Static implements $TaskChainer$DelayedTask {
}
}

declare module "packages/net/minecraft/util/$LazyLoadedValue" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

/** @deprecated */
export class $LazyLoadedValue<T> {
constructor(supplier0: $Supplier$$Type<T>)

public "get"(): T
}
}

declare module "packages/net/minecraft/util/profiling/$ProfileResults" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ResultField } from "packages/net/minecraft/util/profiling/$ResultField"
import { $List } from "packages/java/util/$List"

export interface $ProfileResults {
"getEndTimeNano"(): long
"getEndTimeTicks"(): integer
"getNanoDuration"(): long
"getProfilerResults"(): string
"getStartTimeNano"(): long
"getStartTimeTicks"(): integer
"getTickDuration"(): integer
"getTimes"(string0: string): $List<$ResultField>
"saveResults"(path0: $Path$$Type): boolean
get "endTimeNano"(): long
get "endTimeTicks"(): integer
get "nanoDuration"(): long
get "profilerResults"(): string
get "startTimeNano"(): long
get "startTimeTicks"(): integer
get "tickDuration"(): integer
}

export namespace $ProfileResults {
const PATH_SEPARATOR: character
function demanglePath(string0: string): string
}
export abstract class $ProfileResults$$Static implements $ProfileResults {
static readonly "PATH_SEPARATOR": character

static "demanglePath"(string0: string): string
}
}

declare module "packages/net/minecraft/util/random/$WeightedEntry$IntrusiveBase" {
import { $Weight, $Weight$$Type } from "packages/net/minecraft/util/random/$Weight"
import { $WeightedEntry } from "packages/net/minecraft/util/random/$WeightedEntry"
import { $WeightedEntry$Wrapper } from "packages/net/minecraft/util/random/$WeightedEntry$Wrapper"

export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
readonly "weight": $Weight

constructor(int0: integer)
constructor(weight0: $Weight$$Type)

public "getWeight"(): $Weight
public static "wrap"<T>(t0: T, int1: integer): $WeightedEntry$Wrapper<T>
}
}

declare module "packages/net/minecraft/util/$StringRepresentable$EnumCodec" {
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
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $DataResult } from "packages/com/mojang/serialization/$DataResult"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "packages/com/mojang/serialization/$Decoder$Simple"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "packages/com/mojang/serialization/$Decoder$Terminal"
import { $SimpleMapCodec } from "packages/com/mojang/serialization/codecs/$SimpleMapCodec"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"

/** @deprecated */
export class $StringRepresentable$EnumCodec<E extends ($Enum<E> & $StringRepresentable)> implements $Codec<E> {
constructor(e0s: E[], function1: $Function$$Type<string, E>)

public "boxed"(): $Decoder$Boxed<E>
public "byName"(string0: string, e1: E): E
public "byName"(string0: string): E
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "comap"<B>(function0: $Function$$Type<B, E>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<E, $DataResult<S>>, function1: $Function$$Type<S, E>): $Codec<S>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Pair<E, T>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<E, T>>
public "deprecated"(int0: integer): $Codec<E>
public "dispatch"<E>(function0: $Function$$Type<E, E>, function1: $Function$$Type<E, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, E>, function2: $Function$$Type<E, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, E>, function1: $Function$$Type<E, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, E>, function2: $Function$$Type<E, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, E>, function1: $Function$$Type<E, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<T>(e0: E, dynamicOps1: $DynamicOps$$Type<T>, t2: T): $DataResult<T>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, e1: E): $DataResult<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<E>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<E>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<E, S>, function1: $Function$$Type<S, $DataResult<E>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<E, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<E, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<E>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<E>>
public "map"<B>(function0: $Function$$Type<E, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<E>): $Codec<E>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, e2: E, lifecycle3: $Lifecycle$$Type): $MapCodec<E>
public "optionalFieldOf"(string0: string, e1: E): $MapCodec<E>
public "optionalFieldOf"(string0: string, e1: E, lifecycle2: $Lifecycle$$Type): $MapCodec<E>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<E>>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, e1: E): $Codec<E>
public "orElse"(consumer0: $Consumer$$Type<string>, e1: E): $Codec<E>
public "orElse"(e0: E): $Codec<E>
public "orElseGet"(supplier0: $Supplier$$Type<E>): $Codec<E>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<E>): $Codec<E>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<E>): $Codec<E>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<E>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<E>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<E>>, function2: $Function$$Type<E, $DataResult<$Codec<E>>>): $Codec<E>
public "simple"(): $Decoder$Simple<E>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "stable"(): $Codec<E>
public "terminal"(): $Decoder$Terminal<E>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public "withLifecycle"(lifecycle0: $Lifecycle$$Type): $Codec<E>
public "xmap"<S>(function0: $Function$$Type<E, S>, function1: $Function$$Type<S, E>): $Codec<S>
}
}

