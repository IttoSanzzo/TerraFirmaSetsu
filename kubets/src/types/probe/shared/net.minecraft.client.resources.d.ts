declare module "packages/net/minecraft/client/resources/model/$ModelBakery$BakedCacheKey" {
import { $Record } from "packages/java/lang/$Record"
import { $Transformation, $Transformation$$Type } from "packages/com/mojang/math/$Transformation"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelBakery$BakedCacheKey extends $Record {
constructor(id: $ResourceLocation$$Type, transformation: $Transformation$$Type, isUvLocked: boolean)

public "id"(): $ResourceLocation
public "isUvLocked"(): boolean
public "transformation"(): $Transformation
get "uvLocked"(): boolean
}
}

declare module "packages/net/minecraft/client/resources/sounds/$Sound" {
import { $Weighted } from "packages/net/minecraft/client/sounds/$Weighted"
import { $Sound$Type, $Sound$Type$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound$Type"
import { $SampledFloat, $SampledFloat$$Type } from "packages/net/minecraft/util/valueproviders/$SampledFloat"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundEngine$$Type } from "packages/net/minecraft/client/sounds/$SoundEngine"
import { $FileToIdConverter } from "packages/net/minecraft/resources/$FileToIdConverter"

export class $Sound implements $Weighted<$Sound> {
static readonly "SOUND_LISTER": $FileToIdConverter

constructor(string0: string, sampledFloat1: $SampledFloat$$Type, sampledFloat2: $SampledFloat$$Type, int3: integer, type4: $Sound$Type$$Type, boolean5: boolean, boolean6: boolean, int7: integer)

public "getAttenuationDistance"(): integer
public "getLocation"(): $ResourceLocation
public "getPath"(): $ResourceLocation
public "getPitch"(): $SampledFloat
public "getType"(): $Sound$Type
public "getVolume"(): $SampledFloat
public "getWeight"(): integer
public "preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
public "shouldPreload"(): boolean
public "shouldStream"(): boolean
get "attenuationDistance"(): integer
get "location"(): $ResourceLocation
get "path"(): $ResourceLocation
get "pitch"(): $SampledFloat
get "type"(): $Sound$Type
get "volume"(): $SampledFloat
get "weight"(): integer
}
}

declare module "packages/net/minecraft/client/resources/sounds/$SoundInstance" {
import { $Sound, $Sound$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SoundManager$$Type } from "packages/net/minecraft/client/sounds/$SoundManager"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $SoundInstance$Attenuation } from "packages/net/minecraft/client/resources/sounds/$SoundInstance$Attenuation"
import { $SoundBufferLibrary$$Type } from "packages/net/minecraft/client/sounds/$SoundBufferLibrary"
import { $AudioStream } from "packages/net/minecraft/client/sounds/$AudioStream"
import { $WeighedSoundEvents } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundSource } from "packages/net/minecraft/sounds/$SoundSource"

export interface $SoundInstance {
"canPlaySound"(): boolean
"canStartSilent"(): boolean
"getAttenuation"(): $SoundInstance$Attenuation
"getDelay"(): integer
"getLocation"(): $ResourceLocation
"getPitch"(): float
"getSound"(): $Sound
"getSource"(): $SoundSource
"getStream"(soundBufferLibrary0: $SoundBufferLibrary$$Type, sound1: $Sound$$Type, boolean2: boolean): $CompletableFuture<$AudioStream>
"getVolume"(): float
"getX"(): double
"getY"(): double
"getZ"(): double
"isLooping"(): boolean
"isRelative"(): boolean
"resolve"(soundManager0: $SoundManager$$Type): $WeighedSoundEvents
get "attenuation"(): $SoundInstance$Attenuation
get "delay"(): integer
get "location"(): $ResourceLocation
get "pitch"(): float
get "sound"(): $Sound
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "looping"(): boolean
get "relative"(): boolean
}

