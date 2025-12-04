declare module "packages/net/minecraft/world/item/$DyeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeItem$$Type = ($DyeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeItem_ = $DyeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockItem$$Type = ($BlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockItem_ = $BlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SuspiciousStewItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SuspiciousStewItem$$Type = ($SuspiciousStewItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SuspiciousStewItem_ = $SuspiciousStewItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DyeableArmorItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeableArmorItem$$Type = ($DyeableArmorItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeableArmorItem_ = $DyeableArmorItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $CreativeModeTab$ItemDisplayParameters$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import { $CreativeModeTab$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$Type"
import { $CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator"
import { $Collection, $Collection$$Type } from "packages/java/util/$Collection"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $CreativeModeTabKJS } from "packages/dev/latvian/mods/kubejs/core/$CreativeModeTabKJS"
import { $CreativeModeTab$Builder } from "packages/net/minecraft/world/item/$CreativeModeTab$Builder"
import { $CreativeModeTab$Row, $CreativeModeTab$Row$$Type } from "packages/net/minecraft/world/item/$CreativeModeTab$Row"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $IMixinItemGroup } from "packages/org/anti_ad/mc/ipnext/mixinhelpers/$IMixinItemGroup"
import { $List, $List$$Type } from "packages/java/util/$List"

export class $CreativeModeTab implements $IMixinItemGroup, $CreativeModeTabKJS {
readonly "tabsAfter": $List<$ResourceLocation>
readonly "tabsBefore": $List<$ResourceLocation>

public "buildContents"(itemDisplayParameters0: $CreativeModeTab$ItemDisplayParameters$$Type): void
public static "builder"(): $CreativeModeTab$Builder
/** @deprecated */
public static "builder"(row0: $CreativeModeTab$Row$$Type, int1: integer): $CreativeModeTab$Builder
public "canScroll"(): boolean
public "column"(): integer
public "contains"(itemStack0: $ItemStack$$Type): boolean
public "getBackgroundLocation"(): $ResourceLocation
/** @deprecated */
public "getBackgroundSuffix"(): string
public "getDisplayItems"(): $Collection<$ItemStack>
public "getDisplayName"(): $Component
public "getIPNPriorityIndex"(): integer
public "getIconItem"(): $ItemStack
public "getLabelColor"(): integer
public "getSearchBarWidth"(): integer
public "getSearchTabDisplayItems"(): $Collection<$ItemStack>
public "getSlotColor"(): integer
public "getTabsImage"(): $ResourceLocation
public "getType"(): $CreativeModeTab$Type
public "hasAnyItems"(): boolean
public "hasSearchBar"(): boolean
public "isAlignedRight"(): boolean
public "kjs$setDisplayName"(component: $Component$$Type): void
public "kjs$setIcon"(icon: $ItemStack$$Type): void
public "rebuildSearchTree"(): void
public "row"(): $CreativeModeTab$Row
public "setIPNPriorityIndex"(int0: integer): void
public "setSearchTreeBuilder"(consumer0: $Consumer$$Type<$List$$Type<$ItemStack$$Type>>): void
public "shouldDisplay"(): boolean
public "showTitle"(): boolean
get "displayItems"(): $Collection<$ItemStack>
set "displayItems"(value: $Collection$$Type<$ItemStack$$Type>)
get "displayItemsGenerator"(): $CreativeModeTab$DisplayItemsGenerator
set "displayItemsGenerator"(value: $CreativeModeTab$DisplayItemsGenerator$$Type)
get "backgroundLocation"(): $ResourceLocation
get "backgroundSuffix"(): string
get "displayName"(): $Component
get "iPNPriorityIndex"(): integer
get "iconItem"(): $ItemStack
get "labelColor"(): integer
get "searchBarWidth"(): integer
get "searchTabDisplayItems"(): $Collection<$ItemStack>
get "slotColor"(): integer
get "tabsImage"(): $ResourceLocation
get "type"(): $CreativeModeTab$Type
get "alignedRight"(): boolean
set "iPNPriorityIndex"(value: integer)
set "searchTreeBuilder"(value: $Consumer$$Type<$List$$Type<$ItemStack$$Type>>)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.CreativeModeTab
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.CreativeModeTabTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$$Type = ($CreativeModeTab | Special.CreativeModeTab);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab_ = $CreativeModeTab$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FoodOnAStickItem" {
import { $ItemSteerable, $ItemSteerable$$Type } from "packages/net/minecraft/world/entity/$ItemSteerable"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FoodOnAStickItem$$Type<T extends ($Entity & $ItemSteerable)> = ($FoodOnAStickItem<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FoodOnAStickItem_<T extends ($Entity & $ItemSteerable)> = $FoodOnAStickItem$$Type<T>;
}
}

