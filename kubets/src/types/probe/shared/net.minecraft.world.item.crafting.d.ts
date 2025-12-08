declare module "packages/net/minecraft/world/item/crafting/$SimpleCraftingRecipeSerializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $CraftingRecipe, $CraftingRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SimpleCraftingRecipeSerializer$Factory$$Type } from "packages/net/minecraft/world/item/crafting/$SimpleCraftingRecipeSerializer$Factory"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SimpleCraftingRecipeSerializer<T extends $CraftingRecipe> implements $RecipeSerializer<T> {
constructor(factory0: $SimpleCraftingRecipeSerializer$Factory$$Type<T>)

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$RecipeManager" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeManagerAccessor } from "packages/net/dries007/tfc/mixin/accessor/$RecipeManagerAccessor"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeManagerAccess } from "packages/snownee/lychee/mixin/$RecipeManagerAccess"
import { $RecipeManagerAccess as $RecipeManagerAccess$0 } from "packages/snownee/kiwi/mixin/$RecipeManagerAccess"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable$$Type } from "packages/java/lang/$Iterable"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $RecipeType, $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$0 } from "packages/dev/latvian/mods/kubejs/core/mixin/forge/$RecipeManagerAccessor"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$1 } from "packages/com/possible_triangle/sliceanddice/mixins/$RecipeManagerAccessor"
import { $Collection } from "packages/java/util/$Collection"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$2 } from "packages/vazkii/botania/mixin/$RecipeManagerAccessor"
import { $RecipeManagerAccessor as $RecipeManagerAccessor$3 } from "packages/vectorwing/farmersdelight/common/mixin/accessor/$RecipeManagerAccessor"
import { $SimpleJsonResourceReloadListener } from "packages/net/minecraft/server/packs/resources/$SimpleJsonResourceReloadListener"
import { $Optional } from "packages/java/util/$Optional"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $Map, $Map$$Type } from "packages/java/util/$Map"
import { $RecipeManager$CachedCheck } from "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck"

export class $RecipeManager extends $SimpleJsonResourceReloadListener implements $RecipeManagerAccessor$2, $RecipeManagerAccess$0, $RecipeManagerAccessor, $RecipeManagerAccessor$3, $RecipeManagerAccessor$0, $RecipeManagerAccessor$1, $RecipeManagerAccess {
/** @deprecated */
constructor()
constructor(iContext0: $ICondition$IContext$$Type)

public "byKey"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Recipe<any>>
public "byType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
public static "createCheck"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $RecipeManager$CachedCheck<C, T>
/** @deprecated */
public static "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type): $Recipe<any>
public static "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $Recipe<any>
public "getAllRecipesFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $List<T>
public "getName"(): string
public "getRecipeFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type, resourceLocation3: $ResourceLocation$$Type): $Optional<$Pair<$ResourceLocation, T>>
public "getRecipeFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $Optional<T>
public "getRecipeIds"(): $Stream<$ResourceLocation>
public "getRecipes"(): $Collection<$Recipe<any>>
public "getRecipesFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $List<T>
public "getRemainingItemsFor"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>, c1: C, level2: $Level$$Type): $NonNullList<$ItemStack>
public "hadErrorsLoading"(): boolean
public "replaceRecipes"(iterable0: $Iterable$$Type<$Recipe$$Type<any>>): void
get "byName"(): $Map<$ResourceLocation, $Recipe<any>>
set "byName"(value: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>)
get "recipes"(): $Map<$RecipeType<any>, $Map<$ResourceLocation, $Recipe<any>>>
set "recipes"(value: $Map$$Type<$RecipeType$$Type<any>, $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>>)
get "name"(): string
get "recipeIds"(): $Stream<$ResourceLocation>
}
}

