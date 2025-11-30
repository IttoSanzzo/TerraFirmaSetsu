declare module "packages/fuzs/visualworkbench/world/level/block/$VisualCraftingTableBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VisualCraftingTableBlock {
"hasBlockEntity"(): boolean
}

export namespace $VisualCraftingTableBlock {
const probejs$$marker: never
}
export abstract class $VisualCraftingTableBlock$$Static implements $VisualCraftingTableBlock {
}
}

declare module "packages/fuzs/visualworkbench/mixin/accessor/$CraftingMenuAccessor" {
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ResultContainer } from "packages/net/minecraft/world/inventory/$ResultContainer"

export interface $CraftingMenuAccessor {
"visualworkbench$getResultSlots"(): $ResultContainer
"visualworkbench$setCraftSlots"(craftingContainer0: $CraftingContainer$$Type): void
}

export namespace $CraftingMenuAccessor {
const probejs$$marker: never
}
export abstract class $CraftingMenuAccessor$$Static implements $CraftingMenuAccessor {
}
}

