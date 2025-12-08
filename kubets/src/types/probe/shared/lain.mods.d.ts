declare module "packages/lain/mods/cos/api/inventory/$CAStacksBase" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStackHandler } from "packages/net/minecraftforge/items/$ItemStackHandler"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"

export class $CAStacksBase extends $ItemStackHandler {
constructor()
constructor(int0: integer)

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "forEachHidden"(biConsumer0: $BiConsumer$$Type<string, string>): void
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isHidden"(string0: string, string1: string): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "isSkinArmor"(int0: integer): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setHidden"(string0: string, string1: string, boolean2: boolean): boolean
public "setSkinArmor"(int0: integer, boolean1: boolean): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/lain/mods/cos/api/event/$CosArmorDeathDrops" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $CAStacksBase, $CAStacksBase$$Type } from "packages/lain/mods/cos/api/inventory/$CAStacksBase"

export class $CosArmorDeathDrops extends $Event {
constructor()
constructor(player0: $Player$$Type, cAStacksBase1: $CAStacksBase$$Type)

public "getCAStacks"(): $CAStacksBase
public "getEntityPlayer"(): $Player
get "cAStacks"(): $CAStacksBase
get "entityPlayer"(): $Player
}
}

