declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$AddJEIEventJS" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $IJeiRuntime$$Type } from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $AddJEIEventJS<T> extends $EventJS {
constructor(r: $IJeiRuntime$$Type, t: $IIngredientType$$Type<T>, f: $Function$$Type<any, T>, i: $Predicate$$Type<T>)

public "add"(o: any): void
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $JEISubtypesEventJS$Interpreter$$Type } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS$Interpreter"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $ISubtypeRegistration$$Type } from "packages/mezz/jei/api/registration/$ISubtypeRegistration"

export class $JEISubtypesEventJS extends $EventJS {
constructor(r: $ISubtypeRegistration$$Type)

public "registerInterpreter"(item: $Item$$Type, interpreter: $JEISubtypesEventJS$Interpreter$$Type): void
public "useNBT"(items: $Ingredient$$Type): void
public "useNBTKey"(items: $Ingredient$$Type, key: string): void
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $Collection } from "packages/java/util/$Collection"
import { $IJeiRuntime$$Type } from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $HideJEIEventJS<T> extends $EventJS {
constructor(r: $IJeiRuntime$$Type, t: $IIngredientType$$Type<T>, f: $Function$$Type<any, $Predicate<T>>, i: $Predicate$$Type<T>)

public "getAllIngredients"(): $Collection<T>
public "hide"(o: any): void
public "hideAll"(): void
get "allIngredients"(): $Collection<T>
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEICategoriesEvent" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Collection } from "packages/java/util/$Collection"
import { $IRecipeCategory, $IRecipeCategory$$Type } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IJeiRuntime$$Type } from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $RemoveJEICategoriesEvent extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "getCategories"(): $Collection<$IRecipeCategory<any>>
public "getCategoryIds"(): $Collection<$ResourceLocation>
public "remove"(...categoriesToYeet: $ResourceLocation$$Type[]): void
public "removeIf"(filter: $Predicate$$Type<$IRecipeCategory$$Type<any>>): void
get "categories"(): $Collection<$IRecipeCategory<any>>
get "categoryIds"(): $Collection<$ResourceLocation>
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$JEISubtypesEventJS$Interpreter" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $JEISubtypesEventJS$Interpreter extends $Function<$ItemStack, any> {
"andThen"<V>(function0: $Function$$Type<any, V>): $Function<$ItemStack, V>
"apply"(itemStack0: $ItemStack$$Type): any
"compose"<V>(function0: $Function$$Type<V, $ItemStack>): $Function<V, any>
}

export namespace $JEISubtypesEventJS$Interpreter {
function identity<T>(): $Function<T, T>
}
export abstract class $JEISubtypesEventJS$Interpreter$$Static implements $JEISubtypesEventJS$Interpreter {
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideCustomJEIEventJS" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $HideJEIEventJS } from "packages/dev/latvian/mods/kubejs/integration/forge/jei/$HideJEIEventJS"
import { $IJeiRuntime$$Type } from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $HideCustomJEIEventJS extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "get"(s: $IIngredientType$$Type<any>): $HideJEIEventJS<any>
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$InformationJEIEventJS" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $IRecipeRegistration$$Type } from "packages/mezz/jei/api/registration/$IRecipeRegistration"

export class $InformationJEIEventJS extends $EventJS {
constructor(reg: $IRecipeRegistration$$Type)

public "addFluid"(fluid: any, s: $Component$$Type[]): void
public "addForType"<T>(type: $IIngredientType$$Type<T>, o: any, s: $Component$$Type[]): void
public "addItem"(item: $Ingredient$$Type, s: $Component$$Type[]): void
}
}

declare module "packages/dev/latvian/mods/kubejs/integration/forge/jei/$RemoveJEIRecipesEvent" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Collection } from "packages/java/util/$Collection"
import { $IRecipeCategory } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IJeiRuntime$$Type } from "packages/mezz/jei/api/runtime/$IJeiRuntime"

export class $RemoveJEIRecipesEvent extends $EventJS {
constructor(r: $IJeiRuntime$$Type)

public "getCategories"(): $Collection<$IRecipeCategory<any>>
public "getCategoryIds"(): $Collection<$ResourceLocation>
public "remove"(category: $ResourceLocation$$Type, recipesToRemove: $ResourceLocation$$Type[]): void
get "categories"(): $Collection<$IRecipeCategory<any>>
get "categoryIds"(): $Collection<$ResourceLocation>
}
}

