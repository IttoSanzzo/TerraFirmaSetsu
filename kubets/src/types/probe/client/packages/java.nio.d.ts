declare module "packages/java/nio/channels/$SelectionKey" {
import { $Selector } from "packages/java/nio/channels/$Selector"
import { $SelectableChannel } from "packages/java/nio/channels/$SelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectionKey {
static readonly "OP_ACCEPT": integer
static readonly "OP_CONNECT": integer
static readonly "OP_READ": integer
static readonly "OP_WRITE": integer

public "attach"(object0: any): any
public "attachment"(): any
public "cancel"(): void
public "channel"(): $SelectableChannel
public "interestOps"(int0: integer): $SelectionKey
public "interestOps"(): integer
public "interestOpsAnd"(int0: integer): integer
public "interestOpsOr"(int0: integer): integer
public "isAcceptable"(): boolean
public "isConnectable"(): boolean
public "isReadable"(): boolean
public "isValid"(): boolean
public "isWritable"(): boolean
public "readyOps"(): integer
public "selector"(): $Selector
get "acceptable"(): boolean
get "connectable"(): boolean
get "readable"(): boolean
get "valid"(): boolean
get "writable"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SelectionKey$$Type = ($SelectionKey);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SelectionKey_ = $SelectionKey$$Type;
}
}

declare module "packages/java/nio/file/$CopyOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CopyOption {
}

export namespace $CopyOption {
const probejs$$marker: never
}
export abstract class $CopyOption$$Static implements $CopyOption {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CopyOption$$Type = ($CopyOption);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CopyOption_ = $CopyOption$$Type;
}
}

declare module "packages/java/nio/channels/$Pipe" {
import { $Pipe$SourceChannel } from "packages/java/nio/channels/$Pipe$SourceChannel"
import { $Pipe$SinkChannel } from "packages/java/nio/channels/$Pipe$SinkChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe {
public static "open"(): $Pipe
public "sink"(): $Pipe$SinkChannel
public "source"(): $Pipe$SourceChannel
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pipe$$Type = ($Pipe);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pipe_ = $Pipe$$Type;
}
}

declare module "packages/java/nio/file/attribute/$FileTime" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Instant, $Instant$$Type } from "packages/java/time/$Instant"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileTime implements $Comparable<$FileTime> {
public "compareTo"(fileTime0: $FileTime$$Type): integer
public static "from"(instant0: $Instant$$Type): $FileTime
public static "from"(long0: long, timeUnit1: $TimeUnit$$Type): $FileTime
public static "fromMillis"(long0: long): $FileTime
public "to"(timeUnit0: $TimeUnit$$Type): long
public "toInstant"(): $Instant
public "toMillis"(): long
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileTime$$Type = ($FileTime);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileTime_ = $FileTime$$Type;
}
}

declare module "packages/java/nio/$CharBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $Appendable } from "packages/java/lang/$Appendable"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"
import { $Readable } from "packages/java/lang/$Readable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharBuffer extends $Buffer implements $Comparable<$CharBuffer>, $Appendable, charseq, $Readable {
public static "allocate"(int0: integer): $CharBuffer
public "append"(charSequence0: charseq, int1: integer, int2: integer): $CharBuffer
public "append"(char0: character): $CharBuffer
public "asReadOnlyBuffer"(): $CharBuffer
public "charAt"(int0: integer): character
public "chars"(): $IntStream
public "clear"(): $CharBuffer
public "codePoints"(): $IntStream
public "compact"(): $CharBuffer
public static "compare"(charSequence0: charseq, charSequence1: charseq): integer
public "compareTo"(charBuffer0: $CharBuffer$$Type): integer
public "duplicate"(): $CharBuffer
public "flip"(): $CharBuffer
public "get"(): character
public "get"(int0: integer): character
public "get"(char0s: character[], int1: integer, int2: integer): $CharBuffer
public "get"(char0s: character[]): $CharBuffer
public "get"(int0: integer, char1s: character[]): $CharBuffer
public "get"(int0: integer, char1s: character[], int2: integer, int3: integer): $CharBuffer
public "isEmpty"(): boolean
public "length"(): integer
public "limit"(int0: integer): $CharBuffer
public "mark"(): $CharBuffer
public "mismatch"(charBuffer0: $CharBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $CharBuffer
public "put"(charBuffer0: $CharBuffer$$Type): $CharBuffer
public "put"(string0: string, int1: integer, int2: integer): $CharBuffer
public "put"(int0: integer, char1s: character[]): $CharBuffer
public "put"(int0: integer, char1: character): $CharBuffer
public "put"(int0: integer, char1s: character[], int2: integer, int3: integer): $CharBuffer
public "put"(char0s: character[]): $CharBuffer
public "put"(char0s: character[], int1: integer, int2: integer): $CharBuffer
public "put"(int0: integer, charBuffer1: $CharBuffer$$Type, int2: integer, int3: integer): $CharBuffer
public "put"(char0: character): $CharBuffer
public "put"(string0: string): $CharBuffer
public "read"(charBuffer0: $CharBuffer$$Type): integer
public "slice"(): $CharBuffer
public "slice"(int0: integer, int1: integer): $CharBuffer
public static "wrap"(char0s: character[], int1: integer, int2: integer): $CharBuffer
public static "wrap"(charSequence0: charseq): $CharBuffer
public static "wrap"(char0s: character[]): $CharBuffer
public static "wrap"(charSequence0: charseq, int1: integer, int2: integer): $CharBuffer
get "empty"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CharBuffer$$Type = ($CharBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CharBuffer_ = $CharBuffer$$Type;
}
}

declare module "packages/java/nio/channels/$SeekableByteChannel" {
import { $ByteChannel } from "packages/java/nio/channels/$ByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SeekableByteChannel extends $ByteChannel {
"close"(): void
"isOpen"(): boolean
"position"(long0: long): $SeekableByteChannel
"position"(): long
"read"(byteBuffer0: $ByteBuffer$$Type): integer
"size"(): long
"truncate"(long0: long): $SeekableByteChannel
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $SeekableByteChannel {
const probejs$$marker: never
}
export abstract class $SeekableByteChannel$$Static implements $SeekableByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SeekableByteChannel$$Type = ($SeekableByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SeekableByteChannel_ = $SeekableByteChannel$$Type;
}
}

declare module "packages/java/nio/$ByteOrder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteOrder$$Type = ($ByteOrder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteOrder_ = $ByteOrder$$Type;
}
}

declare module "packages/java/nio/file/$WatchEvent" {
import { $WatchEvent$Kind } from "packages/java/nio/file/$WatchEvent$Kind"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent<T> {
"context"(): T
"count"(): integer
"kind"(): $WatchEvent$Kind<T>
}

export namespace $WatchEvent {
const probejs$$marker: never
}
export abstract class $WatchEvent$$Static<T> implements $WatchEvent<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WatchEvent$$Type<T> = ($WatchEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WatchEvent_<T> = $WatchEvent$$Type<T>;
}
}

declare module "packages/java/nio/channels/$ByteChannel" {
import { $WritableByteChannel } from "packages/java/nio/channels/$WritableByteChannel"
import { $ReadableByteChannel } from "packages/java/nio/channels/$ReadableByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteChannel extends $ReadableByteChannel, $WritableByteChannel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0: $ByteBuffer$$Type): integer
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ByteChannel {
const probejs$$marker: never
}
export abstract class $ByteChannel$$Static implements $ByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteChannel$$Type = ($ByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteChannel_ = $ByteChannel$$Type;
}
}

declare module "packages/java/nio/$IntBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IntBuffer extends $Buffer implements $Comparable<$IntBuffer> {
public static "allocate"(int0: integer): $IntBuffer
public "array"(): integer[]
public "asReadOnlyBuffer"(): $IntBuffer
public "compact"(): $IntBuffer
public "compareTo"(intBuffer0: $IntBuffer$$Type): integer
public "flip"(): $IntBuffer
public "get"(int0: integer, int1s: integer[]): $IntBuffer
public "get"(): integer
public "get"(int0: integer, int1s: integer[], int2: integer, int3: integer): $IntBuffer
public "get"(int0: integer): integer
public "get"(int0s: integer[]): $IntBuffer
public "get"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
public "mismatch"(intBuffer0: $IntBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $IntBuffer
public "put"(intBuffer0: $IntBuffer$$Type): $IntBuffer
public "put"(int0s: integer[]): $IntBuffer
public "put"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
public "put"(int0: integer, intBuffer1: $IntBuffer$$Type, int2: integer, int3: integer): $IntBuffer
public "put"(int0: integer, int1s: integer[], int2: integer, int3: integer): $IntBuffer
public "put"(int0: integer, int1s: integer[]): $IntBuffer
public "put"(int0: integer): $IntBuffer
public "put"(int0: integer, int1: integer): $IntBuffer
public "slice"(): $IntBuffer
public static "wrap"(int0s: integer[]): $IntBuffer
public static "wrap"(int0s: integer[], int1: integer, int2: integer): $IntBuffer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntBuffer$$Type = ($IntBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntBuffer_ = $IntBuffer$$Type;
}
}

