declare module "packages/xaeroplus/feature/extensions/$CustomMinimapFBORenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMinimapFBORenderer {
"reloadMapFrameBuffers"(): void
}

export namespace $CustomMinimapFBORenderer {
const probejs$$marker: never
}
export abstract class $CustomMinimapFBORenderer$$Static implements $CustomMinimapFBORenderer {
}
}

declare module "packages/xaeroplus/feature/extensions/$CustomMapProcessor" {
import { $ThreadLocal } from "packages/java/lang/$ThreadLocal"

export interface $CustomMapProcessor {
"xaeroPlus$getCurrentDimensionActualDimSignal"(): $ThreadLocal<boolean>
"xaeroPlus$getLeafRegionActualDimSignal"(): $ThreadLocal<boolean>
}

export namespace $CustomMapProcessor {
const probejs$$marker: never
}
export abstract class $CustomMapProcessor$$Static implements $CustomMapProcessor {
}
}

declare module "packages/xaeroplus/feature/extensions/$SeenChunksTrackingMapTileChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SeenChunksTrackingMapTileChunk {
"getSeenTiles"(): boolean[][]
get "seenTiles"(): boolean[][]
}

export namespace $SeenChunksTrackingMapTileChunk {
const probejs$$marker: never
}
export abstract class $SeenChunksTrackingMapTileChunk$$Static implements $SeenChunksTrackingMapTileChunk {
}
}

