declare module "packages/net/minecraft/server/players/$StoredUserList" {
import { $StoredUserEntry, $StoredUserEntry$$Type } from "packages/net/minecraft/server/players/$StoredUserEntry"
import { $File, $File$$Type } from "packages/java/io/$File"
import { $Collection } from "packages/java/util/$Collection"

export class $StoredUserList<K, V extends $StoredUserEntry<K>> {
constructor(file0: $File$$Type)

public "add"(v0: V): void
public "get"(k0: K): V
public "getEntries"(): $Collection<V>
public "getFile"(): $File
public "getUserList"(): string[]
public "isEmpty"(): boolean
public "load"(): void
public "remove"(k0: K): void
public "remove"(storedUserEntry0: $StoredUserEntry$$Type<K>): void
public "save"(): void
get "entries"(): $Collection<V>
get "file"(): $File
get "userList"(): string[]
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/server/$ReloadableServerResources" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $RegistryAccess$Frozen$$Type } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $ServerAdvancementManager } from "packages/net/minecraft/server/$ServerAdvancementManager"
import { $ServerFunctionLibrary } from "packages/net/minecraft/server/$ServerFunctionLibrary"
import { $ICondition$IContext } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Commands$CommandSelection$$Type } from "packages/net/minecraft/commands/$Commands$CommandSelection"
import { $Commands } from "packages/net/minecraft/commands/$Commands"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $RecipeManager } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $TagManager } from "packages/net/minecraft/tags/$TagManager"
import { $List } from "packages/java/util/$List"
import { $LootDataManager } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

/** @deprecated */
export class $ReloadableServerResources {
readonly "tagManager": $TagManager

constructor(frozen0: $RegistryAccess$Frozen$$Type, featureFlagSet1: $FeatureFlagSet$$Type, commandSelection2: $Commands$CommandSelection$$Type, int3: integer)

public "getAdvancements"(): $ServerAdvancementManager
public "getCommands"(): $Commands
public "getConditionContext"(): $ICondition$IContext
public "getFunctionLibrary"(): $ServerFunctionLibrary
public "getLootData"(): $LootDataManager
public "getRecipeManager"(): $RecipeManager
public "handler$deg000$placebo_listeners"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public "handler$egh000$updateRegistryTags"(registryAccess: $RegistryAccess$$Type, ci: $CallbackInfo$$Type): void
public "handler$eil000$injectRecipes"(registryAccess0: $RegistryAccess$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "listeners"(): $List<$PreparableReloadListener>
public static "loadResources"(resourceManager0: $ResourceManager$$Type, frozen1: $RegistryAccess$Frozen$$Type, featureFlagSet2: $FeatureFlagSet$$Type, commandSelection3: $Commands$CommandSelection$$Type, int4: integer, executor5: $Executor$$Type, executor6: $Executor$$Type): $CompletableFuture<$ReloadableServerResources>
public "updateRegistryTags"(registryAccess0: $RegistryAccess$$Type): void
get "advancements"(): $ServerAdvancementManager
get "commands"(): $Commands
get "conditionContext"(): $ICondition$IContext
get "functionLibrary"(): $ServerFunctionLibrary
get "lootData"(): $LootDataManager
get "recipeManager"(): $RecipeManager
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$Info" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Record } from "packages/java/lang/$Record"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $PackCompatibility } from "packages/net/minecraft/server/packs/repository/$PackCompatibility"

export class $Pack$Info extends $Record {
constructor(component0: $Component$$Type, int1: integer, featureFlagSet2: $FeatureFlagSet$$Type)
constructor(description: $Component$$Type, dataFormat: integer, resourceFormat: integer, requestedFeatures: $FeatureFlagSet$$Type, hidden: boolean)

public "compatibility"(packType0: $PackType$$Type): $PackCompatibility
public "dataFormat"(): integer
public "description"(): $Component
public "getFormat"(packType0: $PackType$$Type): integer
public "hidden"(): boolean
public "requestedFeatures"(): $FeatureFlagSet
public "resourceFormat"(): integer
}
}

declare module "packages/net/minecraft/server/level/$FullChunkStatus" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
static readonly "BLOCK_TICKING": $FullChunkStatus
static readonly "ENTITY_TICKING": $FullChunkStatus
static readonly "FULL": $FullChunkStatus
static readonly "INACCESSIBLE": $FullChunkStatus

public "isOrAfter"(fullChunkStatus0: $FullChunkStatus$$Type): boolean
public static "valueOf"(string0: string): $FullChunkStatus
public static "values"(): $FullChunkStatus[]
}
}

declare module "packages/net/minecraft/server/$TickTask" {
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $TickTask implements $Runnable {
constructor(int0: integer, runnable1: $Runnable$$Type)

public "getTick"(): integer
public "run"(): void
get "tick"(): integer
}
}

declare module "packages/net/minecraft/server/level/$ChunkMap$TrackedEntity" {
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $List$$Type } from "packages/java/util/$List"
import { $ChunkMapAccessor$TrackedEntityAccessor } from "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor$TrackedEntityAccessor"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ChunkMap$TrackedEntity implements $ChunkMapAccessor$TrackedEntityAccessor {
constructor(chunkMap0: $ChunkMap$$Type, entity1: $Entity$$Type, int2: integer, int3: integer, boolean4: boolean)

public "broadcast"(packet0: $Packet$$Type<any>): void
public "broadcastAndSend"(packet0: $Packet$$Type<any>): void
public "broadcastRemoved"(): void
public "localvar$dkb000$railways$securitycraft$modifyFlag"(original: boolean): boolean
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "updatePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "updatePlayers"(list0: $List$$Type<$ServerPlayer$$Type>): void
}
}

declare module "packages/net/minecraft/server/players/$IpBanListEntry" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Date$$Type } from "packages/java/util/$Date"
import { $BanListEntry } from "packages/net/minecraft/server/players/$BanListEntry"

export class $IpBanListEntry extends $BanListEntry<string> {
constructor(jsonObject0: $JsonObject$$Type)
constructor(string0: string, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)
constructor(string0: string)

}
}

declare module "packages/net/minecraft/server/players/$UserBanListEntry" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Date$$Type } from "packages/java/util/$Date"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $BanListEntry } from "packages/net/minecraft/server/players/$BanListEntry"

export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
constructor(jsonObject0: $JsonObject$$Type)
constructor(gameProfile0: $GameProfile$$Type, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)
constructor(gameProfile0: $GameProfile$$Type)

}
}

declare module "packages/net/minecraft/server/level/$ChunkMap" {
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $ChunkStatusUpdateListener$$Type } from "packages/net/minecraft/world/level/entity/$ChunkStatusUpdateListener"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $ChunkGenerator$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LightChunkGetter$$Type } from "packages/net/minecraft/world/level/chunk/$LightChunkGetter"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ReportedException } from "packages/net/minecraft/$ReportedException"
import { $ChunkProgressListener$$Type } from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"
import { $LevelChunk } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $ChunkHolder, $ChunkHolder$$Type } from "packages/net/minecraft/server/level/$ChunkHolder"
import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectLinkedOpenHashMap$$Type } from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectLinkedOpenHashMap"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $DistanceManager } from "packages/net/minecraft/server/level/$DistanceManager"
import { $BlockableEventLoop, $BlockableEventLoop$$Type } from "packages/net/minecraft/util/thread/$BlockableEventLoop"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $DimensionDataStorage } from "packages/net/minecraft/world/level/storage/$DimensionDataStorage"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $IllegalStateException$$Type } from "packages/java/lang/$IllegalStateException"
import { $ChunkMapAccess } from "packages/snownee/lychee/mixin/$ChunkMapAccess"
import { $StructureTemplateManager$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $ChunkStorage } from "packages/net/minecraft/world/level/chunk/storage/$ChunkStorage"
import { $ChunkHolder$PlayerProvider } from "packages/net/minecraft/server/level/$ChunkHolder$PlayerProvider"
import { $ChunkMapAccessor } from "packages/com/railwayteam/railways/forge/mixin/$ChunkMapAccessor"
import { $ChunkMapAccessor as $ChunkMapAccessor$0 } from "packages/net/dries007/tfc/mixin/accessor/$ChunkMapAccessor"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"
import { $ChunkHolder$ChunkLoadingFailure } from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $ChunkMapAccessor$0, $ChunkMapAccessor, $ChunkMapAccess {
static readonly "FORCED_TICKET_LEVEL": integer
static readonly "MAX_VIEW_DISTANCE": integer
readonly "mainThreadExecutor": $BlockableEventLoop<$Runnable>
readonly "pendingUnloads": $Long2ObjectLinkedOpenHashMap<$ChunkHolder>
readonly "updatingChunkMap": $Long2ObjectLinkedOpenHashMap<$ChunkHolder>

constructor(serverLevel0: $ServerLevel$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer2: $DataFixer$$Type, structureTemplateManager3: $StructureTemplateManager$$Type, executor4: $Executor$$Type, blockableEventLoop5: $BlockableEventLoop$$Type<$Runnable$$Type>, lightChunkGetter6: $LightChunkGetter$$Type, chunkGenerator7: $ChunkGenerator$$Type, chunkProgressListener8: $ChunkProgressListener$$Type, chunkStatusUpdateListener9: $ChunkStatusUpdateListener$$Type, supplier10: $Supplier$$Type<$DimensionDataStorage>, int11: integer, boolean12: boolean)

public "broadcast"(entity0: $Entity$$Type, packet1: $Packet$$Type<any>): void
public "debugFuturesAndCreateReportedException"(illegalStateException0: $IllegalStateException$$Type, string1: string): $ReportedException
public "debugReloadGenerator"(): void
public "getChunkDebugData"(chunkPos0: $ChunkPos$$Type): string
public "getChunks"(): $Iterable<$ChunkHolder>
public "getDistanceManager"(): $DistanceManager
public "getPlayers"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): $List<$ServerPlayer>
public "getPlayersCloseForSpawning"(chunkPos0: $ChunkPos$$Type): $List<$ServerPlayer>
public "getStorageName"(): string
public "getTickingGenerated"(): integer
public "getUpdatingChunkIfPresent"(long0: long): $ChunkHolder
public "getVisibleChunkIfPresent"(long0: long): $ChunkHolder
public "hasWork"(): boolean
public static "isChunkInRange"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): boolean
public "move"(serverPlayer0: $ServerPlayer$$Type): void
public "prepareAccessibleChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "prepareEntityTickingChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "prepareTickingChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "resendBiomesForChunks"(list0: $List$$Type<$ChunkAccess$$Type>): void
public "schedule"(chunkHolder0: $ChunkHolder$$Type, chunkStatus1: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "size"(): integer
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
get "visibleChunkMap"(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>
set "visibleChunkMap"(value: $Long2ObjectLinkedOpenHashMap$$Type<$ChunkHolder$$Type>)
get "chunks"(): $Iterable<$ChunkHolder>
get "distanceManager"(): $DistanceManager
get "storageName"(): string
get "tickingGenerated"(): integer
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackCompatibility" {
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $PackCompatibility extends $Enum<$PackCompatibility> {
static readonly "COMPATIBLE": $PackCompatibility
static readonly "TOO_NEW": $PackCompatibility
static readonly "TOO_OLD": $PackCompatibility

public static "forFormat"(int0: integer, packType1: $PackType$$Type): $PackCompatibility
public "getConfirmation"(): $Component
public "getDescription"(): $Component
public "isCompatible"(): boolean
public static "valueOf"(string0: string): $PackCompatibility
public static "values"(): $PackCompatibility[]
get "confirmation"(): $Component
get "description"(): $Component
get "compatible"(): boolean
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackSource" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $UnaryOperator, $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"

export interface $PackSource {
"decorate"(component0: $Component$$Type): $Component
"shouldAddAutomatically"(): boolean
}

export namespace $PackSource {
const BUILT_IN: $PackSource
const DEFAULT: $PackSource
const FEATURE: $PackSource
const NO_DECORATION: $UnaryOperator<$Component>
const SERVER: $PackSource
const WORLD: $PackSource
function create(unaryOperator0: $UnaryOperator$$Type<$Component$$Type>, boolean1: boolean): $PackSource
}
export abstract class $PackSource$$Static implements $PackSource {
static readonly "BUILT_IN": $PackSource
static readonly "DEFAULT": $PackSource
static readonly "FEATURE": $PackSource
static readonly "NO_DECORATION": $UnaryOperator<$Component>
static readonly "SERVER": $PackSource
static readonly "WORLD": $PackSource

static "create"(unaryOperator0: $UnaryOperator$$Type<$Component$$Type>, boolean1: boolean): $PackSource
}
}

declare module "packages/net/minecraft/server/level/$ServerPlayerGameMode" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ServerPlayerGameModeAccessor } from "packages/vazkii/botania/mixin/$ServerPlayerGameModeAccessor"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ServerboundPlayerActionPacket$Action$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket$Action"

export class $ServerPlayerGameMode implements $ServerPlayerGameModeAccessor {
constructor(serverPlayer0: $ServerPlayer$$Type)

public "changeGameModeForPlayer"(gameType0: $GameType$$Type): boolean
public "destroyAndAck"(blockPos0: $BlockPos$$Type, int1: integer, string2: string): void
public "destroyBlock"(blockPos0: $BlockPos$$Type): boolean
public "getGameModeForPlayer"(): $GameType
public "getPreviousGameModeForPlayer"(): $GameType
public "handleBlockBreakAction"(blockPos0: $BlockPos$$Type, action1: $ServerboundPlayerActionPacket$Action$$Type, direction2: $Direction$$Type, int3: integer, int4: integer): void
public "isCreative"(): boolean
public "isSurvival"(): boolean
public "setLevel"(serverLevel0: $ServerLevel$$Type): void
public "tick"(): void
public "useItem"(serverPlayer0: $ServerPlayer$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResult
public "useItemOn"(serverPlayer0: $ServerPlayer$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type, interactionHand3: $InteractionHand$$Type, blockHitResult4: $BlockHitResult$$Type): $InteractionResult
get "isDestroyingBlock"(): boolean
set "isDestroyingBlock"(value: boolean)
get "gameModeForPlayer"(): $GameType
get "previousGameModeForPlayer"(): $GameType
get "creative"(): boolean
get "survival"(): boolean
set "level"(value: $ServerLevel$$Type)
}
}

declare module "packages/net/minecraft/server/bossevents/$CustomBossEvents" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Collection } from "packages/java/util/$Collection"
import { $CustomBossEvent, $CustomBossEvent$$Type } from "packages/net/minecraft/server/bossevents/$CustomBossEvent"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomBossEvents {
constructor()

public "create"(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type): $CustomBossEvent
public "get"(resourceLocation0: $ResourceLocation$$Type): $CustomBossEvent
public "getEvents"(): $Collection<$CustomBossEvent>
public "getIds"(): $Collection<$ResourceLocation>
public "load"(compoundTag0: $CompoundTag$$Type): void
public "onPlayerConnect"(serverPlayer0: $ServerPlayer$$Type): void
public "onPlayerDisconnect"(serverPlayer0: $ServerPlayer$$Type): void
public "remove"(customBossEvent0: $CustomBossEvent$$Type): void
public "save"(): $CompoundTag
get "events"(): $Collection<$CustomBossEvent>
get "ids"(): $Collection<$ResourceLocation>
}
}

declare module "packages/net/minecraft/server/packs/resources/$PreparableReloadListener" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export interface $PreparableReloadListener {
"getName"(): string
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}

export namespace $PreparableReloadListener {
const probejs$$marker: never
}
export abstract class $PreparableReloadListener$$Static implements $PreparableReloadListener {
}
}

declare module "packages/net/minecraft/server/level/$ChunkTaskPriorityQueueSorter$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkTaskPriorityQueueSorter$Message<T> {
}
}

declare module "packages/net/minecraft/server/packs/repository/$RepositorySource" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Pack$$Type } from "packages/net/minecraft/server/packs/repository/$Pack"

export interface $RepositorySource {
"loadPacks"(consumer0: $Consumer$$Type<$Pack$$Type>): void
}

export namespace $RepositorySource {
const probejs$$marker: never
}
export abstract class $RepositorySource$$Static implements $RepositorySource {
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$ResourcesSupplier" {
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"

export interface $Pack$ResourcesSupplier {
"open"(string0: string): $PackResources
}

export namespace $Pack$ResourcesSupplier {
const probejs$$marker: never
}
export abstract class $Pack$ResourcesSupplier$$Static implements $Pack$ResourcesSupplier {
}
}

