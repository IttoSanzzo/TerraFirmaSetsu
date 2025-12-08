declare module "packages/org/violetmoon/quark/api/event/$SimpleHarvestEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleHarvestEvent$$Type = ($SimpleHarvestEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleHarvestEvent_ = $SimpleHarvestEvent$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$ModuleLoadedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleLoadedEvent$$Type = ($ModuleLoadedEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleLoadedEvent_ = $ModuleLoadedEvent$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZLoadComplete" {
import { $Runnable } from "packages/java/lang/$Runnable"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZLoadComplete$$Type = ($ZLoadComplete | ((arg0: $Runnable) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZLoadComplete_ = $ZLoadComplete$$Type;
}
}

declare module "packages/org/violetmoon/quark/content/client/resources/$AttributeSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AttributeSlot$$Type = ($AttributeSlot | ("mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "potion"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AttributeSlot_ = $AttributeSlot$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorAbstractChestedHorse" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorAbstractChestedHorse$$Type = ($AccessorAbstractChestedHorse | (() => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorAbstractChestedHorse_ = $AccessorAbstractChestedHorse$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit" {
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$$Type<T extends $Recipe<any>> = ($ZRecipeCrawl$Visit<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit_<T extends $Recipe<any>> = $ZRecipeCrawl$Visit$$Type<T>;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/$IZetaItemExtensionsMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaItemExtensionsMixin$$Type = ($IZetaItemExtensionsMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaItemExtensionsMixin_ = $IZetaItemExtensionsMixin$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZFirstClientTick" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZFirstClientTick$$Type = ($ForgeZFirstClientTick);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZFirstClientTick_ = $ForgeZFirstClientTick$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$GatherToolClassesEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GatherToolClassesEvent$$Type = ($GatherToolClassesEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GatherToolClassesEvent_ = $GatherToolClassesEvent$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$FlagIngredient$Serializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlagIngredient$Serializer$$Type = ($FlagIngredient$Serializer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlagIngredient$Serializer_ = $FlagIngredient$Serializer$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorAbstractArrow" {
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorAbstractArrow$$Type = ($AccessorAbstractArrow | (() => $ItemStack$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorAbstractArrow_ = $AccessorAbstractArrow$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorSinglePoolElement" {
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $StructureTemplate$$Type } from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorSinglePoolElement$$Type = ($AccessorSinglePoolElement | (() => $Either$$Type<$ResourceLocation$$Type, $StructureTemplate$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorSinglePoolElement_ = $AccessorSinglePoolElement$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZModulesReady" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZModulesReady$$Type = ($ForgeZModulesReady);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZModulesReady_ = $ForgeZModulesReady$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/client/event/play/$ForgeZEarlyRender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZEarlyRender$$Type = ($ForgeZEarlyRender);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZEarlyRender_ = $ForgeZEarlyRender$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$RenderLayerRegistry$Layer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RenderLayerRegistry$Layer$$Type = ($RenderLayerRegistry$Layer | ("solid" | "cutout" | "cutout_mipped" | "translucent"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RenderLayerRegistry$Layer_ = $RenderLayerRegistry$Layer$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit$Custom" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$Custom$$Type = ($ZRecipeCrawl$Visit$Custom);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit$Custom_ = $ZRecipeCrawl$Visit$Custom$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit$Shapeless" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$Shapeless$$Type = ($ZRecipeCrawl$Visit$Shapeless);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit$Shapeless_ = $ZRecipeCrawl$Visit$Shapeless$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorMerchantOffer$$Type = ($AccessorMerchantOffer | ((arg0: boolean) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorMerchantOffer_ = $AccessorMerchantOffer$$Type;
}
}

declare module "packages/org/violetmoon/zeta/item/ext/$IZetaItemExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaItemExtensions$$Type = ($IZetaItemExtensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaItemExtensions_ = $IZetaItemExtensions$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$IZetaCondition$IContext" {
import { $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $Registry } from "packages/net/minecraft/core/$Registry"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaCondition$IContext$$Type = ($IZetaCondition$IContext | ((arg0: $ResourceKey<$Registry<T>>) => $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<T>>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaCondition$IContext_ = $IZetaCondition$IContext$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$UsageTickerEvent$GetStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UsageTickerEvent$GetStack$$Type = ($UsageTickerEvent$GetStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UsageTickerEvent$GetStack_ = $UsageTickerEvent$GetStack$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/api/$ForgeZGatherAdvancementModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZGatherAdvancementModifiers$$Type = ($ForgeZGatherAdvancementModifiers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZGatherAdvancementModifiers_ = $ForgeZGatherAdvancementModifiers$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$LateBoundHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LateBoundHolder$$Type<T> = ($LateBoundHolder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LateBoundHolder_<T> = $LateBoundHolder$$Type<T>;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaNetworkDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaNetworkDirection$$Type = ($ZetaNetworkDirection | ("play_to_server" | "play_to_client" | "login_to_server" | "login_to_client"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaNetworkDirection_ = $ZetaNetworkDirection$$Type;
}
}

declare module "packages/org/violetmoon/zeta/advancement/$ManualTrigger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ManualTrigger$$Type = ($ManualTrigger);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ManualTrigger_ = $ManualTrigger$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$IZetaMessage" {
import { $IZetaNetworkEventContext } from "packages/org/violetmoon/zeta/network/$IZetaNetworkEventContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaMessage$$Type = ($IZetaMessage | ((arg0: $IZetaNetworkEventContext) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaMessage_ = $IZetaMessage$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ZetaLoadModuleAnnotationData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaLoadModuleAnnotationData$$Type = ($ZetaLoadModuleAnnotationData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaLoadModuleAnnotationData_ = $ZetaLoadModuleAnnotationData$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/$RegistryUtil" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RegistryUtil$$Type = ($RegistryUtil);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RegistryUtil_ = $RegistryUtil$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZConfigChange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZConfigChange$$Type = ($ForgeZConfigChange);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZConfigChange_ = $ForgeZConfigChange$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$SimpleHarvestEvent$ActionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleHarvestEvent$ActionType$$Type = ($SimpleHarvestEvent$ActionType | ("none" | "click" | "harvest"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleHarvestEvent$ActionType_ = $SimpleHarvestEvent$ActionType$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$IZetaNetworkEventContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaNetworkEventContext$$Type = ($IZetaNetworkEventContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaNetworkEventContext_ = $IZetaNetworkEventContext$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$ModuleStateChangedEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleStateChangedEvent$$Type = ($ModuleStateChangedEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleStateChangedEvent_ = $ModuleStateChangedEvent$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZGatherAdditionalFlags" {
import { $ConfigFlagManager$$Type } from "packages/org/violetmoon/zeta/config/$ConfigFlagManager"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZGatherAdditionalFlags$$Type = ($ZGatherAdditionalFlags | (() => $ConfigFlagManager$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZGatherAdditionalFlags_ = $ZGatherAdditionalFlags$$Type;
}
}

declare module "packages/org/violetmoon/zeta/client/event/play/$ZScreenshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZScreenshot$$Type = ($ZScreenshot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZScreenshot_ = $ZScreenshot$$Type;
}
}

declare module "packages/org/violetmoon/zeta/world/$EntitySpawnHandler$TrackedSpawnConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntitySpawnHandler$TrackedSpawnConfig$$Type = ($EntitySpawnHandler$TrackedSpawnConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntitySpawnHandler$TrackedSpawnConfig_ = $EntitySpawnHandler$TrackedSpawnConfig$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$PottedPlantRegistry" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PottedPlantRegistry$$Type = ($PottedPlantRegistry | ((arg0: $ResourceLocation, arg1: $Block) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PottedPlantRegistry_ = $PottedPlantRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/bus/$ZetaEventBus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaEventBus$$Type<E> = ($ZetaEventBus<E>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaEventBus_<E> = $ZetaEventBus$$Type<E>;
}
}

declare module "packages/org/violetmoon/zeta/event/bus/$IZetaPlayEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaPlayEvent$$Type = ($IZetaPlayEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaPlayEvent_ = $IZetaPlayEvent$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/mixin/mixins/$WeatheringCopperMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WeatheringCopperMixin$$Type = ($WeatheringCopperMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WeatheringCopperMixin_ = $WeatheringCopperMixin$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZModulesReady" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZModulesReady$$Type = ($ZModulesReady);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZModulesReady_ = $ZModulesReady$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$IDisableable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDisableable$$Type<SELF> = ($IDisableable<SELF>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDisableable_<SELF> = $IDisableable$$Type<SELF>;
}
}

declare module "packages/org/violetmoon/zeta/api/$IAdvancementModifierDelegate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAdvancementModifierDelegate$$Type = ($IAdvancementModifierDelegate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAdvancementModifierDelegate_ = $IAdvancementModifierDelegate$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Digest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Digest$$Type = ($ForgeZRecipeCrawl$Digest);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Digest_ = $ForgeZRecipeCrawl$Digest$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZGatherHints$$Type = ($ForgeZGatherHints);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZGatherHints_ = $ForgeZGatherHints$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$VariantRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $VariantRegistry$$Type = ($VariantRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $VariantRegistry_ = $VariantRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/$RaytracingUtil" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RaytracingUtil$$Type = ($RaytracingUtil);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RaytracingUtil_ = $RaytracingUtil$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$FlagIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FlagIngredient$$Type = ($FlagIngredient);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FlagIngredient_ = $FlagIngredient$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaHandshakeMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaHandshakeMessage$$Type = ($ZetaHandshakeMessage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaHandshakeMessage_ = $ZetaHandshakeMessage$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$UsageTickerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UsageTickerEvent$$Type = ($UsageTickerEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UsageTickerEvent_ = $UsageTickerEvent$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$ValueDefinition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ValueDefinition$Builder$$Type<T> = ($ValueDefinition$Builder<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ValueDefinition$Builder_<T> = $ValueDefinition$Builder$$Type<T>;
}
}

declare module "packages/org/violetmoon/zeta/event/play/loading/$ZGatherAdditionalFlags" {
import { $ConfigFlagManager$$Type } from "packages/org/violetmoon/zeta/config/$ConfigFlagManager"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZGatherAdditionalFlags$$Type = ($ZGatherAdditionalFlags | (() => $ConfigFlagManager$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZGatherAdditionalFlags_ = $ZGatherAdditionalFlags$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$$Type = ($ZRecipeCrawl);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl_ = $ZRecipeCrawl$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaMessageSerializer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaMessageSerializer$$Type = ($ZetaMessageSerializer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaMessageSerializer_ = $ZetaMessageSerializer$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$SectionDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SectionDefinition$$Type = ($SectionDefinition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SectionDefinition_ = $SectionDefinition$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/client/accessor/$AccessorMultiPlayerGameMode" {
import { $LocalPlayer } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $InteractionHand } from "packages/net/minecraft/world/$InteractionHand"
import { $InteractionResult$$Type } from "packages/net/minecraft/world/$InteractionResult"
import { $BlockHitResult } from "packages/net/minecraft/world/phys/$BlockHitResult"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorMultiPlayerGameMode$$Type = ($AccessorMultiPlayerGameMode | ((arg0: $LocalPlayer, arg1: $InteractionHand, arg2: $BlockHitResult) => $InteractionResult$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorMultiPlayerGameMode_ = $AccessorMultiPlayerGameMode$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaMessageSerializer$Writer" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Field } from "packages/java/lang/reflect/$Field"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaMessageSerializer$Writer$$Type<T> = ($ZetaMessageSerializer$Writer<T> | ((arg0: $FriendlyByteBuf, arg1: $Field, arg2: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaMessageSerializer$Writer_<T> = $ZetaMessageSerializer$Writer$$Type<T>;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZRegister" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRegister$$Type = ($ForgeZRegister);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRegister_ = $ForgeZRegister$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$UsageTickerEvent$GetCount" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UsageTickerEvent$GetCount$$Type = ($UsageTickerEvent$GetCount);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UsageTickerEvent$GetCount_ = $UsageTickerEvent$GetCount$$Type;
}
}

declare module "packages/org/violetmoon/zeta/client/$HumanoidArmorModelGetter" {
import { $HumanoidModel, $HumanoidModel$$Type } from "packages/net/minecraft/client/model/$HumanoidModel"
import { $EquipmentSlot } from "packages/net/minecraft/world/entity/$EquipmentSlot"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"
import { $LivingEntity } from "packages/net/minecraft/world/entity/$LivingEntity"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HumanoidArmorModelGetter$$Type = ($HumanoidArmorModelGetter | ((arg0: $LivingEntity, arg1: $ItemStack, arg2: $EquipmentSlot, arg3: $HumanoidModel<any>) => $HumanoidModel$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HumanoidArmorModelGetter_ = $HumanoidArmorModelGetter$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$IZetaIngredientSerializer" {
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaIngredientSerializer$$Type<T extends $Ingredient> = ($IZetaIngredientSerializer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaIngredientSerializer_<T extends $Ingredient> = $IZetaIngredientSerializer$$Type<T>;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/loading/$ForgeZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZGatherHints$$Type = ($ForgeZGatherHints);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZGatherHints_ = $ForgeZGatherHints$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/client/accessor/$AccessorModelManager" {
import { $BakedModel$$Type } from "packages/net/minecraft/client/resources/model/$BakedModel"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorModelManager$$Type = ($AccessorModelManager | (() => $Map$$Type<$ResourceLocation$$Type, $BakedModel$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorModelManager_ = $AccessorModelManager$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/client/$IZetaForgeItemStuff" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaForgeItemStuff$$Type = ($IZetaForgeItemStuff);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaForgeItemStuff_ = $IZetaForgeItemStuff$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorChunkAccess" {
import { $LevelHeightAccessor$$Type } from "packages/net/minecraft/world/level/$LevelHeightAccessor"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorChunkAccess$$Type = ($AccessorChunkAccess | (() => $LevelHeightAccessor$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorChunkAccess_ = $AccessorChunkAccess$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl" {
import { $ZRecipeCrawl, $ZRecipeCrawl$$Type } from "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$$Type<W extends $ZRecipeCrawl> = ($ForgeZRecipeCrawl<W>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl_<W extends $ZRecipeCrawl> = $ForgeZRecipeCrawl$$Type<W>;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$IZetaConditionSerializer" {
import { $IZetaCondition, $IZetaCondition$$Type } from "packages/org/violetmoon/zeta/recipe/$IZetaCondition"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaConditionSerializer$$Type<T extends $IZetaCondition> = ($IZetaConditionSerializer<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaConditionSerializer_<T extends $IZetaCondition> = $IZetaConditionSerializer$$Type<T>;
}
}

declare module "packages/org/violetmoon/zeta/block/ext/$BlockExtensionFactory" {
import { $IZetaBlockExtensions$$Type } from "packages/org/violetmoon/zeta/block/ext/$IZetaBlockExtensions"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockExtensionFactory$$Type = ($BlockExtensionFactory | ((arg0: $Block) => $IZetaBlockExtensions$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockExtensionFactory_ = $BlockExtensionFactory$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit$Shaped" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$Shaped$$Type = ($ZRecipeCrawl$Visit$Shaped);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit$Shaped_ = $ZRecipeCrawl$Visit$Shaped$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/bus/$IZetaLoadEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaLoadEvent$$Type = ($IZetaLoadEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaLoadEvent_ = $IZetaLoadEvent$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit$Cooking" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$Cooking$$Type = ($ZRecipeCrawl$Visit$Cooking);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit$Cooking_ = $ZRecipeCrawl$Visit$Cooking$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$UsageTickerEvent$Pass" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UsageTickerEvent$Pass$$Type = ($UsageTickerEvent$Pass | ("logical" | "rendering"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UsageTickerEvent$Pass_ = $UsageTickerEvent$Pass$$Type;
}
}

declare module "packages/org/violetmoon/zeta/block/ext/$IZetaBlockExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaBlockExtensions$$Type = ($IZetaBlockExtensions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaBlockExtensions_ = $IZetaBlockExtensions$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZRegister$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRegister$Post$$Type = ($ZRegister$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRegister$Post_ = $ZRegister$Post$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/type/$IBiomeConfig" {
import { $Holder } from "packages/net/minecraft/core/$Holder"
import { $Biome } from "packages/net/minecraft/world/level/biome/$Biome"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IBiomeConfig$$Type = ($IBiomeConfig | ((arg0: $Holder<$Biome>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IBiomeConfig_ = $IBiomeConfig$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorBlockItem" {
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $BlockPlaceContext } from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorBlockItem$$Type = ($AccessorBlockItem | ((arg0: $BlockPlaceContext) => $BlockState$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorBlockItem_ = $AccessorBlockItem$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ZetaCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaCategory$$Type = ($ZetaCategory);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaCategory_ = $ZetaCategory$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZGatherHints$$Type = ($ZGatherHints);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZGatherHints_ = $ZGatherHints$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$DyeablesRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DyeablesRegistry$$Type = ($DyeablesRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DyeablesRegistry_ = $DyeablesRegistry$$Type;
}
}

declare module "packages/org/violetmoon/quark/content/experimental/hax/$PseudoAccessorMerchantOffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PseudoAccessorMerchantOffer$$Type = ($PseudoAccessorMerchantOffer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PseudoAccessorMerchantOffer_ = $PseudoAccessorMerchantOffer$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$IZetaConfigInternals" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaConfigInternals$$Type = ($IZetaConfigInternals);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaConfigInternals_ = $IZetaConfigInternals$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ZetaLoadModule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaLoadModule$$Type = ($ZetaLoadModule);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaLoadModule_ = $ZetaLoadModule$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit$Misc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$Misc$$Type = ($ForgeZRecipeCrawl$Visit$Misc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit$Misc_ = $ForgeZRecipeCrawl$Visit$Misc$$Type;
}
}

declare module "packages/org/violetmoon/zeta/item/ext/$ItemExtensionFactory" {
import { $IZetaItemExtensions$$Type } from "packages/org/violetmoon/zeta/item/ext/$IZetaItemExtensions"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ItemExtensionFactory$$Type = ($ItemExtensionFactory | ((arg0: $ItemStack) => $IZetaItemExtensions$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ItemExtensionFactory_ = $ItemExtensionFactory$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$IZetaIngredient" {
import { $Ingredient, $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"
import { $IZetaIngredientSerializer$$Type } from "packages/org/violetmoon/zeta/recipe/$IZetaIngredientSerializer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaIngredient$$Type<T extends $Ingredient> = ($IZetaIngredient<T> | (() => $IZetaIngredientSerializer$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaIngredient_<T extends $Ingredient> = $IZetaIngredient$$Type<T>;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit$Shapeless" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$Shapeless$$Type = ($ForgeZRecipeCrawl$Visit$Shapeless);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit$Shapeless_ = $ForgeZRecipeCrawl$Visit$Shapeless$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit$Custom" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$Custom$$Type = ($ForgeZRecipeCrawl$Visit$Custom);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit$Custom_ = $ForgeZRecipeCrawl$Visit$Custom$$Type;
}
}

declare module "packages/org/violetmoon/zeta/client/event/play/$ZEarlyRender" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZEarlyRender$$Type = ($ZEarlyRender | (() => $GuiGraphics$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZEarlyRender_ = $ZEarlyRender$$Type;
}
}

declare module "packages/org/violetmoon/zeta/capability/$ZetaCapabilityManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaCapabilityManager$$Type = ($ZetaCapabilityManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaCapabilityManager_ = $ZetaCapabilityManager$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ModuleFinder" {
import { $Stream$$Type } from "packages/java/util/stream/$Stream"
import { $ZetaLoadModuleAnnotationData$$Type } from "packages/org/violetmoon/zeta/module/$ZetaLoadModuleAnnotationData"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModuleFinder$$Type = ($ModuleFinder | (() => $Stream$$Type<$ZetaLoadModuleAnnotationData$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModuleFinder_ = $ModuleFinder$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZFurnaceFuelBurnTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZFurnaceFuelBurnTime$$Type = ($ZFurnaceFuelBurnTime);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZFurnaceFuelBurnTime_ = $ZFurnaceFuelBurnTime$$Type;
}
}

declare module "packages/org/violetmoon/zeta/api/$IAdvancementModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAdvancementModifier$$Type = ($IAdvancementModifier);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAdvancementModifier_ = $IAdvancementModifier$$Type;
}
}

declare module "packages/org/violetmoon/quark/content/client/hax/$PseudoAccessorItemStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PseudoAccessorItemStack$$Type = ($PseudoAccessorItemStack);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PseudoAccessorItemStack_ = $PseudoAccessorItemStack$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit$Shaped" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$Shaped$$Type = ($ForgeZRecipeCrawl$Visit$Shaped);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit$Shaped_ = $ForgeZRecipeCrawl$Visit$Shaped$$Type;
}
}

declare module "packages/org/violetmoon/zeta/advancement/$ManualTrigger$Instance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ManualTrigger$Instance$$Type = ($ManualTrigger$Instance);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ManualTrigger$Instance_ = $ManualTrigger$Instance$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$Definition$Builder" {
import { $Definition, $Definition$$Type } from "packages/org/violetmoon/zeta/config/$Definition"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Definition$Builder$$Type<B extends $Definition$Builder<B, T>, T extends $Definition> = ($Definition$Builder<B, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Definition$Builder_<B extends $Definition$Builder<B, T>, T extends $Definition> = $Definition$Builder$$Type<B, T>;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorTemptingSensor" {
import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorTemptingSensor$$Type = ($AccessorTemptingSensor | (() => $Ingredient$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorTemptingSensor_ = $AccessorTemptingSensor$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Visit$Misc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Visit$Misc$$Type = ($ZRecipeCrawl$Visit$Misc);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Visit$Misc_ = $ZRecipeCrawl$Visit$Misc$$Type;
}
}

declare module "packages/org/violetmoon/quark/api/event/$QuarkModuleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $QuarkModuleEvent$$Type = ($QuarkModuleEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $QuarkModuleEvent_ = $QuarkModuleEvent$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Starting" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Starting$$Type = ($ForgeZRecipeCrawl$Starting);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Starting_ = $ForgeZRecipeCrawl$Starting$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZConfigChanged" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZConfigChanged$$Type = ($ZConfigChanged);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZConfigChanged_ = $ZConfigChanged$$Type;
}
}

declare module "packages/org/violetmoon/zeta/api/$IMutableAdvancement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMutableAdvancement$$Type = ($IMutableAdvancement);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMutableAdvancement_ = $IMutableAdvancement$$Type;
}
}

declare module "packages/org/violetmoon/zeta/world/$EntitySpawnHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntitySpawnHandler$$Type = ($EntitySpawnHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntitySpawnHandler_ = $EntitySpawnHandler$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit" {
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$$Type<T extends $Recipe<any>> = ($ForgeZRecipeCrawl$Visit<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit_<T extends $Recipe<any>> = $ForgeZRecipeCrawl$Visit$$Type<T>;
}
}

declare module "packages/org/violetmoon/zeta/registry/$ZetaRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaRegistry$$Type = ($ZetaRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaRegistry_ = $ZetaRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/$ZetaSide" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaSide$$Type = ($ZetaSide | ("client" | "server"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaSide_ = $ZetaSide$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/$NameChanger" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NameChanger$$Type = ($NameChanger);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NameChanger_ = $NameChanger$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ZetaModuleManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaModuleManager$$Type = ($ZetaModuleManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaModuleManager_ = $ZetaModuleManager$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Digest" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Digest$$Type = ($ZRecipeCrawl$Digest);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Digest_ = $ZRecipeCrawl$Digest$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Visit$Cooking" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Visit$Cooking$$Type = ($ForgeZRecipeCrawl$Visit$Cooking);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Visit$Cooking_ = $ForgeZRecipeCrawl$Visit$Cooking$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorLivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorLivingEntity$$Type = ($AccessorLivingEntity);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorLivingEntity_ = $AccessorLivingEntity$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$BrewingRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BrewingRegistry$$Type = ($BrewingRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BrewingRegistry_ = $BrewingRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/loading/$ForgeZGatherAdditionalFlags" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZGatherAdditionalFlags$$Type = ($ForgeZGatherAdditionalFlags);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZGatherAdditionalFlags_ = $ForgeZGatherAdditionalFlags$$Type;
}
}

declare module "packages/org/violetmoon/zeta/block/$IZetaBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaBlock$$Type = ($IZetaBlock);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaBlock_ = $IZetaBlock$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaNetworkHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaNetworkHandler$$Type = ($ZetaNetworkHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaNetworkHandler_ = $ZetaNetworkHandler$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZAddReloadListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZAddReloadListener$$Type = ($ZAddReloadListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZAddReloadListener_ = $ZAddReloadListener$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/type/$IConfigType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IConfigType$$Type = ($IConfigType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IConfigType_ = $IConfigType$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$ValueDefinition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ValueDefinition$$Type<T> = ($ValueDefinition<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ValueDefinition_<T> = $ValueDefinition$$Type<T>;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Reset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Reset$$Type = ($ZRecipeCrawl$Reset);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Reset_ = $ZRecipeCrawl$Reset$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/loading/$ZGatherHints" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZGatherHints$$Type = ($ZGatherHints);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZGatherHints_ = $ZGatherHints$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZRegister$Post" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRegister$Post$$Type = ($ForgeZRegister$Post);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRegister$Post_ = $ForgeZRegister$Post$$Type;
}
}

declare module "packages/org/violetmoon/zeta/$Zeta" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Zeta$$Type = ($Zeta);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Zeta_ = $Zeta$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$ConfigManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigManager$$Type = ($ConfigManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigManager_ = $ConfigManager$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/accessor/$AccessorServerGamePacketListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorServerGamePacketListener$$Type = ($AccessorServerGamePacketListener | ((arg0: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorServerGamePacketListener_ = $AccessorServerGamePacketListener$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZScreenshot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZScreenshot$$Type = ($ForgeZScreenshot);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZScreenshot_ = $ForgeZScreenshot$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/handler/$FuelHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FuelHandler$$Type = ($FuelHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FuelHandler_ = $FuelHandler$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$RenderLayerRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RenderLayerRegistry$$Type = ($RenderLayerRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RenderLayerRegistry_ = $RenderLayerRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/play/$ZRecipeCrawl$Starting" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRecipeCrawl$Starting$$Type = ($ZRecipeCrawl$Starting);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRecipeCrawl$Starting_ = $ZRecipeCrawl$Starting$$Type;
}
}

declare module "packages/org/violetmoon/quark/mixin/mixins/$IForgeItemMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IForgeItemMixin$$Type = ($IForgeItemMixin);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IForgeItemMixin_ = $IForgeItemMixin$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$SectionDefinition$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SectionDefinition$Builder$$Type = ($SectionDefinition$Builder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SectionDefinition$Builder_ = $SectionDefinition$Builder$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$ConfigFlagManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigFlagManager$$Type = ($ConfigFlagManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigFlagManager_ = $ConfigFlagManager$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZRegister" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZRegister$$Type = ($ZRegister);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZRegister_ = $ZRegister$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/type/$EntitySpawnConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EntitySpawnConfig$$Type = ($EntitySpawnConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EntitySpawnConfig_ = $EntitySpawnConfig$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/zetalist/$IZeta" {
import { $Zeta$$Type } from "packages/org/violetmoon/zeta/$Zeta"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZeta$$Type = ($IZeta | (() => $Zeta$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZeta_ = $IZeta$$Type;
}
}

declare module "packages/org/violetmoon/zeta/recipe/$IZetaCondition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IZetaCondition$$Type = ($IZetaCondition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IZetaCondition_ = $IZetaCondition$$Type;
}
}

declare module "packages/org/violetmoon/zeta/registry/$CraftingExtensionsRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CraftingExtensionsRegistry$$Type = ($CraftingExtensionsRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CraftingExtensionsRegistry_ = $CraftingExtensionsRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/advancement/$AdvancementModifierRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AdvancementModifierRegistry$$Type = ($AdvancementModifierRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AdvancementModifierRegistry_ = $AdvancementModifierRegistry$$Type;
}
}

declare module "packages/org/violetmoon/zeta/network/$ZetaMessageSerializer$Reader" {
import { $FriendlyByteBuf } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Field } from "packages/java/lang/reflect/$Field"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaMessageSerializer$Reader$$Type<T> = ($ZetaMessageSerializer$Reader<T> | ((arg0: $FriendlyByteBuf, arg1: $Field) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaMessageSerializer$Reader_<T> = $ZetaMessageSerializer$Reader$$Type<T>;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/play/$ForgeZRecipeCrawl$Reset" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZRecipeCrawl$Reset$$Type = ($ForgeZRecipeCrawl$Reset);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZRecipeCrawl$Reset_ = $ForgeZRecipeCrawl$Reset$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/mixin/mixins/client/$AccessorBlockColors" {
import { $BlockColor$$Type } from "packages/net/minecraft/client/color/block/$BlockColor"
import { $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorBlockColors$$Type = ($AccessorBlockColors | (() => $Map$$Type<$Holder$Reference$$Type<$Block$$Type>, $BlockColor$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorBlockColors_ = $AccessorBlockColors$$Type;
}
}

declare module "packages/org/violetmoon/zeta/config/$Definition" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Definition$$Type = ($Definition);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Definition_ = $Definition$$Type;
}
}

declare module "packages/org/violetmoon/zeta/event/load/$ZGatherAdvancementModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZGatherAdvancementModifiers$$Type = ($ZGatherAdvancementModifiers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZGatherAdvancementModifiers_ = $ZGatherAdvancementModifiers$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/mixin/mixins/client/$AccessorItemColors" {
import { $Item$$Type } from "packages/net/minecraft/world/item/$Item"
import { $Holder$Reference$$Type } from "packages/net/minecraft/core/$Holder$Reference"
import { $ItemColor$$Type } from "packages/net/minecraft/client/color/item/$ItemColor"
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorItemColors$$Type = ($AccessorItemColors | (() => $Map$$Type<$Holder$Reference$$Type<$Item$$Type>, $ItemColor$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorItemColors_ = $AccessorItemColors$$Type;
}
}

declare module "packages/org/violetmoon/zeta/mixin/mixins/$AccessorPistonStructureResolver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorPistonStructureResolver$$Type = ($AccessorPistonStructureResolver);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorPistonStructureResolver_ = $AccessorPistonStructureResolver$$Type;
}
}

declare module "packages/org/violetmoon/zetaimplforge/event/load/$ForgeZGatherAdditionalFlags" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ForgeZGatherAdditionalFlags$$Type = ($ForgeZGatherAdditionalFlags);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ForgeZGatherAdditionalFlags_ = $ForgeZGatherAdditionalFlags$$Type;
}
}

declare module "packages/org/violetmoon/zeta/module/$ZetaModule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaModule$$Type = ($ZetaModule);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaModule_ = $ZetaModule$$Type;
}
}

declare module "packages/org/violetmoon/zeta/util/$ZetaCommonProxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaCommonProxy$$Type = ($ZetaCommonProxy);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaCommonProxy_ = $ZetaCommonProxy$$Type;
}
}

declare module "packages/org/violetmoon/zeta/client/event/play/$ZFirstClientTick" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZFirstClientTick$$Type = ($ZFirstClientTick);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZFirstClientTick_ = $ZFirstClientTick$$Type;
}
}

declare module "packages/org/violetmoon/zeta/mixin/mixins/$AccessorLootTable" {
import { $List$$Type } from "packages/java/util/$List"
import { $LootPool$$Type } from "packages/net/minecraft/world/level/storage/loot/$LootPool"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AccessorLootTable$$Type = ($AccessorLootTable | (() => $List$$Type<$LootPool$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AccessorLootTable_ = $AccessorLootTable$$Type;
}
}

declare module "packages/org/violetmoon/zeta/capability/$ZetaCapability" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ZetaCapability$$Type<T> = ($ZetaCapability<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ZetaCapability_<T> = $ZetaCapability$$Type<T>;
}
}

