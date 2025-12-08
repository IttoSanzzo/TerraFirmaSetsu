declare module "packages/xfacthd/framedblocks/api/block/render/$AppearanceHelper$ModelDataAccessor" {
import { $ModelData$$Type } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AppearanceHelper$ModelDataAccessor$$Type = ($AppearanceHelper$ModelDataAccessor | ((arg0: $BlockPos) => $ModelData$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AppearanceHelper$ModelDataAccessor_ = $AppearanceHelper$ModelDataAccessor$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/block/cache/$StateCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StateCache$$Type = ($StateCache);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StateCache_ = $StateCache$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/block/cache/$IStateCacheAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IStateCacheAccessor$$Type = ($IStateCacheAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IStateCacheAccessor_ = $IStateCacheAccessor$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/fullface/$FullFacePredicate" {
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FullFacePredicate$$Type = ($FullFacePredicate | ((arg0: $BlockState, arg1: $Direction) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FullFacePredicate_ = $FullFacePredicate$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/contex/$ConTexMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConTexMode$$Type = ($ConTexMode | ("none" | "full_face" | "full_edge" | "detailed"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConTexMode_ = $ConTexMode$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/shapes/$ShapeProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShapeProvider$$Type = ($ShapeProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShapeProvider_ = $ShapeProvider$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/cull/$SideSkipPredicate" {
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SideSkipPredicate$$Type = ($SideSkipPredicate | ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockState, arg4: $Direction) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SideSkipPredicate_ = $SideSkipPredicate$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/type/$IBlockType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBlockType$$Type = ($IBlockType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBlockType_ = $IBlockType$$Type;
}
}

declare module "packages/xfacthd/framedblocks/common/blockentity/special/$FramedItemFrameBlockEntity$MapMarkerRemover" {
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FramedItemFrameBlockEntity$MapMarkerRemover$$Type = ($FramedItemFrameBlockEntity$MapMarkerRemover | ((arg0: $BlockPos) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FramedItemFrameBlockEntity$MapMarkerRemover_ = $FramedItemFrameBlockEntity$MapMarkerRemover$$Type;
}
}

declare module "packages/xfacthd/framedblocks/api/predicate/contex/$ConnectionPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConnectionPredicate$$Type = ($ConnectionPredicate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConnectionPredicate_ = $ConnectionPredicate$$Type;
}
}

