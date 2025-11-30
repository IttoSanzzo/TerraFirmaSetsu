declare module "packages/net/minecraft/client/gui/$ComponentPath" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ContainerEventHandler$$Type } from "packages/net/minecraft/client/gui/components/events/$ContainerEventHandler"

export interface $ComponentPath {
"applyFocus"(boolean0: boolean): void
"component"(): $GuiEventListener
}

export namespace $ComponentPath {
function leaf(guiEventListener0: $GuiEventListener$$Type): $ComponentPath
function path(containerEventHandler0: $ContainerEventHandler$$Type, componentPath1: $ComponentPath$$Type): $ComponentPath
function path(guiEventListener0: $GuiEventListener$$Type, ...containerEventHandler1s: $ContainerEventHandler$$Type[]): $ComponentPath
}
export abstract class $ComponentPath$$Static implements $ComponentPath {
static "leaf"(guiEventListener0: $GuiEventListener$$Type): $ComponentPath
static "path"(containerEventHandler0: $ContainerEventHandler$$Type, componentPath1: $ComponentPath$$Type): $ComponentPath
static "path"(guiEventListener0: $GuiEventListener$$Type, ...containerEventHandler1s: $ContainerEventHandler$$Type[]): $ComponentPath
}
}

declare module "packages/net/minecraft/client/gui/components/$CycleButton$ValueListSupplier" {
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List, $List$$Type } from "packages/java/util/$List"

export interface $CycleButton$ValueListSupplier<T> {
"getDefaultList"(): $List<T>
"getSelectedList"(): $List<T>
get "defaultList"(): $List<T>
get "selectedList"(): $List<T>
}

export namespace $CycleButton$ValueListSupplier {
function create<T>(collection0: $Collection$$Type<T>): $CycleButton$ValueListSupplier<T>
function create<T>(booleanSupplier0: $BooleanSupplier$$Type, list1: $List$$Type<T>, list2: $List$$Type<T>): $CycleButton$ValueListSupplier<T>
}
export abstract class $CycleButton$ValueListSupplier$$Static<T> implements $CycleButton$ValueListSupplier<T> {
static "create"<T>(collection0: $Collection$$Type<T>): $CycleButton$ValueListSupplier<T>
static "create"<T>(booleanSupplier0: $BooleanSupplier$$Type, list1: $List$$Type<T>, list2: $List$$Type<T>): $CycleButton$ValueListSupplier<T>
}
}

declare module "packages/net/minecraft/client/gui/components/$AbstractButton" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $AbstractButton extends $AbstractWidget {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "onPress"(): void
public "renderString"(guiGraphics0: $GuiGraphics$$Type, font1: $Font$$Type, int2: integer): void
public "setPosition"(int0: integer, int1: integer): void
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/net/minecraft/client/gui/spectator/$SpectatorMenuCategory" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $List } from "packages/java/util/$List"
import { $SpectatorMenuItem } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuItem"

export interface $SpectatorMenuCategory {
"getItems"(): $List<$SpectatorMenuItem>
"getPrompt"(): $Component
get "items"(): $List<$SpectatorMenuItem>
get "prompt"(): $Component
}

export namespace $SpectatorMenuCategory {
const probejs$$marker: never
}
export abstract class $SpectatorMenuCategory$$Static implements $SpectatorMenuCategory {
}
}

declare module "packages/net/minecraft/client/gui/components/$ObjectSelectionList$Entry" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $NarrationSupplier } from "packages/net/minecraft/client/gui/narration/$NarrationSupplier"
import { $AbstractSelectionList$Entry } from "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getNarration"(): $Component
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "currentFocusPath"(): $ComponentPath
get "narration"(): $Component
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
}

declare module "packages/net/minecraft/client/gui/components/$Button$CreateNarration" {
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $Button$CreateNarration {
"createNarrationMessage"(supplier0: $Supplier$$Type<$MutableComponent>): $MutableComponent
}

export namespace $Button$CreateNarration {
const probejs$$marker: never
}
export abstract class $Button$CreateNarration$$Static implements $Button$CreateNarration {
}
}

declare module "packages/net/minecraft/client/gui/components/$ContainerObjectSelectionList$Entry" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $List } from "packages/java/util/$List"
import { $NarratableEntry } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $AbstractSelectionList$Entry } from "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry"
import { $Optional } from "packages/java/util/$Optional"
import { $ContainerEventHandler } from "packages/net/minecraft/client/gui/components/events/$ContainerEventHandler"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "focusPathAtIndex"(focusNavigationEvent0: $FocusNavigationEvent$$Type, int1: integer): $ComponentPath
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getFocused"(): $GuiEventListener
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isDragging"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narratables"(): $List<$NarratableEntry>
public "setDragging"(boolean0: boolean): void
public "setFocused"(guiEventListener0: $GuiEventListener$$Type): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
set "dragging"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
}
}

declare module "packages/net/minecraft/client/gui/components/spectator/$SpectatorGui" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $SpectatorMenu$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenu"
import { $SpectatorMenuListener } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuListener"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $SpectatorGui implements $SpectatorMenuListener {
static readonly "SPECTATOR_LOCATION": $ResourceLocation

constructor(minecraft0: $Minecraft$$Type)

public "isMenuActive"(): boolean
public "onHotbarSelected"(int0: integer): void
public "onMouseMiddleClick"(): void
public "onMouseScrolled"(int0: integer): void
public "onSpectatorMenuClosed"(spectatorMenu0: $SpectatorMenu$$Type): void
public "renderHotbar"(guiGraphics0: $GuiGraphics$$Type): void
public "renderTooltip"(guiGraphics0: $GuiGraphics$$Type): void
get "menuActive"(): boolean
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$CreateWorldScreen" {
import { $Path, $Path$$Type } from "packages/java/nio/file/$Path"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $WorldCreationUiState } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $LevelSettings$$Type } from "packages/net/minecraft/world/level/$LevelSettings"
import { $Optional } from "packages/java/util/$Optional"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $WorldCreationContext$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext"

export class $CreateWorldScreen extends $Screen {
static readonly "FOOTER_SEPERATOR": $ResourceLocation
static readonly "HEADER_SEPERATOR": $ResourceLocation
static readonly "LIGHT_DIRT_BACKGROUND": $ResourceLocation

public "charTyped"(char0: character, int1: integer): boolean
public static "createFromExisting"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type, levelSettings2: $LevelSettings$$Type, worldCreationContext3: $WorldCreationContext$$Type, path4: $Path$$Type): $CreateWorldScreen
public static "createTempDataPackDirFromExistingWorld"(path0: $Path$$Type, minecraft1: $Minecraft$$Type): $Path
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "getUiState"(): $WorldCreationUiState
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public static "openFresh"(minecraft0: $Minecraft$$Type, screen1: $Screen$$Type): void
public "popScreen"(): void
public "repositionElements"(): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "uiState"(): $WorldCreationUiState
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/font/$FontSet" {
import { $GlyphProvider$$Type } from "packages/com/mojang/blaze3d/font/$GlyphProvider"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List$$Type } from "packages/java/util/$List"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $BakedGlyph } from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph"
import { $GlyphInfo, $GlyphInfo$$Type } from "packages/com/mojang/blaze3d/font/$GlyphInfo"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export class $FontSet implements $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type, resourceLocation1: $ResourceLocation$$Type)

public "close"(): void
public "getGlyph"(int0: integer): $BakedGlyph
public "getGlyphInfo"(int0: integer, boolean1: boolean): $GlyphInfo
public "getRandomGlyph"(glyphInfo0: $GlyphInfo$$Type): $BakedGlyph
public "reload"(list0: $List$$Type<$GlyphProvider$$Type>): void
public "whiteGlyph"(): $BakedGlyph
}
}

declare module "packages/net/minecraft/client/gui/components/$AbstractSelectionList" {
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $AbstractSelectionList$Entry, $AbstractSelectionList$Entry$$Type } from "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry"
import { $NarratableEntry } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $NarratableEntry$NarrationPriority } from "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $AbstractContainerEventHandler } from "packages/net/minecraft/client/gui/components/events/$AbstractContainerEventHandler"
import { $IAbstractSelectionList } from "packages/xaero/common/core/$IAbstractSelectionList"

export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $IAbstractSelectionList {
constructor(minecraft0: $Minecraft$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<E>
public "getBottom"(): integer
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getFirstElement"(): E
public "getFocused"(): E
public "getHeight"(): integer
public "getLeft"(): integer
public "getMaxScroll"(): integer
public "getRight"(): integer
public "getRowLeft"(): integer
public "getRowRight"(): integer
public "getRowWidth"(): integer
public "getScrollAmount"(): double
public "getScrollBottom"(): integer
public "getSelected"(): E
public "getTabOrderGroup"(): integer
public "getTop"(): integer
public "getWidth"(): integer
public "isActive"(): boolean
public "isFocused"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "modify$ebl000$configuredModifyBlitBackgroundTexture"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "mouseMoved"(double0: double, double1: double): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "setFocused"(boolean0: boolean): void
public "setLeftPos"(int0: integer): void
public "setRenderBackground"(boolean0: boolean): void
public "setRenderSelection"(boolean0: boolean): void
public "setRenderTopAndBottom"(boolean0: boolean): void
public "setScrollAmount"(double0: double): void
public "setSelected"(e0: E): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "updateSize"(int0: integer, int1: integer, int2: integer, int3: integer): void
get "hovered"(): E
set "hovered"(value: E)
get "scrollAmount"(): double
set "scrollAmount"(value: double)
get "bottom"(): integer
get "currentFocusPath"(): $ComponentPath
get "firstElement"(): E
get "focused"(): E
get "height"(): integer
get "left"(): integer
get "maxScroll"(): integer
get "right"(): integer
get "rowLeft"(): integer
get "rowRight"(): integer
get "rowWidth"(): integer
get "scrollBottom"(): integer
get "selected"(): E
get "tabOrderGroup"(): integer
get "top"(): integer
get "width"(): integer
get "active"(): boolean
get "focused"(): boolean
set "focused"(value: boolean)
set "leftPos"(value: integer)
set "renderBackground"(value: boolean)
set "renderSelection"(value: boolean)
set "renderTopAndBottom"(value: boolean)
set "selected"(value: E)
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState$WorldTypeEntry" {
import { $Holder, $Holder$$Type } from "packages/net/minecraft/core/$Holder"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $WorldPreset, $WorldPreset$$Type } from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"

export class $WorldCreationUiState$WorldTypeEntry extends $Record {
constructor(preset: $Holder$$Type<$WorldPreset$$Type>)

public "describePreset"(): $Component
public "isAmplified"(): boolean
public "preset"(): $Holder<$WorldPreset>
get "amplified"(): boolean
}
}

declare module "packages/net/minecraft/client/gui/font/$GlyphRenderTypes" {
import { $Record } from "packages/java/lang/$Record"
import { $Font$DisplayMode$$Type } from "packages/net/minecraft/client/gui/$Font$DisplayMode"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SubtractiveTextGlyphRenderTypes } from "packages/com/sammy/malum/client/renderer/text/$SubtractiveTextGlyphRenderTypes"
import { $RenderType, $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"

export class $GlyphRenderTypes extends $Record implements $SubtractiveTextGlyphRenderTypes {
constructor(renderType0: $RenderType$$Type, renderType1: $RenderType$$Type, renderType2: $RenderType$$Type)

public static "createForColorTexture"(resourceLocation0: $ResourceLocation$$Type): $GlyphRenderTypes
public static "createForIntensityTexture"(resourceLocation0: $ResourceLocation$$Type): $GlyphRenderTypes
public "malum$getSubtractiveType"(): $RenderType
public "normal"(): $RenderType
public "polygonOffset"(): $RenderType
public "seeThrough"(): $RenderType
public "select"(displayMode0: $Font$DisplayMode$$Type): $RenderType
}
}

declare module "packages/net/minecraft/client/gui/screens/$Overlay" {
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Overlay implements $Renderable {
constructor()

public "isPauseScreen"(): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
get "pauseScreen"(): boolean
}
}

declare module "packages/net/minecraft/client/gui/screens/$Screen" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $NarratableEntry, $NarratableEntry$$Type } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipPositioner$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $AccessorScreen } from "packages/vazkii/patchouli/mixin/client/$AccessorScreen"
import { $Renderable, $Renderable$$Type } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $AccessScreen } from "packages/com/blamejared/controlling/mixin/$AccessScreen"
import { $ScreenAccessor } from "packages/dev/tr7zw/trender/gui/impl/mixin/client/$ScreenAccessor"
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Tooltip$$Type } from "packages/net/minecraft/client/gui/components/$Tooltip"
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $ScreenAccessor as $ScreenAccessor$0 } from "packages/net/blay09/mods/balm/mixin/$ScreenAccessor"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"
import { $Screen$NarratableSearchResult } from "packages/net/minecraft/client/gui/screens/$Screen$NarratableSearchResult"
import { $Font, $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Music } from "packages/net/minecraft/sounds/$Music"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Optional } from "packages/java/util/$Optional"
import { $AbstractContainerEventHandler } from "packages/net/minecraft/client/gui/components/events/$AbstractContainerEventHandler"

