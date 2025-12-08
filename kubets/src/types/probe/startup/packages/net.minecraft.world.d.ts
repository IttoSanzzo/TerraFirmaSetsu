declare module "packages/net/minecraft/world/$MenuProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuProvider$$Type = ($MenuProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuProvider_ = $MenuProvider$$Type;
}
}

declare module "packages/net/minecraft/world/$WorldlyContainerHolder" {
import { $LevelAccessor } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $WorldlyContainer$$Type } from "packages/net/minecraft/world/$WorldlyContainer"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldlyContainerHolder$$Type = ($WorldlyContainerHolder | ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos) => $WorldlyContainer$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldlyContainerHolder_ = $WorldlyContainerHolder$$Type;
}
}

declare module "packages/net/minecraft/world/$Container" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Container$$Type = ($Container);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Container_ = $Container$$Type;
}
}

declare module "packages/net/minecraft/world/$InteractionHand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InteractionHand$$Type = ($InteractionHand | ("main_hand" | "off_hand"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InteractionHand_ = $InteractionHand$$Type;
}
}

declare module "packages/net/minecraft/world/$WorldlyContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldlyContainer$$Type = ($WorldlyContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldlyContainer_ = $WorldlyContainer$$Type;
}
}

declare module "packages/net/minecraft/world/$Difficulty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Difficulty$$Type = ($Difficulty | ("peaceful" | "easy" | "normal" | "hard"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Difficulty_ = $Difficulty$$Type;
}
}

declare module "packages/net/minecraft/world/$DifficultyInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DifficultyInstance$$Type = ($DifficultyInstance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DifficultyInstance_ = $DifficultyInstance$$Type;
}
}

declare module "packages/net/minecraft/world/$InteractionResultHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InteractionResultHolder$$Type<T> = ($InteractionResultHolder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InteractionResultHolder_<T> = $InteractionResultHolder$$Type<T>;
}
}

declare module "packages/net/minecraft/world/$BossEvent$BossBarOverlay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BossEvent$BossBarOverlay$$Type = ($BossEvent$BossBarOverlay | ("progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BossEvent$BossBarOverlay_ = $BossEvent$BossBarOverlay$$Type;
}
}

declare module "packages/net/minecraft/world/$BossEvent$BossBarColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BossEvent$BossBarColor$$Type = ($BossEvent$BossBarColor | ("pink" | "blue" | "red" | "green" | "yellow" | "purple" | "white"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BossEvent$BossBarColor_ = $BossEvent$BossBarColor$$Type;
}
}

declare module "packages/net/minecraft/world/$SimpleContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleContainer$$Type = ($SimpleContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleContainer_ = $SimpleContainer$$Type;
}
}

declare module "packages/net/minecraft/world/$RandomSequences" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RandomSequences$$Type = ($RandomSequences);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RandomSequences_ = $RandomSequences$$Type;
}
}

declare module "packages/net/minecraft/world/$ContainerListener" {
import { $Container } from "packages/net/minecraft/world/$Container"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerListener$$Type = ($ContainerListener | ((arg0: $Container) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerListener_ = $ContainerListener$$Type;
}
}

declare module "packages/net/minecraft/world/$BossEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BossEvent$$Type = ($BossEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BossEvent_ = $BossEvent$$Type;
}
}

declare module "packages/net/minecraft/world/$InteractionResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InteractionResult$$Type = ($InteractionResult | ("success" | "consume" | "consume_partial" | "pass" | "fail"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InteractionResult_ = $InteractionResult$$Type;
}
}

declare module "packages/net/minecraft/world/$Clearable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Clearable$$Type = ($Clearable | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Clearable_ = $Clearable$$Type;
}
}

declare module "packages/net/minecraft/world/$LockCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LockCode$$Type = ($LockCode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LockCode_ = $LockCode$$Type;
}
}

declare module "packages/net/minecraft/world/$Nameable" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Nameable$$Type = ($Nameable | (() => $Component$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Nameable_ = $Nameable$$Type;
}
}

