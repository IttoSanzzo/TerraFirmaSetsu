declare module "packages/com/tterrag/registrate/util/nullness/$NonNullBiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullBiConsumer$$Type<T, U> = ($NonNullBiConsumer<T, U> | ((arg0: T, arg1: U) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullBiConsumer_<T, U> = $NonNullBiConsumer$$Type<T, U>;
}
}

declare module "packages/com/tterrag/registrate/providers/loot/$RegistrateLootTableProvider$LootType" {
import { $RegistrateLootTables, $RegistrateLootTables$$Type } from "packages/com/tterrag/registrate/providers/loot/$RegistrateLootTables"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateLootTableProvider$LootType$$Type<T extends $RegistrateLootTables> = ($RegistrateLootTableProvider$LootType<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateLootTableProvider$LootType_<T extends $RegistrateLootTables> = $RegistrateLootTableProvider$LootType$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$FluidBuilder$FluidTypeFactory" {
import { $FluidType$Properties } from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $FluidType$$Type } from "packages/net/minecraftforge/fluids/$FluidType"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidBuilder$FluidTypeFactory$$Type = ($FluidBuilder$FluidTypeFactory | ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidBuilder$FluidTypeFactory_ = $FluidBuilder$FluidTypeFactory$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$BlockEntityBuilder" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityBuilder$$Type<T extends $BlockEntity, P> = ($BlockEntityBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityBuilder_<T extends $BlockEntity, P> = $BlockEntityBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/util/entry/$EntityEntry" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityEntry$$Type<T extends $Entity> = ($EntityEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityEntry_<T extends $Entity> = $EntityEntry$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$MenuBuilder$ScreenFactory" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MenuAccess, $MenuAccess$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuBuilder$ScreenFactory$$Type<M extends $AbstractContainerMenu, T extends ($Screen & $MenuAccess<M>)> = ($MenuBuilder$ScreenFactory<M, T> | ((arg0: M, arg1: $Inventory, arg2: $Component) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuBuilder$ScreenFactory_<M extends $AbstractContainerMenu, T extends ($Screen & $MenuAccess<M>)> = $MenuBuilder$ScreenFactory$$Type<M, T>;
}
}

declare module "packages/com/tterrag/registrate/providers/loot/$RegistrateLootTables" {
import { $BiConsumer } from "packages/java/util/function/$BiConsumer"
import { $LootTable$Builder } from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateLootTables$$Type = ($RegistrateLootTables | ((arg0: $BiConsumer<$ResourceLocation, $LootTable$Builder>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateLootTables_ = $RegistrateLootTables$$Type;
}
}

declare module "packages/com/tterrag/registrate/providers/loot/$RegistrateLootTableProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateLootTableProvider$$Type = ($RegistrateLootTableProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateLootTableProvider_ = $RegistrateLootTableProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$BlockEntityBuilder$BlockEntityFactory" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $BlockEntityType } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $BlockState } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityBuilder$BlockEntityFactory$$Type<T extends $BlockEntity> = ($BlockEntityBuilder$BlockEntityFactory<T> | ((arg0: $BlockEntityType<T>, arg1: $BlockPos, arg2: $BlockState) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityBuilder$BlockEntityFactory_<T extends $BlockEntity> = $BlockEntityBuilder$BlockEntityFactory$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$FluidBuilder" {
import { $ForgeFlowingFluid, $ForgeFlowingFluid$$Type } from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidBuilder$$Type<T extends $ForgeFlowingFluid, P> = ($FluidBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidBuilder_<T extends $ForgeFlowingFluid, P> = $FluidBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/builders/$NoConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NoConfigBuilder$$Type<R, T extends R, P> = ($NoConfigBuilder<R, T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NoConfigBuilder_<R, T extends R, P> = $NoConfigBuilder$$Type<R, T, P>;
}
}

declare module "packages/com/tterrag/registrate/util/entry/$MenuEntry" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuEntry$$Type<T extends $AbstractContainerMenu> = ($MenuEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuEntry_<T extends $AbstractContainerMenu> = $MenuEntry$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$MenuBuilder$MenuFactory" {
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuType } from "packages/net/minecraft/world/inventory/$MenuType"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuBuilder$MenuFactory$$Type<T extends $AbstractContainerMenu> = ($MenuBuilder$MenuFactory<T> | ((arg0: $MenuType<T>, arg1: integer, arg2: $Inventory) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuBuilder$MenuFactory_<T extends $AbstractContainerMenu> = $MenuBuilder$MenuFactory$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/util/$CreativeModeTabModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CreativeModeTabModifier$$Type = ($CreativeModeTabModifier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CreativeModeTabModifier_ = $CreativeModeTabModifier$$Type;
}
}

declare module "packages/com/tterrag/registrate/util/nullness/$NonNullUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullUnaryOperator$$Type<T> = ($NonNullUnaryOperator<T> | ((arg0: T) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullUnaryOperator_<T> = $NonNullUnaryOperator$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$MenuBuilder$ForgeMenuFactory" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuType } from "packages/net/minecraft/world/inventory/$MenuType"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuBuilder$ForgeMenuFactory$$Type<T extends $AbstractContainerMenu> = ($MenuBuilder$ForgeMenuFactory<T> | ((arg0: $MenuType<T>, arg1: integer, arg2: $Inventory, arg3: $FriendlyByteBuf) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuBuilder$ForgeMenuFactory_<T extends $AbstractContainerMenu> = $MenuBuilder$ForgeMenuFactory$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullSupplier$$Type<T> = ($NonNullSupplier<T> | (() => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullSupplier_<T> = $NonNullSupplier$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/$AbstractRegistrate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractRegistrate$$Type<S extends $AbstractRegistrate<S>> = ($AbstractRegistrate<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractRegistrate_<S extends $AbstractRegistrate<S>> = $AbstractRegistrate$$Type<S>;
}
}

declare module "packages/com/tterrag/registrate/builders/$MenuBuilder" {
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $MenuAccess, $MenuAccess$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuBuilder$$Type<T extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<T>), P> = ($MenuBuilder<T, S, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuBuilder_<T extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<T>), P> = $MenuBuilder$$Type<T, S, P>;
}
}

declare module "packages/com/tterrag/registrate/providers/$DataGenContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataGenContext$$Type<R, E extends R> = ($DataGenContext<R, E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataGenContext_<R, E extends R> = $DataGenContext$$Type<R, E>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateTagsProvider$IntrinsicImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateTagsProvider$IntrinsicImpl$$Type<T> = ($RegistrateTagsProvider$IntrinsicImpl<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateTagsProvider$IntrinsicImpl_<T> = $RegistrateTagsProvider$IntrinsicImpl$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/util/nullness/$NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullFunction$$Type<T, R> = ($NonNullFunction<T, R> | ((arg0: T) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullFunction_<T, R> = $NonNullFunction$$Type<T, R>;
}
}

declare module "packages/com/tterrag/registrate/util/$DataIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataIngredient$$Type = ($DataIngredient);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataIngredient_ = $DataIngredient$$Type;
}
}

