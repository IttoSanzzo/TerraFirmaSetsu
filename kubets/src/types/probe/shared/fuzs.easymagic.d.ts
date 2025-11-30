declare module "packages/fuzs/easymagic/mixin/accessor/$PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {
"setEnchantmentSeed"(int0: integer): void
set "enchantmentSeed"(value: integer)
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAccessor$$Static implements $PlayerAccessor {
}
}

declare module "packages/fuzs/easymagic/mixin/client/accessor/$ChiseledBookShelfBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChiseledBookShelfBlockAccessor {
}

export namespace $ChiseledBookShelfBlockAccessor {
const probejs$$marker: never
}
export abstract class $ChiseledBookShelfBlockAccessor$$Static implements $ChiseledBookShelfBlockAccessor {
}
}

declare module "packages/fuzs/easymagic/mixin/accessor/$EnchantmentMenuAccessor" {
import { $List } from "packages/java/util/$List"
import { $EnchantmentInstance } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $DataSlot } from "packages/net/minecraft/world/inventory/$DataSlot"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"

export interface $EnchantmentMenuAccessor {
"callGetEnchantmentList"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): $List<$EnchantmentInstance>
"getEnchantmentSeed"(): $DataSlot
"getRandom"(): $RandomSource
"setEnchantSlots"(container0: $Container$$Type): void
get "enchantmentSeed"(): $DataSlot
get "random"(): $RandomSource
set "enchantSlots"(value: $Container$$Type)
}

export namespace $EnchantmentMenuAccessor {
const probejs$$marker: never
}
export abstract class $EnchantmentMenuAccessor$$Static implements $EnchantmentMenuAccessor {
}
}

