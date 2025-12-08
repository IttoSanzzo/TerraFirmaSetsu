declare module "packages/net/minecraft/server/players/$StoredUserList" {
import { $StoredUserEntry, $StoredUserEntry$$Type } from "packages/net/minecraft/server/players/$StoredUserEntry"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StoredUserList$$Type<K, V extends $StoredUserEntry<K>> = ($StoredUserList<K, V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StoredUserList_<K, V extends $StoredUserEntry<K>> = $StoredUserList$$Type<K, V>;
}
}

declare module "packages/net/minecraft/server/$ReloadableServerResources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReloadableServerResources$$Type = ($ReloadableServerResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReloadableServerResources_ = $ReloadableServerResources$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$Info" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pack$Info$$Type = ($Pack$Info);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pack$Info_ = $Pack$Info$$Type;
}
}

declare module "packages/net/minecraft/server/level/$FullChunkStatus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FullChunkStatus$$Type = ($FullChunkStatus | ("inaccessible" | "full" | "block_ticking" | "entity_ticking"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FullChunkStatus_ = $FullChunkStatus$$Type;
}
}

declare module "packages/net/minecraft/server/$TickTask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TickTask$$Type = ($TickTask);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TickTask_ = $TickTask$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkMap$TrackedEntity$$Type = ($ChunkMap$TrackedEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkMap$TrackedEntity_ = $ChunkMap$TrackedEntity$$Type;
}
}

declare module "packages/net/minecraft/server/players/$IpBanListEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IpBanListEntry$$Type = ($IpBanListEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IpBanListEntry_ = $IpBanListEntry$$Type;
}
}

declare module "packages/net/minecraft/server/players/$UserBanListEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserBanListEntry$$Type = ($UserBanListEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserBanListEntry_ = $UserBanListEntry$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkMap$$Type = ($ChunkMap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkMap_ = $ChunkMap$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackCompatibility" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackCompatibility$$Type = ($PackCompatibility | ("too_old" | "too_new" | "compatible"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackCompatibility_ = $PackCompatibility$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackSource$$Type = ($PackSource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackSource_ = $PackSource$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ServerPlayerGameMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayerGameMode$$Type = ($ServerPlayerGameMode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayerGameMode_ = $ServerPlayerGameMode$$Type;
}
}

declare module "packages/net/minecraft/server/bossevents/$CustomBossEvents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomBossEvents$$Type = ($CustomBossEvents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomBossEvents_ = $CustomBossEvents$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$PreparableReloadListener" {
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $Executor } from "packages/java/util/concurrent/$Executor"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PreparableReloadListener$$Type = ($PreparableReloadListener | ((arg0: $PreparableReloadListener$PreparationBarrier, arg1: $ResourceManager, arg2: $ProfilerFiller, arg3: $ProfilerFiller, arg4: $Executor, arg5: $Executor) => $CompletableFuture$$Type<void>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PreparableReloadListener_ = $PreparableReloadListener$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkTaskPriorityQueueSorter$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkTaskPriorityQueueSorter$Message$$Type<T> = ($ChunkTaskPriorityQueueSorter$Message<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkTaskPriorityQueueSorter$Message_<T> = $ChunkTaskPriorityQueueSorter$Message$$Type<T>;
}
}

declare module "packages/net/minecraft/server/packs/repository/$RepositorySource" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $Pack } from "packages/net/minecraft/server/packs/repository/$Pack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RepositorySource$$Type = ($RepositorySource | ((arg0: $Consumer<$Pack>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RepositorySource_ = $RepositorySource$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$ResourcesSupplier" {
import { $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pack$ResourcesSupplier$$Type = ($Pack$ResourcesSupplier | ((arg0: string) => $PackResources$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pack$ResourcesSupplier_ = $Pack$ResourcesSupplier$$Type;
}
}

declare module "packages/net/minecraft/server/network/$FilteredText" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FilteredText$$Type = ($FilteredText);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FilteredText_ = $FilteredText$$Type;
}
}

declare module "packages/net/minecraft/server/players/$BanListEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BanListEntry$$Type<T> = ($BanListEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BanListEntry_<T> = $BanListEntry$$Type<T>;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ReloadInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReloadInstance$$Type = ($ReloadInstance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReloadInstance_ = $ReloadInstance$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager$TraceCallbacks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerFunctionManager$TraceCallbacks$$Type = ($ServerFunctionManager$TraceCallbacks);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerFunctionManager$TraceCallbacks_ = $ServerFunctionManager$TraceCallbacks$$Type;
}
}

