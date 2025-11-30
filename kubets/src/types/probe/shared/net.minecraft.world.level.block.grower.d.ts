declare module "packages/net/minecraft/world/level/block/grower/$AbstractTreeGrower" {
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $AbstractTreeGrower {
constructor()

public "growTree"(serverLevel0: $ServerLevel$$Type, chunkGenerator1: $ChunkGenerator$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, randomSource4: $RandomSource$$Type): boolean
}
}

