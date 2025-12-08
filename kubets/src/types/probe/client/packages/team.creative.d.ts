declare module "packages/team/creative/ambientsounds/mixin/$SoundBufferLibraryAccessor" {
import { $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SoundBufferLibraryAccessor$$Type = ($SoundBufferLibraryAccessor | (() => $ResourceProvider$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SoundBufferLibraryAccessor_ = $SoundBufferLibraryAccessor$$Type;
}
}

declare module "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MouseHandlerAccessor$$Type = ($MouseHandlerAccessor | (() => double));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$$Type;
}
}

declare module "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BufferBuilderAccessor$$Type = ($BufferBuilderAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$$Type;
}
}

declare module "packages/team/creative/creativecore/mixin/$VoxelShapeAccessor" {
import { $DiscreteVoxelShape } from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VoxelShapeAccessor$$Type = ($VoxelShapeAccessor | ((arg0: $DiscreteVoxelShape) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$$Type;
}
}

declare module "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor" {
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $List$$Type } from "packages/java/util/$List"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VanillaPackResourcesAccessor$$Type = ($VanillaPackResourcesAccessor | (() => $Map$$Type<$PackType$$Type, $List$$Type<$Path$$Type>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VanillaPackResourcesAccessor_ = $VanillaPackResourcesAccessor$$Type;
}
}

declare module "packages/team/creative/creativecore/mixin/$StringSplitterAccessor" {
import { $StringSplitter$WidthProvider$$Type } from "packages/net/minecraft/client/$StringSplitter$WidthProvider"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringSplitterAccessor$$Type = ($StringSplitterAccessor | (() => $StringSplitter$WidthProvider$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringSplitterAccessor_ = $StringSplitterAccessor$$Type;
}
}

