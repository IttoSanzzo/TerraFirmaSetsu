declare module "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage$SectionType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
static readonly "EMPTY": $LayerLightSectionStorage$SectionType
static readonly "LIGHT_AND_DATA": $LayerLightSectionStorage$SectionType
static readonly "LIGHT_ONLY": $LayerLightSectionStorage$SectionType

public "display"(): string
public static "valueOf"(string0: string): $LayerLightSectionStorage$SectionType
public static "values"(): $LayerLightSectionStorage$SectionType[]
}
}

declare module "packages/net/minecraft/world/level/lighting/$LightEngine" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LayerLightEventListener } from "packages/net/minecraft/world/level/lighting/$LayerLightEventListener"
import { $LayerLightSectionStorage } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $VoxelShape } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $LightEngineAccessor } from "packages/dev/engine_room/flywheel/backend/mixin/light/$LightEngineAccessor"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $DataLayer, $DataLayer$$Type } from "packages/net/minecraft/world/level/chunk/$DataLayer"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $DataLayerStorageMap } from "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap"
import { $LayerLightSectionStorage$SectionType } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage$SectionType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $LightEngine<M extends $DataLayerStorageMap<M>, S extends $LayerLightSectionStorage<M>> implements $LayerLightEventListener, $LightEngineAccessor<any, any> {
static readonly "MAX_LEVEL": integer
readonly "storage": S

public "checkBlock"(blockPos0: $BlockPos$$Type): void
public "enqueueDecrease"(long0: long, long1: long): void
public "enqueueIncrease"(long0: long, long1: long): void
public "getDataLayerData"(sectionPos0: $SectionPos$$Type): $DataLayer
public "getDebugData"(long0: long): string
public "getDebugSectionType"(long0: long): $LayerLightSectionStorage$SectionType
public static "getLightBlockInto"(blockGetter0: $BlockGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type, blockPos4: $BlockPos$$Type, direction5: $Direction$$Type, int6: integer): integer
public "getLightValue"(blockPos0: $BlockPos$$Type): integer
public static "getOcclusionShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, direction3: $Direction$$Type): $VoxelShape
public "getState"(blockPos0: $BlockPos$$Type): $BlockState
public static "hasDifferentLightProperties"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type): boolean
public "hasLightWork"(): boolean
public static "isEmptyShape"(blockState0: $BlockState$$Type): boolean
public "propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
public "queueSectionData"(long0: long, dataLayer1: $DataLayer$$Type): void
public "retainData"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "runLightUpdates"(): integer
public "setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
}
}

declare module "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage" {
import { $LayerLightSectionStorageAccessor } from "packages/dev/engine_room/flywheel/backend/mixin/light/$LayerLightSectionStorageAccessor"
import { $DataLayerStorageMap } from "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap"
import { $LayerLightSectionStorage$SectionType } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage$SectionType"
import { $DataLayer } from "packages/net/minecraft/world/level/chunk/$DataLayer"

export class $LayerLightSectionStorage<M extends $DataLayerStorageMap<M>> implements $LayerLightSectionStorageAccessor {
public "getDataLayerData"(long0: long): $DataLayer
public "getDebugSectionType"(long0: long): $LayerLightSectionStorage$SectionType
public "getStoredLevel"(long0: long): integer
public "lightOnInSection"(long0: long): boolean
public "retainData"(long0: long, boolean1: boolean): void
public "setStoredLevel"(long0: long, int1: integer): void
public "storingLightForSection"(long0: long): boolean
}
}

declare module "packages/net/minecraft/world/level/lighting/$LevelLightEngine" {
import { $LayerLightEventListener } from "packages/net/minecraft/world/level/lighting/$LayerLightEventListener"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LightEngine } from "packages/net/minecraft/world/level/lighting/$LightEngine"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $LightChunkGetter$$Type } from "packages/net/minecraft/world/level/chunk/$LightChunkGetter"
import { $LayerLightSectionStorage$SectionType } from "packages/net/minecraft/world/level/lighting/$LayerLightSectionStorage$SectionType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightEventListener } from "packages/net/minecraft/world/level/lighting/$LightEventListener"
import { $DataLayer$$Type } from "packages/net/minecraft/world/level/chunk/$DataLayer"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"

