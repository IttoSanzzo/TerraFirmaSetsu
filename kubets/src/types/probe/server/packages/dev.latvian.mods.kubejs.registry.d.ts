declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryEventJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryEventJS$$Type<T> = ($RegistryEventJS<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryEventJS_<T> = $RegistryEventJS$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderFactory" {
import { $BuilderBase$$Type } from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuilderFactory$$Type = ($BuilderFactory | ((arg0: $ResourceLocation) => $BuilderBase$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuilderFactory_ = $BuilderFactory$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuilderBase$$Type<T> = ($BuilderBase<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuilderBase_<T> = $BuilderBase$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$BuilderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuilderType$$Type<T> = ($BuilderType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuilderType_<T> = $BuilderType$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$CustomBuilderObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomBuilderObject$$Type = ($CustomBuilderObject);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomBuilderObject_ = $CustomBuilderObject$$Type;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryInfo$$Type<T> = ($RegistryInfo<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryInfo_<T> = $RegistryInfo$$Type<T>;
}
}

declare module "packages/dev/latvian/mods/kubejs/registry/$RegistryCallback" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryCallback$$Type<T> = ($RegistryCallback<T> | ((arg0: $ResourceLocation, arg1: $Supplier<T>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryCallback_<T> = $RegistryCallback$$Type<T>;
}
}

