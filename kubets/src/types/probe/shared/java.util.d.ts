declare module "packages/java/util/$RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomAccess {
}

export namespace $RandomAccess {
const probejs$$marker: never
}
export abstract class $RandomAccess$$Static implements $RandomAccess {
}
}

declare module "packages/java/util/$SortedSet" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $SortedSet<E> extends $Set<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"comparator"(): $Comparator<E>
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"first"(): E
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"headSet"(e0: E): $SortedSet<E>
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"last"(): E
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"subSet"(e0: E, e1: E): $SortedSet<E>
"tailSet"(e0: E): $SortedSet<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $SortedSet {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(...e0s: E[]): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E): $Set<E>
function of<E>(): $Set<E>
function of<E>(e0: E, e1: E): $Set<E>
function of<E>(e0: E): $Set<E>
}
export abstract class $SortedSet$$Static<E> implements $SortedSet<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(...e0s: E[]): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
static "of"<E>(): $Set<E>
static "of"<E>(e0: E, e1: E): $Set<E>
static "of"<E>(e0: E): $Set<E>
}
}

declare module "packages/java/util/$Deque" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Queue } from "packages/java/util/$Queue"

export interface $Deque<E> extends $Queue<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"addFirst"(e0: E): void
"addLast"(e0: E): void
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"descendingIterator"(): $Iterator<E>
"element"(): E
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"getFirst"(): E
"getLast"(): E
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"offer"(e0: E): boolean
"offerFirst"(e0: E): boolean
"offerLast"(e0: E): boolean
"parallelStream"(): $Stream<E>
"peek"(): E
"peekFirst"(): E
"peekLast"(): E
"poll"(): E
"pollFirst"(): E
"pollLast"(): E
"pop"(): E
"push"(e0: E): void
"remove"(): E
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeFirst"(): E
"removeFirstOccurrence"(object0: any): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"removeLast"(): E
"removeLastOccurrence"(object0: any): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $Deque {
const probejs$$marker: never
}
export abstract class $Deque$$Static<E> implements $Deque<E> {
}
}

declare module "packages/java/util/stream/$LongStream$LongMapMultiConsumer" {
import { $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"

export interface $LongStream$LongMapMultiConsumer {
"accept"(long0: long, longConsumer1: $LongConsumer$$Type): void
}

export namespace $LongStream$LongMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $LongStream$LongMapMultiConsumer$$Static implements $LongStream$LongMapMultiConsumer {
}
}

declare module "packages/java/util/function/$LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToDoubleFunction {
"applyAsDouble"(long0: long): double
}

export namespace $LongToDoubleFunction {
const probejs$$marker: never
}
export abstract class $LongToDoubleFunction$$Static implements $LongToDoubleFunction {
}
}

declare module "packages/java/util/$Spliterator$OfInt" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Spliterator$OfPrimitive } from "packages/java/util/$Spliterator$OfPrimitive"
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export interface $Spliterator$OfInt extends $Spliterator$OfPrimitive<integer, $IntConsumer, $Spliterator$OfInt> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"getComparator"(): $Comparator<integer>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(intConsumer0: $IntConsumer$$Type): boolean
"tryAdvance"(consumer0: $Consumer$$Type<integer>): boolean
get "comparator"(): $Comparator<integer>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfInt {
const probejs$$marker: never
}
export abstract class $Spliterator$OfInt$$Static implements $Spliterator$OfInt {
}
}

declare module "packages/java/util/concurrent/$ScheduledFuture" {
import { $Future } from "packages/java/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Delayed, $Delayed$$Type } from "packages/java/util/concurrent/$Delayed"

export interface $ScheduledFuture<V> extends $Delayed, $Future<V> {
"cancel"(boolean0: boolean): boolean
"compareTo"(delayed0: $Delayed$$Type): integer
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getDelay"(timeUnit0: $TimeUnit$$Type): long
"isCancelled"(): boolean
"isDone"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export abstract class $ScheduledFuture$$Static<V> implements $ScheduledFuture<V> {
}
}

declare module "packages/java/util/concurrent/$ThreadFactory" {
import { $Thread } from "packages/java/lang/$Thread"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $ThreadFactory {
"newThread"(runnable0: $Runnable$$Type): $Thread
}

export namespace $ThreadFactory {
const probejs$$marker: never
}
export abstract class $ThreadFactory$$Static implements $ThreadFactory {
}
}

declare module "packages/java/util/$IdentityHashMap" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $AbstractMap } from "packages/java/util/$AbstractMap"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $IdentityHashMap<K, V> extends $AbstractMap<K, V> implements $Map<K, V>, $Serializable, $Cloneable {
constructor(int0: integer)
constructor()
constructor(map0: $Map$$Type<K, V>)

public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
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
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "values"(): $Collection<V>
}
}

declare module "packages/java/util/$Locale$Category" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Locale$Category extends $Enum<$Locale$Category> {
static readonly "DISPLAY": $Locale$Category
static readonly "FORMAT": $Locale$Category

public static "valueOf"(string0: string): $Locale$Category
public static "values"(): $Locale$Category[]
}
}

declare module "packages/java/util/$OptionalLong" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LongSupplier$$Type } from "packages/java/util/function/$LongSupplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $OptionalLong {
public static "empty"(): $OptionalLong
public "getAsLong"(): long
public "ifPresent"(longConsumer0: $LongConsumer$$Type): void
public "ifPresentOrElse"(longConsumer0: $LongConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(long0: long): $OptionalLong
public "orElse"(long0: long): long
public "orElseGet"(longSupplier0: $LongSupplier$$Type): long
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): long
public "orElseThrow"(): long
public "stream"(): $LongStream
get "asLong"(): long
get "present"(): boolean
}
}

declare module "packages/java/util/regex/$MatchResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MatchResult {
"end"(int0: integer): integer
"end"(): integer
"group"(): string
"group"(int0: integer): string
"groupCount"(): integer
"start"(int0: integer): integer
"start"(): integer
}

export namespace $MatchResult {
const probejs$$marker: never
}
export abstract class $MatchResult$$Static implements $MatchResult {
}
}

declare module "packages/java/util/$PrimitiveIterator$OfLong" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LongConsumer, $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $PrimitiveIterator } from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfLong extends $PrimitiveIterator<long, $LongConsumer> {
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"hasNext"(): boolean
"nextLong"(): long
"remove"(): void
}

export namespace $PrimitiveIterator$OfLong {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfLong$$Static implements $PrimitiveIterator$OfLong {
}
}

declare module "packages/java/util/$LongSummaryStatistics" {
import { $LongConsumer, $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export class $LongSummaryStatistics implements $LongConsumer, $IntConsumer {
constructor()
constructor(long0: long, long1: long, long2: long, long3: long)

public "accept"(int0: integer): void
public "accept"(long0: long): void
public "andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
public "andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
public "combine"(longSummaryStatistics0: $LongSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): long
public "getMin"(): long
public "getSum"(): long
get "average"(): double
get "count"(): long
get "max"(): long
get "min"(): long
get "sum"(): long
}
}

declare module "packages/java/util/$Map$Entry" {
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"

export interface $Map$Entry<K, V> {
"equals"(object0: any): boolean
"getKey"(): K
"getValue"(): V
"hashCode"(): integer
"setValue"(v0: V): V
get "key"(): K
get "value"(): V
set "value"(value: V)
}

export namespace $Map$Entry {
function comparingByKey<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
function comparingByKey<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
function comparingByValue<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
function copyOf<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
export abstract class $Map$Entry$$Static<K, V> implements $Map$Entry<K, V> {
static "comparingByKey"<K, V>(comparator0: $Comparator$$Type<K>): $Comparator<$Map$Entry<K, V>>
static "comparingByKey"<K extends $Comparable<K>, V>(): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V>(comparator0: $Comparator$$Type<V>): $Comparator<$Map$Entry<K, V>>
static "comparingByValue"<K, V extends $Comparable<V>>(): $Comparator<$Map$Entry<K, V>>
static "copyOf"<K, V>(entry0: $Map$Entry$$Type<K, V>): $Map$Entry<K, V>
}
}

declare module "packages/java/util/concurrent/locks/$Condition" {
import { $Date$$Type } from "packages/java/util/$Date"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export interface $Condition {
"await"(): void
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitNanos"(long0: long): long
"awaitUninterruptibly"(): void
"awaitUntil"(date0: $Date$$Type): boolean
"signal"(): void
"signalAll"(): void
}

export namespace $Condition {
const probejs$$marker: never
}
export abstract class $Condition$$Static implements $Condition {
}
}

declare module "packages/java/util/$Locale" {
import { $Locale$FilteringMode$$Type } from "packages/java/util/$Locale$FilteringMode"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Set } from "packages/java/util/$Set"
import { $Locale$IsoCountryCode$$Type } from "packages/java/util/$Locale$IsoCountryCode"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Locale$Category$$Type } from "packages/java/util/$Locale$Category"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Locale$LanguageRange$$Type } from "packages/java/util/$Locale$LanguageRange"

export class $Locale implements $Cloneable, $Serializable {
static readonly "CANADA": $Locale
static readonly "CANADA_FRENCH": $Locale
static readonly "CHINA": $Locale
static readonly "CHINESE": $Locale
static readonly "ENGLISH": $Locale
static readonly "FRANCE": $Locale
static readonly "FRENCH": $Locale
static readonly "GERMAN": $Locale
static readonly "GERMANY": $Locale
static readonly "ITALIAN": $Locale
static readonly "ITALY": $Locale
static readonly "JAPAN": $Locale
static readonly "JAPANESE": $Locale
static readonly "KOREA": $Locale
static readonly "KOREAN": $Locale
static readonly "PRC": $Locale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "ROOT": $Locale
static readonly "SIMPLIFIED_CHINESE": $Locale
static readonly "TAIWAN": $Locale
static readonly "TRADITIONAL_CHINESE": $Locale
static readonly "UK": $Locale
static readonly "UNICODE_LOCALE_EXTENSION": character
static readonly "US": $Locale

constructor(string0: string, string1: string)
constructor(string0: string, string1: string, string2: string)
constructor(string0: string)

public "clone"(): any
public static "filter"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>, filteringMode2: $Locale$FilteringMode$$Type): $List<$Locale>
public static "filter"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>): $List<$Locale>
public static "filterTags"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>): $List<string>
public static "filterTags"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>, filteringMode2: $Locale$FilteringMode$$Type): $List<string>
public static "forLanguageTag"(string0: string): $Locale
public static "getAvailableLocales"(): $Locale[]
public "getCountry"(): string
public static "getDefault"(): $Locale
public static "getDefault"(category0: $Locale$Category$$Type): $Locale
public "getDisplayCountry"(): string
public "getDisplayCountry"(locale0: $Locale$$Type): string
public "getDisplayLanguage"(): string
public "getDisplayLanguage"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayScript"(): string
public "getDisplayScript"(locale0: $Locale$$Type): string
public "getDisplayVariant"(): string
public "getDisplayVariant"(locale0: $Locale$$Type): string
public "getExtension"(char0: character): string
public "getExtensionKeys"(): $Set<character>
public "getISO3Country"(): string
public "getISO3Language"(): string
public static "getISOCountries"(isoCountryCode0: $Locale$IsoCountryCode$$Type): $Set<string>
public static "getISOCountries"(): string[]
public static "getISOLanguages"(): string[]
public "getLanguage"(): string
public "getScript"(): string
public "getUnicodeLocaleAttributes"(): $Set<string>
public "getUnicodeLocaleKeys"(): $Set<string>
public "getUnicodeLocaleType"(string0: string): string
public "getVariant"(): string
public "hasExtensions"(): boolean
public static "lookup"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<$Locale$$Type>): $Locale
public static "lookupTag"(list0: $List$$Type<$Locale$LanguageRange$$Type>, collection1: $Collection$$Type<string>): string
public static "setDefault"(category0: $Locale$Category$$Type, locale1: $Locale$$Type): void
public static "setDefault"(locale0: $Locale$$Type): void
public "stripExtensions"(): $Locale
public "toLanguageTag"(): string
get "country"(): string
get "displayCountry"(): string
get "displayLanguage"(): string
get "displayName"(): string
get "displayScript"(): string
get "displayVariant"(): string
get "extensionKeys"(): $Set<character>
get "iSO3Country"(): string
get "iSO3Language"(): string
get "language"(): string
get "script"(): string
get "unicodeLocaleAttributes"(): $Set<string>
get "unicodeLocaleKeys"(): $Set<string>
get "variant"(): string
}
}

declare module "packages/java/util/concurrent/locks/$ReentrantLock" {
import { $Condition, $Condition$$Type } from "packages/java/util/concurrent/locks/$Condition"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Lock } from "packages/java/util/concurrent/locks/$Lock"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export class $ReentrantLock implements $Lock, $Serializable {
constructor()
constructor(boolean0: boolean)

public "getHoldCount"(): integer
public "getQueueLength"(): integer
public "getWaitQueueLength"(condition0: $Condition$$Type): integer
public "hasQueuedThread"(thread0: $Thread$$Type): boolean
public "hasQueuedThreads"(): boolean
public "hasWaiters"(condition0: $Condition$$Type): boolean
public "isFair"(): boolean
public "isHeldByCurrentThread"(): boolean
public "isLocked"(): boolean
public "lock"(): void
public "lockInterruptibly"(): void
public "newCondition"(): $Condition
public "tryLock"(): boolean
public "tryLock"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "unlock"(): void
get "holdCount"(): integer
get "queueLength"(): integer
get "fair"(): boolean
get "heldByCurrentThread"(): boolean
get "locked"(): boolean
}
}

declare module "packages/java/util/$ArrayList" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $AbstractList } from "packages/java/util/$AbstractList"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomAccess } from "packages/java/util/$RandomAccess"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ArrayList<E> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
constructor(collection0: $Collection$$Type<E>)
constructor()
constructor(int0: integer)

public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "ensureCapacity"(int0: integer): void
public "get"(int0: integer): E
public "iterator"(): $Iterator<E>
public "listIterator"(): $ListIterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
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
public "set"(int0: integer, e1: E): E
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trimToSize"(): void
}
}

declare module "packages/java/util/$PrimitiveIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $PrimitiveIterator<T, T_CONS> extends $Iterator<T> {
"forEachRemaining"(t_cons0: T_CONS): void
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"hasNext"(): boolean
"next"(): T
"remove"(): void
}

export namespace $PrimitiveIterator {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$$Static<T, T_CONS> implements $PrimitiveIterator<T, T_CONS> {
}
}

declare module "packages/java/util/$Spliterator$OfLong" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $LongConsumer, $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $Spliterator$OfPrimitive } from "packages/java/util/$Spliterator$OfPrimitive"

