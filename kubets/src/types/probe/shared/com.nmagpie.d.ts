declare module "packages/com/nmagpie/tfc_ie_addon/mixin/accessor/$BlockEntityAccessor" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export interface $BlockEntityAccessor {
"getLevel"(): $Level
"getWorldPosition"(): $BlockPos
get "level"(): $Level
get "worldPosition"(): $BlockPos
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityAccessor$$Static implements $BlockEntityAccessor {
}
}

