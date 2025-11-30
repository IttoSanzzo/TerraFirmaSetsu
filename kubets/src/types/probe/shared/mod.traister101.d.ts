declare module "packages/mod/traister101/sns/mixins/client/invoker/$AddCustomNbtDataInvoker" {
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $AddCustomNbtDataInvoker {
"invokeAddCustomNbtData"(itemStack0: $ItemStack$$Type, blockEntity1: $BlockEntity$$Type): void
}

export namespace $AddCustomNbtDataInvoker {
const probejs$$marker: never
}
export abstract class $AddCustomNbtDataInvoker$$Static implements $AddCustomNbtDataInvoker {
}
}

declare module "packages/mod/traister101/esc/mixin/common/accessor/$AbstractContainerMenuAccessor" {
import { $Set } from "packages/java/util/$Set"
import { $Slot } from "packages/net/minecraft/world/inventory/$Slot"
import { $MenuType } from "packages/net/minecraft/world/inventory/$MenuType"

export interface $AbstractContainerMenuAccessor {
"getMenuType"(): $MenuType<any>
"getQuickcraftSlots"(): $Set<$Slot>
"getQuickcraftStatus"(): integer
"getQuickcraftType"(): integer
"setQuickcraftStatus"(int0: integer): void
"setQuickcraftType"(int0: integer): void
get "menuType"(): $MenuType<any>
get "quickcraftSlots"(): $Set<$Slot>
get "quickcraftStatus"(): integer
get "quickcraftType"(): integer
set "quickcraftStatus"(value: integer)
set "quickcraftType"(value: integer)
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
export abstract class $AbstractContainerMenuAccessor$$Static implements $AbstractContainerMenuAccessor {
}
}

declare module "packages/mod/traister101/esc/mixin/common/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"invokeOnSwapCraft"(int0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

