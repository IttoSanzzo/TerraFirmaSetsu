declare module "packages/vazkii/patchouli/api/$BookDrawScreenEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $BookDrawScreenEvent extends $Event {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, screen1: $Screen$$Type, int2: integer, int3: integer, float4: float, guiGraphics5: $GuiGraphics$$Type)

public "getBook"(): $ResourceLocation
public "getGraphics"(): $GuiGraphics
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPartialTicks"(): float
public "getScreen"(): $Screen
get "book"(): $ResourceLocation
get "graphics"(): $GuiGraphics
get "mouseX"(): integer
get "mouseY"(): integer
get "partialTicks"(): float
get "screen"(): $Screen
}
}

declare module "packages/vazkii/patchouli/mixin/client/$AccessorScreen" {
import { $Renderable } from "packages/net/minecraft/client/gui/components/$Renderable"
import { $List } from "packages/java/util/$List"
import { $NarratableEntry } from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $AccessorScreen {
"getNarratables"(): $List<$NarratableEntry>
"getRenderables"(): $List<$Renderable>
get "narratables"(): $List<$NarratableEntry>
get "renderables"(): $List<$Renderable>
}

export namespace $AccessorScreen {
const probejs$$marker: never
}
export abstract class $AccessorScreen$$Static implements $AccessorScreen {
}
}

declare module "packages/vazkii/patchouli/api/$BookContentsReloadEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ResourceLocation, $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $BookContentsReloadEvent extends $Event {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type)

public "getBook"(): $ResourceLocation
get "book"(): $ResourceLocation
}
}

declare module "packages/vazkii/patchouli/mixin/client/$AccessorKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorKeyMapping {
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {
}
}

declare module "packages/vazkii/patchouli/mixin/client/$AccessorMultiBufferSource" {
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $Map } from "packages/java/util/$Map"
import { $RenderType } from "packages/net/minecraft/client/renderer/$RenderType"

export interface $AccessorMultiBufferSource {
"getFallbackBuffer"(): $BufferBuilder
"getFixedBuffers"(): $Map<$RenderType, $BufferBuilder>
get "fallbackBuffer"(): $BufferBuilder
get "fixedBuffers"(): $Map<$RenderType, $BufferBuilder>
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
export abstract class $AccessorMultiBufferSource$$Static implements $AccessorMultiBufferSource {
}
}

declare module "packages/vazkii/patchouli/mixin/$AccessorSmithingTransformRecipe" {
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTransformRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {
}
}

declare module "packages/vazkii/patchouli/mixin/client/$AccessorClientAdvancements" {
import { $Advancement } from "packages/net/minecraft/advancements/$Advancement"
import { $AdvancementProgress } from "packages/net/minecraft/advancements/$AdvancementProgress"
import { $Map } from "packages/java/util/$Map"

export interface $AccessorClientAdvancements {
"getProgress"(): $Map<$Advancement, $AdvancementProgress>
get "progress"(): $Map<$Advancement, $AdvancementProgress>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
export abstract class $AccessorClientAdvancements$$Static implements $AccessorClientAdvancements {
}
}

declare module "packages/vazkii/patchouli/mixin/$AccessorSmithingTrimRecipe" {
import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $AccessorSmithingTrimRecipe {
"getAddition"(): $Ingredient
"getBase"(): $Ingredient
"getTemplate"(): $Ingredient
get "addition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export abstract class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {
}
}

