declare module "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IIngredientConsumer } from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import { $VerticalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import { $IRecipeSlotTooltipCallback$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import { $IPlaceable } from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import { $HorizontalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import { $IIngredientAcceptor } from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import { $IRecipeSlotRichTooltipCallback$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $IIngredientRenderer$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $IDrawable$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<$IRecipeSlotBuilder>, $IPlaceable<$IRecipeSlotBuilder> {
"addFluidStack"(fluid0: $Fluid$$Type): $IRecipeSlotBuilder
"addIngredient"<I>(iIngredientType0: $IIngredientType$$Type<I>, i1: I): $IRecipeSlotBuilder
"addIngredients"<I>(iIngredientType0: $IIngredientType$$Type<I>, list1: $List$$Type<I>): $IRecipeSlotBuilder
"addItemLike"(itemLike0: $ItemLike$$Type): $IIngredientConsumer
"addRichTooltipCallback"(iRecipeSlotRichTooltipCallback0: $IRecipeSlotRichTooltipCallback$$Type): $IRecipeSlotBuilder
/** @deprecated */
"addTooltipCallback"(iRecipeSlotTooltipCallback0: $IRecipeSlotTooltipCallback$$Type): $IRecipeSlotBuilder
"addTypedIngredient"<I>(iTypedIngredient0: $ITypedIngredient$$Type<I>): $IRecipeSlotBuilder
"addTypedIngredients"(list0: $List$$Type<$ITypedIngredient$$Type<any>>): $IRecipeSlotBuilder
"getHeight"(): integer
"getWidth"(): integer
"setBackground"(iDrawable0: $IDrawable$$Type, int1: integer, int2: integer): $IRecipeSlotBuilder
"setCustomRenderer"<T>(iIngredientType0: $IIngredientType$$Type<T>, iIngredientRenderer1: $IIngredientRenderer$$Type<T>): $IRecipeSlotBuilder
"setFluidRenderer"(long0: long, boolean1: boolean, int2: integer, int3: integer): $IRecipeSlotBuilder
"setOutputSlotBackground"(): $IRecipeSlotBuilder
"setOverlay"(iDrawable0: $IDrawable$$Type, int1: integer, int2: integer): $IRecipeSlotBuilder
"setPosition"(int0: integer, int1: integer): $IRecipeSlotBuilder
"setPosition"(int0: integer, int1: integer, int2: integer, int3: integer, horizontalAlignment4: $HorizontalAlignment$$Type, verticalAlignment5: $VerticalAlignment$$Type): $IRecipeSlotBuilder
"setSlotName"(string0: string): $IRecipeSlotBuilder
"setStandardSlotBackground"(): $IRecipeSlotBuilder
get "height"(): integer
get "width"(): integer
set "slotName"(value: string)
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
export abstract class $IRecipeSlotBuilder$$Static implements $IRecipeSlotBuilder {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$IRecipeWidget" {
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $ScreenPosition } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeWidget {
/** @deprecated */
"draw"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"drawWidget"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"getPosition"(): $ScreenPosition
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, double1: double, double2: double): void
"tick"(): void
get "position"(): $ScreenPosition
}

export namespace $IRecipeWidget {
const probejs$$marker: never
}
export abstract class $IRecipeWidget$$Static implements $IRecipeWidget {
}
}

declare module "packages/mezz/jei/api/registration/$IRecipeRegistration" {
import { $IJeiHelpers } from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $List$$Type } from "packages/java/util/$List"
import { $RecipeType$$Type } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IVanillaRecipeFactory } from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import { $IIngredientManager } from "packages/mezz/jei/api/runtime/$IIngredientManager"
import { $IIngredientVisibility } from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IRecipeRegistration {
"addIngredientInfo"<T>(list0: $List$$Type<T>, iIngredientType1: $IIngredientType$$Type<T>, ...component2s: $Component$$Type[]): void
"addIngredientInfo"(itemLike0: $ItemLike$$Type, ...component1s: $Component$$Type[]): void
"addIngredientInfo"<T>(t0: T, iIngredientType1: $IIngredientType$$Type<T>, ...component2s: $Component$$Type[]): void
"addItemStackInfo"(itemStack0: $ItemStack$$Type, ...component1s: $Component$$Type[]): void
"addItemStackInfo"(list0: $List$$Type<$ItemStack$$Type>, ...component1s: $Component$$Type[]): void
"addRecipes"<T>(recipeType0: $RecipeType$$Type<T>, list1: $List$$Type<T>): void
"getIngredientManager"(): $IIngredientManager
/** @deprecated */
"getIngredientVisibility"(): $IIngredientVisibility
"getJeiHelpers"(): $IJeiHelpers
"getVanillaRecipeFactory"(): $IVanillaRecipeFactory
get "ingredientManager"(): $IIngredientManager
get "ingredientVisibility"(): $IIngredientVisibility
get "jeiHelpers"(): $IJeiHelpers
get "vanillaRecipeFactory"(): $IVanillaRecipeFactory
}

export namespace $IRecipeRegistration {
const probejs$$marker: never
}
export abstract class $IRecipeRegistration$$Static implements $IRecipeRegistration {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $RecipeIngredientRole } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeSlotView {
"drawHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
"getAllIngredients"(): $Stream<$ITypedIngredient<any>>
"getDisplayedIngredient"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Optional<T>
"getDisplayedIngredient"(): $Optional<$ITypedIngredient<any>>
"getDisplayedItemStack"(): $Optional<$ItemStack>
"getIngredients"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Stream<T>
"getItemStacks"(): $Stream<$ItemStack>
"getRole"(): $RecipeIngredientRole
"getSlotName"(): $Optional<string>
"isEmpty"(): boolean
get "allIngredients"(): $Stream<$ITypedIngredient<any>>
get "displayedIngredient"(): $Optional<$ITypedIngredient<any>>
get "displayedItemStack"(): $Optional<$ItemStack>
get "itemStacks"(): $Stream<$ItemStack>
get "role"(): $RecipeIngredientRole
get "slotName"(): $Optional<string>
get "empty"(): boolean
}

export namespace $IRecipeSlotView {
const probejs$$marker: never
}
export abstract class $IRecipeSlotView$$Static implements $IRecipeSlotView {
}
}

declare module "packages/mezz/jei/api/recipe/$IRecipeManager" {
import { $IRecipeCatalystLookup } from "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup"
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $IRecipeLookup } from "packages/mezz/jei/api/recipe/$IRecipeLookup"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $RecipeType, $RecipeType$$Type } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $IRecipeLayoutDrawable } from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IRecipeSlotDrawable } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import { $IRecipeCategoriesLookup } from "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup"
import { $Set$$Type } from "packages/java/util/$Set"
import { $IRecipeCategory, $IRecipeCategory$$Type } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $IScalableDrawable$$Type } from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import { $IFocusGroup$$Type } from "packages/mezz/jei/api/recipe/$IFocusGroup"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeManager {
"addRecipes"<T>(recipeType0: $RecipeType$$Type<T>, list1: $List$$Type<T>): void
"createRecipeCatalystLookup"(recipeType0: $RecipeType$$Type<any>): $IRecipeCatalystLookup
"createRecipeCategoryLookup"(): $IRecipeCategoriesLookup
"createRecipeLayoutDrawable"<T>(iRecipeCategory0: $IRecipeCategory$$Type<T>, t1: T, iFocusGroup2: $IFocusGroup$$Type, iScalableDrawable3: $IScalableDrawable$$Type, int4: integer): $Optional<$IRecipeLayoutDrawable<T>>
"createRecipeLayoutDrawable"<T>(iRecipeCategory0: $IRecipeCategory$$Type<T>, t1: T, iFocusGroup2: $IFocusGroup$$Type): $Optional<$IRecipeLayoutDrawable<T>>
"createRecipeLookup"<R>(recipeType0: $RecipeType$$Type<R>): $IRecipeLookup<R>
"createRecipeSlotDrawable"(recipeIngredientRole0: $RecipeIngredientRole$$Type, list1: $List$$Type<$Optional$$Type<$ITypedIngredient$$Type<any>>>, set2: $Set$$Type<integer>, int3: integer): $IRecipeSlotDrawable
/** @deprecated */
"createRecipeSlotDrawable"(recipeIngredientRole0: $RecipeIngredientRole$$Type, list1: $List$$Type<$Optional$$Type<$ITypedIngredient$$Type<any>>>, set2: $Set$$Type<integer>, int3: integer, int4: integer, int5: integer): $IRecipeSlotDrawable
"getRecipeCategory"<T>(recipeType0: $RecipeType$$Type<T>): $IRecipeCategory<T>
"getRecipeType"(resourceLocation0: $ResourceLocation$$Type): $Optional<$RecipeType<any>>
"getRecipeType"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): $Optional<$RecipeType<T>>
"hideRecipeCategory"(recipeType0: $RecipeType$$Type<any>): void
"hideRecipes"<T>(recipeType0: $RecipeType$$Type<T>, collection1: $Collection$$Type<T>): void
"unhideRecipeCategory"(recipeType0: $RecipeType$$Type<any>): void
"unhideRecipes"<T>(recipeType0: $RecipeType$$Type<T>, collection1: $Collection$$Type<T>): void
}

export namespace $IRecipeManager {
const probejs$$marker: never
}
export abstract class $IRecipeManager$$Static implements $IRecipeManager {
}
}

declare module "packages/mezz/jei/api/runtime/$IRecipesGui" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IRecipeCategory$$Type } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $RecipeType$$Type } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $IFocus$$Type } from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipesGui {
"getIngredientUnderMouse"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Optional<T>
"show"<V>(iFocus0: $IFocus$$Type<V>): void
"show"(list0: $List$$Type<$IFocus$$Type<any>>): void
"showRecipes"<T>(iRecipeCategory0: $IRecipeCategory$$Type<T>, list1: $List$$Type<T>, list2: $List$$Type<$IFocus$$Type<any>>): void
"showTypes"(list0: $List$$Type<$RecipeType$$Type<any>>): void
}

export namespace $IRecipesGui {
const probejs$$marker: never
}
export abstract class $IRecipesGui$$Static implements $IRecipesGui {
}
}

declare module "packages/mezz/jei/api/helpers/$IJeiHelpers" {
import { $IModIdHelper } from "packages/mezz/jei/api/helpers/$IModIdHelper"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $RecipeType } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $IColorHelper } from "packages/mezz/jei/api/helpers/$IColorHelper"
import { $IVanillaRecipeFactory } from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IIngredientManager } from "packages/mezz/jei/api/runtime/$IIngredientManager"
import { $IFocusFactory } from "packages/mezz/jei/api/recipe/$IFocusFactory"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $IIngredientVisibility } from "packages/mezz/jei/api/runtime/$IIngredientVisibility"
import { $IGuiHelper } from "packages/mezz/jei/api/helpers/$IGuiHelper"
import { $IPlatformFluidHelper } from "packages/mezz/jei/api/helpers/$IPlatformFluidHelper"
import { $IStackHelper } from "packages/mezz/jei/api/helpers/$IStackHelper"