export class $LevelLightEngine implements $LightEventListener {
static readonly "LIGHT_SECTION_PADDING": integer
readonly "blockEngine": $LightEngine<any, any>

constructor(lightChunkGetter0: $LightChunkGetter$$Type, boolean1: boolean, boolean2: boolean)

public "checkBlock"(blockPos0: $BlockPos$$Type): void
public "getDebugData"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): string
public "getDebugSectionType"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): $LayerLightSectionStorage$SectionType
public "getLayerListener"(lightLayer0: $LightLayer$$Type): $LayerLightEventListener
public "getLightSectionCount"(): integer
public "getMaxLightSection"(): integer
public "getMinLightSection"(): integer
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "hasLightWork"(): boolean
public "lightOnInSection"(sectionPos0: $SectionPos$$Type): boolean
public "propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
public "queueSectionData"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type, dataLayer2: $DataLayer$$Type): void
public "retainData"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "runLightUpdates"(): integer
public "setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
public "updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
get "lightSectionCount"(): integer
get "maxLightSection"(): integer
get "minLightSection"(): integer
}
}

declare module "packages/net/minecraft/world/level/lighting/$LightEventListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $LightEventListener {
"checkBlock"(blockPos0: $BlockPos$$Type): void
"hasLightWork"(): boolean
"propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
"runLightUpdates"(): integer
"setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
"updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
"updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
}

export namespace $LightEventListener {
const probejs$$marker: never
}
export abstract class $LightEventListener$$Static implements $LightEventListener {
}
}

declare module "packages/net/minecraft/world/level/lighting/$ChunkSkyLightSources" {
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export class $ChunkSkyLightSources {
static readonly "NEGATIVE_INFINITY": integer

constructor(levelHeightAccessor0: $LevelHeightAccessor$$Type)

public "fillFrom"(chunkAccess0: $ChunkAccess$$Type): void
public "getHighestLowestSourceY"(): integer
public "getLowestSourceY"(int0: integer, int1: integer): integer
public "update"(blockGetter0: $BlockGetter$$Type, int1: integer, int2: integer, int3: integer): boolean
get "highestLowestSourceY"(): integer
}
}

declare module "packages/net/minecraft/world/level/lighting/$DataLayerStorageMap" {
import { $DataLayer, $DataLayer$$Type } from "packages/net/minecraft/world/level/chunk/$DataLayer"

export class $DataLayerStorageMap<M extends $DataLayerStorageMap<M>> {
public "clearCache"(): void
public "copy"(): M
public "copyDataLayer"(long0: long): $DataLayer
public "disableCache"(): void
public "getLayer"(long0: long): $DataLayer
public "hasLayer"(long0: long): boolean
public "removeLayer"(long0: long): $DataLayer
public "setLayer"(long0: long, dataLayer1: $DataLayer$$Type): void
}
}

declare module "packages/net/minecraft/world/level/lighting/$LayerLightEventListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightEventListener } from "packages/net/minecraft/world/level/lighting/$LightEventListener"
import { $DataLayer } from "packages/net/minecraft/world/level/chunk/$DataLayer"

export interface $LayerLightEventListener extends $LightEventListener {
"checkBlock"(blockPos0: $BlockPos$$Type): void
"getDataLayerData"(sectionPos0: $SectionPos$$Type): $DataLayer
"getLightValue"(blockPos0: $BlockPos$$Type): integer
"hasLightWork"(): boolean
"propagateLightSources"(chunkPos0: $ChunkPos$$Type): void
"runLightUpdates"(): integer
"setLightEnabled"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): void
"updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
"updateSectionStatus"(sectionPos0: $SectionPos$$Type, boolean1: boolean): void
}

export namespace $LayerLightEventListener {
const probejs$$marker: never
}
export abstract class $LayerLightEventListener$$Static implements $LayerLightEventListener {
}
}

