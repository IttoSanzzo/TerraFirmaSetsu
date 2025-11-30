declare module "packages/io/netty/channel/$MessageSizeEstimator" {
import { $MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type } from "packages/io/netty/channel/$MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {
"newHandle"(): $MessageSizeEstimator$Handle
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
export abstract class $MessageSizeEstimator$$Static implements $MessageSizeEstimator {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MessageSizeEstimator$$Type = ($MessageSizeEstimator | (() => $MessageSizeEstimator$Handle$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MessageSizeEstimator_ = $MessageSizeEstimator$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$ScheduledFuture" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Future, $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $ScheduledFuture as $ScheduledFuture$0 } from "packages/java/util/concurrent/$ScheduledFuture"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Delayed$$Type } from "packages/java/util/concurrent/$Delayed"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V> extends $Future<V>, $ScheduledFuture$0<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"await"(long0: long): boolean
"await"(): $Future<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $Future<V>
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"compareTo"(delayed0: $Delayed$$Type): integer
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getDelay"(timeUnit0: $TimeUnit$$Type): long
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"sync"(): $Future<V>
"syncUninterruptibly"(): $Future<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export abstract class $ScheduledFuture$$Static<V> implements $ScheduledFuture<V> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<V>;
}
}

declare module "packages/io/netty/util/$Attribute" {
import { $AttributeKey } from "packages/io/netty/util/$AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T> {
"compareAndSet"(t0: T, t1: T): boolean
"get"(): T
/** @deprecated */
"getAndRemove"(): T
"getAndSet"(t0: T): T
"key"(): $AttributeKey<T>
/** @deprecated */
"remove"(): void
"set"(t0: T): void
"setIfAbsent"(t0: T): T
get "andRemove"(): T
set "ifAbsent"(value: T)
}

export namespace $Attribute {
const probejs$$marker: never
}
export abstract class $Attribute$$Static<T> implements $Attribute<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Attribute$$Type<T> = ($Attribute<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Attribute_<T> = $Attribute$$Type<T>;
}
}

declare module "packages/io/netty/channel/$RecvByteBufAllocator$Handle" {
import { $ByteBuf } from "packages/io/netty/buffer/$ByteBuf"
import { $ByteBufAllocator$$Type } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $ChannelConfig$$Type } from "packages/io/netty/channel/$ChannelConfig"

/**
 * @deprecated
 * 
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {
"allocate"(byteBufAllocator0: $ByteBufAllocator$$Type): $ByteBuf
"attemptedBytesRead"(): integer
"attemptedBytesRead"(int0: integer): void
"continueReading"(): boolean
"guess"(): integer
"incMessagesRead"(int0: integer): void
"lastBytesRead"(): integer
"lastBytesRead"(int0: integer): void
"readComplete"(): void
"reset"(channelConfig0: $ChannelConfig$$Type): void
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
export abstract class $RecvByteBufAllocator$Handle$$Static implements $RecvByteBufAllocator$Handle {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecvByteBufAllocator$Handle_ = $RecvByteBufAllocator$Handle$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$GenericFutureListener" {
import { $EventListener } from "packages/java/util/$EventListener"
import { $Future, $Future$$Type } from "packages/io/netty/util/concurrent/$Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<any>> extends $EventListener {
"operationComplete"(f0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
export abstract class $GenericFutureListener$$Static<F extends $Future<any>> implements $GenericFutureListener<F> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenericFutureListener$$Type<F extends $Future<any>> = ($GenericFutureListener<F> | ((arg0: F) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenericFutureListener_<F extends $Future<any>> = $GenericFutureListener$$Type<F>;
}
}

declare module "packages/io/netty/buffer/$CompositeByteBuf" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ByteBuf, $ByteBuf$$Type } from "packages/io/netty/buffer/$ByteBuf"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $ByteBufAllocator$$Type } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $List } from "packages/java/util/$List"
import { $AbstractReferenceCountedByteBuf } from "packages/io/netty/buffer/$AbstractReferenceCountedByteBuf"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Iterable, $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<$ByteBuf> {
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer)
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer, ...byteBuf3s: $ByteBuf$$Type[])
constructor(byteBufAllocator0: $ByteBufAllocator$$Type, boolean1: boolean, int2: integer, iterable3: $Iterable$$Type<$ByteBuf$$Type>)

public "addComponent"(boolean0: boolean, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(byteBuf0: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(boolean0: boolean, int1: integer, byteBuf2: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(int0: integer, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponents"(boolean0: boolean, iterable1: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(boolean0: boolean, ...byteBuf1s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addComponents"(int0: integer, ...byteBuf1s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addComponents"(int0: integer, iterable1: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(iterable0: $Iterable$$Type<$ByteBuf$$Type>): $CompositeByteBuf
public "addComponents"(...byteBuf0s: $ByteBuf$$Type[]): $CompositeByteBuf
public "addFlattenedComponents"(boolean0: boolean, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "capacity"(int0: integer): $CompositeByteBuf
public "component"(int0: integer): $ByteBuf
public "componentAtOffset"(int0: integer): $ByteBuf
public "consolidate"(int0: integer, int1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "decompose"(int0: integer, int1: integer): $List<$ByteBuf>
public "discardReadBytes"(): $CompositeByteBuf
public "discardReadComponents"(): $CompositeByteBuf
public "discardSomeReadBytes"(): $CompositeByteBuf
public "forEach"(consumer0: $Consumer$$Type<$ByteBuf$$Type>): void
public "getBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $CompositeByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $CompositeByteBuf
public "getBytes"(int0: integer, byte1s: byte[]): $CompositeByteBuf
public "getBytes"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $CompositeByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $CompositeByteBuf
public "getBytes"(int0: integer, outputStream1: $OutputStream$$Type, int2: integer): $CompositeByteBuf
public "internalComponent"(int0: integer): $ByteBuf
public "internalComponentAtOffset"(int0: integer): $ByteBuf
public "iterator"(): $Iterator<$ByteBuf>
public "markWriterIndex"(): $CompositeByteBuf
public "maxNumComponents"(): integer
public "numComponents"(): integer
public "readBytes"(byteBuffer0: $ByteBuffer$$Type): $CompositeByteBuf
public "readBytes"(byte0s: byte[], int1: integer, int2: integer): $CompositeByteBuf
public "readBytes"(byte0s: byte[]): $CompositeByteBuf
public "readBytes"(outputStream0: $OutputStream$$Type, int1: integer): $CompositeByteBuf
public "removeComponent"(int0: integer): $CompositeByteBuf
public "removeComponents"(int0: integer, int1: integer): $CompositeByteBuf
public "resetWriterIndex"(): $CompositeByteBuf
public "retain"(): $CompositeByteBuf
public "setBoolean"(int0: integer, boolean1: boolean): $CompositeByteBuf
public "setByte"(int0: integer, int1: integer): $CompositeByteBuf
public "setBytes"(int0: integer, byte1s: byte[]): $CompositeByteBuf
public "setBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $CompositeByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $CompositeByteBuf
public "setDouble"(int0: integer, double1: double): $CompositeByteBuf
public "setFloat"(int0: integer, float1: float): $CompositeByteBuf
public "setIndex"(int0: integer, int1: integer): $CompositeByteBuf
public "setMedium"(int0: integer, int1: integer): $CompositeByteBuf
public "setShort"(int0: integer, int1: integer): $CompositeByteBuf
public "setZero"(int0: integer, int1: integer): $CompositeByteBuf
public "skipBytes"(int0: integer): $CompositeByteBuf
public "spliterator"(): $Spliterator<$ByteBuf>
public "toByteIndex"(int0: integer): integer
public "toComponentIndex"(int0: integer): integer
public "touch"(): $CompositeByteBuf
public "writeBytes"(byteBuf0: $ByteBuf$$Type): $CompositeByteBuf
public "writeChar"(int0: integer): $CompositeByteBuf
public "writeDouble"(double0: double): $CompositeByteBuf
public "writeFloat"(float0: float): $CompositeByteBuf
public "writeMedium"(int0: integer): $CompositeByteBuf
[Symbol.iterator](): IterableIterator<$ByteBuf>;
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompositeByteBuf_ = $CompositeByteBuf$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelOutboundBuffer" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"
import { $ChannelOutboundBuffer$MessageProcessor$$Type } from "packages/io/netty/channel/$ChannelOutboundBuffer$MessageProcessor"
import { $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {
public "addFlush"(): void
public "addMessage"(object0: any, int1: integer, channelPromise2: $ChannelPromise$$Type): void
public "bytesBeforeUnwritable"(): long
public "bytesBeforeWritable"(): long
public "current"(): any
public "currentProgress"(): long
public "forEachFlushedMessage"(messageProcessor0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "getUserDefinedWritability"(int0: integer): boolean
public "isEmpty"(): boolean
public "isWritable"(): boolean
public "nioBufferCount"(): integer
public "nioBufferSize"(): long
public "nioBuffers"(int0: integer, long1: long): $ByteBuffer[]
public "nioBuffers"(): $ByteBuffer[]
public "progress"(long0: long): void
/** @deprecated */
public "recycle"(): void
public "remove"(): boolean
public "remove"(throwable0: $Throwable$$Type): boolean
public "removeBytes"(long0: long): void
public "setUserDefinedWritability"(int0: integer, boolean1: boolean): void
public "size"(): integer
public "totalPendingWriteBytes"(): long
get "empty"(): boolean
get "writable"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelOutboundBuffer_ = $ChannelOutboundBuffer$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelInboundHandler" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelHandlerContext$$Type } from "packages/io/netty/channel/$ChannelHandlerContext"
import { $ChannelHandler } from "packages/io/netty/channel/$ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {
"channelActive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelInactive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelRead"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
"channelReadComplete"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelRegistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelUnregistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"channelWritabilityChanged"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
"handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"userEventTriggered"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
export abstract class $ChannelInboundHandler$$Static implements $ChannelInboundHandler {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelInboundHandler_ = $ChannelInboundHandler$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$SingleThreadEventExecutor" {
import { $OrderedEventExecutor } from "packages/io/netty/util/concurrent/$OrderedEventExecutor"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AbstractScheduledEventExecutor } from "packages/io/netty/util/concurrent/$AbstractScheduledEventExecutor"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $ThreadProperties } from "packages/io/netty/util/concurrent/$ThreadProperties"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {
public "addShutdownHook"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(): boolean
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
public "newProgressivePromise"<V>(): $ProgressivePromise<V>
public "newPromise"<V>(): $Promise<V>
public "newSucceededFuture"<V>(v0: V): $Future<V>
public "next"(): $EventExecutor
public "parent"(): $EventExecutorGroup
public "pendingTasks"(): integer
public "removeShutdownHook"(runnable0: $Runnable$$Type): void
public "spliterator"(): $Spliterator<$EventExecutor>
public "threadProperties"(): $ThreadProperties
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SingleThreadEventExecutor_ = $SingleThreadEventExecutor$$Type;
}
}

