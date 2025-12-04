declare module "packages/xaero/map/controls/$ControlsHandler" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"

export class $ControlsHandler {
constructor(mapProcessor0: $MapProcessor$$Type)

public "handleKeyEvents"(): void
public static "isDown"(keyMapping0: $KeyMapping$$Type): boolean
public static "isKeyRepeat"(keyMapping0: $KeyMapping$$Type): boolean
public "keyDown"(keyMapping0: $KeyMapping$$Type, boolean1: boolean, boolean2: boolean): void
public "keyUp"(keyMapping0: $KeyMapping$$Type, boolean1: boolean): void
public "onKeyInput"(minecraft0: $Minecraft$$Type): void
public static "setKeyState"(keyMapping0: $KeyMapping$$Type, boolean1: boolean): void
}
}

declare module "packages/xaero/map/core/$IWorldMapClientPlayNetHandler" {
import { $WorldMapSession, $WorldMapSession$$Type } from "packages/xaero/map/$WorldMapSession"

export interface $IWorldMapClientPlayNetHandler {
"getXaero_worldmapSession"(): $WorldMapSession
"setXaero_worldmapSession"(worldMapSession0: $WorldMapSession$$Type): void
get "xaero_worldmapSession"(): $WorldMapSession
set "xaero_worldmapSession"(value: $WorldMapSession$$Type)
}

export namespace $IWorldMapClientPlayNetHandler {
const probejs$$marker: never
}
export abstract class $IWorldMapClientPlayNetHandler$$Static implements $IWorldMapClientPlayNetHandler {
}
}

declare module "packages/xaero/map/pool/$TextureUploadPool$Normal" {
import { $TextureUpload$Normal } from "packages/xaero/map/graphics/$TextureUpload$Normal"
import { $TextureUploadPool } from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Normal extends $TextureUploadPool<$TextureUpload$Normal> {
constructor(int0: integer)

public "get"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, long8: long, int9: integer, int10: integer): $TextureUpload$Normal
}
}

declare module "packages/xaero/map/pool/$MapTilePool" {
import { $MapTile } from "packages/xaero/map/region/$MapTile"
import { $MapPool } from "packages/xaero/map/pool/$MapPool"

export class $MapTilePool extends $MapPool<$MapTile> {
constructor()

public "get"(string0: string, int1: integer, int2: integer): $MapTile
}
}

declare module "packages/xaero/map/graphics/$TextureUpload" {
import { $PoolUnit } from "packages/xaero/map/pool/$PoolUnit"

export class $TextureUpload implements $PoolUnit {
constructor()

public "create"(...object0s: any[]): void
public "getUploadType"(): integer
public "run"(): void
get "uploadType"(): integer
}
}

declare module "packages/xaero/map/region/$LeveledRegionManager" {
import { $LeveledRegion } from "packages/xaero/map/region/$LeveledRegion"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"

export class $LeveledRegionManager {
static readonly "MAX_LEVEL": integer

constructor()

public "get"(int0: integer, int1: integer, int2: integer): $LeveledRegion<any>
public "getLeaf"(int0: integer, int1: integer): $MapRegion
public "putLeaf"(int0: integer, int1: integer, mapRegion2: $MapRegion$$Type): void
public "remove"(int0: integer, int1: integer, int2: integer): boolean
}
}

declare module "packages/xaero/map/server/$IMinecraftServer" {
import { $MinecraftServerData, $MinecraftServerData$$Type } from "packages/xaero/map/server/$MinecraftServerData"

export interface $IMinecraftServer {
"getXaeroWorldMapServerData"(): $MinecraftServerData
"setXaeroWorldMapServerData"(minecraftServerData0: $MinecraftServerData$$Type): void
get "xaeroWorldMapServerData"(): $MinecraftServerData
set "xaeroWorldMapServerData"(value: $MinecraftServerData$$Type)
}

export namespace $IMinecraftServer {
const probejs$$marker: never
}
export abstract class $IMinecraftServer$$Static implements $IMinecraftServer {
}
}

declare module "packages/xaero/map/file/export/$PNGExporter" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $PNGExportResult } from "packages/xaero/map/file/export/$PNGExportResult"
import { $OldFormatSupport$$Type } from "packages/xaero/map/file/$OldFormatSupport"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $MapTileSelection$$Type } from "packages/xaero/map/gui/$MapTileSelection"

export class $PNGExporter {
constructor(path0: $Path$$Type)

public "export"(mapProcessor0: $MapProcessor$$Type, registry1: $Registry$$Type<$Biome$$Type>, registry2: $Registry$$Type<$DimensionType$$Type>, mapTileSelection3: $MapTileSelection$$Type, oldFormatSupport4: $OldFormatSupport$$Type): $PNGExportResult
}
}

declare module "packages/xaero/map/region/$MapRegion" {
import { $MapRegionInfo } from "packages/xaero/map/file/$MapRegionInfo"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BlockPos$MutableBlockPos } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BranchLeveledRegion$$Type } from "packages/xaero/map/region/$BranchLeveledRegion"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $LeafRegionTexture, $LeafRegionTexture$$Type } from "packages/xaero/map/region/texture/$LeafRegionTexture"
import { $MapTileChunk, $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $LeveledRegion } from "packages/xaero/map/region/$LeveledRegion"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $MapSaveLoad$$Type } from "packages/xaero/map/file/$MapSaveLoad"

export class $MapRegion extends $LeveledRegion<$LeafRegionTexture> implements $MapRegionInfo {
static readonly "SIDE_LENGTH": integer
readonly "writerThreadPauseSync": any

constructor(string0: string, string1: string, string2: string, mapDimension3: $MapDimension$$Type, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, registry9: $Registry$$Type<$Biome$$Type>)

public "canRequestReload_unsynced"(): boolean
public "cancelRefresh"(mapProcessor0: $MapProcessor$$Type): void
public "caveStartOutdated"(int0: integer, int1: integer): boolean
public "clean"(mapProcessor0: $MapProcessor$$Type): void
public "clearRegion"(mapProcessor0: $MapProcessor$$Type): void
public "convertCacheToOutdated"(mapSaveLoad0: $MapSaveLoad$$Type, string1: string): void
public "countChunks"(): integer
public "destroyBufferUpdateObjects"(): void
public "getBiomeRegistry"(): $Registry<$Biome>
public "getCacheFile"(): $File
public "getCacheHashCode"(): integer
public "getCaveDepth"(): integer
public "getCaveStart"(): integer
public "getChunk"(int0: integer, int1: integer): $MapTileChunk
public "getDimId"(): string
public "getHighlightsHash"(): integer
public "getInitialVersion"(): integer
public "getLastSaveTime"(): long
public "getLastVisited"(): long
public "getLoadState"(): byte
public "getMutableGlobalPos"(): $BlockPos$MutableBlockPos
public "getMwId"(): string
public "getPixelResultBuffer"(): integer[]
public "getRegionFile"(): $File
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "getReloadVersion"(): integer
public "getSaveExists"(): boolean
public "getTargetHighlightsHash"(): integer
public "getTimeSinceVisit"(): long
public "getUpToDateCaveStart"(): integer
public "getVersion"(): integer
public "getWorldId"(): string
public "hasHadTerrain"(): boolean
public "hasLookedForCache"(): boolean
public "hasVersion"(): boolean
public "isBeingWritten"(): boolean
public "isNormalMapData"(): boolean
public "isOutdatedWithOtherLayers"(): boolean
public "isResaving"(): boolean
public "isResting"(): boolean
public "isWritingPaused"(): boolean
public "popWriterPause"(): void
public "pushWriterPause"(): void
public "putTexture"(int0: integer, int1: integer, leafRegionTexture2: $LeafRegionTexture$$Type): void
public "registerVisit"(): void
public "requestRefresh"(mapProcessor0: $MapProcessor$$Type, boolean1: boolean): void
public "requestRefresh"(mapProcessor0: $MapProcessor$$Type): void
public "restoreBufferUpdateObjects"(): void
public "restoreMetaData"(int0ss: integer[][], int1: integer, int2: integer, int3: integer, int4: integer, boolean5: boolean, mapProcessor6: $MapProcessor$$Type): void
public "setBeingWritten"(boolean0: boolean): void
public "setCacheFile"(file0: $File$$Type): void
public "setCacheHashCode"(int0: integer): void
public "setCaveStart"(int0: integer): void
public "setChunk"(int0: integer, int1: integer, mapTileChunk2: $MapTileChunk$$Type): void
public "setHasHadTerrain"(): void
public "setHighlightsHash"(int0: integer): void
public "setInitialVersion"(int0: integer): void
public "setLastSaveTime"(long0: long): void
public "setLoadState"(byte0: byte): void
public "setLookedForCache"(boolean0: boolean): void
public "setOutdatedWithOtherLayers"(boolean0: boolean): void
public "setParent"(branchLeveledRegion0: $BranchLeveledRegion$$Type): void
public "setRefreshing"(boolean0: boolean): void
public "setRegionFile"(file0: $File$$Type): void
public "setReloadVersion"(int0: integer): void
public "setResaving"(boolean0: boolean): void
public "setSaveExists"(boolean0: boolean): void
public "setShouldCache"(boolean0: boolean, string1: string): void
public "setVersion"(int0: integer): void
public "shouldCache"(): boolean
public "shouldConvertCacheToOutdatedOnFinishDim"(): boolean
public "unsetHasHadTerrain"(): void
public "updateCaveMode"(): void
public "updateTargetHighlightsHash"(): void
get "loadingNeededForBranchLevel"(): integer
set "loadingNeededForBranchLevel"(value: integer)
get "loadingPrioritized"(): boolean
set "loadingPrioritized"(value: boolean)
get "biomeRegistry"(): $Registry<$Biome>
get "cacheFile"(): $File
get "cacheHashCode"(): integer
get "caveDepth"(): integer
get "caveStart"(): integer
get "dimId"(): string
get "highlightsHash"(): integer
get "initialVersion"(): integer
get "lastSaveTime"(): long
get "lastVisited"(): long
get "loadState"(): byte
get "mutableGlobalPos"(): $BlockPos$MutableBlockPos
get "mwId"(): string
get "pixelResultBuffer"(): integer[]
get "regionFile"(): $File
get "regionX"(): integer
get "regionZ"(): integer
get "reloadVersion"(): integer
get "saveExists"(): boolean
get "targetHighlightsHash"(): integer
get "timeSinceVisit"(): long
get "upToDateCaveStart"(): integer
get "version"(): integer
get "worldId"(): string
get "beingWritten"(): boolean
get "normalMapData"(): boolean
get "outdatedWithOtherLayers"(): boolean
get "resaving"(): boolean
get "resting"(): boolean
get "writingPaused"(): boolean
set "beingWritten"(value: boolean)
set "cacheFile"(value: $File$$Type)
set "cacheHashCode"(value: integer)
set "caveStart"(value: integer)
set "highlightsHash"(value: integer)
set "initialVersion"(value: integer)
set "lastSaveTime"(value: long)
set "loadState"(value: byte)
set "lookedForCache"(value: boolean)
set "outdatedWithOtherLayers"(value: boolean)
set "parent"(value: $BranchLeveledRegion$$Type)
set "refreshing"(value: boolean)
set "regionFile"(value: $File$$Type)
set "reloadVersion"(value: integer)
set "resaving"(value: boolean)
set "saveExists"(value: boolean)
set "version"(value: integer)
}
}

declare module "packages/xaero/map/highlight/$HighlighterRegistry" {
import { $List } from "packages/java/util/$List"
import { $AbstractHighlighter, $AbstractHighlighter$$Type } from "packages/xaero/map/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {
constructor()

public "end"(): void
public "getHighlighters"(): $List<$AbstractHighlighter>
public "register"(abstractHighlighter0: $AbstractHighlighter$$Type): void
get "highlighters"(): $List<$AbstractHighlighter>
}
}

declare module "packages/xaero/map/file/export/$PNGExportResultType" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $PNGExportResultType extends $Enum<$PNGExportResultType> {
static readonly "BAD_FBO": $PNGExportResultType
static readonly "EMPTY": $PNGExportResultType
static readonly "IMAGE_TOO_BIG": $PNGExportResultType
static readonly "IO_EXCEPTION": $PNGExportResultType
static readonly "NOT_PREPARED": $PNGExportResultType
static readonly "OUT_OF_MEMORY": $PNGExportResultType
static readonly "SUCCESS": $PNGExportResultType
static readonly "TOO_BIG": $PNGExportResultType

public "getMessage"(): $Component
public "isSuccess"(): boolean
public static "valueOf"(string0: string): $PNGExportResultType
public static "values"(): $PNGExportResultType[]
get "message"(): $Component
get "success"(): boolean
}
}

declare module "packages/xaero/map/highlight/$AbstractHighlighter" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $AbstractHighlighter {
public "addMinimapBlockHighlightTooltips"(list0: $List$$Type<$Component$$Type>, resourceKey1: $ResourceKey$$Type<$Level>, int2: integer, int3: integer, int4: integer): void
public "calculateRegionHash"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): integer
public "chunkIsHighlit"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): boolean
public "getBlockHighlightBluntTooltip"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): $Component
public "getBlockHighlightSubtleTooltip"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): $Component
public "getChunkHighlitColor"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): integer[]
public "isCoveringOutsideDiscovered"(): boolean
public "regionHasHighlights"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): boolean
get "coveringOutsideDiscovered"(): boolean
}
}

declare module "packages/xaero/map/pool/$MapPool" {
import { $PoolUnit, $PoolUnit$$Type } from "packages/xaero/map/pool/$PoolUnit"

export class $MapPool<T extends $PoolUnit> {
constructor(int0: integer)

public "addToPool"(t0: T): boolean
public "size"(): integer
}
}

declare module "packages/xaero/map/region/$MapBlock" {
import { $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MapWriter$$Type } from "packages/xaero/map/$MapWriter"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Overlay, $Overlay$$Type } from "packages/xaero/map/region/$Overlay"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"
import { $MapPixel } from "packages/xaero/map/region/$MapPixel"

export class $MapBlock extends $MapPixel {
constructor()

public "addOverlay"(overlay0: $Overlay$$Type): void
public "equals"(mapBlock0: $MapBlock$$Type, boolean1: boolean): boolean
public "equalsSlopesExcluded"(mapBlock0: $MapBlock$$Type): boolean
public "fixHeightType"(int0: integer, int1: integer, mapTile2: $MapTile$$Type, mapTileChunk3: $MapTileChunk$$Type, mapTileChunk4: $MapTileChunk$$Type, mapTileChunk5: $MapTileChunk$$Type, mapTileChunk6: $MapTileChunk$$Type, int7: integer, boolean8: boolean, blockStateShortShapeCache9: $BlockStateShortShapeCache$$Type): void
public "getBiome"(): $ResourceKey<$Biome>
public "getDiagonalSlope"(): byte
public "getEffectiveHeight"(blockStateShortShapeCache0: $BlockStateShortShapeCache$$Type): integer
public "getEffectiveHeight"(boolean0: boolean): integer
public "getEffectiveTopHeight"(boolean0: boolean): integer
public "getHeight"(): integer
public "getNumberOfOverlays"(): integer
public "getOverlays"(): $ArrayList<$Overlay>
public "getParametres"(): integer
public "getPixelColour"(int0s: integer[], mapWriter1: $MapWriter$$Type, level2: $Level$$Type, mapDimension3: $MapDimension$$Type, registry4: $Registry$$Type<$Block$$Type>, mapTileChunk5: $MapTileChunk$$Type, mapTileChunk6: $MapTileChunk$$Type, mapTileChunk7: $MapTileChunk$$Type, mapTileChunk8: $MapTileChunk$$Type, mapTile9: $MapTile$$Type, int10: integer, int11: integer, int12: integer, int13: integer, mutableBlockPos14: $BlockPos$MutableBlockPos$$Type, registry15: $Registry$$Type<$Biome$$Type>, registry16: $Registry$$Type<$DimensionType$$Type>, float17: float, float18: float, float19: float, blockTintProvider20: $BlockTintProvider$$Type, mapProcessor21: $MapProcessor$$Type, overlayManager22: $OverlayManager$$Type, int23: integer, int24: integer, blockStateShortShapeCache25: $BlockStateShortShapeCache$$Type): void
public "getTopHeight"(): integer
public "getVerticalSlope"(): byte
public "isGrass"(): boolean
public "prepareForWriting"(int0: integer): void
public "setBiome"(resourceKey0: $ResourceKey$$Type<$Biome>): void
public "setDiagonalSlope"(byte0: byte): void
public "setHeight"(int0: integer): void
public "setSlopeUnknown"(boolean0: boolean): void
public "setTopHeight"(int0: integer): void
public "setVerticalSlope"(byte0: byte): void
public "toRenderString"(registry0: $Registry$$Type<$Biome$$Type>): string
public "write"(blockState0: $BlockState$$Type, int1: integer, int2: integer, resourceKey3: $ResourceKey$$Type<$Biome>, byte4: byte, boolean5: boolean, boolean6: boolean): void
get "biome"(): $ResourceKey<$Biome>
get "diagonalSlope"(): byte
get "height"(): integer
get "numberOfOverlays"(): integer
get "overlays"(): $ArrayList<$Overlay>
get "parametres"(): integer
get "topHeight"(): integer
get "verticalSlope"(): byte
get "grass"(): boolean
set "biome"(value: $ResourceKey$$Type<$Biome>)
set "diagonalSlope"(value: byte)
set "height"(value: integer)
set "slopeUnknown"(value: boolean)
set "topHeight"(value: integer)
set "verticalSlope"(value: byte)
}
}

