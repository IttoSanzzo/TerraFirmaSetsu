declare module "packages/xaero/common/settings/$Option" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ModOptions$$Type } from "packages/xaero/common/settings/$ModOptions"

export class $Option {
constructor(modOptions0: $ModOptions$$Type)

public "createButton"(int0: integer, int1: integer, int2: integer): $AbstractWidget
public "getCaption"(): $Component
public "handler$cmd000$constructorInject"(option: $ModOptions$$Type, ci: $CallbackInfo$$Type): void
get "caption"(): $Component
}
}

declare module "packages/xaero/common/gui/dropdown/$DropDownWidget" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $DropDownWidget extends $AbstractWidget {
static readonly "DEFAULT_BACKGROUND": integer
static readonly "LINE_HEIGHT": integer
static readonly "SELECTED_DEFAULT_BACKGROUND": integer
static readonly "SELECTED_DEFAULT_HOVERED_BACKGROUND": integer
static readonly "TRIM": integer
static readonly "TRIM_INSIDE": integer
static readonly "TRIM_OPEN": integer

public "getCurrentFocusPath"(): $ComponentPath
public "getRenderY"(): integer
public "getRenderYWithOffset"(): integer
public "getSelected"(): integer
public "getXWithOffset"(): integer
public "isClosed"(): boolean
public "m_168797_"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "m_87963_"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "mouseClicked"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "mouseReleased"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "mouseScrolled"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "onDropDown"(int0: integer, int1: integer, int2: integer): boolean
public "onDropDown"(int0: integer, int1: integer, boolean2: boolean, int3: integer): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "selectId"(int0: integer, boolean1: boolean): void
public "setActive"(boolean0: boolean): void
public "setClosed"(boolean0: boolean): void
public "setPosition"(int0: integer, int1: integer): void
public "size"(): integer
get "currentFocusPath"(): $ComponentPath
get "renderY"(): integer
get "renderYWithOffset"(): integer
get "selected"(): integer
get "xWithOffset"(): integer
get "closed"(): boolean
set "active"(value: boolean)
set "closed"(value: boolean)
}
}

declare module "packages/xaero/common/minimap/radar/$MinimapRadarList" {
import { $RadarList } from "packages/xaero/hud/minimap/radar/state/$RadarList"

/** @deprecated */
export class $MinimapRadarList extends $RadarList {
/** @deprecated */
constructor()

}
}

declare module "packages/xaero/common/gui/widget/render/$WidgetRenderer" {
import { $Widget, $Widget$$Type } from "packages/xaero/common/gui/widget/$Widget"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $WidgetRenderer<T extends $Widget> {
"render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, double5: double, t6: T): void
}

export namespace $WidgetRenderer {
const probejs$$marker: never
}
export abstract class $WidgetRenderer$$Static<T extends $Widget> implements $WidgetRenderer<T> {
}
}

declare module "packages/xaero/common/interfaces/$InterfaceManager" {
import { $MinimapInterface } from "packages/xaero/common/minimap/$MinimapInterface"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

/** @deprecated */
export class $InterfaceManager {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

/** @deprecated */
public "getMinimapInterface"(): $MinimapInterface
get "minimapInterface"(): $MinimapInterface
}
}

declare module "packages/xaero/common/icon/$XaeroIconAtlas" {
import { $XaeroIcon } from "packages/xaero/common/icon/$XaeroIcon"

export class $XaeroIconAtlas {
public "createIcon"(): $XaeroIcon
public "getCurrentIndex"(): integer
public "getTextureId"(): integer
public "getWidth"(): integer
public "isFull"(): boolean
get "currentIndex"(): integer
get "textureId"(): integer
get "width"(): integer
get "full"(): boolean
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $WaypointSharingHandler as $WaypointSharingHandler$0 } from "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $WaypointWorld$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/** @deprecated */
export class $WaypointSharingHandler extends $WaypointSharingHandler$0 {
static readonly "WAYPOINT_ADD_PREFIX": string
static readonly "WAYPOINT_OLD_SHARE_PREFIX": string
static readonly "WAYPOINT_SHARE_PREFIX": string

constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type)

/** @deprecated */
public "shareWaypoint"(screen0: $Screen$$Type, waypoint1: $Waypoint$$Type, waypointWorld2: $WaypointWorld$$Type): void
}
}

declare module "packages/xaero/common/gui/widget/$WidgetLoadingHandler" {
import { $WidgetScreenHandler$$Type } from "packages/xaero/common/gui/widget/$WidgetScreenHandler"

export class $WidgetLoadingHandler {
constructor(widgetScreenHandler0: $WidgetScreenHandler$$Type)

public "loadWidget"(serialized: string): void
}
}

declare module "packages/xaero/common/gui/dropdown/$IDropDownContainer" {
import { $DropDownWidget$$Type } from "packages/xaero/common/gui/dropdown/$DropDownWidget"

export interface $IDropDownContainer {
"onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
"onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
}

export namespace $IDropDownContainer {
const probejs$$marker: never
}
export abstract class $IDropDownContainer$$Static implements $IDropDownContainer {
}
}

declare module "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem" {
import { $IRenderedPlayerTracker } from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import { $ITrackedPlayerReader } from "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader"
import { $Iterator } from "packages/java/util/$Iterator"

/** @deprecated */
export interface $IPlayerTrackerSystem<P> extends $IRenderedPlayerTracker<P> {
"getReader"(): $ITrackedPlayerReader<P>
"getTrackedPlayerIterator"(): $Iterator<P>
get "reader"(): $ITrackedPlayerReader<P>
get "trackedPlayerIterator"(): $Iterator<P>
}

export namespace $IPlayerTrackerSystem {
const probejs$$marker: never
}
export abstract class $IPlayerTrackerSystem$$Static<P> implements $IPlayerTrackerSystem<P> {
}
}

declare module "packages/xaero/common/validator/$NumericFieldValidator" {
import { $EditBox$$Type } from "packages/net/minecraft/client/gui/components/$EditBox"

export class $NumericFieldValidator {
constructor()

public "validate"(editBox0: $EditBox$$Type): void
}
}

declare module "packages/xaero/common/server/$IMinecraftServer" {
import { $MinecraftServerData, $MinecraftServerData$$Type } from "packages/xaero/common/server/$MinecraftServerData"

export interface $IMinecraftServer {
"getXaeroMinimapServerData"(): $MinecraftServerData
"setXaeroMinimapServerData"(minecraftServerData0: $MinecraftServerData$$Type): void
get "xaeroMinimapServerData"(): $MinecraftServerData
set "xaeroMinimapServerData"(value: $MinecraftServerData$$Type)
}

export namespace $IMinecraftServer {
const probejs$$marker: never
}
export abstract class $IMinecraftServer$$Static implements $IMinecraftServer {
}
}

declare module "packages/xaero/common/gui/widget/$ClickAction" {
import { $Enum } from "packages/java/lang/$Enum"
import { $WidgetClickHandler } from "packages/xaero/common/gui/widget/$WidgetClickHandler"

export class $ClickAction extends $Enum<$ClickAction> {
static readonly "NOTHING": $ClickAction
static readonly "URL": $ClickAction
readonly "clickHandler": $WidgetClickHandler

public static "valueOf"(string0: string): $ClickAction
public static "values"(): $ClickAction[]
}
}

declare module "packages/xaero/common/icon/$XaeroIcon" {
import { $XaeroIconAtlas, $XaeroIconAtlas$$Type } from "packages/xaero/common/icon/$XaeroIconAtlas"

export class $XaeroIcon {
constructor(xaeroIconAtlas0: $XaeroIconAtlas$$Type, int1: integer, int2: integer)

public "getOffsetX"(): integer
public "getOffsetY"(): integer
public "getTextureAtlas"(): $XaeroIconAtlas
get "offsetX"(): integer
get "offsetY"(): integer
get "textureAtlas"(): $XaeroIconAtlas
}
}

declare module "packages/xaero/common/server/player/$ServerPlayerData" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $SyncedTrackedPlayer } from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"

export class $ServerPlayerData {
constructor(uUID0: $UUID$$Type)

public "ensureCurrentlySyncedPlayers"(): $Set<$UUID>
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public static "get"(serverPlayer0: $ServerPlayer$$Type): $ServerPlayerData
public "getClientModNetworkVersion"(): integer
public "getCurrentlySyncedPlayers"(): $Set<$UUID>
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "getLastTrackedPlayerSync"(): long
public "getOpacData"(): any
public "hasMod"(): boolean
public "setClientModNetworkVersion"(int0: integer): void
public "setLastTrackedPlayerSync"(long0: long): void
public "setOpacData"(object0: any): void
get "clientModNetworkVersion"(): integer
get "currentlySyncedPlayers"(): $Set<$UUID>
get "lastSyncedData"(): $SyncedTrackedPlayer
get "lastTrackedPlayerSync"(): long
get "opacData"(): any
set "clientModNetworkVersion"(value: integer)
set "lastTrackedPlayerSync"(value: long)
set "opacData"(value: any)
}
}

declare module "packages/xaero/common/gui/$ICanTooltip" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export interface $ICanTooltip {
"getXaero_tooltip"(): $Supplier<$CursorBox>
get "xaero_tooltip"(): $Supplier<$CursorBox>
}

export namespace $ICanTooltip {
const probejs$$marker: never
}
export abstract class $ICanTooltip$$Static implements $ICanTooltip {
}
}

declare module "packages/xaero/common/cache/$BlockStateShortShapeCache" {
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BlockStateShortShapeCache {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "isShort"(blockState0: $BlockState$$Type): boolean
public "reset"(): void
}
}

declare module "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims" {
import { $HighlighterRegistry$$Type } from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $IPlayerChunkClaimAPI } from "packages/xaero/pac/common/claims/player/api/$IPlayerChunkClaimAPI"
import { $IPartyMemberDynamicInfoSyncableAPI } from "packages/xaero/pac/common/parties/party/api/$IPartyMemberDynamicInfoSyncableAPI"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $IXaeroMinimap, $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterator } from "packages/java/util/$Iterator"

export class $SupportOpenPartiesAndClaims {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "claimAt"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer): $IPlayerChunkClaimAPI
public "getAllyIterator"(): $Iterator<$IPartyMemberDynamicInfoSyncableAPI>
public "getModMain"(): $IXaeroMinimap
public "isFromParty"(uUID0: $UUID$$Type): boolean
public "onMapRender"(minecraft0: $Minecraft$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer, float4: float, resourceLocation5: $ResourceLocation$$Type, int6: integer, int7: integer): void
public "register"(): void
public "registerHighlighters"(highlighterRegistry0: $HighlighterRegistry$$Type): void
get "allyIterator"(): $Iterator<$IPartyMemberDynamicInfoSyncableAPI>
get "modMain"(): $IXaeroMinimap
}
}

declare module "packages/xaero/common/minimap/mcworld/$IXaeroMinimapClientWorld" {
import { $MinimapClientWorldData, $MinimapClientWorldData$$Type } from "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData"

export interface $IXaeroMinimapClientWorld {
"getXaero_minimapData"(): $MinimapClientWorldData
"setXaero_minimapData"(minimapClientWorldData0: $MinimapClientWorldData$$Type): void
get "xaero_minimapData"(): $MinimapClientWorldData
set "xaero_minimapData"(value: $MinimapClientWorldData$$Type)
}

export namespace $IXaeroMinimapClientWorld {
const probejs$$marker: never
}
export abstract class $IXaeroMinimapClientWorld$$Static implements $IXaeroMinimapClientWorld {
}
}

declare module "packages/xaero/common/gui/widget/$WidgetScreen" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $WidgetScreen {
"addButtonVisible"(abstractWidget0: $AbstractWidget$$Type): void
"getScreen"<S extends ($Screen & $WidgetScreen)>(): S
get "screen"(): S
}

export namespace $WidgetScreen {
const probejs$$marker: never
}
export abstract class $WidgetScreen$$Static implements $WidgetScreen {
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $ServerPlayerData$$Type } from "packages/xaero/common/server/player/$ServerPlayerData"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $MinecraftServerData$$Type } from "packages/xaero/common/server/$MinecraftServerData"

export class $SyncedPlayerTracker {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "onTick"(minecraftServer0: $MinecraftServer$$Type, serverPlayer1: $ServerPlayer$$Type, minecraftServerData2: $MinecraftServerData$$Type, serverPlayerData3: $ServerPlayerData$$Type): void
}
}

declare module "packages/xaero/common/controls/$ControlsHandler" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $HudSession$$Type } from "packages/xaero/hud/$HudSession"

/** @deprecated */
export class $ControlsHandler {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, hudSession1: $HudSession$$Type)

/** @deprecated */
public "isDown"(keyMapping0: $KeyMapping$$Type): boolean
/** @deprecated */
public "keyDown"(keyMapping0: $KeyMapping$$Type, boolean1: boolean, boolean2: boolean): void
/** @deprecated */
public "keyUp"(keyMapping0: $KeyMapping$$Type, boolean1: boolean): void
/** @deprecated */
public "setKeyState"(keyMapping0: $KeyMapping$$Type, boolean1: boolean): void
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext" {
import { $WaypointMapRenderContext } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

/** @deprecated */
export class $WaypointGuiRenderContext extends $WaypointMapRenderContext {
constructor()

}
}

declare module "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager" {
import { $IPlayerTrackerSystem, $IPlayerTrackerSystem$$Type } from "packages/xaero/common/minimap/radar/tracker/system/$IPlayerTrackerSystem"
import { $RenderedPlayerTrackerManager } from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import { $Iterable } from "packages/java/lang/$Iterable"

/** @deprecated */
export class $PlayerTrackerSystemManager extends $RenderedPlayerTrackerManager {
constructor()

/** @deprecated */
public "getSystems"(): $Iterable<$IPlayerTrackerSystem<any>>
/** @deprecated */
public "register"(string0: string, iPlayerTrackerSystem1: $IPlayerTrackerSystem$$Type<any>): void
get "systems"(): $Iterable<$IPlayerTrackerSystem<any>>
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $Tesselator$$Type } from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Vector4f$$Type } from "packages/org/joml/$Vector4f"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $WaypointWorldRenderProvider$$Type } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderProvider"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $MinimapElementReader$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $WaypointWorldRenderer } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $BufferBuilder$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $WaypointWorldRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

/** @deprecated */
export class $WaypointsIngameRenderer extends $WaypointWorldRenderer {
constructor(minimapElementReader0: $MinimapElementReader$$Type<$Waypoint$$Type, $WaypointWorldRenderContext$$Type>, waypointWorldRenderProvider1: $WaypointWorldRenderProvider$$Type, waypointWorldRenderContext2: $WaypointWorldRenderContext$$Type, vector4f3: $Vector4f$$Type)

/** @deprecated */
public "drawAsOverlay"(poseStack0: $PoseStack$$Type, poseStack1: $PoseStack$$Type, minimapRendererHelper2: $MinimapRendererHelper$$Type, waypoint3: $Waypoint$$Type, modSettings4: $ModSettings$$Type, bufferBuilder5: $BufferBuilder$$Type, tesselator6: $Tesselator$$Type, font7: $Font$$Type, string8: string, string9: string, float10: float, boolean11: boolean, bufferSource12: $MultiBufferSource$BufferSource$$Type, vertexConsumer13: $VertexConsumer$$Type, matrix4f14: $Matrix4f$$Type, int15: integer, int16: integer, double17: double, double18: double, boolean19: boolean, string20: string): void
/** @deprecated */
public "drawIconInWorld"(poseStack0: $PoseStack$$Type, minimapRendererHelper1: $MinimapRendererHelper$$Type, waypoint2: $Waypoint$$Type, modSettings3: $ModSettings$$Type, bufferBuilder4: $BufferBuilder$$Type, tesselator5: $Tesselator$$Type, font6: $Font$$Type, string7: string, string8: string, float9: float, boolean10: boolean, bufferSource11: $MultiBufferSource$BufferSource$$Type, vertexConsumer12: $VertexConsumer$$Type, boolean13: boolean, string14: string): void
/** @deprecated */
public "render"(minimapSession0: $MinimapSession$$Type, float1: float, minimapProcessor2: $MinimapProcessor$$Type, matrix4f3: $Matrix4f$$Type, matrix4f4: $Matrix4f$$Type): void
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementReader" {
import { $MinimapElementReader as $MinimapElementReader$0 } from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"

/** @deprecated */
export class $MinimapElementReader<E, RC> extends $MinimapElementReader$0<E, RC> {
constructor()

/** @deprecated */
public "getBoxScale"(int0: integer, e1: E, rc2: RC): float
/** @deprecated */
public "isInteractable"(int0: integer, e1: E): boolean
}
}

declare module "packages/xaero/common/server/mods/opac/$SupportOPACServer" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $ServerPlayerData$$Type } from "packages/xaero/common/server/player/$ServerPlayerData"

export class $SupportOPACServer {
constructor()

public "getReceiveLocationsFromMutualAlliesConfigValue"(serverPlayer0: $ServerPlayer$$Type): boolean
public "getReceiveLocationsFromPartyConfigValue"(serverPlayer0: $ServerPlayer$$Type): boolean
public "isPositionSyncAllowed"(int0: integer, serverPlayerData1: $ServerPlayerData$$Type, boolean2: boolean): boolean
public "updateShareLocationConfigValues"(serverPlayer0: $ServerPlayer$$Type, serverPlayerData1: $ServerPlayerData$$Type): void
}
}

