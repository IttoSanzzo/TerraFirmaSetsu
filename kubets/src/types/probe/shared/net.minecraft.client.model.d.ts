declare module "packages/net/minecraft/client/model/geom/$ModelPart" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $ModelPartData } from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $IModelPartExtension } from "packages/net/mehvahdjukaar/supplementaries/client/$IModelPartExtension"
import { $ModelPartInjector } from "packages/dev/tr7zw/skinlayers/accessor/$ModelPartInjector"
import { $ModelPart$Cube, $ModelPart$Cube$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import { $OffsetProvider, $OffsetProvider$$Type } from "packages/dev/tr7zw/skinlayers/api/$OffsetProvider"
import { $IUpperPartHelper } from "packages/dev/kosmx/playerAnim/impl/$IUpperPartHelper"
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ModelPartAccessor } from "packages/dev/engine_room/flywheel/impl/mixin/$ModelPartAccessor"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $ModelPartAccessor as $ModelPartAccessor$0 } from "packages/net/dries007/tfc/mixin/client/accessor/$ModelPartAccessor"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $PartPose, $PartPose$$Type } from "packages/net/minecraft/client/model/geom/$PartPose"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $ModelCuboid } from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"
import { $ModelPart$Visitor$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart$Visitor"

export class $ModelPart implements $ModelPartInjector, $IUpperPartHelper, $ModelPartData, $ModelPartAccessor$0, $ModelPartAccessor, $IModelPartExtension {
static readonly "DEFAULT_SCALE": float

constructor(list0: $List$$Type<$ModelPart$Cube$$Type>, map1: $Map$$Type<string, $ModelPart$$Type>)

public "copyFrom"(modelPart0: $ModelPart$$Type): void
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "getAllParts"(): $Stream<$ModelPart>
public "getChild"(string0: string): $ModelPart
public "getChildren"(): $ModelPart[]
public "getCuboids"(): $ModelCuboid[]
public "getInitialPose"(): $PartPose
public "getInjectedMesh"(): $Mesh
public "getOffsetProvider"(): $OffsetProvider
public "getRandomCube"(randomSource0: $RandomSource$$Type): $ModelPart$Cube
public "handler$cok000$onRender"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float, callbackInfo8: $CallbackInfo$$Type): void
public "handler$ein000$render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float, ci: $CallbackInfo$$Type): void
public "hasChild"(string0: string): boolean
public "isEmpty"(): boolean
public "isHidden"(): boolean
public "isUpperPart"(): boolean
public "isVisible"(): boolean
public "loadPose"(partPose0: $PartPose$$Type): void
public "localvar$cha000$render"(float0: float): float
public "offsetPos"(vector3f0: $Vector3f$$Type): void
public "offsetRotation"(vector3f0: $Vector3f$$Type): void
public "offsetScale"(vector3f0: $Vector3f$$Type): void
public "prepareTranslateAndRotate"(poseStack: $PoseStack$$Type): void
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "resetPose"(): void
public "setInitialPose"(partPose0: $PartPose$$Type): void
public "setInjectedMesh"(mesh: $Mesh$$Type, offsetProvider: $OffsetProvider$$Type): void
public "setPos"(float0: float, float1: float, float2: float): void
public "setRotation"(float0: float, float1: float, float2: float): void
public "setUpperPart"(bl: boolean): void
public "storePose"(): $PartPose
public "supp$getTextHeight"(): integer
public "supp$getTextWidth"(): integer
public "supp$setDimensions"(texWidth: integer, texHeight: integer): void
public "translateAndRotate"(matrixStack: $PoseStack$$Type): void
public "visit"(poseStack0: $PoseStack$$Type, visitor1: $ModelPart$Visitor$$Type): void
get "children"(): $Map<string, $ModelPart>
set "children"(value: $Map$$Type<string, $ModelPart$$Type>)
get "cubes"(): $List<$ModelPart$Cube>
set "cubes"(value: $List$$Type<$ModelPart$Cube$$Type>)
get "skipDraw"(): boolean
set "skipDraw"(value: boolean)
get "visible"(): boolean
set "visible"(value: boolean)
get "x"(): float
set "x"(value: float)
get "xRot"(): float
set "xRot"(value: float)
get "xScale"(): float
set "xScale"(value: float)
get "y"(): float
set "y"(value: float)
get "yRot"(): float
set "yRot"(value: float)
get "yScale"(): float
set "yScale"(value: float)
get "z"(): float
set "z"(value: float)
get "zRot"(): float
set "zRot"(value: float)
get "zScale"(): float
set "zScale"(value: float)
get "allParts"(): $Stream<$ModelPart>
get "cuboids"(): $ModelCuboid[]
get "initialPose"(): $PartPose
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
get "empty"(): boolean
get "hidden"(): boolean
get "upperPart"(): boolean
set "initialPose"(value: $PartPose$$Type)
set "upperPart"(value: boolean)
}
}