declare module "packages/java/nio/channels/spi/$AbstractInterruptibleChannel" {
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $InterruptibleChannel } from "packages/java/nio/channels/$InterruptibleChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {
public "close"(): void
public "isOpen"(): boolean
get "open"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractInterruptibleChannel$$Type = ($AbstractInterruptibleChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractInterruptibleChannel_ = $AbstractInterruptibleChannel$$Type;
}
}

declare module "packages/java/nio/channels/$Channel" {
import { $Closeable } from "packages/java/io/$Closeable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $Closeable {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export abstract class $Channel$$Static implements $Channel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Channel$$Type = ($Channel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Channel_ = $Channel$$Type;
}
}

declare module "packages/java/nio/file/$WatchEvent$Modifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Modifier {
"name"(): string
}

export namespace $WatchEvent$Modifier {
const probejs$$marker: never
}
export abstract class $WatchEvent$Modifier$$Static implements $WatchEvent$Modifier {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WatchEvent$Modifier$$Type = ($WatchEvent$Modifier | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WatchEvent$Modifier_ = $WatchEvent$Modifier$$Type;
}
}

declare module "packages/java/nio/file/attribute/$GroupPrincipal" {
import { $Subject$$Type } from "packages/javax/security/auth/$Subject"
import { $UserPrincipal } from "packages/java/nio/file/attribute/$UserPrincipal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GroupPrincipal extends $UserPrincipal {
"equals"(object0: any): boolean
"getName"(): string
"hashCode"(): integer
"implies"(subject0: $Subject$$Type): boolean
"toString"(): string
get "name"(): string
}

export namespace $GroupPrincipal {
const probejs$$marker: never
}
export abstract class $GroupPrincipal$$Static implements $GroupPrincipal {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GroupPrincipal$$Type = ($GroupPrincipal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GroupPrincipal_ = $GroupPrincipal$$Type;
}
}

declare module "packages/java/nio/charset/$CodingErrorAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CodingErrorAction {
static readonly "IGNORE": $CodingErrorAction
static readonly "REPLACE": $CodingErrorAction
static readonly "REPORT": $CodingErrorAction

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CodingErrorAction$$Type = ($CodingErrorAction);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CodingErrorAction_ = $CodingErrorAction$$Type;
}
}

declare module "packages/java/nio/file/$DirectoryStream" {
import { $Closeable } from "packages/java/io/$Closeable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream<T> extends $Closeable, $Iterable<T> {
"close"(): void
"forEach"(consumer0: $Consumer$$Type<T>): void
"iterator"(): $Iterator<T>
"spliterator"(): $Spliterator<T>
[Symbol.iterator](): IterableIterator<T>;
}

export namespace $DirectoryStream {
const probejs$$marker: never
}
export abstract class $DirectoryStream$$Static<T> implements $DirectoryStream<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectoryStream$$Type<T> = ($DirectoryStream<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectoryStream_<T> = $DirectoryStream$$Type<T>;
}
}

declare module "packages/java/nio/file/$WatchKey" {
import { $List } from "packages/java/util/$List"
import { $WatchEvent } from "packages/java/nio/file/$WatchEvent"
import { $Watchable } from "packages/java/nio/file/$Watchable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchKey {
"cancel"(): void
"isValid"(): boolean
"pollEvents"(): $List<$WatchEvent<any>>
"reset"(): boolean
"watchable"(): $Watchable
get "valid"(): boolean
}

export namespace $WatchKey {
const probejs$$marker: never
}
export abstract class $WatchKey$$Static implements $WatchKey {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WatchKey$$Type = ($WatchKey);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WatchKey_ = $WatchKey$$Type;
}
}

declare module "packages/java/nio/$ByteBuffer" {
import { $DoubleBuffer } from "packages/java/nio/$DoubleBuffer"
import { $FloatBuffer } from "packages/java/nio/$FloatBuffer"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ShortBuffer } from "packages/java/nio/$ShortBuffer"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $IntBuffer } from "packages/java/nio/$IntBuffer"
import { $LongBuffer } from "packages/java/nio/$LongBuffer"
import { $ByteOrder, $ByteOrder$$Type } from "packages/java/nio/$ByteOrder"
import { $CharBuffer } from "packages/java/nio/$CharBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuffer extends $Buffer implements $Comparable<$ByteBuffer> {
public "alignedSlice"(int0: integer): $ByteBuffer
public "alignmentOffset"(int0: integer, int1: integer): integer
public static "allocate"(int0: integer): $ByteBuffer
public static "allocateDirect"(int0: integer): $ByteBuffer
public "array"(): byte[]
public "asCharBuffer"(): $CharBuffer
public "asDoubleBuffer"(): $DoubleBuffer
public "asFloatBuffer"(): $FloatBuffer
public "asIntBuffer"(): $IntBuffer
public "asLongBuffer"(): $LongBuffer
public "asReadOnlyBuffer"(): $ByteBuffer
public "asShortBuffer"(): $ShortBuffer
public "compact"(): $ByteBuffer
public "compareTo"(byteBuffer0: $ByteBuffer$$Type): integer
public "get"(int0: integer, byte1s: byte[]): $ByteBuffer
public "get"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuffer
public "get"(): byte
public "get"(byte0s: byte[]): $ByteBuffer
public "get"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public "get"(int0: integer): byte
public "getChar"(int0: integer): character
public "getChar"(): character
public "getDouble"(): double
public "getDouble"(int0: integer): double
public "getFloat"(int0: integer): float
public "getFloat"(): float
public "getInt"(int0: integer): integer
public "getInt"(): integer
public "getLong"(int0: integer): long
public "getLong"(): long
public "getShort"(int0: integer): short
public "getShort"(): short
public "mark"(): $ByteBuffer
public "mismatch"(byteBuffer0: $ByteBuffer$$Type): integer
public "order"(): $ByteOrder
public "order"(byteOrder0: $ByteOrder$$Type): $ByteBuffer
public "position"(int0: integer): $ByteBuffer
public "put"(int0: integer, byte1: byte): $ByteBuffer
public "put"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public "put"(int0: integer, byteBuffer1: $ByteBuffer$$Type, int2: integer, int3: integer): $ByteBuffer
public "put"(byteBuffer0: $ByteBuffer$$Type): $ByteBuffer
public "put"(byte0s: byte[]): $ByteBuffer
public "put"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuffer
public "put"(byte0: byte): $ByteBuffer
public "put"(int0: integer, byte1s: byte[]): $ByteBuffer
public "putChar"(char0: character): $ByteBuffer
public "putChar"(int0: integer, char1: character): $ByteBuffer
public "putDouble"(double0: double): $ByteBuffer
public "putDouble"(int0: integer, double1: double): $ByteBuffer
public "putFloat"(int0: integer, float1: float): $ByteBuffer
public "putFloat"(float0: float): $ByteBuffer
public "putInt"(int0: integer, int1: integer): $ByteBuffer
public "putInt"(int0: integer): $ByteBuffer
public "putLong"(int0: integer, long1: long): $ByteBuffer
public "putLong"(long0: long): $ByteBuffer
public "putShort"(short0: short): $ByteBuffer
public "putShort"(int0: integer, short1: short): $ByteBuffer
public "reset"(): $ByteBuffer
public "rewind"(): $ByteBuffer
public static "wrap"(byte0s: byte[], int1: integer, int2: integer): $ByteBuffer
public static "wrap"(byte0s: byte[]): $ByteBuffer
get "char"(): character
get "double"(): double
get "float"(): float
get "int"(): integer
get "long"(): long
get "short"(): short
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteBuffer$$Type = ($ByteBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteBuffer_ = $ByteBuffer$$Type;
}
}

declare module "packages/java/nio/channels/$MulticastChannel" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Set } from "packages/java/util/$Set"
import { $NetworkChannel } from "packages/java/nio/channels/$NetworkChannel"
import { $NetworkInterface$$Type } from "packages/java/net/$NetworkInterface"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"
import { $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $MembershipKey } from "packages/java/nio/channels/$MembershipKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MulticastChannel extends $NetworkChannel {
"bind"(socketAddress0: $SocketAddress$$Type): $NetworkChannel
"close"(): void
"getLocalAddress"(): $SocketAddress
"getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
"isOpen"(): boolean
"join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type): $MembershipKey
"join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type, inetAddress2: $InetAddress$$Type): $MembershipKey
"setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $NetworkChannel
"supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $MulticastChannel {
const probejs$$marker: never
}
export abstract class $MulticastChannel$$Static implements $MulticastChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MulticastChannel$$Type = ($MulticastChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MulticastChannel_ = $MulticastChannel$$Type;
}
}

