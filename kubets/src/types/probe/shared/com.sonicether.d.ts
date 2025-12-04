declare module "packages/com/sonicether/soundphysics/world/$ClonedClientLevel" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $ClientLevelProxy } from "packages/com/sonicether/soundphysics/world/$ClientLevelProxy"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ClonedLevelChunk } from "packages/com/sonicether/soundphysics/world/$ClonedLevelChunk"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $ClonedClientLevel implements $ClientLevelProxy {
constructor(clientLevel0: $ClientLevel$$Type, blockPos1: $BlockPos$$Type, long2: long, int3: integer)

public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getChunk"(int0: integer, int1: integer): $ClonedLevelChunk
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getOrigin"(): $BlockPos
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getTick"(): long
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "origin"(): $BlockPos
get "sectionsCount"(): integer
get "tick"(): long
}
}

declare module "packages/com/sonicether/soundphysics/world/$ClonedLevelChunk" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LevelChunkSection$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunkSection"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $ClonedLevelChunk extends $ChunkAccess {
constructor(level0: $Level$$Type, chunkPos1: $ChunkPos$$Type, levelChunkSection2s: $LevelChunkSection$$Type[])

public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}
}

declare module "packages/com/sonicether/soundphysics/world/$ClientLevelProxy" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export interface $ClientLevelProxy extends $BlockGetter {
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $ClientLevelProxy {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $ClientLevelProxy$$Static implements $ClientLevelProxy {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "packages/com/sonicether/soundphysics/world/$CachingClientLevel" {
import { $ClonedClientLevel, $ClonedClientLevel$$Type } from "packages/com/sonicether/soundphysics/world/$ClonedClientLevel"

export interface $CachingClientLevel {
"sound_physics_remastered$getCachedClone"(): $ClonedClientLevel
"sound_physics_remastered$setCachedClone"(clonedClientLevel0: $ClonedClientLevel$$Type): void
}

export namespace $CachingClientLevel {
const probejs$$marker: never
}
export abstract class $CachingClientLevel$$Static implements $CachingClientLevel {
}
}

declare module "packages/com/sonicether/soundphysics/mixin/$ChannelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChannelAccessor {
"getSource"(): integer
get "source"(): integer
}

export namespace $ChannelAccessor {
const probejs$$marker: never
}
export abstract class $ChannelAccessor$$Static implements $ChannelAccessor {
}
}

