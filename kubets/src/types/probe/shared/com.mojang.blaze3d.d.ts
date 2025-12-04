declare module "packages/com/mojang/blaze3d/platform/$DisplayData" {
import { $OptionalInt, $OptionalInt$$Type } from "packages/java/util/$OptionalInt"

export class $DisplayData {
readonly "fullscreenHeight": $OptionalInt
readonly "fullscreenWidth": $OptionalInt
readonly "height": integer
readonly "isFullscreen": boolean
readonly "width": integer

constructor(int0: integer, int1: integer, optionalInt2: $OptionalInt$$Type, optionalInt3: $OptionalInt$$Type, boolean4: boolean)

}
}

declare module "packages/com/mojang/blaze3d/vertex/$PoseStack" {
import { $PoseStackAccessor } from "packages/org/embeddedt/modernfix/forge/mixin/bugfix/entity_pose_stack/$PoseStackAccessor"
import { $Transformation$$Type } from "packages/com/mojang/math/$Transformation"
import { $Deque, $Deque$$Type } from "packages/java/util/$Deque"
import { $PoseStack$Pose, $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $PoseStackAccessor as $PoseStackAccessor$0 } from "packages/dev/engine_room/flywheel/impl/mixin/$PoseStackAccessor"
import { $Quaternionf$$Type } from "packages/org/joml/$Quaternionf"
import { $CachingPoseStack } from "packages/org/embeddedt/embeddium/render/matrix_stack/$CachingPoseStack"
import { $PoseTransformStack } from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"
import { $PoseStackExtension } from "packages/dev/engine_room/flywheel/impl/extension/$PoseStackExtension"
import { $IForgePoseStack } from "packages/net/minecraftforge/client/extensions/$IForgePoseStack"

export class $PoseStack implements $IForgePoseStack, $CachingPoseStack, $PoseStackAccessor, $PoseStackAccessor$0, $PoseStackExtension {
constructor()

public "clear"(): boolean
public "embeddium$setCachingEnabled"(boolean0: boolean): void
public "flywheel$transformStack"(): $PoseTransformStack
public "last"(): $PoseStack$Pose
public "mulPose"(quaternionf0: $Quaternionf$$Type): void
public "mulPoseMatrix"(matrix4f0: $Matrix4f$$Type): void
public "popPose"(): void
public "pushPose"(): void
public "pushTransformation"(transformation0: $Transformation$$Type): void
public "rotateAround"(quaternionf0: $Quaternionf$$Type, float1: float, float2: float, float3: float): void
public "scale"(float0: float, float1: float, float2: float): void
public "setIdentity"(): void
public "translate"(double0: double, double1: double, double2: double): void
public "translate"(float0: float, float1: float, float2: float): void
get "poseStack"(): $Deque<$PoseStack$Pose>
set "poseStack"(value: $Deque$$Type<$PoseStack$Pose$$Type>)
}
}

declare module "packages/com/mojang/blaze3d/audio/$Library" {
import { $Channel, $Channel$$Type } from "packages/com/mojang/blaze3d/audio/$Channel"
import { $Listener } from "packages/com/mojang/blaze3d/audio/$Listener"
import { $Library$Pool$$Type } from "packages/com/mojang/blaze3d/audio/$Library$Pool"
import { $List } from "packages/java/util/$List"

export class $Library {
constructor()

public "acquireChannel"(pool0: $Library$Pool$$Type): $Channel
public "cleanup"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getCurrentDeviceName"(): string
public "getDebugString"(): string
public static "getDefaultDeviceName"(): string
public "getListener"(): $Listener
public "hasDefaultDeviceChanged"(): boolean
public "init"(string0: string, boolean1: boolean): void
public "isCurrentDeviceDisconnected"(): boolean
public "releaseChannel"(channel0: $Channel$$Type): void
get "availableSoundDevices"(): $List<string>
get "currentDeviceName"(): string
get "debugString"(): string
get "listener"(): $Listener
get "currentDeviceDisconnected"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/font/$GlyphProvider" {
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $IntSet } from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import { $GlyphInfo } from "packages/com/mojang/blaze3d/font/$GlyphInfo"

export interface $GlyphProvider extends $AutoCloseable {
"close"(): void
"getGlyph"(int0: integer): $GlyphInfo
"getSupportedGlyphs"(): $IntSet
get "supportedGlyphs"(): $IntSet
}

export namespace $GlyphProvider {
const probejs$$marker: never
}
export abstract class $GlyphProvider$$Static implements $GlyphProvider {
}
}

declare module "packages/com/mojang/blaze3d/font/$GlyphInfo" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $SheetGlyphInfo$$Type } from "packages/com/mojang/blaze3d/font/$SheetGlyphInfo"
import { $BakedGlyph } from "packages/net/minecraft/client/gui/font/glyphs/$BakedGlyph"

export interface $GlyphInfo {
"bake"(function0: $Function$$Type<$SheetGlyphInfo$$Type, $BakedGlyph>): $BakedGlyph
"getAdvance"(): float
"getAdvance"(boolean0: boolean): float
"getBoldOffset"(): float
"getShadowOffset"(): float
get "advance"(): float
get "boldOffset"(): float
get "shadowOffset"(): float
}

export namespace $GlyphInfo {
const probejs$$marker: never
}
export abstract class $GlyphInfo$$Static implements $GlyphInfo {
}
}

declare module "packages/com/mojang/blaze3d/platform/$GlStateManager$DestFactor" {
import { $Enum } from "packages/java/lang/$Enum"

export class $GlStateManager$DestFactor extends $Enum<$GlStateManager$DestFactor> {
static readonly "CONSTANT_ALPHA": $GlStateManager$DestFactor
static readonly "CONSTANT_COLOR": $GlStateManager$DestFactor
static readonly "DST_ALPHA": $GlStateManager$DestFactor
static readonly "DST_COLOR": $GlStateManager$DestFactor
static readonly "ONE": $GlStateManager$DestFactor
static readonly "ONE_MINUS_CONSTANT_ALPHA": $GlStateManager$DestFactor
static readonly "ONE_MINUS_CONSTANT_COLOR": $GlStateManager$DestFactor
static readonly "ONE_MINUS_DST_ALPHA": $GlStateManager$DestFactor
static readonly "ONE_MINUS_DST_COLOR": $GlStateManager$DestFactor
static readonly "ONE_MINUS_SRC_ALPHA": $GlStateManager$DestFactor
static readonly "ONE_MINUS_SRC_COLOR": $GlStateManager$DestFactor
static readonly "SRC_ALPHA": $GlStateManager$DestFactor
static readonly "SRC_COLOR": $GlStateManager$DestFactor
static readonly "ZERO": $GlStateManager$DestFactor
readonly "value": integer

public static "valueOf"(string0: string): $GlStateManager$DestFactor
public static "values"(): $GlStateManager$DestFactor[]
}
}