declare module "packages/net/minecraft/client/model/$AgeableListModel" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $AgeableListModelAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$AgeableListModelAccessor"
import { $AgeableListAccessor } from "packages/net/mehvahdjukaar/supplementaries/mixins/$AgeableListAccessor"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListAccessor, $AgeableListModelAccessor {
readonly "babyBodyScale": float
readonly "babyHeadScale": float
readonly "babyYHeadOffset": float
readonly "babyZHeadOffset": float
readonly "bodyYOffset": float
readonly "scaleHead": boolean

public "handler$coc001$onRender"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float, callbackInfo8: $CallbackInfo$$Type): void
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeListBuilder" {
import { $CubeDefinition } from "packages/net/minecraft/client/model/geom/builders/$CubeDefinition"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $List } from "packages/java/util/$List"
import { $CubeDeformation$$Type } from "packages/net/minecraft/client/model/geom/builders/$CubeDeformation"

export class $CubeListBuilder {
constructor()

public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, int4: integer, int5: integer, int6: integer, cubeDeformation7: $CubeDeformation$$Type, int8: integer, int9: integer): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, cubeDeformation7: $CubeDeformation$$Type): $CubeListBuilder
public "addBox"(string0: string, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, set6: $Set$$Type<$Direction$$Type>): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, cubeDeformation6: $CubeDeformation$$Type): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $CubeListBuilder
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, cubeDeformation6: $CubeDeformation$$Type, float7: float, float8: float): $CubeListBuilder
public static "create"(): $CubeListBuilder
public "getCubes"(): $List<$CubeDefinition>
public "mirror"(): $CubeListBuilder
public "mirror"(boolean0: boolean): $CubeListBuilder
public "texOffs"(int0: integer, int1: integer): $CubeListBuilder
get "cubes"(): $List<$CubeDefinition>
}
}

