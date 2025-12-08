declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext" {
import { $PermissionDynamicContextKey } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContextKey"

export class $PermissionDynamicContext<T> {
public "getDynamic"(): $PermissionDynamicContextKey<T>
public "getSerializedValue"(): string
public "getValue"(): T
get "dynamic"(): $PermissionDynamicContextKey<T>
get "serializedValue"(): string
get "value"(): T
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent$Handler" {
import { $IPermissionHandlerFactory, $IPermissionHandlerFactory$$Type } from "packages/net/minecraftforge/server/permission/handler/$IPermissionHandlerFactory"
import { $PermissionGatherEvent } from "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"

export class $PermissionGatherEvent$Handler extends $PermissionGatherEvent {
constructor()

public "addPermissionHandler"(resourceLocation0: $ResourceLocation$$Type, iPermissionHandlerFactory1: $IPermissionHandlerFactory$$Type): void
public "getAvailablePermissionHandlerFactories"(): $Map<$ResourceLocation, $IPermissionHandlerFactory>
get "availablePermissionHandlerFactories"(): $Map<$ResourceLocation, $IPermissionHandlerFactory>
}
}

declare module "packages/net/minecraftforge/server/permission/handler/$IPermissionHandlerFactory" {
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $PermissionNode$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionNode"
import { $IPermissionHandler } from "packages/net/minecraftforge/server/permission/handler/$IPermissionHandler"

export interface $IPermissionHandlerFactory {
"create"(collection0: $Collection$$Type<$PermissionNode$$Type<any>>): $IPermissionHandler
}

export namespace $IPermissionHandlerFactory {
const probejs$$marker: never
}
export abstract class $IPermissionHandlerFactory$$Static implements $IPermissionHandlerFactory {
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionType" {
import { $Class } from "packages/java/lang/$Class"

export class $PermissionType<T> {
public "typeName"(): string
public "typeToken"(): $Class<T>
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContextKey" {
import { $PermissionDynamicContext } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Record } from "packages/java/lang/$Record"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"

export class $PermissionDynamicContextKey<T> extends $Record {
constructor(typeToken: $Class$$Type<T>, name: string, serializer: $Function$$Type<T, string>)

public "createContext"(t0: T): $PermissionDynamicContext<T>
public "name"(): string
public "serializer"(): $Function<T, string>
public "typeToken"(): $Class<T>
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent$Nodes" {
import { $Collection } from "packages/java/util/$Collection"
import { $PermissionNode, $PermissionNode$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionNode"
import { $PermissionGatherEvent } from "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"

export class $PermissionGatherEvent$Nodes extends $PermissionGatherEvent {
constructor()

public "addNodes"(iterable0: $Iterable$$Type<$PermissionNode$$Type<any>>): void
public "addNodes"(...permissionNode0s: $PermissionNode$$Type<any>[]): void
public "getNodes"(): $Collection<$PermissionNode<any>>
get "nodes"(): $Collection<$PermissionNode<any>>
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionNode$PermissionResolver" {
import { $PermissionDynamicContext$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"

export interface $PermissionNode$PermissionResolver<T> {
"resolve"(serverPlayer0: $ServerPlayer$$Type, uUID1: $UUID$$Type, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
}

export namespace $PermissionNode$PermissionResolver {
const probejs$$marker: never
}
export abstract class $PermissionNode$PermissionResolver$$Static<T> implements $PermissionNode$PermissionResolver<T> {
}
}

declare module "packages/net/minecraftforge/server/permission/events/$PermissionGatherEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $PermissionGatherEvent extends $Event {
constructor()

}
}

declare module "packages/net/minecraftforge/server/permission/handler/$IPermissionHandler" {
import { $PermissionDynamicContext$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContext"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $PermissionNode, $PermissionNode$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionNode"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPermissionHandler {
"getIdentifier"(): $ResourceLocation
"getOfflinePermission"<T>(uUID0: $UUID$$Type, permissionNode1: $PermissionNode$$Type<T>, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
"getPermission"<T>(serverPlayer0: $ServerPlayer$$Type, permissionNode1: $PermissionNode$$Type<T>, ...permissionDynamicContext2s: $PermissionDynamicContext$$Type<any>[]): T
"getRegisteredNodes"(): $Set<$PermissionNode<any>>
get "identifier"(): $ResourceLocation
get "registeredNodes"(): $Set<$PermissionNode<any>>
}

export namespace $IPermissionHandler {
const probejs$$marker: never
}
export abstract class $IPermissionHandler$$Static implements $IPermissionHandler {
}
}

declare module "packages/net/minecraftforge/server/permission/nodes/$PermissionNode" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PermissionDynamicContextKey, $PermissionDynamicContextKey$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionDynamicContextKey"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PermissionNode$PermissionResolver, $PermissionNode$PermissionResolver$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionNode$PermissionResolver"
import { $PermissionType, $PermissionType$$Type } from "packages/net/minecraftforge/server/permission/nodes/$PermissionType"

export class $PermissionNode<T> {
constructor(string0: string, string1: string, permissionType2: $PermissionType$$Type<T>, permissionResolver3: $PermissionNode$PermissionResolver$$Type<T>, ...permissionDynamicContextKey4s: $PermissionDynamicContextKey$$Type<any>[])
constructor(resourceLocation0: $ResourceLocation$$Type, permissionType1: $PermissionType$$Type<T>, permissionResolver2: $PermissionNode$PermissionResolver$$Type<T>, ...permissionDynamicContextKey3s: $PermissionDynamicContextKey$$Type<any>[])

public "getDefaultResolver"(): $PermissionNode$PermissionResolver<T>
public "getDescription"(): $Component
public "getDynamics"(): $PermissionDynamicContextKey<any>[]
public "getNodeName"(): string
public "getReadableName"(): $Component
public "getType"(): $PermissionType<T>
public "setInformation"(component0: $Component$$Type, component1: $Component$$Type): $PermissionNode<any>
get "defaultResolver"(): $PermissionNode$PermissionResolver<T>
get "description"(): $Component
get "dynamics"(): $PermissionDynamicContextKey<any>[]
get "nodeName"(): string
get "readableName"(): $Component
get "type"(): $PermissionType<T>
}
}