declare module "packages/com/mojang/blaze3d/shaders/$AbstractUniform" {
import { $Vector4f$$Type } from "packages/org/joml/$Vector4f"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"

export class $AbstractUniform {
constructor()

public "set"(vector3f0: $Vector3f$$Type): void
public "set"(matrix4f0: $Matrix4f$$Type): void
public "set"(float0s: float[]): void
public "set"(vector4f0: $Vector4f$$Type): void
public "set"(float0: float, float1: float, float2: float): void
public "set"(float0: float, float1: float, float2: float, float3: float): void
public "set"(int0: integer, int1: integer, int2: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "set"(float0: float): void
public "set"(float0: float, float1: float): void
public "set"(matrix3f0: $Matrix3f$$Type): void
public "set"(int0: integer): void
public "set"(int0: integer, int1: integer): void
public "setMat2x2"(float0: float, float1: float, float2: float, float3: float): void
public "setMat2x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "setMat2x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): void
public "setMat3x2"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
public "setMat3x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float): void
public "setMat3x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "setMat4x2"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float): void
public "setMat4x3"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float): void
public "setMat4x4"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float, float14: float, float15: float): void
public "setSafe"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setSafe"(float0: float, float1: float, float2: float, float3: float): void
}
}

declare module "packages/com/mojang/blaze3d/platform/$IconSet" {
import { $Enum } from "packages/java/lang/$Enum"
import { $List } from "packages/java/util/$List"
import { $InputStream } from "packages/java/io/$InputStream"
import { $IoSupplier } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"

export class $IconSet extends $Enum<$IconSet> {
static readonly "RELEASE": $IconSet
static readonly "SNAPSHOT": $IconSet

public "getMacIcon"(packResources0: $PackResources$$Type): $IoSupplier<$InputStream>
public "getStandardIcons"(packResources0: $PackResources$$Type): $List<$IoSupplier<$InputStream>>
public static "valueOf"(string0: string): $IconSet
public static "values"(): $IconSet[]
}
}

