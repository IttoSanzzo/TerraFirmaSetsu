declare module "packages/dev/latvian/mods/kubejs/fluid/$InputFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InputFluid$$Type = ($InputFluid | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InputFluid_ = $InputFluid$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OutputFluid$$Type = ($OutputFluid | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OutputFluid_ = $OutputFluid$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBucketItemBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidBucketItemBuilder$$Type = ($FluidBucketItemBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidBucketItemBuilder_ = $FluidBucketItemBuilder$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidLike" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidLike$$Type = ($FluidLike | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidLike_ = $FluidLike$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBlockBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidBlockBuilder$$Type = ($FluidBlockBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidBlockBuilder_ = $FluidBlockBuilder$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidStackJS" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $FluidStack$$Type } from "packages/dev/architectury/fluid/$FluidStack"

export type FluidWithAmount = {"fluid": Special.Fluid, "amount"?: integer, "nbt"?: (charseq | {})};
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidStackJS$$Type = ($FluidStackJS | $Fluid$$Type | "-" | {"fluid": Special.Fluid, "amount?": integer, "nbt?": object} | $Fluid$$Type | $FluidStack$$Type | "-" | `${integer}x ${Special.Fluid}` | FluidWithAmount);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidStackJS_ = $FluidStackJS$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidWrapper$$Type = ($FluidWrapper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidWrapper_ = $FluidWrapper$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FluidBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidBuilder$$Type = ($FluidBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidBuilder_ = $FluidBuilder$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/fluid/$FlowingFluidBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlowingFluidBuilder$$Type = ($FlowingFluidBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlowingFluidBuilder_ = $FlowingFluidBuilder$$Type;
}
}

