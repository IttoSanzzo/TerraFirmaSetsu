declare module "packages/net/minecraft/data/loot/packs/$VanillaBlockLoot" {
import { $BlockLootSubProvider } from "packages/net/minecraft/data/loot/$BlockLootSubProvider"

export class $VanillaBlockLoot extends $BlockLootSubProvider {
constructor()

}
}

declare module "packages/net/minecraft/data/loot/$LootTableProvider$SubProviderEntry" {
import { $Record } from "packages/java/lang/$Record"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $LootTableSubProvider } from "packages/net/minecraft/data/loot/$LootTableSubProvider"
import { $LootContextParamSet, $LootContextParamSet$$Type } from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"

export class $LootTableProvider$SubProviderEntry extends $Record {
constructor(provider: $Supplier$$Type<$LootTableSubProvider>, paramSet: $LootContextParamSet$$Type)

public "paramSet"(): $LootContextParamSet
public "provider"(): $Supplier<$LootTableSubProvider>
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $BlockFamily$Variant$$Type } from "packages/net/minecraft/data/$BlockFamily$Variant"
import { $ShapedRecipeBuilder } from "packages/net/minecraft/data/recipes/$ShapedRecipeBuilder"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Advancement$Builder$$Type } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $InventoryChangeTrigger$TriggerInstance } from "packages/net/minecraft/advancements/critereon/$InventoryChangeTrigger$TriggerInstance"
import { $List$$Type } from "packages/java/util/$List"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $RecipeCategory$$Type } from "packages/net/minecraft/data/recipes/$RecipeCategory"
import { $FinishedRecipe$$Type } from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import { $RecipeBuilder } from "packages/net/minecraft/data/recipes/$RecipeBuilder"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $RecipeSerializer$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $BlockFamily$$Type } from "packages/net/minecraft/data/$BlockFamily"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $MinMaxBounds$Ints$$Type } from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $ItemPredicate$$Type } from "packages/net/minecraft/advancements/critereon/$ItemPredicate"
import { $RecipeProviderAccessor } from "packages/vazkii/botania/mixin/$RecipeProviderAccessor"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $AbstractCookingRecipe$$Type } from "packages/net/minecraft/world/item/crafting/$AbstractCookingRecipe"
import { $EnterBlockTrigger$TriggerInstance } from "packages/net/minecraft/advancements/critereon/$EnterBlockTrigger$TriggerInstance"

