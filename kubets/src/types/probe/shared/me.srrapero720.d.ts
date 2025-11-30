declare module "packages/me/srrapero720/chloride/api/$IParticleTypeData" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IParticleTypeData {
"getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}

export namespace $IParticleTypeData {
const probejs$$marker: never
}
export abstract class $IParticleTypeData$$Static implements $IParticleTypeData {
}
}

declare module "packages/me/srrapero720/chloride/api/$IRenderableEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRenderableEntity {
"chloride$whitelisted"(): boolean
}

export namespace $IRenderableEntity {
const probejs$$marker: never
}
export abstract class $IRenderableEntity$$Static implements $IRenderableEntity {
}
}

declare module "packages/me/srrapero720/chloride/api/events/$FastModelSettingsUpdate$BedEvent" {
import { $FastModelSettingsUpdate } from "packages/me/srrapero720/chloride/api/events/$FastModelSettingsUpdate"

export class $FastModelSettingsUpdate$BedEvent extends $FastModelSettingsUpdate {
constructor()

}
}

declare module "packages/me/srrapero720/chloride/impl/$Darkness$DynamicTextureHook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Darkness$DynamicTextureHook {
"chloride$enableDarkness"(): void
}

export namespace $Darkness$DynamicTextureHook {
const probejs$$marker: never
}
export abstract class $Darkness$DynamicTextureHook$$Static implements $Darkness$DynamicTextureHook {
}
}

declare module "packages/me/srrapero720/chloride/api/$IGameLeaves" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGameLeaves {
"chloride$getRL"(): $ResourceLocation
"chloride$neighborCount"(): integer
}

export namespace $IGameLeaves {
const probejs$$marker: never
}
export abstract class $IGameLeaves$$Static implements $IGameLeaves {
}
}

declare module "packages/me/srrapero720/chloride/api/events/$FastModelSettingsUpdate" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $FastModelSettingsUpdate extends $Event {
constructor()

public "isEnabled"(): boolean
get "enabled"(): boolean
}
}

declare module "packages/me/srrapero720/chloride/api/events/$FastModelSettingsUpdate$ChestEvent" {
import { $FastModelSettingsUpdate } from "packages/me/srrapero720/chloride/api/events/$FastModelSettingsUpdate"

export class $FastModelSettingsUpdate$ChestEvent extends $FastModelSettingsUpdate {
constructor()

}
}

