declare module "packages/java/util/$RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomAccess$$Type = ($RandomAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomAccess_ = $RandomAccess$$Type;
}
}

declare module "packages/java/util/$SortedSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SortedSet$$Type<E> = ($SortedSet<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SortedSet_<E> = $SortedSet$$Type<E>;
}
}

declare module "packages/java/util/$Deque" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Deque$$Type<E> = ($Deque<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Deque_<E> = $Deque$$Type<E>;
}
}

declare module "packages/java/util/stream/$LongStream$LongMapMultiConsumer" {
import { $LongConsumer } from "packages/java/util/function/$LongConsumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongStream$LongMapMultiConsumer$$Type = ($LongStream$LongMapMultiConsumer | ((arg0: long, arg1: $LongConsumer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongStream$LongMapMultiConsumer_ = $LongStream$LongMapMultiConsumer$$Type;
}
}

declare module "packages/java/util/function/$LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongToDoubleFunction$$Type = ($LongToDoubleFunction | ((arg0: long) => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongToDoubleFunction_ = $LongToDoubleFunction$$Type;
}
}

declare module "packages/java/util/$Spliterator$OfInt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Spliterator$OfInt$$Type = ($Spliterator$OfInt);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Spliterator$OfInt_ = $Spliterator$OfInt$$Type;
}
}

declare module "packages/java/util/concurrent/$ScheduledFuture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<V>;
}
}

declare module "packages/java/util/concurrent/$ThreadFactory" {
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Runnable } from "packages/java/lang/$Runnable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreadFactory$$Type = ($ThreadFactory | ((arg0: $Runnable) => $Thread$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreadFactory_ = $ThreadFactory$$Type;
}
}

declare module "packages/java/util/$IdentityHashMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdentityHashMap$$Type<K, V> = ($IdentityHashMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdentityHashMap_<K, V> = $IdentityHashMap$$Type<K, V>;
}
}

declare module "packages/java/util/zip/$ZipEntry" {
import { $FileTime, $FileTime$$Type } from "packages/java/nio/file/attribute/$FileTime"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $LocalDateTime, $LocalDateTime$$Type } from "packages/java/time/$LocalDateTime"
import { $ZipConstants } from "packages/java/util/zip/$ZipConstants"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipEntry implements $ZipConstants, $Cloneable {
static readonly "DEFLATED": integer
static readonly "STORED": integer

constructor(string0: string)
constructor(zipEntry0: $ZipEntry$$Type)

public "clone"(): any
public "getComment"(): string
public "getCompressedSize"(): long
public "getCrc"(): long
public "getCreationTime"(): $FileTime
public "getExtra"(): byte[]
public "getLastAccessTime"(): $FileTime
public "getLastModifiedTime"(): $FileTime
public "getMethod"(): integer
public "getName"(): string
public "getSize"(): long
public "getTime"(): long
public "getTimeLocal"(): $LocalDateTime
public "isDirectory"(): boolean
public "setComment"(string0: string): void
public "setCompressedSize"(long0: long): void
public "setCrc"(long0: long): void
public "setCreationTime"(fileTime0: $FileTime$$Type): $ZipEntry
public "setExtra"(byte0s: byte[]): void
public "setLastAccessTime"(fileTime0: $FileTime$$Type): $ZipEntry
public "setLastModifiedTime"(fileTime0: $FileTime$$Type): $ZipEntry
public "setMethod"(int0: integer): void
public "setSize"(long0: long): void
public "setTime"(long0: long): void
public "setTimeLocal"(localDateTime0: $LocalDateTime$$Type): void
get "comment"(): string
get "compressedSize"(): long
get "crc"(): long
get "creationTime"(): $FileTime
get "extra"(): byte[]
get "lastAccessTime"(): $FileTime
get "lastModifiedTime"(): $FileTime
get "method"(): integer
get "name"(): string
get "size"(): long
get "time"(): long
get "timeLocal"(): $LocalDateTime
get "directory"(): boolean
set "comment"(value: string)
set "compressedSize"(value: long)
set "crc"(value: long)
set "creationTime"(value: $FileTime$$Type)
set "extra"(value: byte[])
set "lastAccessTime"(value: $FileTime$$Type)
set "lastModifiedTime"(value: $FileTime$$Type)
set "method"(value: integer)
set "size"(value: long)
set "time"(value: long)
set "timeLocal"(value: $LocalDateTime$$Type)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZipEntry$$Type = ($ZipEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZipEntry_ = $ZipEntry$$Type;
}
}

declare module "packages/java/util/$Locale$Category" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Locale$Category$$Type = ($Locale$Category | ("display" | "format"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Locale$Category_ = $Locale$Category$$Type;
}
}

declare module "packages/java/util/$OptionalLong" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OptionalLong$$Type = ($OptionalLong);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OptionalLong_ = $OptionalLong$$Type;
}
}

declare module "packages/java/util/regex/$MatchResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MatchResult$$Type = ($MatchResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MatchResult_ = $MatchResult$$Type;
}
}

declare module "packages/java/util/$PrimitiveIterator$OfLong" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimitiveIterator$OfLong$$Type = ($PrimitiveIterator$OfLong);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimitiveIterator$OfLong_ = $PrimitiveIterator$OfLong$$Type;
}
}