export class $RecipeProvider implements $DataProvider, $RecipeProviderAccessor {
constructor(packOutput0: $PackOutput$$Type)

public static "banner"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "bedFromPlanksAndWool"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public "buildAdvancement"(cachedOutput0: $CachedOutput$$Type, resourceLocation1: $ResourceLocation$$Type, builder2: $Advancement$Builder$$Type): $CompletableFuture<any>
public "buildRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "buttonBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "candle"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "carpet"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chestBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "chiseled"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "chiseledBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "colorBlockWithDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$Item$$Type>, list2: $List$$Type<$Item$$Type>, string3: string): void
public static "coloredTerracottaFromTerracottaAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "concretePowder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cookRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>): void
public static "copySmithingTemplate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "cut"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "cutBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "doorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "fenceBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "fenceGateBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public "generateForEnabledBlockFamilies"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, featureFlagSet1: $FeatureFlagSet$$Type): void
public static "generateRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, blockFamily1: $BlockFamily$$Type): void
public static "getBaseBlock"(blockFamily0: $BlockFamily$$Type, variant1: $BlockFamily$Variant$$Type): $Block
public static "getBlastingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getConversionRecipeName"(itemLike0: $ItemLike$$Type, itemLike1: $ItemLike$$Type): string
public static "getHasName"(itemLike0: $ItemLike$$Type): string
public static "getItemName"(itemLike0: $ItemLike$$Type): string
public "getName"(): string
public static "getSimpleRecipeName"(itemLike0: $ItemLike$$Type): string
public static "getSmeltingRecipeName"(itemLike0: $ItemLike$$Type): string
public static "hangingSign"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "has"(itemLike0: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "has"(tagKey0: $TagKey$$Type<$Item$$Type>): $InventoryChangeTrigger$TriggerInstance
public static "has"(ints0: $MinMaxBounds$Ints$$Type, itemLike1: $ItemLike$$Type): $InventoryChangeTrigger$TriggerInstance
public static "insideOf"(block0: $Block$$Type): $EnterBlockTrigger$TriggerInstance
public static "inventoryTrigger"(...itemPredicate0s: $ItemPredicate$$Type[]): $InventoryChangeTrigger$TriggerInstance
public static "mosaicBuilder"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "netheriteSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, recipeCategory2: $RecipeCategory$$Type, item3: $Item$$Type): void
public static "nineBlockStorageRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type): void
public static "nineBlockStorageRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string, string7: string, string8: string): void
public static "nineBlockStorageRecipesRecipesWithCustomUnpacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "nineBlockStorageRecipesWithCustomPacking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, string5: string, string6: string): void
public static "oneToOneConversionRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type, string3: string, int4: integer): void
public static "oneToOneConversionRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type, string3: string): void
public static "oreBlasting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public static "oreCooking"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeSerializer1: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, list2: $List$$Type<$ItemLike$$Type>, recipeCategory3: $RecipeCategory$$Type, itemLike4: $ItemLike$$Type, float5: float, int6: integer, string7: string, string8: string): void
public static "oreSmelting"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, list1: $List$$Type<$ItemLike$$Type>, recipeCategory2: $RecipeCategory$$Type, itemLike3: $ItemLike$$Type, float4: float, int5: integer, string6: string): void
public static "planksFromLog"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "planksFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, tagKey2: $TagKey$$Type<$Item$$Type>, int3: integer): void
public static "polished"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "polishedBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlate"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "pressurePlateBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public static "signBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "simpleCookingRecipe"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string, recipeSerializer2: $RecipeSerializer$$Type<$AbstractCookingRecipe$$Type>, int3: integer, itemLike4: $ItemLike$$Type, itemLike5: $ItemLike$$Type, float6: float): void
public static "slab"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "slabBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "smeltingResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassFromGlassAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromGlassPaneAndDye"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stainedGlassPaneFromStainedGlass"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "stairBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "stonecutterResultFromBase"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, int4: integer): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type, string4: string): void
public static "threeByThreePacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "trapdoorBuilder"(itemLike0: $ItemLike$$Type, ingredient1: $Ingredient$$Type): $RecipeBuilder
public static "trimSmithing"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, item1: $Item$$Type, resourceLocation2: $ResourceLocation$$Type): void
public static "twoByTwoPacker"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "wall"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, recipeCategory1: $RecipeCategory$$Type, itemLike2: $ItemLike$$Type, itemLike3: $ItemLike$$Type): void
public static "wallBuilder"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, ingredient2: $Ingredient$$Type): $RecipeBuilder
public static "waxRecipes"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "woodFromLogs"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
public static "woodenBoat"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, itemLike1: $ItemLike$$Type, itemLike2: $ItemLike$$Type): void
get "name"(): string
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeCategory" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RecipeCategory extends $Enum<$RecipeCategory> {
static readonly "BREWING": $RecipeCategory
static readonly "BUILDING_BLOCKS": $RecipeCategory
static readonly "COMBAT": $RecipeCategory
static readonly "DECORATIONS": $RecipeCategory
static readonly "FOOD": $RecipeCategory
static readonly "MISC": $RecipeCategory
static readonly "REDSTONE": $RecipeCategory
static readonly "TOOLS": $RecipeCategory
static readonly "TRANSPORTATION": $RecipeCategory

public "getFolderName"(): string
public static "valueOf"(string0: string): $RecipeCategory
public static "values"(): $RecipeCategory[]
get "folderName"(): string
}
}

declare module "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender" {
import { $TagsProvider$TagAppender } from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $IForgeIntrinsicHolderTagAppender } from "packages/net/minecraftforge/common/extensions/$IForgeIntrinsicHolderTagAppender"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"