declare module "packages/net/minecraft/client/model/$EntityModel" {
import { $Model } from "packages/net/minecraft/client/model/$Model"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityModel<T extends $Entity> extends $Model {
public "copyPropertiesTo"(entityModel0: $EntityModel$$Type<T>): void
public "prepareMobModel"(t0: T, float1: float, float2: float, float3: float): void
public "setupAnim"(t0: T, float1: float, float2: float, float3: float, float4: float, float5: float): void
get "attackTime"(): float
set "attackTime"(value: float)
get "riding"(): boolean
set "riding"(value: boolean)
get "young"(): boolean
set "young"(value: boolean)
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelPart$Visitor" {
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $ModelPart$Cube$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"

export interface $ModelPart$Visitor {
"visit"(pose0: $PoseStack$Pose$$Type, string1: string, int2: integer, cube3: $ModelPart$Cube$$Type): void
}

export namespace $ModelPart$Visitor {
const probejs$$marker: never
}
export abstract class $ModelPart$Visitor$$Static implements $ModelPart$Visitor {
}
}

declare module "packages/net/minecraft/client/model/geom/$EntityModelSet" {
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ModelLayerLocation$$Type } from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $ResourceManagerReloadListener } from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $EntityModelSet implements $ResourceManagerReloadListener {
constructor()

public "bakeLayer"(modelLayerLocation0: $ModelLayerLocation$$Type): $ModelPart
public "getName"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "packages/net/minecraft/client/model/$Model" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export class $Model {
constructor(function0: $Function$$Type<$ResourceLocation$$Type, $RenderType>)

public "renderToBuffer"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "renderType"(resourceLocation0: $ResourceLocation$$Type): $RenderType
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeDefinition" {
import { $ModelPart$Cube } from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"

export class $CubeDefinition {
public "bake"(int0: integer, int1: integer): $ModelPart$Cube
}
}

declare module "packages/net/minecraft/client/model/$HeadedModel" {
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $HeadedModel {
"getHead"(): $ModelPart
get "head"(): $ModelPart
}

export namespace $HeadedModel {
const probejs$$marker: never
}
export abstract class $HeadedModel$$Static implements $HeadedModel {
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelLayerLocation" {
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelLayerLocation {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "getLayer"(): string
public "getModel"(): $ResourceLocation
get "layer"(): string
get "model"(): $ResourceLocation
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$MeshDefinition" {
import { $PartDefinition } from "packages/net/minecraft/client/model/geom/builders/$PartDefinition"

export class $MeshDefinition {
constructor()

public "getRoot"(): $PartDefinition
get "root"(): $PartDefinition
}
}

declare module "packages/net/minecraft/client/model/geom/$PartPose" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PartPose {
static readonly "ZERO": $PartPose
readonly "x": float
readonly "xRot": float
readonly "y": float
readonly "yRot": float
readonly "z": float
readonly "zRot": float

public static "offset"(float0: float, float1: float, float2: float): $PartPose
public static "offsetAndRotation"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $PartPose
public static "rotation"(float0: float, float1: float, float2: float): $PartPose
}
}

declare module "packages/net/minecraft/client/model/$ArmedModel" {
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $ArmedModel {
"translateToHand"(humanoidArm0: $HumanoidArm$$Type, poseStack1: $PoseStack$$Type): void
}

export namespace $ArmedModel {
const probejs$$marker: never
}
export abstract class $ArmedModel$$Static implements $ArmedModel {
}
}

declare module "packages/net/minecraft/client/model/$TridentModel" {
import { $Model } from "packages/net/minecraft/client/model/$Model"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $LayerDefinition } from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"

export class $TridentModel extends $Model {
static readonly "TEXTURE": $ResourceLocation

constructor(modelPart0: $ModelPart$$Type)

public static "createLayer"(): $LayerDefinition
}
}

declare module "packages/net/minecraft/client/model/$HumanoidModel$ArmPose" {
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $HumanoidModel$$Type } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $IExtensibleEnum } from "packages/net/minecraftforge/common/$IExtensibleEnum"
import { $IArmPoseTransformer$$Type } from "packages/net/minecraftforge/client/$IArmPoseTransformer"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
static readonly "BLOCK": $HumanoidModel$ArmPose
static readonly "BOW_AND_ARROW": $HumanoidModel$ArmPose
static readonly "BRUSH": $HumanoidModel$ArmPose
static readonly "CROSSBOW_CHARGE": $HumanoidModel$ArmPose
static readonly "CROSSBOW_HOLD": $HumanoidModel$ArmPose
static readonly "EMPTY": $HumanoidModel$ArmPose
static readonly "ITEM": $HumanoidModel$ArmPose
static readonly "SPYGLASS": $HumanoidModel$ArmPose
static readonly "THROW_SPEAR": $HumanoidModel$ArmPose
static readonly "TOOT_HORN": $HumanoidModel$ArmPose

public "applyTransform"<T extends $LivingEntity>(humanoidModel0: $HumanoidModel$$Type<T>, t1: T, humanoidArm2: $HumanoidArm$$Type): void
public static "create"(string0: string, boolean1: boolean, iArmPoseTransformer2: $IArmPoseTransformer$$Type): $HumanoidModel$ArmPose
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
/** @deprecated */
public "init"(): void
public "isTwoHanded"(): boolean
public static "valueOf"(string0: string): $HumanoidModel$ArmPose
public static "values"(): $HumanoidModel$ArmPose[]
get "twoHanded"(): boolean
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$CubeDeformation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CubeDeformation {
static readonly "NONE": $CubeDeformation

constructor(float0: float, float1: float, float2: float)
constructor(float0: float)

public "extend"(float0: float, float1: float, float2: float): $CubeDeformation
public "extend"(float0: float): $CubeDeformation
}
}