export namespace $SoundInstance {
function createUnseededRandom(): $RandomSource
}
export abstract class $SoundInstance$$Static implements $SoundInstance {
static "createUnseededRandom"(): $RandomSource
}
}

declare module "packages/net/minecraft/client/resources/sounds/$SoundInstance$Attenuation" {
import { $Enum } from "packages/java/lang/$Enum"

export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
static readonly "LINEAR": $SoundInstance$Attenuation
static readonly "NONE": $SoundInstance$Attenuation

public static "valueOf"(string0: string): $SoundInstance$Attenuation
public static "values"(): $SoundInstance$Attenuation[]
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelBaker" {
import { $Material, $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $UnbakedModel } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $IForgeModelBaker } from "packages/net/minecraftforge/client/extensions/$IForgeModelBaker"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelBaker extends $IForgeModelBaker {
/** @deprecated */
"bake"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type): $BakedModel
"bake"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>): $BakedModel
"getModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"getModelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
get "modelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
}

export namespace $ModelBaker {
const probejs$$marker: never
}
export abstract class $ModelBaker$$Static implements $ModelBaker {
}
}

declare module "packages/net/minecraft/client/resources/$TextureAtlasHolder" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type)

public "close"(): void
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "packages/net/minecraft/client/resources/language/$LanguageInfo" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $LanguageInfo extends $Record {
static readonly "CODEC": $Codec<$LanguageInfo>

constructor(string0: string, string1: string, boolean2: boolean)

public "bidirectional"(): boolean
public "name"(): string
public "region"(): string
public "toComponent"(): $Component
}
}

