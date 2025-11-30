declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener$DeliveryMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEventListener$DeliveryMode$$Type = ($GameEventListener$DeliveryMode | ("unspecified" | "by_distance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEventListener$DeliveryMode_ = $GameEventListener$DeliveryMode$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationInfo$$Type = ($VibrationInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationInfo_ = $VibrationInfo$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListenerRegistry$ListenerVisitor" {
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $GameEventListener } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEventListenerRegistry$ListenerVisitor$$Type = ($GameEventListenerRegistry$ListenerVisitor | ((arg0: $GameEventListener, arg1: $Vec3) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEventListenerRegistry$ListenerVisitor_ = $GameEventListenerRegistry$ListenerVisitor$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationSystem$$Type = ($VibrationSystem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationSystem_ = $VibrationSystem$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$EntityPositionSource$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityPositionSource$Type$$Type = ($EntityPositionSource$Type);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityPositionSource$Type_ = $EntityPositionSource$Type$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEvent" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $InjectedGameEventExtension } from "packages/dev/architectury/extensions/injected/$InjectedGameEventExtension"

export class $GameEvent implements $InjectedGameEventExtension {
static readonly "BLOCK_ACTIVATE": $GameEvent
static readonly "BLOCK_ATTACH": $GameEvent
static readonly "BLOCK_CHANGE": $GameEvent
static readonly "BLOCK_CLOSE": $GameEvent
static readonly "BLOCK_DEACTIVATE": $GameEvent
static readonly "BLOCK_DESTROY": $GameEvent
static readonly "BLOCK_DETACH": $GameEvent
static readonly "BLOCK_OPEN": $GameEvent
static readonly "BLOCK_PLACE": $GameEvent
static readonly "CONTAINER_CLOSE": $GameEvent
static readonly "CONTAINER_OPEN": $GameEvent
static readonly "DEFAULT_NOTIFICATION_RADIUS": integer
static readonly "DRINK": $GameEvent
static readonly "EAT": $GameEvent
static readonly "ELYTRA_GLIDE": $GameEvent
static readonly "ENTITY_DAMAGE": $GameEvent
static readonly "ENTITY_DIE": $GameEvent
static readonly "ENTITY_DISMOUNT": $GameEvent
static readonly "ENTITY_INTERACT": $GameEvent
static readonly "ENTITY_MOUNT": $GameEvent
static readonly "ENTITY_PLACE": $GameEvent
static readonly "ENTITY_ROAR": $GameEvent
static readonly "ENTITY_SHAKE": $GameEvent
static readonly "EQUIP": $GameEvent
static readonly "EXPLODE": $GameEvent
static readonly "FLAP": $GameEvent
static readonly "FLUID_PICKUP": $GameEvent
static readonly "FLUID_PLACE": $GameEvent
static readonly "HIT_GROUND": $GameEvent
static readonly "INSTRUMENT_PLAY": $GameEvent
static readonly "ITEM_INTERACT_FINISH": $GameEvent
static readonly "ITEM_INTERACT_START": $GameEvent
static readonly "JUKEBOX_PLAY": $GameEvent
static readonly "JUKEBOX_STOP_PLAY": $GameEvent
static readonly "LIGHTNING_STRIKE": $GameEvent
static readonly "NOTE_BLOCK_PLAY": $GameEvent
static readonly "PRIME_FUSE": $GameEvent
static readonly "PROJECTILE_LAND": $GameEvent
static readonly "PROJECTILE_SHOOT": $GameEvent
static readonly "RESONATE_1": $GameEvent
static readonly "RESONATE_10": $GameEvent
static readonly "RESONATE_11": $GameEvent
static readonly "RESONATE_12": $GameEvent
static readonly "RESONATE_13": $GameEvent
static readonly "RESONATE_14": $GameEvent
static readonly "RESONATE_15": $GameEvent
static readonly "RESONATE_2": $GameEvent
static readonly "RESONATE_3": $GameEvent
static readonly "RESONATE_4": $GameEvent
static readonly "RESONATE_5": $GameEvent
static readonly "RESONATE_6": $GameEvent
static readonly "RESONATE_7": $GameEvent
static readonly "RESONATE_8": $GameEvent
static readonly "RESONATE_9": $GameEvent
static readonly "SCULK_SENSOR_TENDRILS_CLICKING": $GameEvent
static readonly "SHEAR": $GameEvent
static readonly "SHRIEK": $GameEvent
static readonly "SPLASH": $GameEvent
static readonly "STEP": $GameEvent
static readonly "SWIM": $GameEvent
static readonly "TELEPORT": $GameEvent

constructor(string0: string, int1: integer)

public "arch$holder"(): $Holder<$GameEvent>
public "arch$registryName"(): $ResourceLocation
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$GameEvent>
public "getName"(): string
public "getNotificationRadius"(): integer
public "is"(tagKey0: $TagKey$$Type<$GameEvent$$Type>): boolean
get "name"(): string
get "notificationRadius"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.GameEvent
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.GameEventTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEvent$$Type = ($GameEvent | Special.GameEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEvent_ = $GameEvent$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEventListener$$Type = ($GameEventListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEventListener_ = $GameEventListener$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$PositionSourceType" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BlockPositionSource } from "packages/net/minecraft/world/level/gameevent/$BlockPositionSource"
import { $PositionSource, $PositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $EntityPositionSource } from "packages/net/minecraft/world/level/gameevent/$EntityPositionSource"

export interface $PositionSourceType<T extends $PositionSource> {
"codec"(): $Codec<T>
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.PositionSourceType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.PositionSourceTypeTag
}

export namespace $PositionSourceType {
const BLOCK: $PositionSourceType<$BlockPositionSource>
const ENTITY: $PositionSourceType<$EntityPositionSource>
function fromNetwork(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
function register<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
function toNetwork<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
export abstract class $PositionSourceType$$Static<T extends $PositionSource> implements $PositionSourceType<T> {
static readonly "BLOCK": $PositionSourceType<$BlockPositionSource>
static readonly "ENTITY": $PositionSourceType<$EntityPositionSource>

static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PositionSource
static "register"<S extends $PositionSourceType<T>, T extends $PositionSource>(string0: string, s1: S): S
static "toNetwork"<T extends $PositionSource>(t0: T, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PositionSourceType$$Type<T extends $PositionSource> = ($PositionSourceType<T> | Special.PositionSourceType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PositionSourceType_<T extends $PositionSource> = $PositionSourceType$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$PositionSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PositionSource$$Type = ($PositionSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PositionSource_ = $PositionSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$DynamicGameEventListener" {
import { $GameEventListener, $GameEventListener$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicGameEventListener$$Type<T extends $GameEventListener> = ($DynamicGameEventListener<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicGameEventListener_<T extends $GameEventListener> = $DynamicGameEventListener$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSelector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationSelector$$Type = ($VibrationSelector);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationSelector_ = $VibrationSelector$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Data" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationSystem$Data$$Type = ($VibrationSystem$Data);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationSystem$Data_ = $VibrationSystem$Data$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$BlockPositionSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPositionSource$$Type = ($BlockPositionSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPositionSource_ = $BlockPositionSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$User" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationSystem$User$$Type = ($VibrationSystem$User);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationSystem$User_ = $VibrationSystem$User$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListener$Holder" {
import { $GameEventListener, $GameEventListener$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEventListener$Holder$$Type<T extends $GameEventListener> = ($GameEventListener$Holder<T> | (() => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEventListener$Holder_<T extends $GameEventListener> = $GameEventListener$Holder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$EntityPositionSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityPositionSource$$Type = ($EntityPositionSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityPositionSource_ = $EntityPositionSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/vibrations/$VibrationSystem$Listener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VibrationSystem$Listener$$Type = ($VibrationSystem$Listener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VibrationSystem$Listener_ = $VibrationSystem$Listener$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEventListenerRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEventListenerRegistry$$Type = ($GameEventListenerRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEventListenerRegistry_ = $GameEventListenerRegistry$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$GameEvent$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameEvent$Context$$Type = ($GameEvent$Context);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameEvent$Context_ = $GameEvent$Context$$Type;
}
}

declare module "packages/net/minecraft/world/level/gameevent/$BlockPositionSource$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockPositionSource$Type$$Type = ($BlockPositionSource$Type);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockPositionSource$Type_ = $BlockPositionSource$Type$$Type;
}
}

