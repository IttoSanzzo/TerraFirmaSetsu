declare module "packages/net/minecraftforge/registries/$IdMappingEvent$ModRemapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdMappingEvent$ModRemapping$$Type = ($IdMappingEvent$ModRemapping);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdMappingEvent$ModRemapping_ = $IdMappingEvent$ModRemapping$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$RegistryObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryObject$$Type<T> = ($RegistryObject<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryObject_<T> = $RegistryObject$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$$Type<V> = ($IForgeRegistry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry_<V> = $IForgeRegistry$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICustomHolderSet$$Type<T> = ($ICustomHolderSet<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICustomHolderSet_<T> = $ICustomHolderSet$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$HolderSetType" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $Codec, $Codec$$Type } from "packages/com/mojang/serialization/$Codec"
import { $ICustomHolderSet$$Type } from "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HolderSetType$$Type = ($HolderSetType | ((arg0: $ResourceKey<$Registry<T>>, arg1: $Codec<$Holder<T>>, arg2: boolean) => $Codec$$Type<$ICustomHolderSet$$Type<T>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HolderSetType_ = $HolderSetType$$Type;
}
}

declare module "packages/net/minecraftforge/registries/holdersets/$CompositeHolderSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CompositeHolderSet$$Type<T> = ($CompositeHolderSet<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CompositeHolderSet_<T> = $CompositeHolderSet$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdMappingEvent$IdRemapping$$Type = ($IdMappingEvent$IdRemapping);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdMappingEvent$IdRemapping_ = $IdMappingEvent$IdRemapping$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$RegisterEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegisterEvent$$Type = ($RegisterEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegisterEvent_ = $RegisterEvent$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback" {
import { $RegistryManager } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$ClearCallback$$Type<V> = ($IForgeRegistry$ClearCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$ClearCallback_<V> = $IForgeRegistry$ClearCallback$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/tags/$IReverseTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IReverseTag$$Type<V> = ($IReverseTag<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IReverseTag_<V> = $IReverseTag$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MissingMappingsEvent$$Type = ($MissingMappingsEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MissingMappingsEvent_ = $MissingMappingsEvent$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$IdMappingEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IdMappingEvent$$Type = ($IdMappingEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IdMappingEvent_ = $IdMappingEvent$$Type;
}
}

declare module "packages/net/minecraftforge/registries/tags/$ITagManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ITagManager$$Type<V> = ($ITagManager<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ITagManager_<V> = $ITagManager$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MissingMappingsEvent$Mapping$$Type<T> = ($MissingMappingsEvent$Mapping<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MissingMappingsEvent$Mapping_<T> = $MissingMappingsEvent$Mapping$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegisterEvent$RegisterHelper$$Type<T> = ($RegisterEvent$RegisterHelper<T> | ((arg0: $ResourceLocation, arg1: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegisterEvent$RegisterHelper_<T> = $RegisterEvent$RegisterHelper$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/$DataPackRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataPackRegistryEvent$$Type = ($DataPackRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataPackRegistryEvent_ = $DataPackRegistryEvent$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeRegistry$Snapshot$$Type = ($ForgeRegistry$Snapshot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeRegistry$Snapshot_ = $ForgeRegistry$Snapshot$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$MissingFactory$$Type<V> = ($IForgeRegistry$MissingFactory<V> | ((arg0: $ResourceLocation, arg1: boolean) => V));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$MissingFactory_<V> = $IForgeRegistry$MissingFactory$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistryInternal" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistryInternal$$Type<V> = ($IForgeRegistryInternal<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistryInternal_<V> = $IForgeRegistryInternal$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$NewRegistryEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NewRegistryEvent$$Type = ($NewRegistryEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NewRegistryEvent_ = $NewRegistryEvent$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$RegistryBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryBuilder$$Type<T> = ($RegistryBuilder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$$Type<T>;
}
}

declare module "packages/net/minecraftforge/registries/$ForgeRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeRegistry$$Type<V> = ($ForgeRegistry<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeRegistry_<V> = $ForgeRegistry$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback" {
import { $RegistryManager } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$AddCallback$$Type<V> = ($IForgeRegistry$AddCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager, arg2: integer, arg3: $ResourceKey<V>, arg4: V, arg5: V) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$AddCallback_<V> = $IForgeRegistry$AddCallback$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistryModifiable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistryModifiable$$Type<V> = ($IForgeRegistryModifiable<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistryModifiable_<V> = $IForgeRegistryModifiable$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback" {
import { $RegistryManager } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$ValidateCallback$$Type<V> = ($IForgeRegistry$ValidateCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager, arg2: integer, arg3: $ResourceLocation, arg4: V) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$ValidateCallback_<V> = $IForgeRegistry$ValidateCallback$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$DataPackRegistryEvent$NewRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataPackRegistryEvent$NewRegistry$$Type = ($DataPackRegistryEvent$NewRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataPackRegistryEvent$NewRegistry_ = $DataPackRegistryEvent$NewRegistry$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback" {
import { $RegistryManager } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$BakeCallback$$Type<V> = ($IForgeRegistry$BakeCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$BakeCallback_<V> = $IForgeRegistry$BakeCallback$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/tags/$ITag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ITag$$Type<V> = ($ITag<V>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ITag_<V> = $ITag$$Type<V>;
}
}

declare module "packages/net/minecraftforge/registries/$RegistryManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryManager$$Type = ($RegistryManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryManager_ = $RegistryManager$$Type;
}
}

declare module "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback" {
import { $RegistryManager } from "packages/net/minecraftforge/registries/$RegistryManager"
import { $IForgeRegistryInternal } from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeRegistry$CreateCallback$$Type<V> = ($IForgeRegistry$CreateCallback<V> | ((arg0: $IForgeRegistryInternal<V>, arg1: $RegistryManager) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeRegistry$CreateCallback_<V> = $IForgeRegistry$CreateCallback$$Type<V>;
}
}

