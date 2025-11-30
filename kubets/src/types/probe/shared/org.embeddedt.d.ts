declare module "packages/org/embeddedt/embeddium/client/gui/options/$OptionIdentifier" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $OptionIdentifier<T> {
static readonly "EMPTY": $OptionIdentifier<void>

public static "create"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): $OptionIdentifier<T>
public static "create"(resourceLocation0: $ResourceLocation$$Type): $OptionIdentifier<void>
public static "create"<T>(string0: string, string1: string, class2: $Class$$Type<T>): $OptionIdentifier<T>
public static "create"(string0: string, string1: string): $OptionIdentifier<void>
public "getModId"(): string
public "getPath"(): string
public "getType"(): $Class<T>
public static "isPresent"(optionIdentifier0: $OptionIdentifier$$Type<any>): boolean
public "matches"(resourceLocation0: $ResourceLocation$$Type): boolean
public "matches"(optionIdentifier0: $OptionIdentifier$$Type<any>): boolean
get "modId"(): string
get "path"(): string
get "type"(): $Class<T>
}
}

declare module "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export interface $EmbeddiumBakedModelExtension {
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
}

export namespace $EmbeddiumBakedModelExtension {
const probejs$$marker: never
}
export abstract class $EmbeddiumBakedModelExtension$$Static implements $EmbeddiumBakedModelExtension {
}
}

declare module "packages/org/embeddedt/embeddium/api/$OptionPageConstructionEvent" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $OptionIdentifier, $OptionIdentifier$$Type } from "packages/org/embeddedt/embeddium/client/gui/options/$OptionIdentifier"
import { $List } from "packages/java/util/$List"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"
import { $OptionGroup, $OptionGroup$$Type } from "packages/me/jellysquid/mods/sodium/client/gui/options/$OptionGroup"

export class $OptionPageConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionPageConstructionEvent>

constructor()
constructor(optionIdentifier0: $OptionIdentifier$$Type<void>, component1: $Component$$Type)

public "addGroup"(optionGroup0: $OptionGroup$$Type): void
public "getAdditionalGroups"(): $List<$OptionGroup>
public "getId"(): $OptionIdentifier<void>
public "getName"(): $Component
get "additionalGroups"(): $List<$OptionGroup>
get "id"(): $OptionIdentifier<void>
get "name"(): $Component
}
}

declare module "packages/org/embeddedt/embeddium/api/render/chunk/$RenderSectionDistanceFilterEvent" {
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $RenderSectionDistanceFilter, $RenderSectionDistanceFilter$$Type } from "packages/org/embeddedt/embeddium/api/render/chunk/$RenderSectionDistanceFilter"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"

export class $RenderSectionDistanceFilterEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$RenderSectionDistanceFilterEvent>

constructor()

public "getFilter"(): $RenderSectionDistanceFilter
public "setFilter"(renderSectionDistanceFilter0: $RenderSectionDistanceFilter$$Type): void
get "filter"(): $RenderSectionDistanceFilter
set "filter"(value: $RenderSectionDistanceFilter$$Type)
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IStructureCheck" {
import { $ChunkGeneratorStructureState$$Type } from "packages/net/minecraft/world/level/chunk/$ChunkGeneratorStructureState"

export interface $IStructureCheck {
"mfix$setStructureState"(chunkGeneratorStructureState0: $ChunkGeneratorStructureState$$Type): void
}

export namespace $IStructureCheck {
const probejs$$marker: never
}
export abstract class $IStructureCheck$$Static implements $IStructureCheck {
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IChunkGenerator" {
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"

export interface $IChunkGenerator {
"mfix$setAssociatedServerLevel"(serverLevel0: $ServerLevel$$Type): void
}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
export abstract class $IChunkGenerator$$Static implements $IChunkGenerator {
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IExtendedModelBakery" {
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelResourceLocation$$Type } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $UnbakedModel } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $IExtendedModelBakery {
"bakeDefault"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type): $BakedModel
"getBlockStatesForMRL"(stateDefinition0: $StateDefinition$$Type<$Block$$Type, $BlockState$$Type>, modelResourceLocation1: $ModelResourceLocation$$Type): $ImmutableList<$BlockState>
"mfix$clearModels"(): void
"mfix$getUnbakedMissingModel"(): $UnbakedModel
}

export namespace $IExtendedModelBakery {
const probejs$$marker: never
}
export abstract class $IExtendedModelBakery$$Static implements $IExtendedModelBakery {
}
}

