declare module "packages/xaero/hud/minimap/radar/state/$RadarList" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $EntityRadarCategory, $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarList implements $Comparable<$RadarList> {
public "add"(entity0: $Entity$$Type): boolean
public "clearEntities"(): void
public "compareTo"(radarList0: $RadarList$$Type): integer
public "get"(int0: integer): $Entity
public "getCategory"(): $EntityRadarCategory
public "getEntities"(): $Iterable<$Entity>
public "setCategory"(entityRadarCategory0: $EntityRadarCategory$$Type): $RadarList
public "size"(): integer
get "category"(): $EntityRadarCategory
get "entities"(): $Iterable<$Entity>
set "category"(value: $EntityRadarCategory$$Type)
}
}

declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementCollector" {
import { $PlayerTrackerMinimapElement } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $RenderedPlayerTrackerManager$$Type } from "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $PlayerTrackerMinimapElementCollector {
constructor(renderedPlayerTrackerManager0: $RenderedPlayerTrackerManager$$Type)

public "confirmPlayerRadarRender"(player0: $Player$$Type): void
public "getElements"(): $Iterable<$PlayerTrackerMinimapElement<any>>
public "playerExists"(uUID0: $UUID$$Type): boolean
public "resetRenderedOnRadarFlags"(): void
public "update"(minecraft0: $Minecraft$$Type): void
get "elements"(): $Iterable<$PlayerTrackerMinimapElement<any>>
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode" {
import { $EditorButton$PressActionWithContext } from "packages/xaero/hud/category/ui/entry/widget/$EditorButton$PressActionWithContext"
import { $EditorNode, $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $Supplier } from "packages/java/util/function/$Supplier"

export class $EditorSimpleButtonNode extends $EditorNode {
public "getIsActiveSupplier"(editorNode0: $EditorNode$$Type, editorSimpleButtonNode1: $EditorSimpleButtonNode$$Type): boolean
public "getMessageSupplier"(editorNode0: $EditorNode$$Type, editorSimpleButtonNode1: $EditorSimpleButtonNode$$Type): $Supplier<string>
public "getPressAction"(): $EditorButton$PressActionWithContext
get "pressAction"(): $EditorButton$PressActionWithContext
}
}

declare module "packages/xaero/hud/minimap/waypoint/$DestinationHandler" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $WaypointDeleter$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $DestinationHandler {
constructor(minimapSession0: $MinimapSession$$Type, waypointDeleter1: $WaypointDeleter$$Type)

public "begin"(entity0: $Entity$$Type, minimapWorld1: $MinimapWorld$$Type, boolean2: boolean, boolean3: boolean): void
public "end"(): void
public "handle"(waypoint0: $Waypoint$$Type): void
}
}

declare module "packages/xaero/hud/category/ui/setting/$EditorSettingType" {
import { $EditorSettingType$SettingNodeBuilderFactory } from "packages/xaero/hud/category/ui/setting/$EditorSettingType$SettingNodeBuilderFactory"

export class $EditorSettingType {
static readonly "EXPANDING": $EditorSettingType
static readonly "ITERATION_BUTTON": $EditorSettingType
static readonly "SLIDER": $EditorSettingType

public "getSettingNodeBuilderFactory"(): $EditorSettingType$SettingNodeBuilderFactory
public "isUsingIndices"(): boolean
get "settingNodeBuilderFactory"(): $EditorSettingType$SettingNodeBuilderFactory
get "usingIndices"(): boolean
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointRenderProvider" {
import { $WaypointMapRenderProvider } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderProvider"

/** @deprecated */
export class $WaypointRenderProvider extends $WaypointMapRenderProvider {
constructor()

}
}

declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $WaypointWorldRenderContext } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"
import { $MinimapElementRenderer } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $WaypointWorldRenderer extends $MinimapElementRenderer<$Waypoint, $WaypointWorldRenderContext> {
public "renderElement"(waypoint0: $Waypoint$$Type, boolean1: boolean, boolean2: boolean, double3: double, float4: float, double5: double, double6: double, minimapElementRenderInfo7: $MinimapElementRenderInfo$$Type, guiGraphics8: $GuiGraphics$$Type, bufferSource9: $MultiBufferSource$BufferSource$$Type): boolean
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorNode" {
import { $List } from "packages/java/util/$List"
import { $IEditorDataTooltipSupplier$$Type } from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $EditorListRootEntryFactory, $EditorListRootEntryFactory$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import { $Runnable } from "packages/java/lang/$Runnable"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export class $EditorNode {
constructor(boolean0: boolean, editorListRootEntryFactory1: $EditorListRootEntryFactory$$Type, iEditorDataTooltipSupplier2: $IEditorDataTooltipSupplier$$Type)

public "getDisplayName"(): string
public "getExpandAction"(settingRowList0: $GuiCategoryEditor$SettingRowList$$Type<>): $Runnable
public "getListEntryFactory"(): $EditorListRootEntryFactory
public "getSubNodes"(): $List<$EditorNode>
public "getTooltipSupplier"(editorNode0: $EditorNode$$Type): $Supplier<$CursorBox>
public "isExpanded"(): boolean
public "isMovable"(): boolean
public "setExpanded"(boolean0: boolean): void
get "displayName"(): string
get "listEntryFactory"(): $EditorListRootEntryFactory
get "subNodes"(): $List<$EditorNode>
get "expanded"(): boolean
get "movable"(): boolean
set "expanded"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryFileIO" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $EntityRadarCategory, $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarCategoryFileIO {
public "loadRootCategory"(): $EntityRadarCategory
public "saveRootCategory"(path0: $Path$$Type, string1: string, int2: integer): void
public "saveRootCategory"(entityRadarCategory0: $EntityRadarCategory$$Type): void
}
}

declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $ObjectSelectionList } from "packages/net/minecraft/client/gui/components/$ObjectSelectionList"
import { $GuiCategoryEditor$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor"
import { $Optional } from "packages/java/util/$Optional"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorCategoryNode, $EditorCategoryNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import { $EditorCategoryNodeConverter, $EditorCategoryNodeConverter$$Type } from "packages/xaero/hud/category/ui/$EditorCategoryNodeConverter"
import { $GuiCategoryEditor$SettingRowList$Entry, $GuiCategoryEditor$SettingRowList$Entry$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry"

export class $GuiCategoryEditor$SettingRowList extends $ObjectSelectionList<$GuiCategoryEditor$SettingRowList$Entry<>> {
constructor(guiCategoryEditor0: $GuiCategoryEditor$$Type<any, any, any, any, any, any>, editorCategoryNodeConverter1: $EditorCategoryNodeConverter$$Type<any, any, any, any, any, any>)

public "confirmSelection"(): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getCut"(): ED
public "getDataConverter"(): $EditorCategoryNodeConverter<C, ED, CB, SD, SDB, EDB>
public "getTabOrderGroup"(): integer
public "hasCut"(): boolean
public "isActive"(): boolean
public "isCut"(ed0: ED): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "narrateSelection"(): void
public "pasteTo"(ed0: ED): void
public "restoreScrollAfterUpdate"(): void
public "setCutCategory"(ed0: ED, ed1: ED): void
public "setFocused"(boolean0: boolean): void
public "setLastExpandedData"(editorNode0: $EditorNode$$Type): void
public "setSelected"(entry0: $GuiCategoryEditor$SettingRowList$Entry$$Type<>): void
public "tick"(): void
public "updateEntries"(): void
get "currentFocusPath"(): $ComponentPath
get "cut"(): ED
get "dataConverter"(): $EditorCategoryNodeConverter<C, ED, CB, SD, SDB, EDB>
get "tabOrderGroup"(): integer
get "active"(): boolean
set "focused"(value: boolean)
set "lastExpandedData"(value: $EditorNode$$Type)
set "selected"(value: $GuiCategoryEditor$SettingRowList$Entry$$Type<>)
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder" {
import { $ObjectCategory } from "packages/xaero/hud/category/$ObjectCategory"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $EditorNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import { $EditorAdderNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorAdderNode"
import { $EditorSettingsNode } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import { $EditorCategoryNode } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import { $EditorSettingsNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $EditorCategoryNode$Builder<C extends $ObjectCategory<any, C>, ED extends $EditorCategoryNode<C, SD, ED>, SD extends $EditorSettingsNode<any>, SDB extends $EditorSettingsNode$Builder<SD, SDB>, EDB extends $EditorCategoryNode$Builder<C, ED, SD, SDB, EDB>> extends $EditorNode$Builder<EDB> {
public "addSubCategoryBuilder"(edb0: EDB): EDB
public "getSettingDataBuilder"(): SDB
public "setName"(string0: string): EDB
public "setNewCategorySupplier"(function0: $Function$$Type<$EditorAdderNode$$Type, ED>): EDB
public "setSubIndex"(int0: integer): EDB
get "settingDataBuilder"(): SDB
set "name"(value: string)
set "newCategorySupplier"(value: $Function$$Type<$EditorAdderNode$$Type, ED>)
set "subIndex"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/player/tracker/system/$RenderedPlayerTrackerManager" {
import { $IRenderedPlayerTracker, $IRenderedPlayerTracker$$Type } from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $RenderedPlayerTrackerManager {
public "getAllSystems"(): $Iterable<$IRenderedPlayerTracker<any>>
public "register"(string0: string, iRenderedPlayerTracker1: $IRenderedPlayerTracker$$Type<any>): void
get "allSystems"(): $Iterable<$IRenderedPlayerTracker<any>>
}
}

declare module "packages/xaero/hud/minimap/waypoint/server/$ServerWaypointManager" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $IntIterable } from "packages/it/unimi/dsi/fastutil/ints/$IntIterable"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $ServerWaypointManager {
constructor()

public "add"(int0: integer, waypoint1: $Waypoint$$Type): void
public "addDisabled"(int0: integer): void
public "clear"(): void
public "getById"(int0: integer): $Waypoint
public "getBySlot"(int0: integer): $Waypoint
public "getIds"(): $IntIterable
public "getWaypoints"(): $Iterable<$Waypoint>
public "isEmpty"(): boolean
public "remove"(int0: integer): void
public "size"(): integer
get "ids"(): $IntIterable
get "waypoints"(): $Iterable<$Waypoint>
get "empty"(): boolean
}
}

declare module "packages/xaero/hud/category/ui/entry/widget/$EditorButton" {
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Button } from "packages/net/minecraft/client/gui/components/$Button"
import { $IXaeroNarratableWidget } from "packages/xaero/common/gui/$IXaeroNarratableWidget"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import { $Button$OnPress$$Type } from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $EditorButton extends $Button implements $IXaeroNarratableWidget {
constructor(editorNode0: $EditorNode$$Type, boolean1: boolean, int2: integer, int3: integer, editorNode4: $EditorNode$$Type, settingRowList5: $GuiCategoryEditor$SettingRowList$$Type<>)
constructor(editorNode0: $EditorNode$$Type, supplier1: $Supplier$$Type<string>, boolean2: boolean, int3: integer, int4: integer, onPress5: $Button$OnPress$$Type, settingRowList6: $GuiCategoryEditor$SettingRowList$$Type<>)

public "charTyped"(char0: character, int1: integer): boolean
public "createNarrationMessage"(): $MutableComponent
public "getCurrentFocusPath"(): $ComponentPath
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_5646_"(): $MutableComponent
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "setPosition"(int0: integer, int1: integer): void
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/xaero/hud/category/rule/$ExcludeListMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ExcludeListMode extends $Enum<$ExcludeListMode> {
static readonly "ALL_BUT": $ExcludeListMode
static readonly "ONLY": $ExcludeListMode

public static "valueOf"(string0: string): $ExcludeListMode
public static "values"(): $ExcludeListMode[]
}
}

declare module "packages/xaero/hud/minimap/radar/color/$RadarColorHelper" {
import { $RadarColor, $RadarColor$$Type } from "packages/xaero/hud/minimap/radar/color/$RadarColor"
import { $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarColorHelper {
constructor()

public "getEntityColor"(entity0: $Entity$$Type, float1: float, boolean2: boolean, int3: integer, int4: integer, boolean5: boolean, radarColor6: $RadarColor$$Type, radarColor7: $RadarColor$$Type): integer
public "getEntityHeightFade"(float0: float, int1: integer, int2: integer): float
public "getFallbackColor"(entityRadarCategory0: $EntityRadarCategory$$Type): $RadarColor
public "getTeamColor"(entity0: $Entity$$Type): integer
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo" {
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MinimapElementRenderLocation, $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $RenderTarget, $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $MinimapElementRenderInfo {
readonly "backgroundCoordinateScale": double
readonly "cave": boolean
readonly "framebuffer": $RenderTarget
readonly "location": $MinimapElementRenderLocation
readonly "mapDimension": $ResourceKey<$Level>
readonly "partialTicks": float
readonly "player": $Player
readonly "renderEntity": $Entity
readonly "renderEntityDimension": $ResourceKey<$Level>
readonly "renderEntityDimensionScale": double
readonly "renderEntityPos": $Vec3
readonly "renderPos": $Vec3

constructor(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, entity1: $Entity$$Type, player2: $Player$$Type, vec33: $Vec3$$Type, boolean4: boolean, float5: float, renderTarget6: $RenderTarget$$Type, double7: double, resourceKey8: $ResourceKey$$Type<$Level>)

}
}

declare module "packages/xaero/hud/module/$ModuleManager" {
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $HudModule, $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"

export class $ModuleManager {
constructor()

public "get"(resourceLocation0: $ResourceLocation$$Type): $HudModule<any>
public "getModules"(): $Iterable<$HudModule<any>>
public "register"(hudModule0: $HudModule$$Type<any>): void
get "modules"(): $Iterable<$HudModule<any>>
}
}

declare module "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer" {
import { $ServerWaypointManager } from "packages/xaero/hud/minimap/waypoint/server/$ServerWaypointManager"
import { $Path } from "packages/java/nio/file/$Path"
import { $MinimapWorld, $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $List } from "packages/java/util/$List"
import { $MinimapWorldRootContainer } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $RootConfig } from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import { $XaeroPath, $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $MinimapWorldContainer {
public "addSubContainer"(xaeroPath0: $XaeroPath$$Type): $MinimapWorldContainer
public "addWorld"(string0: string): $MinimapWorld
public "addWorld"(minimapWorld0: $MinimapWorld$$Type): void
public "containsSubContainer"(xaeroPath0: $XaeroPath$$Type): boolean
public "deleteSubContainer"(xaeroPath0: $XaeroPath$$Type): boolean
public "fixPathCharacterCases"(xaeroPath0: $XaeroPath$$Type): $XaeroPath
public "getAllWorldsIterable"(): $Iterable<$MinimapWorld>
public "getDirectoryPath"(): $Path
public "getFirstWorld"(): $MinimapWorld
public "getFirstWorldConnectedTo"(minimapWorld0: $MinimapWorld$$Type): $MinimapWorld
public "getFullWorldName"(string0: string, string1: string): string
public "getLastNode"(): string
public "getName"(string0: string): string
public "getPath"(): $XaeroPath
public "getRoot"(): $MinimapWorldRootContainer
public "getRootConfig"(): $RootConfig
public "getServerWaypointManager"(): $ServerWaypointManager
public "getSession"(): $MinimapSession
public "getSubContainers"(): $Iterable<$MinimapWorldContainer>
public "getSubName"(): string
public "getWorlds"(): $Iterable<$MinimapWorld>
public "getWorldsCopy"(): $List<$MinimapWorld>
public "isEmpty"(): boolean
public "removeName"(string0: string): void
public "removeWorld"(string0: string): void
public "setName"(string0: string, string1: string): void
public "setPath"(xaeroPath0: $XaeroPath$$Type): void
get "allWorldsIterable"(): $Iterable<$MinimapWorld>
get "directoryPath"(): $Path
get "firstWorld"(): $MinimapWorld
get "lastNode"(): string
get "path"(): $XaeroPath
get "root"(): $MinimapWorldRootContainer
get "rootConfig"(): $RootConfig
get "serverWaypointManager"(): $ServerWaypointManager
get "session"(): $MinimapSession
get "subContainers"(): $Iterable<$MinimapWorldContainer>
get "subName"(): string
get "worlds"(): $Iterable<$MinimapWorld>
get "worldsCopy"(): $List<$MinimapWorld>
get "empty"(): boolean
set "path"(value: $XaeroPath$$Type)
}
}

declare module "packages/xaero/hud/category/$ObjectCategory$Builder" {
import { $ObjectCategory, $ObjectCategory$$Type } from "packages/xaero/hud/category/$ObjectCategory"
import { $MapFactory$$Type } from "packages/xaero/common/misc/$MapFactory"
import { $ObjectCategorySetting$$Type } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import { $ListFactory$$Type } from "packages/xaero/common/misc/$ListFactory"

export class $ObjectCategory$Builder<C extends $ObjectCategory<any, C>, B extends $ObjectCategory$Builder<C, B>> {
constructor(listFactory0: $ListFactory$$Type, mapFactory1: $MapFactory$$Type)

public "addSubCategoryBuilder"(b0: B): B
public "build"(): C
public "setDefault"(): B
public "setName"(string0: string): B
public "setProtection"(boolean0: boolean): B
public "setSettingValue"<T>(objectCategorySetting0: $ObjectCategorySetting$$Type<T>, t1: T): B
public "setSuperCategory"(c0: C): B
set "name"(value: string)
set "protection"(value: boolean)
set "superCategory"(value: C)
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorCategoryNode" {
import { $ObjectCategory } from "packages/xaero/hud/category/$ObjectCategory"
import { $List } from "packages/java/util/$List"
import { $EditorSettingsNode } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export class $EditorCategoryNode<C extends $ObjectCategory<any, C>, SD extends $EditorSettingsNode<any>, ED extends $EditorCategoryNode<C, SD, ED>> extends $EditorNode {
public "getCutAction"(ed0: ED, settingRowList1: $GuiCategoryEditor$SettingRowList$$Type<>): $Supplier<boolean>
public "getDuplicateAction"(int0: integer, settingRowList1: $GuiCategoryEditor$SettingRowList$$Type<>): $Supplier<boolean>
public "getMoveAction"(int0: integer, int1: integer, settingRowList2: $GuiCategoryEditor$SettingRowList$$Type<>): $Supplier<boolean>
public "getName"(): string
public "getPasteAction"(settingRowList0: $GuiCategoryEditor$SettingRowList$$Type<>): $Supplier<boolean>
public "getSettingsNode"(): SD
public "getSubCategories"(): $List<ED>
public "removeProtectionRecursive"(): void
get "name"(): string
get "settingsNode"(): SD
get "subCategories"(): $List<ED>
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointColor" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $WaypointColor extends $Enum<$WaypointColor> {
static readonly "AQUA": $WaypointColor
static readonly "BLACK": $WaypointColor
static readonly "BLUE": $WaypointColor
static readonly "DARK_AQUA": $WaypointColor
static readonly "DARK_BLUE": $WaypointColor
static readonly "DARK_GRAY": $WaypointColor
static readonly "DARK_GREEN": $WaypointColor
static readonly "DARK_PURPLE": $WaypointColor
static readonly "DARK_RED": $WaypointColor
static readonly "GOLD": $WaypointColor
static readonly "GRAY": $WaypointColor
static readonly "GREEN": $WaypointColor
static readonly "PURPLE": $WaypointColor
static readonly "RED": $WaypointColor
static readonly "WHITE": $WaypointColor
static readonly "YELLOW": $WaypointColor

public static "fromIndex"(int0: integer): $WaypointColor
public "getFormat"(): character
public "getHex"(): integer
public "getName"(): $Component
public static "getRandom"(): $WaypointColor
public static "valueOf"(string0: string): $WaypointColor
public static "values"(): $WaypointColor[]
get "format"(): character
get "hex"(): integer
get "name"(): $Component
}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer" {
import { $ModelRenderTrace$$Type } from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace"
import { $List$$Type } from "packages/java/util/$List"
import { $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RadarIconCreator$Parameters$$Type } from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export interface $IRadarIconFormPrerenderer {
"isFlipped"(): boolean
"isOutlined"(): boolean
"prerender"<T extends $Entity>(guiGraphics0: $GuiGraphics$$Type, entityRenderer1: $EntityRenderer$$Type<T>, entityModel2: $EntityModel$$Type<T>, t3: T, list4: $List$$Type<$ModelRenderTrace$$Type>, parameters5: $RadarIconCreator$Parameters$$Type): boolean
"requiresEntityModel"(): boolean
get "flipped"(): boolean
get "outlined"(): boolean
}

export namespace $IRadarIconFormPrerenderer {
const probejs$$marker: never
}
export abstract class $IRadarIconFormPrerenderer$$Static implements $IRadarIconFormPrerenderer {
}
}

declare module "packages/xaero/hud/category/rule/$ObjectCategoryListRule" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ObjectCategoryListRuleType } from "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType"
import { $ObjectCategoryRule } from "packages/xaero/hud/category/rule/$ObjectCategoryRule"

export class $ObjectCategoryListRule<E, P, S> extends $ObjectCategoryRule<E, P> implements $Iterable<string> {
public "forEach"(consumer0: $Consumer$$Type<string>): void
public "getStringValidator"(): $Predicate<string>
public "getType"(): $ObjectCategoryListRuleType<E, P, S>
public "inList"(e0: E, p1: P): boolean
public "iterator"(): $Iterator<string>
public "spliterator"(): $Spliterator<string>
[Symbol.iterator](): IterableIterator<string>;
get "stringValidator"(): $Predicate<string>
get "type"(): $ObjectCategoryListRuleType<E, P, S>
}
}

declare module "packages/xaero/hud/category/ui/entry/widget/$EditorButton$PressActionWithContext" {
import { $Button$$Type } from "packages/net/minecraft/client/gui/components/$Button"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorButton$$Type } from "packages/xaero/hud/category/ui/entry/widget/$EditorButton"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import { $Button$OnPress } from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export class $EditorButton$PressActionWithContext implements $Button$OnPress {
constructor()

public "onPress"(editorButton0: $EditorButton$$Type, editorNode1: $EditorNode$$Type, settingRowList2: $GuiCategoryEditor$SettingRowList$$Type<>): void
public "onPress"(button0: $Button$$Type): void
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderProvider" {
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $AbstractWaypointRenderProvider } from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider"
import { $WaypointWorldRenderContext, $WaypointWorldRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext"

export class $WaypointWorldRenderProvider extends $AbstractWaypointRenderProvider<$WaypointWorldRenderContext> {
constructor()

/** @deprecated */
public "begin"(int0: integer, waypointWorldRenderContext1: $WaypointWorldRenderContext$$Type): void
/** @deprecated */
public "end"(int0: integer, waypointWorldRenderContext1: $WaypointWorldRenderContext$$Type): void
/** @deprecated */
public "getNext"(int0: integer, waypointWorldRenderContext1: $WaypointWorldRenderContext$$Type): $Waypoint
/** @deprecated */
public "hasNext"(int0: integer, waypointWorldRenderContext1: $WaypointWorldRenderContext$$Type): boolean
/** @deprecated */
public "setupContextAndGetNext"(int0: integer, waypointWorldRenderContext1: $WaypointWorldRenderContext$$Type): $Waypoint
}
}

declare module "packages/xaero/hud/controls/key/$KeyMappingTickHandler" {
import { $KeyMappingControllerManager$$Type } from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"

export class $KeyMappingTickHandler {
static "DISABLE_KEY_MAPPING_OVERRIDES": boolean

constructor(keyMappingControllerManager0: $KeyMappingControllerManager$$Type)

public "tick"(): void
}
}

declare module "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer" {
import { $MinimapWorldConnectionManager } from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import { $WaypointSession$$Type } from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import { $WaypointsSort, $WaypointsSort$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointsSort"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $DimensionType } from "packages/net/minecraft/world/level/dimension/$DimensionType"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $WaypointWorldContainer } from "packages/xaero/common/minimap/waypoints/$WaypointWorldContainer"
import { $RootConfig } from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
public "getConfig"(): $RootConfig
/** @deprecated */
public "getDefaultMultiworldId"(): string
public "getDimensionScale"(resourceKey0: $ResourceKey$$Type<$Level>): double
public "getDimensionType"(resourceKey0: $ResourceKey$$Type<$Level>): $DimensionType
public "getDimensionTypeIds"(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>
/** @deprecated */
public "getServerTeleportCommandFormat"(): string
/** @deprecated */
public "getServerTeleportCommandRotationFormat"(): string
/** @deprecated */
public "getSortType"(): $WaypointsSort
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "isConfigLoaded"(): boolean
/** @deprecated */
public "isIgnoreHeightmaps"(): boolean
/** @deprecated */
public "isIgnoreServerLevelId"(): boolean
/** @deprecated */
public "isSortReversed"(): boolean
/** @deprecated */
public "isTeleportationEnabled"(): boolean
/** @deprecated */
public "isUsingDefaultTeleportCommand"(): boolean
/** @deprecated */
public "isUsingMultiworldDetection"(): boolean
public "renameOldContainer"(xaeroPath0: $XaeroPath$$Type): void
/** @deprecated */
public "setDefaultMultiworldId"(string0: string): void
public "setDimensionTypeId"(resourceKey0: $ResourceKey$$Type<$Level>, resourceLocation1: $ResourceLocation$$Type): void
/** @deprecated */
public "setIgnoreHeightmaps"(boolean0: boolean): void
/** @deprecated */
public "setIgnoreServerLevelId"(boolean0: boolean): void
/** @deprecated */
public "setServerTeleportCommandFormat"(string0: string): void
/** @deprecated */
public "setServerTeleportCommandRotationFormat"(string0: string): void
/** @deprecated */
public "setSortReversed"(boolean0: boolean): void
/** @deprecated */
public "setSortType"(waypointsSort0: $WaypointsSort$$Type): void
/** @deprecated */
public "setTeleportationEnabled"(boolean0: boolean): void
/** @deprecated */
public "setUsingDefaultTeleportCommand"(boolean0: boolean): void
/** @deprecated */
public "setUsingMultiworldDetection"(boolean0: boolean): void
/** @deprecated */
public "toggleSortReversed"(): void
/** @deprecated */
public "toggleSortType"(): void
public "updateConnectionsField"(waypointSession0: $WaypointSession$$Type): void
public "updateDimensionType"(clientLevel0: $ClientLevel$$Type): void
get "config"(): $RootConfig
get "defaultMultiworldId"(): string
get "dimensionTypeIds"(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>
get "serverTeleportCommandFormat"(): string
get "serverTeleportCommandRotationFormat"(): string
get "sortType"(): $WaypointsSort
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "configLoaded"(): boolean
get "ignoreHeightmaps"(): boolean
get "ignoreServerLevelId"(): boolean
get "sortReversed"(): boolean
get "teleportationEnabled"(): boolean
get "usingDefaultTeleportCommand"(): boolean
get "usingMultiworldDetection"(): boolean
set "defaultMultiworldId"(value: string)
set "ignoreHeightmaps"(value: boolean)
set "ignoreServerLevelId"(value: boolean)
set "serverTeleportCommandFormat"(value: string)
set "serverTeleportCommandRotationFormat"(value: string)
set "sortReversed"(value: boolean)
set "sortType"(value: $WaypointsSort$$Type)
set "teleportationEnabled"(value: boolean)
set "usingDefaultTeleportCommand"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/world/container/config/io/$RootConfigIO" {
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldRootContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"

export class $RootConfigIO {
constructor(hudMod0: $HudMod$$Type)

public "load"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): void
public "save"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): void
}
}

declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext" {
import { $EntityRadarCategory, $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $RadarRenderContext {
constructor()

get "dotScale"(): double
set "dotScale"(value: double)
get "dotSize"(): integer
set "dotSize"(value: integer)
get "entityCategory"(): $EntityRadarCategory
set "entityCategory"(value: $EntityRadarCategory$$Type)
get "icon"(): boolean
set "icon"(value: boolean)
get "iconScale"(): double
set "iconScale"(value: double)
get "iconsForCategory"(): boolean
set "iconsForCategory"(value: boolean)
get "playerListDown"(): boolean
set "playerListDown"(value: boolean)
get "reversedOrder"(): boolean
set "reversedOrder"(value: boolean)
}
}

declare module "packages/xaero/hud/category/$ObjectCategory" {
import { $ObjectCategorySetting, $ObjectCategorySetting$$Type } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ObjectCategoryData } from "packages/xaero/hud/category/serialization/data/$ObjectCategoryData"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $ObjectCategory<D extends $ObjectCategoryData<D>, C extends $ObjectCategory<D, C>> {
public "getDirectSubCategoryIterator"(): $Iterator<C>
public "getName"(): string
public "getProtection"(): boolean
public "getSettingOverridesIterator"(): $Iterator<$Map$Entry<$ObjectCategorySetting<any>, any>>
public "getSettingValue"<T>(objectCategorySetting0: $ObjectCategorySetting$$Type<T>): T
public "getSuperCategory"(): C
public "setSettingValue"<T>(objectCategorySetting0: $ObjectCategorySetting$$Type<T>, t1: T): void
get "directSubCategoryIterator"(): $Iterator<C>
get "name"(): string
get "protection"(): boolean
get "settingOverridesIterator"(): $Iterator<$Map$Entry<$ObjectCategorySetting<any>, any>>
get "superCategory"(): C
}
}

declare module "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode" {
import { $EditorOptionNode } from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"
import { $EditorTextField$UpdatedValueConsumer } from "packages/xaero/hud/category/ui/entry/widget/$EditorTextField$UpdatedValueConsumer"
import { $EditorExpandingOptionsNode } from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode"

export class $EditorTextFieldOptionsNode extends $EditorExpandingOptionsNode<string> {
public "getCurrentValue"(): $EditorOptionNode<string>
public "getCursorPos"(): integer
public "getHighlightPos"(): integer
public "getInput"(): string
public "getMaxLength"(): integer
public "getResult"(): string
public "getUpdatedValueConsumer"(): $EditorTextField$UpdatedValueConsumer
public "resetInput"(string0: string): void
get "currentValue"(): $EditorOptionNode<string>
get "cursorPos"(): integer
get "highlightPos"(): integer
get "input"(): string
get "maxLength"(): integer
get "result"(): string
get "updatedValueConsumer"(): $EditorTextField$UpdatedValueConsumer
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderContext" {
import { $AbstractWaypointRenderContext } from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $WaypointWorldRenderContext extends $AbstractWaypointRenderContext {
constructor()

get "interactionBoxLeft"(): integer
set "interactionBoxLeft"(value: integer)
get "interactionBoxTop"(): integer
set "interactionBoxTop"(value: integer)
get "onlyMainInfo"(): boolean
set "onlyMainInfo"(value: boolean)
get "renderEntityPos"(): $Vec3
set "renderEntityPos"(value: $Vec3$$Type)
}
}

declare module "packages/xaero/hud/minimap/radar/$RadarSession" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $RadarColorHelper } from "packages/xaero/hud/minimap/radar/color/$RadarColorHelper"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $RadarStateUpdater } from "packages/xaero/hud/minimap/radar/state/$RadarStateUpdater"
import { $EntityRadarCategoryManager, $EntityRadarCategoryManager$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import { $RadarState } from "packages/xaero/hud/minimap/radar/state/$RadarState"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarSession {
constructor(entityRadarCategoryManager0: $EntityRadarCategoryManager$$Type)

public "getCategoryManager"(): $EntityRadarCategoryManager
public "getColorHelper"(): $RadarColorHelper
public "getState"(): $RadarState
public "getStateUpdater"(): $RadarStateUpdater
public "update"(clientLevel0: $ClientLevel$$Type, entity1: $Entity$$Type, player2: $Player$$Type): void
get "categoryManager"(): $EntityRadarCategoryManager
get "colorHelper"(): $RadarColorHelper
get "state"(): $RadarState
get "stateUpdater"(): $RadarStateUpdater
}
}

declare module "packages/xaero/hud/minimap/radar/render/element/$RadarElementReader" {
import { $RadarRenderContext, $RadarRenderContext$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import { $MinimapElementReader } from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarElementReader extends $MinimapElementReader<$Entity, $RadarRenderContext> {
constructor()

public "getBoxScale"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, entity1: $Entity$$Type, radarRenderContext2: $RadarRenderContext$$Type): float
public "getFilterName"(entity0: $Entity$$Type): string
public "getInteractionBoxBottom"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getInteractionBoxLeft"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getInteractionBoxRight"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getInteractionBoxTop"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getLeftSideLength"(entity0: $Entity$$Type, minecraft1: $Minecraft$$Type): integer
public "getMenuName"(entity0: $Entity$$Type): string
public "getMenuTextFillLeftPadding"(entity0: $Entity$$Type): integer
public "getRenderBoxBottom"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getRenderBoxLeft"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getRenderBoxRight"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getRenderBoxTop"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): integer
public "getRenderX"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): double
public "getRenderY"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): double
public "getRenderZ"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type, float2: float): double
public "getRightClickTitleBackgroundColor"(entity0: $Entity$$Type): integer
public "isHidden"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type): boolean
public "isInteractable"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, entity1: $Entity$$Type): boolean
}
}

