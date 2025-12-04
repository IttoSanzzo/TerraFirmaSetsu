declare module "packages/waves/mixin/client/$GameRendererAccessor" {
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {
"getFov"(): float
"getFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
get "fov"(): float
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

