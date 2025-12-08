declare module "packages/dev/kosmx/playerAnim/api/$TransformType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TransformType$$Type = ($TransformType | ("position" | "rotation" | "bend"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TransformType_ = $TransformType$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IAnimatedPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAnimatedPlayer$$Type = ($IAnimatedPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAnimatedPlayer_ = $IAnimatedPlayer$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationStack$$Type = ($AnimationStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationStack_ = $AnimationStack$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pair$$Type<L, R> = ($Pair<L, R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pair_<L, R> = $Pair$$Type<L, R>;
}
}

declare module "packages/dev/kosmx/playerAnim/api/layered/$IAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAnimation$$Type = ($IAnimation);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAnimation_ = $IAnimation$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FirstPersonMode$$Type = ($FirstPersonMode | ("none" | "vanilla" | "third_person_model" | "disabled"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FirstPersonMode_ = $FirstPersonMode$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IMutableModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMutableModel$$Type = ($IMutableModel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMutableModel_ = $IMutableModel$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IUpperPartHelper$$Type = ($IUpperPartHelper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IUpperPartHelper_ = $IUpperPartHelper$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationProcessor$$Type = ($AnimationProcessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationProcessor_ = $AnimationProcessor$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/api/$IPlayer" {
import { $AnimationStack$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayer$$Type = ($IPlayer | (() => $AnimationStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayer_ = $IPlayer$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SetableSupplier$$Type<T> = ($SetableSupplier<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SetableSupplier_<T> = $SetableSupplier$$Type<T>;
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vector3$$Type<N extends number> = ($Vector3<N>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vector3_<N extends number> = $Vector3$$Type<N>;
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3f" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vec3f$$Type = ($Vec3f);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vec3f_ = $Vec3f$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3d" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vec3d$$Type = ($Vec3d);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vec3d_ = $Vec3d$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/mixin/firstPerson/$CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CameraAccessor$$Type = ($CameraAccessor | ((arg0: boolean) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CameraAccessor_ = $CameraAccessor$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FirstPersonConfiguration$$Type = ($FirstPersonConfiguration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FirstPersonConfiguration_ = $FirstPersonConfiguration$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnimationApplier$$Type = ($AnimationApplier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnimationApplier_ = $AnimationApplier$$Type;
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerModel$$Type = ($IPlayerModel | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerModel_ = $IPlayerModel$$Type;
}
}