declare module "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig" {
import { $ArrayList, $ArrayList$$Type } from "packages/java/util/$ArrayList"

export class $RadarIconModelConfig {
constructor()

get "baseScale"(): float
set "baseScale"(value: float)
get "layersAllowed"(): boolean
set "layersAllowed"(value: boolean)
get "modelMainPartFieldAliases"(): $ArrayList<string>
set "modelMainPartFieldAliases"(value: $ArrayList$$Type<string>)
get "modelPartsFields"(): $ArrayList<string>
set "modelPartsFields"(value: $ArrayList$$Type<string>)
get "modelPartsRotationReset"(): boolean
set "modelPartsRotationReset"(value: boolean)
get "modelRootPath"(): $ArrayList<$ArrayList<string>>
set "modelRootPath"(value: $ArrayList$$Type<$ArrayList$$Type<string>>)
get "offsetX"(): float
set "offsetX"(value: float)
get "offsetY"(): float
set "offsetY"(value: float)
get "renderingFullModel"(): boolean
set "renderingFullModel"(value: boolean)
get "rotationX"(): float
set "rotationX"(value: float)
get "rotationY"(): float
set "rotationY"(value: float)
get "rotationZ"(): float
set "rotationZ"(value: float)
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer" {
import { $WaypointMapRenderer } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

/** @deprecated */
export class $WaypointsGuiRenderer extends $WaypointMapRenderer {
}
}

declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderer" {
import { $PlayerTrackerMinimapElement, $PlayerTrackerMinimapElement$$Type } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $PlayerTrackerMinimapElementRenderContext } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderContext"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $MinimapElementRenderer } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $PlayerInfo$$Type } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import { $PlayerTrackerMinimapElementCollector } from "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementCollector"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $PlayerTrackerMinimapElementRenderer extends $MinimapElementRenderer<$PlayerTrackerMinimapElement<any>, $PlayerTrackerMinimapElementRenderContext> {
public "getCollector"(): $PlayerTrackerMinimapElementCollector
public "getPlayerSkin"(player0: $Player$$Type, playerInfo1: $PlayerInfo$$Type): $ResourceLocation
public "renderElement"(playerTrackerMinimapElement0: $PlayerTrackerMinimapElement$$Type<any>, boolean1: boolean, boolean2: boolean, double3: double, float4: float, double5: double, double6: double, minimapElementRenderInfo7: $MinimapElementRenderInfo$$Type, guiGraphics8: $GuiGraphics$$Type, bufferSource9: $MultiBufferSource$BufferSource$$Type): boolean
get "collector"(): $PlayerTrackerMinimapElementCollector
}
}

declare module "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $List } from "packages/java/util/$List"
import { $InfoDisplay$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplay"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $InfoDisplayCompiler {
constructor()

public "addLine"(component0: $Component$$Type): void
public "addLine"(string0: string): void
public "addWords"(string0: string): void
public "compile"<T>(infoDisplay0: $InfoDisplay$$Type<T>, minimapSession1: $MinimapSession$$Type, int2: integer, blockPos3: $BlockPos$$Type): $List<$Component>
}
}

declare module "packages/xaero/hud/preset/$HudPresetManager" {
import { $HudPreset, $HudPreset$$Type } from "packages/xaero/hud/preset/$HudPreset"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $HudPresetManager {
constructor()

public "getPresets"(): $Iterable<$HudPreset>
public "register"(hudPreset0: $HudPreset$$Type): void
get "presets"(): $Iterable<$HudPreset>
}
}

declare module "packages/xaero/hud/module/$HudModule" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PushboxHandler$State } from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IModuleRenderer } from "packages/xaero/hud/render/module/$IModuleRenderer"
import { $ModuleSession } from "packages/xaero/hud/module/$ModuleSession"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $TriFunction$$Type } from "packages/org/apache/commons/lang3/function/$TriFunction"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $ModuleTransform, $ModuleTransform$$Type } from "packages/xaero/hud/module/$ModuleTransform"