export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenAccessor$0, $AccessScreen, $AccessorScreen, $ScreenAccessor {
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<$GuiEventListener>
readonly "narratables": $List<$NarratableEntry>
readonly "renderables": $List<$Renderable>

public "addRenderableOnly"<T extends $Renderable>(t0: T): T
public "addRenderableWidget"<T extends ($GuiEventListener & $Renderable & $NarratableEntry)>(t0: T): T
public "addWidget"<T extends ($GuiEventListener & $NarratableEntry)>(t0: T): T
public "added"(): void
public "afterKeyboardAction"(): void
public "afterMouseAction"(): void
public "afterMouseMove"(): void
public "charTyped"(char0: character, int1: integer): boolean
public static "findNarratableWidget"(list0: $List$$Type<$NarratableEntry$$Type>, narratableEntry1: $NarratableEntry$$Type): $Screen$NarratableSearchResult
public "getBackgroundMusic"(): $Music
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getMinecraft"(): $Minecraft
public "getNarrationMessage"(): $Component
public "getTabOrderGroup"(): integer
public "getTitle"(): $Component
public static "getTooltipFromItem"(minecraft0: $Minecraft$$Type, itemStack1: $ItemStack$$Type): $List<$Component>
public "handleComponentClicked"(style0: $Style$$Type): boolean
public "handleDelayedNarration"(): void
public static "hasAltDown"(): boolean
public static "hasControlDown"(): boolean
public static "hasShiftDown"(): boolean
public "init"(minecraft0: $Minecraft$$Type, int1: integer, int2: integer): void
public static "isCopy"(int0: integer): boolean
public static "isCut"(int0: integer): boolean
public "isFocused"(): boolean
public static "isPaste"(int0: integer): boolean
public "isPauseScreen"(): boolean
public static "isSelectAll"(int0: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "modify$ebm001$configuredModifyBlitBackgroundTexture"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narrationEnabled"(): void
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onClose"(): void
public "onFilesDrop"(list0: $List$$Type<$Path$$Type>): void
public "removed"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "renderBackground"(guiGraphics0: $GuiGraphics$$Type): void
public "renderDirtBackground"(guiGraphics0: $GuiGraphics$$Type): void
public "renderWithTooltip"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "resize"(minecraft0: $Minecraft$$Type, int1: integer, int2: integer): void
public "setFocused"(boolean0: boolean): void
public "setTooltipForNextRenderPass"(list0: $List$$Type<$FormattedCharSequence$$Type>): void
public "setTooltipForNextRenderPass"(list0: $List$$Type<$FormattedCharSequence$$Type>, clientTooltipPositioner1: $ClientTooltipPositioner$$Type, boolean2: boolean): void
public "setTooltipForNextRenderPass"(tooltip0: $Tooltip$$Type, clientTooltipPositioner1: $ClientTooltipPositioner$$Type, boolean2: boolean): void
public "shouldCloseOnEsc"(): boolean
public "tick"(): void
public "triggerImmediateNarration"(boolean0: boolean): void
public static "wrapScreenError"(runnable0: $Runnable$$Type, string1: string, string2: string): void
get "font"(): $Font
set "font"(value: $Font$$Type)
get "height"(): integer
set "height"(value: integer)
get "minecraft"(): $Minecraft
set "minecraft"(value: $Minecraft$$Type)
get "width"(): integer
set "width"(value: integer)
get "backgroundMusic"(): $Music
get "currentFocusPath"(): $ComponentPath
get "narrationMessage"(): $Component
get "tabOrderGroup"(): integer
get "title"(): $Component
get "focused"(): boolean
get "pauseScreen"(): boolean
set "focused"(value: boolean)
set "tooltipForNextRenderPass"(value: $List$$Type<$FormattedCharSequence$$Type>)
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState$SelectedGameMode" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $Enum } from "packages/java/lang/$Enum"
import { $GameType } from "packages/net/minecraft/world/level/$GameType"

export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
static readonly "CREATIVE": $WorldCreationUiState$SelectedGameMode
static readonly "DEBUG": $WorldCreationUiState$SelectedGameMode
static readonly "HARDCORE": $WorldCreationUiState$SelectedGameMode
static readonly "SURVIVAL": $WorldCreationUiState$SelectedGameMode
readonly "displayName": $Component
readonly "gameType": $GameType

public "getInfo"(): $Component
public static "valueOf"(string0: string): $WorldCreationUiState$SelectedGameMode
public static "values"(): $WorldCreationUiState$SelectedGameMode[]
get "info"(): $Component
}
}

declare module "packages/net/minecraft/client/gui/components/$AbstractSelectionList$Entry" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, float9: float): void
public "renderBack"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, boolean8: boolean, float9: float): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/components/$TabOrderedElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TabOrderedElement {
"getTabOrderGroup"(): integer
get "tabOrderGroup"(): integer
}

export namespace $TabOrderedElement {
const probejs$$marker: never
}
export abstract class $TabOrderedElement$$Static implements $TabOrderedElement {
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarrationElementOutput" {
import { $NarratedElementType$$Type } from "packages/net/minecraft/client/gui/narration/$NarratedElementType"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $NarrationThunk$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationThunk"

export interface $NarrationElementOutput {
"add"(narratedElementType0: $NarratedElementType$$Type, component1: $Component$$Type): void
"add"(narratedElementType0: $NarratedElementType$$Type, string1: string): void
"add"(narratedElementType0: $NarratedElementType$$Type, narrationThunk1: $NarrationThunk$$Type<any>): void
"add"(narratedElementType0: $NarratedElementType$$Type, ...component1s: $Component$$Type[]): void
"nest"(): $NarrationElementOutput
}

export namespace $NarrationElementOutput {
const probejs$$marker: never
}
export abstract class $NarrationElementOutput$$Static implements $NarrationElementOutput {
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarratedElementType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $NarratedElementType extends $Enum<$NarratedElementType> {
static readonly "HINT": $NarratedElementType
static readonly "POSITION": $NarratedElementType
static readonly "TITLE": $NarratedElementType
static readonly "USAGE": $NarratedElementType

public static "valueOf"(string0: string): $NarratedElementType
public static "values"(): $NarratedElementType[]
}
}

declare module "packages/net/minecraft/client/gui/components/$AbstractWidget" {
import { $Tooltip, $Tooltip$$Type } from "packages/net/minecraft/client/gui/components/$Tooltip"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $NarratableEntry } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $NarratableEntry$NarrationPriority } from "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $LayoutElement } from "packages/net/minecraft/client/gui/layouts/$LayoutElement"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $SoundManager$$Type } from "packages/net/minecraft/client/sounds/$SoundManager"

