declare module "packages/dev/kosmx/playerAnim/api/$TransformType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $TransformType extends $Enum<$TransformType> {
static readonly "BEND": $TransformType
static readonly "POSITION": $TransformType
static readonly "ROTATION": $TransformType

public static "valueOf"(name: string): $TransformType
public static "values"(): $TransformType[]
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IAnimatedPlayer" {
import { $AnimationApplier } from "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier"
import { $IPlayer } from "packages/dev/kosmx/playerAnim/api/$IPlayer"
import { $IAnimation, $IAnimation$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import { $AnimationStack } from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAnimatedPlayer extends $IPlayer {
/** @deprecated */
"getAnimation"(): $AnimationApplier
"getAnimationStack"(): $AnimationStack
"playerAnimator_getAnimation"(resourceLocation0: $ResourceLocation$$Type): $IAnimation
"playerAnimator_getAnimation"(): $AnimationApplier
"playerAnimator_setAnimation"(resourceLocation0: $ResourceLocation$$Type, iAnimation1: $IAnimation$$Type): $IAnimation
get "animation"(): $AnimationApplier
get "animationStack"(): $AnimationStack
}

export namespace $IAnimatedPlayer {
const probejs$$marker: never
}
export abstract class $IAnimatedPlayer$$Static implements $IAnimatedPlayer {
}
}

