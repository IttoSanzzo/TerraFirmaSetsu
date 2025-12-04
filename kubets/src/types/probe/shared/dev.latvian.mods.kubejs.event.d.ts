declare module "packages/dev/latvian/mods/kubejs/event/$EventGroupWrapper" {
import { $HashMap } from "packages/java/util/$HashMap"
import { $BaseFunction } from "packages/dev/latvian/mods/rhino/$BaseFunction"
import { $Set } from "packages/java/util/$Set"
import { $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $EventGroup$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventGroup"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry"

export class $EventGroupWrapper extends $HashMap<string, $BaseFunction> {
constructor(scriptType: $ScriptType$$Type, group: $EventGroup$$Type)

public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "equals"(object0: any): boolean
public "hashCode"(): integer
public "keySet"(): $Set<string>
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
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer" {
import { $EventJS$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $EventResult } from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import { $IEventHandler, $IEventHandler$$Type } from "packages/dev/latvian/mods/kubejs/event/$IEventHandler"
import { $EventExceptionHandler$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler"

export class $EventHandlerContainer {
readonly "extraId": any
readonly "handler": $IEventHandler
readonly "line": integer
readonly "source": string

constructor(extraId: any, handler: $IEventHandler$$Type, source: string, line: integer)

public "add"(extraId: any, handler: $IEventHandler$$Type, source: string, line: integer): void
public "handle"(event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public static "isEmpty"(array: $EventHandlerContainer$$Type[]): boolean
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$IEventHandler" {
import { $EventJS$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventJS"

export interface $IEventHandler {
"onEvent"(eventJS0: $EventJS$$Type): any
}

export namespace $IEventHandler {
const probejs$$marker: never
}
export abstract class $IEventHandler$$Static implements $IEventHandler {
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventHandler" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $ScriptTypePredicate } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate"
import { $EventHandlerContainer$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer"
import { $EventResult } from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ScriptTypeHolder$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import { $EventHandlerInvoker } from "packages/dev/latvian/mods/kubejs/core/mixin/common/$EventHandlerInvoker"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"
import { $EventJS, $EventJS$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $BaseFunction } from "packages/dev/latvian/mods/rhino/$BaseFunction"
import { $Set } from "packages/java/util/$Set"
import { $IEventHandler$$Type } from "packages/dev/latvian/mods/kubejs/event/$IEventHandler"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $EventGroup } from "packages/dev/latvian/mods/kubejs/event/$EventGroup"
import { $EventExceptionHandler$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler"

export class $EventHandler extends $BaseFunction implements $EventHandlerInvoker {
readonly "eventType": $Supplier<$Class<$EventJS>>
readonly "group": $EventGroup
readonly "name": string
readonly "scriptTypePredicate": $ScriptTypePredicate

public "cancelable"(): $EventHandler
public "delete"(context0: $Context$$Type, int1: integer): void
public "enumerationIteratorHasNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "enumerationIteratorNext"(cx: $Context$$Type, currentId: $Consumer$$Type<any>): boolean
public "findUniqueExtraIds"(type: $ScriptType$$Type): $Set<any>
public "forEachListener"(type: $ScriptType$$Type, callback: $Consumer$$Type<$EventHandlerContainer$$Type>): void
public "get"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): any
public "getAllIds"(cx: $Context$$Type): any[]
public "getDefaultValue"(context0: $Context$$Type, class1: $Class$$Type<any>): any
public "getHasResult"(): boolean
public "getIds"(context0: $Context$$Type): any[]
public "getParentScope"(): $Scriptable
public "getPrototype"(context0: $Context$$Type): $Scriptable
public "has"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type): boolean
public "hasListeners"(extraId: any): boolean
public "hasListeners"(): boolean
public "hasResult"(): $EventHandler
public "listen"(type: $ScriptType$$Type, extraId: any, handler: $IEventHandler$$Type): void
public "post"(event: $EventJS$$Type, extraId: any, exh: $EventExceptionHandler$$Type): $EventResult
public "post"(type: $ScriptTypeHolder$$Type, extraId: any, event: $EventJS$$Type): $EventResult
public "post"(type: $ScriptTypeHolder$$Type, extraId: any, event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public "post"(extraId: any, event: $EventJS$$Type): boolean
public "post"(event: $EventJS$$Type): boolean
public "post"(scriptType: $ScriptTypeHolder$$Type, event: $EventJS$$Type): $EventResult
public "post"(event: $EventJS$$Type, extraId: any): $EventResult
public "post"(scriptType: $ScriptTypeHolder$$Type, event: $EventJS$$Type, exh: $EventExceptionHandler$$Type): $EventResult
public "put"(context0: $Context$$Type, int1: integer, scriptable2: $Scriptable$$Type, object3: any): void
public "setParentScope"(scriptable0: $Scriptable$$Type): void
public "setPrototype"(scriptable0: $Scriptable$$Type): void
get "parentScope"(): $Scriptable
set "parentScope"(value: $Scriptable$$Type)
set "prototype"(value: $Scriptable$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventGroup" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $ScriptTypePredicate$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate"
import { $Class } from "packages/java/lang/$Class"
import { $EventHandler } from "packages/dev/latvian/mods/kubejs/event/$EventHandler"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Map } from "packages/java/util/$Map"

export class $EventGroup {
readonly "name": string

public "add"(name: string, scriptType: $ScriptTypePredicate$$Type, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "client"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "common"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public static "getGroups"(): $Map<string, $EventGroup>
public "getHandlers"(): $Map<string, $EventHandler>
public static "of"(name: string): $EventGroup
public "register"(): void
public "server"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
public "startup"(name: string, eventType: $Supplier$$Type<$Class<$EventJS>>): $EventHandler
get "handlers"(): $Map<string, $EventHandler>
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EventJS {
constructor()

/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventResult" {
import { $EventResult$Type } from "packages/dev/latvian/mods/kubejs/event/$EventResult$Type"
import { $EventResult as $EventResult$0 } from "packages/dev/architectury/event/$EventResult"
import { $CompoundEventResult } from "packages/dev/architectury/event/$CompoundEventResult"

export class $EventResult {
static readonly "PASS": $EventResult

public "arch"(): $EventResult$0
public "archCompound"<T>(): $CompoundEventResult<T>
public "error"(): boolean
public "interruptDefault"(): boolean
public "interruptFalse"(): boolean
public "interruptTrue"(): boolean
public "override"(): boolean
public "pass"(): boolean
public "type"(): $EventResult$Type
public "value"(): any
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$StartupEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"

export class $StartupEventJS extends $EventJS {
constructor()

}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventResult$Type" {
import { $EventExit } from "packages/dev/latvian/mods/kubejs/event/$EventExit"
import { $EventResult } from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import { $Enum } from "packages/java/lang/$Enum"
import { $EventResult as $EventResult$0 } from "packages/dev/architectury/event/$EventResult"

export class $EventResult$Type extends $Enum<$EventResult$Type> {
static readonly "ERROR": $EventResult$Type
static readonly "INTERRUPT_DEFAULT": $EventResult$Type
static readonly "INTERRUPT_FALSE": $EventResult$Type
static readonly "INTERRUPT_TRUE": $EventResult$Type
static readonly "PASS": $EventResult$Type
readonly "defaultArchResult": $EventResult$0
readonly "defaultExit": $EventExit
readonly "defaultResult": $EventResult

public "exit"(value: any): $EventExit
public static "valueOf"(name: string): $EventResult$Type
public static "values"(): $EventResult$Type[]
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler" {
import { $EventJS$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $EventHandlerContainer$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer"

export interface $EventExceptionHandler {
"handle"(eventJS0: $EventJS$$Type, eventHandlerContainer1: $EventHandlerContainer$$Type, throwable2: $Throwable$$Type): $Throwable
}

export namespace $EventExceptionHandler {
const probejs$$marker: never
}
export abstract class $EventExceptionHandler$$Static implements $EventExceptionHandler {
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventExit" {
import { $EventResult, $EventResult$$Type } from "packages/dev/latvian/mods/kubejs/event/$EventResult"
import { $Exception } from "packages/java/lang/$Exception"

export class $EventExit extends $Exception {
readonly "result": $EventResult

constructor(result: $EventResult$$Type)

}
}

