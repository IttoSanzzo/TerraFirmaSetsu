declare module "packages/dev/tr7zw/skinlayers/accessor/$SkullSettings" {
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $SkullData } from "packages/dev/tr7zw/skinlayers/api/$SkullData"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SkullSettings extends $SkullData {
"getHeadLayers"(): $Mesh
"getLastTexture"(): $ResourceLocation
"getMesh"(): $Mesh
"initialized"(): boolean
"setInitialized"(boolean0: boolean): void
"setLastTexture"(resourceLocation0: $ResourceLocation$$Type): void
"setupHeadLayers"(mesh0: $Mesh$$Type): void
get "headLayers"(): $Mesh
get "lastTexture"(): $ResourceLocation
get "mesh"(): $Mesh
set "lastTexture"(value: $ResourceLocation$$Type)
set "upHeadLayers"(value: $Mesh$$Type)
}

export namespace $SkullSettings {
const probejs$$marker: never
}
export abstract class $SkullSettings$$Static implements $SkullSettings {
}
}

declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$ScreenAccessor" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $List } from "packages/java/util/$List"

export interface $ScreenAccessor {
"libgui$getChildren"(): $List<$GuiEventListener>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "packages/dev/tr7zw/skinlayers/accessor/$PlayerSettings" {
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $PlayerData } from "packages/dev/tr7zw/skinlayers/api/$PlayerData"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PlayerSettings extends $PlayerData {
"clearMeshes"(): void
"getCurrentSkin"(): $ResourceLocation
"getHeadMesh"(): $Mesh
"getLeftArmMesh"(): $Mesh
"getLeftLegMesh"(): $Mesh
"getRightArmMesh"(): $Mesh
"getRightLegMesh"(): $Mesh
"getTorsoMesh"(): $Mesh
"hasThinArms"(): boolean
"setCurrentSkin"(resourceLocation0: $ResourceLocation$$Type): void
"setHeadMesh"(mesh0: $Mesh$$Type): void
"setLeftArmMesh"(mesh0: $Mesh$$Type): void
"setLeftLegMesh"(mesh0: $Mesh$$Type): void
"setRightArmMesh"(mesh0: $Mesh$$Type): void
"setRightLegMesh"(mesh0: $Mesh$$Type): void
"setThinArms"(boolean0: boolean): void
"setTorsoMesh"(mesh0: $Mesh$$Type): void
get "currentSkin"(): $ResourceLocation
get "headMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
get "torsoMesh"(): $Mesh
set "currentSkin"(value: $ResourceLocation$$Type)
set "headMesh"(value: $Mesh$$Type)
set "leftArmMesh"(value: $Mesh$$Type)
set "leftLegMesh"(value: $Mesh$$Type)
set "rightArmMesh"(value: $Mesh$$Type)
set "rightLegMesh"(value: $Mesh$$Type)
set "thinArms"(value: boolean)
set "torsoMesh"(value: $Mesh$$Type)
}

export namespace $PlayerSettings {
const probejs$$marker: never
}
export abstract class $PlayerSettings$$Static implements $PlayerSettings {
}
}

declare module "packages/dev/tr7zw/skinlayers/api/$SkullData" {
import { $Mesh } from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $SkullData {
"getMesh"(): $Mesh
get "mesh"(): $Mesh
}

export namespace $SkullData {
const probejs$$marker: never
}
export abstract class $SkullData$$Static implements $SkullData {
}
}

declare module "packages/dev/tr7zw/skinlayers/accessor/$PlayerEntityModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerEntityModelAccessor {
"hasThinArms"(): boolean
}

export namespace $PlayerEntityModelAccessor {
const probejs$$marker: never
}
export abstract class $PlayerEntityModelAccessor$$Static implements $PlayerEntityModelAccessor {
}
}

