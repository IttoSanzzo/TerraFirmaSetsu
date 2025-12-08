declare module "packages/com/vomiter/survivorsdelight/mixin/$BlockEntityTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityTypeAccessor$$Type = ($BlockEntityTypeAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityTypeAccessor_ = $BlockEntityTypeAccessor$$Type;
}
}

declare module "packages/com/vomiter/survivorsabilities/mixin/workhorse/$AbstractHorseAccessor" {
import { $SimpleContainer$$Type } from "packages/net/minecraft/world/$SimpleContainer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractHorseAccessor$$Type = ($AbstractHorseAccessor | (() => $SimpleContainer$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractHorseAccessor_ = $AbstractHorseAccessor$$Type;
}
}

