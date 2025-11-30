declare module "packages/com/github/alexthe666/citadel/server/generation/$NoiseGeneratorSettingsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NoiseGeneratorSettingsAccessor {
"onSaveData"(boolean0: boolean): void
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export abstract class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$SetupRotations" {
import { $EventLivingRenderer } from "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer$SetupRotations extends $EventLivingRenderer {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float, float4: float)

public "getBodyYRot"(): float
get "bodyYRot"(): float
}
}

declare module "packages/com/github/alexthe666/citadel/animation/$Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
public static "create"(int0: integer): $Animation
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
get "duration"(): integer
get "iD"(): integer
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$AccessToBufferSource" {
import { $EventLivingRenderer } from "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer$AccessToBufferSource extends $EventLivingRenderer {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)

public "getBodyYRot"(): float
public "getBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
get "bodyYRot"(): float
get "bufferSource"(): $MultiBufferSource
get "packedLight"(): integer
}
}

declare module "packages/com/github/alexthe666/iceandfire/api/event/$DragonFireDamageWorldEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $EntityDragonBase, $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"

export class $DragonFireDamageWorldEvent extends $LivingEvent {
constructor(entityDragonBase0: $EntityDragonBase$$Type, double1: double, double2: double, double3: double)
constructor()

public "getDragon"(): $EntityDragonBase
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
get "dragon"(): $EntityDragonBase
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
}
}

declare module "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolver" {
import { $LegSolver$Leg, $LegSolver$Leg$$Type } from "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolver$Leg"
import { $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"

export class $LegSolver {
readonly "legs": $LegSolver$Leg[]

constructor(...leg0s: $LegSolver$Leg$$Type[])

public "update"(entityDragonBase0: $EntityDragonBase$$Type, float1: float): void
public "update"(entityDragonBase0: $EntityDragonBase$$Type, float1: float, float2: float): void
}
}

declare module "packages/com/github/exopandora/shouldersurfing/mixinducks/$CameraDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraDuck {
"shouldersurfing$getZRot"(): float
"shouldersurfing$setZRot"(float0: float): void
}

export namespace $CameraDuck {
const probejs$$marker: never
}
export abstract class $CameraDuck$$Static implements $CameraDuck {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$IafDragonAttacks$Ground" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IafDragonAttacks$Ground extends $Enum<$IafDragonAttacks$Ground> {
static readonly "BITE": $IafDragonAttacks$Ground
static readonly "FIRE": $IafDragonAttacks$Ground
static readonly "SHAKE_PREY": $IafDragonAttacks$Ground
static readonly "TAIL_WHIP": $IafDragonAttacks$Ground
static readonly "WING_BLAST": $IafDragonAttacks$Ground

public static "valueOf"(string0: string): $IafDragonAttacks$Ground
public static "values"(): $IafDragonAttacks$Ground[]
}
}

declare module "packages/com/github/exopandora/shouldersurfing/mixins/$GameRendererAccessor" {
import { $Camera } from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {
"getMainCamera"(): $Camera
get "mainCamera"(): $Camera
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IDeadMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDeadMob {
"isMobDead"(): boolean
get "mobDead"(): boolean
}

export namespace $IDeadMob {
const probejs$$marker: never
}
export abstract class $IDeadMob$$Static implements $IDeadMob {
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$PreSetupAnimations" {
import { $EventLivingRenderer$AccessToBufferSource } from "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$AccessToBufferSource"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer$PreSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "packages/com/github/alexthe666/iceandfire/api/event/$GenericGriefEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $GenericGriefEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, double1: double, double2: double, double3: double)

public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
}
}

declare module "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolverQuadruped" {
import { $LegSolver$Leg } from "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolver$Leg"
import { $LegSolver } from "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolver"

export class $LegSolverQuadruped extends $LegSolver {
readonly "backLeft": $LegSolver$Leg
readonly "backRight": $LegSolver$Leg
readonly "frontLeft": $LegSolver$Leg
readonly "frontRight": $LegSolver$Leg

constructor(float0: float, float1: float)
constructor(float0: float, float1: float, float2: float, float3: float, float4: float)

}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventPosePlayerHand" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $HumanoidModel, $HumanoidModel$$Type } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $EventPosePlayerHand extends $Event {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, humanoidModel1: $HumanoidModel$$Type<any>, boolean2: boolean)

public "getEntityIn"(): $Entity
public "getModel"(): $HumanoidModel<any>
public "isLeftHand"(): boolean
get "entityIn"(): $Entity
get "model"(): $HumanoidModel<any>
get "leftHand"(): boolean
}
}

declare module "packages/com/github/alexthe666/iceandfire/client/model/$IFChainBuffer" {
import { $BasicModelPart$$Type } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IFChainBuffer {
constructor()

public "applyChainFlapBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainFlapBufferReverse"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainSwingBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainSwingBufferReverse"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainWaveBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainWaveBufferReverse"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "calculateChainFlapBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainFlapBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainFlapBufferHead"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainPitchBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "resetRotations"(): void
}
}