declare module "packages/com/mojang/blaze3d/vertex/$BufferVertexConsumer" {
import { $VertexFormatElement, $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $BufferVertexConsumer extends $VertexConsumer {
"applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
"applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
"color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
"color"(int0: integer): $VertexConsumer
"color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
"currentElement"(): $VertexFormatElement
"defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
"endVertex"(): void
"misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
"nextElement"(): void
"normal"(float0: float, float1: float, float2: float): $VertexConsumer
"normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"overlayCoords"(int0: integer, int1: integer): $VertexConsumer
"overlayCoords"(int0: integer): $VertexConsumer
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
"putByte"(int0: integer, byte1: byte): void
"putFloat"(int0: integer, float1: float): void
"putShort"(int0: integer, short1: short): void
"unsetDefaultColor"(): void
"uv"(float0: float, float1: float): $VertexConsumer
"uv2"(int0: integer, int1: integer): $VertexConsumer
"uv2"(int0: integer): $VertexConsumer
"uvShort"(short0: short, short1: short, int2: integer): $VertexConsumer
"vertex"(double0: double, double1: double, double2: double): $VertexConsumer
"vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
"vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
}

export namespace $BufferVertexConsumer {
function normalIntValue(float0: float): byte
}
export abstract class $BufferVertexConsumer$$Static implements $BufferVertexConsumer {
static "normalIntValue"(float0: float): byte
}
}

declare module "packages/com/mojang/blaze3d/audio/$Library$Pool" {
import { $Enum } from "packages/java/lang/$Enum"

export class $Library$Pool extends $Enum<$Library$Pool> {
static readonly "STATIC": $Library$Pool
static readonly "STREAMING": $Library$Pool

public static "valueOf"(string0: string): $Library$Pool
public static "values"(): $Library$Pool[]
}
}

declare module "packages/com/mojang/blaze3d/shaders/$Program" {
import { $GlslPreprocessor$$Type } from "packages/com/mojang/blaze3d/preprocessor/$GlslPreprocessor"
import { $Shader$$Type } from "packages/com/mojang/blaze3d/shaders/$Shader"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $Program$Type$$Type } from "packages/com/mojang/blaze3d/shaders/$Program$Type"

export class $Program {
constructor(type0: $Program$Type$$Type, int1: integer, string2: string)

public "attachToShader"(shader0: $Shader$$Type): void
public "close"(): void
public static "compileShader"(type0: $Program$Type$$Type, string1: string, inputStream2: $InputStream$$Type, string3: string, glslPreprocessor4: $GlslPreprocessor$$Type): $Program
public "getId"(): integer
public "getName"(): string
get "id"(): integer
get "name"(): string
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement" {
import { $VertexFormatElement$Type, $VertexFormatElement$Type$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Type"
import { $VertexFormatElement$Usage, $VertexFormatElement$Usage$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Usage"

export class $VertexFormatElement {
constructor(int0: integer, type1: $VertexFormatElement$Type$$Type, usage2: $VertexFormatElement$Usage$$Type, int3: integer)

public "clearBufferState"(int0: integer): void
public "getByteSize"(): integer
public "getCount"(): integer
public "getElementCount"(): integer
public "getIndex"(): integer
public "getType"(): $VertexFormatElement$Type
public "getUsage"(): $VertexFormatElement$Usage
public "isPosition"(): boolean
public "setupBufferState"(int0: integer, long1: long, int2: integer): void
get "byteSize"(): integer
get "count"(): integer
get "elementCount"(): integer
get "index"(): integer
get "type"(): $VertexFormatElement$Type
get "usage"(): $VertexFormatElement$Usage
get "position"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexBuffer$Usage" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
static readonly "DYNAMIC": $VertexBuffer$Usage
static readonly "STATIC": $VertexBuffer$Usage

public static "valueOf"(string0: string): $VertexBuffer$Usage
public static "values"(): $VertexBuffer$Usage[]
}
}

declare module "packages/com/mojang/blaze3d/shaders/$Shader" {
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"

export interface $Shader {
"attachToProgram"(): void
"getFragmentProgram"(): $Program
"getId"(): integer
"getVertexProgram"(): $Program
"markDirty"(): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "vertexProgram"(): $Program
}

export namespace $Shader {
const probejs$$marker: never
}
export abstract class $Shader$$Static implements $Shader {
}
}

declare module "packages/com/mojang/blaze3d/shaders/$FogShape" {
import { $Enum } from "packages/java/lang/$Enum"

export class $FogShape extends $Enum<$FogShape> {
static readonly "CYLINDER": $FogShape
static readonly "SPHERE": $FogShape

public "getIndex"(): integer
public static "valueOf"(string0: string): $FogShape
public static "values"(): $FogShape[]
get "index"(): integer
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
static readonly "INT": $VertexFormat$IndexType
static readonly "SHORT": $VertexFormat$IndexType
readonly "asGLType": integer
readonly "bytes": integer

public static "least"(int0: integer): $VertexFormat$IndexType
public static "valueOf"(string0: string): $VertexFormat$IndexType
public static "values"(): $VertexFormat$IndexType[]
}
}

declare module "packages/com/mojang/blaze3d/vertex/$DefaultedVertexConsumer" {
import { $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $VertexConsumer } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $DefaultedVertexConsumer implements $VertexConsumer {
constructor()

public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
public "color"(int0: integer): $VertexConsumer
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public "defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "endVertex"(): void
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "normal"(float0: float, float1: float, float2: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "overlayCoords"(int0: integer, int1: integer): $VertexConsumer
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "unsetDefaultColor"(): void
public "uv"(float0: float, float1: float): $VertexConsumer
public "uv2"(int0: integer, int1: integer): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public "vertex"(double0: double, double1: double, double2: double): $VertexConsumer
get "defaultColorSet"(): boolean
set "defaultColorSet"(value: boolean)
}
}

declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$DrawState" {
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import { $Record } from "packages/java/lang/$Record"
import { $VertexFormat, $VertexFormat$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import { $VertexFormat$IndexType, $VertexFormat$IndexType$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$IndexType"

export class $BufferBuilder$DrawState extends $Record {
constructor(format: $VertexFormat$$Type, vertexCount: integer, indexCount: integer, mode: $VertexFormat$Mode$$Type, indexType: $VertexFormat$IndexType$$Type, indexOnly: boolean, sequentialIndex: boolean)

public "bufferSize"(): integer
public "format"(): $VertexFormat
public "indexBufferEnd"(): integer
public "indexBufferStart"(): integer
public "indexCount"(): integer
public "indexOnly"(): boolean
public "indexType"(): $VertexFormat$IndexType
public "mode"(): $VertexFormat$Mode
public "sequentialIndex"(): boolean
public "vertexBufferEnd"(): integer
public "vertexBufferSize"(): integer
public "vertexBufferStart"(): integer
public "vertexCount"(): integer
}
}

declare module "packages/com/mojang/blaze3d/preprocessor/$GlslPreprocessor" {
import { $List } from "packages/java/util/$List"

export class $GlslPreprocessor {
constructor()

public "applyImport"(boolean0: boolean, string1: string): string
public "process"(string0: string): $List<string>
}
}

declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder" {
import { $BlockSensitiveBufferBuilder } from "packages/net/irisshaders/iris/vertices/$BlockSensitiveBufferBuilder"
import { $MemoryTrackingBuffer } from "packages/net/irisshaders/batchedentityrendering/impl/$MemoryTrackingBuffer"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $BufferBuilder$SortState, $BufferBuilder$SortState$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState"
import { $SodiumBufferBuilder } from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import { $ExtendingBufferBuilder } from "packages/net/irisshaders/iris/vertices/$ExtendingBufferBuilder"
import { $MemoryStack$$Type } from "packages/org/lwjgl/system/$MemoryStack"
import { $BufferBuilderAccessor } from "packages/net/createmod/ponder/mixin/client/accessor/$BufferBuilderAccessor"
import { $ExtendedBufferBuilder } from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import { $VertexFormatElement, $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $VertexConsumer, $VertexConsumer$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import { $DefaultedVertexConsumer } from "packages/com/mojang/blaze3d/vertex/$DefaultedVertexConsumer"
import { $ByteBuffer, $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"
import { $VertexFormatDescription, $VertexFormatDescription$$Type } from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import { $BufferBuilderAccessor as $BufferBuilderAccessor$0 } from "packages/team/creative/creativecore/mixin/$BufferBuilderAccessor"
import { $VertexFormat, $VertexFormat$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"
import { $BufferVertexConsumer } from "packages/com/mojang/blaze3d/vertex/$BufferVertexConsumer"
import { $BufferBuilder$RenderedBuffer } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer"
import { $BufferBuilderExt } from "packages/net/irisshaders/batchedentityrendering/impl/$BufferBuilderExt"
import { $IrisExtendedBufferBuilder } from "packages/net/irisshaders/iris/vertices/$IrisExtendedBufferBuilder"
import { $VertexSorting$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexSorting"
import { $VertexBufferWriter, $VertexBufferWriter$$Type } from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"

export class $BufferBuilder extends $DefaultedVertexConsumer implements $BufferVertexConsumer, $BlockSensitiveBufferBuilder, $ExtendingBufferBuilder, $IrisExtendedBufferBuilder, $MemoryTrackingBuffer, $BufferBuilderAccessor, $BufferBuilderAccessor$0, $ExtendedBufferBuilder, $VertexBufferWriter, $BufferBuilderExt {
constructor(int0: integer)

public "applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
public "applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
public "begin"(mode0: $VertexFormat$Mode$$Type, vertexFormat1: $VertexFormat$$Type): void
public "beginBlock"(block: short, renderType: short, localPosX: integer, localPosY: integer, localPosZ: integer): void
public "building"(): boolean
public "canUseIntrinsics"(): boolean
public "clear"(): void
public "color"(int0: integer): $VertexConsumer
public "color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
public static "copyInto"(vertexBufferWriter0: $VertexBufferWriter$$Type, memoryStack1: $MemoryStack$$Type, long2: long, int3: integer, vertexFormatDescription4: $VertexFormatDescription$$Type): void
public "currentElement"(): $VertexFormatElement
public "discard"(): void
public "end"(): $BufferBuilder$RenderedBuffer
public "endBlock"(): void
public "endOrDiscardIfEmpty"(): $BufferBuilder$RenderedBuffer
public "freeAndDeleteBuffer"(): void
public "getAllocatedSize"(): integer
public "getSortState"(): $BufferBuilder$SortState
public "getUsedSize"(): integer
public "iris$beginWithoutExtending"(drawMode: $VertexFormat$Mode$$Type, vertexFormat: $VertexFormat$$Type): void
public "iris$currentBlock"(): short
public "iris$currentLocalPosX"(): integer
public "iris$currentLocalPosY"(): integer
public "iris$currentLocalPosZ"(): integer
public "iris$currentRenderType"(): short
public "iris$extending"(): boolean
public "iris$format"(): $VertexFormat
public "iris$incrementVertexCount"(): void
public "iris$injectNormalAndUV1"(): boolean
public "iris$isTerrain"(): boolean
public "iris$mode"(): $VertexFormat$Mode
public "iris$resetVertexCount"(): void
public "iris$vertexCount"(): integer
public "isCurrentBatchEmpty"(): boolean
/** @deprecated */
public "isFullWriter"(): boolean
public "localvar$bkj000$vertex"(alpha: float): float
public "misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
public "nextElement"(): void
public "normal"(float0: float, float1: float, float2: float): $VertexConsumer
public "normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
public static "normalIntValue"(float0: float): byte
public static "of"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "overlayCoords"(int0: integer, int1: integer): $VertexConsumer
public "overlayCoords"(int0: integer): $VertexConsumer
public "push"(memoryStack0: $MemoryStack$$Type, long1: long, int2: integer, vertexFormatDescription3: $VertexFormatDescription$$Type): void
public "putBulkData"(byteBuffer0: $ByteBuffer$$Type): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
public "putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
public "putByte"(int0: integer, byte1: byte): void
public "putFloat"(int0: integer, float1: float): void
public "putShort"(int0: integer, short1: short): void
public "restoreSortState"(sortState0: $BufferBuilder$SortState$$Type): void
public "setQuadSorting"(vertexSorting0: $VertexSorting$$Type): void
public "sodium$getBuffer"(): $ByteBuffer
public "sodium$getDelegate"(): $SodiumBufferBuilder
public "sodium$getElementOffset"(): integer
public "sodium$getFormatDescription"(): $VertexFormatDescription
public "sodium$moveToNextVertex"(): void
public "sodium$usingFixedColor"(): boolean
public "splitStrip"(): void
public static "tryOf"(vertexConsumer0: $VertexConsumer$$Type): $VertexBufferWriter
public "uv"(float0: float, float1: float): $VertexConsumer
public "uv2"(int0: integer): $VertexConsumer
public "uvShort"(short0: short, short1: short, int2: integer): $VertexConsumer
public "vertex"(double0: double, double1: double, double2: double): $VertexConsumer
public "vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
get "format"(): $VertexFormat
set "format"(value: $VertexFormat$$Type)
get "mode"(): $VertexFormat$Mode
set "mode"(value: $VertexFormat$Mode$$Type)
get "allocatedSize"(): integer
get "sortState"(): $BufferBuilder$SortState
get "usedSize"(): integer
get "currentBatchEmpty"(): boolean
get "fullWriter"(): boolean
set "quadSorting"(value: $VertexSorting$$Type)
}
}

declare module "packages/com/mojang/blaze3d/audio/$Listener" {
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $Vec3, $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"

export class $Listener {
constructor()

public "getGain"(): float
public "getListenerPosition"(): $Vec3
public "reset"(): void
public "setGain"(float0: float): void
public "setListenerOrientation"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): void
public "setListenerPosition"(vec30: $Vec3$$Type): void
get "gain"(): float
get "listenerPosition"(): $Vec3
set "gain"(value: float)
set "listenerPosition"(value: $Vec3$$Type)
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat" {
import { $VertexFormatElement, $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $ExtendedVertexFormat } from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat"
import { $ImmutableList } from "packages/com/google/common/collect/$ImmutableList"
import { $IntList } from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import { $ImmutableMap, $ImmutableMap$$Type } from "packages/com/google/common/collect/$ImmutableMap"
import { $VertexBuffer } from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"
import { $VertexFormatAccessor } from "packages/me/jellysquid/mods/sodium/mixin/core/render/$VertexFormatAccessor"
import { $ExtendedVertexFormat$Element } from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element"

export class $VertexFormat implements $ExtendedVertexFormat, $VertexFormatAccessor {
readonly "offsets": $IntList

constructor(immutableMap0: $ImmutableMap$$Type<string, $VertexFormatElement$$Type>)

public "_clearBufferState"(): void
public "_setupBufferState"(): void
public "clearBufferState"(): void
public "embeddium$getExtendedElements"(): $ExtendedVertexFormat$Element[]
public "getElementAttributeNames"(): $ImmutableList<string>
public "getElementMapping"(): $ImmutableMap<string, $VertexFormatElement>
public "getElements"(): $ImmutableList<$VertexFormatElement>
public "getImmediateDrawVertexBuffer"(): $VertexBuffer
public "getIntegerSize"(): integer
public "getOffset"(int0: integer): integer
public "getVertexSize"(): integer
public "hasColor"(): boolean
public "hasNormal"(): boolean
public "hasPosition"(): boolean
public "hasUV"(int0: integer): boolean
public "setupBufferState"(): void
get "elementAttributeNames"(): $ImmutableList<string>
get "elementMapping"(): $ImmutableMap<string, $VertexFormatElement>
get "elements"(): $ImmutableList<$VertexFormatElement>
get "immediateDrawVertexBuffer"(): $VertexBuffer
get "integerSize"(): integer
get "vertexSize"(): integer
}
}

declare module "packages/com/mojang/blaze3d/platform/$WindowEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WindowEventHandler {
"cursorEntered"(): void
"resizeDisplay"(): void
"setWindowActive"(boolean0: boolean): void
set "windowActive"(value: boolean)
}

export namespace $WindowEventHandler {
const probejs$$marker: never
}
export abstract class $WindowEventHandler$$Static implements $WindowEventHandler {
}
}

declare module "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose" {
import { $Matrix4f, $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $Matrix3f, $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"

export class $PoseStack$Pose {
constructor(matrix4f0: $Matrix4f$$Type, matrix3f1: $Matrix3f$$Type)

public "normal"(): $Matrix3f
public "pose"(): $Matrix4f
}
}

declare module "packages/com/mojang/blaze3d/shaders/$Program$Type" {
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"
import { $Enum } from "packages/java/lang/$Enum"
import { $ProgramTypeAccessor } from "packages/net/irisshaders/iris/mixin/$ProgramTypeAccessor"
import { $Map } from "packages/java/util/$Map"

export class $Program$Type extends $Enum<$Program$Type> implements $ProgramTypeAccessor {
static readonly "FRAGMENT": $Program$Type
static readonly "VERTEX": $Program$Type

public "getExtension"(): string
public "getGlType"(): integer
public "getName"(): string
public "getPrograms"(): $Map<string, $Program>
public static "valueOf"(string0: string): $Program$Type
public static "values"(): $Program$Type[]
get "extension"(): string
get "glType"(): integer
get "name"(): string
get "programs"(): $Map<string, $Program>
}
}

declare module "packages/com/mojang/blaze3d/shaders/$EffectProgram" {
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"
import { $Effect$$Type } from "packages/com/mojang/blaze3d/shaders/$Effect"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $Program$Type$$Type } from "packages/com/mojang/blaze3d/shaders/$Program$Type"

export class $EffectProgram extends $Program {
public "attachToEffect"(effect0: $Effect$$Type): void
public static "compileShader"(type0: $Program$Type$$Type, string1: string, inputStream2: $InputStream$$Type, string3: string): $EffectProgram
}
}

declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$SortState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BufferBuilder$SortState {
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexSorting" {
import { $VertexSorting$DistanceFunction$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexSorting$DistanceFunction"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"

export interface $VertexSorting {
"sort"(vector3f0s: $Vector3f$$Type[]): integer[]
}

export namespace $VertexSorting {
const DISTANCE_TO_ORIGIN: $VertexSorting
const ORTHOGRAPHIC_Z: $VertexSorting
function byDistance(float0: float, float1: float, float2: float): $VertexSorting
function byDistance(distanceFunction0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
function byDistance(vector3f0: $Vector3f$$Type): $VertexSorting
}
export abstract class $VertexSorting$$Static implements $VertexSorting {
static readonly "DISTANCE_TO_ORIGIN": $VertexSorting
static readonly "ORTHOGRAPHIC_Z": $VertexSorting

static "byDistance"(float0: float, float1: float, float2: float): $VertexSorting
static "byDistance"(distanceFunction0: $VertexSorting$DistanceFunction$$Type): $VertexSorting
static "byDistance"(vector3f0: $Vector3f$$Type): $VertexSorting
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Type" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
static readonly "BYTE": $VertexFormatElement$Type
static readonly "FLOAT": $VertexFormatElement$Type
static readonly "INT": $VertexFormatElement$Type
static readonly "SHORT": $VertexFormatElement$Type
static readonly "UBYTE": $VertexFormatElement$Type
static readonly "UINT": $VertexFormatElement$Type
static readonly "USHORT": $VertexFormatElement$Type

public "getGlType"(): integer
public "getName"(): string
public "getSize"(): integer
public static "valueOf"(string0: string): $VertexFormatElement$Type
public static "values"(): $VertexFormatElement$Type[]
get "glType"(): integer
get "name"(): string
get "size"(): integer
}
}

declare module "packages/com/mojang/blaze3d/shaders/$BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendMode {
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer)
constructor(int0: integer, int1: integer, int2: integer)
constructor()

public "apply"(): void
public "isOpaque"(): boolean
public static "stringToBlendFactor"(string0: string): integer
public static "stringToBlendFunc"(string0: string): integer
get "opaque"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexSorting$DistanceFunction" {
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"

export interface $VertexSorting$DistanceFunction {
"apply"(vector3f0: $Vector3f$$Type): float
}

export namespace $VertexSorting$DistanceFunction {
const probejs$$marker: never
}
export abstract class $VertexSorting$DistanceFunction$$Static implements $VertexSorting$DistanceFunction {
}
}

declare module "packages/com/mojang/blaze3d/platform/$MonitorCreator" {
import { $Monitor } from "packages/com/mojang/blaze3d/platform/$Monitor"

export interface $MonitorCreator {
"createMonitor"(long0: long): $Monitor
}

export namespace $MonitorCreator {
const probejs$$marker: never
}
export abstract class $MonitorCreator$$Static implements $MonitorCreator {
}
}

declare module "packages/com/mojang/blaze3d/audio/$SoundBuffer" {
import { $AudioFormat$$Type } from "packages/javax/sound/sampled/$AudioFormat"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $OptionalInt } from "packages/java/util/$OptionalInt"

export class $SoundBuffer {
constructor(byteBuffer0: $ByteBuffer$$Type, audioFormat1: $AudioFormat$$Type)

public "discardAlBuffer"(): void
public "releaseAlBuffer"(): $OptionalInt
}
}

declare module "packages/com/mojang/blaze3d/platform/$GlStateManager$SourceFactor" {
import { $Enum } from "packages/java/lang/$Enum"

export class $GlStateManager$SourceFactor extends $Enum<$GlStateManager$SourceFactor> {
static readonly "CONSTANT_ALPHA": $GlStateManager$SourceFactor
static readonly "CONSTANT_COLOR": $GlStateManager$SourceFactor
static readonly "DST_ALPHA": $GlStateManager$SourceFactor
static readonly "DST_COLOR": $GlStateManager$SourceFactor
static readonly "ONE": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_CONSTANT_ALPHA": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_CONSTANT_COLOR": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_DST_ALPHA": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_DST_COLOR": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_SRC_ALPHA": $GlStateManager$SourceFactor
static readonly "ONE_MINUS_SRC_COLOR": $GlStateManager$SourceFactor
static readonly "SRC_ALPHA": $GlStateManager$SourceFactor
static readonly "SRC_ALPHA_SATURATE": $GlStateManager$SourceFactor
static readonly "SRC_COLOR": $GlStateManager$SourceFactor
static readonly "ZERO": $GlStateManager$SourceFactor
readonly "value": integer

public static "valueOf"(string0: string): $GlStateManager$SourceFactor
public static "values"(): $GlStateManager$SourceFactor[]
}
}

declare module "packages/com/mojang/blaze3d/platform/$VideoMode" {
import { $GLFWVidMode$$Type } from "packages/org/lwjgl/glfw/$GLFWVidMode"
import { $Optional } from "packages/java/util/$Optional"
import { $GLFWVidMode$Buffer$$Type } from "packages/org/lwjgl/glfw/$GLFWVidMode$Buffer"

export class $VideoMode {
constructor(gLFWVidMode0: $GLFWVidMode$$Type)
constructor(buffer0: $GLFWVidMode$Buffer$$Type)
constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

public "getBlueBits"(): integer
public "getGreenBits"(): integer
public "getHeight"(): integer
public "getRedBits"(): integer
public "getRefreshRate"(): integer
public "getWidth"(): integer
public static "read"(string0: string): $Optional<$VideoMode>
public "write"(): string
get "blueBits"(): integer
get "greenBits"(): integer
get "height"(): integer
get "redBits"(): integer
get "refreshRate"(): integer
get "width"(): integer
}
}

declare module "packages/com/mojang/blaze3d/platform/$ScreenManager" {
import { $MonitorCreator$$Type } from "packages/com/mojang/blaze3d/platform/$MonitorCreator"
import { $Window$$Type } from "packages/com/mojang/blaze3d/platform/$Window"
import { $Monitor } from "packages/com/mojang/blaze3d/platform/$Monitor"

export class $ScreenManager {
constructor(monitorCreator0: $MonitorCreator$$Type)

public static "clamp"(int0: integer, int1: integer, int2: integer): integer
public "findBestMonitor"(window0: $Window$$Type): $Monitor
public "getMonitor"(long0: long): $Monitor
public "shutdown"(): void
}
}

declare module "packages/com/mojang/blaze3d/platform/$NativeImage$Format" {
import { $Enum } from "packages/java/lang/$Enum"

export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
static readonly "LUMINANCE": $NativeImage$Format
static readonly "LUMINANCE_ALPHA": $NativeImage$Format
static readonly "RGB": $NativeImage$Format
static readonly "RGBA": $NativeImage$Format

public "alphaOffset"(): integer
public "blueOffset"(): integer
public "components"(): integer
public "glFormat"(): integer
public "greenOffset"(): integer
public "hasAlpha"(): boolean
public "hasBlue"(): boolean
public "hasGreen"(): boolean
public "hasLuminance"(): boolean
public "hasLuminanceOrAlpha"(): boolean
public "hasLuminanceOrBlue"(): boolean
public "hasLuminanceOrGreen"(): boolean
public "hasLuminanceOrRed"(): boolean
public "hasRed"(): boolean
public "luminanceOffset"(): integer
public "luminanceOrAlphaOffset"(): integer
public "luminanceOrBlueOffset"(): integer
public "luminanceOrGreenOffset"(): integer
public "luminanceOrRedOffset"(): integer
public "redOffset"(): integer
public "setPackPixelStoreState"(): void
public "setUnpackPixelStoreState"(): void
public "supportedByStb"(): boolean
public static "valueOf"(string0: string): $NativeImage$Format
public static "values"(): $NativeImage$Format[]
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormatElement$Usage" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> {
static readonly "COLOR": $VertexFormatElement$Usage
static readonly "GENERIC": $VertexFormatElement$Usage
static readonly "NORMAL": $VertexFormatElement$Usage
static readonly "PADDING": $VertexFormatElement$Usage
static readonly "POSITION": $VertexFormatElement$Usage
static readonly "UV": $VertexFormatElement$Usage

public "clearBufferState"(int0: integer, int1: integer): void
public "getName"(): string
public static "valueOf"(string0: string): $VertexFormatElement$Usage
public static "values"(): $VertexFormatElement$Usage[]
get "name"(): string
}
}

declare module "packages/com/mojang/blaze3d/vertex/$Tesselator" {
import { $BufferBuilder } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"

export class $Tesselator {
constructor()
constructor(int0: integer)

public "end"(): void
public "getBuilder"(): $BufferBuilder
public static "getInstance"(): $Tesselator
get "builder"(): $BufferBuilder
}
}

declare module "packages/com/mojang/blaze3d/shaders/$Uniform" {
import { $FloatBuffer } from "packages/java/nio/$FloatBuffer"
import { $Shader$$Type } from "packages/com/mojang/blaze3d/shaders/$Shader"
import { $AbstractUniform } from "packages/com/mojang/blaze3d/shaders/$AbstractUniform"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $IntBuffer } from "packages/java/nio/$IntBuffer"

export class $Uniform extends $AbstractUniform implements $AutoCloseable {
static readonly "UT_FLOAT1": integer
static readonly "UT_FLOAT2": integer
static readonly "UT_FLOAT3": integer
static readonly "UT_FLOAT4": integer
static readonly "UT_INT1": integer
static readonly "UT_INT2": integer
static readonly "UT_INT3": integer
static readonly "UT_INT4": integer
static readonly "UT_MAT2": integer
static readonly "UT_MAT3": integer
static readonly "UT_MAT4": integer

constructor(string0: string, int1: integer, int2: integer, shader3: $Shader$$Type)

public "close"(): void
public "getCount"(): integer
public "getFloatBuffer"(): $FloatBuffer
public "getIntBuffer"(): $IntBuffer
public "getLocation"(): integer
public "getName"(): string
public "getType"(): integer
public static "getTypeFromString"(string0: string): integer
public static "glBindAttribLocation"(int0: integer, int1: integer, charSequence2: charseq): void
public static "glGetAttribLocation"(int0: integer, charSequence1: charseq): integer
public static "glGetUniformLocation"(int0: integer, charSequence1: charseq): integer
public "set"(int0: integer, float1: float): void
public "setLocation"(int0: integer): void
public "upload"(): void
public static "uploadInteger"(int0: integer, int1: integer): void
get "count"(): integer
get "floatBuffer"(): $FloatBuffer
get "intBuffer"(): $IntBuffer
get "location"(): integer
get "name"(): string
get "type"(): integer
set "location"(value: integer)
}
}

declare module "packages/com/mojang/blaze3d/shaders/$Effect" {
import { $Program } from "packages/com/mojang/blaze3d/shaders/$Program"
import { $Shader } from "packages/com/mojang/blaze3d/shaders/$Shader"

export interface $Effect extends $Shader {
"attachToProgram"(): void
"getFragmentProgram"(): $Program
"getId"(): integer
"getVertexProgram"(): $Program
"markDirty"(): void
get "fragmentProgram"(): $Program
get "id"(): integer
get "vertexProgram"(): $Program
}

export namespace $Effect {
const probejs$$marker: never
}
export abstract class $Effect$$Static implements $Effect {
}
}

declare module "packages/com/mojang/blaze3d/platform/$InputConstants$Type" {
import { $Enum } from "packages/java/lang/$Enum"
import { $InputConstants$Key } from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
static readonly "KEYSYM": $InputConstants$Type
static readonly "MOUSE": $InputConstants$Type
static readonly "SCANCODE": $InputConstants$Type

public "getOrCreate"(int0: integer): $InputConstants$Key
public static "valueOf"(string0: string): $InputConstants$Type
public static "values"(): $InputConstants$Type[]
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexConsumer" {
import { $VertexFormatElement$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import { $Vector3f$$Type } from "packages/org/joml/$Vector3f"
import { $IForgeVertexConsumer } from "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer"
import { $PoseStack$Pose$$Type } from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $Matrix3f$$Type } from "packages/org/joml/$Matrix3f"
import { $BakedQuad$$Type } from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $VertexConsumer extends $IForgeVertexConsumer {
"applyBakedLighting"(int0: integer, byteBuffer1: $ByteBuffer$$Type): integer
"applyBakedNormals"(vector3f0: $Vector3f$$Type, byteBuffer1: $ByteBuffer$$Type, matrix3f2: $Matrix3f$$Type): void
"color"(int0: integer, int1: integer, int2: integer, int3: integer): $VertexConsumer
"color"(int0: integer): $VertexConsumer
"color"(float0: float, float1: float, float2: float, float3: float): $VertexConsumer
"defaultColor"(int0: integer, int1: integer, int2: integer, int3: integer): void
"endVertex"(): void
"misc"(vertexFormatElement0: $VertexFormatElement$$Type, ...int1s: integer[]): $VertexConsumer
"normal"(float0: float, float1: float, float2: float): $VertexConsumer
"normal"(matrix3f0: $Matrix3f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"overlayCoords"(int0: integer): $VertexConsumer
"overlayCoords"(int0: integer, int1: integer): $VertexConsumer
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, int5: integer, int6: integer): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, float6: float, int7s: integer[], int8: integer, boolean9: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2s: float[], float3: float, float4: float, float5: float, int6s: integer[], int7: integer, boolean8: boolean): void
"putBulkData"(pose0: $PoseStack$Pose$$Type, bakedQuad1: $BakedQuad$$Type, float2: float, float3: float, float4: float, float5: float, int6: integer, int7: integer, boolean8: boolean): void
"unsetDefaultColor"(): void
"uv"(float0: float, float1: float): $VertexConsumer
"uv2"(int0: integer, int1: integer): $VertexConsumer
"uv2"(int0: integer): $VertexConsumer
"vertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer, int10: integer, float11: float, float12: float, float13: float): void
"vertex"(matrix4f0: $Matrix4f$$Type, float1: float, float2: float, float3: float): $VertexConsumer
"vertex"(double0: double, double1: double, double2: double): $VertexConsumer
}

export namespace $VertexConsumer {
const probejs$$marker: never
}
export abstract class $VertexConsumer$$Static implements $VertexConsumer {
}
}

declare module "packages/com/mojang/blaze3d/pipeline/$RenderTarget" {
import { $Blaze3dRenderTargetExt } from "packages/net/irisshaders/iris/targets/$Blaze3dRenderTargetExt"

export class $RenderTarget implements $Blaze3dRenderTargetExt {
readonly "useDepth": boolean

constructor(boolean0: boolean)

public "bindRead"(): void
public "bindWrite"(boolean0: boolean): void
public "blitToScreen"(int0: integer, int1: integer, boolean2: boolean): void
public "blitToScreen"(int0: integer, int1: integer): void
public "checkStatus"(): void
public "clear"(boolean0: boolean): void
public "copyDepthFrom"(renderTarget0: $RenderTarget$$Type): void
public "createBuffers"(int0: integer, int1: integer, boolean2: boolean): void
public "destroyBuffers"(): void
public "enableStencil"(): void
public "finalize"(): void
public "getColorTextureId"(): integer
public "getDepthTextureId"(): integer
public "iris$getColorBufferVersion"(): integer
public "iris$getDepthBufferVersion"(): integer
public "isStencilEnabled"(): boolean
public "resize"(int0: integer, int1: integer, boolean2: boolean): void
public "setClearColor"(float0: float, float1: float, float2: float, float3: float): void
public "setFilterMode"(int0: integer): void
public "unbindRead"(): void
public "unbindWrite"(): void
get "filterMode"(): integer
set "filterMode"(value: integer)
get "frameBufferId"(): integer
set "frameBufferId"(value: integer)
get "height"(): integer
set "height"(value: integer)
get "viewHeight"(): integer
set "viewHeight"(value: integer)
get "viewWidth"(): integer
set "viewWidth"(value: integer)
get "width"(): integer
set "width"(value: integer)
get "colorTextureId"(): integer
get "depthTextureId"(): integer
get "stencilEnabled"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/platform/$Monitor" {
import { $VideoMode, $VideoMode$$Type } from "packages/com/mojang/blaze3d/platform/$VideoMode"
import { $Optional$$Type } from "packages/java/util/$Optional"

export class $Monitor {
constructor(long0: long)

public "getCurrentMode"(): $VideoMode
public "getMode"(int0: integer): $VideoMode
public "getModeCount"(): integer
public "getMonitor"(): long
public "getPreferredVidMode"(optional0: $Optional$$Type<$VideoMode$$Type>): $VideoMode
public "getVideoModeIndex"(videoMode0: $VideoMode$$Type): integer
public "getX"(): integer
public "getY"(): integer
public "refreshVideoModes"(): void
get "currentMode"(): $VideoMode
get "modeCount"(): integer
get "monitor"(): long
get "x"(): integer
get "y"(): integer
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexBuffer" {
import { $VertexFormat$Mode, $VertexFormat$Mode$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode"
import { $VertexBuffer$Usage$$Type } from "packages/com/mojang/blaze3d/vertex/$VertexBuffer$Usage"
import { $BufferBuilder$RenderedBuffer$$Type } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer"
import { $VertexBufferHelper } from "packages/net/irisshaders/iris/helpers/$VertexBufferHelper"
import { $ShaderInstance$$Type } from "packages/net/minecraft/client/renderer/$ShaderInstance"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $Matrix4f$$Type } from "packages/org/joml/$Matrix4f"
import { $VertexFormat } from "packages/com/mojang/blaze3d/vertex/$VertexFormat"

export class $VertexBuffer implements $AutoCloseable, $VertexBufferHelper {
constructor(usage0: $VertexBuffer$Usage$$Type)

public "bind"(): void
public "close"(): void
public "draw"(): void
public "drawWithShader"(matrix4f0: $Matrix4f$$Type, matrix4f1: $Matrix4f$$Type, shaderInstance2: $ShaderInstance$$Type): void
public "getFormat"(): $VertexFormat
public "isInvalid"(): boolean
public "restoreBinding"(): void
public "saveBinding"(): void
public static "unbind"(): void
public "upload"(renderedBuffer0: $BufferBuilder$RenderedBuffer$$Type): void
get "arrayObjectId"(): integer
set "arrayObjectId"(value: integer)
get "mode"(): $VertexFormat$Mode
set "mode"(value: $VertexFormat$Mode$$Type)
get "format"(): $VertexFormat
get "invalid"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/audio/$Channel" {
import { $SoundBuffer$$Type } from "packages/com/mojang/blaze3d/audio/$SoundBuffer"
import { $AudioStream$$Type } from "packages/net/minecraft/client/sounds/$AudioStream"
import { $Vec3$$Type } from "packages/net/minecraft/world/phys/$Vec3"
import { $ChannelAccessor } from "packages/com/sonicether/soundphysics/mixin/$ChannelAccessor"

export class $Channel implements $ChannelAccessor {
static readonly "BUFFER_DURATION_SECONDS": integer

public "attachBufferStream"(audioStream0: $AudioStream$$Type): void
public "attachStaticBuffer"(soundBuffer0: $SoundBuffer$$Type): void
public "destroy"(): void
public "disableAttenuation"(): void
public "linearAttenuation"(float0: float): void
public "pause"(): void
public "play"(): void
public "playing"(): boolean
public "setLooping"(boolean0: boolean): void
public "setPitch"(float0: float): void
public "setRelative"(boolean0: boolean): void
public "setSelfPosition"(vec30: $Vec3$$Type): void
public "setVolume"(float0: float): void
public "stop"(): void
public "stopped"(): boolean
public "unpause"(): void
public "updateStream"(): void
set "looping"(value: boolean)
set "pitch"(value: float)
set "relative"(value: boolean)
set "selfPosition"(value: $Vec3$$Type)
set "volume"(value: float)
}
}

declare module "packages/com/mojang/blaze3d/vertex/$BufferBuilder$RenderedBuffer" {
import { $BufferBuilder$DrawState } from "packages/com/mojang/blaze3d/vertex/$BufferBuilder$DrawState"
import { $ByteBuffer } from "packages/java/nio/$ByteBuffer"

export class $BufferBuilder$RenderedBuffer {
public "drawState"(): $BufferBuilder$DrawState
public "indexBuffer"(): $ByteBuffer
public "isEmpty"(): boolean
public "release"(): void
public "vertexBuffer"(): $ByteBuffer
get "empty"(): boolean
}
}

declare module "packages/com/mojang/blaze3d/platform/$InputConstants$Key" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $LazyLoadedValue, $LazyLoadedValue$$Type } from "packages/net/minecraft/util/$LazyLoadedValue"
import { $OptionalInt } from "packages/java/util/$OptionalInt"
import { $InputConstants$Type } from "packages/com/mojang/blaze3d/platform/$InputConstants$Type"
import { $AccessInputConstantsKey } from "packages/com/blamejared/controlling/mixin/$AccessInputConstantsKey"

export class $InputConstants$Key implements $AccessInputConstantsKey {
public "getDisplayName"(): $Component
public "getName"(): string
public "getNumericKeyValue"(): $OptionalInt
public "getType"(): $InputConstants$Type
public "getValue"(): integer
get "displayName"(): $LazyLoadedValue<$Component>
set "displayName"(value: $LazyLoadedValue$$Type<$Component$$Type>)
get "name"(): string
get "numericKeyValue"(): $OptionalInt
get "type"(): $InputConstants$Type
get "value"(): integer
}
}

declare module "packages/com/mojang/blaze3d/font/$SheetGlyphInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheetGlyphInfo {
"getBearingX"(): float
"getBearingY"(): float
"getDown"(): float
"getLeft"(): float
"getOversample"(): float
"getPixelHeight"(): integer
"getPixelWidth"(): integer
"getRight"(): float
"getUp"(): float
"isColored"(): boolean
"upload"(int0: integer, int1: integer): void
get "bearingX"(): float
get "bearingY"(): float
get "down"(): float
get "left"(): float
get "oversample"(): float
get "pixelHeight"(): integer
get "pixelWidth"(): integer
get "right"(): float
get "up"(): float
get "colored"(): boolean
}

export namespace $SheetGlyphInfo {
const probejs$$marker: never
}
export abstract class $SheetGlyphInfo$$Static implements $SheetGlyphInfo {
}
}

declare module "packages/com/mojang/blaze3d/vertex/$VertexFormat$Mode" {
import { $Enum } from "packages/java/lang/$Enum"

export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
static readonly "DEBUG_LINES": $VertexFormat$Mode
static readonly "DEBUG_LINE_STRIP": $VertexFormat$Mode
static readonly "LINES": $VertexFormat$Mode
static readonly "LINE_STRIP": $VertexFormat$Mode
static readonly "QUADS": $VertexFormat$Mode
static readonly "TRIANGLES": $VertexFormat$Mode
static readonly "TRIANGLE_FAN": $VertexFormat$Mode
static readonly "TRIANGLE_STRIP": $VertexFormat$Mode
readonly "asGLMode": integer
readonly "connectedPrimitives": boolean
readonly "primitiveLength": integer
readonly "primitiveStride": integer

public "indexCount"(int0: integer): integer
public static "valueOf"(string0: string): $VertexFormat$Mode
public static "values"(): $VertexFormat$Mode[]
}
}