export interface $Spliterator$OfLong extends $Spliterator$OfPrimitive<long, $LongConsumer, $Spliterator$OfLong> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(longConsumer0: $LongConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<long>): void
"getComparator"(): $Comparator<long>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(longConsumer0: $LongConsumer$$Type): boolean
"tryAdvance"(consumer0: $Consumer$$Type<long>): boolean
get "comparator"(): $Comparator<long>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfLong {
const probejs$$marker: never
}
export abstract class $Spliterator$OfLong$$Static implements $Spliterator$OfLong {
}
}

declare module "packages/java/util/function/$IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntConsumer {
"accept"(int0: integer): void
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
}

export namespace $IntConsumer {
const probejs$$marker: never
}
export abstract class $IntConsumer$$Static implements $IntConsumer {
}
}

declare module "packages/java/util/concurrent/$TimeUnit" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ChronoUnit, $ChronoUnit$$Type } from "packages/java/time/temporal/$ChronoUnit"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Duration$$Type } from "packages/java/time/$Duration"

export class $TimeUnit extends $Enum<$TimeUnit> {
static readonly "DAYS": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "MILLISECONDS": $TimeUnit
static readonly "MINUTES": $TimeUnit
static readonly "NANOSECONDS": $TimeUnit
static readonly "SECONDS": $TimeUnit

public "convert"(duration0: $Duration$$Type): long
public "convert"(long0: long, timeUnit1: $TimeUnit$$Type): long
public static "of"(chronoUnit0: $ChronoUnit$$Type): $TimeUnit
public "sleep"(long0: long): void
public "timedJoin"(thread0: $Thread$$Type, long1: long): void
public "timedWait"(object0: any, long1: long): void
public "toChronoUnit"(): $ChronoUnit
public "toDays"(long0: long): long
public "toHours"(long0: long): long
public "toMicros"(long0: long): long
public "toMillis"(long0: long): long
public "toMinutes"(long0: long): long
public "toNanos"(long0: long): long
public "toSeconds"(long0: long): long
public static "valueOf"(string0: string): $TimeUnit
public static "values"(): $TimeUnit[]
}
}

declare module "packages/java/util/$AbstractMap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $AbstractMap<K, V> implements $Map<K, V> {
public "clear"(): void
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
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
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "size"(): integer
public "values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}
}

declare module "packages/java/util/$AbstractList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $AbstractCollection } from "packages/java/util/$AbstractCollection"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"

export class $AbstractList<E> extends $AbstractCollection<E> implements $List<E> {
public "add"(int0: integer, e1: E): void
public "addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $ListIterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
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

declare module "packages/java/util/$TimeZone" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Date$$Type } from "packages/java/util/$Date"
import { $ZoneId, $ZoneId$$Type } from "packages/java/time/$ZoneId"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Locale$$Type } from "packages/java/util/$Locale"

export class $TimeZone implements $Serializable, $Cloneable {
static readonly "LONG": integer
static readonly "SHORT": integer

constructor()

public "clone"(): any
public static "getAvailableIDs"(): string[]
public static "getAvailableIDs"(int0: integer): string[]
public "getDSTSavings"(): integer
public static "getDefault"(): $TimeZone
public "getDisplayName"(boolean0: boolean, int1: integer): string
public "getDisplayName"(boolean0: boolean, int1: integer, locale2: $Locale$$Type): string
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public "getID"(): string
public "getOffset"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): integer
public "getOffset"(long0: long): integer
public "getRawOffset"(): integer
public static "getTimeZone"(zoneId0: $ZoneId$$Type): $TimeZone
public static "getTimeZone"(string0: string): $TimeZone
public "hasSameRules"(timeZone0: $TimeZone$$Type): boolean
public "inDaylightTime"(date0: $Date$$Type): boolean
public "observesDaylightTime"(): boolean
public static "setDefault"(timeZone0: $TimeZone$$Type): void
public "setID"(string0: string): void
public "setRawOffset"(int0: integer): void
public "toZoneId"(): $ZoneId
public "useDaylightTime"(): boolean
get "dSTSavings"(): integer
get "displayName"(): string
get "iD"(): string
get "rawOffset"(): integer
set "iD"(value: string)
set "rawOffset"(value: integer)
}
}

declare module "packages/java/util/function/$Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Predicate<T> {
"and"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"negate"(): $Predicate<T>
"or"(predicate0: $Predicate$$Type<T>): $Predicate<T>
"test"(t0: T): boolean
}

export namespace $Predicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $Predicate$$Static<T> implements $Predicate<T> {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "packages/java/util/stream/$DoubleStream$DoubleMapMultiConsumer" {
import { $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"

export interface $DoubleStream$DoubleMapMultiConsumer {
"accept"(double0: double, doubleConsumer1: $DoubleConsumer$$Type): void
}

export namespace $DoubleStream$DoubleMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $DoubleStream$DoubleMapMultiConsumer$$Static implements $DoubleStream$DoubleMapMultiConsumer {
}
}

declare module "packages/java/util/function/$Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Supplier<T> {
"get"(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
export abstract class $Supplier$$Static<T> implements $Supplier<T> {
}
}

declare module "packages/java/util/function/$IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntSupplier {
"getAsInt"(): integer
get "asInt"(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export abstract class $IntSupplier$$Static implements $IntSupplier {
}
}

declare module "packages/java/util/$Properties" {
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $Collection } from "packages/java/util/$Collection"
import { $Hashtable } from "packages/java/util/$Hashtable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $Set } from "packages/java/util/$Set"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"
import { $PrintStream$$Type } from "packages/java/io/$PrintStream"
import { $Reader$$Type } from "packages/java/io/$Reader"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $Properties extends $Hashtable<any, any> {
constructor(properties0: $Properties$$Type)
constructor(int0: integer)
constructor()

public "compute"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "computeIfAbsent"(object0: any, function1: $Function$$Type<any, any>): any
public "computeIfPresent"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "elements"(): $Enumeration<any>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<any, any>>
public "get"(object0: any): any
public "getOrDefault"(object0: any, object1: any): any
public "getProperty"(string0: string): string
public "getProperty"(string0: string, string1: string): string
public "keySet"(): $Set<any>
public "keys"(): $Enumeration<any>
public "list"(printWriter0: $PrintWriter$$Type): void
public "list"(printStream0: $PrintStream$$Type): void
public "load"(reader0: $Reader$$Type): void
public "load"(inputStream0: $InputStream$$Type): void
public "loadFromXML"(inputStream0: $InputStream$$Type): void
public "merge"(object0: any, object1: any, biFunction2: $BiFunction$$Type<any, any, any>): any
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
public "propertyNames"(): $Enumeration<any>
public "put"(object0: any, object1: any): any
public "putIfAbsent"(object0: any, object1: any): any
public "remove"(object0: any): any
public "replace"(object0: any, object1: any): any
/** @deprecated */
public "save"(outputStream0: $OutputStream$$Type, string1: string): void
public "setProperty"(string0: string, string1: string): any
public "store"(outputStream0: $OutputStream$$Type, string1: string): void
public "store"(writer0: $Writer$$Type, string1: string): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string, charset2: $Charset$$Type): void
public "storeToXML"(outputStream0: $OutputStream$$Type, string1: string, string2: string): void
public "stringPropertyNames"(): $Set<string>
public "values"(): $Collection<any>
}
}

declare module "packages/java/util/stream/$DoubleStream" {
import { $DoubleStream$Builder } from "packages/java/util/stream/$DoubleStream$Builder"
import { $ObjDoubleConsumer$$Type } from "packages/java/util/function/$ObjDoubleConsumer"
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $OptionalDouble } from "packages/java/util/$OptionalDouble"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"
import { $DoubleUnaryOperator$$Type } from "packages/java/util/function/$DoubleUnaryOperator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $DoubleFunction$$Type } from "packages/java/util/function/$DoubleFunction"
import { $DoubleStream$DoubleMapMultiConsumer$$Type } from "packages/java/util/stream/$DoubleStream$DoubleMapMultiConsumer"
import { $DoubleToIntFunction$$Type } from "packages/java/util/function/$DoubleToIntFunction"
import { $DoubleToLongFunction$$Type } from "packages/java/util/function/$DoubleToLongFunction"
import { $DoubleBinaryOperator$$Type } from "packages/java/util/function/$DoubleBinaryOperator"
import { $BaseStream } from "packages/java/util/stream/$BaseStream"
import { $DoubleSummaryStatistics } from "packages/java/util/$DoubleSummaryStatistics"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $DoubleSupplier$$Type } from "packages/java/util/function/$DoubleSupplier"
import { $DoublePredicate$$Type } from "packages/java/util/function/$DoublePredicate"

export interface $DoubleStream extends $BaseStream<double, $DoubleStream> {
"allMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"anyMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"average"(): $OptionalDouble
"boxed"(): $Stream<double>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objDoubleConsumer1: $ObjDoubleConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $DoubleStream
"dropWhile"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"filter"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"findAny"(): $OptionalDouble
"findFirst"(): $OptionalDouble
"flatMap"(doubleFunction0: $DoubleFunction$$Type<$DoubleStream>): $DoubleStream
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachOrdered"(doubleConsumer0: $DoubleConsumer$$Type): void
"isParallel"(): boolean
"limit"(long0: long): $DoubleStream
"map"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleStream
"mapMulti"(doubleMapMultiConsumer0: $DoubleStream$DoubleMapMultiConsumer$$Type): $DoubleStream
"mapToInt"(doubleToIntFunction0: $DoubleToIntFunction$$Type): $IntStream
"mapToLong"(doubleToLongFunction0: $DoubleToLongFunction$$Type): $LongStream
"mapToObj"<U>(doubleFunction0: $DoubleFunction$$Type<U>): $Stream<U>
"max"(): $OptionalDouble
"min"(): $OptionalDouble
"noneMatch"(doublePredicate0: $DoublePredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $DoubleStream
"parallel"(): $DoubleStream
"peek"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleStream
"reduce"(doubleBinaryOperator0: $DoubleBinaryOperator$$Type): $OptionalDouble
"reduce"(double0: double, doubleBinaryOperator1: $DoubleBinaryOperator$$Type): double
"sequential"(): $DoubleStream
"skip"(long0: long): $DoubleStream
"sorted"(): $DoubleStream
"sum"(): double
"summaryStatistics"(): $DoubleSummaryStatistics
"takeWhile"(doublePredicate0: $DoublePredicate$$Type): $DoubleStream
"toArray"(): double[]
"unordered"(): $DoubleStream
}

export namespace $DoubleStream {
function builder(): $DoubleStream$Builder
function concat(doubleStream0: $DoubleStream$$Type, doubleStream1: $DoubleStream$$Type): $DoubleStream
function empty(): $DoubleStream
function generate(doubleSupplier0: $DoubleSupplier$$Type): $DoubleStream
function iterate(double0: double, doubleUnaryOperator1: $DoubleUnaryOperator$$Type): $DoubleStream
function iterate(double0: double, doublePredicate1: $DoublePredicate$$Type, doubleUnaryOperator2: $DoubleUnaryOperator$$Type): $DoubleStream
function of(...double0s: double[]): $DoubleStream
function of(double0: double): $DoubleStream
}
export abstract class $DoubleStream$$Static implements $DoubleStream {
static "builder"(): $DoubleStream$Builder
static "concat"(doubleStream0: $DoubleStream$$Type, doubleStream1: $DoubleStream$$Type): $DoubleStream
static "empty"(): $DoubleStream
static "generate"(doubleSupplier0: $DoubleSupplier$$Type): $DoubleStream
static "iterate"(double0: double, doubleUnaryOperator1: $DoubleUnaryOperator$$Type): $DoubleStream
static "iterate"(double0: double, doublePredicate1: $DoublePredicate$$Type, doubleUnaryOperator2: $DoubleUnaryOperator$$Type): $DoubleStream
static "of"(...double0s: double[]): $DoubleStream
static "of"(double0: double): $DoubleStream
}
}

declare module "packages/java/util/$EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventListener {
}

export namespace $EventListener {
const probejs$$marker: never
}
export abstract class $EventListener$$Static implements $EventListener {
}
}

declare module "packages/java/util/$OptionalInt" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $OptionalInt {
public static "empty"(): $OptionalInt
public "getAsInt"(): integer
public "ifPresent"(intConsumer0: $IntConsumer$$Type): void
public "ifPresentOrElse"(intConsumer0: $IntConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(int0: integer): $OptionalInt
public "orElse"(int0: integer): integer
public "orElseGet"(intSupplier0: $IntSupplier$$Type): integer
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): integer
public "orElseThrow"(): integer
public "stream"(): $IntStream
get "asInt"(): integer
get "present"(): boolean
}
}

declare module "packages/java/util/function/$ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleFunction<T> {
"applyAsDouble"(t0: T): double
}

export namespace $ToDoubleFunction {
const probejs$$marker: never
}
export abstract class $ToDoubleFunction$$Static<T> implements $ToDoubleFunction<T> {
}
}

declare module "packages/java/util/function/$DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToIntFunction {
"applyAsInt"(double0: double): integer
}

export namespace $DoubleToIntFunction {
const probejs$$marker: never
}
export abstract class $DoubleToIntFunction$$Static implements $DoubleToIntFunction {
}
}

declare module "packages/java/util/function/$BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiPredicate<T, U> {
"and"(biPredicate0: $BiPredicate$$Type<T, U>): $BiPredicate<T, U>
"negate"(): $BiPredicate<T, U>
"or"(biPredicate0: $BiPredicate$$Type<T, U>): $BiPredicate<T, U>
"test"(t0: T, u1: U): boolean
}

export namespace $BiPredicate {
const probejs$$marker: never
}
export abstract class $BiPredicate$$Static<T, U> implements $BiPredicate<T, U> {
}
}

declare module "packages/java/util/function/$LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongUnaryOperator {
"andThen"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
"applyAsLong"(long0: long): long
"compose"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongUnaryOperator
}

export namespace $LongUnaryOperator {
function identity(): $LongUnaryOperator
}
export abstract class $LongUnaryOperator$$Static implements $LongUnaryOperator {
static "identity"(): $LongUnaryOperator
}
}

declare module "packages/java/util/function/$DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleSupplier {
"getAsDouble"(): double
get "asDouble"(): double
}

export namespace $DoubleSupplier {
const probejs$$marker: never
}
export abstract class $DoubleSupplier$$Static implements $DoubleSupplier {
}
}

declare module "packages/java/util/$Queue" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $Queue<E> extends $Collection<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"element"(): E
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"offer"(e0: E): boolean
"parallelStream"(): $Stream<E>
"peek"(): E
"poll"(): E
"remove"(): E
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Queue {
const probejs$$marker: never
}
export abstract class $Queue$$Static<E> implements $Queue<E> {
}
}

declare module "packages/java/util/concurrent/locks/$ReadWriteLock" {
import { $Lock } from "packages/java/util/concurrent/locks/$Lock"

export interface $ReadWriteLock {
"readLock"(): $Lock
"writeLock"(): $Lock
}

export namespace $ReadWriteLock {
const probejs$$marker: never
}
export abstract class $ReadWriteLock$$Static implements $ReadWriteLock {
}
}

