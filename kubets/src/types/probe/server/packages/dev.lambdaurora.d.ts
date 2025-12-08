declare module "packages/dev/lambdaurora/lambdynlights/api/$DynamicLightHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicLightHandler$$Type<T> = ($DynamicLightHandler<T> | ((arg0: T) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicLightHandler_<T> = $DynamicLightHandler$$Type<T>;
}
}

