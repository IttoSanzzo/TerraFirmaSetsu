declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventRenderEvent" {
import { $WorldEventInstance, $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $WorldEventInstanceEvent } from "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventInstanceEvent"
import { $WorldEventRenderer, $WorldEventRenderer$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventRenderer"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $WorldEventRenderEvent extends $WorldEventInstanceEvent {
constructor()
constructor(worldEventInstance0: $WorldEventInstance$$Type, worldEventRenderer1: $WorldEventRenderer$$Type<$WorldEventInstance$$Type>, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, float4: float)

public "getMultiBufferSource"(): $MultiBufferSource
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
public "getRenderer"(): $WorldEventRenderer<$WorldEventInstance>
get "multiBufferSource"(): $MultiBufferSource
get "partialTicks"(): float
get "poseStack"(): $PoseStack
get "renderer"(): $WorldEventRenderer<$WorldEventInstance>
}
}

declare module "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventRenderer" {
import { $WorldEventInstance, $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $WorldEventRenderer<T extends $WorldEventInstance> {
constructor()

public "canRender"(t0: T): boolean
public "render"(t0: T, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float): void
}
}

declare module "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $WorldEventInstance } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $WorldEventType$EventInstanceSupplier, $WorldEventType$EventInstanceSupplier$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType$EventInstanceSupplier"

export class $WorldEventType {
readonly "clientSynced": boolean
readonly "id": $ResourceLocation
readonly "supplier": $WorldEventType$EventInstanceSupplier

constructor(resourceLocation0: $ResourceLocation$$Type, eventInstanceSupplier1: $WorldEventType$EventInstanceSupplier$$Type, boolean2: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, eventInstanceSupplier1: $WorldEventType$EventInstanceSupplier$$Type)

public "createInstance"(compoundTag0: $CompoundTag$$Type): $WorldEventInstance
public "isClientSynced"(): boolean
}
}

declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventTickEvent" {
import { $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $WorldEventInstanceEvent } from "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventInstanceEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $WorldEventTickEvent extends $WorldEventInstanceEvent {
constructor()
constructor(worldEventInstance0: $WorldEventInstance$$Type, level1: $Level$$Type)

}
}

declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventInstanceEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $WorldEventInstance, $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $WorldEventInstanceEvent extends $Event {
constructor(worldEventInstance0: $WorldEventInstance$$Type, level1: $Level$$Type)
constructor()

public "getLevel"(): $Level
public "getWorldEvent"(): $WorldEventInstance
get "level"(): $Level
get "worldEvent"(): $WorldEventInstance
}
}

declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventCreationEvent" {
import { $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $WorldEventInstanceEvent } from "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventInstanceEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $WorldEventCreationEvent extends $WorldEventInstanceEvent {
constructor()
constructor(worldEventInstance0: $WorldEventInstance$$Type, level1: $Level$$Type)

}
}

declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventDiscardEvent" {
import { $WorldEventInstance$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"
import { $WorldEventInstanceEvent } from "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventInstanceEvent"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $WorldEventDiscardEvent extends $WorldEventInstanceEvent {
constructor()
constructor(worldEventInstance0: $WorldEventInstance$$Type, level1: $Level$$Type)

}
}

declare module "packages/team/lodestar/lodestone/events/types/$RightClickEmptyServer" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"

export class $RightClickEmptyServer extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type)

public static "onRightClickEmptyServer"(player0: $Player$$Type): void
}
}

declare module "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType$EventInstanceSupplier" {
import { $WorldEventInstance } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance"

export interface $WorldEventType$EventInstanceSupplier {
"getInstance"(): $WorldEventInstance
get "instance"(): $WorldEventInstance
}

export namespace $WorldEventType$EventInstanceSupplier {
const probejs$$marker: never
}
export abstract class $WorldEventType$EventInstanceSupplier$$Static implements $WorldEventType$EventInstanceSupplier {
}
}

declare module "packages/team/lodestar/lodestone/events/types/worldevent/$WorldEventTypeRegistryEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IModBusEvent } from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import { $WorldEventType } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $WorldEventType$EventInstanceSupplier$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType$EventInstanceSupplier"

export class $WorldEventTypeRegistryEvent extends $Event implements $IModBusEvent {
constructor()

public "create"(resourceLocation0: $ResourceLocation$$Type, eventInstanceSupplier1: $WorldEventType$EventInstanceSupplier$$Type, boolean2: boolean): $WorldEventType
}
}

declare module "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventInstance" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $WorldEventType, $WorldEventType$$Type } from "packages/team/lodestar/lodestone/systems/worldevent/$WorldEventType"

export class $WorldEventInstance {
constructor(worldEventType0: $WorldEventType$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): $WorldEventInstance
public "end"(level0: $Level$$Type): void
public "getLevel"(): $Level
public "isFrozen"(): boolean
public "serializeNBT"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "setDirty"(): void
public "start"(level0: $Level$$Type): void
public static "sync"<T extends $WorldEventInstance>(t0: T): void
public static "sync"<T extends $WorldEventInstance>(t0: T, serverPlayer1: $ServerPlayer$$Type): void
public "sync"(level0: $Level$$Type): void
public "synchronizeNBT"(): $CompoundTag
public "tick"(level0: $Level$$Type): void
get "dirty"(): boolean
set "dirty"(value: boolean)
get "discarded"(): boolean
set "discarded"(value: boolean)
get "frozen"(): boolean
set "frozen"(value: boolean)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "type"(): $WorldEventType
set "type"(value: $WorldEventType$$Type)
get "uuid"(): $UUID
set "uuid"(value: $UUID$$Type)
}
}

