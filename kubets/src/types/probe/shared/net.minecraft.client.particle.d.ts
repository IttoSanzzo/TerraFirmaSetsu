declare module "packages/net/minecraft/client/particle/$SpriteSet" {
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $TextureAtlasSprite } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $SpriteSet {
"get"(int0: integer, int1: integer): $TextureAtlasSprite
"get"(randomSource0: $RandomSource$$Type): $TextureAtlasSprite
}

export namespace $SpriteSet {
const probejs$$marker: never
}
export abstract class $SpriteSet$$Static implements $SpriteSet {
}
}

declare module "packages/net/minecraft/client/particle/$SingleQuadParticle" {
import { $Particle } from "packages/net/minecraft/client/particle/$Particle"

export class $SingleQuadParticle extends $Particle {
public "getQuadSize"(float0: float): float
}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine$MutableSpriteSet" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $SpriteSet } from "packages/net/minecraft/client/particle/$SpriteSet"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ParticleEngine$MutableSpriteSet implements $SpriteSet {
public "get"(int0: integer, int1: integer): $TextureAtlasSprite
public "get"(randomSource0: $RandomSource$$Type): $TextureAtlasSprite
public "rebind"(list0: $List$$Type<$TextureAtlasSprite$$Type>): void
get "sprites"(): $List<$TextureAtlasSprite>
set "sprites"(value: $List$$Type<$TextureAtlasSprite$$Type>)
}
}

declare module "packages/net/minecraft/client/particle/$ParticleProvider$Sprite" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $TextureSheetParticle } from "packages/net/minecraft/client/particle/$TextureSheetParticle"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
"createParticle"(t0: T, clientLevel1: $ClientLevel$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $TextureSheetParticle
}

export namespace $ParticleProvider$Sprite {
const probejs$$marker: never
}
export abstract class $ParticleProvider$Sprite$$Static<T extends $ParticleOptions> implements $ParticleProvider$Sprite<T> {
}
}

declare module "packages/net/minecraft/client/particle/$Particle" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ParticleRenderType } from "packages/net/minecraft/client/particle/$ParticleRenderType"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Optional } from "packages/java/util/$Optional"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $AABB, $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"
import { $ParticleGroup } from "packages/net/minecraft/core/particles/$ParticleGroup"

export class $Particle {
constructor(clientLevel0: $ClientLevel$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double)

public "getBoundingBox"(): $AABB
public "getLifetime"(): integer
public "getParticleGroup"(): $Optional<$ParticleGroup>
public "getPos"(): $Vec3
public "getRenderType"(): $ParticleRenderType
public "isAlive"(): boolean
public "move"(double0: double, double1: double, double2: double): void
public "remove"(): void
public "render"(vertexConsumer0: $VertexConsumer$$Type, camera1: $Camera$$Type, float2: float): void
public "scale"(float0: float): $Particle
public "setBoundingBox"(aABB0: $AABB$$Type): void
public "setColor"(float0: float, float1: float, float2: float): void
public "setLifetime"(int0: integer): void
public "setParticleSpeed"(double0: double, double1: double, double2: double): void
public "setPos"(double0: double, double1: double, double2: double): void
public "setPower"(float0: float): $Particle
public "shouldCull"(): boolean
public "tick"(): void
get "age"(): integer
set "age"(value: integer)
get "bCol"(): float
set "bCol"(value: float)
get "gCol"(): float
set "gCol"(value: float)
get "rCol"(): float
set "rCol"(value: float)
get "x"(): double
set "x"(value: double)
get "xd"(): double
set "xd"(value: double)
get "y"(): double
set "y"(value: double)
get "yd"(): double
set "yd"(value: double)
get "z"(): double
set "z"(value: double)
get "zd"(): double
set "zd"(value: double)
get "boundingBox"(): $AABB
get "lifetime"(): integer
get "particleGroup"(): $Optional<$ParticleGroup>
get "pos"(): $Vec3
get "renderType"(): $ParticleRenderType
get "alive"(): boolean
set "boundingBox"(value: $AABB$$Type)
set "lifetime"(value: integer)
set "power"(value: float)
}
}

declare module "packages/net/minecraft/client/particle/$TextureSheetParticle" {
import { $SingleQuadParticle } from "packages/net/minecraft/client/particle/$SingleQuadParticle"
import { $SpriteSet$$Type } from "packages/net/minecraft/client/particle/$SpriteSet"

export class $TextureSheetParticle extends $SingleQuadParticle {
public "pickSprite"(spriteSet0: $SpriteSet$$Type): void
public "setSpriteFromAge"(spriteSet0: $SpriteSet$$Type): void
set "spriteFromAge"(value: $SpriteSet$$Type)
}
}

declare module "packages/net/minecraft/client/particle/$ParticleProvider" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Particle } from "packages/net/minecraft/client/particle/$Particle"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleProvider<T extends $ParticleOptions> {
"createParticle"(t0: T, clientLevel1: $ClientLevel$$Type, double2: double, double3: double, double4: double, double5: double, double6: double, double7: double): $Particle
}

export namespace $ParticleProvider {
const probejs$$marker: never
}
export abstract class $ParticleProvider$$Static<T extends $ParticleOptions> implements $ParticleProvider<T> {
}
}