export class $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T> extends $TagsProvider$TagAppender<T> implements $IForgeIntrinsicHolderTagAppender<T> {
public "add"(...t0s: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "add"(t0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "addTag"(tagKey0: $TagKey$$Type<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "addTags"(...tagKey0s: $TagKey$$Type<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "getKey"(t0: T): $ResourceKey<T>
public "remove"(resourceKey0: $ResourceKey$$Type<T>, ...resourceKey1s: $ResourceKey$$Type<T>[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "remove"(resourceKey0: $ResourceKey$$Type<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "remove"(t0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "remove"(t0: T, ...t1s: T[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
public "replace"(boolean0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider$TagAppender" {
import { $IForgeTagAppender } from "packages/net/minecraftforge/common/extensions/$IForgeTagAppender"
import { $TagEntry$$Type } from "packages/net/minecraft/tags/$TagEntry"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $TagBuilder } from "packages/net/minecraft/tags/$TagBuilder"

export class $TagsProvider$TagAppender<T> implements $IForgeTagAppender<T> {
public "add"(tagEntry0: $TagEntry$$Type): $TagsProvider$TagAppender<T>
public "add"(resourceKey0: $ResourceKey$$Type<T>): $TagsProvider$TagAppender<T>
public "add"(...resourceKey0s: $ResourceKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "addOptional"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "addOptionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "addOptionalTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addOptionalTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "addTag"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "addTags"(...tagKey0s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "getInternalBuilder"(): $TagBuilder
public "getModID"(): string
public "remove"(tagKey0: $TagKey$$Type<T>, ...tagKey1s: $TagKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "remove"(resourceLocation0: $ResourceLocation$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $TagsProvider$TagAppender<T>
public "remove"(resourceKey0: $ResourceKey$$Type<T>): $TagsProvider$TagAppender<T>
public "remove"(resourceKey0: $ResourceKey$$Type<T>, ...resourceKey1s: $ResourceKey$$Type<T>[]): $TagsProvider$TagAppender<T>
public "remove"(tagKey0: $TagKey$$Type<T>): $TagsProvider$TagAppender<T>
public "remove"(resourceLocation0: $ResourceLocation$$Type): $TagsProvider$TagAppender<T>
public "replace"(boolean0: boolean): $TagsProvider$TagAppender<T>
public "replace"(): $TagsProvider$TagAppender<T>
get "internalBuilder"(): $TagBuilder
get "modID"(): string
}
}

declare module "packages/net/minecraft/data/loot/$LootTableSubProvider" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $LootTable$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $LootTableSubProvider {
"generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
}

export namespace $LootTableSubProvider {
const probejs$$marker: never
}
export abstract class $LootTableSubProvider$$Static implements $LootTableSubProvider {
}
}

declare module "packages/net/minecraft/data/recipes/$FinishedRecipe" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FinishedRecipe {
"getAdvancementId"(): $ResourceLocation
"getId"(): $ResourceLocation
"getType"(): $RecipeSerializer<any>
"serializeAdvancement"(): $JsonObject
"serializeRecipe"(): $JsonObject
"serializeRecipeData"(jsonObject0: $JsonObject$$Type): void
get "advancementId"(): $ResourceLocation
get "id"(): $ResourceLocation
get "type"(): $RecipeSerializer<any>
}

export namespace $FinishedRecipe {
const probejs$$marker: never
}
export abstract class $FinishedRecipe$$Static implements $FinishedRecipe {
}
}

declare module "packages/net/minecraft/data/loot/packs/$VanillaEntityLoot" {
import { $EntityLootSubProvider } from "packages/net/minecraft/data/loot/$EntityLootSubProvider"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"

export class $VanillaEntityLoot extends $EntityLootSubProvider {
constructor()

public static "elderGuardianLootTable"(): $LootTable$Builder
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider$TagLookup" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $TagKey, $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $TagBuilder, $TagBuilder$$Type } from "packages/net/minecraft/tags/$TagBuilder"

export interface $TagsProvider$TagLookup<T> extends $Function<$TagKey<T>, $Optional<$TagBuilder>> {
"andThen"<V>(function0: $Function$$Type<$Optional$$Type<$TagBuilder$$Type>, V>): $Function<$TagKey<T>, V>
"apply"(tagKey0: $TagKey$$Type<T>): $Optional<$TagBuilder>
"compose"<V>(function0: $Function$$Type<V, $TagKey<T>>): $Function<V, $Optional<$TagBuilder>>
"contains"(tagKey0: $TagKey$$Type<T>): boolean
}

export namespace $TagsProvider$TagLookup {
function empty<T>(): $TagsProvider$TagLookup<T>
function identity<T>(): $Function<T, T>
}
export abstract class $TagsProvider$TagLookup$$Static<T> implements $TagsProvider$TagLookup<T> {
static "empty"<T>(): $TagsProvider$TagLookup<T>
static "identity"<T>(): $Function<T, T>
}
}

declare module "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $HolderLookup$Provider$$Type } from "packages/net/minecraft/core/$HolderLookup$Provider"
import { $CompletableFuture, $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $TagsProvider$TagLookup$$Type } from "packages/net/minecraft/data/tags/$TagsProvider$TagLookup"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $TagsProvider } from "packages/net/minecraft/data/tags/$TagsProvider"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $IntrinsicHolderTagsProvider$IntrinsicTagAppender } from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"

export class $IntrinsicHolderTagsProvider<T> extends $TagsProvider<T> {
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, completableFuture3: $CompletableFuture$$Type<$TagsProvider$TagLookup$$Type<T>>, function4: $Function$$Type<T, $ResourceKey<T>>, string5: string, existingFileHelper6: $ExistingFileHelper$$Type)
/** @deprecated */
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, completableFuture3: $CompletableFuture$$Type<$TagsProvider$TagLookup$$Type<T>>, function4: $Function$$Type<T, $ResourceKey<T>>)
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, function3: $Function$$Type<T, $ResourceKey<T>>, string4: string, existingFileHelper5: $ExistingFileHelper$$Type)
/** @deprecated */
constructor(packOutput0: $PackOutput$$Type, resourceKey1: $ResourceKey$$Type<$Registry<T>>, completableFuture2: $CompletableFuture$$Type<$HolderLookup$Provider$$Type>, function3: $Function$$Type<T, $ResourceKey<T>>)

public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "tag"(tagKey0: $TagKey$$Type<T>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>
}
}

declare module "packages/net/minecraft/data/$DataGenerator$PackGenerator" {
import { $DataProvider, $DataProvider$$Type } from "packages/net/minecraft/data/$DataProvider"
import { $DataProvider$Factory$$Type } from "packages/net/minecraft/data/$DataProvider$Factory"

export class $DataGenerator$PackGenerator {
public "addProvider"<T extends $DataProvider>(factory0: $DataProvider$Factory$$Type<T>): T
}
}

declare module "packages/net/minecraft/data/loot/$LootTableProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Set$$Type } from "packages/java/util/$Set"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $LootTableProvider$SubProviderEntry, $LootTableProvider$SubProviderEntry$$Type } from "packages/net/minecraft/data/loot/$LootTableProvider$SubProviderEntry"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $LootTableProvider implements $DataProvider {
constructor(packOutput0: $PackOutput$$Type, set1: $Set$$Type<$ResourceLocation$$Type>, list2: $List$$Type<$LootTableProvider$SubProviderEntry$$Type>)

public "getName"(): string
public "getTables"(): $List<$LootTableProvider$SubProviderEntry>
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "name"(): string
get "tables"(): $List<$LootTableProvider$SubProviderEntry>
}
}

declare module "packages/net/minecraft/data/$BlockFamily$Variant" {
import { $Enum } from "packages/java/lang/$Enum"

export class $BlockFamily$Variant extends $Enum<$BlockFamily$Variant> {
static readonly "BUTTON": $BlockFamily$Variant
static readonly "CHISELED": $BlockFamily$Variant
static readonly "CRACKED": $BlockFamily$Variant
static readonly "CUSTOM_FENCE": $BlockFamily$Variant
static readonly "CUSTOM_FENCE_GATE": $BlockFamily$Variant
static readonly "CUT": $BlockFamily$Variant
static readonly "DOOR": $BlockFamily$Variant
static readonly "FENCE": $BlockFamily$Variant
static readonly "FENCE_GATE": $BlockFamily$Variant
static readonly "MOSAIC": $BlockFamily$Variant
static readonly "POLISHED": $BlockFamily$Variant
static readonly "PRESSURE_PLATE": $BlockFamily$Variant
static readonly "SIGN": $BlockFamily$Variant
static readonly "SLAB": $BlockFamily$Variant
static readonly "STAIRS": $BlockFamily$Variant
static readonly "TRAPDOOR": $BlockFamily$Variant
static readonly "WALL": $BlockFamily$Variant
static readonly "WALL_SIGN": $BlockFamily$Variant

public "getName"(): string
public static "valueOf"(string0: string): $BlockFamily$Variant
public static "values"(): $BlockFamily$Variant[]
get "name"(): string
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider" {
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $TagsProviderAccess } from "packages/snownee/kiwi/mixin/$TagsProviderAccess"
import { $TagsProvider$TagLookup } from "packages/net/minecraft/data/tags/$TagsProvider$TagLookup"
import { $ExistingFileHelper$$Type } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import { $FileHelperDataProvider } from "packages/fuzs/puzzleslib/impl/data/$FileHelperDataProvider"

export class $TagsProvider<T> implements $DataProvider, $TagsProviderAccess<any>, $FileHelperDataProvider {
public "contentsGetter"(): $CompletableFuture<$TagsProvider$TagLookup<T>>
public "getName"(): string
public "puzzleslib$setExistingFileHelper"(existingFileHelper0: $ExistingFileHelper$$Type): void
public "run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
get "name"(): string
}
}

declare module "packages/net/minecraft/data/loot/$EntityLootSubProvider" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $EntityType } from "packages/net/minecraft/world/entity/$EntityType"
import { $Set } from "packages/java/util/$Set"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $LootTableSubProvider } from "packages/net/minecraft/data/loot/$LootTableSubProvider"
import { $Map } from "packages/java/util/$Map"

export class $EntityLootSubProvider implements $LootTableSubProvider {
static readonly "SPECIAL_LOOT_TABLE_TYPES": $Set<$EntityType<any>>
readonly "map": $Map<$EntityType<any>, $Map<$ResourceLocation, $LootTable$Builder>>

public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "generate"(): void
}
}

declare module "packages/net/minecraft/data/$DataGenerator" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $WorldVersion$$Type } from "packages/net/minecraft/$WorldVersion"
import { $DataProvider, $DataProvider$$Type } from "packages/net/minecraft/data/$DataProvider"
import { $PackOutput } from "packages/net/minecraft/data/$PackOutput"
import { $DataGenerator$PackGenerator } from "packages/net/minecraft/data/$DataGenerator$PackGenerator"
import { $DataProvider$Factory$$Type } from "packages/net/minecraft/data/$DataProvider$Factory"
import { $Map } from "packages/java/util/$Map"

export class $DataGenerator {
readonly "rootOutputFolder": $Path

constructor(path0: $Path$$Type, worldVersion1: $WorldVersion$$Type, boolean2: boolean)

public "addProvider"<T extends $DataProvider>(boolean0: boolean, factory1: $DataProvider$Factory$$Type<T>): T
public "addProvider"<T extends $DataProvider>(boolean0: boolean, t1: T): T
public "getBuiltinDatapack"(boolean0: boolean, string1: string): $DataGenerator$PackGenerator
public "getPackOutput"(string0: string): $PackOutput
public "getPackOutput"(): $PackOutput
public "getProvidersView"(): $Map<string, $DataProvider>
public "getVanillaPack"(boolean0: boolean): $DataGenerator$PackGenerator
public "run"(): void
get "packOutput"(): $PackOutput
get "providersView"(): $Map<string, $DataProvider>
}
}

declare module "packages/net/minecraft/data/$DataProvider$Factory" {
import { $DataProvider } from "packages/net/minecraft/data/$DataProvider"
import { $PackOutput$$Type } from "packages/net/minecraft/data/$PackOutput"

export interface $DataProvider$Factory<T extends $DataProvider> {
"create"(packOutput0: $PackOutput$$Type): T
}

export namespace $DataProvider$Factory {
const probejs$$marker: never
}
export abstract class $DataProvider$Factory$$Static<T extends $DataProvider> implements $DataProvider$Factory<T> {
}
}

declare module "packages/net/minecraft/data/$BlockFamily" {
import { $Optional } from "packages/java/util/$Optional"
import { $BlockFamily$Variant, $BlockFamily$Variant$$Type } from "packages/net/minecraft/data/$BlockFamily$Variant"
import { $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $Map } from "packages/java/util/$Map"

export class $BlockFamily {
public "get"(variant0: $BlockFamily$Variant$$Type): $Block
public "getBaseBlock"(): $Block
public "getRecipeGroupPrefix"(): $Optional<string>
public "getRecipeUnlockedBy"(): $Optional<string>
public "getVariants"(): $Map<$BlockFamily$Variant, $Block>
public "shouldGenerateModel"(): boolean
public "shouldGenerateRecipe"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
get "baseBlock"(): $Block
get "recipeGroupPrefix"(): $Optional<string>
get "recipeUnlockedBy"(): $Optional<string>
get "variants"(): $Map<$BlockFamily$Variant, $Block>
}
}

declare module "packages/net/minecraft/data/loot/$BlockLootSubProvider" {
import { $Comparable, $Comparable$$Type } from "packages/java/lang/$Comparable"
import { $LootPoolEntryContainer$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer$Builder"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $FunctionUserBuilder, $FunctionUserBuilder$$Type } from "packages/net/minecraft/world/level/storage/loot/functions/$FunctionUserBuilder"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition$Builder"
import { $NumberProvider$$Type } from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $StringRepresentable, $StringRepresentable$$Type } from "packages/net/minecraft/util/$StringRepresentable"
import { $BlockLootSubProviderAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$BlockLootSubProviderAccessor"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Property$$Type } from "packages/net/minecraft/world/level/block/state/properties/$Property"
import { $ConditionUserBuilder, $ConditionUserBuilder$$Type } from "packages/net/minecraft/world/level/storage/loot/predicates/$ConditionUserBuilder"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $LootTableSubProvider } from "packages/net/minecraft/data/loot/$LootTableSubProvider"

export class $BlockLootSubProvider implements $LootTableSubProvider, $BlockLootSubProviderAccessor {
static readonly "HAS_NO_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_NO_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SHEARS": $LootItemCondition$Builder
static readonly "HAS_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SILK_TOUCH": $LootItemCondition$Builder
static readonly "NORMAL_LEAVES_SAPLING_CHANCES": float[]
static readonly "NORMAL_LEAVES_STICK_CHANCES": float[]

public "add"(block0: $Block$$Type, function1: $Function$$Type<$Block$$Type, $LootTable$Builder>): void
public "add"(block0: $Block$$Type, builder1: $LootTable$Builder$$Type): void
public "addNetherVinesDropTable"(block0: $Block$$Type, block1: $Block$$Type): void
public "applyExplosionCondition"<T extends $ConditionUserBuilder<T>>(itemLike0: $ItemLike$$Type, conditionUserBuilder1: $ConditionUserBuilder$$Type<T>): T
public "applyExplosionDecay"<T extends $FunctionUserBuilder<T>>(itemLike0: $ItemLike$$Type, functionUserBuilder1: $FunctionUserBuilder$$Type<T>): T
public "createAttachedStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createBannerDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeHiveDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeNestDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCandleDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createCaveVinesDrop"(block0: $Block$$Type): $LootTable$Builder
public "createCopperOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCropDrops"(block0: $Block$$Type, item1: $Item$$Type, item2: $Item$$Type, builder3: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createDoorTable"(block0: $Block$$Type): $LootTable$Builder
public static "createDoublePlantShearsDrop"(block0: $Block$$Type): $LootTable$Builder
public "createDoublePlantWithSeedDrops"(block0: $Block$$Type, block1: $Block$$Type): $LootTable$Builder
public "createGrassDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLapisOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createMangroveLeavesDrops"(block0: $Block$$Type): $LootTable$Builder
public "createMultifaceBlockDrops"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createMushroomBlockDrop"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createNameableBlockEntityTable"(block0: $Block$$Type): $LootTable$Builder
public "createOakLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createOreDrop"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createPetalsDrops"(block0: $Block$$Type): $LootTable$Builder
public "createPotFlowerItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createRedstoneOreDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createSelfDropDispatchTable"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type, builder2: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsOnlyDrop"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createShulkerBoxDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createSilkTouchDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createSilkTouchOnlyTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public static "createSilkTouchOrShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type, numberProvider1: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type, numberProvider2: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createSinglePropConditionTable"<T extends ($Comparable<T> & $StringRepresentable)>(block0: $Block$$Type, property1: $Property$$Type<T>, t2: T): $LootTable$Builder
public "createSlabItemTable"(block0: $Block$$Type): $LootTable$Builder
public "createStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "dropOther"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): void
public "dropPottedContents"(block0: $Block$$Type): void
public "dropSelf"(block0: $Block$$Type): void
public "dropWhenSilkTouch"(block0: $Block$$Type): void
public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "generate"(): void
public static "noDrop"(): $LootTable$Builder
public "otherWhenSilkTouch"(block0: $Block$$Type, block1: $Block$$Type): void
}
}

declare module "packages/net/minecraft/data/$PackOutput$Target" {
import { $Enum } from "packages/java/lang/$Enum"

export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
static readonly "DATA_PACK": $PackOutput$Target
static readonly "REPORTS": $PackOutput$Target
static readonly "RESOURCE_PACK": $PackOutput$Target

public static "valueOf"(string0: string): $PackOutput$Target
public static "values"(): $PackOutput$Target[]
}
}

declare module "packages/net/minecraft/data/worldgen/$BootstapContext" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $HolderLookup$RegistryLookup } from "packages/net/minecraft/core/$HolderLookup$RegistryLookup"
import { $Optional } from "packages/java/util/$Optional"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $Holder$Reference } from "packages/net/minecraft/core/$Holder$Reference"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $HolderGetter } from "packages/net/minecraft/core/$HolderGetter"

