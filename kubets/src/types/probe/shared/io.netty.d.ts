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
public "submit"(runnable0: $Runnable$$Type): $Future<any>
public "submit"<T>(callable0: $Callable$$Type<T>): $Future<T>
public "submit"<T>(runnable0: $Runnable$$Type, t1: T): $Future<T>
set "ioRatio"(value: integer)
}
}