export interface $IJeiHelpers {
"getAllRecipeTypes"(): $Stream<$RecipeType<any>>
"getColorHelper"(): $IColorHelper
"getFocusFactory"(): $IFocusFactory
"getGuiHelper"(): $IGuiHelper
"getIngredientManager"(): $IIngredientManager
"getIngredientVisibility"(): $IIngredientVisibility
"getModIdHelper"(): $IModIdHelper
"getPlatformFluidHelper"(): $IPlatformFluidHelper<any>
/** @deprecated */
"getRecipeType"(resourceLocation0: $ResourceLocation$$Type): $Optional<$RecipeType<any>>
"getRecipeType"<T>(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>): $Optional<$RecipeType<T>>
"getStackHelper"(): $IStackHelper
"getVanillaRecipeFactory"(): $IVanillaRecipeFactory
get "allRecipeTypes"(): $Stream<$RecipeType<any>>
get "colorHelper"(): $IColorHelper
get "focusFactory"(): $IFocusFactory
get "guiHelper"(): $IGuiHelper
get "ingredientManager"(): $IIngredientManager
get "ingredientVisibility"(): $IIngredientVisibility
get "modIdHelper"(): $IModIdHelper
get "platformFluidHelper"(): $IPlatformFluidHelper<any>
get "stackHelper"(): $IStackHelper
get "vanillaRecipeFactory"(): $IVanillaRecipeFactory
}

export namespace $IJeiHelpers {
const probejs$$marker: never
}
export abstract class $IJeiHelpers$$Static implements $IJeiHelpers {
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigValueSerializer" {
import { $IJeiConfigValueSerializer$IDeserializeResult } from "packages/mezz/jei/api/runtime/config/$IJeiConfigValueSerializer$IDeserializeResult"
import { $Collection } from "packages/java/util/$Collection"
import { $Optional } from "packages/java/util/$Optional"

export interface $IJeiConfigValueSerializer<T> {
"deserialize"(string0: string): $IJeiConfigValueSerializer$IDeserializeResult<T>
"getAllValidValues"(): $Optional<$Collection<T>>
"getValidValuesDescription"(): string
"isValid"(t0: T): boolean
"serialize"(t0: T): string
get "allValidValues"(): $Optional<$Collection<T>>
get "validValuesDescription"(): string
}

export namespace $IJeiConfigValueSerializer {
const probejs$$marker: never
}
export abstract class $IJeiConfigValueSerializer$$Static<T> implements $IJeiConfigValueSerializer<T> {
}
}

declare module "packages/mezz/jei/api/helpers/$IColorHelper" {
import { $List } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IColorHelper {
"getClosestColorName"(int0: integer): string
"getColors"(itemStack0: $ItemStack$$Type, int1: integer): $List<integer>
"getColors"(textureAtlasSprite0: $TextureAtlasSprite$$Type, int1: integer, int2: integer): $List<integer>
}

export namespace $IColorHelper {
const probejs$$marker: never
}
export abstract class $IColorHelper$$Static implements $IColorHelper {
}
}

declare module "packages/mezz/jei/api/helpers/$IStackHelper" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $UidContext$$Type } from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IStackHelper {
"getUniqueIdentifierForStack"(itemStack0: $ItemStack$$Type, uidContext1: $UidContext$$Type): string
"isEquivalent"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, uidContext2: $UidContext$$Type): boolean
}

export namespace $IStackHelper {
const probejs$$marker: never
}
export abstract class $IStackHelper$$Static implements $IStackHelper {
}
}

declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe" {
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiBrewingRecipe {
"getBrewingSteps"(): integer
"getIngredients"(): $List<$ItemStack>
"getPotionInputs"(): $List<$ItemStack>
"getPotionOutput"(): $ItemStack
"getUid"(): $ResourceLocation
get "brewingSteps"(): integer
get "ingredients"(): $List<$ItemStack>
get "potionInputs"(): $List<$ItemStack>
get "potionOutput"(): $ItemStack
get "uid"(): $ResourceLocation
}

export namespace $IJeiBrewingRecipe {
const probejs$$marker: never
}
export abstract class $IJeiBrewingRecipe$$Static implements $IJeiBrewingRecipe {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory" {
import { $List$$Type } from "packages/java/util/$List"
import { $ISlottedWidgetFactory } from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import { $IRecipeExtrasBuilder$$Type } from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $IRecipeSlotDrawable$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/** @deprecated */
export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<R> {
/** @deprecated */
"createWidgetForSlots"(iRecipeExtrasBuilder0: $IRecipeExtrasBuilder$$Type, r1: R, list2: $List$$Type<$IRecipeSlotDrawable$$Type>): void
"getArea"(): $ScreenRectangle
"setPosition"(int0: integer, int1: integer): void
get "area"(): $ScreenRectangle
}

export namespace $IScrollGridWidgetFactory {
const probejs$$marker: never
}
export abstract class $IScrollGridWidgetFactory$$Static<R> implements $IScrollGridWidgetFactory<R> {
}
}

declare module "packages/mezz/jei/api/recipe/$IFocus" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $RecipeIngredientRole } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $Optional } from "packages/java/util/$Optional"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocus<V> {
"checkedCast"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Optional<$IFocus<T>>
"getRole"(): $RecipeIngredientRole
"getTypedValue"(): $ITypedIngredient<V>
get "role"(): $RecipeIngredientRole
get "typedValue"(): $ITypedIngredient<V>
}

export namespace $IFocus {
const probejs$$marker: never
}
export abstract class $IFocus$$Static<V> implements $IFocus<V> {
}
}

declare module "packages/mezz/jei/api/recipe/$IFocusGroup" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IFocus } from "packages/mezz/jei/api/recipe/$IFocus"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFocusGroup {
"getAllFocuses"(): $List<$IFocus<any>>
"getFocuses"<T>(iIngredientType0: $IIngredientType$$Type<T>, recipeIngredientRole1: $RecipeIngredientRole$$Type): $Stream<$IFocus<T>>
"getFocuses"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Stream<$IFocus<T>>
"getFocuses"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $Stream<$IFocus<any>>
"getItemStackFocuses"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $Stream<$IFocus<$ItemStack>>
"getItemStackFocuses"(): $Stream<$IFocus<$ItemStack>>
"isEmpty"(): boolean
get "allFocuses"(): $List<$IFocus<any>>
get "itemStackFocuses"(): $Stream<$IFocus<$ItemStack>>
get "empty"(): boolean
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
export abstract class $IFocusGroup$$Static implements $IFocusGroup {
}
}

declare module "packages/mezz/jei/api/runtime/$IJeiKeyMapping" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiKeyMapping {
"getTranslatedKeyMessage"(): $Component
"isActiveAndMatches"(key0: $InputConstants$Key$$Type): boolean
"isUnbound"(): boolean
get "translatedKeyMessage"(): $Component
get "unbound"(): boolean
}

export namespace $IJeiKeyMapping {
const probejs$$marker: never
}
export abstract class $IJeiKeyMapping$$Static implements $IJeiKeyMapping {
}
}

declare module "packages/mezz/jei/api/recipe/$RecipeType" {
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeType<T> {
constructor(resourceLocation0: $ResourceLocation$$Type, class1: $Class$$Type<T>)

public static "create"<T>(string0: string, string1: string, class2: $Class$$Type<T>): $RecipeType<T>
public "getRecipeClass"(): $Class<T>
public "getUid"(): $ResourceLocation
get "recipeClass"(): $Class<T>
get "uid"(): $ResourceLocation
}
}

declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget" {
import { $VerticalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IPlaceable } from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import { $Optional } from "packages/java/util/$Optional"
import { $RecipeSlotUnderMouse } from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import { $ScreenPosition } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $HorizontalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ISlottedRecipeWidget } from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"

export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<$IScrollGridWidget> {
/** @deprecated */
"draw"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"drawWidget"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"getHeight"(): integer
"getPosition"(): $ScreenPosition
"getScreenRectangle"(): $ScreenRectangle
"getSlotUnderMouse"(double0: double, double1: double): $Optional<$RecipeSlotUnderMouse>
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, double1: double, double2: double): void
"getWidth"(): integer
"setPosition"(int0: integer, int1: integer): $IScrollGridWidget
"setPosition"(int0: integer, int1: integer, int2: integer, int3: integer, horizontalAlignment4: $HorizontalAlignment$$Type, verticalAlignment5: $VerticalAlignment$$Type): $IScrollGridWidget
"tick"(): void
get "height"(): integer
get "position"(): $ScreenPosition
get "screenRectangle"(): $ScreenRectangle
get "width"(): integer
}

export namespace $IScrollGridWidget {
const probejs$$marker: never
}
export abstract class $IScrollGridWidget$$Static implements $IScrollGridWidget {
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IIngredientVisibility$IListener$$Type } from "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility {
"isIngredientVisible"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>): boolean
"isIngredientVisible"<V>(iIngredientType0: $IIngredientType$$Type<V>, v1: V): boolean
"registerListener"(iListener0: $IIngredientVisibility$IListener$$Type): void
}

export namespace $IIngredientVisibility {
const probejs$$marker: never
}
export abstract class $IIngredientVisibility$$Static implements $IIngredientVisibility {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget" {
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $IJeiInputHandler } from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipeWidget } from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import { $List$$Type } from "packages/java/util/$List"
import { $ScreenPosition } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $IDrawable$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $IJeiUserInput$$Type } from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {
/** @deprecated */
"draw"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"drawWidget"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"getArea"(): $ScreenRectangle
"getContentAreaHeight"(): integer
"getContentAreaWidth"(): integer
"getPosition"(): $ScreenPosition
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, double1: double, double2: double): void
"handleInput"(double0: double, double1: double, iJeiUserInput2: $IJeiUserInput$$Type): boolean
"handleMouseDragged"(double0: double, double1: double, key2: $InputConstants$Key$$Type, double3: double, double4: double): boolean
"handleMouseMoved"(double0: double, double1: double): void
"handleMouseScrolled"(double0: double, double1: double, double2: double): boolean
"setContents"(list0: $List$$Type<$FormattedText$$Type>): $IScrollBoxWidget
"setContents"(iDrawable0: $IDrawable$$Type): $IScrollBoxWidget
"tick"(): void
get "area"(): $ScreenRectangle
get "contentAreaHeight"(): integer
get "contentAreaWidth"(): integer
get "position"(): $ScreenPosition
set "contents"(value: $List$$Type<$FormattedText$$Type>)
set "contents"(value: $IDrawable$$Type)
}

export namespace $IScrollBoxWidget {
const probejs$$marker: never
}
export abstract class $IScrollBoxWidget$$Static implements $IScrollBoxWidget {
}
}

