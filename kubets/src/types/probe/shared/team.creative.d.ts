declare module "packages/team/creative/ambientsounds/mixin/$SoundBufferLibraryAccessor" {
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"

export interface $SoundBufferLibraryAccessor {
"getResourceManager"(): $ResourceProvider
get "resourceManager"(): $ResourceProvider
}

export namespace $SoundBufferLibraryAccessor {
const probejs$$marker: never
}
export abstract class $SoundBufferLibraryAccessor$$Static implements $SoundBufferLibraryAccessor {
}
}

declare module "packages/team/creative/creativecore/mixin/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"getLastMouseEventTime"(): double
get "lastMouseEventTime"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor" {
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"

export interface $BufferBuilderAccessor {
"getBuffer"(): $ByteBuffer
"getNextElementByte"(): integer
"getVertices"(): integer
get "buffer"(): $ByteBuffer
get "nextElementByte"(): integer
get "vertices"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export abstract class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {
}
}

declare module "packages/team/creative/creativecore/mixin/$VoxelShapeAccessor" {
import { $DiscreteVoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccessor {
"setShape"(discreteVoxelShape0: $DiscreteVoxelShape$$Type): void
set "shape"(value: $DiscreteVoxelShape$$Type)
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export abstract class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {
}
}

declare module "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor" {
import { $PackType } from "packages/net/minecraft/server/packs/$PackType"
import { $Path } from "packages/java/nio/file/$Path"
import { $List } from "packages/java/util/$List"
import { $Map } from "packages/java/util/$Map"

export interface $VanillaPackResourcesAccessor {
"getPathsForType"(): $Map<$PackType, $List<$Path>>
get "pathsForType"(): $Map<$PackType, $List<$Path>>
}

export namespace $VanillaPackResourcesAccessor {
const probejs$$marker: never
}
export abstract class $VanillaPackResourcesAccessor$$Static implements $VanillaPackResourcesAccessor {
}
}

declare module "packages/team/creative/creativecore/mixin/$StringSplitterAccessor" {
import { $StringSplitter$WidthProvider } from "packages/net/minecraft/client/$StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {
"getWidthProvider"(): $StringSplitter$WidthProvider
get "widthProvider"(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
export abstract class $StringSplitterAccessor$$Static implements $StringSplitterAccessor {
}
}

