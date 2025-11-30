declare module "packages/net/createmod/ponder/api/$VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity {
"isVirtual"(): boolean
"markVirtual"(): void
get "virtual"(): boolean
}

export namespace $VirtualBlockEntity {
const probejs$$marker: never
}
export abstract class $VirtualBlockEntity$$Static implements $VirtualBlockEntity {
}
}

declare module "packages/net/createmod/catnip/levelWrappers/$WrappedLevel" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $SoundSource$$Type } from "packages/net/minecraft/sounds/$SoundSource"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GameEvent$Context$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $ChunkSource$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import { $ChunkAccess } from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $TargetingConditions$$Type } from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import { $Optional } from "packages/java/util/$Optional"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $Trackable } from "packages/dev/uncandango/alltheleaks/mixin/$Trackable"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ChunkStatus$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $WeakReference } from "packages/java/lang/ref/$WeakReference"
import { $HolderLookup } from "packages/net/minecraft/core/$HolderLookup"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ObjectOpenCustomHashSet } from "packages/it/unimi/dsi/fastutil/objects/$ObjectOpenCustomHashSet"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $CollisionContext$$Type } from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import { $FireworksJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$FireworksJS"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $ExplosionJS } from "packages/dev/latvian/mods/kubejs/level/$ExplosionJS"
import { $TickPriority$$Type } from "packages/net/minecraft/world/ticks/$TickPriority"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map } from "packages/java/util/$Map"

export class $WrappedLevel extends $Level {
constructor(level0: $Level$$Type)

public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<$Entity>
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLevel"(): $Level
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMinBuildHeight"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(): $EntityArrayList
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isOverworld"(): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "self"(): $Level
public "setChunkSource"(chunkSource0: $ChunkSource$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "startTracking"(): void
public static "startTracking"(object0: any): void
public "tell"(message: $Component$$Type): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "wrap"(): $WeakReference<$Trackable>
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "height"(): integer
get "level"(): $Level
get "maxLightLevel"(): integer
get "minBuildHeight"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "players"(): $EntityArrayList
get "side"(): $ScriptType
get "overworld"(): boolean
set "chunkSource"(value: $ChunkSource$$Type)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "packages/net/createmod/catnip/animation/$LerpedFloat" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LerpedFloat$Interpolator$$Type } from "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator"
import { $LerpedFloat$Chaser$$Type } from "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser"

export class $LerpedFloat {
constructor(interpolator0: $LerpedFloat$Interpolator$$Type)

public static "angular"(): $LerpedFloat
public "chase"(double0: double, double1: double, chaser2: $LerpedFloat$Chaser$$Type): $LerpedFloat
public "chaseTimed"(double0: double, int1: integer): $LerpedFloat
public "disableSmartAngleChasing"(): $LerpedFloat
public "forceNextSync"(): void
public "getChaseTarget"(): float
public "getValue"(): float
public "getValue"(float0: float): float
public static "linear"(): $LerpedFloat
public "readNBT"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
public "setValue"(double0: double): void
public "setValueNoUpdate"(double0: double): void
public "settled"(): boolean
public "startWithValue"(double0: double): $LerpedFloat
public "tickChaser"(): void
public "updateChaseSpeed"(double0: double): boolean
public "updateChaseTarget"(float0: float): void
public "writeNBT"(): $CompoundTag
get "chaseTarget"(): float
get "value"(): float
set "value"(value: double)
set "valueNoUpdate"(value: double)
}
}

declare module "packages/net/createmod/ponder/mixin/client/accessor/$ParticleEngineAccessor" {
import { $ParticleProvider } from "packages/net/minecraft/client/particle/$ParticleProvider"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map } from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {
"ponder$getProviders"(): $Map<$ResourceLocation, $ParticleProvider<any>>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export abstract class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {
}
}