declare module "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$SortState" {
import { $Record } from "packages/java/lang/$Record"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $TranslucentQuadAnalyzer$Level, $TranslucentQuadAnalyzer$Level$$Type } from "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$Level"
import { $BitSet, $BitSet$$Type } from "packages/java/util/$BitSet"

export class $TranslucentQuadAnalyzer$SortState extends $Record {
static readonly "NONE": $TranslucentQuadAnalyzer$SortState

constructor(level: $TranslucentQuadAnalyzer$Level$$Type, centers: float[], normalSigns: $BitSet$$Type, sharedNormal: $Vector3f$$Type)

public "centers"(): float[]
public "compactForStorage"(): $TranslucentQuadAnalyzer$SortState
public "level"(): $TranslucentQuadAnalyzer$Level
public "normalSigns"(): $BitSet
public "requiresDynamicSorting"(): boolean
public "sharedNormal"(): $Vector3f
}
}

declare module "packages/org/embeddedt/embeddium/api/$ChunkMeshEvent" {
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $SectionPos, $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $List } from "packages/java/util/$List"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"
import { $MeshAppender, $MeshAppender$$Type } from "packages/org/embeddedt/embeddium/api/$MeshAppender"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"

export class $ChunkMeshEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ChunkMeshEvent>

constructor()

public "addMeshAppender"(meshAppender0: $MeshAppender$$Type): void
public "getSectionOrigin"(): $SectionPos
public "getWorld"(): $Level
public static "post"(level0: $Level$$Type, sectionPos1: $SectionPos$$Type): $List<$MeshAppender>
get "sectionOrigin"(): $SectionPos
get "world"(): $Level
}
}

declare module "packages/org/embeddedt/embeddium/api/$ChunkDataBuiltEvent" {
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"
import { $SectionInfoBuilder } from "packages/org/embeddedt/embeddium/api/render/chunk/$SectionInfoBuilder"
import { $BuiltSectionInfo$Builder$$Type } from "packages/me/jellysquid/mods/sodium/client/render/chunk/data/$BuiltSectionInfo$Builder"

export class $ChunkDataBuiltEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ChunkDataBuiltEvent>

constructor(builder0: $BuiltSectionInfo$Builder$$Type)
constructor()

public "getDataBuilder"(): $SectionInfoBuilder
get "dataBuilder"(): $SectionInfoBuilder
}
}

declare module "packages/org/embeddedt/embeddium/render/chunk/sorting/$TranslucentQuadAnalyzer$Level" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TranslucentQuadAnalyzer$Level extends $Enum<$TranslucentQuadAnalyzer$Level> {
static readonly "DYNAMIC": $TranslucentQuadAnalyzer$Level
static readonly "NONE": $TranslucentQuadAnalyzer$Level
static readonly "STATIC": $TranslucentQuadAnalyzer$Level
static readonly "VALUES": $TranslucentQuadAnalyzer$Level[]

public static "valueOf"(string0: string): $TranslucentQuadAnalyzer$Level
public static "values"(): $TranslucentQuadAnalyzer$Level[]
}
}

declare module "packages/org/embeddedt/modernfix/forge/registry/$DelegateHolder" {
import { $Holder$Reference, $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export interface $DelegateHolder<T> {
"mfix$getDelegate"(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Holder$Reference<T>
"mfix$setDelegate"(resourceKey0: $ResourceKey$$Type<$Registry<T>>, reference1: $Holder$Reference$$Type<T>): void
}

export namespace $DelegateHolder {
const probejs$$marker: never
}
export abstract class $DelegateHolder$$Static<T> implements $DelegateHolder<T> {
}
}

declare module "packages/org/embeddedt/embeddium/api/render/chunk/$RenderSectionDistanceFilter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderSectionDistanceFilter {
"isWithinDistance"(float0: float, float1: float, float2: float, float3: float): boolean
}

export namespace $RenderSectionDistanceFilter {
const DEFAULT: $RenderSectionDistanceFilter
}
export abstract class $RenderSectionDistanceFilter$$Static implements $RenderSectionDistanceFilter {
static readonly "DEFAULT": $RenderSectionDistanceFilter

}
}

declare module "packages/org/embeddedt/modernfix/duck/$ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {
"mfix$getLastTickStartTime"(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
export abstract class $ITimeTrackingServer$$Static implements $ITimeTrackingServer {
}
}

declare module "packages/org/embeddedt/embeddium/api/$MeshAppender" {
import { $MeshAppender$Context$$Type } from "packages/org/embeddedt/embeddium/api/$MeshAppender$Context"

export interface $MeshAppender {
"render"(context0: $MeshAppender$Context$$Type): void
}

export namespace $MeshAppender {
const probejs$$marker: never
}
export abstract class $MeshAppender$$Static implements $MeshAppender {
}
}