declare module "packages/xaero/common/message/basic/$ClientboundRulesPacket" {
import { $MinimapMessage } from "packages/xaero/common/message/$MinimapMessage"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClientboundRulesPacket extends $MinimapMessage<$ClientboundRulesPacket> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
readonly "allowRadarOnServer": boolean

constructor(boolean0: boolean, boolean1: boolean, boolean2: boolean)

public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $ClientboundRulesPacket
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "packages/xaero/common/settings/$ModOptions" {
import { $Option } from "packages/xaero/common/settings/$Option"
import { $IXaeroMinimap, $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $AccessorMinimapModOptions } from "packages/xaeroplus/mixin/client/$AccessorMinimapModOptions"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export class $ModOptions implements $AccessorMinimapModOptions {
static "AA": $ModOptions
static "ADJUST_HEIGHT_FOR_SHORT_BLOCKS": $ModOptions
static "ALWAYS_SHOW_DISTANCE": $ModOptions
static "ARCHERY": $ModOptions
static "ARMOUR_MAIN_HAND": $ModOptions
static "ARMOUR_OFF_HAND": $ModOptions
static "ARROW_COLOUR": $ModOptions
static "ARROW_SCALE": $ModOptions
static "AUTO_CONVERT_TO_KM": $ModOptions
static "BETTER_SPRINT": $ModOptions
static "BIOMES_VANILLA": $ModOptions
static "BIOME_BLENDING": $ModOptions
static "BLOCK_TRANSPARENCY": $ModOptions
static "BOSS_HEALTH_PUSHBOX": $ModOptions
static "CAVE_MAPS": $ModOptions
static "CAVE_MAPS_DEPTH": $ModOptions
static "CAVE_MODE_TOGGLE_TIMER": $ModOptions
static "CAVE_ZOOM": $ModOptions
static "CENTERED_ENLARGED": $ModOptions
static "CHUNK_GRID": $ModOptions
static "CHUNK_GRID_LINE_WIDTH": $ModOptions
static "COLOURS": $ModOptions
static "COMPASS": $ModOptions
static "COMPASS_COLOR": $ModOptions
static "COMPASS_LOCATION": $ModOptions
static "COMPASS_SCALE": $ModOptions
static "CROSS_DIMENSIONAL_TP": $ModOptions
static "DEATHPOINTS": $ModOptions
static "DEFAULT": $ModOptions
static "DELETE_REACHED_DEATHPOINTS": $ModOptions
static "DISPLAY_OTHER_TEAM": $ModOptions
static "DISPLAY_STAINED_GLASS": $ModOptions
static "DISTANCE": $ModOptions
static "DOTS_SIZE": $ModOptions
static "DOTS_STYLE": $ModOptions
static "DOT_NAME_SCALE": $ModOptions
static "DURABILITY": $ModOptions
static "EAMOUNT": $ModOptions
static "ENCHANT_COLOR": $ModOptions
static "ENTITY_HEIGHT": $ModOptions
static "ENTITY_INFO": $ModOptions
static "ENTITY_INFO_ARMOUR": $ModOptions
static "ENTITY_INFO_ARMOUR_NUMBERS": $ModOptions
static "ENTITY_INFO_DISTANCE": $ModOptions
static "ENTITY_INFO_EFFECTS": $ModOptions
static "ENTITY_INFO_EFFECTS_SCALE": $ModOptions
static "ENTITY_INFO_MAX_HEARTS": $ModOptions
static "ENTITY_INFO_NUMBERS": $ModOptions
static "ENTITY_INFO_STAY": $ModOptions
static "ENTITY_NAMETAGS": $ModOptions
static "FLOWERS": $ModOptions
static "HEADS_SCALE": $ModOptions
static "HEIGHT_LIMIT": $ModOptions
static "HELD_ITEMS_CENTERED_POSITION": $ModOptions
static "HIDE_MINIMAP_UNDER_F3": $ModOptions
static "HIDE_MINIMAP_UNDER_SCREEN": $ModOptions
static "HIDE_WORLD_NAMES": $ModOptions
static "HIDE_WP_COORDS": $ModOptions
static "ICON_NAME_FALLBACK": $ModOptions
static "IGNORE_HEIGHTMAPS": $ModOptions
static "INFO_DISPLAY_BG_OPACITY": $ModOptions
static "INGAME_WAYPOINTS": $ModOptions
static "ITEM_TOOLTIP": $ModOptions
static "ITEM_TOOLTIP_MIN_LINES": $ModOptions
static "ITEM_TOOLTIP_TIME": $ModOptions
static "KEEP_ENLARGED_UNLOCKED": $ModOptions
static "KEEP_SNEAK": $ModOptions
static "KEEP_WP_NAMES": $ModOptions
static "LEGIBLE_CAVE_MAPS": $ModOptions
static "LIGHT": $ModOptions
static "LIGHT_OVERLAY_COLOR": $ModOptions
static "LIGHT_OVERLAY_MAX_LIGHT": $ModOptions
static "LIGHT_OVERLAY_MIN_LIGHT": $ModOptions
static "LIGHT_OVERLAY_TYPE": $ModOptions
static "MAIN_DOT_SIZE": $ModOptions
static "MAIN_ENTITY_AS": $ModOptions
static "MANUAL_CAVE_MODE_START": $ModOptions
static "MINIMAP": $ModOptions
static "MINIMAP_FRAME": $ModOptions
static "MINIMAP_FRAME_COLOR": $ModOptions
static "MINIMAP_SHAPE": $ModOptions
static "MINIMAP_TEXT_ALIGN": $ModOptions
static "MULTIPLE_WAYPOINT_INFO": $ModOptions
static "NORTH": $ModOptions
static "NORTH_COMPASS_COLOR": $ModOptions
static "NOTIFICATIONS": $ModOptions
static "NOTIFICATIONS_AIR": $ModOptions
static "NOTIFICATIONS_AIR_LOW": $ModOptions
static "NOTIFICATIONS_ARROW": $ModOptions
static "NOTIFICATIONS_HP": $ModOptions
static "NOTIFICATIONS_HP_LOW": $ModOptions
static "NOTIFICATIONS_HUNGER": $ModOptions
static "NOTIFICATIONS_HUNGER_LOW": $ModOptions
static "NOTIFICATIONS_TNT": $ModOptions
static "NUMBERS": $ModOptions
static "OLD_DEATHPOINTS": $ModOptions
static "OPACITY": $ModOptions
static "OPEN_SLIME_SETTINGS": $ModOptions
static "PAC_CLAIMS": $ModOptions
static "PAC_CLAIMS_BORDER_OPACITY": $ModOptions
static "PAC_CLAIMS_FILL_OPACITY": $ModOptions
static "PAC_CURRENT_CLAIM": $ModOptions
static "PARTIAL_Y_TELEPORTATION": $ModOptions
static "PLAYER_ARROW_OPACITY": $ModOptions
static "POTION_EFFECTS_BLINK": $ModOptions
static "POTION_EFFECTS_PUSHBOX": $ModOptions
static "POTION_NAMES": $ModOptions
static "RADAR_DISPLAYED": $ModOptions
static "RADAR_ICONS_DISPLAYED": $ModOptions
static "RADAR_NAMES_DISPLAYED": $ModOptions
static "RADAR_OVER_FRAME": $ModOptions
static "RADAR_Y_DISPLAYED": $ModOptions
static "REDSTONE": $ModOptions
static "REQUIRES_INGAME": $CursorBox
static "SAFE_MAP": $ModOptions
static "SCALED_MAX_WAYPOINT_DISTANCE": $ModOptions
static "SHOW_ARMOR": $ModOptions
static "SHOW_EFFECTS": $ModOptions
static "SHOW_ENCHANTS": $ModOptions
static "SHOW_ENTITY_MODEL": $ModOptions
static "SHOW_FULL_AMOUNT": $ModOptions
static "SIZE": $ModOptions
static "SLIME_CHUNKS": $ModOptions
static "SMOOTH_DOTS": $ModOptions
static "START_FADING_AT": $ModOptions
static "SWITCH_TO_AUTO_ON_DEATH": $ModOptions
static "TEMPORARY_WAYPOINTS_GLOBAL": $ModOptions
static "TERRAIN_DEPTH": $ModOptions
static "TERRAIN_SLOPES": $ModOptions
static "TOGGLED_ENLARGED": $ModOptions
static "TRACKED_PLAYERS_IN_WORLD": $ModOptions
static "TRACKED_PLAYERS_ON_MAP": $ModOptions
static "TRACKED_PLAYER_MINIMAP_ICON_SCALE": $ModOptions
static "TRACKED_PLAYER_WORLD_ICON_SCALE": $ModOptions
static "TRACKED_PLAYER_WORLD_NAME_SCALE": $ModOptions
static "UI_SCALE": $ModOptions
static "UPDATE_NOTIFICATION": $ModOptions
static "WAYPOINTS": $ModOptions
static "WAYPOINTS_ALL_SETS": $ModOptions
static "WAYPOINTS_BOTTOM": $ModOptions
static "WAYPOINTS_CLOSE_SCALE": $ModOptions
static "WAYPOINTS_DISTANCE": $ModOptions
static "WAYPOINTS_DISTANCE_MIN": $ModOptions
static "WAYPOINTS_DISTANCE_SCALE": $ModOptions
static "WAYPOINTS_ICON_SCALE": $ModOptions
static "WAYPOINTS_NAME_SCALE": $ModOptions
static "WAYPOINT_LOOKING_ANGLE": $ModOptions
static "WAYPOINT_ONMAP_SCALE": $ModOptions
static "WAYPOINT_OPACITY_INGAME": $ModOptions
static "WAYPOINT_OPACITY_MAP": $ModOptions
static "WAYPOINT_VERTICAL_LOOKING_ANGLE": $ModOptions
static "WORLD_MAP": $ModOptions
static "WP_DISTANCE_PRECISION": $ModOptions
static "XP": $ModOptions
static "ZOOM": $ModOptions
static "ZOOM_ON_ENLARGE": $ModOptions
readonly "enumBoolean": boolean
static "modMain": $IXaeroMinimap

public "denormalizeValue"(double0: double): double
public "getEnumBoolean"(): boolean
public "getEnumDouble"(): boolean
public "getEnumString"(): string
public "getEnumStringRaw"(): string
public "getTooltip"(): $CursorBox
public "getValueMax"(): double
public "getValueMin"(): double
public "getValueStep"(): double
public "getXOption"(): $Option
public static "init"(iXaeroMinimap0: $IXaeroMinimap$$Type): void
public "isIngameOnly"(): boolean
public "normalizeValue"(double0: double): double
public "setValueMax"(float0: float): void
public "snapToStepClamp"(double0: double): double
get "enumDouble"(): boolean
get "enumString"(): string
get "enumStringRaw"(): string
get "tooltip"(): $CursorBox
get "valueMax"(): double
get "valueMin"(): double
get "valueStep"(): double
get "xOption"(): $Option
get "ingameOnly"(): boolean
set "valueMax"(value: float)
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorld" {
import { $WaypointWorldContainer, $WaypointWorldContainer$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapWorld } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $HashMap } from "packages/java/util/$HashMap"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $WaypointSet } from "packages/xaero/common/minimap/waypoints/$WaypointSet"

/** @deprecated */
export class $WaypointWorld extends $MinimapWorld {
/** @deprecated */
constructor(waypointWorldContainer0: $WaypointWorldContainer$$Type, string1: string, resourceKey2: $ResourceKey$$Type<$Level>)

/** @deprecated */
public "addSet"(string0: string): void
/** @deprecated */
public "getContainer"(): $WaypointWorldContainer
/** @deprecated */
public "getCurrent"(): string
/** @deprecated */
public "getCurrentSet"(): $WaypointSet
/** @deprecated */
public "getFullId"(): string
/** @deprecated */
public "getId"(): string
/** @deprecated */
public "getInternalWorldKey"(): string
/** @deprecated */
public "getServerWaypoints"(): $HashMap<integer, $Waypoint>
/** @deprecated */
public "getServerWaypointsDisabled"(): $HashMap<string, boolean>
/** @deprecated */
public "getSets"(): $HashMap<string, $WaypointSet>
/** @deprecated */
public "setContainer"(waypointWorldContainer0: $WaypointWorldContainer$$Type): void
/** @deprecated */
public "setCurrent"(string0: string): void
/** @deprecated */
public "setId"(string0: string): void
get "container"(): $WaypointWorldContainer
get "current"(): string
get "currentSet"(): $WaypointSet
get "fullId"(): string
get "id"(): string
get "internalWorldKey"(): string
get "serverWaypoints"(): $HashMap<integer, $Waypoint>
get "serverWaypointsDisabled"(): $HashMap<string, boolean>
get "sets"(): $HashMap<string, $WaypointSet>
set "container"(value: $WaypointWorldContainer$$Type)
set "current"(value: string)
set "id"(value: string)
}
}

declare module "packages/xaero/common/minimap/render/$MinimapRendererHelper" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapRendererHelper {
constructor()

public "addColoredLineToExistingBuffer"(pose0: $PoseStack$Pose$$Type, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float): void
public "addTexturedRectToExistingBuffer"(matrix4f0: $Matrix4f$$Type, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, int4: integer, int5: integer, int6: integer, int7: integer): void
public "defaultOrtho"(renderTarget0: $RenderTarget$$Type): void
public "drawIconOutline"(poseStack0: $PoseStack$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, float9: float): void
public "drawMyColoredRect"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float, float4: float, int5: integer): void
public "drawMyColoredRect"(poseStack0: $PoseStack$$Type, float1: float, float2: float, float3: float, float4: float): void
public "drawMyTexturedModalRect"(poseStack0: $PoseStack$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "drawMyTexturedModalRect"(poseStack0: $PoseStack$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, float9: float, boolean10: boolean): void
public "prepareMyTexturedColoredModalRect"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, int9: integer, float10: float, float11: float, float12: float, float13: float, multiTextureRenderTypeRenderer14: $MultiTextureRenderTypeRenderer$$Type): void
public "prepareMyTexturedModalRect"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, int9: integer, multiTextureRenderTypeRenderer10: $MultiTextureRenderTypeRenderer$$Type): void
public static "restoreDefaultShaderBlendState"(): void
}
}

declare module "packages/xaero/common/gui/widget/$WidgetClickHandler" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Widget$$Type } from "packages/xaero/common/gui/widget/$Widget"

export interface $WidgetClickHandler {
"onClick"(screen0: $Screen$$Type, widget1: $Widget$$Type): void
}

export namespace $WidgetClickHandler {
const probejs$$marker: never
}
export abstract class $WidgetClickHandler$$Static implements $WidgetClickHandler {
}
}

declare module "packages/xaero/common/$PlatformContextLoaderClientOnly" {
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderClientOnly {
constructor()

public "preInit"(string0: string, iXaeroMinimap1: $IXaeroMinimap$$Type): void
}
}

declare module "packages/xaero/common/gui/$IScreenBase" {
import { $IDropDownContainer } from "packages/xaero/common/gui/dropdown/$IDropDownContainer"
import { $DropDownWidget$$Type } from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IScreenBase extends $IDropDownContainer {
"getEscape"(): $Screen
"onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
"onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
"shouldSkipWorldRender"(): boolean
get "escape"(): $Screen
}

export namespace $IScreenBase {
const probejs$$marker: never
}
export abstract class $IScreenBase$$Static implements $IScreenBase {
}
}

declare module "packages/xaero/common/events/$CommonEvents" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $CommonEvents {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "handlePlayerTickStart"(player0: $Player$$Type): void
public "onPlayerLogIn"(player0: $Player$$Type): void
public "onPlayerWorldJoin"(serverPlayer0: $ServerPlayer$$Type): void
public "onServerStarting"(minecraftServer0: $MinecraftServer$$Type): void
public "onServerStopped"(minecraftServer0: $MinecraftServer$$Type): void
}
}

declare module "packages/xaero/common/message/$MinimapMessage" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MinimapMessage<T extends $MinimapMessage<T>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
}

declare module "packages/xaero/common/misc/$MapFactory" {
import { $Map } from "packages/java/util/$Map"

export interface $MapFactory {
"get"<K, V>(): $Map<K, V>
}

export namespace $MapFactory {
const probejs$$marker: never
}
export abstract class $MapFactory$$Static implements $MapFactory {
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapClientPlayNetHandler" {
import { $XaeroMinimapSession, $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"

export interface $IXaeroMinimapClientPlayNetHandler {
"getXaero_minimapSession"(): $XaeroMinimapSession
"setXaero_minimapSession"(xaeroMinimapSession0: $XaeroMinimapSession$$Type): void
get "xaero_minimapSession"(): $XaeroMinimapSession
set "xaero_minimapSession"(value: $XaeroMinimapSession$$Type)
}

export namespace $IXaeroMinimapClientPlayNetHandler {
const probejs$$marker: never
}
export abstract class $IXaeroMinimapClientPlayNetHandler$$Static implements $IXaeroMinimapClientPlayNetHandler {
}
}

declare module "packages/xaero/common/minimap/render/radar/element/$RadarRenderer" {
import { $RadarElementReader$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarElementReader"
import { $RadarRenderer as $RadarRenderer$0 } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import { $RadarRenderContext$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $RadarRenderProvider$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderProvider"
import { $RadarIconManager$$Type } from "packages/xaero/hud/minimap/radar/icon/$RadarIconManager"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $MinimapRadar$$Type } from "packages/xaero/common/minimap/radar/$MinimapRadar"

/** @deprecated */
export class $RadarRenderer extends $RadarRenderer$0 {
constructor(radarIconManager0: $RadarIconManager$$Type, minimap1: $Minimap$$Type, radarElementReader2: $RadarElementReader$$Type, radarRenderProvider3: $RadarRenderProvider$$Type, radarRenderContext4: $RadarRenderContext$$Type)

/** @deprecated */
public "renderElement"(int0: integer, boolean1: boolean, boolean2: boolean, guiGraphics3: $GuiGraphics$$Type, bufferSource4: $MultiBufferSource$BufferSource$$Type, font5: $Font$$Type, renderTarget6: $RenderTarget$$Type, minimapRendererHelper7: $MinimapRendererHelper$$Type, entity8: $Entity$$Type, player9: $Player$$Type, double10: double, double11: double, double12: double, int13: integer, double14: double, float15: float, entity16: $Entity$$Type, double17: double, double18: double, boolean19: boolean, float20: float): boolean
/** @deprecated */
public "renderEntityDotToFBO"(int0: integer, boolean1: boolean, guiGraphics2: $GuiGraphics$$Type, minimapProcessor3: $MinimapProcessor$$Type, player4: $Player$$Type, entity5: $Entity$$Type, entity6: $Entity$$Type, float7: float, boolean8: boolean, boolean9: boolean, minimapRadar10: $MinimapRadar$$Type, int11: integer, boolean12: boolean, boolean13: boolean, boolean14: boolean, boolean15: boolean, double16: double, bufferSource17: $MultiBufferSource$BufferSource$$Type, renderType18: $RenderType$$Type, vertexConsumer19: $VertexConsumer$$Type, multiTextureRenderTypeRenderer20: $MultiTextureRenderTypeRenderer$$Type, vertexConsumer21: $VertexConsumer$$Type, int22: integer, boolean23: boolean, int24: integer, boolean25: boolean, int26: integer, double27: double, int28: integer, int29: integer, int30: integer, entityRadarCategory31: $EntityRadarCategory$$Type, minimapRendererHelper32: $MinimapRendererHelper$$Type, font33: $Font$$Type, renderTarget34: $RenderTarget$$Type, float35: float): void
/** @deprecated */
public "renderEntityDotToFBO"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, boolean1: boolean, guiGraphics2: $GuiGraphics$$Type, minimapProcessor3: $MinimapProcessor$$Type, player4: $Player$$Type, entity5: $Entity$$Type, entity6: $Entity$$Type, float7: float, boolean8: boolean, boolean9: boolean, minimapRadar10: $MinimapRadar$$Type, int11: integer, boolean12: boolean, boolean13: boolean, boolean14: boolean, boolean15: boolean, double16: double, bufferSource17: $MultiBufferSource$BufferSource$$Type, renderType18: $RenderType$$Type, vertexConsumer19: $VertexConsumer$$Type, multiTextureRenderTypeRenderer20: $MultiTextureRenderTypeRenderer$$Type, vertexConsumer21: $VertexConsumer$$Type, int22: integer, boolean23: boolean, int24: integer, boolean25: boolean, int26: integer, double27: double, int28: integer, int29: integer, int30: integer, entityRadarCategory31: $EntityRadarCategory$$Type, minimapRendererHelper32: $MinimapRendererHelper$$Type, font33: $Font$$Type, renderTarget34: $RenderTarget$$Type, float35: float): void
}
}

declare module "packages/xaero/common/gui/$ISettingEntry" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $ISettingEntry {
"createWidget"(int0: integer, int1: integer, int2: integer, boolean3: boolean): $AbstractWidget
"getStringForSearch"(): string
get "stringForSearch"(): string
}

export namespace $ISettingEntry {
const probejs$$marker: never
}
export abstract class $ISettingEntry$$Static implements $ISettingEntry {
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager" {
import { $ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$$Type } from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $SyncedPlayerTrackerSystemManager {
constructor()

public "getSystems"(): $Iterable<$ISyncedPlayerTrackerSystem>
public "register"(string0: string, iSyncedPlayerTrackerSystem1: $ISyncedPlayerTrackerSystem$$Type): void
get "systems"(): $Iterable<$ISyncedPlayerTrackerSystem>
}
}

declare module "packages/xaero/common/$IXaeroMinimap" {
import { $FieldValidatorHolder } from "packages/xaero/common/validator/$FieldValidatorHolder"
import { $PlatformContext } from "packages/xaero/common/$PlatformContext"
import { $ClientEvents } from "packages/xaero/common/events/$ClientEvents"
import { $HudIO } from "packages/xaero/hud/io/$HudIO"
import { $InterfaceRenderer } from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import { $ClientEventsListener } from "packages/xaero/common/events/$ClientEventsListener"
import { $PlayerTrackerSystemManager } from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import { $WidgetScreenHandler } from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import { $HudRenderer } from "packages/xaero/hud/render/$HudRenderer"
import { $ServerPlayerTickHandler, $ServerPlayerTickHandler$$Type } from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import { $File } from "packages/java/io/$File"
import { $CommonEvents } from "packages/xaero/common/events/$CommonEvents"
import { $WidgetLoadingHandler } from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import { $EntityRadarCategoryManager } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import { $ModCommonEvents } from "packages/xaero/common/events/$ModCommonEvents"
import { $CommonConfigIO, $CommonConfigIO$$Type } from "packages/xaero/common/config/$CommonConfigIO"
import { $PatreonMod } from "packages/xaero/common/patreon/$PatreonMod"
import { $GuiHelper } from "packages/xaero/common/gui/$GuiHelper"
import { $ModSettings, $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $Path } from "packages/java/nio/file/$Path"
import { $RenderedPlayerTrackerManager } from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import { $ControlsRegister } from "packages/xaero/hud/controls/$ControlsRegister"
import { $MinimapMessageHandler } from "packages/xaero/common/message/$MinimapMessageHandler"
import { $SupportServerMods } from "packages/xaero/common/server/mods/$SupportServerMods"
import { $CommonConfig, $CommonConfig$$Type } from "packages/xaero/common/config/$CommonConfig"
import { $Hud } from "packages/xaero/hud/$Hud"
import { $ModClientEvents } from "packages/xaero/common/events/$ModClientEvents"
import { $Minimap } from "packages/xaero/hud/minimap/$Minimap"
import { $PlayerTrackerMinimapElementRenderer } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer"
import { $InterfaceManager } from "packages/xaero/common/interfaces/$InterfaceManager"
import { $XaeroMinimapSession } from "packages/xaero/common/$XaeroMinimapSession"
import { $SupportMods } from "packages/xaero/common/mods/$SupportMods"

export interface $IXaeroMinimap {
"createSession"(): $XaeroMinimapSession
"ensureControlsRegister"(): void
"getClientEventsListener"(): $ClientEventsListener
"getCommonConfig"(): $CommonConfig
"getCommonConfigIO"(): $CommonConfigIO
"getCommonEvents"(): $CommonEvents
"getConfigFile"(): $Path
"getControlsRegister"(): $ControlsRegister
"getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
"getEvents"(): $ClientEvents
"getFieldValidators"(): $FieldValidatorHolder
"getFileLayoutID"(): string
"getGuiHelper"(): $GuiHelper
"getHud"(): $Hud
"getHudIO"(): $HudIO
"getHudRenderer"(): $HudRenderer
"getInterfaceRenderer"(): $InterfaceRenderer
"getInterfaces"(): $InterfaceManager
"getLatestVersion"(): string
"getLatestVersionMD5"(): string
"getMessage"(): string
"getMessageHandler"(): $MinimapMessageHandler
"getMinimap"(): $Minimap
"getModClientEvents"(): $ModClientEvents
"getModCommonEvents"(): $ModCommonEvents
"getModEvents"(): $ModClientEvents
"getModId"(): string
"getModJAR"(): $File
"getNewestUpdateID"(): integer
"getPatreon"(): $PatreonMod
"getPlatformContext"(): $PlatformContext
"getPlayerTracker"(): $RenderedPlayerTrackerManager
/** @deprecated */
"getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
"getServerPlayerTickHandler"(): $ServerPlayerTickHandler
"getSettings"(): $ModSettings
"getSettingsKey"(): any
"getSupportMods"(): $SupportMods
"getSupportServerMods"(): $SupportServerMods
"getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
"getUpdateLink"(): string
"getVersionID"(): string
"getVersionsURL"(): string
"getWaypointsFile"(): $Path
"getWaypointsFolder"(): $Path
"getWidgetLoader"(): $WidgetLoadingHandler
"getWidgetScreenHandler"(): $WidgetScreenHandler
"isFairPlay"(): boolean
"isFirstStageLoaded"(): boolean
"isLoadedClient"(): boolean
"isLoadedServer"(): boolean
"isOutdated"(): boolean
"isStandalone"(): boolean
"resetSettings"(): void
"setCommonConfig"(commonConfig0: $CommonConfig$$Type): void
"setCommonConfigIO"(commonConfigIO0: $CommonConfigIO$$Type): void
"setLatestVersion"(string0: string): void
"setLatestVersionMD5"(string0: string): void
"setMessage"(string0: string): void
"setNewestUpdateID"(int0: integer): void
"setOutdated"(boolean0: boolean): void
"setServerPlayerTickHandler"(serverPlayerTickHandler0: $ServerPlayerTickHandler$$Type): void
"setSettings"(modSettings0: $ModSettings$$Type): void
"tryLoadLater"(): void
"tryLoadLaterServer"(): void
get "clientEventsListener"(): $ClientEventsListener
get "commonConfig"(): $CommonConfig
get "commonConfigIO"(): $CommonConfigIO
get "commonEvents"(): $CommonEvents
get "configFile"(): $Path
get "controlsRegister"(): $ControlsRegister
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "events"(): $ClientEvents
get "fieldValidators"(): $FieldValidatorHolder
get "fileLayoutID"(): string
get "guiHelper"(): $GuiHelper
get "hud"(): $Hud
get "hudIO"(): $HudIO
get "hudRenderer"(): $HudRenderer
get "interfaceRenderer"(): $InterfaceRenderer
get "interfaces"(): $InterfaceManager
get "latestVersion"(): string
get "latestVersionMD5"(): string
get "message"(): string
get "messageHandler"(): $MinimapMessageHandler
get "minimap"(): $Minimap
get "modClientEvents"(): $ModClientEvents
get "modCommonEvents"(): $ModCommonEvents
get "modEvents"(): $ModClientEvents
get "modId"(): string
get "modJAR"(): $File
get "newestUpdateID"(): integer
get "patreon"(): $PatreonMod
get "platformContext"(): $PlatformContext
get "playerTracker"(): $RenderedPlayerTrackerManager
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "settings"(): $ModSettings
get "settingsKey"(): any
get "supportMods"(): $SupportMods
get "supportServerMods"(): $SupportServerMods
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "updateLink"(): string
get "versionID"(): string
get "versionsURL"(): string
get "waypointsFile"(): $Path
get "waypointsFolder"(): $Path
get "widgetLoader"(): $WidgetLoadingHandler
get "widgetScreenHandler"(): $WidgetScreenHandler
get "fairPlay"(): boolean
get "firstStageLoaded"(): boolean
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "outdated"(): boolean
get "standalone"(): boolean
set "commonConfig"(value: $CommonConfig$$Type)
set "commonConfigIO"(value: $CommonConfigIO$$Type)
set "latestVersion"(value: string)
set "latestVersionMD5"(value: string)
set "message"(value: string)
set "newestUpdateID"(value: integer)
set "outdated"(value: boolean)
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
set "settings"(value: $ModSettings$$Type)
}

export namespace $IXaeroMinimap {
const old_waypointsFile: $Path
const wrongWaypointsFile: $File
const wrongWaypointsFolder: $File
}
export abstract class $IXaeroMinimap$$Static implements $IXaeroMinimap {
static readonly "old_waypointsFile": $Path
static readonly "wrongWaypointsFile": $File
static readonly "wrongWaypointsFolder": $File

}
}

declare module "packages/xaero/common/gui/$IXaeroClickableWidget" {
import { $ICanTooltip } from "packages/xaero/common/gui/$ICanTooltip"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export interface $IXaeroClickableWidget extends $ICanTooltip {
"getXaero_tooltip"(): $Supplier<$CursorBox>
"setXaero_tooltip"(supplier0: $Supplier$$Type<$CursorBox>): void
get "xaero_tooltip"(): $Supplier<$CursorBox>
set "xaero_tooltip"(value: $Supplier$$Type<$CursorBox>)
}

export namespace $IXaeroClickableWidget {
const probejs$$marker: never
}
export abstract class $IXaeroClickableWidget$$Static implements $IXaeroClickableWidget {
}
}

declare module "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0 } from "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager"

/** @deprecated */
export class $ClientSyncedTrackedPlayerManager extends $ClientSyncedTrackedPlayerManager$0 {
constructor()

}
}

declare module "packages/xaero/common/gui/$ScreenBase" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $DropDownWidget$$Type } from "packages/xaero/common/gui/dropdown/$DropDownWidget"
import { $Optional } from "packages/java/util/$Optional"
import { $IScreenBase } from "packages/xaero/common/gui/$IScreenBase"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ScreenBase extends $Screen implements $IScreenBase {
public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getEscape"(): $Screen
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onDropdownClosed"(dropDownWidget0: $DropDownWidget$$Type): void
public "onDropdownOpen"(dropDownWidget0: $DropDownWidget$$Type): void
public "renderEscapeScreen"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "replaceRenderableWidget"(abstractWidget0: $AbstractWidget$$Type, abstractWidget1: $AbstractWidget$$Type): void
public "replaceWidget"(abstractWidget0: $AbstractWidget$$Type, abstractWidget1: $AbstractWidget$$Type): void
public "setFocused"(boolean0: boolean): void
public "shouldSkipWorldRender"(): boolean
public static "tryToGetEscape"(screen0: $Screen$$Type): $Screen
get "escape"(): $Screen
set "escape"(value: $Screen$$Type)
get "parent"(): $Screen
set "parent"(value: $Screen$$Type)
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/common/server/mods/$SupportWorldMapServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportWorldMapServer {
constructor()

public "supportsTrackedPlayers"(): boolean
}
}