declare module "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IJeiInputHandler } from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import { $IRecipeCategory } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $Optional } from "packages/java/util/$Optional"
import { $RecipeSlotUnderMouse } from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"
import { $IRecipeSlotDrawable } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import { $IRecipeSlotsView } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeLayoutDrawable<R> {
"drawOverlays"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
"drawRecipe"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
"getIngredientUnderMouse"<T>(int0: integer, int1: integer, iIngredientType2: $IIngredientType$$Type<T>): $Optional<T>
"getInputHandler"(): $IJeiInputHandler
"getItemStackUnderMouse"(int0: integer, int1: integer): $Optional<$ItemStack>
"getRecipe"(): R
"getRecipeBookmarkButtonArea"(): $Rect2i
"getRecipeCategory"(): $IRecipeCategory<R>
/** @deprecated */
"getRecipeSlotUnderMouse"(double0: double, double1: double): $Optional<$IRecipeSlotDrawable>
"getRecipeSlotsView"(): $IRecipeSlotsView
"getRecipeTransferButtonArea"(): $Rect2i
"getRect"(): $Rect2i
"getRectWithBorder"(): $Rect2i
"getSlotUnderMouse"(double0: double, double1: double): $Optional<$RecipeSlotUnderMouse>
"isMouseOver"(double0: double, double1: double): boolean
"setPosition"(int0: integer, int1: integer): void
"tick"(): void
get "inputHandler"(): $IJeiInputHandler
get "recipe"(): R
get "recipeBookmarkButtonArea"(): $Rect2i
get "recipeCategory"(): $IRecipeCategory<R>
get "recipeSlotsView"(): $IRecipeSlotsView
get "recipeTransferButtonArea"(): $Rect2i
get "rect"(): $Rect2i
get "rectWithBorder"(): $Rect2i
}

export namespace $IRecipeLayoutDrawable {
const probejs$$marker: never
}
export abstract class $IRecipeLayoutDrawable$$Static<R> implements $IRecipeLayoutDrawable<R> {
}
}

declare module "packages/mezz/jei/api/ingredients/subtypes/$UidContext" {
import { $Enum } from "packages/java/lang/$Enum"

export class $UidContext extends $Enum<$UidContext> {
static readonly "Ingredient": $UidContext
static readonly "Recipe": $UidContext

public static "valueOf"(string0: string): $UidContext
public static "values"(): $UidContext[]
}
}

declare module "packages/mezz/jei/api/registration/$ISubtypeRegistration" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $IIngredientSubtypeInterpreter$$Type } from "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IIngredientTypeWithSubtypes$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $ISubtypeRegistration {
"registerSubtypeInterpreter"<B, I>(iIngredientTypeWithSubtypes0: $IIngredientTypeWithSubtypes$$Type<B, I>, b1: B, iIngredientSubtypeInterpreter2: $IIngredientSubtypeInterpreter$$Type<I>): void
"registerSubtypeInterpreter"(item0: $Item$$Type, iIngredientSubtypeInterpreter1: $IIngredientSubtypeInterpreter$$Type<$ItemStack$$Type>): void
"useNbtForSubtypes"(...fluid0s: $Fluid$$Type[]): void
"useNbtForSubtypes"(...item0s: $Item$$Type[]): void
}

export namespace $ISubtypeRegistration {
const probejs$$marker: never
}
export abstract class $ISubtypeRegistration$$Static implements $ISubtypeRegistration {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IDrawableAnimated$StartDirection extends $Enum<$IDrawableAnimated$StartDirection> {
static readonly "BOTTOM": $IDrawableAnimated$StartDirection
static readonly "LEFT": $IDrawableAnimated$StartDirection
static readonly "RIGHT": $IDrawableAnimated$StartDirection
static readonly "TOP": $IDrawableAnimated$StartDirection

public static "valueOf"(string0: string): $IDrawableAnimated$StartDirection
public static "values"(): $IDrawableAnimated$StartDirection[]
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener" {
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility$IListener {
"onIngredientVisibilityChanged"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>, boolean1: boolean): void
}

export namespace $IIngredientVisibility$IListener {
const probejs$$marker: never
}
export abstract class $IIngredientVisibility$IListener$$Static implements $IIngredientVisibility$IListener {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$ITextWidget" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $VerticalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import { $IPlaceable } from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import { $HorizontalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"

export interface $ITextWidget extends $IPlaceable<$ITextWidget> {
"getHeight"(): integer
"getWidth"(): integer
"setColor"(int0: integer): $ITextWidget
"setFont"(font0: $Font$$Type): $ITextWidget
"setLineSpacing"(int0: integer): $ITextWidget
"setPosition"(int0: integer, int1: integer): $ITextWidget
"setPosition"(int0: integer, int1: integer, int2: integer, int3: integer, horizontalAlignment4: $HorizontalAlignment$$Type, verticalAlignment5: $VerticalAlignment$$Type): $ITextWidget
"setShadow"(boolean0: boolean): $ITextWidget
"setTextAlignment"(horizontalAlignment0: $HorizontalAlignment$$Type): $ITextWidget
"setTextAlignment"(verticalAlignment0: $VerticalAlignment$$Type): $ITextWidget
get "height"(): integer
get "width"(): integer
set "color"(value: integer)
set "font"(value: $Font$$Type)
set "lineSpacing"(value: integer)
set "shadow"(value: boolean)
set "textAlignment"(value: $HorizontalAlignment$$Type)
set "textAlignment"(value: $VerticalAlignment$$Type)
}

export namespace $ITextWidget {
const probejs$$marker: never
}
export abstract class $ITextWidget$$Static implements $ITextWidget {
}
}

declare module "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IEditModeConfig$HideMode extends $Enum<$IEditModeConfig$HideMode> {
static readonly "SINGLE": $IEditModeConfig$HideMode
static readonly "WILDCARD": $IEditModeConfig$HideMode

public static "valueOf"(string0: string): $IEditModeConfig$HideMode
public static "values"(): $IEditModeConfig$HideMode[]
}
}

declare module "packages/mezz/jei/api/recipe/category/$IRecipeCategory" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $IRecipeLayoutBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $RecipeType } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $IRecipeExtrasBuilder$$Type } from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $IRecipeSlotDrawable$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import { $IRecipeSlotsView$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IFocusGroup$$Type } from "packages/mezz/jei/api/recipe/$IFocusGroup"
import { $IDrawable } from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IRecipeCategory<T> {
"createRecipeExtras"(iRecipeExtrasBuilder0: $IRecipeExtrasBuilder$$Type, t1: T, iFocusGroup2: $IFocusGroup$$Type): void
"draw"(t0: T, iRecipeSlotsView1: $IRecipeSlotsView$$Type, guiGraphics2: $GuiGraphics$$Type, double3: double, double4: double): void
/** @deprecated */
"getBackground"(): $IDrawable
"getHeight"(): integer
"getIcon"(): $IDrawable
"getRecipeType"(): $RecipeType<T>
"getRegistryName"(t0: T): $ResourceLocation
"getTitle"(): $Component
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, t1: T, iRecipeSlotsView2: $IRecipeSlotsView$$Type, double3: double, double4: double): void
/** @deprecated */
"getTooltipStrings"(t0: T, iRecipeSlotsView1: $IRecipeSlotsView$$Type, double2: double, double3: double): $List<$Component>
"getWidth"(): integer
/** @deprecated */
"handleInput"(t0: T, double1: double, double2: double, key3: $InputConstants$Key$$Type): boolean
"isHandled"(t0: T): boolean
"onDisplayedIngredientsUpdate"(t0: T, list1: $List$$Type<$IRecipeSlotDrawable$$Type>, iFocusGroup2: $IFocusGroup$$Type): void
"setRecipe"(iRecipeLayoutBuilder0: $IRecipeLayoutBuilder$$Type, t1: T, iFocusGroup2: $IFocusGroup$$Type): void
get "background"(): $IDrawable
get "height"(): integer
get "icon"(): $IDrawable
get "recipeType"(): $RecipeType<T>
get "title"(): $Component
get "width"(): integer
}

export namespace $IRecipeCategory {
const probejs$$marker: never
}
export abstract class $IRecipeCategory$$Static<T> implements $IRecipeCategory<T> {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback" {
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipeSlotView$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotRichTooltipCallback {
"onRichTooltip"(iRecipeSlotView0: $IRecipeSlotView$$Type, iTooltipBuilder1: $ITooltipBuilder$$Type): void
}

export namespace $IRecipeSlotRichTooltipCallback {
const probejs$$marker: never
}
export abstract class $IRecipeSlotRichTooltipCallback$$Static implements $IRecipeSlotRichTooltipCallback {
}
}

declare module "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse" {
import { $Record } from "packages/java/lang/$Record"
import { $ScreenPosition, $ScreenPosition$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $IRecipeSlotDrawable, $IRecipeSlotDrawable$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export class $RecipeSlotUnderMouse extends $Record {
constructor(iRecipeSlotDrawable0: $IRecipeSlotDrawable$$Type, int1: integer, int2: integer)
constructor(slot: $IRecipeSlotDrawable$$Type, offset: $ScreenPosition$$Type)

public "addOffset"(int0: integer, int1: integer): $RecipeSlotUnderMouse
public "isMouseOver"(double0: double, double1: double): boolean
public "offset"(): $ScreenPosition
public "slot"(): $IRecipeSlotDrawable
}
}

declare module "packages/mezz/jei/api/helpers/$IModIdHelper" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IIngredientHelper$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IModIdHelper {
/** @deprecated */
"addModNameToIngredientTooltip"<T>(list0: $List$$Type<$Component$$Type>, iTypedIngredient1: $ITypedIngredient$$Type<T>): $List<$Component>
/** @deprecated */
"addModNameToIngredientTooltip"<T>(list0: $List$$Type<$Component$$Type>, t1: T, iIngredientHelper2: $IIngredientHelper$$Type<T>): $List<$Component>
"getFormattedModNameForModId"(string0: string): string
"getModNameForModId"(string0: string): string
"getModNameForTooltip"<T>(iTypedIngredient0: $ITypedIngredient$$Type<T>): $Optional<$Component>
"isDisplayingModNameEnabled"(): boolean
get "displayingModNameEnabled"(): boolean
}

export namespace $IModIdHelper {
const probejs$$marker: never
}
export abstract class $IModIdHelper$$Static implements $IModIdHelper {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView" {
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $IRecipeSlotDrawable } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export interface $IRecipeSlotDrawablesView {
"findSlotByName"(string0: string): $Optional<$IRecipeSlotDrawable>
"getSlots"(): $List<$IRecipeSlotDrawable>
"getSlots"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $List<$IRecipeSlotDrawable>
get "slots"(): $List<$IRecipeSlotDrawable>
}

export namespace $IRecipeSlotDrawablesView {
const probejs$$marker: never
}
export abstract class $IRecipeSlotDrawablesView$$Static implements $IRecipeSlotDrawablesView {
}
}

declare module "packages/mezz/jei/api/recipe/$RecipeIngredientRole" {
import { $Enum } from "packages/java/lang/$Enum"

export class $RecipeIngredientRole extends $Enum<$RecipeIngredientRole> {
static readonly "CATALYST": $RecipeIngredientRole
static readonly "INPUT": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole

public static "valueOf"(string0: string): $RecipeIngredientRole
public static "values"(): $RecipeIngredientRole[]
}
}