declare module "packages/java/util/$Set" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $Set<E> extends $Collection<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Set {
function copyOf<E>(collection0: $Collection$$Type<E>): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
function of<E>(...e0s: E[]): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
function of<E>(e0: E, e1: E, e2: E): $Set<E>
function of<E>(): $Set<E>
function of<E>(e0: E, e1: E): $Set<E>
function of<E>(e0: E): $Set<E>
}
export abstract class $Set$$Static<E> implements $Set<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $Set<E>
static "of"<E>(...e0s: E[]): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $Set<E>
static "of"<E>(e0: E, e1: E, e2: E): $Set<E>
static "of"<E>(): $Set<E>
static "of"<E>(e0: E, e1: E): $Set<E>
static "of"<E>(e0: E): $Set<E>
}
}

declare module "packages/java/util/$Hashtable" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Dictionary } from "packages/java/util/$Dictionary"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $Hashtable<K, V> extends $Dictionary<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
constructor(map0: $Map$$Type<K, V>)
constructor()
constructor(int0: integer)
constructor(int0: integer, float1: float)

public "clear"(): void
public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "contains"(object0: any): boolean
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "elements"(): $Enumeration<V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
public "keys"(): $Enumeration<K>
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
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any, object1: any): boolean
public "remove"(object0: any): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replace"(k0: K, v1: V): V
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
[index: string | number]: V
}
}

declare module "packages/java/util/$Comparator" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $ToLongFunction$$Type } from "packages/java/util/function/$ToLongFunction"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"

export interface $Comparator<T> {
"compare"(t0: T, t1: T): integer
"equals"(object0: any): boolean
"reversed"(): $Comparator<T>
"thenComparing"<U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
"thenComparing"(comparator0: $Comparator$$Type<T>): $Comparator<T>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
}

export namespace $Comparator {
function comparing<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
function comparing<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
function comparingDouble<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
function comparingInt<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
function comparingLong<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
function naturalOrder<T extends $Comparable<T>>(): $Comparator<T>
function nullsFirst<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function nullsLast<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function reverseOrder<T extends $Comparable<T>>(): $Comparator<T>
}
export abstract class $Comparator$$Static<T> implements $Comparator<T> {
static "comparing"<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
static "comparing"<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
static "comparingDouble"<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
static "comparingInt"<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
static "comparingLong"<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
static "naturalOrder"<T extends $Comparable<T>>(): $Comparator<T>
static "nullsFirst"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "nullsLast"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "reverseOrder"<T extends $Comparable<T>>(): $Comparator<T>
}
}

declare module "packages/java/util/function/$IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToLongFunction {
"applyAsLong"(int0: integer): long
}

export namespace $IntToLongFunction {
const probejs$$marker: never
}
export abstract class $IntToLongFunction$$Static implements $IntToLongFunction {
}
}

declare module "packages/java/util/$Locale$IsoCountryCode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Locale$IsoCountryCode extends $Enum<$Locale$IsoCountryCode> {
static readonly "PART1_ALPHA2": $Locale$IsoCountryCode
static readonly "PART1_ALPHA3": $Locale$IsoCountryCode
static readonly "PART3": $Locale$IsoCountryCode

public static "valueOf"(string0: string): $Locale$IsoCountryCode
public static "values"(): $Locale$IsoCountryCode[]
}
}

declare module "packages/java/util/concurrent/$Future" {
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export interface $Future<V> {
"cancel"(boolean0: boolean): boolean
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"isCancelled"(): boolean
"isDone"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export abstract class $Future$$Static<V> implements $Future<V> {
}
}

declare module "packages/java/util/function/$ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongFunction<T> {
"applyAsLong"(t0: T): long
}

export namespace $ToLongFunction {
const probejs$$marker: never
}
export abstract class $ToLongFunction$$Static<T> implements $ToLongFunction<T> {
}
}

declare module "packages/java/util/$Iterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $Iterator<E> {
"forEachRemaining"(consumer0: $Consumer$$Type<E>): void
"hasNext"(): boolean
"next"(): E
"remove"(): void
}

export namespace $Iterator {
const probejs$$marker: never
}
export abstract class $Iterator$$Static<E> implements $Iterator<E> {
}
}

declare module "packages/java/util/function/$LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongBinaryOperator {
"applyAsLong"(long0: long, long1: long): long
}

export namespace $LongBinaryOperator {
const probejs$$marker: never
}
export abstract class $LongBinaryOperator$$Static implements $LongBinaryOperator {
}
}

declare module "packages/java/util/function/$LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongPredicate {
"and"(longPredicate0: $LongPredicate$$Type): $LongPredicate
"negate"(): $LongPredicate
"or"(longPredicate0: $LongPredicate$$Type): $LongPredicate
"test"(long0: long): boolean
}

export namespace $LongPredicate {
const probejs$$marker: never
}
export abstract class $LongPredicate$$Static implements $LongPredicate {
}
}

declare module "packages/java/util/stream/$Stream$Builder" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream } from "packages/java/util/stream/$Stream"

export interface $Stream$Builder<T> extends $Consumer<T> {
"accept"(t0: T): void
"add"(t0: T): $Stream$Builder<T>
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
"build"(): $Stream<T>
}

export namespace $Stream$Builder {
const probejs$$marker: never
}
export abstract class $Stream$Builder$$Static<T> implements $Stream$Builder<T> {
}
}

declare module "packages/java/util/$AbstractCollection" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $AbstractCollection<E> implements $Collection<E> {
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

declare module "packages/java/util/concurrent/$ScheduledExecutorService" {
import { $ExecutorService } from "packages/java/util/concurrent/$ExecutorService"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Future } from "packages/java/util/concurrent/$Future"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $ScheduledFuture } from "packages/java/util/concurrent/$ScheduledFuture"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $ScheduledExecutorService extends $ExecutorService {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isTerminated"(): boolean
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"shutdown"(): void
"shutdownNow"(): $List<$Runnable>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
get "terminated"(): boolean
}

export namespace $ScheduledExecutorService {
const probejs$$marker: never
}
export abstract class $ScheduledExecutorService$$Static implements $ScheduledExecutorService {
}
}

declare module "packages/java/util/function/$DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleUnaryOperator {
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"applyAsDouble"(double0: double): double
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
}

export namespace $DoubleUnaryOperator {
function identity(): $DoubleUnaryOperator
}
export abstract class $DoubleUnaryOperator$$Static implements $DoubleUnaryOperator {
static "identity"(): $DoubleUnaryOperator
}
}

declare module "packages/java/util/concurrent/$Delayed" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export interface $Delayed extends $Comparable<$Delayed> {
"compareTo"(delayed0: $Delayed$$Type): integer
"getDelay"(timeUnit0: $TimeUnit$$Type): long
}

export namespace $Delayed {
const probejs$$marker: never
}
export abstract class $Delayed$$Static implements $Delayed {
}
}

declare module "packages/java/util/$Random" {
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $Serializable } from "packages/java/io/$Serializable"
import { $RandomGenerator } from "packages/java/util/random/$RandomGenerator"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"

export class $Random implements $RandomGenerator, $Serializable {
constructor()
constructor(long0: long)

public "doubles"(long0: long): $DoubleStream
public "doubles"(long0: long, double1: double, double2: double): $DoubleStream
public "doubles"(): $DoubleStream
public "doubles"(double0: double, double1: double): $DoubleStream
public static "getDefault"(): $RandomGenerator
public "ints"(long0: long): $IntStream
public "ints"(): $IntStream
public "ints"(int0: integer, int1: integer): $IntStream
public "ints"(long0: long, int1: integer, int2: integer): $IntStream
public "isDeprecated"(): boolean
public "longs"(long0: long, long1: long, long2: long): $LongStream
public "longs"(long0: long): $LongStream
public "longs"(): $LongStream
public "longs"(long0: long, long1: long): $LongStream
public "nextBoolean"(): boolean
public "nextBytes"(byte0s: byte[]): void
public "nextDouble"(): double
public "nextDouble"(double0: double): double
public "nextDouble"(double0: double, double1: double): double
public "nextExponential"(): double
public "nextFloat"(): float
public "nextFloat"(float0: float, float1: float): float
public "nextFloat"(float0: float): float
public "nextGaussian"(): double
public "nextGaussian"(double0: double, double1: double): double
public "nextInt"(): integer
public "nextInt"(int0: integer): integer
public "nextInt"(int0: integer, int1: integer): integer
public "nextLong"(): long
public "nextLong"(long0: long): long
public "nextLong"(long0: long, long1: long): long
public static "of"(string0: string): $RandomGenerator
public "setSeed"(long0: long): void
get "deprecated"(): boolean
set "seed"(value: long)
}
}

declare module "packages/java/util/concurrent/$Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable<V> {
"call"(): V
}

export namespace $Callable {
const probejs$$marker: never
}
export abstract class $Callable$$Static<V> implements $Callable<V> {
}
}

declare module "packages/java/util/$HashMap" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $AbstractMap } from "packages/java/util/$AbstractMap"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $HashMap<K, V> extends $AbstractMap<K, V> implements $Map<K, V>, $Cloneable, $Serializable {
constructor(int0: integer)
constructor(int0: integer, float1: float)
constructor(map0: $Map$$Type<K, V>)
constructor()

public "clone"(): any
public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "equals"(object0: any): boolean
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "hashCode"(): integer
public "keySet"(): $Set<K>
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
public "values"(): $Collection<V>
}
}

declare module "packages/java/util/function/$BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanSupplier {
"getAsBoolean"(): boolean
get "asBoolean"(): boolean
}

export namespace $BooleanSupplier {
const probejs$$marker: never
}
export abstract class $BooleanSupplier$$Static implements $BooleanSupplier {
}
}

declare module "packages/java/util/$BitSet" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $LongBuffer$$Type } from "packages/java/nio/$LongBuffer"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

export class $BitSet implements $Cloneable, $Serializable {
constructor(int0: integer)
constructor()

public "and"(bitSet0: $BitSet$$Type): void
public "andNot"(bitSet0: $BitSet$$Type): void
public "cardinality"(): integer
public "clear"(): void
public "clear"(int0: integer, int1: integer): void
public "clear"(int0: integer): void
public "clone"(): any
public "flip"(int0: integer): void
public "flip"(int0: integer, int1: integer): void
public "get"(int0: integer, int1: integer): $BitSet
public "get"(int0: integer): boolean
public "intersects"(bitSet0: $BitSet$$Type): boolean
public "isEmpty"(): boolean
public "length"(): integer
public "nextClearBit"(int0: integer): integer
public "nextSetBit"(int0: integer): integer
public "or"(bitSet0: $BitSet$$Type): void
public "previousClearBit"(int0: integer): integer
public "previousSetBit"(int0: integer): integer
public "set"(int0: integer, int1: integer): void
public "set"(int0: integer, boolean1: boolean): void
public "set"(int0: integer, int1: integer, boolean2: boolean): void
public "set"(int0: integer): void
public "size"(): integer
public "stream"(): $IntStream
public "toByteArray"(): byte[]
public "toLongArray"(): long[]
public static "valueOf"(long0s: long[]): $BitSet
public static "valueOf"(byteBuffer0: $ByteBuffer$$Type): $BitSet
public static "valueOf"(longBuffer0: $LongBuffer$$Type): $BitSet
public static "valueOf"(byte0s: byte[]): $BitSet
public "xor"(bitSet0: $BitSet$$Type): void
get "empty"(): boolean
}
}

declare module "packages/java/util/$ListIterator" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $ListIterator<E> extends $Iterator<E> {
"add"(e0: E): void
"forEachRemaining"(consumer0: $Consumer$$Type<E>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"next"(): E
"nextIndex"(): integer
"previous"(): E
"previousIndex"(): integer
"remove"(): void
"set"(e0: E): void
}

export namespace $ListIterator {
const probejs$$marker: never
}
export abstract class $ListIterator$$Static<E> implements $ListIterator<E> {
}
}

declare module "packages/java/util/stream/$DoubleStream$Builder" {
import { $DoubleConsumer, $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"

export interface $DoubleStream$Builder extends $DoubleConsumer {
"accept"(double0: double): void
"add"(double0: double): $DoubleStream$Builder
"andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
"build"(): $DoubleStream
}

export namespace $DoubleStream$Builder {
const probejs$$marker: never
}
export abstract class $DoubleStream$Builder$$Static implements $DoubleStream$Builder {
}
}

declare module "packages/java/util/stream/$LongStream$Builder" {
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $LongConsumer, $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"

export interface $LongStream$Builder extends $LongConsumer {
"accept"(long0: long): void
"add"(long0: long): $LongStream$Builder
"andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
"build"(): $LongStream
}

export namespace $LongStream$Builder {
const probejs$$marker: never
}
export abstract class $LongStream$Builder$$Static implements $LongStream$Builder {
}
}

declare module "packages/java/util/$Vector" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $AbstractList } from "packages/java/util/$AbstractList"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomAccess } from "packages/java/util/$RandomAccess"
import { $Iterator } from "packages/java/util/$Iterator"

export class $Vector<E> extends $AbstractList<E> implements $List<E>, $RandomAccess, $Cloneable, $Serializable {
constructor(int0: integer, int1: integer)
constructor()
constructor(int0: integer)
constructor(collection0: $Collection$$Type<E>)

public "addElement"(e0: E): void
public "capacity"(): integer
public "clone"(): any
public "copyInto"(object0s: any[]): void
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "elementAt"(int0: integer): E
public "elements"(): $Enumeration<E>
public "ensureCapacity"(int0: integer): void
public "firstElement"(): E
public "get"(int0: integer): E
public "indexOf"(object0: any, int1: integer): integer
public "insertElementAt"(e0: E, int1: integer): void
public "iterator"(): $Iterator<E>
public "lastElement"(): E
public "lastIndexOf"(object0: any, int1: integer): integer
public "listIterator"(): $ListIterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
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
public "removeAllElements"(): void
public "removeElement"(object0: any): boolean
public "removeElementAt"(int0: integer): void
public "set"(int0: integer, e1: E): E
public "setElementAt"(e0: E, int1: integer): void
public "setSize"(int0: integer): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trimToSize"(): void
set "size"(value: integer)
}
}

declare module "packages/java/util/function/$LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToIntFunction {
"applyAsInt"(long0: long): integer
}

export namespace $LongToIntFunction {
const probejs$$marker: never
}
export abstract class $LongToIntFunction$$Static implements $LongToIntFunction {
}
}

declare module "packages/java/util/$LinkedHashMap" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $HashMap } from "packages/java/util/$HashMap"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $LinkedHashMap<K, V> extends $HashMap<K, V> implements $Map<K, V> {
constructor(int0: integer, float1: float, boolean2: boolean)
constructor()
constructor(int0: integer)
constructor(int0: integer, float1: float)
constructor(map0: $Map$$Type<K, V>)

public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "containsKey"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "equals"(object0: any): boolean
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "hashCode"(): integer
public "isEmpty"(): boolean
public "keySet"(): $Set<K>
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
public "putAll"(map0: $Map$$Type<K, V>): void
public "putIfAbsent"(k0: K, v1: V): V
public "remove"(object0: any): V
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "size"(): integer
public "values"(): $Collection<V>
get "empty"(): boolean
}
}

