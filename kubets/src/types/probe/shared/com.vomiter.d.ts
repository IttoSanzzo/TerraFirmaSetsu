declare module "packages/com/vomiter/survivorsdelight/mixin/$BlockEntityTypeAccessor" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockEntityTypeAccessor {
"getValidBlocks"(): $Set<$Block>
"setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
get "validBlocks"(): $Set<$Block>
set "validBlocks"(value: $Set$$Type<$Block$$Type>)
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {
}
}

declare module "packages/com/vomiter/survivorsabilities/mixin/workhorse/$AbstractHorseAccessor" {
import { $SimpleContainer } from "packages/net/minecraft/world/$SimpleContainer"

export interface $AbstractHorseAccessor {
"getInv"(): $SimpleContainer
get "inv"(): $SimpleContainer
}

export namespace $AbstractHorseAccessor {
const probejs$$marker: never
}
export abstract class $AbstractHorseAccessor$$Static implements $AbstractHorseAccessor {
}
}

