declare module "packages/net/minecraft/client/renderer/chunk/$RenderChunkRegion" {
import { $ModelDataManager } from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import { $LevelLightEngine } from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import { $LevelHeightAccessor } from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import { $VoxelShape, $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ClipBlockStateContext$$Type } from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $FluidState } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ClipContext$$Type } from "packages/net/minecraft/world/level/$ClipContext"
import { $ColorResolver$$Type } from "packages/net/minecraft/world/level/$ColorResolver"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $BlockAndTintGetter } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"

export class $RenderChunkRegion implements $BlockAndTintGetter {
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
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

declare module "packages/net/minecraft/client/renderer/block/$ModelBlockRenderer" {
import { $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $ModelData$$Type } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $ModelBlockRenderer {
constructor(blockColors0: $BlockColors$$Type)

public static "clearCache"(): void
public static "enableCaching"(): void
public "renderModel"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, blockState2: $BlockState$$Type, bakedModel3: $BakedModel$$Type, float4: float, float5: float, float6: float, int7: integer, int8: integer, modelData9: $ModelData$$Type, renderType10: $RenderType$$Type): void
/** @deprecated */
public "renderModel"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, blockState2: $BlockState$$Type, bakedModel3: $BakedModel$$Type, float4: float, float5: float, float6: float, int7: integer, int8: integer): void
public "tesselateBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
/** @deprecated */
public "tesselateBlock"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
public "tesselateWithAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
/** @deprecated */
public "tesselateWithAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
public "tesselateWithoutAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer, modelData10: $ModelData$$Type, renderType11: $RenderType$$Type): void
/** @deprecated */
public "tesselateWithoutAO"(blockAndTintGetter0: $BlockAndTintGetter$$Type, bakedModel1: $BakedModel$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, randomSource7: $RandomSource$$Type, long8: long, int9: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $DebugRenderer$SimpleDebugRenderer {
"clear"(): void
"render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}

export namespace $DebugRenderer$SimpleDebugRenderer {
const probejs$$marker: never
}
export abstract class $DebugRenderer$SimpleDebugRenderer$$Static implements $DebugRenderer$SimpleDebugRenderer {
}
}

declare module "packages/net/minecraft/client/renderer/$RenderType$CompositeRenderType" {
import { $RenderType$CompositeState } from "packages/net/minecraft/client/renderer/$RenderType$CompositeState"
import { $BlendingStateHolder } from "packages/net/irisshaders/batchedentityrendering/impl/$BlendingStateHolder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction } from "packages/java/util/function/$BiFunction"
import { $RenderStateShard$CullStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderType$CompositeRenderType extends $RenderType implements $BlendingStateHolder {
static readonly "OUTLINE": $BiFunction<$ResourceLocation, $RenderStateShard$CullStateShard, $RenderType>
readonly "state": $RenderType$CompositeState

public "state"(): $RenderType$CompositeState
}
}

declare module "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer$PoiInfo" {
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BrainDebugRenderer$PoiInfo {
readonly "pos": $BlockPos

constructor(blockPos0: $BlockPos$$Type, string1: string, int2: integer)

get "freeTicketCount"(): integer
set "freeTicketCount"(value: integer)
get "type"(): string
set "type"(value: string)
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemOverrides" {
import { $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $BlockModel$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import { $ModelBaker$$Type } from "packages/net/minecraft/client/resources/model/$ModelBaker"
import { $ItemOverride$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemOverride"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemOverrides$BakedOverride } from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides$BakedOverride"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $List$$Type } from "packages/java/util/$List"
import { $UnbakedModel$$Type } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ItemOverrides {
static readonly "EMPTY": $ItemOverrides
static readonly "NO_OVERRIDE": float

constructor(modelBaker0: $ModelBaker$$Type, unbakedModel1: $UnbakedModel$$Type, list2: $List$$Type<$ItemOverride$$Type>, function3: $Function$$Type<$Material$$Type, $TextureAtlasSprite>)
/** @deprecated */
constructor(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, list2: $List$$Type<$ItemOverride$$Type>)
constructor()

public "getOverrides"(): $ImmutableList<$ItemOverrides$BakedOverride>
public "resolve"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, clientLevel2: $ClientLevel$$Type, livingEntity3: $LivingEntity$$Type, int4: integer): $BakedModel
get "overrides"(): $ImmutableList<$ItemOverrides$BakedOverride>
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemTransforms" {
import { $ItemDisplayContext, $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $ItemTransform, $ItemTransform$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemTransform"

export class $ItemTransforms {
static readonly "NO_TRANSFORMS": $ItemTransforms
readonly "firstPersonLeftHand": $ItemTransform
readonly "firstPersonRightHand": $ItemTransform
readonly "fixed": $ItemTransform
readonly "ground": $ItemTransform
readonly "gui": $ItemTransform
readonly "head": $ItemTransform
readonly "moddedTransforms": $ImmutableMap<$ItemDisplayContext, $ItemTransform>
readonly "thirdPersonLeftHand": $ItemTransform
readonly "thirdPersonRightHand": $ItemTransform

constructor(itemTransform0: $ItemTransform$$Type, itemTransform1: $ItemTransform$$Type, itemTransform2: $ItemTransform$$Type, itemTransform3: $ItemTransform$$Type, itemTransform4: $ItemTransform$$Type, itemTransform5: $ItemTransform$$Type, itemTransform6: $ItemTransform$$Type, itemTransform7: $ItemTransform$$Type, immutableMap8: $ImmutableMap$$Type<$ItemDisplayContext$$Type, $ItemTransform$$Type>)
/** @deprecated */
constructor(itemTransform0: $ItemTransform$$Type, itemTransform1: $ItemTransform$$Type, itemTransform2: $ItemTransform$$Type, itemTransform3: $ItemTransform$$Type, itemTransform4: $ItemTransform$$Type, itemTransform5: $ItemTransform$$Type, itemTransform6: $ItemTransform$$Type, itemTransform7: $ItemTransform$$Type)
/** @deprecated */
constructor(itemTransforms0: $ItemTransforms$$Type)

public "getTransform"(itemDisplayContext0: $ItemDisplayContext$$Type): $ItemTransform
public "hasTransform"(itemDisplayContext0: $ItemDisplayContext$$Type): boolean
}
}

declare module "packages/net/minecraft/client/renderer/texture/$TextureAtlas" {
import { $PBRAtlasHolder } from "packages/net/irisshaders/iris/texture/pbr/$PBRAtlasHolder"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $SpriteLoader$Preparations$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteLoader$Preparations"
import { $TextureAtlasExtension } from "packages/net/irisshaders/iris/texture/pbr/$TextureAtlasExtension"
import { $Tickable } from "packages/net/minecraft/client/renderer/texture/$Tickable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractTexture } from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"
import { $Dumpable } from "packages/net/minecraft/client/renderer/texture/$Dumpable"
import { $TextureAtlasAccessor } from "packages/net/irisshaders/iris/mixin/texture/$TextureAtlasAccessor"
import { $AccessTextureAtlas } from "packages/zzzank/probejs/mixins/$AccessTextureAtlas"
import { $Set } from "packages/java/util/$Set"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor, $TextureAtlasExtension, $AccessTextureAtlas {
/** @deprecated */
static readonly "LOCATION_BLOCKS": $ResourceLocation
/** @deprecated */
static readonly "LOCATION_PARTICLES": $ResourceLocation

constructor(resourceLocation0: $ResourceLocation$$Type)

public "clearTextureData"(): void
public "cycleAnimationFrames"(): void
public "dumpContents"(resourceLocation0: $ResourceLocation$$Type, path1: $Path$$Type): void
public "getHeight"(): integer
public "getOrCreatePBRHolder"(): $PBRAtlasHolder
public "getPBRHolder"(): $PBRAtlasHolder
public "getSprite"(resourceLocation0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getTextureLocations"(): $Set<$ResourceLocation>
public "getWidth"(): integer
public "location"(): $ResourceLocation
public "maxSupportedTextureSize"(): integer
public "tick"(): void
public "updateFilter"(preparations0: $SpriteLoader$Preparations$$Type): void
public "upload"(preparations0: $SpriteLoader$Preparations$$Type): void
get "height"(): integer
set "height"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "orCreatePBRHolder"(): $PBRAtlasHolder
get "pBRHolder"(): $PBRAtlasHolder
get "textureLocations"(): $Set<$ResourceLocation>
}
}

declare module "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

/** @deprecated */
export interface $ItemPropertyFunction {
"call"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
}

export namespace $ItemPropertyFunction {
const probejs$$marker: never
}
export abstract class $ItemPropertyFunction$$Static implements $ItemPropertyFunction {
}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteLoader$Preparations" {
import { $Record } from "packages/java/lang/$Record"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $SpriteLoader$Preparations extends $Record {
constructor(width: integer, height: integer, mipLevel: integer, missing: $TextureAtlasSprite$$Type, regions: $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>, readyForUpload: $CompletableFuture$$Type<void>)

public "height"(): integer
public "mipLevel"(): integer
public "missing"(): $TextureAtlasSprite
public "readyForUpload"(): $CompletableFuture<void>
public "regions"(): $Map<$ResourceLocation, $TextureAtlasSprite>
public "waitForUpload"(): $CompletableFuture<$SpriteLoader$Preparations>
public "width"(): integer
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BakedQuad" {
import { $ModelQuadFacing } from "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BakedQuadAccess } from "packages/malte0811/ferritecore/mixin/dedupbakedquad/$BakedQuadAccess"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $BakedQuadView } from "packages/me/jellysquid/mods/sodium/client/model/quad/$BakedQuadView"

export class $BakedQuad implements $BakedQuadAccess, $BakedQuadView {
constructor(int0s: integer[], int1: integer, direction2: $Direction$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, boolean4: boolean)
constructor(int0s: integer[], int1: integer, direction2: $Direction$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, boolean4: boolean, boolean5: boolean)

public "getColor"(int0: integer): integer
public "getColorIndex"(): integer
public "getComputedFaceNormal"(): integer
public "getDirection"(): $Direction
public "getFlags"(): integer
public "getForgeNormal"(int0: integer): integer
public "getLight"(int0: integer): integer
public "getLightFace"(): $Direction
public "getModFaceNormal"(): integer
public "getNormalFace"(): $ModelQuadFacing
public "getSprite"(): $TextureAtlasSprite
public "getSprite"(): $TextureAtlasSprite
public "getTexU"(int0: integer): float
public "getTexV"(int0: integer): float
public "getTintIndex"(): integer
public "getVertices"(): integer[]
public "getX"(int0: integer): float
public "getY"(int0: integer): float
public "getZ"(int0: integer): float
public "hasAmbientOcclusion"(): boolean
public "hasColor"(): boolean
public "hasShade"(): boolean
public "isShade"(): boolean
public "isTinted"(): boolean
public "setFlags"(int0: integer): void
get "colorIndex"(): integer
get "computedFaceNormal"(): integer
get "direction"(): $Direction
get "flags"(): integer
get "lightFace"(): $Direction
get "modFaceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "sprite"(): $TextureAtlasSprite
get "sprite"(): $TextureAtlasSprite
get "tintIndex"(): integer
get "vertices"(): integer[]
get "shade"(): boolean
get "tinted"(): boolean
set "flags"(value: integer)
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"

export class $RenderStateShard$WriteMaskStateShard extends $RenderStateShard {
constructor(boolean0: boolean, boolean1: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/texture/$Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable {
"tick"(): void
}

export namespace $Tickable {
const probejs$$marker: never
}
export abstract class $Tickable$$Static implements $Tickable {
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard" {
import { $RenderStateShard$BooleanStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$BooleanStateShard"

export class $RenderStateShard$CullStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/$LevelRenderer$RenderChunkInfo" {
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ChunkRenderDispatcher$RenderChunk } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"

export class $LevelRenderer$RenderChunkInfo {
readonly "chunk": $ChunkRenderDispatcher$RenderChunk

public "addSourceDirection"(direction0: $Direction$$Type): void
public "hasDirection"(direction0: $Direction$$Type): boolean
public "hasSourceDirection"(int0: integer): boolean
public "hasSourceDirections"(): boolean
public "isAxisAlignedWith"(int0: integer, int1: integer, int2: integer): boolean
public "setDirections"(byte0: byte, direction1: $Direction$$Type): void
}
}

declare module "packages/net/minecraft/client/renderer/texture/$Stitcher$Entry" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $Stitcher$Entry {
"height"(): integer
"name"(): $ResourceLocation
"width"(): integer
}

export namespace $Stitcher$Entry {
const probejs$$marker: never
}
export abstract class $Stitcher$Entry$$Static implements $Stitcher$Entry {
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemOverride$Predicate" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemOverride$Predicate {
constructor(resourceLocation0: $ResourceLocation$$Type, float1: float)

public "getProperty"(): $ResourceLocation
public "getValue"(): float
get "property"(): $ResourceLocation
get "value"(): float
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$EmptyTextureStateShard" {
import { $Optional } from "packages/java/util/$Optional"
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$EmptyTextureStateShard extends $RenderStateShard {
constructor(runnable0: $Runnable$$Type, runnable1: $Runnable$$Type)

public "cutoutTexture"(): $Optional<$ResourceLocation>
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
static readonly "FRONT": $BlockModel$GuiLight
static readonly "SIDE": $BlockModel$GuiLight

public static "getByName"(string0: string): $BlockModel$GuiLight
public "getSerializedName"(): string
public "lightLikeBlock"(): boolean
public static "valueOf"(string0: string): $BlockModel$GuiLight
public static "values"(): $BlockModel$GuiLight[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/client/renderer/debug/$GameTestDebugRenderer" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor()

public "addMarker"(blockPos0: $BlockPos$$Type, int1: integer, string2: string, int3: integer): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $BufferBuilder$RenderedBuffer$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer"
import { $RenderRegionCache$$Type } from "packages/net/minecraft/client/renderer/chunk/$RenderRegionCache"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import { $ChunkBufferBuilderPack$$Type } from "packages/net/minecraft/client/renderer/$ChunkBufferBuilderPack"
import { $VertexBuffer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk$ChunkCompileTask"

export class $ChunkRenderDispatcher {
constructor(clientLevel0: $ClientLevel$$Type, levelRenderer1: $LevelRenderer$$Type, executor2: $Executor$$Type, boolean3: boolean, chunkBufferBuilderPack4: $ChunkBufferBuilderPack$$Type)
constructor(clientLevel0: $ClientLevel$$Type, levelRenderer1: $LevelRenderer$$Type, executor2: $Executor$$Type, boolean3: boolean, chunkBufferBuilderPack4: $ChunkBufferBuilderPack$$Type, int5: integer)

public "blockUntilClear"(): void
public "dispose"(): void
public "getCameraPosition"(): $Vec3
public "getFreeBufferCount"(): integer
public "getStats"(): string
public "getToBatchCount"(): integer
public "getToUpload"(): integer
public "isQueueEmpty"(): boolean
public "rebuildChunkSync"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, renderRegionCache1: $RenderRegionCache$$Type): void
public "schedule"(chunkCompileTask0: $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type): void
public "setCamera"(vec30: $Vec3$$Type): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "uploadAllPendingUploads"(): void
public "uploadChunkLayer"(renderedBuffer0: $BufferBuilder$RenderedBuffer$$Type, vertexBuffer1: $VertexBuffer$$Type): $CompletableFuture<void>
get "cameraPosition"(): $Vec3
get "freeBufferCount"(): integer
get "stats"(): string
get "toBatchCount"(): integer
get "toUpload"(): integer
get "queueEmpty"(): boolean
set "camera"(value: $Vec3$$Type)
set "level"(value: $ClientLevel$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$BooleanStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$BooleanStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type, boolean3: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemOverrides$BakedOverride" {
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"

export class $ItemOverrides$BakedOverride {
get "model"(): $BakedModel
set "model"(value: $BakedModel$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/$PostPass" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $EffectInstance } from "packages/net/minecraft/client/renderer/$EffectInstance"
import { $RenderTarget, $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $PostPass implements $AutoCloseable {
readonly "inTarget": $RenderTarget
readonly "outTarget": $RenderTarget

constructor(resourceManager0: $ResourceManager$$Type, string1: string, renderTarget2: $RenderTarget$$Type, renderTarget3: $RenderTarget$$Type)

public "addAuxAsset"(string0: string, intSupplier1: $IntSupplier$$Type, int2: integer, int3: integer): void
public "close"(): void
public "getEffect"(): $EffectInstance
public "getName"(): string
public "process"(float0: float): void
public "setOrthoMatrix"(matrix4f0: $Matrix4f$$Type): void
get "effect"(): $EffectInstance
get "name"(): string
set "orthoMatrix"(value: $Matrix4f$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/debug/$VillageSectionsDebugRenderer" {
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setNotVillageSection"(sectionPos0: $SectionPos$$Type): void
public "setVillageSection"(sectionPos0: $SectionPos$$Type): void
set "notVillageSection"(value: $SectionPos$$Type)
set "villageSection"(value: $SectionPos$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/$GameRenderer" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $OverlayTexture } from "packages/net/minecraft/client/renderer/texture/$OverlayTexture"
import { $GameRendererAccessor } from "packages/net/irisshaders/iris/mixin/$GameRendererAccessor"
import { $PostChain, $PostChain$$Type } from "packages/net/minecraft/client/renderer/$PostChain"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ItemInHandRenderer, $ItemInHandRenderer$$Type } from "packages/net/minecraft/client/renderer/$ItemInHandRenderer"
import { $Matrix4f, $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LightTexture } from "packages/net/minecraft/client/renderer/$LightTexture"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GameRendererAccessor as $GameRendererAccessor$0 } from "packages/com/github/exopandora/shouldersurfing/mixins/$GameRendererAccessor"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $GameRendererAccessor as $GameRendererAccessor$1 } from "packages/net/createmod/ponder/mixin/client/accessor/$GameRendererAccessor"
import { $MapRenderer } from "packages/net/minecraft/client/gui/$MapRenderer"
import { $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $RenderBuffers, $RenderBuffers$$Type } from "packages/net/minecraft/client/renderer/$RenderBuffers"
import { $ShaderInstance, $ShaderInstance$$Type } from "packages/net/minecraft/client/renderer/$ShaderInstance"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $GameRenderer implements $AutoCloseable, $GameRendererAccessor, $GameRendererAccessor$0, $GameRendererAccessor$1 {
static readonly "EFFECT_NONE": integer
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
static readonly "PROJECTION_Z_NEAR": float
readonly "itemInHandRenderer": $ItemInHandRenderer
readonly "renderBuffers": $RenderBuffers

constructor(minecraft0: $Minecraft$$Type, itemInHandRenderer1: $ItemInHandRenderer$$Type, resourceManager2: $ResourceManager$$Type, renderBuffers3: $RenderBuffers$$Type)

public "checkEntityPostEffect"(entity0: $Entity$$Type): void
public "close"(): void
public "createReloadListener"(): $PreparableReloadListener
public "currentEffect"(): $PostChain
public "cycleEffect"(): void
public "displayItemActivation"(itemStack0: $ItemStack$$Type): void
public "getDarkenWorldAmount"(float0: float): float
public "getDepthFar"(): float
public "getFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
public "getMainCamera"(): $Camera
public "getMapRenderer"(): $MapRenderer
public "getMinecraft"(): $Minecraft
public static "getNightVisionScale"(livingEntity0: $LivingEntity$$Type, float1: float): float
public static "getParticleShader"(): $ShaderInstance
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getPositionColorShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getPositionColorTexShader"(): $ShaderInstance
public static "getPositionShader"(): $ShaderInstance
public static "getPositionTexColorNormalShader"(): $ShaderInstance
public static "getPositionTexColorShader"(): $ShaderInstance
public static "getPositionTexLightmapColorShader"(): $ShaderInstance
public static "getPositionTexShader"(): $ShaderInstance
public "getProjectionMatrix"(double0: double): $Matrix4f
public "getRenderDistance"(): float
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public static "getRendertypeSolidShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeTranslucentNoCrumblingShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public "getShader"(string0: string): $ShaderInstance
public "handler$fin000$lodestone$injectionResizeListener"(int0: integer, int1: integer, callbackInfo2: $CallbackInfo$$Type): void
public "isPanoramicMode"(): boolean
public "lightTexture"(): $LightTexture
public "loadEffect"(resourceLocation0: $ResourceLocation$$Type): void
public "overlayTexture"(): $OverlayTexture
public "pick"(float0: float): void
public "preloadUiShader"(resourceProvider0: $ResourceProvider$$Type): void
public "render"(float0: float, long1: long, boolean2: boolean): void
public "renderLevel"(float0: float, long1: long, poseStack2: $PoseStack$$Type): void
public "renderZoomed"(float0: float, float1: float, float2: float): void
public "resetData"(): void
public "resetProjectionMatrix"(matrix4f0: $Matrix4f$$Type): void
public "resize"(int0: integer, int1: integer): void
public "setPanoramicMode"(boolean0: boolean): void
public "setRenderBlockOutline"(boolean0: boolean): void
public "setRenderHand"(boolean0: boolean): void
public "shutdownEffect"(): void
public "tick"(): void
public "togglePostEffect"(): void
get "blitShader"(): $ShaderInstance
set "blitShader"(value: $ShaderInstance$$Type)
get "effectActive"(): boolean
set "effectActive"(value: boolean)
get "fov"(): float
set "fov"(value: float)
get "oldFov"(): float
set "oldFov"(value: float)
get "postEffect"(): $PostChain
set "postEffect"(value: $PostChain$$Type)
get "depthFar"(): float
get "mainCamera"(): $Camera
get "mapRenderer"(): $MapRenderer
get "minecraft"(): $Minecraft
get "renderDistance"(): float
get "panoramicMode"(): boolean
set "panoramicMode"(value: boolean)
set "renderBlockOutline"(value: boolean)
set "renderHand"(value: boolean)
}
}

declare module "packages/net/minecraft/client/renderer/$DimensionSpecialEffects$SkyType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $DimensionSpecialEffects$SkyType extends $Enum<$DimensionSpecialEffects$SkyType> {
static readonly "END": $DimensionSpecialEffects$SkyType
static readonly "NONE": $DimensionSpecialEffects$SkyType
static readonly "NORMAL": $DimensionSpecialEffects$SkyType

public static "valueOf"(string0: string): $DimensionSpecialEffects$SkyType
public static "values"(): $DimensionSpecialEffects$SkyType[]
}
}

declare module "packages/net/minecraft/client/renderer/$RenderType$OutlineProperty" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RenderType$OutlineProperty extends $Enum<$RenderType$OutlineProperty> {
static readonly "AFFECTS_OUTLINE": $RenderType$OutlineProperty
static readonly "IS_OUTLINE": $RenderType$OutlineProperty
static readonly "NONE": $RenderType$OutlineProperty

public static "valueOf"(string0: string): $RenderType$OutlineProperty
public static "values"(): $RenderType$OutlineProperty[]
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk" {
import { $RenderChunkAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderChunkAccess"
import { $ChunkRenderDispatcher$CompiledChunk } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$CompiledChunk"
import { $ChunkRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $RenderRegionCache$$Type } from "packages/net/minecraft/client/renderer/chunk/$RenderRegionCache"
import { $AtomicReference } from "packages/java/util/concurrent/atomic/$AtomicReference"
import { $VertexBuffer } from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk$ChunkCompileTask"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderDispatcher$RenderChunk implements $RenderChunkAccess {
static readonly "SIZE": integer
readonly "compiled": $AtomicReference<$ChunkRenderDispatcher$CompiledChunk>
readonly "index": integer

constructor(chunkRenderDispatcher0: $ChunkRenderDispatcher$$Type, int1: integer, int2: integer, int3: integer, int4: integer)

public "compileSync"(renderRegionCache0: $RenderRegionCache$$Type): void
public "createCompileTask"(renderRegionCache0: $RenderRegionCache$$Type): $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask
public "getBoundingBox"(): $AABB
public "getBuffer"(renderType0: $RenderType$$Type): $VertexBuffer
public "getCompiledChunk"(): $ChunkRenderDispatcher$CompiledChunk
public "getOrigin"(): $BlockPos
public "getRelativeOrigin"(direction0: $Direction$$Type): $BlockPos
public "hasAllNeighbors"(): boolean
public "isDirty"(): boolean
public "isDirtyFromPlayer"(): boolean
public "rebuildChunkAsync"(chunkRenderDispatcher0: $ChunkRenderDispatcher$$Type, renderRegionCache1: $RenderRegionCache$$Type): void
public "releaseBuffers"(): void
public "resortTransparency"(renderType0: $RenderType$$Type, chunkRenderDispatcher1: $ChunkRenderDispatcher$$Type): boolean
public "setDirty"(boolean0: boolean): void
public "setNotDirty"(): void
public "setOrigin"(int0: integer, int1: integer, int2: integer): void
get "boundingBox"(): $AABB
get "compiledChunk"(): $ChunkRenderDispatcher$CompiledChunk
get "origin"(): $BlockPos
get "dirty"(): boolean
get "dirtyFromPlayer"(): boolean
set "dirty"(value: boolean)
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard" {
import { $RenderStateShard$OverlayStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TexturingStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$TexturingStateShard"
import { $RenderStateShardAccessor } from "packages/net/irisshaders/iris/mixin/rendertype/$RenderStateShardAccessor"
import { $RenderStateShard$LineStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LineStateShard"
import { $RenderStateShardAccessor as $RenderStateShardAccessor$0 } from "packages/net/irisshaders/batchedentityrendering/mixin/$RenderStateShardAccessor"
import { $RenderStateShard$TextureStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$TextureStateShard"
import { $RenderStateShard$EmptyTextureStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$EmptyTextureStateShard"
import { $RenderStateShard$LightmapStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LightmapStateShard"
import { $RenderStateShard$LayeringStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LayeringStateShard"
import { $RenderStateShard$WriteMaskStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RenderStateShard$OutputStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$OutputStateShard"
import { $RenderStateShard$ColorLogicStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$ColorLogicStateShard"
import { $RenderStateShard$ShaderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import { $RenderStateShard$DepthTestStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard"
import { $RenderTypeAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$RenderTypeAccess"
import { $RenderStateShard$TransparencyStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"
import { $RenderStateShard$CullStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"

export class $RenderStateShard implements $RenderStateShardAccessor, $RenderStateShardAccessor$0, $RenderTypeAccess {
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ARMOR_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_NO_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
readonly "clearState": $Runnable
readonly "name": string

constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

public "clearRenderState"(): void
public "setupRenderState"(): void
get "setupState"(): $Runnable
set "setupState"(value: $Runnable$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher" {
import { $ItemRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $BlockRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $ItemInHandRenderer } from "packages/net/minecraft/client/renderer/$ItemInHandRenderer"
import { $Frustum$$Type } from "packages/net/minecraft/client/renderer/culling/$Frustum"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $EntityType, $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityRenderer, $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $TextureManager, $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Options, $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $Quaternionf, $Quaternionf$$Type } from "packages/org/joml/$Quaternionf"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener {
readonly "options": $Options
readonly "textureManager": $TextureManager

constructor(minecraft0: $Minecraft$$Type, textureManager1: $TextureManager$$Type, itemRenderer2: $ItemRenderer$$Type, blockRenderDispatcher3: $BlockRenderDispatcher$$Type, font4: $Font$$Type, options5: $Options$$Type, entityModelSet6: $EntityModelSet$$Type)

public "cameraOrientation"(): $Quaternionf
public "distanceToSqr"(double0: double, double1: double, double2: double): double
public "distanceToSqr"(entity0: $Entity$$Type): double
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getName"(): string
public "getPackedLightCoords"<E extends $Entity>(e0: E, float1: float): integer
public "getRenderer"<T extends $Entity>(t0: T): $EntityRenderer<T>
public "getSkinMap"(): $Map<string, $EntityRenderer<$Player>>
public "handler$eaa000$inject$shouldRender"(entity0: $Entity$$Type, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double, callbackInfoReturnable5: $CallbackInfoReturnable$$Type<any>): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "overrideCameraOrientation"(quaternionf0: $Quaternionf$$Type): void
public "prepare"(level0: $Level$$Type, camera1: $Camera$$Type, entity2: $Entity$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"<E extends $Entity>(e0: E, double1: double, double2: double, double3: double, float4: float, float5: float, poseStack6: $PoseStack$$Type, multiBufferSource7: $MultiBufferSource$$Type, int8: integer): void
public "setLevel"(level0: $Level$$Type): void
public "setRenderHitBoxes"(boolean0: boolean): void
public "setRenderShadow"(boolean0: boolean): void
public "shouldRender"<E extends $Entity>(e0: E, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double): boolean
public "shouldRenderHitBoxes"(): boolean
get "camera"(): $Camera
set "camera"(value: $Camera$$Type)
get "crosshairPickEntity"(): $Entity
set "crosshairPickEntity"(value: $Entity$$Type)
get "renderers"(): $Map<$EntityType<any>, $EntityRenderer<any>>
set "renderers"(value: $Map$$Type<$EntityType$$Type<any>, $EntityRenderer$$Type<any>>)
get "itemInHandRenderer"(): $ItemInHandRenderer
get "name"(): string
get "skinMap"(): $Map<string, $EntityRenderer<$Player>>
set "level"(value: $Level$$Type)
set "renderHitBoxes"(value: boolean)
set "renderShadow"(value: boolean)
}
}

declare module "packages/net/minecraft/client/renderer/entity/$ItemRenderer" {
import { $BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ItemRendererAccessor } from "packages/vazkii/botania/mixin/client/$ItemRendererAccessor"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemModelShaper } from "packages/net/minecraft/client/renderer/$ItemModelShaper"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import { $VertexConsumer, $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ItemColors$$Type } from "packages/net/minecraft/client/color/item/$ItemColors"
import { $TextureManager, $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ModelResourceLocation } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $ModelManager$$Type } from "packages/net/minecraft/client/resources/model/$ModelManager"

export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor {
static readonly "COMPASS_FOIL_FIRST_PERSON_SCALE": float
static readonly "COMPASS_FOIL_TEXTURE_SCALE": float
static readonly "COMPASS_FOIL_UI_SCALE": float
static readonly "ENCHANTED_GLINT_ENTITY": $ResourceLocation
static readonly "ENCHANTED_GLINT_ITEM": $ResourceLocation
static readonly "GUI_SLOT_CENTER_X": integer
static readonly "GUI_SLOT_CENTER_Y": integer
static readonly "ITEM_COUNT_BLIT_OFFSET": integer
static readonly "SPYGLASS_IN_HAND_MODEL": $ModelResourceLocation
static readonly "TRIDENT_IN_HAND_MODEL": $ModelResourceLocation
readonly "textureManager": $TextureManager

constructor(minecraft0: $Minecraft$$Type, textureManager1: $TextureManager$$Type, modelManager2: $ModelManager$$Type, itemColors3: $ItemColors$$Type, blockEntityWithoutLevelRenderer4: $BlockEntityWithoutLevelRenderer$$Type)

public static "getArmorFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public static "getCompassFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, pose2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getCompassFoilBufferDirect"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, pose2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getFoilBuffer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public static "getFoilBufferDirect"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type, boolean2: boolean, boolean3: boolean): $VertexConsumer
public "getItemModelShaper"(): $ItemModelShaper
public "getModel"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): $BakedModel
public "getName"(): string
public "handler$blo000$onRenderItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, boolean2: boolean, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, bakedModel7: $BakedModel$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "modifyExpressionValue$emm000$renderQuads"(float0: float): float
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, boolean2: boolean, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, int6: integer, bakedModel7: $BakedModel$$Type): void
public "renderModelLists"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type): void
public "renderQuadList"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, list2: $List$$Type<$BakedQuad$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
public "renderStatic"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, level6: $Level$$Type, int7: integer): void
public "renderStatic"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemDisplayContext2: $ItemDisplayContext$$Type, boolean3: boolean, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, level6: $Level$$Type, int7: integer, int8: integer, int9: integer): void
get "blockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
get "itemModelShaper"(): $ItemModelShaper
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/entity/$EntityRenderer" {
import { $EntityRenderDispatcher } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $Frustum$$Type } from "packages/net/minecraft/client/renderer/culling/$Frustum"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $EntityRenderer<T extends $Entity> {
readonly "entityRenderDispatcher": $EntityRenderDispatcher

public "getFont"(): $Font
public "getPackedLightCoords"(t0: T, float1: float): integer
public "getRenderOffset"(t0: T, float1: float): $Vec3
public "getTextureLocation"(t0: T): $ResourceLocation
public "handler$cmg000$adastra$shouldRender"(entity: $Entity$$Type, frustum: $Frustum$$Type, x: double, y: double, z: double, cir: $CallbackInfoReturnable$$Type<any>): void
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
public "shouldRender"(t0: T, frustum1: $Frustum$$Type, double2: double, double3: double, double4: double): boolean
get "shadowRadius"(): float
set "shadowRadius"(value: float)
get "font"(): $Font
}
}

declare module "packages/net/minecraft/client/renderer/$GpuWarnlistManager" {
import { $GpuWarnlistManager$Preparations } from "packages/net/minecraft/client/renderer/$GpuWarnlistManager$Preparations"
import { $SimplePreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<$GpuWarnlistManager$Preparations> {
constructor()

public "dismissWarning"(): void
public "dismissWarningAndSkipFabulous"(): void
public "getAllWarnings"(): string
public "getName"(): string
public "getRendererWarnings"(): string
public "getVendorWarnings"(): string
public "getVersionWarnings"(): string
public "hasWarnings"(): boolean
public "isShowingWarning"(): boolean
public "isSkippingFabulous"(): boolean
public "resetWarnings"(): void
public "showWarning"(): void
public "willShowWarning"(): boolean
get "allWarnings"(): string
get "name"(): string
get "rendererWarnings"(): string
get "vendorWarnings"(): string
get "versionWarnings"(): string
get "showingWarning"(): boolean
get "skippingFabulous"(): boolean
}
}

declare module "packages/net/minecraft/client/renderer/texture/$AbstractTexture" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export class $AbstractTexture implements $AutoCloseable {
static readonly "NOT_ASSIGNED": integer

constructor()

public "bind"(): void
public "close"(): void
public "getId"(): integer
public "load"(resourceManager0: $ResourceManager$$Type): void
public "releaseId"(): void
public "reset"(textureManager0: $TextureManager$$Type, resourceManager1: $ResourceManager$$Type, resourceLocation2: $ResourceLocation$$Type, executor3: $Executor$$Type): void
public "restoreLastBlurMipmap"(): void
public "setBlurMipmap"(boolean0: boolean, boolean1: boolean): void
public "setFilter"(boolean0: boolean, boolean1: boolean): void
get "id"(): integer
}
}

declare module "packages/net/minecraft/client/renderer/$DimensionSpecialEffects" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $IForgeDimensionSpecialEffects } from "packages/net/minecraftforge/client/extensions/$IForgeDimensionSpecialEffects"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $LightTexture$$Type } from "packages/net/minecraft/client/renderer/$LightTexture"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type } from "packages/net/minecraft/client/renderer/$DimensionSpecialEffects$SkyType"

export class $DimensionSpecialEffects implements $IForgeDimensionSpecialEffects {
constructor(float0: float, boolean1: boolean, skyType2: $DimensionSpecialEffects$SkyType$$Type, boolean3: boolean, boolean4: boolean)

public "adjustLightmapColors"(clientLevel0: $ClientLevel$$Type, float1: float, float2: float, float3: float, float4: float, int5: integer, int6: integer, vector3f7: $Vector3f$$Type): void
public "constantAmbientLight"(): boolean
public static "forType"(dimensionType0: $DimensionType$$Type): $DimensionSpecialEffects
public "forceBrightLightmap"(): boolean
public "getBrightnessDependentFogColor"(vec30: $Vec3$$Type, float1: float): $Vec3
public "getCloudHeight"(): float
public "getSunriseColor"(float0: float, float1: float): float[]
public "hasGround"(): boolean
public "isFoggyAt"(int0: integer, int1: integer): boolean
public "renderClouds"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, double4: double, double5: double, double6: double, matrix4f7: $Matrix4f$$Type): boolean
public "renderSky"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, poseStack3: $PoseStack$$Type, camera4: $Camera$$Type, matrix4f5: $Matrix4f$$Type, boolean6: boolean, runnable7: $Runnable$$Type): boolean
public "renderSnowAndRain"(clientLevel0: $ClientLevel$$Type, int1: integer, float2: float, lightTexture3: $LightTexture$$Type, double4: double, double5: double, double6: double): boolean
public "skyType"(): $DimensionSpecialEffects$SkyType
public "tickRain"(clientLevel0: $ClientLevel$$Type, int1: integer, camera2: $Camera$$Type): boolean
get "cloudHeight"(): float
}
}

declare module "packages/net/minecraft/client/renderer/$RenderType$CompositeState" {
import { $RenderStateShard$OverlayStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TexturingStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$TexturingStateShard"
import { $RenderStateShard$LineStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LineStateShard"
import { $RenderType$OutlineProperty } from "packages/net/minecraft/client/renderer/$RenderType$OutlineProperty"
import { $RenderStateShard$EmptyTextureStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$EmptyTextureStateShard"
import { $RenderStateShard$LightmapStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LightmapStateShard"
import { $RenderStateShard$LayeringStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$LayeringStateShard"
import { $RenderStateShard$WriteMaskStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard"
import { $RenderStateShard$OutputStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$OutputStateShard"
import { $CompositeStateAccessor } from "packages/net/irisshaders/batchedentityrendering/mixin/$CompositeStateAccessor"
import { $RenderStateShard$ShaderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import { $RenderStateShard$DepthTestStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard"
import { $RenderType$CompositeState$CompositeStateBuilder } from "packages/net/minecraft/client/renderer/$RenderType$CompositeState$CompositeStateBuilder"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $RenderStateShard$TransparencyStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $RenderStateShard$CullStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"

export class $RenderType$CompositeState implements $CompositeStateAccessor {
readonly "cullState": $RenderStateShard$CullStateShard
readonly "depthTestState": $RenderStateShard$DepthTestStateShard
readonly "layeringState": $RenderStateShard$LayeringStateShard
readonly "lightmapState": $RenderStateShard$LightmapStateShard
readonly "lineState": $RenderStateShard$LineStateShard
readonly "outlineProperty": $RenderType$OutlineProperty
readonly "outputState": $RenderStateShard$OutputStateShard
readonly "overlayState": $RenderStateShard$OverlayStateShard
readonly "shaderState": $RenderStateShard$ShaderStateShard
readonly "states": $ImmutableList<$RenderStateShard>
readonly "textureState": $RenderStateShard$EmptyTextureStateShard
readonly "texturingState": $RenderStateShard$TexturingStateShard
readonly "transparencyState": $RenderStateShard$TransparencyStateShard
readonly "writeMaskState": $RenderStateShard$WriteMaskStateShard

public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
}
}

declare module "packages/net/minecraft/client/renderer/$FogRenderer$FogMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FogRenderer$FogMode extends $Enum<$FogRenderer$FogMode> {
static readonly "FOG_SKY": $FogRenderer$FogMode
static readonly "FOG_TERRAIN": $FogRenderer$FogMode

public static "valueOf"(string0: string): $FogRenderer$FogMode
public static "values"(): $FogRenderer$FogMode[]
}
}

declare module "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export interface $BlockEntityRenderer<T extends $BlockEntity> {
"getViewDistance"(): integer
"render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
"shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
"shouldRenderOffScreen"(t0: T): boolean
get "viewDistance"(): integer
}

export namespace $BlockEntityRenderer {
const probejs$$marker: never
}
export abstract class $BlockEntityRenderer$$Static<T extends $BlockEntity> implements $BlockEntityRenderer<T> {
}
}

declare module "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite$Ticker" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"

export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
"close"(): void
"tickAndUpload"(): void
}

export namespace $TextureAtlasSprite$Ticker {
const probejs$$marker: never
}
export abstract class $TextureAtlasSprite$Ticker$$Static implements $TextureAtlasSprite$Ticker {
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard" {
import { $ShaderInstance } from "packages/net/minecraft/client/renderer/$ShaderInstance"
import { $Optional } from "packages/java/util/$Optional"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"

export class $RenderStateShard$ShaderStateShard extends $RenderStateShard {
readonly "shader": $Optional<$Supplier<$ShaderInstance>>

constructor(supplier0: $Supplier$$Type<$ShaderInstance>)
constructor()

}
}

declare module "packages/net/minecraft/client/renderer/texture/$TextureManager" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Tickable } from "packages/net/minecraft/client/renderer/texture/$Tickable"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $DynamicTexture$$Type } from "packages/net/minecraft/client/renderer/texture/$DynamicTexture"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $AbstractTexture, $AbstractTexture$$Type } from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $AccessTextureManager } from "packages/zzzank/probejs/mixins/$AccessTextureManager"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $AccessTextureManager {
static readonly "INTENTIONAL_MISSING_TEXTURE": $ResourceLocation

constructor(resourceManager0: $ResourceManager$$Type)

public "bindForSetup"(resourceLocation0: $ResourceLocation$$Type): void
public "close"(): void
public "dumpAllSheets"(path0: $Path$$Type): void
public "getName"(): string
public "getTexture"(resourceLocation0: $ResourceLocation$$Type, abstractTexture1: $AbstractTexture$$Type): $AbstractTexture
public "getTexture"(resourceLocation0: $ResourceLocation$$Type): $AbstractTexture
public "preload"(resourceLocation0: $ResourceLocation$$Type, executor1: $Executor$$Type): $CompletableFuture<void>
public "register"(resourceLocation0: $ResourceLocation$$Type, abstractTexture1: $AbstractTexture$$Type): void
public "register"(string0: string, dynamicTexture1: $DynamicTexture$$Type): $ResourceLocation
public "release"(resourceLocation0: $ResourceLocation$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "tick"(): void
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/debug/$PathfindingRenderer" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Path$$Type } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor()

public "addPath"(int0: integer, path1: $Path$$Type, float2: float): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public static "renderPath"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, path2: $Path$$Type, float3: float, boolean4: boolean, boolean5: boolean, double6: double, double7: double, double8: double): void
public static "renderPathLine"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, path2: $Path$$Type, double3: double, double4: double, double5: double): void
}
}

declare module "packages/net/minecraft/client/renderer/$GpuWarnlistManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GpuWarnlistManager$Preparations {
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockElementRotation" {
import { $Record } from "packages/java/lang/$Record"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Direction$Axis, $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"

export class $BlockElementRotation extends $Record {
constructor(vector3f0: $Vector3f$$Type, axis1: $Direction$Axis$$Type, float2: float, boolean3: boolean)

public "angle"(): float
public "axis"(): $Direction$Axis
public "origin"(): $Vector3f
public "rescale"(): boolean
}
}

declare module "packages/net/minecraft/client/renderer/$OutlineBufferSource" {
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $OutlineBufferSourceAccessor } from "packages/net/irisshaders/batchedentityrendering/mixin/$OutlineBufferSourceAccessor"
import { $MultiBufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $Map$$Type } from "packages/java/util/$Map"

export class $OutlineBufferSource implements $MultiBufferSource, $OutlineBufferSourceAccessor {
constructor(bufferSource0: $MultiBufferSource$BufferSource$$Type)

public "endOutlineBatch"(): void
public "getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
public static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public "setColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk$ChunkCompileTask" {
import { $ChunkPos$$Type } from "packages/net/minecraft/world/level/$ChunkPos"
import { $Comparable } from "packages/java/lang/$Comparable"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import { $ChunkBufferBuilderPack$$Type } from "packages/net/minecraft/client/renderer/$ChunkBufferBuilderPack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ChunkRenderDispatcher$ChunkTaskResult } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$ChunkTaskResult"

export class $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask implements $Comparable<$ChunkRenderDispatcher$RenderChunk$ChunkCompileTask> {
constructor(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, double1: double, boolean2: boolean)
constructor(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, chunkPos1: $ChunkPos$$Type, double2: double, boolean3: boolean)

public "cancel"(): void
public "compareTo"(chunkCompileTask0: $ChunkRenderDispatcher$RenderChunk$ChunkCompileTask$$Type): integer
public "doTask"(chunkBufferBuilderPack0: $ChunkBufferBuilderPack$$Type): $CompletableFuture<$ChunkRenderDispatcher$ChunkTaskResult>
public "getModelData"(blockPos0: $BlockPos$$Type): $ModelData
}
}

declare module "packages/net/minecraft/client/renderer/$LevelRenderer" {
import { $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Particle } from "packages/net/minecraft/client/particle/$Particle"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LevelRenderer$RenderChunkStorage } from "packages/net/minecraft/client/renderer/$LevelRenderer$RenderChunkStorage"
import { $AccessorLevelRenderer } from "packages/com/railwayteam/railways/mixin/client/$AccessorLevelRenderer"
import { $WorldRendererExtended } from "packages/me/jellysquid/mods/sodium/client/world/$WorldRendererExtended"
import { $AtomicReference } from "packages/java/util/concurrent/atomic/$AtomicReference"
import { $Vector3d } from "packages/org/joml/$Vector3d"
import { $LevelRendererAccessor } from "packages/vazkii/botania/mixin/client/$LevelRendererAccessor"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $BlockGetter$$Type } from "packages/net/minecraft/world/level/$BlockGetter"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $WorldRendererAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$WorldRendererAccess"
import { $ChunkRenderDispatcher } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $SoundInstance } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $GameRenderer$$Type } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $CullingDataCache } from "packages/net/irisshaders/iris/shadows/$CullingDataCache"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $LightTexture$$Type } from "packages/net/minecraft/client/renderer/$LightTexture"
import { $RenderTarget, $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $LevelRendererAccessor as $LevelRendererAccessor$0 } from "packages/net/irisshaders/iris/mixin/$LevelRendererAccessor"
import { $LevelRendererAccessor as $LevelRendererAccessor$1 } from "packages/com/simibubi/create/foundation/mixin/accessor/$LevelRendererAccessor"
import { $WorldRendererAccessor } from "packages/toni/sodiumdynamiclights/accessor/$WorldRendererAccessor"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $EntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $LevelRendererAccessor as $LevelRendererAccessor$2 } from "packages/earth/terrarium/adastra/mixins/client/$LevelRendererAccessor"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $LevelRendererAccessor as $LevelRendererAccessor$3 } from "packages/dev/engine_room/flywheel/backend/mixin/$LevelRendererAccessor"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Frustum, $Frustum$$Type } from "packages/net/minecraft/client/renderer/culling/$Frustum"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PostChain, $PostChain$$Type } from "packages/net/minecraft/client/renderer/$PostChain"
import { $VoxelShape$$Type } from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $RecordItem$$Type } from "packages/net/minecraft/world/item/$RecordItem"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $RenderBuffers, $RenderBuffers$$Type } from "packages/net/minecraft/client/renderer/$RenderBuffers"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $SodiumWorldRenderer } from "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $BlockEntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LevelRendererAccessor as $LevelRendererAccessor$4 } from "packages/net/dries007/tfc/mixin/client/accessor/$LevelRendererAccessor"
import { $Map } from "packages/java/util/$Map"

export class $LevelRenderer implements $ResourceManagerReloadListener, $AutoCloseable, $WorldRendererAccessor, $LevelRendererAccessor, $LevelRendererAccessor$0, $CullingDataCache, $LevelRendererAccessor$4, $WorldRendererAccess, $LevelRendererAccessor$3, $LevelRendererAccessor$2, $AccessorLevelRenderer, $LevelRendererAccessor$1, $WorldRendererExtended {
static readonly "CHUNK_SIZE": integer
static readonly "DIRECTIONS": $Direction[]
readonly "frustumPos": $Vector3d
readonly "playingRecords": $Map<$BlockPos, $SoundInstance>
readonly "renderChunkStorage": $AtomicReference<$LevelRenderer$RenderChunkStorage>

constructor(minecraft0: $Minecraft$$Type, entityRenderDispatcher1: $EntityRenderDispatcher$$Type, blockEntityRenderDispatcher2: $BlockEntityRenderDispatcher$$Type, renderBuffers3: $RenderBuffers$$Type)

public static "addChainedFilledBoxVertices"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "addChainedFilledBoxVertices"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, boolean2: boolean, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): void
public "addParticleInternal"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Particle
public "addParticleInternal"(particleOptions0: $ParticleOptions$$Type, boolean1: boolean, boolean2: boolean, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double): $Particle
public "addRecentlyCompiledChunk"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type): void
public "allChanged"(): void
public "blockChanged"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockState3: $BlockState$$Type, int4: integer): void
public "captureFrustum"(): void
public "clear"(): void
public "close"(): void
public "countRenderedChunks"(): integer
public "destroyBlockProgress"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "doEntityOutline"(): void
public "entityTarget"(): $RenderTarget
public "getChunkRenderDispatcher"(): $ChunkRenderDispatcher
public "getChunkStatistics"(): string
public "getCloudsTarget"(): $RenderTarget
public "getEntityStatistics"(): string
public "getFrustum"(): $Frustum
public "getItemEntityTarget"(): $RenderTarget
public "getLastViewDistance"(): double
public static "getLightColor"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type): integer
public static "getLightColor"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getName"(): string
public "getParticlesTarget"(): $RenderTarget
public "getTotalChunks"(): double
public "getTranslucentTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "globalLevelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "graphicsChanged"(): void
public "handler$ccf000$afterTESRRender"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$cdk000$postRender"(entity0: $Entity$$Type, double1: double, double2: double, double3: double, float4: float, poseStack5: $PoseStack$$Type, multiBufferSource6: $MultiBufferSource$$Type, callbackInfo7: $CallbackInfo$$Type): void
public "handler$cdk000$preRender"(entity0: $Entity$$Type, double1: double, double2: double, double3: double, float4: float, poseStack5: $PoseStack$$Type, multiBufferSource6: $MultiBufferSource$$Type, callbackInfo7: $CallbackInfo$$Type): void
public "handler$cmj000$adastra$tickRain"(camera: $Camera$$Type, ci: $CallbackInfo$$Type): void
public "handler$dkn000$onRender"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$eam000$inject$tick"(camera0: $Camera$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$eck000$renderClouds"(poseStack: $PoseStack$$Type, projectionMatrix: $Matrix4f$$Type, partialTicks: float, cameraX: double, cameraY: double, cameraZ: double, ci: $CallbackInfo$$Type): void
public "handler$emo000$playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, recordItem2: $RecordItem$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "handler$fhe000$endOpaque"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$endTranslucent"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$frameStart"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$lightUpdated"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$preOpaque"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$preTerrainSetup"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type, callbackInfo8: $CallbackInfo$$Type): void
public "handler$fhe000$setSectionDirty"(int0: integer, int1: integer, int2: integer, boolean3: boolean, callbackInfo4: $CallbackInfo$$Type): void
public "handler$fja000$lodestone$injectionBeforeTransparencyChainProcess"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$zld000$renderCloudsFast"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double, callbackInfo6: $CallbackInfo$$Type): void
public "handler$zpd000$renderLevel"(ci: $CallbackInfo$$Type): void
public "hasRenderedAllChunks"(): boolean
public "initOutline"(): void
public "isChunkCompiled"(blockPos0: $BlockPos$$Type): boolean
public "killFrustum"(): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "localvar$zpd000$modifyPartialTicks"(partialTicks: float): float
public "localvar$zpd000$modifyPoseStack"(poseStack: $PoseStack$$Type): $PoseStack
public "needsUpdate"(): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
/** @deprecated */
public "playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type): void
public "playStreamingMusic"(soundEvent0: $SoundEvent$$Type, blockPos1: $BlockPos$$Type, recordItem2: $RecordItem$$Type): void
public "prepareCullFrustum"(poseStack0: $PoseStack$$Type, vec31: $Vec3$$Type, matrix4f2: $Matrix4f$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderClouds"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, double3: double, double4: double, double5: double): void
public "renderHitOutline"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, entity2: $Entity$$Type, double3: double, double4: double, double5: double, blockPos6: $BlockPos$$Type, blockState7: $BlockState$$Type): void
public "renderLevel"(poseStack0: $PoseStack$$Type, float1: float, long2: long, boolean3: boolean, camera4: $Camera$$Type, gameRenderer5: $GameRenderer$$Type, lightTexture6: $LightTexture$$Type, matrix4f7: $Matrix4f$$Type): void
public static "renderLineBox"(vertexConsumer0: $VertexConsumer$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, float7: float, float8: float, float9: float, float10: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, aABB2: $AABB$$Type, float3: float, float4: float, float5: float, float6: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float): void
public static "renderLineBox"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "renderShape"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, voxelShape2: $VoxelShape$$Type, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float, float9: float): void
public "renderSky"(poseStack0: $PoseStack$$Type, matrix4f1: $Matrix4f$$Type, float2: float, camera3: $Camera$$Type, boolean4: boolean, runnable5: $Runnable$$Type): void
public static "renderVoxelShape"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, voxelShape2: $VoxelShape$$Type, double3: double, double4: double, double5: double, float6: float, float7: float, float8: float, float9: float, boolean10: boolean): void
public "resize"(int0: integer, int1: integer): void
public "restoreState"(): void
public "saveState"(): void
public "setBlockDirty"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, blockState2: $BlockState$$Type): void
public "setBlocksDirty"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "setSectionDirty"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
public "setSectionDirty"(int0: integer, int1: integer, int2: integer): void
public "setSectionDirtyWithNeighbors"(int0: integer, int1: integer, int2: integer): void
public "shouldShowEntityOutlines"(): boolean
public "sodium$getWorldRenderer"(): $SodiumWorldRenderer
public "tick"(): void
public "tickRain"(camera0: $Camera$$Type): void
public "updateGlobalBlockEntities"(collection0: $Collection$$Type<$BlockEntity$$Type>, collection1: $Collection$$Type<$BlockEntity$$Type>): void
get "capturedFrustum"(): $Frustum
set "capturedFrustum"(value: $Frustum$$Type)
get "particlesTarget"(): $RenderTarget
set "particlesTarget"(value: $RenderTarget$$Type)
get "renderBuffers"(): $RenderBuffers
set "renderBuffers"(value: $RenderBuffers$$Type)
get "transparencyChain"(): $PostChain
set "transparencyChain"(value: $PostChain$$Type)
get "chunkRenderDispatcher"(): $ChunkRenderDispatcher
get "chunkStatistics"(): string
get "cloudsTarget"(): $RenderTarget
get "entityStatistics"(): string
get "frustum"(): $Frustum
get "itemEntityTarget"(): $RenderTarget
get "lastViewDistance"(): double
get "name"(): string
get "totalChunks"(): double
get "translucentTarget"(): $RenderTarget
get "weatherTarget"(): $RenderTarget
set "level"(value: $ClientLevel$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/$ItemModelShaper" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ModelResourceLocation, $ModelResourceLocation$$Type } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $ModelManager, $ModelManager$$Type } from "packages/net/minecraft/client/resources/model/$ModelManager"

export class $ItemModelShaper {
readonly "shapes": $Int2ObjectMap<$ModelResourceLocation>

constructor(modelManager0: $ModelManager$$Type)

public "getItemModel"(itemStack0: $ItemStack$$Type): $BakedModel
public "getItemModel"(item: $Item$$Type): $BakedModel
public "getModelManager"(): $ModelManager
public "rebuildCache"(): void
public "register"(item: $Item$$Type, location: $ModelResourceLocation$$Type): void
get "modelManager"(): $ModelManager
}
}

