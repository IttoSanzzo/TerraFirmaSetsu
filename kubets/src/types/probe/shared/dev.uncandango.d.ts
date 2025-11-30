declare module "packages/dev/uncandango/alltheleaks/mixin/$UpdateableLevel" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Class } from "packages/java/lang/$Class"
import { $WeakReference } from "packages/java/lang/ref/$WeakReference"
import { $HashMultimap } from "packages/com/google/common/collect/$HashMultimap"

export interface $UpdateableLevel<T> {
"atl$onClientLevelUpdated"(clientLevel0: $ClientLevel$$Type): void
}

export namespace $UpdateableLevel {
const INSTANCES: $HashMultimap<$Class<any>, $WeakReference<$UpdateableLevel<any>>>
function register<O extends $UpdateableLevel<any>>(o0: O): void
}
export abstract class $UpdateableLevel$$Static<T> implements $UpdateableLevel<T> {
static readonly "INSTANCES": $HashMultimap<$Class<any>, $WeakReference<$UpdateableLevel<any>>>

static "register"<O extends $UpdateableLevel<any>>(o0: O): void
}
}

declare module "packages/dev/uncandango/alltheleaks/plugins/$ATLJeiPlugin$RuntimeUnavailableEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ATLJeiPlugin$RuntimeUnavailableEvent extends $Event {
constructor()

}
}

declare module "packages/dev/uncandango/alltheleaks/mixin/$Trackable" {
import { $ReentrantLock } from "packages/java/util/concurrent/locks/$ReentrantLock"
import { $Class } from "packages/java/lang/$Class"
import { $ObjectOpenCustomHashSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import { $IdentityHashMap } from "packages/java/util/$IdentityHashMap"
import { $WeakReference } from "packages/java/lang/ref/$WeakReference"
import { $Hash$Strategy } from "packages/it/unimi/dsi/fastutil/$Hash$Strategy"
import { $Map } from "packages/java/util/$Map"

export interface $Trackable {
"atl$getBaseClass"(): $Class<any>
"startTracking"(): void
"wrap"(): $WeakReference<$Trackable>
}

export namespace $Trackable {
const LOCK: $ReentrantLock
const TRACKABLE_MAP: $IdentityHashMap<$Class<any>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>
const WEAK_REFERENCE_STRATEGY: $Hash$Strategy<$WeakReference<$Trackable>>
function clearNullReferences(): void
function createWeakRefBasedSet(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
function getSummary(): $Map<$Class<any>, $Map<$Class<any>, long>>
function startTracking(object0: any): void
}
export abstract class $Trackable$$Static implements $Trackable {
static readonly "LOCK": $ReentrantLock
static readonly "TRACKABLE_MAP": $IdentityHashMap<$Class<any>, $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>>
static readonly "WEAK_REFERENCE_STRATEGY": $Hash$Strategy<$WeakReference<$Trackable>>

static "clearNullReferences"(): void
static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
static "startTracking"(object0: any): void
}
}

declare module "packages/dev/uncandango/alltheleaks/mixin/$Lockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Lockable {
"atl$isLocked"(): boolean
"atl$setLocked"(boolean0: boolean): void
}

export namespace $Lockable {
const probejs$$marker: never
}
export abstract class $Lockable$$Static implements $Lockable {
}
}

declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$ConnectionAccessor" {
import { $PacketListener$$Type } from "packages/net/minecraft/network/$PacketListener"

export interface $ConnectionAccessor {
"setPacketListener"(packetListener0: $PacketListener$$Type): void
set "packetListener"(value: $PacketListener$$Type)
}

export namespace $ConnectionAccessor {
const probejs$$marker: never
}
export abstract class $ConnectionAccessor$$Static implements $ConnectionAccessor {
}
}

declare module "packages/dev/uncandango/alltheleaks/mixin/$UpdateableLevel$RenderEnginesUpdated" {
import { $ClientLevel, $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $LevelEvent } from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $UpdateableLevel$RenderEnginesUpdated extends $LevelEvent {
constructor()
constructor(clientLevel0: $ClientLevel$$Type)

public "getLevel"(): $ClientLevel
get "level"(): $ClientLevel
}
}

declare module "packages/dev/uncandango/alltheleaks/mixin/core/accessor/$PlayerAdvancementsAccessor" {
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $PlayerAdvancementsAccessor {
"getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}

export namespace $PlayerAdvancementsAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAdvancementsAccessor$$Static implements $PlayerAdvancementsAccessor {
}
}

