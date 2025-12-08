declare module "packages/toni/sodiumdynamiclights/$DynamicLightSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicLightSource$$Type = ($DynamicLightSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicLightSource_ = $DynamicLightSource$$Type;
}
}

declare module "packages/toni/sodiumdynamiclights/accessor/$DynamicLightHandlerHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicLightHandlerHolder$$Type<T> = ($DynamicLightHandlerHolder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicLightHandlerHolder_<T> = $DynamicLightHandlerHolder$$Type<T>;
}
}

declare module "packages/toni/sodiumdynamiclights/accessor/$WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldRendererAccessor$$Type = ($WorldRendererAccessor | ((arg0: integer, arg1: integer, arg2: integer, arg3: boolean) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldRendererAccessor_ = $WorldRendererAccessor$$Type;
}
}