declare module "packages/net/createmod/catnip/gui/$TickableGuiEventListener" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $TickableGuiEventListener extends $GuiEventListener {
"charTyped"(char0: character, int1: integer): boolean
"getCurrentFocusPath"(): $ComponentPath
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setFocused"(boolean0: boolean): void
"tick"(): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}

export namespace $TickableGuiEventListener {
const probejs$$marker: never
}
export abstract class $TickableGuiEventListener$$Static implements $TickableGuiEventListener {
}
}

declare module "packages/net/createmod/catnip/data/$WorldAttached" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export class $WorldAttached<T> {
constructor(function0: $Function$$Type<$LevelAccessor$$Type, T>)

public "empty"(biConsumer0: $BiConsumer$$Type<$LevelAccessor$$Type, T>): void
public "empty"(consumer0: $Consumer$$Type<T>): void
public "get"(levelAccessor0: $LevelAccessor$$Type): T
public static "invalidateWorld"(levelAccessor0: $LevelAccessor$$Type): void
public "put"(levelAccessor0: $LevelAccessor$$Type, t1: T): void
public "replace"(levelAccessor0: $LevelAccessor$$Type, consumer1: $Consumer$$Type<T>): T
public "replace"(levelAccessor0: $LevelAccessor$$Type): T
}
}

declare module "packages/net/createmod/catnip/lang/$LangBuilder" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Color$$Type } from "packages/net/createmod/catnip/theme/$Color"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List$$Type } from "packages/java/util/$List"
import { $MutableComponent, $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $ChatFormatting$$Type } from "packages/net/minecraft/$ChatFormatting"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(string0: string)

public "add"(langBuilder0: $LangBuilder$$Type): $LangBuilder
public "add"(mutableComponent0: $MutableComponent$$Type): $LangBuilder
public "add"(component0: $Component$$Type): $LangBuilder
public "addTo"(list0: $List$$Type<$MutableComponent$$Type>): void
public "color"(int0: integer): $LangBuilder
public "color"(color0: $Color$$Type): $LangBuilder
public "component"(): $MutableComponent
public "forGoggles"(list0: $List$$Type<$MutableComponent$$Type>, int1: integer): void
public "forGoggles"(list0: $List$$Type<$MutableComponent$$Type>): void
public "json"(): string
public "newLine"(): $LangBuilder
public static "resolveBuilders"(object0s: any[]): any[]
public "sendChat"(player0: $Player$$Type): void
public "sendStatus"(player0: $Player$$Type): void
public "space"(): $LangBuilder
public "string"(): string
public "style"(chatFormatting0: $ChatFormatting$$Type): $LangBuilder
public "text"(string0: string): $LangBuilder
public "text"(int0: integer, string1: string): $LangBuilder
public "text"(chatFormatting0: $ChatFormatting$$Type, string1: string): $LangBuilder
public "translate"(string0: string, ...object1s: any[]): $LangBuilder
}
}

declare module "packages/net/createmod/catnip/data/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F, S> {
public "copy"(): $Pair<F, S>
public "getFirst"(): F
public "getSecond"(): S
public static "of"<F, S>(f0: F, s1: S): $Pair<F, S>
public "setFirst"(f0: F): void
public "setSecond"(s0: S): void
public "swap"(): $Pair<S, F>
get "first"(): F
get "second"(): S
set "first"(value: F)
set "second"(value: S)
}
}