declare module "packages/net/minecraft/client/particle/$ParticleRenderType" {
import { $Tesselator$$Type } from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export interface $ParticleRenderType {
"begin"(bufferBuilder0: $BufferBuilder$$Type, textureManager1: $TextureManager$$Type): void
"end"(tesselator0: $Tesselator$$Type): void
}

export namespace $ParticleRenderType {
const CUSTOM: $ParticleRenderType
const NO_RENDER: $ParticleRenderType
const PARTICLE_SHEET_LIT: $ParticleRenderType
const PARTICLE_SHEET_OPAQUE: $ParticleRenderType
const PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType
const TERRAIN_SHEET: $ParticleRenderType
}
export abstract class $ParticleRenderType$$Static implements $ParticleRenderType {
static readonly "CUSTOM": $ParticleRenderType
static readonly "NO_RENDER": $ParticleRenderType
static readonly "PARTICLE_SHEET_LIT": $ParticleRenderType
static readonly "PARTICLE_SHEET_OPAQUE": $ParticleRenderType
static readonly "PARTICLE_SHEET_TRANSLUCENT": $ParticleRenderType
static readonly "TERRAIN_SHEET": $ParticleRenderType

}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $ParticleManagerAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ParticleManagerAccess"
import { $Particle, $Particle$$Type } from "packages/net/minecraft/client/particle/$Particle"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $ParticleEngine$SpriteParticleRegistration$$Type } from "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration"
import { $Frustum$$Type } from "packages/net/minecraft/client/renderer/culling/$Frustum"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $PhasedParticleEngine } from "packages/net/irisshaders/iris/fantastic/$PhasedParticleEngine"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $ParticleEngineAccessor } from "packages/net/createmod/ponder/mixin/client/accessor/$ParticleEngineAccessor"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ParticleRenderingPhase$$Type } from "packages/net/irisshaders/iris/fantastic/$ParticleRenderingPhase"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ParticleProvider$$Type } from "packages/net/minecraft/client/particle/$ParticleProvider"
import { $TextureAtlas } from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import { $ParticleType$$Type } from "packages/net/minecraft/core/particles/$ParticleType"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $LightTexture$$Type } from "packages/net/minecraft/client/renderer/$LightTexture"
import { $ParticleProvider$Sprite$$Type } from "packages/net/minecraft/client/particle/$ParticleProvider$Sprite"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $ParticleEngine$MutableSpriteSet } from "packages/net/minecraft/client/particle/$ParticleEngine$MutableSpriteSet"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Map } from "packages/java/util/$Map"

export class $ParticleEngine implements $PreparableReloadListener, $PhasedParticleEngine, $ParticleEngineAccessor, $ParticleManagerAccess {
readonly "random": $RandomSource
readonly "spriteSets": $Map<$ResourceLocation, $ParticleEngine$MutableSpriteSet>
readonly "textureAtlas": $TextureAtlas

constructor(clientLevel0: $ClientLevel$$Type, textureManager1: $TextureManager$$Type)

public "add"(particle0: $Particle$$Type): void
public "addBlockHitEffects"(blockPos0: $BlockPos$$Type, blockHitResult1: $BlockHitResult$$Type): void
public "close"(): void
public "countParticles"(): string
public "crack"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): void
public "createParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Particle
public "createTrackingEmitter"(entity0: $Entity$$Type, particleOptions1: $ParticleOptions$$Type, int2: integer): void
public "createTrackingEmitter"(entity0: $Entity$$Type, particleOptions1: $ParticleOptions$$Type): void
public "destroy"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
public "getName"(): string
public "handler$ejj000$inject$crack"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$ejj000$inject$create"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double, callbackInfoReturnable7: $CallbackInfoReturnable$$Type<any>): void
public "handler$ejj000$inject$destroy"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "redirect$ejj000$redirect$particleRegistry"(registry0: $Registry$$Type<any>, object1: any): $ResourceLocation
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, particleProvider1: $ParticleProvider$$Type<T>): void
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, sprite1: $ParticleProvider$Sprite$$Type<T>): void
/** @deprecated */
public "register"<T extends $ParticleOptions>(particleType0: $ParticleType$$Type<T>, spriteParticleRegistration1: $ParticleEngine$SpriteParticleRegistration$$Type<T>): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, lightTexture2: $LightTexture$$Type, camera3: $Camera$$Type, float4: float, frustum5: $Frustum$$Type): void
/** @deprecated */
public "render"(poseStack0: $PoseStack$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, lightTexture2: $LightTexture$$Type, camera3: $Camera$$Type, float4: float): void
public "setLevel"(clientLevel0: $ClientLevel$$Type): void
public "setParticleRenderingPhase"(phase: $ParticleRenderingPhase$$Type): void
public "tick"(): void
get "name"(): string
set "level"(value: $ClientLevel$$Type)
set "particleRenderingPhase"(value: $ParticleRenderingPhase$$Type)
}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration" {
import { $ParticleProvider } from "packages/net/minecraft/client/particle/$ParticleProvider"
import { $SpriteSet$$Type } from "packages/net/minecraft/client/particle/$SpriteSet"
import { $ParticleOptions } from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
"create"(spriteSet0: $SpriteSet$$Type): $ParticleProvider<T>
}

export namespace $ParticleEngine$SpriteParticleRegistration {
const probejs$$marker: never
}
export abstract class $ParticleEngine$SpriteParticleRegistration$$Static<T extends $ParticleOptions> implements $ParticleEngine$SpriteParticleRegistration<T> {
}
}