declare module "packages/java/util/function/$DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleBinaryOperator {
"applyAsDouble"(double0: double, double1: double): double
}

export namespace $DoubleBinaryOperator {
const probejs$$marker: never
}
export abstract class $DoubleBinaryOperator$$Static implements $DoubleBinaryOperator {
}
}

declare module "packages/java/util/function/$UnaryOperator" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"

export interface $UnaryOperator<T> extends $Function<T, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<T, V>
"apply"(t0: T): T
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, T>
}

export namespace $UnaryOperator {
function identity<T>(): $UnaryOperator<T>
}
export abstract class $UnaryOperator$$Static<T> implements $UnaryOperator<T> {
static "identity"<T>(): $UnaryOperator<T>
}
}

declare module "packages/java/util/function/$ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjLongConsumer<T> {
"accept"(t0: T, long1: long): void
}

export namespace $ObjLongConsumer {
const probejs$$marker: never
}
export abstract class $ObjLongConsumer$$Static<T> implements $ObjLongConsumer<T> {
}
}

declare module "packages/java/util/$Collection" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

export interface $Collection<E> extends $Iterable<E> {
"add"(e0: E): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Collection {
const probejs$$marker: never
}
export abstract class $Collection$$Static<E> implements $Collection<E> {
}
}

declare module "packages/java/util/$Dictionary" {
import { $Enumeration } from "packages/java/util/$Enumeration"

export class $Dictionary<K, V> {
constructor()

public "elements"(): $Enumeration<V>
public "get"(object0: any): V
public "isEmpty"(): boolean
public "keys"(): $Enumeration<K>
public "put"(k0: K, v1: V): V
public "remove"(object0: any): V
public "size"(): integer
get "empty"(): boolean
}
}

declare module "packages/java/util/function/$DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleFunction<R> {
"apply"(double0: double): R
}

export namespace $DoubleFunction {
const probejs$$marker: never
}
export abstract class $DoubleFunction$$Static<R> implements $DoubleFunction<R> {
}
}

declare module "packages/java/util/function/$Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Function<T, R> {
"andThen"<V>(function0: $Function$$Type<R, V>): $Function<T, V>
"apply"(t0: T): R
"compose"<V>(function0: $Function$$Type<V, T>): $Function<V, R>
}

export namespace $Function {
function identity<T>(): $Function<T, T>
}
export abstract class $Function$$Static<T, R> implements $Function<T, R> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/java/util/$Currency" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Set } from "packages/java/util/$Set"
import { $Locale$$Type } from "packages/java/util/$Locale"

export class $Currency implements $Serializable {
public static "getAvailableCurrencies"(): $Set<$Currency>
public "getCurrencyCode"(): string
public "getDefaultFractionDigits"(): integer
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public static "getInstance"(string0: string): $Currency
public static "getInstance"(locale0: $Locale$$Type): $Currency
public "getNumericCode"(): integer
public "getNumericCodeAsString"(): string
public "getSymbol"(): string
public "getSymbol"(locale0: $Locale$$Type): string
get "currencyCode"(): string
get "defaultFractionDigits"(): integer
get "displayName"(): string
get "numericCode"(): integer
get "numericCodeAsString"(): string
get "symbol"(): string
}
}

declare module "packages/java/util/stream/$LongStream" {
import { $ObjLongConsumer$$Type } from "packages/java/util/function/$ObjLongConsumer"
import { $LongFunction$$Type } from "packages/java/util/function/$LongFunction"
import { $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $OptionalDouble } from "packages/java/util/$OptionalDouble"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $LongBinaryOperator$$Type } from "packages/java/util/function/$LongBinaryOperator"
import { $LongStream$Builder } from "packages/java/util/stream/$LongStream$Builder"
import { $LongSummaryStatistics } from "packages/java/util/$LongSummaryStatistics"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"
import { $LongUnaryOperator$$Type } from "packages/java/util/function/$LongUnaryOperator"
import { $LongToIntFunction$$Type } from "packages/java/util/function/$LongToIntFunction"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LongToDoubleFunction$$Type } from "packages/java/util/function/$LongToDoubleFunction"
import { $LongPredicate$$Type } from "packages/java/util/function/$LongPredicate"
import { $OptionalLong } from "packages/java/util/$OptionalLong"
import { $BaseStream } from "packages/java/util/stream/$BaseStream"
import { $LongStream$LongMapMultiConsumer$$Type } from "packages/java/util/stream/$LongStream$LongMapMultiConsumer"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LongSupplier$$Type } from "packages/java/util/function/$LongSupplier"

export interface $LongStream extends $BaseStream<long, $LongStream> {
"allMatch"(longPredicate0: $LongPredicate$$Type): boolean
"anyMatch"(longPredicate0: $LongPredicate$$Type): boolean
"asDoubleStream"(): $DoubleStream
"average"(): $OptionalDouble
"boxed"(): $Stream<long>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objLongConsumer1: $ObjLongConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $LongStream
"dropWhile"(longPredicate0: $LongPredicate$$Type): $LongStream
"filter"(longPredicate0: $LongPredicate$$Type): $LongStream
"findAny"(): $OptionalLong
"findFirst"(): $OptionalLong
"flatMap"(longFunction0: $LongFunction$$Type<$LongStream>): $LongStream
"forEach"(longConsumer0: $LongConsumer$$Type): void
"forEachOrdered"(longConsumer0: $LongConsumer$$Type): void
"isParallel"(): boolean
"limit"(long0: long): $LongStream
"map"(longUnaryOperator0: $LongUnaryOperator$$Type): $LongStream
"mapMulti"(longMapMultiConsumer0: $LongStream$LongMapMultiConsumer$$Type): $LongStream
"mapToDouble"(longToDoubleFunction0: $LongToDoubleFunction$$Type): $DoubleStream
"mapToInt"(longToIntFunction0: $LongToIntFunction$$Type): $IntStream
"mapToObj"<U>(longFunction0: $LongFunction$$Type<U>): $Stream<U>
"max"(): $OptionalLong
"min"(): $OptionalLong
"noneMatch"(longPredicate0: $LongPredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $LongStream
"peek"(longConsumer0: $LongConsumer$$Type): $LongStream
"reduce"(long0: long, longBinaryOperator1: $LongBinaryOperator$$Type): long
"reduce"(longBinaryOperator0: $LongBinaryOperator$$Type): $OptionalLong
"skip"(long0: long): $LongStream
"sorted"(): $LongStream
"sum"(): long
"summaryStatistics"(): $LongSummaryStatistics
"takeWhile"(longPredicate0: $LongPredicate$$Type): $LongStream
"toArray"(): long[]
"unordered"(): $LongStream
get "parallel"(): boolean
}

export namespace $LongStream {
function builder(): $LongStream$Builder
function concat(longStream0: $LongStream$$Type, longStream1: $LongStream$$Type): $LongStream
function empty(): $LongStream
function generate(longSupplier0: $LongSupplier$$Type): $LongStream
function iterate(long0: long, longPredicate1: $LongPredicate$$Type, longUnaryOperator2: $LongUnaryOperator$$Type): $LongStream
function iterate(long0: long, longUnaryOperator1: $LongUnaryOperator$$Type): $LongStream
function of(...long0s: long[]): $LongStream
function of(long0: long): $LongStream
function range(long0: long, long1: long): $LongStream
function rangeClosed(long0: long, long1: long): $LongStream
}
export abstract class $LongStream$$Static implements $LongStream {
static "builder"(): $LongStream$Builder
static "concat"(longStream0: $LongStream$$Type, longStream1: $LongStream$$Type): $LongStream
static "empty"(): $LongStream
static "generate"(longSupplier0: $LongSupplier$$Type): $LongStream
static "iterate"(long0: long, longPredicate1: $LongPredicate$$Type, longUnaryOperator2: $LongUnaryOperator$$Type): $LongStream
static "iterate"(long0: long, longUnaryOperator1: $LongUnaryOperator$$Type): $LongStream
static "of"(...long0s: long[]): $LongStream
static "of"(long0: long): $LongStream
static "range"(long0: long, long1: long): $LongStream
static "rangeClosed"(long0: long, long1: long): $LongStream
}
}

declare module "packages/java/util/concurrent/$AbstractExecutorService" {
import { $ExecutorService } from "packages/java/util/concurrent/$ExecutorService"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Future } from "packages/java/util/concurrent/$Future"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $AbstractExecutorService implements $ExecutorService {
constructor()

public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "isShutdown"(): boolean
public "isTerminated"(): boolean
public "shutdown"(): void
public "shutdownNow"(): $List<$Runnable>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
get "terminated"(): boolean
}
}

declare module "packages/java/util/function/$IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntUnaryOperator {
"andThen"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
"applyAsInt"(int0: integer): integer
"compose"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntUnaryOperator
}

export namespace $IntUnaryOperator {
function identity(): $IntUnaryOperator
}
export abstract class $IntUnaryOperator$$Static implements $IntUnaryOperator {
static "identity"(): $IntUnaryOperator
}
}

declare module "packages/java/util/stream/$Collector$Characteristics" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Collector$Characteristics extends $Enum<$Collector$Characteristics> {
static readonly "CONCURRENT": $Collector$Characteristics
static readonly "IDENTITY_FINISH": $Collector$Characteristics
static readonly "UNORDERED": $Collector$Characteristics

public static "valueOf"(string0: string): $Collector$Characteristics
public static "values"(): $Collector$Characteristics[]
}
}

declare module "packages/java/util/$OptionalDouble" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"
import { $DoubleSupplier$$Type } from "packages/java/util/function/$DoubleSupplier"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"

export class $OptionalDouble {
public static "empty"(): $OptionalDouble
public "getAsDouble"(): double
public "ifPresent"(doubleConsumer0: $DoubleConsumer$$Type): void
public "ifPresentOrElse"(doubleConsumer0: $DoubleConsumer$$Type, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "of"(double0: double): $OptionalDouble
public "orElse"(double0: double): double
public "orElseGet"(doubleSupplier0: $DoubleSupplier$$Type): double
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): double
public "orElseThrow"(): double
public "stream"(): $DoubleStream
get "asDouble"(): double
get "present"(): boolean
}
}

declare module "packages/java/util/$Optional" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $Optional<T> {
public static "empty"<T>(): $Optional<T>
public "filter"(predicate0: $Predicate$$Type<T>): $Optional<T>
public "flatMap"<U>(function0: $Function$$Type<T, $Optional<U>>): $Optional<U>
public "get"(): T
public "ifPresent"(consumer0: $Consumer$$Type<T>): void
public "ifPresentOrElse"(consumer0: $Consumer$$Type<T>, runnable1: $Runnable$$Type): void
public "isEmpty"(): boolean
public "isPresent"(): boolean
public "map"<U>(function0: $Function$$Type<T, U>): $Optional<U>
public static "of"<T>(t0: T): $Optional<T>
public static "ofNullable"<T>(t0: T): $Optional<T>
public "or"(supplier0: $Supplier$$Type<$Optional<T>>): $Optional<T>
public "orElse"(t0: T): T
public "orElseGet"(supplier0: $Supplier$$Type<T>): T
public "orElseThrow"<X extends $Throwable>(supplier0: $Supplier$$Type<X>): T
public "orElseThrow"(): T
public "stream"(): $Stream<T>
get "present"(): boolean
}
}

declare module "packages/java/util/$List" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $List<E> extends $Collection<E> {
"add"(int0: integer, e1: E): void
"add"(e0: E): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<E>): boolean
"addAll"(collection0: $Collection$$Type<E>): boolean
"clear"(): void
"contains"(object0: any): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<E>): void
"get"(int0: integer): E
"hashCode"(): integer
"indexOf"(object0: any): integer
"isEmpty"(): boolean
"iterator"(): $Iterator<E>
"lastIndexOf"(object0: any): integer
"listIterator"(int0: integer): $ListIterator<E>
"listIterator"(): $ListIterator<E>
"parallelStream"(): $Stream<E>
"remove"(object0: any): boolean
"remove"(int0: integer): E
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(predicate0: $Predicate$$Type<E>): boolean
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"set"(int0: integer, e1: E): E
"size"(): integer
"sort"(comparator0: $Comparator$$Type<E>): void
"spliterator"(): $Spliterator<E>
"stream"(): $Stream<E>
"subList"(int0: integer, int1: integer): $List<E>
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
[Symbol.iterator](): IterableIterator<E>;
[index: number]: E
get "empty"(): boolean
}

export namespace $List {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E): $List<E>
function of<E>(e0: E, e1: E): $List<E>
function of<E>(e0: E): $List<E>
function of<E>(): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
function of<E>(...e0s: E[]): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
export abstract class $List$$Static<E> implements $List<E> {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E): $List<E>
static "of"<E>(e0: E, e1: E): $List<E>
static "of"<E>(e0: E): $List<E>
static "of"<E>(): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
static "of"<E>(...e0s: E[]): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
}

declare module "packages/java/util/function/$ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjDoubleConsumer<T> {
"accept"(t0: T, double1: double): void
}

export namespace $ObjDoubleConsumer {
const probejs$$marker: never
}
export abstract class $ObjDoubleConsumer$$Static<T> implements $ObjDoubleConsumer<T> {
}
}

declare module "packages/java/util/function/$BinaryOperator" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BiFunction } from "packages/java/util/function/$BiFunction"

export interface $BinaryOperator<T> extends $BiFunction<T, T, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $BiFunction<T, T, V>
"apply"(t0: T, t1: T): T
}

export namespace $BinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $BinaryOperator$$Static<T> implements $BinaryOperator<T> {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "packages/java/util/function/$ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjIntConsumer<T> {
"accept"(t0: T, int1: integer): void
}

export namespace $ObjIntConsumer {
const probejs$$marker: never
}
export abstract class $ObjIntConsumer$$Static<T> implements $ObjIntConsumer<T> {
}
}

declare module "packages/java/util/$Date" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $Cloneable } from "packages/java/lang/$Cloneable"

export class $Date implements $Serializable, $Cloneable, $Comparable<$Date> {
/** @deprecated */
constructor(string0: string)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer)
constructor()
constructor(long0: long)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer)

