declare module "packages/net/minecraft/client/quickplay/$QuickPlayLog$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $QuickPlayLog$Type$$Type = ($QuickPlayLog$Type | ("singleplayer" | "multiplayer" | "realms"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $QuickPlayLog$Type_ = $QuickPlayLog$Type$$Type;
}
}

declare module "packages/net/minecraft/client/quickplay/$QuickPlayLog" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $QuickPlayLog$$Type = ($QuickPlayLog);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $QuickPlayLog_ = $QuickPlayLog$$Type;
}
}