export class $HudModule<MS extends $ModuleSession<MS>> {
constructor(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type, triFunction2: $TriFunction$$Type<$HudMod$$Type, $HudModule$$Type<MS>, $ClientPacketListener$$Type, MS>, supplier3: $Supplier$$Type<$IModuleRenderer<MS>>, function4: $Function$$Type<$Screen$$Type, $Screen>)

public "cancelTransform"(): void
public "confirmTransform"(): void
public "getConfigScreenFactory"(): $Function<$Screen, $Screen>
public "getConfirmedTransform"(): $ModuleTransform
public "getCurrentSession"(): MS
public "getDisplayName"(): $Component
public "getId"(): $ResourceLocation
public "getPushState"(): $PushboxHandler$State
public "getRenderer"(): $IModuleRenderer<MS>
public "getUnconfirmedTransform"(): $ModuleTransform
public "getUsedTransform"(): $ModuleTransform
public "isActive"(): boolean
public "setActive"(boolean0: boolean): void
public "setTransform"(moduleTransform0: $ModuleTransform$$Type): void
get "configScreenFactory"(): $Function<$Screen, $Screen>
get "confirmedTransform"(): $ModuleTransform
get "currentSession"(): MS
get "displayName"(): $Component
get "id"(): $ResourceLocation
get "pushState"(): $PushboxHandler$State
get "renderer"(): $IModuleRenderer<MS>
get "unconfirmedTransform"(): $ModuleTransform
get "usedTransform"(): $ModuleTransform
get "active"(): boolean
set "active"(value: boolean)
set "transform"(value: $ModuleTransform$$Type)
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode$Builder" {
import { $EditorOptionNode$Builder$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode$Builder"
import { $EditorOptionsNode$Builder } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$Builder"
import { $EditorExpandingOptionsNode } from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode"

export class $EditorExpandingOptionsNode$Builder<V, B extends $EditorExpandingOptionsNode$Builder<V, B>> extends $EditorOptionsNode$Builder<V, B> {
public "addOptionBuilder"(builder0: $EditorOptionNode$Builder$$Type<V>): B
public "addOptionBuilderFor"(v0: V): B
public "build"(): $EditorExpandingOptionsNode<V>
public "setDefault"(): B
}
}

declare module "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec" {
import { $Function$$Type } from "packages/java/util/function/$Function"

export class $InfoDisplayStateCodec<T> {
constructor(function0: $Function$$Type<string, T>, function1: $Function$$Type<T, string>)

public "decode"(string0: string): T
public "encode"(t0: T): string
}
}

declare module "packages/xaero/hud/render/module/$ModuleRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleRenderContext {
readonly "screenHeight": integer
readonly "screenScale": double
readonly "screenWidth": integer

constructor(int0: integer, int1: integer, double2: double)

get "flippedHorizontally"(): boolean
set "flippedHorizontally"(value: boolean)
get "flippedVertically"(): boolean
set "flippedVertically"(value: boolean)
get "h"(): integer
set "h"(value: integer)
get "w"(): integer
set "w"(value: integer)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementReader" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $MinimapElementReader<E, RC> {
constructor()

public "getBoxScale"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, e1: E, rc2: RC): float
public "getCoordinateScale"(e0: E, rc1: RC, minimapElementRenderInfo2: $MinimapElementRenderInfo$$Type): double
public "getFilterName"(e0: E): string
public "getInteractionBoxBottom"(e0: E, rc1: RC, float2: float): integer
public "getInteractionBoxLeft"(e0: E, rc1: RC, float2: float): integer
public "getInteractionBoxRight"(e0: E, rc1: RC, float2: float): integer
public "getInteractionBoxTop"(e0: E, rc1: RC, float2: float): integer
public "getLeftSideLength"(e0: E, minecraft1: $Minecraft$$Type): integer
public "getMenuName"(e0: E): string
public "getMenuTextFillLeftPadding"(e0: E): integer
public "getRenderBoxBottom"(e0: E, rc1: RC, float2: float): integer
public "getRenderBoxLeft"(e0: E, rc1: RC, float2: float): integer
public "getRenderBoxRight"(e0: E, rc1: RC, float2: float): integer
public "getRenderBoxTop"(e0: E, rc1: RC, float2: float): integer
public "getRenderX"(e0: E, rc1: RC, float2: float): double
public "getRenderY"(e0: E, rc1: RC, float2: float): double
public "getRenderZ"(e0: E, rc1: RC, float2: float): double
public "getRightClickTitleBackgroundColor"(e0: E): integer
public "isAlwaysHighlightedWhenHovered"(e0: E, rc1: RC): boolean
public "isHidden"(e0: E, rc1: RC): boolean
public "isInteractable"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, e1: E): boolean
public "shouldScaleBoxWithOptionalScale"(): boolean
public "shouldScalePartialCoordinates"(e0: E, rc1: RC, minimapElementRenderInfo2: $MinimapElementRenderInfo$$Type): boolean
}
}

declare module "packages/xaero/hud/event/$HudEventHandler" {
import { $Hud$$Type } from "packages/xaero/hud/$Hud"

export class $HudEventHandler {
constructor()

public "handleRenderGameOverlayEventPost"(): void
public "setHud"(hud0: $Hud$$Type): void
set "hud"(value: $Hud$$Type)
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MinimapElementRenderLocation {
/** @deprecated */
static readonly "IN_GAME": $MinimapElementRenderLocation
static readonly "IN_MINIMAP": $MinimapElementRenderLocation
static readonly "IN_WORLD": $MinimapElementRenderLocation
static readonly "OVER_MINIMAP": $MinimapElementRenderLocation
static readonly "UNKNOWN": $MinimapElementRenderLocation
static readonly "WORLD_MAP": $MinimapElementRenderLocation
static readonly "WORLD_MAP_MENU": $MinimapElementRenderLocation

constructor()

public static "fromIndex"(int0: integer): $MinimapElementRenderLocation
public "getIndex"(): integer
get "index"(): integer
}
}

declare module "packages/xaero/hud/compat/$OldSystemCompatibility" {
import { $ModuleSession$$Type } from "packages/xaero/hud/module/$ModuleSession"
import { $ModuleRenderContext$$Type } from "packages/xaero/hud/render/module/$ModuleRenderContext"
import { $ModuleTransform, $ModuleTransform$$Type } from "packages/xaero/hud/module/$ModuleTransform"

export class $OldSystemCompatibility {
constructor()

public "convertTransform"(moduleTransform0: $ModuleTransform$$Type, moduleSession1: $ModuleSession$$Type<any>, moduleRenderContext2: $ModuleRenderContext$$Type): void
public "loadOldTransform"(string0s: string[]): $ModuleTransform
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode" {
import { $EditorOptionsNode } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import { $EditorOptionNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"

export class $EditorExpandingOptionsNode<V> extends $EditorOptionsNode<V> {
public "onSelected"(editorOptionNode0: $EditorOptionNode$$Type<V>): boolean
}
}

declare module "packages/xaero/hud/minimap/world/state/$MinimapWorldStateUpdater" {
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldRootContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $XaeroPath, $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export class $MinimapWorldStateUpdater {
static readonly "ROOT_CONTAINER_FORMAT": integer

constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type, clientPacketListener2: $ClientPacketListener$$Type)

/** @deprecated */
public "getAutoRootContainerPath"(int0: integer, clientPacketListener1: $ClientPacketListener$$Type, minimapSession2: $MinimapSession$$Type): $XaeroPath
public "getAutoRootContainerPath"(int0: integer): $XaeroPath
public "getAutoWorldNodeBase"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): any
/** @deprecated */
public "getPotentialContainerPath"(minimapSession0: $MinimapSession$$Type): $XaeroPath
public "getPotentialContainerPath"(): $XaeroPath
public "getPotentialWorldNode"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean): string
/** @deprecated */
public "getPotentialWorldNode"(resourceKey0: $ResourceKey$$Type<$Level>, boolean1: boolean, minimapSession2: $MinimapSession$$Type): string
public "hasServerLevelId"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): boolean
/** @deprecated */
public "ignoreContainerCase"(xaeroPath0: $XaeroPath$$Type, xaeroPath1: $XaeroPath$$Type, minimapSession2: $MinimapSession$$Type): $XaeroPath
public "ignoreContainerCase"(xaeroPath0: $XaeroPath$$Type, xaeroPath1: $XaeroPath$$Type): $XaeroPath
public "init"(): void
public "onServerLevelId"(int0: integer): void
public "setCurrentWorldSpawn"(blockPos0: $BlockPos$$Type): void
public "update"(): void
/** @deprecated */
public "update"(minimapSession0: $MinimapSession$$Type): void
get "potentialContainerPath"(): $XaeroPath
set "currentWorldSpawn"(value: $BlockPos$$Type)
}
}

