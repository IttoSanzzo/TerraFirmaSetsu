declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Loading" {
import { $ModConfigEvent } from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent"
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent, $IConfigEvent$$Type } from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Loading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfigEvent$Loading$$Type = ($ModConfigEvent$Loading);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfigEvent$Loading_ = $ModConfigEvent$Loading$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest" {
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Record } from "packages/java/lang/$Record"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $IExtensionPoint } from "packages/net/minecraftforge/fml/$IExtensionPoint"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IExtensionPoint$DisplayTest extends $Record implements $IExtensionPoint<$IExtensionPoint$DisplayTest> {
static readonly "IGNORESERVERONLY": string
static readonly "IGNORE_ALL_VERSION": $Supplier<$IExtensionPoint$DisplayTest>
static readonly "IGNORE_SERVER_VERSION": $Supplier<$IExtensionPoint$DisplayTest>

constructor(string0: string, biPredicate1: $BiPredicate$$Type<string, boolean>)
constructor(suppliedVersion: $Supplier$$Type<string>, remoteVersionTest: $BiPredicate$$Type<string, boolean>)

public "remoteVersionTest"(): $BiPredicate<string, boolean>
public "suppliedVersion"(): $Supplier<string>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IExtensionPoint$DisplayTest$$Type = ($IExtensionPoint$DisplayTest);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IExtensionPoint$DisplayTest_ = $IExtensionPoint$DisplayTest$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent" {
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModConfig, $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent, $IConfigEvent$$Type } from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent extends $Event implements $IModBusEvent, $IConfigEvent {
constructor()

public "getConfig"(): $ModConfig
public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
get "config"(): $ModConfig
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfigEvent$$Type = ($ModConfigEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfigEvent_ = $ModConfigEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$DeferredWorkQueue" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {
constructor(modLoadingStage0: $ModLoadingStage$$Type)

public "enqueueWork"<T>(modContainer0: $ModContainer$$Type, supplier1: $Supplier$$Type<T>): $CompletableFuture<T>
public "enqueueWork"(modContainer0: $ModContainer$$Type, runnable1: $Runnable$$Type): $CompletableFuture<void>
public static "lookup"(optional0: $Optional$$Type<$ModLoadingStage$$Type>): $Optional<$DeferredWorkQueue>
public "runTasks"(): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeferredWorkQueue$$Type = ($DeferredWorkQueue);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeferredWorkQueue_ = $DeferredWorkQueue$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLDedicatedServerSetupEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLDedicatedServerSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FMLDedicatedServerSetupEvent$$Type = ($FMLDedicatedServerSetupEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FMLDedicatedServerSetupEvent_ = $FMLDedicatedServerSetupEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModContainer, $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $IModBusEvent, $IModBusEvent$$Type } from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModStateTransition$EventGenerator<T extends ($Event & $IModBusEvent)> extends $Function<$ModContainer, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $Function<$ModContainer, V>
"apply"(modContainer0: $ModContainer$$Type): T
"compose"<V>(function0: $Function$$Type<V, $ModContainer>): $Function<V, T>
}

export namespace $IModStateTransition$EventGenerator {
function fromFunction<FN extends ($Event & $IModBusEvent)>(function0: $Function$$Type<$ModContainer$$Type, FN>): $IModStateTransition$EventGenerator<FN>
function identity<T>(): $Function<T, T>
}
export abstract class $IModStateTransition$EventGenerator$$Static<T extends ($Event & $IModBusEvent)> implements $IModStateTransition$EventGenerator<T> {
static "fromFunction"<FN extends ($Event & $IModBusEvent)>(function0: $Function$$Type<$ModContainer$$Type, FN>): $IModStateTransition$EventGenerator<FN>
static "identity"<T>(): $Function<T, T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModStateTransition$EventGenerator$$Type<T extends ($Event & $IModBusEvent)> = ($IModStateTransition$EventGenerator<T> | ((arg0: $ModContainer) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModStateTransition$EventGenerator_<T extends ($Event & $IModBusEvent)> = $IModStateTransition$EventGenerator$$Type<T>;
}
}

declare module "packages/net/minecraftforge/fml/config/$ModConfig" {
import { $Path } from "packages/java/nio/file/$Path"
import { $IConfigSpec, $IConfigSpec$$Type } from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ConfigFileTypeHandler } from "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler"
import { $ModConfig$Type, $ModConfig$Type$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig$Type"
import { $CommentedConfig } from "packages/com/electronwill/nightconfig/core/$CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {
constructor(type0: $ModConfig$Type$$Type, iConfigSpec1: $IConfigSpec$$Type<any>, modContainer2: $ModContainer$$Type, string3: string)
constructor(type0: $ModConfig$Type$$Type, iConfigSpec1: $IConfigSpec$$Type<any>, modContainer2: $ModContainer$$Type)

public "acceptSyncedConfig"(byte0s: byte[]): void
public "getConfigData"(): $CommentedConfig
public "getFileName"(): string
public "getFullPath"(): $Path
public "getHandler"(): $ConfigFileTypeHandler
public "getModId"(): string
public "getSpec"<T extends $IConfigSpec<T>>(): $IConfigSpec<T>
public "getType"(): $ModConfig$Type
public "save"(): void
get "configData"(): $CommentedConfig
get "fileName"(): string
get "fullPath"(): $Path
get "handler"(): $ConfigFileTypeHandler
get "modId"(): string
get "spec"(): $IConfigSpec<T>
get "type"(): $ModConfig$Type
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfig$$Type = ($ModConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfig_ = $ModConfig$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ModLifecycleEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ModLifecycleEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ParallelDispatchEvent extends $ModLifecycleEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

public "enqueueWork"(runnable0: $Runnable$$Type): $CompletableFuture<void>
public "enqueueWork"<T>(supplier0: $Supplier$$Type<T>): $CompletableFuture<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParallelDispatchEvent$$Type = ($ParallelDispatchEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParallelDispatchEvent_ = $ParallelDispatchEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLCommonSetupEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FMLCommonSetupEvent$$Type = ($FMLCommonSetupEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FMLCommonSetupEvent_ = $FMLCommonSetupEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$InterModComms$IMCMessage" {
import { $Record } from "packages/java/lang/$Record"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModComms$IMCMessage extends $Record {
constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier$$Type<any>)

/** @deprecated */
public "getMessageSupplier"<T>(): $Supplier<T>
/** @deprecated */
public "getMethod"(): string
/** @deprecated */
public "getModId"(): string
/** @deprecated */
public "getSenderModId"(): string
public "messageSupplier"(): $Supplier<any>
public "method"(): string
public "modId"(): string
public "senderModId"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterModComms$IMCMessage$$Type = ($InterModComms$IMCMessage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterModComms$IMCMessage_ = $InterModComms$IMCMessage$$Type;
}
}

declare module "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message$MessageType extends $Enum<$Message$MessageType> {
static readonly "LOC": $Message$MessageType
static readonly "MC": $Message$MessageType
static readonly "ML": $Message$MessageType
static readonly "MOD": $Message$MessageType

public "colour"(): float[]
public static "valueOf"(string0: string): $Message$MessageType
public static "values"(): $Message$MessageType[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Message$MessageType$$Type = ($Message$MessageType | ("mc" | "ml" | "loc" | "mod"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Message$MessageType_ = $Message$MessageType$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$ModLoadingStage" {
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Enum } from "packages/java/lang/$Enum"
import { $DeferredWorkQueue } from "packages/net/minecraftforge/fml/$DeferredWorkQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingStage extends $Enum<$ModLoadingStage> {
static readonly "COMMON_SETUP": $ModLoadingStage
static readonly "COMPLETE": $ModLoadingStage
static readonly "CONSTRUCT": $ModLoadingStage
static readonly "DONE": $ModLoadingStage
static readonly "ENQUEUE_IMC": $ModLoadingStage
static readonly "ERROR": $ModLoadingStage
static readonly "PROCESS_IMC": $ModLoadingStage
static readonly "SIDED_SETUP": $ModLoadingStage
static readonly "VALIDATE": $ModLoadingStage

public "currentState"(throwable0: $Throwable$$Type): $ModLoadingStage
public "getDeferredWorkQueue"(): $DeferredWorkQueue
public static "valueOf"(string0: string): $ModLoadingStage
public static "values"(): $ModLoadingStage[]
get "deferredWorkQueue"(): $DeferredWorkQueue
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModLoadingStage$$Type = ($ModLoadingStage | ("error" | "validate" | "construct" | "common_setup" | "sided_setup" | "enqueue_imc" | "process_imc" | "complete" | "done"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModLoadingStage_ = $ModLoadingStage$$Type;
}
}

declare module "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter" {
import { $Message, $Message$$Type } from "packages/net/minecraftforge/fml/loading/progress/$Message"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ProgressMeter {
constructor(string0: string, int1: integer, int2: integer, message3: $Message$$Type)

public "complete"(): void
public "current"(): integer
public "increment"(): void
public "label"(string0: string): void
public "label"(): $Message
public "name"(): string
public "progress"(): float
public "setAbsolute"(int0: integer): void
public "steps"(): integer
set "absolute"(value: integer)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProgressMeter$$Type = ($ProgressMeter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProgressMeter_ = $ProgressMeter$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$LogicalSide" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<$LogicalSide> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide

public "isClient"(): boolean
public "isServer"(): boolean
public static "valueOf"(string0: string): $LogicalSide
public static "values"(): $LogicalSide[]
get "client"(): boolean
get "server"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LogicalSide$$Type = ($LogicalSide | ("client" | "server"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LogicalSide_ = $LogicalSide$$Type;
}
}

declare module "packages/net/minecraftforge/fml/$IExtensionPoint" {
import { $Record, $Record$$Type } from "packages/java/lang/$Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint<T extends $Record> {
}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
export abstract class $IExtensionPoint$$Static<T extends $Record> implements $IExtensionPoint<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IExtensionPoint$$Type<T extends $Record> = ($IExtensionPoint<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IExtensionPoint_<T extends $Record> = $IExtensionPoint$$Type<T>;
}
}

declare module "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler" {
import { $Function } from "packages/java/util/function/$Function"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CommentedFileConfig, $CommentedFileConfig$$Type } from "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfig"
import { $ModConfig, $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConfigFileTypeHandler {
constructor()

public static "backUpConfig"(commentedFileConfig0: $CommentedFileConfig$$Type): void
public static "backUpConfig"(commentedFileConfig0: $CommentedFileConfig$$Type, int1: integer): void
public "reader"(path0: $Path$$Type): $Function<$ModConfig, $CommentedFileConfig>
public "unload"(path0: $Path$$Type, modConfig1: $ModConfig$$Type): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigFileTypeHandler$$Type = ($ConfigFileTypeHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigFileTypeHandler_ = $ConfigFileTypeHandler$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$InterModEnqueueEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModEnqueueEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterModEnqueueEvent$$Type = ($InterModEnqueueEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterModEnqueueEvent_ = $InterModEnqueueEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/config/$IConfigSpec" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $UnmodifiableConfig$Entry } from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig$Entry"
import { $ConfigFormat } from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Set } from "packages/java/util/$Set"
import { $EnumGetMethod$$Type } from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import { $OptionalLong } from "packages/java/util/$OptionalLong"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LongSupplier$$Type } from "packages/java/util/function/$LongSupplier"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $CommentedConfig$$Type } from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import { $Map } from "packages/java/util/$Map"
import { $UnmodifiableConfig } from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec<T extends $IConfigSpec<T>> extends $UnmodifiableConfig {
"acceptConfig"(commentedConfig0: $CommentedConfig$$Type): void
"afterReload"(): void
"apply"<T>(string0: string): T
"apply"<T>(list0: $List$$Type<string>): T
"configFormat"(): $ConfigFormat<any>
"contains"(list0: $List$$Type<string>): boolean
"contains"(string0: string): boolean
"correct"(commentedConfig0: $CommentedConfig$$Type): integer
"entrySet"(): $Set<$UnmodifiableConfig$Entry>
"get"<T>(string0: string): T
"get"<T>(list0: $List$$Type<string>): T
"getByte"(list0: $List$$Type<string>): byte
"getByte"(string0: string): byte
"getByteOrElse"(string0: string, byte1: byte): byte
"getByteOrElse"(list0: $List$$Type<string>, byte1: byte): byte
"getChar"(list0: $List$$Type<string>): character
"getChar"(string0: string): character
"getCharOrElse"(string0: string, char1: character): character
"getCharOrElse"(list0: $List$$Type<string>, char1: character): character
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T, enumGetMethod2: $EnumGetMethod$$Type): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, t1: T): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, supplier2: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type, supplier3: $Supplier$$Type<T>): T
"getEnumOrElse"<T extends $Enum<T>>(list0: $List$$Type<string>, t1: T): T
"getInt"(list0: $List$$Type<string>): integer
"getInt"(string0: string): integer
"getIntOrElse"(string0: string, int1: integer): integer
"getIntOrElse"(string0: string, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(list0: $List$$Type<string>, intSupplier1: $IntSupplier$$Type): integer
"getIntOrElse"(list0: $List$$Type<string>, int1: integer): integer
"getLong"(list0: $List$$Type<string>): long
"getLong"(string0: string): long
"getLongOrElse"(list0: $List$$Type<string>, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(list0: $List$$Type<string>, long1: long): long
"getLongOrElse"(string0: string, longSupplier1: $LongSupplier$$Type): long
"getLongOrElse"(string0: string, long1: long): long
"getOptional"<T>(list0: $List$$Type<string>): $Optional<T>
"getOptional"<T>(string0: string): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(string0: string, class1: $Class$$Type<T>, enumGetMethod2: $EnumGetMethod$$Type): $Optional<T>
"getOptionalEnum"<T extends $Enum<T>>(list0: $List$$Type<string>, class1: $Class$$Type<T>): $Optional<T>
"getOptionalInt"(list0: $List$$Type<string>): $OptionalInt
"getOptionalInt"(string0: string): $OptionalInt
"getOptionalLong"(string0: string): $OptionalLong
"getOptionalLong"(list0: $List$$Type<string>): $OptionalLong
"getOrElse"<T>(string0: string, t1: T): T
"getOrElse"<T>(list0: $List$$Type<string>, t1: T): T
"getOrElse"<T>(list0: $List$$Type<string>, supplier1: $Supplier$$Type<T>): T
"getOrElse"<T>(string0: string, supplier1: $Supplier$$Type<T>): T
"getRaw"<T>(list0: $List$$Type<string>): T
"getRaw"<T>(string0: string): T
"getShort"(string0: string): short
"getShort"(list0: $List$$Type<string>): short
"getShortOrElse"(string0: string, short1: short): short
"getShortOrElse"(list0: $List$$Type<string>, short1: short): short
"isCorrect"(commentedConfig0: $CommentedConfig$$Type): boolean
"isCorrecting"(): boolean
"isEmpty"(): boolean
"isNull"(string0: string): boolean
"isNull"(list0: $List$$Type<string>): boolean
"self"(): T
"size"(): integer
"valueMap"(): $Map<string, any>
get "correcting"(): boolean
get "empty"(): boolean
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
export abstract class $IConfigSpec$$Static<T extends $IConfigSpec<T>> implements $IConfigSpec<T> {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConfigSpec$$Type<T extends $IConfigSpec<T>> = ($IConfigSpec<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConfigSpec_<T extends $IConfigSpec<T>> = $IConfigSpec$$Type<T>;
}
}

declare module "packages/net/minecraftforge/fml/$ModContainer" {
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModLoadingStage, $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $IModBusEvent, $IModBusEvent$$Type } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $ProgressMeter$$Type } from "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $IExtensionPoint, $IExtensionPoint$$Type } from "packages/net/minecraftforge/fml/$IExtensionPoint"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Record, $Record$$Type } from "packages/java/lang/$Record"
import { $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent$$Type } from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import { $IModInfo, $IModInfo$$Type } from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $IExtensionPoint$DisplayTest, $IExtensionPoint$DisplayTest$$Type } from "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $IModStateTransition$EventGenerator$$Type } from "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {
constructor(iModInfo0: $IModInfo$$Type)

public "addConfig"(modConfig0: $ModConfig$$Type): void
public static "buildTransitionHandler"<T extends ($Event & $IModBusEvent)>(modContainer0: $ModContainer$$Type, eventGenerator1: $IModStateTransition$EventGenerator$$Type<T>, progressMeter2: $ProgressMeter$$Type, biFunction3: $BiFunction$$Type<$ModLoadingStage$$Type, $Throwable$$Type, $ModLoadingStage>, executor4: $Executor$$Type): $CompletableFuture<void>
public "dispatchConfigEvent"(iConfigEvent0: $IConfigEvent$$Type): void
public "getCurrentState"(): $ModLoadingStage
public "getCustomExtension"<T extends $Record>(class0: $Class$$Type<$IExtensionPoint$$Type<T>>): $Optional<T>
public "getMod"(): any
public "getModId"(): string
public "getModInfo"(): $IModInfo
public "getNamespace"(): string
public "matches"(object0: any): boolean
public "registerDisplayTest"(supplier0: $Supplier$$Type<string>, biPredicate1: $BiPredicate$$Type<string, boolean>): void
public "registerDisplayTest"(displayTest0: $IExtensionPoint$DisplayTest$$Type): void
public "registerDisplayTest"(supplier0: $Supplier$$Type<$IExtensionPoint$DisplayTest>): void
public "registerDisplayTest"(string0: string, biPredicate1: $BiPredicate$$Type<string, boolean>): void
public "registerExtensionPoint"<T extends ($Record & $IExtensionPoint<T>)>(class0: $Class$$Type<$IExtensionPoint$$Type<T>>, supplier1: $Supplier$$Type<T>): void
get "currentState"(): $ModLoadingStage
get "mod"(): any
get "modId"(): string
get "modInfo"(): $IModInfo
get "namespace"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModContainer$$Type = ($ModContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModContainer_ = $ModContainer$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/$IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {
}

export namespace $IModBusEvent {
const probejs$$marker: never
}
export abstract class $IModBusEvent$$Static implements $IModBusEvent {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IModBusEvent$$Type = ($IModBusEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IModBusEvent_ = $IModBusEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Unloading" {
import { $ModConfigEvent } from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent"
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent, $IConfigEvent$$Type } from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Unloading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfigEvent$Unloading$$Type = ($ModConfigEvent$Unloading);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfigEvent$Unloading_ = $ModConfigEvent$Unloading$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Reloading" {
import { $ModConfigEvent } from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent"
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent, $IConfigEvent$$Type } from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Reloading extends $ModConfigEvent {
constructor(modConfig0: $ModConfig$$Type)
constructor()

public static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
public "self"<T extends ($Event & $IConfigEvent)>(): T
public static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfigEvent$Reloading$$Type = ($ModConfigEvent$Reloading);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfigEvent$Reloading_ = $ModConfigEvent$Reloading$$Type;
}
}

declare module "packages/net/minecraftforge/fml/config/$IConfigEvent" {
import { $Event, $Event$$Type } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModConfig, $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent$ConfigConfig } from "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigEvent {
"getConfig"(): $ModConfig
"self"<T extends ($Event & $IConfigEvent)>(): T
get "config"(): $ModConfig
}

export namespace $IConfigEvent {
const CONFIGCONFIG: $IConfigEvent$ConfigConfig
function loading(modConfig0: $ModConfig$$Type): $IConfigEvent
function reloading(modConfig0: $ModConfig$$Type): $IConfigEvent
function unloading(modConfig0: $ModConfig$$Type): $IConfigEvent
}
export abstract class $IConfigEvent$$Static implements $IConfigEvent {
static readonly "CONFIGCONFIG": $IConfigEvent$ConfigConfig

static "loading"(modConfig0: $ModConfig$$Type): $IConfigEvent
static "reloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
static "unloading"(modConfig0: $ModConfig$$Type): $IConfigEvent
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConfigEvent$$Type = ($IConfigEvent | (() => $ModConfig$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConfigEvent_ = $IConfigEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/loading/progress/$Message" {
import { $Message$MessageType$$Type } from "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message {
constructor(string0: string, messageType1: $Message$MessageType$$Type)

public "getText"(): string
public "getTypeColour"(): float[]
get "text"(): string
get "typeColour"(): float[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Message$$Type = ($Message);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Message_ = $Message$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLClientSetupEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLClientSetupEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FMLClientSetupEvent$$Type = ($FMLClientSetupEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FMLClientSetupEvent_ = $FMLClientSetupEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$InterModProcessEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModProcessEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterModProcessEvent$$Type = ($InterModProcessEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterModProcessEvent_ = $InterModProcessEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLLoadCompleteEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLLoadCompleteEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FMLLoadCompleteEvent$$Type = ($FMLLoadCompleteEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FMLLoadCompleteEvent_ = $FMLLoadCompleteEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$ModLifecycleEvent" {
import { $InterModComms$IMCMessage } from "packages/net/minecraftforge/fml/$InterModComms$IMCMessage"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Stream } from "packages/java/util/stream/$Stream"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLifecycleEvent extends $Event implements $IModBusEvent {
constructor()
constructor(modContainer0: $ModContainer$$Type)

public "description"(): string
public "getIMCStream"(): $Stream<$InterModComms$IMCMessage>
public "getIMCStream"(predicate0: $Predicate$$Type<string>): $Stream<$InterModComms$IMCMessage>
get "iMCStream"(): $Stream<$InterModComms$IMCMessage>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModLifecycleEvent$$Type = ($ModLifecycleEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModLifecycleEvent_ = $ModLifecycleEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/event/lifecycle/$FMLConstructModEvent" {
import { $ModLoadingStage$$Type } from "packages/net/minecraftforge/fml/$ModLoadingStage"
import { $ModContainer$$Type } from "packages/net/minecraftforge/fml/$ModContainer"
import { $ParallelDispatchEvent } from "packages/net/minecraftforge/fml/event/lifecycle/$ParallelDispatchEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLConstructModEvent extends $ParallelDispatchEvent {
constructor(modContainer0: $ModContainer$$Type, modLoadingStage1: $ModLoadingStage$$Type)
constructor()

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FMLConstructModEvent$$Type = ($FMLConstructModEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FMLConstructModEvent_ = $FMLConstructModEvent$$Type;
}
}

declare module "packages/net/minecraftforge/fml/config/$ModConfig$Type" {
import { $Enum } from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<$ModConfig$Type> {
static readonly "CLIENT": $ModConfig$Type
static readonly "COMMON": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type

public "extension"(): string
public static "valueOf"(string0: string): $ModConfig$Type
public static "values"(): $ModConfig$Type[]
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModConfig$Type$$Type = ($ModConfig$Type | ("common" | "client" | "server"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModConfig$Type_ = $ModConfig$Type$$Type;
}
}

declare module "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Record } from "packages/java/lang/$Record"
import { $ModConfig, $ModConfig$$Type } from "packages/net/minecraftforge/fml/config/$ModConfig"
import { $IConfigEvent } from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IConfigEvent$ConfigConfig extends $Record {
constructor(loading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>, reloading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>, unloading: $Function$$Type<$ModConfig$$Type, $IConfigEvent>)

public "loading"(): $Function<$ModConfig, $IConfigEvent>
public "reloading"(): $Function<$ModConfig, $IConfigEvent>
public "unloading"(): $Function<$ModConfig, $IConfigEvent>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConfigEvent$ConfigConfig$$Type = ($IConfigEvent$ConfigConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConfigEvent$ConfigConfig_ = $IConfigEvent$ConfigConfig$$Type;
}
}

