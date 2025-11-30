declare module "packages/dev/architectury/utils/$OptionalSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OptionalSupplier$$Type<T> = ($OptionalSupplier<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OptionalSupplier_<T> = $OptionalSupplier$$Type<T>;
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrarBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrarBuilder$$Type<T> = ($RegistrarBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrarBuilder_<T> = $RegistrarBuilder$$Type<T>;
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrarManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrarManager$$Type = ($RegistrarManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrarManager_ = $RegistrarManager$$Type;
}
}

declare module "packages/dev/architectury/registry/registries/$DeferredSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DeferredSupplier$$Type<T> = ($DeferredSupplier<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DeferredSupplier_<T> = $DeferredSupplier$$Type<T>;
}
}

declare module "packages/dev/architectury/event/events/common/$CommandPerformEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandPerformEvent$$Type = ($CommandPerformEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandPerformEvent_ = $CommandPerformEvent$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedLiquidBlockExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedLiquidBlockExtension$$Type = ($InjectedLiquidBlockExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedLiquidBlockExtension_ = $InjectedLiquidBlockExtension$$Type;
}
}

declare module "packages/dev/architectury/hooks/level/biome/$SpawnProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpawnProperties$$Type = ($SpawnProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpawnProperties_ = $SpawnProperties$$Type;
}
}

declare module "packages/dev/architectury/fluid/$FluidStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FluidStack$$Type = ($FluidStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FluidStack_ = $FluidStack$$Type;
}
}

declare module "packages/dev/architectury/event/events/client/$ClientCommandRegistrationEvent$ClientCommandSourceStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack_ = $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type;
}
}

declare module "packages/dev/architectury/event/$CompoundEventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompoundEventResult$$Type<T> = ($CompoundEventResult<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompoundEventResult_<T> = $CompoundEventResult$$Type<T>;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedGameEventExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedGameEventExtension$$Type = ($InjectedGameEventExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedGameEventExtension_ = $InjectedGameEventExtension$$Type;
}
}

declare module "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MenuAccess, $MenuAccess$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MenuRegistry$ScreenFactory$$Type<H extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>)> = ($MenuRegistry$ScreenFactory<H, S> | ((arg0: H, arg1: $Inventory, arg2: $Component) => S));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MenuRegistry$ScreenFactory_<H extends $AbstractContainerMenu, S extends ($Screen & $MenuAccess<H>)> = $MenuRegistry$ScreenFactory$$Type<H, S>;
}
}

declare module "packages/dev/architectury/hooks/level/biome/$GenerationProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenerationProperties$$Type = ($GenerationProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenerationProperties_ = $GenerationProperties$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedEntityTypeExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedEntityTypeExtension$$Type = ($InjectedEntityTypeExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedEntityTypeExtension_ = $InjectedEntityTypeExtension$$Type;
}
}

declare module "packages/dev/architectury/event/$EventResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventResult$$Type = ($EventResult);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventResult_ = $EventResult$$Type;
}
}

declare module "packages/dev/architectury/event/$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Event$$Type<T> = ($Event<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Event_<T> = $Event$$Type<T>;
}
}

declare module "packages/dev/architectury/event/$EventActor" {
import { $EventResult$$Type } from "packages/dev/architectury/event/$EventResult"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventActor$$Type<T> = ($EventActor<T> | ((arg0: T) => $EventResult$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventActor_<T> = $EventActor$$Type<T>;
}
}

declare module "packages/dev/architectury/utils/value/$IntValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IntValue$$Type = ($IntValue);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IntValue_ = $IntValue$$Type;
}
}

declare module "packages/dev/architectury/hooks/level/biome/$ClimateProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClimateProperties$$Type = ($ClimateProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClimateProperties_ = $ClimateProperties$$Type;
}
}

declare module "packages/dev/architectury/impl/$ItemPropertiesExtensionImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemPropertiesExtensionImpl$$Type = ($ItemPropertiesExtensionImpl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemPropertiesExtensionImpl_ = $ItemPropertiesExtensionImpl$$Type;
}
}

declare module "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArchitecturyFluidAttributes$$Type = ($ArchitecturyFluidAttributes);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArchitecturyFluidAttributes_ = $ArchitecturyFluidAttributes$$Type;
}
}

declare module "packages/dev/architectury/registry/registries/$Registrar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Registrar$$Type<T> = ($Registrar<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Registrar_<T> = $Registrar$$Type<T>;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedFluidExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedFluidExtension$$Type = ($InjectedFluidExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedFluidExtension_ = $InjectedFluidExtension$$Type;
}
}

declare module "packages/dev/architectury/utils/value/$Value" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Value$$Type<T> = ($Value<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Value_<T> = $Value$$Type<T>;
}
}

declare module "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EventHandlerImplCommon$LevelEventAttachment$$Type = ($EventHandlerImplCommon$LevelEventAttachment);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EventHandlerImplCommon$LevelEventAttachment_ = $EventHandlerImplCommon$LevelEventAttachment$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedItemExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedItemExtension$$Type = ($InjectedItemExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedItemExtension_ = $InjectedItemExtension$$Type;
}
}

declare module "packages/dev/architectury/registry/registries/options/$RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrarOption$$Type = ($RegistrarOption);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrarOption_ = $RegistrarOption$$Type;
}
}

declare module "packages/dev/architectury/hooks/level/biome/$BiomeProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiomeProperties$$Type = ($BiomeProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiomeProperties_ = $BiomeProperties$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedBlockExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedBlockExtension$$Type = ($InjectedBlockExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedBlockExtension_ = $InjectedBlockExtension$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedBucketItemExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedBucketItemExtension$$Type = ($InjectedBucketItemExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedBucketItemExtension_ = $InjectedBucketItemExtension$$Type;
}
}

declare module "packages/dev/architectury/event/events/common/$ChatEvent$ChatComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatEvent$ChatComponent$$Type = ($ChatEvent$ChatComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatEvent$ChatComponent_ = $ChatEvent$ChatComponent$$Type;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension" {
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedRegistryEntryExtension$$Type<T> = ($InjectedRegistryEntryExtension<T> | (() => $Holder$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedRegistryEntryExtension_<T> = $InjectedRegistryEntryExtension$$Type<T>;
}
}

declare module "packages/dev/architectury/extensions/injected/$InjectedItemPropertiesExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InjectedItemPropertiesExtension$$Type = ($InjectedItemPropertiesExtension);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InjectedItemPropertiesExtension_ = $InjectedItemPropertiesExtension$$Type;
}
}

declare module "packages/dev/architectury/registry/level/biome/$BiomeModifications$BiomeContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BiomeModifications$BiomeContext$$Type = ($BiomeModifications$BiomeContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BiomeModifications$BiomeContext_ = $BiomeModifications$BiomeContext$$Type;
}
}

declare module "packages/dev/architectury/hooks/level/biome/$EffectsProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EffectsProperties$$Type = ($EffectsProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EffectsProperties_ = $EffectsProperties$$Type;
}
}

declare module "packages/dev/architectury/registry/registries/$RegistrySupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistrySupplier$$Type<T> = ($RegistrySupplier<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistrySupplier_<T> = $RegistrySupplier$$Type<T>;
}
}

