declare module "packages/xfacthd/framedblocks/api/block/render/$AppearanceHelper$ModelDataAccessor" {
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $AppearanceHelper$ModelDataAccessor {
"framedblocks$getCachedAt"(blockPos0: $BlockPos$$Type): $ModelData
}

export namespace $AppearanceHelper$ModelDataAccessor {
const probejs$$marker: never
}
export abstract class $AppearanceHelper$ModelDataAccessor$$Static implements $AppearanceHelper$ModelDataAccessor {
}
}

declare module "packages/xfacthd/framedblocks/api/block/cache/$StateCache" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $IBlockType$$Type } from "packages/xfacthd/framedblocks/api/type/$IBlockType"

export class $StateCache {
static readonly "EMPTY": $StateCache

constructor(blockState0: $BlockState$$Type, iBlockType1: $IBlockType$$Type)

public "canConnectDetailed"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
public "canConnectFullEdge"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
public "hasAnyDetailedConnections"(): boolean
public "hasAnyFullFace"(): boolean
public "isFullFace"(direction0: $Direction$$Type): boolean
}
}

declare module "packages/xfacthd/framedblocks/api/block/cache/$IStateCacheAccessor" {
import { $StateCache, $StateCache$$Type } from "packages/xfacthd/framedblocks/api/block/cache/$StateCache"

export interface $IStateCacheAccessor {
"framedblocks$getCache"(): $StateCache
"framedblocks$initCache"(stateCache0: $StateCache$$Type): void
}

export namespace $IStateCacheAccessor {
const probejs$$marker: never
}
export abstract class $IStateCacheAccessor$$Static implements $IStateCacheAccessor {
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/fullface/$FullFacePredicate" {
import { $BiPredicate, $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $FullFacePredicate extends $BiPredicate<$BlockState, $Direction> {
"and"(biPredicate0: $BiPredicate$$Type<$BlockState$$Type, $Direction$$Type>): $FullFacePredicate
"negate"(): $BiPredicate<$BlockState, $Direction>
"or"(biPredicate0: $BiPredicate$$Type<$BlockState$$Type, $Direction$$Type>): $FullFacePredicate
"test"(blockState0: $BlockState$$Type, direction1: $Direction$$Type): boolean
}

export namespace $FullFacePredicate {
const AXIS: $FullFacePredicate
const DIR: $FullFacePredicate
const DIR_AXIS: $FullFacePredicate
const DIR_OPPOSITE: $FullFacePredicate
const FALSE: $FullFacePredicate
const HOR_DIR: $FullFacePredicate
const HOR_DIR_AXIS: $FullFacePredicate
const HOR_DIR_OPPOSITE: $FullFacePredicate
const NOT_AXIS: $FullFacePredicate
const NOT_DIR: $FullFacePredicate
const NOT_HOR_DIR: $FullFacePredicate
const TOP: $FullFacePredicate
const TRUE: $FullFacePredicate
const Y_AXIS: $FullFacePredicate
}
export abstract class $FullFacePredicate$$Static implements $FullFacePredicate {
static readonly "AXIS": $FullFacePredicate
static readonly "DIR": $FullFacePredicate
static readonly "DIR_AXIS": $FullFacePredicate
static readonly "DIR_OPPOSITE": $FullFacePredicate
static readonly "FALSE": $FullFacePredicate
static readonly "HOR_DIR": $FullFacePredicate
static readonly "HOR_DIR_AXIS": $FullFacePredicate
static readonly "HOR_DIR_OPPOSITE": $FullFacePredicate
static readonly "NOT_AXIS": $FullFacePredicate
static readonly "NOT_DIR": $FullFacePredicate
static readonly "NOT_HOR_DIR": $FullFacePredicate
static readonly "TOP": $FullFacePredicate
static readonly "TRUE": $FullFacePredicate
static readonly "Y_AXIS": $FullFacePredicate

}
}

declare module "packages/xfacthd/framedblocks/api/predicate/contex/$ConTexMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ConTexMode extends $Enum<$ConTexMode> {
static readonly "DETAILED": $ConTexMode
static readonly "FULL_EDGE": $ConTexMode
static readonly "FULL_FACE": $ConTexMode
static readonly "NONE": $ConTexMode

public "atleast"(conTexMode0: $ConTexMode$$Type): boolean
public static "valueOf"(string0: string): $ConTexMode
public static "values"(): $ConTexMode[]
}
}