declare module "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityModelSet, $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $BlockEntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $TridentModel, $TridentModel$$Type } from "packages/net/minecraft/client/model/$TridentModel"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener {
readonly "entityModelSet": $EntityModelSet

constructor(blockEntityRenderDispatcher0: $BlockEntityRenderDispatcher$$Type, entityModelSet1: $EntityModelSet$$Type)

public "getName"(): string
public "handler$edi000$renderByItem"(itemStack: $ItemStack$$Type, itemDisplayContext: $ItemDisplayContext$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, i: integer, j: integer, info: $CallbackInfo$$Type): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "renderByItem"(itemStack0: $ItemStack$$Type, itemDisplayContext1: $ItemDisplayContext$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
get "tridentModel"(): $TridentModel
set "tridentModel"(value: $TridentModel$$Type)
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/$RenderType$CompositeState$CompositeStateBuilder" {
import { $RenderStateShard$OverlayStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$OverlayStateShard"
import { $RenderStateShard$TexturingStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$TexturingStateShard"
import { $RenderType$OutlineProperty$$Type } from "packages/net/minecraft/client/renderer/$RenderType$OutlineProperty"
import { $RenderStateShard$LineStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$LineStateShard"
import { $RenderStateShard$EmptyTextureStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$EmptyTextureStateShard"
import { $RenderStateShard$LightmapStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$LightmapStateShard"
import { $RenderStateShard$LayeringStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$LayeringStateShard"
import { $RenderStateShard$WriteMaskStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard"
import { $RenderStateShard$ColorLogicStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$ColorLogicStateShard"
import { $RenderStateShard$OutputStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$OutputStateShard"
import { $RenderType$CompositeState } from "packages/net/minecraft/client/renderer/$RenderType$CompositeState"
import { $RenderStateShard$ShaderStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import { $RenderStateShard$DepthTestStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard"
import { $RenderStateShard$TransparencyStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"
import { $RenderStateShard$CullStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
constructor()

public "createCompositeState"(outlineProperty0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
public "createCompositeState"(boolean0: boolean): $RenderType$CompositeState
public "setColorLogicState"(colorLogicStateShard0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setCullState"(cullStateShard0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(depthTestStateShard0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(layeringStateShard0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLightmapState"(lightmapStateShard0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(lineStateShard0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(outputStateShard0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(overlayStateShard0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(shaderStateShard0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTextureState"(emptyTextureStateShard0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(texturingStateShard0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTransparencyState"(transparencyStateShard0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(writeMaskStateShard0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteContents$Ticker" {
import { $SpriteTicker } from "packages/net/minecraft/client/renderer/texture/$SpriteTicker"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $SpriteContents$AnimatedTexture$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture"
import { $SpriteContents$InterpolationData$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents$InterpolationData"
import { $SpriteContentsAnimatorImplAccessor } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimatorImplAccessor"
import { $SpriteContentsTickerAccessor } from "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsTickerAccessor"
import { $SpriteContents$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents"

export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor, $SpriteContentsAnimatorImplAccessor {
public "close"(): void
public "handler$zlj000$assignParent"(spriteContents0: $SpriteContents$$Type, animatedTexture1: $SpriteContents$AnimatedTexture$$Type, interpolationData2: $SpriteContents$InterpolationData$$Type, callbackInfo3: $CallbackInfo$$Type): void
public "tickAndUpload"(int0: integer, int1: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/$ShaderInstance" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Shader } from "packages/com/mojang/blaze3d/shaders/$Shader"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $VertexFormat, $VertexFormat$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"
import { $ResourceProvider$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceProvider"
import { $BlendMode } from "packages/com/mojang/blaze3d/shaders/$BlendMode"
import { $AbstractUniform } from "packages/com/mojang/blaze3d/shaders/$AbstractUniform"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List } from "packages/java/util/$List"
import { $ShaderInstanceInterface } from "packages/net/irisshaders/iris/pipeline/programs/$ShaderInstanceInterface"
import { $Uniform, $Uniform$$Type } from "packages/com/mojang/blaze3d/shaders/$Uniform"
import { $Reader$$Type } from "packages/java/io/$Reader"
import { $Map } from "packages/java/util/$Map"

export class $ShaderInstance implements $Shader, $AutoCloseable, $ShaderInstanceInterface {
readonly "FOG_COLOR": $Uniform
readonly "FOG_END": $Uniform
readonly "FOG_SHAPE": $Uniform
readonly "FOG_START": $Uniform
readonly "GAME_TIME": $Uniform
readonly "GLINT_ALPHA": $Uniform
readonly "INVERSE_VIEW_ROTATION_MATRIX": $Uniform
readonly "LIGHT0_DIRECTION": $Uniform
readonly "LIGHT1_DIRECTION": $Uniform
readonly "LINE_WIDTH": $Uniform
readonly "SCREEN_SIZE": $Uniform
static readonly "SHADER_PATH": string
readonly "uniformMap": $Map<string, $Uniform>
readonly "uniforms": $List<$Uniform>

/** @deprecated */
constructor(resourceProvider0: $ResourceProvider$$Type, string1: string, vertexFormat2: $VertexFormat$$Type)
constructor(resourceProvider0: $ResourceProvider$$Type, resourceLocation1: $ResourceLocation$$Type, vertexFormat2: $VertexFormat$$Type)

public "apply"(): void
public "attachToProgram"(): void
public "clear"(): void
public "close"(): void
public "getFragmentProgram"(): $Program
public "getId"(): integer
public "getName"(): string
public "getUniform"(string0: string): $Uniform
public "getVertexFormat"(): $VertexFormat
public "getVertexProgram"(): $Program
public "iris$createExtraShaders"(provider: $ResourceProvider$$Type, name: $ResourceLocation$$Type): void
public "markDirty"(): void
public static "parseBlendNode"(jsonObject0: $JsonObject$$Type): $BlendMode
public "parseUniformNode"(jsonElement0: $JsonElement$$Type): void
public "redirect$bef000$iris$redirectBindAttributeLocation"(i: integer, j: integer, charSequence: charseq): void
public "redirect$bef000$iris$setupGeometryShader"(reader: $Reader$$Type, resourceProvider: $ResourceProvider$$Type, name: $ResourceLocation$$Type, vertexFormat: $VertexFormat$$Type): $JsonObject
public "safeGetUniform"(string0: string): $AbstractUniform
public "setSampler"(string0: string, object1: any): void
get "CHUNK_OFFSET"(): $Uniform
set "CHUNK_OFFSET"(value: $Uniform$$Type)
get "COLOR_MODULATOR"(): $Uniform
set "COLOR_MODULATOR"(value: $Uniform$$Type)
get "MODEL_VIEW_MATRIX"(): $Uniform
set "MODEL_VIEW_MATRIX"(value: $Uniform$$Type)
get "PROJECTION_MATRIX"(): $Uniform
set "PROJECTION_MATRIX"(value: $Uniform$$Type)
get "TEXTURE_MATRIX"(): $Uniform
set "TEXTURE_MATRIX"(value: $Uniform$$Type)
get "fragmentProgram"(): $Program
get "id"(): integer
get "name"(): string
get "vertexFormat"(): $VertexFormat
get "vertexProgram"(): $Program
}
}

declare module "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer" {
import { $IUpperPartHelper } from "packages/dev/kosmx/playerAnim/impl/$IUpperPartHelper"
import { $RenderLayerParent$$Type } from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RenderLayer<T extends $Entity, M extends $EntityModel<T>> implements $IUpperPartHelper {
constructor(renderLayerParent0: $RenderLayerParent$$Type<T, M>)

public "getParentModel"(): M
public "isUpperPart"(): boolean
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, t3: T, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): void
public "setUpperPart"(bl: boolean): void
get "parentModel"(): M
get "upperPart"(): boolean
set "upperPart"(value: boolean)
}
}

declare module "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource" {
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MemoryTrackingBuffer } from "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingBuffer"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $AccessorMultiBufferSource } from "packages/vazkii/patchouli/mixin/client/$AccessorMultiBufferSource"
import { $BufferSourceAccessor } from "packages/net/irisshaders/batchedentityrendering/mixin/$BufferSourceAccessor"
import { $MultiBufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $Map$$Type } from "packages/java/util/$Map"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource, $BufferSourceAccessor, $MemoryTrackingBuffer, $AccessorMultiBufferSource {
public "endBatch"(): void
public "endBatch"(renderType0: $RenderType$$Type): void
public "endLastBatch"(): void
public "freeAndDeleteBuffer"(): void
public "getAllocatedSize"(): integer
public "getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
public "getUsedSize"(): integer
public static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
get "allocatedSize"(): integer
get "usedSize"(): integer
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$TextureStateShard" {
import { $RenderStateShard$EmptyTextureStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$EmptyTextureStateShard"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $RenderStateShard$TextureStateShard extends $RenderStateShard$EmptyTextureStateShard {
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockModel" {
import { $Gson } from "packages/com/google/gson/$Gson"
import { $ModelBaker$$Type } from "packages/net/minecraft/client/resources/model/$ModelBaker"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Either, $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ItemOverrides } from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import { $FaceBakery } from "packages/net/minecraft/client/renderer/block/model/$FaceBakery"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockGeometryBakingContext } from "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $UnbakedModel } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $Reader$$Type } from "packages/java/io/$Reader"
import { $BakedQuad } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import { $Material, $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $BlockElement, $BlockElement$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElement"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $ItemTransforms, $ItemTransforms$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import { $Collection } from "packages/java/util/$Collection"
import { $BlockElementFace$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElementFace"
import { $ItemOverride, $ItemOverride$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemOverride"
import { $BlockModel$GuiLight, $BlockModel$GuiLight$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockModel implements $UnbakedModel {
static readonly "FACE_BAKERY": $FaceBakery
static readonly "GSON": $Gson
static readonly "PARTICLE_TEXTURE_REFERENCE": string
readonly "customData": $BlockGeometryBakingContext
readonly "hasAmbientOcclusion": boolean
readonly "textureMap": $Map<string, $Either<$Material, string>>

constructor(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$BlockElement$$Type>, map2: $Map$$Type<string, $Either$$Type<$Material$$Type, string>>, boolean3: boolean, guiLight4: $BlockModel$GuiLight$$Type, itemTransforms5: $ItemTransforms$$Type, list6: $List$$Type<$ItemOverride$$Type>)

/** @deprecated */
public "bake"(modelBaker0: $ModelBaker$$Type, function1: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState2: $ModelState$$Type, resourceLocation3: $ResourceLocation$$Type): $BakedModel
public "bake"(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState3: $ModelState$$Type, resourceLocation4: $ResourceLocation$$Type, boolean5: boolean): $BakedModel
public static "bakeFace"(blockElement0: $BlockElement$$Type, blockElementFace1: $BlockElementFace$$Type, textureAtlasSprite2: $TextureAtlasSprite$$Type, direction3: $Direction$$Type, modelState4: $ModelState$$Type, resourceLocation5: $ResourceLocation$$Type): $BakedQuad
public static "fromStream"(reader0: $Reader$$Type): $BlockModel
public static "fromString"(string0: string): $BlockModel
public "getDependencies"(): $Collection<$ResourceLocation>
/** @deprecated */
public "getElements"(): $List<$BlockElement>
public "getGuiLight"(): $BlockModel$GuiLight
public "getMaterial"(string0: string): $Material
public "getOverrides"(modelBaker0: $ModelBaker$$Type, blockModel1: $BlockModel$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>): $ItemOverrides
public "getOverrides"(): $List<$ItemOverride>
public "getParentLocation"(): $ResourceLocation
public "getRootModel"(): $BlockModel
public "getTransforms"(): $ItemTransforms
public "hasAmbientOcclusion"(): boolean
public "hasTexture"(string0: string): boolean
public "isResolved"(): boolean
public "resolveParents"(function0: $Function$$Type<$ResourceLocation$$Type, $UnbakedModel>): void
get "name"(): string
set "name"(value: string)
get "parent"(): $BlockModel
set "parent"(value: $BlockModel$$Type)
get "parentLocation"(): $ResourceLocation
set "parentLocation"(value: $ResourceLocation$$Type)
get "dependencies"(): $Collection<$ResourceLocation>
get "elements"(): $List<$BlockElement>
get "guiLight"(): $BlockModel$GuiLight
get "overrides"(): $List<$ItemOverride>
get "rootModel"(): $BlockModel
get "transforms"(): $ItemTransforms
get "resolved"(): boolean
}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo" {
import { $SpriteContentsFrameInfoAccessor } from "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsFrameInfoAccessor"
import { $SpriteContentsAnimationFrameAccessor } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationFrameAccessor"
import { $SpriteContentsAnimationFrameAccessor as $SpriteContentsAnimationFrameAccessor$0 } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationFrameAccessor"

export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsAnimationFrameAccessor, $SpriteContentsAnimationFrameAccessor$0 {
}
}

declare module "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher" {
import { $ItemRenderer } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $EntityRenderDispatcher } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $BlockRenderDispatcher } from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Camera, $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $Font, $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $HitResult, $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockEntityRenderer } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener {
readonly "font": $Font

constructor(font0: $Font$$Type, entityModelSet1: $EntityModelSet$$Type, supplier2: $Supplier$$Type<$BlockRenderDispatcher>, supplier3: $Supplier$$Type<$ItemRenderer>, supplier4: $Supplier$$Type<$EntityRenderDispatcher>)

public "getName"(): string
public "getRenderer"<E extends $BlockEntity>(e0: E): $BlockEntityRenderer<E>
public "handler$eab000$render"(blockEntity0: $BlockEntity$$Type, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, callbackInfo4: $CallbackInfo$$Type): void
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "prepare"(level0: $Level$$Type, camera1: $Camera$$Type, hitResult2: $HitResult$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"<E extends $BlockEntity>(e0: E, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type): void
public "renderItem"<E extends $BlockEntity>(e0: E, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer): boolean
public "setLevel"(level0: $Level$$Type): void
get "camera"(): $Camera
set "camera"(value: $Camera$$Type)
get "cameraHitResult"(): $HitResult
set "cameraHitResult"(value: $HitResult$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/$LevelRenderer$RenderChunkStorage" {
import { $LevelRenderer$RenderChunkInfo } from "packages/net/minecraft/client/renderer/$LevelRenderer$RenderChunkInfo"
import { $LinkedHashSet } from "packages/java/util/$LinkedHashSet"
import { $LevelRenderer$RenderInfoMap } from "packages/net/minecraft/client/renderer/$LevelRenderer$RenderInfoMap"

export class $LevelRenderer$RenderChunkStorage {
readonly "renderChunks": $LinkedHashSet<$LevelRenderer$RenderChunkInfo>
readonly "renderInfoMap": $LevelRenderer$RenderInfoMap

constructor(int0: integer)

}
}

declare module "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer" {
import { $BeeDebugRenderer$BeeInfo$$Type } from "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer$BeeInfo"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BeeDebugRenderer$HiveInfo$$Type } from "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer$HiveInfo"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addOrUpdateBeeInfo"(beeInfo0: $BeeDebugRenderer$BeeInfo$$Type): void
public "addOrUpdateHiveInfo"(hiveInfo0: $BeeDebugRenderer$HiveInfo$$Type): void
public "clear"(): void
public "removeBeeInfo"(int0: integer): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider$Context" {
import { $ItemRenderer, $ItemRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $EntityRenderDispatcher, $EntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $Font, $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import { $ModelLayerLocation$$Type } from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import { $EntityModelSet, $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $BlockEntityRendererProvider$Context {
constructor(blockEntityRenderDispatcher0: $BlockEntityRenderDispatcher$$Type, blockRenderDispatcher1: $BlockRenderDispatcher$$Type, itemRenderer2: $ItemRenderer$$Type, entityRenderDispatcher3: $EntityRenderDispatcher$$Type, entityModelSet4: $EntityModelSet$$Type, font5: $Font$$Type)

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getEntityRenderer"(): $EntityRenderDispatcher
public "getFont"(): $Font
public "getItemRenderer"(): $ItemRenderer
public "getModelSet"(): $EntityModelSet
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderer"(): $EntityRenderDispatcher
get "font"(): $Font
get "itemRenderer"(): $ItemRenderer
get "modelSet"(): $EntityModelSet
}
}

declare module "packages/net/minecraft/client/renderer/$EffectInstance" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $IntSupplier, $IntSupplier$$Type } from "packages/java/util/function/$IntSupplier"
import { $Program$Type$$Type } from "packages/com/mojang/blaze3d/shaders/$Program$Type"
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"
import { $BlendMode } from "packages/com/mojang/blaze3d/shaders/$BlendMode"
import { $Effect } from "packages/com/mojang/blaze3d/shaders/$Effect"
import { $AbstractUniform } from "packages/com/mojang/blaze3d/shaders/$AbstractUniform"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $EffectProgram } from "packages/com/mojang/blaze3d/shaders/$EffectProgram"
import { $Uniform } from "packages/com/mojang/blaze3d/shaders/$Uniform"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Map } from "packages/java/util/$Map"

export class $EffectInstance implements $Effect, $AutoCloseable {
readonly "samplerMap": $Map<string, $IntSupplier>

constructor(resourceManager0: $ResourceManager$$Type, string1: string)

public "apply"(): void
public "attachToProgram"(): void
public "clear"(): void
public "close"(): void
public "getFragmentProgram"(): $Program
public "getId"(): integer
public "getName"(): string
public static "getOrCreate"(resourceManager0: $ResourceManager$$Type, type1: $Program$Type$$Type, string2: string): $EffectProgram
public "getUniform"(string0: string): $Uniform
public "getVertexProgram"(): $Program
public "markDirty"(): void
public static "parseBlendNode"(jsonObject0: $JsonObject$$Type): $BlendMode
public "safeGetUniform"(string0: string): $AbstractUniform
public "setSampler"(string0: string, intSupplier1: $IntSupplier$$Type): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "name"(): string
get "vertexProgram"(): $Program
}
}

declare module "packages/net/minecraft/client/renderer/texture/$Dumpable" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $Dumpable {
"dumpContents"(resourceLocation0: $ResourceLocation$$Type, path1: $Path$$Type): void
}

export namespace $Dumpable {
const probejs$$marker: never
}
export abstract class $Dumpable$$Static implements $Dumpable {
}
}

declare module "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider" {
import { $BlockEntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider$Context"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockEntityRenderer } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer"

export interface $BlockEntityRendererProvider<T extends $BlockEntity> {
"create"(context0: $BlockEntityRendererProvider$Context$$Type): $BlockEntityRenderer<T>
}

export namespace $BlockEntityRendererProvider {
const probejs$$marker: never
}
export abstract class $BlockEntityRendererProvider$$Static<T extends $BlockEntity> implements $BlockEntityRendererProvider<T> {
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$OutputStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$OutputStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "packages/net/minecraft/client/renderer/debug/$GoalSelectorDebugRenderer$DebugGoal" {
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $GoalSelectorDebugRenderer$DebugGoal {
readonly "isRunning": boolean
readonly "name": string
readonly "pos": $BlockPos
readonly "priority": integer

constructor(blockPos0: $BlockPos$$Type, int1: integer, string2: string, boolean3: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"

export class $RenderStateShard$DepthTestStateShard extends $RenderStateShard {
constructor(string0: string, int1: integer)

}
}

declare module "packages/net/minecraft/client/renderer/block/model/$FaceBakery" {
import { $BlockElementRotation$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElementRotation"
import { $BlockFaceUV, $BlockFaceUV$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockFaceUV"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Transformation$$Type } from "packages/com/mojang/math/$Transformation"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockElementFace$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElementFace"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BakedQuad } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import { $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $FaceBakery {
static readonly "UV_INDEX": integer
static readonly "VERTEX_COUNT": integer
static readonly "VERTEX_INT_SIZE": integer

constructor()

public "applyModelRotation"(vector3f0: $Vector3f$$Type, transformation1: $Transformation$$Type): void
public "bakeQuad"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, blockElementFace2: $BlockElementFace$$Type, textureAtlasSprite3: $TextureAtlasSprite$$Type, direction4: $Direction$$Type, modelState5: $ModelState$$Type, blockElementRotation6: $BlockElementRotation$$Type, boolean7: boolean, resourceLocation8: $ResourceLocation$$Type): $BakedQuad
public static "calculateFacing"(int0s: integer[]): $Direction
public "recalculateWinding"(int0s: integer[], direction1: $Direction$$Type): void
public static "recomputeUVs"(blockFaceUV0: $BlockFaceUV$$Type, direction1: $Direction$$Type, transformation2: $Transformation$$Type, resourceLocation3: $ResourceLocation$$Type): $BlockFaceUV
}
}

declare module "packages/net/minecraft/client/renderer/debug/$DebugRenderer" {
import { $BeeDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $VillageSectionsDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$VillageSectionsDebugRenderer"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"
import { $LightSectionDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$LightSectionDebugRenderer"
import { $RaidDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$RaidDebugRenderer"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $GoalSelectorDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$GoalSelectorDebugRenderer"
import { $PathfindingRenderer } from "packages/net/minecraft/client/renderer/debug/$PathfindingRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $BrainDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GameEventListenerRenderer } from "packages/net/minecraft/client/renderer/debug/$GameEventListenerRenderer"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $GameTestDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$GameTestDebugRenderer"
import { $StructureRenderer } from "packages/net/minecraft/client/renderer/debug/$StructureRenderer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $OrientedBoundingBox$$Type } from "packages/net/bettercombat/client/collision/$OrientedBoundingBox"

export class $DebugRenderer {
readonly "beeDebugRenderer": $BeeDebugRenderer
readonly "brainDebugRenderer": $BrainDebugRenderer
readonly "chunkBorderRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "collisionBoxRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "gameEventListenerRenderer": $GameEventListenerRenderer
readonly "gameTestDebugRenderer": $GameTestDebugRenderer
readonly "goalSelectorRenderer": $GoalSelectorDebugRenderer
readonly "heightMapRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "lightDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "neighborsUpdateRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "pathfindingRenderer": $PathfindingRenderer
readonly "raidDebugRenderer": $RaidDebugRenderer
readonly "skyLightSectionDebugRenderer": $LightSectionDebugRenderer
readonly "solidFaceRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "structureRenderer": $StructureRenderer
readonly "supportBlockRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "villageSectionsDebugRenderer": $VillageSectionsDebugRenderer
readonly "waterDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "worldGenAttemptRenderer": $DebugRenderer$SimpleDebugRenderer

constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public static "getTargetedEntity"(entity0: $Entity$$Type, int1: integer): $Optional<$Entity>
public "handler$cbo000$renderColliderDebug"(matrices: $PoseStack$$Type, vertexConsumers: $MultiBufferSource$BufferSource$$Type, cameraX: double, cameraY: double, cameraZ: double, ci: $CallbackInfo$$Type): void
public "printDebug"(obb: $OrientedBoundingBox$$Type): void
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, double2: double, double3: double, double4: double): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, blockPos2: $BlockPos$$Type, float3: float, float4: float, float5: float, float6: float, float7: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, float4: float, float5: float, float6: float, float7: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, aABB2: $AABB$$Type, float3: float, float4: float, float5: float, float6: float): void
public static "renderFilledBox"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double, float8: float, float9: float, float10: float, float11: float): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, int3: integer, int4: integer, int5: integer, int6: integer): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer, float7: float, boolean8: boolean, float9: float, boolean10: boolean): void
public static "renderFloatingText"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, string2: string, double3: double, double4: double, double5: double, int6: integer, float7: float): void
public "switchRenderChunkborder"(): boolean
}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteContents" {
import { $ForgeTextureMetadata, $ForgeTextureMetadata$$Type } from "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata"
import { $AnimationMetadataSection$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import { $SpriteContentsExtension } from "packages/net/irisshaders/iris/texture/pbr/$SpriteContentsExtension"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $SpriteContentsInvoker } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/$SpriteContentsInvoker"
import { $SpriteContents$AnimatedTexture } from "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture"
import { $NativeImage, $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpriteContentsAccessor } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAccessor"
import { $PBRSpriteHolder } from "packages/net/irisshaders/iris/texture/pbr/$PBRSpriteHolder"
import { $Stitcher$Entry } from "packages/net/minecraft/client/renderer/texture/$Stitcher$Entry"
import { $SpriteContentsAccessor as $SpriteContentsAccessor$0 } from "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsAccessor"
import { $SpriteContentsExtended } from "packages/me/jellysquid/mods/sodium/client/render/texture/$SpriteContentsExtended"
import { $SpriteTicker } from "packages/net/minecraft/client/renderer/texture/$SpriteTicker"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $SpriteContents$Ticker } from "packages/net/minecraft/client/renderer/texture/$SpriteContents$Ticker"
import { $SpriteContentsExtension as $SpriteContentsExtension$0 } from "packages/net/irisshaders/iris/texture/$SpriteContentsExtension"
import { $FrameSize$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import { $IPotentiallyInvisibleSpriteContents } from "packages/com/railwayteam/railways/mixin_interfaces/$IPotentiallyInvisibleSpriteContents"

export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$0, $SpriteContentsAccessor$0, $SpriteContentsExtension, $IPotentiallyInvisibleSpriteContents, $SpriteContentsAccessor, $SpriteContentsExtended, $SpriteContentsInvoker {
readonly "animatedTexture": $SpriteContents$AnimatedTexture
readonly "forgeMeta": $ForgeTextureMetadata

/** @deprecated */
constructor(resourceLocation0: $ResourceLocation$$Type, frameSize1: $FrameSize$$Type, nativeImage2: $NativeImage$$Type, animationMetadataSection3: $AnimationMetadataSection$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, frameSize1: $FrameSize$$Type, nativeImage2: $NativeImage$$Type, animationMetadataSection3: $AnimationMetadataSection$$Type, forgeTextureMetadata4: $ForgeTextureMetadata$$Type)

public "close"(): void
public "createTicker"(): $SpriteTicker
public "getCreatedTicker"(): $SpriteContents$Ticker
public "getFrameCount"(): integer
public "getOrCreatePBRHolder"(): $PBRSpriteHolder
public "getOriginalImage"(): $NativeImage
public "getPBRHolder"(): $PBRSpriteHolder
public "getUniqueFrames"(): $IntStream
public "height"(): integer
public "increaseMipLevel"(int0: integer): void
public "isTransparent"(int0: integer, int1: integer, int2: integer): boolean
public "name"(): $ResourceLocation
public "railways$isVisible"(): boolean
public "railways$shouldDoInvisibility"(): boolean
public "railways$uploadFrame"(visible: boolean): void
public "sodium$hasAnimation"(): boolean
public "sodium$isActive"(): boolean
public "sodium$setActive"(boolean0: boolean): void
public "uploadFirstFrame"(int0: integer, int1: integer): void
public "width"(): integer
get "byMipLevel"(): $NativeImage[]
set "byMipLevel"(value: $NativeImage$$Type[])
get "originalImage"(): $NativeImage
set "originalImage"(value: $NativeImage$$Type)
get "createdTicker"(): $SpriteContents$Ticker
get "frameCount"(): integer
get "orCreatePBRHolder"(): $PBRSpriteHolder
get "pBRHolder"(): $PBRSpriteHolder
get "uniqueFrames"(): $IntStream
}
}

declare module "packages/net/minecraft/client/renderer/$ChunkBufferBuilderPack" {
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $ChunkBufferBuilderPackAccessor } from "packages/net/irisshaders/batchedentityrendering/mixin/$ChunkBufferBuilderPackAccessor"

export class $ChunkBufferBuilderPack implements $ChunkBufferBuilderPackAccessor {
constructor()

public "builder"(renderType0: $RenderType$$Type): $BufferBuilder
public "clearAll"(): void
public "discardAll"(): void
}
}

declare module "packages/net/minecraft/client/renderer/$RenderBuffers" {
import { $MultiBufferSource$BufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MemoryTrackingRenderBuffers } from "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingRenderBuffers"
import { $OutlineBufferSource } from "packages/net/minecraft/client/renderer/$OutlineBufferSource"
import { $ChunkBufferBuilderPack } from "packages/net/minecraft/client/renderer/$ChunkBufferBuilderPack"
import { $RenderBuffersExt } from "packages/net/irisshaders/batchedentityrendering/impl/$RenderBuffersExt"
import { $DrawCallTrackingRenderBuffers } from "packages/net/irisshaders/batchedentityrendering/impl/$DrawCallTrackingRenderBuffers"

export class $RenderBuffers implements $MemoryTrackingRenderBuffers, $RenderBuffersExt, $DrawCallTrackingRenderBuffers {
constructor()

public "beginLevelRendering"(): void
public "bufferSource"(): $MultiBufferSource$BufferSource
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "endLevelRendering"(): void
public "fixedBufferPack"(): $ChunkBufferBuilderPack
public "freeAndDeleteBuffers"(): void
public "getDrawCalls"(): integer
public "getEntityBufferAllocatedSize"(): integer
public "getMaxBegins"(): integer
public "getMiscBufferAllocatedSize"(): integer
public "getRenderTypes"(): integer
public "outlineBufferSource"(): $OutlineBufferSource
public "resetDrawCounts"(): void
get "drawCalls"(): integer
get "entityBufferAllocatedSize"(): integer
get "maxBegins"(): integer
get "miscBufferAllocatedSize"(): integer
get "renderTypes"(): integer
}
}

declare module "packages/net/minecraft/client/renderer/$ItemInHandRenderer" {
import { $EntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $ItemRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $AbstractClientPlayer$$Type } from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $ItemInHandRenderer {
constructor(minecraft0: $Minecraft$$Type, entityRenderDispatcher1: $EntityRenderDispatcher$$Type, itemRenderer2: $ItemRenderer$$Type)

public "applyItemArmAttackTransform"(poseStack0: $PoseStack$$Type, humanoidArm1: $HumanoidArm$$Type, float2: float): void
public "applyItemArmTransform"(poseStack0: $PoseStack$$Type, humanoidArm1: $HumanoidArm$$Type, float2: float): void
/** Client only, do not use in server scripts */
public "handler$cng000$renderArmWithItem"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, interactionHand3: $InteractionHand$$Type, float4: float, itemStack5: $ItemStack$$Type, float6: float, poseStack7: $PoseStack$$Type, multiBufferSource8: $MultiBufferSource$$Type, int9: integer, callbackInfo10: $CallbackInfo$$Type): void
public "handler$efg000$moonlight$animateItem"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, handHeight: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type): void
public "handler$efg000$moonlight$renderSpecial"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, equippedProgress: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type, arm: $HumanoidArm$$Type): void
public "itemUsed"(interactionHand0: $InteractionHand$$Type): void
public "renderHandsWithItems"(float0: float, poseStack1: $PoseStack$$Type, bufferSource2: $MultiBufferSource$BufferSource$$Type, localPlayer3: $LocalPlayer$$Type, int4: integer): void
public "renderItem"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemDisplayContext2: $ItemDisplayContext$$Type, boolean3: boolean, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer): void
public "renderPlayerArm"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, float3: float, float4: float, humanoidArm5: $HumanoidArm$$Type): void
public "tick"(): void
get "mainHandItem"(): $ItemStack
set "mainHandItem"(value: $ItemStack$$Type)
get "offHandItem"(): $ItemStack
set "offHandItem"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$RenderRegionCache" {
import { $RenderChunkRegion } from "packages/net/minecraft/client/renderer/chunk/$RenderChunkRegion"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $RenderRegionCache {
constructor()

public "createRegion"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type, int3: integer): $RenderChunkRegion
}
}

declare module "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer$BrainDump" {
import { $Path, $Path$$Type } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $Position, $Position$$Type } from "packages/net/minecraft/core/$Position"

export class $BrainDebugRenderer$BrainDump {
readonly "activities": $List<string>
readonly "angerLevel": integer
readonly "behaviors": $List<string>
readonly "gossips": $List<string>
readonly "health": float
readonly "id": integer
readonly "inventory": string
readonly "maxHealth": float
readonly "memories": $List<string>
readonly "name": string
readonly "path": $Path
readonly "pois": $Set<$BlockPos>
readonly "pos": $Position
readonly "potentialPois": $Set<$BlockPos>
readonly "profession": string
readonly "uuid": $UUID
readonly "wantsGolem": boolean
readonly "xp": integer

constructor(uUID0: $UUID$$Type, int1: integer, string2: string, string3: string, int4: integer, float5: float, float6: float, position7: $Position$$Type, string8: string, path9: $Path$$Type, boolean10: boolean, int11: integer)

public "getUuid"(): $UUID
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$OverlayStateShard" {
import { $RenderStateShard$BooleanStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$BooleanStateShard"

export class $RenderStateShard$OverlayStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BrainDebugRenderer$BrainDump$$Type } from "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer$BrainDump"
import { $BrainDebugRenderer$PoiInfo$$Type } from "packages/net/minecraft/client/renderer/debug/$BrainDebugRenderer$PoiInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addOrUpdateBrainDump"(brainDump0: $BrainDebugRenderer$BrainDump$$Type): void
public "addPoi"(poiInfo0: $BrainDebugRenderer$PoiInfo$$Type): void
public "clear"(): void
public "removeBrainDump"(int0: integer): void
public "removePoi"(blockPos0: $BlockPos$$Type): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setFreeTicketCount"(blockPos0: $BlockPos$$Type, int1: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteContents$InterpolationData" {
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $SpriteContents$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents"

export class $SpriteContents$InterpolationData implements $AutoCloseable {
public "close"(): void
public "handler$zni000$assignParent"(spriteContents0: $SpriteContents$$Type, callbackInfo1: $CallbackInfo$$Type): void
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemOverride" {
import { $ItemOverride$Predicate, $ItemOverride$Predicate$$Type } from "packages/net/minecraft/client/renderer/block/model/$ItemOverride$Predicate"
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemOverride {
constructor(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$ItemOverride$Predicate$$Type>)

public "getModel"(): $ResourceLocation
public "getPredicates"(): $Stream<$ItemOverride$Predicate>
get "model"(): $ResourceLocation
get "predicates"(): $Stream<$ItemOverride$Predicate>
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockFaceUV" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockFaceUV {
readonly "rotation": integer

constructor(float0s: float[], int1: integer)

public "getReverseIndex"(int0: integer): integer
public "getU"(int0: integer): float
public "getV"(int0: integer): float
public "setMissingUv"(float0s: float[]): void
get "uvs"(): float[]
set "uvs"(value: float[])
set "missingUv"(value: float[])
}
}

declare module "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider" {
import { $EntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import { $EntityRenderer } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererProvider<T extends $Entity> {
"create"(context0: $EntityRendererProvider$Context$$Type): $EntityRenderer<T>
}

export namespace $EntityRendererProvider {
const probejs$$marker: never
}
export abstract class $EntityRendererProvider$$Static<T extends $Entity> implements $EntityRendererProvider<T> {
}
}

declare module "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer$HiveInfo" {
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $BeeDebugRenderer$HiveInfo {
readonly "hiveType": string
readonly "honeyLevel": integer
readonly "lastSeen": long
readonly "occupantCount": integer
readonly "pos": $BlockPos
readonly "sedated": boolean

constructor(blockPos0: $BlockPos$$Type, string1: string, int2: integer, int3: integer, boolean4: boolean, long5: long)

}
}

declare module "packages/net/minecraft/client/renderer/chunk/$VisibilitySet" {
import { $Set$$Type } from "packages/java/util/$Set"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $VisibilitySet {
constructor()

public "add"(set0: $Set$$Type<$Direction$$Type>): void
public "set"(direction0: $Direction$$Type, direction1: $Direction$$Type, boolean2: boolean): void
public "setAll"(boolean0: boolean): void
public "visibilityBetween"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
set "all"(value: boolean)
}
}

declare module "packages/net/minecraft/client/renderer/debug/$LightSectionDebugRenderer" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"
import { $LightLayer$$Type } from "packages/net/minecraft/world/level/$LightLayer"

export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type, lightLayer1: $LightLayer$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockElement" {
import { $BlockElementRotation, $BlockElementRotation$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElementRotation"
import { $ForgeFaceData, $ForgeFaceData$$Type } from "packages/net/minecraftforge/client/model/$ForgeFaceData"
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockElementFace, $BlockElementFace$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockElementFace"
import { $EpsilonizableBlockElement } from "packages/org/embeddedt/embeddium/model/$EpsilonizableBlockElement"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $BlockElement implements $EpsilonizableBlockElement {
readonly "faces": $Map<$Direction, $BlockElementFace>
readonly "from": $Vector3f
readonly "shade": boolean
readonly "to": $Vector3f

constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, map2: $Map$$Type<$Direction$$Type, $BlockElementFace$$Type>, blockElementRotation3: $BlockElementRotation$$Type, boolean4: boolean)
constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, map2: $Map$$Type<$Direction$$Type, $BlockElementFace$$Type>, blockElementRotation3: $BlockElementRotation$$Type, boolean4: boolean, forgeFaceData5: $ForgeFaceData$$Type)

public "embeddium$epsilonize"(): void
public "getFaceData"(): $ForgeFaceData
public "setFaceData"(forgeFaceData0: $ForgeFaceData$$Type): void
public "uvsByFace"(direction0: $Direction$$Type): float[]
get "rotation"(): $BlockElementRotation
set "rotation"(value: $BlockElementRotation$$Type)
get "faceData"(): $ForgeFaceData
set "faceData"(value: $ForgeFaceData$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/debug/$RaidDebugRenderer" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "setRaidCenters"(collection0: $Collection$$Type<$BlockPos$$Type>): void
set "raidCenters"(value: $Collection$$Type<$BlockPos$$Type>)
}
}

declare module "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer" {
import { $RenderLayer, $RenderLayer$$Type } from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import { $RenderLayerParent } from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $EntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $EntityModel, $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $EntityRenderer } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $AccessorLivingEntityRenderer } from "packages/com/railwayteam/railways/mixin/client/$AccessorLivingEntityRenderer"

export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M>, $AccessorLivingEntityRenderer<any> {
constructor(context0: $EntityRendererProvider$Context$$Type, m1: M, float2: float)

public "addLayer"(renderLayer0: $RenderLayer$$Type<T, M>): boolean
public "getModel"(): M
public static "getOverlayCoords"(livingEntity0: $LivingEntity$$Type, float1: float): integer
public "getTextureLocation"(t0: T): $ResourceLocation
public "handler$cnh001$render"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, callbackInfo6: $CallbackInfo$$Type): void
public static "isEntityUpsideDown"(livingEntity0: $LivingEntity$$Type): boolean
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
get "layers"(): $List<$RenderLayer<T, M>>
set "layers"(value: $List$$Type<$RenderLayer$$Type<T, M>>)
get "model"(): M
}
}

declare module "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite" {
import { $TextureAtlasSprite$Ticker } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite$Ticker"
import { $VertexConsumer, $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpriteContents, $SpriteContents$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents"

export class $TextureAtlasSprite {
constructor(resourceLocation0: $ResourceLocation$$Type, spriteContents1: $SpriteContents$$Type, int2: integer, int3: integer, int4: integer, int5: integer)

public "atlasLocation"(): $ResourceLocation
public "contents"(): $SpriteContents
public "createTicker"(): $TextureAtlasSprite$Ticker
public "getPixelRGBA"(int0: integer, int1: integer, int2: integer): integer
public "getU"(double0: double): float
public "getU0"(): float
public "getU1"(): float
public "getUOffset"(float0: float): float
public "getV"(double0: double): float
public "getV0"(): float
public "getV1"(): float
public "getVOffset"(float0: float): float
public "getX"(): integer
public "getY"(): integer
public "uploadFirstFrame"(): void
public "uvShrinkRatio"(): float
public "wrap"(vertexConsumer0: $VertexConsumer$$Type): $VertexConsumer
get "u0"(): float
get "u1"(): float
get "v0"(): float
get "v1"(): float
get "x"(): integer
get "y"(): integer
}
}

declare module "packages/net/minecraft/client/renderer/$LevelRenderer$RenderInfoMap" {
import { $LevelRenderer$RenderChunkInfo, $LevelRenderer$RenderChunkInfo$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer$RenderChunkInfo"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"

export class $LevelRenderer$RenderInfoMap {
public "get"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type): $LevelRenderer$RenderChunkInfo
public "put"(renderChunk0: $ChunkRenderDispatcher$RenderChunk$$Type, renderChunkInfo1: $LevelRenderer$RenderChunkInfo$$Type): void
}
}

declare module "packages/net/minecraft/client/renderer/block/$BlockModelShaper" {
import { $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ModelResourceLocation } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelManager, $ModelManager$$Type } from "packages/net/minecraft/client/resources/model/$ModelManager"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $Map$$Type } from "packages/java/util/$Map"

export class $BlockModelShaper {
constructor(modelManager0: $ModelManager$$Type)

public "getBlockModel"(state: $BlockState$$Type): $BakedModel
public "getModelManager"(): $ModelManager
/** @deprecated */
public "getParticleIcon"(blockState0: $BlockState$$Type): $TextureAtlasSprite
public "getTexture"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): $TextureAtlasSprite
public "replaceCache"(map0: $Map$$Type<$BlockState$$Type, $BakedModel$$Type>): void
public static "statePropertiesToString"(map0: $Map$$Type<$Property$$Type<any>, $Comparable$$Type<any>>): string
public static "stateToModelLocation"(resourceLocation0: $ResourceLocation$$Type, blockState1: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(blockState0: $BlockState$$Type): $ModelResourceLocation
get "modelManager"(): $ModelManager
}
}

declare module "packages/net/minecraft/client/renderer/item/$ClampedItemPropertyFunction" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ItemPropertyFunction } from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ClampedItemPropertyFunction extends $ItemPropertyFunction {
/** @deprecated */
"call"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
"unclampedCall"(itemStack0: $ItemStack$$Type, clientLevel1: $ClientLevel$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): float
}

export namespace $ClampedItemPropertyFunction {
const probejs$$marker: never
}
export abstract class $ClampedItemPropertyFunction$$Static implements $ClampedItemPropertyFunction {
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$ChunkTaskResult" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ChunkRenderDispatcher$ChunkTaskResult extends $Enum<$ChunkRenderDispatcher$ChunkTaskResult> {
static readonly "CANCELLED": $ChunkRenderDispatcher$ChunkTaskResult
static readonly "SUCCESSFUL": $ChunkRenderDispatcher$ChunkTaskResult

public static "valueOf"(string0: string): $ChunkRenderDispatcher$ChunkTaskResult
public static "values"(): $ChunkRenderDispatcher$ChunkTaskResult[]
}
}

declare module "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer" {
import { $AbstractClientPlayer, $AbstractClientPlayer$$Type } from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import { $EntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import { $LivingEntityRenderer } from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PlayerModel } from "packages/net/minecraft/client/model/$PlayerModel"

export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
constructor(context0: $EntityRendererProvider$Context$$Type, boolean1: boolean)

public "getRenderOffset"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float): $Vec3
public "getTextureLocation"(abstractClientPlayer0: $AbstractClientPlayer$$Type): $ResourceLocation
public "handler$edg000$setModelProperties"(abstractClientPlayer: $AbstractClientPlayer$$Type, info: $CallbackInfo$$Type): void
public "render"(abstractClientPlayer0: $AbstractClientPlayer$$Type, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
public "renderLeftHand"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, abstractClientPlayer3: $AbstractClientPlayer$$Type): void
public "renderRightHand"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, abstractClientPlayer3: $AbstractClientPlayer$$Type): void
}
}

declare module "packages/net/minecraft/client/renderer/debug/$GoalSelectorDebugRenderer" {
import { $GoalSelectorDebugRenderer$DebugGoal$$Type } from "packages/net/minecraft/client/renderer/debug/$GoalSelectorDebugRenderer$DebugGoal"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List$$Type } from "packages/java/util/$List"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addGoalSelector"(int0: integer, list1: $List$$Type<$GoalSelectorDebugRenderer$DebugGoal$$Type>): void
public "clear"(): void
public "removeGoalSelector"(int0: integer): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "packages/net/minecraft/client/renderer/$RenderType" {
import { $TransparencyType, $TransparencyType$$Type } from "packages/net/irisshaders/batchedentityrendering/impl/$TransparencyType"
import { $RenderTypeAccessor } from "packages/net/irisshaders/iris/mixin/rendertype/$RenderTypeAccessor"
import { $BlendingStateHolder } from "packages/net/irisshaders/batchedentityrendering/impl/$BlendingStateHolder"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction } from "packages/java/util/function/$BiFunction"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RenderType$CompositeRenderType } from "packages/net/minecraft/client/renderer/$RenderType$CompositeRenderType"
import { $VertexFormat, $VertexFormat$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import { $RenderType$CompositeState, $RenderType$CompositeState$$Type } from "packages/net/minecraft/client/renderer/$RenderType$CompositeState"
import { $RenderStateShard$ShaderStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import { $Function } from "packages/java/util/function/$Function"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $VertexSorting$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexSorting"
import { $RenderTypeAccessor as $RenderTypeAccessor$0 } from "packages/net/irisshaders/batchedentityrendering/mixin/$RenderTypeAccessor"
import { $RenderTypeAccessor as $RenderTypeAccessor$1 } from "packages/net/createmod/ponder/mixin/client/accessor/$RenderTypeAccessor"
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $RenderTypeAccessor as $RenderTypeAccessor$2 } from "packages/vazkii/botania/mixin/client/$RenderTypeAccessor"

export class $RenderType extends $RenderStateShard implements $RenderTypeAccessor$2, $RenderTypeAccessor, $BlendingStateHolder, $RenderTypeAccessor$0, $RenderTypeAccessor$1 {
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "ARMOR_GLINT": $RenderType
static readonly "BEACON_BEAM": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "BYTES_IN_INT": integer
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<$RenderType>
static readonly "CRUMBLING": $Function<$ResourceLocation, $RenderType>
static readonly "CUTOUT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "DEBUG_LINE_STRIP": $Function<double, $RenderType$CompositeRenderType>
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<$ResourceLocation, $RenderType>
static readonly "END_GATEWAY": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "ENTITY_CUTOUT": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_DECAL": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_GLINT": $RenderType
static readonly "ENTITY_GLINT_DIRECT": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SHADOW": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_SOLID": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_TRANSLUCENT": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<$ResourceLocation, boolean, $RenderType>
static readonly "EYES": $Function<$ResourceLocation, $RenderType>
static readonly "GLINT": $RenderType
static readonly "GLINT_DIRECT": $RenderType
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<$ResourceLocation, $RenderType>
static readonly "LEASH": $RenderType
static readonly "LIGHTNING": $RenderType
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "MEDIUM_BUFFER_SIZE": integer
static readonly "MEGABYTE": integer
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "SOLID": $RenderType
static readonly "TEXT": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "TEXT_INTENSITY": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_POLYGON_OFFSET": $Function<$ResourceLocation, $RenderType>
static readonly "TEXT_SEE_THROUGH": $Function<$ResourceLocation, $RenderType>
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "TRANSLUCENT": $RenderType
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "TRANSLUCENT_NO_CRUMBLING": $RenderType
static readonly "TRIPWIRE": $RenderType
static readonly "WATER_MASK": $RenderType
readonly "affectsCrumbling": boolean
readonly "asOptional": $Optional<$RenderType>
readonly "bufferSize": integer
readonly "format": $VertexFormat
readonly "mode": $VertexFormat$Mode
readonly "sortOnUpload": boolean

constructor(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, boolean4: boolean, boolean5: boolean, runnable6: $Runnable$$Type, runnable7: $Runnable$$Type)

public "affectsCrumbling"(): boolean
public static "armorCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "armorEntityGlint"(): $RenderType
public static "armorGlint"(): $RenderType
public "asOptional"(): $Optional<$RenderType>
public static "beaconBeam"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public "bufferSize"(): integer
public "canConsolidateConsecutiveGeometry"(): boolean
public static "chunkBufferLayers"(): $List<$RenderType>
public static "create"(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, compositeState4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(string0: string, vertexFormat1: $VertexFormat$$Type, mode2: $VertexFormat$Mode$$Type, int3: integer, boolean4: boolean, boolean5: boolean, compositeState6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "crumbling"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "cutout"(): $RenderType
public static "cutoutMipped"(): $RenderType
public static "debugFilledBox"(): $RenderType
public static "debugLineStrip"(double0: double): $RenderType
public static "debugQuads"(): $RenderType
public static "debugSectionQuads"(): $RenderType
public static "dragonExplosionAlpha"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "end"(bufferBuilder0: $BufferBuilder$$Type, vertexSorting1: $VertexSorting$$Type): void
public static "endGateway"(): $RenderType
public static "endPortal"(): $RenderType
public static "energySwirl"(resourceLocation0: $ResourceLocation$$Type, float1: float, float2: float): $RenderType
public static "entityCutout"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityDecal"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityGlint"(): $RenderType
public static "entityGlintDirect"(): $RenderType
public static "entityNoOutline"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityShadow"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entitySmoothCutout"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entitySolid"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityTranslucent"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $RenderType
public static "entityTranslucentEmissive"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "eyes"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "format"(): $VertexFormat
public "getChunkLayerId"(): integer
public "getTransparencyType"(): $TransparencyType
public static "glint"(): $RenderType
public static "glintDirect"(): $RenderType
public static "glintTranslucent"(): $RenderType
public static "gui"(): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public static "guiOverlay"(): $RenderType
public static "guiTextHighlight"(): $RenderType
public "isOutline"(): boolean
public static "itemEntityTranslucentCull"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "leash"(): $RenderType
public static "lightning"(): $RenderType
public static "lineStrip"(): $RenderType
public static "lines"(): $RenderType
public "mode"(): $VertexFormat$Mode
public "outline"(): $Optional<$RenderType>
public static "outline"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public "setTransparencyType"(transparencyType: $TransparencyType$$Type): void
public static "solid"(): $RenderType
public static "text"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textBackground"(): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "textIntensity"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textIntensityPolygonOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textIntensitySeeThrough"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textPolygonOffset"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "textSeeThrough"(resourceLocation0: $ResourceLocation$$Type): $RenderType
public static "translucent"(): $RenderType
public static "translucentMovingBlock"(): $RenderType
public static "translucentMovingBlockState"(): $RenderType$CompositeState
public static "translucentNoCrumbling"(): $RenderType
public static "translucentState"(shaderStateShard0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState
public static "tripwire"(): $RenderType
public static "tripwireState"(): $RenderType$CompositeState
public static "waterMask"(): $RenderType
get "chunkLayerId"(): integer
set "chunkLayerId"(value: integer)
get "transparencyType"(): $TransparencyType
set "transparencyType"(value: $TransparencyType$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$LightmapStateShard" {
import { $RenderStateShard$BooleanStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard$BooleanStateShard"

export class $RenderStateShard$LightmapStateShard extends $RenderStateShard$BooleanStateShard {
constructor(boolean0: boolean)

}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteContents$AnimatedTexture" {
import { $SpriteContentsAnimatedTextureAccessor } from "packages/net/irisshaders/iris/mixin/texture/$SpriteContentsAnimatedTextureAccessor"
import { $SpriteContentsAnimationAccessor } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationAccessor"
import { $SpriteTicker } from "packages/net/minecraft/client/renderer/texture/$SpriteTicker"
import { $IntStream } from "packages/java/util/stream/$IntStream"
import { $AnimatedTextureDuck } from "packages/com/railwayteam/railways/mixin_interfaces/$AnimatedTextureDuck"
import { $SpriteContentsAnimationAccessor as $SpriteContentsAnimationAccessor$0 } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationAccessor"

export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $AnimatedTextureDuck, $SpriteContentsAnimationAccessor$0, $SpriteContentsAnimationAccessor {
public "createTicker"(): $SpriteTicker
public "getFrameX"(int0: integer): integer
public "getFrameY"(int0: integer): integer
public "getUniqueFrames"(): $IntStream
public "railways$uploadWithVisibility"(): void
public "uploadFirstFrame"(int0: integer, int1: integer): void
get "uniqueFrames"(): $IntStream
}
}

declare module "packages/net/minecraft/client/renderer/texture/$OverlayTexture" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"

export class $OverlayTexture implements $AutoCloseable {
static readonly "NO_OVERLAY": integer
static readonly "NO_WHITE_U": integer
static readonly "RED_OVERLAY_V": integer
static readonly "WHITE_OVERLAY_V": integer

constructor()

public "close"(): void
public static "pack"(int0: integer, int1: integer): integer
public static "pack"(float0: float, boolean1: boolean): integer
public "setupOverlayColor"(): void
public "teardownOverlayColor"(): void
public static "u"(float0: float): integer
public static "v"(boolean0: boolean): integer
}
}

declare module "packages/net/minecraft/client/renderer/block/$LiquidBlockRenderer" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"

export class $LiquidBlockRenderer {
constructor()

public static "shouldRenderFace"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, fluidState2: $FluidState$$Type, blockState3: $BlockState$$Type, direction4: $Direction$$Type, fluidState5: $FluidState$$Type): boolean
public "tesselate"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, vertexConsumer2: $VertexConsumer$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type): void
public "wrapOperation$fbf000$supplementaries$modifyLumiseneHeight"(instance: $Fluid$$Type, above: $Fluid$$Type, original: $Operation$$Type<any>): boolean
public "wrapOperation$fbf000$supplementaries$modifyLumiseneLight"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, original: $Operation$$Type<any>): integer
}
}

declare module "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher" {
import { $BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $ModelData$$Type } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $ModelBlockRenderer, $ModelBlockRenderer$$Type } from "packages/net/minecraft/client/renderer/block/$ModelBlockRenderer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $LiquidBlockRenderer, $LiquidBlockRenderer$$Type } from "packages/net/minecraft/client/renderer/block/$LiquidBlockRenderer"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $BlockColors, $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BlockModelShaper, $BlockModelShaper$$Type } from "packages/net/minecraft/client/renderer/block/$BlockModelShaper"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockRenderDispatcher implements $ResourceManagerReloadListener {
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer

constructor(blockModelShaper0: $BlockModelShaper$$Type, blockEntityWithoutLevelRenderer1: $BlockEntityWithoutLevelRenderer$$Type, blockColors2: $BlockColors$$Type)

public "getBlockModel"(blockState0: $BlockState$$Type): $BakedModel
public "getBlockModelShaper"(): $BlockModelShaper
public "getModelRenderer"(): $ModelBlockRenderer
public "getName"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
/** @deprecated */
public "renderBatched"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, randomSource6: $RandomSource$$Type): void
public "renderBatched"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, randomSource6: $RandomSource$$Type, modelData7: $ModelData$$Type, renderType8: $RenderType$$Type): void
/** @deprecated */
public "renderBreakingTexture"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type): void
public "renderBreakingTexture"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockAndTintGetter2: $BlockAndTintGetter$$Type, poseStack3: $PoseStack$$Type, vertexConsumer4: $VertexConsumer$$Type, modelData5: $ModelData$$Type): void
public "renderLiquid"(blockPos0: $BlockPos$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, vertexConsumer2: $VertexConsumer$$Type, blockState3: $BlockState$$Type, fluidState4: $FluidState$$Type): void
/** @deprecated */
public "renderSingleBlock"(blockState0: $BlockState$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer): void
public "renderSingleBlock"(blockState0: $BlockState$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, int3: integer, int4: integer, modelData5: $ModelData$$Type, renderType6: $RenderType$$Type): void
get "blockColors"(): $BlockColors
set "blockColors"(value: $BlockColors$$Type)
get "liquidBlockRenderer"(): $LiquidBlockRenderer
set "liquidBlockRenderer"(value: $LiquidBlockRenderer$$Type)
get "modelRenderer"(): $ModelBlockRenderer
set "modelRenderer"(value: $ModelBlockRenderer$$Type)
get "blockModelShaper"(): $BlockModelShaper
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$CompiledChunk" {
import { $CompiledChunkAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$CompiledChunkAccess"
import { $BlockEntity } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $List } from "packages/java/util/$List"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderDispatcher$CompiledChunk implements $CompiledChunkAccess {
static readonly "UNCOMPILED": $ChunkRenderDispatcher$CompiledChunk

constructor()

public "facesCanSeeEachother"(direction0: $Direction$$Type, direction1: $Direction$$Type): boolean
public "getRenderableBlockEntities"(): $List<$BlockEntity>
public "hasNoRenderableLayers"(): boolean
public "isEmpty"(renderType0: $RenderType$$Type): boolean
get "renderableBlockEntities"(): $List<$BlockEntity>
}
}

declare module "packages/net/minecraft/client/renderer/entity/$RenderLayerParent" {
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
"getModel"(): M
"getTextureLocation"(t0: T): $ResourceLocation
get "model"(): M
}

export namespace $RenderLayerParent {
const probejs$$marker: never
}
export abstract class $RenderLayerParent$$Static<T extends $Entity, M extends $EntityModel<T>> implements $RenderLayerParent<T, M> {
}
}

declare module "packages/net/minecraft/client/renderer/entity/$ItemFrameRenderer" {
import { $ItemFrame, $ItemFrame$$Type } from "packages/net/minecraft/world/entity/decoration/$ItemFrame"
import { $EntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityRenderer } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer

constructor(context0: $EntityRendererProvider$Context$$Type)

public "getRenderOffset"(t0: T, float1: float): $Vec3
public "getTextureLocation"(t0: T): $ResourceLocation
public "render"(t0: T, float1: float, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/culling/$Frustum" {
import { $ViewportProvider } from "packages/me/jellysquid/mods/sodium/client/render/viewport/$ViewportProvider"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Viewport } from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $Frustum implements $ViewportProvider {
static readonly "OFFSET_STEP": integer

constructor(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type)
constructor(frustum0: $Frustum$$Type)

public "isVisible"(aABB0: $AABB$$Type): boolean
public "offsetToFullyIncludeCameraCube"(int0: integer): $Frustum
public "prepare"(double0: double, double1: double, double2: double): void
public "sodium$createViewport"(): $Viewport
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$LineStateShard" {
import { $OptionalDouble$$Type } from "packages/java/util/$OptionalDouble"
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"

export class $RenderStateShard$LineStateShard extends $RenderStateShard {
constructor(optionalDouble0: $OptionalDouble$$Type)

}
}

declare module "packages/net/minecraft/client/renderer/$MultiBufferSource" {
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiBufferSource$BufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $Map$$Type } from "packages/java/util/$Map"

export interface $MultiBufferSource {
"getBuffer"(renderType0: $RenderType$$Type): $VertexConsumer
}

export namespace $MultiBufferSource {
function immediate(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
function immediateWithBuffers(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
}
export abstract class $MultiBufferSource$$Static implements $MultiBufferSource {
static "immediate"(bufferBuilder0: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
static "immediateWithBuffers"(map0: $Map$$Type<$RenderType$$Type, $BufferBuilder$$Type>, bufferBuilder1: $BufferBuilder$$Type): $MultiBufferSource$BufferSource
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$TransparencyStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$LayeringStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$LayeringStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "packages/net/minecraft/client/renderer/debug/$BeeDebugRenderer$BeeInfo" {
import { $Path, $Path$$Type } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $List } from "packages/java/util/$List"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $Position, $Position$$Type } from "packages/net/minecraft/core/$Position"

export class $BeeDebugRenderer$BeeInfo {
readonly "blacklistedHives": $Set<$BlockPos>
readonly "flowerPos": $BlockPos
readonly "goals": $List<string>
readonly "hivePos": $BlockPos
readonly "id": integer
readonly "path": $Path
readonly "pos": $Position
readonly "travelTicks": integer
readonly "uuid": $UUID

constructor(uUID0: $UUID$$Type, int1: integer, position2: $Position$$Type, path3: $Path$$Type, blockPos4: $BlockPos$$Type, blockPos5: $BlockPos$$Type, int6: integer)

public "getName"(): string
public "getUuid"(): $UUID
public "hasFlower"(): boolean
public "hasHive"(blockPos0: $BlockPos$$Type): boolean
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemModelGenerator" {
import { $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $BlockModel, $BlockModel$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $BlockElement } from "packages/net/minecraft/client/renderer/block/model/$BlockElement"
import { $List } from "packages/java/util/$List"
import { $SpriteContents$$Type } from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ItemModelGenerator {
static readonly "LAYERS": $List<string>

constructor()

public "generateBlockModel"(function0: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, blockModel1: $BlockModel$$Type): $BlockModel
public "processFrames"(int0: integer, string1: string, spriteContents2: $SpriteContents$$Type): $List<$BlockElement>
}
}

declare module "packages/net/minecraft/client/renderer/debug/$StructureRenderer" {
import { $BoundingBox$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List$$Type } from "packages/java/util/$List"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "addBoundingBox"(boundingBox0: $BoundingBox$$Type, list1: $List$$Type<$BoundingBox$$Type>, list2: $List$$Type<boolean>, dimensionType3: $DimensionType$$Type): void
public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
}
}

declare module "packages/net/minecraft/client/renderer/$PostChain" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List } from "packages/java/util/$List"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $PostPass } from "packages/net/minecraft/client/renderer/$PostPass"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $RenderTarget, $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $PostChain implements $AutoCloseable {
readonly "passes": $List<$PostPass>

constructor(textureManager0: $TextureManager$$Type, resourceManager1: $ResourceManager$$Type, renderTarget2: $RenderTarget$$Type, resourceLocation3: $ResourceLocation$$Type)

public "addPass"(string0: string, renderTarget1: $RenderTarget$$Type, renderTarget2: $RenderTarget$$Type): $PostPass
public "addTempTarget"(string0: string, int1: integer, int2: integer): void
public "close"(): void
public "getName"(): string
public "getTempTarget"(string0: string): $RenderTarget
public "load"(textureManager0: $TextureManager$$Type, resourceLocation1: $ResourceLocation$$Type): void
public "process"(float0: float): void
public "resize"(int0: integer, int1: integer): void
get "name"(): string
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$BlockElementFace" {
import { $BlockFaceUV, $BlockFaceUV$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockFaceUV"
import { $ForgeFaceData, $ForgeFaceData$$Type } from "packages/net/minecraftforge/client/model/$ForgeFaceData"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $BlockElementFace {
static readonly "NO_TINT": integer
readonly "cullForDirection": $Direction
readonly "texture": string
readonly "tintIndex": integer
readonly "uv": $BlockFaceUV

constructor(direction0: $Direction$$Type, int1: integer, string2: string, blockFaceUV3: $BlockFaceUV$$Type)
constructor(direction0: $Direction$$Type, int1: integer, string2: string, blockFaceUV3: $BlockFaceUV$$Type, forgeFaceData4: $ForgeFaceData$$Type)

public "getFaceData"(): $ForgeFaceData
get "faceData"(): $ForgeFaceData
}
}

declare module "packages/net/minecraft/client/renderer/block/model/$ItemTransform" {
import { $Vector3f, $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export class $ItemTransform {
static readonly "NO_TRANSFORM": $ItemTransform
readonly "rightRotation": $Vector3f
readonly "rotation": $Vector3f
readonly "scale": $Vector3f
readonly "translation": $Vector3f

constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type)
constructor(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type, vector3f2: $Vector3f$$Type, vector3f3: $Vector3f$$Type)

public "apply"(boolean0: boolean, poseStack1: $PoseStack$$Type): void
}
}

declare module "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider$Context" {
import { $EntityRenderDispatcher, $EntityRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderDispatcher"
import { $ItemRenderer, $ItemRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $Font, $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $BlockRenderDispatcher, $BlockRenderDispatcher$$Type } from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import { $ModelLayerLocation$$Type } from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import { $EntityModelSet, $EntityModelSet$$Type } from "packages/net/minecraft/client/model/geom/$EntityModelSet"
import { $ItemInHandRenderer, $ItemInHandRenderer$$Type } from "packages/net/minecraft/client/renderer/$ItemInHandRenderer"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $ResourceManager, $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ModelManager } from "packages/net/minecraft/client/resources/model/$ModelManager"

export class $EntityRendererProvider$Context {
constructor(entityRenderDispatcher0: $EntityRenderDispatcher$$Type, itemRenderer1: $ItemRenderer$$Type, blockRenderDispatcher2: $BlockRenderDispatcher$$Type, itemInHandRenderer3: $ItemInHandRenderer$$Type, resourceManager4: $ResourceManager$$Type, entityModelSet5: $EntityModelSet$$Type, font6: $Font$$Type)

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getFont"(): $Font
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getItemRenderer"(): $ItemRenderer
public "getModelManager"(): $ModelManager
public "getModelSet"(): $EntityModelSet
public "getResourceManager"(): $ResourceManager
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "font"(): $Font
get "itemInHandRenderer"(): $ItemInHandRenderer
get "itemRenderer"(): $ItemRenderer
get "modelManager"(): $ModelManager
get "modelSet"(): $EntityModelSet
get "resourceManager"(): $ResourceManager
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$TexturingStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$TexturingStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

declare module "packages/net/minecraft/client/renderer/texture/$SpriteTicker" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"

export interface $SpriteTicker extends $AutoCloseable {
"close"(): void
"tickAndUpload"(int0: integer, int1: integer): void
}

export namespace $SpriteTicker {
const probejs$$marker: never
}
export abstract class $SpriteTicker$$Static implements $SpriteTicker {
}
}

declare module "packages/net/minecraft/client/renderer/$Rect2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect2i {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)

public "contains"(int0: integer, int1: integer): boolean
public "getHeight"(): integer
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
public "intersect"(rect2i0: $Rect2i$$Type): $Rect2i
public "setHeight"(int0: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "setWidth"(int0: integer): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
get "height"(): integer
get "width"(): integer
get "x"(): integer
get "y"(): integer
set "height"(value: integer)
set "width"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
}
}

declare module "packages/net/minecraft/client/renderer/$LightTexture" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $LightTextureAccessor } from "packages/net/irisshaders/iris/mixin/$LightTextureAccessor"
import { $GameRenderer$$Type } from "packages/net/minecraft/client/renderer/$GameRenderer"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $DimensionType$$Type } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $DynamicTexture } from "packages/net/minecraft/client/renderer/texture/$DynamicTexture"

export class $LightTexture implements $AutoCloseable, $LightTextureAccessor {
static readonly "FULL_BLOCK": integer
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer
readonly "lightTexture": $DynamicTexture
"updateLightTexture": boolean

constructor(gameRenderer0: $GameRenderer$$Type, minecraft1: $Minecraft$$Type)

public static "block"(int0: integer): integer
public "close"(): void
public static "getBrightness"(dimensionType0: $DimensionType$$Type, int1: integer): float
public "handler$ebd000$inject$init"(gameRenderer0: $GameRenderer$$Type, minecraft1: $Minecraft$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$ecl000$updateLightTexture"(partialTicks: float, ci: $CallbackInfo$$Type): void
public static "pack"(int0: integer, int1: integer): integer
public static "sky"(int0: integer): integer
public "tick"(): void
public "turnOffLightLayer"(): void
public "turnOnLightLayer"(): void
public "updateLightTexture"(float0: float): void
get "blockLightRedFlicker"(): float
set "blockLightRedFlicker"(value: float)
}
}

declare module "packages/net/minecraft/client/renderer/texture/$DynamicTexture" {
import { $Dumpable } from "packages/net/minecraft/client/renderer/texture/$Dumpable"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $Darkness$DynamicTextureHook } from "packages/me/srrapero720/chloride/impl/$Darkness$DynamicTextureHook"
import { $NativeImage, $NativeImage$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractTexture } from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $Darkness$DynamicTextureHook {
constructor(nativeImage0: $NativeImage$$Type)
constructor(int0: integer, int1: integer, boolean2: boolean)

public "chloride$enableDarkness"(): void
public "dumpContents"(pResourceLocation: $ResourceLocation$$Type, pPath: $Path$$Type): void
public "getPixels"(): $NativeImage
public "setPixels"(nativeImage0: $NativeImage$$Type): void
public "upload"(): void
public "wrapOperation$efe000$forceMipMap"(a: integer, b: integer, c: integer, op: $Operation$$Type<any>): void
public "wrapOperation$efe000$forceMipMap"(instance: $NativeImage$$Type, a: integer, b: integer, c: integer, autoClose: boolean, op: $Operation$$Type<any>): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
}
}

declare module "packages/net/minecraft/client/renderer/debug/$GameEventListenerRenderer" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $GameEvent$$Type } from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $PositionSource$$Type } from "packages/net/minecraft/world/level/gameevent/$PositionSource"
import { $DebugRenderer$SimpleDebugRenderer } from "packages/net/minecraft/client/renderer/debug/$DebugRenderer$SimpleDebugRenderer"

export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer {
constructor(minecraft0: $Minecraft$$Type)

public "clear"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, double2: double, double3: double, double4: double): void
public "trackGameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type): void
public "trackListener"(positionSource0: $PositionSource$$Type, int1: integer): void
}
}

declare module "packages/net/minecraft/client/renderer/$RenderStateShard$ColorLogicStateShard" {
import { $RenderStateShard } from "packages/net/minecraft/client/renderer/$RenderStateShard"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $RenderStateShard$ColorLogicStateShard extends $RenderStateShard {
constructor(string0: string, runnable1: $Runnable$$Type, runnable2: $Runnable$$Type)

}
}