declare module "packages/net/minecraft/world/item/crafting/$BookCloningRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $BookCloningRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$CraftingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CraftingContainer, $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $CraftingRecipe extends $Recipe<$CraftingContainer> {
"assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"category"(): $CraftingBookCategory
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $CraftingRecipe {
const probejs$$marker: never
}
export abstract class $CraftingRecipe$$Static implements $CraftingRecipe {
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $SmithingRecipe } from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $AccessorSmithingTransformRecipe } from "packages/vazkii/patchouli/mixin/$AccessorSmithingTransformRecipe"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $AccessorSmithingTransformRecipe as $AccessorSmithingTransformRecipe$0 } from "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTransformRecipe"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SmithingTransformRecipe implements $SmithingRecipe, $AccessorSmithingTransformRecipe$0, $AccessorSmithingTransformRecipe {
readonly "addition": $Ingredient
readonly "base": $Ingredient
readonly "result": $ItemStack
readonly "template": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, ingredient1: $Ingredient$$Type, ingredient2: $Ingredient$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$RepairItemRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $RepairItemRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmithingTrimRecipe$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $SmithingTrimRecipe, $SmithingTrimRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$SmithingTrimRecipe"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SmithingTrimRecipe$Serializer implements $RecipeSerializer<$SmithingTrimRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $SmithingTrimRecipe
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $SmithingTrimRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, smithingTrimRecipe1: $SmithingTrimRecipe$$Type): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$DecoratedPotRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $DecoratedPotBlockEntity$Decorations$$Type } from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity$Decorations"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $DecoratedPotRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public static "createDecoratedPotItem"(decorations0: $DecoratedPotBlockEntity$Decorations$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$FireworkRocketRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FireworkRocketRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SimpleCraftingRecipeSerializer$Factory" {
import { $CraftingRecipe } from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export interface $SimpleCraftingRecipeSerializer$Factory<T extends $CraftingRecipe> {
"create"(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type): T
}

export namespace $SimpleCraftingRecipeSerializer$Factory {
const probejs$$marker: never
}
export abstract class $SimpleCraftingRecipeSerializer$Factory$$Static<T extends $CraftingRecipe> implements $SimpleCraftingRecipeSerializer$Factory<T> {
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer" {
import { $ShapedRecipe, $ShapedRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapedRecipe$Serializer implements $RecipeSerializer<$ShapedRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $ShapedRecipe
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $ShapedRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, shapedRecipe1: $ShapedRecipe$$Type): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShulkerBoxColoring" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShulkerBoxColoring extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$BlastingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"

export class $BlastingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SuspiciousStewRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SuspiciousStewRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmeltingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"

export class $SmeltingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShapedRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $NonNullList, $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $ShapedRecipeAccessor } from "packages/ovh/corail/tombstone/mixin/accessor/$ShapedRecipeAccessor"
import { $ShapedRecipeAccess } from "packages/snownee/kiwi/mixin/$ShapedRecipeAccess"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $IShapedRecipe } from "packages/net/minecraftforge/common/crafting/$IShapedRecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $JsonArray$$Type } from "packages/com/google/gson/$JsonArray"
import { $ShapedRecipeAccessor as $ShapedRecipeAccessor$0 } from "packages/ad_astra_giselle_addon/common/mixin/minecraft/$ShapedRecipeAccessor"
import { $ShapedRecipeAccess as $ShapedRecipeAccess$0 } from "packages/snownee/lychee/mixin/$ShapedRecipeAccess"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $CraftingRecipe } from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import { $CraftingContainer, $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $ShapedRecipe implements $CraftingRecipe, $IShapedRecipe<$CraftingContainer>, $ShapedRecipeAccessor, $ShapedRecipeAccess, $ShapedRecipeAccessor$0, $ShapedRecipeAccess$0 {
readonly "height": integer
readonly "result": $ItemStack
readonly "width": integer

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, int3: integer, int4: integer, nonNullList5: $NonNullList$$Type<$Ingredient$$Type>, itemStack6: $ItemStack$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, int3: integer, int4: integer, nonNullList5: $NonNullList$$Type<$Ingredient$$Type>, itemStack6: $ItemStack$$Type, boolean7: boolean)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public static "dissolvePattern"(string0s: string[], map1: $Map$$Type<string, $Ingredient$$Type>, int2: integer, int3: integer): $NonNullList<$Ingredient>
public "getGroup"(): string
public "getHeight"(): integer
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRecipeHeight"(): integer
public "getRecipeWidth"(): integer
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getWidth"(): integer
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public static "itemFromJson"(jsonObject0: $JsonObject$$Type): $Item
public static "itemStackFromJson"(jsonObject0: $JsonObject$$Type): $ItemStack
public static "keyFromJson"(jsonObject0: $JsonObject$$Type): $Map<string, $Ingredient>
public "matches"(craftingContainer0: $CraftingContainer$$Type, int1: integer, int2: integer, boolean3: boolean): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public static "patternFromJson"(jsonArray0: $JsonArray$$Type): string[]
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public static "setCraftingSize"(int0: integer, int1: integer): void
public "setGroup"(group: string): void
public "showNotification"(): boolean
public static "shrink"(...string0s: string[]): string[]
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "recipeHeight"(): integer
get "recipeWidth"(): integer
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$CustomRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CraftingRecipe } from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CustomRecipe implements $CraftingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$BannerDuplicateRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $BannerDuplicateRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "modifyExpressionValue$fcd000$getLimitAssemble"(int0: integer): integer
public "modifyExpressionValue$fcd000$getLimitMatches"(int0: integer): integer
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmithingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $SmithingRecipe extends $Recipe<$Container> {
"assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
"isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
"matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $SmithingRecipe {
const probejs$$marker: never
}
export abstract class $SmithingRecipe$$Static implements $SmithingRecipe {
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShapelessRecipe$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ShapelessRecipe, $ShapelessRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ShapelessRecipe$Serializer implements $RecipeSerializer<$ShapelessRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $ShapelessRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, shapelessRecipe1: $ShapelessRecipe$$Type): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmokingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"