declare module "packages/java/nio/channels/$FileChannel" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $OpenOption$$Type } from "packages/java/nio/file/$OpenOption"
import { $AbstractInterruptibleChannel } from "packages/java/nio/channels/spi/$AbstractInterruptibleChannel"
import { $SeekableByteChannel } from "packages/java/nio/channels/$SeekableByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $ScatteringByteChannel } from "packages/java/nio/channels/$ScatteringByteChannel"
import { $WritableByteChannel$$Type } from "packages/java/nio/channels/$WritableByteChannel"
import { $FileChannel$MapMode$$Type } from "packages/java/nio/channels/$FileChannel$MapMode"
import { $Set$$Type } from "packages/java/util/$Set"
import { $ReadableByteChannel$$Type } from "packages/java/nio/channels/$ReadableByteChannel"
import { $GatheringByteChannel } from "packages/java/nio/channels/$GatheringByteChannel"
import { $MappedByteBuffer } from "packages/java/nio/$MappedByteBuffer"
import { $FileLock } from "packages/java/nio/channels/$FileLock"
import { $FileAttribute$$Type } from "packages/java/nio/file/attribute/$FileAttribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel, $GatheringByteChannel, $ScatteringByteChannel {
public "force"(boolean0: boolean): void
public "lock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "lock"(): $FileLock
public "map"(mapMode0: $FileChannel$MapMode$$Type, long1: long, long2: long): $MappedByteBuffer
public static "open"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $FileChannel
public static "open"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $FileChannel
public "position"(): long
public "position"(long0: long): $FileChannel
public "read"(byteBuffer0: $ByteBuffer$$Type, long1: long): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "size"(): long
public "transferFrom"(readableByteChannel0: $ReadableByteChannel$$Type, long1: long, long2: long): long
public "transferTo"(long0: long, long1: long, writableByteChannel2: $WritableByteChannel$$Type): long
public "truncate"(long0: long): $FileChannel
public "tryLock"(): $FileLock
public "tryLock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "write"(byteBuffer0: $ByteBuffer$$Type, long1: long): integer
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileChannel$$Type = ($FileChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileChannel_ = $FileChannel$$Type;
}
}

declare module "packages/java/nio/file/$Watchable" {
import { $WatchKey } from "packages/java/nio/file/$WatchKey"
import { $WatchEvent$Kind$$Type } from "packages/java/nio/file/$WatchEvent$Kind"
import { $WatchService$$Type } from "packages/java/nio/file/$WatchService"
import { $WatchEvent$Modifier$$Type } from "packages/java/nio/file/$WatchEvent$Modifier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Watchable {
"register"(watchService0: $WatchService$$Type, kind1s: $WatchEvent$Kind$$Type<any>[], ...modifier2s: $WatchEvent$Modifier$$Type[]): $WatchKey
"register"(watchService0: $WatchService$$Type, ...kind1s: $WatchEvent$Kind$$Type<any>[]): $WatchKey
}

export namespace $Watchable {
const probejs$$marker: never
}
export abstract class $Watchable$$Static implements $Watchable {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Watchable$$Type = ($Watchable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Watchable_ = $Watchable$$Type;
}
}

declare module "packages/java/nio/charset/$CharsetEncoder" {
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $CodingErrorAction, $CodingErrorAction$$Type } from "packages/java/nio/charset/$CodingErrorAction"
import { $CharBuffer$$Type } from "packages/java/nio/$CharBuffer"
import { $Charset } from "packages/java/nio/charset/$Charset"
import { $CoderResult } from "packages/java/nio/charset/$CoderResult"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetEncoder {
public "averageBytesPerChar"(): float
public "canEncode"(charSequence0: charseq): boolean
public "canEncode"(char0: character): boolean
public "charset"(): $Charset
public "encode"(charBuffer0: $CharBuffer$$Type): $ByteBuffer
public "encode"(charBuffer0: $CharBuffer$$Type, byteBuffer1: $ByteBuffer$$Type, boolean2: boolean): $CoderResult
public "flush"(byteBuffer0: $ByteBuffer$$Type): $CoderResult
public "isLegalReplacement"(byte0s: byte[]): boolean
public "malformedInputAction"(): $CodingErrorAction
public "maxBytesPerChar"(): float
public "onMalformedInput"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetEncoder
public "onUnmappableCharacter"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetEncoder
public "replaceWith"(byte0s: byte[]): $CharsetEncoder
public "replacement"(): byte[]
public "reset"(): $CharsetEncoder
public "unmappableCharacterAction"(): $CodingErrorAction
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CharsetEncoder$$Type = ($CharsetEncoder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CharsetEncoder_ = $CharsetEncoder$$Type;
}
}

declare module "packages/java/nio/channels/$InterruptibleChannel" {
import { $Channel } from "packages/java/nio/channels/$Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $InterruptibleChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $InterruptibleChannel {
const probejs$$marker: never
}
export abstract class $InterruptibleChannel$$Static implements $InterruptibleChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterruptibleChannel$$Type = ($InterruptibleChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterruptibleChannel_ = $InterruptibleChannel$$Type;
}
}

declare module "packages/java/nio/file/$Path" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $FileSystem } from "packages/java/nio/file/$FileSystem"
import { $WatchEvent$Kind$$Type } from "packages/java/nio/file/$WatchEvent$Kind"
import { $WatchService$$Type } from "packages/java/nio/file/$WatchService"
import { $WatchEvent$Modifier$$Type } from "packages/java/nio/file/$WatchEvent$Modifier"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Watchable } from "packages/java/nio/file/$Watchable"
import { $WatchKey } from "packages/java/nio/file/$WatchKey"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $File } from "packages/java/io/$File"
import { $URI, $URI$$Type } from "packages/java/net/$URI"
import { $Iterator } from "packages/java/util/$Iterator"
import { $LinkOption$$Type } from "packages/java/nio/file/$LinkOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Path extends $Comparable<$Path>, $Iterable<$Path>, $Watchable {
"compareTo"(path0: $Path$$Type): integer
"endsWith"(path0: $Path$$Type): boolean
"endsWith"(string0: string): boolean
"equals"(object0: any): boolean
"forEach"(consumer0: $Consumer$$Type<$Path$$Type>): void
"getFileName"(): $Path
"getFileSystem"(): $FileSystem
"getName"(int0: integer): $Path
"getNameCount"(): integer
"getParent"(): $Path
"getRoot"(): $Path
"hashCode"(): integer
"isAbsolute"(): boolean
"iterator"(): $Iterator<$Path>
"normalize"(): $Path
"register"(watchService0: $WatchService$$Type, kind1s: $WatchEvent$Kind$$Type<any>[], ...modifier2s: $WatchEvent$Modifier$$Type[]): $WatchKey
"register"(watchService0: $WatchService$$Type, ...kind1s: $WatchEvent$Kind$$Type<any>[]): $WatchKey
"relativize"(path0: $Path$$Type): $Path
"resolve"(string0: string): $Path
"resolve"(path0: $Path$$Type): $Path
"resolveSibling"(path0: $Path$$Type): $Path
"resolveSibling"(string0: string): $Path
"spliterator"(): $Spliterator<$Path>
"startsWith"(path0: $Path$$Type): boolean
"startsWith"(string0: string): boolean
"subpath"(int0: integer, int1: integer): $Path
"toAbsolutePath"(): $Path
"toFile"(): $File
"toRealPath"(...linkOption0s: $LinkOption$$Type[]): $Path
"toString"(): string
"toUri"(): $URI
[Symbol.iterator](): IterableIterator<$Path>;
get "fileName"(): $Path
get "fileSystem"(): $FileSystem
get "nameCount"(): integer
get "parent"(): $Path
get "root"(): $Path
get "absolute"(): boolean
}

export namespace $Path {
function of(string0: string, ...string1s: string[]): $Path
function of(uRI0: $URI$$Type): $Path
}
export abstract class $Path$$Static implements $Path {
static "of"(string0: string, ...string1s: string[]): $Path
static "of"(uRI0: $URI$$Type): $Path
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Path$$Type = ($Path);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Path_ = $Path$$Type;
}
}

declare module "packages/java/nio/file/attribute/$BasicFileAttributes" {
import { $FileTime } from "packages/java/nio/file/attribute/$FileTime"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $BasicFileAttributes {
"creationTime"(): $FileTime
"fileKey"(): any
"isDirectory"(): boolean
"isOther"(): boolean
"isRegularFile"(): boolean
"isSymbolicLink"(): boolean
"lastAccessTime"(): $FileTime
"lastModifiedTime"(): $FileTime
"size"(): long
get "directory"(): boolean
get "other"(): boolean
get "regularFile"(): boolean
get "symbolicLink"(): boolean
}

export namespace $BasicFileAttributes {
const probejs$$marker: never
}
export abstract class $BasicFileAttributes$$Static implements $BasicFileAttributes {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BasicFileAttributes$$Type = ($BasicFileAttributes);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BasicFileAttributes_ = $BasicFileAttributes$$Type;
}
}