declare module "packages/xaero/map/$MapProcessor" {
import { $MapTile } from "packages/xaero/map/region/$MapTile"
import { $BlockTintProvider } from "packages/xaero/map/biome/$BlockTintProvider"
import { $MapWorld, $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $WorldDataHandler, $WorldDataHandler$$Type } from "packages/xaero/map/file/worldsave/$WorldDataHandler"
import { $Field, $Field$$Type } from "packages/java/lang/reflect/$Field"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $MapWriter, $MapWriter$$Type } from "packages/xaero/map/$MapWriter"
import { $CustomVertexConsumers, $CustomVertexConsumers$$Type } from "packages/xaero/map/graphics/$CustomVertexConsumers"
import { $ByteBufferDeallocator, $ByteBufferDeallocator$$Type } from "packages/xaero/map/deallocator/$ByteBufferDeallocator"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $MapRegionHighlightsPreparer, $MapRegionHighlightsPreparer$$Type } from "packages/xaero/map/highlight/$MapRegionHighlightsPreparer"
import { $ClientLevel, $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $CustomMapProcessor } from "packages/xaeroplus/feature/extensions/$CustomMapProcessor"
import { $CaveStartCalculator$$Type } from "packages/xaero/map/misc/$CaveStartCalculator"
import { $BiomeGetter$$Type } from "packages/xaero/map/biome/$BiomeGetter"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BranchTextureRenderer$$Type } from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import { $TextureUploader$$Type } from "packages/xaero/map/graphics/$TextureUploader"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $Queue } from "packages/java/util/$Queue"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $MapDimension, $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $MessageBox, $MessageBox$$Type } from "packages/xaero/map/gui/message/$MessageBox"
import { $LeveledRegion, $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"
import { $MessageBoxRenderer, $MessageBoxRenderer$$Type } from "packages/xaero/map/gui/message/render/$MessageBoxRenderer"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $HolderLookup, $HolderLookup$$Type } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $HighlighterRegistry, $HighlighterRegistry$$Type } from "packages/xaero/map/highlight/$HighlighterRegistry"
import { $MapSaveLoad, $MapSaveLoad$$Type } from "packages/xaero/map/file/$MapSaveLoad"
import { $ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$$Type } from "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import { $MapLimiter, $MapLimiter$$Type } from "packages/xaero/map/$MapLimiter"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $DimensionType, $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $ThreadLocal } from "packages/java/lang/$ThreadLocal"
import { $MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$$Type } from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $BiomeColorCalculator, $BiomeColorCalculator$$Type } from "packages/xaero/map/biome/$BiomeColorCalculator"
import { $MapTileChunk } from "packages/xaero/map/region/$MapTileChunk"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $MapRunner$$Type } from "packages/xaero/map/$MapRunner"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $MapTilePool, $MapTilePool$$Type } from "packages/xaero/map/pool/$MapTilePool"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $OverlayManager, $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"
import { $BrokenBlockTintCache$$Type } from "packages/xaero/map/cache/$BrokenBlockTintCache"

export class $MapProcessor implements $CustomMapProcessor {
static readonly "DEFAULT_LIGHT_LEVELS": integer
static readonly "ROOT_FOLDER_FORMAT": integer
readonly "mainStuffSync": any
readonly "processorThreadPauseSync": any
readonly "renderThreadPauseSync": any
readonly "uiPauseSync": any
readonly "uiSync": any

constructor(mapSaveLoad0: $MapSaveLoad$$Type, mapWriter1: $MapWriter$$Type, mapLimiter2: $MapLimiter$$Type, byteBufferDeallocator3: $ByteBufferDeallocator$$Type, mapTilePool4: $MapTilePool$$Type, overlayManager5: $OverlayManager$$Type, textureUploader6: $TextureUploader$$Type, worldDataHandler7: $WorldDataHandler$$Type, branchTextureRenderer8: $BranchTextureRenderer$$Type, multiTextureRenderTypeRendererProvider9: $MultiTextureRenderTypeRendererProvider$$Type, customVertexConsumers10: $CustomVertexConsumers$$Type, biomeColorCalculator11: $BiomeColorCalculator$$Type, blockStateShortShapeCache12: $BlockStateShortShapeCache$$Type, biomeGetter13: $BiomeGetter$$Type, brokenBlockTintCache14: $BrokenBlockTintCache$$Type, highlighterRegistry15: $HighlighterRegistry$$Type, mapRegionHighlightsPreparer16: $MapRegionHighlightsPreparer$$Type, messageBox17: $MessageBox$$Type, messageBoxRenderer18: $MessageBoxRenderer$$Type, caveStartCalculator19: $CaveStartCalculator$$Type, clientSyncedTrackedPlayerManager20: $ClientSyncedTrackedPlayerManager$$Type)

public "addToProcess"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "addToRefresh"(mapRegion0: $MapRegion$$Type, boolean1: boolean): void
public "beforeMinimapRegionRender"(mapRegion0: $MapRegion$$Type): void
public "canQuickConfirmUnsynced"(): boolean
public "changeWorld"(clientLevel0: $ClientLevel$$Type, holderLookup1: $HolderLookup$$Type<$Block$$Type>, registry2: $Registry$$Type<$Block$$Type>, registry3: $Registry$$Type<$Fluid$$Type>, registry4: $Registry$$Type<$Biome$$Type>, registry5: $Registry$$Type<$DimensionType$$Type>): void
public "checkForWorldUpdate"(): void
public "confirmMultiworld"(mapDimension0: $MapDimension$$Type): boolean
public "finalizeMinimapRender"(): void
public "getAffectingLoadingFrequencyCount"(): integer
public "getAmbientBrightness"(dimensionType0: $DimensionType$$Type): float
public "getBiomeColorCalculator"(): $BiomeColorCalculator
public "getBlockStateShortShapeCache"(): $BlockStateShortShapeCache
public "getBrightness"(int0: integer, clientLevel1: $ClientLevel$$Type, boolean2: boolean): float
public "getBrightness"(): float
public "getBrightness"(boolean0: boolean): float
public "getBufferDeallocator"(): $ByteBufferDeallocator
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getCrosshairMessage"(): string
public "getCurrentCaveLayer"(): integer
public "getCurrentDimId"(): string
public "getCurrentDimension"(): string
public "getCurrentMWId"(): string
public "getCurrentWorldId"(): string
public "getCvc"(): $CustomVertexConsumers
public "getDimensionIdForFolder"(string0: string): $ResourceKey<$Level>
public "getDimensionName"(resourceKey0: $ResourceKey$$Type<$Level>): string
public "getFootprints"(): $ArrayList<double[]>
public "getGlobalVersion"(): integer
public "getHighlighterRegistry"(): $HighlighterRegistry
public "getLeafMapRegion"(int0: integer, int1: integer, int2: integer, boolean3: boolean): $MapRegion
public "getLeveledRegion"(int0: integer, int1: integer, int2: integer, int3: integer): $LeveledRegion<any>
public "getMapChunk"(int0: integer, int1: integer, int2: integer): $MapTileChunk
public "getMapLimiter"(): $MapLimiter
/** @deprecated */
public "getMapRegion"(int0: integer, int1: integer, int2: integer, boolean3: boolean): $MapRegion
public "getMapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
public "getMapSaveLoad"(): $MapSaveLoad
public "getMapTile"(int0: integer, int1: integer, int2: integer): $MapTile
public "getMapWorld"(): $MapWorld
public "getMapWriter"(): $MapWriter
public "getMessageBox"(): $MessageBox
public "getMessageBoxRenderer"(): $MessageBoxRenderer
public "getMinecraftScheduledTasks"(): $Queue<$Runnable>
public "getMinimapMapRegion"(int0: integer, int1: integer): $MapRegion
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getNewWorld"(): $ClientLevel
public "getOverlayManager"(): $OverlayManager
public "getProcessedCount"(): integer
public "getRenderStartTime"(): long
public "getRenderStartTimeUpdater"(): $Runnable
public "getServerModNetworkVersion"(): integer
public "getTilePool"(): $MapTilePool
public "getWorld"(): $ClientLevel
public "getWorldBlockLookup"(): $HolderLookup<$Block>
public "getWorldBlockRegistry"(): $Registry<$Block>
public "getWorldBlockTintProvider"(): $BlockTintProvider
public "getWorldDataHandler"(): $WorldDataHandler
public "getWorldDimensionTypeRegistry"(): $Registry<$DimensionType>
public "handler$cll000$capturePrevStateForWorldChangeEvent"(ci: $CallbackInfo$$Type): void
public "handler$cll000$fireWorldChangedEvent"(ci: $CallbackInfo$$Type): void
public "handler$cll000$getActualDimIfSignalSet"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cll000$getDimensionName"(id: $ResourceKey$$Type<any>, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cll000$resetCustomDimOnWorldUnload"(ci: $CallbackInfo$$Type): void
public "ignoreWorld"(level0: $Level$$Type): boolean
public "initMinimapRender"(int0: integer, int1: integer): void
public "isConsideringNetherFairPlay"(): boolean
public "isCurrentMapLocked"(): boolean
public "isCurrentMultiworldWritable"(): boolean
public "isEqual"(string0: string, string1: string, string2: string): boolean
public "isFinalizing"(): boolean
public "isFinished"(): boolean
public "isMapWorldUsable"(): boolean
public "isProcessed"(leveledRegion0: $LeveledRegion$$Type<any>): boolean
public "isProcessingPaused"(): boolean
public "isRenderingPaused"(): boolean
public "isUIPaused"(): boolean
public "isUploadingPaused"(): boolean
public "isWaitingForWorldUpdate"(): boolean
public static "isWorldMultiplayer"(boolean0: boolean, string1: string): boolean
public static "isWorldRealms"(string0: string): boolean
public "isWritingPaused"(): boolean
public "onClientTickStart"(): void
public "onInit"(clientPacketListener0: $ClientPacketListener$$Type): void
public "onRenderProcess"(minecraft0: $Minecraft$$Type): void
public "onServerLevelId"(int0: integer): void
public "onWorldUnload"(): void
public "popIsLoading"(): void
public "popRenderPause"(boolean0: boolean, boolean1: boolean): void
public "popUIPause"(): void
public "popWriterPause"(): void
public "pushIsLoading"(): void
public "pushRenderPause"(boolean0: boolean, boolean1: boolean): void
public "pushUIPause"(): void
public "pushWriterPause"(): void
public "quickConfirmMultiworld"(): void
public "redirect$cll000$createMapRegionInActualDimensionIfSignalled"(worldId: string, dimId: string, mwId: string, dim: $MapDimension$$Type, x: integer, z: integer, caveLayer: integer, initialVersion: integer, normalMapData: boolean, biomeRegistry: $Registry$$Type<any>): $MapRegion
public "redirect$cll000$decreaseThreadSleepTime"(millis: long): void
public "redirect$cll000$replaceLockPath"(instance: $Path$$Type, other: string): $Path
public "regionDetectionExists"(int0: integer, int1: integer, int2: integer): boolean
public "regionExists"(int0: integer, int1: integer, int2: integer): boolean
public "removeMapRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "removeToProcess"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "removeToRefresh"(mapRegion0: $MapRegion$$Type): void
public "requestCurrentMapDeletion"(): void
public "resetRenderStartTime"(): void
public "run"(mapRunner0: $MapRunner$$Type): void
public "serverHasMod"(): boolean
public "setConsideringNetherFairPlayMessage"(boolean0: boolean): void
public "setGlobalVersion"(int0: integer): void
public "setMainValues"(): void
public "setMultiworld"(mapDimension0: $MapDimension$$Type, string1: string): void
public "setServerModNetworkVersion"(int0: integer): void
public "stop"(): void
public "toggleMultiworldType"(mapDimension0: $MapDimension$$Type): void
public "updateCaveStart"(): void
public "updateDimension"(clientLevel0: $ClientLevel$$Type, resourceKey1: $ResourceKey$$Type<$Level>): void
public "updateFootprints"(int0: integer): void
public "updateVisitedDimension"(clientLevel0: $ClientLevel$$Type): void
public "updateWorldSpawn"(blockPos0: $BlockPos$$Type, clientLevel1: $ClientLevel$$Type): void
public "waitForLoadingToFinish"(runnable0: $Runnable$$Type): void
public "wrapOperation$cll000$getLeafMapRegionActualDimensionIfSignalled"(instance: $MapWorld$$Type, original: $Operation$$Type<any>): $MapDimension
public "wrapOperation$cll000$storePrevWorldVarStates"(instance: $MapProcessor$$Type, value: string, original: $Operation$$Type<any>): void
public "wrapOperation$cll000$updateWorldSyncedGetActualDimension"(mapWorld: $MapWorld$$Type, original: $Operation$$Type<any>): $MapDimension
public "xaeroPlus$getCurrentDimensionActualDimSignal"(): $ThreadLocal<any>
public "xaeroPlus$getLeafRegionActualDimSignal"(): $ThreadLocal<any>
get "freeFramePeriod"(): long
set "freeFramePeriod"(value: long)
get "mainPlayerX"(): double
set "mainPlayerX"(value: double)
get "mainPlayerY"(): double
set "mainPlayerY"(value: double)
get "mainPlayerZ"(): double
set "mainPlayerZ"(value: double)
get "mainWorld"(): $ClientLevel
set "mainWorld"(value: $ClientLevel$$Type)
get "mainWorldBiomeRegistry"(): $Registry<$Biome>
set "mainWorldBiomeRegistry"(value: $Registry$$Type<$Biome$$Type>)
get "mainWorldBlockRegistry"(): $Registry<$Block>
set "mainWorldBlockRegistry"(value: $Registry$$Type<$Block$$Type>)
get "mainWorldDimensionTypeRegistry"(): $Registry<$DimensionType>
set "mainWorldDimensionTypeRegistry"(value: $Registry$$Type<$DimensionType$$Type>)
get "newWorldBiomeRegistry"(): $Registry<$Biome>
set "newWorldBiomeRegistry"(value: $Registry$$Type<$Biome$$Type>)
get "newWorldBlockRegistry"(): $Registry<$Block>
set "newWorldBlockRegistry"(value: $Registry$$Type<$Block$$Type>)
get "newWorldDimensionTypeRegistry"(): $Registry<$DimensionType>
set "newWorldDimensionTypeRegistry"(value: $Registry$$Type<$DimensionType$$Type>)
get "selectedField"(): $Field
set "selectedField"(value: $Field$$Type)
get "worldBiomeRegistry"(): $Registry<$Biome>
set "worldBiomeRegistry"(value: $Registry$$Type<$Biome$$Type>)
get "affectingLoadingFrequencyCount"(): integer
get "biomeColorCalculator"(): $BiomeColorCalculator
get "blockStateShortShapeCache"(): $BlockStateShortShapeCache
get "brightness"(): float
get "bufferDeallocator"(): $ByteBufferDeallocator
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "crosshairMessage"(): string
get "currentCaveLayer"(): integer
get "currentDimId"(): string
get "currentDimension"(): string
get "currentMWId"(): string
get "currentWorldId"(): string
get "cvc"(): $CustomVertexConsumers
get "footprints"(): $ArrayList<double[]>
get "globalVersion"(): integer
get "highlighterRegistry"(): $HighlighterRegistry
get "mapLimiter"(): $MapLimiter
get "mapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
get "mapSaveLoad"(): $MapSaveLoad
get "mapWorld"(): $MapWorld
get "mapWriter"(): $MapWriter
get "messageBox"(): $MessageBox
get "messageBoxRenderer"(): $MessageBoxRenderer
get "minecraftScheduledTasks"(): $Queue<$Runnable>
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "newWorld"(): $ClientLevel
get "overlayManager"(): $OverlayManager
get "processedCount"(): integer
get "renderStartTime"(): long
get "renderStartTimeUpdater"(): $Runnable
get "serverModNetworkVersion"(): integer
get "tilePool"(): $MapTilePool
get "world"(): $ClientLevel
get "worldBlockLookup"(): $HolderLookup<$Block>
get "worldBlockRegistry"(): $Registry<$Block>
get "worldBlockTintProvider"(): $BlockTintProvider
get "worldDataHandler"(): $WorldDataHandler
get "worldDimensionTypeRegistry"(): $Registry<$DimensionType>
get "consideringNetherFairPlay"(): boolean
get "currentMapLocked"(): boolean
get "currentMultiworldWritable"(): boolean
get "finalizing"(): boolean
get "finished"(): boolean
get "mapWorldUsable"(): boolean
get "processingPaused"(): boolean
get "renderingPaused"(): boolean
get "uIPaused"(): boolean
get "uploadingPaused"(): boolean
get "waitingForWorldUpdate"(): boolean
get "writingPaused"(): boolean
set "consideringNetherFairPlayMessage"(value: boolean)
set "globalVersion"(value: integer)
set "serverModNetworkVersion"(value: integer)
}
}

declare module "packages/xaero/map/pool/$TextureUploadPool" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"
import { $MapPool } from "packages/xaero/map/pool/$MapPool"

export class $TextureUploadPool<T extends $TextureUpload> extends $MapPool<T> {
constructor(int0: integer)

}
}

declare module "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal" {
import { $TextureUpload$SubsequentNormal } from "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal"
import { $TextureUploadPool } from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<$TextureUpload$SubsequentNormal> {
constructor(int0: integer)

public "get"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, long7: long, int8: integer, int9: integer, int10: integer, int11: integer): $TextureUpload$SubsequentNormal
}
}

declare module "packages/xaero/map/util/linked/$ILinkedChainNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
"getNext"(): V
"getPrevious"(): V
"isDestroyed"(): boolean
"onDestroyed"(): void
"setNext"(v0: V): void
"setPrevious"(v0: V): void
get "next"(): V
get "previous"(): V
get "destroyed"(): boolean
set "next"(value: V)
set "previous"(value: V)
}

