declare module "packages/net/minecraftforge/items/wrapper/$CombinedInvWrapper" {
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IItemHandlerModifiable, $IItemHandlerModifiable$$Type } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"

export class $CombinedInvWrapper implements $IItemHandlerModifiable {
constructor(...iItemHandlerModifiable0s: $IItemHandlerModifiable$$Type[])

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "setChanged"(): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "packages/net/minecraftforge/items/$IItemHandler" {
import { $InventoryKJS } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export interface $IItemHandler extends $InventoryKJS {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(i: integer): $ItemStack
"getStackInSlot"(int0: integer): $ItemStack
"getWidth"(): integer
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandler {
const probejs$$marker: never
}
export abstract class $IItemHandler$$Static implements $IItemHandler {
}
}

declare module "packages/net/minecraftforge/items/$ItemStackHandler" {
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $List } from "packages/java/util/$List"
import { $INBTSerializable } from "packages/net/minecraftforge/common/util/$INBTSerializable"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandlerModifiable } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<$CompoundTag> {
constructor(nonNullList0: $NonNullList$$Type<$ItemStack$$Type>)
constructor(int0: integer)
constructor()

public "asContainer"(): $Container
public "clear"(ingredient: $Ingredient$$Type): void
public "clear"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getHeight"(): integer
public "getSlotLimit"(int0: integer): integer
public "getSlotLimit"(i: integer): integer
public "getSlots"(): integer
public "getSlots"(): integer
public "getStackInSlot"(int0: integer): $ItemStack
public "getStackInSlot"(i: integer): $ItemStack
public "getWidth"(): integer
public "insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $IItemHandler
public "serializeNBT"(): $CompoundTag
public "setChanged"(): void
public "setSize"(int0: integer): void
public "setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
set "size"(value: integer)
}
}

declare module "packages/net/minecraftforge/items/$IItemHandlerModifiable" {
import { $List } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container } from "packages/net/minecraft/world/$Container"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $IItemHandler } from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerModifiable extends $IItemHandler {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(i: integer): $ItemStack
"getStackInSlot"(int0: integer): $ItemStack
"getWidth"(): integer
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
export abstract class $IItemHandlerModifiable$$Static implements $IItemHandlerModifiable {
}
}

declare module "packages/net/minecraftforge/items/wrapper/$RecipeWrapper" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IItemHandlerModifiable$$Type } from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $BlockContainerJS } from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Set$$Type } from "packages/java/util/$Set"
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $List } from "packages/java/util/$List"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"

export class $RecipeWrapper implements $Container {
constructor(iItemHandlerModifiable0: $IItemHandlerModifiable$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "countNonEmpty"(): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(ingredient: $Ingredient$$Type): integer
public "find"(): integer
public "getAllItems"(): $List<$ItemStack>
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, int2: integer): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

