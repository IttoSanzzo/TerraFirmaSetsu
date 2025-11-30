declare module "packages/dev/latvian/mods/kubejs/util/$RotationAxis" {
import { $Enum } from "packages/java/lang/$Enum"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $Quaternionf } from "packages/org/joml/$Quaternionf"

export class $RotationAxis extends $Enum<$RotationAxis> {
static readonly "XN": $RotationAxis
static readonly "XP": $RotationAxis
static readonly "YN": $RotationAxis
static readonly "YP": $RotationAxis
static readonly "ZN": $RotationAxis
static readonly "ZP": $RotationAxis
readonly "vec": $Vector3f

public "deg"(f: float): $Quaternionf
public "rad"(f: float): $Quaternionf
public static "valueOf"(name: string): $RotationAxis
public static "values"(): $RotationAxis[]
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$ConsoleJS" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ConsoleLine, $ConsoleLine$$Type } from "packages/dev/latvian/mods/kubejs/script/$ConsoleLine"
import { $Pattern$$Type } from "packages/java/util/regex/$Pattern"
import { $LogType$$Type } from "packages/dev/latvian/mods/kubejs/util/$LogType"
import { $ScriptType, $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Logger, $Logger$$Type } from "packages/org/slf4j/$Logger"

export class $ConsoleJS {
static "CLIENT": $ConsoleJS
static "SERVER": $ConsoleJS
static "STARTUP": $ConsoleJS
readonly "scriptType": $ScriptType

constructor(m: $ScriptType$$Type, log: $Logger$$Type)

public "debug"(message: any): $ConsoleLine
public "debugf"(message: string, ...args: any[]): $ConsoleLine
public "error"(message: any): $ConsoleLine
public "error"(message: string, error: $Throwable$$Type, exitPattern: $Pattern$$Type): $ConsoleLine
public "error"(message: string, throwable: $Throwable$$Type): $ConsoleLine
public "errorf"(message: string, ...args: any[]): $ConsoleLine
public "errorsComponent"(command: string): $Component
public "flush"(sync: boolean): void
public static "getCurrent"(def: $ConsoleJS$$Type): $ConsoleJS
public static "getCurrent"(cx: $Context$$Type): $ConsoleJS
public "getDebugEnabled"(): boolean
public "getLogger"(): $Logger
public "getMuted"(): boolean
public "getScriptLine"(): integer
public "getWriteToFile"(): boolean
public "group"(): void
public "groupEnd"(): void
public "handleError"(line: $ConsoleLine$$Type, error: $Throwable$$Type, exitPattern: $Pattern$$Type, print: boolean): void
public "info"(message: any): $ConsoleLine
public "infof"(message: string, ...args: any[]): $ConsoleLine
public "log"(...message: any[]): void
public "printClass"(className: string): void
public "printClass"(className: string, tree: boolean): void
public "printObject"(o: any): void
public "printObject"(o: any, tree: boolean): void
public "resetFile"(): void
public "setCapturingErrors"(enabled: boolean): void
public "setDebugEnabled"(m: boolean): void
public "setMuted"(m: boolean): void
public "setWriteToFile"(m: boolean): void
public "shouldPrintDebug"(): boolean
public "trace"(): void
public "warn"(message: any): $ConsoleLine
public "warn"(message: string, error: $Throwable$$Type): $ConsoleLine
public "warn"(message: string, error: $Throwable$$Type, exitPattern: $Pattern$$Type): $ConsoleLine
public "warnf"(message: string, ...args: any[]): $ConsoleLine
public "writeToFile"(type: $LogType$$Type, timestamp: long, line: string): void
public "writeToFile"(type: $LogType$$Type, line: string): void
get "debugEnabled"(): boolean
get "logger"(): $Logger
get "muted"(): boolean
get "scriptLine"(): integer
set "capturingErrors"(value: boolean)
set "debugEnabled"(value: boolean)
set "muted"(value: boolean)
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$TinyMap$Entry" {
import { $Record } from "packages/java/lang/$Record"

export class $TinyMap$Entry<K, V> extends $Record {
constructor(key: K, value: V)

public "key"(): K
public "value"(): V
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback" {
import { $ScheduledEvents$ScheduledEvent$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export interface $ScheduledEvents$Callback {
"onCallback"(scheduledEvent0: $ScheduledEvents$ScheduledEvent$$Type): void
}

export namespace $ScheduledEvents$Callback {
const probejs$$marker: never
}
export abstract class $ScheduledEvents$Callback$$Static implements $ScheduledEvents$Callback {
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Color, $Color$$Type } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Duration, $Duration$$Type } from "packages/java/time/$Duration"

export class $NotificationBuilder {
static readonly "DEFAULT_BACKGROUND_COLOR": $Color
static readonly "DEFAULT_BORDER_COLOR": $Color
static readonly "DEFAULT_DURATION": $Duration
static readonly "NO_TEXT": $Component[]

constructor(buf: $FriendlyByteBuf$$Type)
constructor()

public static "make"(consumer: $Consumer$$Type<$NotificationBuilder$$Type>): $NotificationBuilder
public static "of"(cx: $Context$$Type, object: any): $NotificationBuilder
public "setAtlasIcon"(icon: string): void
public "setIcon"(icon: string): void
public "setItemIcon"(stack: $ItemStack$$Type): void
/** Client only, do not use in server scripts */
public "show"(): void
public "write"(buf: $FriendlyByteBuf$$Type): void
get "backgroundColor"(): $Color
set "backgroundColor"(value: $Color$$Type)
get "borderColor"(): $Color
set "borderColor"(value: $Color$$Type)
get "duration"(): $Duration
set "duration"(value: $Duration$$Type)
get "iconSize"(): integer
set "iconSize"(value: integer)
get "outlineColor"(): $Color
set "outlineColor"(value: $Color$$Type)
get "text"(): $Component
set "text"(value: $Component$$Type)
get "textShadow"(): boolean
set "textShadow"(value: boolean)
set "atlasIcon"(value: string)
set "icon"(value: string)
set "itemIcon"(value: $ItemStack$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$JsonIO" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $JsonPrimitive } from "packages/com/google/gson/$JsonPrimitive"
import { $DataOutputStream$$Type } from "packages/java/io/$DataOutputStream"
import { $JsonArray } from "packages/com/google/gson/$JsonArray"
import { $Map } from "packages/java/util/$Map"

export class $JsonIO {
constructor()

public static "copy"(element: $JsonElement$$Type): $JsonElement
public static "getJsonHashBytes"(json: $JsonElement$$Type): byte[]
public static "getJsonHashString"(json: $JsonElement$$Type): string
public static "of"(o: any): $JsonElement
public static "parse"(string: string): any
public static "parseRaw"(string: string): $JsonElement
public static "primitiveOf"(o: any): $JsonPrimitive
public static "read"(path: $Path$$Type): $Map<any, any>
public static "readJson"(path: $Path$$Type): $JsonElement
public static "readString"(path: $Path$$Type): string
public static "toArray"(element: $JsonElement$$Type): $JsonArray
public static "toObject"(json: $JsonElement$$Type): any
public static "toPrettyString"(json: $JsonElement$$Type): string
public static "toPrimitive"(element: $JsonElement$$Type): any
public static "toString"(json: $JsonElement$$Type): string
public static "write"(path: $Path$$Type, json: $JsonObject$$Type): void
public static "writeJsonHash"(stream: $DataOutputStream$$Type, element: $JsonElement$$Type): void
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent" {
import { $ScheduledEvents, $ScheduledEvents$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"

export class $ScheduledEvents$ScheduledEvent {
constructor()

public "clear"(): void
public "reschedule"(): $ScheduledEvents$ScheduledEvent
public "reschedule"(timer: long): $ScheduledEvents$ScheduledEvent
get "endTime"(): long
set "endTime"(value: long)
get "id"(): integer
set "id"(value: integer)
get "ofTicks"(): boolean
set "ofTicks"(value: boolean)
get "repeating"(): boolean
set "repeating"(value: boolean)
get "scheduledEvents"(): $ScheduledEvents
set "scheduledEvents"(value: $ScheduledEvents$$Type)
get "timer"(): long
set "timer"(value: long)
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents" {
import { $LinkedList } from "packages/java/util/$LinkedList"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $AtomicInteger } from "packages/java/util/concurrent/atomic/$AtomicInteger"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"

export class $ScheduledEvents {
readonly "events": $LinkedList<$ScheduledEvents$ScheduledEvent>
readonly "factory": $Supplier<$ScheduledEvents$ScheduledEvent>
readonly "futureEvents": $LinkedList<$ScheduledEvents$ScheduledEvent>
readonly "nextId": $AtomicInteger

constructor(factory: $Supplier$$Type<$ScheduledEvents$ScheduledEvent>)

public "clear"(id: integer): void
public "schedule"(timer: $TemporalAmount$$Type, repeating: boolean, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "schedule"(timer: long, ofTicks: boolean, repeating: boolean, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "tickAll"(nowTicks: long): void
get "currentMillis"(): long
set "currentMillis"(value: long)
get "currentTick"(): long
set "currentTick"(value: long)
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$TinyMap" {
import { $Record } from "packages/java/lang/$Record"
import { $TinyMap$Entry, $TinyMap$Entry$$Type } from "packages/dev/latvian/mods/kubejs/util/$TinyMap$Entry"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Map$$Type } from "packages/java/util/$Map"

export class $TinyMap<K, V> extends $Record {
constructor(entries: $TinyMap$Entry$$Type<K, V>[])
constructor(map: $TinyMap$$Type<K, V>)
constructor(collection: $Collection$$Type<$TinyMap$Entry$$Type<K, V>>)

public "entries"(): $TinyMap$Entry<K, V>[]
public "isEmpty"(): boolean
public static "ofMap"<K, V>(map: $Map$$Type<K, V>): $TinyMap<K, V>
get "empty"(): boolean
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$ClassWrapper" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $CustomJavaToJsWrapper } from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper"
import { $Record } from "packages/java/lang/$Record"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"

export class $ClassWrapper<T> extends $Record implements $CustomJavaToJsWrapper {
constructor(wrappedClass: $Class$$Type<T>)

public "convertJavaToJs"(cx: $Context$$Type, scope: $Scriptable$$Type, staticType: $Class$$Type<any>): $Scriptable
public "wrappedClass"(): $Class<T>
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$FluidAmounts" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidAmounts {
}

export namespace $FluidAmounts {
const B: long
const BOTTLE: long
const BUCKET: long
const INGOT: long
const MB: long
const METAL_BLOCK: long
const MILLIBUCKET: long
const NUGGET: long
}
export abstract class $FluidAmounts$$Static implements $FluidAmounts {
static readonly "B": long
static readonly "BOTTLE": long
static readonly "BUCKET": long
static readonly "INGOT": long
static readonly "MB": long
static readonly "METAL_BLOCK": long
static readonly "MILLIBUCKET": long
static readonly "NUGGET": long

}
}

declare module "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Path$$Type } from "packages/java/nio/file/$Path"

export interface $NBTIOWrapper {
}

export namespace $NBTIOWrapper {
function read(path: $Path$$Type): $CompoundTag
function write(path: $Path$$Type, nbt: $CompoundTag$$Type): void
}
export abstract class $NBTIOWrapper$$Static implements $NBTIOWrapper {
static "read"(path: $Path$$Type): $CompoundTag
static "write"(path: $Path$$Type, nbt: $CompoundTag$$Type): void
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$LogType" {
import { $BiConsumer } from "packages/java/util/function/$BiConsumer"
import { $Enum } from "packages/java/lang/$Enum"
import { $Logger } from "packages/org/slf4j/$Logger"

export class $LogType extends $Enum<$LogType> {
static readonly "DEBUG": $LogType
static readonly "ERROR": $LogType
static readonly "INFO": $LogType
static readonly "INIT": $LogType
static readonly "VALUES": $LogType[]
static readonly "WARN": $LogType
readonly "callback": $BiConsumer<$Logger, string>
readonly "name": string

public static "valueOf"(name: string): $LogType
public static "values"(): $LogType[]
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$WrappedJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WrappedJS {
}

export namespace $WrappedJS {
const probejs$$marker: never
}
export abstract class $WrappedJS$$Static implements $WrappedJS {
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$Lazy" {
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $Lazy<T> implements $Supplier<T> {
public "forget"(): void
public "get"(): T
public static "of"<T>(supplier: $Supplier$$Type<T>): $Lazy<T>
public static "of"<T>(supplier: $Supplier$$Type<T>, expiresInMs: long): $Lazy<T>
public static "serviceLoader"<T>(type: $Class$$Type<T>): $Lazy<T>
}
}

declare module "packages/dev/latvian/mods/kubejs/util/$AttachedData" {
import { $HashMap } from "packages/java/util/$HashMap"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $AttachedData<T> extends $HashMap<string, any> {
constructor(p: T)

public "add"(key: string, data: any): void
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "equals"(object0: any): boolean
public "getParent"(): T
public "hashCode"(): integer
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
get "parent"(): T
}
}