export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry {
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
static readonly "UNSET_FG_COLOR": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation

constructor(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public "clearFGColor"(): void
public "getCurrentFocusPath"(): $ComponentPath
public "getFGColor"(): integer
public "getHeight"(): integer
public "getMessage"(): $Component
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "getTooltip"(): $Tooltip
public "getWidth"(): integer
public "getX"(): integer
public "getY"(): integer
public "isActive"(): boolean
public "isFocused"(): boolean
public "isHovered"(): boolean
public "isHoveredOrFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "onClick"(double0: double, double1: double): void
public "onRelease"(double0: double, double1: double): void
public "playDownSound"(soundManager0: $SoundManager$$Type): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public static "renderScrollingString"(guiGraphics0: $GuiGraphics$$Type, font1: $Font$$Type, component2: $Component$$Type, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): void
public "renderTexture"(guiGraphics0: $GuiGraphics$$Type, resourceLocation1: $ResourceLocation$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "setAlpha"(float0: float): void
public "setFGColor"(int0: integer): void
public "setFocused"(boolean0: boolean): void
public "setHeight"(int0: integer): void
public "setMessage"(component0: $Component$$Type): void
public "setPosition"(int0: integer, int1: integer): void
public "setTabOrderGroup"(int0: integer): void
public "setTooltip"(tooltip0: $Tooltip$$Type): void
public "setTooltipDelay"(int0: integer): void
public "setWidth"(int0: integer): void
public "setX"(int0: integer): void
public "setY"(int0: integer): void
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
public "visitWidgets"(consumer0: $Consumer$$Type<$AbstractWidget$$Type>): void
public static "wrapDefaultNarrationMessage"(component0: $Component$$Type): $MutableComponent
get "active"(): boolean
set "active"(value: boolean)
get "height"(): integer
set "height"(value: integer)
get "hoverOrFocusedStartTime"(): long
set "hoverOrFocusedStartTime"(value: long)
get "visible"(): boolean
set "visible"(value: boolean)
get "currentFocusPath"(): $ComponentPath
get "fGColor"(): integer
get "message"(): $Component
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "tooltip"(): $Tooltip
get "width"(): integer
get "x"(): integer
get "y"(): integer
get "focused"(): boolean
get "hovered"(): boolean
get "hoveredOrFocused"(): boolean
set "alpha"(value: float)
set "fGColor"(value: integer)
set "focused"(value: boolean)
set "message"(value: $Component$$Type)
set "tabOrderGroup"(value: integer)
set "tooltip"(value: $Tooltip$$Type)
set "tooltipDelay"(value: integer)
set "width"(value: integer)
set "x"(value: integer)
set "y"(value: integer)
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $WorldCreationUiState$WorldTypeEntry, $WorldCreationUiState$WorldTypeEntry$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState$WorldTypeEntry"
import { $WorldCreationContext, $WorldCreationContext$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext"
import { $PresetEditor } from "packages/net/minecraft/client/gui/screens/worldselection/$PresetEditor"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $WorldCreationUiState$SelectedGameMode, $WorldCreationUiState$SelectedGameMode$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationUiState$SelectedGameMode"
import { $WorldCreationContext$DimensionsUpdater$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext$DimensionsUpdater"
import { $OptionalLong$$Type } from "packages/java/util/$OptionalLong"
import { $List } from "packages/java/util/$List"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Difficulty, $Difficulty$$Type } from "packages/net/minecraft/world/$Difficulty"
import { $GameRules, $GameRules$$Type } from "packages/net/minecraft/world/level/$GameRules"
import { $WorldPreset$$Type } from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"
import { $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"

export class $WorldCreationUiState {
constructor(path0: $Path$$Type, worldCreationContext1: $WorldCreationContext$$Type, optional2: $Optional$$Type<$ResourceKey$$Type<$WorldPreset$$Type>>, optionalLong3: $OptionalLong$$Type)

public "addListener"(consumer0: $Consumer$$Type<$WorldCreationUiState$$Type>): void
public "getAltPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
public "getDifficulty"(): $Difficulty
public "getGameMode"(): $WorldCreationUiState$SelectedGameMode
public "getGameRules"(): $GameRules
public "getName"(): string
public "getNormalPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
public "getPresetEditor"(): $PresetEditor
public "getSeed"(): string
public "getSettings"(): $WorldCreationContext
public "getTargetFolder"(): string
public "getWorldType"(): $WorldCreationUiState$WorldTypeEntry
public "isAllowCheats"(): boolean
public "isBonusChest"(): boolean
public "isDebug"(): boolean
public "isGenerateStructures"(): boolean
public "isHardcore"(): boolean
public "onChanged"(): void
public "setAllowCheats"(boolean0: boolean): void
public "setBonusChest"(boolean0: boolean): void
public "setDifficulty"(difficulty0: $Difficulty$$Type): void
public "setGameMode"(selectedGameMode0: $WorldCreationUiState$SelectedGameMode$$Type): void
public "setGameRules"(gameRules0: $GameRules$$Type): void
public "setGenerateStructures"(boolean0: boolean): void
public "setName"(string0: string): void
public "setSeed"(string0: string): void
public "setSettings"(worldCreationContext0: $WorldCreationContext$$Type): void
public "setWorldType"(worldTypeEntry0: $WorldCreationUiState$WorldTypeEntry$$Type): void
public "updateDimensions"(dimensionsUpdater0: $WorldCreationContext$DimensionsUpdater$$Type): void
get "altPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
get "difficulty"(): $Difficulty
get "gameMode"(): $WorldCreationUiState$SelectedGameMode
get "gameRules"(): $GameRules
get "name"(): string
get "normalPresetList"(): $List<$WorldCreationUiState$WorldTypeEntry>
get "presetEditor"(): $PresetEditor
get "seed"(): string
get "settings"(): $WorldCreationContext
get "targetFolder"(): string
get "worldType"(): $WorldCreationUiState$WorldTypeEntry
get "allowCheats"(): boolean
get "bonusChest"(): boolean
get "debug"(): boolean
get "generateStructures"(): boolean
get "hardcore"(): boolean
set "allowCheats"(value: boolean)
set "bonusChest"(value: boolean)
set "difficulty"(value: $Difficulty$$Type)
set "gameMode"(value: $WorldCreationUiState$SelectedGameMode$$Type)
set "gameRules"(value: $GameRules$$Type)
set "generateStructures"(value: boolean)
set "name"(value: string)
set "seed"(value: string)
set "settings"(value: $WorldCreationContext$$Type)
set "worldType"(value: $WorldCreationUiState$WorldTypeEntry$$Type)
}
}

declare module "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner" {
import { $Vector2ic } from "packages/org/joml/$Vector2ic"

export interface $ClientTooltipPositioner {
"positionTooltip"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): $Vector2ic
}

export namespace $ClientTooltipPositioner {
const probejs$$marker: never
}
export abstract class $ClientTooltipPositioner$$Static implements $ClientTooltipPositioner {
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext" {
import { $RegistryAccess$Frozen } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $LevelStem, $LevelStem$$Type } from "packages/net/minecraft/world/level/dimension/$LevelStem"
import { $Registry, $Registry$$Type } from "packages/net/minecraft/core/$Registry"
import { $LayeredRegistryAccess, $LayeredRegistryAccess$$Type } from "packages/net/minecraft/core/$LayeredRegistryAccess"
import { $WorldGenSettings$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldGenSettings"
import { $WorldDimensions, $WorldDimensions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions"
import { $Record } from "packages/java/lang/$Record"
import { $WorldCreationContext$DimensionsUpdater$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext$DimensionsUpdater"
import { $RegistryLayer, $RegistryLayer$$Type } from "packages/net/minecraft/server/$RegistryLayer"
import { $WorldOptions, $WorldOptions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldOptions"
import { $WorldCreationContext$OptionsModifier$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext$OptionsModifier"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"
import { $WorldDataConfiguration, $WorldDataConfiguration$$Type } from "packages/net/minecraft/world/level/$WorldDataConfiguration"

export class $WorldCreationContext extends $Record {
constructor(options: $WorldOptions$$Type, datapackDimensions: $Registry$$Type<$LevelStem$$Type>, selectedDimensions: $WorldDimensions$$Type, worldgenRegistries: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, dataPackResources: $ReloadableServerResources$$Type, dataConfiguration: $WorldDataConfiguration$$Type)
constructor(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, reloadableServerResources3: $ReloadableServerResources$$Type, worldDataConfiguration4: $WorldDataConfiguration$$Type)
constructor(worldGenSettings0: $WorldGenSettings$$Type, layeredRegistryAccess1: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, reloadableServerResources2: $ReloadableServerResources$$Type, worldDataConfiguration3: $WorldDataConfiguration$$Type)

public "dataConfiguration"(): $WorldDataConfiguration
public "dataPackResources"(): $ReloadableServerResources
public "datapackDimensions"(): $Registry<$LevelStem>
public "options"(): $WorldOptions
public "selectedDimensions"(): $WorldDimensions
public "withDataConfiguration"(worldDataConfiguration0: $WorldDataConfiguration$$Type): $WorldCreationContext
public "withDimensions"(dimensionsUpdater0: $WorldCreationContext$DimensionsUpdater$$Type): $WorldCreationContext
public "withOptions"(optionsModifier0: $WorldCreationContext$OptionsModifier$$Type): $WorldCreationContext
public "withSettings"(worldOptions0: $WorldOptions$$Type, worldDimensions1: $WorldDimensions$$Type): $WorldCreationContext
public "worldgenLoadContext"(): $RegistryAccess$Frozen
public "worldgenRegistries"(): $LayeredRegistryAccess<$RegistryLayer>
}
}

declare module "packages/net/minecraft/client/gui/screens/$Screen$NarratableSearchResult" {
import { $NarratableEntry, $NarratableEntry$$Type } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import { $NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type } from "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority"

export class $Screen$NarratableSearchResult {
readonly "entry": $NarratableEntry
readonly "index": integer
readonly "priority": $NarratableEntry$NarrationPriority

constructor(narratableEntry0: $NarratableEntry$$Type, int1: integer, narrationPriority2: $NarratableEntry$NarrationPriority$$Type)

}
}

declare module "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess" {
import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $MenuAccess<T extends $AbstractContainerMenu> {
"getMenu"(): T
get "menu"(): T
}

export namespace $MenuAccess {
const probejs$$marker: never
}
export abstract class $MenuAccess$$Static<T extends $AbstractContainerMenu> implements $MenuAccess<T> {
}
}

declare module "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph" {
import { $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $AccessorBakedGlyph } from "packages/com/sammy/malum/mixin/client/$AccessorBakedGlyph"
import { $GlyphRenderTypes$$Type } from "packages/net/minecraft/client/gui/font/$GlyphRenderTypes"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $BakedGlyph$Effect$$Type } from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph$Effect"
import { $Font$DisplayMode$$Type } from "packages/net/minecraft/client/gui/$Font$DisplayMode"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export class $BakedGlyph implements $AccessorBakedGlyph {
constructor(glyphRenderTypes0: $GlyphRenderTypes$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float)

public "handler$bie000$render"(italic: boolean, x: float, y: float, matrix: $Matrix4f$$Type, vertexConsumer: $VertexConsumer$$Type, red: float, green: float, blue: float, alpha: float, light: integer, ci: $CallbackInfo$$Type): void
public "render"(boolean0: boolean, float1: float, float2: float, matrix4f3: $Matrix4f$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, float7: float, float8: float, int9: integer): void
public "renderEffect"(effect0: $BakedGlyph$Effect$$Type, matrix4f1: $Matrix4f$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer): void
public "renderType"(displayMode0: $Font$DisplayMode$$Type): $RenderType
}
}

declare module "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent" {
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ClientTooltipComponent {
"getHeight"(): integer
"getWidth"(font0: $Font$$Type): integer
"renderImage"(font0: $Font$$Type, int1: integer, int2: integer, guiGraphics3: $GuiGraphics$$Type): void
"renderText"(font0: $Font$$Type, int1: integer, int2: integer, matrix4f3: $Matrix4f$$Type, bufferSource4: $MultiBufferSource$BufferSource$$Type): void
get "height"(): integer
}

export namespace $ClientTooltipComponent {
function create(formattedCharSequence0: $FormattedCharSequence$$Type): $ClientTooltipComponent
function create(tooltipComponent0: $TooltipComponent$$Type): $ClientTooltipComponent
}
export abstract class $ClientTooltipComponent$$Static implements $ClientTooltipComponent {
static "create"(formattedCharSequence0: $FormattedCharSequence$$Type): $ClientTooltipComponent
static "create"(tooltipComponent0: $TooltipComponent$$Type): $ClientTooltipComponent
}
}

declare module "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent" {
import { $ScreenDirection } from "packages/net/minecraft/client/gui/navigation/$ScreenDirection"

export interface $FocusNavigationEvent {
"getVerticalDirectionForInitialFocus"(): $ScreenDirection
get "verticalDirectionForInitialFocus"(): $ScreenDirection
}

export namespace $FocusNavigationEvent {
const probejs$$marker: never
}
export abstract class $FocusNavigationEvent$$Static implements $FocusNavigationEvent {
}
}

declare module "packages/net/minecraft/client/gui/components/$Button$Builder" {
import { $Tooltip$$Type } from "packages/net/minecraft/client/gui/components/$Tooltip"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Button } from "packages/net/minecraft/client/gui/components/$Button"
import { $Button$CreateNarration$$Type } from "packages/net/minecraft/client/gui/components/$Button$CreateNarration"
import { $Button$OnPress$$Type } from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export class $Button$Builder {
constructor(component0: $Component$$Type, onPress1: $Button$OnPress$$Type)

public "bounds"(int0: integer, int1: integer, int2: integer, int3: integer): $Button$Builder
public "build"(function0: $Function$$Type<$Button$Builder$$Type, $Button>): $Button
public "build"(): $Button
public "createNarration"(createNarration0: $Button$CreateNarration$$Type): $Button$Builder
public "pos"(int0: integer, int1: integer): $Button$Builder
public "size"(int0: integer, int1: integer): $Button$Builder
public "tooltip"(tooltip0: $Tooltip$$Type): $Button$Builder
public "width"(int0: integer): $Button$Builder
}
}

declare module "packages/net/minecraft/client/gui/$Font" {
import { $FormattedCharSequence, $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $AccessorFont } from "packages/com/sammy/malum/mixin/client/$AccessorFont"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $IForgeFont } from "packages/net/minecraftforge/client/extensions/$IForgeFont"
import { $Vector3f } from "packages/org/joml/$Vector3f"
import { $FontAccessor } from "packages/com/simibubi/create/foundation/mixin/accessor/$FontAccessor"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $IAntiqueTextProvider } from "packages/net/mehvahdjukaar/supplementaries/api/$IAntiqueTextProvider"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $FormattedText, $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $StringSplitter, $StringSplitter$$Type } from "packages/net/minecraft/client/$StringSplitter"
import { $List } from "packages/java/util/$List"
import { $RandomSource } from "packages/net/minecraft/util/$RandomSource"
import { $Font$DisplayMode$$Type } from "packages/net/minecraft/client/gui/$Font$DisplayMode"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $FontSet } from "packages/net/minecraft/client/gui/font/$FontSet"

export class $Font implements $IForgeFont, $IAntiqueTextProvider, $AccessorFont, $FontAccessor {
static readonly "ALPHA_CUTOFF": integer
static readonly "SHADOW_OFFSET": $Vector3f
readonly "filterFishyGlyphs": boolean
readonly "fonts": $Function<$ResourceLocation, $FontSet>
readonly "lineHeight": integer
readonly "random": $RandomSource

constructor(function0: $Function$$Type<$ResourceLocation$$Type, $FontSet>, boolean1: boolean)

public static "adjustColor"(int0: integer): integer
public "bidirectionalShaping"(string0: string): string
public "drawInBatch"(formattedCharSequence0: $FormattedCharSequence$$Type, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer, boolean10: boolean): integer
public "drawInBatch"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch"(component0: $Component$$Type, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): integer
public "drawInBatch8xOutline"(formattedCharSequence0: $FormattedCharSequence$$Type, float1: float, float2: float, int3: integer, int4: integer, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, int7: integer): void
public "ellipsize"(formattedText0: $FormattedText$$Type, int1: integer): $FormattedText
public "getFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
public "getSplitter"(): $StringSplitter
public "handler$eag000$inject$renderText"(formattedCharSequence0: $FormattedCharSequence$$Type, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer, callbackInfoReturnable10: $CallbackInfoReturnable$$Type<any>): void
public "handler$eag000$inject$renderText"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer, callbackInfoReturnable10: $CallbackInfoReturnable$$Type<any>): void
public "hasAntiqueInk"(): boolean
public "isBidirectional"(): boolean
public "plainSubstrByWidth"(string0: string, int1: integer, boolean2: boolean): string
public "plainSubstrByWidth"(string0: string, int1: integer): string
public "renderText"(string0: string, float1: float, float2: float, int3: integer, boolean4: boolean, matrix4f5: $Matrix4f$$Type, multiBufferSource6: $MultiBufferSource$$Type, displayMode7: $Font$DisplayMode$$Type, int8: integer, int9: integer): float
public "self"(): $Font
public "setAntiqueInk"(hasInk: boolean): void
public "split"(formattedText0: $FormattedText$$Type, int1: integer): $List<$FormattedCharSequence>
public "substrByWidth"(formattedText0: $FormattedText$$Type, int1: integer): $FormattedText
public "width"(string0: string): integer
public "width"(formattedCharSequence0: $FormattedCharSequence$$Type): integer
public "width"(formattedText0: $FormattedText$$Type): integer
public "wordWrapHeight"(string0: string, int1: integer): integer
public "wordWrapHeight"(formattedText0: $FormattedText$$Type, int1: integer): integer
get "splitter"(): $StringSplitter
set "splitter"(value: $StringSplitter$$Type)
get "bidirectional"(): boolean
set "antiqueInk"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/screens/social/$PlayerSocialManager" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $UUID, $UUID$$Type } from "packages/java/util/$UUID"
import { $Set } from "packages/java/util/$Set"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $UserApiService$$Type } from "packages/com/mojang/authlib/minecraft/$UserApiService"
import { $PlayerInfo$$Type } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export class $PlayerSocialManager {
constructor(minecraft0: $Minecraft$$Type, userApiService1: $UserApiService$$Type)

public "addPlayer"(playerInfo0: $PlayerInfo$$Type): void
public "getDiscoveredUUID"(string0: string): $UUID
public "getHiddenPlayers"(): $Set<$UUID>
public "handler$fbp000$addPlayer"(info: $PlayerInfo$$Type, ci: $CallbackInfo$$Type): void
public "handler$fbp000$removePlayer"(id: $UUID$$Type, ci: $CallbackInfo$$Type): void
public "hidePlayer"(uUID0: $UUID$$Type): void
public "isBlocked"(uUID0: $UUID$$Type): boolean
public "isHidden"(uUID0: $UUID$$Type): boolean
public "removePlayer"(uUID0: $UUID$$Type): void
public "shouldHideMessageFrom"(uUID0: $UUID$$Type): boolean
public "showPlayer"(uUID0: $UUID$$Type): void
public "startOnlineMode"(): void
public "stopOnlineMode"(): void
get "hiddenPlayers"(): $Set<$UUID>
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarrationThunk" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $List$$Type } from "packages/java/util/$List"

export class $NarrationThunk<T> {
static readonly "EMPTY": $NarrationThunk<any>

public static "from"(string0: string): $NarrationThunk<any>
public static "from"(list0: $List$$Type<$Component$$Type>): $NarrationThunk<any>
public static "from"(component0: $Component$$Type): $NarrationThunk<any>
public "getText"(consumer0: $Consumer$$Type<string>): void
}
}

declare module "packages/net/minecraft/client/gui/components/$SubtitleOverlay" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import { $WeighedSoundEvents$$Type } from "packages/net/minecraft/client/sounds/$WeighedSoundEvents"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $SoundEventListener } from "packages/net/minecraft/client/sounds/$SoundEventListener"

export class $SubtitleOverlay implements $SoundEventListener {
constructor(minecraft0: $Minecraft$$Type)

public "onPlaySound"(soundInstance0: $SoundInstance$$Type, weighedSoundEvents1: $WeighedSoundEvents$$Type): void
public "render"(guiGraphics0: $GuiGraphics$$Type): void
}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$ToastComponent$ToastInstance" {
import { $Toast } from "packages/net/minecraft/client/gui/components/toasts/$Toast"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ToastComponent$ToastInstance<T extends $Toast> {
public "getToast"(): T
public "render"(int0: integer, guiGraphics1: $GuiGraphics$$Type): boolean
get "toast"(): T
}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$TutorialToast" {
import { $Toast } from "packages/net/minecraft/client/gui/components/toasts/$Toast"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ToastComponent$$Type } from "packages/net/minecraft/client/gui/components/toasts/$ToastComponent"
import { $TutorialToast$Icons$$Type } from "packages/net/minecraft/client/gui/components/toasts/$TutorialToast$Icons"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Toast$Visibility } from "packages/net/minecraft/client/gui/components/toasts/$Toast$Visibility"