declare module "packages/io/netty/buffer/$AbstractByteBuf" {
import { $ByteBuf } from "packages/io/netty/buffer/$ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {
public "refCnt"(): integer
public "release"(int0: integer): boolean
public "release"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractByteBuf_ = $AbstractByteBuf$$Type;
}
}

declare module "packages/io/netty/channel/epoll/$EpollEventLoopGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $MultithreadEventLoopGroup } from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutorChooserFactory$$Type } from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SelectStrategyFactory$$Type } from "packages/io/netty/channel/$SelectStrategyFactory"
import { $List } from "packages/java/util/$List"
import { $RejectedExecutionHandler$$Type } from "packages/io/netty/util/concurrent/$RejectedExecutionHandler"
import { $ThreadFactory$$Type } from "packages/java/util/concurrent/$ThreadFactory"
import { $EventLoopTaskQueueFactory$$Type } from "packages/io/netty/channel/$EventLoopTaskQueueFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, selectStrategyFactory2: $SelectStrategyFactory$$Type)
/** @deprecated */
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, int2: integer, selectStrategyFactory3: $SelectStrategyFactory$$Type)
/** @deprecated */
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, int2: integer)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory5: $EventLoopTaskQueueFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type, rejectedExecutionHandler4: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory5: $EventLoopTaskQueueFactory$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type)
constructor(int0: integer, selectStrategyFactory1: $SelectStrategyFactory$$Type)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer)
constructor()
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectStrategyFactory2: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "setIoRatio"(int0: integer): void
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
set "ioRatio"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EpollEventLoopGroup$$Type = ($EpollEventLoopGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EpollEventLoopGroup_ = $EpollEventLoopGroup$$Type;
}
}

declare module "packages/io/netty/channel/$EventLoopTaskQueueFactory" {
import { $Queue, $Queue$$Type } from "packages/java/util/$Queue"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {
"newTaskQueue"(int0: integer): $Queue<$Runnable>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
export abstract class $EventLoopTaskQueueFactory$$Static implements $EventLoopTaskQueueFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventLoopTaskQueueFactory$$Type = ($EventLoopTaskQueueFactory | ((arg0: integer) => $Queue$$Type<$Runnable$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventLoopTaskQueueFactory_ = $EventLoopTaskQueueFactory$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelPromise" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelPromise
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelPromise
"await"(): $ChannelPromise
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ChannelPromise
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"get"(): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelPromise
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelPromise
"setFailure"(throwable0: $Throwable$$Type): $ChannelPromise
"setSuccess"(void0: void): $ChannelPromise
"setSuccess"(): $ChannelPromise
"setSuccess"(void0: void): $Promise<void>
"setUncancellable"(): boolean
"sync"(): $ChannelPromise
"syncUninterruptibly"(): $ChannelPromise
"tryFailure"(throwable0: $Throwable$$Type): boolean
"trySuccess"(): boolean
"trySuccess"(void0: void): boolean
"unvoid"(): $ChannelPromise
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
set "success"(value: void)
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
export abstract class $ChannelPromise$$Static implements $ChannelPromise {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelPromise$$Type = ($ChannelPromise);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelPromise_ = $ChannelPromise$$Type;
}
}

declare module "packages/io/netty/channel/$Channel$Unsafe" {
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $ChannelOutboundBuffer } from "packages/io/netty/channel/$ChannelOutboundBuffer"
import { $EventLoop$$Type } from "packages/io/netty/channel/$EventLoop"
import { $RecvByteBufAllocator$Handle } from "packages/io/netty/channel/$RecvByteBufAllocator$Handle"
import { $ChannelPromise, $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {
"beginRead"(): void
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): void
"close"(channelPromise0: $ChannelPromise$$Type): void
"closeForcibly"(): void
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): void
"deregister"(channelPromise0: $ChannelPromise$$Type): void
"disconnect"(channelPromise0: $ChannelPromise$$Type): void
"flush"(): void
"localAddress"(): $SocketAddress
"outboundBuffer"(): $ChannelOutboundBuffer
"recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
"register"(eventLoop0: $EventLoop$$Type, channelPromise1: $ChannelPromise$$Type): void
"remoteAddress"(): $SocketAddress
"voidPromise"(): $ChannelPromise
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): void
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
export abstract class $Channel$Unsafe$$Static implements $Channel$Unsafe {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Channel$Unsafe_ = $Channel$Unsafe$$Type;
}
}

declare module "packages/io/netty/util/$Constant" {
import { $Comparable } from "packages/java/lang/$Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<T>> extends $Comparable<T> {
"compareTo"(t0: T): integer
"id"(): integer
"name"(): string
}

export namespace $Constant {
const probejs$$marker: never
}
export abstract class $Constant$$Static<T extends $Constant<T>> implements $Constant<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Constant$$Type<T extends $Constant<T>> = ($Constant<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Constant_<T extends $Constant<T>> = $Constant$$Type<T>;
}
}

declare module "packages/io/netty/channel/nio/$NioEventLoopGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $MultithreadEventLoopGroup } from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutorChooserFactory$$Type } from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory"
import { $SelectorProvider$$Type } from "packages/java/nio/channels/spi/$SelectorProvider"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $SelectStrategyFactory$$Type } from "packages/io/netty/channel/$SelectStrategyFactory"
import { $List } from "packages/java/util/$List"
import { $RejectedExecutionHandler$$Type } from "packages/io/netty/util/concurrent/$RejectedExecutionHandler"
import { $ThreadFactory$$Type } from "packages/java/util/concurrent/$ThreadFactory"
import { $EventLoopTaskQueueFactory$$Type } from "packages/io/netty/channel/$EventLoopTaskQueueFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, selectorProvider2: $SelectorProvider$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, selectorProvider2: $SelectorProvider$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectorProvider2: $SelectorProvider$$Type, selectStrategyFactory3: $SelectStrategyFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type)
constructor(int0: integer, executor1: $Executor$$Type, eventExecutorChooserFactory2: $EventExecutorChooserFactory$$Type, selectorProvider3: $SelectorProvider$$Type, selectStrategyFactory4: $SelectStrategyFactory$$Type, rejectedExecutionHandler5: $RejectedExecutionHandler$$Type, eventLoopTaskQueueFactory6: $EventLoopTaskQueueFactory$$Type, eventLoopTaskQueueFactory7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(int0: integer)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type, selectorProvider2: $SelectorProvider$$Type)
constructor(int0: integer, executor1: $Executor$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "rebuildSelectors"(): void
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "setIoRatio"(int0: integer): void
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
set "ioRatio"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NioEventLoopGroup_ = $NioEventLoopGroup$$Type;
}
}

