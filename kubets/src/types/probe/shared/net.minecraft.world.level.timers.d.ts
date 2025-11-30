declare module "packages/net/minecraft/world/level/timers/$TimerCallback$Serializer" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $TimerCallback, $TimerCallback$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallback"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $TimerCallback$Serializer<T, C extends $TimerCallback<T>> {
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<any>)

public "deserialize"(compoundTag0: $CompoundTag$$Type): C
public "getCls"(): $Class<any>
public "getId"(): $ResourceLocation
public "serialize"(compoundTag0: $CompoundTag$$Type, c1: C): void
get "cls"(): $Class<any>
get "id"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerQueue" {
import { $Set } from "packages/java/util/$Set"
import { $ListTag } from "packages/net/minecraft/nbt/$ListTag"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $TimerCallback$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallback"
import { $TimerCallbacks$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallbacks"
import { $Dynamic$$Type } from "packages/com/mojang/serialization/$Dynamic"

export class $TimerQueue<T> {
constructor(timerCallbacks0: $TimerCallbacks$$Type<T>)
constructor(timerCallbacks0: $TimerCallbacks$$Type<T>, stream1: $Stream$$Type<$Dynamic$$Type<any>>)

public "getEventsIds"(): $Set<string>
public "remove"(string0: string): integer
public "schedule"(string0: string, long1: long, timerCallback2: $TimerCallback$$Type<T>): void
public "store"(): $ListTag
public "tick"(t0: T, long1: long): void
get "eventsIds"(): $Set<string>
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerCallbacks" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $TimerCallback, $TimerCallback$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallback"
import { $TimerCallback$Serializer$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallback$Serializer"

export class $TimerCallbacks<C> {
static readonly "SERVER_CALLBACKS": $TimerCallbacks<$MinecraftServer>

constructor()

public "deserialize"(compoundTag0: $CompoundTag$$Type): $TimerCallback<C>
public "register"(serializer0: $TimerCallback$Serializer$$Type<C, any>): $TimerCallbacks<C>
public "serialize"<T extends $TimerCallback<C>>(t0: T): $CompoundTag
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerCallback" {
import { $TimerQueue$$Type } from "packages/net/minecraft/world/level/timers/$TimerQueue"

export interface $TimerCallback<T> {
"handle"(t0: T, timerQueue1: $TimerQueue$$Type<T>, long2: long): void
}

export namespace $TimerCallback {
const probejs$$marker: never
}
export abstract class $TimerCallback$$Static<T> implements $TimerCallback<T> {
}
}

