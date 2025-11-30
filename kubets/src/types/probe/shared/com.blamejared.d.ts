declare module "packages/com/blamejared/controlling/api/events/$IKeyEntryMouseClickedEvent" {
import { $NewKeyBindsList$KeyEntry } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"

export interface $IKeyEntryMouseClickedEvent {
"getButtonId"(): integer
"getEntry"(): $NewKeyBindsList$KeyEntry
"getMouseX"(): double
"getMouseY"(): double
"isHandled"(): boolean
"setHandled"(boolean0: boolean): void
get "buttonId"(): integer
get "entry"(): $NewKeyBindsList$KeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
}

export namespace $IKeyEntryMouseClickedEvent {
const probejs$$marker: never
}
export abstract class $IKeyEntryMouseClickedEvent$$Static implements $IKeyEntryMouseClickedEvent {
}
}

declare module "packages/com/blamejared/clumps/helper/$IClumpedOrb" {
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export interface $IClumpedOrb {
"clumps$getClumpedMap"(): $Map<integer, integer>
"clumps$resolve"(): boolean
"clumps$setClumpedMap"(map0: $Map$$Type<integer, integer>): void
}

export namespace $IClumpedOrb {
const probejs$$marker: never
}
export abstract class $IClumpedOrb$$Static implements $IClumpedOrb {
}
}

declare module "packages/com/blamejared/controlling/mixin/$AccessInputConstantsKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessInputConstantsKey {
}

export namespace $AccessInputConstantsKey {
const probejs$$marker: never
}
export abstract class $AccessInputConstantsKey$$Static implements $AccessInputConstantsKey {
}
}

declare module "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry" {
import { $KeyMapping } from "packages/net/minecraft/client/$KeyMapping"
import { $Component } from "packages/net/minecraft/network/chat/$Component"
import { $GuiEventListener, $GuiEventListener$$Type } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $ComponentPath } from "packages/net/minecraft/client/gui/$ComponentPath"
import { $Button } from "packages/net/minecraft/client/gui/components/$Button"
import { $List } from "packages/java/util/$List"
import { $KeyBindsList$Entry } from "packages/net/minecraft/client/gui/screens/controls/$KeyBindsList$Entry"
import { $Optional } from "packages/java/util/$Optional"
import { $ScreenRectangle } from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export class $NewKeyBindsList$KeyEntry extends $KeyBindsList$Entry {
public "categoryName"(): $Component
public "charTyped"(char0: character, int1: integer): boolean
public "children"(): $List<$GuiEventListener>
public "getBtnChangeKeyBinding"(): $Button
public "getBtnResetKeyBinding"(): $Button
public "getChildAt"(double0: double, double1: double): $Optional<$GuiEventListener>
public "getCurrentFocusPath"(): $ComponentPath
public "getKey"(): $KeyMapping
public "getKeyDesc"(): $Component
public "getRectangle"(): $ScreenRectangle
public "getTabOrderGroup"(): integer
public "keyPressed"(int0: integer, int1: integer, int2: integer): boolean
public "keyReleased"(int0: integer, int1: integer, int2: integer): boolean
public "magicalSpecialHackyFocus"(guiEventListener0: $GuiEventListener$$Type): void
public "mouseDragged"(double0: double, double1: double, int2: integer, double3: double, double4: double): boolean
public "mouseMoved"(double0: double, double1: double): void
public "mouseScrolled"(double0: double, double1: double, double2: double): boolean
get "btnChangeKeyBinding"(): $Button
get "btnResetKeyBinding"(): $Button
get "currentFocusPath"(): $ComponentPath
get "key"(): $KeyMapping
get "keyDesc"(): $Component
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}
}

declare module "packages/com/blamejared/searchables/mixin/$AccessEditBox" {
import { $Consumer } from "packages/java/util/function/$Consumer"
import { $Predicate } from "packages/java/util/function/$Predicate"

export interface $AccessEditBox {
"searchables$getFilter"(): $Predicate<string>
"searchables$getResponder"(): $Consumer<string>
}

export namespace $AccessEditBox {
const probejs$$marker: never
}
export abstract class $AccessEditBox$$Static implements $AccessEditBox {
}
}

