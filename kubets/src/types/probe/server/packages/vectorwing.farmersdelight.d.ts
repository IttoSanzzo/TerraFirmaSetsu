declare module "packages/vectorwing/farmersdelight/common/mixin/accessor/$RecipeManagerAccessor" {
import { $RecipeType } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor | ((arg0: $RecipeType<T>) => $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<C>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$$Type;
}
}