export class $TutorialToast implements $Toast {
static readonly "PROGRESS_BAR_HEIGHT": integer
static readonly "PROGRESS_BAR_WIDTH": integer
static readonly "PROGRESS_BAR_X": integer
static readonly "PROGRESS_BAR_Y": integer

constructor(icons0: $TutorialToast$Icons$$Type, component1: $Component$$Type, component2: $Component$$Type, boolean3: boolean)

public "getToken"(): any
public "height"(): integer
public "hide"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, toastComponent1: $ToastComponent$$Type, long2: long): $Toast$Visibility
public "slotCount"(): integer
public "updateProgress"(float0: float): void
public "width"(): integer
get "token"(): any
}
}

declare module "packages/net/minecraft/client/gui/spectator/$SpectatorMenuItem" {
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $SpectatorMenu$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenu"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $SpectatorMenuItem {
"getName"(): $Component
"isEnabled"(): boolean
"renderIcon"(guiGraphics0: $GuiGraphics$$Type, float1: float, int2: integer): void
"selectItem"(spectatorMenu0: $SpectatorMenu$$Type): void
get "name"(): $Component
get "enabled"(): boolean
}

export namespace $SpectatorMenuItem {
const probejs$$marker: never
}
export abstract class $SpectatorMenuItem$$Static implements $SpectatorMenuItem {
}
}

declare module "packages/net/minecraft/client/gui/$Font$DisplayMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Font$DisplayMode extends $Enum<$Font$DisplayMode> {
static readonly "NORMAL": $Font$DisplayMode
static readonly "POLYGON_OFFSET": $Font$DisplayMode
static readonly "SEE_THROUGH": $Font$DisplayMode

public static "valueOf"(string0: string): $Font$DisplayMode
public static "values"(): $Font$DisplayMode[]
}
}

declare module "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $AbstractContainerScreen, $AbstractContainerScreen$$Type } from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export class $EffectRenderingInventoryScreen<T extends $AbstractContainerMenu> extends $AbstractContainerScreen<T> {
constructor(t0: T, inventory1: $Inventory$$Type, component2: $Component$$Type)

public "adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "canSeeEffects"(): boolean
public "charTyped"(char0: character, int1: integer): boolean
public static "draw"(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, list2: $List$$Type<$Component$$Type>, int3: integer): void
public "drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer): void
public "drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer, int3: integer): void
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setFocused"(boolean0: boolean): void
public "ths"(): $AbstractContainerScreen<any>
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/components/$Tooltip" {
import { $FormattedCharSequence } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $NarrationSupplier } from "packages/net/minecraft/client/gui/narration/$NarrationSupplier"
import { $List } from "packages/java/util/$List"
import { $TooltipAccessor } from "packages/fuzs/puzzleslib/mixin/client/accessor/$TooltipAccessor"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $Tooltip implements $NarrationSupplier, $TooltipAccessor {
public static "create"(component0: $Component$$Type, component1: $Component$$Type): $Tooltip
public static "create"(component0: $Component$$Type): $Tooltip
public static "splitTooltip"(minecraft0: $Minecraft$$Type, component1: $Component$$Type): $List<$FormattedCharSequence>
public "toCharSequence"(minecraft0: $Minecraft$$Type): $List<$FormattedCharSequence>
public "updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
}
}

declare module "packages/net/minecraft/client/gui/spectator/$SpectatorMenuListener" {
import { $SpectatorMenu$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenu"

export interface $SpectatorMenuListener {
"onSpectatorMenuClosed"(spectatorMenu0: $SpectatorMenu$$Type): void
}

export namespace $SpectatorMenuListener {
const probejs$$marker: never
}
export abstract class $SpectatorMenuListener$$Static implements $SpectatorMenuListener {
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldOpenFlows" {
import { $Lifecycle$$Type } from "packages/com/mojang/serialization/$Lifecycle"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"
import { $LevelStorageSource$$Type } from "packages/net/minecraft/world/level/storage/$LevelStorageSource"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $LayeredRegistryAccess$$Type } from "packages/net/minecraft/core/$LayeredRegistryAccess"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $WorldCreationContext } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext"
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $WorldDimensions } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $WorldData$$Type } from "packages/net/minecraft/world/level/storage/$WorldData"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $WorldStem } from "packages/net/minecraft/server/$WorldStem"
import { $LevelSettings, $LevelSettings$$Type } from "packages/net/minecraft/world/level/$LevelSettings"
import { $RegistryLayer$$Type } from "packages/net/minecraft/server/$RegistryLayer"
import { $Pair } from "packages/com/mojang/datafixers/util/$Pair"
import { $WorldOptions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldOptions"
import { $CreateWorldScreen$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$CreateWorldScreen"
import { $ReloadableServerResources$$Type } from "packages/net/minecraft/server/$ReloadableServerResources"

export class $WorldOpenFlows {
constructor(minecraft0: $Minecraft$$Type, levelStorageSource1: $LevelStorageSource$$Type)

public static "confirmWorldCreation"(minecraft0: $Minecraft$$Type, createWorldScreen1: $CreateWorldScreen$$Type, lifecycle2: $Lifecycle$$Type, runnable3: $Runnable$$Type, boolean4: boolean): void
public "createFreshLevel"(string0: string, levelSettings1: $LevelSettings$$Type, worldOptions2: $WorldOptions$$Type, function3: $Function$$Type<$RegistryAccess$$Type, $WorldDimensions>): void
public "createLevelFromExistingSettings"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, reloadableServerResources1: $ReloadableServerResources$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, worldData3: $WorldData$$Type): void
public "loadLevel"(screen0: $Screen$$Type, string1: string): void
public "loadWorldStem"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type, boolean1: boolean): $WorldStem
public "recreateWorldData"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type): $Pair<$LevelSettings, $WorldCreationContext>
}
}

declare module "packages/net/minecraft/client/gui/$MapRenderer" {
import { $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $MapItemSavedData$$Type } from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import { $MultiBufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export class $MapRenderer implements $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type)

public "close"(): void
public "render"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, mapItemSavedData3: $MapItemSavedData$$Type, boolean4: boolean, int5: integer): void
public "resetData"(): void
public "update"(int0: integer, mapItemSavedData1: $MapItemSavedData$$Type): void
}
}

declare module "packages/net/minecraft/client/gui/components/$LerpingBossEvent" {
import { $BossEvent } from "packages/net/minecraft/world/$BossEvent"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $BossEvent$BossBarColor$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarColor"
import { $BossEvent$BossBarOverlay$$Type } from "packages/net/minecraft/world/$BossEvent$BossBarOverlay"

export class $LerpingBossEvent extends $BossEvent {
constructor(uUID0: $UUID$$Type, component1: $Component$$Type, float2: float, bossBarColor3: $BossEvent$BossBarColor$$Type, bossBarOverlay4: $BossEvent$BossBarOverlay$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean)

}
}

declare module "packages/net/minecraft/client/gui/components/events/$GuiEventListener" {
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $TabOrderedElement } from "packages/net/minecraft/client/gui/components/$TabOrderedElement"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $GuiEventListener extends $TabOrderedElement {
"charTyped"(char0: character, int1: integer): boolean
"getCurrentFocusPath"(): $ComponentPath
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}

export namespace $GuiEventListener {
const DOUBLE_CLICK_THRESHOLD_MS: long
}
export abstract class $GuiEventListener$$Static implements $GuiEventListener {
static readonly "DOUBLE_CLICK_THRESHOLD_MS": long

}
}

declare module "packages/net/minecraft/client/gui/navigation/$ScreenDirection" {
import { $ScreenAxis } from "packages/net/minecraft/client/gui/navigation/$ScreenAxis"
import { $Enum } from "packages/java/lang/$Enum"
import { $IntComparator } from "packages/it/unimi/dsi/fastutil/ints/$IntComparator"

export class $ScreenDirection extends $Enum<$ScreenDirection> {
static readonly "DOWN": $ScreenDirection
static readonly "LEFT": $ScreenDirection
static readonly "RIGHT": $ScreenDirection
static readonly "UP": $ScreenDirection

public "coordinateValueComparator"(): $IntComparator
public "getAxis"(): $ScreenAxis
public "getOpposite"(): $ScreenDirection
public "isAfter"(int0: integer, int1: integer): boolean
public "isBefore"(int0: integer, int1: integer): boolean
public "isPositive"(): boolean
public static "valueOf"(string0: string): $ScreenDirection
public static "values"(): $ScreenDirection[]
get "axis"(): $ScreenAxis
get "opposite"(): $ScreenDirection
get "positive"(): boolean
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext$DimensionsUpdater" {
import { $WorldDimensions, $WorldDimensions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldDimensions"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "packages/net/minecraft/core/$RegistryAccess$Frozen"
import { $BiFunction } from "packages/java/util/function/$BiFunction"

export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
"andThen"<V>(function0: $Function$$Type<$WorldDimensions$$Type, V>): $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, V>
"apply"(frozen0: $RegistryAccess$Frozen$$Type, worldDimensions1: $WorldDimensions$$Type): $WorldDimensions
}

export namespace $WorldCreationContext$DimensionsUpdater {
const probejs$$marker: never
}
export abstract class $WorldCreationContext$DimensionsUpdater$$Static implements $WorldCreationContext$DimensionsUpdater {
}
}

declare module "packages/net/minecraft/client/gui/components/$CycleButton$Builder" {
import { $CycleButton$ValueListSupplier$$Type } from "packages/net/minecraft/client/gui/components/$CycleButton$ValueListSupplier"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $BooleanSupplier$$Type } from "packages/java/util/function/$BooleanSupplier"
import { $CycleButton, $CycleButton$$Type } from "packages/net/minecraft/client/gui/components/$CycleButton"
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $List$$Type } from "packages/java/util/$List"
import { $CycleButton$OnValueChange$$Type } from "packages/net/minecraft/client/gui/components/$CycleButton$OnValueChange"
import { $OptionInstance$TooltipSupplier$$Type } from "packages/net/minecraft/client/$OptionInstance$TooltipSupplier"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"

