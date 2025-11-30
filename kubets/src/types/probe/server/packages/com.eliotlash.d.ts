declare module "packages/com/eliotlash/mclib/math/$IValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IValue$$Type = ($IValue | (() => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IValue_ = $IValue$$Type;
}
}

