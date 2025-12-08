declare module "packages/vectorwing/farmersdelight/common/mixin/accessor/$RecipeManagerAccessor" {
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map } from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {
"getRecipeMap"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, $Recipe<C>>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