declare module "packages/java/nio/channels/$FileChannel$MapMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileChannel$MapMode {
static readonly "PRIVATE": $FileChannel$MapMode
static readonly "READ_ONLY": $FileChannel$MapMode
static readonly "READ_WRITE": $FileChannel$MapMode

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileChannel$MapMode$$Type = ($FileChannel$MapMode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileChannel$MapMode_ = $FileChannel$MapMode$$Type;
}
}

declare module "packages/java/nio/file/$FileStore" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $FileStoreAttributeView, $FileStoreAttributeView$$Type } from "packages/java/nio/file/attribute/$FileStoreAttributeView"
import { $FileAttributeView$$Type } from "packages/java/nio/file/attribute/$FileAttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileStore {
public "getAttribute"(string0: string): any
public "getBlockSize"(): long
public "getFileStoreAttributeView"<V extends $FileStoreAttributeView>(class0: $Class$$Type<V>): V
public "getTotalSpace"(): long
public "getUnallocatedSpace"(): long
public "getUsableSpace"(): long
public "isReadOnly"(): boolean
public "name"(): string
public "supportsFileAttributeView"(class0: $Class$$Type<$FileAttributeView$$Type>): boolean
public "supportsFileAttributeView"(string0: string): boolean
public "type"(): string
get "blockSize"(): long
get "totalSpace"(): long
get "unallocatedSpace"(): long
get "usableSpace"(): long
get "readOnly"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileStore$$Type = ($FileStore);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileStore_ = $FileStore$$Type;
}
}

declare module "packages/java/nio/channels/$ServerSocketChannel" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $ServerSocket } from "packages/java/net/$ServerSocket"
import { $Set } from "packages/java/util/$Set"
import { $NetworkChannel } from "packages/java/nio/channels/$NetworkChannel"
import { $ProtocolFamily$$Type } from "packages/java/net/$ProtocolFamily"
import { $SocketChannel } from "packages/java/nio/channels/$SocketChannel"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"
import { $AbstractSelectableChannel } from "packages/java/nio/channels/spi/$AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel {
public "accept"(): $SocketChannel
public "bind"(socketAddress0: $SocketAddress$$Type, int1: integer): $ServerSocketChannel
public "close"(): void
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "isOpen"(): boolean
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $ServerSocketChannel
public static "open"(): $ServerSocketChannel
public "socket"(): $ServerSocket
public "supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerSocketChannel$$Type = ($ServerSocketChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerSocketChannel_ = $ServerSocketChannel$$Type;
}
}

declare module "packages/java/nio/$ShortBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ShortBuffer extends $Buffer implements $Comparable<$ShortBuffer> {
public static "allocate"(int0: integer): $ShortBuffer
public "array"(): short[]
public "asReadOnlyBuffer"(): $ShortBuffer
public "compact"(): $ShortBuffer
public "compareTo"(shortBuffer0: $ShortBuffer$$Type): integer
public "flip"(): $ShortBuffer
public "get"(int0: integer, short1s: short[]): $ShortBuffer
public "get"(): short
public "get"(int0: integer, short1s: short[], int2: integer, int3: integer): $ShortBuffer
public "get"(int0: integer): short
public "get"(short0s: short[]): $ShortBuffer
public "get"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
public "mismatch"(shortBuffer0: $ShortBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $ShortBuffer
public "put"(shortBuffer0: $ShortBuffer$$Type): $ShortBuffer
public "put"(short0s: short[]): $ShortBuffer
public "put"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
public "put"(int0: integer, shortBuffer1: $ShortBuffer$$Type, int2: integer, int3: integer): $ShortBuffer
public "put"(int0: integer, short1s: short[], int2: integer, int3: integer): $ShortBuffer
public "put"(int0: integer, short1s: short[]): $ShortBuffer
public "put"(short0: short): $ShortBuffer
public "put"(int0: integer, short1: short): $ShortBuffer
public "slice"(): $ShortBuffer
public static "wrap"(short0s: short[]): $ShortBuffer
public static "wrap"(short0s: short[], int1: integer, int2: integer): $ShortBuffer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShortBuffer$$Type = ($ShortBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShortBuffer_ = $ShortBuffer$$Type;
}
}

declare module "packages/java/nio/channels/$WritableByteChannel" {
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WritableByteChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $WritableByteChannel {
const probejs$$marker: never
}
export abstract class $WritableByteChannel$$Static implements $WritableByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WritableByteChannel$$Type = ($WritableByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WritableByteChannel_ = $WritableByteChannel$$Type;
}
}

declare module "packages/java/nio/channels/$SocketChannel" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $ByteChannel } from "packages/java/nio/channels/$ByteChannel"
import { $Set } from "packages/java/util/$Set"
import { $GatheringByteChannel } from "packages/java/nio/channels/$GatheringByteChannel"
import { $NetworkChannel } from "packages/java/nio/channels/$NetworkChannel"
import { $ProtocolFamily$$Type } from "packages/java/net/$ProtocolFamily"
import { $Socket } from "packages/java/net/$Socket"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"
import { $ScatteringByteChannel } from "packages/java/nio/channels/$ScatteringByteChannel"
import { $AbstractSelectableChannel } from "packages/java/nio/channels/spi/$AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $NetworkChannel {
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): boolean
public "finishConnect"(): boolean
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getRemoteAddress"(): $SocketAddress
public "isConnected"(): boolean
public "isConnectionPending"(): boolean
public "isOpen"(): boolean
public static "open"(socketAddress0: $SocketAddress$$Type): $SocketChannel
public static "open"(): $SocketChannel
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $SocketChannel
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "shutdownInput"(): $SocketChannel
public "shutdownOutput"(): $SocketChannel
public "socket"(): $Socket
public "supportedOptions"(): $Set<$SocketOption<any>>
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
get "connected"(): boolean
get "connectionPending"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SocketChannel$$Type = ($SocketChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SocketChannel_ = $SocketChannel$$Type;
}
}

declare module "packages/java/nio/channels/$GatheringByteChannel" {
import { $WritableByteChannel } from "packages/java/nio/channels/$WritableByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GatheringByteChannel extends $WritableByteChannel {
"close"(): void
"isOpen"(): boolean
"write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
"write"(byteBuffer0s: $ByteBuffer$$Type[]): long
"write"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $GatheringByteChannel {
const probejs$$marker: never
}
export abstract class $GatheringByteChannel$$Static implements $GatheringByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GatheringByteChannel$$Type = ($GatheringByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GatheringByteChannel_ = $GatheringByteChannel$$Type;
}
}

declare module "packages/java/nio/channels/$FileLock" {
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $FileChannel } from "packages/java/nio/channels/$FileChannel"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileLock implements $AutoCloseable {
public "acquiredBy"(): $Channel
public "channel"(): $FileChannel
public "close"(): void
public "isShared"(): boolean
public "isValid"(): boolean
public "overlaps"(long0: long, long1: long): boolean
public "position"(): long
public "release"(): void
public "size"(): long
get "shared"(): boolean
get "valid"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileLock$$Type = ($FileLock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileLock_ = $FileLock$$Type;
}
}

declare module "packages/java/nio/channels/$AsynchronousFileChannel" {
import { $ExecutorService$$Type } from "packages/java/util/concurrent/$ExecutorService"
import { $AsynchronousChannel } from "packages/java/nio/channels/$AsynchronousChannel"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CompletionHandler$$Type } from "packages/java/nio/channels/$CompletionHandler"
import { $OpenOption$$Type } from "packages/java/nio/file/$OpenOption"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Future } from "packages/java/util/concurrent/$Future"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $FileLock, $FileLock$$Type } from "packages/java/nio/channels/$FileLock"
import { $FileAttribute$$Type } from "packages/java/nio/file/attribute/$FileAttribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AsynchronousFileChannel implements $AsynchronousChannel {
public "close"(): void
public "force"(boolean0: boolean): void
public "isOpen"(): boolean
public "lock"<A>(a0: A, completionHandler1: $CompletionHandler$$Type<$FileLock$$Type, A>): void
public "lock"<A>(long0: long, long1: long, boolean2: boolean, a3: A, completionHandler4: $CompletionHandler$$Type<$FileLock$$Type, A>): void
public "lock"(): $Future<$FileLock>
public "lock"(long0: long, long1: long, boolean2: boolean): $Future<$FileLock>
public static "open"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, executorService2: $ExecutorService$$Type, ...fileAttribute3s: $FileAttribute$$Type<any>[]): $AsynchronousFileChannel
public static "open"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $AsynchronousFileChannel
public "read"(byteBuffer0: $ByteBuffer$$Type, long1: long): $Future<integer>
public "read"<A>(byteBuffer0: $ByteBuffer$$Type, long1: long, a2: A, completionHandler3: $CompletionHandler$$Type<integer, A>): void
public "size"(): long
public "truncate"(long0: long): $AsynchronousFileChannel
public "tryLock"(long0: long, long1: long, boolean2: boolean): $FileLock
public "tryLock"(): $FileLock
public "write"<A>(byteBuffer0: $ByteBuffer$$Type, long1: long, a2: A, completionHandler3: $CompletionHandler$$Type<integer, A>): void
public "write"(byteBuffer0: $ByteBuffer$$Type, long1: long): $Future<integer>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AsynchronousFileChannel$$Type = ($AsynchronousFileChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AsynchronousFileChannel_ = $AsynchronousFileChannel$$Type;
}
}