declare module "packages/java/util/$LongSummaryStatistics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongSummaryStatistics$$Type = ($LongSummaryStatistics);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongSummaryStatistics_ = $LongSummaryStatistics$$Type;
}
}

declare module "packages/java/util/$Map$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Map$Entry$$Type<K, V> = ($Map$Entry<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Map$Entry_<K, V> = $Map$Entry$$Type<K, V>;
}
}

declare module "packages/java/util/concurrent/locks/$Condition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Condition$$Type = ($Condition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Condition_ = $Condition$$Type;
}
}

declare module "packages/java/util/$Locale" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Locale$$Type = ($Locale);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Locale_ = $Locale$$Type;
}
}

declare module "packages/java/util/concurrent/locks/$ReentrantLock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReentrantLock$$Type = ($ReentrantLock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReentrantLock_ = $ReentrantLock$$Type;
}
}

declare module "packages/java/util/$ArrayList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArrayList$$Type<E> = ($ArrayList<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArrayList_<E> = $ArrayList$$Type<E>;
}
}

declare module "packages/java/util/zip/$ZipConstants" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ZipConstants {
}

export namespace $ZipConstants {
const CENATT: integer
const CENATX: integer
const CENCOM: integer
const CENCRC: integer
const CENDSK: integer
const CENEXT: integer
const CENFLG: integer
const CENHDR: integer
const CENHOW: integer
const CENLEN: integer
const CENNAM: integer
const CENOFF: integer
const CENSIG: long
const CENSIZ: integer
const CENTIM: integer
const CENVEM: integer
const CENVER: integer
const ENDCOM: integer
const ENDHDR: integer
const ENDOFF: integer
const ENDSIG: long
const ENDSIZ: integer
const ENDSUB: integer
const ENDTOT: integer
const EXTCRC: integer
const EXTHDR: integer
const EXTLEN: integer
const EXTSIG: long
const EXTSIZ: integer
const LOCCRC: integer
const LOCEXT: integer
const LOCFLG: integer
const LOCHDR: integer
const LOCHOW: integer
const LOCLEN: integer
const LOCNAM: integer
const LOCSIG: long
const LOCSIZ: integer
const LOCTIM: integer
const LOCVER: integer
}
export abstract class $ZipConstants$$Static implements $ZipConstants {
static readonly "CENATT": integer
static readonly "CENATX": integer
static readonly "CENCOM": integer
static readonly "CENCRC": integer
static readonly "CENDSK": integer
static readonly "CENEXT": integer
static readonly "CENFLG": integer
static readonly "CENHDR": integer
static readonly "CENHOW": integer
static readonly "CENLEN": integer
static readonly "CENNAM": integer
static readonly "CENOFF": integer
static readonly "CENSIG": long
static readonly "CENSIZ": integer
static readonly "CENTIM": integer
static readonly "CENVEM": integer
static readonly "CENVER": integer
static readonly "ENDCOM": integer
static readonly "ENDHDR": integer
static readonly "ENDOFF": integer
static readonly "ENDSIG": long
static readonly "ENDSIZ": integer
static readonly "ENDSUB": integer
static readonly "ENDTOT": integer
static readonly "EXTCRC": integer
static readonly "EXTHDR": integer
static readonly "EXTLEN": integer
static readonly "EXTSIG": long
static readonly "EXTSIZ": integer
static readonly "LOCCRC": integer
static readonly "LOCEXT": integer
static readonly "LOCFLG": integer
static readonly "LOCHDR": integer
static readonly "LOCHOW": integer
static readonly "LOCLEN": integer
static readonly "LOCNAM": integer
static readonly "LOCSIG": long
static readonly "LOCSIZ": integer
static readonly "LOCTIM": integer
static readonly "LOCVER": integer

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZipConstants$$Type = ($ZipConstants);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZipConstants_ = $ZipConstants$$Type;
}
}

declare module "packages/java/util/$PrimitiveIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimitiveIterator$$Type<T, T_CONS> = ($PrimitiveIterator<T, T_CONS>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimitiveIterator_<T, T_CONS> = $PrimitiveIterator$$Type<T, T_CONS>;
}
}

declare module "packages/java/util/zip/$ZipFile" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $File$$Type } from "packages/java/io/$File"
import { $Enumeration } from "packages/java/util/$Enumeration"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ZipEntry, $ZipEntry$$Type } from "packages/java/util/zip/$ZipEntry"
import { $ZipConstants } from "packages/java/util/zip/$ZipConstants"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipFile implements $ZipConstants, $Closeable {
static readonly "OPEN_DELETE": integer
static readonly "OPEN_READ": integer

constructor(string0: string, charset1: $Charset$$Type)
constructor(file0: $File$$Type, charset1: $Charset$$Type)
constructor(string0: string)
constructor(file0: $File$$Type, int1: integer)
constructor(file0: $File$$Type)
constructor(file0: $File$$Type, int1: integer, charset2: $Charset$$Type)

public "close"(): void
public "entries"(): $Enumeration<$ZipEntry>
public "getComment"(): string
public "getEntry"(string0: string): $ZipEntry
public "getInputStream"(zipEntry0: $ZipEntry$$Type): $InputStream
public "getName"(): string
public "size"(): integer
public "stream"(): $Stream<$ZipEntry>
get "comment"(): string
get "name"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZipFile$$Type = ($ZipFile);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZipFile_ = $ZipFile$$Type;
}
}