declare module "packages/net/minecraft/server/network/$FilteredText" {
import { $FilterMask, $FilterMask$$Type } from "packages/net/minecraft/network/chat/$FilterMask"
import { $Record } from "packages/java/lang/$Record"

export class $FilteredText extends $Record {
static readonly "EMPTY": $FilteredText

constructor(string0: string, filterMask1: $FilterMask$$Type)

public "filtered"(): string
public "filteredOrEmpty"(): string
public static "fullyFiltered"(string0: string): $FilteredText
public "isFiltered"(): boolean
public "mask"(): $FilterMask
public static "passThrough"(string0: string): $FilteredText
public "raw"(): string
}
}

declare module "packages/net/minecraft/server/players/$BanListEntry" {
import { $SimpleDateFormat } from "packages/java/text/$SimpleDateFormat"
import { $StoredUserEntry } from "packages/net/minecraft/server/players/$StoredUserEntry"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Date, $Date$$Type } from "packages/java/util/$Date"

export class $BanListEntry<T> extends $StoredUserEntry<T> {
static readonly "DATE_FORMAT": $SimpleDateFormat
static readonly "EXPIRES_NEVER": string

constructor(t0: T, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)

public "getCreated"(): $Date
public "getDisplayName"(): $Component
public "getExpires"(): $Date
public "getReason"(): string
public "getSource"(): string
get "created"(): $Date
get "displayName"(): $Component
get "expires"(): $Date
get "reason"(): string
get "source"(): string
}
}

declare module "packages/net/minecraft/server/packs/resources/$ReloadInstance" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"

export interface $ReloadInstance {
"checkExceptions"(): void
"done"(): $CompletableFuture<any>
"getActualProgress"(): float
"isDone"(): boolean
get "actualProgress"(): float
}

export namespace $ReloadInstance {
const probejs$$marker: never
}
export abstract class $ReloadInstance$$Static implements $ReloadInstance {
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager$TraceCallbacks" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ServerFunctionManager$TraceCallbacks {
"onCall"(int0: integer, resourceLocation1: $ResourceLocation$$Type, int2: integer): void
"onCommand"(int0: integer, string1: string): void
"onError"(int0: integer, string1: string): void
"onReturn"(int0: integer, string1: string, int2: integer): void
}

export namespace $ServerFunctionManager$TraceCallbacks {
const probejs$$marker: never
}
export abstract class $ServerFunctionManager$TraceCallbacks$$Static implements $ServerFunctionManager$TraceCallbacks {
}
}

declare module "packages/net/minecraft/server/packs/$VanillaPackResources" {
import { $PackResources$ResourceOutput$$Type } from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Collection } from "packages/java/util/$Collection"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Set } from "packages/java/util/$Set"
import { $InputStream } from "packages/java/io/$InputStream"
import { $VanillaPackResourcesAccessor } from "packages/team/creative/creativecore/mixin/$VanillaPackResourcesAccessor"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export class $VanillaPackResources implements $PackResources, $VanillaPackResourcesAccessor {
public "asProvider"(): $ResourceProvider
public "close"(): void
public "getChildren"(): $Collection<$PackResources>
public "getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
public "getNamespaces"(packType0: $PackType$$Type): $Set<string>
public "getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
public "getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
public "isBuiltin"(): boolean
public "isHidden"(): boolean
public "listRawPaths"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type, consumer2: $Consumer$$Type<$Path$$Type>): void
public "listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
public "packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}
}

declare module "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"

export interface $PreparableReloadListener$PreparationBarrier {
"wait"<T>(t0: T): $CompletableFuture<T>
}

export namespace $PreparableReloadListener$PreparationBarrier {
const probejs$$marker: never
}
export abstract class $PreparableReloadListener$PreparationBarrier$$Static implements $PreparableReloadListener$PreparationBarrier {
}
}

declare module "packages/net/minecraft/server/level/$ServerLevel" {
import { $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $SafeBlockGetter } from "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter"
import { $WorldGenLevel } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $IntProvider } from "packages/net/minecraft/util/valueproviders/$IntProvider"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EndDragonFight, $EndDragonFight$$Type } from "packages/net/minecraft/world/level/dimension/end/$EndDragonFight"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $CustomSpawner, $CustomSpawner$$Type } from "packages/net/minecraft/world/level/$CustomSpawner"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $LevelTicks } from "packages/net/minecraft/world/ticks/$LevelTicks"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $StructureManager } from "packages/net/minecraft/world/level/$StructureManager"
import { $ReputationEventHandler$$Type } from "packages/net/minecraft/world/entity/$ReputationEventHandler"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PoiManager } from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager"
import { $StrongholdLocationCache } from "packages/org/embeddedt/modernfix/world/$StrongholdLocationCache"
import { $ChunkProgressListener$$Type } from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"
import { $Structure$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ServerLevelData, $ServerLevelData$$Type } from "packages/net/minecraft/world/level/storage/$ServerLevelData"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $LevelStem$$Type } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $Raids } from "packages/net/minecraft/world/entity/raid/$Raids"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $ProgressListener$$Type } from "packages/net/minecraft/util/$ProgressListener"
import { $LongSet } from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $IWorldMapServerLevel } from "packages/xaero/map/core/$IWorldMapServerLevel"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Entity$RemovalReason$$Type } from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevelAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$ServerLevelAccessor"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerWorldCapabilities, $ServerWorldCapabilities$$Type } from "packages/xaero/map/capabilities/$ServerWorldCapabilities"
import { $EnderDragon } from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ReputationEventType$$Type } from "packages/net/minecraft/world/entity/ai/village/$ReputationEventType"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $ServerLevelKJS } from "packages/dev/latvian/mods/kubejs/core/$ServerLevelKJS"
import { $RandomSequences, $RandomSequences$$Type } from "packages/net/minecraft/world/$RandomSequences"
import { $StructureTemplateManager } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $IServerLevel } from "packages/org/embeddedt/modernfix/duck/$IServerLevel"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $EntityTypeTest$$Type } from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import { $ISafeBlockGetter } from "packages/org/embeddedt/modernfix/duck/$ISafeBlockGetter"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $PersistentEntitySectionManager } from "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ILevelEventRedirect } from "packages/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart/$ILevelEventRedirect"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Stream, $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $MultipartPartsHolder } from "packages/earth/terrarium/adastra/common/entities/multipart/$MultipartPartsHolder"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $PortalForcer } from "packages/net/minecraft/world/level/portal/$PortalForcer"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $DimensionDataStorage } from "packages/net/minecraft/world/level/storage/$DimensionDataStorage"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $Raid } from "packages/net/minecraft/world/entity/raid/$Raid"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"

export class $ServerLevel extends $Level implements $WorldGenLevel, $ISafeBlockGetter, $IServerLevel, $MultipartPartsHolder, $IWorldMapServerLevel, $ServerLevelKJS, $ILevelEventRedirect, $ServerLevelAccessor {
static readonly "END_SPAWN_POINT": $BlockPos
static readonly "RAIN_DELAY": $IntProvider
static readonly "RAIN_DURATION": $IntProvider
static readonly "THUNDER_DURATION": $IntProvider
readonly "entityManager": $PersistentEntitySectionManager<$Entity>
readonly "serverLevelData": $ServerLevelData

constructor(minecraftServer0: $MinecraftServer$$Type, executor1: $Executor$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, serverLevelData3: $ServerLevelData$$Type, resourceKey4: $ResourceKey$$Type<$Level>, levelStem5: $LevelStem$$Type, chunkProgressListener6: $ChunkProgressListener$$Type, boolean7: boolean, long8: long, list9: $List$$Type<$CustomSpawner$$Type>, boolean10: boolean, randomSequences11: $RandomSequences$$Type)

public "adastra$getParts"(): $Int2ObjectMap<$Entity>
public "addDuringCommandTeleport"(serverPlayer0: $ServerPlayer$$Type): void
public "addDuringPortalTeleport"(serverPlayer0: $ServerPlayer$$Type): void
public "addDuringTeleport"(entity0: $Entity$$Type): void
public "addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
public "addLegacyChunkEntities"(stream0: $Stream$$Type<$Entity$$Type>): void
public "addNewPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "addRespawnedPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "addWithUUID"(entity0: $Entity$$Type): boolean
public "addWorldGenChunkEntities"(stream0: $Stream$$Type<$Entity$$Type>): void
public "areEntitiesLoaded"(long0: long): boolean
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "canSleepThroughNights"(): boolean
public "clearBlockEvents"(boundingBox0: $BoundingBox$$Type): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "ensureCanWrite"(blockPos0: $BlockPos$$Type): boolean
public "findClosestBiome3d"(predicate0: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, int4: integer): $Pair<$BlockPos, $Holder<$Biome>>
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findNearestMapStructure"(tagKey0: $TagKey$$Type<$Structure$$Type>, blockPos1: $BlockPos$$Type, int2: integer, boolean3: boolean): $BlockPos
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "getAllEntities"(): $Iterable<$Entity>
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDataStorage"(): $DimensionDataStorage
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getDragonFight"(): $EndDragonFight
public "getDragons"(): $List<$EnderDragon>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>): $List<T>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>, list2: $List$$Type<T>): void
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>, list2: $List$$Type<T>, int3: integer): void
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntity"(uUID0: $UUID$$Type): $Entity
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
/** @deprecated */
public "getEntityOrPart"(int0: integer): $Entity
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidTicks"(): $LevelTicks<$Fluid>
public "getForcedChunks"(): $LongSet
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLevel"(): $ServerLevel
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLogicalHeight"(): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPersistentData"(): $CompoundTag
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(predicate0: $Predicate$$Type<$ServerPlayer$$Type>): $List<$ServerPlayer>
public "getPlayers"(predicate0: $Predicate$$Type<$ServerPlayer$$Type>, int1: integer): $List<$ServerPlayer>
public "getPlayers"(): $EntityArrayList
public "getPoiManager"(): $PoiManager
public "getPortalForcer"(): $PortalForcer
public "getRaidAt"(blockPos0: $BlockPos$$Type): $Raid
public "getRaids"(): $Raids
public "getRandomPlayer"(): $ServerPlayer
public "getRandomSequence"(resourceLocation0: $ResourceLocation$$Type): $RandomSource
public "getRandomSequences"(): $RandomSequences
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getSeed"(): long
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getStructureManager"(): $StructureTemplateManager
public "getTimeOfDay"(float0: float): float
public "getWatchdogStats"(): string
public "getXaero_wm_capabilities"(): $ServerWorldCapabilities
public "handler$cpf000$immersiveMelodies$injectTickEntity"(entity: $Entity$$Type, ci: $CallbackInfo$$Type): void
public "handler$cpf000$immersiveMelodies$injectTickPassenger"(entity: $Entity$$Type, passenger: $Entity$$Type, ci: $CallbackInfo$$Type): void
public "handler$daj000$adastra$init"(server: $MinecraftServer$$Type, dispatcher: $Executor$$Type, levelStorageAccess: $LevelStorageSource$LevelStorageAccess$$Type, serverLevelData: $ServerLevelData$$Type, dimension: $ResourceKey$$Type<any>, levelStem: $LevelStem$$Type, progressListener: $ChunkProgressListener$$Type, isDebug: boolean, biomeZoomSeed: long, customSpawners: $List$$Type<any>, tickTime: boolean, randomSequences: $RandomSequences$$Type, ci: $CallbackInfo$$Type): void
public "handler$daj000$adastra$tick"(hasTimeLeft: $BooleanSupplier$$Type, ci: $CallbackInfo$$Type): void
public "handler$daj000$tickChunk"(chunk: $LevelChunk$$Type, randomTickSpeed: integer, ci: $CallbackInfo$$Type): void
public "handler$emm000$wireBlockCallback"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type, int3: integer, callbackInfo4: $CallbackInfo$$Type): void
public "handler$zcj000$onIsPositionEntityTicking"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type<any>): void
public "handler$zcj000$preTick"(booleanSupplier0: $BooleanSupplier$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isCloseToVillage"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isFlat"(): boolean
public "isHandlingTick"(): boolean
public "isNaturalSpawningAllowed"(chunkPos0: $ChunkPos$$Type): boolean
public "isNaturalSpawningAllowed"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isPositionEntityTicking"(blockPos0: $BlockPos$$Type): boolean
public "isRaided"(blockPos0: $BlockPos$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isVillage"(blockPos0: $BlockPos$$Type): boolean
public "isVillage"(sectionPos0: $SectionPos$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeObsidianPlatform"(serverLevel0: $ServerLevel$$Type): void
public "mfix$getSafeBlockGetter"(): $SafeBlockGetter
public "mfix$getStrongholdCache"(): $StrongholdLocationCache
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "onReputationEvent"(reputationEventType0: $ReputationEventType$$Type, entity1: $Entity$$Type, reputationEventHandler2: $ReputationEventHandler$$Type): void
public "onStructureStartsAvailable"(chunkAccess0: $ChunkAccess$$Type): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "removePlayerImmediately"(serverPlayer0: $ServerPlayer$$Type, removalReason1: $Entity$RemovalReason$$Type): void
public "resetEmptyTime"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "save"(progressListener0: $ProgressListener$$Type, boolean1: boolean, boolean2: boolean): void
public "saveDebugReport"(path0: $Path$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "sectionsToVillage"(sectionPos0: $SectionPos$$Type): integer
public "sendParticles"<T extends $ParticleOptions>(t0: T, double1: double, double2: double, double3: double, int4: integer, double5: double, double6: double, double7: double, double8: double): integer
public "sendParticles"<T extends $ParticleOptions>(serverPlayer0: $ServerPlayer$$Type, t1: T, boolean2: boolean, double3: double, double4: double, double5: double, int6: integer, double7: double, double8: double, double9: double, double10: double): boolean
public "setChunkForced"(int0: integer, int1: integer, boolean2: boolean): boolean
public "setCurrentlyGenerating"(supplier0: $Supplier$$Type<string>): void
public "setDayTime"(long0: long): void
public "setDefaultSpawnPos"(blockPos0: $BlockPos$$Type, float1: float): void
/** @deprecated */
public "setDragonFight"(endDragonFight0: $EndDragonFight$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTime"(time: long): void
public "setWeatherParameters"(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean): void
public "setXaero_wm_capabilities"(serverWorldCapabilities0: $ServerWorldCapabilities$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean): void
public "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean, player: $ServerPlayer$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "startTickingChunk"(levelChunk0: $LevelChunk$$Type): void
public "structureManager"(): $StructureManager
public "supp$setRedirected"(redirected: boolean, id: $Vec3$$Type): void
public static "supp$tryRedirect"(serverLevel: $ServerLevel$$Type, pPlayer: $Player$$Type, vec3: $Vec3$$Type, pType: integer, pPos: $BlockPos$$Type, pData: integer): boolean
public "tell"(message: $Component$$Type): void
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickChunk"(levelChunk0: $LevelChunk$$Type, int1: integer): void
public "tickCustomSpawners"(boolean0: boolean, boolean1: boolean): void
public "tickNonPassenger"(entity0: $Entity$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "tryAddFreshEntityWithPassengers"(entity0: $Entity$$Type): boolean
public "unload"(levelChunk0: $LevelChunk$$Type): void
public "updateSleepingPlayerList"(): void
get "customSpawners"(): $List<$CustomSpawner>
set "customSpawners"(value: $List$$Type<$CustomSpawner$$Type>)
get "noSave"(): boolean
set "noSave"(value: boolean)
get "xaero_wm_capabilities"(): $ServerWorldCapabilities
set "xaero_wm_capabilities"(value: $ServerWorldCapabilities$$Type)
get "allEntities"(): $Iterable<$Entity>
get "dataStorage"(): $DimensionDataStorage
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "dragonFight"(): $EndDragonFight
get "dragons"(): $List<$EnderDragon>
get "entities"(): $EntityArrayList
get "fluidTicks"(): $LevelTicks<$Fluid>
get "forcedChunks"(): $LongSet
get "height"(): integer
get "level"(): $ServerLevel
get "logicalHeight"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "poiManager"(): $PoiManager
get "portalForcer"(): $PortalForcer
get "raids"(): $Raids
get "randomPlayer"(): $ServerPlayer
get "randomSequences"(): $RandomSequences
get "sectionsCount"(): integer
get "seed"(): long
get "side"(): $ScriptType
get "watchdogStats"(): string
get "flat"(): boolean
get "handlingTick"(): boolean
get "overworld"(): boolean
set "currentlyGenerating"(value: $Supplier$$Type<string>)
set "dragonFight"(value: $EndDragonFight$$Type)
set "statusMessage"(value: $Component$$Type)
set "time"(value: long)
}
}

declare module "packages/net/minecraft/server/$MinecraftServer" {
import { $Proxy, $Proxy$$Type } from "packages/java/net/$Proxy"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $ServerAdvancementManager } from "packages/net/minecraft/server/$ServerAdvancementManager"
import { $PlayerList, $PlayerList$$Type } from "packages/net/minecraft/server/players/$PlayerList"
import { $SystemReport, $SystemReport$$Type } from "packages/net/minecraft/$SystemReport"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $TextFilter } from "packages/net/minecraft/server/network/$TextFilter"
import { $ScheduledEvents } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents"
import { $ServerScoreboard } from "packages/net/minecraft/server/$ServerScoreboard"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $LevelSettings } from "packages/net/minecraft/world/level/$LevelSettings"
import { $Thread, $Thread$$Type } from "packages/java/lang/$Thread"
import { $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $IMinecraftServer } from "packages/xaero/map/server/$IMinecraftServer"
import { $AttachedData } from "packages/dev/latvian/mods/kubejs/util/$AttachedData"
import { $MinecraftServer$ServerResourcePackInfo } from "packages/net/minecraft/server/$MinecraftServer$ServerResourcePackInfo"
import { $LevelResource$$Type } from "packages/net/minecraft/world/level/storage/$LevelResource"
import { $ChatDecorator } from "packages/net/minecraft/network/chat/$ChatDecorator"
import { $WorldData } from "packages/net/minecraft/world/level/storage/$WorldData"
import { $Optional } from "packages/java/util/$Optional"
import { $MinecraftSessionService } from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IOpenPACMinecraftServer } from "packages/xaero/pac/common/server/$IOpenPACMinecraftServer"
import { $LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $CommandStorage } from "packages/net/minecraft/world/level/storage/$CommandStorage"
import { $LayeredRegistryAccess } from "packages/net/minecraft/core/$LayeredRegistryAccess"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProfilerFiller } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $ReentrantBlockableEventLoop } from "packages/net/minecraft/util/thread/$ReentrantBlockableEventLoop"
import { $WorldStem$$Type } from "packages/net/minecraft/server/$WorldStem"
import { $GameRules } from "packages/net/minecraft/world/level/$GameRules"
import { $ScheduledEvents$Callback$$Type } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$Callback"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $IMinecraftServer as $IMinecraftServer$0 } from "packages/xaero/common/server/$IMinecraftServer"
import { $IServerDataAPI, $IServerDataAPI$$Type } from "packages/xaero/pac/common/server/$IServerDataAPI"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ModCheck } from "packages/net/minecraft/util/$ModCheck"
import { $AdvancementJS } from "packages/dev/latvian/mods/kubejs/player/$AdvancementJS"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $LootDataManager } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $MinecraftServer$ReloadableResources, $MinecraftServer$ReloadableResources$$Type } from "packages/net/minecraft/server/$MinecraftServer$ReloadableResources"
import { $PlayerDataStorage, $PlayerDataStorage$$Type } from "packages/net/minecraft/world/level/storage/$PlayerDataStorage"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SignatureValidator } from "packages/net/minecraft/util/$SignatureValidator"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $TemporalAmount$$Type } from "packages/java/time/temporal/$TemporalAmount"
import { $ServerConnectionListener } from "packages/net/minecraft/server/network/$ServerConnectionListener"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ServerStatus } from "packages/net/minecraft/network/protocol/status/$ServerStatus"
import { $WorldDataConfiguration } from "packages/net/minecraft/world/level/$WorldDataConfiguration"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $Services$$Type } from "packages/net/minecraft/server/$Services"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $KeyPair } from "packages/java/security/$KeyPair"
import { $ServerPlayerGameMode } from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $MinecraftServerData, $MinecraftServerData$$Type } from "packages/xaero/common/server/$MinecraftServerData"
import { $ProfileResults, $ProfileResults$$Type } from "packages/net/minecraft/util/profiling/$ProfileResults"
import { $ModifiableTickRateServer } from "packages/com/github/alexthe666/citadel/server/world/$ModifiableTickRateServer"
import { $PlayerSelector$$Type } from "packages/dev/latvian/mods/kubejs/core/$PlayerSelector"
import { $StructureTemplateManager } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplateManager"
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$CloseableResourceManager"
import { $RecipeManager } from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import { $FrameTimer } from "packages/net/minecraft/util/$FrameTimer"
import { $RegistryLayer } from "packages/net/minecraft/server/$RegistryLayer"
import { $GameProfileRepository } from "packages/com/mojang/authlib/$GameProfileRepository"
import { $DataFixer, $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"
import { $ChunkProgressListenerFactory$$Type } from "packages/net/minecraft/server/level/progress/$ChunkProgressListenerFactory"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $MinecraftServerData as $MinecraftServerData$0, $MinecraftServerData$$Type as $MinecraftServerData$0$$Type } from "packages/xaero/map/server/$MinecraftServerData"
import { $CrashReport$$Type } from "packages/net/minecraft/$CrashReport"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $File } from "packages/java/io/$File"
import { $TickTask, $TickTask$$Type } from "packages/net/minecraft/server/$TickTask"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $GameType, $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PackRepository, $PackRepository$$Type } from "packages/net/minecraft/server/packs/repository/$PackRepository"
import { $GameProfileCache } from "packages/net/minecraft/server/players/$GameProfileCache"
import { $RegistryAccess$Frozen } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $CommandSource } from "packages/net/minecraft/commands/$CommandSource"
import { $Commands } from "packages/net/minecraft/commands/$Commands"
import { $ITimeTrackingServer } from "packages/org/embeddedt/modernfix/duck/$ITimeTrackingServer"
import { $Set } from "packages/java/util/$Set"
import { $DataPackConfig$$Type } from "packages/net/minecraft/world/level/$DataPackConfig"
import { $MinecraftServerKJS } from "packages/dev/latvian/mods/kubejs/core/$MinecraftServerKJS"
import { $Exception$$Type } from "packages/java/lang/$Exception"
import { $CustomBossEvents } from "packages/net/minecraft/server/bossevents/$CustomBossEvents"
import { $ScheduledEvents$ScheduledEvent } from "packages/dev/latvian/mods/kubejs/util/$ScheduledEvents$ScheduledEvent"
import { $Map } from "packages/java/util/$Map"
import { $ServerFunctionManager } from "packages/net/minecraft/server/$ServerFunctionManager"