declare module "packages/com/blamejared/controlling/api/events/$IKeyEntryMouseReleasedEvent" {
import { $NewKeyBindsList$KeyEntry } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"

export interface $IKeyEntryMouseReleasedEvent {
"getButtonId"(): integer
"getEntry"(): $NewKeyBindsList$KeyEntry
"getMouseX"(): double
"getMouseY"(): double
"isHandled"(): boolean
"setHandled"(boolean0: boolean): void
get "buttonId"(): integer
get "entry"(): $NewKeyBindsList$KeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
}

export namespace $IKeyEntryMouseReleasedEvent {
const probejs$$marker: never
}
export abstract class $IKeyEntryMouseReleasedEvent$$Static implements $IKeyEntryMouseReleasedEvent {
}
}

declare module "packages/com/blamejared/controlling/api/events/$IKeyEntryRenderEvent" {
import { $NewKeyBindsList$KeyEntry } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $GuiGraphics } from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IKeyEntryRenderEvent {
"getEntry"(): $NewKeyBindsList$KeyEntry
"getGuiGraphics"(): $GuiGraphics
"getMouseX"(): integer
"getMouseY"(): integer
"getPartialTicks"(): float
"getRowLeft"(): integer
"getRowWidth"(): integer
"getSlotIndex"(): integer
"getX"(): integer
"getY"(): integer
"isHovered"(): boolean
get "entry"(): $NewKeyBindsList$KeyEntry
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
get "rowLeft"(): integer
get "rowWidth"(): integer
get "slotIndex"(): integer
get "x"(): integer
get "y"(): integer
get "hovered"(): boolean
}

export namespace $IKeyEntryRenderEvent {
const probejs$$marker: never
}
export abstract class $IKeyEntryRenderEvent$$Static implements $IKeyEntryRenderEvent {
}
}

declare module "packages/com/blamejared/controlling/api/events/$IKeyEntryListenersEvent" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $NewKeyBindsList$KeyEntry } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $List } from "packages/java/util/$List"

export interface $IKeyEntryListenersEvent {
"getEntry"(): $NewKeyBindsList$KeyEntry
"getListeners"(): $List<$GuiEventListener>
get "entry"(): $NewKeyBindsList$KeyEntry
get "listeners"(): $List<$GuiEventListener>
}

export namespace $IKeyEntryListenersEvent {
const probejs$$marker: never
}
export abstract class $IKeyEntryListenersEvent$$Static implements $IKeyEntryListenersEvent {
}
}

declare module "packages/com/blamejared/clumps/api/events/$RepairEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IRepairEvent } from "packages/com/blamejared/clumps/api/events/$IRepairEvent"

export class $RepairEvent extends $Event implements $IRepairEvent {
constructor(player0: $Player$$Type, int1: integer)
constructor()

public "getPlayer"(): $Player
public "getValue"(): integer
public "setValue"(int0: integer): void
get "player"(): $Player
get "value"(): integer
set "value"(value: integer)
}
}

declare module "packages/com/blamejared/controlling/api/events/$KeyEntryRenderEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NewKeyBindsList$KeyEntry, $NewKeyBindsList$KeyEntry$$Type } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $IKeyEntryRenderEvent } from "packages/com/blamejared/controlling/api/events/$IKeyEntryRenderEvent"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
constructor()
constructor(keyEntry0: $NewKeyBindsList$KeyEntry$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer, boolean9: boolean, float10: float)

public "getEntry"(): $NewKeyBindsList$KeyEntry
public "getGuiGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPartialTicks"(): float
public "getRowLeft"(): integer
public "getRowWidth"(): integer
public "getSlotIndex"(): integer
public "getX"(): integer
public "getY"(): integer
public "isHovered"(): boolean
get "entry"(): $NewKeyBindsList$KeyEntry
get "guiGraphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
get "rowLeft"(): integer
get "rowWidth"(): integer
get "slotIndex"(): integer
get "x"(): integer
get "y"(): integer
get "hovered"(): boolean
}
}

declare module "packages/com/blamejared/clumps/api/events/$ValueEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Player, $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $IValueEvent } from "packages/com/blamejared/clumps/api/events/$IValueEvent"

export class $ValueEvent extends $Event implements $IValueEvent {
constructor(player0: $Player$$Type, int1: integer)
constructor()

public "getPlayer"(): $Player
public "getValue"(): integer
public "setValue"(int0: integer): void
get "player"(): $Player
get "value"(): integer
set "value"(value: integer)
}
}