export class $CycleButton$Builder<T> {
constructor(function0: $Function$$Type<T, $Component>)

public "create"(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type, onValueChange5: $CycleButton$OnValueChange$$Type<T>): $CycleButton<T>
public "create"(int0: integer, int1: integer, int2: integer, int3: integer, component4: $Component$$Type): $CycleButton<T>
public "displayOnlyValue"(): $CycleButton$Builder<T>
public "withCustomNarration"(function0: $Function$$Type<$CycleButton$$Type<T>, $MutableComponent>): $CycleButton$Builder<T>
public "withInitialValue"(t0: T): $CycleButton$Builder<T>
public "withTooltip"(tooltipSupplier0: $OptionInstance$TooltipSupplier$$Type<T>): $CycleButton$Builder<T>
public "withValues"(...t0s: T[]): $CycleButton$Builder<T>
public "withValues"(valueListSupplier0: $CycleButton$ValueListSupplier$$Type<T>): $CycleButton$Builder<T>
public "withValues"(collection0: $Collection$$Type<T>): $CycleButton$Builder<T>
public "withValues"(list0: $List$$Type<T>, list1: $List$$Type<T>): $CycleButton$Builder<T>
public "withValues"(booleanSupplier0: $BooleanSupplier$$Type, list1: $List$$Type<T>, list2: $List$$Type<T>): $CycleButton$Builder<T>
}
}

declare module "packages/net/minecraft/client/gui/components/$SplashRenderer" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $SplashRenderer {
static readonly "CHRISTMAS": $SplashRenderer
static readonly "HALLOWEEN": $SplashRenderer
static readonly "NEW_YEAR": $SplashRenderer

constructor(string0: string)

public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, font2: $Font$$Type, int3: integer): void
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$PresetEditor" {
import { $Optional } from "packages/java/util/$Optional"
import { $WorldPreset } from "packages/net/minecraft/world/level/levelgen/presets/$WorldPreset"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ResourceKey } from "packages/net/minecraft/resources/$ResourceKey"
import { $CreateWorldScreen$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$CreateWorldScreen"
import { $Map } from "packages/java/util/$Map"
import { $WorldCreationContext$$Type } from "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext"

export interface $PresetEditor {
"createEditScreen"(createWorldScreen0: $CreateWorldScreen$$Type, worldCreationContext1: $WorldCreationContext$$Type): $Screen
}

export namespace $PresetEditor {
const EDITORS: $Map<$Optional<$ResourceKey<$WorldPreset>>, $PresetEditor>
}
export abstract class $PresetEditor$$Static implements $PresetEditor {
/** @deprecated */
static readonly "EDITORS": $Map<$Optional<$ResourceKey<$WorldPreset>>, $PresetEditor>

}
}

declare module "packages/net/minecraft/client/gui/$GuiGraphics" {
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type } from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Style$$Type } from "packages/net/minecraft/network/chat/$Style"
import { $Runnable$$Type } from "packages/java/lang/$Runnable"
import { $ClientTooltipPositioner$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import { $LivingEntity$$Type } from "packages/net/minecraft/world/entity/$LivingEntity"
import { $RenderType$$Type } from "packages/net/minecraft/client/renderer/$RenderType"
import { $IForgeGuiGraphics } from "packages/net/minecraftforge/client/extensions/$IForgeGuiGraphics"
import { $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack, $PoseStack$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $DrawContextAccessor } from "packages/dev/tr7zw/trender/gui/impl/mixin/client/$DrawContextAccessor"
import { $TextureAtlasSprite$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $GuiGraphics implements $IForgeGuiGraphics, $DrawContextAccessor {
static readonly "MAX_GUI_Z": float
static readonly "MIN_GUI_Z": float
"bufferSource": $MultiBufferSource$BufferSource
"pose": $PoseStack

constructor(minecraft0: $Minecraft$$Type, poseStack1: $PoseStack$$Type, bufferSource2: $MultiBufferSource$BufferSource$$Type)
constructor(minecraft0: $Minecraft$$Type, bufferSource1: $MultiBufferSource$BufferSource$$Type)

public "blit"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, textureAtlasSprite5: $TextureAtlasSprite$$Type, float6: float, float7: float, float8: float, float9: float): void
public "blit"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, textureAtlasSprite5: $TextureAtlasSprite$$Type): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, float4: float, float5: float, int6: integer, int7: integer, int8: integer, int9: integer): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, float3: float, float4: float, int5: integer, int6: integer, int7: integer, int8: integer): void
public "blit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, float5: float, float6: float, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "blitInscribed"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitNineSliced"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer, int13: integer, int14: integer): void
public "blitNineSlicedSized"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitRepeating"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): void
public "blitRepeating"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer): void
public "blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer, int10: integer, int11: integer, int12: integer): void
public "blitWithBorder"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, int9: integer): void
public "bufferSource"(): $MultiBufferSource$BufferSource
public "disableScissor"(): void
public "drawCenteredString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer): void
public "drawCenteredString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer): void
public "drawCenteredString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer): void
/** @deprecated */
public "drawManaged"(runnable0: $Runnable$$Type): void
public "drawString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, float2: float, float3: float, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, string1: string, float2: float, float3: float, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, string1: string, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, formattedCharSequence1: $FormattedCharSequence$$Type, int2: integer, int3: integer, int4: integer, boolean5: boolean): integer
public "drawString"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer, int4: integer): integer
public "drawWordWrap"(font0: $Font$$Type, formattedText1: $FormattedText$$Type, int2: integer, int3: integer, int4: integer, int5: integer): void
public "enableScissor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "fill"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "fill"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fill"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "fill"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "fillGradient"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer): void
public "fillGradient"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer): void
public "fillGradient"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "flush"(): void
/** @deprecated */
public "flushIfManaged"(): void
/** @deprecated */
public "flushIfUnmanaged"(): void
public "getColorFromFormattingCharacter"(char0: character, boolean1: boolean): integer
public "guiHeight"(): integer
public "guiWidth"(): integer
public "hLine"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "hLine"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "handler$djo000$renderTooltip"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, callbackInfo4: $CallbackInfo$$Type): void
public "handler$djo000$renderTooltipInternal"(font0: $Font$$Type, list1: $List$$Type<any>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type, callbackInfo5: $CallbackInfo$$Type): void
public "innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float): void
public "innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "pose"(): $PoseStack
public "renderComponentHoverEffect"(font0: $Font$$Type, style1: $Style$$Type, int2: integer, int3: integer): void
public "renderComponentTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, int2: integer, int3: integer): void
public "renderComponentTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedText$$Type>, int2: integer, int3: integer, itemStack4: $ItemStack$$Type): void
public "renderComponentTooltipFromElements"(font0: $Font$$Type, list1: $List$$Type<$Either$$Type<$FormattedText$$Type, $TooltipComponent$$Type>>, int2: integer, int3: integer, itemStack4: $ItemStack$$Type): void
public "renderFakeItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "renderItem"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, int4: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer): void
public "renderItem"(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, int3: integer): void
public "renderItemDecorations"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer): void
public "renderItemDecorations"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, string4: string): void
public "renderOutline"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "renderTooltip"(font0: $Font$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, component1: $Component$$Type, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, optional2: $Optional$$Type<$TooltipComponent$$Type>, itemStack3: $ItemStack$$Type, int4: integer, int5: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$Component$$Type>, optional2: $Optional$$Type<$TooltipComponent$$Type>, int3: integer, int4: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedCharSequence$$Type>, int2: integer, int3: integer): void
public "renderTooltip"(font0: $Font$$Type, list1: $List$$Type<$FormattedCharSequence$$Type>, clientTooltipPositioner2: $ClientTooltipPositioner$$Type, int3: integer, int4: integer): void
public "renderTooltipInternal"(font0: $Font$$Type, list1: $List$$Type<$ClientTooltipComponent$$Type>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type): void
public "setColor"(float0: float, float1: float, float2: float, float3: float): void
public "vLine"(renderType0: $RenderType$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "vLine"(int0: integer, int1: integer, int2: integer, int3: integer): void
get "minecraft"(): $Minecraft
set "minecraft"(value: $Minecraft$$Type)
get "tooltipStack"(): $ItemStack
set "tooltipStack"(value: $ItemStack$$Type)
}
}

declare module "packages/net/minecraft/client/gui/screens/recipebook/$RecipeCollection" {
import { $RegistryAccess, $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $RecipeBook$$Type } from "packages/net/minecraft/stats/$RecipeBook"
import { $StackedContents$$Type } from "packages/net/minecraft/world/entity/player/$StackedContents"
import { $Recipe, $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecipeCollection {
constructor(registryAccess0: $RegistryAccess$$Type, list1: $List$$Type<$Recipe$$Type<any>>)

public "canCraft"(stackedContents0: $StackedContents$$Type, int1: integer, int2: integer, recipeBook3: $RecipeBook$$Type): void
public "getDisplayRecipes"(boolean0: boolean): $List<$Recipe<any>>
public "getRecipes"(boolean0: boolean): $List<$Recipe<any>>
public "getRecipes"(): $List<$Recipe<any>>
public "hasCraftable"(): boolean
public "hasFitting"(): boolean
public "hasKnownRecipes"(): boolean
public "hasSingleResultItem"(): boolean
public "isCraftable"(recipe0: $Recipe$$Type<any>): boolean
public "registryAccess"(): $RegistryAccess
public "updateKnownRecipes"(recipeBook0: $RecipeBook$$Type): void
get "recipes"(): $List<$Recipe<any>>
}
}

declare module "packages/net/minecraft/client/gui/components/$ObjectSelectionList" {
import { $ObjectSelectionList$Entry } from "packages/net/minecraft/client/gui/components/$ObjectSelectionList$Entry"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $AbstractSelectionList } from "packages/net/minecraft/client/gui/components/$AbstractSelectionList"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Optional } from "packages/java/util/$Optional"

export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
constructor(minecraft0: $Minecraft$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

public "charTyped"(char0: character, int1: integer): boolean
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isActive"(): boolean
public "isFocused"(): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
get "active"(): boolean
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/components/$Renderable" {
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $Renderable {
"render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
}

export namespace $Renderable {
const probejs$$marker: never
}
export abstract class $Renderable$$Static implements $Renderable {
}
}

