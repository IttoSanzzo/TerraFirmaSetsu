declare module "packages/xaero/common/settings/$Option" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Option$$Type = ($Option);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Option_ = $Option$$Type;
}
}

declare module "packages/xaero/common/gui/dropdown/$DropDownWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DropDownWidget$$Type = ($DropDownWidget);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DropDownWidget_ = $DropDownWidget$$Type;
}
}

declare module "packages/xaero/common/minimap/radar/$MinimapRadarList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapRadarList$$Type = ($MinimapRadarList);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapRadarList_ = $MinimapRadarList$$Type;
}
}

declare module "packages/xaero/common/interfaces/$InterfaceManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterfaceManager$$Type = ($InterfaceManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterfaceManager_ = $InterfaceManager$$Type;
}
}

declare module "packages/xaero/common/icon/$XaeroIconAtlas" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $XaeroIconAtlas$$Type = ($XaeroIconAtlas);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $XaeroIconAtlas_ = $XaeroIconAtlas$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointSharingHandler$$Type = ($WaypointSharingHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointSharingHandler_ = $WaypointSharingHandler$$Type;
}
}

declare module "packages/xaero/common/gui/widget/$WidgetLoadingHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WidgetLoadingHandler$$Type = ($WidgetLoadingHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WidgetLoadingHandler_ = $WidgetLoadingHandler$$Type;
}
}

declare module "packages/xaero/common/gui/dropdown/$IDropDownContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IDropDownContainer$$Type = ($IDropDownContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IDropDownContainer_ = $IDropDownContainer$$Type;
}
}

declare module "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IPlayerTrackerSystem$$Type<P> = ($IPlayerTrackerSystem<P>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IPlayerTrackerSystem_<P> = $IPlayerTrackerSystem$$Type<P>;
}
}

declare module "packages/xaero/common/validator/$NumericFieldValidator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $NumericFieldValidator$$Type = ($NumericFieldValidator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $NumericFieldValidator_ = $NumericFieldValidator$$Type;
}
}

declare module "packages/xaero/common/server/$IMinecraftServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IMinecraftServer$$Type = ($IMinecraftServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IMinecraftServer_ = $IMinecraftServer$$Type;
}
}

declare module "packages/xaero/common/icon/$XaeroIcon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $XaeroIcon$$Type = ($XaeroIcon);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $XaeroIcon_ = $XaeroIcon$$Type;
}
}

declare module "packages/xaero/common/server/player/$ServerPlayerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayerData$$Type = ($ServerPlayerData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$$Type;
}
}

declare module "packages/xaero/common/gui/$ICanTooltip" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $CursorBox$$Type } from "packages/xaero/common/graphics/$CursorBox"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ICanTooltip$$Type = ($ICanTooltip | (() => $Supplier$$Type<$CursorBox$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ICanTooltip_ = $ICanTooltip$$Type;
}
}

declare module "packages/xaero/common/cache/$BlockStateShortShapeCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BlockStateShortShapeCache$$Type = ($BlockStateShortShapeCache);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$$Type;
}
}

declare module "packages/xaero/common/minimap/mcworld/$IXaeroMinimapClientWorld" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroMinimapClientWorld$$Type = ($IXaeroMinimapClientWorld);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroMinimapClientWorld_ = $IXaeroMinimapClientWorld$$Type;
}
}

declare module "packages/xaero/common/gui/widget/$WidgetScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WidgetScreen$$Type = ($WidgetScreen);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WidgetScreen_ = $WidgetScreen$$Type;
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SyncedPlayerTracker$$Type = ($SyncedPlayerTracker);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$$Type;
}
}

declare module "packages/xaero/common/controls/$ControlsHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ControlsHandler$$Type = ($ControlsHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ControlsHandler_ = $ControlsHandler$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointGuiRenderContext$$Type = ($WaypointGuiRenderContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointGuiRenderContext_ = $WaypointGuiRenderContext$$Type;
}
}

