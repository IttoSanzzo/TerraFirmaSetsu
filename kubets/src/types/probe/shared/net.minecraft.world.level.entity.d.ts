declare module "packages/net/minecraft/world/level/entity/$EntityInLevelCallback" {
import { $Entity$RemovalReason$$Type } from "packages/net/minecraft/world/entity/$Entity$RemovalReason"

export interface $EntityInLevelCallback {
"onMove"(): void
"onRemove"(removalReason0: $Entity$RemovalReason$$Type): void
}

export namespace $EntityInLevelCallback {
const NULL: $EntityInLevelCallback
}
export abstract class $EntityInLevelCallback$$Static implements $EntityInLevelCallback {
static readonly "NULL": $EntityInLevelCallback

}
}

declare module "packages/net/minecraft/world/level/entity/$EntityTypeTest" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"

export interface $EntityTypeTest<B, T extends B> {
"getBaseClass"(): $Class<B>
"tryCast"(b0: B): T
get "baseClass"(): $Class<B>
}

export namespace $EntityTypeTest {
function forClass<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
}
export abstract class $EntityTypeTest$$Static<B, T extends B> implements $EntityTypeTest<B, T> {
static "forClass"<B, T extends B>(class0: $Class$$Type<T>): $EntityTypeTest<B, T>
}
}

declare module "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Visibility$$Type } from "packages/net/minecraft/world/level/entity/$Visibility"
import { $FullChunkStatus$$Type } from "packages/net/minecraft/server/level/$FullChunkStatus"
import { $EntityAccess, $EntityAccess$$Type } from "packages/net/minecraft/world/level/entity/$EntityAccess"
import { $Writer$$Type } from "packages/java/io/$Writer"
import { $LevelEntityGetter } from "packages/net/minecraft/world/level/entity/$LevelEntityGetter"
import { $EntityPersistentStorage$$Type } from "packages/net/minecraft/world/level/entity/$EntityPersistentStorage"
import { $LevelCallback$$Type } from "packages/net/minecraft/world/level/entity/$LevelCallback"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable {
constructor(class0: $Class$$Type<T>, levelCallback1: $LevelCallback$$Type<T>, entityPersistentStorage2: $EntityPersistentStorage$$Type<T>)

public "addLegacyChunkEntities"(stream0: $Stream$$Type<T>): void
public "addNewEntity"(t0: T): boolean
public "addNewEntityWithoutEvent"(t0: T): boolean
public "addWorldGenChunkEntities"(stream0: $Stream$$Type<T>): void
public "areEntitiesLoaded"(long0: long): boolean
public "autoSave"(): void
public "canPositionTick"(chunkPos0: $ChunkPos$$Type): boolean
public "canPositionTick"(blockPos0: $BlockPos$$Type): boolean
public "close"(): void
public "dumpSections"(writer0: $Writer$$Type): void
public "gatherStats"(): string
public "getEntityGetter"(): $LevelEntityGetter<T>
public "isLoaded"(uUID0: $UUID$$Type): boolean
public "saveAll"(): void
public "tick"(): void
public "updateChunkStatus"(chunkPos0: $ChunkPos$$Type, fullChunkStatus1: $FullChunkStatus$$Type): void
public "updateChunkStatus"(chunkPos0: $ChunkPos$$Type, visibility1: $Visibility$$Type): void
get "entityGetter"(): $LevelEntityGetter<T>
}
}

declare module "packages/net/minecraft/world/level/entity/$EntityAccess" {
import { $Entity$RemovalReason$$Type } from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import { $UUID } from "packages/java/util/$UUID"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $EntityInLevelCallback$$Type } from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"

export interface $EntityAccess {
"blockPosition"(): $BlockPos
"getBoundingBox"(): $AABB
"getId"(): integer
"getPassengersAndSelf"(): $Stream<$EntityAccess>
"getSelfAndPassengers"(): $Stream<$EntityAccess>
"getUUID"(): $UUID
"isAlwaysTicking"(): boolean
"setLevelCallback"(entityInLevelCallback0: $EntityInLevelCallback$$Type): void
"setRemoved"(removalReason0: $Entity$RemovalReason$$Type): void
"shouldBeSaved"(): boolean
get "boundingBox"(): $AABB
get "id"(): integer
get "passengersAndSelf"(): $Stream<$EntityAccess>
get "selfAndPassengers"(): $Stream<$EntityAccess>
get "uUID"(): $UUID
get "alwaysTicking"(): boolean
set "levelCallback"(value: $EntityInLevelCallback$$Type)
set "removed"(value: $Entity$RemovalReason$$Type)
}

export namespace $EntityAccess {
const probejs$$marker: never
}
export abstract class $EntityAccess$$Static implements $EntityAccess {
}
}