declare module "packages/net/minecraft/client/gui/navigation/$ScreenPosition" {
import { $ScreenAxis$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenAxis"
import { $Record } from "packages/java/lang/$Record"
import { $ScreenDirection$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenDirection"

export class $ScreenPosition extends $Record {
constructor(int0: integer, int1: integer)

public "getCoordinate"(screenAxis0: $ScreenAxis$$Type): integer
public static "of"(screenAxis0: $ScreenAxis$$Type, int1: integer, int2: integer): $ScreenPosition
public "step"(screenDirection0: $ScreenDirection$$Type): $ScreenPosition
public "x"(): integer
public "y"(): integer
}
}

declare module "packages/net/minecraft/client/gui/components/events/$ContainerEventHandler" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $ContainerEventHandler extends $GuiEventListener {
"charTyped"(char0: character, int1: integer): boolean
"children"(): $List<$GuiEventListener>
"getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
"getCurrentFocusPath"(): $ComponentPath
"getFocused"(): $GuiEventListener
"getRectangle"(): $ScreenRectangle
"getTabOrderGroup"(): integer
"isDragging"(): boolean
"isFocused"(): boolean
"isMouseOver"(double0: double, double1: double): boolean
"keyPressed"(int0: integer, int1: integer, int2: integer): boolean
"keyReleased"(int0: integer, int1: integer, int2: integer): boolean
"magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
"mouseClicked"(double0: double, double1: double, int2: integer): boolean
"mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
"mouseMoved"(double0: double, double1: double): void
"mouseReleased"(double0: double, double1: double, int2: integer): boolean
"mouseScrolled"(double0: double, double1: double, double2: double): boolean
"nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
"setDragging"(boolean0: boolean): void
"setFocused"(boolean0: boolean): void
"setFocused"(guiEventListener0: $GuiEventListener$$Type): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
get "focused"(): boolean
set "dragging"(value: boolean)
set "focused"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
}

export namespace $ContainerEventHandler {
const probejs$$marker: never
}
export abstract class $ContainerEventHandler$$Static implements $ContainerEventHandler {
}
}

declare module "packages/net/minecraft/client/gui/$Gui" {
import { $ItemRenderer$$Type } from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $PlayerRideableJumping$$Type } from "packages/net/minecraft/world/entity/$PlayerRideableJumping"
import { $GuiSubtitleOverlayAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$GuiSubtitleOverlayAccess"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $SpectatorGui } from "packages/net/minecraft/client/gui/components/spectator/$SpectatorGui"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $BossHealthOverlay } from "packages/net/minecraft/client/gui/components/$BossHealthOverlay"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $Objective$$Type } from "packages/net/minecraft/world/scores/$Objective"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $PlayerTabOverlay } from "packages/net/minecraft/client/gui/components/$PlayerTabOverlay"
import { $GuiAccessor } from "packages/com/github/exopandora/shouldersurfing/mixins/$GuiAccessor"
import { $ChatComponent } from "packages/net/minecraft/client/gui/components/$ChatComponent"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"
import { $GuiAccessor as $GuiAccessor$0 } from "packages/com/simibubi/create/foundation/mixin/accessor/$GuiAccessor"

export class $Gui implements $GuiSubtitleOverlayAccess, $GuiAccessor, $GuiAccessor$0 {
static readonly "GUI_ICONS_LOCATION": $ResourceLocation
readonly "minecraft": $Minecraft

constructor(minecraft0: $Minecraft$$Type, itemRenderer1: $ItemRenderer$$Type)

public "clear"(): void
public "clearCache"(): void
public "constant$zkd000$apoth_extendTime"(int0: integer): integer
public "displayScoreboardSidebar"(guiGraphics0: $GuiGraphics$$Type, objective1: $Objective$$Type): void
public "getBossOverlay"(): $BossHealthOverlay
public "getChat"(): $ChatComponent
public "getFont"(): $Font
public "getGuiTicks"(): integer
public "getSpectatorGui"(): $SpectatorGui
public "getTabList"(): $PlayerTabOverlay
public "handler$bbl000$renderSlot"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, player4: $Player$$Type, itemStack5: $ItemStack$$Type, int6: integer, callbackInfo7: $CallbackInfo$$Type): void
public "handler$bff001$iris$handleHudHidingScreens"(pGui0: $GuiGraphics$$Type, pFloat1: float, ci: $CallbackInfo$$Type): void
public "handler$ebo001$renderSlot"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float, player4: $Player$$Type, itemStack5: $ItemStack$$Type, int6: integer, callbackInfo7: $CallbackInfo$$Type): void
public "handler$emh000$changeArmorItem"(guiGraphics0: $GuiGraphics$$Type, resourceLocation1: $ResourceLocation$$Type, float2: float, callbackInfo3: $CallbackInfo$$Type): void
public "isShowingChatDisabledByPlayer"(): boolean
public "onDisconnected"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "renderCrosshair"(guiGraphics0: $GuiGraphics$$Type): void
public "renderDemoOverlay"(guiGraphics0: $GuiGraphics$$Type): void
public "renderEffects"(guiGraphics0: $GuiGraphics$$Type): void
public "renderExperienceBar"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
public "renderHotbar"(float0: float, guiGraphics1: $GuiGraphics$$Type): void
public "renderJumpMeter"(playerRideableJumping0: $PlayerRideableJumping$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer): void
public "renderSelectedItemName"(guiGraphics0: $GuiGraphics$$Type): void
public "renderSelectedItemName"(guiGraphics0: $GuiGraphics$$Type, int1: integer): void
public "renderSpyglassOverlay"(guiGraphics0: $GuiGraphics$$Type, float1: float): void
public "renderVignette"(guiGraphics0: $GuiGraphics$$Type, entity1: $Entity$$Type): void
public "resetTitleTimes"(): void
public "setChatDisabledByPlayerShown"(boolean0: boolean): void
public "setNowPlaying"(component0: $Component$$Type): void
public "setOverlayMessage"(component0: $Component$$Type, boolean1: boolean): void
public "setSubtitle"(component0: $Component$$Type): void
public "setTimes"(int0: integer, int1: integer, int2: integer): void
public "setTitle"(component0: $Component$$Type): void
public "tick"(boolean0: boolean): void
get "vignetteBrightness"(): float
set "vignetteBrightness"(value: float)
get "bossOverlay"(): $BossHealthOverlay
get "chat"(): $ChatComponent
get "font"(): $Font
get "guiTicks"(): integer
get "spectatorGui"(): $SpectatorGui
get "tabList"(): $PlayerTabOverlay
get "showingChatDisabledByPlayer"(): boolean
set "chatDisabledByPlayerShown"(value: boolean)
set "nowPlaying"(value: $Component$$Type)
set "subtitle"(value: $Component$$Type)
set "title"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/client/gui/screens/worldselection/$WorldCreationContext$OptionsModifier" {
import { $Function, $Function$$Type } from "packages/java/util/function/$Function"
import { $UnaryOperator } from "packages/java/util/function/$UnaryOperator"
import { $WorldOptions, $WorldOptions$$Type } from "packages/net/minecraft/world/level/levelgen/$WorldOptions"

export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
"andThen"<V>(function0: $Function$$Type<$WorldOptions$$Type, V>): $Function<$WorldOptions, V>
"apply"(worldOptions0: $WorldOptions$$Type): $WorldOptions
"compose"<V>(function0: $Function$$Type<V, $WorldOptions>): $Function<V, $WorldOptions>
}

export namespace $WorldCreationContext$OptionsModifier {
function identity<T>(): $UnaryOperator<T>
}
export abstract class $WorldCreationContext$OptionsModifier$$Static implements $WorldCreationContext$OptionsModifier {
static "identity"<T>(): $UnaryOperator<T>
}
}

declare module "packages/net/minecraft/client/gui/components/events/$AbstractContainerEventHandler" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $ContainerEventHandler } from "packages/net/minecraft/client/gui/components/events/$ContainerEventHandler"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export class $AbstractContainerEventHandler implements $ContainerEventHandler {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getFocused"(): $GuiEventListener
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "isDragging"(): boolean
public "isFocused"(): boolean
public "isMouseOver"(double0: double, double1: double): boolean
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseClicked"(double0: double, double1: double, int2: integer): boolean
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "setDragging"(boolean0: boolean): void
public "setFocused"(guiEventListener0: $GuiEventListener$$Type): void
public "setFocused"(boolean0: boolean): void
get "currentFocusPath"(): $ComponentPath
get "focused"(): $GuiEventListener
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
get "dragging"(): boolean
get "focused"(): boolean
set "dragging"(value: boolean)
set "focused"(value: $GuiEventListener$$Type)
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/spectator/categories/$SpectatorPage" {
import { $List$$Type } from "packages/java/util/$List"
import { $SpectatorMenuItem, $SpectatorMenuItem$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuItem"

export class $SpectatorPage {
static readonly "NO_SELECTION": integer

constructor(list0: $List$$Type<$SpectatorMenuItem$$Type>, int1: integer)

public "getItem"(int0: integer): $SpectatorMenuItem
public "getSelectedSlot"(): integer
get "selectedSlot"(): integer
}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$ToastComponent" {
import { $Toast, $Toast$$Type } from "packages/net/minecraft/client/gui/components/toasts/$Toast"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $List } from "packages/java/util/$List"
import { $Class$$Type } from "packages/java/lang/$Class"
import { $Deque } from "packages/java/util/$Deque"
import { $ToastComponent$ToastInstance } from "packages/net/minecraft/client/gui/components/toasts/$ToastComponent$ToastInstance"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ToastComponent {
readonly "queued": $Deque<$Toast>
readonly "visible": $List<$ToastComponent$ToastInstance<any>>

constructor(minecraft0: $Minecraft$$Type)

public "addToast"(toast0: $Toast$$Type): void
public "clear"(): void
public "getMinecraft"(): $Minecraft
public "getNotificationDisplayTimeMultiplier"(): double
public "getToast"<T extends $Toast>(class0: $Class$$Type<T>, object1: any): T
public "render"(guiGraphics0: $GuiGraphics$$Type): void
get "minecraft"(): $Minecraft
get "notificationDisplayTimeMultiplier"(): double
}
}

declare module "packages/net/minecraft/client/gui/components/$ChatComponent" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $List } from "packages/java/util/$List"
import { $GuiMessageTag, $GuiMessageTag$$Type } from "packages/net/minecraft/client/$GuiMessageTag"
import { $ChatComponentAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$ChatComponentAccess"
import { $TrimmedMessagesAccessor } from "packages/io/sedu/mc/parties/accessors/$TrimmedMessagesAccessor"
import { $MessageSignature$$Type } from "packages/net/minecraft/network/chat/$MessageSignature"
import { $Style } from "packages/net/minecraft/network/chat/$Style"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $ChatComponent implements $ChatComponentAccess, $TrimmedMessagesAccessor {
constructor(minecraft0: $Minecraft$$Type)

public "addMessage"(component0: $Component$$Type): void
public "addMessage"(component0: $Component$$Type, messageSignature1: $MessageSignature$$Type, int2: integer, guiMessageTag3: $GuiMessageTag$$Type, boolean4: boolean): void
public "addMessage"(component0: $Component$$Type, messageSignature1: $MessageSignature$$Type, guiMessageTag2: $GuiMessageTag$$Type): void
public "addRecentChat"(string0: string): void
public "clearMessages"(boolean0: boolean): void
public "constant$cop000$placebo_unEscapeChatLogNewlines"(string0: string): string
public static "defaultUnfocusedPct"(): double
public "deleteMessage"(messageSignature0: $MessageSignature$$Type): void
public "getClickedComponentStyleAt"(double0: double, double1: double): $Style
public static "getHeight"(double0: double): integer
public "getHeight"(): integer
public "getLinesPerPage"(): integer
public "getMessageTagAt"(double0: double, double1: double): $GuiMessageTag
public "getRecentChat"(): $List<string>
public "getScale"(): double
public "getTrimmedMessages"(): $List<any>
public static "getWidth"(double0: double): integer
public "getWidth"(): integer
public "handleChatQueueClicked"(double0: double, double1: double): boolean
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer): void
public "rescaleChat"(): void
public "resetChatScroll"(): void
public "scrollChat"(int0: integer): void
public "tick"(): void
get "height"(): integer
get "linesPerPage"(): integer
get "recentChat"(): $List<string>
get "scale"(): double
get "trimmedMessages"(): $List<any>
get "width"(): integer
}
}