declare module "packages/xaero/hud/category/ui/setting/$EditorSettingType$SettingNodeBuilderFactory" {
import { $IEditorSettingNodeBuilder } from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNodeBuilder"
import { $ListFactory$$Type } from "packages/xaero/common/misc/$ListFactory"

export interface $EditorSettingType$SettingNodeBuilderFactory {
"apply"<V>(listFactory0: $ListFactory$$Type): $IEditorSettingNodeBuilder<V, any>
}

export namespace $EditorSettingType$SettingNodeBuilderFactory {
const probejs$$marker: never
}
export abstract class $EditorSettingType$SettingNodeBuilderFactory$$Static implements $EditorSettingType$SettingNodeBuilderFactory {
}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelPartRenderTrace" {
import { $ModelPart, $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $ModelPartRenderTrace {
constructor(modelPart0: $ModelPart$$Type, float1: float, float2: float, float3: float, float4: float)

get "alpha"(): float
set "alpha"(value: float)
get "blue"(): float
set "blue"(value: float)
get "green"(): float
set "green"(value: float)
get "modelPart"(): $ModelPart
set "modelPart"(value: $ModelPart$$Type)
get "red"(): float
set "red"(value: float)
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier" {
import { $EditorOptionsNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"

export interface $EditorOptionsNode$IOptionsNodeIsActiveSupplier {
"get"(editorNode0: $EditorNode$$Type, editorOptionsNode1: $EditorOptionsNode$$Type<any>): boolean
}

export namespace $EditorOptionsNode$IOptionsNodeIsActiveSupplier {
const probejs$$marker: never
}
export abstract class $EditorOptionsNode$IOptionsNodeIsActiveSupplier$$Static implements $EditorOptionsNode$IOptionsNodeIsActiveSupplier {
}
}

declare module "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm" {
import { $RadarIconFormType, $RadarIconFormType$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType"
import { $XaeroIcon } from "packages/xaero/common/icon/$XaeroIcon"
import { $IRadarIconFormPrerenderer } from "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer"

export class $RadarIconForm {
constructor(radarIconFormType0: $RadarIconFormType$$Type)

public "getFailureResult"(): $XaeroIcon
public "getPrerenderer"(): $IRadarIconFormPrerenderer
public "getType"(): $RadarIconFormType
get "failureResult"(): $XaeroIcon
get "prerenderer"(): $IRadarIconFormPrerenderer
get "type"(): $RadarIconFormType
}
}

declare module "packages/xaero/hud/category/ui/entry/$EditorListEntry" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"
import { $GuiCategoryEditor$SettingRowList$Entry$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry"

export class $EditorListEntry {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, settingRowList5: $GuiCategoryEditor$SettingRowList$$Type<>, supplier6: $Supplier$$Type<$CursorBox>)

public "charTyped"(char0: character, int1: integer): boolean
public "confirmSelection"(): $EditorListEntry
public "focusFirstRecursively"(): void
public "focusLastRecursively"(): void
public "getEntryRelativeX"(): integer
public "getEntryRelativeY"(): integer
public "getHoverNarration"(): string
public "getHoveredNarration"(): string
public "getMessage"(): string
public "getNarration"(): string
public "getNarrationMessage"(): string
public "getSelectedNarration"(): string
public "getSubNarration"(): string
public "getTooltipSupplier"(): $Supplier<$CursorBox>
public "isHoveredOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer, boolean3: boolean): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(entry0: $GuiCategoryEditor$SettingRowList$Entry$$Type<>, double1: double, double2: double, int3: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "moveFocus"(int0: integer, boolean1: boolean): boolean
public "moveFocus"(int0: integer): boolean
public "onSelected"(): $EditorListEntry
public "postRender"(guiGraphics0: $GuiGraphics$$Type): void
public "preRender"(guiGraphics0: $GuiGraphics$$Type, boolean1: boolean, boolean2: boolean): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean, float7: float, font8: $Font$$Type, int9: integer, int10: integer, boolean11: boolean, boolean12: boolean): $EditorListEntry
public "setFocused"(boolean0: boolean): void
public "tick"(): void
public "unfocusRecursively"(): void
public "unhoverRecursively"(): void
public "withSubEntry"(editorListEntry0: $EditorListEntry$$Type): $EditorListEntry
get "entryRelativeX"(): integer
get "entryRelativeY"(): integer
get "hoverNarration"(): string
get "hoveredNarration"(): string
get "message"(): string
get "narration"(): string
get "narrationMessage"(): string
get "selectedNarration"(): string
get "subNarration"(): string
get "tooltipSupplier"(): $Supplier<$CursorBox>
set "focused"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/world/state/$MinimapWorldState" {
import { $XaeroPath, $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"

export class $MinimapWorldState {
constructor()

public "getAutoContainerPathIgnoreCaseCache"(): $XaeroPath
public "getAutoRootContainerPath"(): $XaeroPath
public "getAutoWorldPath"(): $XaeroPath
public "getCurrentContainerPath"(): $XaeroPath
public "getCurrentRootContainerPath"(): $XaeroPath
public "getCurrentWorldPath"(): $XaeroPath
public "getCurrentWorldPath"(xaeroPath0: $XaeroPath$$Type): $XaeroPath
public "getCustomContainerPath"(): $XaeroPath
public "getCustomWorldPath"(): $XaeroPath
public "getOutdatedAutoRootContainerPath"(int0: integer): $XaeroPath
public "setAutoContainerPathIgnoreCaseCache"(xaeroPath0: $XaeroPath$$Type): void
public "setAutoRootContainerPath"(xaeroPath0: $XaeroPath$$Type): void
public "setAutoWorldPath"(xaeroPath0: $XaeroPath$$Type): void
public "setCustomWorldPath"(xaeroPath0: $XaeroPath$$Type): void
public "setOutdatedAutoRootContainerPath"(int0: integer, xaeroPath1: $XaeroPath$$Type): void
get "autoContainerPathIgnoreCaseCache"(): $XaeroPath
get "autoRootContainerPath"(): $XaeroPath
get "autoWorldPath"(): $XaeroPath
get "currentContainerPath"(): $XaeroPath
get "currentRootContainerPath"(): $XaeroPath
get "currentWorldPath"(): $XaeroPath
get "customContainerPath"(): $XaeroPath
get "customWorldPath"(): $XaeroPath
set "autoContainerPathIgnoreCaseCache"(value: $XaeroPath$$Type)
set "autoRootContainerPath"(value: $XaeroPath$$Type)
set "autoWorldPath"(value: $XaeroPath$$Type)
set "customWorldPath"(value: $XaeroPath$$Type)
}
}

declare module "packages/xaero/hud/preset/$HudPreset" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"

export class $HudPreset {
public "apply"(): void
public "applyAndConfirm"(): void
public "cancel"(): void
public "confirm"(): void
public "getId"(): $ResourceLocation
public "getName"(): $Component
get "id"(): $ResourceLocation
get "name"(): $Component
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MinimapElementRenderer } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $WaypointsManager$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointsManager"
import { $WaypointMapRenderContext } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MinimapRendererHelper$$Type } from "packages/xaero/common/minimap/render/$MinimapRendererHelper"

export class $WaypointMapRenderer extends $MinimapElementRenderer<$Waypoint, $WaypointMapRenderContext> {
public "drawIconOnGUI"(guiGraphics0: $GuiGraphics$$Type, minimapRendererHelper1: $MinimapRendererHelper$$Type, waypoint2: $Waypoint$$Type, int3: integer, int4: integer, int5: integer, bufferSource6: $MultiBufferSource$BufferSource$$Type, vertexConsumer7: $VertexConsumer$$Type, vertexConsumer8: $VertexConsumer$$Type): void
/** @deprecated */
public "drawIconOnGUI"(guiGraphics0: $GuiGraphics$$Type, minimapRendererHelper1: $MinimapRendererHelper$$Type, waypoint2: $Waypoint$$Type, int3: integer, int4: integer, bufferSource5: $MultiBufferSource$BufferSource$$Type, vertexConsumer6: $VertexConsumer$$Type, vertexConsumer7: $VertexConsumer$$Type): void
public "drawSetChange"(minimapSession0: $MinimapSession$$Type, guiGraphics1: $GuiGraphics$$Type, window2: $Window$$Type): void
/** @deprecated */
public "drawSetChange"(waypointsManager0: $WaypointsManager$$Type, guiGraphics1: $GuiGraphics$$Type, window2: $Window$$Type): void
public "renderElement"(waypoint0: $Waypoint$$Type, boolean1: boolean, boolean2: boolean, double3: double, float4: float, double5: double, double6: double, minimapElementRenderInfo7: $MinimapElementRenderInfo$$Type, guiGraphics8: $GuiGraphics$$Type, bufferSource9: $MultiBufferSource$BufferSource$$Type): boolean
/** @deprecated */
public "updateWaypointCollection"(): void
}
}

declare module "packages/xaero/hud/minimap/radar/state/$RadarStateUpdater" {
import { $ClientLevel$$Type } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $EntityRadarCategoryManager$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager"
import { $RadarState$$Type } from "packages/xaero/hud/minimap/radar/state/$RadarState"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarStateUpdater {
constructor(entityRadarCategoryManager0: $EntityRadarCategoryManager$$Type, radarState1: $RadarState$$Type)

public "setLastRenderViewEntity"(entity0: $Entity$$Type): void
public "update"(clientLevel0: $ClientLevel$$Type, entity1: $Entity$$Type, player2: $Player$$Type): void
set "lastRenderViewEntity"(value: $Entity$$Type)
}
}

declare module "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile" {
import { $InfoDisplayCompiler$$Type } from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayCompiler"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $InfoDisplay$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplay"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"

export interface $InfoDisplayOnCompile<T> {
"onCompile"(infoDisplay0: $InfoDisplay$$Type<T>, infoDisplayCompiler1: $InfoDisplayCompiler$$Type, minimapSession2: $MinimapSession$$Type, int3: integer, blockPos4: $BlockPos$$Type): void
}

export namespace $InfoDisplayOnCompile {
const probejs$$marker: never
}
export abstract class $InfoDisplayOnCompile$$Static<T> implements $InfoDisplayOnCompile<T> {
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$Builder" {
import { $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier"
import { $EditorNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import { $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonMessageSupplier"
import { $EditorSimpleButtonNode$ISimpleButtonCallback$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonCallback"

export class $EditorSimpleButtonNode$Builder extends $EditorNode$Builder<$EditorSimpleButtonNode$Builder> {
public static "begin"(): $EditorSimpleButtonNode$Builder
public "setCallback"(iSimpleButtonCallback0: $EditorSimpleButtonNode$ISimpleButtonCallback$$Type): $EditorSimpleButtonNode$Builder
public "setDefault"(): $EditorSimpleButtonNode$Builder
public "setDisplayName"(string0: string): $EditorSimpleButtonNode$Builder
public "setIsActiveSupplier"(iSimpleButtonIsActiveSupplier0: $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$$Type): $EditorSimpleButtonNode$Builder
public "setMessageSupplier"(iSimpleButtonMessageSupplier0: $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$$Type): $EditorSimpleButtonNode$Builder
set "callback"(value: $EditorSimpleButtonNode$ISimpleButtonCallback$$Type)
set "displayName"(value: string)
set "isActiveSupplier"(value: $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$$Type)
set "messageSupplier"(value: $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$$Type)
}
}

declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor" {
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $ObjectCategory$Builder } from "packages/xaero/hud/category/$ObjectCategory$Builder"
import { $EditorSettingsNode } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import { $EditorCategoryNode } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import { $GuiCategoryEditor$SettingRowList } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"
import { $EditorCategoryNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder"
import { $ObjectCategory } from "packages/xaero/hud/category/$ObjectCategory"
import { $ScreenBase } from "packages/xaero/common/gui/$ScreenBase"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Optional } from "packages/java/util/$Optional"
import { $EditorSettingsNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $GuiCategoryEditor<C extends $ObjectCategory<any, C>, ED extends $EditorCategoryNode<C, SD, ED>, CB extends $ObjectCategory$Builder<C, CB>, SD extends $EditorSettingsNode<any>, SDB extends $EditorSettingsNode$Builder<SD, SDB>, EDB extends $EditorCategoryNode$Builder<C, ED, SD, SDB, EDB>> extends $ScreenBase {
static readonly "ROW_HEIGHT": integer
static readonly "ROW_WIDTH": integer

public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getRowList"(): $GuiCategoryEditor$SettingRowList<>
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "m_7856_"(): void
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "rowList"(): $GuiCategoryEditor$SettingRowList<>
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryManager" {
import { $EntityRadarCategoryFileIO } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategoryFileIO"
import { $Path } from "packages/java/nio/file/$Path"
import { $EntityRadarCategory, $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $EntityRadarDefaultCategories } from "packages/xaero/hud/minimap/radar/category/$EntityRadarDefaultCategories"
import { $ObjectCategoryRuleResolver } from "packages/xaero/hud/category/rule/resolver/$ObjectCategoryRuleResolver"

export class $EntityRadarCategoryManager {
public "getDefaultCategoryConfigurator"(): $EntityRadarDefaultCategories
public "getRootCategory"(): $EntityRadarCategory
public "getRuleResolver"(): $ObjectCategoryRuleResolver
public "getSecondaryFileIO"(): $EntityRadarCategoryFileIO
public "getSecondaryFilePath"(): $Path
public "init"(): void
public "save"(): void
public "setRootCategory"(entityRadarCategory0: $EntityRadarCategory$$Type): void
get "defaultCategoryConfigurator"(): $EntityRadarDefaultCategories
get "rootCategory"(): $EntityRadarCategory
get "ruleResolver"(): $ObjectCategoryRuleResolver
get "secondaryFileIO"(): $EntityRadarCategoryFileIO
get "secondaryFilePath"(): $Path
set "rootCategory"(value: $EntityRadarCategory$$Type)
}
}

declare module "packages/xaero/hud/category/rule/$ObjectCategoryExcludeList" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectCategoryListRule } from "packages/xaero/hud/category/rule/$ObjectCategoryListRule"
import { $ExcludeListMode } from "packages/xaero/hud/category/rule/$ExcludeListMode"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ObjectCategoryExcludeList<E, P, S> extends $ObjectCategoryListRule<E, P, S> {
public "forEach"(consumer0: $Consumer$$Type<string>): void
public "getExcludeMode"(): $ExcludeListMode
public "spliterator"(): $Spliterator<string>
get "excludeMode"(): $ExcludeListMode
}
}

declare module "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager" {
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"

export class $MinimapWorldConnectionManager {
public "addConnection"(xaeroPath0: $XaeroPath$$Type, xaeroPath1: $XaeroPath$$Type): void
public "addConnection"(minimapWorld0: $MinimapWorld$$Type, minimapWorld1: $MinimapWorld$$Type): void
public "isConnected"(minimapWorld0: $MinimapWorld$$Type, minimapWorld1: $MinimapWorld$$Type): boolean
public "isEmpty"(): boolean
public "removeConnection"(minimapWorld0: $MinimapWorld$$Type, minimapWorld1: $MinimapWorld$$Type): void
public "renameDimension"(string0: string, string1: string): void
public "save"(printWriter0: $PrintWriter$$Type): void
public "swapConnections"(minimapWorld0: $MinimapWorld$$Type, minimapWorld1: $MinimapWorld$$Type): void
get "empty"(): boolean
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider" {
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $MinimapElementRenderProvider<E, RC> {
constructor()

public "begin"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): void
public "end"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): void
public "getNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): E
public "hasNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): boolean
public "setupContextAndGetNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, rc1: RC): E
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer" {
import { $Comparable } from "packages/java/lang/$Comparable"
import { $MultiTextureRenderTypeRendererProvider$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $MinimapElementReader, $MinimapElementReader$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementReader"
import { $MinimapElementRenderProvider, $MinimapElementRenderProvider$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderProvider"

export class $MinimapElementRenderer<E, RC> implements $Comparable<$MinimapElementRenderer<any, any>> {
constructor(minimapElementReader0: $MinimapElementReader$$Type<E, RC>, minimapElementRenderProvider1: $MinimapElementRenderProvider$$Type<E, RC>, rc2: RC)

public "compareTo"(minimapElementRenderer0: $MinimapElementRenderer$$Type<any, any>): integer
public "getContext"(): RC
public "getElementReader"(): $MinimapElementReader<E, RC>
public "getOrder"(): integer
public "getProvider"(): $MinimapElementRenderProvider<E, RC>
public "postRender"(minimapElementRenderInfo0: $MinimapElementRenderInfo$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, multiTextureRenderTypeRendererProvider2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "preRender"(minimapElementRenderInfo0: $MinimapElementRenderInfo$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type, multiTextureRenderTypeRendererProvider2: $MultiTextureRenderTypeRendererProvider$$Type): void
public "renderElement"(e0: E, boolean1: boolean, boolean2: boolean, double3: double, float4: float, double5: double, double6: double, minimapElementRenderInfo7: $MinimapElementRenderInfo$$Type, guiGraphics8: $GuiGraphics$$Type, bufferSource9: $MultiBufferSource$BufferSource$$Type): boolean
public "shouldRender"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type): boolean
get "context"(): RC
get "elementReader"(): $MinimapElementReader<E, RC>
get "order"(): integer
get "provider"(): $MinimapElementRenderProvider<E, RC>
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointCollector" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $List$$Type } from "packages/java/util/$List"

export class $WaypointCollector {
constructor(minimapSession0: $MinimapSession$$Type)

public "collect"(list0: $List$$Type<$Waypoint$$Type>): void
}
}

declare module "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType" {
import { $RadarIconForm } from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import { $IRadarIconFormReader$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$IRadarIconFormReader"
import { $XaeroIcon, $XaeroIcon$$Type } from "packages/xaero/common/icon/$XaeroIcon"
import { $RadarIconDefinition$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition"
import { $IRadarIconFormPrerenderer, $IRadarIconFormPrerenderer$$Type } from "packages/xaero/hud/minimap/radar/icon/creator/render/form/$IRadarIconFormPrerenderer"
import { $Map$$Type } from "packages/java/util/$Map"

export class $RadarIconFormType {
constructor(string0: string, iRadarIconFormReader1: $IRadarIconFormReader$$Type, iRadarIconFormPrerenderer2: $IRadarIconFormPrerenderer$$Type, xaeroIcon3: $XaeroIcon$$Type)

public "addTo"(map0: $Map$$Type<string, $RadarIconFormType$$Type>): $RadarIconFormType
public "getFailureResult"(): $XaeroIcon
public "getId"(): string
public "getPrerenderer"(): $IRadarIconFormPrerenderer
public "readForm"(radarIconDefinition0: $RadarIconDefinition$$Type, string1s: string[]): $RadarIconForm
get "failureResult"(): $XaeroIcon
get "id"(): string
get "prerenderer"(): $IRadarIconFormPrerenderer
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorAdderNode" {
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorTextFieldOptionsNode } from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode"

export class $EditorAdderNode extends $EditorNode {
public "getNameField"(): $EditorTextFieldOptionsNode
public "isConfirmed"(): boolean
public "reset"(): void
get "nameField"(): $EditorTextFieldOptionsNode
get "confirmed"(): boolean
}
}

declare module "packages/xaero/hud/controls/key/function/$KeyMappingFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyMappingFunction {
public "isHeld"(): boolean
public "onPress"(): void
public "onRelease"(): void
get "held"(): boolean
}
}

declare module "packages/xaero/hud/minimap/info/$InfoDisplays" {
import { $InfoDisplayManager } from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import { $InfoDisplayIO } from "packages/xaero/hud/minimap/info/$InfoDisplayIO"
import { $InfoDisplayRenderer } from "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer"

export class $InfoDisplays {
constructor()

public "getIo"(): $InfoDisplayIO
public "getManager"(): $InfoDisplayManager
public "getRenderer"(): $InfoDisplayRenderer
get "io"(): $InfoDisplayIO
get "manager"(): $InfoDisplayManager
get "renderer"(): $InfoDisplayRenderer
}
}

declare module "packages/xaero/hud/module/$ModuleTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleTransform {
constructor()

public "copy"(): $ModuleTransform
get "centered"(): boolean
set "centered"(value: boolean)
get "flippedHor"(): boolean
set "flippedHor"(value: boolean)
get "flippedVer"(): boolean
set "flippedVer"(value: boolean)
get "fromBottom"(): boolean
set "fromBottom"(value: boolean)
get "fromOldSystem"(): boolean
set "fromOldSystem"(value: boolean)
get "fromRight"(): boolean
set "fromRight"(value: boolean)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder" {
import { $EditorNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import { $EditorSimpleButtonNode$Builder } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$Builder"
import { $EditorTextFieldOptionsNode$Builder } from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode$Builder"
import { $ObjectCategorySetting$$Type } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import { $EditorSettingsNode } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"

export class $EditorSettingsNode$Builder<SD extends $EditorSettingsNode<any>, SDB extends $EditorSettingsNode$Builder<SD, SDB>> extends $EditorNode$Builder<$EditorSettingsNode$Builder<SD, SDB>> {
public "getDeleteButtonBuilder"(): $EditorSimpleButtonNode$Builder
public "getNameOptionBuilder"(): $EditorTextFieldOptionsNode$Builder
public "setProtection"(boolean0: boolean): SDB
public "setRootSettings"(boolean0: boolean): SDB
public "setSettingValue"<T>(objectCategorySetting0: $ObjectCategorySetting$$Type<T>, t1: T): SDB
get "deleteButtonBuilder"(): $EditorSimpleButtonNode$Builder
get "nameOptionBuilder"(): $EditorTextFieldOptionsNode$Builder
set "protection"(value: boolean)
set "rootSettings"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/waypoint/$DeathpointHandler" {
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"

export class $DeathpointHandler {
constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type)

public "createDeathpoint"(player0: $Player$$Type): void
public "createDeathpoint"(player0: $Player$$Type, minimapWorld1: $MinimapWorld$$Type, boolean2: boolean): void
}
}

declare module "packages/xaero/hud/minimap/radar/icon/definition/form/type/$IRadarIconFormReader" {
import { $RadarIconFormType$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/form/type/$RadarIconFormType"
import { $RadarIconForm } from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import { $RadarIconDefinition$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition"

export interface $IRadarIconFormReader {
"read"(radarIconFormType0: $RadarIconFormType$$Type, string1s: string[], radarIconDefinition2: $RadarIconDefinition$$Type): $RadarIconForm
}

export namespace $IRadarIconFormReader {
const probejs$$marker: never
}
export abstract class $IRadarIconFormReader$$Static implements $IRadarIconFormReader {
}
}

declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElement" {
import { $UUID } from "packages/java/util/$UUID"
import { $IRenderedPlayerTracker$$Type } from "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"

export class $PlayerTrackerMinimapElement<P> {
constructor(p0: P, iRenderedPlayerTracker1: $IRenderedPlayerTracker$$Type<P>)

public "getDimension"(): $ResourceKey<$Level>
public "getPlayer"(): P
public "getPlayerId"(): $UUID
public "getX"(): double
public "getY"(): double
public "getZ"(): double
public "setRenderedOnRadar"(boolean0: boolean): void
public "wasRenderedOnRadar"(): boolean
get "dimension"(): $ResourceKey<$Level>
get "player"(): P
get "playerId"(): $UUID
get "x"(): double
get "y"(): double
get "z"(): double
set "renderedOnRadar"(value: boolean)
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$Builder" {
import { $EditorNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import { $EditorOptionsNode$IOptionsNodeIsActiveSupplier$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier"

export class $EditorOptionsNode$Builder<V, B extends $EditorOptionsNode$Builder<V, B>> extends $EditorNode$Builder<B> {
public "setCurrentValue"(v0: V): B
public "setDefault"(): B
public "setDisplayName"(string0: string): B
public "setIsActiveSupplier"(iOptionsNodeIsActiveSupplier0: $EditorOptionsNode$IOptionsNodeIsActiveSupplier$$Type): B
set "currentValue"(value: V)
set "displayName"(value: string)
set "isActiveSupplier"(value: $EditorOptionsNode$IOptionsNodeIsActiveSupplier$$Type)
}
}

declare module "packages/xaero/hud/category/setting/$ObjectCategorySetting" {
import { $Function } from "packages/java/util/function/$Function"
import { $EditorSettingType } from "packages/xaero/hud/category/ui/setting/$EditorSettingType"
import { $IntFunction } from "packages/java/util/function/$IntFunction"
import { $CursorBox } from "packages/xaero/common/graphics/$CursorBox"

export class $ObjectCategorySetting<T> {
public "getDefaultValue"(): T
public "getDisplayName"(): string
public "getId"(): string
public "getIndexReader"(): $IntFunction<T>
public "getIndexWriter"(): $Function<T, integer>
public "getSettingUIType"(): $EditorSettingType
public "getTooltip"(): $CursorBox
public "getUiFirstOption"(): integer
public "getUiLastOption"(): integer
public "getWidgetValueNameProvider"(): $Function<T, string>
get "defaultValue"(): T
get "displayName"(): string
get "id"(): string
get "indexReader"(): $IntFunction<T>
get "indexWriter"(): $Function<T, integer>
get "settingUIType"(): $EditorSettingType
get "tooltip"(): $CursorBox
get "uiFirstOption"(): integer
get "uiLastOption"(): integer
get "widgetValueNameProvider"(): $Function<T, string>
}
}

declare module "packages/xaero/hud/minimap/player/tracker/system/$IRenderedPlayerTracker" {
import { $ITrackedPlayerReader } from "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader"
import { $Iterator } from "packages/java/util/$Iterator"

export interface $IRenderedPlayerTracker<P> {
"getReader"(): $ITrackedPlayerReader<P>
"getTrackedPlayerIterator"(): $Iterator<P>
get "reader"(): $ITrackedPlayerReader<P>
get "trackedPlayerIterator"(): $Iterator<P>
}

export namespace $IRenderedPlayerTracker {
const probejs$$marker: never
}
export abstract class $IRenderedPlayerTracker$$Static<P> implements $IRenderedPlayerTracker<P> {
}
}

declare module "packages/xaero/hud/category/rule/$ObjectCategoryIncludeList" {
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ObjectCategoryListRule } from "packages/xaero/hud/category/rule/$ObjectCategoryListRule"
import { $Spliterator } from "packages/java/util/$Spliterator"

export class $ObjectCategoryIncludeList<E, P, S> extends $ObjectCategoryListRule<E, P, S> {
public "forEach"(consumer0: $Consumer$$Type<string>): void
public "spliterator"(): $Spliterator<string>
}
}

declare module "packages/xaero/hud/category/rule/resolver/$ObjectCategoryRuleResolver" {
import { $FilterObjectCategory, $FilterObjectCategory$$Type } from "packages/xaero/hud/category/$FilterObjectCategory"

export class $ObjectCategoryRuleResolver {
public "resolve"<E, P, C extends $FilterObjectCategory<E, P, any, C>>(c0: C, e1: E, p2: P): C
}
}

declare module "packages/xaero/hud/minimap/radar/icon/$RadarIconManager" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $XaeroIcon } from "packages/xaero/common/icon/$XaeroIcon"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RadarIconCreator$$Type } from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $RadarIconManager {
static readonly "DOT": $XaeroIcon
static readonly "FAILED": $XaeroIcon

constructor(radarIconCreator0: $RadarIconCreator$$Type)

public "allowPrerender"(): void
public "get"<T extends $Entity>(t0: T, float1: float, boolean2: boolean, boolean3: boolean, guiGraphics4: $GuiGraphics$$Type, renderTarget5: $RenderTarget$$Type): $XaeroIcon
public "onModelPartRenderTrace"(modelPart0: $ModelPart$$Type, float1: float, float2: float, float3: float, float4: float): void
public "onModelRenderTrace"(entityModel0: $EntityModel$$Type<any>, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float): void
public "reset"(): void
public "resetResources"(): void
}
}

declare module "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNodeBuilder" {
import { $EditorOptionsNode } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import { $IEditorSettingNode } from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode"
import { $ObjectCategorySetting$$Type } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"

export interface $IEditorSettingNodeBuilder<V, SD extends ($EditorOptionsNode<integer> & $IEditorSettingNode<V>)> {
"build"(): SD
"setRootSettings"(boolean0: boolean): $IEditorSettingNodeBuilder<V, SD>
"setSetting"(objectCategorySetting0: $ObjectCategorySetting$$Type<V>): $IEditorSettingNodeBuilder<V, SD>
"setSettingValue"(v0: V): $IEditorSettingNodeBuilder<V, SD>
set "rootSettings"(value: boolean)
set "setting"(value: $ObjectCategorySetting$$Type<V>)
set "settingValue"(value: V)
}

export namespace $IEditorSettingNodeBuilder {
const probejs$$marker: never
}
export abstract class $IEditorSettingNodeBuilder$$Static<V, SD extends ($EditorOptionsNode<integer> & $IEditorSettingNode<V>)> implements $IEditorSettingNodeBuilder<V, SD> {
}
}

declare module "packages/xaero/hud/minimap/$Minimap" {
import { $HudMod, $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapFBORenderer } from "packages/xaero/common/minimap/render/$MinimapFBORenderer"
import { $InfoDisplayRenderer } from "packages/xaero/common/minimap/info/render/$InfoDisplayRenderer"
import { $WaypointsGuiRenderer } from "packages/xaero/hud/minimap/waypoint/render/$WaypointsGuiRenderer"
import { $CompassRenderer } from "packages/xaero/hud/minimap/compass/render/$CompassRenderer"
import { $InfoDisplayManager } from "packages/xaero/common/minimap/info/$InfoDisplayManager"
import { $Throwable, $Throwable$$Type } from "packages/java/lang/$Throwable"
import { $WaypointWorldRenderer } from "packages/xaero/hud/minimap/waypoint/render/world/$WaypointWorldRenderer"
import { $MinimapSafeModeRenderer } from "packages/xaero/common/minimap/render/$MinimapSafeModeRenderer"
import { $InfoDisplays } from "packages/xaero/hud/minimap/info/$InfoDisplays"
import { $MinimapElementWorldRendererHandler } from "packages/xaero/hud/minimap/element/render/world/$MinimapElementWorldRendererHandler"
import { $MinimapElementOverMapRendererHandler } from "packages/xaero/hud/minimap/element/render/over/$MinimapElementOverMapRendererHandler"
import { $WaypointsIngameRenderer } from "packages/xaero/common/minimap/waypoints/render/$WaypointsIngameRenderer"
import { $WaypointsGuiRenderer as $WaypointsGuiRenderer$0 } from "packages/xaero/common/minimap/waypoints/render/$WaypointsGuiRenderer"
import { $WaypointMapRenderer } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderer"

export class $Minimap {
constructor(hudMod0: $HudMod$$Type)

public "checkCrashes"(): void
public "getCompassRenderer"(): $CompassRenderer
public "getCrashedWith"(): $Throwable
/** @deprecated */
public "getInfoDisplayManager"(): $InfoDisplayManager
/** @deprecated */
public "getInfoDisplayRenderer"(): $InfoDisplayRenderer
public "getInfoDisplays"(): $InfoDisplays
public "getMinimapFBORenderer"(): $MinimapFBORenderer
public "getMinimapSafeModeRenderer"(): $MinimapSafeModeRenderer
public "getModMain"(): $HudMod
public "getOverMapRendererHandler"(): $MinimapElementOverMapRendererHandler
/** @deprecated */
public "getWaypointGuiRenderer"(): $WaypointsGuiRenderer
public "getWaypointMapRenderer"(): $WaypointMapRenderer
public "getWaypointWorldRenderer"(): $WaypointWorldRenderer
/** @deprecated */
public "getWaypointsGuiRenderer"(): $WaypointsGuiRenderer$0
/** @deprecated */
public "getWaypointsIngameRenderer"(): $WaypointsIngameRenderer
public "getWorldRendererHandler"(): $MinimapElementWorldRendererHandler
public "setCrashedWith"(throwable0: $Throwable$$Type): void
public "usingFBO"(): boolean
get "compassRenderer"(): $CompassRenderer
get "crashedWith"(): $Throwable
get "infoDisplayManager"(): $InfoDisplayManager
get "infoDisplayRenderer"(): $InfoDisplayRenderer
get "infoDisplays"(): $InfoDisplays
get "minimapFBORenderer"(): $MinimapFBORenderer
get "minimapSafeModeRenderer"(): $MinimapSafeModeRenderer
get "modMain"(): $HudMod
get "overMapRendererHandler"(): $MinimapElementOverMapRendererHandler
get "waypointGuiRenderer"(): $WaypointsGuiRenderer
get "waypointMapRenderer"(): $WaypointMapRenderer
get "waypointWorldRenderer"(): $WaypointWorldRenderer
get "waypointsGuiRenderer"(): $WaypointsGuiRenderer$0
get "waypointsIngameRenderer"(): $WaypointsIngameRenderer
get "worldRendererHandler"(): $MinimapElementWorldRendererHandler
set "crashedWith"(value: $Throwable$$Type)
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext" {
import { $AbstractWaypointRenderContext } from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"

export class $WaypointMapRenderContext extends $AbstractWaypointRenderContext {
constructor()

}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace" {
import { $CustomRenderTypes$EntityIconLayerPhases, $CustomRenderTypes$EntityIconLayerPhases$$Type } from "packages/xaero/common/graphics/$CustomRenderTypes$EntityIconLayerPhases"
import { $EntityModel, $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $ModelPartRenderTrace } from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelPartRenderTrace"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ModelRenderTrace {
readonly "alpha": float
readonly "blue": float
readonly "green": float
readonly "layerPhases": $CustomRenderTypes$EntityIconLayerPhases
readonly "model": $EntityModel<any>
readonly "red": float
readonly "renderAtlasSprite": $TextureAtlasSprite
readonly "renderTexture": $ResourceLocation

constructor(entityModel0: $EntityModel$$Type<any>, resourceLocation1: $ResourceLocation$$Type, textureAtlasSprite2: $TextureAtlasSprite$$Type, entityIconLayerPhases3: $CustomRenderTypes$EntityIconLayerPhases$$Type, float4: float, float5: float, float6: float, float7: float)

public "addVisibleModelPart"(modelPart0: $ModelPart$$Type, float1: float, float2: float, float3: float, float4: float): void
public "getModelPartRenderInfo"(modelPart0: $ModelPart$$Type): $ModelPartRenderTrace
public "isEmpty"(): boolean
public "sameVisibility"(modelRenderTrace0: $ModelRenderTrace$$Type): boolean
get "allVisible"(): boolean
set "allVisible"(value: boolean)
get "empty"(): boolean
}
}

declare module "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList$Entry" {
import { $EditorListRootEntry$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import { $ObjectSelectionList$Entry } from "packages/net/minecraft/client/gui/components/$ObjectSelectionList$Entry"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export class $GuiCategoryEditor$SettingRowList$Entry extends $ObjectSelectionList$Entry<$GuiCategoryEditor$SettingRowList$Entry<>> {
constructor(settingRowList0: $GuiCategoryEditor$SettingRowList$$Type, editorListRootEntry1: $EditorListRootEntry$$Type, int2: integer)

public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "mouseMoved"(double0: double, double1: double): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "tick"(): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
}

declare module "packages/xaero/hud/pushbox/$PushboxHandler" {
import { $PushboxHandler$State$$Type } from "packages/xaero/hud/pushbox/$PushboxHandler$State"
import { $PushboxManager$$Type } from "packages/xaero/hud/pushbox/$PushboxManager"

export class $PushboxHandler {
constructor()

public "applyPushboxes"(pushboxManager0: $PushboxManager$$Type, state1: $PushboxHandler$State$$Type, int2: integer, int3: integer, double4: double): void
public "applyScreenEdges"(state0: $PushboxHandler$State$$Type, int1: integer, int2: integer, double3: double): void
public "postUpdateAll"(pushboxManager0: $PushboxManager$$Type): void
public "updateAll"(pushboxManager0: $PushboxManager$$Type): void
}
}

declare module "packages/xaero/hud/category/$FilterObjectCategory" {
import { $ObjectCategory } from "packages/xaero/hud/category/$ObjectCategory"
import { $ObjectCategoryIncludeList } from "packages/xaero/hud/category/rule/$ObjectCategoryIncludeList"
import { $FilterObjectCategoryData } from "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData"
import { $ExcludeListMode } from "packages/xaero/hud/category/rule/$ExcludeListMode"
import { $List } from "packages/java/util/$List"
import { $ObjectCategoryRule } from "packages/xaero/hud/category/rule/$ObjectCategoryRule"
import { $ObjectCategoryListRuleType$$Type } from "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType"
import { $ObjectCategoryExcludeList } from "packages/xaero/hud/category/rule/$ObjectCategoryExcludeList"

export class $FilterObjectCategory<E, P, D extends $FilterObjectCategoryData<D>, C extends $FilterObjectCategory<E, P, D, C>> extends $ObjectCategory<D, C> {
public "getBaseRule"(): $ObjectCategoryRule<E, P>
public "getExcludeList"<S>(objectCategoryListRuleType0: $ObjectCategoryListRuleType$$Type<E, P, S>): $ObjectCategoryExcludeList<E, P, S>
public "getExcludeLists"(): $List<$ObjectCategoryExcludeList<E, P, any>>
public "getExcludeMode"(): $ExcludeListMode
public "getIncludeInSuperCategory"(): boolean
public "getIncludeList"<S>(objectCategoryListRuleType0: $ObjectCategoryListRuleType$$Type<E, P, S>): $ObjectCategoryIncludeList<E, P, S>
public "getIncludeLists"(): $List<$ObjectCategoryIncludeList<E, P, any>>
get "baseRule"(): $ObjectCategoryRule<E, P>
get "excludeLists"(): $List<$ObjectCategoryExcludeList<E, P, any>>
get "excludeMode"(): $ExcludeListMode
get "includeInSuperCategory"(): boolean
get "includeLists"(): $List<$ObjectCategoryIncludeList<E, P, any>>
}
}

declare module "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode$Builder" {
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $ListFactory$$Type } from "packages/xaero/common/misc/$ListFactory"
import { $EditorExpandingOptionsNode$Builder } from "packages/xaero/hud/category/ui/node/options/$EditorExpandingOptionsNode$Builder"

export class $EditorTextFieldOptionsNode$Builder extends $EditorExpandingOptionsNode$Builder<string, $EditorTextFieldOptionsNode$Builder> {
public static "begin"(listFactory0: $ListFactory$$Type): $EditorTextFieldOptionsNode$Builder
public "needsInputStringValidator"(): boolean
public "setAllowCustomInput"(boolean0: boolean): $EditorTextFieldOptionsNode$Builder
public "setAutoConfirm"(boolean0: boolean): $EditorTextFieldOptionsNode$Builder
public "setCurrentValue"(string0: string): $EditorTextFieldOptionsNode$Builder
public "setInput"(string0: string): $EditorTextFieldOptionsNode$Builder
public "setInputStringValidator"(predicate0: $Predicate$$Type<string>): $EditorTextFieldOptionsNode$Builder
public "setMaxLength"(int0: integer): $EditorTextFieldOptionsNode$Builder
set "allowCustomInput"(value: boolean)
set "autoConfirm"(value: boolean)
set "currentValue"(value: string)
set "input"(value: string)
set "inputStringValidator"(value: $Predicate$$Type<string>)
set "maxLength"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/radar/icon/definition/$RadarIconDefinition" {
import { $RadarIconForm } from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import { $Method, $Method$$Type } from "packages/java/lang/reflect/$Method"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $RadarIconModelConfig } from "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig"

export class $RadarIconDefinition {
constructor()

public "construct"(resourceLocation0: $ResourceLocation$$Type): void
public "getEntityId"(): $ResourceLocation
public "getModelConfig"(int0: integer): $RadarIconModelConfig
public "getOldVariantIdMethod"(): $Method
public "getOldVariantIdMethodString"(): string
public "getVariantForm"(string0: string): $RadarIconForm
public "getVariantIdBuilderMethod"(): $Method
public "getVariantIdBuilderMethodString"(): string
public "getVariantMethod"(): $Method
public "getVariantMethodString"(): string
public "setOldVariantIdMethod"(method0: $Method$$Type): void
public "setVariantIdBuilderMethod"(method0: $Method$$Type): void
public "setVariantMethod"(method0: $Method$$Type): void
get "entityId"(): $ResourceLocation
get "oldVariantIdMethod"(): $Method
get "oldVariantIdMethodString"(): string
get "variantIdBuilderMethod"(): $Method
get "variantIdBuilderMethodString"(): string
get "variantMethod"(): $Method
get "variantMethodString"(): string
set "oldVariantIdMethod"(value: $Method$$Type)
set "variantIdBuilderMethod"(value: $Method$$Type)
set "variantMethod"(value: $Method$$Type)
}
}

declare module "packages/xaero/hud/minimap/info/$InfoDisplay" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $InfoDisplayOnCompile } from "packages/xaero/hud/minimap/info/render/compile/$InfoDisplayOnCompile"
import { $InfoDisplayStateCodec } from "packages/xaero/hud/minimap/info/codec/$InfoDisplayStateCodec"

export class $InfoDisplay<T> {
public "createWidget"(int0: integer, int1: integer, int2: integer, int3: integer): $AbstractWidget
public "getBackgroundColor"(): integer
public "getCodec"(): $InfoDisplayStateCodec<T>
public "getCompiler"(): $InfoDisplayOnCompile<T>
public "getDefaultState"(): T
public "getId"(): string
public "getName"(): $Component
public "getState"(): T
public "getTextColor"(): integer
public "reset"(): void
public "setBackgroundColor"(int0: integer): void
public "setState"(t0: T): void
public "setTextColor"(int0: integer): void
get "backgroundColor"(): integer
get "codec"(): $InfoDisplayStateCodec<T>
get "compiler"(): $InfoDisplayOnCompile<T>
get "defaultState"(): T
get "id"(): string
get "name"(): $Component
get "state"(): T
get "textColor"(): integer
set "backgroundColor"(value: integer)
set "state"(value: T)
set "textColor"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderProvider" {
import { $RadarRenderContext, $RadarRenderContext$$Type } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import { $EntityRadarCategory$$Type } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $MinimapElementRenderProvider } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $RadarRenderProvider extends $MinimapElementRenderProvider<$Entity, $RadarRenderContext> {
constructor()

public "begin"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, radarRenderContext1: $RadarRenderContext$$Type): void
public "end"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, radarRenderContext1: $RadarRenderContext$$Type): void
public "getNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, radarRenderContext1: $RadarRenderContext$$Type): $Entity
public "hasNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, radarRenderContext1: $RadarRenderContext$$Type): boolean
public "isUsed"(): boolean
public "setupContextAndGetNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, radarRenderContext1: $RadarRenderContext$$Type): $Entity
public "setupContextForCategory"(entityRadarCategory0: $EntityRadarCategory$$Type, radarRenderContext1: $RadarRenderContext$$Type): void
public "setupContextForEntity"(entity0: $Entity$$Type, radarRenderContext1: $RadarRenderContext$$Type): void
get "used"(): boolean
}
}

declare module "packages/xaero/hud/controls/key/$KeyMappingController" {
import { $KeyMapping, $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $KeyMappingFunction, $KeyMappingFunction$$Type } from "packages/xaero/hud/controls/key/function/$KeyMappingFunction"

export class $KeyMappingController implements $Iterable<$KeyMappingFunction> {
constructor(keyMapping0: $KeyMapping$$Type, boolean1: boolean)

public "add"(keyMappingFunction0: $KeyMappingFunction$$Type): void
public "forEach"(consumer0: $Consumer$$Type<$KeyMappingFunction$$Type>): void
public "getFunctions"(): $Iterable<$KeyMappingFunction>
public "getKeyMapping"(): $KeyMapping
public "isPressed"(): boolean
public "isXaeroKey"(): boolean
public "iterator"(): $Iterator<$KeyMappingFunction>
public "setPressed"(boolean0: boolean): void
public "spliterator"(): $Spliterator<$KeyMappingFunction>
[Symbol.iterator](): IterableIterator<$KeyMappingFunction>;
get "functions"(): $Iterable<$KeyMappingFunction>
get "keyMapping"(): $KeyMapping
get "pressed"(): boolean
get "xaeroKey"(): boolean
set "pressed"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/info/$InfoDisplayIO" {
import { $InfoDisplayManager$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplayManager"
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"

export class $InfoDisplayIO {
constructor(infoDisplayManager0: $InfoDisplayManager$$Type)

public "loadInfoDisplayLine"(string0s: string[]): void
public "loadInfoDisplayOrderLine"(string0s: string[]): void
public "save"(printWriter0: $PrintWriter$$Type): void
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorSettingsNode" {
import { $IEditorSettingNode } from "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode"
import { $EditorOptionsNode } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode"
import { $ObjectCategorySetting, $ObjectCategorySetting$$Type } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorTextFieldOptionsNode } from "packages/xaero/hud/category/ui/node/options/text/$EditorTextFieldOptionsNode"
import { $Map } from "packages/java/util/$Map"

export class $EditorSettingsNode<SETTING_DATA extends ($EditorOptionsNode<any> & $IEditorSettingNode<any>)> extends $EditorNode {
public "getNameOption"(): $EditorTextFieldOptionsNode
public "getProtection"(): boolean
public "getSettingData"(objectCategorySetting0: $ObjectCategorySetting$$Type<any>): $IEditorSettingNode<any>
public "getSettings"(): $Map<$ObjectCategorySetting<any>, SETTING_DATA>
public "isRootSettings"(): boolean
public "isToBeDeleted"(): boolean
public "setProtected"(boolean0: boolean): void
public "setToBeDeleted"(): void
get "nameOption"(): $EditorTextFieldOptionsNode
get "protection"(): boolean
get "settings"(): $Map<$ObjectCategorySetting<any>, SETTING_DATA>
get "rootSettings"(): boolean
get "toBeDeleted"(): boolean
set "protected"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $IXaeroMinimap$$Type } from "packages/xaero/common/$IXaeroMinimap"

export class $WaypointDeleter {
constructor(iXaeroMinimap0: $IXaeroMinimap$$Type)

public "add"(waypoint0: $Waypoint$$Type): void
public "begin"(): void
public "deleteCollected"(minimapSession0: $MinimapSession$$Type, minimapWorld1: $MinimapWorld$$Type, boolean2: boolean): void
}
}

declare module "packages/xaero/hud/minimap/module/$MinimapSession" {
import { $WaypointSession } from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import { $MultiTextureRenderTypeRendererProvider } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldManager } from "packages/xaero/hud/minimap/world/$MinimapWorldManager"
import { $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"
import { $MinimapWorldStateUpdater } from "packages/xaero/hud/minimap/world/state/$MinimapWorldStateUpdater"
import { $MinimapProcessor } from "packages/xaero/common/minimap/$MinimapProcessor"
import { $MinimapWorldState } from "packages/xaero/hud/minimap/world/state/$MinimapWorldState"
import { $ModuleSession } from "packages/xaero/hud/module/$ModuleSession"
import { $Minecraft } from "packages/net/minecraft/client/$Minecraft"
import { $MinimapDimensionHelper } from "packages/xaero/hud/minimap/world/$MinimapDimensionHelper"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $MinimapWorldManagerIO } from "packages/xaero/hud/minimap/world/io/$MinimapWorldManagerIO"
import { $RadarSession } from "packages/xaero/hud/minimap/radar/$RadarSession"

export class $MinimapSession extends $ModuleSession<$MinimapSession> {
constructor(hudMod0: $HudMod$$Type, hudModule1: $HudModule$$Type<$MinimapSession$$Type>, clientPacketListener2: $ClientPacketListener$$Type)

public "getConfiguredWidth"(): integer
public "getDimensionHelper"(): $MinimapDimensionHelper
public "getHideMinimapUnderF3"(): boolean
public "getHideMinimapUnderScreen"(): boolean
public "getMc"(): $Minecraft
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getProcessor"(): $MinimapProcessor
public "getRadarSession"(): $RadarSession
public "getWaypointSession"(): $WaypointSession
public "getWorldManager"(): $MinimapWorldManager
public "getWorldManagerIO"(): $MinimapWorldManagerIO
public "getWorldState"(): $MinimapWorldState
public "getWorldStateUpdater"(): $MinimapWorldStateUpdater
get "configuredWidth"(): integer
get "dimensionHelper"(): $MinimapDimensionHelper
get "hideMinimapUnderF3"(): boolean
get "hideMinimapUnderScreen"(): boolean
get "mc"(): $Minecraft
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "processor"(): $MinimapProcessor
get "radarSession"(): $RadarSession
get "waypointSession"(): $WaypointSession
get "worldManager"(): $MinimapWorldManager
get "worldManagerIO"(): $MinimapWorldManagerIO
get "worldState"(): $MinimapWorldState
get "worldStateUpdater"(): $MinimapWorldStateUpdater
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbstractWaypointRenderContext {
constructor()

get "dimCoordinateScale"(): double
set "dimCoordinateScale"(value: double)
}
}

declare module "packages/xaero/hud/minimap/element/render/over/$MinimapElementOverMapRendererHandler" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $MinimapElementRendererHandler } from "packages/xaero/common/minimap/element/render/$MinimapElementRendererHandler"

export class $MinimapElementOverMapRendererHandler extends $MinimapElementRendererHandler {
public "prepareRender"(double0: double, double1: double, double2: double, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, float8: float): void
public static "translatePosition"(poseStack0: $PoseStack$$Type, int1: integer, int2: integer, int3: integer, int4: integer, double5: double, double6: double, double7: double, double8: double, double9: double, boolean10: boolean, double11s: double[]): boolean
}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters" {
import { $RadarIconForm, $RadarIconForm$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/form/$RadarIconForm"
import { $RadarIconModelConfig, $RadarIconModelConfig$$Type } from "packages/xaero/hud/minimap/radar/icon/definition/form/model/config/$RadarIconModelConfig"

export class $RadarIconCreator$Parameters {
readonly "debug": boolean
readonly "defaultModelConfig": $RadarIconModelConfig
readonly "form": $RadarIconForm
readonly "scale": float
readonly "variant": any

constructor(object0: any, radarIconModelConfig1: $RadarIconModelConfig$$Type, radarIconForm2: $RadarIconForm$$Type, float3: float, boolean4: boolean)

}
}

declare module "packages/xaero/hud/minimap/player/tracker/system/$ITrackedPlayerReader" {
import { $UUID } from "packages/java/util/$UUID"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"

export interface $ITrackedPlayerReader<P> {
"getDimension"(p0: P): $ResourceKey<$Level>
"getId"(p0: P): $UUID
"getX"(p0: P): double
"getY"(p0: P): double
"getZ"(p0: P): double
}

export namespace $ITrackedPlayerReader {
const probejs$$marker: never
}
export abstract class $ITrackedPlayerReader$$Static<P> implements $ITrackedPlayerReader<P> {
}
}

declare module "packages/xaero/hud/pushbox/$PushboxHandler$State" {
import { $ModuleSession$$Type } from "packages/xaero/hud/module/$ModuleSession"

export class $PushboxHandler$State {
constructor()

public "resetForModule"(moduleSession0: $ModuleSession$$Type<any>, int1: integer, int2: integer, double3: double): $PushboxHandler$State
get "h"(): integer
set "h"(value: integer)
get "w"(): integer
set "w"(value: integer)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$EntityRenderTracer" {
import { $ModelRenderTrace } from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$ModelRenderTrace"
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $List } from "packages/java/util/$List"
import { $EntityModel, $EntityModel$$Type } from "packages/net/minecraft/client/model/$EntityModel"
import { $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $ModelPart$$Type } from "packages/net/minecraft/client/model/geom/$ModelPart"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRenderTracer {
static "TRACING_MODEL_RENDERS": boolean

constructor()

public "getEntityRendererModel"<T extends $Entity>(entityRenderer0: $EntityRenderer$$Type<T>): $EntityModel<T>
public "onModelPartRender"(modelPart0: $ModelPart$$Type, float1: float, float2: float, float3: float, float4: float): void
public "onModelRender"(entityModel0: $EntityModel$$Type<any>, vertexConsumer1: $VertexConsumer$$Type, float2: float, float3: float, float4: float, float5: float): void
public "trace"<T extends $Entity>(poseStack0: $PoseStack$$Type, t1: T, entityRenderer2: $EntityRenderer$$Type<T>): $List<$ModelRenderTrace>
}
}

declare module "packages/xaero/hud/minimap/radar/category/serialization/data/$EntityRadarCategoryData" {
import { $FilterObjectCategoryData } from "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData"

export class $EntityRadarCategoryData extends $FilterObjectCategoryData<$EntityRadarCategoryData> {
}
}

declare module "packages/xaero/hud/minimap/waypoint/set/$WaypointSet" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List$$Type } from "packages/java/util/$List"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $WaypointSet {
public "add"(waypoint0: $Waypoint$$Type): void
public "add"(waypoint0: $Waypoint$$Type, boolean1: boolean): void
public "addAll"(collection0: $Collection$$Type<$Waypoint$$Type>, boolean1: boolean): void
public "addAll"(collection0: $Collection$$Type<$Waypoint$$Type>): void
public "addTo"(list0: $List$$Type<$Waypoint$$Type>): void
public "clear"(): void
public "get"(int0: integer): $Waypoint
public "getName"(): string
public "getWaypoints"(): $Iterable<$Waypoint>
public "isEmpty"(): boolean
public "remove"(int0: integer): $Waypoint
public "remove"(waypoint0: $Waypoint$$Type): void
public "removeAll"(collection0: $Collection$$Type<$Waypoint$$Type>): void
public "set"(int0: integer, waypoint1: $Waypoint$$Type): $Waypoint
public "size"(): integer
get "name"(): string
get "waypoints"(): $Iterable<$Waypoint>
get "empty"(): boolean
}
}

declare module "packages/xaero/hud/minimap/info/render/$InfoDisplayRenderer" {
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Minimap$$Type } from "packages/xaero/hud/minimap/$Minimap"
import { $BlockPos$$Type } from "packages/net/minecraft/core/$BlockPos"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $InfoDisplayRenderer {
static readonly "DEPTH_OFFSET": integer

constructor()

public "render"(guiGraphics0: $GuiGraphics$$Type, minimapSession1: $MinimapSession$$Type, minimap2: $Minimap$$Type, int3: integer, int4: integer, blockPos5: $BlockPos$$Type, int6: integer, int7: integer, float8: float, bufferSource9: $MultiBufferSource$BufferSource$$Type): void
}
}

declare module "packages/xaero/hud/controls/$ControlsRegister" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $KeyMappingControllerManager } from "packages/xaero/hud/controls/key/$KeyMappingControllerManager"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"

export class $ControlsRegister {
public "getKeyMappingControllers"(): $KeyMappingControllerManager
public "onStage2"(): void
public "registerKeybindings"(consumer0: $Consumer$$Type<$KeyMapping$$Type>): void
get "keyMappingControllers"(): $KeyMappingControllerManager
}
}

declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarBackwardsCompatibilityConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EntityRadarBackwardsCompatibilityConfig {
constructor()

public "readSetting"(string0s: string[]): boolean
get "alwaysEntityNametags"(): boolean
set "alwaysEntityNametags"(value: boolean)
get "displayNameWhenIconFails"(): boolean
set "displayNameWhenIconFails"(value: boolean)
get "dotsSize"(): integer
set "dotsSize"(value: integer)
get "entityAmount"(): integer
set "entityAmount"(value: integer)
get "friendlyMobNames"(): integer
set "friendlyMobNames"(value: integer)
get "headsScale"(): double
set "headsScale"(value: double)
get "heightLimit"(): integer
set "heightLimit"(value: integer)
get "hostileColor"(): integer
set "hostileColor"(value: integer)
get "hostileIcons"(): integer
set "hostileIcons"(value: integer)
get "hostileMobNames"(): integer
set "hostileMobNames"(value: integer)
get "itemFramesOnRadar"(): boolean
set "itemFramesOnRadar"(value: boolean)
get "itemNames"(): integer
set "itemNames"(value: integer)
get "itemsColor"(): integer
set "itemsColor"(value: integer)
get "mobIcons"(): integer
set "mobIcons"(value: integer)
get "mobsColor"(): integer
set "mobsColor"(value: integer)
get "otherColor"(): integer
set "otherColor"(value: integer)
get "otherNames"(): integer
set "otherNames"(value: integer)
get "otherTeamColor"(): integer
set "otherTeamColor"(value: integer)
get "otherTeamsNames"(): integer
set "otherTeamsNames"(value: integer)
get "playerIcons"(): integer
set "playerIcons"(value: integer)
get "playerNames"(): integer
set "playerNames"(value: integer)
get "playersColor"(): integer
set "playersColor"(value: integer)
get "showEntityHeight"(): boolean
set "showEntityHeight"(value: boolean)
get "showHostile"(): boolean
set "showHostile"(value: boolean)
get "showItems"(): boolean
set "showItems"(value: boolean)
get "showMobs"(): boolean
set "showMobs"(value: boolean)
get "showOther"(): boolean
set "showOther"(value: boolean)
get "showOtherTeam"(): boolean
set "showOtherTeam"(value: boolean)
get "showPlayers"(): boolean
set "showPlayers"(value: boolean)
get "showTamed"(): boolean
set "showTamed"(value: boolean)
get "tamedIcons"(): integer
set "tamedIcons"(value: integer)
get "tamedMobNames"(): integer
set "tamedMobNames"(value: integer)
get "tamedMobsColor"(): integer
set "tamedMobsColor"(value: integer)
}
}

declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarDefaultCategories" {
import { $ModSettings$$Type } from "packages/xaero/common/settings/$ModSettings"
import { $EntityRadarCategory } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"

export class $EntityRadarDefaultCategories {
constructor()

public "setupDefault"(modSettings0: $ModSettings$$Type): $EntityRadarCategory
set "upDefault"(value: $ModSettings$$Type)
}
}

declare module "packages/xaero/hud/minimap/waypoint/$TemporaryWaypointHandler" {
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"

export class $TemporaryWaypointHandler {
constructor(hudMod0: $HudMod$$Type)

public "createTemporaryWaypoint"(minimapWorld0: $MinimapWorld$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean, double5: double): void
public "createTemporaryWaypoint"(minimapWorld0: $MinimapWorld$$Type, int1: integer, int2: integer, int3: integer, boolean4: boolean): void
public "createTemporaryWaypoint"(minimapWorld0: $MinimapWorld$$Type, int1: integer, int2: integer, int3: integer): void
}
}

declare module "packages/xaero/hud/path/$XaeroPath" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"

export class $XaeroPath {
public "applyToFilePath"(path0: $Path$$Type): $Path
public "getAtIndex"(int0: integer): $XaeroPath
public "getLastNode"(): string
public "getNodeCount"(): integer
public "getParent"(): $XaeroPath
public "getRoot"(): $XaeroPath
public "getSubPath"(int0: integer): $XaeroPath
public "isSubOf"(xaeroPath0: $XaeroPath$$Type): boolean
public "resolve"(string0: string): $XaeroPath
public "resolve"(xaeroPath0: $XaeroPath$$Type): $XaeroPath
public "resolveSibling"(string0: string): $XaeroPath
public static "root"(string0: string, boolean1: boolean): $XaeroPath
public static "root"(string0: string): $XaeroPath
get "lastNode"(): string
get "nodeCount"(): integer
get "parent"(): $XaeroPath
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderProvider" {
import { $AbstractWaypointRenderProvider } from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider"
import { $WaypointMapRenderContext } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

export class $WaypointMapRenderProvider extends $AbstractWaypointRenderProvider<$WaypointMapRenderContext> {
constructor()

}
}

