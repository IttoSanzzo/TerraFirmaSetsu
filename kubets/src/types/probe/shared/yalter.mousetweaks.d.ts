declare module "packages/yalter/mousetweaks/mixin/$AbstractContainerScreenAccessor" {
import { $ClickType$$Type } from "packages/net/minecraft/world/inventory/$ClickType"
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"

export interface $AbstractContainerScreenAccessor {
"mousetweaks$getIsQuickCrafting"(): boolean
"mousetweaks$getQuickCraftingButton"(): integer
"mousetweaks$invokeFindSlot"(double0: double, double1: double): $Slot
"mousetweaks$invokeSlotClicked"(slot0: $Slot$$Type, int1: integer, int2: integer, clickType3: $ClickType$$Type): void
"mousetweaks$setIsQuickCrafting"(boolean0: boolean): void
"mousetweaks$setSkipNextRelease"(boolean0: boolean): void
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {
}
}