declare module "packages/net/minecraft/client/model/$SkullModelBase" {
import { $Model } from "packages/net/minecraft/client/model/$Model"

export class $SkullModelBase extends $Model {
constructor()

public "setupAnim"(float0: float, float1: float, float2: float): void
}
}

declare module "packages/net/minecraft/client/model/geom/$ModelPart$Cube" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Set$$Type } from "packages/java/util/$Set"
import { $ModelCuboidAccessor } from "packages/me/jellysquid/mods/sodium/client/model/$ModelCuboidAccessor"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $ModelCuboid } from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export class $ModelPart$Cube implements $ModelCuboidAccessor {
readonly "maxX": float
readonly "maxY": float
readonly "maxZ": float
readonly "minY": float
readonly "minZ": float

constructor(int0: integer, int1: integer, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, boolean11: boolean, float12: float, float13: float, set14: $Set$$Type<$Direction$$Type>)

public "compile"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "embeddium$getSimpleCuboid"(): $ModelCuboid
public "localvar$chb000$compile"(float0: float): float
public "sodium$copy"(): $ModelCuboid
get "minX"(): float
set "minX"(value: float)
}
}

declare module "packages/net/minecraft/client/model/$HumanoidModel" {
import { $HumanoidArm$$Type } from "packages/net/minecraft/world/entity/$HumanoidArm"
import { $HeadedModel } from "packages/net/minecraft/client/model/$HeadedModel"
import { $HumanoidModel$ArmPose, $HumanoidModel$ArmPose$$Type } from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import { $AgeableListModel } from "packages/net/minecraft/client/model/$AgeableListModel"
import { $ModelPart, $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $MeshDefinition } from "packages/net/minecraft/client/model/geom/builders/$MeshDefinition"
import { $CubeDeformation$$Type } from "packages/net/minecraft/client/model/geom/builders/$CubeDeformation"
import { $IMutableModel } from "packages/dev/kosmx/playerAnim/impl/$IMutableModel"
import { $TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type } from "packages/net/joefoxe/hexerei/client/renderer/$TwoHandedItemAnimation"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"
import { $SetableSupplier, $SetableSupplier$$Type } from "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ArmedModel } from "packages/net/minecraft/client/model/$ArmedModel"

export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel, $IMutableModel {
static readonly "HAT_OVERLAY_SCALE": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "OVERLAY_SCALE": float
static readonly "TOOT_HORN_XROT_BASE": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "body": $ModelPart
readonly "hat": $ModelPart
readonly "head": $ModelPart
readonly "leftArm": $ModelPart
readonly "leftLeg": $ModelPart
readonly "rightArm": $ModelPart
readonly "rightLeg": $ModelPart

constructor(modelPart0: $ModelPart$$Type)
constructor(modelPart0: $ModelPart$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>)

public "copyPropertiesTo"(humanoidModel0: $HumanoidModel$$Type<T>): void
public static "createMesh"(cubeDeformation0: $CubeDeformation$$Type, float1: float): $MeshDefinition
public "getEmoteSupplier"(): $SetableSupplier<any>
public "getHead"(): $ModelPart
public "handler$cph000$immersiveMelodies$injectSetupAnim"(entity: $LivingEntity$$Type, limbAngle: float, limbDistance: float, animationProgress: float, headYaw: float, headPitch: float, ci: $CallbackInfo$$Type): void
public "handler$dcm000$poseLeftArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$dcm000$poseRightArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$dcm000$setupAnim"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, callbackInfo6: $CallbackInfo$$Type): void
public "handler$ddd001$poseLeftArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ddd001$poseRightArm"(livingEntity0: $LivingEntity$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "handler$ejc000$rotationAngleCallback"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, callbackInfo6: $CallbackInfo$$Type): void
public "handler$eln002$poseLeftArm"(entity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "handler$eln002$poseRightArm"(entity: $LivingEntity$$Type, ci: $CallbackInfo$$Type): void
public "handler$eln002$setupAnim"(entity: $LivingEntity$$Type, limbSwing: float, limbSwingAmount: float, ageInTicks: float, netHeadYaw: float, headPitch: float, ci: $CallbackInfo$$Type): void
public "prepareMobModel"(t0: T, float1: float, float2: float, float3: float): void
public "setAllVisible"(boolean0: boolean): void
public "setEmoteSupplier"(emoteSupplier: $SetableSupplier$$Type<any>): void
public "setupAnim"(t0: T, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "translateToHand"(humanoidArm0: $HumanoidArm$$Type, poseStack1: $PoseStack$$Type): void
get "crouching"(): boolean
set "crouching"(value: boolean)
get "leftArmPose"(): $HumanoidModel$ArmPose
set "leftArmPose"(value: $HumanoidModel$ArmPose$$Type)
get "rightArmPose"(): $HumanoidModel$ArmPose
set "rightArmPose"(value: $HumanoidModel$ArmPose$$Type)
get "swimAmount"(): float
set "swimAmount"(value: float)
get "twoHanded"(): $TwoHandedItemAnimation
set "twoHanded"(value: $TwoHandedItemAnimation$$Type)
get "emoteSupplier"(): $SetableSupplier<any>
set "allVisible"(value: boolean)
set "emoteSupplier"(value: $SetableSupplier$$Type<any>)
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$LayerDefinition" {
import { $MaterialDefinition } from "packages/net/minecraft/client/model/geom/builders/$MaterialDefinition"
import { $MeshDefinition, $MeshDefinition$$Type } from "packages/net/minecraft/client/model/geom/builders/$MeshDefinition"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $LayerDefinition {
readonly "material": $MaterialDefinition
readonly "mesh": $MeshDefinition

public "bakeRoot"(): $ModelPart
public static "create"(meshDefinition0: $MeshDefinition$$Type, int1: integer, int2: integer): $LayerDefinition
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$PartDefinition" {
import { $CubeListBuilder$$Type } from "packages/net/minecraft/client/model/geom/builders/$CubeListBuilder"
import { $ModelPart } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $PartPose$$Type } from "packages/net/minecraft/client/model/geom/$PartPose"

export class $PartDefinition {
public "addOrReplaceChild"(string0: string, cubeListBuilder1: $CubeListBuilder$$Type, partPose2: $PartPose$$Type): $PartDefinition
public "bake"(int0: integer, int1: integer): $ModelPart
public "getChild"(string0: string): $PartDefinition
}
}

declare module "packages/net/minecraft/client/model/geom/builders/$MaterialDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MaterialDefinition {
constructor(int0: integer, int1: integer)

}
}

