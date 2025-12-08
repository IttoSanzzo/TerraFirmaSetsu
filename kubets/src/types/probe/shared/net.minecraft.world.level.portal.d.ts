declare module "packages/net/minecraft/world/level/portal/$PortalShape" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $BlockUtil$FoundRectangle$$Type } from "packages/net/minecraft/$BlockUtil$FoundRectangle"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $Optional } from "packages/java/util/$Optional"
import { $EntityDimensions$$Type } from "packages/net/minecraft/world/entity/$EntityDimensions"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PortalInfo } from "packages/net/minecraft/world/level/portal/$PortalInfo"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $PortalShape {
static readonly "MAX_HEIGHT": integer
static readonly "MAX_WIDTH": integer

constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axis2: $Direction$Axis$$Type)

public "createPortalBlocks"(): void
public static "createPortalInfo"(serverLevel0: $ServerLevel$$Type, foundRectangle1: $BlockUtil$FoundRectangle$$Type, axis2: $Direction$Axis$$Type, vec33: $Vec3$$Type, entity4: $Entity$$Type, vec35: $Vec3$$Type, float6: float, float7: float): $PortalInfo
public static "findEmptyPortalShape"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, axis2: $Direction$Axis$$Type): $Optional<$PortalShape>
public static "findPortalShape"(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, predicate2: $Predicate$$Type<$PortalShape$$Type>, axis3: $Direction$Axis$$Type): $Optional<$PortalShape>
public static "getRelativePosition"(foundRectangle0: $BlockUtil$FoundRectangle$$Type, axis1: $Direction$Axis$$Type, vec32: $Vec3$$Type, entityDimensions3: $EntityDimensions$$Type): $Vec3
public "isComplete"(): boolean
public "isValid"(): boolean
get "complete"(): boolean
get "valid"(): boolean
}
}

declare module "packages/net/minecraft/world/level/portal/$PortalForcer" {
import { $BlockUtil$FoundRectangle } from "packages/net/minecraft/$BlockUtil$FoundRectangle"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $WorldBorder$$Type } from "packages/net/minecraft/world/level/border/$WorldBorder"
import { $Optional } from "packages/java/util/$Optional"
import { $Direction$Axis$$Type } from "packages/net/minecraft/core/$Direction$Axis"
import { $ServerLevel$$Type } from "packages/net/minecraft/server/level/$ServerLevel"
import { $ITeleporter } from "packages/net/minecraftforge/common/util/$ITeleporter"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $PortalInfo } from "packages/net/minecraft/world/level/portal/$PortalInfo"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $PortalForcer implements $ITeleporter {
constructor(serverLevel0: $ServerLevel$$Type)

public "createPortal"(blockPos0: $BlockPos$$Type, axis1: $Direction$Axis$$Type): $Optional<$BlockUtil$FoundRectangle>
public "findPortalAround"(blockPos0: $BlockPos$$Type, boolean1: boolean, worldBorder2: $WorldBorder$$Type): $Optional<$BlockUtil$FoundRectangle>
public "getPortalInfo"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, function2: $Function$$Type<$ServerLevel$$Type, $PortalInfo>): $PortalInfo
public "isVanilla"(): boolean
public "placeEntity"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type, float3: float, function4: $Function$$Type<boolean, $Entity>): $Entity
public "playTeleportSound"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type, serverLevel2: $ServerLevel$$Type): boolean
get "vanilla"(): boolean
}
}

declare module "packages/net/minecraft/world/level/portal/$PortalInfo" {
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $PortalInfo {
readonly "pos": $Vec3
readonly "speed": $Vec3
readonly "xRot": float
readonly "yRot": float

constructor(vec30: $Vec3$$Type, vec31: $Vec3$$Type, float2: float, float3: float)

}
}