export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $CommandSource, $AutoCloseable, $IOpenPACMinecraftServer, $ITimeTrackingServer, $IMinecraftServer$0, $IMinecraftServer, $ModifiableTickRateServer, $MinecraftServerKJS {
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
static readonly "DEMO_SETTINGS": $LevelSettings
static readonly "MS_PER_TICK": integer
static readonly "START_CHUNK_RADIUS": integer
static readonly "VANILLA_BRAND": string
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
readonly "tickTimes": long[]

constructor(thread0: $Thread$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, packRepository2: $PackRepository$$Type, worldStem3: $WorldStem$$Type, proxy4: $Proxy$$Type, dataFixer5: $DataFixer$$Type, services6: $Services$$Type, chunkProgressListenerFactory7: $ChunkProgressListenerFactory$$Type)

public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "addTickable"(runnable0: $Runnable$$Type): void
public "alwaysAccepts"(): boolean
public "areNpcsEnabled"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $TickTask>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $TickTask>): $CompletableFuture<Source>
public "cancelRecordingMetrics"(): void
public static "configurePackRepository"(packRepository0: $PackRepository$$Type, dataPackConfig1: $DataPackConfig$$Type, boolean2: boolean, featureFlagSet3: $FeatureFlagSet$$Type): $WorldDataConfiguration
public "createCommandSourceStack"(): $CommandSourceStack
public "createGameModeForPlayer"(serverPlayer0: $ServerPlayer$$Type): $ServerPlayerGameMode
public "createTextFilterForPlayer"(serverPlayer0: $ServerPlayer$$Type): $TextFilter
public "doRunTask"(tickTask0: $TickTask$$Type): void
public "dumpServerProperties"(path0: $Path$$Type): void
public "enforceSecureProfile"(): boolean
public "fillServerSystemReport"(systemReport0: $SystemReport$$Type): $SystemReport
public "fillSystemReport"(systemReport0: $SystemReport$$Type): $SystemReport
public "finishRecordingMetrics"(): void
public "forceSynchronousWrites"(): boolean
public "forceTimeSynchronization"(): void
/** @deprecated */
public "forgeGetWorldMap"(): $Map<$ResourceKey<$Level>, $ServerLevel>
public "getAbsoluteMaxWorldSize"(): integer
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
public "getAdvancements"(): $ServerAdvancementManager
public "getAllLevels"(): $Iterable<$ServerLevel>
public "getAverageTickTime"(): float
public "getChatDecorator"(): $ChatDecorator
public "getCommandStorage"(): $CommandStorage
public "getCommands"(): $Commands
public "getCompressionThreshold"(): integer
public "getConnection"(): $ServerConnectionListener
public "getCustomBossEvents"(): $CustomBossEvents
public "getData"(): $AttachedData<any>
public "getDefaultGameType"(): $GameType
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getFile"(string0: string): $File
public "getFixerUpper"(): $DataFixer
public "getForcedGameType"(): $GameType
public "getFrameTimer"(): $FrameTimer
public "getFunctionCompilationLevel"(): integer
public "getFunctions"(): $ServerFunctionManager
public "getGameRules"(): $GameRules
public "getKeyPair"(): $KeyPair
public "getLevel"(resourceKey0: $ResourceKey$$Type<$Level>): $ServerLevel
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "getLocalIp"(): string
public "getLootData"(): $LootDataManager
public "getMasterMs"(): long
public "getMaxChainedNeighborUpdates"(): integer
public "getMaxPlayers"(): integer
public "getModdedStatus"(): $ModCheck
public "getMotd"(): string
public "getName"(): $Component
public "getNextTickTime"(): long
public "getOperatorUserPermissionLevel"(): integer
public "getOverworld"(): $ServerLevel
public "getPackRepository"(): $PackRepository
public "getPersistentData"(): $CompoundTag
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getPlayerCount"(): integer
public "getPlayerIdleTimeout"(): integer
public "getPlayerList"(): $PlayerList
public "getPlayerNames"(): string[]
public "getPlayers"(): $EntityArrayList
public "getPort"(): integer
public "getPreventProxyConnections"(): boolean
public "getProfileCache"(): $GameProfileCache
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getProfilePermissions"(gameProfile0: $GameProfile$$Type): integer
public "getProfileRepository"(): $GameProfileRepository
public "getProfiler"(): $ProfilerFiller
public "getProxy"(): $Proxy
public "getRateLimitPacketsPerSecond"(): integer
public "getRecipeManager"(): $RecipeManager
public "getResourceManager"(): $ResourceManager
public "getRunningThread"(): $Thread
public "getScaledTrackingDistance"(int0: integer): integer
public "getScheduledEvents"(): $ScheduledEvents
public "getScoreboard"(): $ServerScoreboard
public "getServerDirectory"(): $File
public "getServerModName"(): string
public "getServerResourcePack"(): $Optional<$MinecraftServer$ServerResourcePackInfo>
public "getServerResources"(): $MinecraftServer$ReloadableResources
public "getServerVersion"(): string
public "getSessionService"(): $MinecraftSessionService
public "getSingleplayerProfile"(): $GameProfile
public "getSpawnProtectionRadius"(): integer
public "getSpawnRadius"(serverLevel0: $ServerLevel$$Type): integer
public "getStatus"(): $ServerStatus
public "getStatusJson"(): string
public "getStructureManager"(): $StructureTemplateManager
public "getTickCount"(): integer
public "getTickTime"(resourceKey0: $ResourceKey$$Type<$Level>): long[]
public "getWorldData"(): $WorldData
public "getWorldPath"(levelResource0: $LevelResource$$Type): $Path
public "getWorldScreenshotFile"(): $Optional<$Path>
public "getXaeroMinimapServerData"(): $MinecraftServerData
public "getXaeroWorldMapServerData"(): $MinecraftServerData$0
public "getXaero_OPAC_ServerData"(): $IServerDataAPI
public "halt"(boolean0: boolean): void
public "hasGui"(): boolean
public "hidesOnlinePlayers"(): boolean
public "invalidateStatus"(): void
public "isCommandBlockEnabled"(): boolean
public "isCurrentlySaving"(): boolean
public "isDedicated"(): boolean
public "isDemo"(): boolean
public "isEnforceWhitelist"(): boolean
public "isEpollEnabled"(): boolean
public "isFlightAllowed"(): boolean
public "isHardcore"(): boolean
public "isNetherEnabled"(): boolean
public "isPublished"(): boolean
public "isPvpAllowed"(): boolean
public "isReady"(): boolean
public "isRecordingMetrics"(): boolean
public "isResourcePackRequired"(): boolean
public "isRunning"(): boolean
public "isShutdown"(): boolean
public "isSingleplayer"(): boolean
public "isSingleplayerOwner"(gameProfile0: $GameProfile$$Type): boolean
public "isSpawningAnimals"(): boolean
public "isSpawningMonsters"(): boolean
public "isStopped"(): boolean
public "isTimeProfilerRunning"(): boolean
public "isUnderSpawnProtection"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "kickUnlistedPlayers"(commandSourceStack0: $CommandSourceStack$$Type): void
public "levelKeys"(): $Set<$ResourceKey<$Level>>
public "localvar$egl000$wrapResourceManager"(original: $CloseableResourceManager$$Type): $CloseableResourceManager
public "logChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type, string2: string): void
/** @deprecated */
public "markWorldsDirty"(): void
public "mfix$getLastTickStartTime"(): long
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "onServerCrash"(crashReport0: $CrashReport$$Type): void
public "onServerExit"(): void
public "overworld"(): $ServerLevel
public "publishServer"(gameType0: $GameType$$Type, boolean1: boolean, int2: integer): boolean
public "redirect$fbc000$redirect$runServer$getMillis"(): long
public "redirect$fbc000$redirect$runServer$getMillisWhile"(): long
public "registries"(): $LayeredRegistryAccess<$RegistryLayer>
public "registryAccess"(): $RegistryAccess$Frozen
public "reloadResources"(collection0: $Collection$$Type<string>): $CompletableFuture<void>
public "repliesToStatus"(): boolean
public "resetGlobalTickLengthMs"(): void
public "restoreInventories"(): $Map<any, any>
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "saveAllChunks"(boolean0: boolean, boolean1: boolean, boolean2: boolean): boolean
public "saveEverything"(boolean0: boolean, boolean1: boolean, boolean2: boolean): boolean
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $MinecraftServer
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendSystemMessage"(component0: $Component$$Type): void
public "setDefaultGameType"(gameType0: $GameType$$Type): void
public "setDemo"(boolean0: boolean): void
public "setDifficulty"(difficulty0: $Difficulty$$Type, boolean1: boolean): void
public "setDifficultyLocked"(boolean0: boolean): void
public "setEnforceWhitelist"(boolean0: boolean): void
public "setFlightAllowed"(boolean0: boolean): void
public "setGlobalTickLengthMs"(long0: long): void
public "setLocalIp"(string0: string): void
public "setMotd"(string0: string): void
public "setPlayerIdleTimeout"(int0: integer): void
public "setPlayerList"(playerList0: $PlayerList$$Type): void
public "setPort"(int0: integer): void
public "setPreventProxyConnections"(boolean0: boolean): void
public "setPvpAllowed"(boolean0: boolean): void
public "setSingleplayerProfile"(gameProfile0: $GameProfile$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setUsesAuthentication"(boolean0: boolean): void
public "setXaeroMinimapServerData"(minecraftServerData0: $MinecraftServerData$$Type): void
public "setXaeroWorldMapServerData"(minecraftServerData0: $MinecraftServerData$0$$Type): void
public "setXaero_OPAC_ServerData"(iServerDataAPI0: $IServerDataAPI$$Type): void
public "shouldInformAdmins"(): boolean
public "shouldRconBroadcast"(): boolean
public static "spin"<S extends $MinecraftServer>(function0: $Function$$Type<$Thread$$Type, S>): S
public "startRecordingMetrics"(consumer0: $Consumer$$Type<$ProfileResults$$Type>, consumer1: $Consumer$$Type<$Path$$Type>): void
public "startTimeProfiler"(): void
public "stop"(): void
public "stopRecordingMetrics"(): void
public "stopTimeProfiler"(): $ProfileResults
public "tell"(message: $Component$$Type): void
public "tickChildren"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickServer"(booleanSupplier0: $BooleanSupplier$$Type): void
public "usesAuthentication"(): boolean
get "playerDataStorage"(): $PlayerDataStorage
set "playerDataStorage"(value: $PlayerDataStorage$$Type)
get "resources"(): $MinecraftServer$ReloadableResources
set "resources"(value: $MinecraftServer$ReloadableResources$$Type)
get "absoluteMaxWorldSize"(): integer
get "advancements"(): $ServerAdvancementManager
get "allLevels"(): $Iterable<$ServerLevel>
get "averageTickTime"(): float
get "chatDecorator"(): $ChatDecorator
get "commandStorage"(): $CommandStorage
get "commands"(): $Commands
get "compressionThreshold"(): integer
get "connection"(): $ServerConnectionListener
get "customBossEvents"(): $CustomBossEvents
get "data"(): $AttachedData<any>
get "defaultGameType"(): $GameType
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "fixerUpper"(): $DataFixer
get "forcedGameType"(): $GameType
get "frameTimer"(): $FrameTimer
get "functionCompilationLevel"(): integer
get "functions"(): $ServerFunctionManager
get "gameRules"(): $GameRules
get "keyPair"(): $KeyPair
get "localIp"(): string
get "lootData"(): $LootDataManager
get "masterMs"(): long
get "maxChainedNeighborUpdates"(): integer
get "maxPlayers"(): integer
get "moddedStatus"(): $ModCheck
get "motd"(): string
get "name"(): $Component
get "nextTickTime"(): long
get "operatorUserPermissionLevel"(): integer
get "packRepository"(): $PackRepository
get "persistentData"(): $CompoundTag
get "playerCount"(): integer
get "playerIdleTimeout"(): integer
get "playerList"(): $PlayerList
get "playerNames"(): string[]
get "players"(): $EntityArrayList
get "port"(): integer
get "preventProxyConnections"(): boolean
get "profileCache"(): $GameProfileCache
get "profileKeySignatureValidator"(): $SignatureValidator
get "profileRepository"(): $GameProfileRepository
get "profiler"(): $ProfilerFiller
get "proxy"(): $Proxy
get "rateLimitPacketsPerSecond"(): integer
get "recipeManager"(): $RecipeManager
get "resourceManager"(): $ResourceManager
get "runningThread"(): $Thread
get "scheduledEvents"(): $ScheduledEvents
get "scoreboard"(): $ServerScoreboard
get "serverDirectory"(): $File
get "serverModName"(): string
get "serverResourcePack"(): $Optional<$MinecraftServer$ServerResourcePackInfo>
get "serverResources"(): $MinecraftServer$ReloadableResources
get "serverVersion"(): string
get "sessionService"(): $MinecraftSessionService
get "singleplayerProfile"(): $GameProfile
get "spawnProtectionRadius"(): integer
get "status"(): $ServerStatus
get "statusJson"(): string
get "structureManager"(): $StructureTemplateManager
get "tickCount"(): integer
get "worldData"(): $WorldData
get "worldScreenshotFile"(): $Optional<$Path>
get "xaeroMinimapServerData"(): $MinecraftServerData
get "xaeroWorldMapServerData"(): $MinecraftServerData$0
get "xaero_OPAC_ServerData"(): $IServerDataAPI
get "commandBlockEnabled"(): boolean
get "currentlySaving"(): boolean
get "dedicated"(): boolean
get "demo"(): boolean
get "enforceWhitelist"(): boolean
get "epollEnabled"(): boolean
get "flightAllowed"(): boolean
get "hardcore"(): boolean
get "netherEnabled"(): boolean
get "published"(): boolean
get "pvpAllowed"(): boolean
get "ready"(): boolean
get "recordingMetrics"(): boolean
get "resourcePackRequired"(): boolean
get "running"(): boolean
get "shutdown"(): boolean
get "singleplayer"(): boolean
get "spawningAnimals"(): boolean
get "spawningMonsters"(): boolean
get "stopped"(): boolean
get "timeProfilerRunning"(): boolean
set "defaultGameType"(value: $GameType$$Type)
set "demo"(value: boolean)
set "difficultyLocked"(value: boolean)
set "enforceWhitelist"(value: boolean)
set "flightAllowed"(value: boolean)
set "globalTickLengthMs"(value: long)
set "localIp"(value: string)
set "motd"(value: string)
set "playerIdleTimeout"(value: integer)
set "playerList"(value: $PlayerList$$Type)
set "port"(value: integer)
set "preventProxyConnections"(value: boolean)
set "pvpAllowed"(value: boolean)
set "singleplayerProfile"(value: $GameProfile$$Type)
set "statusMessage"(value: $Component$$Type)
set "xaeroMinimapServerData"(value: $MinecraftServerData$$Type)
set "xaeroWorldMapServerData"(value: $MinecraftServerData$0$$Type)
set "xaero_OPAC_ServerData"(value: $IServerDataAPI$$Type)
}
}