declare module "packages/xaero/hud/minimap/player/tracker/$PlayerTrackerMinimapElementRenderContext" {
import { $VertexConsumer, $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Level, $Level$$Type } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$$Type } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRenderer"

export class $PlayerTrackerMinimapElementRenderContext {
constructor()

get "coloredBackgroundConsumer"(): $VertexConsumer
set "coloredBackgroundConsumer"(value: $VertexConsumer$$Type)
get "iconScale"(): float
set "iconScale"(value: float)
get "mapDimId"(): $ResourceKey<$Level>
set "mapDimId"(value: $ResourceKey$$Type<$Level$$Type>)
get "renderEntityDimId"(): $ResourceKey<$Level>
set "renderEntityDimId"(value: $ResourceKey$$Type<$Level$$Type>)
get "uniqueTextureUIObjectRenderer"(): $MultiTextureRenderTypeRenderer
set "uniqueTextureUIObjectRenderer"(value: $MultiTextureRenderTypeRenderer$$Type)
}
}

declare module "packages/xaero/hud/minimap/world/io/$MinimapWorldManagerIO" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldRootContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $RootConfigIO } from "packages/xaero/hud/minimap/world/container/config/io/$RootConfigIO"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $MinimapWorldContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"

export class $MinimapWorldManagerIO {
constructor(hudMod0: $HudMod$$Type)

public "checkWorldFileLine"(string0s: string[], minimapWorld1: $MinimapWorld$$Type): boolean
public "convertWorldDimFilesToFolders"(): void
public "convertWorldDimFoldersToSingleFolder"(minimapSession0: $MinimapSession$$Type): void
public static "copyTempFilesBack"(path0: $Path$$Type): void
public "getRootConfigIO"(): $RootConfigIO
public "getWorldFile"(minimapWorld0: $MinimapWorld$$Type): $Path
public "loadAllWorlds"(minimapSession0: $MinimapSession$$Type): void
public "loadWorld"(minimapWorld0: $MinimapWorld$$Type, path1: $Path$$Type): void
public "loadWorldFile"(minimapWorldContainer0: $MinimapWorldContainer$$Type, string1: string, path2: $Path$$Type): boolean
public "loadWorldsFromAllSources"(minimapSession0: $MinimapSession$$Type, clientPacketListener1: $ClientPacketListener$$Type): void
public "onRootContainerAdded"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): void
public "saveAllWorlds"(minimapSession0: $MinimapSession$$Type): void
public "saveWorld"(minimapWorld0: $MinimapWorld$$Type, boolean1: boolean): void
public "saveWorld"(minimapWorld0: $MinimapWorld$$Type): void
public "saveWorlds"(minimapWorldContainer0: $MinimapWorldContainer$$Type): void
get "rootConfigIO"(): $RootConfigIO
}
}

declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntry" {
import { $ConnectionLineType$$Type } from "packages/xaero/hud/category/ui/entry/$ConnectionLineType"
import { $EditorListEntry } from "packages/xaero/hud/category/ui/entry/$EditorListEntry"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorListRootEntry$CenteredEntryFactory$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry$CenteredEntryFactory"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export class $EditorListRootEntry extends $EditorListEntry {
constructor(int0: integer, int1: integer, settingRowList2: $GuiCategoryEditor$SettingRowList$$Type<>, connectionLineType3: $ConnectionLineType$$Type, editorNode4: $EditorNode$$Type)

public "withSubEntry"(centeredEntryFactory0: $EditorListRootEntry$CenteredEntryFactory$$Type): $EditorListRootEntry
}
}

declare module "packages/xaero/hud/$HudSession" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $ModuleSession, $ModuleSession$$Type } from "packages/xaero/hud/module/$ModuleSession"
import { $MultiTextureRenderTypeRendererProvider } from "packages/xaero/common/graphics/renderer/multitexture/$MultiTextureRenderTypeRendererProvider"
import { $ControlsHandler } from "packages/xaero/common/controls/$ControlsHandler"
import { $HudMod, $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $KeyMappingTickHandler } from "packages/xaero/hud/controls/key/$KeyMappingTickHandler"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"

export class $HudSession {
constructor(hudMod0: $HudMod$$Type)

/** @deprecated */
public "getControls"(): $ControlsHandler
public static "getCurrentSession"(): $HudSession
public static "getForPlayer"(localPlayer0: $LocalPlayer$$Type): $HudSession
public "getHudMod"(): $HudMod
public "getKeyMappingTickHandler"(): $KeyMappingTickHandler
/** @deprecated */
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getSession"<MS extends $ModuleSession<MS>>(hudModule0: $HudModule$$Type<MS>): MS
public "init"(clientPacketListener0: $ClientPacketListener$$Type): void
public "tryCleanup"(): void
get "controls"(): $ControlsHandler
get "hudMod"(): $HudMod
get "keyMappingTickHandler"(): $KeyMappingTickHandler
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
}
}

declare module "packages/xaero/hud/minimap/info/widget/$InfoDisplayWidgetFactory" {
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $InfoDisplay$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplay"

export interface $InfoDisplayWidgetFactory<T> {
"create"(int0: integer, int1: integer, int2: integer, int3: integer, infoDisplay4: $InfoDisplay$$Type<T>): $AbstractWidget
}

export namespace $InfoDisplayWidgetFactory {
const probejs$$marker: never
}
export abstract class $InfoDisplayWidgetFactory$$Static<T> implements $InfoDisplayWidgetFactory<T> {
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderReader" {
import { $Waypoint, $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapElementReader } from "packages/xaero/common/minimap/element/render/$MinimapElementReader"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $WaypointMapRenderContext, $WaypointMapRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"

export class $WaypointMapRenderReader extends $MinimapElementReader<$Waypoint, $WaypointMapRenderContext> {
constructor()

public "getCoordinateScale"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, minimapElementRenderInfo2: $MinimapElementRenderInfo$$Type): double
public "getFilterName"(waypoint0: $Waypoint$$Type): string
public "getInteractionBoxBottom"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getInteractionBoxLeft"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getInteractionBoxRight"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getInteractionBoxTop"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getLeftSideLength"(waypoint0: $Waypoint$$Type, minecraft1: $Minecraft$$Type): integer
public "getMenuName"(waypoint0: $Waypoint$$Type): string
public "getMenuTextFillLeftPadding"(waypoint0: $Waypoint$$Type): integer
public "getRenderBoxBottom"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getRenderBoxLeft"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getRenderBoxRight"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getRenderBoxTop"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): integer
public "getRenderX"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): double
public "getRenderY"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): double
public "getRenderZ"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, float2: float): double
public "getRightClickTitleBackgroundColor"(waypoint0: $Waypoint$$Type): integer
public "isHidden"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type): boolean
public "shouldScalePartialCoordinates"(waypoint0: $Waypoint$$Type, waypointMapRenderContext1: $WaypointMapRenderContext$$Type, minimapElementRenderInfo2: $MinimapElementRenderInfo$$Type): boolean
}
}

declare module "packages/xaero/hud/category/rule/$ObjectCategoryRule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ObjectCategoryRule<E, P> {
public "getName"(): string
public "isFollowedBy"(e0: E, p1: P): boolean
get "name"(): string
}
}

declare module "packages/xaero/hud/category/ui/node/$EditorNode$Builder" {
import { $IEditorDataTooltipSupplier$$Type } from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorListRootEntryFactory$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"

export class $EditorNode$Builder<B extends $EditorNode$Builder<B>> {
public "build"(): $EditorNode
public "setDefault"(): B
public "setListEntryFactory"(editorListRootEntryFactory0: $EditorListRootEntryFactory$$Type): B
public "setMovable"(boolean0: boolean): B
public "setTooltipSupplier"(iEditorDataTooltipSupplier0: $IEditorDataTooltipSupplier$$Type): B
set "listEntryFactory"(value: $EditorListRootEntryFactory$$Type)
set "movable"(value: boolean)
set "tooltipSupplier"(value: $IEditorDataTooltipSupplier$$Type)
}
}

declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntry$CenteredEntryFactory" {
import { $EditorListRootEntry$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import { $EditorListEntry } from "packages/xaero/hud/category/ui/entry/$EditorListEntry"

export interface $EditorListRootEntry$CenteredEntryFactory {
"get"(int0: integer, int1: integer, int2: integer, int3: integer, editorListRootEntry4: $EditorListRootEntry$$Type): $EditorListEntry
}

export namespace $EditorListRootEntry$CenteredEntryFactory {
const probejs$$marker: never
}
export abstract class $EditorListRootEntry$CenteredEntryFactory$$Static implements $EditorListRootEntry$CenteredEntryFactory {
}
}

declare module "packages/xaero/hud/category/ui/entry/widget/$EditorTextField$UpdatedValueConsumer" {
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorTextField$UpdatedValueConsumer {
"accept"(string0: string, int1: integer, int2: integer, settingRowList3: $GuiCategoryEditor$SettingRowList$$Type<>): void
}

export namespace $EditorTextField$UpdatedValueConsumer {
const probejs$$marker: never
}
export abstract class $EditorTextField$UpdatedValueConsumer$$Static implements $EditorTextField$UpdatedValueConsumer {
}
}

declare module "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $EditorNode, $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $BiFunction } from "packages/java/util/function/$BiFunction"
import { $CursorBox, $CursorBox$$Type } from "packages/xaero/common/graphics/$CursorBox"

export interface $IEditorDataTooltipSupplier extends $BiFunction<$EditorNode, $EditorNode, $Supplier<$CursorBox>> {
"andThen"<V>(function0: $Function$$Type<$Supplier$$Type<$CursorBox$$Type>, V>): $BiFunction<$EditorNode, $EditorNode, V>
"apply"(editorNode0: $EditorNode$$Type, editorNode1: $EditorNode$$Type): $Supplier<$CursorBox>
}

export namespace $IEditorDataTooltipSupplier {
const probejs$$marker: never
}
export abstract class $IEditorDataTooltipSupplier$$Static implements $IEditorDataTooltipSupplier {
}
}

declare module "packages/xaero/hud/category/rule/$ObjectCategoryListRuleType" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $Predicate, $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $BiFunction, $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $Map$$Type } from "packages/java/util/$Map"

export class $ObjectCategoryListRuleType<E, P, S> {
constructor(string0: string, biFunction1: $BiFunction$$Type<E, P, S>, supplier2: $Supplier$$Type<$Iterable<S>>, function3: $Function$$Type<string, $List<S>>, function4: $Function$$Type<S, string>, function5: $Function$$Type<string, string>, predicate6: $Predicate$$Type<string>, list7: $List$$Type<$ObjectCategoryListRuleType$$Type<E, P, any>>, map8: $Map$$Type<string, $ObjectCategoryListRuleType$$Type<E, P, any>>)

public "getAllElementSupplier"(): $Supplier<$Iterable<S>>
public "getElementResolver"(): $Function<string, $List<S>>
public "getGetter"(): $BiFunction<E, P, S>
public "getId"(): string
public "getSerializer"(): $Function<S, string>
public "getStringFixer"(): $Function<string, string>
public "getStringValidator"(): $Predicate<string>
get "allElementSupplier"(): $Supplier<$Iterable<S>>
get "elementResolver"(): $Function<string, $List<S>>
get "getter"(): $BiFunction<E, P, S>
get "id"(): string
get "serializer"(): $Function<S, string>
get "stringFixer"(): $Function<string, string>
get "stringValidator"(): $Predicate<string>
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier" {
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorSimpleButtonNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"

export interface $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier {
"get"(editorNode0: $EditorNode$$Type, editorSimpleButtonNode1: $EditorSimpleButtonNode$$Type): boolean
}

export namespace $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier {
const probejs$$marker: never
}
export abstract class $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier$$Static implements $EditorSimpleButtonNode$ISimpleButtonIsActiveSupplier {
}
}