declare module "packages/xaero/common/gui/$GuiHelper" {
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $MyOptions } from "packages/xaero/common/gui/$MyOptions"
import { $ModOptions$$Type } from "packages/xaero/common/settings/$ModOptions"
import { $GuiSettings } from "packages/xaero/common/gui/$GuiSettings"

export class $GuiHelper {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "getMainSettingsScreen"(screen0: $Screen$$Type): $GuiSettings
public "getMyOptions"(): $MyOptions
public "onResetCancel"(screen0: $Screen$$Type, screen1: $Screen$$Type): void
public "openMainSettingsFromScreen"(screen0: $Screen$$Type, screen1: $Screen$$Type): void
public "openMinimapSettingsFromScreen"(screen0: $Screen$$Type, screen1: $Screen$$Type): void
public "openSettingsGui"(modOptions0: $ModOptions$$Type): void
get "myOptions"(): $MyOptions
}
}

declare module "packages/xaero/common/server/player/$ServerPlayerTickHandler" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"

export class $ServerPlayerTickHandler {
constructor()

public "tick"(serverPlayer0: $ServerPlayer$$Type): void
}
}

declare module "packages/xaero/common/minimap/info/$InfoDisplay" {
import { $InfoDisplayWidgetFactory$$Type } from "packages/xaero/hud/minimap/info/widget/$InfoDisplayWidgetFactory"
import { $InfoDisplayStateCodec$$Type } from "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $InfoDisplayWidgetFactory as $InfoDisplayWidgetFactory$0, $InfoDisplayWidgetFactory$$Type as $InfoDisplayWidgetFactory$0$$Type } from "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory"
import { $List$$Type } from "packages/java/util/$List"
import { $InfoDisplay as $InfoDisplay$0, $InfoDisplay$$Type as $InfoDisplay$0$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplay"
import { $InfoDisplayOnCompile, $InfoDisplayOnCompile$$Type } from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile"
import { $InfoDisplayOnCompile$$Type as $InfoDisplayOnCompile$0$$Type } from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile"
import { $InfoDisplayStateCodec$$Type as $InfoDisplayStateCodec$0$$Type } from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

/** @deprecated */
export class $InfoDisplay<T> extends $InfoDisplay$0<T> {
/** @deprecated */
constructor(string0: string, component1: $Component$$Type, t2: T, infoDisplayStateCodec3: $InfoDisplayStateCodec$0$$Type<T>, infoDisplayWidgetFactory4: $InfoDisplayWidgetFactory$$Type<T>, infoDisplayOnCompile5: $InfoDisplayOnCompile$0$$Type<T>, consumer6: $Consumer$$Type<$InfoDisplay$0$$Type<any>>)
/** @deprecated */
constructor(string0: string, component1: $Component$$Type, t2: T, infoDisplayStateCodec3: $InfoDisplayStateCodec$$Type<T>, infoDisplayWidgetFactory4: $InfoDisplayWidgetFactory$0$$Type<T>, infoDisplayOnCompile5: $InfoDisplayOnCompile$$Type<T>, list6: $List$$Type<$InfoDisplay$$Type<any>>)

/** @deprecated */
public "getDefaultState"(): T
/** @deprecated */
public "getOnCompile"(): $InfoDisplayOnCompile<T>
/** @deprecated */
public "getState"(): T
/** @deprecated */
public "getWidgetFactory"(): $InfoDisplayWidgetFactory$0<T>
get "defaultState"(): T
get "onCompile"(): $InfoDisplayOnCompile<T>
get "state"(): T
get "widgetFactory"(): $InfoDisplayWidgetFactory$0<T>
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointsManager" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapSession, $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HashMap } from "packages/java/util/$HashMap"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Hashtable } from "packages/java/util/$Hashtable"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"
import { $WaypointSet, $WaypointSet$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointSet"
import { $WaypointWorldContainer } from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $List } from "packages/java/util/$List"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $WaypointWorld, $WaypointWorld$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/** @deprecated */
export class $WaypointsManager extends $MinimapSession {
static readonly "customWaypoints": $Hashtable<string, $Hashtable<integer, $Waypoint>>

constructor(hudMod0: $HudMod$$Type, hudModule1: $HudModule$$Type<$MinimapSession$$Type>, clientPacketListener2: $ClientPacketListener$$Type)

/** @deprecated */
public "addWorld"(string0: string, string1: string): $WaypointWorld
/** @deprecated */
public "addWorldContainer"(string0: string): $WaypointWorldContainer
/** @deprecated */
public "canTeleport"(boolean0: boolean, waypointWorld1: $WaypointWorld$$Type): boolean
/** @deprecated */
public "containerExists"(string0: string): boolean
/** @deprecated */
public "createDeathpoint"(player0: $Player$$Type): void
/** @deprecated */
public "createTemporaryWaypoints"(waypointWorld0: $WaypointWorld$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
/** @deprecated */
public "createTemporaryWaypoints"(waypointWorld0: $WaypointWorld$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean, double5: double): void
/** @deprecated */
public "createTemporaryWaypoints"(waypointWorld0: $WaypointWorld$$Type, int1: integer, int2: integer, int3: integer): void
/** @deprecated */
public "findDimensionKey"(string0: string): $ResourceKey<$Level>
/** @deprecated */
public "getAutoContainerID"(): string
/** @deprecated */
public "getAutoRootContainerID"(): string
/** @deprecated */
public "getAutoWorld"(): $WaypointWorld
/** @deprecated */
public "getAutoWorldID"(): string
/** @deprecated */
public "getCurrentContainerAndWorldID"(string0: string, string1: string): string
/** @deprecated */
public "getCurrentContainerAndWorldID"(): string
/** @deprecated */
public "getCurrentContainerID"(string0: string): string
/** @deprecated */
public "getCurrentContainerID"(): string
/** @deprecated */
public "getCurrentOriginContainerID"(): string
/** @deprecated */
public "getCurrentOriginContainerID"(string0: string): string
/** @deprecated */
public "getCurrentWorld"(string0: string, string1: string): $WaypointWorld
/** @deprecated */
public "getCurrentWorld"(): $WaypointWorld
/** @deprecated */
public "getCurrentWorldID"(string0: string): string
/** @deprecated */
public "getCurrentWorldID"(): string
/** @deprecated */
public "getCustomContainerID"(): string
/** @deprecated */
public static "getCustomWaypoints"(string0: string): $Hashtable<integer, $Waypoint>
/** @deprecated */
public "getCustomWorldID"(): string
/** @deprecated */
public "getDimCoordinateScale"(waypointWorld0: $WaypointWorld$$Type): double
/** @deprecated */
public "getDimensionDirectoryName"(resourceKey0: $ResourceKey$$Type<$Level>): string
/** @deprecated */
public "getDimensionDivision"(waypointWorld0: $WaypointWorld$$Type): double
/** @deprecated */
public "getDimensionDivision"(string0: string): double
/** @deprecated */
public "getDimensionKeyForDirectoryName"(string0: string): $ResourceKey<$Level>
/** @deprecated */
public "getNewAutoWorldID"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean): string
/** @deprecated */
public "getServerWaypoints"(): $List<$Waypoint>
/** @deprecated */
public "getWaypointMap"(): $HashMap<string, $WaypointWorldContainer>
/** @deprecated */
public "getWaypoints"(): $WaypointSet
/** @deprecated */
public "getWorld"(string0: string, string1: string): $WaypointWorld
/** @deprecated */
public "getWorldContainer"(string0: string): $WaypointWorldContainer
/** @deprecated */
public "getWorldContainerNullable"(string0: string): $WaypointWorldContainer
/** @deprecated */
public "ignoreContainerCase"(string0: string, string1: string): string
/** @deprecated */
public "isMultiplayer"(string0: string): boolean
/** @deprecated */
public "isTeleportationSafe"(waypointWorld0: $WaypointWorld$$Type): boolean
/** @deprecated */
public "isWorldTeleportable"(waypointWorld0: $WaypointWorld$$Type): boolean
/** @deprecated */
public "onServerLevelId"(int0: integer): void
/** @deprecated */
public "removeContainer"(string0: string): void
/** @deprecated */
public "setCurrentSpawn"(blockPos0: $BlockPos$$Type, clientLevel1: $ClientLevel$$Type): void
/** @deprecated */
public "setCustomContainerID"(string0: string): void
/** @deprecated */
public "setCustomWorldID"(string0: string): void
/** @deprecated */
public "setWaypoints"(waypointSet0: $WaypointSet$$Type): void
/** @deprecated */
public "teleportAnyway"(): void
/** @deprecated */
public "teleportToWaypoint"(waypoint0: $Waypoint$$Type, waypointWorld1: $WaypointWorld$$Type, screen2: $Screen$$Type, boolean3: boolean): void
/** @deprecated */
public "teleportToWaypoint"(waypoint0: $Waypoint$$Type, waypointWorld1: $WaypointWorld$$Type, screen2: $Screen$$Type): void
/** @deprecated */
public "updateWaypoints"(): void
/** @deprecated */
public "updateWorldIds"(): void
get "autoContainerID"(): string
get "autoRootContainerID"(): string
get "autoWorld"(): $WaypointWorld
get "autoWorldID"(): string
get "currentContainerAndWorldID"(): string
get "currentContainerID"(): string
get "currentOriginContainerID"(): string
get "currentWorld"(): $WaypointWorld
get "currentWorldID"(): string
get "customContainerID"(): string
get "customWorldID"(): string
get "serverWaypoints"(): $List<$Waypoint>
get "waypointMap"(): $HashMap<string, $WaypointWorldContainer>
get "waypoints"(): $WaypointSet
set "customContainerID"(value: string)
set "customWorldID"(value: string)
set "waypoints"(value: $WaypointSet$$Type)
}
}

declare module "packages/xaero/common/gui/widget/init/$WidgetInitializer" {
import { $WidgetScreen$$Type } from "packages/xaero/common/gui/widget/$WidgetScreen"
import { $Widget$$Type } from "packages/xaero/common/gui/widget/$Widget"

export interface $WidgetInitializer {
"init"(widgetScreen0: $WidgetScreen$$Type, int1: integer, int2: integer, widget3: $Widget$$Type): void
}

export namespace $WidgetInitializer {
const probejs$$marker: never
}
export abstract class $WidgetInitializer$$Static implements $WidgetInitializer {
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider" {
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $MinimapElementRenderProvider as $MinimapElementRenderProvider$0 } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider"

/** @deprecated */
export class $MinimapElementRenderProvider<E, RC> extends $MinimapElementRenderProvider$0<E, RC> {
constructor()

/** @deprecated */
public "begin"(int0: integer, rc1: RC): void
/** @deprecated */
public "end"(int0: integer, rc1: RC): void
/** @deprecated */
public "getNext"(int0: integer, rc1: RC): E
public "getNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): E
/** @deprecated */
public "hasNext"(int0: integer, rc1: RC): boolean
public "setupContextAndGetNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): E
/** @deprecated */
public "setupContextAndGetNext"(int0: integer, rc1: RC): E
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer" {
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $File } from "packages/java/io/$File"
import { $WaypointWorldRootContainer, $WaypointWorldRootContainer$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer"
import { $MinimapWorldRootContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $ArrayList } from "packages/java/util/$ArrayList"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $MinimapWorldContainer } from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import { $WaypointWorld, $WaypointWorld$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/** @deprecated */
export class $WaypointWorldContainer extends $MinimapWorldContainer {
/** @deprecated */
constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type, xaeroPath2: $XaeroPath$$Type, minimapWorldRootContainer3: $MinimapWorldRootContainer$$Type)
/** @deprecated */
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, xaeroMinimapSession1: $XaeroMinimapSession$$Type, string2: string, waypointWorldRootContainer3: $WaypointWorldRootContainer$$Type)

/** @deprecated */
public "addName"(string0: string, string1: string): void
/** @deprecated */
public "addSubContainer"(string0: string): $WaypointWorldContainer
/** @deprecated */
public "containsSub"(string0: string): boolean
/** @deprecated */
public "deleteSubContainer"(string0: string): void
/** @deprecated */
public "getAllWorlds"(): $ArrayList<$WaypointWorld>
/** @deprecated */
public "getDirectory"(): $File
/** @deprecated */
public "getEqualIgnoreCaseSub"(string0: string): string
/** @deprecated */
public "getFirstWorldConnectedTo"(waypointWorld0: $WaypointWorld$$Type): $WaypointWorld
/** @deprecated */
public "getFullName"(string0: string, string1: string): string
/** @deprecated */
public "getKey"(): string
/** @deprecated */
public "getRootContainer"(): $WaypointWorldRootContainer
/** @deprecated */
public "getSubId"(): string
/** @deprecated */
public "setKey"(string0: string): void
get "allWorlds"(): $ArrayList<$WaypointWorld>
get "directory"(): $File
get "key"(): string
get "rootContainer"(): $WaypointWorldRootContainer
get "subId"(): string
set "key"(value: string)
}
}

declare module "packages/xaero/common/settings/$ModSettings" {
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $WaypointsManager$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import { $EntityRadarBackwardsCompatibilityConfig } from "packages/xaero/hud/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $ModOptions$$Type } from "packages/xaero/common/settings/$ModOptions"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Item } from "packages/net/minecraft/world/item/$Item"
import { $KeyMapping, $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $HudSession$$Type } from "packages/xaero/hud/$HudSession"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"
import { $WaypointWorld$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

export class $ModSettings {
static readonly "COLORS": integer[]
static readonly "COMPASS_OPTIONS": string[]
static readonly "DOTS_STYLES": string[]
static readonly "ENCHANT_COLORS": string[]
static readonly "ENCHANT_COLOR_NAMES": string[]
static readonly "ENTITY_ICONS_OPTIONS": string[]
static readonly "ENTITY_NAMES_OPTIONS": string[]
static readonly "FRAME_OPTIONS": string[]
static readonly "PUSHBOX_OPTIONS": string[]
static readonly "RADAR_OVER_MAP_OPTIONS": string[]
static "arrowColours": float[][]
static readonly "blockColourTypes": string[]
static "defaultSettings": integer
static readonly "distanceTypes": string[]
static readonly "format": string
static "ignoreUpdate": integer
/** @deprecated */
static "keyAllSets": $KeyMapping
/** @deprecated */
static "keyAlternativeListPlayers": $KeyMapping
/** @deprecated */
static "keyBindZoom": $KeyMapping
/** @deprecated */
static "keyBindZoom1": $KeyMapping
/** @deprecated */
static "keyInstantWaypoint": $KeyMapping
/** @deprecated */
static "keyLargeMap": $KeyMapping
/** @deprecated */
static "keyLightOverlay": $KeyMapping
/** @deprecated */
static "keyManualCaveMode": $KeyMapping
/** @deprecated */
static "keyReverseEntityRadar": $KeyMapping
/** @deprecated */
static "keySwitchSet": $KeyMapping
/** @deprecated */
static "keyToggleGrid": $KeyMapping
/** @deprecated */
static "keyToggleMap": $KeyMapping
/** @deprecated */
static "keyToggleMapWaypoints": $KeyMapping
static "keyTogglePacChunkClaims": $KeyMapping
/** @deprecated */
static "keyTogglePacPlayers": $KeyMapping
/** @deprecated */
static "keyToggleRadar": $KeyMapping
/** @deprecated */
static "keyToggleSlimes": $KeyMapping
/** @deprecated */
static "keyToggleTrackedPlayers": $KeyMapping
/** @deprecated */
static "keyToggleTrackedPlayersInWorld": $KeyMapping
/** @deprecated */
static "keyToggleTrackedPlayersOnMap": $KeyMapping
/** @deprecated */
static "keyToggleWaypoints": $KeyMapping
/** @deprecated */
static "keyWaypoints": $KeyMapping
static "minimapItem": $Item
static "minimapItemId": string
/** @deprecated */
static "newWaypoint": $KeyMapping
static "serverSettings": integer
static "settingsButton": boolean
static "updateNotification": boolean
static readonly "zooms": float[]

constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public static "canEditIngameSettings"(): boolean
public "caveMapsDisabled"(): boolean
public "changeZoom"(int0: integer): void
public "customSlimeSeedNeeded"(hudSession0: $HudSession$$Type): boolean
public "deathpointsDisabled"(): boolean
public "foundOldRadarSettings"(): boolean
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "getAntiAliasing"(): boolean
public "getAutoUIScale"(): integer
public "getBiomeBlending"(): boolean
public "getBiomeColorsVanillaMode"(): boolean
public "getBlockColours"(): integer
public "getBooleanValue"(modOptions0: $ModOptions$$Type): boolean
public "getCaveMaps"(boolean0: boolean): boolean
public "getCaveMapsDepth"(): integer
public "getClaimsBorderOpacity"(): integer
public "getClaimsFillOpacity"(): integer
public "getClientBooleanValue"(modOptions0: $ModOptions$$Type): boolean
public "getCompassScale"(): integer
public "getDeathpoints"(): boolean
public "getDisplayClaims"(): boolean
public "getDisplayRedstone"(): boolean
public "getDotNameScale"(): double
public "getDotsStyle"(): integer
public "getEntityRadar"(): boolean
public "getEntityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
public "getLighting"(): boolean
public "getLockNorth"(int0: integer, int1: integer): boolean
public "getManualCaveModeStart"(): integer
public "getMaxWaypointsDistance"(): double
public "getMinimap"(): boolean
public "getMinimapScale"(): float
public "getMinimapSize"(): integer
public "getMoreOptionValueNames"(modOptions0: $ModOptions$$Type): string
public "getNorthCompassColor"(): integer
public "getOldDeathpoints"(): boolean
public "getOptionDoubleValue"(modOptions0: $ModOptions$$Type): double
public "getOptionValue"(modOptions0: $ModOptions$$Type): any
public "getOptionValueName"(modOptions0: $ModOptions$$Type): string
public "getPartialYTeleportation"(): boolean
public "getShowFlowers"(): boolean
public "getShowIngameWaypoints"(): boolean
public "getShowWaypoints"(): boolean
public "getSliderOptionText"(modOptions0: $ModOptions$$Type): string
public "getSlimeChunks"(minimapSession0: $MinimapSession$$Type): boolean
/** @deprecated */
public "getSlimeChunks"(waypointsManager0: $WaypointsManager$$Type): boolean
public "getSlimeChunksSeed"(xaeroPath0: $XaeroPath$$Type): long
public "getSmoothDots"(): boolean
public "getTerrainDepth"(): boolean
public "getTerrainSlopes"(): integer
public "getTrackedPlayerMinimapIconScale"(): float
public "getTrackedPlayerWorldIconScale"(): float
public "getTrackedPlayerWorldNameScale"(): float
public static "getTranslation"(boolean0: boolean): string
public "getUIScale"(int0: integer, int1: integer, int2: integer): float
public "getUseWorldMap"(): boolean
public "getWaypointsClampDepth"(double0: double, int1: integer): double
public "getWaypointsIngameDistanceScale"(): float
public "getWaypointsIngameIconScale"(): float
public "getWaypointsIngameNameScale"(): integer
public "handler$cmc000$getClientBooleanValue"(o: $ModOptions$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$getOptionFloatValue"(o: $ModOptions$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$getOptionValue"(o: $ModOptions$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$getOptionValueName"(o: $ModOptions$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$getSliderOptionText"(o: $ModOptions$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$isKeyRepeat"(kb: $KeyMapping$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$modifyMinimapSize"(cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$cmc000$saveSettings"(ci: $CallbackInfo$$Type): void
public "handler$cmc000$setOptionFloatValue"(o: $ModOptions$$Type, f: double, ci: $CallbackInfo$$Type): void
public "handler$cmc000$setOptionValue"(o: $ModOptions$$Type, value: any, ci: $CallbackInfo$$Type): void
public "isIgnoreHeightmaps"(): boolean
public "isKeyRepeat"(keyMapping0: $KeyMapping$$Type): boolean
public "isLegibleCaveMaps"(): boolean
public "isStainedGlassDisplayed"(): boolean
public "loadDefaultSettings"(): void
public "loadSettings"(): void
public "minimapDisabled"(): boolean
public "modifyExpressionValue$cmc000$allowNoNorthLockWithTransparentMM"(original: integer): integer
public "readSetting"(string0s: string[]): void
public "resetEntityRadarBackwardsCompatibilityConfig"(): void
public "resetServerSettings"(): void
/** @deprecated */
public "saveAllWaypoints"(waypointsManager0: $WaypointsManager$$Type): void
public "saveSettings"(): void
/** @deprecated */
public "saveWaypoints"(waypointWorld0: $WaypointWorld$$Type): void
/** @deprecated */
public "saveWaypoints"(waypointWorld0: $WaypointWorld$$Type, boolean1: boolean): void
public "setOptionDoubleValue"(modOptions0: $ModOptions$$Type, double1: double): void
public "setOptionValue"(modOptions0: $ModOptions$$Type, object1: any): void
public static "setServerSettings"(): void
public "setSlimeChunksSeed"(long0: long, xaeroPath1: $XaeroPath$$Type): void
public "showWaypointsDisabled"(): boolean
public "toggleBooleanOptionValue"(modOptions0: $ModOptions$$Type): void
public "usesWorldMapHardValue"(modOptions0: $ModOptions$$Type): boolean
public "usesWorldMapOptionValue"(modOptions0: $ModOptions$$Type): boolean
public "usesWorldMapScreenValue"(modOptions0: $ModOptions$$Type): boolean
/** @deprecated */
public "waypointsGUI"(waypointsManager0: $WaypointsManager$$Type): boolean
public "waypointsGUI"(minimapSession0: $MinimapSession$$Type): boolean
public "writeSettings"(printWriter0: $PrintWriter$$Type): void
get "adjustHeightForCarpetLikeBlocks"(): boolean
set "adjustHeightForCarpetLikeBlocks"(value: boolean)
get "allowInternetAccess"(): boolean
set "allowInternetAccess"(value: boolean)
get "allowWrongWorldTeleportation"(): boolean
set "allowWrongWorldTeleportation"(value: boolean)
get "alwaysShowDistance"(): boolean
set "alwaysShowDistance"(value: boolean)
get "arrowColour"(): integer
set "arrowColour"(value: integer)
get "arrowColourNames"(): string[]
set "arrowColourNames"(value: string[])
get "arrowScale"(): double
set "arrowScale"(value: double)
get "autoConvertWaypointDistanceToKmThreshold"(): integer
set "autoConvertWaypointDistanceToKmThreshold"(value: integer)
get "blockTransparency"(): boolean
set "blockTransparency"(value: boolean)
get "bossHealthPushBox"(): integer
set "bossHealthPushBox"(value: integer)
get "caveMaps"(): integer
set "caveMaps"(value: integer)
get "caveModeToggleTimer"(): integer
set "caveModeToggleTimer"(value: integer)
get "caveZoom"(): integer
set "caveZoom"(value: integer)
get "centeredEnlarged"(): boolean
set "centeredEnlarged"(value: boolean)
get "chunkGrid"(): integer
set "chunkGrid"(value: integer)
get "chunkGridLineWidth"(): integer
set "chunkGridLineWidth"(value: integer)
get "compassColor"(): integer
set "compassColor"(value: integer)
get "compassLocation"(): integer
set "compassLocation"(value: integer)
get "compassOverEverything"(): boolean
set "compassOverEverything"(value: boolean)
get "crossDimensionalTp"(): boolean
set "crossDimensionalTp"(value: boolean)
get "debugEntityIcons"(): boolean
set "debugEntityIcons"(value: boolean)
get "debugEntityVariantIds"(): boolean
set "debugEntityVariantIds"(value: boolean)
get "defaultWaypointTPCommandFormat"(): string
set "defaultWaypointTPCommandFormat"(value: string)
get "defaultWaypointTPCommandRotationFormat"(): string
set "defaultWaypointTPCommandRotationFormat"(value: string)
get "deleteReachedDeathpoints"(): boolean
set "deleteReachedDeathpoints"(value: boolean)
get "differentiateByServerAddress"(): boolean
set "differentiateByServerAddress"(value: boolean)
get "dimensionScaledMaxWaypointDistance"(): boolean
set "dimensionScaledMaxWaypointDistance"(value: boolean)
get "displayCurrentClaim"(): boolean
set "displayCurrentClaim"(value: boolean)
get "displayMultipleWaypointInfo"(): integer
set "displayMultipleWaypointInfo"(value: integer)
get "displayTrackedPlayersInWorld"(): boolean
set "displayTrackedPlayersInWorld"(value: boolean)
get "displayTrackedPlayersOnMap"(): boolean
set "displayTrackedPlayersOnMap"(value: boolean)
get "distance"(): integer
set "distance"(value: integer)
get "enlargedMinimapAToggle"(): boolean
set "enlargedMinimapAToggle"(value: boolean)
get "hideMinimapUnderF3"(): boolean
set "hideMinimapUnderF3"(value: boolean)
get "hideMinimapUnderScreen"(): boolean
set "hideMinimapUnderScreen"(value: boolean)
get "hideWaypointCoordinates"(): boolean
set "hideWaypointCoordinates"(value: boolean)
get "hideWorldNames"(): integer
set "hideWorldNames"(value: integer)
get "infoDisplayBackgroundOpacity"(): integer
set "infoDisplayBackgroundOpacity"(value: integer)
get "keepUnlockedWhenEnlarged"(): boolean
set "keepUnlockedWhenEnlarged"(value: boolean)
get "keepWaypointNames"(): boolean
set "keepWaypointNames"(value: boolean)
get "lightOverlayColor"(): integer
set "lightOverlayColor"(value: integer)
get "lightOverlayMaxLight"(): integer
set "lightOverlayMaxLight"(value: integer)
get "lightOverlayMinLight"(): integer
set "lightOverlayMinLight"(value: integer)
get "lightOverlayType"(): integer
set "lightOverlayType"(value: integer)
get "lookingAtAngle"(): integer
set "lookingAtAngle"(value: integer)
get "lookingAtAngleVertical"(): integer
set "lookingAtAngleVertical"(value: integer)
get "mainDotSize"(): integer
set "mainDotSize"(value: integer)
get "mainEntityAs"(): integer
set "mainEntityAs"(value: integer)
get "manualCaveModeStart"(): integer
set "manualCaveModeStart"(value: integer)
get "manualCaveModeStartAuto"(): boolean
set "manualCaveModeStartAuto"(value: boolean)
get "mapSafeMode"(): boolean
set "mapSafeMode"(value: boolean)
get "minimapFrame"(): integer
set "minimapFrame"(value: integer)
get "minimapFrameColor"(): integer
set "minimapFrameColor"(value: integer)
get "minimapOpacity"(): double
set "minimapOpacity"(value: double)
get "minimapShape"(): integer
set "minimapShape"(value: integer)
get "minimapTextAlign"(): integer
set "minimapTextAlign"(value: integer)
get "openSlimeSettings"(): boolean
set "openSlimeSettings"(value: boolean)
get "partialYTeleportation"(): boolean
set "partialYTeleportation"(value: boolean)
get "playerArrowOpacity"(): integer
set "playerArrowOpacity"(value: integer)
get "potionEffectPushBox"(): integer
set "potionEffectPushBox"(value: integer)
get "radarHideInvisibleEntities"(): boolean
set "radarHideInvisibleEntities"(value: boolean)
get "renderAllSets"(): boolean
set "renderAllSets"(value: boolean)
get "renderLayerIndex"(): integer
set "renderLayerIndex"(value: integer)
get "slimeChunks"(): boolean
set "slimeChunks"(value: boolean)
get "smoothDots"(): boolean
set "smoothDots"(value: boolean)
get "switchToAutoOnDeath"(): boolean
set "switchToAutoOnDeath"(value: boolean)
get "temporaryWaypointsGlobal"(): boolean
set "temporaryWaypointsGlobal"(value: boolean)
get "waypointDistancePrecision"(): integer
set "waypointDistancePrecision"(value: integer)
get "waypointOnMapScale"(): integer
set "waypointOnMapScale"(value: integer)
get "waypointOpacityIngame"(): integer
set "waypointOpacityIngame"(value: integer)
get "waypointOpacityMap"(): integer
set "waypointOpacityMap"(value: integer)
get "waypointsBottom"(): boolean
set "waypointsBottom"(value: boolean)
get "waypointsDistanceMin"(): double
set "waypointsDistanceMin"(value: double)
get "waypointsIngameCloseScale"(): double
set "waypointsIngameCloseScale"(value: double)
get "waypointsMutualEdit"(): boolean
set "waypointsMutualEdit"(value: boolean)
get "zoom"(): integer
set "zoom"(value: integer)
get "zoomOnEnlarged"(): integer
set "zoomOnEnlarged"(value: integer)
get "antiAliasing"(): boolean
get "autoUIScale"(): integer
get "biomeBlending"(): boolean
get "biomeColorsVanillaMode"(): boolean
get "blockColours"(): integer
get "caveMapsDepth"(): integer
get "claimsBorderOpacity"(): integer
get "claimsFillOpacity"(): integer
get "compassScale"(): integer
get "deathpoints"(): boolean
get "displayClaims"(): boolean
get "displayRedstone"(): boolean
get "dotNameScale"(): double
get "dotsStyle"(): integer
get "entityRadar"(): boolean
get "entityRadarBackwardsCompatibilityConfig"(): $EntityRadarBackwardsCompatibilityConfig
get "lighting"(): boolean
get "maxWaypointsDistance"(): double
get "minimap"(): boolean
get "minimapScale"(): float
get "minimapSize"(): integer
get "northCompassColor"(): integer
get "oldDeathpoints"(): boolean
get "showFlowers"(): boolean
get "showIngameWaypoints"(): boolean
get "showWaypoints"(): boolean
get "terrainDepth"(): boolean
get "terrainSlopes"(): integer
get "trackedPlayerMinimapIconScale"(): float
get "trackedPlayerWorldIconScale"(): float
get "trackedPlayerWorldNameScale"(): float
get "useWorldMap"(): boolean
get "waypointsIngameDistanceScale"(): float
get "waypointsIngameIconScale"(): float
get "waypointsIngameNameScale"(): integer
get "ignoreHeightmaps"(): boolean
get "legibleCaveMaps"(): boolean
get "stainedGlassDisplayed"(): boolean
}
}

declare module "packages/xaero/common/gui/$IXaeroNarratableWidget" {
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IXaeroNarratableWidget {
"createNarrationMessage"(): $MutableComponent
}

export namespace $IXaeroNarratableWidget {
const probejs$$marker: never
}
export abstract class $IXaeroNarratableWidget$$Static implements $IXaeroNarratableWidget {
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointsSort" {
import { $Enum } from "packages/java/lang/$Enum"

export class $WaypointsSort extends $Enum<$WaypointsSort> {
static readonly "ANGLE": $WaypointsSort
static readonly "COLOR": $WaypointsSort
static readonly "DISTANCE": $WaypointsSort
static readonly "NAME": $WaypointsSort
static readonly "NONE": $WaypointsSort
static readonly "SYMBOL": $WaypointsSort
readonly "optionName": string

public static "valueOf"(string0: string): $WaypointsSort
public static "values"(): $WaypointsSort[]
}
}

declare module "packages/xaero/common/minimap/region/$MinimapChunk" {
import { $MinimapInterface$$Type } from "packages/xaero/common/minimap/$MinimapInterface"
import { $MinimapTile, $MinimapTile$$Type } from "packages/xaero/common/minimap/region/$MinimapTile"
import { $IntBuffer, $IntBuffer$$Type } from "packages/java/nio/$IntBuffer"

export class $MinimapChunk {
static readonly "INT_BUFFER_SIZE": integer
static readonly "LIGHT_LEVELS": integer
static readonly "SIZE_TILES": integer

constructor(int0: integer, int1: integer)

public "bindTexture"(int0: integer): integer
public "cleanup"(minimapInterface0: $MinimapInterface$$Type): void
public "copyBuffer"(int0: integer, intBuffer1: $IntBuffer$$Type): void
public "getBuffer"(int0: integer): $IntBuffer
public "getGlTexture"(int0: integer): integer
public "getLevelToRefresh"(int0: integer): integer
public "getLevelsBuffered"(): integer
public "getTile"(int0: integer, int1: integer): $MinimapTile
public "getX"(): integer
public "getZ"(): integer
public "isBlockTextureUpload"(): boolean
public "isChanged"(): boolean
public "isHasSomething"(): boolean
public "isRefreshRequired"(int0: integer): boolean
public "putColour"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5s: integer[], int6: integer): void
public "recycleTiles"(): void
public "reset"(int0: integer, int1: integer): void
public "setBlockTextureUpload"(boolean0: boolean): void
public "setChanged"(boolean0: boolean): void
public "setGlTexture"(int0: integer, int1: integer): void
public "setHasSomething"(boolean0: boolean): void
public "setLevelsBuffered"(int0: integer): void
public "setRefreshRequired"(int0: integer, boolean1: boolean): void
public "setTile"(int0: integer, int1: integer, minimapTile2: $MinimapTile$$Type): void
public "updateBuffers"(int0: integer, int1ss: integer[][]): void
get "levelsBuffered"(): integer
get "x"(): integer
get "z"(): integer
get "blockTextureUpload"(): boolean
get "changed"(): boolean
get "hasSomething"(): boolean
set "blockTextureUpload"(value: boolean)
set "changed"(value: boolean)
set "hasSomething"(value: boolean)
set "levelsBuffered"(value: integer)
}
}

declare module "packages/xaero/common/events/$ClientEventsListener" {
import { $HudSession$$Type } from "packages/xaero/hud/$HudSession"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ToggleKeyMapping$$Type } from "packages/net/minecraft/client/$ToggleKeyMapping"

export class $ClientEventsListener {
constructor()

public "clientTickPost"(hudSession0: $HudSession$$Type): void
public "handleForceToggleKeyMapping"(toggleKeyMapping0: $ToggleKeyMapping$$Type): boolean
public "handleRenderStatusEffectOverlay"(guiGraphics0: $GuiGraphics$$Type): boolean
public "playerTickPost"(hudSession0: $HudSession$$Type): void
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapSMultiBlockChangePacket" {
import { $SectionPos } from "packages/net/minecraft/core/$SectionPos"

export interface $IXaeroMinimapSMultiBlockChangePacket {
"xaero_mm_getSectionPos"(): $SectionPos
}

export namespace $IXaeroMinimapSMultiBlockChangePacket {
const probejs$$marker: never
}
export abstract class $IXaeroMinimapSMultiBlockChangePacket$$Static implements $IXaeroMinimapSMultiBlockChangePacket {
}
}

declare module "packages/xaero/common/$HudMod" {
import { $FieldValidatorHolder } from "packages/xaero/common/validator/$FieldValidatorHolder"
import { $PlatformContext } from "packages/xaero/common/$PlatformContext"
import { $ClientEvents } from "packages/xaero/common/events/$ClientEvents"
import { $HudIO } from "packages/xaero/hud/io/$HudIO"
import { $InterfaceRenderer } from "packages/xaero/common/interfaces/render/$InterfaceRenderer"
import { $ClientEventsListener } from "packages/xaero/common/events/$ClientEventsListener"
import { $PlayerTrackerSystemManager } from "packages/xaero/common/minimap/radar/tracker/system/$PlayerTrackerSystemManager"
import { $WidgetScreenHandler } from "packages/xaero/common/gui/widget/$WidgetScreenHandler"
import { $HudRenderer } from "packages/xaero/hud/render/$HudRenderer"
import { $ServerPlayerTickHandler, $ServerPlayerTickHandler$$Type } from "packages/xaero/common/server/player/$ServerPlayerTickHandler"
import { $File } from "packages/java/io/$File"
import { $CommonEvents } from "packages/xaero/common/events/$CommonEvents"
import { $WidgetLoadingHandler } from "packages/xaero/common/gui/widget/$WidgetLoadingHandler"
import { $IXaeroMinimap } from "packages/xaero/common/$IXaeroMinimap"
import { $EntityRadarCategoryManager } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import { $ModCommonEvents } from "packages/xaero/common/events/$ModCommonEvents"
import { $CommonConfigIO, $CommonConfigIO$$Type } from "packages/xaero/common/config/$CommonConfigIO"
import { $PatreonMod } from "packages/xaero/common/patreon/$PatreonMod"
import { $GuiHelper } from "packages/xaero/common/gui/$GuiHelper"
import { $ModSettings, $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $RenderedPlayerTrackerManager } from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import { $ControlsRegister } from "packages/xaero/hud/controls/$ControlsRegister"
import { $MinimapMessageHandler } from "packages/xaero/common/message/$MinimapMessageHandler"
import { $SupportServerMods } from "packages/xaero/common/server/mods/$SupportServerMods"
import { $CommonConfig, $CommonConfig$$Type } from "packages/xaero/common/config/$CommonConfig"
import { $Hud } from "packages/xaero/hud/$Hud"
import { $KeyMappingControllerManager } from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"
import { $ModClientEvents } from "packages/xaero/common/events/$ModClientEvents"
import { $Minimap } from "packages/xaero/hud/minimap/$Minimap"
import { $PlayerTrackerMinimapElementRenderer } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer"
import { $InterfaceManager } from "packages/xaero/common/interfaces/$InterfaceManager"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Logger } from "packages/org/apache/logging/log4j/$Logger"
import { $XaeroMinimapSession } from "packages/xaero/common/$XaeroMinimapSession"
import { $SupportMods } from "packages/xaero/common/mods/$SupportMods"

export class $HudMod implements $IXaeroMinimap {
static readonly "FAIRPLAY": boolean
static "INSTANCE": $HudMod
static readonly "LOGGER": $Logger

public "createSession"(): $XaeroMinimapSession
public "ensureControlsRegister"(): void
public "getClientEventsListener"(): $ClientEventsListener
public "getCommonConfig"(): $CommonConfig
public "getCommonConfigIO"(): $CommonConfigIO
public "getCommonEvents"(): $CommonEvents
public "getConfigFile"(): $Path
public "getControlsRegister"(): $ControlsRegister
public "getEntityRadarCategoryManager"(): $EntityRadarCategoryManager
public "getEvents"(): $ClientEvents
public "getFieldValidators"(): $FieldValidatorHolder
public "getFileLayoutID"(): string
public "getGuiHelper"(): $GuiHelper
public "getHud"(): $Hud
public "getHudIO"(): $HudIO
public "getHudRenderer"(): $HudRenderer
public "getInterfaceRenderer"(): $InterfaceRenderer
public "getInterfaces"(): $InterfaceManager
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "getLatestVersion"(): string
public "getLatestVersionMD5"(): string
public "getMessage"(): string
public "getMessageHandler"(): $MinimapMessageHandler
public "getMinimap"(): $Minimap
public "getMinimapFolder"(): $Path
public "getModClientEvents"(): $ModClientEvents
public "getModCommonEvents"(): $ModCommonEvents
public "getModEvents"(): $ModClientEvents
public "getModId"(): string
public "getModJAR"(): $File
public "getNewestUpdateID"(): integer
public "getPatreon"(): $PatreonMod
public "getPlatformContext"(): $PlatformContext
public "getPlayerTracker"(): $RenderedPlayerTrackerManager
/** @deprecated */
public "getPlayerTrackerSystemManager"(): $PlayerTrackerSystemManager
public "getServerPlayerTickHandler"(): $ServerPlayerTickHandler
public "getSettings"(): $ModSettings
public "getSettingsKey"(): any
public "getSupportMods"(): $SupportMods
public "getSupportServerMods"(): $SupportServerMods
public "getTrackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
public "getUpdateLink"(): string
public "getVersionID"(): string
public "getVersionsURL"(): string
public "getWaypointsFile"(): $Path
/** @deprecated */
public "getWaypointsFolder"(): $Path
public "getWidgetLoader"(): $WidgetLoadingHandler
public "getWidgetScreenHandler"(): $WidgetScreenHandler
public "handler$cli000$onClientLoadComplete"(ci: $CallbackInfo$$Type): void
public "isFairPlay"(): boolean
public "isFirstStageLoaded"(): boolean
public "isLoadedClient"(): boolean
public "isLoadedServer"(): boolean
public "isOutdated"(): boolean
public "isStandalone"(): boolean
public "loadLater"(): void
public "loadServer"(): void
public "resetSettings"(): void
public "setCommonConfig"(commonConfig0: $CommonConfig$$Type): void
public "setCommonConfigIO"(commonConfigIO0: $CommonConfigIO$$Type): void
public "setLatestVersion"(string0: string): void
public "setLatestVersionMD5"(string0: string): void
public "setMessage"(string0: string): void
public "setNewestUpdateID"(int0: integer): void
public "setOutdated"(boolean0: boolean): void
public "setServerPlayerTickHandler"(serverPlayerTickHandler0: $ServerPlayerTickHandler$$Type): void
public "setSettings"(modSettings0: $ModSettings$$Type): void
public "tryLoadLater"(): void
public "tryLoadLaterServer"(): void
get "minimapFolder"(): $Path
set "minimapFolder"(value: $Path$$Type)
get "waypointsFile"(): $Path
set "waypointsFile"(value: $Path$$Type)
get "clientEventsListener"(): $ClientEventsListener
get "commonConfig"(): $CommonConfig
get "commonConfigIO"(): $CommonConfigIO
get "commonEvents"(): $CommonEvents
get "configFile"(): $Path
get "controlsRegister"(): $ControlsRegister
get "entityRadarCategoryManager"(): $EntityRadarCategoryManager
get "events"(): $ClientEvents
get "fieldValidators"(): $FieldValidatorHolder
get "fileLayoutID"(): string
get "guiHelper"(): $GuiHelper
get "hud"(): $Hud
get "hudIO"(): $HudIO
get "hudRenderer"(): $HudRenderer
get "interfaceRenderer"(): $InterfaceRenderer
get "interfaces"(): $InterfaceManager
get "keyMappingControllers"(): $KeyMappingControllerManager
get "latestVersion"(): string
get "latestVersionMD5"(): string
get "message"(): string
get "messageHandler"(): $MinimapMessageHandler
get "minimap"(): $Minimap
get "modClientEvents"(): $ModClientEvents
get "modCommonEvents"(): $ModCommonEvents
get "modEvents"(): $ModClientEvents
get "modId"(): string
get "modJAR"(): $File
get "newestUpdateID"(): integer
get "patreon"(): $PatreonMod
get "platformContext"(): $PlatformContext
get "playerTracker"(): $RenderedPlayerTrackerManager
get "playerTrackerSystemManager"(): $PlayerTrackerSystemManager
get "serverPlayerTickHandler"(): $ServerPlayerTickHandler
get "settings"(): $ModSettings
get "settingsKey"(): any
get "supportMods"(): $SupportMods
get "supportServerMods"(): $SupportServerMods
get "trackedPlayerRenderer"(): $PlayerTrackerMinimapElementRenderer
get "updateLink"(): string
get "versionID"(): string
get "versionsURL"(): string
get "waypointsFolder"(): $Path
get "widgetLoader"(): $WidgetLoadingHandler
get "widgetScreenHandler"(): $WidgetScreenHandler
get "fairPlay"(): boolean
get "firstStageLoaded"(): boolean
get "loadedClient"(): boolean
get "loadedServer"(): boolean
get "outdated"(): boolean
get "standalone"(): boolean
set "commonConfig"(value: $CommonConfig$$Type)
set "commonConfigIO"(value: $CommonConfigIO$$Type)
set "latestVersion"(value: string)
set "latestVersionMD5"(value: string)
set "message"(value: string)
set "newestUpdateID"(value: integer)
set "outdated"(value: boolean)
set "serverPlayerTickHandler"(value: $ServerPlayerTickHandler$$Type)
set "settings"(value: $ModSettings$$Type)
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointVisibilityType" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $WaypointVisibilityType extends $Enum<$WaypointVisibilityType> {
static readonly "GLOBAL": $WaypointVisibilityType
static readonly "LOCAL": $WaypointVisibilityType
static readonly "WORLD_MAP_GLOBAL": $WaypointVisibilityType
static readonly "WORLD_MAP_LOCAL": $WaypointVisibilityType

public "getTranslation"(): $Component
public "isGlobal"(): boolean
public static "valueOf"(string0: string): $WaypointVisibilityType
public static "values"(): $WaypointVisibilityType[]
get "translation"(): $Component
get "global"(): boolean
}
}

declare module "packages/xaero/common/minimap/mcworld/$MinimapClientWorldData" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $ClientboundRulesPacket, $ClientboundRulesPacket$$Type } from "packages/xaero/common/message/basic/$ClientboundRulesPacket"

export class $MinimapClientWorldData {
constructor(clientLevel0: $ClientLevel$$Type)

public "getServerModNetworkVersion"(): integer
public "getSyncedRules"(): $ClientboundRulesPacket
public "setServerModNetworkVersion"(int0: integer): void
public "setSyncedRules"(clientboundRulesPacket0: $ClientboundRulesPacket$$Type): void
get "serverLevelId"(): integer
set "serverLevelId"(value: integer)
get "shadowB"(): float
set "shadowB"(value: float)
get "shadowG"(): float
set "shadowG"(value: float)
get "shadowR"(): float
set "shadowR"(value: float)
get "serverModNetworkVersion"(): integer
get "syncedRules"(): $ClientboundRulesPacket
set "serverModNetworkVersion"(value: integer)
set "syncedRules"(value: $ClientboundRulesPacket$$Type)
}
}

declare module "packages/xaero/common/gui/widget/$Widget" {
import { $WidgetType, $WidgetType$$Type } from "packages/xaero/common/gui/widget/$WidgetType"
import { $Class, $Class$$Type } from "packages/java/lang/$Class"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ClickAction, $ClickAction$$Type } from "packages/xaero/common/gui/widget/$ClickAction"
import { $HoverAction, $HoverAction$$Type } from "packages/xaero/common/gui/widget/$HoverAction"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export class $Widget {
constructor(widgetType0: $WidgetType$$Type, class1: $Class$$Type<$Screen$$Type>, float2: float, float3: float, clickAction4: $ClickAction$$Type, hoverAction5: $HoverAction$$Type, int6: integer, int7: integer, string8: string, string9: string)

public "getBoxH"(double0: double): integer
public "getBoxW"(double0: double): integer
public "getBoxX"(int0: integer, double1: double): integer
public "getBoxY"(int0: integer, double1: double): integer
public "getCursorBox"(): $CursorBox
public "getH"(): integer
public "getHorizontalAnchor"(): float
public "getLocation"(): $Class<$Screen>
public "getOnClick"(): $ClickAction
public "getOnHover"(): $HoverAction
public "getTooltip"(): string
public "getType"(): $WidgetType
public "getUrl"(): string
public "getVerticalAnchor"(): float
public "getW"(): integer
public "getX"(int0: integer): integer
public "getY"(int0: integer): integer
get "cursorBox"(): $CursorBox
get "h"(): integer
get "horizontalAnchor"(): float
get "location"(): $Class<$Screen>
get "onClick"(): $ClickAction
get "onHover"(): $HoverAction
get "tooltip"(): string
get "type"(): $WidgetType
get "url"(): string
get "verticalAnchor"(): float
get "w"(): integer
}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager" {
import { $MinimapWorldConnectionManager } from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import { $WaypointWorld$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointWorld"

/** @deprecated */
export class $WaypointWorldConnectionManager extends $MinimapWorldConnectionManager {
/** @deprecated */
constructor()
/** @deprecated */
constructor(boolean0: boolean)

/** @deprecated */
public "addConnection"(waypointWorld0: $WaypointWorld$$Type, waypointWorld1: $WaypointWorld$$Type): void
/** @deprecated */
public "isConnected"(waypointWorld0: $WaypointWorld$$Type, waypointWorld1: $WaypointWorld$$Type): boolean
/** @deprecated */
public "removeConnection"(waypointWorld0: $WaypointWorld$$Type, waypointWorld1: $WaypointWorld$$Type): void
/** @deprecated */
public "swapConnections"(waypointWorld0: $WaypointWorld$$Type, waypointWorld1: $WaypointWorld$$Type): void
}
}

declare module "packages/xaero/common/minimap/info/$InfoDisplayManager" {
import { $InfoDisplayManager as $InfoDisplayManager$0 } from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InfoDisplay, $InfoDisplay$$Type } from "packages/xaero/common/minimap/info/$InfoDisplay"

/** @deprecated */
export class $InfoDisplayManager extends $InfoDisplayManager$0 {
constructor()

/** @deprecated */
public "add"(infoDisplay0: $InfoDisplay$$Type<any>): void
/** @deprecated */
public "get"(string0: string): $InfoDisplay<any>
/** @deprecated */
public "getStream"(): $Stream<$InfoDisplay<any>>
get "stream"(): $Stream<$InfoDisplay<any>>
}
}

declare module "packages/xaero/common/gui/$GuiSettings" {
import { $AbstractWidget, $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $WidgetScreen, $WidgetScreen$$Type } from "packages/xaero/common/gui/widget/$WidgetScreen"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $ScreenBase } from "packages/xaero/common/gui/$ScreenBase"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ISettingEntry, $ISettingEntry$$Type } from "packages/xaero/common/gui/$ISettingEntry"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $Optional } from "packages/java/util/$Optional"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $GuiSettings extends $ScreenBase implements $WidgetScreen {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, component1: $Component$$Type, screen2: $Screen$$Type, screen3: $Screen$$Type)

