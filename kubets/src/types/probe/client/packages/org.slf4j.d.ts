declare module "packages/org/slf4j/$Logger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Logger$$Type = ($Logger);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Logger_ = $Logger$$Type;
}
}

declare module "packages/org/slf4j/event/$Level" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Level$$Type = ($Level | ("error" | "warn" | "info" | "debug" | "trace"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Level_ = $Level$$Type;
}
}

declare module "packages/org/slf4j/spi/$LoggingEventBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LoggingEventBuilder$$Type = ($LoggingEventBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LoggingEventBuilder_ = $LoggingEventBuilder$$Type;
}
}

declare module "packages/org/slf4j/$Marker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Marker$$Type = ($Marker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Marker_ = $Marker$$Type;
}
}