declare module "packages/com/mojang/blaze3d/platform/$NativeImage" {
import { $Path$$Type } from "packages/java/nio/file/$Path"
import { $NativeImageAccessor } from "packages/dev/tr7zw/skinlayers/accessor/$NativeImageAccessor"
import { $NativeImageAccessor as $NativeImageAccessor$0 } from "packages/me/jellysquid/mods/sodium/mixin/features/textures/$NativeImageAccessor"
import { $File$$Type } from "packages/java/io/$File"
import { $NativeImageAccessor as $NativeImageAccessor$1 } from "packages/com/corosus/watut/mixin/client/$NativeImageAccessor"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $InputStream$$Type } from "packages/java/io/$InputStream"
import { $STBTTFontinfo$$Type } from "packages/org/lwjgl/stb/$STBTTFontinfo"
import { $NativeImage$Format, $NativeImage$Format$$Type } from "packages/com/mojang/blaze3d/platform/$NativeImage$Format"
import { $ByteBuffer$$Type } from "packages/java/nio/$ByteBuffer"
import { $IntUnaryOperator$$Type } from "packages/java/util/function/$IntUnaryOperator"

export class $NativeImage implements $AutoCloseable, $NativeImageAccessor$1, $NativeImageAccessor, $NativeImageAccessor$0 {
constructor(format0: $NativeImage$Format$$Type, int1: integer, int2: integer, boolean3: boolean)
constructor(int0: integer, int1: integer, boolean2: boolean)

public "applyToAllPixels"(intUnaryOperator0: $IntUnaryOperator$$Type): void
public "asByteArray"(): byte[]
public "blendPixel"(int0: integer, int1: integer, int2: integer): void
public "close"(): void
public "copyFrom"(nativeImage0: $NativeImage$$Type): void
public "copyFromFont"(sTBTTFontinfo0: $STBTTFontinfo$$Type, int1: integer, int2: integer, int3: integer, float4: float, float5: float, float6: float, float7: float, int8: integer, int9: integer): void
public "copyRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, boolean6: boolean, boolean7: boolean): void
public "copyRect"(nativeImage0: $NativeImage$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "downloadDepthBuffer"(float0: float): void
public "downloadTexture"(int0: integer, boolean1: boolean): void
public "drawPixels"(): void
public "fillRect"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "flipY"(): void
public "format"(): $NativeImage$Format
public "getBlueOrLuminance"(int0: integer, int1: integer): byte
public "getGreenOrLuminance"(int0: integer, int1: integer): byte
public "getHeight"(): integer
public "getLuminanceOrAlpha"(int0: integer, int1: integer): byte
public "getPixelRGBA"(int0: integer, int1: integer): integer
public "getPixelsRGBA"(): integer[]
public "getRedOrLuminance"(int0: integer, int1: integer): byte
public "getWidth"(): integer
/** @deprecated */
public "makePixelArray"(): integer[]
public "mappedCopy"(intUnaryOperator0: $IntUnaryOperator$$Type): $NativeImage
public static "read"(inputStream0: $InputStream$$Type): $NativeImage
public static "read"(format0: $NativeImage$Format$$Type, byteBuffer1: $ByteBuffer$$Type): $NativeImage
public static "read"(byteBuffer0: $ByteBuffer$$Type): $NativeImage
public static "read"(format0: $NativeImage$Format$$Type, inputStream1: $InputStream$$Type): $NativeImage
public static "read"(byte0s: byte[]): $NativeImage
public "resizeSubRectTo"(int0: integer, int1: integer, int2: integer, int3: integer, nativeImage4: $NativeImage$$Type): void
public "setPixelLuminance"(int0: integer, int1: integer, byte2: byte): void
public "setPixelRGBA"(int0: integer, int1: integer, int2: integer): void
public "skinlayers$isAllocated"(): boolean
public "untrack"(): void
public "upload"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean, boolean9: boolean, boolean10: boolean): void
public "upload"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, boolean7: boolean, boolean8: boolean): void
public "upload"(int0: integer, int1: integer, int2: integer, boolean3: boolean): void
public "writeToFile"(path0: $Path$$Type): void
public "writeToFile"(file0: $File$$Type): void
get "pixels"(): long
set "pixels"(value: long)
get "height"(): integer
get "pixelsRGBA"(): integer[]
get "width"(): integer
}
}