/** @deprecated */
public static "UTC"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): long
public "after"(date0: $Date$$Type): boolean
public "before"(date0: $Date$$Type): boolean
public "clone"(): any
public "compareTo"(date0: $Date$$Type): integer
public static "from"(instant0: $Instant$$Type): $Date
/** @deprecated */
public "getDate"(): integer
/** @deprecated */
public "getDay"(): integer
/** @deprecated */
public "getHours"(): integer
/** @deprecated */
public "getMinutes"(): integer
/** @deprecated */
public "getMonth"(): integer
/** @deprecated */
public "getSeconds"(): integer
public "getTime"(): long
/** @deprecated */
public "getTimezoneOffset"(): integer
/** @deprecated */
public "getYear"(): integer
/** @deprecated */
public static "parse"(string0: string): long
/** @deprecated */
public "setDate"(int0: integer): void
/** @deprecated */
public "setHours"(int0: integer): void
/** @deprecated */
public "setMinutes"(int0: integer): void
/** @deprecated */
public "setMonth"(int0: integer): void
/** @deprecated */
public "setSeconds"(int0: integer): void
public "setTime"(long0: long): void
/** @deprecated */
public "setYear"(int0: integer): void
/** @deprecated */
public "toGMTString"(): string
public "toInstant"(): $Instant
/** @deprecated */
public "toLocaleString"(): string
get "date"(): integer
get "day"(): integer
get "hours"(): integer
get "minutes"(): integer
get "month"(): integer
get "seconds"(): integer
get "time"(): long
get "timezoneOffset"(): integer
get "year"(): integer
set "date"(value: integer)
set "hours"(value: integer)
set "minutes"(value: integer)
set "month"(value: integer)
set "seconds"(value: integer)
set "time"(value: long)
set "year"(value: integer)
}
}

declare module "packages/java/util/$EnumMap" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AbstractMap } from "packages/java/util/$AbstractMap"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Set } from "packages/java/util/$Set"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $EnumMap<K extends $Enum<K>, V> extends $AbstractMap<K, V> implements $Serializable, $Cloneable {
constructor(class0: $Class$$Type<K>)
constructor(map0: $Map$$Type<K, V>)
constructor(enumMap0: $EnumMap$$Type<K, V>)

public "compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public "computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
public "computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<K, V>>
public "forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
public "get"(object0: any): V
public "getOrDefault"(object0: any, v1: V): V
public "keySet"(): $Set<K>
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
public "remove"(object0: any, object1: any): boolean
public "replace"(k0: K, v1: V): V
public "replace"(k0: K, v1: V, v2: V): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
public "values"(): $Collection<V>
}
}

declare module "packages/java/util/$LinkedHashSet" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $HashSet } from "packages/java/util/$HashSet"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $LinkedHashSet<E> extends $HashSet<E> implements $Set<E>, $Cloneable, $Serializable {
constructor(collection0: $Collection$$Type<E>)
constructor()
constructor(int0: integer)
constructor(int0: integer, float1: float)

public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clear"(): void
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
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

declare module "packages/java/util/stream/$IntStream" {
import { $ObjIntConsumer$$Type } from "packages/java/util/function/$ObjIntConsumer"
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $OptionalDouble } from "packages/java/util/$OptionalDouble"
import { $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $IntBinaryOperator$$Type } from "packages/java/util/function/$IntBinaryOperator"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $IntSummaryStatistics } from "packages/java/util/$IntSummaryStatistics"
import { $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"
import { $IntStream$IntMapMultiConsumer$$Type } from "packages/java/util/stream/$IntStream$IntMapMultiConsumer"
import { $IntStream$Builder } from "packages/java/util/stream/$IntStream$Builder"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $IntToDoubleFunction$$Type } from "packages/java/util/function/$IntToDoubleFunction"
import { $IntPredicate$$Type } from "packages/java/util/function/$IntPredicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $BaseStream } from "packages/java/util/stream/$BaseStream"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $IntToLongFunction$$Type } from "packages/java/util/function/$IntToLongFunction"
import { $OptionalInt } from "packages/java/util/$OptionalInt"

export interface $IntStream extends $BaseStream<integer, $IntStream> {
"allMatch"(intPredicate0: $IntPredicate$$Type): boolean
"anyMatch"(intPredicate0: $IntPredicate$$Type): boolean
"asDoubleStream"(): $DoubleStream
"asLongStream"(): $LongStream
"average"(): $OptionalDouble
"boxed"(): $Stream<integer>
"close"(): void
"collect"<R>(supplier0: $Supplier$$Type<R>, objIntConsumer1: $ObjIntConsumer$$Type<R>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $IntStream
"dropWhile"(intPredicate0: $IntPredicate$$Type): $IntStream
"filter"(intPredicate0: $IntPredicate$$Type): $IntStream
"findAny"(): $OptionalInt
"findFirst"(): $OptionalInt
"flatMap"(intFunction0: $IntFunction$$Type<$IntStream>): $IntStream
"forEach"(intConsumer0: $IntConsumer$$Type): void
"forEachOrdered"(intConsumer0: $IntConsumer$$Type): void
"isParallel"(): boolean
"limit"(long0: long): $IntStream
"map"(intUnaryOperator0: $IntUnaryOperator$$Type): $IntStream
"mapMulti"(intMapMultiConsumer0: $IntStream$IntMapMultiConsumer$$Type): $IntStream
"mapToDouble"(intToDoubleFunction0: $IntToDoubleFunction$$Type): $DoubleStream
"mapToLong"(intToLongFunction0: $IntToLongFunction$$Type): $LongStream
"mapToObj"<U>(intFunction0: $IntFunction$$Type<U>): $Stream<U>
"max"(): $OptionalInt
"min"(): $OptionalInt
"noneMatch"(intPredicate0: $IntPredicate$$Type): boolean
"onClose"(runnable0: $Runnable$$Type): $IntStream
"peek"(intConsumer0: $IntConsumer$$Type): $IntStream
"reduce"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
"reduce"(intBinaryOperator0: $IntBinaryOperator$$Type): $OptionalInt
"skip"(long0: long): $IntStream
"sorted"(): $IntStream
"sum"(): integer
"summaryStatistics"(): $IntSummaryStatistics
"takeWhile"(intPredicate0: $IntPredicate$$Type): $IntStream
"toArray"(): integer[]
"unordered"(): $IntStream
get "parallel"(): boolean
}

export namespace $IntStream {
function builder(): $IntStream$Builder
function concat(intStream0: $IntStream$$Type, intStream1: $IntStream$$Type): $IntStream
function empty(): $IntStream
function generate(intSupplier0: $IntSupplier$$Type): $IntStream
function iterate(int0: integer, intPredicate1: $IntPredicate$$Type, intUnaryOperator2: $IntUnaryOperator$$Type): $IntStream
function iterate(int0: integer, intUnaryOperator1: $IntUnaryOperator$$Type): $IntStream
function of(...int0s: integer[]): $IntStream
function of(int0: integer): $IntStream
function range(int0: integer, int1: integer): $IntStream
function rangeClosed(int0: integer, int1: integer): $IntStream
}
export abstract class $IntStream$$Static implements $IntStream {
static "builder"(): $IntStream$Builder
static "concat"(intStream0: $IntStream$$Type, intStream1: $IntStream$$Type): $IntStream
static "empty"(): $IntStream
static "generate"(intSupplier0: $IntSupplier$$Type): $IntStream
static "iterate"(int0: integer, intPredicate1: $IntPredicate$$Type, intUnaryOperator2: $IntUnaryOperator$$Type): $IntStream
static "iterate"(int0: integer, intUnaryOperator1: $IntUnaryOperator$$Type): $IntStream
static "of"(...int0s: integer[]): $IntStream
static "of"(int0: integer): $IntStream
static "range"(int0: integer, int1: integer): $IntStream
static "rangeClosed"(int0: integer, int1: integer): $IntStream
}
}

declare module "packages/java/util/$StringJoiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StringJoiner {
constructor(charSequence0: charseq)
constructor(charSequence0: charseq, charSequence1: charseq, charSequence2: charseq)

public "add"(charSequence0: charseq): $StringJoiner
public "length"(): integer
public "merge"(stringJoiner0: $StringJoiner$$Type): $StringJoiner
public "setEmptyValue"(charSequence0: charseq): $StringJoiner
set "emptyValue"(value: charseq)
}
}

declare module "packages/java/util/function/$IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntPredicate {
"and"(intPredicate0: $IntPredicate$$Type): $IntPredicate
"negate"(): $IntPredicate
"or"(intPredicate0: $IntPredicate$$Type): $IntPredicate
"test"(int0: integer): boolean
}

export namespace $IntPredicate {
const probejs$$marker: never
}
export abstract class $IntPredicate$$Static implements $IntPredicate {
}
}

declare module "packages/java/util/concurrent/$CompletableFuture" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $CompletionStage, $CompletionStage$$Type } from "packages/java/util/concurrent/$CompletionStage"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Future } from "packages/java/util/concurrent/$Future"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Executor, $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $CompletableFuture<T> implements $Future<T>, $CompletionStage<T> {
constructor()

public static "allOf"(...completableFuture0s: $CompletableFuture$$Type<any>[]): $CompletableFuture<void>
public static "anyOf"(...completableFuture0s: $CompletableFuture$$Type<any>[]): $CompletableFuture<any>
public "applyToEither"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletableFuture<U>
public "cancel"(boolean0: boolean): boolean
public "complete"(t0: T): boolean
public "completeAsync"(supplier0: $Supplier$$Type<T>): $CompletableFuture<T>
public "completeAsync"(supplier0: $Supplier$$Type<T>, executor1: $Executor$$Type): $CompletableFuture<T>
public "completeExceptionally"(throwable0: $Throwable$$Type): boolean
public "completeOnTimeout"(t0: T, long1: long, timeUnit2: $TimeUnit$$Type): $CompletableFuture<T>
public static "completedFuture"<U>(u0: U): $CompletableFuture<U>
public static "completedStage"<U>(u0: U): $CompletionStage<U>
public "copy"(): $CompletableFuture<T>
public "defaultExecutor"(): $Executor
public static "delayedExecutor"(long0: long, timeUnit1: $TimeUnit$$Type, executor2: $Executor$$Type): $Executor
public static "delayedExecutor"(long0: long, timeUnit1: $TimeUnit$$Type): $Executor
public "exceptionally"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletableFuture<T>
public "exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletableFuture<T>
public "exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>, executor1: $Executor$$Type): $CompletableFuture<T>
public "exceptionallyCompose"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletableFuture<T>
public static "failedFuture"<U>(throwable0: $Throwable$$Type): $CompletableFuture<U>
public static "failedStage"<U>(throwable0: $Throwable$$Type): $CompletionStage<U>
public "get"(): T
public "get"(long0: long, timeUnit1: $TimeUnit$$Type): T
public "getNow"(t0: T): T
public "getNumberOfDependents"(): integer
public "handleAsync"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>, executor1: $Executor$$Type): $CompletableFuture<U>
public "isCancelled"(): boolean
public "isCompletedExceptionally"(): boolean
public "isDone"(): boolean
public "join"(): T
public "minimalCompletionStage"(): $CompletionStage<T>
public "newIncompleteFuture"<U>(): $CompletableFuture<U>
public "obtrudeException"(throwable0: $Throwable$$Type): void
public "obtrudeValue"(t0: T): void
public "orTimeout"(long0: long, timeUnit1: $TimeUnit$$Type): $CompletableFuture<T>
public "runAfterBothAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletableFuture<void>
public "runAfterEither"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletableFuture<void>
public static "runAsync"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public static "runAsync"(runnable0: $Runnable$$Type, executor1: $Executor$$Type): $CompletableFuture<void>
public static "supplyAsync"<U>(supplier0: $Supplier$$Type<U>): $CompletableFuture<U>
public static "supplyAsync"<U>(supplier0: $Supplier$$Type<U>, executor1: $Executor$$Type): $CompletableFuture<U>
public "thenAccept"(consumer0: $Consumer$$Type<T>): $CompletableFuture<void>
public "thenAcceptBoth"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>): $CompletableFuture<void>
public "thenAcceptBothAsync"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>, executor2: $Executor$$Type): $CompletableFuture<void>
public "thenCombine"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletableFuture<V>
public "thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletableFuture<V>
public "thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>, executor2: $Executor$$Type): $CompletableFuture<V>
public "thenCompose"<U>(function0: $Function$$Type<T, $CompletionStage<U>>): $CompletableFuture<U>
public "thenComposeAsync"<U>(function0: $Function$$Type<T, $CompletionStage<U>>, executor1: $Executor$$Type): $CompletableFuture<U>
public "thenRunAsync"(runnable0: $Runnable$$Type, executor1: $Executor$$Type): $CompletableFuture<void>
public "thenRunAsync"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "toCompletableFuture"(): $CompletableFuture<T>
public "whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>, executor1: $Executor$$Type): $CompletableFuture<T>
public "whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletableFuture<T>
get "numberOfDependents"(): integer
get "cancelled"(): boolean
get "completedExceptionally"(): boolean
get "done"(): boolean
}
}

declare module "packages/java/util/$IntSummaryStatistics" {
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export class $IntSummaryStatistics implements $IntConsumer {
constructor()
constructor(long0: long, int1: integer, int2: integer, long3: long)

public "accept"(int0: integer): void
public "andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
public "combine"(intSummaryStatistics0: $IntSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): integer
public "getMin"(): integer
public "getSum"(): long
get "average"(): double
get "count"(): long
get "max"(): integer
get "min"(): integer
get "sum"(): long
}
}

declare module "packages/java/util/concurrent/atomic/$AtomicReference" {
import { $BinaryOperator$$Type } from "packages/java/util/function/$BinaryOperator"
import { $Serializable } from "packages/java/io/$Serializable"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"

export class $AtomicReference<V> implements $Serializable {
constructor(v0: V)
constructor()

public "accumulateAndGet"(v0: V, binaryOperator1: $BinaryOperator$$Type<V>): V
public "compareAndExchange"(v0: V, v1: V): V
public "compareAndExchangeAcquire"(v0: V, v1: V): V
public "compareAndExchangeRelease"(v0: V, v1: V): V
public "compareAndSet"(v0: V, v1: V): boolean
public "get"(): V
public "getAcquire"(): V
public "getAndAccumulate"(v0: V, binaryOperator1: $BinaryOperator$$Type<V>): V
public "getAndSet"(v0: V): V
public "getAndUpdate"(unaryOperator0: $UnaryOperator$$Type<V>): V
public "getOpaque"(): V
public "getPlain"(): V
public "lazySet"(v0: V): void
public "set"(v0: V): void
public "setOpaque"(v0: V): void
public "setPlain"(v0: V): void
public "setRelease"(v0: V): void
public "updateAndGet"(unaryOperator0: $UnaryOperator$$Type<V>): V
/** @deprecated */
public "weakCompareAndSet"(v0: V, v1: V): boolean
public "weakCompareAndSetAcquire"(v0: V, v1: V): boolean
public "weakCompareAndSetPlain"(v0: V, v1: V): boolean
public "weakCompareAndSetRelease"(v0: V, v1: V): boolean
public "weakCompareAndSetVolatile"(v0: V, v1: V): boolean
get "acquire"(): V
get "opaque"(): V
get "plain"(): V
set "opaque"(value: V)
set "plain"(value: V)
set "release"(value: V)
}
}