declare module "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $EmbeddiumEvent extends $Event {
constructor()

}
}

declare module "packages/org/embeddedt/modernfix/forge/mixin/perf/dynamic_resources/ctm/$CTMModelBakeryAccessor" {
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ModelBakery$BakedCacheKey } from "packages/net/minecraft/client/resources/model/$ModelBakery$BakedCacheKey"
import { $Map } from "packages/java/util/$Map"

export interface $CTMModelBakeryAccessor {
"mfix$getBakedCache"(): $Map<$ModelBakery$BakedCacheKey, $BakedModel>
}

export namespace $CTMModelBakeryAccessor {
const probejs$$marker: never
}
export abstract class $CTMModelBakeryAccessor$$Static implements $CTMModelBakeryAccessor {
}
}

declare module "packages/org/embeddedt/modernfix/world/$StrongholdLocationCache" {
import { $ChunkPos, $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SavedData } from "packages/net/minecraft/world/level/saveddata/$SavedData"
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"

export class $StrongholdLocationCache extends $SavedData {
constructor()

public "getChunkPosList"(): $List<$ChunkPos>
public static "getFileId"(dimensionType: $Holder$$Type<$DimensionType$$Type>): string
public static "load"(arg: $CompoundTag$$Type): $StrongholdLocationCache
public "setChunkPosList"(positions: $List$$Type<$ChunkPos$$Type>): void
get "chunkPosList"(): $List<$ChunkPos>
set "chunkPosList"(value: $List$$Type<$ChunkPos$$Type>)
}
}

declare module "packages/org/embeddedt/embeddium/api/render/chunk/$SectionInfoBuilder" {
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SectionInfoBuilder {
"addBlockEntity"(blockEntity0: $BlockEntity$$Type, boolean1: boolean): void
"addSprite"(textureAtlasSprite0: $TextureAtlasSprite$$Type): void
"removeBlockEntitiesIf"(predicate0: $Predicate$$Type<$BlockEntity$$Type>): void
}

export namespace $SectionInfoBuilder {
const probejs$$marker: never
}
export abstract class $SectionInfoBuilder$$Static implements $SectionInfoBuilder {
}
}

declare module "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {
"embeddium$setCachingEnabled"(boolean0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
export abstract class $CachingPoseStack$$Static implements $CachingPoseStack {
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {
"clearCache"(): void
"isCacheInvalid"(): boolean
get "cacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
export abstract class $IBlockState$$Static implements $IBlockState {
}
}

declare module "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockGetter } from "packages/net/minecraft/world/level/$BlockGetter"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $SafeBlockGetter implements $BlockGetter {
constructor(wrapped: $ServerLevel$$Type)

public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"(pos: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockState"(pos: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(pos: $BlockPos$$Type): $FluidState
public "getHeight"(): integer
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "shouldUse"(): boolean
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "height"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IModelHoldingBlockState" {
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $IModelHoldingBlockState {
"mfix$getModel"(): $BakedModel
"mfix$setModel"(bakedModel0: $BakedModel$$Type): void
}

export namespace $IModelHoldingBlockState {
const probejs$$marker: never
}
export abstract class $IModelHoldingBlockState$$Static implements $IModelHoldingBlockState {
}
}

declare module "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar" {
import { $EventHandlerRegistrar$Handler$$Type } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar$Handler"
import { $EmbeddiumEvent, $EmbeddiumEvent$$Type } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"

export class $EventHandlerRegistrar<T extends $EmbeddiumEvent> {
constructor()

public "addListener"(handler0: $EventHandlerRegistrar$Handler$$Type<T>): void
public "post"(t0: T): boolean
}
}

declare module "packages/org/embeddedt/modernfix/forge/mixin/bugfix/entity_pose_stack/$PoseStackAccessor" {
import { $Deque } from "packages/java/util/$Deque"
import { $PoseStack$Pose } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {
"getPoseStack"(): $Deque<$PoseStack$Pose>
get "poseStack"(): $Deque<$PoseStack$Pose>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export abstract class $PoseStackAccessor$$Static implements $PoseStackAccessor {
}
}

declare module "packages/org/embeddedt/embeddium/api/$OptionGUIConstructionEvent" {
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $OptionPage, $OptionPage$$Type } from "packages/me/jellysquid/mods/sodium/client/gui/options/$OptionPage"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"

export class $OptionGUIConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionGUIConstructionEvent>

constructor(list0: $List$$Type<$OptionPage$$Type>)
constructor()

public "addPage"(optionPage0: $OptionPage$$Type): void
public "getPages"(): $List<$OptionPage>
get "pages"(): $List<$OptionPage>
}
}

declare module "packages/org/embeddedt/modernfix/duck/$ISafeBlockGetter" {
import { $SafeBlockGetter } from "packages/org/embeddedt/modernfix/chunk/$SafeBlockGetter"

export interface $ISafeBlockGetter {
"mfix$getSafeBlockGetter"(): $SafeBlockGetter
}

export namespace $ISafeBlockGetter {
const probejs$$marker: never
}
export abstract class $ISafeBlockGetter$$Static implements $ISafeBlockGetter {
}
}

declare module "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {
"embeddium$epsilonize"(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
export abstract class $EpsilonizableBlockElement$$Static implements $EpsilonizableBlockElement {
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager {
"mfix$getProfilingResults"(): string
}

export namespace $IProfilingServerFunctionManager {
const probejs$$marker: never
}
export abstract class $IProfilingServerFunctionManager$$Static implements $IProfilingServerFunctionManager {
}
}

declare module "packages/org/embeddedt/embeddium/api/$OptionGroupConstructionEvent" {
import { $Option, $Option$$Type } from "packages/me/jellysquid/mods/sodium/client/gui/options/$Option"
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $OptionIdentifier, $OptionIdentifier$$Type } from "packages/org/embeddedt/embeddium/client/gui/options/$OptionIdentifier"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"

export class $OptionGroupConstructionEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$OptionGroupConstructionEvent>

constructor(optionIdentifier0: $OptionIdentifier$$Type<void>, list1: $List$$Type<$Option$$Type<any>>)
constructor()

public "getId"(): $OptionIdentifier<void>
public "getOptions"(): $List<$Option<any>>
get "id"(): $OptionIdentifier<void>
get "options"(): $List<$Option<any>>
}
}