export class $SmokingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $SmithingTransformRecipe, $SmithingTransformRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$SmithingTransformRecipe"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SmithingTransformRecipe$Serializer implements $RecipeSerializer<$SmithingTransformRecipe> {
constructor()

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): $SmithingTransformRecipe
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $SmithingTransformRecipe
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, smithingTransformRecipe1: $SmithingTransformRecipe$$Type): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$MapExtendingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $ShapedRecipe } from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MapExtendingRecipe extends $ShapedRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$ArmorDyeRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ArmorDyeRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$TippedArrowRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $TippedArrowRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SmithingTrimRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $SmithingRecipe } from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $AccessorSmithingTrimRecipe } from "packages/com/illusivesoulworks/polymorph/mixin/core/$AccessorSmithingTrimRecipe"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $AccessorSmithingTrimRecipe as $AccessorSmithingTrimRecipe$0 } from "packages/vazkii/patchouli/mixin/$AccessorSmithingTrimRecipe"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SmithingTrimRecipe implements $SmithingRecipe, $AccessorSmithingTrimRecipe, $AccessorSmithingTrimRecipe$0 {
readonly "addition": $Ingredient
readonly "base": $Ingredient
readonly "template": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, ingredient1: $Ingredient$$Type, ingredient2: $Ingredient$$Type, ingredient3: $Ingredient$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isAdditionIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isBaseIngredient"(itemStack0: $ItemStack$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "isTemplateIngredient"(itemStack0: $ItemStack$$Type): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$Ingredient" {
import { $JsonElement, $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Ingredient$Value, $Ingredient$Value$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IIngredientSerializer } from "packages/net/minecraftforge/common/crafting/$IIngredientSerializer"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $AtomicInteger } from "packages/java/util/concurrent/atomic/$AtomicInteger"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $ExtendedIngredient } from "packages/org/embeddedt/modernfix/forge/recipe/$ExtendedIngredient"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $InputItem } from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Set } from "packages/java/util/$Set"
import { $IntList, $IntList$$Type } from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $IngredientKJS } from "packages/dev/latvian/mods/kubejs/core/$IngredientKJS"
import { $ItemStackSet } from "packages/dev/latvian/mods/kubejs/item/$ItemStackSet"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"

