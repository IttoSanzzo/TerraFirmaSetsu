declare module "packages/fuzs/diagonalblocks/mixin/accessor/$VoxelShapeAccessor" {
import { $DiscreteVoxelShape, $DiscreteVoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $DoubleList } from "packages/it/unimi/dsi/fastutil/doubles/$DoubleList"

export interface $VoxelShapeAccessor {
"diagonalfences$callGetCoords"(axis0: $Direction$Axis$$Type): $DoubleList
"diagonalfences$getShape"(): $DiscreteVoxelShape
"diagonalfences$setShape"(discreteVoxelShape0: $DiscreteVoxelShape$$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export abstract class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {
}
}