declare module "packages/java/nio/channels/$MembershipKey" {
import { $MulticastChannel } from "packages/java/nio/channels/$MulticastChannel"
import { $NetworkInterface } from "packages/java/net/$NetworkInterface"
import { $InetAddress, $InetAddress$$Type } from "packages/java/net/$InetAddress"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MembershipKey {
public "block"(inetAddress0: $InetAddress$$Type): $MembershipKey
public "channel"(): $MulticastChannel
public "drop"(): void
public "group"(): $InetAddress
public "isValid"(): boolean
public "networkInterface"(): $NetworkInterface
public "sourceAddress"(): $InetAddress
public "unblock"(inetAddress0: $InetAddress$$Type): $MembershipKey
get "valid"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MembershipKey$$Type = ($MembershipKey);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MembershipKey_ = $MembershipKey$$Type;
}
}

declare module "packages/java/nio/file/spi/$FileSystemProvider" {
import { $ExecutorService$$Type } from "packages/java/util/concurrent/$ExecutorService"
import { $FileSystem } from "packages/java/nio/file/$FileSystem"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $OpenOption$$Type } from "packages/java/nio/file/$OpenOption"
import { $OutputStream } from "packages/java/io/$OutputStream"
import { $AccessMode$$Type } from "packages/java/nio/file/$AccessMode"
import { $AsynchronousFileChannel } from "packages/java/nio/channels/$AsynchronousFileChannel"
import { $SeekableByteChannel } from "packages/java/nio/channels/$SeekableByteChannel"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $DirectoryStream } from "packages/java/nio/file/$DirectoryStream"
import { $FileAttributeView, $FileAttributeView$$Type } from "packages/java/nio/file/attribute/$FileAttributeView"
import { $BasicFileAttributes, $BasicFileAttributes$$Type } from "packages/java/nio/file/attribute/$BasicFileAttributes"
import { $CopyOption$$Type } from "packages/java/nio/file/$CopyOption"
import { $FileStore } from "packages/java/nio/file/$FileStore"
import { $DirectoryStream$Filter$$Type } from "packages/java/nio/file/$DirectoryStream$Filter"
import { $Set$$Type } from "packages/java/util/$Set"
import { $FileChannel } from "packages/java/nio/channels/$FileChannel"
import { $List } from "packages/java/util/$List"
import { $InputStream } from "packages/java/io/$InputStream"
import { $URI$$Type } from "packages/java/net/$URI"
import { $FileAttribute$$Type } from "packages/java/nio/file/attribute/$FileAttribute"
import { $LinkOption$$Type } from "packages/java/nio/file/$LinkOption"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystemProvider {
public "checkAccess"(path0: $Path$$Type, ...accessMode1s: $AccessMode$$Type[]): void
public "copy"(path0: $Path$$Type, path1: $Path$$Type, ...copyOption2s: $CopyOption$$Type[]): void
public "createDirectory"(path0: $Path$$Type, ...fileAttribute1s: $FileAttribute$$Type<any>[]): void
public "createLink"(path0: $Path$$Type, path1: $Path$$Type): void
public "createSymbolicLink"(path0: $Path$$Type, path1: $Path$$Type, ...fileAttribute2s: $FileAttribute$$Type<any>[]): void
public "delete"(path0: $Path$$Type): void
public "deleteIfExists"(path0: $Path$$Type): boolean
public "getFileAttributeView"<V extends $FileAttributeView>(path0: $Path$$Type, class1: $Class$$Type<V>, ...linkOption2s: $LinkOption$$Type[]): V
public "getFileStore"(path0: $Path$$Type): $FileStore
public "getFileSystem"(uRI0: $URI$$Type): $FileSystem
public "getPath"(uRI0: $URI$$Type): $Path
public "getScheme"(): string
public static "installedProviders"(): $List<$FileSystemProvider>
public "isHidden"(path0: $Path$$Type): boolean
public "isSameFile"(path0: $Path$$Type, path1: $Path$$Type): boolean
public "move"(path0: $Path$$Type, path1: $Path$$Type, ...copyOption2s: $CopyOption$$Type[]): void
public "newAsynchronousFileChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, executorService2: $ExecutorService$$Type, ...fileAttribute3s: $FileAttribute$$Type<any>[]): $AsynchronousFileChannel
public "newByteChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $SeekableByteChannel
public "newDirectoryStream"(path0: $Path$$Type, filter1: $DirectoryStream$Filter$$Type<$Path$$Type>): $DirectoryStream<$Path>
public "newFileChannel"(path0: $Path$$Type, set1: $Set$$Type<$OpenOption$$Type>, ...fileAttribute2s: $FileAttribute$$Type<any>[]): $FileChannel
public "newFileSystem"(uRI0: $URI$$Type, map1: $Map$$Type<string, any>): $FileSystem
public "newFileSystem"(path0: $Path$$Type, map1: $Map$$Type<string, any>): $FileSystem
public "newInputStream"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $InputStream
public "newOutputStream"(path0: $Path$$Type, ...openOption1s: $OpenOption$$Type[]): $OutputStream
public "readAttributes"<A extends $BasicFileAttributes>(path0: $Path$$Type, class1: $Class$$Type<A>, ...linkOption2s: $LinkOption$$Type[]): A
public "readAttributes"(path0: $Path$$Type, string1: string, ...linkOption2s: $LinkOption$$Type[]): $Map<string, any>
public "readSymbolicLink"(path0: $Path$$Type): $Path
public "setAttribute"(path0: $Path$$Type, string1: string, object2: any, ...linkOption3s: $LinkOption$$Type[]): void
get "scheme"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileSystemProvider$$Type = ($FileSystemProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileSystemProvider_ = $FileSystemProvider$$Type;
}
}

declare module "packages/java/nio/file/$OpenOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OpenOption {
}

export namespace $OpenOption {
const probejs$$marker: never
}
export abstract class $OpenOption$$Static implements $OpenOption {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OpenOption$$Type = ($OpenOption);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OpenOption_ = $OpenOption$$Type;
}
}