export interface $BootstapContext<T> {
"lookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $HolderGetter<S>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T): $Holder$Reference<T>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
"registryLookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $Optional<$HolderLookup$RegistryLookup<S>>
}

export namespace $BootstapContext {
const probejs$$marker: never
}
export abstract class $BootstapContext$$Static<T> implements $BootstapContext<T> {
}
}

declare module "packages/net/minecraft/data/$PackOutput" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $PackOutput$Target$$Type } from "packages/net/minecraft/data/$PackOutput$Target"
import { $PackOutput$PathProvider } from "packages/net/minecraft/data/$PackOutput$PathProvider"

export class $PackOutput {
constructor(path0: $Path$$Type)

public "createPathProvider"(target0: $PackOutput$Target$$Type, string1: string): $PackOutput$PathProvider
public "getOutputFolder"(target0: $PackOutput$Target$$Type): $Path
public "getOutputFolder"(): $Path
get "outputFolder"(): $Path
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeBuilder" {
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FinishedRecipe$$Type } from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import { $CriterionTriggerInstance$$Type } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"

export interface $RecipeBuilder {
"getResult"(): $Item
"group"(string0: string): $RecipeBuilder
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
"save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
"unlockedBy"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $RecipeBuilder
get "result"(): $Item
}

export namespace $RecipeBuilder {
const ROOT_RECIPE_ADVANCEMENT: $ResourceLocation
function getDefaultRecipeId(itemLike0: $ItemLike$$Type): $ResourceLocation
}
export abstract class $RecipeBuilder$$Static implements $RecipeBuilder {
static readonly "ROOT_RECIPE_ADVANCEMENT": $ResourceLocation

static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
}
}