export namespace $ILinkedChainNode {
const probejs$$marker: never
}
export abstract class $ILinkedChainNode$$Static<V extends $ILinkedChainNode<V>> implements $ILinkedChainNode<V> {
}
}

declare module "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData" {
import { $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"

export class $WorldDataReaderSectionBiomeData {
constructor(listTag0: $ListTag$$Type, long1s: long[])

public "get"(int0: integer, int1: integer, int2: integer): string
public "hasDifferentBiomes"(): boolean
}
}

declare module "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BiomeManager$$Type } from "packages/net/minecraft/world/level/biome/$BiomeManager"
import { $WorldDataReaderSectionBiomeData$$Type } from "packages/xaero/map/file/worldsave/biome/$WorldDataReaderSectionBiomeData"
import { $BiomeManager$NoiseBiomeSource } from "packages/net/minecraft/world/level/biome/$BiomeManager$NoiseBiomeSource"

export class $WorldDataBiomeManager implements $BiomeManager$NoiseBiomeSource {
constructor()

public "addBiomeSectionForRegionChunk"(int0: integer, int1: integer, int2: integer, worldDataReaderSectionBiomeData3: $WorldDataReaderSectionBiomeData$$Type): void
public "clear"(): void
public "getBiome"(biomeManager0: $BiomeManager$$Type, int1: integer, int2: integer, int3: integer): $Biome
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "resetChunkBiomeData"(int0: integer, int1: integer, biome2: $Biome$$Type, registry3: $Registry$$Type<$Biome$$Type>): void
}
}

declare module "packages/xaero/map/file/export/$PNGExportResult" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $PNGExportResultType, $PNGExportResultType$$Type } from "packages/xaero/map/file/export/$PNGExportResultType"

export class $PNGExportResult {
constructor(pNGExportResultType0: $PNGExportResultType$$Type, path1: $Path$$Type)

public "getFolderToOpen"(): $Path
public "getMessage"(): $Component
public "getType"(): $PNGExportResultType
get "folderToOpen"(): $Path
get "message"(): $Component
get "type"(): $PNGExportResultType
}
}

declare module "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage" {
import { $DataOutputStream$$Type } from "packages/java/io/$DataOutputStream"

export class $Paletted2DFastBitArrayIntStorage {
public "contains"(int0: integer): boolean
public "get"(int0: integer, int1: integer): integer
public "getBiomePaletteDebug"(): string
public "getDefaultValueCount"(): integer
public "getPaletteElement"(int0: integer): integer
public "getPaletteElementCount"(int0: integer): integer
public "getPaletteNonNullCount"(): integer
public "getPaletteSize"(): integer
public "getRaw"(int0: integer, int1: integer): integer
public "set"(int0: integer, int1: integer, int2: integer): void
public "writeData"(dataOutputStream0: $DataOutputStream$$Type): void
get "biomePaletteDebug"(): string
get "defaultValueCount"(): integer
get "paletteNonNullCount"(): integer
get "paletteSize"(): integer
}
}

declare module "packages/xaero/map/gui/$CursorBox" {
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CursorBox {
constructor(int0: integer)
constructor(component0: $Component$$Type, boolean1: boolean)
constructor(component0: $Component$$Type)
constructor(string0: string)
constructor(string0: string, style1: $Style$$Type)
constructor(string0: string, style1: $Style$$Type, boolean2: boolean)

public "createLines"(component0: $Component$$Type): void
public "drawBox"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "getFullCode"(): string
public "getLine"(int0: integer): $Component
public "getPlainText"(): string
public "setAutoLinebreak"(boolean0: boolean): void
public "setStartWidth"(int0: integer): void
public "splitWords"(arrayList0: $ArrayList$$Type<$Component$$Type>, formattedText1: $FormattedText$$Type): void
public "withWidth"(int0: integer): $CursorBox
get "fullCode"(): string
get "plainText"(): string
set "autoLinebreak"(value: boolean)
set "startWidth"(value: integer)
}
}

declare module "packages/xaero/map/region/texture/$RegionTextureBiomes" {
import { $FastPalette, $FastPalette$$Type } from "packages/xaero/map/palette/$FastPalette"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Paletted2DFastBitArrayIntStorage, $Paletted2DFastBitArrayIntStorage$$Type } from "packages/xaero/map/palette/$Paletted2DFastBitArrayIntStorage"

export class $RegionTextureBiomes {
constructor(paletted2DFastBitArrayIntStorage0: $Paletted2DFastBitArrayIntStorage$$Type, fastPalette1: $FastPalette$$Type<$ResourceKey$$Type<$Biome$$Type>>)

public "getBiomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
public "getRegionBiomePalette"(): $FastPalette<$ResourceKey<$Biome>>
get "biomeIndexStorage"(): $Paletted2DFastBitArrayIntStorage
get "regionBiomePalette"(): $FastPalette<$ResourceKey<$Biome>>
}
}

declare module "packages/xaero/map/graphics/$TextureUpload$SubsequentNormal" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$SubsequentNormal extends $TextureUpload {
constructor(int0: integer)
constructor(...object0s: any[])

}
}

declare module "packages/xaero/map/region/texture/$BranchTextureRenderer" {
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $BranchTextureRenderer {
constructor()

public "render"(int0: integer, integer1: integer, integer2: integer, integer3: integer, integer4: integer, renderTarget5: $RenderTarget$$Type, boolean6: boolean): void
}
}

declare module "packages/xaero/map/graphics/$TextureUploadBenchmark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureUploadBenchmark {
constructor(...int0s: integer[])

public "getAverage"(int0: integer): long
public "getTotalsString"(): string
public "isFinished"(int0: integer): boolean
public "isFinished"(): boolean
public "post"(int0: integer): void
public "pre"(): void
get "totalsString"(): string
get "finished"(): boolean
}
}

declare module "packages/xaero/map/$MapWriter" {
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $StateHolder$$Type } from "packages/net/minecraft/world/level/block/state/$StateHolder"
import { $OverlayBuilder$$Type } from "packages/xaero/map/region/$OverlayBuilder"
import { $LocalLongRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalLongRef"
import { $LocalRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import { $MapBlock$$Type } from "packages/xaero/map/region/$MapBlock"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BiomeGetter$$Type } from "packages/xaero/map/biome/$BiomeGetter"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $BiomeColorCalculator$$Type } from "packages/xaero/map/biome/$BiomeColorCalculator"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $LocalBooleanRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalBooleanRef"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $MapWriter {
static readonly "DEFAULT_RESOURCE": string[]
static readonly "MAX_TRANSPARENCY_BLEND_DEPTH": integer
static readonly "NO_Y_VALUE": integer

constructor(overlayManager0: $OverlayManager$$Type, blockStateShortShapeCache1: $BlockStateShortShapeCache$$Type, biomeGetter2: $BiomeGetter$$Type)

public "getBlockTintIndex"(blockState0: $BlockState$$Type): integer
public "getSectionBasedHeight"(levelChunk0: $LevelChunk$$Type, int1: integer): integer
public "getUpdateCounter"(): long
public "handler$cma000$fastMapMaxTilesPerCycleSetting"(ci: $CallbackInfo$$Type, tilesToUpdateRef: $LocalLongRef$$Type, sizeTiles: integer): void
public "handler$cma000$netherCaveFixInject"(ci: $CallbackInfo$$Type, world: $Level$$Type, caveRef: $LocalBooleanRef$$Type, fullCaveRef: $LocalBooleanRef$$Type): void
public "handler$cma000$obsidianRoofHeadInject"(ci: $CallbackInfo$$Type, bchunk: $LevelChunk$$Type, stateRef: $LocalRef$$Type<any>, hRef: $LocalIntRef$$Type, transparentSkipYRef: $LocalIntRef$$Type, columnRoofObsidianRef: $LocalBooleanRef$$Type): void
public "handler$cma000$resetSignals"(ci: $CallbackInfo$$Type): void
public "handler$cma000$setCrossDimWriteSignals"(ci: $CallbackInfo$$Type): void
public "handler$cma000$setObsidianColumnLocalVar"(ci: $CallbackInfo$$Type, columnRoofObsidianRef: $LocalBooleanRef$$Type): void
public "hasVanillaColor"(blockState0: $BlockState$$Type, level1: $Level$$Type, registry2: $Registry$$Type<$Block$$Type>, blockPos3: $BlockPos$$Type): boolean
public "isGlowing"(blockState0: $BlockState$$Type): boolean
public "isInvisible"(blockState0: $BlockState$$Type, block1: $Block$$Type, boolean2: boolean): boolean
public "loadBlockColourFromTexture"(blockState0: $BlockState$$Type, boolean1: boolean, level2: $Level$$Type, registry3: $Registry$$Type<$Block$$Type>, blockPos4: $BlockPos$$Type): integer
public "loadPixel"(level0: $Level$$Type, registry1: $Registry$$Type<$Block$$Type>, mapBlock2: $MapBlock$$Type, mapBlock3: $MapBlock$$Type, levelChunk4: $LevelChunk$$Type, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, boolean10: boolean, int11: integer, boolean12: boolean, boolean13: boolean, registry14: $Registry$$Type<$Biome$$Type>, boolean15: boolean, int16: integer, mutableBlockPos17: $BlockPos$MutableBlockPos$$Type): void
public "modifyExpressionValue$cma000$obsidianRoofOverlayMod"(original: boolean, bChunk: $LevelChunk$$Type, b: $Block$$Type, h: integer): boolean
public "modifyExpressionValue$cma000$removeWriteTimeLimiterPerFrame"(original: long): long
public "onRender"(biomeColorCalculator0: $BiomeColorCalculator$$Type, overlayManager1: $OverlayManager$$Type): void
public "requestCachedColoursClear"(): void
public "resetPosition"(): void
public "setDirtyInWriteDistance"(player0: $Player$$Type, level1: $Level$$Type): void
public "setMapProcessor"(mapProcessor0: $MapProcessor$$Type): void
public "shouldOverlay"(stateHolder0: $StateHolder$$Type<any, any>): boolean
public "updateBottomRightTile"(mapRegion0: $MapRegion$$Type, mapTileChunk1: $MapTileChunk$$Type, mapTileChunk2: $MapTileChunk$$Type, int3: integer, int4: integer): void
public "wrapOperation$cma000$checkObsidianRoofColumn"(instance: $OverlayBuilder$$Type, original: $Operation$$Type<any>, columnRoofObsidianRef: $LocalBooleanRef$$Type): boolean
public "wrapOperation$cma000$fastMap"(instance: $MapWriter$$Type, world: $Level$$Type, blockRegistry: $Registry$$Type<any>, distance: integer, onlyLoad: boolean, biomeRegistry: $Registry$$Type<any>, overlayManager: $OverlayManager$$Type, loadChunks: boolean, updateChunks: boolean, ignoreHeightmaps: boolean, flowers: boolean, detailedDebug: boolean, mutableBlockPos3: $BlockPos$MutableBlockPos$$Type, blockTintProvider: $BlockTintProvider$$Type, caveDepth: integer, caveStart: integer, layerToWrite: integer, tileChunkX: integer, tileChunkZ: integer, tileChunkLocalX: integer, tileChunkLocalZ: integer, chunkX: integer, chunkZ: integer, original: $Operation$$Type<any>): boolean
public "wrapOperation$cma000$getActualMapRegionInOnRender"(mapProcessor: $MapProcessor$$Type, caveLayer: integer, regX: integer, regZ: integer, create: boolean, original: $Operation$$Type<any>): $MapRegion
public "wrapOperation$cma000$getOpacityForObsidianRoof"(instance: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, original: $Operation$$Type<any>, h: integer): integer
public "wrapOperation$cma000$getOpacityForObsidianRoof$mixinextras$bridge$41"(instance: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, original: $Operation$$Type<any>, h: $LocalIntRef$$Type): integer
public "wrapOperation$cma000$removeCustomDimSwitchWriterPrevention"(mapWorld: $MapWorld$$Type, original: $Operation$$Type<any>): $ResourceKey<any>
public "writeChunk"(level0: $Level$$Type, registry1: $Registry$$Type<$Block$$Type>, int2: integer, boolean3: boolean, registry4: $Registry$$Type<$Biome$$Type>, overlayManager5: $OverlayManager$$Type, boolean6: boolean, boolean7: boolean, boolean8: boolean, boolean9: boolean, boolean10: boolean, mutableBlockPos11: $BlockPos$MutableBlockPos$$Type, blockTintProvider12: $BlockTintProvider$$Type, int13: integer, int14: integer, int15: integer, int16: integer, int17: integer, int18: integer, int19: integer, int20: integer, int21: integer): boolean
public "writeMap"(level0: $Level$$Type, registry1: $Registry$$Type<$Block$$Type>, double2: double, double3: double, double4: double, registry5: $Registry$$Type<$Biome$$Type>, biomeColorCalculator6: $BiomeColorCalculator$$Type, overlayManager7: $OverlayManager$$Type, boolean8: boolean, boolean9: boolean, boolean10: boolean, boolean11: boolean, boolean12: boolean, mutableBlockPos13: $BlockPos$MutableBlockPos$$Type, blockTintProvider14: $BlockTintProvider$$Type, int15: integer): boolean
get "writeFreeSinceLastWrite"(): long
set "writeFreeSinceLastWrite"(value: long)
get "updateCounter"(): long
set "mapProcessor"(value: $MapProcessor$$Type)
}
}

declare module "packages/xaero/map/server/player/$IServerPlayer" {
import { $ServerPlayerData, $ServerPlayerData$$Type } from "packages/xaero/map/server/player/$ServerPlayerData"

export interface $IServerPlayer {
"getXaeroWorldMapPlayerData"(): $ServerPlayerData
"setXaeroWorldMapPlayerData"(serverPlayerData0: $ServerPlayerData$$Type): void
get "xaeroWorldMapPlayerData"(): $ServerPlayerData
set "xaeroWorldMapPlayerData"(value: $ServerPlayerData$$Type)
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
export abstract class $IServerPlayer$$Static implements $IServerPlayer {
}
}

declare module "packages/xaero/map/graphics/$TextureUploader" {
import { $TextureUploadPool$Compressed$$Type } from "packages/xaero/map/pool/$TextureUploadPool$Compressed"
import { $TextureUploadPool$SubsequentNormal$$Type } from "packages/xaero/map/pool/$TextureUploadPool$SubsequentNormal"
import { $TextureUploadPool$Normal$$Type } from "packages/xaero/map/pool/$TextureUploadPool$Normal"
import { $TextureUploadBenchmark$$Type } from "packages/xaero/map/graphics/$TextureUploadBenchmark"
import { $TextureUpload$$Type } from "packages/xaero/map/graphics/$TextureUpload"
import { $BranchTextureRenderer$$Type } from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import { $TextureUploadPool$BranchUpdate$$Type } from "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate"
import { $TextureUploadPool$BranchDownload$$Type } from "packages/xaero/map/pool/$TextureUploadPool$BranchDownload"

export class $TextureUploader {
static readonly "BRANCHDOWNLOAD": integer
static readonly "BRANCHUPDATE": integer
static readonly "BRANCHUPDATE_ALLOCATE": integer
static readonly "COMPRESSED": integer
static readonly "NORMAL": integer
static readonly "NORMALDOWNLOAD": integer
static readonly "SUBSEQUENT_NORMAL": integer

constructor(normal0: $TextureUploadPool$Normal$$Type, compressed1: $TextureUploadPool$Compressed$$Type, branchUpdate2: $TextureUploadPool$BranchUpdate$$Type, branchUpdate3: $TextureUploadPool$BranchUpdate$$Type, branchDownload4: $TextureUploadPool$BranchDownload$$Type, subsequentNormal5: $TextureUploadPool$SubsequentNormal$$Type, textureUploadBenchmark6: $TextureUploadBenchmark$$Type)

public "finishNewestRequestImmediately"(): void
public "requestBranchDownload"(int0: integer, int1: integer, int2: integer, int3: integer): long
public "requestBranchUpdate"(boolean0: boolean, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, long9: long, int10: integer, int11: integer, integer12: integer, integer13: integer, integer14: integer, integer15: integer, branchTextureRenderer16: $BranchTextureRenderer$$Type, int17: integer, int18: integer): long
public "requestCompressed"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, long8: long, int9: integer): long
public "requestNormal"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, long8: long, int9: integer, int10: integer): long
public "requestSubsequentNormal"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, long7: long, int8: integer, int9: integer, int10: integer, int11: integer): long
public "requestUpload"(textureUpload0: $TextureUpload$$Type): long
public "uploadTextures"(): void
}
}

declare module "packages/xaero/map/region/texture/$LeafRegionTexture" {
import { $MapTileChunk, $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $RegionTexture } from "packages/xaero/map/region/texture/$RegionTexture"

export class $LeafRegionTexture extends $RegionTexture<$LeafRegionTexture> {
constructor(mapTileChunk0: $MapTileChunk$$Type)

public "getTileChunk"(): $MapTileChunk
public "postBufferUpdate"(boolean0: boolean): void
public "requestHighlightOnlyUpload"(): void
public "resetHeights"(): void
get "tileChunk"(): $MapTileChunk
}
}

declare module "packages/xaero/map/core/$IWorldMapSMultiBlockChangePacket" {
import { $SectionPos } from "packages/net/minecraft/core/$SectionPos"

export interface $IWorldMapSMultiBlockChangePacket {
"xaero_wm_getSectionPos"(): $SectionPos
}

export namespace $IWorldMapSMultiBlockChangePacket {
const probejs$$marker: never
}
export abstract class $IWorldMapSMultiBlockChangePacket$$Static implements $IWorldMapSMultiBlockChangePacket {
}
}

