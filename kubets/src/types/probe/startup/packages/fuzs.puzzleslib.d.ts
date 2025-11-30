declare module "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeRegistryForgeAccessor$$Type<V> = ($ForgeRegistryForgeAccessor<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeRegistryForgeAccessor_<V> = $ForgeRegistryForgeAccessor$$Type<V>;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockAccessor" {
import { $Item } from "packages/net/minecraft/world/item/$Item"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockAccessor$$Type = ($BlockAccessor | ((arg0: $Item) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockAccessor_ = $BlockAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$AbstractContainerMenuAccessor" {
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractContainerMenuAccessor$$Type = ($AbstractContainerMenuAccessor | ((arg0: $Slot) => $Slot$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BlockItemAccessor" {
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockItemAccessor$$Type = ($BlockItemAccessor | ((arg0: $Block) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockItemAccessor_ = $BlockItemAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$FireBlockForgeAccessor" {
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FireBlockForgeAccessor$$Type = ($FireBlockForgeAccessor | ((arg0: $Block, arg1: integer, arg2: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FireBlockForgeAccessor_ = $FireBlockForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$LootTableForgeAccessor" {
import { $List$$Type } from "packages/java/util/$List"
import { $LootPool$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootPool"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTableForgeAccessor$$Type = ($LootTableForgeAccessor | (() => $List$$Type<$LootPool$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTableForgeAccessor_ = $LootTableForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$BiomeSpecialEffectsBuilderForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiomeSpecialEffectsBuilderForgeAccessor$$Type = ($BiomeSpecialEffectsBuilderForgeAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiomeSpecialEffectsBuilderForgeAccessor_ = $BiomeSpecialEffectsBuilderForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ModelBakeryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModelBakeryAccessor$$Type = ($ModelBakeryAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/impl/data/$FileHelperDataProvider" {
import { $ExistingFileHelper } from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileHelperDataProvider$$Type = ($FileHelperDataProvider | ((arg0: $ExistingFileHelper) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileHelperDataProvider_ = $FileHelperDataProvider$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$TooltipAccessor" {
import { $FormattedCharSequence } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $List } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TooltipAccessor$$Type = ($TooltipAccessor | ((arg0: $List<$FormattedCharSequence>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TooltipAccessor_ = $TooltipAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$MobSpawnSettingsBuilderForgeAccessor" {
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $MobSpawnSettings$MobSpawnCost$$Type } from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MobSpawnSettingsBuilderForgeAccessor$$Type = ($MobSpawnSettingsBuilderForgeAccessor | (() => $Map$$Type<$EntityType$$Type<any>, $MobSpawnSettings$MobSpawnCost$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MobSpawnSettingsBuilderForgeAccessor_ = $MobSpawnSettingsBuilderForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/accessor/$SimpleContainerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleContainerAccessor$$Type = ($SimpleContainerAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleContainerAccessor_ = $SimpleContainerAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/impl/event/$LootTableModifyEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LootTableModifyEvent$$Type = ($LootTableModifyEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LootTableModifyEvent_ = $LootTableModifyEvent$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$BlockColorsForgeAccessor" {
import { $BlockColor$$Type } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockColorsForgeAccessor$$Type = ($BlockColorsForgeAccessor | (() => $Map$$Type<$Holder$Reference$$Type<$Block$$Type>, $BlockColor$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockColorsForgeAccessor_ = $BlockColorsForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemForgeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemForgeAccessor$$Type = ($ItemForgeAccessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemForgeAccessor_ = $ItemForgeAccessor$$Type;
}
}

declare module "packages/fuzs/puzzleslib/mixin/client/accessor/$ItemColorsForgeAccessor" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $ItemColor$$Type } from "packages/net/minecraft/client/color/item/$ItemColor"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemColorsForgeAccessor$$Type = ($ItemColorsForgeAccessor | (() => $Map$$Type<$Holder$Reference$$Type<$Item$$Type>, $ItemColor$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemColorsForgeAccessor_ = $ItemColorsForgeAccessor$$Type;
}
}