declare module "packages/java/util/$Spliterator$OfLong" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Spliterator$OfLong$$Type = ($Spliterator$OfLong);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Spliterator$OfLong_ = $Spliterator$OfLong$$Type;
}
}

declare module "packages/java/util/zip/$Deflater" {
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Deflater {
static readonly "BEST_COMPRESSION": integer
static readonly "BEST_SPEED": integer
static readonly "DEFAULT_COMPRESSION": integer
static readonly "DEFAULT_STRATEGY": integer
static readonly "DEFLATED": integer
static readonly "FILTERED": integer
static readonly "FULL_FLUSH": integer
static readonly "HUFFMAN_ONLY": integer
static readonly "NO_COMPRESSION": integer
static readonly "NO_FLUSH": integer
static readonly "SYNC_FLUSH": integer

constructor()
constructor(int0: integer)
constructor(int0: integer, boolean1: boolean)

public "deflate"(byteBuffer0: $ByteBuffer$$Type, int1: integer): integer
public "deflate"(byte0s: byte[], int1: integer, int2: integer, int3: integer): integer
public "deflate"(byteBuffer0: $ByteBuffer$$Type): integer
public "deflate"(byte0s: byte[], int1: integer, int2: integer): integer
public "deflate"(byte0s: byte[]): integer
public "end"(): void
public "finish"(): void
public "finished"(): boolean
public "getAdler"(): integer
public "getBytesRead"(): long
public "getBytesWritten"(): long
public "getTotalIn"(): integer
public "getTotalOut"(): integer
public "needsInput"(): boolean
public "reset"(): void
public "setDictionary"(byte0s: byte[]): void
public "setDictionary"(byte0s: byte[], int1: integer, int2: integer): void
public "setDictionary"(byteBuffer0: $ByteBuffer$$Type): void
public "setInput"(byte0s: byte[], int1: integer, int2: integer): void
public "setInput"(byte0s: byte[]): void
public "setInput"(byteBuffer0: $ByteBuffer$$Type): void
public "setLevel"(int0: integer): void
public "setStrategy"(int0: integer): void
get "adler"(): integer
get "bytesRead"(): long
get "bytesWritten"(): long
get "totalIn"(): integer
get "totalOut"(): integer
set "dictionary"(value: byte[])
set "dictionary"(value: $ByteBuffer$$Type)
set "input"(value: byte[])
set "input"(value: $ByteBuffer$$Type)
set "level"(value: integer)
set "strategy"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Deflater$$Type = ($Deflater);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Deflater_ = $Deflater$$Type;
}
}

declare module "packages/java/util/function/$IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntConsumer$$Type = ($IntConsumer | ((arg0: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntConsumer_ = $IntConsumer$$Type;
}
}

declare module "packages/java/util/concurrent/$TimeUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimeUnit$$Type = ($TimeUnit | ("nanoseconds" | "microseconds" | "milliseconds" | "seconds" | "minutes" | "hours" | "days"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimeUnit_ = $TimeUnit$$Type;
}
}

declare module "packages/java/util/$AbstractMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractMap$$Type<K, V> = ($AbstractMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractMap_<K, V> = $AbstractMap$$Type<K, V>;
}
}

declare module "packages/java/util/$AbstractList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractList$$Type<E> = ($AbstractList<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractList_<E> = $AbstractList$$Type<E>;
}
}

declare module "packages/java/util/$TimeZone" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimeZone$$Type = ($TimeZone);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimeZone_ = $TimeZone$$Type;
}
}

declare module "packages/java/util/function/$Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Predicate$$Type<T> = ($Predicate<T> | ((arg0: T) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Predicate_<T> = $Predicate$$Type<T>;
}
}

declare module "packages/java/util/stream/$DoubleStream$DoubleMapMultiConsumer" {
import { $DoubleConsumer } from "packages/java/util/function/$DoubleConsumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleStream$DoubleMapMultiConsumer$$Type = ($DoubleStream$DoubleMapMultiConsumer | ((arg0: double, arg1: $DoubleConsumer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleStream$DoubleMapMultiConsumer_ = $DoubleStream$DoubleMapMultiConsumer$$Type;
}
}

declare module "packages/java/util/function/$Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Supplier$$Type<T> = ($Supplier<T> | (() => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Supplier_<T> = $Supplier$$Type<T>;
}
}

declare module "packages/java/util/function/$IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntSupplier$$Type = ($IntSupplier | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}
}

declare module "packages/java/util/$Properties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Properties$$Type = ($Properties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Properties_ = $Properties$$Type;
}
}

declare module "packages/java/util/jar/$Attributes" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Set } from "packages/java/util/$Set"
import { $Attributes$Name$$Type } from "packages/java/util/jar/$Attributes$Name"
import { $Collection } from "packages/java/util/$Collection"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Attributes implements $Map<any, any>, $Cloneable {
constructor(attributes0: $Attributes$$Type)
constructor(int0: integer)
constructor()

public "clear"(): void
public "clone"(): any
public "compute"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "computeIfAbsent"(object0: any, function1: $Function$$Type<any, any>): any
public "computeIfPresent"(object0: any, biFunction1: $BiFunction$$Type<any, any, any>): any
public "containsKey"(object0: any): boolean
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<any, any>>
public "forEach"(biConsumer0: $BiConsumer$$Type<any, any>): void
public "get"(object0: any): any
public "getOrDefault"(object0: any, object1: any): any
public "getValue"(string0: string): string
public "getValue"(name0: $Attributes$Name$$Type): string
public "isEmpty"(): boolean
public "keySet"(): $Set<any>
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
public "put"(object0: any, object1: any): any
public "putAll"(map0: $Map$$Type<any, any>): void
public "putIfAbsent"(object0: any, object1: any): any
public "putValue"(string0: string, string1: string): string
public "remove"(object0: any): any
public "remove"(object0: any, object1: any): boolean
public "replace"(object0: any, object1: any): any
public "replace"(object0: any, object1: any, object2: any): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<any, any, any>): void
public "size"(): integer
public "values"(): $Collection<any>
[index: string | number]: any
get "empty"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Attributes$$Type = ($Attributes);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Attributes_ = $Attributes$$Type;
}
}