declare module "packages/xaero/map/region/$MapTile" {
import { $PoolUnit } from "packages/xaero/map/pool/$PoolUnit"
import { $MapBlock, $MapBlock$$Type } from "packages/xaero/map/region/$MapBlock"

export class $MapTile implements $PoolUnit {
static readonly "CURRENT_WORLD_INTERPRETATION_VERSION": integer

constructor(...object0s: any[])

public "create"(...object0s: any[]): void
public "getBlock"(int0: integer, int1: integer): $MapBlock
public "getBlockColumn"(int0: integer): $MapBlock[]
public "getChunkX"(): integer
public "getChunkZ"(): integer
public "getWorldInterpretationVersion"(): integer
public "getWrittenCaveDepth"(): integer
public "getWrittenCaveStart"(): integer
public "isLoaded"(): boolean
public "setBlock"(int0: integer, int1: integer, mapBlock2: $MapBlock$$Type): void
public "setLoaded"(boolean0: boolean): void
public "setWorldInterpretationVersion"(int0: integer): void
public "setWrittenCave"(int0: integer, int1: integer): void
public "setWrittenOnce"(boolean0: boolean): void
public "wasWrittenOnce"(): boolean
get "chunkX"(): integer
get "chunkZ"(): integer
get "worldInterpretationVersion"(): integer
get "writtenCaveDepth"(): integer
get "writtenCaveStart"(): integer
get "loaded"(): boolean
set "loaded"(value: boolean)
set "worldInterpretationVersion"(value: integer)
set "writtenOnce"(value: boolean)
}
}

declare module "packages/xaero/map/file/worldsave/$WorldDataHandler" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Path } from "packages/java/nio/file/$Path"
import { $WorldDataReader, $WorldDataReader$$Type } from "packages/xaero/map/file/worldsave/$WorldDataReader"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Executor$$Type } from "packages/xaero/map/executor/$Executor"
import { $HolderLookup$$Type } from "packages/net/minecraft/core/$HolderLookup"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $WorldDataHandler$Result } from "packages/xaero/map/file/worldsave/$WorldDataHandler$Result"

export class $WorldDataHandler {
constructor(worldDataReader0: $WorldDataReader$$Type, executor1: $Executor$$Type)

public "buildRegion"(mapRegion0: $MapRegion$$Type, holderLookup1: $HolderLookup$$Type<$Block$$Type>, registry2: $Registry$$Type<$Block$$Type>, registry3: $Registry$$Type<$Fluid$$Type>, boolean4: boolean, int5s: integer[]): $WorldDataHandler$Result
public "getWorldDataReader"(): $WorldDataReader
public "getWorldDir"(): $Path
public "getWorldServer"(): $ServerLevel
public "handleRenderExecutor"(): void
public static "onServerWorldUnload"(serverLevel0: $ServerLevel$$Type): void
public "prepareSingleplayer"(level0: $Level$$Type, mapProcessor1: $MapProcessor$$Type): void
get "worldDataReader"(): $WorldDataReader
get "worldDir"(): $Path
get "worldServer"(): $ServerLevel
}
}

declare module "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit" {
import { $PoolUnit } from "packages/xaero/map/pool/$PoolUnit"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"

export class $PoolTextureDirectBufferUnit implements $PoolUnit {
constructor(...object0s: any[])

public "create"(...object0s: any[]): void
public static "createBuffer"(): $ByteBuffer
public "getDirectBuffer"(): $ByteBuffer
public "reset"(): void
get "directBuffer"(): $ByteBuffer
}
}

declare module "packages/xaero/map/file/$OldFormatSupport" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"

export class $OldFormatSupport {
constructor()

public "fixBiome"(int0: integer, int1: integer): string
public "fixBiome"(string0: string, int1: integer): string
public "fixBiome"(int0: integer, int1: integer, string2: string): string
public "fixBlock"(compoundTag0: $CompoundTag$$Type, int1: integer): void
public "getStateForId"(int0: integer): $BlockState
public "loadModdedStates"(mapProcessor0: $MapProcessor$$Type, string1: string, string2: string, string3: string): void
public "loadStates"(): void
public "loadVanillaStates"(): void
get "cc2BiomeRenames"(): $ImmutableMap<string, string>
set "cc2BiomeRenames"(value: $ImmutableMap$$Type<string, string>)
}
}

declare module "packages/xaero/map/region/$MapTileChunk" {
import { $MapTile, $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $SeenChunksTrackingMapTileChunk } from "packages/xaeroplus/feature/extensions/$SeenChunksTrackingMapTileChunk"
import { $DataOutputStream$$Type } from "packages/java/io/$DataOutputStream"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $MapDimension } from "packages/xaero/map/world/$MapDimension"
import { $LeafRegionTexture, $LeafRegionTexture$$Type } from "packages/xaero/map/region/texture/$LeafRegionTexture"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $DataInputStream$$Type } from "packages/java/io/$DataInputStream"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $MapTileChunk implements $SeenChunksTrackingMapTileChunk {
static readonly "SIDE_LENGTH": integer

constructor(mapRegion0: $MapRegion$$Type, int1: integer, int2: integer)

public "clean"(mapProcessor0: $MapProcessor$$Type): void
public "decTimer"(): void
public "getInRegion"(): $MapRegion
public "getLeafTexture"(): $LeafRegionTexture
public "getLoadState"(): integer
public "getNeighbourTileChunk"(int0: integer, int1: integer, mapProcessor2: $MapProcessor$$Type, boolean3: boolean): $MapTileChunk
public "getSeenTiles"(): boolean[][]
public "getTile"(int0: integer, int1: integer): $MapTile
public "getTileGridsCache"(): byte[][]
public "getTimer"(): integer
public "getToUpdateBuffers"(): boolean
public "getX"(): integer
public "getZ"(): integer
public "handler$clo000$readCacheData"(ci: $CallbackInfo$$Type): void
public "handler$clo000$setTile"(x: integer, z: integer, tile: $MapTile$$Type, blockStateShortShapeCache: $BlockStateShortShapeCache$$Type, ci: $CallbackInfo$$Type): void
public "hasHadTerrain"(): boolean
public "hasHighlights"(): boolean
public "hasHighlightsIfUndiscovered"(): boolean
public "includeInSave"(): boolean
public "putColour"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, byteBuffer6: $ByteBuffer$$Type, int7: integer): void
public "readCacheData"(int0: integer, int1: integer, dataInputStream2: $DataInputStream$$Type, byte3s: byte[], byte4s: byte[], mapProcessor5: $MapProcessor$$Type, int6: integer, int7: integer): void
public "resetHeights"(): void
public "setChanged"(boolean0: boolean): void
public "setHasHadTerrain"(): void
public "setHasHighlights"(boolean0: boolean): void
public "setHasHighlightsIfUndiscovered"(boolean0: boolean): void
public "setLoadState"(byte0: byte): void
public "setTile"(int0: integer, int1: integer, mapTile2: $MapTile$$Type, blockStateShortShapeCache3: $BlockStateShortShapeCache$$Type): void
public "setToUpdateBuffers"(boolean0: boolean): void
public "unincludeInSave"(): void
public "unsetHasHadTerrain"(): void
public "updateBuffers"(mapProcessor0: $MapProcessor$$Type, blockTintProvider1: $BlockTintProvider$$Type, overlayManager2: $OverlayManager$$Type, boolean3: boolean, blockStateShortShapeCache4: $BlockStateShortShapeCache$$Type): void
public "wasChanged"(): boolean
public "wrapOperation$clo000$useRegionDimensionInsteadOfMapWorld"(mapWorld: $MapWorld$$Type, original: $Operation$$Type<any>): $MapDimension
public "writeCacheData"(dataOutputStream0: $DataOutputStream$$Type, byte1s: byte[], byte2s: byte[], leveledRegion3: $LeveledRegion$$Type<$LeafRegionTexture$$Type>): void
get "inRegion"(): $MapRegion
get "leafTexture"(): $LeafRegionTexture
get "loadState"(): integer
get "seenTiles"(): boolean[][]
get "tileGridsCache"(): byte[][]
get "timer"(): integer
get "toUpdateBuffers"(): boolean
get "x"(): integer
get "z"(): integer
set "changed"(value: boolean)
set "loadState"(value: byte)
set "toUpdateBuffers"(value: boolean)
}
}

declare module "packages/xaero/map/file/$MapRegionInfo" {
import { $File, $File$$Type } from "packages/java/io/$File"

export interface $MapRegionInfo {
"getCacheFile"(): $File
"getDimId"(): string
"getMwId"(): string
"getRegionFile"(): $File
"getRegionX"(): integer
"getRegionZ"(): integer
"getWorldId"(): string
"hasLookedForCache"(): boolean
"setCacheFile"(file0: $File$$Type): void
"setShouldCache"(boolean0: boolean, string1: string): void
"shouldCache"(): boolean
get "cacheFile"(): $File
get "dimId"(): string
get "mwId"(): string
get "regionFile"(): $File
get "regionX"(): integer
get "regionZ"(): integer
get "worldId"(): string
set "cacheFile"(value: $File$$Type)
}

export namespace $MapRegionInfo {
const probejs$$marker: never
}
export abstract class $MapRegionInfo$$Static implements $MapRegionInfo {
}
}

declare module "packages/xaero/map/$MapFullReloader" {
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $RegionDetection$$Type } from "packages/xaero/map/file/$RegionDetection"

export class $MapFullReloader {
static readonly "CONVERTED_WORLD_SAVE_MW": string

constructor(int0: integer, boolean1: boolean, iterator2: $Iterator$$Type<$RegionDetection$$Type>, mapDimension3: $MapDimension$$Type, mapProcessor4: $MapProcessor$$Type)

public "isPartOfReload"(mapRegion0: $MapRegion$$Type): boolean
public "isResave"(): boolean
public "onRenderProcess"(): void
get "resave"(): boolean
}
}

declare module "packages/xaero/map/misc/$CaveStartCalculator" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $MapWriter$$Type } from "packages/xaero/map/$MapWriter"

export class $CaveStartCalculator {
constructor(mapWriter0: $MapWriter$$Type)

public "getCaving"(double0: double, double1: double, double2: double, level3: $Level$$Type): integer
}
}

declare module "packages/xaero/map/server/level/$LevelMapProperties" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BufferedReader$$Type } from "packages/java/io/$BufferedReader"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"
import { $WorldMapMessage } from "packages/xaero/map/message/$WorldMapMessage"

export class $LevelMapProperties extends $WorldMapMessage<$LevelMapProperties> {
constructor()

public "getId"(): integer
public "isUsable"(): boolean
public "read"(bufferedReader0: $BufferedReader$$Type): void
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $LevelMapProperties
public "setUsable"(boolean0: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(printWriter0: $PrintWriter$$Type): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
}

declare module "packages/xaero/map/gui/$IScreenBase" {
import { $DropDownWidget$$Type } from "packages/xaero/map/gui/dropdown/$DropDownWidget"
import { $IDropDownContainer } from "packages/xaero/map/gui/dropdown/$IDropDownContainer"

export interface $IScreenBase extends $IDropDownContainer {
"onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
"onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
"shouldSkipWorldRender"(): boolean
}

export namespace $IScreenBase {
const probejs$$marker: never
}
export abstract class $IScreenBase$$Static implements $IScreenBase {
}
}

declare module "packages/xaero/map/core/$IWorldMapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWorldMapMinecraftClient {
"getXaeroWorldMap_fps"(): integer
get "xaeroWorldMap_fps"(): integer
}

export namespace $IWorldMapMinecraftClient {
const probejs$$marker: never
}
export abstract class $IWorldMapMinecraftClient$$Static implements $IWorldMapMinecraftClient {
}
}

declare module "packages/xaero/map/highlight/$MapRegionHighlightsPreparer" {
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"

export class $MapRegionHighlightsPreparer {
constructor()

public "prepare"(mapRegion0: $MapRegion$$Type, int1: integer, int2: integer, boolean3: boolean): void
public "prepare"(mapRegion0: $MapRegion$$Type, boolean1: boolean): void
}
}

declare module "packages/xaero/map/world/$MapDimension" {
import { $MapWorld, $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $Path } from "packages/java/nio/file/$Path"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Hashtable } from "packages/java/util/$Hashtable"
import { $DimensionType, $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $RegionDetection, $RegionDetection$$Type } from "packages/xaero/map/file/$RegionDetection"
import { $LayeredRegionManager } from "packages/xaero/map/region/$LayeredRegionManager"
import { $MapFullReloader } from "packages/xaero/map/$MapFullReloader"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $LeveledRegion } from "packages/xaero/map/region/$LeveledRegion"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $DimensionHighlighterHandler } from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import { $List } from "packages/java/util/$List"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $MapConnectionNode } from "packages/xaero/map/world/$MapConnectionNode"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $DimensionSpecialEffects } from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects"
import { $HighlighterRegistry$$Type } from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $MapDimension {
readonly "regionsToCache": $ArrayList<$LeveledRegion<any>>

constructor(mapWorld0: $MapWorld$$Type, resourceKey1: $ResourceKey$$Type<$Level>, highlighterRegistry2: $HighlighterRegistry$$Type)

public "addMultiworldChecked"(string0: string): boolean
public "addWorldSaveRegionDetection"(regionDetection0: $RegionDetection$$Type): void
public "calculateDimDiv"(registry0: $Registry$$Type<$DimensionType$$Type>, dimensionType1: $DimensionType$$Type): double
public "calculateDimScale"(registry0: $Registry$$Type<$DimensionType$$Type>): double
public "clear"(): void
public "clearFullMapReload"(): void
public "confirmMultiworldUnsynced"(): void
public "deleteMultiworldId"(string0: string): void
public "deleteMultiworldMapDataUnsynced"(string0: string): void
public "getCaveModeType"(): integer
public "getCurrentMultiworld"(): string
public "getDimId"(): $ResourceKey<$Level>
public "getDimensionEffects"(registry0: $Registry$$Type<$DimensionType$$Type>): $DimensionSpecialEffects
public "getDimensionType"(registry0: $Registry$$Type<$DimensionType$$Type>): $DimensionType
public static "getDimensionType"(mapDimension0: $MapDimension$$Type, resourceKey1: $ResourceKey$$Type<$Level>, registry2: $Registry$$Type<$DimensionType$$Type>): $DimensionType
public "getDimensionTypeId"(): $ResourceLocation
public "getFullReloader"(): $MapFullReloader
public "getFutureCustomSelectedMultiworld"(): string
public "getFutureMultiworldUnsynced"(): string
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "getLayeredMapRegions"(): $LayeredRegionManager
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<$RegionDetection>
public "getMainFolderPath"(): $Path
public "getMapWorld"(): $MapWorld
public "getMultiworldIdsCopy"(): $List<string>
public "getMultiworldName"(string0: string): string
public "getOldFolderPath"(): $Path
public "getPlayerMapKey"(): $MapConnectionNode
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
public "getShadowB"(): float
public "getShadowG"(): float
public "getShadowR"(): float
public "getSkyDarken"(float0: float, clientLevel1: $ClientLevel$$Type, registry2: $Registry$$Type<$DimensionType$$Type>): float
public "getWorldSaveDetectedRegions"(): $Iterable<$Hashtable<integer, $RegionDetection>>
public "getWorldSaveRegionDetection"(int0: integer, int1: integer): $RegionDetection
public "hasConfirmedMultiworld"(): boolean
public "hasDoneRegionDetection"(): boolean
public "isAutoSelected"(): boolean
public "isCacheOnlyMode"(registry0: $Registry$$Type<$DimensionType$$Type>): boolean
public "isFutureMultiworldServerBased"(): boolean
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "isUsingUnknownDimensionType"(registry0: $Registry$$Type<$DimensionType$$Type>): boolean
public "isUsingWorldSave"(): boolean
public "onClearCachedHighlightHash"(int0: integer, int1: integer): void
public "onClearCachedHighlightHashes"(): void
public "onCreationUnsynced"(): void
public "onWorldChangeUnsynced"(level0: $Level$$Type): void
public "pickDefaultCustomMultiworldUnsynced"(): void
public "preDetection"(): void
public "resetCustomMultiworldUnsynced"(): void
public "saveConfigUnsynced"(): void
public "setMultiworldName"(string0: string, string1: string): void
public "setMultiworldUnsynced"(string0: string): void
public "startFullMapReload"(int0: integer, boolean1: boolean, mapProcessor2: $MapProcessor$$Type): void
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "switchToFutureUnsynced"(): void
public "toggleCaveModeType"(boolean0: boolean): void
public "updateFutureAutomaticUnsynced"(minecraft0: $Minecraft$$Type, object1: any): void
get "currentMultiworldWritable"(): boolean
set "currentMultiworldWritable"(value: boolean)
get "futureMultiworldServerBased"(): boolean
set "futureMultiworldServerBased"(value: boolean)
get "futureMultiworldWritable"(): boolean
set "futureMultiworldWritable"(value: boolean)
get "caveModeType"(): integer
get "currentMultiworld"(): string
get "dimId"(): $ResourceKey<$Level>
get "dimensionTypeId"(): $ResourceLocation
get "fullReloader"(): $MapFullReloader
get "futureCustomSelectedMultiworld"(): string
get "futureMultiworldUnsynced"(): string
get "highlightHandler"(): $DimensionHighlighterHandler
get "layeredMapRegions"(): $LayeredRegionManager
get "linkedWorldSaveDetectedRegions"(): $Iterable<$RegionDetection>
get "mainFolderPath"(): $Path
get "mapWorld"(): $MapWorld
get "multiworldIdsCopy"(): $List<string>
get "oldFolderPath"(): $Path
get "playerMapKey"(): $MapConnectionNode
get "selectedMapKeyUnsynced"(): $MapConnectionNode
get "shadowB"(): float
get "shadowG"(): float
get "shadowR"(): float
get "worldSaveDetectedRegions"(): $Iterable<$Hashtable<integer, $RegionDetection>>
get "autoSelected"(): boolean
get "futureUsingWorldSaveUnsynced"(): boolean
get "usingWorldSave"(): boolean
set "multiworldUnsynced"(value: string)
}
}

