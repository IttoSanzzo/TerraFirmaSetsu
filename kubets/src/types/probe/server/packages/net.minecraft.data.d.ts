declare module "packages/net/minecraft/data/loot/packs/$VanillaBlockLoot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VanillaBlockLoot$$Type = ($VanillaBlockLoot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VanillaBlockLoot_ = $VanillaBlockLoot$$Type;
}
}

declare module "packages/net/minecraft/data/loot/$LootTableProvider$SubProviderEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTableProvider$SubProviderEntry$$Type = ($LootTableProvider$SubProviderEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTableProvider$SubProviderEntry_ = $LootTableProvider$SubProviderEntry$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeProvider$$Type = ($RecipeProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeProvider_ = $RecipeProvider$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeCategory$$Type = ($RecipeCategory | ("building_blocks" | "decorations" | "redstone" | "transportation" | "tools" | "combat" | "food" | "brewing" | "misc"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeCategory_ = $RecipeCategory$$Type;
}
}

declare module "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntrinsicHolderTagsProvider$IntrinsicTagAppender$$Type<T> = ($IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntrinsicHolderTagsProvider$IntrinsicTagAppender_<T> = $IntrinsicHolderTagsProvider$IntrinsicTagAppender$$Type<T>;
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider$TagAppender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TagsProvider$TagAppender$$Type<T> = ($TagsProvider$TagAppender<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TagsProvider$TagAppender_<T> = $TagsProvider$TagAppender$$Type<T>;
}
}

declare module "packages/net/minecraft/data/loot/$LootTableSubProvider" {
import { $BiConsumer } from "packages/java/util/function/$BiConsumer"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTableSubProvider$$Type = ($LootTableSubProvider | ((arg0: $BiConsumer<$ResourceLocation, $LootTable$Builder>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTableSubProvider_ = $LootTableSubProvider$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$FinishedRecipe" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FinishedRecipe$$Type = ($FinishedRecipe);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FinishedRecipe_ = $FinishedRecipe$$Type;
}
}

declare module "packages/net/minecraft/data/loot/packs/$VanillaEntityLoot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VanillaEntityLoot$$Type = ($VanillaEntityLoot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VanillaEntityLoot_ = $VanillaEntityLoot$$Type;
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider$TagLookup" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"
import { $TagBuilder$$Type } from "packages/net/minecraft/tags/$TagBuilder"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TagsProvider$TagLookup$$Type<T> = ($TagsProvider$TagLookup<T> | ((arg0: $TagKey<T>) => $Optional$$Type<$TagBuilder$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TagsProvider$TagLookup_<T> = $TagsProvider$TagLookup$$Type<T>;
}
}

declare module "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntrinsicHolderTagsProvider$$Type<T> = ($IntrinsicHolderTagsProvider<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntrinsicHolderTagsProvider_<T> = $IntrinsicHolderTagsProvider$$Type<T>;
}
}

declare module "packages/net/minecraft/data/$DataGenerator$PackGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataGenerator$PackGenerator$$Type = ($DataGenerator$PackGenerator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataGenerator$PackGenerator_ = $DataGenerator$PackGenerator$$Type;
}
}

declare module "packages/net/minecraft/data/loot/$LootTableProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTableProvider$$Type = ($LootTableProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTableProvider_ = $LootTableProvider$$Type;
}
}

declare module "packages/net/minecraft/data/$BlockFamily$Variant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockFamily$Variant$$Type = ($BlockFamily$Variant | ("button" | "chiseled" | "cracked" | "cut" | "door" | "custom_fence" | "fence" | "custom_fence_gate" | "fence_gate" | "mosaic" | "sign" | "slab" | "stairs" | "pressure_plate" | "polished" | "trapdoor" | "wall" | "wall_sign"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockFamily$Variant_ = $BlockFamily$Variant$$Type;
}
}

declare module "packages/net/minecraft/data/tags/$TagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TagsProvider$$Type<T> = ($TagsProvider<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TagsProvider_<T> = $TagsProvider$$Type<T>;
}
}

declare module "packages/net/minecraft/data/loot/$EntityLootSubProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityLootSubProvider$$Type = ($EntityLootSubProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityLootSubProvider_ = $EntityLootSubProvider$$Type;
}
}

declare module "packages/net/minecraft/data/$DataGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataGenerator$$Type = ($DataGenerator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataGenerator_ = $DataGenerator$$Type;
}
}

declare module "packages/net/minecraft/data/$DataProvider$Factory" {
import { $DataProvider, $DataProvider$$Type } from "packages/net/minecraft/data/$DataProvider"
import { $PackOutput } from "packages/net/minecraft/data/$PackOutput"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataProvider$Factory$$Type<T extends $DataProvider> = ($DataProvider$Factory<T> | ((arg0: $PackOutput) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataProvider$Factory_<T extends $DataProvider> = $DataProvider$Factory$$Type<T>;
}
}

declare module "packages/net/minecraft/data/$BlockFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockFamily$$Type = ($BlockFamily);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockFamily_ = $BlockFamily$$Type;
}
}

declare module "packages/net/minecraft/data/loot/$BlockLootSubProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockLootSubProvider$$Type = ($BlockLootSubProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockLootSubProvider_ = $BlockLootSubProvider$$Type;
}
}

declare module "packages/net/minecraft/data/$PackOutput$Target" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackOutput$Target$$Type = ($PackOutput$Target | ("data_pack" | "resource_pack" | "reports"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackOutput$Target_ = $PackOutput$Target$$Type;
}
}

declare module "packages/net/minecraft/data/worldgen/$BootstapContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BootstapContext$$Type<T> = ($BootstapContext<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BootstapContext_<T> = $BootstapContext$$Type<T>;
}
}

declare module "packages/net/minecraft/data/$PackOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackOutput$$Type = ($PackOutput);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackOutput_ = $PackOutput$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$RecipeBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeBuilder$$Type = ($RecipeBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeBuilder_ = $RecipeBuilder$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$CraftingRecipeBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CraftingRecipeBuilder$$Type = ($CraftingRecipeBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CraftingRecipeBuilder_ = $CraftingRecipeBuilder$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$ShapelessRecipeBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShapelessRecipeBuilder$$Type = ($ShapelessRecipeBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShapelessRecipeBuilder_ = $ShapelessRecipeBuilder$$Type;
}
}

declare module "packages/net/minecraft/data/$DataProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataProvider$$Type = ($DataProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataProvider_ = $DataProvider$$Type;
}
}

declare module "packages/net/minecraft/data/$CachedOutput" {
import { $Path } from "packages/java/nio/file/$Path"
import { $HashCode } from "packages/com/google/common/hash/$HashCode"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CachedOutput$$Type = ($CachedOutput | ((arg0: $Path, arg1: byte[], arg2: $HashCode) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CachedOutput_ = $CachedOutput$$Type;
}
}

declare module "packages/net/minecraft/data/recipes/$ShapedRecipeBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShapedRecipeBuilder$$Type = ($ShapedRecipeBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShapedRecipeBuilder_ = $ShapedRecipeBuilder$$Type;
}
}

declare module "packages/net/minecraft/data/$PackOutput$PathProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PackOutput$PathProvider$$Type = ($PackOutput$PathProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PackOutput$PathProvider_ = $PackOutput$PathProvider$$Type;
}
}