declare module "packages/net/minecraft/world/level/entity/$LevelCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelCallback<T> {
"onCreated"(t0: T): void
"onDestroyed"(t0: T): void
"onSectionChange"(t0: T): void
"onTickingEnd"(t0: T): void
"onTickingStart"(t0: T): void
"onTrackingEnd"(t0: T): void
"onTrackingStart"(t0: T): void
}

export namespace $LevelCallback {
const probejs$$marker: never
}
export abstract class $LevelCallback$$Static<T> implements $LevelCallback<T> {
}
}

declare module "packages/net/minecraft/world/level/entity/$ChunkStatusUpdateListener" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $FullChunkStatus$$Type } from "packages/net/minecraft/server/level/$FullChunkStatus"

export interface $ChunkStatusUpdateListener {
"onChunkStatusChange"(chunkPos0: $ChunkPos$$Type, fullChunkStatus1: $FullChunkStatus$$Type): void
}

export namespace $ChunkStatusUpdateListener {
const probejs$$marker: never
}
export abstract class $ChunkStatusUpdateListener$$Static implements $ChunkStatusUpdateListener {
}
}

declare module "packages/net/minecraft/world/level/entity/$EntityTickList" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityTickList {
constructor()

public "add"(entity0: $Entity$$Type): void
public "contains"(entity0: $Entity$$Type): boolean
public "forEach"(consumer0: $Consumer$$Type<$Entity$$Type>): void
public "remove"(entity0: $Entity$$Type): void
}
}

declare module "packages/net/minecraft/world/level/entity/$Visibility" {
import { $Enum } from "packages/java/lang/$Enum"
import { $FullChunkStatus$$Type } from "packages/net/minecraft/server/level/$FullChunkStatus"

export class $Visibility extends $Enum<$Visibility> {
static readonly "HIDDEN": $Visibility
static readonly "TICKING": $Visibility
static readonly "TRACKED": $Visibility

public static "fromFullChunkStatus"(fullChunkStatus0: $FullChunkStatus$$Type): $Visibility
public "isAccessible"(): boolean
public "isTicking"(): boolean
public static "valueOf"(string0: string): $Visibility
public static "values"(): $Visibility[]
get "accessible"(): boolean
get "ticking"(): boolean
}
}

declare module "packages/net/minecraft/world/level/entity/$ChunkEntities" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"

export class $ChunkEntities<T> {
constructor(chunkPos0: $ChunkPos$$Type, list1: $List$$Type<T>)

public "getEntities"(): $Stream<T>
public "getPos"(): $ChunkPos
public "isEmpty"(): boolean
get "entities"(): $Stream<T>
get "pos"(): $ChunkPos
get "empty"(): boolean
}
}

declare module "packages/net/minecraft/world/level/entity/$LevelEntityGetter" {
import { $AbortableIterationConsumer$$Type } from "packages/net/minecraft/util/$AbortableIterationConsumer"
import { $EntityTypeTest$$Type } from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $EntityAccess } from "packages/net/minecraft/world/level/entity/$EntityAccess"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export interface $LevelEntityGetter<T extends $EntityAccess> {
"get"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, abortableIterationConsumer1: $AbortableIterationConsumer$$Type<U>): void
"get"(uUID0: $UUID$$Type): T
"get"(aABB0: $AABB$$Type, consumer1: $Consumer$$Type<T>): void
"get"<U extends T>(entityTypeTest0: $EntityTypeTest$$Type<T, U>, aABB1: $AABB$$Type, abortableIterationConsumer2: $AbortableIterationConsumer$$Type<U>): void
"get"(int0: integer): T
"getAll"(): $Iterable<T>
get "all"(): $Iterable<T>
}

export namespace $LevelEntityGetter {
const probejs$$marker: never
}
export abstract class $LevelEntityGetter$$Static<T extends $EntityAccess> implements $LevelEntityGetter<T> {
}
}

declare module "packages/net/minecraft/world/level/entity/$EntityPersistentStorage" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $ChunkEntities, $ChunkEntities$$Type } from "packages/net/minecraft/world/level/entity/$ChunkEntities"

export interface $EntityPersistentStorage<T> extends $AutoCloseable {
"close"(): void
"flush"(boolean0: boolean): void
"loadEntities"(chunkPos0: $ChunkPos$$Type): $CompletableFuture<$ChunkEntities<T>>
"storeEntities"(chunkEntities0: $ChunkEntities$$Type<T>): void
}

export namespace $EntityPersistentStorage {
const probejs$$marker: never
}
export abstract class $EntityPersistentStorage$$Static<T> implements $EntityPersistentStorage<T> {
}
}