declare module "packages/xaero/map/biome/$BiomeColorCalculator" {
import { $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BiomeColorCalculator {
readonly "RIVER_BIOME": $ResourceKey<$Biome>
readonly "UNREACHABLE_BIOME": $ResourceKey<$Biome>

constructor()

public "getBiomeAtPos"(blockPos0: $BlockPos$$Type, mapTile1: $MapTile$$Type, int2: integer, mapProcessor3: $MapProcessor$$Type): $ResourceKey<$Biome>
public "getBiomeColor"(colorResolver0: $ColorResolver$$Type, boolean1: boolean, mutableBlockPos2: $BlockPos$MutableBlockPos$$Type, mapTile3: $MapTile$$Type, int4: integer, registry5: $Registry$$Type<$Biome$$Type>, mapProcessor6: $MapProcessor$$Type): integer
public "prepare"(boolean0: boolean): void
}
}

declare module "packages/xaero/map/region/$LayeredRegionManager" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LeveledRegion, $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $MapLayer, $MapLayer$$Type } from "packages/xaero/map/region/$MapLayer"

export class $LayeredRegionManager {
constructor(mapDimension0: $MapDimension$$Type)

public "addListRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "addLoadedRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "applyToEachLoadedLayer"(biConsumer0: $BiConsumer$$Type<integer, $MapLayer$$Type>): void
public "bumpLoadedRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "bumpLoadedRegion"(mapRegion0: $MapRegion$$Type): void
public "clear"(): void
public "get"(int0: integer, int1: integer, int2: integer, int3: integer): $LeveledRegion<any>
public "getLayer"(int0: integer): $MapLayer
public "getLeaf"(int0: integer, int1: integer, int2: integer): $MapRegion
public "getLoadedListUnsynced"(): $List<$LeveledRegion<any>>
public "getLoadedRegion"(int0: integer): $LeveledRegion<any>
public "getUnsyncedSet"(): $Set<$LeveledRegion<any>>
public "loadedCount"(): integer
public "onClearCachedHighlightHash"(int0: integer, int1: integer): void
public "onClearCachedHighlightHashes"(): void
public "preDetection"(): void
public "putLeaf"(int0: integer, int1: integer, mapRegion2: $MapRegion$$Type): void
public "remove"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "removeListRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "removeLoadedRegion"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "size"(): integer
get "loadedListUnsynced"(): $List<$LeveledRegion<any>>
get "unsyncedSet"(): $Set<$LeveledRegion<any>>
}
}

declare module "packages/xaero/map/executor/$Executor" {
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Thread$$Type } from "packages/java/lang/$Thread"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Exception$$Type } from "packages/java/lang/$Exception"
import { $BlockableEventLoop } from "packages/net/minecraft/util/thread/$BlockableEventLoop"
import { $Runnable } from "packages/java/lang/$Runnable"

export class $Executor extends $BlockableEventLoop<$Runnable> {
constructor(string0: string, thread1: $Thread$$Type)

public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $Runnable>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $Runnable>): $CompletableFuture<Source>
public "close"(): void
public "m_18699_"(): void
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
}
}

declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$$Type } from "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SyncedPlayerTrackerSystemManager {
constructor()

public "getSystems"(): $Iterable<$ISyncedPlayerTrackerSystem>
public "register"(string0: string, iSyncedPlayerTrackerSystem1: $ISyncedPlayerTrackerSystem$$Type): void
get "systems"(): $Iterable<$ISyncedPlayerTrackerSystem>
}
}

declare module "packages/xaero/map/message/$WorldMapMessage" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $WorldMapMessage<T extends $WorldMapMessage<T>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
}

declare module "packages/xaero/map/gui/$GuiSettings" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ISettingEntry, $ISettingEntry$$Type } from "packages/xaero/map/gui/$ISettingEntry"
import { $ScreenBase } from "packages/xaero/map/gui/$ScreenBase"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"

export class $GuiSettings extends $ScreenBase {
constructor(component0: $Component$$Type, screen1: $Screen$$Type, screen2: $Screen$$Type)

public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getEntriesCopy"(): $ISettingEntry[]
public "getIndex"(guiEventListener0: $GuiEventListener$$Type): integer
public "getTabOrderGroup"(): integer
public "handler$clb000$drawScreen"(guiGraphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, delta: float, ci: $CallbackInfo$$Type): void
public "handler$cnh001$adjustEntriesPerPage"(ci: $CallbackInfo$$Type): void
public "handler$cnh001$adjustForwardBackButtonPositionsForExtraRows"(ci: $CallbackInfo$$Type): void
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_7856_"(): void
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "redirect$cnh001$settingListToRenderRedirect"(instance: $ArrayList$$Type<any>, entryObject: any): boolean
public "restoreFocus"(int0: integer): void
public "setFocused"(boolean0: boolean): void
public "wrapOperation$cnh000$adjustSettingEntryWidth"(instance: $ISettingEntry$$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$$Type<any>, i: integer): $AbstractWidget
public "wrapOperation$cnh000$adjustSettingEntryWidth$mixinextras$bridge$31"(instance: $ISettingEntry$$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$$Type<any>, i: $LocalIntRef$$Type): $AbstractWidget
get "currentFocusPath"(): $ComponentPath
get "entriesCopy"(): $ISettingEntry[]
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/map/graphics/$TextureUpload$BranchDownload" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchDownload extends $TextureUpload {
constructor(int0: integer)
constructor(...object0s: any[])

}
}

declare module "packages/xaero/map/server/$MinecraftServerData" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$$Type } from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import { $SyncedPlayerTracker, $SyncedPlayerTracker$$Type } from "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker"
import { $LevelMapProperties } from "packages/xaero/map/server/level/$LevelMapProperties"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export class $MinecraftServerData {
constructor(syncedPlayerTrackerSystemManager0: $SyncedPlayerTrackerSystemManager$$Type, syncedPlayerTracker1: $SyncedPlayerTracker$$Type)

public static "get"(minecraftServer0: $MinecraftServer$$Type): $MinecraftServerData
public "getLevelProperties"(path0: $Path$$Type): $LevelMapProperties
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
}

declare module "packages/xaero/map/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {
"getTrackingLevel"(player0: $Player$$Type, player1: $Player$$Type): integer
"isPartySystem"(): boolean
get "partySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
export abstract class $ISyncedPlayerTrackerSystem$$Static implements $ISyncedPlayerTrackerSystem {
}
}

declare module "packages/xaero/map/mcworld/$WorldMapClientWorldData" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ClientboundRulesPacket, $ClientboundRulesPacket$$Type } from "packages/xaero/map/message/basic/$ClientboundRulesPacket"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $WorldMapClientWorldData {
constructor(clientLevel0: $ClientLevel$$Type)

public "getServerModNetworkVersion"(): integer
public "getSyncedRules"(): $ClientboundRulesPacket
public "setServerModNetworkVersion"(int0: integer): void
public "setSyncedRules"(clientboundRulesPacket0: $ClientboundRulesPacket$$Type): void
get "latestSpawn"(): $BlockPos
set "latestSpawn"(value: $BlockPos$$Type)
get "serverLevelId"(): integer
set "serverLevelId"(value: integer)
get "usedServerLevelId"(): integer
set "usedServerLevelId"(value: integer)
get "usedSpawn"(): $BlockPos
set "usedSpawn"(value: $BlockPos$$Type)
get "serverModNetworkVersion"(): integer
get "syncedRules"(): $ClientboundRulesPacket
set "serverModNetworkVersion"(value: integer)
set "syncedRules"(value: $ClientboundRulesPacket$$Type)
}
}

declare module "packages/xaero/map/biome/$BiomeGetter" {
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BiomeGetter {
readonly "PLACEHOLDER_BIOME": $ResourceKey<$Biome>
readonly "UNKNOWN_BIOME": $ResourceKey<$Biome>

constructor()

public "getBiome"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, registry2: $Registry$$Type<$Biome$$Type>): $ResourceKey<$Biome>
}
}

declare module "packages/xaero/map/file/worldsave/$WorldDataHandler$Result" {
import { $Enum } from "packages/java/lang/$Enum"

export class $WorldDataHandler$Result extends $Enum<$WorldDataHandler$Result> {
static readonly "CANCEL": $WorldDataHandler$Result
static readonly "FAIL": $WorldDataHandler$Result
static readonly "SUCCESS": $WorldDataHandler$Result

public static "valueOf"(string0: string): $WorldDataHandler$Result
public static "values"(): $WorldDataHandler$Result[]
}
}

declare module "packages/xaero/map/region/$LeveledRegion" {
import { $ZipOutputStream$$Type } from "packages/java/util/zip/$ZipOutputStream"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $RegionTexture, $RegionTexture$$Type } from "packages/xaero/map/region/texture/$RegionTexture"
import { $OldFormatSupport$$Type } from "packages/xaero/map/file/$OldFormatSupport"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $FastPalette } from "packages/xaero/map/palette/$FastPalette"
import { $DataOutputStream, $DataOutputStream$$Type } from "packages/java/io/$DataOutputStream"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BranchLeveledRegion, $BranchLeveledRegion$$Type } from "packages/xaero/map/region/$BranchLeveledRegion"
import { $MapDimension, $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $List$$Type } from "packages/java/util/$List"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MapSaveLoad$$Type } from "packages/xaero/map/file/$MapSaveLoad"

export class $LeveledRegion<T extends $RegionTexture<T>> implements $Comparable<$LeveledRegion<T>> {
static readonly "SIDE_LENGTH": integer

constructor(string0: string, string1: string, string2: string, mapDimension3: $MapDimension$$Type, int4: integer, int5: integer, int6: integer, int7: integer, branchLeveledRegion8: $BranchLeveledRegion$$Type)

public "addDebugLines"(list0: $List$$Type<string>, mapProcessor1: $MapProcessor$$Type, int2: integer, int3: integer): void
public "afterLimiterRemoval"(mapProcessor0: $MapProcessor$$Type): void
public "calculateSortingChunkDistance"(): void
public "calculateSortingDistance"(): void
public "checkForUpdates"(mapProcessor0: $MapProcessor$$Type, boolean1: boolean, boolean2s: boolean[], arrayList3: $ArrayList$$Type<$BranchLeveledRegion$$Type>, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "compareTo"(leveledRegion0: $LeveledRegion$$Type<T>): integer
public "confirmMetaLoaded"(): void
public "createTexture"(int0: integer, int1: integer): T
public "deleteBuffers"(): void
public "deleteGLBuffers"(): void
public "deleteTexturesAndBuffers"(): void
public "ensureBiomePalette"(): void
public "findCacheFile"(mapSaveLoad0: $MapSaveLoad$$Type): $File
public "getAndResetCachedTextureVersion"(int0: integer, int1: integer): integer
public "getBiomeKey"(int0: integer): $ResourceKey<$Biome>
public "getBiomePalette"(): $FastPalette<$ResourceKey<$Biome>>
public "getBiomePaletteIndex"(resourceKey0: $ResourceKey$$Type<$Biome>): integer
public "getBiomePaletteSize"(): integer
public "getCacheFile"(): $File
public "getCaveLayer"(): integer
public "getDim"(): $MapDimension
public "getExtraInfo"(): string
public "getLevel"(): integer
public "getParent"(): $BranchLeveledRegion
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "getRootRegion"(): $LeveledRegion<any>
public "getTexture"(int0: integer, int1: integer): T
public "handler$clj000$writeSaveCacheTexturesZipOutputStream"(tempFile: $File$$Type, extraAttempts: integer, cir: $CallbackInfoReturnable$$Type<any>, zipOutputRef: $ZipOutputStream$$Type): void
public "hasRemovableSourceData"(): boolean
public "hasTextures"(): boolean
public "isAllCachePrepared"(): boolean
public "isLoaded"(): boolean
public "isMetaLoaded"(): boolean
public "isRefreshing"(): boolean
public "loadCacheTextures"(mapProcessor0: $MapProcessor$$Type, registry1: $Registry$$Type<$Biome$$Type>, boolean2: boolean, boolean3ss: boolean[][], int4: integer, boolean5s: boolean[], boolean6s: boolean[], int7: integer, oldFormatSupport8: $OldFormatSupport$$Type): boolean
public "loadingAnimation"(): boolean
public "onBiomeAddedToTexture"(resourceKey0: $ResourceKey$$Type<$Biome>): integer
public "onBiomeRemovedFromTexture"(int0: integer): void
public "onCurrentDimFinish"(mapSaveLoad0: $MapSaveLoad$$Type, mapProcessor1: $MapProcessor$$Type): void
public "onDimensionClear"(mapProcessor0: $MapProcessor$$Type): void
public "onLimiterRemoval"(mapProcessor0: $MapProcessor$$Type): void
public "onProcessingEnd"(): void
public "postCache"(file0: $File$$Type, mapSaveLoad1: $MapSaveLoad$$Type, boolean2: boolean): void
public "preCache"(): void
public "processWhenLoadedChunksExist"(int0: integer): void
public "putTexture"(int0: integer, int1: integer, t2: T): void
public "recacheHasBeenRequested"(): boolean
public "redirect$clj000$replaceSaveCacheTexturesZipOutputStream"(out: $OutputStream$$Type): $DataOutputStream
public "reloadHasBeenRequested"(): boolean
public "resetBiomePalette"(): void
public "saveBiomePalette"(dataOutputStream0: $DataOutputStream$$Type): void
public "saveCacheTextures"(file0: $File$$Type, int1: integer): boolean
public "setAllCachePrepared"(boolean0: boolean): void
public "setCacheFile"(file0: $File$$Type): void
public static "setComparison"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "setRecacheHasBeenRequested"(boolean0: boolean, string1: string): void
public "setReloadHasBeenRequested"(boolean0: boolean, string1: string): void
public "setShouldCache"(boolean0: boolean, string1: string): void
public "shouldAffectLoadingRequestFrequency"(): boolean
public "shouldAllowAnotherRegionToLoad"(): boolean
public "shouldBeProcessed"(): boolean
public "shouldCache"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "skipCaching"(mapProcessor0: $MapProcessor$$Type): boolean
public "uncountTextureBiomes"(regionTexture0: $RegionTexture$$Type<any>): void
public "updateLeafTextureVersion"(int0: integer, int1: integer, int2: integer): void
get "activeBranchUpdateReferences"(): integer
set "activeBranchUpdateReferences"(value: integer)
get "leafTextureVersionSum"(): integer[][]
set "leafTextureVersionSum"(value: integer[][])
get "biomePalette"(): $FastPalette<$ResourceKey<$Biome>>
get "biomePaletteSize"(): integer
get "cacheFile"(): $File
get "caveLayer"(): integer
get "dim"(): $MapDimension
get "extraInfo"(): string
get "level"(): integer
get "parent"(): $BranchLeveledRegion
get "regionX"(): integer
get "regionZ"(): integer
get "rootRegion"(): $LeveledRegion<any>
get "allCachePrepared"(): boolean
get "loaded"(): boolean
get "metaLoaded"(): boolean
get "refreshing"(): boolean
set "allCachePrepared"(value: boolean)
set "cacheFile"(value: $File$$Type)
}
}

declare module "packages/xaero/map/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import { $SyncedTrackedPlayer } from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {
constructor()

public "getPlayers"(): $Iterable<$SyncedTrackedPlayer>
public "remove"(uUID0: $UUID$$Type): void
public "reset"(): void
public "update"(uUID0: $UUID$$Type, double1: double, double2: double, double3: double, resourceKey4: $ResourceKey$$Type<$Level>): void
get "players"(): $Iterable<$SyncedTrackedPlayer>
}
}

declare module "packages/xaero/map/palette/$FastPalette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastPalette<T> {
public "add"(t0: T, int1: integer): integer
public "add"(t0: T): integer
public "addNull"(): void
public "append"(t0: T, int1: integer): integer
public "count"(int0: integer, boolean1: boolean): integer
public "get"(int0: integer): T
public "getCount"(int0: integer): integer
public "getIndex"(t0: T): integer
public "getNonNullCount"(): integer
public "getSize"(): integer
public "remove"(int0: integer): void
public "replace"(t0: T, t1: T): boolean
public "replace"(int0: integer, t1: T): boolean
get "nonNullCount"(): integer
get "size"(): integer
}
}

declare module "packages/xaero/map/$WorldMapSession" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $ControlsHandler } from "packages/xaero/map/controls/$ControlsHandler"
import { $MapProcessor } from "packages/xaero/map/$MapProcessor"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"

export class $WorldMapSession {
constructor()

public "cleanup"(): void
public "getControlsHandler"(): $ControlsHandler
public static "getCurrentSession"(): $WorldMapSession
public static "getForPlayer"(localPlayer0: $LocalPlayer$$Type): $WorldMapSession
public "getMapProcessor"(): $MapProcessor
public "init"(clientPacketListener0: $ClientPacketListener$$Type, long1: long): void
public "isUsable"(): boolean
get "controlsHandler"(): $ControlsHandler
get "mapProcessor"(): $MapProcessor
get "usable"(): boolean
}
}

