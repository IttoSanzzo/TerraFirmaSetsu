declare module "packages/toni/sodiumdynamiclights/$DynamicLightSource" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $DynamicLightSource {
"sdl$dynamicLightTick"(): void
"sdl$getDynamicLightLevel"(): $Level
"sdl$getDynamicLightX"(): double
"sdl$getDynamicLightY"(): double
"sdl$getDynamicLightZ"(): double
"sdl$getLuminance"(): integer
"sdl$isDynamicLightEnabled"(): boolean
"sdl$resetDynamicLight"(): void
"sdl$setDynamicLightEnabled"(enabled: boolean): void
"sdl$shouldUpdateDynamicLight"(): boolean
"sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
"sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
}

export namespace $DynamicLightSource {
const probejs$$marker: never
}
export abstract class $DynamicLightSource$$Static implements $DynamicLightSource {
}
}

declare module "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder" {
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $DynamicLightHandler, $DynamicLightHandler$$Type } from "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $DynamicLightHandlerHolder<T> {
"sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<T>
"sodiumdynamiclights$getName"(): $Component
"sodiumdynamiclights$getSetting"(): boolean
"sodiumdynamiclights$setDynamicLightHandler"(dynamicLightHandler0: $DynamicLightHandler$$Type<T>): void
}

export namespace $DynamicLightHandlerHolder {
function cast<T extends $Entity>(entityType: $EntityType$$Type<T>): $DynamicLightHandlerHolder<T>
function cast<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<T>): $DynamicLightHandlerHolder<T>
}
export abstract class $DynamicLightHandlerHolder$$Static<T> implements $DynamicLightHandlerHolder<T> {
static "cast"<T extends $Entity>(entityType: $EntityType$$Type<T>): $DynamicLightHandlerHolder<T>
static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<T>): $DynamicLightHandlerHolder<T>
}
}

declare module "packages/toni/sodiumdynamiclights/accessor/$WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor {
"sodiumdynamiclights$scheduleChunkRebuild"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
}

export namespace $WorldRendererAccessor {
const probejs$$marker: never
}
export abstract class $WorldRendererAccessor$$Static implements $WorldRendererAccessor {
}
}