declare module "packages/java/util/stream/$DoubleStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleStream$$Type = ($DoubleStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleStream_ = $DoubleStream$$Type;
}
}

declare module "packages/java/util/$EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventListener$$Type = ($EventListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventListener_ = $EventListener$$Type;
}
}

declare module "packages/java/util/$OptionalInt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OptionalInt$$Type = ($OptionalInt);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OptionalInt_ = $OptionalInt$$Type;
}
}

declare module "packages/java/util/function/$ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ToDoubleFunction$$Type<T> = ($ToDoubleFunction<T> | ((arg0: T) => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ToDoubleFunction_<T> = $ToDoubleFunction$$Type<T>;
}
}

declare module "packages/java/util/function/$DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleToIntFunction$$Type = ($DoubleToIntFunction | ((arg0: double) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleToIntFunction_ = $DoubleToIntFunction$$Type;
}
}

declare module "packages/java/util/zip/$DeflaterOutputStream" {
import { $Deflater$$Type } from "packages/java/util/zip/$Deflater"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $FilterOutputStream } from "packages/java/io/$FilterOutputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeflaterOutputStream extends $FilterOutputStream {
constructor(outputStream0: $OutputStream$$Type)
constructor(outputStream0: $OutputStream$$Type, boolean1: boolean)
constructor(outputStream0: $OutputStream$$Type, deflater1: $Deflater$$Type)
constructor(outputStream0: $OutputStream$$Type, deflater1: $Deflater$$Type, int2: integer, boolean3: boolean)
constructor(outputStream0: $OutputStream$$Type, deflater1: $Deflater$$Type, int2: integer)
constructor(outputStream0: $OutputStream$$Type, deflater1: $Deflater$$Type, boolean2: boolean)

public "finish"(): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeflaterOutputStream$$Type = ($DeflaterOutputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeflaterOutputStream_ = $DeflaterOutputStream$$Type;
}
}

declare module "packages/java/util/function/$BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiPredicate$$Type<T, U> = ($BiPredicate<T, U> | ((arg0: T, arg1: U) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiPredicate_<T, U> = $BiPredicate$$Type<T, U>;
}
}

declare module "packages/java/util/function/$LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongUnaryOperator$$Type = ($LongUnaryOperator | ((arg0: long) => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongUnaryOperator_ = $LongUnaryOperator$$Type;
}
}

declare module "packages/java/util/function/$DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleSupplier$$Type = ($DoubleSupplier | (() => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleSupplier_ = $DoubleSupplier$$Type;
}
}

declare module "packages/java/util/$Queue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Queue$$Type<E> = ($Queue<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Queue_<E> = $Queue$$Type<E>;
}
}

declare module "packages/java/util/concurrent/locks/$ReadWriteLock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReadWriteLock$$Type = ($ReadWriteLock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReadWriteLock_ = $ReadWriteLock$$Type;
}
}

declare module "packages/java/util/$Set" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Set$$Type<E> = ($Set<E> | E[]);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Set_<E> = $Set$$Type<E>;
}
}

declare module "packages/java/util/$Hashtable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Hashtable$$Type<K, V> = ($Hashtable<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Hashtable_<K, V> = $Hashtable$$Type<K, V>;
}
}

declare module "packages/java/util/$Comparator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Comparator$$Type<T> = ($Comparator<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Comparator_<T> = $Comparator$$Type<T>;
}
}

declare module "packages/java/util/function/$IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntToLongFunction$$Type = ($IntToLongFunction | ((arg0: integer) => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntToLongFunction_ = $IntToLongFunction$$Type;
}
}

declare module "packages/java/util/$Locale$IsoCountryCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Locale$IsoCountryCode$$Type = ($Locale$IsoCountryCode | ("part1_alpha2" | "part1_alpha3" | "part3"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Locale$IsoCountryCode_ = $Locale$IsoCountryCode$$Type;
}
}

declare module "packages/java/util/concurrent/$Future" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Future$$Type<V> = ($Future<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Future_<V> = $Future$$Type<V>;
}
}

declare module "packages/java/util/zip/$ZipOutputStream" {
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $DeflaterOutputStream } from "packages/java/util/zip/$DeflaterOutputStream"
import { $ZipEntry$$Type } from "packages/java/util/zip/$ZipEntry"
import { $ZipConstants } from "packages/java/util/zip/$ZipConstants"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipOutputStream extends $DeflaterOutputStream implements $ZipConstants {
static readonly "DEFLATED": integer
static readonly "STORED": integer

constructor(outputStream0: $OutputStream$$Type, charset1: $Charset$$Type)
constructor(outputStream0: $OutputStream$$Type)

public "closeEntry"(): void
public "putNextEntry"(zipEntry0: $ZipEntry$$Type): void
public "setComment"(string0: string): void
public "setLevel"(int0: integer): void
public "setMethod"(int0: integer): void
set "comment"(value: string)
set "level"(value: integer)
set "method"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZipOutputStream$$Type = ($ZipOutputStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZipOutputStream_ = $ZipOutputStream$$Type;
}
}