declare module "packages/net/minecraft/data/recipes/$CraftingRecipeBuilder" {
import { $RecipeCategory$$Type } from "packages/net/minecraft/data/recipes/$RecipeCategory"
import { $CraftingBookCategory } from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CraftingRecipeBuilder {
constructor()

public static "determineBookCategory"(recipeCategory0: $RecipeCategory$$Type): $CraftingBookCategory
}
}

declare module "packages/net/minecraft/data/recipes/$ShapelessRecipeBuilder" {
import { $RecipeBuilder } from "packages/net/minecraft/data/recipes/$RecipeBuilder"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $CraftingRecipeBuilder } from "packages/net/minecraft/data/recipes/$CraftingRecipeBuilder"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Advancement$Builder } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $RecipeCategory$$Type } from "packages/net/minecraft/data/recipes/$RecipeCategory"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $FinishedRecipe$$Type } from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import { $CriterionTriggerInstance$$Type } from "packages/net/minecraft/advancements/$CriterionTriggerInstance"

export class $ShapelessRecipeBuilder extends $CraftingRecipeBuilder implements $RecipeBuilder {
readonly "advancement": $Advancement$Builder
readonly "count": integer
"group": string
readonly "ingredients": $List<$Ingredient>
readonly "result": $Item

constructor(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer)

public static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
public "getResult"(): $Item
public "group"(string0: string): $ShapelessRecipeBuilder
public "requires"(itemLike0: $ItemLike$$Type): $ShapelessRecipeBuilder
public "requires"(itemLike0: $ItemLike$$Type, int1: integer): $ShapelessRecipeBuilder
public "requires"(tagKey0: $TagKey$$Type<$Item$$Type>): $ShapelessRecipeBuilder
public "requires"(ingredient0: $Ingredient$$Type): $ShapelessRecipeBuilder
public "requires"(ingredient0: $Ingredient$$Type, int1: integer): $ShapelessRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "shapeless"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer): $ShapelessRecipeBuilder
public static "shapeless"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type): $ShapelessRecipeBuilder
public "unlockedBy"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $ShapelessRecipeBuilder
}
}