declare module "packages/java/nio/file/$LinkOption" {
import { $CopyOption } from "packages/java/nio/file/$CopyOption"
import { $OpenOption } from "packages/java/nio/file/$OpenOption"
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LinkOption extends $Enum<$LinkOption> implements $OpenOption, $CopyOption {
static readonly "NOFOLLOW_LINKS": $LinkOption

public static "valueOf"(string0: string): $LinkOption
public static "values"(): $LinkOption[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LinkOption$$Type = ($LinkOption | ("nofollow_links"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LinkOption_ = $LinkOption$$Type;
}
}

declare module "packages/java/nio/$DoubleBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DoubleBuffer extends $Buffer implements $Comparable<$DoubleBuffer> {
public static "allocate"(int0: integer): $DoubleBuffer
public "array"(): double[]
public "asReadOnlyBuffer"(): $DoubleBuffer
public "compact"(): $DoubleBuffer
public "compareTo"(doubleBuffer0: $DoubleBuffer$$Type): integer
public "flip"(): $DoubleBuffer
public "get"(int0: integer, double1s: double[]): $DoubleBuffer
public "get"(): double
public "get"(int0: integer, double1s: double[], int2: integer, int3: integer): $DoubleBuffer
public "get"(int0: integer): double
public "get"(double0s: double[]): $DoubleBuffer
public "get"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
public "mismatch"(doubleBuffer0: $DoubleBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $DoubleBuffer
public "put"(doubleBuffer0: $DoubleBuffer$$Type): $DoubleBuffer
public "put"(double0s: double[]): $DoubleBuffer
public "put"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
public "put"(int0: integer, doubleBuffer1: $DoubleBuffer$$Type, int2: integer, int3: integer): $DoubleBuffer
public "put"(int0: integer, double1s: double[], int2: integer, int3: integer): $DoubleBuffer
public "put"(int0: integer, double1s: double[]): $DoubleBuffer
public "put"(double0: double): $DoubleBuffer
public "put"(int0: integer, double1: double): $DoubleBuffer
public "slice"(): $DoubleBuffer
public static "wrap"(double0s: double[]): $DoubleBuffer
public static "wrap"(double0s: double[], int1: integer, int2: integer): $DoubleBuffer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleBuffer$$Type = ($DoubleBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleBuffer_ = $DoubleBuffer$$Type;
}
}

declare module "packages/java/nio/file/attribute/$FileStoreAttributeView" {
import { $AttributeView } from "packages/java/nio/file/attribute/$AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileStoreAttributeView extends $AttributeView {
"name"(): string
}

export namespace $FileStoreAttributeView {
const probejs$$marker: never
}
export abstract class $FileStoreAttributeView$$Static implements $FileStoreAttributeView {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileStoreAttributeView$$Type = ($FileStoreAttributeView | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileStoreAttributeView_ = $FileStoreAttributeView$$Type;
}
}

declare module "packages/java/nio/file/$AccessMode" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AccessMode extends $Enum<$AccessMode> {
static readonly "EXECUTE": $AccessMode
static readonly "READ": $AccessMode
static readonly "WRITE": $AccessMode

public static "valueOf"(string0: string): $AccessMode
public static "values"(): $AccessMode[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessMode$$Type = ($AccessMode | ("read" | "write" | "execute"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessMode_ = $AccessMode$$Type;
}
}

declare module "packages/java/nio/file/$FileSystem" {
import { $FileStore } from "packages/java/nio/file/$FileStore"
import { $Path } from "packages/java/nio/file/$Path"
import { $Closeable } from "packages/java/io/$Closeable"
import { $FileSystemProvider } from "packages/java/nio/file/spi/$FileSystemProvider"
import { $Set } from "packages/java/util/$Set"
import { $WatchService } from "packages/java/nio/file/$WatchService"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $PathMatcher } from "packages/java/nio/file/$PathMatcher"
import { $UserPrincipalLookupService } from "packages/java/nio/file/attribute/$UserPrincipalLookupService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FileSystem implements $Closeable {
public "close"(): void
public "getFileStores"(): $Iterable<$FileStore>
public "getPath"(string0: string, ...string1s: string[]): $Path
public "getPathMatcher"(string0: string): $PathMatcher
public "getRootDirectories"(): $Iterable<$Path>
public "getSeparator"(): string
public "getUserPrincipalLookupService"(): $UserPrincipalLookupService
public "isOpen"(): boolean
public "isReadOnly"(): boolean
public "newWatchService"(): $WatchService
public "provider"(): $FileSystemProvider
public "supportedFileAttributeViews"(): $Set<string>
get "fileStores"(): $Iterable<$FileStore>
get "rootDirectories"(): $Iterable<$Path>
get "separator"(): string
get "userPrincipalLookupService"(): $UserPrincipalLookupService
get "open"(): boolean
get "readOnly"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileSystem$$Type = ($FileSystem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileSystem_ = $FileSystem$$Type;
}
}

declare module "packages/java/nio/channels/$DatagramChannel" {
import { $ByteChannel } from "packages/java/nio/channels/$ByteChannel"
import { $MulticastChannel } from "packages/java/nio/channels/$MulticastChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $ScatteringByteChannel } from "packages/java/nio/channels/$ScatteringByteChannel"
import { $MembershipKey } from "packages/java/nio/channels/$MembershipKey"
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Set } from "packages/java/util/$Set"
import { $GatheringByteChannel } from "packages/java/nio/channels/$GatheringByteChannel"
import { $ProtocolFamily$$Type } from "packages/java/net/$ProtocolFamily"
import { $NetworkInterface$$Type } from "packages/java/net/$NetworkInterface"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"
import { $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $DatagramSocket } from "packages/java/net/$DatagramSocket"
import { $AbstractSelectableChannel } from "packages/java/nio/channels/spi/$AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $MulticastChannel {
public "close"(): void
public "connect"(socketAddress0: $SocketAddress$$Type): $DatagramChannel
public "disconnect"(): $DatagramChannel
public "getLocalAddress"(): $SocketAddress
public "getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
public "getRemoteAddress"(): $SocketAddress
public "isConnected"(): boolean
public "isOpen"(): boolean
public "join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type): $MembershipKey
public "join"(inetAddress0: $InetAddress$$Type, networkInterface1: $NetworkInterface$$Type, inetAddress2: $InetAddress$$Type): $MembershipKey
public static "open"(protocolFamily0: $ProtocolFamily$$Type): $DatagramChannel
public static "open"(): $DatagramChannel
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "receive"(byteBuffer0: $ByteBuffer$$Type): $SocketAddress
public "send"(byteBuffer0: $ByteBuffer$$Type, socketAddress1: $SocketAddress$$Type): integer
public "setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $DatagramChannel
public "socket"(): $DatagramSocket
public "supportedOptions"(): $Set<$SocketOption<any>>
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
get "localAddress"(): $SocketAddress
get "remoteAddress"(): $SocketAddress
get "connected"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DatagramChannel$$Type = ($DatagramChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DatagramChannel_ = $DatagramChannel$$Type;
}
}

declare module "packages/java/nio/channels/$ScatteringByteChannel" {
import { $ReadableByteChannel } from "packages/java/nio/channels/$ReadableByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScatteringByteChannel extends $ReadableByteChannel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
"read"(byteBuffer0s: $ByteBuffer$$Type[]): long
"read"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ScatteringByteChannel {
const probejs$$marker: never
}
export abstract class $ScatteringByteChannel$$Static implements $ScatteringByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScatteringByteChannel$$Type = ($ScatteringByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScatteringByteChannel_ = $ScatteringByteChannel$$Type;
}
}

declare module "packages/java/nio/$FloatBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FloatBuffer extends $Buffer implements $Comparable<$FloatBuffer> {
public static "allocate"(int0: integer): $FloatBuffer
public "array"(): float[]
public "asReadOnlyBuffer"(): $FloatBuffer
public "compact"(): $FloatBuffer
public "compareTo"(floatBuffer0: $FloatBuffer$$Type): integer
public "flip"(): $FloatBuffer
public "get"(int0: integer, float1s: float[]): $FloatBuffer
public "get"(): float
public "get"(int0: integer, float1s: float[], int2: integer, int3: integer): $FloatBuffer
public "get"(int0: integer): float
public "get"(float0s: float[]): $FloatBuffer
public "get"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
public "mismatch"(floatBuffer0: $FloatBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $FloatBuffer
public "put"(floatBuffer0: $FloatBuffer$$Type): $FloatBuffer
public "put"(float0s: float[]): $FloatBuffer
public "put"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
public "put"(int0: integer, floatBuffer1: $FloatBuffer$$Type, int2: integer, int3: integer): $FloatBuffer
public "put"(int0: integer, float1s: float[], int2: integer, int3: integer): $FloatBuffer
public "put"(int0: integer, float1s: float[]): $FloatBuffer
public "put"(float0: float): $FloatBuffer
public "put"(int0: integer, float1: float): $FloatBuffer
public "slice"(): $FloatBuffer
public static "wrap"(float0s: float[]): $FloatBuffer
public static "wrap"(float0s: float[], int1: integer, int2: integer): $FloatBuffer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FloatBuffer$$Type = ($FloatBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FloatBuffer_ = $FloatBuffer$$Type;
}
}

declare module "packages/java/nio/channels/spi/$SelectorProvider" {
import { $DatagramChannel } from "packages/java/nio/channels/$DatagramChannel"
import { $Pipe } from "packages/java/nio/channels/$Pipe"
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $ServerSocketChannel } from "packages/java/nio/channels/$ServerSocketChannel"
import { $ProtocolFamily$$Type } from "packages/java/net/$ProtocolFamily"
import { $SocketChannel } from "packages/java/nio/channels/$SocketChannel"
import { $AbstractSelector } from "packages/java/nio/channels/spi/$AbstractSelector"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectorProvider {
public "inheritedChannel"(): $Channel
public "openDatagramChannel"(protocolFamily0: $ProtocolFamily$$Type): $DatagramChannel
public "openDatagramChannel"(): $DatagramChannel
public "openPipe"(): $Pipe
public "openSelector"(): $AbstractSelector
public "openServerSocketChannel"(protocolFamily0: $ProtocolFamily$$Type): $ServerSocketChannel
public "openServerSocketChannel"(): $ServerSocketChannel
public "openSocketChannel"(protocolFamily0: $ProtocolFamily$$Type): $SocketChannel
public "openSocketChannel"(): $SocketChannel
public static "provider"(): $SelectorProvider
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SelectorProvider$$Type = ($SelectorProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SelectorProvider_ = $SelectorProvider$$Type;
}
}

declare module "packages/java/nio/$Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Buffer {
public "array"(): any
public "arrayOffset"(): integer
public "capacity"(): integer
public "clear"(): $Buffer
public "duplicate"(): $Buffer
public "flip"(): $Buffer
public "hasArray"(): boolean
public "hasRemaining"(): boolean
public "isDirect"(): boolean
public "isReadOnly"(): boolean
public "limit"(int0: integer): $Buffer
public "limit"(): integer
public "mark"(): $Buffer
public "position"(int0: integer): $Buffer
public "position"(): integer
public "remaining"(): integer
public "reset"(): $Buffer
public "rewind"(): $Buffer
public "slice"(int0: integer, int1: integer): $Buffer
public "slice"(): $Buffer
get "direct"(): boolean
get "readOnly"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Buffer$$Type = ($Buffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Buffer_ = $Buffer$$Type;
}
}

declare module "packages/java/nio/file/attribute/$UserPrincipal" {
import { $Subject$$Type } from "packages/javax/security/auth/$Subject"
import { $Principal } from "packages/java/security/$Principal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $UserPrincipal extends $Principal {
"equals"(object0: any): boolean
"getName"(): string
"hashCode"(): integer
"implies"(subject0: $Subject$$Type): boolean
"toString"(): string
get "name"(): string
}

export namespace $UserPrincipal {
const probejs$$marker: never
}
export abstract class $UserPrincipal$$Static implements $UserPrincipal {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserPrincipal$$Type = ($UserPrincipal);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserPrincipal_ = $UserPrincipal$$Type;
}
}

declare module "packages/java/nio/channels/$NetworkChannel" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $Set } from "packages/java/util/$Set"
import { $SocketOption, $SocketOption$$Type } from "packages/java/net/$SocketOption"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $NetworkChannel extends $Channel {
"bind"(socketAddress0: $SocketAddress$$Type): $NetworkChannel
"close"(): void
"getLocalAddress"(): $SocketAddress
"getOption"<T>(socketOption0: $SocketOption$$Type<T>): T
"isOpen"(): boolean
"setOption"<T>(socketOption0: $SocketOption$$Type<T>, t1: T): $NetworkChannel
"supportedOptions"(): $Set<$SocketOption<any>>
get "localAddress"(): $SocketAddress
get "open"(): boolean
}

