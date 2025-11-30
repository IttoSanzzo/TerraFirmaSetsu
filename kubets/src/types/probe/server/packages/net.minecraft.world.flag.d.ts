declare module "packages/net/minecraft/world/flag/$FeatureFlagSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureFlagSet$$Type = ($FeatureFlagSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureFlagSet_ = $FeatureFlagSet$$Type;
}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlagUniverse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureFlagUniverse$$Type = ($FeatureFlagUniverse);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureFlagUniverse_ = $FeatureFlagUniverse$$Type;
}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlagRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureFlagRegistry$$Type = ($FeatureFlagRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureFlagRegistry_ = $FeatureFlagRegistry$$Type;
}
}

declare module "packages/net/minecraft/world/flag/$FeatureElement" {
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureElement$$Type = ($FeatureElement | (() => $FeatureFlagSet$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureElement_ = $FeatureElement$$Type;
}
}

declare module "packages/net/minecraft/world/flag/$FeatureFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FeatureFlag$$Type = ($FeatureFlag);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FeatureFlag_ = $FeatureFlag$$Type;
}
}

