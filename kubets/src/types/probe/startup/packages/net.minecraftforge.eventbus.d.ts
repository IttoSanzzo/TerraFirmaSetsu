declare module "packages/net/minecraftforge/eventbus/api/$EventPriority" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventPriority$$Type = ($EventPriority | ("highest" | "high" | "normal" | "low" | "lowest"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventPriority_ = $EventPriority$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$IGenericEvent" {
import { $Type$$Type } from "packages/java/lang/reflect/$Type"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IGenericEvent$$Type<T> = ($IGenericEvent<T> | (() => $Type$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IGenericEvent_<T> = $IGenericEvent$$Type<T>;
}
}

declare module "packages/net/minecraftforge/eventbus/$ListenerList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ListenerList$$Type = ($ListenerList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ListenerList_ = $ListenerList$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$IEventListener" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEventListener$$Type = ($IEventListener | ((arg0: $Event) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEventListener_ = $IEventListener$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IEventListener } from "packages/net/minecraftforge/eventbus/api/$IEventListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEventBusInvokeDispatcher$$Type = ($IEventBusInvokeDispatcher | ((arg0: $IEventListener, arg1: $Event) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEventBusInvokeDispatcher_ = $IEventBusInvokeDispatcher$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$GenericEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenericEvent$$Type<T> = ($GenericEvent<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenericEvent_<T> = $GenericEvent$$Type<T>;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$IEventBus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IEventBus$$Type = ($IEventBus);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IEventBus_ = $IEventBus$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$Event$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Event$Result$$Type = ($Event$Result | ("deny" | "default" | "allow"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Event$Result_ = $Event$Result$$Type;
}
}

declare module "packages/net/minecraftforge/eventbus/api/$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Event$$Type = ($Event);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Event_ = $Event$$Type;
}
}