export namespace $NetworkChannel {
const probejs$$marker: never
}
export abstract class $NetworkChannel$$Static implements $NetworkChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NetworkChannel$$Type = ($NetworkChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NetworkChannel_ = $NetworkChannel$$Type;
}
}

declare module "packages/java/nio/channels/$CompletionHandler" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $CompletionHandler<V, A> {
"completed"(v0: V, a1: A): void
"failed"(throwable0: $Throwable$$Type, a1: A): void
}

export namespace $CompletionHandler {
const probejs$$marker: never
}
export abstract class $CompletionHandler$$Static<V, A> implements $CompletionHandler<V, A> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompletionHandler$$Type<V, A> = ($CompletionHandler<V, A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompletionHandler_<V, A> = $CompletionHandler$$Type<V, A>;
}
}

declare module "packages/java/nio/charset/$CharsetDecoder" {
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $CodingErrorAction, $CodingErrorAction$$Type } from "packages/java/nio/charset/$CodingErrorAction"
import { $CharBuffer, $CharBuffer$$Type } from "packages/java/nio/$CharBuffer"
import { $Charset } from "packages/java/nio/charset/$Charset"
import { $CoderResult } from "packages/java/nio/charset/$CoderResult"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CharsetDecoder {
public "averageCharsPerByte"(): float
public "charset"(): $Charset
public "decode"(byteBuffer0: $ByteBuffer$$Type): $CharBuffer
public "decode"(byteBuffer0: $ByteBuffer$$Type, charBuffer1: $CharBuffer$$Type, boolean2: boolean): $CoderResult
public "detectedCharset"(): $Charset
public "flush"(charBuffer0: $CharBuffer$$Type): $CoderResult
public "isAutoDetecting"(): boolean
public "isCharsetDetected"(): boolean
public "malformedInputAction"(): $CodingErrorAction
public "maxCharsPerByte"(): float
public "onMalformedInput"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetDecoder
public "onUnmappableCharacter"(codingErrorAction0: $CodingErrorAction$$Type): $CharsetDecoder
public "replaceWith"(string0: string): $CharsetDecoder
public "replacement"(): string
public "reset"(): $CharsetDecoder
public "unmappableCharacterAction"(): $CodingErrorAction
get "autoDetecting"(): boolean
get "charsetDetected"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CharsetDecoder$$Type = ($CharsetDecoder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CharsetDecoder_ = $CharsetDecoder$$Type;
}
}

declare module "packages/java/nio/file/$WatchEvent$Kind" {
import { $Class } from "packages/java/lang/$Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchEvent$Kind<T> {
"name"(): string
"type"(): $Class<T>
}

export namespace $WatchEvent$Kind {
const probejs$$marker: never
}
export abstract class $WatchEvent$Kind$$Static<T> implements $WatchEvent$Kind<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WatchEvent$Kind$$Type<T> = ($WatchEvent$Kind<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WatchEvent$Kind_<T> = $WatchEvent$Kind$$Type<T>;
}
}

declare module "packages/java/nio/channels/$ReadableByteChannel" {
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReadableByteChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
"read"(byteBuffer0: $ByteBuffer$$Type): integer
get "open"(): boolean
}

export namespace $ReadableByteChannel {
const probejs$$marker: never
}
export abstract class $ReadableByteChannel$$Static implements $ReadableByteChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReadableByteChannel$$Type = ($ReadableByteChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReadableByteChannel_ = $ReadableByteChannel$$Type;
}
}

declare module "packages/java/nio/channels/$AsynchronousChannel" {
import { $Channel } from "packages/java/nio/channels/$Channel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AsynchronousChannel extends $Channel {
"close"(): void
"isOpen"(): boolean
get "open"(): boolean
}

export namespace $AsynchronousChannel {
const probejs$$marker: never
}
export abstract class $AsynchronousChannel$$Static implements $AsynchronousChannel {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AsynchronousChannel$$Type = ($AsynchronousChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AsynchronousChannel_ = $AsynchronousChannel$$Type;
}
}

declare module "packages/java/nio/$MappedByteBuffer" {
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MappedByteBuffer extends $ByteBuffer {
public "compact"(): $MappedByteBuffer
public "duplicate"(): $MappedByteBuffer
public "force"(): $MappedByteBuffer
public "force"(int0: integer, int1: integer): $MappedByteBuffer
public "isLoaded"(): boolean
public "load"(): $MappedByteBuffer
public "rewind"(): $MappedByteBuffer
get "loaded"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MappedByteBuffer$$Type = ($MappedByteBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MappedByteBuffer_ = $MappedByteBuffer$$Type;
}
}

declare module "packages/java/nio/file/attribute/$FileAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttribute<T> {
"name"(): string
"value"(): T
}

export namespace $FileAttribute {
const probejs$$marker: never
}
export abstract class $FileAttribute$$Static<T> implements $FileAttribute<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileAttribute$$Type<T> = ($FileAttribute<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileAttribute_<T> = $FileAttribute$$Type<T>;
}
}

declare module "packages/java/nio/file/attribute/$UserPrincipalLookupService" {
import { $UserPrincipal } from "packages/java/nio/file/attribute/$UserPrincipal"
import { $GroupPrincipal } from "packages/java/nio/file/attribute/$GroupPrincipal"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $UserPrincipalLookupService {
public "lookupPrincipalByGroupName"(string0: string): $GroupPrincipal
public "lookupPrincipalByName"(string0: string): $UserPrincipal
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserPrincipalLookupService$$Type = ($UserPrincipalLookupService);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserPrincipalLookupService_ = $UserPrincipalLookupService$$Type;
}
}

declare module "packages/java/nio/file/$PathMatcher" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $PathMatcher {
"matches"(path0: $Path$$Type): boolean
}

export namespace $PathMatcher {
const probejs$$marker: never
}
export abstract class $PathMatcher$$Static implements $PathMatcher {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PathMatcher$$Type = ($PathMatcher | ((arg0: $Path) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PathMatcher_ = $PathMatcher$$Type;
}
}

declare module "packages/java/nio/channels/spi/$AbstractSelectableChannel" {
import { $SelectableChannel } from "packages/java/nio/channels/$SelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelectableChannel extends $SelectableChannel {
public "close"(): void
public "isOpen"(): boolean
get "open"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractSelectableChannel$$Type = ($AbstractSelectableChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractSelectableChannel_ = $AbstractSelectableChannel$$Type;
}
}

declare module "packages/java/nio/$LongBuffer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Buffer } from "packages/java/nio/$Buffer"
import { $ByteOrder } from "packages/java/nio/$ByteOrder"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LongBuffer extends $Buffer implements $Comparable<$LongBuffer> {
public static "allocate"(int0: integer): $LongBuffer
public "array"(): long[]
public "asReadOnlyBuffer"(): $LongBuffer
public "compact"(): $LongBuffer
public "compareTo"(longBuffer0: $LongBuffer$$Type): integer
public "flip"(): $LongBuffer
public "get"(int0: integer, long1s: long[]): $LongBuffer
public "get"(): long
public "get"(int0: integer, long1s: long[], int2: integer, int3: integer): $LongBuffer
public "get"(int0: integer): long
public "get"(long0s: long[]): $LongBuffer
public "get"(long0s: long[], int1: integer, int2: integer): $LongBuffer
public "mismatch"(longBuffer0: $LongBuffer$$Type): integer
public "order"(): $ByteOrder
public "position"(int0: integer): $LongBuffer
public "put"(longBuffer0: $LongBuffer$$Type): $LongBuffer
public "put"(long0s: long[]): $LongBuffer
public "put"(long0s: long[], int1: integer, int2: integer): $LongBuffer
public "put"(int0: integer, longBuffer1: $LongBuffer$$Type, int2: integer, int3: integer): $LongBuffer
public "put"(int0: integer, long1s: long[], int2: integer, int3: integer): $LongBuffer
public "put"(int0: integer, long1s: long[]): $LongBuffer
public "put"(long0: long): $LongBuffer
public "put"(int0: integer, long1: long): $LongBuffer
public "slice"(): $LongBuffer
public static "wrap"(long0s: long[]): $LongBuffer
public static "wrap"(long0s: long[], int1: integer, int2: integer): $LongBuffer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LongBuffer$$Type = ($LongBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LongBuffer_ = $LongBuffer$$Type;
}
}

declare module "packages/java/nio/charset/$CoderResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CoderResult {
static readonly "OVERFLOW": $CoderResult
static readonly "UNDERFLOW": $CoderResult

public "isError"(): boolean
public "isMalformed"(): boolean
public "isOverflow"(): boolean
public "isUnderflow"(): boolean
public "isUnmappable"(): boolean
public "length"(): integer
public static "malformedForLength"(int0: integer): $CoderResult
public "throwException"(): void
public static "unmappableForLength"(int0: integer): $CoderResult
get "error"(): boolean
get "malformed"(): boolean
get "overflow"(): boolean
get "underflow"(): boolean
get "unmappable"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CoderResult$$Type = ($CoderResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CoderResult_ = $CoderResult$$Type;
}
}

