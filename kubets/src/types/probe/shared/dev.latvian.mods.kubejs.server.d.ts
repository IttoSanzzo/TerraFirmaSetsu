declare module "packages/dev/latvian/mods/kubejs/server/$CustomCommandEventJS" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityEventJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $CustomCommandEventJS extends $EntityEventJS {
constructor(l: $Level$$Type, e: $Entity$$Type, p: $BlockPos$$Type, i: string)

public "getBlock"(): $BlockContainerJS
public "getId"(): string
get "block"(): $BlockContainerJS
get "id"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/server/$ServerEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export class $ServerEventJS extends $EventJS {
readonly "server": $MinecraftServer

constructor(s: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
}
}

declare module "packages/dev/latvian/mods/kubejs/server/tag/$TagWrapper" {
import { $TagEventJS, $TagEventJS$$Type } from "packages/dev/latvian/mods/kubejs/server/tag/$TagEventJS"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagLoader$EntryWithSource, $TagLoader$EntryWithSource$$Type } from "packages/net/minecraft/tags/$TagLoader$EntryWithSource"

export class $TagWrapper {
readonly "entries": $List<$TagLoader$EntryWithSource>
readonly "event": $TagEventJS
readonly "id": $ResourceLocation

constructor(e: $TagEventJS$$Type, i: $ResourceLocation$$Type, t: $List$$Type<$TagLoader$EntryWithSource$$Type>)

public "add"(...filters: any[]): $TagWrapper
public "getObjectIds"(): $List<$ResourceLocation>
public "remove"(...filters: any[]): $TagWrapper
public "removeAll"(): $TagWrapper
get "objectIds"(): $List<$ResourceLocation>
}
}

declare module "packages/dev/latvian/mods/kubejs/server/$CommandEventJS" {
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $ServerEventJS } from "packages/dev/latvian/mods/kubejs/server/$ServerEventJS"
import { $CommandPerformEvent$$Type } from "packages/dev/architectury/event/events/common/$CommandPerformEvent"
import { $ParseResults, $ParseResults$$Type } from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandEventJS extends $ServerEventJS {
constructor(e: $CommandPerformEvent$$Type)

public "getCommandName"(): string
public "getException"(): $Throwable
public "getInput"(): string
public "getParseResults"(): $ParseResults<$CommandSourceStack>
public "setException"(exception: $Throwable$$Type): void
public "setParseResults"(parse: $ParseResults$$Type<$CommandSourceStack$$Type>): void
get "commandName"(): string
get "exception"(): $Throwable
get "input"(): string
get "parseResults"(): $ParseResults<$CommandSourceStack>
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<$CommandSourceStack$$Type>)
}
}

declare module "packages/dev/latvian/mods/kubejs/server/tag/$TagEventJS" {
import { $TagWrapper } from "packages/dev/latvian/mods/kubejs/server/tag/$TagWrapper"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Set } from "packages/java/util/$Set"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $RegistryInfo, $RegistryInfo$$Type } from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $EventExceptionHandler } from "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler"
import { $Map } from "packages/java/util/$Map"

export class $TagEventJS extends $EventJS {
static readonly "SOURCE": string
static readonly "TAG_EVENT_HANDLER": $EventExceptionHandler
readonly "registry": $RegistryInfo<any>
readonly "tags": $Map<$ResourceLocation, $TagWrapper>
readonly "vanillaRegistry": $Registry<any>

constructor(ri: $RegistryInfo$$Type<any>, vr: $Registry$$Type<any>)

public "add"(tag: $ResourceLocation$$Type, ...filters: any[]): $TagWrapper
public "get"(id: $ResourceLocation$$Type): $TagWrapper
public "getElementIds"(): $Set<$ResourceLocation>
public "getType"(): $ResourceLocation
public "remove"(tag: $ResourceLocation$$Type, ...filters: any[]): $TagWrapper
public "removeAll"(tag: $ResourceLocation$$Type): $TagWrapper
public "removeAllTagsFrom"(...ids: any[]): void
get "totalAdded"(): integer
set "totalAdded"(value: integer)
get "totalRemoved"(): integer
set "totalRemoved"(value: integer)
get "elementIds"(): $Set<$ResourceLocation>
get "type"(): $ResourceLocation
}
}