declare module "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerTrackerSystemManager$$Type = ($PlayerTrackerSystemManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerTrackerSystemManager_ = $PlayerTrackerSystemManager$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointsIngameRenderer$$Type = ($WaypointsIngameRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointsIngameRenderer_ = $WaypointsIngameRenderer$$Type;
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapElementReader$$Type<E, RC> = ($MinimapElementReader<E, RC>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapElementReader_<E, RC> = $MinimapElementReader$$Type<E, RC>;
}
}

declare module "packages/xaero/common/server/mods/opac/$SupportOPACServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportOPACServer$$Type = ($SupportOPACServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportOPACServer_ = $SupportOPACServer$$Type;
}
}

declare module "packages/xaero/common/message/basic/$ClientboundRulesPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientboundRulesPacket$$Type = ($ClientboundRulesPacket);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$$Type;
}
}

declare module "packages/xaero/common/settings/$ModOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModOptions$$Type = ($ModOptions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModOptions_ = $ModOptions$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorld" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointWorld$$Type = ($WaypointWorld);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointWorld_ = $WaypointWorld$$Type;
}
}

declare module "packages/xaero/common/minimap/render/$MinimapRendererHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapRendererHelper$$Type = ($MinimapRendererHelper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapRendererHelper_ = $MinimapRendererHelper$$Type;
}
}

declare module "packages/xaero/common/$PlatformContextLoaderClientOnly" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlatformContextLoaderClientOnly$$Type = ($PlatformContextLoaderClientOnly);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlatformContextLoaderClientOnly_ = $PlatformContextLoaderClientOnly$$Type;
}
}

declare module "packages/xaero/common/gui/$IScreenBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IScreenBase$$Type = ($IScreenBase);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IScreenBase_ = $IScreenBase$$Type;
}
}

declare module "packages/xaero/common/events/$CommonEvents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommonEvents$$Type = ($CommonEvents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommonEvents_ = $CommonEvents$$Type;
}
}

declare module "packages/xaero/common/message/$MinimapMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapMessage$$Type<T extends $MinimapMessage<T>> = ($MinimapMessage<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapMessage_<T extends $MinimapMessage<T>> = $MinimapMessage$$Type<T>;
}
}

declare module "packages/xaero/common/misc/$MapFactory" {
import { $Map$$Type } from "packages/java/util/$Map"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MapFactory$$Type = ($MapFactory | (() => $Map$$Type<K, V>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MapFactory_ = $MapFactory$$Type;
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapClientPlayNetHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroMinimapClientPlayNetHandler$$Type = ($IXaeroMinimapClientPlayNetHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroMinimapClientPlayNetHandler_ = $IXaeroMinimapClientPlayNetHandler$$Type;
}
}

declare module "packages/xaero/common/minimap/render/radar/element/$RadarRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RadarRenderer$$Type = ($RadarRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RadarRenderer_ = $RadarRenderer$$Type;
}
}

declare module "packages/xaero/common/gui/$ISettingEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISettingEntry$$Type = ($ISettingEntry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISettingEntry_ = $ISettingEntry$$Type;
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SyncedPlayerTrackerSystemManager$$Type = ($SyncedPlayerTrackerSystemManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$$Type;
}
}

declare module "packages/xaero/common/$IXaeroMinimap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroMinimap$$Type = ($IXaeroMinimap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroMinimap_ = $IXaeroMinimap$$Type;
}
}

declare module "packages/xaero/common/gui/$IXaeroClickableWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroClickableWidget$$Type = ($IXaeroClickableWidget);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroClickableWidget_ = $IXaeroClickableWidget$$Type;
}
}

declare module "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientSyncedTrackedPlayerManager$$Type = ($ClientSyncedTrackedPlayerManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$$Type;
}
}

declare module "packages/xaero/common/gui/$ScreenBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ScreenBase$$Type = ($ScreenBase);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ScreenBase_ = $ScreenBase$$Type;
}
}

declare module "packages/xaero/common/server/mods/$SupportWorldMapServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportWorldMapServer$$Type = ($SupportWorldMapServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportWorldMapServer_ = $SupportWorldMapServer$$Type;
}
}

