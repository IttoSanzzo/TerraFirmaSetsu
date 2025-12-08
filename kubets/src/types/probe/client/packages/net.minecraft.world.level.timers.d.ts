declare module "packages/net/minecraft/world/level/timers/$TimerCallback$Serializer" {
import { $TimerCallback, $TimerCallback$$Type } from "packages/net/minecraft/world/level/timers/$TimerCallback"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimerCallback$Serializer$$Type<T, C extends $TimerCallback<T>> = ($TimerCallback$Serializer<T, C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimerCallback$Serializer_<T, C extends $TimerCallback<T>> = $TimerCallback$Serializer$$Type<T, C>;
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerQueue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimerQueue$$Type<T> = ($TimerQueue<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimerQueue_<T> = $TimerQueue$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerCallbacks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimerCallbacks$$Type<C> = ($TimerCallbacks<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimerCallbacks_<C> = $TimerCallbacks$$Type<C>;
}
}

declare module "packages/net/minecraft/world/level/timers/$TimerCallback" {
import { $TimerQueue } from "packages/net/minecraft/world/level/timers/$TimerQueue"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TimerCallback$$Type<T> = ($TimerCallback<T> | ((arg0: T, arg1: $TimerQueue<T>, arg2: long) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TimerCallback_<T> = $TimerCallback$$Type<T>;
}
}

