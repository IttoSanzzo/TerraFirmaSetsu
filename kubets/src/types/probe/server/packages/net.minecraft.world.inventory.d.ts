declare module "packages/net/minecraft/world/inventory/$AbstractContainerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractContainerMenu$$Type = ($AbstractContainerMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractContainerMenu_ = $AbstractContainerMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$DataSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataSlot$$Type = ($DataSlot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataSlot_ = $DataSlot$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$HopperMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HopperMenu$$Type = ($HopperMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HopperMenu_ = $HopperMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuType$MenuSupplier$$Type<T extends $AbstractContainerMenu> = ($MenuType$MenuSupplier<T> | ((arg0: integer, arg1: $Inventory) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuType$MenuSupplier_<T extends $AbstractContainerMenu> = $MenuType$MenuSupplier$$Type<T>;
}
}

declare module "packages/net/minecraft/world/inventory/$SmokerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SmokerMenu$$Type = ($SmokerMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SmokerMenu_ = $SmokerMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ClickAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClickAction$$Type = ($ClickAction | ("primary" | "secondary"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClickAction_ = $ClickAction$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$BrewingStandMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrewingStandMenu$$Type = ($BrewingStandMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrewingStandMenu_ = $BrewingStandMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerData$$Type = ($ContainerData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerData_ = $ContainerData$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$CraftingMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CraftingMenu$$Type = ($CraftingMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CraftingMenu_ = $CraftingMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ShulkerBoxMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ShulkerBoxMenu$$Type = ($ShulkerBoxMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ShulkerBoxMenu_ = $ShulkerBoxMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ContainerListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerListener$$Type = ($ContainerListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerListener_ = $ContainerListener$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ClickType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClickType$$Type = ($ClickType | ("pickup" | "quick_move" | "swap" | "clone" | "throw" | "quick_craft" | "pickup_all"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClickType_ = $ClickType$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ItemCombinerMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemCombinerMenu$$Type = ($ItemCombinerMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemCombinerMenu_ = $ItemCombinerMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$MenuConstructor" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuConstructor$$Type = ($MenuConstructor | ((arg0: integer, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuConstructor_ = $MenuConstructor$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$MerchantMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MerchantMenu$$Type = ($MerchantMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MerchantMenu_ = $MerchantMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$RecipeBookType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeBookType$$Type = ($RecipeBookType | ("crafting" | "furnace" | "blast_furnace" | "smoker" | "cooking"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeBookType_ = $RecipeBookType$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$SmithingMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SmithingMenu$$Type = ($SmithingMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SmithingMenu_ = $SmithingMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$StackedContentsCompatible" {
import { $StackedContents } from "packages/net/minecraft/world/entity/player/$StackedContents"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StackedContentsCompatible$$Type = ($StackedContentsCompatible | ((arg0: $StackedContents) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StackedContentsCompatible_ = $StackedContentsCompatible$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$LecternMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LecternMenu$$Type = ($LecternMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LecternMenu_ = $LecternMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerEnderChestContainer$$Type = ($PlayerEnderChestContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerEnderChestContainer_ = $PlayerEnderChestContainer$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$BlastFurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlastFurnaceMenu$$Type = ($BlastFurnaceMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlastFurnaceMenu_ = $BlastFurnaceMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$RecipeBookMenu" {
import { $Container, $Container$$Type } from "packages/net/minecraft/world/$Container"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeBookMenu$$Type<C extends $Container> = ($RecipeBookMenu<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeBookMenu_<C extends $Container> = $RecipeBookMenu$$Type<C>;
}
}

declare module "packages/net/minecraft/world/inventory/$StonecutterMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StonecutterMenu$$Type = ($StonecutterMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StonecutterMenu_ = $StonecutterMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$CraftingContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CraftingContainer$$Type = ($CraftingContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CraftingContainer_ = $CraftingContainer$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$Slot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Slot$$Type = ($Slot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Slot_ = $Slot$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$CartographyTableMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CartographyTableMenu$$Type = ($CartographyTableMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CartographyTableMenu_ = $CartographyTableMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$FurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FurnaceMenu$$Type = ($FurnaceMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FurnaceMenu_ = $FurnaceMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$AnvilMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AnvilMenu$$Type = ($AnvilMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AnvilMenu_ = $AnvilMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$InventoryMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InventoryMenu$$Type = ($InventoryMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InventoryMenu_ = $InventoryMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$EnchantmentMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantmentMenu$$Type = ($EnchantmentMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantmentMenu_ = $EnchantmentMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ContainerLevelAccess" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $BiFunction } from "packages/java/util/function/$BiFunction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerLevelAccess$$Type = ($ContainerLevelAccess | ((arg0: $BiFunction<$Level, $BlockPos, T>) => $Optional$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerLevelAccess_ = $ContainerLevelAccess$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TooltipComponent$$Type = ($TooltipComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TooltipComponent_ = $TooltipComponent$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$LoomMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LoomMenu$$Type = ($LoomMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LoomMenu_ = $LoomMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$DispenserMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DispenserMenu$$Type = ($DispenserMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DispenserMenu_ = $DispenserMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$GrindstoneMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GrindstoneMenu$$Type = ($GrindstoneMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GrindstoneMenu_ = $GrindstoneMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$BeaconMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BeaconMenu$$Type = ($BeaconMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BeaconMenu_ = $BeaconMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ContainerSynchronizer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ContainerSynchronizer$$Type = ($ContainerSynchronizer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ContainerSynchronizer_ = $ContainerSynchronizer$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ChestMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChestMenu$$Type = ($ChestMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChestMenu_ = $ChestMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$AbstractFurnaceMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractFurnaceMenu$$Type = ($AbstractFurnaceMenu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractFurnaceMenu_ = $AbstractFurnaceMenu$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$RecipeHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecipeHolder$$Type = ($RecipeHolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecipeHolder_ = $RecipeHolder$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$ResultContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResultContainer$$Type = ($ResultContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResultContainer_ = $ResultContainer$$Type;
}
}

declare module "packages/net/minecraft/world/inventory/$MenuType" {
import { $LecternMenu } from "packages/net/minecraft/world/inventory/$LecternMenu"
import { $DispenserMenu } from "packages/net/minecraft/world/inventory/$DispenserMenu"
import { $SmithingMenu } from "packages/net/minecraft/world/inventory/$SmithingMenu"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import { $IContainerFactory$$Type } from "packages/net/minecraftforge/network/$IContainerFactory"
import { $GrindstoneMenu } from "packages/net/minecraft/world/inventory/$GrindstoneMenu"
import { $LoomMenu } from "packages/net/minecraft/world/inventory/$LoomMenu"
import { $MerchantMenu } from "packages/net/minecraft/world/inventory/$MerchantMenu"
import { $MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type } from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import { $BeaconMenu } from "packages/net/minecraft/world/inventory/$BeaconMenu"
import { $FeatureElement } from "packages/net/minecraft/world/flag/$FeatureElement"
import { $StonecutterMenu } from "packages/net/minecraft/world/inventory/$StonecutterMenu"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $ChestMenu } from "packages/net/minecraft/world/inventory/$ChestMenu"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $SmokerMenu } from "packages/net/minecraft/world/inventory/$SmokerMenu"
import { $FurnaceMenu } from "packages/net/minecraft/world/inventory/$FurnaceMenu"
import { $AnvilMenu } from "packages/net/minecraft/world/inventory/$AnvilMenu"
import { $CraftingMenu } from "packages/net/minecraft/world/inventory/$CraftingMenu"
import { $CartographyTableMenu } from "packages/net/minecraft/world/inventory/$CartographyTableMenu"
import { $ShulkerBoxMenu } from "packages/net/minecraft/world/inventory/$ShulkerBoxMenu"
import { $EnchantmentMenu } from "packages/net/minecraft/world/inventory/$EnchantmentMenu"
import { $HopperMenu } from "packages/net/minecraft/world/inventory/$HopperMenu"
import { $BrewingStandMenu } from "packages/net/minecraft/world/inventory/$BrewingStandMenu"
import { $BlastFurnaceMenu } from "packages/net/minecraft/world/inventory/$BlastFurnaceMenu"
import { $IForgeMenuType } from "packages/net/minecraftforge/common/extensions/$IForgeMenuType"

export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement, $IForgeMenuType<T> {
static readonly "ANVIL": $MenuType<$AnvilMenu>
static readonly "BEACON": $MenuType<$BeaconMenu>
static readonly "BLAST_FURNACE": $MenuType<$BlastFurnaceMenu>
static readonly "BREWING_STAND": $MenuType<$BrewingStandMenu>
static readonly "CARTOGRAPHY_TABLE": $MenuType<$CartographyTableMenu>
static readonly "CRAFTING": $MenuType<$CraftingMenu>
static readonly "ENCHANTMENT": $MenuType<$EnchantmentMenu>
static readonly "FURNACE": $MenuType<$FurnaceMenu>
static readonly "GENERIC_3x3": $MenuType<$DispenserMenu>
static readonly "GENERIC_9x1": $MenuType<$ChestMenu>
static readonly "GENERIC_9x2": $MenuType<$ChestMenu>
static readonly "GENERIC_9x3": $MenuType<$ChestMenu>
static readonly "GENERIC_9x4": $MenuType<$ChestMenu>
static readonly "GENERIC_9x5": $MenuType<$ChestMenu>
static readonly "GENERIC_9x6": $MenuType<$ChestMenu>
static readonly "GRINDSTONE": $MenuType<$GrindstoneMenu>
static readonly "HOPPER": $MenuType<$HopperMenu>
static readonly "LECTERN": $MenuType<$LecternMenu>
static readonly "LOOM": $MenuType<$LoomMenu>
static readonly "MERCHANT": $MenuType<$MerchantMenu>
static readonly "SHULKER_BOX": $MenuType<$ShulkerBoxMenu>
static readonly "SMITHING": $MenuType<$SmithingMenu>
static readonly "SMOKER": $MenuType<$SmokerMenu>
static readonly "STONECUTTER": $MenuType<$StonecutterMenu>
readonly "constructor": $MenuType$MenuSupplier<T>

constructor(menuSupplier0: $MenuType$MenuSupplier$$Type<T>, featureFlagSet1: $FeatureFlagSet$$Type)

public "create"(int0: integer, inventory1: $Inventory$$Type): T
public static "create"<T extends $AbstractContainerMenu>(iContainerFactory0: $IContainerFactory$$Type<T>): $MenuType<T>
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "requiredFeatures"(): $FeatureFlagSet
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Menu
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.MenuTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuType$$Type<T extends $AbstractContainerMenu> = ($MenuType<T> | Special.Menu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuType_<T extends $AbstractContainerMenu> = $MenuType$$Type<T>;
}
}

