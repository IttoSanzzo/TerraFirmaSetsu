declare module "packages/net/minecraft/world/phys/shapes/$CollisionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CollisionContext$$Type = ($CollisionContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CollisionContext_ = $CollisionContext$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$Vec2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vec2$$Type = ($Vec2);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vec2_ = $Vec2$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$Vec3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vec3$$Type = ($Vec3 | [x: double, y: double, z: double]);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vec3_ = $Vec3$$Type;
}
}

declare module "packages/net/minecraft/world/phys/shapes/$Shapes$DoubleLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Shapes$DoubleLineConsumer$$Type = ($Shapes$DoubleLineConsumer | ((arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Shapes$DoubleLineConsumer_ = $Shapes$DoubleLineConsumer$$Type;
}
}

declare module "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiscreteVoxelShape$$Type = ($DiscreteVoxelShape);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiscreteVoxelShape_ = $DiscreteVoxelShape$$Type;
}
}

declare module "packages/net/minecraft/world/phys/shapes/$VoxelShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VoxelShape$$Type = ($VoxelShape);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VoxelShape_ = $VoxelShape$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$HitResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HitResult$$Type = ($HitResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HitResult_ = $HitResult$$Type;
}
}

declare module "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape$IntLineConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiscreteVoxelShape$IntLineConsumer$$Type = ($DiscreteVoxelShape$IntLineConsumer | ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiscreteVoxelShape$IntLineConsumer_ = $DiscreteVoxelShape$IntLineConsumer$$Type;
}
}

declare module "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape$IntFaceConsumer" {
import { $Direction } from "packages/net/minecraft/core/$Direction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiscreteVoxelShape$IntFaceConsumer$$Type = ($DiscreteVoxelShape$IntFaceConsumer | ((arg0: $Direction, arg1: integer, arg2: integer, arg3: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiscreteVoxelShape$IntFaceConsumer_ = $DiscreteVoxelShape$IntFaceConsumer$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$AABB" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AABB$$Type = ($AABB | [] | [x: double, y: double, z: double] | [x1: double, y1: double, z1: double, x2: double, y2: double, z2: double]);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AABB_ = $AABB$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$HitResult$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HitResult$Type$$Type = ($HitResult$Type | ("miss" | "block" | "entity"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HitResult$Type_ = $HitResult$Type$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$BlockHitResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockHitResult$$Type = ($BlockHitResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockHitResult_ = $BlockHitResult$$Type;
}
}

declare module "packages/net/minecraft/world/phys/$EntityHitResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityHitResult$$Type = ($EntityHitResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityHitResult_ = $EntityHitResult$$Type;
}
}

