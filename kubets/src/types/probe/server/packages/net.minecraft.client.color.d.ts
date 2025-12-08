declare module "packages/net/minecraft/client/color/block/$BlockColor" {
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColor$$Type = ($BlockColor | ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColor_ = $BlockColor$$Type;
}
}

declare module "packages/net/minecraft/client/color/item/$ItemColors" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemColors$$Type = ($ItemColors);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemColors_ = $ItemColors$$Type;
}
}

declare module "packages/net/minecraft/client/color/item/$ItemColor" {
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemColor$$Type = ($ItemColor | ((arg0: $ItemStack, arg1: integer) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemColor_ = $ItemColor$$Type;
}
}

declare module "packages/net/minecraft/client/color/block/$BlockColors" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColors$$Type = ($BlockColors);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColors_ = $BlockColors$$Type;
}
}