declare module "packages/xaero/map/pool/$TextureUploadPool$BranchUpdate" {
import { $BranchTextureRenderer$$Type } from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import { $TextureUploadPool } from "packages/xaero/map/pool/$TextureUploadPool"
import { $TextureUpload$BranchUpdate } from "packages/xaero/map/graphics/$TextureUpload$BranchUpdate"

export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<$TextureUpload$BranchUpdate> {
constructor(int0: integer, boolean1: boolean)

public "get"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, long8: long, int9: integer, int10: integer, integer11: integer, integer12: integer, integer13: integer, integer14: integer, branchTextureRenderer15: $BranchTextureRenderer$$Type, int16: integer, int17: integer): $TextureUpload$BranchUpdate
}
}

declare module "packages/xaero/map/world/$MapWorld" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $MapConnectionManager } from "packages/xaero/map/world/$MapConnectionManager"
import { $MapProcessor, $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $MapConnectionNode } from "packages/xaero/map/world/$MapConnectionNode"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MapDimension, $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $MapWorld {
constructor(string0: string, string1: string, mapProcessor2: $MapProcessor$$Type)

public "clearAllCachedHighlightHashes"(): void
public "confirmMultiworldTypeUnsynced"(): void
public static "convertWorldFolderToRootId"(int0: integer, string1: string): string
public "createDimensionUnsynced"(resourceKey0: $ResourceKey$$Type<$Level>): $MapDimension
public "getCurrentDimension"(): $MapDimension
public "getCurrentDimensionId"(): $ResourceKey<$Level>
public "getCurrentMultiworld"(): string
public "getCurrentMultiworldType"(): integer
public "getCustomDimensionId"(): $ResourceKey<$Level>
public "getDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $MapDimension
public "getDimensionTeleportCommandFormat"(): string
public "getDimensions"(list0: $List$$Type<$MapDimension$$Type>): void
public "getDimensionsList"(): $List<$MapDimension>
public "getFutureDimension"(): $MapDimension
public "getFutureDimensionId"(): $ResourceKey<$Level>
public "getFutureMultiworldType"(mapDimension0: $MapDimension$$Type): integer
public "getFutureMultiworldUnsynced"(): string
public "getMainId"(): string
public "getMapConnections"(): $MapConnectionManager
public "getMapProcessor"(): $MapProcessor
public "getOldUnfixedMainId"(): string
public "getPlayerMapKey"(): $MapConnectionNode
public "getPlayerTeleportCommandFormat"(): string
public "getPotentialDimId"(): $ResourceKey<$Level>
public "getTeleportCommandFormat"(): string
public "handler$clp000$checkTeleportGloballyDisabled"(cir: $CallbackInfoReturnable$$Type<any>): void
public "isCacheOnlyMode"(): boolean
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "isFutureMultiworldTypeConfirmed"(mapDimension0: $MapDimension$$Type): boolean
public "isIgnoreHeightmaps"(): boolean
public "isIgnoreServerLevelId"(): boolean
public "isMultiplayer"(): boolean
public "isTeleportAllowed"(): boolean
public "isUsingCustomDimension"(): boolean
public "isUsingUnknownDimensionType"(): boolean
public "load"(): void
public "onWorldChangeUnsynced"(clientLevel0: $ClientLevel$$Type): void
public "saveConfig"(): void
public "setCustomDimensionId"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "setDimensionTeleportCommandFormat"(string0: string): void
public "setFutureDimensionId"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "setIgnoreHeightmaps"(boolean0: boolean): void
public "setPlayerTeleportCommandFormat"(string0: string): void
public "setTeleportAllowed"(boolean0: boolean): void
public "setTeleportCommandFormat"(string0: string): void
public "switchToFutureMultiworldTypeUnsynced"(): void
public "switchToFutureUnsynced"(): void
public "toggleDimension"(boolean0: boolean): void
public "toggleMultiworldTypeUnsynced"(): void
public "unconfirmMultiworldTypeUnsynced"(): void
public "wrapOperation$clp000$setCurrentDimensionRef"(instance: $MapWorld$$Type, value: $ResourceKey$$Type<any>, original: $Operation$$Type<any>): void
get "currentDimension"(): $MapDimension
get "currentDimensionId"(): $ResourceKey<$Level>
get "currentMultiworld"(): string
get "currentMultiworldType"(): integer
get "customDimensionId"(): $ResourceKey<$Level>
get "dimensionTeleportCommandFormat"(): string
get "dimensionsList"(): $List<$MapDimension>
get "futureDimension"(): $MapDimension
get "futureDimensionId"(): $ResourceKey<$Level>
get "futureMultiworldUnsynced"(): string
get "mainId"(): string
get "mapConnections"(): $MapConnectionManager
get "mapProcessor"(): $MapProcessor
get "oldUnfixedMainId"(): string
get "playerMapKey"(): $MapConnectionNode
get "playerTeleportCommandFormat"(): string
get "potentialDimId"(): $ResourceKey<$Level>
get "teleportCommandFormat"(): string
get "cacheOnlyMode"(): boolean
get "currentMultiworldTypeConfirmed"(): boolean
get "ignoreHeightmaps"(): boolean
get "ignoreServerLevelId"(): boolean
get "multiplayer"(): boolean
get "teleportAllowed"(): boolean
get "usingCustomDimension"(): boolean
get "usingUnknownDimensionType"(): boolean
set "customDimensionId"(value: $ResourceKey$$Type<$Level>)
set "dimensionTeleportCommandFormat"(value: string)
set "futureDimensionId"(value: $ResourceKey$$Type<$Level>)
set "ignoreHeightmaps"(value: boolean)
set "playerTeleportCommandFormat"(value: string)
set "teleportAllowed"(value: boolean)
set "teleportCommandFormat"(value: string)
}
}

declare module "packages/xaero/map/gui/$ExportScreen" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $GuiSettings } from "packages/xaero/map/gui/$GuiSettings"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $PNGExportResult$$Type } from "packages/xaero/map/file/export/$PNGExportResult"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Optional } from "packages/java/util/$Optional"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $MapTileSelection, $MapTileSelection$$Type } from "packages/xaero/map/gui/$MapTileSelection"

export class $ExportScreen extends $GuiSettings {
constructor(screen0: $Screen$$Type, screen1: $Screen$$Type, mapProcessor2: $MapProcessor$$Type, mapTileSelection3: $MapTileSelection$$Type)

public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getSelection"(): $MapTileSelection
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onExportDone"(pNGExportResult0: $PNGExportResult$$Type): void
public "setFocused"(boolean0: boolean): void
get "fullExport"(): boolean
set "fullExport"(value: boolean)
get "currentFocusPath"(): $ComponentPath
get "selection"(): $MapTileSelection
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/map/pool/$TextureUploadPool$BranchDownload" {
import { $TextureUpload$BranchDownload } from "packages/xaero/map/graphics/$TextureUpload$BranchDownload"
import { $TextureUploadPool } from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<$TextureUpload$BranchDownload> {
constructor(int0: integer)

public "get"(int0: integer, int1: integer, int2: integer, int3: integer): $TextureUpload$BranchDownload
}
}

declare module "packages/xaero/map/capabilities/$ServerWorldCapabilities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerWorldCapabilities {
constructor()

get "loaded"(): boolean
set "loaded"(value: boolean)
}
}

declare module "packages/xaero/map/pool/$TextureUploadPool$Compressed" {
import { $TextureUpload$Compressed } from "packages/xaero/map/graphics/$TextureUpload$Compressed"
import { $TextureUploadPool } from "packages/xaero/map/pool/$TextureUploadPool"

export class $TextureUploadPool$Compressed extends $TextureUploadPool<$TextureUpload$Compressed> {
constructor(int0: integer)

public "get"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, long8: long, int9: integer): $TextureUpload$Compressed
}
}

declare module "packages/xaero/map/pool/$PoolUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PoolUnit {
"create"(...object0s: any[]): void
}

export namespace $PoolUnit {
const probejs$$marker: never
}
export abstract class $PoolUnit$$Static implements $PoolUnit {
}
}

declare module "packages/xaero/map/biome/$BlockTintProvider" {
import { $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelLightEngine } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $MapWriter$$Type } from "packages/xaero/map/$MapWriter"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiomeColorCalculator$$Type } from "packages/xaero/map/biome/$BiomeColorCalculator"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Optional } from "packages/java/util/$Optional"
import { $BrokenBlockTintCache$$Type } from "packages/xaero/map/cache/$BrokenBlockTintCache"
import { $BlockAndTintGetter } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockTintProvider implements $BlockAndTintGetter {
constructor(registry0: $Registry$$Type<$Biome$$Type>, biomeColorCalculator1: $BiomeColorCalculator$$Type, mapProcessor2: $MapProcessor$$Type, brokenBlockTintCache3: $BrokenBlockTintCache$$Type, mapWriter4: $MapWriter$$Type)

public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBiomeColor"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, boolean2: boolean, mapTile3: $MapTile$$Type, int4: integer): integer
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLightEngine"(): $LevelLightEngine
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}
}

declare module "packages/xaero/map/gui/message/$MessageBox" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Message } from "packages/xaero/map/gui/message/$Message"
import { $Iterator } from "packages/java/util/$Iterator"

export class $MessageBox {
public "addMessage"(component0: $Component$$Type): void
public "addMessageWithSource"(component0: $Component$$Type, component1: $Component$$Type): void
public "getCapacity"(): integer
public "getIterator"(): $Iterator<$Message>
get "capacity"(): integer
get "iterator"(): $Iterator<$Message>
}
}

declare module "packages/xaero/map/region/$OverlayBuilder" {
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Overlay } from "packages/xaero/map/region/$Overlay"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MapBlock$$Type } from "packages/xaero/map/region/$MapBlock"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $OverlayBuilder {
constructor(overlayManager0: $OverlayManager$$Type)

public "build"(blockState0: $BlockState$$Type, int1: integer, byte2: byte, mapProcessor3: $MapProcessor$$Type, resourceKey4: $ResourceKey$$Type<$Biome>): void
public "finishBuilding"(mapBlock0: $MapBlock$$Type): void
public "getCurrentOverlay"(): $Overlay
public "getOverlayBiome"(): $ResourceKey<$Biome>
public "isEmpty"(): boolean
public "setOverlayBiome"(resourceKey0: $ResourceKey$$Type<$Biome>): void
public "startBuilding"(): void
get "currentOverlay"(): $Overlay
get "overlayBiome"(): $ResourceKey<$Biome>
get "empty"(): boolean
set "overlayBiome"(value: $ResourceKey$$Type<$Biome>)
}
}

declare module "packages/xaero/map/message/basic/$ClientboundRulesPacket" {
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $WorldMapMessage } from "packages/xaero/map/message/$WorldMapMessage"

export class $ClientboundRulesPacket extends $WorldMapMessage<$ClientboundRulesPacket> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean

constructor(boolean0: boolean, boolean1: boolean)

public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ClientboundRulesPacket
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/xaero/map/region/$BranchLeveledRegion" {
import { $LeveledRegion } from "packages/xaero/map/region/$LeveledRegion"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $BranchRegionTexture, $BranchRegionTexture$$Type } from "packages/xaero/map/region/texture/$BranchRegionTexture"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"

export class $BranchLeveledRegion extends $LeveledRegion<$BranchRegionTexture> {
static readonly "CHILD_LENGTH_IN_TEXTURES": integer
static readonly "MAX_COORD_WITHIN_CHILD": integer

constructor(string0: string, string1: string, string2: string, mapDimension3: $MapDimension$$Type, int4: integer, int5: integer, int6: integer, int7: integer, branchLeveledRegion8: $BranchLeveledRegion$$Type)

public "createTexture"(int0: integer, int1: integer): $BranchRegionTexture
public "eligibleForSaving"(long0: long): boolean
public "isEmpty"(): boolean
public "postTextureUpdate"(): void
public "preCacheLoad"(): void
public "putTexture"(int0: integer, int1: integer, branchRegionTexture2: $BranchRegionTexture$$Type): void
public "setLoaded"(boolean0: boolean): void
public "setShouldCheckForUpdatesRecursive"(boolean0: boolean): void
public "setShouldCheckForUpdatesSingle"(boolean0: boolean): void
public "startDownloadingTexturesForCache"(mapProcessor0: $MapProcessor$$Type): void
get "empty"(): boolean
set "loaded"(value: boolean)
set "shouldCheckForUpdatesRecursive"(value: boolean)
set "shouldCheckForUpdatesSingle"(value: boolean)
}
}

declare module "packages/xaero/map/gui/message/$Message" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"

export class $Message {
constructor(component0: $Component$$Type, long1: long)

public "getAdditionTime"(): long
public "getText"(): $Component
get "additionTime"(): long
get "text"(): $Component
}
}

declare module "packages/xaero/map/region/$Overlay" {
import { $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $MapWriter$$Type } from "packages/xaero/map/$MapWriter"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $MapBlock$$Type } from "packages/xaero/map/region/$MapBlock"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"
import { $MapPixel } from "packages/xaero/map/region/$MapPixel"

export class $Overlay extends $MapPixel {
constructor(blockState0: $BlockState$$Type, byte1: byte, boolean2: boolean)

public "equals"(overlay0: $Overlay$$Type): boolean
public "getOpacity"(): integer
public "getParametres"(): integer
public "getPixelColour"(mapBlock0: $MapBlock$$Type, int1s: integer[], mapWriter2: $MapWriter$$Type, level3: $Level$$Type, mapDimension4: $MapDimension$$Type, registry5: $Registry$$Type<$Block$$Type>, mapTileChunk6: $MapTileChunk$$Type, mapTileChunk7: $MapTileChunk$$Type, mapTileChunk8: $MapTileChunk$$Type, mapTileChunk9: $MapTileChunk$$Type, mapTile10: $MapTile$$Type, int11: integer, int12: integer, int13: integer, int14: integer, mutableBlockPos15: $BlockPos$MutableBlockPos$$Type, registry16: $Registry$$Type<$Biome$$Type>, registry17: $Registry$$Type<$DimensionType$$Type>, float18: float, float19: float, float20: float, blockTintProvider21: $BlockTintProvider$$Type, mapProcessor22: $MapProcessor$$Type, overlayManager23: $OverlayManager$$Type): void
public "increaseOpacity"(int0: integer): void
public "isWater"(): boolean
public "toRenderString"(): string
public "write"(blockState0: $BlockState$$Type, byte1: byte, boolean2: boolean): void
get "opacity"(): integer
get "parametres"(): integer
get "water"(): boolean
}
}

declare module "packages/xaero/map/region/$OverlayManager" {
import { $Overlay, $Overlay$$Type } from "packages/xaero/map/region/$Overlay"

export class $OverlayManager {
constructor()

public "getNumberOfUniqueOverlays"(): integer
public "getOriginal"(overlay0: $Overlay$$Type): $Overlay
get "numberOfUniqueOverlays"(): integer
}
}

declare module "packages/xaero/map/mcworld/$IWorldMapClientWorld" {
import { $WorldMapClientWorldData, $WorldMapClientWorldData$$Type } from "packages/xaero/map/mcworld/$WorldMapClientWorldData"

export interface $IWorldMapClientWorld {
"getXaero_worldmapData"(): $WorldMapClientWorldData
"setXaero_worldmapData"(worldMapClientWorldData0: $WorldMapClientWorldData$$Type): void
get "xaero_worldmapData"(): $WorldMapClientWorldData
set "xaero_worldmapData"(value: $WorldMapClientWorldData$$Type)
}

export namespace $IWorldMapClientWorld {
const probejs$$marker: never
}
export abstract class $IWorldMapClientWorld$$Static implements $IWorldMapClientWorld {
}
}

declare module "packages/xaero/map/server/player/$ServerPlayerData" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $SyncedTrackedPlayer } from "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer"
import { $Set } from "packages/java/util/$Set"

export class $ServerPlayerData {
constructor(uUID0: $UUID$$Type)

public "ensureCurrentlySyncedPlayers"(): $Set<$UUID>
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public static "get"(serverPlayer0: $ServerPlayer$$Type): $ServerPlayerData
public "getClientModNetworkVersion"(): integer
public "getCurrentlySyncedPlayers"(): $Set<$UUID>
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "getLastTrackedPlayerSync"(): long
public "getOpacData"(): any
public "hasMod"(): boolean
public "setClientModNetworkVersion"(int0: integer): void
public "setLastTrackedPlayerSync"(long0: long): void
public "setOpacData"(object0: any): void
get "clientModNetworkVersion"(): integer
get "currentlySyncedPlayers"(): $Set<$UUID>
get "lastSyncedData"(): $SyncedTrackedPlayer
get "lastTrackedPlayerSync"(): long
get "opacData"(): any
set "clientModNetworkVersion"(value: integer)
set "lastTrackedPlayerSync"(value: long)
set "opacData"(value: any)
}
}

declare module "packages/xaero/map/world/$MapConnectionManager" {
import { $MapConnectionNode$$Type } from "packages/xaero/map/world/$MapConnectionNode"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"

export class $MapConnectionManager {
constructor()

public "addConnection"(mapConnectionNode0: $MapConnectionNode$$Type, mapConnectionNode1: $MapConnectionNode$$Type): void
public "isConnected"(mapConnectionNode0: $MapConnectionNode$$Type, mapConnectionNode1: $MapConnectionNode$$Type): boolean
public "isEmpty"(): boolean
public "removeConnection"(mapConnectionNode0: $MapConnectionNode$$Type, mapConnectionNode1: $MapConnectionNode$$Type): void
public "renameDimension"(string0: string, string1: string): void
public "save"(printWriter0: $PrintWriter$$Type): void
get "empty"(): boolean
}
}

declare module "packages/xaero/map/$MapRunner" {
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Runnable } from "packages/java/lang/$Runnable"
import { $MapRunnerTask$$Type } from "packages/xaero/map/task/$MapRunnerTask"