declare module "packages/xaero/common/gui/$GuiHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GuiHelper$$Type = ($GuiHelper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GuiHelper_ = $GuiHelper$$Type;
}
}

declare module "packages/xaero/common/server/player/$ServerPlayerTickHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerPlayerTickHandler$$Type = ($ServerPlayerTickHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerPlayerTickHandler_ = $ServerPlayerTickHandler$$Type;
}
}

declare module "packages/xaero/common/minimap/info/$InfoDisplay" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplay$$Type<T> = ($InfoDisplay<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplay_<T> = $InfoDisplay$$Type<T>;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointsManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointsManager$$Type = ($WaypointsManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointsManager_ = $WaypointsManager$$Type;
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapElementRenderProvider$$Type<E, RC> = ($MinimapElementRenderProvider<E, RC>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapElementRenderProvider_<E, RC> = $MinimapElementRenderProvider$$Type<E, RC>;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointWorldContainer$$Type = ($WaypointWorldContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointWorldContainer_ = $WaypointWorldContainer$$Type;
}
}

declare module "packages/xaero/common/settings/$ModSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModSettings$$Type = ($ModSettings);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModSettings_ = $ModSettings$$Type;
}
}

declare module "packages/xaero/common/gui/$IXaeroNarratableWidget" {
import { $MutableComponent$$Type } from "packages/net/minecraft/network/chat/$MutableComponent"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroNarratableWidget$$Type = ($IXaeroNarratableWidget | (() => $MutableComponent$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroNarratableWidget_ = $IXaeroNarratableWidget$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointsSort" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointsSort$$Type = ($WaypointsSort | ("none" | "name" | "symbol" | "color" | "distance" | "angle"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointsSort_ = $WaypointsSort$$Type;
}
}

declare module "packages/xaero/common/minimap/region/$MinimapChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapChunk$$Type = ($MinimapChunk);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapChunk_ = $MinimapChunk$$Type;
}
}

declare module "packages/xaero/common/events/$ClientEventsListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientEventsListener$$Type = ($ClientEventsListener);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientEventsListener_ = $ClientEventsListener$$Type;
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapSMultiBlockChangePacket" {
import { $SectionPos$$Type } from "packages/net/minecraft/core/$SectionPos"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroMinimapSMultiBlockChangePacket$$Type = ($IXaeroMinimapSMultiBlockChangePacket | (() => $SectionPos$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroMinimapSMultiBlockChangePacket_ = $IXaeroMinimapSMultiBlockChangePacket$$Type;
}
}

declare module "packages/xaero/common/$HudMod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HudMod$$Type = ($HudMod);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HudMod_ = $HudMod$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointVisibilityType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointVisibilityType$$Type = ($WaypointVisibilityType | ("local" | "global" | "world_map_local" | "world_map_global"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointVisibilityType_ = $WaypointVisibilityType$$Type;
}
}

declare module "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapClientWorldData$$Type = ($MinimapClientWorldData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapClientWorldData_ = $MinimapClientWorldData$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointWorldConnectionManager$$Type = ($WaypointWorldConnectionManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointWorldConnectionManager_ = $WaypointWorldConnectionManager$$Type;
}
}

declare module "packages/xaero/common/minimap/info/$InfoDisplayManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayManager$$Type = ($InfoDisplayManager);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayManager_ = $InfoDisplayManager$$Type;
}
}

declare module "packages/xaero/common/gui/$GuiSettings" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GuiSettings$$Type = ($GuiSettings);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GuiSettings_ = $GuiSettings$$Type;
}
}

declare module "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayRenderer$$Type = ($InfoDisplayRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayRenderer_ = $InfoDisplayRenderer$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointRenderProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointRenderProvider$$Type = ($WaypointRenderProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointRenderProvider_ = $WaypointRenderProvider$$Type;
}
}