declare module "packages/net/minecraft/world/item/$EnderpearlItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnderpearlItem$$Type = ($EnderpearlItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnderpearlItem_ = $EnderpearlItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DyeableHorseArmorItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeableHorseArmorItem$$Type = ($DyeableHorseArmorItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeableHorseArmorItem_ = $DyeableHorseArmorItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$InstrumentItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InstrumentItem$$Type = ($InstrumentItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InstrumentItem_ = $InstrumentItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ChorusFruitItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChorusFruitItem$$Type = ($ChorusFruitItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChorusFruitItem_ = $ChorusFruitItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EnchantedGoldenAppleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantedGoldenAppleItem$$Type = ($EnchantedGoldenAppleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantedGoldenAppleItem_ = $EnchantedGoldenAppleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArrowItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArrowItem$$Type = ($ArrowItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArrowItem_ = $ArrowItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Vanishable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Vanishable$$Type = ($Vanishable);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Vanishable_ = $Vanishable$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BoneMealItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoneMealItem$$Type = ($BoneMealItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoneMealItem_ = $BoneMealItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Item$Properties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Item$Properties$$Type = ($Item$Properties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Item$Properties_ = $Item$Properties$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BowlFoodItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BowlFoodItem$$Type = ($BowlFoodItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BowlFoodItem_ = $BowlFoodItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SignApplicator" {
import { $SignBlockEntity } from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level } from "packages/net/minecraft/world/level/$Level"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignApplicator$$Type = ($SignApplicator | ((arg0: $Level, arg1: $SignBlockEntity, arg2: boolean, arg3: $Player) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignApplicator_ = $SignApplicator$$Type;
}
}

declare module "packages/net/minecraft/world/item/$MobBucketItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobBucketItem$$Type = ($MobBucketItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobBucketItem_ = $MobBucketItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$Builder$$Type = ($CreativeModeTab$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$Builder_ = $CreativeModeTab$Builder$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemFrameItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemFrameItem$$Type = ($ItemFrameItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemFrameItem_ = $ItemFrameItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EnchantedBookItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantedBookItem$$Type = ($EnchantedBookItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantedBookItem_ = $EnchantedBookItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FireChargeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireChargeItem$$Type = ($FireChargeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireChargeItem_ = $FireChargeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$StandingAndWallBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StandingAndWallBlockItem$$Type = ($StandingAndWallBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StandingAndWallBlockItem_ = $StandingAndWallBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$WritableBookItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WritableBookItem$$Type = ($WritableBookItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WritableBookItem_ = $WritableBookItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FlintAndSteelItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlintAndSteelItem$$Type = ($FlintAndSteelItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlintAndSteelItem_ = $FlintAndSteelItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Items" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Items$$Type = ($Items);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Items_ = $Items$$Type;
}
}