declare module "packages/com/github/alexthe666/iceandfire/api/event/$DragonFireEvent" {
import { $LivingEvent } from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import { $EntityDragonBase, $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"

export class $DragonFireEvent extends $LivingEvent {
constructor(entityDragonBase0: $EntityDragonBase$$Type, double1: double, double2: double, double3: double)
constructor()

public "getDragon"(): $EntityDragonBase
public "getTargetX"(): double
public "getTargetY"(): double
public "getTargetZ"(): double
get "dragon"(): $EntityDragonBase
get "targetX"(): double
get "targetY"(): double
get "targetZ"(): double
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$ChainBuffer" {
import { $BasicModelPart$$Type } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ChainBuffer {
constructor()

public "applyChainSwingBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainWaveBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "resetRotations"(): void
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$IafDragonFlightManager" {
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $IafDragonFlightManager {
constructor(entityDragonBase0: $EntityDragonBase$$Type)

public static "approach"(float0: float, float1: float, float2: float): float
public static "approachDegrees"(float0: float, float1: float, float2: float): float
public static "degreesDifferenceAbs"(float0: float, float1: float): float
public "getFlightTarget"(): $Vec3
public "onSetAttackTarget"(livingEntity0: $LivingEntity$$Type): void
public "setFlightTarget"(vec30: $Vec3$$Type): void
public "update"(): void
get "flightTarget"(): $Vec3
set "flightTarget"(value: $Vec3$$Type)
}
}

declare module "packages/com/github/alexthe666/iceandfire/api/event/$RenderPodiumItemEvent" {
import { $TileEntityPodium, $TileEntityPodium$$Type } from "packages/com/github/alexthe666/iceandfire/entity/tile/$TileEntityPodium"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $RenderPodium, $RenderPodium$$Type } from "packages/com/github/alexthe666/iceandfire/client/render/tile/$RenderPodium"

export class $RenderPodiumItemEvent extends $Event {
constructor()
constructor(renderPodium0: $RenderPodium$$Type<any>, tileEntityPodium1: $TileEntityPodium$$Type, float2: float, double3: double, double4: double, double5: double)

public "getItemStack"(): $ItemStack
public "getPartialTicks"(): float
public "getPodium"(): $TileEntityPodium
public "getRender"(): $RenderPodium<any>
public "getX"(): double
public "getY"(): double
public "getZ"(): double
get "itemStack"(): $ItemStack
get "partialTicks"(): float
get "podium"(): $TileEntityPodium
get "render"(): $RenderPodium<any>
get "x"(): double
get "y"(): double
get "z"(): double
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel, $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer extends $Event {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float)
constructor()

public "getEntity"(): $LivingEntity
public "getModel"(): $EntityModel<any>
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "entity"(): $LivingEntity
get "model"(): $EntityModel<any>
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "packages/com/github/alexthe666/iceandfire/client/render/tile/$RenderPodium" {
import { $TileEntityPodium, $TileEntityPodium$$Type } from "packages/com/github/alexthe666/iceandfire/entity/tile/$TileEntityPodium"
import { $BlockEntityRendererProvider$Context$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider$Context"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $BlockEntityRenderer } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer"

export class $RenderPodium<T extends $TileEntityPodium> implements $BlockEntityRenderer<T> {
constructor(context0: $BlockEntityRendererProvider$Context$$Type)

public "getViewDistance"(): integer
public "render"(t0: T, float1: float, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, int5: integer): void
public "shouldRender"(t0: T, vec31: $Vec3$$Type): boolean
public "shouldRenderOffScreen"(t0: T): boolean
get "viewDistance"(): integer
}
}

declare module "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart$ModelBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BasicModelPart$ModelBox {
readonly "posX1": float
readonly "posX2": float
readonly "posY1": float
readonly "posY2": float
readonly "posZ1": float
readonly "posZ2": float

constructor(int0: integer, int1: integer, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, boolean11: boolean, float12: float, float13: float)

}
}

declare module "packages/com/github/alexthe666/citadel/animation/$AnimationEvent$Start" {
import { $Animation$$Type } from "packages/com/github/alexthe666/citadel/animation/$Animation"
import { $AnimationEvent } from "packages/com/github/alexthe666/citadel/animation/$AnimationEvent"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "packages/com/github/alexthe666/citadel/animation/$IAnimatedEntity"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type)

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolver$Leg" {
import { $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"

export class $LegSolver$Leg {
readonly "forward": float
readonly "side": float

constructor(float0: float, float1: float, float2: float, boolean3: boolean)

public "getHeight"(float0: float): float
public "update"(entityDragonBase0: $EntityDragonBase$$Type, double1: double, double2: double, double3: double, double4: double, float5: float): void
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventRenderSplashText$Post" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $EventRenderSplashText } from "packages/com/github/alexthe666/citadel/client/event/$EventRenderSplashText"

export class $EventRenderSplashText$Post extends $EventRenderSplashText {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)

}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IAnimalFear" {
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IAnimalFear {
"shouldAnimalsFear"(entity0: $Entity$$Type): boolean
}

export namespace $IAnimalFear {
const probejs$$marker: never
}
export abstract class $IAnimalFear$$Static implements $IAnimalFear {
}
}

declare module "packages/com/github/alexthe666/citadel/client/model/basic/$BasicEntityModel" {
import { $EntityModel } from "packages/net/minecraft/client/model/$EntityModel"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BasicModelPart } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $BasicEntityModel<T extends $Entity> extends $EntityModel<T> {
public "parts"(): $Iterable<$BasicModelPart>
get "textureHeight"(): integer
set "textureHeight"(value: integer)
get "textureWidth"(): integer
set "textureWidth"(value: integer)
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IMultipartEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMultipartEntity {
}

export namespace $IMultipartEntity {
const probejs$$marker: never
}
export abstract class $IMultipartEntity$$Static implements $IMultipartEntity {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/tile/$TileEntityDragonforge" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $DragonForgeRecipe } from "packages/com/github/alexthe666/iceandfire/recipe/$DragonForgeRecipe"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $WorldlyContainer } from "packages/net/minecraft/world/$WorldlyContainer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Optional } from "packages/java/util/$Optional"
import { $BaseContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $TileEntityDragonforge extends $BaseContainerBlockEntity implements $WorldlyContainer {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer)

public "asContainer"(): $Container
public "assembled"(): boolean
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canSmelt"(): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCurrentRecipe"(): $Optional<$DragonForgeRecipe>
public "getFireType"(block0: $Block$$Type): integer
public "getGrillBlock"(): $Block
public "getHeight"(): integer
public "getMaxCookTime"(): integer
public "getModelData"(): $ModelData
public "getRecipes"(): $List<$DragonForgeRecipe>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getTypeID"(): string
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getWidth"(): integer
public "grillMatches"(block0: $Block$$Type): boolean
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isBurning"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "m_183515_"(compoundTag0: $CompoundTag$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "smeltItem"(): void
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, tileEntityDragonforge3: $TileEntityDragonforge$$Type): void
public "transferPower"(int0: integer): void
public static "tryClear"(object0: any): void
get "cookTime"(): integer
set "cookTime"(value: integer)
get "fireType"(): integer
set "fireType"(value: integer)
get "lastDragonFlameTimer"(): integer
set "lastDragonFlameTimer"(value: integer)
get "allItems"(): $List<$ItemStack>
get "currentRecipe"(): $Optional<$DragonForgeRecipe>
get "grillBlock"(): $Block
get "height"(): integer
get "maxCookTime"(): integer
get "modelData"(): $ModelData
get "recipes"(): $List<$DragonForgeRecipe>
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "typeID"(): string
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "width"(): integer
get "burning"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$ICustomMoveController" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICustomMoveController {
"attack"(boolean0: boolean): void
"dismount"(boolean0: boolean): void
"down"(boolean0: boolean): void
"getControlState"(): byte
"setControlState"(byte0: byte): void
"strike"(boolean0: boolean): void
"up"(boolean0: boolean): void
get "controlState"(): byte
set "controlState"(value: byte)
}

export namespace $ICustomMoveController {
const probejs$$marker: never
}
export abstract class $ICustomMoveController$$Static implements $ICustomMoveController {
}
}

declare module "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $BasicEntityModel$$Type } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicEntityModel"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $BasicModelPart$ModelBox } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart$ModelBox"

export class $BasicModelPart {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(basicEntityModel0: $BasicEntityModel$$Type<any>, int1: integer, int2: integer)
constructor(basicEntityModel0: $BasicEntityModel$$Type<any>)

public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float): void
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): void
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, boolean7: boolean): void
public "addBox"(string0: string, float1: float, float2: float, float3: float, int4: integer, int5: integer, int6: integer, float7: float, int8: integer, int9: integer): $BasicModelPart
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): $BasicModelPart
public "addBox"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, boolean6: boolean): $BasicModelPart
public "addChild"(basicModelPart0: $BasicModelPart$$Type): void
public "copyModelAngles"(basicModelPart0: $BasicModelPart$$Type): void
public "getModelAngleCopy"(): $BasicModelPart
public "getRandomCube"(randomSource0: $RandomSource$$Type): $BasicModelPart$ModelBox
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float): void
public "render"(poseStack0: $PoseStack$$Type, vertexConsumer1: $VertexConsumer$$Type, int2: integer, int3: integer): void
public "setRotationPoint"(float0: float, float1: float, float2: float): void
public "setTextureOffset"(int0: integer, int1: integer): $BasicModelPart
public "setTextureSize"(int0: integer, int1: integer): $BasicModelPart
public "translateRotate"(poseStack0: $PoseStack$$Type): void
get "mirror"(): boolean
set "mirror"(value: boolean)
get "rotateAngleX"(): float
set "rotateAngleX"(value: float)
get "rotateAngleY"(): float
set "rotateAngleY"(value: float)
get "rotateAngleZ"(): float
set "rotateAngleZ"(value: float)
get "rotationPointX"(): float
set "rotationPointX"(value: float)
get "rotationPointY"(): float
set "rotationPointY"(value: float)
get "rotationPointZ"(): float
set "rotationPointZ"(value: float)
get "showModel"(): boolean
set "showModel"(value: boolean)
get "textureHeight"(): float
set "textureHeight"(value: float)
get "textureOffsetX"(): integer
set "textureOffsetX"(value: integer)
get "textureOffsetY"(): integer
set "textureOffsetY"(value: integer)
get "textureWidth"(): float
set "textureWidth"(value: float)
get "modelAngleCopy"(): $BasicModelPart
}
}