declare module "packages/java/util/function/$IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToDoubleFunction {
"applyAsDouble"(int0: integer): double
}

export namespace $IntToDoubleFunction {
const probejs$$marker: never
}
export abstract class $IntToDoubleFunction$$Static implements $IntToDoubleFunction {
}
}

declare module "packages/java/util/function/$BiFunction" {
import { $Function$$Type } from "packages/java/util/function/$Function"

export interface $BiFunction<T, U, R> {
"andThen"<V>(function0: $Function$$Type<R, V>): $BiFunction<T, U, V>
"apply"(t0: T, u1: U): R
}

export namespace $BiFunction {
const probejs$$marker: never
}
export abstract class $BiFunction$$Static<T, U, R> implements $BiFunction<T, U, R> {
}
}

declare module "packages/java/util/function/$IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryOperator {
"applyAsInt"(int0: integer, int1: integer): integer
}

export namespace $IntBinaryOperator {
const probejs$$marker: never
}
export abstract class $IntBinaryOperator$$Static implements $IntBinaryOperator {
}
}

declare module "packages/java/util/$PrimitiveIterator$OfInt" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $PrimitiveIterator } from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfInt extends $PrimitiveIterator<integer, $IntConsumer> {
"forEachRemaining"(intConsumer0: $IntConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<integer>): void
"hasNext"(): boolean
"nextInt"(): integer
"remove"(): void
}

export namespace $PrimitiveIterator$OfInt {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfInt$$Static implements $PrimitiveIterator$OfInt {
}
}

declare module "packages/java/util/$SortedMap" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $SortedMap<K, V> extends $Map<K, V> {
"clear"(): void
"comparator"(): $Comparator<K>
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"firstKey"(): K
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"headMap"(k0: K): $SortedMap<K, V>
"isEmpty"(): boolean
"keySet"(): $Set<K>
"lastKey"(): K
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
"subMap"(k0: K, k1: K): $SortedMap<K, V>
"tailMap"(k0: K): $SortedMap<K, V>
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $SortedMap {
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
export abstract class $SortedMap$$Static<K, V> implements $SortedMap<K, V> {
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

declare module "packages/java/util/concurrent/locks/$Lock" {
import { $Condition } from "packages/java/util/concurrent/locks/$Condition"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

export interface $Lock {
"lock"(): void
"lockInterruptibly"(): void
"newCondition"(): $Condition
"tryLock"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"tryLock"(): boolean
"unlock"(): void
}

export namespace $Lock {
const probejs$$marker: never
}
export abstract class $Lock$$Static implements $Lock {
}
}

declare module "packages/java/util/$Locale$LanguageRange" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Map$$Type } from "packages/java/util/$Map"

export class $Locale$LanguageRange {
static readonly "MAX_WEIGHT": double
static readonly "MIN_WEIGHT": double

constructor(string0: string, double1: double)
constructor(string0: string)

public "getRange"(): string
public "getWeight"(): double
public static "mapEquivalents"(list0: $List$$Type<$Locale$LanguageRange$$Type>, map1: $Map$$Type<string, $List$$Type<string>>): $List<$Locale$LanguageRange>
public static "parse"(string0: string): $List<$Locale$LanguageRange>
public static "parse"(string0: string, map1: $Map$$Type<string, $List$$Type<string>>): $List<$Locale$LanguageRange>
get "range"(): string
get "weight"(): double
}
}

declare module "packages/java/util/$UUID" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"

export class $UUID implements $Serializable, $Comparable<$UUID> {
constructor(long0: long, long1: long)

public "clockSequence"(): integer
public "compareTo"(uUID0: $UUID$$Type): integer
public static "fromString"(string0: string): $UUID
public "getLeastSignificantBits"(): long
public "getMostSignificantBits"(): long
public static "nameUUIDFromBytes"(byte0s: byte[]): $UUID
public "node"(): long
public static "randomUUID"(): $UUID
public "timestamp"(): long
public "variant"(): integer
public "version"(): integer
get "leastSignificantBits"(): long
get "mostSignificantBits"(): long
}
}

declare module "packages/java/util/function/$BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiConsumer<T, U> {
"accept"(t0: T, u1: U): void
"andThen"(biConsumer0: $BiConsumer$$Type<T, U>): $BiConsumer<T, U>
}

export namespace $BiConsumer {
const probejs$$marker: never
}
export abstract class $BiConsumer$$Static<T, U> implements $BiConsumer<T, U> {
}
}

declare module "packages/java/util/$AbstractSequentialList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $AbstractList } from "packages/java/util/$AbstractList"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"

export class $AbstractSequentialList<E> extends $AbstractList<E> {
public "addAll"(collection0: $Collection$$Type<E>): boolean
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public "listIterator"(int0: integer): $ListIterator<E>
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
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "empty"(): boolean
}
}

declare module "packages/java/util/$Spliterator$OfDouble" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Spliterator$OfPrimitive } from "packages/java/util/$Spliterator$OfPrimitive"
import { $DoubleConsumer, $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"

export interface $Spliterator$OfDouble extends $Spliterator$OfPrimitive<double, $DoubleConsumer, $Spliterator$OfDouble> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"getComparator"(): $Comparator<double>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(doubleConsumer0: $DoubleConsumer$$Type): boolean
"tryAdvance"(consumer0: $Consumer$$Type<double>): boolean
get "comparator"(): $Comparator<double>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfDouble {
const probejs$$marker: never
}
export abstract class $Spliterator$OfDouble$$Static implements $Spliterator$OfDouble {
}
}

declare module "packages/java/util/function/$LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongConsumer {
"accept"(long0: long): void
"andThen"(longConsumer0: $LongConsumer$$Type): $LongConsumer
}

export namespace $LongConsumer {
const probejs$$marker: never
}
export abstract class $LongConsumer$$Static implements $LongConsumer {
}
}

declare module "packages/java/util/function/$ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntFunction<T> {
"applyAsInt"(t0: T): integer
}

export namespace $ToIntFunction {
const probejs$$marker: never
}
export abstract class $ToIntFunction$$Static<T> implements $ToIntFunction<T> {
}
}

declare module "packages/java/util/stream/$IntStream$IntMapMultiConsumer" {
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export interface $IntStream$IntMapMultiConsumer {
"accept"(int0: integer, intConsumer1: $IntConsumer$$Type): void
}

export namespace $IntStream$IntMapMultiConsumer {
const probejs$$marker: never
}
export abstract class $IntStream$IntMapMultiConsumer$$Static implements $IntStream$IntMapMultiConsumer {
}
}

declare module "packages/java/util/$AbstractSet" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $AbstractCollection } from "packages/java/util/$AbstractCollection"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $AbstractSet<E> extends $AbstractCollection<E> implements $Set<E> {
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

declare module "packages/java/util/function/$Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Consumer<T> {
"accept"(t0: T): void
"andThen"(consumer0: $Consumer$$Type<T>): $Consumer<T>
}

export namespace $Consumer {
const probejs$$marker: never
}
export abstract class $Consumer$$Static<T> implements $Consumer<T> {
}
}

declare module "packages/java/util/function/$LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongFunction<R> {
"apply"(long0: long): R
}

export namespace $LongFunction {
const probejs$$marker: never
}
export abstract class $LongFunction$$Static<R> implements $LongFunction<R> {
}
}

declare module "packages/java/util/$Spliterator" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export interface $Spliterator<T> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"getComparator"(): $Comparator<T>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(consumer0: $Consumer$$Type<T>): boolean
"trySplit"(): $Spliterator<T>
get "comparator"(): $Comparator<T>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator {
const CONCURRENT: integer
const DISTINCT: integer
const IMMUTABLE: integer
const NONNULL: integer
const ORDERED: integer
const SIZED: integer
const SORTED: integer
const SUBSIZED: integer
}
export abstract class $Spliterator$$Static<T> implements $Spliterator<T> {
static readonly "CONCURRENT": integer
static readonly "DISTINCT": integer
static readonly "IMMUTABLE": integer
static readonly "NONNULL": integer
static readonly "ORDERED": integer
static readonly "SIZED": integer
static readonly "SORTED": integer
static readonly "SUBSIZED": integer

}
}

declare module "packages/java/util/concurrent/$Executor" {
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $Executor {
"execute"(runnable0: $Runnable$$Type): void
}

export namespace $Executor {
const probejs$$marker: never
}
export abstract class $Executor$$Static implements $Executor {
}
}

declare module "packages/java/util/concurrent/$CompletionStage" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $CompletionStage<T> {
"acceptEither"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>): $CompletionStage<void>
"acceptEitherAsync"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>): $CompletionStage<void>
"acceptEitherAsync"(completionStage0: $CompletionStage$$Type<T>, consumer1: $Consumer$$Type<T>, executor2: $Executor$$Type): $CompletionStage<void>
"applyToEither"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletionStage<U>
"applyToEitherAsync"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>, executor2: $Executor$$Type): $CompletionStage<U>
"applyToEitherAsync"<U>(completionStage0: $CompletionStage$$Type<T>, function1: $Function$$Type<T, U>): $CompletionStage<U>
"exceptionally"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletionStage<T>
"exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>, executor1: $Executor$$Type): $CompletionStage<T>
"exceptionallyAsync"(function0: $Function$$Type<$Throwable$$Type, T>): $CompletionStage<T>
"exceptionallyCompose"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletionStage<T>
"exceptionallyComposeAsync"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>, executor1: $Executor$$Type): $CompletionStage<T>
"exceptionallyComposeAsync"(function0: $Function$$Type<$Throwable$$Type, $CompletionStage<T>>): $CompletionStage<T>
"handle"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>): $CompletionStage<U>
"handleAsync"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>): $CompletionStage<U>
"handleAsync"<U>(biFunction0: $BiFunction$$Type<T, $Throwable$$Type, U>, executor1: $Executor$$Type): $CompletionStage<U>
"runAfterBoth"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterBothAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterBothAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type, executor2: $Executor$$Type): $CompletionStage<void>
"runAfterEither"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterEitherAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type): $CompletionStage<void>
"runAfterEitherAsync"(completionStage0: $CompletionStage$$Type<any>, runnable1: $Runnable$$Type, executor2: $Executor$$Type): $CompletionStage<void>
"thenAccept"(consumer0: $Consumer$$Type<T>): $CompletionStage<void>
"thenAcceptAsync"(consumer0: $Consumer$$Type<T>): $CompletionStage<void>
"thenAcceptAsync"(consumer0: $Consumer$$Type<T>, executor1: $Executor$$Type): $CompletionStage<void>
"thenAcceptBoth"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>): $CompletionStage<void>
"thenAcceptBothAsync"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>, executor2: $Executor$$Type): $CompletionStage<void>
"thenAcceptBothAsync"<U>(completionStage0: $CompletionStage$$Type<U>, biConsumer1: $BiConsumer$$Type<T, U>): $CompletionStage<void>
"thenApply"<U>(function0: $Function$$Type<T, U>): $CompletionStage<U>
"thenApplyAsync"<U>(function0: $Function$$Type<T, U>, executor1: $Executor$$Type): $CompletionStage<U>
"thenApplyAsync"<U>(function0: $Function$$Type<T, U>): $CompletionStage<U>
"thenCombine"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletionStage<V>
"thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>): $CompletionStage<V>
"thenCombineAsync"<U, V>(completionStage0: $CompletionStage$$Type<U>, biFunction1: $BiFunction$$Type<T, U, V>, executor2: $Executor$$Type): $CompletionStage<V>
"thenCompose"<U>(function0: $Function$$Type<T, $CompletionStage<U>>): $CompletionStage<U>
"thenComposeAsync"<U>(function0: $Function$$Type<T, $CompletionStage<U>>): $CompletionStage<U>
"thenComposeAsync"<U>(function0: $Function$$Type<T, $CompletionStage<U>>, executor1: $Executor$$Type): $CompletionStage<U>
"thenRun"(runnable0: $Runnable$$Type): $CompletionStage<void>
"thenRunAsync"(runnable0: $Runnable$$Type, executor1: $Executor$$Type): $CompletionStage<void>
"thenRunAsync"(runnable0: $Runnable$$Type): $CompletionStage<void>
"toCompletableFuture"(): $CompletableFuture<T>
"whenComplete"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletionStage<T>
"whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>, executor1: $Executor$$Type): $CompletionStage<T>
"whenCompleteAsync"(biConsumer0: $BiConsumer$$Type<T, $Throwable$$Type>): $CompletionStage<T>
}

export namespace $CompletionStage {
const probejs$$marker: never
}
export abstract class $CompletionStage$$Static<T> implements $CompletionStage<T> {
}
}

declare module "packages/java/util/$PrimitiveIterator$OfDouble" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $DoubleConsumer, $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"
import { $PrimitiveIterator } from "packages/java/util/$PrimitiveIterator"

export interface $PrimitiveIterator$OfDouble extends $PrimitiveIterator<double, $DoubleConsumer> {
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(consumer0: $Consumer$$Type<double>): void
"hasNext"(): boolean
"nextDouble"(): double
"remove"(): void
}

export namespace $PrimitiveIterator$OfDouble {
const probejs$$marker: never
}
export abstract class $PrimitiveIterator$OfDouble$$Static implements $PrimitiveIterator$OfDouble {
}
}

declare module "packages/java/util/random/$RandomGenerator" {
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"

export interface $RandomGenerator {
"doubles"(): $DoubleStream
"doubles"(double0: double, double1: double): $DoubleStream
"doubles"(long0: long): $DoubleStream
"doubles"(long0: long, double1: double, double2: double): $DoubleStream
"ints"(long0: long): $IntStream
"ints"(long0: long, int1: integer, int2: integer): $IntStream
"ints"(): $IntStream
"ints"(int0: integer, int1: integer): $IntStream
"isDeprecated"(): boolean
"longs"(): $LongStream
"longs"(long0: long, long1: long, long2: long): $LongStream
"longs"(long0: long, long1: long): $LongStream
"longs"(long0: long): $LongStream
"nextBoolean"(): boolean
"nextBytes"(byte0s: byte[]): void
"nextDouble"(double0: double): double
"nextDouble"(double0: double, double1: double): double
"nextDouble"(): double
"nextExponential"(): double
"nextFloat"(): float
"nextFloat"(float0: float, float1: float): float
"nextFloat"(float0: float): float
"nextGaussian"(double0: double, double1: double): double
"nextGaussian"(): double
"nextInt"(int0: integer, int1: integer): integer
"nextInt"(int0: integer): integer
"nextInt"(): integer
"nextLong"(): long
"nextLong"(long0: long): long
"nextLong"(long0: long, long1: long): long
get "deprecated"(): boolean
}

export namespace $RandomGenerator {
function getDefault(): $RandomGenerator
function of(string0: string): $RandomGenerator
}
export abstract class $RandomGenerator$$Static implements $RandomGenerator {
static "getDefault"(): $RandomGenerator
static "of"(string0: string): $RandomGenerator
}
}