declare module "packages/net/minecraft/world/item/$PotionItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PotionItem$$Type = ($PotionItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PotionItem_ = $PotionItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SimpleFoiledItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleFoiledItem$$Type = ($SimpleFoiledItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleFoiledItem_ = $SimpleFoiledItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ThrowablePotionItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ThrowablePotionItem$$Type = ($ThrowablePotionItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ThrowablePotionItem_ = $ThrowablePotionItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EnderEyeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnderEyeItem$$Type = ($EnderEyeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnderEyeItem_ = $EnderEyeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArmorItem$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmorItem$Type$$Type = ($ArmorItem$Type | ("helmet" | "chestplate" | "leggings" | "boots"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmorItem$Type_ = $ArmorItem$Type$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BottleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BottleItem$$Type = ($BottleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BottleItem_ = $BottleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArmorMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmorMaterial$$Type = ($ArmorMaterial | string);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmorMaterial_ = $ArmorMaterial$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EmptyMapItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EmptyMapItem$$Type = ($EmptyMapItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EmptyMapItem_ = $EmptyMapItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SplashPotionItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SplashPotionItem$$Type = ($SplashPotionItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SplashPotionItem_ = $SplashPotionItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DispensibleContainerItem" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DispensibleContainerItem$$Type = ($DispensibleContainerItem | ((arg0: $Player, arg1: $Level, arg2: $BlockPos, arg3: $BlockHitResult) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DispensibleContainerItem_ = $DispensibleContainerItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SaddleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SaddleItem$$Type = ($SaddleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SaddleItem_ = $SaddleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SpyglassItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpyglassItem$$Type = ($SpyglassItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpyglassItem_ = $SpyglassItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemDisplayContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemDisplayContext$$Type = ($ItemDisplayContext | ("none" | "third_person_left_hand" | "third_person_right_hand" | "first_person_left_hand" | "first_person_right_hand" | "head" | "gui" | "ground" | "fixed"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemDisplayContext_ = $ItemDisplayContext$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ShieldItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShieldItem$$Type = ($ShieldItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShieldItem_ = $ShieldItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SpawnEggItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnEggItem$$Type = ($SpawnEggItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnEggItem_ = $SpawnEggItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BundleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BundleItem$$Type = ($BundleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BundleItem_ = $BundleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$AxeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AxeItem$$Type = ($AxeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AxeItem_ = $AxeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$InkSacItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InkSacItem$$Type = ($InkSacItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InkSacItem_ = $InkSacItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DebugStickItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DebugStickItem$$Type = ($DebugStickItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DebugStickItem_ = $DebugStickItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SwordItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SwordItem$$Type = ($SwordItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SwordItem_ = $SwordItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemStack$TooltipPart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemStack$TooltipPart$$Type = ($ItemStack$TooltipPart | ("enchantments" | "modifiers" | "unbreakable" | "can_destroy" | "can_place" | "additional" | "dye" | "upgrades"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemStack$TooltipPart_ = $ItemStack$TooltipPart$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ShearsItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShearsItem$$Type = ($ShearsItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShearsItem_ = $ShearsItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ComplexItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ComplexItem$$Type = ($ComplexItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ComplexItem_ = $ComplexItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$GameMasterBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GameMasterBlockItem$$Type = ($GameMasterBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GameMasterBlockItem_ = $GameMasterBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ExperienceBottleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ExperienceBottleItem$$Type = ($ExperienceBottleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ExperienceBottleItem_ = $ExperienceBottleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SnowballItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SnowballItem$$Type = ($SnowballItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SnowballItem_ = $SnowballItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$GlowInkSacItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GlowInkSacItem$$Type = ($GlowInkSacItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GlowInkSacItem_ = $GlowInkSacItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HorseArmorItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HorseArmorItem$$Type = ($HorseArmorItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HorseArmorItem_ = $HorseArmorItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Equipable" {
import { $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Equipable$$Type = ($Equipable | (() => $EquipmentSlot$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Equipable_ = $Equipable$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HoneyBottleItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoneyBottleItem$$Type = ($HoneyBottleItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoneyBottleItem_ = $HoneyBottleItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ElytraItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ElytraItem$$Type = ($ElytraItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ElytraItem_ = $ElytraItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SolidBucketItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SolidBucketItem$$Type = ($SolidBucketItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SolidBucketItem_ = $SolidBucketItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$TabVisibility$$Type = ($CreativeModeTab$TabVisibility | ("parent_and_search_tabs" | "parent_tab_only" | "search_tab_only"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$TabVisibility_ = $CreativeModeTab$TabVisibility$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Item" {
import { $SoundEvent } from "packages/net/minecraft/sounds/$SoundEvent"
import { $CompoundTag, $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $IExtendedItem } from "packages/net/mehvahdjukaar/moonlight/core/misc/$IExtendedItem"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $DamageSource$$Type } from "packages/net/minecraft/world/damagesource/$DamageSource"
import { $Holder$Reference, $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IForgeItem } from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import { $LivingEntity, $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $FoodProperties } from "packages/net/minecraft/world/food/$FoodProperties"
import { $IZetaForgeItemStuff } from "packages/org/violetmoon/zetaimplforge/client/$IZetaForgeItemStuff"
import { $TooltipFlag$$Type } from "packages/net/minecraft/world/item/$TooltipFlag"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $ToolAction$$Type } from "packages/net/minecraftforge/common/$ToolAction"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RandomSource$$Type } from "packages/net/minecraft/util/$RandomSource"
import { $AABB } from "packages/net/minecraft/world/phys/$AABB"
import { $ItemStackKey } from "packages/dev/latvian/mods/kubejs/item/$ItemStackKey"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $ItemKJS } from "packages/dev/latvian/mods/kubejs/core/$ItemKJS"
import { $Multimap } from "packages/com/google/common/collect/$Multimap"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $MutableToolTier$$Type } from "packages/dev/latvian/mods/kubejs/item/$MutableToolTier"
import { $IrisItemLightProvider } from "packages/net/irisshaders/iris/api/v0/item/$IrisItemLightProvider"
import { $Rarity, $Rarity$$Type } from "packages/net/minecraft/world/item/$Rarity"
import { $InjectedItemExtension } from "packages/dev/architectury/extensions/injected/$InjectedItemExtension"
import { $ClipContext$Fluid$$Type } from "packages/net/minecraft/world/level/$ClipContext$Fluid"
import { $UseOnContext$$Type } from "packages/net/minecraft/world/item/context/$UseOnContext"
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $IEnchantableItem } from "packages/dev/shadowsoffire/apotheosis/ench/table/$IEnchantableItem"
import { $AttributeModifier$Operation$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import { $ICapabilityProvider } from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import { $AdditionalItemPlacement, $AdditionalItemPlacement$$Type } from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import { $Optional } from "packages/java/util/$Optional"
import { $ItemEntity$$Type } from "packages/net/minecraft/world/entity/item/$ItemEntity"
import { $BlockEntityWithoutLevelRenderer$$Type } from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FoodBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$FoodBuilder"
import { $HumanoidArmorModelGetter$$Type } from "packages/org/violetmoon/zeta/client/$HumanoidArmorModelGetter"
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $ClickAction$$Type } from "packages/net/minecraft/world/inventory/$ClickAction"
import { $TooltipComponent } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $Mob$$Type } from "packages/net/minecraft/world/entity/$Mob"
import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType"
import { $EnchantmentInstance, $EnchantmentInstance$$Type } from "packages/net/minecraft/world/item/enchantment/$EnchantmentInstance"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"
import { $FeatureElement } from "packages/net/minecraft/world/flag/$FeatureElement"
import { $IMixinItemIndexValue } from "packages/org/anti_ad/mc/ipnext/mixinhelpers/$IMixinItemIndexValue"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $ItemForgeAccessor } from "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemForgeAccessor"
import { $Item$Properties$$Type } from "packages/net/minecraft/world/item/$Item$Properties"
import { $IClientItemExtensions$$Type } from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $InteractionResult } from "packages/net/minecraft/world/$InteractionResult"
import { $EnderMan$$Type } from "packages/net/minecraft/world/entity/monster/$EnderMan"
import { $ItemAccessor } from "packages/net/dries007/tfc/mixin/accessor/$ItemAccessor"
import { $LevelReader$$Type } from "packages/net/minecraft/world/level/$LevelReader"
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $InteractionResultHolder } from "packages/net/minecraft/world/$InteractionResultHolder"
import { $DelegateHolder } from "packages/org/embeddedt/modernfix/forge/registry/$DelegateHolder"
import { $InteractionHand$$Type } from "packages/net/minecraft/world/$InteractionHand"
import { $SlotAccess$$Type } from "packages/net/minecraft/world/entity/$SlotAccess"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Attribute, $Attribute$$Type } from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import { $AttributeModifier } from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import { $ItemBuilder, $ItemBuilder$$Type } from "packages/dev/latvian/mods/kubejs/item/$ItemBuilder"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ItemLike } from "packages/net/minecraft/world/level/$ItemLike"
import { $UseAnim } from "packages/net/minecraft/world/item/$UseAnim"
import { $Map } from "packages/java/util/$Map"

export class $Item implements $FeatureElement, $ItemLike, $IForgeItem, $DelegateHolder<any>, $IEnchantableItem, $IrisItemLightProvider, $ItemAccessor, $IZetaForgeItemStuff, $ItemForgeAccessor, $IMixinItemIndexValue, $InjectedItemExtension, $IExtendedItem, $ItemKJS {
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BY_BLOCK": $Map<$Block, $Item>
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "MAX_STACK_SIZE": integer

constructor(properties0: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "appendHoverText"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, list2: $List$$Type<$Component$$Type>, tooltipFlag3: $TooltipFlag$$Type): void
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "asIngredient"(): $Ingredient
public "asItem"(): $Item
/** @deprecated */
public "builtInRegistryHolder"(): $Holder$Reference<$Item>
/** @deprecated */
public static "byBlock"(block0: $Block$$Type): $Item
public static "byId"(int0: integer): $Item
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canAttackBlock"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "canBeDepleted"(): boolean
public "canBeHurtBy"(damageSource0: $DamageSource$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(itemStack0: $ItemStack$$Type, equipmentSlot1: $EquipmentSlot$$Type, entity2: $Entity$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "finishUsingItem"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type): $ItemStack
public "forciblyAllowsTableEnchantment"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBarColor"(itemStack0: $ItemStack$$Type): integer
public "getBarWidth"(itemStack0: $ItemStack$$Type): integer
public "getBurnTime"(itemStack0: $ItemStack$$Type, recipeType1: $RecipeType$$Type<any>): integer
/** @deprecated */
public "getCraftingRemainingItem"(): $Item
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
/** @deprecated */
public "getDefaultAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getDefaultInstance"(): $ItemStack
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDescription"(): $Component
public "getDescriptionId"(itemStack0: $ItemStack$$Type): string
public "getDescriptionId"(): string
public "getDestroySpeed"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): float
public "getDigSpeed"(): float
public "getDrinkingSound"(): $SoundEvent
public "getEatingSound"(): $SoundEvent
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
/** @deprecated */
public "getFoodProperties"(): $FoodProperties
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getId"(): string
public static "getId"(item0: $Item$$Type): integer
public "getIdLocation"(): $ResourceLocation
public "getItem"(): $Item
public "getItemBuilder"(): $ItemBuilder
public "getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
public "getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
/** @deprecated */
public "getMaxDamage"(): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
/** @deprecated */
public "getMaxStackSize"(): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getName"(itemStack0: $ItemStack$$Type): $Component
public static "getPlayerPOVHitResult"(level0: $Level$$Type, player1: $Player$$Type, fluid2: $ClipContext$Fluid$$Type): $BlockHitResult
public "getRarity"(itemStack0: $ItemStack$$Type): $Rarity
public "getRenderPropertiesInternal"(): any
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): $AABB
public "getTooltipImage"(itemStack0: $ItemStack$$Type): $Optional<$TooltipComponent>
public "getTypeData"(): $CompoundTag
public "getTypeItemStackKey"(): $ItemStackKey
public "getUseAnimation"(itemStack0: $ItemStack$$Type): $UseAnim
public "getUseDuration"(itemStack0: $ItemStack$$Type): integer
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "handler$emb001$initializeClient"(consumer: $Consumer$$Type<any>, ci: $CallbackInfo$$Type): void
/** @deprecated */
public "hasCraftingRemainingItem"(): boolean
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "hurtEnemy"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "initializeClient"(consumer0: $Consumer$$Type<$IClientItemExtensions$$Type>): void
public "interactLivingEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, livingEntity2: $LivingEntity$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResult
public "inventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, entity2: $Entity$$Type, int3: integer, boolean4: boolean): void
public "ipn$getIndex"(): integer
public "ipn$setIndex"(int0: integer): void
public "isBarVisible"(itemStack0: $ItemStack$$Type): boolean
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isComplex"(): boolean
public "isCorrectToolForDrops"(blockState0: $BlockState$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEdible"(): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnchantable"(itemStack0: $ItemStack$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isFireResistant"(): boolean
public "isFoil"(itemStack0: $ItemStack$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isRepairable"(itemStack0: $ItemStack$$Type): boolean
public "isTreasureAllowed"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
public "isValidRepairItem"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "mfix$getDelegate"(registryKey: $ResourceKey$$Type<any>): $Holder$Reference<any>
public "mfix$setDelegate"(registryKey: $ResourceKey$$Type<any>, holder: $Holder$Reference$$Type<any>): void
public "mineBlock"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, blockState2: $BlockState$$Type, blockPos3: $BlockPos$$Type, livingEntity4: $LivingEntity$$Type): boolean
public "modifyReturnValue$fac000$overrideOtherStackedOnMe"(boolean0: boolean, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, slot3: $Slot$$Type, clickAction4: $ClickAction$$Type, player5: $Player$$Type, slotAccess6: $SlotAccess$$Type): boolean
public "modifyReturnValue$fac000$overrideStackedOnOther"(boolean0: boolean, itemStack1: $ItemStack$$Type, slot2: $Slot$$Type, clickAction3: $ClickAction$$Type, player4: $Player$$Type): boolean
public "moonlight$addAdditionalBehavior"(placementOverride: $AdditionalItemPlacement$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(obj: any): void
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onCraftedBy"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
/** @deprecated */
public "onDestroyed"(itemEntity0: $ItemEntity$$Type): void
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEnchantment"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$EnchantmentInstance$$Type>): $ItemStack
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "onUseTick"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): void
public "overrideOtherStackedOnMe"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, slot2: $Slot$$Type, clickAction3: $ClickAction$$Type, player4: $Player$$Type, slotAccess5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(itemStack0: $ItemStack$$Type, slot1: $Slot$$Type, clickAction2: $ClickAction$$Type, player3: $Player$$Type): boolean
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "releaseUsing"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "requiredFeatures"(): $FeatureFlagSet
public "selectEnchantments"(list0: $List$$Type<$EnchantmentInstance$$Type>, randomSource1: $RandomSource$$Type, itemStack2: $ItemStack$$Type, int3: integer, float4: float, float5: float, boolean6: boolean): $List<$EnchantmentInstance>
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setBurnTime"(i: integer): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setItemBuilder"(b: $ItemBuilder$$Type): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "shouldOverrideMultiplayerNbt"(): boolean
public "use"(level0: $Level$$Type, player1: $Player$$Type, interactionHand2: $InteractionHand$$Type): $InteractionResultHolder<$ItemStack>
public "useOn"(useOnContext0: $UseOnContext$$Type): $InteractionResult
public "useOnRelease"(itemStack0: $ItemStack$$Type): boolean
public "verifyTagAfterLoad"(compoundTag0: $CompoundTag$$Type): void
public "zeta$setBlockEntityWithoutLevelRenderer"(blockEntityWithoutLevelRenderer0: $BlockEntityWithoutLevelRenderer$$Type): void
public "zeta$setHumanoidArmorModel"(humanoidArmorModelGetter0: $HumanoidArmorModelGetter$$Type): void
get "craftingRemainingItem"(): $Item
set "craftingRemainingItem"(value: $Item$$Type)
get "descriptionId"(): string
set "descriptionId"(value: string)
get "rarity"(): $Rarity
set "rarity"(value: $Rarity$$Type)
get "renderProperties"(): any
set "renderProperties"(value: any)
get "creativeTab"(): string
get "defaultInstance"(): $ItemStack
get "description"(): $Component
get "digSpeed"(): float
get "drinkingSound"(): $SoundEvent
get "eatingSound"(): $SoundEvent
get "enchantmentValue"(): integer
get "foodProperties"(): $FoodProperties
get "id"(): string
get "idLocation"(): $ResourceLocation
get "item"(): $Item
get "itemBuilder"(): $ItemBuilder
get "maxDamage"(): integer
get "maxStackSize"(): integer
get "mod"(): string
get "renderPropertiesInternal"(): any
get "typeData"(): $CompoundTag
get "typeItemStackKey"(): $ItemStackKey
get "complex"(): boolean
get "edible"(): boolean
get "fireResistant"(): boolean
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "burnTime"(value: integer)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "itemBuilder"(value: $ItemBuilder$$Type)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Item
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ItemTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Item$$Type = ($Item | Special.Item);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Item_ = $Item$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ShovelItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShovelItem$$Type = ($ShovelItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShovelItem_ = $ShovelItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$UseAnim" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UseAnim$$Type = ($UseAnim | ("none" | "eat" | "drink" | "block" | "bow" | "spear" | "crossbow" | "spyglass" | "toot_horn" | "brush" | "custom"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UseAnim_ = $UseAnim$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SmithingTemplateItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SmithingTemplateItem$$Type = ($SmithingTemplateItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SmithingTemplateItem_ = $SmithingTemplateItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$LeadItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LeadItem$$Type = ($LeadItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LeadItem_ = $LeadItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$WrittenBookItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WrittenBookItem$$Type = ($WrittenBookItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WrittenBookItem_ = $WrittenBookItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemCooldowns$CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemCooldowns$CooldownInstance$$Type = ($ItemCooldowns$CooldownInstance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemCooldowns$CooldownInstance_ = $ItemCooldowns$CooldownInstance$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HoneycombItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoneycombItem$$Type = ($HoneycombItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoneycombItem_ = $HoneycombItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$DisplayItemsGenerator" {
import { $CreativeModeTab$ItemDisplayParameters } from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import { $CreativeModeTab$Output } from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$DisplayItemsGenerator$$Type = ($CreativeModeTab$DisplayItemsGenerator | ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$DisplayItemsGenerator_ = $CreativeModeTab$DisplayItemsGenerator$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$Type$$Type = ($CreativeModeTab$Type | ("category" | "inventory" | "hotbar" | "search"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$Type_ = $CreativeModeTab$Type$$Type;
}
}

declare module "packages/net/minecraft/world/item/$KnowledgeBookItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $KnowledgeBookItem$$Type = ($KnowledgeBookItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $KnowledgeBookItem_ = $KnowledgeBookItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ProjectileWeaponItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProjectileWeaponItem$$Type = ($ProjectileWeaponItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProjectileWeaponItem_ = $ProjectileWeaponItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BoatItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BoatItem$$Type = ($BoatItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BoatItem_ = $BoatItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FireworkRocketItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireworkRocketItem$$Type = ($FireworkRocketItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireworkRocketItem_ = $FireworkRocketItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemStack" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemStack$$Type = ($ItemStack | $Item$$Type | {"item": Special.Item, "count?": integer, "nbt?": {}});
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemStack_ = $ItemStack$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArmorMaterials" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmorMaterials$$Type = ($ArmorMaterials | ("leather" | "chain" | "iron" | "gold" | "diamond" | "turtle" | "netherite"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmorMaterials_ = $ArmorMaterials$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CrossbowItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CrossbowItem$$Type = ($CrossbowItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CrossbowItem_ = $CrossbowItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$TippedArrowItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TippedArrowItem$$Type = ($TippedArrowItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TippedArrowItem_ = $TippedArrowItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemCooldowns" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemCooldowns$$Type = ($ItemCooldowns);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemCooldowns_ = $ItemCooldowns$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DoubleHighBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DoubleHighBlockItem$$Type = ($DoubleHighBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DoubleHighBlockItem_ = $DoubleHighBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EggItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EggItem$$Type = ($EggItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EggItem_ = $EggItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$PlaceOnWaterBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlaceOnWaterBlockItem$$Type = ($PlaceOnWaterBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlaceOnWaterBlockItem_ = $PlaceOnWaterBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ItemNameBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemNameBlockItem$$Type = ($ItemNameBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemNameBlockItem_ = $ItemNameBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HangingEntityItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HangingEntityItem$$Type = ($HangingEntityItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HangingEntityItem_ = $HangingEntityItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BrushItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrushItem$$Type = ($BrushItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrushItem_ = $BrushItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DyeableLeatherItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeableLeatherItem$$Type = ($DyeableLeatherItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeableLeatherItem_ = $DyeableLeatherItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArmorStandItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmorStandItem$$Type = ($ArmorStandItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmorStandItem_ = $ArmorStandItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Rarity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Rarity$$Type = ($Rarity | ("common" | "uncommon" | "rare" | "epic" | "ie_masterwork" | "malum$sacred" | "malum$wicked" | "malum$arcane" | "malum$eldritch" | "malum$aerial" | "malum$aqueous" | "malum$earthen" | "malum$infernal" | "malum$umbral"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Rarity_ = $Rarity$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$Output" {
import { $CreativeModeTab$TabVisibility } from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$Output$$Type = ($CreativeModeTab$Output | ((arg0: $ItemStack, arg1: $CreativeModeTab$TabVisibility) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$Output_ = $CreativeModeTab$Output$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ArmorItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArmorItem$$Type = ($ArmorItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArmorItem_ = $ArmorItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BannerPatternItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BannerPatternItem$$Type = ($BannerPatternItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BannerPatternItem_ = $BannerPatternItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$RecordItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecordItem$$Type = ($RecordItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecordItem_ = $RecordItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$AirItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AirItem$$Type = ($AirItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AirItem_ = $AirItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BookItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BookItem$$Type = ($BookItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BookItem_ = $BookItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$LingeringPotionItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LingeringPotionItem$$Type = ($LingeringPotionItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LingeringPotionItem_ = $LingeringPotionItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SignItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignItem$$Type = ($SignItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignItem_ = $SignItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BedItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BedItem$$Type = ($BedItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BedItem_ = $BedItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$PickaxeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PickaxeItem$$Type = ($PickaxeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PickaxeItem_ = $PickaxeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$EndCrystalItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EndCrystalItem$$Type = ($EndCrystalItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EndCrystalItem_ = $EndCrystalItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$ItemDisplayParameters$$Type = ($CreativeModeTab$ItemDisplayParameters);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$ItemDisplayParameters_ = $CreativeModeTab$ItemDisplayParameters$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BowItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BowItem$$Type = ($BowItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BowItem_ = $BowItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Tier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Tier$$Type = ($Tier | string);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Tier_ = $Tier$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FishingRodItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FishingRodItem$$Type = ($FishingRodItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FishingRodItem_ = $FishingRodItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FireworkRocketItem$Shape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireworkRocketItem$Shape$$Type = ($FireworkRocketItem$Shape | ("small_ball" | "large_ball" | "star" | "creeper" | "burst"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireworkRocketItem$Shape_ = $FireworkRocketItem$Shape$$Type;
}
}

declare module "packages/net/minecraft/world/item/$MilkBucketItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MilkBucketItem$$Type = ($MilkBucketItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MilkBucketItem_ = $MilkBucketItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$TooltipFlag$Default" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TooltipFlag$Default$$Type = ($TooltipFlag$Default);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TooltipFlag$Default_ = $TooltipFlag$Default$$Type;
}
}

declare module "packages/net/minecraft/world/item/$TieredItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TieredItem$$Type = ($TieredItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TieredItem_ = $TieredItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$NameTagItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NameTagItem$$Type = ($NameTagItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NameTagItem_ = $NameTagItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DiggerItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiggerItem$$Type = ($DiggerItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiggerItem_ = $DiggerItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HangingSignItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HangingSignItem$$Type = ($HangingSignItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HangingSignItem_ = $HangingSignItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CreativeModeTab$Row" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTab$Row$$Type = ($CreativeModeTab$Row | ("top" | "bottom"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTab$Row_ = $CreativeModeTab$Row$$Type;
}
}

declare module "packages/net/minecraft/world/item/$SpectralArrowItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpectralArrowItem$$Type = ($SpectralArrowItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpectralArrowItem_ = $SpectralArrowItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BannerItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BannerItem$$Type = ($BannerItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BannerItem_ = $BannerItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$PlayerHeadItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerHeadItem$$Type = ($PlayerHeadItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerHeadItem_ = $PlayerHeadItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DyeColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeColor$$Type = ($DyeColor | ("white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeColor_ = $DyeColor$$Type;
}
}

declare module "packages/net/minecraft/world/item/$ScaffoldingBlockItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScaffoldingBlockItem$$Type = ($ScaffoldingBlockItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScaffoldingBlockItem_ = $ScaffoldingBlockItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$HoeItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoeItem$$Type = ($HoeItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoeItem_ = $HoeItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$DiscFragmentItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DiscFragmentItem$$Type = ($DiscFragmentItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DiscFragmentItem_ = $DiscFragmentItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$TridentItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TridentItem$$Type = ($TridentItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TridentItem_ = $TridentItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$BucketItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BucketItem$$Type = ($BucketItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BucketItem_ = $BucketItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$CompassItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompassItem$$Type = ($CompassItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompassItem_ = $CompassItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$MapItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapItem$$Type = ($MapItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapItem_ = $MapItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$TooltipFlag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TooltipFlag$$Type = ($TooltipFlag);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TooltipFlag_ = $TooltipFlag$$Type;
}
}

declare module "packages/net/minecraft/world/item/$Instrument" {
import { $SoundEvent, $SoundEvent$$Type } from "packages/net/minecraft/sounds/$SoundEvent"
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Record } from "packages/java/lang/$Record"
import { $Codec } from "packages/com/mojang/serialization/$Codec"

export class $Instrument extends $Record {
static readonly "CODEC": $Codec<$Instrument>

constructor(holder0: $Holder$$Type<$SoundEvent$$Type>, int1: integer, float2: float)

public "range"(): float
public "soundEvent"(): $Holder<$SoundEvent>
public "useDuration"(): integer
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Instrument
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.InstrumentTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Instrument$$Type = ($Instrument | Special.Instrument);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Instrument_ = $Instrument$$Type;
}
}

declare module "packages/net/minecraft/world/item/$FireworkStarItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireworkStarItem$$Type = ($FireworkStarItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireworkStarItem_ = $FireworkStarItem$$Type;
}
}

declare module "packages/net/minecraft/world/item/$MinecartItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecartItem$$Type = ($MinecartItem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecartItem_ = $MinecartItem$$Type;
}
}