declare module "packages/com/github/alexthe666/citadel/server/event/$EventMergeStructureSpawns" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import { $Structure$$Type } from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import { $StructureManager, $StructureManager$$Type } from "packages/net/minecraft/world/level/$StructureManager"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory, $MobCategory$$Type } from "packages/net/minecraft/world/entity/$MobCategory"
import { $WeightedRandomList, $WeightedRandomList$$Type } from "packages/net/minecraft/util/random/$WeightedRandomList"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export class $EventMergeStructureSpawns extends $Event {
constructor()
constructor(structureManager0: $StructureManager$$Type, blockPos1: $BlockPos$$Type, mobCategory2: $MobCategory$$Type, weightedRandomList3: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>, weightedRandomList4: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)

public "getBiomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getCategory"(): $MobCategory
public "getPos"(): $BlockPos
public "getStructureManager"(): $StructureManager
public "getStructureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "isStructureTagged"(tagKey0: $TagKey$$Type<$Structure$$Type>): boolean
public "mergeSpawns"(): void
public "setStructureSpawns"(weightedRandomList0: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>): void
get "biomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
get "category"(): $MobCategory
get "pos"(): $BlockPos
get "structureManager"(): $StructureManager
get "structureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
set "structureSpawns"(value: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)
}
}

declare module "packages/com/github/alexthe666/citadel/animation/$AnimationEvent$Tick" {
import { $Animation$$Type } from "packages/com/github/alexthe666/citadel/animation/$Animation"
import { $AnimationEvent } from "packages/com/github/alexthe666/citadel/animation/$AnimationEvent"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "packages/com/github/alexthe666/citadel/animation/$IAnimatedEntity"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type, int2: integer)

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "packages/com/github/alexthe666/citadel/animation/$IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "packages/com/github/alexthe666/citadel/animation/$Animation"

export interface $IAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "packages/com/github/alexthe666/citadel/server/entity/$ICitadelDataEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ICitadelDataEntity {
"getCitadelEntityData"(): $CompoundTag
"setCitadelEntityData"(compoundTag0: $CompoundTag$$Type): void
get "citadelEntityData"(): $CompoundTag
set "citadelEntityData"(value: $CompoundTag$$Type)
}

export namespace $ICitadelDataEntity {
const probejs$$marker: never
}
export abstract class $ICitadelDataEntity$$Static implements $ICitadelDataEntity {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$IafDragonLogic" {
import { $Path$$Type } from "packages/net/minecraft/world/level/pathfinder/$Path"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $EntityDragonBase$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $IafDragonLogic {
constructor(entityDragonBase0: $EntityDragonBase$$Type)

public "attackTarget"(entity0: $Entity$$Type, player1: $Player$$Type, float2: float): boolean
public "debug"(): void
public "debugPathfinder"(path0: $Path$$Type): void
public "updateDragonAttack"(): void
public "updateDragonClient"(): void
public "updateDragonCommon"(): void
public "updateDragonServer"(): void
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/tile/$TileEntityPodium" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $ModelData } from "packages/net/minecraftforge/client/model/data/$ModelData"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $WorldlyContainer } from "packages/net/minecraft/world/$WorldlyContainer"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ClientboundBlockEntityDataPacket } from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $BaseContainerBlockEntity } from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $TileEntityPodium extends $BaseContainerBlockEntity implements $WorldlyContainer {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getModelData"(): $ModelData
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getStackInSlotOnClosing"(int0: integer): $ItemStack
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "m_183515_"(compoundTag0: $CompoundTag$$Type): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, tileEntityPodium3: $TileEntityPodium$$Type): void
public static "tryClear"(object0: any): void
get "prevTicksExisted"(): integer
set "prevTicksExisted"(value: integer)
get "ticksExisted"(): integer
set "ticksExisted"(value: integer)
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "modelData"(): $ModelData
get "slots"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/com/github/alexthe666/iceandfire/recipe/$DragonForgeRecipe$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $DragonForgeRecipe, $DragonForgeRecipe$$Type } from "packages/com/github/alexthe666/iceandfire/recipe/$DragonForgeRecipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $NewRegistryEvent } from "packages/net/minecraftforge/registries/$NewRegistryEvent"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $DragonForgeRecipe$Serializer extends $NewRegistryEvent implements $RecipeSerializer<$DragonForgeRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): $DragonForgeRecipe
public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $DragonForgeRecipe
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $DragonForgeRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, dragonForgeRecipe1: $DragonForgeRecipe$$Type): void
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IHasCustomizableAttributes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHasCustomizableAttributes {
"setConfigurableAttributes"(): void
}

export namespace $IHasCustomizableAttributes {
const probejs$$marker: never
}
export abstract class $IHasCustomizableAttributes$$Static implements $IHasCustomizableAttributes {
}
}

declare module "packages/com/github/alexthe666/iceandfire/enums/$EnumDragonEgg" {
import { $Enum } from "packages/java/lang/$Enum"
import { $DragonType } from "packages/com/github/alexthe666/iceandfire/entity/$DragonType"
import { $ChatFormatting } from "packages/net/minecraft/$ChatFormatting"

export class $EnumDragonEgg extends $Enum<$EnumDragonEgg> {
static readonly "AMYTHEST": $EnumDragonEgg
static readonly "BLACK": $EnumDragonEgg
static readonly "BLUE": $EnumDragonEgg
static readonly "BRONZE": $EnumDragonEgg
static readonly "COPPER": $EnumDragonEgg
static readonly "ELECTRIC": $EnumDragonEgg
static readonly "GRAY": $EnumDragonEgg
static readonly "GREEN": $EnumDragonEgg
static readonly "RED": $EnumDragonEgg
static readonly "SAPPHIRE": $EnumDragonEgg
static readonly "SILVER": $EnumDragonEgg
static readonly "WHITE": $EnumDragonEgg
readonly "color": $ChatFormatting
readonly "dragonType": $DragonType

public static "byMetadata"(int0: integer): $EnumDragonEgg
public static "valueOf"(string0: string): $EnumDragonEgg
public static "values"(): $EnumDragonEgg[]
}
}

declare module "packages/com/github/alexthe666/citadel/server/event/$EventReplaceBiome" {
import { $ExpandedBiomeSource, $ExpandedBiomeSource$$Type } from "packages/com/github/alexthe666/citadel/server/world/$ExpandedBiomeSource"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $Climate$Sampler, $Climate$Sampler$$Type } from "packages/net/minecraft/world/level/biome/$Climate$Sampler"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

