declare module "packages/net/minecraft/world/item/context/$BlockPlaceContext" {
import { $UseOnContext, $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Direction, $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"

export class $BlockPlaceContext extends $UseOnContext {
constructor(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, itemStack3: $ItemStack$$Type, blockHitResult4: $BlockHitResult$$Type)
constructor(useOnContext0: $UseOnContext$$Type)
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, itemStack2: $ItemStack$$Type, blockHitResult3: $BlockHitResult$$Type)

public static "at"(blockPlaceContext0: $BlockPlaceContext$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): $BlockPlaceContext
public "canPlace"(): boolean
public "getNearestLookingDirection"(): $Direction
public "getNearestLookingDirections"(): $Direction[]
public "getNearestLookingVerticalDirection"(): $Direction
public "handler$ejp000$fixNotAccountingForNullPlayer1"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ejp000$fixNotAccountingForNullPlayer2"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ejp000$fixNotAccountingForNullPlayer3"(cir: $CallbackInfoReturnable$$Type<any>): void
public "replacingClickedOnBlock"(): boolean
get "replaceClicked"(): boolean
set "replaceClicked"(value: boolean)
get "nearestLookingDirection"(): $Direction
get "nearestLookingDirections"(): $Direction[]
get "nearestLookingVerticalDirection"(): $Direction
}
}

declare module "packages/net/minecraft/world/item/context/$UseOnContext" {
import { $UseOnContextAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$UseOnContextAccessor"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $InteractionHand, $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $Direction } from "packages/net/minecraft/core/$Direction"
import { $BlockHitResult, $BlockHitResult$$Type } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

export class $UseOnContext implements $UseOnContextAccessor {
constructor(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, blockHitResult2: $BlockHitResult$$Type)
constructor(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type, itemStack3: $ItemStack$$Type, blockHitResult4: $BlockHitResult$$Type)

public "getClickLocation"(): $Vec3
public "getClickedFace"(): $Direction
public "getClickedPos"(): $BlockPos
public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getHorizontalDirection"(): $Direction
public "getItemInHand"(): $ItemStack
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRotation"(): float
public "isInside"(): boolean
public "isSecondaryUseActive"(): boolean
get "clickLocation"(): $Vec3
get "clickedFace"(): $Direction
get "clickedPos"(): $BlockPos
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "horizontalDirection"(): $Direction
get "itemInHand"(): $ItemStack
get "level"(): $Level
get "player"(): $Player
get "rotation"(): float
get "inside"(): boolean
get "secondaryUseActive"(): boolean
}
}

