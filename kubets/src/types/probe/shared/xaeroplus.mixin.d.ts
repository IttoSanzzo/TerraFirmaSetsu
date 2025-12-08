declare module "packages/xaeroplus/mixin/client/$AccessorWidgetScreenHandler" {
import { $List } from "packages/java/util/$List"
import { $Widget, $Widget$$Type } from "packages/xaero/common/gui/widget/$Widget"

export interface $AccessorWidgetScreenHandler {
"getWidgets"(): $List<$Widget>
"invokeAddWidget"(widget0: $Widget$$Type): void
get "widgets"(): $List<$Widget>
}

export namespace $AccessorWidgetScreenHandler {
const probejs$$marker: never
}
export abstract class $AccessorWidgetScreenHandler$$Static implements $AccessorWidgetScreenHandler {
}
}

declare module "packages/xaeroplus/mixin/client/$AccessorMinimapModOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMinimapModOptions {
}

export namespace $AccessorMinimapModOptions {
const probejs$$marker: never
}
export abstract class $AccessorMinimapModOptions$$Static implements $AccessorMinimapModOptions {
}
}

declare module "packages/xaeroplus/mixin/client/$AccessorWaypointSet" {
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $List } from "packages/java/util/$List"

export interface $AccessorWaypointSet {
"getList"(): $List<$Waypoint>
get "list"(): $List<$Waypoint>
}

export namespace $AccessorWaypointSet {
const probejs$$marker: never
}
export abstract class $AccessorWaypointSet$$Static implements $AccessorWaypointSet {
}
}

