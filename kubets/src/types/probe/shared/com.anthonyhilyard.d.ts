declare module "packages/com/anthonyhilyard/iceberg/events/$GatherComponentsExtEvent" {
import { $TooltipComponent$$Type } from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import { $FormattedText$$Type } from "packages/net/minecraft/network/chat/$FormattedText"
import { $RenderTooltipEvent$GatherComponents } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent$GatherComponents"
import { $List$$Type } from "packages/java/util/$List"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $GatherComponentsExtEvent extends $RenderTooltipEvent$GatherComponents {
constructor()
constructor(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, list3: $List$$Type<$Either$$Type<$FormattedText$$Type, $TooltipComponent$$Type>>, int4: integer, int5: integer)

public "getIndex"(): integer
get "index"(): integer
}
}

declare module "packages/com/anthonyhilyard/iceberg/events/$NewItemPickupEvent" {
import { $UUID$$Type } from "packages/java/util/$UUID"
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"

export class $NewItemPickupEvent extends $PlayerEvent {
constructor()
constructor(uUID0: $UUID$$Type, itemStack1: $ItemStack$$Type)
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
}

declare module "packages/com/anthonyhilyard/iceberg/events/$RenderTooltipExtEvent$Pre" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $List$$Type } from "packages/java/util/$List"
import { $RenderTooltipEvent$Pre } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent$Pre"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import { $ClientTooltipPositioner$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"

export class $RenderTooltipExtEvent$Pre extends $RenderTooltipEvent$Pre {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, font6: $Font$$Type, list7: $List$$Type<$ClientTooltipComponent$$Type>, clientTooltipPositioner8: $ClientTooltipPositioner$$Type, boolean9: boolean)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, int4: integer, int5: integer, font6: $Font$$Type, list7: $List$$Type<$ClientTooltipComponent$$Type>, clientTooltipPositioner8: $ClientTooltipPositioner$$Type, boolean9: boolean, int10: integer)

public "getIndex"(): integer
public "isComparison"(): boolean
get "index"(): integer
get "comparison"(): boolean
}
}

declare module "packages/com/anthonyhilyard/iceberg/events/$RenderTooltipExtEvent$Post" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $RenderTooltipEvent } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"

export class $RenderTooltipExtEvent$Post extends $RenderTooltipEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, list7: $List$$Type<$ClientTooltipComponent$$Type>, boolean8: boolean)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, list7: $List$$Type<$ClientTooltipComponent$$Type>, boolean8: boolean, int9: integer)

public "getHeight"(): integer
public "getIndex"(): integer
public "getWidth"(): integer
public "isComparison"(): boolean
get "height"(): integer
get "index"(): integer
get "width"(): integer
get "comparison"(): boolean
}
}

declare module "packages/com/anthonyhilyard/iceberg/events/$RenderTooltipExtEvent$Color" {
import { $Font$$Type } from "packages/net/minecraft/client/gui/$Font"
import { $RenderTooltipEvent$Color } from "packages/net/minecraftforge/client/event/$RenderTooltipEvent$Color"
import { $List$$Type } from "packages/java/util/$List"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $ClientTooltipComponent$$Type } from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"

export class $RenderTooltipExtEvent$Color extends $RenderTooltipEvent$Color {
constructor()
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, int8: integer, list9: $List$$Type<$ClientTooltipComponent$$Type>, boolean10: boolean, int11: integer)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, list8: $List$$Type<$ClientTooltipComponent$$Type>, boolean9: boolean)
constructor(itemStack0: $ItemStack$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, font4: $Font$$Type, int5: integer, int6: integer, int7: integer, list8: $List$$Type<$ClientTooltipComponent$$Type>, boolean9: boolean, int10: integer)

public "getIndex"(): integer
public "isComparison"(): boolean
get "index"(): integer
get "comparison"(): boolean
}
}

declare module "packages/com/anthonyhilyard/iceberg/events/$CriterionEvent" {
import { $Player$$Type } from "packages/net/minecraft/world/entity/player/$Player"
import { $PlayerEvent } from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import { $Advancement, $Advancement$$Type } from "packages/net/minecraft/advancements/$Advancement"

export class $CriterionEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, advancement1: $Advancement$$Type, string2: string)

/** @deprecated */
public "getAdvancement"(): $Advancement
public "getCriterionKey"(): string
get "advancement"(): $Advancement
get "criterionKey"(): string
}
}

declare module "packages/com/anthonyhilyard/prism/util/$IColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IColor {
"getName"(): string
"getValue"(): integer
"isAnimated"(): boolean
get "name"(): string
get "value"(): integer
get "animated"(): boolean
}

export namespace $IColor {
const probejs$$marker: never
}
export abstract class $IColor$$Static implements $IColor {
}
}