declare module "packages/net/minecraft/server/packs/$VanillaPackResources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VanillaPackResources$$Type = ($VanillaPackResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VanillaPackResources_ = $VanillaPackResources$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier" {
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PreparableReloadListener$PreparationBarrier$$Type = ($PreparableReloadListener$PreparationBarrier | ((arg0: T) => $CompletableFuture$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PreparableReloadListener$PreparationBarrier_ = $PreparableReloadListener$PreparationBarrier$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ServerLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerLevel$$Type = ($ServerLevel);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerLevel_ = $ServerLevel$$Type;
}
}

declare module "packages/net/minecraft/server/$MinecraftServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftServer$$Type = ($MinecraftServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftServer_ = $MinecraftServer$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$FallbackResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FallbackResourceManager$$Type = ($FallbackResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FallbackResourceManager_ = $FallbackResourceManager$$Type;
}
}

declare module "packages/net/minecraft/server/level/$WorldGenRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldGenRegion$$Type = ($WorldGenRegion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldGenRegion_ = $WorldGenRegion$$Type;
}
}

declare module "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MetadataSectionSerializer$$Type<T> = ($MetadataSectionSerializer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MetadataSectionSerializer_<T> = $MetadataSectionSerializer$$Type<T>;
}
}

declare module "packages/net/minecraft/server/level/$DistanceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DistanceManager$$Type = ($DistanceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DistanceManager_ = $DistanceManager$$Type;
}
}

declare module "packages/net/minecraft/server/$Services" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Services$$Type = ($Services);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Services_ = $Services$$Type;
}
}

declare module "packages/net/minecraft/server/packs/$AbstractPackResources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractPackResources$$Type = ($AbstractPackResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractPackResources_ = $AbstractPackResources$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerScoreboard$Method" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerScoreboard$Method$$Type = ($ServerScoreboard$Method | ("change" | "remove"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerScoreboard$Method_ = $ServerScoreboard$Method$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceMetadata" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $MetadataSectionSerializer } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceMetadata$$Type = ($ResourceMetadata | ((arg0: $MetadataSectionSerializer<T>) => $Optional$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceMetadata_ = $ResourceMetadata$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkHolder$ChunkLoadingFailure$$Type = ($ChunkHolder$ChunkLoadingFailure);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkHolder$ChunkLoadingFailure_ = $ChunkHolder$ChunkLoadingFailure$$Type;
}
}

declare module "packages/net/minecraft/server/level/progress/$StoringChunkProgressListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StoringChunkProgressListener$$Type = ($StoringChunkProgressListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StoringChunkProgressListener_ = $StoringChunkProgressListener$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ServerPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayer$$Type = ($ServerPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayer_ = $ServerPlayer$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ThreadedLevelLightEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThreadedLevelLightEngine$$Type = ($ThreadedLevelLightEngine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThreadedLevelLightEngine_ = $ThreadedLevelLightEngine$$Type;
}
}

declare module "packages/net/minecraft/server/bossevents/$CustomBossEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomBossEvent$$Type = ($CustomBossEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomBossEvent_ = $CustomBossEvent$$Type;
}
}

declare module "packages/net/minecraft/server/players/$UserBanList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserBanList$$Type = ($UserBanList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserBanList_ = $UserBanList$$Type;
}
}

declare module "packages/net/minecraft/server/level/progress/$ChunkProgressListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkProgressListener$$Type = ($ChunkProgressListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkProgressListener_ = $ChunkProgressListener$$Type;
}
}

declare module "packages/net/minecraft/server/$RegistryLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryLayer$$Type = ($RegistryLayer | ("static" | "worldgen" | "dimensions" | "reloadable"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryLayer_ = $RegistryLayer$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$PlayerProvider" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkHolder$PlayerProvider$$Type = ($ChunkHolder$PlayerProvider | ((arg0: $ChunkPos, arg1: boolean) => $List$$Type<$ServerPlayer$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkHolder$PlayerProvider_ = $ChunkHolder$PlayerProvider$$Type;
}
}