declare module "packages/java/util/function/$ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ToLongFunction$$Type<T> = ($ToLongFunction<T> | ((arg0: T) => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ToLongFunction_<T> = $ToLongFunction$$Type<T>;
}
}

declare module "packages/java/util/$Iterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Iterator$$Type<E> = ($Iterator<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Iterator_<E> = $Iterator$$Type<E>;
}
}

declare module "packages/java/util/function/$LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongBinaryOperator$$Type = ($LongBinaryOperator | ((arg0: long, arg1: long) => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongBinaryOperator_ = $LongBinaryOperator$$Type;
}
}

declare module "packages/java/util/function/$LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongPredicate$$Type = ($LongPredicate | ((arg0: long) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongPredicate_ = $LongPredicate$$Type;
}
}

declare module "packages/java/util/stream/$Stream$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Stream$Builder$$Type<T> = ($Stream$Builder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Stream$Builder_<T> = $Stream$Builder$$Type<T>;
}
}

declare module "packages/java/util/$AbstractCollection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractCollection$$Type<E> = ($AbstractCollection<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractCollection_<E> = $AbstractCollection$$Type<E>;
}
}

declare module "packages/java/util/concurrent/$ScheduledExecutorService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScheduledExecutorService$$Type = ($ScheduledExecutorService);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScheduledExecutorService_ = $ScheduledExecutorService$$Type;
}
}

declare module "packages/java/util/function/$DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleUnaryOperator$$Type = ($DoubleUnaryOperator | ((arg0: double) => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleUnaryOperator_ = $DoubleUnaryOperator$$Type;
}
}

declare module "packages/java/util/concurrent/$Delayed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Delayed$$Type = ($Delayed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Delayed_ = $Delayed$$Type;
}
}

declare module "packages/java/util/$Random" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Random$$Type = ($Random);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Random_ = $Random$$Type;
}
}

declare module "packages/java/util/concurrent/$Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Callable$$Type<V> = ($Callable<V> | (() => V));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Callable_<V> = $Callable$$Type<V>;
}
}

declare module "packages/java/util/$HashMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HashMap$$Type<K, V> = ($HashMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HashMap_<K, V> = $HashMap$$Type<K, V>;
}
}

declare module "packages/java/util/function/$BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BooleanSupplier$$Type = ($BooleanSupplier | (() => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BooleanSupplier_ = $BooleanSupplier$$Type;
}
}

declare module "packages/java/util/$BitSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BitSet$$Type = ($BitSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BitSet_ = $BitSet$$Type;
}
}

declare module "packages/java/util/$ListIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ListIterator$$Type<E> = ($ListIterator<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ListIterator_<E> = $ListIterator$$Type<E>;
}
}

declare module "packages/java/util/stream/$DoubleStream$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleStream$Builder$$Type = ($DoubleStream$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleStream$Builder_ = $DoubleStream$Builder$$Type;
}
}

declare module "packages/java/util/stream/$LongStream$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongStream$Builder$$Type = ($LongStream$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongStream$Builder_ = $LongStream$Builder$$Type;
}
}

declare module "packages/java/util/$Vector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vector$$Type<E> = ($Vector<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vector_<E> = $Vector$$Type<E>;
}
}

declare module "packages/java/util/function/$LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongToIntFunction$$Type = ($LongToIntFunction | ((arg0: long) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongToIntFunction_ = $LongToIntFunction$$Type;
}
}

declare module "packages/java/util/$LinkedHashMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LinkedHashMap$$Type<K, V> = ($LinkedHashMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LinkedHashMap_<K, V> = $LinkedHashMap$$Type<K, V>;
}
}

declare module "packages/java/util/function/$DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleBinaryOperator$$Type = ($DoubleBinaryOperator | ((arg0: double, arg1: double) => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleBinaryOperator_ = $DoubleBinaryOperator$$Type;
}
}

declare module "packages/java/util/function/$UnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnaryOperator$$Type<T> = ($UnaryOperator<T> | ((arg0: T) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnaryOperator_<T> = $UnaryOperator$$Type<T>;
}
}

declare module "packages/java/util/function/$ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjLongConsumer$$Type<T> = ($ObjLongConsumer<T> | ((arg0: T, arg1: long) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjLongConsumer_<T> = $ObjLongConsumer$$Type<T>;
}
}

declare module "packages/java/util/$Collection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Collection$$Type<E> = ($Collection<E> | E[]);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Collection_<E> = $Collection$$Type<E>;
}
}

declare module "packages/java/util/$Dictionary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dictionary$$Type<K, V> = ($Dictionary<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dictionary_<K, V> = $Dictionary$$Type<K, V>;
}
}

declare module "packages/java/util/function/$DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleFunction$$Type<R> = ($DoubleFunction<R> | ((arg0: double) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleFunction_<R> = $DoubleFunction$$Type<R>;
}
}

