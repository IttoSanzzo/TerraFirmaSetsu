declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTrimRecipe" {
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTrimRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {
}
}

declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorInventoryMenu" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $CraftingContainer } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ResultContainer } from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorInventoryMenu {
"getCraftSlots"(): $CraftingContainer
"getOwner"(): $Player
"getResultSlots"(): $ResultContainer
get "craftSlots"(): $CraftingContainer
get "owner"(): $Player
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
export abstract class $AccessorInventoryMenu$$Static implements $AccessorInventoryMenu {
}
}

declare module "packages/com/illusivesoulworks/comforts/mixin/$AccessorPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorPlayer {
"setSleepCounter"(int0: integer): void
set "sleepCounter"(value: integer)
}

export namespace $AccessorPlayer {
const probejs$$marker: never
}
export abstract class $AccessorPlayer$$Static implements $AccessorPlayer {
}
}

declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTransformRecipe" {
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTransformRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {
}
}

declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorCraftingMenu" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $CraftingContainer } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ResultContainer } from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $AccessorCraftingMenu {
"getCraftSlots"(): $CraftingContainer
"getPlayer"(): $Player
"getResultSlots"(): $ResultContainer
get "craftSlots"(): $CraftingContainer
get "player"(): $Player
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
export abstract class $AccessorCraftingMenu$$Static implements $AccessorCraftingMenu {
}
}

declare module "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorAbstractFurnaceBlockEntity" {
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $AccessorAbstractFurnaceBlockEntity {
"getItems"(): $NonNullList<$ItemStack>
get "items"(): $NonNullList<$ItemStack>
}

export namespace $AccessorAbstractFurnaceBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorAbstractFurnaceBlockEntity$$Static implements $AccessorAbstractFurnaceBlockEntity {
}
}