declare module "packages/com/tterrag/registrate/util/entry/$BlockEntityEntry" {
import { $BlockEntity, $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockEntityEntry$$Type<T extends $BlockEntity> = ($BlockEntityEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockEntityEntry_<T extends $BlockEntity> = $BlockEntityEntry$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/builders/$BuilderCallback" {
import { $Builder } from "packages/com/tterrag/registrate/builders/$Builder"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $NonNullSupplier } from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import { $RegistryEntry, $RegistryEntry$$Type } from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $RegistryObject } from "packages/net/minecraftforge/registries/$RegistryObject"
import { $NonNullFunction } from "packages/com/tterrag/registrate/util/nullness/$NonNullFunction"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuilderCallback$$Type = ($BuilderCallback | ((arg0: string, arg1: $ResourceKey<$Registry<R>>, arg2: $Builder<R, T, any, any>, arg3: $NonNullSupplier<T>, arg4: $NonNullFunction<$RegistryObject<T>, $RegistryEntry<T>>) => $RegistryEntry$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuilderCallback_ = $BuilderCallback$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$EntityBuilder" {
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntityBuilder$$Type<T extends $Entity, P> = ($EntityBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntityBuilder_<T extends $Entity, P> = $EntityBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/builders/$EnchantmentBuilder$EnchantmentFactory" {
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import { $Enchantment$Rarity } from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import { $EquipmentSlot } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $EnchantmentCategory } from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantmentBuilder$EnchantmentFactory$$Type<T extends $Enchantment> = ($EnchantmentBuilder$EnchantmentFactory<T> | ((arg0: $Enchantment$Rarity, arg1: $EnchantmentCategory, ...arg2: $EquipmentSlot[]) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantmentBuilder$EnchantmentFactory_<T extends $Enchantment> = $EnchantmentBuilder$EnchantmentFactory$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/util/nullness/$NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullConsumer$$Type<T> = ($NonNullConsumer<T> | ((arg0: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullConsumer_<T> = $NonNullConsumer$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateBlockLootTables$$Type = ($RegistrateBlockLootTables);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateBlockLootTables_ = $RegistrateBlockLootTables$$Type;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateBlockstateProvider$$Type = ($RegistrateBlockstateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateBlockstateProvider_ = $RegistrateBlockstateProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$AbstractBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractBuilder$$Type<R, T extends R, P, S extends $AbstractBuilder<R, T, P, S>> = ($AbstractBuilder<R, T, P, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractBuilder_<R, T extends R, P, S extends $AbstractBuilder<R, T, P, S>> = $AbstractBuilder$$Type<R, T, P, S>;
}
}

declare module "packages/com/tterrag/registrate/builders/$ItemBuilder" {
import { $Item, $Item$$Type } from "packages/net/minecraft/world/item/$Item"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemBuilder$$Type<T extends $Item, P> = ($ItemBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemBuilder_<T extends $Item, P> = $ItemBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateRecipeProvider$$Type = ($RegistrateRecipeProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateRecipeProvider_ = $RegistrateRecipeProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateItemTagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateItemTagsProvider$$Type = ($RegistrateItemTagsProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateItemTagsProvider_ = $RegistrateItemTagsProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$BlockBuilder" {
import { $Block, $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockBuilder$$Type<T extends $Block, P> = ($BlockBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockBuilder_<T extends $Block, P> = $BlockBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateAdvancementProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateAdvancementProvider$$Type = ($RegistrateAdvancementProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateAdvancementProvider_ = $RegistrateAdvancementProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$EnchantmentBuilder" {
import { $Enchantment, $Enchantment$$Type } from "packages/net/minecraft/world/item/enchantment/$Enchantment"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnchantmentBuilder$$Type<T extends $Enchantment, P> = ($EnchantmentBuilder<T, P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnchantmentBuilder_<T extends $Enchantment, P> = $EnchantmentBuilder$$Type<T, P>;
}
}

declare module "packages/com/tterrag/registrate/providers/$ProviderType" {
import { $RegistrateProvider, $RegistrateProvider$$Type } from "packages/com/tterrag/registrate/providers/$RegistrateProvider"
import { $GatherDataEvent } from "packages/net/minecraftforge/data/event/$GatherDataEvent"
import { $AbstractRegistrate } from "packages/com/tterrag/registrate/$AbstractRegistrate"
import { $Map } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ProviderType$$Type<T extends $RegistrateProvider> = ($ProviderType<T> | ((arg0: $AbstractRegistrate<any>, arg1: $GatherDataEvent, arg2: $Map<$ProviderType<any>, $RegistrateProvider>) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ProviderType_<T extends $RegistrateProvider> = $ProviderType$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateTagsProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateTagsProvider$$Type<T> = ($RegistrateTagsProvider<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateTagsProvider_<T> = $RegistrateTagsProvider$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateLangProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateLangProvider$$Type = ($RegistrateLangProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateLangProvider_ = $RegistrateLangProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/builders/$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Builder$$Type<R, T extends R, P, S extends $Builder<R, T, P, S>> = ($Builder<R, T, P, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Builder_<R, T extends R, P, S extends $Builder<R, T, P, S>> = $Builder$$Type<R, T, P, S>;
}
}

declare module "packages/com/tterrag/registrate/util/entry/$RegistryEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryEntry$$Type<T> = ($RegistryEntry<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$$Type<T>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateItemModelProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateItemModelProvider$$Type = ($RegistrateItemModelProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateItemModelProvider_ = $RegistrateItemModelProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/util/nullness/$NonNullBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NonNullBiFunction$$Type<T, U, R> = ($NonNullBiFunction<T, U, R> | ((arg0: T, arg1: U) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NonNullBiFunction_<T, U, R> = $NonNullBiFunction$$Type<T, U, R>;
}
}

declare module "packages/com/tterrag/registrate/providers/$RegistrateProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateProvider$$Type = ($RegistrateProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateProvider_ = $RegistrateProvider$$Type;
}
}

declare module "packages/com/tterrag/registrate/providers/loot/$RegistrateEntityLootTables" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrateEntityLootTables$$Type = ($RegistrateEntityLootTables);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrateEntityLootTables_ = $RegistrateEntityLootTables$$Type;
}
}