/** @deprecated */
export class $EventReplaceBiome extends $Event {
constructor(expandedBiomeSource0: $ExpandedBiomeSource$$Type, holder1: $Holder$$Type<$Biome$$Type>, int2: integer, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, long11: long, resourceKey12: $ResourceKey$$Type<$Level>, sampler13: $Climate$Sampler$$Type)
constructor()

public "getBiomeSource"(): $ExpandedBiomeSource
public "getBiomeToGenerate"(): $Holder<$Biome>
public "getClimateSampler"(): $Climate$Sampler
public "getContinentalness"(): float
public "getDepth"(): float
public "getErosion"(): float
public "getHumidity"(): float
public "getTemperature"(): float
public "getWeirdness"(): float
public "getWorldDimension"(): $ResourceKey<$Level>
public "getWorldSeed"(): long
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "setBiomeToGenerate"(holder0: $Holder$$Type<$Biome$$Type>): void
public "testContinentalness"(float0: float, float1: float): boolean
public "testDepth"(float0: float, float1: float): boolean
public "testErosion"(float0: float, float1: float): boolean
public "testHumidity"(float0: float, float1: float): boolean
public "testTemperature"(float0: float, float1: float): boolean
public "testWeirdness"(float0: float, float1: float): boolean
get "biomeSource"(): $ExpandedBiomeSource
set "biomeSource"(value: $ExpandedBiomeSource$$Type)
get "biomeToGenerate"(): $Holder<$Biome>
set "biomeToGenerate"(value: $Holder$$Type<$Biome$$Type>)
get "continentalness"(): float
set "continentalness"(value: float)
get "depth"(): float
set "depth"(value: float)
get "erosion"(): float
set "erosion"(value: float)
get "humidity"(): float
set "humidity"(value: float)
get "temperature"(): float
set "temperature"(value: float)
get "weirdness"(): float
set "weirdness"(value: float)
get "climateSampler"(): $Climate$Sampler
get "worldDimension"(): $ResourceKey<$Level>
get "worldSeed"(): long
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "packages/com/github/exopandora/shouldersurfing/mixins/$ResourceLocationAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceLocationAccessor {
}

export namespace $ResourceLocationAccessor {
const probejs$$marker: never
}
export abstract class $ResourceLocationAccessor$$Static implements $ResourceLocationAccessor {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IDropArmor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDropArmor {
"dropArmor"(): void
}

export namespace $IDropArmor {
const probejs$$marker: never
}
export abstract class $IDropArmor$$Static implements $IDropArmor {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IFlyingMount" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IFlyingMount {
"fliesLikeElytra"(): boolean
"getFlightSpeedModifier"(): double
"getRidingPlayer"(): $Player
"getYSpeedMod"(): double
"isFlying"(): boolean
"isGoingDown"(): boolean
"isGoingUp"(): boolean
"isHovering"(): boolean
get "flightSpeedModifier"(): double
get "ridingPlayer"(): $Player
get "ySpeedMod"(): double
get "flying"(): boolean
get "goingDown"(): boolean
get "goingUp"(): boolean
get "hovering"(): boolean
}

export namespace $IFlyingMount {
const probejs$$marker: never
}
export abstract class $IFlyingMount$$Static implements $IFlyingMount {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IVillagerFear" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IVillagerFear {
"shouldFear"(): boolean
}

export namespace $IVillagerFear {
const probejs$$marker: never
}
export abstract class $IVillagerFear$$Static implements $IVillagerFear {
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$PostRenderModel" {
import { $EventLivingRenderer$AccessToBufferSource } from "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$AccessToBufferSource"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer$PostRenderModel extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$PostSetupAnimations" {
import { $EventLivingRenderer$AccessToBufferSource } from "packages/com/github/alexthe666/citadel/client/event/$EventLivingRenderer$AccessToBufferSource"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EventLivingRenderer$PostSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type<any>, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "packages/com/github/alexthe666/citadel/server/event/$EventChangeEntityTickRate" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EventChangeEntityTickRate extends $Event {
constructor()
constructor(entity0: $Entity$$Type, float1: float)

public "getEntity"(): $Entity
public "getTargetTickRate"(): float
get "entity"(): $Entity
get "targetTickRate"(): float
}
}

declare module "packages/com/github/alexthe666/citadel/animation/$AnimationEvent" {
import { $Animation } from "packages/com/github/alexthe666/citadel/animation/$Animation"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $IAnimatedEntity } from "packages/com/github/alexthe666/citadel/animation/$IAnimatedEntity"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "getAnimation"(): $Animation
public "getEntity"(): T
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventGetOutlineColor" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EventGetOutlineColor extends $Event {
constructor()
constructor(entity0: $Entity$$Type, int1: integer)

public "getColor"(): integer
public "getEntityIn"(): $Entity
public "setColor"(int0: integer): void
public "setEntityIn"(entity0: $Entity$$Type): void
get "color"(): integer
get "entityIn"(): $Entity
set "color"(value: integer)
set "entityIn"(value: $Entity$$Type)
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$IafDragonAttacks$Air" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IafDragonAttacks$Air extends $Enum<$IafDragonAttacks$Air> {
static readonly "HOVER_BLAST": $IafDragonAttacks$Air
static readonly "SCORCH_STREAM": $IafDragonAttacks$Air
static readonly "TACKLE": $IafDragonAttacks$Air

public static "valueOf"(string0: string): $IafDragonAttacks$Air
public static "values"(): $IafDragonAttacks$Air[]
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventGetStarBrightness" {
import { $ClientLevel, $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"

export class $EventGetStarBrightness extends $Event {
constructor()
constructor(clientLevel0: $ClientLevel$$Type, float1: float, float2: float)

public "getBrightness"(): float
public "getLevel"(): $ClientLevel
public "getPartialTicks"(): float
public "setBrightness"(float0: float): void
get "brightness"(): float
get "level"(): $ClientLevel
get "partialTicks"(): float
set "brightness"(value: float)
}
}

declare module "packages/com/github/alexthe666/iceandfire/pathfinding/raycoms/$IPassabilityNavigator" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $IPassabilityNavigator {
"isBlockExplicitlyNotPassable"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
"isBlockExplicitlyPassable"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
"maxSearchNodes"(): integer
}

export namespace $IPassabilityNavigator {
const probejs$$marker: never
}
export abstract class $IPassabilityNavigator$$Static implements $IPassabilityNavigator {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$DragonType" {
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $EntityDragonBase } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase"

export class $DragonType {
static readonly "FIRE": $DragonType
static readonly "ICE": $DragonType
static readonly "LIGHTNING": $DragonType

constructor(string0: string)

public "getEntity"(): $EntityType<$EntityDragonBase>
public "getIntFromType"(): integer
public "getName"(): string
public static "getNameFromInt"(int0: integer): string
public "isPiscivore"(): boolean
public "setName"(string0: string): void
public "setPiscivore"(): $DragonType
get "entity"(): $EntityType<$EntityDragonBase>
get "intFromType"(): integer
get "name"(): string
get "piscivore"(): boolean
set "name"(value: string)
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventGetFluidRenderType" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $FluidState, $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $EventGetFluidRenderType extends $Event {
constructor(fluidState0: $FluidState$$Type, renderType1: $RenderType$$Type)
constructor()

public "getFluidState"(): $FluidState
public "getRenderType"(): $RenderType
public "setRenderType"(renderType0: $RenderType$$Type): void
get "fluidState"(): $FluidState
get "renderType"(): $RenderType
set "renderType"(value: $RenderType$$Type)
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventRenderSplashText" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $EventRenderSplashText extends $Event {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)

public "getGuiGraphics"(): $GuiGraphics
public "getPartialTicks"(): float
public "getSplashText"(): string
public "setSplashText"(string0: string): void
get "guiGraphics"(): $GuiGraphics
get "partialTicks"(): float
get "splashText"(): string
set "splashText"(value: string)
}
}