export class $Ingredient implements $Predicate<$ItemStack>, $ExtendedIngredient, $IngredientKJS {
static readonly "EMPTY": $Ingredient
static readonly "INVALIDATION_COUNTER": $AtomicInteger
readonly "isVanilla": boolean

constructor(stream0: $Stream$$Type<$Ingredient$Value$$Type>)

public "and"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "and"(ingredient: $Ingredient$$Type): $Ingredient
public "asIngredient"(): $Ingredient
public "asStack"(): $InputItem
public "canBeUsedForMatching"(): boolean
public "checkInvalidation"(): boolean
public static "fromJson"(jsonElement0: $JsonElement$$Type): $Ingredient
public static "fromJson"(jsonElement0: $JsonElement$$Type, boolean1: boolean): $Ingredient
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Ingredient
public static "fromValues"(stream0: $Stream$$Type<$Ingredient$Value$$Type>): $Ingredient
public "getDisplayStacks"(): $ItemStackSet
public "getFirst"(): $ItemStack
public "getItemIds"(): $Set<string>
public "getItemTypes"(): $Set<$Item>
public "getSerializer"(): $IIngredientSerializer<$Ingredient>
public "getStackingIds"(): $IntList
public "getStacks"(): $ItemStackSet
public "handler$cjg000$blah"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type<any>): void
public static "invalidateAll"(): void
public "isEmpty"(): boolean
public static "isEqual"<T>(object0: any): $Predicate<T>
public "isSimple"(): boolean
public "isVanilla"(): boolean
public "isWildcard"(): boolean
public static "merge"(collection0: $Collection$$Type<$Ingredient$$Type>): $Ingredient
public "mfix$clearReference"(): void
public "mfix$hasNoElements"(): boolean
public "negate"(): $Predicate<$ItemStack>
public static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
public static "of"(...itemLike0s: $ItemLike$$Type[]): $Ingredient
public static "of"(...itemStack0s: $ItemStack$$Type[]): $Ingredient
public static "of"(): $Ingredient
public static "of"(stream0: $Stream$$Type<$ItemStack$$Type>): $Ingredient
public static "of"(tagKey0: $TagKey$$Type<$Item$$Type>): $Ingredient
public "or"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Predicate<$ItemStack>
public "or"(ingredient: $Ingredient$$Type): $Ingredient
public "self"(): $Ingredient
public "subtract"(subtracted: $Ingredient$$Type): $Ingredient
public "test"(itemStack0: $ItemStack$$Type): boolean
public "testItem"(item: $Item$$Type): boolean
public "toJson"(): $JsonElement
public "toJson"(): $JsonElement
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public static "valueFromJson"(jsonObject0: $JsonObject$$Type): $Ingredient$Value
public "withCount"(count: integer): $InputItem
get "invalidationCounter"(): integer
set "invalidationCounter"(value: integer)
get "itemStacks"(): $ItemStack[]
set "itemStacks"(value: $ItemStack$$Type[])
get "stackingIds"(): $IntList
set "stackingIds"(value: $IntList$$Type)
get "values"(): $Ingredient$Value[]
set "values"(value: $Ingredient$Value$$Type[])
get "displayStacks"(): $ItemStackSet
get "first"(): $ItemStack
get "itemIds"(): $Set<string>
get "itemTypes"(): $Set<$Item>
get "serializer"(): $IIngredientSerializer<$Ingredient>
get "stacks"(): $ItemStackSet
get "empty"(): boolean
get "simple"(): boolean
get "vanilla"(): boolean
get "wildcard"(): boolean
}
}

declare module "packages/net/minecraft/world/item/crafting/$CookingBookCategory" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $CookingBookCategory extends $Enum<$CookingBookCategory> implements $StringRepresentable {
static readonly "BLOCKS": $CookingBookCategory
static readonly "CODEC": $StringRepresentable$EnumCodec<$CookingBookCategory>
static readonly "FOOD": $CookingBookCategory
static readonly "MISC": $CookingBookCategory

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CookingBookCategory
public static "values"(): $CookingBookCategory[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/item/crafting/$SingleItemRecipe$Serializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $SingleItemRecipe, $SingleItemRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$SingleItemRecipe"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SingleItemRecipe$Serializer<T extends $SingleItemRecipe> implements $RecipeSerializer<T> {
public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$Recipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $RecipeKJS } from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $Recipe<C extends $Container> extends $RecipeKJS {
"assemble"(c0: C, registryAccess1: $RegistryAccess$$Type): $ItemStack
"canCraftInDimensions"(int0: integer, int1: integer): boolean
"getGroup"(): string
"getId"(): $ResourceLocation
"getIngredients"(): $NonNullList<$Ingredient>
"getMod"(): string
"getOrCreateId"(): $ResourceLocation
"getRemainingItems"(c0: C): $NonNullList<$ItemStack>
"getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
"getSchema"(): $RecipeSchema
"getSerializer"(): $RecipeSerializer<any>
"getToastSymbol"(): $ItemStack
"getType"(): $ResourceLocation
"hasInput"(match: $ReplacementMatch$$Type): boolean
"hasOutput"(match: $ReplacementMatch$$Type): boolean
"isIncomplete"(): boolean
"isSpecial"(): boolean
"matches"(c0: C, level1: $Level$$Type): boolean
"replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
"replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
"setGroup"(group: string): void
"showNotification"(): boolean
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}

export namespace $Recipe {
const probejs$$marker: never
}
export abstract class $Recipe$$Static<C extends $Container> implements $Recipe<C> {
}
}

