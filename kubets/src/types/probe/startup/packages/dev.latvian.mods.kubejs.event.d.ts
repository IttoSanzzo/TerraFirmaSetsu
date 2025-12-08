declare module "packages/dev/latvian/mods/kubejs/event/$EventGroupWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventGroupWrapper$$Type = ($EventGroupWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventGroupWrapper_ = $EventGroupWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventHandlerContainer$$Type = ($EventHandlerContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventHandlerContainer_ = $EventHandlerContainer$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$IEventHandler" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEventHandler$$Type = ($IEventHandler | ((arg0: $EventJS) => any));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEventHandler_ = $IEventHandler$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventHandler$$Type = ($EventHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventHandler_ = $EventHandler$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventGroup$$Type = ($EventGroup);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventGroup_ = $EventGroup$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventJS$$Type = ($EventJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventJS_ = $EventJS$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventResult$$Type = ($EventResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventResult_ = $EventResult$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$StartupEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StartupEventJS$$Type = ($StartupEventJS);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StartupEventJS_ = $StartupEventJS$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventResult$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventResult$Type$$Type = ($EventResult$Type | ("error" | "pass" | "interrupt_default" | "interrupt_false" | "interrupt_true"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventResult$Type_ = $EventResult$Type$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventExceptionHandler" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $EventHandlerContainer } from "packages/dev/latvian/mods/kubejs/event/$EventHandlerContainer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExceptionHandler$$Type = ($EventExceptionHandler | ((arg0: $EventJS, arg1: $EventHandlerContainer, arg2: $Throwable) => $Throwable$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExceptionHandler_ = $EventExceptionHandler$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/event/$EventExit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventExit$$Type = ($EventExit);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventExit_ = $EventExit$$Type;
}
}