declare module "packages/net/minecraft/data/$DataProvider" {
import { $Comparator } from "packages/java/util/$Comparator"
import { $CachedOutput$$Type } from "packages/net/minecraft/data/$CachedOutput"
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $ToIntFunction } from "packages/java/util/function/$ToIntFunction"
import { $Logger } from "packages/org/slf4j/$Logger"

export interface $DataProvider {
"getName"(): string
"run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
get "name"(): string
}

export namespace $DataProvider {
const FIXED_ORDER_FIELDS: $ToIntFunction<string>
const KEY_COMPARATOR: $Comparator<string>
const LOGGER: $Logger
function saveStable(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
export abstract class $DataProvider$$Static implements $DataProvider {
static readonly "FIXED_ORDER_FIELDS": $ToIntFunction<string>
static readonly "KEY_COMPARATOR": $Comparator<string>
static readonly "LOGGER": $Logger

static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "packages/net/minecraft/data/$CachedOutput" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $HashCode$$Type } from "packages/com/google/common/hash/$HashCode"

export interface $CachedOutput {
"writeIfNeeded"(path0: $Path$$Type, byte1s: byte[], hashCode2: $HashCode$$Type): void
}

export namespace $CachedOutput {
const NO_CACHE: $CachedOutput
}
export abstract class $CachedOutput$$Static implements $CachedOutput {
static readonly "NO_CACHE": $CachedOutput

}
}

declare module "packages/net/minecraft/data/recipes/$ShapedRecipeBuilder" {
import { $RecipeBuilder } from "packages/net/minecraft/data/recipes/$RecipeBuilder"
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $CraftingRecipeBuilder } from "packages/net/minecraft/data/recipes/$CraftingRecipeBuilder"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey$$Type } from "packages/net/minecraft/tags/$TagKey"
import { $Advancement$Builder } from "packages/net/minecraft/advancements/$Advancement$Builder"
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List } from "packages/java/util/$List"
import { $RecipeCategory, $RecipeCategory$$Type } from "packages/net/minecraft/data/recipes/$RecipeCategory"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $FinishedRecipe$$Type } from "packages/net/minecraft/data/recipes/$FinishedRecipe"
import { $Map } from "packages/java/util/$Map"