declare module "packages/java/util/stream/$IntStream$Builder" {
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $IntConsumer, $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export interface $IntStream$Builder extends $IntConsumer {
"accept"(int0: integer): void
"add"(int0: integer): $IntStream$Builder
"andThen"(intConsumer0: $IntConsumer$$Type): $IntConsumer
"build"(): $IntStream
}

export namespace $IntStream$Builder {
const probejs$$marker: never
}
export abstract class $IntStream$Builder$$Static implements $IntStream$Builder {
}
}

declare module "packages/java/util/$Stack" {
import { $Vector } from "packages/java/util/$Vector"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $Stack<E> extends $Vector<E> {
constructor()

public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "empty"(): boolean
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
public "peek"(): E
public "pop"(): E
public "push"(e0: E): E
public "search"(object0: any): integer
public "stream"(): $Stream<E>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "packages/java/util/concurrent/$ConcurrentMap" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $ConcurrentMap<K, V> extends $Map<K, V> {
"clear"(): void
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
"isEmpty"(): boolean
"keySet"(): $Set<K>
"merge"(k0: K, v1: V, biFunction2: $BiFunction$$Type<V, V, V>): V
"put"(k0: K, v1: V): V
"putAll"(map0: $Map$$Type<K, V>): void
"putIfAbsent"(k0: K, v1: V): V
"remove"(object0: any, object1: any): boolean
"remove"(object0: any): V
"replace"(k0: K, v1: V, v2: V): boolean
"replace"(k0: K, v1: V): V
"replaceAll"(biFunction0: $BiFunction$$Type<K, V, V>): void
"size"(): integer
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $ConcurrentMap {
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
export abstract class $ConcurrentMap$$Static<K, V> implements $ConcurrentMap<K, V> {
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

declare module "packages/java/util/$Enumeration" {
import { $Iterator } from "packages/java/util/$Iterator"

export interface $Enumeration<E> {
"asIterator"(): $Iterator<E>
"hasMoreElements"(): boolean
"nextElement"(): E
}

export namespace $Enumeration {
const probejs$$marker: never
}
export abstract class $Enumeration$$Static<E> implements $Enumeration<E> {
}
}

declare module "packages/java/util/$EnumSet" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AbstractSet } from "packages/java/util/$AbstractSet"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Set } from "packages/java/util/$Set"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"

export class $EnumSet<E extends $Enum<E>> extends $AbstractSet<E> implements $Cloneable, $Serializable {
public "add"(e0: E): boolean
public "addAll"(collection0: $Collection$$Type<E>): boolean
public static "allOf"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public "clear"(): void
public "clone"(): $EnumSet<E>
public static "complementOf"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>): $EnumSet<E>
public "contains"(object0: any): boolean
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E extends $Enum<E>>(collection0: $Collection$$Type<E>): $EnumSet<E>
public static "copyOf"<E extends $Enum<E>>(enumSet0: $EnumSet$$Type<E>): $EnumSet<E>
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
public static "noneOf"<E extends $Enum<E>>(class0: $Class$$Type<E>): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E, e3: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, ...e1s: E[]): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E): $EnumSet<E>
public static "of"<E extends $Enum<E>>(e0: E, e1: E, e2: E, e3: E, e4: E): $EnumSet<E>
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
public static "range"<E extends $Enum<E>>(e0: E, e1: E): $EnumSet<E>
public "remove"(object0: any): boolean
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

declare module "packages/java/util/concurrent/atomic/$AtomicInteger" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $IntBinaryOperator$$Type } from "packages/java/util/function/$IntBinaryOperator"
import { $Number } from "packages/java/lang/$Number"
import { $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"

export class $AtomicInteger extends $Number implements $Serializable {
constructor(int0: integer)
constructor()

public "accumulateAndGet"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
public "addAndGet"(int0: integer): integer
public "compareAndExchange"(int0: integer, int1: integer): integer
public "compareAndExchangeAcquire"(int0: integer, int1: integer): integer
public "compareAndExchangeRelease"(int0: integer, int1: integer): integer
public "compareAndSet"(int0: integer, int1: integer): boolean
public "decrementAndGet"(): integer
public "get"(): integer
public "getAcquire"(): integer
public "getAndAccumulate"(int0: integer, intBinaryOperator1: $IntBinaryOperator$$Type): integer
public "getAndAdd"(int0: integer): integer
public "getAndDecrement"(): integer
public "getAndIncrement"(): integer
public "getAndSet"(int0: integer): integer
public "getAndUpdate"(intUnaryOperator0: $IntUnaryOperator$$Type): integer
public "getOpaque"(): integer
public "getPlain"(): integer
public "incrementAndGet"(): integer
public "lazySet"(int0: integer): void
public "set"(int0: integer): void
public "setOpaque"(int0: integer): void
public "setPlain"(int0: integer): void
public "setRelease"(int0: integer): void
public "updateAndGet"(intUnaryOperator0: $IntUnaryOperator$$Type): integer
/** @deprecated */
public "weakCompareAndSet"(int0: integer, int1: integer): boolean
public "weakCompareAndSetAcquire"(int0: integer, int1: integer): boolean
public "weakCompareAndSetPlain"(int0: integer, int1: integer): boolean
public "weakCompareAndSetRelease"(int0: integer, int1: integer): boolean
public "weakCompareAndSetVolatile"(int0: integer, int1: integer): boolean
get "acquire"(): integer
get "andDecrement"(): integer
get "andIncrement"(): integer
get "opaque"(): integer
get "plain"(): integer
set "opaque"(value: integer)
set "plain"(value: integer)
set "release"(value: integer)
}
}

declare module "packages/java/util/function/$DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleConsumer {
"accept"(double0: double): void
"andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
}

export namespace $DoubleConsumer {
const probejs$$marker: never
}
export abstract class $DoubleConsumer$$Static implements $DoubleConsumer {
}
}

declare module "packages/java/util/concurrent/$ExecutorService" {
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Future } from "packages/java/util/concurrent/$Future"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Executor } from "packages/java/util/concurrent/$Executor"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $ExecutorService extends $Executor {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isTerminated"(): boolean
"shutdown"(): void
"shutdownNow"(): $List<$Runnable>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
get "terminated"(): boolean
}

export namespace $ExecutorService {
const probejs$$marker: never
}
export abstract class $ExecutorService$$Static implements $ExecutorService {
}
}

declare module "packages/java/util/$Spliterator$OfPrimitive" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Spliterator } from "packages/java/util/$Spliterator"

export interface $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> extends $Spliterator<T> {
"characteristics"(): integer
"estimateSize"(): long
"forEachRemaining"(t_cons0: T_CONS): void
"forEachRemaining"(consumer0: $Consumer$$Type<T>): void
"getComparator"(): $Comparator<T>
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"tryAdvance"(t_cons0: T_CONS): boolean
"tryAdvance"(consumer0: $Consumer$$Type<T>): boolean
get "comparator"(): $Comparator<T>
get "exactSizeIfKnown"(): long
}

export namespace $Spliterator$OfPrimitive {
const probejs$$marker: never
}
export abstract class $Spliterator$OfPrimitive$$Static<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> implements $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR> {
}
}

declare module "packages/java/util/function/$DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToLongFunction {
"applyAsLong"(double0: double): long
}

export namespace $DoubleToLongFunction {
const probejs$$marker: never
}
export abstract class $DoubleToLongFunction$$Static implements $DoubleToLongFunction {
}
}

declare module "packages/java/util/regex/$Matcher" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Pattern, $Pattern$$Type } from "packages/java/util/regex/$Pattern"
import { $StringBuffer, $StringBuffer$$Type } from "packages/java/lang/$StringBuffer"
import { $StringBuilder, $StringBuilder$$Type } from "packages/java/lang/$StringBuilder"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $MatchResult, $MatchResult$$Type } from "packages/java/util/regex/$MatchResult"

export class $Matcher implements $MatchResult {
public "appendReplacement"(stringBuffer0: $StringBuffer$$Type, string1: string): $Matcher
public "appendReplacement"(stringBuilder0: $StringBuilder$$Type, string1: string): $Matcher
public "appendTail"(stringBuffer0: $StringBuffer$$Type): $StringBuffer
public "appendTail"(stringBuilder0: $StringBuilder$$Type): $StringBuilder
public "end"(int0: integer): integer
public "end"(): integer
public "end"(string0: string): integer
public "find"(int0: integer): boolean
public "find"(): boolean
public "group"(int0: integer): string
public "group"(string0: string): string
public "group"(): string
public "groupCount"(): integer
public "hasAnchoringBounds"(): boolean
public "hasTransparentBounds"(): boolean
public "hitEnd"(): boolean
public "lookingAt"(): boolean
public "matches"(): boolean
public "pattern"(): $Pattern
public static "quoteReplacement"(string0: string): string
public "region"(int0: integer, int1: integer): $Matcher
public "regionEnd"(): integer
public "regionStart"(): integer
public "replaceAll"(string0: string): string
public "replaceAll"(function0: $Function$$Type<$MatchResult$$Type, string>): string
public "replaceFirst"(function0: $Function$$Type<$MatchResult$$Type, string>): string
public "replaceFirst"(string0: string): string
public "requireEnd"(): boolean
public "reset"(): $Matcher
public "reset"(charSequence0: charseq): $Matcher
public "results"(): $Stream<$MatchResult>
public "start"(int0: integer): integer
public "start"(): integer
public "start"(string0: string): integer
public "toMatchResult"(): $MatchResult
public "useAnchoringBounds"(boolean0: boolean): $Matcher
public "usePattern"(pattern0: $Pattern$$Type): $Matcher
public "useTransparentBounds"(boolean0: boolean): $Matcher
}
}

declare module "packages/java/util/$Map" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export interface $Map<K, V> {
"clear"(): void
"compute"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"computeIfAbsent"(k0: K, function1: $Function$$Type<K, V>): V
"computeIfPresent"(k0: K, biFunction1: $BiFunction$$Type<K, V, V>): V
"containsKey"(object0: any): boolean
"containsValue"(object0: any): boolean
"entrySet"(): $Set<$Map$Entry<K, V>>
"equals"(object0: any): boolean
"forEach"(biConsumer0: $BiConsumer$$Type<K, V>): void
"get"(object0: any): V
"getOrDefault"(object0: any, v1: V): V
"hashCode"(): integer
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
"values"(): $Collection<V>
[index: string | number]: V
get "empty"(): boolean
}

export namespace $Map {
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
export abstract class $Map$$Static<K, V> implements $Map<K, V> {
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

declare module "packages/java/util/$Calendar" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Date, $Date$$Type } from "packages/java/util/$Date"
import { $Instant } from "packages/java/time/$Instant"
import { $Set } from "packages/java/util/$Set"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $TimeZone, $TimeZone$$Type } from "packages/java/util/$TimeZone"
import { $Locale, $Locale$$Type } from "packages/java/util/$Locale"
import { $Map } from "packages/java/util/$Map"

export class $Calendar implements $Serializable, $Cloneable, $Comparable<$Calendar> {
static readonly "ALL_STYLES": integer
static readonly "AM": integer
static readonly "AM_PM": integer
static readonly "APRIL": integer
static readonly "AUGUST": integer
static readonly "DATE": integer
static readonly "DAY_OF_MONTH": integer
static readonly "DAY_OF_WEEK": integer
static readonly "DAY_OF_WEEK_IN_MONTH": integer
static readonly "DAY_OF_YEAR": integer
static readonly "DECEMBER": integer
static readonly "DST_OFFSET": integer
static readonly "ERA": integer
static readonly "FEBRUARY": integer
static readonly "FIELD_COUNT": integer
static readonly "FRIDAY": integer
static readonly "HOUR": integer
static readonly "HOUR_OF_DAY": integer
static readonly "JANUARY": integer
static readonly "JULY": integer
static readonly "JUNE": integer
static readonly "LONG": integer
static readonly "LONG_FORMAT": integer
static readonly "LONG_STANDALONE": integer
static readonly "MARCH": integer
static readonly "MAY": integer
static readonly "MILLISECOND": integer
static readonly "MINUTE": integer
static readonly "MONDAY": integer
static readonly "MONTH": integer
static readonly "NARROW_FORMAT": integer
static readonly "NARROW_STANDALONE": integer
static readonly "NOVEMBER": integer
static readonly "OCTOBER": integer
static readonly "PM": integer
static readonly "SATURDAY": integer
static readonly "SECOND": integer
static readonly "SEPTEMBER": integer
static readonly "SHORT": integer
static readonly "SHORT_FORMAT": integer
static readonly "SHORT_STANDALONE": integer
static readonly "SUNDAY": integer
static readonly "THURSDAY": integer
static readonly "TUESDAY": integer
static readonly "UNDECIMBER": integer
static readonly "WEDNESDAY": integer
static readonly "WEEK_OF_MONTH": integer
static readonly "WEEK_OF_YEAR": integer
static readonly "YEAR": integer
static readonly "ZONE_OFFSET": integer

public "add"(int0: integer, int1: integer): void
public "after"(object0: any): boolean
public "before"(object0: any): boolean
public "clear"(): void
public "clear"(int0: integer): void
public "clone"(): any
public "compareTo"(calendar0: $Calendar$$Type): integer
public "get"(int0: integer): integer
public "getActualMaximum"(int0: integer): integer
public "getActualMinimum"(int0: integer): integer
public static "getAvailableCalendarTypes"(): $Set<string>
public static "getAvailableLocales"(): $Locale[]
public "getCalendarType"(): string
public "getDisplayName"(int0: integer, int1: integer, locale2: $Locale$$Type): string
public "getDisplayNames"(int0: integer, int1: integer, locale2: $Locale$$Type): $Map<string, integer>
public "getFirstDayOfWeek"(): integer
public "getGreatestMinimum"(int0: integer): integer
public static "getInstance"(): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type, locale1: $Locale$$Type): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type): $Calendar
public static "getInstance"(locale0: $Locale$$Type): $Calendar
public "getLeastMaximum"(int0: integer): integer
public "getMaximum"(int0: integer): integer
public "getMinimalDaysInFirstWeek"(): integer
public "getMinimum"(int0: integer): integer
public "getTime"(): $Date
public "getTimeInMillis"(): long
public "getTimeZone"(): $TimeZone
public "getWeekYear"(): integer
public "getWeeksInWeekYear"(): integer
public "isLenient"(): boolean
public "isSet"(int0: integer): boolean
public "isWeekDateSupported"(): boolean
public "roll"(int0: integer, int1: integer): void
public "roll"(int0: integer, boolean1: boolean): void
public "set"(int0: integer, int1: integer, int2: integer): void
public "set"(int0: integer, int1: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "setFirstDayOfWeek"(int0: integer): void
public "setLenient"(boolean0: boolean): void
public "setMinimalDaysInFirstWeek"(int0: integer): void
public "setTime"(date0: $Date$$Type): void
public "setTimeInMillis"(long0: long): void
public "setTimeZone"(timeZone0: $TimeZone$$Type): void
public "setWeekDate"(int0: integer, int1: integer, int2: integer): void
public "toInstant"(): $Instant
get "calendarType"(): string
get "firstDayOfWeek"(): integer
get "minimalDaysInFirstWeek"(): integer
get "time"(): $Date
get "timeInMillis"(): long
get "timeZone"(): $TimeZone
get "weekYear"(): integer
get "weeksInWeekYear"(): integer
get "lenient"(): boolean
get "weekDateSupported"(): boolean
set "firstDayOfWeek"(value: integer)
set "lenient"(value: boolean)
set "minimalDaysInFirstWeek"(value: integer)
set "time"(value: $Date$$Type)
set "timeInMillis"(value: long)
set "timeZone"(value: $TimeZone$$Type)
}
}

