declare module "packages/xaeroplus/mixin/client/$AccessorWidgetScreenHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorWidgetScreenHandler$$Type = ($AccessorWidgetScreenHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorWidgetScreenHandler_ = $AccessorWidgetScreenHandler$$Type;
}
}

declare module "packages/xaeroplus/mixin/client/$AccessorMinimapModOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorMinimapModOptions$$Type = ($AccessorMinimapModOptions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorMinimapModOptions_ = $AccessorMinimapModOptions$$Type;
}
}

declare module "packages/xaeroplus/mixin/client/$AccessorWaypointSet" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorWaypointSet$$Type = ($AccessorWaypointSet | (() => $List$$Type<$Waypoint$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorWaypointSet_ = $AccessorWaypointSet$$Type;
}
}