declare module "packages/com/blamejared/controlling/mixin/$AccessKeyMapping" {
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $AccessKeyMapping {
"controlling$getKey"(): $InputConstants$Key
}

export namespace $AccessKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessKeyMapping$$Static implements $AccessKeyMapping {
}
}

declare module "packages/com/blamejared/controlling/api/events/$KeyEntryMouseReleasedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NewKeyBindsList$KeyEntry, $NewKeyBindsList$KeyEntry$$Type } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $IKeyEntryMouseReleasedEvent } from "packages/com/blamejared/controlling/api/events/$IKeyEntryMouseReleasedEvent"

export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
constructor()
constructor(keyEntry0: $NewKeyBindsList$KeyEntry$$Type, double1: double, double2: double, int3: integer)

public "getButtonId"(): integer
public "getEntry"(): $NewKeyBindsList$KeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
public "isHandled"(): boolean
public "setHandled"(boolean0: boolean): void
get "buttonId"(): integer
get "entry"(): $NewKeyBindsList$KeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
}
}

declare module "packages/com/blamejared/clumps/api/events/$IRepairEvent" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IRepairEvent {
"getPlayer"(): $Player
"getValue"(): integer
"setValue"(int0: integer): void
get "player"(): $Player
get "value"(): integer
set "value"(value: integer)
}

export namespace $IRepairEvent {
const probejs$$marker: never
}
export abstract class $IRepairEvent$$Static implements $IRepairEvent {
}
}

declare module "packages/com/blamejared/clumps/api/events/$IValueEvent" {
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"

export interface $IValueEvent {
"getPlayer"(): $Player
"getValue"(): integer
"setValue"(int0: integer): void
get "player"(): $Player
get "value"(): integer
set "value"(value: integer)
}

export namespace $IValueEvent {
const probejs$$marker: never
}
export abstract class $IValueEvent$$Static implements $IValueEvent {
}
}

declare module "packages/com/blamejared/controlling/mixin/$AccessScreen" {
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $List } from "packages/java/util/$List"

export interface $AccessScreen {
"controlling$getRenderables"(): $List<$Renderable>
}

export namespace $AccessScreen {
const probejs$$marker: never
}
export abstract class $AccessScreen$$Static implements $AccessScreen {
}
}

declare module "packages/com/blamejared/clumps/mixin/$ExperienceOrbAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccess {
"clumps$getAge"(): integer
"clumps$setAge"(int0: integer): void
"clumps$setCount"(int0: integer): void
}

export namespace $ExperienceOrbAccess {
const probejs$$marker: never
}
export abstract class $ExperienceOrbAccess$$Static implements $ExperienceOrbAccess {
}
}

declare module "packages/com/blamejared/controlling/api/events/$KeyEntryMouseClickedEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NewKeyBindsList$KeyEntry, $NewKeyBindsList$KeyEntry$$Type } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $IKeyEntryMouseClickedEvent } from "packages/com/blamejared/controlling/api/events/$IKeyEntryMouseClickedEvent"

export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
constructor()
constructor(keyEntry0: $NewKeyBindsList$KeyEntry$$Type, double1: double, double2: double, int3: integer)

public "getButtonId"(): integer
public "getEntry"(): $NewKeyBindsList$KeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
public "isHandled"(): boolean
public "setHandled"(boolean0: boolean): void
get "buttonId"(): integer
get "entry"(): $NewKeyBindsList$KeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
}
}

declare module "packages/com/blamejared/controlling/api/events/$KeyEntryListenersEvent" {
import { $GuiEventListener } from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $NewKeyBindsList$KeyEntry, $NewKeyBindsList$KeyEntry$$Type } from "packages/com/blamejared/controlling/client/$NewKeyBindsList$KeyEntry"
import { $List } from "packages/java/util/$List"
import { $IKeyEntryListenersEvent } from "packages/com/blamejared/controlling/api/events/$IKeyEntryListenersEvent"

export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
constructor(keyEntry0: $NewKeyBindsList$KeyEntry$$Type)
constructor()

public "getEntry"(): $NewKeyBindsList$KeyEntry
public "getListeners"(): $List<$GuiEventListener>
get "entry"(): $NewKeyBindsList$KeyEntry
get "listeners"(): $List<$GuiEventListener>
}
}

