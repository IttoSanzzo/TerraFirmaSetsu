declare module "packages/net/mrhitech/artisanal/mixin/$BlockEntityTypeAccessor" {
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockEntityTypeAccessor {
"accessor$getValidBlocks"(): $Set<$Block>
"accessor$setValidBlocks"(set0: $Set$$Type<$Block$$Type>): void
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {
}
}