declare module "packages/xaero/hud/io/$HudIO" {
import { $PrintWriter$$Type } from "packages/java/io/$PrintWriter"

export class $HudIO {
static readonly "MODULE_LINE_PREFIX": string
static readonly "SEPARATOR": string

public "load"(string0: string): boolean
public "save"(printWriter0: $PrintWriter$$Type): void
}
}

declare module "packages/xaero/hud/category/ui/entry/$ConnectionLineType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ConnectionLineType extends $Enum<$ConnectionLineType> {
static readonly "HEAD_LEAF": $ConnectionLineType
static readonly "NONE": $ConnectionLineType
static readonly "PATH": $ConnectionLineType
static readonly "TAIL_LEAF": $ConnectionLineType

public static "valueOf"(string0: string): $ConnectionLineType
public static "values"(): $ConnectionLineType[]
}
}

declare module "packages/xaero/hud/category/ui/node/options/range/setting/$IEditorSettingNode" {
import { $ObjectCategorySetting } from "packages/xaero/hud/category/setting/$ObjectCategorySetting"

export interface $IEditorSettingNode<V> {
"getSetting"(): $ObjectCategorySetting<V>
"getSettingValue"(): V
"isRootSettings"(): boolean
get "setting"(): $ObjectCategorySetting<V>
get "settingValue"(): V
get "rootSettings"(): boolean
}

export namespace $IEditorSettingNode {
const probejs$$marker: never
}
export abstract class $IEditorSettingNode$$Static<V> implements $IEditorSettingNode<V> {
}
}

declare module "packages/xaero/hud/pushbox/$PushboxManager" {
import { $Iterable } from "packages/java/lang/$Iterable"
import { $PushBox, $PushBox$$Type } from "packages/xaero/hud/pushbox/$PushBox"

export class $PushboxManager {
constructor()

public "add"(pushBox0: $PushBox$$Type): void
public "getAll"(): $Iterable<$PushBox>
get "all"(): $Iterable<$PushBox>
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonMessageSupplier" {
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorSimpleButtonNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"

export interface $EditorSimpleButtonNode$ISimpleButtonMessageSupplier {
"get"(editorNode0: $EditorNode$$Type, editorSimpleButtonNode1: $EditorSimpleButtonNode$$Type): $Supplier<string>
}

export namespace $EditorSimpleButtonNode$ISimpleButtonMessageSupplier {
const probejs$$marker: never
}
export abstract class $EditorSimpleButtonNode$ISimpleButtonMessageSupplier$$Static implements $EditorSimpleButtonNode$ISimpleButtonMessageSupplier {
}
}

declare module "packages/xaero/hud/render/$HudRenderer" {
import { $PushboxHandler, $PushboxHandler$$Type } from "packages/xaero/hud/pushbox/$PushboxHandler"
import { $CustomVertexConsumers } from "packages/xaero/common/graphics/$CustomVertexConsumers"
import { $Hud$$Type } from "packages/xaero/hud/$Hud"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $HudRenderer {
constructor(pushboxHandler0: $PushboxHandler$$Type)

public "getCustomVertexConsumers"(): $CustomVertexConsumers
public "getPushboxHandler"(): $PushboxHandler
public "render"(hud0: $Hud$$Type, guiGraphics1: $GuiGraphics$$Type, float2: float): void
get "customVertexConsumers"(): $CustomVertexConsumers
get "pushboxHandler"(): $PushboxHandler
}
}

declare module "packages/xaero/hud/minimap/radar/render/element/$RadarRenderer" {
import { $RadarRenderContext } from "packages/xaero/hud/minimap/radar/render/element/$RadarRenderContext"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $MinimapElementRenderer } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderer"
import { $MinimapElementRenderInfo$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderInfo"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $RadarRenderer extends $MinimapElementRenderer<$Entity, $RadarRenderContext> {
public "renderElement"(entity0: $Entity$$Type, boolean1: boolean, boolean2: boolean, double3: double, float4: float, double5: double, double6: double, minimapElementRenderInfo7: $MinimapElementRenderInfo$$Type, guiGraphics8: $GuiGraphics$$Type, bufferSource9: $MultiBufferSource$BufferSource$$Type): boolean
public "renderSingleEntity"(entity0: $Entity$$Type, boolean1: boolean, boolean2: boolean, float3: float, boolean4: boolean, boolean5: boolean, minimapElementRenderLocation6: $MinimapElementRenderLocation$$Type, renderTarget7: $RenderTarget$$Type, guiGraphics8: $GuiGraphics$$Type): void
}
}

declare module "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $FilterObjectCategory } from "packages/xaero/hud/category/$FilterObjectCategory"
import { $EntityRadarCategoryData } from "packages/xaero/hud/minimap/radar/category/serialization/data/$EntityRadarCategoryData"
import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityRadarCategory extends $FilterObjectCategory<$Entity, $Player, $EntityRadarCategoryData, $EntityRadarCategory> {
}
}

declare module "packages/xaero/hud/pushbox/$PushBox" {
import { $PushboxHandler$State$$Type } from "packages/xaero/hud/pushbox/$PushboxHandler$State"

export class $PushBox {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, float4: float, float5: float, int6: integer)

public "getAnchorX"(): float
public "getAnchorY"(): float
public "getH"(int0: integer, int1: integer): integer
public "getVerticalBias"(): integer
public "getW"(int0: integer, int1: integer): integer
public "getX"(int0: integer, int1: integer): integer
public "getY"(int0: integer, int1: integer): integer
public "isActive"(): boolean
public "postUpdate"(): void
public "push"(state0: $PushboxHandler$State$$Type, int1: integer, int2: integer): void
public "setActive"(boolean0: boolean): void
public "update"(): void
get "anchorX"(): float
get "anchorY"(): float
get "verticalBias"(): integer
get "active"(): boolean
set "active"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderProvider" {
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $AbstractWaypointRenderContext, $AbstractWaypointRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/$AbstractWaypointRenderContext"
import { $Predicate } from "packages/java/util/function/$Predicate"
import { $MinimapElementRenderProvider } from "packages/xaero/common/minimap/element/render/$MinimapElementRenderProvider"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

export class $AbstractWaypointRenderProvider<C extends $AbstractWaypointRenderContext> extends $MinimapElementRenderProvider<$Waypoint, C> {
readonly "filter": $Predicate<$Waypoint>

constructor()

public "begin"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, c1: C): void
public "end"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, c1: C): void
public "getNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, c1: C): $Waypoint
public "hasNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, c1: C): boolean
public "setupContextAndGetNext"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, c1: C): $Waypoint
}
}

declare module "packages/xaero/hud/category/serialization/data/$ObjectCategoryData" {
import { $Iterator } from "packages/java/util/$Iterator"
import { $Map$Entry } from "packages/java/util/$Map$Entry"

export class $ObjectCategoryData<D extends $ObjectCategoryData<D>> {
public "getName"(): string
public "getProtection"(): boolean
public "getSettingOverrideIterator"(): $Iterator<$Map$Entry<string, any>>
public "getSubCategoryIterator"(): $Iterator<D>
get "name"(): string
get "protection"(): boolean
get "settingOverrideIterator"(): $Iterator<$Map$Entry<string, any>>
get "subCategoryIterator"(): $Iterator<D>
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointSession" {
import { $DestinationHandler } from "packages/xaero/hud/minimap/waypoint/$DestinationHandler"
import { $TemporaryWaypointHandler } from "packages/xaero/hud/minimap/waypoint/$TemporaryWaypointHandler"
import { $WaypointDeleter } from "packages/xaero/hud/minimap/waypoint/render/$WaypointDeleter"
import { $Minecraft } from "packages/net/minecraft/client/$Minecraft"
import { $MinimapSession, $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $WaypointSharingHandler } from "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler"
import { $WaypointTeleport } from "packages/xaero/hud/minimap/waypoint/$WaypointTeleport"
import { $WaypointCollector } from "packages/xaero/hud/minimap/waypoint/$WaypointCollector"
import { $DeathpointHandler } from "packages/xaero/hud/minimap/waypoint/$DeathpointHandler"

export class $WaypointSession {
constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type)

public "getCollector"(): $WaypointCollector
public "getDeathpointHandler"(): $DeathpointHandler
public "getDeleter"(): $WaypointDeleter
public "getDestinationHandler"(): $DestinationHandler
public "getMc"(): $Minecraft
public "getSession"(): $MinimapSession
public "getSetChangedTime"(): long
public "getSharing"(): $WaypointSharingHandler
public "getTeleport"(): $WaypointTeleport
public "getTemporaryHandler"(): $TemporaryWaypointHandler
public "setSetChangedTime"(long0: long): void
get "collector"(): $WaypointCollector
get "deathpointHandler"(): $DeathpointHandler
get "deleter"(): $WaypointDeleter
get "destinationHandler"(): $DestinationHandler
get "mc"(): $Minecraft
get "session"(): $MinimapSession
get "setChangedTime"(): long
get "sharing"(): $WaypointSharingHandler
get "teleport"(): $WaypointTeleport
get "temporaryHandler"(): $TemporaryWaypointHandler
set "setChangedTime"(value: long)
}
}

declare module "packages/xaero/hud/minimap/world/container/config/$RootConfig" {
import { $MinimapWorldConnectionManager } from "packages/xaero/hud/minimap/world/connection/$MinimapWorldConnectionManager"
import { $WaypointsSort, $WaypointsSort$$Type } from "packages/xaero/common/minimap/waypoints/$WaypointsSort"

export class $RootConfig {
constructor(boolean0: boolean)

public "getDefaultMultiworldId"(): string
public "getServerTeleportCommandFormat"(): string
public "getServerTeleportCommandRotationFormat"(): string
public "getSortType"(): $WaypointsSort
public "getSubWorldConnections"(): $MinimapWorldConnectionManager
public "isIgnoreHeightmaps"(): boolean
public "isIgnoreServerLevelId"(): boolean
public "isLoaded"(): boolean
public "isSortReversed"(): boolean
public "isTeleportationEnabled"(): boolean
public "isUsingDefaultTeleportCommand"(): boolean
public "isUsingMultiworldDetection"(): boolean
public "resetSubWorldConnections"(boolean0: boolean): void
public "setDefaultMultiworldId"(string0: string): void
public "setIgnoreHeightmaps"(boolean0: boolean): void
public "setIgnoreServerLevelId"(boolean0: boolean): void
public "setLoaded"(boolean0: boolean): void
public "setServerTeleportCommandFormat"(string0: string): void
public "setServerTeleportCommandRotationFormat"(string0: string): void
public "setSortReversed"(boolean0: boolean): void
public "setSortType"(waypointsSort0: $WaypointsSort$$Type): void
public "setTeleportationEnabled"(boolean0: boolean): void
public "setUsingDefaultTeleportCommand"(boolean0: boolean): void
public "setUsingMultiworldDetection"(boolean0: boolean): void
public "toggleSortReversed"(): void
public "toggleSortType"(): void
get "loaded"(): boolean
set "loaded"(value: boolean)
get "defaultMultiworldId"(): string
get "serverTeleportCommandFormat"(): string
get "serverTeleportCommandRotationFormat"(): string
get "sortType"(): $WaypointsSort
get "subWorldConnections"(): $MinimapWorldConnectionManager
get "ignoreHeightmaps"(): boolean
get "ignoreServerLevelId"(): boolean
get "sortReversed"(): boolean
get "teleportationEnabled"(): boolean
get "usingDefaultTeleportCommand"(): boolean
get "usingMultiworldDetection"(): boolean
set "defaultMultiworldId"(value: string)
set "ignoreHeightmaps"(value: boolean)
set "ignoreServerLevelId"(value: boolean)
set "serverTeleportCommandFormat"(value: string)
set "serverTeleportCommandRotationFormat"(value: string)
set "sortReversed"(value: boolean)
set "sortType"(value: $WaypointsSort$$Type)
set "teleportationEnabled"(value: boolean)
set "usingDefaultTeleportCommand"(value: boolean)
set "usingMultiworldDetection"(value: boolean)
}
}

declare module "packages/xaero/hud/minimap/world/$MinimapWorldManager" {
import { $Waypoint } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapWorld } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HashMap } from "packages/java/util/$HashMap"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $MinimapWorldRootContainer, $MinimapWorldRootContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldRootContainer"
import { $XaeroPath$$Type } from "packages/xaero/hud/path/$XaeroPath"
import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import { $MinimapWorldContainer } from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $MinimapWorldManager {
constructor(hudMod0: $HudMod$$Type, minimapSession1: $MinimapSession$$Type)

public "addRootWorldContainer"(minimapWorldRootContainer0: $MinimapWorldRootContainer$$Type): void
public "addWorld"(xaeroPath0: $XaeroPath$$Type): $MinimapWorld
public "addWorldContainer"(xaeroPath0: $XaeroPath$$Type): $MinimapWorldContainer
public "containerExists"(xaeroPath0: $XaeroPath$$Type): boolean
public "getAutoRootContainer"(): $MinimapWorldRootContainer
public "getAutoWorld"(): $MinimapWorld
public "getCurrentRootContainer"(): $MinimapWorldRootContainer
public "getCurrentWorld"(xaeroPath0: $XaeroPath$$Type): $MinimapWorld
public "getCurrentWorld"(): $MinimapWorld
public "getCustomWaypoints"(): $Iterable<$Waypoint>
public "getCustomWaypoints"(resourceLocation0: $ResourceLocation$$Type): $Int2ObjectMap<$Waypoint>
public "getRootContainers"(): $Iterable<$MinimapWorldRootContainer>
/** @deprecated */
public "getRootContainersDirect"(): $HashMap<string, $MinimapWorldRootContainer>
public "getRootWorldContainer"(string0: string): $MinimapWorldRootContainer
public "getRootWorldContainer"(xaeroPath0: $XaeroPath$$Type): $MinimapWorldRootContainer
public "getWorld"(xaeroPath0: $XaeroPath$$Type): $MinimapWorld
public "getWorldContainer"(xaeroPath0: $XaeroPath$$Type): $MinimapWorldContainer
public "getWorldContainerNullable"(xaeroPath0: $XaeroPath$$Type): $MinimapWorldContainer
public "hasCustomWaypoints"(): boolean
public "removeContainer"(xaeroPath0: $XaeroPath$$Type): boolean
get "autoRootContainer"(): $MinimapWorldRootContainer
get "autoWorld"(): $MinimapWorld
get "currentRootContainer"(): $MinimapWorldRootContainer
get "currentWorld"(): $MinimapWorld
get "customWaypoints"(): $Iterable<$Waypoint>
get "rootContainers"(): $Iterable<$MinimapWorldRootContainer>
get "rootContainersDirect"(): $HashMap<string, $MinimapWorldRootContainer>
}
}

declare module "packages/xaero/hud/category/serialization/data/$FilterObjectCategoryData" {
import { $ExcludeListMode } from "packages/xaero/hud/category/rule/$ExcludeListMode"
import { $Iterator } from "packages/java/util/$Iterator"
import { $ObjectCategoryData } from "packages/xaero/hud/category/serialization/data/$ObjectCategoryData"

export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<D>> extends $ObjectCategoryData<D> {
public "getExcludeListIterator"(): $Iterator<string>
public "getExcludeMode"(): $ExcludeListMode
public "getHardInclude"(): string
public "getIncludeListInSuperCategory"(): boolean
public "getIncludeListIterator"(): $Iterator<string>
get "excludeListIterator"(): $Iterator<string>
get "excludeMode"(): $ExcludeListMode
get "hardInclude"(): string
get "includeListInSuperCategory"(): boolean
get "includeListIterator"(): $Iterator<string>
}
}

declare module "packages/xaero/hud/module/$ModuleSession" {
import { $HudMod, $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $HudModule, $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"

export class $ModuleSession<MS extends $ModuleSession<MS>> {
constructor(hudMod0: $HudMod$$Type, hudModule1: $HudModule$$Type<MS>)

public "close"(): void
public "getEffectiveX"(int0: integer, double1: double): integer
public "getEffectiveY"(int0: integer, double1: double): integer
public "getHeight"(double0: double): integer
public "getModMain"(): $HudMod
public "getModule"(): $HudModule<MS>
public "getWidth"(double0: double): integer
public "isActive"(): boolean
public "isCentered"(): boolean
public "isFlippedHor"(): boolean
public "isFlippedVer"(): boolean
public "onPostGameOverlay"(): void
public "prePotentialRender"(): void
public "shouldFlipHorizontally"(int0: integer, double1: double): boolean
public "shouldFlipVertically"(int0: integer, double1: double): boolean
get "modMain"(): $HudMod
get "module"(): $HudModule<MS>
get "active"(): boolean
get "centered"(): boolean
get "flippedHor"(): boolean
get "flippedVer"(): boolean
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointSharingHandler" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $WaypointSharingHandler {
static readonly "WAYPOINT_ADD_PREFIX": string
static readonly "WAYPOINT_OLD_SHARE_PREFIX": string
static readonly "WAYPOINT_SHARE_PREFIX": string

public "onShareConfirmationResult"(boolean0: boolean): void
public "onWaypointAdd"(string0s: string[]): void
public "onWaypointReceived"(string0: string, string1: string): void
public "shareWaypoint"(screen0: $Screen$$Type, waypoint1: $Waypoint$$Type, minimapWorld2: $MinimapWorld$$Type): void
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointTeleport" {
import { $WaypointSession$$Type } from "packages/xaero/hud/minimap/waypoint/$WaypointSession"
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $MinimapSession$$Type } from "packages/xaero/hud/minimap/module/$MinimapSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $WaypointTeleport {
static readonly "SLASH_TELEPORT_ANYWAY_COMMAND": string
static readonly "TELEPORT_ANYWAY_COMMAND": string

constructor(hudMod0: $HudMod$$Type, waypointSession1: $WaypointSession$$Type, minimapSession2: $MinimapSession$$Type)

public "canTeleport"(boolean0: boolean, minimapWorld1: $MinimapWorld$$Type): boolean
public "isTeleportationSafe"(minimapWorld0: $MinimapWorld$$Type): boolean
public "isWorldTeleportable"(minimapWorld0: $MinimapWorld$$Type): boolean
public "teleportAnyway"(): void
public "teleportToWaypoint"(waypoint0: $Waypoint$$Type, minimapWorld1: $MinimapWorld$$Type, screen2: $Screen$$Type, boolean3: boolean): void
public "teleportToWaypoint"(waypoint0: $Waypoint$$Type, minimapWorld1: $MinimapWorld$$Type, screen2: $Screen$$Type): void
}
}

declare module "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler" {
import { $MinimapElementRenderer$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderer"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $MinimapElementRendererHandler {
public "add"(minimapElementRenderer0: $MinimapElementRenderer$$Type<any, any>): void
public "render"(guiGraphics0: $GuiGraphics$$Type, vec31: $Vec3$$Type, float2: float, renderTarget3: $RenderTarget$$Type, double4: double, resourceKey5: $ResourceKey$$Type<$Level>): void
}
}

