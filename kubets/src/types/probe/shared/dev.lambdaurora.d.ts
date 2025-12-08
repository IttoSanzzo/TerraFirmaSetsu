declare module "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Creeper, $Creeper$$Type } from "packages/net/minecraft/world/entity/monster/$Creeper"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $DynamicLightHandler<T> {
"getLuminance"(t0: T): integer
"isWaterSensitive"(lightSource: T): boolean
}

export namespace $DynamicLightHandler {
function makeCreeperEntityHandler<T extends $Creeper>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
function makeHandler<T extends $LivingEntity>(luminance: $Function$$Type<T, integer>, waterSensitive: $Function$$Type<T, boolean>): $DynamicLightHandler<T>
function makeLivingEntityHandler<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
}
export abstract class $DynamicLightHandler$$Static<T> implements $DynamicLightHandler<T> {
static "makeCreeperEntityHandler"<T extends $Creeper>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
static "makeHandler"<T extends $LivingEntity>(luminance: $Function$$Type<T, integer>, waterSensitive: $Function$$Type<T, boolean>): $DynamicLightHandler<T>
static "makeLivingEntityHandler"<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<T>): $DynamicLightHandler<T>
}
}