declare module "packages/com/github/alexthe666/citadel/client/event/$EventRenderSplashText$Pre" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $EventRenderSplashText } from "packages/com/github/alexthe666/citadel/client/event/$EventRenderSplashText"

export class $EventRenderSplashText$Pre extends $EventRenderSplashText {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer)

public "getSplashTextColor"(): integer
public "setSplashTextColor"(int0: integer): void
get "splashTextColor"(): integer
set "splashTextColor"(value: integer)
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$HomePosition" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $HomePosition {
constructor(compoundTag0: $CompoundTag$$Type)
constructor(int0: integer, int1: integer, int2: integer, level3: $Level$$Type)
constructor(blockPos0: $BlockPos$$Type, level1: $Level$$Type)
constructor(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type)

public "getDimension"(): string
public "getPosition"(): $BlockPos
public "read"(compoundTag0: $CompoundTag$$Type, level1: $Level$$Type): $HomePosition
public "read"(compoundTag0: $CompoundTag$$Type): $HomePosition
public "write"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "dimension"(): string
get "position"(): $BlockPos
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonEgg" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IDeadMob } from "packages/com/github/alexthe666/iceandfire/entity/util/$IDeadMob"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $EnumDragonEgg, $EnumDragonEgg$$Type } from "packages/com/github/alexthe666/iceandfire/enums/$EnumDragonEgg"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $IBlacklistedFromStatues } from "packages/com/github/alexthe666/iceandfire/entity/util/$IBlacklistedFromStatues"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"

export class $EntityDragonEgg extends $LivingEntity implements $IBlacklistedFromStatues, $IDeadMob {
constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public static "bakeAttributes"(): $AttributeSupplier$Builder
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canBeTurnedToStone"(): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "foodEaten"(is: $ItemStack$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDragonAge"(): integer
public "getEggType"(): $EnumDragonEgg
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwnerId"(): $UUID
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMobDead"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "m_7975_"(damageSource0: $DamageSource$$Type): $SoundEvent
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onPlayerPlace"(player0: $Player$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
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
public "serializeNBT"(): $CompoundTag
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDragonAge"(int0: integer): void
public "setEggType"(enumDragonEgg0: $EnumDragonEgg$$Type): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setOwnerId"(uUID0: $UUID$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "updateEggCondition"(): void
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "dragonAge"(): integer
get "eggType"(): $EnumDragonEgg
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "ownerId"(): $UUID
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "dynamicLightEnabledH"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "mobDead"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dragonAge"(value: integer)
set "eggType"(value: $EnumDragonEgg$$Type)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "ownerId"(value: $UUID$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "packages/com/github/exopandora/shouldersurfing/mixins/$GuiAccessor" {
import { $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"

export interface $GuiAccessor {
"invokeCanRenderCrosshairForSpectator"(hitResult0: $HitResult$$Type): boolean
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IDragonFlute" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IDragonFlute {
"onHearFlute"(player0: $Player$$Type): void
}

export namespace $IDragonFlute {
const probejs$$marker: never
}
export abstract class $IDragonFlute$$Static implements $IDragonFlute {
}
}

declare module "packages/com/github/alexthe666/iceandfire/recipe/$DragonForgeRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $TileEntityDragonforge, $TileEntityDragonforge$$Type } from "packages/com/github/alexthe666/iceandfire/entity/tile/$TileEntityDragonforge"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $DragonForgeRecipe implements $Recipe<$TileEntityDragonforge> {
constructor(resourceLocation0: $ResourceLocation$$Type, ingredient1: $Ingredient$$Type, ingredient2: $Ingredient$$Type, itemStack3: $ItemStack$$Type, string4: string, int5: integer)

public "assemble"(tileEntityDragonforge0: $TileEntityDragonforge$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getBlood"(): $Ingredient
public "getCookTime"(): integer
public "getDragonType"(): string
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getInput"(): $Ingredient
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(tileEntityDragonforge0: $TileEntityDragonforge$$Type): $NonNullList<$ItemStack>
public "getResultItem"(): $ItemStack
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "isValidBlood"(itemStack0: $ItemStack$$Type): boolean
public "isValidInput"(itemStack0: $ItemStack$$Type): boolean
public "matches"(tileEntityDragonforge0: $TileEntityDragonforge$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "blood"(): $Ingredient
get "cookTime"(): integer
get "dragonType"(): string
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "input"(): $Ingredient
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "resultItem"(): $ItemStack
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/com/github/exopandora/shouldersurfing/mixinducks/$OptionsDuck" {
import { $CameraType$$Type } from "packages/net/minecraft/client/$CameraType"

export interface $OptionsDuck {
"shouldersurfing$setCameraTypeDirect"(cameraType0: $CameraType$$Type): void
}

export namespace $OptionsDuck {
const probejs$$marker: never
}
export abstract class $OptionsDuck$$Static implements $OptionsDuck {
}
}

declare module "packages/com/github/alexthe666/citadel/server/world/$ModifiableTickRateServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModifiableTickRateServer {
"getMasterMs"(): long
"resetGlobalTickLengthMs"(): void
"setGlobalTickLengthMs"(long0: long): void
get "masterMs"(): long
set "globalTickLengthMs"(value: long)
}

export namespace $ModifiableTickRateServer {
const probejs$$marker: never
}
export abstract class $ModifiableTickRateServer$$Static implements $ModifiableTickRateServer {
}
}

declare module "packages/com/github/alexthe666/citadel/server/world/$ExpandedBiomeSource" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Set$$Type } from "packages/java/util/$Set"
import { $Biome, $Biome$$Type } from "packages/net/minecraft/world/level/biome/$Biome"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

/** @deprecated */
export interface $ExpandedBiomeSource {
"expandBiomesWith"(set0: $Set$$Type<$Holder$$Type<$Biome$$Type>>): void
"getResourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
"setResourceKeyMap"(map0: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>): void
get "resourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
set "resourceKeyMap"(value: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>)
}

export namespace $ExpandedBiomeSource {
const probejs$$marker: never
}
export abstract class $ExpandedBiomeSource$$Static implements $ExpandedBiomeSource {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$IBlacklistedFromStatues" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlacklistedFromStatues {
"canBeTurnedToStone"(): boolean
}

export namespace $IBlacklistedFromStatues {
const probejs$$marker: never
}
export abstract class $IBlacklistedFromStatues$$Static implements $IBlacklistedFromStatues {
}
}

declare module "packages/com/github/alexthe666/iceandfire/pathfinding/raycoms/pathjobs/$ICustomSizeNavigator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICustomSizeNavigator {
"getXZNavSize"(): float
"getYNavSize"(): integer
"isSmallerThanBlock"(): boolean
get "xZNavSize"(): float
get "yNavSize"(): integer
get "smallerThanBlock"(): boolean
}

