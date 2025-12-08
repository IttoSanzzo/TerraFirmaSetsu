declare module "packages/dev/latvian/mods/kubejs/script/data/$ExportablePackResources" {
import { $PackResources$ResourceOutput$$Type } from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $InputStream } from "packages/java/io/$InputStream"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ExportablePackResources extends $PackResources {
"close"(): void
"export"(path0: $Path$$Type): void
"getChildren"(): $Collection<$PackResources>
"getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
"getNamespaces"(packType0: $PackType$$Type): $Set<string>
"getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
"isBuiltin"(): boolean
"isHidden"(): boolean
"listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
"packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}

export namespace $ExportablePackResources {
const probejs$$marker: never
}
export abstract class $ExportablePackResources$$Static implements $ExportablePackResources {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExportablePackResources$$Type = ($ExportablePackResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExportablePackResources_ = $ExportablePackResources$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptType" {
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $Path } from "packages/java/nio/file/$Path"
import { $ScriptTypePredicate } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate"
import { $Enum } from "packages/java/lang/$Enum"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $ScriptTypeHolder } from "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder"
import { $ConsoleJS } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptType extends $Enum<$ScriptType> implements $ScriptTypePredicate, $ScriptTypeHolder {
static readonly "CLIENT": $ScriptType
static readonly "SERVER": $ScriptType
static readonly "STARTUP": $ScriptType
static readonly "VALUES": $ScriptType[]
readonly "console": $ConsoleJS
readonly "name": string
readonly "nameStrip": string
readonly "path": $Path

public "and"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
public static "getCurrent"(cx: $Context$$Type): $ScriptType
public "getLogFile"(): $Path
public "getValidTypes"(): $List<$ScriptType>
public "isClient"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isServer"(): boolean
public "isStartup"(): boolean
public "kjs$getScriptType"(): $ScriptType
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public "or"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
public "test"(type: $ScriptType$$Type): boolean
public static "valueOf"(name: string): $ScriptType
public static "values"(): $ScriptType[]
get "logFile"(): $Path
get "validTypes"(): $List<$ScriptType>
get "client"(): boolean
get "server"(): boolean
get "startup"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptType$$Type = ($ScriptType | ("startup" | "server" | "client"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptType_ = $ScriptType$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptSource" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ScriptFileInfo, $ScriptFileInfo$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptSource {
"readSource"(scriptFileInfo0: $ScriptFileInfo$$Type): $List<string>
}

export namespace $ScriptSource {
const probejs$$marker: never
}
export abstract class $ScriptSource$$Static implements $ScriptSource {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptSource$$Type = ($ScriptSource | ((arg0: $ScriptFileInfo) => $List$$Type<string>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptSource_ = $ScriptSource$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptFile" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $ScriptPack, $ScriptPack$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptPack"
import { $ScriptFileInfo, $ScriptFileInfo$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"
import { $ScriptSource, $ScriptSource$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptSource"
import { $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFile implements $Comparable<$ScriptFile> {
readonly "info": $ScriptFileInfo
readonly "pack": $ScriptPack
readonly "source": $ScriptSource

constructor(p: $ScriptPack$$Type, i: $ScriptFileInfo$$Type, s: $ScriptSource$$Type)

public "compareTo"(o: $ScriptFile$$Type): integer
public "load"(): void
public "redirect$ehg000$preEvalProcess"(instance: $Context$$Type, scope: $Scriptable$$Type, source: string, sourceName: string, lineno: integer, securityDomain: any): any
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptFile$$Type = ($ScriptFile);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptFile_ = $ScriptFile$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $List } from "packages/java/util/$List"
import { $ScriptFileInfo } from "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPackInfo {
readonly "displayName": $Component
readonly "namespace": string
readonly "pathStart": string
readonly "scripts": $List<$ScriptFileInfo>

constructor(n: string, p: string)

}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptPackInfo$$Type = ($ScriptPackInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptPackInfo_ = $ScriptPackInfo$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptTypePredicate" {
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List } from "packages/java/util/$List"
import { $ScriptType, $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypePredicate extends $Predicate<$ScriptType> {
"and"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
"getValidTypes"(): $List<$ScriptType>
"negate"(): $Predicate<$ScriptType>
"or"(predicate0: $Predicate$$Type<$ScriptType$$Type>): $Predicate<$ScriptType>
"test"(scriptType0: $ScriptType$$Type): boolean
get "validTypes"(): $List<$ScriptType>
}

export namespace $ScriptTypePredicate {
const ALL: $ScriptTypePredicate
const COMMON: $ScriptTypePredicate
const STARTUP_OR_CLIENT: $ScriptTypePredicate
const STARTUP_OR_SERVER: $ScriptTypePredicate
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $ScriptTypePredicate$$Static implements $ScriptTypePredicate {
static readonly "ALL": $ScriptTypePredicate
static readonly "COMMON": $ScriptTypePredicate
static readonly "STARTUP_OR_CLIENT": $ScriptTypePredicate
static readonly "STARTUP_OR_SERVER": $ScriptTypePredicate

static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptTypePredicate$$Type = ($ScriptTypePredicate | ((arg0: $ScriptType) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptTypePredicate_ = $ScriptTypePredicate$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/data/$GeneratedData" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ZipFile$$Type } from "packages/java/util/zip/$ZipFile"
import { $Record } from "packages/java/lang/$Record"
import { $InputStream } from "packages/java/io/$InputStream"
import { $ZipEntry$$Type } from "packages/java/util/zip/$ZipEntry"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $Lazy, $Lazy$$Type } from "packages/dev/latvian/mods/kubejs/util/$Lazy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $GeneratedData extends $Record implements $IoSupplier<$InputStream> {
static readonly "INTERNAL_RELOAD": $GeneratedData
static readonly "PACK_ICON": $GeneratedData
static readonly "PACK_META": $GeneratedData

constructor(id: $ResourceLocation$$Type, data: $Lazy$$Type<byte[]>, alwaysForget: boolean)

public "alwaysForget"(): boolean
public static "create"(path0: $Path$$Type): $IoSupplier<$InputStream>
public static "create"(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
public "data"(): $Lazy<byte[]>
public "get"(): $InputStream
public "id"(): $ResourceLocation
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GeneratedData$$Type = ($GeneratedData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GeneratedData_ = $GeneratedData$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper$ModInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper$ModInfo {
constructor(i: string)

public "getCustomName"(): string
public "getId"(): string
public "getName"(): string
public "getVersion"(): string
public "setName"(n: string): void
get "customName"(): string
get "id"(): string
get "name"(): string
get "version"(): string
set "name"(value: string)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlatformWrapper$ModInfo$$Type = ($PlatformWrapper$ModInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlatformWrapper$ModInfo_ = $PlatformWrapper$ModInfo$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptTypeHolder" {
import { $ScriptType, $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScriptTypeHolder {
"kjs$getScriptType"(): $ScriptType
}

export namespace $ScriptTypeHolder {
const probejs$$marker: never
}
export abstract class $ScriptTypeHolder$$Static implements $ScriptTypeHolder {
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptTypeHolder$$Type = ($ScriptTypeHolder | (() => $ScriptType$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptTypeHolder_ = $ScriptTypeHolder$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptManager" {
import { $Context, $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $NativeJavaClass } from "packages/dev/latvian/mods/rhino/$NativeJavaClass"
import { $ScriptType, $ScriptType$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ScriptPack } from "packages/dev/latvian/mods/kubejs/script/$ScriptPack"
import { $ClassShutter } from "packages/dev/latvian/mods/rhino/$ClassShutter"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"
import { $Map } from "packages/java/util/$Map"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptManager implements $ClassShutter {
readonly "packs": $Map<string, $ScriptPack>
readonly "scriptType": $ScriptType

constructor(t: $ScriptType$$Type)

public static "getCurrentContext"(): $Context
public "handler$ehe000$pjs$captureClass"(name: string, error: boolean, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ehe000$pjs$reloadStart"(ci: $CallbackInfo$$Type): void
public "isClassAllowed"(name: string): boolean
public "load"(): void
public "loadFromDirectory"(): void
public "loadJavaClass"(name: string, error: boolean): $NativeJavaClass
public "localvar$ehe000$pjs$supportTSPath"(name: string): string
public "reload"(resourceManager: $ResourceManager$$Type): void
public "unload"(): void
public "visibleToScripts"(fullClassName: string, type: integer): boolean
get "canListenEvents"(): boolean
set "canListenEvents"(value: boolean)
get "context"(): $Context
set "context"(value: $Context$$Type)
get "firstLoad"(): boolean
set "firstLoad"(value: boolean)
get "topLevelScope"(): $Scriptable
set "topLevelScope"(value: $Scriptable$$Type)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptManager$$Type = ($ScriptManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptManager_ = $ScriptManager$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptFileInfo" {
import { $List } from "packages/java/util/$List"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ScriptPackInfo, $ScriptPackInfo$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo"
import { $ScriptSource$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptSource"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptFileInfo {
readonly "file": string
readonly "id": $ResourceLocation
readonly "location": string
readonly "pack": $ScriptPackInfo

constructor(p: $ScriptPackInfo$$Type, f: string)

public "getPriority"(): integer
public "getProperties"(s: string): $List<string>
public "getProperty"(s: string, def: string): string
public "preload"(source: $ScriptSource$$Type): void
public "skipLoading"(): string
get "lines"(): string[]
set "lines"(value: string[])
get "priority"(): integer
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptFileInfo$$Type = ($ScriptFileInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptFileInfo_ = $ScriptFileInfo$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/data/$DataPackEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $MultiPackResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$MultiPackResourceManager"
import { $VirtualKubeJSDataPack$$Type } from "packages/dev/latvian/mods/kubejs/script/data/$VirtualKubeJSDataPack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DataPackEventJS extends $EventJS {
constructor(d: $VirtualKubeJSDataPack$$Type, rm: $MultiPackResourceManager$$Type)

public "add"(id: $ResourceLocation$$Type, content: string): void
public "addJson"(id: $ResourceLocation$$Type, json: $JsonElement$$Type): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataPackEventJS$$Type = ($DataPackEventJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataPackEventJS_ = $DataPackEventJS$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ConsoleLine$SourceLine" {
import { $Record } from "packages/java/lang/$Record"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine$SourceLine extends $Record {
constructor(buf: $FriendlyByteBuf$$Type)
constructor(source: string, line: integer)

public "line"(): integer
public "source"(): string
public static "write"(buf: $FriendlyByteBuf$$Type, sourceLine: $ConsoleLine$SourceLine$$Type): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConsoleLine$SourceLine$$Type = ($ConsoleLine$SourceLine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConsoleLine$SourceLine_ = $ConsoleLine$SourceLine$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/data/$VirtualKubeJSDataPack" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $AbstractPackResources } from "packages/net/minecraft/server/packs/$AbstractPackResources"
import { $Collection } from "packages/java/util/$Collection"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $ExportablePackResources } from "packages/dev/latvian/mods/kubejs/script/data/$ExportablePackResources"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $VirtualKubeJSDataPack extends $AbstractPackResources implements $ExportablePackResources {
readonly "high": boolean

constructor(h: boolean)

public "addData"(id: $ResourceLocation$$Type, data: string): void
public "export"(root: $Path$$Type): void
public "getChildren"(): $Collection<$PackResources>
public "getMetadataSection"<T>(serializer: $MetadataSectionSerializer$$Type<T>): T
public "hasNamespace"(key: string): boolean
public "isHidden"(): boolean
get "children"(): $Collection<$PackResources>
get "hidden"(): boolean
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VirtualKubeJSDataPack$$Type = ($VirtualKubeJSDataPack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VirtualKubeJSDataPack_ = $VirtualKubeJSDataPack$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ConsoleLine" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $LogType, $LogType$$Type } from "packages/dev/latvian/mods/kubejs/util/$LogType"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $ConsoleLine$SourceLine, $ConsoleLine$SourceLine$$Type } from "packages/dev/latvian/mods/kubejs/script/$ConsoleLine$SourceLine"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ConsoleJS, $ConsoleJS$$Type } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConsoleLine {
static readonly "EMPTY_ARRAY": $ConsoleLine[]
readonly "console": $ConsoleJS
readonly "timestamp": long

constructor(console: $ConsoleJS$$Type, timestamp: long, message: string)
constructor(buf: $FriendlyByteBuf$$Type)

public "getText"(): string
public "withExternalFile"(path: $Path$$Type): $ConsoleLine
public "withSourceLine"(source: string, line: integer): $ConsoleLine
public static "writeToNet"(buf: $FriendlyByteBuf$$Type, line: $ConsoleLine$$Type): void
get "externalFile"(): $Path
set "externalFile"(value: $Path$$Type)
get "group"(): string
set "group"(value: string)
get "message"(): string
set "message"(value: string)
get "sourceLines"(): $Collection<$ConsoleLine$SourceLine>
set "sourceLines"(value: $Collection$$Type<$ConsoleLine$SourceLine$$Type>)
get "stackTrace"(): $List<string>
set "stackTrace"(value: $List$$Type<string>)
get "type"(): $LogType
set "type"(value: $LogType$$Type)
get "text"(): string
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConsoleLine$$Type = ($ConsoleLine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConsoleLine_ = $ConsoleLine$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$ScriptPack" {
import { $ScriptFile } from "packages/dev/latvian/mods/kubejs/script/$ScriptFile"
import { $List } from "packages/java/util/$List"
import { $ScriptManager, $ScriptManager$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptManager"
import { $ScriptPackInfo, $ScriptPackInfo$$Type } from "packages/dev/latvian/mods/kubejs/script/$ScriptPackInfo"
import { $Scriptable, $Scriptable$$Type } from "packages/dev/latvian/mods/rhino/$Scriptable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ScriptPack {
readonly "info": $ScriptPackInfo
readonly "manager": $ScriptManager
readonly "scripts": $List<$ScriptFile>

constructor(m: $ScriptManager$$Type, i: $ScriptPackInfo$$Type)

get "scope"(): $Scriptable
set "scope"(value: $Scriptable$$Type)
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScriptPack$$Type = ($ScriptPack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScriptPack_ = $ScriptPack$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper" {
import { $Set } from "packages/java/util/$Set"
import { $PlatformWrapper$ModInfo } from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper$ModInfo"
import { $Map } from "packages/java/util/$Map"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $PlatformWrapper {
constructor()

public static "breakpoint"(...args: any[]): void
public static "getInfo"(modID: string): $PlatformWrapper$ModInfo
public static "getList"(): $Set<string>
public static "getMcVersion"(): string
public static "getMinecraftVersion"(): integer
public static "getMinecraftVersionString"(): string
public static "getModVersion"(): string
public static "getMods"(): $Map<string, $PlatformWrapper$ModInfo>
public static "getName"(): string
public static "isClientEnvironment"(): boolean
public static "isDevelopmentEnvironment"(): boolean
public static "isFabric"(): boolean
public static "isForge"(): boolean
public static "isGeneratingData"(): boolean
public static "isLoaded"(modId: string): boolean
public static "setModName"(modId: string, name: string): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlatformWrapper$$Type = ($PlatformWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlatformWrapper_ = $PlatformWrapper$$Type;
}
}

