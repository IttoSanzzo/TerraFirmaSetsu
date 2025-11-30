declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener$DeliveryMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $GameEventListener$DeliveryMode extends $Enum<$GameEventListener$DeliveryMode> {
static readonly "BY_DISTANCE": $GameEventListener$DeliveryMode
static readonly "UNSPECIFIED": $GameEventListener$DeliveryMode

public static "valueOf"(string0: string): $GameEventListener$DeliveryMode
public static "values"(): $GameEventListener$DeliveryMode[]
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationInfo" {
import { $Record } from "packages/java/lang/$Record"
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Optional } from "packages/java/util/$Optional"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $VibrationInfo extends $Record {
static readonly "CODEC": $Codec<$VibrationInfo>

constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, uUID3: $UUID$$Type, uUID4: $UUID$$Type, entity5: $Entity$$Type)
constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, entity3: $Entity$$Type)
constructor(gameEvent0: $GameEvent$$Type, float1: float, vec32: $Vec3$$Type, uUID3: $UUID$$Type, uUID4: $UUID$$Type)

public "distance"(): float
public "entity"(): $Entity
public "gameEvent"(): $GameEvent
public "getEntity"(serverLevel0: $ServerLevel$$Type): $Optional<$Entity>
public "getProjectileOwner"(serverLevel0: $ServerLevel$$Type): $Optional<$Entity>
public "pos"(): $Vec3
public "projectileOwnerUuid"(): $UUID
public "uuid"(): $UUID
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListenerRegistry$ListenerVisitor" {
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $GameEventListener$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $GameEventListenerRegistry$ListenerVisitor {
"visit"(gameEventListener0: $GameEventListener$$Type, vec31: $Vec3$$Type): void
}

export namespace $GameEventListenerRegistry$ListenerVisitor {
const probejs$$marker: never
}
export abstract class $GameEventListenerRegistry$ListenerVisitor$$Static implements $GameEventListenerRegistry$ListenerVisitor {
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem" {
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $VibrationSystem$User } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User"
import { $VibrationSystem$Data } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data"

export interface $VibrationSystem {
"getVibrationData"(): $VibrationSystem$Data
"getVibrationUser"(): $VibrationSystem$User
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
}

export namespace $VibrationSystem {
const RESONANCE_EVENTS: $GameEvent[]
const VIBRATION_FREQUENCY_FOR_EVENT: $ToIntFunction<$GameEvent>
function getGameEventFrequency(gameEvent0: $GameEvent$$Type): integer
function getRedstoneStrengthForDistance(float0: float, int1: integer): integer
function getResonanceEventByFrequency(int0: integer): $GameEvent
}
export abstract class $VibrationSystem$$Static implements $VibrationSystem {
static readonly "RESONANCE_EVENTS": $GameEvent[]
static readonly "VIBRATION_FREQUENCY_FOR_EVENT": $ToIntFunction<$GameEvent>

static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
static "getResonanceEventByFrequency"(int0: integer): $GameEvent
}
}

declare module "packages/net/minecraft/world/level/gameevent/$EntityPositionSource$Type" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $PositionSourceType, $PositionSourceType$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $PositionSource, $PositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $EntityPositionSource, $EntityPositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$EntityPositionSource"

export class $EntityPositionSource$Type implements $PositionSourceType<$EntityPositionSource> {
constructor()

public "codec"(): $Codec<$EntityPositionSource>
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
public static "register"<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
public static "toNetwork"<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, entityPositionSource1: $EntityPositionSource$$Type): void
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener" {
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $GameEventListener$DeliveryMode } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$DeliveryMode"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $PositionSource } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"

export interface $GameEventListener {
"getDeliveryMode"(): $GameEventListener$DeliveryMode
"getListenerRadius"(): integer
"getListenerSource"(): $PositionSource
"handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
}

export namespace $GameEventListener {
const probejs$$marker: never
}
export abstract class $GameEventListener$$Static implements $GameEventListener {
}
}

declare module "packages/net/minecraft/world/level/gameevent/$PositionSource" {
import { $PositionSourceType } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $Optional } from "packages/java/util/$Optional"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export interface $PositionSource {
"getPosition"(level0: $Level$$Type): $Optional<$Vec3>
"getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}

export namespace $PositionSource {
const CODEC: $Codec<$PositionSource>
}
export abstract class $PositionSource$$Static implements $PositionSource {
static readonly "CODEC": $Codec<$PositionSource>

}
}

declare module "packages/net/minecraft/world/level/gameevent/$DynamicGameEventListener" {
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameEventListener, $GameEventListener$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DynamicGameEventListener<T extends $GameEventListener> {
constructor(t0: T)

public "add"(serverLevel0: $ServerLevel$$Type): void
public "getListener"(): T
public "move"(serverLevel0: $ServerLevel$$Type): void
public "remove"(serverLevel0: $ServerLevel$$Type): void
get "listener"(): T
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSelector" {
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $VibrationInfo, $VibrationInfo$$Type } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationInfo"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $VibrationSelector {
static readonly "CODEC": $Codec<$VibrationSelector>

constructor(optional0: $Optional$$Type<$VibrationInfo$$Type>, long1: long)
constructor()

public "addCandidate"(vibrationInfo0: $VibrationInfo$$Type, long1: long): void
public "chosenCandidate"(long0: long): $Optional<$VibrationInfo>
public "startOver"(): void
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data" {
import { $VibrationSelector } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSelector"
import { $VibrationInfo, $VibrationInfo$$Type } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationInfo"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $VibrationSystem$Data {
static "CODEC": $Codec<$VibrationSystem$Data>
static readonly "NBT_TAG_KEY": string

constructor()

public "decrementTravelTime"(): void
public "getCurrentVibration"(): $VibrationInfo
public "getSelectionStrategy"(): $VibrationSelector
public "getTravelTimeInTicks"(): integer
public "setCurrentVibration"(vibrationInfo0: $VibrationInfo$$Type): void
public "setReloadVibrationParticle"(boolean0: boolean): void
public "setTravelTimeInTicks"(int0: integer): void
public "shouldReloadVibrationParticle"(): boolean
get "currentVibration"(): $VibrationInfo
get "selectionStrategy"(): $VibrationSelector
get "travelTimeInTicks"(): integer
set "currentVibration"(value: $VibrationInfo$$Type)
set "reloadVibrationParticle"(value: boolean)
set "travelTimeInTicks"(value: integer)
}
}