export namespace $ICustomSizeNavigator {
const probejs$$marker: never
}
export abstract class $ICustomSizeNavigator$$Static implements $ICustomSizeNavigator {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$ISyncMount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISyncMount {
}

export namespace $ISyncMount {
const probejs$$marker: never
}
export abstract class $ISyncMount$$Static implements $ISyncMount {
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/util/$ReversedBuffer" {
import { $BasicModelPart$$Type } from "packages/com/github/alexthe666/citadel/client/model/basic/$BasicModelPart"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ReversedBuffer {
constructor()

public "applyChainSwingBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "applyChainWaveBuffer"(...basicModelPart0s: $BasicModelPart$$Type[]): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainSwingBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, livingEntity3: $LivingEntity$$Type): void
public "calculateChainWaveBuffer"(float0: float, int1: integer, float2: float, float3: float, livingEntity4: $LivingEntity$$Type): void
public "resetRotations"(): void
}
}

declare module "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonBase" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $ICustomSizeNavigator } from "packages/com/github/alexthe666/iceandfire/pathfinding/raycoms/pathjobs/$ICustomSizeNavigator"
import { $IafDragonAttacks$Ground, $IafDragonAttacks$Ground$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$IafDragonAttacks$Ground"
import { $IDragonFlute } from "packages/com/github/alexthe666/iceandfire/entity/util/$IDragonFlute"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IDeadMob } from "packages/com/github/alexthe666/iceandfire/entity/util/$IDeadMob"
import { $IVillagerFear } from "packages/com/github/alexthe666/iceandfire/entity/util/$IVillagerFear"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $ReversedBuffer, $ReversedBuffer$$Type } from "packages/com/github/alexthe666/iceandfire/entity/util/$ReversedBuffer"
import { $FluidState$$Type } from "packages/net/minecraft/world/level/material/$FluidState"
import { $Entity$MoveFunction$$Type } from "packages/net/minecraft/world/entity/$Entity$MoveFunction"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $HomePosition, $HomePosition$$Type } from "packages/com/github/alexthe666/iceandfire/entity/util/$HomePosition"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $IFChainBuffer, $IFChainBuffer$$Type } from "packages/com/github/alexthe666/iceandfire/client/model/$IFChainBuffer"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"
import { $IMultipartEntity } from "packages/com/github/alexthe666/iceandfire/entity/util/$IMultipartEntity"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $EntityArrayList } from "packages/dev/latvian/mods/kubejs/player/$EntityArrayList"
import { $ICustomMoveController } from "packages/com/github/alexthe666/iceandfire/entity/util/$ICustomMoveController"
import { $Animation, $Animation$$Type } from "packages/com/github/alexthe666/citadel/animation/$Animation"
import { $BiPredicate$$Type } from "packages/java/util/function/$BiPredicate"
import { $IDropArmor } from "packages/com/github/alexthe666/iceandfire/entity/util/$IDropArmor"
import { $EntityDragonEgg } from "packages/com/github/alexthe666/iceandfire/entity/$EntityDragonEgg"
import { $ScriptType } from "packages/dev/latvian/mods/kubejs/script/$ScriptType"
import { $DragonType, $DragonType$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$DragonType"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Pose$$Type } from "packages/net/minecraft/world/entity/$Pose"
import { $AttributeSupplier$Builder } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import { $Capability$$Type } from "packages/net/minecraftforge/common/capabilities/$Capability"
import { $IafDragonAttacks$Air, $IafDragonAttacks$Air$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$IafDragonAttacks$Air"
import { $IPassabilityNavigator } from "packages/com/github/alexthe666/iceandfire/pathfinding/raycoms/$IPassabilityNavigator"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $MenuProvider } from "packages/net/minecraft/world/$MenuProvider"
import { $PartEntity } from "packages/net/minecraftforge/entity/$PartEntity"
import { $ChainBuffer, $ChainBuffer$$Type } from "packages/com/github/alexthe666/iceandfire/entity/util/$ChainBuffer"
import { $IHasCustomizableAttributes } from "packages/com/github/alexthe666/iceandfire/entity/util/$IHasCustomizableAttributes"
import { $LazyOptional } from "packages/net/minecraftforge/common/util/$LazyOptional"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $SimpleContainer, $SimpleContainer$$Type } from "packages/net/minecraft/world/$SimpleContainer"
import { $IafDragonFlightManager, $IafDragonFlightManager$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$IafDragonFlightManager"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $IFlyingMount } from "packages/com/github/alexthe666/iceandfire/entity/util/$IFlyingMount"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"
import { $Boat$$Type } from "packages/net/minecraft/world/entity/vehicle/$Boat"
import { $GameProfile } from "packages/com/mojang/authlib/$GameProfile"
import { $BlockPos, $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $MobCategory } from "packages/net/minecraft/world/entity/$MobCategory"
import { $EntityPotionEffectsJS } from "packages/dev/latvian/mods/kubejs/entity/$EntityPotionEffectsJS"
import { $LevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$LevelRenderer"
import { $ISyncMount } from "packages/com/github/alexthe666/iceandfire/entity/util/$ISyncMount"
import { $ContainerListener } from "packages/net/minecraft/world/$ContainerListener"
import { $RayTraceResultJS } from "packages/dev/latvian/mods/kubejs/entity/$RayTraceResultJS"
import { $SoundAction$$Type } from "packages/net/minecraftforge/common/$SoundAction"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $IAnimalFear } from "packages/com/github/alexthe666/iceandfire/entity/util/$IAnimalFear"
import { $TamableAnimal } from "packages/net/minecraft/world/entity/$TamableAnimal"
import { $IAnimatedEntity } from "packages/com/github/alexthe666/citadel/animation/$IAnimatedEntity"
import { $IafDragonLogic, $IafDragonLogic$$Type } from "packages/com/github/alexthe666/iceandfire/entity/$IafDragonLogic"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $LegSolverQuadruped, $LegSolverQuadruped$$Type } from "packages/com/github/alexthe666/iceandfire/client/model/util/$LegSolverQuadruped"
import { $HitResult, $HitResult$$Type } from "packages/net/minecraft/world/phys/$HitResult"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $ItemLike } from "packages/net/minecraft/world/level/$ItemLike"