declare module "packages/xaero/common/misc/$ListFactory" {
import { $List$$Type } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ListFactory$$Type = ($ListFactory | (() => $List$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ListFactory_ = $ListFactory$$Type;
}
}

declare module "packages/xaero/common/minimap/render/$MinimapRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapRenderer$$Type = ($MinimapRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapRenderer_ = $MinimapRenderer$$Type;
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IXaeroMinimapMinecraftClient$$Type = ($IXaeroMinimapMinecraftClient | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IXaeroMinimapMinecraftClient_ = $IXaeroMinimapMinecraftClient$$Type;
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SyncedTrackedPlayer$$Type = ($SyncedTrackedPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$$Type;
}
}

declare module "packages/xaero/common/patreon/$PatreonMod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PatreonMod$$Type = ($PatreonMod);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PatreonMod_ = $PatreonMod$$Type;
}
}

declare module "packages/xaero/common/minimap/write/$MinimapWriter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapWriter$$Type = ($MinimapWriter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapWriter_ = $MinimapWriter$$Type;
}
}

declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultiTextureRenderTypeRenderer$$Type = ($MultiTextureRenderTypeRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$$Type;
}
}

declare module "packages/xaero/common/mods/$SupportXaeroWorldmap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportXaeroWorldmap$$Type = ($SupportXaeroWorldmap);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportXaeroWorldmap_ = $SupportXaeroWorldmap$$Type;
}
}

declare module "packages/xaero/common/minimap/radar/$MinimapRadar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapRadar$$Type = ($MinimapRadar);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapRadar_ = $MinimapRadar$$Type;
}
}

declare module "packages/xaero/common/$XaeroMinimapSession" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $XaeroMinimapSession$$Type = ($XaeroMinimapSession);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $XaeroMinimapSession_ = $XaeroMinimapSession$$Type;
}
}

declare module "packages/xaero/common/validator/$WaypointCoordinateFieldValidator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointCoordinateFieldValidator$$Type = ($WaypointCoordinateFieldValidator);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointCoordinateFieldValidator_ = $WaypointCoordinateFieldValidator$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointSet$$Type = ($WaypointSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointSet_ = $WaypointSet$$Type;
}
}

declare module "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DimensionHighlighterHandler$$Type = ($DimensionHighlighterHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$$Type;
}
}

declare module "packages/xaero/common/$PlatformContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlatformContext$$Type = ($PlatformContext);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlatformContext_ = $PlatformContext$$Type;
}
}

declare module "packages/xaero/common/graphics/$CursorBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CursorBox$$Type = ($CursorBox);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CursorBox_ = $CursorBox$$Type;
}
}

declare module "packages/xaero/common/gui/widget/$WidgetScreenHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WidgetScreenHandler$$Type = ($WidgetScreenHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WidgetScreenHandler_ = $WidgetScreenHandler$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$Waypoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Waypoint$$Type = ($Waypoint);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Waypoint_ = $Waypoint$$Type;
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapElementRenderer$$Type<E, RC> = ($MinimapElementRenderer<E, RC>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapElementRenderer_<E, RC> = $MinimapElementRenderer$$Type<E, RC>;
}
}

declare module "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportArgonautsServer$$Type = ($SupportArgonautsServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportArgonautsServer_ = $SupportArgonautsServer$$Type;
}
}

declare module "packages/xaero/common/server/$MinecraftServerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinecraftServerData$$Type = ($MinecraftServerData);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$$Type;
}
}

declare module "packages/xaero/common/validator/$FieldValidatorHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FieldValidatorHolder$$Type = ($FieldValidatorHolder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FieldValidatorHolder_ = $FieldValidatorHolder$$Type;
}
}

declare module "packages/xaero/common/events/$ModCommonEvents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModCommonEvents$$Type = ($ModCommonEvents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModCommonEvents_ = $ModCommonEvents$$Type;
}
}

declare module "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapSafeModeRenderer$$Type = ($MinimapSafeModeRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapSafeModeRenderer_ = $MinimapSafeModeRenderer$$Type;
}
}

