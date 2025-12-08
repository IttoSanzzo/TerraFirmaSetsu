declare module "packages/org/lwjgl/system/$Struct" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Struct$$Type = ($Struct);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Struct_ = $Struct$$Type;
}
}

declare module "packages/org/lwjgl/system/$Pointer$Default" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pointer$Default$$Type = ($Pointer$Default);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pointer$Default_ = $Pointer$Default$$Type;
}
}

declare module "packages/org/lwjgl/system/$NativeResource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NativeResource$$Type = ($NativeResource | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NativeResource_ = $NativeResource$$Type;
}
}

declare module "packages/org/lwjgl/$PointerBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PointerBuffer$$Type = ($PointerBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PointerBuffer_ = $PointerBuffer$$Type;
}
}

declare module "packages/org/lwjgl/stb/$STBTTFontinfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $STBTTFontinfo$$Type = ($STBTTFontinfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $STBTTFontinfo_ = $STBTTFontinfo$$Type;
}
}

declare module "packages/org/lwjgl/system/$MemoryStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MemoryStack$$Type = ($MemoryStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MemoryStack_ = $MemoryStack$$Type;
}
}

declare module "packages/org/lwjgl/glfw/$GLFWVidMode$Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GLFWVidMode$Buffer$$Type = ($GLFWVidMode$Buffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GLFWVidMode$Buffer_ = $GLFWVidMode$Buffer$$Type;
}
}

declare module "packages/org/lwjgl/system/$StructBuffer" {
import { $Struct, $Struct$$Type } from "packages/org/lwjgl/system/$Struct"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StructBuffer$$Type<T extends $Struct, SELF extends $StructBuffer<T, SELF>> = ($StructBuffer<T, SELF>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StructBuffer_<T extends $Struct, SELF extends $StructBuffer<T, SELF>> = $StructBuffer$$Type<T, SELF>;
}
}

declare module "packages/org/lwjgl/stb/$STBTTFontinfo$Buffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $STBTTFontinfo$Buffer$$Type = ($STBTTFontinfo$Buffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $STBTTFontinfo$Buffer_ = $STBTTFontinfo$Buffer$$Type;
}
}

declare module "packages/org/lwjgl/system/$CustomBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomBuffer$$Type<SELF extends $CustomBuffer<SELF>> = ($CustomBuffer<SELF>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomBuffer_<SELF extends $CustomBuffer<SELF>> = $CustomBuffer$$Type<SELF>;
}
}

declare module "packages/org/lwjgl/$CLongBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CLongBuffer$$Type = ($CLongBuffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CLongBuffer_ = $CLongBuffer$$Type;
}
}

declare module "packages/org/lwjgl/glfw/$GLFWVidMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GLFWVidMode$$Type = ($GLFWVidMode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GLFWVidMode_ = $GLFWVidMode$$Type;
}
}

declare module "packages/org/lwjgl/system/$Struct$StructValidation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Struct$StructValidation$$Type = ($Struct$StructValidation | ((arg0: long) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Struct$StructValidation_ = $Struct$StructValidation$$Type;
}
}

declare module "packages/org/lwjgl/system/$Pointer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pointer$$Type = ($Pointer | (() => long));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pointer_ = $Pointer$$Type;
}
}