declare module "packages/net/minecraft/server/packs/resources/$FallbackResourceManager" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources, $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"
import { $FallbackResourceManager$PackEntry } from "packages/net/minecraft/server/packs/resources/$FallbackResourceManager$PackEntry"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $FallbackResourceManager implements $ResourceManager {
readonly "fallbacks": $List<$FallbackResourceManager$PackEntry>

constructor(packType0: $PackType$$Type, string1: string)

public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
public "push"(packResources0: $PackResources$$Type, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): void
public "push"(packResources0: $PackResources$$Type): void
public "pushFilterOnly"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): void
get "namespaces"(): $Set<string>
}
}

declare module "packages/net/minecraft/server/level/$WorldGenRegion" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $WorldGenLevel } from "packages/net/minecraft/world/level/$WorldGenLevel"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $DifficultyInstance } from "packages/net/minecraft/world/$DifficultyInstance"
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $ChunkSource } from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiomeManager } from "packages/net/minecraft/world/level/biome/$BiomeManager"
import { $RegistryAccess } from "packages/net/minecraft/core/$RegistryAccess"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $Optional } from "packages/java/util/$Optional"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $EntityTypeTest$$Type } from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $LevelLightEngine } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $LevelTickAccess } from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $WorldBorder } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $DimensionType } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $LevelData } from "packages/net/minecraft/world/level/storage/$LevelData"

export class $WorldGenRegion implements $WorldGenLevel {
constructor(serverLevel0: $ServerLevel$$Type, list1: $List$$Type<$ChunkAccess$$Type>, chunkStatus2: $ChunkStatus$$Type, int3: integer)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "dimensionType"(): $DimensionType
public "enabledFeatures"(): $FeatureFlagSet
public "ensureCanWrite"(blockPos0: $BlockPos$$Type): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBiomeManager"(): $BiomeManager
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCenter"(): $ChunkPos
public "getChunk"(int0: integer, int1: integer): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
public "getChunkSource"(): $ChunkSource
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
public "getDifficulty"(): $Difficulty
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
/** @deprecated */
public "getLevel"(): $ServerLevel
public "getLevelData"(): $LevelData
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLightEngine"(): $LevelLightEngine
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getRandom"(): $RandomSource
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSeaLevel"(): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getSeed"(): long
public "getServer"(): $MinecraftServer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSkyDarken"(): integer
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getWorldBorder"(): $WorldBorder
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isClientSide"(): boolean
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
public "isOldChunkAround"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
public "nextSubTickCount"(): long
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "registryAccess"(): $RegistryAccess
public "removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
public "setCurrentlyGenerating"(supplier0: $Supplier$$Type<string>): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "center"(): $ChunkPos
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "level"(): $ServerLevel
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "seed"(): long
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
set "currentlyGenerating"(value: $Supplier$$Type<string>)
}
}

declare module "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"

export interface $MetadataSectionSerializer<T> {
"fromJson"(jsonObject0: $JsonObject$$Type): T
"getMetadataSectionName"(): string
get "metadataSectionName"(): string
}

export namespace $MetadataSectionSerializer {
const probejs$$marker: never
}
export abstract class $MetadataSectionSerializer$$Static<T> implements $MetadataSectionSerializer<T> {
}
}

declare module "packages/net/minecraft/server/level/$DistanceManager" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $TicketType$$Type } from "packages/net/minecraft/server/level/$TicketType"
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"

export class $DistanceManager {
public "addPlayer"(sectionPos0: $SectionPos$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "addTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "getDebugStatus"(): string
public "getNaturalSpawnChunkCount"(): integer
public "hasPlayersNearby"(long0: long): boolean
public "hasTickets"(): boolean
public "inBlockTickingRange"(long0: long): boolean
public "inEntityTickingRange"(long0: long): boolean
public "removePlayer"(sectionPos0: $SectionPos$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "removeTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "removeTicketsOnClosing"(): void
public "runAllUpdates"(chunkMap0: $ChunkMap$$Type): boolean
public "shouldForceTicks"(long0: long): boolean
public "updateSimulationDistance"(int0: integer): void
get "debugStatus"(): string
get "naturalSpawnChunkCount"(): integer
}
}

declare module "packages/net/minecraft/server/$Services" {
import { $GameProfileCache, $GameProfileCache$$Type } from "packages/net/minecraft/server/players/$GameProfileCache"
import { $Record } from "packages/java/lang/$Record"
import { $File$$Type } from "packages/java/io/$File"
import { $ServicesKeySet, $ServicesKeySet$$Type } from "packages/com/mojang/authlib/yggdrasil/$ServicesKeySet"
import { $YggdrasilAuthenticationService$$Type } from "packages/com/mojang/authlib/yggdrasil/$YggdrasilAuthenticationService"
import { $GameProfileRepository, $GameProfileRepository$$Type } from "packages/com/mojang/authlib/$GameProfileRepository"
import { $MinecraftSessionService, $MinecraftSessionService$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import { $SignatureValidator } from "packages/net/minecraft/util/$SignatureValidator"

export class $Services extends $Record {
constructor(minecraftSessionService0: $MinecraftSessionService$$Type, servicesKeySet1: $ServicesKeySet$$Type, gameProfileRepository2: $GameProfileRepository$$Type, gameProfileCache3: $GameProfileCache$$Type)

public static "create"(yggdrasilAuthenticationService0: $YggdrasilAuthenticationService$$Type, file1: $File$$Type): $Services
public "profileCache"(): $GameProfileCache
public "profileKeySignatureValidator"(): $SignatureValidator
public "profileRepository"(): $GameProfileRepository
public "servicesKeySet"(): $ServicesKeySet
public "sessionService"(): $MinecraftSessionService
}
}

declare module "packages/net/minecraft/server/packs/$AbstractPackResources" {
import { $PackResources$ResourceOutput$$Type } from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $InputStream, $InputStream$$Type } from "packages/java/io/$InputStream"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractPackResources implements $PackResources {
public "close"(): void
public "getChildren"(): $Collection<$PackResources>
public static "getMetadataFromStream"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>, inputStream1: $InputStream$$Type): T
public "getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
public "getNamespaces"(packType0: $PackType$$Type): $Set<string>
public "getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
public "getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
public "isBuiltin"(): boolean
public "isHidden"(): boolean
public "listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
public "packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}
}

declare module "packages/net/minecraft/server/$ServerScoreboard$Method" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
static readonly "CHANGE": $ServerScoreboard$Method
static readonly "REMOVE": $ServerScoreboard$Method

public static "valueOf"(string0: string): $ServerScoreboard$Method
public static "values"(): $ServerScoreboard$Method[]
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceMetadata" {
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $Optional } from "packages/java/util/$Optional"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export interface $ResourceMetadata {
"getSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): $Optional<T>
}

export namespace $ResourceMetadata {
const EMPTY: $ResourceMetadata
const EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>
function fromJsonStream(inputStream0: $InputStream$$Type): $ResourceMetadata
}
export abstract class $ResourceMetadata$$Static implements $ResourceMetadata {
static readonly "EMPTY": $ResourceMetadata
static readonly "EMPTY_SUPPLIER": $IoSupplier<$ResourceMetadata>

static "fromJsonStream"(inputStream0: $InputStream$$Type): $ResourceMetadata
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkHolder$ChunkLoadingFailure {
}

export namespace $ChunkHolder$ChunkLoadingFailure {
const UNLOADED: $ChunkHolder$ChunkLoadingFailure
}
export abstract class $ChunkHolder$ChunkLoadingFailure$$Static implements $ChunkHolder$ChunkLoadingFailure {
static readonly "UNLOADED": $ChunkHolder$ChunkLoadingFailure

}
}

declare module "packages/net/minecraft/server/level/progress/$StoringChunkProgressListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkStatus, $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $ChunkProgressListener } from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"

export class $StoringChunkProgressListener implements $ChunkProgressListener {
constructor(int0: integer)

public "getDiameter"(): integer
public "getFullDiameter"(): integer
public "getProgress"(): integer
public "getStatus"(int0: integer, int1: integer): $ChunkStatus
public "onStatusChange"(chunkPos0: $ChunkPos$$Type, chunkStatus1: $ChunkStatus$$Type): void
public "start"(): void
public "stop"(): void
public "updateSpawnPos"(chunkPos0: $ChunkPos$$Type): void
get "diameter"(): integer
get "fullDiameter"(): integer
get "progress"(): integer
}
}

