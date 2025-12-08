declare module "packages/loaderCommon/forge/com/seibel/distanthorizons/common/wrappers/misc/$IMixinServerPlayer" {
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMixinServerPlayer$$Type = ($IMixinServerPlayer | (() => $ServerLevel$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMixinServerPlayer_ = $IMixinServerPlayer$$Type;
}
}