declare module "packages/xaero/hud/minimap/world/$MinimapWorld" {
import { $WaypointSet, $WaypointSet$$Type } from "packages/xaero/hud/minimap/waypoint/set/$WaypointSet"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $RootConfig } from "packages/xaero/hud/minimap/world/container/config/$RootConfig"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $XaeroPath } from "packages/xaero/hud/path/$XaeroPath"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $MinimapWorldContainer, $MinimapWorldContainer$$Type } from "packages/xaero/hud/minimap/world/container/$MinimapWorldContainer"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $MinimapWorld {
public "addWaypointSet"(string0: string): void
public "addWaypointSet"(waypointSet0: $WaypointSet$$Type): $WaypointSet
public "cleanupOnSave"(path0: $Path$$Type): void
public "getContainer"(): $MinimapWorldContainer
public "getCurrentWaypointSet"(): $WaypointSet
public "getCurrentWaypointSetId"(): string
public "getDimId"(): $ResourceKey<$Level>
public "getFullPath"(): $XaeroPath
public "getIterableWaypointSets"(): $Iterable<$WaypointSet>
public "getLocalWorldKey"(): $XaeroPath
public "getNode"(): string
public "getRootConfig"(): $RootConfig
public "getSetCount"(): integer
public "getWaypointSet"(string0: string): $WaypointSet
public "hasSomethingToRemoveOnSave"(): boolean
public "removeWaypointSet"(string0: string): $WaypointSet
public "requestRemovalOnSave"(string0: string): void
public "setContainer"(minimapWorldContainer0: $MinimapWorldContainer$$Type): void
public "setCurrentWaypointSetId"(string0: string): void
public "setDimId"(resourceKey0: $ResourceKey$$Type<$Level>): void
public "setNode"(string0: string): void
get "container"(): $MinimapWorldContainer
get "currentWaypointSet"(): $WaypointSet
get "currentWaypointSetId"(): string
get "dimId"(): $ResourceKey<$Level>
get "fullPath"(): $XaeroPath
get "iterableWaypointSets"(): $Iterable<$WaypointSet>
get "localWorldKey"(): $XaeroPath
get "node"(): string
get "rootConfig"(): $RootConfig
get "setCount"(): integer
set "container"(value: $MinimapWorldContainer$$Type)
set "currentWaypointSetId"(value: string)
set "dimId"(value: $ResourceKey$$Type<$Level>)
set "node"(value: string)
}
}

declare module "packages/xaero/hud/render/module/$IModuleRenderer" {
import { $ModuleSession, $ModuleSession$$Type } from "packages/xaero/hud/module/$ModuleSession"
import { $ModuleRenderContext$$Type } from "packages/xaero/hud/render/module/$ModuleRenderContext"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IModuleRenderer<MS extends $ModuleSession<MS>> {
"render"(ms0: MS, moduleRenderContext1: $ModuleRenderContext$$Type, guiGraphics2: $GuiGraphics$$Type, float3: float): void
}

export namespace $IModuleRenderer {
const probejs$$marker: never
}
export abstract class $IModuleRenderer$$Static<MS extends $ModuleSession<MS>> implements $IModuleRenderer<MS> {
}
}

declare module "packages/xaero/hud/minimap/compass/render/$CompassRenderer" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export class $CompassRenderer {
constructor(hudMod0: $HudMod$$Type, minecraft1: $Minecraft$$Type)

public "drawCompass"(poseStack0: $PoseStack$$Type, int1: integer, int2: integer, double3: double, double4: double, double5: double, boolean6: boolean, float7: float, boolean8: boolean, bufferSource9: $MultiBufferSource$BufferSource$$Type, vertexConsumer10: $VertexConsumer$$Type): void
}
}

declare module "packages/xaero/hud/$Hud" {
import { $ModuleManager, $ModuleManager$$Type } from "packages/xaero/hud/module/$ModuleManager"
import { $ModuleSessionHandler, $ModuleSessionHandler$$Type } from "packages/xaero/hud/module/$ModuleSessionHandler"
import { $HudEventHandler, $HudEventHandler$$Type } from "packages/xaero/hud/event/$HudEventHandler"
import { $PushboxManager, $PushboxManager$$Type } from "packages/xaero/hud/pushbox/$PushboxManager"
import { $HudPresetManager, $HudPresetManager$$Type } from "packages/xaero/hud/preset/$HudPresetManager"
import { $OldSystemCompatibility, $OldSystemCompatibility$$Type } from "packages/xaero/hud/compat/$OldSystemCompatibility"

export class $Hud {
constructor(moduleManager0: $ModuleManager$$Type, pushboxManager1: $PushboxManager$$Type, hudPresetManager2: $HudPresetManager$$Type, hudEventHandler3: $HudEventHandler$$Type, moduleSessionHandler4: $ModuleSessionHandler$$Type, oldSystemCompatibility5: $OldSystemCompatibility$$Type)

public "getEventHandler"(): $HudEventHandler
public "getModuleManager"(): $ModuleManager
public "getOldSystemCompatibility"(): $OldSystemCompatibility
public "getPresetManager"(): $HudPresetManager
public "getPushboxManager"(): $PushboxManager
public "getSessionHandler"(): $ModuleSessionHandler
get "eventHandler"(): $HudEventHandler
get "moduleManager"(): $ModuleManager
get "oldSystemCompatibility"(): $OldSystemCompatibility
get "presetManager"(): $HudPresetManager
get "pushboxManager"(): $PushboxManager
get "sessionHandler"(): $ModuleSessionHandler
}
}

declare module "packages/xaero/hud/minimap/radar/color/$RadarColor" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"

export class $RadarColor extends $Enum<$RadarColor> {
static readonly "AQUA": $RadarColor
static readonly "BLACK": $RadarColor
static readonly "BLUE": $RadarColor
static readonly "DARK_AQUA": $RadarColor
static readonly "DARK_BLUE": $RadarColor
static readonly "DARK_GRAY": $RadarColor
static readonly "DARK_GREEN": $RadarColor
static readonly "DARK_PURPLE": $RadarColor
static readonly "DARK_RED": $RadarColor
static readonly "GOLD": $RadarColor
static readonly "GRAY": $RadarColor
static readonly "GREEN": $RadarColor
static readonly "PURPLE": $RadarColor
static readonly "RED": $RadarColor
static readonly "WHITE": $RadarColor
static readonly "YELLOW": $RadarColor

public static "fromIndex"(int0: integer): $RadarColor
public "getFormat"(): character
public "getHex"(): integer
public "getName"(): $Component
public static "getRandom"(): $RadarColor
public static "valueOf"(string0: string): $RadarColor
public static "values"(): $RadarColor[]
get "format"(): character
get "hex"(): integer
get "name"(): $Component
}
}

declare module "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator" {
import { $EntityRenderTracer } from "packages/xaero/hud/minimap/radar/icon/creator/render/trace/$EntityRenderTracer"
import { $EntityRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import { $XaeroIcon } from "packages/xaero/common/icon/$XaeroIcon"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $RadarIconCreator$Parameters$$Type } from "packages/xaero/hud/minimap/radar/icon/creator/$RadarIconCreator$Parameters"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $RenderTarget$$Type } from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $RadarIconCreator {
static readonly "FAR_PLANE": integer
static readonly "ICON_WIDTH": integer

constructor()

public "clearAtlases"(): void
public "create"<T extends $Entity>(guiGraphics0: $GuiGraphics$$Type, entityRenderer1: $EntityRenderer$$Type<T>, t2: T, renderTarget3: $RenderTarget$$Type, parameters4: $RadarIconCreator$Parameters$$Type): $XaeroIcon
public "getRenderTracer"(): $EntityRenderTracer
get "renderTracer"(): $EntityRenderTracer
}
}

declare module "packages/xaero/hud/minimap/world/$MinimapDimensionHelper" {
import { $LocalPlayer$$Type } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $MinimapWorld$$Type } from "packages/xaero/hud/minimap/world/$MinimapWorld"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $MinimapDimensionHelper {
constructor()

public "findDimensionKeyForOldName"(localPlayer0: $LocalPlayer$$Type, string1: string): $ResourceKey<$Level>
public "getDimCoordinateScale"(minimapWorld0: $MinimapWorld$$Type): double
public "getDimensionDirectoryName"(resourceKey0: $ResourceKey$$Type<$Level>): string
public "getDimensionDivision"(minimapWorld0: $MinimapWorld$$Type): double
public "getDimensionKeyForDirectoryName"(string0: string): $ResourceKey<$Level>
}
}

declare module "packages/xaero/hud/controls/key/$KeyMappingControllerManager" {
import { $KeyMapping$$Type } from "packages/net/minecraft/client/$KeyMapping"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $KeyMappingController, $KeyMappingController$$Type } from "packages/xaero/hud/controls/key/$KeyMappingController"
import { $Iterator } from "packages/java/util/$Iterator"
import { $Spliterator } from "packages/java/util/$Spliterator"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $KeyMappingFunction$$Type } from "packages/xaero/hud/controls/key/function/$KeyMappingFunction"

export class $KeyMappingControllerManager implements $Iterable<$KeyMappingController> {
constructor()

public "forEach"(consumer0: $Consumer$$Type<$KeyMappingController$$Type>): void
public "getController"(keyMapping0: $KeyMapping$$Type): $KeyMappingController
public "iterator"(): $Iterator<$KeyMappingController>
public "registerController"(keyMapping0: $KeyMapping$$Type, boolean1: boolean, consumer2: $Consumer$$Type<$KeyMapping$$Type>): void
public "registerController"(keyMapping0: $KeyMapping$$Type, boolean1: boolean): void
public "registerFunction"(keyMapping0: $KeyMapping$$Type, keyMappingFunction1: $KeyMappingFunction$$Type): void
public "spliterator"(): $Spliterator<$KeyMappingController>
[Symbol.iterator](): IterableIterator<$KeyMappingController>;
}
}

declare module "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory" {
import { $EditorListRootEntry } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntry"
import { $ConnectionLineType$$Type } from "packages/xaero/hud/category/ui/entry/$ConnectionLineType"
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorListRootEntryFactory {
"get"(editorNode0: $EditorNode$$Type, editorNode1: $EditorNode$$Type, int2: integer, connectionLineType3: $ConnectionLineType$$Type, settingRowList4: $GuiCategoryEditor$SettingRowList$$Type<>, int5: integer, boolean6: boolean): $EditorListRootEntry
}

export namespace $EditorListRootEntryFactory {
const probejs$$marker: never
}
export abstract class $EditorListRootEntryFactory$$Static implements $EditorListRootEntryFactory {
}
}

declare module "packages/xaero/hud/minimap/waypoint/render/$WaypointReader" {
import { $Waypoint$$Type } from "packages/xaero/common/minimap/waypoints/$Waypoint"
import { $WaypointMapRenderReader } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderReader"
import { $WaypointMapRenderContext$$Type } from "packages/xaero/hud/minimap/waypoint/render/$WaypointMapRenderContext"
import { $MinimapElementRenderLocation$$Type } from "packages/xaero/hud/minimap/element/render/$MinimapElementRenderLocation"

/** @deprecated */
export class $WaypointReader extends $WaypointMapRenderReader {
constructor()

/** @deprecated */
public "getBoxScale"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, waypoint1: $Waypoint$$Type, waypointMapRenderContext2: $WaypointMapRenderContext$$Type): float
/** @deprecated */
public "isInteractable"(minimapElementRenderLocation0: $MinimapElementRenderLocation$$Type, waypoint1: $Waypoint$$Type): boolean
}
}

declare module "packages/xaero/hud/minimap/player/tracker/synced/$ClientSyncedTrackedPlayerManager" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $SyncedTrackedPlayer } from "packages/xaero/common/server/radar/tracker/$SyncedTrackedPlayer"
import { $Level } from "packages/net/minecraft/world/level/$Level"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $Iterable } from "packages/java/lang/$Iterable"

export class $ClientSyncedTrackedPlayerManager {
public "getPlayers"(): $Iterable<$SyncedTrackedPlayer>
public "remove"(uUID0: $UUID$$Type): void
public "reset"(): void
public "update"(uUID0: $UUID$$Type, double1: double, double2: double, double3: double, resourceKey4: $ResourceKey$$Type<$Level>): void
get "players"(): $Iterable<$SyncedTrackedPlayer>
}
}

declare module "packages/xaero/hud/minimap/radar/state/$RadarState" {
import { $EntityRadarCategory } from "packages/xaero/hud/minimap/radar/category/$EntityRadarCategory"
import { $Iterable } from "packages/java/lang/$Iterable"
import { $RadarList } from "packages/xaero/hud/minimap/radar/state/$RadarList"

export class $RadarState {
constructor()

public "getListsGeneratedForConfig"(): $EntityRadarCategory
public "getListsReversedOrder"(): boolean
public "getRadarLists"(): $Iterable<$RadarList>
get "listsGeneratedForConfig"(): $EntityRadarCategory
get "listsReversedOrder"(): boolean
get "radarLists"(): $Iterable<$RadarList>
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionNode$Builder" {
import { $EditorNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorNode$Builder"
import { $EditorOptionNode } from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"

export class $EditorOptionNode$Builder<V> extends $EditorNode$Builder<$EditorOptionNode$Builder<V>> {
public static "begin"<V>(): $EditorOptionNode$Builder<V>
public "build"(): $EditorOptionNode<V>
public "setDefault"(): $EditorOptionNode$Builder<V>
public "setDisplayName"(string0: string): $EditorOptionNode$Builder<V>
public "setValue"(v0: V): $EditorOptionNode$Builder<V>
set "displayName"(value: string)
set "value"(value: V)
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionNode" {
import { $IEditorDataTooltipSupplier$$Type } from "packages/xaero/hud/category/ui/node/tooltip/$IEditorDataTooltipSupplier"
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorListRootEntryFactory$$Type } from "packages/xaero/hud/category/ui/entry/$EditorListRootEntryFactory"

export class $EditorOptionNode<V> extends $EditorNode {
constructor(v0: V, string1: string, boolean2: boolean, editorListRootEntryFactory3: $EditorListRootEntryFactory$$Type, iEditorDataTooltipSupplier4: $IEditorDataTooltipSupplier$$Type)

public "getValue"(): V
get "value"(): V
}
}

declare module "packages/xaero/hud/minimap/info/$InfoDisplayManager" {
import { $List$$Type } from "packages/java/util/$List"
import { $Stream } from "packages/java/util/stream/$Stream"
import { $InfoDisplay, $InfoDisplay$$Type } from "packages/xaero/hud/minimap/info/$InfoDisplay"

export class $InfoDisplayManager {
constructor()

public "add"(infoDisplay0: $InfoDisplay$$Type<any>): void
public "get"(string0: string): $InfoDisplay<any>
public "getCount"(): integer
public "getOrderedStream"(): $Stream<$InfoDisplay<any>>
public "reset"(): void
public "setOrder"(list0: $List$$Type<string>): void
get "count"(): integer
get "orderedStream"(): $Stream<$InfoDisplay<any>>
set "order"(value: $List$$Type<string>)
}
}

declare module "packages/xaero/hud/module/$ModuleSessionHandler" {
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $ModuleManager$$Type } from "packages/xaero/hud/module/$ModuleManager"
import { $ModuleSession$$Type } from "packages/xaero/hud/module/$ModuleSession"
import { $HudMod$$Type } from "packages/xaero/common/$HudMod"
import { $ClientPacketListener$$Type } from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import { $HudModule$$Type } from "packages/xaero/hud/module/$HudModule"

export class $ModuleSessionHandler {
constructor(moduleManager0: $ModuleManager$$Type)

public "closeSessions"(hudMod0: $HudMod$$Type): void
public "resetSessions"(hudMod0: $HudMod$$Type, clientPacketListener1: $ClientPacketListener$$Type, biConsumer2: $BiConsumer$$Type<$HudModule$$Type<any>, $ModuleSession$$Type<any>>): void
}
}

declare module "packages/xaero/hud/minimap/waypoint/$WaypointPurpose" {
import { $Enum } from "packages/java/lang/$Enum"

export class $WaypointPurpose extends $Enum<$WaypointPurpose> {
static readonly "DEATH": $WaypointPurpose
static readonly "DESTINATION": $WaypointPurpose
static readonly "NORMAL": $WaypointPurpose
static readonly "OLD_DEATH": $WaypointPurpose

public "isDeath"(): boolean
public "isDestination"(): boolean
public static "valueOf"(string0: string): $WaypointPurpose
public static "values"(): $WaypointPurpose[]
get "death"(): boolean
get "destination"(): boolean
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode$ISimpleButtonCallback" {
import { $EditorNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorNode"
import { $EditorSimpleButtonNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorSimpleButtonNode"
import { $GuiCategoryEditor$SettingRowList$$Type } from "packages/xaero/hud/category/ui/$GuiCategoryEditor$SettingRowList"

export interface $EditorSimpleButtonNode$ISimpleButtonCallback {
"onButtonPress"(editorNode0: $EditorNode$$Type, editorSimpleButtonNode1: $EditorSimpleButtonNode$$Type, settingRowList2: $GuiCategoryEditor$SettingRowList$$Type<>): void
}

export namespace $EditorSimpleButtonNode$ISimpleButtonCallback {
const probejs$$marker: never
}
export abstract class $EditorSimpleButtonNode$ISimpleButtonCallback$$Static implements $EditorSimpleButtonNode$ISimpleButtonCallback {
}
}

declare module "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode" {
import { $EditorOptionsNode$IOptionsNodeIsActiveSupplier } from "packages/xaero/hud/category/ui/node/options/$EditorOptionsNode$IOptionsNodeIsActiveSupplier"
import { $EditorOptionNode, $EditorOptionNode$$Type } from "packages/xaero/hud/category/ui/node/options/$EditorOptionNode"
import { $Supplier } from "packages/java/util/function/$Supplier"
import { $EditorNode } from "packages/xaero/hud/category/ui/node/$EditorNode"

export class $EditorOptionsNode<V> extends $EditorNode {
public "getCurrentValue"(): $EditorOptionNode<V>
public "getIsActiveSupplier"(): $EditorOptionsNode$IOptionsNodeIsActiveSupplier
public "getMessageSupplier"(): $Supplier<string>
public "setCurrentValue"(editorOptionNode0: $EditorOptionNode$$Type<V>): void
get "currentValue"(): $EditorOptionNode<V>
get "isActiveSupplier"(): $EditorOptionsNode$IOptionsNodeIsActiveSupplier
get "messageSupplier"(): $Supplier<string>
set "currentValue"(value: $EditorOptionNode$$Type<V>)
}
}

declare module "packages/xaero/hud/minimap/element/render/world/$MinimapElementWorldRendererHandler" {
import { $MinimapElementRendererHandler } from "packages/xaero/hud/minimap/element/render/$MinimapElementRendererHandler"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"

export class $MinimapElementWorldRendererHandler extends $MinimapElementRendererHandler {
public "prepareRender"(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type): void
}
}

declare module "packages/xaero/hud/category/ui/$EditorCategoryNodeConverter" {
import { $ObjectCategory, $ObjectCategory$$Type } from "packages/xaero/hud/category/$ObjectCategory"
import { $ObjectCategory$Builder } from "packages/xaero/hud/category/$ObjectCategory$Builder"
import { $EditorSettingsNode } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $EditorCategoryNode, $EditorCategoryNode$$Type } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode"
import { $EditorCategoryNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorCategoryNode$Builder"
import { $EditorSettingsNode$Builder } from "packages/xaero/hud/category/ui/node/$EditorSettingsNode$Builder"

export class $EditorCategoryNodeConverter<C extends $ObjectCategory<any, C>, ED extends $EditorCategoryNode<C, SD, ED>, CB extends $ObjectCategory$Builder<C, CB>, SD extends $EditorSettingsNode<any>, SDB extends $EditorSettingsNode$Builder<SD, SDB>, EDB extends $EditorCategoryNode$Builder<C, ED, SD, SDB, EDB>> {
constructor(supplier0: $Supplier$$Type<CB>, supplier1: $Supplier$$Type<EDB>)

public "convert"(ed0: ED): C
public "convert"(c0: C, boolean1: boolean): ED
}
}