declare module "packages/java/util/function/$Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function$$Type<T, R> = ($Function<T, R> | ((arg0: T) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function_<T, R> = $Function$$Type<T, R>;
}
}

declare module "packages/java/util/$Currency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Currency$$Type = ($Currency);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Currency_ = $Currency$$Type;
}
}

declare module "packages/java/util/stream/$LongStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongStream$$Type = ($LongStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongStream_ = $LongStream$$Type;
}
}

declare module "packages/java/util/concurrent/$AbstractExecutorService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractExecutorService$$Type = ($AbstractExecutorService);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractExecutorService_ = $AbstractExecutorService$$Type;
}
}

declare module "packages/java/util/function/$IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntUnaryOperator$$Type = ($IntUnaryOperator | ((arg0: integer) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntUnaryOperator_ = $IntUnaryOperator$$Type;
}
}

declare module "packages/java/util/stream/$Collector$Characteristics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Collector$Characteristics$$Type = ($Collector$Characteristics | ("concurrent" | "unordered" | "identity_finish"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Collector$Characteristics_ = $Collector$Characteristics$$Type;
}
}

declare module "packages/java/util/$OptionalDouble" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OptionalDouble$$Type = ($OptionalDouble);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OptionalDouble_ = $OptionalDouble$$Type;
}
}

declare module "packages/java/util/$Optional" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Optional$$Type<T> = ($Optional<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Optional_<T> = $Optional$$Type<T>;
}
}

declare module "packages/java/util/$List" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $List$$Type<E> = ($List<E> | E[]);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $List_<E> = $List$$Type<E>;
}
}

declare module "packages/java/util/function/$ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjDoubleConsumer$$Type<T> = ($ObjDoubleConsumer<T> | ((arg0: T, arg1: double) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjDoubleConsumer_<T> = $ObjDoubleConsumer$$Type<T>;
}
}

declare module "packages/java/util/function/$BinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BinaryOperator$$Type<T> = ($BinaryOperator<T> | ((arg0: T, arg1: T) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BinaryOperator_<T> = $BinaryOperator$$Type<T>;
}
}

declare module "packages/java/util/function/$ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ObjIntConsumer$$Type<T> = ($ObjIntConsumer<T> | ((arg0: T, arg1: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ObjIntConsumer_<T> = $ObjIntConsumer$$Type<T>;
}
}

declare module "packages/java/util/$Date" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Date$$Type = ($Date);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Date_ = $Date$$Type;
}
}

declare module "packages/java/util/$EnumMap" {
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnumMap$$Type<K extends $Enum<K>, V> = ($EnumMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnumMap_<K extends $Enum<K>, V> = $EnumMap$$Type<K, V>;
}
}

declare module "packages/java/util/$LinkedHashSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LinkedHashSet$$Type<E> = ($LinkedHashSet<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LinkedHashSet_<E> = $LinkedHashSet$$Type<E>;
}
}

declare module "packages/java/util/stream/$IntStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntStream$$Type = ($IntStream);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntStream_ = $IntStream$$Type;
}
}

declare module "packages/java/util/$StringJoiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringJoiner$$Type = ($StringJoiner);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringJoiner_ = $StringJoiner$$Type;
}
}

declare module "packages/java/util/function/$IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntPredicate$$Type = ($IntPredicate | ((arg0: integer) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntPredicate_ = $IntPredicate$$Type;
}
}

declare module "packages/java/util/concurrent/$CompletableFuture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompletableFuture$$Type<T> = ($CompletableFuture<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompletableFuture_<T> = $CompletableFuture$$Type<T>;
}
}

declare module "packages/java/util/$IntSummaryStatistics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntSummaryStatistics$$Type = ($IntSummaryStatistics);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntSummaryStatistics_ = $IntSummaryStatistics$$Type;
}
}

declare module "packages/java/util/concurrent/atomic/$AtomicReference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AtomicReference$$Type<V> = ($AtomicReference<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AtomicReference_<V> = $AtomicReference$$Type<V>;
}
}

declare module "packages/java/util/function/$IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntToDoubleFunction$$Type = ($IntToDoubleFunction | ((arg0: integer) => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntToDoubleFunction_ = $IntToDoubleFunction$$Type;
}
}

declare module "packages/java/util/function/$BiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiFunction$$Type<T, U, R> = ($BiFunction<T, U, R> | ((arg0: T, arg1: U) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiFunction_<T, U, R> = $BiFunction$$Type<T, U, R>;
}
}

declare module "packages/java/util/function/$IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntBinaryOperator$$Type = ($IntBinaryOperator | ((arg0: integer, arg1: integer) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntBinaryOperator_ = $IntBinaryOperator$$Type;
}
}

declare module "packages/java/util/$PrimitiveIterator$OfInt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimitiveIterator$OfInt$$Type = ($PrimitiveIterator$OfInt);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimitiveIterator$OfInt_ = $PrimitiveIterator$OfInt$$Type;
}
}

declare module "packages/java/util/$SortedMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SortedMap$$Type<K, V> = ($SortedMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SortedMap_<K, V> = $SortedMap$$Type<K, V>;
}
}

declare module "packages/java/util/concurrent/locks/$Lock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Lock$$Type = ($Lock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Lock_ = $Lock$$Type;
}
}