declare module "packages/net/minecraft/world/item/crafting/$FireworkStarFadeRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FireworkStarFadeRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SimpleCookingSerializer" {
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $ICondition$IContext$$Type } from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import { $AbstractCookingRecipe, $AbstractCookingRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SimpleCookingSerializer$CookieBaker, $SimpleCookingSerializer$CookieBaker$$Type } from "packages/net/minecraft/world/item/crafting/$SimpleCookingSerializer$CookieBaker"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SimpleCookingSerializer<T extends $AbstractCookingRecipe> implements $RecipeSerializer<T> {
readonly "defaultCookingTime": integer
readonly "factory": $SimpleCookingSerializer$CookieBaker<T>

constructor(cookieBaker0: $SimpleCookingSerializer$CookieBaker$$Type<T>, int1: integer)

public "fromJson"(resourceLocation0: $ResourceLocation$$Type, jsonObject1: $JsonObject$$Type, iContext2: $ICondition$IContext$$Type): T
public "fromNetwork"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): T
public static "register"<S extends $RecipeSerializer<T>, T extends $Recipe<any>>(string0: string, s1: S): S
public "toNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShieldDecorationRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShieldDecorationRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$ShapelessRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $ShapelessRecipeAccessor } from "packages/ovh/corail/tombstone/mixin/accessor/$ShapelessRecipeAccessor"
import { $NonNullList, $NonNullList$$Type } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory, $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CraftingRecipe } from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ShapelessRecipe implements $CraftingRecipe, $ShapelessRecipeAccessor {
readonly "group": string
readonly "ingredients": $NonNullList<$Ingredient>
readonly "result": $ItemStack

constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, craftingBookCategory2: $CraftingBookCategory$$Type, itemStack3: $ItemStack$$Type, nonNullList4: $NonNullList$$Type<$Ingredient$$Type>)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CraftingBookCategory
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "id"(): $ResourceLocation
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
}
}

declare module "packages/net/minecraft/world/item/crafting/$MapCloningRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $MapCloningRecipe extends $CustomRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$RecipeManager$CachedCheck" {
import { $Optional } from "packages/java/util/$Optional"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $RecipeManager$CachedCheck<C extends $Container, T extends $Recipe<C>> {
"getRecipeFor"(c0: C, level1: $Level$$Type): $Optional<T>
}

export namespace $RecipeManager$CachedCheck {
const probejs$$marker: never
}
export abstract class $RecipeManager$CachedCheck$$Static<C extends $Container, T extends $Recipe<C>> implements $RecipeManager$CachedCheck<C, T> {
}
}

declare module "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $CookingBookCategory, $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AbstractCookingRecipe implements $Recipe<$Container> {
readonly "result": $ItemStack

constructor(recipeType0: $RecipeType$$Type<any>, resourceLocation1: $ResourceLocation$$Type, string2: string, cookingBookCategory3: $CookingBookCategory$$Type, ingredient4: $Ingredient$$Type, itemStack5: $ItemStack$$Type, float6: float, int7: integer)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "category"(): $CookingBookCategory
public "getCookingTime"(): integer
public "getExperience"(): float
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "cookingTime"(): integer
get "experience"(): float
get "group"(): string
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$FireworkStarRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $FireworkRocketItem$Shape } from "packages/net/minecraft/world/item/$FireworkRocketItem$Shape"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CraftingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $CustomRecipe } from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $Map } from "packages/java/util/$Map"