declare module "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder" {
import { $IRecipeWidget$$Type } from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import { $IPlaceable } from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import { $IScrollGridWidget } from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget"
import { $IRecipeSlotDrawable$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import { $ISlottedRecipeWidget$$Type } from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"
import { $ITextWidget } from "packages/mezz/jei/api/gui/widgets/$ITextWidget"
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $IJeiInputHandler$$Type } from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import { $IScrollBoxWidget } from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import { $List$$Type } from "packages/java/util/$List"
import { $IJeiGuiEventListener$$Type } from "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener"
import { $IRecipeSlotDrawablesView } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView"
import { $IDrawable$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeExtrasBuilder {
"addAnimatedRecipeArrow"(int0: integer): $IPlaceable<any>
"addAnimatedRecipeFlame"(int0: integer): $IPlaceable<any>
"addDrawable"(iDrawable0: $IDrawable$$Type, int1: integer, int2: integer): void
"addDrawable"(iDrawable0: $IDrawable$$Type): $IPlaceable<any>
"addGuiEventListener"(iJeiGuiEventListener0: $IJeiGuiEventListener$$Type): void
"addInputHandler"(iJeiInputHandler0: $IJeiInputHandler$$Type): void
"addRecipeArrow"(): $IPlaceable<any>
"addRecipePlusSign"(): $IPlaceable<any>
"addScrollBoxWidget"(int0: integer, int1: integer, int2: integer, int3: integer): $IScrollBoxWidget
"addScrollGridWidget"(list0: $List$$Type<$IRecipeSlotDrawable$$Type>, int1: integer, int2: integer): $IScrollGridWidget
"addSlottedWidget"(iSlottedRecipeWidget0: $ISlottedRecipeWidget$$Type, list1: $List$$Type<$IRecipeSlotDrawable$$Type>): void
"addText"(formattedText0: $FormattedText$$Type, int1: integer, int2: integer): $ITextWidget
"addText"(list0: $List$$Type<$FormattedText$$Type>, int1: integer, int2: integer): $ITextWidget
"addWidget"(iRecipeWidget0: $IRecipeWidget$$Type): void
"getRecipeSlots"(): $IRecipeSlotDrawablesView
get "recipeSlots"(): $IRecipeSlotDrawablesView
}

export namespace $IRecipeExtrasBuilder {
const probejs$$marker: never
}
export abstract class $IRecipeExtrasBuilder$$Static implements $IRecipeExtrasBuilder {
}
}

declare module "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup" {
import { $IRecipeCategory } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $RecipeType$$Type } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $IFocus$$Type } from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipeCategoriesLookup {
"get"(): $Stream<$IRecipeCategory<any>>
"includeHidden"(): $IRecipeCategoriesLookup
"limitFocus"(collection0: $Collection$$Type<$IFocus$$Type<any>>): $IRecipeCategoriesLookup
"limitTypes"(collection0: $Collection$$Type<$RecipeType$$Type<any>>): $IRecipeCategoriesLookup
}

export namespace $IRecipeCategoriesLookup {
const probejs$$marker: never
}
export abstract class $IRecipeCategoriesLookup$$Static implements $IRecipeCategoriesLookup {
}
}

declare module "packages/mezz/jei/api/gui/$ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITickTimer {
"getMaxValue"(): integer
"getValue"(): integer
get "maxValue"(): integer
get "value"(): integer
}

export namespace $ITickTimer {
const probejs$$marker: never
}
export abstract class $ITickTimer$$Static implements $ITickTimer {
}
}

declare module "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter" {
import { $UidContext$$Type } from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientSubtypeInterpreter<T> {
"apply"(t0: T, uidContext1: $UidContext$$Type): string
}

export namespace $IIngredientSubtypeInterpreter {
const NONE: string
}
export abstract class $IIngredientSubtypeInterpreter$$Static<T> implements $IIngredientSubtypeInterpreter<T> {
static readonly "NONE": string

}
}

declare module "packages/mezz/jei/api/gui/placement/$HorizontalAlignment" {
import { $Enum } from "packages/java/lang/$Enum"

export class $HorizontalAlignment extends $Enum<$HorizontalAlignment> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment

public "getXPos"(int0: integer, int1: integer): integer
public static "valueOf"(string0: string): $HorizontalAlignment
public static "values"(): $HorizontalAlignment[]
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigValue" {
import { $IJeiConfigValueSerializer } from "packages/mezz/jei/api/runtime/config/$IJeiConfigValueSerializer"

export interface $IJeiConfigValue<T> {
"getDefaultValue"(): T
"getDescription"(): string
"getName"(): string
"getSerializer"(): $IJeiConfigValueSerializer<T>
"getValue"(): T
"set"(t0: T): boolean
get "defaultValue"(): T
get "description"(): string
get "name"(): string
get "serializer"(): $IJeiConfigValueSerializer<T>
get "value"(): T
}

export namespace $IJeiConfigValue {
const probejs$$marker: never
}
export abstract class $IJeiConfigValue$$Static<T> implements $IJeiConfigValue<T> {
}
}

declare module "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler" {
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $IJeiUserInput$$Type } from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"
import { $InputConstants$Key$$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiInputHandler {
"getArea"(): $ScreenRectangle
"handleInput"(double0: double, double1: double, iJeiUserInput2: $IJeiUserInput$$Type): boolean
"handleMouseDragged"(double0: double, double1: double, key2: $InputConstants$Key$$Type, double3: double, double4: double): boolean
"handleMouseMoved"(double0: double, double1: double): void
"handleMouseScrolled"(double0: double, double1: double, double2: double): boolean
get "area"(): $ScreenRectangle
}

export namespace $IJeiInputHandler {
const probejs$$marker: never
}
export abstract class $IJeiInputHandler$$Static implements $IJeiInputHandler {
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigValueSerializer$IDeserializeResult" {
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"

export interface $IJeiConfigValueSerializer$IDeserializeResult<T> {
"getErrors"(): $List<string>
"getResult"(): $Optional<T>
get "errors"(): $List<string>
get "result"(): $Optional<T>
}

export namespace $IJeiConfigValueSerializer$IDeserializeResult {
const probejs$$marker: never
}
export abstract class $IJeiConfigValueSerializer$IDeserializeResult$$Static<T> implements $IJeiConfigValueSerializer$IDeserializeResult<T> {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget" {
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipeWidget } from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import { $Optional } from "packages/java/util/$Optional"
import { $RecipeSlotUnderMouse } from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import { $ScreenPosition } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ISlottedRecipeWidget extends $IRecipeWidget {
/** @deprecated */
"draw"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"drawWidget"(guiGraphics0: $GuiGraphics$$Type, double1: double, double2: double): void
"getPosition"(): $ScreenPosition
"getSlotUnderMouse"(double0: double, double1: double): $Optional<$RecipeSlotUnderMouse>
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, double1: double, double2: double): void
"tick"(): void
get "position"(): $ScreenPosition
}

export namespace $ISlottedRecipeWidget {
const probejs$$marker: never
}
export abstract class $ISlottedRecipeWidget$$Static implements $ISlottedRecipeWidget {
}
}

declare module "packages/mezz/jei/api/gui/builder/$ITooltipBuilder" {
import { $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $ITooltipBuilder {
"add"(tooltipComponent0: $TooltipComponent$$Type): void
"add"(formattedText0: $FormattedText$$Type): void
"addAll"(collection0: $Collection$$Type<$FormattedText$$Type>): void
/** @deprecated */
"removeAll"(list0: $List$$Type<$Component$$Type>): void
"setIngredient"(iTypedIngredient0: $ITypedIngredient$$Type<any>): void
/** @deprecated */
"toLegacyToComponents"(): $List<$Component>
set "ingredient"(value: $ITypedIngredient$$Type<any>)
}

export namespace $ITooltipBuilder {
const probejs$$marker: never
}
export abstract class $ITooltipBuilder$$Static implements $ITooltipBuilder {
}
}

declare module "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement" {
import { $Record } from "packages/java/lang/$Record"

export class $BatchRenderElement<T> extends $Record {
constructor(ingredient: T, x: integer, y: integer)

public "ingredient"(): T
public "x"(): integer
public "y"(): integer
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IRecipeLayoutBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $IRecipeSlotBuilder, $IRecipeSlotBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingGridHelper {
"createAndSetInputs"(iRecipeLayoutBuilder0: $IRecipeLayoutBuilder$$Type, list1: $List$$Type<$List$$Type<$ItemStack$$Type>>, int2: integer, int3: integer): $List<$IRecipeSlotBuilder>
"createAndSetInputs"<T>(iRecipeLayoutBuilder0: $IRecipeLayoutBuilder$$Type, iIngredientType1: $IIngredientType$$Type<T>, list2: $List$$Type<$List$$Type<T>>, int3: integer, int4: integer): $List<$IRecipeSlotBuilder>
"createAndSetOutputs"<T>(iRecipeLayoutBuilder0: $IRecipeLayoutBuilder$$Type, iIngredientType1: $IIngredientType$$Type<T>, list2: $List$$Type<T>): $IRecipeSlotBuilder
"createAndSetOutputs"(iRecipeLayoutBuilder0: $IRecipeLayoutBuilder$$Type, list1: $List$$Type<$ItemStack$$Type>): $IRecipeSlotBuilder
"setInputs"<T>(list0: $List$$Type<$IRecipeSlotBuilder$$Type>, iIngredientType1: $IIngredientType$$Type<T>, list2: $List$$Type<$List$$Type<T>>, int3: integer, int4: integer): void
}

export namespace $ICraftingGridHelper {
const probejs$$marker: never
}
export abstract class $ICraftingGridHelper$$Static implements $ICraftingGridHelper {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IScalableDrawable" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Rect2i$$Type } from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IScalableDrawable {
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
"draw"(guiGraphics0: $GuiGraphics$$Type, rect2i1: $Rect2i$$Type): void
}

export namespace $IScalableDrawable {
const probejs$$marker: never
}
export abstract class $IScalableDrawable$$Static implements $IScalableDrawable {
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigCategory" {
import { $IJeiConfigValue } from "packages/mezz/jei/api/runtime/config/$IJeiConfigValue"
import { $Collection } from "packages/java/util/$Collection"

export interface $IJeiConfigCategory {
"getConfigValues"(): $Collection<$IJeiConfigValue<any>>
"getName"(): string
get "configValues"(): $Collection<$IJeiConfigValue<any>>
get "name"(): string
}

export namespace $IJeiConfigCategory {
const probejs$$marker: never
}
export abstract class $IJeiConfigCategory$$Static implements $IJeiConfigCategory {
}
}

declare module "packages/mezz/jei/api/helpers/$IGuiHelper" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $ITickTimer, $ITickTimer$$Type } from "packages/mezz/jei/api/gui/$ITickTimer"
import { $IRecipeWidget } from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IScrollGridWidgetFactory } from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ICraftingGridHelper } from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import { $IDrawableAnimated$StartDirection$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"
import { $IScrollBoxWidget } from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import { $IDrawableAnimated } from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import { $IDrawableBuilder } from "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $IDrawable, $IDrawable$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $IDrawableStatic, $IDrawableStatic$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"

export interface $IGuiHelper {
"createAnimatedDrawable"(iDrawableStatic0: $IDrawableStatic$$Type, int1: integer, startDirection2: $IDrawableAnimated$StartDirection$$Type, boolean3: boolean): $IDrawableAnimated
"createAnimatedDrawable"(iDrawableStatic0: $IDrawableStatic$$Type, iTickTimer1: $ITickTimer$$Type, startDirection2: $IDrawableAnimated$StartDirection$$Type): $IDrawableAnimated
"createAnimatedRecipeArrow"(int0: integer): $IDrawableAnimated
"createAnimatedRecipeFlame"(int0: integer): $IDrawableAnimated
"createBlankDrawable"(int0: integer, int1: integer): $IDrawableStatic
"createCraftingGridHelper"(): $ICraftingGridHelper
"createDrawable"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer): $IDrawableStatic
"createDrawableIngredient"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>): $IDrawable
"createDrawableIngredient"<V>(iIngredientType0: $IIngredientType$$Type<V>, v1: V): $IDrawable
"createDrawableItemLike"(itemLike0: $ItemLike$$Type): $IDrawable
"createDrawableItemStack"(itemStack0: $ItemStack$$Type): $IDrawable
/** @deprecated */
"createScrollBoxWidget"(iDrawable0: $IDrawable$$Type, int1: integer, int2: integer, int3: integer): $IScrollBoxWidget
"createScrollBoxWidget"(int0: integer, int1: integer, int2: integer, int3: integer): $IScrollBoxWidget
/** @deprecated */
"createScrollGridFactory"(int0: integer, int1: integer): $IScrollGridWidgetFactory<any>
"createTickTimer"(int0: integer, int1: integer, boolean2: boolean): $ITickTimer
"createWidgetFromDrawable"(iDrawable0: $IDrawable$$Type, int1: integer, int2: integer): $IRecipeWidget
"drawableBuilder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer): $IDrawableBuilder
"getOutputSlot"(): $IDrawableStatic
"getRecipeArrow"(): $IDrawableStatic
"getRecipeArrowFilled"(): $IDrawableStatic
"getRecipeFlameEmpty"(): $IDrawableStatic
"getRecipeFlameFilled"(): $IDrawableStatic
"getRecipePlusSign"(): $IDrawableStatic
/** @deprecated */
"getScrollBoxScrollbarExtraWidth"(): integer
"getSlotDrawable"(): $IDrawableStatic
get "outputSlot"(): $IDrawableStatic
get "recipeArrow"(): $IDrawableStatic
get "recipeArrowFilled"(): $IDrawableStatic
get "recipeFlameEmpty"(): $IDrawableStatic
get "recipeFlameFilled"(): $IDrawableStatic
get "recipePlusSign"(): $IDrawableStatic
get "scrollBoxScrollbarExtraWidth"(): integer
get "slotDrawable"(): $IDrawableStatic
}