export class $MapRunner implements $Runnable {
constructor()

public "addTask"(mapRunnerTask0: $MapRunnerTask$$Type): void
public "doTasks"(mapProcessor0: $MapProcessor$$Type): void
public "run"(): void
public "stop"(): void
}
}

declare module "packages/xaero/map/cache/$BlockStateShortShapeCache" {
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Supplier } from "packages/java/util/function/$Supplier"

export class $BlockStateShortShapeCache {
constructor()

public "isShort"(blockState0: $BlockState$$Type): boolean
public "reset"(): void
public "supplyForIOThread"(): void
public "wrapOperation$ckh000$patchConcurrencyCrash"(instance: $BlockStateShortShapeCache$$Type, original: $Operation$$Type<any>): $Supplier<any>
}
}

declare module "packages/xaero/map/gui/$IXaeroClickableWidget" {
import { $ICanTooltip } from "packages/xaero/map/gui/$ICanTooltip"
import { $CursorBox } from "packages/xaero/map/gui/$CursorBox"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export interface $IXaeroClickableWidget extends $ICanTooltip {
"getXaero_wm_tooltip"(): $Supplier<$CursorBox>
"setXaero_wm_tooltip"(supplier0: $Supplier$$Type<$CursorBox>): void
get "xaero_wm_tooltip"(): $Supplier<$CursorBox>
set "xaero_wm_tooltip"(value: $Supplier$$Type<$CursorBox>)
}

export namespace $IXaeroClickableWidget {
const probejs$$marker: never
}
export abstract class $IXaeroClickableWidget$$Static implements $IXaeroClickableWidget {
}
}

declare module "packages/xaero/map/gui/message/render/$MessageBoxRenderer" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $MessageBox$$Type } from "packages/xaero/map/gui/message/$MessageBox"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $MessageBoxRenderer {
constructor()

public "render"(guiGraphics0: $GuiGraphics$$Type, messageBox1: $MessageBox$$Type, font2: $Font$$Type, int3: integer, int4: integer, boolean5: boolean): void
}
}

declare module "packages/xaero/map/region/texture/$RegionTexture" {
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $DataOutputStream$$Type } from "packages/java/io/$DataOutputStream"
import { $RegionTextureBiomes } from "packages/xaero/map/region/texture/$RegionTextureBiomes"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"
import { $LeveledRegion, $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $DataInputStream$$Type } from "packages/java/io/$DataInputStream"
import { $List$$Type } from "packages/java/util/$List"
import { $PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type } from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import { $DimensionHighlighterHandler$$Type } from "packages/xaero/map/highlight/$DimensionHighlighterHandler"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $BranchTextureRenderer$$Type } from "packages/xaero/map/region/texture/$BranchTextureRenderer"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $TextureUploader$$Type } from "packages/xaero/map/graphics/$TextureUploader"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $RegionTexture<T extends $RegionTexture<T>> {
static readonly "PBO_PACK_LENGTH": integer
static readonly "PBO_UNPACK_LENGTH": integer

constructor(leveledRegion0: $LeveledRegion$$Type<T>)

public "addDebugLines"(list0: $List$$Type<string>): void
public "bindColorTexture"(boolean0: boolean): integer
public "canUpload"(): boolean
public "decTimer"(): void
public "deleteColorBuffer"(): void
public "deletePBOs"(): void
public "deleteTexturesAndBuffers"(): void
public "ensureBiomeIndexStorage"(): void
public "getBiome"(int0: integer, int1: integer): $ResourceKey<$Biome>
public "getBiomes"(): $RegionTextureBiomes
public "getBufferHasLight"(): boolean
public "getBufferedTextureVersion"(): integer
public "getColorBuffer"(): $PoolTextureDirectBufferUnit
public "getColorBufferFormat"(): integer
public "getDirectColorBuffer"(): $ByteBuffer
public "getGlColorTexture"(): integer
public "getHeight"(int0: integer, int1: integer): integer
public "getRegion"(): $LeveledRegion<T>
public "getTextureHasLight"(): boolean
public "getTextureVersion"(): integer
public "getTimer"(): integer
public "getTopHeight"(int0: integer, int1: integer): integer
public "hasSourceData"(): boolean
public "isCachePrepared"(): boolean
public "isColorBufferCompressed"(): boolean
public "isUploaded"(): boolean
public "onTextureDeletion"(): void
public "postBufferWrite"(poolTextureDirectBufferUnit0: $PoolTextureDirectBufferUnit$$Type): void
public "postUpload"(mapProcessor0: $MapProcessor$$Type, leveledRegion1: $LeveledRegion$$Type<T>, boolean2: boolean): void
public "preUpload"(mapProcessor0: $MapProcessor$$Type, blockTintProvider1: $BlockTintProvider$$Type, overlayManager2: $OverlayManager$$Type, leveledRegion3: $LeveledRegion$$Type<T>, boolean4: boolean, blockStateShortShapeCache5: $BlockStateShortShapeCache$$Type): void
public "prepareBuffer"(): void
public "putHeight"(int0: integer, int1: integer): void
public "putHeight"(int0: integer, int1: integer, int2: integer): void
public "putTopHeight"(int0: integer, int1: integer): void
public "putTopHeight"(int0: integer, int1: integer, int2: integer): void
public "readCacheData"(int0: integer, int1: integer, dataInputStream2: $DataInputStream$$Type, byte3s: byte[], byte4s: byte[], leveledRegion5: $LeveledRegion$$Type<T>, mapProcessor6: $MapProcessor$$Type, int7: integer, int8: integer, boolean9: boolean): void
public "removeHeight"(int0: integer, int1: integer): void
public "removeTopHeight"(int0: integer, int1: integer): void
public "resetBiomes"(): void
public "resetTimer"(): void
public "setBiome"(int0: integer, int1: integer, resourceKey2: $ResourceKey$$Type<$Biome>): void
public "setBufferedTextureVersion"(int0: integer): void
public "setCachePrepared"(boolean0: boolean): void
public "setShouldDownloadFromPBO"(boolean0: boolean): void
public "setToUpload"(boolean0: boolean): void
public "shouldBeUsedForBranchUpdate"(int0: integer): boolean
public "shouldDownloadFromPBO"(): boolean
public "shouldHaveContentForBranchUpdate"(): boolean
public "shouldIncludeInCache"(): boolean
public "shouldUpload"(): boolean
public "uploadBuffer"(dimensionHighlighterHandler0: $DimensionHighlighterHandler$$Type, textureUploader1: $TextureUploader$$Type, leveledRegion2: $LeveledRegion$$Type<T>, branchTextureRenderer3: $BranchTextureRenderer$$Type, int4: integer, int5: integer): long
public "writeCacheMapData"(dataOutputStream0: $DataOutputStream$$Type, byte1s: byte[], byte2s: byte[], leveledRegion3: $LeveledRegion$$Type<T>): void
get "biomes"(): $RegionTextureBiomes
get "bufferHasLight"(): boolean
get "bufferedTextureVersion"(): integer
get "colorBuffer"(): $PoolTextureDirectBufferUnit
get "colorBufferFormat"(): integer
get "directColorBuffer"(): $ByteBuffer
get "glColorTexture"(): integer
get "region"(): $LeveledRegion<T>
get "textureHasLight"(): boolean
get "textureVersion"(): integer
get "timer"(): integer
get "cachePrepared"(): boolean
get "colorBufferCompressed"(): boolean
get "uploaded"(): boolean
set "bufferedTextureVersion"(value: integer)
set "cachePrepared"(value: boolean)
set "toUpload"(value: boolean)
}
}

declare module "packages/xaero/map/gui/$ISettingEntry" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {
"createWidget"(int0: integer, int1: integer, int2: integer, boolean3: boolean): $AbstractWidget
"getStringForSearch"(): string
get "stringForSearch"(): string
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
export abstract class $ISettingEntry$$Static implements $ISettingEntry {
}
}

declare module "packages/xaero/map/gui/dropdown/$IDropDownContainer" {
import { $DropDownWidget$$Type } from "packages/xaero/map/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {
"onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
"onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
export abstract class $IDropDownContainer$$Static implements $IDropDownContainer {
}
}

declare module "packages/xaero/map/gui/$ScreenBase" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $Optional } from "packages/java/util/$Optional"
import { $IScreenBase } from "packages/xaero/map/gui/$IScreenBase"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $DropDownWidget$$Type } from "packages/xaero/map/gui/dropdown/$DropDownWidget"

export class $ScreenBase extends $Screen implements $IScreenBase {
public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getEscape"(): $Screen
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
public "onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
public "renderEscapeScreen"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "replaceRenderableWidget"(abstractWidget0: $AbstractWidget$$Type, abstractWidget1: $AbstractWidget$$Type): void
public "replaceWidget"(abstractWidget0: $AbstractWidget$$Type, abstractWidget1: $AbstractWidget$$Type): void
public "setFocused"(boolean0: boolean): void
public "shouldSkipWorldRender"(): boolean
get "escape"(): $Screen
set "escape"(value: $Screen$$Type)
get "parent"(): $Screen
set "parent"(value: $Screen$$Type)
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/map/graphics/$CustomVertexConsumers" {
import { $MultiBufferSource$BufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {
constructor()

public "getRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "renderTypeBuffers"(): $MultiBufferSource$BufferSource
}
}

declare module "packages/xaero/map/deallocator/$ByteBufferDeallocator" {
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"

export class $ByteBufferDeallocator {
constructor()

public "deallocate"(byteBuffer0: $ByteBuffer$$Type, boolean1: boolean): void
}
}

declare module "packages/xaero/map/server/radar/tracker/$SyncedPlayerTracker" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerPlayerData$$Type } from "packages/xaero/map/server/player/$ServerPlayerData"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $MinecraftServerData$$Type } from "packages/xaero/map/server/$MinecraftServerData"

export class $SyncedPlayerTracker {
constructor()

public "onTick"(minecraftServer0: $MinecraftServer$$Type, serverPlayer1: $ServerPlayer$$Type, minecraftServerData2: $MinecraftServerData$$Type, serverPlayerData3: $ServerPlayerData$$Type): void
}
}

declare module "packages/xaero/map/task/$MapRunnerTask" {
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"

export class $MapRunnerTask {
constructor()

public "run"(mapProcessor0: $MapProcessor$$Type): void
}
}

declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {
constructor(int0: integer)

public static "defaultTextureBind"(int0: integer): void
public "draw"(multiTextureRenderTypeRenderer0: $MultiTextureRenderTypeRenderer$$Type): void
public "getRenderer"(intConsumer0: $IntConsumer$$Type, intConsumer1: $IntConsumer$$Type, runnable2: $Runnable$$Type, renderType3: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(intConsumer0: $IntConsumer$$Type, intConsumer1: $IntConsumer$$Type, renderType2: $RenderType$$Type): $MultiTextureRenderTypeRenderer
}
}

declare module "packages/xaero/map/highlight/$DimensionHighlighterHandler" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type } from "packages/xaero/map/pool/buffer/$PoolTextureDirectBufferUnit"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $HighlighterRegistry$$Type } from "packages/xaero/map/highlight/$HighlighterRegistry"

export class $DimensionHighlighterHandler {
constructor(mapDimension0: $MapDimension$$Type, resourceKey1: $ResourceKey$$Type<$Level>, highlighterRegistry2: $HighlighterRegistry$$Type)

public "applyChunkHighlightColors"(int0: integer, int1: integer, int2: integer, int3: integer, poolTextureDirectBufferUnit4: $PoolTextureDirectBufferUnit$$Type, poolTextureDirectBufferUnit5: $PoolTextureDirectBufferUnit$$Type, boolean6: boolean, boolean7: boolean, boolean8: boolean): $PoolTextureDirectBufferUnit
public "clearCachedHash"(int0: integer, int1: integer): void
public "clearCachedHashes"(): void
public "getBlockHighlightBluntTooltip"(int0: integer, int1: integer, boolean2: boolean): $Component
public "getBlockHighlightSubtleTooltip"(int0: integer, int1: integer, boolean2: boolean): $Component
public static "getKey"(int0: integer, int1: integer): long
public "getRegionHash"(int0: integer, int1: integer): integer
public static "getXFromKey"(long0: long): integer
public static "getZFromKey"(long0: long): integer
public "shouldApplyRegionHighlights"(int0: integer, int1: integer, boolean2: boolean): boolean
public "shouldApplyTileChunkHighlights"(int0: integer, int1: integer, int2: integer, int3: integer, boolean4: boolean): boolean
}
}

declare module "packages/xaero/map/file/$MapSaveLoad" {
import { $ZipOutputStream$$Type } from "packages/java/util/zip/$ZipOutputStream"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $OldFormatSupport, $OldFormatSupport$$Type } from "packages/xaero/map/file/$OldFormatSupport"
import { $BranchLeveledRegion$$Type } from "packages/xaero/map/region/$BranchLeveledRegion"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $RegionDetection$$Type } from "packages/xaero/map/file/$RegionDetection"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $LeveledRegion, $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $LocalRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import { $HolderLookup$$Type } from "packages/net/minecraft/core/$HolderLookup"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $OutputStream$$Type } from "packages/java/io/$OutputStream"
import { $BiomeGetter$$Type } from "packages/xaero/map/biome/$BiomeGetter"
import { $MapRegionInfo$$Type } from "packages/xaero/map/file/$MapRegionInfo"
import { $DataOutputStream } from "packages/java/io/$DataOutputStream"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $MapRegion, $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $PNGExporter$$Type } from "packages/xaero/map/file/export/$PNGExporter"
import { $ExportScreen$$Type } from "packages/xaero/map/gui/$ExportScreen"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"
import { $MapTileSelection$$Type } from "packages/xaero/map/gui/$MapTileSelection"

export class $MapSaveLoad {
static readonly "SAVE_TIME": integer
static readonly "currentCacheSaveMajorVersion": integer
static readonly "currentCacheSaveMinorVersion": integer

constructor(overlayManager0: $OverlayManager$$Type, pNGExporter1: $PNGExporter$$Type, oldFormatSupport2: $OldFormatSupport$$Type, blockStateShortShapeCache3: $BlockStateShortShapeCache$$Type)

public "addTempCacheRequest"(file0: $File$$Type): void
public "addToLoad"(mapRegion0: $MapRegion$$Type, string1: string, boolean2: boolean): void
public "backupFile"(file0: $File$$Type, int1: integer): void
public "beingSaved"(mapDimension0: $MapDimension$$Type, int1: integer, int2: integer): boolean
public "clearToLoad"(): void
public "detectRegions"(int0: integer): void
public "detectRegionsFromFiles"(mapDimension0: $MapDimension$$Type, string1: string, string2: string, string3: string, path4: $Path$$Type, string5: string, int6: integer, int7: integer, int8: integer, int9: integer, consumer10: $Consumer$$Type<$RegionDetection$$Type>): void
public "exportPNG"(exportScreen0: $ExportScreen$$Type, mapTileSelection1: $MapTileSelection$$Type): boolean
public "getCacheFile"(mapRegionInfo0: $MapRegionInfo$$Type, int1: integer, boolean2: boolean, boolean3: boolean): $File
public "getCaveLayerFolder"(int0: integer, path1: $Path$$Type): $Path
public "getFile"(mapRegion0: $MapRegion$$Type): $File
public "getMWSubFolder"(string0: string, string1: string, string2: string): $Path
public "getMainFolder"(string0: string, string1: string): $Path
public "getNextToLoadByViewing"(): $LeveledRegion<any>
public "getNormalFile"(mapRegion0: $MapRegion$$Type): $File
public "getOldFolder"(string0: string, string1: string): $Path
public "getOldFormatSupport"(): $OldFormatSupport
public static "getRootFolder"(string0: string): $Path
public "getSizeOfToLoad"(): integer
public "getSizeOfToLoadBranchCache"(): integer
public "getTempFile"(file0: $File$$Type): $File
public "getToSave"(): $ArrayList<$MapRegion>
public "handler$clm000$closeZipOutputStream"(cir: $CallbackInfoReturnable$$Type<any>, zipOutShare: $LocalRef$$Type<any>): void
public "handler$clm000$getOldFolder"(oldUnfixedMainId: string, dim: string, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$clm000$saveRegionWriteZipOutputStream"(cir: $CallbackInfoReturnable$$Type<any>, zipOut: $ZipOutputStream$$Type): void
public "isRegionDetectionComplete"(): boolean
public "loadRegion"(mapRegion0: $MapRegion$$Type, holderLookup1: $HolderLookup$$Type<$Block$$Type>, registry2: $Registry$$Type<$Block$$Type>, registry3: $Registry$$Type<$Fluid$$Type>, biomeGetter4: $BiomeGetter$$Type, int5: integer): boolean
public "redirect$clm000$replaceSaveRegionZipOutputStream"(out: $OutputStream$$Type, zipOut: $ZipOutputStream$$Type, zipOutShare: $LocalRef$$Type<any>): $DataOutputStream
public "redirect$clm000$replaceSaveRegionZipOutputStream$mixinextras$bridge$59"(out: $OutputStream$$Type, zipOut: $LocalRef$$Type<any>, zipOutShare: $LocalRef$$Type<any>): $DataOutputStream
public "removeTempCacheRequest"(file0: $File$$Type): boolean
public "removeToCache"(mapDimension0: $MapDimension$$Type, int1: integer): $LeveledRegion<any>
public "removeToCache"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "removeToLoad"(mapRegion0: $MapRegion$$Type): void
public "requestBranchCache"(branchLeveledRegion0: $BranchLeveledRegion$$Type, string1: string): void
public "requestBranchCache"(branchLeveledRegion0: $BranchLeveledRegion$$Type, string1: string, boolean2: boolean): void
public "requestCache"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "requestLoad"(mapRegion0: $MapRegion$$Type, string1: string): void
public "requestLoad"(mapRegion0: $MapRegion$$Type, string1: string, boolean2: boolean): void
public "run"(holderLookup0: $HolderLookup$$Type<$Block$$Type>, registry1: $Registry$$Type<$Block$$Type>, registry2: $Registry$$Type<$Fluid$$Type>, biomeGetter3: $BiomeGetter$$Type, registry4: $Registry$$Type<$Biome$$Type>): void
public "safeDelete"(path0: $Path$$Type, string1: string): void
public "safeMoveAndReplace"(path0: $Path$$Type, path1: $Path$$Type, string2: string, string3: string): void
public "saveExists"(mapRegion0: $MapRegion$$Type): boolean
public "setMapProcessor"(mapProcessor0: $MapProcessor$$Type): void
public "setNextToLoadByViewing"(leveledRegion0: $LeveledRegion$$Type<any>): void
public "setRegionDetectionComplete"(boolean0: boolean): void
public "toCacheContains"(leveledRegion0: $LeveledRegion$$Type<any>): boolean
public "updateSave"(leveledRegion0: $LeveledRegion$$Type<any>, long1: long, int2: integer): void
get "loadingFiles"(): boolean
set "loadingFiles"(value: boolean)
get "mainTextureLevel"(): integer
set "mainTextureLevel"(value: integer)
get "saveAll"(): boolean
set "saveAll"(value: boolean)
get "nextToLoadByViewing"(): $LeveledRegion<any>
get "oldFormatSupport"(): $OldFormatSupport
get "sizeOfToLoad"(): integer
get "sizeOfToLoadBranchCache"(): integer
get "toSave"(): $ArrayList<$MapRegion>
get "regionDetectionComplete"(): boolean
set "mapProcessor"(value: $MapProcessor$$Type)
set "nextToLoadByViewing"(value: $LeveledRegion$$Type<any>)
set "regionDetectionComplete"(value: boolean)
}
}