declare module "packages/dev/tr7zw/skinlayers/api/$OffsetProvider" {
import { $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $OffsetProvider {
"applyOffset"(poseStack0: $PoseStack$$Type, mesh1: $Mesh$$Type): void
}

export namespace $OffsetProvider {
const BODY: $OffsetProvider
const FIRSTPERSON_LEFT_ARM: $OffsetProvider
const FIRSTPERSON_LEFT_ARM_SLIM: $OffsetProvider
const FIRSTPERSON_RIGHT_ARM: $OffsetProvider
const FIRSTPERSON_RIGHT_ARM_SLIM: $OffsetProvider
const HEAD: $OffsetProvider
const LEFT_ARM: $OffsetProvider
const LEFT_ARM_SLIM: $OffsetProvider
const LEFT_LEG: $OffsetProvider
const RIGHT_ARM: $OffsetProvider
const RIGHT_ARM_SLIM: $OffsetProvider
const RIGHT_LEG: $OffsetProvider
const SKULL: $OffsetProvider
}
export abstract class $OffsetProvider$$Static implements $OffsetProvider {
static readonly "BODY": $OffsetProvider
static readonly "FIRSTPERSON_LEFT_ARM": $OffsetProvider
static readonly "FIRSTPERSON_LEFT_ARM_SLIM": $OffsetProvider
static readonly "FIRSTPERSON_RIGHT_ARM": $OffsetProvider
static readonly "FIRSTPERSON_RIGHT_ARM_SLIM": $OffsetProvider
static readonly "HEAD": $OffsetProvider
static readonly "LEFT_ARM": $OffsetProvider
static readonly "LEFT_ARM_SLIM": $OffsetProvider
static readonly "LEFT_LEG": $OffsetProvider
static readonly "RIGHT_ARM": $OffsetProvider
static readonly "RIGHT_ARM_SLIM": $OffsetProvider
static readonly "RIGHT_LEG": $OffsetProvider
static readonly "SKULL": $OffsetProvider

}
}

declare module "packages/dev/tr7zw/skinlayers/api/$Mesh" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $PartPose$$Type } from "packages/net/minecraft/client/model/geom/$PartPose"

export interface $Mesh {
"copyFrom"(modelPart0: $ModelPart$$Type): void
"isVisible"(): boolean
"loadPose"(partPose0: $PartPose$$Type): void
"render"(poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer): void
"render"(vanillaModel: $ModelPart$$Type, poseStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
"render"(modelPart0: $ModelPart$$Type, poseStack1: $PoseStack$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, int5: integer): void
"reset"(): void
"setPosition"(float0: float, float1: float, float2: float): void
"setRotation"(float0: float, float1: float, float2: float): void
"setVisible"(boolean0: boolean): void
get "visible"(): boolean
set "visible"(value: boolean)
}

export namespace $Mesh {
const EMPTY: $Mesh
}
export abstract class $Mesh$$Static implements $Mesh {
static readonly "EMPTY": $Mesh

}
}

declare module "packages/dev/tr7zw/skinlayers/accessor/$NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {
"skinlayers$isAllocated"(): boolean
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export abstract class $NativeImageAccessor$$Static implements $NativeImageAccessor {
}
}

declare module "packages/dev/tr7zw/skinlayers/accessor/$ModelPartInjector" {
import { $Mesh, $Mesh$$Type } from "packages/dev/tr7zw/skinlayers/api/$Mesh"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $OffsetProvider, $OffsetProvider$$Type } from "packages/dev/tr7zw/skinlayers/api/$OffsetProvider"

export interface $ModelPartInjector {
"getInjectedMesh"(): $Mesh
"getOffsetProvider"(): $OffsetProvider
"isVisible"(): boolean
"prepareTranslateAndRotate"(poseStack0: $PoseStack$$Type): void
"setInjectedMesh"(mesh0: $Mesh$$Type, offsetProvider1: $OffsetProvider$$Type): void
get "injectedMesh"(): $Mesh
get "offsetProvider"(): $OffsetProvider
get "visible"(): boolean
}

export namespace $ModelPartInjector {
const probejs$$marker: never
}
export abstract class $ModelPartInjector$$Static implements $ModelPartInjector {
}
}

declare module "packages/dev/tr7zw/transition/mc/extending/$ExtensionHolder" {
import { $Class$$Type } from "packages/java/lang/$Class"

export interface $ExtensionHolder {
"getExtension"<T>(object0: any, class1: $Class$$Type<T>): T
"setExtension"(object0: any, object1: any): void
}

export namespace $ExtensionHolder {
const probejs$$marker: never
}
export abstract class $ExtensionHolder$$Static implements $ExtensionHolder {
}
}

declare module "packages/dev/tr7zw/skinlayers/api/$PlayerData" {
import { $Mesh } from "packages/dev/tr7zw/skinlayers/api/$Mesh"

export interface $PlayerData {
"getHeadMesh"(): $Mesh
"getLeftArmMesh"(): $Mesh
"getLeftLegMesh"(): $Mesh
"getRightArmMesh"(): $Mesh
"getRightLegMesh"(): $Mesh
"getTorsoMesh"(): $Mesh
get "headMesh"(): $Mesh
get "leftArmMesh"(): $Mesh
get "leftLegMesh"(): $Mesh
get "rightArmMesh"(): $Mesh
get "rightLegMesh"(): $Mesh
get "torsoMesh"(): $Mesh
}

export namespace $PlayerData {
const probejs$$marker: never
}
export abstract class $PlayerData$$Static implements $PlayerData {
}
}

declare module "packages/dev/tr7zw/trender/gui/impl/mixin/client/$DrawContextAccessor" {
import { $MultiBufferSource$BufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export interface $DrawContextAccessor {
"libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
export abstract class $DrawContextAccessor$$Static implements $DrawContextAccessor {
}
}