declare module "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar$Handler" {
import { $EmbeddiumEvent, $EmbeddiumEvent$$Type } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"

export interface $EventHandlerRegistrar$Handler<T extends $EmbeddiumEvent> {
"acceptEvent"(t0: T): void
}

export namespace $EventHandlerRegistrar$Handler {
const probejs$$marker: never
}
export abstract class $EventHandlerRegistrar$Handler$$Static<T extends $EmbeddiumEvent> implements $EventHandlerRegistrar$Handler<T> {
}
}

declare module "packages/org/embeddedt/embeddium/api/$MeshAppender$Context" {
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Record } from "packages/java/lang/$Record"
import { $SectionPos, $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $ChunkBuildBuffers, $ChunkBuildBuffers$$Type } from "packages/me/jellysquid/mods/sodium/client/render/chunk/compile/$ChunkBuildBuffers"
import { $BlockAndTintGetter, $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $MeshAppender$Context extends $Record {
constructor(vertexConsumerProvider: $Function$$Type<$RenderType$$Type, $VertexConsumer>, blockRenderView: $BlockAndTintGetter$$Type, sectionOrigin: $SectionPos$$Type, sodiumBuildBuffers: $ChunkBuildBuffers$$Type)

public "blockRenderView"(): $BlockAndTintGetter
public "sectionOrigin"(): $SectionPos
public "sodiumBuildBuffers"(): $ChunkBuildBuffers
public "vertexConsumerProvider"(): $Function<$RenderType, $VertexConsumer>
}
}

declare module "packages/org/embeddedt/embeddium/api/render/clouds/$ModifyCloudRenderingEvent" {
import { $EmbeddiumEvent } from "packages/org/embeddedt/embeddium/api/eventbus/$EmbeddiumEvent"
import { $EventHandlerRegistrar } from "packages/org/embeddedt/embeddium/api/eventbus/$EventHandlerRegistrar"

export class $ModifyCloudRenderingEvent extends $EmbeddiumEvent {
static readonly "BUS": $EventHandlerRegistrar<$ModifyCloudRenderingEvent>

constructor(int0: integer)
constructor()

public "getCloudRenderDistance"(): integer
public "setCloudRenderDistance"(int0: integer): void
get "cloudRenderDistance"(): integer
set "cloudRenderDistance"(value: integer)
}
}

declare module "packages/org/embeddedt/modernfix/duck/$IServerLevel" {
import { $StrongholdLocationCache } from "packages/org/embeddedt/modernfix/world/$StrongholdLocationCache"

export interface $IServerLevel {
"mfix$getStrongholdCache"(): $StrongholdLocationCache
}

export namespace $IServerLevel {
const probejs$$marker: never
}
export abstract class $IServerLevel$$Static implements $IServerLevel {
}
}