export namespace $IGuiHelper {
const probejs$$marker: never
}
export abstract class $IGuiHelper$$Static implements $IGuiHelper {
}
}

declare module "packages/mezz/jei/api/gui/placement/$VerticalAlignment" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VerticalAlignment extends $Enum<$VerticalAlignment> {
static readonly "BOTTOM": $VerticalAlignment
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment

public "getYPos"(int0: integer, int1: integer): integer
public static "valueOf"(string0: string): $VerticalAlignment
public static "values"(): $VerticalAlignment[]
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientManager" {
import { $IIngredientType, $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IClickableIngredient } from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import { $IIngredientHelper } from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $IIngredientManager$IIngredientListener$$Type } from "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener"
import { $Optional } from "packages/java/util/$Optional"
import { $IIngredientRenderer } from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import { $ITypedIngredient, $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $Rect2i$$Type } from "packages/net/minecraft/client/renderer/$Rect2i"
import { $IIngredientTypeWithSubtypes } from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IIngredientManager {
"addIngredientsAtRuntime"<V>(iIngredientType0: $IIngredientType$$Type<V>, collection1: $Collection$$Type<V>): void
"createClickableIngredient"<V>(v0: V, rect2i1: $Rect2i$$Type, boolean2: boolean): $Optional<$IClickableIngredient<V>>
"createClickableIngredient"<V>(iIngredientType0: $IIngredientType$$Type<V>, v1: V, rect2i2: $Rect2i$$Type, boolean3: boolean): $Optional<$IClickableIngredient<V>>
"createTypedIngredient"<V>(v0: V): $Optional<$ITypedIngredient<V>>
"createTypedIngredient"<V>(iIngredientType0: $IIngredientType$$Type<V>, v1: V): $Optional<$ITypedIngredient<V>>
"getAllIngredients"<V>(iIngredientType0: $IIngredientType$$Type<V>): $Collection<V>
"getAllItemStacks"(): $Collection<$ItemStack>
"getIngredientAliases"(iTypedIngredient0: $ITypedIngredient$$Type<any>): $Collection<string>
/** @deprecated */
"getIngredientByUid"<V>(iIngredientType0: $IIngredientType$$Type<V>, string1: string): $Optional<V>
"getIngredientHelper"<V>(v0: V): $IIngredientHelper<V>
"getIngredientHelper"<V>(iIngredientType0: $IIngredientType$$Type<V>): $IIngredientHelper<V>
"getIngredientRenderer"<V>(v0: V): $IIngredientRenderer<V>
"getIngredientRenderer"<V>(iIngredientType0: $IIngredientType$$Type<V>): $IIngredientRenderer<V>
"getIngredientTypeChecked"<V>(class0: $Class$$Type<V>): $Optional<$IIngredientType<V>>
"getIngredientTypeChecked"<V>(v0: V): $Optional<$IIngredientType<V>>
"getIngredientTypeForUid"(string0: string): $Optional<$IIngredientType<any>>
"getIngredientTypeWithSubtypesFromBase"<B, I>(b0: B): $Optional<$IIngredientTypeWithSubtypes<B, I>>
"getRegisteredIngredientTypes"(): $Collection<$IIngredientType<any>>
"getTypedIngredientByUid"<V>(iIngredientType0: $IIngredientType$$Type<V>, string1: string): $Optional<$ITypedIngredient<V>>
"normalizeTypedIngredient"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>): $ITypedIngredient<V>
"registerIngredientListener"(iIngredientListener0: $IIngredientManager$IIngredientListener$$Type): void
"removeIngredientsAtRuntime"<V>(iIngredientType0: $IIngredientType$$Type<V>, collection1: $Collection$$Type<V>): void
get "allItemStacks"(): $Collection<$ItemStack>
get "registeredIngredientTypes"(): $Collection<$IIngredientType<any>>
}

export namespace $IIngredientManager {
const probejs$$marker: never
}
export abstract class $IIngredientManager$$Static implements $IIngredientManager {
}
}