public "addButtonVisible"(abstractWidget0: $AbstractWidget$$Type): void
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getEntriesCopy"(): $ISettingEntry[]
public "getIndex"(guiEventListener0: $GuiEventListener$$Type): integer
public "getScreen"<S extends ($Screen & $WidgetScreen)>(): S
public "getTabOrderGroup"(): integer
public "handler$ckk000$adjustEntriesPerPage"(ci: $CallbackInfo$$Type): void
public "handler$ckk000$adjustForwardBackButtonPositionsForExtraRows"(ci: $CallbackInfo$$Type): void
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_7856_"(): void
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "redirect$ckk000$settingListToRenderRedirect"(instance: $ArrayList$$Type<any>, entryObject: any): boolean
public "restoreFocus"(int0: integer): void
public "setFocused"(boolean0: boolean): void
public "setShouldSaveRadar"(): void
public "wrapOperation$ckk000$adjustSettingEntryWidth"(instance: $ISettingEntry$$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$$Type<any>, i: integer): $AbstractWidget
public "wrapOperation$ckk000$adjustSettingEntryWidth$mixinextras$bridge$32"(instance: $ISettingEntry$$Type, x: integer, y: integer, w: integer, canEditIngameSettings: boolean, original: $Operation$$Type<any>, i: $LocalIntRef$$Type): $AbstractWidget
get "currentFocusPath"(): $ComponentPath
get "entriesCopy"(): $ISettingEntry[]
get "screen"(): S
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer" {
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $InfoDisplayRenderer as $InfoDisplayRenderer$0 } from "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer"
import { $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

/** @deprecated */
export class $InfoDisplayRenderer extends $InfoDisplayRenderer$0 {
constructor()

/** @deprecated */
public "render"(guiGraphics0: $GuiGraphics$$Type, xaeroMinimapSession1: $XaeroMinimapSession$$Type, minimapProcessor2: $MinimapProcessor$$Type, minimap3: $Minimap$$Type, minimapRendererHelper4: $MinimapRendererHelper$$Type, int5: integer, int6: integer, int7: integer, int8: integer, double9: double, int10: integer, int11: integer, int12: integer, int13: integer, blockPos14: $BlockPos$$Type, int15: integer, int16: integer, float17: float, modSettings18: $ModSettings$$Type, bufferSource19: $MultiBufferSource$BufferSource$$Type): void
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointRenderProvider" {
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $WaypointMapRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import { $WaypointRenderProvider as $WaypointRenderProvider$0 } from "packages/xaero/hud/minimap/waypoint/render/$WaypointRenderProvider"

/** @deprecated */
export class $WaypointRenderProvider extends $WaypointRenderProvider$0 {
constructor()

public "begin"(int0: integer, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): void
public "end"(int0: integer, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): void
public "getNext"(int0: integer, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): $Waypoint
public "hasNext"(int0: integer, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): boolean
public "setupContextAndGetNext"(int0: integer, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): $Waypoint
}
}

declare module "packages/xaero/common/misc/$ListFactory" {
import { $List } from "packages/java/util/$List"

export interface $ListFactory {
"get"<T>(): $List<T>
}

export namespace $ListFactory {
const probejs$$marker: never
}
export abstract class $ListFactory$$Static implements $ListFactory {
}
}

declare module "packages/xaero/common/minimap/render/$MinimapRenderer" {
import { $GlStateManager$DestFactor$$Type } from "packages/com/mojang/blaze3d/platform/$GlStateManager$DestFactor"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapFBORenderer$$Type } from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $CompassRenderer$$Type } from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CustomVertexConsumers$$Type } from "packages/xaero/common/graphics/$CustomVertexConsumers"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $GlStateManager$SourceFactor$$Type } from "packages/com/mojang/blaze3d/platform/$GlStateManager$SourceFactor"
import { $WaypointMapRenderer$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"
import { $MinimapRendererHelper } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapRenderer {
static readonly "black": integer
static readonly "slime": integer

constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, minecraft1: $Minecraft$$Type, waypointMapRenderer2: $WaypointMapRenderer$$Type, minimap3: $Minimap$$Type, compassRenderer4: $CompassRenderer$$Type)

public "getHelper"(): $MinimapRendererHelper
/** @deprecated */
public "getLastPlayerDimDiv"(): double
public "getRenderAngle"(boolean0: boolean): double
public "getSunBrightness"(minimapProcessor0: $MinimapProcessor$$Type, boolean1: boolean): float
public "getZoom"(): double
public "handler$cme000$resetFBOSize"(ci: $CallbackInfo$$Type, minimap: $MinimapProcessor$$Type): void
public "handler$cme000$shiftRenderZHead"(ci: $CallbackInfo$$Type, guiGraphics: $GuiGraphics$$Type): void
public "handler$cme000$shiftRenderZPost"(ci: $CallbackInfo$$Type, guiGraphics: $GuiGraphics$$Type): void
public "modify$cme000$setOvermapRendererZoom"(zoom: double): double
public "modifyExpressionValue$cme000$fixMainEntityDotOffset"(original: integer): integer
public "modifyExpressionValue$cme000$modifyMinimapSizeConstantF"(constant: float): float
public "modifyExpressionValue$cme000$modifyMinimapSizeConstantFCircle"(constant: float): float
public "modifyExpressionValue$cme000$modifyMinimapSizeConstantI"(constant: integer): integer
public "renderMinimap"(minimapSession0: $MinimapSession$$Type, guiGraphics1: $GuiGraphics$$Type, minimapProcessor2: $MinimapProcessor$$Type, int3: integer, int4: integer, int5: integer, int6: integer, double7: double, int8: integer, float9: float, customVertexConsumers10: $CustomVertexConsumers$$Type): void
public "setZoom"(double0: double): void
public "wrapOperation$cme000$correctBlendingForFpsLimiter"(sourceFactor: $GlStateManager$SourceFactor$$Type, destFactor: $GlStateManager$DestFactor$$Type, sourceFactor2: $GlStateManager$SourceFactor$$Type, destFactor2: $GlStateManager$DestFactor$$Type, original: $Operation$$Type<any>): void
public "wrapWithCondition$cme000$redirectRenderMainEntityDot"(instance: $MinimapFBORenderer$$Type, guiGraphics: $GuiGraphics$$Type, renderEntity: $Entity$$Type, cave: boolean, renderTypeBuffers: $MultiBufferSource$BufferSource$$Type, lockedNorth: boolean): boolean
get "helper"(): $MinimapRendererHelper
get "lastPlayerDimDiv"(): double
get "zoom"(): double
set "zoom"(value: double)
}
}

