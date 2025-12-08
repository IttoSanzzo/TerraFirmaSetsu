declare module "packages/snownee/kiwi/mixin/forge/$ItemColorsAccess" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ItemColor } from "packages/net/minecraft/client/color/item/$ItemColor"
import { $Map } from "packages/java/util/$Map"

export interface $ItemColorsAccess {
"getItemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
get "itemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
}

export namespace $ItemColorsAccess {
const probejs$$marker: never
}
export abstract class $ItemColorsAccess$$Static implements $ItemColorsAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$FireBlockAccess" {
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockAccess {
"callSetFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccess {
const probejs$$marker: never
}
export abstract class $FireBlockAccess$$Static implements $FireBlockAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$AxeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccess {
}

export namespace $AxeItemAccess {
const probejs$$marker: never
}
export abstract class $AxeItemAccess$$Static implements $AxeItemAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$VillagerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerAccess {
}

export namespace $VillagerAccess {
const probejs$$marker: never
}
export abstract class $VillagerAccess$$Static implements $VillagerAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$ShovelItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccess {
}

export namespace $ShovelItemAccess {
const probejs$$marker: never
}
export abstract class $ShovelItemAccess$$Static implements $ShovelItemAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$RecipeManagerAccess" {
import { $ICondition$IContext } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"

export interface $RecipeManagerAccess {
"getContext"(): $ICondition$IContext
get "context"(): $ICondition$IContext
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccess$$Static implements $RecipeManagerAccess {
}
}

declare module "packages/snownee/kiwi/mixin/forge/$BlockColorsAccess" {
import { $BlockColor } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Map } from "packages/java/util/$Map"

export interface $BlockColorsAccess {
"getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
get "blockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
export abstract class $BlockColorsAccess$$Static implements $BlockColorsAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$ShapedRecipeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShapedRecipeAccess {
}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccess$$Static implements $ShapedRecipeAccess {
}
}

declare module "packages/snownee/kiwi/mixin/$TagsProviderAccess" {
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $TagBuilder } from "packages/net/minecraft/tags/$TagBuilder"

export interface $TagsProviderAccess<T> {
"callGetOrCreateRawBuilder"(tagKey0: $TagKey$$Type<T>): $TagBuilder
"getModId"(): string
"getRegistryKey"(): $ResourceKey<$Registry<T>>
get "modId"(): string
get "registryKey"(): $ResourceKey<$Registry<T>>
}

export namespace $TagsProviderAccess {
const probejs$$marker: never
}
export abstract class $TagsProviderAccess$$Static<T> implements $TagsProviderAccess<T> {
}
}

declare module "packages/snownee/kiwi/mixin/$HoeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccess {
}

export namespace $HoeItemAccess {
const probejs$$marker: never
}
export abstract class $HoeItemAccess$$Static implements $HoeItemAccess {
}
}