declare module "packages/net/minecraft/client/gui/spectator/$SpectatorMenu" {
import { $SpectatorMenuCategory, $SpectatorMenuCategory$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuCategory"
import { $List } from "packages/java/util/$List"
import { $SpectatorMenuListener$$Type } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuListener"
import { $SpectatorPage } from "packages/net/minecraft/client/gui/spectator/categories/$SpectatorPage"
import { $SpectatorMenuItem } from "packages/net/minecraft/client/gui/spectator/$SpectatorMenuItem"

export class $SpectatorMenu {
static readonly "EMPTY_SLOT": $SpectatorMenuItem

constructor(spectatorMenuListener0: $SpectatorMenuListener$$Type)

public "exit"(): void
public "getCurrentPage"(): $SpectatorPage
public "getItem"(int0: integer): $SpectatorMenuItem
public "getItems"(): $List<$SpectatorMenuItem>
public "getSelectedCategory"(): $SpectatorMenuCategory
public "getSelectedItem"(): $SpectatorMenuItem
public "getSelectedSlot"(): integer
public "selectCategory"(spectatorMenuCategory0: $SpectatorMenuCategory$$Type): void
public "selectSlot"(int0: integer): void
get "currentPage"(): $SpectatorPage
get "items"(): $List<$SpectatorMenuItem>
get "selectedCategory"(): $SpectatorMenuCategory
get "selectedItem"(): $SpectatorMenuItem
get "selectedSlot"(): integer
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority" {
import { $Enum } from "packages/java/lang/$Enum"

export class $NarratableEntry$NarrationPriority extends $Enum<$NarratableEntry$NarrationPriority> {
static readonly "FOCUSED": $NarratableEntry$NarrationPriority
static readonly "HOVERED": $NarratableEntry$NarrationPriority
static readonly "NONE": $NarratableEntry$NarrationPriority

public "isTerminal"(): boolean
public static "valueOf"(string0: string): $NarratableEntry$NarrationPriority
public static "values"(): $NarratableEntry$NarrationPriority[]
get "terminal"(): boolean
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarrationSupplier" {
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export interface $NarrationSupplier {
"updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
}

export namespace $NarrationSupplier {
const probejs$$marker: never
}
export abstract class $NarrationSupplier$$Static implements $NarrationSupplier {
}
}

declare module "packages/net/minecraft/client/gui/components/$BossHealthOverlay" {
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientboundBossEventPacket$$Type } from "packages/net/minecraft/network/protocol/game/$ClientboundBossEventPacket"

export class $BossHealthOverlay {
constructor(minecraft0: $Minecraft$$Type)

public "render"(guiGraphics0: $GuiGraphics$$Type): void
public "reset"(): void
public "shouldCreateWorldFog"(): boolean
public "shouldDarkenScreen"(): boolean
public "shouldPlayMusic"(): boolean
public "update"(clientboundBossEventPacket0: $ClientboundBossEventPacket$$Type): void
}
}

declare module "packages/net/minecraft/client/gui/components/$PlayerTabOverlay" {
import { $Gui$$Type } from "packages/net/minecraft/client/gui/$Gui"
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $Objective$$Type } from "packages/net/minecraft/world/scores/$Objective"
import { $Scoreboard$$Type } from "packages/net/minecraft/world/scores/$Scoreboard"
import { $PlayerInfo$$Type } from "packages/net/minecraft/client/multiplayer/$PlayerInfo"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $PlayerTabOverlay {
static readonly "HEART_EMPTY_CONTAINER": integer
static readonly "HEART_EMPTY_CONTAINER_BLINKING": integer
static readonly "HEART_FULL": integer
static readonly "HEART_GHOST_FULL": integer
static readonly "HEART_GHOST_HALF_FULL": integer
static readonly "HEART_GOLDEN_FULL": integer
static readonly "HEART_GOLDEN_HALF_FULL": integer
static readonly "HEART_HALF_FULL": integer
static readonly "MAX_ROWS_PER_COL": integer

constructor(minecraft0: $Minecraft$$Type, gui1: $Gui$$Type)

public "getNameForDisplay"(playerInfo0: $PlayerInfo$$Type): $Component
public "redirect$edb000$renderPingIcon"(playerTabOverlay0: $PlayerTabOverlay$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, playerInfo5: $PlayerInfo$$Type): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, scoreboard2: $Scoreboard$$Type, objective3: $Objective$$Type): void
public "renderPingIcon"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, playerInfo4: $PlayerInfo$$Type): void
public "reset"(): void
public "setFooter"(component0: $Component$$Type): void
public "setHeader"(component0: $Component$$Type): void
public "setVisible"(boolean0: boolean): void
get "visible"(): boolean
set "visible"(value: boolean)
set "footer"(value: $Component$$Type)
set "header"(value: $Component$$Type)
}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$TutorialToast$Icons" {
import { $Enum } from "packages/java/lang/$Enum"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
static readonly "MOUSE": $TutorialToast$Icons
static readonly "MOVEMENT_KEYS": $TutorialToast$Icons
static readonly "RECIPE_BOOK": $TutorialToast$Icons
static readonly "RIGHT_CLICK": $TutorialToast$Icons
static readonly "SOCIAL_INTERACTIONS": $TutorialToast$Icons
static readonly "TREE": $TutorialToast$Icons
static readonly "WOODEN_PLANKS": $TutorialToast$Icons

public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer): void
public static "valueOf"(string0: string): $TutorialToast$Icons
public static "values"(): $TutorialToast$Icons[]
}
}

declare module "packages/net/minecraft/client/gui/components/$CycleButton$OnValueChange" {
import { $CycleButton$$Type } from "packages/net/minecraft/client/gui/components/$CycleButton"

export interface $CycleButton$OnValueChange<T> {
"onValueChange"(cycleButton0: $CycleButton$$Type<T>, t1: T): void
}

export namespace $CycleButton$OnValueChange {
const probejs$$marker: never
}
export abstract class $CycleButton$OnValueChange$$Static<T> implements $CycleButton$OnValueChange<T> {
}
}

declare module "packages/net/minecraft/client/gui/screens/$OptionsScreen" {
import { $Options$$Type } from "packages/net/minecraft/client/$Options"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $CycleButton } from "packages/net/minecraft/client/gui/components/$CycleButton"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $Difficulty } from "packages/net/minecraft/world/$Difficulty"
import { $Optional } from "packages/java/util/$Optional"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"

export class $OptionsScreen extends $Screen {
constructor(screen0: $Screen$$Type, options1: $Options$$Type)

public "charTyped"(char0: character, int1: integer): boolean
public static "createDifficultyButton"(int0: integer, int1: integer, string2: string, minecraft3: $Minecraft$$Type): $CycleButton<$Difficulty>
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getTabOrderGroup"(): integer
public "isFocused"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
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

declare module "packages/net/minecraft/client/gui/components/$Button" {
import { $ButtonAccessor } from "packages/net/mehvahdjukaar/moonlight/core/mixins/forge/$ButtonAccessor"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Button$Builder } from "packages/net/minecraft/client/gui/components/$Button$Builder"
import { $AbstractButton } from "packages/net/minecraft/client/gui/components/$AbstractButton"
import { $Button$OnPress, $Button$OnPress$$Type } from "packages/net/minecraft/client/gui/components/$Button$OnPress"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $Button extends $AbstractButton implements $ButtonAccessor {
static readonly "DEFAULT_HEIGHT": integer
static readonly "DEFAULT_WIDTH": integer
static readonly "SMALL_WIDTH": integer

public static "builder"(component0: $Component$$Type, onPress1: $Button$OnPress$$Type): $Button$Builder
public "charTyped"(char0: character, int1: integer): boolean
public "getCurrentFocusPath"(): $ComponentPath
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "setPosition"(int0: integer, int1: integer): void
public "updateWidgetNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "onPress"(): $Button$OnPress
set "onPress"(value: $Button$OnPress$$Type)
get "currentFocusPath"(): $ComponentPath
}
}

declare module "packages/net/minecraft/client/gui/font/$FontManager" {
import { $PreparableReloadListener } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import { $CompletableFuture } from "packages/java/util/concurrent/$CompletableFuture"
import { $Executor$$Type } from "packages/java/util/concurrent/$Executor"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ProfilerFiller$$Type } from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import { $TextureManager$$Type } from "packages/net/minecraft/client/renderer/texture/$TextureManager"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $FontResourceManagerAccess } from "packages/blusunrize/immersiveengineering/mixin/accessors/client/$FontResourceManagerAccess"
import { $ResourceManager$$Type } from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import { $FontSet, $FontSet$$Type } from "packages/net/minecraft/client/gui/font/$FontSet"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $FontResourceManagerAccess {
static readonly "MISSING_FONT": $ResourceLocation

constructor(textureManager0: $TextureManager$$Type)

public "close"(): void
public "createFont"(): $Font
public "createFontFilterFishy"(): $Font
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "setRenames"(map0: $Map$$Type<$ResourceLocation$$Type, $ResourceLocation$$Type>): void
get "fontSets"(): $Map<$ResourceLocation, $FontSet>
set "fontSets"(value: $Map$$Type<$ResourceLocation$$Type, $FontSet$$Type>)
get "missingFontSet"(): $FontSet
set "missingFontSet"(value: $FontSet$$Type)
get "name"(): string
set "renames"(value: $Map$$Type<$ResourceLocation$$Type, $ResourceLocation$$Type>)
}
}

declare module "packages/net/minecraft/client/gui/screens/controls/$KeyBindsList$Entry" {
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $ContainerObjectSelectionList$Entry } from "packages/net/minecraft/client/gui/components/$ContainerObjectSelectionList$Entry"
import { $List } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export class $KeyBindsList$Entry extends $ContainerObjectSelectionList$Entry<$KeyBindsList$Entry> {
constructor()

public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseReleased"(double0: double, double1: double, int2: integer): boolean
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
}

declare module "packages/net/minecraft/client/gui/components/$CycleButton" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $BooleanSupplier } from "packages/java/util/function/$BooleanSupplier"
import { $AbstractButton } from "packages/net/minecraft/client/gui/components/$AbstractButton"
import { $MutableComponent } from "packages/net/minecraft/network/chat/$MutableComponent"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $IXaeroClickableWidget } from "packages/xaero/common/gui/$IXaeroClickableWidget"
import { $IXaeroClickableWidget as $IXaeroClickableWidget$0 } from "packages/xaero/map/gui/$IXaeroClickableWidget"
import { $CycleButton$OnValueChange } from "packages/net/minecraft/client/gui/components/$CycleButton$OnValueChange"
import { $CycleButton$Builder } from "packages/net/minecraft/client/gui/components/$CycleButton$Builder"
import { $Supplier, $Supplier$$Type } from "packages/java/util/function/$Supplier"

export class $CycleButton<T> extends $AbstractButton implements $IXaeroClickableWidget, $IXaeroClickableWidget$0 {
static readonly "DEFAULT_ALT_LIST_SELECTOR": $BooleanSupplier
readonly "onValueChange": $CycleButton$OnValueChange<T>

public static "booleanBuilder"(component0: $Component$$Type, component1: $Component$$Type): $CycleButton$Builder<boolean>
public static "builder"<T>(function0: $Function$$Type<T, $Component>): $CycleButton$Builder<T>
public "charTyped"(char0: character, int1: integer): boolean
public "createDefaultNarrationMessage"(): $MutableComponent
public "getCurrentFocusPath"(): $ComponentPath
public "getValue"(): T
public "getXaero_tooltip"(): $Supplier<any>
public "getXaero_wm_tooltip"(): $Supplier<any>
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public static "onOffBuilder"(boolean0: boolean): $CycleButton$Builder<boolean>
public static "onOffBuilder"(): $CycleButton$Builder<boolean>
public "setPosition"(int0: integer, int1: integer): void
public "setValue"(t0: T): void
public "setXaero_tooltip"(supplier0: $Supplier$$Type<any>): void
public "setXaero_wm_tooltip"(supplier0: $Supplier$$Type<any>): void
public "updateWidgetNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "currentFocusPath"(): $ComponentPath
get "value"(): T
get "xaero_tooltip"(): $Supplier<any>
get "xaero_wm_tooltip"(): $Supplier<any>
set "value"(value: T)
set "xaero_tooltip"(value: $Supplier$$Type<any>)
set "xaero_wm_tooltip"(value: $Supplier$$Type<any>)
}
}