declare module "packages/net/minecraft/client/resources/$SkinManager" {
import { $File$$Type } from "packages/java/io/$File"
import { $MinecraftProfileTexture$Type, $MinecraftProfileTexture$Type$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture$Type"
import { $SkinManager$SkinTextureCallback$$Type } from "packages/net/minecraft/client/resources/$SkinManager$SkinTextureCallback"
import { $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $MinecraftSessionService$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftSessionService"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $Map } from "packages/java/util/$Map"
import { $MinecraftProfileTexture, $MinecraftProfileTexture$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture"

export class $SkinManager {
static readonly "PROPERTY_TEXTURES": string

constructor(textureManager0: $TextureManager$$Type, file1: $File$$Type, minecraftSessionService2: $MinecraftSessionService$$Type)

public "getInsecureSkinInformation"(gameProfile0: $GameProfile$$Type): $Map<$MinecraftProfileTexture$Type, $MinecraftProfileTexture>
public "getInsecureSkinLocation"(gameProfile0: $GameProfile$$Type): $ResourceLocation
public "registerSkins"(gameProfile0: $GameProfile$$Type, skinTextureCallback1: $SkinManager$SkinTextureCallback$$Type, boolean2: boolean): void
public "registerTexture"(minecraftProfileTexture0: $MinecraftProfileTexture$$Type, type1: $MinecraftProfileTexture$Type$$Type): $ResourceLocation
}
}

declare module "packages/net/minecraft/client/resources/sounds/$Sound$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Sound$Type extends $Enum<$Sound$Type> {
static readonly "FILE": $Sound$Type
static readonly "SOUND_EVENT": $Sound$Type

public static "getByName"(string0: string): $Sound$Type
public static "valueOf"(string0: string): $Sound$Type
public static "values"(): $Sound$Type[]
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelState" {
import { $Transformation } from "packages/com/mojang/math/$Transformation"

export interface $ModelState {
"getRotation"(): $Transformation
"isUvLocked"(): boolean
get "rotation"(): $Transformation
get "uvLocked"(): boolean
}

export namespace $ModelState {
const probejs$$marker: never
}
export abstract class $ModelState$$Static implements $ModelState {
}
}

declare module "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSectionSerializer" {
import { $AnimationMetadataSection } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import { $MetadataSectionSerializer } from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"

export class $AnimationMetadataSectionSerializer implements $MetadataSectionSerializer<$AnimationMetadataSection> {
constructor()

public "getMetadataSectionName"(): string
get "metadataSectionName"(): string
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelBakery$LoadedJson" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Record } from "packages/java/lang/$Record"

export class $ModelBakery$LoadedJson extends $Record {
constructor(source: string, data: $JsonElement$$Type)

public "data"(): $JsonElement
public "source"(): string
}
}

declare module "packages/net/minecraft/client/resources/$SkinManager$SkinTextureCallback" {
import { $MinecraftProfileTexture$Type$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture$Type"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MinecraftProfileTexture$$Type } from "packages/com/mojang/authlib/minecraft/$MinecraftProfileTexture"

export interface $SkinManager$SkinTextureCallback {
"onSkinTextureAvailable"(type0: $MinecraftProfileTexture$Type$$Type, resourceLocation1: $ResourceLocation$$Type, minecraftProfileTexture2: $MinecraftProfileTexture$$Type): void
}

export namespace $SkinManager$SkinTextureCallback {
const probejs$$marker: never
}
export abstract class $SkinManager$SkinTextureCallback$$Static implements $SkinManager$SkinTextureCallback {
}
}

declare module "packages/net/minecraft/client/resources/model/$Material" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $Material {
static readonly "COMPARATOR": $Comparator<$Material>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type)

public "atlasLocation"(): $ResourceLocation
public "buffer"(multiBufferSource0: $MultiBufferSource$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>, boolean2: boolean): $VertexConsumer
public "buffer"(multiBufferSource0: $MultiBufferSource$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>): $VertexConsumer
public "renderType"(function0: $Function$$Type<$ResourceLocation$$Type, $RenderType>): $RenderType
public "sprite"(): $TextureAtlasSprite
public "texture"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/client/resources/metadata/animation/$AnimationFrame" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AnimationFrame {
static readonly "UNKNOWN_FRAME_TIME": integer

constructor(int0: integer)
constructor(int0: integer, int1: integer)

public "getIndex"(): integer
public "getTime"(int0: integer): integer
get "index"(): integer
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelResourceLocation" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelResourceLocation extends $ResourceLocation {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)
constructor(string0: string, string1: string, string2: string)

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getVariant"(): string
public static "vanilla"(string0: string, string1: string): $ModelResourceLocation
get "variant"(): string
}
}

declare module "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection" {
import { $AnimationMetadataSectionAccessor } from "packages/net/irisshaders/iris/mixin/texture/$AnimationMetadataSectionAccessor"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $AnimationMetadataSectionSerializer } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSectionSerializer"
import { $FrameSize } from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import { $AnimationMetadataSection$FrameOutput$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection$FrameOutput"
import { $AnimationFrame, $AnimationFrame$$Type } from "packages/net/minecraft/client/resources/metadata/animation/$AnimationFrame"

export class $AnimationMetadataSection implements $AnimationMetadataSectionAccessor {
static readonly "DEFAULT_FRAME_TIME": integer
static readonly "EMPTY": $AnimationMetadataSection
static readonly "SECTION_NAME": string
static readonly "SERIALIZER": $AnimationMetadataSectionSerializer
static readonly "UNKNOWN_SIZE": integer
readonly "frames": $List<$AnimationFrame>

constructor(list0: $List$$Type<$AnimationFrame$$Type>, int1: integer, int2: integer, int3: integer, boolean4: boolean)

public "calculateFrameSize"(int0: integer, int1: integer): $FrameSize
public "forEachFrame"(frameOutput0: $AnimationMetadataSection$FrameOutput$$Type): void
public "getDefaultFrameTime"(): integer
public "isInterpolatedFrames"(): boolean
get "frameHeight"(): integer
set "frameHeight"(value: integer)
get "frameWidth"(): integer
set "frameWidth"(value: integer)
get "defaultFrameTime"(): integer
get "interpolatedFrames"(): boolean
}
}

declare module "packages/net/minecraft/client/resources/model/$BakedModel" {
import { $ModelData, $ModelData$$Type } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $ItemTransforms } from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedModelMixin } from "packages/me/jellysquid/mods/sodium/mixin/core/model/$BakedModelMixin"
import { $EmbeddiumBakedModelExtension } from "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IForgeBakedModel } from "packages/net/minecraftforge/client/extensions/$IForgeBakedModel"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $ItemOverrides } from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import { $ItemDisplayContext$$Type } from "packages/net/minecraft/world/item/$ItemDisplayContext"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ChunkRenderTypeSet } from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BlockAndTintGetter$$Type } from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $BakedQuad } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $BakedModel extends $IForgeBakedModel, $BakedModelMixin, $EmbeddiumBakedModelExtension {
"applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
"getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
"getOverrides"(): $ItemOverrides
/** @deprecated */
"getParticleIcon"(): $TextureAtlasSprite
"getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
/** @deprecated */
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
"getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
"getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
"getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
/** @deprecated */
"getTransforms"(): $ItemTransforms
"isCustomRenderer"(): boolean
"isGui3d"(): boolean
"useAmbientOcclusion"(): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"usesBlockLight"(): boolean
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "customRenderer"(): boolean
get "gui3d"(): boolean
}