declare module "packages/net/minecraft/server/packs/$PackResources$ResourceOutput" {
import { $InputStream } from "packages/java/io/$InputStream"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackResources$ResourceOutput$$Type = ($PackResources$ResourceOutput | ((arg0: $ResourceLocation, arg1: $IoSupplier<$InputStream>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackResources$ResourceOutput_ = $PackResources$ResourceOutput$$Type;
}
}

declare module "packages/net/minecraft/server/players/$StoredUserEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StoredUserEntry$$Type<T> = ($StoredUserEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StoredUserEntry_<T> = $StoredUserEntry$$Type<T>;
}
}

declare module "packages/net/minecraft/server/players/$GameProfileCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameProfileCache$$Type = ($GameProfileCache);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameProfileCache_ = $GameProfileCache$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimplePreparableReloadListener$$Type<T> = ($SimplePreparableReloadListener<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimplePreparableReloadListener_<T> = $SimplePreparableReloadListener$$Type<T>;
}
}

declare module "packages/net/minecraft/server/level/progress/$ChunkProgressListenerFactory" {
import { $ChunkProgressListener$$Type } from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkProgressListenerFactory$$Type = ($ChunkProgressListenerFactory | ((arg0: integer) => $ChunkProgressListener$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkProgressListenerFactory_ = $ChunkProgressListenerFactory$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$Resource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Resource$$Type = ($Resource);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Resource_ = $Resource$$Type;
}
}

declare module "packages/net/minecraft/server/packs/$PackResources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackResources$$Type = ($PackResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackResources_ = $PackResources$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$CloseableResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CloseableResourceManager$$Type = ($CloseableResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CloseableResourceManager_ = $CloseableResourceManager$$Type;
}
}

declare module "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerGamePacketListenerImpl$$Type = ($ServerGamePacketListenerImpl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerGamePacketListenerImpl_ = $ServerGamePacketListenerImpl$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceProvider" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceProvider$$Type = ($ResourceProvider | ((arg0: $ResourceLocation) => $Optional$$Type<$Resource$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceProvider_ = $ResourceProvider$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerFunctionManager$$Type = ($ServerFunctionManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerFunctionManager_ = $ServerFunctionManager$$Type;
}
}

declare module "packages/net/minecraft/server/packs/$PackType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackType$$Type = ($PackType | ("client_resources" | "server_data"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackType_ = $PackType$$Type;
}
}

declare module "packages/net/minecraft/server/level/$BlockDestructionProgress" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockDestructionProgress$$Type = ($BlockDestructionProgress);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockDestructionProgress_ = $BlockDestructionProgress$$Type;
}
}

declare module "packages/net/minecraft/server/level/$TicketType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TicketType$$Type<T> = ($TicketType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TicketType_<T> = $TicketType$$Type<T>;
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackRepository" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackRepository$$Type = ($PackRepository);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackRepository_ = $PackRepository$$Type;
}
}

declare module "packages/net/minecraft/server/players/$IpBanList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IpBanList$$Type = ($IpBanList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IpBanList_ = $IpBanList$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener" {
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceManagerReloadListener$$Type = ($ResourceManagerReloadListener | ((arg0: $ResourceManager) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceManagerReloadListener_ = $ResourceManagerReloadListener$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pack$$Type = ($Pack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pack_ = $Pack$$Type;
}
}

declare module "packages/net/minecraft/server/$PlayerAdvancements" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerAdvancements$$Type = ($PlayerAdvancements);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerAdvancements_ = $PlayerAdvancements$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerFunctionLibrary" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerFunctionLibrary$$Type = ($ServerFunctionLibrary);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerFunctionLibrary_ = $ServerFunctionLibrary$$Type;
}
}

declare module "packages/net/minecraft/server/players/$ServerOpListEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerOpListEntry$$Type = ($ServerOpListEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerOpListEntry_ = $ServerOpListEntry$$Type;
}
}

declare module "packages/net/minecraft/server/players/$ServerOpList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerOpList$$Type = ($ServerOpList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerOpList_ = $ServerOpList$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerScoreboard" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerScoreboard$$Type = ($ServerScoreboard);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerScoreboard_ = $ServerScoreboard$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResourceManager$$Type = ($ResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResourceManager_ = $ResourceManager$$Type;
}
}