export class $FireworkStarRecipe extends $CustomRecipe {
static "SHAPE_BY_ITEM": $Map<$Item, $FireworkRocketItem$Shape>
static "SHAPE_INGREDIENT": $Ingredient

constructor(resourceLocation0: $ResourceLocation$$Type, craftingBookCategory1: $CraftingBookCategory$$Type)

public "assemble"(craftingContainer0: $CraftingContainer$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "getGroup"(): string
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(craftingContainer0: $CraftingContainer$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "matches"(craftingContainer0: $CraftingContainer$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$SingleItemRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $RecipeSerializer, $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $SingleItemRecipe implements $Recipe<$Container> {
constructor(recipeType0: $RecipeType$$Type<any>, recipeSerializer1: $RecipeSerializer$$Type<any>, resourceLocation2: $ResourceLocation$$Type, string3: string, ingredient4: $Ingredient$$Type, itemStack5: $ItemStack$$Type)

public "assemble"(container0: $Container$$Type, registryAccess1: $RegistryAccess$$Type): $ItemStack
public "canCraftInDimensions"(int0: integer, int1: integer): boolean
public "getGroup"(): string
public "getId"(): $ResourceLocation
public "getIngredients"(): $NonNullList<$Ingredient>
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getResultItem"(registryAccess0: $RegistryAccess$$Type): $ItemStack
public "getSchema"(): $RecipeSchema
public "getSerializer"(): $RecipeSerializer<any>
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "matches"(container0: $Container$$Type, level1: $Level$$Type): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
set "group"(value: string)
get "ingredient"(): $Ingredient
set "ingredient"(value: $Ingredient$$Type)
get "result"(): $ItemStack
set "result"(value: $ItemStack$$Type)
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<$Ingredient>
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "serializer"(): $RecipeSerializer<any>
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
}
}

declare module "packages/net/minecraft/world/item/crafting/$CampfireCookingRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import { $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"

export class $CampfireCookingRecipe extends $AbstractCookingRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$CraftingBookCategory" {
import { $StringRepresentable$EnumCodec } from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Keyable } from "packages/com/mojang/serialization/$Keyable"
import { $Enum, $Enum$$Type } from "packages/java/lang/$Enum"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $CraftingBookCategory extends $Enum<$CraftingBookCategory> implements $StringRepresentable {
static readonly "BUILDING": $CraftingBookCategory
static readonly "CODEC": $StringRepresentable$EnumCodec<$CraftingBookCategory>
static readonly "EQUIPMENT": $CraftingBookCategory
static readonly "MISC": $CraftingBookCategory
static readonly "REDSTONE": $CraftingBookCategory

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $CraftingBookCategory
public static "values"(): $CraftingBookCategory[]
get "serializedName"(): string
}
}

declare module "packages/net/minecraft/world/item/crafting/$StonecutterRecipe" {
import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import { $NonNullList } from "packages/net/minecraft/core/$NonNullList"
import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import { $SingleItemRecipe } from "packages/net/minecraft/world/item/crafting/$SingleItemRecipe"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $Container$$Type } from "packages/net/minecraft/world/$Container"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $StonecutterRecipe extends $SingleItemRecipe {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string, ingredient2: $Ingredient$$Type, itemStack3: $ItemStack$$Type)

public "getGroup"(): string
public "getMod"(): string
public "getOrCreateId"(): $ResourceLocation
public "getRemainingItems"(container0: $Container$$Type): $NonNullList<$ItemStack>
public "getSchema"(): $RecipeSchema
public "getType"(): $ResourceLocation
public "hasInput"(match: $ReplacementMatch$$Type): boolean
public "hasOutput"(match: $ReplacementMatch$$Type): boolean
public "isIncomplete"(): boolean
public "isSpecial"(): boolean
public "replaceInput"(match: $ReplacementMatch$$Type, with_: $InputReplacement$$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$$Type, with_: $OutputReplacement$$Type): boolean
public "setGroup"(group: string): void
public "showNotification"(): boolean
get "group"(): string
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
get "incomplete"(): boolean
get "special"(): boolean
set "group"(value: string)
}
}

declare module "packages/net/minecraft/world/item/crafting/$Ingredient$Value" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Collection } from "packages/java/util/$Collection"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $Ingredient$Value {
"getItems"(): $Collection<$ItemStack>
"serialize"(): $JsonObject
get "items"(): $Collection<$ItemStack>
}

export namespace $Ingredient$Value {
const probejs$$marker: never
}
export abstract class $Ingredient$Value$$Static implements $Ingredient$Value {
}
}

declare module "packages/net/minecraft/world/item/crafting/$SimpleCookingSerializer$CookieBaker" {
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $AbstractCookingRecipe } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CookingBookCategory$$Type } from "packages/net/minecraft/world/item/crafting/$CookingBookCategory"

export interface $SimpleCookingSerializer$CookieBaker<T extends $AbstractCookingRecipe> {
"create"(resourceLocation0: $ResourceLocation$$Type, string1: string, cookingBookCategory2: $CookingBookCategory$$Type, ingredient3: $Ingredient$$Type, itemStack4: $ItemStack$$Type, float5: float, int6: integer): T
}

export namespace $SimpleCookingSerializer$CookieBaker {
const probejs$$marker: never
}
export abstract class $SimpleCookingSerializer$CookieBaker$$Static<T extends $AbstractCookingRecipe> implements $SimpleCookingSerializer$CookieBaker<T> {
}
}