declare module "packages/mezz/jei/api/ingredients/$ITypedIngredient" {
import { $IIngredientType, $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITypedIngredient<T> {
"getIngredient"(): T
"getIngredient"<V>(iIngredientType0: $IIngredientType$$Type<V>): $Optional<V>
"getItemStack"(): $Optional<$ItemStack>
"getType"(): $IIngredientType<T>
get "ingredient"(): T
get "itemStack"(): $Optional<$ItemStack>
get "type"(): $IIngredientType<T>
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
export abstract class $ITypedIngredient$$Static<T> implements $ITypedIngredient<T> {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $List$$Type } from "packages/java/util/$List"
import { $IRecipeSlotView$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

/** @deprecated */
export interface $IRecipeSlotTooltipCallback {
/** @deprecated */
"onRichTooltip"(iRecipeSlotView0: $IRecipeSlotView$$Type, iTooltipBuilder1: $ITooltipBuilder$$Type): void
/** @deprecated */
"onTooltip"(iRecipeSlotView0: $IRecipeSlotView$$Type, list1: $List$$Type<$Component$$Type>): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
export abstract class $IRecipeSlotTooltipCallback$$Static implements $IRecipeSlotTooltipCallback {
}
}

declare module "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder" {
import { $IIngredientAcceptor, $IIngredientAcceptor$$Type } from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $ISlottedWidgetFactory$$Type } from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import { $IRecipeSlotBuilder } from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"

export interface $IRecipeLayoutBuilder {
"addInputSlot"(int0: integer, int1: integer): $IRecipeSlotBuilder
"addInputSlot"(): $IRecipeSlotBuilder
"addInvisibleIngredients"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $IIngredientAcceptor<any>
"addOutputSlot"(int0: integer, int1: integer): $IRecipeSlotBuilder
"addOutputSlot"(): $IRecipeSlotBuilder
"addSlot"(recipeIngredientRole0: $RecipeIngredientRole$$Type, int1: integer, int2: integer): $IRecipeSlotBuilder
"addSlot"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $IRecipeSlotBuilder
/** @deprecated */
"addSlotToWidget"(recipeIngredientRole0: $RecipeIngredientRole$$Type, iSlottedWidgetFactory1: $ISlottedWidgetFactory$$Type<any>): $IRecipeSlotBuilder
"createFocusLink"(...iIngredientAcceptor0s: $IIngredientAcceptor$$Type<any>[]): void
"moveRecipeTransferButton"(int0: integer, int1: integer): void
"setShapeless"(): void
"setShapeless"(int0: integer, int1: integer): void
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
export abstract class $IRecipeLayoutBuilder$$Static implements $IRecipeLayoutBuilder {
}
}

declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"
import { $RecipeType } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuType } from "packages/net/minecraft/world/inventory/$MenuType"
import { $IRecipeTransferError } from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import { $IRecipeSlotsView$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
"getContainerClass"(): $Class<C>
"getMenuType"(): $Optional<$MenuType<C>>
"getRecipeType"(): $RecipeType<R>
"transferRecipe"(c0: C, r1: R, iRecipeSlotsView2: $IRecipeSlotsView$$Type, player3: $Player$$Type, boolean4: boolean, boolean5: boolean): $IRecipeTransferError
get "containerClass"(): $Class<C>
get "menuType"(): $Optional<$MenuType<C>>
get "recipeType"(): $RecipeType<R>
}

export namespace $IRecipeTransferHandler {
const probejs$$marker: never
}
export abstract class $IRecipeTransferHandler$$Static<C extends $AbstractContainerMenu, R> implements $IRecipeTransferHandler<C, R> {
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigFile" {
import { $Path } from "packages/java/nio/file/$Path"
import { $List } from "packages/java/util/$List"
import { $IJeiConfigCategory } from "packages/mezz/jei/api/runtime/config/$IJeiConfigCategory"

export interface $IJeiConfigFile {
"getCategories"(): $List<$IJeiConfigCategory>
"getPath"(): $Path
get "categories"(): $List<$IJeiConfigCategory>
get "path"(): $Path
}

export namespace $IJeiConfigFile {
const probejs$$marker: never
}
export abstract class $IJeiConfigFile$$Static implements $IJeiConfigFile {
}
}

declare module "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes" {
import { $IIngredientType } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"

export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<I> {
"castIngredient"(object0: any): $Optional<I>
"getBase"(i0: I): B
"getDefaultIngredient"(b0: B): I
"getIngredientBaseClass"(): $Class<B>
"getIngredientClass"(): $Class<I>
"getUid"(): string
get "ingredientBaseClass"(): $Class<B>
get "ingredientClass"(): $Class<I>
get "uid"(): string
}

export namespace $IIngredientTypeWithSubtypes {
const probejs$$marker: never
}
export abstract class $IIngredientTypeWithSubtypes$$Static<B, I> implements $IIngredientTypeWithSubtypes<B, I> {
}
}

declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager" {
import { $IRecipeCategory$$Type } from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import { $Optional } from "packages/java/util/$Optional"
import { $IRecipeTransferHandler } from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $IRecipeTransferManager {
"getRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(c0: C, iRecipeCategory1: $IRecipeCategory$$Type<R>): $Optional<$IRecipeTransferHandler<C, R>>
}

export namespace $IRecipeTransferManager {
const probejs$$marker: never
}
export abstract class $IRecipeTransferManager$$Static implements $IRecipeTransferManager {
}
}

declare module "packages/mezz/jei/api/runtime/$IJeiRuntime" {
import { $IEditModeConfig } from "packages/mezz/jei/api/runtime/$IEditModeConfig"
import { $IJeiHelpers } from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import { $IJeiConfigManager } from "packages/mezz/jei/api/runtime/config/$IJeiConfigManager"
import { $IIngredientFilter } from "packages/mezz/jei/api/runtime/$IIngredientFilter"
import { $IBookmarkOverlay } from "packages/mezz/jei/api/runtime/$IBookmarkOverlay"
import { $IRecipesGui } from "packages/mezz/jei/api/runtime/$IRecipesGui"
import { $IIngredientListOverlay } from "packages/mezz/jei/api/runtime/$IIngredientListOverlay"
import { $IRecipeManager } from "packages/mezz/jei/api/recipe/$IRecipeManager"
import { $IIngredientManager } from "packages/mezz/jei/api/runtime/$IIngredientManager"
import { $IJeiKeyMappings } from "packages/mezz/jei/api/runtime/$IJeiKeyMappings"
import { $IScreenHelper } from "packages/mezz/jei/api/runtime/$IScreenHelper"
import { $IRecipeTransferManager } from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager"
import { $IIngredientVisibility } from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IJeiRuntime {
"getBookmarkOverlay"(): $IBookmarkOverlay
"getConfigManager"(): $IJeiConfigManager
"getEditModeConfig"(): $IEditModeConfig
"getIngredientFilter"(): $IIngredientFilter
"getIngredientListOverlay"(): $IIngredientListOverlay
"getIngredientManager"(): $IIngredientManager
/** @deprecated */
"getIngredientVisibility"(): $IIngredientVisibility
"getJeiHelpers"(): $IJeiHelpers
"getKeyMappings"(): $IJeiKeyMappings
"getRecipeManager"(): $IRecipeManager
"getRecipeTransferManager"(): $IRecipeTransferManager
"getRecipesGui"(): $IRecipesGui
"getScreenHelper"(): $IScreenHelper
get "bookmarkOverlay"(): $IBookmarkOverlay
get "configManager"(): $IJeiConfigManager
get "editModeConfig"(): $IEditModeConfig
get "ingredientFilter"(): $IIngredientFilter
get "ingredientListOverlay"(): $IIngredientListOverlay
get "ingredientManager"(): $IIngredientManager
get "ingredientVisibility"(): $IIngredientVisibility
get "jeiHelpers"(): $IJeiHelpers
get "keyMappings"(): $IJeiKeyMappings
get "recipeManager"(): $IRecipeManager
get "recipeTransferManager"(): $IRecipeTransferManager
get "recipesGui"(): $IRecipesGui
get "screenHelper"(): $IScreenHelper
}

export namespace $IJeiRuntime {
const probejs$$marker: never
}
export abstract class $IJeiRuntime$$Static implements $IJeiRuntime {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView" {
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $IRecipeSlotView } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotsView {
"findSlotByName"(string0: string): $Optional<$IRecipeSlotView>
"getSlotViews"(): $List<$IRecipeSlotView>
"getSlotViews"(recipeIngredientRole0: $RecipeIngredientRole$$Type): $List<$IRecipeSlotView>
get "slotViews"(): $List<$IRecipeSlotView>
}

export namespace $IRecipeSlotsView {
const probejs$$marker: never
}
export abstract class $IRecipeSlotsView$$Static implements $IRecipeSlotsView {
}
}

declare module "packages/mezz/jei/api/ingredients/$IIngredientHelper" {
import { $IIngredientType } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Optional } from "packages/java/util/$Optional"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $TagKey } from "packages/net/minecraft/tags/$TagKey"
import { $UidContext$$Type } from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientHelper<V> {
"copyIngredient"(v0: V): V
"copyWithAmount"(v0: V, long1: long): V
"getAmount"(v0: V): long
"getCheatItemStack"(v0: V): $ItemStack
"getColors"(v0: V): $Iterable<integer>
"getDisplayModId"(v0: V): string
"getDisplayName"(v0: V): string
"getErrorInfo"(v0: V): string
"getIngredientType"(): $IIngredientType<V>
"getResourceLocation"(v0: V): $ResourceLocation
/** @deprecated */
"getTagEquivalent"(collection0: $Collection$$Type<V>): $Optional<$ResourceLocation>
"getTagKeyEquivalent"(collection0: $Collection$$Type<V>): $Optional<$TagKey<any>>
"getTagStream"(v0: V): $Stream<$ResourceLocation>
"getUniqueId"(v0: V, uidContext1: $UidContext$$Type): string
"getWildcardId"(v0: V): string
"hasSubtypes"(v0: V): boolean
"isHiddenFromRecipeViewersByTags"(v0: V): boolean
"isIngredientOnServer"(v0: V): boolean
"isValidIngredient"(v0: V): boolean
"normalizeIngredient"(v0: V): V
get "ingredientType"(): $IIngredientType<V>
}

export namespace $IIngredientHelper {
const probejs$$marker: never
}
export abstract class $IIngredientHelper$$Static<V> implements $IIngredientHelper<V> {
}
}

declare module "packages/mezz/jei/api/recipe/$IFocusFactory" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $RecipeIngredientRole$$Type } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $IFocus, $IFocus$$Type } from "packages/mezz/jei/api/recipe/$IFocus"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $IFocusGroup } from "packages/mezz/jei/api/recipe/$IFocusGroup"

export interface $IFocusFactory {
"createFocus"<V>(recipeIngredientRole0: $RecipeIngredientRole$$Type, iIngredientType1: $IIngredientType$$Type<V>, v2: V): $IFocus<V>
"createFocus"<V>(recipeIngredientRole0: $RecipeIngredientRole$$Type, iTypedIngredient1: $ITypedIngredient$$Type<V>): $IFocus<V>
"createFocusGroup"(collection0: $Collection$$Type<$IFocus$$Type<any>>): $IFocusGroup
"getEmptyFocusGroup"(): $IFocusGroup
get "emptyFocusGroup"(): $IFocusGroup
}

export namespace $IFocusFactory {
const probejs$$marker: never
}
export abstract class $IFocusFactory$$Static implements $IFocusFactory {
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientListOverlay" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientListOverlay {
"getIngredientUnderMouse"(): $Optional<$ITypedIngredient<any>>
"getIngredientUnderMouse"<T>(iIngredientType0: $IIngredientType$$Type<T>): T
"getVisibleIngredients"<T>(iIngredientType0: $IIngredientType$$Type<T>): $List<T>
"hasKeyboardFocus"(): boolean
"isListDisplayed"(): boolean
get "ingredientUnderMouse"(): $Optional<$ITypedIngredient<any>>
get "listDisplayed"(): boolean
}

export namespace $IIngredientListOverlay {
const probejs$$marker: never
}
export abstract class $IIngredientListOverlay$$Static implements $IIngredientListOverlay {
}
}

declare module "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory" {
import { $IJeiBrewingRecipe } from "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $IJeiAnvilRecipe } from "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IVanillaRecipeFactory {
/** @deprecated */
"createAnvilRecipe"(list0: $List$$Type<$ItemStack$$Type>, list1: $List$$Type<$ItemStack$$Type>, list2: $List$$Type<$ItemStack$$Type>): $IJeiAnvilRecipe
/** @deprecated */
"createAnvilRecipe"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$ItemStack$$Type>, list2: $List$$Type<$ItemStack$$Type>): $IJeiAnvilRecipe
"createAnvilRecipe"(list0: $List$$Type<$ItemStack$$Type>, list1: $List$$Type<$ItemStack$$Type>, list2: $List$$Type<$ItemStack$$Type>, resourceLocation3: $ResourceLocation$$Type): $IJeiAnvilRecipe
"createAnvilRecipe"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$ItemStack$$Type>, list2: $List$$Type<$ItemStack$$Type>, resourceLocation3: $ResourceLocation$$Type): $IJeiAnvilRecipe
/** @deprecated */
"createBrewingRecipe"(list0: $List$$Type<$ItemStack$$Type>, list1: $List$$Type<$ItemStack$$Type>, itemStack2: $ItemStack$$Type): $IJeiBrewingRecipe
/** @deprecated */
"createBrewingRecipe"(list0: $List$$Type<$ItemStack$$Type>, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): $IJeiBrewingRecipe
"createBrewingRecipe"(list0: $List$$Type<$ItemStack$$Type>, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, resourceLocation3: $ResourceLocation$$Type): $IJeiBrewingRecipe
"createBrewingRecipe"(list0: $List$$Type<$ItemStack$$Type>, list1: $List$$Type<$ItemStack$$Type>, itemStack2: $ItemStack$$Type, resourceLocation3: $ResourceLocation$$Type): $IJeiBrewingRecipe
}

export namespace $IVanillaRecipeFactory {
const probejs$$marker: never
}
export abstract class $IVanillaRecipeFactory$$Static implements $IVanillaRecipeFactory {
}
}

declare module "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory" {
import { $List$$Type } from "packages/java/util/$List"
import { $IRecipeExtrasBuilder$$Type } from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import { $IRecipeSlotDrawable$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/** @deprecated */
export interface $ISlottedWidgetFactory<R> {
/** @deprecated */
"createWidgetForSlots"(iRecipeExtrasBuilder0: $IRecipeExtrasBuilder$$Type, r1: R, list2: $List$$Type<$IRecipeSlotDrawable$$Type>): void
}

export namespace $ISlottedWidgetFactory {
const probejs$$marker: never
}
export abstract class $ISlottedWidgetFactory$$Static<R> implements $ISlottedWidgetFactory<R> {
}
}

declare module "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipesGui$$Type } from "packages/mezz/jei/api/runtime/$IRecipesGui"
import { $List } from "packages/java/util/$List"
import { $RecipeType$$Type } from "packages/mezz/jei/api/recipe/$RecipeType"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"
import { $IFocusFactory$$Type } from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IGuiClickableArea {
"getArea"(): $Rect2i
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type): void
/** @deprecated */
"getTooltipStrings"(): $List<$Component>
"isTooltipEnabled"(): boolean
"onClick"(iFocusFactory0: $IFocusFactory$$Type, iRecipesGui1: $IRecipesGui$$Type): void
get "area"(): $Rect2i
get "tooltipStrings"(): $List<$Component>
get "tooltipEnabled"(): boolean
}

export namespace $IGuiClickableArea {
function createBasic(int0: integer, int1: integer, int2: integer, int3: integer, ...recipeType4s: $RecipeType$$Type<any>[]): $IGuiClickableArea
}
export abstract class $IGuiClickableArea$$Static implements $IGuiClickableArea {
static "createBasic"(int0: integer, int1: integer, int2: integer, int3: integer, ...recipeType4s: $RecipeType$$Type<any>[]): $IGuiClickableArea
}
}