declare module "packages/net/minecraft/server/level/$ServerPlayer" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ServerPlayerData, $ServerPlayerData$$Type } from "packages/xaero/map/server/player/$ServerPlayerData"
import { $SectionPos, $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $ChatVisiblity } from "packages/net/minecraft/world/entity/player/$ChatVisiblity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $TextFilter } from "packages/net/minecraft/server/network/$TextFilter"
import { $PlayerAdvancements } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $InventoryKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $NotificationBuilder$$Type } from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import { $ServerLevel, $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ServerStatus$$Type } from "packages/net/minecraft/network/protocol/status/$ServerStatus"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $ServerStatsCounter } from "packages/net/minecraft/stats/$ServerStatsCounter"
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $IServerPlayer } from "packages/xaero/map/server/player/$IServerPlayer"
import { $ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$$Type } from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $KubeJSGUI$$Type } from "packages/dev/latvian/mods/kubejs/gui/$KubeJSGUI"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $ServerRecipeBook, $ServerRecipeBook$$Type } from "packages/net/minecraft/stats/$ServerRecipeBook"
import { $ServerPlayerGameMode } from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $OutgoingChatMessage$$Type } from "packages/net/minecraft/network/chat/$OutgoingChatMessage"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $EntityAnchorArgument$Anchor$$Type } from "packages/net/minecraft/commands/arguments/$EntityAnchorArgument$Anchor"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ChestMenuData$$Type } from "packages/dev/latvian/mods/kubejs/gui/chest/$ChestMenuData"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ServerPlayerKJS } from "packages/dev/latvian/mods/kubejs/core/$ServerPlayerKJS"
import { $IMixinServerPlayer } from "packages/loaderCommon/forge/com/seibel/distanthorizons/common/wrappers/misc/$IMixinServerPlayer"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ServerboundClientInformationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket"
import { $IServerPlayer as $IServerPlayer$0 } from "packages/xaero/common/server/player/$IServerPlayer"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerPlayerData as $ServerPlayerData$0, $ServerPlayerData$$Type as $ServerPlayerData$0$$Type } from "packages/xaero/common/server/player/$ServerPlayerData"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $GameType$$Type } from "packages/net/minecraft/world/level/$GameType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $IOpenPACServerPlayer } from "packages/xaero/pac/common/server/player/data/$IOpenPACServerPlayer"
import { $AnimationApplier } from "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier"
import { $RemoteChatSession, $RemoteChatSession$$Type } from "packages/net/minecraft/network/chat/$RemoteChatSession"
import { $PlayerStatsJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerStatsJS"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ITeleporter$$Type } from "packages/net/minecraftforge/common/util/$ITeleporter"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $ServerPlayerDataAPI, $ServerPlayerDataAPI$$Type } from "packages/xaero/pac/common/server/player/data/api/$ServerPlayerDataAPI"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $ServerPlayer extends $Player implements $IServerPlayer$0, $IServerPlayer, $ServerPlayerKJS, $IMixinServerPlayer, $IOpenPACServerPlayer {
readonly "gameMode": $ServerPlayerGameMode
readonly "server": $MinecraftServer

constructor(minecraftServer0: $MinecraftServer$$Type, serverLevel1: $ServerLevel$$Type, gameProfile2: $GameProfile$$Type)

public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "allowsListing"(): boolean
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "ban"(banner: string, reason: string, expiresInMillis: long): void
public "bedInRange"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canChatInColor"(): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public "clearMeshes"(): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disconnect"(): void
public "distantHorizons$getDimensionChangeDestination"(): $ServerLevel
public "doCheckFallDamage"(double0: double, double1: double, double2: double, boolean3: boolean): void
public "doCloseContainer"(): void
public "doTick"(): void
public "drop"(boolean0: boolean): boolean
public "foodEaten"(is: $ItemStack$$Type): void
public "getAdvancements"(): $PlayerAdvancements
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCamera"(): $Entity
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChatSession"(): $RemoteChatSession
public "getChatVisibility"(): $ChatVisiblity
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getIpAddress"(): string
public "getItem"(): $ItemStack
public "getLanguage"(): string
public "getLastActionTime"(): long
public "getLastSectionPos"(): $SectionPos
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRecipeBook"(): $ServerRecipeBook
public "getRespawnAngle"(): float
public "getRespawnDimension"(): $ResourceKey<$Level>
public "getRespawnPosition"(): $BlockPos
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnLocation"(): $BlockContainerJS
public "getStats"(): $PlayerStatsJS
public "getStatsCounter"(): $ServerStatsCounter
public "getStepHeight"(): float
public "getTabListDisplayName"(): $Component
public "getTabListFooter"(): $Component
public "getTabListHeader"(): $Component
public "getTeamId"(): string
public "getTextFilter"(): $TextFilter
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getXaeroMinimapPlayerData"(): $ServerPlayerData$0
public "getXaeroWorldMapPlayerData"(): $ServerPlayerData
public "getXaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$bom000$methodGiveExperiencePoints"(int0: integer, callbackInfo1: $CallbackInfo$$Type): void
public "handler$elf000$changeDimension"(destination: $ServerLevel$$Type, teleporter: $ITeleporter$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$elf000$setServerLevel"(level: $ServerLevel$$Type, ci: $CallbackInfo$$Type): void
public "handler$zck000$onAttack"(entity0: $Entity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$zck000$onAttackPre"(entity0: $Entity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "hasChangedDimension"(): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasDisconnected"(): boolean
public "initInventoryMenu"(): void
public "initMenu"(abstractContainerMenu0: $AbstractContainerMenu$$Type): void
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChangingDimension"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isLiving"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOp"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRespawnForced"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "kick"(reason: $Component$$Type): void
public "kick"(): void
public "loadGameTypes"(compoundTag0: $CompoundTag$$Type): void
public "lookAt"(anchor0: $EntityAnchorArgument$Anchor$$Type, entity1: $Entity$$Type, anchor2: $EntityAnchorArgument$Anchor$$Type): void
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "nextContainerCounter"(): void
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
public "openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "refreshTabListName"(): void
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetLastActionTime"(): void
public "resetSentInfo"(): void
public "restoreFrom"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "sendChatMessage"(outgoingChatMessage0: $OutgoingChatMessage$$Type, boolean1: boolean, bound2: $ChatType$Bound$$Type): void
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "sendServerStatus"(serverStatus0: $ServerStatus$$Type): void
public "sendSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "sendTexturePack"(string0: string, string1: string, boolean2: boolean, component3: $Component$$Type): void
public "serverLevel"(): $ServerLevel
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setCamera"(entity0: $Entity$$Type): void
public "setChatSession"(remoteChatSession0: $RemoteChatSession$$Type): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCreativeMode"(mode: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setExperienceLevels"(int0: integer): void
public "setExperiencePoints"(int0: integer): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public "setGameMode"(gameType0: $GameType$$Type): boolean
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLastSectionPos"(sectionPos0: $SectionPos$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPlayerInput"(float0: float, float1: float, boolean2: boolean, boolean3: boolean): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRespawnPosition"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type, float2: float, boolean3: boolean, boolean4: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setServerLevel"(serverLevel0: $ServerLevel$$Type): void
public "setSpawnLocation"(c: $BlockContainerJS$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTabListFooter"(component0: $Component$$Type): void
public "setTabListHeader"(component0: $Component$$Type): void
public "setTabListHeaderFooter"(component0: $Component$$Type, component1: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXaeroMinimapPlayerData"(serverPlayerData0: $ServerPlayerData$0$$Type): void
public "setXaeroWorldMapPlayerData"(serverPlayerData0: $ServerPlayerData$$Type): void
public "setXaero_OPAC_PlayerData"(serverPlayerDataAPI0: $ServerPlayerDataAPI$$Type): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldFilterMessageTo"(serverPlayer0: $ServerPlayer$$Type): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "supplementaries$hasQuiver"(): boolean
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(serverLevel0: $ServerLevel$$Type, double1: double, double2: double, double3: double, float4: float, float5: float): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "trackChunk"(chunkPos0: $ChunkPos$$Type, packet1: $Packet$$Type<any>): void
public "trackEnteredOrExitedLavaOnVehicle"(): void
public "trackStartFallingPosition"(): void
public "triggerDimensionChangeTriggers"(serverLevel0: $ServerLevel$$Type): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "untrackChunk"(chunkPos0: $ChunkPos$$Type): void
public "updateOptions"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
get "camera"(): $Entity
set "camera"(value: $Entity$$Type)
get "connection"(): $ServerGamePacketListenerImpl
set "connection"(value: $ServerGamePacketListenerImpl$$Type)
get "containerCounter"(): integer
set "containerCounter"(value: integer)
get "enteredNetherPosition"(): $Vec3
set "enteredNetherPosition"(value: $Vec3$$Type)
get "lastSentExp"(): integer
set "lastSentExp"(value: integer)
get "lastSentFood"(): integer
set "lastSentFood"(value: integer)
get "lastSentHealth"(): float
set "lastSentHealth"(value: float)
get "latency"(): integer
set "latency"(value: integer)
get "recipeBook"(): $ServerRecipeBook
set "recipeBook"(value: $ServerRecipeBook$$Type)
get "wonGame"(): boolean
set "wonGame"(value: boolean)
get "advancements"(): $PlayerAdvancements
get "animation"(): $AnimationApplier
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "chatSession"(): $RemoteChatSession
get "chatVisibility"(): $ChatVisiblity
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "ipAddress"(): string
get "item"(): $ItemStack
get "language"(): string
get "lastActionTime"(): long
get "lastSectionPos"(): $SectionPos
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "respawnAngle"(): float
get "respawnDimension"(): $ResourceKey<$Level>
get "respawnPosition"(): $BlockPos
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "spawnLocation"(): $BlockContainerJS
get "stats"(): $PlayerStatsJS
get "statsCounter"(): $ServerStatsCounter
get "stepHeight"(): float
get "tabListDisplayName"(): $Component
get "tabListFooter"(): $Component
get "tabListHeader"(): $Component
get "teamId"(): string
get "textFilter"(): $TextFilter
get "totalMovementSpeed"(): double
get "type"(): string
get "xaeroMinimapPlayerData"(): $ServerPlayerData$0
get "xaeroWorldMapPlayerData"(): $ServerPlayerData
get "xaero_OPAC_PlayerData"(): $ServerPlayerDataAPI
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "changingDimension"(): boolean
get "dynamicLightEnabledH"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "respawnForced"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chatSession"(value: $RemoteChatSession$$Type)
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "experienceLevels"(value: integer)
set "experiencePoints"(value: integer)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "lastSectionPos"(value: $SectionPos$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "tabListFooter"(value: $Component$$Type)
set "tabListHeader"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xaeroMinimapPlayerData"(value: $ServerPlayerData$0$$Type)
set "xaeroWorldMapPlayerData"(value: $ServerPlayerData$$Type)
set "xaero_OPAC_PlayerData"(value: $ServerPlayerDataAPI$$Type)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/net/minecraft/server/level/$ThreadedLevelLightEngine" {
import { $ProcessorHandle$$Type } from "packages/net/minecraft/util/thread/$ProcessorHandle"
import { $LevelLightEngine } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $ChunkTaskPriorityQueueSorter$Message$$Type } from "packages/net/minecraft/server/level/$ChunkTaskPriorityQueueSorter$Message"
import { $LightChunkGetter$$Type } from "packages/net/minecraft/world/level/chunk/$LightChunkGetter"
import { $ChunkAccess, $ChunkAccess$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProcessorMailbox$$Type } from "packages/net/minecraft/util/thread/$ProcessorMailbox"

export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable {
static readonly "DEFAULT_BATCH_SIZE": integer

constructor(lightChunkGetter0: $LightChunkGetter$$Type, chunkMap1: $ChunkMap$$Type, boolean2: boolean, processorMailbox3: $ProcessorMailbox$$Type<$Runnable$$Type>, processorHandle4: $ProcessorHandle$$Type<$ChunkTaskPriorityQueueSorter$Message$$Type<$Runnable$$Type>>)

public "close"(): void
public "initializeLight"(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean): $CompletableFuture<$ChunkAccess>
public "lightChunk"(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean): $CompletableFuture<$ChunkAccess>
public "tryScheduleUpdate"(): void
public "updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
}
}

declare module "packages/net/minecraft/server/bossevents/$CustomBossEvent" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ServerBossEvent } from "packages/net/minecraft/server/level/$ServerBossEvent"

export class $CustomBossEvent extends $ServerBossEvent {
constructor(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type)

public "addOfflinePlayer"(uUID0: $UUID$$Type): void
public "getDisplayName"(): $Component
public "getMax"(): integer
public "getTextId"(): $ResourceLocation
public "getValue"(): integer
public static "load"(compoundTag0: $CompoundTag$$Type, resourceLocation1: $ResourceLocation$$Type): $CustomBossEvent
public "onPlayerConnect"(serverPlayer0: $ServerPlayer$$Type): void
public "onPlayerDisconnect"(serverPlayer0: $ServerPlayer$$Type): void
public "save"(): $CompoundTag
public "setMax"(int0: integer): void
public "setPlayers"(collection0: $Collection$$Type<$ServerPlayer$$Type>): boolean
public "setValue"(int0: integer): void
get "displayName"(): $Component
get "max"(): integer
get "textId"(): $ResourceLocation
get "value"(): integer
set "max"(value: integer)
set "players"(value: $Collection$$Type<$ServerPlayer$$Type>)
set "value"(value: integer)
}
}

declare module "packages/net/minecraft/server/players/$UserBanList" {
import { $StoredUserList } from "packages/net/minecraft/server/players/$StoredUserList"
import { $File$$Type } from "packages/java/io/$File"
import { $UserBanListEntry } from "packages/net/minecraft/server/players/$UserBanListEntry"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"

export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
constructor(file0: $File$$Type)

public "isBanned"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "packages/net/minecraft/server/level/progress/$ChunkProgressListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"

export interface $ChunkProgressListener {
"onStatusChange"(chunkPos0: $ChunkPos$$Type, chunkStatus1: $ChunkStatus$$Type): void
"start"(): void
"stop"(): void
"updateSpawnPos"(chunkPos0: $ChunkPos$$Type): void
}

export namespace $ChunkProgressListener {
const probejs$$marker: never
}
export abstract class $ChunkProgressListener$$Static implements $ChunkProgressListener {
}
}

declare module "packages/net/minecraft/server/$RegistryLayer" {
import { $Enum } from "packages/java/lang/$Enum"
import { $LayeredRegistryAccess } from "packages/net/minecraft/core/$LayeredRegistryAccess"

export class $RegistryLayer extends $Enum<$RegistryLayer> {
static readonly "DIMENSIONS": $RegistryLayer
static readonly "RELOADABLE": $RegistryLayer
static readonly "STATIC": $RegistryLayer
static readonly "WORLDGEN": $RegistryLayer

public static "createRegistryAccess"(): $LayeredRegistryAccess<$RegistryLayer>
public static "valueOf"(string0: string): $RegistryLayer
public static "values"(): $RegistryLayer[]
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$PlayerProvider" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $List } from "packages/java/util/$List"

export interface $ChunkHolder$PlayerProvider {
"getPlayers"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): $List<$ServerPlayer>
}

export namespace $ChunkHolder$PlayerProvider {
const probejs$$marker: never
}
export abstract class $ChunkHolder$PlayerProvider$$Static implements $ChunkHolder$PlayerProvider {
}
}

declare module "packages/net/minecraft/server/packs/$PackResources$ResourceOutput" {
import { $BiConsumer, $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $InputStream, $InputStream$$Type } from "packages/java/io/$InputStream"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IoSupplier, $IoSupplier$$Type } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
"accept"(resourceLocation0: $ResourceLocation$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>): void
"andThen"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $IoSupplier$$Type<$InputStream$$Type>>): $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>>
}

export namespace $PackResources$ResourceOutput {
const probejs$$marker: never
}
export abstract class $PackResources$ResourceOutput$$Static implements $PackResources$ResourceOutput {
}
}

declare module "packages/net/minecraft/server/players/$StoredUserEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StoredUserEntry<T> {
constructor(t0: T)

}
}

declare module "packages/net/minecraft/server/players/$GameProfileCache" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $File$$Type } from "packages/java/io/$File"
import { $List } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $GameProfileRepository$$Type } from "packages/com/mojang/authlib/$GameProfileRepository"
import { $Map } from "packages/java/util/$Map"
import { $GameProfileCache$GameProfileInfo } from "packages/net/minecraft/server/players/$GameProfileCache$GameProfileInfo"

export class $GameProfileCache {
readonly "profilesByName": $Map<string, $GameProfileCache$GameProfileInfo>

constructor(gameProfileRepository0: $GameProfileRepository$$Type, file1: $File$$Type)

public "add"(gameProfile0: $GameProfile$$Type): void
public "clearExecutor"(): void
public "get"(uUID0: $UUID$$Type): $Optional<$GameProfile>
public "get"(string0: string): $Optional<$GameProfile>
public "getAsync"(string0: string, consumer1: $Consumer$$Type<$Optional$$Type<$GameProfile$$Type>>): void
public "load"(): $List<$GameProfileCache$GameProfileInfo>
public "save"(): void
public "setExecutor"(executor0: $Executor$$Type): void
public static "setUsesAuthentication"(boolean0: boolean): void
set "executor"(value: $Executor$$Type)
}
}

declare module "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $SimplePreparableReloadListener<T> implements $PreparableReloadListener {
constructor()

public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "packages/net/minecraft/server/level/progress/$ChunkProgressListenerFactory" {
import { $ChunkProgressListener } from "packages/net/minecraft/server/level/progress/$ChunkProgressListener"

export interface $ChunkProgressListenerFactory {
"create"(int0: integer): $ChunkProgressListener
}

export namespace $ChunkProgressListenerFactory {
const probejs$$marker: never
}
export abstract class $ChunkProgressListenerFactory$$Static implements $ChunkProgressListenerFactory {
}
}

declare module "packages/net/minecraft/server/packs/resources/$Resource" {
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $InputStream } from "packages/java/io/$InputStream"
import { $ResourceMetadata } from "packages/net/minecraft/server/packs/resources/$ResourceMetadata"
import { $PackResources, $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"
import { $IoSupplier$$Type } from "packages/net/minecraft/server/packs/resources/$IoSupplier"

export class $Resource {
constructor(packResources0: $PackResources$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>, ioSupplier2: $IoSupplier$$Type<$ResourceMetadata>)
constructor(packResources0: $PackResources$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>)

public "isBuiltin"(): boolean
public "metadata"(): $ResourceMetadata
public "open"(): $InputStream
public "openAsReader"(): $BufferedReader
public "source"(): $PackResources
public "sourcePackId"(): string
get "builtin"(): boolean
}
}

declare module "packages/net/minecraft/server/packs/$PackResources" {
import { $PackResources$ResourceOutput$$Type } from "packages/net/minecraft/server/packs/$PackResources$ResourceOutput"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $IForgePackResources } from "packages/net/minecraftforge/common/extensions/$IForgePackResources"
import { $Set } from "packages/java/util/$Set"
import { $Collection } from "packages/java/util/$Collection"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $MetadataSectionSerializer$$Type } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import { $InputStream } from "packages/java/io/$InputStream"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PackResources extends $AutoCloseable, $IForgePackResources {
"close"(): void
"getChildren"(): $Collection<$PackResources>
"getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
"getNamespaces"(packType0: $PackType$$Type): $Set<string>
"getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
"isBuiltin"(): boolean
"isHidden"(): boolean
"listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
"packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}

export namespace $PackResources {
const METADATA_EXTENSION: string
const PACK_META: string
}
export abstract class $PackResources$$Static implements $PackResources {
static readonly "METADATA_EXTENSION": string
static readonly "PACK_META": string

}
}