declare module "packages/xaero/common/$PlatformContextLoaderCommon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlatformContextLoaderCommon$$Type = ($PlatformContextLoaderCommon);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlatformContextLoaderCommon_ = $PlatformContextLoaderCommon$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointsGuiRenderer$$Type = ($WaypointsGuiRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointsGuiRenderer_ = $WaypointsGuiRenderer$$Type;
}
}

declare module "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportFTBTeamsServer$$Type = ($SupportFTBTeamsServer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportFTBTeamsServer_ = $SupportFTBTeamsServer$$Type;
}
}

declare module "packages/xaero/common/events/$ClientEvents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientEvents$$Type = ($ClientEvents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientEvents_ = $ClientEvents$$Type;
}
}

declare module "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayStateCodec$$Type<T> = ($InfoDisplayStateCodec<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayStateCodec_<T> = $InfoDisplayStateCodec$$Type<T>;
}
}

declare module "packages/xaero/common/interfaces/render/$InterfaceRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InterfaceRenderer$$Type = ($InterfaceRenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InterfaceRenderer_ = $InterfaceRenderer$$Type;
}
}

declare module "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ISyncedPlayerTrackerSystem$$Type = ($ISyncedPlayerTrackerSystem);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$$Type;
}
}

declare module "packages/xaero/common/minimap/$MinimapInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapInterface$$Type = ($MinimapInterface);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapInterface_ = $MinimapInterface$$Type;
}
}

declare module "packages/xaero/common/minimap/highlight/$HighlighterRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HighlighterRegistry$$Type = ($HighlighterRegistry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$$Type;
}
}

declare module "packages/xaero/common/minimap/$MinimapProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapProcessor$$Type = ($MinimapProcessor);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapProcessor_ = $MinimapProcessor$$Type;
}
}

declare module "packages/xaero/common/server/mods/$SupportServerMods" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportServerMods$$Type = ($SupportServerMods);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportServerMods_ = $SupportServerMods$$Type;
}
}

declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile" {
import { $MinimapProcessor } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $XaeroMinimapSession } from "packages/xaero/common/$XaeroMinimapSession"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $InfoDisplay } from "packages/xaero/common/minimap/info/$InfoDisplay"
import { $InfoDisplayCompiler } from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayOnCompile$$Type<T> = ($InfoDisplayOnCompile<T> | ((arg0: $InfoDisplay<T>, arg1: $InfoDisplayCompiler, arg2: $XaeroMinimapSession, arg3: $MinimapProcessor, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: double, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: $BlockPos) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayOnCompile_<T> = $InfoDisplayOnCompile$$Type<T>;
}
}

declare module "packages/xaero/common/events/$ModClientEvents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ModClientEvents$$Type = ($ModClientEvents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ModClientEvents_ = $ModClientEvents$$Type;
}
}

declare module "packages/xaero/common/mods/$SupportFramedBlocks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportFramedBlocks$$Type = ($SupportFramedBlocks);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportFramedBlocks_ = $SupportFramedBlocks$$Type;
}
}

declare module "packages/xaero/common/minimap/region/$MinimapTile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapTile$$Type = ($MinimapTile);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapTile_ = $MinimapTile$$Type;
}
}

declare module "packages/xaero/common/config/$CommonConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommonConfig$$Type = ($CommonConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommonConfig_ = $CommonConfig$$Type;
}
}

declare module "packages/xaero/common/config/$CommonConfigIO" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommonConfigIO$$Type = ($CommonConfigIO);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommonConfigIO_ = $CommonConfigIO$$Type;
}
}

declare module "packages/xaero/common/gui/$MyOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MyOptions$$Type = ($MyOptions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MyOptions_ = $MyOptions$$Type;
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapElementRendererHandler$$Type = ($MinimapElementRendererHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapElementRendererHandler_ = $MinimapElementRendererHandler$$Type;
}
}

declare module "packages/xaero/common/graphics/$CustomVertexConsumers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomVertexConsumers$$Type = ($CustomVertexConsumers);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$$Type;
}
}

declare module "packages/xaero/common/minimap/highlight/$AbstractHighlighter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AbstractHighlighter$$Type = ($AbstractHighlighter);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$$Type;
}
}

declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayCompiler$$Type = ($InfoDisplayCompiler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayCompiler_ = $InfoDisplayCompiler$$Type;
}
}

declare module "packages/xaero/common/core/$IAbstractSelectionList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IAbstractSelectionList$$Type = ($IAbstractSelectionList | (() => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IAbstractSelectionList_ = $IAbstractSelectionList$$Type;
}
}

declare module "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $ModSettings } from "packages/xaero/common/settings/$ModSettings"
import { $InfoDisplay } from "packages/xaero/common/minimap/info/$InfoDisplay"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $InfoDisplayWidgetFactory$$Type<T> = ($InfoDisplayWidgetFactory<T> | ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $InfoDisplay<T>, arg5: $ModSettings) => $AbstractWidget$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $InfoDisplayWidgetFactory_<T> = $InfoDisplayWidgetFactory$$Type<T>;
}
}

declare module "packages/xaero/common/message/$MinimapMessageHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapMessageHandler$$Type = ($MinimapMessageHandler);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapMessageHandler_ = $MinimapMessageHandler$$Type;
}
}

declare module "packages/xaero/common/mods/$SupportMods" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportMods$$Type = ($SupportMods);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportMods_ = $SupportMods$$Type;
}
}

declare module "packages/xaero/common/minimap/write/$MinimapWriterHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapWriterHelper$$Type = ($MinimapWriterHelper);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapWriterHelper_ = $MinimapWriterHelper$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointWorldRootContainer$$Type = ($WaypointWorldRootContainer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointWorldRootContainer_ = $WaypointWorldRootContainer$$Type;
}
}

declare module "packages/xaero/common/graphics/$CustomRenderTypes$EntityIconLayerPhases" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CustomRenderTypes$EntityIconLayerPhases$$Type = ($CustomRenderTypes$EntityIconLayerPhases);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CustomRenderTypes$EntityIconLayerPhases_ = $CustomRenderTypes$EntityIconLayerPhases$$Type;
}
}

declare module "packages/xaero/common/minimap/render/$MinimapFBORenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MinimapFBORenderer$$Type = ($MinimapFBORenderer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MinimapFBORenderer_ = $MinimapFBORenderer$$Type;
}
}

declare module "packages/xaero/common/message/server/$ServerMessageConsumer" {
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $MinimapMessage, $MinimapMessage$$Type } from "packages/xaero/common/message/$MinimapMessage"
import { $MinecraftServer } from "packages/net/minecraft/server/$MinecraftServer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ServerMessageConsumer$$Type<T extends $MinimapMessage<T>> = ($ServerMessageConsumer<T> | ((arg0: $MinecraftServer, arg1: $ServerPlayer, arg2: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ServerMessageConsumer_<T extends $MinimapMessage<T>> = $ServerMessageConsumer$$Type<T>;
}
}

declare module "packages/xaero/common/message/client/$ClientMessageConsumer" {
import { $MinimapMessage, $MinimapMessage$$Type } from "packages/xaero/common/message/$MinimapMessage"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClientMessageConsumer$$Type<T extends $MinimapMessage<T>> = ($ClientMessageConsumer<T> | ((arg0: T) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClientMessageConsumer_<T extends $MinimapMessage<T>> = $ClientMessageConsumer$$Type<T>;
}
}

declare module "packages/xaero/common/server/level/$LevelMapProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LevelMapProperties$$Type = ($LevelMapProperties);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$$Type;
}
}

declare module "packages/xaero/common/mods/$SupportIris" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SupportIris$$Type = ($SupportIris);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SupportIris_ = $SupportIris$$Type;
}
}

declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MultiTextureRenderTypeRendererProvider$$Type = ($MultiTextureRenderTypeRendererProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$$Type;
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WaypointReader$$Type = ($WaypointReader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WaypointReader_ = $WaypointReader$$Type;
}
}

declare module "packages/xaero/common/server/player/$IServerPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $IServerPlayer$$Type = ($IServerPlayer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $IServerPlayer_ = $IServerPlayer$$Type;
}
}

