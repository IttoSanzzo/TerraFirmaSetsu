declare module "packages/earth/terrarium/adastra/client/screens/base/$AbstractContainerScreenExtension" {
import { $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $AbstractContainerScreenExtension {
"adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
}

export namespace $AbstractContainerScreenExtension {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenExtension$$Static implements $AbstractContainerScreenExtension {
}
}

declare module "packages/earth/terrarium/adastra/mixins/client/$SoundEngineAccessor" {
import { $SoundInstance } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $ChannelAccess$ChannelHandle } from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"
import { $Map } from "packages/java/util/$Map"

export interface $SoundEngineAccessor {
"getSoundChannels"(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>
get "soundChannels"(): $Map<$SoundInstance, $ChannelAccess$ChannelHandle>
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
export abstract class $SoundEngineAccessor$$Static implements $SoundEngineAccessor {
}
}

declare module "packages/earth/terrarium/adastra/mixins/common/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"isJumping"(): boolean
get "jumping"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "packages/earth/terrarium/adastra/mixins/common/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"setX"(int0: integer): void
"setY"(int0: integer): void
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

declare module "packages/earth/terrarium/adastra/mixins/client/$SoundManagerAccessor" {
import { $SoundEngine } from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $SoundManagerAccessor {
"getEngine"(): $SoundEngine
get "engine"(): $SoundEngine
}

export namespace $SoundManagerAccessor {
const probejs$$marker: never
}
export abstract class $SoundManagerAccessor$$Static implements $SoundManagerAccessor {
}
}

declare module "packages/earth/terrarium/adastra/common/entities/multipart/$MultipartPartsHolder" {
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $MultipartPartsHolder {
"adastra$getParts"(): $Int2ObjectMap<$Entity>
}

export namespace $MultipartPartsHolder {
const probejs$$marker: never
}
export abstract class $MultipartPartsHolder$$Static implements $MultipartPartsHolder {
}
}

declare module "packages/earth/terrarium/adastra/mixins/client/$LevelRendererAccessor" {
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $VertexBuffer } from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"

export interface $LevelRendererAccessor {
"getSkyBuffer"(): $VertexBuffer
"getTicks"(): integer
"invokeDoesMobEffectBlockSky"(camera0: $Camera$$Type): boolean
get "skyBuffer"(): $VertexBuffer
get "ticks"(): integer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