declare module "packages/com/mojang/blaze3d/platform/$Window" {
import { $ScreenManager$$Type } from "packages/com/mojang/blaze3d/platform/$ScreenManager"
import { $VideoMode, $VideoMode$$Type } from "packages/com/mojang/blaze3d/platform/$VideoMode"
import { $Monitor } from "packages/com/mojang/blaze3d/platform/$Monitor"
import { $WindowEventHandler$$Type } from "packages/com/mojang/blaze3d/platform/$WindowEventHandler"
import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer"
import { $WindowKJS } from "packages/dev/latvian/mods/kubejs/core/$WindowKJS"
import { $DisplayData$$Type } from "packages/com/mojang/blaze3d/platform/$DisplayData"
import { $CallbackInfo$$Type } from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import { $AutoCloseable } from "packages/java/lang/$AutoCloseable"
import { $List, $List$$Type } from "packages/java/util/$List"
import { $Optional, $Optional$$Type } from "packages/java/util/$Optional"
import { $InputStream, $InputStream$$Type } from "packages/java/io/$InputStream"
import { $IconSet$$Type } from "packages/com/mojang/blaze3d/platform/$IconSet"
import { $IoSupplier, $IoSupplier$$Type } from "packages/net/minecraft/server/packs/resources/$IoSupplier"
import { $PackResources$$Type } from "packages/net/minecraft/server/packs/$PackResources"

export class $Window implements $AutoCloseable, $WindowKJS {
constructor(windowEventHandler0: $WindowEventHandler$$Type, screenManager1: $ScreenManager$$Type, displayData2: $DisplayData$$Type, string3: string, string4: string)

public "calculateScale"(int0: integer, boolean1: boolean): integer
public "changeFullscreenVideoMode"(): void
public static "checkGlfwError"(biConsumer0: $BiConsumer$$Type<integer, string>): void
public "close"(): void
public "defaultErrorCallback"(int0: integer, long1: long): void
public "findBestMonitor"(): $Monitor
public "getFramerateLimit"(): integer
public "getGuiScale"(): double
public "getGuiScaledHeight"(): integer
public "getGuiScaledWidth"(): integer
public "getHeight"(): integer
public "getPreferredFullscreenVideoMode"(): $Optional<$VideoMode>
public "getRefreshRate"(): integer
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getWidth"(): integer
public "getWindow"(): long
public "getX"(): integer
public "getY"(): integer
public "handler$fng000$startQuartz"(windowEventHandler0: $WindowEventHandler$$Type, screenManager1: $ScreenManager$$Type, displayData2: $DisplayData$$Type, string3: string, string4: string, callbackInfo5: $CallbackInfo$$Type): void
public "isFullscreen"(): boolean
public "kjs$loadIcons"(original: $List$$Type<$IoSupplier$$Type<$InputStream$$Type>>): $List<$IoSupplier<$InputStream>>
public "setDefaultErrorCallback"(): void
public "setErrorSection"(string0: string): void
public "setFramerateLimit"(int0: integer): void
public "setGuiScale"(double0: double): void
public "setHeight"(int0: integer): void
public "setIcon"(packResources0: $PackResources$$Type, iconSet1: $IconSet$$Type): void
public "setPreferredFullscreenVideoMode"(optional0: $Optional$$Type<$VideoMode$$Type>): void
public "setTitle"(string0: string): void
public "setWidth"(int0: integer): void
public "setWindowed"(int0: integer, int1: integer): void
public "shouldClose"(): boolean
public "toggleFullScreen"(): void
public "updateDisplay"(): void
public "updateRawMouseInput"(boolean0: boolean): void
public "updateVsync"(boolean0: boolean): void
get "dirty"(): boolean
set "dirty"(value: boolean)
get "framerateLimit"(): integer
get "guiScale"(): double
get "guiScaledHeight"(): integer
get "guiScaledWidth"(): integer
get "height"(): integer
get "preferredFullscreenVideoMode"(): $Optional<$VideoMode>
get "refreshRate"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "width"(): integer
get "window"(): long
get "x"(): integer
get "y"(): integer
get "fullscreen"(): boolean
set "errorSection"(value: string)
set "framerateLimit"(value: integer)
set "guiScale"(value: double)
set "height"(value: integer)
set "preferredFullscreenVideoMode"(value: $Optional$$Type<$VideoMode$$Type>)
set "title"(value: string)
set "width"(value: integer)
}
}