declare module "packages/xfacthd/framedblocks/api/shapes/$ShapeProvider" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $ShapeProvider {
"forEach"(biConsumer0: $BiConsumer$$Type<$BlockState$$Type, $VoxelShape$$Type>): void
"get"(blockState0: $BlockState$$Type): $VoxelShape
"isEmpty"(): boolean
get "empty"(): boolean
}

export namespace $ShapeProvider {
function of(map0: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>): $ShapeProvider
}
export abstract class $ShapeProvider$$Static implements $ShapeProvider {
static "of"(map0: $Map$$Type<$BlockState$$Type, $VoxelShape$$Type>): $ShapeProvider
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/cull/$SideSkipPredicate" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $SideSkipPredicate {
"test"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type): boolean
}

export namespace $SideSkipPredicate {
const FALSE: $SideSkipPredicate
const FULL_FACE: $SideSkipPredicate
}
export abstract class $SideSkipPredicate$$Static implements $SideSkipPredicate {
static readonly "FALSE": $SideSkipPredicate
/** @deprecated */
static readonly "FULL_FACE": $SideSkipPredicate

}
}

declare module "packages/xfacthd/framedblocks/api/type/$IBlockType" {
import { $FullFacePredicate } from "packages/xfacthd/framedblocks/api/predicate/fullface/$FullFacePredicate"
import { $ImmutableList$$Type } from "packages/com/google/common/collect/$ImmutableList"
import { $SideSkipPredicate } from "packages/xfacthd/framedblocks/api/predicate/cull/$SideSkipPredicate"
import { $ConnectionPredicate } from "packages/xfacthd/framedblocks/api/predicate/contex/$ConnectionPredicate"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ShapeProvider, $ShapeProvider$$Type } from "packages/xfacthd/framedblocks/api/shapes/$ShapeProvider"
import { $ConTexMode } from "packages/xfacthd/framedblocks/api/predicate/contex/$ConTexMode"

export interface $IBlockType {
"allowMakingIntangible"(): boolean
"canLockState"(): boolean
"canOccludeWithSolidCamo"(): boolean
"compareTo"(iBlockType0: $IBlockType$$Type): integer
"generateOcclusionShapes"(immutableList0: $ImmutableList$$Type<$BlockState$$Type>, shapeProvider1: $ShapeProvider$$Type): $ShapeProvider
"generateShapes"(immutableList0: $ImmutableList$$Type<$BlockState$$Type>): $ShapeProvider
"getConnectionPredicate"(): $ConnectionPredicate
"getFullFacePredicate"(): $FullFacePredicate
"getMinimumConTexMode"(): $ConTexMode
"getName"(): string
"getSideSkipPredicate"(): $SideSkipPredicate
"hasBlockItem"(): boolean
"hasSpecialHitbox"(): boolean
"hasSpecialTile"(): boolean
"isDoubleBlock"(): boolean
"supportsConnectedTextures"(): boolean
"supportsWaterLogging"(): boolean
get "connectionPredicate"(): $ConnectionPredicate
get "fullFacePredicate"(): $FullFacePredicate
get "minimumConTexMode"(): $ConTexMode
get "name"(): string
get "sideSkipPredicate"(): $SideSkipPredicate
get "doubleBlock"(): boolean
}

export namespace $IBlockType {
const probejs$$marker: never
}
export abstract class $IBlockType$$Static implements $IBlockType {
}
}

declare module "packages/xfacthd/framedblocks/common/blockentity/special/$FramedItemFrameBlockEntity$MapMarkerRemover" {
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $FramedItemFrameBlockEntity$MapMarkerRemover {
"framedblocks$removeMapMarker"(blockPos0: $BlockPos$$Type): void
}

export namespace $FramedItemFrameBlockEntity$MapMarkerRemover {
const probejs$$marker: never
}
export abstract class $FramedItemFrameBlockEntity$MapMarkerRemover$$Static implements $FramedItemFrameBlockEntity$MapMarkerRemover {
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/contex/$ConnectionPredicate" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $ConnectionPredicate {
"canConnectDetailed"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type): boolean
"canConnectFullEdge"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, direction2: $Direction$$Type): boolean
}

export namespace $ConnectionPredicate {
const FALSE: $ConnectionPredicate
const FULL_EDGE: $ConnectionPredicate
const FULL_FACE: $ConnectionPredicate
}
export abstract class $ConnectionPredicate$$Static implements $ConnectionPredicate {
static readonly "FALSE": $ConnectionPredicate
static readonly "FULL_EDGE": $ConnectionPredicate
static readonly "FULL_FACE": $ConnectionPredicate

}
}