export class $EntityDragonBase extends $TamableAnimal implements $IPassabilityNavigator, $ISyncMount, $IFlyingMount, $IMultipartEntity, $IAnimatedEntity, $IDragonFlute, $IDeadMob, $IVillagerFear, $IAnimalFear, $IDropArmor, $IHasCustomizableAttributes, $ICustomSizeNavigator, $ICustomMoveController, $ContainerListener {
static "ANIMATION_BITE": $Animation
static "ANIMATION_EAT": $Animation
static "ANIMATION_EPIC_ROAR": $Animation
static "ANIMATION_FIRECHARGE": $Animation
static "ANIMATION_ROAR": $Animation
static "ANIMATION_SHAKEPREY": $Animation
static "ANIMATION_SPEAK": $Animation
static "ANIMATION_TAILWHACK": $Animation
static "ANIMATION_WINGBLAST": $Animation
static readonly "FLIGHT_CHANCE_PER_TICK": integer
static readonly "growth_stage_1": float[]
static readonly "growth_stage_2": float[]
static readonly "growth_stage_3": float[]
static readonly "growth_stage_4": float[]
static readonly "growth_stage_5": float[]

constructor(entityType0: $EntityType$$Type<any>, level1: $Level$$Type, dragonType2: $DragonType$$Type, double3: double, double4: double, double5: double, double6: double, double7: double, double8: double)

public "alwaysAccepts"(): boolean
public "attack"(boolean0: boolean): void
public "attack"(hp: float): void
public static "bakeAttributes"(): $AttributeSupplier$Builder
public "breakBlock"(blockPos0: $BlockPos$$Type): void
public "breakBlocks"(boolean0: boolean): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDestroyBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canMove"(): boolean
public "canPositionBeSeen"(double0: double, double1: double, double2: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "containerChanged"(container0: $Container$$Type): void
public "createEgg"(entityDragonBase0: $EntityDragonBase$$Type): $EntityDragonEgg
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "decrementDragonPitch"(float0: float): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dismount"(boolean0: boolean): void
public "doesWantToLand"(): boolean
public "down"(boolean0: boolean): void
public "dropArmor"(): void
public "eatFoodBonus"(itemStack0: $ItemStack$$Type): void
public "fliesLikeElytra"(): boolean
public "foodEaten"(is: $ItemStack$$Type): void
public "getAgeInDays"(): integer
public "getAgeInTicks"(): integer
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "getAnimation"(): $Animation
public "getAnimationTick"(): integer
public "getAnimations"(): $Animation[]
public "getArmorOrdinal"(itemStack0: $ItemStack$$Type): integer
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBabyFireSound"(): $SoundEvent
public "getBlock"(): $BlockContainerJS
public "getBloodItem"(): $Item
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCommand"(): integer
public "getContainerSize"(): integer
public "getControlState"(): byte
public "getCustomPose"(): string
public "getDeadLootTable"(): $ResourceLocation
public "getDeathStage"(): integer
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getDistanceSquared"(vec30: $Vec3$$Type): float
public "getDragonPitch"(): float
public "getDragonStage"(): integer
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
public "getEscortPosition"(): $BlockPos
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFleshItem"(): $Item
public "getFlightSpeedModifier"(): double
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeadPosition"(): $Vec3
public "getHeartItem"(): $ItemLike
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getHomeDimensionName"(): string
public "getHunger"(): integer
public "getItem"(): $ItemStack
public "getItemFromLootTable"(): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMenuProvider"(): $MenuProvider
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOwner"(): $LivingEntity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getRenderSize"(): float
public "getRiderPosition"(): $Vec3
public "getRidingPlayer"(): $Player
public "getRoarSound"(): $SoundEvent
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSkull"(): $ItemStack
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStartMetaForType"(): integer
public "getSummoningCrystal"(): $Item
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVariant"(): integer
public "getVariantEgg"(int0: integer): $Item
public "getVariantName"(int0: integer): string
public "getVariantScale"(int0: integer): $Item
public "getXZNavSize"(): float
public "getYNavSize"(): integer
public "getYSpeedMod"(): double
public "growDragon"(int0: integer): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasFlightClearance"(): boolean
public "hasInventoryChanged"(container0: $Container$$Type): boolean
public "incrementDragonPitch"(float0: float): void
public "isActuallyBreathingFire"(): boolean
public "isAgingDisabled"(): boolean
public "isAiDisabled"(): boolean
public "isAllowedToTriggerFlight"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isAttacking"(): boolean
public "isBeyondHeight"(): boolean
public "isBlinking"(): boolean
public "isBlockExplicitlyNotPassable"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
public "isBlockExplicitlyPassable"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, blockPos2: $BlockPos$$Type): boolean
public "isBoundToCrystal"(): boolean
public "isBreathingFire"(): boolean
public "isChained"(): boolean
public "isDirectPathBetweenPoints"(vec30: $Vec3$$Type, vec31: $Vec3$$Type): boolean
public "isDirectPathBetweenPoints"(entity0: $Entity$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): boolean
public "isDismounting"(): boolean
public "isDiving"(): boolean
public "isDynamicLightEnabledH"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFlying"(): boolean
public "isFrame"(): boolean
public "isFuelingForge"(): boolean
public "isGoingDown"(): boolean
public "isGoingUp"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isHovering"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMale"(): boolean
public "isMobDead"(): boolean
public "isModelDead"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPart"(entity0: $Entity$$Type): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRidingPlayer"(player0: $Player$$Type): boolean
public "isSkeletal"(): boolean
public "isSmallerThanBlock"(): boolean
public "isStriking"(): boolean
public "isTackling"(): boolean
public "isTargetBlocked"(vec30: $Vec3$$Type): boolean
public "isTeen"(): boolean
public "isTimeToWake"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "m_19956_"(entity0: $Entity$$Type, moveFunction1: $Entity$MoveFunction$$Type): void
public "m_6107_"(): boolean
public "m_6125_"(): boolean
public "m_7341_"(entity0: $Entity$$Type): boolean
public "maxSearchNodes"(): integer
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "onHearFlute"(player0: $Player$$Type): void
public "openInventory"(player0: $Player$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "randomizeAttacks"(): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTraceRider"(entity0: $Entity$$Type, double1: double, float2: float): $HitResult
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "removeParts"(): void
public "resetParts"(float0: float): void
public "riderShootFire"(entity0: $Entity$$Type): void
public "roar"(): void
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
public "serializeNBT"(): $CompoundTag
public "setAgeInDays"(int0: integer): void
public "setAgeInTicks"(int0: integer): void
public "setAgingDisabled"(boolean0: boolean): void
public "setAnimation"(animation0: $Animation$$Type): void
public "setAnimationTick"(int0: integer): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setBreathingFire"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCommand"(int0: integer): void
public "setConfigurableAttributes"(): void
public "setControlState"(byte0: byte): void
public "setCrystalBound"(boolean0: boolean): void
public "setCustomPose"(string0: string): void
public "setDeathStage"(int0: integer): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDragonPitch"(float0: float): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFlying"(boolean0: boolean): void
public "setGender"(boolean0: boolean): void
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setHexereiDynamicLightEnabled"(boolean0: boolean): void
public "setHovering"(boolean0: boolean): void
public "setHunger"(int0: integer): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setModelDead"(boolean0: boolean): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTackling"(boolean0: boolean): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(int0: integer): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldAnimalsFear"(entity0: $Entity$$Type): boolean
public "shouldFear"(): boolean
public "shouldRenderEyes"(): boolean
public "shouldTPtoOwner"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnGroundEffects"(): void
public "spawnItemCrackParticles"(item0: $Item$$Type): void
public "stimulateFire"(double0: double, double1: double, double2: double, int3: integer): void
public "strike"(boolean0: boolean): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public "tryScorchTarget"(): void
public "up"(boolean0: boolean): void
public "updateCheckPlayer"(): void
public "updateParts"(): void
public "updateRider"(): void
public "updateRiding"(entity0: $Entity$$Type): void
public "useFlyingPathFinder"(): boolean
get "airAttack"(): $IafDragonAttacks$Air
set "airAttack"(value: $IafDragonAttacks$Air$$Type)
get "allowLocalMotionControl"(): boolean
set "allowLocalMotionControl"(value: boolean)
get "allowMousePitchControl"(): boolean
set "allowMousePitchControl"(value: boolean)
get "armorResLoc"(): string
set "armorResLoc"(value: string)
get "burnParticleX"(): double
set "burnParticleX"(value: double)
get "burnParticleY"(): double
set "burnParticleY"(value: double)
get "burnParticleZ"(): double
set "burnParticleZ"(value: double)
get "burnProgress"(): integer
set "burnProgress"(value: integer)
get "burningTarget"(): $BlockPos
set "burningTarget"(value: $BlockPos$$Type)
get "diveProgress"(): float
set "diveProgress"(value: float)
get "dragonInventory"(): $SimpleContainer
set "dragonInventory"(value: $SimpleContainer$$Type)
get "dragonType"(): $DragonType
set "dragonType"(value: $DragonType$$Type)
get "fireBreathProgress"(): float
set "fireBreathProgress"(value: float)
get "fireStopTicks"(): integer
set "fireStopTicks"(value: integer)
get "flightCycle"(): integer
set "flightCycle"(value: integer)
get "flightManager"(): $IafDragonFlightManager
set "flightManager"(value: $IafDragonFlightManager$$Type)
get "flyProgress"(): float
set "flyProgress"(value: float)
get "flyTicks"(): integer
set "flyTicks"(value: integer)
get "groundAttack"(): $IafDragonAttacks$Ground
set "groundAttack"(value: $IafDragonAttacks$Ground$$Type)
get "growth_stages"(): float[][]
set "growth_stages"(value: float[][])
get "hasHomePosition"(): boolean
set "hasHomePosition"(value: boolean)
get "homePos"(): $HomePosition
set "homePos"(value: $HomePosition$$Type)
get "hoverProgress"(): float
set "hoverProgress"(value: float)
get "hoverTicks"(): integer
set "hoverTicks"(value: integer)
get "isDaytime"(): boolean
set "isDaytime"(value: boolean)
get "isSwimming"(): boolean
set "isSwimming"(value: boolean)
get "legSolver"(): $LegSolverQuadruped
set "legSolver"(value: $LegSolverQuadruped$$Type)
get "logic"(): $IafDragonLogic
set "logic"(value: $IafDragonLogic$$Type)
get "lookingForRoostAIFlag"(): boolean
set "lookingForRoostAIFlag"(value: boolean)
get "maximumArmor"(): double
set "maximumArmor"(value: double)
get "maximumDamage"(): double
set "maximumDamage"(value: double)
get "maximumHealth"(): double
set "maximumHealth"(value: double)
get "maximumSpeed"(): double
set "maximumSpeed"(value: double)
get "minimumArmor"(): double
set "minimumArmor"(value: double)
get "minimumDamage"(): double
set "minimumDamage"(value: double)
get "minimumHealth"(): double
set "minimumHealth"(value: double)
get "minimumSpeed"(): double
set "minimumSpeed"(value: double)
get "modelDeadProgress"(): float
set "modelDeadProgress"(value: float)
get "navigatorType"(): integer
set "navigatorType"(value: integer)
get "pitch_buffer"(): $IFChainBuffer
set "pitch_buffer"(value: $IFChainBuffer$$Type)
get "pitch_buffer_body"(): $IFChainBuffer
set "pitch_buffer_body"(value: $IFChainBuffer$$Type)
get "prevAnimationProgresses"(): float[]
set "prevAnimationProgresses"(value: float[])
get "prevArmorResLoc"(): string
set "prevArmorResLoc"(value: string)
get "prevDiveProgress"(): float
set "prevDiveProgress"(value: float)
get "prevDragonPitch"(): float
set "prevDragonPitch"(value: float)
get "prevFireBreathProgress"(): float
set "prevFireBreathProgress"(value: float)
get "prevModelDeadProgress"(): float
set "prevModelDeadProgress"(value: float)
get "prevSwimProgress"(): float
set "prevSwimProgress"(value: float)
get "ridingProgress"(): float
set "ridingProgress"(value: float)
get "roll_buffer"(): $IFChainBuffer
set "roll_buffer"(value: $IFChainBuffer$$Type)
get "sitProgress"(): float
set "sitProgress"(value: float)
get "sleepProgress"(): float
set "sleepProgress"(value: float)
get "spacebarTicks"(): integer
set "spacebarTicks"(value: integer)
get "swimCycle"(): integer
set "swimCycle"(value: integer)
get "swimProgress"(): float
set "swimProgress"(value: float)
get "tackleProgress"(): float
set "tackleProgress"(value: float)
get "tacklingTicks"(): integer
set "tacklingTicks"(value: integer)
get "tail_buffer"(): $ChainBuffer
set "tail_buffer"(value: $ChainBuffer$$Type)
get "ticksStill"(): integer
set "ticksStill"(value: integer)
get "ticksSwiming"(): integer
set "ticksSwiming"(value: integer)
get "turn_buffer"(): $ReversedBuffer
set "turn_buffer"(value: $ReversedBuffer$$Type)
get "usingGroundAttack"(): boolean
set "usingGroundAttack"(value: boolean)
get "walkCycle"(): integer
set "walkCycle"(value: integer)
get "ageInDays"(): integer
get "ageInTicks"(): integer
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
get "babyFireSound"(): $SoundEvent
get "block"(): $BlockContainerJS
get "bloodItem"(): $Item
get "chestArmorItem"(): $ItemStack
get "command"(): integer
get "containerSize"(): integer
get "controlState"(): byte
get "customPose"(): string
get "deadLootTable"(): $ResourceLocation
get "deathStage"(): integer
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "dragonPitch"(): float
get "dragonStage"(): integer
get "escortPosition"(): $BlockPos
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "fleshItem"(): $Item
get "flightSpeedModifier"(): double
get "headArmorItem"(): $ItemStack
get "headPosition"(): $Vec3
get "heartItem"(): $ItemLike
get "homeDimensionName"(): string
get "hunger"(): integer
get "item"(): $ItemStack
get "itemFromLootTable"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "menuProvider"(): $MenuProvider
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "owner"(): $LivingEntity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "renderSize"(): float
get "riderPosition"(): $Vec3
get "ridingPlayer"(): $Player
get "roarSound"(): $SoundEvent
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "skull"(): $ItemStack
get "startMetaForType"(): integer
get "summoningCrystal"(): $Item
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "variant"(): integer
get "xZNavSize"(): float
get "yNavSize"(): integer
get "ySpeedMod"(): double
get "actuallyBreathingFire"(): boolean
get "agingDisabled"(): boolean
get "aiDisabled"(): boolean
get "allowedToTriggerFlight"(): boolean
get "ambientCreature"(): boolean
get "animal"(): boolean
get "attacking"(): boolean
get "beyondHeight"(): boolean
get "blinking"(): boolean
get "boundToCrystal"(): boolean
get "breathingFire"(): boolean
get "chained"(): boolean
get "dismounting"(): boolean
get "diving"(): boolean
get "dynamicLightEnabledH"(): boolean
get "flying"(): boolean
get "frame"(): boolean
get "fuelingForge"(): boolean
get "goingDown"(): boolean
get "goingUp"(): boolean
get "hovering"(): boolean
get "living"(): boolean
get "male"(): boolean
get "mobDead"(): boolean
get "modelDead"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "skeletal"(): boolean
get "smallerThanBlock"(): boolean
get "striking"(): boolean
get "tackling"(): boolean
get "teen"(): boolean
get "timeToWake"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "ageInDays"(value: integer)
set "ageInTicks"(value: integer)
set "agingDisabled"(value: boolean)
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
set "breathingFire"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "command"(value: integer)
set "controlState"(value: byte)
set "crystalBound"(value: boolean)
set "customPose"(value: string)
set "deathStage"(value: integer)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "dragonPitch"(value: float)
set "feetArmorItem"(value: $ItemStack$$Type)
set "flying"(value: boolean)
set "gender"(value: boolean)
set "headArmorItem"(value: $ItemStack$$Type)
set "hexereiDynamicLightEnabled"(value: boolean)
set "hovering"(value: boolean)
set "hunger"(value: integer)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "modelDead"(value: boolean)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "tackling"(value: boolean)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