declare module "packages/net/minecraft/world/level/gameevent/$BlockPositionSource" {
import { $PositionSourceType } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $Optional } from "packages/java/util/$Optional"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $PositionSource } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockPositionSource implements $PositionSource {
static readonly "CODEC": $Codec<$BlockPositionSource>

constructor(blockPos0: $BlockPos$$Type)

public "getPosition"(level0: $Level$$Type): $Optional<$Vec3>
public "getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User" {
import { $GameEvent, $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $PositionSource } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $VibrationSystem$User {
"calculateTravelTimeInTicks"(float0: float): integer
"canReceiveVibration"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, gameEvent2: $GameEvent$$Type, context3: $GameEvent$Context$$Type): boolean
"canTriggerAvoidVibration"(): boolean
"getListenableEvents"(): $TagKey<$GameEvent>
"getListenerRadius"(): integer
"getPositionSource"(): $PositionSource
"isValidVibration"(gameEvent0: $GameEvent$$Type, context1: $GameEvent$Context$$Type): boolean
"onDataChanged"(): void
"onReceiveVibration"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, gameEvent2: $GameEvent$$Type, entity3: $Entity$$Type, entity4: $Entity$$Type, float5: float): void
"requiresAdjacentChunksToBeTicking"(): boolean
get "listenableEvents"(): $TagKey<$GameEvent>
get "listenerRadius"(): integer
get "positionSource"(): $PositionSource
}

export namespace $VibrationSystem$User {
const probejs$$marker: never
}
export abstract class $VibrationSystem$User$$Static implements $VibrationSystem$User {
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener$Holder" {
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $GameEventListener$Holder<T extends $GameEventListener> {
"getListener"(): T
get "listener"(): T
}

export namespace $GameEventListener$Holder {
const probejs$$marker: never
}
export abstract class $GameEventListener$Holder$$Static<T extends $GameEventListener> implements $GameEventListener$Holder<T> {
}
}

declare module "packages/net/minecraft/world/level/gameevent/$EntityPositionSource" {
import { $PositionSourceType } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $Optional } from "packages/java/util/$Optional"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $PositionSource } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPositionSource implements $PositionSource {
static readonly "CODEC": $Codec<$EntityPositionSource>

constructor(entity0: $Entity$$Type, float1: float)

public "getPosition"(level0: $Level$$Type): $Optional<$Vec3>
public "getType"(): $PositionSourceType<any>
get "type"(): $PositionSourceType<any>
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Listener" {
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $GameEventListener$DeliveryMode } from "packages/net/minecraft/world/level/gameevent/$GameEventListener$DeliveryMode"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $PositionSource } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $VibrationSystem$$Type } from "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VibrationSystem$Listener implements $GameEventListener {
constructor(vibrationSystem0: $VibrationSystem$$Type)

public static "distanceBetweenInBlocks"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): float
public "forceScheduleVibration"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): void
public "getDeliveryMode"(): $GameEventListener$DeliveryMode
public "getListenerRadius"(): integer
public "getListenerSource"(): $PositionSource
public "handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListenerRegistry" {
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $GameEventListener$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import { $GameEventListenerRegistry$ListenerVisitor$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListenerRegistry$ListenerVisitor"

export interface $GameEventListenerRegistry {
"isEmpty"(): boolean
"register"(gameEventListener0: $GameEventListener$$Type): void
"unregister"(gameEventListener0: $GameEventListener$$Type): void
"visitInRangeListeners"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type, listenerVisitor3: $GameEventListenerRegistry$ListenerVisitor$$Type): boolean
get "empty"(): boolean
}

export namespace $GameEventListenerRegistry {
const NOOP: $GameEventListenerRegistry
}
export abstract class $GameEventListenerRegistry$$Static implements $GameEventListenerRegistry {
static readonly "NOOP": $GameEventListenerRegistry

}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEvent$Context" {
import { $Record } from "packages/java/lang/$Record"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $GameEvent$Context extends $Record {
constructor(entity0: $Entity$$Type, blockState1: $BlockState$$Type)

public "affectedState"(): $BlockState
public static "of"(blockState0: $BlockState$$Type): $GameEvent$Context
public static "of"(entity0: $Entity$$Type, blockState1: $BlockState$$Type): $GameEvent$Context
public static "of"(entity0: $Entity$$Type): $GameEvent$Context
public "sourceEntity"(): $Entity
}
}

declare module "packages/net/minecraft/world/level/gameevent/$BlockPositionSource$Type" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BlockPositionSource, $BlockPositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$BlockPositionSource"
import { $PositionSourceType, $PositionSourceType$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSourceType"
import { $PositionSource, $PositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $BlockPositionSource$Type implements $PositionSourceType<$BlockPositionSource> {
constructor()

public "codec"(): $Codec<$BlockPositionSource>
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
public static "register"<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
public static "toNetwork"<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, blockPositionSource1: $BlockPositionSource$$Type): void
}
}