declare module "packages/java/nio/channels/$Pipe$SinkChannel" {
import { $WritableByteChannel } from "packages/java/nio/channels/$WritableByteChannel"
import { $GatheringByteChannel } from "packages/java/nio/channels/$GatheringByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $AbstractSelectableChannel } from "packages/java/nio/channels/spi/$AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel, $GatheringByteChannel {
public "close"(): void
public "isOpen"(): boolean
public "write"(byteBuffer0: $ByteBuffer$$Type): integer
public "write"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "write"(byteBuffer0s: $ByteBuffer$$Type[]): long
get "open"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pipe$SinkChannel$$Type = ($Pipe$SinkChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pipe$SinkChannel_ = $Pipe$SinkChannel$$Type;
}
}

declare module "packages/java/nio/file/$WatchService" {
import { $WatchKey } from "packages/java/nio/file/$WatchKey"
import { $Closeable } from "packages/java/io/$Closeable"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $WatchService extends $Closeable {
"close"(): void
"poll"(long0: long, timeUnit1: $TimeUnit$$Type): $WatchKey
"poll"(): $WatchKey
"take"(): $WatchKey
}

export namespace $WatchService {
const probejs$$marker: never
}
export abstract class $WatchService$$Static implements $WatchService {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WatchService$$Type = ($WatchService);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WatchService_ = $WatchService$$Type;
}
}

declare module "packages/java/nio/channels/$Selector" {
import { $SelectorProvider } from "packages/java/nio/channels/spi/$SelectorProvider"
import { $Closeable } from "packages/java/io/$Closeable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $SelectionKey, $SelectionKey$$Type } from "packages/java/nio/channels/$SelectionKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Selector implements $Closeable {
public "close"(): void
public "isOpen"(): boolean
public "keys"(): $Set<$SelectionKey>
public static "open"(): $Selector
public "provider"(): $SelectorProvider
public "select"(): integer
public "select"(long0: long): integer
public "select"(consumer0: $Consumer$$Type<$SelectionKey$$Type>, long1: long): integer
public "select"(consumer0: $Consumer$$Type<$SelectionKey$$Type>): integer
public "selectNow"(consumer0: $Consumer$$Type<$SelectionKey$$Type>): integer
public "selectNow"(): integer
public "selectedKeys"(): $Set<$SelectionKey>
public "wakeup"(): $Selector
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Selector$$Type = ($Selector);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Selector_ = $Selector$$Type;
}
}

declare module "packages/java/nio/channels/$SelectableChannel" {
import { $SelectorProvider } from "packages/java/nio/channels/spi/$SelectorProvider"
import { $Channel } from "packages/java/nio/channels/$Channel"
import { $AbstractInterruptibleChannel } from "packages/java/nio/channels/spi/$AbstractInterruptibleChannel"
import { $Selector$$Type } from "packages/java/nio/channels/$Selector"
import { $SelectionKey } from "packages/java/nio/channels/$SelectionKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SelectableChannel extends $AbstractInterruptibleChannel implements $Channel {
public "blockingLock"(): any
public "close"(): void
public "configureBlocking"(boolean0: boolean): $SelectableChannel
public "isBlocking"(): boolean
public "isOpen"(): boolean
public "isRegistered"(): boolean
public "keyFor"(selector0: $Selector$$Type): $SelectionKey
public "provider"(): $SelectorProvider
public "register"(selector0: $Selector$$Type, int1: integer, object2: any): $SelectionKey
public "register"(selector0: $Selector$$Type, int1: integer): $SelectionKey
public "validOps"(): integer
get "blocking"(): boolean
get "open"(): boolean
get "registered"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SelectableChannel$$Type = ($SelectableChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SelectableChannel_ = $SelectableChannel$$Type;
}
}

declare module "packages/java/nio/file/attribute/$FileAttributeView" {
import { $AttributeView } from "packages/java/nio/file/attribute/$AttributeView"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $FileAttributeView extends $AttributeView {
"name"(): string
}

export namespace $FileAttributeView {
const probejs$$marker: never
}
export abstract class $FileAttributeView$$Static implements $FileAttributeView {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileAttributeView$$Type = ($FileAttributeView | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileAttributeView_ = $FileAttributeView$$Type;
}
}

declare module "packages/java/nio/file/$DirectoryStream$Filter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $DirectoryStream$Filter<T> {
"accept"(t0: T): boolean
}

export namespace $DirectoryStream$Filter {
const probejs$$marker: never
}
export abstract class $DirectoryStream$Filter$$Static<T> implements $DirectoryStream$Filter<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DirectoryStream$Filter$$Type<T> = ($DirectoryStream$Filter<T> | ((arg0: T) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DirectoryStream$Filter_<T> = $DirectoryStream$Filter$$Type<T>;
}
}

declare module "packages/java/nio/channels/$Pipe$SourceChannel" {
import { $ReadableByteChannel } from "packages/java/nio/channels/$ReadableByteChannel"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $ScatteringByteChannel } from "packages/java/nio/channels/$ScatteringByteChannel"
import { $AbstractSelectableChannel } from "packages/java/nio/channels/spi/$AbstractSelectableChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel, $ScatteringByteChannel {
public "close"(): void
public "isOpen"(): boolean
public "read"(byteBuffer0: $ByteBuffer$$Type): integer
public "read"(byteBuffer0s: $ByteBuffer$$Type[], int1: integer, int2: integer): long
public "read"(byteBuffer0s: $ByteBuffer$$Type[]): long
get "open"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pipe$SourceChannel$$Type = ($Pipe$SourceChannel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pipe$SourceChannel_ = $Pipe$SourceChannel$$Type;
}
}

declare module "packages/java/nio/channels/spi/$AbstractSelector" {
import { $Selector } from "packages/java/nio/channels/$Selector"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractSelector extends $Selector {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractSelector$$Type = ($AbstractSelector);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractSelector_ = $AbstractSelector$$Type;
}
}

declare module "packages/java/nio/file/attribute/$AttributeView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeView {
"name"(): string
}

export namespace $AttributeView {
const probejs$$marker: never
}
export abstract class $AttributeView$$Static implements $AttributeView {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeView$$Type = ($AttributeView | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeView_ = $AttributeView$$Type;
}
}

declare module "packages/java/nio/charset/$Charset" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $CharsetEncoder } from "packages/java/nio/charset/$CharsetEncoder"
import { $Set } from "packages/java/util/$Set"
import { $SortedMap } from "packages/java/util/$SortedMap"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $CharsetDecoder } from "packages/java/nio/charset/$CharsetDecoder"
import { $CharBuffer, $CharBuffer$$Type } from "packages/java/nio/$CharBuffer"
import { $Locale$$Type } from "packages/java/util/$Locale"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Charset implements $Comparable<$Charset> {
public "aliases"(): $Set<string>
public static "availableCharsets"(): $SortedMap<string, $Charset>
public "canEncode"(): boolean
public "compareTo"(charset0: $Charset$$Type): integer
public "contains"(charset0: $Charset$$Type): boolean
public "decode"(byteBuffer0: $ByteBuffer$$Type): $CharBuffer
public static "defaultCharset"(): $Charset
public "displayName"(): string
public "displayName"(locale0: $Locale$$Type): string
public "encode"(string0: string): $ByteBuffer
public "encode"(charBuffer0: $CharBuffer$$Type): $ByteBuffer
public static "forName"(string0: string): $Charset
public "isRegistered"(): boolean
public static "isSupported"(string0: string): boolean
public "name"(): string
public "newDecoder"(): $CharsetDecoder
public "newEncoder"(): $CharsetEncoder
get "registered"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Charset$$Type = ($Charset);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Charset_ = $Charset$$Type;
}
}