declare module "packages/mezz/jei/api/runtime/$IEditModeConfig" {
import { $Set } from "packages/java/util/$Set"
import { $IEditModeConfig$HideMode, $IEditModeConfig$HideMode$$Type } from "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IEditModeConfig {
"getIngredientHiddenUsingConfigFile"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>): $Set<$IEditModeConfig$HideMode>
"hideIngredientUsingConfigFile"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>, hideMode1: $IEditModeConfig$HideMode$$Type): void
"isIngredientHiddenUsingConfigFile"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>): boolean
"showIngredientUsingConfigFile"<V>(iTypedIngredient0: $ITypedIngredient$$Type<V>, hideMode1: $IEditModeConfig$HideMode$$Type): void
}

export namespace $IEditModeConfig {
const probejs$$marker: never
}
export abstract class $IEditModeConfig$$Static implements $IEditModeConfig {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated" {
import { $IDrawable } from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableAnimated extends $IDrawable {
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
"draw"(guiGraphics0: $GuiGraphics$$Type): void
"getHeight"(): integer
"getWidth"(): integer
get "height"(): integer
get "width"(): integer
}

export namespace $IDrawableAnimated {
const probejs$$marker: never
}
export abstract class $IDrawableAnimated$$Static implements $IDrawableAnimated {
}
}

declare module "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener" {
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $IJeiGuiEventListener {
"getArea"(): $ScreenRectangle
"keyPressed"(double0: double, double1: double, int2: integer, int3: integer, int4: integer): boolean
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
get "area"(): $ScreenRectangle
}

export namespace $IJeiGuiEventListener {
const probejs$$marker: never
}
export abstract class $IJeiGuiEventListener$$Static implements $IJeiGuiEventListener {
}
}

declare module "packages/mezz/jei/api/ingredients/$IIngredientRenderer" {
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BatchRenderElement$$Type } from "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IIngredientRenderer<T> {
"getFontRenderer"(minecraft0: $Minecraft$$Type, t1: T): $Font
"getHeight"(): integer
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type, t1: T, tooltipFlag2: $TooltipFlag$$Type): void
/** @deprecated */
"getTooltip"(t0: T, tooltipFlag1: $TooltipFlag$$Type): $List<$Component>
"getWidth"(): integer
"render"(guiGraphics0: $GuiGraphics$$Type, t1: T): void
"render"(guiGraphics0: $GuiGraphics$$Type, t1: T, int2: integer, int3: integer): void
"renderBatch"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$BatchRenderElement$$Type<T>>): void
get "height"(): integer
get "width"(): integer
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
export abstract class $IIngredientRenderer$$Static<T> implements $IIngredientRenderer<T> {
}
}

declare module "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $IIngredientConsumer } from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<THIS>> extends $IIngredientConsumer {
"addFluidStack"(fluid0: $Fluid$$Type): THIS
"addIngredient"<I>(iIngredientType0: $IIngredientType$$Type<I>, i1: I): THIS
"addIngredients"<I>(iIngredientType0: $IIngredientType$$Type<I>, list1: $List$$Type<I>): THIS
"addItemLike"(itemLike0: $ItemLike$$Type): $IIngredientConsumer
"addTypedIngredient"<I>(iTypedIngredient0: $ITypedIngredient$$Type<I>): THIS
"addTypedIngredients"(list0: $List$$Type<$ITypedIngredient$$Type<any>>): THIS
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
export abstract class $IIngredientAcceptor$$Static<THIS extends $IIngredientAcceptor<THIS>> implements $IIngredientAcceptor<THIS> {
}
}

declare module "packages/mezz/jei/api/gui/builder/$IIngredientConsumer" {
import { $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $List$$Type } from "packages/java/util/$List"
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $ItemLike$$Type } from "packages/net/minecraft/world/level/$ItemLike"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientConsumer {
"addFluidStack"(fluid0: $Fluid$$Type): $IIngredientConsumer
"addFluidStack"(fluid0: $Fluid$$Type, long1: long): $IIngredientConsumer
"addFluidStack"(fluid0: $Fluid$$Type, long1: long, compoundTag2: $CompoundTag$$Type): $IIngredientConsumer
"addIngredient"<I>(iIngredientType0: $IIngredientType$$Type<I>, i1: I): $IIngredientConsumer
"addIngredients"<I>(iIngredientType0: $IIngredientType$$Type<I>, list1: $List$$Type<I>): $IIngredientConsumer
"addIngredients"(ingredient0: $Ingredient$$Type): $IIngredientConsumer
"addIngredientsUnsafe"(list0: $List$$Type<any>): $IIngredientConsumer
"addItemLike"(itemLike0: $ItemLike$$Type): $IIngredientConsumer
"addItemStack"(itemStack0: $ItemStack$$Type): $IIngredientConsumer
"addItemStacks"(list0: $List$$Type<$ItemStack$$Type>): $IIngredientConsumer
"addOptionalTypedIngredients"(list0: $List$$Type<$Optional$$Type<$ITypedIngredient$$Type<any>>>): $IIngredientConsumer
"addTypedIngredient"<I>(iTypedIngredient0: $ITypedIngredient$$Type<I>): $IIngredientConsumer
"addTypedIngredients"(list0: $List$$Type<$ITypedIngredient$$Type<any>>): $IIngredientConsumer
}

export namespace $IIngredientConsumer {
const probejs$$marker: never
}
export abstract class $IIngredientConsumer$$Static implements $IIngredientConsumer {
}
}

declare module "packages/mezz/jei/api/runtime/$IBookmarkOverlay" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkOverlay {
"getIngredientUnderMouse"(): $Optional<$ITypedIngredient<any>>
"getIngredientUnderMouse"<T>(iIngredientType0: $IIngredientType$$Type<T>): T
"getItemStackUnderMouse"(): $ItemStack
get "ingredientUnderMouse"(): $Optional<$ITypedIngredient<any>>
get "itemStackUnderMouse"(): $ItemStack
}

export namespace $IBookmarkOverlay {
const probejs$$marker: never
}
export abstract class $IBookmarkOverlay$$Static implements $IBookmarkOverlay {
}
}

declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $IRecipeTransferError$Type extends $Enum<$IRecipeTransferError$Type> {
static readonly "COSMETIC": $IRecipeTransferError$Type
static readonly "INTERNAL": $IRecipeTransferError$Type
static readonly "USER_FACING": $IRecipeTransferError$Type
readonly "allowsTransfer": boolean

public static "valueOf"(string0: string): $IRecipeTransferError$Type
public static "values"(): $IRecipeTransferError$Type[]
}
}

declare module "packages/mezz/jei/api/runtime/$IJeiKeyMappings" {
import { $IJeiKeyMapping } from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"

export interface $IJeiKeyMappings {
"getShowRecipe"(): $IJeiKeyMapping
"getShowUses"(): $IJeiKeyMapping
get "showRecipe"(): $IJeiKeyMapping
get "showUses"(): $IJeiKeyMapping
}

export namespace $IJeiKeyMappings {
const probejs$$marker: never
}
export abstract class $IJeiKeyMappings$$Static implements $IJeiKeyMappings {
}
}

declare module "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeCatalystLookup {
"get"<S>(iIngredientType0: $IIngredientType$$Type<S>): $Stream<S>
"get"(): $Stream<$ITypedIngredient<any>>
"getItemStack"(): $Stream<$ItemStack>
"includeHidden"(): $IRecipeCatalystLookup
get "itemStack"(): $Stream<$ItemStack>
}

export namespace $IRecipeCatalystLookup {
const probejs$$marker: never
}
export abstract class $IRecipeCatalystLookup$$Static implements $IRecipeCatalystLookup {
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientFilter" {
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientFilter {
"getFilterText"(): string
"getFilteredIngredients"<T>(iIngredientType0: $IIngredientType$$Type<T>): $List<T>
"getFilteredItemStacks"(): $List<$ItemStack>
"setFilterText"(string0: string): void
get "filterText"(): string
get "filteredItemStacks"(): $List<$ItemStack>
set "filterText"(value: string)
}

export namespace $IIngredientFilter {
const probejs$$marker: never
}
export abstract class $IIngredientFilter$$Static implements $IIngredientFilter {
}
}

declare module "packages/mezz/jei/api/recipe/$IRecipeLookup" {
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $IFocus$$Type } from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipeLookup<R> {
"get"(): $Stream<R>
"includeHidden"(): $IRecipeLookup<R>
"limitFocus"(collection0: $Collection$$Type<$IFocus$$Type<any>>): $IRecipeLookup<R>
}

export namespace $IRecipeLookup {
const probejs$$marker: never
}
export abstract class $IRecipeLookup$$Static<R> implements $IRecipeLookup<R> {
}
}

declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler" {
import { $IGhostIngredientHandler$Target } from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target"
import { $List } from "packages/java/util/$List"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IGhostIngredientHandler<T extends $Screen> {
"getTargetsTyped"<I>(t0: T, iTypedIngredient1: $ITypedIngredient$$Type<I>, boolean2: boolean): $List<$IGhostIngredientHandler$Target<I>>
"onComplete"(): void
"shouldHighlightTargets"(): boolean
}

export namespace $IGhostIngredientHandler {
const probejs$$marker: never
}
export abstract class $IGhostIngredientHandler$$Static<T extends $Screen> implements $IGhostIngredientHandler<T> {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder" {
import { $ITickTimer$$Type } from "packages/mezz/jei/api/gui/$ITickTimer"
import { $IDrawableAnimated } from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import { $IDrawableStatic } from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import { $IDrawableAnimated$StartDirection$$Type } from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IDrawableBuilder {
"addPadding"(int0: integer, int1: integer, int2: integer, int3: integer): $IDrawableBuilder
"build"(): $IDrawableStatic
"buildAnimated"(int0: integer, startDirection1: $IDrawableAnimated$StartDirection$$Type, boolean2: boolean): $IDrawableAnimated
"buildAnimated"(iTickTimer0: $ITickTimer$$Type, startDirection1: $IDrawableAnimated$StartDirection$$Type): $IDrawableAnimated
"setTextureSize"(int0: integer, int1: integer): $IDrawableBuilder
"trim"(int0: integer, int1: integer, int2: integer, int3: integer): $IDrawableBuilder
}

export namespace $IDrawableBuilder {
const probejs$$marker: never
}
export abstract class $IDrawableBuilder$$Static implements $IDrawableBuilder {
}
}

declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable" {
import { $IIngredientConsumer } from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import { $IIngredientType$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $RecipeIngredientRole } from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipeSlotTooltipCallback$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $List } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $IRecipeSlotView } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {
/** @deprecated */
"addTooltipCallback"(iRecipeSlotTooltipCallback0: $IRecipeSlotTooltipCallback$$Type): void
"clearDisplayOverrides"(): void
"createDisplayOverrides"(): $IIngredientConsumer
"draw"(guiGraphics0: $GuiGraphics$$Type): void
"drawHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
"drawHoverOverlays"(guiGraphics0: $GuiGraphics$$Type): void
"getAllIngredients"(): $Stream<$ITypedIngredient<any>>
"getAreaIncludingBackground"(): $Rect2i
"getDisplayedIngredient"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Optional<T>
"getDisplayedIngredient"(): $Optional<$ITypedIngredient<any>>
"getDisplayedItemStack"(): $Optional<$ItemStack>
"getIngredients"<T>(iIngredientType0: $IIngredientType$$Type<T>): $Stream<T>
"getItemStacks"(): $Stream<$ItemStack>
/** @deprecated */
"getRect"(): $Rect2i
"getRole"(): $RecipeIngredientRole
"getSlotName"(): $Optional<string>
"getTooltip"(): $List<$Component>
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type): void
"isEmpty"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"setPosition"(int0: integer, int1: integer): void
get "allIngredients"(): $Stream<$ITypedIngredient<any>>
get "areaIncludingBackground"(): $Rect2i
get "displayedIngredient"(): $Optional<$ITypedIngredient<any>>
get "displayedItemStack"(): $Optional<$ItemStack>
get "itemStacks"(): $Stream<$ItemStack>
get "rect"(): $Rect2i
get "role"(): $RecipeIngredientRole
get "slotName"(): $Optional<string>
get "tooltip"(): $List<$Component>
get "empty"(): boolean
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
export abstract class $IRecipeSlotDrawable$$Static implements $IRecipeSlotDrawable {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IDrawableStatic" {
import { $IDrawable } from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableStatic extends $IDrawable {
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
"draw"(guiGraphics0: $GuiGraphics$$Type): void
"getHeight"(): integer
"getWidth"(): integer
get "height"(): integer
get "width"(): integer
}

export namespace $IDrawableStatic {
const probejs$$marker: never
}
export abstract class $IDrawableStatic$$Static implements $IDrawableStatic {
}
}

declare module "packages/mezz/jei/api/gui/inputs/$IJeiUserInput" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $IJeiKeyMapping$$Type } from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiUserInput {
"getKey"(): $InputConstants$Key
"getModifiers"(): integer
"is"(keyMapping0: $KeyMapping$$Type): boolean
"is"(iJeiKeyMapping0: $IJeiKeyMapping$$Type): boolean
"isSimulate"(): boolean
get "key"(): $InputConstants$Key
get "modifiers"(): integer
get "simulate"(): boolean
}

export namespace $IJeiUserInput {
const probejs$$marker: never
}
export abstract class $IJeiUserInput$$Static implements $IJeiUserInput {
}
}

declare module "packages/mezz/jei/api/gui/handlers/$IGuiProperties" {
import { $Class } from "packages/java/lang/$Class"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IGuiProperties {
"getGuiLeft"(): integer
"getGuiTop"(): integer
"getGuiXSize"(): integer
"getGuiYSize"(): integer
"getScreenClass"(): $Class<$Screen>
"getScreenHeight"(): integer
"getScreenWidth"(): integer
get "guiLeft"(): integer
get "guiTop"(): integer
get "guiXSize"(): integer
get "guiYSize"(): integer
get "screenClass"(): $Class<$Screen>
get "screenHeight"(): integer
get "screenWidth"(): integer
}

export namespace $IGuiProperties {
const probejs$$marker: never
}
export abstract class $IGuiProperties$$Static implements $IGuiProperties {
}
}

declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigManager" {
import { $Collection } from "packages/java/util/$Collection"
import { $IJeiConfigFile } from "packages/mezz/jei/api/runtime/config/$IJeiConfigFile"

export interface $IJeiConfigManager {
"getConfigFiles"(): $Collection<$IJeiConfigFile>
get "configFiles"(): $Collection<$IJeiConfigFile>
}

export namespace $IJeiConfigManager {
const probejs$$marker: never
}
export abstract class $IJeiConfigManager$$Static implements $IJeiConfigManager {
}
}

declare module "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener" {
import { $IIngredientHelper$$Type } from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $ITypedIngredient$$Type } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager$IIngredientListener {
"onIngredientsAdded"<V>(iIngredientHelper0: $IIngredientHelper$$Type<V>, collection1: $Collection$$Type<$ITypedIngredient$$Type<V>>): void
"onIngredientsRemoved"<V>(iIngredientHelper0: $IIngredientHelper$$Type<V>, collection1: $Collection$$Type<$ITypedIngredient$$Type<V>>): void
}

export namespace $IIngredientManager$IIngredientListener {
const probejs$$marker: never
}
export abstract class $IIngredientManager$IIngredientListener$$Static implements $IIngredientManager$IIngredientListener {
}
}

declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe" {
import { $List } from "packages/java/util/$List"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiAnvilRecipe {
"getLeftInputs"(): $List<$ItemStack>
"getOutputs"(): $List<$ItemStack>
"getRightInputs"(): $List<$ItemStack>
"getUid"(): $ResourceLocation
get "leftInputs"(): $List<$ItemStack>
get "outputs"(): $List<$ItemStack>
get "rightInputs"(): $List<$ItemStack>
get "uid"(): $ResourceLocation
}

export namespace $IJeiAnvilRecipe {
const probejs$$marker: never
}
export abstract class $IJeiAnvilRecipe$$Static implements $IJeiAnvilRecipe {
}
}

declare module "packages/mezz/jei/api/gui/placement/$IPlaceable" {
import { $VerticalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import { $HorizontalAlignment$$Type } from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"

export interface $IPlaceable<THIS extends $IPlaceable<THIS>> {
"getHeight"(): integer
"getWidth"(): integer
"setPosition"(int0: integer, int1: integer): THIS
"setPosition"(int0: integer, int1: integer, int2: integer, int3: integer, horizontalAlignment4: $HorizontalAlignment$$Type, verticalAlignment5: $VerticalAlignment$$Type): THIS
get "height"(): integer
get "width"(): integer
}

export namespace $IPlaceable {
const probejs$$marker: never
}
export abstract class $IPlaceable$$Static<THIS extends $IPlaceable<THIS>> implements $IPlaceable<THIS> {
}
}

declare module "packages/mezz/jei/api/gui/drawable/$IDrawable" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawable {
"draw"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
"draw"(guiGraphics0: $GuiGraphics$$Type): void
"getHeight"(): integer
"getWidth"(): integer
get "height"(): integer
get "width"(): integer
}

export namespace $IDrawable {
const probejs$$marker: never
}
export abstract class $IDrawable$$Static implements $IDrawable {
}
}

declare module "packages/mezz/jei/api/runtime/$IClickableIngredient" {
import { $IIngredientType } from "packages/mezz/jei/api/ingredients/$IIngredientType"
import { $ITypedIngredient } from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredient<T> {
"getArea"(): $Rect2i
"getIngredient"(): T
"getIngredientType"(): $IIngredientType<T>
/** @deprecated */
"getTypedIngredient"(): $ITypedIngredient<T>
get "area"(): $Rect2i
get "ingredient"(): T
get "ingredientType"(): $IIngredientType<T>
get "typedIngredient"(): $ITypedIngredient<T>
}

export namespace $IClickableIngredient {
const probejs$$marker: never
}
export abstract class $IClickableIngredient$$Static<T> implements $IClickableIngredient<T> {
}
}

declare module "packages/mezz/jei/api/helpers/$IPlatformFluidHelper" {
import { $Fluid, $Fluid$$Type } from "packages/net/minecraft/world/level/material/$Fluid"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IIngredientTypeWithSubtypes } from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IPlatformFluidHelper<T> {
"bucketVolume"(): long
"create"(fluid0: $Fluid$$Type, long1: long): T
"create"(fluid0: $Fluid$$Type, long1: long, compoundTag2: $CompoundTag$$Type): T
"getFluidIngredientType"(): $IIngredientTypeWithSubtypes<$Fluid, T>
get "fluidIngredientType"(): $IIngredientTypeWithSubtypes<$Fluid, T>
}

export namespace $IPlatformFluidHelper {
const probejs$$marker: never
}
export abstract class $IPlatformFluidHelper$$Static<T> implements $IPlatformFluidHelper<T> {
}
}

declare module "packages/mezz/jei/api/runtime/$IScreenHelper" {
import { $IClickableIngredient } from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import { $List } from "packages/java/util/$List"
import { $IGuiProperties } from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $Optional } from "packages/java/util/$Optional"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $IGhostIngredientHandler } from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import { $IGuiClickableArea } from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"
import { $AbstractContainerScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IScreenHelper {
"getClickableIngredientUnderMouse"(screen0: $Screen$$Type, double1: double, double2: double): $Stream<$IClickableIngredient<any>>
/** @deprecated */
"getGhostIngredientHandler"<T extends $Screen>(t0: T): $Optional<$IGhostIngredientHandler<T>>
"getGhostIngredientHandlers"<T extends $Screen>(t0: T): $List<$IGhostIngredientHandler<T>>
"getGuiClickableArea"(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, double1: double, double2: double): $Stream<$IGuiClickableArea>
"getGuiExclusionAreas"(screen0: $Screen$$Type): $Stream<$Rect2i>
"getGuiProperties"<T extends $Screen>(t0: T): $Optional<$IGuiProperties>
}

export namespace $IScreenHelper {
const probejs$$marker: never
}
export abstract class $IScreenHelper$$Static implements $IScreenHelper {
}
}

declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ITooltipBuilder$$Type } from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import { $IRecipeTransferError$Type } from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type"
import { $List } from "packages/java/util/$List"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $IRecipeSlotsView$$Type } from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferError {
"getButtonHighlightColor"(): integer
"getMissingCountHint"(): integer
"getTooltip"(iTooltipBuilder0: $ITooltipBuilder$$Type): void
/** @deprecated */
"getTooltip"(): $List<$Component>
"getType"(): $IRecipeTransferError$Type
"showError"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, iRecipeSlotsView3: $IRecipeSlotsView$$Type, int4: integer, int5: integer): void
get "buttonHighlightColor"(): integer
get "missingCountHint"(): integer
get "tooltip"(): $List<$Component>
get "type"(): $IRecipeTransferError$Type
}

export namespace $IRecipeTransferError {
const probejs$$marker: never
}
export abstract class $IRecipeTransferError$$Static implements $IRecipeTransferError {
}
}

declare module "packages/mezz/jei/api/ingredients/$IIngredientType" {
import { $Class } from "packages/java/lang/$Class"
import { $Optional } from "packages/java/util/$Optional"

export interface $IIngredientType<T> {
"castIngredient"(object0: any): $Optional<T>
"getIngredientClass"(): $Class<T>
"getUid"(): string
get "ingredientClass"(): $Class<T>
get "uid"(): string
}

export namespace $IIngredientType {
const probejs$$marker: never
}
export abstract class $IIngredientType$$Static<T> implements $IIngredientType<T> {
}
}

declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target" {
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Rect2i } from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGhostIngredientHandler$Target<I> extends $Consumer<I> {
"accept"(i0: I): void
"andThen"(consumer0: $Consumer$$Type<I>): $Consumer<I>
"getArea"(): $Rect2i
get "area"(): $Rect2i
}

export namespace $IGhostIngredientHandler$Target {
const probejs$$marker: never
}
export abstract class $IGhostIngredientHandler$Target$$Static<I> implements $IGhostIngredientHandler$Target<I> {
}
}

