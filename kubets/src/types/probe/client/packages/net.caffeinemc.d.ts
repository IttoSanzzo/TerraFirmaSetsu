declare module "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter" {
import { $MemoryStack } from "packages/org/lwjgl/system/$MemoryStack"
import { $VertexFormatDescription } from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VertexBufferWriter$$Type = ($VertexBufferWriter | ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VertexBufferWriter_ = $VertexBufferWriter$$Type;
}
}

declare module "packages/net/caffeinemc/mods/sodium/api/vertex/attributes/$CommonVertexAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommonVertexAttribute$$Type = ($CommonVertexAttribute | ("position" | "color" | "texture" | "overlay" | "light" | "normal" | "tangent" | "mid_tex_coord" | "block_id" | "entity_id" | "mid_block"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommonVertexAttribute_ = $CommonVertexAttribute$$Type;
}
}

declare module "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VertexFormatDescription$$Type = ($VertexFormatDescription);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VertexFormatDescription_ = $VertexFormatDescription$$Type;
}
}