declare module "packages/net/createmod/ponder/mixin/accessor/$EntityAccessor" {
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {
"catnip$callSetLevel"(level0: $Level$$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Color } from "packages/net/createmod/catnip/theme/$Color"
import { $TickableGuiEventListener } from "packages/net/createmod/catnip/gui/$TickableGuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $List } from "packages/java/util/$List"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $Couple } from "packages/net/createmod/catnip/data/$Couple"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
static readonly "COLOR_CLICK": $Couple<$Color>
static readonly "COLOR_DISABLED": $Couple<$Color>
static readonly "COLOR_FAIL": $Couple<$Color>
static readonly "COLOR_HOVER": $Couple<$Color>
static readonly "COLOR_IDLE": $Couple<$Color>
static readonly "COLOR_SUCCESS": $Couple<$Color>
static readonly "HEADER_RGB": $Color
static readonly "HINT_RGB": $Color

public "atZLevel"<T extends $AbstractSimiWidget>(float0: float): T
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getToolTip"(): $List<$Component>
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_168797_"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "runCallback"(double0: double, double1: double): void
public "setActive"<T extends $AbstractSimiWidget>(boolean0: boolean): T
public "setPosition"(int0: integer, int1: integer): void
public "tick"(): void
public "withCallback"<T extends $AbstractSimiWidget>(runnable0: $Runnable$$Type): T
public "withCallback"<T extends $AbstractSimiWidget>(biConsumer0: $BiConsumer$$Type<integer, integer>): T
get "lockedTooltipX"(): integer
set "lockedTooltipX"(value: integer)
get "lockedTooltipY"(): integer
set "lockedTooltipY"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "toolTip"(): $List<$Component>
set "active"(value: boolean)
}
}

declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser {
"chase"(double0: double, double1: double, double2: double): float
}

export namespace $LerpedFloat$Chaser {
const EXP: $LerpedFloat$Chaser
const IDLE: $LerpedFloat$Chaser
const LINEAR: $LerpedFloat$Chaser
function exp(double0: double): $LerpedFloat$Chaser
}
export abstract class $LerpedFloat$Chaser$$Static implements $LerpedFloat$Chaser {
static readonly "EXP": $LerpedFloat$Chaser
static readonly "IDLE": $LerpedFloat$Chaser
static readonly "LINEAR": $LerpedFloat$Chaser

static "exp"(double0: double): $LerpedFloat$Chaser
}
}

declare module "packages/net/createmod/catnip/data/$Couple" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Pair } from "packages/net/createmod/catnip/data/$Pair"
import { $ListTag, $ListTag$$Type } from "packages/net/minecraft/nbt/$ListTag"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Iterator } from "packages/java/util/$Iterator"

export class $Couple<T> extends $Pair<T, T> implements $Iterable<T> {
public "both"(predicate0: $Predicate$$Type<T>): boolean
public static "create"<T>(t0: T, t1: T): $Couple<T>
public static "create"<T>(supplier0: $Supplier$$Type<T>): $Couple<T>
public static "createWithContext"<T>(function0: $Function$$Type<boolean, T>): $Couple<T>
public static "deserializeEach"<S>(listTag0: $ListTag$$Type, function1: $Function$$Type<$CompoundTag$$Type, S>): $Couple<S>
public "either"(predicate0: $Predicate$$Type<T>): boolean
public "forEach"(consumer0: $Consumer$$Type<T>): void
public "forEachWithContext"(biConsumer0: $BiConsumer$$Type<T, boolean>): void
public "forEachWithParams"<S>(biConsumer0: $BiConsumer$$Type<T, S>, couple1: $Couple$$Type<S>): void
public "get"(boolean0: boolean): T
public "iterator"(): $Iterator<T>
public "map"<S>(function0: $Function$$Type<T, S>): $Couple<S>
public "mapNotNull"<S>(function0: $Function$$Type<T, S>): $Couple<S>
public "mapNotNullWithParam"<S, R>(biFunction0: $BiFunction$$Type<T, R, S>, r1: R): $Couple<S>
public "mapWithContext"<S>(biFunction0: $BiFunction$$Type<T, boolean, S>): $Couple<S>
public "mapWithParams"<S, R>(biFunction0: $BiFunction$$Type<T, R, S>, couple1: $Couple$$Type<R>): $Couple<S>
public "replace"(function0: $Function$$Type<T, T>): void
public "replaceWithContext"(biFunction0: $BiFunction$$Type<T, boolean, T>): void
public "replaceWithParams"<S>(biFunction0: $BiFunction$$Type<T, S, T>, couple1: $Couple$$Type<S>): void
public "serializeEach"(function0: $Function$$Type<T, $CompoundTag>): $ListTag
public "set"(boolean0: boolean, t1: T): void
public "spliterator"(): $Spliterator<T>
public "stream"(): $Stream<T>
[Symbol.iterator](): IterableIterator<T>;
}
}

