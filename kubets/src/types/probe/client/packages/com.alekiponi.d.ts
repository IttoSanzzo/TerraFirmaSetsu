declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ExplosionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExplosionAccessor$$Type = ($ExplosionAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExplosionAccessor_ = $ExplosionAccessor$$Type;
}
}

declare module "packages/com/alekiponi/alekiships/mixins/accessors/$ShulkerBoxMenuAccessor" {
import { $Container$$Type } from "packages/net/minecraft/world/$Container"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShulkerBoxMenuAccessor$$Type = ($ShulkerBoxMenuAccessor | (() => $Container$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShulkerBoxMenuAccessor_ = $ShulkerBoxMenuAccessor$$Type;
}
}