export class $ShapedRecipeBuilder extends $CraftingRecipeBuilder implements $RecipeBuilder {
readonly "advancement": $Advancement$Builder
readonly "category": $RecipeCategory
readonly "count": integer
"group": string
readonly "key": $Map<character, $Ingredient>
readonly "result": $Item
readonly "rows": $List<string>

constructor(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer)

public "define"(character0: character, ingredient1: $Ingredient$$Type): $ShapedRecipeBuilder
public "define"(character0: character, itemLike1: $ItemLike$$Type): $ShapedRecipeBuilder
public "define"(character0: character, tagKey1: $TagKey$$Type<$Item$$Type>): $ShapedRecipeBuilder
public "ensureValid"(resourceLocation0: $ResourceLocation$$Type): void
public static "getDefaultRecipeId"(itemLike0: $ItemLike$$Type): $ResourceLocation
public "getResult"(): $Item
public "group"(string0: string): $ShapedRecipeBuilder
public "pattern"(string0: string): $ShapedRecipeBuilder
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, resourceLocation1: $ResourceLocation$$Type): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>, string1: string): void
public "save"(consumer0: $Consumer$$Type<$FinishedRecipe$$Type>): void
public static "shaped"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type, int2: integer): $ShapedRecipeBuilder
public static "shaped"(recipeCategory0: $RecipeCategory$$Type, itemLike1: $ItemLike$$Type): $ShapedRecipeBuilder
public "showNotification"(boolean0: boolean): $ShapedRecipeBuilder
}
}

declare module "packages/net/minecraft/data/$PackOutput$PathProvider" {
import { $Path } from "packages/java/nio/file/$Path"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $PackOutput$PathProvider {
public "file"(resourceLocation0: $ResourceLocation$$Type, string1: string): $Path
public "json"(resourceLocation0: $ResourceLocation$$Type): $Path
}
}