declare module "packages/xaero/common/core/$IXaeroMinimapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IXaeroMinimapMinecraftClient {
"getXaeroMinimap_fps"(): integer
get "xaeroMinimap_fps"(): integer
}

export namespace $IXaeroMinimapMinecraftClient {
const probejs$$marker: never
}
export abstract class $IXaeroMinimapMinecraftClient$$Static implements $IXaeroMinimapMinecraftClient {
}
}

declare module "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer" {
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $SyncedTrackedPlayer {
constructor(uUID0: $UUID$$Type, double1: double, double2: double, double3: double, resourceKey4: $ResourceKey$$Type<$Level>)

public "copyFrom"(syncedTrackedPlayer0: $SyncedTrackedPlayer$$Type): void
/** @deprecated */
public "getDimension"(): $ResourceLocation
public "getDimensionKey"(): $ResourceKey<$Level>
public "getId"(): $UUID
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "matchesEnough"(player0: $Player$$Type, double1: double): boolean
public "setDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $SyncedTrackedPlayer
public "setPos"(double0: double, double1: double, double2: double): $SyncedTrackedPlayer
public "update"(player0: $Player$$Type): void
get "dimension"(): $ResourceLocation
get "dimensionKey"(): $ResourceKey<$Level>
get "id"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
set "dimension"(value: $ResourceKey$$Type<$Level>)
}
}

declare module "packages/xaero/common/patreon/$PatreonMod" {
import { $File, $File$$Type } from "packages/java/io/$File"
import { $Runnable, $Runnable$$Type } from "packages/java/lang/$Runnable"

export class $PatreonMod {
constructor(string0: string, string1: string, string2: string, string3: string)

get "changelogLink"(): string
set "changelogLink"(value: string)
get "currentVersion"(): string
set "currentVersion"(value: string)
get "fileLayoutID"(): string
set "fileLayoutID"(value: string)
get "latestVersion"(): string
set "latestVersion"(value: string)
get "latestVersionLayout"(): string
set "latestVersionLayout"(value: string)
get "md5"(): string
set "md5"(value: string)
get "modJar"(): $File
set "modJar"(value: $File$$Type)
get "modName"(): string
set "modName"(value: string)
get "onVersionIgnore"(): $Runnable
set "onVersionIgnore"(value: $Runnable$$Type)
}
}

declare module "packages/xaero/common/minimap/write/$MinimapWriter" {
import { $MinimapTile, $MinimapTile$$Type } from "packages/xaero/common/minimap/region/$MinimapTile"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MinimapChunk, $MinimapChunk$$Type } from "packages/xaero/common/minimap/region/$MinimapChunk"
import { $Heightmap$Types$$Type } from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockPos$MutableBlockPos$$Type } from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import { $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $MinimapWriterHelper$$Type } from "packages/xaero/common/minimap/write/$MinimapWriterHelper"
import { $Block } from "packages/net/minecraft/world/level/block/$Block"
import { $HighlighterRegistry$$Type } from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import { $LevelChunk$$Type } from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import { $DimensionHighlighterHandler } from "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler"
import { $List$$Type } from "packages/java/util/$List"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $MinimapWriter {
static readonly "NO_Y_VALUE": integer
static readonly "SUN_MINIMUM": integer

constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, minimapSession1: $MinimapSession$$Type, blockStateShortShapeCache2: $BlockStateShortShapeCache$$Type, highlighterRegistry3: $HighlighterRegistry$$Type)

public "cleanup"(): void
public "findBlock"(level0: $Level$$Type, levelChunk1: $LevelChunk$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, mutableBlockPos8: $BlockPos$MutableBlockPos$$Type, mutableBlockPos9: $BlockPos$MutableBlockPos$$Type, int10: integer, boolean11: boolean, list12: $List$$Type<integer>, list13: $List$$Type<$BlockState$$Type>, int14: integer, boolean15: boolean, list16: $List$$Type<integer>, boolean17: boolean, boolean18: boolean, mutableBlockPos19: $BlockPos$MutableBlockPos$$Type, boolean20: boolean): $Block
public "getBlockBrightness"(float0: float, int1: integer, int2: integer, int3: integer): float
public "getDimensionHighlightHandler"(): $DimensionHighlighterHandler
public "getFixedSkyLightBlockBrightness"(float0: float, float1: float, int2: integer): float
public "getLoadSide"(): integer
public "getLoadedBlocks"(): $MinimapChunk[][]
public "getLoadedCaving"(): integer
public "getLoadedLevels"(): integer
public "getLoadedMapChunkX"(): integer
public "getLoadedMapChunkZ"(): integer
public "getLoadedSideInChunks"(): integer
public "getLoadingMapChunkX"(): integer
public "getLoadingMapChunkZ"(): integer
public "getLoadingSideInChunks"(): integer
public "getMapCoord"(int0: integer, int1: integer): integer
public "getSectionBasedHeight"(levelChunk0: $LevelChunk$$Type, int1: integer): integer
public "getUpdateRadiusInChunks"(): integer
public "isLoadedNonWorldMap"(): boolean
public "loadBlockColor"(int0: integer, level1: $Level$$Type, int2: integer, int3: integer, levelChunk4: $LevelChunk$$Type, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, types10: $Heightmap$Types$$Type, minimapTile11: $MinimapTile$$Type, minimapChunk12: $MinimapChunk$$Type, minimapChunk13: $MinimapChunk$$Type, minimapChunk14: $MinimapChunk$$Type, minimapChunk15: $MinimapChunk$$Type, float16: float, float17: float, float18: float, boolean19: boolean, boolean20: boolean, int21: integer, int22: integer, int23: integer, boolean24: boolean, int25: integer, int26: integer, boolean27: boolean, float28: float, int29: integer, boolean30: boolean, list31: $List$$Type<integer>, list32: $List$$Type<$BlockState$$Type>, list33: $List$$Type<integer>, int34s: integer[], int35s: integer[], int36s: integer[], float37s: float[], float38s: float[], int39s: integer[], int40s: integer[], int41s: integer[], int42s: integer[], boolean43: boolean, int44: integer, mutableBlockPos45: $BlockPos$MutableBlockPos$$Type, mutableBlockPos46: $BlockPos$MutableBlockPos$$Type, long47: long, int48: integer, iXaeroMinimap49: $IXaeroMinimap$$Type, minimapWriterHelper50: $MinimapWriterHelper$$Type, int51: integer, boolean52: boolean, boolean53: boolean, int54: integer, int55: integer, int56: integer, int57: integer, boolean58: boolean, boolean59: boolean, boolean60: boolean, boolean61: boolean, mutableBlockPos62: $BlockPos$MutableBlockPos$$Type, boolean63: boolean): $MinimapTile
public "modifyExpressionValue$cmi000$overrideLoadSide"(constant: integer): integer
public "onRender"(): void
public "resetShortBlocks"(): void
public "setClearBlockColours"(boolean0: boolean): void
public "setupDimensionHighlightHandler"(resourceKey0: $ResourceKey$$Type<$Level>): void
get "averageTimeDebug"(): long
set "averageTimeDebug"(value: long)
get "debugTotalTime"(): boolean
set "debugTotalTime"(value: boolean)
get "lastDebugTime"(): long
set "lastDebugTime"(value: long)
get "loadedLightOverlayColor"(): integer
set "loadedLightOverlayColor"(value: integer)
get "loadedLightOverlayMaxLight"(): integer
set "loadedLightOverlayMaxLight"(value: integer)
get "loadedLightOverlayMinLight"(): integer
set "loadedLightOverlayMinLight"(value: integer)
get "loadedLightOverlayType"(): integer
set "loadedLightOverlayType"(value: integer)
get "loadingLightOverlayColor"(): integer
set "loadingLightOverlayColor"(value: integer)
get "loadingLightOverlayMaxLight"(): integer
set "loadingLightOverlayMaxLight"(value: integer)
get "loadingLightOverlayMinLight"(): integer
set "loadingLightOverlayMinLight"(value: integer)
get "loadingLightOverlayType"(): integer
set "loadingLightOverlayType"(value: integer)
get "maxTime"(): long
set "maxTime"(value: long)
get "maxTimeDebug"(): long
set "maxTimeDebug"(value: long)
get "minTime"(): long
set "minTime"(value: long)
get "minTimeDebug"(): long
set "minTimeDebug"(value: long)
get "totalRuns"(): long
set "totalRuns"(value: long)
get "totalTime"(): long
set "totalTime"(value: long)
get "writeFreeSinceLastWrite"(): long
set "writeFreeSinceLastWrite"(value: long)
get "dimensionHighlightHandler"(): $DimensionHighlighterHandler
get "loadSide"(): integer
get "loadedBlocks"(): $MinimapChunk[][]
get "loadedCaving"(): integer
get "loadedLevels"(): integer
get "loadedMapChunkX"(): integer
get "loadedMapChunkZ"(): integer
get "loadedSideInChunks"(): integer
get "loadingMapChunkX"(): integer
get "loadingMapChunkZ"(): integer
get "loadingSideInChunks"(): integer
get "updateRadiusInChunks"(): integer
get "loadedNonWorldMap"(): boolean
set "clearBlockColours"(value: boolean)
set "upDimensionHighlightHandler"(value: $ResourceKey$$Type<$Level>)
}
}

declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer" {
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $MultiTextureRenderTypeRenderer {
public "begin"(int0: integer): $BufferBuilder
}
}

declare module "packages/xaero/common/mods/$SupportXaeroWorldmap" {
import { $RadarRenderer$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ModOptions$$Type } from "packages/xaero/common/settings/$ModOptions"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $LocalRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiTextureRenderTypeRendererProvider$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $MapRegion$$Type } from "packages/xaero/map/region/$MapRegion"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $HighlighterRegistry$$Type } from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import { $MapTileChunk$$Type } from "packages/xaero/map/region/$MapTileChunk"
import { $MapProcessor$$Type } from "packages/xaero/map/$MapProcessor"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $WorldMapSession$$Type } from "packages/xaero/map/$WorldMapSession"

export class $SupportXaeroWorldmap {
static readonly "MINIMAP_MW": string
static "WORLDMAP_COMPATIBILITY_VERSION": integer
static readonly "black": integer
static readonly "slime": integer

constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "bumpLoadedRegion"(mapProcessor0: $MapProcessor$$Type, mapRegion1: $MapRegion$$Type): void
public "caveLayersAreUsable"(): boolean
public "confirmPlayerRadarRender"(player0: $Player$$Type): void
public "createRadarRenderWrapper"(radarRenderer0: $RadarRenderer$$Type): void
public "drawMinimap"(minimapSession0: $MinimapSession$$Type, poseStack1: $PoseStack$$Type, minimapRendererHelper2: $MinimapRendererHelper$$Type, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, double10: double, double11: double, vertexConsumer12: $VertexConsumer$$Type, multiTextureRenderTypeRendererProvider13: $MultiTextureRenderTypeRendererProvider$$Type): void
public "getAdjustHeightForCarpetLikeBlocks"(): boolean
public "getBiomeBlending"(): boolean
public "getCaveModeDepth"(): integer
public "getCaveModeType"(): integer
public "getClaimsBorderOpacity"(): integer
public "getClaimsFillOpacity"(): integer
public "getDisplayClaims"(): boolean
public "getManualCaveStart"(): integer
public "getMapDimension"(): $ResourceKey<$Level>
public "getMapDimensionScale"(): double
public "getMinimapBrightness"(): float
public "getMultiworldIds"(resourceKey0: $ResourceKey$$Type<$Level>): $List<string>
public "getPartialYTeleport"(): boolean
public "getPotentialMultiworldIds"(resourceKey0: $ResourceKey$$Type<$Level>): $List<string>
public "getWorldMapBiomeColorsVanillaMode"(): boolean
public "getWorldMapColours"(): integer
public "getWorldMapFlowers"(): boolean
public "getWorldMapIgnoreHeightmaps"(): boolean
public "getWorldMapTerrainDepth"(): boolean
public "getWorldMapTerrainSlopes"(): integer
public "getWorldMapWaypoints"(): boolean
public "handler$cmp000$buildTransparentMMBg"(ci: $CallbackInfo$$Type, bgBufferBuilderRef: $LocalRef$$Type<any>, matrixStack: $PoseStack$$Type, drawX: integer, drawZ: integer, chunk: $MapTileChunk$$Type): void
public "handler$cmp000$drawTransparentMMBackground"(ci: $CallbackInfo$$Type, bgTesselatorRef: $LocalRef$$Type<any>): void
public "handler$cmp000$overrideRegionRange"(ci: $CallbackInfo$$Type, mapX: integer, mapZ: integer, minXRef: $LocalIntRef$$Type, maxXRef: $LocalIntRef$$Type, minZRef: $LocalIntRef$$Type, maxZRef: $LocalIntRef$$Type): void
public "handler$cmp000$preventPossibleNPE"(cir: $CallbackInfoReturnable$$Type<any>, session: $WorldMapSession$$Type): void
public "handler$cmp000$setupTransparentMMBgBuffer"(ci: $CallbackInfo$$Type, bgTesselatorRef: $LocalRef$$Type<any>, bgBufferBuilderRef: $LocalRef$$Type<any>): void
public "hasDimensionSwitching"(): boolean
public "hasEnabledCaveLayers"(): boolean
public "hasTrackedPlayerSystemSupport"(): boolean
public "isLegibleCaveMaps"(): boolean
public "isMultiplayerMap"(): boolean
public "isStainedGlassDisplayed"(): boolean
public "openScreenForOption"(modOptions0: $ModOptions$$Type): void
public "openSettings"(): void
public "prepareMapTexturedRect"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, int3: integer, int4: integer, float5: float, float6: float, mapTileChunk7: $MapTileChunk$$Type, multiTextureRenderTypeRenderer8: $MultiTextureRenderTypeRenderer$$Type, multiTextureRenderTypeRenderer9: $MultiTextureRenderTypeRenderer$$Type, minimapRendererHelper10: $MinimapRendererHelper$$Type): void
public "registerHighlighters"(highlighterRegistry0: $HighlighterRegistry$$Type): void
public "renderSlimeChunks"(mapTileChunk0: $MapTileChunk$$Type, long1: long, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, minimapRendererHelper5: $MinimapRendererHelper$$Type, vertexConsumer6: $VertexConsumer$$Type): void
public "screenShouldSkipWorldRender"(screen0: $Screen$$Type): boolean
public "shouldAlwaysInitEffects"(): boolean
public "shouldPreventAutoCaveMode"(level0: $Level$$Type): boolean
public "supportsPacPlayerRadarFilter"(): boolean
public "toggleChunkClaims"(): void
public "tryToGetMultiworldId"(resourceKey0: $ResourceKey$$Type<$Level>): string
public "tryToGetMultiworldName"(resourceKey0: $ResourceKey$$Type<$Level>, string1: string): string
public "worldMapIsRenderingRadar"(): boolean
public "wrapWithCondition$cmp000$hideSlimeChunksWhileDimSwitched"(instance: $SupportXaeroWorldmap$$Type, chunk: $MapTileChunk$$Type, seed: long, drawX: integer, drawZ: integer, matrixStack: $PoseStack$$Type, helper: $MinimapRendererHelper$$Type, overlayBufferBuilder: $VertexConsumer$$Type): boolean
get "compatibilityVersion"(): integer
set "compatibilityVersion"(value: integer)
get "adjustHeightForCarpetLikeBlocks"(): boolean
get "biomeBlending"(): boolean
get "caveModeDepth"(): integer
get "caveModeType"(): integer
get "claimsBorderOpacity"(): integer
get "claimsFillOpacity"(): integer
get "displayClaims"(): boolean
get "manualCaveStart"(): integer
get "mapDimension"(): $ResourceKey<$Level>
get "mapDimensionScale"(): double
get "minimapBrightness"(): float
get "partialYTeleport"(): boolean
get "worldMapBiomeColorsVanillaMode"(): boolean
get "worldMapColours"(): integer
get "worldMapFlowers"(): boolean
get "worldMapIgnoreHeightmaps"(): boolean
get "worldMapTerrainDepth"(): boolean
get "worldMapTerrainSlopes"(): integer
get "worldMapWaypoints"(): boolean
get "legibleCaveMaps"(): boolean
get "multiplayerMap"(): boolean
get "stainedGlassDisplayed"(): boolean
}
}

declare module "packages/xaero/common/minimap/radar/$MinimapRadar" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $MinimapRadarList } from "packages/xaero/common/minimap/radar/$MinimapRadarList"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $EntityRadarCategoryManager, $EntityRadarCategoryManager$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import { $Iterator } from "packages/java/util/$Iterator"
import { $RadarSession } from "packages/xaero/hud/minimap/radar/$RadarSession"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** @deprecated */
export class $MinimapRadar extends $RadarSession {
/** @deprecated */
constructor(entityRadarCategoryManager0: $EntityRadarCategoryManager$$Type)

/** @deprecated */
public "getEntityBrightness"(float0: float, int1: integer, int2: integer, boolean3: boolean): float
/** @deprecated */
public "getEntityCategoryManager"(): $EntityRadarCategoryManager
/** @deprecated */
public "getEntityColour"(player0: $Player$$Type, entity1: $Entity$$Type, float2: float, boolean3: boolean, entityRadarCategory4: $EntityRadarCategory$$Type, int5: integer, int6: integer, boolean7: boolean, int8: integer): integer
/** @deprecated */
public "getEntityX"(entity0: $Entity$$Type, float1: float): double
/** @deprecated */
public "getEntityY"(entity0: $Entity$$Type, float1: float): double
/** @deprecated */
public "getEntityZ"(entity0: $Entity$$Type, float1: float): double
/** @deprecated */
public "getMaxDistance"(minimapProcessor0: $MinimapProcessor$$Type, boolean1: boolean): double
/** @deprecated */
public "getRadarListsIterator"(): $Iterator<$MinimapRadarList>
/** @deprecated */
public "getTeamColour"(entity0: $Entity$$Type): integer
/** @deprecated */
public "setLastRenderViewEntity"(entity0: $Entity$$Type): void
/** @deprecated */
public "updateRadar"(clientLevel0: $ClientLevel$$Type, player1: $Player$$Type, entity2: $Entity$$Type, minimapProcessor3: $MinimapProcessor$$Type): void
get "entityCategoryManager"(): $EntityRadarCategoryManager
get "radarListsIterator"(): $Iterator<$MinimapRadarList>
set "lastRenderViewEntity"(value: $Entity$$Type)
}
}

declare module "packages/xaero/common/$XaeroMinimapSession" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $MinimapProcessor } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $WaypointsManager } from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import { $IXaeroMinimap } from "packages/xaero/common/$IXaeroMinimap"
import { $HudSession } from "packages/xaero/hud/$HudSession"
import { $WaypointSharingHandler } from "packages/xaero/common/minimap/waypoints/$WaypointSharingHandler"

/** @deprecated */
export class $XaeroMinimapSession extends $HudSession {
constructor(hudMod0: $HudMod$$Type)

public static "getCurrentSession"(): $XaeroMinimapSession
public static "getForPlayer"(localPlayer0: $LocalPlayer$$Type): $XaeroMinimapSession
public "getMinimapProcessor"(): $MinimapProcessor
public "getModMain"(): $IXaeroMinimap
public "getWaypointSharing"(): $WaypointSharingHandler
public "getWaypointsManager"(): $WaypointsManager
get "minimapProcessor"(): $MinimapProcessor
get "modMain"(): $IXaeroMinimap
get "waypointSharing"(): $WaypointSharingHandler
get "waypointsManager"(): $WaypointsManager
}
}

declare module "packages/xaero/common/validator/$WaypointCoordinateFieldValidator" {
import { $NumericFieldValidator } from "packages/xaero/common/validator/$NumericFieldValidator"

export class $WaypointCoordinateFieldValidator extends $NumericFieldValidator {
constructor()

}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointSet" {
import { $WaypointSet as $WaypointSet$0 } from "packages/xaero/hud/minimap/waypoint/set/$WaypointSet"
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $ArrayList } from "packages/java/util/$ArrayList"

/** @deprecated */
export class $WaypointSet extends $WaypointSet$0 {
/** @deprecated */
constructor(string0: string)

/** @deprecated */
public "getList"(): $ArrayList<$Waypoint>
get "list"(): $ArrayList<$Waypoint>
}
}

declare module "packages/xaero/common/minimap/highlight/$DimensionHighlighterHandler" {
import { $InfoDisplayCompiler$$Type } from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import { $HighlighterRegistry$$Type } from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MinimapWriter$$Type } from "packages/xaero/common/minimap/write/$MinimapWriter"

export class $DimensionHighlighterHandler {
constructor(resourceKey0: $ResourceKey$$Type<$Level>, highlighterRegistry1: $HighlighterRegistry$$Type, minimapWriter2: $MinimapWriter$$Type)

public "addBlockHighlightTooltips"(infoDisplayCompiler0: $InfoDisplayCompiler$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "applyChunkHighlightColors"(int0: integer, int1: integer): integer[]
public "getVersion"(): integer
public "requestRefresh"(): void
public "requestRefresh"(int0: integer, int1: integer): void
public "shouldApplyRegionHighlights"(int0: integer, int1: integer, boolean2: boolean): boolean
public "shouldApplyTileChunkHighlights"(int0: integer, int1: integer, int2: integer, int3: integer, boolean4: boolean): boolean
get "version"(): integer
}
}

declare module "packages/xaero/common/$PlatformContext" {
import { $ClientEvents } from "packages/xaero/common/events/$ClientEvents"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MinimapMessageHandler } from "packages/xaero/common/message/$MinimapMessageHandler"
import { $MinimapWriter } from "packages/xaero/common/minimap/write/$MinimapWriter"
import { $PlatformContextLoaderClientOnly } from "packages/xaero/common/$PlatformContextLoaderClientOnly"
import { $HighlighterRegistry$$Type } from "packages/xaero/common/minimap/highlight/$HighlighterRegistry"
import { $ModClientEvents } from "packages/xaero/common/events/$ModClientEvents"
import { $CommonEvents } from "packages/xaero/common/events/$CommonEvents"
import { $BlockStateShortShapeCache$$Type } from "packages/xaero/common/cache/$BlockStateShortShapeCache"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $PlatformContextLoaderCommon } from "packages/xaero/common/$PlatformContextLoaderCommon"
import { $SupportMods } from "packages/xaero/common/mods/$SupportMods"
import { $ModCommonEvents } from "packages/xaero/common/events/$ModCommonEvents"

export class $PlatformContext {
constructor()

public "createClientEvents"(iXaeroMinimap0: $IXaeroMinimap$$Type): $ClientEvents
public "createCommonEvents"(iXaeroMinimap0: $IXaeroMinimap$$Type): $CommonEvents
public "createMessageHandler"(iXaeroMinimap0: $IXaeroMinimap$$Type): $MinimapMessageHandler
public "createMinimapWriter"(iXaeroMinimap0: $IXaeroMinimap$$Type, minimapSession1: $MinimapSession$$Type, blockStateShortShapeCache2: $BlockStateShortShapeCache$$Type, highlighterRegistry3: $HighlighterRegistry$$Type): $MinimapWriter
public "createModClientEvents"(iXaeroMinimap0: $IXaeroMinimap$$Type): $ModClientEvents
public "createModCommonEvents"(iXaeroMinimap0: $IXaeroMinimap$$Type): $ModCommonEvents
public "createSupportMods"(iXaeroMinimap0: $IXaeroMinimap$$Type): $SupportMods
public "getLoaderClientOnly"(): $PlatformContextLoaderClientOnly
public "getLoaderCommon"(): $PlatformContextLoaderCommon
public "getModInfoVersion"(): string
get "loaderClientOnly"(): $PlatformContextLoaderClientOnly
get "loaderCommon"(): $PlatformContextLoaderCommon
get "modInfoVersion"(): string
}
}

declare module "packages/xaero/common/graphics/$CursorBox" {
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ArrayList$$Type } from "packages/java/util/$ArrayList"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $CursorBox implements $Supplier<$CursorBox> {
constructor(int0: integer)
constructor(component0: $Component$$Type, boolean1: boolean)
constructor(component0: $Component$$Type)
constructor(string0: string)
constructor(string0: string, style1: $Style$$Type)
constructor(string0: string, style1: $Style$$Type, boolean2: boolean)

public "createLines"(component0: $Component$$Type): void
public "drawBox"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "get"(): $CursorBox
public "getFullCode"(): string
public "getLine"(int0: integer): $Component
public "getPlainText"(): string
public "setAutoLinebreak"(boolean0: boolean): void
public "setStartWidth"(int0: integer): void
public "splitWords"(arrayList0: $ArrayList$$Type<$Component$$Type>, formattedText1: $FormattedText$$Type): void
public "withWidth"(int0: integer): $CursorBox
get "fullCode"(): string
get "plainText"(): string
set "autoLinebreak"(value: boolean)
set "startWidth"(value: integer)
}
}

declare module "packages/xaero/common/gui/widget/$WidgetScreenHandler" {
import { $AccessorWidgetScreenHandler } from "packages/xaeroplus/mixin/client/$AccessorWidgetScreenHandler"
import { $WidgetScreen$$Type } from "packages/xaero/common/gui/widget/$WidgetScreen"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $WidgetScreenHandler implements $AccessorWidgetScreenHandler {
constructor()

public "handleClick"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer, int4: integer, double5: double): void
public "initialize"(widgetScreen0: $WidgetScreen$$Type, int1: integer, int2: integer): void
public "render"(guiGraphics0: $GuiGraphics$$Type, widgetScreen1: $WidgetScreen$$Type, int2: integer, int3: integer, int4: integer, int5: integer, double6: double): void
public "renderTooltips"(guiGraphics0: $GuiGraphics$$Type, screen1: $Screen$$Type, int2: integer, int3: integer, int4: integer, int5: integer, double6: double): boolean
}
}

declare module "packages/xaero/common/gui/widget/$HoverAction" {
import { $Enum } from "packages/java/lang/$Enum"

export class $HoverAction extends $Enum<$HoverAction> {
static readonly "NOTHING": $HoverAction
static readonly "TOOLTIP": $HoverAction

public static "valueOf"(string0: string): $HoverAction
public static "values"(): $HoverAction[]
}
}

declare module "packages/xaero/common/minimap/waypoints/$Waypoint" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $WaypointVisibilityType, $WaypointVisibilityType$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointVisibilityType"
import { $Camera$$Type } from "packages/net/minecraft/client/$Camera"
import { $Vec3 } from "packages/net/minecraft/world/phys/$Vec3"
import { $WaypointColor, $WaypointColor$$Type } from "packages/xaero/hud/minimap/waypoint/$WaypointColor"
import { $WaypointPurpose, $WaypointPurpose$$Type } from "packages/xaero/hud/minimap/waypoint/$WaypointPurpose"

export class $Waypoint implements $Comparable<$Waypoint> {
static readonly "ONEOFF_DESTINATION_REMOVE_DISTANCE": integer
static readonly "ONEOFF_DESTINATION_SAFE_FOR": integer
static "RENDER_SORTING_POS": $Vec3

/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, int5: integer)
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, waypointColor5: $WaypointColor$$Type, waypointPurpose6: $WaypointPurpose$$Type, boolean7: boolean, boolean8: boolean)
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, waypointColor5: $WaypointColor$$Type, waypointPurpose6: $WaypointPurpose$$Type, boolean7: boolean)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, int5: integer, int6: integer)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, int5: integer, int6: integer, boolean7: boolean)
/** @deprecated */
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean)
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, waypointColor5: $WaypointColor$$Type)
constructor(int0: integer, int1: integer, int2: integer, string3: string, string4: string, waypointColor5: $WaypointColor$$Type, waypointPurpose6: $WaypointPurpose$$Type)

public "compareTo"(waypoint0: $Waypoint$$Type): integer
/** @deprecated */
public "getActualColor"(): integer
/** @deprecated */
public "getColor"(): integer
public "getComparisonAngleCos"(camera0: $Camera$$Type, double1: double): double
public "getComparisonDistance"(camera0: $Camera$$Type, double1: double): double
public "getComparisonName"(): string
public "getCreatedAt"(): long
public "getDistanceSq"(double0: double, double1: double, double2: double): double
public "getInitials"(): string
public "getInitialsSafe"(string0: string): string
public "getLocalizedName"(): string
public "getName"(): string
public "getNameSafe"(string0: string): string
public "getPurpose"(): $WaypointPurpose
public static "getStringFromStringSafe"(string0: string, string1: string): string
/** @deprecated */
public "getSymbol"(): string
/** @deprecated */
public "getSymbolSafe"(string0: string): string
public "getVisibility"(): $WaypointVisibilityType
/** @deprecated */
public "getVisibilityType"(): integer
public "getWaypointColor"(): $WaypointColor
/** @deprecated */
public "getWaypointType"(): integer
public "getX"(): integer
public "getX"(double0: double): integer
public "getY"(): integer
public "getYaw"(): integer
public "getZ"(): integer
public "getZ"(double0: double): integer
public "isDestination"(): boolean
public "isDisabled"(): boolean
public "isGlobal"(): boolean
/** @deprecated */
public "isOneoffDestination"(): boolean
public "isRotation"(): boolean
public "isServerWaypoint"(): boolean
public "isTemporary"(): boolean
public "isYIncluded"(): boolean
/** @deprecated */
public "setColor"(int0: integer): void
public "setDisabled"(boolean0: boolean): void
public "setInitials"(string0: string): void
public "setName"(string0: string): void
/** @deprecated */
public "setOneoffDestination"(boolean0: boolean): void
public "setPurpose"(waypointPurpose0: $WaypointPurpose$$Type): void
public "setRotation"(boolean0: boolean): void
/** @deprecated */
public "setSymbol"(string0: string): void
public "setTemporary"(boolean0: boolean): void
/** @deprecated */
public "setType"(int0: integer): void
public "setVisibility"(waypointVisibilityType0: $WaypointVisibilityType$$Type): void
/** @deprecated */
public "setVisibilityType"(int0: integer): void
public "setWaypointColor"(waypointColor0: $WaypointColor$$Type): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
public "setYIncluded"(boolean0: boolean): void
public "setYaw"(int0: integer): void
public "setZ"(int0: integer): void
get "actualColor"(): integer
get "color"(): integer
get "comparisonName"(): string
get "createdAt"(): long
get "initials"(): string
get "localizedName"(): string
get "name"(): string
get "purpose"(): $WaypointPurpose
get "symbol"(): string
get "visibility"(): $WaypointVisibilityType
get "visibilityType"(): integer
get "waypointColor"(): $WaypointColor
get "waypointType"(): integer
get "x"(): integer
get "y"(): integer
get "yaw"(): integer
get "z"(): integer
get "destination"(): boolean
get "disabled"(): boolean
get "global"(): boolean
get "oneoffDestination"(): boolean
get "rotation"(): boolean
get "serverWaypoint"(): boolean
get "temporary"(): boolean
get "yIncluded"(): boolean
set "color"(value: integer)
set "disabled"(value: boolean)
set "initials"(value: string)
set "name"(value: string)
set "oneoffDestination"(value: boolean)
set "purpose"(value: $WaypointPurpose$$Type)
set "rotation"(value: boolean)
set "symbol"(value: string)
set "temporary"(value: boolean)
set "type"(value: integer)
set "visibility"(value: $WaypointVisibilityType$$Type)
set "visibilityType"(value: integer)
set "waypointColor"(value: $WaypointColor$$Type)
set "x"(value: integer)
set "y"(value: integer)
set "yIncluded"(value: boolean)
set "yaw"(value: integer)
set "z"(value: integer)
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRenderer" {
import { $MinimapElementReader$$Type } from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import { $MultiTextureRenderTypeRendererProvider$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapElementRenderer as $MinimapElementRenderer$0 } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MinimapElementRenderProvider$$Type } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