declare module "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack" {
import { $TransformType$$Type } from "packages/dev/kosmx/playerAnim/api/$TransformType"
import { $IAnimation, $IAnimation$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import { $FirstPersonMode } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import { $FirstPersonConfiguration } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import { $Vec3f, $Vec3f$$Type } from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export class $AnimationStack implements $IAnimation {
constructor()

public "addAnimLayer"(priority: integer, layer: $IAnimation$$Type): void
public "get3DTransform"(modelName: string, type: $TransformType$$Type, tickDelta: float, value0: $Vec3f$$Type): $Vec3f
public "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
public "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
public "isActive"(): boolean
public "removeLayer"(layerLevel: integer): boolean
public "removeLayer"(layer: $IAnimation$$Type): boolean
public "setupAnim"(tickDelta: float): void
public "tick"(): void
get "active"(): boolean
set "upAnim"(value: float)
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<L, R> {
constructor(left: L, right: R)

public "getLeft"(): L
public "getRight"(): R
get "left"(): L
get "right"(): R
}
}

declare module "packages/dev/kosmx/playerAnim/api/layered/$IAnimation" {
import { $TransformType$$Type } from "packages/dev/kosmx/playerAnim/api/$TransformType"
import { $FirstPersonMode } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import { $FirstPersonConfiguration } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import { $Vec3f, $Vec3f$$Type } from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export interface $IAnimation {
"get3DTransform"(string0: string, transformType1: $TransformType$$Type, float2: float, vec3f3: $Vec3f$$Type): $Vec3f
"getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
"getFirstPersonMode"(tickDelta: float): $FirstPersonMode
"isActive"(): boolean
"setupAnim"(float0: float): void
"tick"(): void
get "active"(): boolean
set "upAnim"(value: float)
}

export namespace $IAnimation {
const probejs$$marker: never
}
export abstract class $IAnimation$$Static implements $IAnimation {
}
}

declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FirstPersonMode extends $Enum<$FirstPersonMode> {
static readonly "DISABLED": $FirstPersonMode
static readonly "NONE": $FirstPersonMode
static readonly "THIRD_PERSON_MODEL": $FirstPersonMode
static readonly "VANILLA": $FirstPersonMode

public "isEnabled"(): boolean
public static "isFirstPersonPass"(): boolean
public static "setFirstPersonPass"(newValue: boolean): void
public static "valueOf"(name: string): $FirstPersonMode
public static "values"(): $FirstPersonMode[]
get "enabled"(): boolean
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IMutableModel" {
import { $AnimationProcessor, $AnimationProcessor$$Type } from "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor"
import { $SetableSupplier, $SetableSupplier$$Type } from "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier"

export interface $IMutableModel {
"getEmoteSupplier"(): $SetableSupplier<$AnimationProcessor>
"setEmoteSupplier"(setableSupplier0: $SetableSupplier$$Type<$AnimationProcessor$$Type>): void
get "emoteSupplier"(): $SetableSupplier<$AnimationProcessor>
set "emoteSupplier"(value: $SetableSupplier$$Type<$AnimationProcessor$$Type>)
}

export namespace $IMutableModel {
const probejs$$marker: never
}
export abstract class $IMutableModel$$Static implements $IMutableModel {
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpperPartHelper {
"isUpperPart"(): boolean
"setUpperPart"(boolean0: boolean): void
get "upperPart"(): boolean
set "upperPart"(value: boolean)
}

export namespace $IUpperPartHelper {
const probejs$$marker: never
}
export abstract class $IUpperPartHelper$$Static implements $IUpperPartHelper {
}
}

declare module "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor" {
import { $TransformType$$Type } from "packages/dev/kosmx/playerAnim/api/$TransformType"
import { $IAnimation$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import { $Pair } from "packages/dev/kosmx/playerAnim/core/util/$Pair"
import { $FirstPersonMode } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonMode"
import { $FirstPersonConfiguration } from "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration"
import { $Vec3f, $Vec3f$$Type } from "packages/dev/kosmx/playerAnim/core/util/$Vec3f"

export class $AnimationProcessor {
constructor(animation: $IAnimation$$Type)

public "get3DTransform"(modelName: string, type: $TransformType$$Type, value0: $Vec3f$$Type): $Vec3f
public "getBend"(modelName: string): $Pair<float, float>
public "getFirstPersonConfiguration"(): $FirstPersonConfiguration
public "getFirstPersonMode"(): $FirstPersonMode
public "isActive"(): boolean
public "isFirstPersonAnimationDisabled"(): boolean
public "setTickDelta"(tickDelta: float): void
public "tick"(): void
get "firstPersonConfiguration"(): $FirstPersonConfiguration
get "firstPersonMode"(): $FirstPersonMode
get "active"(): boolean
get "firstPersonAnimationDisabled"(): boolean
set "tickDelta"(value: float)
}
}

declare module "packages/dev/kosmx/playerAnim/api/$IPlayer" {
import { $AnimationStack } from "packages/dev/kosmx/playerAnim/api/layered/$AnimationStack"

export interface $IPlayer {
"getAnimationStack"(): $AnimationStack
get "animationStack"(): $AnimationStack
}

export namespace $IPlayer {
const probejs$$marker: never
}
export abstract class $IPlayer$$Static implements $IPlayer {
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$SetableSupplier" {
import { $Supplier } from "packages/java/util/function/$Supplier"

export class $SetableSupplier<T> implements $Supplier<T> {
constructor()

public "get"(): T
public "set"(object: T): void
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vector3<N extends number> {
constructor(x: N, y: N, z: N)

public "getX"(): N
public "getY"(): N
public "getZ"(): N
get "x"(): N
get "y"(): N
get "z"(): N
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3f" {
import { $Vector3 } from "packages/dev/kosmx/playerAnim/core/util/$Vector3"
import { $Vec3d$$Type } from "packages/dev/kosmx/playerAnim/core/util/$Vec3d"

export class $Vec3f extends $Vector3<float> {
static readonly "ZERO": $Vec3f

constructor(x: float, y: float, z: float)

public "add"(other: $Vec3f$$Type): $Vec3f
public "crossProduct"(other: $Vec3f$$Type): $Vec3f
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "dotProduct"(other: $Vec3f$$Type): float
public "scale"(scalar: float): $Vec3f
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
public "subtract"(rhs: $Vec3f$$Type): $Vec3f
}
}

declare module "packages/dev/kosmx/playerAnim/core/util/$Vec3d" {
import { $Vector3 } from "packages/dev/kosmx/playerAnim/core/util/$Vector3"

export class $Vec3d extends $Vector3<double> {
constructor(x: double, y: double, z: double)

public "add"(other: $Vec3d$$Type): $Vec3d
public "crossProduct"(other: $Vec3d$$Type): $Vec3d
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "dotProduct"(other: $Vec3d$$Type): double
public "scale"(scalar: double): $Vec3d
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
public "subtract"(rhs: $Vec3d$$Type): $Vec3d
}
}

declare module "packages/dev/kosmx/playerAnim/mixin/firstPerson/$CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessor {
"setDetached"(boolean0: boolean): void
set "detached"(value: boolean)
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
export abstract class $CameraAccessor$$Static implements $CameraAccessor {
}
}

declare module "packages/dev/kosmx/playerAnim/api/firstPerson/$FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FirstPersonConfiguration {
constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean)
constructor()

public "isShowLeftArm"(): boolean
public "isShowLeftItem"(): boolean
public "isShowRightArm"(): boolean
public "isShowRightItem"(): boolean
public "setShowLeftArm"(showLeftArm: boolean): $FirstPersonConfiguration
public "setShowLeftItem"(showLeftItem: boolean): $FirstPersonConfiguration
public "setShowRightArm"(showRightArm: boolean): $FirstPersonConfiguration
public "setShowRightItem"(showRightItem: boolean): $FirstPersonConfiguration
get "showLeftArm"(): boolean
get "showLeftItem"(): boolean
get "showRightArm"(): boolean
get "showRightItem"(): boolean
set "showLeftArm"(value: boolean)
set "showLeftItem"(value: boolean)
set "showRightArm"(value: boolean)
set "showRightItem"(value: boolean)
}
}

declare module "packages/dev/kosmx/playerAnim/impl/animation/$AnimationApplier" {
import { $AnimationProcessor } from "packages/dev/kosmx/playerAnim/core/impl/$AnimationProcessor"
import { $IAnimation$$Type } from "packages/dev/kosmx/playerAnim/api/layered/$IAnimation"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $AnimationApplier extends $AnimationProcessor {
constructor(animation: $IAnimation$$Type)

public "updatePart"(partName: string, part: $ModelPart$$Type): void
}
}

declare module "packages/dev/kosmx/playerAnim/impl/$IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPlayerModel {
"playerAnimator_prepForFirstPersonRender"(): void
}

export namespace $IPlayerModel {
const probejs$$marker: never
}
export abstract class $IPlayerModel$$Static implements $IPlayerModel {
}
}