declare module "packages/net/minecraft/server/packs/resources/$CloseableResourceManager" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Set } from "packages/java/util/$Set"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
"close"(): void
"getNamespaces"(): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
"listPacks"(): $Stream<$PackResources>
"listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
"listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}

export namespace $CloseableResourceManager {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $CloseableResourceManager$$Static implements $CloseableResourceManager {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl" {
import { $ServerboundKeepAlivePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundKeepAlivePacket"
import { $Connection, $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ServerboundMovePlayerPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundMovePlayerPacket"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ServerboundAcceptTeleportationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundAcceptTeleportationPacket"
import { $ServerboundCustomPayloadPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundCustomPayloadPacket"
import { $ServerboundPongPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPongPacket"
import { $SocketAddress } from "packages/java/net/$SocketAddress"
import { $ServerboundSignUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSignUpdatePacket"
import { $ServerboundPlayerActionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket"
import { $ServerboundSetCommandBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandBlockPacket"
import { $ServerGamePacketListener } from "packages/net/minecraft/network/protocol/game/$ServerGamePacketListener"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $PlayerUtils$ConnectionAccess } from "packages/blusunrize/immersiveengineering/api/utils/$PlayerUtils$ConnectionAccess"
import { $ServerboundChatCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatCommandPacket"
import { $ServerboundContainerClickPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerClickPacket"
import { $ServerboundSetCommandMinecartPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCommandMinecartPacket"
import { $ServerPlayerConnection } from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import { $ServerPlayNetHandlerAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/$ServerPlayNetHandlerAccess"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerboundContainerClosePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerClosePacket"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $ServerboundPlayerAbilitiesPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerAbilitiesPacket"
import { $ServerboundRenameItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRenameItemPacket"
import { $ServerboundChangeDifficultyPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChangeDifficultyPacket"
import { $ServerboundClientCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientCommandPacket"
import { $AccessorServerGamePacketListener } from "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorServerGamePacketListener"
import { $ServerboundChatSessionUpdatePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatSessionUpdatePacket"
import { $IServerGamePacketListenerImpl } from "packages/xaero/pac/common/server/core/accessor/$IServerGamePacketListenerImpl"
import { $ServerboundSwingPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSwingPacket"
import { $ServerboundSelectTradePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSelectTradePacket"
import { $ServerboundEditBookPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundEditBookPacket"
import { $ServerboundUseItemOnPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundUseItemOnPacket"
import { $ServerboundPlayerCommandPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerCommandPacket"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerboundMoveVehiclePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundMoveVehiclePacket"
import { $ServerboundChatAckPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatAckPacket"
import { $ServerboundSetCreativeModeSlotPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCreativeModeSlotPacket"
import { $PacketSendListener$$Type } from "packages/net/minecraft/network/$PacketSendListener"
import { $ServerboundSeenAdvancementsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSeenAdvancementsPacket"
import { $ServerboundRecipeBookSeenRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookSeenRecipePacket"
import { $ServerboundBlockEntityTagQuery$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundBlockEntityTagQuery"
import { $ServerboundEntityTagQuery$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundEntityTagQuery"
import { $ServerboundPaddleBoatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPaddleBoatPacket"
import { $RelativeMovement$$Type } from "packages/net/minecraft/world/entity/$RelativeMovement"
import { $ServerboundClientInformationPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket"
import { $FilteredText } from "packages/net/minecraft/server/network/$FilteredText"
import { $ServerboundLockDifficultyPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundLockDifficultyPacket"
import { $ServerboundChatPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundChatPacket"
import { $ServerboundSetJigsawBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetJigsawBlockPacket"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerboundPlayerInputPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerInputPacket"
import { $ServerboundSetStructureBlockPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetStructureBlockPacket"
import { $ServerboundTeleportToEntityPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundTeleportToEntityPacket"
import { $ServerboundUseItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundUseItemPacket"
import { $ServerboundRecipeBookChangeSettingsPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundRecipeBookChangeSettingsPacket"
import { $ServerboundResourcePackPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundResourcePackPacket"
import { $ServerboundJigsawGeneratePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundJigsawGeneratePacket"
import { $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $ServerboundSetBeaconPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetBeaconPacket"
import { $ServerboundSetCarriedItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundSetCarriedItemPacket"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Set$$Type } from "packages/java/util/$Set"
import { $ServerboundContainerButtonClickPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundContainerButtonClickPacket"
import { $ServerboundInteractPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundInteractPacket"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ServerboundCommandSuggestionPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundCommandSuggestionPacket"
import { $ServerboundPlaceRecipePacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPlaceRecipePacket"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"
import { $ServerboundPickItemPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ServerboundPickItemPacket"
import { $TickablePacketListener } from "packages/net/minecraft/network/$TickablePacketListener"

export class $ServerGamePacketListenerImpl implements $ServerPlayerConnection, $TickablePacketListener, $ServerGamePacketListener, $IServerGamePacketListenerImpl, $ServerPlayNetHandlerAccess, $PlayerUtils$ConnectionAccess, $AccessorServerGamePacketListener {
/** @deprecated */
static readonly "MAX_INTERACTION_DISTANCE": double
readonly "connection": $Connection

constructor(minecraftServer0: $MinecraftServer$$Type, connection1: $Connection$$Type, serverPlayer2: $ServerPlayer$$Type)

public "ackBlockChangesUpTo"(int0: integer): void
public "addPendingMessage"(playerChatMessage0: $PlayerChatMessage$$Type): void
public "constant$zzp000$playTimeout"(long0: long): long
public "disconnect"(component0: $Component$$Type): void
public "filterTextPacket"(string0: string): $CompletableFuture<$FilteredText>
public "filterTextPacket"(list0: $List$$Type<string>): $CompletableFuture<$List<$FilteredText>>
public "getPlayer"(): $ServerPlayer
public "getRemoteAddress"(): $SocketAddress
public "getXaero_OPAC_connection"(): $Connection
public "handleAcceptTeleportPacket"(serverboundAcceptTeleportationPacket0: $ServerboundAcceptTeleportationPacket$$Type): void
public "handleAnimate"(serverboundSwingPacket0: $ServerboundSwingPacket$$Type): void
public "handleBlockEntityTagQuery"(serverboundBlockEntityTagQuery0: $ServerboundBlockEntityTagQuery$$Type): void
public "handleChangeDifficulty"(serverboundChangeDifficultyPacket0: $ServerboundChangeDifficultyPacket$$Type): void
public "handleChat"(serverboundChatPacket0: $ServerboundChatPacket$$Type): void
public "handleChatAck"(serverboundChatAckPacket0: $ServerboundChatAckPacket$$Type): void
public "handleChatCommand"(serverboundChatCommandPacket0: $ServerboundChatCommandPacket$$Type): void
public "handleChatSessionUpdate"(serverboundChatSessionUpdatePacket0: $ServerboundChatSessionUpdatePacket$$Type): void
public "handleClientCommand"(serverboundClientCommandPacket0: $ServerboundClientCommandPacket$$Type): void
public "handleClientInformation"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
public "handleContainerButtonClick"(serverboundContainerButtonClickPacket0: $ServerboundContainerButtonClickPacket$$Type): void
public "handleContainerClick"(serverboundContainerClickPacket0: $ServerboundContainerClickPacket$$Type): void
public "handleContainerClose"(serverboundContainerClosePacket0: $ServerboundContainerClosePacket$$Type): void
public "handleCustomCommandSuggestions"(serverboundCommandSuggestionPacket0: $ServerboundCommandSuggestionPacket$$Type): void
public "handleCustomPayload"(serverboundCustomPayloadPacket0: $ServerboundCustomPayloadPacket$$Type): void
public "handleEditBook"(serverboundEditBookPacket0: $ServerboundEditBookPacket$$Type): void
public "handleEntityTagQuery"(serverboundEntityTagQuery0: $ServerboundEntityTagQuery$$Type): void
public "handleInteract"(serverboundInteractPacket0: $ServerboundInteractPacket$$Type): void
public "handleJigsawGenerate"(serverboundJigsawGeneratePacket0: $ServerboundJigsawGeneratePacket$$Type): void
public "handleKeepAlive"(serverboundKeepAlivePacket0: $ServerboundKeepAlivePacket$$Type): void
public "handleLockDifficulty"(serverboundLockDifficultyPacket0: $ServerboundLockDifficultyPacket$$Type): void
public "handleMovePlayer"(serverboundMovePlayerPacket0: $ServerboundMovePlayerPacket$$Type): void
public "handleMoveVehicle"(serverboundMoveVehiclePacket0: $ServerboundMoveVehiclePacket$$Type): void
public "handlePaddleBoat"(serverboundPaddleBoatPacket0: $ServerboundPaddleBoatPacket$$Type): void
public "handlePickItem"(serverboundPickItemPacket0: $ServerboundPickItemPacket$$Type): void
public "handlePlaceRecipe"(serverboundPlaceRecipePacket0: $ServerboundPlaceRecipePacket$$Type): void
public "handlePlayerAbilities"(serverboundPlayerAbilitiesPacket0: $ServerboundPlayerAbilitiesPacket$$Type): void
public "handlePlayerAction"(serverboundPlayerActionPacket0: $ServerboundPlayerActionPacket$$Type): void
public "handlePlayerCommand"(serverboundPlayerCommandPacket0: $ServerboundPlayerCommandPacket$$Type): void
public "handlePlayerInput"(serverboundPlayerInputPacket0: $ServerboundPlayerInputPacket$$Type): void
public "handlePong"(serverboundPongPacket0: $ServerboundPongPacket$$Type): void
public "handleRecipeBookChangeSettingsPacket"(serverboundRecipeBookChangeSettingsPacket0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
public "handleRecipeBookSeenRecipePacket"(serverboundRecipeBookSeenRecipePacket0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
public "handleRenameItem"(serverboundRenameItemPacket0: $ServerboundRenameItemPacket$$Type): void
public "handleResourcePackResponse"(serverboundResourcePackPacket0: $ServerboundResourcePackPacket$$Type): void
public "handleSeenAdvancements"(serverboundSeenAdvancementsPacket0: $ServerboundSeenAdvancementsPacket$$Type): void
public "handleSelectTrade"(serverboundSelectTradePacket0: $ServerboundSelectTradePacket$$Type): void
public "handleSetBeaconPacket"(serverboundSetBeaconPacket0: $ServerboundSetBeaconPacket$$Type): void
public "handleSetCarriedItem"(serverboundSetCarriedItemPacket0: $ServerboundSetCarriedItemPacket$$Type): void
public "handleSetCommandBlock"(serverboundSetCommandBlockPacket0: $ServerboundSetCommandBlockPacket$$Type): void
public "handleSetCommandMinecart"(serverboundSetCommandMinecartPacket0: $ServerboundSetCommandMinecartPacket$$Type): void
public "handleSetCreativeModeSlot"(serverboundSetCreativeModeSlotPacket0: $ServerboundSetCreativeModeSlotPacket$$Type): void
public "handleSetJigsawBlock"(serverboundSetJigsawBlockPacket0: $ServerboundSetJigsawBlockPacket$$Type): void
public "handleSetStructureBlock"(serverboundSetStructureBlockPacket0: $ServerboundSetStructureBlockPacket$$Type): void
public "handleSignUpdate"(serverboundSignUpdatePacket0: $ServerboundSignUpdatePacket$$Type): void
public "handleTeleportToEntityPacket"(serverboundTeleportToEntityPacket0: $ServerboundTeleportToEntityPacket$$Type): void
public "handleUseItem"(serverboundUseItemPacket0: $ServerboundUseItemPacket$$Type): void
public "handleUseItemOn"(serverboundUseItemOnPacket0: $ServerboundUseItemOnPacket$$Type): void
public "handler$dai001$adastra$tick"(ci: $CallbackInfo$$Type): void
public "isAcceptingMessages"(): boolean
public "onDisconnect"(component0: $Component$$Type): void
public "redirect$cfk000$getStackInHand"(instance: $ServerPlayer$$Type, hand: $InteractionHand$$Type): $ItemStack
public "resetPosition"(): void
public "send"(packet0: $Packet$$Type<any>): void
public "send"(packet0: $Packet$$Type<any>, packetSendListener1: $PacketSendListener$$Type): void
public "sendDisguisedChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): void
public "sendPlayerChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, bound1: $ChatType$Bound$$Type): void
public "shouldPropagateHandlingExceptions"(): boolean
public "teleport"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "teleport"(double0: double, double1: double, double2: double, float3: float, float4: float, set5: $Set$$Type<$RelativeMovement$$Type>): void
public "tick"(): void
get "aboveGroundTickCount"(): integer
set "aboveGroundTickCount"(value: integer)
get "aboveGroundVehicleTickCount"(): integer
set "aboveGroundVehicleTickCount"(value: integer)
get "player"(): $ServerPlayer
set "player"(value: $ServerPlayer$$Type)
get "remoteAddress"(): $SocketAddress
get "xaero_OPAC_connection"(): $Connection
get "acceptingMessages"(): boolean
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceProvider" {
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $Optional } from "packages/java/util/$Optional"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $ResourceProvider {
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
}

export namespace $ResourceProvider {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $ResourceProvider$$Static implements $ResourceProvider {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager" {
import { $CommandFunction, $CommandFunction$$Type } from "packages/net/minecraft/commands/$CommandFunction"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Collection } from "packages/java/util/$Collection"
import { $ServerFunctionLibrary$$Type } from "packages/net/minecraft/server/$ServerFunctionLibrary"
import { $Optional } from "packages/java/util/$Optional"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CommandDispatcher } from "packages/com/mojang/brigadier/$CommandDispatcher"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $IProfilingServerFunctionManager } from "packages/org/embeddedt/modernfix/duck/$IProfilingServerFunctionManager"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "packages/net/minecraft/server/$ServerFunctionManager$TraceCallbacks"

export class $ServerFunctionManager implements $IProfilingServerFunctionManager {
constructor(minecraftServer0: $MinecraftServer$$Type, serverFunctionLibrary1: $ServerFunctionLibrary$$Type)

public "execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type, traceCallbacks2: $ServerFunctionManager$TraceCallbacks$$Type): integer
public "execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type): integer
public "get"(resourceLocation0: $ResourceLocation$$Type): $Optional<$CommandFunction>
public "getCommandLimit"(): integer
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
public "getFunctionNames"(): $Iterable<$ResourceLocation>
public "getGameLoopSender"(): $CommandSourceStack
public "getTag"(resourceLocation0: $ResourceLocation$$Type): $Collection<$CommandFunction>
public "getTagNames"(): $Iterable<$ResourceLocation>
public "mfix$getProfilingResults"(): string
public "replaceLibrary"(serverFunctionLibrary0: $ServerFunctionLibrary$$Type): void
public "tick"(): void
get "commandLimit"(): integer
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
get "functionNames"(): $Iterable<$ResourceLocation>
get "gameLoopSender"(): $CommandSourceStack
get "tagNames"(): $Iterable<$ResourceLocation>
}
}

declare module "packages/net/minecraft/server/packs/$PackType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PackType extends $Enum<$PackType> {
static readonly "CLIENT_RESOURCES": $PackType
static readonly "SERVER_DATA": $PackType

public "getDirectory"(): string
public static "valueOf"(string0: string): $PackType
public static "values"(): $PackType[]
get "directory"(): string
}
}

declare module "packages/net/minecraft/server/level/$BlockDestructionProgress" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $BlockDestructionProgressExtension } from "packages/com/simibubi/create/foundation/block/render/$BlockDestructionProgressExtension"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
constructor(int0: integer, blockPos1: $BlockPos$$Type)

public "compareTo"(blockDestructionProgress0: $BlockDestructionProgress$$Type): integer
public "create$getExtraPositions"(): $Set<any>
public "create$setExtraPositions"(set0: $Set$$Type<any>): void
public "getId"(): integer
public "getPos"(): $BlockPos
public "getProgress"(): integer
public "getUpdatedRenderTick"(): integer
public "setProgress"(int0: integer): void
public "updateTick"(int0: integer): void
get "id"(): integer
get "pos"(): $BlockPos
get "progress"(): integer
get "updatedRenderTick"(): integer
set "progress"(value: integer)
}
}

declare module "packages/net/minecraft/server/level/$TicketType" {
import { $ChunkPos } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Comparator, $Comparator$$Type } from "packages/java/util/$Comparator"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Unit } from "packages/net/minecraft/util/$Unit"

export class $TicketType<T> {
static readonly "DRAGON": $TicketType<$Unit>
static readonly "FORCED": $TicketType<$ChunkPos>
static readonly "LIGHT": $TicketType<$ChunkPos>
static readonly "PLAYER": $TicketType<$ChunkPos>
static readonly "PORTAL": $TicketType<$BlockPos>
static readonly "POST_TELEPORT": $TicketType<integer>
static readonly "START": $TicketType<$Unit>
static readonly "UNKNOWN": $TicketType<$ChunkPos>

public static "create"<T>(string0: string, comparator1: $Comparator$$Type<T>): $TicketType<T>
public static "create"<T>(string0: string, comparator1: $Comparator$$Type<T>, int2: integer): $TicketType<T>
public "getComparator"(): $Comparator<T>
public "timeout"(): long
get "comparator"(): $Comparator<T>
}
}

declare module "packages/net/minecraft/server/packs/repository/$PackRepository" {
import { $RepositorySource, $RepositorySource$$Type } from "packages/net/minecraft/server/packs/repository/$RepositorySource"
import { $Set, $Set$$Type } from "packages/java/util/$Set"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $List } from "packages/java/util/$List"
import { $Pack } from "packages/net/minecraft/server/packs/repository/$Pack"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"

export class $PackRepository {
constructor(...repositorySource0s: $RepositorySource$$Type[])

public "addPack"(string0: string): boolean
public "addPackFinder"(repositorySource0: $RepositorySource$$Type): void
public "getAvailableIds"(): $Collection<string>
public "getAvailablePacks"(): $Collection<$Pack>
public "getPack"(string0: string): $Pack
public "getRequestedFeatureFlags"(): $FeatureFlagSet
public "getSelectedIds"(): $Collection<string>
public "getSelectedPacks"(): $Collection<$Pack>
public "isAvailable"(string0: string): boolean
public "openAllSelected"(): $List<$PackResources>
public "reload"(): void
public "removePack"(string0: string): boolean
public "setSelected"(collection0: $Collection$$Type<string>): void
get "sources"(): $Set<$RepositorySource>
set "sources"(value: $Set$$Type<$RepositorySource$$Type>)
get "availableIds"(): $Collection<string>
get "availablePacks"(): $Collection<$Pack>
get "requestedFeatureFlags"(): $FeatureFlagSet
get "selectedIds"(): $Collection<string>
get "selectedPacks"(): $Collection<$Pack>
set "selected"(value: $Collection$$Type<string>)
}
}

declare module "packages/net/minecraft/server/players/$IpBanList" {
import { $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $IpBanListEntry } from "packages/net/minecraft/server/players/$IpBanListEntry"
import { $StoredUserList } from "packages/net/minecraft/server/players/$StoredUserList"
import { $File$$Type } from "packages/java/io/$File"

export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
constructor(file0: $File$$Type)

public "get"(socketAddress0: $SocketAddress$$Type): $IpBanListEntry
public "isBanned"(socketAddress0: $SocketAddress$$Type): boolean
public "isBanned"(string0: string): boolean
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
"getName"(): string
"onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}

export namespace $ResourceManagerReloadListener {
const probejs$$marker: never
}
export abstract class $ResourceManagerReloadListener$$Static implements $ResourceManagerReloadListener {
}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack" {
import { $Pack$ResourcesSupplier$$Type } from "packages/net/minecraft/server/packs/repository/$Pack$ResourcesSupplier"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $PackSource, $PackSource$$Type } from "packages/net/minecraft/server/packs/repository/$PackSource"
import { $Pack$Position, $Pack$Position$$Type } from "packages/net/minecraft/server/packs/repository/$Pack$Position"
import { $Pack$Info, $Pack$Info$$Type } from "packages/net/minecraft/server/packs/repository/$Pack$Info"
import { $PackCompatibility } from "packages/net/minecraft/server/packs/repository/$PackCompatibility"
import { $FeatureFlagSet } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"

export class $Pack {
public static "create"(string0: string, component1: $Component$$Type, boolean2: boolean, resourcesSupplier3: $Pack$ResourcesSupplier$$Type, info4: $Pack$Info$$Type, packType5: $PackType$$Type, position6: $Pack$Position$$Type, boolean7: boolean, packSource8: $PackSource$$Type): $Pack
public "getChatLink"(boolean0: boolean): $Component
public "getCompatibility"(): $PackCompatibility
public "getDefaultPosition"(): $Pack$Position
public "getDescription"(): $Component
public "getId"(): string
public "getPackSource"(): $PackSource
public "getRequestedFeatures"(): $FeatureFlagSet
public "getTitle"(): $Component
public "isFixedPosition"(): boolean
public "isHidden"(): boolean
public "isRequired"(): boolean
public "open"(): $PackResources
public static "readMetaAndCreate"(string0: string, component1: $Component$$Type, boolean2: boolean, resourcesSupplier3: $Pack$ResourcesSupplier$$Type, packType4: $PackType$$Type, position5: $Pack$Position$$Type, packSource6: $PackSource$$Type): $Pack
public static "readPackInfo"(string0: string, resourcesSupplier1: $Pack$ResourcesSupplier$$Type): $Pack$Info
get "compatibility"(): $PackCompatibility
get "defaultPosition"(): $Pack$Position
get "description"(): $Component
get "id"(): string
get "packSource"(): $PackSource
get "requestedFeatures"(): $FeatureFlagSet
get "title"(): $Component
get "fixedPosition"(): boolean
get "hidden"(): boolean
get "required"(): boolean
}
}

declare module "packages/net/minecraft/server/$PlayerAdvancements" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerAdvancementManager$$Type } from "packages/net/minecraft/server/$ServerAdvancementManager"
import { $PlayerList$$Type } from "packages/net/minecraft/server/players/$PlayerList"
import { $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"
import { $AdvancementProgress } from "packages/net/minecraft/advancements/$AdvancementProgress"
import { $DataFixer$$Type } from "packages/com/mojang/datafixers/$DataFixer"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $PlayerAdvancements {
constructor(dataFixer0: $DataFixer$$Type, playerList1: $PlayerList$$Type, serverAdvancementManager2: $ServerAdvancementManager$$Type, path3: $Path$$Type, serverPlayer4: $ServerPlayer$$Type)

public "award"(advancement0: $Advancement$$Type, string1: string): boolean
public "flushDirty"(serverPlayer0: $ServerPlayer$$Type): void
public "getOrStartProgress"(advancement0: $Advancement$$Type): $AdvancementProgress
public "handler$fbh000$onAward"(advancement0: $Advancement$$Type, string1: string, callbackInfoReturnable2: $CallbackInfoReturnable$$Type<any>, boolean3: boolean): void
public "reload"(serverAdvancementManager0: $ServerAdvancementManager$$Type): void
public "revoke"(advancement0: $Advancement$$Type, string1: string): boolean
public "save"(): void
public "setPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setSelectedTab"(advancement0: $Advancement$$Type): void
public "stopListening"(): void
set "player"(value: $ServerPlayer$$Type)
set "selectedTab"(value: $Advancement$$Type)
}
}

declare module "packages/net/minecraft/server/$ServerFunctionLibrary" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CommandFunction } from "packages/net/minecraft/commands/$CommandFunction"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Collection } from "packages/java/util/$Collection"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $Optional } from "packages/java/util/$Optional"
import { $CommandDispatcher$$Type } from "packages/com/mojang/brigadier/$CommandDispatcher"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map } from "packages/java/util/$Map"

export class $ServerFunctionLibrary implements $PreparableReloadListener {
constructor(int0: integer, commandDispatcher1: $CommandDispatcher$$Type<$CommandSourceStack$$Type>)

public "getAvailableTags"(): $Iterable<$ResourceLocation>
public "getFunction"(resourceLocation0: $ResourceLocation$$Type): $Optional<$CommandFunction>
public "getFunctions"(): $Map<$ResourceLocation, $CommandFunction>
public "getName"(): string
public "getTag"(resourceLocation0: $ResourceLocation$$Type): $Collection<$CommandFunction>
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "availableTags"(): $Iterable<$ResourceLocation>
get "functions"(): $Map<$ResourceLocation, $CommandFunction>
get "name"(): string
}
}

declare module "packages/net/minecraft/server/players/$ServerOpListEntry" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $StoredUserEntry } from "packages/net/minecraft/server/players/$StoredUserEntry"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"

export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
constructor(gameProfile0: $GameProfile$$Type, int1: integer, boolean2: boolean)
constructor(jsonObject0: $JsonObject$$Type)

public "getBypassesPlayerLimit"(): boolean
public "getLevel"(): integer
get "bypassesPlayerLimit"(): boolean
get "level"(): integer
}
}

declare module "packages/net/minecraft/server/players/$ServerOpList" {
import { $StoredUserList } from "packages/net/minecraft/server/players/$StoredUserList"
import { $File$$Type } from "packages/java/io/$File"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $ServerOpListEntry } from "packages/net/minecraft/server/players/$ServerOpListEntry"

export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
constructor(file0: $File$$Type)

public "canBypassPlayerLimit"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "packages/net/minecraft/server/$ServerScoreboard" {
import { $ScoreboardSaveData } from "packages/net/minecraft/world/scores/$ScoreboardSaveData"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Packet } from "packages/net/minecraft/network/protocol/$Packet"
import { $Objective$$Type } from "packages/net/minecraft/world/scores/$Objective"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $Scoreboard } from "packages/net/minecraft/world/scores/$Scoreboard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $ServerScoreboard extends $Scoreboard {
constructor(minecraftServer0: $MinecraftServer$$Type)

public "addDirtyListener"(runnable0: $Runnable$$Type): void
public "createData"(): $ScoreboardSaveData
public "createData"(compoundTag0: $CompoundTag$$Type): $ScoreboardSaveData
public "getObjectiveDisplaySlotCount"(objective0: $Objective$$Type): integer
public "getStartTrackingPackets"(objective0: $Objective$$Type): $List<$Packet<any>>
public "getStopTrackingPackets"(objective0: $Objective$$Type): $List<$Packet<any>>
public "startTrackingObjective"(objective0: $Objective$$Type): void
public "stopTrackingObjective"(objective0: $Objective$$Type): void
}
}

declare module "packages/net/minecraft/server/packs/resources/$ResourceManager" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $ResourceManager extends $ResourceProvider {
"getNamespaces"(): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
"listPacks"(): $Stream<$PackResources>
"listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
"listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}

export namespace $ResourceManager {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $ResourceManager$$Static implements $ResourceManager {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "packages/net/minecraft/server/network/$ServerPlayerConnection" {
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"

export interface $ServerPlayerConnection {
"getPlayer"(): $ServerPlayer
"send"(packet0: $Packet$$Type<any>): void
get "player"(): $ServerPlayer
}

export namespace $ServerPlayerConnection {
const probejs$$marker: never
}
export abstract class $ServerPlayerConnection$$Static implements $ServerPlayerConnection {
}
}

declare module "packages/net/minecraft/server/packs/resources/$MultiPackResourceManager" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $CloseableResourceManager } from "packages/net/minecraft/server/packs/resources/$CloseableResourceManager"
import { $Set } from "packages/java/util/$Set"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $FallbackResourceManager } from "packages/net/minecraft/server/packs/resources/$FallbackResourceManager"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources, $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $MultiPackResourceManager implements $CloseableResourceManager {
readonly "namespacedManagers": $Map<string, $FallbackResourceManager>
readonly "packs": $List<$PackResources>

constructor(packType0: $PackType$$Type, list1: $List$$Type<$PackResources$$Type>)

public "close"(): void
public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}
}

declare module "packages/net/minecraft/server/network/$TextFilter" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $FilteredText } from "packages/net/minecraft/server/network/$FilteredText"
import { $List, $List$$Type } from "packages/java/util/$List"

export interface $TextFilter {
"join"(): void
"leave"(): void
"processMessageBundle"(list0: $List$$Type<string>): $CompletableFuture<$List<$FilteredText>>
"processStreamMessage"(string0: string): $CompletableFuture<$FilteredText>
}

export namespace $TextFilter {
const DUMMY: $TextFilter
}
export abstract class $TextFilter$$Static implements $TextFilter {
static readonly "DUMMY": $TextFilter

}
}

declare module "packages/net/minecraft/server/players/$GameProfileCache$GameProfileInfo" {
import { $Date } from "packages/java/util/$Date"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"

export class $GameProfileCache$GameProfileInfo {
public "getExpirationDate"(): $Date
public "getLastAccess"(): long
public "getProfile"(): $GameProfile
public "setLastAccess"(long0: long): void
get "expirationDate"(): $Date
get "lastAccess"(): long
get "profile"(): $GameProfile
set "lastAccess"(value: long)
}
}

declare module "packages/net/minecraft/server/$ServerFunctionManager$QueuedCommand" {
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Deque$$Type } from "packages/java/util/$Deque"
import { $CommandFunction$Entry$$Type } from "packages/net/minecraft/commands/$CommandFunction$Entry"
import { $ServerFunctionManager$$Type } from "packages/net/minecraft/server/$ServerFunctionManager"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "packages/net/minecraft/server/$ServerFunctionManager$TraceCallbacks"

export class $ServerFunctionManager$QueuedCommand {
constructor(commandSourceStack0: $CommandSourceStack$$Type, int1: integer, entry2: $CommandFunction$Entry$$Type)

public "execute"(serverFunctionManager0: $ServerFunctionManager$$Type, deque1: $Deque$$Type<$ServerFunctionManager$QueuedCommand$$Type>, int2: integer, traceCallbacks3: $ServerFunctionManager$TraceCallbacks$$Type): void
}
}

declare module "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Gson$$Type } from "packages/com/google/gson/$Gson"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SimplePreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> {
readonly "directory": string

constructor(gson0: $Gson$$Type, string1: string)

public "getName"(): string
public static "scanDirectory"(resourceManager0: $ResourceManager$$Type, string1: string, gson2: $Gson$$Type, map3: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
get "name"(): string
}
}

declare module "packages/net/minecraft/server/level/$ServerBossEvent" {
import { $BossEvent } from "packages/net/minecraft/world/$BossEvent"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Collection } from "packages/java/util/$Collection"
import { $BossEvent$BossBarColor$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarColor"
import { $BossEvent$BossBarOverlay$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarOverlay"

export class $ServerBossEvent extends $BossEvent {
constructor(component0: $Component$$Type, bossBarColor1: $BossEvent$BossBarColor$$Type, bossBarOverlay2: $BossEvent$BossBarOverlay$$Type)

public "addPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "getPlayers"(): $Collection<$ServerPlayer>
public "isVisible"(): boolean
public "removeAllPlayers"(): void
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setVisible"(boolean0: boolean): void
get "players"(): $Collection<$ServerPlayer>
get "visible"(): boolean
set "visible"(value: boolean)
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $LevelLightEngine$$Type } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $ChunkStatus, $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $FullChunkStatus } from "packages/net/minecraft/server/level/$FullChunkStatus"
import { $Either } from "packages/com/mojang/datafixers/util/$Either"
import { $ChunkHolder$LevelChangeListener$$Type } from "packages/net/minecraft/server/level/$ChunkHolder$LevelChangeListener"
import { $ImposterProtoChunk$$Type } from "packages/net/minecraft/world/level/chunk/$ImposterProtoChunk"
import { $LevelChunk, $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $ChunkMap$$Type } from "packages/net/minecraft/server/level/$ChunkMap"
import { $ChunkHolder$PlayerProvider$$Type } from "packages/net/minecraft/server/level/$ChunkHolder$PlayerProvider"
import { $List } from "packages/java/util/$List"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ChunkHolder$ChunkLoadingFailure } from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"

export class $ChunkHolder {
static readonly "UNLOADED_CHUNK": $Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
static readonly "UNLOADED_LEVEL_CHUNK": $Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>

constructor(chunkPos0: $ChunkPos$$Type, int1: integer, levelHeightAccessor2: $LevelHeightAccessor$$Type, levelLightEngine3: $LevelLightEngine$$Type, levelChangeListener4: $ChunkHolder$LevelChangeListener$$Type, playerProvider5: $ChunkHolder$PlayerProvider$$Type)

public "blockChanged"(blockPos0: $BlockPos$$Type): void
public "broadcastChanges"(levelChunk0: $LevelChunk$$Type): void
public "getAllFutures"(): $List<$Pair<$ChunkStatus, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>>
public "getChunkToSave"(): $CompletableFuture<$ChunkAccess>
public "getEntityTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "getFullChunk"(): $LevelChunk
public "getFullChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "getFullStatus"(): $FullChunkStatus
public "getFutureIfPresent"(chunkStatus0: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getFutureIfPresentUnchecked"(chunkStatus0: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getLastAvailable"(): $ChunkAccess
public "getLastAvailableStatus"(): $ChunkStatus
public "getOrScheduleFuture"(chunkStatus0: $ChunkStatus$$Type, chunkMap1: $ChunkMap$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getPos"(): $ChunkPos
public "getQueueLevel"(): integer
public "getTicketLevel"(): integer
public "getTickingChunk"(): $LevelChunk
public "getTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "refreshAccessibility"(): void
public "replaceProtoChunk"(imposterProtoChunk0: $ImposterProtoChunk$$Type): void
public "sectionLightChanged"(lightLayer0: $LightLayer$$Type, int1: integer): void
public "setTicketLevel"(int0: integer): void
public "wasAccessibleSinceLastSave"(): boolean
get "allFutures"(): $List<$Pair<$ChunkStatus, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>>
get "chunkToSave"(): $CompletableFuture<$ChunkAccess>
get "entityTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
get "fullChunk"(): $LevelChunk
get "fullChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
get "fullStatus"(): $FullChunkStatus
get "lastAvailable"(): $ChunkAccess
get "lastAvailableStatus"(): $ChunkStatus
get "pos"(): $ChunkPos
get "queueLevel"(): integer
get "ticketLevel"(): integer
get "tickingChunk"(): $LevelChunk
get "tickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
set "ticketLevel"(value: integer)
}
}

declare module "packages/net/minecraft/server/packs/resources/$ReloadableResourceManager" {
import { $PreparableReloadListener$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $BufferedReader } from "packages/java/io/$BufferedReader"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ReloadInstance } from "packages/net/minecraft/server/packs/resources/$ReloadInstance"
import { $PackType, $PackType$$Type } from "packages/net/minecraft/server/packs/$PackType"
import { $ResourceProvider } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Set } from "packages/java/util/$Set"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InputStream } from "packages/java/io/$InputStream"
import { $Resource, $Resource$$Type } from "packages/net/minecraft/server/packs/resources/$Resource"
import { $PackResources, $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"
import { $ResourceManager } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Unit$$Type } from "packages/net/minecraft/util/$Unit"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable {
readonly "type": $PackType

constructor(packType0: $PackType$$Type)

public "close"(): void
public "createReload"(executor0: $Executor$$Type, executor1: $Executor$$Type, completableFuture2: $CompletableFuture$$Type<$Unit$$Type>, list3: $List$$Type<$PackResources$$Type>): $ReloadInstance
public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
public "registerReloadListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
public "registerReloadListenerIfNotPresent"(preparableReloadListener0: $PreparableReloadListener$$Type): void
get "namespaces"(): $Set<string>
}
}

declare module "packages/net/minecraft/server/players/$PlayerList" {
import { $CompoundTag } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Connection$$Type } from "packages/net/minecraft/network/$Connection"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $ServerOpList } from "packages/net/minecraft/server/players/$ServerOpList"
import { $PlayerDataStorage, $PlayerDataStorage$$Type } from "packages/net/minecraft/world/level/storage/$PlayerDataStorage"
import { $LayeredRegistryAccess$$Type } from "packages/net/minecraft/core/$LayeredRegistryAccess"
import { $SocketAddress$$Type } from "packages/java/net/$SocketAddress"
import { $PlayerAdvancements } from "packages/net/minecraft/server/$PlayerAdvancements"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IpBanList } from "packages/net/minecraft/server/players/$IpBanList"
import { $File } from "packages/java/io/$File"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $UserWhiteList } from "packages/net/minecraft/server/players/$UserWhiteList"
import { $ServerStatsCounter } from "packages/net/minecraft/stats/$ServerStatsCounter"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Packet$$Type } from "packages/net/minecraft/network/protocol/$Packet"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $UserBanList } from "packages/net/minecraft/server/players/$UserBanList"
import { $RegistryLayer$$Type } from "packages/net/minecraft/server/$RegistryLayer"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"

export class $PlayerList {
static readonly "CHAT_FILTERED_FULL": $Component
static readonly "IPBANLIST_FILE": $File
static readonly "OPLIST_FILE": $File
static readonly "USERBANLIST_FILE": $File
static readonly "WHITELIST_FILE": $File
readonly "playerIo": $PlayerDataStorage

constructor(minecraftServer0: $MinecraftServer$$Type, layeredRegistryAccess1: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, playerDataStorage2: $PlayerDataStorage$$Type, int3: integer)

public "addWorldborderListener"(serverLevel0: $ServerLevel$$Type): void
public "broadcast"(player0: $Player$$Type, double1: double, double2: double, double3: double, double4: double, resourceKey5: $ResourceKey$$Type<$Level>, packet6: $Packet$$Type<any>): void
public "broadcastAll"(packet0: $Packet$$Type<any>, resourceKey1: $ResourceKey$$Type<$Level>): void
public "broadcastAll"(packet0: $Packet$$Type<any>): void
public "broadcastChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, commandSourceStack1: $CommandSourceStack$$Type, bound2: $ChatType$Bound$$Type): void
public "broadcastChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, serverPlayer1: $ServerPlayer$$Type, bound2: $ChatType$Bound$$Type): void
public "broadcastSystemMessage"(component0: $Component$$Type, function1: $Function$$Type<$ServerPlayer$$Type, $Component>, boolean2: boolean): void
public "broadcastSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "broadcastSystemToAllExceptTeam"(player0: $Player$$Type, component1: $Component$$Type): void
public "broadcastSystemToTeam"(player0: $Player$$Type, component1: $Component$$Type): void
public "canBypassPlayerLimit"(gameProfile0: $GameProfile$$Type): boolean
public "canPlayerLogin"(socketAddress0: $SocketAddress$$Type, gameProfile1: $GameProfile$$Type): $Component
public "deop"(gameProfile0: $GameProfile$$Type): void
public "getBans"(): $UserBanList
public "getIpBans"(): $IpBanList
public "getMaxPlayers"(): integer
public "getOpNames"(): string[]
public "getOps"(): $ServerOpList
public "getPlayer"(uUID0: $UUID$$Type): $ServerPlayer
public "getPlayerAdvancements"(serverPlayer0: $ServerPlayer$$Type): $PlayerAdvancements
public "getPlayerByName"(string0: string): $ServerPlayer
public "getPlayerCount"(): integer
public "getPlayerForLogin"(gameProfile0: $GameProfile$$Type): $ServerPlayer
public "getPlayerNamesArray"(): string[]
public "getPlayerStats"(player0: $Player$$Type): $ServerStatsCounter
public "getPlayers"(): $List<$ServerPlayer>
public "getPlayersWithAddress"(string0: string): $List<$ServerPlayer>
public "getServer"(): $MinecraftServer
public "getSimulationDistance"(): integer
public "getSingleplayerData"(): $CompoundTag
public "getViewDistance"(): integer
public "getWhiteList"(): $UserWhiteList
public "getWhiteListNames"(): string[]
public "handler$cob000$onSendWorldInfo"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$ddm001$onSendWorldInfo"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$zch000$onSendLevelInfo"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isAllowCheatsForAllPlayers"(): boolean
public "isOp"(gameProfile0: $GameProfile$$Type): boolean
public "isUsingWhitelist"(): boolean
public "isWhiteListed"(gameProfile0: $GameProfile$$Type): boolean
public "load"(serverPlayer0: $ServerPlayer$$Type): $CompoundTag
public "op"(gameProfile0: $GameProfile$$Type): void
public "placeNewPlayer"(connection0: $Connection$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "reloadResources"(): void
public "reloadWhiteList"(): void
public "remove"(serverPlayer0: $ServerPlayer$$Type): void
public "removeAll"(): void
public "respawn"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): $ServerPlayer
public "saveAll"(): void
public "sendAllPlayerInfo"(serverPlayer0: $ServerPlayer$$Type): void
public "sendLevelInfo"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type): void
public "sendPlayerPermissionLevel"(serverPlayer0: $ServerPlayer$$Type): void
public "setAllowCheatsForAllPlayers"(boolean0: boolean): void
public "setSimulationDistance"(int0: integer): void
public "setUsingWhiteList"(boolean0: boolean): void
public "setViewDistance"(int0: integer): void
public "tick"(): void
get "bans"(): $UserBanList
get "ipBans"(): $IpBanList
get "maxPlayers"(): integer
get "opNames"(): string[]
get "ops"(): $ServerOpList
get "playerCount"(): integer
get "playerNamesArray"(): string[]
get "players"(): $List<$ServerPlayer>
get "server"(): $MinecraftServer
get "simulationDistance"(): integer
get "singleplayerData"(): $CompoundTag
get "viewDistance"(): integer
get "whiteList"(): $UserWhiteList
get "whiteListNames"(): string[]
get "allowCheatsForAllPlayers"(): boolean
get "usingWhitelist"(): boolean
set "allowCheatsForAllPlayers"(value: boolean)
set "simulationDistance"(value: integer)
set "usingWhiteList"(value: boolean)
set "viewDistance"(value: integer)
}
}

declare module "packages/net/minecraft/server/players/$UserWhiteList" {
import { $UserWhiteListEntry } from "packages/net/minecraft/server/players/$UserWhiteListEntry"
import { $StoredUserList } from "packages/net/minecraft/server/players/$StoredUserList"
import { $File$$Type } from "packages/java/io/$File"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"

export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
constructor(file0: $File$$Type)

public "isWhiteListed"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "packages/net/minecraft/server/$MinecraftServer$ServerResourcePackInfo" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"

export class $MinecraftServer$ServerResourcePackInfo extends $Record {
constructor(url: string, hash: string, isRequired: boolean, prompt: $Component$$Type)

public "hash"(): string
public "isRequired"(): boolean
public "prompt"(): $Component
public "url"(): string
get "required"(): boolean
}
}

declare module "packages/net/minecraft/server/level/$ChunkHolder$LevelChangeListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"

export interface $ChunkHolder$LevelChangeListener {
"onLevelChange"(chunkPos0: $ChunkPos$$Type, intSupplier1: $IntSupplier$$Type, int2: integer, intConsumer3: $IntConsumer$$Type): void
}

export namespace $ChunkHolder$LevelChangeListener {
const probejs$$marker: never
}
export abstract class $ChunkHolder$LevelChangeListener$$Static implements $ChunkHolder$LevelChangeListener {
}
}

declare module "packages/net/minecraft/server/$MinecraftServer$ReloadableResources" {
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$CloseableResourceManager"
import { $Record } from "packages/java/lang/$Record"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"

export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
constructor(resourceManager: $CloseableResourceManager$$Type, managers: $ReloadableServerResources$$Type)

public "close"(): void
public "managers"(): $ReloadableServerResources
public "resourceManager"(): $CloseableResourceManager
}
}

declare module "packages/net/minecraft/server/network/$ServerConnectionListener" {
import { $NioEventLoopGroup } from "packages/io/netty/channel/nio/$NioEventLoopGroup"
import { $SocketAddress } from "packages/java/net/$SocketAddress"
import { $LazyLoadedValue } from "packages/net/minecraft/util/$LazyLoadedValue"
import { $Connection } from "packages/net/minecraft/network/$Connection"
import { $List } from "packages/java/util/$List"
import { $MinecraftServer, $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $InetAddress$$Type } from "packages/java/net/$InetAddress"
import { $EpollEventLoopGroup } from "packages/io/netty/channel/epoll/$EpollEventLoopGroup"

export class $ServerConnectionListener {
static readonly "SERVER_EPOLL_EVENT_GROUP": $LazyLoadedValue<$EpollEventLoopGroup>
static readonly "SERVER_EVENT_GROUP": $LazyLoadedValue<$NioEventLoopGroup>

constructor(minecraftServer0: $MinecraftServer$$Type)

public "getConnections"(): $List<$Connection>
public "getServer"(): $MinecraftServer
public "startMemoryChannel"(): $SocketAddress
public "startTcpServerListener"(inetAddress0: $InetAddress$$Type, int1: integer): void
public "stop"(): void
public "tick"(): void
get "running"(): boolean
set "running"(value: boolean)
get "connections"(): $List<$Connection>
get "server"(): $MinecraftServer
}
}

declare module "packages/net/minecraft/server/packs/resources/$FallbackResourceManager$PackEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PackResources } from "packages/net/minecraft/server/packs/$PackResources"

export class $FallbackResourceManager$PackEntry extends $Record {
public "filter"(): $Predicate<$ResourceLocation>
public "filterAll"(collection0: $Collection$$Type<$ResourceLocation$$Type>): void
public "isFiltered"(resourceLocation0: $ResourceLocation$$Type): boolean
public "name"(): string
public "resources"(): $PackResources
}
}

declare module "packages/net/minecraft/server/$ServerAdvancementManager" {
import { $SimpleJsonResourceReloadListener } from "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener"
import { $Collection } from "packages/java/util/$Collection"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $LootDataManager$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Advancement } from "packages/net/minecraft/advancements/$Advancement"

export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
/** @deprecated */
constructor(lootDataManager0: $LootDataManager$$Type)
constructor(lootDataManager0: $LootDataManager$$Type, iContext1: $ICondition$IContext$$Type)

public "getAdvancement"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllAdvancements"(): $Collection<$Advancement>
public "getName"(): string
get "allAdvancements"(): $Collection<$Advancement>
get "name"(): string
}
}

declare module "packages/net/minecraft/server/$WorldStem" {
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$CloseableResourceManager"
import { $WorldData, $WorldData$$Type } from "packages/net/minecraft/world/level/storage/$WorldData"
import { $Record } from "packages/java/lang/$Record"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $RegistryLayer, $RegistryLayer$$Type } from "packages/net/minecraft/server/$RegistryLayer"
import { $LayeredRegistryAccess, $LayeredRegistryAccess$$Type } from "packages/net/minecraft/core/$LayeredRegistryAccess"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"

export class $WorldStem extends $Record implements $AutoCloseable {
constructor(closeableResourceManager0: $CloseableResourceManager$$Type, reloadableServerResources1: $ReloadableServerResources$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, worldData3: $WorldData$$Type)

public "close"(): void
public "dataPackResources"(): $ReloadableServerResources
public "registries"(): $LayeredRegistryAccess<$RegistryLayer>
public "resourceManager"(): $CloseableResourceManager
public "worldData"(): $WorldData
}
}

declare module "packages/net/minecraft/server/players/$UserWhiteListEntry" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $StoredUserEntry } from "packages/net/minecraft/server/players/$StoredUserEntry"
import { $GameProfile, $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"

export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
constructor(gameProfile0: $GameProfile$$Type)
constructor(jsonObject0: $JsonObject$$Type)

}
}

declare module "packages/net/minecraft/server/packs/repository/$Pack$Position" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Enum } from "packages/java/lang/$Enum"
import { $List$$Type } from "packages/java/util/$List"
import { $Pack } from "packages/net/minecraft/server/packs/repository/$Pack"

export class $Pack$Position extends $Enum<$Pack$Position> {
static readonly "BOTTOM": $Pack$Position
static readonly "TOP": $Pack$Position

public "insert"<T>(list0: $List$$Type<T>, t1: T, function2: $Function$$Type<T, $Pack>, boolean3: boolean): integer
public "opposite"(): $Pack$Position
public static "valueOf"(string0: string): $Pack$Position
public static "values"(): $Pack$Position[]
}
}

declare module "packages/net/minecraft/server/packs/resources/$IoSupplier" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ZipFile$$Type } from "packages/java/util/zip/$ZipFile"
import { $InputStream } from "packages/java/io/$InputStream"
import { $ZipEntry$$Type } from "packages/java/util/zip/$ZipEntry"

export interface $IoSupplier<T> {
"get"(): T
}

export namespace $IoSupplier {
function create(path0: $Path$$Type): $IoSupplier<$InputStream>
function create(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
}
export abstract class $IoSupplier$$Static<T> implements $IoSupplier<T> {
static "create"(path0: $Path$$Type): $IoSupplier<$InputStream>
static "create"(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
}
}