declare module "packages/net/minecraft/client/model/$PlayerModel" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $HumanoidModel } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $IPlayerModel } from "packages/dev/kosmx/playerAnim/impl/$IPlayerModel"
import { $ModelPart, $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $MeshDefinition } from "packages/net/minecraft/client/model/geom/builders/$MeshDefinition"
import { $CubeDeformation$$Type } from "packages/net/minecraft/client/model/geom/builders/$CubeDeformation"
import { $PlayerEntityModelAccessor } from "packages/dev/tr7zw/skinlayers/accessor/$PlayerEntityModelAccessor"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerEntityModelAccessor, $IPlayerModel {
readonly "cloak": $ModelPart
readonly "jacket": $ModelPart
readonly "leftPants": $ModelPart
readonly "leftSleeve": $ModelPart
readonly "rightPants": $ModelPart
readonly "rightSleeve": $ModelPart

constructor(modelPart0: $ModelPart$$Type, boolean1: boolean)

public static "createMesh"(cubeDeformation0: $CubeDeformation$$Type, boolean1: boolean): $MeshDefinition
public "getRandomModelPart"(randomSource0: $RandomSource$$Type): $ModelPart
public "handler$eid001$setupAnim"(livingEntity0: $LivingEntity$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, callbackInfo6: $CallbackInfo$$Type): void
public "hasThinArms"(): boolean
public "playerAnimator_prepForFirstPersonRender"(): void
public "renderCloak"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "renderEars"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "setIgnored"(ignored: boolean): void
set "ignored"(value: boolean)
}
}