declare module "packages/java/util/$Locale$LanguageRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Locale$LanguageRange$$Type = ($Locale$LanguageRange);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Locale$LanguageRange_ = $Locale$LanguageRange$$Type;
}
}

declare module "packages/java/util/$UUID" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UUID$$Type = ($UUID | string);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UUID_ = $UUID$$Type;
}
}

declare module "packages/java/util/concurrent/atomic/$AtomicReferenceArray" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AtomicReferenceArray$$Type<E> = ($AtomicReferenceArray<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AtomicReferenceArray_<E> = $AtomicReferenceArray$$Type<E>;
}
}

declare module "packages/java/util/jar/$Attributes$Name" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Attributes$Name {
static readonly "CLASS_PATH": $Attributes$Name
static readonly "CONTENT_TYPE": $Attributes$Name
/** @deprecated */
static readonly "EXTENSION_INSTALLATION": $Attributes$Name
static readonly "EXTENSION_LIST": $Attributes$Name
static readonly "EXTENSION_NAME": $Attributes$Name
static readonly "IMPLEMENTATION_TITLE": $Attributes$Name
/** @deprecated */
static readonly "IMPLEMENTATION_URL": $Attributes$Name
static readonly "IMPLEMENTATION_VENDOR": $Attributes$Name
/** @deprecated */
static readonly "IMPLEMENTATION_VENDOR_ID": $Attributes$Name
static readonly "IMPLEMENTATION_VERSION": $Attributes$Name
static readonly "MAIN_CLASS": $Attributes$Name
static readonly "MANIFEST_VERSION": $Attributes$Name
static readonly "MULTI_RELEASE": $Attributes$Name
static readonly "SEALED": $Attributes$Name
static readonly "SIGNATURE_VERSION": $Attributes$Name
static readonly "SPECIFICATION_TITLE": $Attributes$Name
static readonly "SPECIFICATION_VENDOR": $Attributes$Name
static readonly "SPECIFICATION_VERSION": $Attributes$Name

constructor(string0: string)

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Attributes$Name$$Type = ($Attributes$Name);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Attributes$Name_ = $Attributes$Name$$Type;
}
}

declare module "packages/java/util/function/$BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiConsumer$$Type<T, U> = ($BiConsumer<T, U> | ((arg0: T, arg1: U) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiConsumer_<T, U> = $BiConsumer$$Type<T, U>;
}
}

declare module "packages/java/util/$AbstractSequentialList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractSequentialList$$Type<E> = ($AbstractSequentialList<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractSequentialList_<E> = $AbstractSequentialList$$Type<E>;
}
}

declare module "packages/java/util/$Spliterator$OfDouble" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Spliterator$OfDouble$$Type = ($Spliterator$OfDouble);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Spliterator$OfDouble_ = $Spliterator$OfDouble$$Type;
}
}

declare module "packages/java/util/function/$LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongConsumer$$Type = ($LongConsumer | ((arg0: long) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongConsumer_ = $LongConsumer$$Type;
}
}

declare module "packages/java/util/function/$ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ToIntFunction$$Type<T> = ($ToIntFunction<T> | ((arg0: T) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ToIntFunction_<T> = $ToIntFunction$$Type<T>;
}
}

declare module "packages/java/util/stream/$IntStream$IntMapMultiConsumer" {
import { $IntConsumer } from "packages/java/util/function/$IntConsumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntStream$IntMapMultiConsumer$$Type = ($IntStream$IntMapMultiConsumer | ((arg0: integer, arg1: $IntConsumer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntStream$IntMapMultiConsumer_ = $IntStream$IntMapMultiConsumer$$Type;
}
}

declare module "packages/java/util/$AbstractSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractSet$$Type<E> = ($AbstractSet<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractSet_<E> = $AbstractSet$$Type<E>;
}
}

declare module "packages/java/util/function/$Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Consumer$$Type<T> = ($Consumer<T> | ((arg0: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Consumer_<T> = $Consumer$$Type<T>;
}
}

declare module "packages/java/util/function/$LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongFunction$$Type<R> = ($LongFunction<R> | ((arg0: long) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongFunction_<R> = $LongFunction$$Type<R>;
}
}

declare module "packages/java/util/$Spliterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Spliterator$$Type<T> = ($Spliterator<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Spliterator_<T> = $Spliterator$$Type<T>;
}
}

declare module "packages/java/util/concurrent/$Executor" {
import { $Runnable } from "packages/java/lang/$Runnable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Executor$$Type = ($Executor | ((arg0: $Runnable) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Executor_ = $Executor$$Type;
}
}

declare module "packages/java/util/concurrent/$CompletionStage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompletionStage$$Type<T> = ($CompletionStage<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompletionStage_<T> = $CompletionStage$$Type<T>;
}
}

declare module "packages/java/util/$PrimitiveIterator$OfDouble" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PrimitiveIterator$OfDouble$$Type = ($PrimitiveIterator$OfDouble);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PrimitiveIterator$OfDouble_ = $PrimitiveIterator$OfDouble$$Type;
}
}

declare module "packages/java/util/random/$RandomGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomGenerator$$Type = ($RandomGenerator | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomGenerator_ = $RandomGenerator$$Type;
}
}

declare module "packages/java/util/stream/$IntStream$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntStream$Builder$$Type = ($IntStream$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntStream$Builder_ = $IntStream$Builder$$Type;
}
}