declare module "packages/java/util/function/$IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntFunction<R> {
"apply"(int0: integer): R
}

export namespace $IntFunction {
const probejs$$marker: never
}
export abstract class $IntFunction$$Static<R> implements $IntFunction<R> {
}
}

declare module "packages/java/util/$LinkedList" {
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $Serializable } from "packages/java/io/$Serializable"
import { $AbstractSequentialList } from "packages/java/util/$AbstractSequentialList"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Deque } from "packages/java/util/$Deque"
import { $ListIterator } from "packages/java/util/$ListIterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $List } from "packages/java/util/$List"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"

export class $LinkedList<E> extends $AbstractSequentialList<E> implements $List<E>, $Deque<E>, $Cloneable, $Serializable {
constructor()
constructor(collection0: $Collection$$Type<E>)

public "addFirst"(e0: E): void
public "addLast"(e0: E): void
public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "descendingIterator"(): $Iterator<E>
public "element"(): E
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "get"(int0: integer): E
public "getFirst"(): E
public "getLast"(): E
public "hashCode"(): integer
public "isEmpty"(): boolean
public "iterator"(): $Iterator<E>
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
public "offer"(e0: E): boolean
public "offerFirst"(e0: E): boolean
public "offerLast"(e0: E): boolean
public "parallelStream"(): $Stream<E>
public "peek"(): E
public "peekFirst"(): E
public "peekLast"(): E
public "poll"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "pop"(): E
public "push"(e0: E): void
public "remove"(): E
public "remove"(int0: integer): E
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeFirst"(): E
public "removeFirstOccurrence"(object0: any): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "removeLast"(): E
public "removeLastOccurrence"(object0: any): boolean
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<E>): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "set"(int0: integer, e1: E): E
public "sort"(comparator0: $Comparator$$Type<E>): void
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "subList"(int0: integer, int1: integer): $List<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
}

declare module "packages/java/util/$HashSet" {
import { $Serializable } from "packages/java/io/$Serializable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $AbstractSet } from "packages/java/util/$AbstractSet"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $HashSet<E> extends $AbstractSet<E> implements $Set<E>, $Cloneable, $Serializable {
constructor(int0: integer)
constructor(int0: integer, float1: float)
constructor(collection0: $Collection$$Type<E>)
constructor()

public "addAll"(collection0: $Collection$$Type<E>): boolean
public "clone"(): any
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $Set<E>
public "equals"(object0: any): boolean
public "forEach"(consumer0: $Consumer$$Type<E>): void
public "hashCode"(): integer
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
public "removeAll"(collection0: $Collection$$Type<any>): boolean
public "removeIf"(predicate0: $Predicate$$Type<E>): boolean
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "spliterator"(): $Spliterator<E>
public "stream"(): $Stream<E>
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
}
}

declare module "packages/java/util/regex/$Pattern" {
import { $Matcher } from "packages/java/util/regex/$Matcher"
import { $Serializable } from "packages/java/io/$Serializable"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $Pattern implements $Serializable {
static readonly "CANON_EQ": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "COMMENTS": integer
static readonly "DOTALL": integer
static readonly "LITERAL": integer
static readonly "MULTILINE": integer
static readonly "UNICODE_CASE": integer
static readonly "UNICODE_CHARACTER_CLASS": integer
static readonly "UNIX_LINES": integer

public "asMatchPredicate"(): $Predicate<string>
public "asPredicate"(): $Predicate<string>
public static "compile"(string0: string): $Pattern
public static "compile"(string0: string, int1: integer): $Pattern
public "flags"(): integer
public "matcher"(charSequence0: charseq): $Matcher
public static "matches"(string0: string, charSequence1: charseq): boolean
public "pattern"(): string
public static "quote"(string0: string): string
public "split"(charSequence0: charseq): string[]
public "split"(charSequence0: charseq, int1: integer): string[]
public "splitAsStream"(charSequence0: charseq): $Stream<string>
}
}

declare module "packages/java/util/stream/$Stream" {
import { $LongConsumer$$Type } from "packages/java/util/function/$LongConsumer"
import { $Stream$Builder } from "packages/java/util/stream/$Stream$Builder"
import { $Collector$$Type } from "packages/java/util/stream/$Collector"
import { $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $BinaryOperator$$Type } from "packages/java/util/function/$BinaryOperator"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $List } from "packages/java/util/$List"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ToLongFunction$$Type } from "packages/java/util/function/$ToLongFunction"
import { $ToDoubleFunction$$Type } from "packages/java/util/function/$ToDoubleFunction"
import { $Comparator$$Type } from "packages/java/util/$Comparator"
import { $LongStream } from "packages/java/util/stream/$LongStream"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $ToIntFunction$$Type } from "packages/java/util/function/$ToIntFunction"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $DoubleStream } from "packages/java/util/stream/$DoubleStream"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $IntFunction$$Type } from "packages/java/util/function/$IntFunction"
import { $BaseStream } from "packages/java/util/stream/$BaseStream"
import { $Optional } from "packages/java/util/$Optional"
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $Stream<T> extends $BaseStream<T, $Stream<T>> {
"allMatch"(predicate0: $Predicate$$Type<T>): boolean
"anyMatch"(predicate0: $Predicate$$Type<T>): boolean
"close"(): void
"collect"<R, A>(collector0: $Collector$$Type<T, A, R>): R
"collect"<R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, biConsumer2: $BiConsumer$$Type<R, R>): R
"count"(): long
"distinct"(): $Stream<T>
"dropWhile"(predicate0: $Predicate$$Type<T>): $Stream<T>
"filter"(predicate0: $Predicate$$Type<T>): $Stream<T>
"findAny"(): $Optional<T>
"findFirst"(): $Optional<T>
"flatMap"<R>(function0: $Function$$Type<T, $Stream<R>>): $Stream<R>
"flatMapToDouble"(function0: $Function$$Type<T, $DoubleStream>): $DoubleStream
"flatMapToInt"(function0: $Function$$Type<T, $IntStream>): $IntStream
"flatMapToLong"(function0: $Function$$Type<T, $LongStream>): $LongStream
"forEach"(consumer0: $Consumer$$Type<T>): void
"forEachOrdered"(consumer0: $Consumer$$Type<T>): void
"isParallel"(): boolean
"iterator"(): $Iterator<T>
"limit"(long0: long): $Stream<T>
"map"<R>(function0: $Function$$Type<T, R>): $Stream<R>
"mapMulti"<R>(biConsumer0: $BiConsumer$$Type<T, $Consumer$$Type<R>>): $Stream<R>
"mapMultiToDouble"(biConsumer0: $BiConsumer$$Type<T, $DoubleConsumer$$Type>): $DoubleStream
"mapMultiToInt"(biConsumer0: $BiConsumer$$Type<T, $IntConsumer$$Type>): $IntStream
"mapMultiToLong"(biConsumer0: $BiConsumer$$Type<T, $LongConsumer$$Type>): $LongStream
"mapToDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $DoubleStream
"mapToInt"(toIntFunction0: $ToIntFunction$$Type<T>): $IntStream
"mapToLong"(toLongFunction0: $ToLongFunction$$Type<T>): $LongStream
"max"(comparator0: $Comparator$$Type<T>): $Optional<T>
"min"(comparator0: $Comparator$$Type<T>): $Optional<T>
"noneMatch"(predicate0: $Predicate$$Type<T>): boolean
"onClose"(runnable0: $Runnable$$Type): $Stream<T>
"parallel"(): $Stream<T>
"peek"(consumer0: $Consumer$$Type<T>): $Stream<T>
"reduce"(binaryOperator0: $BinaryOperator$$Type<T>): $Optional<T>
"reduce"<U>(u0: U, biFunction1: $BiFunction$$Type<U, T, U>, binaryOperator2: $BinaryOperator$$Type<U>): U
"reduce"(t0: T, binaryOperator1: $BinaryOperator$$Type<T>): T
"sequential"(): $Stream<T>
"skip"(long0: long): $Stream<T>
"sorted"(comparator0: $Comparator$$Type<T>): $Stream<T>
"sorted"(): $Stream<T>
"spliterator"(): $Spliterator<T>
"takeWhile"(predicate0: $Predicate$$Type<T>): $Stream<T>
"toArray"(): any[]
"toArray"<A>(intFunction0: $IntFunction$$Type<A[]>): A[]
"toList"(): $List<T>
"unordered"(): $Stream<T>
}

export namespace $Stream {
function builder<T>(): $Stream$Builder<T>
function concat<T>(stream0: $Stream$$Type<T>, stream1: $Stream$$Type<T>): $Stream<T>
function empty<T>(): $Stream<T>
function generate<T>(supplier0: $Supplier$$Type<T>): $Stream<T>
function iterate<T>(t0: T, unaryOperator1: $UnaryOperator$$Type<T>): $Stream<T>
function iterate<T>(t0: T, predicate1: $Predicate$$Type<T>, unaryOperator2: $UnaryOperator$$Type<T>): $Stream<T>
function of<T>(t0: T): $Stream<T>
function of<T>(...t0s: T[]): $Stream<T>
function ofNullable<T>(t0: T): $Stream<T>
}
export abstract class $Stream$$Static<T> implements $Stream<T> {
static "builder"<T>(): $Stream$Builder<T>
static "concat"<T>(stream0: $Stream$$Type<T>, stream1: $Stream$$Type<T>): $Stream<T>
static "empty"<T>(): $Stream<T>
static "generate"<T>(supplier0: $Supplier$$Type<T>): $Stream<T>
static "iterate"<T>(t0: T, unaryOperator1: $UnaryOperator$$Type<T>): $Stream<T>
static "iterate"<T>(t0: T, predicate1: $Predicate$$Type<T>, unaryOperator2: $UnaryOperator$$Type<T>): $Stream<T>
static "of"<T>(t0: T): $Stream<T>
static "of"<T>(...t0s: T[]): $Stream<T>
static "ofNullable"<T>(t0: T): $Stream<T>
}
}

declare module "packages/java/util/stream/$BaseStream" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export interface $BaseStream<T, S extends $BaseStream<T, S>> extends $AutoCloseable {
"close"(): void
"isParallel"(): boolean
"iterator"(): $Iterator<T>
"onClose"(runnable0: $Runnable$$Type): S
"parallel"(): S
"sequential"(): S
"spliterator"(): $Spliterator<T>
"unordered"(): S
}

export namespace $BaseStream {
const probejs$$marker: never
}
export abstract class $BaseStream$$Static<T, S extends $BaseStream<T, S>> implements $BaseStream<T, S> {
}
}

declare module "packages/java/util/function/$LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongSupplier {
"getAsLong"(): long
get "asLong"(): long
}

export namespace $LongSupplier {
const probejs$$marker: never
}
export abstract class $LongSupplier$$Static implements $LongSupplier {
}
}

declare module "packages/java/util/stream/$Collector" {
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $BinaryOperator, $BinaryOperator$$Type } from "packages/java/util/function/$BinaryOperator"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Collector$Characteristics, $Collector$Characteristics$$Type } from "packages/java/util/stream/$Collector$Characteristics"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $Collector<T, A, R> {
"accumulator"(): $BiConsumer<A, T>
"characteristics"(): $Set<$Collector$Characteristics>
"combiner"(): $BinaryOperator<A>
"finisher"(): $Function<A, R>
"supplier"(): $Supplier<A>
}

export namespace $Collector {
function of<T, A, R>(supplier0: $Supplier$$Type<A>, biConsumer1: $BiConsumer$$Type<A, T>, binaryOperator2: $BinaryOperator$$Type<A>, function3: $Function$$Type<A, R>, ...characteristics4s: $Collector$Characteristics$$Type[]): $Collector<T, A, R>
function of<T, R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, binaryOperator2: $BinaryOperator$$Type<R>, ...characteristics3s: $Collector$Characteristics$$Type[]): $Collector<T, R, R>
}
export abstract class $Collector$$Static<T, A, R> implements $Collector<T, A, R> {
static "of"<T, A, R>(supplier0: $Supplier$$Type<A>, biConsumer1: $BiConsumer$$Type<A, T>, binaryOperator2: $BinaryOperator$$Type<A>, function3: $Function$$Type<A, R>, ...characteristics4s: $Collector$Characteristics$$Type[]): $Collector<T, A, R>
static "of"<T, R>(supplier0: $Supplier$$Type<R>, biConsumer1: $BiConsumer$$Type<R, T>, binaryOperator2: $BinaryOperator$$Type<R>, ...characteristics3s: $Collector$Characteristics$$Type[]): $Collector<T, R, R>
}
}

declare module "packages/java/util/$Locale$FilteringMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Locale$FilteringMode extends $Enum<$Locale$FilteringMode> {
static readonly "AUTOSELECT_FILTERING": $Locale$FilteringMode
static readonly "EXTENDED_FILTERING": $Locale$FilteringMode
static readonly "IGNORE_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "MAP_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "REJECT_EXTENDED_RANGES": $Locale$FilteringMode

public static "valueOf"(string0: string): $Locale$FilteringMode
public static "values"(): $Locale$FilteringMode[]
}
}

declare module "packages/java/util/function/$DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublePredicate {
"and"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
"negate"(): $DoublePredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
"test"(double0: double): boolean
}

export namespace $DoublePredicate {
const probejs$$marker: never
}
export abstract class $DoublePredicate$$Static implements $DoublePredicate {
}
}

declare module "packages/java/util/$DoubleSummaryStatistics" {
import { $DoubleConsumer, $DoubleConsumer$$Type } from "packages/java/util/function/$DoubleConsumer"

export class $DoubleSummaryStatistics implements $DoubleConsumer {
constructor()
constructor(long0: long, double1: double, double2: double, double3: double)

public "accept"(double0: double): void
public "andThen"(doubleConsumer0: $DoubleConsumer$$Type): $DoubleConsumer
public "combine"(doubleSummaryStatistics0: $DoubleSummaryStatistics$$Type): void
public "getAverage"(): double
public "getCount"(): long
public "getMax"(): double
public "getMin"(): double
public "getSum"(): double
get "average"(): double
get "count"(): long
get "max"(): double
get "min"(): double
get "sum"(): double
}
}