declare module "packages/net/createmod/ponder/mixin/client/accessor/$BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor {
"catnip$getVertices"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export abstract class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {
}
}

declare module "packages/net/createmod/catnip/theme/$Color" {
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Style } from "packages/net/minecraft/network/chat/$Style"
import { $Couple$$Type } from "packages/net/createmod/catnip/data/$Couple"

export class $Color {
static readonly "BLACK": $Color
static readonly "GREEN": $Color
static readonly "PURPLE": $Color
static readonly "RED": $Color
static readonly "SPRING_GREEN": $Color
static readonly "TRANSPARENT_BLACK": $Color
static readonly "WHITE": $Color

constructor(int0: integer, boolean1: boolean)
constructor(int0: integer)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(int0: integer, int1: integer, int2: integer)

public "asStyle"(): $Style
public "asVector"(): $Vec3
public "asVectorF"(): $Vector3f
public "brighter"(): $Color
public "copy"(): $Color
public "copy"(boolean0: boolean): $Color
public "darker"(): $Color
public "ensureMutable"(): $Color
public static "generateFromLong"(long0: long): $Color
public "getAlpha"(): integer
public "getAlphaAsFloat"(): float
public "getBlue"(): integer
public "getBlueAsFloat"(): float
public "getGreen"(): integer
public "getGreenAsFloat"(): float
public "getRGB"(): integer
public "getRed"(): integer
public "getRedAsFloat"(): float
public static "mixColors"(color0: $Color$$Type, color1: $Color$$Type, float2: float): $Color
public static "mixColors"(couple0: $Couple$$Type<$Color$$Type>, float1: float): $Color
public static "mixColors"(int0: integer, int1: integer, float2: float): integer
public "mixWith"(color0: $Color$$Type, float1: float): $Color
public "modifyValue"(unaryOperator0: $UnaryOperator$$Type<integer>): $Color
public static "rainbowColor"(int0: integer): $Color
public "scaleAlpha"(float0: float): $Color
public "scaleAlphaForText"(float0: float): $Color
public "setAlpha"(float0: float): $Color
public "setAlpha"(int0: integer): $Color
public "setBlue"(float0: float): $Color
public "setBlue"(int0: integer): $Color
public "setGreen"(int0: integer): $Color
public "setGreen"(float0: float): $Color
public "setImmutable"(): $Color
public "setRed"(float0: float): $Color
public "setRed"(int0: integer): $Color
public "setValue"(int0: integer): $Color
get "alpha"(): integer
get "alphaAsFloat"(): float
get "blue"(): integer
get "blueAsFloat"(): float
get "green"(): integer
get "greenAsFloat"(): float
get "rGB"(): integer
get "red"(): integer
get "redAsFloat"(): float
set "alpha"(value: float)
set "alpha"(value: integer)
set "blue"(value: float)
set "blue"(value: integer)
set "green"(value: integer)
set "green"(value: float)
set "red"(value: float)
set "red"(value: integer)
set "value"(value: integer)
}
}

declare module "packages/net/createmod/ponder/mixin/client/accessor/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "packages/net/createmod/ponder/mixin/client/accessor/$GameRendererAccessor" {
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {
"catnip$callGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator {
"interpolate"(double0: double, double1: double, double2: double): float
}

export namespace $LerpedFloat$Interpolator {
const probejs$$marker: never
}
export abstract class $LerpedFloat$Interpolator$$Static implements $LerpedFloat$Interpolator {
}
}