export namespace $BakedModel {
const probejs$$marker: never
}
export abstract class $BakedModel$$Static implements $BakedModel {
}
}

declare module "packages/net/minecraft/client/resources/$MobEffectTextureManager" {
import { $TextureAtlasHolder } from "packages/net/minecraft/client/resources/$TextureAtlasHolder"
import { $MobEffect$$Type } from "packages/net/minecraft/world/effect/$MobEffect"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $MobEffectTextureManager extends $TextureAtlasHolder {
constructor(textureManager0: $TextureManager$$Type)

public "get"(mobEffect0: $MobEffect$$Type): $TextureAtlasSprite
public "getName"(): string
get "name"(): string
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelBakery" {
import { $BakedModel, $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $UnbakedModel } from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import { $ModelBakery$BakedCacheKey, $ModelBakery$BakedCacheKey$$Type } from "packages/net/minecraft/client/resources/model/$ModelBakery$BakedCacheKey"
import { $FileToIdConverter } from "packages/net/minecraft/resources/$FileToIdConverter"
import { $Material, $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $BlockModel, $BlockModel$$Type } from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import { $ItemModelGenerator } from "packages/net/minecraft/client/renderer/block/model/$ItemModelGenerator"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $ModelBakeryAccessor } from "packages/fuzs/puzzleslib/mixin/client/accessor/$ModelBakeryAccessor"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $IExtendedModelBakery } from "packages/org/embeddedt/modernfix/duck/$IExtendedModelBakery"
import { $StateDefinition$$Type } from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import { $ModelBakery$LoadedJson$$Type } from "packages/net/minecraft/client/resources/model/$ModelBakery$LoadedJson"
import { $ModelBakeryForgeAccessor } from "packages/vazkii/botania/forge/mixin/client/$ModelBakeryForgeAccessor"
import { $ModelResourceLocation, $ModelResourceLocation$$Type } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import { $Object2IntMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import { $CTMModelBakeryAccessor } from "packages/org/embeddedt/modernfix/forge/mixin/perf/dynamic_resources/ctm/$CTMModelBakeryAccessor"

export class $ModelBakery implements $CTMModelBakeryAccessor, $ModelBakeryForgeAccessor, $ModelBakeryAccessor, $IExtendedModelBakery {
static readonly "BANNER_BASE": $Material
static readonly "BLOCKSTATE_LISTER": $FileToIdConverter
static readonly "BLOCK_ENTITY_MARKER": $BlockModel
static readonly "BREAKING_LOCATIONS": $List<$ResourceLocation>
static readonly "DESTROY_STAGES": $List<$ResourceLocation>
static readonly "DESTROY_STAGE_COUNT": integer
static readonly "DESTROY_TYPES": $List<$RenderType>
static readonly "FIRE_0": $Material
static readonly "FIRE_1": $Material
static readonly "GENERATION_MARKER": $BlockModel
static readonly "ITEM_MODEL_GENERATOR": $ItemModelGenerator
static readonly "LAVA_FLOW": $Material
static readonly "MISSING_MODEL_LOCATION": $ModelResourceLocation
static readonly "MISSING_MODEL_MESH": string
static readonly "MODEL_LISTER": $FileToIdConverter
static readonly "NO_PATTERN_SHIELD": $Material
static readonly "SHIELD_BASE": $Material
static readonly "WATER_FLOW": $Material
static readonly "WATER_OVERLAY": $Material
readonly "topLevelModels": $Map<$ResourceLocation, $UnbakedModel>

constructor(blockColors0: $BlockColors$$Type, profilerFiller1: $ProfilerFiller$$Type, map2: $Map$$Type<$ResourceLocation$$Type, $BlockModel$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $List$$Type<$ModelBakery$LoadedJson$$Type>>)

public "bakeDefault"(modelLocation: $ResourceLocation$$Type, state: $ModelState$$Type): $BakedModel
public "bakeModels"(biFunction0: $BiFunction$$Type<$ResourceLocation$$Type, $Material$$Type, $TextureAtlasSprite>): void
public "getBakedMissingModel"(): $BakedModel
public "getBakedTopLevelModels"(): $Map<$ResourceLocation, $BakedModel>
public "getBlockStatesForMRL"(stateDefinition: $StateDefinition$$Type<any, any>, location: $ModelResourceLocation$$Type): $ImmutableList<any>
public "getModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
public "getModelGroups"(): $Object2IntMap<$BlockState>
public "handler$zmi000$getOrLoadModelDynamic"(modelLocation: $ResourceLocation$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "loadTopLevel"(modelResourceLocation0: $ModelResourceLocation$$Type): void
public "mfix$clearModels"(): void
public "mfix$getUnbakedMissingModel"(): $UnbakedModel
public "setBakedMissingModel"(m: $BakedModel$$Type): void
get "bakedCache"(): $Map<$ModelBakery$BakedCacheKey, $BakedModel>
set "bakedCache"(value: $Map$$Type<$ModelBakery$BakedCacheKey$$Type, $BakedModel$$Type>)
get "bakedMissingModel"(): $BakedModel
get "bakedTopLevelModels"(): $Map<$ResourceLocation, $BakedModel>
get "modelGroups"(): $Object2IntMap<$BlockState>
set "bakedMissingModel"(value: $BakedModel$$Type)
}
}

declare module "packages/net/minecraft/client/resources/model/$UnbakedModel" {
import { $Material$$Type } from "packages/net/minecraft/client/resources/model/$Material"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ModelBaker$$Type } from "packages/net/minecraft/client/resources/model/$ModelBaker"
import { $ModelState$$Type } from "packages/net/minecraft/client/resources/model/$ModelState"
import { $Collection } from "packages/java/util/$Collection"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $UnbakedModel {
"bake"(modelBaker0: $ModelBaker$$Type, function1: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState2: $ModelState$$Type, resourceLocation3: $ResourceLocation$$Type): $BakedModel
"getDependencies"(): $Collection<$ResourceLocation>
"resolveParents"(function0: $Function$$Type<$ResourceLocation$$Type, $UnbakedModel>): void
get "dependencies"(): $Collection<$ResourceLocation>
}

export namespace $UnbakedModel {
const probejs$$marker: never
}
export abstract class $UnbakedModel$$Static implements $UnbakedModel {
}
}

