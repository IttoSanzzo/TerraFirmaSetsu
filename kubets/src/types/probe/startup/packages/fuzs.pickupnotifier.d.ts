declare module "packages/fuzs/pickupnotifier/mixin/client/accessor/$AbstractArrowAccessor" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractArrowAccessor$$Type = ($AbstractArrowAccessor | (() => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractArrowAccessor_ = $AbstractArrowAccessor$$Type;
}
}

