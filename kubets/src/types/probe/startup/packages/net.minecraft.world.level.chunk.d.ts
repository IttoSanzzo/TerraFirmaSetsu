declare module "packages/net/minecraft/world/level/chunk/$PalettedContainer$Strategy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainer$Strategy$$Type = ($PalettedContainer$Strategy);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainer$Strategy_ = $PalettedContainer$Strategy$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$RegionFileVersion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegionFileVersion$$Type = ($RegionFileVersion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegionFileVersion_ = $RegionFileVersion$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$CarvingMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CarvingMask$$Type = ($CarvingMask);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CarvingMask_ = $CarvingMask$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LevelChunk$PostLoadProcessor" {
import { $LevelChunk } from "packages/net/minecraft/world/level/chunk/$LevelChunk"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelChunk$PostLoadProcessor$$Type = ($LevelChunk$PostLoadProcessor | ((arg0: $LevelChunk) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelChunk$PostLoadProcessor_ = $LevelChunk$PostLoadProcessor$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LightChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightChunk$$Type = ($LightChunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightChunk_ = $LightChunk$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkStatus$LoadingTask" {
import { $ChunkStatus } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $StructureTemplateManager } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $ThreadedLevelLightEngine } from "packages/net/minecraft/server/level/$ThreadedLevelLightEngine"
import { $Function } from "packages/java/util/function/$Function"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$$Type } from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkStatus$LoadingTask$$Type = ($ChunkStatus$LoadingTask | ((arg0: $ChunkStatus, arg1: $ServerLevel, arg2: $StructureTemplateManager, arg3: $ThreadedLevelLightEngine, arg4: $Function<$ChunkAccess, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, arg5: $ChunkAccess) => $CompletableFuture$$Type<$Either$$Type<$ChunkAccess$$Type, $ChunkHolder$ChunkLoadingFailure$$Type>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkStatus$LoadingTask_ = $ChunkStatus$LoadingTask$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LightChunkGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LightChunkGetter$$Type = ($LightChunkGetter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LightChunkGetter_ = $LightChunkGetter$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainerRO$PackedData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainerRO$PackedData$$Type<T> = ($PalettedContainerRO$PackedData<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainerRO$PackedData_<T> = $PalettedContainerRO$PackedData$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainerRO" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainerRO$$Type<T> = ($PalettedContainerRO<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainerRO_<T> = $PalettedContainerRO$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LevelChunkSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelChunkSection$$Type = ($LevelChunkSection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelChunkSection_ = $LevelChunkSection$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PaletteResize" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PaletteResize$$Type<T> = ($PaletteResize<T> | ((arg0: integer, arg1: T) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PaletteResize_<T> = $PaletteResize$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$Palette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Palette$$Type<T> = ($Palette<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Palette_<T> = $Palette$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainer$Configuration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainer$Configuration$$Type<T> = ($PalettedContainer$Configuration<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainer$Configuration_<T> = $PalettedContainer$Configuration$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LevelChunk$EntityCreationType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelChunk$EntityCreationType$$Type = ($LevelChunk$EntityCreationType | ("immediate" | "queued" | "check"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelChunk$EntityCreationType_ = $LevelChunk$EntityCreationType$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$UpgradeData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UpgradeData$$Type = ($UpgradeData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UpgradeData_ = $UpgradeData$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainer$CountConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainer$CountConsumer$$Type<T> = ($PalettedContainer$CountConsumer<T> | ((arg0: T, arg1: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainer$CountConsumer_<T> = $PalettedContainer$CountConsumer$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkGenerator$$Type = ($ChunkGenerator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkGenerator_ = $ChunkGenerator$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkSource$$Type = ($ChunkSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkSource_ = $ChunkSource$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$DataLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataLayer$$Type = ($DataLayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataLayer_ = $DataLayer$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$BlockColumn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColumn$$Type = ($BlockColumn);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColumn_ = $BlockColumn$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ImposterProtoChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ImposterProtoChunk$$Type = ($ImposterProtoChunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ImposterProtoChunk_ = $ImposterProtoChunk$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$RegionFile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegionFile$$Type = ($RegionFile);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegionFile_ = $RegionFile$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$LevelChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelChunk$$Type = ($LevelChunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelChunk_ = $LevelChunk$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$Palette$Factory" {
import { $List } from "packages/java/util/$List"
import { $IdMap } from "packages/net/minecraft/core/$IdMap"
import { $PaletteResize } from "packages/net/minecraft/world/level/chunk/$PaletteResize"
import { $Palette$$Type } from "packages/net/minecraft/world/level/chunk/$Palette"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Palette$Factory$$Type = ($Palette$Factory | ((arg0: integer, arg1: $IdMap<A>, arg2: $PaletteResize<A>, arg3: $List<A>) => $Palette$$Type<A>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Palette$Factory_ = $Palette$Factory$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkStatus$GenerationTask" {
import { $ChunkStatus } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $ThreadedLevelLightEngine } from "packages/net/minecraft/server/level/$ThreadedLevelLightEngine"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $ChunkGenerator } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $Executor } from "packages/java/util/concurrent/$Executor"
import { $StructureTemplateManager } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $Function } from "packages/java/util/function/$Function"
import { $List } from "packages/java/util/$List"
import { $ServerLevel } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$$Type } from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkStatus$GenerationTask$$Type = ($ChunkStatus$GenerationTask | ((arg0: $ChunkStatus, arg1: $Executor, arg2: $ServerLevel, arg3: $ChunkGenerator, arg4: $StructureTemplateManager, arg5: $ThreadedLevelLightEngine, arg6: $Function<$ChunkAccess, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, arg7: $List<$ChunkAccess>, arg8: $ChunkAccess) => $CompletableFuture$$Type<$Either$$Type<$ChunkAccess$$Type, $ChunkHolder$ChunkLoadingFailure$$Type>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkStatus$GenerationTask_ = $ChunkStatus$GenerationTask$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$SectionStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SectionStorage$$Type<R> = ($SectionStorage<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SectionStorage_<R> = $SectionStorage$$Type<R>;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$ChunkScanAccess" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $StreamTagVisitor } from "packages/net/minecraft/nbt/$StreamTagVisitor"
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkScanAccess$$Type = ($ChunkScanAccess | ((arg0: $ChunkPos, arg1: $StreamTagVisitor) => $CompletableFuture$$Type<void>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkScanAccess_ = $ChunkScanAccess$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainer$$Type<T> = ($PalettedContainer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainer_<T> = $PalettedContainer$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkGeneratorStructureState$$Type = ($ChunkGeneratorStructureState);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkGeneratorStructureState_ = $ChunkGeneratorStructureState$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$StructureAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StructureAccess$$Type = ($StructureAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StructureAccess_ = $StructureAccess$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$ChunkStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkStorage$$Type = ($ChunkStorage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkStorage_ = $ChunkStorage$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ProtoChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProtoChunk$$Type = ($ProtoChunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProtoChunk_ = $ProtoChunk$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$IOWorker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IOWorker$$Type = ($IOWorker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IOWorker_ = $IOWorker$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkStatus$ChunkType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkStatus$ChunkType$$Type = ($ChunkStatus$ChunkType | ("protochunk" | "levelchunk"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkStatus$ChunkType_ = $ChunkStatus$ChunkType$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$PalettedContainer$Data" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PalettedContainer$Data$$Type<T> = ($PalettedContainer$Data<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PalettedContainer$Data_<T> = $PalettedContainer$Data$$Type<T>;
}
}

declare module "packages/net/minecraft/world/level/chunk/$CarvingMask$Mask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CarvingMask$Mask$$Type = ($CarvingMask$Mask | ((arg0: integer, arg1: integer, arg2: integer) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CarvingMask$Mask_ = $CarvingMask$Mask$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkAccess$$Type = ($ChunkAccess);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkAccess_ = $ChunkAccess$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkStatus" {
import { $ThreadedLevelLightEngine$$Type } from "packages/net/minecraft/server/level/$ThreadedLevelLightEngine"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ChunkStatus$GenerationTask$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus$GenerationTask"
import { $ChunkStatus$LoadingTask$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus$LoadingTask"
import { $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $EnumSet, $EnumSet$$Type } from "packages/java/util/$EnumSet"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ChunkStatus$ChunkType, $ChunkStatus$ChunkType$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus$ChunkType"
import { $ChunkHolder$ChunkLoadingFailure } from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

export class $ChunkStatus {
static readonly "BIOMES": $ChunkStatus
static readonly "CARVERS": $ChunkStatus
static readonly "EMPTY": $ChunkStatus
static readonly "FEATURES": $ChunkStatus
static readonly "FULL": $ChunkStatus
static readonly "INITIALIZE_LIGHT": $ChunkStatus
static readonly "LIGHT": $ChunkStatus
static readonly "MAX_STRUCTURE_DISTANCE": integer
static readonly "NOISE": $ChunkStatus
static readonly "POST_FEATURES": $EnumSet<$Heightmap$Types>
static readonly "SPAWN": $ChunkStatus
static readonly "STRUCTURE_REFERENCES": $ChunkStatus
static readonly "STRUCTURE_STARTS": $ChunkStatus
static readonly "SURFACE": $ChunkStatus

constructor(chunkStatus0: $ChunkStatus$$Type, int1: integer, boolean2: boolean, enumSet3: $EnumSet$$Type<$Heightmap$Types$$Type>, chunkType4: $ChunkStatus$ChunkType$$Type, generationTask5: $ChunkStatus$GenerationTask$$Type, loadingTask6: $ChunkStatus$LoadingTask$$Type)

public static "byName"(string0: string): $ChunkStatus
public "generate"(executor0: $Executor$$Type, serverLevel1: $ServerLevel$$Type, chunkGenerator2: $ChunkGenerator$$Type, structureTemplateManager3: $StructureTemplateManager$$Type, threadedLevelLightEngine4: $ThreadedLevelLightEngine$$Type, function5: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, list6: $List$$Type<$ChunkAccess$$Type>): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getChunkType"(): $ChunkStatus$ChunkType
public static "getDistance"(chunkStatus0: $ChunkStatus$$Type): integer
public "getIndex"(): integer
public "getParent"(): $ChunkStatus
public "getRange"(): integer
public static "getStatusAroundFullChunk"(int0: integer): $ChunkStatus
public static "getStatusList"(): $List<$ChunkStatus>
public "hasLoadDependencies"(): boolean
public "heightmapsAfter"(): $EnumSet<$Heightmap$Types>
public "isOrAfter"(chunkStatus0: $ChunkStatus$$Type): boolean
public "load"(serverLevel0: $ServerLevel$$Type, structureTemplateManager1: $StructureTemplateManager$$Type, threadedLevelLightEngine2: $ThreadedLevelLightEngine$$Type, function3: $Function$$Type<$ChunkAccess$$Type, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>, chunkAccess4: $ChunkAccess$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public static "maxDistance"(): integer
get "chunkType"(): $ChunkStatus$ChunkType
get "index"(): integer
get "parent"(): $ChunkStatus
get "range"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.ChunkStatus
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ChunkStatusTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkStatus$$Type = ($ChunkStatus | Special.ChunkStatus);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkStatus_ = $ChunkStatus$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/storage/$RegionFileStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegionFileStorage$$Type = ($RegionFileStorage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegionFileStorage_ = $RegionFileStorage$$Type;
}
}

declare module "packages/net/minecraft/world/level/chunk/$ChunkAccess$TicksToSave" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkAccess$TicksToSave$$Type = ($ChunkAccess$TicksToSave);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkAccess$TicksToSave_ = $ChunkAccess$TicksToSave$$Type;
}
}

