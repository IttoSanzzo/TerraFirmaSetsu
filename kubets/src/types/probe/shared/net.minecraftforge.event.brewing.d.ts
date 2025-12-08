declare module "packages/net/minecraftforge/event/brewing/$PotionBrewEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $PotionBrewEvent extends $Event {
constructor()

public "getItem"(int0: integer): $ItemStack
public "getLength"(): integer
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
get "length"(): integer
}
}

declare module "packages/net/minecraftforge/event/brewing/$PotionBrewEvent$Post" {
import { $PotionBrewEvent } from "packages/net/minecraftforge/event/brewing/$PotionBrewEvent"
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $PotionBrewEvent$Post extends $PotionBrewEvent {
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)
constructor()

}
}

declare module "packages/net/minecraftforge/event/brewing/$PlayerBrewedPotionEvent" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerBrewedPotionEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getStack"(): $ItemStack
get "stack"(): $ItemStack
}
}

declare module "packages/net/minecraftforge/event/brewing/$PotionBrewEvent$Pre" {
import { $PotionBrewEvent } from "packages/net/minecraftforge/event/brewing/$PotionBrewEvent"
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $PotionBrewEvent$Pre extends $PotionBrewEvent {
constructor()
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)

}
}