/** @deprecated */
export class $MinimapElementRenderer<E, RC> extends $MinimapElementRenderer$0<E, RC> {
/** @deprecated */
constructor(minimapElementReader0: $MinimapElementReader$$Type<E, RC>, minimapElementRenderProvider1: $MinimapElementRenderProvider$$Type<E, RC>, rc2: RC)

/** @deprecated */
public "postRender"(int0: integer, entity1: $Entity$$Type, player2: $Player$$Type, double3: double, double4: double, double5: double, iXaeroMinimap6: $IXaeroMinimap$$Type, bufferSource7: $MultiBufferSource$BufferSource$$Type, multiTextureRenderTypeRendererProvider8: $MultiTextureRenderTypeRendererProvider$$Type): void
/** @deprecated */
public "preRender"(int0: integer, entity1: $Entity$$Type, player2: $Player$$Type, double3: double, double4: double, double5: double, iXaeroMinimap6: $IXaeroMinimap$$Type, bufferSource7: $MultiBufferSource$BufferSource$$Type, multiTextureRenderTypeRendererProvider8: $MultiTextureRenderTypeRendererProvider$$Type): void
/** @deprecated */
public "renderElement"(int0: integer, boolean1: boolean, boolean2: boolean, guiGraphics3: $GuiGraphics$$Type, bufferSource4: $MultiBufferSource$BufferSource$$Type, font5: $Font$$Type, renderTarget6: $RenderTarget$$Type, minimapRendererHelper7: $MinimapRendererHelper$$Type, entity8: $Entity$$Type, player9: $Player$$Type, double10: double, double11: double, double12: double, int13: integer, double14: double, float15: float, e16: E, double17: double, double18: double, boolean19: boolean, float20: float): boolean
/** @deprecated */
public "shouldRender"(int0: integer): boolean
}
}

declare module "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer" {
import { $ISyncedPlayerTrackerSystem } from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportArgonautsServer {
constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
}

declare module "packages/xaero/common/server/$MinecraftServerData" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"
import { $IXaeroMinimap, $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $LevelMapProperties } from "packages/xaero/common/server/level/$LevelMapProperties"
import { $SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$$Type } from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTrackerSystemManager"
import { $SyncedPlayerTracker, $SyncedPlayerTracker$$Type } from "packages/xaero/common/server/radar/tracker/$SyncedPlayerTracker"

export class $MinecraftServerData {
constructor(syncedPlayerTrackerSystemManager0: $SyncedPlayerTrackerSystemManager$$Type, syncedPlayerTracker1: $SyncedPlayerTracker$$Type, iXaeroMinimap2: $IXaeroMinimap$$Type)

public static "get"(minecraftServer0: $MinecraftServer$$Type): $MinecraftServerData
public "getLevelProperties"(path0: $Path$$Type): $LevelMapProperties
public "getModMain"(): $IXaeroMinimap
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "modMain"(): $IXaeroMinimap
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
}

declare module "packages/xaero/common/validator/$FieldValidatorHolder" {
import { $NumericFieldValidator, $NumericFieldValidator$$Type } from "packages/xaero/common/validator/$NumericFieldValidator"
import { $WaypointCoordinateFieldValidator, $WaypointCoordinateFieldValidator$$Type } from "packages/xaero/common/validator/$WaypointCoordinateFieldValidator"

export class $FieldValidatorHolder {
constructor(numericFieldValidator0: $NumericFieldValidator$$Type, waypointCoordinateFieldValidator1: $WaypointCoordinateFieldValidator$$Type)

public "getNumericFieldValidator"(): $NumericFieldValidator
public "getWpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
get "numericFieldValidator"(): $NumericFieldValidator
get "wpCoordFieldValidator"(): $WaypointCoordinateFieldValidator
}
}

declare module "packages/xaero/common/events/$ModCommonEvents" {
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $ModCommonEvents {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

}
}

declare module "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer" {
import { $RadarColor$$Type } from "packages/xaero/hud/minimap/radar/color/$RadarColor"
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $CompassRenderer$$Type } from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import { $MinimapRenderer } from "packages/xaero/common/minimap/render/$MinimapRenderer"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $Iterator$$Type } from "packages/java/util/$Iterator"
import { $WaypointMapRenderer$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapSafeModeRenderer extends $MinimapRenderer {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, minecraft1: $Minecraft$$Type, waypointMapRenderer2: $WaypointMapRenderer$$Type, minimap3: $Minimap$$Type, compassRenderer4: $CompassRenderer$$Type)

public "renderEntityDotSafeMode"(minimapProcessor0: $MinimapProcessor$$Type, entity1: $Entity$$Type, entity2: $Entity$$Type, double3: double, double4: double, int5: integer, int6: integer, int7: integer, int8: integer, double9: double, double10: double, float11: float, int12: integer, boolean13: boolean, int14: integer, radarColor15: $RadarColor$$Type, radarColor16: $RadarColor$$Type, double17: double): boolean
public "renderEntityListSafeMode"(minimapProcessor0: $MinimapProcessor$$Type, entity1: $Entity$$Type, iterator2: $Iterator$$Type<$Entity$$Type>, double3: double, double4: double, int5: integer, int6: integer, int7: integer, int8: integer, double9: double, double10: double, float11: float, int12: integer, boolean13: boolean, int14: integer, radarColor15: $RadarColor$$Type, radarColor16: $RadarColor$$Type, double17: double): void
public "updateMapFrameSafeMode"(minimapSession0: $MinimapSession$$Type, minimapProcessor1: $MinimapProcessor$$Type, player2: $Player$$Type, entity3: $Entity$$Type, int4: integer, int5: integer, float6: float, int7: integer, boolean8: boolean, int9: integer, double10: double, double11: double, boolean12: boolean, modSettings13: $ModSettings$$Type): void
}
}

declare module "packages/xaero/common/$PlatformContextLoaderCommon" {
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $PlatformContextLoaderCommon {
constructor()

public "setup"(iXaeroMinimap0: $IXaeroMinimap$$Type): void
set "up"(value: $IXaeroMinimap$$Type)
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer" {
import { $WaypointGuiRenderContext$$Type } from "packages/xaero/common/minimap/waypoints/render/$WaypointGuiRenderContext"
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $WaypointRenderProvider$$Type } from "packages/xaero/common/minimap/waypoints/render/$WaypointRenderProvider"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $WaypointsGuiRenderer as $WaypointsGuiRenderer$0 } from "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer"
import { $WaypointReader$$Type } from "packages/xaero/common/minimap/waypoints/render/$WaypointReader"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

/** @deprecated */
export class $WaypointsGuiRenderer extends $WaypointsGuiRenderer$0 {
constructor(waypointReader0: $WaypointReader$$Type, waypointRenderProvider1: $WaypointRenderProvider$$Type, waypointGuiRenderContext2: $WaypointGuiRenderContext$$Type)

/** @deprecated */
public "drawIconOnGUI"(guiGraphics0: $GuiGraphics$$Type, minimapRendererHelper1: $MinimapRendererHelper$$Type, waypoint2: $Waypoint$$Type, modSettings3: $ModSettings$$Type, int4: integer, int5: integer, bufferSource6: $MultiBufferSource$BufferSource$$Type, vertexConsumer7: $VertexConsumer$$Type): void
/** @deprecated */
public "renderElement"(int0: integer, boolean1: boolean, boolean2: boolean, guiGraphics3: $GuiGraphics$$Type, bufferSource4: $MultiBufferSource$BufferSource$$Type, font5: $Font$$Type, renderTarget6: $RenderTarget$$Type, minimapRendererHelper7: $MinimapRendererHelper$$Type, entity8: $Entity$$Type, player9: $Player$$Type, double10: double, double11: double, double12: double, int13: integer, double14: double, float15: float, waypoint16: $Waypoint$$Type, double17: double, double18: double, boolean19: boolean, float20: float): boolean
/** @deprecated */
public "updateWaypointCollection"(iXaeroMinimap0: $IXaeroMinimap$$Type): void
}
}

declare module "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer" {
import { $ISyncedPlayerTrackerSystem } from "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem"

export class $SupportFTBTeamsServer {
constructor()

public "getSyncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
get "syncedPlayerTrackerSystem"(): $ISyncedPlayerTrackerSystem
}
}

declare module "packages/xaero/common/events/$ClientEvents" {
import { $LevelAccessor$$Type } from "packages/net/minecraft/world/level/$LevelAccessor"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ToggleKeyMapping$$Type } from "packages/net/minecraft/client/$ToggleKeyMapping"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RealmsServer, $RealmsServer$$Type } from "packages/com/mojang/realmsclient/dto/$RealmsServer"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $GameProfile$$Type } from "packages/com/mojang/authlib/$GameProfile"
import { $ChatType$Bound$$Type } from "packages/net/minecraft/network/chat/$ChatType$Bound"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $ClientEvents {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "getLastGuiOpen"(): any
public "handleClientPlayerChatReceivedEvent"(bound0: $ChatType$Bound$$Type, component1: $Component$$Type, gameProfile2: $GameProfile$$Type): boolean
public "handleClientSendChatEvent"(string0: string): boolean
public "handleClientSystemChatReceivedEvent"(component0: $Component$$Type): boolean
public "handleClientTickStart"(): void
public "handleDrawScreenEventPost"(screen0: $Screen$$Type): void
public "handleForceToggleKeyMapping"(toggleKeyMapping0: $ToggleKeyMapping$$Type): boolean
public "handleGuiOpen"(screen0: $Screen$$Type): $Screen
public "handlePlayerSetSpawnEvent"(blockPos0: $BlockPos$$Type, level1: $Level$$Type): void
public "handlePlayerTickStart"(player0: $Player$$Type): void
public "handleRenderCrosshairOverlay"(guiGraphics0: $GuiGraphics$$Type): boolean
public "handleRenderGameOverlayEventPost"(): void
public "handleRenderGameOverlayEventPre"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "handleRenderStatusEffectOverlay"(guiGraphics0: $GuiGraphics$$Type): boolean
public "handleRenderTickStart"(): void
public "handler$ckj000$onPlayerChatReceived"(chatType: $ChatType$Bound$$Type, component: $Component$$Type, gameProfile: $GameProfile$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "handler$ckj000$onSystemChatReceived"(component: $Component$$Type, cir: $CallbackInfoReturnable$$Type<any>): void
public "worldUnload"(levelAccessor0: $LevelAccessor$$Type): void
get "latestRealm"(): $RealmsServer
set "latestRealm"(value: $RealmsServer$$Type)
get "lastGuiOpen"(): any
}
}

declare module "packages/xaero/common/minimap/info/codec/$InfoDisplayStateCodec" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $InfoDisplayStateCodec as $InfoDisplayStateCodec$0 } from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

/** @deprecated */
export class $InfoDisplayStateCodec<T> extends $InfoDisplayStateCodec$0<T> {
/** @deprecated */
constructor(function0: $Function$$Type<string, T>, function1: $Function$$Type<T, string>)

/** @deprecated */
public "decode"(string0: string): T
}
}

declare module "packages/xaero/common/interfaces/render/$InterfaceRenderer" {
import { $CustomVertexConsumers } from "packages/xaero/common/graphics/$CustomVertexConsumers"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

/** @deprecated */
export class $InterfaceRenderer {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "getCustomVertexConsumers"(): $CustomVertexConsumers
get "customVertexConsumers"(): $CustomVertexConsumers
}
}

declare module "packages/xaero/common/server/radar/tracker/$ISyncedPlayerTrackerSystem" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"

export interface $ISyncedPlayerTrackerSystem {
"getTrackingLevel"(player0: $Player$$Type, player1: $Player$$Type): integer
"isPartySystem"(): boolean
get "partySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
export abstract class $ISyncedPlayerTrackerSystem$$Static implements $ISyncedPlayerTrackerSystem {
}
}

declare module "packages/xaero/common/minimap/$MinimapInterface" {
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $Minimap } from "packages/xaero/hud/minimap/$Minimap"

/** @deprecated */
export class $MinimapInterface extends $Minimap {
constructor(hudMod0: $HudMod$$Type)

}
}

declare module "packages/xaero/common/minimap/highlight/$HighlighterRegistry" {
import { $List } from "packages/java/util/$List"
import { $AbstractHighlighter, $AbstractHighlighter$$Type } from "packages/xaero/common/minimap/highlight/$AbstractHighlighter"

export class $HighlighterRegistry {
constructor()

public "end"(): void
public "getHighlighters"(): $List<$AbstractHighlighter>
public "register"(abstractHighlighter0: $AbstractHighlighter$$Type): void
get "highlighters"(): $List<$AbstractHighlighter>
}
}

declare module "packages/xaero/common/minimap/$MinimapProcessor" {
import { $MinimapInterface } from "packages/xaero/common/minimap/$MinimapInterface"
import { $MinimapSession, $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$$Type } from "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $MinimapWriter, $MinimapWriter$$Type } from "packages/xaero/common/minimap/write/$MinimapWriter"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $CustomVertexConsumers$$Type } from "packages/xaero/common/graphics/$CustomVertexConsumers"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $RadarSession, $RadarSession$$Type } from "packages/xaero/hud/minimap/radar/$RadarSession"
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$0 } from "packages/xaero/common/minimap/radar/tracker/synced/$ClientSyncedTrackedPlayerManager"
import { $MinimapRadar } from "packages/xaero/common/minimap/radar/$MinimapRadar"

export class $MinimapProcessor {
static readonly "DEBUG": boolean
static readonly "FRAME": integer

constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, minimapSession1: $MinimapSession$$Type, minimapWriter2: $MinimapWriter$$Type, radarSession3: $RadarSession$$Type, clientSyncedTrackedPlayerManager4: $ClientSyncedTrackedPlayerManager$$Type)

public "canUseFrameBuffer"(): boolean
public "checkFBO"(): void
public "cleanup"(): void
/** @deprecated */
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
/** @deprecated */
public "getEntityRadar"(): $MinimapRadar
public "getFBOBufferSize"(): integer
public "getForcedFairPlay"(): boolean
public "getLastMapDimension"(): $ResourceKey<$Level>
public "getLastMapDimensionScale"(): double
/** @deprecated */
public "getLastPlayerDimDiv"(): double
public "getMinimapBufferSize"(int0: integer): integer
public "getMinimapInterface"(): $MinimapInterface
public "getMinimapSize"(): integer
public "getMinimapWriter"(): $MinimapWriter
public "getMinimapZoom"(): double
public "getNoMinimapMessageReceived"(): boolean
public "getRadarSession"(): $RadarSession
public "getServerModNetworkVersion"(): integer
public "getSession"(): $MinimapSession
public "getSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getTargetZoom"(): double
public static "hasMinimapItem"(player0: $Player$$Type): boolean
public "instantZoom"(): void
public "isCaveModeDisplayed"(): boolean
public "isEnlargedMap"(): boolean
public "isManualCaveMode"(): boolean
public "isToResetImage"(): boolean
public "onClientTick"(): void
public "onPlayerTick"(): void
public "onRender"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, double5: double, int6: integer, int7: integer, float8: float, customVertexConsumers9: $CustomVertexConsumers$$Type): void
public "serverHasMod"(): boolean
public "setEnlargedMap"(boolean0: boolean): void
public "setFairPlayOnlyMessageReceived"(boolean0: boolean): void
public "setLastMapDimension"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "setLastMapDimensionScale"(double0: double): void
/** @deprecated */
public "setLastPlayerDimDiv"(double0: double): void
public "setNoMinimapMessageReceived"(boolean0: boolean): void
public "setServerModNetworkVersion"(int0: integer): void
public "setToResetImage"(boolean0: boolean): void
public "toggleManualCaveMode"(): void
public "updateZoom"(): void
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager$0
get "entityRadar"(): $MinimapRadar
get "fBOBufferSize"(): integer
get "forcedFairPlay"(): boolean
get "lastMapDimension"(): $ResourceKey<$Level>
get "lastMapDimensionScale"(): double
get "lastPlayerDimDiv"(): double
get "minimapInterface"(): $MinimapInterface
get "minimapSize"(): integer
get "minimapWriter"(): $MinimapWriter
get "minimapZoom"(): double
get "noMinimapMessageReceived"(): boolean
get "radarSession"(): $RadarSession
get "serverModNetworkVersion"(): integer
get "session"(): $MinimapSession
get "syncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "targetZoom"(): double
get "caveModeDisplayed"(): boolean
get "enlargedMap"(): boolean
get "manualCaveMode"(): boolean
get "toResetImage"(): boolean
set "enlargedMap"(value: boolean)
set "fairPlayOnlyMessageReceived"(value: boolean)
set "lastMapDimension"(value: $ResourceKey$$Type<$Level>)
set "lastMapDimensionScale"(value: double)
set "lastPlayerDimDiv"(value: double)
set "noMinimapMessageReceived"(value: boolean)
set "serverModNetworkVersion"(value: integer)
set "toResetImage"(value: boolean)
}
}

declare module "packages/xaero/common/server/mods/$SupportServerMods" {
import { $SupportFTBTeamsServer } from "packages/xaero/common/server/mods/ftbteams/$SupportFTBTeamsServer"
import { $SupportOPACServer } from "packages/xaero/common/server/mods/opac/$SupportOPACServer"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $SupportWorldMapServer } from "packages/xaero/common/server/mods/$SupportWorldMapServer"
import { $SupportArgonautsServer } from "packages/xaero/common/server/mods/argonauts/$SupportArgonautsServer"

export class $SupportServerMods {
constructor()

public "check"(iXaeroMinimap0: $IXaeroMinimap$$Type): void
public "getArgonauts"(): $SupportArgonautsServer
public "getFtbTeams"(): $SupportFTBTeamsServer
public "getOpac"(): $SupportOPACServer
public "getWorldmap"(): $SupportWorldMapServer
public "hasArgonauts"(): boolean
public "hasFtbTeams"(): boolean
public "hasOpac"(): boolean
public "hasWorldmap"(): boolean
get "argonauts"(): $SupportArgonautsServer
get "ftbTeams"(): $SupportFTBTeamsServer
get "opac"(): $SupportOPACServer
get "worldmap"(): $SupportWorldMapServer
}
}

declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayOnCompile" {
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $InfoDisplay$$Type } from "packages/xaero/common/minimap/info/$InfoDisplay"
import { $InfoDisplayCompiler$$Type } from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

/** @deprecated */
export interface $InfoDisplayOnCompile<T> {
/** @deprecated */
"onCompile"(infoDisplay0: $InfoDisplay$$Type<T>, infoDisplayCompiler1: $InfoDisplayCompiler$$Type, xaeroMinimapSession2: $XaeroMinimapSession$$Type, minimapProcessor3: $MinimapProcessor$$Type, int4: integer, int5: integer, int6: integer, int7: integer, double8: double, int9: integer, int10: integer, int11: integer, int12: integer, blockPos13: $BlockPos$$Type): void
}

export namespace $InfoDisplayOnCompile {
const probejs$$marker: never
}
export abstract class $InfoDisplayOnCompile$$Static<T> implements $InfoDisplayOnCompile<T> {
}
}

declare module "packages/xaero/common/events/$ModClientEvents" {
import { $TextureAtlas$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ModClientEvents {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "handleRenderModOverlay"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "handleTextureStitchEventPost"(textureAtlas0: $TextureAtlas$$Type): void
public "handler$cmj000$handleRenderModOverlayHead"(ci: $CallbackInfo$$Type): void
public "handler$cmj000$handleRenderModOverlayReturn"(ci: $CallbackInfo$$Type): void
}
}

declare module "packages/xaero/common/mods/$SupportFramedBlocks" {
import { $BlockEntity$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import { $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $BlockState, $BlockState$$Type } from "packages/net/minecraft/world/level/block/state/$BlockState"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"

export class $SupportFramedBlocks {
constructor()

public "isFrameBlock"(level0: $Level$$Type, registry1: $Registry$$Type<$Block$$Type>, blockState2: $BlockState$$Type): boolean
public "onWorldChange"(): void
public "unpackFramedBlock"(level0: $Level$$Type, registry1: $Registry$$Type<$Block$$Type>, blockState2: $BlockState$$Type, blockEntity3: $BlockEntity$$Type): $BlockState
}
}

declare module "packages/xaero/common/minimap/region/$MinimapTile" {
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $List } from "packages/java/util/$List"

export class $MinimapTile {
static "recycled": $List<$MinimapTile>

constructor(modSettings0: $ModSettings$$Type, int1: integer, int2: integer, long3: long)

public static "getANewTile"(modSettings0: $ModSettings$$Type, int1: integer, int2: integer, long3: long): $MinimapTile
public "getBlue"(int0: integer, int1: integer, int2: integer): integer
public "getGreen"(int0: integer, int1: integer, int2: integer): integer
public "getHeight"(int0: integer, int1: integer): integer
public "getHighlightVersion"(): integer
public "getHighlights"(): integer[]
public "getRed"(int0: integer, int1: integer, int2: integer): integer
public "getX"(): integer
public "getZ"(): integer
public "hasTerrain"(): boolean
public "isChunkGrid"(): boolean
public "isHasSomething"(): boolean
public "isSlimeChunk"(): boolean
public static "isSlimeChunk"(modSettings0: $ModSettings$$Type, int1: integer, int2: integer, long3: long): boolean
public "isSuccess"(): boolean
public "isWasTransfered"(): boolean
public "pixelChanged"(int0: integer, int1: integer, long2: long, byte3: byte, byte4: byte, byte5: byte, byte6: byte): boolean
public "recycle"(): void
public "setCode"(int0: integer, int1: integer, long2: long, byte3: byte, byte4: byte, byte5: byte, byte6: byte): void
public "setHasSomething"(boolean0: boolean): void
public "setHasTerrain"(boolean0: boolean): void
public "setHeight"(int0: integer, int1: integer, int2: integer): void
public "setHighlightVersion"(int0: integer): void
public "setHighlights"(int0s: integer[]): void
public "setRGB"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "setSuccess"(boolean0: boolean): void
public "setWasTransfered"(boolean0: boolean): void
get "caveLevel"(): integer
set "caveLevel"(value: integer)
get "highlightVersion"(): integer
get "highlights"(): integer[]
get "x"(): integer
get "z"(): integer
get "chunkGrid"(): boolean
get "hasSomething"(): boolean
get "slimeChunk"(): boolean
get "success"(): boolean
get "wasTransfered"(): boolean
set "hasSomething"(value: boolean)
set "highlightVersion"(value: integer)
set "highlights"(value: integer[])
set "success"(value: boolean)
set "wasTransfered"(value: boolean)
}
}

declare module "packages/xaero/common/config/$CommonConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonConfig {
readonly "registerStatusEffects": boolean

get "allowCaveModeOnServer"(): boolean
set "allowCaveModeOnServer"(value: boolean)
get "allowNetherCaveModeOnServer"(): boolean
set "allowNetherCaveModeOnServer"(value: boolean)
get "allowRadarOnServer"(): boolean
set "allowRadarOnServer"(value: boolean)
get "everyoneTracksEveryone"(): boolean
set "everyoneTracksEveryone"(value: boolean)
}
}

