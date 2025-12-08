declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"

export class $VariantBlockStateGenerator$Model {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
public "uvlock"(): $VariantBlockStateGenerator$Model
public "x"(_x: integer): $VariantBlockStateGenerator$Model
public "y"(_y: integer): $VariantBlockStateGenerator$Model
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenPainterObject" {
import { $ScreenDrawMode } from "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenDrawMode"
import { $PaintScreenEventJS$$Type } from "packages/dev/latvian/mods/kubejs/client/painter/screen/$PaintScreenEventJS"
import { $Unit, $Unit$$Type } from "packages/dev/latvian/mods/unit/$Unit"
import { $PainterObject } from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"

export class $ScreenPainterObject extends $PainterObject {
"draw": $ScreenDrawMode

constructor()

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "draw"(paintScreenEventJS0: $PaintScreenEventJS$$Type): void
public "preDraw"(event: $PaintScreenEventJS$$Type): void
get "x"(): $Unit
set "x"(value: $Unit$$Type)
get "y"(): $Unit
set "y"(value: $Unit$$Type)
get "z"(): $Unit
set "z"(value: $Unit$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator$Part" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $VariantBlockStateGenerator$Model } from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model"

export class $MultipartBlockStateGenerator$Part {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonObject
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Element" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"
import { $ModelGenerator$Face$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Face"
import { $AABB$$Type } from "packages/net/minecraft/world/phys/$AABB"

export class $ModelGenerator$Element {
constructor()

public "box"(b: $AABB$$Type): $ModelGenerator$Element
public "face"(direction: $Direction$$Type, consumer: $Consumer$$Type<$ModelGenerator$Face$$Type>): void
public "toJson"(): $JsonObject
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$LangEventJS$Key" {
import { $Record } from "packages/java/lang/$Record"

export class $LangEventJS$Key extends $Record {
constructor(namespace: string, lang: string, key: string)

public "key"(): string
public "lang"(): string
public "namespace"(): string
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/$PainterObjectStorage" {
import { $Painter, $Painter$$Type } from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Collection } from "packages/java/util/$Collection"
import { $ScreenPainterObject } from "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenPainterObject"
import { $PainterObject } from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"

export class $PainterObjectStorage {
readonly "painter": $Painter

constructor(p: $Painter$$Type)

public "clear"(): void
public "createScreenObjects"(): $ScreenPainterObject[]
public "getObject"(key: string): $PainterObject
public "getObjects"(): $Collection<$PainterObject>
public "handle"(root: $CompoundTag$$Type): void
public "remove"(id: string): void
get "objects"(): $Collection<$PainterObject>
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$ClientInitEventJS" {
import { $EntityRendererProvider$$Type } from "packages/net/minecraft/client/renderer/entity/$EntityRendererProvider"
import { $EntityType$$Type } from "packages/net/minecraft/world/entity/$EntityType"
import { $MenuRegistry$ScreenFactory$$Type } from "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory"
import { $BlockEntityRendererProvider$$Type } from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRendererProvider"
import { $ClientEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import { $BlockEntityType$$Type } from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import { $MenuType$$Type } from "packages/net/minecraft/world/inventory/$MenuType"

export class $ClientInitEventJS extends $ClientEventJS {
constructor()

public "registerBlockEntityRenderer"(type: $BlockEntityType$$Type<any>, renderer: $BlockEntityRendererProvider$$Type<any>): void
public "registerEntityRenderer"(type: $EntityType$$Type<any>, renderer: $EntityRendererProvider$$Type<any>): void
public "registerMenuScreen"(type: $MenuType$$Type<any>, screenFactory: $MenuRegistry$ScreenFactory$$Type<any, any>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Face" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Direction$$Type } from "packages/net/minecraft/core/$Direction"

export class $ModelGenerator$Face {
constructor()

public "cull"(): $ModelGenerator$Face
public "cull"(d: $Direction$$Type): $ModelGenerator$Face
public "tex"(t: string): $ModelGenerator$Face
public "tintindex"(i: integer): $ModelGenerator$Face
public "toJson"(): $JsonObject
public "uv"(u0: double, v0: double, u1: double, v1: double): $ModelGenerator$Face
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$ClientEventJS" {
import { $LocalPlayer } from "packages/net/minecraft/client/player/$LocalPlayer"
import { $PlayerEventJS } from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"

export class $ClientEventJS extends $PlayerEventJS {
constructor()

public "getPlayer"(): $LocalPlayer
get "player"(): $LocalPlayer
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$AtlasSpriteRegistryEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $AtlasSpriteRegistryEventJS extends $EventJS {
constructor(registry: $Consumer$$Type<$ResourceLocation$$Type>)

public "register"(id: $ResourceLocation$$Type): void
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/$PaintEventJS" {
import { $Tesselator } from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import { $Screen, $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Matrix4f, $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $GuiGraphics, $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $VertexFormat$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import { $VertexFormat$Mode$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import { $Font } from "packages/net/minecraft/client/gui/$Font"
import { $Minecraft, $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PoseStack } from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import { $ShaderInstance } from "packages/net/minecraft/client/renderer/$ShaderInstance"
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import { $ClientEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"
import { $Supplier$$Type } from "packages/java/util/function/$Supplier"
import { $Quaternionf$$Type } from "packages/org/joml/$Quaternionf"

export class $PaintEventJS extends $ClientEventJS {
readonly "buffer": $BufferBuilder
readonly "delta": float
readonly "font": $Font
readonly "graphics": $GuiGraphics
readonly "matrices": $PoseStack
readonly "mc": $Minecraft
readonly "screen": $Screen
readonly "tesselator": $Tesselator

constructor(m: $Minecraft$$Type, g: $GuiGraphics$$Type, d: float, s: $Screen$$Type)

public "begin"(type: $VertexFormat$Mode$$Type, format: $VertexFormat$$Type): void
public "beginQuads"(texture: boolean): void
public "beginQuads"(format: $VertexFormat$$Type): void
public "bindTextureForSetup"(tex: $ResourceLocation$$Type): void
public "blend"(enabled: boolean): void
public "end"(): void
public "getMatrix"(): $Matrix4f
public "multiply"(q: $Quaternionf$$Type): void
public "multiplyWithMatrix"(m: $Matrix4f$$Type): void
public "pop"(): void
public "push"(): void
public "resetShaderColor"(): void
public "scale"(x: float, y: float, z: float): void
public "setPositionColorShader"(): void
public "setPositionColorTextureShader"(): void
public "setShaderColor"(r: float, g: float, b: float, a: float): void
public "setShaderInstance"(shader: $Supplier$$Type<$ShaderInstance>): void
public "setShaderTexture"(tex: $ResourceLocation$$Type): void
public "translate"(x: double, y: double, z: double): void
public "vertex"(m: $Matrix4f$$Type, x: float, y: float, z: float, col: integer): void
public "vertex"(m: $Matrix4f$$Type, x: float, y: float, z: float, col: integer, u: float, v: float): void
get "matrix"(): $Matrix4f
set "shaderInstance"(value: $Supplier$$Type<$ShaderInstance>)
set "shaderTexture"(value: $ResourceLocation$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $VariantBlockStateGenerator$Variant$$Type } from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Variant"

export class $VariantBlockStateGenerator {
constructor()

public "simpleVariant"(key: string, model: string): void
public "toJson"(): $JsonObject
public "variant"(key: string, consumer: $Consumer$$Type<$VariantBlockStateGenerator$Variant$$Type>): void
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$GenerateClientAssetsEventJS" {
import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement"
import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $VariantBlockStateGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator"
import { $MultipartBlockStateGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator"
import { $AssetJsonGenerator, $AssetJsonGenerator$$Type } from "packages/dev/latvian/mods/kubejs/generator/$AssetJsonGenerator"
import { $ModelGenerator$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"

export class $GenerateClientAssetsEventJS extends $EventJS {
readonly "generator": $AssetJsonGenerator

constructor(gen: $AssetJsonGenerator$$Type)

public "add"(location: $ResourceLocation$$Type, json: $JsonElement$$Type): void
public "addBlockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$VariantBlockStateGenerator$$Type>): void
public "addLang"(key: string, value: string): void
public "addModel"(type: string, id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$ModelGenerator$$Type>): void
public "addMultipartBlockState"(id: $ResourceLocation$$Type, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$$Type>): void
public "defaultHandheldItemModel"(id: $ResourceLocation$$Type): void
public "defaultItemModel"(id: $ResourceLocation$$Type): void
public "stencil"(target: $ResourceLocation$$Type, stencil: string, colors: $JsonObject$$Type): void
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$LangEventJS" {
import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import { $LangEventJS$Key, $LangEventJS$Key$$Type } from "packages/dev/latvian/mods/kubejs/client/$LangEventJS$Key"
import { $Pattern } from "packages/java/util/regex/$Pattern"
import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack"
import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation"
import { $Block$$Type } from "packages/net/minecraft/world/level/block/$Block"
import { $Map, $Map$$Type } from "packages/java/util/$Map"

export class $LangEventJS extends $EventJS {
static readonly "PATTERN": $Pattern
readonly "lang": string
readonly "map": $Map<$LangEventJS$Key, string>

constructor(lang: string, map: $Map$$Type<$LangEventJS$Key$$Type, string>)

public "add"(namespace: string, key: string, value: string): void
public "add"(key: string, value: string): void
public "addAll"(map: $Map$$Type<string, string>): void
public "addAll"(namespace: string, map: $Map$$Type<string, string>): void
public "renameBiome"(id: $ResourceLocation$$Type, name: string): void
public "renameBlock"(block: $Block$$Type, name: string): void
public "renameEntity"(id: $ResourceLocation$$Type, name: string): void
public "renameItem"(item: $ItemStack$$Type, name: string): void
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$ModelGenerator" {
import { $JsonObject, $JsonObject$$Type } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $ModelGenerator$Element$$Type } from "packages/dev/latvian/mods/kubejs/client/$ModelGenerator$Element"

export class $ModelGenerator {
constructor()

public "element"(consumer: $Consumer$$Type<$ModelGenerator$Element$$Type>): void
public "parent"(s: string): void
public "texture"(name: string, texture: string): void
public "textures"(json: $JsonObject$$Type): void
public "toJson"(): $JsonObject
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $SpecialEquality } from "packages/dev/latvian/mods/rhino/util/$SpecialEquality"
import { $PainterObjectStorage, $PainterObjectStorage$$Type } from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObjectStorage"
import { $Unit, $Unit$$Type } from "packages/dev/latvian/mods/unit/$Unit"

export class $PainterObject implements $SpecialEquality {
"id": string

constructor()

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "id"(i: string): $PainterObject
public "specialEquals"(o: any, shallow: boolean): boolean
public "update"(tag: $CompoundTag$$Type): void
get "parent"(): $PainterObjectStorage
set "parent"(value: $PainterObjectStorage$$Type)
get "visible"(): $Unit
set "visible"(value: $Unit$$Type)
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$PaintScreenEventJS" {
import { $Painter, $Painter$$Type } from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import { $FormattedCharSequence$$Type } from "packages/net/minecraft/util/$FormattedCharSequence"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Minecraft$$Type } from "packages/net/minecraft/client/$Minecraft"
import { $PaintEventJS } from "packages/dev/latvian/mods/kubejs/client/painter/$PaintEventJS"
import { $AlignMode$$Type } from "packages/dev/latvian/mods/kubejs/client/painter/screen/$AlignMode"
import { $VariableSet } from "packages/dev/latvian/mods/unit/$VariableSet"
import { $UnitVariables } from "packages/dev/latvian/mods/unit/$UnitVariables"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $PaintScreenEventJS extends $PaintEventJS implements $UnitVariables {
readonly "height": integer
readonly "inventory": boolean
readonly "mouseX": integer
readonly "mouseY": integer
readonly "painter": $Painter
readonly "width": integer

constructor(m: $Minecraft$$Type, s: $Screen$$Type, graphics: $GuiGraphics$$Type, painter: $Painter$$Type, mx: integer, my: integer, d: float)
constructor(m: $Minecraft$$Type, graphics: $GuiGraphics$$Type, painter: $Painter$$Type, d: float)

public "alignX"(x: float, w: float, alignX: $AlignMode$$Type): float
public "alignY"(y: float, h: float, alignY: $AlignMode$$Type): float
public "getVariables"(): $VariableSet
public "rawText"(text: $FormattedCharSequence$$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer, u0: float, v0: float, u1: float, v1: float): void
public "rectangle"(x: float, y: float, z: float, w: float, h: float, color: integer): void
public "rotateDeg"(angle: float): void
public "rotateRad"(angle: float): void
public "scale"(x: float, y: float): void
public "scale"(scale: float): void
public "text"(text: $Component$$Type, x: integer, y: integer, color: integer, shadow: boolean): void
public "translate"(x: double, y: double): void
get "variables"(): $VariableSet
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$AlignMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $AlignMode extends $Enum<$AlignMode> {
static readonly "CENTER": $AlignMode
static readonly "END": $AlignMode
static readonly "START": $AlignMode

public static "valueOf"(name: string): $AlignMode
public static "values"(): $AlignMode[]
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/$Painter" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context"
import { $MutableNumberUnit } from "packages/dev/latvian/mods/unit/$MutableNumberUnit"
import { $VariableSet } from "packages/dev/latvian/mods/unit/$VariableSet"
import { $UnitVariables } from "packages/dev/latvian/mods/unit/$UnitVariables"
import { $Screen$$Type } from "packages/net/minecraft/client/gui/screens/$Screen"
import { $Unit, $Unit$$Type } from "packages/dev/latvian/mods/unit/$Unit"
import { $PainterObject } from "packages/dev/latvian/mods/kubejs/client/painter/$PainterObject"
import { $GuiGraphics$$Type } from "packages/net/minecraft/client/gui/$GuiGraphics"
import { $UnitContext } from "packages/dev/latvian/mods/unit/$UnitContext"
import { $ConsoleJS$$Type } from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"

export class $Painter implements $UnitVariables {
static readonly "INSTANCE": $Painter
readonly "defaultLineSizeUnit": $MutableNumberUnit
readonly "deltaUnit": $MutableNumberUnit
readonly "id": string
readonly "mouseXUnit": $MutableNumberUnit
readonly "mouseYUnit": $MutableNumberUnit
readonly "screenHeightUnit": $MutableNumberUnit
readonly "screenWidthUnit": $MutableNumberUnit
readonly "unitContext": $UnitContext

constructor(id: string)

public "clear"(): void
public "getObject"(key: string): $PainterObject
public "getVariables"(): $VariableSet
public "guiScreenDraw"(screen: $Screen$$Type, graphics: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, delta: float): void
public "inGameScreenDraw"(graphics: $GuiGraphics$$Type, delta: float): void
public "make"(type: string): $PainterObject
public "paint"(root: $CompoundTag$$Type): void
public "registerBuiltinObjects"(): void
public "setVariable"(key: string, variable: $Unit$$Type): void
public "unitOf"(console: $ConsoleJS$$Type, o: any): $Unit
public "unitOf"(cx: $Context$$Type, o: any): $Unit
get "variables"(): $VariableSet
}
}

declare module "packages/dev/latvian/mods/kubejs/client/painter/screen/$ScreenDrawMode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $ScreenDrawMode extends $Enum<$ScreenDrawMode> {
static readonly "ALWAYS": $ScreenDrawMode
static readonly "GUI": $ScreenDrawMode
static readonly "INGAME": $ScreenDrawMode

public "gui"(): boolean
public "ingame"(): boolean
public static "valueOf"(name: string): $ScreenDrawMode
public static "values"(): $ScreenDrawMode[]
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator" {
import { $JsonObject } from "packages/com/google/gson/$JsonObject"
import { $Consumer$$Type } from "packages/java/util/function/$Consumer"
import { $MultipartBlockStateGenerator$Part$$Type } from "packages/dev/latvian/mods/kubejs/client/$MultipartBlockStateGenerator$Part"

export class $MultipartBlockStateGenerator {
constructor()

public "part"(when: string, model: string): void
public "part"(when: string, consumer: $Consumer$$Type<$MultipartBlockStateGenerator$Part$$Type>): void
public "toJson"(): $JsonObject
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Variant" {
import { $JsonElement } from "packages/com/google/gson/$JsonElement"
import { $VariantBlockStateGenerator$Model } from "packages/dev/latvian/mods/kubejs/client/$VariantBlockStateGenerator$Model"

export class $VariantBlockStateGenerator$Variant {
constructor()

public "model"(s: string): $VariantBlockStateGenerator$Model
public "toJson"(): $JsonElement
}
}

declare module "packages/dev/latvian/mods/kubejs/client/$DebugInfoEventJS" {
import { $List, $List$$Type } from "packages/java/util/$List"
import { $ClientEventJS } from "packages/dev/latvian/mods/kubejs/client/$ClientEventJS"

/** Invoked when the debug info is rendered. */
export class $DebugInfoEventJS extends $ClientEventJS {
constructor(l: $List$$Type<string>)

/** The lines of debug info. Mutating this list will change the debug info. */
public "getLines"(): $List<string>
/** Whether the debug info should be rendered. */
public "getShowDebug"(): boolean
get "lines"(): $List<string>
get "showDebug"(): boolean
}
}