declare module "packages/java/util/$Stack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Stack$$Type<E> = ($Stack<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Stack_<E> = $Stack$$Type<E>;
}
}

declare module "packages/java/util/concurrent/$ConcurrentMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConcurrentMap$$Type<K, V> = ($ConcurrentMap<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConcurrentMap_<K, V> = $ConcurrentMap$$Type<K, V>;
}
}

declare module "packages/java/util/$Enumeration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Enumeration$$Type<E> = ($Enumeration<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Enumeration_<E> = $Enumeration$$Type<E>;
}
}

declare module "packages/java/util/jar/$Manifest" {
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $Cloneable } from "packages/java/lang/$Cloneable"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $Attributes } from "packages/java/util/jar/$Attributes"
import { $Map } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Manifest implements $Cloneable {
constructor(manifest0: $Manifest$$Type)
constructor(inputStream0: $InputStream$$Type)
constructor()

public "clear"(): void
public "clone"(): any
public "getAttributes"(string0: string): $Attributes
public "getEntries"(): $Map<string, $Attributes>
public "getMainAttributes"(): $Attributes
public "read"(inputStream0: $InputStream$$Type): void
public "write"(outputStream0: $OutputStream$$Type): void
get "entries"(): $Map<string, $Attributes>
get "mainAttributes"(): $Attributes
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Manifest$$Type = ($Manifest);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Manifest_ = $Manifest$$Type;
}
}

declare module "packages/java/util/$EnumSet" {
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnumSet$$Type<E extends $Enum<E>> = ($EnumSet<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnumSet_<E extends $Enum<E>> = $EnumSet$$Type<E>;
}
}

declare module "packages/java/util/concurrent/atomic/$AtomicInteger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AtomicInteger$$Type = ($AtomicInteger);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AtomicInteger_ = $AtomicInteger$$Type;
}
}

declare module "packages/java/util/function/$DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleConsumer$$Type = ($DoubleConsumer | ((arg0: double) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleConsumer_ = $DoubleConsumer$$Type;
}
}

declare module "packages/java/util/concurrent/$ExecutorService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExecutorService$$Type = ($ExecutorService);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExecutorService_ = $ExecutorService$$Type;
}
}

declare module "packages/java/util/$Spliterator$OfPrimitive" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Spliterator$OfPrimitive$$Type<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> = ($Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Spliterator$OfPrimitive_<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR>> = $Spliterator$OfPrimitive$$Type<T, T_CONS, T_SPLITR>;
}
}

declare module "packages/java/util/function/$DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleToLongFunction$$Type = ($DoubleToLongFunction | ((arg0: double) => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleToLongFunction_ = $DoubleToLongFunction$$Type;
}
}

declare module "packages/java/util/regex/$Matcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Matcher$$Type = ($Matcher);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Matcher_ = $Matcher$$Type;
}
}

declare module "packages/java/util/$Map" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Map$$Type<K, V> = ($Map<K, V> | {[key: string]: V});
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Map_<K, V> = $Map$$Type<K, V>;
}
}

declare module "packages/java/util/$Calendar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Calendar$$Type = ($Calendar);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Calendar_ = $Calendar$$Type;
}
}

declare module "packages/java/util/function/$IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntFunction$$Type<R> = ($IntFunction<R> | ((arg0: integer) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntFunction_<R> = $IntFunction$$Type<R>;
}
}

declare module "packages/java/util/$LinkedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LinkedList$$Type<E> = ($LinkedList<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LinkedList_<E> = $LinkedList$$Type<E>;
}
}

declare module "packages/java/util/$HashSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HashSet$$Type<E> = ($HashSet<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HashSet_<E> = $HashSet$$Type<E>;
}
}

declare module "packages/java/util/regex/$Pattern" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pattern$$Type = ($Pattern | RegExp);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pattern_ = $Pattern$$Type;
}
}

declare module "packages/java/util/stream/$Stream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Stream$$Type<T> = ($Stream<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Stream_<T> = $Stream$$Type<T>;
}
}

declare module "packages/java/util/stream/$BaseStream" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BaseStream$$Type<T, S extends $BaseStream<T, S>> = ($BaseStream<T, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BaseStream_<T, S extends $BaseStream<T, S>> = $BaseStream$$Type<T, S>;
}
}

declare module "packages/java/util/function/$LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongSupplier$$Type = ($LongSupplier | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongSupplier_ = $LongSupplier$$Type;
}
}

declare module "packages/java/util/stream/$Collector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Collector$$Type<T, A, R> = ($Collector<T, A, R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Collector_<T, A, R> = $Collector$$Type<T, A, R>;
}
}

declare module "packages/java/util/$Locale$FilteringMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Locale$FilteringMode$$Type = ($Locale$FilteringMode | ("autoselect_filtering" | "extended_filtering" | "ignore_extended_ranges" | "map_extended_ranges" | "reject_extended_ranges"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Locale$FilteringMode_ = $Locale$FilteringMode$$Type;
}
}

declare module "packages/java/util/function/$DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoublePredicate$$Type = ($DoublePredicate | ((arg0: double) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoublePredicate_ = $DoublePredicate$$Type;
}
}

declare module "packages/java/util/$DoubleSummaryStatistics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleSummaryStatistics$$Type = ($DoubleSummaryStatistics);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleSummaryStatistics_ = $DoubleSummaryStatistics$$Type;
}
}