declare module "packages/net/minecraft/client/gui/components/$EditBox" {
import { $FormattedCharSequence } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $AbstractWidget } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Predicate$$Type } from "packages/java/util/function/$Predicate"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $AccessEditBox } from "packages/com/blamejared/searchables/mixin/$AccessEditBox"
import { $Consumer, $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"

export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox {
static readonly "BACKWARDS": integer
static readonly "DEFAULT_TEXT_COLOR": integer
static readonly "FORWARDS": integer

constructor(font0: $Font$$Type, int1: integer, int2: integer, int3: integer, int4: integer, component5: $Component$$Type)
constructor(font0: $Font$$Type, int1: integer, int2: integer, int3: integer, int4: integer, editBox5: $EditBox$$Type, component6: $Component$$Type)

public "canConsumeInput"(): boolean
public "deleteChars"(int0: integer): void
public "deleteWords"(int0: integer): void
public "getCurrentFocusPath"(): $ComponentPath
public "getCursorPosition"(): integer
public "getHighlighted"(): string
public "getInnerWidth"(): integer
public "getScreenX"(int0: integer): integer
public "getValue"(): string
public "getWordPosition"(int0: integer): integer
public "insertText"(string0: string): void
public "isBordered"(): boolean
public "isEditable"(): boolean
public "isVisible"(): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "moveCursor"(int0: integer): void
public "moveCursorTo"(int0: integer): void
public "moveCursorToEnd"(): void
public "moveCursorToStart"(): void
public "render"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "renderWidget"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, float3: float): void
public "setBordered"(boolean0: boolean): void
public "setCanLoseFocus"(boolean0: boolean): void
public "setCursorPosition"(int0: integer): void
public "setEditable"(boolean0: boolean): void
public "setFilter"(predicate0: $Predicate$$Type<string>): void
public "setFormatter"(biFunction0: $BiFunction$$Type<string, integer, $FormattedCharSequence>): void
public "setHighlightPos"(int0: integer): void
public "setHint"(component0: $Component$$Type): void
public "setMaxLength"(int0: integer): void
public "setPosition"(int0: integer, int1: integer): void
public "setResponder"(consumer0: $Consumer$$Type<string>): void
public "setSuggestion"(string0: string): void
public "setTextColor"(int0: integer): void
public "setTextColorUneditable"(int0: integer): void
public "setValue"(string0: string): void
public "setVisible"(boolean0: boolean): void
public "tick"(): void
public "updateWidgetNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "canLoseFocus"(): boolean
set "canLoseFocus"(value: boolean)
get "responder"(): $Consumer<string>
set "responder"(value: $Consumer$$Type<string>)
get "textColor"(): integer
set "textColor"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "cursorPosition"(): integer
get "highlighted"(): string
get "innerWidth"(): integer
get "value"(): string
get "bordered"(): boolean
get "editable"(): boolean
get "visible"(): boolean
set "bordered"(value: boolean)
set "cursorPosition"(value: integer)
set "editable"(value: boolean)
set "filter"(value: $Predicate$$Type<string>)
set "formatter"(value: $BiFunction$$Type<string, integer, $FormattedCharSequence>)
set "highlightPos"(value: integer)
set "hint"(value: $Component$$Type)
set "maxLength"(value: integer)
set "suggestion"(value: string)
set "textColorUneditable"(value: integer)
set "value"(value: string)
set "visible"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/layouts/$LayoutElement" {
import { $AbstractWidget$$Type } from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $LayoutElement {
"getHeight"(): integer
"getRectangle"(): $ScreenRectangle
"getWidth"(): integer
"getX"(): integer
"getY"(): integer
"setPosition"(int0: integer, int1: integer): void
"setX"(int0: integer): void
"setY"(int0: integer): void
"visitWidgets"(consumer0: $Consumer$$Type<$AbstractWidget$$Type>): void
get "height"(): integer
get "rectangle"(): $ScreenRectangle
get "width"(): integer
get "x"(): integer
get "y"(): integer
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $LayoutElement {
const probejs$$marker: never
}
export abstract class $LayoutElement$$Static implements $LayoutElement {
}
}

declare module "packages/net/minecraft/client/gui/narration/$NarratableEntry" {
import { $TabOrderedElement } from "packages/net/minecraft/client/gui/components/$TabOrderedElement"
import { $NarrationSupplier } from "packages/net/minecraft/client/gui/narration/$NarrationSupplier"
import { $NarratableEntry$NarrationPriority } from "packages/net/minecraft/client/gui/narration/$NarratableEntry$NarrationPriority"
import { $NarrationElementOutput$$Type } from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export interface $NarratableEntry extends $TabOrderedElement, $NarrationSupplier {
"getTabOrderGroup"(): integer
"isActive"(): boolean
"narrationPriority"(): $NarratableEntry$NarrationPriority
"updateNarration"(narrationElementOutput0: $NarrationElementOutput$$Type): void
get "tabOrderGroup"(): integer
get "active"(): boolean
}

export namespace $NarratableEntry {
const probejs$$marker: never
}
export abstract class $NarratableEntry$$Static implements $NarratableEntry {
}
}

declare module "packages/net/minecraft/client/gui/navigation/$ScreenRectangle" {
import { $ScreenAxis$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenAxis"
import { $Record } from "packages/java/lang/$Record"
import { $ScreenPosition, $ScreenPosition$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import { $ScreenDirection$$Type } from "packages/net/minecraft/client/gui/navigation/$ScreenDirection"

export class $ScreenRectangle extends $Record {
constructor(int0: integer, int1: integer, int2: integer, int3: integer)
constructor(screenPosition0: $ScreenPosition$$Type, int1: integer, int2: integer)

public "bottom"(): integer
public static "empty"(): $ScreenRectangle
public "getBorder"(screenDirection0: $ScreenDirection$$Type): $ScreenRectangle
public "getBoundInDirection"(screenDirection0: $ScreenDirection$$Type): integer
public "getCenterInAxis"(screenAxis0: $ScreenAxis$$Type): integer
public "getLength"(screenAxis0: $ScreenAxis$$Type): integer
public "height"(): integer
public "intersection"(screenRectangle0: $ScreenRectangle$$Type): $ScreenRectangle
public "left"(): integer
public static "of"(screenAxis0: $ScreenAxis$$Type, int1: integer, int2: integer, int3: integer, int4: integer): $ScreenRectangle
public "overlaps"(screenRectangle0: $ScreenRectangle$$Type): boolean
public "overlapsInAxis"(screenRectangle0: $ScreenRectangle$$Type, screenAxis1: $ScreenAxis$$Type): boolean
public "position"(): $ScreenPosition
public "right"(): integer
public "step"(screenDirection0: $ScreenDirection$$Type): $ScreenRectangle
public "top"(): integer
public "width"(): integer
}
}

declare module "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen" {
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $AbstractContainerScreenAccessor } from "packages/yalter/mousetweaks/mixin/$AbstractContainerScreenAccessor"
import { $FocusNavigationEvent$$Type } from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import { $DrawsOnLeft } from "packages/dev/shadowsoffire/apotheosis/util/$DrawsOnLeft"
import { $Slot, $Slot$$Type } from "packages/net/minecraft/world/inventory/$Slot"
import { $Screen } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $AbstractContainerScreenExtension } from "packages/earth/terrarium/adastra/client/screens/base/$AbstractContainerScreenExtension"
import { $CallbackInfoReturnable$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ClickType$$Type } from "packages/net/minecraft/world/inventory/$ClickType"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $List$$Type } from "packages/java/util/$List"
import { $Optional } from "packages/java/util/$Optional"
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$0 } from "packages/vazkii/botania/mixin/client/$AbstractContainerScreenAccessor"
import { $AbstractContainerScreenAccessor as $AbstractContainerScreenAccessor$1 } from "packages/net/blay09/mods/balm/mixin/$AbstractContainerScreenAccessor"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import { $Inventory$$Type } from "packages/net/minecraft/world/entity/player/$Inventory"
import { $MenuAccess } from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

export class $AbstractContainerScreen<T extends $AbstractContainerMenu> extends $Screen implements $MenuAccess<T>, $DrawsOnLeft, $AbstractContainerScreenAccessor$1, $AbstractContainerScreenAccessor$0, $AbstractContainerScreenAccessor, $AbstractContainerScreenExtension {
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer

constructor(t0: T, inventory1: $Inventory$$Type, component2: $Component$$Type)

public "adastra$renderPreSlot"(graphics: $GuiGraphics$$Type, slot: $Slot$$Type): void
public "charTyped"(char0: character, int1: integer): boolean
public "clearDraggingState"(): void
public static "draw"(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, list2: $List$$Type<$Component$$Type>, int3: integer): void
public "drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer): void
public "drawOnLeft"(guiGraphics0: $GuiGraphics$$Type, list1: $List$$Type<$Component$$Type>, int2: integer, int3: integer): void
public "findSlot"(double0: double, double1: double): $Slot
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getGuiLeft"(): integer
public "getGuiTop"(): integer
public "getMenu"(): T
public "getSlotColor"(int0: integer): integer
public "getSlotUnderMouse"(): $Slot
public "getTabOrderGroup"(): integer
public "getXSize"(): integer
public "getYSize"(): integer
public "handler$bbk000$renderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "handler$bkf000$apoth_superMouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double, callbackInfoReturnable5: $CallbackInfoReturnable$$Type<any>): void
public "handler$ebn001$renderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "isFocused"(): boolean
public "isHovering"(int0: integer, int1: integer, int2: integer, int3: integer, double4: double, double5: double): boolean
public "isHovering"(slot0: $Slot$$Type, double1: double, double2: double): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
public "nextFocusPath"(focusNavigationEvent0: $FocusNavigationEvent$$Type): $ComponentPath
public "recalculateQuickCraftRemaining"(): void
public "renderFloatingItem"(guiGraphics0: $GuiGraphics$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, string4: string): void
public "renderSlot"(guiGraphics0: $GuiGraphics$$Type, slot1: $Slot$$Type): void
public static "renderSlotHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer): void
public static "renderSlotHighlight"(guiGraphics0: $GuiGraphics$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
public "setFocused"(boolean0: boolean): void
public "slotClicked"(slot0: $Slot$$Type, int1: integer, int2: integer, clickType3: $ClickType$$Type): void
public "ths"(): $AbstractContainerScreen<any>
get "clickedSlot"(): $Slot
set "clickedSlot"(value: $Slot$$Type)
get "doubleclick"(): boolean
set "doubleclick"(value: boolean)
get "draggingItem"(): $ItemStack
set "draggingItem"(value: $ItemStack$$Type)
get "hoveredSlot"(): $Slot
set "hoveredSlot"(value: $Slot$$Type)
get "imageHeight"(): integer
set "imageHeight"(value: integer)
get "imageWidth"(): integer
set "imageWidth"(value: integer)
get "isSplittingStack"(): boolean
set "isSplittingStack"(value: boolean)
get "lastClickButton"(): integer
set "lastClickButton"(value: integer)
get "lastClickSlot"(): $Slot
set "lastClickSlot"(value: $Slot$$Type)
get "lastClickTime"(): long
set "lastClickTime"(value: long)
get "lastQuickMoved"(): $ItemStack
set "lastQuickMoved"(value: $ItemStack$$Type)
get "leftPos"(): integer
set "leftPos"(value: integer)
get "quickCraftingButton"(): integer
set "quickCraftingButton"(value: integer)
get "quickCraftingRemainder"(): integer
set "quickCraftingRemainder"(value: integer)
get "quickCraftingType"(): integer
set "quickCraftingType"(value: integer)
get "quickdropSlot"(): $Slot
set "quickdropSlot"(value: $Slot$$Type)
get "quickdropTime"(): long
set "quickdropTime"(value: long)
get "skipNextRelease"(): boolean
set "skipNextRelease"(value: boolean)
get "snapbackEnd"(): $Slot
set "snapbackEnd"(value: $Slot$$Type)
get "snapbackItem"(): $ItemStack
set "snapbackItem"(value: $ItemStack$$Type)
get "snapbackStartX"(): integer
set "snapbackStartX"(value: integer)
get "snapbackStartY"(): integer
set "snapbackStartY"(value: integer)
get "snapbackTime"(): long
set "snapbackTime"(value: long)
get "topPos"(): integer
set "topPos"(value: integer)
get "currentFocusPath"(): $ComponentPath
get "guiLeft"(): integer
get "guiTop"(): integer
get "menu"(): T
get "slotUnderMouse"(): $Slot
get "tabOrderGroup"(): integer
get "xSize"(): integer
get "ySize"(): integer
get "focused"(): boolean
set "focused"(value: boolean)
}
}

declare module "packages/net/minecraft/client/gui/navigation/$ScreenAxis" {
import { $Enum } from "packages/java/lang/$Enum"
import { $ScreenDirection } from "packages/net/minecraft/client/gui/navigation/$ScreenDirection"

export class $ScreenAxis extends $Enum<$ScreenAxis> {
static readonly "HORIZONTAL": $ScreenAxis
static readonly "VERTICAL": $ScreenAxis

public "getDirection"(boolean0: boolean): $ScreenDirection
public "getNegative"(): $ScreenDirection
public "getPositive"(): $ScreenDirection
public "orthogonal"(): $ScreenAxis
public static "valueOf"(string0: string): $ScreenAxis
public static "values"(): $ScreenAxis[]
get "negative"(): $ScreenDirection
get "positive"(): $ScreenDirection
}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$Toast$Visibility" {
import { $Enum } from "packages/java/lang/$Enum"
import { $SoundManager$$Type } from "packages/net/minecraft/client/sounds/$SoundManager"

export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
static readonly "HIDE": $Toast$Visibility
static readonly "SHOW": $Toast$Visibility

public "playSound"(soundManager0: $SoundManager$$Type): void
public static "valueOf"(string0: string): $Toast$Visibility
public static "values"(): $Toast$Visibility[]
}
}

declare module "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph$Effect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BakedGlyph$Effect {
constructor(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float)

}
}

declare module "packages/net/minecraft/client/gui/components/toasts/$Toast" {
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation"
import { $ToastComponent$$Type } from "packages/net/minecraft/client/gui/components/toasts/$ToastComponent"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $Toast$Visibility } from "packages/net/minecraft/client/gui/components/toasts/$Toast$Visibility"

export interface $Toast {
"getToken"(): any
"height"(): integer
"render"(guiGraphics0: $GuiGraphics$$Type, toastComponent1: $ToastComponent$$Type, long2: long): $Toast$Visibility
"slotCount"(): integer
"width"(): integer
get "token"(): any
}

export namespace $Toast {
const NO_TOKEN: any
const SLOT_HEIGHT: integer
const TEXTURE: $ResourceLocation
}
export abstract class $Toast$$Static implements $Toast {
static readonly "NO_TOKEN": any
static readonly "SLOT_HEIGHT": integer
static readonly "TEXTURE": $ResourceLocation

}
}

declare module "packages/net/minecraft/client/gui/components/$Button$OnPress" {
import { $Button$$Type } from "packages/net/minecraft/client/gui/components/$Button"

export interface $Button$OnPress {
"onPress"(button0: $Button$$Type): void
}

export namespace $Button$OnPress {
const probejs$$marker: never
}
export abstract class $Button$OnPress$$Static implements $Button$OnPress {
}
}