declare module "packages/net/minecraft/server/network/$ServerPlayerConnection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayerConnection$$Type = ($ServerPlayerConnection);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayerConnection_ = $ServerPlayerConnection$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$MultiPackResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultiPackResourceManager$$Type = ($MultiPackResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultiPackResourceManager_ = $MultiPackResourceManager$$Type;
}
}

declare module "packages/net/minecraft/server/network/$TextFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TextFilter$$Type = ($TextFilter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TextFilter_ = $TextFilter$$Type;
}
}

declare module "packages/net/minecraft/server/players/$GameProfileCache$GameProfileInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameProfileCache$GameProfileInfo$$Type = ($GameProfileCache$GameProfileInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameProfileCache$GameProfileInfo_ = $GameProfileCache$GameProfileInfo$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager$QueuedCommand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerFunctionManager$QueuedCommand$$Type = ($ServerFunctionManager$QueuedCommand);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerFunctionManager$QueuedCommand_ = $ServerFunctionManager$QueuedCommand$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleJsonResourceReloadListener$$Type = ($SimpleJsonResourceReloadListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleJsonResourceReloadListener_ = $SimpleJsonResourceReloadListener$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ServerBossEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerBossEvent$$Type = ($ServerBossEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerBossEvent_ = $ServerBossEvent$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkHolder$$Type = ($ChunkHolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkHolder_ = $ChunkHolder$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$ReloadableResourceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ReloadableResourceManager$$Type = ($ReloadableResourceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ReloadableResourceManager_ = $ReloadableResourceManager$$Type;
}
}

declare module "packages/net/minecraft/server/players/$PlayerList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerList$$Type = ($PlayerList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerList_ = $PlayerList$$Type;
}
}

declare module "packages/net/minecraft/server/players/$UserWhiteList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserWhiteList$$Type = ($UserWhiteList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserWhiteList_ = $UserWhiteList$$Type;
}
}

declare module "packages/net/minecraft/server/$MinecraftServer$ServerResourcePackInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftServer$ServerResourcePackInfo$$Type = ($MinecraftServer$ServerResourcePackInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftServer$ServerResourcePackInfo_ = $MinecraftServer$ServerResourcePackInfo$$Type;
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$LevelChangeListener" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $IntSupplier } from "packages/java/util/function/$IntSupplier"
import { $IntConsumer } from "packages/java/util/function/$IntConsumer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChunkHolder$LevelChangeListener$$Type = ($ChunkHolder$LevelChangeListener | ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: integer, arg3: $IntConsumer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChunkHolder$LevelChangeListener_ = $ChunkHolder$LevelChangeListener$$Type;
}
}

declare module "packages/net/minecraft/server/$MinecraftServer$ReloadableResources" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftServer$ReloadableResources$$Type = ($MinecraftServer$ReloadableResources);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftServer$ReloadableResources_ = $MinecraftServer$ReloadableResources$$Type;
}
}

declare module "packages/net/minecraft/server/network/$ServerConnectionListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerConnectionListener$$Type = ($ServerConnectionListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerConnectionListener_ = $ServerConnectionListener$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$FallbackResourceManager$PackEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FallbackResourceManager$PackEntry$$Type = ($FallbackResourceManager$PackEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FallbackResourceManager$PackEntry_ = $FallbackResourceManager$PackEntry$$Type;
}
}

declare module "packages/net/minecraft/server/$ServerAdvancementManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerAdvancementManager$$Type = ($ServerAdvancementManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerAdvancementManager_ = $ServerAdvancementManager$$Type;
}
}

declare module "packages/net/minecraft/server/$WorldStem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WorldStem$$Type = ($WorldStem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WorldStem_ = $WorldStem$$Type;
}
}

declare module "packages/net/minecraft/server/players/$UserWhiteListEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UserWhiteListEntry$$Type = ($UserWhiteListEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UserWhiteListEntry_ = $UserWhiteListEntry$$Type;
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pack$Position$$Type = ($Pack$Position | ("top" | "bottom"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pack$Position_ = $Pack$Position$$Type;
}
}

declare module "packages/net/minecraft/server/packs/resources/$IoSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IoSupplier$$Type<T> = ($IoSupplier<T> | (() => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IoSupplier_<T> = $IoSupplier$$Type<T>;
}
}