declare module "packages/xaero/common/config/$CommonConfigIO" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $CommonConfig, $CommonConfig$$Type } from "packages/xaero/common/config/$CommonConfig"

export class $CommonConfigIO {
constructor(path0: $Path$$Type)

public "load"(): $CommonConfig
public "save"(commonConfig0: $CommonConfig$$Type): void
}
}

declare module "packages/xaero/common/gui/$MyOptions" {
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $OptionsScreen } from "packages/net/minecraft/client/gui/screens/$OptionsScreen"
import { $Optional } from "packages/java/util/$Optional"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiSettings$$Type } from "packages/xaero/common/gui/$GuiSettings"

export class $MyOptions extends $OptionsScreen {
constructor(string0: string, guiSettings1: $GuiSettings$$Type, screen2: $Screen$$Type, options3: $Options$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_7856_"(): void
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler" {
import { $MinimapElementRenderer$$Type } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import { $MinimapElementRendererHandler as $MinimapElementRendererHandler$0 } from "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler"

/** @deprecated */
export class $MinimapElementRendererHandler extends $MinimapElementRendererHandler$0 {
/** @deprecated */
public "add"(minimapElementRenderer0: $MinimapElementRenderer$$Type<any, any>): void
}
}

declare module "packages/xaero/common/graphics/$CustomVertexConsumers" {
import { $MultiBufferSource$BufferSource } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {
constructor()

public "getBetterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "betterPVPRenderTypeBuffers"(): $MultiBufferSource$BufferSource
}
}

declare module "packages/xaero/common/minimap/highlight/$AbstractHighlighter" {
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $InfoDisplayCompiler$$Type } from "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler"

export class $AbstractHighlighter {
public "addBlockHighlightTooltips"(infoDisplayCompiler0: $InfoDisplayCompiler$$Type, resourceKey1: $ResourceKey$$Type<$Level>, int2: integer, int3: integer, int4: integer): void
public "chunkIsHighlit"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): boolean
public "getChunkHighlitColor"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): integer[]
public "isCoveringOutsideDiscovered"(): boolean
public "regionHasHighlights"(resourceKey0: $ResourceKey$$Type<$Level>, int1: integer, int2: integer): boolean
get "coveringOutsideDiscovered"(): boolean
}
}

declare module "packages/xaero/common/minimap/info/render/compile/$InfoDisplayCompiler" {
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $InfoDisplayCompiler as $InfoDisplayCompiler$0 } from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $List } from "packages/java/util/$List"
import { $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $InfoDisplay$$Type } from "packages/xaero/common/minimap/info/$InfoDisplay"

/** @deprecated */
export class $InfoDisplayCompiler extends $InfoDisplayCompiler$0 {
constructor()

/** @deprecated */
public "addWords"(int0: integer, string1: string): void
/** @deprecated */
public "compile"<T>(infoDisplay0: $InfoDisplay$$Type<T>, xaeroMinimapSession1: $XaeroMinimapSession$$Type, minimapProcessor2: $MinimapProcessor$$Type, int3: integer, int4: integer, int5: integer, int6: integer, double7: double, int8: integer, int9: integer, int10: integer, int11: integer, blockPos12: $BlockPos$$Type): $List<$Component>
}
}

declare module "packages/xaero/common/core/$IAbstractSelectionList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAbstractSelectionList {
"getWidth"(): integer
get "width"(): integer
}

export namespace $IAbstractSelectionList {
const probejs$$marker: never
}
export abstract class $IAbstractSelectionList$$Static implements $IAbstractSelectionList {
}
}

declare module "packages/xaero/common/minimap/info/widget/$InfoDisplayWidgetFactory" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $InfoDisplay$$Type } from "packages/xaero/common/minimap/info/$InfoDisplay"

/** @deprecated */
export interface $InfoDisplayWidgetFactory<T> {
/** @deprecated */
"create"(int0: integer, int1: integer, int2: integer, int3: integer, infoDisplay4: $InfoDisplay$$Type<T>, modSettings5: $ModSettings$$Type): $AbstractWidget
}

export namespace $InfoDisplayWidgetFactory {
const probejs$$marker: never
}
export abstract class $InfoDisplayWidgetFactory$$Static<T> implements $InfoDisplayWidgetFactory<T> {
}
}

declare module "packages/xaero/common/message/$MinimapMessageHandler" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $MinimapMessage, $MinimapMessage$$Type } from "packages/xaero/common/message/$MinimapMessage"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $ClientMessageConsumer$$Type } from "packages/xaero/common/message/client/$ClientMessageConsumer"
import { $ServerMessageConsumer$$Type } from "packages/xaero/common/message/server/$ServerMessageConsumer"

export class $MinimapMessageHandler {
static readonly "NETWORK_COMPATIBILITY": integer

constructor()

public "register"<T extends $MinimapMessage<T>>(int0: integer, class1: $Class$$Type<T>, serverMessageConsumer2: $ServerMessageConsumer$$Type<T>, clientMessageConsumer3: $ClientMessageConsumer$$Type<T>, function4: $Function$$Type<$FriendlyByteBuf$$Type, T>, biConsumer5: $BiConsumer$$Type<T, $FriendlyByteBuf$$Type>): void
public "sendToPlayer"<T extends $MinimapMessage<T>>(serverPlayer0: $ServerPlayer$$Type, t1: T): void
public "sendToServer"<T extends $MinimapMessage<T>>(t0: T): void
}
}

declare module "packages/xaero/common/mods/$SupportMods" {
import { $SupportIris, $SupportIris$$Type } from "packages/xaero/common/mods/$SupportIris"
import { $SupportOpenPartiesAndClaims, $SupportOpenPartiesAndClaims$$Type } from "packages/xaero/common/mods/pac/$SupportOpenPartiesAndClaims"
import { $SupportFramedBlocks, $SupportFramedBlocks$$Type } from "packages/xaero/common/mods/$SupportFramedBlocks"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $SupportXaeroWorldmap, $SupportXaeroWorldmap$$Type } from "packages/xaero/common/mods/$SupportXaeroWorldmap"

export class $SupportMods {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public static "checkForMinimapDuplicates"(string0: string): void
public "framedBlocks"(): boolean
public "pac"(): boolean
public "shouldUseWorldMapCaveChunks"(): boolean
public "shouldUseWorldMapChunks"(): boolean
public "worldmap"(): boolean
get "ftbTeams"(): boolean
set "ftbTeams"(value: boolean)
get "iris"(): boolean
set "iris"(value: boolean)
get "optifine"(): boolean
set "optifine"(value: boolean)
get "supportFramedBlocks"(): $SupportFramedBlocks
set "supportFramedBlocks"(value: $SupportFramedBlocks$$Type)
get "supportIris"(): $SupportIris
set "supportIris"(value: $SupportIris$$Type)
get "vivecraft"(): boolean
set "vivecraft"(value: boolean)
get "worldmapSupport"(): $SupportXaeroWorldmap
set "worldmapSupport"(value: $SupportXaeroWorldmap$$Type)
get "xaeroPac"(): $SupportOpenPartiesAndClaims
set "xaeroPac"(value: $SupportOpenPartiesAndClaims$$Type)
}
}

declare module "packages/xaero/common/minimap/write/$MinimapWriterHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapWriterHelper {
constructor()

}
}

declare module "packages/xaero/common/minimap/waypoints/$WaypointWorldRootContainer" {
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldRootContainer } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $XaeroMinimapSession$$Type } from "packages/xaero/common/$XaeroMinimapSession"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $WaypointWorldConnectionManager } from "packages/xaero/common/minimap/waypoints/$WaypointWorldConnectionManager"

/** @deprecated */
export class $WaypointWorldRootContainer extends $MinimapWorldRootContainer {
/** @deprecated */
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, xaeroMinimapSession1: $XaeroMinimapSession$$Type, string2: string)
/** @deprecated */
constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type, xaeroPath2: $XaeroPath$$Type)

/** @deprecated */
public "getSubWorldConnections"(): $WaypointWorldConnectionManager
/** @deprecated */
public "loadConfig"(): void
/** @deprecated */
public "saveConfig"(): void
/** @deprecated */
public "updateConnectionsField"(xaeroMinimapSession0: $XaeroMinimapSession$$Type): void
get "subWorldConnections"(): $WaypointWorldConnectionManager
}
}

declare module "packages/xaero/common/graphics/$CustomRenderTypes$EntityIconLayerPhases" {
import { $RenderStateShard$ShaderStateShard, $RenderStateShard$ShaderStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$ShaderStateShard"
import { $RenderStateShard$DepthTestStateShard, $RenderStateShard$DepthTestStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$DepthTestStateShard"
import { $RenderStateShard$TextureStateShard, $RenderStateShard$TextureStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$TextureStateShard"
import { $RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$TransparencyStateShard"
import { $RenderStateShard$WriteMaskStateShard, $RenderStateShard$WriteMaskStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$WriteMaskStateShard"
import { $RenderStateShard$CullStateShard, $RenderStateShard$CullStateShard$$Type } from "packages/net/minecraft/client/renderer/$RenderStateShard$CullStateShard"

export class $CustomRenderTypes$EntityIconLayerPhases {
constructor(object0: any, object1: any, object2: any, object3: any, object4: any, object5: any)

get "cull"(): $RenderStateShard$CullStateShard
set "cull"(value: $RenderStateShard$CullStateShard$$Type)
get "depthTest"(): $RenderStateShard$DepthTestStateShard
set "depthTest"(value: $RenderStateShard$DepthTestStateShard$$Type)
get "shader"(): $RenderStateShard$ShaderStateShard
set "shader"(value: $RenderStateShard$ShaderStateShard$$Type)
get "texture"(): $RenderStateShard$TextureStateShard
set "texture"(value: $RenderStateShard$TextureStateShard$$Type)
get "transparency"(): $RenderStateShard$TransparencyStateShard
set "transparency"(value: $RenderStateShard$TransparencyStateShard$$Type)
get "writeMask"(): $RenderStateShard$WriteMaskStateShard
set "writeMask"(value: $RenderStateShard$WriteMaskStateShard$$Type)
}
}

declare module "packages/xaero/common/minimap/render/$MinimapFBORenderer" {
import { $RadarRenderer } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer"
import { $RadarRenderer as $RadarRenderer$0 } from "packages/xaero/common/minimap/render/radar/element/$RadarRenderer"
import { $LocalIntRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalIntRef"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Operation$$Type } from "packages/com/llamalad7/mixinextras/injector/wrapoperation/$Operation"
import { $MinimapRenderer } from "packages/xaero/common/minimap/render/$MinimapRenderer"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $CustomVertexConsumers$$Type } from "packages/xaero/common/graphics/$CustomVertexConsumers"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CustomMinimapFBORenderer } from "packages/xaeroplus/feature/extensions/$CustomMinimapFBORenderer"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"
import { $LocalRef$$Type } from "packages/com/llamalad7/mixinextras/sugar/ref/$LocalRef"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiTextureRenderTypeRendererProvider$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $CompassRenderer$$Type } from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $MinimapProcessor$$Type } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $SupportXaeroWorldmap$$Type } from "packages/xaero/common/mods/$SupportXaeroWorldmap"
import { $WaypointMapRenderer$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

export class $MinimapFBORenderer extends $MinimapRenderer implements $CustomMinimapFBORenderer {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type, minecraft1: $Minecraft$$Type, waypointMapRenderer2: $WaypointMapRenderer$$Type, minimap3: $Minimap$$Type, compassRenderer4: $CompassRenderer$$Type)

public "deleteFramebuffers"(): void
public "getEntityRadarRenderer"(): $RadarRenderer
/** @deprecated */
public "getRadarRenderer"(): $RadarRenderer$0
public "handler$cmb000$correctPostRotationTranslationForSizeMult"(ci: $CallbackInfo$$Type, halfWView: float, shaderMatrixStack: $PoseStack$$Type): void
public "handler$cmb000$modifyScaledSize"(ci: $CallbackInfo$$Type, scaledSize: $LocalIntRef$$Type): void
public "isLoadedFBO"(): boolean
public "isTriedFBO"(): boolean
public "loadFrameBuffer"(minimapProcessor0: $MinimapProcessor$$Type): void
public "modify$cmb000$modifyChunkGridLineWidth"(original: float): float
public "modify$cmb000$modifyViewW"(viewW: integer): integer
public "modifyExpressionValue$cmb000$overrideFrameBufferSize"(size: integer): integer
public "onEntityIconModelPartRenderTrace"(modelPart0: $ModelPart$$Type, float1: float, float2: float, float3: float, float4: float): void
public "onRadarIconModelRenderTrace"(entityModel0: $EntityModel$$Type<any>, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float): void
public "redirect$cmb000$correctPreRotationTranslationForSizeMult"(instance: $PoseStack$$Type, x: float, y: float, z: float): void
public "redirect$cmb000$modifyMMBackgroundFill"(guiGraphics: $GuiGraphics$$Type, x1: integer, y1: integer, x2: integer, y2: integer, color: integer, scaledSize: $LocalIntRef$$Type): void
public "redirect$cmb000$modifyShaderMatrixStackTranslate"(instance: $PoseStack$$Type, x: float, y: float, z: float, scaledSize: $LocalIntRef$$Type): void
public "redirect$cmb000$redirectModelViewDraw"(instance: $MinimapRendererHelper$$Type, matrixStack: $PoseStack$$Type, x: float, y: float, textureX: integer, textureY: integer, width: float, height: float, theight: float, factor: float, scaledSize: $LocalIntRef$$Type): void
public "reloadMapFrameBuffers"(): void
public "renderChunksToFBO"(minimapSession0: $MinimapSession$$Type, guiGraphics1: $GuiGraphics$$Type, minimapProcessor2: $MinimapProcessor$$Type, vec33: $Vec3$$Type, resourceKey4: $ResourceKey$$Type<$Level>, double5: double, int6: integer, float7: float, int8: integer, boolean9: boolean, boolean10: boolean, int11: integer, double12: double, double13: double, boolean14: boolean, customVertexConsumers15: $CustomVertexConsumers$$Type): void
public "renderMainEntityDot"(guiGraphics0: $GuiGraphics$$Type, entity1: $Entity$$Type, boolean2: boolean, bufferSource3: $MultiBufferSource$BufferSource$$Type): void
public "resetEntityIcons"(): void
public "resetEntityIconsResources"(): void
public "setLoadedFBO"(boolean0: boolean): void
public "wrapOperation$cmb000$drawMinimapFeatures"(instance: $SupportXaeroWorldmap$$Type, minimapSession: $MinimapSession$$Type, matrixStack: $PoseStack$$Type, helper: $MinimapRendererHelper$$Type, xFloored: integer, zFloored: integer, minViewX: integer, minViewZ: integer, maxViewX: integer, maxViewZ: integer, zooming: boolean, zoom: double, mapDimensionScale: double, overlayBufferBuilder: $VertexConsumer$$Type, multiTextureRenderTypeRenderers: $MultiTextureRenderTypeRendererProvider$$Type, original: $Operation$$Type<any>, renderTypeBuffers: $MultiBufferSource$BufferSource$$Type): void
public "wrapOperation$cmb000$drawMinimapFeatures$mixinextras$bridge$28"(instance: $SupportXaeroWorldmap$$Type, minimapSession: $MinimapSession$$Type, matrixStack: $PoseStack$$Type, helper: $MinimapRendererHelper$$Type, xFloored: integer, zFloored: integer, minViewX: integer, minViewZ: integer, maxViewX: integer, maxViewZ: integer, zooming: boolean, zoom: double, mapDimensionScale: double, overlayBufferBuilder: $VertexConsumer$$Type, multiTextureRenderTypeRenderers: $MultiTextureRenderTypeRendererProvider$$Type, original: $Operation$$Type<any>, renderTypeBuffers: $LocalRef$$Type<any>): void
public "wrapOperation$cmb000$drawMinimapFeaturesCaveMode"(instance: $MultiTextureRenderTypeRendererProvider$$Type, renderer: $MultiTextureRenderTypeRenderer$$Type, original: $Operation$$Type<any>, xFloored: integer, zFloored: integer, matrixStack: $PoseStack$$Type, renderTypeBuffers: $MultiBufferSource$BufferSource$$Type): void
public "wrapOperation$cmb000$drawMinimapFeaturesCaveMode$mixinextras$bridge$29"(instance: $MultiTextureRenderTypeRendererProvider$$Type, renderer: $MultiTextureRenderTypeRenderer$$Type, original: $Operation$$Type<any>, xFloored: $LocalIntRef$$Type, zFloored: $LocalIntRef$$Type, matrixStack: $LocalRef$$Type<any>, renderTypeBuffers: $LocalRef$$Type<any>): void
get "entityRadarRenderer"(): $RadarRenderer
get "radarRenderer"(): $RadarRenderer$0
get "loadedFBO"(): boolean
get "triedFBO"(): boolean
set "loadedFBO"(value: boolean)
}
}

declare module "packages/xaero/common/message/server/$ServerMessageConsumer" {
import { $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $MinimapMessage, $MinimapMessage$$Type } from "packages/xaero/common/message/$MinimapMessage"
import { $MinecraftServer$$Type } from "packages/net/minecraft/server/$MinecraftServer"

export interface $ServerMessageConsumer<T extends $MinimapMessage<T>> {
"handle"(minecraftServer0: $MinecraftServer$$Type, serverPlayer1: $ServerPlayer$$Type, t2: T): void
}

export namespace $ServerMessageConsumer {
const probejs$$marker: never
}
export abstract class $ServerMessageConsumer$$Static<T extends $MinimapMessage<T>> implements $ServerMessageConsumer<T> {
}
}

declare module "packages/xaero/common/message/client/$ClientMessageConsumer" {
import { $MinimapMessage, $MinimapMessage$$Type } from "packages/xaero/common/message/$MinimapMessage"

export interface $ClientMessageConsumer<T extends $MinimapMessage<T>> {
"handle"(t0: T): void
}

export namespace $ClientMessageConsumer {
const probejs$$marker: never
}
export abstract class $ClientMessageConsumer$$Static<T extends $MinimapMessage<T>> implements $ClientMessageConsumer<T> {
}
}

declare module "packages/xaero/common/gui/widget/loader/$WidgetLoader" {
import { $Widget } from "packages/xaero/common/gui/widget/$Widget"
import { $Map$$Type } from "packages/java/util/$Map"

export class $WidgetLoader {
constructor()

public "load"(map0: $Map$$Type<string, string>): $Widget
}
}

declare module "packages/xaero/common/server/level/$LevelMapProperties" {
import { $MinimapMessage } from "packages/xaero/common/message/$MinimapMessage"
import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf"
import { $BufferedReader$$Type } from "packages/java/io/$BufferedReader"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"

export class $LevelMapProperties extends $MinimapMessage<$LevelMapProperties> {
constructor()

public "getId"(): integer
public "isUsable"(): boolean
public "read"(bufferedReader0: $BufferedReader$$Type): void
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $LevelMapProperties
public "setUsable"(boolean0: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(printWriter0: $PrintWriter$$Type): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
}

declare module "packages/xaero/common/mods/$SupportIris" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SupportIris {
constructor()

}
}

declare module "packages/xaero/common/gui/widget/$WidgetType" {
import { $Enum } from "packages/java/lang/$Enum"
import { $WidgetInitializer } from "packages/xaero/common/gui/widget/init/$WidgetInitializer"
import { $WidgetLoader } from "packages/xaero/common/gui/widget/loader/$WidgetLoader"
import { $WidgetRenderer } from "packages/xaero/common/gui/widget/render/$WidgetRenderer"

export class $WidgetType extends $Enum<$WidgetType> {
static readonly "BUTTON": $WidgetType
static readonly "IMAGE": $WidgetType
static readonly "TEXT": $WidgetType
readonly "widgetInit": $WidgetInitializer
readonly "widgetLoader": $WidgetLoader
readonly "widgetRenderer": $WidgetRenderer<any>

public static "valueOf"(string0: string): $WidgetType
public static "values"(): $WidgetType[]
}
}

declare module "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider" {
import { $IntConsumer$$Type } from "packages/java/util/function/$IntConsumer"
import { $MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $MultiTextureRenderTypeRendererProvider {
constructor(int0: integer)

public static "defaultTextureBind"(int0: integer): void
public "draw"(multiTextureRenderTypeRenderer0: $MultiTextureRenderTypeRenderer$$Type): void
public "getRenderer"(intConsumer0: $IntConsumer$$Type, intConsumer1: $IntConsumer$$Type, runnable2: $Runnable$$Type, renderType3: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(intConsumer0: $IntConsumer$$Type, intConsumer1: $IntConsumer$$Type, renderType2: $RenderType$$Type): $MultiTextureRenderTypeRenderer
}
}

declare module "packages/xaero/common/minimap/waypoints/render/$WaypointReader" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $WaypointMapRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import { $WaypointReader as $WaypointReader$0 } from "packages/xaero/hud/minimap/waypoint/render/$WaypointReader"

/** @deprecated */
export class $WaypointReader extends $WaypointReader$0 {
constructor()

/** @deprecated */
public "getBoxScale"(int0: integer, waypoint1: $Waypoint$$Type, waypointMapRenderContext2: $WaypointMapRenderContext$$Type): float
/** @deprecated */
public "isInteractable"(int0: integer, waypoint1: $Waypoint$$Type): boolean
}
}

declare module "packages/xaero/common/server/player/$IServerPlayer" {
import { $ServerPlayerData, $ServerPlayerData$$Type } from "packages/xaero/common/server/player/$ServerPlayerData"

export interface $IServerPlayer {
"getXaeroMinimapPlayerData"(): $ServerPlayerData
"setXaeroMinimapPlayerData"(serverPlayerData0: $ServerPlayerData$$Type): void
get "xaeroMinimapPlayerData"(): $ServerPlayerData
set "xaeroMinimapPlayerData"(value: $ServerPlayerData$$Type)
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
export abstract class $IServerPlayer$$Static implements $IServerPlayer {
}
}