declare module "packages/io/netty/channel/$MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {
"size"(object0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
export abstract class $MessageSizeEstimator$Handle$$Static implements $MessageSizeEstimator$Handle {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MessageSizeEstimator$Handle$$Type = ($MessageSizeEstimator$Handle | ((arg0: any) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MessageSizeEstimator$Handle_ = $MessageSizeEstimator$Handle$$Type;
}
}

declare module "packages/io/netty/buffer/$AbstractReferenceCountedByteBuf" {
import { $AbstractByteBuf } from "packages/io/netty/buffer/$AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractReferenceCountedByteBuf_ = $AbstractReferenceCountedByteBuf$$Type;
}
}

declare module "packages/io/netty/util/$AttributeMap" {
import { $AttributeKey$$Type } from "packages/io/netty/util/$AttributeKey"
import { $Attribute } from "packages/io/netty/util/$Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
export abstract class $AttributeMap$$Static implements $AttributeMap {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeMap$$Type = ($AttributeMap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeMap_ = $AttributeMap$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelOutboundInvoker" {
import { $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelProgressivePromise } from "packages/io/netty/channel/$ChannelProgressivePromise"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"
import { $ChannelPromise, $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"close"(): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"flush"(): $ChannelOutboundInvoker
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"read"(): $ChannelOutboundInvoker
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
export abstract class $ChannelOutboundInvoker$$Static implements $ChannelOutboundInvoker {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelOutboundInvoker_ = $ChannelOutboundInvoker$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$EventExecutorChooserFactory" {
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type } from "packages/io/netty/util/concurrent/$EventExecutorChooserFactory$EventExecutorChooser"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {
"newChooser"(eventExecutor0s: $EventExecutor$$Type[]): $EventExecutorChooserFactory$EventExecutorChooser
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
export abstract class $EventExecutorChooserFactory$$Static implements $EventExecutorChooserFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExecutorChooserFactory$$Type = ($EventExecutorChooserFactory | ((arg0: $EventExecutor[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExecutorChooserFactory_ = $EventExecutorChooserFactory$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelHandlerContext" {
import { $ChannelPipeline } from "packages/io/netty/channel/$ChannelPipeline"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $ByteBufAllocator } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $AttributeKey$$Type } from "packages/io/netty/util/$AttributeKey"
import { $ChannelProgressivePromise } from "packages/io/netty/channel/$ChannelProgressivePromise"
import { $ChannelOutboundInvoker } from "packages/io/netty/channel/$ChannelOutboundInvoker"
import { $Attribute } from "packages/io/netty/util/$Attribute"
import { $ChannelPromise, $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $EventExecutor } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $AttributeMap } from "packages/io/netty/util/$AttributeMap"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelHandler } from "packages/io/netty/channel/$ChannelHandler"
import { $ChannelInboundInvoker } from "packages/io/netty/channel/$ChannelInboundInvoker"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {
"alloc"(): $ByteBufAllocator
/** @deprecated */
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"channel"(): $Channel
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"close"(): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"executor"(): $EventExecutor
"fireChannelActive"(): $ChannelHandlerContext
"fireChannelInactive"(): $ChannelHandlerContext
"fireChannelRead"(object0: any): $ChannelHandlerContext
"fireChannelReadComplete"(): $ChannelHandlerContext
"fireChannelRegistered"(): $ChannelHandlerContext
"fireChannelUnregistered"(): $ChannelHandlerContext
"fireChannelWritabilityChanged"(): $ChannelHandlerContext
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelHandlerContext
"fireUserEventTriggered"(object0: any): $ChannelHandlerContext
"flush"(): $ChannelHandlerContext
"handler"(): $ChannelHandler
/** @deprecated */
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
"isRemoved"(): boolean
"name"(): string
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"pipeline"(): $ChannelPipeline
"read"(): $ChannelHandlerContext
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
get "removed"(): boolean
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
export abstract class $ChannelHandlerContext$$Static implements $ChannelHandlerContext {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelHandlerContext_ = $ChannelHandlerContext$$Type;
}
}

declare module "packages/io/netty/channel/$EventLoopGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Channel$$Type } from "packages/io/netty/channel/$Channel"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $EventLoop } from "packages/io/netty/channel/$EventLoop"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"next"(): $EventLoop
/** @deprecated */
"register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"register"(channel0: $Channel$$Type): $ChannelFuture
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(): $Future<any>
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
export abstract class $EventLoopGroup$$Static implements $EventLoopGroup {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventLoopGroup$$Type = ($EventLoopGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventLoopGroup_ = $EventLoopGroup$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelHandler" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelHandlerContext$$Type } from "packages/io/netty/channel/$ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {
/** @deprecated */
"exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
"handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
"handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
export abstract class $ChannelHandler$$Static implements $ChannelHandler {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelHandler$$Type = ($ChannelHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelHandler_ = $ChannelHandler$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$Promise" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Future, $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V> extends $Future<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Promise<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Promise<V>
"await"(): $Promise<V>
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $Promise<V>
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Promise<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Promise<V>
"setFailure"(throwable0: $Throwable$$Type): $Promise<V>
"setSuccess"(v0: V): $Promise<V>
"setUncancellable"(): boolean
"sync"(): $Promise<V>
"syncUninterruptibly"(): $Promise<V>
"tryFailure"(throwable0: $Throwable$$Type): boolean
"trySuccess"(v0: V): boolean
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
}

export namespace $Promise {
const probejs$$marker: never
}
export abstract class $Promise$$Static<V> implements $Promise<V> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Promise$$Type<V> = ($Promise<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Promise_<V> = $Promise$$Type<V>;
}
}

declare module "packages/io/netty/util/$IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {
"get"(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export abstract class $IntSupplier$$Static implements $IntSupplier {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntSupplier$$Type = ($IntSupplier | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}
}

declare module "packages/io/netty/channel/$EventLoop" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $OrderedEventExecutor } from "packages/io/netty/util/concurrent/$OrderedEventExecutor"
import { $Channel$$Type } from "packages/io/netty/channel/$Channel"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $EventLoopGroup } from "packages/io/netty/channel/$EventLoopGroup"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(thread0: $Thread$$Type): boolean
"inEventLoop"(): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future<V>
"next"(): $EventLoop
"parent"(): $EventLoopGroup
/** @deprecated */
"register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"register"(channel0: $Channel$$Type): $ChannelFuture
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(): $Future<any>
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoop {
const probejs$$marker: never
}
export abstract class $EventLoop$$Static implements $EventLoop {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventLoop$$Type = ($EventLoop);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventLoop_ = $EventLoop$$Type;
}
}

declare module "packages/io/netty/buffer/$ByteBuf" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $ByteBufAllocator } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $ByteBufConvertible } from "packages/io/netty/buffer/$ByteBufConvertible"
import { $ByteOrder, $ByteOrder$$Type } from "packages/java/nio/$ByteOrder"
import { $ByteProcessor$$Type } from "packages/io/netty/util/$ByteProcessor"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $ScatteringByteChannel$$Type } from "packages/java/nio/channels/$ScatteringByteChannel"
import { $ReferenceCounted } from "packages/io/netty/util/$ReferenceCounted"
import { $Charset$$Type } from "packages/java/nio/charset/$Charset"
import { $GatheringByteChannel$$Type } from "packages/java/nio/channels/$GatheringByteChannel"
import { $FileChannel$$Type } from "packages/java/nio/channels/$FileChannel"
import { $InputStream$$Type } from "packages/java/io/$InputStream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<$ByteBuf>, $ByteBufConvertible {
constructor()

public "alloc"(): $ByteBufAllocator
public "array"(): byte[]
public "arrayOffset"(): integer
public "asByteBuf"(): $ByteBuf
public "asReadOnly"(): $ByteBuf
public "bytesBefore"(int0: integer, int1: integer, byte2: byte): integer
public "bytesBefore"(byte0: byte): integer
public "bytesBefore"(int0: integer, byte1: byte): integer
public "capacity"(int0: integer): $ByteBuf
public "capacity"(): integer
public "clear"(): $ByteBuf
public "compareTo"(byteBuf0: $ByteBuf$$Type): integer
public "copy"(): $ByteBuf
public "copy"(int0: integer, int1: integer): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "discardSomeReadBytes"(): $ByteBuf
public "duplicate"(): $ByteBuf
public "ensureWritable"(int0: integer, boolean1: boolean): integer
public "ensureWritable"(int0: integer): $ByteBuf
public "forEachByte"(int0: integer, int1: integer, byteProcessor2: $ByteProcessor$$Type): integer
public "forEachByte"(byteProcessor0: $ByteProcessor$$Type): integer
public "forEachByteDesc"(int0: integer, int1: integer, byteProcessor2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(byteProcessor0: $ByteProcessor$$Type): integer
public "getBoolean"(int0: integer): boolean
public "getByte"(int0: integer): byte
public "getBytes"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(int0: integer, gatheringByteChannel1: $GatheringByteChannel$$Type, int2: integer): integer
public "getBytes"(int0: integer, fileChannel1: $FileChannel$$Type, long2: long, int3: integer): integer
public "getBytes"(int0: integer, outputStream1: $OutputStream$$Type, int2: integer): $ByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $ByteBuf
public "getBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $ByteBuf
public "getBytes"(int0: integer, byte1s: byte[]): $ByteBuf
public "getBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuf
public "getChar"(int0: integer): character
public "getCharSequence"(int0: integer, int1: integer, charset2: $Charset$$Type): charseq
public "getDouble"(int0: integer): double
public "getDoubleLE"(int0: integer): double
public "getFloat"(int0: integer): float
public "getFloatLE"(int0: integer): float
public "getInt"(int0: integer): integer
public "getIntLE"(int0: integer): integer
public "getLong"(int0: integer): long
public "getLongLE"(int0: integer): long
public "getMedium"(int0: integer): integer
public "getMediumLE"(int0: integer): integer
public "getShort"(int0: integer): short
public "getShortLE"(int0: integer): short
public "getUnsignedByte"(int0: integer): short
public "getUnsignedInt"(int0: integer): long
public "getUnsignedIntLE"(int0: integer): long
public "getUnsignedMedium"(int0: integer): integer
public "getUnsignedMediumLE"(int0: integer): integer
public "getUnsignedShort"(int0: integer): integer
public "getUnsignedShortLE"(int0: integer): integer
public "hasArray"(): boolean
public "hasMemoryAddress"(): boolean
public "indexOf"(int0: integer, int1: integer, byte2: byte): integer
public "internalNioBuffer"(int0: integer, int1: integer): $ByteBuffer
public "isContiguous"(): boolean
public "isDirect"(): boolean
public "isReadOnly"(): boolean
public "isReadable"(): boolean
public "isReadable"(int0: integer): boolean
public "isWritable"(int0: integer): boolean
public "isWritable"(): boolean
public "markReaderIndex"(): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "maxCapacity"(): integer
public "maxFastWritableBytes"(): integer
public "maxWritableBytes"(): integer
public "memoryAddress"(): long
public "nioBuffer"(int0: integer, int1: integer): $ByteBuffer
public "nioBuffer"(): $ByteBuffer
public "nioBufferCount"(): integer
public "nioBuffers"(int0: integer, int1: integer): $ByteBuffer[]
public "nioBuffers"(): $ByteBuffer[]
/** @deprecated */
public "order"(byteOrder0: $ByteOrder$$Type): $ByteBuf
/** @deprecated */
public "order"(): $ByteOrder
public "readBoolean"(): boolean
public "readByte"(): byte
public "readBytes"(byte0s: byte[]): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type, int1: integer, int2: integer): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type, int1: integer): $ByteBuf
public "readBytes"(int0: integer): $ByteBuf
public "readBytes"(fileChannel0: $FileChannel$$Type, long1: long, int2: integer): integer
public "readBytes"(outputStream0: $OutputStream$$Type, int1: integer): $ByteBuf
public "readBytes"(gatheringByteChannel0: $GatheringByteChannel$$Type, int1: integer): integer
public "readBytes"(byteBuffer0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(byte0s: byte[], int1: integer, int2: integer): $ByteBuf
public "readBytes"(byteBuf0: $ByteBuf$$Type): $ByteBuf
public "readChar"(): character
public "readCharSequence"(int0: integer, charset1: $Charset$$Type): charseq
public "readDouble"(): double
public "readDoubleLE"(): double
public "readFloat"(): float
public "readFloatLE"(): float
public "readInt"(): integer
public "readIntLE"(): integer
public "readLong"(): long
public "readLongLE"(): long
public "readMedium"(): integer
public "readMediumLE"(): integer
public "readRetainedSlice"(int0: integer): $ByteBuf
public "readShort"(): short
public "readShortLE"(): short
public "readSlice"(int0: integer): $ByteBuf
public "readUnsignedByte"(): short
public "readUnsignedInt"(): long
public "readUnsignedIntLE"(): long
public "readUnsignedMedium"(): integer
public "readUnsignedMediumLE"(): integer
public "readUnsignedShort"(): integer
public "readUnsignedShortLE"(): integer
public "readableBytes"(): integer
public "readerIndex"(int0: integer): $ByteBuf
public "readerIndex"(): integer
public "refCnt"(): integer
public "release"(int0: integer): boolean
public "release"(): boolean
public "resetReaderIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "retain"(): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "retainedSlice"(int0: integer, int1: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "setBoolean"(int0: integer, boolean1: boolean): $ByteBuf
public "setByte"(int0: integer, int1: integer): $ByteBuf
public "setBytes"(int0: integer, fileChannel1: $FileChannel$$Type, long2: long, int3: integer): integer
public "setBytes"(int0: integer, byte1s: byte[]): $ByteBuf
public "setBytes"(int0: integer, byte1s: byte[], int2: integer, int3: integer): $ByteBuf
public "setBytes"(int0: integer, byteBuffer1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(int0: integer, inputStream1: $InputStream$$Type, int2: integer): integer
public "setBytes"(int0: integer, scatteringByteChannel1: $ScatteringByteChannel$$Type, int2: integer): integer
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer, int3: integer): $ByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type, int2: integer): $ByteBuf
public "setBytes"(int0: integer, byteBuf1: $ByteBuf$$Type): $ByteBuf
public "setChar"(int0: integer, int1: integer): $ByteBuf
public "setCharSequence"(int0: integer, charSequence1: charseq, charset2: $Charset$$Type): integer
public "setDouble"(int0: integer, double1: double): $ByteBuf
public "setDoubleLE"(int0: integer, double1: double): $ByteBuf
public "setFloat"(int0: integer, float1: float): $ByteBuf
public "setFloatLE"(int0: integer, float1: float): $ByteBuf
public "setIndex"(int0: integer, int1: integer): $ByteBuf
public "setInt"(int0: integer, int1: integer): $ByteBuf
public "setIntLE"(int0: integer, int1: integer): $ByteBuf
public "setLong"(int0: integer, long1: long): $ByteBuf
public "setLongLE"(int0: integer, long1: long): $ByteBuf
public "setMedium"(int0: integer, int1: integer): $ByteBuf
public "setMediumLE"(int0: integer, int1: integer): $ByteBuf
public "setShort"(int0: integer, int1: integer): $ByteBuf
public "setShortLE"(int0: integer, int1: integer): $ByteBuf
public "setZero"(int0: integer, int1: integer): $ByteBuf
public "skipBytes"(int0: integer): $ByteBuf
public "slice"(): $ByteBuf
public "slice"(int0: integer, int1: integer): $ByteBuf
public "toString"(int0: integer, int1: integer, charset2: $Charset$$Type): string
public "toString"(charset0: $Charset$$Type): string
public "touch"(object0: any): $ByteBuf
public "touch"(): $ByteBuf
public "unwrap"(): $ByteBuf
public "writableBytes"(): integer
public "writeBoolean"(boolean0: boolean): $ByteBuf
public "writeByte"(int0: integer): $ByteBuf
public "writeBytes"(fileChannel0: $FileChannel$$Type, long1: long, int2: integer): integer
public "writeBytes"(byteBuf0: $ByteBuf$$Type, int1: integer): $ByteBuf
public "writeBytes"(byte0s: byte[]): $ByteBuf
public "writeBytes"(byte0s: byte[], int1: integer, int2: integer): $ByteBuf
public "writeBytes"(byteBuf0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(inputStream0: $InputStream$$Type, int1: integer): integer
public "writeBytes"(byteBuffer0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(scatteringByteChannel0: $ScatteringByteChannel$$Type, int1: integer): integer
public "writeBytes"(byteBuf0: $ByteBuf$$Type, int1: integer, int2: integer): $ByteBuf
public "writeChar"(int0: integer): $ByteBuf
public "writeCharSequence"(charSequence0: charseq, charset1: $Charset$$Type): integer
public "writeDouble"(double0: double): $ByteBuf
public "writeDoubleLE"(double0: double): $ByteBuf
public "writeFloat"(float0: float): $ByteBuf
public "writeFloatLE"(float0: float): $ByteBuf
public "writeInt"(int0: integer): $ByteBuf
public "writeIntLE"(int0: integer): $ByteBuf
public "writeLong"(long0: long): $ByteBuf
public "writeLongLE"(long0: long): $ByteBuf
public "writeMedium"(int0: integer): $ByteBuf
public "writeMediumLE"(int0: integer): $ByteBuf
public "writeShort"(int0: integer): $ByteBuf
public "writeShortLE"(int0: integer): $ByteBuf
public "writeZero"(int0: integer): $ByteBuf
public "writerIndex"(int0: integer): $ByteBuf
public "writerIndex"(): integer
get "contiguous"(): boolean
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteBuf$$Type = ($ByteBuf);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteBuf_ = $ByteBuf$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$RejectedExecutionHandler" {
import { $SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type } from "packages/io/netty/util/concurrent/$SingleThreadEventExecutor"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {
"rejected"(runnable0: $Runnable$$Type, singleThreadEventExecutor1: $SingleThreadEventExecutor$$Type): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
export abstract class $RejectedExecutionHandler$$Static implements $RejectedExecutionHandler {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RejectedExecutionHandler$$Type = ($RejectedExecutionHandler | ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RejectedExecutionHandler_ = $RejectedExecutionHandler$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelOption" {
import { $RecvByteBufAllocator } from "packages/io/netty/channel/$RecvByteBufAllocator"
import { $ByteBufAllocator } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $MessageSizeEstimator } from "packages/io/netty/channel/$MessageSizeEstimator"
import { $NetworkInterface } from "packages/java/net/$NetworkInterface"
import { $InetAddress } from "packages/java/net/$InetAddress"
import { $AbstractConstant } from "packages/io/netty/util/$AbstractConstant"
import { $WriteBufferWaterMark } from "packages/io/netty/channel/$WriteBufferWaterMark"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<$ChannelOption<T>> {
static readonly "ALLOCATOR": $ChannelOption<$ByteBufAllocator>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<boolean>
static readonly "AUTO_CLOSE": $ChannelOption<boolean>
static readonly "AUTO_READ": $ChannelOption<boolean>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<integer>
/** @deprecated */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<boolean>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<$InetAddress>
static readonly "IP_MULTICAST_IF": $ChannelOption<$NetworkInterface>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<boolean>
static readonly "IP_MULTICAST_TTL": $ChannelOption<integer>
static readonly "IP_TOS": $ChannelOption<integer>
/** @deprecated */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<integer>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<integer>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<$MessageSizeEstimator>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<$RecvByteBufAllocator>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<boolean>
static readonly "SO_BACKLOG": $ChannelOption<integer>
static readonly "SO_BROADCAST": $ChannelOption<boolean>
static readonly "SO_KEEPALIVE": $ChannelOption<boolean>
static readonly "SO_LINGER": $ChannelOption<integer>
static readonly "SO_RCVBUF": $ChannelOption<integer>
static readonly "SO_REUSEADDR": $ChannelOption<boolean>
static readonly "SO_SNDBUF": $ChannelOption<integer>
static readonly "SO_TIMEOUT": $ChannelOption<integer>
static readonly "TCP_FASTOPEN": $ChannelOption<integer>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<boolean>
static readonly "TCP_NODELAY": $ChannelOption<boolean>
/** @deprecated */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<integer>
/** @deprecated */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<integer>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<$WriteBufferWaterMark>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<integer>

public static "exists"(string0: string): boolean
/** @deprecated */
public static "newInstance"<T>(string0: string): $ChannelOption<T>
public "validate"(t0: T): void
public static "valueOf"<T>(string0: string): $ChannelOption<T>
public static "valueOf"<T>(class0: $Class$$Type<any>, string1: string): $ChannelOption<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelOption$$Type<T> = ($ChannelOption<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelOption_<T> = $ChannelOption$$Type<T>;
}
}

declare module "packages/io/netty/util/concurrent/$ThreadProperties" {
import { $StackTraceElement } from "packages/java/lang/$StackTraceElement"
import { $Thread$State } from "packages/java/lang/$Thread$State"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {
"id"(): long
"isAlive"(): boolean
"isDaemon"(): boolean
"isInterrupted"(): boolean
"name"(): string
"priority"(): integer
"stackTrace"(): $StackTraceElement[]
"state"(): $Thread$State
get "alive"(): boolean
get "daemon"(): boolean
get "interrupted"(): boolean
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
export abstract class $ThreadProperties$$Static implements $ThreadProperties {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreadProperties$$Type = ($ThreadProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreadProperties_ = $ThreadProperties$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelPipeline" {
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $ChannelHandlerContext } from "packages/io/netty/channel/$ChannelHandlerContext"
import { $EventExecutorGroup$$Type } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ChannelProgressivePromise } from "packages/io/netty/channel/$ChannelProgressivePromise"
import { $ChannelOutboundInvoker } from "packages/io/netty/channel/$ChannelOutboundInvoker"
import { $ChannelPromise, $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ChannelHandler, $ChannelHandler$$Type } from "packages/io/netty/channel/$ChannelHandler"
import { $List } from "packages/java/util/$List"
import { $ChannelInboundInvoker } from "packages/io/netty/channel/$ChannelInboundInvoker"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"
import { $Map } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<$Map$Entry<string, $ChannelHandler>> {
"addAfter"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addAfter"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, string2: string, channelHandler3: $ChannelHandler$$Type): $ChannelPipeline
"addBefore"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, string2: string, channelHandler3: $ChannelHandler$$Type): $ChannelPipeline
"addBefore"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(string0: string, channelHandler1: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addFirst"(...channelHandler0s: $ChannelHandler$$Type[]): $ChannelPipeline
"addFirst"(eventExecutorGroup0: $EventExecutorGroup$$Type, ...channelHandler1s: $ChannelHandler$$Type[]): $ChannelPipeline
"addLast"(eventExecutorGroup0: $EventExecutorGroup$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"addLast"(string0: string, channelHandler1: $ChannelHandler$$Type): $ChannelPipeline
"addLast"(...channelHandler0s: $ChannelHandler$$Type[]): $ChannelPipeline
"addLast"(eventExecutorGroup0: $EventExecutorGroup$$Type, ...channelHandler1s: $ChannelHandler$$Type[]): $ChannelPipeline
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"channel"(): $Channel
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"close"(): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"context"(channelHandler0: $ChannelHandler$$Type): $ChannelHandlerContext
"context"(string0: string): $ChannelHandlerContext
"context"(class0: $Class$$Type<$ChannelHandler$$Type>): $ChannelHandlerContext
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"fireChannelActive"(): $ChannelPipeline
"fireChannelInactive"(): $ChannelPipeline
"fireChannelRead"(object0: any): $ChannelPipeline
"fireChannelReadComplete"(): $ChannelPipeline
"fireChannelRegistered"(): $ChannelPipeline
"fireChannelUnregistered"(): $ChannelPipeline
"fireChannelWritabilityChanged"(): $ChannelPipeline
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelPipeline
"fireUserEventTriggered"(object0: any): $ChannelPipeline
"first"(): $ChannelHandler
"firstContext"(): $ChannelHandlerContext
"flush"(): $ChannelPipeline
"forEach"(consumer0: $Consumer$$Type<$Map$Entry$$Type<string, $ChannelHandler$$Type>>): void
"get"<T extends $ChannelHandler>(class0: $Class$$Type<T>): T
"get"(string0: string): $ChannelHandler
"iterator"(): $Iterator<$Map$Entry<string, $ChannelHandler>>
"last"(): $ChannelHandler
"lastContext"(): $ChannelHandlerContext
"names"(): $List<string>
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"read"(): $ChannelOutboundInvoker
"remove"(string0: string): $ChannelHandler
"remove"<T extends $ChannelHandler>(class0: $Class$$Type<T>): T
"remove"(channelHandler0: $ChannelHandler$$Type): $ChannelPipeline
"removeFirst"(): $ChannelHandler
"removeLast"(): $ChannelHandler
"replace"<T extends $ChannelHandler>(class0: $Class$$Type<T>, string1: string, channelHandler2: $ChannelHandler$$Type): T
"replace"(string0: string, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelHandler
"replace"(channelHandler0: $ChannelHandler$$Type, string1: string, channelHandler2: $ChannelHandler$$Type): $ChannelPipeline
"spliterator"(): $Spliterator<$Map$Entry<string, $ChannelHandler>>
"toMap"(): $Map<string, $ChannelHandler>
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
[Symbol.iterator](): IterableIterator<$Map$Entry<string, $ChannelHandler>>;
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
export abstract class $ChannelPipeline$$Static implements $ChannelPipeline {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelPipeline_ = $ChannelPipeline$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$ProgressiveFuture" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Future, $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V> extends $Future<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressiveFuture<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressiveFuture<V>
"await"(): $ProgressiveFuture<V>
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ProgressiveFuture<V>
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressiveFuture<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressiveFuture<V>
"sync"(): $ProgressiveFuture<V>
"syncUninterruptibly"(): $ProgressiveFuture<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
export abstract class $ProgressiveFuture$$Static<V> implements $ProgressiveFuture<V> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProgressiveFuture$$Type<V> = ($ProgressiveFuture<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProgressiveFuture_<V> = $ProgressiveFuture$$Type<V>;
}
}

declare module "packages/io/netty/channel/$ChannelFuture" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $Future, $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelFuture
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelFuture
"await"(): $ChannelFuture
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ChannelFuture
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"get"(): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelFuture
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelFuture
"sync"(): $ChannelFuture
"syncUninterruptibly"(): $ChannelFuture
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
export abstract class $ChannelFuture$$Static implements $ChannelFuture {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelFuture$$Type = ($ChannelFuture);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelFuture_ = $ChannelFuture$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$EventExecutorGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ScheduledExecutorService } from "packages/java/util/concurrent/$ScheduledExecutorService"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $Iterator } from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<$EventExecutor> {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"next"(): $EventExecutor
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(): $Future<any>
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
export abstract class $EventExecutorGroup$$Static implements $EventExecutorGroup {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExecutorGroup_ = $EventExecutorGroup$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelInboundHandlerAdapter" {
import { $ChannelHandlerContext$$Type } from "packages/io/netty/channel/$ChannelHandlerContext"
import { $ChannelInboundHandler } from "packages/io/netty/channel/$ChannelInboundHandler"
import { $ChannelHandlerAdapter } from "packages/io/netty/channel/$ChannelHandlerAdapter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {
constructor()

public "channelActive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelInactive"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelRead"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
public "channelReadComplete"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelRegistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelUnregistered"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "userEventTriggered"(channelHandlerContext0: $ChannelHandlerContext$$Type, object1: any): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelInboundHandlerAdapter_ = $ChannelInboundHandlerAdapter$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelInboundInvoker" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {
"fireChannelActive"(): $ChannelInboundInvoker
"fireChannelInactive"(): $ChannelInboundInvoker
"fireChannelRead"(object0: any): $ChannelInboundInvoker
"fireChannelReadComplete"(): $ChannelInboundInvoker
"fireChannelRegistered"(): $ChannelInboundInvoker
"fireChannelUnregistered"(): $ChannelInboundInvoker
"fireChannelWritabilityChanged"(): $ChannelInboundInvoker
"fireExceptionCaught"(throwable0: $Throwable$$Type): $ChannelInboundInvoker
"fireUserEventTriggered"(object0: any): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
export abstract class $ChannelInboundInvoker$$Static implements $ChannelInboundInvoker {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelInboundInvoker_ = $ChannelInboundInvoker$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelHandlerAdapter" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelHandlerContext$$Type } from "packages/io/netty/channel/$ChannelHandlerContext"
import { $ChannelHandler } from "packages/io/netty/channel/$ChannelHandler"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {
constructor()

/** @deprecated */
public "exceptionCaught"(channelHandlerContext0: $ChannelHandlerContext$$Type, throwable1: $Throwable$$Type): void
public "handlerAdded"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "handlerRemoved"(channelHandlerContext0: $ChannelHandlerContext$$Type): void
public "isSharable"(): boolean
get "sharable"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelHandlerAdapter_ = $ChannelHandlerAdapter$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelConfig" {
import { $RecvByteBufAllocator, $RecvByteBufAllocator$$Type } from "packages/io/netty/channel/$RecvByteBufAllocator"
import { $ByteBufAllocator, $ByteBufAllocator$$Type } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $MessageSizeEstimator, $MessageSizeEstimator$$Type } from "packages/io/netty/channel/$MessageSizeEstimator"
import { $ChannelOption, $ChannelOption$$Type } from "packages/io/netty/channel/$ChannelOption"
import { $WriteBufferWaterMark, $WriteBufferWaterMark$$Type } from "packages/io/netty/channel/$WriteBufferWaterMark"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {
"getAllocator"(): $ByteBufAllocator
"getConnectTimeoutMillis"(): integer
/** @deprecated */
"getMaxMessagesPerRead"(): integer
"getMessageSizeEstimator"(): $MessageSizeEstimator
"getOption"<T>(channelOption0: $ChannelOption$$Type<T>): T
"getOptions"(): $Map<$ChannelOption<any>, any>
"getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
"getWriteBufferHighWaterMark"(): integer
"getWriteBufferLowWaterMark"(): integer
"getWriteBufferWaterMark"(): $WriteBufferWaterMark
"getWriteSpinCount"(): integer
"isAutoClose"(): boolean
"isAutoRead"(): boolean
"setAllocator"(byteBufAllocator0: $ByteBufAllocator$$Type): $ChannelConfig
"setAutoClose"(boolean0: boolean): $ChannelConfig
"setAutoRead"(boolean0: boolean): $ChannelConfig
"setConnectTimeoutMillis"(int0: integer): $ChannelConfig
/** @deprecated */
"setMaxMessagesPerRead"(int0: integer): $ChannelConfig
"setMessageSizeEstimator"(messageSizeEstimator0: $MessageSizeEstimator$$Type): $ChannelConfig
"setOption"<T>(channelOption0: $ChannelOption$$Type<T>, t1: T): boolean
"setOptions"(map0: $Map$$Type<$ChannelOption$$Type<any>, any>): boolean
"setRecvByteBufAllocator"(recvByteBufAllocator0: $RecvByteBufAllocator$$Type): $ChannelConfig
"setWriteBufferHighWaterMark"(int0: integer): $ChannelConfig
"setWriteBufferLowWaterMark"(int0: integer): $ChannelConfig
"setWriteBufferWaterMark"(writeBufferWaterMark0: $WriteBufferWaterMark$$Type): $ChannelConfig
"setWriteSpinCount"(int0: integer): $ChannelConfig
get "allocator"(): $ByteBufAllocator
get "connectTimeoutMillis"(): integer
get "maxMessagesPerRead"(): integer
get "messageSizeEstimator"(): $MessageSizeEstimator
get "options"(): $Map<$ChannelOption<any>, any>
get "recvByteBufAllocator"(): T
get "writeBufferHighWaterMark"(): integer
get "writeBufferLowWaterMark"(): integer
get "writeBufferWaterMark"(): $WriteBufferWaterMark
get "writeSpinCount"(): integer
get "autoClose"(): boolean
get "autoRead"(): boolean
set "allocator"(value: $ByteBufAllocator$$Type)
set "autoClose"(value: boolean)
set "autoRead"(value: boolean)
set "connectTimeoutMillis"(value: integer)
set "maxMessagesPerRead"(value: integer)
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
set "options"(value: $Map$$Type<$ChannelOption$$Type<any>, any>)
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
set "writeBufferHighWaterMark"(value: integer)
set "writeBufferLowWaterMark"(value: integer)
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
set "writeSpinCount"(value: integer)
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
export abstract class $ChannelConfig$$Static implements $ChannelConfig {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelConfig$$Type = ($ChannelConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelConfig_ = $ChannelConfig$$Type;
}
}

declare module "packages/io/netty/channel/$MultithreadEventLoopGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Channel$$Type } from "packages/io/netty/channel/$Channel"
import { $EventLoopGroup } from "packages/io/netty/channel/$EventLoopGroup"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"
import { $MultithreadEventExecutorGroup } from "packages/io/netty/util/concurrent/$MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "register"(channel0: $Channel$$Type): $ChannelFuture
/** @deprecated */
public "register"(channel0: $Channel$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
public "register"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultithreadEventLoopGroup_ = $MultithreadEventLoopGroup$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$ProgressivePromise" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ProgressiveFuture } from "packages/io/netty/util/concurrent/$ProgressiveFuture"
import { $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V> extends $Promise<V>, $ProgressiveFuture<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressivePromise<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressivePromise<V>
"await"(): $ProgressivePromise<V>
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ProgressivePromise<V>
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $ProgressivePromise<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $ProgressivePromise<V>
"setFailure"(throwable0: $Throwable$$Type): $ProgressivePromise<V>
"setProgress"(long0: long, long1: long): $ProgressivePromise<V>
"setSuccess"(v0: V): $ProgressivePromise<V>
"setUncancellable"(): boolean
"sync"(): $ProgressivePromise<V>
"syncUninterruptibly"(): $ProgressivePromise<V>
"tryFailure"(throwable0: $Throwable$$Type): boolean
"tryProgress"(long0: long, long1: long): boolean
"trySuccess"(v0: V): boolean
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: V)
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
export abstract class $ProgressivePromise$$Static<V> implements $ProgressivePromise<V> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProgressivePromise$$Type<V> = ($ProgressivePromise<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProgressivePromise_<V> = $ProgressivePromise$$Type<V>;
}
}

declare module "packages/io/netty/util/concurrent/$EventExecutor" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $Iterator } from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(thread0: $Thread$$Type): boolean
"inEventLoop"(): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future<V>
"next"(): $EventExecutor
"parent"(): $EventExecutorGroup
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(): $Future<any>
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutor {
const probejs$$marker: never
}
export abstract class $EventExecutor$$Static implements $EventExecutor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExecutor$$Type = ($EventExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExecutor_ = $EventExecutor$$Type;
}
}

declare module "packages/io/netty/util/$AttributeKey" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $AbstractConstant } from "packages/io/netty/util/$AbstractConstant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<$AttributeKey<T>> {
public static "exists"(string0: string): boolean
public static "newInstance"<T>(string0: string): $AttributeKey<T>
public static "valueOf"<T>(string0: string): $AttributeKey<T>
public static "valueOf"<T>(class0: $Class$$Type<any>, string1: string): $AttributeKey<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeKey$$Type<T> = ($AttributeKey<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeKey_<T> = $AttributeKey$$Type<T>;
}
}

declare module "packages/io/netty/util/concurrent/$AbstractEventExecutor" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $AbstractExecutorService } from "packages/java/util/concurrent/$AbstractExecutorService"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $Iterator } from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutor extends $AbstractExecutorService implements $EventExecutor {
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(): boolean
public "inEventLoop"(thread0: $Thread$$Type): boolean
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "iterator"(): $Iterator<$EventExecutor>
public "lazyExecute"(runnable0: $Runnable$$Type): void
public "newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
public "newProgressivePromise"<V>(): $ProgressivePromise<V>
public "newPromise"<V>(): $Promise<V>
public "newSucceededFuture"<V>(v0: V): $Future<V>
public "next"(): $EventExecutor
public "parent"(): $EventExecutorGroup
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "shutdownGracefully"(): $Future<any>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shutdown"(): boolean
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractEventExecutor$$Type = ($AbstractEventExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractEventExecutor_ = $AbstractEventExecutor$$Type;
}
}

declare module "packages/io/netty/channel/$SelectStrategyFactory" {
import { $SelectStrategy, $SelectStrategy$$Type } from "packages/io/netty/channel/$SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {
"newSelectStrategy"(): $SelectStrategy
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
export abstract class $SelectStrategyFactory$$Static implements $SelectStrategyFactory {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SelectStrategyFactory$$Type = ($SelectStrategyFactory | (() => $SelectStrategy$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SelectStrategyFactory_ = $SelectStrategyFactory$$Type;
}
}

declare module "packages/io/netty/channel/$SimpleChannelInboundHandler" {
import { $ChannelInboundHandlerAdapter } from "packages/io/netty/channel/$ChannelInboundHandlerAdapter"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {
public "acceptInboundMessage"(object0: any): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleChannelInboundHandler$$Type<I> = ($SimpleChannelInboundHandler<I>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleChannelInboundHandler_<I> = $SimpleChannelInboundHandler$$Type<I>;
}
}

declare module "packages/io/netty/util/$AbstractConstant" {
import { $Constant } from "packages/io/netty/util/$Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<T>> implements $Constant<T> {
public "compareTo"(t0: T): integer
public "id"(): integer
public "name"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractConstant$$Type<T extends $AbstractConstant<T>> = ($AbstractConstant<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractConstant_<T extends $AbstractConstant<T>> = $AbstractConstant$$Type<T>;
}
}

declare module "packages/io/netty/channel/$WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(int0: integer, int1: integer)

public "high"(): integer
public "low"(): integer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WriteBufferWaterMark_ = $WriteBufferWaterMark$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$Future" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V> extends $Future$0<V> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"await"(long0: long): boolean
"await"(): $Future<V>
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $Future<V>
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"get"(long0: long, timeUnit1: $TimeUnit$$Type): V
"get"(): V
"getNow"(): V
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<V>>): $Future<V>
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<V>>[]): $Future<V>
"sync"(): $Future<V>
"syncUninterruptibly"(): $Future<V>
get "now"(): V
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export abstract class $Future$$Static<V> implements $Future<V> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Future$$Type<V> = ($Future<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Future_<V> = $Future$$Type<V>;
}
}

declare module "packages/io/netty/channel/$ChannelId" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Serializable } from "packages/java/io/$Serializable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<$ChannelId> {
"asLongText"(): string
"asShortText"(): string
"compareTo"(channelId0: $ChannelId$$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
export abstract class $ChannelId$$Static implements $ChannelId {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelId$$Type = ($ChannelId);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelId_ = $ChannelId$$Type;
}
}

declare module "packages/io/netty/channel/$DefaultEventLoopGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $MultithreadEventLoopGroup } from "packages/io/netty/channel/$MultithreadEventLoopGroup"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $ThreadFactory$$Type } from "packages/java/util/concurrent/$ThreadFactory"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {
constructor(int0: integer, executor1: $Executor$$Type)
constructor(int0: integer, threadFactory1: $ThreadFactory$$Type)
constructor(threadFactory0: $ThreadFactory$$Type)
constructor(int0: integer)
constructor()

public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
public "shutdownGracefully"(): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"(runnable0: $Runnable$$Type): $Future<any>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DefaultEventLoopGroup_ = $DefaultEventLoopGroup$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelProgressivePromise" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $ChannelProgressiveFuture } from "packages/io/netty/channel/$ChannelProgressiveFuture"
import { $ChannelPromise } from "packages/io/netty/channel/$ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<void>, $ChannelProgressiveFuture, $ChannelPromise {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressivePromise
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressivePromise
"await"(): $ChannelProgressivePromise
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ChannelProgressivePromise
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"get"(): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressivePromise
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressivePromise
"setFailure"(throwable0: $Throwable$$Type): $ChannelProgressivePromise
"setProgress"(long0: long, long1: long): $ChannelProgressivePromise
"setSuccess"(): $ChannelProgressivePromise
"setSuccess"(void0: void): $ChannelProgressivePromise
"setSuccess"(void0: void): $ProgressivePromise<void>
"setUncancellable"(): boolean
"sync"(): $ChannelProgressivePromise
"syncUninterruptibly"(): $ChannelProgressivePromise
"tryFailure"(throwable0: $Throwable$$Type): boolean
"tryProgress"(long0: long, long1: long): boolean
"trySuccess"(): boolean
"trySuccess"(void0: void): boolean
"unvoid"(): $ChannelProgressivePromise
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
set "success"(value: void)
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
export abstract class $ChannelProgressivePromise$$Static implements $ChannelProgressivePromise {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelProgressivePromise_ = $ChannelProgressivePromise$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$EventExecutorChooserFactory$EventExecutorChooser" {
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {
"next"(): $EventExecutor
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
export abstract class $EventExecutorChooserFactory$EventExecutorChooser$$Static implements $EventExecutorChooserFactory$EventExecutorChooser {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = ($EventExecutorChooserFactory$EventExecutorChooser | (() => $EventExecutor$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExecutorChooserFactory$EventExecutorChooser_ = $EventExecutorChooserFactory$EventExecutorChooser$$Type;
}
}

declare module "packages/io/netty/util/$ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {
"refCnt"(): integer
"release"(int0: integer): boolean
"release"(): boolean
"retain"(): $ReferenceCounted
"retain"(int0: integer): $ReferenceCounted
"touch"(): $ReferenceCounted
"touch"(object0: any): $ReferenceCounted
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
export abstract class $ReferenceCounted$$Static implements $ReferenceCounted {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReferenceCounted_ = $ReferenceCounted$$Type;
}
}

declare module "packages/io/netty/channel/$SelectStrategy" {
import { $IntSupplier, $IntSupplier$$Type } from "packages/io/netty/util/$IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {
"calculateStrategy"(intSupplier0: $IntSupplier$$Type, boolean1: boolean): integer
}

export namespace $SelectStrategy {
const BUSY_WAIT: integer
const CONTINUE: integer
const SELECT: integer
}
export abstract class $SelectStrategy$$Static implements $SelectStrategy {
static readonly "BUSY_WAIT": integer
static readonly "CONTINUE": integer
static readonly "SELECT": integer

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SelectStrategy$$Type = ($SelectStrategy | ((arg0: $IntSupplier, arg1: boolean) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SelectStrategy_ = $SelectStrategy$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$MultithreadEventExecutorGroup" {
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AbstractEventExecutorGroup } from "packages/io/netty/util/concurrent/$AbstractEventExecutorGroup"
import { $Spliterator } from "packages/java/util/$Spliterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {
public "executorCount"(): integer
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "spliterator"(): $Spliterator<$EventExecutor>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultithreadEventExecutorGroup_ = $MultithreadEventExecutorGroup$$Type;
}
}

declare module "packages/io/netty/channel/$Channel" {
import { $ChannelPipeline } from "packages/io/netty/channel/$ChannelPipeline"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ByteBufAllocator } from "packages/io/netty/buffer/$ByteBufAllocator"
import { $ChannelId } from "packages/io/netty/channel/$ChannelId"
import { $AttributeKey$$Type } from "packages/io/netty/util/$AttributeKey"
import { $ChannelProgressivePromise } from "packages/io/netty/channel/$ChannelProgressivePromise"
import { $ChannelOutboundInvoker } from "packages/io/netty/channel/$ChannelOutboundInvoker"
import { $Attribute } from "packages/io/netty/util/$Attribute"
import { $ChannelPromise, $ChannelPromise$$Type } from "packages/io/netty/channel/$ChannelPromise"
import { $SocketAddress, $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $AttributeMap } from "packages/io/netty/util/$AttributeMap"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $ChannelConfig } from "packages/io/netty/channel/$ChannelConfig"
import { $EventLoop } from "packages/io/netty/channel/$EventLoop"
import { $Channel$Unsafe } from "packages/io/netty/channel/$Channel$Unsafe"
import { $ChannelMetadata } from "packages/io/netty/channel/$ChannelMetadata"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<$Channel> {
"alloc"(): $ByteBufAllocator
"attr"<T>(attributeKey0: $AttributeKey$$Type<T>): $Attribute<T>
"bind"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"bind"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"bytesBeforeUnwritable"(): long
"bytesBeforeWritable"(): long
"close"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"close"(): $ChannelFuture
"closeFuture"(): $ChannelFuture
"compareTo"(channel0: $Channel$$Type): integer
"config"(): $ChannelConfig
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type, channelPromise2: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type): $ChannelFuture
"connect"(socketAddress0: $SocketAddress$$Type, socketAddress1: $SocketAddress$$Type): $ChannelFuture
"deregister"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"deregister"(): $ChannelFuture
"disconnect"(channelPromise0: $ChannelPromise$$Type): $ChannelFuture
"disconnect"(): $ChannelFuture
"eventLoop"(): $EventLoop
"flush"(): $Channel
"hasAttr"<T>(attributeKey0: $AttributeKey$$Type<T>): boolean
"id"(): $ChannelId
"isActive"(): boolean
"isOpen"(): boolean
"isRegistered"(): boolean
"isWritable"(): boolean
"localAddress"(): $SocketAddress
"metadata"(): $ChannelMetadata
"newFailedFuture"(throwable0: $Throwable$$Type): $ChannelFuture
"newProgressivePromise"(): $ChannelProgressivePromise
"newPromise"(): $ChannelPromise
"newSucceededFuture"(): $ChannelFuture
"parent"(): $Channel
"pipeline"(): $ChannelPipeline
"read"(): $Channel
"remoteAddress"(): $SocketAddress
"unsafe"(): $Channel$Unsafe
"voidPromise"(): $ChannelPromise
"write"(object0: any): $ChannelFuture
"write"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any, channelPromise1: $ChannelPromise$$Type): $ChannelFuture
"writeAndFlush"(object0: any): $ChannelFuture
get "active"(): boolean
get "open"(): boolean
get "registered"(): boolean
get "writable"(): boolean
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

declare module "packages/io/netty/util/concurrent/$AbstractEventExecutorGroup" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $Iterator } from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {
constructor()

public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
public "invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
public "invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "iterator"(): $Iterator<$EventExecutor>
public "next"(): $EventExecutor
public "schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
public "scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
public "shutdown"(): void
public "shutdownGracefully"(): $Future<any>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
public "shutdownNow"(): $List<$Runnable>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractEventExecutorGroup_ = $AbstractEventExecutorGroup$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$OrderedEventExecutor" {
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $EventExecutorGroup } from "packages/io/netty/util/concurrent/$EventExecutorGroup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $Promise } from "packages/io/netty/util/concurrent/$Promise"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $List } from "packages/java/util/$List"
import { $Future as $Future$0 } from "packages/java/util/concurrent/$Future"
import { $ProgressivePromise } from "packages/io/netty/util/concurrent/$ProgressivePromise"
import { $Iterator } from "packages/java/util/$Iterator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {
"awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"execute"(runnable0: $Runnable$$Type): void
"forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
"inEventLoop"(thread0: $Thread$$Type): boolean
"inEventLoop"(): boolean
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): $List<$Future$0<T>>
"invokeAll"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): $List<$Future$0<T>>
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>): T
"invokeAny"<T>(collection0: $Collection$$Type<$Callable$$Type<T>>, long1: long, timeUnit2: $TimeUnit$$Type): T
"isShutdown"(): boolean
"isShuttingDown"(): boolean
"isTerminated"(): boolean
"iterator"(): $Iterator<$EventExecutor>
"newFailedFuture"<V>(throwable0: $Throwable$$Type): $Future<V>
"newProgressivePromise"<V>(): $ProgressivePromise<V>
"newPromise"<V>(): $Promise<V>
"newSucceededFuture"<V>(v0: V): $Future<V>
"next"(): $EventExecutor
"parent"(): $EventExecutorGroup
"schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
"schedule"(runnable0: $Runnable$$Type, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleAtFixedRate"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
"scheduleWithFixedDelay"(runnable0: $Runnable$$Type, long1: long, long2: long, timeUnit3: $TimeUnit$$Type): $ScheduledFuture<any>
/** @deprecated */
"shutdown"(): void
"shutdownGracefully"(): $Future<any>
"shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
/** @deprecated */
"shutdownNow"(): $List<$Runnable>
"spliterator"(): $Spliterator<$EventExecutor>
"submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
"submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
"submit"(runnable0: $Runnable$$Type): $Future<any>
"terminationFuture"(): $Future<any>
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
export abstract class $OrderedEventExecutor$$Static implements $OrderedEventExecutor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OrderedEventExecutor_ = $OrderedEventExecutor$$Type;
}
}

declare module "packages/io/netty/util/concurrent/$AbstractScheduledEventExecutor" {
import { $EventExecutor, $EventExecutor$$Type } from "packages/io/netty/util/concurrent/$EventExecutor"
import { $ScheduledFuture } from "packages/io/netty/util/concurrent/$ScheduledFuture"
import { $AbstractEventExecutor } from "packages/io/netty/util/concurrent/$AbstractEventExecutor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Callable$$Type } from "packages/java/util/concurrent/$Callable"
import { $Future } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {
public "awaitTermination"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
public "execute"(runnable0: $Runnable$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$EventExecutor$$Type>): void
public "inEventLoop"(thread0: $Thread$$Type): boolean
public "isShutdown"(): boolean
public "isShuttingDown"(): boolean
public "isTerminated"(): boolean
public "schedule"<V>(callable0: $Callable$$Type<V>, long1: long, timeUnit2: $TimeUnit$$Type): $ScheduledFuture<V>
public "shutdownGracefully"(long0: long, long1: long, timeUnit2: $TimeUnit$$Type): $Future<any>
public "spliterator"(): $Spliterator<$EventExecutor>
public "terminationFuture"(): $Future<any>
get "shutdown"(): boolean
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractScheduledEventExecutor_ = $AbstractScheduledEventExecutor$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {
constructor(boolean0: boolean)
constructor(boolean0: boolean, int1: integer)

public "defaultMaxMessagesPerRead"(): integer
public "hasDisconnect"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelMetadata_ = $ChannelMetadata$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelProgressiveFuture" {
import { $GenericFutureListener$$Type } from "packages/io/netty/util/concurrent/$GenericFutureListener"
import { $Throwable } from "packages/java/lang/$Throwable"
import { $ProgressiveFuture } from "packages/io/netty/util/concurrent/$ProgressiveFuture"
import { $Channel } from "packages/io/netty/channel/$Channel"
import { $Future$$Type } from "packages/io/netty/util/concurrent/$Future"
import { $TimeUnit$$Type } from "packages/java/util/concurrent/$TimeUnit"
import { $ChannelFuture } from "packages/io/netty/channel/$ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<void> {
"addListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressiveFuture
"addListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressiveFuture
"await"(): $ChannelProgressiveFuture
"await"(long0: long): boolean
"await"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"awaitUninterruptibly"(): $ChannelProgressiveFuture
"awaitUninterruptibly"(long0: long): boolean
"awaitUninterruptibly"(long0: long, timeUnit1: $TimeUnit$$Type): boolean
"cancel"(boolean0: boolean): boolean
"cause"(): $Throwable
"channel"(): $Channel
"get"(long0: long, timeUnit1: $TimeUnit$$Type): void
"get"(): void
"getNow"(): void
"isCancellable"(): boolean
"isCancelled"(): boolean
"isDone"(): boolean
"isSuccess"(): boolean
"isVoid"(): boolean
"removeListener"(genericFutureListener0: $GenericFutureListener$$Type<$Future$$Type<void>>): $ChannelProgressiveFuture
"removeListeners"(...genericFutureListener0s: $GenericFutureListener$$Type<$Future$$Type<void>>[]): $ChannelProgressiveFuture
"sync"(): $ChannelProgressiveFuture
"syncUninterruptibly"(): $ChannelProgressiveFuture
get "now"(): void
get "cancellable"(): boolean
get "cancelled"(): boolean
get "done"(): boolean
get "success"(): boolean
get "void"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
export abstract class $ChannelProgressiveFuture$$Static implements $ChannelProgressiveFuture {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelProgressiveFuture_ = $ChannelProgressiveFuture$$Type;
}
}

declare module "packages/io/netty/buffer/$ByteBufAllocator" {
import { $CompositeByteBuf } from "packages/io/netty/buffer/$CompositeByteBuf"
import { $ByteBuf } from "packages/io/netty/buffer/$ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {
"buffer"(): $ByteBuf
"buffer"(int0: integer, int1: integer): $ByteBuf
"buffer"(int0: integer): $ByteBuf
"calculateNewCapacity"(int0: integer, int1: integer): integer
"compositeBuffer"(): $CompositeByteBuf
"compositeBuffer"(int0: integer): $CompositeByteBuf
"compositeDirectBuffer"(int0: integer): $CompositeByteBuf
"compositeDirectBuffer"(): $CompositeByteBuf
"compositeHeapBuffer"(int0: integer): $CompositeByteBuf
"compositeHeapBuffer"(): $CompositeByteBuf
"directBuffer"(): $ByteBuf
"directBuffer"(int0: integer, int1: integer): $ByteBuf
"directBuffer"(int0: integer): $ByteBuf
"heapBuffer"(int0: integer): $ByteBuf
"heapBuffer"(int0: integer, int1: integer): $ByteBuf
"heapBuffer"(): $ByteBuf
"ioBuffer"(): $ByteBuf
"ioBuffer"(int0: integer, int1: integer): $ByteBuf
"ioBuffer"(int0: integer): $ByteBuf
"isDirectBufferPooled"(): boolean
get "directBufferPooled"(): boolean
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
}
export abstract class $ByteBufAllocator$$Static implements $ByteBufAllocator {
static readonly "DEFAULT": $ByteBufAllocator

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteBufAllocator_ = $ByteBufAllocator$$Type;
}
}

declare module "packages/io/netty/channel/$ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {
"processMessage"(object0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
export abstract class $ChannelOutboundBuffer$MessageProcessor$$Static implements $ChannelOutboundBuffer$MessageProcessor {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ($ChannelOutboundBuffer$MessageProcessor | ((arg0: any) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChannelOutboundBuffer$MessageProcessor_ = $ChannelOutboundBuffer$MessageProcessor$$Type;
}
}

declare module "packages/io/netty/buffer/$ByteBufConvertible" {
import { $ByteBuf, $ByteBuf$$Type } from "packages/io/netty/buffer/$ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {
"asByteBuf"(): $ByteBuf
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
export abstract class $ByteBufConvertible$$Static implements $ByteBufConvertible {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteBufConvertible$$Type = ($ByteBufConvertible | (() => $ByteBuf$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteBufConvertible_ = $ByteBufConvertible$$Type;
}
}

declare module "packages/io/netty/channel/$RecvByteBufAllocator" {
import { $RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type } from "packages/io/netty/channel/$RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {
"newHandle"(): $RecvByteBufAllocator$Handle
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
export abstract class $RecvByteBufAllocator$$Static implements $RecvByteBufAllocator {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecvByteBufAllocator$$Type = ($RecvByteBufAllocator | (() => $RecvByteBufAllocator$Handle$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecvByteBufAllocator_ = $RecvByteBufAllocator$$Type;
}
}

declare module "packages/io/netty/util/$ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {
"process"(byte0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_NUL: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
}
export abstract class $ByteProcessor$$Static implements $ByteProcessor {
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ByteProcessor$$Type = ($ByteProcessor | ((arg0: byte) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ByteProcessor_ = $ByteProcessor$$Type;
}
}

