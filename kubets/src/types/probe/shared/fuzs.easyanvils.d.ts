declare module "packages/fuzs/easyanvils/mixin/accessor/$ItemCombinerMenuAccessor" {
import { $Container$$Type } from "packages/net/minecraft/world/$Container"

export interface $ItemCombinerMenuAccessor {
"setInputSlots"(container0: $Container$$Type): void
set "inputSlots"(value: $Container$$Type)
}

export namespace $ItemCombinerMenuAccessor {
const probejs$$marker: never
}
export abstract class $ItemCombinerMenuAccessor$$Static implements $ItemCombinerMenuAccessor {
}
}

declare module "packages/fuzs/easyanvils/mixin/accessor/$AnvilMenuAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnvilMenuAccessor {
"easyanvils$getItemName"(): string
"easyanvils$getRepairItemCountCost"(): integer
"easyanvils$setItemName"(string0: string): void
"easyanvils$setRepairItemCountCost"(int0: integer): void
}

export namespace $AnvilMenuAccessor {
const probejs$$marker: never
}
export abstract class $AnvilMenuAccessor$$Static implements $AnvilMenuAccessor {
}
}

declare module "packages/fuzs/easyanvils/mixin/accessor/$SlotAccessor" {
import { $Container$$Type } from "packages/net/minecraft/world/$Container"

export interface $SlotAccessor {
"setContainer"(container0: $Container$$Type): void
set "container"(value: $Container$$Type)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