declare module "packages/net/minecraft/client/resources/sounds/$TickableSoundInstance" {
import { $Sound, $Sound$$Type } from "packages/net/minecraft/client/resources/sounds/$Sound"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $SoundInstance } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $SoundManager$$Type } from "packages/net/minecraft/client/sounds/$SoundManager"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $SoundInstance$Attenuation } from "packages/net/minecraft/client/resources/sounds/$SoundInstance$Attenuation"
import { $SoundBufferLibrary$$Type } from "packages/net/minecraft/client/sounds/$SoundBufferLibrary"
import { $AudioStream } from "packages/net/minecraft/client/sounds/$AudioStream"
import { $WeighedSoundEvents } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SoundSource } from "packages/net/minecraft/sounds/$SoundSource"

export interface $TickableSoundInstance extends $SoundInstance {
"canPlaySound"(): boolean
"canStartSilent"(): boolean
"getAttenuation"(): $SoundInstance$Attenuation
"getDelay"(): integer
"getLocation"(): $ResourceLocation
"getPitch"(): float
"getSound"(): $Sound
"getSource"(): $SoundSource
"getStream"(soundBufferLibrary0: $SoundBufferLibrary$$Type, sound1: $Sound$$Type, boolean2: boolean): $CompletableFuture<$AudioStream>
"getVolume"(): float
"getX"(): double
"getY"(): double
"getZ"(): double
"isLooping"(): boolean
"isRelative"(): boolean
"isStopped"(): boolean
"resolve"(soundManager0: $SoundManager$$Type): $WeighedSoundEvents
"tick"(): void
get "attenuation"(): $SoundInstance$Attenuation
get "delay"(): integer
get "location"(): $ResourceLocation
get "pitch"(): float
get "sound"(): $Sound
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "looping"(): boolean
get "relative"(): boolean
get "stopped"(): boolean
}

