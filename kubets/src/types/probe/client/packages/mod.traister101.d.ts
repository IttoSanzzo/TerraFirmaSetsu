declare module "packages/mod/traister101/sns/mixins/client/invoker/$AddCustomNbtDataInvoker" {
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AddCustomNbtDataInvoker$$Type = ($AddCustomNbtDataInvoker | ((arg0: $ItemStack, arg1: $BlockEntity) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AddCustomNbtDataInvoker_ = $AddCustomNbtDataInvoker$$Type;
}
}

declare module "packages/mod/traister101/esc/mixin/common/accessor/$AbstractContainerMenuAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractContainerMenuAccessor$$Type = ($AbstractContainerMenuAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$$Type;
}
}

declare module "packages/mod/traister101/esc/mixin/common/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SlotAccessor$$Type = ($SlotAccessor | ((arg0: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SlotAccessor_ = $SlotAccessor$$Type;
}
}

