declare module "packages/com/possible_triangle/sliceanddice/mixins/$RecipeManagerAccessor" {
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $RecipeManagerAccessor {
"getByName"(): $Map<$ResourceLocation, $Recipe<any>>
"setByName"(map0: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>): void
"setRecipes"(map0: $Map$$Type<$RecipeType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>>): void
get "byName"(): $Map<$ResourceLocation, $Recipe<any>>
set "byName"(value: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>)
set "recipes"(value: $Map$$Type<$RecipeType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>>)
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