export namespace $TickableSoundInstance {
function createUnseededRandom(): $RandomSource
}
export abstract class $TickableSoundInstance$$Static implements $TickableSoundInstance {
static "createUnseededRandom"(): $RandomSource
}
}

declare module "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection$FrameOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSection$FrameOutput {
"accept"(int0: integer, int1: integer): void
}

export namespace $AnimationMetadataSection$FrameOutput {
const probejs$$marker: never
}
export abstract class $AnimationMetadataSection$FrameOutput$$Static implements $AnimationMetadataSection$FrameOutput {
}
}

declare module "packages/net/minecraft/client/resources/sounds/$AmbientSoundHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AmbientSoundHandler {
"tick"(): void
}

export namespace $AmbientSoundHandler {
const probejs$$marker: never
}
export abstract class $AmbientSoundHandler$$Static implements $AmbientSoundHandler {
}
}

declare module "packages/net/minecraft/client/resources/$DownloadedPackSource" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $File$$Type } from "packages/java/io/$File"
import { $RepositorySource } from "packages/net/minecraft/server/packs/repository/$RepositorySource"
import { $PackSource$$Type } from "packages/net/minecraft/server/packs/repository/$PackSource"
import { $Pack$$Type } from "packages/net/minecraft/server/packs/repository/$Pack"
import { $URL$$Type } from "packages/java/net/$URL"

export class $DownloadedPackSource implements $RepositorySource {
constructor(file0: $File$$Type)

public "clearServerPack"(): $CompletableFuture<void>
public "downloadAndSelectResourcePack"(uRL0: $URL$$Type, string1: string, boolean2: boolean): $CompletableFuture<any>
public "loadBundledResourcePack"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type): $CompletableFuture<void>
public "loadPacks"(consumer0: $Consumer$$Type<$Pack$$Type>): void
public "setServerPack"(file0: $File$$Type, packSource1: $PackSource$$Type): $CompletableFuture<void>
}
}