declare module "packages/xaero/map/graphics/$TextureUpload$Compressed" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Compressed extends $TextureUpload {
constructor(...object0s: any[])

}
}

declare module "packages/xaero/map/file/$RegionDetection" {
import { $File, $File$$Type } from "packages/java/io/$File"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $MapRegionInfo } from "packages/xaero/map/file/$MapRegionInfo"
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $ILinkedChainNode } from "packages/xaero/map/util/linked/$ILinkedChainNode"

export class $RegionDetection implements $MapRegionInfo, $ILinkedChainNode<$RegionDetection> {
constructor(string0: string, string1: string, string2: string, int3: integer, int4: integer, file5: $File$$Type, int6: integer, boolean7: boolean)

public "getCacheFile"(): $File
public "getDimId"(): string
public "getInitialVersion"(): integer
public "getMwId"(): string
public "getNext"(): $RegionDetection
public "getPrevious"(): $RegionDetection
public "getRegionFile"(): $File
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "getWorldId"(): string
public "hasLookedForCache"(): boolean
public "isDestroyed"(): boolean
public "isHasHadTerrain"(): boolean
public "isRemoved"(): boolean
public "onDestroyed"(): void
public "setCacheFile"(file0: $File$$Type): void
public "setNext"(regionDetection0: $RegionDetection$$Type): void
public "setPrevious"(regionDetection0: $RegionDetection$$Type): void
public "setRemoved"(boolean0: boolean): void
public "setShouldCache"(boolean0: boolean, string1: string): void
public "shouldCache"(): boolean
public "transferInfoFrom"(mapRegion0: $MapRegion$$Type): void
public "transferInfoPostAddTo"(mapRegion0: $MapRegion$$Type, mapProcessor1: $MapProcessor$$Type): void
public "transferInfoTo"(mapRegion0: $MapRegion$$Type): void
get "cacheFile"(): $File
get "dimId"(): string
get "initialVersion"(): integer
get "mwId"(): string
get "next"(): $RegionDetection
get "previous"(): $RegionDetection
get "regionFile"(): $File
get "regionX"(): integer
get "regionZ"(): integer
get "worldId"(): string
get "destroyed"(): boolean
get "hasHadTerrain"(): boolean
get "removed"(): boolean
set "cacheFile"(value: $File$$Type)
set "next"(value: $RegionDetection$$Type)
set "previous"(value: $RegionDetection$$Type)
set "removed"(value: boolean)
}
}

declare module "packages/xaero/map/highlight/$RegionHighlightExistenceTracker" {
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"

export class $RegionHighlightExistenceTracker {
constructor(mapDimension0: $MapDimension$$Type, int1: integer)

public "onClearCachedHash"(int0: integer, int1: integer): void
public "onClearCachedHashes"(): void
public "stopTracking"(int0: integer, int1: integer): void
public "track"(int0: integer, int1: integer): void
}
}

declare module "packages/xaero/map/core/$IWorldMapServerLevel" {
import { $ServerWorldCapabilities, $ServerWorldCapabilities$$Type } from "packages/xaero/map/capabilities/$ServerWorldCapabilities"

export interface $IWorldMapServerLevel {
"getXaero_wm_capabilities"(): $ServerWorldCapabilities
"setXaero_wm_capabilities"(serverWorldCapabilities0: $ServerWorldCapabilities$$Type): void
get "xaero_wm_capabilities"(): $ServerWorldCapabilities
set "xaero_wm_capabilities"(value: $ServerWorldCapabilities$$Type)
}

export namespace $IWorldMapServerLevel {
const probejs$$marker: never
}
export abstract class $IWorldMapServerLevel$$Static implements $IWorldMapServerLevel {
}
}

declare module "packages/xaero/map/file/worldsave/$WorldDataReader" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $RegionFile$$Type } from "packages/net/minecraft/world/level/chunk/storage/$RegionFile"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $WorldDataBiomeManager$$Type } from "packages/xaero/map/file/worldsave/biome/$WorldDataBiomeManager"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $Executor$$Type } from "packages/xaero/map/executor/$Executor"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $HolderLookup$$Type } from "packages/net/minecraft/core/$HolderLookup"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $WorldDataReader {
constructor(overlayManager0: $OverlayManager$$Type, blockStateShortShapeCache1: $BlockStateShortShapeCache$$Type, worldDataBiomeManager2: $WorldDataBiomeManager$$Type, long3: long)

public "buildRegion"(mapRegion0: $MapRegion$$Type, serverLevel1: $ServerLevel$$Type, holderLookup2: $HolderLookup$$Type<$Block$$Type>, registry3: $Registry$$Type<$Block$$Type>, registry4: $Registry$$Type<$Fluid$$Type>, boolean5: boolean, int6s: integer[], executor7: $Executor$$Type): boolean
public "handler$cng000$applyNetherCaveFix"(cir: $CallbackInfoReturnable$$Type<any>, tileChunk: $MapTileChunk$$Type, caveStartRef: $LocalIntRef$$Type): void
public "readChunk"(regionFile0: $RegionFile$$Type, chunkPos1: $ChunkPos$$Type): $CompoundTag
public "setMapProcessor"(mapProcessor0: $MapProcessor$$Type): void
get "taskCreationSync"(): any
set "taskCreationSync"(value: any)
set "mapProcessor"(value: $MapProcessor$$Type)
}
}

declare module "packages/xaero/map/$MapLimiter" {
import { $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"

export class $MapLimiter {
constructor()

public "applyLimit"(mapWorld0: $MapWorld$$Type, mapProcessor1: $MapProcessor$$Type): void
public "getAvailableVRAM"(): integer
public "getMostRegionsAtATime"(): integer
public "onSessionFinalized"(): void
public "setMostRegionsAtATime"(int0: integer): void
public "updateAvailableVRAM"(): void
get "availableVRAM"(): integer
get "mostRegionsAtATime"(): integer
set "mostRegionsAtATime"(value: integer)
}
}

declare module "packages/xaero/map/region/$MapLayer" {
import { $LeveledRegionManager } from "packages/xaero/map/region/$LeveledRegionManager"
import { $RegionHighlightExistenceTracker, $RegionHighlightExistenceTracker$$Type } from "packages/xaero/map/highlight/$RegionHighlightExistenceTracker"
import { $Hashtable } from "packages/java/util/$Hashtable"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $RegionDetection, $RegionDetection$$Type } from "packages/xaero/map/file/$RegionDetection"

export class $MapLayer {
constructor(mapDimension0: $MapDimension$$Type, regionHighlightExistenceTracker1: $RegionHighlightExistenceTracker$$Type)

public "addRegionDetection"(regionDetection0: $RegionDetection$$Type): void
public "getCaveStart"(): integer
public "getCompleteRegionDetection"(int0: integer, int1: integer): $RegionDetection
public "getDetectedRegions"(): $Hashtable<integer, $Hashtable<integer, $RegionDetection>>
public "getLinkedCompleteWorldSaveDetectedRegions"(): $Iterable<$RegionDetection>
public "getMapRegions"(): $LeveledRegionManager
public "getRegionDetection"(int0: integer, int1: integer): $RegionDetection
public "getRegionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
public "preDetection"(): void
public "regionDetectionExists"(int0: integer, int1: integer): boolean
public "removeRegionDetection"(int0: integer, int1: integer): void
public "setCaveStart"(int0: integer): void
public "tryAddingToCompleteRegionDetection"(regionDetection0: $RegionDetection$$Type): void
get "caveStart"(): integer
get "detectedRegions"(): $Hashtable<integer, $Hashtable<integer, $RegionDetection>>
get "linkedCompleteWorldSaveDetectedRegions"(): $Iterable<$RegionDetection>
get "mapRegions"(): $LeveledRegionManager
get "regionHighlightExistenceTracker"(): $RegionHighlightExistenceTracker
set "caveStart"(value: integer)
}
}

declare module "packages/xaero/map/gui/$MapTileSelection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapTileSelection {
constructor(int0: integer, int1: integer)

public "getBottom"(): integer
public "getEndX"(): integer
public "getEndZ"(): integer
public "getLeft"(): integer
public "getRight"(): integer
public "getStartX"(): integer
public "getStartZ"(): integer
public "getTop"(): integer
public "setEnd"(int0: integer, int1: integer): void
get "bottom"(): integer
get "endX"(): integer
get "endZ"(): integer
get "left"(): integer
get "right"(): integer
get "startX"(): integer
get "startZ"(): integer
get "top"(): integer
}
}

declare module "packages/xaero/map/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $MultiTextureRenderTypeRenderer {
public "begin"(int0: integer): $BufferBuilder
}
}

declare module "packages/xaero/map/server/radar/tracker/$SyncedTrackedPlayer" {
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $SyncedTrackedPlayer {
constructor(uUID0: $UUID$$Type, double1: double, double2: double, double3: double, resourceKey4: $ResourceKey$$Type<$Level>)

public "copyFrom"(syncedTrackedPlayer0: $SyncedTrackedPlayer$$Type): void
public "getDimension"(): $ResourceKey<$Level>
public "getId"(): $UUID
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "matchesEnough"(player0: $Player$$Type, double1: double): boolean
public "setDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $SyncedTrackedPlayer
public "setPos"(double0: double, double1: double, double2: double): $SyncedTrackedPlayer
public "update"(player0: $Player$$Type): void
get "dimension"(): $ResourceKey<$Level>
get "id"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
set "dimension"(value: $ResourceKey$$Type<$Level>)
}
}

declare module "packages/xaero/map/cache/$BrokenBlockTintCache" {
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BrokenBlockTintCache {
constructor(set0: $Set$$Type<$BlockState$$Type>)

public "getSize"(): integer
public "isBroken"(blockState0: $BlockState$$Type): boolean
public "setBroken"(blockState0: $BlockState$$Type): void
get "size"(): integer
set "broken"(value: $BlockState$$Type)
}
}

declare module "packages/xaero/map/region/texture/$BranchRegionTexture" {
import { $RegionTexture, $RegionTexture$$Type } from "packages/xaero/map/region/texture/$RegionTexture"
import { $LeveledRegion$$Type } from "packages/xaero/map/region/$LeveledRegion"

export class $BranchRegionTexture extends $RegionTexture<$BranchRegionTexture> {
constructor(leveledRegion0: $LeveledRegion$$Type<$BranchRegionTexture$$Type>)

public "checkForUpdates"(regionTexture0: $RegionTexture$$Type<any>, regionTexture1: $RegionTexture$$Type<any>, regionTexture2: $RegionTexture$$Type<any>, regionTexture3: $RegionTexture$$Type<any>, leveledRegion4: $LeveledRegion$$Type<any>): boolean
public "requestDownload"(): void
}
}

declare module "packages/xaero/map/gui/dropdown/$DropDownWidget" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "LINE_HEIGHT": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_INSIDE": integer
static readonly "TRIM_OPEN": integer

public "getCurrentFocusPath"(): $ComponentPath
public "getRenderY"(): integer
public "getRenderYWithOffset"(): integer
public "getSelected"(): integer
public "getXWithOffset"(): integer
public "isClosed"(): boolean
public "m_168797_"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "m_87963_"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "mouseClicked"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "mouseReleased"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "mouseScrolled"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "onDropDown"(int0: integer, int1: integer, int2: integer): boolean
public "onDropDown"(int0: integer, int1: integer, boolean2: boolean, int3: integer): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "selectId"(int0: integer, boolean1: boolean): void
public "setActive"(boolean0: boolean): void
public "setClosed"(boolean0: boolean): void
public "setPosition"(int0: integer, int1: integer): void
public "size"(): integer
get "currentFocusPath"(): $ComponentPath
get "renderY"(): integer
get "renderYWithOffset"(): integer
get "selected"(): integer
get "xWithOffset"(): integer
get "closed"(): boolean
set "active"(value: boolean)
set "closed"(value: boolean)
}
}

declare module "packages/xaero/map/world/$MapConnectionNode" {
import { $MapWorld$$Type } from "packages/xaero/map/world/$MapWorld"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $MapConnectionNode {
constructor(resourceKey0: $ResourceKey$$Type<$Level>, string1: string)

public static "fromString"(string0: string): $MapConnectionNode
public "getDimId"(): $ResourceKey<$Level>
public "getMw"(): string
public "getNamedString"(mapWorld0: $MapWorld$$Type): string
get "dimId"(): $ResourceKey<$Level>
get "mw"(): string
}
}

declare module "packages/xaero/map/graphics/$TextureUpload$BranchUpdate" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$BranchUpdate extends $TextureUpload {
constructor(int0: integer)
constructor(...object0s: any[])

}
}

declare module "packages/xaero/map/region/$MapPixel" {
import { $MapTile$$Type } from "packages/xaero/map/region/$MapTile"
import { $BlockTintProvider$$Type } from "packages/xaero/map/biome/$BlockTintProvider"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MapWriter$$Type } from "packages/xaero/map/$MapWriter"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $MapDimension$$Type } from "packages/xaero/map/world/$MapDimension"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/map/cache/$BlockStateShortShapeCache"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Overlay$$Type } from "packages/xaero/map/region/$Overlay"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $MapBlock$$Type } from "packages/xaero/map/region/$MapBlock"
import { $OverlayManager$$Type } from "packages/xaero/map/region/$OverlayManager"

export class $MapPixel {
constructor()

public "getBlockBrightness"(float0: float, int1: integer, int2: integer): float
public "getPixelColours"(int0s: integer[], mapWriter1: $MapWriter$$Type, level2: $Level$$Type, mapDimension3: $MapDimension$$Type, registry4: $Registry$$Type<$Block$$Type>, mapTileChunk5: $MapTileChunk$$Type, mapTileChunk6: $MapTileChunk$$Type, mapTileChunk7: $MapTileChunk$$Type, mapTileChunk8: $MapTileChunk$$Type, mapTile9: $MapTile$$Type, int10: integer, int11: integer, mapBlock12: $MapBlock$$Type, int13: integer, int14: integer, int15: integer, int16: integer, arrayList17: $ArrayList$$Type<$Overlay$$Type>, mutableBlockPos18: $BlockPos$MutableBlockPos$$Type, registry19: $Registry$$Type<$Biome$$Type>, registry20: $Registry$$Type<$DimensionType$$Type>, float21: float, float22: float, float23: float, blockTintProvider24: $BlockTintProvider$$Type, mapProcessor25: $MapProcessor$$Type, overlayManager26: $OverlayManager$$Type, blockStateShortShapeCache27: $BlockStateShortShapeCache$$Type): void
public "getState"(): $BlockState
public "handler$clk000$getPixelColours"(ci: $CallbackInfo$$Type, result_dest: integer[]): void
public "setGlowing"(boolean0: boolean): void
public "setLight"(byte0: byte): void
public "setState"(blockState0: $BlockState$$Type): void
get "state"(): $BlockState
set "glowing"(value: boolean)
set "light"(value: byte)
set "state"(value: $BlockState$$Type)
}
}

declare module "packages/xaero/map/graphics/$TextureUpload$Normal" {
import { $TextureUpload } from "packages/xaero/map/graphics/$TextureUpload"

export class $TextureUpload$Normal extends $TextureUpload {
constructor(int0: integer)
constructor(...object0s: any[])

}
}

declare module "packages/xaero/map/gui/$ICanTooltip" {
import { $CursorBox } from "packages/xaero/map/gui/$CursorBox"
import { $Supplier } from "packages/java/util/function/$Supplier"

export interface $ICanTooltip {
"getXaero_wm_tooltip"(): $Supplier<$CursorBox>
get "xaero_wm_tooltip"(): $Supplier<$CursorBox>
}

export namespace $ICanTooltip {
const probejs$$marker: never
}
export abstract class $ICanTooltip$$Static implements $ICanTooltip {
}
}