declare module "packages/net/minecraft/client/resources/model/$ModelManager" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $TextureAtlas } from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BakedModel } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ModelManagerAccessor } from "packages/vazkii/botania/mixin/client/$ModelManagerAccessor"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $BlockColors$$Type } from "packages/net/minecraft/client/color/block/$BlockColors"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $BlockModelShaper } from "packages/net/minecraft/client/renderer/block/$BlockModelShaper"
import { $ModelResourceLocation$$Type } from "packages/net/minecraft/client/resources/model/$ModelResourceLocation"
import { $ModelBakery } from "packages/net/minecraft/client/resources/model/$ModelBakery"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $AccessorModelManager } from "packages/org/violetmoon/quark/mixin/mixins/client/accessor/$AccessorModelManager"

export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $ModelManagerAccessor, $AccessorModelManager {
constructor(textureManager0: $TextureManager$$Type, blockColors1: $BlockColors$$Type, int2: integer)

public "close"(): void
public "getAtlas"(resourceLocation0: $ResourceLocation$$Type): $TextureAtlas
public "getBlockModelShaper"(): $BlockModelShaper
public "getMissingModel"(): $BakedModel
public "getModel"(modelResourceLocation0: $ModelResourceLocation$$Type): $BakedModel
public "getModel"(resourceLocation0: $ResourceLocation$$Type): $BakedModel
public "getModelBakery"(): $ModelBakery
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "requiresRender"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "updateMaxMipLevel"(int0: integer): void
get "blockModelShaper"(): $BlockModelShaper
get "missingModel"(): $BakedModel
get "modelBakery"(): $ModelBakery
get "name"(): string
}
}

declare module "packages/net/minecraft/client/resources/language/$LanguageManager" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $LanguageInfo } from "packages/net/minecraft/client/resources/language/$LanguageInfo"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $SortedMap } from "packages/java/util/$SortedMap"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $Locale } from "packages/java/util/$Locale"

export class $LanguageManager implements $ResourceManagerReloadListener {
static readonly "DEFAULT_LANGUAGE_CODE": string

constructor(string0: string)

public "getJavaLocale"(): $Locale
public "getLanguage"(string0: string): $LanguageInfo
public "getLanguages"(): $SortedMap<string, $LanguageInfo>
public "getName"(): string
public "getSelected"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "setSelected"(string0: string): void
get "javaLocale"(): $Locale
get "languages"(): $SortedMap<string, $LanguageInfo>
get "name"(): string
get "selected"(): string
set "selected"(value: string)
}
}

declare module "packages/net/minecraft/client/resources/metadata/animation/$FrameSize" {
import { $Record } from "packages/java/lang/$Record"

export class $FrameSize extends $Record {
constructor(int0: integer, int1: integer)

public "height"(): integer
public "width"(): integer
}
}

declare module "packages/net/minecraft/client/resources/$PaintingTextureManager" {
import { $PaintingVariant$$Type } from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import { $TextureAtlasHolder } from "packages/net/minecraft/client/resources/$TextureAtlasHolder"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $PaintingTextureManager extends $TextureAtlasHolder {
constructor(textureManager0: $TextureManager$$Type)

public "get"(paintingVariant0: $PaintingVariant$$Type): $TextureAtlasSprite
public "getBackSprite"(): $TextureAtlasSprite
public "getName"(): string
get "backSprite"(): $TextureAtlasSprite
get "name"(): string
}
}

declare module "packages/net/minecraft/client/resources/$SplashManager" {
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $User$$Type } from "packages/net/minecraft/client/$User"
import { $SplashRenderer } from "packages/net/minecraft/client/gui/components/$SplashRenderer"
import { $SimplePreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$SimplePreparableReloadListener"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
constructor(user0: $User$$Type)

public "getName"(): string
public "getSplash"(): $SplashRenderer
public "handler$bfe000$addSplashes"(list0: $List$$Type<any>, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, callbackInfo3: $CallbackInfo$$Type): void
get "name"(): string
get "splash"(): $SplashRenderer
}
}

